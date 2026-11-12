// Servidor do nowish (Cloudflare Worker).
// Rotas em /api/*; todo o resto é servido como arquivo estático do app.
//
// Variáveis (wrangler.jsonc): GOOGLE_CLIENT_ID, MAIL_FROM, APP_NAME
// Segredo (painel do Cloudflare): RESEND_API_KEY
// Banco: D1 com binding DB

const SESSION_DAYS = 180;
const CODE_MINUTES = 10;
const MAX_CODES_PER_HOUR = 5;
const MAX_CODE_ATTEMPTS = 5;
const MAX_PROGRESS_BYTES = 600 * 1024;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try {
      await ensureSchema(env);
      return await route(request, env, url);
    } catch (err) {
      console.error(err);
      return json({ error: "server_error" }, 500);
    }
  },
};

// ---------- Banco ----------
let schemaReady = false;
async function ensureSchema(env) {
  if (schemaReady) return;
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT, picture TEXT,
      google_sub TEXT UNIQUE, created_at INTEGER NOT NULL)`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS sessions (
      token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL, created_at INTEGER NOT NULL, expires_at INTEGER NOT NULL)`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS codes (
      email TEXT PRIMARY KEY, code_hash TEXT, expires_at INTEGER, attempts INTEGER DEFAULT 0,
      sent_count INTEGER DEFAULT 0, window_start INTEGER DEFAULT 0)`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS progress (
      user_id TEXT PRIMARY KEY, data TEXT NOT NULL, version INTEGER NOT NULL, updated_at INTEGER NOT NULL)`),
    env.DB.prepare(`CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id)`),
  ]);
  schemaReady = true;
}

// ---------- Rotas ----------
async function route(request, env, url) {
  const p = url.pathname, m = request.method;
  if (p === "/api/config" && m === "GET") {
    return json({ googleClientId: env.GOOGLE_CLIENT_ID || null, emailLogin: !!env.RESEND_API_KEY });
  }
  if (p === "/api/auth/google" && m === "POST") return authGoogle(request, env);
  if (p === "/api/auth/email/start" && m === "POST") return emailStart(request, env);
  if (p === "/api/auth/email/verify" && m === "POST") return emailVerify(request, env);

  const user = await currentUser(request, env);
  if (!user) return json({ error: "unauthorized" }, 401);

  if (p === "/api/me" && m === "GET") return json({ user: publicUser(user) });
  if (p === "/api/logout" && m === "POST") {
    await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256(bearer(request))).run();
    return json({ ok: true });
  }
  if (p === "/api/account" && m === "DELETE") {
    await env.DB.batch([
      env.DB.prepare("DELETE FROM progress WHERE user_id = ?").bind(user.id),
      env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(user.id),
      env.DB.prepare("DELETE FROM codes WHERE email = ?").bind(user.email),
      env.DB.prepare("DELETE FROM users WHERE id = ?").bind(user.id),
    ]);
    return json({ ok: true });
  }
  if (p === "/api/progress" && m === "GET") {
    const row = await env.DB.prepare("SELECT data, version, updated_at FROM progress WHERE user_id = ?").bind(user.id).first();
    return json(row ? { data: JSON.parse(row.data), version: row.version, updatedAt: row.updated_at } : { data: null, version: 0 });
  }
  if (p === "/api/progress" && m === "PUT") {
    const raw = await request.text();
    if (raw.length > MAX_PROGRESS_BYTES) return json({ error: "too_large" }, 413);
    let body; try { body = JSON.parse(raw); } catch (e) { return json({ error: "bad_json" }, 400); }
    if (!body || typeof body.data !== "object") return json({ error: "bad_request" }, 400);
    const row = await env.DB.prepare("SELECT version FROM progress WHERE user_id = ?").bind(user.id).first();
    const current = row ? row.version : 0;
    // Só grava se o app partiu da versão mais recente; senão ele busca, mescla e tenta de novo.
    if ((body.baseVersion || 0) !== current) return json({ error: "conflict", version: current }, 409);
    const next = current + 1, now = Date.now();
    await env.DB.prepare(`INSERT INTO progress (user_id, data, version, updated_at) VALUES (?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, version = excluded.version, updated_at = excluded.updated_at`)
      .bind(user.id, JSON.stringify(body.data), next, now).run();
    return json({ version: next, updatedAt: now });
  }
  return json({ error: "not_found" }, 404);
}

// ---------- Login com Google ----------
let googleKeys = null, googleKeysAt = 0;
async function getGoogleKeys() {
  if (googleKeys && Date.now() - googleKeysAt < 3600e3) return googleKeys;
  const res = await fetch("https://www.googleapis.com/oauth2/v3/certs");
  googleKeys = (await res.json()).keys; googleKeysAt = Date.now();
  return googleKeys;
}
async function authGoogle(request, env) {
  if (!env.GOOGLE_CLIENT_ID) return json({ error: "google_disabled" }, 400);
  const { credential } = await readJson(request);
  if (!credential) return json({ error: "bad_request" }, 400);
  const claims = await verifyGoogleToken(credential, env.GOOGLE_CLIENT_ID);
  if (!claims || !claims.email || !claims.email_verified) return json({ error: "invalid_token" }, 401);
  const email = String(claims.email).toLowerCase();
  let user = await env.DB.prepare("SELECT * FROM users WHERE google_sub = ? OR email = ?").bind(claims.sub, email).first();
  if (!user) {
    user = { id: crypto.randomUUID(), email, name: claims.name || null, picture: claims.picture || null, google_sub: claims.sub, created_at: Date.now() };
    await env.DB.prepare("INSERT INTO users (id, email, name, picture, google_sub, created_at) VALUES (?, ?, ?, ?, ?, ?)")
      .bind(user.id, user.email, user.name, user.picture, user.google_sub, user.created_at).run();
  } else if (!user.google_sub) {
    await env.DB.prepare("UPDATE users SET google_sub = ?, name = COALESCE(name, ?), picture = COALESCE(picture, ?) WHERE id = ?")
      .bind(claims.sub, claims.name || null, claims.picture || null, user.id).run();
  }
  return json({ token: await createSession(env, user.id), user: publicUser({ ...user, name: user.name || claims.name, picture: user.picture || claims.picture }) });
}
async function verifyGoogleToken(token, clientId) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const header = JSON.parse(b64urlText(parts[0])), payload = JSON.parse(b64urlText(parts[1]));
  const jwk = (await getGoogleKeys()).find((k) => k.kid === header.kid);
  if (!jwk || header.alg !== "RS256") return null;
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64urlBytes(parts[2]), new TextEncoder().encode(parts[0] + "." + parts[1]));
  if (!ok) return null;
  const now = Math.floor(Date.now() / 1000);
  if (payload.aud !== clientId) return null;
  if (payload.iss !== "accounts.google.com" && payload.iss !== "https://accounts.google.com") return null;
  if (payload.exp < now) return null;
  return payload;
}

// ---------- Login com código por e-mail ----------
async function emailStart(request, env) {
  if (!env.RESEND_API_KEY) return json({ error: "email_disabled" }, 400);
  const { email: raw } = await readJson(request);
  const email = String(raw || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return json({ error: "invalid_email" }, 400);
  const now = Date.now();
  const row = await env.DB.prepare("SELECT * FROM codes WHERE email = ?").bind(email).first();
  let sent = row ? row.sent_count : 0, windowStart = row ? row.window_start : now;
  if (now - windowStart > 3600e3) { sent = 0; windowStart = now; }
  if (sent >= MAX_CODES_PER_HOUR) return json({ error: "too_many" }, 429);
  const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, "0");
  await env.DB.prepare(`INSERT INTO codes (email, code_hash, expires_at, attempts, sent_count, window_start) VALUES (?, ?, ?, 0, ?, ?)
    ON CONFLICT(email) DO UPDATE SET code_hash = excluded.code_hash, expires_at = excluded.expires_at, attempts = 0,
    sent_count = excluded.sent_count, window_start = excluded.window_start`)
    .bind(email, await sha256(email + ":" + code), now + CODE_MINUTES * 60e3, sent + 1, windowStart).run();
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + env.RESEND_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.MAIL_FROM || "nowish <onboarding@resend.dev>",
      to: [email],
      subject: "Seu código do nowish: " + code,
      text: "Seu código para entrar no nowish é " + code + ".\n\nEle vale por " + CODE_MINUTES + " minutos. Se não foi você que pediu, é só ignorar este e-mail.",
      html: '<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:420px;margin:auto;padding:24px;color:#131729">' +
        '<p style="font-size:22px;font-weight:800;margin:0 0 16px">nowish<span style="color:#FFD23F">.</span></p>' +
        '<p style="margin:0 0 8px">Seu código para entrar:</p>' +
        '<p style="font-size:34px;font-weight:800;letter-spacing:6px;margin:0 0 16px">' + code + '</p>' +
        '<p style="color:#667085;font-size:14px;margin:0">Ele vale por ' + CODE_MINUTES + ' minutos. Se não foi você que pediu, é só ignorar este e-mail.</p></div>',
    }),
  });
  if (!res.ok) { console.error("resend", res.status, await res.text()); return json({ error: "send_failed" }, 502); }
  return json({ ok: true });
}
async function emailVerify(request, env) {
  const body = await readJson(request);
  const email = String(body.email || "").trim().toLowerCase(), code = String(body.code || "").replace(/\D/g, "");
  const row = await env.DB.prepare("SELECT * FROM codes WHERE email = ?").bind(email).first();
  if (!row || !row.code_hash || row.expires_at < Date.now()) return json({ error: "expired" }, 400);
  if (row.attempts >= MAX_CODE_ATTEMPTS) return json({ error: "too_many" }, 429);
  if ((await sha256(email + ":" + code)) !== row.code_hash) {
    await env.DB.prepare("UPDATE codes SET attempts = attempts + 1 WHERE email = ?").bind(email).run();
    return json({ error: "wrong_code" }, 400);
  }
  await env.DB.prepare("UPDATE codes SET code_hash = NULL WHERE email = ?").bind(email).run();
  let user = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first();
  if (!user) {
    user = { id: crypto.randomUUID(), email, name: null, picture: null, created_at: Date.now() };
    await env.DB.prepare("INSERT INTO users (id, email, created_at) VALUES (?, ?, ?)").bind(user.id, email, user.created_at).run();
  }
  return json({ token: await createSession(env, user.id), user: publicUser(user) });
}

// ---------- Sessões ----------
async function createSession(env, userId) {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const token = [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
  const now = Date.now();
  await env.DB.prepare("INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)")
    .bind(await sha256(token), userId, now, now + SESSION_DAYS * 864e5).run();
  return token;
}
async function currentUser(request, env) {
  const token = bearer(request); if (!token) return null;
  const row = await env.DB.prepare(`SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > ?`).bind(await sha256(token), Date.now()).first();
  return row || null;
}

// ---------- Utilidades ----------
function publicUser(u) { return { email: u.email, name: u.name || null, picture: u.picture || null }; }
function bearer(request) { const h = request.headers.get("Authorization") || ""; return h.startsWith("Bearer ") ? h.slice(7) : ""; }
async function readJson(request) { try { return await request.json(); } catch (e) { return {}; } }
function json(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}
async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function b64urlBytes(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "=";
  const bin = atob(s), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function b64urlText(s) { return new TextDecoder().decode(b64urlBytes(s)); }

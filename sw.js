// Mude a versão a cada atualização de conteúdo para o iPhone baixar os arquivos novos.
const VERSION = "2026-11-12-39";
const CACHE = "ingles-" + VERSION;
const FILES = ["./", "index.html", "privacy.html", "app.js", "content.js", "content-m1.js", "content-m2.js", "content-m3.js", "content-a2.js", "content-b1.js", "content-a1.js", "content-b2.js", "content-c1.js", "content-c2.js", "content-viagem.js", "content-glossario.js", "content-exemplos.js", "course.js", "manifest.webmanifest",
  "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "fonts/bricolage.woff2"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE)
    .then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primeiro o que está salvo no aparelho (funciona sem internet e não trava com sinal fraco).
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  // O servidor (/api) e o login do Google sempre vão direto para a rede.
  if (e.request.method !== "GET" || u.origin !== location.origin || u.pathname.indexOf("/api/") >= 0) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit ||
      fetch(e.request).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
        return res;
      }).catch(() => caches.match("index.html")))
  );
});

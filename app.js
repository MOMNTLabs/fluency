(function () {
  "use strict";

  // ---------- Armazenamento (mesma chave da versão anterior, para não perder o progresso) ----------
  var KEY = "ino-progress-v1";
  var state = load();
  function blank() { return { results: {}, review: {}, days: {}, sections: {}, mastered: 0 }; }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.results) { var b = blank(); for (var k in b) if (!(k in s)) s[k] = b[k]; return s; }
    } catch (e) {}
    return blank();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} if (typeof scheduleSync === "function") scheduleSync(); }

  // ---------- Datas ----------
  function iso(d) { d = d || new Date(); var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day; }
  function today() { return iso(); }
  function addDays(n) { var d = new Date(); d.setDate(d.getDate() + n); return iso(d); }
  function streak() {
    var d = new Date(), n = 0, first = true;
    for (var i = 0; i < 400; i++) {
      var k = iso(d), wd = d.getDay();
      if (state.days[k]) n++;
      else if (wd === 0 || wd === 6 || first) { /* fim de semana ou hoje ainda sem estudo */ }
      else break;
      first = false; d.setDate(d.getDate() - 1);
    }
    return n;
  }
  var DOW = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  var MON = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  function longDate() { var d = new Date(); return DOW[d.getDay()] + ", " + d.getDate() + " de " + MON[d.getMonth()]; }
  function shortDate(isoStr) { var p = isoStr.split("-"); return p[2] + "/" + p[1]; }

  // ---------- Índice do conteúdo ----------
  var WEEKS = window.WEEKS || [];
  var ITEMS = {}, SECTIONS = {};
  // Cada módulo ganha uma etapa de escuta, feita com as frases de leitura.
  WEEKS.forEach(function (w) {
    var r = w.sections.filter(function (s) { return s.type === "reading"; })[0];
    if (r && !w.sections.some(function (s) { return s.type === "listen"; })) {
      w.sections.splice(w.sections.indexOf(r) + 1, 0, { id: w.id + "-escuta", type: "listen", title: "Escuta", subtitle: "Ouça e monte a frase",
        items: r.items.map(function (x) { return { en: x.en, pt: x.pt, full: x.en }; }) });
    }
  });
  WEEKS.forEach(function (w) {
    w.sections.forEach(function (s) {
      SECTIONS[s.id] = { section: s, week: w };
      (s.items || []).forEach(function (it, i) {
        it.id = s.id + "-" + (i + 1); it.n = i + 1;
        ITEMS[it.id] = { item: it, section: s, week: w };
      });
    });
  });
  function isQuiz(s) { return s.type === "fill" || s.type === "translate" || s.type === "listen"; }
  function goal() { return state.goal || 20; }
  WEEKS.forEach(function (w, i) { w.idx = i; w.num = i + 1; });
  function complete(w) { return w.sections.every(function (s) { return state.sections[s.id] && state.sections[s.id].done; }); }
  function started(w) { return w.sections.some(function (s) { return state.sections[s.id]; }); }
  // Níveis: o nivelamento define onde a pessoa começa. Níveis abaixo ficam livres para praticar.
  var LEVELS = window.LEVELS || [], LV = ["A1", "A2", "B1", "B2", "C1", "C2"];
  function lvl(code) { return LV.indexOf(code); }
  function placement() { return state.placement || "A2"; }
  function levelInfo(code) { return LEVELS.filter(function (L) { return L.id === code; })[0] || { id: code, name: "" }; }
  function modulesOf(code) { return WEEKS.filter(function (w) { return w.level === code; }); }
  // Um módulo libera quando o anterior é concluído.
  function unlocked(w) {
    var pl = lvl(placement()), wl = lvl(w.level);
    if (wl < pl) return true;
    if (w.idx === 0 || (wl === pl && modulesOf(w.level)[0] === w)) return true;
    return complete(WEEKS[w.idx - 1]) || started(w);
  }
  function currentModule() {
    var pl = lvl(placement());
    var mine = WEEKS.filter(function (w) { return lvl(w.level) >= pl && unlocked(w); });
    var open = mine.length ? mine : WEEKS.filter(unlocked);
    return open.filter(function (w) { return !complete(w); })[0] || open[open.length - 1];
  }
  // Nível que a pessoa está estudando e quanto já fez dele.
  function studyLevel() {
    var cur = currentModule(), code = cur ? cur.level : placement(), mods = modulesOf(code);
    var done = mods.filter(complete).length;
    return { code: code, info: levelInfo(code), done: done, total: mods.length, pct: mods.length ? Math.round(done / mods.length * 100) : 0 };
  }
  function daysBetween(a, b) { return Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000); }
  // Chamado quando uma seção é concluída. Devolve o módulo, se ele acabou de ser concluído.
  function sectionFinished(sectionId, extra) {
    var w = SECTIONS[sectionId].week, was = complete(w);
    state.modStart = state.modStart || {};
    if (!state.modStart[w.id]) state.modStart[w.id] = today();
    var prev = state.sections[sectionId] || {};
    state.sections[sectionId] = Object.assign(prev, extra || {}, { done: true });
    save();
    if (!was && complete(w)) { state.modDone = state.modDone || {}; state.modDone[w.id] = today(); save(); return w; }
    return null;
  }
  // Revisão misturada: metade das questões que você já errou, o resto sorteado dos módulos anteriores.
  function buildMix(sec) {
    var wk = SECTIONS[sec.id].week, pool = [];
    WEEKS.forEach(function (x) {
      if (x.idx < wk.idx) x.sections.forEach(function (s) { if (s.type === "fill") s.items.forEach(function (it) { pool.push(it.id); }); });
    });
    // No primeiro módulo do curso ainda não há passado: usa as questões do próprio módulo.
    if (!pool.length) wk.sections.forEach(function (s) { if (s.type === "fill") s.items.forEach(function (it) { pool.push(it.id); }); });
    var weak = shuffle(pool.filter(function (id) { return state.results[id] && state.results[id].wrong > 0; }));
    var rest = shuffle(pool.filter(function (id) { return weak.indexOf(id) < 0; }));
    var n = sec.count || 8, half = Math.ceil(n / 2);
    var pick = weak.slice(0, half).concat(rest.slice(0, n - Math.min(half, weak.length)));
    if (pick.length < n) pick = pick.concat(weak.slice(half, half + n - pick.length));
    return shuffle(pick);
  }

  // ---------- Ícones ----------
  function svg(p, w) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (w || 2.2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; }
  var I = {
    back: svg('<path d="M15 5l-7 7 7 7"/>', 2.6),
    next: svg('<path d="M9 5l7 7-7 7"/>', 2.6),
    check: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 3),
    x: svg('<path d="M6 6l12 12M18 6L6 18"/>', 3),
    sound: svg('<path d="M4 9.5v5h3.5L12 19V5L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>', 2),
    flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#FFB020" d="M12 2.5c.6 3.2 4.8 5.4 4.8 10.3A4.8 4.8 0 0 1 12 17.6a4.8 4.8 0 0 1-4.8-4.8c0-2.1 1-3.6 2-4.6.2 1.6 1 2.6 2 2.9-.4-3 .2-6.2.8-8.6z"/><path fill="#FF6B2C" d="M12 21.5a5.5 5.5 0 0 1-5.5-5.5c0-.8.2-1.6.5-2.3a5.3 5.3 0 0 0 10 0c.3.7.5 1.5.5 2.3a5.5 5.5 0 0 1-5.5 5.5z"/></svg>',
    done: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 2.6),
    lock: svg('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>', 2)
  };

  // ---------- Utilidades ----------
  var app = document.getElementById("app");
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function plain(t) { return String(t).replace(/[{}]/g, ""); }
  function fullHtml(t) { return esc(t).replace(/\{([^}]*)\}/g, "<b>$1</b>"); }
  function qHtml(t, fills) {
    var i = 0;
    // Com a lacuna preenchida, a dica entre parênteses sai para a frase ficar limpa.
    if (fills && fills.length && fills[0]) t = t.replace(/\s*\([^()]*\)/g, "");
    return esc(t).replace(/___/g, function () {
      var f = fills && fills[i++];
      return f ? '<span class="blank filled">' + esc(f) + '</span>' : '<span class="blank"></span>';
    });
  }
  function answerParts(full) { var m = full.match(/\{([^}]*)\}/g) || []; return m.map(function (x) { return x.slice(1, -1); }); }
  function norm(t) {
    return String(t).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[^a-z' ]+/g, " ").replace(/\s+/g, " ").trim();
  }
  function isRight(item, ans) {
    var a = norm(ans); if (!a) return false;
    return item.a.some(function (x) { var n = norm(x); return a === n || a === n.replace(/^'/, ""); });
  }
  function toast(msg) {
    var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }
  var voice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    var vs = speechSynthesis.getVoices();
    voice = vs.filter(function (v) { return /^en[-_]US/i.test(v.lang); })[0] || vs.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate) {
    if (!("speechSynthesis" in window)) { toast("Áudio indisponível neste aparelho"); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(plain(text)); u.lang = "en-US"; u.rate = rate || 0.9; if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }
  function listen(text) { return '<button class="listen" data-speak="' + esc(plain(text)) + '">' + I.sound + 'Ouvir</button>'; }
  app.addEventListener("click", function (e) {
    var b = e.target.closest("[data-speak]"); if (b) { e.stopPropagation(); speak(b.getAttribute("data-speak")); }
  });

  // ---------- Registro de respostas ----------
  function record(id, ok, answer, how) {
    var snap = { result: JSON.stringify(state.results[id] || null), review: JSON.stringify(state.review[id] || null), mastered: state.mastered,
      adapt: JSON.stringify({ t: state.recentTap || [], y: state.recentType || [], a: !!state.advanced }) };
    adapt(ok, how);
    var r = state.results[id] || (state.results[id] = { seen: 0, right: 0, wrong: 0 });
    r.seen++; r.at = today();
    var rv = state.review[id];
    if (ok) {
      r.right++; r.streak = (r.streak || 0) + 1;
      // Cada questão sobe no máximo um degrau por dia: reforçar ajuda, mas o domínio pede dias diferentes.
      if (rv && rv.lastAdv !== today()) {
        rv.lastAdv = today();
        rv.box++;
        if (rv.box >= 3) { delete state.review[id]; state.mastered++; }
        else rv.due = addDays(rv.box === 1 ? 3 : 7);
      }
    } else {
      r.wrong++; r.last = answer; r.streak = 0;
      state.review[id] = { box: 0, due: addDays(1), since: (rv && rv.since) || today(), lastAdv: today() };
    }
    state.days[today()] = (state.days[today()] || 0) + 1;
    save(); updateDot();
    return snap;
  }
  function undo(id, snap) {
    var r = JSON.parse(snap.result), rv = JSON.parse(snap.review);
    if (r) state.results[id] = r; else delete state.results[id];
    if (rv) state.review[id] = rv; else delete state.review[id];
    state.mastered = snap.mastered;
    if (snap.adapt) { var a = JSON.parse(snap.adapt); state.recentTap = a.t; state.recentType = a.y; state.advanced = a.a; }
    save(); updateDot();
  }
  function dueIds() { var t = today(); return Object.keys(state.review).filter(function (id) { return ITEMS[id] && state.review[id].due <= t; }); }
  function pendingIds() { return Object.keys(state.review).filter(function (id) { return ITEMS[id]; }); }
  function updateDot() { var n = dueIds().length, d = document.getElementById("dot"); d.hidden = !n; d.textContent = n; }

  // ---------- Navegação ----------
  var view = { name: "home" };
  function go(v) {
    if (v.name === "level" && !(view.name === "level" && view.code === v.code)) scrolledOnce = false;
    view = v; render(); if (v.name !== "level" || scrolledOnce) window.scrollTo(0, 0);
  }
  document.getElementById("tabbar").addEventListener("click", function (e) {
    var t = e.target.closest(".tab"); if (t) go({ name: t.getAttribute("data-tab") });
  });
  function setTabs() {
    var inReview = view.session && view.session.kind === "review";
    var map = { login: "errors", level: "home", placement: "errors", setup: "home", welcome: "home", home: "home", section: "home", quiz: inReview ? "review" : "home", done: inReview ? "review" : "home", review: "review", errors: "errors" };
    document.querySelectorAll(".tab").forEach(function (t) { t.classList.toggle("on", t.getAttribute("data-tab") === map[view.name]); });
  }
  function render() {
    setTabs();
    document.body.classList.toggle("focus", ["quiz", "welcome", "placement", "setup", "login"].indexOf(view.name) >= 0);
    ({ home: renderHome, section: renderSection, quiz: renderQuiz, done: renderDone, review: renderReview, errors: renderErrors, welcome: renderWelcome, placement: renderPlacement, setup: renderSetup, level: renderLevel, login: renderLogin })[view.name]();
  }
  function top(label, title, right) {
    return '<div class="top"><button class="icon-btn" id="back" aria-label="Voltar">' + I.back + '</button>' +
      '<div class="grow"><div class="label">' + esc(label) + '</div><div class="title">' + esc(title) + '</div></div>' + (right || "") + '</div>';
  }
  function bindBack(to) { var b = document.getElementById("back"); if (b) b.onclick = function () { go({ name: to || "home" }); }; }

  // ---------- Início: o percurso ----------
  // Uma cor por módulo, em ciclo. Discretas no conjunto, vivas o bastante para dar ritmo ao caminho.
  var MOD_COLORS = ["#4361EE", "#12A594", "#8B5CF6", "#F08C2E", "#E5508F", "#2B9AD8"];
  function modColor(w) { return MOD_COLORS[w.idx % MOD_COLORS.length]; }
  var TYPE_ICON = {
    summary: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',
    fill: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    translate: '<path d="M4 6h9M8.5 4v2M6 6c.5 3 2.5 5.5 5 6.5M11 6c-.8 3.5-3 6-6 7"/><path d="M13 20l3.5-8 3.5 8M14.2 17.5h4.6"/>',
    mix: '<path d="M4 7h3.5c2 0 3 1 4.5 3.5S14.5 17 16.5 17H20M4 17h3.5c1.3 0 2.2-.5 3-1.5M13.5 8.5c.8-1 1.7-1.5 3-1.5H20"/><path d="M17.5 4.5L20 7l-2.5 2.5M17.5 14.5L20 17l-2.5 2.5"/>',
    reading: '<path d="M5 6h14M5 10h14M5 14h9M5 18h6"/>',
    listen: '<path d="M4 13a8 8 0 0 1 16 0"/><rect x="3.5" y="13" width="4" height="6.5" rx="1.5"/><rect x="16.5" y="13" width="4" height="6.5" rx="1.5"/>',
    vocab: '<rect x="7" y="3.5" width="12" height="15" rx="2"/><path d="M5 7.5v11a2 2 0 0 0 2 2h9"/>'
  };
  var TROPHY = '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/>';
  function nodeAvailable(w, s) {
    if (!unlocked(w)) return false;
    var d = state.sections[s.id]; if (d && d.done) return true;
    var first = w.sections.filter(function (x) { return !(state.sections[x.id] && state.sections[x.id].done); })[0];
    return first === s;
  }
  var ZIG = [0, -1, -2, -1, 0, 1, 2, 1];
  var bubble = null, scrolledOnce = false;
  // Ícone de cada módulo, ligado ao tema.
  var MOD_ICON = {
    s1: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    s2: '<path d="M7 3.5h10M7 20.5h10M8 3.5c0 4 8 4.5 8 8.5s-8 4.5-8 8.5M16 3.5c0 4-8 4.5-8 8.5s8 4.5 8 8.5"/>',
    s3: '<circle cx="6" cy="5.5" r="2"/><circle cx="6" cy="18.5" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 7.5v9M18 10c0 4-5 4-11 7"/>',
    s4: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-5 4v-4h0.5A2.5 2.5 0 0 1 4 13.5z"/><path d="M9 9h.01M12 9h.01M15 9h.01"/>',
    s5: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    s6: '<path d="M4 12h6M14 7l5 5-5 5M10 12c0-3 2-5 4-5M10 12c0 3 2 5 4 5"/>',
    s7: '<path d="M4 6c3-1.5 13-1.5 16 0 0 6-3 11-8 13C7 17 4 12 4 6z"/><path d="M8.5 10.5c.8-.6 1.7-.6 2.5 0M13 10.5c.8-.6 1.7-.6 2.5 0M9.5 14.5c1.6 1 3.4 1 5 0"/>',
    s8: '<path d="M10 4h4v3a1.5 1.5 0 0 0 3 0h3v4h-3a1.5 1.5 0 0 0 0 3h3v4h-4v-3a1.5 1.5 0 0 0-3 0v3H4v-6h3a1.5 1.5 0 0 0 0-3H4V4z"/>',
    s9: '<circle cx="12" cy="12" r="8.5"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    s10: '<path d="M7 4L4 7l3 3M4 7h11a5 5 0 0 1 5 5M17 20l3-3-3-3M20 17H9a5 5 0 0 1-5-5"/>',
    s11: '<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/>',
    s12: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    a2m1: '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4.5v4h4"/><path d="M12 8v4l3 2"/>',
    a2m2: '<circle cx="12" cy="12" r="8.5"/><path d="M10 8.5l5 3.5-5 3.5z"/>',
    a2m3: '<path d="M4 12h15M13 6l6 6-6 6"/>',
    a2m4: '<path d="M6 20V11M12 20V4M18 20v-6"/>',
    a2m5: '<rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/><rect x="8.5" y="4" width="7" height="7" rx="1.5"/>',
    b1m3: '<rect x="3.5" y="6" width="17" height="13" rx="2"/><path d="M3.5 10h17M8 6l-1.5 4M13 6l-1.5 4M18 6l-1.5 4"/>',
    a1m1: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5"/>',
    a1m2: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
    a1m3: '<path d="M4 12V5a1 1 0 0 1 1-1h7l8 8-8 8z"/><circle cx="8.5" cy="8.5" r="1.3"/>',
    a1m4: '<circle cx="12" cy="12" r="4"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>',
    a1m5: '<path d="M9.5 4L7.5 20M16.5 4l-2 16M4.5 9h16M3.5 15h16"/>',
    a1m6: '<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c.8-3 3.2-4.5 6-4.5s5.2 1.5 6 4.5M15.5 14.6c2.3-.2 4.2 1 5 3.4"/>',
    b2m1: '<path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7v5l3 2M17 3.5l1.5 2.5 2.5 1"/>',
    b2m2: '<path d="M12 3l2.3 5.2L20 9l-4.3 3.8L17 18.5 12 15.6 7 18.5l1.3-5.7L4 9l5.7-.8z"/>',
    b2m3: '<path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l4 4 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-3-3z"/>',
    b2m4: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>',
    c1m1: '<path d="M8 20V4M4 8l4-4 4 4M16 4v16M12 16l4 4 4-4"/>',
    c1m2: '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8 7.5L20 18M8 16.5L20 6"/>',
    c1m3: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.3v.1"/>',
    c1m4: '<rect x="3" y="8" width="18" height="8" rx="4"/><circle cx="16" cy="12" r="2.3"/>',
    c1m5: '<path d="M6 4v8a6 6 0 0 0 12 0V4h-4v8a2 2 0 0 1-4 0V4z"/><path d="M6 8h4M14 8h4"/>',
    c1m6: '<rect x="3.5" y="6" width="17" height="12" rx="2"/><path d="M4 7l8 6 8-6"/>',
    c2m1: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    c2m2: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    c2m3: '<path d="M7 4h11a2 2 0 0 1 2 2v1h-4M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6"/><path d="M9 10h6M9 14h6"/>',
    c2m4: '<path d="M3 18l4.5-12L12 18M4.7 14h5.6"/><path d="M15 12.5c.5-1 1.5-1.5 2.7-1.5 1.7 0 2.8 1 2.8 2.8V18M20.5 15.5c-3 0-5 .4-5 1.6 0 .8.7 1.2 1.6 1.2 1.9 0 3.4-1.2 3.4-3"/>',
    c2m5: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    b1m6: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.3 11l7.4-3.8M8.3 13l7.4 3.8"/>'
  };
  var MOD_OPEN_KEY = "fluency-open-modules";
  var openMods = (function () { try { return JSON.parse(localStorage.getItem(MOD_OPEN_KEY)) || {}; } catch (e) { return {}; } })();
  function isExpanded(w, cur) { return w.id in openMods ? openMods[w.id] : w === cur; }

  function topBarHtml() {
    return '<header class="bar-top"><div class="wordmark">nowish<i></i></div><div class="brand-right">' +
      (offline.state === "ok" || offline.state === "checking" ? "" : '<button class="offline ' + offline.state + '" id="offline" aria-label="Status offline">' + offlineIcon() + '</button>') +
      goalChip() + '</div></header>';
  }
  function bindTopBar() {
    var r = document.getElementById("due"); if (r) r.onclick = function () { go({ name: "review" }); };
    var bt = document.getElementById("bk-tip"); if (bt) bt.onclick = function () { go({ name: "errors" }); };
    var of = document.getElementById("offline"); if (of) of.onclick = function () { toast(offlineMessage()); };
    var g = document.getElementById("goal"); if (g) g.onclick = function () {
      var n = state.days[today()] || 0;
      toast(n >= goal() ? "Meta de hoje batida: " + n + " questões" : "Meta de hoje: " + n + " de " + goal() + " questões");
    };
    var sb = document.getElementById("study"); if (sb) sb.onclick = studyAction;
  }
  function levelState(L) {
    var mods = modulesOf(L.id), dn = mods.filter(complete).length, pl = lvl(placement());
    if (!L.ready || !mods.length) return { soon: true, mods: mods, dn: 0, pct: 0, label: "Em breve" };
    var pct = Math.round(dn / mods.length * 100), anyOpen = mods.some(unlocked);
    var label = dn === mods.length ? "Concluído" : lvl(L.id) < pl ? "Para praticar" : anyOpen ? pct + "%" : "Bloqueado";
    return { soon: false, mods: mods, dn: dn, pct: pct, label: label, locked: !anyOpen };
  }

  // ---------- Início: o que estudar agora ----------
  // Um cartão só: nível, módulo, progresso das lições e o botão.
  function heroCard(cur) {
    if (!cur) return "";
    var z = savedSession(), L = levelInfo(cur.level), st = levelState(L), mi = st.mods.indexOf(cur) + 1;
    var nx = nextSectionOf(cur), dn = 0, segs = "";
    cur.sections.forEach(function (s) { var d = isDoneSec(s); if (d) dn++; segs += '<i class="' + (d ? "on" : "") + '"></i>'; });
    var meta, cta;
    if (z) { meta = sessionName(z) + ", " + z.log.length + " de " + z.ids.length + " questões"; cta = "Continuar"; studyAction = resumeSession; }
    else if (nx) { meta = "Lição " + (cur.sections.indexOf(nx) + 1) + " de " + cur.sections.length; cta = dn ? "Continuar" : "Começar"; studyAction = function () { openSection(nx.id); }; }
    else { meta = "Módulo concluído"; cta = "Ver o percurso"; studyAction = function () { go({ name: "level", code: cur.level }); }; }
    return '<div class="hero" style="--m:' + modColor(cur) + '">' +
      '<button class="hero-lv" data-open-level="' + L.id + '"><b>' + L.id + '</b><span>' + esc(L.name) + ', módulo ' + mi + ' de ' + st.mods.length + '</span>' + I.next + '</button>' +
      '<h2>' + esc(cur.subtitle) + '</h2>' +
      '<div class="hero-segs">' + segs + '</div><p class="hero-meta">' + esc(meta) + '</p>' +
      '<button class="hero-cta" id="study">' + cta + '</button></div>';
  }
  // Faixa de revisão: só aparece quando há questões para hoje.
  function revStrip() {
    var due = dueIds().length;
    if (!due) return "";
    return '<button class="rev-strip" id="rev-go">' + svg('<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>', 2.4) +
      '<span>' + due + (due === 1 ? " questão para revisar" : " questões para revisar") + '</span>' + I.next + '</button>';
  }
  function renderHome() {
    var cur = currentModule(), html = topBarHtml();
    if (needsBackup()) html += '<button class="nudge" id="bk-tip">Faça o backup da semana na aba Perfil</button>';
    html += heroCard(cur) + revStrip() + loginNudge();
    html += '<h2 class="sub-h" style="margin-top:26px">Todos os níveis</h2><div class="lv-list">';
    LEVELS.forEach(function (L) {
      var st = levelState(L), isCur = cur && cur.level === L.id, lab;
      if (st.soon) lab = "Em breve";
      else if (st.label === "Concluído") lab = "Concluído";
      else if (st.locked) lab = I.lock;
      else if (lvl(L.id) < lvl(placement()) && !st.dn) lab = "Para praticar";
      else lab = st.dn + " de " + st.mods.length + " módulos";
      html += '<button class="lv-row' + (st.soon || st.locked ? " off" : "") + (isCur ? " cur" : "") + (st.label === "Concluído" ? " done" : "") + '"' +
        (st.soon ? " disabled" : ' data-open-level="' + L.id + '"') + '><b>' + L.id + '</b><span class="n">' + esc(L.name) + '</span><span class="s">' + lab + '</span></button>';
    });
    html += '</div><p class="foot">Do A1 ao C2, no seu ritmo.</p>';
    app.innerHTML = html;
    bindTopBar(); bindNudge();
    var rg = document.getElementById("rev-go"); if (rg) rg.onclick = function () { go({ name: "review" }); };
    app.querySelectorAll("[data-open-level]").forEach(function (b) { b.onclick = function () { go({ name: "level", code: b.getAttribute("data-open-level") }); }; });
  }

  // ---------- Página de um nível: o percurso dos módulos ----------
  function renderLevel() {
    var code = view.code, L = levelInfo(code), st = levelState(L), cur = currentModule();
    var html = '<div class="lv-head"><button class="icon-btn" id="back" aria-label="Voltar">' + I.back + '</button>' +
      '<span class="lv-badge sm">' + L.id + '</span><span class="grow"><span class="lv-name">' + esc(L.name) + '</span></span>' +
      '<span class="lv-count">' + st.dn + '/' + st.mods.length + '</span></div>';
    // A descrição do nível aparece só enquanto ele não foi começado.
    if (!st.mods.some(started)) html += '<p class="muted small" style="margin:2px 0 10px">' + esc(L.about) + '</p>';
    if (lvl(code) < lvl(placement())) html += '<div class="tip" style="margin-bottom:12px">Este nível está abaixo do seu. Use para revisar a base quando quiser.</div>';
    function moduleHtml(w) {
      var open = unlocked(w), done = complete(w), col = modColor(w);
      var p = 0; w.sections.forEach(function (s) { if (state.sections[s.id] && state.sections[s.id].done) p++; });
      var exp = isExpanded(w, cur), isCur = w === cur;
      var segs = ""; w.sections.forEach(function (s) { segs += '<i class="' + (state.sections[s.id] && state.sections[s.id].done ? "on" : "") + '"></i>'; });
      var status = done ? "Concluído" : isCur ? "Em andamento" : open ? p + " de " + w.sections.length : "Bloqueado", weakN = open ? pendingInModule(w) : 0;
      html += '<section class="module' + (open ? "" : " is-locked") + (exp ? " expanded" : "") + (isCur ? " current" : "") + (done ? " complete" : "") + '" style="--m:' + col + '" id="mod-' + w.id + '">' +
        '<button class="banner" data-mod="' + w.id + '" aria-expanded="' + exp + '">' +
        '<span class="m-icon">' + svg(MOD_ICON[w.id] || TROPHY, 2) + (done ? '<span class="m-done">' + I.done + '</span>' : "") + '</span>' +
        '<span class="grow"><span class="b-label">' + esc(w.title) + '<span class="b-status">' + status + '</span>' + (weakN ? '<span class="b-weak">Reforçar ' + weakN + '</span>' : "") + '</span>' +
        '<span class="b-title">' + esc(w.subtitle) + '</span>' + (exp ? "" : '<span class="segs">' + segs + '</span>') + '</span>' +
        '<span class="b-chev">' + (open ? I.next : I.lock) + '</span></button>';
      if (!exp) { html += '</section>'; return; }
      html += '<div class="path">';
      w.sections.forEach(function (s, i) {
        var d = state.sections[s.id], isDone = d && d.done, avail = nodeAvailable(w, s), isNext = avail && !isDone;
        var x = ZIG[(i + w.idx * 3) % ZIG.length] * 40;
        var cls = isDone ? "done" : isNext ? "next" : "locked", weak = isDone ? pendingOf(s).length : 0;
        html += '<div class="step' + (cls === "locked" ? " is-locked" : cls === "done" ? " is-done" : "") + (isNext ? " is-next" : "") + (bubble === s.id ? " open" : "") + '" style="--x:' + x + 'px">' +
          (isNext ? '<div class="go-tag">' + (w.sections.indexOf(s) === 0 && !Object.keys(state.results).length ? "Começar" : "Continuar") + '</div>' : "") +
          '<button class="node ' + cls + '" data-node="' + s.id + '" aria-label="' + esc(s.title) + '">' +
          (isNext ? '<span class="ring"></span>' : "") + svg(TYPE_ICON[s.type] || TYPE_ICON.fill, 2.3) + (weak ? '<span class="weak-badge" aria-label="' + weak + ' para reforçar">' + weak + '</span>' : "") + '</button><span class="node-lbl">' + esc(s.title) + '</span>';
        if (bubble === s.id) html += bubbleHtml(w, s, avail, d);
        html += '</div>';
      });
      var lastX = ZIG[(w.sections.length + w.idx * 3) % ZIG.length] * 40;
      html += '<div class="step" style="--x:' + lastX + 'px"><div class="trophy ' + (done ? (weakN ? "silver" : "won") : "") + '" aria-label="' + (done ? (weakN ? "Concluído. Supere os erros para o troféu dourado" : "Módulo dominado") : "Fim do " + esc(w.title)) + '">' + svg(TROPHY, 2.1) + '</div></div>';
      html += '</div></section>';
    }
    st.mods.forEach(moduleHtml);
    if (L.partial) html += '<div class="more-soon">Mais módulos de ' + L.id + ' em breve</div>';
    app.innerHTML = html;
    document.getElementById("back").onclick = function () { bubble = null; go({ name: "home" }); };
    app.querySelectorAll("[data-node]").forEach(function (b) { b.onclick = function (e) {
      e.stopPropagation(); var id = b.getAttribute("data-node"); bubble = bubble === id ? null : id; renderKeepScroll();
      var bb = app.querySelector(".bubble");
      if (bb) { var r = bb.getBoundingClientRect(), lim = window.innerHeight - 100; if (r.bottom > lim) window.scrollBy({ top: r.bottom - lim, behavior: "smooth" }); }
    }; });
    app.querySelectorAll("[data-mod]").forEach(function (b) { b.onclick = function (e) {
      e.stopPropagation(); var w = WEEKS.filter(function (x) { return x.id === b.getAttribute("data-mod"); })[0];
      openMods[w.id] = !isExpanded(w, cur); bubble = null;
      try { localStorage.setItem(MOD_OPEN_KEY, JSON.stringify(openMods)); } catch (err) {}
      var before = b.getBoundingClientRect().top; render();
      var nb = app.querySelector('[data-mod="' + w.id + '"]'); if (nb) window.scrollBy(0, nb.getBoundingClientRect().top - before);
    }; });
    app.querySelectorAll("[data-reinforce]").forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); bubble = null; reinforce(b.getAttribute("data-reinforce")); }; });
    app.querySelectorAll("[data-start]").forEach(function (b) { b.onclick = function (e) { e.stopPropagation(); var id = b.getAttribute("data-start"); bubble = null; openSection(id); }; });
    if (!scrolledOnce) {
      scrolledOnce = true;
      var target = app.querySelector(".node.next");
      if (target) requestAnimationFrame(function () {
        var r = target.getBoundingClientRect();
        if (r.bottom > window.innerHeight - 140) window.scrollTo(0, Math.max(0, r.top + window.scrollY - window.innerHeight * 0.42));
      });
    }
  }
  // Volta para a página do nível de onde a pessoa veio (ou para o início).
  function backToPath(sectionId) {
    var ref = sectionId && SECTIONS[sectionId];
    go(ref ? { name: "level", code: ref.week.level } : { name: "home" });
  }
  function goalChip() {
    var n = state.days[today()] || 0, f = Math.min(1, n / goal()), C = 2 * Math.PI * 15;
    return '<button class="goal' + (f >= 1 ? " hit" : "") + '" id="goal" aria-label="Meta do dia e sequência"><span class="g-ring"><svg viewBox="0 0 36 36" aria-hidden="true">' +
      '<circle cx="18" cy="18" r="15" class="g-bg"/><circle cx="18" cy="18" r="15" class="g-fg" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + (C * (1 - f)).toFixed(1) + '"/></svg>' +
      I.flame + '</span>' + streak() + '</button>';
  }
  var studyAction = null;
  function renderKeepScroll() { var y = window.scrollY; render(); window.scrollTo(0, y); }
  document.addEventListener("click", function (e) {
    if (bubble && view.name === "level" && !e.target.closest(".bubble")) { bubble = null; renderKeepScroll(); }
  });
  function bubbleHtml(w, s, avail, d) {
    var isDone = d && d.done, h = '<div class="bubble" role="dialog"><div class="bub-title">' + esc(s.title) + '</div>';
    if (!unlocked(w)) h += '<div class="bub-sub">Conclua o ' + esc(WEEKS[w.idx - 1].title) + ' para liberar.</div><button class="bub-btn off" disabled>Bloqueado</button>';
    else if (!avail) h += '<div class="bub-sub">Conclua as etapas anteriores deste módulo.</div><button class="bub-btn off" disabled>Bloqueado</button>';
    else {
      var info = isDone ? (d.total ? "Feito, " + d.score + " de " + d.total + " acertos" : "Feito") : esc(s.subtitle || ""), pw = isDone ? pendingOf(s).length : 0;
      if (pw) {
        h += '<div class="bub-sub">' + info + '. ' + pw + (pw === 1 ? " questão para reforçar." : " questões para reforçar.") + '</div>' +
          '<button class="bub-btn" data-reinforce="' + s.id + '">Reforçar ' + pw + (pw === 1 ? " questão" : " questões") + '</button>' +
          '<button class="bub-link" data-start="' + s.id + '">Refazer tudo</button>';
      } else h += '<div class="bub-sub">' + info + '</div><button class="bub-btn" data-start="' + s.id + '">' + (isDone ? "Refazer" : "Começar") + '</button>';
    }
    return h + '</div>';
  }
  function moduleDoneText(m) { var n = WEEKS[m.idx + 1]; return m.title + " concluído" + (n ? ". " + n.title + " liberado" : "!"); }
  function isDoneSec(s) { return !!(state.sections[s.id] && state.sections[s.id].done); }
  function nextSectionOf(w) { return w.sections.filter(function (s) { return nodeAvailable(w, s) && !isDoneSec(s); })[0] || null; }
  function nextSection() { var cur = currentModule(); return cur ? nextSectionOf(cur) : null; }

  // ---------- Sessões (com retomada) ----------
  function savedSession() {
    var z = state.session;
    if (!z || !z.ids || !z.ids.length) return null;
    if (!z.ids.every(function (id) { return ITEMS[id]; }) || (z.sectionId && !SECTIONS[z.sectionId])) { state.session = null; save(); return null; }
    return z;
  }
  function persist(S) {
    state.session = { kind: S.kind, ids: S.ids, log: S.log, sectionId: S.section ? S.section.id : null, then: S.then || null };
    save();
  }
  function startSession(kind, ids, section, then) {
    var S = { kind: kind, ids: ids, i: 0, phase: "ask", section: section || null, log: [], then: then || null };
    persist(S); go({ name: "quiz", session: S });
  }
  function resumeSession() {
    var z = savedSession(); if (!z) { go({ name: "home" }); return; }
    var S = { kind: z.kind, ids: z.ids, i: z.log.length, phase: "ask", section: z.sectionId ? SECTIONS[z.sectionId].section : null, log: z.log, then: z.then };
    if (S.i >= S.ids.length) { finishSession(S); return; }
    go({ name: "quiz", session: S });
  }
  function sessionName(z) { return z.kind === "review" ? "Revisão" : (z.kind === "reinforce" ? "Reforço: " : "") + SECTIONS[z.sectionId].section.title; }
  // Questões de uma seção que ainda estão em revisão (erros não superados).
  // "Reforçar" mostra só os erros ainda não corrigidos: acertou depois de errar, sai daqui (a revisão espaçada continua por conta própria).
  function pendingOf(s) { return (s.items || []).map(function (it) { return it.id; }).filter(function (id) { var r = state.results[id]; return state.review[id] && !(r && r.streak > 0); }); }
  function pendingInModule(w) { return w.sections.reduce(function (n, s) { return n + pendingOf(s).length; }, 0); }
  function reinforce(id) { var s = SECTIONS[id].section, ids = pendingOf(s); if (ids.length) startSession("reinforce", shuffle(ids.slice()), s); }
  function openSection(id, then) {
    var s = SECTIONS[id].section, z = savedSession();
    if (z && z.kind === "section" && z.sectionId === id) { resumeSession(); return; }
    if (s.type === "mix") {
      var ids = buildMix(s);
      if (!ids.length) { toast("Ainda não há questões anteriores"); return; }
      startSession("section", ids, s, then);
    } else if (isQuiz(s)) startSession("section", s.items.map(function (it) { return it.id; }), s, then);
    else go({ name: "section", id: id });
  }

  // ---------- Seções de leitura ----------
  function renderSection() {
    var ref = SECTIONS[view.id], s = ref.section;
    var html = top(ref.week.title, s.title) + '<h1>' + esc(s.title) + '</h1><p class="muted">' + esc(s.subtitle || "") + '</p>';
    if (s.type === "summary") {
      if (s.intro) html += '<p class="small" style="margin:16px 0">' + s.intro + '</p>';
      s.cards.forEach(function (c) {
        html += '<div class="rule"><h3>' + esc(c.title) + '</h3>' + c.lines.map(function (l) { return '<div class="ln">' + l + '</div>'; }).join("") +
          '<div class="example"><span>' + esc(c.example) + '</span>' + listen(c.example) + '</div></div>';
      });
    } else if (s.type === "reading") {
      html += '<div style="height:12px"></div>';
      s.items.forEach(function (it, i) {
        html += '<div class="read"><div class="en">' + esc(it.en) + '</div><div class="pt" id="rev' + i + '" hidden>' + esc(it.pt) + '</div>' +
          '<div class="row"><button class="text-btn" data-rev="' + i + '">Ver tradução</button>' + listen(it.en) + '</div></div>';
      });
    } else if (s.type === "vocab") {
      html += '<div class="cards" style="margin-top:16px">';
      s.items.forEach(function (it, i) {
        html += '<div class="flip" data-flip="' + i + '" role="button" tabindex="0"><div class="w">' + esc(it.en) + '</div>' +
          '<div class="hint">Toque para ver</div><div class="more" hidden><div class="pt">' + esc(it.pt) + '</div><div class="ex">' + esc(it.ex) + '</div>' + listen(it.ex) + '</div></div>';
      });
      html += '</div>';
    }
    html += '<div class="actions" style="margin-top:20px"><button class="btn btn-primary" id="finish">Concluir</button></div>';
    app.innerHTML = html; document.getElementById("back").onclick = function () { backToPath(s.id); };
    app.querySelectorAll("[data-rev]").forEach(function (b) { b.onclick = function () {
      var el = document.getElementById("rev" + b.getAttribute("data-rev")); el.hidden = !el.hidden; b.textContent = el.hidden ? "Ver tradução" : "Esconder"; }; });
    app.querySelectorAll("[data-flip]").forEach(function (c) { c.onclick = function (e) {
      if (e.target.closest("[data-speak]")) return;
      var open = c.classList.toggle("open"); c.querySelector(".more").hidden = !open; c.querySelector(".hint").hidden = open; }; });
    document.getElementById("finish").onclick = function () {
      var mod = sectionFinished(s.id);
      if (mod) { celebrate(); toast(moduleDoneText(mod)); } else toast("Seção concluída");
      backToPath(s.id);
    };
  }

  // ---------- Opções e blocos de palavras (responder tocando) ----------
  function hashStr(t) { var h = 2166136261; for (var i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function seeded(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function sshuffle(a, key) { var r = seeded(hashStr(key)), b = a.slice(); for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = b[i]; b[i] = b[j]; b[j] = t; } return b; }
  var IRR = { have: ["had", "had"], be: ["was", "been"], go: ["went", "gone"], come: ["came", "come"], see: ["saw", "seen"], know: ["knew", "known"],
    leave: ["left", "left"], send: ["sent", "sent"], take: ["took", "taken"], write: ["wrote", "written"], get: ["got", "gotten"], lose: ["lost", "lost"],
    pay: ["paid", "paid"], tell: ["told", "told"], speak: ["spoke", "spoken"], find: ["found", "found"], give: ["gave", "given"], buy: ["bought", "bought"],
    forget: ["forgot", "forgotten"], "do": ["did", "done"], make: ["made", "made"], put: ["put", "put"], run: ["ran", "run"], think: ["thought", "thought"],
    sell: ["sold", "sold"], keep: ["kept", "kept"], read: ["read", "read"], meet: ["met", "met"], win: ["won", "won"], begin: ["began", "begun"],
    bring: ["brought", "brought"], build: ["built", "built"], choose: ["chose", "chosen"], drive: ["drove", "driven"], hear: ["heard", "heard"],
    say: ["said", "said"], drink: ["drank", "drunk"], sleep: ["slept", "slept"], eat: ["ate", "eaten"], cut: ["cut", "cut"],
    fall: ["fell", "fallen"], lend: ["lent", "lent"], sit: ["sat", "sat"], wear: ["wore", "worn"], understand: ["understood", "understood"], shoot: ["shot", "shot"], show: ["showed", "shown"], teach: ["taught", "taught"], spend: ["spent", "spent"], feel: ["felt", "felt"] };
  var DOUBLE = { get: 1, put: 1, stop: 1, plan: 1, run: 1, sit: 1, swim: 1, begin: 1, forget: 1, cut: 1, shop: 1 };
  function pastOf(b) { if (IRR[b]) return IRR[b][0]; if (/e$/.test(b)) return b + "d"; if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + "ied"; if (DOUBLE[b]) return b + b.slice(-1) + "ed"; return b + "ed"; }
  function ppOf(b) { return IRR[b] ? IRR[b][1] : pastOf(b); }
  function ingOf(b) { if (b === "be") return "being"; if (/[^e]e$/.test(b)) return b.slice(0, -1) + "ing"; if (DOUBLE[b]) return b + b.slice(-1) + "ing"; return b + "ing"; }
  function sOf(b) { if (b === "have") return "has"; if (b === "be") return "is"; if (/(s|sh|ch|x|o)$/.test(b)) return b + "es"; if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + "ies"; return b + "s"; }
  function verbForms(hint, passive) {
    var parts = hint.split("/"), b = parts.pop().trim(), adv = parts.length ? parts[0].trim() : "";
    if (!/^[a-z]+$/.test(b)) return null;
    var V2 = pastOf(b), V3 = ppOf(b), neg = adv === "not";
    var list = neg ? (passive ? ["hasn't been " + V3, "wasn't " + V3, "isn't " + V3, "won't be " + V3, "hadn't " + V3, "didn't " + b] :
      ["didn't " + b, "don't " + b, "doesn't " + b, "hadn't " + V3, "haven't " + V3, "wouldn't " + b, "wouldn't have " + V3, "won't " + b,
        "isn't " + ingOf(b), "aren't " + ingOf(b), "weren't " + ingOf(b), "haven't been " + ingOf(b), "didn't use to " + b, "might not have " + V3, "shouldn't have " + V3]) :
      [b, sOf(b), V2, "have " + V3, "has " + V3, "had " + V3, "would " + b, "will " + b, "would have " + V3, "to " + b, ingOf(b),
        "did " + b, "do " + b, "does " + b, "is " + ingOf(b), "are " + ingOf(b), "was " + ingOf(b), "were " + ingOf(b), "used to " + b,
        "have been " + ingOf(b), "has been " + ingOf(b), "had been " + ingOf(b), "must have " + V3, "might have " + V3, "should have " + V3, "can't have " + V3, "could have " + V3];
    if (passive && !neg) list = ["is being " + V3, "was being " + V3, "are being " + V3, "should have been " + V3, "must be " + V3, "can be " + V3, "is " + V3, "are " + V3, "was " + V3, "were " + V3, "has been " + V3, "will be " + V3, "be " + V3, "been " + V3, V2, "have " + V3, "would " + b];
    if (b === "be") list = list.concat(["were", "was", "is", "are", "am"]);
    if (adv && !neg) list = list.filter(function (f) { return !/^to |ing$/.test(f); }).map(function (f) { var w = f.split(" "); return w.length > 1 ? [w[0], adv].concat(w.slice(1)).join(" ") : adv + " " + f; });
    return list;
  }
  function blanksIn(it) { return (it.q.match(/___/g) || []).length; }
  // Divide uma resposta entre as lacunas: "would do" em 2 lacunas vira ["would", "do"].
  function splitFill(ans, n) {
    if (!ans || n < 2) return [ans];
    var w = ans.split(" "); if (w.length < n) return [ans];
    var out = w.slice(0, n - 1); out.push(w.slice(n - 1).join(" ")); return out;
  }
  function optLabel(it, o) { var n = blanksIn(it); return n > 1 ? splitFill(o, n).join(" … ") : o; }
  function optionsFor(it) {
    if (it._opts) return it._opts;
    var correct = it.a[0].replace(/^'/, ""), accepted = it.a.map(norm), ref = ITEMS[it.id], pool = [];
    // Alternativas escritas à mão no conteúdo têm prioridade.
    if (it.o && it.o.length) { it._opts = sshuffle([correct].concat(it.o), it.id + "o"); return it._opts; }
    var hint = (it.q.match(/\(([^()]+)\)\s*[^()]*$/) || [])[1];
    var passive = it.a.some(function (x) { return /\b(is|are|was|were|be|been)\b/.test(x) && /\b(\w+ed|\w+en|found|sent|taken|given|spoken|written)$/.test(x); });
    var forms = hint ? verbForms(hint.toLowerCase(), passive) : null;
    var useForms = forms && forms.some(function (f) { return accepted.indexOf(norm(f)) >= 0; });
    var plainItem = function (x) { var h = (x.q.match(/\(([^()]+)\)\s*[^()]*$/) || [])[1]; return !h || !verbForms(h.toLowerCase()); };
    // No A1 e A2, nada de formas avançadas como distratoras.
    if (useForms && (ref.week.level === "A1" || ref.week.level === "A2")) forms = forms.filter(function (f) { return accepted.indexOf(norm(f)) >= 0 || !/(ha(ve|s|d) been|haven't been|(must|might|should|can't|could|would|wouldn't|shouldn't) (not )?have |used to|use to)/.test(f); });
    if (useForms) pool = forms;
    else {
      ref.section.items.forEach(function (x) { if (x !== it && plainItem(x)) pool.push(x.a[0].replace(/^'/, "")); });
      ref.week.sections.forEach(function (s) { if (s.type === "fill" && s !== ref.section) s.items.forEach(function (x) { if (plainItem(x)) pool.push(x.a[0].replace(/^'/, "")); }); });
    }
    var seen = {}, d = [], later = [], wc = norm(correct).split(" ").length;
    sshuffle(pool, it.id).forEach(function (p) {
      var n = norm(p); if (!n || seen[n] || accepted.indexOf(n) >= 0) return;
      seen[n] = 1;
      // Em seções sem verbo, prefira distratores com o mesmo número de palavras.
      if (!useForms && n.split(" ").length !== wc) later.push(p); else d.push(p);
    });
    if (d.length < 3) d = d.concat(later);
    // Poucas alternativas? Completa com respostas de outras questões da seção e do módulo.
    if (d.length < 3) {
      var extra = [];
      ref.section.items.concat.apply(ref.section.items, ref.week.sections.filter(function (x) { return x.type === "fill" && x !== ref.section; }).map(function (x) { return x.items; }))
        .forEach(function (x) { if (x !== it) extra.push(x.a[0].replace(/^'/, "")); });
      sshuffle(extra, it.id + "x").forEach(function (p) { var n = norm(p); if (n && !seen[n] && accepted.indexOf(n) < 0) { seen[n] = 1; d.push(p); } });
    }
    var nb = blanksIn(it); if (nb > 1) d = d.filter(function (p) { return p.split(" ").length >= nb; });
    if (useForms) { var same = d.filter(function (p) { return p.split(" ").length === correct.split(" ").length; }); d = same.slice(0, 2).concat(d.filter(function (p) { return same.indexOf(p) < 0; })); }
    it._opts = sshuffle([correct].concat(d.slice(0, 3)), it.id + "o");
    return it._opts;
  }
  function tokens(t) { return plain(t).replace(/[.,!?;:"“”]/g, "").split(/\s+/).filter(Boolean); }
  function tilesFor(it, sec) {
    if (it._tiles) return it._tiles;
    var own = tokens(it.full), lower = own.map(function (w) { return w.toLowerCase(); }), extra = [];
    sshuffle(sec.items, it.id).forEach(function (x) {
      if (x === it) return;
      tokens(x.full).forEach(function (w) { if (extra.length < 3 && lower.indexOf(w.toLowerCase()) < 0 && extra.indexOf(w) < 0 && w.length > 2) extra.push(w); });
    });
    it._tiles = sshuffle(own.concat(extra), it.id + "t");
    return it._tiles;
  }

  // ---------- Exercício ----------
  var PRAISE = ["Isso!", "Certinho!", "Mandou bem!", "Acertou!", "Boa!"], pickN = 0;
  function progressBar(S) {
    var h = '<div class="bar">';
    for (var i = 0; i < S.ids.length; i++) { var l = S.log[i]; h += '<i class="' + (l ? (l.ok ? "ok" : "bad") : (i === S.i ? "now" : "")) + '"></i>'; }
    return h + '</div>';
  }
  // Modo de resposta automático: opções para aprender, digitação para provar que fixou.
  function adapt(ok, how) {
    if (how === "tap") {
      var t = (state.recentTap || []).concat([ok]).slice(-20); state.recentTap = t;
      if (!state.advanced && t.length >= 20 && t.filter(Boolean).length >= 18) { state.advanced = true; state.recentType = []; }
    } else if (how === "type") {
      var y = (state.recentType || []).concat([ok]).slice(-10); state.recentType = y;
      if (state.advanced && y.length >= 10 && y.filter(Boolean).length < 6) { state.advanced = false; state.recentTap = []; }
    }
  }
  function itemStreak(id) {
    var r = state.results[id]; if (!r) return null;
    if (typeof r.streak === "number") return r.streak;
    return r.right > 0 && r.right >= r.wrong ? 1 : 0;
  }
  function modeFor(id) {
    var st = itemStreak(id);
    if (st === null) return state.advanced ? { m: "type", why: "Você está indo muito bem: agora sem opções" } : { m: "tap" };
    if (st >= 1) return { m: "type", why: "Você já acertou esta: agora sem opções" };
    return { m: "tap" };
  }
  function renderQuiz() {
    var S = view.session, id = S.ids[S.i], ref = ITEMS[id], it = ref.item, sec = ref.section;
    if (S.modeAt !== S.i) { S.mode = modeFor(id); S.modeAt = S.i; }
    var m = S.mode.m;
    var isMix = S.section && S.section.type === "mix";
    var ctx = S.kind === "reinforce" ? "Reforço: " + ref.week.title + ", " + sec.title : S.kind === "review" ? "Revisão: " + ref.week.title + ", " + sec.title : isMix ? S.section.title + ": " + ref.week.title + ", " + sec.title : ref.week.title + ", " + sec.title;
    var html = '<div class="qtop"><button class="icon-btn" id="close" aria-label="Sair e continuar depois">' + I.x + '</button>' + progressBar(S) +
      '</div><div class="qctx">' + esc(ctx) + (S.mode.why && S.phase === "ask" ? '<span class="mode-tag">' + svg('<path d="M4 20h4L19 9l-4-4L4 16z"/>', 2.4) + esc(S.mode.why) + '</span>' : "") + '</div>';
    var ask = S.phase === "ask", dock = "";
    S.tiles = S.tiles || [];
    html += '<div class="qbody' + (ask ? "" : " settled") + '">';
    if (sec.type === "fill") {
      html += '<div class="q">' + qHtml(it.q, ask ? (m === "tap" && S.pick ? splitFill(S.pick, blanksIn(it)) : null) : answerParts(it.full)) + '</div>';
      if (ask) {
        if (m === "tap") {
          html += '<div class="opts">' + optionsFor(it).map(function (o, k) {
            return '<button class="opt' + (S.pick === o ? " sel" : "") + '" data-opt="' + k + '">' + esc(optLabel(it, o)) + '</button>'; }).join("") + '</div>';
          dock = '<button class="btn btn-primary" id="check"' + (S.pick ? "" : " disabled") + '>Conferir</button>';
        } else {
          html += '<input class="field" type="text" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" placeholder="Sua resposta" aria-label="Sua resposta" value="' + esc(S.draft || "") + '">' +
            '<div class="center"><button class="text-btn" id="skip">Não sei, mostrar a resposta</button></div>';
          dock = '<button class="btn btn-primary" id="check">Conferir</button>';
        }
      }
    } else {
      var isListen = sec.type === "listen";
      if (isListen) {
        html += '<div class="kicker">Ouça e monte a frase</div><div class="play-row"><button class="play" id="play" aria-label="Ouvir">' + I.sound + '</button>' +
          '<button class="play slow" id="slow" aria-label="Ouvir devagar">' + "Devagar" + '</button></div>';
      } else html += '<div class="kicker">Como se diz em inglês?</div><div class="q">' + esc(it.q) + '</div>';
      if (ask) {
        if (m === "tap") {
          var tl = tilesFor(it, sec);
          html += '<div class="build">' + S.tiles.map(function (k, pos) { return '<button class="tile" data-un="' + pos + '">' + esc(tl[k]) + '</button>'; }).join("") + '</div>' +
            '<div class="bank">' + tl.map(function (w, k) { var used = S.tiles.indexOf(k) >= 0; return '<button class="tile' + (used ? " used" : "") + '" data-tile="' + k + '"' + (used ? " disabled" : "") + '>' + esc(w) + '</button>'; }).join("") + '</div>';
          dock = '<button class="btn btn-primary" id="check"' + (S.tiles.length ? "" : " disabled") + '>Conferir</button>';
        } else {
          html += '<textarea class="field" id="ans" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="' + (isListen ? "Escreva o que ouviu" : "Escreva aqui, ou só pense na resposta") + '" aria-label="Sua resposta">' + esc(S.draft || "") + '</textarea>';
          dock = '<button class="btn btn-primary" id="check">' + (isListen ? "Conferir" : "Ver resposta") + '</button>';
        }
      } else if (S.phase === "grade") {
        dock = '<div class="sheet neutral">' + (S.answer ? '<div class="yours">Você escreveu: ' + esc(S.answer) + '</div>' : "") +
          '<p class="sentence">' + fullHtml(it.full) + '</p><div class="why">' + it.why + '</div>' +
          '<p class="why" style="margin-top:8px">Se o tempo verbal está certo, conta como acerto mesmo com outras palavras.</p>' +
          '<div class="actions"><button class="btn btn-soft" id="g-bad">Errei</button><button class="btn btn-primary" id="g-ok">Acertei</button></div></div>';
      }
    }
    html += '</div>';
    if (S.phase === "fb") dock = feedbackHtml(S, it, sec);
    app.innerHTML = html + '<div class="dock' + (S.phase === "fb" ? " fb" : "") + '">' + dock + '</div>';
    bindQuiz(S, id, it, sec, m);
  }
  function feedbackHtml(S, it, sec) {
    var canOverride = !S.ok && S.answer && S.answer !== "(não soube)" && (S.mode.m === "type" || sec.type === "translate" || sec.type === "listen");
    var h = '<div class="sheet ' + (S.ok ? "ok" : "bad") + '"><div class="verdict"><span class="mark">' + (S.ok ? I.check : I.x) + '</span>' +
      (S.ok ? PRAISE[pickN++ % PRAISE.length] : "Não foi dessa vez") + '</div>';
    if (!S.ok && S.answer && S.answer !== "(não soube)") h += '<div class="yours">Você respondeu <s>' + esc(S.answer) + '</s></div>';
    h += (S.ok ? "" : '<div class="tiny muted" style="margin-bottom:2px">Resposta certa</div>') + '<p class="sentence">' + fullHtml(it.full) + '</p>' + (it.pt && sec.type === "listen" ? '<div class="why">' + esc(it.pt) + '</div>' : '<div class="why">' + (it.why || "") + '</div>') +
      '<div class="row">' + listen(it.full) + (canOverride ? '<button class="text-btn" id="override">Eu tinha acertado</button>' : "") + '</div>' +
      '<button class="btn ' + (S.ok ? "btn-ok" : "btn-bad") + '" id="next">Continuar</button></div>';
    return h;
  }
  function bindQuiz(S, id, it, sec, m) {
    document.getElementById("close").onclick = function () { speechStop(); toast("Progresso salvo. Continue quando quiser"); backToPath(S.section ? S.section.id : null); };
    var commit = function (ok, answer) {
      S.answer = answer; S.ok = ok; var before = state.days[today()] || 0;
      S.snap = record(id, ok, answer, m);
      S.log.push({ id: id, ok: ok }); S.phase = "fb"; persist(S);
      if (before < goal() && state.days[today()] >= goal()) { celebrate(); toast("Meta do dia batida!"); }
      render();
    };
    if (sec.type === "listen" && S.phase === "ask") {
      document.getElementById("play").onclick = function () { speak(it.full); };
      document.getElementById("slow").onclick = function () { speak(it.full, 0.6); };
      if (!S.autoplayed) { S.autoplayed = true; setTimeout(function () { speak(it.full); }, 250); }
    }
    if (S.phase === "ask") {
      var ans = document.getElementById("ans");
      if (ans) { ans.oninput = function () { S.draft = ans.value; }; if (sec.type === "fill") ans.focus(); }
      app.querySelectorAll("[data-opt]").forEach(function (b) { b.onclick = function () { S.pick = optionsFor(it)[+b.getAttribute("data-opt")]; render(); }; });
      app.querySelectorAll("[data-tile]").forEach(function (b) { b.onclick = function () { S.tiles.push(+b.getAttribute("data-tile")); render(); }; });
      app.querySelectorAll("[data-un]").forEach(function (b) { b.onclick = function () { S.tiles.splice(+b.getAttribute("data-un"), 1); render(); }; });
      var check = function (skip) {
        if (sec.type === "fill") {
          var v = skip ? "" : (m === "tap" ? S.pick : ans.value.trim()); if (!skip && !v) return;
          commit(!skip && isRight(it, v), skip ? "(não soube)" : v);
        } else if (m === "tap") {
          if (!S.tiles.length) return;
          var tl = tilesFor(it, sec), built = S.tiles.map(function (k) { return tl[k]; }).join(" ");
          commit(norm(built) === norm(plain(it.full)), built);
        } else if (sec.type === "listen") {
          var lv = ans.value.trim(); if (!lv) return; commit(norm(lv) === norm(plain(it.full)), lv);
        } else { S.answer = ans.value.trim(); S.phase = "grade"; render(); }
      };
      document.getElementById("check").onclick = function () { check(false); };
      var sk = document.getElementById("skip"); if (sk) sk.onclick = function () { check(true); };
      if (ans && sec.type === "fill") ans.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); check(false); } });
    } else if (S.phase === "grade") {
      document.getElementById("g-ok").onclick = function () { commit(true, S.answer || "(só pensei)"); };
      document.getElementById("g-bad").onclick = function () { commit(false, S.answer || "(só pensei)"); };
    } else {
      document.getElementById("next").onclick = advance;
      var ov = document.getElementById("override");
      if (ov) ov.onclick = function () { undo(id, S.snap); S.snap = record(id, true, S.answer, S.mode.m); S.ok = true; S.log[S.log.length - 1].ok = true; persist(S); render(); };
    }
  }
  function speechStop() { try { speechSynthesis.cancel(); } catch (e) {} }
  function advance() {
    var S = view.session;
    if (S.i + 1 < S.ids.length) { S.i++; S.phase = "ask"; S.answer = ""; S.pick = null; S.tiles = []; S.draft = ""; S.autoplayed = false; render(); window.scrollTo(0, 0); }
    else finishSession(S);
  }
  function finishSession(S) {
    if (S.kind === "section" && S.section) {
      var right = S.log.filter(function (l) { return l.ok; }).length;
      S.moduleDone = sectionFinished(S.section.id, { score: right, total: S.ids.length, at: today() });
    }
    state.session = null; save();
    go({ name: "done", session: S });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && view.name === "quiz" && view.session.phase === "fb") { e.preventDefault(); advance(); }
  });

  function renderDone() {
    var S = view.session, right = S.log.filter(function (l) { return l.ok; }).length, total = S.log.length;
    var wrong = S.log.filter(function (l) { return !l.ok; }), ratio = total ? right / total : 0;
    var msg = ratio === 1 ? "Rodada perfeita." : ratio >= 0.75 ? "Muito bom." : ratio >= 0.5 ? "Bom treino." : "Os erros viram o seu material de revisão.";
    var html = "";
    if (S.moduleDone) {
      var m = S.moduleDone, nxt = WEEKS[m.idx + 1], took = daysBetween((state.modStart || {})[m.id] || today(), today()) + 1;
      html += '<div class="hero" style="--m:' + modColor(m) + '"><div class="hero-trophy">' + svg(TROPHY, 2) + '</div><h1>' + esc(m.title) + ' concluído!</h1>' +
        '<p class="muted">' + (nxt ? esc(nxt.title) + " liberado: " + esc(nxt.subtitle) + "." : "Você terminou todos os módulos.") + '</p>' +
        (pendingInModule(m) ? '<p class="note">Supere os ' + pendingInModule(m) + ' erros deste módulo para o troféu ficar dourado. Eles voltam na revisão e no botão Reforçar do percurso.</p>' : "") + '</div>';
      if (nxt && took <= 2) html += '<p class="note">Você fechou este módulo em ' + took + (took === 1 ? " dia" : " dias") + '. Antes do próximo, vale fazer a revisão de erros: com alguns dias entre um módulo e outro, o conteúdo fixa melhor.</p>';
    }
    html += '<div class="score">' + right + '<small>/' + total + '</small></div><h2>' + msg + '</h2>' +
      '<p class="muted">' + (S.kind === "review" ? "Revisão concluída" : S.kind === "reinforce" ? "Reforço de " + esc(S.section.title) + " concluído" : esc(S.section.title) + " concluída") + '</p>';
    if (wrong.length) {
      html += '<div class="panel">' + wrong.map(function (l) {
        var it = ITEMS[l.id].item; return '<div class="item"><p class="sentence" style="font-size:17px;margin:0">' + fullHtml(it.full) + '</p><div class="row">' + listen(it.full) + '</div></div>';
      }).join("") + '</div><div class="tip">Escreva duas frases suas para cada uma dessas, sobre o seu dia a dia.</div>';
    }
    var then = S.then && SECTIONS[S.then] && !isDoneSec(SECTIONS[S.then].section) ? SECTIONS[S.then].section : null;
    var nx = then || nextSection();
    html += '<div class="actions stack" style="margin-top:20px">' + (nx ? '<button class="btn btn-primary" id="nx">Seguir: ' + esc(nx.title) + '</button>' : "") +
      '<button class="btn btn-soft" id="home">Voltar ao percurso</button></div>';
    app.innerHTML = html;
    if (ratio === 1 || S.moduleDone) celebrate();
    document.getElementById("home").onclick = function () { backToPath(S.section ? S.section.id : null); };
    var nb = document.getElementById("nx"); if (nb) nb.onclick = function () { openSection(nx.id); };
  }

  // ---------- Celebração ----------
  function celebrate() {
    try { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; } catch (e) {}
    var c = document.createElement("canvas"), dpr = window.devicePixelRatio || 1, W = window.innerWidth, H = window.innerHeight;
    c.className = "confetti"; c.width = W * dpr; c.height = H * dpr; document.body.appendChild(c);
    var g = c.getContext("2d"); g.scale(dpr, dpr);
    var cols = MOD_COLORS.concat(["#FFD23F"]), ps = [];
    for (var i = 0; i < 90; i++) ps.push({ x: W / 2 + (Math.random() - .5) * 60, y: H * .35, vx: (Math.random() - .5) * 11, vy: -Math.random() * 11 - 4,
      r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3, s: 6 + Math.random() * 6, c: cols[i % cols.length] });
    var t0 = performance.now();
    (function frame(t) {
      var k = (t - t0) / 1600; g.clearRect(0, 0, W, H);
      ps.forEach(function (p) { p.vy += .32; p.x += p.vx; p.y += p.vy; p.r += p.vr; g.save(); g.globalAlpha = Math.max(0, 1 - k); g.translate(p.x, p.y); g.rotate(p.r); g.fillStyle = p.c; g.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); g.restore(); });
      if (k < 1) requestAnimationFrame(frame); else c.remove();
    })(t0);
  }

  // ---------- Revisão ----------
  // Lista das questões que ainda estão na revisão (aba Revisão).
  var LIST_PREVIEW = 3;
  function errItem(id) {
    var ref = ITEMS[id], r = state.results[id] || {}, rv = state.review[id], isDue = rv.due <= today();
    var dots = ""; for (var k2 = 0; k2 < 3; k2++) dots += '<i class="' + (k2 < rv.box ? "on" : "") + '"></i>';
    return '<div class="item"><div class="where">' + esc(ref.week.title + ", " + ref.section.title + ", questão " + ref.item.n) + '</div>' +
      '<p class="sentence" style="font-size:17px;margin:0 0 4px">' + fullHtml(ref.item.full) + '</p>' +
      (r.last ? '<div class="yours" style="margin:0">Você respondeu <s>' + esc(r.last) + '</s></div>' : "") +
      '<div class="row"><span class="chip' + (isDue ? " today" : "") + '">' + (isDue ? "Revisar hoje" : "Revisar em " + shortDate(rv.due)) + '</span>' +
      '<span class="dots" title="Acertos na revisão">' + dots + '</span>' + listen(ref.item.full) + '</div></div>';
  }
  function errList(pend) {
    // As que vencem antes aparecem primeiro.
    var ids = pend.slice().sort(function (a, b) { return state.review[a].due < state.review[b].due ? -1 : state.review[a].due > state.review[b].due ? 1 : 0; });
    var html = '<div class="list-head"><h2>Suas questões <span class="muted">' + ids.length + '</span></h2><button class="text-btn" id="copy">Compartilhar</button></div>' +
      '<div class="panel" id="err-panel">' + ids.slice(0, LIST_PREVIEW).map(errItem).join("") + '</div>';
    if (ids.length > LIST_PREVIEW) html += '<div class="center"><button class="btn btn-soft" id="err-more">Mostrar todas (' + ids.length + ')</button></div>';
    return { html: html, bind: function () {
      var m = document.getElementById("err-more");
      if (m) m.onclick = function () { document.getElementById("err-panel").innerHTML = ids.map(errItem).join(""); m.parentNode.remove(); };
      var c = document.getElementById("copy");
    if (c) c.onclick = function () {
      var lines = ["Minhas questões para reforçar no nowish:"];
      pend.forEach(function (id) {
        var ref = ITEMS[id], r = state.results[id] || {};
        lines.push("- " + ref.week.title + ", " + ref.section.title + ", questão " + ref.item.n + ": " + plain(ref.item.q || ref.item.full) +
          " | Minha resposta: " + (r.last || "-") + " | Certo: " + plain(ref.item.full) + " | Errei " + (r.wrong || 1) + "x");
      });
      share(lines.join("\n"), "Minhas questões para reforçar", "Lista copiada");
    };
    } };
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function renderReview() {
    var due = dueIds(), pend = pendingIds(), z = savedSession();
    var html = '<h1 style="margin-top:8px">Revisão</h1><p class="muted">Cada erro volta depois de 1, 3 e 7 dias. Acertou três vezes, está superado.</p>';
    if (z && z.kind === "review") html += '<button class="study" id="resume" style="--m:#F08C2E;margin-top:16px"><span class="grow"><span class="s-title">Continuar revisão</span><span class="s-sub">' + z.log.length + ' de ' + z.ids.length + ' questões</span></span><span class="s-go">' + I.next + '</span></button>';
    else if (due.length) {
      html += '<button class="due" id="start" style="margin-top:16px"><span class="n">' + due.length + '</span><span><h3>' +
        (due.length === 1 ? "Questão para hoje" : "Questões para hoje") + '</h3><p>Uns ' + Math.max(2, Math.round(due.length * 0.7)) + ' minutos</p></span><span class="go">' + I.next + '</span></button>';
    } else {
      html += '<div class="empty"><div class="art">' + I.check + '</div><h2>Nada para revisar hoje</h2>' +
        (pend.length ? '<p class="muted small">' + pend.length + (pend.length === 1 ? " questão espera" : " questões esperam") + ' os próximos dias.</p><div class="actions"><button class="btn btn-soft" id="all">Revisar agora mesmo assim</button></div>'
          : '<p class="muted small">Quando você errar uma questão, ela aparece aqui.</p>') + '</div>';
    }
    var list = pend.length ? errList(pend) : null;
    if (list) html += list.html;
    app.innerHTML = html;
    if (list) list.bind();
    var rs = document.getElementById("resume"); if (rs) rs.onclick = resumeSession;
    var st = document.getElementById("start"); if (st) st.onclick = function () { startSession("review", shuffle(due)); };
    var al = document.getElementById("all");
    if (al) al.onclick = function () { pend.forEach(function (id) { state.review[id].due = today(); }); save(); startSession("review", shuffle(pend)); };
  }

  // ---------- Progresso ----------
  var WD = ["D", "S", "T", "Q", "Q", "S", "S"];
  function weekChart() {
    var d = new Date(), bars = [], max = goal();
    for (var i = 6; i >= 0; i--) { var x = new Date(d); x.setDate(d.getDate() - i); var n = state.days[iso(x)] || 0; bars.push({ n: n, l: WD[x.getDay()], today: i === 0 }); if (n > max) max = n; }
    var total = bars.reduce(function (a, b) { return a + b.n; }, 0), gy = 100 - goal() / max * 100;
    return '<div class="chart-card"><div class="chart-head"><h3>Últimos 7 dias</h3><span class="muted small">' + total + ' questões</span></div>' +
      '<div class="chart"><div class="goal-line" style="top:' + gy + '%"><span>meta</span></div>' + bars.map(function (b) {
        return '<div class="col' + (b.today ? " today" : "") + '"><div class="bar-v' + (b.n >= goal() ? " hit" : "") + '" style="height:' + Math.max(b.n ? 6 : 2, b.n / max * 100) + '%"></div><span>' + b.l + '</span></div>';
      }).join("") + '</div></div>';
  }
  function renderErrors() {
    var pend = pendingIds().sort(), answered = 0; for (var k in state.results) answered += state.results[k].seen;
    var doneMods = WEEKS.filter(complete).length;
    var html = '<h1 style="margin-top:8px">Perfil</h1>' + profileCard() + mountainCard() + accountCard() +
      '<div class="stats"><div><b>' + streak() + '</b>dias<br>seguidos</div><div><b>' + doneMods + '</b>de ' + WEEKS.length + '<br>módulos</div>' +
      '<div><b>' + answered + '</b>respostas</div><div><b>' + state.mastered + '</b>erros<br>superados</div></div>' + weekChart() +
      '<div class="goal-set"><span>Meta diária</span><div class="seg">' + [10, 20, 30].map(function (g) { return '<button data-goal="' + g + '" class="' + (goal() === g ? "on" : "") + '">' + g + '</button>'; }).join("") + '</div></div>' +
      '';
    var last = state.lastBackup;
    html += '<details class="advanced"' + (auth ? "" : " open") + '><summary>Backup manual</summary><section class="backup"><p class="muted small">' +
      (last ? "Último backup em " + shortDate(last) + "." : "Você ainda não fez nenhum backup.") +
      ' Guarde o código no app de notas ou mande para você mesmo por e-mail. Se trocar de celular ou reinstalar o app, é só restaurar.</p>' +
      '<div class="actions"><button class="btn btn-soft" id="bk-copy">Salvar backup</button><button class="btn btn-soft" id="bk-open">Restaurar</button></div>' +
      '<div id="bk-restore" hidden><textarea class="field" id="bk-text" placeholder="Cole aqui o código do backup" style="margin-top:12px;min-height:90px;font-size:15px"></textarea>' +
      '<div class="actions"><button class="btn btn-primary" id="bk-go">Restaurar progresso</button></div></div></section></details>';
    html += '<div class="center" style="margin-top:18px"><button class="text-btn" id="redo-pl">Refazer o teste de nível</button></div>';
    html += '<div class="center links"><a href="privacy.html" target="_blank" rel="noopener">Política de privacidade</a>' + (auth ? '<button class="text-btn" id="acct-del">Excluir minha conta</button>' : "") + '</div>';
    html += '<p class="foot">' + (auth ? "Seu progresso fica salvo neste aparelho e na sua conta." : "Seu progresso fica salvo neste aparelho.") + '</p>';
    app.innerHTML = html;
    bindProfile(); bindAccount();
    document.getElementById("redo-pl").onclick = function () { go({ name: "placement" }); };
    app.querySelectorAll("[data-goal]").forEach(function (b) { b.onclick = function () { state.goal = +b.getAttribute("data-goal"); save(); render(); }; });
    document.getElementById("bk-copy").onclick = function () { state.lastBackup = today(); save(); share(makeBackup(), "Backup do nowish", "Backup copiado. Guarde no seu app de notas"); setTimeout(render, 2300); };
    document.getElementById("bk-open").onclick = function () { var box = document.getElementById("bk-restore"); box.hidden = !box.hidden; if (!box.hidden) document.getElementById("bk-text").focus(); };
    document.getElementById("bk-go").onclick = function () {
      var s = readBackup(document.getElementById("bk-text").value);
      if (!s) { toast("Código inválido. Copie o backup inteiro"); return; }
      state = s; state.lastBackup = state.lastBackup || today(); state.onboarded = true; save(); updateDot(); toast("Progresso restaurado"); go({ name: "home" });
    };
  }
  // Usa a folha de compartilhar do celular quando existe; senão, copia.
  function share(text, title, okMsg) {
    if (navigator.share) { navigator.share({ title: title, text: text }).catch(function (e) { if (e && e.name !== "AbortError") copy(text, okMsg); }); }
    else copy(text, okMsg);
  }
  function copy(text, okMsg) {
    okMsg = okMsg || "Lista copiada";
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
      try { document.execCommand("copy"); toast(okMsg); } catch (e) { toast("Não foi possível copiar"); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fallback);
    else fallback();
  }

  // ---------- Boas-vindas ----------
  var WELCOME = [
    { t: "Bem-vindo ao nowish.", p: "Inglês nos intervalos do dia: no ônibus, na fila, no café. Do básico ao avançado, um momento de cada vez.", ic: '<path d="M5 19c3-6 11-4 14-12"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="7" r="2"/>' },
    { t: "Funciona sem internet", p: "Instale na tela de início: no iPhone, Safari → Compartilhar → Adicionar à Tela de Início. No Android, menu do Chrome → Instalar app. A nuvem verde no topo mostra que está tudo salvo.", ic: '<path d="M7 18.5h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7 9.5a4.5 4.5 0 0 0 0 9z"/><path d="M9.5 14l2 2 3.5-3.5"/>' },
    { t: "Erre à vontade", p: "Cada erro volta na revisão até você acertar três vezes. Faça backup do progresso uma vez por semana, na aba Perfil.", ic: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v5h-5"/>' }
  ];
  function renderWelcome() {
    var k = view.step || 0, s = WELCOME[k];
    app.innerHTML = '<div class="welcome">' + (k === 0 ? '<div class="w-logo" aria-label="nowish">n<i></i></div>' : '<div class="w-art" style="--m:' + MOD_COLORS[k] + '">' + svg(s.ic, 2) + '</div>') + '<h1>' + s.t + '</h1><p class="muted">' + s.p + '</p>' +
      '<div class="w-dots">' + WELCOME.map(function (_, i) { return '<i class="' + (i === k ? "on" : "") + '"></i>'; }).join("") + '</div></div>' +
      '<div class="dock"><button class="btn btn-primary" id="w-next">' + (k < WELCOME.length - 1 ? "Próximo" : "Começar") + '</button>' +
      (k < WELCOME.length - 1 ? '<button class="text-btn" id="w-skip" style="width:100%">Pular</button>' : "") + '</div>';
    var fin = function () { go({ name: "setup" }); };
    document.getElementById("w-next").onclick = function () { if (k < WELCOME.length - 1) go({ name: "welcome", step: k + 1 }); else fin(); };
    var sk = document.getElementById("w-skip"); if (sk) sk.onclick = fin;
  }

  // ---------- Nivelamento ----------
  var PLACEMENT = [
    { l: "A2", q: "She ___ to work by bus every day.", o: ["go", "goes", "going", "is go"], a: 1 },
    { l: "A2", q: "We ___ the client yesterday.", o: ["call", "calls", "called", "calling"], a: 2 },
    { l: "A2", q: "This phone is ___ than my old one.", o: ["more cheap", "cheaper", "cheapest", "the cheaper"], a: 1 },
    { l: "B1", q: "I've worked here ___ 2023.", o: ["for", "since", "from", "in"], a: 1 },
    { l: "B1", q: "If I ___ more time, I would study more.", o: ["have", "had", "will have", "would have"], a: 1 },
    { l: "B1", q: "The report ___ by the manager yesterday.", o: ["approved", "was approved", "has approved", "is approving"], a: 1 },
    { l: "B2", q: "If you had told me, I ___ you.", o: ["would help", "will help", "would have helped", "helped"], a: 2 },
    { l: "B2", q: "She told me she ___ the email.", o: ["sends", "has sent", "had sent", "will send"], a: 2 },
    { l: "B2", q: "___ the rain, the event was a success.", o: ["Although", "Despite", "However", "Because"], a: 1 },
    { l: "C1", q: "Never ___ such a good result.", o: ["I have seen", "have I seen", "I saw", "did I saw"], a: 1 },
    { l: "C1", q: "I wish I ___ that to the client.", o: ["didn't say", "hadn't said", "haven't said", "wouldn't say"], a: 1 },
    { l: "C1", q: "The project was put on ___ until next year.", o: ["hold", "wait", "stop", "pause"], a: 0 }
  ];
  function renderPlacement() {
    var P = view.p || (view.p = { i: 0, ok: [], pick: null });
    if (P.i >= PLACEMENT.length) return renderPlaced(P);
    var q = PLACEMENT[P.i], bar = '<div class="bar">';
    for (var i = 0; i < PLACEMENT.length; i++) bar += '<i class="' + (i < P.i ? "ok" : i === P.i ? "now" : "") + '"></i>';
    bar += '</div>';
    app.innerHTML = '<div class="qtop"><button class="icon-btn" id="close" aria-label="Sair">' + I.x + '</button>' + bar + '<span class="count">' + (P.i + 1) + '/' + PLACEMENT.length + '</span></div>' +
      '<div class="qctx">Teste de nível. Se não souber, escolha "Não sei": vale mais do que chutar.</div>' +
      '<div class="q">' + qHtml(q.q, P.pick !== null && P.pick >= 0 ? [q.o[P.pick]] : null) + '</div>' +
      '<div class="opts">' + q.o.map(function (o, k) { return '<button class="opt' + (P.pick === k ? " sel" : "") + '" data-p="' + k + '">' + esc(o) + '</button>'; }).join("") + '</div>' +
      '<div class="center"><button class="text-btn" id="dunno">Não sei</button></div>' +
      '<div class="dock"><button class="btn btn-primary" id="pnext"' + (P.pick === null ? " disabled" : "") + '>' + (P.i + 1 < PLACEMENT.length ? "Próxima" : "Ver resultado") + '</button></div>';
    document.getElementById("close").onclick = function () { go({ name: state.onboarded ? "errors" : "welcome", step: WELCOME.length }); };
    app.querySelectorAll("[data-p]").forEach(function (b) { b.onclick = function () { P.pick = +b.getAttribute("data-p"); render(); }; });
    var nextQ = function (k) { P.ok.push(k === q.a); P.i++; P.pick = null; render(); };
    document.getElementById("dunno").onclick = function () { nextQ(-1); };
    document.getElementById("pnext").onclick = function () { if (P.pick !== null) nextQ(P.pick); };
  }
  function placementResult(ok) {
    // Sobe de nível enquanto acertar pelo menos 2 das 3 questões de cada um.
    var est = "A1", order = ["A2", "B1", "B2", "C1"];
    for (var k = 0; k < order.length; k++) {
      if (ok.slice(k * 3, k * 3 + 3).filter(Boolean).length >= 2) est = order[k]; else break;
    }
    var start = est;
    return { est: est, start: start };
  }
  function renderPlaced(P) {
    var r = placementResult(P.ok), L = levelInfo(r.est), S = levelInfo(r.start);
    var note = r.est === "A1" ? "Você começa do básico, com calma. Cada módulo leva poucos dias." :
      r.est === "C1" ? "Excelente! Você começa no avançado. Os níveis abaixo ficam liberados para revisar quando quiser." :
      "Os níveis abaixo ficam liberados para você praticar quando quiser.";
    app.innerHTML = '<div class="welcome"><div class="lv-hero">' + r.est + '</div><h1>Seu nível: ' + r.est + '</h1><p class="muted">' + esc(L.name || "Iniciante") + '. Você acertou ' + P.ok.filter(Boolean).length + ' de ' + PLACEMENT.length + '.</p>' +
      '<p class="muted small" style="margin-top:14px">' + note + '</p></div>' +
      '<div class="dock"><button class="btn btn-primary" id="go-start">Começar no ' + r.start + '</button>' +
      (lvl(r.start) > lvl("A2") ? '<button class="text-btn" id="go-a2" style="width:100%">Prefiro começar do A2</button>' : "") + '</div>';
    if (lvl(r.est) >= lvl("B1")) celebrate();
    var fin = function (code) { state.placement = code; state.estLevel = r.est; state.onboarded = true; save(); scrolledOnce = false; go({ name: "home" }); };
    document.getElementById("go-start").onclick = function () { fin(r.start); };
    var a2 = document.getElementById("go-a2"); if (a2) a2.onclick = function () { fin("A2"); };
  }

  // ---------- Perfil ----------
  function initials() { var n = ((state.profile || {}).name || "").trim(); return n ? n.split(/\s+/).slice(0, 2).map(function (x) { return x[0]; }).join("").toUpperCase() : "?"; }
  function avatarHtml(cls) {
    var ph = (state.profile || {}).photo;
    return '<span class="avatar ' + (cls || "") + '">' + (ph ? '<img src="' + ph + '" alt="">' : '<span>' + esc(initials()) + '</span>') + '</span>';
  }
  // ---------- Subida até o C2 ----------
  // Cada nível ocupa 1/6 da trilha. Níveis abaixo do nivelamento contam como já subidos.
  function climb() {
    var pl = lvl(placement()), cur = studyLevel(), li = lvl(cur.code), mods = modulesOf(cur.code), part = 0;
    mods.forEach(function (w) {
      if (complete(w)) part += 1;
      else part += w.sections.filter(function (x) { return state.sections[x.id] && state.sections[x.id].done; }).length / w.sections.length;
    });
    var t = Math.min(1, (li + (mods.length ? part / mods.length : 0)) / LV.length);
    var left = WEEKS.filter(function (w) { return lvl(w.level) >= Math.max(pl, 0) && !complete(w); }).length;
    return { t: t, code: cur.code, left: left, li: li };
  }
  // Trilha em zigue-zague: um acampamento por nível, alternando os lados da montanha.
  var CAMPS = [[70, 182], [252, 170], [138, 146], [242, 118], [172, 94], [218, 66]], SUMMIT = [205, 40];
  function mountainCard() {
    var c = climb(), pct = Math.round(c.t * 100), pts = CAMPS.concat([SUMMIT]), seg = [], total = 0, i;
    for (i = 0; i < 6; i++) { var dd = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); seg.push(dd); total += dd; }
    // O ponto anda por nível (cada nível vale 1/6), não por distância.
    var pos = c.t * 6, k = Math.min(5, Math.floor(pos)), f = c.t >= 1 ? 1 : pos - k;
    var me = c.t >= 1 ? [SUMMIT[0] - 4, SUMMIT[1] + 4] : [pts[k][0] + (pts[k + 1][0] - pts[k][0]) * f, pts[k][1] + (pts[k + 1][1] - pts[k][1]) * f];
    var doneLen = 0; for (i = 0; i < k; i++) doneLen += seg[i]; doneLen += seg[k] * f;
    var d = "M" + pts.map(function (p) { return p[0] + " " + p[1]; }).join(" L");
    var camps = CAMPS.map(function (p, i) {
      var on = i <= c.li, side = i % 2 ? 1 : -1;
      return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4.5" fill="' + (on ? "#FFD23F" : "#1D33D6") + '" stroke="' + (on ? "#FFD23F" : "rgba(255,255,255,.75)") + '" stroke-width="2"/>' +
        '<text x="' + (p[0] + side * 20) + '" y="' + (p[1] + 4) + '" text-anchor="' + (side > 0 ? "start" : "end") + '" class="climb-lbl' + (on ? " on" : "") + '">' + LV[i] + '</text>';
    }).join("");
    var sub = c.t >= 1 ? "Você chegou ao topo. Inglês proficiente." :
      "Você está no " + c.code + ". Faltam " + c.left + (c.left === 1 ? " módulo" : " módulos") + " até o topo.";
    return '<div class="climb"><div class="climb-head"><div><h3>Sua subida até o C2</h3><p>' + sub + '</p></div><b>' + pct + '%</b></div>' +
      '<div class="climb-art"><svg viewBox="0 8 340 192" aria-hidden="true">' +
        '<path d="M-10 200 L40 150 L80 168 L130 120 L170 140 L240 70 L300 120 L350 92 L350 200 Z" fill="#4A63FF"/>' +
        '<path d="M-10 200 L70 130 L110 150 L205 30 L260 95 L290 80 L350 200 Z" fill="#1D33D6"/>' +
        '<path d="M205 30 L229 58 L218 54 L210 63 L199 55 L188 62 L183 56 Z" fill="#E9EDFF"/>' +
        '<path d="M-10 200 L60 190 L130 197 L220 189 L300 194 L350 186 L350 200 Z" fill="#14249E"/>' +
        '<path d="' + d + '" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-dasharray="4 5" stroke-linecap="round" stroke-linejoin="round"/>' +
        (doneLen > 0 ? '<path d="' + d + '" fill="none" stroke="#FFD23F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="' + doneLen.toFixed(1) + ' 9999"/>' : "") +
        camps +
        '<path d="M205 38 V16" stroke="#fff" stroke-width="2"/><path d="M206 16 L222 21 L206 26 Z" fill="#FFD23F"/>' +
      '</svg><span class="climb-me" style="left:' + (me[0] / 340 * 100).toFixed(2) + '%;top:' + ((me[1] - 8) / 192 * 100).toFixed(2) + '%">' + avatarHtml() + '</span></div></div>';
  }
  function profileCard() {
    var pr = state.profile || {}, sl = studyLevel();
    return '<div class="profile"><button class="av-btn" id="av" aria-label="Trocar foto">' + avatarHtml("big") + '<span class="av-cam">' + svg('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>', 2) + '</span></button>' +
      '<input type="file" id="photo-in" accept="image/*" hidden>' +
      '<div class="grow"><button class="name-btn" id="name-edit">' + (pr.name ? esc(pr.name) : '<span class="muted">Adicionar seu nome</span>') + svg('<path d="M4 20h4L19 9l-4-4L4 16z"/>', 2.2) + '</button>' +
      '<div class="lv-line"><span class="lv-badge sm">' + sl.code + '</span>' + esc(sl.info.name) + '</div>' +
      '<div class="lv-bar"><i style="width:' + sl.pct + '%"></i></div><div class="tiny muted">' + sl.done + ' de ' + sl.total + ' módulos do ' + sl.code + '</div></div></div>';
  }
  function bindProfile() {
    var inp = document.getElementById("photo-in");
    document.getElementById("av").onclick = function () { inp.click(); };
    inp.onchange = function () {
      var f = inp.files && inp.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        var im = new Image();
        im.onload = function () {
          var S = 200, c = document.createElement("canvas"); c.width = S; c.height = S;
          var k = Math.min(im.width, im.height), g = c.getContext("2d");
          g.drawImage(im, (im.width - k) / 2, (im.height - k) / 2, k, k, 0, 0, S, S);
          state.profile = state.profile || {}; state.profile.photo = c.toDataURL("image/jpeg", 0.82); save(); toast("Foto atualizada"); render(); updateTabAvatar();
        };
        im.src = rd.result;
      };
      rd.readAsDataURL(f);
    };
    document.getElementById("name-edit").onclick = function () {
      var b = this, cur = (state.profile || {}).name || "";
      b.outerHTML = '<input class="field name-in" id="name-in" maxlength="40" placeholder="Seu nome" value="' + esc(cur) + '">';
      var i = document.getElementById("name-in"); i.focus();
      var done = function () { state.profile = state.profile || {}; state.profile.name = i.value.trim(); save(); render(); };
      i.onblur = done; i.onkeydown = function (e) { if (e.key === "Enter") i.blur(); };
    };
  }
  function updateTabAvatar() {
    var t = document.querySelector('.tab[data-tab="errors"]'); if (!t) return;
    var ph = (state.profile || {}).photo, ic = t.querySelector(".tab-av");
    if (ph) { if (!ic) { t.querySelector("svg").style.display = "none"; ic = document.createElement("img"); ic.className = "tab-av"; t.insertBefore(ic, t.firstChild); } ic.src = ph; }
  }

  // ---------- Configuração inicial (nome e nível) ----------
  function renderSetup() {
    app.innerHTML = '<div class="welcome"><div class="w-art" style="--m:' + MOD_COLORS[3] + '">' + svg('<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"/>', 2) + '</div>' +
      '<h1>Como podemos te chamar?</h1><input class="field" id="su-name" maxlength="40" placeholder="Seu nome" style="margin-top:18px;text-align:center" value="' + esc((state.profile || {}).name || "") + '">' +
      '<p class="muted small" style="margin-top:22px">Agora, um teste rápido (12 questões, uns 2 minutos) para você começar no nível certo.</p></div>' +
      (api.ready && !auth ? '<div class="center" style="margin-top:14px"><button class="text-btn" id="su-login">Já tenho conta: entrar</button></div>' : "") +
      '<div class="dock"><button class="btn btn-primary" id="su-test">Fazer o teste de nível</button><button class="text-btn" id="su-a2" style="width:100%">Pular e começar do zero (A1)</button></div>';
    var keep = function () { state.profile = state.profile || {}; state.profile.name = document.getElementById("su-name").value.trim(); save(); };
    document.getElementById("su-test").onclick = function () { keep(); go({ name: "placement" }); };
    var sl = document.getElementById("su-login"); if (sl) sl.onclick = function () { keep(); go({ name: "login", from: "setup" }); };
    document.getElementById("su-a2").onclick = function () { keep(); state.placement = "A1"; state.onboarded = true; save(); go({ name: "home" }); };
  }

  // ---------- Conta e sincronização ----------
  // O login é opcional. Com conta, o progresso vai para a nuvem e volta em qualquer aparelho.
  var AUTH_KEY = "nowish-auth";
  var auth = (function () { try { return JSON.parse(localStorage.getItem(AUTH_KEY)) || null; } catch (e) { return null; } })();
  var api = { ready: false, config: null };
  var syncTimer = null, syncing = false, syncState = "idle";
  function saveAuth() { try { if (auth) localStorage.setItem(AUTH_KEY, JSON.stringify(auth)); else localStorage.removeItem(AUTH_KEY); } catch (e) {} }
  function apiFetch(path, opts) {
    opts = opts || {}; opts.headers = opts.headers || {};
    if (auth && auth.token) opts.headers.Authorization = "Bearer " + auth.token;
    if (opts.body && typeof opts.body !== "string") { opts.body = JSON.stringify(opts.body); opts.headers["Content-Type"] = "application/json"; }
    return fetch("api/" + path, opts).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { j._status = r.status; return j; });
    });
  }
  function loadApiConfig() {
    if (!navigator.onLine) return;
    apiFetch("config").then(function (c) {
      if (c._status !== 200 || !(c.googleClientId || c.emailLogin)) return;
      api.ready = true; api.config = c;
      if (auth) { apiFetch("me").then(function (m) { if (m._status === 401) { auth = null; saveAuth(); render(); } else if (m.user) { auth.user = m.user; saveAuth(); } }); syncNow(); }
      if (["home", "errors", "setup"].indexOf(view.name) >= 0) render();
    }).catch(function () {});
  }
  // Campos que só fazem sentido neste aparelho e não vão para a nuvem.
  var LOCAL_ONLY = ["session", "inputMode", "lastBackup"];
  function syncPayload() { var d = {}; for (var k in state) if (LOCAL_ONLY.indexOf(k) < 0) d[k] = state[k]; return d; }
  // Junta o progresso do aparelho com o da nuvem sem perder nada.
  function mergeStates(a, b) {
    if (!b) return a; if (!a) return b;
    var m = JSON.parse(JSON.stringify(a)), k;
    m.results = m.results || {}; m.review = m.review || {}; m.days = m.days || {}; m.sections = m.sections || {};
    for (k in (b.results || {})) { var ra = m.results[k], rb = b.results[k]; if (!ra || (rb.seen || 0) > (ra.seen || 0)) m.results[k] = rb; }
    var ids = {}; for (k in (a.review || {})) ids[k] = 1; for (k in (b.review || {})) ids[k] = 1;
    m.review = {};
    for (k in ids) {
      var sa = ((a.results || {})[k] || {}).seen || 0, sb = ((b.results || {})[k] || {}).seen || 0;
      var src = sb > sa ? b : a; if (src.review && src.review[k]) m.review[k] = src.review[k];
    }
    for (k in (b.days || {})) m.days[k] = Math.max(m.days[k] || 0, b.days[k]);
    for (k in (b.sections || {})) { var x = m.sections[k], y = b.sections[k]; if (!x) m.sections[k] = y; else if (y.done && !x.done) m.sections[k] = y; else if (y.done && x.done && (y.score || 0) > (x.score || 0)) m.sections[k] = y; }
    m.mastered = Math.max(a.mastered || 0, b.mastered || 0);
    ["modStart"].forEach(function (f) { m[f] = m[f] || {}; for (k in (b[f] || {})) if (!m[f][k] || b[f][k] < m[f][k]) m[f][k] = b[f][k]; });
    ["modDone"].forEach(function (f) { m[f] = m[f] || {}; for (k in (b[f] || {})) if (!m[f][k]) m[f][k] = b[f][k]; });
    m.profile = m.profile || {}; var pb = b.profile || {};
    if (!m.profile.name && pb.name) m.profile.name = pb.name;
    if (!m.profile.photo && pb.photo) m.profile.photo = pb.photo;
    ["placement", "estLevel", "goal"].forEach(function (f) { if (!m[f] && b[f]) m[f] = b[f]; });
    if (b.placement && a.placement && lvl(b.placement) > lvl(a.placement) && !Object.keys(a.results || {}).length) m.placement = b.placement;
    m.onboarded = !!(a.onboarded || b.onboarded);
    return m;
  }
  function scheduleSync() {
    if (!auth || !api || !api.ready) return;
    clearTimeout(syncTimer); syncTimer = setTimeout(syncNow, 4000);
  }
  function syncNow() {
    if (!auth || !api.ready || syncing || !navigator.onLine) return Promise.resolve();
    syncing = true; syncState = "syncing";
    var push = function (base, tries) {
      return apiFetch("progress", { method: "PUT", body: { data: syncPayload(), baseVersion: base } }).then(function (r) {
        if (r._status === 409 && tries > 0) return pull().then(function (v) { return push(v, tries - 1); });
        if (r._status === 401) { auth = null; saveAuth(); throw new Error("auth"); }
        if (r.version) { auth.version = r.version; auth.lastSync = Date.now(); saveAuth(); }
      });
    };
    var pull = function () {
      return apiFetch("progress").then(function (r) {
        if (r._status === 401) { auth = null; saveAuth(); throw new Error("auth"); }
        if (r.data) { state = mergeStates(state, r.data); try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
        return r.version || 0;
      });
    };
    return pull().then(function (v) { return push(v, 2); })
      .then(function () { syncState = "ok"; }, function () { syncState = "error"; })
      .then(function () { syncing = false; updateDot(); var el = document.getElementById("sync-line"); if (el) el.textContent = syncLabel(); });
  }
  function syncLabel() {
    if (!auth) return "";
    if (syncState === "syncing") return "Sincronizando…";
    if (syncState === "error") return "Não deu para sincronizar agora. Tentamos de novo depois.";
    if (!auth.lastSync) return "Sincroniza quando houver internet.";
    var d = Math.round((Date.now() - auth.lastSync) / 60000);
    return "Progresso salvo na nuvem " + (d < 1 ? "agora mesmo" : d < 60 ? "há " + d + " min" : "há " + Math.round(d / 60) + " h") + ".";
  }
  window.addEventListener("online", function () { if (!api.ready) loadApiConfig(); else syncNow(); });
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden" && auth && api.ready) { clearTimeout(syncTimer); syncNow(); } });

  function signedIn(res) {
    auth = { token: res.token, user: res.user, version: 0 }; saveAuth();
    state.profile = state.profile || {};
    if (!state.profile.name && res.user.name) state.profile.name = res.user.name;
    if (!state.profile.photo && res.user.picture) state.profile.photo = res.user.picture;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    toast("Pronto! Seu progresso agora fica salvo na nuvem");
    syncNow().then(function () {
      updateTabAvatar();
      // Quem entrou num aparelho novo e já tinha nível definido na conta pula o teste.
      if (state.placement) { state.onboarded = true; save(); }
      go({ name: state.onboarded ? (view.from || "home") : "setup" });
    });
  }

  // ---------- Tela de entrar ----------
  function renderLogin() {
    var V = view, c = api.config || {};
    if (!api.ready) {
      app.innerHTML = '<div class="welcome"><h1>Sem conexão</h1><p class="muted">Para entrar na sua conta, abra o app com internet.</p></div>' +
        '<div class="dock"><button class="btn btn-soft" id="lg-back">Voltar</button></div>';
      document.getElementById("lg-back").onclick = function () { go({ name: V.from || "home" }); };
      return;
    }
    var html = '<div class="login"><button class="icon-btn" id="lg-back" aria-label="Voltar">' + I.back + '</button>' +
      '<div class="w-logo sm" aria-hidden="true">n<i></i></div><h1>Entre na sua conta</h1>' +
      '<p class="muted">Seu progresso fica salvo na nuvem e aparece em qualquer aparelho.</p>';
    if (V.step === "code") {
      html += '<p class="small" style="margin-top:22px">Mandamos um código de 6 dígitos para <b>' + esc(V.email) + '</b>.</p>' +
        '<input class="field code-in" id="lg-code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000">' +
        '<div class="actions"><button class="btn btn-primary" id="lg-verify">Entrar</button></div>' +
        '<div class="center"><button class="text-btn" id="lg-other">Usar outro e-mail</button></div>';
    } else {
      if (c.googleClientId) html += '<div id="g-btn" class="g-btn"></div>' + (c.emailLogin ? '<div class="or"><span>ou</span></div>' : '');
      if (c.emailLogin) html += '<input class="field" id="lg-email" type="email" inputmode="email" autocomplete="email" placeholder="Seu e-mail" value="' + esc(V.email || "") + '">' +
        '<div class="actions"><button class="btn btn-primary" id="lg-send">Receber código por e-mail</button></div>';
      if (!c.googleClientId && !c.emailLogin) html += '<p class="tip" style="margin-top:20px">O login ainda está sendo configurado. Volte em breve.</p>';
    }
    html += '<p class="tiny muted center" style="margin-top:22px">Ao entrar, você concorda com a <a href="privacy.html" target="_blank" rel="noopener">política de privacidade</a>.</p></div>';
    app.innerHTML = html;
    document.getElementById("lg-back").onclick = function () { go({ name: V.from || "home" }); };
    var err = function (r) {
      var m = { invalid_email: "Confira o e-mail digitado", too_many: "Muitas tentativas. Espere um pouco", send_failed: "Não foi possível enviar o e-mail agora",
        wrong_code: "Código incorreto", expired: "Código expirado. Peça um novo", invalid_token: "Não foi possível entrar com o Google" };
      toast(m[r.error] || "Algo deu errado. Tente de novo");
    };
    var send = document.getElementById("lg-send");
    if (send) send.onclick = function () {
      var email = document.getElementById("lg-email").value.trim(); if (!email) return;
      send.disabled = true; send.textContent = "Enviando…";
      apiFetch("auth/email/start", { method: "POST", body: { email: email } }).then(function (r) {
        if (r.ok) go({ name: "login", step: "code", email: email, from: V.from }); else { err(r); send.disabled = false; send.textContent = "Receber código por e-mail"; }
      }).catch(function () { toast("Sem conexão"); send.disabled = false; });
    };
    var ver = document.getElementById("lg-verify");
    if (ver) {
      var ci = document.getElementById("lg-code"); ci.focus();
      var doVerify = function () {
        var code = ci.value.replace(/\D/g, ""); if (code.length !== 6) return;
        ver.disabled = true;
        apiFetch("auth/email/verify", { method: "POST", body: { email: V.email, code: code } }).then(function (r) {
          if (r.token) signedIn(r); else { err(r); ver.disabled = false; }
        }).catch(function () { toast("Sem conexão"); ver.disabled = false; });
      };
      ver.onclick = doVerify; ci.oninput = function () { if (ci.value.replace(/\D/g, "").length === 6) doVerify(); };
      document.getElementById("lg-other").onclick = function () { go({ name: "login", from: V.from }); };
    }
    if (c.googleClientId && document.getElementById("g-btn")) loadGoogle(function () {
      google.accounts.id.initialize({ client_id: c.googleClientId, callback: function (resp) {
        apiFetch("auth/google", { method: "POST", body: { credential: resp.credential } }).then(function (r) { if (r.token) signedIn(r); else err(r); });
      } });
      var box = document.getElementById("g-btn");
      if (box) google.accounts.id.renderButton(box, { theme: "outline", size: "large", shape: "pill", text: "continue_with", locale: "pt-BR", width: Math.min(360, box.clientWidth || 320) });
    });
  }
  var googleLoaded = false;
  function loadGoogle(cb) {
    if (googleLoaded && window.google) return cb();
    var s = document.createElement("script"); s.src = "https://accounts.google.com/gsi/client"; s.async = true;
    s.onload = function () { googleLoaded = true; cb(); };
    s.onerror = function () { var b = document.getElementById("g-btn"); if (b) b.innerHTML = '<p class="tiny muted">Não foi possível carregar o login do Google.</p>'; };
    document.head.appendChild(s);
  }

  // Cartão de conta no Perfil
  function accountCard() {
    if (!api.ready && !auth) return "";
    if (!auth) return '<div class="acct off"><div class="grow"><h3>Salve seu progresso na nuvem</h3><p class="muted small">Crie uma conta grátis para não perder nada se trocar de celular.</p></div>' +
      '<button class="btn btn-primary" id="acct-login">Entrar ou criar conta</button></div>';
    return '<div class="acct"><div class="grow"><div class="tiny muted">Conectado como</div><h3>' + esc(auth.user.email) + '</h3>' +
      '<p class="muted small" id="sync-line">' + syncLabel() + '</p></div>' +
      '<div class="actions"><button class="btn btn-soft" id="acct-sync">Sincronizar</button><button class="btn btn-soft" id="acct-out">Sair</button></div></div>';
  }
  function bindAccount() {
    var l = document.getElementById("acct-login"); if (l) l.onclick = function () { go({ name: "login", from: "errors" }); };
    var s = document.getElementById("acct-sync"); if (s) s.onclick = function () { syncNow().then(function () { toast(syncState === "ok" ? "Tudo sincronizado" : "Não foi possível sincronizar agora"); }); };
    var o = document.getElementById("acct-out"); if (o) o.onclick = function () {
      syncNow().then(function () {
        apiFetch("logout", { method: "POST" }).catch(function () {});
        auth = null; saveAuth(); toast("Você saiu da conta. O progresso continua neste aparelho"); render();
      });
    };
    var d = document.getElementById("acct-del"); if (d) d.onclick = function () {
      if (!d.dataset.armed) { d.dataset.armed = "1"; d.textContent = "Toque de novo para excluir tudo"; d.classList.add("danger"); return; }
      apiFetch("account", { method: "DELETE" }).then(function (r) {
        if (!r.ok) { toast("Não foi possível excluir agora"); return; }
        auth = null; saveAuth(); toast("Conta e dados na nuvem excluídos"); render();
      }).catch(function () { toast("Sem conexão"); });
    };
  }
  // Convite para criar conta, na tela inicial, depois de algum uso.
  function loginNudge() {
    if (auth || !api.ready || state.nudgeOff) return "";
    var n = 0; for (var k in state.results) n += state.results[k].seen;
    if (n < 15) return "";
    return '<div class="nudge acct-nudge"><span class="grow">Crie uma conta grátis para não perder seu progresso.</span><button class="text-btn" id="ng-login">Entrar</button><button class="icon-btn sm" id="ng-x" aria-label="Agora não">' + I.x + '</button></div>';
  }
  function bindNudge() {
    var a = document.getElementById("ng-login"); if (a) a.onclick = function () { go({ name: "login", from: "home" }); };
    var x = document.getElementById("ng-x"); if (x) x.onclick = function () { state.nudgeOff = true; save(); render(); };
  }

  // ---------- Backup ----------
  function makeBackup() { return "FLUENCY1:" + btoa(unescape(encodeURIComponent(JSON.stringify(state)))); }
  function readBackup(txt) {
    var m = String(txt || "").replace(/\s+/g, "").match(/FLUENCY1:([A-Za-z0-9+/=]+)/);
    if (!m) return null;
    try {
      var s = JSON.parse(decodeURIComponent(escape(atob(m[1]))));
      if (!s || !s.results) return null;
      var b = blank(); for (var k in b) if (!(k in s)) s[k] = b[k];
      return s;
    } catch (e) { return null; }
  }
  function needsBackup() {
    if (!Object.keys(state.results).length) return false;
    if (!state.lastBackup) return Object.keys(state.days).length >= 3;
    return state.lastBackup <= addDays(-7);
  }

  // ---------- Indicador offline ----------
  var OFFLINE_FILES = ["./", "index.html", "app.js", "content.js", "content-a2.js", "content-b1.js", "content-a1.js", "content-b2.js", "content-c1.js", "content-c2.js", "content-m1.js", "content-m2.js", "content-m3.js", "course.js", "fonts/bricolage.woff2"];
  var offline = { state: "checking" };
  function offlineIcon() {
    var cloud = '<path d="M7 18.5h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7 9.5a4.5 4.5 0 0 0 0 9z"/>';
    var mark = offline.state === "ok" ? '<path d="M9.5 14l2 2 3.5-3.5"/>' : offline.state === "partial" ? '<path d="M12 11.5v2.5M12 16.2v.1"/>' : '<path d="M12 11.5v4.5M10 14l2 2 2-2"/>';
    return svg(cloud + mark, 1.9);
  }
  function offlineMessage() {
    if (offline.state === "ok") return "Tudo salvo neste aparelho: " + WEEKS.length + " módulos funcionam sem internet";
    if (offline.state === "partial") return "Ainda falta baixar parte do app. Abra com internet";
    return "Baixando o app para usar sem internet…";
  }
  function checkOffline() {
    var set = function (st) {
      if (offline.state === st) return; offline.state = st;
      var b = document.getElementById("offline"); if (b) { b.className = "offline " + st; b.innerHTML = offlineIcon(); }
    };
    if (!("caches" in window) || !("serviceWorker" in navigator)) { set("partial"); return; }
    navigator.serviceWorker.getRegistration().then(function (reg) {
      if (!reg || reg.installing || reg.waiting || !navigator.serviceWorker.controller) { set(reg ? "checking" : "partial"); setTimeout(checkOffline, 2000); return; }
      return Promise.all(OFFLINE_FILES.map(function (f) { return caches.match(f); })).then(function (hits) { set(hits.every(Boolean) ? "ok" : "partial"); });
    }).catch(function () { set("partial"); });
  }

  // ---------- Início do app ----------
  if ("serviceWorker" in navigator) {
    var hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register("sw.js").catch(function () {});
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController) { toast("Conteúdo novo baixado"); setTimeout(function () { location.reload(); }, 900); }
      else checkOffline();
    });
  }
  // Quem já usava o app antes dos níveis continua no B1, onde estava.
  if (!state.placement && Object.keys(state.results).length) { state.placement = "B1"; save(); }
  if (!state.onboarded && Object.keys(state.results).length) { state.onboarded = true; save(); }
  if (!state.onboarded) view = { name: "welcome", step: 0 };
  // Sem zoom: o app se comporta como um app nativo.
  ["gesturestart", "gesturechange", "gestureend"].forEach(function (ev) { document.addEventListener(ev, function (e) { e.preventDefault(); }, { passive: false }); });
  document.addEventListener("touchmove", function (e) { if (e.touches && e.touches.length > 1) e.preventDefault(); }, { passive: false });
  window.__fluencyDebug = { ITEMS: ITEMS, optionsFor: optionsFor };
  updateDot();
  render();
  updateTabAvatar();
  checkOffline();
  loadApiConfig();
})();

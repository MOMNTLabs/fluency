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
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

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
  WEEKS.forEach(function (w) {
    w.sections.forEach(function (s) {
      SECTIONS[s.id] = { section: s, week: w };
      (s.items || []).forEach(function (it, i) {
        it.id = s.id + "-" + (i + 1); it.n = i + 1;
        ITEMS[it.id] = { item: it, section: s, week: w };
      });
    });
  });
  function isQuiz(s) { return s.type === "fill" || s.type === "translate"; }
  WEEKS.forEach(function (w, i) { w.idx = i; w.num = i + 1; });
  function complete(w) { return w.sections.every(function (s) { return state.sections[s.id] && state.sections[s.id].done; }); }
  function started(w) { return w.sections.some(function (s) { return state.sections[s.id]; }); }
  // Um módulo libera quando o anterior é concluído.
  function unlocked(w) { return w.idx === 0 || complete(WEEKS[w.idx - 1]) || started(w); }
  function currentModule() {
    var open = WEEKS.filter(unlocked);
    return open.filter(function (w) { return !complete(w); })[0] || open[open.length - 1];
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
  function speak(text) {
    if (!("speechSynthesis" in window)) { toast("Áudio indisponível neste aparelho"); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(plain(text)); u.lang = "en-US"; u.rate = 0.9; if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }
  function listen(text) { return '<button class="listen" data-speak="' + esc(plain(text)) + '">' + I.sound + 'Ouvir</button>'; }
  app.addEventListener("click", function (e) {
    var b = e.target.closest("[data-speak]"); if (b) { e.stopPropagation(); speak(b.getAttribute("data-speak")); }
  });

  // ---------- Registro de respostas ----------
  function record(id, ok, answer) {
    var snap = { result: JSON.stringify(state.results[id] || null), review: JSON.stringify(state.review[id] || null), mastered: state.mastered };
    var r = state.results[id] || (state.results[id] = { seen: 0, right: 0, wrong: 0 });
    r.seen++; r.at = today();
    var rv = state.review[id];
    if (ok) {
      r.right++;
      if (rv && rv.due <= today()) {
        rv.box++;
        if (rv.box >= 3) { delete state.review[id]; state.mastered++; }
        else rv.due = addDays(rv.box === 1 ? 3 : 7);
      }
    } else {
      r.wrong++; r.last = answer;
      state.review[id] = { box: 0, due: addDays(1), since: (rv && rv.since) || today() };
    }
    state.days[today()] = (state.days[today()] || 0) + 1;
    save(); updateDot();
    return snap;
  }
  function undo(id, snap) {
    var r = JSON.parse(snap.result), rv = JSON.parse(snap.review);
    if (r) state.results[id] = r; else delete state.results[id];
    if (rv) state.review[id] = rv; else delete state.review[id];
    state.mastered = snap.mastered; save(); updateDot();
  }
  function dueIds() { var t = today(); return Object.keys(state.review).filter(function (id) { return ITEMS[id] && state.review[id].due <= t; }); }
  function pendingIds() { return Object.keys(state.review).filter(function (id) { return ITEMS[id]; }); }
  function updateDot() { var n = dueIds().length, d = document.getElementById("dot"); d.hidden = !n; d.textContent = n; }

  // ---------- Navegação ----------
  var view = { name: "home" };
  function go(v) { view = v; render(); window.scrollTo(0, 0); }
  document.getElementById("tabbar").addEventListener("click", function (e) {
    var t = e.target.closest(".tab"); if (t) go({ name: t.getAttribute("data-tab") });
  });
  function setTabs() {
    var inReview = view.session && view.session.kind === "review";
    var map = { home: "home", section: "home", quiz: inReview ? "review" : "home", done: inReview ? "review" : "home", review: "review", errors: "errors" };
    document.querySelectorAll(".tab").forEach(function (t) { t.classList.toggle("on", t.getAttribute("data-tab") === map[view.name]); });
  }
  function render() {
    setTabs();
    ({ home: renderHome, section: renderSection, quiz: renderQuiz, done: renderDone, review: renderReview, errors: renderErrors })[view.name]();
  }
  function top(label, title, right) {
    return '<div class="top"><button class="icon-btn" id="back" aria-label="Voltar">' + I.back + '</button>' +
      '<div class="grow"><div class="label">' + esc(label) + '</div><div class="title">' + esc(title) + '</div></div>' + (right || "") + '</div>';
  }
  function bindBack(to) { var b = document.getElementById("back"); if (b) b.onclick = function () { go({ name: to || "home" }); }; }

  // ---------- Início ----------
  function renderHome() {
    var due = dueIds().length, answered = 0;
    for (var k in state.results) answered += state.results[k].seen;
    var h = new Date().getHours();
    var hi = h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
    var html = '<div class="brand"><div class="wordmark">Fluency<i></i></div><div class="brand-right">' +
      '<button class="offline ' + offline.state + '" id="offline" aria-label="Status offline">' + offlineIcon() + '</button>' +
      '<div class="streak" title="Dias seguidos de estudo">' + I.flame + streak() + '</div></div></div>' +
      '<div class="hello">' + hi + '!</div><div class="date">' + longDate() + '</div>' +
      '<div class="meter"><div><b>' + answered + '</b>respostas</div><div><b>' + state.mastered + '</b>erros superados</div><div><b>' + pendingIds().length + '</b>em revisão</div></div>';
    if (due) {
      html += '<button class="due" id="due"><span class="n">' + due + '</span><span><h3>Revisão de hoje</h3><p>' +
        (due === 1 ? "Uma questão que você errou antes" : "Questões que você errou antes") + '</p></span><span class="go">' + I.next + '</span></button>';
    }
    var cur = currentModule(), doneCount = WEEKS.filter(complete).length;
    html += routeHtml(cur, true);
    html += '<section class="week" id="all"><div class="all-head"><h2 class="sub-h">Todos os módulos</h2><span class="frac">' + doneCount + ' de ' + WEEKS.length + ' concluídos</span></div>' +
      '<div class="overall"><i style="width:' + Math.round(doneCount / WEEKS.length * 100) + '%"></i></div>';
    WEEKS.forEach(function (w) {
      var p = weekProgress(w), isCur = w === cur, isDone = complete(w), isOpen = unlocked(w), exp = expanded[w.id] && isOpen && !isCur;
      var cls = isCur ? "current" : isDone ? "done" : isOpen ? "" : "locked-row";
      var right = isDone ? '<span class="state ok">' + I.done + '</span>' : isCur ? '<span class="frac">' + p.done + '/' + p.total + '</span>' :
        isOpen ? '<span class="frac">' + p.done + '/' + p.total + '</span>' : '<span class="state">' + I.lock + '</span>';
      var meta = isCur ? "Em andamento" : isDone ? "Concluído" : isOpen ? p.done + " de " + p.total + " seções" :
        w.idx === cur.idx + 1 ? "Conclua o " + cur.title + " para liberar" : "Bloqueado";
      html += '<button class="week-row ' + cls + '" data-week="' + w.id + '"' + (isOpen && !isCur ? ' aria-expanded="' + !!exp + '"' : "") + '>' +
        '<span class="mod-num">' + w.num + '</span><span class="grow"><h3>' + esc(w.subtitle) + '</h3><span class="meta">' + meta + '</span></span>' + right + '</button>';
      if (exp) html += routeHtml(w, false);
    });
    html += '</section>';
    if (needsBackup()) html += '<button class="tip tip-btn" id="bk-tip">Faça o backup da semana: um toque na aba Erros.</button>';
    else html += '<div class="tip">Depois de cada rodada, escreva no bloco de notas duas frases suas para cada erro, usando a forma certa.</div>';
    app.innerHTML = html;
    app.querySelectorAll("[data-sec]").forEach(function (b) { b.onclick = function () { openSection(b.getAttribute("data-sec")); }; });
    app.querySelectorAll("[data-week]").forEach(function (b) { b.onclick = function () {
      var w = WEEKS.filter(function (x) { return x.id === b.getAttribute("data-week"); })[0];
      if (w === cur) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      if (!unlocked(w)) { toast("Conclua o " + cur.title + " para liberar"); return; }
      expanded[w.id] = !expanded[w.id]; render();
    }; });
    var r = document.getElementById("due"); if (r) r.onclick = function () { go({ name: "review" }); };
    var bt = document.getElementById("bk-tip"); if (bt) bt.onclick = function () { go({ name: "errors" }); };
    document.getElementById("offline").onclick = function () { toast(offlineMessage()); };
  }
  var expanded = {};
  function weekProgress(w) {
    var d = 0; w.sections.forEach(function (s) { if (state.sections[s.id] && state.sections[s.id].done) d++; });
    return { done: d, total: w.sections.length };
  }
  function routeHtml(w, withHead) {
    var nextFound = false, html = '<section class="week">';
    if (withHead) html += '<div class="week-head"><div class="muted small">' + esc(w.title) + (complete(w) ? ", concluído" : "") + '</div><h2>' + esc(w.subtitle) + '</h2></div>';
    html += '<ol class="route">';
    w.sections.forEach(function (s, i) {
      var d = state.sections[s.id], done = d && d.done, cls = done ? "done" : (!nextFound ? "next" : "");
      if (!done && !nextFound) nextFound = true;
      var meta = done ? (d.total ? "Feito, " + d.score + " de " + d.total : "Feito") : esc(s.subtitle || "");
      html += '<li class="stop ' + cls + '"><button data-sec="' + s.id + '"><span class="pin">' + (done ? I.done : i + 1) + '</span>' +
        '<span class="body"><h3>' + esc(s.title) + '</h3><div class="meta">' + meta + '</div></span></button></li>';
    });
    return html + '</ol></section>';
  }
  function moduleDoneText(m) { var n = WEEKS[m.idx + 1]; return m.title + " concluído" + (n ? ". " + n.title + " liberado" : "!"); }
  function markDone(id) { state.sections[id] = state.sections[id] || {}; state.sections[id].done = true; save(); }
  function openSection(id) {
    var s = SECTIONS[id].section;
    if (s.type === "mix") {
      var ids = buildMix(s);
      if (!ids.length) { toast("Ainda não há questões anteriores"); return; }
      go({ name: "quiz", session: newSession("section", ids, s) });
    } else if (isQuiz(s)) go({ name: "quiz", session: newSession("section", s.items.map(function (it) { return it.id; }), s) });
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
    app.innerHTML = html; bindBack();
    app.querySelectorAll("[data-rev]").forEach(function (b) { b.onclick = function () {
      var el = document.getElementById("rev" + b.getAttribute("data-rev")); el.hidden = !el.hidden; b.textContent = el.hidden ? "Ver tradução" : "Esconder"; }; });
    app.querySelectorAll("[data-flip]").forEach(function (c) { c.onclick = function () {
      var open = c.classList.toggle("open"); c.querySelector(".more").hidden = !open; c.querySelector(".hint").hidden = open; }; });
    document.getElementById("finish").onclick = function () {
      var mod = sectionFinished(s.id);
      toast(mod ? moduleDoneText(mod) : "Seção concluída"); go({ name: "home" });
    };
  }

  // ---------- Exercícios ----------
  function newSession(kind, ids, section) { return { kind: kind, ids: ids, i: 0, phase: "ask", section: section, log: [], answer: "" }; }
  function progressBar(S) {
    var h = '<div class="bar">';
    for (var i = 0; i < S.ids.length; i++) {
      var l = S.log[i], c = l ? (l.ok ? "ok" : "bad") : (i === S.i ? "now" : "");
      h += '<i class="' + c + '"></i>';
    }
    return h + '</div>';
  }
  var PRAISE = ["Isso!", "Certinho!", "Mandou bem!", "Acertou!", "Boa!"], pickN = 0;
  function renderQuiz() {
    var S = view.session, id = S.ids[S.i], ref = ITEMS[id], it = ref.item, sec = ref.section;
    var isMix = S.section && S.section.type === "mix";
    var label = S.kind === "review" ? "Revisão" : isMix ? S.section.title : ref.week.title + ", " + sec.title;
    var title = S.kind === "review" || isMix ? ref.week.title + ", " + sec.title + ", questão " + it.n : sec.subtitle;
    var html = top(label, title, '<span class="count">' + (S.i + 1) + '/' + S.ids.length + '</span>') + progressBar(S);
    var answered = S.phase === "fb";
    if (sec.type === "fill") {
      html += '<div class="q">' + qHtml(it.q, answered ? answerParts(it.full) : null) + '</div>';
      if (S.phase === "ask") {
        html += '<input class="field" type="text" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" placeholder="Sua resposta" aria-label="Sua resposta">' +
          '<div class="actions"><button class="btn btn-primary" id="check">Conferir</button></div>' +
          '<div class="center"><button class="text-btn" id="skip">Não sei, mostrar a resposta</button></div>';
      } else html += feedbackHtml(S, it, true);
    } else {
      html += '<div class="kicker">Como se diz em inglês?</div><div class="q">' + esc(it.q) + '</div>';
      if (S.phase === "ask") {
        html += '<textarea class="field" id="ans" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Escreva aqui, ou só pense na resposta" aria-label="Sua tradução"></textarea>' +
          '<div class="actions"><button class="btn btn-primary" id="show">Ver resposta</button></div>';
      } else if (S.phase === "grade") {
        html += '<div class="result neutral">' + (S.answer ? '<div class="yours">Você escreveu: ' + esc(S.answer) + '</div>' : "") +
          '<p class="sentence">' + fullHtml(it.full) + '</p><div class="why">' + it.why + '</div><div class="row">' + listen(it.full) + '</div></div>' +
          '<p class="note">Compare com a sua. Se o tempo verbal estiver certo, conta como acerto mesmo com outras palavras.</p>' +
          '<div class="actions"><button class="btn btn-soft" id="g-bad">Errei</button><button class="btn btn-primary" id="g-ok">Acertei</button></div>';
      } else html += feedbackHtml(S, it, false);
    }
    app.innerHTML = html; bindBack(S.kind === "review" ? "review" : "home");
    var ans = document.getElementById("ans");
    if (S.phase === "ask") {
      if (sec.type === "fill") {
        ans.focus();
        var check = function (skip) {
          var v = skip ? "" : ans.value.trim(); if (!skip && !v) { ans.focus(); return; }
          S.answer = v; S.ok = !skip && isRight(it, v); S.snap = record(id, S.ok, skip ? "(não soube)" : v);
          S.log.push({ id: id, ok: S.ok }); S.phase = "fb"; render();
        };
        document.getElementById("check").onclick = function () { check(false); };
        document.getElementById("skip").onclick = function () { check(true); };
        ans.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); check(false); } });
      } else {
        document.getElementById("show").onclick = function () { S.answer = ans.value.trim(); S.phase = "grade"; render(); };
      }
    } else if (S.phase === "grade") {
      var grade = function (ok) { S.ok = ok; S.snap = record(id, ok, S.answer || "(só pensei)"); S.log.push({ id: id, ok: ok }); S.phase = "fb"; render(); };
      document.getElementById("g-ok").onclick = function () { grade(true); };
      document.getElementById("g-bad").onclick = function () { grade(false); };
    } else {
      document.getElementById("next").onclick = advance;
      var ov = document.getElementById("override");
      if (ov) ov.onclick = function () { undo(id, S.snap); S.snap = record(id, true, S.answer); S.ok = true; S.log[S.log.length - 1].ok = true; render(); };
    }
  }
  function feedbackHtml(S, it, canOverride) {
    var h = '<div class="result ' + (S.ok ? "ok" : "bad") + '"><div class="verdict"><span class="mark">' + (S.ok ? I.check : I.x) + '</span>' +
      (S.ok ? PRAISE[pickN++ % PRAISE.length] : "Ainda não") + '</div>';
    if (!S.ok && S.answer && canOverride) h += '<div class="yours">Você respondeu <s>' + esc(S.answer) + '</s></div>';
    h += '<p class="sentence">' + fullHtml(it.full) + '</p><div class="why">' + it.why + '</div><div class="row">' + listen(it.full) +
      (!S.ok && canOverride && S.answer ? '<button class="text-btn" id="override" style="padding:6px 0">Eu tinha acertado</button>' : "") + '</div></div>';
    if (!S.ok) h += '<p class="note">Leia a frase certa em voz baixa. Ela volta na revisão de amanhã.</p>';
    h += '<div class="actions"><button class="btn btn-primary" id="next">' + (S.i + 1 < S.ids.length ? "Próxima" : "Ver resultado") + '</button></div>';
    return h;
  }
  function advance() {
    var S = view.session;
    if (S.i + 1 < S.ids.length) { S.i++; S.phase = "ask"; S.answer = ""; render(); window.scrollTo(0, 0); }
    else {
      if (S.kind === "section") {
        var right = S.log.filter(function (l) { return l.ok; }).length;
        S.moduleDone = sectionFinished(S.section.id, { score: right, total: S.ids.length, at: today() });
      }
      go({ name: "done", session: S });
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && view.name === "quiz" && view.session.phase === "fb") { e.preventDefault(); advance(); }
  });

  function renderDone() {
    var S = view.session, right = S.log.filter(function (l) { return l.ok; }).length, total = S.log.length;
    var wrong = S.log.filter(function (l) { return !l.ok; }), ratio = total ? right / total : 0;
    var msg = ratio === 1 ? "Rodada perfeita." : ratio >= 0.75 ? "Muito bom." : ratio >= 0.5 ? "Bom treino." : "Os erros viram o seu material de revisão.";
    var html = '<div class="score">' + right + '<small>/' + total + '</small></div><h1>' + msg + '</h1>' +
      '<p class="muted">' + (S.kind === "review" ? "Revisão concluída" : esc(S.section.title) + " concluída") + '</p>';
    if (S.moduleDone) {
      var m = S.moduleDone, nxt = WEEKS[m.idx + 1], took = daysBetween(state.modStart[m.id], today()) + 1;
      html += '<div class="unlock"><span class="mark">' + I.done + '</span><div><h3>' + esc(m.title) + ' concluído</h3><p>' +
        (nxt ? esc(nxt.title) + " liberado: " + esc(nxt.subtitle) + "." : "Você terminou todos os módulos!") + '</p></div></div>';
      if (nxt && took <= 2) html += '<p class="note">Você fechou este módulo em ' + took + (took === 1 ? " dia" : " dias") + '. Antes de começar o próximo, vale fazer a revisão de erros: com alguns dias entre um módulo e outro, o conteúdo fixa melhor.</p>';
    }
    if (wrong.length) {
      html += '<div class="panel">' + wrong.map(function (l) {
        var it = ITEMS[l.id].item; return '<div class="item"><p class="sentence" style="font-size:17px;margin:0">' + fullHtml(it.full) + '</p><div class="row">' + listen(it.full) + '</div></div>';
      }).join("") + '</div><div class="tip">Agora escreva duas frases suas para cada uma dessas, sobre o seu dia a dia.</div>';
    }
    html += '<div class="actions" style="margin-top:20px"><button class="btn btn-soft" id="again">Refazer</button><button class="btn btn-primary" id="home">Voltar ao início</button></div>';
    app.innerHTML = html;
    document.getElementById("home").onclick = function () { go({ name: "home" }); };
    document.getElementById("again").onclick = function () { go({ name: "quiz", session: newSession(S.kind, S.ids.slice(), S.section) }); };
  }

  // ---------- Revisão ----------
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function renderReview() {
    var due = dueIds(), pend = pendingIds();
    var html = '<h1 style="margin-top:8px">Revisão</h1><p class="muted">Cada erro volta depois de 1, 3 e 7 dias. Acertou três vezes, está superado.</p>';
    if (due.length) {
      html += '<button class="due" id="start" style="margin-top:16px"><span class="n">' + due.length + '</span><span><h3>' +
        (due.length === 1 ? "Questão para hoje" : "Questões para hoje") + '</h3><p>Uns ' + Math.max(2, Math.round(due.length * 0.7)) + ' minutos</p></span><span class="go">' + I.next + '</span></button>';
    } else {
      html += '<div class="empty"><div class="art">' + I.check + '</div><h2>Nada para revisar hoje</h2>' +
        (pend.length ? '<p class="muted small">' + pend.length + (pend.length === 1 ? " questão espera" : " questões esperam") + ' os próximos dias.</p><div class="actions"><button class="btn btn-soft" id="all">Revisar agora mesmo assim</button></div>'
          : '<p class="muted small">Quando você errar uma questão, ela aparece aqui.</p>') + '</div>';
    }
    app.innerHTML = html;
    var st = document.getElementById("start");
    if (st) st.onclick = function () { go({ name: "quiz", session: newSession("review", shuffle(due)) }); };
    var al = document.getElementById("all");
    if (al) al.onclick = function () {
      pend.forEach(function (id) { state.review[id].due = today(); }); save();
      go({ name: "quiz", session: newSession("review", shuffle(pend)) });
    };
  }

  // ---------- Erros ----------
  function renderErrors() {
    var pend = pendingIds().sort();
    var html = '<h1 style="margin-top:8px">Meus erros</h1><p class="muted">No fim de semana, copie a lista e mande para o Claude. Ele usa para ajustar os próximos módulos.</p>';
    if (!pend.length) {
      html += '<div class="empty"><div class="art">' + I.check + '</div><h2>Nenhum erro pendente</h2><p class="muted small">' +
        (state.mastered ? "Você já superou " + state.mastered + (state.mastered === 1 ? " erro." : " erros.") : "Faça uma rodada para começar.") + '</p></div>';
    } else {
      html += '<div class="actions"><button class="btn btn-primary" id="copy">Copiar lista para o Claude</button></div><div class="panel">';
      pend.forEach(function (id) {
        var ref = ITEMS[id], r = state.results[id] || {}, rv = state.review[id], isDue = rv.due <= today();
        var dots = ""; for (var k = 0; k < 3; k++) dots += '<i class="' + (k < rv.box ? "on" : "") + '"></i>';
        html += '<div class="item"><div class="where">' + esc(ref.week.title + ", " + ref.section.title + ", questão " + ref.item.n) + '</div>' +
          '<p class="sentence" style="font-size:17px;margin:0 0 4px">' + fullHtml(ref.item.full) + '</p>' +
          (r.last ? '<div class="yours" style="margin:0">Você respondeu <s>' + esc(r.last) + '</s></div>' : "") +
          '<div class="row"><span class="chip' + (isDue ? " today" : "") + '">' + (isDue ? "Revisar hoje" : "Revisar em " + shortDate(rv.due)) + '</span>' +
          '<span class="dots" title="Acertos na revisão">' + dots + '</span>' + listen(ref.item.full) + '</div></div>';
      });
      html += '</div>';
    }
    var last = state.lastBackup;
    html += '<section class="backup"><h2>Backup do progresso</h2><p class="muted small">' +
      (last ? "Último backup em " + shortDate(last) + "." : "Você ainda não fez nenhum backup.") +
      ' Cole o código no app Notas ou na conversa com o Claude. Se trocar de iPhone ou reinstalar o app, é só restaurar.</p>' +
      '<div class="actions"><button class="btn btn-soft" id="bk-copy">Copiar backup</button><button class="btn btn-soft" id="bk-open">Restaurar</button></div>' +
      '<div id="bk-restore" hidden><textarea class="field" id="bk-text" placeholder="Cole aqui o código do backup" style="margin-top:12px;min-height:90px;font-size:15px"></textarea>' +
      '<div class="actions"><button class="btn btn-primary" id="bk-go">Restaurar progresso</button></div></div></section>';
    html += '<p class="foot">Seu progresso fica salvo neste iPhone.</p>';
    app.innerHTML = html;
    document.getElementById("bk-copy").onclick = function () {
      state.lastBackup = today(); save();
      copy(makeBackup(), "Backup copiado. Cole no Notas ou no Claude");
      setTimeout(render, 2300);
    };
    document.getElementById("bk-open").onclick = function () {
      var box = document.getElementById("bk-restore"); box.hidden = !box.hidden; if (!box.hidden) document.getElementById("bk-text").focus();
    };
    document.getElementById("bk-go").onclick = function () {
      var s = readBackup(document.getElementById("bk-text").value);
      if (!s) { toast("Código inválido. Copie o backup inteiro"); return; }
      state = s; state.lastBackup = state.lastBackup || today(); save(); updateDot(); toast("Progresso restaurado"); go({ name: "home" });
    };
    var c = document.getElementById("copy");
    if (c) c.onclick = function () {
      var lines = ["Meus erros no Fluency:"];
      pend.forEach(function (id) {
        var ref = ITEMS[id], r = state.results[id] || {};
        lines.push("- " + ref.week.title + ", " + ref.section.title + ", questão " + ref.item.n + ": " + plain(ref.item.q) +
          " | Minha resposta: " + (r.last || "-") + " | Certo: " + plain(ref.item.full) + " | Errei " + (r.wrong || 1) + "x");
      });
      copy(lines.join("\n"));
    };
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
  var OFFLINE_FILES = ["./", "index.html", "app.js", "content.js", "content-m1.js", "content-m2.js", "content-m3.js", "fonts/bricolage.woff2"];
  var offline = { state: "checking" };
  function offlineIcon() {
    var cloud = '<path d="M7 18.5h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7 9.5a4.5 4.5 0 0 0 0 9z"/>';
    var mark = offline.state === "ok" ? '<path d="M9.5 14l2 2 3.5-3.5"/>' : offline.state === "partial" ? '<path d="M12 11.5v2.5M12 16.2v.1"/>' : '<path d="M12 11.5v4.5M10 14l2 2 2-2"/>';
    return svg(cloud + mark, 1.9);
  }
  function offlineMessage() {
    var n = WEEKS.length;
    if (offline.state === "ok") return "Tudo salvo no iPhone: " + n + " módulos funcionam sem internet";
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
      return Promise.all(OFFLINE_FILES.map(function (f) { return caches.match(f); })).then(function (hits) {
        set(hits.every(Boolean) ? "ok" : "partial");
      });
    }).catch(function () { set("partial"); });
  }

  // ---------- Offline ----------
  if ("serviceWorker" in navigator) {
    var hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register("sw.js").catch(function () {});
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController) { toast("Conteúdo novo baixado"); setTimeout(function () { location.reload(); }, 900); }
      else checkOffline();
    });
  }

  updateDot();
  render();
  checkOffline();
})();

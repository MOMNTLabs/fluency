(function () {
  "use strict";

  // ---------- Armazenamento ----------
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

  // ---------- Utilidades ----------
  var app = document.getElementById("app");
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function plain(t) { return String(t).replace(/[{}]/g, ""); }
  function fullHtml(t) { return esc(t).replace(/\{([^}]*)\}/g, "<b>$1</b>"); }
  function qHtml(t) { return esc(t).replace(/___/g, '<span class="blank"></span>'); }
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
    if (!("speechSynthesis" in window)) { toast("Áudio não disponível neste aparelho"); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(plain(text)); u.lang = "en-US"; u.rate = 0.9; if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }
  function speakBtn(text) { return '<button class="speak" data-speak="' + esc(plain(text)) + '">🔊 Ouvir</button>'; }
  app.addEventListener("click", function (e) {
    var b = e.target.closest("[data-speak]"); if (b) speak(b.getAttribute("data-speak"));
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
  function updateDot() {
    var n = dueIds().length, d = document.getElementById("dot");
    d.hidden = !n; d.textContent = n;
  }

  // ---------- Navegação ----------
  var view = { name: "home" };
  function go(v) { view = v; render(); window.scrollTo(0, 0); }
  document.getElementById("tabbar").addEventListener("click", function (e) {
    var t = e.target.closest(".tab"); if (!t) return;
    go({ name: t.getAttribute("data-tab") });
  });
  function setTabs() {
    var map = { home: "home", section: "home", quiz: view.session && view.session.kind === "review" ? "review" : "home", done: "home", review: "review", errors: "errors" };
    document.querySelectorAll(".tab").forEach(function (t) { t.classList.toggle("on", t.getAttribute("data-tab") === map[view.name]); });
  }
  function render() {
    setTabs();
    ({ home: renderHome, section: renderSection, quiz: renderQuiz, done: renderDone, review: renderReview, errors: renderErrors })[view.name]();
  }

  // ---------- Início ----------
  function renderHome() {
    var due = dueIds().length, answered = 0;
    for (var k in state.results) answered += state.results[k].seen;
    var h = new Date().getHours();
    var hi = h < 12 ? "Bom dia!" : h < 18 ? "Boa tarde!" : "Boa noite!";
    var html = '<h1>Inglês no ônibus</h1><p class="muted">' + hi + ' Dia de estudo, 20 a 30 minutos.</p>';
    html += '<div class="stats"><div class="stat"><b>' + streak() + '</b><span>dias seguidos</span></div>' +
      '<div class="stat"><b>' + answered + '</b><span>respostas</span></div>' +
      '<div class="stat"><b>' + state.mastered + '</b><span>erros superados</span></div></div>';
    if (due) {
      html += '<button class="list-item review-cta" data-go="review"><div class="grow"><h3>Revisão do dia</h3>' +
        '<div class="muted small">' + due + (due === 1 ? " questão que você errou antes" : " questões que você errou antes") + '</div></div><span class="chev">›</span></button>';
    }
    WEEKS.slice().reverse().forEach(function (w) {
      html += '<div class="week-head"><h2>' + esc(w.title) + '</h2><div class="muted small">' + esc(w.subtitle) + '</div></div>';
      w.sections.forEach(function (s, i) {
        var d = state.sections[s.id], done = d && d.done;
        var meta = done && d.total ? "Feito · " + d.score + " de " + d.total : (done ? "Feito" : esc(s.subtitle || ""));
        html += '<button class="list-item" data-sec="' + s.id + '"><span class="badge' + (done ? " done" : "") + '">' + (done ? "✓" : i + 1) + '</span>' +
          '<div class="grow"><h3>' + esc(s.title) + '</h3><div class="muted small">' + meta + '</div></div><span class="chev">›</span></button>';
      });
    });
    html += '<div class="tip">Depois de cada rodada, escreva no bloco de notas 2 frases suas para cada erro, usando a forma certa. É o que mais fixa.</div>';
    app.innerHTML = html;
    app.querySelectorAll("[data-sec]").forEach(function (b) { b.onclick = function () { openSection(b.getAttribute("data-sec")); }; });
    var r = app.querySelector("[data-go=review]"); if (r) r.onclick = function () { go({ name: "review" }); };
  }
  function topbar(title) { return '<div class="topbar"><button class="back" id="back">‹ Voltar</button></div>' + (title || ""); }
  function bindBack() { var b = document.getElementById("back"); if (b) b.onclick = function () { go({ name: "home" }); }; }
  function markDone(id) { state.sections[id] = state.sections[id] || {}; state.sections[id].done = true; save(); }

  function openSection(id) {
    var s = SECTIONS[id].section;
    if (isQuiz(s)) go({ name: "quiz", session: newSession("section", s.items.map(function (it) { return it.id; }), s) });
    else go({ name: "section", id: id });
  }

  // ---------- Seções de leitura ----------
  function renderSection() {
    var s = SECTIONS[view.id].section, html = topbar('<h1>' + esc(s.title) + '</h1><p class="muted">' + esc(s.subtitle || "") + '</p>');
    if (s.type === "summary") {
      if (s.intro) html += '<p>' + s.intro + '</p>';
      s.cards.forEach(function (c) {
        html += '<div class="card summary-card"><h3>' + esc(c.title) + '</h3>' + c.lines.map(function (l) { return '<div class="small">' + l + '</div>'; }).join("") +
          '<div class="row" style="margin-top:8px"><div class="grow ex">' + esc(c.example) + '</div>' + speakBtn(c.example) + '</div></div>';
      });
    } else if (s.type === "reading") {
      s.items.forEach(function (it, i) {
        html += '<div class="card"><div class="row"><div class="grow" style="font-weight:600">' + esc(it.en) + '</div></div>' +
          '<div class="row" style="margin-top:8px"><button class="link" data-rev="' + i + '">Ver tradução</button><span class="grow"></span>' + speakBtn(it.en) + '</div>' +
          '<div class="reveal" id="rev' + i + '" hidden>' + esc(it.pt) + '</div></div>';
      });
    } else if (s.type === "vocab") {
      html += '<div class="vocab-grid">';
      s.items.forEach(function (it, i) {
        html += '<div class="card flip" data-flip="' + i + '"><div class="en">' + esc(it.en) + '</div>' +
          '<div id="fl' + i + '" hidden><div style="margin-top:6px">' + esc(it.pt) + '</div><div class="ex muted small">' + esc(it.ex) + '</div>' +
          '<div style="margin-top:8px">' + speakBtn(it.ex) + '</div></div></div>';
      });
      html += '</div>';
    }
    html += '<button class="btn btn-primary" id="finish" style="margin-top:8px">Concluir</button>';
    app.innerHTML = html; bindBack();
    app.querySelectorAll("[data-rev]").forEach(function (b) { b.onclick = function () {
      var el = document.getElementById("rev" + b.getAttribute("data-rev")); el.hidden = !el.hidden; b.textContent = el.hidden ? "Ver tradução" : "Esconder"; }; });
    app.querySelectorAll("[data-flip]").forEach(function (c) { c.onclick = function (e) {
      if (e.target.closest("[data-speak]")) return; var el = document.getElementById("fl" + c.getAttribute("data-flip")); el.hidden = !el.hidden; }; });
    document.getElementById("finish").onclick = function () { markDone(s.id); toast("Seção concluída ✓"); go({ name: "home" }); };
  }

  // ---------- Exercícios ----------
  function newSession(kind, ids, section) {
    return { kind: kind, ids: ids, i: 0, phase: "ask", section: section, log: [], answer: "" };
  }
  function renderQuiz() {
    var S = view.session, id = S.ids[S.i], ref = ITEMS[id], it = ref.item, sec = ref.section;
    var title = S.kind === "review" ? "Revisão" : sec.title;
    var sub = S.kind === "review" ? sec.title + " · questão " + it.n : sec.subtitle;
    var html = topbar('<div class="row"><div class="grow"><h2>' + esc(title) + '</h2><div class="muted small">' + esc(sub) + '</div></div>' +
      '<div class="muted small">' + (S.i + 1) + ' / ' + S.ids.length + '</div></div>');
    html += '<div class="progress"><i style="width:' + Math.round(S.i / S.ids.length * 100) + '%"></i></div>';
    if (sec.type === "fill") {
      html += '<div class="q">' + qHtml(it.q) + '</div>';
      if (S.phase === "ask") {
        html += '<input type="text" id="ans" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" placeholder="Digite a resposta">' +
          '<div class="btn-row"><button class="btn btn-primary" id="check">Conferir</button></div>' +
          '<button class="link" id="skip">Não sei, mostrar resposta</button>';
      } else {
        html += feedbackHtml(S, it, true);
      }
    } else {
      html += '<div class="muted small">Traduza para o inglês:</div><div class="q">' + esc(it.q) + '</div>';
      if (S.phase === "ask") {
        html += '<textarea id="ans" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" placeholder="Escreva em inglês (ou só pense na resposta)"></textarea>' +
          '<div class="btn-row"><button class="btn btn-primary" id="show">Ver resposta</button></div>';
      } else if (S.phase === "grade") {
        html += (S.answer ? '<div class="card small"><span class="muted">Você escreveu:</span><br>' + esc(S.answer) + '</div>' : "") +
          '<div class="feedback neutral"><h3>Resposta sugerida</h3><div class="answer">' + fullHtml(it.full) + '</div>' +
          '<div class="small muted">' + it.why + '</div><div style="margin-top:8px">' + speakBtn(it.full) + '</div></div>' +
          '<p class="small muted" style="margin-top:12px">Compare com a sua. Pequenas diferenças de palavras contam como acerto se o tempo verbal estiver certo.</p>' +
          '<div class="btn-row"><button class="btn btn-bad" id="g-bad">Errei</button><button class="btn btn-ok" id="g-ok">Acertei</button></div>';
      } else {
        html += feedbackHtml(S, it, false);
      }
    }
    app.innerHTML = html; bindBack();
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
      var next = document.getElementById("next"); next.onclick = advance;
      var ov = document.getElementById("override");
      if (ov) ov.onclick = function () { undo(id, S.snap); S.snap = record(id, true, S.answer); S.ok = true; S.log[S.log.length - 1].ok = true; render(); };
    }
  }
  function feedbackHtml(S, it, canOverride) {
    var h = '<div class="feedback ' + (S.ok ? "ok" : "bad") + '"><h3>' + (S.ok ? pick(["Isso!", "Certinho!", "Mandou bem!", "Acertou!"]) : "Quase lá") + '</h3>';
    if (!S.ok && S.answer && canOverride) h += '<div class="small">Você respondeu: <s>' + esc(S.answer) + '</s></div>';
    h += '<div class="answer">' + fullHtml(it.full) + '</div><div class="small">' + it.why + '</div>' +
      '<div style="margin-top:8px">' + speakBtn(it.full) + '</div></div>';
    if (!S.ok) h += '<p class="small muted" style="margin-top:10px">Leia a frase certa em voz baixa. Ela volta na revisão amanhã.</p>';
    if (!S.ok && canOverride && S.answer) h += '<button class="link" id="override">Minha resposta estava certa</button>';
    h += '<div class="btn-row"><button class="btn btn-primary" id="next">' + (S.i + 1 < S.ids.length ? "Próxima" : "Ver resultado") + '</button></div>';
    return h;
  }
  var pickN = 0;
  function pick(a) { pickN++; return a[pickN % a.length]; }
  function advance() {
    var S = view.session;
    if (S.i + 1 < S.ids.length) { S.i++; S.phase = "ask"; S.answer = ""; render(); window.scrollTo(0, 0); }
    else {
      if (S.kind === "section") {
        var right = S.log.filter(function (l) { return l.ok; }).length;
        state.sections[S.section.id] = { done: true, score: right, total: S.ids.length, at: today() }; save();
      }
      go({ name: "done", session: S });
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && view.name === "quiz" && view.session.phase === "fb") { e.preventDefault(); advance(); }
  });

  function renderDone() {
    var S = view.session, right = S.log.filter(function (l) { return l.ok; }).length, total = S.log.length;
    var wrong = S.log.filter(function (l) { return !l.ok; });
    var msg = right === total ? "Perfeito! 🎉" : right / total >= 0.75 ? "Muito bom!" : right / total >= 0.5 ? "Bom treino!" : "Os erros são o melhor material de estudo.";
    var html = '<h1>' + msg + '</h1><p class="muted">' + (S.kind === "review" ? "Revisão concluída" : esc(S.section.title)) + '</p>' +
      '<div class="stats" style="grid-template-columns:1fr 1fr"><div class="stat"><b>' + right + ' / ' + total + '</b><span>acertos</span></div>' +
      '<div class="stat"><b>' + wrong.length + '</b><span>para revisar</span></div></div>';
    if (wrong.length) {
      html += '<div class="card"><h3>Frases para fixar</h3>' + wrong.map(function (l) {
        var it = ITEMS[l.id].item; return '<div class="err"><div class="answer">' + fullHtml(it.full) + '</div>' + speakBtn(it.full) + '</div>';
      }).join("") + '</div><div class="tip">Agora escreva no bloco de notas 2 frases suas para cada uma dessas, sobre o seu dia a dia.</div>';
    }
    html += '<div class="btn-row"><button class="btn btn-ghost" id="again">Refazer</button><button class="btn btn-primary" id="home">Início</button></div>';
    app.innerHTML = html;
    document.getElementById("home").onclick = function () { go({ name: "home" }); };
    document.getElementById("again").onclick = function () { go({ name: "quiz", session: newSession(S.kind, S.ids.slice(), S.section) }); };
  }

  // ---------- Revisão ----------
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function renderReview() {
    var due = dueIds(), pend = pendingIds();
    var html = '<h1>Revisão</h1><p class="muted">As questões que você errou voltam em 1, 3 e 7 dias. Acertou três vezes, está superada.</p>';
    if (due.length) {
      html += '<div class="card"><h2>' + due.length + (due.length === 1 ? " questão para hoje" : " questões para hoje") + '</h2>' +
        '<p class="muted small">Leva uns ' + Math.max(2, Math.round(due.length * 0.7)) + ' minutos.</p><button class="btn btn-primary" id="start">Começar revisão</button></div>';
    } else {
      html += '<div class="card empty"><div class="big">✓</div><h2>Nada para revisar hoje</h2>' +
        (pend.length ? '<p class="muted small">' + pend.length + ' em espera para os próximos dias.</p><button class="btn btn-ghost" id="all">Revisar mesmo assim</button>'
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

  // ---------- Meus erros ----------
  function renderErrors() {
    var pend = pendingIds();
    var html = '<h1>Meus erros</h1><p class="muted">Copie a lista e me mande no fim de semana. Eu uso para montar a próxima semana.</p>';
    if (!pend.length) {
      html += '<div class="card empty"><div class="big">✎</div><h2>Nenhum erro pendente</h2><p class="muted small">' +
        (state.mastered ? "Você já superou " + state.mastered + (state.mastered === 1 ? " erro." : " erros.") : "Faça uma rodada para começar.") + '</p></div>';
    } else {
      html += '<button class="btn btn-primary" id="copy">Copiar lista para o Claude</button><div class="card" style="margin-top:12px">';
      pend.sort().forEach(function (id) {
        var ref = ITEMS[id], r = state.results[id] || {}, rv = state.review[id];
        var when = rv.due <= today() ? "revisar hoje" : "revisar em " + rv.due.split("-").reverse().slice(0, 2).join("/");
        html += '<div class="err"><div class="muted small">' + esc(ref.week.title + " · " + ref.section.title + " · " + ref.item.n) + '</div>' +
          '<div class="answer">' + fullHtml(ref.item.full) + '</div>' +
          (r.last ? '<div class="small">Você respondeu: <s>' + esc(r.last) + '</s></div>' : "") +
          '<div class="row" style="margin-top:6px"><span class="tag">' + when + ' · ' + rv.box + '/3</span><span class="grow"></span>' + speakBtn(ref.item.full) + '</div></div>';
      });
      html += '</div>';
    }
    html += '<p class="muted small" style="text-align:center;margin-top:24px">Seu progresso fica salvo só neste iPhone.</p>';
    app.innerHTML = html;
    var c = document.getElementById("copy");
    if (c) c.onclick = function () {
      var lines = ["Meus erros no app de inglês:"];
      pend.sort().forEach(function (id) {
        var ref = ITEMS[id], r = state.results[id] || {};
        lines.push("- " + ref.week.title + ", " + ref.section.title + ", questão " + ref.item.n + ": " + plain(ref.item.q) +
          " | Minha resposta: " + (r.last || "-") + " | Certo: " + plain(ref.item.full) + " | Errei " + (r.wrong || 1) + "x");
      });
      copy(lines.join("\n"));
    };
  }
  function copy(text) {
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
      try { document.execCommand("copy"); toast("Copiado! Cole na conversa com o Claude"); } catch (e) { toast("Não consegui copiar"); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast("Copiado! Cole na conversa com o Claude"); }, fallback);
    } else fallback();
  }

  // ---------- Offline ----------
  if ("serviceWorker" in navigator) {
    var hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register("sw.js").catch(function () {});
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController) { toast("Conteúdo novo baixado"); setTimeout(function () { location.reload(); }, 900); }
    });
  }

  updateDot();
  render();
})();

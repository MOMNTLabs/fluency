// Organização do curso em níveis (CEFR). A ordem aqui define o percurso.
window.LEVELS = [
  { id: "A1", name: "Iniciante", ready: true, about: "Verbo to be, presente simples, artigos, números e horas." },
  { id: "A2", name: "Básico", ready: true, about: "Passado, futuro, comparações e quantidades." },
  { id: "B1", name: "Intermediário", ready: true, about: "Tempos verbais com segurança, if, voz passiva e modais." },
  { id: "B2", name: "Intermediário avançado", ready: true, about: "Tempos perfeitos contínuos, wish, discurso indireto, phrasal verbs, deduções e conectores." },
  { id: "C1", name: "Avançado", ready: false, about: "Inversões, wish e if only, expressões idiomáticas e registro formal." },
  { id: "C2", name: "Proficiente", ready: false, about: "Nuances, collocations, ironia e subentendidos." }
];
window.COURSE = {
  A1: ["a1m1", "a1m2", "a1m3", "a1m4", "a1m5", "a1m6"],
  A2: ["a2m1", "a2m2", "a2m3", "a2m4", "s5", "a2m5"],
  B1: ["s1", "s2", "b1m3", "s3", "s6", "b1m6", "s9", "s10", "s7"],
  B2: ["b2m1", "s4", "b2m2", "s8", "b2m3", "b2m4", "s11", "s12"]
};
(function () {
  var byId = {}; window.WEEKS.forEach(function (w) { byId[w.id] = w; });
  var ordered = [];
  window.LEVELS.forEach(function (L) {
    (window.COURSE[L.id] || []).forEach(function (id, k) {
      var w = byId[id]; if (!w) return;
      w.level = L.id; w.title = "Módulo " + L.id + "." + (k + 1); ordered.push(w);
    });
  });
  window.WEEKS = ordered;
})();

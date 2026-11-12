// Conteúdo das semanas. Para adicionar uma semana nova, acrescente um objeto ao array WEEKS.
// Respostas: {chaves} marcam a parte que é a resposta na frase completa.
// Atalhos para escrever as semanas seguintes.
window.F = function (q, a, full, why) { return { q: q, a: [].concat(a), full: full, why: why }; };
window.T = function (q, full, why) { return { q: q, full: full, why: why }; };
window.R = function (en, pt) { return { en: en, pt: pt }; };
window.V = function (en, pt, ex) { return { en: en, pt: pt, ex: ex }; };
window.C = function (title, lines, example) { return { title: title, lines: [].concat(lines), example: example }; };

window.WEEKS = [
  {
    id: "s1",
   
    title: "Módulo 1",
    subtitle: "Tempos verbais: passado, have, had e would",
    sections: [
      {
        id: "s1-resumo",
        type: "summary",
        title: "Resumo de bolso",
        subtitle: "Leia antes dos exercícios",
        intro: "Antes de escolher o verbo, pergunte: <b>onde está a ação no tempo?</b>",
        cards: [
          { title: "Momento definido no passado → passado simples",
            lines: ["<i>went, finished, approved</i>", "Pistas: yesterday, last week, in 2023, when I got…"],
            example: "I finished the video yesterday." },
          { title: "Já / até agora / continua → have/has + particípio",
            lines: ["O momento não importa, o efeito é agora.", "Pistas: already, since, for, never, ever"],
            example: "I've worked here since October." },
          { title: "\"Tinha + verbo\" → had + particípio",
            lines: ["O passado antes de outro passado.", "Pistas: by the time, when… already, she told me…"],
            example: "The bus had already left." },
          { title: "\"-ria\" → would",
            lines: ["Adoraria = <i>would love</i> · faria = <i>would do</i>"],
            example: "I'd love to work abroad." },
          { title: "O \"se\" imaginário",
            lines: ["<b>If + passado, would + verbo</b>", "Com <i>be</i>: <i>If I <b>were</b> you…</i>"],
            example: "If I had more time, I would study every day." },
          { title: "Contando o que alguém disse",
            lines: ["O verbo recua um tempo:", "\"I've finished\" → <i>She said she <b>had</b> finished.</i>"],
            example: "She said she had finished." }
        ]
      },
      {
        id: "s1-r1",
        type: "fill",
        title: "Rodada 1",
        subtitle: "if + passado → would",
        items: [
          { q: "If I ___ (have) more followers, I would get more clients.", a: ["had"],
            full: "If I {had} more followers, I would get more clients.", why: "A parte do \"se\" vai no passado." },
          { q: "If the light were better, the video ___ (look) more professional.", a: ["would look", "'d look"],
            full: "If the light were better, the video {would look} more professional.", why: "Resultado imaginado = \"ficaria\"." },
          { q: "If I ___ (be) you, I would post in the evening.", a: ["were", "was"],
            full: "If I {were} you, I would post in the evening.", why: "Com <i>be</i>, o padrão é <i>were</i> (\"se eu fosse você\"). <i>Was</i> também aparece na fala." },
          { q: "We ___ (sell) more if the caption were shorter.", a: ["would sell", "'d sell"],
            full: "We {would sell} more if the caption were shorter.", why: "\"Venderíamos\" → would." },
          { q: "If the bus ___ (come) on time, I would arrive earlier.", a: ["came"],
            full: "If the bus {came} on time, I would arrive earlier.", why: "\"Se o ônibus viesse\" = passado." },
          { q: "I ___ (buy) a new camera if I had the money.", a: ["would buy", "'d buy"],
            full: "I {would buy} a new camera if I had the money.", why: "\"Compraria\" → would. O <i>have</i> não entra nessa estrutura." },
          { q: "If my boss ___ (like) the new template, we would use it with every client.", a: ["liked"],
            full: "If my boss {liked} the new template, we would use it with every client.", why: "\"Se o chefe gostasse\" = passado." },
          { q: "What ___ you ___ (do) if you lived abroad?", a: ["would do", "would you do"],
            full: "What {would} you {do} if you lived abroad?", why: "<i>What would you do…?</i> = \"o que você faria?\"" }
        ]
      },
      {
        id: "s1-r2",
        type: "fill",
        title: "Rodada 2",
        subtitle: "had, have ou passado simples?",
        items: [
          { q: "When I got home, I realized I ___ (leave) my charger at the office.", a: ["had left", "'d left"],
            full: "When I got home, I realized I {had left} my charger at the office.", why: "\"Tinha deixado\", antes de chegar em casa." },
          { q: "My boss said he ___ (already/see) the new proposal.", a: ["had already seen", "'d already seen"],
            full: "My boss said he {had already seen} the new proposal.", why: "Contando o que ele disse, o verbo recua um tempo." },
          { q: "I ___ (finish) the edit at 5 p.m. and sent it to the client.", a: ["finished"],
            full: "I {finished} the edit at 5 p.m. and sent it to the client.", why: "Às 5 da tarde = momento definido." },
          { q: "By the time the video went live, we ___ (fix) all the subtitles.", a: ["had fixed", "'d fixed"],
            full: "By the time the video went live, we {had fixed} all the subtitles.", why: "<i>By the time</i> + coisa feita antes = had." },
          { q: "I ___ (learn) a lot since I started at the agency.", a: ["have learned", "'ve learned", "have learnt", "'ve learnt"],
            full: "I {have learned} a lot since I started at the agency.", why: "Desde que comecei, e continua até agora." },
          { q: "The client called because he ___ (not/receive) the file.", a: ["hadn't received", "had not received"],
            full: "The client called because he {hadn't received} the file.", why: "Ele \"não tinha recebido\" quando ligou." },
          { q: "Last Friday we ___ (record) two videos.", a: ["recorded"],
            full: "Last Friday we {recorded} two videos.", why: "<i>Last Friday</i> = momento definido." },
          { q: "She told me she ___ (never/work) with big clients.", a: ["had never worked", "'d never worked"],
            full: "She told me she {had never worked} with big clients.", why: "Contando o que ela disse: \"nunca tinha trabalhado\"." }
        ]
      },
      {
        id: "s1-r3",
        type: "translate",
        title: "Rodada 3",
        subtitle: "Traduza para o inglês",
        items: [
          { q: "Se eu tivesse mais tempo, eu estudaria inglês todo dia.",
            full: "If I had more time, I would study English every day.", why: "Se + passado (had), resultado com would." },
          { q: "Quando cheguei ao trabalho, a reunião já tinha começado.",
            full: "When I got to work, the meeting had already started.", why: "\"Tinha começado\" = had started. Também vale <i>By the time I got to work…</i>" },
          { q: "Eu adoraria aprender a negociar melhor.",
            full: "I'd love to learn to negotiate better.", why: "\"Adoraria\" = would love (I'd love)." },
          { q: "Ele disse que tinha gostado do vídeo.",
            full: "He said he had liked the video.", why: "Contando o que alguém disse + \"tinha\" = had." },
          { q: "Já mandei o orçamento. (Está com o cliente agora.)",
            full: "I've already sent the quote.", why: "Já aconteceu e o efeito é agora = have." },
          { q: "O que você faria se ganhasse na loteria?",
            full: "What would you do if you won the lottery?", why: "\"Faria\" = would do; \"se ganhasse\" = if you won." }
        ]
      },
      {
        id: "s1-r4",
        type: "fill",
        title: "Rodada 4",
        subtitle: "Tudo misturado",
        items: [
          { q: "I ___ (see) that video last week.", a: ["saw"],
            full: "I {saw} that video last week.", why: "<i>Last week</i> = momento definido → passado simples." },
          { q: "I ___ (already/send) the file to the client. It's in his inbox now.", a: ["have already sent", "'ve already sent"],
            full: "I {have already sent} the file to the client.", why: "Já aconteceu e o efeito é agora → have." },
          { q: "When I opened the project, I realized someone ___ (delete) the music.", a: ["had deleted", "'d deleted"],
            full: "When I opened the project, I realized someone {had deleted} the music.", why: "\"Alguém tinha apagado\", antes de você abrir." },
          { q: "If I ___ (know) more English, I would watch courses from the US.", a: ["knew"],
            full: "If I {knew} more English, I would watch courses from the US.", why: "\"Se eu soubesse\" = passado. <i>Know → knew</i>." },
          { q: "I ___ (love) to visit New York someday.", a: ["would love", "'d love"],
            full: "I {would love} to visit New York someday.", why: "\"Adoraria\" → would love." },
          { q: "My coworker said she ___ (finish) the report.", a: ["had finished", "'d finished"],
            full: "My coworker said she {had finished} the report.", why: "Contando o que ela disse, o verbo recua: had." },
          { q: "We ___ (post) every day since Monday.", a: ["have posted", "'ve posted"],
            full: "We {have posted} every day since Monday.", why: "<i>Since</i> + continua até agora → have." },
          { q: "If the client ___ (pay) more, we would make longer videos.", a: ["paid"],
            full: "If the client {paid} more, we would make longer videos.", why: "\"Se o cliente pagasse\" = passado. <i>Pay → paid</i>." }
        ]
      },
      {
        id: "s1-leitura",
        type: "reading",
        title: "Para ler no caminho",
        subtitle: "Tente entender antes de ver a tradução",
        items: [
          { en: "I take the bus to work every morning.", pt: "Pego ônibus para o trabalho toda manhã." },
          { en: "I've worked at the agency since October.", pt: "Trabalho na agência desde outubro." },
          { en: "Yesterday I called three clients and sent two quotes.", pt: "Ontem liguei para três clientes e mandei dois orçamentos." },
          { en: "By the time I got to the office, the team had already started the meeting.", pt: "Quando cheguei ao escritório, a equipe já tinha começado a reunião." },
          { en: "If I had more time, I would study English every day.", pt: "Se eu tivesse mais tempo, estudaria inglês todo dia." },
          { en: "I'd love to lead a big project for the agency.", pt: "Eu adoraria liderar um projeto grande para a agência." },
          { en: "My boss told me he had liked the last video.", pt: "Meu chefe me disse que tinha gostado do último vídeo." },
          { en: "If this carousel got more engagement, we would turn it into a series.", pt: "Se esse carrossel tivesse mais engajamento, transformaríamos em uma série." },
          { en: "I've already checked what's trending this week.", pt: "Já conferi o que está em alta esta semana." }
        ]
      },
      {
        id: "s1-vocab",
        type: "vocab",
        title: "Vocabulário de marketing",
        subtitle: "Toque no cartão para ver o significado",
        items: [
          { en: "trend / trending", pt: "tendência / em alta", ex: "What's trending on Instagram this week?" },
          { en: "engagement", pt: "engajamento", ex: "This carousel got a lot of engagement." },
          { en: "reach", pt: "alcance", ex: "Our reach doubled last month." },
          { en: "caption", pt: "legenda (do post)", ex: "Keep the caption short." },
          { en: "subtitles", pt: "legendas (do vídeo)", ex: "I added subtitles to the video." },
          { en: "lead", pt: "potencial cliente", ex: "The ad brought us twenty new leads." },
          { en: "to go viral", pt: "viralizar", ex: "The video went viral overnight." },
          { en: "to come up with", pt: "bolar, ter (uma ideia)", ex: "I need to come up with a new idea." }
        ]
      }
    ]
  }
];

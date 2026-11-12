// Nível B1 (módulos novos). A ordem fica em course.js.
window.WEEKS.push(
  {
    id: "b1m3", title: "Módulo", subtitle: "was doing e used to",
    sections: [
      { id: "b1m3-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Duas formas de olhar o passado: <b>uma cena em andamento</b> e <b>um hábito que acabou</b>.",
        cards: [
          C("was / were + -ing = estava fazendo", ["Uma ação em andamento no passado."], "I was writing an email when the client called."),
          C("when × while", ["when + ação curta que interrompe", "while + ação longa, em andamento"], "While I was driving, my phone rang."),
          C("used to + verbo = costumava, fazia (e não faz mais)", ["Hábito ou situação antiga."], "I used to work in a bank."),
          C("Negativa e pergunta", ["didn't use to (sem d)", "Did you use to…?"], "She didn't use to like meetings.")
        ] },
      { id: "b1m3-r1", type: "fill", title: "Rodada 1", subtitle: "was / were + -ing",
        items: [
          F("I ___ (write) an email when the client called.", "was writing", "I {was writing} an email when the client called.", "Ação em andamento, interrompida → was writing."),
          F("They ___ (have) lunch when the power went out.", "were having", "They {were having} lunch when the power went out.", "they → were + -ing."),
          F("What ___ you ___ (do) at 3 p.m. yesterday?", "were doing", "What {were} you {doing} at 3 p.m. yesterday?", "Horário exato no passado → were … doing."),
          F("While she ___ (present), the projector stopped working.", "was presenting", "While she {was presenting}, the projector stopped working.", "while + ação longa → was presenting."),
          F("The phone rang while I ___ (drive).", "was driving", "The phone rang while I {was driving}.", "while → was driving."),
          F("We ___ (not/work) when the system crashed. It was Sunday.", ["weren't working", "were not working"], "We {weren't working} when the system crashed.", "Negativa → weren't + -ing."),
          F("I saw him while I ___ (wait) for the bus.", "was waiting", "I saw him while I {was waiting} for the bus.", "while → was waiting."),
          F("It ___ (rain) when we left the office.", "was raining", "It {was raining} when we left the office.", "Cena em andamento → was raining.")
        ] },
      { id: "b1m3-r2", type: "fill", title: "Rodada 2", subtitle: "used to",
        items: [
          F("I ___ (work) in a bank before this job.", "used to work", "I {used to work} in a bank before this job.", "Situação antiga → used to work."),
          F("She ___ (not/like) coffee, but now she drinks it every day.", ["didn't use to like", "did not use to like"], "She {didn't use to like} coffee.", "Negativa → didn't use to (sem d)."),
          F("We ___ (print) every report, but now everything is digital.", "used to print", "We {used to print} every report.", "Hábito que acabou → used to."),
          F("___ you ___ (live) in São Paulo?", "did use to live", "{Did} you {use to live} in São Paulo?", "Pergunta → Did you use to…?"),
          F("Our office ___ (be) smaller.", "used to be", "Our office {used to be} smaller.", "Situação antiga → used to be."),
          F("He ___ (play) football every weekend when he was younger.", ["used to play", "played"], "He {used to play} football every weekend.", "Hábito antigo → used to play."),
          F("People ___ (send) faxes in the 90s.", ["used to send", "sent"], "People {used to send} faxes in the 90s.", "Hábito antigo → used to send."),
          F("When I was a kid, I ___ (want) to be a pilot.", ["used to want", "wanted"], "When I was a kid, I {used to want} to be a pilot.", "used to want ou wanted: os dois funcionam.")
        ] },
      { id: "b1m3-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu estava escrevendo quando você ligou.", "I was writing when you called.", "Em andamento → was writing."),
          T("O que você estava fazendo?", "What were you doing?", "were … doing."),
          T("Eu trabalhava num banco. (não trabalho mais)", "I used to work in a bank.", "Situação antiga → used to."),
          T("Enquanto ela apresentava, o projetor parou.", "While she was presenting, the projector stopped.", "while + was presenting."),
          T("Nós imprimíamos tudo antes.", "We used to print everything before.", "Hábito antigo → used to."),
          T("Estava chovendo quando eu saí.", "It was raining when I left.", "Cena → was raining.")
        ] },
      { id: "b1m3-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "b1m3-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I was preparing the report when my manager called me.", "Eu estava preparando o relatório quando meu gestor me ligou."),
          R("While we were talking, the client arrived.", "Enquanto conversávamos, o cliente chegou."),
          R("I used to take the bus, but now I ride a bike to work.", "Eu pegava ônibus, mas agora vou de bicicleta para o trabalho."),
          R("Our company used to have only five employees.", "Nossa empresa tinha só cinco funcionários."),
          R("What were you doing when the system went down?", "O que você estava fazendo quando o sistema caiu?"),
          R("She didn't use to like meetings, but now she leads them.", "Ela não gostava de reuniões, mas agora é ela que conduz.")
        ] },
      { id: "b1m3-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("employee", "funcionário", "We hired two new employees."),
          V("to go down", "cair (sistema, site)", "The website went down for an hour."),
          V("power outage", "queda de energia", "There was a power outage yesterday."),
          V("to lead", "conduzir, liderar", "She leads the sales team."),
          V("to hire", "contratar", "We're hiring a designer."),
          V("downtown", "centro da cidade", "Our office is downtown.")
        ] }
    ]
  },
  {
    id: "b1m6", title: "Módulo", subtitle: "who, which, that, where, whose",
    sections: [
      { id: "b1m6-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Palavras que ligam uma frase a uma pessoa, coisa ou lugar. Em português, quase tudo vira <b>\"que\"</b>.",
        cards: [
          C("who = que (pessoas)", [], "The client who called is waiting."),
          C("which = que (coisas)", [], "The report which you sent is great."),
          C("that = que (pessoas ou coisas)", ["Mais informal e muito comum."], "The file that I need is here."),
          C("where = onde (lugares)", [], "This is the office where I work."),
          C("whose = cujo, de quem (posse)", [], "She's the colleague whose laptop broke."),
          C("Pode sumir", ["Quando o \"que\" não é o sujeito, dá para tirar."], "The file (that) I need is here.")
        ] },
      { id: "b1m6-r1", type: "fill", title: "Rodada 1", subtitle: "Qual palavra liga as frases?",
        items: [
          F("The client ___ called this morning wants a new proposal.", ["who", "that"], "The client {who} called this morning wants a new proposal.", "Pessoa → who (ou that)."),
          F("This is the software ___ we use every day.", ["which", "that"], "This is the software {which} we use every day.", "Coisa → which (ou that)."),
          F("That's the office ___ I started my career.", "where", "That's the office {where} I started my career.", "Lugar → where."),
          F("She's the colleague ___ laptop was stolen.", "whose", "She's the colleague {whose} laptop was stolen.", "Posse (o notebook dela) → whose."),
          F("The supplier ___ delivers our boxes is always on time.", ["who", "that"], "The supplier {who} delivers our boxes is always on time.", "Pessoa ou empresa → who / that."),
          F("I lost the file ___ you sent me.", ["which", "that"], "I lost the file {which} you sent me.", "Coisa → which / that."),
          F("This is the city ___ our biggest client is based.", "where", "This is the city {where} our biggest client is based.", "Lugar → where."),
          F("The manager ___ team won the prize is very happy.", "whose", "The manager {whose} team won the prize is very happy.", "A equipe dele → whose.")
        ] },
      { id: "b1m6-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("People ___ work in sales talk a lot on the phone.", ["who", "that"], "People {who} work in sales talk a lot on the phone.", "Pessoas → who."),
          F("The room ___ we have our calls is on the second floor.", "where", "The room {where} we have our calls is on the second floor.", "Lugar → where."),
          F("The product ___ we launched last year sold well.", ["which", "that"], "The product {which} we launched last year sold well.", "Coisa → which / that."),
          F("Do you know the guy ___ car is parked outside?", "whose", "Do you know the guy {whose} car is parked outside?", "O carro dele → whose."),
          F("The email ___ I wrote yesterday had a typo.", ["which", "that"], "The email {which} I wrote yesterday had a typo.", "Coisa → which / that."),
          F("The intern ___ started on Monday is very smart.", ["who", "that"], "The intern {who} started on Monday is very smart.", "Pessoa → who."),
          F("The warehouse ___ we keep the stock is far from here.", "where", "The warehouse {where} we keep the stock is far from here.", "Lugar → where."),
          F("A designer is a person ___ creates visual content.", ["who", "that"], "A designer is a person {who} creates visual content.", "Pessoa → who.")
        ] },
      { id: "b1m6-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("O cliente que ligou quer uma reunião.", "The client who called wants a meeting.", "Pessoa → who."),
          T("Esse é o arquivo que você precisa.", "This is the file that you need.", "Coisa → that. Também vale <i>the file you need</i>."),
          T("Esse é o escritório onde eu trabalho.", "This is the office where I work.", "Lugar → where."),
          T("Ela é a colega cujo notebook quebrou.", "She's the colleague whose laptop broke.", "Posse → whose."),
          T("O produto que lançamos vendeu bem.", "The product that we launched sold well.", "Coisa → that / which."),
          T("Pessoas que trabalham com vendas falam muito.", "People who work in sales talk a lot.", "Pessoas → who.")
        ] },
      { id: "b1m6-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "b1m6-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("The client who visited us yesterday signed a two-year contract.", "O cliente que nos visitou ontem assinou um contrato de dois anos."),
          R("This is the tool that saves me the most time.", "Essa é a ferramenta que mais me economiza tempo."),
          R("The restaurant where we had lunch was great.", "O restaurante onde almoçamos era ótimo."),
          R("I work with a designer whose ideas are always original.", "Trabalho com uma designer cujas ideias são sempre originais."),
          R("The orders that arrived late were all from the same supplier.", "Os pedidos que chegaram atrasados eram todos do mesmo fornecedor."),
          R("Is there anyone who can help me with this spreadsheet?", "Tem alguém que possa me ajudar com esta planilha?")
        ] },
      { id: "b1m6-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("tool", "ferramenta", "This tool saves a lot of time."),
          V("spreadsheet", "planilha", "I updated the spreadsheet."),
          V("intern", "estagiário", "The intern starts on Monday."),
          V("stock", "estoque", "We're low on stock."),
          V("based in", "sediado em", "The company is based in São Paulo."),
          V("floor", "andar", "The meeting room is on the third floor.")
        ] }
    ]
  }
);

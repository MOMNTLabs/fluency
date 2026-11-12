// Nível A1 (iniciante). A ordem fica em course.js.
window.WEEKS.push(
  {
    id: "a1m1", title: "Módulo", subtitle: "Verbo to be: am, is, are",
    sections: [
      { id: "a1m1-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "O <b>to be</b> é o \"ser\" e o \"estar\" ao mesmo tempo.",
        cards: [
          C("Quem combina com quem", ["I → am (I'm)", "you, we, they → are (you're, we're, they're)", "he, she, it → is (he's, she's, it's)"], "I'm a designer."),
          C("Negativa: + not", ["I'm not, he isn't, they aren't"], "He isn't at work today."),
          C("Pergunta: o verbo vem antes", ["Are you…? Is she…?"], "Are you ready?"),
          C("Idade também usa to be", ["Em português é \"ter\" anos. Em inglês, \"ser\"."], "I'm 28 years old.")
        ] },
      { id: "a1m1-r1", type: "fill", title: "Rodada 1", subtitle: "am, is ou are?",
        items: [
          F("I ___ a designer.", "am", "I {am} a designer.", "I → am."),
          F("She ___ my manager.", "is", "She {is} my manager.", "she → is."),
          F("They ___ in the meeting room.", "are", "They {are} in the meeting room.", "they → are."),
          F("We ___ ready for the presentation.", "are", "We {are} ready for the presentation.", "we → are."),
          F("It ___ cold in the office today.", "is", "It {is} cold in the office today.", "it → is."),
          F("He ___ at work today. (negativa)", ["isn't", "is not"], "He {isn't} at work today.", "Negativa com he → isn't."),
          F("___ you from Brazil?", "are", "{Are} you from Brazil?", "Pergunta: Are you…?"),
          F("I ___ 28 years old.", "am", "I {am} 28 years old.", "Idade usa to be.")
        ] },
      { id: "a1m1-r2", type: "fill", title: "Rodada 2", subtitle: "Negativas e perguntas",
        items: [
          F("My colleagues ___ very nice.", "are", "My colleagues {are} very nice.", "Plural → are."),
          F("The coffee machine ___ broken.", "is", "The coffee machine {is} broken.", "Uma coisa → is."),
          F("___ the client here?", "is", "{Is} the client here?", "Pergunta com o cliente (he) → Is."),
          F("You ___ late! (negativa)", ["aren't", "are not"], "You {aren't} late!", "you → aren't."),
          F("I ___ tired today. (negativa)", ["am not", "'m not"], "I {am not} tired today.", "I → am not. Não existe \"amn't\"."),
          F("Where ___ the reports?", "are", "Where {are} the reports?", "Plural → are."),
          F("She ___ 30 years old.", "is", "She {is} 30 years old.", "Idade usa to be."),
          F("___ they in the office now?", "are", "{Are} they in the office now?", "Pergunta: Are they…?")
        ] },
      { id: "a1m1-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu sou do Brasil.", "I'm from Brazil.", "I am → I'm."),
          T("Ela é minha gestora.", "She's my manager.", "she → is."),
          T("Nós estamos prontos.", "We're ready.", "we → are."),
          T("Ele não está aqui.", "He isn't here.", "Negativa → isn't."),
          T("Você está cansado?", "Are you tired?", "Pergunta: o verbo vem antes."),
          T("Eu tenho 25 anos.", "I'm 25 years old.", "Idade usa to be, não have.")
        ] },
      { id: "a1m1-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões para fixar", count: 8 },
      { id: "a1m1-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Hi, I'm Lucas. I'm a salesperson.", "Oi, eu sou o Lucas. Sou vendedor."),
          R("I'm from Brazil, and I'm 27 years old.", "Sou do Brasil e tenho 27 anos."),
          R("My office is downtown.", "Meu escritório fica no centro."),
          R("My colleagues are friendly and helpful.", "Meus colegas são simpáticos e prestativos."),
          R("Our manager isn't here today.", "Nosso gestor não está aqui hoje."),
          R("Are you new here? Welcome to the team!", "Você é novo aqui? Bem-vindo à equipe!")
        ] },
      { id: "a1m1-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("job", "trabalho, emprego", "I like my job."),
          V("salesperson", "vendedor", "She's a great salesperson."),
          V("team", "equipe", "Welcome to the team!"),
          V("ready", "pronto", "Are you ready?"),
          V("tired", "cansado", "I'm tired today."),
          V("friendly", "simpático", "The clients are very friendly.")
        ] }
    ]
  },
  {
    id: "a1m2", title: "Módulo", subtitle: "Presente simples: I work, she works",
    sections: [
      { id: "a1m2-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "O presente simples fala de <b>rotina e fatos</b>.",
        cards: [
          C("Quase sempre igual", ["I, you, we, they + verbo puro"], "I work in marketing."),
          C("he, she, it ganham s", ["works, goes (es), has (irregular), studies (y → ies)"], "She works in sales."),
          C("Negativa: don't / doesn't + verbo puro", ["Com doesn't, o verbo perde o s."], "She doesn't drink coffee."),
          C("Pergunta: Do / Does + verbo puro", [], "Does he speak English?")
        ] },
      { id: "a1m2-r1", type: "fill", title: "Rodada 1", subtitle: "Com ou sem s?",
        items: [
          F("I ___ (work) in the marketing team.", "work", "I {work} in the marketing team.", "I → verbo puro."),
          F("She ___ (work) in sales.", "works", "She {works} in sales.", "she → + s."),
          F("He ___ (go) to the office by car.", "goes", "He {goes} to the office by car.", "go → goes."),
          F("We ___ (start) at 8 a.m.", "start", "We {start} at 8 a.m.", "we → verbo puro."),
          F("My boss ___ (have) a lot of meetings.", "has", "My boss {has} a lot of meetings.", "have → has com he / she."),
          F("They ___ (not/work) on Sundays.", ["don't work", "do not work"], "They {don't work} on Sundays.", "they → don't."),
          F("She ___ (not/drink) coffee.", ["doesn't drink", "does not drink"], "She {doesn't drink} coffee.", "she → doesn't + verbo puro."),
          F("___ you ___ (speak) English?", "do speak", "{Do} you {speak} English?", "Pergunta com you → Do.")
        ] },
      { id: "a1m2-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("Our company ___ (sell) furniture.", "sells", "Our company {sells} furniture.", "company (it) → sells."),
          F("He ___ (study) English at night.", "studies", "He {studies} English at night.", "study → studies."),
          F("I ___ (live) near the office.", "live", "I {live} near the office.", "I → verbo puro."),
          F("The store ___ (open) at 9 a.m.", "opens", "The store {opens} at 9 a.m.", "store (it) → opens."),
          F("___ she ___ (like) her job?", "does like", "{Does} she {like} her job?", "Pergunta com she → Does."),
          F("We ___ (not/use) paper at work.", ["don't use", "do not use"], "We {don't use} paper at work.", "we → don't."),
          F("My colleague ___ (watch) series in English.", "watches", "My colleague {watches} series in English.", "watch → watches (ch + es)."),
          F("What time ___ you ___ (finish) work?", "do finish", "What time {do} you {finish} work?", "Pergunta com you → do.")
        ] },
      { id: "a1m2-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu trabalho no marketing.", "I work in marketing.", "I → verbo puro."),
          T("Ela trabalha no comercial.", "She works in sales.", "she → works."),
          T("Ele não fala inglês.", "He doesn't speak English.", "doesn't + verbo puro."),
          T("Você gosta do seu trabalho?", "Do you like your job?", "Do + you + verbo."),
          T("Nós começamos às 8.", "We start at 8.", "we → verbo puro."),
          T("A loja abre às 9.", "The store opens at 9.", "store → opens.")
        ] },
      { id: "a1m2-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "a1m2-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I work in an agency with twenty people.", "Trabalho numa agência com vinte pessoas."),
          R("I start at nine and finish at six.", "Começo às nove e termino às seis."),
          R("My colleague Ana works in sales.", "Minha colega Ana trabalha no comercial."),
          R("She talks to clients every day.", "Ela fala com clientes todo dia."),
          R("We don't work on weekends.", "Não trabalhamos nos fins de semana."),
          R("Do you take the bus to work?", "Você pega ônibus para o trabalho?")
        ] },
      { id: "a1m2-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to start", "começar", "We start at nine."),
          V("to finish", "terminar", "I finish work at six."),
          V("every day", "todo dia", "I take the bus every day."),
          V("weekend", "fim de semana", "See you after the weekend."),
          V("company", "empresa", "Our company is small."),
          V("to sell", "vender", "We sell online.")
        ] }
    ]
  },
  {
    id: "a1m3", title: "Módulo", subtitle: "a, an, the, plurais e this / that",
    sections: [
      { id: "a1m3-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Pequenas palavras que aparecem em quase toda frase.",
        cards: [
          C("a × an: o som decide", ["a + som de consoante: a client, a meeting", "an + som de vogal: an email, an hour (o h é mudo)"], "She sent me an email."),
          C("the = o, a, os, as (algo específico)", ["Quando os dois sabem de qual coisa se fala."], "The client called again."),
          C("Plural", ["+ s: clients, + es: boxes, y → ies: companies", "Irregulares: person → people, woman → women"], "There are ten people on the team."),
          C("this, that, these, those", ["this / these = perto (este, estes)", "that / those = longe (aquele, aqueles)"], "These documents are important.")
        ] },
      { id: "a1m3-r1", type: "fill", title: "Rodada 1", subtitle: "a, an, the e plurais",
        items: [
          F("I have ___ meeting at 10.", "a", "I have {a} meeting at 10.", "meeting começa com som de consoante → a."),
          F("She sent me ___ email.", "an", "She sent me {an} email.", "email começa com som de vogal → an."),
          F("We need ___ hour to finish.", "an", "We need {an} hour to finish.", "O h de hour é mudo → an."),
          F("___ client from yesterday called again.", "the", "{The} client from yesterday called again.", "Um cliente específico → the."),
          F("There are ten ___ (person) on the team.", "people", "There are ten {people} on the team.", "person → people (irregular)."),
          F("We have three new ___ (company) as clients.", "companies", "We have three new {companies} as clients.", "y → ies."),
          F("Please put the files in these ___ (box).", "boxes", "Please put the files in these {boxes}.", "box → boxes."),
          F("She is ___ engineer.", "an", "She is {an} engineer.", "engineer começa com som de vogal → an.")
        ] },
      { id: "a1m3-r2", type: "fill", title: "Rodada 2", subtitle: "this, that, these, those",
        items: [
          F("___ laptop here is mine. (este)", "this", "{This} laptop here is mine.", "Perto, singular → this."),
          F("___ chairs over there are new. (aquelas)", "those", "{Those} chairs over there are new.", "Longe, plural → those."),
          F("___ documents on my desk are important. (estes)", "these", "{These} documents on my desk are important.", "Perto, plural → these."),
          F("Look at ___ building across the street! (aquele)", "that", "Look at {that} building across the street!", "Longe, singular → that."),
          F("We have two ___ (woman) on the board.", "women", "We have two {women} on the board.", "woman → women."),
          F("He has ___ idea.", "an", "He has {an} idea.", "idea começa com som de vogal → an."),
          F("Can you send me ___ file we talked about?", "the", "Can you send me {the} file we talked about?", "Arquivo específico → the."),
          F("I need ___ new phone.", "a", "I need {a} new phone.", "new começa com som de consoante → a.")
        ] },
      { id: "a1m3-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu tenho uma reunião.", "I have a meeting.", "a + meeting."),
          T("Ela mandou um e-mail.", "She sent an email.", "an + email."),
          T("O cliente ligou.", "The client called.", "Específico → the."),
          T("Essas caixas são pesadas.", "These boxes are heavy.", "Perto, plural → these."),
          T("Aquela cadeira é nova.", "That chair is new.", "Longe, singular → that."),
          T("Temos muitas pessoas na equipe.", "We have a lot of people on the team.", "person → people.")
        ] },
      { id: "a1m3-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "a1m3-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("This is my desk, and that is my manager's office.", "Esta é a minha mesa, e aquela é a sala do meu gestor."),
          R("I have an important meeting today.", "Tenho uma reunião importante hoje."),
          R("The meeting is with a new client.", "A reunião é com um cliente novo."),
          R("These documents are for the client.", "Esses documentos são para o cliente."),
          R("There are fifteen people in our company.", "Há quinze pessoas na nossa empresa."),
          R("Can you give me an example?", "Pode me dar um exemplo?")
        ] },
      { id: "a1m3-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("chair", "cadeira", "This chair is very comfortable."),
          V("building", "prédio", "Our office is in that building."),
          V("document", "documento", "Please sign this document."),
          V("idea", "ideia", "That's a great idea!"),
          V("example", "exemplo", "Can you give me an example?"),
          V("heavy", "pesado", "These boxes are heavy.")
        ] }
    ]
  },
  {
    id: "a1m4", title: "Módulo", subtitle: "There is, there are e onde as coisas estão",
    sections: [
      { id: "a1m4-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "O \"tem\" de \"tem uma reunião\" é <b>there is / there are</b>, não <i>have</i>.",
        cards: [
          C("there is + singular", ["Forma curta: there's"], "There is a printer on the second floor."),
          C("there are + plural", [], "There are five people in the room."),
          C("Negativa e pergunta", ["There isn't / There aren't any…", "Is there…? Are there…?"], "Is there any coffee?"),
          C("Onde está?", ["in = dentro, on = em cima, under = embaixo", "next to = ao lado, between = entre, in front of = na frente"], "The bank is next to the pharmacy.")
        ] },
      { id: "a1m4-r1", type: "fill", title: "Rodada 1", subtitle: "there is, there are e lugar",
        items: [
          F("___ a printer on the second floor.", ["there is", "there's"], "{There is} a printer on the second floor.", "Uma impressora → there is."),
          F("___ ten people in the meeting room.", "there are", "{There are} ten people in the meeting room.", "Plural → there are."),
          F("___ any coffee? (pergunta)", "is there", "{Is there} any coffee?", "Pergunta no singular → Is there."),
          F("___ any chairs in the room. (negativa)", ["there aren't", "there are not"], "{There aren't} any chairs in the room.", "Plural negativo → there aren't."),
          F("The keys are ___ the drawer. (dentro)", "in", "The keys are {in} the drawer.", "Dentro → in."),
          F("The laptop is ___ the desk. (em cima)", "on", "The laptop is {on} the desk.", "Em cima → on."),
          F("The bag is ___ the table. (embaixo)", "under", "The bag is {under} the table.", "Embaixo → under."),
          F("The bank is ___ the pharmacy. (ao lado)", "next to", "The bank is {next to} the pharmacy.", "Ao lado → next to.")
        ] },
      { id: "a1m4-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("___ a problem with the system.", ["there's", "there is"], "{There's} a problem with the system.", "Um problema → there's."),
          F("___ many clients in December? (pergunta)", "are there", "{Are there} many clients in December?", "Pergunta no plural → Are there."),
          F("There ___ a meeting at 3 p.m.", "is", "There {is} a meeting at 3 p.m.", "Uma reunião → is."),
          F("There ___ two new interns this month.", "are", "There {are} two new interns this month.", "Dois estagiários → are."),
          F("The printer is ___ the two windows. (entre)", "between", "The printer is {between} the two windows.", "Entre → between."),
          F("The taxi is ___ the building. (na frente)", "in front of", "The taxi is {in front of} the building.", "Na frente → in front of."),
          F("___ a bathroom on this floor? (pergunta)", "is there", "{Is there} a bathroom on this floor?", "Pergunta no singular → Is there."),
          F("___ any messages for me. (negativa)", ["there aren't", "there are not"], "{There aren't} any messages for me.", "Plural negativo → there aren't.")
        ] },
      { id: "a1m4-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Tem uma reunião às 3.", "There is a meeting at 3.", "\"Tem\" → there is."),
          T("Há cinco pessoas na sala.", "There are five people in the room.", "Plural → there are."),
          T("Tem café?", "Is there any coffee?", "Pergunta → Is there."),
          T("O notebook está em cima da mesa.", "The laptop is on the desk.", "Em cima → on."),
          T("O banco fica ao lado da farmácia.", "The bank is next to the pharmacy.", "Ao lado → next to."),
          T("Não tem cadeiras.", "There aren't any chairs.", "Plural negativo → there aren't any.")
        ] },
      { id: "a1m4-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "a1m4-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("There is a small kitchen on our floor.", "Há uma pequena cozinha no nosso andar."),
          R("There are two meeting rooms and a big open space.", "Há duas salas de reunião e um grande espaço aberto."),
          R("My desk is next to the window.", "Minha mesa fica ao lado da janela."),
          R("Is there a printer near here?", "Tem uma impressora aqui perto?"),
          R("There aren't any parking spaces today.", "Não tem nenhuma vaga hoje."),
          R("The restaurant is in front of our building.", "O restaurante fica na frente do nosso prédio.")
        ] },
      { id: "a1m4-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("printer", "impressora", "The printer isn't working."),
          V("kitchen", "cozinha", "There's coffee in the kitchen."),
          V("window", "janela", "My desk is next to the window."),
          V("drawer", "gaveta", "The keys are in the drawer."),
          V("parking space", "vaga de estacionamento", "There's no parking space."),
          V("bathroom", "banheiro", "Where's the bathroom?")
        ] }
    ]
  },
  {
    id: "a1m5", title: "Módulo", subtitle: "Números, horas e datas",
    sections: [
      { id: "a1m5-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Marcar reunião, falar de prazo e de preço.",
        cards: [
          C("Horas", ["9:00 → nine o'clock", "9:30 → half past nine (ou nine thirty)", "9:15 → quarter past nine, 8:45 → quarter to nine"], "It's half past nine."),
          C("at, on, in para tempo", ["at + hora: at 10 a.m.", "on + dia: on Monday", "in + mês ou ano: in March"], "The meeting is at 10."),
          C("Datas usam ordinais", ["first, second, third, fourth… twenty-first", "Escreve May 3rd, fala May third"], "The deadline is March 15th."),
          C("Números grandes e preço", ["one hundred, one thousand, one million", "How much is it? How much does it cost?"], "It costs two thousand five hundred reais.")
        ] },
      { id: "a1m5-r1", type: "fill", title: "Rodada 1", subtitle: "Horas e at, on, in",
        items: [
          F("It's 9:00. → It's nine ___.", "o'clock", "It's nine {o'clock}.", "Hora exata → o'clock."),
          F("It's 9:30. → It's ___ past nine.", "half", "It's {half} past nine.", "30 minutos → half past."),
          F("It's 9:15. → It's ___ past nine.", "quarter", "It's {quarter} past nine.", "15 minutos → quarter past."),
          F("The meeting is ___ 10 a.m.", "at", "The meeting is {at} 10 a.m.", "Hora → at."),
          F("My birthday is ___ June.", "in", "My birthday is {in} June.", "Mês → in."),
          F("We don't work ___ Sunday.", "on", "We don't work {on} Sunday.", "Dia → on."),
          F("December 25th → the twenty-___ of December.", "fifth", "the twenty-{fifth} of December.", "25th → twenty-fifth."),
          F("___ time is it?", "what", "{What} time is it?", "Que horas são? → What time is it?")
        ] },
      { id: "a1m5-r2", type: "fill", title: "Rodada 2", subtitle: "Ordinais, números e preço",
        items: [
          F("It's 8:45. → It's quarter ___ nine.", "to", "It's quarter {to} nine.", "Faltam 15 → quarter to."),
          F("May 1st → the ___ of May.", "first", "the {first} of May.", "1st → first."),
          F("The 2nd floor → the ___ floor.", "second", "the {second} floor.", "2nd → second."),
          F("The 3rd meeting → the ___ meeting.", "third", "the {third} meeting.", "3rd → third."),
          F("1,000 → one ___", "thousand", "one {thousand}", "1.000 → one thousand. Em inglês, a vírgula separa milhares."),
          F("___ much is the ticket?", "how", "{How} much is the ticket?", "Preço → How much."),
          F("What's the ___ today? It's November 12th.", "date", "What's the {date} today?", "Data → date."),
          F("See you ___ Friday!", "on", "See you {on} Friday!", "Dia → on.")
        ] },
      { id: "a1m5-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Que horas são?", "What time is it?", "What time is it?"),
          T("São nove e meia.", "It's half past nine.", "Também vale <i>It's nine thirty</i>."),
          T("A reunião é às 10.", "The meeting is at 10.", "Hora → at."),
          T("Meu aniversário é em junho.", "My birthday is in June.", "Mês → in."),
          T("Quanto custa?", "How much is it?", "Também vale <i>How much does it cost?</i>"),
          T("Hoje é dia 12 de novembro.", "Today is November 12th.", "Data com ordinal: twelfth.")
        ] },
      { id: "a1m5-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "a1m5-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("The office opens at eight thirty.", "O escritório abre às oito e meia."),
          R("Our weekly meeting is on Monday at ten.", "Nossa reunião semanal é na segunda às dez."),
          R("The deadline is March 15th.", "O prazo é 15 de março."),
          R("The new laptop costs two thousand five hundred reais.", "O notebook novo custa dois mil e quinhentos reais."),
          R("What time do you have lunch?", "Que horas você almoça?"),
          R("I usually have lunch at half past twelve.", "Geralmente almoço ao meio-dia e meia.")
        ] },
      { id: "a1m5-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("o'clock", "em ponto", "It's ten o'clock."),
          V("half past", "e meia", "It's half past two."),
          V("quarter", "quinze minutos", "It's quarter to six."),
          V("birthday", "aniversário", "Happy birthday!"),
          V("weekly", "semanal", "We have a weekly meeting."),
          V("lunch", "almoço", "Let's have lunch together.")
        ] }
    ]
  },
  {
    id: "a1m6", title: "Módulo", subtitle: "my, me, mine, can + revisão do A1",
    sections: [
      { id: "a1m6-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Quem faz, quem recebe e de quem é.",
        cards: [
          C("Quem faz × quem recebe", ["I → me, he → him, she → her", "we → us, they → them (you e it não mudam)"], "Can you help me?"),
          C("De quem é (antes da coisa)", ["my, your, his, her, its, our, their"], "This is my desk."),
          C("De quem é (sozinho)", ["mine, yours, his, hers, ours, theirs"], "That laptop is mine."),
          C("can = consigo, posso", ["can't = não consigo, não posso", "Depois do can, verbo puro"], "I can speak English a little.")
        ] },
      { id: "a1m6-r1", type: "fill", title: "Rodada 1", subtitle: "Pronomes, possessivos e can",
        items: [
          F("This is ___ desk. (meu)", "my", "This is {my} desk.", "Antes da coisa → my."),
          F("Can you help ___? (eu)", "me", "Can you help {me}?", "Quem recebe a ajuda → me."),
          F("She is ___ manager. (nosso)", "our", "She is {our} manager.", "Nosso → our."),
          F("I called ___ yesterday. (ele)", "him", "I called {him} yesterday.", "Quem recebe → him."),
          F("That laptop is ___. (meu, sozinho)", "mine", "That laptop is {mine}.", "Sozinho no fim → mine."),
          F("___ office is big. (deles)", "their", "{Their} office is big.", "Deles, antes da coisa → their."),
          F("I ___ speak English a little. (consigo)", "can", "I {can} speak English a little.", "Consigo → can."),
          F("She ___ come today. (não pode)", ["can't", "cannot"], "She {can't} come today.", "Não pode → can't.")
        ] },
      { id: "a1m6-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("Please send ___ the file. (nós)", "us", "Please send {us} the file.", "Quem recebe → us."),
          F("Is this bag ___? (sua, sozinho)", "yours", "Is this bag {yours}?", "Sozinho → yours."),
          F("___ name is Ana. (dela)", "her", "{Her} name is Ana.", "Dela → her."),
          F("___ you help me, please?", "can", "{Can} you help me, please?", "Pedido → Can you…?"),
          F("We ___ open the door. We don't have the key.", ["can't", "cannot"], "We {can't} open the door.", "Não conseguimos → can't."),
          F("I see ___ every day. (eles)", "them", "I see {them} every day.", "Quem recebe → them."),
          F("The company and ___ clients. (seus, da empresa)", "its", "The company and {its} clients.", "De uma coisa (it) → its, sem apóstrofo."),
          F("This phone is ___. (dela, sozinho)", "hers", "This phone is {hers}.", "Sozinho → hers.")
        ] },
      { id: "a1m6-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Você pode me ajudar?", "Can you help me?", "Can + verbo puro; quem recebe → me."),
          T("Esse é o meu notebook.", "This is my laptop.", "my + coisa."),
          T("Eu consigo falar um pouco de inglês.", "I can speak a little English.", "can + verbo puro."),
          T("Ela não pode vir hoje.", "She can't come today.", "can't + verbo puro."),
          T("Esse café é seu?", "Is this coffee yours?", "Sozinho → yours."),
          T("Eu ligo para eles toda semana.", "I call them every week.", "Quem recebe → them.")
        ] },
      { id: "a1m6-mix1", type: "mix", title: "Revisão do A1, parte 1", subtitle: "Tudo o que você viu no A1", count: 8 },
      { id: "a1m6-mix2", type: "mix", title: "Revisão do A1, parte 2", subtitle: "Mais uma rodada misturada", count: 8 },
      { id: "a1m6-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("My name is Paula, and I work in operations.", "Meu nome é Paula, e trabalho em operações."),
          R("My team is small, but we can do a lot.", "Minha equipe é pequena, mas conseguimos fazer muito."),
          R("Our clients are friendly, and they always call us.", "Nossos clientes são simpáticos e sempre ligam para nós."),
          R("Can you send me the address, please?", "Pode me mandar o endereço, por favor?"),
          R("Is this your phone or mine?", "Esse telefone é seu ou meu?"),
          R("I can't go to the meeting, but my colleague can.", "Não posso ir à reunião, mas minha colega pode.")
        ] },
      { id: "a1m6-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("address", "endereço", "What's the address?"),
          V("key", "chave", "I can't find my keys."),
          V("to help", "ajudar", "Can I help you?"),
          V("a little", "um pouco", "I speak a little English."),
          V("always", "sempre", "She always arrives early."),
          V("please", "por favor", "Send me the file, please.")
        ] }
    ]
  }
);

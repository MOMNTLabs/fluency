// Nível A2 (módulos novos). O módulo de preposições (s5) também entra no A2; a ordem fica em course.js.
window.WEEKS.push(
  {
    id: "a2m1", title: "Módulo", subtitle: "Passado simples: worked, went, didn't",
    sections: [
      { id: "a2m1-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "O passado simples conta o que <b>aconteceu e acabou</b>: ontem, semana passada, em 2024.",
        cards: [
          C("Regulares: + ed", ["work → worked, call → called, finish → finished"], "Yesterday I called three clients."),
          C("Irregulares mais comuns", ["go → went, have → had, make → made, get → got", "send → sent, see → saw, buy → bought, meet → met"], "We sent the proposal on Monday."),
          C("Negativa: didn't + verbo puro", ["Nunca <i>didn't called</i>: o didn't já carrega o passado."], "I didn't finish the report."),
          C("Pergunta: Did + pessoa + verbo puro", ["Did you…? Did they…?"], "Did you see the email?"),
          C("was × were", ["I / he / she / it → was", "you / we / they → were"], "The meeting was really long.")
        ] },
      { id: "a2m1-r1", type: "fill", title: "Rodada 1", subtitle: "Regulares, irregulares e was / were",
        items: [
          F("Yesterday I ___ (call) three clients.", "called", "Yesterday I {called} three clients.", "Regular: call + ed."),
          F("We ___ (send) the proposal last Monday.", "sent", "We {sent} the proposal last Monday.", "send é irregular: sent."),
          F("She ___ (go) to the meeting by bus.", "went", "She {went} to the meeting by bus.", "go é irregular: went."),
          F("I ___ (not/finish) the report yesterday.", ["didn't finish", "did not finish"], "I {didn't finish} the report yesterday.", "Negativa: didn't + verbo puro."),
          F("___ you ___ (see) the email from the client?", "did see", "{Did} you {see} the email from the client?", "Pergunta no passado: Did + verbo puro."),
          F("The meeting ___ (be) really long.", "was", "The meeting {was} really long.", "it (a reunião) → was."),
          F("They ___ (be) at the office until 7 p.m.", "were", "They {were} at the office until 7 p.m.", "they → were."),
          F("He ___ (make) a great presentation last week.", "made", "He {made} a great presentation last week.", "make é irregular: made.")
        ] },
      { id: "a2m1-r2", type: "fill", title: "Rodada 2", subtitle: "Mais passado simples",
        items: [
          F("We ___ (have) a call with the client this morning.", "had", "We {had} a call with the client this morning.", "have é irregular: had."),
          F("I ___ (buy) a new notebook for work.", "bought", "I {bought} a new notebook for work.", "buy é irregular: bought."),
          F("She ___ (not/come) to work on Friday.", ["didn't come", "did not come"], "She {didn't come} to work on Friday.", "didn't + verbo puro."),
          F("Last month we ___ (get) ten new clients.", "got", "Last month we {got} ten new clients.", "get é irregular: got."),
          F("___ they ___ (pay) the invoice?", "did pay", "{Did} they {pay} the invoice?", "Pergunta: Did + verbo puro."),
          F("I ___ (meet) the new manager yesterday.", "met", "I {met} the new manager yesterday.", "meet é irregular: met."),
          F("The delivery ___ (arrive) late.", "arrived", "The delivery {arrived} late.", "Regular: arrive + d."),
          F("You ___ (be) right about the deadline.", "were", "You {were} right about the deadline.", "you → were.")
        ] },
      { id: "a2m1-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Ontem eu liguei para o cliente.", "Yesterday I called the client.", "call + ed."),
          T("Nós mandamos a proposta na segunda.", "We sent the proposal on Monday.", "send → sent; dia → on."),
          T("Eu não terminei o relatório.", "I didn't finish the report.", "didn't + verbo puro."),
          T("Você viu o e-mail?", "Did you see the email?", "Did + verbo puro."),
          T("A reunião foi longa.", "The meeting was long.", "it → was."),
          T("Eles estavam no escritório.", "They were at the office.", "they → were.")
        ] },
      { id: "a2m1-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões para fixar", count: 8 },
      { id: "a2m1-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I started a new job last month.", "Comecei num emprego novo no mês passado."),
          R("On my first day, I met the whole team.", "No primeiro dia, conheci a equipe toda."),
          R("We had a meeting with a big client on Tuesday.", "Tivemos uma reunião com um cliente grande na terça."),
          R("The client liked our ideas and signed the contract.", "O cliente gostou das nossas ideias e assinou o contrato."),
          R("I didn't sleep well that night because I was excited.", "Não dormi bem naquela noite porque estava animado."),
          R("Did you go to the team lunch on Friday?", "Você foi ao almoço da equipe na sexta?")
        ] },
      { id: "a2m1-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("meeting", "reunião", "The meeting starts at ten."),
          V("proposal", "proposta", "We sent the proposal yesterday."),
          V("report", "relatório", "I need to finish the monthly report."),
          V("invoice", "fatura, nota fiscal", "The client paid the invoice."),
          V("contract", "contrato", "They signed a one-year contract."),
          V("to sign", "assinar", "Please sign here.")
        ] }
    ]
  },
  {
    id: "a2m2", title: "Módulo", subtitle: "Presente simples ou contínuo",
    sections: [
      { id: "a2m2-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Pergunte: <b>é rotina ou está acontecendo agora?</b>",
        cards: [
          C("Presente simples = rotina e fatos", ["he / she / it ganham s: works, goes, has", "Pistas: every day, usually, always, never, on Mondays"], "She works in the sales team."),
          C("Presente contínuo = agora ou temporário", ["am / is / are + -ing", "Pistas: now, right now, at the moment, this week"], "I'm writing an email right now."),
          C("Negativas e perguntas", ["Simples: don't / doesn't, Do / Does…?", "Contínuo: isn't / aren't, Are you…?"], "He doesn't answer emails on weekends."),
          C("Verbos de estado não vão no -ing", ["know, like, want, need, understand"], "I need help, not \"I'm needing\".")
        ] },
      { id: "a2m2-r1", type: "fill", title: "Rodada 1", subtitle: "Rotina ou agora?",
        items: [
          F("I usually ___ (start) work at 9 a.m.", "start", "I usually {start} work at 9 a.m.", "usually = rotina → presente simples."),
          F("She ___ (work) in the sales team.", "works", "She {works} in the sales team.", "Fato, she → works."),
          F("Right now we ___ (prepare) the presentation.", ["are preparing", "'re preparing"], "Right now we {are preparing} the presentation.", "right now → are + -ing."),
          F("He ___ (not/answer) emails on weekends.", ["doesn't answer", "does not answer"], "He {doesn't answer} emails on weekends.", "Rotina negativa com he → doesn't."),
          F("Look! The client ___ (call) you.", ["is calling", "'s calling"], "Look! The client {is calling} you.", "Acontecendo agora → is calling."),
          F("I ___ (know) the answer.", "know", "I {know} the answer.", "know é verbo de estado: nada de -ing."),
          F("They ___ (have) a meeting at the moment.", ["are having", "'re having"], "They {are having} a meeting at the moment.", "at the moment → are + -ing."),
          F("___ you ___ (need) help with the report?", "do need", "{Do} you {need} help with the report?", "need é estado → Do you need…?")
        ] },
      { id: "a2m2-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("Our team ___ (deliver) orders every morning.", "delivers", "Our team {delivers} orders every morning.", "every morning = rotina; team → delivers."),
          F("This week I ___ (work) from home.", ["am working", "'m working"], "This week I {am working} from home.", "Temporário (this week) → am working."),
          F("She ___ (talk) to a supplier right now.", ["is talking", "'s talking"], "She {is talking} to a supplier right now.", "right now → is talking."),
          F("We ___ (not/use) that software anymore.", ["don't use", "do not use"], "We {don't use} that software anymore.", "Fato → don't use."),
          F("The printer ___ (not/work) today.", ["isn't working", "is not working"], "The printer {isn't working} today.", "Hoje, temporário → isn't working."),
          F("He always ___ (arrive) early.", "arrives", "He always {arrives} early.", "always = rotina; he → arrives."),
          F("I ___ (want) to learn Excel.", "want", "I {want} to learn Excel.", "want é estado: presente simples."),
          F("What ___ you ___ (do) right now?", "are doing", "What {are} you {doing} right now?", "right now → are … doing.")
        ] },
      { id: "a2m2-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu trabalho das 9 às 18.", "I work from 9 to 6.", "Rotina → presente simples."),
          T("Ela está falando com o cliente agora.", "She is talking to the client now.", "Agora → is talking."),
          T("Nós não trabalhamos aos sábados.", "We don't work on Saturdays.", "Rotina negativa → don't."),
          T("Estou escrevendo um e-mail.", "I'm writing an email.", "Agora → am writing."),
          T("Ele precisa de ajuda.", "He needs help.", "need é estado; he → needs."),
          T("O que você está fazendo?", "What are you doing?", "Agora → are … doing.")
        ] },
      { id: "a2m2-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "a2m2-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I work in the operations team.", "Trabalho na equipe de operações."),
          R("Every morning, I check the orders and talk to the suppliers.", "Toda manhã, confiro os pedidos e falo com os fornecedores."),
          R("This week, I'm training a new colleague.", "Esta semana, estou treinando um colega novo."),
          R("My manager usually answers emails before lunch.", "Meu gestor geralmente responde e-mails antes do almoço."),
          R("Right now, we're waiting for a delivery.", "Agora, estamos esperando uma entrega."),
          R("I like my job because every day is different.", "Gosto do meu trabalho porque cada dia é diferente.")
        ] },
      { id: "a2m2-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("supplier", "fornecedor", "We need a new supplier."),
          V("order", "pedido", "The order arrived this morning."),
          V("colleague", "colega de trabalho", "My colleague helped me."),
          V("manager", "gestor, gerente", "Ask your manager first."),
          V("delivery", "entrega", "The delivery is late."),
          V("schedule", "agenda, cronograma", "My schedule is full today.")
        ] }
    ]
  },
  {
    id: "a2m3", title: "Módulo", subtitle: "Futuro: going to e will",
    sections: [
      { id: "a2m3-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Os dois são \"vou fazer\". A diferença é <b>quando você decidiu</b>.",
        cards: [
          C("going to = plano já decidido", ["am / is / are going to + verbo"], "I'm going to call the client tomorrow."),
          C("will = decisão na hora, promessa ou previsão", ["Forma curta: I'll, we'll", "Negativa: won't"], "Don't worry, I'll help you."),
          C("Compromisso marcado = presente contínuo", ["Data e hora combinadas."], "We're meeting the client on Friday."),
          C("Pista do português", ["\"vou\" decidido antes → going to", "\"vou\" decidido agora → will"], "The phone is ringing. I'll answer it!")
        ] },
      { id: "a2m3-r1", type: "fill", title: "Rodada 1", subtitle: "Plano ou decisão na hora?",
        items: [
          F("Tomorrow I ___ (call) the client. We planned it last week.", ["am going to call", "'m going to call"], "Tomorrow I {am going to call} the client.", "Plano decidido antes → going to."),
          F("The phone is ringing. I ___ (answer) it!", ["will answer", "'ll answer"], "The phone is ringing. I {will answer} it!", "Decisão na hora → will."),
          F("Don't worry, I ___ (help) you with the report.", ["will help", "'ll help"], "Don't worry, I {will help} you with the report.", "Promessa → will."),
          F("We ___ (launch) the new product in March. It's in the plan.", ["are going to launch", "'re going to launch"], "We {are going to launch} the new product in March.", "Plano → going to."),
          F("I think it ___ (rain) later.", ["will rain", "is going to rain", "'ll rain"], "I think it {will rain} later.", "Previsão com \"I think\" → will."),
          F("She ___ (not/come) to the party. She told me yesterday.", ["isn't going to come", "is not going to come", "won't come"], "She {isn't going to come} to the party.", "Decidido antes → isn't going to."),
          F("I promise I ___ (not/be) late again.", ["won't be", "will not be"], "I promise I {won't be} late again.", "Promessa → won't."),
          F("When ___ you going to send the invoice?", "are", "When {are} you going to send the invoice?", "Pergunta com going to: are you going to…?")
        ] },
      { id: "a2m3-r2", type: "fill", title: "Rodada 2", subtitle: "Mais futuro",
        items: [
          F("Look at those clouds. It ___ (rain).", ["is going to rain", "'s going to rain"], "Look at those clouds. It {is going to rain}.", "Previsão com evidência (as nuvens) → going to."),
          F("\"The printer isn't working.\" \"OK, I ___ (fix) it.\"", ["will fix", "'ll fix"], "OK, I {will fix} it.", "Decisão na hora → will."),
          F("Next year we ___ (open) a new office. We already rented it.", ["are going to open", "'re going to open"], "Next year we {are going to open} a new office.", "Plano → going to."),
          F("I ___ (meet) the supplier on Friday at 10.", ["am meeting", "'m meeting", "am going to meet", "'m going to meet"], "I {am meeting} the supplier on Friday at 10.", "Compromisso marcado → am meeting."),
          F("Maybe she ___ (get) the job.", ["will get", "'ll get"], "Maybe she {will get} the job.", "Previsão incerta → will."),
          F("They ___ (not/sign) the contract. They decided this morning.", ["aren't going to sign", "are not going to sign"], "They {aren't going to sign} the contract.", "Decidido antes → aren't going to."),
          F("I'm hungry. I think I ___ (order) a pizza.", ["will order", "'ll order"], "I think I {will order} a pizza.", "Decisão na hora → will."),
          F("___ you help me with this box, please?", ["will", "can", "could"], "{Will} you help me with this box, please?", "Pedido → Will / Can / Could you…?")
        ] },
      { id: "a2m3-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Vou ligar para o cliente amanhã. (já planejado)", "I'm going to call the client tomorrow.", "Plano → going to."),
          T("Eu te ajudo! (decidido agora)", "I'll help you!", "Decisão na hora → will."),
          T("Vamos lançar o produto em março.", "We're going to launch the product in March.", "Plano → going to."),
          T("Acho que vai chover.", "I think it will rain.", "Previsão com I think → will."),
          T("Não vou me atrasar.", "I won't be late.", "Promessa → won't."),
          T("Vamos encontrar o fornecedor na sexta.", "We're meeting the supplier on Friday.", "Compromisso marcado → presente contínuo.")
        ] },
      { id: "a2m3-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "a2m3-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Next month, our team is going to start a new project.", "No mês que vem, nossa equipe vai começar um projeto novo."),
          R("I'm meeting the client on Thursday to present the plan.", "Vou encontrar o cliente na quinta para apresentar o plano."),
          R("I think the client will like the proposal.", "Acho que o cliente vai gostar da proposta."),
          R("If you need anything, I'll be at my desk.", "Se precisar de algo, vou estar na minha mesa."),
          R("We aren't going to work on Saturday this time.", "Não vamos trabalhar no sábado desta vez."),
          R("Don't worry, I'll send you the file in five minutes.", "Não se preocupe, te mando o arquivo em cinco minutos.")
        ] },
      { id: "a2m3-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to present", "apresentar", "I'll present the results tomorrow."),
          V("desk", "mesa de trabalho", "I'm at my desk."),
          V("project", "projeto", "The project starts next week."),
          V("to promise", "prometer", "I promise I'll call you."),
          V("to rent", "alugar", "We rented a new office."),
          V("soon", "em breve", "The new system is coming soon.")
        ] }
    ]
  },
  {
    id: "a2m4", title: "Módulo", subtitle: "Comparar: cheaper, more expensive, the best",
    sections: [
      { id: "a2m4-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Para comparar, o tamanho da palavra decide a forma.",
        cards: [
          C("Palavras curtas: + er / the + est", ["cheap → cheaper → the cheapest", "big → bigger, busy → busier"], "This supplier is cheaper."),
          C("Palavras longas: more / the most", ["expensive → more expensive → the most expensive"], "This is the most important report."),
          C("Irregulares", ["good → better → the best", "bad → worse → the worst"], "This is the best proposal."),
          C("than = do que e as … as = tão … quanto", ["Não use \"more cheap\" nem \"more better\"."], "It's as fast as the old one.")
        ] },
      { id: "a2m4-r1", type: "fill", title: "Rodada 1", subtitle: "Comparativo ou superlativo?",
        items: [
          F("This supplier is ___ (cheap) than the old one.", "cheaper", "This supplier is {cheaper} than the old one.", "Curta + than → cheaper."),
          F("The new office is ___ (big) than the old one.", "bigger", "The new office is {bigger} than the old one.", "big dobra o g: bigger."),
          F("This is ___ (good) proposal we received.", "the best", "This is {the best} proposal we received.", "good → the best."),
          F("The second option is ___ (expensive) than the first.", "more expensive", "The second option is {more expensive} than the first.", "Longa → more expensive."),
          F("Friday is ___ (busy) day of the week.", "the busiest", "Friday is {the busiest} day of the week.", "busy → the busiest."),
          F("Our sales are ___ (bad) this month than last month.", "worse", "Our sales are {worse} this month than last month.", "bad → worse."),
          F("This is ___ (important) document of the year.", "the most important", "This is {the most important} document of the year.", "Longa → the most important."),
          F("The new system is ___ (fast) as the old one.", "as fast", "The new system is {as fast} as the old one.", "Tão … quanto → as fast as.")
        ] },
      { id: "a2m4-r2", type: "fill", title: "Rodada 2", subtitle: "Mais comparações",
        items: [
          F("My English is ___ (good) now than last year.", "better", "My English is {better} now than last year.", "good → better."),
          F("This is ___ (easy) task on the list.", "the easiest", "This is {the easiest} task on the list.", "easy → the easiest."),
          F("The traffic today is ___ (bad) than yesterday.", "worse", "The traffic today is {worse} than yesterday.", "bad → worse."),
          F("Our new logo is ___ (modern) than the old one.", "more modern", "Our new logo is {more modern} than the old one.", "modern → more modern."),
          F("She is ___ (experienced) person on the team.", "the most experienced", "She is {the most experienced} person on the team.", "Longa → the most."),
          F("This month was ___ (difficult) than last month.", "more difficult", "This month was {more difficult} than last month.", "Longa → more difficult."),
          F("The new printer is ___ (slow) than the old one.", "slower", "The new printer is {slower} than the old one.", "Curta → slower."),
          F("It's ___ (bad) day of the year for deliveries.", "the worst", "It's {the worst} day of the year for deliveries.", "bad → the worst.")
        ] },
      { id: "a2m4-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Esse fornecedor é mais barato.", "This supplier is cheaper.", "cheap → cheaper."),
          T("Essa é a melhor proposta.", "This is the best proposal.", "good → the best."),
          T("O sistema novo é mais rápido que o antigo.", "The new system is faster than the old one.", "fast → faster than."),
          T("Sexta é o dia mais corrido da semana.", "Friday is the busiest day of the week.", "busy → the busiest."),
          T("Esse relatório é mais importante.", "This report is more important.", "Longa → more important."),
          T("Meu inglês está melhor agora.", "My English is better now.", "good → better.")
        ] },
      { id: "a2m4-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "a2m4-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Our new office is bigger and brighter than the old one.", "Nosso escritório novo é maior e mais iluminado que o antigo."),
          R("The sales team had its best month this year.", "A equipe comercial teve seu melhor mês este ano."),
          R("This supplier is cheaper, but the other one is faster.", "Esse fornecedor é mais barato, mas o outro é mais rápido."),
          R("Short videos are usually more popular than long ones.", "Vídeos curtos costumam ser mais populares que os longos."),
          R("December is the busiest month for deliveries.", "Dezembro é o mês mais movimentado para entregas."),
          R("The new system isn't as complicated as I thought.", "O sistema novo não é tão complicado quanto eu achava.")
        ] },
      { id: "a2m4-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("cheap", "barato", "This option is cheap."),
          V("expensive", "caro", "That software is too expensive."),
          V("busy", "ocupado, movimentado", "I'm busy right now."),
          V("reliable", "confiável", "We need a reliable supplier."),
          V("price", "preço", "The price went up."),
          V("option", "opção", "We have two options.")
        ] }
    ]
  },
  {
    id: "a2m5", title: "Módulo", subtitle: "some, any, much, many + revisão do A2",
    sections: [
      { id: "a2m5-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Palavras para falar de <b>quantidade</b>.",
        cards: [
          C("some = algum, alguns (afirmativa e oferta)", ["Would you like some coffee?"], "We have some new clients."),
          C("any = algum, nenhum (negativa e pergunta)", ["Do you have any questions?"], "We don't have any paper."),
          C("many × much", ["many + coisas contáveis: many emails", "much + incontáveis: much time, much money"], "I don't have much time today."),
          C("a lot of = muito, muitos (serve para tudo)", ["a lot of work, a lot of emails"], "I have a lot of work today."),
          C("How many × How much", ["How many orders? (contável)", "How much does it cost? (preço)"], "How much does this software cost?")
        ] },
      { id: "a2m5-r1", type: "fill", title: "Rodada 1", subtitle: "Qual palavra de quantidade?",
        items: [
          F("We have ___ new clients this month.", "some", "We have {some} new clients this month.", "Afirmativa → some."),
          F("Do you have ___ questions?", "any", "Do you have {any} questions?", "Pergunta → any."),
          F("We don't have ___ paper in the printer.", "any", "We don't have {any} paper in the printer.", "Negativa → any."),
          F("How ___ emails did you get today?", "many", "How {many} emails did you get today?", "emails são contáveis → many."),
          F("I don't have ___ time today.", "much", "I don't have {much} time today.", "time é incontável → much."),
          F("There are ___ boxes in the warehouse.", ["a lot of", "many", "some"], "There are {a lot of} boxes in the warehouse.", "a lot of serve para tudo."),
          F("How ___ does this software cost?", "much", "How {much} does this software cost?", "Preço → How much."),
          F("Would you like ___ coffee?", "some", "Would you like {some} coffee?", "Oferta → some.")
        ] },
      { id: "a2m5-r3", type: "translate", title: "Rodada 2", subtitle: "Traduza para o inglês",
        items: [
          T("Você tem alguma pergunta?", "Do you have any questions?", "Pergunta → any."),
          T("Não temos muito tempo.", "We don't have much time.", "time → much."),
          T("Quantos pedidos chegaram hoje?", "How many orders arrived today?", "orders → How many."),
          T("Quanto custa?", "How much does it cost?", "Preço → How much."),
          T("Temos alguns clientes novos.", "We have some new clients.", "Afirmativa → some."),
          T("Tenho muito trabalho hoje.", "I have a lot of work today.", "a lot of serve para tudo.")
        ] },
      { id: "a2m5-mix1", type: "mix", title: "Revisão do A2, parte 1", subtitle: "Tudo o que você viu no A2", count: 8 },
      { id: "a2m5-mix2", type: "mix", title: "Revisão do A2, parte 2", subtitle: "Mais uma rodada misturada", count: 8 },
      { id: "a2m5-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("We have a lot of orders this week, so everyone is busy.", "Temos muitos pedidos esta semana, então todo mundo está ocupado."),
          R("Do we have any boxes left in the warehouse?", "Ainda sobraram caixas no depósito?"),
          R("There isn't much space in the meeting room.", "Não tem muito espaço na sala de reunião."),
          R("How many people are coming to the presentation?", "Quantas pessoas vêm para a apresentação?"),
          R("I bought some snacks for the team.", "Comprei uns lanches para a equipe."),
          R("How much time do we have before the deadline?", "Quanto tempo temos antes do prazo?")
        ] },
      { id: "a2m5-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("warehouse", "depósito, armazém", "The boxes are in the warehouse."),
          V("space", "espaço", "We need more space."),
          V("to cost", "custar", "How much does it cost?"),
          V("box", "caixa", "Put the files in this box."),
          V("left", "sobrando, restante", "There's no coffee left."),
          V("snack", "lanche", "Let's have a snack.")
        ] }
    ]
  }
);

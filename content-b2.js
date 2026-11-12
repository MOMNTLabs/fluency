// Nível B2 (módulos novos). A ordem fica em course.js.
window.WEEKS.push(
  {
    id: "b2m1", title: "Módulo", subtitle: "have been doing: o que vem acontecendo",
    sections: [
      { id: "b2m1-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Para falar de algo que <b>começou no passado e segue acontecendo</b>, com foco na duração.",
        cards: [
          C("have / has been + -ing", ["Começou no passado e continua (ou acabou de parar)."], "I've been working here for two years."),
          C("Atividade × resultado", ["have been writing = a atividade, quanto tempo", "have written = o resultado, quantos"], "I've written three reports. I've been writing all day."),
          C("How long…?", ["Com for (duração) e since (desde quando)."], "How long have you been studying English?"),
          C("Verbos de estado ficam no simples", ["know, like, have (posse), believe"], "I've known her for ten years.")
        ] },
      { id: "b2m1-r1", type: "fill", title: "Rodada 1", subtitle: "have been + -ing",
        items: [
          F("I ___ (work) here for two years.", ["have been working", "'ve been working"], "I {have been working} here for two years.", "Começou e continua → have been working."),
          F("She ___ (wait) for the client since 9 a.m.", ["has been waiting", "'s been waiting"], "She {has been waiting} for the client since 9 a.m.", "she → has been + -ing."),
          F("How long ___ you ___ (study) English?", "have been studying", "How long {have} you {been studying} English?", "How long have you been…?"),
          F("We ___ (try) to call him all morning.", ["have been trying", "'ve been trying"], "We {have been trying} to call him all morning.", "Atividade repetida a manhã toda."),
          F("It ___ (rain) since yesterday.", ["has been raining", "'s been raining"], "It {has been raining} since yesterday.", "Desde ontem e continua."),
          F("They ___ (not/sleep) well because of the project.", ["haven't been sleeping", "have not been sleeping"], "They {haven't been sleeping} well because of the project.", "Negativa → haven't been + -ing."),
          F("I ___ (know) her for ten years.", ["have known", "'ve known"], "I {have known} her for ten years.", "know é estado: fica no simples."),
          F("You look tired. ___ you ___ (work) late?", "have been working", "{Have} you {been working} late?", "Efeito visível agora (cansado).")
        ] },
      { id: "b2m1-r2", type: "fill", title: "Rodada 2", subtitle: "Atividade ou resultado?",
        items: [
          F("I ___ (write) three reports today.", ["have written", "'ve written"], "I {have written} three reports today.", "Quantidade, resultado → have written."),
          F("I ___ (write) reports all day.", ["have been writing", "'ve been writing"], "I {have been writing} reports all day.", "Duração, atividade → have been writing."),
          F("She ___ (call) five clients this morning.", ["has called", "'s called"], "She {has called} five clients this morning.", "Quantos → has called."),
          F("He ___ (talk) on the phone for an hour.", ["has been talking", "'s been talking"], "He {has been talking} on the phone for an hour.", "Quanto tempo → has been talking."),
          F("We ___ (finish) the project! It's done.", ["have finished", "'ve finished"], "We {have finished} the project!", "Concluído → have finished."),
          F("They ___ (work) on this project since March.", ["have been working", "'ve been working"], "They {have been working} on this project since March.", "Desde março e continua."),
          F("How many emails ___ you ___ (send) today?", "have sent", "How many emails {have} you {sent} today?", "How many = quantidade → have sent."),
          F("I ___ (have) this laptop for three years.", ["have had", "'ve had"], "I {have had} this laptop for three years.", "have (posse) é estado → have had.")
        ] },
      { id: "b2m1-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Trabalho aqui há dois anos.", "I've been working here for two years.", "Também vale <i>I've worked here for two years</i>."),
          T("Há quanto tempo você estuda inglês?", "How long have you been studying English?", "How long + have been + -ing."),
          T("Estou esperando desde as 9.", "I've been waiting since 9.", "since + ponto de partida."),
          T("Já mandei cinco e-mails hoje.", "I've sent five emails today.", "Quantidade → have sent."),
          T("Ela está ao telefone há uma hora.", "She's been talking on the phone for an hour.", "Duração → has been + -ing."),
          T("Conheço ele há anos.", "I've known him for years.", "know é estado: fica no simples.")
        ] },
      { id: "b2m1-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "b2m1-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I've been working on this proposal since Monday.", "Estou trabalhando nesta proposta desde segunda."),
          R("We've been getting more leads since we changed the website.", "Estamos recebendo mais leads desde que mudamos o site."),
          R("How long have you been waiting?", "Há quanto tempo você está esperando?"),
          R("She's been leading the team for almost a year.", "Ela lidera a equipe há quase um ano."),
          R("I've called the supplier three times today, but nobody answers.", "Liguei três vezes para o fornecedor hoje, mas ninguém atende."),
          R("It's been raining all week, so the deliveries are late.", "Está chovendo a semana toda, então as entregas estão atrasadas.")
        ] },
      { id: "b2m1-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("lately", "ultimamente", "I've been very busy lately."),
          V("nobody", "ninguém", "Nobody answered the phone."),
          V("almost", "quase", "We're almost done."),
          V("to answer", "atender, responder", "Please answer the phone."),
          V("recently", "recentemente", "We recently hired two people."),
          V("all day", "o dia todo", "I've been in meetings all day.")
        ] }
    ]
  },
  {
    id: "b2m2", title: "Módulo", subtitle: "wish, if only e if misturado",
    sections: [
      { id: "b2m2-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Para falar de <b>desejos e arrependimentos</b>.",
        cards: [
          C("wish + passado = queria que agora fosse diferente", ["Com be, use were."], "I wish I had more time."),
          C("wish + had + particípio = arrependimento", ["Queria ter feito (e não fiz)."], "I wish I had studied more."),
          C("wish + would = reclamar de algo que alguém faz", [], "I wish he would answer my emails."),
          C("if only = a mesma ideia, mais forte", ["Se ao menos…"], "If only I had known!"),
          C("If misturado: passado → agora", ["if + had + particípio, would + verbo"], "If I had taken that job, I would be in London now.")
        ] },
      { id: "b2m2-r1", type: "fill", title: "Rodada 1", subtitle: "wish e if only",
        items: [
          F("I wish I ___ (have) more time.", "had", "I wish I {had} more time.", "Desejo sobre o agora → passado."),
          F("I wish I ___ (speak) French.", "spoke", "I wish I {spoke} French.", "speak → spoke."),
          F("I wish I ___ (study) more for the test.", ["had studied", "'d studied"], "I wish I {had studied} more for the test.", "Arrependimento → had studied."),
          F("She wishes she ___ (be) taller.", ["were", "was"], "She wishes she {were} taller.", "Com be → were."),
          F("I wish the client ___ (answer) my emails.", ["would answer", "'d answer"], "I wish the client {would answer} my emails.", "Reclamação → would."),
          F("If only I ___ (know) about the meeting!", ["had known", "'d known"], "If only I {had known} about the meeting!", "Arrependimento → had known."),
          F("I wish we ___ (not/spend) so much money last month.", ["hadn't spent", "had not spent"], "I wish we {hadn't spent} so much money last month.", "Passado → hadn't spent."),
          F("I wish it ___ (be) Friday.", ["were", "was"], "I wish it {were} Friday.", "Desejo sobre o agora → were.")
        ] },
      { id: "b2m2-r2", type: "fill", title: "Rodada 2", subtitle: "If misturado",
        items: [
          F("If I had taken that job, I ___ (be) in London now.", ["would be", "'d be"], "If I had taken that job, I {would be} in London now.", "Resultado agora → would be."),
          F("If she ___ (not/miss) the bus, she would be here now.", ["hadn't missed", "had not missed"], "If she {hadn't missed} the bus, she would be here now.", "Causa no passado → hadn't missed."),
          F("If we had saved more, we ___ (have) a bigger budget now.", ["would have", "'d have"], "If we had saved more, we {would have} a bigger budget now.", "Resultado agora → would have."),
          F("If I ___ (be) more organized, I wouldn't have lost the file.", ["were", "was"], "If I {were} more organized, I wouldn't have lost the file.", "Característica de sempre → were."),
          F("I wish my colleagues ___ (stop) talking so loud.", ["would stop", "'d stop"], "I wish my colleagues {would stop} talking so loud.", "Reclamação → would stop."),
          F("If only he ___ (listen) to me yesterday.", ["had listened", "'d listened"], "If only he {had listened} to me yesterday.", "Ontem → had listened."),
          F("I wish I ___ (can) drive.", "could", "I wish I {could} drive.", "can → could."),
          F("If he ___ (learn) English as a kid, he would speak it well now.", ["had learned", "had learnt", "'d learned"], "If he {had learned} English as a kid, he would speak it well now.", "Passado → agora.")
        ] },
      { id: "b2m2-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Queria ter mais tempo.", "I wish I had more time.", "wish + passado."),
          T("Queria ter estudado mais.", "I wish I had studied more.", "wish + had + particípio."),
          T("Se ao menos eu soubesse! (sobre o passado)", "If only I had known!", "if only + had known."),
          T("Queria que ele respondesse meus e-mails.", "I wish he would answer my emails.", "Reclamação → would."),
          T("Se eu tivesse aceitado o emprego, estaria em Londres agora.", "If I had accepted the job, I would be in London now.", "If misturado."),
          T("Queria saber falar francês.", "I wish I could speak French.", "can → could.")
        ] },
      { id: "b2m2-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "b2m2-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I wish I had more time to study, but work is busy.", "Queria ter mais tempo para estudar, mas o trabalho está corrido."),
          R("If only we had booked the tickets a week earlier!", "Se ao menos tivéssemos comprado as passagens uma semana antes!"),
          R("I wish the client would make a decision.", "Queria que o cliente tomasse uma decisão."),
          R("If I had learned English as a kid, I would be fluent now.", "Se eu tivesse aprendido inglês criança, seria fluente agora."),
          R("She wishes she lived closer to the office.", "Ela queria morar mais perto do escritório."),
          R("I wish I hadn't said that in the meeting.", "Queria não ter dito aquilo na reunião.")
        ] },
      { id: "b2m2-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("decision", "decisão", "We need to make a decision."),
          V("to regret", "arrepender-se", "I regret not calling him."),
          V("fluent", "fluente", "She's fluent in English."),
          V("earlier", "antes, mais cedo", "Let's start earlier tomorrow."),
          V("loud", "alto (som)", "The music is too loud."),
          V("organized", "organizado", "He's very organized.")
        ] }
    ]
  },
  {
    id: "b2m3", title: "Módulo", subtitle: "Passiva avançada e have something done",
    sections: [
      { id: "b2m3-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Mais formas de dizer <b>o que foi feito</b>, sem focar em quem fez.",
        cards: [
          C("Passiva com modais", ["must be done, can be fixed", "should have been sent (deveria ter sido)"], "The contract must be signed by Friday."),
          C("Passiva contínua", ["is being + particípio (está sendo)", "was being + particípio (estava sendo)"], "The report is being reviewed."),
          C("is said to / It is said that", ["Dizem que…"], "The new software is said to save a lot of time."),
          C("have / get something done", ["Mandar fazer: alguém faz por você."], "I had my laptop repaired.")
        ] },
      { id: "b2m3-r1", type: "fill", title: "Rodada 1", subtitle: "Passiva avançada",
        items: [
          F("The report ___ (review) right now.", "is being reviewed", "The report {is being reviewed} right now.", "Agora, em andamento → is being + particípio."),
          F("The contract must ___ (sign) by Friday.", "be signed", "The contract must {be signed} by Friday.", "Modal + be + particípio."),
          F("The email should ___ (send) yesterday.", "have been sent", "The email should {have been sent} yesterday.", "Deveria ter sido → should have been."),
          F("The office ___ (paint) when I arrived.", "was being painted", "The office {was being painted} when I arrived.", "Em andamento no passado → was being."),
          F("This problem can ___ (fix) easily.", "be fixed", "This problem can {be fixed} easily.", "can + be + particípio."),
          F("I ___ my laptop repaired last week. (mandei)", "had", "I {had} my laptop repaired last week.", "Mandei fazer → had + coisa + particípio."),
          F("We're ___ the website redesigned. (mandando)", "getting", "We're {getting} the website redesigned.", "get something done = mandar fazer."),
          F("The new product ___ (say) to be amazing.", "is said", "The new product {is said} to be amazing.", "Dizem que → is said to.")
        ] },
      { id: "b2m3-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("She had her hair ___ (cut) yesterday.", "cut", "She had her hair {cut} yesterday.", "cut não muda no particípio."),
          F("Our logo ___ (redesign) at the moment.", "is being redesigned", "Our logo {is being redesigned} at the moment.", "Agora → is being."),
          F("The invoices will ___ (pay) next week.", "be paid", "The invoices will {be paid} next week.", "will + be + particípio."),
          F("The meeting has ___ (cancel).", ["been cancelled", "been canceled"], "The meeting has {been cancelled}.", "has been + particípio."),
          F("I need to get my phone ___ (fix).", "fixed", "I need to get my phone {fixed}.", "get + coisa + particípio."),
          F("The results ___ (expect) to improve.", "are expected", "The results {are expected} to improve.", "Espera-se que → are expected to."),
          F("The files should have ___ (save) in the cloud.", "been saved", "The files should have {been saved} in the cloud.", "should have been + particípio."),
          F("The new office ___ (build) when the company moved.", "was being built", "The new office {was being built} when the company moved.", "Em andamento no passado → was being built.")
        ] },
      { id: "b2m3-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("O relatório está sendo revisado.", "The report is being reviewed.", "Está sendo → is being."),
          T("O contrato precisa ser assinado até sexta.", "The contract must be signed by Friday.", "must + be + particípio."),
          T("Mandei consertar meu notebook.", "I had my laptop repaired.", "Também vale <i>I got my laptop fixed</i>."),
          T("O e-mail deveria ter sido enviado ontem.", "The email should have been sent yesterday.", "should have been + particípio."),
          T("Dizem que a empresa está crescendo.", "The company is said to be growing.", "Também vale <i>It is said that the company is growing</i>."),
          T("Vamos mandar redesenhar o site.", "We're going to get the website redesigned.", "get + coisa + particípio.")
        ] },
      { id: "b2m3-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "b2m3-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Our website is being redesigned, so some pages are offline.", "Nosso site está sendo redesenhado, então algumas páginas estão fora do ar."),
          R("All invoices must be paid within thirty days.", "Todas as faturas devem ser pagas em até trinta dias."),
          R("We had the new brochures printed last week.", "Mandamos imprimir os folhetos novos semana passada."),
          R("The proposal should have been sent before the holiday.", "A proposta deveria ter sido enviada antes do feriado."),
          R("The new software is said to save a lot of time.", "Dizem que o software novo economiza muito tempo."),
          R("I'm getting my desk moved closer to the window.", "Vou mandar mudar minha mesa para mais perto da janela.")
        ] },
      { id: "b2m3-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("brochure", "folheto", "The brochures are ready."),
          V("to repair", "consertar", "We need to repair the printer."),
          V("to print", "imprimir", "Can you print this for me?"),
          V("to paint", "pintar", "They painted the office white."),
          V("cloud", "nuvem", "All files are saved in the cloud."),
          V("to expect", "esperar (que aconteça)", "We expect good results.")
        ] }
    ]
  },
  {
    id: "b2m4", title: "Módulo", subtitle: "must have, might have, should have",
    sections: [
      { id: "b2m4-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Para <b>deduzir ou criticar</b> o que já aconteceu. A fórmula é modal + have + particípio.",
        cards: [
          C("must have = deve ter (certeza)", [], "He must have forgotten the meeting."),
          C("might / may / could have = pode ter (possibilidade)", [], "She might have missed the bus."),
          C("can't have = não pode ter (impossível)", [], "He can't have finished already."),
          C("should have = deveria ter (crítica, arrependimento)", ["shouldn't have = não deveria ter"], "I should have called you.")
        ] },
      { id: "b2m4-r1", type: "fill", title: "Rodada 1", subtitle: "Deduzindo o passado",
        items: [
          F("He didn't come. He ___ (forget) the meeting.", "must have forgotten", "He {must have forgotten} the meeting.", "Quase certeza → must have."),
          F("She's late. She ___ (miss) the bus.", ["might have missed", "may have missed", "could have missed"], "She {might have missed} the bus.", "Possibilidade → might have."),
          F("You ___ (call) me! I would have helped.", "should have called", "You {should have called} me!", "Crítica → should have."),
          F("He ___ (finish) already. He started ten minutes ago.", ["can't have finished", "couldn't have finished"], "He {can't have finished} already.", "Impossível → can't have."),
          F("I ___ (send) that email. It was a mistake.", ["shouldn't have sent", "should not have sent"], "I {shouldn't have sent} that email.", "Arrependimento → shouldn't have."),
          F("The office is dark. Everyone ___ (go) home.", "must have gone", "Everyone {must have gone} home.", "Dedução forte → must have gone."),
          F("They ___ (not/receive) the file. Let's check.", ["might not have received", "may not have received"], "They {might not have received} the file.", "Possibilidade negativa → might not have."),
          F("We ___ (leave) earlier. The traffic was terrible.", "should have left", "We {should have left} earlier.", "Arrependimento → should have.")
        ] },
      { id: "b2m4-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("The client is happy. He ___ (like) the proposal.", "must have liked", "He {must have liked} the proposal.", "Dedução → must have."),
          F("I can't find my keys. I ___ (leave) them at the office.", ["might have left", "may have left", "could have left"], "I {might have left} them at the office.", "Possibilidade → might have."),
          F("You ___ (tell) me before!", "should have told", "You {should have told} me before!", "Crítica → should have."),
          F("She ___ (see) the message. Her phone was off.", ["can't have seen", "couldn't have seen"], "She {can't have seen} the message.", "Impossível → can't have."),
          F("They ___ (take) the wrong road.", ["may have taken", "might have taken", "could have taken"], "They {may have taken} the wrong road.", "Possibilidade → may have."),
          F("I ___ (eat) so much at lunch.", ["shouldn't have eaten", "should not have eaten"], "I {shouldn't have eaten} so much at lunch.", "Arrependimento → shouldn't have."),
          F("He knows everything about it. Someone ___ (tell) him.", "must have told", "Someone {must have told} him.", "Dedução → must have."),
          F("We ___ (book) the room earlier. Now it's full.", "should have booked", "We {should have booked} the room earlier.", "Arrependimento → should have.")
        ] },
      { id: "b2m4-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Ele deve ter esquecido.", "He must have forgotten.", "Certeza → must have."),
          T("Ela pode ter perdido o ônibus.", "She might have missed the bus.", "Possibilidade → might have."),
          T("Eu deveria ter ligado.", "I should have called.", "should have + particípio."),
          T("Você não deveria ter mandado aquilo.", "You shouldn't have sent that.", "shouldn't have + particípio."),
          T("Ele não pode ter terminado já.", "He can't have finished already.", "Impossível → can't have."),
          T("Alguém deve ter contado para ele.", "Someone must have told him.", "Dedução → must have.")
        ] },
      { id: "b2m4-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "b2m4-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("The client hasn't answered. He must have been busy all day.", "O cliente não respondeu. Deve ter ficado ocupado o dia todo."),
          R("I should have checked the numbers before sending the report.", "Eu deveria ter conferido os números antes de mandar o relatório."),
          R("The package might have been delivered to the wrong address.", "O pacote pode ter sido entregue no endereço errado."),
          R("She can't have seen my message. She was in a meeting.", "Ela não pode ter visto minha mensagem. Estava numa reunião."),
          R("We shouldn't have promised such a short deadline.", "Não deveríamos ter prometido um prazo tão curto."),
          R("You must have worked really hard on this.", "Você deve ter trabalhado muito nisso.")
        ] },
      { id: "b2m4-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("package", "pacote", "The package arrived today."),
          V("to book", "reservar", "I booked a meeting room."),
          V("mistake", "erro", "Everyone makes mistakes."),
          V("traffic", "trânsito", "The traffic was terrible."),
          V("to check", "conferir", "Please check the numbers."),
          V("wrong", "errado", "That's the wrong address.")
        ] }
    ]
  }
);

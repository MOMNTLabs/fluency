// Nível C1 (avançado). A ordem fica em course.js.
window.WEEKS.push(
  {
    id: "c1m1", title: "Módulo", subtitle: "Inversões: Never have I, Not only did…",
    sections: [
      { id: "c1m1-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Começar a frase com uma ideia negativa ou restritiva <b>inverte o verbo, como numa pergunta</b>. Dá ênfase e soa formal.",
        cards: [
          C("Never, Rarely, Seldom, Little", ["Never have I seen…, Rarely do we get…"], "Never have I seen such a good result."),
          C("Not only… but also", ["Not only + auxiliar + sujeito"], "Not only did she finish early, but she also helped the team."),
          C("Mal… quando / assim que", ["Hardly had I… when…", "No sooner had I… than…"], "No sooner had I sent the email than I noticed the mistake."),
          C("Only after / Only when / Not until", ["A inversão vem na segunda parte."], "Only after the call did I understand the problem."),
          C("Under no circumstances, At no time", ["Em hipótese nenhuma, em momento algum"], "Under no circumstances should you share this password.")
        ] },
      { id: "c1m1-r1", type: "fill", title: "Rodada 1", subtitle: "Qual auxiliar vem invertido?",
        items: [
          F("Never ___ I seen such a good result.", "have", "Never {have} I seen such a good result.", "seen pede have: Never have I seen.", ["did", "do", "was"]),
          F("Not only ___ she finish early, but she also helped the team.", "did", "Not only {did} she finish early…", "Passado simples invertido → did + verbo puro.", ["was", "has", "is"]),
          F("Rarely ___ we get complaints from this client.", ["do", "did"], "Rarely {do} we get complaints from this client.", "Presente simples invertido → do.", ["are", "have", "is"]),
          F("No sooner ___ I sent the email than I noticed the mistake.", "had", "No sooner {had} I sent the email than I noticed the mistake.", "No sooner pede had + particípio.", ["did", "have", "was"]),
          F("Hardly ___ the meeting started when the power went out.", "had", "Hardly {had} the meeting started when the power went out.", "Hardly … when pede had.", ["did", "was", "has"]),
          F("Only after the call ___ I understand the problem.", "did", "Only after the call {did} I understand the problem.", "Only after… → did na segunda parte.", ["was", "had", "have"]),
          F("Under no circumstances ___ you share this password.", ["should", "must"], "Under no circumstances {should} you share this password.", "Recomendação forte → should.", ["are", "have", "were"]),
          F("Little ___ he know that the client was listening.", "did", "Little {did} he know that the client was listening.", "Mal sabia ele → Little did he know.", ["was", "has", "is"])
        ] },
      { id: "c1m1-r2", type: "fill", title: "Rodada 2", subtitle: "Estruturas completas",
        items: [
          F("Not until the end of the year ___ we see real results.", ["will", "can", "shall"], "Not until the end of the year {will} we see real results.", "Futuro invertido → will we see.", ["are", "have", "were"]),
          F("Seldom ___ we receive such a clear proposal.", ["do", "did"], "Seldom {do} we receive such a clear proposal.", "Presente → do.", ["are", "have", "were"]),
          F("No sooner had we launched the product ___ the orders started coming in.", "than", "No sooner had we launched the product {than} the orders started coming in.", "No sooner… than.", ["when", "that", "then"]),
          F("Hardly had I sat down ___ the phone rang.", "when", "Hardly had I sat down {when} the phone rang.", "Hardly… when.", ["than", "that", "then"]),
          F("Only when the contract is signed ___ we start the project.", ["can", "will", "shall"], "Only when the contract is signed {can} we start the project.", "Inversão na segunda parte → can we start.", ["are", "have", "were"]),
          F("Not only is the product cheap, ___ it is also reliable.", "but", "Not only is the product cheap, {but} it is also reliable.", "Not only… but also.", ["and", "so", "or"]),
          F("At no time ___ the company inform us about the changes.", "did", "At no time {did} the company inform us about the changes.", "Passado → did.", ["was", "has", "were"]),
          F("So important ___ this meeting that everyone must attend.", "is", "So important {is} this meeting that everyone must attend.", "So + adjetivo + verbo + sujeito.", ["are", "does", "has"])
        ] },
      { id: "c1m1-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Nunca vi um resultado tão bom.", "Never have I seen such a good result.", "Never + have + I."),
          T("Mal tinha chegado quando a reunião começou.", "Hardly had I arrived when the meeting started.", "Também vale <i>No sooner had I arrived than…</i>"),
          T("Não só ela terminou cedo como ajudou a equipe.", "Not only did she finish early, but she also helped the team.", "Not only + did."),
          T("Só depois da ligação entendi o problema.", "Only after the call did I understand the problem.", "Only after… did I."),
          T("Em hipótese nenhuma compartilhe essa senha.", "Under no circumstances should you share this password.", "Under no circumstances + should."),
          T("Raramente recebemos reclamações.", "Rarely do we receive complaints.", "Rarely + do + we.")
        ] },
      { id: "c1m1-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c1m1-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Never before have we had so many leads in a single month.", "Nunca antes tivemos tantos leads num único mês."),
          R("Not only did the project hit its target, but it also lowered our costs.", "O projeto não só bateu a meta como reduziu nossos custos."),
          R("No sooner had we fixed one bug than another appeared.", "Mal corrigimos um bug e outro apareceu."),
          R("Only after reading the contract carefully did we notice the clause.", "Só depois de ler o contrato com atenção percebemos a cláusula."),
          R("Under no circumstances should client data leave the company.", "Em hipótese nenhuma dados de clientes devem sair da empresa."),
          R("Rarely does a proposal get approved without changes.", "Raramente uma proposta é aprovada sem alterações.")
        ] },
      { id: "c1m1-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("target", "meta, alvo", "We hit our sales target."),
          V("clause", "cláusula", "Read the last clause carefully."),
          V("complaint", "reclamação", "We received a complaint today."),
          V("circumstance", "circunstância", "In these circumstances, we'll wait."),
          V("bug", "falha (de sistema)", "There's a bug in the app."),
          V("to lower", "reduzir, baixar", "We need to lower our costs.")
        ] }
    ]
  },
  {
    id: "c1m2", title: "Módulo", subtitle: "Having finished, Built in 1990: orações reduzidas",
    sections: [
      { id: "c1m2-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Formas de <b>encurtar frases</b> usando -ing e particípio. Muito comum em textos e e-mails.",
        cards: [
          C("-ing no início = ao mesmo tempo ou causa", [], "Walking into the office, I saw the new team."),
          C("Having + particípio = algo que veio antes", [], "Having finished the report, he went home."),
          C("Particípio = sentido passivo", ["Built in 1990 = que foi construído em 1990"], "Built in 1990, the building needs repairs."),
          C("Relativas encurtadas", ["the woman sitting there = the woman who is sitting there", "the products sold online = the products that are sold online"], "The woman sitting by the window is our CEO."),
          C("Cuidado", ["O sujeito das duas partes precisa ser o mesmo."], "Not knowing what to say, I stayed quiet.")
        ] },
      { id: "c1m2-r1", type: "fill", title: "Rodada 1", subtitle: "-ing, having ou particípio?",
        items: [
          F("___ (finish) the report, he went home.", "having finished", "{Having finished} the report, he went home.", "Ação anterior → Having + particípio."),
          F("___ (walk) into the office, I saw the new team.", "walking", "{Walking} into the office, I saw the new team.", "Ao mesmo tempo → -ing."),
          F("___ (build) in 1990, the building needs repairs.", "built", "{Built} in 1990, the building needs repairs.", "Sentido passivo → particípio."),
          F("The woman ___ (sit) by the window is our new CEO.", "sitting", "The woman {sitting} by the window is our new CEO.", "who is sitting → sitting."),
          F("The products ___ (sell) online are cheaper.", "sold", "The products {sold} online are cheaper.", "that are sold → sold."),
          F("___ (ask) about the delay, the manager apologized.", "asked", "{Asked} about the delay, the manager apologized.", "Ele foi perguntado → particípio."),
          F("___ (be) new to the team, she asked a lot of questions.", "being", "{Being} new to the team, she asked a lot of questions.", "Causa → Being."),
          F("___ (not/know) what to say, I stayed quiet.", "not knowing", "{Not knowing} what to say, I stayed quiet.", "Negativa → Not + -ing.")
        ] },
      { id: "c1m2-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("___ (read) the contract, we decided to sign it.", "having read", "{Having read} the contract, we decided to sign it.", "Primeiro leram → Having read."),
          F("Anyone ___ (want) to join the project should talk to Ana.", "wanting", "Anyone {wanting} to join the project should talk to Ana.", "who wants → wanting."),
          F("The emails ___ (send) yesterday had a typo.", "sent", "The emails {sent} yesterday had a typo.", "that were sent → sent."),
          F("___ (write) in plain English, the guide is easy to follow.", "written", "{Written} in plain English, the guide is easy to follow.", "Sentido passivo → written."),
          F("___ (lose) the client, the team reviewed its process.", "having lost", "{Having lost} the client, the team reviewed its process.", "Antes perderam → Having lost."),
          F("The person ___ (lead) the meeting is from sales.", "leading", "The person {leading} the meeting is from sales.", "who is leading → leading."),
          F("___ (feel) tired, I left early.", "feeling", "{Feeling} tired, I left early.", "Causa → Feeling."),
          F("Documents ___ (sign) by the director are valid.", "signed", "Documents {signed} by the director are valid.", "that are signed → signed.")
        ] },
      { id: "c1m2-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Depois de terminar o relatório, ele foi para casa.", "Having finished the report, he went home.", "Having + particípio."),
          T("A mulher sentada perto da janela é a nova CEO.", "The woman sitting by the window is the new CEO.", "sitting = who is sitting."),
          T("Construído em 1990, o prédio precisa de reformas.", "Built in 1990, the building needs repairs.", "Particípio = passivo."),
          T("Sem saber o que dizer, fiquei quieto.", "Not knowing what to say, I stayed quiet.", "Not + -ing."),
          T("Os produtos vendidos online são mais baratos.", "The products sold online are cheaper.", "sold = that are sold."),
          T("Sendo nova na equipe, ela fez muitas perguntas.", "Being new to the team, she asked a lot of questions.", "Being = causa.")
        ] },
      { id: "c1m2-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c1m2-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Having analyzed the data, we changed our strategy.", "Depois de analisar os dados, mudamos nossa estratégia."),
          R("Founded in 2015, the agency now has fifty employees.", "Fundada em 2015, a agência hoje tem cinquenta funcionários."),
          R("Clients signing annual contracts get a discount.", "Clientes que assinam contratos anuais ganham desconto."),
          R("Not wanting to miss the deadline, the team worked late.", "Sem querer perder o prazo, a equipe trabalhou até tarde."),
          R("The report published last week caused a lot of discussion.", "O relatório publicado semana passada gerou muita discussão."),
          R("Looking back, I would have done things differently.", "Olhando para trás, eu teria feito as coisas de outro jeito.")
        ] },
      { id: "c1m2-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to found", "fundar", "The company was founded in 2015."),
          V("annual", "anual", "We have an annual review."),
          V("discount", "desconto", "Can you give us a discount?"),
          V("strategy", "estratégia", "Our strategy is working."),
          V("to apologize", "pedir desculpas", "He apologized for the delay."),
          V("plain", "simples, claro", "Write it in plain English.")
        ] }
    ]
  },
  {
    id: "c1m3", title: "Módulo", subtitle: "Ênfase: What we need is…, It was Ana who…",
    sections: [
      { id: "c1m3-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Estruturas para <b>destacar a parte mais importante</b> da frase.",
        cards: [
          C("What + frase + is / was", ["O que precisamos é…"], "What we need is more time."),
          C("It is / It was … who / that", ["Foi a Ana que…"], "It was Ana who closed the deal."),
          C("All, The thing is, The reason why", ["All I want is… (Tudo o que quero é…)", "The thing is, … (A questão é que…)"], "All I want is a clear answer."),
          C("do / does / did de ênfase", ["Reforça: \"entendo, sim\", \"ela ligou, sim\""], "I do understand your concern.")
        ] },
      { id: "c1m3-r1", type: "fill", title: "Rodada 1", subtitle: "Destaque a ideia",
        items: [
          F("___ we need is more time.", "what", "{What} we need is more time.", "O que precisamos → What we need."),
          F("It was Ana ___ closed the deal.", ["who", "that"], "It was Ana {who} closed the deal.", "Pessoa → who (ou that)."),
          F("___ I want is a clear answer. (Tudo que)", "all", "{All} I want is a clear answer.", "Tudo o que → All."),
          F("I ___ understand your concern. (ênfase)", "do", "I {do} understand your concern.", "Ênfase no presente → do."),
          F("She ___ call you yesterday! (ênfase, passado)", "did", "She {did} call you yesterday!", "Ênfase no passado → did + verbo puro."),
          F("It ___ the price that made them leave. (foi)", "was", "It {was} the price that made them leave.", "Foi → It was."),
          F("The reason ___ we're late is that the system crashed.", "why", "The reason {why} we're late is that the system crashed.", "The reason why…"),
          F("What surprised me ___ the quality of the work.", "was", "What surprised me {was} the quality of the work.", "What… + was.")
        ] },
      { id: "c1m3-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("___ the client wants is a cheaper option.", "what", "{What} the client wants is a cheaper option.", "What + frase + is."),
          F("It's not the money ___ matters, it's the time.", "that", "It's not the money {that} matters.", "Coisa → that."),
          F("What I did ___ call the supplier directly.", "was", "What I did {was} call the supplier directly.", "What I did was + verbo puro."),
          F("He ___ work hard, but the results didn't come. (ênfase)", "did", "He {did} work hard, but the results didn't come.", "Ênfase no passado → did."),
          F("The thing ___, we don't have enough people.", "is", "The thing {is}, we don't have enough people.", "A questão é → The thing is."),
          F("It was in March ___ we launched the site.", "that", "It was in March {that} we launched the site.", "Tempo → that."),
          F("All we can do now ___ wait.", "is", "All we can do now {is} wait.", "All + frase + is."),
          F("What happened ___ that the server went down.", "was", "What happened {was} that the server went down.", "What happened was…")
        ] },
      { id: "c1m3-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("O que precisamos é de mais tempo.", "What we need is more time.", "What + is."),
          T("Foi a Ana que fechou o negócio.", "It was Ana who closed the deal.", "It was… who."),
          T("Eu entendo, sim, a sua preocupação.", "I do understand your concern.", "do de ênfase."),
          T("Tudo o que eu quero é uma resposta clara.", "All I want is a clear answer.", "All + is."),
          T("O motivo do atraso é que o sistema caiu.", "The reason why we're late is that the system went down.", "The reason why… is that…"),
          T("O que me surpreendeu foi a qualidade.", "What surprised me was the quality.", "What + was.")
        ] },
      { id: "c1m3-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c1m3-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("What our clients value most is quick answers.", "O que nossos clientes mais valorizam são respostas rápidas."),
          R("It was the design team that suggested the new layout.", "Foi a equipe de design que sugeriu o novo layout."),
          R("I do appreciate your patience with this project.", "Agradeço de verdade sua paciência com este projeto."),
          R("The thing is, we can't lower the price any further.", "A questão é que não conseguimos baixar mais o preço."),
          R("All we need now is the client's approval.", "Tudo de que precisamos agora é a aprovação do cliente."),
          R("What made the difference was the follow-up call.", "O que fez a diferença foi a ligação de acompanhamento.")
        ] },
      { id: "c1m3-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("deal", "negócio, acordo", "We closed the deal yesterday."),
          V("concern", "preocupação", "I understand your concern."),
          V("to value", "valorizar", "We value your feedback."),
          V("patience", "paciência", "Thanks for your patience."),
          V("to appreciate", "agradecer, valorizar", "I appreciate your help."),
          V("follow-up", "acompanhamento, retorno", "I'll send a follow-up email.")
        ] }
    ]
  },
  {
    id: "c1m4", title: "Módulo", subtitle: "Além do if: unless, provided that, Had I known",
    sections: [
      { id: "c1m4-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Outras formas de dizer <b>\"se\"</b>, mais precisas ou mais formais.",
        cards: [
          C("unless = a menos que", ["Funciona como if not."], "We'll lose the client unless we lower the price."),
          C("as long as / provided that = desde que", [], "You can work from home as long as you meet the deadlines."),
          C("otherwise = senão, caso contrário", [], "Send it today; otherwise, we'll miss the deadline."),
          C("in case = caso (por precaução)", [], "Take your laptop in case the meeting goes online."),
          C("Inversão no lugar do if (formal)", ["Had I known = If I had known", "Should you need = If you need", "Were I you = If I were you"], "Should you need any help, please contact me.")
        ] },
      { id: "c1m4-r1", type: "fill", title: "Rodada 1", subtitle: "Qual palavra no lugar do if?",
        items: [
          F("We'll lose the client ___ we lower the price.", "unless", "We'll lose the client {unless} we lower the price.", "A menos que → unless."),
          F("You can work from home ___ you meet the deadlines. (desde que)", ["as long as", "provided that", "providing that"], "You can work from home {as long as} you meet the deadlines.", "Desde que → as long as."),
          F("Send it today; ___, we'll miss the deadline. (senão)", "otherwise", "Send it today; {otherwise}, we'll miss the deadline.", "Senão → otherwise."),
          F("___ I known, I would have called you. (formal)", "had", "{Had} I known, I would have called you.", "Had I known = If I had known."),
          F("___ you need any help, please contact me. (formal)", "should", "{Should} you need any help, please contact me.", "Should you = If you."),
          F("___ I you, I would accept the offer.", "were", "{Were} I you, I would accept the offer.", "Were I you = If I were you."),
          F("Take your laptop ___ the meeting goes online. (caso)", "in case", "Take your laptop {in case} the meeting goes online.", "Por precaução → in case."),
          F("I won't sign ___ they change the clause. (a menos que)", "unless", "I won't sign {unless} they change the clause.", "A menos que → unless.")
        ] },
      { id: "c1m4-r2", type: "fill", title: "Rodada 2", subtitle: "Mais prática",
        items: [
          F("___ it not been for your help, we would have failed.", "had", "{Had} it not been for your help, we would have failed.", "Se não fosse → Had it not been for."),
          F("We'll deliver on Friday, ___ that the payment arrives.", ["provided", "providing"], "We'll deliver on Friday, {provided} that the payment arrives.", "Desde que → provided that."),
          F("Call me ___ you have any questions.", ["if", "in case"], "Call me {if} you have any questions.", "if ou in case funcionam."),
          F("___ the client agree, we'll start next week. (formal)", "should", "{Should} the client agree, we'll start next week.", "Should + sujeito + verbo puro."),
          F("Hurry up, ___ we'll be late.", ["or", "otherwise", "or else"], "Hurry up, {or} we'll be late.", "Senão → or / otherwise."),
          F("You can use the room ___ long as you leave it clean.", "as", "You can use the room {as} long as you leave it clean.", "as long as."),
          F("___ we hire more people, the team will burn out. (a menos que)", "unless", "{Unless} we hire more people, the team will burn out.", "A menos que → Unless."),
          F("___ you to need more time, let me know. (formal)", "were", "{Were} you to need more time, let me know.", "Were you to = If you were to.")
        ] },
      { id: "c1m4-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Vamos perder o cliente a menos que baixemos o preço.", "We'll lose the client unless we lower the price.", "unless + presente."),
          T("Pode trabalhar de casa desde que cumpra os prazos.", "You can work from home as long as you meet the deadlines.", "as long as."),
          T("Se eu soubesse, teria ligado. (formal)", "Had I known, I would have called.", "Had I known."),
          T("Caso precise de ajuda, me avise. (formal)", "Should you need help, let me know.", "Should you need."),
          T("Mande hoje; senão, perdemos o prazo.", "Send it today; otherwise, we'll miss the deadline.", "otherwise."),
          T("Leve o notebook caso a reunião seja online.", "Take your laptop in case the meeting is online.", "in case.")
        ] },
      { id: "c1m4-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c1m4-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("We can offer a discount provided that you sign a two-year contract.", "Podemos dar desconto desde que você assine um contrato de dois anos."),
          R("Should you have any questions, don't hesitate to contact us.", "Caso tenha alguma dúvida, não hesite em nos contatar."),
          R("Had we tested the system earlier, we would have avoided the problem.", "Se tivéssemos testado o sistema antes, teríamos evitado o problema."),
          R("Unless we get approval today, the launch will be delayed.", "A menos que tenhamos aprovação hoje, o lançamento vai atrasar."),
          R("I always save a copy in case the system crashes.", "Sempre salvo uma cópia caso o sistema trave."),
          R("You're welcome to join, as long as you're on time.", "Você pode participar, desde que chegue no horário.")
        ] },
      { id: "c1m4-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to hesitate", "hesitar", "Don't hesitate to call me."),
          V("to burn out", "esgotar-se", "The team is burning out."),
          V("payment", "pagamento", "The payment arrived today."),
          V("to delay", "atrasar, adiar", "The launch was delayed."),
          V("offer", "oferta, proposta", "I accepted the job offer."),
          V("launch", "lançamento", "The launch is next week.")
        ] }
    ]
  },
  {
    id: "c1m5", title: "Módulo", subtitle: "Collocations: make a decision, meet a deadline",
    sections: [
      { id: "c1m5-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Palavras que <b>andam juntas</b>. Traduzir ao pé da letra soa estranho: não se diz <i>make a research</i>.",
        cards: [
          C("make", ["make a decision, make a mistake, make an effort, make progress"], "We need to make a decision."),
          C("do", ["do business, do research, do a favor, do your best"], "We do business in five countries."),
          C("take", ["take into account, take part, take responsibility, take action"], "Please take the budget into account."),
          C("Prazos e metas", ["meet a deadline, set a goal, reach an agreement, raise a concern"], "We worked all weekend to meet the deadline.")
        ] },
      { id: "c1m5-r1", type: "fill", title: "Rodada 1", subtitle: "Qual verbo combina?",
        items: [
          F("We need to ___ a decision by Friday.", "make", "We need to {make} a decision by Friday.", "make a decision."),
          F("Our company ___ business with clients in five countries.", "does", "Our company {does} business with clients in five countries.", "do business."),
          F("She ___ a mistake in the invoice.", "made", "She {made} a mistake in the invoice.", "make a mistake."),
          F("We worked all weekend to ___ the deadline.", "meet", "We worked all weekend to {meet} the deadline.", "meet a deadline = cumprir o prazo."),
          F("Please ___ into account the client's budget.", "take", "Please {take} into account the client's budget.", "take into account = levar em conta."),
          F("Can you ___ me a favor?", "do", "Can you {do} me a favor?", "do a favor."),
          F("After hours of talks, we ___ an agreement.", "reached", "After hours of talks, we {reached} an agreement.", "reach an agreement."),
          F("He ___ a concern about the timeline in the meeting.", "raised", "He {raised} a concern about the timeline.", "raise a concern = levantar uma preocupação.")
        ] },
      { id: "c1m5-r2", type: "fill", title: "Rodada 2", subtitle: "Mais collocations",
        items: [
          F("The team is ___ good progress.", "making", "The team is {making} good progress.", "make progress."),
          F("We need to ___ more research before launching.", "do", "We need to {do} more research before launching.", "do research."),
          F("Everyone should ___ part in the training.", "take", "Everyone should {take} part in the training.", "take part = participar."),
          F("The manager ___ full responsibility for the error.", "took", "The manager {took} full responsibility for the error.", "take responsibility."),
          F("Let's ___ a goal for next quarter.", "set", "Let's {set} a goal for next quarter.", "set a goal = definir uma meta."),
          F("I'll ___ my best to finish today.", "do", "I'll {do} my best to finish today.", "do your best."),
          F("We have to ___ action now.", "take", "We have to {take} action now.", "take action = agir."),
          F("She ___ an effort to learn everyone's name.", "made", "She {made} an effort to learn everyone's name.", "make an effort.")
        ] },
      { id: "c1m5-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Precisamos tomar uma decisão.", "We need to make a decision.", "Tomar decisão → make a decision."),
          T("Cometi um erro.", "I made a mistake.", "Cometer erro → make a mistake."),
          T("Conseguimos cumprir o prazo.", "We managed to meet the deadline.", "Cumprir prazo → meet a deadline."),
          T("Leve o orçamento em conta.", "Take the budget into account.", "Levar em conta → take into account."),
          T("Chegamos a um acordo.", "We reached an agreement.", "Chegar a um acordo → reach an agreement."),
          T("Vou fazer o meu melhor.", "I'll do my best.", "do your best.")
        ] },
      { id: "c1m5-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c1m5-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("We made a lot of progress this quarter, but we still have a long way to go.", "Avançamos muito neste trimestre, mas ainda temos um longo caminho."),
          R("Before making a decision, let's do some research.", "Antes de tomar uma decisão, vamos pesquisar um pouco."),
          R("The client raised a valid concern about the timeline.", "O cliente levantou uma preocupação válida sobre o cronograma."),
          R("It took us three meetings to reach an agreement.", "Levamos três reuniões para chegar a um acordo."),
          R("Everyone took part in the brainstorming session.", "Todos participaram da sessão de brainstorming."),
          R("She always takes responsibility when things go wrong.", "Ela sempre assume a responsabilidade quando algo dá errado.")
        ] },
      { id: "c1m5-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("quarter", "trimestre", "Sales grew this quarter."),
          V("timeline", "cronograma", "Let's review the timeline."),
          V("training", "treinamento", "The training is on Friday."),
          V("valid", "válido", "That's a valid point."),
          V("session", "sessão", "The session lasts an hour."),
          V("progress", "progresso, avanço", "We're making progress.")
        ] }
    ]
  },
  {
    id: "c1m6", title: "Módulo", subtitle: "Inglês formal e e-mails + revisão do C1",
    sections: [
      { id: "c1m6-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Como soar profissional em <b>e-mails e documentos</b>.",
        cards: [
          C("Conectores formais", ["moreover, furthermore = além disso", "nevertheless, nonetheless = ainda assim", "whereas = enquanto (contraste)", "hence, thus = portanto"], "The budget was small. Nevertheless, the event was a success."),
          C("Frases prontas de e-mail", ["I am writing to…, Please find attached…", "I would appreciate it if you could…", "I look forward to hearing from you."], "Please find attached the signed contract."),
          C("Palavras do dia a dia → formais", ["ask → request, need → require", "help → assist, buy → purchase, get → receive"], "We would like to request a meeting.")
        ] },
      { id: "c1m6-r1", type: "fill", title: "Rodada 1", subtitle: "Conectores e frases de e-mail",
        items: [
          F("The product is cheap. ___, it's very reliable. (Além disso)", ["moreover", "furthermore"], "The product is cheap. {Moreover}, it's very reliable.", "Além disso → Moreover / Furthermore.", ["nevertheless", "whereas", "hence"]),
          F("The budget was small. ___, the event was a success. (Ainda assim)", ["nevertheless", "nonetheless"], "The budget was small. {Nevertheless}, the event was a success.", "Ainda assim → Nevertheless.", ["moreover", "whereas", "hence"]),
          F("Sales grew in the south, ___ they fell in the north. (enquanto)", "whereas", "Sales grew in the south, {whereas} they fell in the north.", "Contraste → whereas.", ["moreover", "hence", "nevertheless"]),
          F("Costs went up; ___, prices had to change. (portanto)", ["hence", "thus", "therefore"], "Costs went up; {hence}, prices had to change.", "Portanto → hence / thus.", ["whereas", "moreover", "nevertheless"]),
          F("I am writing ___ request more information.", "to", "I am writing {to} request more information.", "I am writing to + verbo.", ["for", "about", "that"]),
          F("Please find ___ the signed contract.", "attached", "Please find {attached} the signed contract.", "Segue em anexo → Please find attached.", ["attaching", "attach", "attachment"]),
          F("I would appreciate it ___ you could reply by Friday.", "if", "I would appreciate it {if} you could reply by Friday.", "I would appreciate it if…", ["that", "when", "so"]),
          F("I look forward to ___ (hear) from you.", "hearing", "I look forward to {hearing} from you.", "look forward to + -ing.", ["hear", "heard", "be hearing"])
        ] },
      { id: "c1m6-r2", type: "fill", title: "Rodada 2", subtitle: "Palavras formais",
        items: [
          F("We would like to ___ a meeting. (pedir)", "request", "We would like to {request} a meeting.", "ask → request.", ["require", "purchase", "assist"]),
          F("All visitors are ___ to sign in. (precisam)", "required", "All visitors are {required} to sign in.", "need → be required to.", ["requested", "assisted", "received"]),
          F("Our team will ___ you with the setup. (ajudar)", "assist", "Our team will {assist} you with the setup.", "help → assist.", ["request", "require", "purchase"]),
          F("You can ___ the product online. (comprar)", "purchase", "You can {purchase} the product online.", "buy → purchase.", ["assist", "require", "receive"]),
          F("We have ___ your payment. (recebemos)", "received", "We have {received} your payment.", "get → receive.", ["required", "requested", "assisted"]),
          F("___ to the discount, we offer free delivery. (Além de)", "in addition", "{In addition} to the discount, we offer free delivery.", "Além de → In addition to.", ["moreover", "whereas", "hence"]),
          F("We regret ___ inform you that the event is cancelled.", "to", "We regret {to} inform you that the event is cancelled.", "Lamentamos informar → regret to inform.", ["for", "of", "that"]),
          F("Should you require further information, do not hesitate ___ contact us.", "to", "Do not hesitate {to} contact us.", "hesitate to + verbo.", ["for", "in", "of"])
        ] },
      { id: "c1m6-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Escrevo para solicitar mais informações.", "I am writing to request more information.", "I am writing to + request."),
          T("Segue em anexo o contrato.", "Please find attached the contract.", "Please find attached."),
          T("Agradeceria se pudesse responder até sexta.", "I would appreciate it if you could reply by Friday.", "I would appreciate it if…"),
          T("O orçamento era pequeno. Ainda assim, o evento foi um sucesso.", "The budget was small. Nevertheless, the event was a success.", "Nevertheless."),
          T("Aguardo seu retorno.", "I look forward to hearing from you.", "look forward to + -ing."),
          T("Além disso, oferecemos entrega grátis.", "Furthermore, we offer free delivery.", "Furthermore / Moreover.")
        ] },
      { id: "c1m6-mix1", type: "mix", title: "Revisão do C1, parte 1", subtitle: "Tudo o que você viu no C1", count: 8 },
      { id: "c1m6-mix2", type: "mix", title: "Revisão do C1, parte 2", subtitle: "Mais uma rodada misturada", count: 8 },
      { id: "c1m6-leitura", type: "reading", title: "Leitura", subtitle: "Um e-mail formal, frase a frase",
        items: [
          R("Dear Mr. Smith, I am writing to follow up on our meeting last week.", "Prezado Sr. Smith, escrevo para dar continuidade à nossa reunião da semana passada."),
          R("Please find attached the revised proposal.", "Segue em anexo a proposta revisada."),
          R("We have taken your comments into account and adjusted the timeline accordingly.", "Levamos seus comentários em conta e ajustamos o cronograma."),
          R("Furthermore, we would be pleased to offer a 10% discount on the first order.", "Além disso, teríamos o prazer de oferecer 10% de desconto no primeiro pedido."),
          R("Should you require any further information, please do not hesitate to contact me.", "Caso precise de mais informações, não hesite em me contatar."),
          R("I look forward to hearing from you. Kind regards, Ana.", "Aguardo seu retorno. Atenciosamente, Ana.")
        ] },
      { id: "c1m6-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("attached", "em anexo", "The file is attached."),
          V("to request", "solicitar", "I'd like to request a refund."),
          V("to require", "exigir, precisar", "This job requires experience."),
          V("to assist", "auxiliar", "How can I assist you?"),
          V("to purchase", "comprar", "You can purchase it online."),
          V("kind regards", "atenciosamente", "Kind regards, Ana.")
        ] }
    ]
  }
);

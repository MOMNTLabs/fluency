// Nível C2 (proficiente). A ordem fica em course.js.
window.WEEKS.push(
  {
    id: "c2m1", title: "Módulo", subtitle: "Expressões do mundo dos negócios",
    sections: [
      { id: "c2m1-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Expressões que nativos usam o tempo todo no trabalho. O sentido <b>não é a soma das palavras</b>.",
        cards: [
          C("Começar e alinhar", ["get the ball rolling = dar o pontapé inicial", "touch base = conversar rapidinho, alinhar", "on the same page = alinhados"], "Let's get the ball rolling today."),
          C("Quando dá errado", ["back to square one = de volta à estaca zero", "cut corners = economizar no que não devia", "a long shot = chance pequena"], "We're back to square one."),
          C("Números e resultado", ["the bottom line = o que importa no fim", "a ballpark figure = número aproximado", "break even = empatar custos"], "Can you give me a ballpark figure?"),
          C("No dia a dia", ["call it a day = encerrar por hoje", "keep someone in the loop = manter informado", "the elephant in the room = o assunto que ninguém fala"], "Let's call it a day.")
        ] },
      { id: "c2m1-r1", type: "fill", title: "Rodada 1", subtitle: "Complete a expressão",
        items: [
          F("Let's get the ___ rolling and start the project today.", "ball", "Let's get the {ball} rolling.", "get the ball rolling = dar o pontapé inicial.", ["wheel", "game", "team"]),
          F("Can we touch ___ tomorrow to review the plan?", "base", "Can we touch {base} tomorrow?", "touch base = conversar rapidamente.", ["point", "ground", "line"]),
          F("Before the meeting, let's make sure we're all on the same ___.", "page", "We're all on the same {page}.", "on the same page = alinhados.", ["line", "side", "step"]),
          F("The client rejected everything. We're back to ___ one.", "square", "We're back to {square} one.", "back to square one = estaca zero.", ["point", "step", "level"]),
          F("Don't cut ___ on quality just to save time.", "corners", "Don't cut {corners} on quality.", "cut corners = fazer de qualquer jeito.", ["edges", "costs", "lines"]),
          F("Can you give me a ___ figure? I don't need the exact number.", "ballpark", "Can you give me a {ballpark} figure?", "ballpark figure = número aproximado.", ["baseball", "rough", "round"]),
          F("It's 7 p.m. Let's call it a ___.", "day", "Let's call it a {day}.", "call it a day = encerrar por hoje.", ["night", "time", "end"]),
          F("Nobody mentions the budget cuts. It's the elephant in the ___.", "room", "It's the elephant in the {room}.", "Assunto óbvio que ninguém comenta.", ["office", "house", "meeting"])
        ] },
      { id: "c2m1-r2", type: "fill", title: "Rodada 2", subtitle: "Mais expressões",
        items: [
          F("Getting this client is a long ___, but let's try.", "shot", "Getting this client is a long {shot}.", "a long shot = chance pequena.", ["way", "run", "call"]),
          F("The ___ line is that we need more sales.", "bottom", "The {bottom} line is that we need more sales.", "the bottom line = o que importa.", ["final", "base", "end"]),
          F("We need to think outside the ___ to solve this.", "box", "We need to think outside the {box}.", "Pensar fora da caixa.", ["square", "room", "line"]),
          F("After two years, the project finally broke ___.", "even", "The project finally broke {even}.", "break even = empatar custos e receitas.", ["out", "down", "up"]),
          F("Let's keep the client in the ___ about any changes.", "loop", "Let's keep the client in the {loop}.", "in the loop = informado.", ["line", "know", "circle"]),
          F("This task is a piece of ___. I'll finish it in ten minutes.", "cake", "This task is a piece of {cake}.", "a piece of cake = moleza.", ["bread", "pie", "work"]),
          F("We're running ___ of time; let's wrap this up.", "out", "We're running {out} of time.", "run out of = ficar sem.", ["low", "short", "off"]),
          F("The new manager hit the ___ running and closed three deals in a week.", "ground", "The new manager hit the {ground} running.", "hit the ground running = já chegar produzindo.", ["floor", "road", "street"])
        ] },
      { id: "c2m1-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza com a expressão em inglês",
        items: [
          T("Vamos dar o pontapé inicial no projeto.", "Let's get the ball rolling on the project.", "get the ball rolling."),
          T("Voltamos à estaca zero.", "We're back to square one.", "back to square one."),
          T("Me dá um número aproximado?", "Can you give me a ballpark figure?", "ballpark figure."),
          T("Vamos encerrar por hoje.", "Let's call it a day.", "call it a day."),
          T("Precisamos estar alinhados.", "We need to be on the same page.", "on the same page."),
          T("Mantenha o cliente informado.", "Keep the client in the loop.", "in the loop.")
        ] },
      { id: "c2m1-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c2m1-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Let's touch base on Monday and see where we are.", "Vamos nos falar na segunda e ver onde estamos."),
          R("The bottom line is that the investment didn't pay off.", "O resumo é que o investimento não deu retorno."),
          R("Winning that contract was a long shot, but we did it.", "Ganhar aquele contrato era improvável, mas conseguimos."),
          R("We can't afford to cut corners on client security.", "Não podemos economizar na segurança dos clientes."),
          R("Our new intern really hit the ground running.", "Nosso novo estagiário já chegou produzindo."),
          R("Before we wrap up, is everyone on the same page?", "Antes de encerrarmos, estão todos alinhados?")
        ] },
      { id: "c2m1-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to wrap up", "encerrar, finalizar", "Let's wrap up the meeting."),
          V("to pay off", "dar retorno, valer a pena", "All the hard work paid off."),
          V("can't afford to", "não poder se dar ao luxo de", "We can't afford to lose this client."),
          V("a long shot", "chance pequena", "It's a long shot, but let's try."),
          V("in the loop", "informado", "Keep me in the loop."),
          V("the bottom line", "o resultado final, o que importa", "The bottom line is profit.")
        ] }
    ]
  },
  {
    id: "c2m2", title: "Módulo", subtitle: "Nuance: it seems, likely to, to some extent",
    sections: [
      { id: "c2m2-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Nativos raramente afirmam tudo com 100% de certeza. Saber <b>suavizar</b> é sinal de inglês avançado.",
        cards: [
          C("Suavizar", ["It seems that… / It would appear that…", "apparently = ao que parece", "arguably = pode-se dizer que"], "It seems that the client is not happy."),
          C("Probabilidade", ["is likely to / is unlikely to", "may well = é bem possível", "is bound to = com certeza vai"], "Sales are likely to grow next year."),
          C("Até certo ponto", ["to some extent, to a certain degree, more or less"], "I agree with you to some extent."),
          C("Expressões úteis", ["tend to = costumar", "might as well = já que é assim, melhor…", "can't help + -ing = não conseguir evitar"], "I can't help thinking we missed something.")
        ] },
      { id: "c2m2-r1", type: "fill", title: "Rodada 1", subtitle: "Suavize a frase",
        items: [
          F("It ___ that the client is not happy. (parece)", "seems", "It {seems} that the client is not happy.", "Parece → It seems.", ["looks", "appears like", "feels"]),
          F("Sales are ___ to grow next year. (provavelmente vão)", "likely", "Sales are {likely} to grow next year.", "be likely to = provavelmente.", ["probably", "possible", "able"]),
          F("That ___ well be the best option. (é bem possível)", "may", "That {may} well be the best option.", "may well = é bem possível.", ["can", "will", "must"]),
          F("This is, ___, our best result so far. (pode-se dizer)", "arguably", "This is, {arguably}, our best result so far.", "arguably = pode-se dizer que.", ["argumentally", "apparently not", "surely not"]),
          F("I agree with you to some ___.", "extent", "I agree with you to some {extent}.", "to some extent = até certo ponto.", ["point", "level", "part"]),
          F("People ___ to buy more in December. (costumam)", "tend", "People {tend} to buy more in December.", "tend to = costumar.", ["use", "used", "trend"]),
          F("The meeting got cancelled, so we might ___ well go home.", "as", "We might {as} well go home.", "might as well = já que é assim.", ["so", "very", "too"]),
          F("I can't help ___ (think) that we missed something.", "thinking", "I can't help {thinking} that we missed something.", "can't help + -ing.", ["think", "to think", "thought"])
        ] },
      { id: "c2m2-r2", type: "fill", title: "Rodada 2", subtitle: "Mais nuance",
        items: [
          F("With this team, the project is ___ to succeed. (com certeza vai)", "bound", "The project is {bound} to succeed.", "be bound to = certamente vai.", ["likely", "sure of", "able"]),
          F("It's ___ that prices will drop soon. (improvável)", "unlikely", "It's {unlikely} that prices will drop soon.", "unlikely = improvável.", ["unlike", "impossible to", "unsure"]),
          F("It would ___ that the data was incorrect. (formal: parece)", "appear", "It would {appear} that the data was incorrect.", "It would appear that = ao que parece.", ["seem like", "look", "show"]),
          F("I'd ___ not discuss this by email. (prefiro)", "rather", "I'd {rather} not discuss this by email.", "I'd rather = prefiro.", ["better", "prefer", "like"]),
          F("___, the supplier closed last month. (aparentemente)", "apparently", "{Apparently}, the supplier closed last month.", "apparently = ao que parece.", ["arguably", "evidently not", "obviously"]),
          F("The results are, more ___ less, what we expected.", "or", "The results are, more {or} less, what we expected.", "more or less = mais ou menos.", ["and", "to", "than"]),
          F("To a certain ___, the client is right.", "degree", "To a certain {degree}, the client is right.", "to a certain degree = até certo ponto.", ["grade", "extent of", "level of"]),
          F("She couldn't help ___ (laugh) at the comment.", "laughing", "She couldn't help {laughing} at the comment.", "can't help + -ing.", ["laugh", "to laugh", "laughed"])
        ] },
      { id: "c2m2-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Parece que o cliente não está satisfeito.", "It seems that the client isn't satisfied.", "It seems that…"),
          T("As vendas provavelmente vão crescer.", "Sales are likely to grow.", "be likely to."),
          T("Concordo até certo ponto.", "I agree to some extent.", "to some extent."),
          T("Já que a reunião foi cancelada, melhor irmos para casa.", "Since the meeting was cancelled, we might as well go home.", "might as well."),
          T("Não consigo deixar de pensar que esquecemos algo.", "I can't help thinking that we forgot something.", "can't help + -ing."),
          T("As pessoas costumam comprar mais em dezembro.", "People tend to buy more in December.", "tend to.")
        ] },
      { id: "c2m2-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c2m2-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("It would seem that our message isn't reaching the right audience.", "Parece que nossa mensagem não está chegando ao público certo."),
          R("Arguably, this is the most important decision of the year.", "Pode-se dizer que esta é a decisão mais importante do ano."),
          R("The new policy is likely to reduce costs to some extent.", "A nova política deve reduzir custos até certo ponto."),
          R("Clients tend to respond better to short, direct emails.", "Clientes costumam responder melhor a e-mails curtos e diretos."),
          R("If the deadline can't change, we might as well start now.", "Se o prazo não pode mudar, é melhor começarmos agora."),
          R("I can't help feeling that we're missing an opportunity.", "Não consigo deixar de sentir que estamos perdendo uma oportunidade.")
        ] },
      { id: "c2m2-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("audience", "público", "Who is our audience?"),
          V("policy", "política, regra interna", "Our refund policy is simple."),
          V("opportunity", "oportunidade", "This is a great opportunity."),
          V("to reduce", "reduzir", "We reduced costs by 10%."),
          V("so far", "até agora", "So far, so good."),
          V("evidence", "evidência, prova", "There's no evidence of fraud.")
        ] }
    ]
  },
  {
    id: "c2m3", title: "Módulo", subtitle: "I suggest that he call, It's high time we…",
    sections: [
      { id: "c2m3-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Estruturas formais que soam <b>muito naturais para nativos</b>, mas parecem \"erradas\" à primeira vista.",
        cards: [
          C("suggest / recommend / insist that + verbo puro", ["Sem s, mesmo com he / she. Com be, fica be."], "I suggest that he call the client today."),
          C("It is essential / vital / crucial that + verbo puro", [], "It is essential that she attend the meeting."),
          C("It's (high) time + passado", ["Já passou da hora de…"], "It's high time we changed this system."),
          C("would rather + pessoa + passado", ["Prefiro que você…"], "I'd rather you didn't share this."),
          C("Fórmulas fixas", ["if need be = se necessário", "be that as it may = seja como for", "come what may = aconteça o que acontecer"], "We'll work on Saturday, if need be.")
        ] },
      { id: "c2m3-r1", type: "fill", title: "Rodada 1", subtitle: "Subjuntivo e estruturas fixas",
        items: [
          F("I suggest that he ___ (call) the client today.", ["call", "should call"], "I suggest that he {call} the client today.", "suggest that + verbo puro (sem s). <i>should call</i> também vale.", ["calls", "called", "calling"]),
          F("It is essential that she ___ (attend) the meeting.", "attend", "It is essential that she {attend} the meeting.", "essential that + verbo puro.", ["attends", "attended", "will attend"]),
          F("The client insisted that the contract ___ (be) signed today.", ["be", "should be"], "The client insisted that the contract {be} signed today.", "insist that + be.", ["being", "been", "to be"]),
          F("It's high time we ___ (change) this system.", "changed", "It's high time we {changed} this system.", "It's high time + passado.", ["change", "will change", "have changed"]),
          F("I'd rather you ___ (not/share) this with anyone.", "didn't share", "I'd rather you {didn't share} this with anyone.", "would rather + pessoa + passado.", ["don't share", "won't share", "not share"]),
          F("It's time we ___ (leave).", "left", "It's time we {left}.", "It's time + passado.", ["leave", "are leaving", "have left"]),
          F("We recommend that every employee ___ (complete) the training.", "complete", "We recommend that every employee {complete} the training.", "recommend that + verbo puro.", ["completes", "completed", "will complete"]),
          F("They demanded that he ___ (apologize).", "apologize", "They demanded that he {apologize}.", "demand that + verbo puro.", ["apologizes", "apologized", "would apologize"])
        ] },
      { id: "c2m3-r2", type: "fill", title: "Rodada 2", subtitle: "Fórmulas fixas",
        items: [
          F("We'll work on Saturday, if ___ be.", "need", "We'll work on Saturday, if {need} be.", "if need be = se necessário.", ["must", "it", "needed"]),
          F("Be that as it ___, we still have to deliver.", "may", "Be that as it {may}, we still have to deliver.", "Be that as it may = seja como for.", ["might", "is", "can"]),
          F("Come what ___, we'll launch on Monday.", "may", "Come what {may}, we'll launch on Monday.", "Come what may = aconteça o que acontecer.", ["will", "might", "can"]),
          F("If they don't accept, so ___ it.", "be", "If they don't accept, so {be} it.", "So be it = que assim seja.", ["is", "let", "may"]),
          F("It's crucial that the data ___ (be) protected.", ["be", "should be"], "It's crucial that the data {be} protected.", "crucial that + be. No inglês britânico, <i>should be</i> também aparece.", ["being", "been", "will"]),
          F("I'd rather we ___ (discuss) this in person.", "discussed", "I'd rather we {discussed} this in person.", "would rather + pessoa + passado.", ["discuss", "will discuss", "have discussed"]),
          F("The board proposed that she ___ (lead) the new team.", "lead", "The board proposed that she {lead} the new team.", "propose that + verbo puro.", ["leads", "led", "will lead"]),
          F("It's about time you ___ (take) a vacation.", "took", "It's about time you {took} a vacation.", "It's about time + passado.", ["take", "taken", "will take"])
        ] },
      { id: "c2m3-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Sugiro que ele ligue para o cliente.", "I suggest that he call the client.", "suggest that + verbo puro."),
          T("É essencial que ela participe.", "It is essential that she attend.", "essential that + verbo puro."),
          T("Já passou da hora de mudarmos o sistema.", "It's high time we changed the system.", "It's high time + passado."),
          T("Prefiro que você não compartilhe isso.", "I'd rather you didn't share this.", "would rather + passado."),
          T("Trabalharemos no sábado, se necessário.", "We'll work on Saturday, if need be.", "if need be."),
          T("Seja como for, precisamos entregar.", "Be that as it may, we still need to deliver.", "Be that as it may.")
        ] },
      { id: "c2m3-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c2m3-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("The client requested that all changes be approved in writing.", "O cliente pediu que todas as alterações sejam aprovadas por escrito."),
          R("It's high time we invested in better tools.", "Já passou da hora de investirmos em ferramentas melhores."),
          R("I'd rather you told me the truth now than later.", "Prefiro que você me conte a verdade agora do que depois."),
          R("It is vital that every team member understand the new process.", "É vital que cada membro da equipe entenda o novo processo."),
          R("The deadline is tight; be that as it may, quality comes first.", "O prazo é apertado; seja como for, a qualidade vem primeiro."),
          R("We'll hire freelancers if need be.", "Vamos contratar freelancers se necessário.")
        ] },
      { id: "c2m3-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("in writing", "por escrito", "Please confirm in writing."),
          V("tight", "apertado", "The budget is tight."),
          V("vital", "vital, essencial", "Your feedback is vital."),
          V("board", "diretoria, conselho", "The board approved the plan."),
          V("to insist", "insistir", "She insisted on paying."),
          V("crucial", "crucial", "This step is crucial.")
        ] }
    ]
  },
  {
    id: "c2m4", title: "Módulo", subtitle: "Formação de palavras: -ment, -ness, un-, mis-",
    sections: [
      { id: "c2m4-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Com prefixos e sufixos, <b>uma palavra vira várias</b>. É o atalho para um vocabulário de nível C2.",
        cards: [
          C("Substantivos", ["-ment: announce → announcement", "-tion / -sion: decide → decision", "-ness: aware → awareness", "-ity: able → ability"], "The announcement was made this morning."),
          C("Adjetivos", ["-ful / -less: useful, useless", "-able: rely → reliable", "-ive: effect → effective"], "We need a more reliable supplier."),
          C("Prefixos de oposição", ["un-: unclear, in- / im-: inefficient, impossible", "dis-: disagree, mis- (errado): misunderstand"], "I think you misunderstood me."),
          C("Prefixos de quantidade e repetição", ["over- (demais): overestimate", "under- (de menos): underestimate", "re- (de novo): rethink"], "Never underestimate the competition.")
        ] },
      { id: "c2m4-r1", type: "fill", title: "Rodada 1", subtitle: "Transforme a palavra",
        items: [
          F("The ___ (announce) was made this morning.", "announcement", "The {announcement} was made this morning.", "Substantivo → announce + ment.", ["announcing", "announced", "announcer"]),
          F("We need to make a ___ (decide) today.", "decision", "We need to make a {decision} today.", "decide → decision.", ["decide", "decisive", "deciding"]),
          F("The talk raised public ___ (aware).", "awareness", "The talk raised public {awareness}.", "aware + ness.", ["aware", "awarement", "awarity"]),
          F("This tool is really ___ (use).", "useful", "This tool is really {useful}.", "use + ful = útil.", ["usage", "user", "usely"]),
          F("We need a more ___ (rely) supplier.", "reliable", "We need a more {reliable} supplier.", "rely → reliable (y → i).", ["reliance", "reliably", "relied"]),
          F("The instructions were ___ (clear), so nobody understood.", "unclear", "The instructions were {unclear}.", "Oposto → un + clear.", ["inclear", "disclear", "clearly"]),
          F("I think you ___ (understand) me. That's not what I said.", "misunderstood", "I think you {misunderstood} me.", "Entender errado → mis + understood.", ["disunderstood", "ununderstood", "understood"]),
          F("Never ___ (estimate) the competition.", "underestimate", "Never {underestimate} the competition.", "Subestimar → under + estimate.", ["misestimate", "estimation", "unestimate"])
        ] },
      { id: "c2m4-r2", type: "fill", title: "Rodada 2", subtitle: "Mais transformações",
        items: [
          F("Her ___ (able) to solve problems is impressive.", "ability", "Her {ability} to solve problems is impressive.", "able → ability.", ["able", "ablement", "ableness"]),
          F("The new process is much more ___ (effect).", "effective", "The new process is much more {effective}.", "effect + ive.", ["effection", "effectful", "effectless"]),
          F("This old system is ___ (efficient). We lose hours every week.", "inefficient", "This old system is {inefficient}.", "Oposto → in + efficient.", ["unefficient", "disefficient", "efficient"]),
          F("I ___ (agree) with the proposal. It's too expensive.", "disagree", "I {disagree} with the proposal.", "Oposto → dis + agree.", ["unagree", "misagree", "inagree"]),
          F("We ___ (estimate) the demand and produced too much.", "overestimated", "We {overestimated} the demand and produced too much.", "Calculou demais → over + estimated.", ["underestimated", "misestimated", "estimated"]),
          F("Let's ___ (think) our strategy for next year.", "rethink", "Let's {rethink} our strategy for next year.", "Pensar de novo → re + think.", ["unthink", "disthink", "thinking"]),
          F("Without the data, the report is ___ (use).", "useless", "Without the data, the report is {useless}.", "Sem utilidade → use + less.", ["useful", "usage", "unuse"]),
          F("Thank you for your ___ (patient).", "patience", "Thank you for your {patience}.", "patient → patience.", ["patient", "patiently", "impatience"])
        ] },
      { id: "c2m4-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("O anúncio foi feito hoje.", "The announcement was made today.", "announcement."),
          T("A palestra aumentou a conscientização do público.", "The talk increased public awareness.", "awareness."),
          T("Essa ferramenta é muito útil.", "This tool is very useful.", "useful."),
          T("Acho que você me entendeu errado.", "I think you misunderstood me.", "misunderstand."),
          T("Nunca subestime a concorrência.", "Never underestimate the competition.", "underestimate."),
          T("Discordo da proposta.", "I disagree with the proposal.", "disagree with.")
        ] },
      { id: "c2m4-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "c2m4-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("The announcement of the merger surprised everyone.", "O anúncio da fusão surpreendeu todo mundo."),
          R("Our main goal this year is to increase brand awareness.", "Nosso principal objetivo este ano é aumentar o reconhecimento da marca."),
          R("We underestimated how long the migration would take.", "Subestimamos quanto tempo a migração levaria."),
          R("Clear communication avoids most misunderstandings.", "Comunicação clara evita a maioria dos mal-entendidos."),
          R("The new dashboard is simple, reliable and incredibly useful.", "O novo painel é simples, confiável e incrivelmente útil."),
          R("Let's rethink the onboarding process for new clients.", "Vamos repensar o processo de integração de novos clientes.")
        ] },
      { id: "c2m4-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("merger", "fusão (de empresas)", "The merger was announced today."),
          V("misunderstanding", "mal-entendido", "It was just a misunderstanding."),
          V("competition", "concorrência", "The competition is growing."),
          V("dashboard", "painel", "Check the sales dashboard."),
          V("onboarding", "integração (de clientes ou funcionários)", "Onboarding takes two weeks."),
          V("awareness", "reconhecimento, consciência", "Brand awareness is growing.")
        ] }
    ]
  },
  {
    id: "c2m5", title: "Módulo", subtitle: "Ler nas entrelinhas + revisão final",
    sections: [
      { id: "c2m5-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "No nível mais alto, o desafio é entender <b>o que não está sendo dito</b>.",
        cards: [
          C("Dizer menos do que é", ["It's not ideal = é ruim", "a bit of a problem = um problemão", "not bad = muito bom"], "We have a bit of a problem: the server is down."),
          C("Educação indireta", ["I was wondering if you could… = pedido educado", "That's an interesting idea = muitas vezes, discordo", "With all due respect = lá vem crítica"], "I was wondering if you could send me the file."),
          C("Eufemismos", ["let go = demitido", "between jobs = desempregado", "pass away = falecer", "challenging = difícil"], "Fifty employees were let go."),
          C("Ironia", ["Oh, great. = que ótimo (quando é ruim)", "Thanks a lot. = valeu mesmo (irritado)", "O tom de voz decide o sentido."], "\"Another meeting? Oh, great.\"")
        ] },
      { id: "c2m5-r1", type: "fill", title: "Rodada 1", subtitle: "Complete a expressão",
        items: [
          F("\"I was ___ if you could send me the file.\" (pedido educado)", "wondering", "I was {wondering} if you could send me the file.", "I was wondering if… = pedido educado.", ["thinking", "asking", "hoping"]),
          F("\"With all due ___, I don't think that's correct.\"", "respect", "With all due {respect}, I don't think that's correct.", "Introduz uma crítica educada.", ["regard", "honor", "politeness"]),
          F("After the merger, fifty employees were ___ go. (demitidos)", "let", "Fifty employees were {let} go.", "let go = demitido (eufemismo).", ["made", "sent", "had"]),
          F("He's ___ jobs at the moment. (desempregado, eufemismo)", "between", "He's {between} jobs at the moment.", "between jobs = desempregado.", ["among", "without", "out"]),
          F("This quarter was ___. (difícil, eufemismo corporativo)", "challenging", "This quarter was {challenging}.", "challenging = difícil.", ["challenged", "hard-working", "chilling"]),
          F("The results are not ___. In fact, they're very good.", "bad", "The results are not {bad}.", "not bad = muito bom.", ["good", "ideal", "great"]),
          F("We have a bit ___ a problem: the server is down.", "of", "We have a bit {of} a problem.", "a bit of a problem = problemão, dito com leveza.", ["from", "with", "on"]),
          F("\"That's an ___ idea\" can politely mean \"I don't agree\".", "interesting", "That's an {interesting} idea.", "Muitas vezes, discordância educada.", ["excellent", "amazing", "obvious"])
        ] },
      { id: "c2m5-r2", type: "fill", title: "Rodada 2", subtitle: "Mais entrelinhas",
        items: [
          F("\"It's not ___.\" = É ruim, mas dito com educação.", "ideal", "It's not {ideal}.", "It's not ideal = é ruim.", ["bad", "great", "terrible"]),
          F("Her grandfather ___ away last year. (faleceu)", "passed", "Her grandfather {passed} away last year.", "pass away = falecer.", ["went", "died", "moved"]),
          F("\"Oh, ___,\" he said when the printer broke again. (ironia)", "great", "\"Oh, {great},\" he said.", "Ironia: o contrário do que diz.", ["no", "well", "sorry"]),
          F("Could you ___ me a hand with this? (ajudar)", ["give", "lend"], "Could you {give} me a hand with this?", "give / lend someone a hand = dar uma mão.", ["take", "make", "borrow"]),
          F("I'm afraid we'll have to ___ the meeting. (adiar)", ["postpone", "put off"], "I'm afraid we'll have to {postpone} the meeting.", "I'm afraid = infelizmente (educado).", ["prolong", "pretend", "cancel out"]),
          F("\"I'm not entirely ___ about this.\" = Tenho dúvidas.", ["convinced", "sure"], "I'm not entirely {convinced} about this.", "Discordância suave.", ["convincing", "certainly", "agreed"]),
          F("Would you ___ if I opened the window?", "mind", "Would you {mind} if I opened the window?", "Would you mind if… = pedido educado.", ["matter", "care of", "bother"]),
          F("I'd be ___ if you could reply today. (grato)", "grateful", "I'd be {grateful} if you could reply today.", "grateful = grato.", ["thankful to", "great", "gratitude"])
        ] },
      { id: "c2m5-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu queria saber se você poderia me ajudar.", "I was wondering if you could help me.", "I was wondering if…"),
          T("Com todo o respeito, discordo.", "With all due respect, I disagree.", "With all due respect."),
          T("Temos um probleminha. (que na verdade é grande)", "We have a bit of a problem.", "a bit of a problem."),
          T("Não é o ideal.", "It's not ideal.", "Understatement."),
          T("Ele foi desligado no mês passado.", "He was let go last month.", "let go = demitido."),
          T("Ficaria grato se pudesse responder hoje.", "I'd be grateful if you could reply today.", "I'd be grateful if…")
        ] },
      { id: "c2m5-mix1", type: "mix", title: "Revisão final, parte 1", subtitle: "Questões de todo o curso", count: 10 },
      { id: "c2m5-mix2", type: "mix", title: "Revisão final, parte 2", subtitle: "Questões de todo o curso", count: 10 },
      { id: "c2m5-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I was wondering if we could move the meeting to Thursday.", "Queria saber se poderíamos mudar a reunião para quinta."),
          R("The launch didn't go exactly as planned, to put it mildly.", "O lançamento não saiu bem como planejado, para dizer o mínimo."),
          R("With all due respect, the numbers tell a different story.", "Com todo o respeito, os números contam outra história."),
          R("\"Another meeting? Oh, great.\" He clearly wasn't happy.", "\"Outra reunião? Que ótimo.\" Ele claramente não estava feliz."),
          R("It's been a challenging year, but we've learned a lot.", "Foi um ano difícil, mas aprendemos muito."),
          R("I'd be grateful if you could keep this between us.", "Ficaria grato se você mantivesse isso entre nós.")
        ] },
      { id: "c2m5-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to put it mildly", "para dizer o mínimo", "It was a mess, to put it mildly."),
          V("grateful", "grato", "I'm grateful for your help."),
          V("to postpone", "adiar", "Let's postpone the call."),
          V("convinced", "convencido", "I'm not convinced yet."),
          V("to let go", "desligar, demitir", "They let ten people go."),
          V("challenging", "desafiador, difícil", "It's a challenging project.")
        ] }
    ]
  }
);

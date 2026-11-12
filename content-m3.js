// Mês 3: rumo ao B2 (módulos 9 a 12)
window.WEEKS.push(
  {
    id: "s9", title: "Módulo 9",
    subtitle: "should, could, might, must e have to",
    sections: [
      { id: "s9-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Depois desses verbos, use o <b>verbo puro</b>, sem <i>to</i>: should post, can edit.",
        cards: [
          C("should = deveria", ["Conselho, sugestão."], "You should post at night."),
          C("could = poderia / conseguia", ["Pedido educado, possibilidade, habilidade no passado."], "Could you send me the file?"),
          C("might = talvez", ["Possibilidade, sem certeza. <i>may</i> é parecido."], "We might change the logo."),
          C("must = tem que / deve ser", ["Obrigação forte ou certeza lógica."], "He worked all night. He must be tired."),
          C("have to × don't have to × mustn't", ["have to = tenho que", "don't have to = não precisa", "mustn't = não pode, é proibido"], "You don't have to come tomorrow.")
        ] },
      { id: "s9-r1", type: "fill", title: "Rodada 1", subtitle: "Qual modal?",
        items: [
          F("You ___ post in the evening. It works better. (deveria)", "should", "You {should} post in the evening.", "Conselho = should."),
          F("___ you send me the file again? (poderia)", ["could", "can"], "{Could} you send me the file again?", "Pedido educado = could."),
          F("Take an umbrella. It ___ rain later. (talvez)", ["might", "may", "could"], "Take an umbrella. It {might} rain later.", "Possibilidade = might."),
          F("You ___ save the project every ten minutes. (tem que)", ["must", "have to"], "You {must} save the project every ten minutes.", "Obrigação forte = must / have to."),
          F("He worked all night. He ___ be exhausted. (deve estar)", "must", "He worked all night. He {must} be exhausted.", "Certeza lógica = must."),
          F("You ___ come tomorrow. It's a holiday. (não precisa)", "don't have to", "You {don't have to} come tomorrow.", "Não precisa = don't have to."),
          F("You ___ share the client's password. (não pode)", ["mustn't", "must not", "can't"], "You {mustn't} share the client's password.", "Proibido = mustn't. É diferente de don't have to."),
          F("We ___ change the logo, but we're not sure yet. (talvez)", ["might", "may"], "We {might} change the logo.", "Talvez = might.")
        ] },
      { id: "s9-r2", type: "fill", title: "Rodada 2", subtitle: "can, could e o verbo puro",
        items: [
          F("I ___ finish this video today. The deadline is tomorrow. (tenho que)", ["have to", "must"], "I {have to} finish this video today.", "Tenho que = have to."),
          F("You should ___ (post) more photos.", "post", "You should {post} more photos.", "Depois do modal, verbo puro. Nada de <i>to post</i>."),
          F("She ___ speak three languages. (consegue)", "can", "She {can} speak three languages.", "Habilidade = can."),
          F("When I was a kid, I ___ swim very well. (conseguia)", "could", "When I was a kid, I {could} swim very well.", "Habilidade no passado = could."),
          F("___ I use your charger? (posso)", ["can", "could", "may"], "{Can} I use your charger?", "Pedir permissão = can / could / may."),
          F("You ___ eat in the studio. It's forbidden. (não pode)", ["mustn't", "can't", "must not", "cannot"], "You {mustn't} eat in the studio.", "Proibido = mustn't / can't."),
          F("I think we ___ test a new format. (deveríamos)", "should", "I think we {should} test a new format.", "Sugestão = should."),
          F("She isn't answering. She ___ be in a meeting. (pode ser que)", ["might", "may", "could"], "She {might} be in a meeting.", "Possibilidade = might.")
        ] },
      { id: "s9-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Você deveria estudar todo dia.", "You should study every day.", "Deveria = should."),
          T("Você poderia me mandar o arquivo?", "Could you send me the file?", "Pedido educado = could."),
          T("Talvez a gente mude a fonte.", "We might change the font.", "Talvez = might."),
          T("Você não precisa vir amanhã.", "You don't have to come tomorrow.", "Não precisa = don't have to."),
          T("Tenho que terminar isso hoje.", "I have to finish this today.", "Tenho que = have to."),
          T("Ele deve estar cansado.", "He must be tired.", "Certeza lógica = must.")
        ] },
      { id: "s9-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s9-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("You should check the weather before you leave.", "Você deveria ver a previsão do tempo antes de sair."),
          R("Could you review the message before I send it?", "Você poderia revisar a mensagem antes de eu enviar?"),
          R("We might need a new camera next year.", "Talvez a gente precise de uma câmera nova no ano que vem."),
          R("You don't have to answer every comment, but you should answer the questions.", "Você não precisa responder todo comentário, mas deveria responder as perguntas."),
          R("The video got 50k views. It must be really good.", "O vídeo teve 50 mil visualizações. Deve ser muito bom."),
          R("You mustn't post the client's content without approval.", "Você não pode postar conteúdo do cliente sem aprovação.")
        ] },
      { id: "s9-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("warning", "aviso", "A clear warning keeps people safe."),
          V("holiday", "feriado", "Monday is a holiday."),
          V("to share", "compartilhar", "Share the link with the team."),
          V("password", "senha", "Never share your password."),
          V("forbidden", "proibido", "Eating in the studio is forbidden."),
          V("views", "visualizações", "The video got 50k views.")
        ] }
    ]
  },
  {
    id: "s10", title: "Módulo 10",
    subtitle: "Voz passiva",
    sections: [
      { id: "s10-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Na voz passiva, o foco é <b>o que aconteceu</b>, não quem fez. A fórmula é <b>be + particípio</b>.",
        cards: [
          C("Presente: is / are + particípio", ["Coisas que acontecem sempre."], "Our posts are scheduled every Monday."),
          C("Passado: was / were + particípio", ["\"Foi feito\"."], "The video was edited yesterday."),
          C("have been + particípio", ["\"Já foi feito\", efeito agora."], "The file has been sent."),
          C("will be / can be / should be + particípio", ["Futuro e modais."], "The site will be launched in March."),
          C("Quem fez → by", ["Só quando importa dizer."], "The logo was designed by our team.")
        ] },
      { id: "s10-r1", type: "fill", title: "Rodada 1", subtitle: "Monte a passiva",
        items: [
          F("The video ___ (edit) yesterday.", "was edited", "The video {was edited} yesterday.", "Passado → was + particípio."),
          F("Our posts ___ (schedule) every Monday.", "are scheduled", "Our posts {are scheduled} every Monday.", "Rotina, plural → are + particípio."),
          F("The logo ___ (design) by our team in 2025.", "was designed", "The logo {was designed} by our team in 2025.", "Passado → was designed."),
          F("The site ___ (launch) next week.", "will be launched", "The site {will be launched} next week.", "Futuro → will be + particípio."),
          F("The file ___ (send) to the client. It's in his inbox now.", "has been sent", "The file {has been sent} to the client.", "Já foi enviado, efeito agora → has been sent."),
          F("These photos ___ (take) with an iPhone.", "were taken", "These photos {were taken} with an iPhone.", "Passado, plural → were taken."),
          F("The sign ___ (write) in English and Portuguese.", ["is written", "was written"], "The sign {is written} in English and Portuguese.", "is written (é escrita) ou was written (foi escrita)."),
          F("This video ___ (watch) by 30k people last week.", "was watched", "This video {was watched} by 30k people last week.", "Passado → was watched.")
        ] },
      { id: "s10-r2", type: "fill", title: "Rodada 2", subtitle: "Mais passiva",
        items: [
          F("English ___ (speak) all over the world.", "is spoken", "English {is spoken} all over the world.", "Fato geral → is spoken."),
          F("The meeting ___ (cancel) yesterday.", ["was cancelled", "was canceled"], "The meeting {was cancelled} yesterday.", "Passado → was cancelled."),
          F("The comments ___ (answer) every day.", "are answered", "The comments {are answered} every day.", "Rotina, plural → are answered."),
          F("The new website ___ (not/finish) yet.", ["hasn't been finished", "has not been finished"], "The new website {hasn't been finished} yet.", "yet → hasn't been + particípio."),
          F("The video should ___ (post) before 6 p.m.", "be posted", "The video should {be posted} before 6 p.m.", "Modal + be + particípio."),
          F("Many mistakes ___ (find) in the first draft.", "were found", "Many mistakes {were found} in the first draft.", "Passado, plural → were found."),
          F("The prize ___ (give) to the best team last year.", "was given", "The prize {was given} to the best team last year.", "Passado → was given."),
          F("This app can ___ (use) offline.", "be used", "This app can {be used} offline.", "can + be + particípio.")
        ] },
      { id: "s10-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("O vídeo foi editado ontem.", "The video was edited yesterday.", "\"Foi editado\" → was edited."),
          T("Os posts são agendados toda segunda.", "The posts are scheduled every Monday.", "Rotina → are scheduled."),
          T("O arquivo já foi enviado.", "The file has already been sent.", "\"Já foi\", efeito agora → has been sent."),
          T("O site vai ser lançado em março.", "The site will be launched in March.", "Futuro → will be launched."),
          T("Essas fotos foram tiradas pela nossa equipe.", "These photos were taken by our team.", "\"Por\" → by."),
          T("Esse app pode ser usado offline.", "This app can be used offline.", "can be used.")
        ] },
      { id: "s10-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s10-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("This website was created in less than two hours.", "Este site foi criado em menos de duas horas."),
          R("All our contracts are reviewed by a lawyer.", "Todos os nossos contratos são revisados por um advogado."),
          R("The new app will be launched after Carnival.", "O aplicativo novo vai ser lançado depois do Carnaval."),
          R("The post has been shared more than 500 times.", "O post foi compartilhado mais de 500 vezes."),
          R("Our logo was redesigned last year.", "Nosso logo foi redesenhado no ano passado."),
          R("Comments should be answered within 24 hours.", "Os comentários devem ser respondidos em até 24 horas.")
        ] },
      { id: "s10-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("within", "dentro de, em até", "Reply within 24 hours."),
          V("to upload", "subir (um arquivo)", "The video was uploaded this morning."),
          V("inbox", "caixa de entrada", "Check your inbox."),
          V("to redesign", "redesenhar, refazer o visual", "We redesigned the highlights."),
          V("to cancel", "cancelar", "The shoot was cancelled because of the rain."),
          V("prize", "prêmio", "Our team won a prize.")
        ] }
    ]
  },
  {
    id: "s11", title: "Módulo 11",
    subtitle: "Conectores: however, although, despite",
    sections: [
      { id: "s11-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Conectores ligam ideias e deixam o seu inglês com cara de B2.",
        cards: [
          C("but × however", ["<b>but</b> = mas, no meio da frase", "<b>However,</b> = porém, no início da frase, com vírgula"], "The video is great. However, it's too long."),
          C("although / even though = embora, mesmo que", ["+ frase completa (sujeito e verbo).", "<i>even though</i> é mais forte."], "Although I was tired, I finished the work."),
          C("despite / in spite of = apesar de", ["+ substantivo ou -ing.", "Nunca + frase completa."], "Despite the rain, the shoot went well."),
          C("so × because", ["<b>so</b> = então (resultado)", "<b>because</b> = porque (causa)"], "The bus was late, so I missed the meeting."),
          C("as soon as = assim que", ["Com futuro, use presente depois dele."], "As soon as the client replies, I'll let you know.")
        ] },
      { id: "s11-r1", type: "fill", title: "Rodada 1", subtitle: "Escolha o conector",
        items: [
          F("The video is great. ___, it's too long. (No entanto)", "however", "The video is great. {However}, it's too long.", "Início de frase, com vírgula → However."),
          F("___ I was tired, I finished the work. (Embora)", ["although", "even though", "though"], "{Although} I was tired, I finished the work.", "+ frase completa → although."),
          F("___ the rain, the shoot went well. (Apesar de)", ["despite", "in spite of"], "{Despite} the rain, the shoot went well.", "+ substantivo → despite."),
          F("The client liked it, ___ he wants a shorter version. (mas)", "but", "The client liked it, {but} he wants a shorter version.", "Meio da frase → but."),
          F("The bus was late, ___ I missed the meeting. (então)", "so", "The bus was late, {so} I missed the meeting.", "Resultado → so."),
          F("I stayed late ___ the deadline was the next day. (porque)", ["because", "since", "as"], "I stayed late {because} the deadline was the next day.", "Causa → because."),
          F("___ being new at the agency, he had great ideas. (Apesar de)", ["despite", "in spite of"], "{Despite} being new at the agency, he had great ideas.", "+ -ing → despite."),
          F("___ we had a small budget, the event was a success. (Mesmo que)", ["even though", "although", "though"], "{Even though} we had a small budget, the event was a success.", "+ frase completa → even though.")
        ] },
      { id: "s11-r2", type: "fill", title: "Rodada 2", subtitle: "Mais conectores",
        items: [
          F("I love editing. ___, filming is not my favorite part. (Porém)", "however", "I love editing. {However}, filming is not my favorite part.", "Início de frase → However."),
          F("We practiced every day, ___ our English got better. (por isso)", "so", "We practiced every day, {so} our English got better.", "Resultado → so."),
          F("___ the client approves, we'll post. (Assim que)", "as soon as", "{As soon as} the client approves, we'll post.", "Assim que = as soon as + presente."),
          F("I'll study English ___ I get to work. (até)", "until", "I'll study English {until} I get to work.", "Até (tempo) = until."),
          F("___ you post, check the spelling. (Antes de)", "before", "{Before} you post, check the spelling.", "Antes de = before."),
          F("I study on the bus ___ I don't have time at home. (porque)", ["because", "since", "as"], "I study on the bus {because} I don't have time at home.", "Causa → because."),
          F("___ he's not a designer, his ideas are good. (Embora)", ["although", "even though", "though"], "{Although} he's not a designer, his ideas are good.", "+ frase completa → although."),
          F("In spite of ___ (be) tired, I watched an episode in English.", "being", "In spite of {being} tired, I watched an episode in English.", "in spite of + -ing.")
        ] },
      { id: "s11-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Embora estivesse cansado, terminei o vídeo.", "Although I was tired, I finished the video.", "although + frase completa."),
          T("Apesar da chuva, gravamos o vídeo.", "Despite the rain, we recorded the video.", "despite + substantivo."),
          T("O texto é ótimo. No entanto, o título é longo demais.", "The text is great. However, the title is too long.", "However no início, com vírgula."),
          T("O ônibus atrasou, então perdi a reunião.", "The bus was late, so I missed the meeting.", "Resultado → so."),
          T("Mesmo que o orçamento seja pequeno, dá para fazer um bom vídeo.", "Even though the budget is small, we can make a good video.", "even though + frase."),
          T("Assim que o cliente aprovar, eu posto.", "As soon as the client approves, I'll post it.", "as soon as + presente, depois will.")
        ] },
      { id: "s11-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s11-leitura", type: "reading", title: "Leitura", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Although the video was short, it got a lot of shares.", "Embora o vídeo fosse curto, teve muitos compartilhamentos."),
          R("Despite the low budget, the event looked professional.", "Apesar do orçamento baixo, o evento ficou profissional."),
          R("The food was great. However, the service was slow.", "A comida estava ótima. No entanto, o atendimento foi lento."),
          R("I study every day, so my English is getting better.", "Estudo todo dia, então meu inglês está melhorando."),
          R("Even though I was tired, I watched an episode in English.", "Mesmo cansado, assisti um episódio em inglês."),
          R("As soon as the client replies, I'll let you know.", "Assim que o cliente responder, te aviso.")
        ] },
      { id: "s11-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("budget", "orçamento", "We have a small budget this month."),
          V("to reply", "responder", "Reply to the comments today."),
          V("shares", "compartilhamentos", "This post got 300 shares."),
          V("to let someone know", "avisar alguém", "Let me know when it's ready."),
          V("goal", "meta, objetivo", "Our goal is to finish by Friday."),
          V("to improve", "melhorar", "My English is improving every week.")
        ] }
    ]
  },
  {
    id: "s12", title: "Módulo 12",
    subtitle: "Revisão do B1 e B2 + teste final",
    sections: [
      { id: "s12-resumo", type: "summary", title: "Resumo do curso até aqui", subtitle: "Tudo o que você estudou, numa tela",
        intro: "Releia com calma. Se algo parecer estranho, volte na semana correspondente.",
        cards: [
          C("Tempos verbais", ["Momento definido → passado simples", "Já, até agora → have + particípio", "\"tinha\" → had, \"-ria\" → would"], "I've already posted it."),
          C("Os três if", ["if + presente → will", "if + passado → would", "if + had done → would have done"], "If I had known, I would have helped."),
          C("Contar o que alguém disse", ["O verbo recua um tempo. said × told."], "She told me she was busy."),
          C("Preposições", ["at = hora e ponto", "on = dia e plataforma", "in = mês, ano, dentro"], "See you on Monday at 9."),
          C("-ing ou to", ["enjoy / finish / avoid + -ing", "want / need / decide + to", "preposição + -ing"], "Thanks for helping me."),
          C("Modais, passiva e conectores", ["should / might / must + verbo puro", "be + particípio", "although + frase, despite + nome"], "The video was edited by our team.")
        ] },
      { id: "s12-mix1", type: "mix", title: "Revisão final, parte 1", subtitle: "Questões de todos os módulos", count: 10 },
      { id: "s12-mix2", type: "mix", title: "Revisão final, parte 2", subtitle: "Questões de todos os módulos", count: 10 },
      { id: "s12-teste", type: "translate", title: "Teste final", subtitle: "Traduza para o inglês",
        items: [
          T("Já postei o vídeo, mas o cliente ainda não viu.", "I've already posted the video, but the client hasn't seen it yet.", "already, yet e have + particípio."),
          T("Se eu tivesse começado antes, teria chegado ao B2 mais cedo.", "If I had started earlier, I would have reached B2 sooner.", "if + had done, would have done."),
          T("Meu chefe disse que ia aprovar o vídeo.", "My boss said he would approve the video.", "\"Ia aprovar\" → would approve."),
          T("Eu gosto de estudar no ônibus.", "I enjoy studying on the bus.", "enjoy + -ing; on the bus."),
          T("Na verdade, eu pretendo morar fora um dia.", "Actually, I intend to live abroad one day.", "actually = na verdade; pretender = intend."),
          T("Você deveria fazer backup dos arquivos.", "You should back up the files.", "should + verbo puro; back up."),
          T("O vídeo foi editado em menos de uma hora.", "The video was edited in less than an hour.", "Passiva no passado."),
          T("Embora seja difícil, eu não vou desistir.", "Although it's hard, I won't give up.", "although + frase; give up.")
        ] },
      { id: "s12-leitura", type: "reading", title: "Leitura", subtitle: "Um texto para fechar o curso",
        items: [
          R("Three months ago, I couldn't use \"had\" without thinking.", "Três meses atrás, eu não conseguia usar \"had\" sem pensar."),
          R("I've studied English on the bus almost every day since November.", "Estudo inglês no ônibus quase todo dia desde novembro."),
          R("If I hadn't started, I would still be translating everything in my head.", "Se eu não tivesse começado, ainda estaria traduzindo tudo na cabeça."),
          R("Even though I'm not fluent yet, I can understand most marketing videos.", "Mesmo não sendo fluente ainda, consigo entender a maioria dos vídeos de marketing."),
          R("Next, I should practice speaking more often.", "Agora, eu deveria praticar a fala com mais frequência."),
          R("I'm looking forward to reaching B2.", "Estou ansioso para chegar ao B2.")
        ] }
    ]
  }
);

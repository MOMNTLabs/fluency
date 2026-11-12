// Mês 2: soar natural (módulos 5 a 8)
window.WEEKS.push(
  {
    id: "s5", title: "Módulo 5",
    subtitle: "Preposições: in, on e at",
    sections: [
      { id: "s5-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Pense do <b>mais exato (at)</b> para o <b>mais amplo (in)</b>.",
        cards: [
          C("at = ponto exato", ["Horas, lugares específicos.", "at 7 a.m., at night, at the bus stop, at work"], "I'm at the bus stop."),
          C("on = dias, datas e superfícies", ["Inclui plataformas e o ônibus.", "on Monday, on December 25th, on Instagram, on the bus"], "I study English on the bus."),
          C("in = períodos e dentro de lugares", ["Meses, anos, partes do dia, cidades.", "in December, in 2027, in the morning, in São Paulo, in a car"], "We post more in the evening."),
          C("Pegadinhas", ["at night, mas in the morning", "on the bus, mas in a car / in an Uber", "on the weekend (EUA)"], "I usually edit videos at night.")
        ] },
      { id: "s5-r1", type: "fill", title: "Rodada 1", subtitle: "Tempo: quando?",
        items: [
          F("The meeting is ___ 9 a.m.", "at", "The meeting is {at} 9 a.m.", "Hora exata → at."),
          F("The campaign starts ___ 2027.", "in", "The campaign starts {in} 2027.", "Ano → in."),
          F("We post every day ___ the morning.", "in", "We post every day {in} the morning.", "Parte do dia → in the morning."),
          F("I don't work ___ Saturdays.", "on", "I don't work {on} Saturdays.", "Dia da semana → on."),
          F("The deadline is ___ Friday.", "on", "The deadline is {on} Friday.", "Dia → on."),
          F("I usually edit videos ___ night.", "at", "I usually edit videos {at} night.", "Exceção: at night."),
          F("Christmas is ___ December.", "in", "Christmas is {in} December.", "Mês → in."),
          F("The new week starts ___ December 7th.", "on", "The new week starts {on} December 7th.", "Data → on.")
        ] },
      { id: "s5-r2", type: "fill", title: "Rodada 2", subtitle: "Lugar: onde?",
        items: [
          F("I study English ___ the bus.", "on", "I study English {on} the bus.", "Ônibus, trem e avião → on."),
          F("I'm waiting ___ the bus stop.", "at", "I'm waiting {at} the bus stop.", "Ponto específico → at."),
          F("We have 10k followers ___ Instagram.", "on", "We have 10k followers {on} Instagram.", "Plataformas e redes → on."),
          F("Our client is based ___ Brazil.", "in", "Our client is based {in} Brazil.", "Cidade, estado, país → in."),
          F("There's a typo ___ the video.", "in", "There's a typo {in} the video.", "Dentro do vídeo → in."),
          F("She's ___ work right now.", "at", "She's {at} work right now.", "at work = no trabalho."),
          F("Look at the text ___ the screen.", "on", "Look at the text {on} the screen.", "Superfície → on."),
          F("He came to the office ___ an Uber.", "in", "He came to the office {in} an Uber.", "Carro e Uber → in.")
        ] },
      { id: "s5-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu estudo inglês no ônibus.", "I study English on the bus.", "on the bus."),
          T("A reunião é na segunda às 10h.", "The meeting is on Monday at 10 a.m.", "Dia → on; hora → at."),
          T("Postamos no Instagram toda noite.", "We post on Instagram every night.", "Plataforma → on."),
          T("Estou no ponto de ônibus.", "I'm at the bus stop.", "Ponto específico → at."),
          T("Tem um erro na legenda.", "There's a mistake in the caption.", "Dentro do texto → in."),
          T("Começo a trabalhar às 8h da manhã.", "I start work at 8 a.m.", "Hora → at.")
        ] },
      { id: "s5-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s5-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I study English on the bus every morning.", "Estudo inglês no ônibus toda manhã."),
          R("The new campaign goes live on Monday at 9 a.m.", "A nova campanha vai ao ar na segunda às 9h."),
          R("We get more likes on Instagram in the evening.", "Recebemos mais curtidas no Instagram no começo da noite."),
          R("There's a mistake in the second slide.", "Tem um erro no segundo slide."),
          R("I'll be at the office until 6 p.m.", "Vou estar no escritório até as 18h."),
          R("In December, we'll post fewer videos.", "Em dezembro, vamos postar menos vídeos.")
        ] },
      { id: "s5-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("slide", "slide (de carrossel)", "The second slide needs a stronger headline."),
          V("headline", "título", "Keep the headline short."),
          V("to go live", "ir ao ar", "The video goes live at noon."),
          V("campaign", "campanha", "The Christmas campaign starts next week."),
          V("until", "até (tempo)", "I work until 6 p.m."),
          V("by Friday", "até sexta (no máximo)", "Please send it by Friday.")
        ] }
    ]
  },
  {
    id: "s6", title: "Módulo 6",
    subtitle: "-ing ou to depois do verbo",
    sections: [
      { id: "s6-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Não tem regra lógica: alguns verbos pedem <b>-ing</b>, outros pedem <b>to</b>. Aprenda em blocos.",
        cards: [
          C("Verbos + -ing", ["enjoy, finish, avoid, keep, mind, suggest"], "I enjoy editing videos."),
          C("Verbos + to", ["want, need, decide, plan, hope, learn"], "I want to learn Excel."),
          C("Os dois funcionam", ["like, love, hate, start"], "I love editing. / I love to edit."),
          C("Depois de preposição: sempre -ing", ["good at, thanks for, before, after, about"], "Thanks for helping me."),
          C("would like / would love + to", ["Desejo educado ou sonho."], "I'd like to work abroad."),
          C("stop doing × stop to do", ["stop doing = parar de fazer", "stop to do = parar para fazer"], "I stopped using that app.")
        ] },
      { id: "s6-r1", type: "fill", title: "Rodada 1", subtitle: "-ing ou to?",
        items: [
          F("I enjoy ___ (edit) videos.", "editing", "I enjoy {editing} videos.", "enjoy + -ing."),
          F("I want ___ (learn) Excel.", "to learn", "I want {to learn} Excel.", "want + to."),
          F("We need ___ (post) more often.", "to post", "We need {to post} more often.", "need + to."),
          F("Have you finished ___ (write) the caption?", "writing", "Have you finished {writing} the caption?", "finish + -ing."),
          F("She decided ___ (change) the font.", "to change", "She decided {to change} the font.", "decide + to."),
          F("Avoid ___ (use) too many hashtags.", "using", "Avoid {using} too many hashtags.", "avoid + -ing."),
          F("I'd like ___ (work) abroad one day.", "to work", "I'd like {to work} abroad one day.", "would like + to."),
          F("He keeps ___ (ask) for changes.", "asking", "He keeps {asking} for changes.", "keep + -ing = continuar fazendo.")
        ] },
      { id: "s6-r2", type: "fill", title: "Rodada 2", subtitle: "Preposições e casos especiais",
        items: [
          F("I'm good at ___ (find) trends.", "finding", "I'm good at {finding} trends.", "Depois de preposição (at) → -ing."),
          F("Thanks for ___ (help) me.", "helping", "Thanks for {helping} me.", "for + -ing."),
          F("Before ___ (post), check the caption.", "posting", "Before {posting}, check the caption.", "before + -ing."),
          F("I'm thinking about ___ (take) an English course.", "taking", "I'm thinking about {taking} an English course.", "about + -ing."),
          F("We plan ___ (launch) the campaign in January.", "to launch", "We plan {to launch} the campaign in January.", "plan + to."),
          F("I stopped ___ (use) that app. It was too slow.", "using", "I stopped {using} that app.", "Parei de usar → stop + -ing."),
          F("I hope ___ (reach) 20k followers this year.", "to reach", "I hope {to reach} 20k followers this year.", "hope + to."),
          F("Do you mind ___ (send) me the file again?", "sending", "Do you mind {sending} me the file again?", "mind + -ing (\"você se importa de…\").")
        ] },
      { id: "s6-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Eu adoro editar vídeos.", "I love editing videos.", "love aceita os dois: <i>I love to edit videos</i> também vale."),
          T("Preciso terminar o relatório hoje.", "I need to finish the report today.", "need + to."),
          T("Ela é boa em escrever legendas.", "She's good at writing captions.", "good at + -ing."),
          T("Paramos de postar aos domingos.", "We stopped posting on Sundays.", "stop + -ing = parar de."),
          T("Quero aprender a usar o After Effects.", "I want to learn how to use After Effects.", "want to + learn how to. <i>I want to learn to use…</i> também vale."),
          T("Obrigado por me ajudar com o roteiro.", "Thanks for helping me with the script.", "for + -ing.")
        ] },
      { id: "s6-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s6-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I enjoy creating content, but I hate waiting for approval.", "Gosto de criar conteúdo, mas odeio esperar aprovação."),
          R("We decided to post three times a week.", "Decidimos postar três vezes por semana."),
          R("She's really good at writing short captions.", "Ela é muito boa em escrever legendas curtas."),
          R("Before publishing, always check the spelling.", "Antes de publicar, sempre confira a ortografia."),
          R("I'm planning to learn motion design next year.", "Estou planejando aprender motion design no ano que vem."),
          R("Thanks for sending the feedback so quickly.", "Obrigado por mandar o retorno tão rápido.")
        ] },
      { id: "s6-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to launch", "lançar", "We'll launch the new series in January."),
          V("spelling", "ortografia", "Check the spelling before posting."),
          V("approval", "aprovação", "We're waiting for the client's approval."),
          V("to avoid", "evitar", "Avoid long captions on reels."),
          V("to keep doing", "continuar fazendo", "Keep practicing every day."),
          V("to look forward to", "estar ansioso por, aguardar", "I look forward to working with you.")
        ] }
    ]
  },
  {
    id: "s7", title: "Módulo 7",
    subtitle: "Falsos cognatos",
    sections: [
      { id: "s7-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Palavras que <b>parecem</b> português, mas significam outra coisa.",
        cards: [
          C("actually ≠ atualmente", ["actually = na verdade", "atualmente = currently, nowadays"], "Actually, the client liked it."),
          C("realize ≠ realizar", ["realize = perceber", "realizar = carry out, achieve"], "I didn't realize the file was empty."),
          C("pretend ≠ pretender", ["pretend = fingir", "pretender = intend, plan"], "We plan to launch it in March."),
          C("tendency ≠ tendência de mercado", ["tendência, moda, em alta = trend, trending"], "What's trending this week?"),
          C("assist e attend", ["assistir (TV, vídeo) = watch", "attend = participar de; atender (telefone) = answer"], "I watch tutorials on the bus."),
          C("Mais alguns", ["eventually = no fim, com o tempo (eventualmente = occasionally)", "parents = pais (parentes = relatives)", "college = faculdade, library = biblioteca"], "Eventually, we finished the project.")
        ] },
      { id: "s7-r1", type: "fill", title: "Rodada 1", subtitle: "Escreva a palavra certa em inglês",
        items: [
          F("___, I work at a marketing agency. (Atualmente)", ["currently", "nowadays", "now"], "{Currently}, I work at a marketing agency.", "Atualmente = currently. <i>Actually</i> é \"na verdade\"."),
          F("I didn't ___ the file was empty. (perceber)", ["realize", "realise", "notice"], "I didn't {realize} the file was empty.", "Perceber = realize."),
          F("Let's check what's ___ on TikTok. (em alta)", "trending", "Let's check what's {trending} on TikTok.", "Em alta = trending. <i>Tendency</i> é tendência de comportamento."),
          F("I ___ a lot of series in English. (assisto)", "watch", "I {watch} a lot of series in English.", "Assistir = watch. <i>Assist</i> é ajudar."),
          F("___, the client liked the first version. (Na verdade)", "actually", "{Actually}, the client liked the first version.", "Na verdade = actually."),
          F("We ___ to launch the campaign in March. (pretendemos)", ["intend", "plan"], "We {intend} to launch the campaign in March.", "Pretender = intend / plan. <i>Pretend</i> é fingir."),
          F("My ___ are coming for Christmas. (parentes)", "relatives", "My {relatives} are coming for Christmas.", "Parentes = relatives. <i>Parents</i> são os pais."),
          F("I ___ post on weekends, only on special dates. (eventualmente)", ["occasionally", "sometimes"], "I {occasionally} post on weekends.", "Eventualmente = occasionally. <i>Eventually</i> é \"no fim\".")
        ] },
      { id: "s7-r2", type: "fill", title: "Rodada 2", subtitle: "Mais armadilhas",
        items: [
          F("I can't ___ this noise anymore! (aguentar)", ["stand", "take"], "I can't {stand} this noise anymore!", "Aguentar = stand. <i>Support</i> é apoiar."),
          F("She studies design in ___. (faculdade)", ["college", "university"], "She studies design in {college}.", "Faculdade = college. Colégio = school."),
          F("I bought a book at the ___. (livraria)", ["bookstore", "bookshop"], "I bought a book at the {bookstore}.", "Livraria = bookstore. <i>Library</i> é biblioteca."),
          F("The team ___ me a lot during the project. (apoiou)", ["supported", "helped"], "The team {supported} me a lot during the project.", "Apoiar = support."),
          F("We finally ___ our goal of 10k followers. (alcançamos)", ["reached", "achieved", "hit"], "We finally {reached} our goal of 10k followers.", "Alcançar, realizar uma meta = reach / achieve. Não use <i>realize</i>."),
          F("Don't ___ you didn't see the message! (fingir)", "pretend", "Don't {pretend} you didn't see the message!", "Fingir = pretend."),
          F("It was a long project, but ___ we finished it. (no fim)", ["eventually", "finally"], "It was a long project, but {eventually} we finished it.", "No fim, depois de um tempo = eventually."),
          F("I'll ___ the meeting online. (participar de)", ["attend", "join"], "I'll {attend} the meeting online.", "Participar de = attend / join. Atender o telefone = answer.")
        ] },
      { id: "s7-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Atualmente eu trabalho com redes sociais.", "Currently, I work with social media.", "Atualmente = currently. <i>Nowadays</i> também vale."),
          T("Na verdade, o cliente gostou do vídeo.", "Actually, the client liked the video.", "Na verdade = actually."),
          T("Eu não percebi o erro na legenda.", "I didn't notice the mistake in the caption.", "Notar algo = notice. <i>Realize</i> é perceber uma situação: <i>I didn't realize there was a mistake</i>."),
          T("Essa é a nova tendência do Instagram.", "This is the new Instagram trend.", "Tendência = trend."),
          T("Eu pretendo estudar inglês todos os dias.", "I intend to study English every day.", "Pretender = intend. <i>I plan to</i> também vale."),
          T("Eu assisto vídeos de marketing em inglês.", "I watch marketing videos in English.", "Assistir = watch.")
        ] },
      { id: "s7-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s7-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("Actually, I prefer editing to filming.", "Na verdade, prefiro editar a filmar."),
          R("Currently, we post five times a week.", "Atualmente, postamos cinco vezes por semana."),
          R("I didn't realize how long editing takes.", "Eu não tinha noção de quanto tempo editar leva."),
          R("We plan to follow this trend next week.", "Pretendemos seguir essa tendência na semana que vem."),
          R("I watch tutorials on the bus when I'm tired.", "Assisto tutoriais no ônibus quando estou cansado."),
          R("Eventually, all this practice will pay off.", "Com o tempo, toda essa prática vai valer a pena.")
        ] },
      { id: "s7-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("actually", "na verdade", "Actually, I'm not sure."),
          V("currently", "atualmente", "We're currently testing a new format."),
          V("to realize", "perceber, se dar conta", "I realized I hadn't saved the file."),
          V("to attend", "participar de, frequentar", "I'll attend the workshop on Friday."),
          V("to pretend", "fingir", "He pretended he was busy."),
          V("to pay off", "valer a pena, dar resultado", "Studying every day will pay off.")
        ] }
    ]
  },
  {
    id: "s8", title: "Módulo 8",
    subtitle: "Phrasal verbs do trabalho + revisão geral",
    sections: [
      { id: "s8-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Phrasal verb é <b>verbo + partícula</b> com sentido novo. Decore como um bloco, igual a uma palavra.",
        cards: [
          C("Criar e organizar", ["come up with = bolar (uma ideia)", "set up = configurar, montar", "figure out = descobrir, entender"], "I finally figured out the problem."),
          C("Prazos e tarefas", ["put off = adiar", "go over = revisar", "follow up = dar retorno, acompanhar"], "Let's go over the script."),
          C("Faltar e recusar", ["run out of = ficar sem", "turn down = recusar; abaixar (volume)", "give up = desistir"], "We ran out of time."),
          C("No computador", ["back up = fazer backup", "fill out = preencher", "take down = tirar do ar"], "Back up the files before formatting.")
        ] },
      { id: "s8-r1", type: "fill", title: "Rodada 1", subtitle: "Escreva o phrasal verb",
        items: [
          F("I need to ___ a new idea for the reel. (bolar)", "come up with", "I need to {come up with} a new idea for the reel.", "Bolar uma ideia = come up with."),
          F("Can you help me ___ the new camera? (configurar)", "set up", "Can you help me {set up} the new camera?", "Configurar, montar = set up."),
          F("I can't ___ why the export failed. (entender)", "figure out", "I can't {figure out} why the export failed.", "Descobrir, entender = figure out."),
          F("Let's ___ the script before the meeting. (revisar)", "go over", "Let's {go over} the script before the meeting.", "Revisar = go over."),
          F("The client ___ the meeting until next week. (adiou)", ["put off", "postponed"], "The client {put off} the meeting until next week.", "Adiar = put off (o passado também é put)."),
          F("We ___ storage on the hard drive. (ficamos sem)", "ran out of", "We {ran out of} storage on the hard drive.", "Ficar sem = run out of. Passado: ran."),
          F("I'll ___ with the client tomorrow. (dar retorno)", "follow up", "I'll {follow up} with the client tomorrow.", "Dar retorno, acompanhar = follow up."),
          F("She ___ the offer because the pay was low. (recusou)", "turned down", "She {turned down} the offer.", "Recusar = turn down.")
        ] },
      { id: "s8-r2", type: "fill", title: "Rodada 2", subtitle: "Mais phrasal verbs",
        items: [
          F("Please ___ the files before formatting the computer. (fazer backup)", "back up", "Please {back up} the files before formatting the computer.", "Fazer backup = back up."),
          F("Can you ___ the music? It's too loud. (abaixar)", "turn down", "Can you {turn down} the music?", "Abaixar o volume = turn down."),
          F("I'll ___ the form and send it today. (preencher)", ["fill out", "fill in"], "I'll {fill out} the form and send it today.", "Preencher = fill out / fill in."),
          F("We need to ___ the old post. It has a mistake. (tirar do ar)", "take down", "We need to {take down} the old post.", "Tirar do ar = take down."),
          F("I ___ my boss at the supermarket yesterday. (encontrei por acaso)", "ran into", "I {ran into} my boss at the supermarket yesterday.", "Encontrar por acaso = run into."),
          F("Don't ___! You're almost B2. (desistir)", "give up", "Don't {give up}! You're almost B2.", "Desistir = give up."),
          F("I'm ___ the new series. It starts on Monday. (aguardando ansioso)", "looking forward to", "I'm {looking forward to} the new series.", "Aguardar ansioso = look forward to."),
          F("Can you ___ my plants while I'm away? (cuidar de)", ["look after", "take care of"], "Can you {look after} my plants while I'm away?", "Cuidar de = look after / take care of.")
        ] },
      { id: "s8-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Preciso bolar uma ideia nova.", "I need to come up with a new idea.", "Bolar = come up with."),
          T("O cliente adiou a reunião.", "The client put off the meeting.", "Adiar = put off. <i>Postponed</i> também vale."),
          T("Ficamos sem tempo.", "We ran out of time.", "Ficar sem = run out of."),
          T("Vamos revisar o roteiro amanhã.", "Let's go over the script tomorrow.", "Revisar = go over."),
          T("Não desista!", "Don't give up!", "Desistir = give up."),
          T("Vou dar retorno para o cliente na segunda.", "I'll follow up with the client on Monday.", "Dar retorno = follow up; dia → on.")
        ] },
      { id: "s8-mix1", type: "mix", title: "Revisão dos módulos, parte 1", subtitle: "Tudo o que você viu até aqui", count: 8 },
      { id: "s8-mix2", type: "mix", title: "Revisão dos módulos, parte 2", subtitle: "Mais uma rodada misturada", count: 8 },
      { id: "s8-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("We ran out of ideas, so we went over our best posts from last year.", "Ficamos sem ideias, então revisamos nossos melhores posts do ano passado."),
          R("Can you help me set up the lights for the shoot?", "Pode me ajudar a montar as luzes para a gravação?"),
          R("I finally figured out how to export in 4K.", "Finalmente descobri como exportar em 4K."),
          R("The client put off the launch until February.", "O cliente adiou o lançamento para fevereiro."),
          R("Don't forget to back up the raw files.", "Não esqueça de fazer backup dos arquivos brutos."),
          R("I'll follow up with them after lunch.", "Vou dar retorno para eles depois do almoço.")
        ] },
      { id: "s8-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("shoot", "gravação, sessão de fotos", "The shoot starts at 10 a.m."),
          V("raw files", "arquivos brutos", "Keep the raw files for a month."),
          V("to export", "exportar", "Export the video in 1080p."),
          V("storage", "armazenamento", "We need more storage."),
          V("hard drive", "HD", "The hard drive is almost full."),
          V("lighting", "iluminação", "The lighting looks great in this scene.")
        ] }
    ]
  }
);

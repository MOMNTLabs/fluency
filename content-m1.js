// Mês 1: tempos verbais com segurança (módulos 2 a 4)
window.WEEKS.push(
  {
    id: "s2", title: "Módulo 2",
    subtitle: "already, yet, just, ever, never, for e since",
    sections: [
      { id: "s2-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Essas palavras andam junto com <b>have/has + particípio</b>. Cada uma muda um pouco o sentido.",
        cards: [
          C("already = já", ["Em frases afirmativas, antes do particípio."], "I've already sent the photos."),
          C("yet = ainda (negativa) ou já (pergunta)", ["Vai no fim da frase."], "I haven't finished the video yet."),
          C("just = acabei de", ["Algo que aconteceu agora há pouco."], "I've just sent the file."),
          C("ever / never = alguma vez / nunca", ["Para falar de experiências, sem data."], "Have you ever used After Effects?"),
          C("for × since", ["<b>for</b> + duração: for two weeks, for a long time", "<b>since</b> + ponto de partida: since October, since 2024"], "I've worked here since October."),
          C("\"Faz 3 anos que…\"", ["Em inglês vira have + particípio + for."], "I've lived here for three years.")
        ] },
      { id: "s2-r1", type: "fill", title: "Rodada 1", subtitle: "already, yet ou just?",
        items: [
          F("I haven't read the message ___.", "yet", "I haven't read the message {yet}.", "Negativa, no fim da frase → yet."),
          F("Have you sent the invoice ___?", "yet", "Have you sent the invoice {yet}?", "Pergunta com \"já\" no fim → yet."),
          F("I've ___ finished the report. It's ready to post.", ["already", "just"], "I've {already} finished the report.", "\"Já terminei\" → already. <i>Just</i> também funciona se foi agora há pouco."),
          F("The client has ___ called, literally one minute ago.", "just", "The client has {just} called.", "\"Acabou de ligar\" → just."),
          F("Don't worry, I've ___ fixed the mistake.", ["already", "just"], "Don't worry, I've {already} fixed the mistake.", "\"Já corrigi\" → already."),
          F("We haven't decided the colors ___.", "yet", "We haven't decided the colors {yet}.", "\"Ainda não decidimos\" → yet no fim."),
          F("She has ___ left the office. You can still catch her at the bus stop.", "just", "She has {just} left the office.", "\"Acabou de sair\" → just."),
          F("Have you ___ worked with this client before?", "ever", "Have you {ever} worked with this client before?", "Experiência, \"alguma vez\" → ever.")
        ] },
      { id: "s2-r2", type: "fill", title: "Rodada 2", subtitle: "for, since, ever e never",
        items: [
          F("I've worked at the agency ___ October.", "since", "I've worked at the agency {since} October.", "Outubro é o ponto de partida → since."),
          F("I've studied English on the bus ___ two weeks.", "for", "I've studied English on the bus {for} two weeks.", "Duas semanas é duração → for."),
          F("We've used this template ___ a long time.", "for", "We've used this template {for} a long time.", "Duração → for."),
          F("She has been my boss ___ 2024.", "since", "She has been my boss {since} 2024.", "Ponto de partida → since."),
          F("I've ___ seen such a good result!", "never", "I've {never} seen such a good result!", "\"Nunca vi\" → never (o verbo fica na afirmativa)."),
          F("Have you ___ been to São Paulo?", "ever", "Have you {ever} been to São Paulo?", "Pergunta sobre experiência → ever."),
          F("I ___ (know) him for five years.", ["have known", "'ve known"], "I {have known} him for five years.", "Começou no passado e continua → have known."),
          F("How long ___ you ___ (live) in this city?", "have lived", "How long {have} you {lived} in this city?", "\"Há quanto tempo você mora\" → How long have you lived.")
        ] },
      { id: "s2-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Ainda não terminei o vídeo.", "I haven't finished the video yet.", "\"Ainda não\" → haven't … yet."),
          T("Você já enviou o relatório?", "Have you sent the report yet?", "Em pergunta, \"já\" costuma ser yet no fim. <i>Have you already posted…?</i> também vale."),
          T("Acabei de mandar o arquivo para o cliente.", "I've just sent the file to the client.", "\"Acabei de\" → have just + particípio."),
          T("Trabalho aqui desde outubro.", "I've worked here since October.", "Continua até agora → have worked + since."),
          T("Faz duas semanas que eu estudo inglês no ônibus.", "I've studied English on the bus for two weeks.", "\"Faz … que\" → have + particípio + for. <i>I've been studying</i> também vale."),
          T("Nunca usei o After Effects.", "I've never used After Effects.", "Experiência → have never + particípio.")
        ] },
      { id: "s2-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s2-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("I've just finished the first draft of the carousel.", "Acabei de terminar o primeiro rascunho do carrossel."),
          R("Has the client approved the video yet?", "O cliente já aprovou o vídeo?"),
          R("Not yet, but he's already seen it.", "Ainda não, mas ele já viu."),
          R("I've worked with social media for three years.", "Trabalho com redes sociais há três anos."),
          R("Have you ever tried posting at night?", "Você já tentou postar à noite?"),
          R("We've never had so many comments on a post.", "Nunca tivemos tantos comentários num post.")
        ] },
      { id: "s2-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("draft", "rascunho", "I sent the first draft to my boss."),
          V("deadline", "prazo", "The deadline is on Friday."),
          V("feedback", "retorno, comentários", "The client gave us good feedback."),
          V("to schedule", "agendar", "I scheduled the post for 6 p.m."),
          V("insights", "métricas", "Let's check the insights before the meeting."),
          V("to get in touch", "entrar em contato", "I'll get in touch with them tomorrow.")
        ] }
    ]
  },
  {
    id: "s3", title: "Módulo 3",
    subtitle: "Os três tipos de if",
    sections: [
      { id: "s3-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Pergunte: <b>isso pode acontecer, é imaginação ou já passou?</b>",
        cards: [
          C("Pode acontecer → if + presente, will", ["Se chover, vou pegar um Uber.", "Depois do <i>if</i>, nada de will."], "If it rains, I'll take an Uber."),
          C("Imaginação → if + passado, would", ["Se eu tivesse um carro, iria de carro."], "If I had a car, I would drive to work."),
          C("Já passou, não aconteceu → if + had + particípio, would have + particípio", ["Se eu tivesse salvado, não teria perdido."], "If I had saved the project, I wouldn't have lost it."),
          C("Pistas do português", ["\"vou / vai\" → will", "\"-ria\" → would", "\"teria feito\" → would have done", "\"se tivesse feito\" → if I had done"], "If you had told me, I would have helped you.")
        ] },
      { id: "s3-r1", type: "fill", title: "Rodada 1", subtitle: "Pode acontecer ou imaginação?",
        items: [
          F("If it rains tomorrow, I ___ (take) an Uber.", ["will take", "'ll take"], "If it rains tomorrow, I {will take} an Uber.", "Pode acontecer → will."),
          F("If I ___ (finish) early, I'll go to the gym.", "finish", "If I {finish} early, I'll go to the gym.", "Depois do <i>if</i> real, presente simples. Nada de will."),
          F("If the client approves the video today, we ___ (post) it tonight.", ["will post", "'ll post"], "If the client approves the video today, we {will post} it tonight.", "Situação real → will."),
          F("If I ___ (live) closer to work, I would walk.", "lived", "If I {lived} closer to work, I would walk.", "Imaginação → if + passado."),
          F("If you send me the file, I ___ (edit) it this afternoon.", ["will edit", "'ll edit"], "If you send me the file, I {will edit} it this afternoon.", "Pode acontecer → will."),
          F("If I ___ (be) rich, I would travel the world.", ["were", "was"], "If I {were} rich, I would travel the world.", "Imaginação com <i>be</i> → were."),
          F("We ___ (get) more replies if we posted every day.", ["would get", "'d get"], "We {would get} more replies if we posted every day.", "\"Conseguiríamos\" → would."),
          F("If the bus ___ (be) late again, I'll miss the meeting.", "is", "If the bus {is} late again, I'll miss the meeting.", "Pode acontecer → if + presente.")
        ] },
      { id: "s3-r2", type: "fill", title: "Rodada 2", subtitle: "would have: o passado que não aconteceu",
        items: [
          F("If I had saved the project, I ___ (not/lose) it.", ["wouldn't have lost", "would not have lost"], "If I had saved the project, I {wouldn't have lost} it.", "\"Não teria perdido\" → wouldn't have lost."),
          F("If I ___ (know) about the meeting, I would have come.", ["had known", "'d known"], "If I {had known} about the meeting, I would have come.", "\"Se eu soubesse (na época)\" → had known."),
          F("If we had posted earlier, we ___ (get) more comments.", ["would have gotten", "would have got", "'d have gotten"], "If we had posted earlier, we {would have gotten} more comments.", "\"Teríamos conseguido\" → would have gotten."),
          F("If she ___ (study) more, she would have passed the test.", ["had studied", "'d studied"], "If she {had studied} more, she would have passed the test.", "\"Se ela tivesse estudado\" → had studied."),
          F("I ___ (call) you if I had had your number.", ["would have called", "'d have called"], "I {would have called} you if I had had your number.", "\"Eu teria ligado\" → would have called."),
          F("If the client ___ (not/change) the plan, we would have finished on time.", ["hadn't changed", "had not changed"], "If the client {hadn't changed} the plan, we would have finished on time.", "\"Se não tivesse mudado\" → hadn't changed."),
          F("If I had left home earlier, I ___ (not/miss) the bus.", ["wouldn't have missed", "would not have missed"], "If I had left home earlier, I {wouldn't have missed} the bus.", "\"Não teria perdido\" → wouldn't have missed."),
          F("If you ___ (tell) me, I would have helped you.", ["had told", "'d told"], "If you {had told} me, I would have helped you.", "\"Se você tivesse me contado\" → had told.")
        ] },
      { id: "s3-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Se o cliente aprovar hoje, vamos postar amanhã.", "If the client approves today, we'll post tomorrow.", "Pode acontecer → if + presente, will."),
          T("Se eu tivesse um carro, eu iria de carro para o trabalho.", "If I had a car, I would drive to work.", "Imaginação → if + passado, would."),
          T("Se eu tivesse salvado o projeto, não teria perdido tudo.", "If I had saved the project, I wouldn't have lost everything.", "Passado que não aconteceu → had saved, wouldn't have lost."),
          T("Se chover, vou pegar um Uber.", "If it rains, I'll take an Uber.", "Pode acontecer → will."),
          T("Se eu soubesse, teria te ajudado.", "If I had known, I would have helped you.", "\"Teria ajudado\" → would have helped."),
          T("O que você faria se fosse o chefe?", "What would you do if you were the boss?", "Imaginação → would + were.")
        ] },
      { id: "s3-mix", type: "mix", title: "Revisão misturada", subtitle: "Questões dos módulos anteriores", count: 8 },
      { id: "s3-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("If the post goes viral, we'll need more people to answer the comments.", "Se o post viralizar, vamos precisar de mais gente para responder os comentários."),
          R("If I had more followers, brands would pay me to post.", "Se eu tivesse mais seguidores, marcas me pagariam para postar."),
          R("If I had known about the trend earlier, I would have made a video.", "Se eu soubesse da tendência antes, teria feito um vídeo."),
          R("If you don't save your work, you'll lose it.", "Se você não salvar seu trabalho, vai perdê-lo."),
          R("We would have finished on time if the client hadn't changed the script.", "Teríamos terminado no prazo se o cliente não tivesse mudado o roteiro."),
          R("What would you change if you could redesign our profile?", "O que você mudaria se pudesse redesenhar nosso perfil?")
        ] },
      { id: "s3-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("instructions", "instruções", "The instructions were very clear."),
          V("script", "roteiro", "I wrote the script for the video."),
          V("to approve", "aprovar", "My boss approved the new layout."),
          V("to miss", "perder (ônibus, prazo); sentir falta", "I missed the bus again."),
          V("to save", "salvar; economizar", "Save the file before closing the program."),
          V("unless", "a menos que", "We won't post unless the client approves.")
        ] }
    ]
  },
  {
    id: "s4", title: "Módulo 4",
    subtitle: "Contando o que alguém disse",
    sections: [
      { id: "s4-resumo", type: "summary", title: "Resumo de bolso", subtitle: "Leia antes dos exercícios",
        intro: "Quando você conta o que alguém disse no passado, <b>o verbo recua um tempo</b>.",
        cards: [
          C("said × told", ["<b>say</b> algo: He said it was late.", "<b>tell</b> alguém: He told <b>me</b> it was late."], "She told me she was tired."),
          C("O verbo recua", ["is → was, will → would, can → could", "have done / did → had done"], "\"I will call you\" → He said he would call me."),
          C("Perguntas contadas", ["Sem do/did e na ordem normal da frase.", "Sim ou não → if"], "She asked me where I lived."),
          C("Pedidos e ordens", ["asked/told + pessoa + to + verbo", "Negativo: not to"], "My boss told me not to post it yet.")
        ] },
      { id: "s4-r1", type: "fill", title: "Rodada 1", subtitle: "said, told e o verbo que recua",
        items: [
          F("He ___ me that the video was great.", "told", "He {told} me that the video was great.", "Tem pessoa logo depois (me) → told."),
          F("She ___ that she was tired.", "said", "She {said} that she was tired.", "Sem pessoa depois → said."),
          F("\"I like the colors.\" → The client said he ___ the colors.", "liked", "The client said he {liked} the colors.", "like → liked (recua um tempo)."),
          F("\"I will call you.\" → My boss said he ___ call me.", "would", "My boss said he {would} call me.", "will → would."),
          F("\"I can finish it today.\" → She said she ___ finish it that day.", "could", "She said she {could} finish it that day.", "can → could."),
          F("\"I have sent the file.\" → He said he ___ (send) the file.", ["had sent", "'d sent"], "He said he {had sent} the file.", "have sent → had sent."),
          F("\"Where do you live?\" → She asked me where I ___.", "lived", "She asked me where I {lived}.", "Pergunta contada: sem <i>do</i>, e o verbo recua."),
          F("\"Please send me the file.\" → He asked me ___ send him the file.", "to", "He asked me {to} send him the file.", "Pedido → asked + pessoa + to.")
        ] },
      { id: "s4-r2", type: "fill", title: "Rodada 2", subtitle: "Perguntas e pedidos",
        items: [
          F("\"Are you busy?\" → She asked me if I ___ busy.", "was", "She asked me if I {was} busy.", "are → was."),
          F("\"Did you see the post?\" → He asked me if I ___ (see) the post.", ["had seen", "'d seen"], "He asked me if I {had seen} the post.", "did see → had seen."),
          F("\"Don't post it yet.\" → My boss told me ___ to post it yet.", "not", "My boss told me {not} to post it yet.", "Ordem negativa → not to."),
          F("\"What time is the meeting?\" → I asked what time the meeting ___.", "was", "I asked what time the meeting {was}.", "Pergunta contada: ordem normal, is → was."),
          F("\"I'm working on the report.\" → She said she ___ on the report.", "was working", "She said she {was working} on the report.", "am working → was working."),
          F("\"We will change the colors.\" → They said they ___ change the colors.", "would", "They said they {would} change the colors.", "will → would."),
          F("\"Can you help me?\" → He asked me if I ___ help him.", "could", "He asked me if I {could} help him.", "can → could."),
          F("\"Call me tomorrow.\" → She told me ___ call her the next day.", "to", "She told me {to} call her the next day.", "Ordem → told + pessoa + to.")
        ] },
      { id: "s4-r3", type: "translate", title: "Rodada 3", subtitle: "Traduza para o inglês",
        items: [
          T("Ele me disse que tinha gostado da proposta.", "He told me he had liked the proposal.", "Com pessoa → told me; \"tinha gostado\" → had liked."),
          T("Ela perguntou onde eu trabalhava.", "She asked me where I worked.", "Pergunta contada, sem did."),
          T("O cliente disse que ia ligar amanhã.", "The client said he would call tomorrow.", "\"Ia ligar\" → would call."),
          T("Meu chefe me pediu para mandar o arquivo.", "My boss asked me to send the file.", "Pedido → asked me to."),
          T("Ela disse que não podia vir.", "She said she couldn't come.", "can't → couldn't."),
          T("Ele me perguntou se eu já tinha terminado.", "He asked me if I had already finished.", "Sim ou não → if; \"tinha terminado\" → had finished.")
        ] },
      { id: "s4-mix1", type: "mix", title: "Revisão dos módulos, parte 1", subtitle: "Tudo o que você viu até aqui", count: 8 },
      { id: "s4-mix2", type: "mix", title: "Revisão dos módulos, parte 2", subtitle: "Mais uma rodada misturada", count: 8 },
      { id: "s4-leitura", type: "reading", title: "Para ler no caminho", subtitle: "Tente entender antes de ver a tradução",
        items: [
          R("My boss told me the new campaign was the best one this month.", "Meu chefe me disse que a nova campanha era a melhor do mês."),
          R("The client asked if we could deliver the video by Friday.", "O cliente perguntou se podíamos entregar o vídeo até sexta."),
          R("She said she had never seen so much engagement.", "Ela disse que nunca tinha visto tanto engajamento."),
          R("I told him not to worry about the deadline.", "Eu disse para ele não se preocupar com o prazo."),
          R("They asked me where I had learned to edit like that.", "Eles me perguntaram onde eu tinha aprendido a editar assim."),
          R("He said he would send the feedback in the afternoon.", "Ele disse que mandaria o retorno à tarde.")
        ] },
      { id: "s4-vocab", type: "vocab", title: "Vocabulário", subtitle: "Toque no cartão para ver o significado",
        items: [
          V("to deliver", "entregar", "We delivered the video on time."),
          V("to point out", "apontar, observar", "She pointed out a typo in the title."),
          V("typo", "erro de digitação", "There's a typo in the second slide."),
          V("to agree", "concordar", "I agree with you."),
          V("to complain", "reclamar", "The client complained about the music."),
          V("to suggest", "sugerir", "He suggested a different font.")
        ] }
    ]
  }
);

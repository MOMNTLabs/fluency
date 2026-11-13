// Apostila: definição precisa de cada regra, com o detalhe atrás do "Ver mais".
// def = a definição que fica no cartão. form = o padrão. marcar = palavras realçadas
// no exemplo. more = explicação longa ("## " vira subtítulo). ex = [inglês, português].
window.REGRAS = {

  s1: [
    {
      def: "Uma ação que começou e terminou dentro de um momento do passado que você consegue apontar. Esse momento pode estar escrito na frase ou ficar claro pelo contexto.",
      form: "verbo no passado · went, finished, approved",
      marcar: ["finished"],
      more: [
        "## O que decide esse tempo",
        "O passado simples precisa de um ponto fechado no tempo. Se a ação acabou e o momento dela já passou, é ele — mesmo que a frase não diga a data.",
        "## Como se forma",
        "Verbos regulares ganham <b>-ed</b>: <i>work → worked</i>, <i>finish → finished</i>. Os irregulares mudam por conta própria e precisam ser decorados um a um: <i>go → went</i>, <i>see → saw</i>, <i>take → took</i>.",
        "Na negativa e na pergunta, quem carrega o passado é o <b>did</b>, e o verbo volta à forma pura: <i>I <b>didn't</b> finish</i>, <i><b>Did</b> you finish?</i> — nunca <i>didn't finished</i>.",
        "## O erro comum",
        "Usar o passado simples quando o momento não importa, só o resultado. <i>I finished the report</i> conta quando; <i>I've finished the report</i> conta que está pronto."
      ],
      ex: [
        ["We signed the contract last Tuesday.", "Assinamos o contrato na terça passada."],
        ["She didn't come to work on Friday.", "Ela não veio trabalhar na sexta."],
        ["Did you see the email from the client?", "Você viu o e-mail do cliente?"]
      ]
    },
    {
      def: "Liga o passado ao presente: a ação aconteceu antes, mas o que interessa é o efeito dela agora. Por isso não combina com um momento fechado — você não diz quando.",
      form: "have / has + particípio · worked, seen, been",
      marcar: ["worked", "'ve"],
      more: [
        "## O que decide esse tempo",
        "Três situações pedem ele: algo que começou no passado e <b>continua</b> (<i>I've worked here since October</i>), uma experiência de vida <b>sem data</b> (<i>I've been to Japan</i>) e uma ação recente com <b>efeito agora</b> (<i>I've lost my keys</i> — ainda estou sem elas).",
        "## Como se forma",
        "<b>have</b> para I, you, we, they e <b>has</b> para he, she, it, mais o particípio. Regulares repetem o <b>-ed</b>: <i>worked</i>. Irregulares têm a terceira forma: <i>see → saw → <b>seen</b></i>, <i>go → went → <b>gone</b></i>.",
        "## A fronteira com o passado simples",
        "Assim que a frase marca o momento, o tempo troca. <i>I've seen that film</i> (em algum momento da vida) vira <i>I saw that film <b>last night</b></i>. Em inglês, <i>I've seen it yesterday</i> é erro.",
        "## O erro comum",
        "Traduzir ao pé da letra. Em português dizemos \"trabalho aqui desde outubro\", no presente; em inglês isso é <i>I <b>have worked</b> here since October</i>, nunca <i>I work here since October</i>."
      ],
      ex: [
        ["I've already sent the file to the client.", "Já mandei o arquivo para o cliente."],
        ["Have you ever worked with this client before?", "Você já trabalhou com este cliente antes?"],
        ["She has been my boss since 2024.", "Ela é minha chefe desde 2024."]
      ]
    },
    {
      def: "Marca o passado mais antigo de dois. Quando a frase já está no passado e você precisa dizer que algo aconteceu antes daquilo, esse é o tempo que recua mais um passo.",
      form: "had + particípio · had left, had finished",
      marcar: ["had", "left"],
      more: [
        "## O que decide esse tempo",
        "Ele só existe em relação a outro passado. Sozinho não faz sentido: <i>The bus had already left</i> pede a pergunta \"já tinha saído quando?\". A resposta é o outro fato da frase — <i>when I arrived</i>.",
        "## Como se forma",
        "<b>had</b> para todas as pessoas, mais o particípio. É o mesmo particípio do <i>have</i>: <i>had gone, had seen, had finished</i>. Na fala vira <i>'d</i>: <i>I'd finished</i>.",
        "## Onde aparece mais",
        "Depois de <i>by the time</i>, <i>when … already</i> e sempre que você conta o que alguém disse: <i>She said she <b>had</b> finished</i>.",
        "## O erro comum",
        "Usar <b>had</b> onde bastava o passado simples. Se os dois fatos acontecem na ordem em que você conta, não precisa recuar: <i>I woke up and had breakfast</i>, não <i>I had woken up and had had breakfast</i>."
      ],
      ex: [
        ["By the time he called, I had left the building.", "Quando ele ligou, eu já tinha saído do prédio."],
        ["The train was late because it had broken down.", "O trem atrasou porque tinha quebrado."],
        ["When we arrived, the meeting had already started.", "Quando chegamos, a reunião já tinha começado."]
      ]
    },
    {
      def: "O \"-ria\" do português não existe como terminação em inglês. Quem faz esse papel é a palavra <b>would</b>, colocada antes do verbo puro.",
      form: "would + verbo puro · would love, would do, would go",
      marcar: ["'d", "love"],
      more: [
        "## Como se forma",
        "<b>would</b> não muda com a pessoa e o verbo depois dele fica na forma pura, sem <i>to</i> e sem <i>-s</i>: <i>he would <b>go</b></i>, nunca <i>he would goes</i>.",
        "Na negativa vira <b>wouldn't</b>; na pergunta, <b>would</b> vem primeiro: <i>Would you help me?</i>. Na fala vira <i>'d</i>, que é fácil de confundir com <i>had</i> — o verbo depois resolve: <i>I'd <b>go</b></i> é would, <i>I'd <b>gone</b></i> é had.",
        "## Para que serve",
        "Dizer o que você faria (<i>I would take the job</i>), pedir com educação (<i>Would you send me the file?</i>) e falar de vontade (<i>I'd love to work abroad</i>).",
        "## O erro comum",
        "Procurar uma terminação. Não existe <i>loveria</i> nem <i>workria</i>: é sempre <i>would love</i>, <i>would work</i>."
      ],
      ex: [
        ["I would take the job if the pay were better.", "Eu aceitaria o emprego se o salário fosse melhor."],
        ["Would you send me the file again?", "Você poderia me mandar o arquivo de novo?"],
        ["They would understand better with examples.", "Eles entenderiam melhor com exemplos."]
      ]
    },
    {
      def: "Fala de algo que não é verdade agora: você imagina outra situação e diz o que aconteceria nela. Por ser imaginação, o verbo do \"se\" vai para o passado mesmo falando do presente.",
      form: "If + passado, would + verbo puro",
      marcar: ["had", "would"],
      more: [
        "## Por que o passado",
        "O passado aqui não é tempo, é distância da realidade. <i>If I had more time</i> não fala de ontem: fala do tempo que eu <b>não</b> tenho hoje. O inglês usa o passado para marcar essa distância.",
        "## A regra das duas metades",
        "Uma metade leva <b>if + passado</b> e a outra leva <b>would + verbo puro</b>. O <i>would</i> nunca entra junto do <i>if</i>: <i>If I <b>had</b> time, I <b>would</b> study</i>, nunca <i>If I would have time</i>.",
        "A ordem das metades é livre, só muda a vírgula: <i>I would study every day if I had more time.</i>",
        "## O caso do verbo be",
        "Na imaginação, a forma culta é <b>were</b> para todas as pessoas: <i>If I <b>were</b> you</i>, <i>If she <b>were</b> here</i>. <i>Was</i> aparece bastante na fala e não é erro grave, mas <i>were</i> é o padrão em prova e em texto escrito.",
        "## A fronteira com o \"se\" real",
        "Quando a coisa pode mesmo acontecer, muda tudo: <b>if + presente, will + verbo</b>. <i>If it rains tomorrow, I'll take a taxi</i> é possível; <i>If it rained tomorrow, I'd take a taxi</i> é imaginação."
      ],
      ex: [
        ["If I were you, I would leave earlier.", "Se eu fosse você, sairia mais cedo."],
        ["We would save money if we cooked at home.", "Economizaríamos se cozinhássemos em casa."],
        ["If the office were closer, I would walk every day.", "Se o escritório fosse mais perto, eu iria a pé todo dia."]
      ]
    },
    {
      def: "Quando você repete o que alguém falou sem usar as palavras exatas, o verbo recua um tempo. É como se a fala tivesse ficado mais longe no passado.",
      form: "said / told + verbo um tempo atrás",
      marcar: ["said", "had"],
      more: [
        "## O recuo, tempo por tempo",
        "presente → passado: <i>\"I work here\"</i> → <i>She said she <b>worked</b> here</i>.",
        "passado e have → had: <i>\"I've finished\"</i> → <i>She said she <b>had</b> finished</i>.",
        "will → would, can → could, must → had to.",
        "## said ou told",
        "<b>told</b> pede a pessoa logo depois: <i>She <b>told me</b> that…</i>. <b>said</b> não leva pessoa: <i>She <b>said</b> that…</i>. Se quiser a pessoa com <i>said</i>, entra um <i>to</i>: <i>She said <b>to me</b></i>.",
        "## Perguntas contadas",
        "A pergunta perde a inversão e o <i>do</i>: <i>\"Where do you work?\"</i> vira <i>He asked me where I <b>worked</b></i>, não <i>where did I work</i>. Sem resposta sim ou não, entra <b>if</b>: <i>She asked <b>if</b> I was busy</i>.",
        "## O que mais muda",
        "Palavras de tempo e lugar acompanham: <i>today → that day</i>, <i>tomorrow → the next day</i>, <i>here → there</i>, <i>this → that</i>."
      ],
      ex: [
        ["He said he needed more time.", "Ele disse que precisava de mais tempo."],
        ["My boss told me he would call me.", "Meu chefe me disse que me ligaria."],
        ["She asked me if I had booked the hotel.", "Ela me perguntou se eu tinha reservado o hotel."]
      ]
    }
  ]

};

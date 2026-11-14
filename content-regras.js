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
  ],

  a1m1: [
    {
      def: "<b>To be</b> é o verbo de identidade e de estado: diz o que alguém <b>é</b>, como <b>está</b> e onde <b>está</b>. É o único verbo do presente que muda de forma conforme a pessoa — am, is, are.",
      form: "pessoa + am / is / are · I'm, you're, he's, we're, they're",
      marcar: ["I'm"],
      more: [
        "## As três formas",
        "<b>I → am</b>. <b>He, she, it → is</b>. <b>You, we, they → are</b>. Não existe uma quarta forma: todo sujeito cabe em uma dessas três.",
        "## A forma curta é a normal",
        "Na fala e em qualquer mensagem do dia a dia se usa a contração: <i>I'm</i>, <i>you're</i>, <i>he's</i>, <i>she's</i>, <i>it's</i>, <i>we're</i>, <i>they're</i>. A forma longa aparece quando se quer dar ênfase (<i>I <b>am</b> sure</i>) ou em texto muito formal.",
        "## O erro comum",
        "Esquecer o verbo. Em português \"sou designer\" tem só uma palavra de verbo; em inglês o <i>am</i> é obrigatório — <i>I designer</i> não existe."
      ],
      ex: [
        ["She's the new project manager.", "Ela é a nova gerente de projetos."],
        ["We're at the airport.", "Estamos no aeroporto."],
        ["They're ready for the meeting.", "Eles estão prontos para a reunião."]
      ]
    },
    {
      def: "A negativa de <b>to be</b> não precisa de ajuda de ninguém: basta pôr <b>not</b> depois do verbo. Nenhum <i>don't</i> entra aqui.",
      form: "am / is / are + not · I'm not, isn't, aren't",
      marcar: ["isn't"],
      more: [
        "## Duas contrações possíveis",
        "Com <i>is</i> e <i>are</i> você pode encurtar de dois jeitos: <i>he's not</i> ou <i>he isn't</i>, <i>they're not</i> ou <i>they aren't</i>. As duas estão certas e são igualmente comuns.",
        "Com <i>am</i> só existe um caminho: <i>I'm not</i>. <i>I amn't</i> não existe em inglês.",
        "## O erro comum",
        "Misturar com o <i>don't</i>, que é do presente simples dos outros verbos. <i>I don't be tired</i> não existe; o certo é <i>I'm not tired</i>."
      ],
      ex: [
        ["I'm not available this afternoon.", "Não estou disponível esta tarde."],
        ["The files aren't on the server yet.", "Os arquivos ainda não estão no servidor."],
        ["It isn't far from the hotel.", "Não é longe do hotel."]
      ]
    },
    {
      def: "Para perguntar com <b>to be</b>, o verbo passa na frente do sujeito. Essa inversão é a pergunta — não entra nenhuma palavra extra.",
      form: "am / is / are + pessoa + ...? · Are you...?, Is she...?",
      marcar: ["Are"],
      more: [
        "## A inversão",
        "<i>You are ready</i> → <i><b>Are</b> you ready?</i> O que era segunda palavra vira a primeira. Vale para todas as formas: <i>Am I late?</i>, <i>Is he in the office?</i>, <i>Are they Brazilian?</i>",
        "## Com palavra de pergunta",
        "Quando a pergunta começa com <i>where</i>, <i>what</i>, <i>who</i>, <i>how</i>, a inversão continua, só entra a palavra antes: <i>Where <b>is</b> the meeting?</i>, <i>How <b>are</b> you?</i>",
        "## A resposta curta",
        "Responde-se repetindo o verbo, não o <i>yes</i> sozinho: <i>Yes, I am</i> / <i>No, I'm not</i>; <i>Yes, she is</i> / <i>No, she isn't</i>."
      ],
      ex: [
        ["Is the room available at three?", "A sala está disponível às três?"],
        ["Are you from São Paulo?", "Você é de São Paulo?"],
        ["Where is the boarding gate?", "Onde é o portão de embarque?"]
      ]
    },
    {
      def: "Idade, em inglês, é uma característica de quem a pessoa <b>é</b>, não algo que ela <b>tem</b>. Por isso usa <b>to be</b> e não <i>have</i>.",
      form: "pessoa + am / is / are + número (+ years old) · I'm 28, she's 40",
      marcar: ["I'm"],
      more: [
        "## O molde",
        "<i>I'm 28</i> ou <i>I'm 28 <b>years old</b></i> — as duas servem; a segunda é um pouco mais formal. O número vem direto depois do verbo, sem preposição.",
        "## Para perguntar",
        "<i>How old are you?</i> (literalmente \"quão velho você é\"). Também <i>How old is your daughter?</i>, <i>How old is the building?</i>",
        "## O erro comum",
        "Traduzir \"tenho 28 anos\" ao pé da letra. <i>I have 28 years</i> soa como se você fosse dono de 28 anos guardados em algum lugar.",
        "## Outros casos que também pedem to be",
        "O mesmo acontece com fome, frio, calor, medo e pressa: <i>I'm hungry</i>, <i>I'm cold</i>, <i>I'm in a hurry</i> — nunca <i>I have hungry</i>."
      ],
      ex: [
        ["How old is your son?", "Quantos anos tem seu filho?"],
        ["My brother is 35 years old.", "Meu irmão tem 35 anos."],
        ["I'm thirsty and the flight is long.", "Estou com sede e o voo é longo."]
      ]
    }
  ],

  a1m2: [
    {
      def: "O presente simples é o tempo da rotina, do hábito e do que é sempre verdade. Para I, you, we e they o verbo fica <b>na forma pura</b>, exatamente como está no dicionário.",
      form: "I / you / we / they + verbo puro · work, live, speak",
      marcar: ["work"],
      more: [
        "## Quando usar",
        "Três situações: rotina (<i>I work from home on Fridays</i>), fato permanente (<i>I live in Recife</i>) e verdade geral (<i>Water boils at 100 degrees</i>).",
        "## Nada muda no verbo",
        "<i>I work</i>, <i>you work</i>, <i>we work</i>, <i>they work</i>. O verbo só se altera com he, she e it — é o assunto do próximo cartão.",
        "## O erro comum",
        "Usar o presente simples para o que está acontecendo agora. Para isso existe o presente contínuo: <i>I'm working</i> neste momento, <i>I work</i> todos os dias."
      ],
      ex: [
        ["I work in marketing.", "Trabalho em marketing."],
        ["We travel for work twice a year.", "Viajamos a trabalho duas vezes por ano."],
        ["They speak Portuguese and Spanish.", "Eles falam português e espanhol."]
      ]
    },
    {
      def: "Com <b>he, she, it</b> — e com qualquer nome que caiba em um deles — o verbo ganha <b>-s</b> no fim. É a única marca de pessoa que sobrou no presente do inglês.",
      form: "he / she / it + verbo + s · works, goes, has, studies",
      marcar: ["works"],
      more: [
        "## As quatro terminações",
        "Regra geral: <b>+s</b> — <i>work → works</i>, <i>live → lives</i>.",
        "Depois de <b>-s, -sh, -ch, -x, -o</b>: <b>+es</b> — <i>watch → watches</i>, <i>go → goes</i>, <i>fix → fixes</i>.",
        "Consoante + <b>y</b>: o y vira <b>ies</b> — <i>study → studies</i>, <i>try → tries</i>. Mas vogal + y só ganha s: <i>pay → pays</i>.",
        "Irregulares de verdade são só dois: <i>have → <b>has</b></i> e <i>be → <b>is</b></i>.",
        "## Vale para nomes também",
        "Qualquer sujeito que você poderia trocar por he, she ou it pede o -s: <i>My boss <b>works</b> late</i>, <i>The system <b>needs</b> an update</i>, <i>Everything <b>depends</b> on the client</i>.",
        "## O erro comum",
        "Esquecer o -s é o deslize mais frequente de quem fala português, porque na nossa língua a terminação da terceira pessoa não chama atenção. <i>She work here</i> soa errado para qualquer ouvido nativo."
      ],
      ex: [
        ["She works in sales.", "Ela trabalha em vendas."],
        ["He goes to the office twice a week.", "Ele vai ao escritório duas vezes por semana."],
        ["My sister studies engineering.", "Minha irmã estuda engenharia."]
      ]
    },
    {
      def: "Para negar no presente simples, entra o auxiliar <b>do</b>. Ele é quem carrega a negação e a pessoa — e o verbo principal volta à forma pura, sem o -s.",
      form: "don't / doesn't + verbo puro · I don't work, she doesn't work",
      marcar: ["doesn't", "drink"],
      more: [
        "## Quem leva o -s é o auxiliar",
        "<i>She works</i> → <i>She <b>doesn't</b> work</i>. O -s saiu do verbo e virou o <i>does</i>. Dizer <i>she doesn't works</i> é marcar a pessoa duas vezes.",
        "## Qual auxiliar com qual pessoa",
        "<b>don't</b> para I, you, we, they. <b>doesn't</b> para he, she, it.",
        "## A forma longa",
        "<i>do not</i> e <i>does not</i> existem e aparecem em texto formal ou com ênfase: <i>The contract <b>does not</b> cover shipping</i>.",
        "## O erro comum",
        "Usar <i>don't</i> com <i>to be</i>. Com am, is, are a negação é direta: <i>I'm not late</i>, nunca <i>I don't be late</i>."
      ],
      ex: [
        ["She doesn't drink coffee.", "Ela não toma café."],
        ["We don't work on Saturdays.", "Não trabalhamos aos sábados."],
        ["The hotel doesn't include breakfast.", "O hotel não inclui café da manhã."]
      ]
    },
    {
      def: "A pergunta no presente simples também pede o auxiliar <b>do</b>, que vai para a frente da frase. O verbo principal fica puro.",
      form: "Do / Does + pessoa + verbo puro ...? · Do you...?, Does he...?",
      marcar: ["Does", "speak"],
      more: [
        "## A ordem",
        "<i>He speaks English</i> → <i><b>Does</b> he <b>speak</b> English?</i> O <i>does</i> abre a pergunta e o verbo perde o -s, porque a terceira pessoa já está marcada no auxiliar.",
        "## Com palavra de pergunta",
        "A palavra de pergunta vem antes do auxiliar: <i>Where <b>do</b> you live?</i>, <i>What time <b>does</b> the store open?</i>, <i>How <b>do</b> I get to the airport?</i>",
        "## A resposta curta",
        "Repete-se o auxiliar, não o verbo: <i>Yes, I do</i> / <i>No, I don't</i>; <i>Yes, she does</i> / <i>No, she doesn't</i>.",
        "## O erro comum",
        "Perguntar sem auxiliar, na ordem do português. <i>You speak English?</i> aparece na fala informal, mas a forma correta é <i>Do you speak English?</i>"
      ],
      ex: [
        ["Does he speak English?", "Ele fala inglês?"],
        ["Do you work on weekends?", "Você trabalha nos fins de semana?"],
        ["What time does the meeting start?", "A que horas começa a reunião?"]
      ]
    }
  ],

  a1m3: [
    {
      def: "<b>A</b> e <b>an</b> apresentam algo pela primeira vez, quando o ouvinte ainda não sabe de qual coisa se trata. A escolha entre os dois é pelo <b>som</b> da palavra seguinte, não pela letra.",
      form: "a + som de consoante · an + som de vogal",
      marcar: ["an"],
      more: [
        "## É o som que decide",
        "<i><b>a</b> client</i>, <i><b>a</b> meeting</i>, <i><b>a</b> university</i> (soa \"iuniversity\", começa com som de consoante).",
        "<i><b>an</b> email</i>, <i><b>an</b> hour</i> (o h é mudo, soa \"auer\"), <i><b>an</b> MBA</i> (a letra M soa \"em\").",
        "## Só com contáveis no singular",
        "<i>a problem</i>, sim; <i>an information</i>, não — <i>information</i> não se conta. Com incontáveis, usa-se nada ou <i>some</i>: <i>I need information</i>, <i>I need some advice</i>.",
        "## O erro comum",
        "Omitir o artigo. Em português \"sou engenheiro\" dispensa artigo; em inglês a profissão pede um: <i>I'm <b>an</b> engineer</i>."
      ],
      ex: [
        ["She sent me an email.", "Ela me mandou um e-mail."],
        ["I need a visa for that trip.", "Preciso de um visto para essa viagem."],
        ["It's an hour by train.", "É uma hora de trem."]
      ]
    },
    {
      def: "<b>The</b> aponta para algo específico que os dois lados da conversa já identificam — porque já foi mencionado, porque é único, ou porque o contexto deixa claro.",
      form: "the + singular ou plural · the client, the files",
      marcar: ["The"],
      more: [
        "## Os três motivos para usar the",
        "Já foi citado: <i>I got <b>an</b> email. <b>The</b> email was from the client.</i>",
        "Só existe um: <i>the sun</i>, <i>the manager</i> (o da sua equipe), <i>the airport</i> (o da cidade).",
        "O contexto define: <i>Close <b>the</b> door</i> — a porta que está ali.",
        "## Quando NÃO usar",
        "Com assuntos em geral, no plural ou incontáveis: <i>I like <b>coffee</b></i> (café em geral), <i><b>Meetings</b> are long</i> (reuniões em geral). Com nomes de países, cidades e pessoas: <i>Brazil</i>, <i>São Paulo</i>, <i>Ana</i>.",
        "## O erro comum",
        "Pôr <i>the</i> onde o português pede artigo mas o inglês não: dizemos \"o Brasil\", mas em inglês é só <i>Brazil</i>. Dizemos \"a vida é curta\", mas é <i>Life is short</i>."
      ],
      ex: [
        ["The client called again.", "O cliente ligou de novo."],
        ["The flight to Lisbon is delayed.", "O voo para Lisboa está atrasado."],
        ["I like coffee, but not the coffee here.", "Gosto de café, mas não do café daqui."]
      ]
    },
    {
      def: "O plural em inglês se marca no fim do substantivo, e o número aparece uma vez só: nem o artigo nem o adjetivo mudam de forma.",
      form: "+s · clients, boxes, companies, people",
      marcar: ["people"],
      more: [
        "## As terminações",
        "Regra geral <b>+s</b>: <i>client → clients</i>.",
        "Depois de <b>-s, -sh, -ch, -x, -o</b>: <b>+es</b> — <i>box → boxes</i>, <i>watch → watches</i>, <i>potato → potatoes</i>.",
        "Consoante + <b>y</b> vira <b>ies</b>: <i>company → companies</i>. Terminados em <b>-f / -fe</b> viram <b>-ves</b>: <i>life → lives</i>, <i>knife → knives</i>.",
        "## Os irregulares que você vai usar",
        "<i>person → <b>people</b></i>, <i>man → men</i>, <i>woman → women</i>, <i>child → children</i>, <i>foot → feet</i>, <i>tooth → teeth</i>. E os que não mudam: <i>fish</i>, <i>sheep</i>, <i>aircraft</i>.",
        "## Só o substantivo muda",
        "<i>three <b>big</b> companies</i> — o adjetivo nunca leva s. E <i>people</i> já é plural: <i>people <b>are</b></i>, nunca <i>peoples is</i>."
      ],
      ex: [
        ["There are ten people on the team.", "São dez pessoas na equipe."],
        ["We work with two big companies.", "Trabalhamos com duas empresas grandes."],
        ["I packed three knives in the box.", "Coloquei três facas na caixa."]
      ]
    },
    {
      def: "<b>This, that, these, those</b> apontam para coisas: a escolha depende de duas perguntas — está perto ou longe, é uma ou são várias.",
      form: "perto / longe · this, these, that, those",
      marcar: ["These"],
      more: [
        "## A tabela de dois eixos",
        "Perto e um: <b>this</b> (<i>this document</i>). Perto e vários: <b>these</b> (<i>these documents</i>).",
        "Longe e um: <b>that</b> (<i>that building</i>). Longe e vários: <b>those</b> (<i>those buildings</i>).",
        "## Perto e longe não é só distância",
        "Também vale para o tempo e para a conversa: <i><b>this</b> week</i> (a que estamos vivendo) × <i><b>that</b> week</i> (aquela de que falamos). Ao telefone: <i><b>This</b> is Ana speaking</i>.",
        "## Sozinhos ou acompanhados",
        "Podem vir antes do substantivo (<i>this chair</i>) ou no lugar dele (<i>This is important</i>, <i>I'll take these</i>).",
        "## O erro comum",
        "Usar <i>this</i> com plural. <i>This documents</i> não existe: se o substantivo tem s, o apontador é <i>these</i> ou <i>those</i>."
      ],
      ex: [
        ["These documents are important.", "Estes documentos são importantes."],
        ["That hotel is too expensive.", "Aquele hotel é caro demais."],
        ["This is my first time in Chicago.", "Esta é minha primeira vez em Chicago."]
      ]
    }
  ],

  a1m4: [
    {
      def: "<b>There is</b> serve para dizer que algo <b>existe</b> em algum lugar. É a estrutura que apresenta uma coisa nova na conversa; com uma coisa só, o verbo é <i>is</i>.",
      form: "There is + algo no singular · there's a printer",
      marcar: ["There is"],
      more: [
        "## There is × it is",
        "<i>There is a printer here</i> apresenta o objeto — você ainda não sabia dele. <i>It is a printer</i> descreve algo que já está em jogo. Os dois não se trocam.",
        "## Com incontáveis, também is",
        "<i>There is <b>water</b> in the bottle</i>, <i>There is <b>time</b> before the flight</i> — coisas que não se contam usam a forma singular.",
        "## A forma curta",
        "<i>there's</i> é o que se ouve na fala. A forma longa aparece na escrita e na ênfase.",
        "## O erro comum",
        "Traduzir \"tem um printer aqui\" com <i>have</i>. <i>Have a printer here</i> não existe; existência pede <i>there is</i>."
      ],
      ex: [
        ["There is a printer on the second floor.", "Tem uma impressora no segundo andar."],
        ["There's a problem with the invoice.", "Tem um problema com a nota."],
        ["There's time for a coffee before the call.", "Dá tempo de um café antes da ligação."]
      ]
    },
    {
      def: "Quando a coisa que existe está no plural, o verbo acompanha: <b>there are</b>. Quem manda na forma é o que vem <b>depois</b> do verbo, não o <i>there</i>.",
      form: "There are + algo no plural · there are five people",
      marcar: ["There are"],
      more: [
        "## O verbo concorda com o que vem depois",
        "<i>There <b>is</b> one chair</i> × <i>There <b>are</b> two chairs</i>. Com lista mista, a concordância segue o primeiro item: <i>There <b>is</b> a laptop and two cables on the desk</i>.",
        "## Não existe contração",
        "<i>there's</i> existe; <i>there're</i> praticamente não se escreve. Com plural, use <i>there are</i> inteiro.",
        "## Com números e quantidades",
        "<i>There are <b>a lot of</b> people here</i>, <i>There are <b>some</b> messages for you</i>, <i>There are <b>three</b> options</i>."
      ],
      ex: [
        ["There are five people in the room.", "Tem cinco pessoas na sala."],
        ["There are two flights a day to Bogotá.", "São dois voos por dia para Bogotá."],
        ["There are some messages for you.", "Tem algumas mensagens para você."]
      ]
    },
    {
      def: "A negativa e a pergunta de <b>there is / there are</b> seguem a regra do <b>to be</b>: o <i>not</i> vem depois do verbo, e para perguntar o verbo passa na frente do <i>there</i>.",
      form: "There isn't / aren't · Is there...? Are there...?",
      marcar: ["Is there"],
      more: [
        "## A inversão na pergunta",
        "<i>There is a problem</i> → <i><b>Is there</b> a problem?</i> O <i>there</i> continua ali, só troca de lugar com o verbo.",
        "## O par any / no",
        "Na negativa e na pergunta entra <i>any</i>: <i>There isn't <b>any</b> coffee</i>, <i>Are there <b>any</b> questions?</i> Também se pode negar com <i>no</i>: <i>There's <b>no</b> coffee</i> — mais curto e mais enfático.",
        "## A resposta curta",
        "<i>Yes, there is</i> / <i>No, there isn't</i>; <i>Yes, there are</i> / <i>No, there aren't</i>."
      ],
      ex: [
        ["Is there any coffee?", "Tem café?"],
        ["There aren't any seats left.", "Não sobrou nenhum assento."],
        ["There's no signal in the tunnel.", "Não tem sinal no túnel."]
      ]
    },
    {
      def: "As preposições de lugar dizem a posição exata de uma coisa em relação a outra. Cada uma desenha uma imagem diferente — e é pela imagem, não pela tradução, que se escolhe.",
      form: "in, on, under, next to, between, in front of",
      marcar: ["next to"],
      more: [
        "## As básicas",
        "<b>in</b> = dentro (<i>in the drawer</i>, <i>in the car</i>). <b>on</b> = em cima, em contato (<i>on the table</i>, <i>on the wall</i>). <b>under</b> = embaixo (<i>under the chair</i>).",
        "## As de relação",
        "<b>next to</b> / <b>beside</b> = ao lado. <b>between</b> = entre dois. <b>among</b> = entre muitos. <b>in front of</b> = na frente de. <b>behind</b> = atrás de. <b>across from</b> / <b>opposite</b> = do outro lado.",
        "## Perto e longe",
        "<b>near</b> = perto. <b>far from</b> = longe de. <b>at</b> aponta o ponto sem dizer dentro ou fora: <i>at the bus stop</i>, <i>at the door</i>.",
        "## O erro comum",
        "<i>in front of</i> não é \"em frente, do outro lado da rua\" — isso é <i>across from</i>. <i>In front of the hotel</i> é na calçada do hotel."
      ],
      ex: [
        ["The bank is next to the pharmacy.", "O banco é ao lado da farmácia."],
        ["Your passport is in the top drawer.", "Seu passaporte está na primeira gaveta."],
        ["The café is across from the station.", "O café é do outro lado da estação."]
      ]
    }
  ],

  a1m5: [
    {
      def: "Em inglês a hora se lê de duas maneiras: pelo relógio digital, dizendo os números na ordem, ou pela forma falada, que conta os minutos a partir da hora cheia com <b>past</b> e <b>to</b>.",
      form: "o'clock, past, to · nine o'clock, half past nine, quarter to ten",
      marcar: ["half past nine"],
      more: [
        "## A forma falada",
        "Até os 30 minutos, conta-se <b>past</b> (depois de): <i>ten past nine</i> = 9:10, <i>quarter past nine</i> = 9:15, <i>half past nine</i> = 9:30.",
        "Passados os 30, conta-se <b>to</b> (para): <i>twenty to ten</i> = 9:40, <i>quarter to ten</i> = 9:45.",
        "Na hora cheia, <b>o'clock</b>: <i>nine o'clock</i>. Só com hora exata — <i>nine thirty o'clock</i> não existe.",
        "## A forma digital",
        "Sempre válida e mais simples: <i>nine thirty</i>, <i>nine forty-five</i>, <i>ten fifteen</i>.",
        "## a.m. e p.m.",
        "O relógio de 12 horas precisa dizer o período: <i>7 a.m.</i> é manhã, <i>7 p.m.</i> é noite. O relógio de 24 horas quase não aparece no inglês do dia a dia.",
        "## Para perguntar",
        "<i>What time is it?</i> ou <i>Do you have the time?</i> A resposta começa com <i>It's</i>: <i>It's ten past eight</i>."
      ],
      ex: [
        ["It's half past nine.", "São nove e meia."],
        ["My flight leaves at quarter to seven.", "Meu voo sai às sete menos quinze."],
        ["The store opens at nine thirty.", "A loja abre às nove e meia."]
      ]
    },
    {
      def: "Três preposições cobrem todo o tempo em inglês, e a escolha é pelo <b>tamanho</b> do período: <b>at</b> para o ponto exato, <b>on</b> para o dia, <b>in</b> para o período maior que um dia.",
      form: "at hora · on dia · in mês, ano, parte do dia",
      marcar: ["at"],
      more: [
        "## Do menor para o maior",
        "<b>at</b> + hora e momento exato: <i>at 10 a.m.</i>, <i>at noon</i>, <i>at night</i>, <i>at the weekend</i> (inglês britânico).",
        "<b>on</b> + dia e data: <i>on Monday</i>, <i>on March 3rd</i>, <i>on my birthday</i>, <i>on the weekend</i> (inglês americano).",
        "<b>in</b> + período longo: <i>in March</i>, <i>in 2027</i>, <i>in the morning</i>, <i>in the summer</i>, <i>in two weeks</i>.",
        "## As exceções que se decoram",
        "<i>at night</i>, mas <i>in the morning</i>, <i>in the afternoon</i>, <i>in the evening</i>. E <i>at Christmas</i> para a época, <i>on Christmas Day</i> para o dia.",
        "## Sem preposição",
        "Com <i>today</i>, <i>tomorrow</i>, <i>yesterday</i>, <i>next</i> e <i>last</i> não entra preposição: <i>See you <b>next</b> Monday</i>, nunca <i>on next Monday</i>."
      ],
      ex: [
        ["The meeting is at 10.", "A reunião é às 10."],
        ["We land on Friday morning.", "Pousamos na manhã de sexta."],
        ["I'm starting the course in March.", "Vou começar o curso em março."]
      ]
    },
    {
      def: "Datas em inglês usam o número <b>ordinal</b> — o que marca posição, não quantidade. Escreve-se de um jeito e fala-se de outro.",
      form: "ordinais · first, second, third, fifteenth, twenty-first",
      marcar: ["March 15th"],
      more: [
        "## Como se formam",
        "Em geral <b>+th</b>: <i>four → fourth</i>, <i>ten → tenth</i>. Os três irregulares são os primeiros: <i>one → <b>first</b></i>, <i>two → <b>second</b></i>, <i>three → <b>third</b></i>. Também <i>five → fifth</i>, <i>nine → ninth</i>, <i>twelve → twelfth</i>, <i>twenty → twentieth</i>.",
        "Nos compostos, só a última parte vira ordinal: <i>twenty-<b>first</b></i>, <i>thirty-<b>first</b></i>.",
        "## Escrito × falado",
        "Escreve-se <i>March 15th</i> ou <i>15 March</i>; fala-se <i>March <b>the</b> fifteenth</i> (britânico) ou <i>March fifteenth</i> (americano). O ano se lê em dois pares: <i>1998</i> = <i>nineteen ninety-eight</i>; <i>2027</i> = <i>twenty twenty-seven</i>.",
        "## A ordem muda de país",
        "<b>03/15</b> nos EUA é mês/dia (15 de março); <b>15/03</b> no Reino Unido é dia/mês. Em datas de viagem, escrever o mês por extenso evita confusão.",
        "## Onde mais aparecem os ordinais",
        "Andares (<i>the <b>third</b> floor</i>), ordem (<i>the <b>first</b> time</i>) e sequência (<i><b>First</b>, we check in</i>)."
      ],
      ex: [
        ["The deadline is March 15th.", "O prazo é 15 de março."],
        ["My flight is on the twenty-first.", "Meu voo é no dia vinte e um."],
        ["It's the first time I'm presenting.", "É a primeira vez que apresento."]
      ]
    },
    {
      def: "Números grandes em inglês se apoiam em três palavras — <b>hundred</b>, <b>thousand</b>, <b>million</b> — que nunca vão para o plural quando vêm com número na frente.",
      form: "hundred, thousand, million · two thousand five hundred",
      marcar: ["two thousand five hundred"],
      more: [
        "## Como se montam",
        "<i>250</i> = <i>two hundred <b>and</b> fifty</i> (o <i>and</i> é obrigatório no britânico e opcional no americano). <i>2.500</i> = <i>two thousand five hundred</i>. <i>1.200</i> também pode ser <i>twelve hundred</i> na fala.",
        "## Sem s depois do número",
        "<i>three <b>hundred</b></i>, não <i>three hundreds</i>. O s só aparece quando a quantidade é vaga: <i><b>hundreds</b> of emails</i>, <i><b>thousands</b> of people</i>.",
        "## Ponto e vírgula trocados",
        "O inglês usa vírgula para separar os milhares e ponto para o decimal: <i>2,500.75</i> é dois mil e quinhentos e setenta e cinco centavos.",
        "## Perguntar preço",
        "<i>How much is it?</i> ou <i>How much does it cost?</i> Para contáveis, <i>How many...?</i> — <i>How many nights?</i>"
      ],
      ex: [
        ["It costs two thousand five hundred reais.", "Custa dois mil e quinhentos reais."],
        ["How much is the deposit?", "Quanto é o depósito?"],
        ["We got hundreds of applications.", "Recebemos centenas de inscrições."]
      ]
    }
  ],

  a1m6: [
    {
      def: "Os pronomes mudam de forma conforme o papel na frase: uma forma para <b>quem faz</b> a ação, outra para <b>quem a recebe</b> — ou para quem vem depois de uma preposição.",
      form: "sujeito / objeto · I-me, he-him, she-her, we-us, they-them",
      marcar: ["me"],
      more: [
        "## Os pares",
        "<i>I → <b>me</b></i>, <i>he → <b>him</b></i>, <i>she → <b>her</b></i>, <i>we → <b>us</b></i>, <i>they → <b>them</b></i>. <i>You</i> e <i>it</i> não mudam.",
        "## Onde cada um entra",
        "Antes do verbo, o de sujeito: <i><b>She</b> called the client</i>. Depois do verbo ou de preposição, o de objeto: <i>The client called <b>her</b></i>, <i>This is for <b>him</b></i>, <i>Come with <b>us</b></i>.",
        "## O erro comum",
        "Usar o de sujeito depois de preposição. <i>Between you and <b>I</b></i> é erro clássico até entre nativos; o certo é <i>between you and <b>me</b></i>."
      ],
      ex: [
        ["Can you help me?", "Você pode me ajudar?"],
        ["I sent them the invoice.", "Mandei a nota para eles."],
        ["The taxi is waiting for us.", "O táxi está esperando por nós."]
      ]
    },
    {
      def: "Os possessivos que vêm <b>antes do substantivo</b> dizem de quem é a coisa. Eles concordam com o dono, não com a coisa — e nunca mudam de forma.",
      form: "antes do substantivo · my, your, his, her, its, our, their",
      marcar: ["my"],
      more: [
        "## Concorda com o dono",
        "Em português, \"seu carro\" e \"seus carros\" mudam; em inglês, <i><b>my</b> car</i> e <i><b>my</b> cars</i> ficam iguais. O que importa é quem é o dono: <i><b>his</b> sister</i> (dele), <i><b>her</b> sister</i> (dela).",
        "## its não tem apóstrofo",
        "<i><b>its</b> price</i> = o preço dele (da coisa). <i><b>it's</b></i> = <i>it is</i>. Confundir os dois é um dos erros de escrita mais comuns do inglês.",
        "## O 's dos nomes",
        "Com nome de pessoa, usa-se <b>'s</b>: <i>Ana<b>'s</b> desk</i>, <i>the manager<b>'s</b> office</i>. No plural, só o apóstrofo: <i>the clients<b>'</b> feedback</i>.",
        "## O erro comum",
        "Em inglês não se diz <i>the my car</i>: o possessivo já faz o papel do artigo."
      ],
      ex: [
        ["This is my desk.", "Esta é a minha mesa."],
        ["Their flight was cancelled.", "O voo deles foi cancelado."],
        ["Ana's presentation starts at two.", "A apresentação da Ana começa às duas."]
      ]
    },
    {
      def: "Os possessivos que ficam <b>sozinhos</b> substituem o substantivo: já se sabe de que coisa se fala, então ela não precisa ser repetida.",
      form: "sem substantivo depois · mine, yours, his, hers, ours, theirs",
      marcar: ["mine"],
      more: [
        "## A lista",
        "<i>my → <b>mine</b></i>, <i>your → <b>yours</b></i>, <i>her → <b>hers</b></i>, <i>our → <b>ours</b></i>, <i>their → <b>theirs</b></i>. <i>His</i> serve para os dois usos.",
        "## A diferença em uma linha",
        "<i>That's <b>my</b> laptop</i> (vem o substantivo) × <i>That laptop is <b>mine</b></i> (fica sozinho). Nunca os dois juntos: <i>my mine</i> não existe.",
        "## Nenhum leva apóstrofo",
        "<i>hers</i>, <i>ours</i>, <i>theirs</i>, <i>yours</i> — nunca <i>her's</i> ou <i>their's</i>.",
        "## Onde aparecem no dia a dia",
        "Para comparar donos (<i>Mine is the black suitcase</i>), para perguntar (<i>Is this yours?</i>) e em fechamento de carta (<i>A friend <b>of mine</b></i>)."
      ],
      ex: [
        ["That laptop is mine.", "Aquele notebook é meu."],
        ["Is this suitcase yours?", "Esta mala é sua?"],
        ["The idea was hers, not his.", "A ideia foi dela, não dele."]
      ]
    },
    {
      def: "<b>Can</b> cobre três sentidos de uma vez: capacidade (consigo), permissão (posso) e pedido educado. Como todo modal, não muda de forma e é seguido do verbo puro.",
      form: "can / can't + verbo puro · I can speak, she can't come",
      marcar: ["can"],
      more: [
        "## Não muda com a pessoa",
        "<i>I can</i>, <i>he can</i>, <i>they can</i> — nunca <i>he cans</i>. E o verbo depois fica puro, sem <i>to</i> e sem <i>-ing</i>: <i>I can <b>swim</b></i>, não <i>I can to swim</i>.",
        "## Negativa e pergunta",
        "<i>can't</i> (ou <i>cannot</i>) nega: <i>I <b>can't</b> come on Friday</i>. Para perguntar, o <i>can</i> vai na frente: <i><b>Can</b> you send me the file?</i>",
        "## Os três sentidos",
        "Capacidade: <i>I can drive</i>. Permissão: <i>You can use my laptop</i>. Pedido: <i>Can you help me?</i> — e <i>Could you help me?</i> é a versão mais educada do mesmo pedido.",
        "## No passado",
        "<i>can</i> vira <b>could</b>: <i>I <b>could</b> read the sign</i>. Para uma coisa pontual que deu certo, usa-se <i>was able to</i>: <i>I <b>was able to</b> change my flight</i>."
      ],
      ex: [
        ["I can speak English a little.", "Consigo falar inglês um pouco."],
        ["She can't join the call today.", "Ela não pode entrar na ligação hoje."],
        ["Can you send me the address?", "Você pode me mandar o endereço?"]
      ]
    }
  ],

  a2m1: [
    {
      def: "Verbos regulares no passado ganham <b>-ed</b> e pronto: a terminação é a mesma para todas as pessoas, sem exceção.",
      form: "verbo + ed · worked, called, finished",
      marcar: ["called"],
      more: [
        "## A grafia",
        "Regra geral <b>+ed</b>: <i>work → worked</i>. Terminado em <b>e</b>, só <b>+d</b>: <i>arrive → arrived</i>.",
        "Consoante + <b>y</b>: vira <b>ied</b> — <i>study → studied</i>, <i>try → tried</i>. Vogal + y mantém: <i>play → played</i>.",
        "Sílaba tônica no fim com consoante única: dobra a consoante — <i>plan → plan<b>n</b>ed</i>, <i>stop → stop<b>p</b>ed</i>, <i>prefer → prefer<b>r</b>ed</i>.",
        "## Os três sons do -ed",
        "Depois de som surdo (<i>p, k, f, s, sh, ch</i>) soa <b>t</b>: <i>worked</i> = \"workt\". Depois de som sonoro soa <b>d</b>: <i>called</i> = \"calld\". Só depois de <b>t</b> ou <b>d</b> soa como sílaba extra <b>id</b>: <i>wanted</i>, <i>decided</i>.",
        "## Igual para todos",
        "<i>I worked</i>, <i>she worked</i>, <i>they worked</i>. O passado simples é o único tempo em que nada muda com a pessoa."
      ],
      ex: [
        ["Yesterday I called three clients.", "Ontem liguei para três clientes."],
        ["We arrived late because of the traffic.", "Chegamos tarde por causa do trânsito."],
        ["She studied Spanish for two years.", "Ela estudou espanhol por dois anos."]
      ]
    },
    {
      def: "Os verbos irregulares não seguem regra: a forma do passado é outra palavra e se aprende uma a uma. São poucos, mas são justamente os mais usados.",
      form: "forma própria · went, had, made, got, sent, saw",
      marcar: ["sent"],
      more: [
        "## Os que você mais vai usar",
        "<i>go → <b>went</b></i>, <i>have → <b>had</b></i>, <i>make → <b>made</b></i>, <i>get → <b>got</b></i>, <i>send → <b>sent</b></i>, <i>see → <b>saw</b></i>, <i>buy → <b>bought</b></i>, <i>meet → <b>met</b></i>, <i>take → <b>took</b></i>, <i>say → <b>said</b></i>, <i>come → <b>came</b></i>, <i>pay → <b>paid</b></i>.",
        "## Grupos que ajudam a decorar",
        "Alguns mudam a vogal: <i>sing → sang</i>, <i>drink → drank</i>, <i>begin → began</i>. Outros terminam em <b>-ought</b> / <b>-aught</b>: <i>buy → bought</i>, <i>think → thought</i>, <i>teach → taught</i>. E alguns não mudam nada: <i>put → put</i>, <i>cut → cut</i>, <i>read → read</i> (muda só o som).",
        "## O irregular desaparece na negativa",
        "Com <i>didn't</i>, o verbo volta à forma pura: <i>I <b>went</b></i> → <i>I <b>didn't go</b></i>, nunca <i>didn't went</i>.",
        "## Terceira coluna, outro assunto",
        "As listas trazem três formas (<i>go, went, gone</i>). A terceira é o particípio e serve para o present perfect, não para o passado simples."
      ],
      ex: [
        ["We sent the proposal on Monday.", "Enviamos a proposta na segunda."],
        ["I bought the tickets last week.", "Comprei as passagens semana passada."],
        ["She took the early flight.", "Ela pegou o voo mais cedo."]
      ]
    },
    {
      def: "Para negar no passado entra <b>didn't</b>, que é quem carrega o tempo. O verbo principal volta à forma pura — o passado já está marcado uma vez.",
      form: "didn't + verbo puro · I didn't finish",
      marcar: ["didn't", "finish"],
      more: [
        "## Um tempo, uma marca",
        "<i>I finished</i> → <i>I <b>didn't finish</b></i>. <i>I went</i> → <i>I <b>didn't go</b></i>. Marcar duas vezes (<i>didn't finished</i>) é o erro mais comum do passado.",
        "## Serve para todas as pessoas",
        "<i>didn't</i> não muda: <i>I didn't</i>, <i>he didn't</i>, <i>they didn't</i>. A forma longa <i>did not</i> aparece em texto formal e com ênfase.",
        "## Com to be é diferente",
        "<i>was</i> e <i>were</i> negam sozinhos: <i>I <b>wasn't</b> there</i>, <i>They <b>weren't</b> ready</i> — nunca <i>I didn't be there</i>."
      ],
      ex: [
        ["I didn't finish the report.", "Não terminei o relatório."],
        ["They didn't answer my email.", "Eles não responderam meu e-mail."],
        ["We didn't have time to check in online.", "Não tivemos tempo de fazer o check-in online."]
      ]
    },
    {
      def: "A pergunta no passado também se apoia no <b>did</b>, que abre a frase. O verbo principal fica puro, pela mesma razão da negativa.",
      form: "Did + pessoa + verbo puro ...? · Did you see...?",
      marcar: ["Did", "see"],
      more: [
        "## A ordem",
        "<i>You saw the email</i> → <i><b>Did</b> you <b>see</b> the email?</i> O <i>did</i> toma a frente e o verbo perde a marca de passado.",
        "## Com palavra de pergunta",
        "<i>When <b>did</b> you arrive?</i>, <i>Where <b>did</b> they stay?</i>, <i>Why <b>didn't</b> he call?</i> A palavra de pergunta vem antes do auxiliar.",
        "## Quando o did não entra",
        "Se a pergunta é sobre o próprio sujeito, não há inversão: <i><b>Who</b> called you?</i>, <i><b>What</b> happened?</i> — o verbo fica no passado e o <i>did</i> desaparece.",
        "## A resposta curta",
        "<i>Yes, I did</i> / <i>No, I didn't</i> — repete-se o auxiliar, não o verbo."
      ],
      ex: [
        ["Did you see the email?", "Você viu o e-mail?"],
        ["When did the meeting end?", "Quando a reunião acabou?"],
        ["What happened at the airport?", "O que aconteceu no aeroporto?"]
      ]
    },
    {
      def: "<b>Was</b> e <b>were</b> são o passado de <i>to be</i>. É o único verbo do passado que muda de forma conforme a pessoa — e o único que nega e pergunta sem o <i>did</i>.",
      form: "was / were · I was, you were, they were",
      marcar: ["was"],
      more: [
        "## Quem leva qual",
        "<b>was</b> para I, he, she, it. <b>were</b> para you, we, they. Negativas: <i>wasn't</i>, <i>weren't</i>.",
        "## Sem did",
        "<i>Was the meeting long?</i>, <i>Were you at the office?</i> — o verbo vai na frente, como no presente. <i>Did you be there</i> não existe.",
        "## There was / there were",
        "A existência no passado segue a mesma concordância: <i>There <b>was</b> a delay</i>, <i>There <b>were</b> ten people</i>.",
        "## O were do condicional",
        "Em frase hipotética, <i>were</i> serve para todas as pessoas: <i><b>If I were</b> you, I'd take the earlier flight</i>."
      ],
      ex: [
        ["The meeting was really long.", "A reunião foi bem longa."],
        ["We were at the airport at six.", "Estávamos no aeroporto às seis."],
        ["There weren't any seats left.", "Não sobrou nenhum assento."]
      ]
    }
  ],

  a2m2: [
    {
      def: "O presente simples fala do que é <b>habitual ou permanente</b>: a rotina, o fato, a regra. Ele não descreve o que está acontecendo neste instante.",
      form: "verbo puro (+ s em he/she/it) · works, lives, opens",
      marcar: ["works"],
      more: [
        "## Os três usos",
        "Rotina: <i>She <b>works</b> in the sales team</i>. Fato permanente: <i>The office <b>opens</b> at eight</i>. Verdade geral: <i>Flights <b>get</b> cheaper in May</i>.",
        "## O -s da terceira pessoa",
        "<i>he, she, it</i> ganham <b>-s</b>: <i>works</i>, <i>goes</i>, <i>has</i>, <i>studies</i>. Nas outras pessoas o verbo fica puro.",
        "## A pergunta e a negativa",
        "Dependem do <i>do / does</i>: <i><b>Does</b> she work here?</i>, <i>He <b>doesn't</b> answer emails on weekends</i>.",
        "## A fronteira com o contínuo",
        "<i>I work from home</i> é a rotina; <i>I'm working from home this week</i> é o arranjo temporário desta semana. A escolha é entre \"em geral\" e \"agora\"."
      ],
      ex: [
        ["She works in the sales team.", "Ela trabalha na equipe de vendas."],
        ["The store opens at nine every day.", "A loja abre às nove todos os dias."],
        ["I take the bus to work.", "Vou de ônibus para o trabalho."]
      ]
    },
    {
      def: "O presente contínuo fala do que está <b>em andamento</b>: neste instante, ou num período que começou e vai acabar. É a forma de dizer que algo é temporário.",
      form: "am / is / are + verbo-ing · I'm writing, she's working",
      marcar: ["I'm writing"],
      more: [
        "## Os dois usos",
        "Agora mesmo: <i>I<b>'m writing</b> an email right now</i>. Período temporário: <i>She<b>'s working</b> from Lisbon this month</i> — não é a rotina dela, é o arranjo do mês.",
        "## A grafia do -ing",
        "Regra geral <b>+ing</b>: <i>work → working</i>. Terminado em <b>e</b> muda: <i>write → writing</i>, <i>take → taking</i>. Sílaba tônica no fim dobra a consoante: <i>run → run<b>n</b>ing</i>, <i>plan → plan<b>n</b>ing</i>, <i>get → get<b>t</b>ing</i>.",
        "## Para o futuro já combinado",
        "O contínuo também serve para compromisso marcado: <i>We<b>'re meeting</b> the client on Friday</i>. A data combinada é o que o diferencia do agora.",
        "## O erro comum",
        "Esquecer o verbo <i>to be</i>. <i>I working now</i> não existe: o contínuo são duas peças, <i>am/is/are</i> + <i>-ing</i>."
      ],
      ex: [
        ["I'm writing an email right now.", "Estou escrevendo um e-mail agora."],
        ["They're waiting at the gate.", "Eles estão esperando no portão."],
        ["He's staying with us this week.", "Ele está ficando com a gente esta semana."]
      ]
    },
    {
      def: "Cada um dos dois tempos nega e pergunta à sua maneira: o simples pede o auxiliar <b>do</b>, o contínuo usa o próprio <b>to be</b> que já está na frase.",
      form: "simples: don't / Do...? · contínuo: isn't / Are...?",
      marcar: ["doesn't"],
      more: [
        "## Presente simples",
        "Negativa: <i>He <b>doesn't</b> answer emails on weekends</i>. Pergunta: <i><b>Do</b> you work on Fridays?</i> O verbo principal fica puro.",
        "## Presente contínuo",
        "Negativa: <i>She <b>isn't</b> working today</i>. Pergunta: <i><b>Are</b> you working on the proposal?</i> O <i>-ing</i> permanece; só o <i>to be</i> se move.",
        "## O teste rápido",
        "Se a frase afirmativa tem <i>am/is/are</i>, a negativa e a pergunta se fazem com ele e nenhum <i>do</i> entra. Se não tem, o <i>do</i> aparece.",
        "## O erro comum",
        "Juntar os dois: <i>Do you working?</i> ou <i>She doesn't is working</i>. Só um auxiliar por frase."
      ],
      ex: [
        ["He doesn't answer emails on weekends.", "Ele não responde e-mails nos fins de semana."],
        ["Are you working on the proposal?", "Você está trabalhando na proposta?"],
        ["I'm not travelling this month.", "Não estou viajando este mês."]
      ]
    },
    {
      def: "Alguns verbos descrevem <b>estados</b>, não ações: pensamento, gosto, posse, percepção. Estados não acontecem em andamento, por isso esses verbos não entram no <i>-ing</i>.",
      form: "sempre no simples · know, like, want, need, understand",
      marcar: ["need"],
      more: [
        "## A lista principal",
        "Pensamento: <i>know</i>, <i>think</i> (= achar), <i>believe</i>, <i>remember</i>, <i>understand</i>, <i>mean</i>.",
        "Gosto e vontade: <i>like</i>, <i>love</i>, <i>hate</i>, <i>prefer</i>, <i>want</i>, <i>need</i>.",
        "Posse e ser: <i>have</i> (= possuir), <i>own</i>, <i>belong</i>, <i>be</i>, <i>cost</i>, <i>seem</i>.",
        "## Os que mudam de sentido",
        "Alguns viram ação e aí aceitam o <i>-ing</i>, com outro significado: <i>I <b>think</b> it's a good idea</i> (acho) × <i>I<b>'m thinking</b> about the offer</i> (estou refletindo). <i>I <b>have</b> a car</i> (tenho) × <i>I<b>'m having</b> lunch</i> (estou almoçando).",
        "## O erro comum",
        "<i>I'm needing help</i> e <i>I'm liking it</i> soam estranhos para um nativo. O certo é <i>I need help</i>, <i>I like it</i>."
      ],
      ex: [
        ["I need help with the booking.", "Preciso de ajuda com a reserva."],
        ["She doesn't understand the invoice.", "Ela não entende a nota."],
        ["This option costs more.", "Esta opção custa mais."]
      ]
    }
  ],

  a2m3: [
    {
      def: "<b>Going to</b> anuncia um plano que já estava decidido antes de você falar. A intenção existia; a frase só comunica.",
      form: "am / is / are going to + verbo puro · I'm going to call",
      marcar: ["going to"],
      more: [
        "## A marca do plano",
        "Entre a decisão e a fala existe um intervalo: você já tinha pensado em ligar e agora conta. <i>I<b>'m going to</b> call the client tomorrow</i>.",
        "## Também para previsão com sinal visível",
        "Quando algo na realidade aponta para o que vem: <i>Look at those clouds — it<b>'s going to</b> rain</i>, <i>The meeting <b>is going to</b> be long</i>.",
        "## Na fala",
        "Soa <i>gonna</i> (<i>I'm gonna call her</i>) — normal na conversa, fora de lugar em e-mail formal.",
        "## O erro comum",
        "Esquecer o <i>to be</i>: <i>I going to call</i>. São três peças: <i>am/is/are</i> + <i>going to</i> + verbo."
      ],
      ex: [
        ["I'm going to call the client tomorrow.", "Vou ligar para o cliente amanhã."],
        ["We're going to look for a cheaper flight.", "Vamos procurar um voo mais barato."],
        ["It's going to be a long week.", "Vai ser uma semana longa."]
      ]
    },
    {
      def: "<b>Will</b> é o futuro decidido <b>no momento da fala</b>: a decisão nasce ali, na hora. Serve também para promessa, oferta e previsão sem evidência.",
      form: "will + verbo puro · I'll help, it won't take long",
      marcar: ["I'll"],
      more: [
        "## Decisão na hora",
        "O telefone toca e você resolve atender: <i>I<b>'ll</b> get it</i>. Ninguém tinha planejado nada — é isso que separa <i>will</i> de <i>going to</i>.",
        "## Promessa e oferta",
        "<i>Don't worry, I<b>'ll</b> help you</i>, <i>I<b>'ll</b> send it today</i>, <i><b>Shall</b> I open the window?</i> (oferta formal).",
        "## Previsão e opinião sobre o futuro",
        "Com <i>I think</i>, <i>probably</i>, <i>maybe</i>: <i>I think it <b>will</b> work</i>, <i>They<b>'ll</b> probably accept</i>.",
        "## As formas",
        "Curta: <i>I'll, you'll, we'll</i>. Negativa: <i><b>won't</b></i> (= will not). Não muda com a pessoa e o verbo vem puro: <i>she will <b>go</b></i>, nunca <i>she will goes</i>."
      ],
      ex: [
        ["Don't worry, I'll help you.", "Não se preocupe, eu te ajudo."],
        ["I'll send the file after the call.", "Vou mandar o arquivo depois da ligação."],
        ["It won't take long.", "Não vai demorar."]
      ]
    },
    {
      def: "Para compromisso <b>marcado</b> — com hora, data ou lugar combinados — o inglês usa o presente contínuo. O arranjo já existe na agenda.",
      form: "am / is / are + verbo-ing + quando · we're meeting on Friday",
      marcar: ["We're meeting"],
      more: [
        "## O que faz dele futuro",
        "A referência de tempo. <i>We<b>'re meeting</b> the client</i> sozinho soa agora; <i>We're meeting the client <b>on Friday</b></i> é agenda.",
        "## É mais firme que o going to",
        "<i>I'm going to see the dentist</i> é intenção; <i>I'm seeing the dentist at four</i> é hora marcada. Por isso o contínuo é o tempo de viagem e reunião: <i>We<b>'re flying</b> on the 12th</i>, <i>I<b>'m checking out</b> at noon</i>.",
        "## Horário oficial pede presente simples",
        "Para o que funciona por tabela — voo, trem, cinema, loja — usa-se o presente simples: <i>The flight <b>leaves</b> at 7:40</i>, <i>The store <b>closes</b> at nine</i>."
      ],
      ex: [
        ["We're meeting the client on Friday.", "Vamos nos reunir com o cliente na sexta."],
        ["I'm flying to Santiago on the 12th.", "Vou voar para Santiago no dia 12."],
        ["The train leaves at 7:40.", "O trem sai às 7h40."]
      ]
    },
    {
      def: "Em português, \"vou\" cobre os dois futuros; em inglês a escolha depende de <b>quando</b> a decisão foi tomada — antes de falar ou durante a fala.",
      form: "antes: going to · na hora: will",
      marcar: ["I'll"],
      more: [
        "## O teste de uma pergunta",
        "Pergunte-se: eu já tinha decidido isso antes de abrir a boca? Se sim, <b>going to</b>. Se a decisão nasceu agora, <b>will</b>.",
        "## Lado a lado",
        "<i>— Why are you going to the bank? — I<b>'m going to</b> open an account</i> (já estava decidido).",
        "<i>— The printer is out of paper. — OK, I<b>'ll</b> buy some</i> (decidi agora).",
        "## Onde os dois servem",
        "Em previsão, os dois aparecem: <i>It <b>will</b> rain</i> e <i>It<b>'s going to</b> rain</i>. A diferença é só que o <i>going to</i> sugere sinal visível.",
        "## Onde nenhum serve",
        "Depois de <i>if</i>, <i>when</i>, <i>before</i>, <i>after</i>, <i>as soon as</i>, o futuro vira presente: <i>I'll call you <b>when I arrive</b></i>, nunca <i>when I will arrive</i>."
      ],
      ex: [
        ["The phone is ringing. I'll answer it!", "O telefone está tocando. Eu atendo!"],
        ["I'm going to study English this year.", "Vou estudar inglês este ano."],
        ["I'll text you when I land.", "Te mando mensagem quando eu pousar."]
      ]
    }
  ],

  a2m4: [
    {
      def: "Para comparar, as palavras curtas mudam de forma: ganham <b>-er</b> para comparar duas coisas e <b>the ...-est</b> para apontar o extremo de um grupo.",
      form: "+er / the +est · cheaper, the cheapest",
      marcar: ["cheaper"],
      more: [
        "## Quais entram nesse grupo",
        "As de uma sílaba (<i>cheap, big, fast, long</i>) e as de duas terminadas em <b>-y</b> (<i>busy, easy, happy</i>).",
        "## A grafia",
        "Terminada em <b>e</b>, só <b>+r</b>: <i>nice → nicer</i>. Terminada em <b>y</b>, vira <b>i</b>: <i>busy → busier</i>, <i>easy → easiest</i>. Vogal + consoante única: dobra — <i>big → big<b>g</b>er</i>, <i>hot → hot<b>t</b>er</i>.",
        "## O the do superlativo",
        "O superlativo quase sempre vem com <i>the</i>, porque aponta um só: <i><b>the</b> cheapest option</i>, <i><b>the</b> fastest route</i>.",
        "## O erro comum",
        "Juntar as duas marcas: <i>more cheaper</i>, <i>the most cheapest</i>. Ou é a terminação, ou é o <i>more/most</i> — nunca os dois."
      ],
      ex: [
        ["This supplier is cheaper.", "Este fornecedor é mais barato."],
        ["The earlier flight is faster.", "O voo mais cedo é mais rápido."],
        ["It was the busiest week of the year.", "Foi a semana mais cheia do ano."]
      ]
    },
    {
      def: "As palavras longas não mudam de forma: recebem <b>more</b> na frente para comparar e <b>the most</b> para marcar o extremo.",
      form: "more / the most + palavra · more expensive, the most important",
      marcar: ["the most important"],
      more: [
        "## Quais entram nesse grupo",
        "As de três sílabas ou mais (<i>expensive, important, interesting, difficult</i>) e a maioria das de duas sílabas que não terminam em -y (<i>useful, modern, careful</i>).",
        "## O oposto",
        "Para menos, usa-se <b>less</b> e <b>the least</b>: <i>less expensive</i>, <i>the least expensive option</i>.",
        "## Os que aceitam as duas formas",
        "Algumas de duas sílabas vivem bem dos dois jeitos: <i>simpler</i> / <i>more simple</i>, <i>quieter</i> / <i>more quiet</i>, <i>cleverer</i> / <i>more clever</i>.",
        "## O erro comum",
        "Dizer <i>expensiver</i> ou <i>importanter</i>. Palavra longa nunca ganha terminação."
      ],
      ex: [
        ["This is the most important report of the quarter.", "Este é o relatório mais importante do trimestre."],
        ["The hotel downtown is more expensive.", "O hotel do centro é mais caro."],
        ["It's the least complicated option.", "É a opção menos complicada."]
      ]
    },
    {
      def: "Três comparações não seguem nenhuma regra e precisam ser decoradas — são exatamente as mais usadas da língua.",
      form: "irregulares · better/best, worse/worst, further/furthest",
      marcar: ["the best"],
      more: [
        "## A lista",
        "<i>good → <b>better</b> → <b>the best</b></i>. <i>bad → <b>worse</b> → <b>the worst</b></i>. <i>far → <b>further</b> / <b>farther</b> → <b>the furthest</b></i>.",
        "E dois pares de quantidade: <i>much / many → <b>more</b> → <b>the most</b></i>; <i>little → <b>less</b> → <b>the least</b></i>; <i>few → <b>fewer</b> → <b>the fewest</b></i>.",
        "## Com advérbio também",
        "<i>She speaks English <b>better</b> than me</i>, <i>It works <b>worse</b> than before</i>.",
        "## O erro comum",
        "<i>more better</i> e <i>the most best</i> não existem — <i>better</i> e <i>best</i> já são a forma comparada."
      ],
      ex: [
        ["This is the best proposal we received.", "Esta é a melhor proposta que recebemos."],
        ["The signal is worse in this room.", "O sinal é pior nesta sala."],
        ["The airport is further than I thought.", "O aeroporto é mais longe do que eu pensava."]
      ]
    },
    {
      def: "Comparar precisa de uma palavra que ligue os dois lados: <b>than</b> quando um supera o outro, e <b>as ... as</b> quando os dois empatam.",
      form: "than · as + palavra + as",
      marcar: ["as fast as"],
      more: [
        "## than marca a diferença",
        "<i>cheaper <b>than</b> the other one</i>, <i>more expensive <b>than</b> last year</i>. Depois de <i>than</i>, o inglês cuidado pede o pronome de sujeito (<i>than I am</i>), mas na fala se usa <i>than me</i>.",
        "## as ... as marca a igualdade",
        "A palavra fica na forma pura entre os dois <i>as</i>: <i>as <b>fast</b> as</i>, <i>as <b>expensive</b> as</i> — nunca <i>as faster as</i>.",
        "## A negativa do empate",
        "<i>not as ... as</i> diz que é menos: <i>This one isn't <b>as fast as</b> the old one</i> = é mais lento.",
        "## Para reforçar",
        "<i>much</i>, <i>a lot</i> e <i>far</i> intensificam: <i><b>much</b> cheaper</i>, <i><b>far</b> more expensive</i>. Para suavizar, <i>a bit</i> ou <i>slightly</i>: <i><b>a bit</b> more expensive</i>."
      ],
      ex: [
        ["It's as fast as the old one.", "É tão rápido quanto o antigo."],
        ["This option is much cheaper than that one.", "Esta opção é muito mais barata do que aquela."],
        ["The room isn't as quiet as I expected.", "O quarto não é tão silencioso quanto eu esperava."]
      ]
    }
  ],

  s5: [
    {
      def: "<b>At</b> marca um <b>ponto</b>: a hora exata no relógio ou o lugar visto como um ponto no mapa, sem interessar se você está dentro ou fora dele.",
      form: "at + hora, ponto no espaço · at 7 a.m., at work, at the bus stop",
      marcar: ["at"],
      more: [
        "## No tempo",
        "Hora exata: <i>at 7 a.m.</i>, <i>at 10:30</i>. Momentos tratados como ponto: <i>at noon</i>, <i>at midnight</i>, <i>at night</i>, <i>at lunchtime</i>, <i>at the same time</i>.",
        "## No espaço",
        "Lugares vistos como endereço ou referência: <i>at the bus stop</i>, <i>at the door</i>, <i>at the airport</i>, <i>at the corner of Paulista and Consolação</i>.",
        "## At + lugar como atividade",
        "<i>at work</i>, <i>at school</i>, <i>at home</i>, <i>at the office</i> — aqui o lugar significa o que se faz nele, não o prédio.",
        "## Também em endereços de internet",
        "<i>at</i> aparece em <i>at the top of the page</i>, <i>at this address</i>."
      ],
      ex: [
        ["I'm at the bus stop.", "Estou na parada de ônibus."],
        ["The call starts at 10:30.", "A ligação começa às 10h30."],
        ["She's at work until six.", "Ela está no trabalho até as seis."]
      ]
    },
    {
      def: "<b>On</b> é a preposição do <b>dia</b> e da <b>superfície</b>: dias e datas no tempo, e contato com uma superfície no espaço — incluindo plataformas e transporte em que se anda de pé.",
      form: "on + dia, data, superfície · on Monday, on the table, on the bus",
      marcar: ["on the bus"],
      more: [
        "## No tempo",
        "Dias e datas: <i>on Monday</i>, <i>on December 25th</i>, <i>on my birthday</i>, <i>on the first day</i>. Com parte de um dia específico também: <i>on Friday <b>morning</b></i>.",
        "## No espaço",
        "Contato com superfície: <i>on the table</i>, <i>on the wall</i>, <i>on page 12</i>. Transporte coletivo em que se circula de pé: <i>on the bus</i>, <i>on the train</i>, <i>on a plane</i>.",
        "## Em meios e plataformas",
        "<i>on Instagram</i>, <i>on the phone</i>, <i>on TV</i>, <i>on the radio</i>, <i>on the website</i>, <i>on a call</i>.",
        "## O par que mais confunde",
        "<i>on the bus</i> e <i>on the train</i>, mas <i><b>in</b> a car</i> e <i><b>in</b> a taxi</i>: o critério é se você entra e senta num espaço fechado (<i>in</i>) ou circula dentro dele (<i>on</i>)."
      ],
      ex: [
        ["I study English on the bus.", "Estudo inglês no ônibus."],
        ["The invoice is due on March 10th.", "A nota vence em 10 de março."],
        ["We posted it on Instagram.", "Publicamos no Instagram."]
      ]
    },
    {
      def: "<b>In</b> é a preposição do <b>dentro</b>: períodos maiores que um dia no tempo, e espaços que envolvem no espaço.",
      form: "in + mês, ano, parte do dia, lugar fechado · in March, in 2027, in the morning",
      marcar: ["in the evening"],
      more: [
        "## No tempo",
        "Períodos longos: <i>in December</i>, <i>in 2027</i>, <i>in the summer</i>, <i>in the 90s</i>. Partes do dia: <i>in the morning</i>, <i>in the afternoon</i>, <i>in the evening</i>.",
        "<i>in</i> + tempo também significa \"daqui a\": <i>The flight leaves <b>in two hours</b></i>, <i>I'll be back <b>in a week</b></i>.",
        "## No espaço",
        "Espaços que envolvem: <i>in São Paulo</i>, <i>in the room</i>, <i>in the drawer</i>, <i>in my bag</i>, <i>in a car</i>, <i>in line</i> (na fila).",
        "## Cidade, estado, país",
        "Tudo que tem fronteira pede <i>in</i>: <i>in Recife</i>, <i>in Minas</i>, <i>in Portugal</i>. O <i>at</i> ficaria estranho porque trataria a cidade como um ponto."
      ],
      ex: [
        ["We post more in the evening.", "Publicamos mais à noite."],
        ["She's starting the new job in March.", "Ela começa o trabalho novo em março."],
        ["My boarding pass is in my bag.", "Meu cartão de embarque está na minha bolsa."]
      ]
    },
    {
      def: "Alguns pares fogem da lógica geral e se aprendem como expressão fixa. São poucos, e aparecem o tempo todo.",
      form: "expressões fixas · at night, on the bus, in a car",
      marcar: ["at night"],
      more: [
        "## Partes do dia",
        "<b>at night</b>, mas <b>in the morning</b>, <b>in the afternoon</b>, <b>in the evening</b>. E <i>on Friday night</i> quando o dia está dito.",
        "## Transporte",
        "<b>on</b> the bus, the train, the plane, a bike. <b>in</b> a car, a taxi, an Uber. E <b>by</b> para o meio em geral: <i>by bus</i>, <i>by car</i>, <i>by plane</i> — sem artigo.",
        "## Fim de semana e feriado",
        "<i><b>on</b> the weekend</i> nos EUA, <i><b>at</b> the weekend</i> no Reino Unido. <i>at Christmas</i> para a época, <i>on Christmas Day</i> para o dia.",
        "## Sem preposição nenhuma",
        "<i>today</i>, <i>tomorrow</i>, <i>yesterday</i>, <i>tonight</i>, <i>this week</i>, <i>next Monday</i>, <i>last year</i> vão sozinhos: <i>See you <b>next Monday</b></i>."
      ],
      ex: [
        ["I usually study at night.", "Costumo estudar à noite."],
        ["We go to the office by bus.", "Vamos ao escritório de ônibus."],
        ["I'll call you tomorrow morning.", "Te ligo amanhã de manhã."]
      ]
    }
  ],

  a2m5: [
    {
      def: "<b>Some</b> indica uma quantidade indefinida que existe — sem dizer quanto. É a palavra da frase afirmativa e do convite.",
      form: "some + plural ou incontável · some clients, some coffee",
      marcar: ["some"],
      more: [
        "## Onde entra",
        "Afirmativa: <i>We have <b>some</b> new clients</i>, <i>There's <b>some</b> milk in the fridge</i>. Oferta e pedido: <i>Would you like <b>some</b> coffee?</i>, <i>Can I have <b>some</b> water?</i>",
        "## Serve para os dois tipos",
        "Com contáveis no plural (<i>some emails</i>) e com incontáveis (<i>some information</i>, <i>some help</i>). Nunca com contável no singular — aí o certo é <i>a</i> / <i>an</i>.",
        "## Em pergunta, muda o sentido",
        "<i>Do you have <b>any</b> questions?</i> é a pergunta aberta. <i>Would you like <b>some</b> tea?</i> já é oferta — quem pergunta espera um sim.",
        "## Sozinho",
        "Pode ficar sem substantivo quando já se sabe do que se fala: <i>I need paper. Do we have <b>some</b>?</i>"
      ],
      ex: [
        ["We have some new clients this month.", "Temos alguns clientes novos este mês."],
        ["Would you like some coffee?", "Você aceita um café?"],
        ["I need some help with the form.", "Preciso de ajuda com o formulário."]
      ]
    },
    {
      def: "<b>Any</b> é o par de <i>some</i> para a <b>negativa</b> e a <b>pergunta</b>: pergunta se existe algum, ou afirma que não existe nenhum.",
      form: "any + plural ou incontável · any questions, any paper",
      marcar: ["any"],
      more: [
        "## Onde entra",
        "Pergunta: <i>Do you have <b>any</b> questions?</i>, <i>Is there <b>any</b> coffee?</i> Negativa: <i>We don't have <b>any</b> paper</i>, <i>There aren't <b>any</b> seats left</i>.",
        "## Any ou no",
        "<i>We don't have <b>any</b> time</i> e <i>We have <b>no</b> time</i> dizem a mesma coisa; a segunda é mais curta e mais enfática. Mas só uma negação por frase: <i>We don't have no time</i> é erro.",
        "## Em afirmativa, significa 'qualquer'",
        "<i>Call me at <b>any</b> time</i> (a qualquer hora), <i><b>Any</b> of these rooms works</i> (qualquer uma serve).",
        "## Os compostos",
        "<i>something / anything</i>, <i>someone / anyone</i>, <i>somewhere / anywhere</i> seguem a mesma lógica: <i>Is there <b>anything</b> else?</i>, <i>I didn't see <b>anyone</b></i>."
      ],
      ex: [
        ["We don't have any paper.", "Não temos papel nenhum."],
        ["Do you have any questions?", "Você tem alguma pergunta?"],
        ["Call me at any time.", "Me ligue a qualquer hora."]
      ]
    },
    {
      def: "<b>Many</b> e <b>much</b> dizem \"muito\", mas se dividem pelo tipo de substantivo: <i>many</i> para o que se conta, <i>much</i> para o que não se conta.",
      form: "many + contável · much + incontável",
      marcar: ["much"],
      more: [
        "## A divisão",
        "<b>many</b> + plural: <i>many emails</i>, <i>many people</i>, <i>many options</i>.",
        "<b>much</b> + incontável: <i>much time</i>, <i>much money</i>, <i>much information</i>, <i>much work</i>.",
        "## Much vive na negativa e na pergunta",
        "<i>I don't have <b>much</b> time</i>, <i>How <b>much</b> does it cost?</i> Na afirmativa soa formal e raro — ali se prefere <i>a lot of</i>: <i>I have <b>a lot of</b> work</i>, não <i>I have much work</i>.",
        "## Os incontáveis que pegam de surpresa",
        "Em inglês não se contam: <i>information</i>, <i>advice</i>, <i>news</i>, <i>furniture</i>, <i>luggage</i>, <i>money</i>, <i>bread</i>, <i>traffic</i>, <i>work</i>. Para contar, usa-se uma medida: <i>a piece of advice</i>, <i>two pieces of luggage</i>.",
        "## O par de 'pouco'",
        "<i>few</i> + contável (<i>few emails</i>), <i>little</i> + incontável (<i>little time</i>). Com <i>a</i>, o tom muda de negativo para positivo: <i><b>a few</b> emails</i> = alguns; <i><b>a little</b> time</i> = um pouco."
      ],
      ex: [
        ["I don't have much time today.", "Não tenho muito tempo hoje."],
        ["How many emails did you get?", "Quantos e-mails você recebeu?"],
        ["She gave me a lot of useful advice.", "Ela me deu muitos conselhos úteis."]
      ]
    },
    {
      def: "<b>A lot of</b> é a forma neutra de dizer \"muito\" ou \"muitos\": serve para contáveis e incontáveis, e cabe em qualquer tipo de frase.",
      form: "a lot of + qualquer substantivo · a lot of work, a lot of emails",
      marcar: ["a lot of"],
      more: [
        "## Por que é a escolha segura",
        "Não exige decidir entre <i>many</i> e <i>much</i>: <i>a lot of work</i>, <i>a lot of emails</i>, <i>a lot of time</i>, <i>a lot of people</i> — tudo funciona.",
        "## Sem substantivo, perde o of",
        "<i>I have <b>a lot</b> to do</i>, <i>Thanks <b>a lot</b></i>. O <i>of</i> só aparece quando vem o substantivo.",
        "## Os parentes",
        "<i>lots of</i> é a versão informal e igual em sentido. <i>plenty of</i> significa muito e de sobra: <i>We have <b>plenty of</b> time</i>.",
        "## Em texto formal",
        "<i>a lot of</i> soa conversado; na escrita formal preferem-se <i>many</i>, <i>much</i>, <i>a large number of</i> ou <i>a significant amount of</i>."
      ],
      ex: [
        ["I have a lot of work today.", "Tenho muito trabalho hoje."],
        ["There were a lot of people at the gate.", "Tinha muita gente no portão."],
        ["Thanks a lot for the help.", "Muito obrigado pela ajuda."]
      ]
    },
    {
      def: "Para perguntar quantidade, a mesma divisão volta: <b>How many</b> para o que se conta, <b>How much</b> para o que não se conta — e para preço.",
      form: "How many + plural · How much + incontável",
      marcar: ["How much"],
      more: [
        "## As duas perguntas",
        "<i><b>How many</b> orders did we get?</i>, <i><b>How many</b> nights?</i>, <i><b>How many</b> people are coming?</i>",
        "<i><b>How much</b> time do we have?</i>, <i><b>How much</b> luggage can I take?</i>",
        "## Preço é sempre how much",
        "<i><b>How much</b> is it?</i>, <i><b>How much</b> does this software cost?</i>, <i><b>How much</b> was the ticket?</i> — mesmo quando a resposta é um número contável de reais.",
        "## Sem substantivo",
        "Quando o assunto já está claro, o substantivo cai: <i>— We need chairs. — <b>How many</b>?</i>",
        "## Outras perguntas de medida",
        "<i>How long</i> (duração), <i>How far</i> (distância), <i>How often</i> (frequência): <i><b>How long</b> is the flight?</i>, <i><b>How often</b> do you travel?</i>"
      ],
      ex: [
        ["How much does this software cost?", "Quanto custa este software?"],
        ["How many nights will you stay?", "Quantas noites você vai ficar?"],
        ["How long is the layover?", "Quanto tempo é a conexão?"]
      ]
    }
  ],

  s2: [
    {
      def: "<b>Already</b> diz que algo aconteceu <b>antes do esperado</b> ou antes do momento da fala. Vem no meio da frase, entre o auxiliar e o particípio.",
      form: "have / has + already + particípio · I've already sent",
      marcar: ["already"],
      more: [
        "## A posição",
        "O lugar natural é depois do auxiliar: <i>I've <b>already</b> sent the photos</i>, <i>She has <b>already</b> left</i>. No fim da frase também aparece, com tom de surpresa: <i>You've finished <b>already</b>?</i>",
        "## O sentido de antecipação",
        "<i>Already</i> carrega a ideia de \"antes do previsto\". <i>The package has <b>already</b> arrived</i> sugere que chegou mais rápido do que se esperava.",
        "## Em pergunta",
        "Perguntar com <i>already</i> expressa espanto: <i>Have you <b>already</b> finished?</i> (tão rápido?). A pergunta neutra usa <i>yet</i>.",
        "## O erro comum",
        "Pôr <i>already</i> antes do auxiliar: <i>I already have sent</i> aparece na fala americana, mas a forma segura é <i>I have already sent</i>."
      ],
      ex: [
        ["I've already sent the photos.", "Já mandei as fotos."],
        ["We've already paid the invoice.", "Já pagamos a nota."],
        ["She's already checked in.", "Ela já fez o check-in."]
      ]
    },
    {
      def: "<b>Yet</b> aponta para algo que <b>ainda não aconteceu, mas é esperado</b>. Vive na negativa e na pergunta, e fica no fim da frase.",
      form: "negativa / pergunta + yet (no fim) · haven't finished yet",
      marcar: ["yet"],
      more: [
        "## Os dois usos",
        "Negativa = ainda não: <i>I haven't finished the video <b>yet</b></i>. Pergunta = já: <i>Have you sent it <b>yet</b>?</i>",
        "## Sempre no fim",
        "O lugar de <i>yet</i> é o fim da frase. Em texto formal pode aparecer antes do particípio (<i>I have not yet received it</i>), mas isso é registro escrito.",
        "## A expectativa",
        "<i>Yet</i> pressupõe que a coisa vai acontecer. <i>The client hasn't replied <b>yet</b></i> = a resposta é esperada. Sem essa expectativa, usa-se só <i>not</i>: <i>He hasn't replied</i>.",
        "## Still not × not yet",
        "<i>He <b>still hasn't</b> replied</i> acrescenta impaciência; <i>He <b>hasn't</b> replied <b>yet</b></i> é neutro."
      ],
      ex: [
        ["I haven't finished the video yet.", "Ainda não terminei o vídeo."],
        ["Has the client replied yet?", "O cliente já respondeu?"],
        ["We haven't boarded yet.", "Ainda não embarcamos."]
      ]
    },
    {
      def: "<b>Just</b> marca o que aconteceu <b>agora há pouco</b> — minutos, não horas. Entra entre o auxiliar e o particípio.",
      form: "have / has + just + particípio · I've just sent",
      marcar: ["just"],
      more: [
        "## O intervalo",
        "<i>Just</i> é o passado recentíssimo: <i>I've <b>just</b> sent the file</i> (há instantes). Para um passado recente mas não imediato, usa-se <i>recently</i> ou <i>lately</i>.",
        "## No inglês americano",
        "É comum ouvir o passado simples no lugar: <i>I <b>just</b> sent the file</i>. No britânico, o present perfect é o padrão.",
        "## Os outros sentidos de just",
        "A mesma palavra também significa \"apenas\" (<i>It's <b>just</b> a draft</i>) e \"exatamente\" (<i><b>just</b> what I needed</i>). O lugar na frase e o contexto separam os sentidos.",
        "## A ordem com already e yet",
        "Os três dividem a mesma lógica de tempo: <i>just</i> = agorinha, <i>already</i> = antes do esperado, <i>yet</i> = ainda não."
      ],
      ex: [
        ["I've just sent the file.", "Acabei de mandar o arquivo."],
        ["She's just left the office.", "Ela acabou de sair do escritório."],
        ["We've just landed.", "Acabamos de pousar."]
      ]
    },
    {
      def: "<b>Ever</b> e <b>never</b> falam de <b>experiência de vida</b>, sem data: alguma vez até hoje, ou nenhuma vez até hoje.",
      form: "Have you ever...? · I've never...",
      marcar: ["ever"],
      more: [
        "## Ever só em pergunta",
        "<i>Have you <b>ever</b> used After Effects?</i> = em algum momento da sua vida. Em afirmativa, <i>ever</i> praticamente não aparece sozinho.",
        "## Never já é negativo",
        "<i>I've <b>never</b> been to Japan</i> — não entra outro <i>not</i>. <i>I haven't never been</i> é dupla negação, que o inglês não aceita.",
        "## Sem data, nunca",
        "Essas frases falam da vida inteira, então não combinam com momento fechado. Se a data entra, o tempo troca: <i>I went to Japan <b>in 2019</b></i>.",
        "## Os parceiros de obra",
        "<i>the first time</i>, <i>once</i>, <i>twice</i>, <i>three times</i> e <i>before</i> andam com esse tempo: <i>It's the first time I've flown business</i>, <i>I've been there <b>twice</b></i>."
      ],
      ex: [
        ["Have you ever used After Effects?", "Você já usou o After Effects?"],
        ["I've never missed a deadline.", "Nunca perdi um prazo."],
        ["She's been to London twice.", "Ela já foi a Londres duas vezes."]
      ]
    },
    {
      def: "<b>For</b> e <b>since</b> medem o mesmo tempo de dois jeitos: <i>for</i> conta a <b>duração</b>, <i>since</i> aponta o <b>começo</b>.",
      form: "for + duração · since + ponto de partida",
      marcar: ["since"],
      more: [
        "## A diferença em uma linha",
        "<i><b>for</b> two weeks</i> = o tamanho do período. <i><b>since</b> October</i> = o momento em que começou.",
        "## O que vem depois de cada um",
        "<i>for</i> + quantidade de tempo: <i>for three days</i>, <i>for a long time</i>, <i>for ten years</i>.",
        "<i>since</i> + marco no tempo: <i>since Monday</i>, <i>since 2024</i>, <i>since I moved here</i>, <i>since the last meeting</i>.",
        "## O teste",
        "Se dá para perguntar <i>How long?</i> e responder com um número de tempo, é <i>for</i>. Se a resposta é uma data ou um evento, é <i>since</i>.",
        "## O tempo verbal que pede since",
        "<i>Since</i> praticamente só aparece com present perfect, porque implica que a situação continua: <i>I've worked here <b>since</b> October</i>."
      ],
      ex: [
        ["I've worked here since October.", "Trabalho aqui desde outubro."],
        ["We've been partners for five years.", "Somos parceiros há cinco anos."],
        ["She hasn't called since Monday.", "Ela não liga desde segunda."]
      ]
    },
    {
      def: "O \"faz tanto tempo que...\" do português vira <b>present perfect + for</b> em inglês, porque a situação começou antes e <b>continua</b> valendo.",
      form: "have / has + particípio + for · I've lived here for three years",
      marcar: ["for three years"],
      more: [
        "## Por que não é presente",
        "Em português o presente serve: \"moro aqui há três anos\". Em inglês, <i>I live here for three years</i> está errado — o verbo precisa mostrar que a ação atravessou o tempo: <i>I<b>'ve lived</b> here for three years</i>.",
        "## As três formas de dizer o mesmo",
        "<i>I've lived here <b>for</b> three years</i>. <i>I've lived here <b>since</b> 2023</i>. <i><b>It's been</b> three years <b>since</b> I moved here</i>.",
        "## Com verbo de ação, cabe o contínuo",
        "<i>I've <b>been working</b> here for three years</i> dá mais ênfase à continuidade. Com <i>live</i>, <i>work</i> e <i>study</i> as duas formas valem.",
        "## E se já acabou",
        "Se a situação terminou, volta o passado simples: <i>I <b>lived</b> there <b>for</b> three years</i> (não moro mais)."
      ],
      ex: [
        ["I've lived here for three years.", "Moro aqui há três anos."],
        ["He's been with the company for a decade.", "Ele está na empresa há uma década."],
        ["It's been two hours since we boarded.", "Faz duas horas que embarcamos."]
      ]
    }
  ],

  b1m3: [
    {
      def: "O passado contínuo mostra uma ação <b>em andamento</b> em um momento do passado — o cenário de fundo onde outra coisa aconteceu.",
      form: "was / were + verbo-ing · I was writing",
      marcar: ["was writing"],
      more: [
        "## O molde típico",
        "Uma ação longa é interrompida por uma curta: <i>I <b>was writing</b> an email <b>when</b> the client <b>called</b></i>. A longa vai no contínuo, a curta no passado simples.",
        "## Para descrever cenário",
        "Também serve para pintar o ambiente de uma história: <i>It <b>was raining</b> and nobody <b>was talking</b></i>.",
        "## Duas ações ao mesmo tempo",
        "<i>While I <b>was driving</b>, she <b>was looking</b> at the map</i> — as duas correndo em paralelo.",
        "## O contraste que importa",
        "<i>I <b>was reading</b> the contract</i> (no meio, não se sabe se terminou) × <i>I <b>read</b> the contract</i> (li inteiro, está feito)."
      ],
      ex: [
        ["I was writing an email when the client called.", "Eu estava escrevendo um e-mail quando o cliente ligou."],
        ["It was raining when we landed.", "Estava chovendo quando pousamos."],
        ["They were waiting for us at the gate.", "Eles estavam nos esperando no portão."]
      ]
    },
    {
      def: "<b>When</b> e <b>while</b> organizam duas ações no passado: <i>when</i> apresenta a que <b>interrompe</b>, <i>while</i> apresenta a que estava <b>correndo</b>.",
      form: "when + passado simples · while + passado contínuo",
      marcar: ["While", "was driving"],
      more: [
        "## Quem vai com quem",
        "<i><b>While</b> I was driving, my phone rang</i> — <i>while</i> + ação longa. <i>I was driving <b>when</b> my phone rang</i> — <i>when</i> + ação curta.",
        "## A ordem é livre",
        "As duas metades podem trocar de lugar; quando a oração com <i>when</i> ou <i>while</i> vem primeiro, entra vírgula: <i>When he called, I was driving</i>.",
        "## When com dois simples",
        "Se as duas ações são curtas e uma segue a outra, os dois verbos ficam no passado simples: <i>When she <b>arrived</b>, we <b>started</b> the meeting</i>.",
        "## As alternativas",
        "<i>as</i> funciona como <i>while</i> (<i>As I was leaving...</i>), e <i>during</i> vem antes de substantivo, não de frase: <i><b>during</b> the flight</i>, nunca <i>during I was flying</i>."
      ],
      ex: [
        ["While I was driving, my phone rang.", "Enquanto eu dirigia, meu telefone tocou."],
        ["I was checking in when they announced the delay.", "Eu estava fazendo o check-in quando anunciaram o atraso."],
        ["When she arrived, we started the meeting.", "Quando ela chegou, começamos a reunião."]
      ]
    },
    {
      def: "<b>Used to</b> fala de hábito ou situação do passado que <b>não vale mais</b>. O contraste com o presente está embutido na expressão.",
      form: "used to + verbo puro · I used to work",
      marcar: ["used to"],
      more: [
        "## O que ele diz sem dizer",
        "<i>I <b>used to</b> work in a bank</i> informa duas coisas: trabalhei em banco e não trabalho mais. Essa segunda parte não precisa ser escrita.",
        "## Hábito e estado",
        "Serve para os dois: <i>I used to <b>smoke</b></i> (hábito), <i>She used to <b>be</b> shy</i> (estado), <i>There used to <b>be</b> a café here</i> (existência).",
        "## Os primos",
        "<i>would</i> também conta hábito antigo, mas só de ação repetida: <i>Every summer we <b>would</b> drive to the coast</i> — com estado não funciona (<i>I would be shy</i> está errado).",
        "## Não confundir com be used to",
        "<i>I<b>'m used to</b> working late</i> = estou acostumado (presente, + -ing). <i>I <b>used to</b> work late</i> = costumava (passado, + verbo puro)."
      ],
      ex: [
        ["I used to work in a bank.", "Eu trabalhava em banco."],
        ["There used to be a café on this corner.", "Tinha um café nesta esquina."],
        ["We used to travel more before the kids.", "Viajávamos mais antes das crianças."]
      ]
    },
    {
      def: "Na negativa e na pergunta, <b>used to</b> se apoia no <i>did</i> — e o <b>d</b> do <i>used</i> cai, porque o passado já está no auxiliar.",
      form: "didn't use to · Did you use to...?",
      marcar: ["didn't use to"],
      more: [
        "## A grafia sem d",
        "<i>She <b>didn't use to</b> like meetings</i>, <i><b>Did</b> you <b>use to</b> live abroad?</i> Escrever <i>didn't used to</i> é comum até entre nativos, mas a forma correta é sem o d.",
        "## O jeito mais simples de negar",
        "Muitas vezes se prefere <i>never</i> com o passado simples: <i>She <b>never liked</b> meetings</i> — mais curto e sem a dúvida da grafia.",
        "## A pergunta alternativa",
        "<i>Did you use to...?</i> funciona, mas na conversa é mais comum <i>Were you...?</i> ou o passado simples com <i>before</i>: <i>Where did you work <b>before</b>?</i>"
      ],
      ex: [
        ["She didn't use to like meetings.", "Ela não gostava de reuniões."],
        ["Did you use to live abroad?", "Você morava fora?"],
        ["I never used to check email at night.", "Eu nunca checava e-mail à noite."]
      ]
    }
  ],

  s3: [
    {
      def: "Para o que <b>pode acontecer de verdade</b>, o inglês põe o <i>if</i> no presente e a consequência no futuro. O <i>if</i> nunca leva <i>will</i>.",
      form: "if + presente, will + verbo puro · If it rains, I'll take an Uber",
      marcar: ["If it rains", "I'll"],
      more: [
        "## As duas metades",
        "A condição real fica no presente simples: <i><b>If it rains</b></i>. O resultado vai para o futuro: <i><b>I'll take</b> an Uber</i>. A ordem pode inverter, e aí a vírgula desaparece: <i>I'll take an Uber if it rains</i>.",
        "## Por que o if não aceita will",
        "O <i>if</i> já marca que a coisa é incerta; repetir a incerteza no verbo é redundante. <i>If it will rain</i> é erro.",
        "## O que mais cabe no lugar do will",
        "<i>can</i>, <i>may</i>, <i>might</i>, <i>should</i> e o imperativo: <i>If you finish early, <b>you can</b> go</i>, <i>If you need help, <b>call</b> me</i>.",
        "## When no lugar de if",
        "<i>If</i> é possibilidade; <i>when</i> é certeza. <i><b>If</b> I see her, I'll tell her</i> (talvez eu veja) × <i><b>When</b> I see her, I'll tell her</i> (vou vê-la). Os dois seguem a mesma regra: presente depois da conjunção."
      ],
      ex: [
        ["If it rains, I'll take an Uber.", "Se chover, vou pegar um Uber."],
        ["If the client agrees, we'll start on Monday.", "Se o cliente concordar, começamos na segunda."],
        ["I'll call you when I land.", "Te ligo quando pousar."]
      ]
    },
    {
      def: "Para o que é <b>imaginário ou improvável</b>, o verbo recua um tempo: o <i>if</i> vai para o passado e a consequência usa <b>would</b>.",
      form: "if + passado, would + verbo puro · If I had a car, I would drive",
      marcar: ["If I had", "would"],
      more: [
        "## O passado que não é passado",
        "<i>If I <b>had</b> a car</i> não fala de ontem: fala de agora, imaginando outra realidade. O passado aqui é a marca da hipótese.",
        "## O were de todas as pessoas",
        "Com <i>to be</i>, o inglês cuidadoso usa <i>were</i> para todo mundo: <i>If I <b>were</b> you, I'd take the earlier flight</i>. <i>If I was</i> aparece na fala, mas <i>were</i> é a forma consagrada — e <i>If I were you</i> é a maneira padrão de dar conselho.",
        "## Would, could, might",
        "O resultado muda de cor conforme o modal: <i>I <b>would</b> drive</i> (eu dirigiria), <i>I <b>could</b> drive</i> (eu poderia), <i>I <b>might</b> drive</i> (talvez eu dirigisse).",
        "## O erro comum",
        "Pôr <i>would</i> nas duas metades. <i>If I would have a car</i> está errado; o <i>would</i> pertence só ao resultado."
      ],
      ex: [
        ["If I had a car, I would drive to work.", "Se eu tivesse carro, iria dirigindo para o trabalho."],
        ["If I were you, I'd ask for a discount.", "Se eu fosse você, pediria desconto."],
        ["We'd hire two more people if we had the budget.", "Contrataríamos duas pessoas mais se tivéssemos o orçamento."]
      ]
    },
    {
      def: "Para o que <b>já passou e não aconteceu</b>, os dois lados recuam mais um passo: <b>had + particípio</b> na condição e <b>would have + particípio</b> no resultado.",
      form: "if + had + particípio, would have + particípio",
      marcar: ["If I had saved", "wouldn't have"],
      more: [
        "## O arrependimento",
        "É o tempo do que não deu: <i>If I <b>had saved</b> the project, I <b>wouldn't have lost</b> it</i> — não salvei, e perdi. A frase descreve um passado alternativo que não existiu.",
        "## As contrações que se ouvem",
        "<i>I'd have</i> (= I would have) e <i>would've</i> na fala rápida. A negativa: <i>wouldn't have</i>.",
        "## Com could e might",
        "<i>I <b>could have</b> helped you</i> (teria podido), <i>She <b>might have</b> come</i> (talvez tivesse vindo).",
        "## O erro comum",
        "Trocar o <i>had</i> por <i>would have</i> na condição: <i>If I would have saved it</i> aparece na fala americana informal, mas não é aceito em escrita cuidadosa."
      ],
      ex: [
        ["If I had saved the project, I wouldn't have lost it.", "Se eu tivesse salvado o projeto, não o teria perdido."],
        ["If you had told me, I would have helped you.", "Se você tivesse me contado, eu teria ajudado."],
        ["We could have caught the flight if the taxi had arrived on time.", "Poderíamos ter pegado o voo se o táxi tivesse chegado na hora."]
      ]
    },
    {
      def: "A escolha entre os três condicionais é uma escolha sobre a <b>realidade</b>: isso ainda pode acontecer, é só imaginação, ou já passou?",
      form: "real · imaginário · perdido",
      marcar: ["If you had told me", "would have"],
      more: [
        "## As três perguntas",
        "Ainda pode acontecer? → <i>if</i> + presente, <i>will</i>.",
        "É imaginação sobre agora? → <i>if</i> + passado, <i>would</i>.",
        "Já passou e não foi? → <i>if</i> + <i>had</i> + particípio, <i>would have</i> + particípio.",
        "## O que o português entrega",
        "A terminação do verbo em português costuma dizer qual é. \"Vou / vai\" aponta o primeiro. O \"-ria\" (faria, iria, seria) aponta o segundo. \"Teria feito\" aponta o terceiro.",
        "## Misturar é permitido",
        "Quando a causa está no passado e o efeito é agora, os dois lados vêm de tempos diferentes: <i>If I <b>had studied</b> English earlier, I <b>would be</b> fluent now</i>.",
        "## O zero condicional",
        "Para lei e regra, os dois lados ficam no presente: <i>If you <b>book</b> early, it <b>is</b> cheaper</i>."
      ],
      ex: [
        ["If you had told me, I would have helped you.", "Se você tivesse me contado, eu teria ajudado."],
        ["If we leave now, we'll arrive before lunch.", "Se sairmos agora, chegamos antes do almoço."],
        ["If I had studied English earlier, I would be fluent now.", "Se eu tivesse estudado inglês mais cedo, estaria fluente agora."]
      ]
    }
  ],

  s6: [
    {
      def: "Alguns verbos pedem o próximo verbo em <b>-ing</b>. Não há lógica a deduzir: a lista se aprende, e ela é curta.",
      form: "verbo + verbo-ing · enjoy, finish, avoid, keep, mind, suggest",
      marcar: ["editing"],
      more: [
        "## A lista principal",
        "<i>enjoy</i>, <i>finish</i>, <i>avoid</i>, <i>keep</i>, <i>mind</i>, <i>suggest</i>, <i>recommend</i>, <i>consider</i>, <i>practise</i>, <i>spend time</i>, <i>give up</i>, <i>look forward to</i>.",
        "## Como aparecem na vida real",
        "<i>I <b>enjoy editing</b> videos</i>, <i>Do you <b>mind waiting</b> ten minutes?</i>, <i>She <b>suggested changing</b> the deadline</i>, <i>I'm <b>looking forward to meeting</b> you</i>.",
        "## O -ing também é o sujeito",
        "No começo da frase, o verbo em -ing funciona como substantivo: <i><b>Editing</b> takes time</i>, <i><b>Travelling</b> for work is tiring</i>.",
        "## O erro comum",
        "<i>I enjoy to edit</i> e <i>I suggest to change</i> soam estranhos. Esses verbos não aceitam o <i>to</i>."
      ],
      ex: [
        ["I enjoy editing videos.", "Gosto de editar vídeos."],
        ["Do you mind waiting ten minutes?", "Você se incomoda de esperar dez minutos?"],
        ["She suggested changing the deadline.", "Ela sugeriu mudar o prazo."]
      ]
    },
    {
      def: "Outros verbos pedem <b>to + verbo puro</b>. Em geral são os que apontam para frente: vontade, decisão, plano, esperança.",
      form: "verbo + to + verbo puro · want, need, decide, plan, hope, learn",
      marcar: ["to learn"],
      more: [
        "## A lista principal",
        "<i>want</i>, <i>need</i>, <i>decide</i>, <i>plan</i>, <i>hope</i>, <i>learn</i>, <i>try</i>, <i>offer</i>, <i>promise</i>, <i>agree</i>, <i>refuse</i>, <i>manage</i>, <i>expect</i>, <i>would like</i>.",
        "## Alguns pedem alguém no meio",
        "<i>ask</i>, <i>tell</i>, <i>want</i>, <i>invite</i>, <i>remind</i> e <i>allow</i> aceitam uma pessoa antes do <i>to</i>: <i>She <b>asked me to</b> send it</i>, <i>They <b>invited us to</b> join the call</i>.",
        "## Para dizer a finalidade",
        "O <i>to</i> também significa \"para\": <i>I called <b>to confirm</b> the booking</i> = liguei para confirmar.",
        "## O erro comum",
        "Pôr <i>-ing</i> depois desses verbos: <i>I want going</i>, <i>I need speaking</i>. O certo é <i>I want to go</i>, <i>I need to speak</i>."
      ],
      ex: [
        ["I want to learn Excel.", "Quero aprender Excel."],
        ["We decided to postpone the trip.", "Decidimos adiar a viagem."],
        ["She asked me to send the invoice.", "Ela me pediu para mandar a nota."]
      ]
    },
    {
      def: "Com um grupo de verbos de <b>gosto</b> e <b>começo</b>, as duas formas servem e o sentido praticamente não muda.",
      form: "-ing ou to · like, love, hate, prefer, start, begin, continue",
      marcar: ["editing"],
      more: [
        "## Os dois caminhos",
        "<i>I <b>love editing</b></i> e <i>I <b>love to edit</b></i> dizem a mesma coisa. O mesmo vale para <i>like</i>, <i>hate</i>, <i>prefer</i>, <i>start</i>, <i>begin</i> e <i>continue</i>.",
        "## A nuance sutil",
        "O <i>-ing</i> tende a falar da experiência em si e do hábito; o <i>to</i>, de uma escolha ou preferência. <i>I like <b>swimming</b></i> (gosto de nadar) × <i>I like <b>to swim</b> before work</i> (escolho nadar antes do trabalho).",
        "## O detalhe de would like",
        "Com <i>would</i>, só o <i>to</i> funciona: <i>I<b>'d like to</b> go</i>, nunca <i>I'd like going</i>.",
        "## Onde a escolha muda tudo",
        "Em quatro verbos o sentido vira outro: <i>stop</i>, <i>remember</i>, <i>forget</i> e <i>try</i>. Esses têm cartão próprio."
      ],
      ex: [
        ["I love editing on the weekend.", "Adoro editar no fim de semana."],
        ["She started to learn German last year.", "Ela começou a aprender alemão ano passado."],
        ["I'd like to see the room first.", "Gostaria de ver o quarto primeiro."]
      ]
    },
    {
      def: "Depois de <b>preposição</b>, o verbo vai sempre para o <b>-ing</b>. Essa regra não tem exceção — é a mais confiável do assunto.",
      form: "preposição + verbo-ing · good at, thanks for, before, after",
      marcar: ["helping"],
      more: [
        "## As combinações frequentes",
        "<i>Thanks <b>for</b> help<b>ing</b></i>, <i>good <b>at</b> speak<b>ing</b></i>, <i>interested <b>in</b> work<b>ing</b></i>, <i>before leav<b>ing</b></i>, <i>after check<b>ing</b></i>, <i>instead <b>of</b> call<b>ing</b></i>, <i>tired <b>of</b> wait<b>ing</b></i>.",
        "## O to que é preposição",
        "Em algumas expressões o <i>to</i> é preposição, não parte do infinitivo — e aí pede <i>-ing</i>: <i>look forward <b>to</b> meeting you</i>, <i>be used <b>to</b> working late</i>, <i>object <b>to</b> paying extra</i>.",
        "## O teste",
        "Se depois do <i>to</i> cabe um substantivo (<i>look forward to the trip</i>), o <i>to</i> é preposição e o verbo vai em <i>-ing</i>.",
        "## O erro comum",
        "<i>Thanks for help me</i> e <i>I'm good at speak English</i>. Toda preposição pede o <i>-ing</i>."
      ],
      ex: [
        ["Thanks for helping me.", "Obrigado por me ajudar."],
        ["She's good at negotiating prices.", "Ela é boa em negociar preços."],
        ["Check the gate before boarding.", "Confira o portão antes de embarcar."]
      ]
    },
    {
      def: "<b>Would like</b> e <b>would love</b> transformam o desejo em pedido educado. Pedem sempre <b>to + verbo</b>.",
      form: "would like / would love + to + verbo · I'd like to work abroad",
      marcar: ["I'd like to"],
      more: [
        "## Mais educado que want",
        "<i>I <b>want</b> a coffee</i> é direto, quase brusco. <i>I<b>'d like</b> a coffee</i> é o que se diz num café ou numa reunião.",
        "## Com substantivo ou com verbo",
        "<i>I'd like <b>the window seat</b></i> (substantivo) ou <i>I'd like <b>to change</b> my seat</i> (verbo com <i>to</i>).",
        "## Para oferecer e convidar",
        "<i><b>Would you like</b> some coffee?</i>, <i><b>Would you like to</b> join the call?</i> — a forma padrão de oferecer qualquer coisa em inglês.",
        "## Would love",
        "Mais entusiasmado: <i>I<b>'d love to</b> work abroad</i>. E <i>I'd love to</i> sozinho é a resposta pronta para um convite."
      ],
      ex: [
        ["I'd like to work abroad.", "Gostaria de trabalhar fora."],
        ["Would you like to join the call?", "Você gostaria de entrar na ligação?"],
        ["I'd love to see the city before the flight.", "Adoraria ver a cidade antes do voo."]
      ]
    },
    {
      def: "Em quatro verbos, escolher entre <b>-ing</b> e <b>to</b> muda o significado da frase — não é estilo, é sentido.",
      form: "stop, remember, forget, try",
      marcar: ["stopped using"],
      more: [
        "## stop",
        "<i>I <b>stopped using</b> that app</i> = parei de usar. <i>I <b>stopped to use</b> the ATM</i> = parei para usar o caixa.",
        "## remember e forget",
        "<i>I <b>remembered to send</b> it</i> = lembrei e mandei. <i>I <b>remember sending</b> it</i> = tenho a lembrança de ter mandado.",
        "<i>Don't <b>forget to lock</b> the door</i> = não esqueça de trancar. <i>I'll never <b>forget seeing</b> that</i> = nunca esquecerei de ter visto.",
        "## try",
        "<i>I <b>tried to open</b> the file</i> = tentei (e talvez não deu). <i>I <b>tried opening</b> it in another app</i> = experimentei esse caminho para ver se resolvia.",
        "## A lógica por trás",
        "O <i>to</i> aponta para frente — a ação ainda vem. O <i>-ing</i> olha para trás ou para o que já está em curso."
      ],
      ex: [
        ["I stopped using that app.", "Parei de usar aquele app."],
        ["Don't forget to confirm the booking.", "Não esqueça de confirmar a reserva."],
        ["I tried opening the file in another program.", "Tentei abrir o arquivo em outro programa."]
      ]
    }
  ],

  b1m6: [
    {
      def: "<b>Who</b> liga uma informação extra a uma <b>pessoa</b>: diz qual pessoa é, entre todas as possíveis.",
      form: "pessoa + who + verbo · the client who called",
      marcar: ["who"],
      more: [
        "## Para que serve",
        "Em vez de duas frases (<i>The client called. He is waiting.</i>), uma só: <i>The client <b>who called</b> is waiting</i>. O <i>who</i> emenda as duas e evita repetir o sujeito.",
        "## Não repita o pronome",
        "<i>The client who <b>he</b> called</i> é erro: o <i>who</i> já é o sujeito da segunda parte.",
        "## Quando a pessoa é o objeto",
        "<i>The woman <b>who</b> I met yesterday</i> — aqui o <i>who</i> pode ser trocado por <i>whom</i> na escrita formal, ou simplesmente desaparecer: <i>The woman I met yesterday</i>.",
        "## Com vírgula, muda o papel",
        "<i>My colleague <b>who</b> works in Lisbon</i> (sem vírgula) identifica qual colega. <i>My colleague, <b>who</b> works in Lisbon,</i> (com vírgula) só acrescenta uma informação sobre ele."
      ],
      ex: [
        ["The client who called is waiting.", "O cliente que ligou está esperando."],
        ["The woman who runs the agency is from Porto.", "A mulher que dirige a agência é do Porto."],
        ["I have a colleague who speaks four languages.", "Tenho um colega que fala quatro idiomas."]
      ]
    },
    {
      def: "<b>Which</b> faz o mesmo trabalho do <i>who</i>, mas para <b>coisas</b>, lugares e ideias.",
      form: "coisa + which + verbo · the report which you sent",
      marcar: ["which"],
      more: [
        "## Com coisas e conceitos",
        "<i>The report <b>which</b> you sent is great</i>, <i>The flight <b>which</b> was cancelled</i>, <i>the system <b>which</b> we use</i>.",
        "## Which pode retomar a frase inteira",
        "Depois de vírgula, resume tudo o que foi dito: <i>They changed the deadline, <b>which</b> was a problem</i> — o <i>which</i> aponta para a mudança inteira, não para um substantivo. Nessa posição o <i>that</i> não entra.",
        "## Which ou that",
        "Na fala e na escrita do dia a dia, <i>that</i> é mais comum: <i>the report <b>that</b> you sent</i>. <i>Which</i> soa mais formal, e é obrigatório depois de vírgula e de preposição (<i>the room <b>in which</b> we met</i>).",
        "## O erro comum",
        "Usar <i>which</i> para pessoa (<i>the client which called</i>). Pessoa pede <i>who</i> ou <i>that</i>."
      ],
      ex: [
        ["The report which you sent is great.", "O relatório que você mandou está ótimo."],
        ["The flight which was cancelled left at six.", "O voo que foi cancelado saía às seis."],
        ["They moved the deadline, which was a problem.", "Eles mudaram o prazo, o que foi um problema."]
      ]
    },
    {
      def: "<b>That</b> serve para pessoas e coisas, e é a escolha mais comum na conversa. É o \"que\" coringa do inglês.",
      form: "pessoa ou coisa + that · the file that I need",
      marcar: ["that"],
      more: [
        "## Onde cabe",
        "No lugar de <i>who</i> (<i>the client <b>that</b> called</i>) e de <i>which</i> (<i>the file <b>that</b> I need</i>), sempre que não há vírgula.",
        "## Onde não cabe",
        "Depois de vírgula e depois de preposição: <i>My boss, <b>who</b> is on holiday</i> (nunca <i>that</i>); <i>the room <b>in which</b></i> (nunca <i>in that</i>).",
        "## Onde é a melhor opção",
        "Depois de superlativo e de <i>all</i>, <i>everything</i>, <i>something</i>, <i>the only</i>: <i>the best thing <b>that</b> happened</i>, <i>everything <b>that</b> we discussed</i>.",
        "## Não confundir com o outro that",
        "<i>I think <b>that</b> it works</i> é outro <i>that</i> — o que introduz uma frase depois de <i>think</i>, <i>say</i>, <i>know</i>. Esse não liga substantivos."
      ],
      ex: [
        ["The file that I need is here.", "O arquivo que eu preciso está aqui."],
        ["It's the best proposal that we received.", "É a melhor proposta que recebemos."],
        ["Everything that we discussed is in the email.", "Tudo o que discutimos está no e-mail."]
      ]
    },
    {
      def: "<b>Where</b> liga uma informação a um <b>lugar</b>, substituindo a construção mais pesada com preposição.",
      form: "lugar + where + frase · the office where I work",
      marcar: ["where"],
      more: [
        "## O atalho que ele oferece",
        "<i>This is the office <b>where</b> I work</i> equivale a <i>the office <b>in which</b> I work</i> — mesma ideia, metade do peso.",
        "## Sem preposição depois",
        "<i>the hotel where we stayed</i>, não <i>the hotel where we stayed in</i>. O <i>where</i> já contém o \"em\".",
        "## Os parentes",
        "<i>when</i> faz o mesmo com tempo (<i>the day <b>when</b> we met</i>) e <i>why</i> com motivo (<i>the reason <b>why</b> he left</i>).",
        "## Lugar figurado também",
        "Serve para situações, não só endereços: <i>a meeting <b>where</b> nobody talks</i>, <i>a job <b>where</b> you travel a lot</i>."
      ],
      ex: [
        ["This is the office where I work.", "Este é o escritório onde eu trabalho."],
        ["The hotel where we stayed had no wifi.", "O hotel onde ficamos não tinha wifi."],
        ["I want a job where I can travel.", "Quero um trabalho em que eu possa viajar."]
      ]
    },
    {
      def: "<b>Whose</b> marca <b>posse</b> dentro da frase: a coisa pertence à pessoa de quem se fala.",
      form: "pessoa + whose + coisa · the colleague whose laptop broke",
      marcar: ["whose"],
      more: [
        "## Como funciona",
        "<i>She's the colleague <b>whose</b> laptop broke</i> = o laptop é dela. Depois de <i>whose</i> vem direto a coisa possuída, sem artigo.",
        "## Serve para coisas também",
        "<i>a company <b>whose</b> prices went up</i> — menos comum, mas correto. A alternativa mais leve é <i>of which</i>: <i>a company the prices <b>of which</b> went up</i> (bem formal).",
        "## Não confundir com who's",
        "<i><b>whose</b></i> = de quem; <i><b>who's</b></i> = <i>who is</i> ou <i>who has</i>. Soam igual e se escrevem diferente.",
        "## Na pergunta",
        "A mesma palavra pergunta posse: <i><b>Whose</b> bag is this?</i>"
      ],
      ex: [
        ["She's the colleague whose laptop broke.", "Ela é a colega cujo notebook quebrou."],
        ["We work with a supplier whose prices never change.", "Trabalhamos com um fornecedor cujos preços nunca mudam."],
        ["Whose passport is on the counter?", "De quem é o passaporte no balcão?"]
      ]
    },
    {
      def: "Quando o \"que\" <b>não é o sujeito</b> da segunda parte, ele pode simplesmente desaparecer. É o que os nativos fazem na maior parte do tempo.",
      form: "sem pronome · the file I need",
      marcar: ["that"],
      more: [
        "## O teste",
        "Veja o que vem depois do \"que\". Se vem um verbo, o pronome é o sujeito e <b>fica</b>: <i>the client <b>who called</b></i>. Se vem outro sujeito, o pronome <b>pode sair</b>: <i>the file <b>(that) I</b> need</i>.",
        "## Como soa",
        "<i>The file I need is here</i>, <i>The person I met yesterday</i>, <i>The hotel we booked</i> — natural e mais leve que a versão completa.",
        "## Quando não pode sair",
        "Depois de vírgula (<i>My boss, who is on holiday,</i>) e quando o pronome é o sujeito. Nesses dois casos a omissão deixa a frase quebrada.",
        "## A preposição que sobra no fim",
        "Ao omitir o pronome, a preposição vai para o fim: <i>the room <b>we met in</b></i>, <i>the person <b>I talked to</b></i> — normal e correto na conversa."
      ],
      ex: [
        ["The file I need is here.", "O arquivo que eu preciso está aqui."],
        ["The hotel we booked is near the airport.", "O hotel que reservamos é perto do aeroporto."],
        ["That's the person I talked to.", "Essa é a pessoa com quem falei."]
      ]
    }
  ],

  s9: [
    {
      def: "<b>Should</b> dá conselho e recomendação: a melhor coisa a fazer, na sua opinião. Não é ordem — é sugestão.",
      form: "should + verbo puro · you should post at night",
      marcar: ["should"],
      more: [
        "## Conselho e expectativa",
        "Conselho: <i>You <b>should</b> post at night</i>. Expectativa: <i>The package <b>should</b> arrive today</i> (é o esperado, não é certeza).",
        "## Negativa e pergunta",
        "<i>shouldn't</i>: <i>You <b>shouldn't</b> reply when you're angry</i>. Pergunta: <i><b>Should</b> I call him?</i> — a forma padrão de pedir orientação.",
        "## Para suavizar",
        "<i>I think you should...</i>, <i>Maybe you should...</i> e <i>You might want to...</i> tiram o peso do conselho.",
        "## No passado",
        "<i>should have</i> + particípio = arrependimento ou crítica: <i>I <b>should have</b> booked earlier</i>, <i>You <b>shouldn't have</b> sent that</i>.",
        "## O vizinho mais forte",
        "<i>ought to</i> significa o mesmo, com tom mais formal: <i>You <b>ought to</b> tell her</i>. <i>had better</i> é mais urgente: <i>You<b>'d better</b> leave now</i>."
      ],
      ex: [
        ["You should post at night.", "Você deveria postar à noite."],
        ["We shouldn't change the price now.", "Não deveríamos mudar o preço agora."],
        ["I should have booked the flight earlier.", "Eu deveria ter comprado o voo mais cedo."]
      ]
    },
    {
      def: "<b>Could</b> cobre três terrenos: o pedido educado, a possibilidade e a capacidade no passado.",
      form: "could + verbo puro · could you send...?",
      marcar: ["Could"],
      more: [
        "## Pedido educado",
        "<i><b>Could</b> you send me the file?</i> é mais gentil que <i>Can you...?</i> — é a forma que se usa com cliente e com desconhecido.",
        "## Possibilidade",
        "<i>This <b>could</b> be the problem</i>, <i>We <b>could</b> try another supplier</i> — algo possível, ou uma opção na mesa.",
        "## Capacidade no passado",
        "<i>When I lived there, I <b>could</b> read the signs</i>. Para uma vez específica em que deu certo, o inglês prefere <i>was able to</i>: <i>I <b>was able to</b> change my flight</i>.",
        "## No passado hipotético",
        "<i>could have</i> + particípio = teria podido: <i>We <b>could have</b> caught the earlier train</i>.",
        "## Para sugerir",
        "<i>We could meet on Thursday</i> propõe sem impor — mais leve que <i>Let's</i> e que <i>should</i>."
      ],
      ex: [
        ["Could you send me the file?", "Você poderia me mandar o arquivo?"],
        ["We could try another supplier.", "Poderíamos tentar outro fornecedor."],
        ["I was able to change my flight.", "Consegui trocar meu voo."]
      ]
    },
    {
      def: "<b>Might</b> marca possibilidade <b>sem compromisso</b>: pode ser que sim, pode ser que não. <i>May</i> diz quase a mesma coisa, com tom mais formal.",
      form: "might / may + verbo puro · we might change the logo",
      marcar: ["might"],
      more: [
        "## A escala da certeza",
        "<i>will</i> (certeza) → <i>should</i> (provável) → <i>may</i> / <i>might</i> (possível) → <i>might not</i> (possivelmente não).",
        "## Might e may",
        "Praticamente intercambiáveis para possibilidade: <i>We <b>might</b> change the logo</i> / <i>We <b>may</b> change the logo</i>. <i>May</i> também pede permissão em registro formal: <i><b>May</b> I come in?</i>",
        "## A negativa não leva contração",
        "<i>might not</i> e <i>may not</i> se escrevem inteiros — <i>mightn't</i> é raro e <i>mayn't</i> não se usa.",
        "## No passado",
        "<i>might have</i> + particípio = talvez tenha: <i>She <b>might have</b> missed the email</i>.",
        "## Cuidado com may not",
        "Pode significar \"talvez não\" ou \"não é permitido\": <i>You <b>may not</b> use your phone here</i> é proibição."
      ],
      ex: [
        ["We might change the logo.", "Talvez a gente mude a logo."],
        ["She might have missed the email.", "Talvez ela não tenha visto o e-mail."],
        ["The meeting may be postponed.", "A reunião pode ser adiada."]
      ]
    },
    {
      def: "<b>Must</b> tem dois sentidos distantes: obrigação forte, quando vem de quem fala, e <b>conclusão lógica</b>, quando a evidência não deixa dúvida.",
      form: "must + verbo puro · he must be tired",
      marcar: ["must"],
      more: [
        "## Obrigação",
        "<i>You <b>must</b> wear a badge</i> — regra, norma, instrução. Em inglês falado do dia a dia, <i>have to</i> é bem mais comum para obrigação; <i>must</i> aparece sobretudo em aviso e documento.",
        "## Conclusão lógica",
        "<i>He worked all night. He <b>must</b> be tired</i> — não é obrigação, é dedução. O contrário é <i>can't</i>: <i>He <b>can't</b> be tired, he slept all day</i>.",
        "## No passado",
        "A dedução sobre o passado usa <i>must have</i> + particípio: <i>She <b>must have</b> forgotten</i>.",
        "## Mustn't não é 'não precisa'",
        "<i>You <b>mustn't</b> tell anyone</i> = é proibido. Para \"não precisa\", o certo é <i>don't have to</i>.",
        "## Sem passado próprio",
        "Como obrigação, o passado de <i>must</i> é <i>had to</i>: <i>I <b>had to</b> cancel the trip</i>."
      ],
      ex: [
        ["He worked all night. He must be tired.", "Ele trabalhou a noite toda. Deve estar cansado."],
        ["You must wear a badge in the building.", "É obrigatório usar crachá no prédio."],
        ["She must have forgotten the meeting.", "Ela deve ter esquecido a reunião."]
      ]
    },
    {
      def: "Três expressões parecidas que não se trocam: <b>have to</b> é obrigação, <b>don't have to</b> é ausência de obrigação, <b>mustn't</b> é proibição.",
      form: "have to · don't have to · mustn't",
      marcar: ["don't have to"],
      more: [
        "## A diferença que muda tudo",
        "<i>You <b>don't have to</b> come tomorrow</i> = pode vir ou não, é escolha sua. <i>You <b>mustn't</b> come tomorrow</i> = não venha, é proibido. Confundir os dois inverte a mensagem.",
        "## Have to muda com a pessoa e o tempo",
        "Ao contrário dos modais, <i>have to</i> se conjuga: <i>he <b>has to</b></i>, <i>I <b>had to</b></i>, <i>we<b>'ll have to</b></i>. É por isso que ele cobre os tempos que <i>must</i> não tem.",
        "## A obrigação de fora",
        "<i>have to</i> costuma vir de uma regra externa (<i>I <b>have to</b> be there at eight</i> — a empresa manda); <i>must</i> soa como a vontade de quem fala.",
        "## O parente informal",
        "<i>have got to</i> / <i>gotta</i>: <i>I<b>'ve got to</b> go</i>. Só na fala.",
        "## Negativa e pergunta com do",
        "<i>I <b>don't have to</b> work on Friday</i>, <i><b>Do</b> I <b>have to</b> sign it?</i>"
      ],
      ex: [
        ["You don't have to come tomorrow.", "Você não precisa vir amanhã."],
        ["I had to cancel the trip.", "Tive que cancelar a viagem."],
        ["Passengers mustn't leave bags unattended.", "Os passageiros não podem deixar bagagem sozinha."]
      ]
    }
  ],

  s10: [
    {
      def: "A voz passiva põe o foco no que <b>acontece com a coisa</b>, não em quem faz. No presente, monta-se com <b>is / are + particípio</b>.",
      form: "is / are + particípio · the posts are scheduled",
      marcar: ["are scheduled"],
      more: [
        "## Como se chega nela",
        "<i>We schedule the posts every Monday</i> → <i>The posts <b>are scheduled</b> every Monday</i>. O objeto vira sujeito e quem fazia sai de cena.",
        "## Quando ela é a escolha certa",
        "Quando quem faz não importa, não se sabe ou é obvio: processo (<i>The invoices <b>are sent</b> on the 5th</i>), regra (<i>Bags <b>are checked</b> at the gate</i>), aviso (<i>Breakfast <b>is served</b> until ten</i>).",
        "## O particípio é a terceira forma",
        "Regulares repetem o <i>-ed</i> (<i>scheduled</i>); irregulares têm forma própria: <i>send → sent</i>, <i>write → written</i>, <i>make → made</i>, <i>take → taken</i>.",
        "## Negativa e pergunta",
        "O <i>to be</i> faz o trabalho: <i>The report <b>isn't</b> reviewed by anyone</i>, <i><b>Are</b> the posts scheduled?</i>"
      ],
      ex: [
        ["Our posts are scheduled every Monday.", "Nossos posts são agendados toda segunda."],
        ["Breakfast is served until ten.", "O café da manhã é servido até as dez."],
        ["Bags are checked at the gate.", "As malas são verificadas no portão."]
      ]
    },
    {
      def: "A passiva no passado usa <b>was / were + particípio</b>: a coisa recebeu a ação em algum momento que já passou.",
      form: "was / were + particípio · the video was edited",
      marcar: ["was edited"],
      more: [
        "## A concordância",
        "<i>was</i> para singular (<i>The video <b>was</b> edited</i>), <i>were</i> para plural (<i>The files <b>were</b> sent</i>).",
        "## Por que ela é tão usada",
        "Em relato de trabalho, muitas vezes importa o que foi feito, não quem fez: <i>The site <b>was launched</b> in March</i>, <i>The decision <b>was made</b> last week</i>.",
        "## Cuidado com o uso político",
        "A passiva permite esconder o responsável — <i>Mistakes <b>were made</b></i>. Em texto claro, se o agente importa, use a ativa.",
        "## Do passado contínuo",
        "Existe também <i>was being</i> + particípio, para o que estava sendo feito: <i>The room <b>was being</b> cleaned</i>."
      ],
      ex: [
        ["The video was edited yesterday.", "O vídeo foi editado ontem."],
        ["The files were sent on Friday.", "Os arquivos foram enviados na sexta."],
        ["My flight was cancelled without notice.", "Meu voo foi cancelado sem aviso."]
      ]
    },
    {
      def: "<b>Have been + particípio</b> é a passiva do present perfect: já foi feito, e o resultado vale <b>agora</b>.",
      form: "have / has been + particípio · the file has been sent",
      marcar: ["has been sent"],
      more: [
        "## O que ela acrescenta",
        "<i>The file <b>was sent</b></i> conta um fato do passado. <i>The file <b>has been sent</b></i> diz que está feito e que isso importa agora — é a frase que se manda no chat de trabalho.",
        "## Com already, just e yet",
        "Combina com os três: <i>It has <b>already</b> been approved</i>, <i>It has <b>just</b> been updated</i>, <i>It hasn't been reviewed <b>yet</b></i>.",
        "## A concordância",
        "<i>has been</i> para singular, <i>have been</i> para plural: <i>The invoices <b>have been</b> paid</i>.",
        "## O erro comum",
        "Esquecer o <i>been</i>: <i>The file has sent</i> diz que o arquivo mandou alguma coisa. A passiva precisa das três peças."
      ],
      ex: [
        ["The file has been sent.", "O arquivo já foi enviado."],
        ["The invoices have already been paid.", "As notas já foram pagas."],
        ["The room hasn't been cleaned yet.", "O quarto ainda não foi limpo."]
      ]
    },
    {
      def: "Com futuro e com modais, a passiva mantém a mesma peça central: o modal fica, entra <b>be</b> e vem o particípio.",
      form: "modal + be + particípio · will be launched, can be done",
      marcar: ["will be launched"],
      more: [
        "## O molde",
        "<i>will be</i>, <i>can be</i>, <i>should be</i>, <i>must be</i>, <i>might be</i> + particípio: <i>The site <b>will be launched</b> in March</i>, <i>It <b>can be done</b> today</i>, <i>The form <b>must be signed</b></i>.",
        "## Onde aparece",
        "Instrução e norma vivem dessa forma: <i>Bags <b>must be checked in</b> 40 minutes before</i>, <i>Payments <b>should be made</b> by the 10th</i>.",
        "## Com going to",
        "<i>is going to be</i> + particípio: <i>The office <b>is going to be</b> renovated</i>.",
        "## O be não desaparece",
        "<i>The site will launched</i> está errado; <i>will <b>be</b> launched</i> é a forma completa."
      ],
      ex: [
        ["The site will be launched in March.", "O site vai ser lançado em março."],
        ["The form must be signed before boarding.", "O formulário tem que ser assinado antes do embarque."],
        ["It can be done remotely.", "Pode ser feito remotamente."]
      ]
    },
    {
      def: "<b>By</b> reintroduz quem fez a ação. Ele só entra quando essa informação <b>importa</b> — sem ela, a passiva funciona perfeitamente.",
      form: "passiva + by + quem fez · designed by our team",
      marcar: ["by our team"],
      more: [
        "## Quando vale usar",
        "Quando o autor é a notícia: <i>The logo was designed <b>by our team</b></i>, <i>The book was written <b>by a journalist</b></i>.",
        "## Quando não usar",
        "Se o agente é óbvio ou irrelevante, o <i>by</i> só pesa: <i>The thief was arrested</i> (pela polícia, claro), <i>The posts are scheduled</i> (por quem cuida disso).",
        "## With, não by",
        "Para o instrumento usa-se <i>with</i>: <i>It was edited <b>with</b> Premiere</i> × <i>It was edited <b>by</b> Ana</i>.",
        "## Com pronome",
        "Depois de <i>by</i> vem o pronome de objeto: <i>by <b>me</b></i>, <i>by <b>him</b></i>, <i>by <b>them</b></i> — nunca <i>by I</i>."
      ],
      ex: [
        ["The logo was designed by our team.", "A logo foi criada pela nossa equipe."],
        ["The email was written by the client.", "O e-mail foi escrito pelo cliente."],
        ["The video was edited with Premiere.", "O vídeo foi editado no Premiere."]
      ]
    }
  ],

  s7: [
    {
      def: "<b>Actually</b> não é \"atualmente\": significa <b>na verdade</b>, e serve para corrigir uma impressão ou trazer um dado que surpreende.",
      form: "actually = na verdade · atualmente = currently, nowadays",
      marcar: ["Actually"],
      more: [
        "## Como se usa de verdade",
        "<i><b>Actually</b>, the client liked it</i> — ao contrário do que se esperava. Também para corrigir com delicadeza: <i><b>Actually</b>, the meeting is at three, not at two</i>.",
        "## O que dizer para 'atualmente'",
        "<i><b>currently</b></i> (<i>I'm currently working on two projects</i>), <i><b>nowadays</b></i> (<i>Nowadays everyone works remotely</i>), <i><b>at the moment</b></i>, <i><b>right now</b></i>.",
        "## O parente actual",
        "<i>actual</i> também engana: significa <b>real, efetivo</b>, não \"atual\". <i>The <b>actual</b> cost was higher</i> = o custo real. Para \"atual\", use <i>current</i>: <i>the <b>current</b> version</i>.",
        "## O tom",
        "Em excesso, <i>actually</i> soa corretivo e um pouco arrogante. Em e-mail, uma vez por mensagem é o suficiente."
      ],
      ex: [
        ["Actually, the client liked it.", "Na verdade, o cliente gostou."],
        ["I'm currently working on two projects.", "Atualmente estou em dois projetos."],
        ["The actual cost was higher than the estimate.", "O custo real foi maior que a estimativa."]
      ]
    },
    {
      def: "<b>Realize</b> é <b>perceber, se dar conta</b> — uma coisa que acontece na cabeça. Não tem relação com \"realizar\" no sentido de executar.",
      form: "realize = perceber · realizar = carry out, achieve",
      marcar: ["realize"],
      more: [
        "## O sentido verdadeiro",
        "<i>I didn't <b>realize</b> the file was empty</i> = não me dei conta. <i>I <b>realized</b> I had the wrong address</i> = percebi.",
        "## O que dizer para 'realizar'",
        "Tarefa: <i><b>carry out</b></i> ou <i><b>do</b></i> — <i>We <b>carried out</b> a survey</i>. Evento: <i><b>hold</b></i> — <i>They <b>held</b> the conference online</i>. Sonho e meta: <i><b>achieve</b></i> ou <i><b>fulfil</b></i> — <i>She <b>achieved</b> her goal</i>.",
        "## O caso raro em que coincide",
        "<i>realize a dream</i> existe em inglês literário (<i>She realized her dream of living abroad</i>), mas é formal e pouco usado na conversa.",
        "## A grafia",
        "<i>realize</i> (EUA) e <i>realise</i> (Reino Unido) são a mesma palavra."
      ],
      ex: [
        ["I didn't realize the file was empty.", "Não percebi que o arquivo estava vazio."],
        ["We carried out a survey with 300 clients.", "Realizamos uma pesquisa com 300 clientes."],
        ["She achieved everything she planned.", "Ela realizou tudo o que planejou."]
      ]
    },
    {
      def: "<b>Pretend</b> é <b>fingir</b>. Para \"pretender\" no sentido de ter a intenção, o inglês usa <i>intend</i> ou <i>plan</i>.",
      form: "pretend = fingir · pretender = intend, plan",
      marcar: ["plan to"],
      more: [
        "## Fingir",
        "<i>He <b>pretended</b> not to see me</i>, <i>Don't <b>pretend</b> you understood</i> — simular algo que não é verdade.",
        "## Ter a intenção",
        "<i>We <b>plan to</b> launch it in March</i> (mais comum na conversa), <i>We <b>intend to</b> expand next year</i> (mais formal). Também <i>be going to</i>: <i>I<b>'m going to</b> apply for that job</i>.",
        "## O falso amigo em cadeia",
        "<i>pretension</i> em inglês é arrogância, não intenção. \"Pretensão salarial\" se diz <i>salary expectations</i>.",
        "## Na prática",
        "Em entrevista e e-mail, <i>pretend</i> no lugar de <i>intend</i> muda a frase de \"pretendo crescer aqui\" para \"finjo crescer aqui\" — vale decorar."
      ],
      ex: [
        ["We plan to launch it in March.", "Pretendemos lançar em março."],
        ["He pretended not to see me.", "Ele fingiu não me ver."],
        ["What are your salary expectations?", "Qual é a sua pretensão salarial?"]
      ]
    },
    {
      def: "Para moda, assunto do momento e alta do mercado, o inglês usa <b>trend</b> e <b>trending</b>. <i>Tendency</i> existe, mas significa outra coisa.",
      form: "trend, trending · tendency = inclinação",
      marcar: ["trending"],
      more: [
        "## Trend e trending",
        "<i>What's <b>trending</b> this week?</i>, <i>a new <b>trend</b> in design</i>, <i>The video is <b>trending</b> on TikTok</i>. É a palavra de mercado, redes sociais e consumo.",
        "## O que tendency significa",
        "Inclinação de pessoa ou coisa a se comportar de certo jeito: <i>He has a <b>tendency</b> to arrive late</i>, <i>Prices have a <b>tendency</b> to rise in December</i>.",
        "## Os vizinhos úteis",
        "<i>trendy</i> = na moda (<i>a trendy café</i>). <i>hype</i> = alvoroço em torno de algo. <i>mainstream</i> = o que virou comum.",
        "## No trabalho",
        "Relatório fala de <i>market <b>trends</b></i>, <i>upward <b>trend</b></i>, <i>downward <b>trend</b></i>."
      ],
      ex: [
        ["What's trending this week?", "O que está em alta esta semana?"],
        ["We follow design trends closely.", "Acompanhamos de perto as tendências de design."],
        ["He has a tendency to answer late.", "Ele tem a tendência de responder tarde."]
      ]
    },
    {
      def: "<b>Assist</b> é ajudar e <b>attend</b> é comparecer. Nenhum dos dois significa \"assistir\" no sentido de ver — isso é <b>watch</b>.",
      form: "assist = ajudar · attend = comparecer · watch = assistir",
      marcar: ["watch"],
      more: [
        "## Os três lados",
        "<i>I <b>watch</b> tutorials on the bus</i> = vejo. <i>Can you <b>assist</b> me with this form?</i> = me ajudar. <i>I'll <b>attend</b> the meeting</i> = vou comparecer.",
        "## Watch, see ou look",
        "<i>watch</i> = acompanhar algo em movimento (filme, vídeo, jogo). <i>see</i> = ver sem esforço, e também assistir a filme no cinema (<i>I saw that film</i>). <i>look at</i> = dirigir o olhar para algo parado.",
        "## Atender também engana",
        "Telefone: <i><b>answer</b> the phone</i>. Cliente: <i><b>serve</b> a customer</i> ou <i><b>help</b> a customer</i>. Pedido: <i><b>meet</b> a request</i>. Nunca <i>attend the phone</i>.",
        "## Attendance e assistance",
        "<i>attendance</i> = presença, comparecimento. <i>assistance</i> = ajuda. <i>audience</i> = o público que assiste."
      ],
      ex: [
        ["I watch tutorials on the bus.", "Assisto tutoriais no ônibus."],
        ["Could you assist me with the form?", "Você poderia me ajudar com o formulário?"],
        ["Only three people attended the workshop.", "Só três pessoas compareceram ao workshop."]
      ]
    },
    {
      def: "Outros falsos amigos que aparecem toda semana — e que mudam o sentido da frase sem aviso.",
      form: "eventually, parents, college, library, sensible",
      marcar: ["Eventually"],
      more: [
        "## Tempo",
        "<i><b>eventually</b></i> = no fim, com o tempo (<i>Eventually, we finished the project</i>). \"Eventualmente\" = <i>occasionally</i>, <i>from time to time</i>.",
        "## Pessoas",
        "<i><b>parents</b></i> = pais; \"parentes\" = <i>relatives</i>. <i><b>relatives</b></i> inclui tios e primos.",
        "## Estudo",
        "<i><b>college</b></i> = faculdade; <i><b>library</b></i> = biblioteca (livraria é <i>bookshop</i> / <i>bookstore</i>). <i><b>graduation</b></i> = formatura; pós-graduação é <i>postgraduate course</i>.",
        "## Caráter",
        "<i><b>sensible</b></i> = sensato; \"sensível\" = <i>sensitive</i>. <i><b>sympathetic</b></i> = solidário; \"simpático\" = <i>nice</i>, <i>friendly</i>.",
        "## No trabalho",
        "<i><b>push</b></i> = empurrar (puxar é <i>pull</i>). <i><b>costume</b></i> = fantasia (costume é <i>custom</i> ou <i>habit</i>). <i><b>fabric</b></i> = tecido (fábrica é <i>factory</i>)."
      ],
      ex: [
        ["Eventually, we finished the project.", "No fim, terminamos o projeto."],
        ["My relatives live in Bahia.", "Meus parentes moram na Bahia."],
        ["That's a sensible decision.", "Essa é uma decisão sensata."]
      ]
    }
  ],

  b2m1: [
    {
      def: "O present perfect contínuo fala de uma atividade que <b>começou antes e segue em curso</b> — ou que acabou de parar e ainda se vê o efeito.",
      form: "have / has been + verbo-ing · I've been working",
      marcar: ["I've been working"],
      more: [
        "## As três peças",
        "<i>have/has</i> + <i>been</i> + verbo com <i>-ing</i>. Nenhuma pode faltar: <i>I've working</i> e <i>I been working</i> estão incompletos.",
        "## Os dois usos",
        "Ainda em curso: <i>I<b>'ve been working</b> here for two years</i> (continuo aqui). Acabou agora e deixou marca: <i>I<b>'m tired. I've been running</b></i>.",
        "## O par com for e since",
        "Combina com duração (<i>for two hours</i>) e com ponto de partida (<i>since this morning</i>) — são as expressões que melhor revelam esse tempo.",
        "## Em vez do presente",
        "Em português se diz \"trabalho aqui há dois anos\"; o inglês precisa mostrar o atravessar do tempo: <i>I've been working here for two years</i>."
      ],
      ex: [
        ["I've been working here for two years.", "Trabalho aqui há dois anos."],
        ["She's been waiting since nine.", "Ela está esperando desde as nove."],
        ["It's been raining all afternoon.", "Está chovendo a tarde toda."]
      ]
    },
    {
      def: "A diferença entre as duas formas do present perfect é de <b>foco</b>: a contínua olha a atividade e o tempo gasto; a simples olha o resultado e a conta.",
      form: "been writing (atividade) · have written (resultado)",
      marcar: ["I've written", "I've been writing"],
      more: [
        "## Lado a lado",
        "<i>I<b>'ve written</b> three reports</i> — quantos ficaram prontos. <i>I<b>'ve been writing</b> all day</i> — em que gastei o dia.",
        "## O que cada um aceita",
        "A forma simples anda com número (<i>three times</i>, <i>twice</i>, <i>two reports</i>). A contínua anda com tempo (<i>all day</i>, <i>for hours</i>, <i>since Monday</i>).",
        "## Terminado ou não",
        "<i>I've painted the kitchen</i> = está pintada. <i>I've been painting the kitchen</i> = estou no meio, e provavelmente há tinta em mim.",
        "## Quando os dois servem",
        "Com <i>live</i>, <i>work</i> e <i>study</i> a diferença quase desaparece: <i>I've lived here for years</i> = <i>I've been living here for years</i>."
      ],
      ex: [
        ["I've written three reports this week.", "Escrevi três relatórios esta semana."],
        ["I've been writing all day.", "Passei o dia escrevendo."],
        ["She's been travelling a lot, and she's visited six countries.", "Ela tem viajado muito e já visitou seis países."]
      ]
    },
    {
      def: "<b>How long...?</b> pergunta a duração de algo que começou antes e continua — e por isso pede o present perfect, não o presente.",
      form: "How long + have / has + been + -ing?",
      marcar: ["How long have you been studying"],
      more: [
        "## A pergunta e a resposta",
        "<i><b>How long have you been studying</b> English?</i> → <i><b>For</b> three years</i> ou <i><b>Since</b> 2023</i>.",
        "## Com verbo de estado, a forma simples",
        "<i><b>How long have you known</b> her?</i>, <i><b>How long have you had</b> that car?</i> — <i>know</i> e <i>have</i> não vão para o <i>-ing</i>.",
        "## O erro comum",
        "<i>How long are you studying English?</i> pergunta sobre o futuro ou soa estranho; e <i>How long do you study?</i> pergunta a rotina diária.",
        "## As vizinhas",
        "<i>How often...?</i> (frequência), <i>How many times...?</i> (quantas vezes), <i>When did you start...?</i> (o começo)."
      ],
      ex: [
        ["How long have you been studying English?", "Há quanto tempo você estuda inglês?"],
        ["How long have you had this supplier?", "Há quanto tempo você tem esse fornecedor?"],
        ["How long has the flight been delayed?", "Há quanto tempo o voo está atrasado?"]
      ]
    },
    {
      def: "Verbos de <b>estado</b> não entram na forma contínua, nem aqui. Com eles, a duração se expressa com o present perfect simples.",
      form: "have / has + particípio · I've known her for ten years",
      marcar: ["I've known"],
      more: [
        "## Os que ficam no simples",
        "<i>know</i>, <i>have</i> (posse), <i>be</i>, <i>believe</i>, <i>own</i>, <i>belong</i>, <i>understand</i>, <i>like</i>: <i>I<b>'ve known</b> her for ten years</i>, <i>We<b>'ve had</b> this system since 2019</i>, <i>I<b>'ve been</b> here since eight</i>.",
        "## O erro comum",
        "<i>I've been knowing her</i> e <i>I've been having this car</i> não existem.",
        "## Quando o verbo muda de lado",
        "Se o verbo vira ação, aceita a forma contínua com outro sentido: <i>I've been <b>having</b> problems with the app</i> (enfrentando), <i>I've been <b>thinking</b> about your offer</i> (refletindo).",
        "## Work e live são flexíveis",
        "Não são estados puros: aceitam as duas formas sem mudança de sentido."
      ],
      ex: [
        ["I've known her for ten years.", "Conheço ela há dez anos."],
        ["We've had the same supplier since 2019.", "Temos o mesmo fornecedor desde 2019."],
        ["I've been having problems with the app.", "Tenho tido problemas com o app."]
      ]
    }
  ],

  s4: [
    {
      def: "<b>Say</b> e <b>tell</b> se dividem por um detalhe de estrutura: <i>tell</i> precisa de <b>alguém</b> depois dele, <i>say</i> não aceita ninguém ali.",
      form: "say + algo · tell + alguém + algo",
      marcar: ["told me"],
      more: [
        "## A regra de ouro",
        "<i>He <b>said</b> it was late</i> (sem pessoa) × <i>He <b>told me</b> it was late</i> (com pessoa). <i>He said me</i> e <i>He told that</i> estão errados.",
        "## Quando say leva pessoa",
        "Só com <i>to</i>: <i>He <b>said to me</b> that it was late</i> — correto, mas menos natural que <i>told me</i>.",
        "## As expressões fixas de tell",
        "<i>tell the truth</i>, <i>tell a lie</i>, <i>tell a story</i>, <i>tell the time</i>, <i>tell the difference</i> — aqui não entra pessoa e não se troca por <i>say</i>.",
        "## Os parentes",
        "<i>ask</i> para pergunta (<i>She <b>asked</b> me where I lived</i>), <i>speak</i> e <i>talk</i> para o ato de conversar (<i>I <b>spoke to</b> the client</i>), <i>explain</i> sempre com <i>to</i> (<i>He <b>explained to</b> me</i>)."
      ],
      ex: [
        ["She told me she was tired.", "Ela me disse que estava cansada."],
        ["He said the deadline had changed.", "Ele disse que o prazo tinha mudado."],
        ["Can you tell me the truth?", "Você pode me dizer a verdade?"]
      ]
    },
    {
      def: "Ao contar o que alguém disse, o verbo <b>recua um tempo</b>: o presente vira passado, o passado vira mais-que-perfeito. É o chamado discurso indireto.",
      form: "is → was · will → would · did → had done",
      marcar: ["would"],
      more: [
        "## A tabela do recuo",
        "<i>am / is / are</i> → <i>was / were</i>. <i>work</i> → <i>worked</i>. <i>will</i> → <i>would</i>. <i>can</i> → <i>could</i>. <i>may</i> → <i>might</i>. <i>have done</i> e <i>did</i> → <i>had done</i>.",
        "## O exemplo completo",
        "<i>\"I <b>will</b> call you\"</i> → <i>He said he <b>would</b> call me</i>. <i>\"I <b>am</b> busy\"</i> → <i>She said she <b>was</b> busy</i>.",
        "## O que mais muda",
        "Os pronomes e as referências de tempo e lugar acompanham: <i>I</i> → <i>he/she</i>, <i>my</i> → <i>his/her</i>, <i>today</i> → <i>that day</i>, <i>tomorrow</i> → <i>the next day</i>, <i>here</i> → <i>there</i>.",
        "## Quando o recuo é opcional",
        "Se o que foi dito continua verdadeiro, pode-se manter o tempo original: <i>She said she <b>lives</b> in Lisbon</i> (e mora até hoje). Com <i>says</i> no presente, nada recua: <i>He <b>says</b> he <b>is</b> busy</i>.",
        "## O that que desaparece",
        "<i>He said <b>that</b> it was late</i> e <i>He said it was late</i> são iguais; na fala o <i>that</i> quase sempre cai."
      ],
      ex: [
        ["He said he would call me.", "Ele disse que ia me ligar."],
        ["She told me she had already sent it.", "Ela me disse que já tinha mandado."],
        ["They said the office was closed.", "Eles disseram que o escritório estava fechado."]
      ]
    },
    {
      def: "Pergunta contada deixa de ser pergunta: perde o <i>do/did</i>, volta à <b>ordem normal</b> da frase e não leva interrogação.",
      form: "asked + onde / se + sujeito + verbo · asked me where I lived",
      marcar: ["asked me where I lived"],
      more: [
        "## A desmontagem",
        "<i>\"Where <b>do</b> you live?\"</i> → <i>She asked me <b>where I lived</b></i>. O auxiliar sai, o sujeito volta para antes do verbo, o verbo recua de tempo.",
        "## Pergunta de sim ou não",
        "Entra <i>if</i> (ou <i>whether</i>): <i>\"Are you coming?\"</i> → <i>He asked <b>if</b> I was coming</i>. <i>whether</i> é a opção formal e a preferida quando há duas alternativas.",
        "## Sem interrogação",
        "A frase contada é uma afirmação: <i>She asked me where I lived.</i> — ponto final.",
        "## A mesma estrutura em pergunta educada",
        "<i>Could you tell me <b>where the gate is</b>?</i>, <i>Do you know <b>what time it starts</b>?</i> — a ordem interna também é a normal, não a de pergunta."
      ],
      ex: [
        ["She asked me where I lived.", "Ela me perguntou onde eu morava."],
        ["He asked if we had received the invoice.", "Ele perguntou se tínhamos recebido a nota."],
        ["Could you tell me where the gate is?", "Você poderia me dizer onde é o portão?"]
      ]
    },
    {
      def: "Pedido e ordem contados usam um molde próprio: <b>asked / told + pessoa + to + verbo</b>. Para o negativo, basta <i>not to</i>.",
      form: "asked / told + pessoa + to + verbo · told me not to post",
      marcar: ["told me not to"],
      more: [
        "## Os dois tons",
        "<i>asked</i> para pedido (<i>She <b>asked me to</b> send the file</i>), <i>told</i> para ordem ou instrução (<i>My boss <b>told me to</b> wait</i>).",
        "## O negativo",
        "<i>not</i> vem antes do <i>to</i>: <i>My boss <b>told me not to</b> post it yet</i>, <i>She <b>asked me not to</b> call after six</i>.",
        "## Os verbos que seguem o mesmo molde",
        "<i>remind</i>, <i>advise</i>, <i>warn</i>, <i>invite</i>, <i>order</i>, <i>encourage</i>: <i>He <b>reminded me to</b> check in</i>, <i>They <b>invited us to</b> join the call</i>.",
        "## A pessoa é obrigatória",
        "<i>She asked to send the file</i> muda o sentido (ela pediu para mandar, ela mesma). Para o pedido dirigido a você, a pessoa tem de aparecer."
      ],
      ex: [
        ["My boss told me not to post it yet.", "Meu chefe me disse para não postar ainda."],
        ["She asked me to send the invoice today.", "Ela me pediu para mandar a nota hoje."],
        ["He reminded me to check in online.", "Ele me lembrou de fazer o check-in online."]
      ]
    }
  ],

  b2m2: [
    {
      def: "<b>Wish + passado</b> fala de um desejo sobre o <b>presente</b>: queria que a situação de agora fosse outra. O passado aqui marca a hipótese, não o tempo.",
      form: "wish + passado · I wish I had more time",
      marcar: ["wish", "had"],
      more: [
        "## O que a frase diz",
        "<i>I <b>wish</b> I <b>had</b> more time</i> = não tenho tempo, e lamento. O verbo depois de <i>wish</i> recua um tempo em relação à realidade.",
        "## Com to be, were",
        "<i>I wish I <b>were</b> taller</i>, <i>I wish it <b>weren't</b> so far</i> — <i>were</i> para todas as pessoas no registro cuidado; <i>was</i> aparece na fala.",
        "## Com modal",
        "<i>I wish I <b>could</b> go</i> = gostaria de poder ir (mas não posso).",
        "## Wish e hope",
        "<i>wish</i> + passado é desejo impossível ou improvável. Para o que ainda pode acontecer, usa-se <i>hope</i> + presente ou futuro: <i>I <b>hope</b> he <b>answers</b> today</i>."
      ],
      ex: [
        ["I wish I had more time.", "Eu queria ter mais tempo."],
        ["She wishes she could work from home.", "Ela queria poder trabalhar de casa."],
        ["I wish the hotel were closer to the centre.", "Eu queria que o hotel fosse mais perto do centro."]
      ]
    },
    {
      def: "<b>Wish + had + particípio</b> é arrependimento: eu queria ter feito, e não fiz. O desejo olha para trás.",
      form: "wish + had + particípio · I wish I had studied",
      marcar: ["wish", "had studied"],
      more: [
        "## A diferença de um passo",
        "<i>I wish I <b>had</b> more time</i> (agora) × <i>I wish I <b>had had</b> more time</i> (naquele dia). O arrependimento recua um tempo a mais.",
        "## As contrações",
        "<i>I wish I'd studied more</i> — o <i>'d</i> aqui é <i>had</i>, não <i>would</i>.",
        "## Com modal no passado",
        "<i>I wish I <b>could have</b> gone</i> = queria ter podido ir.",
        "## O vizinho regret",
        "<i>regret</i> diz o mesmo com outra estrutura: <i>I <b>regret</b> not study<b>ing</b> more</i> — depois de <i>regret</i> vem o <i>-ing</i>."
      ],
      ex: [
        ["I wish I had studied more.", "Eu queria ter estudado mais."],
        ["She wishes she hadn't sent that email.", "Ela queria não ter mandado aquele e-mail."],
        ["I wish we had booked earlier.", "Eu queria que a gente tivesse reservado mais cedo."]
      ]
    },
    {
      def: "<b>Wish + would</b> serve para reclamar do <b>comportamento de outra pessoa</b>: quero que ela mude algo que depende dela.",
      form: "wish + would + verbo puro · I wish he would answer",
      marcar: ["wish", "would answer"],
      more: [
        "## O alvo é outra pessoa",
        "<i>I wish he <b>would</b> answer my emails</i> = ele poderia responder e não responde. Há irritação na frase.",
        "## Não vale para si mesmo",
        "<i>I wish I would study more</i> soa estranho: quem decide é você. O certo é <i>I wish I <b>studied</b> more</i> ou <i>I should study more</i>.",
        "## Com coisa que incomoda",
        "<i>I wish it <b>would</b> stop raining</i> — aqui o <i>would</i> fala de algo fora do seu controle que você quer que mude.",
        "## Wish + wouldn't",
        "<i>I wish you <b>wouldn't</b> interrupt me</i> é um pedido com tom de reclamação."
      ],
      ex: [
        ["I wish he would answer my emails.", "Eu queria que ele respondesse meus e-mails."],
        ["I wish it would stop raining.", "Eu queria que parasse de chover."],
        ["I wish they wouldn't change the deadline every week.", "Eu queria que eles não mudassem o prazo toda semana."]
      ]
    },
    {
      def: "<b>If only</b> diz o mesmo que <i>wish</i>, com mais <b>intensidade</b>. Segue exatamente as mesmas regras de tempo.",
      form: "if only + passado / had + particípio",
      marcar: ["If only", "had known"],
      more: [
        "## As duas versões",
        "Sobre agora: <i><b>If only</b> I <b>had</b> more time!</i> Sobre o passado: <i><b>If only</b> I <b>had known</b>!</i>",
        "## Sozinho, sem segunda metade",
        "Ao contrário do <i>if</i> condicional, <i>if only</i> costuma formar frase completa sem precisar do resultado: <i>If only she had told me!</i>",
        "## Com would, para o comportamento de outro",
        "<i><b>If only</b> he <b>would</b> listen!</i> — mesma função do <i>wish + would</i>.",
        "## O tom",
        "É mais emocional e mais literário que <i>wish</i>; aparece com exclamação e em fala carregada."
      ],
      ex: [
        ["If only I had known!", "Se eu soubesse!"],
        ["If only we had left earlier.", "Se ao menos tivéssemos saído mais cedo."],
        ["If only he would listen to the client.", "Se ao menos ele escutasse o cliente."]
      ]
    },
    {
      def: "O condicional <b>misturado</b> junta duas épocas: a condição está no passado e a consequência, no <b>presente</b>. É o tempo do \"se tivesse feito, hoje eu estaria\".",
      form: "if + had + particípio, would + verbo puro",
      marcar: ["had taken", "would be"],
      more: [
        "## O molde",
        "<i>If I <b>had taken</b> that job, I <b>would be</b> in London now</i> — a causa ficou no passado, o efeito é hoje. Note o <i>now</i>: ele é a pista de que a consequência é presente.",
        "## O contrário também existe",
        "Condição permanente, efeito no passado: <i>If I <b>were</b> more organized, I <b>wouldn't have missed</b> the flight</i>.",
        "## Como escolher",
        "Pergunte-se de que época é cada metade. A condição no passado pede <i>had</i> + particípio; a consequência no presente pede <i>would</i> + verbo puro.",
        "## O que ele substitui",
        "Evita a frase pesada em duas partes (\"eu não aceitei aquele emprego, e por isso hoje não moro em Londres\") em uma só."
      ],
      ex: [
        ["If I had taken that job, I would be in London now.", "Se eu tivesse aceitado aquele emprego, estaria em Londres agora."],
        ["If we had booked in January, we wouldn't be paying so much.", "Se tivéssemos reservado em janeiro, não estaríamos pagando tanto."],
        ["If I were more organized, I wouldn't have missed the flight.", "Se eu fosse mais organizado, não teria perdido o voo."]
      ]
    }
  ],

  s8: [
    {
      def: "Phrasal verbs de <b>criar e resolver</b>: o verbo ganha uma partícula e muda de sentido por completo. São a forma natural de dizer essas ações no inglês do trabalho.",
      form: "come up with · set up · figure out",
      marcar: ["figured out"],
      more: [
        "## O que cada um significa",
        "<i><b>come up with</b></i> = bolar, ter a ideia de (<i>She came up with the name</i>).",
        "<i><b>set up</b></i> = montar, configurar (<i>I set up the account</i>, <i>set up a meeting</i>).",
        "<i><b>figure out</b></i> = descobrir, sacar como funciona (<i>I finally figured out the problem</i>).",
        "## Onde fica o objeto",
        "<i>set up</i> e <i>figure out</i> aceitam o objeto no meio: <i>set the account <b>up</b></i>, <i>figure it <b>out</b></i>. Com pronome, o meio é obrigatório: <i>figure it out</i>, nunca <i>figure out it</i>.",
        "<i>come up with</i> tem duas partículas e não se separa: <i>come up with <b>it</b></i>.",
        "## Os vizinhos de obra",
        "<i><b>work out</b></i> = dar certo, calcular. <i><b>sort out</b></i> = resolver, organizar. <i><b>bring up</b></i> = levantar um assunto. <i><b>point out</b></i> = apontar, observar."
      ],
      ex: [
        ["I finally figured out the problem.", "Finalmente descobri o problema."],
        ["She came up with a better title.", "Ela bolou um título melhor."],
        ["Can you set up the call for Thursday?", "Você pode marcar a ligação para quinta?"]
      ]
    },
    {
      def: "Phrasal verbs de <b>prazo e tarefa</b>: o vocabulário de quem combina, adia e revisa — e que aparece em quase todo e-mail de trabalho.",
      form: "put off · go over · follow up",
      marcar: ["go over"],
      more: [
        "## O que cada um significa",
        "<i><b>put off</b></i> = adiar (<i>Let's put off the launch</i>). Separável: <i>put it <b>off</b></i>.",
        "<i><b>go over</b></i> = revisar, repassar (<i>Let's go over the script</i>). Não se separa.",
        "<i><b>follow up</b></i> = dar retorno, cobrar resposta (<i>I'll follow up with the client</i>, <i>follow up <b>on</b> that email</i>).",
        "## Os parceiros frequentes",
        "<i><b>catch up</b></i> = pôr em dia (conversa ou trabalho atrasado). <i><b>get back to</b></i> = retornar para alguém (<i>I'll get back to you tomorrow</i>). <i><b>hand in</b></i> = entregar. <i><b>carry out</b></i> = executar. <i><b>take on</b></i> = assumir (tarefa, cliente).",
        "## Em e-mail",
        "<i>Just following up on my last email</i> é a fórmula padrão para cobrar sem soar grosseiro."
      ],
      ex: [
        ["Let's go over the script before we record.", "Vamos revisar o roteiro antes de gravar."],
        ["They put off the launch until June.", "Eles adiaram o lançamento para junho."],
        ["I'll follow up with the supplier tomorrow.", "Vou dar um retorno ao fornecedor amanhã."]
      ]
    },
    {
      def: "Phrasal verbs de <b>falta e recusa</b>: o que acaba, o que se recusa e o que se abandona.",
      form: "run out of · turn down · give up",
      marcar: ["ran out of"],
      more: [
        "## O que cada um significa",
        "<i><b>run out of</b></i> = ficar sem (<i>We ran out of time</i>, <i>I've run out of paper</i>).",
        "<i><b>turn down</b></i> = recusar (<i>They turned down our offer</i>) e também abaixar o volume (<i>turn it <b>down</b></i>).",
        "<i><b>give up</b></i> = desistir (<i>Don't give up</i>) e parar de vez com um hábito (<i>She gave up coffee</i>).",
        "## Os pares de cima e de baixo",
        "<i>turn down</i> × <i><b>turn up</b></i> (aumentar; e também aparecer de surpresa). <i><b>turn off</b></i> / <i><b>turn on</b></i> = desligar e ligar.",
        "## Os vizinhos",
        "<i><b>call off</b></i> = cancelar (<i>They called off the trip</i>). <i><b>back out</b></i> = voltar atrás num compromisso. <i><b>drop out</b></i> = abandonar um curso."
      ],
      ex: [
        ["We ran out of time.", "Ficamos sem tempo."],
        ["They turned down our proposal.", "Eles recusaram nossa proposta."],
        ["They called off the trip because of the strike.", "Eles cancelaram a viagem por causa da greve."]
      ]
    },
    {
      def: "Phrasal verbs de <b>arquivo e sistema</b>: o inglês de quem lida com computador, formulário e conteúdo publicado.",
      form: "back up · fill out · take down",
      marcar: ["Back up"],
      more: [
        "## O que cada um significa",
        "<i><b>back up</b></i> = fazer backup (<i>Back up the files before formatting</i>). Como substantivo, vira uma palavra: <i>a <b>backup</b></i>.",
        "<i><b>fill out</b></i> / <i><b>fill in</b></i> = preencher (<i>Fill out the form</i>). <i>out</i> é mais americano, <i>in</i> mais britânico.",
        "<i><b>take down</b></i> = tirar do ar, remover (<i>They took down the post</i>) e também anotar (<i>take down a number</i>).",
        "## Os que você vai usar todo dia",
        "<i><b>log in</b></i> / <i><b>log out</b></i>, <i><b>sign up</b></i> = se cadastrar, <i><b>set up</b></i> = configurar, <i><b>shut down</b></i> = desligar, <i><b>plug in</b></i> = conectar na tomada, <i><b>upload</b></i> e <i><b>download</b></i>.",
        "## A dica de leitura",
        "A partícula quase sempre dá o rumo: <i>up</i> = completar ou aumentar, <i>out</i> = para fora ou até o fim, <i>down</i> = reduzir ou registrar, <i>off</i> = interromper ou separar."
      ],
      ex: [
        ["Back up the files before formatting.", "Faça backup dos arquivos antes de formatar."],
        ["Please fill out this form at the counter.", "Por favor, preencha este formulário no balcão."],
        ["They took down the post after an hour.", "Eles tiraram o post do ar depois de uma hora."]
      ]
    }
  ],

  b2m3: [
    {
      def: "A passiva com <b>modal</b> mantém a estrutura: o modal fica, entra <b>be</b> e vem o particípio. É a forma de norma, contrato e instrução.",
      form: "modal + be + particípio · must be signed, can be fixed",
      marcar: ["must be signed"],
      more: [
        "## O molde",
        "<i>must be done</i>, <i>can be fixed</i>, <i>should be sent</i>, <i>might be delayed</i>: <i>The contract <b>must be signed</b> by Friday</i>.",
        "## No passado",
        "Com <i>have been</i>: <i>It <b>should have been sent</b> yesterday</i> = deveria ter sido enviado. <i>It <b>could have been avoided</b></i> = poderia ter sido evitado.",
        "## Por que essa forma é tão usada em documento",
        "Ela descreve a obrigação sem apontar o responsável — útil em norma e termo de uso: <i>Payment <b>must be made</b> in advance</i>.",
        "## O erro comum",
        "Comer o <i>be</i>: <i>The contract must signed</i>. O modal precisa sempre de <i>be</i> antes do particípio."
      ],
      ex: [
        ["The contract must be signed by Friday.", "O contrato tem que ser assinado até sexta."],
        ["It should have been sent yesterday.", "Deveria ter sido enviado ontem."],
        ["The problem can be fixed remotely.", "O problema pode ser resolvido remotamente."]
      ]
    },
    {
      def: "A passiva contínua mostra algo que <b>está sendo feito</b> agora ou que estava sendo feito então: <b>is / was being + particípio</b>.",
      form: "is / was being + particípio · the report is being reviewed",
      marcar: ["is being reviewed"],
      more: [
        "## As duas épocas",
        "Agora: <i>The report <b>is being reviewed</b></i>. Então: <i>The room <b>was being</b> cleaned when we arrived</i>.",
        "## Para que serve na prática",
        "É a resposta profissional para \"está em andamento\": <i>Your request <b>is being processed</b></i>, <i>The site <b>is being updated</b></i> — diz que alguém está cuidando, sem dizer quem.",
        "## As quatro peças",
        "<i>is</i> + <i>being</i> + particípio. Sem o <i>being</i>, a frase muda de sentido: <i>The report is reviewed</i> virou rotina, não andamento.",
        "## Não existe no perfect contínuo",
        "<i>has been being reviewed</i> não se usa. Para isso, a passiva simples: <i>It <b>has been</b> reviewed</i>."
      ],
      ex: [
        ["The report is being reviewed.", "O relatório está sendo revisado."],
        ["Your request is being processed.", "Sua solicitação está sendo processada."],
        ["The room was being cleaned when we arrived.", "O quarto estava sendo limpo quando chegamos."]
      ]
    },
    {
      def: "<b>Is said to</b> e <b>it is said that</b> atribuem a informação a uma fonte vaga — o equivalente do nosso \"dizem que\".",
      form: "is said to + verbo · it is said that + frase",
      marcar: ["is said to"],
      more: [
        "## As duas formas",
        "<i>The new software <b>is said to</b> save a lot of time</i> e <i><b>It is said that</b> the new software saves a lot of time</i> dizem o mesmo; a primeira é mais enxuta.",
        "## Os outros verbos do grupo",
        "<i>is believed to</i>, <i>is thought to</i>, <i>is expected to</i>, <i>is known to</i>, <i>is reported to</i>: <i>The flight <b>is expected to</b> land at six</i>.",
        "## Para falar do passado",
        "<i>is said to <b>have</b></i> + particípio: <i>He <b>is said to have</b> left the company</i> = dizem que ele saiu.",
        "## Onde aparece",
        "Jornalismo, relatório e texto acadêmico — qualquer lugar onde se informa sem assumir a autoria do dado."
      ],
      ex: [
        ["The new software is said to save a lot of time.", "Dizem que o novo software economiza muito tempo."],
        ["The flight is expected to land at six.", "Espera-se que o voo pouse às seis."],
        ["He is said to have left the company.", "Dizem que ele saiu da empresa."]
      ]
    },
    {
      def: "<b>Have / get something done</b> diz que você <b>mandou fazer</b>: a ação foi executada por outra pessoa, a seu pedido.",
      form: "have / get + coisa + particípio · I had my laptop repaired",
      marcar: ["had my laptop repaired"],
      more: [
        "## A ordem das peças",
        "<i>have</i> + a coisa + particípio: <i>I <b>had my laptop repaired</b></i>, <i>She's <b>having her hair cut</b></i>, <i>We <b>had the office painted</b></i>.",
        "## Have ou get",
        "<i>get</i> é a versão informal e igual em sentido: <i>I <b>got</b> my laptop repaired</i>. <i>get</i> também sugere um pouco mais de esforço para conseguir o serviço.",
        "## A diferença que importa",
        "<i>I repaired my laptop</i> = eu mesmo consertei. <i>I had my laptop repaired</i> = levei a alguém. A segunda é a que descreve a maior parte da vida adulta.",
        "## O sentido de coisa ruim",
        "A mesma estrutura serve para o que você sofreu: <i>I <b>had my bag stolen</b></i> = minha mala foi roubada."
      ],
      ex: [
        ["I had my laptop repaired.", "Mandei consertar meu notebook."],
        ["We're getting the office painted next week.", "Vamos mandar pintar o escritório semana que vem."],
        ["She had her bag stolen at the station.", "A bolsa dela foi roubada na estação."]
      ]
    }
  ],

  b2m4: [
    {
      def: "<b>Must have + particípio</b> é a <b>conclusão</b> sobre o passado: a evidência é tão forte que você afirma sem ter visto.",
      form: "must have + particípio · he must have forgotten",
      marcar: ["must have forgotten"],
      more: [
        "## Dedução, não obrigação",
        "<i>He <b>must have</b> forgotten the meeting</i> = pelas evidências, esqueceu. Não há obrigação nenhuma na frase.",
        "## A pista que sustenta",
        "Essas frases costumam vir depois de um fato: <i>The light is off. She <b>must have</b> left</i>.",
        "## Na fala",
        "Soa <i>must've</i>, quase \"mustuv\". Em texto formal, escreve-se inteiro.",
        "## O contrário",
        "A dedução negativa não usa <i>mustn't</i>, e sim <i>can't have</i>: <i>He <b>can't have</b> finished already</i>."
      ],
      ex: [
        ["He must have forgotten the meeting.", "Ele deve ter esquecido a reunião."],
        ["The light is off. She must have left.", "A luz está apagada. Ela deve ter saído."],
        ["They must have changed the gate.", "Eles devem ter mudado o portão."]
      ]
    },
    {
      def: "<b>Might / may / could have + particípio</b> é a <b>possibilidade</b> sobre o passado: talvez tenha sido assim, talvez não.",
      form: "might / may / could have + particípio",
      marcar: ["might have missed"],
      more: [
        "## As três equivalentes",
        "<i>She <b>might have</b> missed the bus</i>, <i>She <b>may have</b> missed the bus</i>, <i>She <b>could have</b> missed the bus</i> — mesma dose de incerteza.",
        "## A escala",
        "<i>must have</i> (quase certeza) → <i>might / may / could have</i> (possível) → <i>can't have</i> (impossível).",
        "## O outro sentido de could have",
        "Também significa \"teria podido\": <i>We <b>could have</b> taken the earlier flight</i> — oportunidade perdida, não possibilidade.",
        "## A negativa",
        "<i>might not have</i> = talvez não tenha: <i>She <b>might not have</b> seen the email</i>. Diferente de <i>can't have</i>, que afirma a impossibilidade."
      ],
      ex: [
        ["She might have missed the bus.", "Ela pode ter perdido o ônibus."],
        ["The client may have changed his mind.", "O cliente pode ter mudado de ideia."],
        ["We could have taken the earlier flight.", "Poderíamos ter pegado o voo mais cedo."]
      ]
    },
    {
      def: "<b>Can't have + particípio</b> descarta uma hipótese: pelas evidências, <b>não é possível</b> que tenha acontecido.",
      form: "can't have + particípio · he can't have finished",
      marcar: ["can't have finished"],
      more: [
        "## O oposto de must have",
        "<i>He <b>must have</b> finished</i> (certeza que sim) × <i>He <b>can't have</b> finished already</i> (certeza que não).",
        "## Couldn't have",
        "<i>couldn't have</i> diz o mesmo, com tom mais suave ou mais formal: <i>She <b>couldn't have</b> known</i>.",
        "## Não confundir com mustn't",
        "<i>mustn't</i> é proibição no presente (<i>You mustn't tell anyone</i>), nunca dedução sobre o passado.",
        "## O par completo",
        "Para discutir uma hipótese: <i>It <b>must have</b> been the wifi</i> / <i>It <b>can't have</b> been the wifi — the others were online</i>."
      ],
      ex: [
        ["He can't have finished already.", "Não é possível que ele já tenha terminado."],
        ["She couldn't have known about the change.", "Ela não poderia ter sabido da mudança."],
        ["It can't have been the wifi — the others were online.", "Não pode ter sido o wifi: os outros estavam online."]
      ]
    },
    {
      def: "<b>Should have + particípio</b> olha para trás com <b>crítica ou arrependimento</b>: era o certo a fazer, e não foi feito.",
      form: "should have / shouldn't have + particípio",
      marcar: ["should have called"],
      more: [
        "## Os dois lados",
        "<i>I <b>should have</b> called you</i> = devia ter ligado e não liguei. <i>You <b>shouldn't have</b> sent that email</i> = não devia ter mandado, e mandou.",
        "## Para si e para o outro",
        "Sobre você, é arrependimento; sobre o outro, é crítica — e por isso convém escolher o tom: <i>Maybe we should have waited</i> soa menos acusatório que <i>You should have waited</i>.",
        "## O agradecimento",
        "<i>You shouldn't have!</i> sozinho é o que se diz ao receber um presente — \"não precisava\".",
        "## A família completa",
        "<i>could have</i> (teria podido), <i>would have</i> (teria), <i>should have</i> (deveria ter), <i>might have</i> (talvez tivesse). Todas com <i>have</i> + particípio."
      ],
      ex: [
        ["I should have called you.", "Eu deveria ter te ligado."],
        ["You shouldn't have sent that email.", "Você não deveria ter mandado aquele e-mail."],
        ["We should have booked a later flight.", "Deveríamos ter reservado um voo mais tarde."]
      ]
    }
  ],

  s11: [
    {
      def: "<b>But</b> e <b>however</b> marcam contraste, mas em posições diferentes: <i>but</i> emenda duas metades da mesma frase; <i>however</i> abre uma frase nova.",
      form: "..., but ... · ... . However, ...",
      marcar: ["However"],
      more: [
        "## A posição de cada um",
        "<i>The video is great, <b>but</b> it's too long</i> — uma frase só. <i>The video is great. <b>However</b>, it's too long</i> — duas frases, e o <i>however</i> pede vírgula depois.",
        "## However no meio",
        "Também cabe entre vírgulas: <i>The video, <b>however</b>, is too long</i> — tom mais formal, típico de relatório.",
        "## Os parentes",
        "<i>though</i> é o <i>but</i> informal e vai no fim: <i>It's too long, <b>though</b></i>. <i>nevertheless</i> e <i>on the other hand</i> são as versões formais do <i>however</i>.",
        "## O erro comum",
        "Usar <i>however</i> como <i>but</i>, sem pontuação: <i>The video is great however it's too long</i> precisa de ponto ou ponto e vírgula antes."
      ],
      ex: [
        ["The video is great. However, it's too long.", "O vídeo está ótimo. Porém, está longo demais."],
        ["I liked the hotel, but the location was bad.", "Gostei do hotel, mas a localização era ruim."],
        ["It's more expensive. On the other hand, it lasts longer.", "É mais caro. Por outro lado, dura mais."]
      ]
    },
    {
      def: "<b>Although</b> e <b>even though</b> introduzem um contraste com uma <b>frase completa</b> — sujeito e verbo. <i>Even though</i> é a versão mais enfática.",
      form: "although / even though + sujeito + verbo",
      marcar: ["Although"],
      more: [
        "## O que vem depois",
        "Uma oração inteira: <i><b>Although I was tired</b>, I finished the work</i>. Nunca só um substantivo — isso é trabalho de <i>despite</i>.",
        "## A ordem e a vírgula",
        "Se a parte com <i>although</i> vem primeiro, entra vírgula no meio; se vem depois, não: <i>I finished the work <b>although</b> I was tired</i>.",
        "## Sem but na mesma frase",
        "<i>Although I was tired, <b>but</b> I finished</i> é erro: um contraste, um conector.",
        "## Os três do grupo",
        "<i>although</i> (neutro), <i>even though</i> (mais forte), <i>though</i> (informal, e o único que pode fechar a frase)."
      ],
      ex: [
        ["Although I was tired, I finished the work.", "Embora estivesse cansado, terminei o trabalho."],
        ["Even though it rained, the shoot went well.", "Mesmo tendo chovido, a gravação foi bem."],
        ["We took the trip though the tickets were expensive.", "Fizemos a viagem embora as passagens estivessem caras."]
      ]
    },
    {
      def: "<b>Despite</b> e <b>in spite of</b> dizem \"apesar de\" e pedem <b>substantivo</b> ou verbo em <b>-ing</b> — nunca uma frase com sujeito e verbo.",
      form: "despite / in spite of + substantivo ou -ing",
      marcar: ["Despite"],
      more: [
        "## O que vem depois",
        "Substantivo: <i><b>Despite the rain</b>, the shoot went well</i>. Verbo em -ing: <i><b>Despite being tired</b>, I finished it</i>.",
        "## Despite não leva of",
        "<i>despite the rain</i> e <i>in spite <b>of</b> the rain</i>. Escrever <i>despite of</i> é o erro mais comum do assunto.",
        "## Para usar com frase completa",
        "Entra <i>the fact that</i>: <i>Despite <b>the fact that</b> I was tired, I finished</i> — ou se troca por <i>although</i>, que é mais leve.",
        "## A equivalência",
        "<i>Although it rained, the shoot went well</i> = <i>Despite the rain, the shoot went well</i>. Mesma ideia, estruturas diferentes."
      ],
      ex: [
        ["Despite the rain, the shoot went well.", "Apesar da chuva, a gravação foi bem."],
        ["In spite of the delay, we made the connection.", "Apesar do atraso, conseguimos a conexão."],
        ["Despite being tired, I finished the edit.", "Apesar de estar cansado, terminei a edição."]
      ]
    },
    {
      def: "<b>So</b> apresenta a <b>consequência</b> e <b>because</b> apresenta a <b>causa</b>. A escolha depende de qual das duas metades vem depois do conector.",
      form: "causa, so consequência · consequência because causa",
      marcar: ["so"],
      more: [
        "## A ordem de cada um",
        "<i>The bus was late, <b>so</b> I missed the meeting</i> (causa → consequência). <i>I missed the meeting <b>because</b> the bus was late</i> (consequência → causa).",
        "## Os sinônimos formais",
        "Para consequência: <i>therefore</i>, <i>as a result</i>, <i>consequently</i>. Para causa: <i>since</i>, <i>as</i>, <i>due to</i> (+ substantivo).",
        "## Because of e due to",
        "Com substantivo, o <i>because</i> ganha <i>of</i>: <i><b>because of</b> the rain</i>, <i><b>due to</b> the strike</i>. Com frase, é <i>because</i> sozinho.",
        "## O erro comum",
        "Pôr os dois na mesma frase: <i>Because the bus was late, so I missed it</i>. Escolha um."
      ],
      ex: [
        ["The bus was late, so I missed the meeting.", "O ônibus atrasou, então perdi a reunião."],
        ["We changed the plan because the client asked.", "Mudamos o plano porque o cliente pediu."],
        ["The flight was cancelled due to the strike.", "O voo foi cancelado por causa da greve."]
      ]
    },
    {
      def: "<b>As soon as</b> marca o instante seguinte a um acontecimento. Como todo conector de tempo, ele <b>não aceita will</b>: o futuro vira presente.",
      form: "as soon as + presente, will + verbo",
      marcar: ["As soon as", "I'll"],
      more: [
        "## A regra do tempo",
        "<i><b>As soon as</b> the client <b>replies</b>, I<b>'ll</b> let you know</i> — presente na primeira metade, futuro na segunda. <i>As soon as he will reply</i> é erro.",
        "## Os outros conectores da mesma regra",
        "<i>when</i>, <i>before</i>, <i>after</i>, <i>until</i>, <i>while</i>, <i>once</i>: <i>I'll call you <b>when I arrive</b></i>, <i>Wait <b>until</b> they <b>confirm</b></i>.",
        "## Com present perfect, para marcar a conclusão",
        "<i>As soon as I <b>have finished</b> the report, I'll send it</i> — reforça que uma coisa termina antes da outra.",
        "## No passado",
        "Os dois verbos vão para o passado: <i><b>As soon as</b> he <b>called</b>, we <b>started</b></i>."
      ],
      ex: [
        ["As soon as the client replies, I'll let you know.", "Assim que o cliente responder, eu te aviso."],
        ["I'll text you when I land.", "Te mando mensagem quando eu pousar."],
        ["Wait here until they call your name.", "Espere aqui até chamarem seu nome."]
      ]
    }
  ],

  s12: [
    {
      def: "A escolha do tempo verbal depende de uma pergunta: o momento da ação <b>importa</b> e está fechado, ou o que importa é o efeito até agora?",
      form: "passado simples · have + particípio · had + particípio",
      marcar: ["I've already posted"],
      more: [
        "## O mapa",
        "Momento definido (<i>yesterday</i>, <i>last week</i>, <i>in 2023</i>) → passado simples: <i>I <b>posted</b> it yesterday</i>.",
        "Sem momento, com efeito agora (<i>already</i>, <i>just</i>, <i>yet</i>, <i>ever</i>) → <i>have</i> + particípio: <i>I<b>'ve already posted</b> it</i>.",
        "Algo anterior a outro momento do passado → <i>had</i> + particípio: <i>When I arrived, they <b>had</b> already <b>left</b></i>.",
        "## O que o português entrega",
        "O \"tinha feito\" aponta o <i>had</i> + particípio. O \"-ria\" (faria, seria) aponta o <i>would</i>. O \"estava fazendo\" aponta <i>was</i> + -ing.",
        "## Em andamento ou concluído",
        "<i>I've been writing all day</i> (a atividade) × <i>I've written three reports</i> (o resultado)."
      ],
      ex: [
        ["I've already posted it.", "Já postei."],
        ["I posted it yesterday morning.", "Postei ontem de manhã."],
        ["When I arrived, they had already left.", "Quando cheguei, eles já tinham saído."]
      ]
    },
    {
      def: "Os três condicionais se escolhem pela <b>realidade</b> da situação: pode acontecer, é imaginação sobre agora, ou já passou e não foi.",
      form: "if + presente / passado / had + particípio",
      marcar: ["If I had known", "would have"],
      more: [
        "## As três linhas",
        "Real: <i>If it <b>rains</b>, I<b>'ll</b> take an Uber</i>.",
        "Imaginário: <i>If I <b>had</b> a car, I <b>would</b> drive</i>.",
        "Perdido: <i>If I <b>had known</b>, I <b>would have</b> helped</i>.",
        "## A regra que vale para os três",
        "O <i>if</i> nunca leva <i>will</i> nem <i>would</i>: esses pertencem só à outra metade.",
        "## Misturado",
        "Causa no passado, efeito agora: <i>If I <b>had taken</b> that job, I <b>would be</b> in London now</i>.",
        "## Os parentes",
        "<i>unless</i> = se não (<i><b>Unless</b> they confirm, we won't go</i>), <i>in case</i> = por precaução (<i>Take the charger <b>in case</b> the battery dies</i>)."
      ],
      ex: [
        ["If I had known, I would have helped.", "Se eu soubesse, teria ajudado."],
        ["If the client agrees, we'll start on Monday.", "Se o cliente concordar, começamos segunda."],
        ["Unless they confirm today, we won't book the room.", "Se eles não confirmarem hoje, não reservamos a sala."]
      ]
    },
    {
      def: "Para contar o que alguém disse, o verbo <b>recua um tempo</b> e a estrutura perde a cara de fala direta. <i>Said</i> vai sem pessoa, <i>told</i> com pessoa.",
      form: "said / told + recuo do verbo",
      marcar: ["told me"],
      more: [
        "## O recuo",
        "<i>is</i> → <i>was</i>, <i>works</i> → <i>worked</i>, <i>will</i> → <i>would</i>, <i>can</i> → <i>could</i>, <i>did / has done</i> → <i>had done</i>.",
        "## A pessoa",
        "<i>She <b>told me</b> she was busy</i> × <i>She <b>said</b> she was busy</i>. <i>said me</i> não existe.",
        "## Pergunta contada",
        "Sem <i>do/did</i> e na ordem normal: <i>He asked <b>where I lived</b></i>, <i>He asked <b>if</b> I was coming</i>.",
        "## Pedido contado",
        "<i>asked / told + pessoa + to + verbo</i>: <i>She <b>asked me to</b> wait</i>, <i>He <b>told me not to</b> call</i>."
      ],
      ex: [
        ["She told me she was busy.", "Ela me disse que estava ocupada."],
        ["He asked if we had sent the invoice.", "Ele perguntou se tínhamos mandado a nota."],
        ["My boss told me to wait for the client.", "Meu chefe me disse para esperar o cliente."]
      ]
    },
    {
      def: "As preposições de tempo e lugar seguem o mesmo princípio em todos os níveis: <b>at</b> para o ponto, <b>on</b> para o dia e a superfície, <b>in</b> para o que envolve.",
      form: "at ponto · on dia e superfície · in período e interior",
      marcar: ["on Monday", "at 9"],
      more: [
        "## Tempo",
        "<i><b>at</b> 9</i>, <i><b>at</b> night</i>, <i><b>at</b> noon</i>. <i><b>on</b> Monday</i>, <i><b>on</b> March 3rd</i>. <i><b>in</b> March</i>, <i><b>in</b> 2027</i>, <i><b>in</b> the morning</i>, <i><b>in</b> two hours</i>.",
        "## Lugar",
        "<i><b>at</b> the bus stop</i>, <i><b>at</b> work</i>. <i><b>on</b> the table</i>, <i><b>on</b> the bus</i>, <i><b>on</b> Instagram</i>. <i><b>in</b> São Paulo</i>, <i><b>in</b> a car</i>, <i><b>in</b> the drawer</i>.",
        "## As que vivem com verbo",
        "<i>depend <b>on</b></i>, <i>wait <b>for</b></i>, <i>listen <b>to</b></i>, <i>arrive <b>at</b></i> (lugar pequeno) / <i>arrive <b>in</b></i> (cidade e país), <i>apply <b>for</b></i> a job, <i>interested <b>in</b></i>.",
        "## Sem preposição",
        "<i>today</i>, <i>tomorrow</i>, <i>next week</i>, <i>last year</i>, <i>home</i> (<i>go home</i>)."
      ],
      ex: [
        ["See you on Monday at 9.", "Até segunda às 9."],
        ["We arrive in Lisbon in the morning.", "Chegamos a Lisboa de manhã."],
        ["It depends on the budget.", "Depende do orçamento."]
      ]
    },
    {
      def: "A escolha entre <b>-ing</b> e <b>to</b> depende do verbo anterior — e, depois de preposição, é sempre <b>-ing</b>.",
      form: "enjoy + -ing · want + to · preposição + -ing",
      marcar: ["for helping"],
      more: [
        "## Os três grupos",
        "<i>-ing</i>: <i>enjoy</i>, <i>finish</i>, <i>avoid</i>, <i>keep</i>, <i>mind</i>, <i>suggest</i>, <i>recommend</i>.",
        "<i>to</i>: <i>want</i>, <i>need</i>, <i>decide</i>, <i>plan</i>, <i>hope</i>, <i>learn</i>, <i>try</i>, <i>offer</i>, <i>would like</i>.",
        "Os dois: <i>like</i>, <i>love</i>, <i>hate</i>, <i>start</i>, <i>continue</i>.",
        "## Depois de preposição",
        "Sem exceção: <i>Thanks <b>for</b> help<b>ing</b></i>, <i>good <b>at</b> speak<b>ing</b></i>, <i><b>before</b> leav<b>ing</b></i>, <i>look forward <b>to</b> meet<b>ing</b></i>.",
        "## Os que mudam de sentido",
        "<i>stop</i>, <i>remember</i>, <i>forget</i> e <i>try</i>: <i>stop <b>smoking</b></i> (parar de) × <i>stop <b>to smoke</b></i> (parar para)."
      ],
      ex: [
        ["Thanks for helping me.", "Obrigado por me ajudar."],
        ["We decided to postpone the launch.", "Decidimos adiar o lançamento."],
        ["I avoid scheduling calls before nine.", "Evito marcar ligações antes das nove."]
      ]
    },
    {
      def: "Modais, passiva e conectores completam o repertório do B2: o modal traz o verbo puro, a passiva traz o particípio, e o conector escolhe o que vem depois dele.",
      form: "modal + verbo puro · be + particípio · although frase, despite nome",
      marcar: ["was edited by"],
      more: [
        "## Modais",
        "<i>should</i>, <i>might</i>, <i>must</i>, <i>could</i> + verbo puro. No passado, <i>have</i> + particípio: <i>should <b>have</b> sent</i>, <i>must <b>have</b> forgotten</i>.",
        "## Passiva",
        "<i>is / was / has been / will be / must be</i> + particípio: <i>The video <b>was edited</b> by our team</i>. O <i>by</i> só entra quando o autor importa.",
        "## Conectores",
        "<i>although</i> + frase; <i>despite</i> + substantivo ou -ing; <i>however</i> abre frase nova com vírgula; <i>so</i> traz consequência, <i>because</i> traz causa.",
        "## O que revisar primeiro",
        "Se tiver pouco tempo, confira três coisas em qualquer texto seu: o tempo verbal combina com o momento? o <i>if</i> está livre de <i>will</i>? o conector está com o tipo certo de complemento?"
      ],
      ex: [
        ["The video was edited by our team.", "O vídeo foi editado pela nossa equipe."],
        ["The form must be signed before the trip.", "O formulário tem que ser assinado antes da viagem."],
        ["Despite the delay, the client was happy.", "Apesar do atraso, o cliente ficou satisfeito."]
      ]
    }
  ],

  c1m1: [
    {
      def: "Quando uma palavra <b>negativa</b> abre a frase, o inglês inverte a ordem: entra o auxiliar antes do sujeito, como numa pergunta. É recurso de ênfase, típico da escrita cuidada.",
      form: "negativa no início + auxiliar + sujeito · never have I seen",
      marcar: ["Never have I seen"],
      more: [
        "## As palavras que disparam a inversão",
        "<i>never</i>, <i>rarely</i>, <i>seldom</i>, <i>little</i>, <i>nowhere</i>, <i>at no time</i>: <i><b>Never have I</b> seen such a good result</i>, <i><b>Rarely do we</b> get this kind of feedback</i>.",
        "## Como se monta",
        "Pegue a frase normal (<i>I have never seen...</i>), leve a negativa para a frente e inverta o par sujeito-auxiliar: <i>Never <b>have I</b> seen...</i>. Se não havia auxiliar, entra <i>do / does / did</i>: <i>We rarely get</i> → <i>Rarely <b>do we</b> get</i>.",
        "## Sem segunda negativa",
        "A negação já está na primeira palavra: <i>Never have I <b>not</b> seen</i> está errado.",
        "## O efeito e o lugar certo",
        "É formal e enfático — ótimo em abertura de texto, discurso e apresentação; fora de lugar numa mensagem rápida, onde <i>I've never seen this before</i> é o natural."
      ],
      ex: [
        ["Never have I seen such a good result.", "Nunca vi um resultado tão bom."],
        ["Rarely do we get this kind of feedback.", "Raramente recebemos esse tipo de retorno."],
        ["Little did we know how long it would take.", "Mal sabíamos quanto tempo ia levar."]
      ]
    },
    {
      def: "<b>Not only ... but also</b> soma duas informações e dá peso às duas. Quando abre a frase, o <i>not only</i> também provoca a inversão.",
      form: "Not only + auxiliar + sujeito, but ... also",
      marcar: ["Not only did she"],
      more: [
        "## A estrutura completa",
        "<i><b>Not only did she</b> finish early, <b>but</b> she <b>also</b> helped the team</i>. O <i>also</i> fica junto do verbo da segunda metade.",
        "## Sem inversão, no meio da frase",
        "<i>She <b>not only</b> finished early <b>but also</b> helped the team</i> — mesma ideia, registro mais leve, sem inversão.",
        "## O par equilibrado",
        "O que vem depois de <i>not only</i> e de <i>but also</i> deve ser do mesmo tipo: dois verbos, dois substantivos, duas orações. <i>Not only the price but also the delivery</i>.",
        "## As variantes",
        "<i>but ... as well</i> e <i>but ... too</i> substituem o <i>also</i>. E <i>Not only that, but ...</i> emenda uma frase nova."
      ],
      ex: [
        ["Not only did she finish early, but she also helped the team.", "Ela não só terminou cedo, mas também ajudou a equipe."],
        ["Not only is it cheaper, but it's also faster.", "Não só é mais barato, mas também é mais rápido."],
        ["The hotel not only was full but also cost double.", "O hotel não só estava cheio, mas também custava o dobro."]
      ]
    },
    {
      def: "<b>Hardly ... when</b> e <b>no sooner ... than</b> dizem que uma coisa aconteceu <b>imediatamente antes</b> da outra — e as duas pedem inversão.",
      form: "Hardly had I ... when · No sooner had I ... than",
      marcar: ["No sooner had I", "than"],
      more: [
        "## Os dois moldes",
        "<i><b>Hardly had I</b> sent the email <b>when</b> I noticed the mistake</i>.",
        "<i><b>No sooner had I</b> sent the email <b>than</b> I noticed the mistake</i>.",
        "## O par que não se troca",
        "<i>hardly</i> anda com <b>when</b>; <i>no sooner</i> anda com <b>than</b>. Trocar os pares é o erro clássico.",
        "## A sequência dos tempos",
        "A primeira ação vai para <i>had</i> + particípio (ela é anterior), a segunda para o passado simples.",
        "## O equivalente simples",
        "Na conversa, diz-se <i>As soon as I sent the email, I noticed the mistake</i> ou <i>I had just sent it when...</i>"
      ],
      ex: [
        ["No sooner had I sent the email than I noticed the mistake.", "Assim que mandei o e-mail, percebi o erro."],
        ["Hardly had we landed when they called.", "Mal tínhamos pousado quando eles ligaram."],
        ["As soon as I sent it, I saw the typo.", "Assim que mandei, vi o erro de digitação."]
      ]
    },
    {
      def: "Com <b>only</b> e <b>not until</b> na frente, a inversão não cai na primeira metade: ela aparece na <b>segunda</b>, depois da vírgula.",
      form: "Only after ..., auxiliar + sujeito · Not until ..., auxiliar + sujeito",
      marcar: ["did I understand"],
      more: [
        "## Onde a inversão acontece",
        "<i><b>Only after the call did I</b> understand the problem</i> — a parte invertida é <i>did I understand</i>, não o começo.",
        "## As variantes",
        "<i>Only when</i>, <i>Only then</i>, <i>Only by</i>, <i>Not until</i>: <i><b>Only when</b> we tested it <b>did we find</b> the bug</i>, <i><b>Not until</b> Friday <b>will we have</b> an answer</i>.",
        "## Por que a ênfase funciona",
        "Pondo a condição na frente, a frase prende a atenção: só depois daquilo é que algo mudou. É recurso de narrativa e de relatório.",
        "## O equivalente neutro",
        "<i>I only understood the problem after the call</i> diz o mesmo sem inversão — o que convém numa mensagem rápida."
      ],
      ex: [
        ["Only after the call did I understand the problem.", "Só depois da ligação eu entendi o problema."],
        ["Only when we tested it did we find the bug.", "Só quando testamos é que achamos o bug."],
        ["Not until Friday will we have an answer.", "Só na sexta teremos uma resposta."]
      ]
    },
    {
      def: "Expressões negativas fixas como <b>under no circumstances</b> e <b>at no time</b> abrem a frase com peso de norma — e levam inversão.",
      form: "Under no circumstances + modal + sujeito",
      marcar: ["Under no circumstances should you"],
      more: [
        "## As expressões",
        "<i>under no circumstances</i> (em hipótese nenhuma), <i>at no time</i> (em momento algum), <i>in no way</i> (de modo algum), <i>on no account</i> (de jeito nenhum).",
        "## A estrutura",
        "Expressão + modal ou auxiliar + sujeito: <i><b>Under no circumstances should you</b> share this password</i>, <i><b>At no time was the client</b> informed</i>.",
        "## Onde aparecem",
        "Política de segurança, termo de uso, aviso legal e comunicado interno. São a forma mais enfática de proibir em inglês.",
        "## A alternativa direta",
        "<i>Please never share this password</i> ou <i>Do not share this password under any circumstances</i> — mesmo conteúdo, sem inversão."
      ],
      ex: [
        ["Under no circumstances should you share this password.", "Em hipótese nenhuma compartilhe esta senha."],
        ["At no time was the client informed.", "Em momento algum o cliente foi informado."],
        ["In no way does this change the contract.", "Isso não altera o contrato de modo algum."]
      ]
    }
  ],

  c1m2: [
    {
      def: "Um verbo em <b>-ing</b> no começo da frase encurta uma oração: diz o que acontecia <b>ao mesmo tempo</b> ou a <b>causa</b> do que vem depois.",
      form: "verbo-ing + vírgula + frase principal",
      marcar: ["Walking into the office"],
      more: [
        "## Os dois sentidos",
        "Simultaneidade: <i><b>Walking into the office</b>, I saw the new team</i> = enquanto eu entrava. Causa: <i><b>Not knowing what to say</b>, I stayed quiet</i> = como eu não sabia.",
        "## O que ela substitui",
        "<i>While I was walking into the office, I saw...</i> → a versão em <i>-ing</i> é mais curta e mais fluida; é o recurso de quem escreve bem em inglês.",
        "## A negativa",
        "<i>Not</i> vem antes do <i>-ing</i>: <i><b>Not having</b> the file, I couldn't check</i>.",
        "## O sujeito tem de ser o mesmo",
        "Essa é a regra que quebra a frase quando ignorada. <i>Walking into the office, the lights were off</i> diz que as luzes entraram no escritório."
      ],
      ex: [
        ["Walking into the office, I saw the new team.", "Entrando no escritório, vi a equipe nova."],
        ["Not knowing what to say, I stayed quiet.", "Não sabendo o que dizer, fiquei calado."],
        ["Looking at the numbers, I realized the mistake.", "Olhando os números, percebi o erro."]
      ]
    },
    {
      def: "<b>Having + particípio</b> marca o que veio <b>antes</b>: a primeira ação terminou e só então a segunda aconteceu.",
      form: "Having + particípio + vírgula + frase",
      marcar: ["Having finished the report"],
      more: [
        "## A diferença em relação ao -ing simples",
        "<i><b>Finishing</b> the report, he went home</i> sugere ao mesmo tempo; <i><b>Having finished</b> the report, he went home</i> deixa claro que primeiro terminou, depois foi.",
        "## O que ela substitui",
        "<i>After he had finished the report, he went home</i> — a forma com <i>having</i> economiza metade das palavras.",
        "## A negativa",
        "<i><b>Not having</b> received an answer, we called again</i>.",
        "## Na voz passiva",
        "<i><b>Having been</b> approved, the budget went to finance</i> = depois de ter sido aprovado."
      ],
      ex: [
        ["Having finished the report, he went home.", "Tendo terminado o relatório, ele foi para casa."],
        ["Not having received an answer, we called again.", "Não tendo recebido resposta, ligamos de novo."],
        ["Having checked in, we went straight to the gate.", "Depois de fazer o check-in, fomos direto para o portão."]
      ]
    },
    {
      def: "O <b>particípio</b> sozinho no começo da frase tem sentido <b>passivo</b>: a coisa de que se fala recebeu a ação.",
      form: "particípio + vírgula + frase · built in 1990, the building...",
      marcar: ["Built in 1990"],
      more: [
        "## Como se lê",
        "<i><b>Built in 1990</b>, the building needs repairs</i> = o prédio, que foi construído em 1990... O particípio se refere sempre ao sujeito da frase principal.",
        "## O que ela substitui",
        "<i>Because it was built in 1990</i> ou <i>The building, which was built in 1990,</i> — a versão curta serve para abrir parágrafo em texto jornalístico e técnico.",
        "## Os verbos frequentes",
        "<i>Written</i>, <i>founded</i>, <i>designed</i>, <i>based</i>, <i>given</i>, <i>faced with</i>: <i><b>Based in Lisbon</b>, the company serves all of Europe</i>, <i><b>Faced with</b> the delay, we rebooked</i>.",
        "## O sujeito, de novo",
        "A mesma regra vale: o particípio tem de descrever o sujeito. <i>Built in 1990, we bought the building</i> diz que nós fomos construídos em 1990."
      ],
      ex: [
        ["Built in 1990, the building needs repairs.", "Construído em 1990, o prédio precisa de reformas."],
        ["Based in Lisbon, the company serves all of Europe.", "Com sede em Lisboa, a empresa atende toda a Europa."],
        ["Faced with the delay, we rebooked the flight.", "Diante do atraso, remarcamos o voo."]
      ]
    },
    {
      def: "Relativas se encurtam: quando o <i>who / which / that</i> vem seguido de <b>to be</b>, os dois podem sair e sobra o <b>-ing</b> ou o <b>particípio</b>.",
      form: "sem who/which + -ing ou particípio",
      marcar: ["sitting by the window"],
      more: [
        "## Os dois cortes",
        "Ativo: <i>the woman <b>who is sitting</b> there</i> → <i>the woman <b>sitting</b> there</i>.",
        "Passivo: <i>the products <b>that are sold</b> online</i> → <i>the products <b>sold</b> online</i>.",
        "## Por que importa",
        "É o que deixa o texto profissional enxuto: <i>a report <b>written</b> by the team</i>, <i>the people <b>waiting</b> at the gate</i>, <i>items <b>included</b> in the price</i>.",
        "## Quando não dá para cortar",
        "Se o verbo não é <i>to be</i>: <i>the woman <b>who works</b> here</i> não vira <i>the woman working here</i> com o mesmo sentido — essa segunda sugere algo temporário.",
        "## Com infinitivo",
        "Depois de superlativo e de <i>the only</i>, usa-se <i>to</i>: <i>the first person <b>to arrive</b></i> = a primeira que chegou."
      ],
      ex: [
        ["The woman sitting by the window is our CEO.", "A mulher sentada junto à janela é nossa CEO."],
        ["The products sold online have a discount.", "Os produtos vendidos online têm desconto."],
        ["She was the first person to arrive.", "Ela foi a primeira pessoa a chegar."]
      ]
    },
    {
      def: "Toda frase que começa com <b>-ing</b>, <b>having</b> ou particípio tem uma condição: o <b>sujeito</b> das duas partes precisa ser o mesmo. Quando não é, a frase diz outra coisa.",
      form: "mesmo sujeito nas duas partes",
      marcar: ["Not knowing what to say"],
      more: [
        "## O erro e o que ele produz",
        "<i>Walking into the office, the lights were off</i> — quem entrou? As luzes. <i>Having finished the report, the client called</i> — quem terminou? O cliente.",
        "## Como consertar",
        "Duas saídas: trocar o sujeito da principal (<i>Walking into the office, <b>I noticed</b> the lights were off</i>) ou devolver a conjunção (<i><b>When I walked</b> into the office, the lights were off</i>).",
        "## O teste rápido",
        "Leia só a primeira parte e pergunte \"quem?\". A resposta tem de ser o sujeito que vem depois da vírgula.",
        "## Onde esse erro aparece mais",
        "Em e-mail e relatório traduzidos do português, porque o nosso gerúndio é mais solto. Em inglês, ele cola no sujeito."
      ],
      ex: [
        ["Not knowing what to say, I stayed quiet.", "Não sabendo o que dizer, fiquei calado."],
        ["When I walked into the office, the lights were off.", "Quando entrei no escritório, as luzes estavam apagadas."],
        ["Having read the contract, we asked for two changes.", "Tendo lido o contrato, pedimos duas mudanças."]
      ]
    }
  ],

  c1m3: [
    {
      def: "A <b>cleft sentence</b> com <i>what</i> divide a frase em duas para pôr holofote sobre uma parte: o que importa vem no fim.",
      form: "What + frase + is / was + o foco",
      marcar: ["What we need is"],
      more: [
        "## Como se monta",
        "<i>We need more time</i> → <i><b>What we need is</b> more time</i>. A informação importante fica depois do verbo <i>to be</i>, onde o inglês naturalmente põe o peso.",
        "## As variações",
        "<i>What I like about it is...</i>, <i>What happened was...</i>, <i>What surprised me was...</i>, <i>What she did was call the client</i> (com verbo puro depois).",
        "## No passado",
        "<i><b>What we needed was</b> more time</i>. O <i>to be</i> acompanha o tempo da frase.",
        "## O efeito",
        "Serve para contrastar com o que o outro disse: <i>— You need more people. — <b>What we need is</b> more time</i>."
      ],
      ex: [
        ["What we need is more time.", "O que precisamos é de mais tempo."],
        ["What surprised me was the price.", "O que me surpreendeu foi o preço."],
        ["What she did was call the client directly.", "O que ela fez foi ligar direto para o cliente."]
      ]
    },
    {
      def: "<b>It is / It was ... who / that</b> destaca uma pessoa ou uma coisa específica, como quem aponta o dedo: foi essa, e não outra.",
      form: "It is / was + foco + who / that + resto",
      marcar: ["It was Ana who"],
      more: [
        "## Como se monta",
        "<i>Ana closed the deal</i> → <i><b>It was Ana who</b> closed the deal</i>. O destaque vai logo depois do <i>It was</i>.",
        "## Who ou that",
        "<i>who</i> para pessoa, <i>that</i> para o resto: <i><b>It was the price that</b> killed the deal</i>, <i><b>It's the timing that</b> worries me</i>.",
        "## Para qualquer parte da frase",
        "Pode destacar o tempo, o lugar ou o motivo: <i><b>It was on Friday that</b> they called</i>, <i><b>It was because of the strike that</b> we cancelled</i>.",
        "## O uso corretivo",
        "É a estrutura de desfazer um engano: <i>— So João signed it? — No, <b>it was Ana who</b> signed it</i>."
      ],
      ex: [
        ["It was Ana who closed the deal.", "Foi a Ana que fechou o negócio."],
        ["It was the price that killed the deal.", "Foi o preço que derrubou o negócio."],
        ["It was on Friday that they finally called.", "Foi na sexta que eles finalmente ligaram."]
      ]
    },
    {
      def: "Outras aberturas de destaque: <b>All I want is</b>, <b>The thing is</b> e <b>The reason why</b> organizam o que você vai dizer antes de dizê-lo.",
      form: "All ... is · The thing is, ... · The reason why ... is",
      marcar: ["All I want is"],
      more: [
        "## All, no sentido de só",
        "<i><b>All I want is</b> a clear answer</i> = tudo o que quero é. Com verbo: <i><b>All you have to do is</b> send the link</i> — depois do <i>is</i> vem o verbo puro.",
        "## The thing is",
        "<i><b>The thing is</b>, we don't have the budget</i> — anuncia a complicação. Vizinhos: <i>The problem is...</i>, <i>The point is...</i>, <i>The fact is...</i>",
        "## The reason why",
        "<i><b>The reason why</b> we changed it <b>is</b> the feedback</i>. Em texto formal, prefere-se <i>The reason <b>that</b></i> ou só <i>The reason</i>.",
        "## O efeito comum aos três",
        "Eles preparam o ouvinte e dão tempo ao falante — por isso aparecem tanto em reunião e negociação."
      ],
      ex: [
        ["All I want is a clear answer.", "Tudo o que eu quero é uma resposta clara."],
        ["All you have to do is send the link.", "Você só precisa mandar o link."],
        ["The thing is, we don't have the budget for it.", "A questão é que não temos orçamento para isso."]
      ]
    },
    {
      def: "O <b>do</b> de ênfase entra numa frase afirmativa só para reforçá-la: equivale ao nosso \"sim\" no fim da frase.",
      form: "do / does / did + verbo puro · I do understand",
      marcar: ["I do understand"],
      more: [
        "## Como funciona",
        "<i>I understand</i> → <i>I <b>do</b> understand your concern</i> = entendo, sim. <i>She <b>did</b> call</i> = ela ligou, sim.",
        "## Quando usar",
        "Para contrariar uma dúvida (<i>— You don't care. — I <b>do</b> care</i>), para reconhecer antes de discordar (<i>It <b>does</b> look expensive, but...</i>) e para insistir num convite (<i><b>Do</b> let me know</i>).",
        "## A forma",
        "<i>do</i> / <i>does</i> no presente, <i>did</i> no passado, e o verbo principal fica puro: <i>She <b>did</b> send it</i>, nunca <i>did sent</i>.",
        "## Na fala",
        "A ênfase mora no <i>do</i>, que recebe a força da voz. Sem isso, a frase soa só esquisita."
      ],
      ex: [
        ["I do understand your concern.", "Eu entendo sua preocupação, sim."],
        ["She did send the invoice on Monday.", "Ela mandou a nota na segunda, sim."],
        ["Do let me know if anything changes.", "Me avise, por favor, se algo mudar."]
      ]
    }
  ],

  c1m4: [
    {
      def: "<b>Unless</b> significa \"a menos que\" e funciona como <i>if not</i>: apresenta a <b>única condição</b> que evita o resultado.",
      form: "unless + presente · we'll lose the client unless...",
      marcar: ["unless"],
      more: [
        "## A equivalência",
        "<i>We'll lose the client <b>unless</b> we lower the price</i> = <i><b>if we don't</b> lower the price</i>. As duas dizem o mesmo.",
        "## Não leva outra negativa",
        "O <i>unless</i> já é negativo: <i>unless we <b>don't</b> lower</i> inverte o sentido sem querer.",
        "## O tempo depois dele",
        "Como todo conector de condição, não aceita <i>will</i>: <i>unless we <b>lower</b></i>, nunca <i>unless we will lower</i>.",
        "## Quando if not é melhor",
        "Para possibilidades múltiplas e para dúvida, prefere-se <i>if not</i>: <i>I'll be surprised <b>if</b> she <b>doesn't</b> call</i> soa melhor que a versão com <i>unless</i>."
      ],
      ex: [
        ["We'll lose the client unless we lower the price.", "Vamos perder o cliente a menos que baixemos o preço."],
        ["Unless they confirm today, we'll cancel the room.", "Se eles não confirmarem hoje, cancelamos a sala."],
        ["I won't travel unless the client pays in advance.", "Não viajo a menos que o cliente pague adiantado."]
      ]
    },
    {
      def: "<b>As long as</b> e <b>provided that</b> dizem \"desde que\": estabelecem a condição sob a qual algo é permitido.",
      form: "as long as / provided that + presente",
      marcar: ["as long as"],
      more: [
        "## Os três do grupo",
        "<i>as long as</i> (o mais comum na fala), <i>provided that</i> e <i>providing that</i> (formais, de contrato), <i>on condition that</i> (o mais formal de todos).",
        "## Como soam",
        "<i>You can work from home <b>as long as</b> you meet the deadlines</i>, <i>We'll extend the deadline <b>provided that</b> you tell us today</i>.",
        "## O that é opcional",
        "<i>provided you tell us</i> funciona igual.",
        "## O tempo",
        "Presente, nunca futuro: <i>as long as you <b>meet</b></i>. E, no passado, passado simples: <i>as long as it <b>didn't</b> rain</i>."
      ],
      ex: [
        ["You can work from home as long as you meet the deadlines.", "Você pode trabalhar de casa desde que cumpra os prazos."],
        ["We'll extend the deadline provided that you tell us today.", "Vamos estender o prazo desde que você nos avise hoje."],
        ["I'll take the later flight as long as there's wifi.", "Pego o voo mais tarde desde que tenha wifi."]
      ]
    },
    {
      def: "<b>Otherwise</b> aponta o que acontece se a condição <b>não</b> for cumprida — o nosso \"senão\", \"caso contrário\".",
      form: "frase; otherwise, consequência",
      marcar: ["otherwise"],
      more: [
        "## Como se escreve",
        "Depois de ponto e vírgula ou de ponto, com vírgula: <i>Send it today; <b>otherwise</b>, we'll miss the deadline</i>.",
        "## O que ele resume",
        "Equivale a <i>if you don't</i>: a frase inteira anterior vira a condição, sem precisar repeti-la.",
        "## O outro sentido",
        "<i>otherwise</i> também significa \"de outro modo, no mais\": <i>The hotel was noisy; <b>otherwise</b>, it was fine</i>.",
        "## Os parentes",
        "<i>or else</i> é a versão informal e um pouco ameaçadora (<i>Send it, <b>or else</b>...</i>); <i>failing that</i> é a formal (<i><b>Failing that</b>, we'll reschedule</i>)."
      ],
      ex: [
        ["Send it today; otherwise, we'll miss the deadline.", "Mande hoje; senão, vamos perder o prazo."],
        ["Book now, otherwise the price goes up.", "Reserve agora, senão o preço sobe."],
        ["The flight was delayed; otherwise, the trip was perfect.", "O voo atrasou; no mais, a viagem foi perfeita."]
      ]
    },
    {
      def: "<b>In case</b> fala de <b>precaução</b>: você faz algo <i>porque</i> talvez a outra coisa aconteça. Não é a mesma ideia de <i>if</i>.",
      form: "in case + presente · take your laptop in case...",
      marcar: ["in case"],
      more: [
        "## A diferença com if",
        "<i>Take your laptop <b>in case</b> the meeting goes online</i> = leve de qualquer forma, por precaução. <i>Take your laptop <b>if</b> the meeting goes online</i> = leve só se isso acontecer.",
        "## O tempo depois dele",
        "Presente, mesmo falando do futuro: <i>in case it <b>rains</b></i>, nunca <i>in case it will rain</i>.",
        "## In case of + substantivo",
        "Em aviso, aparece a forma curta: <i><b>In case of</b> fire, use the stairs</i>. Com frase completa, é só <i>in case</i>.",
        "## Just in case",
        "No fim da frase, sozinho: <i>I'll bring the charger, <b>just in case</b></i>."
      ],
      ex: [
        ["Take your laptop in case the meeting goes online.", "Leve seu notebook caso a reunião vire online."],
        ["I'll print the tickets in case the app doesn't work.", "Vou imprimir as passagens caso o app não funcione."],
        ["In case of fire, use the stairs.", "Em caso de incêndio, use as escadas."]
      ]
    },
    {
      def: "Em registro formal, o <i>if</i> pode <b>desaparecer</b>: o auxiliar vai para a frente do sujeito e sustenta a condição sozinho.",
      form: "Had I known · Should you need · Were I you",
      marcar: ["Should you need"],
      more: [
        "## As três formas",
        "<i><b>Had I known</b></i> = if I had known. <i><b>Should you need</b></i> = if you need. <i><b>Were I you</b></i> = if I were you.",
        "## Onde aparecem",
        "<i>Should you need any help, please contact me</i> é fórmula de e-mail corporativo; <i>Had we known about the delay, we would have rebooked</i> é de relatório e carta formal.",
        "## A negativa não se contrai",
        "<i><b>Had we not</b> known</i>, não <i>Hadn't we known</i> — a contração transformaria a frase em pergunta.",
        "## O equivalente neutro",
        "Em mensagem do dia a dia, <i>If you need anything, let me know</i> é o que se escreve. A inversão é para quando o tom precisa ser formal."
      ],
      ex: [
        ["Should you need any help, please contact me.", "Se precisar de ajuda, entre em contato."],
        ["Had we known about the delay, we would have rebooked.", "Se soubéssemos do atraso, teríamos remarcado."],
        ["Were I you, I'd ask for a written confirmation.", "Se eu fosse você, pediria confirmação por escrito."]
      ]
    }
  ],

  c1m5: [
    {
      def: "<b>Make</b> acompanha o que se <b>produz</b> ou se gera: decisão, erro, esforço, progresso. A combinação é fixa e não se deduz.",
      form: "make + decision, mistake, effort, progress",
      marcar: ["make a decision"],
      more: [
        "## As combinações frequentes",
        "<i>make a decision</i>, <i>make a mistake</i>, <i>make an effort</i>, <i>make progress</i>, <i>make an appointment</i>, <i>make a suggestion</i>, <i>make a profit</i>, <i>make a difference</i>, <i>make sure</i>, <i>make money</i>.",
        "## A lógica, quando existe",
        "<i>make</i> tende a criar algo que não existia antes: uma decisão, um plano, um erro, um lucro.",
        "## Os que confundem com do",
        "<i>make a decision</i>, não <i>do a decision</i>. <i>do research</i>, não <i>make research</i>. <i>make an exam</i> não existe: prova é <i>take an exam</i>.",
        "## Make + alguém + verbo puro",
        "Outro uso: obrigar ou causar. <i>The delay <b>made us miss</b> the connection</i>, <i>It <b>makes me think</b> about the budget</i>."
      ],
      ex: [
        ["We need to make a decision this week.", "Precisamos tomar uma decisão esta semana."],
        ["They've made a lot of progress since January.", "Eles progrediram muito desde janeiro."],
        ["Make sure you confirm the booking.", "Confirme a reserva, sem falta."]
      ]
    },
    {
      def: "<b>Do</b> acompanha <b>atividade</b> e <b>trabalho</b>: negócio, pesquisa, favor, o seu melhor. É o verbo do que se executa.",
      form: "do + business, research, a favour, your best",
      marcar: ["do business"],
      more: [
        "## As combinações frequentes",
        "<i>do business</i>, <i>do research</i>, <i>do a favour</i>, <i>do your best</i>, <i>do the paperwork</i>, <i>do an exercise</i>, <i>do harm</i>, <i>do well</i>, <i>do a course</i>, <i>do the dishes</i>.",
        "## A lógica, quando existe",
        "<i>do</i> cobre tarefa e ocupação — o que se faz, não o que se cria.",
        "## O par que todo mundo erra",
        "<i>do</i> + trabalho em geral (<i>I have a lot of work to <b>do</b></i>) × <i>make</i> + resultado (<i>make a plan</i>).",
        "## Nas expressões de trabalho",
        "<i>do overtime</i> = fazer hora extra. <i>do the math</i> = fazer a conta. <i>do a good job</i> = fazer um bom trabalho."
      ],
      ex: [
        ["We do business in five countries.", "Fazemos negócios em cinco países."],
        ["Could you do me a favour?", "Você poderia me fazer um favor?"],
        ["They did a great job on the launch.", "Eles fizeram um ótimo trabalho no lançamento."]
      ]
    },
    {
      def: "<b>Take</b> acompanha o que se <b>assume</b> ou se leva em consideração: responsabilidade, parte, providência, tempo.",
      form: "take + into account, part, responsibility, action",
      marcar: ["take the budget into account"],
      more: [
        "## As combinações frequentes",
        "<i>take into account</i>, <i>take part in</i>, <i>take responsibility for</i>, <i>take action</i>, <i>take a decision</i> (britânico), <i>take a look</i>, <i>take notes</i>, <i>take a break</i>, <i>take advantage of</i>, <i>take place</i> (acontecer).",
        "## A ordem de take into account",
        "O objeto pode ficar no meio ou no fim: <i>take <b>the budget</b> into account</i> ou <i>take into account <b>the budget</b></i>. Com pronome, só no meio: <i>take <b>it</b> into account</i>.",
        "## O take de tempo",
        "<i>It <b>takes</b> two hours</i> = leva duas horas. <i>How long does it <b>take</b>?</i> é a pergunta padrão sobre duração.",
        "## Os falsos pares",
        "<i>take a photo</i>, não <i>make a photo</i>. <i>take an exam</i>, não <i>do an exam</i> (embora <i>do well in an exam</i> exista)."
      ],
      ex: [
        ["Please take the budget into account.", "Por favor, leve o orçamento em consideração."],
        ["Everyone took part in the discussion.", "Todos participaram da discussão."],
        ["The meeting takes place on the 12th.", "A reunião acontece no dia 12."]
      ]
    },
    {
      def: "O vocabulário de <b>prazo, meta e acordo</b> também anda em pares fixos — e usá-los certo é o que faz o inglês soar profissional.",
      form: "meet a deadline · set a goal · reach an agreement",
      marcar: ["meet the deadline"],
      more: [
        "## As combinações",
        "<i>meet a deadline</i> = cumprir o prazo. <i>miss a deadline</i> = perder o prazo. <i>extend a deadline</i> = estender. <i>set a goal</i> = definir uma meta. <i>reach an agreement</i> = chegar a um acordo. <i>raise a concern</i> = levantar uma preocupação.",
        "## Mais do mesmo campo",
        "<i>meet expectations</i>, <i>meet requirements</i>, <i>hit a target</i>, <i>cut costs</i>, <i>close a deal</i>, <i>launch a product</i>, <i>run a meeting</i>, <i>attend a meeting</i>, <i>submit a proposal</i>.",
        "## Os que não existem",
        "<i>accomplish a deadline</i>, <i>arrive to an agreement</i>, <i>put a goal</i> — todos traduções literais que soam estranhas.",
        "## Como aprender",
        "Collocation não se deduz: anote em pares, não em palavras isoladas. Vale guardar \"meet a deadline\" inteiro, como se fosse uma única palavra."
      ],
      ex: [
        ["We worked all weekend to meet the deadline.", "Trabalhamos o fim de semana todo para cumprir o prazo."],
        ["They reached an agreement on Friday.", "Eles chegaram a um acordo na sexta."],
        ["I'd like to raise a concern about the timeline.", "Gostaria de levantar uma preocupação sobre o cronograma."]
      ]
    }
  ],

  c1m6: [
    {
      def: "Os conectores formais organizam o texto escrito: eles dizem ao leitor se o que vem é soma, contraste ou conclusão. Vão no começo da frase, com vírgula.",
      form: "moreover · nevertheless · whereas · hence",
      marcar: ["Nevertheless"],
      more: [
        "## Por função",
        "Somar: <i>moreover</i>, <i>furthermore</i>, <i>in addition</i>.",
        "Contrastar: <i>nevertheless</i>, <i>nonetheless</i>, <i>however</i>, <i>on the contrary</i>.",
        "Comparar lado a lado: <i>whereas</i>, <i>while</i> (no meio da frase, sem vírgula antes em texto britânico).",
        "Concluir: <i>hence</i>, <i>thus</i>, <i>therefore</i>, <i>consequently</i>, <i>as a result</i>.",
        "## A pontuação",
        "No início, vírgula depois: <i><b>Nevertheless</b>, the event was a success</i>. No meio, entre vírgulas: <i>The event, <b>however</b>, was a success</i>.",
        "## O cuidado com o excesso",
        "Um conector por ideia basta. Texto cheio de <i>moreover</i> e <i>furthermore</i> soa artificial — e, em e-mail curto, <i>also</i> e <i>but</i> fazem o serviço.",
        "## Whereas é só de contraste",
        "<i>Sales grew in Brazil, <b>whereas</b> they fell in Chile</i> — compara dois fatos opostos, nunca marca tempo."
      ],
      ex: [
        ["The budget was small. Nevertheless, the event was a success.", "O orçamento era pequeno. Ainda assim, o evento foi um sucesso."],
        ["Sales grew in Brazil, whereas they fell in Chile.", "As vendas cresceram no Brasil, enquanto caíram no Chile."],
        ["The supplier missed two deadlines; hence the change.", "O fornecedor perdeu dois prazos; daí a mudança."]
      ]
    },
    {
      def: "O e-mail formal em inglês funciona com <b>fórmulas prontas</b>. Usá-las não é falta de criatividade: é o que o leitor espera encontrar.",
      form: "I am writing to... · Please find attached... · I look forward to...",
      marcar: ["Please find attached"],
      more: [
        "## A abertura",
        "<i>I am writing to <b>confirm</b> / <b>ask about</b> / <b>follow up on</b>...</i>, <i>I hope this email finds you well</i> (neutro), <i>Thank you for your prompt reply</i>.",
        "## O meio",
        "<i><b>Please find attached</b> the signed contract</i>, <i><b>I would appreciate it if you could</b> send it by Friday</i>, <i><b>Could you please</b> confirm the details?</i>, <i><b>As discussed</b>, we'll start in March</i>.",
        "## O fecho",
        "<i>I look forward to hearing from you</i>, <i>Please let me know if you need anything else</i>, <i>Best regards</i> / <i>Kind regards</i>.",
        "## O detalhe do look forward",
        "Depois dele vem <i>-ing</i>, porque o <i>to</i> é preposição: <i>I look forward to <b>hearing</b> from you</i>, nunca <i>to hear</i>.",
        "## O nome e a saudação",
        "<i>Dear Ms Silva</i> (formal), <i>Dear Ana</i> (formal e próximo), <i>Hi Ana</i> (do dia a dia). Sem nome: <i>Dear Sir or Madam</i> ou <i>To whom it may concern</i>."
      ],
      ex: [
        ["Please find attached the signed contract.", "Segue em anexo o contrato assinado."],
        ["I would appreciate it if you could reply by Friday.", "Eu agradeceria se você pudesse responder até sexta."],
        ["I look forward to hearing from you.", "Fico no aguardo do seu retorno."]
      ]
    },
    {
      def: "Para subir o registro, troca-se a palavra do dia a dia pela de origem latina. O sentido é o mesmo; muda o <b>tom</b>.",
      form: "ask → request · need → require · buy → purchase",
      marcar: ["request"],
      more: [
        "## A tabela de troca",
        "<i>ask → <b>request</b></i>, <i>need → <b>require</b></i>, <i>help → <b>assist</b></i>, <i>buy → <b>purchase</b></i>, <i>get → <b>receive</b></i>, <i>show → <b>demonstrate</b></i>, <i>start → <b>commence</b></i>, <i>end → <b>conclude</b></i>, <i>tell → <b>inform</b></i>, <i>use → <b>utilise</b></i>, <i>check → <b>verify</b></i>, <i>fix → <b>resolve</b></i>.",
        "## O outro lado da moeda",
        "Em excesso, essa troca deixa o texto frio e difícil. O inglês corporativo moderno prefere clareza: <i>We need a meeting</i> costuma ser melhor que <i>We require a meeting</i>.",
        "## Os phrasal verbs caem no formal",
        "O registro formal troca o phrasal por um verbo único: <i>find out → <b>discover</b></i>, <i>put off → <b>postpone</b></i>, <i>set up → <b>establish</b></i>, <i>go over → <b>review</b></i>, <i>come up with → <b>propose</b></i>.",
        "## O que mais marca o registro",
        "Mais do que a palavra, a estrutura: evitar contrações (<i>I am</i> em vez de <i>I'm</i>), usar passiva (<i>It was decided</i>) e frases completas em vez de fragmentos."
      ],
      ex: [
        ["We would like to request a meeting next week.", "Gostaríamos de solicitar uma reunião na semana que vem."],
        ["The client requires a written confirmation.", "O cliente exige uma confirmação por escrito."],
        ["The launch has been postponed to June.", "O lançamento foi adiado para junho."]
      ]
    }
  ],

  c2m1: [
    {
      def: "Expressões de <b>começo e alinhamento</b>: o inglês de trabalho usa imagens fixas para dizer que algo vai começar ou que as pessoas estão de acordo.",
      form: "get the ball rolling · touch base · on the same page",
      marcar: ["get the ball rolling"],
      more: [
        "## O que cada uma diz",
        "<i><b>get the ball rolling</b></i> = dar o pontapé inicial, fazer a coisa andar.",
        "<i><b>touch base</b></i> = dar uma conversada rápida para alinhar (<i>Let's touch base on Monday</i>).",
        "<i><b>on the same page</b></i> = alinhados, com o mesmo entendimento (<i>I want to make sure we're on the same page</i>).",
        "## Os vizinhos",
        "<i><b>kick off</b></i> = iniciar (daí <i>a kick-off meeting</i>). <i><b>circle back</b></i> = voltar a um assunto depois. <i><b>loop in</b></i> = incluir alguém na conversa. <i><b>align on</b></i> = alinhar sobre.",
        "## Onde não usar",
        "Em texto formal escrito, idioma de escritório soa informal. Em contrato e relatório, prefira <i>begin</i>, <i>discuss</i>, <i>agree on</i>.",
        "## O cuidado com a tradução",
        "Idioma não se traduz palavra por palavra: <i>touch base</i> não tem nada a ver com tocar base. Guarde a expressão inteira e a situação em que ela cabe."
      ],
      ex: [
        ["Let's get the ball rolling today.", "Vamos dar o pontapé inicial hoje."],
        ["I'll touch base with the client on Monday.", "Vou alinhar com o cliente na segunda."],
        ["I want to make sure we're on the same page.", "Quero garantir que estamos alinhados."]
      ]
    },
    {
      def: "Expressões de <b>problema</b>: quando o trabalho volta ao começo, quando se economiza no lugar errado e quando a chance é remota.",
      form: "back to square one · cut corners · a long shot",
      marcar: ["back to square one"],
      more: [
        "## O que cada uma diz",
        "<i><b>back to square one</b></i> = de volta à estaca zero.",
        "<i><b>cut corners</b></i> = economizar tempo ou dinheiro sacrificando a qualidade.",
        "<i><b>a long shot</b></i> = uma tentativa com pouca chance (<i>It's a long shot, but let's try</i>).",
        "## Os vizinhos",
        "<i><b>drop the ball</b></i> = deixar a peteca cair. <i><b>a bottleneck</b></i> = o gargalo. <i><b>up in the air</b></i> = ainda em aberto. <i><b>a tight deadline</b></i> = prazo apertado. <i><b>behind schedule</b></i> = atrasado no cronograma.",
        "## Como soam na conversa",
        "São a forma honesta e leve de dar má notícia: <i>We're a bit behind schedule</i> abre a conversa melhor que <i>We failed</i>.",
        "## A versão neutra",
        "Em e-mail formal, o mesmo conteúdo vira <i>We will need to restart the process</i> ou <i>The project is currently delayed</i>."
      ],
      ex: [
        ["We're back to square one.", "Estamos de volta à estaca zero."],
        ["We can't cut corners on security.", "Não podemos economizar na segurança."],
        ["It's a long shot, but let's send the proposal.", "A chance é pequena, mas vamos mandar a proposta."]
      ]
    },
    {
      def: "Expressões de <b>número e resultado</b>: o vocabulário de quem fala de custo, estimativa e ponto de equilíbrio.",
      form: "the bottom line · a ballpark figure · break even",
      marcar: ["a ballpark figure"],
      more: [
        "## O que cada uma diz",
        "<i><b>the bottom line</b></i> = o que importa no fim (e, na contabilidade, o resultado final).",
        "<i><b>a ballpark figure</b></i> = um número aproximado (<i>Can you give me a ballpark figure?</i>).",
        "<i><b>break even</b></i> = empatar receita e custo, sem lucro nem prejuízo.",
        "## Os vizinhos",
        "<i><b>in the black</b></i> / <i><b>in the red</b></i> = no lucro / no prejuízo. <i><b>cash flow</b></i> = fluxo de caixa. <i><b>a rough estimate</b></i> = uma estimativa aproximada. <i><b>the ROI</b></i> = o retorno sobre o investimento.",
        "## A fórmula de abertura",
        "<i>The bottom line is</i> ... serve para resumir uma discussão longa: <i><b>The bottom line is</b> we can't afford it this quarter</i>.",
        "## Em reunião de números",
        "<i>off the top of my head</i> = de cabeça, sem consultar: <i>Off the top of my head, around twenty thousand</i>."
      ],
      ex: [
        ["Can you give me a ballpark figure?", "Você pode me dar um número aproximado?"],
        ["The bottom line is we need more time.", "No fim das contas, precisamos de mais tempo."],
        ["We expect to break even by December.", "Esperamos empatar os custos até dezembro."]
      ]
    },
    {
      def: "Expressões do <b>dia a dia</b> de escritório: encerrar, manter alguém informado e nomear o assunto que ninguém quer tocar.",
      form: "call it a day · keep in the loop · the elephant in the room",
      marcar: ["call it a day"],
      more: [
        "## O que cada uma diz",
        "<i><b>call it a day</b></i> = encerrar por hoje.",
        "<i><b>keep someone in the loop</b></i> = manter alguém informado (<i>Keep me in the loop</i>).",
        "<i><b>the elephant in the room</b></i> = o problema óbvio de que ninguém fala.",
        "## Os vizinhos",
        "<i><b>a heads-up</b></i> = um aviso prévio (<i>Thanks for the heads-up</i>). <i><b>on my plate</b></i> = na minha conta de tarefas. <i><b>burn out</b></i> = esgotar-se. <i><b>wear many hats</b></i> = acumular funções. <i><b>ASAP</b></i> = o quanto antes.",
        "## O registro",
        "Todas servem em conversa, chat de trabalho e reunião informal. Em comunicado oficial, prefira a versão direta: <i>Let's finish for today</i>, <i>Please keep me informed</i>.",
        "## O ganho real",
        "Quem reconhece essas expressões entende reunião em inglês com muito menos esforço — elas aparecem mais que o vocabulário técnico."
      ],
      ex: [
        ["Let's call it a day.", "Vamos encerrar por hoje."],
        ["Keep me in the loop, please.", "Me mantenha informado, por favor."],
        ["Nobody mentioned the elephant in the room: the budget.", "Ninguém tocou no assunto óbvio: o orçamento."]
      ]
    }
  ],

  c2m2: [
    {
      def: "Para <b>suavizar</b> uma afirmação, o inglês coloca uma camada de distância entre você e o que diz: a informação continua, o compromisso diminui.",
      form: "It seems that... · apparently · arguably",
      marcar: ["It seems that"],
      more: [
        "## As fórmulas",
        "<i><b>It seems that</b> the client is not happy</i>, <i><b>It would appear that</b> there was a misunderstanding</i> (mais formal ainda), <i><b>Apparently</b>, they changed the brief</i>, <i><b>Arguably</b>, this is the best option</i> (pode-se defender que).",
        "## Por que isso importa",
        "Em inglês profissional, afirmar demais soa agressivo. O hedging deixa espaço para o outro discordar sem confronto — e protege quem fala, caso o dado esteja incompleto.",
        "## As versões leves",
        "<i>I think</i>, <i>I'd say</i>, <i>it looks like</i>, <i>from what I understand</i>, <i>as far as I know</i>, <i>correct me if I'm wrong</i>.",
        "## O limite",
        "Em excesso, o texto perde força e parece esquivo. Uma camada por frase é o suficiente: <i>It seems the deadline will slip</i>, não <i>It would appear that it may possibly seem that...</i>"
      ],
      ex: [
        ["It seems that the client is not happy.", "Parece que o cliente não está satisfeito."],
        ["Apparently, they changed the brief without telling us.", "Ao que parece, mudaram o briefing sem nos avisar."],
        ["Arguably, this is the best option we have.", "Pode-se dizer que esta é a melhor opção que temos."]
      ]
    },
    {
      def: "Para falar de <b>probabilidade</b>, o inglês tem uma escala própria de expressões — de \"é bem possível\" até \"com certeza vai\".",
      form: "is likely to · may well · is bound to",
      marcar: ["are likely to"],
      more: [
        "## A escala",
        "<i>is unlikely to</i> (pouco provável) → <i>may / might</i> (possível) → <i>may well</i> (bem possível) → <i>is likely to</i> (provável) → <i>is bound to</i> (fatalmente vai).",
        "## Como se constroem",
        "<i>Sales <b>are likely to</b> grow next year</i> — depois de <i>likely</i> vem <i>to</i> + verbo. Também existe a forma com <i>that</i>: <i><b>It's likely that</b> sales will grow</i>.",
        "## Os parentes",
        "<i>there's a good chance</i>, <i>the odds are</i>, <i>in all likelihood</i>, <i>chances are</i>: <i><b>Chances are</b> they'll ask for a discount</i>.",
        "## O detalhe de bound to",
        "<i>is bound to</i> sugere algo inevitável, muitas vezes indesejado: <i>With this timeline, something <b>is bound to</b> go wrong</i>."
      ],
      ex: [
        ["Sales are likely to grow next year.", "As vendas provavelmente vão crescer no ano que vem."],
        ["The client may well ask for a discount.", "É bem possível que o cliente peça desconto."],
        ["With this timeline, something is bound to go wrong.", "Com esse cronograma, algo fatalmente vai dar errado."]
      ]
    },
    {
      def: "Para concordar <b>em parte</b>, o inglês tem expressões que medem o grau: nem sim inteiro, nem não.",
      form: "to some extent · to a certain degree · more or less",
      marcar: ["to some extent"],
      more: [
        "## As expressões",
        "<i>to some extent</i>, <i>to a certain degree</i>, <i>up to a point</i>, <i>in a way</i>, <i>more or less</i>, <i>broadly speaking</i>.",
        "## Como abrir uma discordância educada",
        "A fórmula clássica é concordar em parte e então apresentar a ressalva: <i>I agree <b>to some extent</b>, but the cost worries me</i>. Isso soa muito melhor que <i>I disagree</i>.",
        "## As vizinhas de ressalva",
        "<i>that said</i>, <i>having said that</i>, <i>then again</i>, <i>on the other hand</i>: <i><b>That said</b>, the timing is good</i>.",
        "## Em texto acadêmico",
        "<i>to a large extent</i> e <i>to a lesser extent</i> graduam a afirmação: <i>This explains the drop <b>to a large extent</b></i>."
      ],
      ex: [
        ["I agree with you to some extent.", "Concordo com você até certo ponto."],
        ["The new process works, more or less.", "O processo novo funciona, mais ou menos."],
        ["That said, the timing is good.", "Dito isso, o momento é bom."]
      ]
    },
    {
      def: "Três estruturas frequentes do inglês avançado que não têm tradução direta: <b>tend to</b>, <b>might as well</b> e <b>can't help + -ing</b>.",
      form: "tend to · might as well · can't help + -ing",
      marcar: ["can't help thinking"],
      more: [
        "## tend to",
        "Costumar, ter tendência: <i>Clients <b>tend to</b> reply faster in the morning</i>. É a forma elegante de generalizar sem afirmar demais.",
        "## might as well",
        "\"Já que é assim, melhor...\": <i>The meeting was cancelled, so we <b>might as well</b> go home</i>. Sugere que não há motivo para não fazer.",
        "## can't help + -ing",
        "Não conseguir evitar: <i>I <b>can't help thinking</b> we missed something</i>, <i>She <b>couldn't help laughing</b></i>. Depois dele, sempre <i>-ing</i>.",
        "## As primas úteis",
        "<i>be about to</i> = estar a ponto de. <i>be supposed to</i> = era esperado que. <i>used to</i> = costumava. <i>be likely to</i> = ter probabilidade de. <i>would rather</i> = preferir."
      ],
      ex: [
        ["I can't help thinking we missed something.", "Não consigo deixar de pensar que esquecemos algo."],
        ["Clients tend to reply faster in the morning.", "Os clientes costumam responder mais rápido de manhã."],
        ["The meeting was cancelled, so we might as well go home.", "A reunião foi cancelada, então é melhor irmos para casa."]
      ]
    }
  ],

  c2m3: [
    {
      def: "Depois de <b>suggest, recommend e insist that</b>, o verbo fica na <b>forma pura</b>, sem <i>-s</i> e sem conjugar. É o subjuntivo do inglês.",
      form: "suggest / recommend / insist that + verbo puro",
      marcar: ["that he call"],
      more: [
        "## A forma",
        "<i>I suggest that he <b>call</b> the client today</i> — não <i>calls</i>. Com <i>to be</i>, fica <i>be</i>: <i>I recommend that it <b>be</b> reviewed first</i>.",
        "## Os verbos que pedem isso",
        "<i>suggest</i>, <i>recommend</i>, <i>insist</i>, <i>demand</i>, <i>propose</i>, <i>request</i>, <i>require</i>, <i>urge</i>.",
        "## A negativa",
        "Só <i>not</i> antes do verbo, sem auxiliar: <i>I suggest that he <b>not call</b> until Monday</i>.",
        "## A alternativa de todos os dias",
        "No inglês britânico e na fala, usa-se <i>should</i>: <i>I suggest that he <b>should call</b></i>. E, mais simples ainda: <i>I suggest <b>calling</b> the client</i> — com <i>-ing</i>, sem o <i>that</i>."
      ],
      ex: [
        ["I suggest that he call the client today.", "Sugiro que ele ligue para o cliente hoje."],
        ["They insisted that the contract be reviewed.", "Eles insistiram que o contrato fosse revisado."],
        ["I suggest calling the supplier first.", "Sugiro ligar primeiro para o fornecedor."]
      ]
    },
    {
      def: "As expressões de <b>necessidade</b> — <i>it is essential / vital / crucial that</i> — pedem a mesma forma pura do verbo.",
      form: "It is essential / vital that + verbo puro",
      marcar: ["that she attend"],
      more: [
        "## A forma",
        "<i>It is essential that she <b>attend</b> the meeting</i> — não <i>attends</i>. <i>It is vital that everyone <b>be</b> informed</i>.",
        "## As expressões do grupo",
        "<i>it is essential</i>, <i>it is vital</i>, <i>it is crucial</i>, <i>it is important</i>, <i>it is necessary</i>, <i>it is advisable</i>, e o adjetivo sozinho em texto jurídico: <i>It is imperative that...</i>",
        "## Onde aparece",
        "Norma, contrato, parecer técnico e recomendação formal. Em e-mail do dia a dia, soa pesado — ali se escreve <i>She really needs to be at the meeting</i>.",
        "## A versão com for",
        "A alternativa leve é <i>for</i> + pessoa + <i>to</i>: <i>It's essential <b>for her to attend</b> the meeting</i>."
      ],
      ex: [
        ["It is essential that she attend the meeting.", "É essencial que ela compareça à reunião."],
        ["It is vital that everyone be informed today.", "É fundamental que todos sejam informados hoje."],
        ["It's important for her to attend the meeting.", "É importante que ela compareça à reunião."]
      ]
    },
    {
      def: "<b>It's time</b> e <b>it's high time</b> pedem o verbo no <b>passado</b> — que aqui não marca tempo, e sim que a coisa já devia ter sido feita.",
      form: "It's (high) time + passado · it's high time we changed",
      marcar: ["It's high time we changed"],
      more: [
        "## A forma e o sentido",
        "<i>It's <b>high time</b> we <b>changed</b> this system</i> = já passou da hora. O <i>high</i> acrescenta impaciência; sem ele, <i>It's time we changed</i> é mais neutro.",
        "## As duas construções",
        "Com passado (<i>It's time we <b>left</b></i>) ou com <i>to</i> + verbo, quando não se nomeia quem (<i>It's time <b>to leave</b></i>).",
        "## Com to be",
        "<i>It's high time this <b>were</b> fixed</i> em registro cuidado; <i>was</i> na fala.",
        "## A prima about",
        "<i>It's <b>about</b> time</i> diz o mesmo com tom de alívio ou ironia: <i>— They finally replied. — <b>About time</b></i>."
      ],
      ex: [
        ["It's high time we changed this system.", "Já passou da hora de mudarmos este sistema."],
        ["It's time we talked about the budget.", "É hora de falarmos do orçamento."],
        ["It's about time they replied.", "Já era hora de eles responderem."]
      ]
    },
    {
      def: "<b>Would rather</b> + pessoa + <b>passado</b> expressa preferência sobre o que <b>outra pessoa</b> faz — um pedido educado e indireto.",
      form: "would rather + pessoa + passado · I'd rather you didn't",
      marcar: ["I'd rather you didn't"],
      more: [
        "## As duas construções",
        "Sobre você mesmo: <i>would rather</i> + verbo puro — <i>I<b>'d rather work</b> from home</i>. Sobre outra pessoa: <i>would rather</i> + pessoa + passado — <i>I<b>'d rather you didn't</b> share this</i>.",
        "## O passado que não é passado",
        "Como no <i>wish</i> e no <i>it's time</i>, o passado aqui marca a distância da hipótese, não o tempo.",
        "## Para comparar duas opções",
        "<i>I'd rather take the early flight <b>than</b> wait all morning</i> — com <i>than</i>, e os dois verbos puros.",
        "## O tom",
        "<i>I'd rather you didn't</i> é a forma mais delicada de dizer \"por favor, não faça isso\" em inglês — bem mais aceitável que <i>Don't do that</i>."
      ],
      ex: [
        ["I'd rather you didn't share this.", "Eu preferiria que você não compartilhasse isso."],
        ["I'd rather work from home on Fridays.", "Eu preferiria trabalhar de casa nas sextas."],
        ["I'd rather take the early flight than wait all morning.", "Prefiro pegar o voo cedo a esperar a manhã toda."]
      ]
    },
    {
      def: "Fórmulas fixas do inglês formal: frases curtas e prontas que não se desmontam nem se traduzem palavra por palavra.",
      form: "if need be · be that as it may · come what may",
      marcar: ["if need be"],
      more: [
        "## O que cada uma diz",
        "<i><b>if need be</b></i> = se for necessário (<i>We'll work on Saturday, if need be</i>).",
        "<i><b>be that as it may</b></i> = seja como for, ainda assim.",
        "<i><b>come what may</b></i> = aconteça o que acontecer.",
        "## As vizinhas que valem guardar",
        "<i>as it were</i> = por assim dizer. <i>so be it</i> = que seja. <i>suffice it to say</i> = basta dizer que. <i>far be it from me</i> = longe de mim.",
        "## Por que a forma é estranha",
        "São restos do subjuntivo antigo, congelados na língua. Não aceitam variação: <i>if need was</i> ou <i>come what will</i> não existem.",
        "## O registro",
        "Formais e um pouco literárias. Em reunião, <i>if necessary</i> e <i>either way</i> fazem o mesmo serviço com metade do peso."
      ],
      ex: [
        ["We'll work on Saturday, if need be.", "Trabalhamos no sábado, se for necessário."],
        ["Be that as it may, the deadline hasn't changed.", "Seja como for, o prazo não mudou."],
        ["We'll launch in March, come what may.", "Vamos lançar em março, aconteça o que acontecer."]
      ]
    }
  ],

  c2m4: [
    {
      def: "Os <b>sufixos de substantivo</b> transformam verbo e adjetivo em nome da ação ou da qualidade. Reconhecê-los multiplica o vocabulário sem decorar palavra nova.",
      form: "-ment · -tion / -sion · -ness · -ity",
      marcar: ["announcement"],
      more: [
        "## Os quatro principais",
        "<b>-ment</b>, de verbo: <i>announce → announcement</i>, <i>agree → agreement</i>, <i>develop → development</i>, <i>pay → payment</i>.",
        "<b>-tion / -sion</b>, de verbo: <i>decide → decision</i>, <i>inform → information</i>, <i>discuss → discussion</i>, <i>produce → production</i>.",
        "<b>-ness</b>, de adjetivo: <i>aware → awareness</i>, <i>happy → happiness</i>, <i>dark → darkness</i>.",
        "<b>-ity</b>, de adjetivo: <i>able → ability</i>, <i>responsible → responsibility</i>, <i>secure → security</i>.",
        "## Os de pessoa",
        "<b>-er / -or</b> (quem faz): <i>manage → manager</i>, <i>direct → director</i>. <b>-ee</b> (quem recebe): <i>employ → employee</i>, <i>interview → interviewee</i>. <b>-ist</b>: <i>special → specialist</i>.",
        "## A acentuação muda",
        "<i><b>a</b>ble → a<b>bi</b>lity</i>, <i>res<b>pon</b>sible → responsi<b>bi</b>lity</i>. Em <i>-ity</i> e <i>-tion</i>, a sílaba forte vem logo antes do sufixo: <i>informa<b>tion</b></i> → a tônica cai em <i>ma</i>."
      ],
      ex: [
        ["The announcement was made this morning.", "O anúncio foi feito esta manhã."],
        ["We reached an agreement on the payment terms.", "Chegamos a um acordo sobre as condições de pagamento."],
        ["Security is the client's main concern.", "Segurança é a principal preocupação do cliente."]
      ]
    },
    {
      def: "Os <b>sufixos de adjetivo</b> dizem o que a coisa tem, permite ou produz — e vêm em pares que se opõem.",
      form: "-ful / -less · -able · -ive",
      marcar: ["reliable"],
      more: [
        "## Os principais",
        "<b>-ful</b> (com) e <b>-less</b> (sem): <i>useful / useless</i>, <i>careful / careless</i>, <i>helpful / helpless</i>.",
        "<b>-able / -ible</b> (que pode ser): <i>rely → reliable</i>, <i>afford → affordable</i>, <i>access → accessible</i>.",
        "<b>-ive</b> (que produz o efeito): <i>effect → effective</i>, <i>produce → productive</i>, <i>create → creative</i>.",
        "<b>-ous</b>, <b>-al</b>, <b>-ic</b>: <i>danger → dangerous</i>, <i>nation → national</i>, <i>strategy → strategic</i>.",
        "## O par que engana",
        "<i>-ed</i> fala de quem sente, <i>-ing</i> fala do que causa: <i>I'm <b>bored</b></i> (estou com tédio) × <i>The meeting is <b>boring</b></i> (a reunião causa tédio). O mesmo com <i>interested / interesting</i>, <i>tired / tiring</i>, <i>confused / confusing</i>.",
        "## De adjetivo para advérbio",
        "<b>-ly</b> fecha a cadeia: <i>effective → effectively</i>, <i>careful → carefully</i>. Com adjetivo em <i>-y</i>, vira <i>-ily</i>: <i>easy → easily</i>."
      ],
      ex: [
        ["We need a more reliable supplier.", "Precisamos de um fornecedor mais confiável."],
        ["The training was useful but a bit long.", "O treinamento foi útil, mas um pouco longo."],
        ["The meeting was boring and I was bored.", "A reunião era chata e eu estava com tédio."]
      ]
    },
    {
      def: "Os <b>prefixos de oposição</b> invertem o sentido da palavra. Qual deles entra depende da palavra, e isso se aprende pelo uso.",
      form: "un- · in- / im- · dis- · mis-",
      marcar: ["misunderstood"],
      more: [
        "## Os quatro",
        "<b>un-</b>: <i>unclear</i>, <i>unlikely</i>, <i>unable</i>, <i>unnecessary</i>, <i>unfair</i>.",
        "<b>in- / im- / ir- / il-</b>: <i>inefficient</i>, <i>impossible</i>, <i>irrelevant</i>, <i>illegal</i> — a letra acompanha o som seguinte.",
        "<b>dis-</b>: <i>disagree</i>, <i>dishonest</i>, <i>disappear</i>, <i>disadvantage</i>.",
        "<b>mis-</b> (errado, não o contrário): <i>misunderstand</i>, <i>misspell</i>, <i>mislead</i>, <i>miscalculate</i>.",
        "## A diferença que importa",
        "<i>dis</i>- nega (<i>disagree</i> = não concordar), <i>mis</i>- erra (<i>misunderstand</i> = entender errado). <i>I misunderstood you</i> não é discordar: é ter entendido mal.",
        "## Os que não têm par",
        "<i>non-</i> é neutro e aparece em termos técnicos: <i>non-refundable</i>, <i>non-profit</i>, <i>non-smoking</i>."
      ],
      ex: [
        ["I think you misunderstood me.", "Acho que você me entendeu mal."],
        ["The brief was unclear and the process inefficient.", "O briefing estava confuso e o processo, ineficiente."],
        ["The ticket is non-refundable.", "A passagem não é reembolsável."]
      ]
    },
    {
      def: "Os prefixos de <b>quantidade e repetição</b> ajustam a medida: demais, de menos, de novo — e aparecem muito no inglês de trabalho.",
      form: "over- · under- · re-",
      marcar: ["underestimate"],
      more: [
        "## Os três",
        "<b>over-</b> (demais): <i>overestimate</i>, <i>overbook</i>, <i>overcharge</i>, <i>overload</i>, <i>oversleep</i>, <i>overwork</i>.",
        "<b>under-</b> (de menos): <i>underestimate</i>, <i>understaffed</i>, <i>underpaid</i>, <i>underperform</i>.",
        "<b>re-</b> (de novo): <i>rethink</i>, <i>rewrite</i>, <i>reschedule</i>, <i>renegotiate</i>, <i>resend</i>.",
        "## Os de tempo e posição",
        "<b>pre-</b> (antes): <i>preview</i>, <i>prepaid</i>. <b>post-</b> (depois): <i>postgraduate</i>. <b>co-</b> (junto): <i>cofounder</i>, <i>coworker</i>. <b>sub-</b> (abaixo): <i>subcontract</i>.",
        "## O ganho de leitura",
        "Reconhecer prefixo e sufixo permite entender palavra nunca vista: <i>underperforming</i> se decifra em três pedaços, sem dicionário.",
        "## O hífen",
        "Em geral não se usa (<i>reschedule</i>, <i>overbook</i>), mas ele aparece para evitar leitura ambígua: <i>re-sign</i> (assinar de novo) × <i>resign</i> (pedir demissão)."
      ],
      ex: [
        ["Never underestimate the competition.", "Nunca subestime a concorrência."],
        ["They overbooked the flight and we lost our seats.", "Eles venderam passagens além da capacidade e perdemos nossos assentos."],
        ["Can we reschedule the call to Thursday?", "Podemos remarcar a ligação para quinta?"]
      ]
    }
  ],

  c2m5: [
    {
      def: "O <b>understatement</b> é o hábito inglês de dizer menos do que se pensa. A frase soa leve, mas o conteúdo é grave — e quem lê ao pé da letra entende o oposto.",
      form: "not ideal · a bit of a problem · not bad",
      marcar: ["a bit of a problem"],
      more: [
        "## A escala invertida",
        "<i>It's <b>not ideal</b></i> = está ruim. <i><b>a bit of a problem</b></i> = um problema sério. <i><b>not bad</b></i> = muito bom. <i><b>quite good</b></i> = ótimo (no britânico). <i><b>I'm slightly concerned</b></i> = estou bem preocupado.",
        "## Por que existe",
        "Dizer pouco é forma de educação: evita alarme, protege quem errou e deixa espaço para resolver. É mais comum no inglês britânico, mas aparece em todo lugar.",
        "## Como calibrar",
        "Procure o advérbio: <i>slightly</i>, <i>a bit</i>, <i>somewhat</i> e <i>a little</i> quase sempre indicam que a coisa é maior do que a frase sugere.",
        "## A armadilha para quem fala português",
        "Nós tendemos a dizer exatamente o tamanho do problema. Se você responder <i>It's a disaster</i> onde um inglês diria <i>It's not ideal</i>, soará desproporcional — e se ouvir <i>a bit of a problem</i> e tratar como pequeno, vai subestimar o aviso."
      ],
      ex: [
        ["We have a bit of a problem: the server is down.", "Temos um probleminha: o servidor caiu."],
        ["The feedback was not bad at all.", "O retorno foi muito bom."],
        ["I'm slightly concerned about the deadline.", "Estou bastante preocupado com o prazo."]
      ]
    },
    {
      def: "A <b>educação indireta</b> embrulha pedido e crítica em fórmulas longas. Quanto mais palavras, mais delicada é a mensagem.",
      form: "I was wondering if... · That's an interesting idea · With all due respect",
      marcar: ["I was wondering if you could"],
      more: [
        "## O pedido",
        "<i><b>I was wondering if you could</b> send me the file</i> é mais suave que <i>Could you send me the file?</i>, que já é mais suave que <i>Send me the file</i>. O passado (<i>was wondering</i>) é parte da delicadeza.",
        "## A discordância disfarçada",
        "<i>That's an interesting idea</i> muitas vezes significa \"não gostei\". <i>I hear what you're saying, but...</i> = discordo. <i>That's one way of looking at it</i> = há outra, melhor.",
        "## O aviso de crítica",
        "<i><b>With all due respect</b></i> e <i><b>I don't mean to be difficult, but</b></i> anunciam que vem uma objeção. Quando você ouvir, prepare-se.",
        "## O feedback em sanduíche",
        "O elogio vem antes e depois: <i>The structure is strong. <b>I wonder if</b> the intro could be shorter. Overall, great work.</i> O miolo é a crítica."
      ],
      ex: [
        ["I was wondering if you could send me the file.", "Eu queria saber se você poderia me mandar o arquivo."],
        ["That's an interesting idea, but let's look at the cost.", "É uma ideia interessante, mas vamos olhar o custo."],
        ["With all due respect, the timeline doesn't work.", "Com todo o respeito, o cronograma não funciona."]
      ]
    },
    {
      def: "Os <b>eufemismos</b> substituem a palavra dura pela neutra. São o vocabulário padrão de comunicado de empresa e de conversa delicada.",
      form: "let go · between jobs · pass away · challenging",
      marcar: ["were let go"],
      more: [
        "## No trabalho",
        "<i><b>let go</b></i> / <i><b>laid off</b></i> = demitido (<i>Fifty employees were let go</i>). <i><b>between jobs</b></i> = desempregado. <i><b>restructuring</b></i> / <i><b>downsizing</b></i> = corte de pessoal. <i><b>challenging</b></i> = difícil. <i><b>room for improvement</b></i> = está ruim.",
        "## Fora do trabalho",
        "<i><b>pass away</b></i> = falecer. <i><b>senior</b></i> = idoso. <i><b>pre-owned</b></i> = usado. <i><b>economical</b></i> = barato.",
        "## A diferença entre demitido e dispensado",
        "<i>fired</i> implica falta cometida; <i>laid off</i> e <i>let go</i> implicam corte da empresa. Em currículo e conversa, a diferença importa muito.",
        "## Quando não usar",
        "Em texto que precisa ser claro — relatório de risco, instrução de segurança, diagnóstico — eufemismo atrapalha. Ali se escreve a palavra exata."
      ],
      ex: [
        ["Fifty employees were let go last month.", "Cinquenta funcionários foram demitidos no mês passado."],
        ["He's between jobs at the moment.", "Ele está sem emprego no momento."],
        ["The project was challenging, to say the least.", "O projeto foi difícil, para dizer o mínimo."]
      ]
    },
    {
      def: "A <b>ironia</b> inverte o sentido pela entonação e pelo contexto. O texto escrito não traz essa marca — por isso ela é a maior fonte de mal-entendido em inglês.",
      form: "Oh, great. · Thanks a lot. · Perfect timing.",
      marcar: ["Oh, great"],
      more: [
        "## Como reconhecer",
        "<i>Oh, <b>great</b>. Another meeting.</i> O elogio não combina com a situação — é esse desencaixe que revela a ironia.",
        "## As frases mais usadas",
        "<i>Thanks a lot</i> (irritado), <i>Perfect timing</i> (no pior momento), <i>Well, that went well</i> (foi um desastre), <i>Just what I needed</i> (era o que faltava), <i>Nice one</i> (que erro).",
        "## O tom e a pontuação",
        "Na fala, a voz cai e se alonga. Na escrita, só o contexto e, às vezes, um ponto final seco entregam. Em e-mail de trabalho, é melhor não arriscar.",
        "## A diferença entre ironia e sarcasmo",
        "Ironia diz o contrário do que pensa; sarcasmo faz isso para ferir. Em ambiente profissional, ambos pesam — e, com interlocutor de outra cultura, costumam não funcionar.",
        "## O conselho prático",
        "Ouvindo, procure o desencaixe entre a frase e a situação. Escrevendo em inglês com quem você não conhece, prefira ser literal."
      ],
      ex: [
        ["Another meeting? Oh, great.", "Mais uma reunião? Que ótimo."],
        ["The wifi died mid-call. Perfect timing.", "O wifi caiu no meio da ligação. Hora perfeita."],
        ["Well, that went well.", "Pois é, foi um sucesso."]
      ]
    }
  ]

};

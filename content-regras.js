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
  ]

};

// Leitura e vocabulário de cada módulo: trabalho e viagem no mesmo texto.
// R(en, pt) = frase da leitura.  V(en, pt, ex) = palavra do vocabulário.
window.R = function (en, pt) { return { en: en, pt: pt }; };
window.V = function (en, pt, ex) { return { en: en, pt: pt, ex: ex }; };
window.MIX = {

  a1m1: {
    reading: [
      R("Hi, I'm Marina. I'm a salesperson.", "Oi, eu sou a Marina. Sou vendedora."),
      R("I'm from Brazil, and I'm 27 years old.", "Sou do Brasil e tenho 27 anos."),
      R("This week I'm in Lisbon for work.", "Esta semana estou em Lisboa a trabalho."),
      R("My hotel is near the office.", "Meu hotel fica perto do escritório."),
      R("My new colleagues are friendly and helpful.", "Meus novos colegas são simpáticos e prestativos."),
      R("The manager isn't here today.", "O gestor não está aqui hoje."),
      R("The streets are full, and the people are nice.", "As ruas estão cheias e as pessoas são legais."),
      R("Are you new here too? Welcome!", "Você também é novo aqui? Bem-vindo!")
    ],
    vocab: [
      V("job", "trabalho, emprego", "I like my job."),
      V("team", "equipe", "Welcome to the team!"),
      V("friendly", "simpático", "The clients are very friendly."),
      V("tired", "cansado", "I'm tired today."),
      V("flight", "voo", "My flight is at seven."),
      V("hotel", "hotel", "The hotel is near the office."),
      V("late", "atrasado", "The bus is late."),
      V("lost", "perdido", "I'm lost.")
    ]
  },

  a1m2: {
    reading: [
      R("I work in an agency with twenty people.", "Trabalho numa agência com vinte pessoas."),
      R("I start at nine and finish at six.", "Começo às nove e termino às seis."),
      R("My colleague Ana works in sales.", "Minha colega Ana trabalha no comercial."),
      R("She travels to Chile twice a year.", "Ela viaja para o Chile duas vezes por ano."),
      R("She always buys the tickets online.", "Ela sempre compra as passagens pela internet."),
      R("We don't work on weekends.", "Não trabalhamos nos fins de semana."),
      R("On Saturdays I walk to the beach before breakfast.", "Aos sábados vou a pé até a praia antes do café."),
      R("Do you take the bus to work?", "Você pega ônibus para o trabalho?")
    ],
    vocab: [
      V("to start", "começar", "We start at nine."),
      V("to finish", "terminar", "I finish work at six."),
      V("every day", "todo dia", "I take the bus every day."),
      V("weekend", "fim de semana", "See you after the weekend."),
      V("to travel", "viajar", "She travels twice a year."),
      V("ticket", "passagem, ingresso", "He buys the ticket online."),
      V("to arrive", "chegar", "She arrives on Monday."),
      V("to walk", "caminhar, ir a pé", "We walk to the beach.")
    ]
  },

  a1m3: {
    reading: [
      R("This is my desk, and that is my manager's office.", "Esta é a minha mesa, e aquela é a sala do meu gestor."),
      R("I have an important meeting today.", "Tenho uma reunião importante hoje."),
      R("The meeting is with a new client.", "A reunião é com um cliente novo."),
      R("These documents are for the client.", "Esses documentos são para o cliente."),
      R("Tomorrow I travel, so I need a map and an umbrella.", "Amanhã eu viajo, então preciso de um mapa e de um guarda-chuva."),
      R("This suitcase is mine. That one is my colleague's.", "Esta mala é minha. Aquela é da minha colega."),
      R("The streets near the hotel are narrow and old.", "As ruas perto do hotel são estreitas e antigas."),
      R("Can you give me an example?", "Pode me dar um exemplo?")
    ],
    vocab: [
      V("building", "prédio", "Our office is in that building."),
      V("document", "documento", "Please sign this document."),
      V("idea", "ideia", "That's a great idea!"),
      V("example", "exemplo", "Can you give me an example?"),
      V("suitcase", "mala", "This suitcase is mine."),
      V("map", "mapa", "Can I have a map?"),
      V("street", "rua", "That street is very long."),
      V("heavy", "pesado", "These boxes are heavy.")
    ]
  },

  a1m4: {
    reading: [
      R("There is a small kitchen on our floor.", "Há uma pequena cozinha no nosso andar."),
      R("There are two meeting rooms and a big open space.", "Há duas salas de reunião e um grande espaço aberto."),
      R("My desk is next to the window.", "Minha mesa fica ao lado da janela."),
      R("Is there a printer near here?", "Tem uma impressora aqui perto?"),
      R("At the hotel, there's an elevator on the left.", "No hotel, tem um elevador à esquerda."),
      R("There are no towels in the bathroom.", "Não tem toalhas no banheiro."),
      R("There's a pharmacy near the station.", "Tem uma farmácia perto da estação."),
      R("The restaurant is in front of our building.", "O restaurante fica na frente do nosso prédio.")
    ],
    vocab: [
      V("printer", "impressora", "The printer isn't working."),
      V("kitchen", "cozinha", "There's coffee in the kitchen."),
      V("window", "janela", "My desk is next to the window."),
      V("bathroom", "banheiro", "Where's the bathroom?"),
      V("elevator", "elevador", "There's an elevator on the left."),
      V("towel", "toalha", "There are no towels in the room."),
      V("near", "perto de", "There's a pharmacy near the station."),
      V("corner", "esquina", "There's a bakery on the corner.")
    ]
  },

  a1m5: {
    reading: [
      R("The office opens at eight thirty.", "O escritório abre às oito e meia."),
      R("Our weekly meeting is on Monday at ten.", "Nossa reunião semanal é na segunda às dez."),
      R("The deadline is March 15th.", "O prazo é 15 de março."),
      R("My flight is on June 12th.", "Meu voo é no dia 12 de junho."),
      R("Boarding starts at a quarter to seven.", "O embarque começa às sete menos quinze."),
      R("Check-in at the hotel is at two o'clock.", "O check-in no hotel é às duas horas."),
      R("We're staying three nights.", "Vamos ficar três noites."),
      R("I usually have lunch at half past twelve.", "Geralmente almoço ao meio-dia e meia.")
    ],
    vocab: [
      V("o'clock", "em ponto", "It's ten o'clock."),
      V("half past", "e meia", "It's half past two."),
      V("quarter", "quinze minutos", "It's quarter to six."),
      V("lunch", "almoço", "Let's have lunch together."),
      V("check-in", "check-in, entrada", "Check-in is at two o'clock."),
      V("boarding", "embarque", "Boarding starts at half past six."),
      V("night", "noite, diária", "Three nights, please."),
      V("delay", "atraso", "There's a two-hour delay.")
    ]
  },

  a1m6: {
    reading: [
      R("My name is Paula, and I work in operations.", "Meu nome é Paula, e trabalho em operações."),
      R("My team is small, but we can do a lot.", "Minha equipe é pequena, mas conseguimos fazer muito."),
      R("Can you send me the address, please?", "Pode me mandar o endereço, por favor?"),
      R("Is this your phone or mine?", "Esse telefone é seu ou meu?"),
      R("This is my passport, and that bag is mine.", "Este é o meu passaporte, e aquela bolsa é minha."),
      R("Can I leave my luggage here?", "Posso deixar minha bagagem aqui?"),
      R("I can book the room online.", "Eu consigo reservar o quarto pela internet."),
      R("I can't go to the meeting, but my colleague can.", "Não posso ir à reunião, mas minha colega pode.")
    ],
    vocab: [
      V("address", "endereço", "What's the address?"),
      V("key", "chave", "I can't find my keys."),
      V("to help", "ajudar", "Can I help you?"),
      V("always", "sempre", "She always arrives early."),
      V("passport", "passaporte", "This is my passport."),
      V("luggage", "bagagem", "Can I leave my luggage here?"),
      V("to book", "reservar", "I can book it online."),
      V("cash", "dinheiro em espécie", "Can I pay in cash?")
    ]
  },

  a2m1: {
    reading: [
      R("I started a new job last month.", "Comecei num emprego novo no mês passado."),
      R("On my first day, I met the whole team.", "No primeiro dia, conheci a equipe toda."),
      R("Last week they sent me to a conference abroad.", "Na semana passada me mandaram para um congresso no exterior."),
      R("We landed at midnight and took a taxi to the hotel.", "Pousamos à meia-noite e pegamos um táxi para o hotel."),
      R("I lost my badge on the first morning.", "Perdi meu crachá na primeira manhã."),
      R("The client liked our ideas and signed the contract.", "O cliente gostou das nossas ideias e assinou o contrato."),
      R("I didn't sleep well that night because I was excited.", "Não dormi bem naquela noite porque estava animado."),
      R("Did you like the food there?", "Você gostou da comida de lá?")
    ],
    vocab: [
      V("meeting", "reunião", "The meeting starts at ten."),
      V("contract", "contrato", "They signed a one-year contract."),
      V("to sign", "assinar", "Please sign here."),
      V("report", "relatório", "I need to finish the monthly report."),
      V("to land", "aterrissar, pousar", "We landed at midnight."),
      V("to miss", "perder (voo, ônibus)", "I missed my flight."),
      V("to lose", "perder (um objeto)", "I lost my passport."),
      V("to visit", "visitar", "We visited three cities.")
    ]
  },

  a2m2: {
    reading: [
      R("I work in the operations team.", "Trabalho na equipe de operações."),
      R("Every morning, I check the orders and talk to the suppliers.", "Toda manhã, confiro os pedidos e falo com os fornecedores."),
      R("This week, I'm training a new colleague.", "Esta semana, estou treinando um colega novo."),
      R("Right now, we're waiting for a delivery.", "Agora, estamos esperando uma entrega."),
      R("Tonight I'm packing my bags for a trip.", "Hoje à noite estou fazendo as malas para uma viagem."),
      R("The train to the airport leaves every hour.", "O trem para o aeroporto sai de hora em hora."),
      R("It's raining, so I'm looking for a taxi.", "Está chovendo, então estou procurando um táxi."),
      R("I like my job because every day is different.", "Gosto do meu trabalho porque cada dia é diferente.")
    ],
    vocab: [
      V("supplier", "fornecedor", "We need a new supplier."),
      V("order", "pedido", "The order arrived this morning."),
      V("colleague", "colega de trabalho", "My colleague helped me."),
      V("delivery", "entrega", "The delivery is late."),
      V("to wait for", "esperar por", "I'm waiting for the bus."),
      V("to pack", "fazer as malas", "She's packing her bags."),
      V("platform", "plataforma", "The train is leaving from platform 3."),
      V("to look for", "procurar", "I'm looking for the exit.")
    ]
  },

  a2m3: {
    reading: [
      R("Next month, our team is going to start a new project.", "No mês que vem, nossa equipe vai começar um projeto novo."),
      R("I'm meeting the client on Thursday to present the plan.", "Vou encontrar o cliente na quinta para apresentar o plano."),
      R("After the meeting, we're going to rent a car and drive to the coast.", "Depois da reunião, vamos alugar um carro e dirigir até o litoral."),
      R("They'll pick us up at the airport.", "Eles vão nos buscar no aeroporto."),
      R("I'll send you the itinerary tonight.", "Vou te mandar o roteiro hoje à noite."),
      R("I think the client will like the proposal.", "Acho que o cliente vai gostar da proposta."),
      R("It will be sunny tomorrow.", "Vai fazer sol amanhã."),
      R("Don't worry, I'll send you the file in five minutes.", "Não se preocupe, te mando o arquivo em cinco minutos.")
    ],
    vocab: [
      V("to present", "apresentar", "I'll present the results tomorrow."),
      V("project", "projeto", "The project starts next week."),
      V("to promise", "prometer", "I promise I'll call you."),
      V("soon", "em breve", "The new system is coming soon."),
      V("itinerary", "roteiro", "I'll send you the itinerary."),
      V("to rent", "alugar", "We're going to rent a car."),
      V("to pick up", "buscar", "They'll pick us up at the airport."),
      V("weather", "tempo, clima", "It will be sunny tomorrow.")
    ]
  },

  a2m4: {
    reading: [
      R("Our new office is bigger and brighter than the old one.", "Nosso escritório novo é maior e mais iluminado que o antigo."),
      R("The sales team had its best month this year.", "A equipe comercial teve seu melhor mês este ano."),
      R("This supplier is cheaper, but the other one is faster.", "Esse fornecedor é mais barato, mas o outro é mais rápido."),
      R("A round trip is cheaper than two one-way tickets.", "Ida e volta é mais barato que duas passagens só de ida."),
      R("The train is slower than the plane, but it's more comfortable.", "O trem é mais lento que o avião, mas é mais confortável."),
      R("The window seat is the best one on the plane.", "O assento na janela é o melhor do avião."),
      R("December is the busiest month for deliveries.", "Dezembro é o mês mais movimentado para entregas."),
      R("The new system isn't as complicated as I thought.", "O sistema novo não é tão complicado quanto eu achava.")
    ],
    vocab: [
      V("cheap", "barato", "This option is cheap."),
      V("expensive", "caro", "That software is too expensive."),
      V("busy", "ocupado, movimentado", "I'm busy right now."),
      V("price", "preço", "The price went up."),
      V("round trip", "ida e volta", "A round trip is cheaper than two one-way tickets."),
      V("window seat", "assento na janela", "The window seat is the best."),
      V("far", "longe", "The airport is farther than the station."),
      V("comfortable", "confortável", "This hotel is more comfortable.")
    ]
  },

  s5: {
    reading: [
      R("I study English on the bus every morning.", "Estudo inglês no ônibus toda manhã."),
      R("The new course starts on Monday at 9 a.m.", "O curso novo começa na segunda às 9h."),
      R("I'll be at the office until 6 p.m.", "Vou estar no escritório até as 18h."),
      R("In July I'm traveling abroad for the first time.", "Em julho vou viajar para fora pela primeira vez."),
      R("I booked the hotel in advance.", "Reservei o hotel com antecedência."),
      R("We land at six in the morning.", "Pousamos às seis da manhã."),
      R("Arrivals are on the ground floor.", "As chegadas ficam no térreo."),
      R("The market is ten minutes away on foot.", "O mercado fica a dez minutos a pé.")
    ],
    vocab: [
      V("schedule", "cronograma, agenda", "My schedule is full today."),
      V("until", "até (tempo)", "I work until 6 p.m."),
      V("by Friday", "até sexta (no máximo)", "Please send it by Friday."),
      V("on time", "na hora", "The train is on time."),
      V("in advance", "com antecedência", "Book the hotel in advance."),
      V("arrival", "chegada", "Arrivals are on the ground floor."),
      V("abroad", "no exterior", "I'm traveling abroad in July."),
      V("on foot", "a pé", "The market is ten minutes away on foot.")
    ]
  },

  a2m5: {
    reading: [
      R("We have a lot of orders this week, so everyone is busy.", "Temos muitos pedidos esta semana, então todo mundo está ocupado."),
      R("Do we have any boxes left in the warehouse?", "Ainda sobraram caixas no depósito?"),
      R("There isn't much space in the meeting room.", "Não tem muito espaço na sala de reunião."),
      R("How many people are coming to the presentation?", "Quantas pessoas vêm para a apresentação?"),
      R("There aren't many seats left on that flight.", "Não sobraram muitos lugares naquele voo."),
      R("How many carry-on bags can I take?", "Quantas bagagens de mão posso levar?"),
      R("We don't have much time before boarding.", "Não temos muito tempo antes do embarque."),
      R("How much time do we have before the deadline?", "Quanto tempo temos antes do prazo?")
    ],
    vocab: [
      V("warehouse", "depósito, armazém", "The boxes are in the warehouse."),
      V("space", "espaço", "We need more space."),
      V("to cost", "custar", "How much does it cost?"),
      V("left", "sobrando, restante", "There's no coffee left."),
      V("change", "troco", "Do you have any change?"),
      V("seat", "assento, lugar", "Are there any seats left?"),
      V("tip", "gorjeta", "How much is the tip?"),
      V("carry-on", "bagagem de mão", "How many carry-on bags can I take?")
    ]
  },

  s1: {
    reading: [
      R("I take the bus to work every morning.", "Pego ônibus para o trabalho toda manhã."),
      R("I've worked at the same company since October.", "Trabalho na mesma empresa desde outubro."),
      R("Yesterday I called three clients and sent two quotes.", "Ontem liguei para três clientes e mandei dois orçamentos."),
      R("By the time I got to the office, the team had already started the meeting.", "Quando cheguei ao escritório, a equipe já tinha começado a reunião."),
      R("Last year they sent me to Lisbon, and I had never traveled alone before.", "No ano passado me mandaram para Lisboa, e eu nunca tinha viajado sozinho antes."),
      R("By the time we landed, the hotel kitchen had closed.", "Quando pousamos, a cozinha do hotel já tinha fechado."),
      R("If I had more time, I would stay another week.", "Se eu tivesse mais tempo, ficaria mais uma semana."),
      R("I'd love to lead a project like that again.", "Eu adoraria liderar um projeto assim de novo."),
      R("I've already checked the dates for the next trip.", "Já conferi as datas da próxima viagem.")
    ],
    vocab: [
      V("to come up with", "bolar, ter (uma ideia)", "I came up with a better plan."),
      V("to figure out", "descobrir, entender", "I've figured out the problem."),
      V("as soon as", "assim que", "I'll call you as soon as I arrive."),
      V("in a hurry", "com pressa", "She left in a hurry."),
      V("to check in", "fazer o check-in", "I've already checked in."),
      V("layover", "escala", "We had a six-hour layover in Lisbon."),
      V("to show up", "aparecer", "The driver never showed up."),
      V("to run out of", "ficar sem", "We had run out of cash by then.")
    ]
  },

  s2: {
    reading: [
      R("I've just finished the first draft of the report.", "Acabei de terminar o primeiro rascunho do relatório."),
      R("Has the client approved it yet?", "O cliente já aprovou?"),
      R("Not yet, but he's already seen it.", "Ainda não, mas ele já viu."),
      R("I've worked in this field for three years.", "Trabalho nessa área há três anos."),
      R("I'm in Porto this week and I've visited three neighborhoods so far.", "Estou no Porto esta semana e já visitei três bairros até agora."),
      R("I haven't tried the local food yet.", "Ainda não experimentei a comida local."),
      R("Have you ever been to the north of the country?", "Você já esteve no norte do país?"),
      R("I've loved this city since the first day.", "Amo esta cidade desde o primeiro dia.")
    ],
    vocab: [
      V("draft", "rascunho", "I sent the first draft to my boss."),
      V("deadline", "prazo", "The deadline is on Friday."),
      V("feedback", "retorno, comentários", "The client gave us good feedback."),
      V("to get in touch", "entrar em contato", "I'll get in touch with them tomorrow."),
      V("so far", "até agora", "We've visited three cities so far."),
      V("worth it", "vale a pena", "The view was worth it."),
      V("local", "local, da região", "We've just found a local market."),
      V("to get used to", "se acostumar com", "I still haven't got used to the weather.")
    ]
  },

  b1m3: {
    reading: [
      R("I was preparing the report when my manager called me.", "Eu estava preparando o relatório quando meu gestor me ligou."),
      R("While we were talking, the client arrived.", "Enquanto conversávamos, o cliente chegou."),
      R("I used to take the bus, but now I ride a bike to work.", "Eu pegava ônibus, mas agora vou de bicicleta para o trabalho."),
      R("Our company used to have only five employees.", "Nossa empresa tinha só cinco funcionários."),
      R("Ten years ago I used to travel light, with one backpack.", "Dez anos atrás eu costumava viajar com pouca bagagem, só uma mochila."),
      R("We were watching the sunset when it started to rain.", "Estávamos vendo o pôr do sol quando começou a chover."),
      R("We used to get around by bike in every city.", "A gente se locomovia de bicicleta em todas as cidades."),
      R("What were you doing when the system went down?", "O que você estava fazendo quando o sistema caiu?")
    ],
    vocab: [
      V("employee", "funcionário", "We hired two new employees."),
      V("to go down", "cair (sistema, site)", "The website went down for an hour."),
      V("to lead", "conduzir, liderar", "She leads the sales team."),
      V("to hire", "contratar", "We're hiring a designer."),
      V("to travel light", "viajar com pouca bagagem", "I used to travel light."),
      V("homesick", "com saudade de casa", "I was feeling homesick."),
      V("to get around", "se locomover", "We used to get around by bike."),
      V("sunset", "pôr do sol", "We were watching the sunset.")
    ]
  },

  s3: {
    reading: [
      R("If the project goes well, we'll need more people on the team.", "Se o projeto for bem, vamos precisar de mais gente na equipe."),
      R("If you don't save your work, you'll lose it.", "Se você não salvar seu trabalho, vai perdê-lo."),
      R("If it rains tomorrow, we'll visit the museum instead.", "Se chover amanhã, vamos visitar o museu."),
      R("If we get lost, I'll use the map on my phone.", "Se a gente se perder, eu uso o mapa do celular."),
      R("If I had more time, I would learn another language.", "Se eu tivesse mais tempo, eu aprenderia outra língua."),
      R("If I had changed money earlier, it would have been cheaper.", "Se eu tivesse trocado dinheiro antes, teria saído mais barato."),
      R("We would have finished on time if the client hadn't changed the plan.", "Teríamos terminado no prazo se o cliente não tivesse mudado o plano."),
      R("We'll walk unless it rains.", "Vamos a pé, a não ser que chova.")
    ],
    vocab: [
      V("instructions", "instruções", "The instructions were very clear."),
      V("to approve", "aprovar", "My boss approved the new layout."),
      V("to save", "salvar; economizar", "Save the file before closing the program."),
      V("unless", "a menos que", "We won't post unless the client approves."),
      V("refund", "reembolso", "If you cancel today, you'll get a refund."),
      V("to get lost", "se perder", "If we get lost, I'll use the map."),
      V("to change money", "trocar dinheiro", "If I had changed money earlier, it would have been cheaper."),
      V("to cancel", "cancelar", "If the flight is canceled, they'll call us.")
    ]
  },

  s6: {
    reading: [
      R("I enjoy creating things, but I hate waiting for approval.", "Gosto de criar coisas, mas odeio esperar aprovação."),
      R("We decided to meet three times a week.", "Decidimos nos encontrar três vezes por semana."),
      R("She's really good at writing short emails.", "Ela é muito boa em escrever e-mails curtos."),
      R("Before publishing, always check the spelling.", "Antes de publicar, sempre confira a ortografia."),
      R("On the trip, we decided to take the night train.", "Na viagem, decidimos pegar o trem noturno."),
      R("They gave up waiting for the bus and walked.", "Eles desistiram de esperar o ônibus e foram a pé."),
      R("We managed to get the last two tickets.", "Conseguimos pegar as duas últimas entradas."),
      R("Thanks for sending the feedback so quickly.", "Obrigado por mandar o retorno tão rápido.")
    ],
    vocab: [
      V("to launch", "lançar", "We'll launch the new series in January."),
      V("approval", "aprovação", "We're waiting for the client's approval."),
      V("to avoid", "evitar", "Avoid long messages on the group."),
      V("to look forward to", "estar ansioso por, aguardar", "I look forward to working with you."),
      V("to feel like", "estar a fim de", "I feel like walking today."),
      V("to give up", "desistir", "We gave up waiting for the bus."),
      V("to be about to", "estar prestes a", "The tour is about to start."),
      V("to manage to", "conseguir", "We managed to get tickets.")
    ]
  },

  b1m6: {
    reading: [
      R("The client who visited us yesterday signed a two-year contract.", "O cliente que nos visitou ontem assinou um contrato de dois anos."),
      R("This is the tool that saves me the most time.", "Essa é a ferramenta que mais me economiza tempo."),
      R("The restaurant where we had lunch was great.", "O restaurante onde almoçamos era ótimo."),
      R("I work with a designer whose ideas are always original.", "Trabalho com uma designer cujas ideias são sempre originais."),
      R("That's the neighborhood where we stayed last summer.", "Aquele é o bairro onde ficamos no verão passado."),
      R("We found a guesthouse whose owner spoke Portuguese.", "Achamos uma pousada cujo dono falava português."),
      R("There's a viewpoint which is free until six.", "Tem um mirante que é gratuito até as seis."),
      R("Is there anyone who can help me with this spreadsheet?", "Tem alguém que possa me ajudar com esta planilha?")
    ],
    vocab: [
      V("tool", "ferramenta", "This tool saves a lot of time."),
      V("spreadsheet", "planilha", "I updated the spreadsheet."),
      V("based in", "sediado em", "The company is based in São Paulo."),
      V("floor", "andar", "The meeting room is on the third floor."),
      V("neighborhood", "bairro", "That's the neighborhood where we stayed."),
      V("host", "anfitrião", "The host who met us was very kind."),
      V("landmark", "ponto turístico", "It's the landmark that everyone photographs."),
      V("viewpoint", "mirante", "There's a viewpoint which is free.")
    ]
  },

  s9: {
    reading: [
      R("You should check the weather before you leave.", "Você deveria ver a previsão do tempo antes de sair."),
      R("Could you review the message before I send it?", "Você poderia revisar a mensagem antes de eu enviar?"),
      R("We might need a new camera next year.", "Talvez a gente precise de uma câmera nova no ano que vem."),
      R("You must have a visa to enter the country.", "Você precisa ter visto para entrar no país."),
      R("You should book ahead in high season.", "Você deveria reservar com antecedência na alta temporada."),
      R("You don't have to tip here, but you can.", "Você não precisa dar gorjeta aqui, mas pode."),
      R("You should watch out for pickpockets on the subway.", "Você deveria tomar cuidado com batedores de carteira no metrô."),
      R("You mustn't share the client's password with anyone.", "Você não pode compartilhar a senha do cliente com ninguém.")
    ],
    vocab: [
      V("warning", "aviso", "A clear warning keeps people safe."),
      V("holiday", "feriado", "Monday is a holiday."),
      V("password", "senha", "Never share your password."),
      V("forbidden", "proibido", "Eating in the studio is forbidden."),
      V("to tip", "dar gorjeta", "You don't have to tip here."),
      V("visa", "visto", "You must have a visa."),
      V("allowed", "permitido", "Drones aren't allowed in the park."),
      V("to watch out for", "tomar cuidado com", "You should watch out for pickpockets.")
    ]
  },

  s10: {
    reading: [
      R("This website was created in less than two hours.", "Este site foi criado em menos de duas horas."),
      R("All our contracts are reviewed by a lawyer.", "Todos os nossos contratos são revisados por um advogado."),
      R("The new app will be launched after Carnival.", "O aplicativo novo vai ser lançado depois do Carnaval."),
      R("The flight was delayed by two hours.", "O voo foi atrasado em duas horas."),
      R("Breakfast is included in the price.", "O café da manhã está incluso no preço."),
      R("My passport was stamped at the airport.", "Meu passaporte foi carimbado no aeroporto."),
      R("The tickets were sold out in one day.", "Os ingressos foram esgotados em um dia."),
      R("Messages should be answered within 24 hours.", "As mensagens devem ser respondidas em até 24 horas.")
    ],
    vocab: [
      V("within", "dentro de, em até", "Reply within 24 hours."),
      V("inbox", "caixa de entrada", "Check your inbox."),
      V("to cancel", "cancelar", "The shoot was cancelled because of the rain."),
      V("prize", "prêmio", "Our team won a prize."),
      V("to be delayed", "estar atrasado", "The flight was delayed by two hours."),
      V("to be included", "estar incluso", "Breakfast is included."),
      V("fee", "taxa", "A fee is charged at the border."),
      V("sold out", "esgotado", "The tickets are sold out.")
    ]
  },

  s7: {
    reading: [
      R("Actually, I prefer planning to presenting.", "Na verdade, prefiro planejar a apresentar."),
      R("Currently, I'm studying English every morning.", "Atualmente, estou estudando inglês toda manhã."),
      R("I didn't realize how long the report would take.", "Eu não tinha noção de quanto tempo o relatório levaria."),
      R("We plan to visit the north next year.", "Pretendemos visitar o norte no ano que vem."),
      R("A guide will assist you at the gate.", "Um guia vai te ajudar no portão de embarque."),
      R("It's a six-hour journey by train.", "É um trajeto de seis horas de trem."),
      R("I didn't realize the museum closed at four.", "Eu não percebi que o museu fechava às quatro."),
      R("Eventually, all this practice will pay off.", "Com o tempo, toda essa prática vai valer a pena.")
    ],
    vocab: [
      V("actually", "na verdade", "Actually, I'm not sure."),
      V("currently", "atualmente", "We're currently testing a new format."),
      V("to realize", "perceber, se dar conta", "I realized I hadn't saved the file."),
      V("to pay off", "valer a pena, dar resultado", "Studying every day will pay off."),
      V("to assist", "ajudar (não é assistir)", "A guide will assist you at the gate."),
      V("exit", "saída (não é êxito)", "Take the exit on the right."),
      V("journey", "trajeto, viagem (não é jornada de trabalho)", "It's a six-hour journey."),
      V("library", "biblioteca (não é livraria)", "The library is next to the square.")
    ]
  },

  b2m1: {
    reading: [
      R("I've been working on this proposal since Monday.", "Estou trabalhando nesta proposta desde segunda."),
      R("We've been getting more clients since we changed the website.", "Estamos recebendo mais clientes desde que mudamos o site."),
      R("How long have you been waiting at the gate?", "Há quanto tempo você está esperando no portão de embarque?"),
      R("She's been leading the team for almost a year.", "Ela lidera a equipe há quase um ano."),
      R("We've been travelling for eleven hours and we're still not there.", "Estamos viajando há onze horas e ainda não chegamos."),
      R("I've called the hotel three times today, but nobody answers.", "Liguei três vezes para o hotel hoje, mas ninguém atende."),
      R("It's been raining all week, so the tours were cancelled.", "Está chovendo a semana toda, então os passeios foram cancelados."),
      R("I've been studying English on the bus since November.", "Estudo inglês no ônibus desde novembro.")
    ],
    vocab: [
      V("lately", "ultimamente", "I've been very busy lately."),
      V("nobody", "ninguém", "Nobody answered the phone."),
      V("almost", "quase", "We're almost done."),
      V("to answer", "atender, responder", "Please answer the phone."),
      V("recently", "recentemente", "We recently hired two people."),
      V("all day", "o dia todo", "I've been in meetings all day."),
      V("to queue", "fazer fila", "We've been queuing for an hour."),
      V("exhausted", "exausto", "I've been travelling all day and I'm exhausted.")
    ]
  },

  s4: {
    reading: [
      R("My boss told me the new plan was the best one this month.", "Meu chefe me disse que o novo plano era o melhor do mês."),
      R("The client asked if we could deliver the report by Friday.", "O cliente perguntou se podíamos entregar o relatório até sexta."),
      R("The receptionist said the room would be ready at two.", "A recepcionista disse que o quarto estaria pronto às duas."),
      R("She said she had never seen so much rain.", "Ela disse que nunca tinha visto tanta chuva."),
      R("The driver asked me where I wanted to go.", "O motorista me perguntou aonde eu queria ir."),
      R("I told him not to worry about the deadline.", "Eu disse para ele não se preocupar com o prazo."),
      R("They asked me where I had learned to speak English.", "Eles me perguntaram onde eu tinha aprendido a falar inglês."),
      R("He said he would send the feedback in the afternoon.", "Ele disse que mandaria o retorno à tarde.")
    ],
    vocab: [
      V("to deliver", "entregar", "We delivered the video on time."),
      V("to point out", "apontar, observar", "She pointed out a typo in the title."),
      V("to agree", "concordar", "I agree with you."),
      V("to complain", "reclamar", "The client complained about the music."),
      V("to suggest", "sugerir", "He suggested a different font."),
      V("receptionist", "recepcionista", "The receptionist said the room was ready."),
      V("to warn", "avisar, alertar", "They warned us about the traffic."),
      V("to recommend", "recomendar", "She recommended a small restaurant.")
    ]
  },

  b2m2: {
    reading: [
      R("I wish I had more time to study, but work is busy.", "Queria ter mais tempo para estudar, mas o trabalho está corrido."),
      R("If only we had booked the tickets a week earlier!", "Se ao menos tivéssemos comprado as passagens uma semana antes!"),
      R("I wish the client would make a decision.", "Queria que o cliente tomasse uma decisão."),
      R("If I had learned English as a kid, I would be fluent now.", "Se eu tivesse aprendido inglês criança, seria fluente agora."),
      R("I wish I had packed a lighter bag.", "Queria ter feito uma mala mais leve."),
      R("If we had taken the early train, we would be at the hotel by now.", "Se tivéssemos pegado o trem cedo, já estaríamos no hotel."),
      R("She wishes she lived closer to the office.", "Ela queria morar mais perto do escritório."),
      R("I wish I hadn't said that in the meeting.", "Queria não ter dito aquilo na reunião.")
    ],
    vocab: [
      V("decision", "decisão", "We need to make a decision."),
      V("to regret", "arrepender-se", "I regret not calling him."),
      V("fluent", "fluente", "She's fluent in English."),
      V("earlier", "antes, mais cedo", "Let's start earlier tomorrow."),
      V("organized", "organizado", "He's very organized."),
      V("to overpack", "levar bagagem demais", "I wish I hadn't overpacked."),
      V("by now", "a esta altura", "We would be at the hotel by now."),
      V("regret", "arrependimento", "My only regret is the short trip.")
    ]
  },

  s8: {
    reading: [
      R("We ran out of ideas, so we went over our best work from last year.", "Ficamos sem ideias, então revisamos nossos melhores trabalhos do ano passado."),
      R("Can you help me set up the projector for the presentation?", "Pode me ajudar a montar o projetor para a apresentação?"),
      R("I finally figured out how to use the ticket machine.", "Finalmente descobri como usar a máquina de bilhetes."),
      R("The client put off the launch until February.", "O cliente adiou o lançamento para fevereiro."),
      R("We ran into an old colleague at the airport.", "Encontramos por acaso um antigo colega no aeroporto."),
      R("Don't forget to back up your photos before the trip.", "Não esqueça de fazer backup das suas fotos antes da viagem."),
      R("I'll follow up with the hotel after lunch.", "Vou dar retorno ao hotel depois do almoço."),
      R("We had to check out at eleven and drop off the keys.", "Tivemos que fazer o check-out às onze e deixar as chaves.")
    ],
    vocab: [
      V("to export", "exportar", "Export the video in 1080p."),
      V("storage", "armazenamento", "We need more storage."),
      V("to run into", "encontrar por acaso", "We ran into an old colleague at the airport."),
      V("to drop off", "deixar (algo ou alguém)", "We dropped off the keys at reception."),
      V("to check out", "fazer o check-out", "We had to check out at eleven."),
      V("to put off", "adiar", "The client put off the launch."),
      V("to go over", "revisar", "Let's go over the plan again."),
      V("to back up", "fazer backup", "Back up your photos before the trip.")
    ]
  },

  b2m3: {
    reading: [
      R("Our website is being redesigned, so some pages are offline.", "Nosso site está sendo redesenhado, então algumas páginas estão fora do ar."),
      R("All invoices must be paid within thirty days.", "Todas as faturas devem ser pagas em até trinta dias."),
      R("We had the new brochures printed last week.", "Mandamos imprimir os folhetos novos semana passada."),
      R("I had my suit cleaned before the conference.", "Mandei limpar meu terno antes do congresso."),
      R("Breakfast is being served until ten.", "O café da manhã está sendo servido até as dez."),
      R("The proposal should have been sent before the holiday.", "A proposta deveria ter sido enviada antes do feriado."),
      R("The hotel is said to be the oldest in the city.", "Dizem que o hotel é o mais antigo da cidade."),
      R("I'm getting my passport renewed next month.", "Vou mandar renovar meu passaporte no mês que vem.")
    ],
    vocab: [
      V("brochure", "folheto", "The brochures are ready."),
      V("to repair", "consertar", "We need to repair the printer."),
      V("to print", "imprimir", "Can you print this for me?"),
      V("cloud", "nuvem", "All files are saved in the cloud."),
      V("to expect", "esperar (que aconteça)", "We expect good results."),
      V("to renew", "renovar", "I'm getting my passport renewed."),
      V("to be served", "ser servido", "Breakfast is being served until ten."),
      V("laundry", "lavanderia, roupa suja", "The hotel has a laundry service.")
    ]
  },

  b2m4: {
    reading: [
      R("The client hasn't answered. He must have been busy all day.", "O cliente não respondeu. Deve ter ficado ocupado o dia todo."),
      R("I should have checked the numbers before sending the report.", "Eu deveria ter conferido os números antes de mandar o relatório."),
      R("The package might have been delivered to the wrong address.", "O pacote pode ter sido entregue no endereço errado."),
      R("Our bags haven't arrived. They might have been left in Lisbon.", "Nossas malas não chegaram. Podem ter ficado em Lisboa."),
      R("She can't have seen my message. She was on a plane.", "Ela não pode ter visto minha mensagem. Estava num avião."),
      R("We should have booked the airport transfer in advance.", "Deveríamos ter reservado o transfer do aeroporto com antecedência."),
      R("We shouldn't have promised such a short deadline.", "Não deveríamos ter prometido um prazo tão curto."),
      R("You must have worked really hard on this.", "Você deve ter trabalhado muito nisso.")
    ],
    vocab: [
      V("package", "pacote", "The package arrived today."),
      V("mistake", "erro", "Everyone makes mistakes."),
      V("traffic", "trânsito", "The traffic was terrible."),
      V("to check", "conferir", "Please check the numbers."),
      V("wrong", "errado", "That's the wrong address."),
      V("transfer", "transfer, traslado", "We should have booked the airport transfer."),
      V("to go missing", "sumir, desaparecer", "Our bags went missing in Lisbon."),
      V("in advance", "com antecedência", "Book the hotel in advance.")
    ]
  },

  s11: {
    reading: [
      R("Although the presentation was short, it convinced the client.", "Embora a apresentação fosse curta, convenceu o cliente."),
      R("Despite the low budget, the event looked professional.", "Apesar do orçamento baixo, o evento ficou profissional."),
      R("The hotel was lovely. However, the breakfast was poor.", "O hotel era adorável. No entanto, o café da manhã era fraco."),
      R("Despite the rain, we walked around the old town all afternoon.", "Apesar da chuva, andamos pelo centro histórico a tarde toda."),
      R("I study every day, so my English is getting better.", "Estudo todo dia, então meu inglês está melhorando."),
      R("Even though I was tired, I watched an episode in English.", "Mesmo cansado, assisti um episódio em inglês."),
      R("As soon as the client replies, I'll let you know.", "Assim que o cliente responder, te aviso."),
      R("We'll wait at the gate until they announce the delay.", "Vamos esperar no portão até anunciarem o atraso.")
    ],
    vocab: [
      V("budget", "orçamento", "We have a small budget this month."),
      V("to reply", "responder", "Reply to the comments today."),
      V("to let someone know", "avisar alguém", "Let me know when it's ready."),
      V("however", "no entanto", "However, the breakfast was poor."),
      V("despite", "apesar de", "Despite the rain, we walked for hours."),
      V("although", "embora", "Although it was short, it worked."),
      V("to announce", "anunciar", "They announced a two-hour delay."),
      V("old town", "centro histórico", "We walked around the old town.")
    ]
  },

  s12: {
    reading: [
      R("A year ago, I couldn't use \"had\" without thinking.", "Um ano atrás, eu não conseguia usar \"had\" sem pensar."),
      R("I've studied English on the bus almost every day since November.", "Estudo inglês no ônibus quase todo dia desde novembro."),
      R("If I hadn't started, I would still be translating everything in my head.", "Se eu não tivesse começado, ainda estaria traduzindo tudo na cabeça."),
      R("On my last trip, I ordered dinner and asked for directions in English.", "Na minha última viagem, pedi o jantar e perguntei o caminho em inglês."),
      R("Even though I'm not fluent yet, I understand most of what I read.", "Mesmo não sendo fluente ainda, entendo quase tudo que leio."),
      R("Next, I should practice speaking more often.", "Agora, eu deveria praticar a fala com mais frequência."),
      R("If I keep going, I'll be ready for a job interview in English.", "Se eu continuar, vou estar pronto para uma entrevista de emprego em inglês."),
      R("I'm looking forward to reaching C1.", "Estou ansioso para chegar ao C1.")
    ]
  },

  c1m1: {
    reading: [
      R("Never before have we had so many clients in a single month.", "Nunca antes tivemos tantos clientes num único mês."),
      R("Not only did the project hit its target, but it also lowered our costs.", "O projeto não só bateu a meta como reduziu nossos custos."),
      R("No sooner had we fixed one problem than another appeared.", "Mal corrigimos um problema e outro apareceu."),
      R("Only after reading the contract carefully did we notice the clause.", "Só depois de ler o contrato com atenção percebemos a cláusula."),
      R("Rarely does a flight leave this airport on time.", "Raramente um voo sai deste aeroporto no horário."),
      R("No sooner had we checked in than they announced the delay.", "Mal fizemos o check-in e anunciaram o atraso."),
      R("Under no circumstances should you leave your luggage unattended.", "Em hipótese nenhuma deixe sua bagagem sem vigilância."),
      R("Little did we know that the museum was closed on Mondays.", "Mal sabíamos que o museu fechava às segundas.")
    ],
    vocab: [
      V("target", "meta, alvo", "We hit our sales target."),
      V("clause", "cláusula", "Read the last clause carefully."),
      V("complaint", "reclamação", "We received a complaint today."),
      V("to lower", "reduzir, baixar", "We need to lower our costs."),
      V("unattended", "sem vigilância", "Never leave your luggage unattended."),
      V("to announce", "anunciar", "They announced a two-hour delay."),
      V("on time", "na hora", "The train is on time."),
      V("rarely", "raramente", "Rarely does a flight leave on time.")
    ]
  },

  c1m2: {
    reading: [
      R("Having analyzed the data, we changed our strategy.", "Depois de analisar os dados, mudamos nossa estratégia."),
      R("Founded in 2015, the company now has fifty employees.", "Fundada em 2015, a empresa hoje tem cinquenta funcionários."),
      R("Clients signing annual contracts get a discount.", "Clientes que assinam contratos anuais ganham desconto."),
      R("Built in 1890, the station is still the busiest in the country.", "Construída em 1890, a estação ainda é a mais movimentada do país."),
      R("Not wanting to miss the train, we left the hotel at dawn.", "Sem querer perder o trem, saímos do hotel de madrugada."),
      R("Surrounded by mountains, the village is hard to reach in winter.", "Cercada por montanhas, a vila é difícil de alcançar no inverno."),
      R("The report published last week caused a lot of discussion.", "O relatório publicado semana passada gerou muita discussão."),
      R("Looking back, I would have stayed one more day.", "Olhando para trás, eu teria ficado mais um dia.")
    ],
    vocab: [
      V("to found", "fundar", "The company was founded in 2015."),
      V("annual", "anual", "We have an annual review."),
      V("discount", "desconto", "Can you give us a discount?"),
      V("strategy", "estratégia", "Our strategy is working."),
      V("dawn", "madrugada, amanhecer", "We left the hotel at dawn."),
      V("to surround", "cercar", "The village is surrounded by mountains."),
      V("village", "vila, vilarejo", "The village is hard to reach in winter."),
      V("plain", "simples, claro", "Write it in plain English.")
    ]
  },

  c1m3: {
    reading: [
      R("What our clients value most is quick answers.", "O que nossos clientes mais valorizam são respostas rápidas."),
      R("It was the design team that suggested the new layout.", "Foi a equipe de design que sugeriu o novo layout."),
      R("I do appreciate your patience with this project.", "Agradeço de verdade sua paciência com este projeto."),
      R("What made the trip was the people we met.", "O que fez a viagem foram as pessoas que conhecemos."),
      R("It was in Porto that we decided to stay another week.", "Foi no Porto que decidimos ficar mais uma semana."),
      R("The thing is, we can't lower the price any further.", "A questão é que não conseguimos baixar mais o preço."),
      R("All we need now is the client's approval.", "Tudo de que precisamos agora é a aprovação do cliente."),
      R("What surprised me was how cheap the trains were.", "O que me surpreendeu foi como os trens eram baratos.")
    ],
    vocab: [
      V("deal", "negócio, acordo", "We closed the deal yesterday."),
      V("concern", "preocupação", "I understand your concern."),
      V("to value", "valorizar", "We value your feedback."),
      V("patience", "paciência", "Thanks for your patience."),
      V("to appreciate", "agradecer, valorizar", "I appreciate your help."),
      V("follow-up", "acompanhamento, retorno", "I'll send a follow-up email."),
      V("to make the trip", "fazer valer a viagem", "What made the trip was the people."),
      V("further", "mais, além", "We can't lower the price any further.")
    ]
  },

  c1m4: {
    reading: [
      R("We can offer a discount provided that you sign a two-year contract.", "Podemos dar desconto desde que você assine um contrato de dois anos."),
      R("Should you have any questions, don't hesitate to contact us.", "Caso tenha alguma dúvida, não hesite em nos contatar."),
      R("Had we tested the system earlier, we would have avoided the problem.", "Se tivéssemos testado o sistema antes, teríamos evitado o problema."),
      R("Unless we get approval today, the launch will be delayed.", "A menos que tenhamos aprovação hoje, o lançamento vai atrasar."),
      R("Had I known about the strike, I would have taken an earlier train.", "Se eu soubesse da greve, teria pegado um trem mais cedo."),
      R("You can cancel free of charge provided that you do it 24 hours in advance.", "Você pode cancelar sem custo desde que faça isso com 24 horas de antecedência."),
      R("I always save a copy in case the system crashes.", "Sempre salvo uma cópia caso o sistema trave."),
      R("Take a jacket in case it gets cold at night.", "Leve um casaco caso esfrie à noite.")
    ],
    vocab: [
      V("to hesitate", "hesitar", "Don't hesitate to call me."),
      V("payment", "pagamento", "The payment arrived today."),
      V("to delay", "atrasar, adiar", "The launch was delayed."),
      V("offer", "oferta, proposta", "I accepted the job offer."),
      V("strike", "greve", "Had I known about the strike, I would have left earlier."),
      V("free of charge", "sem custo", "You can cancel free of charge."),
      V("in case", "caso, por precaução", "Take a jacket in case it gets cold."),
      V("launch", "lançamento", "The launch is next week.")
    ]
  },

  c1m5: {
    reading: [
      R("We made a lot of progress this quarter, but we still have a long way to go.", "Avançamos muito neste trimestre, mas ainda temos um longo caminho."),
      R("Before making a decision, let's do some research.", "Antes de tomar uma decisão, vamos pesquisar um pouco."),
      R("The client raised a valid concern about the timeline.", "O cliente levantou uma preocupação válida sobre o cronograma."),
      R("It took us three meetings to reach an agreement.", "Levamos três reuniões para chegar a um acordo."),
      R("We took a risk and booked the trip without a return date.", "Arriscamos e marcamos a viagem sem data de volta."),
      R("Everyone took part in the planning session.", "Todos participaram da sessão de planejamento."),
      R("Take into account that the airport is an hour away.", "Leve em conta que o aeroporto fica a uma hora daqui."),
      R("She always takes responsibility when things go wrong.", "Ela sempre assume a responsabilidade quando algo dá errado.")
    ],
    vocab: [
      V("quarter", "trimestre", "Sales grew this quarter."),
      V("timeline", "cronograma", "Let's review the timeline."),
      V("valid", "válido", "That's a valid point."),
      V("progress", "progresso, avanço", "We're making progress."),
      V("to take a risk", "arriscar", "We took a risk and booked without a return date."),
      V("to take into account", "levar em conta", "Take into account that the airport is an hour away."),
      V("to reach an agreement", "chegar a um acordo", "It took three meetings to reach an agreement."),
      V("to take part", "participar", "Everyone took part in the session.")
    ]
  },

  c1m6: {
    reading: [
      R("Dear Mr. Smith, I am writing to follow up on our meeting last week.", "Prezado Sr. Smith, escrevo para dar continuidade à nossa reunião da semana passada."),
      R("Please find attached the revised proposal.", "Segue em anexo a proposta revisada."),
      R("We have taken your comments into account and adjusted the timeline accordingly.", "Levamos seus comentários em conta e ajustamos o cronograma."),
      R("I am writing to request a refund for a cancelled flight.", "Escrevo para solicitar o reembolso de um voo cancelado."),
      R("Should you require any further information, please do not hesitate to contact me.", "Caso precise de mais informações, não hesite em me contatar."),
      R("Furthermore, we would be pleased to offer a 10% discount on the first order.", "Além disso, teríamos o prazer de oferecer 10% de desconto no primeiro pedido."),
      R("I would be grateful if you could confirm the booking in writing.", "Ficaria grato se você confirmasse a reserva por escrito."),
      R("I look forward to hearing from you. Kind regards, Ana.", "Aguardo seu retorno. Atenciosamente, Ana.")
    ],
    vocab: [
      V("attached", "em anexo", "The file is attached."),
      V("to request", "solicitar", "I'd like to request a refund."),
      V("to require", "exigir, precisar", "This job requires experience."),
      V("to assist", "auxiliar", "How can I assist you?"),
      V("to purchase", "comprar", "You can purchase it online."),
      V("kind regards", "atenciosamente", "Kind regards, Ana."),
      V("booking", "reserva", "Please confirm the booking in writing."),
      V("refund", "reembolso", "If you cancel today, you'll get a refund.")
    ]
  },

  c2m1: {
    reading: [
      R("Let's touch base on Monday and see where we are.", "Vamos nos falar na segunda e ver onde estamos."),
      R("The bottom line is that the investment didn't pay off.", "O resumo é que o investimento não deu retorno."),
      R("Winning that contract was a long shot, but we did it.", "Ganhar aquele contrato era improvável, mas conseguimos."),
      R("We can't afford to cut corners on client security.", "Não podemos economizar na segurança dos clientes."),
      R("Booking a flight the night before is always a long shot.", "Comprar passagem na véspera é sempre uma aposta arriscada."),
      R("We were back to square one when the hotel cancelled our room.", "Voltamos à estaca zero quando o hotel cancelou nosso quarto."),
      R("Our new colleague really hit the ground running.", "Nosso novo colega já chegou produzindo."),
      R("Before we wrap up, is everyone on the same page?", "Antes de encerrarmos, estão todos alinhados?")
    ],
    vocab: [
      V("to wrap up", "encerrar, finalizar", "Let's wrap up the meeting."),
      V("to pay off", "dar retorno, valer a pena", "All the hard work paid off."),
      V("can't afford to", "não poder se dar ao luxo de", "We can't afford to lose this client."),
      V("a long shot", "chance pequena", "It's a long shot, but let's try."),
      V("in the loop", "informado", "Keep me in the loop."),
      V("the bottom line", "o resultado final, o que importa", "The bottom line is profit."),
      V("back to square one", "de volta à estaca zero", "We were back to square one."),
      V("to hit the ground running", "chegar já produzindo", "Our new colleague hit the ground running.")
    ]
  },

  c2m2: {
    reading: [
      R("It would seem that our message isn't reaching the right audience.", "Parece que nossa mensagem não está chegando ao público certo."),
      R("Arguably, this is the most important decision of the year.", "Pode-se dizer que esta é a decisão mais importante do ano."),
      R("The new policy is likely to reduce costs to some extent.", "A nova política deve reduzir custos até certo ponto."),
      R("Flights are unlikely to get cheaper before December.", "É improvável que as passagens fiquem mais baratas antes de dezembro."),
      R("Clients tend to respond better to short, direct emails.", "Clientes costumam responder melhor a e-mails curtos e diretos."),
      R("The hotel was, broadly speaking, better than we expected.", "O hotel foi, de modo geral, melhor do que esperávamos."),
      R("If the deadline can't change, we might as well start now.", "Se o prazo não pode mudar, é melhor começarmos agora."),
      R("I can't help feeling that we're missing an opportunity.", "Não consigo deixar de sentir que estamos perdendo uma oportunidade.")
    ],
    vocab: [
      V("audience", "público", "Who is our audience?"),
      V("policy", "política, regra interna", "Our refund policy is simple."),
      V("opportunity", "oportunidade", "This is a great opportunity."),
      V("to reduce", "reduzir", "We reduced costs by 10%."),
      V("so far", "até agora", "So far, so good."),
      V("unlikely", "improvável", "Flights are unlikely to get cheaper."),
      V("broadly speaking", "de modo geral", "The hotel was, broadly speaking, better than we expected."),
      V("to some extent", "até certo ponto", "I agree with you to some extent.")
    ]
  },

  c2m3: {
    reading: [
      R("The client requested that all changes be approved in writing.", "O cliente pediu que todas as alterações sejam aprovadas por escrito."),
      R("It's high time we invested in better tools.", "Já passou da hora de investirmos em ferramentas melhores."),
      R("I'd rather you told me the truth now than later.", "Prefiro que você me conte a verdade agora do que depois."),
      R("The airline insisted that every passenger show a printed ticket.", "A companhia aérea insistiu que cada passageiro mostrasse um bilhete impresso."),
      R("It is vital that every team member understand the new process.", "É vital que cada membro da equipe entenda o novo processo."),
      R("It's high time we took a proper holiday.", "Já passou da hora de tirarmos umas férias de verdade."),
      R("The deadline is tight; be that as it may, quality comes first.", "O prazo é apertado; seja como for, a qualidade vem primeiro."),
      R("We'll book a later flight if need be.", "Vamos remarcar para um voo mais tarde se for necessário.")
    ],
    vocab: [
      V("in writing", "por escrito", "Please confirm in writing."),
      V("tight", "apertado", "The budget is tight."),
      V("vital", "vital, essencial", "Your feedback is vital."),
      V("to insist", "insistir", "She insisted on paying."),
      V("crucial", "crucial", "This step is crucial."),
      V("passenger", "passageiro", "Every passenger must show a ticket."),
      V("airline", "companhia aérea", "The airline insisted on a printed ticket."),
      V("if need be", "se for necessário", "We'll book a later flight if need be.")
    ]
  },

  c2m4: {
    reading: [
      R("The announcement of the merger surprised everyone.", "O anúncio da fusão surpreendeu todo mundo."),
      R("Our main goal this year is to increase brand awareness.", "Nosso principal objetivo este ano é aumentar o reconhecimento da marca."),
      R("We underestimated how long the migration would take.", "Subestimamos quanto tempo a migração levaria."),
      R("I misread the departure time and almost missed the flight.", "Li errado o horário de partida e quase perdi o voo."),
      R("Clear communication avoids most misunderstandings.", "Comunicação clara evita a maioria dos mal-entendidos."),
      R("The directions on the website were misleading.", "As instruções no site eram enganosas."),
      R("The new dashboard is simple, reliable and incredibly useful.", "O novo painel é simples, confiável e incrivelmente útil."),
      R("Let's rethink the way we plan our trips.", "Vamos repensar a forma como planejamos nossas viagens.")
    ],
    vocab: [
      V("merger", "fusão (de empresas)", "The merger was announced today."),
      V("misunderstanding", "mal-entendido", "It was just a misunderstanding."),
      V("dashboard", "painel", "Check the sales dashboard."),
      V("awareness", "reconhecimento, consciência", "Brand awareness is growing."),
      V("to misread", "ler errado", "I misread the departure time."),
      V("misleading", "enganoso", "The directions were misleading."),
      V("departure", "partida", "Departures are at gate 12."),
      V("to rethink", "repensar", "Let's rethink the way we plan our trips.")
    ]
  },

  c2m5: {
    reading: [
      R("I was wondering if we could move the meeting to Thursday.", "Queria saber se poderíamos mudar a reunião para quinta."),
      R("The launch didn't go exactly as planned, to put it mildly.", "O lançamento não saiu bem como planejado, para dizer o mínimo."),
      R("With all due respect, the numbers tell a different story.", "Com todo o respeito, os números contam outra história."),
      R("The hotel was, let's say, cosy.", "O hotel era, digamos, aconchegante."),
      R("\"Another delay? Oh, great.\" He clearly wasn't happy.", "\"Mais um atraso? Que ótimo.\" Ele claramente não estava feliz."),
      R("I'm afraid we're fully booked for tonight.", "Infelizmente estamos lotados para hoje à noite."),
      R("It's been a challenging year, but we've learned a lot.", "Foi um ano difícil, mas aprendemos muito."),
      R("I'd be grateful if you could keep this between us.", "Ficaria grato se você mantivesse isso entre nós.")
    ],
    vocab: [
      V("to put it mildly", "para dizer o mínimo", "It was a mess, to put it mildly."),
      V("with all due respect", "com todo o respeito", "With all due respect, I disagree."),
      V("challenging", "difícil, desafiador", "It's been a challenging year."),
      V("grateful", "grato", "I'd be grateful if you could reply today."),
      V("fully booked", "lotado, sem vagas", "I'm afraid we're fully booked."),
      V("cosy", "aconchegante (às vezes: pequeno)", "The hotel was, let's say, cosy."),
      V("to be afraid", "lamentar, infelizmente", "I'm afraid we're fully booked."),
      V("to wonder", "querer saber, se perguntar", "I was wondering if we could meet on Thursday.")
    ]
  }

};

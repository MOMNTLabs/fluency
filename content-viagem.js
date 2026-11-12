// Pacote de vocabulário com tema de viagem. Substitui só as seções de Vocabulário;
// a gramática do curso é a mesma para todos os temas.
window.PACKS = window.PACKS || {};
window.PACKS.viagem = {
  titles: { vocab: "Vocabulário de viagem", reading: "Leitura de viagem", listen: "Escuta de viagem" },
  icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.7 2.4 15.3 0 18M12 3c-2.4 2.7-2.4 15.3 0 18"/>',
  reading: {
    "a1m1-leitura": [
      R("Hi, I'm Marina. I'm a tourist here.", "Oi, eu sou a Marina. Sou turista aqui."),
      R("I'm from Brazil, and this is my first trip to Europe.", "Sou do Brasil, e esta é a minha primeira viagem à Europa."),
      R("My hotel is near the station.", "Meu hotel fica perto da estação."),
      R("The streets are full, and the people are friendly.", "As ruas estão cheias e as pessoas são simpáticas."),
      R("The museum isn't open today.", "O museu não está aberto hoje."),
      R("Are you lost? The map is on my phone.", "Você está perdido? O mapa está no meu celular.")
    ],
    "a1m2-leitura": [
      R("I stay in a small hostel downtown.", "Eu fico em um albergue pequeno no centro."),
      R("The bus leaves at eight every morning.", "O ônibus sai às oito toda manhã."),
      R("My friend walks to the beach before breakfast.", "Minha amiga vai a pé até a praia antes do café."),
      R("She buys the tickets online.", "Ela compra as passagens pela internet."),
      R("We visit two or three places a day.", "Visitamos dois ou três lugares por dia."),
      R("I always arrive early at the airport.", "Eu sempre chego cedo no aeroporto.")
    ],
    "a1m3-leitura": [
      R("I have a backpack and two small bags.", "Tenho uma mochila e duas malas pequenas."),
      R("This suitcase is mine. That one is my friend's.", "Esta mala é minha. Aquela é da minha amiga."),
      R("The beach near the hotel is beautiful.", "A praia perto do hotel é linda."),
      R("I need an umbrella and a map.", "Preciso de um guarda-chuva e de um mapa."),
      R("These streets are narrow and old.", "Estas ruas são estreitas e antigas."),
      R("The keys are in that drawer.", "As chaves estão naquela gaveta.")
    ],
    "a1m4-leitura": [
      R("There's an elevator on the left.", "Tem um elevador à esquerda."),
      R("There are no towels in the bathroom.", "Não tem toalhas no banheiro."),
      R("Is there a pool in this hotel?", "Tem piscina neste hotel?"),
      R("There's a pharmacy near the station.", "Tem uma farmácia perto da estação."),
      R("There are two bus stops on this street.", "Tem dois pontos de ônibus nesta rua."),
      R("There's a bakery on the corner.", "Tem uma padaria na esquina.")
    ],
    "a1m5-leitura": [
      R("Check-in is at two o'clock.", "O check-in é às duas horas."),
      R("Check-out is at eleven, and the taxi comes at half past ten.", "O check-out é às onze, e o táxi vem às dez e meia."),
      R("Boarding starts at a quarter to seven.", "O embarque começa às sete menos quinze."),
      R("We're staying three nights.", "Vamos ficar três noites."),
      R("The flight is on June 12th.", "O voo é no dia 12 de junho."),
      R("There's a two-hour delay.", "Tem um atraso de duas horas.")
    ],
    "a1m6-leitura": [
      R("This is my passport, and that bag is mine.", "Este é o meu passaporte, e aquela bolsa é minha."),
      R("Can I leave my luggage here?", "Posso deixar minha bagagem aqui?"),
      R("Can you help me, please? I need a taxi.", "Você pode me ajudar, por favor? Preciso de um táxi."),
      R("I can book the room online.", "Eu consigo reservar o quarto pela internet."),
      R("Give me the key, please.", "Me dá a chave, por favor."),
      R("Can I pay in cash?", "Posso pagar em dinheiro?")
    ],
    "a2m1-leitura": [
      R("We landed at midnight and took a taxi.", "Pousamos à meia-noite e pegamos um táxi."),
      R("I lost my passport on the first day.", "Perdi meu passaporte no primeiro dia."),
      R("We didn't visit the museum because it was closed.", "Não visitamos o museu porque estava fechado."),
      R("She bought a souvenir for her sister.", "Ela comprou uma lembrança para a irmã."),
      R("I missed the train, so I waited an hour.", "Perdi o trem, então esperei uma hora."),
      R("Did you like the food there?", "Você gostou da comida de lá?")
    ],
    "a2m2-leitura": [
      R("I'm waiting for the bus right now.", "Estou esperando o ônibus agora."),
      R("She's packing her bags for tomorrow.", "Ela está fazendo as malas para amanhã."),
      R("The train leaves from platform 3 every hour.", "O trem sai da plataforma 3 de hora em hora."),
      R("We usually travel in January.", "Normalmente viajamos em janeiro."),
      R("It's raining, so we're staying in today.", "Está chovendo, então vamos ficar em casa hoje."),
      R("I'm looking for the exit.", "Estou procurando a saída.")
    ],
    "a2m3-leitura": [
      R("We're going to rent a car on Friday.", "Vamos alugar um carro na sexta."),
      R("I'll send you the itinerary tonight.", "Vou te mandar o roteiro hoje à noite."),
      R("They'll pick us up at the airport.", "Eles vão nos buscar no aeroporto."),
      R("The plane is going to take off in an hour.", "O avião vai decolar em uma hora."),
      R("It will be sunny tomorrow.", "Vai fazer sol amanhã."),
      R("We're going to stay in a hostel near the center.", "Vamos ficar em um albergue perto do centro.")
    ],
    "a2m4-leitura": [
      R("A round trip is cheaper than two one-way tickets.", "Ida e volta é mais barato que duas passagens só de ida."),
      R("This hotel is more comfortable than the last one.", "Este hotel é mais confortável que o último."),
      R("The window seat is the best one on the plane.", "O assento na janela é o melhor do avião."),
      R("The airport is farther than the station.", "O aeroporto é mais longe que a estação."),
      R("The train is slower, but it's more comfortable.", "O trem é mais lento, mas é mais confortável."),
      R("This is the busiest street in the city.", "Esta é a rua mais movimentada da cidade.")
    ],
    "s5-leitura": [
      R("The train is on time.", "O trem está na hora."),
      R("Book the hotel in advance.", "Reserve o hotel com antecedência."),
      R("Arrivals are on the ground floor.", "As chegadas ficam no térreo."),
      R("We land at six in the morning.", "Pousamos às seis da manhã."),
      R("I'm traveling abroad in July.", "Vou viajar para fora em julho."),
      R("The market is ten minutes away on foot.", "O mercado fica a dez minutos a pé.")
    ],
    "a2m5-leitura": [
      R("Do you have any change?", "Você tem algum troco?"),
      R("There aren't many seats left on that flight.", "Não sobraram muitos lugares naquele voo."),
      R("How much is the tip here?", "Quanto é a gorjeta aqui?"),
      R("I'd like some water, please.", "Eu queria uma água, por favor."),
      R("How many carry-on bags can I take?", "Quantas bagagens de mão posso levar?"),
      R("We don't have much time before boarding.", "Não temos muito tempo antes do embarque.")
    ],
    "s1-leitura": [
      R("I checked in online yesterday.", "Fiz o check-in pela internet ontem."),
      R("I've already been to Portugal twice.", "Já estive em Portugal duas vezes."),
      R("We've stayed in this hotel since Monday.", "Estamos neste hotel desde segunda."),
      R("By the time we arrived, the kitchen had closed.", "Quando chegamos, a cozinha já tinha fechado."),
      R("I had never traveled alone before that trip.", "Eu nunca tinha viajado sozinho antes daquela viagem."),
      R("If I had more time, I would stay another week.", "Se eu tivesse mais tempo, ficaria mais uma semana."),
      R("The driver never showed up, so we walked.", "O motorista nunca apareceu, então fomos a pé."),
      R("We had run out of cash by the second day.", "Já estávamos sem dinheiro no segundo dia."),
      R("I would go back tomorrow if I could.", "Eu voltaria amanhã se pudesse.")
    ],
    "s2-leitura": [
      R("We've visited three cities so far.", "Já visitamos três cidades até agora."),
      R("I haven't tried the local food yet.", "Ainda não experimentei a comida local."),
      R("Have you ever been to the north of the country?", "Você já esteve no norte do país?"),
      R("She's just found a market near the hotel.", "Ela acabou de achar um mercado perto do hotel."),
      R("I've loved this city since the first day.", "Amo esta cidade desde o primeiro dia."),
      R("We've been here for five days.", "Estamos aqui há cinco dias.")
    ],
    "b1m3-leitura": [
      R("I used to travel light, with one backpack.", "Eu costumava viajar com pouca bagagem, só uma mochila."),
      R("We were backpacking around Europe that summer.", "Estávamos fazendo mochilão pela Europa naquele verão."),
      R("I was feeling homesick on the third night.", "Eu estava com saudade de casa na terceira noite."),
      R("We used to spend every holiday in the countryside.", "A gente passava todo feriado no interior."),
      R("They were watching the sunset when it started to rain.", "Eles estavam vendo o pôr do sol quando começou a chover."),
      R("We used to get around by bike.", "A gente se locomovia de bicicleta.")
    ],
    "s3-leitura": [
      R("If it rains tomorrow, we'll visit the museum.", "Se chover amanhã, vamos visitar o museu."),
      R("If we get lost, I'll use the map on my phone.", "Se a gente se perder, eu uso o mapa do celular."),
      R("If I had more money, I would travel every year.", "Se eu tivesse mais dinheiro, viajaria todo ano."),
      R("If the flight is canceled, they'll call us.", "Se o voo for cancelado, eles vão ligar para a gente."),
      R("If I had changed money earlier, it would have been cheaper.", "Se eu tivesse trocado dinheiro antes, teria saído mais barato."),
      R("We'll walk unless it rains.", "Vamos a pé, a não ser que chova.")
    ],
    "s6-leitura": [
      R("I feel like walking to the old town today.", "Estou a fim de ir a pé até o centro histórico hoje."),
      R("We decided to take the night train.", "Decidimos pegar o trem noturno."),
      R("They gave up waiting for the bus.", "Eles desistiram de esperar o ônibus."),
      R("Keep walking for two blocks and turn right.", "Continue andando por dois quarteirões e vire à direita."),
      R("The tour is about to start.", "O passeio está prestes a começar."),
      R("We managed to get the last two tickets.", "Conseguimos pegar as duas últimas entradas.")
    ],
    "b1m6-leitura": [
      R("That's the neighborhood where we stayed.", "Aquele é o bairro onde ficamos."),
      R("The host who met us was very kind.", "O anfitrião que nos recebeu foi muito gentil."),
      R("It's the landmark that everyone photographs.", "É o ponto turístico que todo mundo fotografa."),
      R("We found a guesthouse whose owner spoke Portuguese.", "Achamos uma pousada cujo dono falava português."),
      R("There's a viewpoint which is free until six.", "Tem um mirante que é gratuito até as seis."),
      R("The restaurant that we liked most was the cheapest one.", "O restaurante de que mais gostamos era o mais barato.")
    ],
    "s9-leitura": [
      R("You should book ahead in high season.", "Você deveria reservar com antecedência na alta temporada."),
      R("You must have a visa to enter the country.", "Você precisa ter visto para entrar no país."),
      R("You don't have to tip here, but you can.", "Você não precisa dar gorjeta aqui, mas pode."),
      R("Drones aren't allowed in the park.", "Drones não são permitidos no parque."),
      R("It might rain this afternoon, so take an umbrella.", "Pode chover à tarde, então leve um guarda-chuva."),
      R("You should watch out for pickpockets on the subway.", "Você deveria tomar cuidado com batedores de carteira no metrô.")
    ],
    "s10-leitura": [
      R("The flight was delayed by two hours.", "O voo foi atrasado em duas horas."),
      R("Breakfast is included in the price.", "O café da manhã está incluso no preço."),
      R("My passport was stamped at the airport.", "Meu passaporte foi carimbado no aeroporto."),
      R("You'll be charged for extra luggage.", "Você vai ser cobrado pela bagagem extra."),
      R("The tickets were sold out in one day.", "Os ingressos foram esgotados em um dia."),
      R("The rooms are cleaned every morning.", "Os quartos são limpos toda manhã.")
    ],
    "s7-leitura": [
      R("A guide will assist you at the gate.", "Um guia vai te ajudar no portão de embarque."),
      R("Take the exit on the right.", "Pegue a saída à direita."),
      R("It's a six-hour journey by train.", "É um trajeto de seis horas de trem."),
      R("The library is next to the square.", "A biblioteca fica ao lado da praça."),
      R("I bought some fabric at the market.", "Comprei um tecido no mercado."),
      R("I didn't realize the museum closed at four.", "Eu não percebi que o museu fechava às quatro.")
    ]
  },
  vocab: {
    "a1m1-vocab": [
      V("flight", "voo", "My flight is at seven."),
      V("late", "atrasado", "The bus is late."),
      V("lost", "perdido", "I'm lost."),
      V("open", "aberto", "Is the museum open?"),
      V("crowded", "lotado, cheio", "The train is crowded."),
      V("tourist", "turista", "We're tourists here.")
    ],
    "a1m2-vocab": [
      V("to stay", "ficar, se hospedar", "I stay in a hostel."),
      V("to leave", "partir, sair", "The train leaves at eight."),
      V("to arrive", "chegar", "She arrives on Monday."),
      V("ticket", "passagem, ingresso", "He buys the ticket online."),
      V("trip", "viagem", "I take this trip every summer."),
      V("to walk", "caminhar, ir a pé", "We walk to the beach.")
    ],
    "a1m3-vocab": [
      V("suitcase", "mala", "This suitcase is mine."),
      V("backpack", "mochila", "I have a backpack and two bags."),
      V("map", "mapa", "Can I have a map?"),
      V("beach", "praia", "The beach is beautiful."),
      V("street", "rua", "That street is very long."),
      V("umbrella", "guarda-chuva", "I need an umbrella.")
    ],
    "a1m4-vocab": [
      V("elevator", "elevador", "There's an elevator on the left."),
      V("towel", "toalha", "There are no towels in the room."),
      V("pool", "piscina", "Is there a pool in the hotel?"),
      V("near", "perto de", "There's a pharmacy near the station."),
      V("corner", "esquina", "There's a bakery on the corner."),
      V("bus stop", "ponto de ônibus", "There's a bus stop in front of the hotel.")
    ],
    "a1m5-vocab": [
      V("check-in", "check-in, entrada", "Check-in is at two o'clock."),
      V("check-out", "check-out, saída", "Check-out is at eleven."),
      V("boarding", "embarque", "Boarding starts at half past six."),
      V("gate", "portão de embarque", "The gate closes at a quarter to nine."),
      V("night", "noite, diária", "Three nights, please."),
      V("delay", "atraso", "There's a two-hour delay.")
    ],
    "a1m6-vocab": [
      V("passport", "passaporte", "This is my passport."),
      V("luggage", "bagagem", "Can I leave my luggage here?"),
      V("to book", "reservar", "I can book it online."),
      V("room", "quarto", "The room is mine."),
      V("cash", "dinheiro em espécie", "Can I pay in cash?"),
      V("to need", "precisar", "I need a taxi, please.")
    ],
    "a2m1-vocab": [
      V("to land", "aterrissar, pousar", "We landed at midnight."),
      V("to miss", "perder (voo, ônibus)", "I missed my flight."),
      V("to lose", "perder (um objeto)", "I lost my passport."),
      V("border", "fronteira", "The border was closed."),
      V("souvenir", "lembrança", "I bought a souvenir for my sister."),
      V("to visit", "visitar", "We visited three cities.")
    ],
    "a2m2-vocab": [
      V("to wait for", "esperar por", "I'm waiting for the bus."),
      V("line", "fila", "The line is moving slowly."),
      V("to pack", "fazer as malas", "She's packing her bags."),
      V("platform", "plataforma", "The train is leaving from platform 3."),
      V("right now", "agora mesmo", "It's raining right now."),
      V("to look for", "procurar", "I'm looking for the exit.")
    ],
    "a2m3-vocab": [
      V("itinerary", "roteiro", "I'll send you the itinerary."),
      V("to rent", "alugar", "We're going to rent a car."),
      V("hostel", "albergue", "We're going to stay in a hostel."),
      V("to pick up", "buscar", "They'll pick us up at the airport."),
      V("to take off", "decolar", "The plane is going to take off soon."),
      V("weather", "tempo, clima", "It will be sunny tomorrow.")
    ],
    "a2m4-vocab": [
      V("round trip", "ida e volta", "A round trip is cheaper than two one-way tickets."),
      V("one-way", "só de ida", "A one-way ticket is more expensive."),
      V("aisle seat", "assento no corredor", "The aisle seat is better for me."),
      V("window seat", "assento na janela", "The window seat is the best."),
      V("far", "longe", "The airport is farther than the station."),
      V("comfortable", "confortável", "This hotel is more comfortable.")
    ],
    "s5-vocab": [
      V("on time", "na hora", "The train is on time."),
      V("in advance", "com antecedência", "Book the hotel in advance."),
      V("arrival", "chegada", "Arrivals are on the ground floor."),
      V("departure", "partida", "Departures are at gate 12."),
      V("abroad", "no exterior", "I'm traveling abroad in July."),
      V("on foot", "a pé", "The market is ten minutes away on foot.")
    ],
    "a2m5-vocab": [
      V("change", "troco", "Do you have any change?"),
      V("seat", "assento, lugar", "Are there any seats left?"),
      V("tip", "gorjeta", "How much is the tip?"),
      V("carry-on", "bagagem de mão", "How many carry-on bags can I take?"),
      V("spicy", "apimentado", "Is there any spicy food on the menu?"),
      V("water", "água", "Can I have some water, please?")
    ],
    "s1-vocab": [
      V("to check in", "fazer o check-in", "I've already checked in."),
      V("jet lag", "cansaço do fuso horário", "I had jet lag for three days."),
      V("layover", "escala", "We had a six-hour layover in Lisbon."),
      V("to board", "embarcar", "They've just started boarding."),
      V("customs", "alfândega", "I had never been through customs alone."),
      V("travel insurance", "seguro viagem", "I would get travel insurance if I were you."),
      V("to show up", "aparecer", "The driver never showed up."),
      V("to run out of", "ficar sem", "We had run out of cash by then.")
    ],
    "s2-vocab": [
      V("so far", "até agora", "We've visited three cities so far."),
      V("worth it", "vale a pena", "The view was worth it."),
      V("local", "local, da região", "We've just found a local market."),
      V("to try", "experimentar", "Have you ever tried street food?"),
      V("since then", "desde então", "I've loved this city since then."),
      V("to get used to", "se acostumar com", "I still haven't got used to the weather.")
    ],
    "b1m3-vocab": [
      V("to travel light", "viajar com pouca bagagem", "I used to travel light."),
      V("backpacking", "mochilão", "We were backpacking around Europe."),
      V("homesick", "com saudade de casa", "I was feeling homesick."),
      V("countryside", "interior, campo", "We used to spend summers in the countryside."),
      V("to get around", "se locomover", "We used to get around by bike."),
      V("sunset", "pôr do sol", "We were watching the sunset.")
    ],
    "s3-vocab": [
      V("refund", "reembolso", "If you cancel today, you'll get a refund."),
      V("to get lost", "se perder", "If we get lost, I'll use the map."),
      V("sunscreen", "protetor solar", "If it's sunny, bring sunscreen."),
      V("to change money", "trocar dinheiro", "If I had changed money earlier, it would have been cheaper."),
      V("unless", "a não ser que", "We'll walk unless it rains."),
      V("to cancel", "cancelar", "If the flight is canceled, they'll call us.")
    ],
    "s6-vocab": [
      V("to feel like", "estar a fim de", "I feel like walking today."),
      V("to give up", "desistir", "We gave up waiting for the bus."),
      V("to decide", "decidir", "We decided to take the night train."),
      V("to keep walking", "continuar andando", "Keep walking for two blocks."),
      V("to be about to", "estar prestes a", "The tour is about to start."),
      V("to manage to", "conseguir", "We managed to get tickets.")
    ],
    "b1m6-vocab": [
      V("neighborhood", "bairro", "That's the neighborhood where we stayed."),
      V("host", "anfitrião", "The host who met us was very kind."),
      V("landmark", "ponto turístico", "It's the landmark that everyone photographs."),
      V("guesthouse", "pousada", "We found a guesthouse whose owner spoke Portuguese."),
      V("crowd", "multidão", "We avoided the crowd that forms at noon."),
      V("viewpoint", "mirante", "There's a viewpoint which is free.")
    ],
    "s9-vocab": [
      V("to tip", "dar gorjeta", "You don't have to tip here."),
      V("visa", "visto", "You must have a visa."),
      V("allowed", "permitido", "Drones aren't allowed in the park."),
      V("to book ahead", "reservar com antecedência", "You should book ahead."),
      V("to watch out for", "tomar cuidado com", "You should watch out for pickpockets."),
      V("ID", "documento de identidade", "You might need your ID at the door.")
    ],
    "s10-vocab": [
      V("to be delayed", "estar atrasado", "The flight was delayed by two hours."),
      V("to be included", "estar incluso", "Breakfast is included."),
      V("to be charged", "ser cobrado", "You'll be charged for extra luggage."),
      V("fee", "taxa", "A fee is charged at the border."),
      V("sold out", "esgotado", "The tickets are sold out."),
      V("to be stamped", "ser carimbado", "My passport was stamped at the airport.")
    ],
    "s7-vocab": [
      V("to assist", "ajudar (não é assistir)", "A guide will assist you at the gate."),
      V("exit", "saída (não é êxito)", "Take the exit on the right."),
      V("fabric", "tecido (não é fábrica)", "I bought some fabric at the market."),
      V("journey", "trajeto, viagem (não é jornada de trabalho)", "It's a six-hour journey."),
      V("library", "biblioteca (não é livraria)", "The library is next to the square."),
      V("college", "faculdade (não é colégio)", "We visited an old college.")
    ]
  }
};

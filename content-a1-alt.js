// Frases alternativas das rodadas do A1. Mesma regra, frases novas.
window.ALT = Object.assign(window.ALT || {}, {

  "a1m1-r1": [
    F("You ___ very kind.", "are", "You {are} very kind.", "you → are."),
    F("My name ___ Ana.", "is", "My name {is} Ana.", "Uma coisa (it) → is."),
    F("We ___ in the same team.", "are", "We {are} in the same team.", "we → are."),
    F("I ___ from São Paulo.", "am", "I {am} from São Paulo.", "I → am."),
    F("The office ___ on the third floor.", "is", "The office {is} on the third floor.", "it → is."),
    F("They ___ my colleagues.", "are", "They {are} my colleagues.", "they → are."),
    F("She ___ a teacher. (negativa)", ["isn't", "is not"], "She {isn't} a teacher.", "Negativa com she → isn't."),
    F("___ he your boss?", "is", "{Is} he your boss?", "Pergunta com he → Is."),
    F("It ___ Monday today.", "is", "It {is} Monday today.", "it → is."),
    F("My parents ___ at home.", "are", "My parents {are} at home.", "Plural → are."),
    F("I ___ ready. (negativa)", ["am not", "'m not"], "I {am not} ready.", "I → am not. Não existe \"amn't\"."),
    F("___ you tired?", "are", "{Are} you tired?", "Pergunta: Are you…?"),
    F("The keys ___ on the table.", "are", "The keys {are} on the table.", "Plural → are."),
    F("He ___ 40 years old.", "is", "He {is} 40 years old.", "Idade usa to be.")
  ],

  "a1m1-r2": [
    F("The windows ___ open.", "are", "The windows {are} open.", "Plural → are."),
    F("This coffee ___ hot.", "is", "This coffee {is} hot.", "Uma coisa → is."),
    F("___ your sister a doctor?", "is", "{Is} your sister a doctor?", "Pergunta com she → Is."),
    F("We ___ late. (negativa)", ["aren't", "are not"], "We {aren't} late.", "we → aren't."),
    F("I ___ hungry. (negativa)", ["am not", "'m not"], "I {am not} hungry.", "I → am not."),
    F("Where ___ my glasses?", "are", "Where {are} my glasses?", "Plural → are."),
    F("He ___ in a meeting right now.", "is", "He {is} in a meeting right now.", "he → is."),
    F("___ the children at school?", "are", "{Are} the children at school?", "Plural → Are."),
    F("You ___ right.", "are", "You {are} right.", "you → are."),
    F("The restaurant ___ closed on Mondays.", "is", "The restaurant {is} closed on Mondays.", "it → is."),
    F("They ___ Brazilian. (negativa)", ["aren't", "are not"], "They {aren't} Brazilian.", "they → aren't."),
    F("___ it far from here?", "is", "{Is} it far from here?", "Pergunta com it → Is."),
    F("My phone ___ in my bag.", "is", "My phone {is} in my bag.", "Uma coisa → is."),
    F("We ___ happy with the result.", "are", "We {are} happy with the result.", "we → are.")
  ],

  "a1m2-r1": [
    F("I ___ (live) with my family.", "live", "I {live} with my family.", "I → verbo puro."),
    F("He ___ (teach) Spanish.", "teaches", "He {teaches} Spanish.", "teach → teaches (ch + es)."),
    F("We ___ (eat) lunch at noon.", "eat", "We {eat} lunch at noon.", "we → verbo puro."),
    F("She ___ (do) yoga every morning.", "does", "She {does} yoga every morning.", "do → does com she."),
    F("My brother ___ (play) the guitar.", "plays", "My brother {plays} the guitar.", "he → + s."),
    F("They ___ (not/like) spicy food.", ["don't like", "do not like"], "They {don't like} spicy food.", "they → don't + verbo puro."),
    F("He ___ (not/drive) to work.", ["doesn't drive", "does not drive"], "He {doesn't drive} to work.", "he → doesn't + verbo puro."),
    F("___ you ___ (play) tennis?", "do play", "{Do} you {play} tennis?", "Pergunta com you → Do."),
    F("The shop ___ (close) at seven.", "closes", "The shop {closes} at seven.", "it → + s."),
    F("I ___ (take) the bus every day.", "take", "I {take} the bus every day.", "I → verbo puro."),
    F("She ___ (have) two children.", "has", "She {has} two children.", "have → has com she."),
    F("We ___ (not/watch) TV in the morning.", ["don't watch", "do not watch"], "We {don't watch} TV in the morning.", "we → don't."),
    F("___ he ___ (speak) Portuguese?", "does speak", "{Does} he {speak} Portuguese?", "Pergunta com he → Does + verbo puro."),
    F("My father ___ (cook) very well.", "cooks", "My father {cooks} very well.", "he → + s.")
  ],

  "a1m2-r2": [
    F("She ___ (fly) to Lisbon every month.", "flies", "She {flies} to Lisbon every month.", "fly → flies (y → ies)."),
    F("I ___ (finish) at six.", "finish", "I {finish} at six.", "I → verbo puro."),
    F("The bus ___ (leave) at 7:15.", "leaves", "The bus {leaves} at 7:15.", "it → + s."),
    F("They ___ (travel) a lot.", "travel", "They {travel} a lot.", "they → verbo puro."),
    F("___ she ___ (work) here?", "does work", "{Does} she {work} here?", "Pergunta com she → Does."),
    F("We ___ (not/need) a car.", ["don't need", "do not need"], "We {don't need} a car.", "we → don't."),
    F("He ___ (wash) the dishes after dinner.", "washes", "He {washes} the dishes after dinner.", "wash → washes (sh + es)."),
    F("Where ___ you ___ (live)?", "do live", "Where {do} you {live}?", "Pergunta com you → do."),
    F("My sister ___ (study) medicine.", "studies", "My sister {studies} medicine.", "study → studies."),
    F("I ___ (not/drink) milk.", ["don't drink", "do not drink"], "I {don't drink} milk.", "I → don't."),
    F("The train ___ (arrive) at nine.", "arrives", "The train {arrives} at nine.", "it → + s."),
    F("You ___ (know) the answer.", "know", "You {know} the answer.", "you → verbo puro."),
    F("He ___ (go) running on Saturdays.", "goes", "He {goes} running on Saturdays.", "go → goes."),
    F("What time ___ the shop ___ (open)?", "does open", "What time {does} the shop {open}?", "Pergunta com it → does + verbo puro.")
  ],

  "a1m3-r1": [
    F("I need ___ umbrella.", "an", "I need {an} umbrella.", "umbrella começa com som de vogal → an."),
    F("She has ___ dog.", "a", "She has {a} dog.", "dog começa com som de consoante → a."),
    F("We waited ___ hour for the bus.", "an", "We waited {an} hour for the bus.", "O h de hour é mudo → an."),
    F("___ book you lent me was great.", "the", "{The} book you lent me was great.", "Um livro específico → the."),
    F("There are five ___ (child) in the class.", "children", "There are five {children} in the class.", "child → children (irregular)."),
    F("I bought two ___ (watch).", "watches", "I bought two {watches}.", "watch → watches."),
    F("The ___ (city) in the north are colder.", "cities", "The {cities} in the north are colder.", "y → ies."),
    F("He is ___ artist.", "an", "He is {an} artist.", "artist começa com som de vogal → an."),
    F("Can I have ___ glass of water?", "a", "Can I have {a} glass of water?", "glass começa com som de consoante → a."),
    F("We saw three ___ (man) at the door.", "men", "We saw three {men} at the door.", "man → men."),
    F("___ sun is very strong today.", "the", "{The} sun is very strong today.", "Único no mundo → the."),
    F("She is ___ nurse.", "a", "She is {a} nurse.", "nurse começa com som de consoante → a."),
    F("I have ___ idea.", "an", "I have {an} idea.", "idea começa com som de vogal → an."),
    F("Put the papers in those ___ (shelf).", "shelves", "Put the papers in those {shelves}.", "shelf → shelves (f → ves).")
  ],

  "a1m3-r2": [
    F("___ shoes here are new. (estes)", "these", "{These} shoes here are new.", "Perto, plural → these."),
    F("___ car over there is my father's. (aquele)", "that", "{That} car over there is my father's.", "Longe, singular → that."),
    F("___ coffee is cold. (este)", "this", "{This} coffee is cold.", "Perto, singular → this."),
    F("___ mountains in the distance are beautiful. (aquelas)", "those", "{Those} mountains in the distance are beautiful.", "Longe, plural → those."),
    F("There were many ___ (person) at the party.", "people", "There were many {people} at the party.", "person → people."),
    F("He gave me ___ apple.", "an", "He gave me {an} apple.", "apple começa com som de vogal → an."),
    F("Where is ___ key I gave you?", "the", "Where is {the} key I gave you?", "Chave específica → the."),
    F("I want ___ coffee, please.", "a", "I want {a} coffee, please.", "coffee começa com som de consoante → a."),
    F("___ is my brother. (este)", "this", "{This} is my brother.", "Apresentando alguém perto → this."),
    F("Are ___ your bags? (aquelas)", "those", "Are {those} your bags?", "Longe, plural → those."),
    F("We have two ___ (knife) in the drawer.", "knives", "We have two {knives} in the drawer.", "knife → knives."),
    F("She is ___ honest person.", "an", "She is {an} honest person.", "O h de honest é mudo → an."),
    F("___ photos on my phone are from Rio. (estas)", "these", "{These} photos on my phone are from Rio.", "Perto, plural → these."),
    F("Can you close ___ window, please?", "the", "Can you close {the} window, please?", "Janela específica → the.")
  ],

  "a1m4-r1": [
    F("___ a pharmacy on this street.", ["there is", "there's"], "{There is} a pharmacy on this street.", "Uma farmácia → there is."),
    F("___ twelve students in the class.", "there are", "{There are} twelve students in the class.", "Plural → there are."),
    F("___ a lift in the building? (pergunta)", "is there", "{Is there} a lift in the building?", "Pergunta no singular → Is there."),
    F("___ any towels in the bathroom. (negativa)", ["there aren't", "there are not"], "{There aren't} any towels in the bathroom.", "Plural negativo → there aren't."),
    F("My wallet is ___ my pocket. (dentro)", "in", "My wallet is {in} my pocket.", "Dentro → in."),
    F("The cat is ___ the sofa. (em cima)", "on", "The cat is {on} the sofa.", "Em cima → on."),
    F("The box is ___ the bed. (embaixo)", "under", "The box is {under} the bed.", "Embaixo → under."),
    F("The hotel is ___ the station. (ao lado)", "next to", "The hotel is {next to} the station.", "Ao lado → next to."),
    F("___ a message for you.", ["there is", "there's"], "{There is} a message for you.", "Uma mensagem → there is."),
    F("___ three buses an hour.", "there are", "{There are} three buses an hour.", "Plural → there are."),
    F("The towels are ___ the cupboard. (dentro)", "in", "The towels are {in} the cupboard.", "Dentro → in."),
    F("___ a problem with the wifi. (negativa)", ["there isn't", "there is not"], "{There isn't} a problem with the wifi.", "Singular negativo → there isn't."),
    F("The plates are ___ the table. (em cima)", "on", "The plates are {on} the table.", "Em cima → on."),
    F("___ any seats left? (pergunta)", "are there", "{Are there} any seats left?", "Pergunta no plural → Are there.")
  ],

  "a1m4-r2": [
    F("___ a mistake in this report.", ["there's", "there is"], "{There's} a mistake in this report.", "Um erro → there's."),
    F("___ any tickets for tonight? (pergunta)", "are there", "{Are there} any tickets for tonight?", "Pergunta no plural → Are there."),
    F("There ___ a bakery on the corner.", "is", "There {is} a bakery on the corner.", "Uma padaria → is."),
    F("There ___ four people waiting.", "are", "There {are} four people waiting.", "Quatro pessoas → are."),
    F("The shop is ___ the bank and the café. (entre)", "between", "The shop is {between} the bank and the café.", "Entre → between."),
    F("The car is ___ the house. (na frente)", "in front of", "The car is {in front of} the house.", "Na frente → in front of."),
    F("___ a parking space here? (pergunta)", "is there", "{Is there} a parking space here?", "Pergunta no singular → Is there."),
    F("___ any milk in the fridge. (negativa)", ["there isn't", "there is not"], "{There isn't} any milk in the fridge.", "<i>Milk</i> não tem plural → there isn't."),
    F("___ two bedrooms in the flat.", "there are", "{There are} two bedrooms in the flat.", "Plural → there are."),
    F("The pharmacy is ___ the supermarket. (atrás)", "behind", "The pharmacy is {behind} the supermarket.", "Atrás → behind."),
    F("There ___ nobody at the reception.", "is", "There {is} nobody at the reception.", "<i>Nobody</i> é singular → is."),
    F("___ any buses after midnight. (negativa)", ["there aren't", "there are not"], "{There aren't} any buses after midnight.", "Plural negativo → there aren't."),
    F("The museum is ___ the river. (perto de)", "near", "The museum is {near} the river.", "Perto de → near."),
    F("___ a good restaurant nearby?", "is there", "{Is there} a good restaurant nearby?", "Pergunta no singular → Is there.")
  ],

  "a1m5-r1": [
    F("It's 7:00. → It's seven ___.", "o'clock", "It's seven {o'clock}.", "Hora exata → o'clock."),
    F("It's 6:30. → It's ___ past six.", "half", "It's {half} past six.", "30 minutos → half past."),
    F("It's 2:15. → It's ___ past two.", "quarter", "It's {quarter} past two.", "15 minutos → quarter past."),
    F("The train leaves ___ 8 a.m.", "at", "The train leaves {at} 8 a.m.", "Hora → at."),
    F("We travel ___ January.", "in", "We travel {in} January.", "Mês → in."),
    F("The shop is closed ___ Monday.", "on", "The shop is closed {on} Monday.", "Dia → on."),
    F("March 3rd → the ___ of March.", "third", "The {third} of March.", "3rd → third."),
    F("___ time does it start?", "what", "{What} time does it start?", "Que horas → What time."),
    F("It's 11:45. → It's quarter ___ twelve.", "to", "It's quarter {to} twelve.", "Faltam 15 → quarter to."),
    F("My class is ___ the afternoon.", "in", "My class is {in} the afternoon.", "Parte do dia → in the afternoon."),
    F("I wake up ___ seven every day.", "at", "I wake up {at} seven every day.", "Hora → at."),
    F("Her birthday is ___ October 9th.", "on", "Her birthday is {on} October 9th.", "Data completa → on."),
    F("It's 4:20. → It's twenty ___ four.", "past", "It's twenty {past} four.", "Depois da hora → past."),
    F("We're closed ___ the weekend.", ["at", "on"], "We're closed {at} the weekend.", "Fim de semana → at the weekend (ou on the weekend).")
  ],

  "a1m5-r2": [
    F("It's 9:50. → It's ten ___ ten.", "to", "It's ten {to} ten.", "Faltam 10 → to."),
    F("July 1st → the ___ of July.", "first", "The {first} of July.", "1st → first."),
    F("The 5th floor → the ___ floor.", "fifth", "The {fifth} floor.", "5th → fifth."),
    F("The 12th of May → the ___ of May.", "twelfth", "The {twelfth} of May.", "12th → twelfth."),
    F("100 → one ___", "hundred", "One {hundred}.", "100 → one hundred."),
    F("1,000,000 → one ___", "million", "One {million}.", "1.000.000 → one million."),
    F("___ much does it cost?", "how", "{How} much does it cost?", "Preço → How much."),
    F("___ many people are coming?", "how", "{How} many people are coming?", "Quantidade contável → How many."),
    F("What's the ___ today?", "date", "What's the {date} today?", "Data → date."),
    F("See you ___ Saturday!", "on", "See you {on} Saturday!", "Dia → on."),
    F("The 20th → the ___", "twentieth", "The {twentieth}.", "20th → twentieth."),
    F("The 8th → the ___", "eighth", "The {eighth}.", "8th → eighth."),
    F("It costs ___ reais. (15)", "fifteen", "It costs {fifteen} reais.", "15 → fifteen."),
    F("We arrive ___ the morning.", "in", "We arrive {in} the morning.", "Parte do dia → in the morning.")
  ],

  "a1m6-r1": [
    F("This is ___ house. (nossa)", "our", "This is {our} house.", "Antes da coisa → our."),
    F("Can you call ___ later? (ela)", "her", "Can you call {her} later?", "Quem recebe → her."),
    F("He is ___ brother. (meu)", "my", "He is {my} brother.", "Antes da coisa → my."),
    F("I saw ___ at the station. (você)", "you", "I saw {you} at the station.", "Quem recebe → you."),
    F("That bag is ___. (dela, sozinho)", "hers", "That bag is {hers}.", "Sozinho no fim → hers."),
    F("___ parents live in Recife. (dele)", "his", "{His} parents live in Recife.", "Dele, antes da coisa → his."),
    F("I ___ swim very well. (consigo)", "can", "I {can} swim very well.", "Consigo → can."),
    F("He ___ come to dinner. (não pode)", ["can't", "cannot"], "He {can't} come to dinner.", "Não pode → can't."),
    F("These keys are ___. (nossas, sozinho)", "ours", "These keys are {ours}.", "Sozinho → ours."),
    F("Give the book to ___. (ele)", "him", "Give the book to {him}.", "Quem recebe → him."),
    F("___ car is very old. (meu)", "my", "{My} car is very old.", "Antes da coisa → my."),
    F("___ you drive?", "can", "{Can} you drive?", "Habilidade → Can you…?"),
    F("She helps ___ a lot. (nós)", "us", "She helps {us} a lot.", "Quem recebe → us."),
    F("The house and ___ garden. (seu, da casa)", "its", "The house and {its} garden.", "De uma coisa (it) → its, sem apóstrofo.")
  ],

  "a1m6-r2": [
    F("Tell ___ the truth. (eu)", "me", "Tell {me} the truth.", "Quem recebe → me."),
    F("Is this jacket ___? (dele, sozinho)", "his", "Is this jacket {his}?", "Sozinho → his."),
    F("___ dog is very friendly. (deles)", "their", "{Their} dog is very friendly.", "Deles → their."),
    F("___ I use your phone?", "can", "{Can} I use your phone?", "Pedido → Can I…?"),
    F("They ___ find the address. They're lost.", ["can't", "cannot"], "They {can't} find the address.", "Não conseguem → can't."),
    F("We invited ___ to the party. (eles)", "them", "We invited {them} to the party.", "Quem recebe → them."),
    F("This seat is ___. (sua, sozinho)", "yours", "This seat is {yours}.", "Sozinho → yours."),
    F("___ sister works with me. (sua)", "your", "{Your} sister works with me.", "Antes da coisa → your."),
    F("She ___ play the piano. (consegue)", "can", "She {can} play the piano.", "Habilidade → can."),
    F("I don't know ___. (ela)", "her", "I don't know {her}.", "Quem recebe → her."),
    F("The bikes are ___. (deles, sozinho)", "theirs", "The bikes are {theirs}.", "Sozinho → theirs."),
    F("___ name is Paulo. (dele)", "his", "{His} name is Paulo.", "Dele → his."),
    F("We ___ hear you. Speak louder, please.", ["can't", "cannot"], "We {can't} hear you.", "Não conseguimos → can't."),
    F("He works with ___ every day. (nós)", "us", "He works with {us} every day.", "Depois de preposição → us.")
  ]

});

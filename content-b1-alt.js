// Frases alternativas das rodadas do B1.
// Mesmo ponto gramatical das questões originais, frases novas.
// O sorteio do "refazer" puxa daqui primeiro o que você nunca viu.
window.ALT = Object.assign(window.ALT || {}, {

  // B1.1 — if + passado → would
  "s1-r1": [
    F("If I ___ (speak) better English, I would apply for that job.", "spoke", "If I {spoke} better English, I would apply for that job.", "A parte do \"se\" vai no passado para marcar a imaginação: <i>speak → spoke</i>."),
    F("If we ___ (start) earlier, we would finish before lunch.", "started", "If we {started} earlier, we would finish before lunch.", "Imaginação, não passado: o <i>would</i> do outro lado pede o verbo no passado."),
    F("She ___ (travel) more if she had more free time.", ["would travel", "'d travel"], "She {would travel} more if she had more free time.", "\"Viajaria\" → would travel."),
    F("If the office ___ (be) closer, I would walk every day.", ["were", "was"], "If the office {were} closer, I would walk every day.", "Com <i>be</i>, o padrão é <i>were</i>. <i>Was</i> também aparece na fala."),
    F("I ___ (take) the job if the pay were better.", ["would take", "'d take"], "I {would take} the job if the pay were better.", "\"Aceitaria\" → would take."),
    F("If he ___ (know) the answer, he would tell us.", "knew", "If he {knew} the answer, he would tell us.", "Imaginação: com <i>would</i> do outro lado, o <i>if</i> vai para o passado. <i>Know → knew</i>."),
    F("We ___ (need) a bigger room if the team grew.", ["would need", "'d need"], "We {would need} a bigger room if the team grew.", "\"Precisaríamos\" → would need."),
    F("If they ___ (offer) me the position, I would accept it.", "offered", "If they {offered} me the position, I would accept it.", "Não é passado de verdade: o passado aqui marca que a situação é imaginada. A pista é o <i>would</i>."),
    F("If the app ___ (work) offline, more people would use it.", "worked", "If the app {worked} offline, more people would use it.", "Hipótese sobre agora: o <i>if</i> fica no passado porque o outro lado tem <i>would</i>."),
    F("What ___ you ___ (say) if the client asked for a refund?", "would say", "What {would} you {say} if the client asked for a refund?", "<i>What would you say…?</i> = \"o que você diria?\"."),
    F("If my phone ___ (have) more storage, I would film in 4K.", "had", "If my phone {had} more storage, I would film in 4K.", "O passado depois do <i>if</i> marca a hipótese, não o tempo."),
    F("I ___ (not/wait) in that line if I were you.", ["wouldn't wait", "would not wait"], "I {wouldn't wait} in that line if I were you.", "Negativa de would → wouldn't + verbo puro."),
    F("They ___ (understand) better if we used examples.", ["would understand", "'d understand"], "They {would understand} better if we used examples.", "\"Entenderiam\" → would understand."),
    F("If the weather ___ (be) nicer, we would eat outside.", ["were", "was"], "If the weather {were} nicer, we would eat outside.", "Imaginação com <i>be</i> → were.")
  ],

  // B1.1 — had, have ou passado simples?
  "s1-r2": [
    F("When I opened my bag, I saw that I ___ (forget) my notebook.", ["had forgotten", "'d forgotten"], "When I opened my bag, I saw that I {had forgotten} my notebook.", "\"Tinha esquecido\", antes de abrir a bolsa → had."),
    F("We ___ (sign) the contract last Tuesday.", "signed", "We {signed} the contract last Tuesday.", "<i>Last Tuesday</i> = momento definido → passado simples."),
    F("She said she ___ (already/talk) to the supplier.", ["had already talked", "'d already talked", "had already spoken", "'d already spoken"], "She said she {had already talked} to the supplier.", "Contando o que ela disse, o verbo recua um tempo."),
    F("I ___ (live) here since 2023.", ["have lived", "'ve lived"], "I {have lived} here since 2023.", "<i>Since</i> + continua até agora → have."),
    F("By the time he called, I ___ (leave) the building.", ["had left", "'d left"], "By the time he called, I {had left} the building.", "<i>By the time</i> + coisa feita antes → had."),
    F("The train was late because it ___ (break) down near the station.", ["had broken", "'d broken"], "The train was late because it {had broken} down near the station.", "A quebra veio antes do atraso → had broken."),
    F("I ___ (not/see) him since the conference.", ["haven't seen", "have not seen"], "I {haven't seen} him since the conference.", "<i>Since</i> → have + particípio."),
    F("We ___ (move) to this office in March.", "moved", "We {moved} to this office in March.", "<i>In March</i> = momento definido → passado simples."),
    F("He told me he ___ (never/try) sushi before.", ["had never tried", "'d never tried"], "He told me he {had never tried} sushi before.", "Contando o que ele disse: \"nunca tinha provado\"."),
    F("The room was empty. Everyone ___ (go) home.", ["had gone", "'d gone"], "The room was empty. Everyone {had gone} home.", "Todos tinham ido antes → had gone."),
    F("I ___ (send) three emails this morning and got no answer.", "sent", "I {sent} three emails this morning and got no answer.", "Manhã já terminou na frase → passado simples."),
    F("How long ___ you ___ (work) here?", "have worked", "How long {have} you {worked} here?", "\"Há quanto tempo você trabalha\" → How long have you worked."),
    F("When we arrived, the meeting ___ (already/start).", ["had already started", "'d already started"], "When we arrived, the meeting {had already started}.", "Começou antes de chegarmos → had."),
    F("She ___ (study) French for two years and then stopped.", "studied", "She {studied} French for two years and then stopped.", "Acabou no passado → passado simples.")
  ],

  // B1.1 — tudo misturado
  "s1-r4": [
    F("I ___ (buy) this laptop two years ago.", "bought", "I {bought} this laptop two years ago.", "<i>Two years ago</i> = momento definido → passado simples."),
    F("We ___ (just/finish) the first version.", ["have just finished", "'ve just finished"], "We {have just finished} the first version.", "\"Acabamos de terminar\" → have just."),
    F("When I called, she ___ (already/leave).", ["had already left", "'d already left"], "When I called, she {had already left}.", "Ela saiu antes da ligação → had."),
    F("If I ___ (have) a car, I would drive to work.", "had", "If I {had} a car, I would drive to work.", "Imaginação: <i>would</i> do outro lado, verbo no passado depois do <i>if</i>."),
    F("I ___ (like) to see that museum one day.", ["would like", "'d like"], "I {would like} to see that museum one day.", "\"Gostaria\" → would like."),
    F("He said he ___ (lose) the password.", ["had lost", "'d lost"], "He said he {had lost} the password.", "Contando o que ele disse, o verbo recua: had."),
    F("They ___ (work) together since January.", ["have worked", "'ve worked"], "They {have worked} together since January.", "<i>Since</i> + continua até agora → have."),
    F("If we ___ (be) closer to the center, rent would be higher.", ["were", "was"], "If we {were} closer to the center, rent would be higher.", "Imaginação com <i>be</i> → were."),
    F("The food was cold because nobody ___ (turn) on the oven.", ["had turned", "'d turned"], "The food was cold because nobody {had turned} on the oven.", "A causa veio antes → had turned."),
    F("I ___ (not/travel) abroad yet.", ["haven't traveled", "have not traveled", "haven't travelled", "have not travelled"], "I {haven't traveled} abroad yet.", "<i>Yet</i> → have + particípio na negativa."),
    F("She ___ (study) all night and failed anyway.", "studied", "She {studied} all night and failed anyway.", "Terminou no passado → passado simples."),
    F("If the hotel ___ (be) cheaper, we would stay longer.", ["were", "was"], "If the hotel {were} cheaper, we would stay longer.", "Imaginação → if + were."),
    F("We ___ (pay) the invoice last Friday.", "paid", "We {paid} the invoice last Friday.", "<i>Last Friday</i> = momento definido. <i>Pay → paid</i>."),
    F("I ___ (prefer) to start earlier if that worked for you.", ["would prefer", "'d prefer"], "I {would prefer} to start earlier if that worked for you.", "\"Preferiria\" → would prefer.")
  ],

  // B1.2 — already, yet ou just?
  "s2-r1": [
    F("I haven't booked the tickets ___.", "yet", "I haven't booked the tickets {yet}.", "Negativa, no fim da frase → yet."),
    F("Has the package arrived ___?", "yet", "Has the package arrived {yet}?", "Pergunta com \"já\" no fim → yet."),
    F("She has ___ arrived, about two minutes ago.", "just", "She has {just} arrived, about two minutes ago.", "\"Acabou de chegar\" → just."),
    F("We've ___ paid the bill, so don't worry.", ["already", "just"], "We've {already} paid the bill.", "\"Já pagamos\" → already."),
    F("I haven't met the new manager ___.", "yet", "I haven't met the new manager {yet}.", "\"Ainda não\" → yet no fim."),
    F("They've ___ announced the winner. Look at the screen.", ["just", "already"], "They've {just} announced the winner.", "Acabou de acontecer → just."),
    F("Have you ___ tried Thai food?", "ever", "Have you {ever} tried Thai food?", "Experiência, \"alguma vez\" → ever."),
    F("He has ___ read that book twice.", "already", "He has {already} read that book twice.", "\"Já leu\" → already."),
    F("I've ___ woken up. Give me five minutes.", "just", "I've {just} woken up.", "\"Acabei de acordar\" → just."),
    F("Hasn't she replied ___?", "yet", "Hasn't she replied {yet}?", "Pergunta negativa, \"ainda\" → yet."),
    F("We've ___ been to that restaurant, but it was years ago.", "already", "We've {already} been to that restaurant, but it was years ago.", "\"Já estivemos\" → already. <i>Just</i> não cabe: foi há anos."),
    F("The bus has ___ left. The next one is in ten minutes.", "just", "The bus has {just} left.", "\"Acabou de sair\" → just."),
    F("I haven't finished the course ___.", "yet", "I haven't finished the course {yet}.", "Negativa → yet no fim."),
    F("Have you ___ flown business class?", "ever", "Have you {ever} flown business class?", "Pergunta sobre experiência → ever.")
  ],

  // B1.2 — for, since, ever e never
  "s2-r2": [
    F("I've had this phone ___ three years.", "for", "I've had this phone {for} three years.", "Três anos é duração → for."),
    F("He's been in London ___ Monday.", "since", "He's been in London {since} Monday.", "Segunda é o ponto de partida → since."),
    F("We've known each other ___ high school.", "since", "We've known each other {since} high school.", "Ponto de partida → since."),
    F("She's been waiting ___ twenty minutes.", "for", "She's been waiting {for} twenty minutes.", "Duração → for."),
    F("I've ___ eaten anything so spicy!", "never", "I've {never} eaten anything so spicy!", "\"Nunca comi\" → never (o verbo fica na afirmativa)."),
    F("Have you ___ driven on the left?", "ever", "Have you {ever} driven on the left?", "Pergunta sobre experiência → ever."),
    F("They've lived abroad ___ ten years.", "for", "They've lived abroad {for} ten years.", "Duração → for."),
    F("Nothing has changed ___ the last meeting.", "since", "Nothing has changed {since} the last meeting.", "Ponto de partida → since."),
    F("I ___ (be) a member for five years.", ["have been", "'ve been"], "I {have been} a member for five years.", "Começou no passado e continua → have been."),
    F("How long ___ you ___ (study) English?", "have studied", "How long {have} you {studied} English?", "\"Há quanto tempo você estuda\" → How long have you studied."),
    F("We haven't spoken ___ April.", "since", "We haven't spoken {since} April.", "Abril é o ponto de partida → since."),
    F("He's worked here ___ a very long time.", "for", "He's worked here {for} a very long time.", "Duração → for."),
    F("I've ___ seen her so happy.", "never", "I've {never} seen her so happy.", "\"Nunca vi\" → never."),
    F("___ you ever been to Japan?", "Have", "{Have} you ever been to Japan?", "Pergunta de experiência → Have you ever…?")
  ],

  // B1.3 — was / were + -ing
  "b1m3-r1": [
    F("She ___ (cook) when the doorbell rang.", "was cooking", "She {was cooking} when the doorbell rang.", "Ação em andamento, interrompida → was cooking."),
    F("We ___ (wait) outside when it started to rain.", "were waiting", "We {were waiting} outside when it started to rain.", "we → were + -ing."),
    F("What ___ you ___ (watch) when I called?", "were watching", "What {were} you {watching} when I called?", "Pergunta no passado contínuo → were … watching."),
    F("While he ___ (talk) to the client, the line dropped.", "was talking", "While he {was talking} to the client, the line dropped.", "while + ação longa → was talking."),
    F("The lights went out while we ___ (record).", "were recording", "The lights went out while we {were recording}.", "while → were recording."),
    F("They ___ (not/listen) when the teacher explained it.", ["weren't listening", "were not listening"], "They {weren't listening} when the teacher explained it.", "Negativa → weren't + -ing."),
    F("I met her while I ___ (travel) in Portugal.", "was traveling", "I met her while I {was traveling} in Portugal.", "while → was traveling."),
    F("It ___ (snow) when we landed.", "was snowing", "It {was snowing} when we landed.", "Cena em andamento → was snowing."),
    F("He ___ (drive) home when he heard the news.", "was driving", "He {was driving} home when he heard the news.", "Ação longa interrompida → was driving."),
    F("At 8 p.m. yesterday I ___ (study) for the test.", "was studying", "At 8 p.m. yesterday I {was studying} for the test.", "Horário exato no passado → was studying."),
    F("The kids ___ (play) in the garden all afternoon.", "were playing", "The kids {were playing} in the garden all afternoon.", "Plural → were + -ing."),
    F("While I ___ (pack), my brother called a taxi.", "was packing", "While I {was packing}, my brother called a taxi.", "while + ação longa → was packing."),
    F("We ___ (not/sleep) when the alarm went off.", ["weren't sleeping", "were not sleeping"], "We {weren't sleeping} when the alarm went off.", "Negativa → weren't + -ing."),
    F("She dropped her coffee while she ___ (walk) upstairs.", "was walking", "She dropped her coffee while she {was walking} upstairs.", "while → was walking.")
  ],

  // B1.3 — used to
  "b1m3-r2": [
    F("I ___ (live) in a small town before moving here.", "used to live", "I {used to live} in a small town before moving here.", "Situação antiga → used to live."),
    F("He ___ (not/eat) vegetables, but now he loves them.", ["didn't use to eat", "did not use to eat"], "He {didn't use to eat} vegetables, but now he loves them.", "Negativa → didn't use to (sem d)."),
    F("We ___ (take) the bus, but now we walk.", "used to take", "We {used to take} the bus, but now we walk.", "Hábito que acabou → used to."),
    F("___ you ___ (have) long hair?", "did use to have", "{Did} you {use to have} long hair?", "Pergunta → Did you use to…?"),
    F("This street ___ (be) much quieter.", "used to be", "This street {used to be} much quieter.", "Situação antiga → used to be."),
    F("She ___ (dance) every Saturday when she was twenty.", ["used to dance", "danced"], "She {used to dance} every Saturday when she was twenty.", "Hábito antigo → used to dance."),
    F("People ___ (write) letters before email.", ["used to write", "wrote"], "People {used to write} letters before email.", "Hábito antigo → used to write."),
    F("When I was little, I ___ (hate) the dentist.", ["used to hate", "hated"], "When I was little, I {used to hate} the dentist.", "used to hate ou hated: os dois funcionam."),
    F("My parents ___ (not/let) me stay out late.", ["didn't use to let", "did not use to let"], "My parents {didn't use to let} me stay out late.", "Negativa → didn't use to."),
    F("There ___ (be) a bakery on this corner.", "used to be", "There {used to be} a bakery on this corner.", "Situação antiga → there used to be."),
    F("___ he ___ (work) nights?", "did use to work", "{Did} he {use to work} nights?", "Pergunta → Did he use to…?"),
    F("I ___ (drink) a lot of coffee, but I stopped.", ["used to drink", "drank"], "I {used to drink} a lot of coffee, but I stopped.", "Hábito que acabou → used to drink."),
    F("We ___ (spend) every summer at my grandmother's.", ["used to spend", "spent"], "We {used to spend} every summer at my grandmother's.", "Hábito antigo → used to spend."),
    F("The company ___ (have) only five employees.", "used to have", "The company {used to have} only five employees.", "Situação antiga → used to have.")
  ],

  // B1.4 — pode acontecer ou imaginação?
  "s3-r1": [
    F("If the shop is open, I ___ (buy) some bread.", ["will buy", "'ll buy"], "If the shop is open, I {will buy} some bread.", "Pode acontecer → will."),
    F("If you ___ (arrive) before six, call me.", "arrive", "If you {arrive} before six, call me.", "Depois do <i>if</i> real, presente simples. Nada de will."),
    F("If they confirm today, we ___ (book) the room tonight.", ["will book", "'ll book"], "If they confirm today, we {will book} the room tonight.", "Situação real → will."),
    F("If I ___ (speak) Japanese, I would move to Tokyo.", "spoke", "If I {spoke} Japanese, I would move to Tokyo.", "Imaginação → if + passado."),
    F("If you help me now, I ___ (finish) in an hour.", ["will finish", "'ll finish"], "If you help me now, I {will finish} in an hour.", "Pode acontecer → will."),
    F("If I ___ (be) taller, I would play basketball.", ["were", "was"], "If I {were} taller, I would play basketball.", "Imaginação com <i>be</i> → were."),
    F("We ___ (save) money if we cooked at home.", ["would save", "'d save"], "We {would save} money if we cooked at home.", "\"Economizaríamos\" → would."),
    F("If the flight ___ (be) delayed again, I'll complain.", "is", "If the flight {is} delayed again, I'll complain.", "Pode acontecer → if + presente."),
    F("If it ___ (snow) tomorrow, the school will close.", "snows", "If it {snows} tomorrow, the school will close.", "If real + presente simples: <i>it snows</i>."),
    F("If I had a garden, I ___ (grow) tomatoes.", ["would grow", "'d grow"], "If I had a garden, I {would grow} tomatoes.", "Imaginação → would grow."),
    F("If you don't hurry, you ___ (miss) the train.", ["will miss", "'ll miss"], "If you don't hurry, you {will miss} the train.", "Situação real → will."),
    F("If she ___ (earn) more, she would travel every year.", "earned", "If she {earned} more, she would travel every year.", "Imaginação → if + passado."),
    F("I ___ (call) you if I hear anything.", ["will call", "'ll call"], "I {will call} you if I hear anything.", "Pode acontecer → will."),
    F("If we ___ (live) by the sea, we would swim every morning.", "lived", "If we {lived} by the sea, we would swim every morning.", "Imaginação → if + passado.")
  ],

  // B1.4 — would have: o passado que não aconteceu
  "s3-r2": [
    F("If I had charged my phone, it ___ (not/die) in the middle of the call.", ["wouldn't have died", "would not have died"], "If I had charged my phone, it {wouldn't have died} in the middle of the call.", "\"Não teria morrido\" → wouldn't have died."),
    F("If we ___ (book) earlier, we would have paid less.", ["had booked", "'d booked"], "If we {had booked} earlier, we would have paid less.", "\"Se tivéssemos reservado\" → had booked."),
    F("If they had asked me, I ___ (help) them.", ["would have helped", "'d have helped"], "If they had asked me, I {would have helped} them.", "\"Eu teria ajudado\" → would have helped."),
    F("If he ___ (take) the earlier train, he wouldn't have been late.", ["had taken", "'d taken"], "If he {had taken} the earlier train, he wouldn't have been late.", "\"Se tivesse pegado\" → had taken."),
    F("I ___ (go) to the party if I had known about it.", ["would have gone", "'d have gone"], "I {would have gone} to the party if I had known about it.", "\"Eu teria ido\" → would have gone."),
    F("If the file ___ (not/be) corrupted, we would have finished on Friday.", ["hadn't been", "had not been"], "If the file {hadn't been} corrupted, we would have finished on Friday.", "\"Se não tivesse sido\" → hadn't been."),
    F("If she had studied medicine, she ___ (become) a doctor.", ["would have become", "'d have become"], "If she had studied medicine, she {would have become} a doctor.", "\"Teria se tornado\" → would have become."),
    F("If you ___ (tell) me about the traffic, I would have left earlier.", ["had told", "'d told"], "If you {had told} me about the traffic, I would have left earlier.", "\"Se você tivesse me contado\" → had told."),
    F("We ___ (not/get) lost if we had used the map.", ["wouldn't have gotten", "would not have gotten", "wouldn't have got", "would not have got"], "We {wouldn't have gotten} lost if we had used the map.", "\"Não teríamos nos perdido\" → wouldn't have gotten."),
    F("If I ___ (see) the message, I would have replied.", ["had seen", "'d seen"], "If I {had seen} the message, I would have replied.", "\"Se eu tivesse visto\" → had seen."),
    F("If the hotel had been full, we ___ (sleep) at the airport.", ["would have slept", "'d have slept"], "If the hotel had been full, we {would have slept} at the airport.", "\"Teríamos dormido\" → would have slept."),
    F("If he ___ (not/forget) his passport, he would have boarded.", ["hadn't forgotten", "had not forgotten"], "If he {hadn't forgotten} his passport, he would have boarded.", "\"Se não tivesse esquecido\" → hadn't forgotten."),
    F("They ___ (win) if the weather had been better.", ["would have won", "'d have won"], "They {would have won} if the weather had been better.", "\"Teriam vencido\" → would have won."),
    F("If we ___ (leave) ten minutes earlier, we would have caught the bus.", ["had left", "'d left"], "If we {had left} ten minutes earlier, we would have caught the bus.", "\"Se tivéssemos saído\" → had left.")
  ],

  // B1.5 — -ing ou to?
  "s6-r1": [
    F("I hate ___ (wait) in long lines.", ["waiting", "to wait"], "I hate {waiting} in long lines.", "hate + -ing (ou to wait, os dois existem)."),
    F("She promised ___ (call) me back.", "to call", "She promised {to call} me back.", "promise + to."),
    F("We should consider ___ (change) the supplier.", "changing", "We should consider {changing} the supplier.", "consider + -ing."),
    F("They refused ___ (pay) the extra fee.", "to pay", "They refused {to pay} the extra fee.", "refuse + to."),
    F("Do you fancy ___ (go) out tonight?", "going", "Do you fancy {going} out tonight?", "fancy + -ing."),
    F("He offered ___ (drive) us to the airport.", "to drive", "He offered {to drive} us to the airport.", "offer + to."),
    F("I don't mind ___ (work) on Saturdays.", "working", "I don't mind {working} on Saturdays.", "mind + -ing."),
    F("We agreed ___ (meet) at nine.", "to meet", "We agreed {to meet} at nine.", "agree + to."),
    F("She suggested ___ (take) a different route.", "taking", "She suggested {taking} a different route.", "suggest + -ing."),
    F("I forgot ___ (lock) the door.", "to lock", "I forgot {to lock} the door.", "forget + to = esquecer de fazer."),
    F("They kept ___ (talk) during the whole film.", "talking", "They kept {talking} during the whole film.", "keep + -ing = continuar fazendo."),
    F("He expects ___ (finish) by Friday.", "to finish", "He expects {to finish} by Friday.", "expect + to."),
    F("Imagine ___ (live) in another country.", "living", "Imagine {living} in another country.", "imagine + -ing."),
    F("I can't afford ___ (buy) a new one.", "to buy", "I can't afford {to buy} a new one.", "afford + to.")
  ],

  // B1.5 — preposições e casos especiais
  "s6-r2": [
    F("She's interested in ___ (learn) Spanish.", "learning", "She's interested in {learning} Spanish.", "Depois de preposição (in) → -ing."),
    F("Sorry for ___ (be) late.", "being", "Sorry for {being} late.", "for + -ing."),
    F("After ___ (check) in, we went straight to the room.", "checking", "After {checking} in, we went straight to the room.", "after + -ing."),
    F("He's worried about ___ (lose) his job.", "losing", "He's worried about {losing} his job.", "about + -ing."),
    F("We decided ___ (stay) one more night.", "to stay", "We decided {to stay} one more night.", "decide + to."),
    F("I gave up ___ (smoke) last year.", "smoking", "I gave up {smoking} last year.", "give up + -ing."),
    F("They're thinking of ___ (move) to Lisbon.", "moving", "They're thinking of {moving} to Lisbon.", "of + -ing."),
    F("She managed ___ (open) the window.", "to open", "She managed {to open} the window.", "manage + to."),
    F("Instead of ___ (complain), send an email.", "complaining", "Instead of {complaining}, send an email.", "instead of + -ing."),
    F("I'm tired of ___ (explain) the same thing.", "explaining", "I'm tired of {explaining} the same thing.", "of + -ing."),
    F("He stopped ___ (answer) my messages.", "answering", "He stopped {answering} my messages.", "stop + -ing = parar de fazer."),
    F("We're looking forward to ___ (see) you.", "seeing", "We're looking forward to {seeing} you.", "<i>look forward to</i> é preposição → -ing."),
    F("She asked me ___ (wait) outside.", "to wait", "She asked me {to wait} outside.", "ask someone + to."),
    F("Thank you for ___ (come).", "coming", "Thank you for {coming}.", "for + -ing.")
  ],

  // B1.6 — qual palavra liga as frases?
  "b1m6-r1": [
    F("The woman ___ lives next door is a nurse.", ["who", "that"], "The woman {who} lives next door is a nurse.", "Pessoa → who (ou that)."),
    F("This is the book ___ changed my mind.", ["which", "that"], "This is the book {which} changed my mind.", "Coisa → which (ou that)."),
    F("That's the café ___ we had breakfast.", "where", "That's the café {where} we had breakfast.", "Lugar → where."),
    F("He's the neighbor ___ dog barks all night.", "whose", "He's the neighbor {whose} dog barks all night.", "Posse (o cachorro dele) → whose."),
    F("The driver ___ took us to the hotel was very kind.", ["who", "that"], "The driver {who} took us to the hotel was very kind.", "Pessoa → who / that."),
    F("I can't find the key ___ opens this door.", ["which", "that"], "I can't find the key {which} opens this door.", "Coisa → which / that."),
    F("This is the town ___ my mother was born.", "where", "This is the town {where} my mother was born.", "Lugar → where."),
    F("She's the author ___ books sell millions.", "whose", "She's the author {whose} books sell millions.", "Os livros dela → whose."),
    F("The man ___ fixed my laptop charges very little.", ["who", "that"], "The man {who} fixed my laptop charges very little.", "Pessoa → who / that."),
    F("The restaurant ___ we ate last night was packed.", "where", "The restaurant {where} we ate last night was packed.", "Lugar → where."),
    F("The film ___ won the prize is on Netflix.", ["which", "that"], "The film {which} won the prize is on Netflix.", "Coisa → which / that."),
    F("I met a guy ___ brother works with you.", "whose", "I met a guy {whose} brother works with you.", "O irmão dele → whose."),
    F("The hotel ___ we stayed had a rooftop pool.", "where", "The hotel {where} we stayed had a rooftop pool.", "Lugar → where."),
    F("The app ___ I downloaded yesterday keeps crashing.", ["which", "that"], "The app {which} I downloaded yesterday keeps crashing.", "Coisa → which / that.")
  ],

  // B1.6 — mais prática
  "b1m6-r2": [
    F("Students ___ study every day learn faster.", ["who", "that"], "Students {who} study every day learn faster.", "Pessoas → who."),
    F("The street ___ the market is held is closed today.", "where", "The street {where} the market is held is closed today.", "Lugar → where."),
    F("The dish ___ we ordered took forty minutes.", ["which", "that"], "The dish {which} we ordered took forty minutes.", "Coisa → which / that."),
    F("Do you know the woman ___ bag was left here?", "whose", "Do you know the woman {whose} bag was left here?", "A bolsa dela → whose."),
    F("The message ___ I sent never arrived.", ["which", "that"], "The message {which} I sent never arrived.", "Coisa → which / that."),
    F("The doctor ___ saw me was very patient.", ["who", "that"], "The doctor {who} saw me was very patient.", "Pessoa → who."),
    F("That's the airport ___ we had the layover.", "where", "That's the airport {where} we had the layover.", "Lugar → where."),
    F("A dentist is a person ___ takes care of teeth.", ["who", "that"], "A dentist is a person {who} takes care of teeth.", "Pessoa → who."),
    F("The company ___ we work for is growing fast.", ["which", "that"], "The company {which} we work for is growing fast.", "Coisa / empresa → which / that."),
    F("I have a friend ___ parents live in Canada.", "whose", "I have a friend {whose} parents live in Canada.", "Os pais dele → whose."),
    F("The guy ___ phone rang during the film apologized.", "whose", "The guy {whose} phone rang during the film apologized.", "O celular dele → whose."),
    F("The bag ___ you bought looks expensive.", ["which", "that"], "The bag {which} you bought looks expensive.", "Coisa → which / that."),
    F("The building ___ my office is has no elevator.", "where", "The building {where} my office is has no elevator.", "Lugar → where."),
    F("People ___ travel a lot speak more languages.", ["who", "that"], "People {who} travel a lot speak more languages.", "Pessoas → who.")
  ],

  // B1.7 — qual modal?
  "s9-r1": [
    F("You ___ drink more water. (deveria)", "should", "You {should} drink more water.", "Conselho = should."),
    F("___ you hold this for a second? (poderia)", ["could", "can"], "{Could} you hold this for a second?", "Pedido educado = could."),
    F("Take a jacket. It ___ get cold tonight. (talvez)", ["might", "may", "could"], "Take a jacket. It {might} get cold tonight.", "Possibilidade = might."),
    F("Passengers ___ show their passports. (têm que)", ["must", "have to"], "Passengers {must} show their passports.", "Obrigação forte = must / have to."),
    F("She studied all week. She ___ be tired. (deve estar)", "must", "She studied all week. She {must} be tired.", "Certeza lógica = must."),
    F("You ___ bring a towel. The hotel provides one. (não precisa)", ["don't have to", "do not have to"], "You {don't have to} bring a towel.", "Não precisa = don't have to."),
    F("You ___ smoke in here. (não pode)", ["mustn't", "must not", "can't"], "You {mustn't} smoke in here.", "Proibido = mustn't. É diferente de don't have to."),
    F("We ___ cancel the trip, but nothing is decided. (talvez)", ["might", "may"], "We {might} cancel the trip.", "Talvez = might."),
    F("You ___ try the fish. It's excellent. (deveria)", "should", "You {should} try the fish.", "Recomendação = should."),
    F("He ___ be at home. His car is outside. (deve estar)", "must", "He {must} be at home.", "Certeza lógica = must."),
    F("___ I ask you something? (posso)", ["can", "could", "may"], "{Can} I ask you something?", "Pedir permissão = can / could / may."),
    F("Guests ___ leave the room before noon. (têm que)", ["must", "have to"], "Guests {must} leave the room before noon.", "Regra = must / have to."),
    F("It ___ rain later, so take the umbrella. (talvez)", ["might", "may", "could"], "It {might} rain later.", "Possibilidade = might."),
    F("You ___ pay now. You can pay when you leave. (não precisa)", ["don't have to", "do not have to"], "You {don't have to} pay now.", "Não precisa = don't have to.")
  ],

  // B1.7 — can, could e o verbo puro
  "s9-r2": [
    F("I ___ work this weekend. The deadline is Monday. (tenho que)", ["have to", "must"], "I {have to} work this weekend.", "Tenho que = have to."),
    F("You should ___ (drink) more water.", "drink", "You should {drink} more water.", "Depois do modal, verbo puro. Nada de <i>to drink</i>."),
    F("He ___ play the piano very well. (consegue)", "can", "He {can} play the piano very well.", "Habilidade = can."),
    F("When I lived there, I ___ walk to work. (conseguia)", "could", "When I lived there, I {could} walk to work.", "Habilidade no passado = could."),
    F("___ I borrow your pen? (posso)", ["can", "could", "may"], "{Can} I borrow your pen?", "Pedir permissão = can / could / may."),
    F("You ___ park here. It's a bus stop. (não pode)", ["mustn't", "can't", "must not", "cannot"], "You {can't} park here.", "Proibido = can't / mustn't."),
    F("I think we ___ ask for a refund. (deveríamos)", "should", "I think we {should} ask for a refund.", "Sugestão = should."),
    F("He isn't picking up. He ___ be driving. (pode ser que)", ["might", "may", "could"], "He isn't picking up. He {might} be driving.", "Possibilidade = might."),
    F("We must ___ (leave) before seven.", "leave", "We must {leave} before seven.", "Modal + verbo puro: <i>must leave</i>."),
    F("She ___ speak four languages. (consegue)", "can", "She {can} speak four languages.", "Habilidade = can."),
    F("I couldn't ___ (find) the station.", "find", "I couldn't {find} the station.", "Depois de couldn't, verbo puro."),
    F("You ___ worry. Everything is under control. (não precisa)", ["don't have to", "do not have to", "needn't"], "You {don't have to} worry.", "Não precisa = don't have to."),
    F("They ___ arrive late. Traffic is terrible today. (talvez)", ["might", "may", "could"], "They {might} arrive late.", "Possibilidade = might."),
    F("Could you ___ (repeat) that, please?", "repeat", "Could you {repeat} that, please?", "Modal + verbo puro.")
  ],

  // B1.8 — monte a passiva
  "s10-r1": [
    F("The room ___ (clean) every morning.", "is cleaned", "The room {is cleaned} every morning.", "Rotina → is + particípio."),
    F("The bridge ___ (build) in 1890.", "was built", "The bridge {was built} in 1890.", "Passado → was + particípio."),
    F("The results ___ (publish) next Monday.", "will be published", "The results {will be published} next Monday.", "Futuro → will be + particípio."),
    F("These shoes ___ (make) in Italy.", "are made", "These shoes {are made} in Italy.", "Rotina, plural → are + particípio."),
    F("My bike ___ (steal) last night.", "was stolen", "My bike {was stolen} last night.", "Passado → was stolen."),
    F("The invitations ___ (send) yesterday.", "were sent", "The invitations {were sent} yesterday.", "Passado, plural → were sent."),
    F("The package ___ (deliver). It's at reception now.", "has been delivered", "The package {has been delivered}.", "Já foi entregue, efeito agora → has been delivered."),
    F("Breakfast ___ (serve) from seven to ten.", "is served", "Breakfast {is served} from seven to ten.", "Rotina → is served."),
    F("The windows ___ (break) during the storm.", "were broken", "The windows {were broken} during the storm.", "Passado, plural → were broken."),
    F("This song ___ (write) by a teenager.", "was written", "This song {was written} by a teenager.", "Passado → was written."),
    F("The street ___ (close) for the parade tomorrow.", "will be closed", "The street {will be closed} for the parade tomorrow.", "Futuro → will be closed."),
    F("Our luggage ___ (lose) at the airport.", "was lost", "Our luggage {was lost} at the airport.", "Passado → was lost."),
    F("The documents ___ (check) at the border.", "are checked", "The documents {are checked} at the border.", "Rotina, plural → are checked."),
    F("The museum ___ (open) in 2010.", "was opened", "The museum {was opened} in 2010.", "Passado → was opened.")
  ],

  // B1.8 — mais passiva
  "s10-r2": [
    F("Coffee ___ (grow) in Brazil.", "is grown", "Coffee {is grown} in Brazil.", "Fato geral → is grown."),
    F("The flight ___ (delay) by two hours.", "was delayed", "The flight {was delayed} by two hours.", "Passado → was delayed."),
    F("The rooms ___ (clean) twice a week.", "are cleaned", "The rooms {are cleaned} twice a week.", "Rotina, plural → are cleaned."),
    F("The report ___ (not/finish) yet.", ["hasn't been finished", "has not been finished"], "The report {hasn't been finished} yet.", "yet → hasn't been + particípio."),
    F("The form must ___ (sign) by both parties.", "be signed", "The form must {be signed} by both parties.", "Modal + be + particípio."),
    F("Several errors ___ (find) in the translation.", "were found", "Several errors {were found} in the translation.", "Passado, plural → were found."),
    F("The award ___ (give) to a young scientist.", "was given", "The award {was given} to a young scientist.", "Passado → was given."),
    F("This ticket can ___ (use) on any bus.", "be used", "This ticket can {be used} on any bus.", "can + be + particípio."),
    F("Spanish ___ (speak) in twenty countries.", "is spoken", "Spanish {is spoken} in twenty countries.", "Fato geral → is spoken."),
    F("The keys ___ (leave) at the front desk.", "were left", "The keys {were left} at the front desk.", "Passado, plural → were left."),
    F("Nothing ___ (decide) so far.", "has been decided", "Nothing {has been decided} so far.", "<i>So far</i> → has been decided."),
    F("The old building ___ (destroy) by the fire.", "was destroyed", "The old building {was destroyed} by the fire.", "Passado → was destroyed."),
    F("Our bags should ___ (check) before the flight.", "be checked", "Our bags should {be checked} before the flight.", "Modal + be + particípio."),
    F("The menu ___ (translate) into English.", ["was translated", "is translated"], "The menu {was translated} into English.", "Passado → was translated.")
  ],

  // B1.9 — escreva a palavra certa em inglês
  "s7-r1": [
    F("___ I'm studying English every morning. (Atualmente)", ["Currently", "Nowadays", "Now"], "{Currently} I'm studying English every morning.", "Atualmente = currently. <i>Actually</i> é \"na verdade\"."),
    F("I didn't ___ the restaurant was closed. (perceber)", ["realize", "realise", "notice"], "I didn't {realize} the restaurant was closed.", "Perceber = realize."),
    F("___, the trip was cheaper than I expected. (Na verdade)", "actually", "{Actually}, the trip was cheaper than I expected.", "Na verdade = actually."),
    F("We ___ to move next year. (pretendemos)", ["intend", "plan"], "We {intend} to move next year.", "Pretender = intend / plan. <i>Pretend</i> é fingir."),
    F("All my ___ came to the wedding. (parentes)", "relatives", "All my {relatives} came to the wedding.", "Parentes = relatives. <i>Parents</i> são os pais."),
    F("I ___ go to the gym, maybe twice a month. (eventualmente)", ["occasionally", "sometimes"], "I {occasionally} go to the gym.", "Eventualmente = occasionally. <i>Eventually</i> é \"no fim\"."),
    F("She ___ a documentary every night. (assiste)", "watches", "She {watches} a documentary every night.", "Assistir = watch. <i>Assist</i> é ajudar."),
    F("This bag is made of ___. (tecido)", ["fabric", "cloth"], "This bag is made of {fabric}.", "Tecido = fabric. <i>Fabric</i> não é fábrica (factory)."),
    F("I need to ___ my ticket. (confirmar)", "confirm", "I need to {confirm} my ticket.", "Confirmar = confirm."),
    F("The hotel was ___ to the beach. (perto)", ["close", "near"], "The hotel was {close} to the beach.", "Perto = close / near."),
    F("He gave me very useful ___. (conselho)", "advice", "He gave me very useful {advice}.", "Conselho = advice, e não tem plural: <i>an advice</i> não existe."),
    F("The waiter was very ___. (educado)", "polite", "The waiter was very {polite}.", "Educado (com boas maneiras) = polite. <i>Educated</i> é instruído."),
    F("I'm going to ___ for the exam tonight. (estudar)", "study", "I'm going to {study} for the exam tonight.", "Estudar = study."),
    F("Can you ___ this word for me? (traduzir)", "translate", "Can you {translate} this word for me?", "Traduzir = translate.")
  ],

  // B1.9 — mais armadilhas
  "s7-r2": [
    F("I can't ___ the heat in here. (aguentar)", ["stand", "take"], "I can't {stand} the heat in here.", "Aguentar = stand. <i>Support</i> é apoiar."),
    F("He's studying law at ___. (faculdade)", ["college", "university"], "He's studying law at {college}.", "Faculdade = college. Colégio = school."),
    F("I borrowed this from the ___. (biblioteca)", "library", "I borrowed this from the {library}.", "Biblioteca = library. <i>Bookstore</i> é livraria."),
    F("My family always ___ me. (apoia)", ["supports", "helps"], "My family always {supports} me.", "Apoiar = support."),
    F("We finally ___ the top of the hill. (alcançamos)", ["reached", "got to"], "We finally {reached} the top of the hill.", "Alcançar = reach. Não use <i>realize</i>."),
    F("Don't ___ to be asleep. (fingir)", "pretend", "Don't {pretend} to be asleep.", "Fingir = pretend."),
    F("It took hours, but ___ the bus came. (no fim)", ["eventually", "finally"], "It took hours, but {eventually} the bus came.", "No fim, depois de um tempo = eventually."),
    F("Will you ___ the ceremony? (participar de)", ["attend", "join"], "Will you {attend} the ceremony?", "Participar de = attend / join."),
    F("I have to ___ the phone. (atender)", "answer", "I have to {answer} the phone.", "Atender o telefone = answer."),
    F("She ___ her keys at home. (deixou)", "left", "She {left} her keys at home.", "Deixar algo em algum lugar = leave / left."),
    F("The soup has too much ___. (tempero)", ["seasoning", "spice"], "The soup has too much {seasoning}.", "Tempero = seasoning. <i>Condiment</i> é molho de mesa."),
    F("We had a long ___ about prices. (discussão, conversa)", ["discussion", "conversation"], "We had a long {discussion} about prices.", "Discussão (conversa) = discussion. Briga = argument."),
    F("I'd like to ___ a table for two. (reservar)", ["book", "reserve"], "I'd like to {book} a table for two.", "Reservar = book / reserve."),
    F("The ___ of the film was terrible. (fim)", ["ending", "end"], "The {ending} of the film was terrible.", "Fim de uma história = ending.")
  ]

});

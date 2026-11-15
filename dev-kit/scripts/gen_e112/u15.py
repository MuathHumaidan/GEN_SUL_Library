D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u15":{"title":"Working together — العمل معاً","cards":[
 L("Can you / Could you + verb","الطلب: Could you send this letter, please?","ص 70"),
 L("Would you mind + verb-ing","الطلب الأكثر أدباً.","ص 70"),
 L("Not at all.","قبول طلب Would you mind (= لا مانع).","ص 112",l="u15-l1"),
 L("OK, but … / Sorry, I can't.","قبول مؤجل / رفض مع سبب.","ص 70"),
 L("We could / Let's / Why don't we + verb","اقتراح.","ص 72"),
 L("How about / What about + verb-ing","اقتراح.","ص 72"),
 L("Yes, but … / I agree, but …","اعتراض مهذب.","ص 72"),
 D("advertise on TV / organize a competition","طرق التسويق.","ص 72"),
 D("baked / steamed / boiled / fried","مراجعة الطبخ.","ص 74")]}}
LESS={
"u15-l1":{"match":[{"title":"وصّل الطلب بالرد","pairs":[["Would you mind waiting?","Not at all."],["Could you help me?","Sorry, I can't. I'm busy."],["Can you send this fax?","Sure. No problem."],["Could you check this?","OK, but I've got a meeting now."]]}]},
"u15-l2":{"match":[{"title":"وصّل الصيغة بالفعل","pairs":[["How about","advertising"],["Let's","build"],["Why don't we","organize"],["What about","sending"],["We could","have"]]}]},
"u15-l3":{"match":[{"title":"وصّل الكلمة بمعناها","pairs":[["baked","in an oven"],["fried","in hot oil"],["boiled","in hot water"],["steamed","over hot water"]]}]}}
ACTS={
"u15-l1":{"open":["Something you ask your classmates to do","A polite way to say no","Make a request to your teacher"],"exit":[
 {"q":"Would you mind ___ the door?","o":["closing","close","to close","closed"],"c":0,"e":"ص 70."},
 {"q":"Would you mind helping me? — ___","o":["Not at all.","Yes, I mind.","No, I can't mind.","I mind it."],"c":0,"e":"ص 112."},
 {"q":"The most polite:","o":["Would you mind …ing?","Can you …?","Do it.","I want you to …"],"c":0,"e":"ص 70."}]},
"u15-l2":{"open":["An idea to improve your college","How do you disagree politely?","Plan a class trip"],"exit":[
 {"q":"How about ___ a website?","o":["building","build","to build","built"],"c":0,"e":"ص 72."},
 {"q":"Let's ___ a competition.","o":["organize","organizing","to organize","organized"],"c":0,"e":"ص 112."},
 {"q":"Polite disagreement:","o":["Yes, but it's expensive.","No way.","Bad idea.","I agree."],"c":0,"e":"ص 72."}]},
"u15-l3":{"open":["Describe how a dish is cooked","Invite a classmate to something","A request you made this week"],"exit":[
 {"q":"Chips are ___ in hot oil.","o":["fried","baked","boiled","steamed"],"c":0,"e":"ص 74."},
 {"q":"A lot of tea ___ in Britain.","o":["is drunk","drinks","drunk","is drink"],"c":0,"e":"ص 74."},
 {"q":"___ on 'back' to go back.","o":["Click","Build","Display","Advertise"],"c":0,"e":"ص 75."}]}}
PAGES={"u15-l1":(70,71),"u15-l2":(72,73),"u15-l3":(74,75)}
def build(add,T,Bd):
 add('u15-l1','مثال 1: طلب','طلب','Give me the sales figures.','اجعلها مهذبة.',
  [Bd("الخطوة 1: Would you mind give me the sales figures?","بعد mind: ing.","Would you mind giving me the sales figures, please?",["mind + ing","mind + الفعل","mind + to","mind + ed"])],"Would you mind giving me the sales figures, please?")
 add('u15-l1','مثال 2: قبول','رد','Would you mind closing the window?','اقبل.',
  [Bd("الخطوة 1: Yes, I mind.","القبول هنا: Not at all.","Not at all.",["Not at all = أقبل","Yes, I mind = أقبل","No = أرفض دائماً","لا رد"])],"Not at all. I'll do it now.")
 add('u15-l1','مثال 3: رفض','رد','عندك موعد.','ارفض.',
  [Bd("الخطوة 1: No.","الرفض باعتذار وسبب.","I'm sorry, but I've got an appointment.",["اعتذار + سبب","رفض مباشر","سكوت","Not at all"])],"I'm sorry, but I've got an appointment this evening.")
 add('u15-l2','مثال 1: How about','اقتراح','هدية مجانية.','اقترح.',
  [Bd("الخطوة 1: How about give a free gift?","How about + ing.","How about giving a free gift?",["How about + ing","How about + الفعل","How about + to","How about + ed"])],"How about giving a free gift with the product?")
 add('u15-l2','مثال 2: Let\'s','اقتراح','مسابقة.','اقترح.',
  [Bd("الخطوة 1: Let's to organize a competition.","Let's + الفعل.","Let's organize a competition.",["Let's + الفعل","Let's + to","Let's + ing","Lets + s"])],"Let's organize a competition.")
 add('u15-l2','مثال 3: اعتراض','رد','الإعلان في التلفزيون غالٍ.','اعترض بأدب.',
  [Bd("الخطوة 1: No, that's a bad idea.","اعتراض مهذب: Yes, but …","Yes, but TV is very expensive.",["Yes, but + سبب","رفض مباشر","I agree فقط","سكوت"])],"Yes, but TV is very expensive.")
 add('u15-l3','مثال 1: المجهول','passive','People eat rice in Asia.','حوّل.',
  [Bd("الخطوة 1: Rice eats in Asia.","be + التصريف الثالث.","Rice is eaten in Asia.",["is eaten","eats","is eat","eaten"])],"A lot of rice is eaten in Asia.")
 add('u15-l3','مثال 2: الطبخ','كلمات','Chips … in hot oil.','أكمل.',
  [Bd("الخطوة 1: Chips are baked in hot oil.","في الزيت: fried.","Chips are fried in hot oil.",["fried","baked","boiled","steamed"])],"Chips are fried in hot oil.")
 add('u15-l3','مثال 3: الرد','رد','Would you mind sending this fax?','ردّ بالقبول.',
  [Bd("الخطوة 1: Yes, I'd love to. What's on?","هذا رد دعوة؛ هنا: Not at all.","Not at all. What's the number?",["Not at all","Yes, I'd love to","That's a good idea","Sorry, it's closed"])],"Not at all. What's the number?")

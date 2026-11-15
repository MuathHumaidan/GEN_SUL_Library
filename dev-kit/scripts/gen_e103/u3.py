D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u3":{"title":"Comparison — المقارنة","cards":[
 L("How long / wide / high is it?","السؤال عن المقاسات.","ص 20"),
 L("The vehicle must not be wider than 2 metres.","الحد: must not be + المقارنة + than.","ص 20"),
 L("wider · noisier · bigger · more expensive · better","صيغة المقارنة.","ص 21"),
 L("too high for · not high enough for","وصف المشكلة.","ص 21"),
 L("Could you …? · Would you mind …ing? · Shall I …?","العبارات المهذبة في الهاتف.","ص 22"),
 L("much lighter than · only 94 g","much للفرق الكبير.","ص 23"),
 D("Which one? The black one.","one بدل تكرار الاسم.","ص 23"),
 L("the fastest · the most expensive · the best","صيغة التفضيل مع the.","ص 24"),
 L("as powerful as","التساوي.","ص 24")]}}
LESS={
"u3-l1":{"match":[{"title":"وصّل الصفة بالمقارنة","pairs":[["wide","wider"],["noisy","noisier"],["big","bigger"],["expensive","more expensive"]]}]},
"u3-l2":{"match":[{"title":"وصّل العبارة بوظيفتها","pairs":[["I'd like to …","ما تريد"],["Shall I …?","عرض خدمة"],["Could you …?","طلب"],["Did you say …?","تحقق"]]}]},
"u3-l3":{"match":[{"title":"وصّل الصفة بالتفضيل","pairs":[["fast","the fastest"],["good","the best"],["noisy","the noisiest"],["expensive","the most expensive"]]}]}}
ACTS={
"u3-l1":{"open":["A road sign near your home and its meaning","Compare your car with your friend's car","Something too big for your room"],"exit":[
 {"q":"The vehicle must not be ___ than 2 m.","o":["wider","more wide","widest","wide"],"c":0,"e":"ص 20."},
 {"q":"The lorry is ___ for the bridge.","o":["too high","high enough","enough high","too much high"],"c":0,"e":"ص 21."},
 {"q":"noisy →","o":["noisier","noisyer","more noisy","noisiest"],"c":0,"e":"ص 21."}]},
"u3-l2":{"open":["The most important feature in a phone for you","A polite phrase you use on the phone","Compare two phones you know"],"exit":[
 {"q":"Would you mind ___ me your name?","o":["giving","to give","give","gave"],"c":0,"e":"ص 22."},
 {"q":"___ I put you through?","o":["Shall","Would","Do","Could you"],"c":0,"e":"ص 22."},
 {"q":"The white one or the black ___?","o":["one","ones","it","that"],"c":0,"e":"ص 23."}]},
"u3-l3":{"open":["A world record you know","The best car for the desert and why","Compare three mobile networks"],"exit":[
 {"q":"Engine D is ___ engine.","o":["the cheapest","cheapest","the cheaper","the most cheap"],"c":0,"e":"ص 24."},
 {"q":"good → the ___","o":["best","goodest","better","most good"],"c":0,"e":"ص 24."},
 {"q":"Engine C is ___ Engine E.","o":["as powerful as","as powerful than","more powerful as","powerful as"],"c":0,"e":"ص 24."}]}}
PAGES={"u3-l1":(20,21),"u3-l2":(22,23),"u3-l3":(24,25)}
def build(add,T,Bd):
 add('u3-l1','مثال 1: الحد','عبّارة','2.9 m','اكتب.',
  [Bd("الخطوة 1: The vehicle must not be more high than 2.9 m.","high → higher.","The vehicle must not be higher than 2.9 m.",["higher than","more high than","highest","high than"])],"The vehicle must not be higher than 2.9 m.")
 add('u3-l1','مثال 2: المقارنة','صفة','big','اكتب.',
  [Bd("الخطوة 1: The box is biger than the CD.","نضاعف g.","The box is bigger than the CD.",["bigger","biger","more big","biggest"])],"The box is bigger than the CD.")
 add('u3-l1','مثال 3: too','مشكلة','ship 12.2 m / canal 11.5 m','اشرح.',
  [Bd("الخطوة 1: The ship is enough wide for the canal.","المشكلة: too wide.","The ship is too wide for the canal.",["too wide","enough wide","wide enough","wider"])],"The ship is too wide for the canal.")
 add('u3-l2','مثال 1: mind','هاتف','telling','اطلب.',
  [Bd("الخطوة 1: Would you mind to tell me the problem?","mind + ing.","Would you mind telling me what the problem is?",["telling","to tell","tell","told"])],"Would you mind telling me what the problem is?")
 add('u3-l2','مثال 2: العرض','هاتف','send a table','اعرض.',
  [Bd("الخطوة 1: Would you like me send you a table?","me to + الفعل.","Would you like me to send you a specification table?",["me to send","me send","me sending","I send"])],"Would you like me to send you a specification table?")
 add('u3-l2','مثال 3: much','مقارنة','94 g / 135 g','قارن.',
  [Bd("الخطوة 1: The Fonarama is very lighter than the Classic.","much + المقارنة.","The Fonarama is much lighter than the Classic.",["much","very","more","too"])],"The Fonarama is much lighter than the Classic.")
 add('u3-l3','مثال 1: التفضيل','محرك','cheap','اكتب.',
  [Bd("الخطوة 1: Engine D is cheapest engine.","نحتاج the.","Engine D is the cheapest engine.",["the cheapest","cheapest","the cheaper","the most cheap"])],"Engine D is the cheapest engine.")
 add('u3-l3','مثال 2: صفة طويلة','محرك','expensive','اكتب.',
  [Bd("الخطوة 1: Engine B is the expensivest engine.","the most + صفة طويلة.","Engine B is the most expensive engine.",["the most expensive","the expensivest","the more expensive","most expensive"])],"Engine B is the most expensive engine.")
 add('u3-l3','مثال 3: التساوي','محرك','115 hp','قارن.',
  [Bd("الخطوة 1: Engine C is as powerful than Engine E.","as … as.","Engine C is as powerful as Engine E.",["as … as","as … than","more … as","so … as"])],"Engine C is as powerful as Engine E.")

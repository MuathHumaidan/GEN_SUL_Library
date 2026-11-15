D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u5":{"title":"Comparing services — مقارنة الخدمات","cards":[
 D("speed / price / convenience / reliability","معايير اختيار الخدمة.","ص 24"),
 L("cheaper than / more convenient than","المقارنة بين شيئين.","ص 94",l="u5-l1"),
 L("the cheapest / the most convenient","التفضيل بين ثلاثة أو أكثر.","ص 94",l="u5-l1"),
 L("good → better → best","صفات شاذة.","ص 94",l="u5-l1"),
 L("very / quite + adj · much / a bit + comparative","التقوية والتضعيف.","ص 25"),
 L("If you ask me, … / I think …","إبداء الرأي.","ص 26"),
 L("I agree. / Good point.","موافقة كاملة.","ص 26"),
 L("I see what you mean, but …","موافقة جزئية.","ص 26")]}}
LESS={
"u5-l1":{"match":[{"title":"وصّل الصفة بصيغتيها","pairs":[["cheap","cheaper / the cheapest"],["big","bigger / the biggest"],["good","better / the best"],["convenient","more convenient / the most convenient"]]}]},
"u5-l2":{"match":[{"title":"وصّل العبارة بوظيفتها","pairs":[["If you ask me, …","opinion"],["I agree.","agree completely"],["That's true, but …","agree, but not completely"],["What do you think?","ask for an opinion"]]}]}}
ACTS={
"u5-l1":{"open":["Compare two shops in your town","The most important thing when you choose a service","Which is faster: the bus or the car?"],"exit":[
 {"q":"The bus is ___ than the taxi.","o":["cheaper","cheapest","more cheap","the cheaper"],"c":0,"e":"ص 94."},
 {"q":"This is ___ hotel in the city.","o":["the best","better","the goodest","best than"],"c":0,"e":"ص 94."},
 {"q":"It's ___ cheaper.","o":["much","very","quite","fairly"],"c":0,"e":"ص 95."}]},
"u5-l2":{"open":["Give your opinion about online classes","Agree partly: 'Exams are useless.'","The best training course for students"],"exit":[
 {"q":"If you ask ___, it's too long.","o":["me","for me","to me","I"],"c":0,"e":"ص 95."},
 {"q":"Partial agreement:","o":["I see what you mean, but …","I agree.","Good point.","Yes, exactly."],"c":0,"e":"ص 95."},
 {"q":"I ___ think it's useful.","o":["don't","not","no","doesn't"],"c":0,"e":"ص 95."}]}}
PAGES={"u5-l1":(24,25),"u5-l2":(26,27)}
def build(add,T,Bd):
 add('u5-l1','مثال 1: المقارنة','مقارنة','45 و 90 ريالاً.','قارن.',
  [Bd("الخطوة 1: FastBox is more cheap than SkyPost.","قصيرة: cheaper.","FastBox is cheaper than SkyPost.",["cheaper than","more cheap than","cheapest than","the cheaper"])],"FastBox is cheaper than SkyPost.")
 add('u5-l1','مثال 2: التفضيل','تفضيل','ثلاثة فنادق.','اكتب.',
  [Bd("الخطوة 1: Park Hotel is most convenient.","the قبل التفضيل.","Park Hotel is the most convenient.",["the most","most بلا the","more","the more"])],"Park Hotel is the most convenient.")
 add('u5-l1','مثال 3: a bit','فرق','فرق صغير.','اكتب.',
  [Bd("الخطوة 1: Train A is very more expensive than Train B.","فرق صغير: a bit.","Train A is a bit more expensive than Train B.",["a bit + مقارنة","very + مقارنة","quite + مقارنة","fairly + مقارنة"])],"Train A is a bit more expensive than Train B.")
 add('u5-l2','مثال 1: الرأي','رأي','دورة الهاتف.','اكتب.',
  [Bd("الخطوة 1: If you ask for me, a telephone course is best.","If you ask me.","If you ask me, a telephone course is best.",["If you ask me","If you ask for me","If ask me","If you asking me"])],"If you ask me, a telephone skills course is best.")
 add('u5-l2','مثال 2: جزئية','موافقة','الدورة طويلة.','وافق جزئياً.',
  [Bd("الخطوة 1: I agree.","موافقة جزئية: That's true, but …","That's true, but it takes a long time.",["That's true, but …","I agree.","Good point.","No."])],"That's true, but it takes a long time.")
 add('u5-l2','مثال 3: تصحيح','تصحيح','I think of that …','صحّح.',
  [Bd("الخطوة 1: I think of that we need more training.","of زائدة.","I think that we need more training.",["I think that","I think of that","I am think","I thinking"])],"I think that we need more training.")

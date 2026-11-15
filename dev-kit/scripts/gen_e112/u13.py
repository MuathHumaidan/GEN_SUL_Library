D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u13":{"title":"Entertaining — الضيافة","cards":[
 L("I recommend … / You should try … / I suggest …","التوصية بطعام (لا أمر).","ص 62"),
 L("OK, I'll have that. / Sounds delicious.","قبول التوصية.","ص 62"),
 L("I'm afraid I don't eat …","رفض بلطف مع السبب.","ص 62"),
 D("boiled / steamed / fried / grilled / baked","طرق الطبخ.","ص 63"),
 D("sweet / sour / salty / spicy / savoury","الطعم.","ص 63"),
 L("It's made with … (passive)","be + التصريف الثالث حين يكون الطعام أهم.","ص 109",l="u13-l1"),
 L("Would you like to …?","الدعوة المهذبة + الفعل كما هو.","ص 64"),
 L("Accept + question","Yes, I'd love to. What time shall we meet?","ص 64"),
 L("Pause + sorry + reason","Oh, I'm sorry. I'm very tired.","ص 64"),
 D("Yours sincerely / Best wishes","ختام رسمي / غير رسمي.","ص 65")]}}
LESS={
"u13-l1":{"match":[{"title":"وصّل الطريقة بمعناها","pairs":[["boiled","cooked in water"],["steamed","cooked over water"],["grilled","cooked over fire"],["baked","cooked in an oven"],["fried","cooked in oil"]]}]},
"u13-l2":{"match":[{"title":"وصّل الرد بما يليه","pairs":[["Yes, I'd love to.","What time shall we meet?"],["Oh, I'm sorry.","I'm meeting a relative."],["Yes, that would be nice.","Where shall we meet?"],["Oh, thank you, but …","I'm very tired."]]}],
 "order":[{"title":"رتّب الرد الرسمي","steps":["Dear Ms Irvine,","Thank you for your kind invitation.","I am away on business at that time,","and so I am sorry, but I cannot attend.","Yours sincerely,","Judy Jackson"]}]}}
ACTS={
"u13-l1":{"open":["A dish visitors to your country should try","Food you don't like","Describe your favourite dish"],"exit":[
 {"q":"Correct recommendation:","o":["I recommend the soup.","Eat the soup.","You will eat soup.","It's up to you."],"c":0,"e":"ص 62."},
 {"q":"Cooked over water:","o":["steamed","boiled","fried","baked"],"c":0,"e":"ص 63."},
 {"q":"The soup ___ with lentils.","o":["is made","makes","made","making"],"c":0,"e":"ص 109."}]},
"u13-l2":{"open":["Invite a visitor to do something in your city","A polite way to say no","What would you like to do this weekend?"],"exit":[
 {"q":"Would you like ___ dinner?","o":["to have","have","having","has"],"c":0,"e":"ص 64."},
 {"q":"Not polite:","o":["No, I'm not hungry.","Yes, I'd love to.","Oh, thank you, but …","Yes, that would be nice."],"c":0,"e":"ص 64."},
 {"q":"Formal ending:","o":["Yours sincerely,","Best wishes,","Love,","Bye!"],"c":0,"e":"ص 65."}]}}
PAGES={"u13-l1":(62,63),"u13-l2":(64,65)}
def build(add,T,Bd):
 add('u13-l1','مثال 1: توصية','توصية','السمك المشوي.','أوصِ.',
  [Bd("الخطوة 1: Eat the grilled fish.","لا أمر مع الضيف.","I recommend the grilled fish.",["I recommend","صيغة الأمر","You will eat","It's up to you"])],"I recommend the grilled fish.")
 add('u13-l1','مثال 2: رفض','رفض','لا تأكل الحار.','ردّ.',
  [Bd("الخطوة 1: No. I hate spicy food.","الرفض بلطف.","I'm sorry. I don't like spicy food much.",["اعتذار ثم سبب","رفض مباشر","نعم دائماً","لا نرد"])],"I'm sorry. I don't like spicy food much.")
 add('u13-l1','مثال 3: المجهول','passive','The cook makes the soup from lentils.','حوّل.',
  [Bd("الخطوة 1: The soup makes from lentils.","be + التصريف الثالث.","The soup is made from lentils.",["is made","makes","made","is make"])],"The soup is made from lentils.")
 add('u13-l2','مثال 1: الدعوة','دعوة','المتحف غداً.','ادعُ.',
  [Bd("الخطوة 1: Would you like visit the museum tomorrow?","Would you like to + الفعل.","Would you like to visit the museum tomorrow?",["like to + الفعل","like + الفعل","like visiting","liking to"])],"Would you like to visit the museum tomorrow?")
 add('u13-l2','مثال 2: قبول','قبول','اقبل واسأل عن المكان.','اكتب.',
  [T("الخطوة 1: Yes, I'd love to."),Bd("الخطوة 2: I'm very tired.","بعد القبول سؤال، لا سبب للرفض.","Where shall we meet?",["سؤال بعد القبول","سبب بعد القبول","لا شيء","اعتذار"])],"Yes, I'd love to. Where shall we meet?")
 add('u13-l2','مثال 3: رسمي','رسالة','رفض لشركة.','اكتب الختام.',
  [T("الخطوة 1: I am sorry, but I cannot attend."),Bd("الخطوة 2: Best wishes, Judy","للشركة: Yours sincerely والاسم كاملاً.","Yours sincerely, Judy Jackson",["Yours sincerely + الاسم كاملاً","Best wishes","Love","See you"])],"Yours sincerely, Judy Jackson")

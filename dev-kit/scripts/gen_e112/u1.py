D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u1":{"title":"Greeting visitors — استقبال الزوار","cards":[
 L("I'm here to take you to our office.","المضيف يعرّف بنفسه في المطار.","ص 6"),
 L("Can I help you with your bags?","عرض المساعدة، والرد: Thank you. That's very kind.","ص 6"),
 D("This way. / You can put your bags in the boot.","عبارات الإرشاد.","ص 6"),
 L("Do you …? (عادة) / Did you …? (حدث انتهى)","المضارع البسيط والماضي البسيط.","ص 87",l="u1-l1"),
 L("How was your flight? (be بلا did)","الماضي من be.","ص 87",l="u1-l1"),
 L("Nice to meet you. / Nice to see you again.","أول لقاء / لقاء مرة أخرى.","ص 8"),
 L("Thank you for coming. — Not at all.","الشكر والرد.","ص 8"),
 D("Please take a seat. / Would you like a coffee?","الضيافة.","ص 9"),
 L("Have you been here before? — When was that?","تجربة ثم وقت.","ص 9")]}}
LESS={
"u1-l1":{"match":[{"title":"وصّل عبارة المضيف برد الزائر","pairs":[["I'm here to take you to our office.","Thank you. That's very kind."],["Can I help you with your bags?","No, it's all right, thanks."],["Did you have a good flight?","Yes, it was very short."],["Do you travel abroad a lot?","About four times a year."]]}]},
"u1-l2":{"match":[{"title":"وصّل الجملة بالرد","pairs":[["Nice to meet you.","Nice to meet you, too."],["Nice to see you again.","Nice to see you, too."],["Thank you for coming today.","Not at all. Thank you for seeing me."],["Would you like a coffee?","Yes, please. That would be nice."]]}]}}
ACTS={
"u1-l1":{"open":["What do you say to a visitor at the airport?","Topics to talk about in the car","Do you like travelling? Why?"],"exit":[
 {"q":"Can I help you ___ your bags?","o":["with","for","at","on"],"c":0,"e":"ص 6."},
 {"q":"___ you have a good flight?","o":["Did","Do","Were","Are"],"c":0,"e":"ص 87."},
 {"q":"How ___ your trip?","o":["was","did","does","were"],"c":0,"e":"ص 87."}]},
"u1-l2":{"open":["Your best tip for small talk","What do you offer visitors in your country?","A place you have been to before"],"exit":[
 {"q":"First meeting:","o":["Nice to meet you.","Nice to see you again.","How are things?","Good to see you again."],"c":0,"e":"ص 8."},
 {"q":"Thank you for coming. —","o":["Not at all.","Yes, please.","Very well.","Nice to meet."],"c":0,"e":"ص 8."},
 {"q":"Have you been here before? — Yes. ___","o":["I came in 2022.","I have come in 2022.","I come in 2022.","I was come in 2022."],"c":0,"e":"ص 87."}]}}
PAGES={"u1-l1":(6,7),"u1-l2":(8,9)}
def build(add,T,Bd):
 add('u1-l1','مثال 1: التعريف','مطار','استقبل Ms Lane.','عرّف بنفسك.',
  [T("الخطوة 1: Hello, Ms Lane. I'm Omar from Gulf Tech."),Bd("الخطوة 2: I'm here for take you to our office.","I'm here to take you …","I'm here to take you to our office.",["to + الفعل","for + الفعل","بلا to","taking"])],"Hello, Ms Lane. I'm Omar from Gulf Tech. I'm here to take you to our office.")
 add('u1-l1','مثال 2: الماضي','سؤال','الرحلة.','اسأل.',
  [Bd("الخطوة 1: Did you had a good flight?","بعد did الفعل كما هو.","Did you have a good flight?",["did + have","did + had","do + had","had بلا did"])],"Did you have a good flight?")
 add('u1-l1','مثال 3: be','سؤال','How did your trip?','صحّح.',
  [Bd("الخطوة 1: How did your trip?","مع be لا نستعمل did.","How was your trip?",["How was","How did","How does","How were"])],"How was your trip?")
 add('u1-l2','مثال 1: أول لقاء','تحية','زائر جديد.','ردّ.',
  [Bd("الخطوة 1: Nice to see you again.","أول لقاء: meet.","Nice to meet you.",["meet لأول لقاء","see again لأول لقاء","How are things","Good to see you"])],"Nice to meet you.")
 add('u1-l2','مثال 2: الضيافة','عرض','مشروب.','اعرض.',
  [Bd("الخطوة 1: Do you want coffee?","الأدب: Would you like …?","Would you like a coffee?",["Would you like","Do you want","You want","Want coffee"])],"Please take a seat. Would you like a coffee?")
 add('u1-l2','مثال 3: الوقت','زمن','زار الرياض 2022.','اسأل متى.',
  [T("الخطوة 1: Have you been to Riyadh before?"),Bd("الخطوة 2: When have you been there?","الوقت: الماضي البسيط.","When was that?",["When was that?","When have you been?","When do you go?","When you went?"])],"Have you been to Riyadh before? When was that?")

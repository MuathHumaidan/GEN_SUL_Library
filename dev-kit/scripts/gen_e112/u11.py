D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u11":{"title":"Small talk — الحديث الاجتماعي","cards":[
 L("Nice to meet you. / How do you do?","للقاء الأول. والرد على How do you do? بنفسها.","ص 52"),
 L("It's good to see you again.","لشخص تعرفه، ومعها How are things? و How's business?","ص 52"),
 D("I'm …, by the way.","بالمناسبة، أنا … (by the way في آخر الجملة).","ص 52"),
 D("small talk","حديث قصير مهذب غير رسمي.","ص 53"),
 L("Do: give information about yourself first","ثم أعطِ الآخر فرصة يتكلم.","ص 53"),
 L("Don't: age, salary, politics, religion, clothes","مواضيع تحرج في أول لقاء.","ص 53"),
 L("answer plus","الجواب + معلومة أو سؤال أو تعليق.","ص 54"),
 L("How long have you worked here?","المضارع التام لشيء مستمر حتى الآن.","ص 105","u11-l2"),
 L("for + مدة / since + بداية","for three years · since 2022","ص 105","u11-l2"),
 D("Really? / Me, too. / Sure.","هذا مثير / وأنا كذلك / نعم.","ص 106",l="u11-l2"),
 D("I'd love to!","أحب ذلك كثيراً (قبول دعوة).","ص 106",l="u11-l2")]}}
LESS={
"u11-l1":{"match":[{"title":"وصّل العبارة بالموقف","pairs":[["Nice to meet you.","first time"],["It's good to see you again.","someone you know"],["How do you do?","first time (formal)"],["How's business?","someone you know"],["Are you new here?","start a conversation"]]}],
 "order":[{"title":"رتّب الحوار","steps":["Hello. Are you new here?","Yes. Today's my first day.","I'm Kate, by the way.","I'm Daniel. Nice to meet you."]}]},
"u11-l2":{"match":[{"title":"وصّل الجواب بالـ plus","pairs":[["Yes, it is.","How long have you worked here?"],["At the Park Hotel.","It's near the station."],["Yes, pretty good.","This is a very nice building."],["For two years.","How about you?"]]},{"title":"for أم since","pairs":[["three weeks","for"],["2019","since"],["Monday","since"],["a long time","for"]]}]}}
ACTS={
"u11-l1":{"open":["What do you say to a new colleague on his first day?","A topic that is easy to talk about","A question you should not ask a new person"],"exit":[
 {"q":"First time: ___","o":["Nice to meet you.","It's good to see you again.","How are things?","How's business?"],"c":0,"e":"ص 52."},
 {"q":"I'm Jo, ___ the way.","o":["by","on","at","in"],"c":0,"e":"ص 52."},
 {"q":"Good small talk:","o":["I'm new here, too.","How old are you?","Your hair is strange.","What's your salary?"],"c":0,"e":"ص 53."}]},
"u11-l2":{"open":["Answer with answer plus: Where do you live?","How long have you studied English?","A short reply that shows interest"],"exit":[
 {"q":"I've lived here ___ 2020.","o":["since","for","from","ago"],"c":0,"e":"ص 105."},
 {"q":"How long ___ you worked here?","o":["have","do","are","did"],"c":0,"e":"ص 105."},
 {"q":"Answer plus:","o":["Yes, it is. How about you?","Yes.","Yes, it is.","Yes, yes."],"c":0,"e":"ص 54."}]}}
PAGES={"u11-l1":(52,53),"u11-l2":(54,55)}
def build(add,T,Bd):
 add('u11-l1','مثال 1: لقاء أول','لقاء','زميل جديد.','ابدأ الحديث.',
  [T("الخطوة 1: Are you new here?"),Bd("الخطوة 2: I'm by the way Kate.","by the way في آخر الجملة.","I'm Kate, by the way.",["by the way في آخر الجملة","by the way بعد I'm","بلا فاصلة","by the way في الأول دائماً"])],"Are you new here? I'm Kate, by the way.")
 add('u11-l1','مثال 2: من تعرفه','تحية','عميل تعرفه.','حيّه.',
  [Bd("الخطوة 1: Nice to meet you again.","لمن تعرفه: see you again.","It's good to see you again.",["see لمن تعرفه","meet لمن تعرفه","meet again صحيحة","بلا again"])],"It's good to see you again. How's business?")
 add('u11-l1','مثال 3: نصيحة','نصيحة','زميل جديد.','اختر سؤالاً مناسباً.',
  [Bd("الخطوة 1: How much do you earn?","الراتب شخصي جداً.","How long have you worked here?",["الراتب سؤال شخصي","الراتب سهل","كل الأسئلة مناسبة","السؤال عن الدين مناسب"])],"How long have you worked here?")
 add('u11-l2','مثال 1: answer plus','جواب','Did you have a good flight?','أجب مع plus.',
  [T("الخطوة 1: Yes, pretty good, thanks."),Bd("الخطوة 2: (لا شيء)","أضف تعليقاً أو سؤالاً.","The airport is very modern.",["نضيف شيئاً بعد الجواب","الجواب القصير يكفي","نسكت","نكرر السؤال"])],"Yes, pretty good, thanks. The airport is very modern.")
 add('u11-l2','مثال 2: for/since','زمن','بدأت سنة 2022.','اكتب.',
  [Bd("الخطوة 1: I've worked here for 2022.","سنة = نقطة بداية: since.","I've worked here since 2022.",["since مع نقطة البداية","for مع السنة","from مع المضارع التام","ago مع المضارع التام"])],"I've worked here since 2022.")
 add('u11-l2','مثال 3: السؤال','سؤال','مدة السكن.','اسأل.',
  [Bd("الخطوة 1: How long do you live in Leeds?","شيء مستمر: How long have you lived …?","How long have you lived in Leeds?",["المضارع التام","المضارع البسيط","الماضي البسيط","المستقبل"])],"How long have you lived in Leeds?")

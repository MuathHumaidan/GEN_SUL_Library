D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u2":{"title":"Work — العمل","cards":[
 L("He usually supervises … / Today he's operating …","المضارع البسيط للعادة، والمستمر للمؤقت والآن.","ص 10"),
 D("onshore ≠ offshore · on duty ≠ off duty · on leave","مفردات العمل البحري.","ص 10"),
 L("I operate … · I supervise … · I report to …","وصف الوظيفة بالمضارع البسيط.","ص 11"),
 L("I'm holding / I'm going to hold a meeting.","الخطط بالمستمر أو going to.","ص 12"),
 L("want / intend / hope / plan + to","بعدها to + الفعل كما هو.","ص 12"),
 D("With reference to · Unfortunately, · I attach · Kind regards","عبارات البريد الرسمي.","ص 13"),
 L("From 2003 until 2005, I worked … · In 2006, I received …","السيرة بالماضي البسيط.","ص 14"),
 D("mechanic (شخص) · mechanics (مادة) · mechanical (صفة)","عائلة الكلمة.","ص 15"),
 L("We checked them this morning. (وقت محدد)","مع الوقت المحدد: الماضي البسيط لا التام.","ص 17"),
 D("manage · supervise · report to · work for","الهيكل التنظيمي.","ص 17")]}}
LESS={
"u2-l1":{"match":[{"title":"وصّل الكلمة بضدها أو معناها","pairs":[["onshore","offshore"],["on duty","off duty"],["on leave","on holiday"],["usually","today (مؤقت)"]]}]},
"u2-l2":{"match":[{"title":"وصّل العبارة بوظيفتها","pairs":[["Many thanks for …","شكر"],["Unfortunately, …","خبر سيئ"],["I attach …","مرفق"],["Kind regards","ختام"]]}]},
"u2-l3":{"match":[{"title":"وصّل الفعل بماضيه","pairs":[["leave","left"],["become","became"],["study","studied"],["receive","received"]]}]},
"u2-l4":{"match":[{"title":"وصّل الصورة بالتعليمة","pairs":[["The light is off.","Switch it on."],["The plug is in.","Pull it out."],["Tools on the floor.","Pick them up."],["Old oil in the bottle.","Pour it out."]]}]}}
ACTS={
"u2-l1":{"open":["Would you like to work offshore? Why?","Describe your routine on a training day","Who do you report to at college?"],"exit":[
 {"q":"He usually ___ the deck crew.","o":["supervises","is supervising","supervise","supervising"],"c":0,"e":"ص 10."},
 {"q":"Today he ___ the crane.","o":["'s operating","operates","operate","operated"],"c":0,"e":"ص 10."},
 {"q":"Who do you report ___?","o":["to","for","at","with"],"c":0,"e":"ص 11."}]},
"u2-l2":{"open":["Your plans for next weekend","Something you hope to do next year","A formal phrase for bad news"],"exit":[
 {"q":"I ___ a meeting next Thursday.","o":["'m holding","hold","held","holds"],"c":0,"e":"ص 12."},
 {"q":"I want ___ the report.","o":["to finish","finish","finishing","finished"],"c":0,"e":"ص 12."},
 {"q":"Bad news:","o":["Unfortunately, …","Fortunately, …","I attach …","Kind regards"],"c":0,"e":"ص 13."}]},
"u2-l3":{"open":["What is in a good CV?","A job you want after your training","A question you can ask at an interview"],"exit":[
 {"q":"In 2005, I ___ Comet.","o":["left","leaved","leave","have left"],"c":0,"e":"ص 14."},
 {"q":"He studied ___ at college.","o":["mechanics","mechanic","mechanism","mechanical"],"c":0,"e":"ص 15."},
 {"q":"Where ___ in 2004?","o":["did you work","you worked","did you worked","do you worked"],"c":0,"e":"ص 15."}]},
"u2-l4":{"open":["Describe your department's organisation","A job you have done today","Advice for a job interview"],"exit":[
 {"q":"Pick ___ up.","o":["them","up them","they","their"],"c":0,"e":"ص 16."},
 {"q":"We ___ them this morning.","o":["checked","have checked","check","checks"],"c":0,"e":"ص 17."},
 {"q":"The Junior Technician ___ the Senior Technician.","o":["reports to","manages","supervises","works"],"c":0,"e":"ص 17."}]}}
PAGES={"u2-l1":(10,11),"u2-l2":(12,13),"u2-l3":(14,15),"u2-l4":(16,19)}
def build(add,T,Bd):
 add('u2-l1','مثال 1: عادة أم اليوم؟','جدول','usually check / today repair','اكتب.',
  [T("الخطوة 1: Adel usually checks the generators."),Bd("الخطوة 2: But today he repairs a power line.","المؤقت بالمستمر.","But today he's repairing a power line.",["المستمر للمؤقت","البسيط للمؤقت","الماضي","المضارع التام"])],"Adel usually checks the generators, but today he's repairing a power line.")
 add('u2-l1','مثال 2: الوظيفة','وصف','Assistant Driller','صِف.',
  [T("الخطوة 1: I'm an Assistant Driller."),Bd("الخطوة 2: I report the Driller.","report to.","I report to the Driller.",["report to","report بلا to","report for","report at"])],"I'm an Assistant Driller. I report to the Driller.")
 add('u2-l1','مثال 3: الفاعل المفرد','وصف','He / operate','اكتب.',
  [Bd("الخطوة 1: He operate the cranes.","المفرد + s.","He operates the cranes.",["operates","operate","operating","is operate"])],"He operates the cranes.")
 add('u2-l2','مثال 1: خطة','مفكرة','TUE 10.00 meet engineers','اكتب.',
  [Bd("الخطوة 1: On Tuesday at 10, I meeting the engineers.","المستمر: am + ing.","On Tuesday at 10, I'm meeting the engineers.",["I'm meeting","I meeting","I meet","I'm meet"])],"On Tuesday at 10, I'm meeting the engineers.")
 add('u2-l2','مثال 2: want to','نية','finish the report','اكتب.',
  [Bd("الخطوة 1: I want finish the report next week.","want to + الفعل.","I want to finish the report next week.",["want to finish","want finish","want finishing","want to finishing"])],"I want to finish the report next week.")
 add('u2-l2','مثال 3: بريد','رسمي','Sorry, I can\'t come.','اجعلها رسمية.',
  [Bd("الخطوة 1: Fortunately, I cannot attend the meeting.","خبر سيئ: Unfortunately.","Unfortunately, I cannot attend the meeting.",["Unfortunately","Fortunately","Many thanks","I attach"])],"Unfortunately, I cannot attend the meeting.")
 add('u2-l3','مثال 1: السيرة','ماضٍ','2005 leave Comet','احكِ.',
  [Bd("الخطوة 1: In 2005, I leaved Comet.","leave → left.","In 2005, I left Comet.",["left","leaved","leave","have left"])],"In 2005, I left Comet.")
 add('u2-l3','مثال 2: السؤال','مقابلة','where / work / 2004','اسأل.',
  [Bd("الخطوة 1: Where you worked in 2004?","السؤال بـ did.","Where did you work in 2004?",["did you work","you worked","did you worked","do you work"])],"Where did you work in 2004?")
 add('u2-l3','مثال 3: الكلمة','عائلة','mechanic / mechanics','اختر.',
  [Bd("الخطوة 1: He studied mechanic at college.","المادة: mechanics.","He studied mechanics at college.",["mechanics","mechanic","mechanical","mechanism"])],"He studied mechanics at college.")
 add('u2-l4','مثال 1: الضمير','فعل مركب','putting / them / on','رتّب.',
  [Bd("الخطوة 1: I'm putting on them right now.","الضمير بين الفعل والأداة.","I'm putting them on right now.",["putting them on","putting on them","put them on","putting on"])],"I'm putting them on right now.")
 add('u2-l4','مثال 2: وقت محدد','زمن','this morning','أكمل.',
  [Bd("الخطوة 1: We have checked the tyres this morning.","وقت محدد: الماضي البسيط.","We checked the tyres this morning.",["checked","have checked","check","are checking"])],"We checked the tyres this morning.")
 add('u2-l4','مثال 3: الهيكل','تنظيم','Junior Technician → Senior Technician','صِف.',
  [Bd("الخطوة 1: The Junior Technician manages the Senior Technician.","الأدنى يرفع تقاريره إلى الأعلى.","The Junior Technician reports to the Senior Technician.",["reports to","manages","supervises","works"])],"The Junior Technician reports to the Senior Technician.")

D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u12":{"title":"Getting personal — الحديث عن نفسك","cards":[
 L("graduate from + جامعة / in + تخصص","graduated from Hull in Marketing.","ص 56"),
 L("study at / work for / work in","studied at Leeds · worked for Rainbow · worked in London","ص 56"),
 L("leave / start / finish بلا حرف جر","left Iceland · finished school","ص 107",l="u12-l1"),
 D("stepping stones","خطوات المسيرة بالترتيب.","ص 56"),
 D("MBA","ماجستير إدارة الأعمال.","ص 57"),
 L("Have you ever …?","سؤال عن تجربة بلا وقت محدد.","ص 58"),
 L("When did you …?","سؤال عن وقت محدد: الماضي البسيط.","ص 58"),
 L("ever / never","ever في السؤال والنفي، never مع فعل مثبت.","ص 108",l="u12-l2"),
 L("been / gone","been = ذهب ورجع · gone = ما زال هناك.","ص 108",l="u12-l2"),
 D("always … never","ظروف التكرار من 100% إلى 0%.","ص 61"),
 D("leave home / get home / pick up","أفعال الروتين.","ص 60")]}}
LESS={
"u12-l1":{"match":[{"title":"وصّل الفعل بحرف الجر","pairs":[["graduated","from Hull"],["studied","at Leeds"],["worked","for Rainbow"],["went","to Canada"],["left","Iceland (—)"]]}],
 "order":[{"title":"رتّب مسيرة Inga","steps":["left Iceland","graduated from Hull","worked in London","left Rainbow","did an MBA","went back to Iceland"]}]},
"u12-l2":{"match":[{"title":"وصّل السؤال بالجواب","pairs":[["Have you ever been to the US?","Yes, I have."],["When did you go there?","In 2002."],["Did you work there?","No, I studied English."],["Have you ever run a business?","No, I haven't."]]}]},
"u12-l3":{"match":[{"title":"وصّل الفعل بالجملة","pairs":[["leave","home at 7.00"],["have","lunch"],["take","a break"],["pick up","my mother"],["watch","TV"]]}],
 "order":[{"title":"رتّب ظروف التكرار","steps":["always","usually","often","sometimes","rarely","never"]}]}}
ACTS={
"u12-l1":{"open":["An important step in your life","Where would you like to study or work?","A job you would not like to do"],"exit":[
 {"q":"She graduated ___ Marketing.","o":["in","from","at","for"],"c":0,"e":"ص 56."},
 {"q":"I left ___ school in 2019.","o":["— (no word)","from","at","in"],"c":0,"e":"ص 107."},
 {"q":"Past of 'go':","o":["went","goed","gone","goes"],"c":0,"e":"ص 56."}]},
"u12-l2":{"open":["Something you have never done","A country you have been to","An interesting experience"],"exit":[
 {"q":"___ you ever worked abroad?","o":["Have","Did","Do","Are"],"c":0,"e":"ص 58."},
 {"q":"I ___ there in 2020.","o":["went","have gone","go","have been"],"c":0,"e":"ص 58."},
 {"q":"He's not here. He's ___ to lunch.","o":["gone","been","go","went"],"c":0,"e":"ص 108."}]},
"u12-l3":{"open":["What do you usually do at the weekend?","What do you like about your studies?","A memorable day"],"exit":[
 {"q":"I ___ home at 7 a.m.","o":["leave","get","take","finish"],"c":0,"e":"ص 60."},
 {"q":"I've worked here ___ ten years.","o":["for","since","from","in"],"c":0,"e":"ص 61."},
 {"q":"0% =","o":["never","sometimes","often","usually"],"c":0,"e":"ص 61."}]}}
PAGES={"u12-l1":(56,57),"u12-l2":(58,59),"u12-l3":(60,61)}
def build(add,T,Bd):
 add('u12-l1','مثال 1: حرف الجر','حرف جر','graduated + Leeds University + 2012','اكتب.',
  [Bd("الخطوة 1: He graduated in Leeds University in 2012.","الجامعة بعد graduated: from.","He graduated from Leeds University in 2012.",["from مع الجامعة","in مع الجامعة","at مع graduated","بلا حرف جر"])],"He graduated from Leeds University in 2012.")
 add('u12-l1','مثال 2: بلا حرف جر','leave','غادرت المدرسة 2019.','اكتب.',
  [Bd("الخطوة 1: I left from school in 2019.","leave بلا حرف جر.","I left school in 2019.",["leave بلا حرف جر","leave from","leave at","leave to"])],"I left school in 2019.")
 add('u12-l1','مثال 3: الماضي','ماضٍ','ذهبت إلى الجامعة 2015.','اكتب.',
  [T("الخطوة 1: I worked in a bank."),Bd("الخطوة 2: Then I go to university in 2015.","حدث في الماضي: went.","Then I went to university in 2015.",["الماضي: went","المضارع: go","gone","goed"])],"I worked in a bank. Then I went to university in 2015.")
 add('u12-l2','مثال 1: التجربة','سؤال','العمل في مصنع.','اسأل.',
  [Bd("الخطوة 1: Did you ever worked in a factory?","تجربة بلا وقت: Have you ever + التصريف الثالث.","Have you ever worked in a factory?",["Have you ever + worked","Did you ever + worked","Do you ever","Are you ever"])],"Have you ever worked in a factory?")
 add('u12-l2','مثال 2: الوقت','متى','أجاب: نعم.','اسأل متى.',
  [Bd("الخطوة 1: When have you worked there?","When مع الماضي البسيط.","When did you work there?",["When did you …?","When have you …?","When do you …?","When you worked?"])],"When did you work there?")
 add('u12-l2','مثال 3: gone','been/gone','المدير في اجتماع الآن.','قل للزائر.',
  [Bd("الخطوة 1: Sorry, he's been to a meeting.","ما زال هناك: gone.","Sorry, he's gone to a meeting.",["gone: ما زال هناك","been: ما زال هناك","went","go"])],"Sorry, he's gone to a meeting.")
 add('u12-l3','مثال 1: التكرار','ترتيب','usually / I / finish work at 6','رتّب.',
  [Bd("الخطوة 1: I finish usually work at 6.","ظرف التكرار قبل الفعل.","I usually finish work at 6.",["قبل الفعل","بعد الفعل","في آخر الجملة","قبل الفاعل"])],"I usually finish work at 6.")
 add('u12-l3','مثال 2: سؤال','سؤال','How long · have you worked for · this company?','كوّن السؤال.',
  [Bd("الخطوة 1: How long you have worked for this company?","have قبل الفاعل في السؤال.","How long have you worked for this company?",["have قبل you","you قبل have","do قبل you","بلا have"])],"How long have you worked for this company?")
 add('u12-l3','مثال 3: الزمن','زمن','not give + before','أكمل.',
  [Bd("الخطوة 1: I didn't give this presentation before.","before بلا وقت محدد: المضارع التام.","I haven't given this presentation before.",["المضارع التام","الماضي البسيط","المضارع البسيط","المستقبل"])],"I haven't given this presentation before.")

D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u4":{"title":"Processes — العمليات","cards":[
 L("The rocks are collected by large scoops.","المبني للمجهول: is/are + التصريف الثالث (+ by).","ص 27"),
 L("First the engine is run … Then it is switched off.","من التعليمات إلى وصف العملية.","ص 27"),
 D("Cutting the rock surface · Collecting the rocks","عناوين المراحل بـ ing.","ص 26"),
 L("The body is painted to protect it from rust.","الغرض: to + الفعل.","ص 29"),
 L("How are the parts delivered?","السؤال بالمبني للمجهول.","ص 29"),
 L("…, which … (شيء) · …, who … (شخص)","ربط جملتين.","ص 31"),
 D("transmit = send · convert = change · extract = take out","كلمات متقاربة.","ص 31"),
 L("a high-frequency signal · a 13-amp fuse","الصفة المركبة بالشرطة.","ص 31"),
 L("the least harmful · the cleanest","مراجعة التفضيل.","ص 32")]}}
LESS={
"u4-l1":{"match":[{"title":"وصّل المعلوم بالمجهول","pairs":[["Scoops collect the rocks.","The rocks are collected."],["Cylinders push the cutter.","The cutter is pushed."],["Workers fill the holes.","The holes are filled."],["An engine drives the propeller.","The propeller is driven."]]}]},
"u4-l2":{"match":[{"title":"وصّل العمل بغرضه","pairs":[["weld metal sheets","to make the car body"],["wear special clothes","to protect the paint"],["put the car on rollers","to check the wheels"],["check the body by hand","to look for faults"]]}]},
"u4-l3":{"match":[{"title":"وصّل الكلمة بمعناها","pairs":[["transmit","send"],["receive","get"],["convert","change"],["display","show"]]}]},
"u4-l4":{"match":[{"title":"وصّل الوصف بمعناه","pairs":[["high clearance","space between the ground and the chassis"],["low fuel consumption","a long way on one tank"],["strong towing power","pulls a trailer easily"],["good visibility","the driver can see all around"]]}]}}
ACTS={
"u4-l1":{"open":["A big machine you have seen","Describe a process you know in three steps","Why do we use the passive in processes?"],"exit":[
 {"q":"The rocks ___ by large scoops.","o":["are collected","is collected","collect","collected"],"c":0,"e":"ص 27."},
 {"q":"The propeller is ___ by an engine.","o":["driven","drove","drive","drived"],"c":0,"e":"ص 27."},
 {"q":"Heading:","o":["Collecting the rocks","Collect the rocks","Collected rocks","Rocks collect"],"c":0,"e":"ص 26."}]},
"u4-l2":{"open":["A factory near your city and what it makes","Why do factories use robots?","One stage of making a car"],"exit":[
 {"q":"The body is painted ___ it from rust.","o":["to protect","for protect","protecting","to protecting"],"c":0,"e":"ص 29."},
 {"q":"How ___ the parts delivered?","o":["are","do","is","does"],"c":0,"e":"ص 29."},
 {"q":"Who is the body checked ___?","o":["by","with","from","to"],"c":0,"e":"ص 29."}]},
"u4-l3":{"open":["How does your home get the internet?","A device that receives signals","Explain a system with which"],"exit":[
 {"q":"…the feed horn, ___ converts the signal.","o":["which","who","what","it"],"c":0,"e":"ص 31."},
 {"q":"transmit =","o":["send","get","show","work"],"c":0,"e":"ص 31."},
 {"q":"It's a 13-___ fuse.","o":["amp","amps","ampere's","amped"],"c":0,"e":"ص 31."}]},
"u4-l4":{"open":["Which fuel is the best for the environment?","Describe a process with the passive","A car you like and why"],"exit":[
 {"q":"LPG is the ___ harmful fuel.","o":["least","less","little","lower"],"c":0,"e":"ص 32."},
 {"q":"Sorry, ___ you say db13?","o":["did","do","would","shall"],"c":0,"e":"ص 33."},
 {"q":"First the spark plug cover ___ off.","o":["is taken","takes","is took","taken"],"c":0,"e":"ص 34."}]}}
PAGES={"u4-l1":(26,27),"u4-l2":(28,29),"u4-l3":(30,31),"u4-l4":(32,35)}
def build(add,T,Bd):
 add('u4-l1','مثال 1: المجهول','عملية','Scoops collect the rocks.','حوّل.',
  [Bd("الخطوة 1: The rocks is collected by scoops.","الجمع مع are.","The rocks are collected by scoops.",["are collected","is collected","are collect","collected"])],"The rocks are collected by scoops.")
 add('u4-l1','مثال 2: التصريف الثالث','شاذ','drive','حوّل.',
  [Bd("الخطوة 1: The propeller is drove by an engine.","drive → driven.","The propeller is driven by an engine.",["driven","drove","drived","drive"])],"The propeller is driven by an engine.")
 add('u4-l1','مثال 3: العنوان','مرحلة','collect the rocks','اكتب العنوان.',
  [Bd("الخطوة 1: Collect the rocks","العنوان بـ ing.","Collecting the rocks",["Collecting","Collect","Collected","To collect"])],"Collecting the rocks")
 add('u4-l2','مثال 1: الغرض','لماذا؟','protect it from rust','أكمل.',
  [Bd("الخطوة 1: The body is painted for protect it from rust.","الغرض بـ to.","The body is painted to protect it from rust.",["to protect","for protect","protecting","to protecting"])],"The body is painted to protect it from rust.")
 add('u4-l2','مثال 2: السؤال','مجهول','How / parts / deliver','اسأل.',
  [Bd("الخطوة 1: How the parts are delivered?","are قبل الشيء.","How are the parts delivered?",["are the parts delivered","the parts are delivered","do the parts delivered","are the parts deliver"])],"How are the parts delivered?")
 add('u4-l2','مثال 3: by','فاعل','human workers','اسأل.',
  [Bd("الخطوة 1: Who is the body checked with?","by للفاعل.","Who is the body checked by?",["by","with","from","to"])],"Who is the body checked by?")
 add('u4-l3','مثال 1: which','ربط','the feed horn','اربط.',
  [Bd("الخطوة 1: The dish reflects the signal to the feed horn, who converts it.","للأشياء which.","The dish reflects the signal to the feed horn, which converts it.",["which","who","what","that it"])],"The dish reflects the signal to the feed horn, which converts it.")
 add('u4-l3','مثال 2: who','ربط','our technician','اربط.',
  [Bd("الخطوة 1: Contact our technician, which will repair it.","للأشخاص who.","Contact our technician, who will repair it.",["who","which","what","he"])],"Contact our technician, who will repair it.")
 add('u4-l3','مثال 3: الصفة المركبة','شرطة','13 amps','اكتب.',
  [Bd("الخطوة 1: It's a 13-amps fuse.","الوحدة مفردة.","It's a 13-amp fuse.",["13-amp","13-amps","13 amps","amps-13"])],"It's a 13-amp fuse.")
 add('u4-l4','مثال 1: التفضيل','وقود','harmful','أكمل.',
  [Bd("الخطوة 1: LPG is the less harmful fuel.","التفضيل: the least.","LPG is the least harmful fuel.",["the least","the less","the most less","less"])],"LPG is the least harmful fuel.")
 add('u4-l4','مثال 2: المجهول','عملية','loosen the spark plug','صِف.',
  [Bd("الخطوة 1: Then the spark plug loosened.","نحتاج is.","Then the spark plug is loosened.",["is loosened","loosened","is loosen","are loosened"])],"Then the spark plug is loosened.")
 add('u4-l4','مثال 3: one','هاتف','external hard drive','أكمل.',
  [Bd("الخطوة 1: There's with a cable, and there's a wireless.","نحتاج one.","There's one with a cable, and there's a wireless one.",["one … one","بلا one","it … it","ones … ones"])],"There's one with a cable, and there's a wireless one.")

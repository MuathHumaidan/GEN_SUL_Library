D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u1":{"title":"Action — الحركة والعمل","cards":[
 D("wheel gun · jack · nozzle · hose · socket · flap","أدوات فريق الصيانة وقطع السيارة.","ص 5"),
 L("Loosen the nuts. · Don't move the car.","التعليمة بفعل الأمر: الفعل أولاً بلا فاعل، والنهي بـ Don't.","ص 5"),
 L("The driver presses … / They loosen …","وصف خطوات تتكرر: المضارع البسيط، والمفرد + s.","ص 4"),
 D("loosen ↔ tighten · raise ↔ lower","أفعال متضادة في الصيانة.","ص 5"),
 L("Take them off. (لا: take off them)","الضمير بين الفعل والأداة في الفعل المركب.","ص 6"),
 L("I'm bringing them out now. / I've brought them out.","المستمر لما تفعله الآن، والتام لما أنجزته.","ص 6"),
 L("Have you … yet? / I haven't … yet.","yet في آخر سؤال المضارع التام ونفيه.","ص 7"),
 L("How do you start it? — By pulling the cord.","الطريقة: by + الفعل بـ ing.","ص 8"),
 L("using / by means of + اسم","الأداة التي يعمل بها الجهاز.","ص 9")]}}
LESS={
"u1-l1":{"match":[{"title":"وصّل الفعل بضده","pairs":[["loosen","tighten"],["raise","lower"],["put on","take off"],["bring out","take away"]]}]},
"u1-l2":{"match":[{"title":"وصّل التعليمة بالتأكيد","pairs":[["Take off the wheels.","I've taken them off."],["Lift up the car.","I've lifted it up."],["Bring out the tyres.","I've brought them out."],["Switch on the power.","I've switched it on."]]}]},
"u1-l3":{"match":[{"title":"وصّل الجهاز بطريقة تشغيله","pairs":[["outboard motor","by pulling the cord"],["ticket machine","by touching the screen"],["accelerator","by rotating the handle"],["voice-operated computer","by speaking to it"]]}]}}
ACTS={
"u1-l1":{"open":["Write three instructions for a job you know","Why is teamwork important in a pit stop?","Name a tool you use and what it does"],"exit":[
 {"q":"The opposite of loosen:","o":["tighten","raise","adjust","lower"],"c":0,"e":"ص 5."},
 {"q":"Checklist: ___ the car to the ground.","o":["Lower","Lowers","Lowering","You lower"],"c":0,"e":"ص 5."},
 {"q":"The driver ___ the button.","o":["presses","press","pressing","are pressing"],"c":0,"e":"ص 4."}]},
"u1-l2":{"open":["What have you done today?","A job you haven't finished yet","Phrases to gain more time"],"exit":[
 {"q":"Take ___ off.","o":["them","off them","they","their"],"c":0,"e":"ص 6."},
 {"q":"Have you adjusted it ___?","o":["yet","still","now","ago"],"c":0,"e":"ص 7."},
 {"q":"I'm ___ tightening the nuts.","o":["still","yet","ever","ago"],"c":0,"e":"ص 7."}]},
"u1-l3":{"open":["How do you start a device in your home?","A robot you would like to have","How does your phone know your face?"],"exit":[
 {"q":"You start it by ___ the cord.","o":["pulling","pull","pulls","to pull"],"c":0,"e":"ص 8."},
 {"q":"It works by means ___ sensors.","o":["of","by","with","from"],"c":0,"e":"ص 9."},
 {"q":"___ do you activate the alarm?","o":["How","What","Who","Where"],"c":0,"e":"ص 8."}]}}
PAGES={"u1-l1":(4,5),"u1-l2":(6,7),"u1-l3":(8,9)}
def build(add,T,Bd):
 add('u1-l1','مثال 1: فعل الأمر','قائمة','The mechanics take the wheels away.','حوّلها إلى تعليمة.',
  [Bd("الخطوة 1: You take the wheels away.","في القائمة نحذف الفاعل.","Take the wheels away.",["الفعل أولاً بلا فاعل","نبقي You","نضيف s","نستعمل ing"])],"Take the wheels away.")
 add('u1-l1','مثال 2: المفرد','وصف','The driver (slow) down.','أكمل.',
  [T("الخطوة 1: The driver = he."),Bd("الخطوة 2: The driver slow down.","المفرد + s.","The driver slows down.",["المفرد + s","الفعل كما هو","ing","did"])],"The driver slows down.")
 add('u1-l1','مثال 3: الضد','تعليمة','Loosen the nuts. → الأخيرة؟','اكتب.',
  [Bd("الخطوة 1: Lower the nuts.","ضد loosen هو tighten.","Tighten the nuts.",["tighten","lower","raise","adjust"])],"Tighten the nuts.")
 add('u1-l2','مثال 1: الضمير','فعل مركب','Take away the wheel.','استعمل ضميراً.',
  [Bd("الخطوة 1: Take away it.","الضمير بين الفعل والأداة.","Take it away.",["الضمير في الوسط","الضمير في الآخر","the it","them"])],"Take it away.")
 add('u1-l2','مثال 2: التام','تأكيد','Bring out the tyres.','أكّد أنك أنجزت.',
  [T("الخطوة 1: Right. I'm bringing them out now."),Bd("الخطوة 2: OK, I've bringed them out.","bring فعل شاذ.","OK, I've brought them out.",["brought","bringed","bring","bringing"])],"OK, I've brought them out.")
 add('u1-l2','مثال 3: yet','سؤال','adjust the air pressure','اسأل.',
  [Bd("الخطوة 1: Have you yet adjusted the air pressure?","yet في آخر السؤال.","Have you adjusted the air pressure yet?",["yet في الآخر","yet بعد you","still","already في الآخر"])],"Have you adjusted the air pressure yet?")
 add('u1-l3','مثال 1: by + ing','طريقة','pull the cord','اشرح.',
  [Bd("الخطوة 1: You start the motor by pull the cord.","بعد by الفعل بـ ing.","You start the motor by pulling the cord.",["pulling","pull","pulls","to pull"])],"You start the motor by pulling the cord.")
 add('u1-l3','مثال 2: السؤال','طريقة','the alarm','اسأل.',
  [Bd("الخطوة 1: How you activate the alarm?","السؤال بـ do.","How do you activate the alarm?",["How do you","How you","How does you","How are you"])],"How do you activate the alarm?")
 add('u1-l3','مثال 3: by means of','أداة','a wireless receiver','اكتب.',
  [T("الخطوة 1: It receives instructions"),Bd("الخطوة 2: by means using a wireless receiver.","by means of + اسم.","It receives instructions by means of a wireless receiver.",["by means of","by means using","using of","by means"])],"It receives instructions by means of a wireless receiver.")

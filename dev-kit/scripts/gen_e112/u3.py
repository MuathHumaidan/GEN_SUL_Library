D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u3":{"title":"Occupations — المهن","cards":[
 L("What do you do? / Who do you work for?","السؤال عن الوظيفة والشركة.","ص 15"),
 L("I'm responsible for / in charge of + noun / -ing","المسؤولية.","ص 15"),
 L("It's my job to + verb","المسؤولية.","ص 15"),
 D("studio / laboratory / call centre / factory","أماكن العمل.","ص 14"),
 L("I've worked here for … / since …","مدة العمل.","ص 90",l="u3-l1"),
 L("be flexible / have experience / be able to …","الصفات والمهارات.","ص 16"),
 L("need to / have to / don't need to","الضروري وغير الضروري.","ص 16"),
 L("can't → be able to","have to be able to speak …","ص 90",l="u3-l2"),
 D("punctual / patient / confident / qualified","صفات شخصية.","ص 18")]}}
LESS={
"u3-l1":{"match":[{"title":"وصّل الوظيفة بالمكان","pairs":[["graphic designer","studio"],["engineer","laboratory"],["customer service agent","call centre"],["sales representative","customers' offices"]]}]},
"u3-l2":{"match":[{"title":"وصّل الكلمة بما قبلها","pairs":[["flexible","be"],["experience","have"],["work in a team","be able to"],["organized","be"],["good computer skills","have"]]}]},
"u3-l3":{"match":[{"title":"وصّل الصفة بمعناها","pairs":[["punctual","never late"],["patient","stays calm"],["ambitious","wants to be successful"],["confident","sure about yourself"]]}]}}
ACTS={
"u3-l1":{"open":["Describe a job in your family","Where would you like to work?","What are you responsible for at home?"],"exit":[
 {"q":"I'm responsible ___ sales.","o":["for","of","to","at"],"c":0,"e":"ص 15."},
 {"q":"It's my job ___ new customers.","o":["to find","find","finding","for find"],"c":0,"e":"ص 15."},
 {"q":"I've worked here ___ 2020.","o":["since","for","from","at"],"c":0,"e":"ص 90."}]},
"u3-l2":{"open":["An ability you have","A job you would like and what you need for it","Can you work under pressure?"],"exit":[
 {"q":"You need to be ___.","o":["organized","experience","skills","patience"],"c":0,"e":"ص 16."},
 {"q":"You have to be able ___ speak English.","o":["to","for","can","—"],"c":0,"e":"ص 90."},
 {"q":"You ___ need a degree. We train you.","o":["don't","doesn't","not","aren't"],"c":0,"e":"ص 90."}]},
"u3-l3":{"open":["Greet a visitor at the airport","Which company would you call to buy a car?","Tell your story in four sentences"],"exit":[
 {"q":"Never late:","o":["punctual","patient","flexible","creative"],"c":0,"e":"ص 18."},
 {"q":"They help with legal problems:","o":["law firm","car dealer","ticket agent","estate agent"],"c":0,"e":"ص 19."},
 {"q":"I ___ there six years ago.","o":["started","have started","start","am starting"],"c":0,"e":"ص 19."}]}}
PAGES={"u3-l1":(14,15),"u3-l2":(16,17),"u3-l3":(18,19)}
def build(add,T,Bd):
 add('u3-l1','مثال 1: الشركة','عمل','شركة كهرباء.','أجب: Who do you work for?',
  [Bd("الخطوة 1: I work to a power company.","work for + الشركة.","I work for a power company.",["work for","work to","work at for","work of"])],"I work for a power company.")
 add('u3-l1','مثال 2: المسؤولية','مسؤولية','فحص المولدات.','اكتب.',
  [Bd("الخطوة 1: I'm responsible for check the generators.","responsible for + ing.","I'm responsible for checking the generators.",["for + ing","for + الفعل","to + الفعل","of + ing"])],"I'm responsible for checking the generators.")
 add('u3-l1','مثال 3: since','زمن','سبتمبر.','اكتب.',
  [Bd("الخطوة 1: I've worked here for September.","بداية: since.","I've worked here since September.",["since + بداية","for + بداية","from + بداية","in + بداية"])],"I've worked here since September.")
 add('u3-l2','مثال 1: have','مهارة','skills','أكمل.',
  [Bd("الخطوة 1: You need to be good communication skills.","skills اسم: have.","You need to have good communication skills.",["have + اسم","be + اسم","be able + اسم","can + اسم"])],"You need to have good communication skills.")
 add('u3-l2','مثال 2: غير ضروري','need','الخبرة غير ضرورية.','اكتب.',
  [Bd("الخطوة 1: You need not to have experience.","don't need to.","You don't need to have experience.",["don't need to","need not to","not need","doesn't need"])],"You don't need to have experience.")
 add('u3-l2','مثال 3: be able to','can','have to + can','صحّح.',
  [Bd("الخطوة 1: You have to can work under pressure.","be able to بعد have to.","You have to be able to work under pressure.",["be able to","can","could","able"])],"You have to be able to work under pressure.")
 add('u3-l3','مثال 1: صفة','صفة','هادئ حين يتأخر شيء.','ما الصفة؟',
  [Bd("الخطوة 1: He is punctual.","يبقى هادئاً: patient.","He is patient.",["patient","punctual","creative","ambitious"])],"He is patient.")
 add('u3-l3','مثال 2: شركة','شركة','مشكلة قانونية.','إلى من؟',
  [Bd("الخطوة 1: We should call an estate agent.","مشكلة قانونية: law firm.","We should go to a law firm.",["law firm","estate agent","car dealer","ticket agent"])],"We should go to a law firm.")
 add('u3-l3','مثال 3: الزمن','زمن','At the moment … (train)','أكمل.',
  [Bd("الخطوة 1: At the moment they train me.","الآن: المضارع المستمر.","At the moment they are training me.",["المضارع المستمر","المضارع البسيط","الماضي","المضارع التام"])],"At the moment they are training me to be a manager.")

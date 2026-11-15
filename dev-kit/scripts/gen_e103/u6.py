D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u6":{"title":"Procedures — الإجراءات","cards":[
 L("Helmets must be worn here.","الفعل المساعد + be + التصريف الثالث.","ص 42"),
 L("Hand trucks must not be overloaded.","النفي.","ص 42"),
 L("This item needs to be handled carefully. → You need to handle it.","من المجهول إلى المعلوم.","ص 43"),
 D("Fragile · This way up · Keep dry · Perishable · Keep frozen","ملصقات الشحن.","ص 43"),
 L("What should we do if …? — You should …","السؤال عن الإجراء.","ص 45"),
 L("New equipment should be purchased.","should + passive في التوصيات.","ص 45"),
 L("Take the third exit from the roundabout.","الاتجاهات.","ص 46"),
 L("You'll see a police station on your left. Turn …","الموقف ثم التعليمة.","ص 46"),
 L("The depth gauge is designed to indicate the depth.","الوظيفة.","ص 48")]}}
LESS={
"u6-l1":{"match":[{"title":"وصّل الملصق بمعناه","pairs":[["FRAGILE","it breaks easily"],["PERISHABLE","it goes bad quickly"],["KEEP DRY","protect it from water"],["KEEP FROZEN","keep it in a freezer"]]}]},
"u6-l2":{"match":[{"title":"وصّل الموقف بالإجراء","pairs":[["Diver trapped?","Free diver with knife."],["Air supply low?","Give extra gas cylinder."],["Not breathing?","Give artificial respiration."],["Serious injury?","Call helicopter."]]}]},
"u6-l3":{"match":[{"title":"وصّل المعلم بمعناه","pairs":[["roundabout","cars go round it"],["flyover","a road over another road"],["underpass","a road under another road"],["slip road","a road on or off the motorway"]]}]},
"u6-l4":{"match":[{"title":"وصّل القطعة بوظيفتها","pairs":[["cylinder","stores air"],["depth gauge","shows the depth"],["harness","fastens the equipment"],["diving mask","helps the diver see"]]}]}}
ACTS={
"u6-l1":{"open":["A hazard in your workshop","A safety rule in your college","What does FRAGILE mean?"],"exit":[
 {"q":"Helmets must ___ worn.","o":["be","been","to be","being"],"c":0,"e":"ص 42."},
 {"q":"This item needs to be ___ carefully.","o":["handled","handle","handling","handles"],"c":0,"e":"ص 43."},
 {"q":"It must not be dropped. = You ___ drop it.","o":["mustn't","don't must","not must","must to not"],"c":0,"e":"ص 43."}]},
"u6-l2":{"open":["What should we do if there is a fire?","A rule you think is important","First aid you know"],"exit":[
 {"q":"What ___ we do if the diver is trapped?","o":["should","must to","are","did"],"c":0,"e":"ص 45."},
 {"q":"You should ___ them with a knife.","o":["free","to free","freed","freeing"],"c":0,"e":"ص 45."},
 {"q":"New equipment should ___ purchased.","o":["be","been","to be","is"],"c":0,"e":"ص 45."}]},
"u6-l3":{"open":["Directions from your house to the college","A roundabout in your city","A landmark near the college"],"exit":[
 {"q":"Take the second ___ from the roundabout.","o":["exit","turning off","road on","way out of"],"c":0,"e":"ص 46."},
 {"q":"Turn right ___ the T-junction.","o":["at","in","on","by"],"c":0,"e":"ص 46."},
 {"q":"A road that goes over another road:","o":["flyover","underpass","slip road","aisle"],"c":0,"e":"ص 46."}]},
"u6-l4":{"open":["A useful device in your field","Describe a fire extinguisher","A safety rule for divers"],"exit":[
 {"q":"The cylinder is used ___ air.","o":["to store","for store","storing","to storing"],"c":0,"e":"ص 48."},
 {"q":"A wheel wrench is a ___ which tightens nuts.","o":["tool","vehicle","technician","system"],"c":0,"e":"ص 50."},
 {"q":"Boxes must not ___ in the aisles.","o":["be stacked","stacked","stack","be stack"],"c":0,"e":"ص 50."}]}}
PAGES={"u6-l1":(42,43),"u6-l2":(44,45),"u6-l3":(46,47),"u6-l4":(48,51)}
def build(add,T,Bd):
 add('u6-l1','مثال 1: قاعدة','مجهول','wear helmets','اكتب القاعدة.',
  [Bd("الخطوة 1: Helmets must worn.","نحتاج be.","Helmets must be worn.",["must be worn","must worn","must be wear","must to be worn"])],"Helmets must be worn.")
 add('u6-l1','مثال 2: مفرد','need','handle carefully','أكمل.',
  [Bd("الخطوة 1: This item need to be handled carefully.","مفرد: needs.","This item needs to be handled carefully.",["needs","need","is need","needing"])],"This item needs to be handled carefully.")
 add('u6-l1','مثال 3: المعلوم','خطاب','It must not be dropped.','حوّل.',
  [Bd("الخطوة 1: You mustn't to drop it.","لا to بعد must.","You mustn't drop it.",["mustn't drop","mustn't to drop","mustn't dropped","don't must drop"])],"You mustn't drop it.")
 add('u6-l2','مثال 1: السؤال','طوارئ','diver trapped','اسأل.',
  [Bd("الخطوة 1: What we should do if the diver is trapped?","should قبل we.","What should we do if the diver is trapped?",["What should we do","What we should do","What should do we","What do we should"])],"What should we do if the diver is trapped?")
 add('u6-l2','مثال 2: الجواب','إجراء','free with a knife','أجب.',
  [Bd("الخطوة 1: You should to free them with a knife.","لا to بعد should.","You should free them with a knife.",["should free","should to free","should freed","should freeing"])],"You should free them with a knife.")
 add('u6-l2','مثال 3: توصية','تقرير','purchase equipment','اكتب.',
  [Bd("الخطوة 1: New equipment should purchased.","نحتاج be.","New equipment should be purchased.",["should be purchased","should purchased","should be purchase","should been purchased"])],"New equipment should be purchased.")
 add('u6-l3','مثال 1: الدوار','اتجاه','third exit','أكمل.',
  [Bd("الخطوة 1: Take the three exit from the roundabout.","الرقم الترتيبي.","Take the third exit from the roundabout.",["third","three","the three","thirdly"])],"Take the third exit from the roundabout.")
 add('u6-l3','مثال 2: التقاطع','حرف جر','T-junction','أكمل.',
  [Bd("الخطوة 1: Turn right in the T-junction.","at.","Turn right at the T-junction.",["at","in","on","to"])],"Turn right at the T-junction.")
 add('u6-l3','مثال 3: الموقف','وصف','police station','أكمل.',
  [Bd("الخطوة 1: You see a police station on your left.","المستقبل: You'll see.","You'll see a police station on your left.",["You'll see","You see","You saw","You seeing"])],"You'll see a police station on your left.")
 add('u6-l4','مثال 1: الوظيفة','for','demand valve','صف.',
  [Bd("الخطوة 1: The demand valve is for control the flow of air.","for + ing.","The demand valve is for controlling the flow of air to the diver.",["controlling","control","to control","controlled"])],"The demand valve is for controlling the flow of air to the diver.")
 add('u6-l4','مثال 2: التعريف','who','sub-sea mechanic','عرّف.',
  [Bd("الخطوة 1: A sub-sea mechanic is a technician which repairs pipes.","شخص: who.","A sub-sea mechanic is a technician who repairs underwater pipes and machines.",["who","which","what","where"])],"A sub-sea mechanic is a technician who repairs underwater pipes and machines.")
 add('u6-l4','مثال 3: المجهول','قاعدة','You must carry two cylinders.','حوّل.',
  [Bd("الخطوة 1: Two air cylinders must carried.","نحتاج be.","Two air cylinders must be carried at all times during a dive.",["must be carried","must carried","must be carry","must to be carried"])],"Two air cylinders must be carried at all times during a dive.")

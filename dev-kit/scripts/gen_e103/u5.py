D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u5":{"title":"Descriptions — الأوصاف","cards":[
 L("What's it for? — It's for finding lost items.","for + الفعل بـ ing.","ص 37"),
 L("You use it to charge batteries.","to + الفعل كما هو.","ص 37"),
 L("The fan acts as a propeller.","act as + اسم.","ص 37"),
 D("calculator · generator · transmitter · receiver","أسماء الفاعل -er / -or.","ص 37"),
 L("It looks like a TV transmitter.","looks like + اسم.","ص 38"),
 L("It's an L-shaped plan.","الصفة -shaped.","ص 38"),
 D("circle → circular · cylinder → cylindrical","الأشكال وصفاتها.","ص 39"),
 L("Inventors are people who create new devices.","التعريف: Word + be + Type + who/which/that.","ص 40"),
 D("device · tool · instrument · vehicle · system","كلمات النوع.","ص 41")]}}
LESS={
"u5-l1":{"match":[{"title":"وصّل الفعل باسم الفاعل","pairs":[["generate","generator"],["receive","receiver"],["transmit","transmitter"],["conduct","conductor"]]}]},
"u5-l2":{"match":[{"title":"وصّل الاسم بصفته","pairs":[["circle","circular"],["cone","conical"],["sphere","spherical"],["triangle","triangular"]]}]},
"u5-l3":{"match":[{"title":"وصّل الشيء بنوعه","pairs":[["an ammeter","instrument"],["a hovercraft","vehicle"],["a torque wrench","tool"],["GPS","system"]]}]}}
ACTS={
"u5-l1":{"open":["A useful device you use every day","An unusual use for a tin can","A new invention you want"],"exit":[
 {"q":"It's for ___ lost items.","o":["finding","find","to find","found"],"c":0,"e":"ص 37."},
 {"q":"You use it ___ charge batteries.","o":["to","for","as","by"],"c":0,"e":"ص 37."},
 {"q":"transmit →","o":["transmitter","transmiter","transmittor","transmitor"],"c":0,"e":"ص 37."}]},
"u5-l2":{"open":["A famous building in Saudi Arabia","What shape is your phone?","Describe a building without saying its name"],"exit":[
 {"q":"The skyscraper is shaped ___ a sail.","o":["like","as","of","to"],"c":0,"e":"ص 38."},
 {"q":"TVs have ___ screens.","o":["rectangular","rectangle","rectangles","rectangled"],"c":0,"e":"ص 39."},
 {"q":"It's an ___ plan.","o":["L-shaped","L-shape","L shaped of","L-shapes"],"c":0,"e":"ص 38."}]},
"u5-l3":{"open":["Define a tool in one sentence","An invention that helps people","A system in your college"],"exit":[
 {"q":"Inventors are people ___ create new devices.","o":["who","which","what","where"],"c":0,"e":"ص 40."},
 {"q":"An ammeter is an ___.","o":["instrument","vehicle","technician","tool"],"c":0,"e":"ص 41."},
 {"q":"able to be seen =","o":["visible","audible","submerged","digital"],"c":0,"e":"ص 41."}]}}
PAGES={"u5-l1":(36,37),"u5-l2":(38,39),"u5-l3":(40,41)}
def build(add,T,Bd):
 add('u5-l1','مثال 1: for + ing','استعمال',"What's it for? (find)",'أجب.',
  [Bd("الخطوة 1: It's for find lost items.","بعد for الفعل بـ ing.","It's for finding lost items.",["finding","find","to find","found"])],"It's for finding lost items.")
 add('u5-l1','مثال 2: to + الفعل','غرض','charge batteries','أكمل.',
  [Bd("الخطوة 1: You use it to charging batteries.","بعد to الفعل كما هو.","You use it to charge batteries.",["to charge","to charging","for charge","charging"])],"You use it to charge batteries.")
 add('u5-l1','مثال 3: اسم الفاعل','er','receive','اكتب الاسم.',
  [Bd("الخطوة 1: receiveer","احذف e.","receiver",["receiver","receiveer","receivor","receiving"])],"receiver")
 add('u5-l2','مثال 1: looks like','تشبيه','TV transmitter','صف.',
  [Bd("الخطوة 1: The building looks a TV transmitter.","نحتاج like.","The building looks like a TV transmitter.",["looks like","looks","look like","is like"])],"The building looks like a TV transmitter.")
 add('u5-l2','مثال 2: الصفة','شكل','rectangle','أكمل.',
  [Bd("الخطوة 1: TVs have rectangle screens.","قبل الاسم صفة.","TVs have rectangular screens.",["rectangular","rectangle","rectangles","rectangling"])],"TVs have rectangular screens.")
 add('u5-l2','مثال 3: -shaped','حرف','in the shape of an L','حوّل.',
  [Bd("الخطوة 1: It's a L-shaped plan.","L تبدأ بصوت علة.","It's an L-shaped plan.",["an","a","the","بلا أداة"])],"It's an L-shaped plan.")
 add('u5-l3','مثال 1: who','شخص','inventors','عرّف.',
  [Bd("الخطوة 1: Inventors are people which create new devices.","للأشخاص who.","Inventors are people who create new devices.",["who","which","what","where"])],"Inventors are people who create new devices.")
 add('u5-l3','مثال 2: النوع','قياس','ammeter','عرّف.',
  [Bd("الخطوة 1: An ammeter is a vehicle which measures current.","أداة قياس.","An ammeter is an instrument which measures electric current.",["instrument","vehicle","technician","system"])],"An ammeter is an instrument which measures electric current.")
 add('u5-l3','مثال 3: which','شيء','LifeGuard','عرّف.',
  [Bd("الخطوة 1: LifeGuard is an alarm system who can find an MOB.","للأشياء which.","LifeGuard is an alarm system which can find an MOB.",["which","who","what","where"])],"LifeGuard is an alarm system which can find an MOB.")

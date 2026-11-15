D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u2":{"title":"Companies — الشركات","cards":[
 D("designer / manufacturer / wholesaler / retailer","من المصمم إلى البائع.","ص 10"),
 D("exporter / importer","يبيع للخارج / يشتري من الخارج.","ص 10"),
 L("verb + er / or","design → designer · act → actor","ص 89",l="u2-l1"),
 D("estate agent / law firm / car dealer","أسماء مركبة لأنواع الشركات.","ص 11"),
 L("We're based in … / We specialize in …","وصف الشركة.","ص 11"),
 L("Passive present: is / are + past participle","Expert advice is offered.","ص 13"),
 L("Passive past: was / were + past participle","The company was established in 1930.","ص 13"),
 L("When was … established?","السؤال بالمبني للمجهول.","ص 13")]}}
LESS={
"u2-l1":{"match":[{"title":"وصّل الفعل بالشخص","pairs":[["design","designer"],["import","importer"],["manufacture","manufacturer"],["translate","translator"],["act","actor"]]}]},
"u2-l2":{"match":[{"title":"وصّل الجملة بسؤالها","pairs":[["It was established in 1930.","When was it established?"],["It is based in London.","Where is it based?"],["It was started by one man.","Who was it started by?"],["26 branches were opened.","How many branches were opened?"]]}]}}
ACTS={
"u2-l1":{"open":["A big company in your town","What does a wholesaler do?","Describe your college in two sentences"],"exit":[
 {"q":"It sells to customers in shops:","o":["retailer","wholesaler","designer","importer"],"c":0,"e":"ص 10."},
 {"q":"export →","o":["exporter","exportor","exported","exportman"],"c":0,"e":"ص 89."},
 {"q":"They help you buy a house:","o":["estate agent","law firm","car dealer","ticket agent"],"c":0,"e":"ص 11."}]},
"u2-l2":{"open":["When was your college established?","A company you would like to work for","Write one passive sentence about your city"],"exit":[
 {"q":"The company ___ in 1990.","o":["was started","started","is start","were started"],"c":0,"e":"ص 13."},
 {"q":"Our cars ___ in Japan.","o":["are made","is made","made","are make"],"c":0,"e":"ص 88."},
 {"q":"When ___ the offices opened?","o":["were","was","did","are"],"c":0,"e":"ص 88."}]}}
PAGES={"u2-l1":(10,11),"u2-l2":(12,13)}
def build(add,T,Bd):
 add('u2-l1','مثال 1: تكوين الكلمة','كلمة','translate','كوّن الشخص.',
  [Bd("الخطوة 1: translateer","المنتهي بـ e: or بعد حذف e.","translator",["translator","translateer","translatist","translationer"])],"translator")
 add('u2-l1','مثال 2: مركب','مركب','وكيل سيارات.','اكتب.',
  [Bd("الخطوة 1: cars dealer","الأول مفرد.","car dealer",["car dealer","cars dealer","dealer car","dealers car"])],"car dealer")
 add('u2-l1','مثال 3: الإعلان','إعلان','مقرنا جدة.','اكتب.',
  [Bd("الخطوة 1: We based in Jeddah.","be + based: We're based.","We're based in Jeddah.",["We're based in","We based in","We base at","We are base in"])],"We're based in Jeddah.")
 add('u2-l2','مثال 1: الماضي','passive','Somebody opened two offices.','حوّل.',
  [Bd("الخطوة 1: Two offices was opened.","جمع: were.","Two offices were opened.",["were + opened","was + opened","opened فقط","are open"])],"Two new offices were opened in 2020.")
 add('u2-l2','مثال 2: المضارع','passive','We offer expert advice.','حوّل.',
  [Bd("الخطوة 1: Expert advice offers to our clients.","be + التصريف الثالث.","Expert advice is offered to our clients.",["is offered","offers","is offer","offered"])],"Expert advice is offered to our clients.")
 add('u2-l2','مثال 3: السؤال','سؤال','متى أُسست؟','اسأل.',
  [Bd("الخطوة 1: When the company was established?","be قبل الموضوع.","When was the company established?",["was قبل الموضوع","الموضوع قبل was","did established","بلا was"])],"When was the company established?")

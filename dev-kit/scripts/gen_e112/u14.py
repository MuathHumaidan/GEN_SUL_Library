D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u14":{"title":"Getting help — طلب المساعدة","cards":[
 L("First, … Then, … Next, … After that, … Finally, …","ظروف ترتيب الخطوات.","ص 66"),
 L("Imperative: Press the button.","الأمر: الفعل كما هو بلا فاعل.","ص 111",l="u14-l1"),
 L("Don't + verb","النفي في التعليمات: Don't leave the lid open.","ص 111",l="u14-l1"),
 D("select / choose / click / enter / note","أفعال الحجز على الإنترنت.","ص 66"),
 L("I think you should …","نصيحة بفعل شيء.","ص 68"),
 L("I don't think you should …","نصيحة بعدم فعل شيء.","ص 68"),
 L("Why don't you …?","اقتراح بسؤال.","ص 68"),
 D("in charge of / responsible for / look after","عبارات المسؤولية في العمل.","ص 68")]}}
LESS={
"u14-l1":{"order":[{"title":"رتّب تعليمات آلة التصوير","steps":["First, lift the lid.","Then, put the paper face down.","Next, close the lid.","After that, enter the number of copies.","Then, press the green button.","Finally, take your copy and the original."]}],
 "match":[{"title":"وصّل المعلومة بنوعها","pairs":[["7.40 a.m.","time"],["29 August","date"],["Visa","payment"],["EQ485/3","booking reference"],["1 adult","number of people"]]}]},
"u14-l2":{"match":[{"title":"وصّل المشكلة بالنصيحة","pairs":[["My phone doesn't work.","Why don't you ask for a new one?"],["I'm not feeling well.","I think you should go home early."],["I can mend the copier.","I don't think you should do that."],["My computer's crashed.","I think you should call IT support."]]}]}}
ACTS={
"u14-l1":{"open":["Explain how to make tea in three steps","Something you learned to do recently","How do you book a ticket online?"],"exit":[
 {"q":"The first step:","o":["First,","Finally,","After that,","Next,"],"c":0,"e":"ص 66."},
 {"q":"___ the green button.","o":["Press","Pressing","To press","Presses"],"c":0,"e":"ص 111."},
 {"q":"___ use your phone on the plane.","o":["Don't","Not","No","Doesn't"],"c":0,"e":"ص 111."}]},
"u14-l2":{"open":["A problem you had at college","Who do you ask for help with a computer?","Give advice: I'm always tired."],"exit":[
 {"q":"I think you ___ call IT.","o":["should","should to","shoulds","to should"],"c":0,"e":"ص 68."},
 {"q":"Why ___ you ask your boss?","o":["don't","not","doesn't","no"],"c":0,"e":"ص 68."},
 {"q":"She is responsible ___ the office.","o":["for","of","to","at"],"c":0,"e":"ص 68."}]}}
PAGES={"u14-l1":(66,67),"u14-l2":(68,69)}
def build(add,T,Bd):
 add('u14-l1','مثال 1: الخطوة الأولى','ترتيب','رفع الغطاء.','اكتب.',
  [Bd("الخطوة 1: Finally, lift the lid.","أول خطوة: First.","First, lift the lid.",["First للأولى","Finally للأولى","After that للأولى","بلا ترتيب"])],"First, lift the lid.")
 add('u14-l1','مثال 2: النفي','أمر','لا تستعمل الهاتف.','اكتب.',
  [Bd("الخطوة 1: Not use your phone during the flight.","النفي: Don't + الفعل.","Don't use your phone during the flight.",["Don't + الفعل","Not + الفعل","No + الفعل","Doesn't + الفعل"])],"Don't use your phone during the flight.")
 add('u14-l1','مثال 3: Please','أمر','أطفئ الحاسوب بأدب.','اكتب.',
  [Bd("الخطوة 1: Please to switch off your laptop.","بعد Please الفعل بلا to.","Please switch off your laptop.",["Please + الفعل","Please + to","Please + ing","Please + s"])],"Please switch off your laptop.")
 add('u14-l2','مثال 1: نصيحة','should','الكمبيوتر تعطل.','انصح.',
  [Bd("الخطوة 1: I think you should to call IT support.","بعد should بلا to.","I think you should call IT support.",["should + الفعل","should + to","should + ing","shoulds"])],"I think you should call IT support.")
 add('u14-l2','مثال 2: نفي','نصيحة','يريد ترك العمل.','انصح بالعكس.',
  [Bd("الخطوة 1: I think you don't should leave.","النفي مع think.","I don't think you should leave.",["النفي مع think","النفي مع should","بلا نفي","don't should"])],"I don't think you should leave.")
 add('u14-l2','مثال 3: Why don\'t you','اقتراح','يحتاج ورقاً.','اقترح.',
  [Bd("الخطوة 1: Why you don't ask Karen?","Why don't you …?","Why don't you ask Karen?",["Why don't you","Why you don't","Why not you","Why doesn't you"])],"Why don't you ask Karen?")

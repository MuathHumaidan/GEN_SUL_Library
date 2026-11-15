D=lambda f,b,ref,k='def',l=None:dict({"k":k,"f":f,"b":b,"ref":ref},**({"l":l} if l else {}))
L=lambda f,b,ref,l=None:D(f,b,ref,'law',l)
UNIT={"u4":{"title":"Products — المنتجات","cards":[
 D("fast ↔ slow / reliable ↔ unreliable","صفات الأجهزة وأضدادها.","ص 20"),
 L("too + adjective","This PC is too old.","ص 20"),
 L("not + adjective + enough","The screen isn't big enough.","ص 20"),
 L("so / because","so للنتيجة، because للسبب.","ص 92",l="u4-l1"),
 L("one / ones","I need a new one.","ص 92",l="u4-l1"),
 D("features / benefits","الميزات / الفوائد للزبون.","ص 22"),
 L("This means that … / This enables you to …","شرح الفائدة.","ص 22"),
 L("You'll be able to … / You don't need to …","شرح الفائدة.","ص 22")]}}
LESS={
"u4-l1":{"match":[{"title":"وصّل الصفة بضدها","pairs":[["fast","slow"],["light","heavy"],["quiet","noisy"],["flexible","inflexible"],["modern","old-fashioned"]]}]},
"u4-l2":{"match":[{"title":"وصّل الميزة بالفائدة","pairs":[["easy-to-use","You don't need to spend hours learning it."],["reliable","It won't stop working."],["fast","You don't have to wait."],["up-to-date","You can use it with modern computers."]]}]}}
ACTS={
"u4-l1":{"open":["Something old at home you want to change","Describe your phone with two adjectives","What does your classroom need?"],"exit":[
 {"q":"The opposite of noisy:","o":["quiet","heavy","slow","ugly"],"c":0,"e":"ص 20."},
 {"q":"It isn't ___.","o":["fast enough","enough fast","too fast enough","fast too"],"c":0,"e":"ص 92."},
 {"q":"I need a new PC ___ this one is too slow.","o":["because","so","but","and"],"c":0,"e":"ص 92."}]},
"u4-l2":{"open":["A feature of your phone and its benefit","Which presentation equipment do you like?","Sell your pen to a classmate"],"exit":[
 {"q":"This enables you ___ it easily.","o":["to use","use","using","can use"],"c":0,"e":"ص 93."},
 {"q":"You don't need ___ batteries.","o":["to buy","buy","buying","bought"],"c":0,"e":"ص 93."},
 {"q":"A benefit:","o":["You can move it easily.","It has wheels.","It is grey.","It is new."],"c":0,"e":"ص 22."}]}}
PAGES={"u4-l1":(20,21),"u4-l2":(22,23)}
def build(add,T,Bd):
 add('u4-l1','مثال 1: too','شكوى','طابعة صاخبة.','اشتكِ.',
  [Bd("الخطوة 1: The printer is too quiet.","too مع الصفة السلبية.","The printer is too noisy.",["too + سلبية","too + إيجابية","enough + سلبية","very quiet"])],"The printer is too noisy.")
 add('u4-l1','مثال 2: enough','شكوى','شاشة صغيرة.','اشتكِ.',
  [Bd("الخطوة 1: The screen isn't enough big.","enough بعد الصفة.","The screen isn't big enough.",["صفة + enough","enough + صفة","too + enough","بلا not"])],"The screen isn't big enough.")
 add('u4-l1','مثال 3: because','سبب','حاسوب بطيء.','اطلب.',
  [Bd("الخطوة 1: I need a new PC so this one is too slow.","السبب: because.","I need a new PC because this one is too slow.",["because للسبب","so للسبب","but","and"])],"I need a new PC because this one is too slow.")
 add('u4-l2','مثال 1: enables','فائدة','خفيف.','اكتب الفائدة.',
  [Bd("الخطوة 1: This enables you carry it easily.","enables you to.","This enables you to carry it easily.",["enables you to","enables you","enables to you","enable you"])],"This enables you to carry it easily.")
 add('u4-l2','مثال 2: need','فائدة','الكوابل موجودة.','اكتب الفائدة.',
  [Bd("الخطوة 1: You don't need buy extra cables.","don't need to.","You don't need to buy extra cables.",["need to","need","needing","needs"])],"You don't need to buy extra cables.")
 add('u4-l2','مثال 3: be able','فائدة','You will able to …','صحّح.',
  [Bd("الخطوة 1: You will able to send emails quickly.","will be able to.","You will be able to send emails quickly.",["will be able to","will able to","will can","will to"])],"You will be able to send emails quickly.")

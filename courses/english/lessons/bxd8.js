/* التمارين المقابلة — الوحدة 8 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وعدد بنوده وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),T=(q,...a)=>({q,a}),N0=(a,b)=>window.ENK.ab(a,b);
/* ===== 8.1 Recent incidents ===== */
BX.add('u8-l1',[
 {n:1,ref:'ص 58',st:1,kind:'speak',goal:'مع زميلك: اذكرا خمس مشكلات شائعة في السيارات، واستعملا المضارع التام.',
  useful:['The car has broken down.','I have lost the key.','The battery has gone flat.','A tyre has burst.','The brakes have stopped working.'],
  model:[['A',"What's the problem?"],['B','My car has broken down.'],['A','What has happened?'],['B','I think the battery has gone flat.']]},
 {n:4,ref:'ص 58',st:1,kind:'typ',intro:'أكمل كل جملة بكلمتين: have/has + التصريف الثالث للفعل بين القوسين.',items:[
  T('The printer ___ (stop). It isn\'t working.','has stopped'),T('Somebody ___ (take) my phone charger.','has taken'),T('Oh no! We ___ (lose) the office key.','have lost'),
  T('The picture ___ (fall) off the wall.','has fallen'),T('Ali ___ (cut) his finger on the glass.','has cut'),T('They ___ (sell) the old car.','have sold')]},
 {n:5,ref:'ص 58',st:2,kind:'typ',intro:'اكتب التصريف الثالث لكل فعل. انتبه: بعضها شاذ (لا ينتهي بـ ed).',items:[
  T('go','gone'),T('see','seen'),T('do','done'),T('make','made'),T('find','found'),T('give','given'),T('build','built'),
  T('fix','fixed'),T('open','opened'),T('start','started'),T('forget','forgotten'),T('leave','left'),T('finish','finished')]},
 {n:6,ref:'ص 59',st:3,kind:'typ',intro:'المشرف يسأل الفني بـ Have you…? والفني يجيب جواباً قصيراً حسب العلامة ✓ أو ✗. اكتب السؤال والجواب.',items:[
  T('(check the brakes ✓)','Have you checked the brakes? Yes, I have.'),T('(change the oil ✗)',"Have you changed the oil? No, I haven't."),
  T('(clean the windows ✓)','Have you cleaned the windows? Yes, I have.'),T('(fix the light ✗)',"Have you fixed the light? No, I haven't."),
  T('(order the new tyres ✓)','Have you ordered the new tyres? Yes, I have.'),T('(test the engine ✗)',"Have you tested the engine? No, I haven't.")]},
 {n:7,ref:'ص 59',st:4,kind:'choose',intro:'لعبة الذاكرة: قارن «قبل» و«الآن»، واختر الجملة التي تصف ما حدث.',items:[
  {q:'Before: the window was closed. Now: it is open.',opts:[['Someone has opened the window.',1],['Someone opens the window.',0]]},
  {q:'Before: there were four chairs. Now: there are three.',opts:[['Someone has taken a chair.',1],['Someone took a chair yesterday.',0]]},
  {q:'Before: the light was off. Now: it is on.',opts:[['Someone has switched on the light.',1],['Someone has switched off the light.',0]]},
  {q:'Before: the cup was on the table. Now: it is on the floor.',opts:[['The cup has fallen on the floor.',1],['The cup is falling on the floor.',0]]},
  {q:'Before: the box was full. Now: it is empty.',opts:[['Someone has emptied the box.',1],['Someone has filled the box.',0]]}]},
 {n:8,ref:'ص 59',st:4,kind:'speak',goal:'الساعة الآن 9:30. في ورشة الكلية حدثت أشياء منذ 9:25. صفها لزميلك بالمضارع التام.',
  card:'<ul lang="en" dir="ltr"><li>a trainee — drop — a box of screws</li><li>the power — go off</li><li>the teacher — call — the technician</li><li>someone — open — the windows</li></ul>',
  useful:['A trainee has dropped a box of screws.','The power has gone off.','The teacher has called the technician.','Someone has opened the windows.']}
]);
/* ===== 8.2 Damage and loss ===== */
BX.add('u8-l2',[
 {n:1,ref:'ص 60',st:1,kind:'speak',goal:'هل عندك شيء تالف في البيت أو في السيارة؟ صفه لزميلك.',
  useful:['My phone screen is cracked.','The car door is dented.','My bag is torn.','The cable is cut.','A button is missing.']},
 {n:2,ref:'ص 60',st:1,kind:'match',intro:'وصّل كل فعل من أفعال التلف الثمانية بالموقف المناسب.',pairs:[
  ['bend','You push a metal spoon and it is not straight now.'],['break','A glass falls on the floor and goes into pieces.'],['burn','You leave the bread in the oven too long.'],['crack','A line appears on your phone screen.'],
  ['cut','A knife goes through the cable.'],['dent','A ball hits the car door and makes a hollow.'],['scratch','A key leaves a thin line on the car paint.'],['tear','You pull a paper and it opens into two parts.']]},
 {n:3,ref:'ص 60',st:2,kind:'listen',intro:'استمع إلى فني يفحص جهاز لابتوب، ثم صحّح قائمة الفحص.',
  text:"OK, let's check the laptop. The screen is scratched, but it isn't cracked. The keyboard is OK, but two keys are missing. The cover is dented on one corner. The charger cable is cut, so it doesn't work. And the user manual is torn.",
  then:{kind:'gaps',items:[A('Screen: ___',['cracked','scratched'],1),A('Keyboard: two keys are ___',['missing','broken'],0),A('Cover: ___ on one corner',['dented','burnt'],0),
   A('Charger cable: ___',['cut','bent'],0),A('Charger: it ___ work',['does','doesn\'t'],1),A('User manual: ___',['torn','missing'],0)]}},
 {n:5,ref:'ص 60',st:2,kind:'typ',intro:'كوّن جملاً عن الضرر والأشياء الناقصة من الملاحظات.',items:[
  T('(the screen — scratched)','The screen is scratched.'),T('(two keys — missing)','Two keys are missing.'),T('(the cover — dented)','The cover is dented.'),
  T('(the cable — cut)','The cable is cut.'),T('(the battery — missing)','The battery is missing.')]},
 {n:6,ref:'ص 61',st:2,kind:'typ',intro:'أعد كتابة الجملة بالتركيز على النتيجة (الشيء + is + الصفة).',items:[
  T('Someone has scratched the table.','The table is scratched.'),T('The heat has bent the plastic ruler.','The plastic ruler is bent.'),T('The fire has burnt the kitchen door.','The kitchen door is burnt.'),
  T('A stone has cracked the windscreen.','The windscreen is cracked.'),T('A car has dented the gate.','The gate is dented.'),T('The dog has torn the curtain.','The curtain is torn.')]},
 {n:7,ref:'ص 61',st:2,kind:'gaps',intro:'أكمل الجمل بالصفة المناسبة.',items:[
  A('The side of the fridge is ___. It has a hollow in it.',['dented','torn'],0),A('My sunglasses are ___. There are thin lines on them.',['scratched','burnt'],0),
  A('The wall is ___. There is a long line in it.',['cracked','bent'],0),A('The headphone wire is ___. Someone used scissors.',['cut','dented'],0),
  A('The bike wheel is ___. It isn\'t round now.',['bent','cracked'],0),A('My jacket is ___. It caught on a nail.',['torn','scratched'],0)]},
 {n:8,ref:'ص 61',st:3,kind:'typ',intro:'أعد كتابة جمل التمرين 7 بـ There\'s a … أو There are some ….',items:[
  T('The side of the fridge is dented.',"There's a dent in the side of the fridge."),T('My sunglasses are scratched.','There are some scratches on my sunglasses.'),
  T('The wall is cracked.',"There's a crack in the wall."),T('The headphone wire is cut.',"There's a cut in the headphone wire."),
  T('The bike wheel is bent.',"There's a bend in the bike wheel."),T('My jacket is torn.',"There's a tear in my jacket.")]},
 {n:9,ref:'ص 61',st:3,kind:'speak',goal:'مهمة ثنائية بمعلومات جديدة: سيارتا الطالبين بهما أضرار. كل واحد يسأل عن أضرار سيارة زميله ويرسمها.',
  card:N0('<span lang="en" dir="ltr">Front bumper: dented<br>Nearside mirror: missing<br>Rear window: cracked</span>','<span lang="en" dir="ltr">Bonnet: scratched<br>Offside door: dented<br>Front light: broken</span>'),
  useful:['Is the bumper damaged?','Yes, it is. It\'s dented.','Is anything missing?','The nearside mirror is missing.']}
]);
/* ===== 8.3 Past events ===== */
BX.add('u8-l3',[
 {n:1,ref:'ص 62',st:1,kind:'match',intro:'متى حدث هذا لأول مرة؟ وصّل كل حدث بالسنة.',pairs:[
  ['the first car with an engine (Benz)','1886'],['the first plane flight (Wright brothers)','1903'],['the first email','1971'],['the first mobile phone call','1973'],
  ['the first Arab astronaut in space','1985'],['the first website','1991'],['the first text message (SMS)','1992'],['the first Google search engine','1998'],['the first video on YouTube','2005'],['the first iPhone','2007']]},
 {n:2,ref:'ص 62',st:1,kind:'speak',goal:'قارن إجاباتك في التمرين 1 مع زميلك قبل أن ترى التصحيح.',
  useful:['I think they made the first phone call in 1973.','I don\'t agree. I think it was in 1983.','When did they send the first email?']},
 {n:3,ref:'ص 62',st:2,kind:'typ',intro:'اكتب سؤالاً بـ When did…? عن كل حدث.',items:[
  T('(they — send — the first text message)','When did they send the first text message?'),T('(they — make — the first mobile phone call)','When did they make the first mobile phone call?'),
  T('(Apple — launch — the first iPhone)','When did Apple launch the first iPhone?'),T('(the Wright brothers — fly — the first plane)','When did the Wright brothers fly the first plane?'),
  T('(they — open — the first website)','When did they open the first website?')]},
 {n:4,ref:'ص 63',st:3,kind:'typ',intro:'اكتب التاريخ كما ننطقه، مثل: 5/10 → the fifth of October.',items:[
  T('1/3','the first of March','1st March','March the first'),T('2/6','the second of June','2nd June','June the second'),T('3/9','the third of September','3rd September','September the third'),
  T('21/1','the twenty-first of January','21st January','January the twenty-first'),T('12/12','the twelfth of December','12th December','December the twelfth'),T('30/4','the thirtieth of April','30th April','April the thirtieth')]},
 {n:5,ref:'ص 63',st:3,kind:'choose',intro:'نحن في سنة 2026. اختر الجملة الصحيحة بـ ago.',items:[
  {q:'the first iPhone (2007)',opts:[['They made the first iPhone about 19 years ago.',1],['They made the first iPhone 19 years before.',0]]},
  {q:'the first website (1991)',opts:[['They opened it about 35 years ago.',1],['They opened it about 53 years ago.',0]]},
  {q:'the first email (1971)',opts:[['They sent it ago 55 years.',0],['They sent it 55 years ago.',1]]},
  {q:'the first YouTube video (2005)',opts:[['They put it online about 21 years ago.',1],['They have put it online 21 years ago.',0,'لا نستعمل المضارع التام مع ago.']]},
  {q:'the first plane flight (1903)',opts:[['It happened more than 120 years ago.',1],['It happened more than 20 years ago.',0]]}]},
 {n:7,ref:'ص 63',st:2,kind:'speak',goal:'مع زميلك: أنت في محل إصلاح. اسأل عن جهاز الزبون من المعلومات في البطاقة.',
  card:'<table lang="en" dir="ltr" style="border-collapse:collapse"><tr><th style="padding:4px 8px">Item</th><th style="padding:4px 8px">Purchase date</th><th style="padding:4px 8px">Problem</th></tr><tr><td style="padding:4px 8px">tablet</td><td style="padding:4px 8px">3 May</td><td style="padding:4px 8px">screen cracked</td></tr><tr><td style="padding:4px 8px">headphones</td><td style="padding:4px 8px">14 August</td><td style="padding:4px 8px">wire cut</td></tr><tr><td style="padding:4px 8px">kettle</td><td style="padding:4px 8px">20 January</td><td style="padding:4px 8px">doesn\'t heat</td></tr></table>',
  model:[['Shop','How can I help you?'],['Customer','My tablet is broken. The screen is cracked.'],['Shop','When did you buy it?'],['Customer','I bought it on the third of May.'],['Shop','What happened?'],['Customer','I dropped it.']]},
 {n:8,ref:'ص 63',st:3,kind:'speak',goal:'اكتب قائمة بأشياء ممتعة فعلتها في حياتك مع تاريخ كل منها (سنة أو منذ كم سنة).',
  useful:['I travelled to Abha in 2022.','I bought my first car three years ago.','I won a football match last year.'],
  answer:'I went to Makkah for Umrah in 2019.<br>I got my driving licence two years ago.<br>I started college in 2025.'},
 {n:9,ref:'ص 63',st:3,kind:'speak',goal:'حدّث زملاءك عن قائمتك في التمرين 8، واسألهم عن قوائمهم.',
  useful:['When did you go there?','I went there in 2022.','What did you do?','That sounds great!']}
]);
/* ===== 8.4 Review D ===== */
BX.add('u8-l4',[
 {n:1,ref:'ص 64',st:1,kind:'typ',intro:'كوّن سؤالاً بـ How + صفة لكل جواب.',items:[
  T("It's 15 m wide. (the river)",'How wide is the river?'),T("They're 120 m high. (the towers)",'How high are the towers?'),T("It's 6 km long. (the tunnel)",'How long is the tunnel?'),
  T("It's 4 m high. (the wall)",'How high is the wall?'),T("They're 10 m deep. (the foundations)",'How deep are the foundations?'),T("They're 12 m long. (the pipes)",'How long are the pipes?')]},
 {n:2,ref:'ص 64',st:1,kind:'typ',intro:'أكمل الجملة الثانية بالصفة بدل الاسم.',items:[
  T('The depth of the lake is 30 m. → The lake is 30 m ___.','deep'),T('The height of the door is 2 m. → The door is 2 m ___.','high'),
  T('The width of the bed is 1.5 m. → The bed is 1.5 m ___.','wide'),T('The length of the bus is 12 m. → The bus is 12 m ___.','long')]},
 {n:3,ref:'ص 64',st:1,kind:'typ',intro:'أعد كتابة الجملة بالمعنى نفسه.',items:[
  T('What is the height of the minaret?','How high is the minaret?'),T('The pool is 25 m long.','The length of the pool is 25 m.'),T('How wide is the gate?','What is the width of the gate?'),
  T('The depth of the tank is 3 m.','The tank is 3 m deep.'),T('How long are the nails?','What is the length of the nails?'),T('The road is 20 m wide.','The width of the road is 20 m.')]},
 {n:4,ref:'ص 64',st:1,kind:'typ',intro:'كوّن سؤالاً بـ How many أو How much لكل جواب.',items:[
  T('(water / you / need) — Two litres.','How much water do you need?'),T('(rooms / the house / have) — Six.','How many rooms does the house have?'),
  T('(bolts / you / want) — Twenty.','How many bolts do you want?'),T('(sand / the truck / carry) — Ten tonnes.','How much sand does the truck carry?'),
  T('(workers / the company / have) — 300.','How many workers does the company have?'),T('(paint / we / need) — Five tins.','How much paint do we need?')]},
 {n:5,ref:'ص 65',st:1,kind:'listen',intro:'اقرأ (أو استمع إلى) الوصف، ثم اختر الرقم الصحيح لكل جزء.',
  text:'The new water tower is 40 m high. It has a steel tank on top. The tank is 12 m wide and 8 m deep. Four concrete legs support the tank. A pipe 30 cm wide takes the water down to the town.',
  then:{kind:'gaps',items:[A('Height of the tower: ___',['40 m','14 m'],0),A('Width of the tank: ___',['8 m','12 m'],1),A('Depth of the tank: ___',['8 m','12 m'],0),A('Number of legs: ___',['four','three'],0),A('Width of the pipe: ___',['30 cm','13 cm'],0)]}},
 {n:6,ref:'ص 65',st:1,kind:'speak',goal:'مع زميلك: تبنيان سوراً صغيراً حول حديقة. رتّبا ما تحتاجانه باستعمال some و How much و How many.',
  useful:['We need some bricks.','How many bricks do we need?','We need some cement.','How much cement do we need?','About ten bags.']},
 {n:7,ref:'ص 65',st:1,kind:'gaps',intro:'أكمل الحوار عن نفق طريق جديد (من خيالنا). البطاقة: length 12 km · lanes: four · width 18 m · depth 60 m under the river · completion 2033.',items:[
  A('Q: How long ___ be?',['will it','it will'],0),A('A: ___',["It will be 12 km long.","It is 12 km long."],0),A('Q: How many lanes ___ have?',['will it','it will'],0),A('A: ___',['It will have four.','It has four.'],0),
  A('Q: ___',['How wide will it be?','How wide it will be?'],0),A('A: ___',['It will be 18 m wide.','It will be 18 m width.'],0),A('Q: ___',['How deep will it be?','How depth will it be?'],0),
  A('A: ___',['It will be 60 m under the river.','It was 60 m under the river.'],0),A('Q: When ___ it?',['will they complete','they will complete'],0),A('A: ___',['They will complete it in 2033.','They completed it in 2033.'],0)]},
 {n:8,ref:'ص 65',st:2,kind:'typ',intro:'أجب بـ No ثم صحّح المعلومة من القوسين. المثال: Did they open the airport in 2010? (2016) → No, they didn\'t. They opened it in 2016.',items:[
  T('Have you worked in a bank? (a hospital)',"No, I haven't. I've worked in a hospital."),T('Will they build a bridge? (a tunnel)',"No, they won't. They'll build a tunnel."),
  T('Are they repairing the road? (cleaning it)',"No, they aren't. They're cleaning it."),T('Has the company opened a new shop? (a new factory)',"No, it hasn't. It has opened a new factory."),
  T('Did Saudi Arabia launch its first satellite in 2010? (2000)',"No, it didn't. It launched it in 2000."),T('Did you buy the phone in May? (June)',"No, I didn't. I bought it in June.")]},
 {n:9,ref:'ص 66',st:2,kind:'typ',intro:'أعد كتابة الجملة بالمضارع التام واحذف تعبير الوقت.',items:[
  T('I lost my wallet this morning.','I have lost my wallet.'),T('The technician fixed the air conditioner an hour ago.','The technician has fixed the air conditioner.'),
  T('Someone broke the window last night.','Someone has broken the window.'),T('We finished the report yesterday.','We have finished the report.'),
  T('The bus left five minutes ago.','The bus has left.'),T('My brother bought a new car last week.','My brother has bought a new car.')]},
 {n:10,ref:'ص 66',st:2,kind:'typ',intro:'قل ما الناقص بالطريقة المطلوبة.',items:[
  T('(the bike — pedals) بـ has no','The bike has no pedals.'),T('(the bike — pedals) بـ There are no','There are no pedals on the bike.'),T("(the bike — pedals) بـ doesn't have","The bike doesn't have any pedals.","The bike doesn't have pedals.")]},
 {n:11,ref:'ص 66',st:2,kind:'typ',intro:'حوّل الجملة إلى التركيز على النتيجة.',items:[
  T('A truck has dented the rear door.','The rear door is dented.'),T('A stone has broken the side window.','The side window is broken.'),T('The heater has burnt the carpet.','The carpet is burnt.'),
  T('The wind has bent the satellite dish.','The satellite dish is bent.'),T('A nail has torn the tent.','The tent is torn.'),T('A key has scratched the car door.','The car door is scratched.')]},
 {n:12,ref:'ص 66',st:2,kind:'gaps',intro:'الصفة أم الاسم؟',items:[
  A('The pot is ___. (dent)',['dented','dent'],0),A('There are some ___ on the floor. (scratch)',['scratched','scratches'],1),A('The cable is ___. (cut)',['cut','cuts'],0),A('There\'s a ___ in the sofa. (tear)',['torn','tear'],1)]},
 {n:13,ref:'ص 67',st:2,kind:'typ',intro:'أعد كتابة الجملة بالمعنى نفسه.',items:[
  T("There's a scratch on this table.",'This table is scratched.'),T("The printer doesn't have any paper.",'The printer has no paper.'),T('The phones have no chargers.','There are no chargers with the phones.'),
  T('The mirrors are cracked.','There are some cracks in the mirrors.'),T('There is no first aid box in this office.',"This office doesn't have a first aid box."),T('There is a dent in the car door.','The car door is dented.')]},
 {n:14,ref:'ص 67',st:2,kind:'gaps',intro:'أكمل الحوار بين موظف دعم وزبون بالصيغة الصحيحة للفعل.',items:[
  A('A: When did you ___ the printer? B: Last week.',['buy','bought'],0),A('B: I ___ it online.',['ordered','order'],0),A('A: Did you ___ the receipt?',['keep','kept'],0),
  A('B: Yes, I ___ it in a drawer.',['put','puts'],0),A('A: How ___ pay for it?',['did you','you did'],0),A('B: I ___ by card.',['paid','pay'],0),
  A('A: Did it ___ at first?',['work','worked'],0),A('B: Yes, it ___ for two days.',['worked','work'],0),A('A: When did it ___?',['stop','stopped'],0),A('B: It ___ yesterday.',['stopped','stop'],0)]},
 {n:15,ref:'ص 67',st:1,kind:'speak',goal:'اكتب وصفاً قصيراً لبرج الماء في التمرين 5 من ملاحظاتك (5 جمل).',
  answer:'The water tower is 40 m high. It has a steel tank on top. The tank is 12 m wide and 8 m deep. Four concrete legs support the tank. A pipe takes the water down to the town.'},
 {n:16,ref:'ص 67',st:2,kind:'speak',goal:'مشروع: اختر منشأة مشهورة في السعودية (مثل برج المملكة أو جسر الملك فهد) واكتب عنها فقرة قصيرة: ما هي، أين، متى بنوها، وأبعادها.',
  useful:['It is in Riyadh.','They completed it in 2002.','It is about 300 m high.','It has a bridge at the top.']}
]);
})();

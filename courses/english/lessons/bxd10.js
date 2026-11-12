/* التمارين المقابلة — الوحدة 10 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وعدد بنوده وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),T=(q,...a)=>({q,a}),N0=(a,b)=>window.ENK.ab(a,b);
/* ===== 10.1 Rules and warnings ===== */
BX.add('u10-l1',[
 {n:1,ref:'ص 74',st:1,kind:'speak',goal:'مع زميلك: ما قواعد السلامة في ورشة الكلية أو في البيت؟ اكتبا قائمة من خمس قواعد.',
  useful:['You must wear safety glasses.',"You mustn't run in the workshop.",'Always switch off the machine.','Never touch a wire with wet hands.','Do not eat in the lab.']},
 {n:2,ref:'ص 74',st:1,kind:'listen',intro:'استمع إلى مشرف الورشة يعطي تحذيرات، ثم أكمل الجمل.',
  text:"Listen, everybody. You must wear your gloves. Don't touch the hot metal. You must keep the floor clean. Don't leave tools on the stairs. Someone might fall. And you mustn't use your phone near the machines.",
  then:{kind:'gaps',items:[A('You ___ wear your gloves.',['must','might'],0),A('___ touch the hot metal.',["Don't","Mustn't"],0),A('You ___ keep the floor clean.',['must','might'],0),
   A('___ leave tools on the stairs.',["Don't","Always"],0),A('Someone ___ fall.',['might','must'],0),A('You ___ use your phone near the machines.',["mustn't","must"],0)]}},
 {n:3,ref:'ص 74',st:2,kind:'speak',goal:'ناقش مع زميلك: لماذا لوحة «ممنوع» دائرة حمراء، ولوحة «إلزامي» دائرة زرقاء، ولوحة «تحذير» مثلث أصفر؟',
  useful:['Red means stop or do not.','Blue means you must do it.','Yellow means be careful.','Green means safe.']},
 {n:4,ref:'ص 74',st:2,kind:'match',intro:'وصّل كل لوحة (بشكلها ولونها) بالرسالة المكتوبة عليها.',pairs:[
  ['a blue circle with a hard hat','Wear a hard hat.'],['a red circle with a cigarette and a line','No smoking.'],['a yellow triangle with a lightning bolt','Danger: electricity.'],
  ['a green square with a running man','Emergency exit.'],['a red square with a fire extinguisher','Fire extinguisher.'],['a red circle with a phone and a line','Do not use mobile phones.']]},
 {n:5,ref:'ص 75',st:2,kind:'gaps',intro:'أكمل التعليمات بكلمات الصندوق: Never · Always · Do not · must · Do · mustn\'t',items:[
  A('___ touch a switch with wet hands.',['Never','Always'],0),A('___ wear a seat belt in the car.',['Always','Never'],0),A('___ park in front of the gate.',['Do not','Do'],0),
  A('You ___ wear ear protection here.',['must',"mustn't"],0),A('___ wash your hands before eating.',['Do','Do not'],0),A('You ___ smoke in the petrol station.',["mustn't",'must'],0)]},
 {n:6,ref:'ص 75',st:2,kind:'typ',intro:'اكتب اللوحة بطريقة أخرى بـ Do not … . المثال: No smoking. → Do not smoke here.',items:[
  T('No eating.','Do not eat here.',"Don't eat here.",'Do not eat.'),T('No photos.','Do not take photos here.','Do not take photos.'),T('No swimming.','Do not swim here.','Do not swim.'),
  T('No parking.','Do not park here.','Do not park.'),T('No entry.','Do not enter.','Do not enter here.'),T('No running.','Do not run.','Do not run here.')]},
 {n:7,ref:'ص 75',st:3,kind:'gaps',intro:'أكمل التحذيرات بـ could أو might أو there\'s أو there are.',items:[
  A('Be careful! ___ a hole in the road.',["There's","There are"],0),A('Don\'t lift that box alone. You ___ hurt your back.',['could','there\'s'],0),
  A('Watch out! ___ some broken glasses on the floor.',["There are","There's"],0),A('Don\'t touch the wire. You ___ get an electric shock.',['might','there are'],0)]}
]);
/* ===== 10.2 Safety hazards ===== */
BX.add('u10-l2',[
 {n:3,ref:'ص 76',st:1,kind:'speak',goal:'قل التحذير ونتيجته المحتملة، مثل: Be careful! There\'s some water on the floor. You might slip.',
  steps:['a box on the stairs','a hot pan on the cooker','a loose cable on the floor','an open window on the fifth floor'],
  useful:['Be careful!','You might trip over it.','You could burn your hand.','You might fall.']},
 {n:4,ref:'ص 76',st:1,kind:'speak',goal:'مع زميلك: تخيّل مطبخ بيت فيه مخاطر. اكتبا قائمة بكل خطر تريانه في هذا الوصف:',
  card:'<p lang="en" dir="ltr">There is some oil on the floor. The knife is on the edge of the table. A child is near the cooker. The plug of the kettle is wet. There are some bags on the stairs.</p>',
  useful:['oil on the floor','a knife on the edge of the table','a wet plug','bags on the stairs']},
 {n:5,ref:'ص 77',st:1,kind:'typ',intro:'أنت مفتش سلامة: اكتب جملة بـ There is أو There are من كل ملاحظة.',items:[
  T('(some water — on the floor)','There is some water on the floor.',"There's some water on the floor."),T('(some boxes — in front of the exit)','There are some boxes in front of the exit.'),
  T('(a ladder — near the door)','There is a ladder near the door.',"There's a ladder near the door."),T('(no fire extinguishers — in the room)','There are no fire extinguishers in the room.'),
  T('(an open cupboard — above the machine)','There is an open cupboard above the machine.',"There's an open cupboard above the machine.")]},
 {n:6,ref:'ص 77',st:2,kind:'typ',intro:'حوّل جمل التمرين 5 إلى الماضي (للتقرير).',items:[
  T('There is some water on the floor.','There was some water on the floor.'),T('There are some boxes in front of the exit.','There were some boxes in front of the exit.'),
  T('There is a ladder near the door.','There was a ladder near the door.'),T('There are no fire extinguishers in the room.','There were no fire extinguishers in the room.'),
  T('There is an open cupboard above the machine.','There was an open cupboard above the machine.')]},
 {n:7,ref:'ص 77',st:2,kind:'gaps',intro:'أكمل تقرير المفتش بالماضي.',items:[
  A('I visited the store room on Sunday. There ___ many hazards.',['were','was'],0),A('There ___ some oil on the floor.',['was','were'],0),A('The emergency exit ___ locked.',['was','were'],0),
  A('There ___ some heavy boxes on the top shelf.',['were','was'],0),A('The lights ___ very weak.',['were','was'],0),A('There ___ no first aid box.',['was','were'],0)]},
 {n:8,ref:'ص 77',st:1,kind:'speak',goal:'في مجموعات: اكتبوا عشر قواعد سلامة على الأقل لمطبخ البيت أو لورشة الكلية.',
  answer:'Always clean the floor. Never leave knives on the edge of the table. Do not touch plugs with wet hands. Keep children away from the cooker. Do not leave bags on the stairs. Always switch off the cooker. Keep a fire extinguisher in the kitchen. Never use a broken plug. Do not run in the kitchen. Always wear gloves with hot pans.'}
]);
/* ===== 10.3 Investigations ===== */
BX.add('u10-l3',[
 {n:1,ref:'ص 78',st:1,kind:'speak',goal:'مع زميلك: سيارتان كادتا تصطدمان عند إشارة. ماذا حدث؟ في أي اتجاه كانت كل سيارة تسير؟ من سيحقق؟',
  useful:['It was a near miss.','The red car was going north.','The white car was turning left.','The police will investigate.']},
 {n:3,ref:'ص 78',st:2,kind:'listen',intro:'استمع إلى خبر عن حادثة كادت تقع بين قطارين (من خيالنا)، ثم أكمل التقرير.',
  text:"Yesterday, the third of May, at 07.45, two trains nearly hit each other 5 km north of the city station. Train 1, a passenger train with 320 passengers, was going to the city. Train 2, a freight train, was leaving the city on the same track. The drivers stopped the trains only 50 metres apart. Nobody was injured.",
  then:{kind:'gaps',items:[A('Date: ___',['3 May','13 May'],0),A('Time: ___',['07.45','17.45'],0),A('Location: ___',['5 km north of the city station','15 km south of the city'],0),
   A('Distance between the trains: ___',['50 metres','15 metres'],0),A('Train 1: ___',['passenger train, 320 passengers','freight train, 320 passengers'],0),A('Injuries: ___',['none','two people'],0)]}},
 {n:4,ref:'ص 79',st:2,kind:'typ',intro:'أنت المحقق: اكتب السؤال لكل جواب عن حادثة القطارين.',items:[
  T('It happened 5 km north of the city station.','Where did it happen?','Where did the incident happen?'),T('It took place on the third of May.','When did it take place?','When did it happen?'),
  T('It happened at 07.45.','What time did it happen?','When did it happen?'),T('There were 320 passengers.','How many passengers were there?','How many passengers were on the train?'),
  T('Train 2 was a freight train.','What was train 2?','What kind of train was train 2?'),T('The trains stopped 50 metres apart.','How far apart did the trains stop?','How far were the trains?'),
  T('The drivers stopped the trains.','Who stopped the trains?'),T('No, nobody was injured.','Was anybody injured?','Was anyone injured?')]},
 {n:5,ref:'ص 79',st:2,kind:'speak',goal:'مهمة ثنائية بمعلومات جديدة: كل واحد عنده حادثة. اسأل زميلك وأكمل نموذج التقرير (المكان، الوقت، ماذا حدث، الإصابات).',
  card:N0('<span lang="en" dir="ltr">Place: car park of the mall<br>Time: 18.20, Friday<br>What happened: a car hit a trolley<br>Injuries: none</span>','<span lang="en" dir="ltr">Place: college workshop<br>Time: 10.05, Tuesday<br>What happened: a trainee slipped on oil<br>Injuries: a small cut on the hand</span>'),
  useful:['Where did it happen?','When did it take place?','What happened?','Was anybody injured?']},
 {n:6,ref:'ص 79',st:2,kind:'gaps',intro:'أكمل حوار الدعوة بكلمات الصندوق: must · I\'d · are · can\'t · don\'t · I\'ll',items:[
  A('A: ___ you free on Thursday evening?',['Are','Must'],0),A('B: I\'m sorry, I ___. I have a class.',["can't","don't"],0),A('A: What about Friday? Why ___ we have dinner together?',["don't","can't"],0),
  A('B: ___ love to. What time?',["I'd","I'll"],0),A('A: At eight. I ___ go now, see you!',['must','are'],0),A('B: OK. ___ see you on Friday.',["I'll","I'd"],0)]},
 {n:8,ref:'ص 79',st:2,kind:'speak',goal:'مع زميلك: ادعُه إلى شيء (مباراة، غداء، زيارة) بيوم ووقت مختلفين، وهو يقبل أو يعتذر.',
  useful:['Are you free on Saturday?',"I'm sorry, I can't.","I'd love to.",'What time?',"I'll see you then."]}
]);
/* ===== 10.4 Review E ===== */
BX.add('u10-l4',[
 {n:1,ref:'ص 80',st:1,kind:'gaps',intro:'أكمل الجمل عن جزازة العشب بالصيغة الصحيحة للفعل.',items:[
  A('The engine ___ the blade.',['turns','turn'],0),A('The four wheels ___ the machine.',['support','supports'],0),A('The user ___ the handle forwards.',['pushes','push'],0),
  A('The levers ___ the speed.',['control','controls'],0),A('A bag at the back ___ the grass.',['collects','collect'],0)]},
 {n:2,ref:'ص 80',st:1,kind:'gaps',intro:'أكمل وصف الطائرة المسيّرة (درون) بالصيغة الصحيحة للفعل.',items:[
  A('Four motors ___ four propellers.',['drive','drives'],0),A('The battery ___ power to the motors.',['supplies','supply'],0),A('The propellers ___ the air down.',['push','pushes'],0),
  A('A camera ___ under the body.',['is mounted','mounted'],0),A('The pilot ___ the drone with a remote control.',['steers','steer'],0)]},
 {n:3,ref:'ص 80',st:1,kind:'gaps',intro:'أكمل الجمل عن توصيل نظام الصوت.',items:[
  A('The speakers are connected ___ the amplifier.',['to','on'],0),A('The cable goes ___ the back of the TV.',['into','out'],0),A('The sound comes ___ of the speakers.',['out','in'],0),A('The amplifier is plugged ___ the power outlet.',['into','from'],0)]},
 {n:4,ref:'ص 81',st:1,kind:'match',intro:'ما الجهاز؟ وصّل كل وصف بالجهاز.',pairs:[
  ['It heats water for tea.','a kettle'],['You point it at the TV and press its buttons.','a remote control'],['It connects your phone to the power outlet.','a charger'],
  ['It prints documents on paper.','a printer'],['It moves the air and cools the room.','a fan'],['It makes a loud noise when there is smoke.','a smoke alarm']]},
 {n:5,ref:'ص 81',st:1,kind:'gaps',intro:'أكمل الجمل بعبارات التثبيت.',items:[
  A('The clock ___ the wall.',['is attached to','is suspended from'],0),A('The swing ___ the tree with two ropes.',['is suspended from','is mounted on'],0),A('The air conditioner ___ the wall outside.',['is mounted on','is connected to'],0),
  A('The hose ___ the tap.',['is connected to','is suspended from'],0),A('The satellite dish ___ the roof.',['is mounted on','is suspended from'],0),A('The keyboard ___ the computer by USB.',['is connected to','is attached to'],0)]},
 {n:6,ref:'ص 81',st:1,kind:'order',intro:'رتّب مخطط سير جهاز التحكم (الريموت) من النص: Press a button. Does the TV respond? If no, check the batteries. Are they in correctly? If no, put them in correctly. If yes, replace them.',steps:['Press a button.','Does the TV respond? YES → Use it.','NO → Check the batteries.','Are they in correctly? NO → Put them in correctly.','YES → Replace them.']},
 {n:7,ref:'ص 81',st:1,kind:'typ',intro:'اكتب دليل أعطال من مخطط التمرين 6 بجمل If.',items:[
  T("(the TV doesn't respond — check the batteries)","If the TV doesn't respond, check the batteries."),T("(the batteries aren't in correctly — put them in correctly)","If the batteries aren't in correctly, put them in correctly."),
  T('(the batteries are in correctly — replace them)','If the batteries are in correctly, replace them.'),T('(the TV responds — use it)','If the TV responds, use it.'),T("(it still doesn't work — call the shop)","If it still doesn't work, call the shop.")]},
 {n:8,ref:'ص 82',st:2,kind:'gaps',intro:'أكمل التحذيرات، كل كلمة مرة واحدة: must · never · mustn\'t · might · Always · could',items:[
  A('You ___ wear a helmet on the bike.',['must','might'],0),A('___ leave the iron on.',['Never','Always'],0),A('You ___ open this box. It\'s dangerous.',["mustn't",'must'],0),
  A('Be careful, the floor is wet. You ___ slip.',['might','must'],0),A('___ check the gas before you go out.',['Always','Never'],0),A('Don\'t play with matches. You ___ start a fire.',['could','must'],0)]},
 {n:9,ref:'ص 82',st:2,kind:'gaps',intro:'أكمل تقرير السلامة بالصيغة الصحيحة للأفعال (22 فراغاً قصيراً).',items:[
  A('Last week, an inspector ___ the college garage.',['visited','visits'],0),A('He ___ some problems.',['found','find'],0),A('The floor ___ dirty.',['was','were'],0),A('There ___ some tools on the ground.',['were','was'],0),
  A('Two trainees ___ under a car.',['were','was'],0),A('One of them ___ goggles.',["wasn't wearing","isn't wearing"],0),A('The car ___ on a jack.',['was','were'],0),A('The jack ___ old.',['was','were'],0),
  A('The inspector ___ the trainer.',['told','tells'],0),A('The incident ___ at 11.30.',['took place','takes place'],0),A('The trainer ___ the trainees out.',['called','calls'],0),A('A trainee ___ a heavy wheel.',['lifted','lifts'],0),
  A('He ___ his back.',['hurt','hurts'],0),A('The others ___ him to the office.',['took','take'],0),A('The first aid box ___ empty.',['was','were'],0),A('So they ___ the nurse.',['called','call'],0),
  A('The nurse ___ quickly.',['came','comes'],0),A('She ___ him.',['helped','helps'],0),A('He ___ go to hospital.',["didn't","doesn't"],0),A('The inspector ___ a report.',['wrote','writes'],0),
  A('The college ___ a new jack.',['bought','buys'],0),A('Nobody ___ badly injured.',['was','were'],0)]},
 {n:10,ref:'ص 83',st:2,kind:'typ',intro:'اكتب السؤال لكل جواب عن تقرير التمرين 9.',items:[
  T('The incident took place in the college garage.','Where did the incident take place?','Where did it take place?'),T('It happened at 11.30.','When did it happen?','What time did it happen?'),
  T("No, he didn't. He wasn't wearing goggles.","Did he wear goggles?","Was he wearing goggles?"),T('He lifted a heavy wheel.','What did he lift?','What did the trainee lift?'),
  T('He hurt his back.','What did he hurt?'),T('The first aid box was empty.','What was the problem?'),T('The nurse helped him.','Who helped him?'),T("No, he didn't go to hospital.",'Did he go to hospital?')]},
 {n:11,ref:'ص 83',st:2,kind:'speak',goal:'اكتب قواعد سلامة للكراج من تقرير التمرين 9.',
  answer:'You must keep the floor clean. Always wear goggles. Do not leave tools on the ground. Never lift heavy wheels alone. Always check the jack. You must keep the first aid box full.'},
 {n:12,ref:'ص 83',st:2,kind:'speak',goal:'مشروع: اكتب دليل أعطال قصيراً لجهاز من مجالك (بجمل If)، أو صمّم ملصق سلامة لورشتك مع خمس قواعد.',
  useful:['If the machine doesn\'t start, check the power.','You must wear safety glasses.','Never touch moving parts.']}
]);
})();

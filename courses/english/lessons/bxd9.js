/* التمارين المقابلة — الوحدة 9 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وعدد بنوده وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),T=(q,...a)=>({q,a}),N0=(a,b)=>window.ENK.ab(a,b);
/* ===== 9.1 Operation ===== */
BX.add('u9-l1',[
 {n:1,ref:'ص 68',st:1,kind:'speak',goal:'مع زميلك: كيف يتحرك السكوتر الكهربائي؟ ماذا يفعل كل جزء؟',
  useful:['The motor drives the back wheel.','The battery supplies the power.','The handlebar steers the scooter.','The brake lever stops it.']},
 {n:2,ref:'ص 68',st:1,kind:'match',intro:'ماذا تفعل أجزاء السكوتر الكهربائي؟ وصّل كل جزء بوظيفته.',pairs:[
  ['the motor','drives the back wheel'],['the battery','supplies power to the motor'],['the handlebar','steers the scooter'],['the brake lever','stops the scooter'],['the deck','supports the rider']]},
 {n:5,ref:'ص 68',st:1,kind:'typ',intro:'أجب بـ No ثم قل ماذا يفعل الجزء حقاً (من القوسين). المثال: Does the motor steer the scooter? (drive the wheel) → No, it doesn\'t. It drives the wheel.',items:[
  T('Does the battery drive the wheel? (supply power)',"No, it doesn't. It supplies power."),T('Do the brakes increase the speed? (stop the scooter)',"No, they don't. They stop the scooter."),
  T('Does the deck steer the scooter? (support the rider)',"No, it doesn't. It supports the rider.")]},
 {n:6,ref:'ص 69',st:1,kind:'listen',intro:'استمع إلى (أو اقرأ) مقالاً قصيراً عن السكوتر الكهربائي، ثم أجب.',
  text:'The electric scooter is a small, light vehicle for one person. A battery under the deck supplies power to a motor. The motor drives the back wheel. The rider stands on the deck and holds the handlebar. A lever on the handlebar controls the speed. To stop, the rider pulls the brake lever. The scooter can travel at 25 km/h, and the battery lasts for about 30 km.',
  then:{kind:'choose',items:[
   {q:'How many people can ride it?',opts:[['one',1],['two',0]]},{q:'Where is the battery?',opts:[['under the deck',1],['on the handlebar',0]]},
   {q:'What does the motor drive?',opts:[['the back wheel',1],['the front wheel',0]]},{q:'What controls the speed?',opts:[['a lever on the handlebar',1],['the brake lever',0]]},
   {q:'How fast can it travel?',opts:[['25 km/h',1],['52 km/h',0]]},{q:'How far does the battery last?',opts:[['about 30 km',1],['about 13 km',0]]}]}},
 {n:7,ref:'ص 69',st:2,kind:'typ',intro:'أعد كتابة الجملة بالمعنى نفسه: الجزء + الفعل. المثال: The purpose of the brake is to stop the car. → The brake stops the car.',items:[
  T('The purpose of the battery is to supply power.','The battery supplies power.'),T('The function of the fan is to cool the engine.','The fan cools the engine.'),
  T('The job of the pump is to move the water.','The pump moves the water.'),T('The purpose of the wheels is to support the trolley.','The wheels support the trolley.'),
  T('The function of the thermostat is to control the temperature.','The thermostat controls the temperature.'),T('The job of the propeller is to propel the boat forwards.','The propeller propels the boat forwards.')]},
 {n:8,ref:'ص 69',st:3,kind:'match',intro:'وصّل كل وصف بعبارة التثبيت المناسبة.',pairs:[
  ['A lamp hangs on a chain from the ceiling.','is suspended from'],['A TV sits on top of a metal stand.','is mounted on'],['A pipe goes from the tank to the tap.','is connected to'],['A label is stuck on the box.','is attached to']]},
 {n:9,ref:'ص 69',st:3,kind:'gaps',intro:'أكمل الجمل الأربع، كل عبارة مرة واحدة.',items:[
  A('The fan ___ the ceiling.',['is suspended from','is connected to'],0),A('The camera ___ a tripod.',['is mounted on','is attached to'],0),
  A('The printer ___ the computer with a cable.',['is connected to','is suspended from'],0),A('The handle ___ the door with four screws.',['is attached to','is mounted on'],0)]}
]);
/* ===== 9.2 Hotline ===== */
BX.add('u9-l2',[
 {n:4,ref:'ص 70',st:1,kind:'speak',goal:'مع زميلك: مكالمة لخط الدعم. التلفاز لا يعرض صورة. واحد زبون وواحد فني.',
  useful:["I'll talk you through it.",'Is the TV switched on?','Is the cable connected to the TV?','Press the INPUT button.','Does it work now?'],
  model:[['Technician','Hotline, how can I help you?'],['Customer',"My TV doesn't show a picture."],['Technician',"OK, I'll talk you through it. Is the TV switched on?"],['Customer','Yes, it is.'],['Technician','Is the cable connected to the TV?'],['Customer',"No, it isn't."],['Technician','Connect it, please. Does it work now?'],['Customer','Yes, it does. Thank you!']]},
 {n:5,ref:'ص 70',st:1,kind:'speak',goal:'كوّن حوارين آخرين بنفس الطريقة:',steps:['الطابعة لا تطبع: هل هي موصولة بالكهرباء؟ هل فيها ورق؟','الإنترنت لا يعمل: هل الراوتر يعمل؟ هل الأضواء مضيئة؟'],
  useful:['Is the printer plugged in?','Is there any paper in it?','Is the router on?','Are the lights on?']},
 {n:6,ref:'ص 71',st:3,kind:'typ',intro:'اكتب الجواب القصير حسب العلامة ✓ (نعم) أو ✗ (لا).',items:[
  T('Is the router on? ✓','Yes, it is.'),T('Are the cables connected? ✗',"No, they aren't."),T('Have you restarted it? ✓','Yes, I have.'),T("Does the light flash? ✗","No, it doesn't."),
  T('Did you press the button? ✓','Yes, I did.'),T('Can I call you back? ✓','Yes, you can.'),T('Do you have the user guide? ✗',"No, I don't."),T('Are you at home? ✓','Yes, I am.'),
  T('Do the speakers work? ✗',"No, they don't."),T('Has the screen gone black? ✓','Yes, it has.')]},
 {n:8,ref:'ص 71',st:2,kind:'speak',goal:'مهمة ثنائية بمعلومات جديدة: كل واحد عنده توصيل مختلف لجهاز ألعاب. اسأل زميلك لتجد ثلاثة فروق.',
  card:N0('<span lang="en" dir="ltr">The game console is connected to the TV.<br>The TV is connected to the power outlet.<br>The router is connected to the console with a cable.</span>','<span lang="en" dir="ltr">The game console is connected to the speakers.<br>The TV is connected to the adapter.<br>The router is connected to the console with Wi-Fi.</span>'),
  useful:['Is the console connected to the TV?',"No, it isn't. It's connected to the speakers.",'Is the router connected with a cable?']}
]);
/* ===== 9.3 User guide ===== */
BX.add('u9-l3',[
 {n:2,ref:'ص 72',st:2,kind:'order',intro:'جوالك لا يُشحن. رتّب خطوات مخطط السير من دليل الأعطال.',steps:['Plug the charger into the power outlet.','Does the phone charge? YES → Wait until it is full.','NO → Check the cable.','Is the cable damaged? YES → Replace it.','NO → Try another power outlet.'],done:'الآن ارسم المخطط في دفترك بالأسهم YES و NO.'},
 {n:3,ref:'ص 72',st:1,kind:'typ',intro:'حوّل الحوار القصير إلى جملة If. المثال: A: The fan isn\'t working. B: Check the plug. → If the fan isn\'t working, check the plug.',items:[
  T("A: The screen is dark. B: Press the power button.",'If the screen is dark, press the power button.'),T("A: The phone is hot. B: Switch it off.",'If the phone is hot, switch it off.'),
  T("A: The door doesn't open. B: Use the other key.","If the door doesn't open, use the other key."),T("A: There isn't any water. B: Call the plumber.","If there isn't any water, call the plumber."),
  T("A: The battery is flat. B: Recharge it.",'If the battery is flat, recharge it.'),T("A: The printer works. B: Print the report.",'If the printer works, print the report.')]},
 {n:4,ref:'ص 73',st:2,kind:'listen',intro:'استمع إلى تعليمات الغسالة، ثم رتّب مخطط السير.',
  text:"First, press the START button. Does the machine start? If yes, wait for the wash to finish. If no, check the door. Is the door closed? If no, close it and press START again. If yes, check the power.",
  then:{kind:'order',steps:['Press the START button.','Does the machine start? YES → Wait for the wash to finish.','NO → Check the door.','Is the door closed? NO → Close it and press START.','YES → Check the power.']}},
 {n:5,ref:'ص 73',st:1,kind:'listen',intro:'استمع إلى مكالمة عن الراوتر، ثم اكتب دليل أعطال من ست جمل If.',
  text:"If you can't use the internet, check the router. If the router is off, switch it on. If the lights don't come on, check the power cable. If the cable is loose, connect it. If the lights are on but there is no internet, restart the router. If it still doesn't work, call the hotline.",
  then:{kind:'gaps',items:[A("If you can't use the internet, ___ the router.",['check','switch'],0),A('If the router is off, ___ it on.',['switch','check'],0),
   A("If the lights don't come on, check the ___ cable.",['power','phone'],0),A('If the cable is ___, connect it.',['loose','flat'],0),
   A('If there is no internet, ___ the router.',['restart','replace'],0),A("If it still doesn't work, call the ___.",['hotline','supervisor'],0)]}},
 {n:6,ref:'ص 73',st:1,kind:'gaps',intro:'أكمل الحوارات بأجوبة قصيرة.',items:[
  A('A: Do you know the password? B: No, I ___.',["don't","doesn't"],0),A('A: Does the laptop start? B: No, it ___.',["doesn't","don't"],0),
  A('A: Are you near the router? B: No, I\'m ___.',['not',"n't"],0),A('A: Have you got the receipt? B: Yes, we ___.',['have','do'],0),A('A: Did you change the battery? B: No, I ___.',["didn't","don't"],0)]},
 {n:8,ref:'ص 73',st:2,kind:'speak',goal:'مع زميلك: حوار مشابه. واحد يتصل لأن المكيف لا يبرّد، والثاني يسأل ويعطي الحل بـ If.',
  useful:['Is the air conditioner on?','If it is off, switch it on.','Is the filter clean?',"If it isn't clean, clean it.",'If it still doesn\'t work, call a technician.']}
]);
})();

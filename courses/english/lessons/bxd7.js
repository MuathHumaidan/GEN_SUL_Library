/* التمارين المقابلة — الوحدة 7 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وعدد بنوده وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),N0=(a,b)=>window.ENK.ab(a,b);
/* ===== 7.1 Dimensions ===== */
BX.add('u7-l1',[
 {n:1,ref:'ص 52',st:1,kind:'speak',goal:'تمرين الكتاب يسأل عن جسر في صورة. هنا تحدّث مع زميلك عن جسر تعرفه: ما اسمه؟ أين هو؟ كم طوله تقريباً؟',
  steps:['اختر جسراً تعرفه (مثلاً جسر الملك فهد بين السعودية والبحرين).','قل اسمه ومكانه.','قل طوله أو ارتفاعه تقريباً بكلمة about.'],
  useful:["It's the King Fahd Causeway.","It's between Saudi Arabia and Bahrain.","It's about 25 km long.","Where is it?","How long is it?"],
  model:[['A','What bridge is this?'],['B',"It's the King Fahd Causeway."],['A','Where is it?'],['B',"It's between Saudi Arabia and Bahrain."],['A','How long is it?'],['B',"It's about 25 km long."]]},
 {n:3,ref:'ص 52',st:1,kind:'match',intro:'وصّل كل كلمة من كلمات أجزاء الجسر بوصفها.',pairs:[
  ['deck','the road on the bridge — cars drive on it'],['pier','a big concrete column that holds the bridge up'],['pylon','a tall tower above the road'],['cable','a strong steel rope'],['span','the distance between two piers']]},
 {n:4,ref:'ص 52',st:4,kind:'listen',intro:'استمع إلى مهندس يصف جسراً جديداً (جسر من خيالنا)، ثم أكمل جدول المواصفات.',
  text:"Good morning. This is the Sea Gate Bridge. It's a suspension bridge. We completed it in March 2021. The towers are steel and the piers are concrete. There are four piers. The main span is 640 m long. The two side spans are 210 m long. There are two towers. The towers are 95 m high above the deck. The deck is about 60 m above the water. The bridge is 1.9 km long, and the deck is 28 m wide.",
  then:{kind:'gaps',items:[
   A('Type of structure: ___',['cable-stayed','suspension'],1),A('Completion date: ___',['March 2021','March 2012'],0),
   A('Material of the towers: ___',['concrete','steel'],1),A('Material of the piers: ___',['concrete','steel'],0),
   A('Number of piers: ___',['four','fourteen'],0),A('Length of the main span: ___',['460 m','640 m'],1),
   A('Length of the side spans: ___',['210 m','120 m'],0),A('Number of towers: ___',['two','three'],0),
   A('Height of the towers above the deck: ___',['59 m','95 m'],1),A('Height of the deck above the water: ___',['about 60 m','about 16 m'],0),
   A('Total length: ___',['1.9 km','9.1 km'],0),A('Width of the deck: ___',['38 m','28 m'],1)]}},
 {n:5,ref:'ص 53',st:2,kind:'typ',intro:'الكتاب يعطيك الصفة وتكتب الاسم. هنا العكس: اكتب الصفة لكل اسم.',items:[
  {q:'length → ?',a:['long']},{q:'width → ?',a:['wide']},{q:'height → ?',a:['high']},{q:'depth → ?',a:['deep']}]},
 {n:6,ref:'ص 53',st:2,kind:'gaps',intro:'اختر الكلمة الصحيحة: الصفة بعد الرقم والوحدة، والاسم بعد The … of.',items:[
  A('The ___ of the swimming pool is 2 m.',['deep','depth'],1,'بعد The نستعمل الاسم.'),A('Our street is 12 m ___.',['wide','width'],0,'بعد الرقم والوحدة نستعمل الصفة.'),
  A('The ___ of the tower is 150 m.',['high','height'],1),A('The tunnel is 3 km ___.',['long','length'],0),
  A('The well is 40 m ___.',['deep','depth'],0),A('The ___ of the table is 2 m.',['long','length'],1),
  A('The ___ of the door is 90 cm.',['wide','width'],1),A('The wall is 3 m ___.',['high','height'],0)]},
 {n:7,ref:'ص 53',st:3,kind:'typ',intro:'كوّن سؤالاً بـ How + صفة عن جسر Sea Gate (مفرد is، جمع are).',items:[
  {q:'(the bridge — length)',a:['How long is the bridge?']},{q:'(the deck — width)',a:['How wide is the deck?']},
  {q:'(the towers — height)',a:['How high are the towers?']},{q:'(the main span — length)',a:['How long is the main span?']},
  {q:'(the water under the bridge — depth)',a:['How deep is the water under the bridge?','How deep is the water?']},{q:'(the side spans — length)',a:['How long are the side spans?']}]},
 {n:8,ref:'ص 53',st:3,kind:'speak',goal:'مع زميلك: واحد مذيع وواحد مهندس. اسأل عن جسر Sea Gate وأجب من الجدول في التمرين 4.',
  useful:['How long is the bridge?',"It's 1.9 km long.",'How high are the towers?',"They're 95 m high."],
  model:[['Presenter','How long is the bridge?'],['Engineer',"It's 1.9 km long."],['Presenter','How wide is the deck?'],['Engineer',"It's 28 m wide."],['Presenter','How high are the towers?'],['Engineer',"They're 95 m high above the deck."]]},
 {n:9,ref:'ص 53',st:4,kind:'speak',goal:'مهمة ثنائية بمعلومات جديدة: كل واحد يقرأ بطاقته فقط، ويسأل زميله عن الناقص.',
  card:N0('<b>جسر الوادي</b><br>Type: cable-stayed<br>Total length: 1.2 km<br>Number of piers: 4<br>Width of deck: ?<br>Height of pylons: ?','<b>جسر الوادي</b><br>Type: ?<br>Total length: ?<br>Number of piers: ?<br>Width of deck: 24 m<br>Height of pylons: 70 m'),
  useful:['How wide is the deck?','How many piers are there?',"It's 24 m wide.",'There are four.']}
]);
/* ===== 7.2 Quantities ===== */
BX.add('u7-l2',[
 {n:1,ref:'ص 54',st:4,kind:'match',intro:'اختبار المباني: وصّل كل مبنى بارتفاعه التقريبي.',pairs:[
  ['Burj Khalifa (Dubai)','about 830 m'],['Makkah Clock Royal Tower','about 600 m'],['Petronas Towers (Kuala Lumpur)','about 450 m'],['Empire State Building (New York)','about 380 m'],['Eiffel Tower (Paris)','about 330 m'],['Kingdom Centre (Riyadh)','about 300 m'],['Al Faisaliah Tower (Riyadh)','about 270 m']]},
 {n:3,ref:'ص 54',st:4,kind:'match',intro:'وصّل كل سؤال عن برج المدينة (برج من خيالنا) بجوابه.',pairs:[
  ['How high is the tower?',"It's 320 m high."],['How many storeys does it have?','It has 75 storeys.'],['How many lifts are there?','There are 24 lifts.'],
  ['How much concrete did they use?','About 90,000 tonnes.'],['How long did they take to build it?','Four years.'],['How many people work there?','About 6000 people.']]},
 {n:4,ref:'ص 55',st:2,kind:'gaps',intro:'أكمل الحوار في محل الأدوات بالكلمات نفسها التي في صندوق الكتاب.',items:[
  A('Customer: Have you got ___ wood glue?',['any','some'],0,'في السؤال نستعمل any.'),A('Shop assistant: Yes. ___ do you want — small or large?',['What size','What colour'],0),
  A('Customer: Large, please. And I need some screws. — Assistant: OK, ___ do you need?',['how many','how much'],0,'screws معدودة.'),A('Customer: Fifty. And I want ___ paint too.',['some','any'],0,'في الجملة المثبتة نستعمل some.'),
  A('Assistant: ___ do you want — white or blue?',['What colour','What size'],0),A('Assistant: And ___ do you need? — Customer: Two litres.',['how much','how many'],0,'paint غير معدودة.')]},
 {n:5,ref:'ص 55',st:3,kind:'speak',goal:'كوّن حواراً مشابهاً مع زميلك. أنت تشتري هذه الأشياء من محل الأدوات:',
  card:'<ul lang="en" dir="ltr"><li>a tube of glue — small</li><li>nails — 200</li><li>a tin of paint — green, 1 litre</li><li>a bag of cement — 25 kg</li></ul>',
  useful:['Have you got any nails?','How many do you need?','How much paint do you want?','What colour?','A bag of cement, please.'],
  model:[['Customer','Have you got any nails?'],['Assistant','Yes. How many do you need?'],['Customer','Two hundred, please. And I want a tin of paint.'],['Assistant','What colour?'],['Customer','Green.'],['Assistant','How much do you need?'],['Customer','One litre.']]}
]);
/* ===== 7.3 Future projects ===== */
BX.add('u7-l3',[
 {n:1,ref:'ص 56',st:1,kind:'speak',goal:'مع زميلك: تخيّل «تاكسي طائر» (طائرة صغيرة بلا طيار تنقل راكبين). ما هذا؟ كيف سيتحرك؟',
  useful:["It's a flying taxi.",'It will fly over the city.','It will use electric motors.',"It won't need a pilot.",'It will carry two people.']},
 {n:3,ref:'ص 56',st:2,kind:'typ',intro:'اعترض على كل توقع خاطئ مستعملاً الكلمة بين القوسين. المثال: They\'ll open the metro in 2040. (2030) → They won\'t open it in 2040. They\'ll open it in 2030.',items:[
  {q:"The new metro line will be 80 km long. (40 km)",a:["It won't be 80 km long. It'll be 40 km long.","It will not be 80 km long. It will be 40 km long."]},
  {q:"It will have 50 stations. (25)",a:["It won't have 50 stations. It'll have 25.","It won't have 50 stations. It'll have 25 stations."]},
  {q:"The trains will use diesel. (electricity)",a:["They won't use diesel. They'll use electricity."]},
  {q:"The trains will have drivers. (no drivers)",a:["They won't have drivers. They'll have no drivers."]},
  {q:"It will go to the old town. (the airport)",a:["It won't go to the old town. It'll go to the airport."]},
  {q:"The trains will travel at 300 km/h. (90 km/h)",a:["They won't travel at 300 km/h. They'll travel at 90 km/h."]}]},
 {n:4,ref:'ص 57',st:1,kind:'listen',intro:'استمع إلى مقابلة قصيرة عن جسر مستقبلي (من خيالنا)، ثم أكمل جدول المواصفات.',
  text:"Presenter: When will you complete the Red Sea bridge? Engineer: Around 2040. Presenter: How long will it be? Engineer: Almost 20 km. Presenter: How many spans will it have? Engineer: Three. Each span will be 3000 m long. Presenter: What about the pylons? Engineer: There will be four steel pylons, 600 m high. The piers will be concrete, and the deck will be carbon fibre. It will be very light and strong.",
  then:{kind:'gaps',items:[A('Completion date: ___',['around 2040','around 2014'],0),A('Length: ___',['almost 20 km','almost 12 km'],0),A('Spans: ___',['three, each 3000 m long','two, each 300 m long'],0),
   A('Pylons: ___',['four, steel, 600 m high','four, concrete, 60 m high'],0),A('Piers: ___',['steel','concrete'],1),A('Deck: ___',['carbon fibre','glass'],0)]}},
 {n:5,ref:'ص 57',st:1,kind:'speak',goal:'مع زميلك: اسأل وأجب عن مواصفات جسر البحر الأحمر في التمرين 4 بـ will.',
  useful:['How long will it be?',"It'll be almost 20 km long.",'How many pylons will it have?',"It'll have four.",'What will the deck be made of?'],
  model:[['A','How long will the bridge be?'],['B',"It'll be almost 20 km long."],['A','How high will the pylons be?'],['B',"They'll be 600 m high."]]},
 {n:6,ref:'ص 57',st:3,kind:'order',intro:'خطة بناء ملعب جديد (من خيالنا): رتّب المراحل الثماني حسب الجدول الزمني.',steps:[
  'We\'ll prepare the ground in 2026.','We\'ll lay the foundations in 2027.','We\'ll build the concrete stands in 2028.','We\'ll put the steel roof on in 2029.','We\'ll fix the seats in 2030.','We\'ll lay the grass in early 2031.','We\'ll build the car parks in 2031.','We\'ll open the stadium in 2032.'],done:'الآن مثّل المقابلة مع زميلك: When will you lay the foundations? — In 2027.'},
 {n:7,ref:'ص 57',st:1,kind:'speak',goal:'ناقش مع زميلك: كيف ستتغير حياتنا في السنوات العشرين القادمة؟ قل جملة لكل مجال.',
  steps:['التقنية (السيارات، الهواتف)','الحياة اليومية (العمل، الدراسة)','المدن (المواصلات، المباني)'],
  useful:['Cars will drive themselves.','People will work from home.',"We won't use cash.",'Cities will have more trains.']}
]);
})();

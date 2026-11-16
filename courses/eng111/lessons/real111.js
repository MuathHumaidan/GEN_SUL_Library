/* تبويب «من الواقع» لانجل-111 (تجربة على درسين): حوار من الحياة اليومية لشاب في المملكة يطبق فيه درس اليوم.
   إضافة من خارج الكتاب. المحرك realRender في en.js. اسم الشاب عمر (Omar) لأن الصوت ينطقه جيداً. */
(function(G){const R=G.REAL=G.REAL||{};

R['u1-l1']={
 title:['أول يوم في الورشة','The first day at the workshop'],
 scene:['الساعة 6:45 صباحاً، أول يوم لعمر في ورشة صيانة بمدينة الجبيل الصناعية. مشرف الوردية هندي، وزملاؤه من أكثر من بلد، فأغلب الكلام في الورشة بالإنجليزي. طبّق درس اليوم: الفعل be، والجواب القصير، والرد على التحية، والاسم مع اللقب.',
  'It is 6.45 a.m., Omar\'s first day at a maintenance workshop in Jubail Industrial City. The shift supervisor is from India and the team is from different countries, so most talk is in English. Use today\'s lesson: be, short answers, replying to a greeting, and titles.'],
 me:['عمر، فني جديد','Omar, a new technician'],
 them:{n:'Rajesh Nair',role:['مشرف الوردية','the shift supervisor']},
 steps:[
  {who:'them',t:'Good morning. Are you the new technician?',ar:'صباح الخير. هل أنت الفني الجديد؟'},
  {who:'me',pick:[{t:"Yes, I am. I'm Omar.",ok:1},{t:"Yes, I'm. I'm Omar.",why:['الجواب القصير ما يُختصر في الآخر: Yes, I am.','A short answer is not shortened at the end: Yes, I am.']},{t:'Yes, I is. I am Omar.',why:['مع I نستعمل am، مو is.','With I we use am, not is.']}],ar:'نعم. أنا عمر.'},
  {who:'them',t:"OK. I'm Rajesh Nair, the shift supervisor.",ar:'حسناً. أنا راجيش ناير، مشرف الوردية.'},
  {who:'me',pick:[{t:'Nice to meet you, Mr Nair.',ok:1},{t:'Nice to meet you, Mr Rajesh.',why:['اللقب Mr يجي مع اسم العائلة (Nair)، مو الاسم الأول.','Mr goes with the last name (Nair), not the first name.']},{t:'Nice to meet you, Rajesh.',why:['هو مشرفك وأول مرة تقابله، فالأدب اللقب مع اسم العائلة: Mr Nair.','He is your supervisor and you just met, so use Mr + last name.']}],ar:'سعيد بلقائك يا أستاذ ناير.'},
  {who:'them',t:'Your helmet and gloves are in that box. Are they OK?',ar:'خوذتك وقفازاتك في ذلك الصندوق. هل هي مناسبة؟'},
  {who:'note',t:['عمر يجرّب الخوذة والقفازات، ومقاسها مناسب.','Omar tries the helmet and gloves. They fit.']},
  {who:'me',fill:'Yes, they ___ fine. Thank you.',opts:['am','is','are'],a:'are',why:['they (الخوذة والقفازات) ← are.','they (the helmet and gloves) → are.'],ar:'نعم، مناسبة. شكراً.'},
  {who:'note',t:['يجي فني فلبيني من نفس الوردية.','A Filipino technician from the same shift comes over.']},
  {who:'them',n:'Mark',t:"Hi, I'm Mark. Nice to meet you.",ar:'مرحباً، أنا مارك. سعيد بلقائك.'},
  {who:'me',pick:[{t:'Nice to meet you, too.',ok:1},{t:'Nice to meet you.',why:['هو بدأ بالتحية، فأنت ترد وتزيد too.','He greeted first, so your reply adds too.']},{t:'Nice to meet you, Mr Mark.',why:['مارك زميل، والزميل نناديه باسمه الأول بدون لقب. وما زدت too.','Mark is a colleague: first name, no title. And you need too.']}],ar:'وأنا سعيد بلقائك.'},
  {who:'them',n:'Mark',t:'Is this your first job?',ar:'هل هذه أول وظيفة لك؟'},
  {who:'me',pick:[{t:"Yes, it is. I'm a bit nervous.",ok:1},{t:'Yes, it are.',why:['it ← is.','it → is.']},{t:'Yes, is.',why:['الجواب القصير يحتاج الفاعل: Yes, it is.','A short answer needs the subject: Yes, it is.']}],ar:'نعم. أنا متوتر قليلاً.'},
  {who:'them',n:'Mark',t:"Don't worry. The meeting is at seven. Come with me.",ar:'لا تقلق. الاجتماع الساعة السابعة. تعال معي.'},
  {who:'me',pick:[{t:'OK. Where is the meeting room?',ok:1},{t:'OK. Where the meeting room is?',why:['في السؤال be قبل الشيء: Where is the meeting room?','In a question, be comes before the thing: Where is …?']},{t:'OK. Where are the meeting room?',why:['room مفرد ← is.','room is singular → is.']}],ar:'حسناً. أين غرفة الاجتماعات؟'},
  {who:'them',n:'Mark',t:"It's next to the workshop. Follow me.",ar:'بجانب الورشة. اتبعني.'}
 ],
 used:[{t:['الفعل be مع الضمائر:','be with pronouns:'],ex:'I am · it is · they are'},
  {t:['الجواب القصير:','Short answers:'],ex:'Yes, I am. · Yes, it is.'},
  {t:['الرد على التحية بزيادة too:','Reply with too:'],ex:'Nice to meet you, too.'},
  {t:['المشرف: اللقب مع اسم العائلة. الزميل: الاسم الأول.','Supervisor: title + last name. Colleague: first name.'],ex:'Mr Nair · Mark'}]};

R['u9-l1']={
 title:['مستورد في مصنع التمور','An importer at the dates factory'],
 scene:['عمر موظف مبيعات في مصنع تمور عائلي في القصيم. في موسم التمور يزور المصنع مستورد من ماليزيا يبي يتعامل معهم لأول مرة، ويسأل عن تاريخ المصنع ومبيعاته قبل ما يقرر. طبّق درس اليوم: الماضي البسيط، وأفعال التغيير مع الأرقام.',
  'Omar works in sales at a family dates factory in Al-Qassim. In the dates season, an importer from Malaysia visits. He wants to buy from them for the first time and asks about the factory\'s history and sales. Use today\'s lesson: the past simple and verbs of change.'],
 me:['عمر، موظف المبيعات','Omar, a sales employee'],
 them:{n:'Mr Tan',role:['مستورد تمور من ماليزيا','a dates importer from Malaysia']},
 steps:[
  {who:'them',t:'Your dates are very good. When did the company start?',ar:'تموركم جيدة جداً. متى بدأت الشركة؟'},
  {who:'me',fill:'My grandfather ___ the company in 1985.',opts:['started','starts','start'],a:'started',why:['حدث خلص وله سنة (1985) ← الماضي البسيط.','A finished event with a year → past simple.'],ar:'أسس جدي الشركة عام 1985.'},
  {who:'them',t:'Did you always export?',ar:'هل كنتم تصدّرون دائماً؟'},
  {who:'me',pick:[{t:'No. We sold only in Saudi Arabia until 2015.',ok:1},{t:'No. We selled only in Saudi Arabia until 2015.',why:['sell فعل شاذ: ماضيه sold.','sell is irregular: its past is sold.']},{t:'No. We sell only in Saudi Arabia until 2015.',why:['2015 في الماضي، فالفعل بالماضي.','2015 is in the past, so use the past.']}],ar:'لا. كنا نبيع في السعودية فقط حتى 2015.'},
  {who:'them',t:'And then?',ar:'وبعد ذلك؟'},
  {who:'me',fill:'In 2016, we ___ a new packing factory.',opts:['built','builded','build'],a:'built',why:['build فعل شاذ: ماضيه built.','build is irregular: its past is built.'],ar:'في 2016 بنينا مصنع تغليف جديداً.'},
  {who:'them',t:'How were your sales last year?',ar:'كيف كانت مبيعاتكم العام الماضي؟'},
  {who:'note',t:['عمر يفتح ملف المبيعات في جواله: 2 مليون كرتون ← 3 ملايين كرتون (قيم توضيحية).','Omar opens the sales file on his phone: 2 million boxes → 3 million boxes (example numbers).']},
  {who:'me',pick:[{t:'Sales rose from 2 million to 3 million boxes.',ok:1},{t:'Sales fell from 2 million to 3 million boxes.',why:['الرقم زاد، فالفعل rose مو fell.','The number went up, so rose, not fell.']},{t:'Sales rised from 2 million to 3 million boxes.',why:['rise فعل شاذ: ماضيه rose.','rise is irregular: its past is rose.']}],ar:'ارتفعت المبيعات من مليوني كرتون إلى ثلاثة ملايين.'},
  {who:'them',t:'Your price looks lower this year. Why?',ar:'سعركم يبدو أقل هذه السنة. لماذا؟'},
  {who:'note',t:['السعر: 40 ريالاً ← 35 ريالاً للكرتون، لأن محصول هذا الموسم كبير (قيم توضيحية).','Price: 40 → 35 riyals a box, because this season\'s harvest was big (example numbers).']},
  {who:'me',fill:'The price ___ from 40 to 35 riyals a box. The harvest was very big.',opts:['fell','rose','falled'],a:'fell',why:['الرقم نزل، و fall شاذ: ماضيه fell.','The number went down; fall is irregular: fell.'],ar:'انخفض السعر من 40 إلى 35 ريالاً للكرتون. كان المحصول كبيراً جداً.'},
  {who:'them',t:'OK. Please send me your price list by email.',ar:'حسناً. أرسل لي قائمة أسعاركم بالبريد الإلكتروني لو سمحت.'}
 ],
 used:[{t:['الماضي البسيط لحدث خلص (منتظم وشاذ):','Past simple (regular and irregular):'],ex:'started · sold · built'},
  {t:['السنة مع in:','A year with in:'],ex:'in 2016'},
  {t:['أفعال التغيير مع from … to:','Change verbs with from … to:'],ex:'rose (went up) · fell (went down)'}]};
})(window);

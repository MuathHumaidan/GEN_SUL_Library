/* تبويب «من الواقع» لانجل-111 (تجربة على درسين): حوار من الحياة اليومية لشاب في المملكة يطبق فيه درس اليوم.
   إضافة من خارج الكتاب. المحرك realRender في en.js. اسم الشاب عمر (Omar) لأن الصوت ينطقه جيداً. */
(function(G){const R=G.REAL=G.REAL||{};

R['u1-l1']={
 title:['أول يوم دوام','The first day at work'],
 scene:['عمر فني جديد في شركة Gulf Tech بالجبيل. اليوم أول يوم دوام له، ومشرفه بريطاني. طبّق درس اليوم: الفعل be، والرد على التحية، والاسم مع اللقب.',
  'Omar is a new technician at Gulf Tech in Jubail. It is his first day, and his supervisor is British. Use today\'s lesson: be, replying to a greeting, and titles.'],
 me:['عمر، فني جديد','Omar, a new technician'],
 them:{n:'Daniel Ross',role:['المشرف','the supervisor']},
 steps:[
  {who:'them',t:'Good morning. Are you the new technician?',ar:'صباح الخير. هل أنت الفني الجديد؟'},
  {who:'me',pick:[{t:"Yes, I am. I'm Omar.",ok:1},{t:"Yes, I'm. I'm Omar.",why:['الجواب القصير ما يُختصر في الآخر: Yes, I am.','A short answer is not shortened at the end: Yes, I am.']},{t:'Yes, I is. I am Omar.',why:['مع I نستعمل am، مو is.','With I we use am, not is.']}],ar:'نعم. أنا عمر.'},
  {who:'them',t:"Nice to meet you, Omar. I'm Daniel Ross, your supervisor.",ar:'سعيد بلقائك يا عمر. أنا دانيال روس، مشرفك.'},
  {who:'me',pick:[{t:'Nice to meet you, too, Mr Ross.',ok:1},{t:'Nice to meet you, too, Mr Daniel.',why:['اللقب Mr يجي مع اسم العائلة (Ross)، مو الاسم الأول.','Mr goes with the last name (Ross), not the first name.']},{t:'Nice to meet you, Mr Ross.',why:['هو بدأ بالتحية، فأنت ترد وتزيد too.','He greeted first, so your reply adds too.']}],ar:'وأنا سعيد بلقائك يا أستاذ روس.'},
  {who:'them',t:'Where are you from?',ar:'من أين أنت؟'},
  {who:'me',fill:'I ___ from Riyadh.',opts:['am','is','are'],a:'am',why:['مع I نستعمل am.','With I we use am.'],ar:'أنا من الرياض.'},
  {who:'note',t:['يدخل المكتب زميل عمر الجديد، والمشرف يعرّفهم على بعض.','A new colleague comes in, and the supervisor introduces them.']},
  {who:'them',t:"This is Laura. She's an engineer in our team.",ar:'هذه لورا. هي مهندسة في فريقنا.'},
  {who:'me',pick:[{t:'Hi, Laura. Are you from England?',ok:1},{t:'Hi, Laura. Is you from England?',why:['مع you نستعمل are.','With you we use are.']},{t:'Hi, Laura. You from England?',why:['السؤال يحتاج be في أوله: Are you …?','A question needs be first: Are you …?']}],ar:'مرحباً يا لورا. هل أنتِ من إنجلترا؟'},
  {who:'them',n:'Laura',t:"No, I'm not. I'm from Scotland. Welcome to the team!",ar:'لا. أنا من اسكتلندا. أهلاً بك في الفريق!'},
  {who:'me',fill:'Thank you. We ___ a great team!',opts:['am','is','are'],a:'are',why:['مع we نستعمل are.','With we we use are.'],ar:'شكراً. نحن فريق رائع!'}
 ],
 used:[{t:['الفعل be مع الضمائر:','be with pronouns:'],ex:'I am · he / she is · you / we are'},
  {t:['الجواب القصير:','Short answers:'],ex:"Yes, I am. · No, I'm not."},
  {t:['الرد على التحية بزيادة too:','Reply with too:'],ex:'Nice to meet you, too.'},
  {t:['اللقب مع اسم العائلة:','A title with the last name:'],ex:'Mr Ross'}]};

R['u9-l1']={
 title:['زائرة في مصنع التمور','A visitor at the dates factory'],
 scene:['عمر يعمل في مصنع تمور عائلي في القصيم. جاءت زائرة من شركة بريطانية تشتري التمور، وتسأله عن تاريخ المصنع. طبّق درس اليوم: الماضي البسيط، وأفعال التغيير مع الأرقام.',
  'Omar works at a family dates factory in Al-Qassim. A buyer from a British company asks about the factory\'s history. Use today\'s lesson: the past simple and verbs of change.'],
 me:['عمر، موظف المبيعات','Omar, a sales employee'],
 them:{n:'Helen Carter',role:['مشترية من لندن','a buyer from London']},
 steps:[
  {who:'them',t:'When did the company start?',ar:'متى بدأت الشركة؟'},
  {who:'me',fill:'My grandfather ___ the company in 1985.',opts:['started','starts','start'],a:'started',why:['حدث خلص وله سنة (1985) ← الماضي البسيط.','A finished event with a year → past simple.'],ar:'أسس جدي الشركة عام 1985.'},
  {who:'them',t:'Did you always sell dates abroad?',ar:'هل كنتم تبيعون التمور للخارج دائماً؟'},
  {who:'me',pick:[{t:'No. We sold dates only in Saudi Arabia until 2010.',ok:1},{t:'No. We selled dates only in Saudi Arabia until 2010.',why:['sell فعل شاذ: ماضيه sold.','sell is irregular: its past is sold.']},{t:'No. We sell dates only in Saudi Arabia until 2010.',why:['2010 في الماضي، فالفعل بالماضي.','2010 is in the past, so use the past.']}],ar:'لا. كنا نبيع التمور في السعودية فقط حتى 2010.'},
  {who:'them',t:'And what happened after that?',ar:'وماذا حدث بعد ذلك؟'},
  {who:'me',fill:'In 2012, we ___ a new factory.',opts:['built','builded','build'],a:'built',why:['build فعل شاذ: ماضيه built.','build is irregular: its past is built.'],ar:'في 2012 بنينا مصنعاً جديداً.'},
  {who:'them',t:'How were sales last year?',ar:'كيف كانت المبيعات العام الماضي؟'},
  {who:'note',t:['المبيعات: 2 مليون كرتون ← 3 ملايين كرتون (قيم توضيحية)','Sales: 2 million boxes → 3 million boxes (example numbers)']},
  {who:'me',pick:[{t:'Sales rose from 2 million to 3 million boxes.',ok:1},{t:'Sales fell from 2 million to 3 million boxes.',why:['الرقم زاد، فالفعل rose مو fell.','The number went up, so rose, not fell.']},{t:'Sales rised from 2 million to 3 million boxes.',why:['rise فعل شاذ: ماضيه rose.','rise is irregular: its past is rose.']}],ar:'ارتفعت المبيعات من مليوني كرتون إلى ثلاثة ملايين.'},
  {who:'them',t:'And the price?',ar:'والسعر؟'},
  {who:'note',t:['السعر: 40 ريالاً ← 35 ريالاً للكرتون (قيم توضيحية)','Price: 40 riyals → 35 riyals a box (example numbers)']},
  {who:'me',fill:'The price ___ from 40 to 35 riyals a box.',opts:['fell','rose','falled'],a:'fell',why:['الرقم نزل، و fall شاذ: ماضيه fell.','The number went down; fall is irregular: fell.'],ar:'انخفض السعر من 40 إلى 35 ريالاً للكرتون.'},
  {who:'them',t:'Thank you, Omar. That was very interesting.',ar:'شكراً يا عمر. كان ذلك مثيراً جداً للاهتمام.'}
 ],
 used:[{t:['الماضي البسيط لحدث خلص (منتظم وشاذ):','Past simple (regular and irregular):'],ex:'started · sold · built'},
  {t:['السنة مع in:','A year with in:'],ex:'in 2012'},
  {t:['أفعال التغيير مع from … to:','Change verbs with from … to:'],ex:'rose (went up) · fell (went down)'}]};
})(window);

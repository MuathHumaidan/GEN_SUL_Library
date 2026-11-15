/* الوحدة 3 (Business Goals 2) — Occupations: Part A Describing your job (ص 14–15) · Part B Talking about your abilities (ص 16–17)
   · Review 1 (ص 18–19) + Help files ص 90–91. الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 3A Describing your job ========== */
const JOBS=[{j:'graphic designer',env:'studio',r:'brochure design',co:'a printing company',n:'Lucy',y:'2019'},{j:'engineer',env:'laboratory',r:'quality control',co:'a car parts company',n:'Mark',y:'2015'},{j:'customer service agent',env:'call centre',r:"dealing with customers' questions",co:'a phone company',n:'Nadia',y:'2021'},{j:'sales representative',env:"customers' offices",r:'finding new customers',co:'a computer company',n:'Tom',y:'2018'}];
function lab3a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الوظيفة</h3><p class="sub">أشخاص من إعدادنا، مبنيون على التمارين 1 و 2 و 3 ص 14–15. اختر الشخص ثم طريقة وصف المسؤولية.</p>
  <div class="ph-row">${JOBS.map((x,i)=>`<button type="button" class="btn" data-j="${i}">${x.n}</button>`).join('')}</div>
  <div class="ph-row"><button type="button" class="btn" data-f="r">I'm responsible for …</button><button type="button" class="btn" data-f="c">I'm in charge of …</button><button type="button" class="btn" data-f="m">It's my job to …</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">يصف عمله</h3><div id="o"></div><div id="t"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الفرق بين <span class="en">for</span> و <span class="en">since</span> في الجملة الثالثة؟</li><li>بعد <span class="en">responsible for</span>: اسم أم فعل بـ ing؟</li><li>صف عملك أو عملاً تحبه بالعبارات نفسها.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let j=0,f='r';
 const ing=r=>r.replace(/^(\w+)/,m=>m);
 const sh=()=>{el.querySelectorAll('[data-j]').forEach(b=>b.classList.toggle('pri',+b.dataset.j===j));el.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('pri',b.dataset.f===f));const x=JOBS[j],yrs=2026-+x.y;
  const resp=f==='r'?`I'm responsible for ${x.r}.`:f==='c'?`I'm in charge of ${x.r}.`:`It's my job to ${{'brochure design':'design brochures','quality control':'check the quality of our products',"dealing with customers' questions":"answer customers' questions",'finding new customers':'find new customers'}[x.r]}.`;
  $('#o').innerHTML=eb([`My name's ${x.n}. I'm a ${x.j}.`,`I work for ${x.co}. I work in a ${x.env}.`.replace('a customers','customers').replace("in a customers' offices","in customers' offices"),`I've worked there since ${x.y}. (= for ${yrs} years)`,resp]);
  $('#t').innerHTML=`<p class="sub">${f==='m'?`بعد ${e("It's my job to")} الفعل كما هو.`:`بعد ${e(f==='r'?'responsible for':'in charge of')} اسم أو فعل + ${e('ing')}.`}</p>`};
 el.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{j=+b.dataset.j;sh()});el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=b.dataset.f;sh()});sh();
}
const JB3={what:['What do you do?',"I'm a production manager.",'الوظيفة'],who:['Who do you work for?','I work for Espinosa in the production division.','الشركة'],resp:['What exactly do you do?',"I'm responsible for producing batteries.",'المسؤولية'],job:['What exactly do you do?',"It's my job to ensure that our toys are safe.",'المسؤولية'],man:['What exactly do you do?','I manage a team of five designers.','الإدارة']};
const LAB333A={title:'صف عملك',w:(el,B)=>N.labB(el,B,{intro:'اختر السؤال والجواب.',
 controls:[{k:'q',label:'السؤال',opts:Object.keys(JB3).map(k=>[k,JB3[k][2]])}],
 out:({q})=>{const [a,b,ar]=JB3[q];return{pieces:[[a,'k','السؤال'],[b,'n',ar]],say:`${a} ${b}`,why:q==='resp'?`${e('responsible for')} + اسم أو ${e('ing')}.`:q==='job'?`${e("It's my job to")} + الفعل كما هو.`:'عبارات ثابتة للحديث عن العمل.'}}})};
const FS3={y:['nine years','for'],m:['six months','for'],d:['three days','for'],s:['September','since'],t:['2002','since'],b:['I was seventeen','since']};
const LAB333B={title:'for أم since؟ (مراجعة)',w:(el,B)=>N.labB(el,B,{intro:'اختر الزمن.',
 controls:[{k:'x',label:'الزمن',opts:Object.keys(FS3).map(k=>[k,FS3[k][0]])}],
 out:({x})=>{const [t,w]=FS3[x];return{pieces:[["He's worked at Avco",'n','المضارع التام'],[w,'k',w==='for'?'مدة':'بداية'],[t+'.','q','']],say:`He's worked at Avco ${w} ${t}.`,why:w==='for'?`${e('for')} + مدة.`:`${e('since')} + نقطة البداية.`}}})};
const R31=N.rule({title:'الحديث عن العمل والمسؤوليات، والمضارع التام مع for و since',ref:'ص 14–15، ص 90–91',
 intro:`حين تصف عملك تذكر وظيفتك، وشركتك، ومكان عملك، ومسؤولياتك، ومنذ متى تعمل.`,
 parts:[
 {t:'الوظيفة ومكان العمل والمسؤولية',short:'responsible for · in charge of',old:[1,2],q:'كيف تقول ما تفعله في عملك بالضبط؟',ref:'ص 14–15، ص 90',
  lead:`ثلاثة أسئلة ثابتة، ولكل منها أجوبة ثابتة.`,
  points:[`${e("What do you do? — I'm a production manager.")}`,`${e('Who do you work for? — I work for Espinosa in the production division.')}`,`${e("What exactly do you do? — I'm in charge of / responsible for producing batteries.")}`,`${e("It's my job to ensure that …")} (بعدها جملة)، و ${e('I manage a team of five designers.')}`,`<b>أماكن العمل:</b> ${e('office · factory · studio · laboratory · call centre')}`],
  rows:[['graphic designer','studio · brochure design'],['engineer','laboratory · quality control'],['customer service agent',"call centre · customers' questions"],['sales representative',"customers' offices · new customers"]],head:['Job','Environment · Responsibility'],
  pairs:[['I am responsible of the team.',"I'm responsible for the team.",'responsible for.'],["It's my job ensure that …","It's my job to ensure that …",'my job to + الفعل.'],['I work for a call centre.','I work in a call centre.','المكان: in.']],labs:[LAB333A]},
 {t:'منذ متى؟ for و since',short:'for · since',old:[3],q:'Ron يعمل في Canon منذ 1998: هل ما زال يعمل فيها؟',ref:'ص 15، ص 90',
  lead:`المضارع التام مع ${e('for')} و ${e('since')} لشيء بدأ في الماضي وما زال مستمراً (مراجعة لما درسته في الوحدة 11).`,
  points:[`${e("I've worked for Canon since 1998.")} = بدأ سنة 1998 وما زال يعمل.`,`${e("I've worked here for five years.")} = بدأ قبل خمس سنوات وما زال.`,`${e('for')} + مدة: ${e('four years · six months · ages')}، و ${e('since')} + بداية: ${e('September · 2002 · I was seventeen')}`],
  pairs:[['I work here since 2015.',"I've worked here since 2015.",'المضارع التام.'],["I've worked here since five years.","I've worked here for five years.",'مدة: for.']],labs:[LAB333B]}
 ]});
B.lesson({
 id:'u3-l1',unit:3,order:1,pages:'14–15',
 title:'Part A: Describing your job — وصف عملك',
 summary:'الوظائف وأماكن العمل والمسؤوليات (graphic designer، studio، quality control)، وعبارات وصف العمل (What do you do? I\'m responsible for … I\'m in charge of … It\'s my job to …)، والمضارع التام مع for و since لمدة العمل.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 14–15',html:`<p>تصف عملك ومسؤولياتك. ستتعلم:</p><ol><li>أسماء الوظائف وأماكن العمل والمسؤوليات.</li><li>عبارات ${e("responsible for · in charge of · It's my job to")}.</li><li>مدة العمل بـ ${e('for')} و ${e('since')}.</li></ol>`},
  ...R31.theory,
  {h:'تمارين الكتاب',ref:'ص 14–15، ص 90–91',html:
   bk(1,'ص 14','استعمل كلمة من كل مجموعة لتصف وظائف الأشخاص في الصور.',['graphic designer · studio · brochure design','engineer · laboratory · quality control','customer service agent · call centre · dealing with customers\' questions','sales representative · customers\' offices · finding new customers'],'ترتيب الصور من قراءتنا للصور الصغيرة.')+
   bk(2,'ص 15','استمع إلى Denise و Derek: ما وظيفتاهما؟ أكمل الجدول، ثم أكمل جملهما.',['a: Denise graphic designer · Derek engineer','b: Denise: an advertising company in Dublin · yes · her work is interesting and the people are great fun — Derek: an English toy company · yes · he feels he is doing something important for a lot of people',"c1 work for · c2 'm responsible for · c3 my job to ensure · c4 work for · c5 in charge of … my job to ensure · c6 manage"])+
   bk(3,'ص 15','اقرأ عن Ron و Janine وأجب.',['1 in 1998','2 Yes, he does.','3 five years ago','4 Yes, she does.'])+
   bk(4,'ص 15','نشاط ثنائي: صف عملك (بطاقة) لزميلك، وأكمل جدول عمله.',null,'معلومات الطالب أ في ص 77 من الكتاب.')+
   bk(5,'ص 15','تحدثوا عن عملكم أو دراستكم، ثم عن عمل زملائكم.',null)+
   bk('Language file 2','ص 90','اكتب جملاً بالمضارع التام مع for أو since.',['1 Ana has worked here for nine years.','2 Marcos has worked in Madrid since 1999.','3 She has lived in Paris since 2001.','4 We have worked together for eight months.','5 The marketing team has worked on this project for three weeks.',"6 I've been in this meeting since 9.00!",'7 My manager has been on holiday for two weeks.','8 Steve has lived in Germany for six months.'])+
   bk('Vocabulary file 1','ص 91','طابق أماكن العمل بالأوصاف.',['1 call centre','2 office','3 laboratory','4 studio','5 factory'])},
  {h:'الاستماع',ref:'ص 15',html:au('3A-2','ص 15 — التمرين 2','Denise و Derek يتحدثان عن عملهما.')}
 ],
 stations:[
  {intro:true},
  ...R31.stations,
  {recap:["What do you do? — I'm a … · Who do you work for? — I work for …","I'm responsible for / in charge of + اسم أو ing.","It's my job to + الفعل.",'office · factory · studio · laboratory · call centre.',"I've worked here for five years / since 2020."]}
 ],
 lab:lab3a,
 examples:[
  {title:'مثال 1: الوظيفة والشركة',ref:'ص 90',q:`<p>أنت مهندس في شركة كهرباء. أجب: ${e('What do you do? Who do you work for?')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'm an engineer.")}`},{t:`الخطوة 2: ${e('I work for a power company.')}`},{t:`الخطوة 3: ${e("I'm an engineer. I work for a power company.")}`,final:true}]},
  {title:'مثال 2: المسؤولية',ref:'ص 90',q:`<p>قل إنك مسؤول عن فحص المولدات.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'm responsible for")}`},{t:`الخطوة 2: الفعل بـ ${e('ing')}: ${e('checking')}`},{t:`الخطوة 3: ${e("I'm responsible for checking the generators.")}`,final:true}]},
  {title:'مثال 3: منذ متى',ref:'ص 90',q:`<p>بدأت العمل في سبتمبر وما زلت. اكتب.</p>`,given:[],solve:()=>[{t:'الخطوة 1: مستمر: المضارع التام.'},{t:`الخطوة 2: شهر = بداية: ${e('since')}.`},{t:`الخطوة 3: ${e("I've worked here since September.")}`,final:true}]}
 ],
 quiz:[
  {q:"I'm responsible ___ quality control.",o:['for','of','to','with'],c:0,e:'responsible for.'},
  {q:"It's my job ___ that our toys are safe.",o:['to ensure','ensure','ensuring','for ensure'],c:0,e:'to + الفعل.'},
  {q:'A customer service agent works in a ___.',o:['call centre','studio','laboratory','factory'],c:0,e:'call centre.'},
  {q:"I've worked for Canon ___ 1998.",o:['since','for','from','in'],c:0,e:'since + بداية.'},
  {q:"I'm in charge ___ safety testing.",o:['of','for','to','at'],c:0,e:'in charge of.'},
  {q:'I ___ a team of ten engineers.',o:['manage','am manage','managing','manages'],c:0,e:'I manage.'}
 ]
});

/* ========== 3B Talking about your abilities ========== */
const QL=[['be','flexible'],['be','creative'],['be','organized'],['be','experienced'],['have','good communication skills'],['have','experience'],['have','good computer skills'],['be able to','work well in a team'],['be able to','work under pressure'],['be able to','speak a foreign language']];
const JOBQ={tm:['TV reporter',[0,4,8]],te:['teacher',[2,4,7]],sc:['scientist',[2,3,6]],om:['office manager',[2,6,7]],wr:['writer',[1,6,9]]};
function lab3b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">إعلان الوظيفة</h3><p class="sub">مبني على التمرين 2 ص 16. اختر الوظيفة، ثم الصيغة.</p>
  <div class="ph-row">${Object.keys(JOBQ).map(k=>`<button type="button" class="btn" data-j="${k}">${JOBQ[k][0]}</button>`).join('')}</div>
  <div class="ph-row"><button type="button" class="btn" data-f="need">You need to …</button><button type="button" class="btn" data-f="have">You have to …</button><button type="button" class="btn" data-f="dont">You don't need to …</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الإعلان</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الكلمات التي تأتي بعد <span class="en">be</span>، وما التي تأتي بعد <span class="en">have</span>؟</li><li>لماذا نقول <span class="en">be able to speak</span> لا <span class="en">have to can speak</span>؟</li><li>اكتب ثلاث جمل عن قدراتك بـ <span class="en">I can</span> و <span class="en">I can't</span>.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let j='te',f='need';
 const sh=()=>{el.querySelectorAll('[data-j]').forEach(b=>b.classList.toggle('pri',b.dataset.j===j));el.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('pri',b.dataset.f===f));const [n,ix]=JOBQ[j];
  const v=f==='need'?'You need to':f==='have'?'You have to':"You don't need to";
  $('#o').innerHTML=`<p><b>${e(n.toUpperCase()+' WANTED')}</b></p>`+eb(f==='dont'?[`${v} have a degree. We give full training.`,`${v} be experienced.`]:ix.map(i=>`${v} ${QL[i][0]} ${QL[i][1]}.`))};
 el.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{j=b.dataset.j;sh()});el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=b.dataset.f;sh()});sh();
}
const LAB333C={title:'be أم have أم be able to؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة أو المهارة، وشاهد الكلمة التي قبلها.',
 controls:[{k:'q',label:'الصفة',opts:QL.map((x,i)=>[String(i),x[1]])}],
 out:({q})=>{const [v,w]=QL[+q];return{pieces:[['You need to','x',''],[v,'k',v==='be'?'صفة':v==='have'?'اسم':'فعل'],[w+'.','n','']],say:`You need to ${v} ${w}.`,why:v==='be'?`${e('be')} + صفة: ${e('flexible · creative · organized')}`:v==='have'?`${e('have')} + اسم: ${e('experience · skills')}`:`${e('be able to')} + فعل: ${e('work · speak')}`}}})};
const MD3={need:['You need to','be ambitious.','ضروري'],have:['You have to','be ambitious.','ضروري'],dont:["You don't need to",'be qualified.','غير ضروري'],q:['Do you need to','be hard-working?','سؤال'],noun:['You need','qualifications.','need + اسم'],can:['I can','speak three languages.','قدرتي'],cant:["I can't",'speak Russian.','لا أستطيع'],able:['You have to be able to','speak a foreign language.','can بعد have to']};
const LAB333D={title:'need to · have to · can',w:(el,B)=>N.labB(el,B,{intro:'اختر الصيغة.',
 controls:[{k:'m',label:'الصيغة',opts:Object.keys(MD3).map(k=>[k,MD3[k][0]])}],
 out:({m})=>{const [a,b,ar]=MD3[m];return{pieces:[[a,m==='dont'||m==='cant'?'r':'k',ar],[b,'n','']],say:`${a} ${b}`,why:m==='able'?`${e('can')} لا مصدر لها، فبعد ${e('have to')} نقول ${e('be able to')}.`:m==='noun'?`${e('need')} + اسم مباشرة.`:m.startsWith('can')?`${e('can / can\'t')} + الفعل كما هو لقدراتك.`:`${e('need to / have to')} + الفعل للضروري، و ${e("don't need to")} لغير الضروري.`}}})};
const R32=N.rule({title:'الصفات والمهارات المطلوبة، و need to و have to و can',ref:'ص 16–17، ص 90–91',
 intro:`في إعلانات الوظائف والمقابلات نتحدث عن الصفات والمهارات المطلوبة، وعن قدراتنا نحن.`,
 parts:[
 {t:'الصفات والمهارات',short:'be · have · be able to',old:[1],q:'لماذا نقول be flexible لكن have experience؟',ref:'ص 16، ص 91',
  lead:`الصفة بعد ${e('be')}، والاسم بعد ${e('have')}، والفعل بعد ${e('be able to')}.`,
  points:[`<b>be + صفة:</b> ${e('flexible · creative · ambitious · organized · experienced · patient · confident · punctual · qualified')}`,`<b>have + اسم:</b> ${e('experience · good communication skills · good computer skills · ambition · patience · qualifications')}`,`<b>be able to + فعل:</b> ${e('work well in a team · work under pressure · work on your own · speak a foreign language')}`],
  rows:[['flexible · creative · organized','be …'],['experience · qualifications','have …'],['good communication skills','have …'],['work well in a team','be able to …'],['speak a foreign language','be able to …']],head:['English','قبلها'],
  pairs:[['You need to be experience.','You need to be experienced. / You need to have experience.','صفة بعد be، واسم بعد have.'],['You need to have creative.','You need to be creative.','creative صفة.']],labs:[LAB333C]},
 {t:'need to و have to و can',short:'need to · have to · can',old:[2,3],q:'كيف تقول إن الشهادة غير ضرورية لهذه الوظيفة؟',ref:'ص 16، ص 90',
  lead:`${e('need to')} و ${e('have to')} للضروري في الوظيفة، و ${e("don't need to / don't have to")} لغير الضروري، و ${e('can / can\'t')} لقدراتك أنت.`,
  points:[`${e('To be a company director, you need to / have to be ambitious.')}`,`${e("You don't need to be qualified to be a waiter.")}`,`<b>السؤال:</b> ${e('Do you need to be hard-working to be a doctor?')}`,`${e('need')} + اسم: ${e('You need qualifications to be a teacher.')}`,`<b>قدراتك:</b> ${e("I can speak three foreign languages, but I can't speak Russian.")}`,`${e('can')} بلا مصدر: ${e('You have to be able to speak …')} لا ${e('have to can speak')}.`],
  pairs:[['You have to can speak English.','You have to be able to speak English.','be able to بعد have to.'],["You don't need be qualified.","You don't need to be qualified.","don't need to."],['Do you need be organized?','Do you need to be organized?','need to.']],labs:[LAB333D]}
 ]});
B.lesson({
 id:'u3-l2',unit:3,order:2,pages:'16–17',
 title:'Part B: Talking about your abilities — الحديث عن قدراتك',
 summary:'الصفات والمهارات المطلوبة في العمل (be flexible، have experience، be able to work under pressure)، و need to و have to و don\'t need to للضروري وغير الضروري، و can و be able to للقدرات، واختيار أفضل مرشح لوظيفة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 16–17',html:`<p>تتحدث عن متطلبات الوظيفة وعن قدراتك. ستتعلم:</p><ol><li>الصفات والمهارات مع ${e('be · have · be able to')}.</li><li>${e("need to · have to · don't need to")}.</li><li>${e("can · can't · be able to")}.</li></ol>`},
  ...R32.theory,
  {h:'تمارين الكتاب',ref:'ص 16–17، ص 90–91',html:
   bk(1,'ص 16','استمع إلى Karen و Peter: صح أم خطأ؟ ثم صنّف الكلمات.',['a: 1 T · 2 F · 3 T · 4 F','b: be: flexible · creative · ambitious · experienced · organized — have: experience · good communication skills · good computer skills — be able to: work under pressure · work well in a team · speak a foreign language'])+
   bk(2,'ص 16','أكمل الجمل كما قالها Karen و Peter، ثم تحدث عن قدرات وظائف مختلفة.',['1 need to',"2 don't need to",'3 have to','4 Do you need to','5 need to','6 have to','7 You need','8 Do you have to',"9 don't have to","10 can't"])+
   bk(3,'ص 17','من الأفضل للمنصب في مكتب المكسيك؟ ثم استمع إلى المديرين: ماذا راعيا؟ ومن اختارا؟',['c: راعيا: languages · experience with the company · knowledge of the company and its products · skills (communication) · personality (keen, flexible)','لم يراعيا: qualifications · experience with other companies · knowledge of the country','اختارا Jeff Talbot'])+
   bk(4,'ص 17','هل على صاحب العمل أن يراعي العمر والجنسية والجنس والحالة الاجتماعية وعدد الأطفال؟ ناقش.',null)+
   bk('Language file 3','ص 90','أكمل الإعلان بـ need أو need to أو have to.',['1 Do you have to','2 Do you need',"3 don't need","4 don't need to",'5 do you need','6 need to (have to)','7 need','8 have to','9 need to','10 have to',"11 don't have to","12 don't have to"])+
   bk('Vocabulary file 2','ص 91','استبدل الكلمات المسطّرة.',['1 ambition','2 communication skills','3 creative','4 confident','5 flexible','6 organized'])},
  {h:'الاستماع',ref:'ص 16–17',html:au('3B-1','ص 16 — التمرينان 1 و 2','Karen و Peter يتحدثان عن إعلان وظيفة.')+au('3B-3','ص 17 — التمرين 3','مديران يختاران موظفاً لمكتب المكسيك.')}
 ],
 stations:[
  {intro:true},
  ...R32.stations,
  {recap:['be + صفة · have + اسم · be able to + فعل.','You need to / have to be flexible.',"You don't need to be experienced.","I can … · I can't …",'have to be able to (لا have to can).']}
 ],
 lab:lab3b,
 examples:[
  {title:'مثال 1: صفة أم اسم؟',ref:'ص 16',q:`<p>أكمل: ${e('You need to ___ good communication skills.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('skills')} اسم.`},{t:`الخطوة 2: قبل الاسم: ${e('have')}.`},{t:`الخطوة 3: ${e('You need to have good communication skills.')}`,final:true}]},
  {title:'مثال 2: غير ضروري',ref:'ص 90',q:`<p>الخبرة غير ضرورية لهذه الوظيفة. اكتب.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("You don't need to")}`},{t:`الخطوة 2: + ${e('have experience')}`},{t:`الخطوة 3: ${e("You don't need to have experience.")}`,final:true}]},
  {title:'مثال 3: be able to',ref:'ص 90',q:`<p>صحّح: ${e('You have to can work under pressure.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('can')} لا تأتي بعد ${e('have to')}.`},{t:`الخطوة 2: نستعمل ${e('be able to')}.`},{t:`الخطوة 3: ${e('You have to be able to work under pressure.')}`,final:true}]}
 ],
 quiz:[
  {q:'You need to be ___.',o:['flexible','experience','skills','ambition'],c:0,e:'صفة بعد be.'},
  {q:'You need to have good computer ___.',o:['skills','skilled','able','creative'],c:0,e:'اسم بعد have.'},
  {q:'You have to be able ___ work in a team.',o:['to','for','can','—'],c:0,e:'be able to.'},
  {q:"You ___ need to be qualified to be a waiter.",o:["don't","doesn't","not","aren't"],c:0,e:"don't need to."},
  {q:"I ___ speak Russian.",o:["can't","don't able","not can","haven't"],c:0,e:"can't."},
  {q:'___ you need to be organized?',o:['Do','Are','Have','Can'],c:0,e:'Do you need to …?'}
 ]
});

/* ========== Review 1 ========== */
B.lesson({
 id:'u3-l3',unit:3,order:3,pages:'18–19',
 title:'Review 1 — مراجعة الوحدات 1–3',
 summary:'مراجعة الصفات الشخصية (experienced، confident، punctual، flexible)، واستقبال الزائر في المطار، والأسماء المركبة لأنواع الشركات، والمضارع البسيط والماضي البسيط والمضارع التام والمستمر والمبني للمجهول، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 18–19',html:vt([['استقبال الزائر',"Hello. Are you …? I'm … We spoke on the phone. Can I take one of those bags?",'الوحدة 1'],['أنواع الشركات','car dealer · estate agent · law firm · ticket agent','الوحدة 2'],['الصفات','experienced · confident · creative · punctual · flexible · patient','الوحدة 3'],['الأزمنة','I work … · I started … · I was moved … · I have been … · they are training me …','1–3']],['الموضوع','أمثلة','من'])},
  {h:'الأزمنة في قصة واحدة',ref:'ص 19',html:vt([['I work for a big company.','المضارع البسيط: حقيقة ثابتة'],['I started six years ago.','الماضي البسيط: وقت محدد'],['I was moved to Head Office.','الماضي المجهول: الشركة نقلته'],["I've been here for a month.",'المضارع التام: مستمر حتى الآن'],["They're training me at the moment.",'المضارع المستمر: الآن'],["I'm not enjoying the training.",'المضارع المستمر المنفي']],['جملة','الزمن'])},
  {h:'تمارين المراجعة',ref:'ص 18–19',html:
   bk('Vocabulary 1','ص 18','أكمل الكلمات المتقاطعة.',['Across: 1 experienced · 4 confident · 6 creative · 7 ambitious · 9 qualified','Down: 2 punctual · 3 patient · 5 flexible · 8 skills'],'من قراءتنا لشبكة الكلمات المتقاطعة.')+
   bk('Language 1','ص 18','رتّب حوار Isabella و Clare في المطار.',['a 1 · f 2 · c 3 · j 4 · g 5 · i 6 · b 7 · d 8 · e 9 · h 10'])+
   bk('Communication 1','ص 19','مثّل موقفين: استقبال في المطار لصديق، وأول لقاء في استقبال الشركة.',null)+
   bk('Vocabulary 2','ص 19','اختر الكلمة الصحيحة، ثم قرّر إلى أي شركة يذهب كل شخص.',['1 firm · 2 dealer · 3 company · 4 agent · 5 dealer · 6 firm · 7 firm · 8 agent','1 car dealer · 2 estate agent · 3 ticket agent · 4 accountancy firm · 5 law firm · 6 furniture dealer'])+
   bk('Language 2','ص 19','أكمل النص بصيغة الفعل المناسبة.',['1 work','2 am','3 like','4 started','5 was moved',"6 have been ('ve been)",'7 are training',"8 'm not enjoying (am not enjoying)"])+
   bk('Communication 2','ص 19','فكّر في وظيفة لا تحب أن تعملها، وأخبر زميلك بمهاراتها ولماذا لا تحبها.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدتان 1 و 3',title:'خلاصة: الزائر والصفات',q:'ما الصفة: Never late؟',ref:'ص 18',
   art:art(`${[['experienced','did it for a long time'],['confident','sure of yourself'],['creative','good at new ideas'],['ambitious','wants success'],['punctual','never late'],['patient','stays calm'],['flexible','can change'],['qualified','passed exams']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="${20+(i%2)*165}" y="${20+Math.floor(i/2)*52}" width="155" height="42" rx="10" fill="${i%3?C.paper:C.yel}" stroke="${C.ink}" stroke-width="1.5"/>${TL(97+(i%2)*165,46+Math.floor(i/2)*52,x[0],{fs:13,w:700})}</g>`).join('')}`,'qualities'),
   cap:'الصفات الشخصية. مرّر المؤشر لترى معنى كل صفة بالإنجليزية.',side:[{tip:`الصفة بعد ${e('be')}: ${e('He is punctual.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الصفة:',items:[{s:'She is never late. She is very ___.',o:['punctual','creative'],a:0},{s:'He has done this job for 20 years. He is ___.',o:['experienced','ambitious'],a:0},{s:'Can I take one of those ___?',o:['bags','flights'],a:0},{s:"It's good to meet you at ___.",o:['last','first'],a:0}]}),title:'مختبر مصغّر: الصفات والمطار'}]},
  {st:2,short:'الوحدة 2 والأزمنة',title:'خلاصة: الشركات والأزمنة',q:'إلى من تذهب لتشتري بيتاً؟',ref:'ص 19',
   side:[{tip:`${e('estate agent')} للبيوت، و ${e('law firm')} للقانون، و ${e('ticket agent')} للتذاكر.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'إلى أي شركة؟',cases:[{q:'We need new vehicles.',opts:[['car dealer',1],['law firm',0]]},{q:'We need a bigger office.',opts:[['estate agent',1],['ticket agent',0]]},{q:'Check my finances, please.',opts:[['accountancy firm',1],['furniture dealer',0]]}]}),title:'مختبر مصغّر: الشركات'},{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الزمن:',items:[{s:'I ___ for a big car company.',o:['work','am worked'],a:0},{s:'I ___ there six years ago.',o:['started','have started'],a:0},{s:'I ___ to Head Office by the company.',o:['was moved','moved'],a:0},{s:"I ___ at Head Office for a month.",o:["'ve been",'am'],a:0}]}),title:'مختبر مصغّر: الأزمنة'}]},
  {recap:['experienced · confident · creative · ambitious · qualified · punctual · patient · flexible · skills.',"Hello. Are you …? · We spoke on the phone. · It's good to meet you at last.",'car dealer · estate agent · law firm · accountancy firm · ticket agent.','work · started · was moved · have been · are training.']}
 ],
 examples:[
  {title:'مثال 1: الصفة',ref:'ص 18',q:`<p>شخص هادئ حين يتأخر شيء. ما صفته؟</p>`,given:[],solve:()=>[{t:'الخطوة 1: يبقى هادئاً.'},{t:`الخطوة 2: ${e('patient')}`},{t:`الخطوة 3: ${e('He is patient.')}`,final:true}]},
  {title:'مثال 2: الشركة',ref:'ص 19',q:`<p>${e('This is a complex legal problem.')} إلى أي شركة نذهب؟</p>`,given:[],solve:()=>[{t:'الخطوة 1: مشكلة قانونية.'},{t:`الخطوة 2: ${e('law firm')}`},{t:`الخطوة 3: ${e('We should go to a law firm.')}`,final:true}]},
  {title:'مثال 3: الزمن',ref:'ص 19',q:`<p>أكمل: ${e('At the moment they ___ (train) me to be a manager.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('At the moment')} = الآن.`},{t:'الخطوة 2: المضارع المستمر.'},{t:`الخطوة 3: ${e('At the moment they are training me to be a manager.')}`,final:true}]}
 ],
 quiz:[
  {q:'Never late:',o:['punctual','patient','creative','qualified'],c:0,e:'punctual.'},
  {q:'Good at thinking of new ideas:',o:['creative','flexible','confident','ambitious'],c:0,e:'creative.'},
  {q:"It's good to meet you at ___.",o:['last','end','first','least'],c:0,e:'at last.'},
  {q:'They sell cars:',o:['car dealer','law firm','estate agent','ticket agent'],c:0,e:'car dealer.'},
  {q:'I ___ to Head Office by the company.',o:['was moved','moved','am moving','have move'],c:0,e:'المجهول.'},
  {q:"I ___ at Head Office for just a month.",o:["'ve been",'am','was','be'],c:0,e:'المضارع التام.'}
 ]
});
})(PLCBOOK);

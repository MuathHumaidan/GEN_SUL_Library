/* الوحدة 14 — Getting help: Part A Showing people how to do things (ص 66–67) · Part B Talking about problems (ص 68–69)
   + Help files ص 111. الكتاب: Business Goals 1.
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 14A Showing people how to do things ========== */
/* حجز تذكرة قطار على موقع من إعدادنا: خطوات بالترتيب */
const STEPS=[['First,','select','the station you want to travel from and the station you want to go to.','from'],['Then,','choose','the date you want to travel.','date'],['Next,','click','on the number of people travelling.','people'],['After that,','decide','what time you want to travel.','time'],['Then,','enter','your payment details and click on "Pay".','pay'],['Finally,','note','your booking number.','ref']];
function lab14a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">موقع حجز القطار</h3><p class="sub">موقع من إعدادنا، مبني على التمرين 1 ص 66. اضغط «الخطوة التالية» لتسمع التعليمات وترى الحقل الذي يتغير.</p>
  <div id="sv"></div><div class="ph-row"><button type="button" class="btn pri" id="nx">الخطوة التالية</button><button type="button" class="btn" id="rs">من البداية</button></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">التعليمات</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي كلمات تبيّن ترتيب الخطوات؟</li><li>ما شكل الفعل في كل تعليمة؟</li><li>اكتب ثلاث خطوات لاستعمال آلة القهوة.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0;
 const F=[['from','From: Riyadh   To: Dammam',0],['date','Date: 21 August',1],['people','Adults: 1   Children: 0',2],['time','Time: 07.40',3],['pay','Card: **** 4417   [Pay]',4],['ref','Booking number: TR4851',5]];
 const sh=()=>{$('#sv').innerHTML=`<svg viewBox="0 0 360 250" style="width:100%"><rect x="5" y="5" width="350" height="240" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><rect x="5" y="5" width="350" height="30" rx="10" fill="${C.ink}"/>${TL(180,25,'Train tickets online',{fs:13,w:700,c:'#fff'})}${F.map((f,i)=>`<rect x="20" y="${45+i*32}" width="320" height="26" rx="6" fill="${i<k?C.yel:i===k?'#fff':C.paper}" stroke="${i===k?C.red:C.ink}" stroke-width="${i===k?2.5:1}"/>${TL(180,63+i*32,i<k||i===k?f[1]:'…',{fs:12})}`).join('')}</svg>`;
  $('#o').innerHTML=eb(STEPS.slice(0,k+1).map(s=>`${s[0]} ${s[1]} ${s[2]}`))};
 $('#nx').onclick=()=>{k=Math.min(STEPS.length-1,k+1);sh()};$('#rs').onclick=()=>{k=0;sh()};sh();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 14 ===== */
const SQ=['First,','Then,','Next,','After that,','Finally,'];
const PC14=[['lift','the lid.'],['put','the paper face down on the glass.'],['close','the lid.'],['enter','the number of copies.'],['press','the green button.'],['take','your copy and the original.']];
const LAB1414A={title:'رتّب تعليمات آلة التصوير',w:(el,B)=>N.labB(el,B,{intro:'اختر رقم الخطوة، وشاهد ظرف الترتيب والفعل.',
 controls:[{k:'s',label:'الخطوة',opts:PC14.map((x,i)=>[String(i),String(i+1)])}],
 out:({s})=>{const i=+s,adv=i===0?'First,':i===PC14.length-1?'Finally,':['Then,','Next,','After that,','Then,'][i-1],[v,o]=PC14[i];return{pieces:[[adv,'q','ظرف الترتيب'],[v,'k','الأمر: الفعل كما هو'],[o,'n','']],say:`${adv} ${v} ${o}`,why:i===0?`${e('First')} للخطوة الأولى.`:i===PC14.length-1?`${e('Finally')} للخطوة الأخيرة.`:`${e('Then · Next · After that')} لها المعنى نفسه في وسط الخطوات.`}}})};
const IM14={pos:['Press the green button.','أمر مثبت: الفعل كما هو'],neg:["Don't leave the lid open.","النفي: Don't + الفعل"],pls:['Please switch off your phone.','للأدب: Please + الفعل'],no:['Do not use mobile phones.','رسمي في اللافتات: Do not']};
const LAB1414B={title:'صيغة الأمر',w:(el,B)=>N.labB(el,B,{intro:'اختر نوع التعليمة.',
 controls:[{k:'t',label:'النوع',opts:[['pos','مثبت'],['neg','منفي'],['pls','بأدب'],['no','لافتة رسمية']]}],
 out:({t})=>{const [x,ar]=IM14[t];return{pieces:[[x,t==='neg'||t==='no'?'r':'k',ar]],say:x,why:`لا نضع فاعلاً في الأمر، ولا ${e('to')} ولا ${e('s')} ولا ${e('ing')}: ${e('Please put …')} لا ${e('Please to put …')}.`}}})};
const R141=N.rule({title:'التعليمات: ظروف الترتيب وصيغة الأمر',ref:'ص 66–67، ص 111',
 intro:`حين تشرح لشخص كيف يفعل شيئاً تقسّمه إلى خطوات، وتبدأ كل خطوة بكلمة ترتيب، ثم الفعل بصيغة الأمر.`,
 parts:[
 {t:'ظروف الترتيب',short:'First · Then · Finally',old:[1,2],q:'ما الكلمة التي تبدأ بها أول خطوة وآخر خطوة؟',ref:'ص 66–67، ص 111',
  lead:`كلمات الترتيب تجعل التعليمات سهلة المتابعة. بعدها فاصلة غالباً.`,
  points:[`<b>الأولى:</b> ${e('First, …')}`,`<b>الوسط:</b> ${e('Then, … · Next, … · After that, …')} (لها المعنى نفسه هنا)`,`<b>الأخيرة:</b> ${e('Finally, …')}`,`مثال: ${e('First, park your car. Then, go to the ticket machine. … Finally, put your ticket in the car window.')}`],
  rows:[['First,','أولاً'],['Then,','ثم'],['Next,','بعد ذلك'],['After that,','بعد ذلك'],['Finally,','أخيراً']],head:['الكلمة','المعنى'],
  pairs:[['Finally, lift the lid. … First, take your copy.','First, lift the lid. … Finally, take your copy.','First للبداية و Finally للنهاية.']],
  art:art(`${SQ.map((x,i)=>`<g data-tip="خطوة ${i+1}"><rect x="${15+i*68}" y="${200-i*35}" width="64" height="${35+i*35}" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="1.5"/>${TL(47+i*68,222-i*35,x.replace(',',''),{fs:11,w:700})}</g>`).join('')}`,'steps'),cap:'درج الخطوات: من First إلى Finally. مرّر المؤشر.',labs:[LAB1414A]},
 {t:'صيغة الأمر',short:'Press · Don\'t leave',old:[3],q:'كيف تقول تعليمة منفية؟',ref:'ص 111',
  lead:`الأمر في التعليمات: الفعل كما هو بلا فاعل. ونفيه بـ ${e("Don't")}. ونضيف ${e('Please')} للأدب.`,
  points:[`<b>مثبت:</b> ${e('Press the green button. · Choose the size you want.')}`,`<b>منفي:</b> ${e("Don't leave the lid open.")}، وفي اللافتات الرسمية ${e('Do not')}.`,`<b>بأدب:</b> ${e('Please listen to the safety instructions.')}`,`بلا ${e('to')} وبلا ${e('ing')}: ${e('Check in')} لا ${e('Checking in')}.`],
  pairs:[['Please to put phones in your bag.','Please put phones in your bag.','بلا to.'],['Not use mobile phones.',"Don't use mobile phones.","النفي: Don't."],['Switched off your laptop.','Switch off your laptop.','الفعل كما هو.']],labs:[LAB1414B]}
 ]});
B.lesson({
 id:'u14-l1',unit:14,order:1,pages:'66–67',
 title:'Part A: Showing people how to do things — شرح طريقة عمل الأشياء',
 summary:'إعطاء التعليمات خطوة خطوة بظروف الترتيب (First، Then، Next، After that، Finally) وصيغة الأمر (Press …، Don\'t …)، مع حجز تذكرة على الإنترنت واستعمال آلة التصوير.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 66–67',html:`<p>تشرح لزميل كيف يستعمل جهازاً أو موقعاً. ستتعلم:</p><ol><li>كلمات ترتيب الخطوات.</li><li>صيغة الأمر المثبت والمنفي.</li><li>كلمات حجز التذاكر على الإنترنت.</li></ol>`},
  ...R141.theory,
  {h:'تمارين الكتاب',ref:'ص 66–67، ص 111',html:
   bk(1,'ص 66','إلى ماذا تشير كل معلومة في حجز تذكرة طائرة؟ ثم رقّمها بترتيب الاستماع، وأكمل التعليمات بالأفعال.',['a: 7.40 a.m. time · Visa payment (card) · 29 August date · EQ485/3 booking reference number · 1 adult, no children number of people · London Heathrow airport airport','b: 1 London Heathrow airport · 2 29 August · 3 1 adult, no children · 4 7.40 a.m. · 5 Visa · 6 EQ485/3','c: 1 select · 2 choose · 3 click · 4 decide · 5 enter · 6 note'])+
   bk(2,'ص 67','أكمل تعليمات آلة التصوير بظرف وفعل لكل خطوة.',['1 First, lift the lid.','2 Then (Next), put the paper face down on the glass.','3 Next (Then), close the lid.','4 After that, enter the number of copies you want.','5 Then, press the green button to start.','6 Finally, take your copy and the original.'],'Then تُستعمل مرتين، و Then / Next / After that بالمعنى نفسه.')+
   bk(3,'ص 67','نشاط ثنائي: اشرح لزميلك كيف يصنع بطاقة عمل، واستمع إليه يشرح كيف تلتقط صورتك.',null,'معلومات الطالب أ في ص 82 من الكتاب.')+
   bk(4,'ص 67','اشرح لزميلك كيف يفعل هذه الأشياء.',null)+
   bk('Language file 2','ص 111','اختر الصيغة الصحيحة في تعليمات المسافرين.',['1 Check in','2 Do not accept','3 put','4 Switch off',"5 Don't use",'6 listen',"7 Don't undo",'8 leave'])},
  {h:'الاستماع',ref:'ص 66',html:au('14A-1','ص 66 — التمرين 1','Meg تشرح لـ Tom كيف يحجز تذكرة طائرة على الإنترنت.')}
 ],
 stations:[
  {intro:true},
  ...R141.stations,
  {recap:['First, … · Then, … · Next, … · After that, … · Finally, …','الأمر: الفعل كما هو بلا فاعل: Press the green button.',"النفي: Don't leave the lid open.",'Please + الفعل، بلا to.','select · choose · click · decide · enter · note']}
 ],
 lab:lab14a,
 examples:[
  {title:'مثال 1: الخطوة الأولى',ref:'ص 67',q:`<p>اكتب أول خطوة لاستعمال آلة التصوير: رفع الغطاء.</p>`,given:[],solve:()=>[{t:`الخطوة 1: أول خطوة: ${e('First,')}`},{t:`الخطوة 2: الأمر: ${e('lift the lid')}`},{t:`الخطوة 3: ${e('First, lift the lid.')}`,final:true}]},
  {title:'مثال 2: النفي',ref:'ص 111',q:`<p>قل للمسافر ألا يستعمل الهاتف أثناء الرحلة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: النفي: ${e("Don't")}`},{t:`الخطوة 2: + الفعل كما هو: ${e('use')}`},{t:`الخطوة 3: ${e("Don't use your mobile phone during the flight.")}`,final:true}]},
  {title:'مثال 3: التصحيح',ref:'ص 111',q:`<p>صحّح: ${e('Please to switch off your laptop.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: بعد ${e('Please')} لا نضع ${e('to')}.`},{t:'الخطوة 2: الفعل كما هو.'},{t:`الخطوة 3: ${e('Please switch off your laptop.')}`,final:true}]}
 ],
 quiz:[
  {q:'The last step:',o:['Finally,','First,','Next,','After that,'],c:0,e:'Finally.'},
  {q:'___ the green button.',o:['Press','Pressing','To press','Presses'],c:0,e:'الأمر.'},
  {q:"___ leave the lid open.",o:["Don't",'Not','No','Doesn\'t'],c:0,e:"Don't."},
  {q:'Please ___ to the instructions.',o:['listen','to listen','listens','listening'],c:0,e:'بلا to.'},
  {q:'___ your payment details.',o:['Enter','Note','Lift','Close'],c:0,e:'enter.'},
  {q:'Then, next and after that ___ .',o:['mean the same','are different','start instructions','end instructions'],c:0,e:'المعنى نفسه.'}
 ]
});

/* ========== 14B Talking about problems ========== */
const STAFF=[['Karen Hill','Office Manager','office supplies, furniture, office maintenance','She'],['Tom Reed','IT Technician','PCs, the network, email, phones','He'],['Amy Ford','Sales Manager','prices, customers, sales figures','She'],['Ben Shaw','Warehouse Manager','stock levels, orders, deliveries','He']];
const PRB=[['My computer has crashed.',1],['I need a new desk.',0],['A customer says his order is late.',3],['I need last month\'s sales figures.',2],["My email isn't working.",1],['We need more paper for the printer.',0],['A customer wants a lower price.',2]];
function lab14b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">موظفو الشركة</h3><p class="sub">شركة من إعدادنا، مبنية على التمرين 2 ص 68.</p>${vt(STAFF.map(s=>[s[0]+' — '+s[1],s[2]]),['Name — job','Responsible for'])}</div>
 <div class="c6 panel"><h3 style="margin-top:0">المشكلة والنصيحة</h3><div class="ph-row" id="ps">${PRB.map((p,i)=>`<button type="button" class="btn" data-p="${i}">${p[0]}</button>`).join('')}</div>
  <div class="ph-row"><button type="button" class="btn" data-f="0">I think you should …</button><button type="button" class="btn" data-f="1">Why don't you …?</button></div><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>من المسؤول عن الطابعة؟ لماذا؟</li><li>غيّر صيغة النصيحة: ما الذي تغيّر في آخر الجملة؟</li><li>انصح زميلاً بألا يصلح الكمبيوتر بنفسه.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let p=0,f=0;
 const sh=()=>{el.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('pri',+b.dataset.p===p));el.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('pri',+b.dataset.f===f));
  const [t,w]=PRB[p],s=STAFF[w],v=w===1?'call':'talk to';
  $('#o').innerHTML=dl([['A',t],['B',f?`Why don't you ${v} ${s[0]}? ${s[3]}'s responsible for that.`:`I think you should ${v} ${s[0]}. ${s[3]}'s responsible for that.`]])};
 el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{p=+b.dataset.p;sh()});el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=+b.dataset.f;sh()});sh();
}
const AD14={s:["I think you should",'call IT support.','نصيحة بفعل شيء'],n:["I don't think you should",'try to mend it yourself.','نصيحة بعدم فعل شيء'],w:["Why don't you",'use the printer in the next office?','اقتراح بسؤال']};
const LAB1414C={title:'should و Why don\'t you',w:(el,B)=>N.labB(el,B,{intro:'المشكلة: The printer isn\'t working. اختر صيغة النصيحة.',
 controls:[{k:'a',label:'النصيحة',opts:Object.keys(AD14).map(k=>[k,AD14[k][0]+' …'])}],
 out:({a})=>{const [x,y,ar]=AD14[a];return{pieces:[[x,a==='n'?'r':'k',ar],[y,'n','الفعل كما هو']],say:`${x} ${y}`,why:a==='n'?`النفي في ${e("I don't think")}، لا في ${e('should')}: أكثر أدباً من ${e("You shouldn't")}.`:a==='w'?`${e("Why don't you …?")} اقتراح لطيف بشكل سؤال.`:`بعد ${e('should')} الفعل كما هو بلا ${e('to')}.`}}})};
const RS14={charge:['is in charge of','the marketing team','مسؤول عن (يدير)'],resp:['is responsible for','ordering office supplies','مسؤول عن'],look:['looks after','all the PCs','يعتني بـ'],sup:['supervises','the stock levels','يشرف على']};
const LAB1414D={title:'من المسؤول؟',w:(el,B)=>N.labB(el,B,{intro:'اختر العبارة، وشاهد جملة عن مسؤوليات الموظف.',
 controls:[{k:'r',label:'العبارة',opts:Object.keys(RS14).map(k=>[k,RS14[k][0]])}],
 out:({r})=>{const [v,o,ar]=RS14[r];return{pieces:[['She','x',''],[v,'k',ar],[o+'.','n','']],say:`She ${v} ${o}.`,why:r==='resp'?`بعد ${e('responsible for')} اسم أو فعل بـ ${e('ing')}.`:`عبارة لوصف المسؤولية في العمل.`}}})};
const R142=N.rule({title:'النصيحة، ومسؤوليات الموظفين',ref:'ص 68–69، ص 111',
 intro:`حين يخبرك زميل بمشكلة تنصحه بما يفعل أو بمن يتصل. ولهذا تحتاج أن تعرف من المسؤول عن كل شيء في الشركة.`,
 parts:[
 {t:'النصيحة',short:'should · Why don\'t you',old:[1,3],q:'كيف تنصح شخصاً بألا يفعل شيئاً بأدب؟',ref:'ص 68، ص 111',
  lead:`ثلاث صيغ للنصيحة، وبعد كل منها الفعل كما هو.`,
  points:[`<b>افعل:</b> ${e('I think you should call the engineer.')}`,`<b>لا تفعل:</b> ${e("I don't think you should try to mend it yourself.")} (النفي مع ${e('think')})`,`<b>اقتراح بسؤال:</b> ${e("Why don't you use the one in the next office?")}`,`ويمكن: ${e('You should …')} مباشرة: ${e('You should go and see the Marketing Director.')}`],
  grid:{head:['المشكلة','النصيحة'],rows:[["My phone doesn't work.","Why don't you ask for a new one?"],["I'm not feeling very well.",'I think you should go home early.'],["I'm sure I can mend the copier.","I don't think you should do that."]]},
  pairs:[['I think you should to call IT.','I think you should call IT.','بعد should بلا to.'],["Why you don't ask your boss?","Why don't you ask your boss?","Why don't you …?"],["I think you don't should go.","I don't think you should go.",'النفي مع think.']],
  art:art(`<g data-tip="المشكلة"><rect x="20" y="30" width="320" height="50" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(180,61,"The printer isn't working.",{fs:14,w:700,c:'#fff'})}</g>${[['I think you should call IT.',C.yel],["I don't think you should open it.",C.paper],["Why don't you use the other one?",C.yel]].map((x,i)=>`<g data-tip="نصيحة"><rect x="20" y="${100+i*50}" width="320" height="40" rx="12" fill="${x[1]}" stroke="${C.ink}" stroke-width="1.5"/>${TL(180,125+i*50,x[0],{fs:13})}</g>`).join('')}`,'advice'),cap:'مشكلة وثلاث صيغ للنصيحة. مرّر المؤشر.',labs:[LAB1414C]},
 {t:'مسؤوليات الموظفين',short:'in charge of · responsible for',old:[2],q:'من تسأل عن كرسي جديد لمكتبك؟',ref:'ص 68',
  lead:`لتنصح شخصاً بمن يتصل، صف مسؤولية كل موظف بعبارات ثابتة.`,
  points:[`${e('She is in charge of the clerical staff.')} = تدير`,`${e('She is responsible for ordering office supplies.')} = مسؤولة عن`,`${e('He looks after all the PCs.')} = يعتني بـ`,`${e('He supervises the stock levels.')} = يشرف على`,`${e('He arranges the orders.')} = يرتّب`],
  rows:[['in charge of','يدير / مسؤول عن'],['responsible for','مسؤول عن'],['look after','يعتني بـ'],['supervise','يشرف على'],['arrange','يرتّب'],['clerical staff','الموظفون الكتابيون']],head:['العبارة','المعنى'],
  pairs:[['She is responsible of the team.','She is responsible for the team.','responsible for.'],['He looks the PCs.','He looks after the PCs.','look after.']],labs:[LAB1414D]}
 ]});
B.lesson({
 id:'u14-l2',unit:14,order:2,pages:'68–69',
 title:'Part B: Talking about problems — الحديث عن المشكلات',
 summary:'تقديم النصيحة (I think you should …، I don\'t think you should …، Why don\'t you …?)، ووصف مسؤوليات الموظفين (in charge of، responsible for، looks after)، ونصح الزملاء بمن يتصلون حسب المشكلة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 68–69',html:`<p>يخبرك زملاؤك بمشكلاتهم في العمل وتنصحهم. ستتعلم:</p><ol><li>ثلاث صيغ للنصيحة.</li><li>عبارات مسؤوليات الموظفين.</li><li>كيف توجّه الشخص إلى الموظف المناسب.</li></ol>`},
  ...R142.theory,
  {h:'تمارين الكتاب',ref:'ص 68–69، ص 111',html:
   bk(1,'ص 68','طابق المشكلات بالنصائح.',['1 c','2 a','3 b'])+
   bk(2,'ص 68','اقرأ عن موظفي Icon Ltd وصحّح الجدول، ثم انصح كل شخص بمن يتحدث إليه.',['a1 Sarah Wurz: Office Manager (لا HR Manager) · office maintenance (لا warehouse maintenance)','a2 Jane Lee: marketing team (لا production team) · marketing representatives (لا technical)','a3 Isaac Somerville: Computer Technician (لا Telephone) · PCs (لا phones)','a4 George Walker: stock levels (لا staff levels)','b1 Jane Lee · b2 Sarah Wurz · b3 George Walker · b4 Isaac Somerville · b5 George Walker (المخزون) · b6 Sarah Wurz (صيانة المكتب)'],'b5 و b6 إجابات نموذجية من قراءتنا للنص.')+
   bk(3,'ص 69','استمع إلى أربعة أشخاص: ما مشكلاتهم؟ ثم طابق النصائح بالمشكلات.',['a1 go on holiday','a2 spend on advertising','a3 email','a4 telephone bill','b: 1 c · 2 d · 3 b · 4 a'])+
   bk(4,'ص 69','بدأت عملاً جديداً: اكتب مشكلات اليوم الأول، وأخبر زملاءك بها واعرض المساعدة.',null)+
   bk(5,'ص 69','اقرأ تعليقات أشخاص في مواقف عمل وانصحهم.',null,'إجابات حرة. نموذج: 1 I think you should talk to your manager about your work. · 3 Why don\'t you find a second supplier?')+
   bk('Language file 3','ص 111','أكمل جمل B وطابقها بمشكلات A.',["1 Why don't you ask your boss for an assistant?","2 I think you should call IT support.","3 I don't think you should go without telling your manager.","4 Why don't you close at lunchtime?","5 I don't think you should do that until you've found another job.","6 I think you should reduce your prices."])},
  {h:'الاستماع',ref:'ص 69',html:au('14B-3','ص 69 — التمرين 3','أربعة أشخاص يتحدثون عن مشكلاتهم.')}
 ],
 stations:[
  {intro:true},
  ...R142.stations,
  {recap:['I think you should + الفعل.',"I don't think you should + الفعل.","Why don't you + الفعل?",'in charge of · responsible for · look after · supervise.','انصح الزميل بالموظف المسؤول عن المشكلة.']}
 ],
 lab:lab14b,
 examples:[
  {title:'مثال 1: نصيحة',ref:'ص 68',q:`<p>زميلك يقول: ${e("My computer's crashed.")} انصحه بالاتصال بالدعم الفني.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('I think you should')}`},{t:`الخطوة 2: + ${e('call IT support')}`},{t:`الخطوة 3: ${e('I think you should call IT support.')}`,final:true}]},
  {title:'مثال 2: نصيحة منفية',ref:'ص 111',q:`<p>زميلك يريد أن يترك العمل قبل أن يجد عملاً آخر. انصحه.</p>`,given:[],solve:()=>[{t:`الخطوة 1: النفي مع ${e('think')}.`},{t:`الخطوة 2: ${e("I don't think you should")} + ${e('leave')}`},{t:`الخطوة 3: ${e("I don't think you should leave until you've found another job.")}`,final:true}]},
  {title:'مثال 3: من المسؤول؟',ref:'ص 68',q:`<p>Karen مسؤولة عن طلب لوازم المكتب. زميلك يحتاج ورقاً. ماذا تقول؟</p>`,given:[],solve:()=>[{t:'الخطوة 1: الورق من لوازم المكتب.'},{t:`الخطوة 2: اقتراح: ${e("Why don't you ask Karen?")}`},{t:`الخطوة 3: ${e("Why don't you ask Karen? She's responsible for office supplies.")}`,final:true}]}
 ],
 quiz:[
  {q:'I think you ___ call the engineer.',o:['should','should to','shoulds','to should'],c:0,e:'should + الفعل.'},
  {q:"___ think you should do that.",o:["I don't","I not","I'm not","Don't I"],c:0,e:'النفي مع think.'},
  {q:"Why ___ you ask for a new one?",o:["don't",'not',"doesn't",'no'],c:0,e:"Why don't you."},
  {q:'She is responsible ___ the clerical staff.',o:['for','of','to','with'],c:0,e:'responsible for.'},
  {q:'He looks ___ all the PCs.',o:['after','for','at','to'],c:0,e:'look after.'},
  {q:"My phone doesn't work. →",o:["Why don't you ask for a new one?",'I think you should go home early.',"I don't think you should do that.",'I recommend the fish.'],c:0,e:'نصيحة مناسبة.'}
 ]
});
})(PLCBOOK);

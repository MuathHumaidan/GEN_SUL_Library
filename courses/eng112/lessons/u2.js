/* الوحدة 2 (Business Goals 2) — Companies: Part A Describing companies (ص 10–11) · Part B Company profiles (ص 12–13)
   + Help files ص 88–89. الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 2A Describing companies ========== */
/* سلسلة التوريد: من المصمم إلى الزبون — أمثلة من إعدادنا (أثاث مكتبي) */
const CHAIN=[['designer','design','design',"The designer thinks of new ideas for office chairs."],['manufacturer','manufacture','manufacturing','The manufacturer makes the chairs in a factory.'],['wholesaler','sell (large amounts)','wholesale','The wholesaler buys large quantities and sells them to shops.'],['retailer','sell (to the public)','retail','The retailer sells the chairs to customers in shops.'],['customer','buy','—','The customer buys one chair for his office.'],['exporter','export','exports','The exporter sends some chairs to other countries.'],['importer','import','imports','The importer buys the chairs and sells them in his country.']];
function lab2a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">رحلة المنتج</h3><p class="sub">مثال من إعدادنا (كراسي مكتبية)، مبني على التمرين 1 ص 10. اضغط أي محطة.</p><div id="sv"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">الكلمة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الفرق بين <span class="en">wholesaler</span> و <span class="en">retailer</span>؟</li><li>كيف نكوّن اسم الشخص من الفعل؟ (<span class="en">design → designer</span>)</li><li>من يبيع لبلد آخر؟ ومن يشتري من بلد آخر؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0;
 const sh=()=>{$('#sv').innerHTML=`<svg viewBox="0 0 380 210" style="width:100%">${CHAIN.map((c,i)=>{const x=i<5?10+i*74:i===5?120:240,y=i<5?40:150;return `<g data-i="${i}" style="cursor:pointer"><rect x="${x}" y="${y}" width="66" height="44" rx="10" fill="${i===k?C.yel:C.paper}" stroke="${C.ink}" stroke-width="${i===k?2.5:1}"/>${TL(x+33,y+27,c[0],{fs:10,w:700})}</g>`}).join('')}${[0,1,2,3].map(i=>`<path d="M${76+i*74} 62 L${84+i*74} 62" stroke="${C.ink}" stroke-width="2"/>`).join('')}<path d="M195 84 L153 150" stroke="${C.ink}" stroke-width="2"/><path d="M186 172 L240 172" stroke="${C.ink}" stroke-width="2"/>${TL(213,198,'another country',{fs:10})}</svg>`;
  el.querySelectorAll('[data-i]').forEach(g=>g.onclick=()=>{k=+g.dataset.i;sh()});const c=CHAIN[k];
  $('#o').innerHTML=vt([[c[0],'الشخص / الشركة'],[c[1],'الفعل'],[c[2],'المجال']],['English','النوع'])+eb([c[3]])};sh();
}
const WB={design:['design','designer','design','+ er'],export:['export','exporter','exports','+ er'],import:['import','importer','imports','+ er'],manufacture:['manufacture','manufacturer','manufacturing','e → er'],act:['act','actor','acting','+ or'],translate:['translate','translator','translation','e → or']};
const LAB222A={title:'من الفعل إلى الشخص',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، وشاهد اسم الشخص أو الشركة.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(WB).map(k=>[k,k])}],
 out:({v})=>{const [a,b,c,r]=WB[v];return{pieces:[[a,'n','الفعل'],[r,'k','اللاحقة'],[b,'q','الشخص / الشركة']],say:`I ${a}. I'm a ${b}. I work in ${c}.`,why:`نضيف ${e('er')} أو ${e('or')}، والفعل المنتهي بـ ${e('e')} نضيف له ${e('r')} فقط.`}}})};
const CN={dealer:['car','dealer','وكيل بيع'],agent:['estate','agent','وكيل'],firm:['law','firm','شركة خدمات'],company:['insurance','company','شركة'],manu:['furniture','manufacturer','مصنّع']};
const LAB222B={title:'الأسماء المركبة',w:(el,B)=>N.labB(el,B,{intro:'اختر الكلمة الثانية، وشاهد اسماً مركباً.',
 controls:[{k:'c',label:'الكلمة',opts:Object.keys(CN).map(k=>[k,CN[k][1]])}],
 out:({c})=>{const [a,b,ar]=CN[c];return{pieces:[[a,'k','الأول: مفرد'],[b,'n',ar]],say:`${a} ${b}`,why:`الاسم الأول في المركب مفرد عادة: ${e('car dealer')} لا ${e('cars dealer')}.`}}})};
const R21=N.rule({title:'أنواع الشركات وأسماؤها',ref:'ص 10–11، ص 89',
 intro:`في عالم الأعمال للمنتج رحلة من المصمم إلى الزبون. نتعلم أسماء من يعمل في كل مرحلة، وكيف نكوّنها من الأفعال، والأسماء المركبة لأنواع الشركات.`,
 parts:[
 {t:'من المصمم إلى الزبون: تكوين الكلمات',short:'designer · manufacturer',old:[1],q:'كيف نكوّن اسم الشخص من الفعل import؟',ref:'ص 10، ص 89',
  lead:`كثير من أسماء الأشخاص والشركات = الفعل + ${e('er')} أو ${e('or')}. والمجال قد يكون الفعل نفسه أو اسماً آخر.`,
  points:[`${e("I'm a designer. (person) · I design clothes. (verb) · I work in design. (area)")}`,`<b>+ er:</b> ${e('design → designer · import → importer · export → exporter')}`,`<b>e → er:</b> ${e('manufacture → manufacturer')}`,`<b>+ or:</b> ${e('act → actor · direct → director · translate → translator')}`,`${e('wholesaler')} يبيع كميات كبيرة للمحلات، و ${e('retailer')} يبيع للزبون في المحل.`],
  rows:[['designer','design · design'],['exporter','export · exports'],['importer','import · imports'],['manufacturer','manufacture · manufacturing'],['retailer','retail · retail']],head:['Person / Company','Verb · Area'],
  pairs:[['manufacturerer','manufacturer','المنتهي بـ e: نضيف r.'],['The retailer sells to shops.','The wholesaler sells to shops.','retailer يبيع للزبون.']],labs:[LAB222A]},
 {t:'الأسماء المركبة لأنواع الشركات',short:'car dealer · law firm',old:[2,3],q:'لماذا نقول car dealer لا cars dealer؟',ref:'ص 11، ص 89',
  lead:`نضع اسمين معاً لنصف نوع الشركة. الأول يصف المجال، والثاني نوع العمل.`,
  points:[`${e('travel agent · ticket agent · estate agent')} (وكيل)`,`${e('law firm · accountancy firm')} (شركة خدمات)`,`${e('insurance company · car dealer · computer dealer')}`,`${e('furniture manufacturer · clothes manufacturer · car manufacturer')}`,`الاسم الأول مفرد عادة. بعض المركبات كلمة واحدة: ${e('airline · website')}`,`<b>للإعلان عن شركتك:</b> ${e("We're based in London. · We provide a service to … · We specialize in … · We offer help and advice …")}`],
  rows:[['estate agent','وكيل عقارات'],['law firm','مكتب محاماة'],['accountancy firm','مكتب محاسبة'],['insurance company','شركة تأمين'],['car dealer','وكيل سيارات'],['ticket agent','وكيل تذاكر']],head:['English','المعنى'],
  pairs:[['cars dealer','car dealer','الأول مفرد.'],['agent travel','travel agent','المجال أولاً.']],labs:[LAB222B]}
 ]});
B.lesson({
 id:'u2-l1',unit:2,order:1,pages:'10–11',
 title:'Part A: Describing companies — وصف الشركات',
 summary:'رحلة المنتج من المصمم إلى الزبون (designer، manufacturer، wholesaler، retailer، exporter، importer)، وتكوين الأسماء من الأفعال بـ er و or، والأسماء المركبة لأنواع الشركات (law firm، estate agent، car dealer)، وإعلانات الشركات في الإذاعة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 10–11',html:`<p>تصف أنواع الشركات وما تفعله. ستتعلم:</p><ol><li>أسماء من يصنع ومن يبيع ومن يشتري.</li><li>تكوين الأسماء من الأفعال.</li><li>الأسماء المركبة لأنواع الشركات وعبارات الإعلان عنها.</li></ol>`},
  ...R21.theory,
  {h:'تمارين الكتاب',ref:'ص 10–11، ص 89',html:
   bk(1,'ص 10','أكمل أسماء المخطط من النص، ثم أكمل الجدول.',['a: 1 designer · 2 manufacturer · 3 wholesalers · 4 retailers · 5 customers · 6 exporter · 7 importer','b: designer / design / design · exporter / export / exports · importer / import / imports · manufacturer / manufacture / manufacturing · retailer / retail / retail'])+
   bk(2,'ص 11','أكمل الجمل بكلمات الصندوق، ثم أعطِ أمثلة من منطقتك.',['1 furniture · 2 accountancy · 3 ticket · 4 law · 5 computer','6 estate · 7 clothes · 8 insurance · 9 travel · 10 car'])+
   bk(3,'ص 11','استمع إلى ثلاثة إعلانات: صف كل شركة، ثم أكمل الجمل.',['a: 1 Seatmaster ticket agent · 2 Globe Sports clothes manufacturer · 3 Hawes & Co law firm',"b1 We're based in London but we provide a service to businesses all over Europe.",'b2 We specialize in football kit. We sell to shops through our sales network.','b3 Hawes and Company can help you through the legal jungle … We offer help and advice …'])+
   bk(4,'ص 11','نشاط ثنائي: صف شركة دون أن تذكر اسمها، وزميلك يخمّن.',null,'معلومات الطالبين في ص 76 و 78 من الكتاب. الإجابات: Air France · McDonald\'s · DHL · Kellogg\'s.')+
   bk('Vocabulary file 1','ص 89','طابق التعريفات بالأسماء.',['1 d · 2 f · 3 c · 4 a · 5 b · 6 e'])+
   bk('Vocabulary file 2','ص 89','كوّن أسماء مركبة.',['dealer: car · computer · furniture · art','agent: estate · insurance · ticket · booking · travel','firm: accountancy · law','manufacturer: car · clothes · computer · furniture'],'إجابات نموذجية؛ قد تُقبل تركيبات أخرى.')},
  {h:'الاستماع',ref:'ص 11',html:au('2A-3','ص 11 — التمرين 3','ثلاثة إعلانات إذاعية لشركات.')}
 ],
 stations:[
  {intro:true},
  ...R21.stations,
  {recap:['designer → manufacturer → wholesaler → retailer → customer.','exporter يبيع للخارج، importer يشتري من الخارج.','الفعل + er / or = الشخص: design → designer · act → actor.','car dealer · law firm · estate agent · insurance company.',"We're based in … · We specialize in … · We provide a service to …"]}
 ],
 lab:lab2a,
 examples:[
  {title:'مثال 1: الشخص من الفعل',ref:'ص 89',q:`<p>كوّن اسم الشخص من ${e('translate')}.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ينتهي بـ ${e('e')}.`},{t:`الخطوة 2: نضيف ${e('or')} بعد حذف ${e('e')}.`},{t:`الخطوة 3: ${e('translator')}`,final:true}]},
  {title:'مثال 2: نوع الشركة',ref:'ص 11',q:`<p>شركة تساعد الناس في بيع بيوتهم وشرائها. ما اسمها؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: المجال: ${e('estate')} (العقار).`},{t:`الخطوة 2: نوع العمل: ${e('agent')}.`},{t:`الخطوة 3: ${e('an estate agent')}`,final:true}]},
  {title:'مثال 3: إعلان',ref:'ص 11',q:`<p>صف شركتك: مقرها جدة، وتتخصص في أجهزة التكييف.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("We're based in Jeddah.")}`},{t:`الخطوة 2: ${e('We specialize in air conditioners.')}`},{t:`الخطوة 3: ${e("We're based in Jeddah. We specialize in air conditioners.")}`,final:true}]}
 ],
 quiz:[
  {q:'A company which makes goods in a factory:',o:['manufacturer','retailer','importer','designer'],c:0,e:'manufacturer.'},
  {q:'It sells to customers in shops:',o:['retailer','wholesaler','exporter','manufacturer'],c:0,e:'retailer.'},
  {q:'import →',o:['importer','importor','imported','importman'],c:0,e:'+ er.'},
  {q:'They help you buy or sell a house:',o:['estate agent','law firm','car dealer','ticket agent'],c:0,e:'estate agent.'},
  {q:'Correct compound noun:',o:['car dealer','cars dealer','dealer car','car-dealers'],c:0,e:'الأول مفرد.'},
  {q:"We ___ in football kit.",o:['specialize','based','provide to','offer in'],c:0,e:'specialize in.'}
 ]
});

/* ========== 2B Company profiles ========== */
/* شركات من إعدادنا لملف تعريفي */
const COS=[{n:'Desert Water',w:'drinking water',p:'is produced',b:'Riyadh',y:'1998',f:'by two engineers',x:'Today, its water is sold in 12 countries.'},{n:'BlueSky Travel',w:'holidays and business trips',p:'are organized',b:'Dubai',y:'2005',f:'by a family company',x:'Now, 3,000 trips are booked every month.'},{n:'Nova Phones',w:'mobile phones',p:'are designed',b:'Seoul',y:'1992',f:'by three friends',x:'Its phones are made in four factories.'}];
function lab2b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الشركة</h3><p class="sub">شركات من إعدادنا (<b>قيم توضيحية</b>)، مبنية على التمرينين 1 و 2 ص 12–13.</p>
  <div class="ph-row">${COS.map((c,i)=>`<button type="button" class="btn" data-c="${i}">${c.n}</button>`).join('')}</div>
  <div class="ph-row"><button type="button" class="btn" data-f="p">الملف التعريفي</button><button type="button" class="btn" data-f="q">أسئلة وأجوبة</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">النص</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي الأفعال بالمبني للمجهول؟ وما زمنها؟</li><li>كيف تحوّلت الجملة إلى سؤال يبدأ بـ <span class="en">When</span>؟</li><li>اكتب ملفاً قصيراً عن شركة في مدينتك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let c=0,f='p';
 const sh=()=>{el.querySelectorAll('[data-c]').forEach(b=>b.classList.toggle('pri',+b.dataset.c===c));el.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('pri',b.dataset.f===f));const x=COS[c],pl=/are/.test(x.p);
  $('#o').innerHTML=f==='p'?eb([`${x.n} was started in ${x.y} ${x.f}.`,`It is based in ${x.b}.`,`Its ${x.w} ${x.p} by an expert team.`,x.x]):dl([['Q',`When was ${x.n} started?`],['A',`It was started in ${x.y}.`],['Q',`Where is ${x.n} based?`],['A',`It's based in ${x.b}.`],['Q',`Who was it started by?`],['A',`It was started ${x.f}.`]])};
 el.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{c=+b.dataset.c;sh()});el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=b.dataset.f;sh()});sh();
}
const PS2={pres:['46 million burgers','are sold','every day.','المضارع: am/is/are + التصريف الثالث'],past:['The company','was started','in 1925.','الماضي: was/were + التصريف الثالث'],by:['The company','was started','by John Halley.','by لمن قام بالفعل'],pl:['Two new offices','were opened','in 2003.','جمع في الماضي: were']};
const LAB222C={title:'المبني للمجهول: المضارع والماضي',w:(el,B)=>N.labB(el,B,{intro:'اختر النوع، وشاهد الجملة.',
 controls:[{k:'t',label:'النوع',opts:[['pres','مضارع'],['past','ماضٍ'],['by','مع by'],['pl','جمع في الماضي']]}],
 out:({t})=>{const [a,b,c,ar]=PS2[t];return{pieces:[[a,'n','الموضوع'],[b,'k',ar],[c,'x','']],say:`${a} ${b} ${c}`,why:`المبني للمجهول = ${e('be')} + التصريف الثالث. زمن ${e('be')} يحدد زمن الجملة.`}}})};
const QW2={when:['The offices were opened in 2003.','When were the offices opened?','نسأل عن آخر الجملة: نقدّم be'],where:['The products are manufactured in Asia.','Where are the products manufactured?','نسأل عن آخر الجملة: نقدّم be'],how:['46 million burgers are sold every day.','How many burgers are sold every day?','نسأل عن أول الجملة: الترتيب نفسه'],which:['This car was designed in the USA.','Which car was designed in the USA?','نسأل عن أول الجملة: الترتيب نفسه']};
const LAB222D={title:'السؤال بالمبني للمجهول',w:(el,B)=>N.labB(el,B,{intro:'اختر السؤال، وقارنه بالجملة.',
 controls:[{k:'q',label:'السؤال',opts:Object.keys(QW2).map(k=>[k,k])}],
 out:({q})=>{const [s,qq,ar]=QW2[q];return{pieces:[[s,'x','الجملة'],[qq,'k',ar]],say:qq,why:ar.includes('نقدّم')?`كلمة السؤال + ${e('be')} + الموضوع + التصريف الثالث.`:'السؤال عن الفاعل في أول الجملة: لا نغيّر الترتيب.'}}})};
const R22=N.rule({title:'الملف التعريفي للشركة، والمبني للمجهول',ref:'ص 12–13، ص 88',
 intro:`في الملف التعريفي للشركة يكثر المبني للمجهول: يهمنا ما حدث للشركة (متى أُسست، وأين فُتحت فروعها) أكثر ممن فعله.`,
 parts:[
 {t:'المبني للمجهول في المضارع والماضي',short:'is offered · was established',old:[1,2],q:'لماذا نقول Allen and Overy was established in 1930؟',ref:'ص 13، ص 88',
  lead:`المبني للمجهول = ${e('be')} + التصريف الثالث. نستعمله حين لا نعرف الفاعل أو لا يهمنا.`,
  points:[`<b>المضارع:</b> ${e('am / is / are')} + التصريف الثالث: ${e('Expert advice is offered to our clients. · Our products are manufactured in Asia.')}`,`<b>الماضي:</b> ${e('was / were')} + التصريف الثالث: ${e('The company was started in 1925. · Two new offices were opened in 2003.')}`,`<b>by</b> لمن قام بالفعل: ${e('The company was started by John Halley.')}`,`كلمات الملف التعريفي: ${e('was established · is based in · specializes in · has 26 branches · its philosophy is …')}`],
  rows:[['is offered · are manufactured','المضارع: is / are'],['was established · were opened','الماضي: was / were'],['are sold by … · was started by …','مع by']],head:['English','الزمن'],
  pairs:[['The company established in 1930.','The company was established in 1930.','الشركة لم تؤسس نفسها: was established.'],['The offices was opened in 1978.','The offices were opened in 1978.','جمع: were.'],['Our products are manufacture in Asia.','Our products are manufactured in Asia.','التصريف الثالث.']],
  art:art(`<g data-tip="الجملة العادية"><rect x="20" y="40" width="320" height="46" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,68,'Somebody started the company in 1925.',{fs:13})}</g><path d="M180 90 L180 120" stroke="${C.ink}" stroke-width="3"/><g data-tip="المبني للمجهول"><rect x="20" y="125" width="320" height="46" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,153,'The company was started in 1925.',{fs:13,w:700})}</g>`,'passive'),cap:'من الجملة العادية إلى المبني للمجهول. مرّر المؤشر.',labs:[LAB222C]},
 {t:'السؤال بالمبني للمجهول',short:'When was it established?',old:[3],q:'كيف تسأل متى فُتحت المكاتب؟',ref:'ص 13، ص 88',
  lead:`إذا سألت عن آخر الجملة (الوقت، المكان) قدّم ${e('be')} على الموضوع. وإذا سألت عن أول الجملة فالترتيب كما هو.`,
  points:[`${e('The offices were opened in 2003.')} ← ${e('When were the offices opened?')}`,`${e('The products are manufactured in Asia.')} ← ${e('Where are the products manufactured?')}`,`${e('46 million burgers are sold every day.')} ← ${e('How many burgers are sold every day?')}`],
  pairs:[['When the offices were opened?','When were the offices opened?','be قبل الموضوع.'],['Where are manufactured the products?','Where are the products manufactured?','الموضوع قبل التصريف الثالث.']],labs:[LAB222D]}
 ]});
B.lesson({
 id:'u2-l2',unit:2,order:2,pages:'12–13',
 title:'Part B: Company profiles — الملف التعريفي للشركة',
 summary:'قراءة ملفات تعريفية لشركات وكتابتها (was established، is based in، specializes in، branches، philosophy)، والمبني للمجهول في المضارع والماضي (is offered، was started، were opened) مع by، والسؤال به (When was … established?).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 12–13',html:`<p>تقرأ وتكتب ملفاً تعريفياً لشركة. ستتعلم:</p><ol><li>كلمات الملف التعريفي.</li><li>المبني للمجهول في المضارع والماضي.</li><li>السؤال بالمبني للمجهول.</li></ol>`},
  ...R22.theory,
  {h:'تمارين الكتاب',ref:'ص 12–13، ص 88',html:
   bk(1,'ص 12','اقرأ الملفات الثلاثة وأكمل الجدول، ثم أجب عن الأسئلة.',['a: Allen and Overy: London · 1930 — Relocations Asia-Pacific: Bangkok · 25 years ago — Ford Motor Company: Detroit, Michigan · the early twentieth century','b1 international legal advice (capital markets, banking, property, corporate law)','b2 in 1978','b3 26','b4 it was voted \'Best Global Law Firm\'','b5 high quality rental accommodation (houses or apartments) in Bangkok','b6 nothing (a no-cost service)','b7 a highly personalized service; many clients are friends','b8 all over the world','b9 to develop products to meet the needs of people facing industrialization','b10 to design and manufacture products to meet the changing needs of people in the global community'])+
   bk(2,'ص 13','أكمل صيغ المبني للمجهول، ثم كوّن أسئلة.',['a2 were opened · a3 is offered · a4 was established · a5 was started · a6 are developed','b2 Where were the first overseas offices opened in 1978? · b3 What is offered (to clients)? · b4 When was Relocations Asia-Pacific established? · b5 When was Ford Motor Company started? · b6 What is developed by the company now?'])+
   bk(3,'ص 13','نشاط ثنائي: اسأل زميلك عن شركة وأجب عن أسئلته عن شركة أخرى.',null,'معلومات الطالب أ في ص 76 من الكتاب.')+
   bk(4,'ص 13','اكتب ملفاً تعريفياً قصيراً للشركة التي سألت عنها.',null,'إجابة حرة.')+
   bk('Language file','ص 88','ضع الأفعال بالمبني للمجهول في المضارع أو الماضي.',['1 was started','2 was given','3 are lent','4 is repaired','5 were stolen','6 was damaged','7 are charged','8 is given','9 is returned','10 is serviced'])}
 ],
 stations:[
  {intro:true},
  ...R22.stations,
  {recap:['المبني للمجهول = be + التصريف الثالث.','المضارع: is offered / are manufactured.','الماضي: was established / were opened.','by لمن قام بالفعل.','When was … established? · Where are … manufactured?']}
 ],
 lab:lab2b,
 examples:[
  {title:'مثال 1: الماضي',ref:'ص 88',q:`<p>حوّل: ${e('Somebody opened two new offices in 2020.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الموضوع: ${e('Two new offices')} (جمع).`},{t:`الخطوة 2: ${e('were')} + ${e('opened')}.`},{t:`الخطوة 3: ${e('Two new offices were opened in 2020.')}`,final:true}]},
  {title:'مثال 2: المضارع',ref:'ص 88',q:`<p>حوّل: ${e('We offer expert advice to our clients.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الموضوع: ${e('Expert advice')} (مفرد).`},{t:`الخطوة 2: ${e('is')} + ${e('offered')}.`},{t:`الخطوة 3: ${e('Expert advice is offered to our clients.')}`,final:true}]},
  {title:'مثال 3: السؤال',ref:'ص 13',q:`<p>اسأل: متى أُسست الشركة؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('When')}`},{t:`الخطوة 2: + ${e('was')} + ${e('the company')}`},{t:`الخطوة 3: ${e('When was the company established?')}`,final:true}]}
 ],
 quiz:[
  {q:'The company ___ in 1930.',o:['was established','established','is establish','were established'],c:0,e:'الماضي المجهول.'},
  {q:'Our products ___ in Asia.',o:['are manufactured','is manufactured','manufactured','are manufacture'],c:0,e:'المضارع المجهول.'},
  {q:'Two offices ___ in 2003.',o:['were opened','was opened','opened','are open'],c:0,e:'جمع: were.'},
  {q:'When ___ the company started?',o:['was','did','is','were'],c:0,e:'When was …?'},
  {q:'The company was started ___ John Halley.',o:['by','from','with','of'],c:0,e:'by.'},
  {q:'Where ___ the products made?',o:['are','is','do','did'],c:0,e:'جمع مضارع.'}
 ]
});
})(PLCBOOK);

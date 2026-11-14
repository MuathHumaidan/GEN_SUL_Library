/* الوحدة 3 — Products and services: Part A (ص 14–15) · Part B (ص 16–17) · Review 1 (ص 18–19)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 3A Describing products and services ========== */
const PROD=[{n:'SunCharge power bank',k:'product',has:['a small solar panel','two USB ports'],can:['charge a phone three times','work in the desert'],you:['carry it in your pocket'],cost:'SAR 149'},
 {n:'CleanCar mobile wash',k:'service',has:['a team of 20 washers','a free app'],can:['wash your car at home or at work'],you:['book a wash in two minutes','pay online'],cost:'SAR 45 a wash'},
 {n:'SkillUp online courses',k:'service',has:['more than 300 courses','Arabic and English videos'],can:['work on any phone or computer'],you:['study 24 hours a day','get a certificate'],cost:'SAR 99 a month'}];
function lab3a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">صِف المنتج أو الخدمة</h3><p class="sub">منتجات وخدمات من إعدادنا، مبني على التمرين 3 ص 15: It has / It can / You can / It costs.</p>
  <div class="ph-row">${PROD.map((p,i)=>`<button type="button" class="btn${i?'':' pri'}" data-p="${i}">${p.n}</button>`).join('')}</div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">make أم provide؟</h3><p class="sub">مبني على التمرين 1 ص 14.</p><div id="mk"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أيها منتج وأيها خدمة؟</li><li>لماذا نقول <span class="en">It costs</span> لكن <span class="en">You can</span>؟</li><li>صِف جوالك بالجمل الأربع.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=i=>{el.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('pri',+b.dataset.p===i));const p=PROD[i];
  $('#o').innerHTML=`<p class="sub">${p.k==='product'?'منتج (product)':'خدمة (service)'}</p>`+eb([...p.has.map(h=>`It has ${h}.`),...p.can.map(h=>`It can ${h}.`),...p.you.map(h=>`You can ${h}.`),`It costs ${p.cost}.`])};
 el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>sh(+b.dataset.p));sh(0);
 $('#mk').innerHTML=eb(['A car company makes cars.','A bank provides banking services.','An airline provides air travel.','A phone company makes phones.']);
}
/* ===== مختبرات «شرح القاعدة» الوحدة 3 ===== */
const CO3={fac:['Gulf Office','make','office equipment','product','منتج'],food:['Red Sea Foods','produce','soft drinks','product','منتج'],bank:['Nova Bank','provide','banking services','service','خدمة'],net:['SkyNet','offer','Internet access 24 hours a day','service','خدمة']};
const LAB131A={title:'make أم provide أم offer؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الشركة، وشاهد الفعل المناسب لما تقدمه: منتج أم خدمة؟',
 controls:[{k:'c',label:'الشركة',opts:Object.keys(CO3).map(k=>[k,CO3[k][0]])}],
 out:({c})=>{const [n,v,o,k,ar]=CO3[c];return{pieces:[[n,'n','الشركة = it'],[v+'s','k',k==='product'?'للمنتج':'للخدمة'],[o+'.','q',ar]],say:`${n} ${v}s ${o}.`,why:`${e('make · produce')} للمنتج الذي تمسكه، و ${e('provide · offer')} للخدمة. والشركة مفردة فنضيف ${e('s')}.`}}})};
const LAB131B={title:'صِف المنتج أو الخدمة',w:(el,B)=>N.labB(el,B,{intro:'اختر المنتج أو الخدمة، ثم اختر ما تريد أن تصفه.',
 controls:[{k:'p',label:'الاسم',opts:PROD.map((p,i)=>[String(i),p.n])},{k:'t',label:'أصف',opts:[['has','ما فيه'],['can','ما يستطيعه'],['you','ما تستطيعه أنت'],['cost','سعره']]}],
 out:({p,t})=>{const P=PROD[+p];if(t==='has')return{pieces:[['It','n','it'],['has','k','has مع it'],[P.has[0]+'.','x','']],say:`It has ${P.has[0]}.`,why:`مع ${e('it')} نقول ${e('has')}.`};
  if(t==='can')return{pieces:[['It','n','it'],['can','k','يستطيع'],[P.can[0]+'.','x','الفعل كما هو']],say:`It can ${P.can[0]}.`,why:`بعد ${e('can')} الفعل كما هو بلا ${e('s')}.`};
  if(t==='you')return{pieces:[['You','n','أنت (المستعمل)'],['can','k','تستطيع'],[P.you[0]+'.','x','الفعل كما هو']],say:`You can ${P.you[0]}.`,why:`${e('You can …')} لما يستطيعه المستعمل.`};
  return{pieces:[['It','n','it'],['costs','k','costs مع it'],[P.cost+'.','x','السعر']],say:`It costs ${P.cost}.`,why:`${e('It costs')} + السعر. و ${e('SAR')} = الريال السعودي.`}}})};
const AD3={cheap:['cheap','cheaper','cost',-1,'+ er'],fast:['fast','faster','time',-1,'+ er'],comf:['comfortable','more comfortable','comfort',1,'طويلة: more'],conv:['convenient','more convenient','conv',1,'طويلة: more'],exp:['expensive','more expensive','cost',1,'طويلة: more']};
const bar3=(key,dir)=>{const v=OPT.map(o=>o.s[key]),mx=Math.max(...v);return `<svg viewBox="0 0 360 150" width="340">${OPT.map((o,i)=>{const w=Math.round(v[i]/mx*220);return `<text x="10" y="${35+i*42}" font-size="13" fill="#333">${o.n.replace('the ','')}</text><rect x="70" y="${20+i*42}" width="${w}" height="22" rx="4" fill="${['#1f5fd1','#00875a','#b37d00'][i]}"/><text x="${76+w}" y="${36+i*42}" font-size="12" fill="#333">${key==='cost'?'SAR '+v[i]:key==='time'?v[i]+' h':'★'.repeat(v[i])}</text>`}).join('')}</svg>`};
const LAB132A={title:'صيغة المقارنة',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة ووسيلتين. الجملة تُبنى من الأرقام في الرسم.',
 controls:[{k:'a',label:'الصفة',opts:Object.keys(AD3).map(k=>[k,AD3[k][0]])},{k:'x',label:'الأولى',opts:OPT.map((o,i)=>[String(i),o.n])},{k:'y',label:'الثانية',opts:OPT.map((o,i)=>[String(i),o.n])}],
 out:({a,x,y})=>{const [adj,cmp,key,dir,rule]=AD3[a],A=OPT[+x],Bo=OPT[+y];if(x===y)return{svg:bar3(key,dir),bad:'اختر وسيلتين مختلفتين.'};
  const va=A.s[key],vb=Bo.s[key];if(va===vb)return{svg:bar3(key,dir),pieces:[[A.n.replace(/^t/,'T'),'n',''],['is as '+adj+' as','k','متساويان'],[Bo.n+'.','n','']],say:`${A.n} is as ${adj} as ${Bo.n}.`,why:`القيمتان متساويتان، فنقول ${e('as … as')} <small>(إضافة من خارج الكتاب)</small>.`};
  const aWins=dir<0?va<vb:va>vb,W=aWins?A:Bo,L=aWins?Bo:A;
  return{svg:bar3(key,dir),pieces:[[W.n.replace(/^t/,'T'),'n','الأول'],['is','x',''],[cmp,'k',rule],['than','q','من'],[L.n+'.','n','الثاني']],say:`${W.n.replace(/^t/,'T')} is ${cmp} than ${L.n}.`,why:`الصفة القصيرة نضيف لها ${e('er')}، والطويلة نسبقها بـ ${e('more')}، وبعدها ${e('than')}.`}}})};
const ND3={cheap:['cheap','cheaper'],fast:['fast','faster'],comf:['comfortable','more comfortable']};
const LAB132B={title:'الأنسب لمن؟ ولماذا؟',w:(el,B)=>N.labB(el,B,{intro:'اختر أهم شيء عند المسافر، وشاهد الوسيلة الأنسب له مع السبب.',
 controls:[{k:'n',label:'يهمه',opts:[['cheap','السعر'],['fast','الوقت'],['comf','الراحة']]}],
 out:({n})=>{const key={cheap:'cost',fast:'time',comf:'comfort'}[n],sorted=[...OPT].sort((p,q)=>n==='comf'?q.s[key]-p.s[key]:p.s[key]-q.s[key]),W=sorted[0],L=sorted[1];
  return{svg:bar3(key),pieces:[['I think','x',''],[W.n,'n','الاختيار'],['is better for Mr Daniel','k','better for + الشخص'],['because','q','السبب'],[`it's ${ND3[n][1]} than ${L.n}.`,'x','المقارنة']],say:`I think ${W.n} is better for Mr Daniel because it's ${ND3[n][1]} than ${L.n}.`,why:`${e('better')} مقارنة ${e('good')} (شاذة)، و ${e('because')} يأتي بعدها السبب.`}}})};
const R131=N.rule({title:'المنتج والخدمة، و make / provide / offer، ووصف المنتج',ref:'ص 14–15',
 intro:`في هذا الدرس تصف ما تقدمه شركتك: هل هو منتج أم خدمة؟ وبأي فعل نصفه؟ ثم كيف تصف المنتج: ما فيه، وما يستطيعه، وسعره.`,
 parts:[
 {t:'المنتج والخدمة و make / provide / offer',short:'make · provide · offer',old:[1],q:'ما الفرق بين make و provide؟',ref:'ص 14',
  lead:`كل شركة تقدم منتجاً أو خدمة. والفعل الذي نصف به عملها يختلف بينهما.`,
  points:[`${e('product')} منتج: شيء تشتريه وتمسكه، مثل ${e('soft drinks · mobile phones')}`,`${e('service')} خدمة: عمل يُقدَّم لك، مثل ${e('banking · Internet access · air travel')}`,
   `<b>للمنتج:</b> ${e('make')} أو ${e('produce')}: ${e('They make office equipment.')}`,`<b>للخدمة:</b> ${e('provide')} أو ${e('offer')}: ${e('They provide banking services.')}`,`والشركة مفردة، فمعها يأخذ الفعل ${e('s')}: ${e('The company offers online banking.')}`],
  grid:{head:['الفعل','المعنى','مثال'],rows:[['make / produce','يصنع / ينتج','They make office equipment.'],['provide','يقدّم (خدمة)','They provide banking services.'],['offer','يعرض / يقدّم','We offer online banking 24 hours a day.']]},
  pairs:[['The company provide banking services.','The company provides banking services.','الشركة مفردة: نضيف s.']],
  art:art(`<g data-tip="product — منتج: يُصنع (make / produce)."><rect x="20" y="50" width="150" height="190" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(95,80,'products',{fs:16,w:700})}${['phones','cars','soft drinks','staplers'].map((x,i)=>TL(95,120+i*30,x,{fs:13})).join('')}</g>
    <g data-tip="service — خدمة: تُقدَّم (provide / offer)."><rect x="190" y="50" width="150" height="190" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(265,80,'services',{fs:16,w:700})}${['banking','air travel','Internet access','car washing'].map((x,i)=>TL(265,120+i*30,x,{fs:13})).join('')}</g>`,'منتجات وخدمات'),cap:'منتجات وخدمات. مرّر المؤشر على كل عمود.',labs:[LAB131A,{title:'الفعل',w:(el,B)=>N.cases(el,B,{intro:'أي فعل؟',cases:[{q:'An airline ___ air travel.',opts:[['provides',1],['makes',0]]},{q:'Pepsi ___ soft drinks.',opts:[['makes',1],['provides',0]]},{q:'We ___ banking 24 hours a day.',opts:[['offer',1],['produce',0]]}]})}]},
 {t:'وصف المنتج',short:'has · can · costs',old:[2],q:'كيف تقول سعر المنتج وما يستطيعه؟',ref:'ص 14–15',
  lead:`لتعرض منتجاً على زبون تذكر ما فيه، وما يستطيعه، وما يستطيع الزبون أن يفعله به، وسعره.`,
  points:[`<b>ما فيه:</b> ${e('It has two USB ports.')}`,`<b>ما يستطيعه:</b> ${e('It can charge a phone three times.')}`,`<b>ما تستطيعه أنت:</b> ${e('You can carry it in your pocket.')}`,`<b>السعر:</b> ${e('It costs SAR 149.')}، و<b>الوقت:</b> ${e('It takes about ten minutes.')}`,
   `بعد ${e('can')} الفعل كما هو بلا ${e('s')}: ${e('It can make holes')} لا ${e('It can makes')}.`],
  html:vt([['It has two USB ports.','فيه …'],['It can charge a phone three times.','يستطيع …'],['You can carry it in your pocket.','تستطيع أنت …'],['It costs SAR 149.','سعره …'],['It takes about ten minutes.','يستغرق …']],['English','المعنى']),
  pairs:[['It can charges a phone.','It can charge a phone.','بعد can الفعل بلا s.'],['It have two ports.','It has two ports.','مع it نقول has.']],
  art:art(`${[['It has two USB ports.','فيه'],['It can charge a phone.','يستطيع'],['You can carry it.','تستطيع أنت'],['It costs SAR 149.','سعره']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="30" y="${40+i*58}" width="300" height="46" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,69+i*58,x[0],{fs:15,w:700})}</g>`).join('')}`,'وصف المنتج'),cap:'أربع جمل لوصف منتج. مرّر المؤشر على كل منها.',labs:[LAB131B,{title:'الوصف',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'It ___ just SAR 29.',o:['costs','cost'],a:0},{s:'The punch can ___ holes in ten sheets.',o:['make','makes'],a:0},{s:'You can ___ online in three steps.',o:['register','registers'],a:0}]})}]}
 ]});
B.lesson({
 id:'u3-l1',unit:3,order:1,pages:'14–15',
 title:'Part A: Describing products and services — وصف المنتجات والخدمات',
 summary:'المنتجات والخدمات وأفعالها (make، produce، provide، offer)، ووصف منتج أو خدمة بـ It has / It can / You can / It costs، وقراءة الأرقام والأسعار في إعلان، وكتابة فقرة عن شركة من أرقامها.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 14–15',html:`<p>تصف ما تقدمه شركة. ستتعلم:</p><ol><li>الفرق بين المنتج والخدمة.</li><li>${e('make, produce, provide, offer')}</li><li>${e('It has / It can / You can / It costs')}</li></ol>`},
  ...R131.theory,
  {h:'تمارين الكتاب',ref:'ص 14–15',html:
   bk(1,'ص 14','طابق الشركات بالمنتجات والخدمات، ثم تحدث عنها.',['Pepsi: a soft drinks','Nokia: b mobile phones','T-Online: c Internet access','Barclays: d banking','Virgin Atlantic: e air travel'])+
   bk(2,'ص 14','استمع وأكمل الملاحظات والعبارات.',['a staple wizard: up to 8 sheets · 3,000 times from 4 batteries · €29','a punch wizard: up to 10 sheets · €39',"b Eurobanx Direct: Europe's number one direct bank · 24 hours · 7 days · register in 3 steps · about 10 minutes · call 0807 363992",'c 1 costs 2 can 3 make 4 provide 5 offer 6 can'])+
   bk(3,'ص 15','نشاط ثنائي: صِف آلة القهوة وخدمة الإنترنت، واكتب ما يصفه زميلك.',null,'معلومات الطالب أ في ص 77 من الكتاب.')+
   bk(4,'ص 15','اكتب فقرة عن شركة وجبات سريعة من أرقامها.',['It has 11,400 restaurants in 58 countries. It produces 1.7 billion Whopper sandwiches a year. It has 15,000,000 customers a day … (بداية نموذجية)'])},
  {h:'الاستماع',ref:'ص 14',html:au('3A-2a','ص 14 — التمرين 2a','إعلان عن أداتين مكتبيتين.')+au('3A-2b','ص 14 — التمرين 2b','إعلان عن خدمة بنك.')}
 ],
 stations:[
  {intro:true},
  ...R131.stations,
  {recap:['product ≠ service.','make / produce منتجات، provide / offer خدمات.','It has … / It can … / You can … / It costs …','بعد can الفعل كما هو.']}
 ],
 lab:lab3a,
 examples:[
  {title:'مثال 1: ماذا تفعل الشركة؟',ref:'ص 14',q:`<p>ماذا تفعل شركة الاتصالات؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: تقدّم خدمة: ${e('provide')}.`},{t:`الخطوة 2: الخدمة: ${e('phone and Internet services')}.`},{t:`الخطوة 3: ${e('They provide phone and Internet services.')}`,final:true}]},
  {title:'مثال 2: وصف منتج',ref:'ص 15',q:`<p>صِف مكيفاً صغيراً: فيه جهاز تحكم، ويبرّد غرفة كبيرة، وسعره 1200 ريال.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('It has a remote control.')}`},{t:`الخطوة 2: ${e('It can cool a big room.')}`},{t:`الخطوة 3: ${e('It costs SAR 1,200.')}`,final:true}]},
  {title:'مثال 3: فقرة من أرقام',ref:'ص 15',q:`<p>شركة مقاهٍ: 300 فرع في 12 دولة، و 5000 موظف.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('It has 300 branches in 12 countries.')}`},{t:`الخطوة 2: ${e('It has 5,000 employees.')}`},{t:`الخطوة 3: ${e('It has 300 branches in 12 countries and 5,000 employees.')}`,final:true}]}
 ],
 quiz:[
  {q:'A bank ___ banking services.',o:['provides','makes','produces','builds'],c:0,e:'provide للخدمات.'},
  {q:'It ___ just SAR 29.',o:['costs','cost','costing','is cost'],c:0,e:'it + costs.'},
  {q:'The machine can ___ holes.',o:['make','makes','making','to make'],c:0,e:'can + الفعل.'},
  {q:'Internet access هو:',o:['service','product','price','company'],c:0,e:'خدمة.'},
  {q:'We ___ online banking 24 hours a day.',o:['offer','make','produce','cost'],c:0,e:'offer.'},
  {q:'You ___ register in three easy steps.',o:['can','cans','are can','do can'],c:0,e:'You can.'}
 ]
});

/* ========== 3B Comparing products and services ========== */
const ADJ=[['cheap','cheaper','قصير: + er'],['fast','faster','قصير: + er'],['big','bigger','ساكن بين متحركين: نضاعفه + er'],['tasty','tastier','ينتهي بـ y: ier'],['easy','easier','ينتهي بـ y: ier'],['comfortable','more comfortable','طويل: more'],['convenient','more convenient','طويل: more'],['expensive','more expensive','طويل: more'],['good','better','شاذ'],['bad','worse','شاذ']];
const OPT=[{n:'the plane',s:{cost:520,time:1.5,comfort:2,conv:1}},{n:'the train',s:{cost:180,time:4,comfort:3,conv:3}},{n:'the car',s:{cost:150,time:4.5,comfort:2,conv:2}}];
function lab3b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">قارن طريقتين للسفر</h3><p class="sub">من الرياض إلى الدمام. <b>قيم توضيحية</b> من إعدادنا، مبني على التمرين 2b ص 16.</p>
  <div class="ph-row"><select class="ph-sel" id="a">${OPT.map((o,i)=>`<option value="${i}">${o.n}</option>`).join('')}</select><select class="ph-sel" id="b">${OPT.map((o,i)=>`<option value="${i}" ${i===1?'selected':''}>${o.n}</option>`).join('')}</select></div><div id="tb"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">صيغة المقارنة</h3><p class="sub">من «Language file» ص 86.</p><select class="ph-sel" id="adj">${ADJ.map((x,i)=>`<option value="${i}">${x[0]}</option>`).join('')}</select><div id="ao"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>قارن الطائرة بالقطار في السرعة والسعر.</li><li>لماذا نقول <span class="en">bigger</span> بحرفي g؟</li><li>ما المقارنة من <span class="en">good</span>؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const cap=s=>s[0].toUpperCase()+s.slice(1);
 const sh=()=>{const a=OPT[+$('#a').value],b=OPT[+$('#b').value];
  $('#tb').innerHTML=vt([['cost (SAR)',`${a.s.cost} / ${b.s.cost}`],['time (hours)',`${a.s.time} / ${b.s.time}`],['comfort (★)',`${'★'.repeat(a.s.comfort)} / ${'★'.repeat(b.s.comfort)}`],['convenience (★)',`${'★'.repeat(a.s.conv)} / ${'★'.repeat(b.s.conv)}`]],['',`${a.n} / ${b.n}`]);
  if(a===b){$('#o').innerHTML='<p class="sub">اختر طريقتين مختلفتين.</p>';return}const L=[];
  const c=(x,y,w1,n1,n2)=>{if(x!==y)L.push(`${cap(n1)} is ${w1} than ${n2}.`)};
  a.s.cost<b.s.cost?c(1,2,'cheaper',a.n,b.n):c(1,2,'cheaper',b.n,a.n);
  if(a.s.time!==b.s.time)(a.s.time<b.s.time?c(1,2,'faster',a.n,b.n):c(1,2,'faster',b.n,a.n));
  if(a.s.comfort!==b.s.comfort)(a.s.comfort>b.s.comfort?c(1,2,'more comfortable',a.n,b.n):c(1,2,'more comfortable',b.n,a.n));
  if(a.s.conv!==b.s.conv)(a.s.conv>b.s.conv?c(1,2,'more convenient',a.n,b.n):c(1,2,'more convenient',b.n,a.n));
  $('#o').innerHTML=eb(L)};
 ['a','b'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const as=()=>{const x=ADJ[+$('#adj').value];$('#ao').innerHTML=`${eb(`${x[0]} → ${x[1]} than`)}<p class="sub">${x[2]}</p>`};$('#adj').addEventListener('input',as);as();
}
const R132=N.rule({title:'صيغة المقارنة، واختيار الأنسب مع السبب',ref:'ص 16–17',
 intro:`عندما تختار بين منتجين أو خدمتين تقارن بينهما. نشرح كيف نكوّن صيغة المقارنة، ثم كيف نقترح الأنسب لشخص مع ذكر السبب.`,
 parts:[
 {t:'صيغة المقارنة',short:'cheaper · more comfortable',old:[1],q:'لماذا نقول cheaper لكن more comfortable؟',ref:'ص 16',
  lead:`لنقارن بين شيئين نغيّر الصفة إلى صيغة المقارنة، ثم نضع ${e('than')} (من). وطريقة التغيير تعتمد على طول الصفة.`,
  points:[`<b>الصفة القصيرة</b> نضيف لها ${e('er')}: ${e('cheap → cheaper · fast → faster')}`,`<b>القصيرة المنتهية بساكن بعد متحرك</b> نضاعف آخرها: ${e('big → bigger')}`,`<b>المنتهية بـ ${e('y')}</b> نحذف ${e('y')} ونضيف ${e('ier')}: ${e('easy → easier')}`,
   `<b>الصفة الطويلة</b> نضع قبلها ${e('more')}: ${e('comfortable → more comfortable')}`,`<b>الشاذة</b> تُحفظ: ${e('good → better · bad → worse')}`,`<b>الجملة:</b> ${e('The train is cheaper than the plane.')}`],
  grid:{head:['الصفة','المقارنة','القاعدة'],rows:ADJ.map(x=>[x[0],x[1],x[2]])},
  pairs:[['The plane is more faster than the train.','The plane is faster than the train.','لا نجمع more مع er.'],['The train is comfortabler.','The train is more comfortable.','الطويلة مع more.'],['The train is cheaper that the plane.','The train is cheaper than the plane.','بعد المقارنة than.']],
  art:art(`${[['fast → faster','قصير: + er'],['big → bigger','نضاعف g'],['tasty → tastier','y → ier'],['comfortable → more comfortable','طويل: more'],['good → better','شاذ']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="20" y="${30+i*52}" width="320" height="42" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,57+i*52,x[0],{fs:15,w:700})}</g>`).join('')}`,'المقارنة'),cap:'خمس قواعد للمقارنة. مرّر المؤشر على كل منها.',labs:[LAB132A,{title:'المقارنة',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The train is ___ than the plane.',o:['cheaper','more cheap'],a:0},{s:'Business class seats are ___ than economy seats.',o:['bigger','biger'],a:0},{s:'The food on the plane is ___ than on the train.',o:['better','gooder'],a:0},{s:'The train is ___ than the car.',o:['more comfortable','comfortabler'],a:0}]})}]},
 {t:'اختيار الأنسب مع السبب',short:'better for … because',old:[2],q:'كيف تقترح فندقاً لزائر وتذكر السبب؟',ref:'ص 17',
  lead:`عندما تختار لشخص آخر تذكر اختيارك، ثم السبب، والسبب غالباً مقارنة.`,
  points:[`${e('I think')} + الاختيار + ${e('is better for')} + الشخص: ${e('I think the Garden Hotel is better for Mr Daniel')}`,`${e('because')} + السبب: ${e("because it's near the airport.")}`,`ويمكن أن نضيف مقارنة: ${e("It's cheaper than the Palm Hotel.")}`],
  pairs:[["It's better for Mr Daniel because cheaper.","It's better for Mr Daniel because it's cheaper.",'بعد because جملة كاملة.']],
  art:art(`<g data-tip="better for + الشخص"><rect x="20" y="70" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,101,'The Garden Hotel is better for Daniel',{fs:14,w:700})}</g>
    <g data-tip="because + السبب"><rect x="20" y="140" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,171,"because it's near the airport.",{fs:14,w:700})}</g>`,'better for because'),cap:'الاختيار ثم السبب. مرّر المؤشر على كل جزء.',labs:[LAB132B,{title:'السبب',w:(el,B)=>N.cases(el,B,{intro:'أي سبب يناسب؟',cases:[{q:'A family on holiday wants shopping.',opts:[["because it's near the shopping centre",1],["because it's near the airport",0]]},{q:'A manager has only one day.',opts:[["because it's near his meetings",1],['because it has a big pool',0]]}]})}]}
 ]});
B.lesson({
 id:'u3-l2',unit:3,order:2,pages:'16–17',
 title:'Part B: Comparing products and services — المقارنة بين المنتجات والخدمات',
 summary:'صيغة المقارنة (faster، bigger، tastier، more comfortable، better) مع than، وقواعد بنائها، ومقارنة طريقتين للسفر من جدول، وقراءة إعلانات فنادق واختيار الأنسب لكل زائر مع ذكر السبب.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 16–17',html:`<p>تقارن بين منتجين أو خدمتين. ستتعلم:</p><ol><li>صيغة المقارنة و ${e('than')}.</li><li>قواعد بنائها.</li><li>اختيار الأنسب مع السبب.</li></ol>`},
  ...R132.theory,
  {h:'تمارين الكتاب',ref:'ص 16–17',html:
   bk(1,'ص 16','صح أم خطأ؟ ثم استمع وصحّح الخاطئ.',['1 F — Club World is for business class passengers.','2 T','3 T'])+
   bk(2,'ص 16','أكمل جدول المقارنة، ثم قارن الطائرة بالقطار.',['a: more enjoyable · faster · more comfortable · bigger · tastier · better','c (نموذج): The plane is faster than the train. The train is cheaper than the plane. The train is more comfortable than the plane. The train is more convenient than the plane. The food on the plane is better than on the train. The service on the plane is better than on the train.'])+
   bk(3,'ص 17','طابق الفنادق بأرقام الخريطة، ثم اختر الأنسب لكل زائر.',['a: 1 The Amari Watergate · 2 The Amari Airport Hotel · 3 The Amari Boulevard','b (اقتراح): Bertrand and Greta → the Watergate (sightseeing and shopping) · Wendy Cho → the Airport Hotel (no city traffic, business facilities) · Vijai Shah → the Boulevard (shopping, nightlife, cheaper)'],'a من قراءتنا للخريطة؛ b إجابات مفتوحة.')+
   bk(4,'ص 17','تحدث مع زميلك عن طريقة السفر التي تفضلها، وعن منتج تشتريه.',null)},
  {h:'الاستماع',ref:'ص 16',html:au('3B-1b','ص 16 — التمرينان 1b و 2a','إعلان عن درجة رجال الأعمال في شركة طيران.')}
 ],
 stations:[
  {intro:true},
  ...R132.stations,
  {recap:['short + er: faster، cheaper.','big → bigger، tasty → tastier.','more + long: more comfortable.','good → better، bad → worse.','… is better for … because …']}
 ],
 lab:lab3b,
 examples:[
  {title:'مثال 1: صفة قصيرة',ref:'ص 16',q:`<p>القطار أرخص من الطائرة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('cheap')} قصيرة: ${e('cheaper')}.`},{t:`الخطوة 2: نضيف ${e('than')}.`},{t:`الخطوة 3: ${e('The train is cheaper than the plane.')}`,final:true}]},
  {title:'مثال 2: صفة طويلة',ref:'ص 16',q:`<p>القطار أكثر راحة من السيارة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('comfortable')} طويلة: ${e('more comfortable')}.`},{t:`الخطوة 2: ${e('than the car')}.`},{t:`الخطوة 3: ${e('The train is more comfortable than the car.')}`,final:true}]},
  {title:'مثال 3: الشاذ',ref:'ص 16',q:`<p>الخدمة في الطائرة أفضل من القطار.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('good')} شاذة: ${e('better')}.`},{t:`الخطوة 2: ${e('than on the train')}.`},{t:`الخطوة 3: ${e('The service on the plane is better than on the train.')}`,final:true}]}
 ],
 quiz:[
  {q:'big →',o:['bigger','biger','more big','bigest'],c:0,e:'نضاعف g.'},
  {q:'tasty →',o:['tastier','tastyer','more tasty than','tastyier'],c:0,e:'y → ier.'},
  {q:'good →',o:['better','gooder','more good','best'],c:0,e:'شاذة.'},
  {q:'The train is cheaper ___ the plane.',o:['than','that','then','from'],c:0,e:'than.'},
  {q:'convenient →',o:['more convenient','convenienter','convenientier','most convenient'],c:0,e:'طويلة: more.'},
  {q:'The plane is ___ than the train.',o:['faster','more fast','fastier','fastest'],c:0,e:'faster.'}
 ]
});

/* ========== Review 1 ========== */
B.lesson({
 id:'u3-l3',unit:3,order:3,pages:'18–19',
 title:'Review 1 — مراجعة الوحدات 1–3',
 summary:'مراجعة حروف الجر للمكان، و for / in / of في الحديث عن العمل، والضمائر بدل تكرار الأسماء، والتعارف، والصفات وأضدادها، وصيغة المقارنة، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 18–19',html:vt([['حروف الجر للمكان','The pens are on the desk, under the book.','2A'],['for / in / of','I work for XYZ. I work in Accounts. He is the director of …','1A · 2B'],['الضمائر',"I work for XYZ. It's a computer company.",'1–3'],['التعارف',"I'd like to introduce you to …",'1A · 1B'],['الأضداد','cheap ≠ expensive، safe ≠ dangerous','3B'],['المقارنة','A cash machine is more convenient than a bank queue.','3B']],['النقطة','مثال','الدرس'])},
  {h:'for · in · of',ref:'ص 18',html:vt([['I work for Delta Electric.','لدى شركة'],['I work in the Accounts Department.','في قسم'],['My office is in the suburbs.','في مكان'],['He is the director of Delta Electric.','مدير شركة …'],['She is a sales representative for Nova Motors.','مندوبة لصالح شركة']],['English','الاستعمال'])},
  {h:'الضمائر بدل التكرار',ref:'ص 18',html:`${vt([['Laura','she'],['Mark','he'],['the office','it'],['Laura and Mark','they']],['الاسم','الضمير'])}${eb("I work for XYZ Ltd. It is a computer company.")}`},
  {h:'تمارين المراجعة',ref:'ص 18–19',html:
   bk('Vocabulary 1','ص 18','اكتب خمس جمل عن أماكن أشياء في الصف، وزميلك يخمّن.',null)+
   bk('Language 1','ص 18','أكمل بـ in أو for أو of، ثم استبدل الأسماء المكررة بضمائر.',['a: 1 for · 2 in · 3 in · 4 of · 5 for · 6 in · in','b: 2 It (my office) · 3 They (Linda and Paul) · 4 He (Mr Chan) · 5 She (Maria) · 6 It (the Prague office)'])+
   bk('Communication 1','ص 18','نشاط ثنائي: تعارف في العمل حسب المخطط.',null)+
   bk('Vocabulary 2','ص 19','طابق الصفات بأضدادها، ثم صِف خمسة منتجات.',['1 e (uneconomical – economical)','2 a (big – small)','3 d (cheap – expensive)','4 g (slow – fast)','5 b (inconvenient – convenient)','6 f (attractive – unattractive)','7 c (boring – exciting)','8 h (safe – dangerous)'])+
   bk('Language 2','ص 19','كوّن جمل مقارنة بالصفات.',['1 Paris is more exciting than my town. (نموذج)','2 Flying is faster than driving. (نموذج)'],'إجابات مفتوحة.')+
   bk('Communication 2','ص 19','ناقش مع زميلك نقل مكان العمل أو الدراسة، وقارن المكانين.',null)},
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدتان 1 و 2',title:'خلاصة: التعارف والمكان',q:'قدّم نفسك وقل أين مكتبك.',ref:'ص 18',
   art:art(`<g data-tip="for + الشركة"><rect x="20" y="50" width="320" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,78,'I work for Delta Electric.',{fs:14,w:700})}</g>
    <g data-tip="in + القسم"><rect x="20" y="106" width="320" height="44" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,134,"I'm in the Accounts Department.",{fs:14,w:700})}</g>
    <g data-tip="الضمير بدل الاسم"><rect x="20" y="162" width="320" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,190,"My office is in the suburbs. It's new.",{fs:14,w:700})}</g>`,'خلاصة 1–2'),
   cap:'ثلاث قواعد من الوحدتين 1 و 2. مرّر المؤشر على كل منها.',side:[{tip:`${e('director of')}: نقول ${e('the director of Mediation Corp.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'I work ___ XYZ Ltd.',o:['for','of'],a:0},{s:'My office is ___ the suburbs.',o:['in','for'],a:0},{s:'Mr Chan is the director ___ Mediation Corp.',o:['of','in'],a:0}]}),title:'مختبر مصغّر: for / in / of'}]},
  {st:2,short:'الوحدة 3',title:'خلاصة: الأضداد والمقارنة',q:'قارن خدمتين تستعملهما.',ref:'ص 19',
   art:art(`${[['cheap ≠ expensive'],['slow ≠ fast'],['safe ≠ dangerous'],['boring ≠ exciting']].map((x,i)=>`<g data-tip="${x[0]}"><rect x="${30+(i%2)*160}" y="${50+Math.floor(i/2)*80}" width="140" height="60" rx="12" fill="${i%3===0?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(100+(i%2)*160,86+Math.floor(i/2)*80,x[0],{fs:13,w:700})}</g>`).join('')}${TL(180,240,'A is cheaper than B.',{fs:15,w:700})}`,'الأضداد'),
   cap:'أربعة أضداد وجملة مقارنة. مرّر المؤشر على كل منها.',side:[{tip:`${e('uneconomical ≠ economical')}: البادئة ${e('un-')} تعني النفي.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Flying is ___ than driving.',o:['faster','more fast'],a:0},{s:'A cash machine is more ___ than a bank queue.',o:['convenient','conveniently'],a:0},{s:'safe ≠ ___',o:['dangerous','exciting'],a:0}]}),title:'مختبر مصغّر: الوحدة 3'}]},
  {recap:['on, in, near, above, next to, behind, under, in front of.','work for (شركة)، work in (قسم)، director of.','الضمائر بدل تكرار الاسم.','أضداد الصفات.','المقارنة: + er / more … than.']}
 ],
 examples:[
  {title:'مثال 1: حرف الجر',ref:'ص 18',q:`<p>أكمل: Sara is a sales representative ___ Nova Motors.</p>`,given:[],solve:()=>[{t:`الخطوة 1: مندوبة لصالح شركة.`},{t:`الخطوة 2: نستعمل ${e('for')}.`},{t:`الخطوة 3: ${e('Sara is a sales representative for Nova Motors.')}`,final:true}]},
  {title:'مثال 2: الضمير',ref:'ص 18',q:`<p>أزل التكرار: My office is in Riyadh. My office is very big.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('My office')} مفرد غير عاقل: ${e('It')}.`},{t:`الخطوة 2: نستبدل الثانية.`},{t:`الخطوة 3: ${e('My office is in Riyadh. It is very big.')}`,final:true}]},
  {title:'مثال 3: مقارنة',ref:'ص 19',q:`<p>قارن: the Internet / a library (fast)</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('fast')} → ${e('faster')}.`},{t:`الخطوة 2: ${e('than a library')}.`},{t:`الخطوة 3: ${e('The Internet is faster than a library.')}`,final:true}]}
 ],
 quiz:[
  {q:'I work ___ XYZ Ltd.',o:['for','of','at in','to'],c:0,e:'work for.'},
  {q:'Linda and Paul → ___',o:['They','It','He','She'],c:0,e:'جمع: They.'},
  {q:'cheap ≠',o:['expensive','slow','boring','safe'],c:0,e:'ص 19.'},
  {q:'safe ≠',o:['dangerous','exciting','fast','big'],c:0,e:'ص 19.'},
  {q:'Flying is ___ than driving.',o:['faster','more fast','fastest','fastly'],c:0,e:'faster.'},
  {q:'He is the director ___ the company.',o:['of','for','in','at'],c:0,e:'director of.'}
 ]
});
})(PLCBOOK);

/* الوحدة 7 — Making a reservation: Part A Making a booking (ص 34–35) · Part B Choosing a service (ص 36–37)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const ORD=n=>{const w=['','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty-first','twenty-second','twenty-third','twenty-fourth','twenty-fifth','twenty-sixth','twenty-seventh','twenty-eighth','twenty-ninth','thirtieth','thirty-first'];return w[n]};
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];

/* ========== 7A Making a booking ========== */
function lab7a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">شاشة الحجز</h3><p class="sub">فندق من إعدادنا (<b>قيم توضيحية</b>: single SAR 450، double SAR 600 لليلة)، مبني على التمرين 1 ص 34.</p>
  <div class="ph-row"><input class="ph-num" id="nm" type="text" dir="ltr" maxlength="24" value="Omar Hassan" style="width:150px" aria-label="name"><select class="ph-sel" id="rt"><option value="single">single</option><option value="double">double</option></select></div>
  <div class="ph-row"><label>من يوم <input class="ph-num" id="f" type="number" min="1" max="30" value="20" style="width:64px"></label><label>إلى يوم <input class="ph-num" id="t" type="number" min="2" max="31" value="22" style="width:64px"></label><select class="ph-sel" id="mo">${MON.map((m,i)=>`<option value="${i}" ${i===5?'selected':''}>${m}</option>`).join('')}</select></div><div id="cd"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">المكالمة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>من يوم 20 إلى 22: كم ليلة؟</li><li>ما الفرق بين <span class="en">Would you like</span> و <span class="en">Do you want</span>؟</li><li>غيّر الغرفة إلى double: ماذا تغيّر؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{let f=Math.round(+$('#f').value),t=Math.round(+$('#t').value),w='';
  if(!(f>=1&&f<=30)){f=Math.min(30,Math.max(1,f||1));$('#f').value=f;w='صُحّح يوم الوصول (1–30). '}
  if(!(t>f&&t<=31)){t=Math.min(31,f+1);$('#t').value=t;w+='يوم المغادرة يجب أن يكون بعد يوم الوصول.'}
  const nm=$('#nm').value.trim()||'Omar Hassan',r=$('#rt').value,n=t-f,pr=r==='single'?450:600,m=MON[+$('#mo').value];
  $('#cd').innerHTML=(w?`<p class="sub" style="color:var(--red)">${w}</p>`:'')+vt([['Name',nm],['No. of nights',String(n)],['From',`${f} ${m}`],['To',`${t} ${m}`],['Room',r],['Total',`SAR ${(n*pr).toLocaleString('en')}`]],['Booking form','']);
  $('#o').innerHTML=dl([['Receptionist','Palm Hotel. Can I help you?'],['Guest',"Yes. I'd like to make a reservation, please."],['Receptionist','When would you like to stay?'],['Guest',`From the ${ORD(f)} of ${m} until the ${ORD(t)}.`],['Receptionist',`OK, so ${n} night${n>1?'s':''}. Would you like a single or a double room?`],['Guest',`A ${r} room, please.`],['Receptionist',`A ${r} is ${pr} riyals a night. May I have your name, please?`],['Guest',`It's ${nm}.`],['Receptionist','Could you spell that, please?']])};
 ['nm','rt','f','t','mo'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 7 ===== */
const BQ7={when:['When would you like to stay?','From the 20th until the 22nd.','التاريخ'],room:['Would you like a single or a double room?','A single room, please.','نوع الغرفة'],name:['May I have your name, please?','Yes, it’s Khalid Al-Harbi.','الاسم'],tel:['Can I have your telephone number?','It’s 0555 123 456.','الهاتف'],pay:['How do you want to pay?','By credit card.','الدفع'],conf:['Can I confirm your booking?','Yes, please.','التأكيد']};
const LAB171A={title:'أسئلة موظف الحجز',w:(el,B)=>N.labB(el,B,{intro:'اختر ما يريد الموظف أن يعرفه، وشاهد سؤاله وجواباً مناسباً.',
 controls:[{k:'q',label:'يسأل عن',opts:Object.keys(BQ7).map(k=>[k,BQ7[k][2]])}],
 out:({q})=>{const [a,b]=BQ7[q];return{pieces:[[a,'q','الموظف'],[b,'n','الزبون']],say:`${a} ${b}`,why:`أسئلة الموظف مهذبة غالباً: ${e('Would you like …? · May I have …? · Can I …?')}`}}})};
const WT7={book:'book a flight',fly:'fly on May the 13th',stay:'stay for two nights'};
const LAB171B={title:'want to أم would like to؟',w:(el,B)=>N.labB(el,B,{intro:'اختر ما تريد، والأسلوب، ونوع الجملة.',
 controls:[{k:'v',label:'أريد أن',opts:Object.keys(WT7).map(k=>[k,WT7[k]])},{k:'s',label:'الأسلوب',opts:[['p','مهذب'],['d','مباشر']]},{k:'f',label:'الجملة',opts:[['s','خبرية'],['q','سؤال']]}],
 out:({v,s,f})=>{const V=WT7[v],p=s==='p';if(f==='s')return{pieces:[[p?"I'd like to":'I want to','k',p?'مهذب أكثر':'مباشر'],[V+'.','n','الفعل كما هو']],say:`${p?"I'd like to":'I want to'} ${V}.`,why:`بعد ${e('want to')} و ${e('would like to')} الفعل كما هو.`};
  return{pieces:[[p?'Would you like to':'Do you want to','q',p?'سؤال مهذب':'سؤال مباشر'],[V+'?','n','الفعل كما هو']],say:`${p?'Would you like to':'Do you want to'} ${V}?`,why:`السؤال المهذب يبدأ بـ ${e('Would')}، والمباشر بـ ${e('Do')}.`}}})};
const LAB171C={title:'التاريخ في الكلام',w:(el,B)=>N.labB(el,B,{intro:'اختر اليوم والشهر والطريقة، وشاهد كيف نقول التاريخ.',
 controls:[{k:'d',label:'اليوم',opts:[1,2,3,13,20,22,31].map(n=>[String(n),String(n)])},{k:'m',label:'الشهر',opts:[[4,'May'],[8,'September'],[11,'December']].map(([v,t])=>[String(v),t])},{k:'f',label:'الطريقة',opts:[['a','the 13th of May'],['b','May the 13th']]}],
 out:({d,m,f})=>{const n=+d,M=MON[+m],sx=n%100>=11&&n%100<=13?'th':({1:'st',2:'nd',3:'rd'})[n%10]||'th';
  const pc=f==='a'?[['On','x',''],['the '+n+sx,'k',ORD(n)],['of '+M+'.','n','الشهر']]:[['On','x',''],[M,'n','الشهر'],['the '+n+sx+'.','k',ORD(n)]];
  return{pieces:pc,say:f==='a'?`On the ${ORD(n)} of ${M}.`:`On ${M} the ${ORD(n)}.`,why:`نقرأ اليوم بالعدد الترتيبي مع ${e('the')}، ومع التاريخ ${e('on')}. وللمدة: ${e('from … until …')}`}}})};
const AT7={cheap:['cheap','cheaper','the cheapest','p',-1,'السعر (ريال)'],fast:['fast','faster','the fastest','sp',1,'السرعة'],big:['big','bigger','the biggest','sz',1,'الحجم'],comf:['comfortable','more comfortable','the most comfortable','cf',1,'الراحة']};
const cbar7=k=>`<svg viewBox="0 0 360 140" width="340">${CARS.map((c,i)=>{const v=c[k],mx=Math.max(...CARS.map(x=>x[k])),w=Math.round(v/mx*200);return `<text x="8" y="${32+i*40}" font-size="12" fill="#333">${c.n.split(' ')[1]||c.n}</text><rect x="90" y="${18+i*40}" width="${w}" height="22" rx="4" fill="${['#1f5fd1','#00875a','#b37d00'][i]}"/><text x="${96+w}" y="${34+i*40}" font-size="12" fill="#333">${k==='p'?v:'★'.repeat(v)}</text>`}).join('')}</svg>`;
const LAB172A={title:'المقارنة أم التفضيل؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة، ثم: نقارن بين سيارتين، أم نختار الأفضل من الثلاث؟ الجملة تُبنى من الرسم.',
 controls:[{k:'a',label:'الصفة',opts:Object.keys(AT7).map(k=>[k,AT7[k][0]])},{k:'m',label:'نوع الجملة',opts:[['c','مقارنة (من اثنين)'],['s','تفضيل (من ثلاثة)']]}],
 out:({a,m})=>{const [adj,cmp,sup,k,dir]=AT7[a],srt=[...CARS].sort((x,y)=>dir<0?x[k]-y[k]:y[k]-x[k]);
  if(m==='c')return{svg:cbar7(k),pieces:[['The '+srt[0].n,'n',''],['is','x',''],[cmp,'k','مقارنة'],['than','q','من'],['the '+srt[1].n+'.','n','']],say:`The ${srt[0].n} is ${cmp} than the ${srt[1].n}.`,why:`المقارنة بين شيئين: ${e('er')} أو ${e('more')}، ثم ${e('than')}.`};
  return{svg:cbar7(k),pieces:[['The '+srt[0].n,'n',''],['is','x',''],[sup,'k','تفضيل: the + est / most'],['car.','n','']],say:`The ${srt[0].n} is ${sup} car.`,why:`التفضيل من ثلاثة فأكثر: ${e('the')} + ${e('est')} أو ${e('the most')}. ومع التفضيل نضع ${e('the')} دائماً.`}}})};
const DT7={a:[23,9,7],b:[8,3,5],c:[1,12,24]};
const LAB172B={title:'اقرأ التاريخ: بريطاني أم أمريكي؟',w:(el,B)=>N.labB(el,B,{intro:'اختر التاريخ المكتوب، ثم النظام. الرقم نفسه قد يعني تاريخين مختلفين!',
 controls:[{k:'d',label:'المكتوب',opts:Object.keys(DT7).map(k=>[k,DT7[k].map(String).join('/').replace(/\/(\d)$/,'/0$1')])},{k:'s',label:'النظام',opts:[['uk','بريطاني (يوم/شهر)'],['us','أمريكي (شهر/يوم)']]}],
 out:({d,s})=>{const [a,b,y]=DT7[d],yr=y<10?'two thousand and '+['','one','two','three','four','five','six','seven','eight','nine'][y]:'twenty twenty-four';
  if(s==='uk')return{pieces:[['the '+ORD(a),'k','اليوم أولاً'],['of '+MON[b-1]+',','n','الشهر'],[yr,'x','السنة']],say:`the ${ORD(a)} of ${MON[b-1]}, ${yr}`,why:'في بريطانيا اليوم أولاً ثم الشهر.'};
  if(a>12)return{bad:`في النظام الأمريكي الرقم الأول شهر، ولا يوجد شهر رقمه ${a}. هذا التاريخ بريطاني.`};
  return{pieces:[[MON[a-1],'n','الشهر أولاً'],['the '+ORD(b)+',','k','اليوم'],[yr,'x','السنة']],say:`${MON[a-1]} the ${ORD(b)}, ${yr}`,why:'في أمريكا الشهر أولاً ثم اليوم.'}}})};
const R171=N.rule({title:'أسئلة الحجز، و want to / would like to، والتاريخ في الكلام',ref:'ص 34–35',
 intro:`في هذا الدرس تحجز فندقاً ورحلة بالهاتف. نشرح أسئلة موظف الحجز، ثم الفرق بين ${e('want to')} و ${e('would like to')}، ثم كيف نقول التاريخ.`,
 parts:[
 {t:'أسئلة موظف الحجز',short:'أسئلة الحجز',old:[1],q:'ما الفرق بين single و double؟',ref:'ص 34',
  lead:`موظف الحجز يسأل أسئلة ثابتة ليكمل الحجز: التاريخ، ونوع الغرفة، والاسم، والهاتف، وطريقة الدفع.`,
  points:[`${e('When would you like to stay?')} و ${e('Would you like a single or a double room?')}`,`${e('May I have your name, please?')} و ${e('Can I have your telephone number?')}`,`${e('How do you want to pay? — By credit card.')} و ${e('Can I confirm your booking?')}`,
   `${e('single')} تذكرة ذهاب فقط أو غرفة لشخص، و ${e('return')} تذكرة ذهاب وعودة، و ${e('double')} غرفة لشخصين.`],
  html:vt([['When would you like to stay?','متى تريد الإقامة؟'],['Would you like a single or a double room?','غرفة مفردة أم مزدوجة؟'],['May I have your name, please?','اسمك من فضلك'],['Could you spell that, please?','تهجّه'],['Can I have your telephone number?','رقم هاتفك'],['When do you want to fly?','متى تريد السفر؟'],['How do you want to pay? — By credit card.','كيف تدفع؟ — بالبطاقة'],['Can I confirm your booking?','أؤكد حجزك؟']],['English','المعنى']),
  art:art(`<rect x="60" y="30" width="240" height="230" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,58,'Booking form',{fs:15,w:700})}${[['Name','May I have your name, please?'],['Tel','Can I have your telephone number?'],['No. of nights','When would you like to stay?'],['Room','Would you like a single or a double?'],['Payment','How do you want to pay?']].map((x,i)=>`<g data-tip="${x[1]}"><text x="80" y="${96+i*36}" font-size="13" font-weight="700" fill="${C.ink}" direction="ltr">${x[0]}: ..............</text></g>`).join('')}`,'نموذج الحجز'),cap:'نموذج حجز. مرّر المؤشر على كل حقل لترى سؤاله.',labs:[LAB171A,{title:'الأسئلة',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'When ___ you like to stay?',o:['would','do'],a:0},{s:'___ I have your name, please?',o:['May','Would'],a:0},{s:'Would you like a single ___ a double room?',o:['or','and'],a:0},{s:'How do you want to ___?',o:['pay','paying'],a:0}]})}]},
 {t:'want to و would like to',short:'want to · would like to',old:[2],q:"أيهما أكثر تهذيباً: I want to أم I'd like to؟",ref:'ص 34',
  lead:`كلاهما للرغبة، لكن ${e('would like to')} أكثر تهذيباً، فنستعملها مع من لا نعرفه، و ${e('want to')} أكثر مباشرة.`,
  points:[`<b>مهذب:</b> ${e("I'd like to book a flight.")} و ${e('Would you like a single room?')}`,`<b>مباشر:</b> ${e('I want to fly on May the 13th.')} و ${e('When do you want to fly?')}`,`بعدهما الفعل كما هو.`],
  grid:{head:['English','الاستعمال'],rows:[["I'd like to book a flight.",'مهذبة أكثر'],['I want to fly on May the 13th.','مباشرة'],['Would you like a single room?','سؤال مهذب'],['When do you want to fly?','سؤال مباشر']]},
  pairs:[['I want fly on Monday.','I want to fly on Monday.','لا ننسى to.'],["I'd like to booking a room.","I'd like to book a room.",'بعد to الفعل كما هو.']],
  art:art(`<g data-tip="I'd like to + الفعل"><rect x="20" y="60" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,91,"I'd like to book a flight.",{fs:15,w:700})}</g>
    <g data-tip="I want to + الفعل"><rect x="20" y="130" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,161,'I want to fly on May the 13th.',{fs:15,w:700})}</g>
    <g data-tip="13th = thirteenth"><rect x="90" y="200" width="180" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,228,'13th = thirteenth',{fs:14,w:700})}</g>`,'want would'),cap:'الرغبة والتاريخ. مرّر المؤشر على كل سطر.',labs:[LAB171B,{title:'الرغبة',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"I'd like ___ book a room.",o:['to','for'],a:0},{s:'I want to fly on the ___ of May. (22)',o:['twenty-second','twenty-two'],a:0},{s:'When do you want ___ fly?',o:['to','for'],a:0}]})}]},
 {t:'التاريخ في الكلام',short:'the 13th of May',q:'كيف تقول 13/5 في الكلام؟',ref:'ص 35',
  lead:`عند الحجز تقول التاريخ بصوتك، وله طريقتان.`,
  points:[`${e('On May the 13th.')} أو ${e('On the 13th of May.')}`,`نقرأ اليوم بالعدد الترتيبي مع ${e('the')}: ${e('13th = thirteenth · 22nd = twenty-second')}`,`للمدة: ${e('From Thursday the 20th until the 22nd.')}`],
  pairs:[['On May 13.','On May the 13th.','في الكلام نقول العدد الترتيبي.']],
  labs:[LAB171C]}
 ]});
B.lesson({
 id:'u7-l1',unit:7,order:1,pages:'34–35',
 title:'Part A: Making a booking — الحجز',
 summary:'حجز غرفة فندق ورحلة طيران بالهاتف: أسئلة موظف الحجز (When would you like to stay? Would you like a single or a double room? May I have your name? How do you want to pay?)، و want to / would like to، والتاريخ (May the 13th)، وتأكيد الحجز (Can I confirm your booking?) ورقم المرجع.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 34–35',html:`<p>تحجز غرفة أو رحلة، أو تأخذ حجزاً. ستتعلم:</p><ol><li>أسئلة موظف الحجز.</li><li>${e('want to / would like to')}</li><li>قول التاريخ وتأكيد الحجز.</li></ol>`},
  ...R171.theory,
  {h:'تمارين الكتاب',ref:'ص 34–35',html:
   bk(1,'ص 34','اكتب مع زميلك كل الأسئلة التي قد يسألها موظف الاستقبال.',['May I have your name, please? (مثال) · Can I have your telephone number? · How many nights? · When would you like to stay? · Single or double? (نماذج)'])+
   bk(2,'ص 34','رتّب الكلمات لتكوّن أسئلة الموظف، ثم استمع.',['1 When would you like to stay?','2 Would you like a single or a double room?','3 May I have your name, please?','4 Could you spell that, please?','5 Can I have your telephone number?'])+
   bk(3,'ص 35','استمع وأكمل نموذج الحجز ثم الحوار.',['a: Name Alona Gimenez · From Madrid · To Buenos Aires · Date 13 May · Time 12.00 (midday) · Flight no. IB 6845',"b: I'd like to · When do you want to fly · Can I have your name · Could you spell your surname · How do you want to pay · Can I confirm your booking"])+
   bk(4,'ص 35','نشاط ثنائي: خذ حجز فندق، واحجز تذكرة طيران.',null,'معلومات الطالب أ في ص 80 من الكتاب.')},
  {h:'الاستماع',ref:'ص 34–35',html:au('7A-2b','ص 34 — التمرين 2b','حجز غرفة فندق.')+au('7A-3a','ص 35 — التمرين 3','حجز تذكرة طيران.')}
 ],
 stations:[
  {intro:true},
  ...R171.stations,
  {recap:['When would you like to stay?','Would you like a single or a double room?','May I have your name? · Could you spell that?',"I'd like to … / I want to …",'How do you want to pay? · Can I confirm your booking?']}
 ],
 lab:lab7a,
 examples:[
  {title:'مثال 1: سؤال الموظف',ref:'ص 34',q:`<p>رتّب: like / would / you / When / stay / to ?</p>`,given:[],solve:()=>[{t:`الخطوة 1: كلمة السؤال أولاً: ${e('When')}.`},{t:`الخطوة 2: ${e('would you like to')} ثم الفعل.`},{t:`الخطوة 3: ${e('When would you like to stay?')}`,final:true}]},
  {title:'مثال 2: عدد الليالي',ref:'ص 34',q:`<p>من 20 يونيو إلى 22 يونيو. كم ليلة؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: 22 − 20 = 2.`},{t:`الخطوة 2: ${e('two nights')}.`},{t:`الخطوة 3: ${e('OK, so two nights.')}`,final:true}]},
  {title:'مثال 3: حجز رحلة',ref:'ص 35',q:`<p>تريد رحلة ذهاب فقط من الرياض إلى القاهرة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'd like to book a flight")}`},{t:`الخطوة 2: ${e('from Riyadh to Cairo, single, please')}`},{t:`الخطوة 3: ${e("I'd like to book a flight from Riyadh to Cairo, single, please.")}`,final:true}]}
 ],
 quiz:[
  {q:'When would you like to ___?',o:['stay','staying','stays','stayed'],c:0,e:'like to + الفعل.'},
  {q:'___ I have your name, please?',o:['May','Would','Do','Am'],c:0,e:'May I …?'},
  {q:'How do you want to pay? — ___',o:['By credit card.','On credit card.','With credit card.','In credit card.'],c:0,e:'by credit card.'},
  {q:'single ticket:',o:['ذهاب فقط','ذهاب وعودة','لشخصين','درجة أولى'],c:0,e:'single.'},
  {q:'22nd =',o:['twenty-second','twenty-two','twentieth-two','twenty-twoth'],c:0,e:'ordinal.'},
  {q:'From June 20th to June 22nd = ___ nights',o:['two','three','one','four'],c:0,e:'22 − 20.'}
 ]
});

/* ========== 7B Choosing a service ========== */
const CARS=[{n:'Kia Picanto',t:'hatchback',p:120,sp:2,sz:1,cf:1},{n:'Toyota Camry',t:'saloon',p:220,sp:3,sz:2,cf:3},{n:'Hyundai H-1',t:'people carrier',p:300,sp:1,sz:3,cf:2}];
const SUP=[['cheap','cheaper','the cheapest'],['fast','faster','the fastest'],['big','bigger','the biggest'],['comfortable','more comfortable','the most comfortable'],['expensive','more expensive','the most expensive'],['good','better','the best']];
function lab7b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">اختر سيارة</h3><p class="sub">ثلاث سيارات للإيجار (<b>قيم توضيحية</b>)، مبني على التمرين 1 ص 36. اختر الصفة.</p>
  ${vt(CARS.map(c=>[c.n,`${c.t} · SAR ${c.p}/day`]),['Car','Type · price'])}
  <div class="ph-row"><select class="ph-sel" id="ad"><option value="cheap">cheap</option><option value="fast">fast</option><option value="big">big</option><option value="comfortable">comfortable</option><option value="expensive">expensive</option></select></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">قل التاريخ</h3><p class="sub">مبني على التمرين 2 ص 36.</p><div class="ph-row"><input class="ph-num" id="dt" type="text" dir="ltr" value="8/3/05" maxlength="10" style="width:110px"><select class="ph-sel" id="st"><option value="uk">UK</option><option value="us">US</option></select></div><div id="do"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الفرق بين <span class="en">cheaper</span> و <span class="en">the cheapest</span>؟</li><li>اكتب 8/3/05 بالطريقتين البريطانية والأمريكية.</li><li>أي سيارة تختار لرحلة عائلية؟ ولماذا؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const a=$('#ad').value,S=SUP.find(x=>x[0]===a),key={cheap:c=>-c.p,expensive:c=>c.p,fast:c=>c.sp,big:c=>c.sz,comfortable:c=>c.cf}[a];
  const o=[...CARS].sort((x,y)=>key(x)-key(y));$('#o').innerHTML=eb([`The ${o[1].n} is ${S[1]} than the ${o[0].n},`,`but the ${o[2].n} is ${S[2]}.`])};
 $('#ad').addEventListener('input',sh);sh();
 const ds=()=>{const v=$('#dt').value.trim(),m=v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/);if(!m){$('#do').innerHTML='<p class="sub" style="color:var(--red)">اكتب التاريخ هكذا: 8/3/05</p>';return}
  let [_,a,b,y]=m;a=+a;b=+b;const uk=$('#st').value==='uk',d=uk?a:b,mo=uk?b:a;
  if(!(mo>=1&&mo<=12&&d>=1&&d<=31)){$('#do').innerHTML='<p class="sub" style="color:var(--red)">اليوم أو الشهر غير صحيح لهذا النظام.</p>';return}
  const yr='two thousand and '+['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine','thirty'][+y]||'';
  $('#do').innerHTML=eb(uk?`the ${ORD(d)} of ${MON[mo-1]}, ${yr}`:`${MON[mo-1]} the ${ORD(d)}, ${yr}`)+`<p class="sub">${uk?'البريطاني: اليوم ثم الشهر':'الأمريكي: الشهر ثم اليوم'}</p>`};
 ['dt','st'].forEach(k=>$('#'+k).addEventListener('input',ds));ds();
}
const R172=N.rule({title:'المقارنة والتفضيل، وكتابة التاريخ وقراءته',ref:'ص 36–37',
 intro:`في هذا الدرس تختار سيارة للاستئجار من بين عدة سيارات. نشرح التفضيل بعد أن عرفنا المقارنة، ثم كيف نقرأ التاريخ المكتوب بالأرقام.`,
 parts:[
 {t:'المقارنة والتفضيل',short:'the cheapest · the most',old:[1],q:'ما الفرق بين cheaper و the cheapest؟',ref:'ص 36',
  lead:`عرفنا المقارنة بين شيئين. وإذا كانت الخيارات ثلاثة أو أكثر واخترنا الأعلى منها نستعمل التفضيل.`,
  points:[`<b>المقارنة (من اثنين):</b> ${e('er')} أو ${e('more')}، ثم ${e('than')}: ${e('The Picanto is cheaper than the Camry.')}`,`<b>التفضيل (من ثلاثة فأكثر):</b> ${e('the')} + ${e('est')}: ${e('The Picanto is the cheapest car.')}`,
   `<b>الطويلة:</b> ${e('the most')}: ${e('The Camry is the most comfortable.')}`,`<b>الشاذة:</b> ${e('good → better → the best')}`,`مع التفضيل نضع ${e('the')} دائماً.`],
  grid:{head:['الصفة','المقارنة (من اثنين)','التفضيل (من ثلاثة فأكثر)'],rows:SUP},
  html:dl([['Agent','City Car Rental. Can I help you?'],['Customer',"I'd like to rent a car, please."],['Agent','How many days do you want the car for?'],['Customer','Three days.'],['Agent','And what kind of car would you like?'],['Customer','A saloon, please.'],['Agent','How about a Toyota Camry? It’s 220 riyals a day.'],['Customer','That sounds fine.']]),
  pairs:[['The Picanto is cheapest car.','The Picanto is the cheapest car.','مع التفضيل نضع the.'],['the most cheapest','the cheapest','لا نجمع most مع est.']],
  art:art(`${CARS.map((c,i)=>`<g data-tip="${c.n}: ${c.t}, SAR ${c.p}/day"><rect x="${20+i*112}" y="${230-c.p/2}" width="96" height="${c.p/2}" rx="6" fill="${[C.yel,C.blue,C.red][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(68+i*112,250,c.n.split(' ')[1],{fs:12,w:700})}${TL(68+i*112,222-c.p/2,'SAR '+c.p,{fs:12,w:700})}</g>`).join('')}`,'أسعار السيارات'),cap:'أسعار يومية توضيحية. مرّر المؤشر على كل عمود.',labs:[LAB172A,{title:'التفضيل',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The Picanto is ___ car.',o:['the cheapest','cheaper'],a:0},{s:'The H-1 is ___ expensive than the Camry.',o:['more','most'],a:0},{s:'The Camry is ___ comfortable.',o:['the most','the more'],a:0},{s:'This is ___ service in town.',o:['the best','the better'],a:0}]})}]},
 {t:'كتابة التاريخ وقراءته',short:'UK · US',old:[2],q:'هل 8/3/05 في مارس أم أغسطس؟',ref:'ص 36',
  lead:`التاريخ المكتوب بالأرقام يُقرأ بطريقتين حسب البلد، وقد يعني تاريخين مختلفين.`,
  points:[`<b>بريطانيا:</b> يوم/شهر: ${e('8/3/05 = the eighth of March, two thousand and five')}`,`<b>أمريكا:</b> شهر/يوم: ${e('8/3/05 = August the third, two thousand and five')}`,`إذا كان الرقم الأول أكبر من 12 فالتاريخ بريطاني حتماً: ${e('23/09/07')}`],
  grid:{head:['نكتب','نقول','النظام'],rows:[['23/09/07','the twenty-third of September, two thousand and seven','UK'],['8/3/05 (UK)','the eighth of March, two thousand and five','يوم/شهر'],['8/3/05 (US)','August the third, two thousand and five','شهر/يوم']]},
  art:art(`<g data-tip="البريطاني: اليوم ثم الشهر"><rect x="20" y="60" width="150" height="120" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(95,95,'UK',{fs:18,w:700})}${TL(95,130,'8/3/05',{fs:16,w:700})}${TL(95,158,'8 March',{fs:14})}</g>
    <g data-tip="الأمريكي: الشهر ثم اليوم"><rect x="190" y="60" width="150" height="120" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(265,95,'US',{fs:18,w:700})}${TL(265,130,'8/3/05',{fs:16,w:700})}${TL(265,158,'August 3',{fs:14})}</g>`,'UK US'),cap:'التاريخ نفسه بنظامين. مرّر المؤشر على كل منهما.',labs:[LAB172B,{title:'التاريخ',w:(el,B)=>N.cases(el,B,{intro:'كيف تقرأ؟',cases:[{q:'15/12/04 (UK)',opts:[['the fifteenth of December',1],['the twelfth of fifteen',0]]},{q:'5/6/24 (US)',opts:[['May the sixth',1],['the fifth of June',0]]}]})}]}
 ]});
B.lesson({
 id:'u7-l2',unit:7,order:2,pages:'36–37',
 title:'Part B: Choosing a service — اختيار خدمة',
 summary:'صيغة التفضيل (the cheapest، the biggest، the most comfortable، the best) مع المقارنة، واختيار سيارة إيجار، وكتابة التاريخ وقراءته بالطريقتين البريطانية والأمريكية، واستئجار سيارة بالهاتف، وتعبئة نموذج حجز، وتبرير الاختيار (because it was cheaper / the most helpful).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 36–37',html:`<p>تختار الخدمة الأنسب وتشرح السبب. ستتعلم:</p><ol><li>صيغة التفضيل.</li><li>كتابة التاريخ وقراءته.</li><li>استئجار سيارة بالهاتف.</li></ol>`},
  ...R172.theory,
  {h:'تمارين الكتاب',ref:'ص 36–37',html:
   bk(1,'ص 36','أكمل الجمل عن سيارات الإيجار، ثم اختر الأنسب.',['1 cheaper (مثال)','2 the fastest','3 bigger','4 more comfortable','5 the most expensive','6 better'])+
   bk(2,'ص 36','كيف تقول هذه التواريخ؟',['23/09/07: the twenty-third of September, two thousand and seven','15/12/04: the fifteenth of December, two thousand and four','8/3/05 (UK): the eighth of March, two thousand and five','8/3/05 (US): August the third, two thousand and five'])+
   bk(3,'ص 37','استمع وأجب، ثم أكمل أسئلة الموظف.',['a: 1 c (22nd May) · 2 c (three) · 3 b (saloon) · 4 a (Mercedes E240) · 5 b (Sweden 16 998 598)','b: 1 How many days do you want the car for · 2 And what kind of car would you like · 3 How about · 4 Can I have your'])+
   bk(4,'ص 37','مثّل: زبون يحجز فندقاً وتذكرة وسيارة عند وكلاء مختلفين.',null)+
   bk(5,'ص 37','أخبر الصف أي وكيل اخترت ولماذا.',['I chose … because it was cheaper than the others, and he was the most helpful. (نموذج)'])},
  {h:'الاستماع',ref:'ص 37',html:au('7B-3a','ص 37 — التمرين 3','حجز سيارة إيجار في المطار.')}
 ],
 stations:[
  {intro:true},
  ...R172.stations,
  {recap:['the cheapest, the biggest, the most comfortable, the best.','cheaper than (اثنان) ≠ the cheapest (الكل).','UK: day/month · US: month/day.','How many days do you want the car for? · What kind of car would you like?','I chose … because …']}
 ],
 lab:lab7b,
 examples:[
  {title:'مثال 1: التفضيل',ref:'ص 36',q:`<p>الكامري هي الأكثر راحة بين السيارات الثلاث. اكتب الجملة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('comfortable')} طويلة: ${e('the most comfortable')}.`},{t:`الخطوة 2: ${e('The Camry is the most comfortable')}`},{t:`الخطوة 3: ${e('The Camry is the most comfortable car.')}`,final:true}]},
  {title:'مثال 2: التاريخ',ref:'ص 36',q:`<p>اقرأ 21/02/26 بالطريقة البريطانية.</p>`,given:[],solve:()=>[{t:`الخطوة 1: اليوم 21 = ${e('twenty-first')}.`},{t:`الخطوة 2: الشهر 02 = ${e('February')}.`},{t:`الخطوة 3: ${e('the twenty-first of February, two thousand and twenty-six')}`,final:true}]},
  {title:'مثال 3: تبرير الاختيار',ref:'ص 37',q:`<p>اخترت شركة لأنها أرخص وموظفها الأكثر مساعدة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('I chose City Car Rental')}`},{t:`الخطوة 2: ${e('because it was cheaper than the others')}`},{t:`الخطوة 3: ${e('I chose City Car Rental because it was cheaper than the others, and the agent was the most helpful.')}`,final:true}]}
 ],
 quiz:[
  {q:'big → the ___',o:['biggest','bigest','most big','bigger'],c:0,e:'the biggest.'},
  {q:'good → the ___',o:['best','better','goodest','most good'],c:0,e:'the best.'},
  {q:'comfortable → the ___',o:['most comfortable','comfortablest','more comfortable','comfortabliest'],c:0,e:'the most.'},
  {q:'8/3/05 (US) =',o:['August 3rd','8th March','March 8th','3rd August'],c:0,e:'شهر/يوم.'},
  {q:'What kind of car would you ___?',o:['like','want to','liking','likes'],c:0,e:'would you like.'},
  {q:'The Galaxy is the most ___ (€150).',o:['expensive','cheap','cheapest','expensiver'],c:0,e:'the most expensive.'}
 ]
});
})(PLCBOOK);

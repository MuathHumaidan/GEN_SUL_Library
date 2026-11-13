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
B.lesson({
 id:'u7-l1',unit:7,order:1,pages:'34–35',
 title:'Part A: Making a booking — الحجز',
 summary:'حجز غرفة فندق ورحلة طيران بالهاتف: أسئلة موظف الحجز (When would you like to stay? Would you like a single or a double room? May I have your name? How do you want to pay?)، و want to / would like to، والتاريخ (May the 13th)، وتأكيد الحجز (Can I confirm your booking?) ورقم المرجع.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 34–35',html:`<p>تحجز غرفة أو رحلة، أو تأخذ حجزاً. ستتعلم:</p><ol><li>أسئلة موظف الحجز.</li><li>${e('want to / would like to')}</li><li>قول التاريخ وتأكيد الحجز.</li></ol>`},
  {h:'أسئلة موظف الحجز',ref:'ص 34',html:vt([['When would you like to stay?','متى تريد الإقامة؟'],['Would you like a single or a double room?','غرفة مفردة أم مزدوجة؟'],['May I have your name, please?','اسمك من فضلك'],['Could you spell that, please?','تهجّه'],['Can I have your telephone number?','رقم هاتفك'],['When do you want to fly?','متى تريد السفر؟'],['How do you want to pay? — By credit card.','كيف تدفع؟ — بالبطاقة'],['Can I confirm your booking?','أؤكد حجزك؟']],['English','المعنى'])},
  {h:'want to / would like to',ref:'ص 34',html:`${vt([["I'd like to book a flight.",'مهذبة أكثر'],['I want to fly on May the 13th.','مباشرة'],['Would you like a single room?','سؤال مهذب'],['When do you want to fly?','سؤال مباشر']],['English','الاستعمال'])}<p>بعد ${e('want to')} و ${e('would like to')} الفعل كما هو.</p>`},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">single</span> تذكرة ذهاب فقط أو غرفة لشخص، و <span class="en">return</span> تذكرة ذهاب وعودة، و <span class="en">double</span> غرفة لشخصين.'},
  {h:'التاريخ في الكلام',ref:'ص 35',html:`${eb(['On May the 13th. / On the 13th of May.','From Thursday the 20th until the 22nd.'])}<p>نقرأ اليوم بالرقم الترتيبي: ${e('13th = thirteenth')}، ${e('22nd = twenty-second')}.</p>`},
  {h:'تمارين الكتاب',ref:'ص 34–35',html:
   bk(1,'ص 34','اكتب مع زميلك كل الأسئلة التي قد يسألها موظف الاستقبال.',['May I have your name, please? (مثال) · Can I have your telephone number? · How many nights? · When would you like to stay? · Single or double? (نماذج)'])+
   bk(2,'ص 34','رتّب الكلمات لتكوّن أسئلة الموظف، ثم استمع.',['1 When would you like to stay?','2 Would you like a single or a double room?','3 May I have your name, please?','4 Could you spell that, please?','5 Can I have your telephone number?'])+
   bk(3,'ص 35','استمع وأكمل نموذج الحجز ثم الحوار.',['a: Name Alona Gimenez · From Madrid · To Buenos Aires · Date 13 May · Time 12.00 (midday) · Flight no. IB 6845',"b: I'd like to · When do you want to fly · Can I have your name · Could you spell your surname · How do you want to pay · Can I confirm your booking"])+
   bk(4,'ص 35','نشاط ثنائي: خذ حجز فندق، واحجز تذكرة طيران.',null,'معلومات الطالب أ في ص 80 من الكتاب.')},
  {h:'الاستماع',ref:'ص 34–35',html:au('7A-2b','ص 34 — التمرين 2b','حجز غرفة فندق.')+au('7A-3a','ص 35 — التمرين 3','حجز تذكرة طيران.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'أسئلة الحجز',title:'أسئلة موظف الحجز',q:'ماذا يسألك موظف الفندق؟',ref:'ص 34',
   art:art(`<rect x="60" y="30" width="240" height="230" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,58,'Booking form',{fs:15,w:700})}${[['Name','May I have your name, please?'],['Tel','Can I have your telephone number?'],['No. of nights','When would you like to stay?'],['Room','Would you like a single or a double?'],['Payment','How do you want to pay?']].map((x,i)=>`<g data-tip="${x[1]}"><text x="80" y="${96+i*36}" font-size="13" font-weight="700" fill="${C.ink}" direction="ltr">${x[0]}: ..............</text></g>`).join('')}`,'نموذج الحجز'),
   cap:'نموذج حجز. مرّر المؤشر على كل حقل لترى سؤاله.',side:[{tip:`${e('May I')} و ${e('Could you')} أكثر تهذيباً.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'When ___ you like to stay?',o:['would','do'],a:0},{s:'___ I have your name, please?',o:['May','Would'],a:0},{s:'Would you like a single ___ a double room?',o:['or','and'],a:0},{s:'How do you want to ___?',o:['pay','paying'],a:0}]}),title:'مختبر مصغّر: الأسئلة'}]},
  {st:2,short:'want to · would like to',title:'الرغبة والتاريخ',q:'كيف تقول إنك تريد السفر يوم 13 مايو؟',ref:'ص 35',
   art:art(`<g data-tip="I'd like to + الفعل"><rect x="20" y="60" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,91,"I'd like to book a flight.",{fs:15,w:700})}</g>
    <g data-tip="I want to + الفعل"><rect x="20" y="130" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,161,'I want to fly on May the 13th.',{fs:15,w:700})}</g>
    <g data-tip="13th = thirteenth"><rect x="90" y="200" width="180" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,228,'13th = thirteenth',{fs:14,w:700})}</g>`,'want would'),
   cap:'الرغبة والتاريخ. مرّر المؤشر على كل سطر.',side:[{tip:`${e('1st first, 2nd second, 3rd third')} ثم ${e('th')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"I'd like ___ book a room.",o:['to','for'],a:0},{s:'I want to fly on the ___ of May. (22)',o:['twenty-second','twenty-two'],a:0},{s:'When do you want ___ fly?',o:['to','for'],a:0}]}),title:'مختبر مصغّر: الرغبة'}]},
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
B.lesson({
 id:'u7-l2',unit:7,order:2,pages:'36–37',
 title:'Part B: Choosing a service — اختيار خدمة',
 summary:'صيغة التفضيل (the cheapest، the biggest، the most comfortable، the best) مع المقارنة، واختيار سيارة إيجار، وكتابة التاريخ وقراءته بالطريقتين البريطانية والأمريكية، واستئجار سيارة بالهاتف، وتعبئة نموذج حجز، وتبرير الاختيار (because it was cheaper / the most helpful).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 36–37',html:`<p>تختار الخدمة الأنسب وتشرح السبب. ستتعلم:</p><ol><li>صيغة التفضيل.</li><li>كتابة التاريخ وقراءته.</li><li>استئجار سيارة بالهاتف.</li></ol>`},
  {h:'المقارنة والتفضيل',ref:'ص 36',html:`${vt(SUP,['الصفة','المقارنة (من اثنين)','التفضيل (من ثلاثة فأكثر)'])}${eb(['The Picanto is cheaper than the Camry.','The Picanto is the cheapest car.','The Camry is the most comfortable.'])}`},
  {note:'<b>توضيح للمتدرب:</b> مع التفضيل نضع <span class="en">the</span> دائماً: <span class="en">the biggest</span>، <span class="en">the best</span>.'},
  {h:'التاريخ',ref:'ص 36',html:`${vt([['23/09/07','the twenty-third of September, two thousand and seven','UK'],['8/3/05 (UK)','the eighth of March, two thousand and five','يوم/شهر'],['8/3/05 (US)','August the third, two thousand and five','شهر/يوم']],['نكتب','نقول','النظام'])}`},
  {h:'استئجار سيارة',ref:'ص 37',html:dl([['Agent','City Car Rental. Can I help you?'],['Customer',"I'd like to rent a car, please."],['Agent','How many days do you want the car for?'],['Customer','Three days.'],['Agent','And what kind of car would you like?'],['Customer','A saloon, please.'],['Agent','How about a Toyota Camry? It’s 220 riyals a day.'],['Customer','That sounds fine.']])},
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
  {st:1,short:'التفضيل',title:'the cheapest · the most comfortable',q:'أي سيارة أرخص من الثلاث؟',ref:'ص 36',
   art:art(`${CARS.map((c,i)=>`<g data-tip="${c.n}: ${c.t}, SAR ${c.p}/day"><rect x="${20+i*112}" y="${230-c.p/2}" width="96" height="${c.p/2}" rx="6" fill="${[C.yel,C.blue,C.red][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(68+i*112,250,c.n.split(' ')[1],{fs:12,w:700})}${TL(68+i*112,222-c.p/2,'SAR '+c.p,{fs:12,w:700})}</g>`).join('')}`,'أسعار السيارات'),
   cap:'أسعار يومية توضيحية. مرّر المؤشر على كل عمود.',side:[{tip:`${e('the cheapest')} = الأرخص بين الكل.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The Picanto is ___ car.',o:['the cheapest','cheaper'],a:0},{s:'The H-1 is ___ expensive than the Camry.',o:['more','most'],a:0},{s:'The Camry is ___ comfortable.',o:['the most','the more'],a:0},{s:'This is ___ service in town.',o:['the best','the better'],a:0}]}),title:'مختبر مصغّر: التفضيل'}]},
  {st:2,short:'التاريخ',title:'كتابة التاريخ وقراءته',q:'ماذا يعني 8/3/05 في أمريكا؟',ref:'ص 36',
   art:art(`<g data-tip="البريطاني: اليوم ثم الشهر"><rect x="20" y="60" width="150" height="120" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(95,95,'UK',{fs:18,w:700})}${TL(95,130,'8/3/05',{fs:16,w:700})}${TL(95,158,'8 March',{fs:14})}</g>
    <g data-tip="الأمريكي: الشهر ثم اليوم"><rect x="190" y="60" width="150" height="120" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(265,95,'US',{fs:18,w:700})}${TL(265,130,'8/3/05',{fs:16,w:700})}${TL(265,158,'August 3',{fs:14})}</g>`,'UK US'),
   cap:'التاريخ نفسه بنظامين. مرّر المؤشر على كل منهما.',side:[{tip:`لتجنّب الخطأ اكتب الشهر بالحروف: ${e('8 March 2005')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'كيف تقرأ؟',cases:[{q:'15/12/04 (UK)',opts:[['the fifteenth of December',1],['the twelfth of fifteen',0]]},{q:'5/6/24 (US)',opts:[['May the sixth',1],['the fifth of June',0]]}]}),title:'مختبر مصغّر: التاريخ'}]},
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

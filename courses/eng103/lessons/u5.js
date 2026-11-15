/* الوحدة 5 — Descriptions: 1 Uses (ص 36–37) · 2 Appearance (ص 38–39) · 3 Definitions (ص 40–41)
   الشرح والأمثلة والمختبرات من إعدادنا؛ تمارين الكتاب تفاعلياً بجملها وصورها في bxd5.js. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 1 Uses ========== */
const DEV={
 wrench:{n:'X-beam wrench',ing:'loosening tight and rusty old bolts',inf:'loosen tight and rusty old bolts',act:'a lever',d:'tool',
  svg:`<path d="M90 230 L270 90" stroke="${C.ink}" stroke-width="16" stroke-linecap="round"/><path d="M110 110 L250 210" stroke="${C.blue}" stroke-width="16" stroke-linecap="round"/><circle cx="90" cy="230" r="16" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/><circle cx="270" cy="90" r="16" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>`},
 start:{n:'Simple Start',ing:'restarting a car with a flat battery',inf:'restart your car in ten minutes',act:'a battery charger',d:'device',
  svg:`<rect x="110" y="100" width="140" height="110" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="3"/><rect x="135" y="125" width="90" height="60" rx="8" fill="${C.ink}"/><path d="M180 210 C180 250 240 250 250 270" stroke="${C.ink}" stroke-width="5" fill="none"/><rect x="242" y="262" width="26" height="14" rx="4" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>`},
 breacher:{n:'Sea Breacher',ing:'moving quickly over and under water',inf:'jump, dive and roll in the water',act:'a jetski and a fast submarine',d:'vehicle',
  svg:`<path d="M60 175 C110 120 230 115 300 165 C230 195 120 200 60 175 Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/><path d="M190 125 L215 80 L230 130" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/><path d="M60 230 Q100 215 140 230 T220 230 T300 230" stroke="${C.blue}" stroke-width="3" fill="none"/>`},
 loc8tor:{n:'Loc8tor',ing:'finding lost keys',inf:'find lost objects',act:'a direction finder',d:'device',
  svg:`<rect x="140" y="80" width="80" height="160" rx="22" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/><rect x="152" y="100" width="56" height="60" rx="6" fill="${C.grn}"/><path d="M180 150 L180 112 M170 122 L180 112 L190 122" stroke="${C.ink}" stroke-width="3" fill="none"/><circle cx="180" cy="200" r="14" fill="${C.mut}"/><path d="M250 120 q16 16 0 32 M262 108 q28 28 0 56" stroke="${C.red}" stroke-width="3" fill="none"/>`}
};
const FORM={what:'What does it do?',for:"What's it for?",used:"What's it used for?",to:'to + verb',act:'act as + noun'};
function lab1(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">صالة المخترعين</h3><p class="sub">مختبر من إعدادنا مبني على إعلانات التمرين 2 ص 36. اختر الجهاز، ثم اختر طريقة الحديث عن استعماله.</p><div id="d"></div><div id="b"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">السؤال والجواب</h3><div id="f"></div><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>بعد ${e('for')}: ما صيغة الفعل؟</li><li>بعد ${e('to')}: ما صيغة الفعل؟</li><li>بعد ${e('act as')}: فعل أم اسم؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k='wrench',f='for';
 const ans=x=>({what:[`What does the ${x.n} do?`,`It's a ${x.d} for ${x.ing}.`],for:[`What's the ${x.n} for?`,`It's for ${x.ing}.`],used:[`What's the ${x.n} used for?`,`It's used for ${x.ing}.`],to:[`What can you use it for?`,`You can use it to ${x.inf}.`],act:['What does it act as?',`It acts as ${x.act}.`]})[f];
 const sh=()=>{const x=DEV[k];$('#d').innerHTML=art(x.svg+TL(180,295,x.n,{fs:16,w:700}),x.n);
  $('#b').innerHTML=Object.keys(DEV).map(i=>`<button type="button" class="btn${i===k?' pri':''}" data-k="${i}" lang="en">${DEV[i].n}</button>`).join(' ');
  $('#f').innerHTML=Object.keys(FORM).map(i=>`<button type="button" class="btn${i===f?' pri':''}" data-f="${i}" lang="en">${FORM[i]}</button>`).join(' ');
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{k=b.dataset.k;sh()});el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=b.dataset.f;sh()});
  const [q,a]=ans(x);$('#o').innerHTML=`${eb([q,a])}<p class="sub">${f==='to'?'بعد to يأتي الفعل كما هو.':f==='act'?'بعد act as يأتي اسم.':'بعد for يأتي الفعل بـ ing.'}</p>`;if(B&&B.ltrU)try{B.ltrU(el)}catch(_){}};
 sh();
}
const USE={hammer:['this tool','hammering in nails','hammer in nails'],pump:['this machine','producing drinking water','produce drinking water'],charger:['this machine','charging batteries','charge batteries'],cutter:['this cutter','cutting paper and cloth','cut paper and cloth']};
const LAB5A={title:'for + ing أم to + الفعل؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الشيء، ثم الصيغة.',
 controls:[{k:'o',label:'الشيء',opts:Object.keys(USE).map(k=>[k,k])},{k:'s',label:'الصيغة',opts:[['for','for + ing'],['to','to + verb']]}],
 out:({o,s})=>{const [w,ing,inf]=USE[o];return s==='for'?{pieces:[[`It's used for`,'k','الاستعمال'],[ing,'x','الفعل بـ ing']],say:`It's used for ${ing}.`,why:`${e('for')} حرف جر، وبعده الفعل بـ ${e('ing')}.`}:{pieces:[[`You use ${w}`,'n','الشيء'],[`to ${inf}`,'k','to + الفعل كما هو']],say:`You use ${w} to ${inf}.`,why:`${e('to')} + الفعل كما هو يبين الغرض.`}}})};
const AG={calculate:['calculator','or','A calculator calculates sums.'],conduct:['conductor','or','Copper is a good conductor of electricity.'],contain:['container','er','Put the oil in a plastic container.'],generate:['generator','or','The generator produces electricity.'],receive:['receiver','er (احذف e)','The receiver gets the radio signal.'],stabilise:['stabiliser','er (احذف e)','The stabiliser keeps the voltage steady.'],transmit:['transmitter','er (ضاعف t)','The transmitter sends the signal.'],propel:['propeller','er (ضاعف l)','The propeller pushes the boat forwards.']};
const LAB5B={title:'اسم الفاعل -er / -or',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، وشاهد اسم الشيء الذي يقوم به.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(AG).map(k=>[k,k])}],
 out:({v})=>{const [n,r,x]=AG[v];return{pieces:[[v,'k','الفعل'],[n,'x','اسم الفاعل: '+r]],say:x,why:'اسم الفاعل يدل على الشخص أو الآلة التي تقوم بالفعل.'}}})};
const R1=N.rule({title:'الحديث عن استعمال الأشياء',ref:'ص 36–37',
 intro:`حين نشرح جهازاً لزميل أو زبون، نجيب عن سؤال: ماذا يفعل؟ ولماذا نستعمله؟ وفي الإنجليزية عدة طرق لذلك.`,
 parts:[
 {t:'for + ing و to + الفعل',short:"It's used for …",old:[1],q:'كيف تقول إن المفتاح يُستعمل لفك المسامير؟',ref:'ص 37',
  lead:`نسأل ${e("What's it for? / What's it used for?")} ونجيب بـ ${e('for')} + الفعل بـ ${e('ing')}، أو بـ ${e('to')} + الفعل كما هو.`,
  points:[`<b>المضارع البسيط:</b> ${e('What does the carburettor do? It mixes air and petrol.')}`,`<b>for + ing:</b> ${e("What's this tool for? It's for hammering in nails.")}`,`${e("What's this machine used for? It's used for producing drinking water.")}`,`<b>to + الفعل:</b> ${e('You use this machine to charge batteries.')} · ${e('This device is designed to find lost objects.')}`,`<b>act as + اسم:</b> ${e('The fan of a hovercraft acts as a propeller.')}`],
  grid:{head:['الصيغة','مثال'],rows:[['for + verb-ing',"It's for finding lost items."],['to + verb','You can use it to move under water.'],['act as + noun','It acts as a jetski.']]},
  pairs:[["It's for find lost items.","It's for finding lost items.",'بعد for الفعل بـ ing.'],['You use it to charging batteries.','You use it to charge batteries.','بعد to الفعل كما هو.'],['It acts as propel.','It acts as a propeller.','بعد act as اسم.']],labs:[LAB5A]},
 {t:'أسماء الفاعل -er / -or',short:'calculator · generator',old:[2],q:'ما اسم الآلة التي تولّد الكهرباء؟',ref:'ص 37',
  lead:`كثير من أسماء الأدوات والأشخاص تنتهي بـ ${e('-er')} أو ${e('-or')}، وتدل على من يقوم بالفعل: ${e('A calculator is a machine. It calculates sums.')}`,
  points:[`<b>ضاعف الحرف الأخير</b> بعد حرف علة قصير: ${e('propel → propeller · transmit → transmitter')}`,`<b>احذف e الأخيرة:</b> ${e('receive → receiver · stabilise → stabiliser')}`,`${e('-or')}: ${e('calculator · conductor · generator')}`],
  pairs:[['receiveer','receiver','احذف e.'],['transmiter','transmitter','ضاعف t.']],labs:[LAB5B]}
 ]});
B.lesson({
 id:'u5-l1',unit:5,order:1,pages:'36–37',
 title:'1 Uses — الاستعمالات',
 summary:'أجهزة مبتكرة (X-beam wrench, Simple Start, Sea Breacher, Loc8tor) وكيف نتحدث عن استعمالها: What\'s it for? It\'s for + ing، و used for، و to + الفعل، و act as + اسم، وأسماء الفاعل بـ -er / -or.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 36–37',html:`<p>تقرأ إعلانات عن أجهزة مفيدة وتستمع إلى مخترعين. ستتعلم:</p><ol><li>السؤال عن الاستعمال والإجابة عنه.</li><li>${e('for + ing')} و ${e('to + verb')} و ${e('act as')}.</li><li>أسماء الفاعل: ${e('calculator, generator, transmitter')}.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u5-l1'](el,B)},
  ...R1.theory,
  {h:'تمارين الكتاب',ref:'ص 36–37',html:
   bk(1,'ص 36','فكّر في أدوات وأجهزة تستعملها، وناقش مع زميلك فائدتها.',null)+
   bk(2,'ص 36','اقرأ الإعلانات وطابق الأجهزة بأوصافها.',['A 2 (Simple Start)','B 4 (Loc8tor)','C 1 (X-beam wrench)','D 3 (Sea Breacher)'])+
   bk(3,'ص 36','ناقش الأجهزة مع زميلك: ما رأيك فيها؟ هل تفيدك؟',null)+
   bk(4,'ص 36','استمع وحدّد الاختراعات.',['a) 4','b) 2','c) 3'])+
   bk(5,'ص 36','استمع مرة أخرى وأكمل الحوارات.',["1 It's for finding lost items.","2 It's used for charging a flat battery from inside the car.",'3 You can use it to move quickly over and under water.'])+
   bk(6,'ص 37','اسأل زميلك وأجبه عن استعمالات الأجهزة في 2.',null)+
   bk(7,'ص 37','ما استعمال هذه الأجهزة في رأيك؟',['1 a rotary cutter: for cutting paper and cloth','2 a waterproof music player: for listening to music while swimming','3 a wind meter: for measuring wind speed','4 a compass: for showing direction in a car or boat','5 an adjustable wrench: for turning nuts and bolts of different sizes'],'إجابات نموذجية؛ الكتاب لا يعطي إجابة.')+
   bk(8,'ص 37','اكتب اسم الفاعل لكل فعل.',['calculator','conductor','container','generator','receiver','stabiliser','transmitter'])+
   bk(9,'ص 37','املأ الفراغات بأسماء من 8.',['1 calculator','2 conductor','3 generator','4 transmitter · receiver (بأي ترتيب)'])+
   bk(10,'ص 37','في مجموعات: اقترحوا استعمالات غير عادية لعلبة أو حزام أو طوبة أو إطار أو أنبوب ماء.',null)},
  {h:'الاستماع',ref:'ص 36',html:au('13','ص 36 — التمرينان 4 و 5','مخترعون يتحدثون عن اختراعاتهم.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u5-l1'](el,B),title:'شرح مرئي'}]},
  ...R1.stations,
  {recap:["What's it for? — It's for finding lost items.","What's it used for? — It's used for charging batteries.",'You can use it to move under water.','It acts as a jetski.','calculator · generator · transmitter · receiver']}
 ],
 lab:lab1,
 examples:[
  {title:'مثال 1: for + ing',ref:'ص 37',q:`<p>أجب: ${e("What's this pump for?")} (يرفع الماء إلى الخزان)</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ ${e("It's for")}.`},{t:`الخطوة 2: الفعل ${e('lift')} ← ${e('lifting')}.`},{t:`الخطوة 3: ${e("It's for lifting water to the tank.")}`,final:true}]},
  {title:'مثال 2: to + الفعل',ref:'ص 37',q:`<p>اكتبها بـ ${e('to')}: ${e("It's used for measuring wind speed.")}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('You use it')}.`},{t:`الخطوة 2: ${e('measuring')} ← ${e('to measure')}.`},{t:`الخطوة 3: ${e('You use it to measure wind speed.')}`,final:true}]},
  {title:'مثال 3: اسم الفاعل',ref:'ص 37',q:`<p>ما اسم الجهاز الذي ${e('transmits')} الإشارات؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('transmit')} ينتهي بحرف علة قصير + t.`},{t:'الخطوة 2: نضاعف t ونضيف er.'},{t:`الخطوة 3: ${e('a transmitter')}`,final:true}]}
 ],
 quiz:[
  {q:"What's this tool for? — It's for ___ nails.",o:['hammering in','hammer in','to hammer','hammered'],c:0,e:'for + ing.'},
  {q:'You use this machine ___ batteries.',o:['to charge','for charge','charging','to charging'],c:0,e:'to + الفعل.'},
  {q:'The fan of a hovercraft acts as ___.',o:['a propeller','propel','to propel','propelling'],c:0,e:'act as + اسم.'},
  {q:'receive →',o:['receiver','receiveer','receivor','receiveor'],c:0,e:'احذف e.'},
  {q:'transmit →',o:['transmitter','transmiter','transmittor','transmitor'],c:0,e:'ضاعف t.'},
  {q:'Your body can act as a ___ of electricity.',o:['conductor','container','calculator','stabiliser'],c:0,e:'conductor.'}
 ]
});

/* ========== 2 Appearance ========== */
const SH={
 circle:{a:'circular',d:`<circle cx="180" cy="160" r="80" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/>`,ex:'a circular screen'},
 square:{a:'square',d:`<rect x="105" y="85" width="150" height="150" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/>`,ex:'a square window'},
 rectangle:{a:'rectangular',d:`<rect x="80" y="110" width="200" height="100" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/>`,ex:'a rectangular screen'},
 triangle:{a:'triangular',d:`<path d="M180 70 L275 240 L85 240 Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/>`,ex:'a triangular sail'},
 semicircle:{a:'semicircular',d:`<path d="M90 210 A90 90 0 0 1 270 210 Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/>`,ex:'a semicircular protractor'},
 cube:{a:'cubic',d:`<path d="M120 130 L180 100 L240 130 L240 210 L180 240 L120 210 Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/><path d="M120 130 L180 160 L240 130 M180 160 L180 240" stroke="${C.ink}" stroke-width="3" fill="none"/>`,ex:'a cubic amplifier'},
 cylinder:{a:'cylindrical',d:`<path d="M120 100 L120 220 A60 18 0 0 0 240 220 L240 100" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/><ellipse cx="180" cy="100" rx="60" ry="18" fill="#9cc0de" stroke="${C.ink}" stroke-width="3"/>`,ex:'a cylindrical tin'},
 cone:{a:'conical',d:`<path d="M180 70 L250 225 A70 20 0 0 1 110 225 Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/>`,ex:'a conical capsule'},
 sphere:{a:'spherical',d:`<circle cx="180" cy="160" r="80" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/><ellipse cx="150" cy="130" rx="22" ry="14" fill="#cfe0ef"/>`,ex:'a spherical structure'},
 hemisphere:{a:'hemispherical',d:`<path d="M95 200 A85 85 0 0 1 265 200 Z" fill="${C.blue}" stroke="${C.ink}" stroke-width="3"/><ellipse cx="180" cy="200" rx="85" ry="16" fill="#9cc0de" stroke="${C.ink}" stroke-width="3"/>`,ex:'a hemispherical dome'}
};
const an=w=>/^[aeiou]/.test(w)?'an':'a';
function lab2(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">مصنع الأشكال</h3><p class="sub">مختبر من إعدادنا مبني على التمرينين 5 و 6 ص 39. اختر الشكل، وشاهد الاسم والصفة وطرق الوصف.</p><div id="d"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الوصف</h3><div id="b"></div><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي الأشكال صفتها مثل اسمها؟</li><li>أي الأشكال ثنائية الأبعاد، وأيها مجسّمة؟</li><li>صف شيئاً في صفّك بإحدى الطرق الأربع.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k='circle';
 const sh=()=>{const x=SH[k];$('#d').innerHTML=art(x.d+TL(180,290,k+' → '+x.a,{fs:15,w:700}),k);
  $('#b').innerHTML=Object.keys(SH).map(i=>`<button type="button" class="btn${i===k?' pri':''}" data-k="${i}" lang="en">${i}</button>`).join(' ');
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{k=b.dataset.k;sh()});
  $('#o').innerHTML=`<p>الاسم: ${e(k)} · الصفة: ${e(x.a)}</p>${eb([`It's in the shape of ${an(k)} ${k}.`,`It's shaped like ${an(k)} ${k}.`,`It's ${an(x.a)} ${x.ex.replace(/^an? /,'')}.`])}`;if(B&&B.ltrU)try{B.ltrU(el)}catch(_){}};
 sh();
}
const LK={sail:['The skyscraper','is shaped like','a giant sail.'],tv:['The building','looks like','a TV transmitter.'],L:['The plan','is in the shape of','an L.'],dome:['The roof','is shaped like','a dome.'],ship:['The museum','looks like','a huge ship.']};
const LAB5C={title:'looks like / is shaped like / in the shape of',w:(el,B)=>N.labB(el,B,{intro:'اختر المبنى.',
 controls:[{k:'b',label:'الوصف',opts:Object.keys(LK).map(k=>[k,k])}],
 out:({b})=>{const [s,v,o]=LK[b];return{pieces:[[s,'n','الشيء'],[v,'k','عبارة الوصف'],[o,'x','الشكل']],say:`${s} ${v} ${o}`,why:`${e('looks like / is shaped like / is in the shape of')} + اسم.`}}})};
const SA={L:['The plan is in the shape of an L.',"It's an L-shaped plan."],dome:['The building is shaped like a dome.',"It's a dome-shaped building."],circle:['The screen is in the shape of a circle.',"It's a circular screen."],H:['The building is in the shape of an H.',"It's an H-shaped building."],egg:['The alarm pod is shaped like an egg.',"It's an egg-shaped device."]};
const LAB5D={title:'الصفة -shaped',w:(el,B)=>N.labB(el,B,{intro:'اختر الشكل، وحوّل الجملة إلى صفة قبل الاسم.',
 controls:[{k:'s',label:'الشكل',opts:Object.keys(SA).map(k=>[k,k])}],
 out:({s})=>{const [a,b]=SA[s];return{pieces:[[a,'x','الجملة'],[b,'k','الصفة قبل الاسم']],say:b,why:`نضيف ${e('-shaped')} بشرطة، أو نستعمل الصفة: ${e('circle → circular')}.`}}})};
const R2=N.rule({title:'وصف الشكل والمظهر',ref:'ص 38–39',
 intro:`نصف المباني والأدوات بتشبيهها بأشياء نعرفها، أو بذكر شكلها الهندسي.`,
 parts:[
 {t:'looks like و is shaped like و in the shape of',short:'It looks like a TV transmitter',old:[1],q:'كيف تصف مبنى يشبه شراعاً؟',ref:'ص 38',
  lead:`كلها تأتي بعدها أسماء: ${e('looks like + a/an + noun')}.`,
  points:[`${e('The building looks like a TV transmitter.')}`,`${e('The building is shaped like a dome.')} ← ${e("It's a dome-shaped building.")}`,`${e('The plan is in the shape of an L.')} ← ${e("It's an L-shaped plan.")}`,`${e('The screen is in the shape of a circle.')} ← ${e("It's a circular screen.")}`],
  pairs:[['It looks like sail.','It looks like a sail.','نحتاج a.'],["It's a L-shaped plan.","It's an L-shaped plan.",'L تُنطق بصوت علة: an.']],labs:[LAB5C,LAB5D]},
 {t:'أسماء الأشكال وصفاتها',short:'cylinder → cylindrical',old:[2],q:'ما صفة cylinder؟',ref:'ص 39',
  lead:`لكل شكل اسم وصفة. الاسم بعد ${e('a / the')}، والصفة قبل اسم آخر.`,
  grid:{head:['الاسم','الصفة'],rows:[['circle','circular'],['semicircle','semicircular'],['triangle','triangular'],['rectangle','rectangular'],['square','square'],['cube','cubic'],['cylinder','cylindrical'],['cone','conical'],['sphere','spherical'],['hemisphere','hemispherical']]},
  points:[`<b>النبر:</b> ${e('TRIangle → triANgular · RECtangle → recTANgular · CYLinder → cyLINdrical')}`],
  pairs:[['TVs have rectangle screens.','TVs have rectangular screens.','قبل الاسم صفة.'],['A food tin is a metal cylindrical.','A food tin is a metal cylinder.','بعد a اسم.']]}
 ]});
B.lesson({
 id:'u5-l2',unit:5,order:2,pages:'38–39',
 title:'2 Appearance — المظهر',
 summary:'مبانٍ مشهورة حول العالم ووصف شكلها: looks like و is shaped like و in the shape of والصفة -shaped، وأسماء الأشكال وصفاتها (circle → circular, cylinder → cylindrical) ونبرها، وأسماء قطع بشكل الحروف (U-bolt, G-clamp)، ولعبة العشرين سؤالاً.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 38–39',html:`<p>تتعرف على مبانٍ مشهورة وتصف شكلها. ستتعلم:</p><ol><li>${e('looks like / is shaped like / in the shape of')}.</li><li>أسماء الأشكال وصفاتها.</li><li>أسماء قطع على شكل حروف: ${e('U-bolt, T-junction, G-clamp')}.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u5-l2'](el,B)},
  ...R2.theory,
  {h:'تمارين الكتاب',ref:'ص 38–39',html:
   bk(1,'ص 38','هل تعرف أين هذه المباني؟',['A Plaza of the Three Powers, Brasília','B Guggenheim Museum, Bilbao','C CCTV Tower, Beijing','D Oriental Pearl Tower, Shanghai','E Shanghai World Financial Center','F Burj Al Arab, Dubai'],'من صفحة الإجابات في الكتاب ص 115.')+
   bk(2,'ص 38','اختر مبنى وصفه لزميلك دون أن تذكر اسمه. هل يعرفه؟',null)+
   bk(3,'ص 38','طابق الأوصاف بالمباني.',['1 B','2 D','3 E','4 F','5 A','6 C'])+
   bk(4,'ص 38','صف المباني في الصور وأنت تغطي النصوص.',null)+
   bk(5,'ص 39','طابق الأسماء بالأشكال.',['1 cylinder','2 rectangle','3 triangle','4 cube','5 cone','6 semicircle','7 sphere','8 square','9 circle','10 hemisphere'])+
   bk(6,'ص 39','اكتب صفة لكل اسم.',['circular · conical · cubic · cylindrical · hemispherical · rectangular · semicircular · spherical · square · triangular'])+
   bk(7,'ص 39','ضع خطاً تحت المقطع المنبور.',['1 TRIangle','2 recTANgular','3 CIRcular','4 CYLinder','5 triANgular','6 CIRcle','7 RECtangle','8 cyLINdrical'])+
   bk(8,'ص 39','استمع وتحقق من إجاباتك في 7.',null)+
   bk(9,'ص 39','ضع خطاً تحت الكلمة الصحيحة.',['1 triangular','2 cylinder','3 rectangular','4 circular','5 cubic','6 sphere','7 cone','8 semi-circular'])+
   bk(10,'ص 39','طابق أسماء القطع بصورها.',['1 A-frame','2 U-bend','3 V-engine','4 T-junction','5 E-clip','6 G-clip','7 G-clamp','8 U-bolt'])+
   bk(11,'ص 39','العب «عشرون سؤالاً» مع زميلك.',null)},
  {h:'الاستماع',ref:'ص 39',html:au('14','ص 39 — التمرين 8','نطق أسماء الأشكال وصفاتها.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u5-l2'](el,B),title:'شرح مرئي'}]},
  ...R2.stations,
  {recap:['The building looks like a TV transmitter.','It is shaped like a dome. — a dome-shaped building','It is in the shape of an L. — an L-shaped plan','circle → circular · cylinder → cylindrical · cone → conical','TRIangle · triANgular']}
 ],
 lab:lab2,
 examples:[
  {title:'مثال 1: الصفة',ref:'ص 39',q:`<p>أكمل: ${e('A football is ___ . (sphere)')}</p>`,given:[],solve:()=>[{t:'الخطوة 1: بعد is بلا اسم بعدها نحتاج صفة.'},{t:`الخطوة 2: ${e('sphere → spherical')}`},{t:`الخطوة 3: ${e('A football is spherical.')}`,final:true}]},
  {title:'مثال 2: -shaped',ref:'ص 38',q:`<p>حوّل: ${e('The building is in the shape of a U.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('U')} + ${e('-shaped')}.`},{t:`الخطوة 2: ${e('U')} تُنطق «يو» فنقول ${e('a')}.`},{t:`الخطوة 3: ${e("It's a U-shaped building.")}`,final:true}]},
  {title:'مثال 3: الوصف',ref:'ص 38',q:`<p>صف خزان ماء دائرياً فوق ثلاثة أرجل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الشكل: ${e('It is shaped like a ball.')}`},{t:`الخطوة 2: الأرجل: ${e('It has three legs, like a tripod.')}`},{t:`الخطوة 3: ${e('The tank is spherical. It has three legs, like a tripod.')}`,final:true}]}
 ],
 quiz:[
  {q:'The skyscraper is shaped ___ a giant sail.',o:['like','as','of','for'],c:0,e:'shaped like.'},
  {q:'The plan is in the shape ___ an L.',o:['of','like','for','to'],c:0,e:'in the shape of.'},
  {q:'TVs normally have ___ screens.',o:['rectangular','rectangle','rectangles','rectangled'],c:0,e:'صفة قبل الاسم.'},
  {q:'cone →',o:['conical','conic shaped','coneal','conal'],c:0,e:'conical.'},
  {q:'Which word has the stress on the 2nd syllable?',o:['triangular','triangle','circle','rectangle'],c:0,e:'triANgular.'},
  {q:'A tool for holding wood tightly, shaped like a G:',o:['G-clamp','U-bend','T-junction','A-frame'],c:0,e:'G-clamp.'}
 ]
});

/* ========== 3 Definitions ========== */
const DF={
 solar:['A solar panel','is','a device','which','converts sunlight into electricity.'],
 hover:['The hovercraft','is','a vehicle','that','carries people over land and sea.'],
 lab:['A lab assistant','is','a technician','who','maintains the equipment in a laboratory.'],
 torque:['A torque wrench','is','a tool','which','tightens nuts and bolts.'],
 gps:['GPS','is','a satellite system','that','gives the location of objects on the ground.'],
 amm:['An ammeter','is','an instrument','which','measures electric current.'],
 inv:['Inventors','are','people','who','create new devices.']};
const PERSON=['lab','inv'];
function lab3(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">آلة التعريفات</h3><p class="sub">مختبر من إعدادنا مبني على جدول اللغة ص 40 والتمرينين 3 و 4 ص 41. اختر الكلمة، ثم اختر which أو who أو that.</p><div id="d"></div><div id="b"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">التعريف</h3><div id="p"></div><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>متى يكون who خطأ؟</li><li>هل يصلح that مع الأشخاص والأشياء؟</li><li>اكتب تعريفاً لجهاز في بيتك بالأجزاء الخمسة.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k='solar',p='which';
 const sh=()=>{const x=DF[k];const per=PERSON.includes(k);
  const ok=p==='that'||(p==='who')===per;
  const box=(i,t,col)=>`<rect x="${12+i*68}" y="120" width="64" height="70" rx="10" fill="${col}" stroke="${C.ink}" stroke-width="2"/>${TL(44+i*68,160,t,{fs:12,w:700})}`;
  $('#d').innerHTML=art(box(0,'Word',C.paper)+box(1,'be',C.paper)+box(2,'Type',C.yel)+box(3,p,ok?'#d9eee3':'#f4cfc6')+box(4,'Function','#cfe6ea'),'definition');
  $('#b').innerHTML=Object.keys(DF).map(i=>`<button type="button" class="btn${i===k?' pri':''}" data-k="${i}" lang="en">${DF[i][0]}</button>`).join(' ');
  $('#p').innerHTML=['which','who','that'].map(i=>`<button type="button" class="btn${i===p?' pri':''}" data-p="${i}" lang="en">${i}</button>`).join(' ');
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{k=b.dataset.k;sh()});el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{p=b.dataset.p;sh()});
  $('#o').innerHTML=(ok?eb([`${x[0]} ${x[1]} ${x[2]} ${p} ${x[4]}`]):`<div class="lb-bad">${p==='who'?`${e('who')} للأشخاص فقط، و ${e(x[2])} ليس شخصاً.`:`${e(x[2])} أشخاص، فنستعمل ${e('who')} أو ${e('that')}.`}</div>`)+`<p class="sub">${per?'شخص: who أو that.':'شيء: which أو that.'}</p>`;if(B&&B.ltrU)try{B.ltrU(el)}catch(_){}};
 sh();
}
const TY={solar:['A solar panel','device'],hover:['A hovercraft','vehicle'],lab:['A lab assistant','technician'],torque:['A torque wrench','tool'],gps:['GPS','system'],amm:['An ammeter','instrument']};
const LAB5E={title:'الاسم العام (type)',w:(el,B)=>N.labB(el,B,{intro:'اختر الشيء، وشاهد نوعه.',
 controls:[{k:'t',label:'الشيء',opts:Object.keys(TY).map(k=>[k,TY[k][0]])}],
 out:({t})=>{const [w,ty]=TY[t];return{pieces:[[w,'n','الكلمة'],['is '+an(ty),'k','be'],[ty,'x','النوع']],say:`${w} is ${an(ty)} ${ty}.`,why:`${e('device')} جهاز، ${e('tool')} أداة يدوية، ${e('instrument')} أداة قياس، ${e('vehicle')} مركبة، ${e('system')} نظام، ${e('technician')} شخص فني.`}}})};
const R3=N.rule({title:'التعريف بجملة واحدة',ref:'ص 40–41',
 intro:`حين نقدّم اختراعاً أو نشرح مصطلحاً، نعرّفه في جملة واحدة: ما هو؟ وماذا يفعل؟`,
 parts:[
 {t:'أجزاء التعريف',short:'Word + be + Type + which …',old:[1],q:'كيف تعرّف LifeGuard في جملة واحدة؟',ref:'ص 40',
  lead:`التعريف = الكلمة + ${e('is / are')} + النوع + ${e('which / who / that')} + الوظيفة.`,
  grid:{head:['Word + be','Type','Pronoun + Function'],rows:[['LifeGuard is','an alarm system','which can find an MOB.'],['MusicWorld is','a website','that downloads dance music.'],['Inventors are','people','who create new devices.']]},
  points:[`${e('which')} للأشياء، و ${e('who')} للأشخاص، و ${e('that')} يحل محل الاثنين.`,`لا فاصلة قبل ${e('which')} في التعريف؛ فهي تحدد أي شيء نقصد.`],
  pairs:[['Inventors are people which create new devices.','Inventors are people who create new devices.','للأشخاص who.'],['A solar panel is a device who converts sunlight.','A solar panel is a device which converts sunlight.','للأشياء which.']]},
 {t:'كلمات النوع',short:'device · tool · instrument',old:[2],q:'هل الأمّيتر أداة (tool) أم جهاز قياس (instrument)؟',ref:'ص 41',
  lead:`نختار اسماً عاماً مناسباً قبل ${e('which')}.`,
  rows:[['device','A solar panel is a device …'],['tool','A torque wrench is a tool …'],['instrument','An ammeter is an instrument …'],['vehicle','The hovercraft is a vehicle …'],['system','GPS is a satellite system …'],['technician','A lab assistant is a technician …']],head:['النوع','مثال'],labs:[LAB5E]}
 ]});
B.lesson({
 id:'u5-l3',unit:5,order:3,pages:'40–41',
 title:'3 Definitions — التعريفات',
 summary:'مخترعون يعرضون أفكارهم على برنامج تلفزيوني، وكتابة التعريف بجملة واحدة: الكلمة + is + النوع + which / who / that + الوظيفة، وكلمات النوع (device, tool, instrument, vehicle, system, technician)، ونظام إنذار السقوط من القارب (alarm pod, hydrophone, display).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 40–41',html:`<p>تستمع إلى مخترعين يقدّمون أفكارهم وتقرأ إعلاناً عن نظام إنذار. ستتعلم:</p><ol><li>التعريف بجملة واحدة بـ ${e('which / who / that')}.</li><li>كلمات النوع: ${e('device, tool, instrument')}.</li><li>شرح طريقة عمل نظام.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u5-l3'](el,B)},
  ...R3.theory,
  {h:'تمارين الكتاب',ref:'ص 40–41',html:
   bk(1,'ص 40','أي هذه الأفكار نجحت في البرنامج في رأيك؟',['الأفكار الأربع كلها نجحت (صفحة الإجابات في الكتاب ص 113).'])+
   bk(2,'ص 40','استمع وأكمل الجمل بـ which أو who أو that.',['1 which','2 that','3 who','4 which','5 that'],'كما في التسجيل؛ و that تصح مكان which، وتصح مكان who.')+
   bk(3,'ص 41','املأ الفراغ بأنسب اسم نوع.',['1 device','2 vehicle','3 technician','4 tool','5 system','6 instrument'])+
   bk(4,'ص 41','ادمج كل جملتين في 3 في تعريف واحد.',['2 The hovercraft is a vehicle which carries people over land and sea.','3 A lab assistant is a technician who maintains the equipment in a laboratory.','4 A torque wrench is a tool which tightens nuts and bolts.','5 GPS is a satellite system which gives the location of objects on the ground.','6 An ammeter is an instrument which measures electric current.'],'يصح that مكان which و who.')+
   bk(5,'ص 41','اقرأ الإعلان وأجب.',['1 a) the alarm pod b) the hydrophone c) the display','2 a) the hydrophone b) the alarm pod c) the display','3 No. The pins must be in constant contact with water for one second, so the pod is activated only when it is under water.','4 b) via the hydrophone','5 a) visible b) audible'])+
   bk(6,'ص 41','في مجموعات: فكّروا في اختراع، وعرّفوه بجملة واحدة، ثم اشرحوا كيف يعمل.',null)},
  {h:'الاستماع',ref:'ص 40',html:au('15','ص 40 — التمرين 2','مخترعون يقدمون اختراعاتهم.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u5-l3'](el,B),title:'شرح مرئي'}]},
  ...R3.stations,
  {recap:['Word + is + Type + which / who / that + Function','which → things · who → people · that → both','LifeGuard is an alarm system which can find an MOB.','device · tool · instrument · vehicle · system','visible = able to be seen · audible = able to be heard']}
 ],
 lab:lab3,
 examples:[
  {title:'مثال 1: تعريف شيء',ref:'ص 41',q:`<p>عرّف: ${e('A thermometer. It measures temperature.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: النوع: أداة قياس ← ${e('an instrument')}.`},{t:`الخطوة 2: شيء ← ${e('which')}.`},{t:`الخطوة 3: ${e('A thermometer is an instrument which measures temperature.')}`,final:true}]},
  {title:'مثال 2: تعريف شخص',ref:'ص 40',q:`<p>عرّف: ${e('An electrician. He installs and repairs wiring.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: النوع: ${e('a technician')}.`},{t:`الخطوة 2: شخص ← ${e('who')}.`},{t:`الخطوة 3: ${e('An electrician is a technician who installs and repairs wiring.')}`,final:true}]},
  {title:'مثال 3: اسم الجزء',ref:'ص 41',q:`<p>أي جزء في نظام الإنذار يعمل كجهاز إرسال؟</p>`,given:[],solve:()=>[{t:'الخطوة 1: من يرسل الإشارة تحت الماء؟'},{t:`الخطوة 2: ${e('The alarm pod transmits a digital-sonar signal.')}`},{t:`الخطوة 3: ${e('The alarm pod acts as the transmitter.')}`,final:true}]}
 ],
 quiz:[
  {q:'Inventors are people ___ create new devices.',o:['who','which','what','where'],c:0,e:'أشخاص.'},
  {q:'LifeGuard is an alarm system ___ can find an MOB.',o:['which','who','what','it'],c:0,e:'شيء.'},
  {q:'An ammeter is an ___. It measures electric current.',o:['instrument','vehicle','technician','system'],c:0,e:'أداة قياس.'},
  {q:'The hovercraft is a ___. It carries people over land and sea.',o:['vehicle','tool','instrument','technician'],c:0,e:'مركبة.'},
  {q:'that can replace …',o:['which or who','only which','only who','where'],c:0,e:'كلاهما.'},
  {q:'able to be heard =',o:['audible','visible','submerged','digital'],c:0,e:'audible.'}
 ]
});
})(PLCBOOK);

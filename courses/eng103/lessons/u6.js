/* الوحدة 6 — Procedures: 1 Safety (ص 42–43) · 2 Emergency (ص 44–45) · 3 Directions (ص 46–47) · Review Unit C (ص 48–51)
   الشرح والأمثلة والمختبرات من إعدادنا؛ تمارين الكتاب تفاعلياً بجملها وصورها في bxd6.js. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 1 Safety ========== */
const LB={
 fragile:{t:'FRAGILE',svg:`<path d="M150 90 L210 90 L200 150 Q180 175 160 150 Z" fill="${C.red}"/><path d="M180 165 L180 215 M155 220 L205 220" stroke="${C.red}" stroke-width="8"/><path d="M190 92 L180 115 L195 125" stroke="${C.paper}" stroke-width="4" fill="none"/>`,s:['This item','handle','handled','carefully','drop or throw','dropped or thrown','']},
 up:{t:'THIS WAY UP',svg:`<path d="M150 210 L150 110 M130 130 L150 100 L170 130 M210 210 L210 110 M190 130 L210 100 L230 130" stroke="${C.red}" stroke-width="10" fill="none"/><rect x="125" y="220" width="110" height="12" fill="${C.ink}"/>`,s:['This item','carry','carried','this way up','turn','turned',' upside down']},
 dry:{t:'KEEP DRY',svg:`<path d="M120 160 Q180 90 240 160 Z" fill="${C.red}"/><path d="M180 160 L180 215 Q180 228 168 222" stroke="${C.red}" stroke-width="6" fill="none"/>${[130,160,200,230].map(x=>`<path d="M${x} 85 l-5 12" stroke="${C.ink}" stroke-width="3"/>`).join('')}`,s:['This item','keep','kept','inside the warehouse','leave','left',' in the rain']},
 perish:{t:'PERISHABLE',svg:`<path d="M160 90 L200 90 L185 150 L200 210 L160 210 L175 150 Z" fill="${C.paper}" stroke="${C.ink}" stroke-width="4"/><path d="M168 200 L192 200 L180 175 Z" fill="${C.yel}"/>`,s:['This box','deliver','delivered','as soon as possible','leave','left',' for more than three days']},
 frozen:{t:'KEEP FROZEN',svg:`<ellipse cx="180" cy="160" rx="35" ry="55" fill="${C.ink}"/><ellipse cx="180" cy="170" rx="22" ry="40" fill="${C.paper}"/><circle cx="180" cy="110" r="22" fill="${C.ink}"/><path d="M196 110 L215 115 L196 120" fill="${C.yel}"/>`,s:['This box','freeze','frozen','','leave','left',' outside the freezer']}
};
const MOD={must:'must be',should:'should be',need:'needs to be',have:'has to be'};
function lab1(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">ملصقات المستودع</h3><p class="sub">مختبر من إعدادنا مبني على التمارين 3–6 ص 43. اختر الملصق، ثم الفعل المساعد، وشاهد التعليمة بالمبني للمجهول وبالمبني للمعلوم.</p><div id="d"></div><div id="b"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">التعليمة</h3><div id="m"></div><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ماذا يأتي بعد ${e('must / should')} في المبني للمجهول؟</li><li>لماذا ${e('needs to be')} مع ${e('This item')} وليس ${e('need to be')}؟</li><li>أيهما أقوى: ${e('must')} أم ${e('should')}؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k='fragile',m='must';
 const sh=()=>{const x=LB[k];const [S,v,pp,adv,nv,npp,nadv]=x.s;
  $('#d').innerHTML=art(`<rect x="100" y="60" width="160" height="200" rx="8" fill="#fff" stroke="${C.ink}" stroke-width="4"/>${x.svg}`+TL(180,252,x.t,{fs:14,w:700}),x.t);
  $('#b').innerHTML=Object.keys(LB).map(i=>`<button type="button" class="btn${i===k?' pri':''}" data-k="${i}" lang="en">${LB[i].t}</button>`).join(' ');
  $('#m').innerHTML=Object.keys(MOD).map(i=>`<button type="button" class="btn${i===m?' pri':''}" data-m="${i}" lang="en">${MOD[i]}</button>`).join(' ');
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{k=b.dataset.k;sh()});el.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=b.dataset.m;sh()});
  const ps=`${S} ${MOD[m]} ${pp}${adv?' '+adv:''}.`;const ng=`It must not be ${npp}${nadv}.`;
  const act={must:'You must',should:'You should',need:'You need to',have:'You have to'}[m];
  const as=`${act} ${v} ${S.toLowerCase()}${adv?' '+adv:''}.`,an=`You mustn't ${nv} it${nadv}.`;
  $('#o').innerHTML=`<p class="sub">المبني للمجهول (لغة الملصقات والقواعد):</p>${eb([ps,ng])}<p class="sub">المبني للمعلوم (نخاطب العامل):</p>${eb([as,an])}`;if(B&&B.ltrU)try{B.ltrU(el)}catch(_){}};
 sh();
}
const RULE={helm:['Helmets','wear','worn'],truck:['Hand trucks','overload','overloaded'],aisle:['Aisles','keep free','kept free'],cyl:['Gas cylinders','strap to hand trucks','strapped to hand trucks'],box:['Larger boxes','stack on higher shelves','stacked on higher shelves']};
const LAB6A={title:'الفعل المساعد + be + التصريف الثالث',w:(el,B)=>N.labB(el,B,{intro:'اختر الشيء، ثم الفعل المساعد.',
 controls:[{k:'r',label:'الشيء',opts:Object.keys(RULE).map(k=>[k,RULE[k][0]])},{k:'m',label:'الفعل المساعد',opts:[['must','must'],['mustnot','must not'],['should','should'],['shouldnot','should not'],['have','have to'],['need','need to']]}],
 out:({r,m})=>{const [s,v,pp]=RULE[r];const mm={must:'must',mustnot:'must not',should:'should',shouldnot:'should not',have:'have to',need:'need to'}[m];
  return{pieces:[[s,'n','الشيء'],[mm,'k','الفعل المساعد'],['be','q','be'],[pp,'x','التصريف الثالث']],say:`${s} ${mm} be ${pp}.`,why:`${e('must')} ضروري، و ${e('should')} نصيحة، و ${e('must not')} ممنوع. وبعدها دائماً ${e('be')} + التصريف الثالث.`}}})};
const R1=N.rule({title:'قواعد السلامة: الفعل المساعد + المبني للمجهول',ref:'ص 42–43',
 intro:`ملصقات السلامة وقواعد المستودع تكتب غالباً بالمبني للمجهول، لأن المهم هو الشيء (الصناديق، الشاحنات) وليس من يفعل.`,
 parts:[
 {t:'must / should / have to / need to + be + التصريف الثالث',short:'Helmets must be worn',old:[1],q:'كيف تكتب قاعدة «يجب لبس الخوذة»؟',ref:'ص 42',
  lead:`القاعدة بالمبني للمجهول: الشيء + الفعل المساعد + ${e('be')} + التصريف الثالث.`,
  points:[`${e('Helmets must / should / have to / need to be worn here.')}`,`<b>النفي:</b> ${e('Helmets must not / should not be taken off.')}`,`${e('must')}: ضروري، و ${e('should')}: ننصح به.`,`مع المفرد: ${e('This item needs to be handled carefully.')} · ${e('This box has to be frozen.')}`],
  grid:{head:['الشيء','الفعل المساعد','be + التصريف الثالث'],rows:[['Hand trucks','must not','be overloaded.'],['Aisles','have to','be kept free.'],['Boxes','need to','be pushed in.']]},
  pairs:[['Helmets must worn.','Helmets must be worn.','نحتاج be.'],['Boxes should be stack.','Boxes should be stacked.','التصريف الثالث.'],['This item need to be handled.','This item needs to be handled.','مفرد: needs.']],labs:[LAB6A]},
 {t:'من المجهول إلى المعلوم',short:'You need to handle it carefully',old:[2],q:'كيف تقول القاعدة نفسها لعامل أمامك؟',ref:'ص 43',
  lead:`حين نخاطب شخصاً نستعمل ${e('You')} + الفعل المساعد + الفعل كما هو.`,
  rows:[['This item needs to be handled carefully.','You need to handle this item carefully.'],["It must not be dropped.","You mustn't drop it."],['This box has to be frozen.','You have to freeze this box.']],head:['المجهول','المعلوم'],
  pairs:[['You must to drop it.',"You mustn't drop it.",'لا to بعد must.']]}
 ]});
B.lesson({
 id:'u6-l1',unit:6,order:1,pages:'42–43',
 title:'1 Safety — السلامة',
 summary:'مخاطر المستودع وقواعد السلامة (hand truck, pallet, aisle, forklift, ramp)، والفعل المساعد مع المبني للمجهول (must be worn, should not be stacked)، وملصقات الشحن (Fragile, This way up, Keep dry, Perishable, Keep frozen)، والتحويل إلى المعلوم، وترتيب إجراءات الطوارئ الثلاثة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 42–43',html:`<p>تكتشف المخاطر في مستودع وتقرأ قواعد السلامة. ستتعلم:</p><ol><li>${e('must / should / have to / need to + be + التصريف الثالث')}.</li><li>معاني ملصقات الشحن.</li><li>ترتيب خطوات إجراء طوارئ.</li></ol>`},
  ...R1.theory,
  {h:'تمارين الكتاب',ref:'ص 42–43',html:
   bk(1,'ص 42','اكتب قائمة بالمخاطر (A–H) في المستودع على شكل ملاحظات.',['A large boxes on a high shelf','B boxes sticking out from the shelf','C several boxes taken from a shelf at one time','D a man riding on the forks of a forklift','E pallets blocking the aisle','F gas cylinders not strapped to the hand truck','G an overloaded hand truck','H a truck pushed up the ramp'],'من قراءتنا للصورة؛ الكتاب لا يعطي الإجابة.')+
   bk(2,'ص 42','طابق القواعد بالمخاطر في 1.',['1 G','2 E','3 B','4 F','5 D','6 A','7 H','8 C'])+
   bk(3,'ص 43','أين ترى هذه الملصقات؟ ما معناها؟',['1 Fragile: it breaks easily','2 This way up: keep the arrows pointing up','3 Keep dry: protect from rain and water','4 Perishable: it goes bad quickly','5 Keep frozen: keep in a freezer'])+
   bk(4,'ص 43','ماذا يمكن أن يكون داخل الصناديق؟',['Fragile: glass, bottles of liquid, electrical goods','This way up: bottles of liquid, plants','Keep dry: electrical goods, hats','Perishable: fruit, food, plants','Keep frozen: food'],'إجابات نموذجية؛ قد يصح غيرها.')+
   bk(5,'ص 43','أكمل الشرح بالفعل المساعد والمبني للمجهول.',['1 needs to be handled · must not be dropped or thrown','2 needs to be carried · must not be turned','3 should be kept · has to be protected','4 should be delivered · must not be left','5 has to be frozen · must not be left'])+
   bk(6,'ص 43','حوّل التعليمات في 5 إلى المبني للمعلوم.',["1 You need to handle this item carefully. You mustn't drop or throw it.","2 You need to carry this item this way up. You mustn't turn it upside down.",'3 You should keep this item inside the warehouse. You have to protect it from the rain.',"4 You should deliver this box as soon as possible. You mustn't leave it for more than three days.","5 You have to freeze this box. You mustn't leave it outside the freezer."])+
   bk(7,'ص 43 و ص 112','ثلاثة إجراءات سلامة اختلطت. ضع الملاحظات تحت العناوين بأفضل ترتيب.',['FIRST AID AFTER ELECTRIC SHOCK: Switch off the electricity. · Check the person\'s condition. · Call 112. · If there is no pulse, give the person CPR. · If the person is not breathing, start artificial respiration. · If the person is breathing, they should be placed in the recovery position. · Cover the person with a blanket and keep them warm. · Stay with person until emergency services arrive.','CHEMICAL SPILL PROCEDURE: Stop work. · Turn off any ignition sources. · Attend to any injured persons if you can do so safely. · Evacuate the workroom and close the door behind you. · The workroom must be secured to keep others out. · Call Chemical Safety department. · Call 999 to evacuate injured persons. · Remain near workroom until Chemical Safety staff arrives.','FIRE EVACUATION PROCEDURE: If you hear an alarm, remain calm. · Do not stop to collect your belongings. · Leave the building by the safest route. · Close all the doors behind you. · Lifts must not be used. · Move at least 30 metres from building. · Report to the assembly point. · Do not return to the building unless you are authorised by the fire department.'],'ترتيب نموذجي؛ الكتاب لا يعطي الإجابة.')},
  {h:'أرقام الطوارئ',ref:'إضافة من خارج الكتاب',html:`<p><small>(إضافة من خارج الكتاب)</small> الرقمان ${e('112')} و ${e('999')} في الكتاب أرقام طوارئ في أوروبا وبريطانيا. في المملكة العربية السعودية: الرقم الموحد ${e('911')} في المناطق التي يعمل فيها، والإسعاف ${e('997')}، والدفاع المدني ${e('998')}.</p>`}
 ],
 stations:[
  {intro:true},
  ...R1.stations,
  {recap:['Helmets must be worn here.','Hand trucks must not be overloaded.','This item needs to be handled carefully.',"You need to handle this item carefully. You mustn't drop it.",'Fragile · This way up · Keep dry · Perishable · Keep frozen']}
 ],
 lab:lab1,
 examples:[
  {title:'مثال 1: قاعدة بالمجهول',ref:'ص 42',q:`<p>اكتب قاعدة: يجب لبس القفازات.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الشيء: ${e('Gloves')}.`},{t:`الخطوة 2: ${e('must')} + ${e('be')} + ${e('worn')}.`},{t:`الخطوة 3: ${e('Gloves must be worn.')}`,final:true}]},
  {title:'مثال 2: النفي',ref:'ص 42',q:`<p>اكتب قاعدة: ممنوع استعمال المصاعد.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Lifts')} + ${e('must not')}.`},{t:`الخطوة 2: ${e('be used')}.`},{t:`الخطوة 3: ${e('Lifts must not be used.')}`,final:true}]},
  {title:'مثال 3: إلى المعلوم',ref:'ص 43',q:`<p>حوّل: ${e('This box should be delivered as soon as possible.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('You should')}.`},{t:`الخطوة 2: ${e('delivered')} ← ${e('deliver')}، و ${e('this box')} بعد الفعل.`},{t:`الخطوة 3: ${e('You should deliver this box as soon as possible.')}`,final:true}]}
 ],
 quiz:[
  {q:'Hand trucks must not ___.',o:['be overloaded','overloaded','be overload','overload'],c:0,e:'be + التصريف الثالث.'},
  {q:'This item ___ to be handled carefully.',o:['needs','need','is need','needing'],c:0,e:'مفرد.'},
  {q:'Aisles have to be ___ free of all blockages.',o:['kept','keep','keeping','keeped'],c:0,e:'keep → kept.'},
  {q:'PERISHABLE means …',o:['it goes bad quickly','it breaks easily','keep it in a freezer','keep it dry'],c:0,e:'perishable.'},
  {q:"It must not be dropped. =",o:["You mustn't drop it.","You mustn't dropped it.","You must not to drop it.","You don't must drop it."],c:0,e:'المعلوم.'},
  {q:'Which word shows a recommendation?',o:['should','must','have to','need to'],c:0,e:'should = نصيحة.'}
 ]
});

/* ========== 2 Emergency ========== */
const RQ=["What should we do if the diver's location under water is unknown?", 'What should we do if the diver is trapped underwater?', "What should we do if the diver's air supply is low?", 'What should we do if the diver is submerged in water?', 'What should we do if the diver is not buoyant at the surface?', 'What should we do if the diver is not breathing?', 'What should we do if there are other boats in the area?', 'What should we do if there is no help available at the surface?', 'What should we do if the diver is close to the boat or land?', 'What should we do if the diver needs immediate treatment?', 'What should we do if the injury is serious?'];
const RES=[['Diver\'s location under water unknown?','locate the diver and mark their position',300],['Diver trapped underwater?','free the diver with a knife',300],['Diver\'s air supply low?','give the diver an extra gas cylinder',300],['Diver submerged in water?','bring the diver to the surface carefully',190],['Diver not buoyant at the surface?','inflate the diver\'s wet suit',110],['Not breathing?','give artificial respiration',110],['Other boats in area?','send a signal for help',110],['No help available at surface?','tow the diver to the boat or land',110],['Diver close to boat or land?','remove the diver from the water',70],['Diver needs immediate treatment?','give first aid',70],['Serious injury?','call a helicopter to take the diver to hospital',70]];
function lab2(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">خطة الإنقاذ</h3><p class="sub">مختبر من إعدادنا مبني على ملاحظات التمرين 3 ص 45. اضغط «الخطوة التالية» وتابع الغواص من القاع إلى المستشفى.</p>
  <div class="ph-row"><button type="button" class="btn pri" id="nx">الخطوة التالية</button><button type="button" class="btn" id="rs">من البداية</button></div><div id="d"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">ماذا نفعل؟</h3><div id="o"></div><div class="ph-row"><button type="button" class="btn" data-v="should">should</button><button type="button" class="btn" data-v="must">must</button><button type="button" class="btn" data-v="pas">should + passive</button></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا نحدد مكان الغواص قبل أي شيء؟</li><li>متى نستعمل ${e('must')} ومتى ${e('should')}؟</li><li>أين تجد ${e('should + passive')} عادة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0,v='should';
 const pas=a=>{const m=a.match(/^(\w+) (.*)$/);const P={locate:'located',free:'freed',give:'given',bring:'brought',inflate:'inflated',send:'sent',tow:'towed',remove:'removed',call:'called'};
  const map={locate:'The diver should be located and their position should be marked.',free:'The diver should be freed with a knife.',give:a.includes('cylinder')?'An extra gas cylinder should be given to the diver.':a.includes('respiration')?'Artificial respiration should be given.':'First aid should be given.',bring:'The diver should be brought to the surface carefully.',inflate:"The diver's wet suit should be inflated.",send:'A signal for help should be sent.',tow:'The diver should be towed to the boat or land.',remove:'The diver should be removed from the water.',call:'A helicopter should be called to take the diver to hospital.'};return map[m[1]]||a};
 const sh=()=>{const [q,a,y]=RES[k];
  $('#d').innerHTML=art(`<rect x="20" y="70" width="320" height="230" fill="#9cc0de"/><path d="M20 70 L340 70" stroke="${C.blue}" stroke-width="3"/><rect x="20" y="295" width="320" height="15" fill="#d8c39a"/><path d="M230 60 L290 60 L280 72 L238 72 Z" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${k<=1?`<path d="M60 300 L95 280 L110 300 Z" fill="#8a6a45"/>`:''}${k>=0?`<line x1="70" y1="70" x2="70" y2="290" stroke="${C.ink}" stroke-dasharray="4 4"/><circle cx="70" cy="66" r="7" fill="${C.red}"/>`:''}<g transform="translate(${k>=7?200:100},${k>=8?40:y-10})"><circle cx="0" cy="0" r="9" fill="${C.ink}"/><rect x="-6" y="8" width="12" height="26" rx="5" fill="${C.ink}"/>${k>=4?`<circle cx="0" cy="18" r="16" fill="none" stroke="${C.yel}" stroke-width="4"/>`:''}</g>${k===10?`<path d="M250 20 L320 20 M285 20 L285 30 M265 30 L305 30 L300 45 L270 45 Z" stroke="${C.ink}" stroke-width="3" fill="${C.red}"/>`:''}`+TL(180,40,`${k+1} / ${RES.length}`,{fs:14,w:700}),'rescue');
  el.querySelectorAll('[data-v]').forEach(b=>b.classList.toggle('pri',b.dataset.v===v));
  const ans=v==='pas'?pas(a):`You ${v} ${a}.`;
  $('#o').innerHTML=`<p class="sub">الموقف:</p>${eb([RQ[k],ans])}`;
  if(B&&B.ltrU)try{B.ltrU(el)}catch(_){}};
 $('#nx').onclick=()=>{k=Math.min(k+1,RES.length-1);sh()};$('#rs').onclick=()=>{k=0;sh()};el.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{v=b.dataset.v;sh()});sh();
}
const ADV={helm:['wear a helmet','must','ضروري'],orange:['be orange','should','رأي / اقتراح'],eq:['purchase new first aid equipment','should+p','توصية في تقرير'],buoy:['mark the position with a buoy','should','نصيحة'],lift:['use the lifts in a fire','mustnot','ممنوع']};
const LAB6B={title:'must أم should؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الموقف.',
 controls:[{k:'a',label:'الموقف',opts:Object.keys(ADV).map(k=>[k,k])}],
 out:({a})=>{const [x,m,w]=ADV[a];const S={helm:'Safety helmets must be worn at all times.',orange:'In my opinion, safety helmets should be yellow, not orange.',eq:'New first aid equipment should be purchased immediately.',buoy:'You should mark the position with a buoy.',lift:'Lifts must not be used in a fire.'}[a];
  return{pieces:[[S,'x',w]],say:S,why:`${e('must')} للضروري، و ${e('should')} للنصيحة والاقتراح، و ${e('should + be + التصريف الثالث')} في قسم التوصيات في التقارير.`}}})};
const R2=N.rule({title:'النصيحة والضرورة في الطوارئ',ref:'ص 44–45',
 intro:`في الطوارئ نفكر في المهام، ثم نرتبها، ثم نكتب توصيات حتى لا يتكرر الخطأ.`,
 parts:[
 {t:'What should we do if …? — You should …',short:'You should locate them',old:[1],q:'ماذا نفعل إذا كان مكان الغواص غير معروف؟',ref:'ص 45',
  lead:`نسأل عن الإجراء بـ ${e('What should we do if …?')} ونجيب بـ ${e('You should + الفعل')}.`,
  points:[`${e("What should we do if the diver's location under water is unknown?")}`,`${e('You should locate them and mark their position.')}`,`<b>they / them / their</b> تعني كثيراً ${e('he or she / him or her / his or her')} حين لا نعرف هل الشخص رجل أم امرأة.`],
  dlg:[['A','What should we do if the diver is not breathing?'],['B','You should give them artificial respiration.']],
  pairs:[['What we should do if …?','What should we do if …?','should قبل we في السؤال.'],['You should to locate them.','You should locate them.','لا to بعد should.']]},
 {t:'must و should و should + passive',short:'should be purchased',old:[2],q:'كيف تكتب توصية في تقرير؟',ref:'ص 45',
  lead:`${e('Must')}: الفعل ضروري. ${e('Should')}: نوصي أو نقترح. ${e('Should + passive')}: في قسم التوصيات في التقرير.`,
  rows:[['must','Safety helmets must be worn at all times.','ضروري'],['should','In my opinion, they should be yellow.','اقتراح'],['should + passive','New first aid equipment should be purchased immediately.','توصية في تقرير']],head:['الصيغة','مثال','الاستعمال'],labs:[LAB6B]}
 ]});
B.lesson({
 id:'u6-l2',unit:6,order:2,pages:'44–45',
 title:'2 Emergency — الطوارئ',
 summary:'خطة لإنقاذ غواص عالق تحت الماء: العصف الذهني بالمهام ثم ترتيبها، وسؤال What should we do if …? والإجابة You should …، والفرق بين must و should و should + passive في التوصيات، وبريد إلكتروني فيه معلومة قديمة وجديدة وطلب.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 44–45',html:`<p>غواص عالق تحت الماء ورفاقه يخططون لإنقاذه. ستتعلم:</p><ol><li>ترتيب خطوات الإنقاذ.</li><li>${e('What should we do if …? — You should …')}</li><li>كتابة توصيات بـ ${e('should + passive')} في بريد إلكتروني.</li></ol>`},
  ...R2.theory,
  {h:'تمارين الكتاب',ref:'ص 44–45',html:
   bk(1,'ص 44','في مجموعات: ضعوا خطة لإنقاذ الغواص. اكتبوا كل المهام ثم رتبوها.',null)+
   bk(2,'ص 44','استمع ورقّم النقاط بترتيب ذكرها.',['1 free diver\'s leg','2 bring to surface','3 remove from water','4 locate diver','5 mark position','6 provide extra air','7 do artificial respiration','8 make diver buoyant','9 tow diver to safety','10 attract help at surface','11 take to hospital','12 give first aid'],'من نص التسجيل في الكتاب.')+
   bk(3,'ص 45','استمع ورقّم الملاحظات بالترتيب الصحيح.',['Diver\'s location under water unknown? 1','Diver trapped underwater? 2','Diver\'s air supply low? 3','Diver submerged in water? 4','Diver not buoyant at the surface? 5','Not breathing? 6','Other boats in area? 7','No help available at surface? 8','Diver close to boat or land? 9','Diver needs immediate treatment? 10','Serious injury? 11'],'من نص التسجيل في الكتاب.')+
   bk(4,'ص 45','اسأل وأجب بأسئلة كاملة من 3.',null)+
   bk(5,'ص 45','أي جزء في البريد يعطي معلومة قديمة، وأيها جديدة، وأيها الطلب؟',['old: You\'ll remember that we talked about the trapped diver (Mike) on the phone this morning.','new: The rescue leader has just told me that Mike is now going to the hospital by helicopter.','action: I\'m holding a meeting next week … Could you please send me your recommendations for improving them?'])+
   bk(6,'ص 45','اكتب رد جون: معلومة قديمة، وجديدة، وطلب، مع ست توصيات.',null)},
  {h:'الاستماع',ref:'ص 44–45',html:au('16','ص 44 — التمرين 2','عصف ذهني لإنقاذ غواص عالق.')+au('17','ص 45 — التمرين 3','ترتيب خطوات الإنقاذ.')}
 ],
 stations:[
  {intro:true},
  ...R2.stations,
  {recap:['What should we do if the diver is trapped?','You should free them with a knife.','must = ضروري · should = اقتراح','New first aid equipment should be purchased.','old information → new information → action']}
 ],
 lab:lab2,
 examples:[
  {title:'مثال 1: السؤال',ref:'ص 45',q:`<p>اسأل عن الإجراء إذا كان الغواص لا يتنفس.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('What should we do')}`},{t:`الخطوة 2: ${e('if the diver is not breathing')}`},{t:`الخطوة 3: ${e('What should we do if the diver is not breathing?')}`,final:true}]},
  {title:'مثال 2: الجواب',ref:'ص 45',q:`<p>أجب: إذا كان الغواص قريباً من القارب.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('You should')} + الفعل كما هو.`},{t:`الخطوة 2: ${e('remove them from the water')}`},{t:`الخطوة 3: ${e('You should remove them from the water.')}`,final:true}]},
  {title:'مثال 3: توصية',ref:'ص 45',q:`<p>اكتب توصية: شراء قوارب أسرع.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الشيء: ${e('Faster boats')}.`},{t:`الخطوة 2: ${e('should be')} + ${e('purchased')}.`},{t:`الخطوة 3: ${e('Faster boats should be purchased.')}`,final:true}]}
 ],
 quiz:[
  {q:'What ___ we do if the diver is trapped?',o:['should','must to','do','are'],c:0,e:'should.'},
  {q:'You should ___ the diver to the surface carefully.',o:['bring','to bring','brought','bringing'],c:0,e:'الفعل كما هو.'},
  {q:'Must shows that an action is …',o:['necessary','a suggestion','in the past','possible'],c:0,e:'ضروري.'},
  {q:'New first aid equipment ___ purchased immediately.',o:['should be','should','is should','should been'],c:0,e:'should + be.'},
  {q:'"You should locate them." — them means …',o:['him or her','the boats','the rocks','us'],c:0,e:'them.'},
  {q:'What is the first thing to do when the location is unknown?',o:['locate the diver and mark their position','give first aid','tow to safety','call a helicopter'],c:0,e:'الترتيب.'}
 ]
});

/* ========== 3 Directions ========== */
const GX=[60,180,300],GY=[80,170,260];
const DIRS={N:[0,-1],E:[1,0],S:[0,1],W:[-1,0]},LEFT={N:'W',W:'S',S:'E',E:'N'},RIGHT={N:'E',E:'S',S:'W',W:'N'};
function lab3(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">وصّل السيارة</h3><p class="sub">مختبر من إعدادنا مبني على التمرين 2 ص 46. السيارة عند السهم الأخضر. أعطِ التعليمات حتى تصل إلى المبنى الأحمر.</p><div id="d"></div>
  <div class="ph-row"><button type="button" class="btn" data-a="L">turn left</button><button type="button" class="btn" data-a="S">go straight ahead</button><button type="button" class="btn" data-a="R">turn right</button><button type="button" class="btn" id="rs">من جديد</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">تعليماتك</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>صِف الموقف أولاً ثم أعطِ التعليمة: ${e('There are two crossroads. Turn right at the second one.')}</li><li>ما الفرق بين ${e('crossroads')} و ${e('T-junction')}؟</li><li>اكتب التعليمات نفسها لزميل يأتي من الجهة الأخرى.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let x,y,d,log,done,goal=[2,0];
 const reset=()=>{x=0;y=2;d='N';log=[];done=false;draw()};
 const draw=()=>{const roads=GX.map(a=>`<line x1="${a}" y1="50" x2="${a}" y2="290" stroke="#bbb" stroke-width="22"/>`).join('')+GY.map(b=>`<line x1="30" y1="${b}" x2="330" y2="${b}" stroke="#bbb" stroke-width="22"/>`).join('');
  const car=`<g transform="translate(${GX[x]},${GY[y]}) rotate(${({N:0,E:90,S:180,W:270})[d]})"><rect x="-8" y="-12" width="16" height="24" rx="4" fill="${C.blue}" stroke="${C.ink}" stroke-width="2"/><path d="M-5 -10 L5 -10 L0 -16 Z" fill="${C.yel}"/></g>`;
  $('#d').innerHTML=art(roads+`<rect x="${GX[goal[0]]+16}" y="${GY[goal[1]]-40}" width="34" height="28" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/><path d="M${GX[0]-30} ${GY[2]+30} l0 -20" stroke="${C.grn}" stroke-width="5"/>`+car+(done?TL(180,40,'You have arrived!',{fs:16,w:700,c:C.grn}):''),'map');
  $('#o').innerHTML=log.length?eb(log):'<p class="sub">ابدأ بالأزرار. كل ضغطة تتحرك بها السيارة إلى التقاطع التالي.</p>'+`<p class="sub">${e('The red building is on the right, at the top of the map.')}</p>`;if(B&&B.ltrU)try{B.ltrU(el)}catch(_){}};
 const move=a=>{if(done)return;let nd=a==='L'?LEFT[d]:a==='R'?RIGHT[d]:d;const [dx,dy]=DIRS[nd];const nx=x+dx,ny=y+dy;
  if(nx<0||nx>2||ny<0||ny>2){log.push(a==='S'?"You can't go that way. The road leaves the map.":`You can't turn ${a==='L'?'left':'right'} here. The road leaves the map.`);draw();return}
  log.push(a==='S'?'Go straight ahead at the crossroads.':`Turn ${a==='L'?'left':'right'} at the crossroads.`);
  x=nx;y=ny;d=nd;if(x===goal[0]&&y===goal[1]){done=true;log.push(d==='N'?'The building is on your right.':d==='E'?'The building is in front of you, on the left.':'You have arrived.')}draw()};
 el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>move(b.dataset.a));$('#rs').onclick=reset;reset();
}
const SIT={stop:['There is a STOP sign at the end of the road.','Turn left here.'],lights:['There are two sets of traffic lights on this road.','Turn right at the second set.'],station:['When you come out of the station,','turn right into Market Street.'],police:["You'll see a police station on your left.","Don't turn left here. Take the second turning on the left."],bridge:["If you cross a bridge over the river, you've gone too far.",'Do a U-turn. Go back across the bridge. Then take the first turning on the right.']};
const LAB6C={title:'صف الموقف ثم أعطِ التعليمة',w:(el,B)=>N.labB(el,B,{intro:'اختر الموقف (من جدول اللغة ص 46).',
 controls:[{k:'s',label:'الموقف',opts:Object.keys(SIT).map(k=>[k,k])}],
 out:({s})=>{const [a,b]=SIT[s];return{pieces:[[a,'n','الموقف'],[b,'k','التعليمة']],say:`${a} ${b}`,why:'نصف ما سيراه السائق أولاً، ثم نعطي فعل الأمر.'}}})};
const R3=N.rule({title:'إعطاء الاتجاهات',ref:'ص 46–47',
 intro:`حين تصف الطريق لزائر، استعمل أسماء المعالم وفعل الأمر، وصف ما سيراه أولاً.`,
 parts:[
 {t:'معالم الطريق وفعل الأمر',short:'take the second turning on the left',old:[1],q:'كيف تقول «خذ المخرج الثالث من الدوار»؟',ref:'ص 46',
  lead:`نستعمل فعل الأمر مع أسماء المعالم والأرقام الترتيبية.`,
  rows:[['roundabout','take the third exit from the roundabout'],['T-junction','turn right at the T-junction'],['crossroads','go straight ahead at the crossroads'],['slip road','leave the motorway by the slip road'],['flyover','turn left under the flyover'],['turning','take the second turning on the left']],head:['المَعلم','التعليمة'],
  points:[`${e('motorway')}: طريق سريع · ${e('gantry')}: هيكل لوحات فوق الطريق · ${e('underpass')}: نفق تحت الطريق.`],
  pairs:[['take the two exit','take the second exit','الرقم الترتيبي.'],['turn right in the T-junction','turn right at the T-junction','at.']]},
 {t:'صف الموقف ثم أعطِ التعليمة',short:"You'll see … Turn …",old:[2],q:'كيف تخبره أنه تجاوز المكان؟',ref:'ص 46',
  lead:`صف ما سيراه السائق (${e("There is … / You'll see … / When you …")}) ثم أعطه التعليمة.`,
  points:[`${e("If you cross a bridge over the river, you've gone too far. Do a U-turn.")}`,`${e('When you come out of the station, turn right into Market Street.')}`],labs:[LAB6C]}
 ]});
B.lesson({
 id:'u6-l3',unit:6,order:3,pages:'46–47',
 title:'3 Directions — الاتجاهات',
 summary:'معالم الطرق (motorway, slip road, roundabout, flyover, underpass, gantry, T-junction, crossroads)، وإعطاء الاتجاهات بفعل الأمر والأرقام الترتيبية، ووصف الموقف قبل التعليمة، وقراءة خريطة من بريد إلكتروني ومن مكالمة هاتفية.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 46–47',html:`<p>تقرأ خرائط وتستمع إلى اتجاهات بالهاتف. ستتعلم:</p><ol><li>أسماء معالم الطرق.</li><li>فعل الأمر في الاتجاهات: ${e('turn, take, go, leave')}.</li><li>وصف الموقف قبل التعليمة.</li></ol>`},
  ...R3.theory,
  {h:'تمارين الكتاب',ref:'ص 46–47',html:
   bk(1,'ص 46','حدّد هذه المعالم في الصورة.',['1 flyover','2 slip road','3 gantry','4 motorway','5 roundabout','6 underpass'],'من قراءتنا للصورة؛ الكتاب لا يعطي الإجابة.')+
   bk(2,'ص 46','طابق الاتجاهات بالخرائط.',['1 D','2 F','3 A','4 C','5 B','6 H','7 G','8 E'])+
   bk(3,'ص 47','اقرأ البريد وحدّد TurboTech على الخريطة.',['The route: roundabout → second exit → straight ahead → the lake on your left → the TurboTech sign → the first road on your left → TurboTech is on your right.'],'الكتاب لا يعطي حرف المبنى؛ يحدده المدرب مع المتدربين على الخريطة.')+
   bk(4,'ص 47','استمع وحدّد قسم الهندسة والمركز الرياضي على الخريطة.',['Engineering Department: leave the M95 at Junction 3 → fifth exit → main entrance to the South Campus (E1) → turn left into the campus → the last of four buildings on your left.','Sports Centre: from E1 turn right at the T-junction → roundabout over the M95 → second main exit (Comet Way) → turn left at the next roundabout → small roundabout with a hotel: second exit → straight ahead past the main entrance of the North Campus → turn left at the next roundabout → a large building on your left just before the crossroads.'],'الطريق من نص التسجيل؛ رقم المبنى على الخريطة يحدده المدرب.')+
   bk(5,'ص 47 و ص 112 و ص 114','في أزواج: أعطِ زميلك اتجاهات بالهاتف إلى أماكن على الخريطة.',null)+
   bk(6,'ص 47','اكتب ثلاثة أماكن محلية، وصف لزميلك الطريق إليها، وارسم خريطة من اتجاهاته.',null)},
  {h:'الاستماع',ref:'ص 47',html:au('18','ص 47 — التمرين 4','اتجاهات بالهاتف داخل الجامعة.')}
 ],
 stations:[
  {intro:true},
  ...R3.stations,
  {recap:['take the third exit from the roundabout','turn right at the T-junction','go straight ahead at the crossroads',"You'll see a police station on your left. Take the second turning on the left.","If you cross a bridge, you've gone too far. Do a U-turn."]}
 ],
 lab:lab3,
 examples:[
  {title:'مثال 1: الدوار',ref:'ص 46',q:`<p>السائق يدخل الدوار ويخرج من المخرج الثاني.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفعل ${e('take')}.`},{t:`الخطوة 2: ${e('the second exit')}.`},{t:`الخطوة 3: ${e('Take the second exit from the roundabout.')}`,final:true}]},
  {title:'مثال 2: الموقف ثم التعليمة',ref:'ص 46',q:`<p>هناك إشارتا مرور، والمطلوب الانعطاف يميناً عند الثانية.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الموقف: ${e('There are two sets of traffic lights on this road.')}`},{t:`الخطوة 2: التعليمة: ${e('Turn right')}.`},{t:`الخطوة 3: ${e('Turn right at the second set.')}`,final:true}]},
  {title:'مثال 3: تجاوزتَ المكان',ref:'ص 46',q:`<p>إذا رأى السائق المستشفى فقد تجاوز المكان.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("If you see the hospital, you've gone too far.")}`},{t:`الخطوة 2: ${e('Do a U-turn.')}`},{t:`الخطوة 3: ${e("If you see the hospital, you've gone too far. Do a U-turn.")}`,final:true}]}
 ],
 quiz:[
  {q:'Take the third ___ from the roundabout.',o:['exit','turning','junction','bridge'],c:0,e:'exit.'},
  {q:'Turn right ___ the T-junction.',o:['at','in','on','by'],c:0,e:'at.'},
  {q:'A road that takes you off the motorway:',o:['slip road','gantry','flyover','crossroads'],c:0,e:'slip road.'},
  {q:'A road that goes under another road:',o:['underpass','flyover','gantry','ramp'],c:0,e:'underpass.'},
  {q:"If you cross the bridge, you've gone too far. ___",o:['Do a U-turn.','Go straight ahead.','Take the third exit.','Turn off the engine.'],c:0,e:'U-turn.'},
  {q:'Go straight ahead at the ___.',o:['crossroads','U-turn','car park','ramp'],c:0,e:'crossroads.'}
 ]
});

/* ========== Review Unit C ========== */
B.lesson({
 id:'u6-l4',unit:6,order:4,pages:'48–51',
 title:'Review Unit C — مراجعة الوحدتين 5 و 6',
 summary:'مراجعة الحديث عن الاستعمال والوظيفة (for + ing, used to, designed to, act as) بمعدات الغوص، والتعريفات بـ which / who، والأسئلة عن جهاز، ووصف الشكل، والمبني للمجهول مع الأفعال المساعدة، والاتجاهات، وطفاية الحريق، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 48–51',html:`<p>هذه المراجعة تغطي الوحدتين 5 و 6.</p>`+vt([['الاستعمال',"It's for controlling … · It's used to store … · It acts as …"],['التعريف','An MP3 player is a device which …'],['أسئلة الجهاز',"What's it called? What's it for? How does it work?"],['الشكل','It\'s shaped like an egg.'],['المجهول مع الأفعال المساعدة','Two air cylinders must be carried.'],['الاتجاهات','Go along … Turn right at …']],['الموضوع','مثال'])},
  {h:'تمارين المراجعة',ref:'ص 48–51',html:
   bk(1,'ص 48','أكمل بالصيغة الصحيحة للأفعال: carry · convert · detect · start · treat',['1 starting','2 detect','3 convert','4 treating','5 carry'])+
   bk(2,'ص 48','ناقش مع زميلك وظيفة كل قطعة من معدات الغواص.',null)+
   bk(3,'ص 48','صف وظيفة كل قطعة بالصيغة المطلوبة.',['1 The demand valve is for controlling the flow of air to the diver.','2 The cylinder is used to store air under high pressure.','3 The pressure gauge indicates the amount of compressed air in the cylinder.','4 The cylinder is used for transporting compressed air with the diver.','5 The depth gauge is designed to indicate the depth of the water.','6 The harness is for fastening the equipment to the diver.','7 The diving mask is designed to allow the diver to see clearly under water.','8 The pressure gauge acts as a warning for the diver.','9 The demand valve supplies compressed air to the diver.','10 The harness acts as a support for the scuba equipment.'])+
   bk(4,'ص 49','اكتب الأسئلة في المقابلة عن نظام الإنذار.',["1 What's it called?","2 What's it for?",'3 How does it work?','4 What exactly is a hydrophone?','5 Who is it designed for?','6 What shape is it?','7 How big is it? (How long is it?)','8 Where do you wear it?',"9 What's it made of?",'10 What colour is it?'])+
   bk(5,'ص 49','ما استعمال هذه الأجهزة في رأيك؟',['a snow shovel with a wheel: for moving snow easily','a tube squeezer: for getting all the toothpaste out of the tube','a flying alarm clock: the propeller flies off, so you have to get up to catch it','a hand-held device with a probe on a cable: for checking or measuring something (e.g. temperature)'],'إجابات نموذجية؛ الكتاب لا يعطي الإجابة، والجهاز الأخير غير واضح في الصورة.')+
   bk(6,'ص 49','اكتب وصفاً للأجهزة الأربعة: شكلها ووظيفتها.',null)+
   bk(7,'ص 50','اكتب التعريفات.',['2 Fibreglass is a material which is used for making hulls of boats.','3 Artificial respiration is a procedure which helps a casualty to breathe.','4 GPS is a system which uses satellites to locate your position.','5 A sub-sea mechanic is a technician who repairs underwater pipes and machines.','6 A solar-powered car is a vehicle which is powered by electricity from a solar panel.','7 A wheel wrench is a tool which loosens and tightens nuts on wheels.',"8 A depth gauge is an instrument which calculates the diver's depth in the water."])+
   bk(8,'ص 50','اكتب رداً على البريد تصف فيه الطريق إلى المبنى 31 (القيادة على اليمين).',null)+
   bk(9,'ص 50','حوّل التعليمات إلى المبني للمجهول.',['2 Lifejackets have to be worn by all staff on board this oil rig.','3 Boxes or crates must not be stacked in the aisles.','4 All this food needs to be frozen before it is sent to the warehouse.','5 Forklift trucks should never be used as people carriers.','6 Trucks have to be pushed down a ramp. They must never be pulled down.'])+
   bk(10,'ص 51 و ص 112 و ص 115','في أزواج: صف شيئاً واطلب من زميلك أن يرسمه، ثم قارن الرسم بالصورة.',null)+
   bk(11,'ص 51','ناقش أسئلة طفاية الحريق ودوّن إجاباتك.',['No. Water conducts electricity, so you can get an electric shock.','The cylinder is made of metal (steel): it is strong and can hold high pressure. The siphon is a metal or plastic tube: it does not rust.','The valve controls the flow of water and stops it.','The rod breaks the seal of the carbon dioxide container. It has a sharp point to pierce it.','You press the lever.','The carbon dioxide is released. The gas pressure pushes on the water, and the water is forced up the siphon and out of the nozzle.','Hold it upright, aim the nozzle at the base of the fire, and move it from side to side.','Do not use it on electrical or oil fires. Keep the exit behind you.'],'إجابات نموذجية من خارج الكتاب؛ يراجعها المختص.')+
   bk(12,'ص 51','صمّم مع زميلك ملصق سلامة لهذا النوع من الطفايات.',null)+
   bk(13,'ص 51','مشروع: ابحث عن جهاز مهم في تخصصك، وقدّمه للصف.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 5',title:'خلاصة: الاستعمال والتعريف',q:"What's the depth gauge for?",ref:'ص 48–50',
   side:[{tip:`${e("It's for … · It's used to … · It's designed to … · It acts as …")}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Jump leads are used for ___ a car with a flat battery.',o:['starting','start'],a:0},{s:'The purpose of a hydrophone is to ___ signals under water.',o:['detect','detecting'],a:0},{s:'The harness acts ___ a support.',o:['as','for'],a:0},{s:'A depth gauge is an instrument ___ calculates depth.',o:['which','who'],a:0},{s:'A sub-sea mechanic is a technician ___ repairs pipes.',o:['who','which'],a:0}]}),title:'تدريب سريع'}]},
  {st:2,short:'الوحدة 6',title:'خلاصة: القواعد والاتجاهات',q:'Change into the passive: You must carry two air cylinders.',ref:'ص 50',
   side:[{tip:`${e('Two air cylinders must be carried at all times during a dive.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Boxes must not ___ in the aisles.',o:['be stacked','stacked'],a:0},{s:'Lifejackets have to be ___.',o:['worn','wear'],a:0},{s:'Forklift trucks should never ___ as people carriers.',o:['be used','used'],a:0},{s:'Take the second ___ on the left.',o:['turning','turn'],a:0},{s:'What should we do ___ the diver is trapped?',o:['if','so'],a:0}]}),title:'تدريب سريع'}]},
  {recap:["The demand valve is for controlling the flow of air.",'The depth gauge is designed to indicate the depth.','A GPS is a system which uses satellites.','Two air cylinders must be carried.',"What's it made of? What colour is it?"]}
 ],
 examples:[
  {title:'مثال 1: الوظيفة',ref:'ص 48',q:`<p>صف الوظيفة بـ ${e('designed to')}: ${e('diving mask — allow diver to see clearly')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('The diving mask is designed to')}`},{t:`الخطوة 2: + الفعل كما هو: ${e('allow the diver to see clearly under water')}`},{t:`الخطوة 3: ${e('The diving mask is designed to allow the diver to see clearly under water.')}`,final:true}]},
  {title:'مثال 2: التعريف',ref:'ص 50',q:`<p>عرّف: ${e('a wheel wrench — tool — loosen and tighten nuts on wheels')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('A wheel wrench is a tool')}`},{t:`الخطوة 2: شيء ← ${e('which')}، والفعل مع المفرد: ${e('loosens and tightens')}`},{t:`الخطوة 3: ${e('A wheel wrench is a tool which loosens and tightens nuts on wheels.')}`,final:true}]},
  {title:'مثال 3: المجهول',ref:'ص 50',q:`<p>حوّل: ${e('You must not stack boxes in the aisles.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الشيء: ${e('Boxes')}.`},{t:`الخطوة 2: ${e('must not be stacked')}.`},{t:`الخطوة 3: ${e('Boxes must not be stacked in the aisles.')}`,final:true}]}
 ],
 quiz:[
  {q:'Jump leads are used for ___ a car with a flat battery.',o:['starting','start','to start','started'],c:0,e:'for + ing.'},
  {q:'The cylinder is used ___ air under high pressure.',o:['to store','for store','storing','to storing'],c:0,e:'used to + الفعل.'},
  {q:'The harness acts ___ a support for the equipment.',o:['as','for','to','like to'],c:0,e:'act as.'},
  {q:'A sub-sea mechanic is a technician ___ repairs pipes.',o:['who','which','what','where'],c:0,e:'شخص.'},
  {q:'Lifejackets have to ___ by all staff.',o:['be worn','wear','worn','be wear'],c:0,e:'مجهول.'},
  {q:"___ is it made of? — It's made of a tough polymer.",o:['What','How','Who','Where'],c:0,e:'What.'}
 ]
});
})(PLCBOOK);

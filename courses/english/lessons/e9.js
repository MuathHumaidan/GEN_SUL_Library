/* الوحدة 9 — Troubleshooting: 9.1 Operation (ص 68–69) و 9.2 Hotline (ص 70–71) و 9.3 User guide (ص 72–73) */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,upd,ab,sp}=N;

/* =================== 9.1 Operation =================== */
/* حوّامة صغيرة من رسمنا: [الجزء، المعنى، الفعل (للمفرد)، المفعول، جمع؟] */
const HOV=[['engine','المحرك','drives','the fan',0],['fan','المروحة','pushes','air downwards and backwards',0],['skirt','التنورة المطاطية','holds','the cushion of air',0],['rudders','الدفّات','steer','the hovercraft',1],['body','الهيكل','supports','the driver and the engine',0],['throttle','دوّاسة الوقود (المقبض)','controls','the speed of the engine',0]];
const VB=['drives','pushes','holds','steer','supports','controls'];
const hovArt=sel=>`<svg viewBox="0 0 420 230" role="img" aria-label="حوامة صغيرة من الجانب">
 <path d="M40 150 Q30 190 80 196 H340 Q390 190 380 150Z" fill="${sel==='skirt'?'var(--stop)':'var(--fg)'}" opacity=".85" data-h="skirt" style="cursor:pointer"/>
 <rect x="50" y="110" width="320" height="42" rx="18" fill="${sel==='body'?'var(--stop)':'var(--blue-soft)'}" stroke="var(--blue)" stroke-width="2" data-h="body" style="cursor:pointer"/>
 <rect x="140" y="84" width="60" height="28" rx="6" fill="${sel==='engine'?'var(--stop)':'var(--surface-2)'}" stroke="var(--fg)" data-h="engine" style="cursor:pointer"/>
 <circle cx="80" cy="70" r="40" fill="${sel==='fan'?'var(--stop)':'var(--surface)'}" stroke="var(--fg)" stroke-width="3" data-h="fan" style="cursor:pointer"/><path d="M80 34 V106 M44 70 H116" stroke="var(--fg)" stroke-width="2"/>
 <rect x="22" y="40" width="10" height="64" fill="${sel==='rudders'?'var(--stop)':'var(--live)'}" data-h="rudders" style="cursor:pointer"/>
 <rect x="250" y="88" width="40" height="22" rx="6" fill="var(--surface-2)" stroke="var(--fg)"/><circle cx="270" cy="72" r="14" fill="var(--surface)" stroke="var(--fg)"/><rect x="292" y="82" width="26" height="8" rx="3" fill="${sel==='throttle'?'var(--stop)':'var(--live)'}" data-h="throttle" style="cursor:pointer"/>
 <text x="210" y="222" text-anchor="middle" font-size="12" fill="var(--muted)" direction="ltr">← back · front →</text></svg>`;
function lab91(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">ماذا يفعل كل جزء؟</h3>
  <p class="sub">مبني على «Language» ص 68–69، بحوّامة صغيرة من رسمنا (ليست لوح الكتاب). اضغط جزءاً، واختر الفعل الصحيح، ثم شاهد الجمل.</p>
  <div class="pk-pic" id="hp"></div><div id="hq"></div><div class="ph-row" id="hv"></div><div id="ho"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">ثلاث صيغ للوظيفة</h3><ol class="ph-try" dir="ltr" style="text-align:left">
  <li><span class="en">The engine drives the fan.</span></li><li><span class="en">The purpose of the engine is to drive the fan.</span></li><li><span class="en">The function / job of the engine is to drive the fan.</span></li></ol>
  <p class="pk-ill">بعد <span class="en">is to</span> يأتي الفعل الأصلي بلا s.</p></div>
 </div></div>`;
 const $=s=>el.querySelector(s);let cur=0;
 const draw=()=>{const h=HOV[cur];$('#hp').innerHTML=hovArt(h[0]);el.querySelectorAll('[data-h]').forEach(x=>x.onclick=()=>{cur=HOV.findIndex(y=>y[0]===x.dataset.h);draw()});
  $('#hq').innerHTML=eb(`What ${h[4]?'do':'does'} the ${h[0]} do?`)+`<p class="pk-ill">${h[1]} — اختر الفعل:</p>`;
  $('#hv').innerHTML=VB.map(v=>`<button type="button" class="btn" data-v="${v}">${v}</button>`).join('');$('#ho').innerHTML='';
  el.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{const ok=b.dataset.v===h[2];b.classList.add(ok?'pri':'');
   const base=h[4]?h[2]:h[2].replace(/es$/,'').replace(/(?<=[^s])s$/,'');const inf=h[2]==='pushes'?'push':h[2]==='drives'?'drive':h[2]==='holds'?'hold':h[2]==='supports'?'support':h[2]==='controls'?'control':'steer';
   $('#ho').innerHTML=ok?eb([`${h[4]?'They':'It'} ${h[2]} ${h[3]}.`,`The purpose of the ${h[0]} is to ${inf} ${h[3]}.`]):`<div class="pk-fb bad"><b>ليس هذا.</b> فكّر: ماذا يفعل ${h[1]}؟${h[4]?' (انتبه: الجمع بلا s)':''}</div>`})};
 draw();
}
const VOC91=[['operation','طريقة العمل (التشغيل)',''],['vehicle','مركبة',''],['body','الهيكل',''],['engine','المحرك',''],['fan','المروحة',''],['lever','ذراع (رافعة)',''],['handlebar','المقود (مقبض التوجيه)',''],['skirt','تنورة (حافة مطاطية)',''],['friction wheel','عجلة احتكاك',''],['drive','يُدير (يشغّل)','The engine drives the fan.'],['propel','يدفع للأمام',''],['steer','يوجّه',''],['support','يحمل (يسند)',''],['accelerate','يُسرّع',''],['purpose / function / job','الغرض / الوظيفة / العمل',''],['attached to','مثبّت على (ملتصق بـ)',''],['connected to','موصول بـ',''],['mounted on','مركّب على',''],['suspended from','معلّق من',''],['downwards ≠ upwards','إلى الأسفل ≠ إلى الأعلى',''],['press ≠ release','يضغط ≠ يحرّر','']];

/* ===== مختبرات «شرح القاعدة» 9.1 ===== */
const PT91={'the engine':[0,'drives','drive','the fan','المحرك يدير المروحة'],'the fan':[0,'pulls','pull','the air in','المروحة تسحب الهواء'],'the rudders':[1,'steer','steer','the hovercraft','الدفّات توجّه الحوامة'],'the levers':[1,'control','control','the speed','الذراعان يتحكمان بالسرعة'],'the handlebar':[0,'steers','steer','the board','المقود يوجّه اللوح'],'the wheels':[1,'support','support','the body','العجلات تحمل الهيكل']};
const cap91=s=>s.replace(/^./,c=>c.toUpperCase());
const LAB91A={title:'الوظيفة بالمضارع البسيط',w:(el,B)=>N.labB(el,B,{intro:'اختر الجزء ونوع الجملة، وشاهد متى يأخذ الفعل s ومتى نستعمل does أو do.',
 controls:[{k:'p',label:'الجزء',opts:Object.keys(PT91).map(k=>[k,k.replace('the ','')])},{k:'t',label:'الجملة',opts:[['s','جملة الوظيفة'],['wh','What does … do?'],['yn','Does …? / Do …?']]}],
 out:({p,t})=>{const [pl,v3,v,o,ar]=PT91[p],aux=pl?'do':'does';
  if(t==='s')return{pieces:[[cap91(p),'x',pl?'جمع':'مفرد'],[v3,'n',pl?'بلا s':'+ s'],[o+'.','x','']],say:`${cap91(p)} ${v3} ${o}.`,ar,why:pl?'الفاعل جمع، فالفعل بلا s.':'الفاعل مفرد، فنضيف s للفعل.'};
  if(t==='wh')return{pieces:[['What','q','ماذا'],[aux,'k',pl?'جمع ← do':'مفرد ← does'],[p,'x',''],['do?','n','يفعل']],say:`What ${aux} ${p} do? ${cap91(pl?'they':'it')} ${v3} ${o}.`,ar:`الجواب: ${cap91(pl?'they':'it')} ${v3} ${o}.`,why:`نسأل عن الوظيفة بـ What ${aux} … do?، والجواب بالمضارع البسيط.`};
  return{pieces:[[cap91(aux),'k','في أول السؤال'],[p,'x',''],[v,'n','الفعل الأصلي'],[o+'?','x',''],[`Yes, ${pl?'they':'it'} ${aux}.`,'q','جواب قصير']],say:`${cap91(aux)} ${p} ${v} ${o}? Yes, ${pl?'they':'it'} ${aux}.`,why:`بعد ${aux} يعود الفعل إلى صورته الأصلية بلا s.`}}})};
const LAB91B={title:'ثلاث طرق لقول الوظيفة',w:(el,B)=>N.labB(el,B,{intro:'اختر الجزء والصيغة، وشاهد الجملة. المعنى واحد في الصيغ الأربع.',
 controls:[{k:'p',label:'الجزء',opts:Object.keys(PT91).map(k=>[k,k.replace('the ','')])},{k:'f',label:'الصيغة',opts:[['v','بالفعل'],['purpose','The purpose of'],['function','The function of'],['job','The job of']]}],
 out:({p,f})=>{const [pl,v3,v,o]=PT91[p];
  if(f==='v')return{pieces:[[cap91(p),'x',''],[v3,'n','فعل بالمضارع'],[o+'.','x','']],say:`${cap91(p)} ${v3} ${o}.`,why:'الصيغة الأبسط: الفاعل + الفعل.'};
  return{pieces:[[`The ${f} of`,'q','غرض / وظيفة / عمل'],[p,'x',''],['is to','k','is to'],[v,'n','الفعل الأصلي'],[o+'.','x','']],say:`The ${f} of ${p} is to ${v} ${o}.`,why:'بعد is to يأتي الفعل الأصلي بلا s، حتى لو كان الجزء مفرداً.'}}})};
const FX91={attached:['The handle','is attached to','the door','مثبّت على (ملتصق به)'],connected:['The charger','is connected to','the socket','موصول بـ (سلك أو أنبوب)'],mounted:['The engine','is mounted on','the frame','مركّب على (فوقه)'],suspended:['The lamp','is suspended from','the ceiling','معلّق من (يتدلى)']};
const fxsvg91=k=>{const I=C.ink;const g={attached:`<rect x="230" y="20" width="100" height="100" fill="${C.paper}" stroke="${I}" stroke-width="2"/><rect x="300" y="62" width="22" height="8" rx="3" fill="${C.yel}" stroke="${I}"/>`,
 connected:`<rect x="140" y="40" width="70" height="60" rx="8" fill="${C.paper}" stroke="${I}" stroke-width="2"/><path d="M210 70 C260 70 280 110 340 100" stroke="${I}" stroke-width="3" fill="none"/><rect x="340" y="80" width="60" height="44" fill="#ddd" stroke="${I}" stroke-width="2"/>`,
 mounted:`<rect x="160" y="96" width="240" height="14" fill="${I}"/><rect x="230" y="50" width="100" height="46" rx="6" fill="${C.red}" stroke="${I}" stroke-width="2"/>`,
 suspended:`<rect x="120" y="12" width="320" height="10" fill="${I}"/><path d="M280 22 V70" stroke="${I}" stroke-width="2"/><path d="M255 70 h50 l-12 26 h-26 z" fill="${C.yel}" stroke="${I}" stroke-width="2"/>`}[k];
 return `<svg viewBox="0 0 560 130" aria-hidden="true"><rect width="560" height="130" rx="14" fill="${C.bg}"/>${g}</svg>`};
const LAB91C={title:'كيف يُثبَّت الجزء؟',w:(el,B)=>N.labB(el,B,{intro:'اختر طريقة التثبيت، وشاهد الرسم والجملة. لاحظ حرف الجر الذي يأتي مع كل صفة.',
 controls:[{k:'k',label:'التثبيت',opts:Object.keys(FX91).map(k=>[k,k])}],
 out:({k})=>{const x=FX91[k];return{svg:fxsvg91(k),pieces:[[x[0],'x','الجزء'],[x[1],'k',x[3]],[x[2]+'.','n','الشيء الثاني']],say:`${x[0]} ${x[1]} ${x[2]}.`,why:`${x[1].replace('is ','')}: احفظ الصفة مع حرف جرها.`}}})};
const R91=N.rule({title:'وصف وظيفة الأجزاء وتثبيتها',ref:'ص 68–69',
 intro:`نشرح وصف آلة وأجزائها في ثلاث خطوات مرتبة: وظيفة كل جزء بالمضارع البسيط والسؤال عنها، ثم ثلاث صيغ أخرى للوظيفة، ثم طريقة تثبيت الأجزاء.`,
 parts:[
 {t:'الوظيفة بالمضارع البسيط',short:'ماذا يفعل؟',old:[1],q:'كيف تقول إن المحرك يدير المروحة؟ وكيف تسأل عن وظيفة الدفّات؟',ref:'ص 68',
  lead:`عندما تشرح كيف تعمل آلة، تصف ما يفعله كل جزء دائماً. وما يحدث دائماً يُقال بالمضارع البسيط.`,
  points:[`<b>الجزء المفرد</b> نضيف لفعله ${e('-s')}:<br>${e('The engine drives the fan.')}`,
   `<b>الأجزاء الجمع</b> فعلها بلا ${e('-s')}:<br>${e('The levers control the speed.')}`,
   `<b>السؤال عن الوظيفة:</b> ${e('What does')} + المفرد + ${e('do?')} و ${e('What do')} + الجمع + ${e('do?')}<br>${e('What does the fan do? — It pulls the air in.')}`,
   `<b>السؤال بنعم أو لا:</b> ${e('Does')} أو ${e('Do')} + الجزء + الفعل الأصلي؟<br>${e("Does the engine drive the wheels? — No, it doesn't.")}`],
  grid:{head:['الفاعل','الفعل','مثال'],rows:[['مفرد','+ s','The fan pulls the air in.'],['جمع','بلا s','The rudders steer it.'],['سؤال المفرد','What does … do?','What does the fan do?'],['سؤال الجمع','What do … do?','What do the levers do?']]},
  pairs:[['The fan pull the air in.','The fan pulls the air in.','الفاعل مفرد: نضيف s.'],['What does the fan does?','What does the fan do?','بعد does الفعل الأصلي.']],
  art:art(`<g data-tip="motor: It drives the blades. — المحرك يُدير الشفرات."><rect x="150" y="150" width="60" height="40" rx="8" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(180,210,'motor',{fs:12,w:700})}</g>
    <g data-tip="blades: They push the air forwards. — الشفرات تدفع الهواء للأمام."><circle cx="180" cy="110" r="60" fill="none" stroke="${C.ink}" stroke-width="2"/><path d="M180 110 L180 55 Q205 70 180 110 M180 110 L232 128 Q215 150 180 110 M180 110 L128 128 Q140 100 180 110" fill="${C.blue}" stroke="${C.ink}"/>${TL(260,70,'blades',{fs:12,w:700})}</g>
    <g data-tip="stand: It supports the fan. — القاعدة تحمل المروحة."><rect x="172" y="190" width="16" height="60" fill="${C.paper}" stroke="${C.ink}"/><rect x="130" y="250" width="100" height="14" rx="6" fill="${C.paper}" stroke="${C.ink}"/>${TL(180,284,'stand',{fs:12,w:700})}</g>
    <g data-tip="switch: It controls the speed. — المفتاح يتحكم في السرعة."><circle cx="210" cy="257" r="6" fill="${C.red}"/></g>`,'مروحة كهربائية: محرك وشفرات وقاعدة ومفتاح'),cap:'مروحة من رسمنا. مرّر المؤشر على كل جزء.',labs:[LAB91A,{title:'الفعل',w:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'The motor ___ the blades.',o:['drives','drive','driving'],a:0,why:'motor مفرد: drives.'},{s:'The blades ___ the air forwards.',o:['pushes','push','pushing'],a:1,why:'blades جمع: push.'},{s:'What ___ the switch do?',o:['does','do','is'],a:0}]})}]},
 {t:'الغرض والوظيفة: purpose و function و job',short:'is to …',old:[2],q:'كيف تقول «وظيفة المقود توجيه اللوح» بصيغة أخرى؟',ref:'ص 69',
  lead:`في الكتابة الفنية، مثل دليل المستخدم، نصف الوظيفة كثيراً بجملة أطول تبدأ بكلمة الغرض أو الوظيفة. والمعنى نفسه في كل الصيغ.`,
  points:[`<b>القالب:</b> ${e('The purpose / function / job of')} + الجزء + ${e('is to')} + الفعل الأصلي.<br>${e('The purpose of the handlebar is to steer the board.')}`,
   `<b>بعد</b> ${e('is to')} يأتي الفعل الأصلي بلا ${e('s')} دائماً، حتى لو كان الجزء مفرداً.`,
   `<b>الكلمات الثلاث بمعنى واحد هنا:</b> ${e('purpose')} = الغرض، ${e('function')} = الوظيفة، ${e('job')} = العمل.`],
  grid:{head:['الصيغة','مثال'],rows:[['الفعل','The handlebar steers the board.'],['purpose','The purpose of the handlebar is to steer the board.'],['function','The function of the handlebar is to steer the board.'],['job','The job of the handlebar is to steer the board.']]},
  pairs:[['The purpose of the fan is to pulls air.','The purpose of the fan is to pull air.','بعد is to الفعل الأصلي.'],['The job of the levers are to control speed.','The job of the levers is to control speed.','الفاعل هو job (مفرد): is.']],
  art:art(`<g data-tip="المضارع البسيط"><rect x="30" y="90" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,121,'The stand supports the fan.',{fs:15,w:700})}</g>
    <g data-tip="The purpose of … is to + فعل أصلي"><rect x="20" y="180" width="320" height="56" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,203,'The purpose of the stand',{fs:14,w:700})}${TL(180,224,'is to support the fan.',{fs:14,w:700})}</g>${arrowS(180,144,180,176,C.ink,3)}`,'تحويل الجملة إلى صيغة الغرض'),cap:'التحويل. مرّر المؤشر على كل صيغة.',labs:[LAB91B,{title:'أعد الكتابة',w:(el,B)=>N.typ(el,B,{intro:'أعد الكتابة (أمثلة جديدة):',items:[{q:e('The purpose of the switch is to control the speed.'),a:['The switch controls the speed.']},{q:e('The pump pushes the water up.'),a:['The purpose of the pump is to push the water up.','The job of the pump is to push the water up.','The function of the pump is to push the water up.']}]})}]},
 {t:'التثبيت: attached و connected و mounted و suspended',short:'كيف يُثبَّت؟',old:[3],q:'هل المصباح mounted on السقف أم suspended from السقف؟',ref:'ص 69',
  lead:`نصف أيضاً كيف يتصل كل جزء بغيره. ولكل طريقة صفة، ومع كل صفة حرف جر ثابت يجب أن نحفظه معها.`,
  points:[`<b>القالب:</b> الجزء + ${e('is / are')} + الصفة + حرف الجر + الشيء الثاني.`,
   `${e('attached to')}: مثبّت على شيء وملتصق به. ${e('The handle is attached to the door.')}`,
   `${e('connected to')}: موصول به بسلك أو أنبوب. ${e('The charger is connected to the socket.')}`,
   `${e('mounted on')}: مركّب فوق شيء. ${e('The engine is mounted on the frame.')}`,
   `${e('suspended from')}: معلّق من شيء ويتدلى منه. ${e('The lamp is suspended from the ceiling.')}`],
  grid:{head:['الصفة + حرف الجر','المعنى','مثال'],rows:[['attached to','مثبّت على','a handle attached to a door'],['connected to','موصول بـ','a charger connected to a socket'],['mounted on','مركّب على','an engine mounted on a frame'],['suspended from','معلّق من','a lamp suspended from the ceiling']]},
  pairs:[['The lamp is suspended on the ceiling.','The lamp is suspended from the ceiling.','suspended يأتي معها from.'],['The engine is mounted to the frame.','The engine is mounted on the frame.','mounted يأتي معها on.']],
  art:art(`<g data-tip="suspended from: معلّق من"><line x1="90" y1="40" x2="90" y2="110" stroke="${C.ink}" stroke-width="2"/><path d="M70 110 h40 l-8 22 h-24z" fill="${C.yel}" stroke="${C.ink}"/>${TL(90,155,'suspended',{fs:12,w:700})}</g>
    <g data-tip="mounted on: مركّب فوق"><rect x="236" y="80" width="40" height="26" rx="4" fill="${C.ink}"/><line x1="256" y1="106" x2="240" y2="150" stroke="${C.ink}" stroke-width="2"/><line x1="256" y1="106" x2="272" y2="150" stroke="${C.ink}" stroke-width="2"/>${TL(256,170,'mounted',{fs:12,w:700})}</g>
    <g data-tip="connected to: موصول بسلك"><rect x="60" y="210" width="40" height="40" rx="6" fill="${C.paper}" stroke="${C.ink}"/><path d="M100 230 Q140 200 170 230" fill="none" stroke="${C.ink}" stroke-width="2"/><rect x="168" y="222" width="18" height="16" fill="${C.mut}"/>${TL(120,275,'connected',{fs:12,w:700})}</g>
    <g data-tip="attached to: مثبّت على"><rect x="236" y="200" width="60" height="70" fill="${C.paper}" stroke="${C.ink}"/><rect x="276" y="230" width="22" height="8" rx="3" fill="${C.red}"/>${TL(266,290,'attached',{fs:12,w:700})}</g>`,'أربع طرق للتثبيت'),cap:'أربع طرق للتثبيت. مرّر المؤشر على كل واحدة.',labs:[LAB91C,{title:'التثبيت',w:(el,B)=>N.gaps(el,B,{intro:'اختر العبارة (أمثلة جديدة):',items:[{s:'The TV is ___ the wall with a bracket.',o:['mounted on','suspended from','connected to'],a:0},{s:'The printer is ___ the computer with a USB cable.',o:['attached to','connected to','mounted on'],a:1},{s:'The sign is ___ two chains.',o:['suspended from','mounted on','connected to'],a:0}]})}]}
 ]});
B.lesson({
 id:'u9-l1',unit:9,order:1,pages:'68–69',
 title:'Operation — كيف يعمل؟',
 summary:'وظائف أجزاء الآلة بالمضارع البسيط (What does it do? It drives…)، وصيغ الغرض والوظيفة (The purpose of … is to …)، وأفعال التثبيت attached to / connected to / mounted on / suspended from.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 68–69',html:`<ol><li>تشرح وظيفة كل جزء في آلة: ${e('The engine drives the fan.')}</li><li>تسأل ${e('What does … do?')} و ${e('Does … ?')} وتجيب.</li><li>تكتب الوظيفة بثلاث صيغ: ${e('purpose / function / job')}.</li><li>تصف كيف يُثبّت جزء على آخر.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 68–69',html:vt(VOC91)},
  ...R91.theory,
  {h:'تمارين الكتاب',ref:'ص 68–69',html:
   bk(1,'ص 68','مع زميلك: كيف تتحرك هذه المركبة؟',null)+
   bk(2,'ص 68','ماذا تفعل الأجزاء الرئيسية؟ أكمل الجدول (اكتب اسم الجزء أمام وظيفته).',['engine: drive the fan','fan: pull the air in + force the air down','levers: control the speed and acceleration','handlebar: steer the airboard','body: support the rider'])+
   bk(5,'ص 68','حوارات قصيرة عن أجزاء اللوح، كما في المثال.',["Does the engine drive the wheels? No, it doesn't. So, what does it do? It drives the fan.","Do the levers stop the airboard? No, they don't. So, what do they do? They increase the speed.","Do the handlebars control the brakes? No, they don't. So, what do they do? They steer the airboard."],'البند 1 هو مثال الكتاب.')+
   bk(6,'ص 69','اقرأ المقال عن اللوح وأجب عن الأسئلة الستة.',null,'جزء من نص المقال غير واضح في نسخة الحقيبة الممسوحة؛ اعتمد نص كتابك.')+
   bk(7,'ص 69','أعد كتابة الجمل بالمعنى نفسه (الجزء + الفعل).',['The handlebar steers the airboard. (example)','The levers control the speed of the airboard.','The friction wheel accelerates the airboard.','The fan and the engine propel the airboard forwards.','The skirt holds the air and supports the airboard.','The body and the platform support the rider.'])+
   bk(8,'ص 69','طابق الصور A–D مع الجمل 1–4.',['A → 2 (suspended from)','B → 3 (mounted on)','C → 4 (connected to)','D → 1 (attached to)'],'قراءتنا للصور: مصباح معلّق، كاميرا على حامل، شاحن في مقبس، مقبض على باب.')+
   bk(9,'ص 69','أكمل الجمل الأربع بالعبارات، كل عبارة مرة واحدة.',['suspended from','mounted on','connected to','attached to'])},
  {h:'الاستماع',ref:'ص 68',html:au(47,'ص 68 — التمرينان 3 و 4','استمع وتحقق من جدول الأجزاء، ثم أكمل الحوار.')}
 ],
 stations:[
  {intro:true},
  ...R91.stations,
  {recap:['الوظيفة بالمضارع البسيط: It drives… / They control….','What does … do? و Does …? — No, it doesn\'t.','The purpose / function / job of … is to + فعل أصلي.','attached to · connected to · mounted on · suspended from.']}
 ],
 lab:lab91,
 examples:[
  {title:'مثال 1: سؤال ووظيفة',ref:'ص 68',q:`<p>اسأل عن وظيفة الدفّات (${e('rudders')}) وأجب: تُوجّه الحوامة.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الجمع فنستعمل ${e('do')}: ${e('What do the rudders do?')}`},{t:`الخطوة 2: الفعل بلا s للجمع: ${e('steer')}.`},{t:`الخطوة 3: ${e('They steer the hovercraft.')}`,final:true}]},
  {title:'مثال 2: صيغة الغرض',ref:'ص 69',q:`<p>أعد الكتابة: ${e('The skirt holds the air.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('The purpose of the skirt is to')}.`},{t:`الخطوة 2: الفعل الأصلي ${e('hold')} بلا s.`},{t:`الخطوة 3: ${e('The purpose of the skirt is to hold the air.')}`,final:true}]}
 ],
 quiz:[
  {q:'What does the engine do? It ___ the fan.',o:['drive','drives','driving','is drive'],c:1,e:'مفرد: drives.'},
  {q:'What ___ the levers do?',o:['does','do','is','are'],c:1,e:'جمع: do.'},
  {q:'The purpose of the handlebar is to ___ the board.',o:['steers','steer','steering','steered'],c:1,e:'بعد is to: الفعل الأصلي.'},
  {q:'A lamp hangs from the ceiling. It is ___ the ceiling.',o:['mounted on','suspended from','connected to','attached on'],c:1,e:'suspended from = معلّق من.'},
  {q:'Does the fan cool the engine? (✗)',o:["No, it doesn't.","No, it isn't.","No, it don't.","No, doesn't."],c:0,e:"No, it doesn't."},
  {q:'downwards عكسها:',o:['forwards','backwards','upwards','inwards'],c:2,e:'downwards ≠ upwards.'},
  {q:'propel معناها:',o:['يوقف','يدفع للأمام','يرفع','يبرّد'],c:1,e:'propel = يدفع للأمام.'}
 ]
});

/* =================== 9.2 Hotline =================== */
const LINKS=[['wall','modem','The modem is connected to the phone socket.','Is the modem connected to the phone socket?'],['modem','router','The router is connected to the modem.','Is the router connected to the modem?'],['router','computer','The computer is connected to the router.','Is the computer connected to the router?'],['power','router','The router is connected to the power outlet.','Is the router connected to the power outlet?'],['power','modem','The modem is connected to the power outlet.','Is the modem connected to the power outlet?']];
function lab92(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">وصّل الإنترنت</h3>
  <p class="sub">مبني على التمرينين 3 و 5 ص 70، بإعداد من عندنا. فعّل الوصلات وانظر هل يعمل الإنترنت، ثم اقرأ أسئلة الفني وأجوبتك القصيرة.</p>
  <div class="pk-pic" id="wp"></div>
  <div id="wl"></div>
  <div id="ws"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">مكالمة الدعم</h3><div id="wd"></div></div>
 </div></div>`;
 const $=s=>el.querySelector(s);const on=[1,1,0,1,0];
 const P={wall:[50,40],modem:[130,120],router:[270,120],computer:[368,50],power:[200,212]};
 const draw=()=>{const W=420;let s=`<svg viewBox="0 0 ${W} 240" role="img" aria-label="مخطط توصيل">`;
  LINKS.forEach((l,i)=>{const a=P[l[0]],b=P[l[1]];s+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${on[i]?'var(--on)':'var(--line)'}" stroke-width="${on[i]?4:2}" ${on[i]?'':'stroke-dasharray="6 5"'}/>`});
  Object.entries(P).forEach(([k,[x,y]])=>{s+=`<rect x="${x-44}" y="${y-16}" width="88" height="32" rx="8" fill="var(--surface)" stroke="var(--fg)"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="12" fill="var(--fg)" direction="ltr">${k==='wall'?'phone socket':k==='power'?'power outlet':k}</text>`});
  $('#wp').innerHTML=s+'</svg>';
  $('#wl').innerHTML=LINKS.map((l,i)=>`<label class="pk-sl" style="display:flex;gap:8px;align-items:center"><input type="checkbox" data-i="${i}" ${on[i]?'checked':''} style="width:auto;height:auto"> <span class="en">${l[2].replace('is connected','connected')}</span></label>`).join('');
  el.querySelectorAll('[data-i]').forEach(c=>c.onchange=()=>{on[+c.dataset.i]=c.checked?1:0;draw()});
  const works=on.every(Boolean);
  $('#ws').innerHTML=`<div class="pk-fb ${works?'':'bad'}"><b>${works?'الإنترنت يعمل.':'الإنترنت لا يعمل.'}</b> ${works?'':'ابحث عن الوصلة الناقصة.'}</div>`;
  const first=on.findIndex(x=>!x);
  $('#wd').innerHTML=dl([['Technician',"Hello, this is the IT hotline. Jan speaking. How can I help you?"],['Customer',works?"My internet is working now, thanks.":"My internet doesn't work."]].concat(works?[]:[['Technician',"OK. I'll talk you through it. Are you sitting at the computer now?"],['Customer','Yes, I am.']].concat(LINKS.slice(0,first+1).map((l,i)=>[['Technician',l[3]],['Customer',on[i]?'Yes, it is.':"No, it isn't."]]).flat()).concat([['Technician',`OK. Please connect it now.`]])))+'<p class="pk-ill">الحوار يتغير حسب الوصلات (جديد من عندنا).</p>'};
 draw();
}
const VOC92=[['hotline','خط الدعم',''],['automated message','رسالة آلية',''],['press a key','يضغط زراً',''],['service technician','فني الصيانة',''],['wireless router','موجّه لاسلكي (راوتر)',''],['modem','مودم',''],['power outlet / socket','مقبس الكهرباء',''],['adapter','محوّل (أدابتر)',''],['cable','كابل',''],['plug in','يوصل بالكهرباء',''],['wiring diagram','مخطط التوصيل',''],['digital receiver','جهاز استقبال رقمي',''],['aerial (antenna)','هوائي',''],['in / out','داخل / خارج','IN socket · OUT socket']];
const SHORT=[['Are the lights on?','Yes, they are.',"No, they aren't."],['Is it connected?','Yes, it is.',"No, it isn't."],['Have you sent it?','Yes, I have.',"No, I haven't."],['Does it work?','Yes, it does.',"No, it doesn't."],['Did you go?','Yes, I did.',"No, I didn't."],['Can I speak to him?','Yes, you can.',"No, you can't."]];

/* ===== مختبرات «شرح القاعدة» 9.2 ===== */
const CALL92={start:['Technician',"Hello, you've reached the computer hotline. This is Sam speaking.",'التعريف بالخط وبنفسه'],help:['Technician','How can I help you?','عرض المساعدة'],prob:['Customer',"My printer doesn't work.",'وصف المشكلة'],talk:['Technician',"OK. I'll talk you through it.",'سأرشدك خطوة خطوة'],step:['Technician','Look at the back of the printer.','أمر بفعل أصلي'],check:['Technician','Is the cable connected to the computer?','سؤال فحص']};
const LAB92A={title:'مراحل المكالمة',w:(el,B)=>N.labB(el,B,{intro:'اختر مرحلة من المكالمة، وشاهد العبارة المناسبة لها ومن يقولها.',
 controls:[{k:'s',label:'المرحلة',opts:[['start','1 التعريف'],['help','2 العرض'],['prob','3 المشكلة'],['talk','4 الإرشاد'],['step','5 الخطوة'],['check','6 الفحص']]}],
 out:({s})=>{const x=CALL92[s];return{pieces:[[x[0]+':','q',x[0]==='Technician'?'الفني':'العميل'],[x[1],'n',x[2]]],say:x[1],why:{start:'يبدأ الفني بذكر اسم الخط ثم اسمه: This is … speaking.',help:'ثم يعرض المساعدة.',prob:'العميل يصف المشكلة بالمضارع البسيط.',talk:"I'll talk you through it = سأرشدك خطوة خطوة.",step:'الخطوات أوامر تبدأ بالفعل الأصلي.',check:'وأسئلة الفحص بـ Is / Are … connected to …?'}[s]}}})};
const DEV92={printer:['the printer','the computer',0],cables:['the cables','the router',1],tv:['the TV','the aerial',0],speakers:['the speakers','the amplifier',1]};
const LAB92B={title:'Is … connected to …?',w:(el,B)=>N.labB(el,B,{intro:'اختر الجهاز والجواب، وشاهد السؤال والجواب القصير.',
 controls:[{k:'d',label:'الجهاز',opts:Object.keys(DEV92).map(k=>[k,k])},{k:'a',label:'الجواب',opts:[['y','نعم'],['n','لا']]}],
 out:({d,a})=>{const [x,y,pl]=DEV92[d],be=pl?'Are':'Is',pr=pl?'they':'it',ans=a==='y'?`Yes, ${pr} ${pl?'are':'is'}.`:`No, ${pr} ${pl?"aren't":"isn't"}.`;
  return{pieces:[[be,'k',pl?'جمع ← Are':'مفرد ← Is'],[x,'x','الجهاز'],['connected to','n','موصول بـ'],[y+'?','x',''],[ans,'q','جواب قصير']],say:`${be} ${x} connected to ${y}? ${ans}`,why:`السؤال بـ ${be}، فالجواب القصير يعيد ${pl?'are':'is'}.`}}})};
const AUX92={is:['Is the light on?','it','is',"isn't"],are:['Are the lights on?','they','are',"aren't"],do:['Do you have a router?','I','do',"don't"],does:['Does it work?','it','does',"doesn't"],did:['Did you restart it?','I','did',"didn't"],have:['Have you checked the cable?','I','have',"haven't"],has:['Has it stopped?','it','has',"hasn't"],can:['Can you see a green light?','I','can',"can't"],am:['Are you at the computer?','I','am',"'m not"]};
const LAB92C={title:'الجواب القصير',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل المساعد في السؤال والجواب، وشاهد أن الجواب القصير يعيد الفعل المساعد نفسه.',
 controls:[{k:'x',label:'السؤال يبدأ بـ',opts:Object.keys(AUX92).map(k=>[k,k==='am'?'Are you':k.replace(/^./,c=>c.toUpperCase())])},{k:'a',label:'الجواب',opts:[['y','نعم'],['n','لا']]}],
 out:({x,a})=>{const q=AUX92[x],yes=a==='y',ans=yes?`Yes, ${q[1]} ${q[2]}.`:(x==='am'?"No, I'm not.":`No, ${q[1]} ${q[3]}.`);
  return{pieces:[[q[0],'x','السؤال'],[yes?'Yes,':'No,','q',''],[q[1],'x','الضمير'],[yes?q[2]+'.':(x==='am'?"'m not.":q[3]+'.'),'k','الفعل المساعد نفسه']],say:`${q[0]} ${ans}`,why:x==='am'?'السؤال لك بـ Are you، فتجيب عن نفسك بـ I am / I\'m not.':`السؤال يبدأ بـ ${x}، فالجواب القصير يعيد ${x}${yes?'':' مع not'}.`}}})};
const R92=N.rule({title:'مكالمة الدعم الفني والأجوبة القصيرة',ref:'ص 70–71',
 intro:`نشرح مكالمة الدعم الفني في ثلاث خطوات مرتبة: عبارات المكالمة بترتيبها، ثم السؤال عن التوصيلات، ثم الجواب القصير بالفعل المساعد.`,
 parts:[
 {t:'عبارات مكالمة الدعم',short:'المكالمة',old:[1],q:'بماذا يبدأ الفني المكالمة؟ وماذا يعني I\'ll talk you through it؟',ref:'ص 70',
  lead:`مكالمة خط الدعم تمشي بترتيب ثابت تقريباً، ولكل مرحلة عبارة معروفة. إذا عرفت العبارات بترتيبها فهمت المكالمة وشاركت فيها بسهولة.`,
  points:[`<b>التعريف:</b> يذكر الفني اسم الخط ثم اسمه: ${e("You've reached the computer hotline. This is Sam speaking.")}`,
   `<b>عرض المساعدة:</b> ${e('How can I help you?')}`,
   `<b>وصف المشكلة</b> بالمضارع البسيط: ${e("My printer doesn't work.")}`,
   `<b>الإرشاد:</b> ${e("I'll talk you through it.")} = سأرشدك خطوة خطوة.`,
   `<b>الخطوات</b> أوامر تبدأ بالفعل الأصلي، وبينها أسئلة فحص: ${e('Look at the back. Is the cable connected?')}`],
  html:dl([['Technician',"Hello, you've reached the computer hotline. This is Sam speaking."],['Technician','How can I help you?'],['Customer',"My printer doesn't work."],['Technician',"OK. I'll talk you through it. Look at the back. Is the cable connected to the printer?"]])+'<p class="pk-ill">عبارات المكالمة في حوار جديد من عندنا.</p>',
  art:art(`<g data-tip="العميل يصف المشكلة: My router doesn't work."><circle cx="90" cy="120" r="40" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${T(90,126,'العميل',{ar:1,w:700})}</g>
    <g data-tip="الفني: How can I help you? / I'll talk you through it."><circle cx="270" cy="120" r="40" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${T(270,126,'الفني',{ar:1,w:700})}</g>
    <path d="M135 120 Q180 80 225 120" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 4"/>${TL(180,220,"How can I help you?",{fs:15,w:700})}${TL(180,250,"My router doesn't work.",{fs:15,w:700})}`,'عميل وفني على الهاتف'),cap:'طرفا المكالمة. مرّر المؤشر على كل منهما.',labs:[LAB92A,{title:'الرد',w:(el,B)=>N.cases(el,B,{intro:'اختر الرد المناسب:',cases:[{q:'Hello, is that the IT hotline?',opts:[["Yes, this is Sam speaking. How can I help you?",1,''],["Yes, I'm Sam help.",0,''],["No problem.",0,'']]},{q:'Are you sitting at the computer now?',opts:[['Yes, I am.',1,''],['Yes, I do.',0,'السؤال بـ Are، فالجواب am.'],['Yes, I sit.',0,'']]}]})}]},
 {t:'السؤال عن التوصيلات',short:'Is … connected?',old:[2],q:'كيف تسأل هل السماعات موصولة بالمضخّم؟',ref:'ص 70',
  lead:`أغلب أعطال الأجهزة سببها توصيلة مفصولة، لذلك يكثر الفني من السؤال: هل هذا موصول بذاك؟`,
  points:[`<b>القالب:</b> ${e('Is')} + جهاز مفرد + ${e('connected to')} + الجهاز الثاني؟<br>${e('Is the printer connected to the computer?')}`,
   `<b>مع الجمع</b> نستعمل ${e('Are')}:<br>${e('Are the cables connected to the router?')}`,
   `<b>الجواب القصير</b> يعيد ${e('is')} أو ${e('are')}:<br>${e("Yes, it is. · No, they aren't.")}`],
  grid:{head:['الجهاز','السؤال','الجواب'],rows:[['مفرد','Is the TV connected to the aerial?',"Yes, it is. · No, it isn't."],['جمع','Are the speakers connected to it?',"Yes, they are. · No, they aren't."]]},
  pairs:[['Is the cables connected?','Are the cables connected?','cables جمع: Are.'],['Is the printer connect to it?','Is the printer connected to it?','connected بـ ed، ثم to.']],
  art:art(`${[['modem',80],['router',180],['computer',280]].map(([w,x])=>`<g data-tip="${w}"><rect x="${x-42}" y="110" width="84" height="44" rx="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(x,138,w,{fs:13,w:700})}</g>`).join('')}
    <g data-tip="Is the router connected to the modem?">${arrowS(124,132,136,132,C.grn,3,6)}</g><g data-tip="Is the computer connected to the router?">${arrowS(224,132,236,132,C.grn,3,6)}</g>${TL(180,220,'Is the router connected',{fs:14,w:700})}${TL(180,242,'to the modem?',{fs:14,w:700})}`,'مودم ثم راوتر ثم كمبيوتر'),cap:'ترتيب الوصلات. مرّر المؤشر على الأجهزة والأسهم.',labs:[LAB92B,{title:'اكتب السؤال',w:(el,B)=>N.typ(el,B,{intro:'كوّن السؤال:',items:[{q:'(the printer / the computer)',a:['Is the printer connected to the computer?']},{q:'(the cables / the speakers)',a:['Are the cables connected to the speakers?']}]})}]},
 {t:'الجواب القصير بالفعل المساعد',short:'Yes, it is.',old:[3],q:'إذا سألك الفني Do you have a router? فبماذا تجيب؟',ref:'ص 71',
  lead:`في المكالمة لا نعيد السؤال كله في الجواب، بل نجيب جواباً قصيراً. والقاعدة سهلة: الجواب يعيد الفعل المساعد الذي بدأ به السؤال.`,
  points:[`<b>القالب:</b> ${e('Yes,')} + ضمير + الفعل المساعد. أو ${e('No,')} + ضمير + الفعل المساعد + ${e("n't")}.`,
   `<b>بدأ السؤال بـ</b> ${e('Is / Are')}: الجواب ${e('is / are')}. <b>وبـ</b> ${e('Do / Does / Did')}: الجواب ${e('do / does / did')}. <b>وبـ</b> ${e('Have / Has / Can')}: الجواب ${e('have / has / can')}.`,
   `<b>إذا سُئلت عن نفسك</b> بـ ${e('Are you…?')} فأجب بـ ${e('am')}: ${e("Yes, I am. · No, I'm not.")}`,
   `<b>في جواب «نعم»</b> لا نختصر: ${e('Yes, it is.')} لا ${e("Yes, it's.")}`],
  html:`<div class="tbx"><table class="vt" dir="ltr"><thead><tr><th>Question</th><th>✓</th><th>✗</th></tr></thead><tbody>${SHORT.map(r=>`<tr><td class="en">${r[0]}</td><td class="en">${r[1]}</td><td class="en">${r[2]}</td></tr>`).join('')}</tbody></table></div>`,
  pairs:[['Do you have a router? — Yes, I have.','Yes, I do.','السؤال بـ Do، فالجواب do.'],["Is it on? — Yes, it's.",'Yes, it is.','لا نختصر في جواب نعم.']],
  art:art(`${[['Is …?','it is / it isn\'t',70],['Do …?','I do / I don\'t',130],['Have …?','I have / I haven\'t',190],['Did …?','I did / I didn\'t',250]].map(([q,a,y])=>`<g data-tip="${q} → ${a}"><rect x="30" y="${y-24}" width="300" height="42" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(90,y+3,q,{fs:15,w:700})}${TL(240,y+3,a,{fs:13})}</g>`).join('')}`,'الأفعال المساعدة وأجوبتها'),cap:'كل سؤال وجوابه. مرّر المؤشر على كل سطر.',labs:[LAB92C,{title:'الجواب القصير',w:(el,B)=>N.gaps(el,B,{intro:'اختر الجواب القصير:',items:[{s:'Does your new radio work? No, it ___.',o:["doesn't","isn't","didn't"],a:0},{s:'Has your car broken down? Yes, it ___.',o:['has','is','does'],a:1-1},{s:'Did you go to work yesterday? No, I ___.',o:["didn't","don't","haven't"],a:0}]})}]}
 ]});
B.lesson({
 id:'u9-l2',unit:9,order:2,pages:'70–71',
 title:'Hotline — خط الدعم الفني',
 summary:'لغة المكالمة مع خط الدعم الفني، وتوصيل الراوتر والمودم والكمبيوتر، والأجوبة القصيرة بكل الأفعال المساعدة (is, are, do, does, have, did, can).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 70–71',html:`<ol><li>تتصل بخط الدعم وتشرح المشكلة.</li><li>تسأل وتجيب عن التوصيلات: ${e('Is the router connected to the modem?')}</li><li>تجيب إجابات قصيرة بالفعل المساعد الصحيح.</li><li>تقارن مخططي توصيل وتصف الفرق.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 70–71',html:vt(VOC92)},
  ...R92.theory,
  {h:'تمارين الكتاب',ref:'ص 70–71',html:
   bk(4,'ص 70','مع زميلك: تدرّب على مكالمات مشابهة (العبارات في المربع USEFUL LANGUAGE).',null)+
   bk(5,'ص 70','حوارات أخرى عن المواقف في الصورتين.',null,'انظر المختبر: الحوار يتغير حسب الوصلة الناقصة.')+
   bk(6,'ص 71','اكتب الجواب القصير ✓ و ✗ لكل سؤال.',["Yes, they are. / No, they aren't. (example)","Yes, it is. / No, it isn't.","Yes, I have. / No, I haven't.","Yes, it does. / No, it doesn't.","Yes, I did. / No, I didn't.","Yes, you can. / No, you can't.","Yes, I do. / No, I don't.","Yes, I am. / No, I'm not.","Yes, they do. / No, they don't.","Yes, it has. / No, it hasn't."])+
   bk(8,'ص 71','مهمة ثنائية: ابحث عن الفروق بين مخططك ومخطط زميلك.',null,'مخطط الطالب أ في صفحة ليست في الحقيبة؛ استعمل البطاقتين البديلتين أسفل.')+
   upd('أجهزة مثل <span class="en">VCR</span> (مسجّل الفيديو) ومقبس <span class="en">SCART</span> صارت نادرة؛ اليوم تُوصل الأجهزة غالباً بكابل <span class="en">HDMI</span>. اللغة نفسها (connected to, IN, OUT) لم تتغير.')},
  {h:'الاستماع',ref:'ص 70–71',html:au(48,'ص 70 — التمرين 1','استمع للرسالة الآلية: ما الأزرار الثلاثة التي ضغطها العميل؟')+au(49,'ص 70 — التمرين 2','ماذا قال الفني؟ أكمل النص.')+au(50,'ص 70 — التمرين 3','ما أخطاء العميل في توصيل الراوتر؟ احذف الكلمات الخطأ.')+au(51,'ص 71 — التمرين 7','استمع للأسئلة والأجوبة وكرر كل جواب.')},
  {h:'مهمة ثنائية بديلة (إضافة من خارج الكتاب)',ref:'ص 71 — التمرين 8',html:`<p>كل طالب يصف مخططه ويسأل زميله، حتى يجدا <b>ثلاثة فروق</b>.</p>`+ab(eb(['The TV is connected to the receiver.','The receiver is connected to the aerial.','The speakers are connected to the TV.','The router is on the left of the TV.']),eb(['The TV is connected to the receiver.','The receiver is connected to the power socket only.','The speakers are connected to the receiver.','The router is on the right of the TV.']))+`<p>الفروق: (1) وصلة الهوائي، (2) مكان وصل السماعات، (3) مكان الراوتر.</p>`}
 ],
 stations:[
  {intro:true},
  ...R92.stations,
  {recap:["عبارات خط الدعم: This is … speaking. How can I help you? I'll talk you through it.",'Is the … connected to the …? — Yes, it is. / No, it isn\'t.','الجواب القصير يعيد الفعل المساعد: do, does, did, is, are, have, has, can.','Are you …? — Yes, I am. / No, I\'m not.']}
 ],
 lab:lab92,
 examples:[
  {title:'مثال 1: سؤال توصيل وجوابه',ref:'ص 70',q:`<p>الفني يسأل هل الكمبيوتر موصول بالراوتر، والجواب لا.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e('Is the computer connected to the router?')}`},{t:`الخطوة 2: الجواب المنفي بـ ${e("isn't")}.`},{t:`الخطوة 3: ${e("No, it isn't.")}`,final:true}]},
  {title:'مثال 2: جواب قصير',ref:'ص 71',q:`<p>${e('Do those speakers cost a lot of money?')} (✓)</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: السؤال يبدأ بـ ${e('Do')}.`},{t:`الخطوة 2: الفاعل ${e('those speakers')} → ${e('they')}.`},{t:`الخطوة 3: ${e('Yes, they do.')}`,final:true}]}
 ],
 quiz:[
  {q:'Is the router connected to the modem? (✓)',o:['Yes, it is.','Yes, it does.','Yes, it connected.','Yes, is it.'],c:0,e:'Is → is.'},
  {q:'Have you sent the email? (✗)',o:["No, I didn't.","No, I haven't.","No, I don't.","No, I'm not."],c:1,e:'Have → haven\'t.'},
  {q:'Are you sitting at the computer? (✓)',o:['Yes, I do.','Yes, I am.','Yes, I sit.','Yes, I are.'],c:1,e:'Are you → I am.'},
  {q:'ما يقوله الفني ليرشدك خطوة خطوة:',o:["I'll talk you through it.","I'll speak you.","I talk it.","Through it I'll talk."],c:0,e:"I'll talk you through it."},
  {q:'Did you go to the cinema yesterday? (✗)',o:["No, I didn't.","No, I don't.","No, I wasn't.","No, I haven't."],c:0,e:'Did → didn\'t.'},
  {q:'power outlet معناها:',o:['زر التشغيل','مقبس الكهرباء','المودم','الكابل'],c:1,e:'power outlet = مقبس الكهرباء.'},
  {q:'Can I speak to your brother? (✗)',o:["No, you can't.","No, I can't.","No, you don't.","No, can't."],c:0,e:"Can I → you can't."}
 ]
});

/* =================== 9.3 User guide =================== */
/* مخطط أعطال طابعة (من عندنا): عقدة {q سؤال، yes، no} أو {a تعليمات، next} */
const FLOW={start:{a:'Press the print button.',next:'q1'},q1:{q:'Does it print?',yes:'end',no:'q2'},q2:{q:'Is the cable loose?',yes:'f1',no:'q3'},f1:{a:'Connect the cable.',next:'q1'},q3:{q:'Is there any paper in the printer?',yes:'q4',no:'f2'},f2:{a:'Put some paper in the printer.',next:'q1'},q4:{q:'Is the power light on?',yes:'f4',no:'f3'},f3:{a:'Switch on the printer.',next:'q1'},f4:{a:'Switch off, wait ten seconds, and switch on again.',next:'end2'},end:{a:'Good! The printer works.',done:1},end2:{a:'If it still does not print, call the hotline.',done:1}};
const IF={q2:['the cable is loose','connect it'],q3:['there isn\'t any paper','put some paper in the printer'],q4:['the power light is off','switch on the printer']};
function lab93(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">مخطط أعطال: الطابعة لا تطبع</h3>
  <p class="sub">مبني على «Language» ص 72، بمخطط جديد من عندنا. أجب Yes أو No في كل سؤال، وشاهد مسارك وجمل If التي تكتب الدليل.</p>
  <div id="fs"></div><div class="ph-row" id="fb"></div><ol class="ph-try en" id="fp" dir="ltr" style="text-align:left"></ol>
  <button class="btn" id="fr">ابدأ من جديد</button>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">دليل الأعطال بجمل If</h3>${eb(Object.values(IF).map(([c,i])=>`If ${c}, ${i}.`))}<p class="pk-ill">If + المضارع البسيط، ثم أمر (فعل أصلي في أول الجملة الثانية).</p></div>
 </div></div>`;
 const $=s=>el.querySelector(s);let cur='start',path=[];
 const draw=()=>{const n=FLOW[cur];
  if(n.q){$('#fs').innerHTML=`<div class="pk-fb">${eb(n.q)}</div>`;$('#fb').innerHTML=`<button class="btn pri" data-y>YES</button><button class="btn" data-n>NO</button>`;
   el.querySelector('[data-y]').onclick=()=>{path.push(`${n.q} — Yes.`);cur=n.yes;draw()};el.querySelector('[data-n]').onclick=()=>{path.push(`${n.q} — No.`);cur=n.no;draw()}}
  else{$('#fs').innerHTML=`<div class="pk-fb ${n.done?'':'bad'}" style="border-inline-start-color:var(--on)">${eb(n.a)}</div>`;$('#fb').innerHTML=n.done?'':`<button class="btn pri" data-c>تم ←</button>`;
   if(!n.done)el.querySelector('[data-c]').onclick=()=>{path.push(n.a);cur=n.next;draw()}}
  $('#fp').innerHTML=path.map(p=>`<li>${p}</li>`).join('')};
 $('#fr').onclick=()=>{cur='start';path=[];draw()};draw();
}
const VOC93=[['user guide','دليل المستخدم',''],['troubleshooting','تشخيص الأعطال وحلها',''],['flow chart','مخطط سير',''],['power button','زر التشغيل',''],['LED','مصباح بيان صغير',''],['boot up','يبدأ التشغيل (الإقلاع)',''],['disk drive','محرك الأقراص',''],['power source','مصدر الكهرباء',''],['starter motor','محرك بدء التشغيل (السلف)',''],['flat battery','بطارية فارغة',''],['recharge','يعيد الشحن',''],['loose','غير محكم (مرتخٍ)',''],['switch on / off','يشغّل / يطفئ',''],['replace','يستبدل','']];

/* ===== مختبرات «شرح القاعدة» 9.3 ===== */
const IF93={car:['the car',"doesn't start",'starts','check the battery','drive away','السيارة'],light:['the light','is off','is on','press the power button','wait ten seconds','الضوء'],screen:['the screen','is dark','is bright','press any key','enter your password','الشاشة'],paper:['the printer','has no paper','has paper','put some paper in the tray','press Print','الطابعة']};
const LAB93A={title:'ركّب جملة If',w:(el,B)=>N.labB(el,B,{intro:'اختر الجهاز والحالة، وشاهد جملة If وأمرها. ثم بدّل ترتيب الجزأين.',
 controls:[{k:'d',label:'الجهاز',opts:Object.keys(IF93).map(k=>[k,IF93[k][5]])},{k:'c',label:'الحالة',opts:[['no','الحالة السيئة'],['yes','الحالة الجيدة']]},{k:'o',label:'الترتيب',opts:[['if','If أولاً'],['cmd','الأمر أولاً']]}],
 out:({d,c,o})=>{const x=IF93[d],st=c==='no'?x[1]:x[2],cmd=c==='no'?x[3]:x[4];
  const A=[['If','q','إذا'],[x[0],'x',''],[st+(o==='if'?',':''),'k','الحالة: مضارع بسيط']],Bp=[[(o==='if'?cmd:cmd.replace(/^./,m=>m.toUpperCase())),'n','الأمر: فعل أصلي']];
  const pieces=o==='if'?[...A,[cmd+'.','n','الأمر: فعل أصلي']]:[[cmd.replace(/^./,m=>m.toUpperCase()),'n','الأمر: فعل أصلي'],['if','q','إذا'],[x[0],'x',''],[st+'.','k','الحالة']];
  return{pieces,say:o==='if'?`If ${x[0]} ${st}, ${cmd}.`:`${cmd.replace(/^./,m=>m.toUpperCase())} if ${x[0]} ${st}.`,why:o==='if'?'إذا بدأت بـ If نضع فاصلة بعد الحالة.':'إذا بدأت بالأمر فلا فاصلة.'}}})};
const FL93={car:['Does the car start?','the car starts','drive away',"the car doesn't start",'check the battery'],light:['Is the light on?','the light is on','wait ten seconds','the light is off','press the power button']};
const fsvg93=(k,b)=>{const x=FL93[k],I=C.ink,on=(v)=>b===v?C.yel:C.paper;
 return `<svg viewBox="0 0 560 170" aria-hidden="true"><rect width="560" height="170" rx="14" fill="${C.bg}"/>
 <path d="M280 14 L370 50 L280 86 L190 50 Z" fill="${C.paper}" stroke="${I}" stroke-width="2"/>${TL(280,55,x[0],{fs:11,w:700})}
 <path d="M190 50 H110 V110" stroke="${I}" stroke-width="2" fill="none"/>${TL(150,42,'Yes',{fs:12,w:700})}
 <path d="M370 50 H450 V110" stroke="${I}" stroke-width="2" fill="none"/>${TL(410,42,'No',{fs:12,w:700})}
 <rect x="40" y="110" width="140" height="40" rx="6" fill="${on('y')}" stroke="${I}" stroke-width="2"/>${TL(110,135,x[2],{fs:11})}
 <rect x="380" y="110" width="140" height="40" rx="6" fill="${on('n')}" stroke="${I}" stroke-width="2"/>${TL(450,135,x[4],{fs:11})}</svg>`};
const LAB93B={title:'من مخطط السير إلى الجمل',w:(el,B)=>N.labB(el,B,{intro:'اختر المخطط والفرع (Yes أو No)، وشاهد الفرع يتحول إلى جملة If.',
 controls:[{k:'k',label:'المخطط',opts:[['car','السيارة'],['light','الضوء']]},{k:'b',label:'الفرع',opts:[['y','Yes'],['n','No']]}],
 out:({k,b})=>{const x=FL93[k],y=b==='y',cond=y?x[1]:x[3],cmd=y?x[2]:x[4];
  return{svg:fsvg93(k,b),pieces:[['If','q','من المعيّن'],[cond+',','k','جواب السؤال'],[cmd+'.','n','من المستطيل']],say:`If ${cond}, ${cmd}.`,why:'المعيّن سؤال، وجوابه يصير الحالة بعد If، والمستطيل يصير الأمر.'}}})};
const R93=N.rule({title:'تعليمات الشرط بـ If ومخطط السير',ref:'ص 72–73',
 intro:`نشرح كتابة دليل الأعطال في خطوتين مرتبتين: جملة الشرط بـ ${e('If')} مع الأمر، ثم تحويل مخطط السير إلى جمل.`,
 parts:[
 {t:'If + الحالة، ثم الأمر',short:'If …, do …',old:[1],q:'كيف تكتب: «إذا لم تعمل السيارة، افحص البطارية»؟',ref:'ص 72',
  lead:`دليل الأعطال يخبر المستخدم ماذا يفعل في كل حالة: إذا حدث كذا فافعل كذا. ولهذا نستعمل جملة شرط من جزأين.`,
  points:[`<b>الجزء الأول</b> (الحالة): ${e('If')} + جملة بالمضارع البسيط.<br>${e("If the car doesn't start,")}`,
   `<b>الجزء الثاني</b> (ما تفعله): أمر يبدأ بالفعل الأصلي.<br>${e('check the battery.')}`,
   `<b>الفاصلة:</b> إذا بدأت بـ ${e('If')} نضع فاصلة بعد الحالة. وإذا بدأت بالأمر فلا فاصلة:<br>${e('Check the battery if the car doesn\'t start.')}`,
   `<b>لا نستعمل will</b> في جزء ${e('If')}: نقول ${e('If the light is off')} لا ${e('If the light will be off')}.`],
  grid:{head:['الجزء','الصيغة','مثال'],rows:[['الحالة','If + مضارع بسيط','If the light is off,'],['الأمر','فعل أصلي','press the power button.']]},
  pairs:[['If the light is off, you pressing the button.','If the light is off, press the button.','الأمر يبدأ بالفعل الأصلي.'],["If the car won't start, check the battery.","If the car doesn't start, check the battery.",'في جزء If المضارع البسيط.']],
  art:art(`<g data-tip="الحالة: If + مضارع بسيط"><rect x="20" y="100" width="160" height="60" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(100,126,"If the AC doesn't",{fs:13,w:700})}${TL(100,146,'work,',{fs:13,w:700})}</g>
    <g data-tip="الأمر: فعل أصلي في البداية"><rect x="190" y="100" width="150" height="60" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(265,126,'check the',{fs:13,w:700})}${TL(265,146,'power.',{fs:13,w:700})}</g>`,'جزءا جملة If'),cap:'جزءا الجملة. مرّر المؤشر على كل جزء.',labs:[LAB93A,{title:'If',w:(el,B)=>N.gaps(el,B,{intro:'اختر الصحيح:',items:[{s:"If the screen ___ dark, press any key.",o:['is','will be','be'],a:0},{s:"If the fan doesn't turn, ___ the fuse.",o:['check','checks','to check'],a:0,why:'الأمر: فعل أصلي.'},{s:"___ the battery is flat, recharge it.",o:['If','When will','Does'],a:0}]})}]},
 {t:'من مخطط السير إلى الجمل',short:'مخطط السير',old:[2],q:'في مخطط السير، ماذا يعني المعيّن؟ وكيف يصير فرعه جملة؟',ref:'ص 72–73',
  lead:`كثير من أدلة الأعطال مرسومة مخطط سير. ولكي تقرأه بالإنجليزي أو تحوّله إلى نص، تحتاج أن تعرف معنى كل شكل.`,
  points:[`<b>المعيّن</b> سؤال جوابه ${e('Yes')} أو ${e('No')}: ${e('Does the car start?')}`,
   `<b>المستطيل</b> خطوة، أي أمر: ${e('Drive away.')}`,
   `<b>كل فرع</b> من المعيّن يصير جملة ${e('If')}: جواب السؤال هو الحالة، والمستطيل هو الأمر.<br>${e('If the car starts, drive away.')}<br>${e("If the car doesn't start, check the battery.")}`],
  grid:{head:['في المخطط','يصير في الجملة','مثال'],rows:[['المعيّن (سؤال)','الحالة بعد If','If the car starts,'],['المستطيل (خطوة)','الأمر','drive away.']]},
  art:art(`<g data-tip="سؤال (معيّن): Does it start?"><path d="M180 50 L250 100 L180 150 L110 100Z" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,104,'Does it start?',{fs:12,w:700})}</g>
    <g data-tip="Yes → If it starts, drive away.">${arrowS(250,100,300,100,C.grn,3,8)}${TL(300,84,'YES',{fs:11,c:C.grn,w:700})}<rect x="270" y="110" width="80" height="34" rx="6" fill="${C.paper}" stroke="${C.ink}"/>${TL(310,131,'Drive away',{fs:11})}</g>
    <g data-tip="No → If it doesn't start, check the battery.">${arrowS(180,150,180,200,C.red,3,8)}${TL(200,180,'NO',{fs:11,c:C.red,w:700})}<rect x="120" y="204" width="120" height="34" rx="6" fill="${C.paper}" stroke="${C.ink}"/>${TL(180,225,'Check the battery',{fs:11})}</g>`,'معيّن بسؤال وفرعا نعم ولا'),cap:'معيّن وفرعان. مرّر المؤشر على كل فرع.',labs:[LAB93B,{title:'رتّب',w:(el,B)=>N.order(el,B,{intro:'رتّب خطوات دليل تشغيل جهاز عرض (من عندنا):',steps:['Press the power button.',"If the light doesn't come on, check the cable.",'If the cable is loose, connect it.','Press the power button again.']})}]}
 ]});
B.lesson({
 id:'u9-l3',unit:9,order:3,pages:'72–73',
 title:'User guide — دليل المستخدم',
 summary:'تعليمات حل الأعطال بجمل If (If the light is off, press the button)، وقراءة مخطط السير ورسمه، وكتابة دليل أعطال من حوار، والأجوبة القصيرة في التعارف.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 72–73',html:`<ol><li>تكتب تعليمات بشرط: ${e('If …, do ….')}</li><li>تقرأ مخطط سير (Yes / No) وترسمه من نص.</li><li>تحوّل حوار دعم فني إلى دليل أعطال مكتوب.</li><li>تجيب إجابات قصيرة في حديث اجتماعي.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 72–73',html:vt(VOC93)},
  ...R93.theory,
  {h:'تمارين الكتاب',ref:'ص 72–73',html:
   bk(2,'ص 72','ارسم مخطط سير من حلول دليل الأعطال (الكمبيوتر المحمول).',null,'السؤال في كل معيّن، والحل في مستطيل بعده، والفرع No ينتقل للحل التالي.')+
   bk(3,'ص 72','كوّن جملاً بـ If من الحوارات الست القصيرة.',["If the light isn't on, press the switch. (example)","If the airboard doesn't start, turn the key.","If there aren't any numbers on the screen, press the keys.","If the LEDs are off, push the power button.","If the battery is flat, either replace it or recharge it.","If the speakers work, connect them to the computer."])+
   bk(4,'ص 73','ارسم مخطط سير من النص (السيارة).',['Turn the key.','Does the car start? Yes → Drive away.','No → Check the battery.','Does the battery work? No → Recharge it.','Yes → Check the starter motor.'])+
   bk(5,'ص 73','اكتب دليل أعطال من ست جمل من حوار الطابعة.',['If you can\'t print, check the cable between the printer and the computer.','If the cable is loose, connect it and check the power.','If the power is off, switch it on and try to print.','If it doesn\'t print, check the paper.','If there isn\'t any paper, put some paper in the printer and try again.','If it still doesn\'t print, switch off, wait ten seconds and switch on again.'],'صياغتنا؛ أي صياغة صحيحة بالقالب نفسه مقبولة.')+
   bk(6,'ص 73','أكمل الحوارات بأجوبة قصيرة.',["No, I don't.","No, I don't.","No, I'm not.","Yes, we have.","No, I didn't."])+
   bk(8,'ص 73','مع زميلك: حوارات مشابهة بالمعلومات المعطاة.',null)},
  {h:'الاستماع',ref:'ص 72',html:au(52,'ص 72 — التمرين 1','استمع وأكمل مخطط السير.')}
 ],
 stations:[
  {intro:true},
  ...R93.stations,
  {recap:['If + مضارع بسيط، ثم أمر بفعل أصلي: If the light is off, press the button.','في مخطط السير: المعيّن سؤال، والمستطيل خطوة، وكل فرع جملة If.','دليل الأعطال يُكتب بالترتيب، سطر لكل حالة.']}
 ],
 lab:lab93,
 examples:[
  {title:'مثال 1: من حوار قصير إلى If',ref:'ص 72',q:`<p>${e("Is the screen dark? — Yes, it is. — OK. Press any key.")}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الحالة ${e('the screen is dark')}.`},{t:`الخطوة 2: الأمر ${e('press any key')}.`},{t:`الخطوة 3: ${e('If the screen is dark, press any key.')}`,final:true}]},
  {title:'مثال 2: فرع النفي',ref:'ص 73',q:`<p>${e("Does the radio work? — No. → Check the adapter.")}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: نفي المضارع البسيط ${e("doesn't work")}.`},{t:`الخطوة 2: ${e("If the radio doesn't work,")}`},{t:`الخطوة 3: ${e("If the radio doesn't work, check the adapter.")}`,final:true}]}
 ],
 quiz:[
  {q:"If the car ___ start, check the battery.",o:["doesn't","won't","isn't","not"],c:0,e:"المضارع البسيط المنفي: doesn't."},
  {q:"If the light is off, ___ the power button.",o:['presses','press','pressing','to press'],c:1,e:'الأمر: فعل أصلي.'},
  {q:'في مخطط السير، المعيّن يحتوي:',o:['خطوة (أمر)','سؤال جوابه نعم أو لا','النهاية فقط','اسم الجهاز'],c:1,e:'المعيّن = سؤال.'},
  {q:'flat battery:',o:['بطارية مسطحة جديدة','بطارية فارغة','بطارية مشحونة','بطارية صغيرة'],c:1,e:'flat = فارغة.'},
  {q:"Do you live near here? (✗)",o:["No, I don't.","No, I'm not.","No, I didn't.","No, I live."],c:0,e:"Do → don't."},
  {q:'loose cable:',o:['كابل مقطوع','كابل غير محكم التوصيل','كابل جديد','كابل طويل'],c:1,e:'loose = مرتخٍ.'}
 ]
});
})(PLCBOOK);

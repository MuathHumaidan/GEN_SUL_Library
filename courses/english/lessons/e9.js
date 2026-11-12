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

B.lesson({
 id:'u9-l1',unit:9,order:1,pages:'68–69',
 title:'Operation — كيف يعمل؟',
 summary:'وظائف أجزاء الآلة بالمضارع البسيط (What does it do? It drives…)، وصيغ الغرض والوظيفة (The purpose of … is to …)، وأفعال التثبيت attached to / connected to / mounted on / suspended from.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 68–69',html:`<ol><li>تشرح وظيفة كل جزء في آلة: ${e('The engine drives the fan.')}</li><li>تسأل ${e('What does … do?')} و ${e('Does … ?')} وتجيب.</li><li>تكتب الوظيفة بثلاث صيغ: ${e('purpose / function / job')}.</li><li>تصف كيف يُثبّت جزء على آخر.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 68–69',html:vt(VOC91)},
  {h:'الوظيفة بالمضارع البسيط',ref:'ص 68',html:`<p>نصف ما يفعله الجزء دائماً بالمضارع البسيط: المفرد يأخذ ${e('-s')}، والجمع لا:</p>${eb(['The fan <b>pulls</b> the air in.','The levers <b>control</b> the speed.','<b>What does</b> the engine <b>do</b>? It drives the fan.','<b>Does</b> the fan <b>cool</b> the engine? No, it <b>doesn\'t</b>.'])}`},
  {h:'الغرض والوظيفة',ref:'ص 69',html:`${eb(['The handlebar steers the board.','= The <b>purpose</b> of the handlebar <b>is to steer</b> the board.','= The <b>job</b> of the handlebar <b>is to steer</b> the board.'])}<p>بعد ${e('is to')} الفعل الأصلي بلا ${e('s')}.</p>`},
  {h:'التثبيت',ref:'ص 69',html:`${vt([['X is attached to Y','X مثبّت على Y (ملتصق به)','a handle attached to a door'],['X is connected to Y','X موصول بـ Y (سلك أو أنبوب)','a charger connected to a socket'],['X is mounted on Y','X مركّب فوق Y','a camera mounted on a stand'],['X is suspended from Y','X معلّق من Y','a lamp suspended from the ceiling']])}`},
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
  {st:1,short:'ماذا يفعل؟',title:'وظيفة كل جزء',q:'في المروحة الكهربائية: ماذا يفعل المحرك؟ وماذا تفعل الشفرات؟',ref:'ص 68',
   art:art(`<g data-tip="motor: It drives the blades. — المحرك يُدير الشفرات."><rect x="150" y="150" width="60" height="40" rx="8" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(180,210,'motor',{fs:12,w:700})}</g>
    <g data-tip="blades: They push the air forwards. — الشفرات تدفع الهواء للأمام."><circle cx="180" cy="110" r="60" fill="none" stroke="${C.ink}" stroke-width="2"/><path d="M180 110 L180 55 Q205 70 180 110 M180 110 L232 128 Q215 150 180 110 M180 110 L128 128 Q140 100 180 110" fill="${C.blue}" stroke="${C.ink}"/>${TL(260,70,'blades',{fs:12,w:700})}</g>
    <g data-tip="stand: It supports the fan. — القاعدة تحمل المروحة."><rect x="172" y="190" width="16" height="60" fill="${C.paper}" stroke="${C.ink}"/><rect x="130" y="250" width="100" height="14" rx="6" fill="${C.paper}" stroke="${C.ink}"/>${TL(180,284,'stand',{fs:12,w:700})}</g>
    <g data-tip="switch: It controls the speed. — المفتاح يتحكم في السرعة."><circle cx="210" cy="257" r="6" fill="${C.red}"/></g>`,'مروحة كهربائية: محرك وشفرات وقاعدة ومفتاح'),
   cap:'مروحة من رسمنا. مرّر المؤشر على كل جزء.',
   side:[{tip:'الوظيفة = فعل بالمضارع البسيط: <span class="en">It drives… / They push…</span>'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'The motor ___ the blades.',o:['drives','drive','driving'],a:0,why:'motor مفرد: drives.'},{s:'The blades ___ the air forwards.',o:['pushes','push','pushing'],a:1,why:'blades جمع: push.'},{s:'What ___ the switch do?',o:['does','do','is'],a:0}]}),title:'مختبر مصغّر: الفعل'}]},
  {st:2,short:'الغرض',title:'The purpose of … is to …',q:'كيف تقول «وظيفة القاعدة أن تحمل المروحة»؟',ref:'ص 69',
   art:art(`<g data-tip="المضارع البسيط"><rect x="30" y="90" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,121,'The stand supports the fan.',{fs:15,w:700})}</g>
    <g data-tip="The purpose of … is to + فعل أصلي"><rect x="20" y="180" width="320" height="56" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,203,'The purpose of the stand',{fs:14,w:700})}${TL(180,224,'is to support the fan.',{fs:14,w:700})}</g>${arrowS(180,144,180,176,C.ink,3)}`,'تحويل الجملة إلى صيغة الغرض'),
   cap:'التحويل. مرّر المؤشر على كل صيغة.',
   side:[{tip:'<span class="en">supports</span> تصير <span class="en">is to support</span>: نحذف s.'}],
   body:[{widget:(el,B)=>N.typ(el,B,{intro:'أعد الكتابة (أمثلة جديدة):',items:[{q:e('The purpose of the switch is to control the speed.'),a:['The switch controls the speed.']},{q:e('The pump pushes the water up.'),a:['The purpose of the pump is to push the water up.','The job of the pump is to push the water up.','The function of the pump is to push the water up.']}]}),title:'مختبر مصغّر: أعد الكتابة'}]},
  {st:3,short:'التثبيت',title:'attached / connected / mounted / suspended',q:'المصباح فوق الطاولة يتدلى من السقف: أي عبارة؟',ref:'ص 69',
   art:art(`<g data-tip="suspended from: معلّق من"><line x1="90" y1="40" x2="90" y2="110" stroke="${C.ink}" stroke-width="2"/><path d="M70 110 h40 l-8 22 h-24z" fill="${C.yel}" stroke="${C.ink}"/>${TL(90,155,'suspended',{fs:12,w:700})}</g>
    <g data-tip="mounted on: مركّب فوق"><rect x="236" y="80" width="40" height="26" rx="4" fill="${C.ink}"/><line x1="256" y1="106" x2="240" y2="150" stroke="${C.ink}" stroke-width="2"/><line x1="256" y1="106" x2="272" y2="150" stroke="${C.ink}" stroke-width="2"/>${TL(256,170,'mounted',{fs:12,w:700})}</g>
    <g data-tip="connected to: موصول بسلك"><rect x="60" y="210" width="40" height="40" rx="6" fill="${C.paper}" stroke="${C.ink}"/><path d="M100 230 Q140 200 170 230" fill="none" stroke="${C.ink}" stroke-width="2"/><rect x="168" y="222" width="18" height="16" fill="${C.mut}"/>${TL(120,275,'connected',{fs:12,w:700})}</g>
    <g data-tip="attached to: مثبّت على"><rect x="236" y="200" width="60" height="70" fill="${C.paper}" stroke="${C.ink}"/><rect x="276" y="230" width="22" height="8" rx="3" fill="${C.red}"/>${TL(266,290,'attached',{fs:12,w:700})}</g>`,'أربع طرق للتثبيت'),
   cap:'أربع طرق للتثبيت. مرّر المؤشر على كل واحدة.',
   side:[{tip:'<span class="en">suspended from</span> من فوق، <span class="en">mounted on</span> فوق شيء، <span class="en">connected to</span> بسلك أو أنبوب، <span class="en">attached to</span> ملتصق أو مثبّت ببراغٍ.'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر العبارة (أمثلة جديدة):',items:[{s:'The TV is ___ the wall with a bracket.',o:['mounted on','suspended from','connected to'],a:0},{s:'The printer is ___ the computer with a USB cable.',o:['attached to','connected to','mounted on'],a:1},{s:'The sign is ___ two chains.',o:['suspended from','mounted on','connected to'],a:0}]}),title:'مختبر مصغّر: التثبيت'}]},
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

B.lesson({
 id:'u9-l2',unit:9,order:2,pages:'70–71',
 title:'Hotline — خط الدعم الفني',
 summary:'لغة المكالمة مع خط الدعم الفني، وتوصيل الراوتر والمودم والكمبيوتر، والأجوبة القصيرة بكل الأفعال المساعدة (is, are, do, does, have, did, can).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 70–71',html:`<ol><li>تتصل بخط الدعم وتشرح المشكلة.</li><li>تسأل وتجيب عن التوصيلات: ${e('Is the router connected to the modem?')}</li><li>تجيب إجابات قصيرة بالفعل المساعد الصحيح.</li><li>تقارن مخططي توصيل وتصف الفرق.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 70–71',html:vt(VOC92)},
  {h:'لغة المكالمة',ref:'ص 70',html:dl([['Technician',"Hello, you've reached the computer hotline. This is Sam speaking."],['Technician','How can I help you?'],['Customer',"My printer doesn't work."],['Technician',"OK. I'll talk you through it. Look at the back. Is the cable connected to the printer?"]])+'<p class="pk-ill">عبارات المكالمة في حوار جديد من عندنا.</p>'},
  {h:'الأجوبة القصيرة',ref:'ص 71',html:`<p>الجواب القصير يعيد <b>الفعل المساعد</b> الذي في السؤال:</p><div class="tbx"><table class="vt" dir="ltr"><thead><tr><th>Question</th><th>✓</th><th>✗</th></tr></thead><tbody>${SHORT.map(r=>`<tr><td class="en">${r[0]}</td><td class="en">${r[1]}</td><td class="en">${r[2]}</td></tr>`).join('')}</tbody></table></div>`},
  {note:'<b>توضيح للمتدرب:</b> إذا سألك <span class="en">Do you…?</span> فأجب بـ <span class="en">do</span>، وإذا سألك <span class="en">Are you…?</span> فأجب بـ <span class="en">am</span>: <span class="en">Are you sitting at the computer? — Yes, I am.</span>'},
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
  {st:1,short:'المكالمة',title:'مكالمة خط الدعم',q:'ماذا تقول عندما يرد الفني: How can I help you؟',ref:'ص 70',
   art:art(`<g data-tip="العميل يصف المشكلة: My router doesn't work."><circle cx="90" cy="120" r="40" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${T(90,126,'العميل',{ar:1,w:700})}</g>
    <g data-tip="الفني: How can I help you? / I'll talk you through it."><circle cx="270" cy="120" r="40" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${T(270,126,'الفني',{ar:1,w:700})}</g>
    <path d="M135 120 Q180 80 225 120" fill="none" stroke="${C.ink}" stroke-width="2" stroke-dasharray="5 4"/>${TL(180,220,"How can I help you?",{fs:15,w:700})}${TL(180,250,"My router doesn't work.",{fs:15,w:700})}`,'عميل وفني على الهاتف'),
   cap:'طرفا المكالمة. مرّر المؤشر على كل منهما.',
   side:[{tip:'عبارات الفني: <span class="en">This is … speaking. · How can I help you? · I\'ll talk you through it. · Look at the back.</span>'}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر الرد المناسب:',cases:[{q:'Hello, is that the IT hotline?',opts:[["Yes, this is Sam speaking. How can I help you?",1,''],["Yes, I'm Sam help.",0,''],["No problem.",0,'']]},{q:'Are you sitting at the computer now?',opts:[['Yes, I am.',1,''],['Yes, I do.',0,'السؤال بـ Are، فالجواب am.'],['Yes, I sit.',0,'']]}]}),title:'مختبر مصغّر: الرد'}]},
  {st:2,short:'التوصيل',title:'Is … connected to …?',q:'الإنترنت لا يعمل. ما أول وصلة تسأل عنها؟',ref:'ص 70',
   art:art(`${[['modem',80],['router',180],['computer',280]].map(([w,x])=>`<g data-tip="${w}"><rect x="${x-42}" y="110" width="84" height="44" rx="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(x,138,w,{fs:13,w:700})}</g>`).join('')}
    <g data-tip="Is the router connected to the modem?">${arrowS(124,132,136,132,C.grn,3,6)}</g><g data-tip="Is the computer connected to the router?">${arrowS(224,132,236,132,C.grn,3,6)}</g>${TL(180,220,'Is the router connected',{fs:14,w:700})}${TL(180,242,'to the modem?',{fs:14,w:700})}`,'مودم ثم راوتر ثم كمبيوتر'),
   cap:'ترتيب الوصلات. مرّر المؤشر على الأجهزة والأسهم.',
   side:[{tip:'الترتيب الصحيح: مقبس الهاتف ← المودم ← الراوتر ← الكمبيوتر، والمودم والراوتر بالكهرباء.'}],
   body:[{widget:(el,B)=>N.typ(el,B,{intro:'كوّن السؤال:',items:[{q:'(the printer / the computer)',a:['Is the printer connected to the computer?']},{q:'(the cables / the speakers)',a:['Are the cables connected to the speakers?']}]}),title:'مختبر مصغّر: اكتب السؤال'}]},
  {st:3,short:'الأجوبة القصيرة',title:'الجواب القصير بالفعل المساعد',q:'Does your new radio work? — كيف تجيب بالنفي؟',ref:'ص 71',
   art:art(`${[['Is …?','it is / it isn\'t',70],['Do …?','I do / I don\'t',130],['Have …?','I have / I haven\'t',190],['Did …?','I did / I didn\'t',250]].map(([q,a,y])=>`<g data-tip="${q} → ${a}"><rect x="30" y="${y-24}" width="300" height="42" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(90,y+3,q,{fs:15,w:700})}${TL(240,y+3,a,{fs:13})}</g>`).join('')}`,'الأفعال المساعدة وأجوبتها'),
   cap:'كل سؤال وجوابه. مرّر المؤشر على كل سطر.',
   side:[{tip:'انظر إلى أول كلمة في السؤال، وأعدها في الجواب.'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الجواب القصير:',items:[{s:'Does your new radio work? No, it ___.',o:["doesn't","isn't","didn't"],a:0},{s:'Has your car broken down? Yes, it ___.',o:['has','is','does'],a:1-1},{s:'Did you go to work yesterday? No, I ___.',o:["didn't","don't","haven't"],a:0}]}),title:'مختبر مصغّر: الجواب القصير'}]},
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

B.lesson({
 id:'u9-l3',unit:9,order:3,pages:'72–73',
 title:'User guide — دليل المستخدم',
 summary:'تعليمات حل الأعطال بجمل If (If the light is off, press the button)، وقراءة مخطط السير ورسمه، وكتابة دليل أعطال من حوار، والأجوبة القصيرة في التعارف.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 72–73',html:`<ol><li>تكتب تعليمات بشرط: ${e('If …, do ….')}</li><li>تقرأ مخطط سير (Yes / No) وترسمه من نص.</li><li>تحوّل حوار دعم فني إلى دليل أعطال مكتوب.</li><li>تجيب إجابات قصيرة في حديث اجتماعي.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 72–73',html:vt(VOC93)},
  {h:'If + الحالة، ثم الأمر',ref:'ص 72',html:`<p>الجزء الأول ${e('If')} + المضارع البسيط (الحالة)، والثاني أمر يبدأ بالفعل الأصلي:</p>${eb(["If the car doesn't start, check the battery.","If the light is off, press the power button.","If there is a disk in the drive, take it out."])}<p>وتُكتب الجملة مع فاصلة بعد الجزء الأول.</p>`},
  {h:'مخطط السير',ref:'ص 72–73',html:`<p>المستطيل خطوة (أمر)، والمعيّن سؤال جوابه Yes أو No. كل فرع من السؤال يصير جملة If:</p>${eb(['Does the car start? — Yes → Drive away.',"If the car starts, drive away.","If the car doesn't start, check the battery."])}`},
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
  {st:1,short:'جمل If',title:'If + حالة، ثم أمر',q:'المكيّف لا يعمل. كيف تكتب أول سطر في دليل الأعطال؟',ref:'ص 72',
   art:art(`<g data-tip="الحالة: If + مضارع بسيط"><rect x="20" y="100" width="160" height="60" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(100,126,"If the AC doesn't",{fs:13,w:700})}${TL(100,146,'work,',{fs:13,w:700})}</g>
    <g data-tip="الأمر: فعل أصلي في البداية"><rect x="190" y="100" width="150" height="60" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(265,126,'check the',{fs:13,w:700})}${TL(265,146,'power.',{fs:13,w:700})}</g>`,'جزءا جملة If'),
   cap:'جزءا الجملة. مرّر المؤشر على كل جزء.',
   side:[{tip:'لا تقل <span class="en">If the AC will not work</span>؛ بعد <span class="en">If</span> المضارع البسيط.'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الصحيح:',items:[{s:"If the screen ___ dark, press any key.",o:['is','will be','be'],a:0},{s:"If the fan doesn't turn, ___ the fuse.",o:['check','checks','to check'],a:0,why:'الأمر: فعل أصلي.'},{s:"___ the battery is flat, recharge it.",o:['If','When will','Does'],a:0}]}),title:'مختبر مصغّر: If'}]},
  {st:2,short:'مخطط السير',title:'من مخطط السير إلى الجمل',q:'المعيّن فيه سؤال وله فرعان. كم جملة If تخرج منه؟',ref:'ص 72–73',
   art:art(`<g data-tip="سؤال (معيّن): Does it start?"><path d="M180 50 L250 100 L180 150 L110 100Z" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,104,'Does it start?',{fs:12,w:700})}</g>
    <g data-tip="Yes → If it starts, drive away.">${arrowS(250,100,300,100,C.grn,3,8)}${TL(300,84,'YES',{fs:11,c:C.grn,w:700})}<rect x="270" y="110" width="80" height="34" rx="6" fill="${C.paper}" stroke="${C.ink}"/>${TL(310,131,'Drive away',{fs:11})}</g>
    <g data-tip="No → If it doesn't start, check the battery.">${arrowS(180,150,180,200,C.red,3,8)}${TL(200,180,'NO',{fs:11,c:C.red,w:700})}<rect x="120" y="204" width="120" height="34" rx="6" fill="${C.paper}" stroke="${C.ink}"/>${TL(180,225,'Check the battery',{fs:11})}</g>`,'معيّن بسؤال وفرعا نعم ولا'),
   cap:'معيّن وفرعان. مرّر المؤشر على كل فرع.',
   side:[{tip:'كل فرع = جملة: <span class="en">If it starts, … / If it doesn\'t start, ….</span>'}],
   body:[{widget:(el,B)=>N.order(el,B,{intro:'رتّب خطوات دليل تشغيل جهاز عرض (من عندنا):',steps:['Press the power button.',"If the light doesn't come on, check the cable.",'If the cable is loose, connect it.','Press the power button again.']}),title:'مختبر مصغّر: رتّب'}]},
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

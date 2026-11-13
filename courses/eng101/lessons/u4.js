/* الوحدة 4 — Movement: 4.1 Directions (ص 26–27) · 4.2 Instructions (ص 28–29) · 4.3 Actions (ص 30–31) · Review B (ص 32–35)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const cap=s=>s[0].toUpperCase()+s.slice(1);
/* سهم: خط ورأس مثلث */
const AR=(x1,y1,x2,y2,c,w)=>{w=w||5;const a=Math.atan2(y2-y1,x2-x1),h=14,p=(t)=>[x2-h*Math.cos(a+t),y2-h*Math.sin(a+t)].map(v=>v.toFixed(1)).join(',');return `<line x1="${x1}" y1="${y1}" x2="${(x2-10*Math.cos(a)).toFixed(1)}" y2="${(y2-10*Math.sin(a)).toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><polygon points="${x2},${y2} ${p(.45)} ${p(-.45)}" fill="${c}"/>`};

/* ========== 4.1 Directions ========== */
const DIRS=[['up','إلى الأعلى'],['down','إلى الأسفل'],['forwards','إلى الأمام'],['backwards','إلى الخلف'],['sideways','جانبياً'],['straight up','عمودياً إلى الأعلى'],['diagonally up','مائلاً إلى الأعلى'],['rotate','يدور']];
const VEH={plane:{n:'a plane',can:['forwards','diagonally up','diagonally down','to the left','to the right','rotate on its horizontal axis']},helicopter:{n:'a helicopter',can:['forwards','backwards','sideways','straight up','straight down','diagonally up','diagonally down','to the left','to the right','rotate on its horizontal axis','rotate on its vertical axis']},rocket:{n:'a rocket',can:['forwards','straight up','diagonally up','rotate on its horizontal axis']},car:{n:'a car',can:['forwards','backwards','to the left','to the right']}};
const MOV=['forwards','backwards','sideways','straight up','straight down','diagonally up','diagonally down','to the left','to the right','rotate on its horizontal axis','rotate on its vertical axis'];
const dirArt=()=>{const cx=180,cy=150;return art(`
 <circle cx="${cx}" cy="${cy}" r="26" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(cx,cy+5,'you',{fs:12,w:700})}
 <g data-tip="up — إلى الأعلى (straight up = عمودياً)">${AR(cx,cy-30,cx,cy-110,C.red)}${TL(cx,cy-118,'up',{fs:13,w:700})}</g>
 <g data-tip="down — إلى الأسفل">${AR(cx,cy+30,cx,cy+110,C.red)}${TL(cx,cy+128,'down',{fs:13,w:700})}</g>
 <g data-tip="forwards — إلى الأمام">${AR(cx+30,cy,cx+130,cy,C.blue)}${TL(cx+130,cy-14,'forwards',{fs:13,w:700})}</g>
 <g data-tip="backwards — إلى الخلف">${AR(cx-30,cy,cx-130,cy,C.blue)}${TL(cx-128,cy-14,'backwards',{fs:13,w:700})}</g>
 <g data-tip="diagonally up — مائلاً إلى الأعلى">${AR(cx+22,cy-22,cx+95,cy-95,C.grn)}${TL(cx+112,cy-104,'diagonally up',{fs:12,w:700})}</g>
 <g data-tip="sideways — جانبياً (إلى اليمين أو اليسار دون أن تدور)"><ellipse cx="${cx}" cy="${cy}" rx="78" ry="22" fill="none" stroke="${C.mut}" stroke-width="2.5" stroke-dasharray="6 5"/>${TL(cx-90,cy+44,'sideways',{fs:12,w:700})}</g>`,'الاتجاهات')};
function lab41(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">Can it fly…?</h3><p class="sub">مبني على التمارين 2–5 ص 26. اختر المركبة والحركة، وشاهد السؤال والجواب والجملة.</p>
  <div class="ph-row"><select class="ph-sel" id="v">${Object.keys(VEH).map(k=>`<option value="${k}">${k}</option>`).join('')}</select><select class="ph-sel" id="m">${MOV.map(x=>`<option>${x}</option>`).join('')}</select></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">ذراع الإنسان</h3><p class="sub">مبني على قراءة ص 27. اختر المفصل.</p><div class="ph-row">${['wrist','elbow','shoulder'].map((x,i)=>`<button type="button" class="btn${i?'':' pri'}" data-j="${x}">${x}</button>`).join('')}</div><div id="jo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>قارن الطائرة والمروحية في <span class="en">straight up</span>.</li><li>لماذا لا نقول <span class="en">It can flies</span>؟</li><li>كم اتجاهاً يتحرك مرفقك؟ جرّب بذراعك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const vb=m=>/^rotate/.test(m)?m:(/^to the/.test(m)?'turn '+m:'fly '+m);
 const sh=()=>{const k=$('#v').value,v=VEH[k],m=$('#m').value,ok=v.can.includes(m),verb=k==='car'&&!/^rotate/.test(m)?vb(m).replace('fly','move'):vb(m);
  $('#o').innerHTML=`<div class="pk-facts"><div class="${ok?'hi':''}"><span>النتيجة</span><b>${ok?'نعم':'لا'}</b></div></div>${eb([`Can ${v.n} ${verb}?`,ok?'Yes, it can.':"No, it can't.",`${cap(v.n)} ${ok?'can':"can't"} ${verb}.`])}`};
 ['v','m'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const J={wrist:['The wrist can move in three directions.','The hand can move up and down, from side to side, and it can rotate.','الرسغ: ثلاث حركات.'],elbow:['The elbow can only move in one direction.',"The forearm can move up and down. It can't move sideways or rotate.",'المرفق: حركة واحدة.'],shoulder:['The shoulder can move in three directions.','It can move up and down, sideways, and it can rotate.','الكتف: ثلاث حركات.']};
 const js=x=>{el.querySelectorAll('[data-j]').forEach(b=>b.classList.toggle('pri',b.dataset.j===x));$('#jo').innerHTML=`${eb(J[x].slice(0,2))}<p class="sub">${J[x][2]}</p>`};
 el.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>js(b.dataset.j));js('wrist');
}
B.lesson({
 id:'u4-l1',unit:4,order:1,pages:'26–27',
 title:'Directions — الاتجاهات',
 summary:'كلمات الاتجاه (up، down، forwards، backwards، sideways، straight، diagonally)، والخطوط (vertical، horizontal، diagonal)، والقدرة بـ can / can\'t في الإثبات والسؤال والجواب القصير، والدوران rotate حول محور، وحركات الذراع والمفاصل (wrist، elbow، shoulder، pivot).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 26–27',html:`<p>تصف كيف يتحرك شيء: طائرة، مروحية، ذراع روبوت. ستتعلم:</p><ol><li>كلمات الاتجاه.</li><li>${e('can / can\'t')} للقدرة.</li><li>الدوران ${e('rotate')} والمحور ${e('axis')}.</li><li>مفاصل الذراع وحركاتها.</li></ol>`},
  {h:'كلمات الاتجاه والخطوط',ref:'ص 26',html:`${vt(DIRS,['English','المعنى'])}${vt([['vertical line','خط عمودي'],['horizontal line','خط أفقي'],['diagonal line','خط مائل'],['straight up = vertically up','عمودياً إلى الأعلى']],['English','المعنى'])}`},
  {h:'can / can\'t',ref:'ص 26',html:`${vt([['It can fly sideways.','إثبات'],["They can't (cannot) fly sideways.",'نفي'],['Can it fly sideways?','سؤال'],["Yes, it can. / No, it can't.",'جواب قصير']],['English','القاعدة'])}<p>${e('can')} واحدة لكل الضمائر، وبعدها الفعل كما هو بلا ${e('s')} ولا ${e('to')}.</p>${eb(['A helicopter can fly backwards.',"A plane can't fly backwards."])}`},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">cannot</span> تُكتب كلمة واحدة، واختصارها <span class="en">can\'t</span>.'},
  {h:'الدوران والمفاصل',ref:'ص 27',html:`${vt([['rotate','يدور'],['axis','محور'],['pivot','نقطة ارتكاز (مفصل)'],['wrist','الرسغ'],['elbow','المرفق'],['shoulder','الكتف'],['forearm','الساعد'],['degrees (°)','درجات']],['English','المعنى'])}${eb(['The wrist can move in three directions.','The elbow can only move in one direction.'])}`},
  {h:'تمارين الكتاب',ref:'ص 26–27',html:
   bk(1,'ص 26','سمِّ حركات رجل الحقيبة النفاثة بكلمات الصندوق.',['1 up','4 down','2، 3، 5: forwards / backwards / sideways حسب الأسهم في الصورة'],'من قراءتنا للصورة.')+
   bk(2,'ص 26','أي الاتجاهات تطير فيها الطائرة والمروحية؟',['الطائرة: forwards ✓ · backwards ✗ · up and down (مائلاً فقط) · sideways ✗','المروحية: كل الاتجاهات ✓'])+
   bk(3,'ص 26','اقرأ النص وتحقق من إجاباتك في التمرين 2.',null)+
   bk(4,'ص 26','أكمل بـ can أو can\'t.',["1 can · can't","2 can't · can","3 can't · can","4 can't · can"])+
   bk(5,'ص 26','مع زميلك: تدرّب على الحوارات.',null)+
   bk(6,'ص 27','فكّر في الرسغ والكتف والمرفق: كم اتجاهاً يتحرك كل منها؟',['1 wrist: three','2 shoulder: three','3 elbow: one'])+
   bk(7,'ص 27','اقرأ النص وتحقق من إجاباتك في التمرين 6.',null)+
   bk(8,'ص 27','طابق كل حركة في الرسم بـ rotate أو move sideways أو move up and down.',['الرسغ: move up and down · move sideways · rotate','المرفق: move up and down','الكتف: الحركات الثلاث'],'أرقام الأسهم حسب رسم الكتاب.')+
   bk(9,'ص 27','استمع واختر.',['1 a) 19°','2 b) 40°','3 b) 70°','4 a) 118°'])+
   bk(10,'ص 27','عن ذراع الروبوت في التمرين 11: كم اتجاهاً تتحرك؟ وأي جزء يختلف عن ذراع الإنسان؟',['1 six (3 + 1 + 2)','2 a) the shoulder'])+
   bk(11,'ص 27','أكمل النص عن ذراع الروبوت.',['(1) is (2) has (3) is (4) has (5) can','(6) can (7) can (8) is (9) has (10) can','(11) isn\'t (12) has (13) can (14) can (15) can\'t'])},
  {h:'الاستماع',ref:'ص 27',html:au(26,'ص 27 — التمرين 9','أربع زوايا بالدرجات.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'كلمات الاتجاه',title:'الاتجاهات',q:'ما الفرق بين straight up و diagonally up؟',ref:'ص 26',art:dirArt(),cap:'أسهم الاتجاهات حولك. مرّر المؤشر على كل سهم.',
   side:[{tip:`${e('straight up')} عمودي تماماً، و ${e('diagonally up')} مائل.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'ما الاتجاه؟',cases:[{q:'↑',opts:[['up',1],['down',0]]},{q:'↗',opts:[['diagonally up',1],['straight up',0]]},{q:'←  (إلى الخلف)',opts:[['backwards',1],['forwards',0]]}]}),title:'مختبر مصغّر: الاتجاه'}]},
  {st:2,short:'can / can\'t',title:'القدرة بـ can',q:'هل تطير الطائرة إلى الخلف؟ كيف تجيب؟',ref:'ص 26',
   art:art(`<g data-tip="can + الفعل كما هو."><rect x="30" y="56" width="300" height="52" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,88,'A helicopter can fly backwards.',{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="can't = cannot."><rect x="30" y="128" width="300" height="52" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(180,160,"A plane can't fly backwards.",{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="السؤال: Can + الفاعل + الفعل؟"><rect x="30" y="200" width="300" height="52" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,232,"Can it rotate? — Yes, it can.",{fs:14,w:700})}</g>`,'can'),
   cap:'الإثبات والنفي والسؤال. مرّر المؤشر على كل سطر.',side:[{tip:`لا نضيف ${e('s')} بعد ${e('can')}: ${e('It can fly.')} لا ${e('It can flies.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'A plane ___ fly sideways.',o:["can't",'can'],a:0},{s:'___ a helicopter fly backwards?',o:['Can','Does'],a:0},{s:'It can ___ on its axis.',o:['rotate','rotates'],a:0},{s:"No, it ___.",o:["can't","doesn't can"],a:0}]}),title:'مختبر مصغّر: can'}]},
  {st:3,short:'المفاصل',title:'الذراع ومفاصلها',q:'كم اتجاهاً يتحرك المرفق؟',ref:'ص 27',
   art:art(`<line x1="70" y1="80" x2="180" y2="150" stroke="${C.yel}" stroke-width="22" stroke-linecap="round"/><line x1="180" y1="150" x2="290" y2="110" stroke="${C.yel}" stroke-width="18" stroke-linecap="round"/>
    <g data-tip="shoulder — الكتف: ثلاث حركات (up and down، sideways، rotate)."><circle cx="70" cy="80" r="16" fill="${C.red}"/>${TL(70,50,'shoulder',{fs:12,w:700})}</g>
    <g data-tip="elbow — المرفق: حركة واحدة (up and down)."><circle cx="180" cy="150" r="14" fill="${C.red}"/>${TL(180,190,'elbow',{fs:12,w:700})}</g>
    <g data-tip="wrist — الرسغ: ثلاث حركات."><circle cx="290" cy="110" r="12" fill="${C.red}"/>${TL(300,80,'wrist',{fs:12,w:700})}</g>
    <g data-tip="pivot — نقطة الارتكاز. للذراع ثلاث نقاط ارتكاز.">${TL(180,250,'3 pivots → 7 directions',{fs:14,w:700})}</g>`,'مفاصل الذراع'),
   cap:'ذراع من رسمنا بثلاثة مفاصل. مرّر المؤشر على كل مفصل.',side:[{tip:`3 (الرسغ) + 1 (المرفق) + 3 (الكتف) = 7 اتجاهات، كما في نص ص 27.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'كم اتجاهاً؟',cases:[{q:'the elbow',opts:[['one',1],['three',0]]},{q:'the wrist',opts:[['three',1],['one',0]]},{q:'the whole arm',opts:[['seven',1],['four',0]]}]}),title:'مختبر مصغّر: المفاصل'}]},
  {recap:['up, down, forwards, backwards, sideways.','straight up (عمودي) ≠ diagonally up (مائل).','can / can\'t + الفعل كما هو.','Can it…? — Yes, it can. / No, it can\'t.','rotate on an axis؛ الذراع: wrist, elbow, shoulder.']}
 ],
 lab:lab41,
 examples:[
  {title:'مثال 1: قدرة',ref:'ص 26',q:`<p>المروحية تستطيع الطيران جانبياً. اكتب الجملة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: القدرة: ${e('can')}.`},{t:`الخطوة 2: بعد can الفعل كما هو: ${e('fly sideways')}.`},{t:`الخطوة 3: ${e('A helicopter can fly sideways.')}`,final:true}]},
  {title:'مثال 2: سؤال وجواب',ref:'ص 26',q:`<p>اسأل هل تستطيع الطائرة الطيران عمودياً، والجواب لا.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('Can')}.`},{t:`الخطوة 2: ${e('Can a plane fly straight up?')}`},{t:`الخطوة 3: ${e("No, it can't.")}`,final:true}]},
  {title:'مثال 3: مقارنة بـ but',ref:'ص 26',q:`<p>الطائرة لا تطير جانبياً، لكنها تطير إلى الأمام.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("A plane can't fly sideways")}`},{t:`الخطوة 2: نضيف ${e('but')}.`},{t:`الخطوة 3: ${e("A plane can't fly sideways, but it can fly forwards.")}`,final:true}]}
 ],
 quiz:[
  {q:'A helicopter ___ fly backwards.',o:['can','cans','can to','is can'],c:0,e:'can + الفعل.'},
  {q:"Can a plane fly sideways? — No, it ___.",o:["can't","doesn't","isn't","not can"],c:0,e:"No, it can't."},
  {q:'It can ___ on its axis.',o:['rotate','rotates','rotating','to rotate'],c:0,e:'بعد can الفعل كما هو.'},
  {q:'vertical line:',o:['خط عمودي','خط أفقي','خط مائل','خط منحنٍ'],c:0,e:'vertical = عمودي.'},
  {q:'المفصل الذي يتحرك في اتجاه واحد:',o:['elbow','wrist','shoulder','hand'],c:0,e:'المرفق: up and down فقط (ص 27).'},
  {q:'diagonally up معناها:',o:['مائلاً إلى الأعلى','عمودياً إلى الأعلى','إلى الخلف','جانبياً'],c:0,e:'diagonal = مائل.'}
 ]
});

/* ========== 4.2 Instructions ========== */
const SP=[['km/h','kilometres per hour','كيلومتر في الساعة'],['mph','miles per hour','ميل في الساعة (أمريكا وبريطانيا)'],['m/s','metres per second','متر في الثانية'],['rpm','revolutions per minute','دورة في الدقيقة']];
const STK={LH:{up:['Push the LH stick up.','The plane goes faster.','accelerates'],down:['Pull the LH stick down.','The plane goes more slowly.','slows down'],left:['Move the LH stick to the left.','The plane goes to the left.','turns left'],right:['Move the LH stick to the right.','The plane moves to the right.','turns right']},
 RH:{up:['Push the RH stick up.','The plane goes down.','descends'],down:['Pull the RH stick down.','The plane goes up.','ascends'],left:['Move the RH stick to the left.','The plane rolls to the left.','rolls left'],right:['Move the RH stick to the right.','The plane rolls to the right.','rolls right']}};
const txArt=()=>art(`<rect x="40" y="70" width="280" height="170" rx="26" fill="${C.mut}" stroke="${C.ink}" stroke-width="2.5"/>
 <g data-tip="antenna — الهوائي: يرسل الإشارة إلى الطائرة."><line x1="180" y1="70" x2="180" y2="22" stroke="${C.ink}" stroke-width="4"/><circle cx="180" cy="20" r="5" fill="${C.ink}"/>${TL(210,30,'antenna',{fs:11,w:700})}</g>
 <g data-tip="handle — المقبض: تحمل منه الجهاز."><path d="M120 70 q60 -30 120 0" fill="none" stroke="${C.ink}" stroke-width="5"/>${TL(120,58,'handle',{fs:11,w:700})}</g>
 <g data-tip="LH joystick — العصا اليسرى: السرعة والاتجاه."><circle cx="110" cy="150" r="34" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><circle cx="110" cy="150" r="12" fill="${C.red}"/>${TL(110,206,'LH stick',{fs:11,w:700})}</g>
 <g data-tip="RH joystick — العصا اليمنى: الدحرجة (roll) والميل (tilt)."><circle cx="250" cy="150" r="34" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><circle cx="250" cy="150" r="12" fill="${C.red}"/>${TL(250,206,'RH stick',{fs:11,w:700})}</g>
 <g data-tip="switch — مفتاح التشغيل والإطفاء."><rect x="280" y="214" width="22" height="14" rx="3" fill="${C.ink}"/>${TL(300,256,'switch',{fs:11,w:700})}</g>
 <g data-tip="slider — منزلقة: تحرّكها على خط مستقيم."><rect x="150" y="218" width="60" height="8" rx="4" fill="${C.ink}"/><rect x="168" y="212" width="12" height="20" rx="3" fill="${C.yel}" stroke="${C.ink}"/>${TL(180,256,'slider',{fs:11,w:700})}</g>`,'جهاز التحكم');
function lab42(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">جهاز التحكم</h3><p class="sub">مبني على دليل المستخدم ص 29 والتمرين 8. اختر العصا والحركة، وشاهد ما تفعله الطائرة.</p>
  <div class="ph-row">${['LH','RH'].map((s,i)=>`<button type="button" class="btn${i?'':' pri'}" data-s="${s}">${s} stick</button>`).join('')}</div>
  <div class="ph-row" style="margin-top:6px">${['up','down','left','right'].map((d,i)=>`<button type="button" class="btn${i?'':' pri'}" data-d="${d}">${d}</button>`).join('')}</div>
  <div id="pl" style="max-width:240px;margin:8px auto"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">محوّل السرعة</h3><p class="sub">مبني على التمرين 1 ص 28. 1 mile = 1.609 km.</p>
  <div class="ph-row"><input class="ph-num" id="kv" type="number" value="1200" min="0" max="200000" step="1" style="width:110px"><select class="ph-sel" id="ku"><option value="k">km/h</option><option value="m">mph</option></select></div><div id="ko"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ادفع العصا اليمنى إلى الأعلى: هل تصعد الطائرة أم تنزل؟</li><li>حوّل 100 km/h إلى mph.</li><li>كوّن حواراً: <span class="en">Can the plane fly to the left?</span></li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let s='LH',d='up';
 const plane=r=>`<svg viewBox="0 0 240 140" style="width:100%"><g transform="rotate(${r} 120 70)"><path d="M30 70 L200 64 L215 70 L200 76 Z" fill="${C.blue}"/><path d="M110 70 L80 20 L100 20 L140 70 L100 120 L80 120 Z" fill="${C.blue}" opacity=".85"/><path d="M40 70 L28 46 L40 46 L54 70 Z" fill="${C.red}"/></g></svg>`;
 const R={LH:{up:0,down:0,left:-25,right:25},RH:{up:18,down:-18,left:-35,right:35}};
 const sh=()=>{el.querySelectorAll('[data-s]').forEach(b=>b.classList.toggle('pri',b.dataset.s===s));el.querySelectorAll('[data-d]').forEach(b=>b.classList.toggle('pri',b.dataset.d===d));
  const x=STK[s][d];$('#pl').innerHTML=plane(R[s][d]);$('#o').innerHTML=eb([x[0],x[1],`When you ${x[0][0].toLowerCase()+x[0].slice(1,-1)}, the plane ${x[2]}.`])};
 el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{s=b.dataset.s;sh()});el.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{d=b.dataset.d;sh()});sh();
 const cv=()=>{let v=+$('#kv').value,w='';if(!(v>=0&&v<=200000)){v=Math.min(200000,Math.max(0,v||0));$('#kv').value=v;w='<p class="sub" style="color:var(--red)">صُحّحت القيمة: المدى المسموح 0 إلى 200000.</p>'}
  const k=$('#ku').value==='k';const r=k?v/1.609:v*1.609;$('#ko').innerHTML=eb(`${v.toLocaleString('en')} ${k?'km/h':'mph'} = about ${Math.round(r).toLocaleString('en')} ${k?'mph':'km/h'}`)+w};
 ['kv','ku'].forEach(k=>$('#'+k).addEventListener('input',cv));cv();
}
B.lesson({
 id:'u4-l2',unit:4,order:2,pages:'28–29',
 title:'Instructions — التعليمات',
 summary:'وحدات السرعة (km/h، mph، m/s، rpm) وقراءة الأرقام الكبيرة، وأجزاء جهاز التحكم بالطائرة (joystick، slider، switch، antenna)، وأفعال الحركة (push، pull، slide، accelerate، slow down، ascend ≠ descend، roll)، والضمير it ومرجعه في النص، وسؤال القدرة Can you…?',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 28–29',html:`<p>تقرأ دليل استعمال جهاز وتتبع تعليماته. ستتعلم:</p><ol><li>وحدات السرعة.</li><li>أجزاء جهاز التحكم.</li><li>أفعال الحركة: ${e('push, pull, slide')}.</li><li>${e('Can you…?')} عن مهاراتك.</li></ol>`},
  {h:'وحدات السرعة',ref:'ص 28',html:`${vt(SP,['الرمز','نقرؤه','المعنى'])}${eb(['Sound travels at about 1200 kilometres per hour.','A fast CD-ROM can rotate at 9800 revolutions per minute.'])}<p>1 revolution = 1 rotation = 360°.</p>`},
  {note:'<b>توضيح للمتدرب:</b> الأرقام الكبيرة تُقرأ بالآلاف: <span class="en">67,000 = sixty-seven thousand</span>، و <span class="en">1228 = one thousand two hundred and twenty-eight</span>.'},
  {h:'جهاز التحكم وأفعاله',ref:'ص 28–29',html:`${vt([['joystick','عصا التحكم'],['slider','منزلقة'],['switch','مفتاح'],['push … up (away from you)','ادفع للأعلى (بعيداً عنك)'],['pull … down (towards you)','اسحب للأسفل (نحوك)'],['slide … to the left','حرّك بالانزلاق لليسار'],['accelerate ≠ slow down','يسرّع ≠ يبطئ'],['ascend ≠ descend','يصعد ≠ ينزل'],['roll / tilt','يتدحرج (يميل جانبياً) / يميل']],['English','المعنى'])}`},
  {h:'الضمير it',ref:'ص 29',html:`<p>${e('it')} يعود على اسم مفرد ذُكر قبله. اقرأ الجملة السابقة لتعرف ما هو:</p>${eb(['Look at the LH stick. Push it up. (it = the LH stick)','Slide the stick to the right and it turns right. (it = the plane)'])}`},
  {h:'Can you…?',ref:'ص 29',html:dl([['A','Can you swim?'],['B','Yes, I can. Can you?'],['A','Yes, I can. Can you drive a truck?'],['B',"No, I can't."]])},
  {h:'تمارين الكتاب',ref:'ص 28–29',html:
   bk(1,'ص 28','اختبار: ما السرعات؟',['1 b) 9800 rpm','2 b) 1200 km/h (746 mph)','3 a) 1228 km/h (763 mph)','4 a) 154 m/s','5 a) 1000 mph (1609 km/h)','6 a) 67,000 mph (107,825 km/h)'])+
   bk(2,'ص 28','استمع وتحقق من إجاباتك.',null)+bk(3,'ص 28','مع زميلك: أملِ عليه سرعات.',null)+
   bk(4,'ص 28','سمِّ أجزاء جهاز التحكم بكلمات الصندوق.',['الكلمات: antenna, handle, joysticks, slider, switch','1 antenna (أعلى الجهاز)'],'بقية الأرقام حسب صورة الكتاب.')+
   bk(5,'ص 28','ماذا تفعل الطائرة عندما تحرّك العصوين؟',['1 LH up: accelerates · LH down: slows down','2 LH left: turns left · LH right: turns right','3 RH up: descends · RH down: ascends','4 RH left: rolls left · RH right: rolls right'])+
   bk(6,'ص 29','اقرأ الدليل وتحقق من إجاباتك في 4 و 5.',null)+
   bk(7,'ص 29','على أي كلمة يعود الضمير؟',['1 c) LH stick','2 a) plane'])+
   bk(8,'ص 29','طابق حركتك مع حركة الطائرة.',['1 b','2 d','3 a','4 h','5 c','6 f','7 e','8 g'])+
   bk(9,'ص 29','مع زميلك: كوّن حوارات من جدول التمرين 8.',null)+
   bk(10,'ص 29','اسأل زميلك ماذا يستطيع ولا يستطيع.',null)},
  {h:'الاستماع',ref:'ص 28',html:au(27,'ص 28 — التمرين 2','إجابات اختبار السرعات.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'وحدات السرعة',title:'السرعة ووحداتها',q:'كيف تقرأ km/h و rpm؟',ref:'ص 28',
   art:art(`${SP.map((x,i)=>`<g data-tip="${x[0]} = ${x[1]} — ${x[2]}"><rect x="30" y="${40+i*58}" width="300" height="46" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(80,68+i*58,x[0],{fs:15,w:700})}${TL(225,68+i*58,x[1],{fs:12})}</g>`).join('')}`,'وحدات السرعة'),
   cap:'أربع وحدات. مرّر المؤشر على كل منها.',side:[{tip:`${e('per')} = لكل: ${e('kilometres per hour')} = كيلومترات لكل ساعة.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'كيف نقرأ؟',cases:[{q:'120 km/h',opts:[['a hundred and twenty kilometres per hour',1],['a hundred and twenty kilo hours',0]]},{q:'9800 rpm',opts:[['nine thousand eight hundred revolutions per minute',1],['nine thousand eight hundred rotations per hour',0]]}]}),title:'مختبر مصغّر: القراءة'}]},
  {st:2,short:'جهاز التحكم',title:'push · pull · slide',q:'ماذا يحدث إذا سحبت العصا اليسرى نحوك؟',ref:'ص 28–29',art:txArt(),cap:'جهاز تحكم من رسمنا. مرّر المؤشر على كل جزء.',
   side:[{tip:`${e('push')} = ادفع بعيداً عنك، و ${e('pull')} = اسحب نحوك.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Push the LH stick up and the plane ___.',o:['accelerates','slows down'],a:0},{s:'Pull the RH stick down and the plane ___.',o:['ascends','descends'],a:0},{s:'Slide the LH stick to the left and the plane turns ___.',o:['left','right'],a:0}]}),title:'مختبر مصغّر: ماذا يحدث؟'}]},
  {recap:['km/h, mph, m/s, rpm.','push (بعيداً) ≠ pull (نحوك)، slide.','accelerate ≠ slow down، ascend ≠ descend.','it يعود على اسم مفرد قبله.','Can you swim? — Yes, I can. / No, I can\'t.']}
 ],
 lab:lab42,
 examples:[
  {title:'مثال 1: قراءة سرعة',ref:'ص 28',q:`<p>اكتب بالكلمات: 154 m/s</p>`,given:[],solve:()=>[{t:`الخطوة 1: الرقم: ${e('a hundred and fifty-four')}.`},{t:`الخطوة 2: الوحدة: ${e('metres per second')}.`},{t:`الخطوة 3: ${e('a hundred and fifty-four metres per second')}`,final:true}]},
  {title:'مثال 2: تعليمة ونتيجة',ref:'ص 29',q:`<p>اكتب التعليمة ونتيجتها: العصا اليمنى إلى الأعلى.</p>`,given:[],solve:()=>[{t:`الخطوة 1: التعليمة بفعل الأمر: ${e('Push the RH stick up.')}`},{t:`الخطوة 2: النتيجة: الطائرة تنزل = ${e('descends')}.`},{t:`الخطوة 3: ${e('Push the RH stick up and the plane descends.')}`,final:true}]},
  {title:'مثال 3: سؤال القدرة',ref:'ص 29',q:`<p>اسأل زميلك هل يستطيع قيادة دراجة نارية، والجواب نعم.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Can you')} + الفعل.`},{t:`الخطوة 2: ${e('Can you ride a motorbike?')}`},{t:`الخطوة 3: ${e('Yes, I can.')}`,final:true}]}
 ],
 quiz:[
  {q:'rpm =',o:['revolutions per minute','rotations per hour','metres per minute','revolutions per metre'],c:0,e:'rpm = revolutions per minute.'},
  {q:'mph =',o:['miles per hour','metres per hour','miles per minute','metres per second'],c:0,e:'mph = miles per hour.'},
  {q:'ascend ضدها:',o:['descend','accelerate','rotate','push'],c:0,e:'ascend ≠ descend.'},
  {q:'pull = اسحب ___',o:['نحوك','بعيداً عنك','لليمين','لليسار'],c:0,e:'pull towards you.'},
  {q:'Can you swim? — Yes, I ___.',o:['can','do','am','swim'],c:0,e:'Yes, I can.'},
  {q:'1 revolution =',o:['360°','180°','90°','100°'],c:0,e:'دورة كاملة 360°.'}
 ]
});

/* ========== 4.3 Actions ========== */
const FK=[['G','direction lever','push forwards → the truck moves forwards · pull backwards → the truck reverses'],['A','steering wheel','turns the truck to the left and right'],['B','left-hand lever','push forwards → the fork moves up · pull back → the fork moves down'],['C','right-hand lever','push forwards → the fork tilts up · pull back → the fork tilts down'],['D','parking brake','—'],['F','brake pedal (LH)','the truck stops'],['E','accelerator (RH)','the truck goes faster']];
function lab43(el,B){kcss();
 const A=[['push lever B forwards','the fork moves up',{fy:-40}],['pull lever B back','the fork moves down',{fy:30}],['push lever C forwards','the fork tilts up',{ft:-12}],['pull lever C backwards','the fork tilts down',{ft:12}],['push lever G forwards','the truck moves forwards',{tx:-40}],['pull lever G backwards','the truck reverses',{tx:40}],['press the brake pedal','the truck stops',{}],['press the accelerator','the truck goes faster',{tx:-70}]];
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">قُد الرافعة الشوكية</h3><p class="sub">مبني على الدليل والتمرين 6 ص 30–31. اختر الحركة، وشاهد الرافعة والجملة بـ when.</p>
  <select class="ph-sel" id="a">${A.map((x,i)=>`<option value="${i}">${x[0]}</option>`).join('')}</select><div id="sv" style="max-width:320px;margin:8px auto"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">درس قيادة</h3><p class="sub">مبني على التمرين 4 ص 31. اضغط تعليمة واسمعها.</p><div class="ph-row" id="dr">${['Drive forwards.','Reverse.','Slow down.','Stop!','Turn left.','Turn round.','Go faster.','To the right.'].map(x=>`<button type="button" class="btn" data-x="${x}">${x}</button>`).join('')}</div><div id="dro"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الفرق بين <span class="en">moves up</span> و <span class="en">tilts up</span> للشوكة؟</li><li>أين نضع الفاصلة في جملة <span class="en">When you…</span>؟</li><li>اكتب ثلاث تعليمات لركن سيارة.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const x=A[+$('#a').value],m=x[2],fy=m.fy||0,ft=m.ft||0,tx=m.tx||0;
  $('#sv').innerHTML=`<svg viewBox="0 0 320 170" style="width:100%"><line x1="0" y1="150" x2="320" y2="150" stroke="${C.ink}" stroke-width="2"/><g style="transition:transform .6s" transform="translate(${tx} 0)"><rect x="150" y="80" width="110" height="50" rx="8" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><rect x="190" y="40" width="50" height="40" fill="none" stroke="${C.ink}" stroke-width="3"/><circle cx="175" cy="135" r="15" fill="${C.ink}"/><circle cx="240" cy="135" r="15" fill="${C.ink}"/><rect x="140" y="30" width="8" height="110" fill="${C.mut}"/><g transform="translate(0 ${fy}) rotate(${ft} 140 132)"><rect x="80" y="128" width="64" height="6" fill="${C.red}"/></g></g></svg>`;
  $('#o').innerHTML=eb([`When you ${x[0]}, ${x[1]}.`,`${cap(x[0])} and ${x[1]}.`])};
 $('#a').addEventListener('input',sh);sh();
 el.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{$('#dro').innerHTML=eb(b.dataset.x);N.speak(b.dataset.x)});
}
B.lesson({
 id:'u4-l3',unit:4,order:3,pages:'30–31',
 title:'Actions — الأفعال',
 summary:'أدوات التحكم في الرافعة الشوكية (lever، pedal، steering wheel، brake، accelerator، fork)، وحركاتها (moves up/down، tilts up/down، reverses)، وتعليمات القيادة بفعل الأمر (Drive forwards، Slow down، Turn round)، وجمل الشرط والنتيجة بـ when و you.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 30–31',html:`<p>تشرح كيف تُشغَّل آلة. ستتعلم:</p><ol><li>أدوات التحكم في الرافعة الشوكية.</li><li>حركات الشوكة والشاحنة.</li><li>تعليمات القيادة بفعل الأمر.</li><li>${e('When you …, …')}</li></ol>`},
  {h:'أدوات التحكم',ref:'ص 30',html:`${vt(FK.map(x=>[x[0],x[1],x[2]]),['الحرف في رسم الكتاب','الأداة','ماذا تفعل'])}<p>هذا جدول إجابة التمرين 2 مع وظيفة كل أداة من نص الدليل.</p>`},
  {h:'الحركات',ref:'ص 30',html:vt([['moves up / down','ترتفع / تنخفض (كلها)'],['tilts up / down','تميل للأعلى / للأسفل'],['moves forwards','تتقدم'],['reverses = goes backwards','ترجع إلى الخلف'],['turns left / right','تنعطف'],['turn round = do a U-turn','تستدير (دوران كامل)']],['English','المعنى'])},
  {h:'when + you',ref:'ص 31',html:`<p>نصف النتيجة التي تحدث كلما فعلنا شيئاً:</p>${eb(['When you push lever B forwards, the fork moves up.','When you press the brake pedal, the truck stops.'])}<p>إذا بدأت الجملة بـ ${e('When')} نضع فاصلة بعد الجزء الأول. ويمكن قلبها بلا فاصلة: ${e('The truck stops when you press the brake pedal.')}</p>`},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">you</span> هنا تعني «أي شخص»، لا شخصاً معيناً.'},
  {h:'تمارين الكتاب',ref:'ص 30–31',html:
   bk(1,'ص 30','انظر إلى الرسم وأجب.',['1 two pedals','2 four levers (G, B, C, D)','3 on the left'],'من قراءتنا للرسم.')+
   bk(2,'ص 30','اكتب حروف الرسم بجانب أدوات التحكم.',['1 G','2 A','3 B','4 C','5 D','6 F','7 E'])+
   bk(3,'ص 30','صِف حركات الشاحنة.',['A The fork tilts down. (مثال)','B The fork tilts up.','C The truck moves forwards.','D The fork moves down.','E The truck reverses.','F The fork moves up.'],'من قراءتنا للصور.')+
   bk(4,'ص 31','مع زميلك: درس قيادة (مدرب ومتعلم).',null)+
   bk(5,'ص 31','اكتب تعليمات قصيرة لعمل ما وارسم رسماً.',null)+
   bk(6,'ص 31','اكتب جملاً كاملة بـ when و you.',['1 When you pull lever C backwards, the fork tilts down. (مثال)','2 When you push lever B forwards, the fork moves up.','3 When you turn the steering wheel to the right, the truck turns right.','4 When you pull lever G backwards, the truck reverses.','5 When you press the brake pedal, the truck stops.','6 When you press the accelerator, the truck goes faster.'])+
   bk(7,'ص 31','مهمة ثنائية: درس قيادة للرافعة الشوكية ورتّب الصور.',null,'تعليمات الطالب أ في ص 115 من الكتاب.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'أدوات التحكم',title:'أدوات التحكم في الرافعة',q:'ما الفرق بين الذراع (lever) والدواسة (pedal)؟',ref:'ص 30',
   art:art(`<g data-tip="steering wheel — المقود: يدير الشاحنة يميناً ويساراً."><circle cx="120" cy="110" r="52" fill="none" stroke="${C.ink}" stroke-width="8"/><circle cx="120" cy="110" r="10" fill="${C.ink}"/>${TL(120,40,'steering wheel',{fs:12,w:700})}</g>
    <g data-tip="lever — ذراع: تدفعه للأمام أو تسحبه للخلف."><line x1="250" y1="150" x2="250" y2="70" stroke="${C.ink}" stroke-width="6"/><circle cx="250" cy="66" r="12" fill="${C.red}"/>${TL(250,46,'lever',{fs:12,w:700})}</g>
    <g data-tip="pedal — دواسة: تضغطها بقدمك. اليسرى للفرامل (brake) واليمنى للتسريع (accelerator)."><rect x="80" y="210" width="60" height="30" rx="6" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/><rect x="170" y="200" width="30" height="44" rx="6" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(140,268,'pedals: brake · accelerator',{fs:12,w:700})}</g>`,'أدوات التحكم'),
   cap:'ثلاث أدوات تحكم من رسمنا. مرّر المؤشر على كل منها.',side:[{tip:`${e('lever')} باليد، و ${e('pedal')} بالقدم.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'أي أداة؟',cases:[{q:'You press it with your foot to stop.',opts:[['the brake pedal',1],['the steering wheel',0]]},{q:'It turns the truck left and right.',opts:[['the steering wheel',1],['the accelerator',0]]},{q:'You press it to go faster.',opts:[['the accelerator',1],['the brake',0]]}]}),title:'مختبر مصغّر: الأداة'}]},
  {st:2,short:'When you…',title:'التعليمة ونتيجتها بـ when',q:'كيف تربط الحركة بنتيجتها في جملة واحدة؟',ref:'ص 31',
   art:art(`<g data-tip="الجزء الأول: When + you + الحركة، ثم فاصلة."><rect x="20" y="90" width="170" height="70" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(105,120,'When you press',{fs:13,w:700})}${TL(105,142,'the brake pedal,',{fs:13,w:700})}</g>
    ${AR(192,125,214,125,C.ink,3)}<g data-tip="الجزء الثاني: النتيجة."><rect x="216" y="90" width="130" height="70" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(281,131,'the truck stops.',{fs:13,w:700,c:'#fff'})}</g>`,'when you'),
   cap:'الحركة ثم النتيجة. مرّر المؤشر على كل جزء.',side:[{tip:`فعل النتيجة مع ${e('the truck / the fork')} يأخذ ${e('s')}: ${e('stops, moves, tilts')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:'___ you press the accelerator, the truck goes faster.',o:['When','What'],a:0},{s:'When you pull lever G backwards, the truck ___.',o:['reverses','reverse'],a:0},{s:'When you push lever B forwards, the fork ___ up.',o:['moves','move'],a:0}]}),title:'مختبر مصغّر: when'}]},
  {st:3,short:'تعليمات القيادة',title:'تعليمات القيادة',q:'كيف يعطي المدرب تعليماته؟',ref:'ص 31',
   art:art(`${[['Drive forwards.','تقدّم'],['Reverse.','ارجع للخلف'],['Slow down.','خفّف السرعة'],['Turn round.','استدر']].map((x,i)=>`<g data-tip="${x[0]} — ${x[1]}"><rect x="40" y="${40+i*58}" width="280" height="46" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,68+i*58,x[0],{fs:15,w:700})}</g>`).join('')}`,'تعليمات القيادة'),
   cap:'أربع تعليمات بفعل الأمر. مرّر المؤشر على كل منها.',side:[{tip:`فعل الأمر بلا فاعل: ${e('Stop!')} ${e('Turn left.')}`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'ما التعليمة؟',cases:[{q:'تريد أن يرجع إلى الخلف.',opts:[['Reverse.',1],['Drive forwards.',0]]},{q:'تريده أن يستدير ويعود.',opts:[['Turn round.',1],['Turn left.',0]]},{q:'السرعة عالية.',opts:[['Slow down.',1],['Go faster.',0]]}]}),title:'مختبر مصغّر: التعليمة'}]},
  {recap:['lever (باليد)، pedal (بالقدم)، steering wheel.','brake ≠ accelerator.','moves up/down ≠ tilts up/down.','When you + الحركة, + النتيجة.','Drive forwards. Reverse. Slow down. Turn round.']}
 ],
 lab:lab43,
 examples:[
  {title:'مثال 1: من ملاحظة إلى جملة',ref:'ص 31',q:`<p>push lever B forwards → fork moves up</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('When you')} ونضيف ${e('the')}: ${e('When you push lever B forwards')}`},{t:`الخطوة 2: فاصلة ثم النتيجة مع ${e('the')}: ${e('the fork moves up')}.`},{t:`الخطوة 3: ${e('When you push lever B forwards, the fork moves up.')}`,final:true}]},
  {title:'مثال 2: الفرامل',ref:'ص 31',q:`<p>press brake pedal → truck stops</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('When you press the brake pedal')}`},{t:`الخطوة 2: ${e(', the truck stops.')}`},{t:`الخطوة 3: ${e('When you press the brake pedal, the truck stops.')}`,final:true}]},
  {title:'مثال 3: تعليمة',ref:'ص 31',q:`<p>اطلب من المتعلم أن يرجع إلى اليسار.</p>`,given:[],solve:()=>[{t:`الخطوة 1: فعل الأمر ${e('Reverse')}.`},{t:`الخطوة 2: الاتجاه ${e('to the left')}.`},{t:`الخطوة 3: ${e('Reverse to the left.')}`,final:true}]}
 ],
 quiz:[
  {q:'reverse =',o:['go backwards','go faster','stop','turn left'],c:0,e:'reverse = go backwards.'},
  {q:'You press it with your foot:',o:['pedal','lever','wheel','switch'],c:0,e:'pedal.'},
  {q:'When you press the brake, the truck ___.',o:['stops','stop','stopping','is stop'],c:0,e:'the truck + s.'},
  {q:'turn round =',o:['do a U-turn','turn left','reverse','slow down'],c:0,e:'turn round = do a U-turn.'},
  {q:'brake ضدها في الوظيفة:',o:['accelerator','lever','fork','wheel'],c:0,e:'brake يوقف، accelerator يسرّع.'},
  {q:'___ you push the lever, the fork moves up.',o:['When','What','Where','Who'],c:0,e:'When you …'}
 ]
});

/* ========== Review Unit B ========== */
B.lesson({
 id:'u4-l4',unit:4,order:4,pages:'32–35',
 title:'Review Unit B — مراجعة الوحدتين 3 و 4',
 summary:'مراجعة have / has في السؤال والنفي، والمضارع البسيط (does، s)، و can / can\'t، والاختصارات، والأجزاء والأدوات والمواقع، و a / an / some / a pair of، والحروف الصامتة، والاتجاهات والتعليمات، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 32–35',html:vt([['have: سؤال ونفي','Does John have the spanners?','3.1'],['الأجزاء','a handle, a shaft, a blade','3.1'],['المضارع البسيط','The dynamo produces electricity.','3.2'],['المواقع','to the left of, above, below','3.3'],['can / can\'t','It can open bottles, but it can\'t open tins.','4.1'],['الاتجاهات','Fly diagonally down.','4.1'],['التعليمات','Move sideways three boxes.','4.2–4.3']],['النقطة','مثال','الدرس'])},
  {h:'have و do / does',ref:'ص 32',html:`${vt([['John has the spanners.','Does John have the spanners?',"No, he doesn't. He has the pliers."],['They have solar panels.','Do they have solar panels?',"No, they don't."]],['إثبات','سؤال','نفي'])}`},
  {h:'الاختصارات',ref:'ص 32',html:vt([['does not','doesn\'t'],['do not','don\'t'],['is not','isn\'t'],['can not / cannot','can\'t'],['I am','I\'m']],['الكاملة','المختصرة'])},
  {h:'a / an / some / a pair of',ref:'ص 35',html:`${vt([['a','مفرد يبدأ بصوت ساكن','a printer'],['an','مفرد يبدأ بصوت متحرك','an AC adapter'],['some','جمع','some nuts'],['a pair of','شيء من جزأين','a pair of pliers']],['الكلمة','متى','مثال'])}`},
  {h:'تمارين المراجعة (ص 32–33)',ref:'ص 32–33',html:
   bk(1,'ص 32','حوّل الجمل إلى أسئلة.',['Does John have the spanners? (مثال)','Do the students have a holiday tomorrow?','Does the Multi Tool have a screwdriver?','Do these bikes have strong brakes?','Does the radio have an internal battery?','Do those houses have solar panels?'])+
   bk(2,'ص 32','أجب بالنفي ثم بجملة مثبتة.',["No, I don't have a car. I have a motorbike. (مثال)","No, he doesn't have a DVD. He has a VCR.","No, it doesn't have scissors. It has a knife blade.","No, we don't have English today. We have Science.","No, it doesn't have batteries. It has a dynamo.","No, they don't have plastic handles. They have metal handles."])+
   bk(3,'ص 32','أعد كتابة الجمل بالاختصارات.',["The Multi Tool doesn't have a wrench. It isn't very useful. (مثال)","We don't have an AC adapter. We can't switch on the computer.","I'm a technician, but I don't have my tools here. I can't repair your TV.","The electricity's off, and we don't have any batteries. You can't use the radio now."])+
   bk(4,'ص 32','أجب إجابات قصيرة.',["1 No, I can't.","2 No, he isn't.","3 Yes, it does.","4 No, they don't.","5 Yes, I am.","6 No, it doesn't.","7 No, I'm not.","8 Yes, they can."])+
   bk(5,'ص 33','أكمل الحوار بالصيغة الصحيحة للأفعال.',['(1) does (2) do (3) turns (4) produces','(5) charge (6) use (7) uses (8) has'])+
   bk(6,'ص 33','سمِّ الأجزاء.',['(1) jaws (2) handles','(3) blades (4) handles','(5) handle (6) shaft (7) blade','(8) head (9) shaft (10) handle'],'من قراءتنا للصور.')+
   bk(7,'ص 33','صِف الأدوات في التمرين 6.',['1 A pair of pliers has two handles and two jaws. (مثال)','2 A pair of scissors has two blades and two handles.','3 The spade has a handle, a shaft and a blade.','4 The hammer has a head, a shaft and a handle.'])+
   bk(8,'ص 33','انظر إلى لوحة الأدوات 15 ثانية ثم اكتب كل الأدوات من الذاكرة.',null)+
   bk(9,'ص 33','كوّن جملاً عن لوحة الأدوات بـ above / below / to the left of / to the right of.',null)},
  {h:'تمارين المراجعة (ص 34–35)',ref:'ص 34–35',html:
   bk(10,'ص 34','خمّن الجهاز من وصفه.',['1 a helmet','2 a pair of pliers','3 a solar panel','4 nuts','5 an antenna','6 a dynamo'])+
   bk(11,'ص 34','أكمل الأسئلة والأجوبة.',['2 do · 3 do · 4 is · 5 does · 6 Is · 7 does · 8 does','a) works · b) am · c) is · d) comes · f) study · g) study · h) is'])+
   bk(12,'ص 34','طابق الأسئلة بالأجوبة.',['1 e','2 b','3 f','4 g','5 d','6 h','7 c','8 a'])+
   bk(13,'ص 34','مع زميلك: تدرّب على الأسئلة والأجوبة بالاختصارات.',null)+
   bk(14,'ص 34','احذف الحروف الصامتة وانطق الكلمات.',['knife: k','build: u','building: u','scissors: c','wrist: w','ascend: c','descend: c','right: gh','tighten: gh'])+
   bk(15,'ص 34','سمِّ أدوات التحكم في السيارة.',['الكلمات: button, display, key, lever, pedal, slider, switch, wheel'],'الأرقام حسب صورة الكتاب.')+
   bk(16,'ص 35','ضع a أو an أو some أو a pair of.',['a printer · an AC adapter · some (a pair of) speakers · a keyboard · an amplifier','a pair of headphones · some (a pair of) earphones · some nuts · some bolts · a pair of pliers'])+
   bk(17,'ص 35','كوّن جملاً مثبتة ومنفية.',["1 This opener can open bottles, but it can't open tins. (مثال)","2 These wrenches can't tighten the M12 bolts, but they can loosen the M5 nuts.","3 That antenna can receive radio signals, but it can't transmit them.","4 A rocket can fly straight up, but it can't reverse.","5 Passenger planes can't fly sideways, but they can turn left and right.","6 I can drive a car, but I can't operate a forklift truck."])+
   bk(18,'ص 35','اتبع التعليمات على الشبكة.',null,'الجواب على شبكة الكتاب.')+
   bk(19,'ص 35','طابق الصور مع التعليمات.',null,'حسب صور الكتاب.')+
   bk(20,'ص 35','اكتب قائمة بالوظائف في مجالك.',null)+
   bk(21,'ص 35','ما معنى أجزاء الكلمات؟',['multi- = many (multimedia, multimeter, multi-tool)','therm- = heat (thermometer, thermostat)','kilo- = a thousand (kilometre, kilogram, kilowatt)'])}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 3',title:'خلاصة الوحدة 3: الأدوات والوظائف والمواقع',q:'كيف تحوّل John has the spanners إلى سؤال؟',ref:'ص 32–33',
   art:art(`<g data-tip="سؤال have: Does + الفاعل المفرد + have."><rect x="30" y="50" width="300" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,81,'Does John have the spanners?',{fs:15,w:700})}</g>
    <g data-tip="المضارع البسيط: الفعل + s مع المفرد."><rect x="30" y="118" width="300" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,149,'The dynamo produces electricity.',{fs:15,w:700})}</g>
    <g data-tip="المكان بالنسبة لشيء آخر."><rect x="30" y="186" width="300" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,217,'The saw is below the hammer.',{fs:15,w:700})}</g>`,'خلاصة الوحدة 3'),
   cap:'ثلاث قواعد من الوحدة 3. مرّر المؤشر على كل منها.',side:[{tip:`بعد ${e('does / doesn\'t')} الفعل بلا s: ${e('Does it have…? It doesn\'t measure…')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'___ the radio have a dynamo?',o:['Does','Do'],a:0},{s:"No, they ___ have metal handles.",o:["don't","doesn't"],a:0},{s:'The solar panels ___ the battery.',o:['charge','charges'],a:0},{s:'The pliers are to the left ___ the scissors.',o:['of','on'],a:0}]}),title:'مختبر مصغّر: الوحدة 3'}]},
  {st:2,short:'الوحدة 4',title:'خلاصة الوحدة 4: الحركة والتعليمات',q:'كيف تقول إن الصاروخ يطير عمودياً لكن لا يرجع للخلف؟',ref:'ص 34–35',
   art:art(`<g data-tip="can + but + can't."><rect x="20" y="60" width="320" height="56" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,86,'A rocket can fly straight up,',{fs:14,w:700,c:'#fff'})}${TL(180,106,"but it can't reverse.",{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="تعليمات بفعل الأمر واتجاه."><rect x="20" y="140" width="320" height="56" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,166,'Move sideways three boxes',{fs:14,w:700})}${TL(180,186,'to the right.',{fs:14,w:700})}</g>`,'خلاصة الوحدة 4'),
   cap:'قاعدتان من الوحدة 4. مرّر المؤشر على كل منهما.',side:[{tip:`${e('a pair of')} للأشياء ذات الجزأين، و ${e('some')} للجمع.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'I need ___ headphones.',o:['a pair of','an'],a:0},{s:'Buy ___ amplifier.',o:['an','a'],a:0},{s:'We need ___ bolts.',o:['some','a'],a:0},{s:"Planes ___ fly sideways.",o:["can't","doesn't"],a:0}]}),title:'مختبر مصغّر: الوحدة 4'}]},
  {recap:['Does … have …? / Do … have …?','الاختصارات: doesn\'t, don\'t, isn\'t, can\'t, I\'m.','can …, but … can\'t …','a / an / some / a pair of.','الحروف الصامتة: knife, wrist, right.']}
 ],
 examples:[
  {title:'مثال 1: سؤال have',ref:'ص 32',q:`<p>حوّل إلى سؤال: The workshop has a forklift truck.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفاعل مفرد: ${e('Does')}.`},{t:`الخطوة 2: ${e('has')} تصبح ${e('have')}.`},{t:`الخطوة 3: ${e('Does the workshop have a forklift truck?')}`,final:true}]},
  {title:'مثال 2: can و but',ref:'ص 35',q:`<p>this knife … cut bread ✓ · cut metal ✗</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('This knife can cut bread')}`},{t:`الخطوة 2: نضيف ${e("but it can't cut metal")}.`},{t:`الخطوة 3: ${e("This knife can cut bread, but it can't cut metal.")}`,final:true}]},
  {title:'مثال 3: a / an / some',ref:'ص 35',q:`<p>ضع الكلمة المناسبة: ___ screws · ___ oven · ___ scissors</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('screws')} جمع: ${e('some screws')}.`},{t:`الخطوة 2: ${e('oven')} يبدأ بصوت متحرك: ${e('an oven')}.`},{t:`الخطوة 3: ${e('scissors')} من جزأين: ${e('a pair of scissors')}.`,final:true}]}
 ],
 quiz:[
  {q:'___ your brother have a car?',o:['Does','Do','Is','Has'],c:0,e:'Does + مفرد.'},
  {q:'The dynamo ___ electricity.',o:['produces','produce','producing','is produce'],c:0,e:'المفرد + s.'},
  {q:'I need ___ pliers.',o:['a pair of','an','a','one'],c:0,e:'a pair of pliers.'},
  {q:'الحرف الصامت في wrist:',o:['w','r','s','t'],c:0,e:'wrist تُنطق بلا w.'},
  {q:'kilo- معناها:',o:['ألف','كثير','حرارة','صغير'],c:0,e:'kilo = 1000.'},
  {q:"Planes ___ fly sideways, but they can turn.",o:["can't","doesn't","don't","isn't"],c:0,e:"can't + الفعل."}
 ]
});
})(PLCBOOK);

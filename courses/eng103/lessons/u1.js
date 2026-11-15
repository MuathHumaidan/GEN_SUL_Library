/* الوحدة 1 — Action: 1 Teamwork (ص 4–5) · 2 Training (ص 6–7) · 3 Method (ص 8–9)
   الشرح والأمثلة والمختبرات والرسوم من إعدادنا؛ تمارين الكتاب تُعرض تفاعلياً بجملها وصورها (bxd1.js) مع تمرين مقابل بجمل جديدة. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 1 Teamwork ========== */
const PIT=[[0,'wheel-gun','The wheel-gun mechanics loosen the nuts.','يفكّون الصواميل'],[1,'wheel-jack','The wheel-jack team raises the car off the ground.','يرفعون السيارة'],[1.5,'fuel','The fuel team pushes the nozzle into the socket.','يدخلون الفوهة في المقبس'],[2,'wheel-off','The wheel-off mechanics take the old wheels off.','يخلعون العجلات القديمة'],[2.5,'wheel-on','The wheel-on mechanics put the new wheels on.','يركّبون العجلات الجديدة'],[3,'wheel-gun','The wheel-gun mechanics tighten the nuts.','يشدّون الصواميل'],[4,'wheel-jack','The wheel-jack team lowers the car and takes the jacks away.','ينزلون السيارة'],[6.5,'fuel','The fuel team pulls out the nozzle.','يسحبون الفوهة'],[7,'driver','The driver leaves the pit lane.','السائق يغادر']];
function lab1(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">توقف الصيانة ثانية بثانية</h3><p class="sub">وقفة صيانة من إعدادنا مبنية على فكرة نص الكتاب ص 4–5. حرّك المؤشر الزمني، وشاهد ماذا يفعل كل فريق الآن، ثم اكتب التعليمة بفعل الأمر.</p>
  <label class="sub">الزمن: <b id="tv">0</b> ثانية</label><input type="range" id="t" min="0" max="${PIT.length-1}" step="1" value="0" style="width:100%">
  <div id="d"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الوصف والتعليمة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي فريق يعمل مرتين؟ متى؟</li><li>حوّل جملة الوصف إلى تعليمة: ماذا حذفنا؟</li><li>لماذا الوصف بالمضارع البسيط؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const teams=['wheel-gun','wheel-jack','fuel','wheel-off','wheel-on','driver'];
 const sh=()=>{const k=+$('#t').value,x=PIT[k];$('#tv').textContent=x[0];
  $('#d').innerHTML=art(`${teams.map((t,i)=>`<g data-tip="${t}"><rect x="${10+(i%3)*115}" y="${110+Math.floor(i/3)*60}" width="105" height="44" rx="10" fill="${t===x[1]?C.yel:C.paper}" stroke="${C.ink}" stroke-width="${t===x[1]?3:1.5}"/>${TL(62+(i%3)*115,137+Math.floor(i/3)*60,t,{fs:12,w:t===x[1]?700:400})}</g>`).join('')}`,'pit');
  const imp=x[2].replace(/^The [a-z- ]+ (mechanics|team|driver) /,'').replace(/^(loosen|raises|pushes|take|put|tighten|lowers|pulls|leaves)/,v=>({raises:'raise',pushes:'push',lowers:'lower',pulls:'pull',leaves:'leave'})[v]||v).replace('takes','take');
  $('#o').innerHTML=`<p class="sub">الوصف (المضارع البسيط):</p>${eb([x[2]])}<p class="sub">التعليمة في قائمة الفريق (فعل الأمر):</p>${eb([imp.charAt(0).toUpperCase()+imp.slice(1)])}<p class="sub">${x[3]}.</p>`};
 $('#t').oninput=sh;sh();
}
const IMP={raise:['Raise the car off the ground.','ارفع السيارة عن الأرض'],loosen:['Loosen the wheel nuts.','فكّ صواميل العجلة'],tighten:['Tighten the wheel nuts.','اشدد صواميل العجلة'],adjust:['Adjust the air pressure.','اضبط ضغط الهواء'],push:['Push the nozzle into the socket.','أدخل الفوهة في المقبس'],wait:['WAIT.','انتظر'],no:["Don't touch the hot tyres.",'لا تلمس الإطارات الساخنة']};
const LAB1A={title:'التعليمة بفعل الأمر',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، وشاهد التعليمة كما تُكتب في قائمة الفريق.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(IMP).map(k=>[k,k==='no'?"Don't + فعل":k])}],
 out:({v})=>{const [s,ar]=IMP[v];const w=s.split(' ');return{pieces:v==='no'?[["Don't",'q','النفي'],[w.slice(1).join(' '),'k',ar]]:[[w[0],'k','الفعل أولاً'],[w.slice(1).join(' '),'n','على ماذا؟']],say:s,why:v==='no'?`النهي: ${e("Don't")} + الفعل كما هو.`:'فعل الأمر يبدأ بالفعل مباشرة بلا فاعل، وهو أقصر طريقة لكتابة التعليمات.'}}})};
const PS={gun:['The wheel-gun mechanics','loosen','the nuts.'],jack:['The wheel-jack team','raises','the car off the ground.'],driver:['The driver','presses','a button in his cockpit.'],leader:['The team leader','adjusts','the air pressure.'],fuel:['Three members of the fuel team','move','forward.']};
const LAB1B={title:'وصف ما يحدث كل مرة: المضارع البسيط',w:(el,B)=>N.labB(el,B,{intro:'اختر من يقوم بالعمل، وشاهد الفعل بالمضارع البسيط.',
 controls:[{k:'s',label:'الفاعل',opts:[['gun','mechanics (جمع)'],['jack','team (مفرد)'],['driver','driver (مفرد)'],['leader','leader (مفرد)'],['fuel','members (جمع)']]}],
 out:({s})=>{const [a,v,o]=PS[s];const pl=/s$/.test(a.split(' ').pop())&&!/team$/.test(a);return{pieces:[[a,'x','الفاعل'],[v,'k',v.endsWith('s')?'الفعل + s':'الفعل كما هو'],[o,'n','']],say:`${a} ${v} ${o}`,why:v.endsWith('s')?'الفاعل مفرد (he / she / it)، فنضيف s للفعل.':'الفاعل جمع (they)، فالفعل كما هو.'}}})};
const R1=N.rule({title:'التعليمات بفعل الأمر، ووصف خطوات العمل بالمضارع البسيط',ref:'ص 4–5',
 intro:`فريق الصيانة في السباق يعمل بالثانية. قائد الفريق يعطي <b>تعليمات</b> قصيرة، ويكتب لكل فريق <b>قائمة تعليمات</b>. وحين يشرح ما يحدث في كل وقفة يستعمل <b>المضارع البسيط</b> لأنه يتكرر كل مرة.`,
 parts:[
 {t:'التعليمات بفعل الأمر',short:'Loosen the nuts.',old:[1],q:'كيف تكتب تعليمة قصيرة في قائمة عمل؟',ref:'ص 5',
  lead:`التعليمة تبدأ بالفعل مباشرة، بلا فاعل (لا نكتب ${e('You')}). هذا هو <b>فعل الأمر</b>، ويناسب قوائم التعليمات لأنه قصير وواضح.`,
  points:[`<b>الإثبات:</b> الفعل كما هو + الباقي: ${e('Raise the car off the ground. · Tighten the wheel nuts.')}`,`<b>النفي:</b> ${e("Don't")} + الفعل: ${e("Don't move the car.")}`,`<b>كلمة واحدة:</b> بعض التعليمات كلمة واحدة: ${e('WAIT. · STOP. · GO.')}`,`<b>أفعال الصيانة في الدرس:</b> ${e('loosen ↔ tighten · raise ↔ lower · bring out · adjust · push · pump')}`],
  grid:{head:['الوصف','التعليمة'],rows:[['The mechanics loosen the nuts.','Loosen the nuts.'],['They raise the car.','Raise the car.'],['He pushes the nozzle in.','Push the nozzle in.'],['They take the jacks away.','Take the jacks away.']]},
  pairs:[['You loosen the nuts.','Loosen the nuts.','في القائمة لا نكتب الفاعل.'],['Not move the car.',"Don't move the car.",'النهي بـ Don\'t.'],['Raises the car.','Raise the car.','فعل الأمر بلا s.']],
  art:art(`${[['loosen','ضدها','tighten'],['raise','ضدها','lower'],['put on','ضدها','take off']].map((r,i)=>`<g data-tip="فعلان متضادان"><rect x="20" y="${88+i*52}" width="120" height="36" rx="10" fill="${C.paper}" stroke="${C.ink}"/>${TL(80,111+i*52,r[0],{fs:13,w:700})}<path d="M145 ${106+i*52} L215 ${106+i*52}" stroke="${C.ink}" stroke-width="2"/><path d="M145 ${106+i*52} l8 -5 M145 ${106+i*52} l8 5 M215 ${106+i*52} l-8 -5 M215 ${106+i*52} l-8 5" stroke="${C.ink}" stroke-width="2"/><rect x="220" y="${88+i*52}" width="120" height="36" rx="10" fill="${C.yel}" stroke="${C.ink}"/>${TL(280,111+i*52,r[2],{fs:13,w:700})}</g>`).join('')}`,'opposites'),cap:'أفعال متضادة في الصيانة. مرّر المؤشر.',labs:[LAB1A]},
 {t:'وصف خطوات العمل بالمضارع البسيط',short:'They loosen the nuts.',old:[2],q:'لماذا يقول قائد الفريق They loosen the nuts وليس They are loosening؟',ref:'ص 4–5',
  lead:`حين نصف عملاً يتكرر بنفس الطريقة كل مرة نستعمل المضارع البسيط. ونربط الخطوات بكلمات الترتيب.`,
  points:[`<b>الجمع (they):</b> الفعل كما هو: ${e('The four wheel-on mechanics bring out the new wheels.')}`,`<b>المفرد (he / she / it):</b> الفعل + ${e('s')}: ${e('The driver presses a button. · The team leader adjusts the air pressure.')}`,`<b>كلمات الترتيب:</b> ${e('Then · Now · Finally · Immediately')}: ${e('Then they move back quickly.')}`,`<b>انتبه:</b> ${e('team')} و ${e('crew')} مفرد في الغالب: ${e('The team works together.')}`],
  grid:{head:['الفاعل','الفعل','مثال'],rows:[['they','verb','They tighten the nuts.'],['he / she / it','verb + s','He signals to the driver.'],['the team','verb + s','The team moves back.']]},
  pairs:[['The driver press the button.','The driver presses the button.','المفرد + s.'],['The mechanics moves forward.','The mechanics move forward.','الجمع بلا s.']],labs:[LAB1B]}
 ]});
B.lesson({
 id:'u1-l1',unit:1,order:1,pages:'4–5',
 title:'1 Teamwork — العمل الجماعي',
 summary:'فريق الصيانة في سباق السيارات: أسماء الفرق والقطع (wheel gun, jack, nozzle, hose, socket, flap)، والتعليمات بفعل الأمر في قوائم العمل، ووصف خطوات العمل المتكررة بالمضارع البسيط.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 4–5',html:`<p>تقرأ عن فريق يغيّر عجلات سيارة سباق في عشر ثوانٍ. ستتعلم:</p><ol><li>أسماء أدوات الفريق وقطع السيارة.</li><li>كتابة التعليمات بفعل الأمر.</li><li>وصف خطوات العمل بالمضارع البسيط.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u1-l1'](el,B)},
  ...R1.theory,
  {h:'تمارين الكتاب',ref:'ص 4–5',html:
   bk(1,'ص 4','ناقش مع زميلك: كم ميكانيكياً في فريق الصيانة في سباق كبير؟ وما أعمالهم؟',['c) about 20 (twenty mechanics)','wheel-gun · wheel-on · wheel-off · wheel-jack · fuel'],'الإجابات من النص في التمرين 2.')+
   bk(2,'ص 4','اقرأ المقابلة مع رئيس الفريق، وتحقق من إجاباتك في 1.',['20 mechanics · 5 teams: wheel-gun, wheel-on, wheel-off, wheel-jack, fuel'])+
   bk(3,'ص 5','سمِّ الأجزاء في الصورة.',['1 wheel gun','2 jack','3 hose','4 nozzle','5 flap','6 socket'])+
   bk(4,'ص 5','أكمل قائمة التعليمات لكل فريق.',['Team 1: 1 Place the jacks under the car. · 4 Lower the car. · 5 Take the jacks away.','Team 2: 4 Raise a hand (to signal that everything is OK).','Team 3: 2 Take the old wheels away.','Team 4: 2 Adjust the air pressure. · 4 Take the covers off the new wheels. · 5 Put the new wheels on.','Team 5: 1 Push the nozzle into the fuel socket. · 2 Pump fuel into the car. · 3 Pull out the fuel nozzle. · 4 Clean spilled fuel off the car.'],'إجابات نموذجية من النص؛ تُقبل صياغات قريبة.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u1-l1'](el,B),title:'شرح مرئي'}]},
  ...R1.stations,
  {recap:['wheel gun · jack · nozzle · hose · socket · flap','التعليمة بفعل الأمر: Loosen the nuts. · WAIT. · Don\'t move.','loosen ↔ tighten · raise ↔ lower','الوصف بالمضارع البسيط: They bring out the wheels. · The driver presses a button.']}
 ],
 lab:lab1,
 examples:[
  {title:'مثال 1: من الوصف إلى التعليمة',ref:'ص 5',q:`<p>حوّل إلى تعليمة: ${e('The wheel-off mechanics take the old wheels off.')}</p>`,given:[],solve:()=>[{t:'الخطوة 1: نحذف الفاعل The wheel-off mechanics.'},{t:'الخطوة 2: الفعل يبقى كما هو في أول الجملة.'},{t:`الخطوة 3: ${e('Take the old wheels off.')}`,final:true}]},
  {title:'مثال 2: الفعل مع المفرد',ref:'ص 4',q:`<p>أكمل: ${e('The driver ___ (slow) down.')}</p>`,given:[],solve:()=>[{t:'الخطوة 1: The driver مفرد (he).'},{t:'الخطوة 2: المضارع البسيط مع he: الفعل + s.'},{t:`الخطوة 3: ${e('The driver slows down.')}`,final:true}]},
  {title:'مثال 3: الفعل المضاد',ref:'ص 5',q:`<p>التعليمة الأولى ${e('Loosen the wheel nuts.')} فما التعليمة الأخيرة بعد تركيب العجلة الجديدة؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: ضد ${e('loosen')} هو ${e('tighten')}.`},{t:'الخطوة 2: فعل الأمر في أول الجملة.'},{t:`الخطوة 3: ${e('Tighten the wheel nuts.')}`,final:true}]}
 ],
 quiz:[
  {q:'The opposite of loosen:',o:['tighten','lower','raise','adjust'],c:0,e:'loosen ↔ tighten.'},
  {q:'The opposite of raise the car:',o:['lower the car','take the car','push the car','bring the car'],c:0,e:'raise ↔ lower.'},
  {q:'Checklist: ___ the jacks away.',o:['Take','Takes','You take','Taking'],c:0,e:'فعل الأمر.'},
  {q:"___ move the car!",o:["Don't","Not","No","Doesn't"],c:0,e:"النهي بـ Don't."},
  {q:'The driver ___ a button in his cockpit.',o:['presses','press','pressing','are pressing'],c:0,e:'المفرد + s.'},
  {q:'The fuel guys push the ___ into the fuel socket.',o:['nozzle','flap','jack','wheel gun'],c:0,e:'nozzle = الفوهة.'}
 ]
});

/* ========== 2 Training ========== */
const CK=[['put the new tyres on','put','them on','putting','put'],['tighten the wheel nuts','tighten','them','tightening','tightened'],['adjust the air pressure','adjust','it','adjusting','adjusted'],['take the cover off','take','it off','taking','taken'],['switch on the power','switch','it on','switching','switched'],['test the circuits','test','them','testing','tested']];
function lab2(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">قائمة المتدرب</h3><p class="sub">قائمة من إعدادنا مبنية على التمرين 4 ص 7. غيّر حالة كل مهمة، ثم اضغط «ماذا يقول المتدرب؟».</p><div id="l"></div>
  <div class="ph-row"><button type="button" class="btn pri" id="go">ماذا يقول المتدرب؟</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اجعل مهمة «in progress»: أي زمن ظهر؟ وما الكلمة التي تسبقه؟</li><li>اجعل مهمة «not yet done»: أين جاءت yet؟</li><li>متى نقول I've taken it off ومتى I've taken off it؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const stt=CK.map((_,i)=>[0,1,2][i%3]);const nm=['done','in progress','not yet done'];
 const draw=()=>{$('#l').innerHTML=CK.map((c,i)=>`<div class="ph-row" style="justify-content:space-between"><span lang="en" dir="ltr">${c[0]}</span><select data-i="${i}">${nm.map((n,k)=>`<option value="${k}"${stt[i]===k?' selected':''}>${n}</option>`).join('')}</select></div>`).join('');
  el.querySelectorAll('select[data-i]').forEach(s=>s.onchange=()=>{stt[+s.dataset.i]=+s.value})};
 const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
 $('#go').onclick=()=>{const L=[['S','How are you getting on?']];CK.forEach((c,i)=>{const rest=c[0].split(' ').slice(1).join(' ');
   if(stt[i]===0)L.push(['T',`I've ${c[4]} ${rest}.`]);else if(stt[i]===1)L.push(['T',`I'm still ${c[3]} ${rest}. It's almost done.`]);else{L.push(['S',`Have you ${c[4]==='put'?'put':c[4]} ${rest} yet?`]);L.push(['T',`No, I haven't done that yet. I'll do it next.`])}});
  $('#o').innerHTML=dl(L.map(x=>[x[0]==='S'?'Supervisor':'Trainee',x[1]]))};
 draw();$('#go').onclick();
}
const PV={off:['Take','the tyres','off'],on:['Put','the new wheel','on'],out:['Bring','the new wheels','out'],away:['Take','the jack','away'],up:['Lift','the car','up']};
const LAB2A={title:'الفعل المركب ومكان المفعول',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل المركب ونوع المفعول، وشاهد مكانه في الجملة.',
 controls:[{k:'v',label:'الفعل',opts:[['off','take off'],['on','put on'],['out','bring out'],['away','take away'],['up','lift up']]},{k:'o',label:'المفعول',opts:[['n1','اسم بعد الفعل'],['n2','اسم في الوسط'],['p','ضمير (it / them)']]}],
 out:({v,o})=>{const [a,n,p]=PV[v];const pr=/s$/.test(n)?'them':'it';
  const pc=o==='n1'?[[a,'k','الفعل'],[p,'q','الأداة'],[n,'n','الاسم']]:o==='n2'?[[a,'k','الفعل'],[n,'n','الاسم'],[p,'q','الأداة']]:[[a,'k','الفعل'],[pr,'x','الضمير'],[p,'q','الأداة']];
  return{pieces:pc,say:pc.map(x=>x[0]).join(' ')+'.',why:o==='p'?`مع الضمير ${e('it / them')} يأتي الضمير في الوسط دائماً: ${e(`${a} ${pr} ${p}`)}، ولا نقول ${e(`${a} ${p} ${pr}`)}.`:'مع الاسم يصح المكانان: بعد الفعل أو بعد الأداة.'}}})};
const PP={now:["I'm loosening the nuts now.",'is/am/are + ing','العمل جارٍ الآن'],done:["I've loosened the nuts.",'have + التصريف الثالث','انتهى العمل والنتيجة الآن'],q:['Have you loosened the nuts yet?','Have … yet?','هل انتهى (كان متوقعاً)؟'],neg:["I haven't loosened them yet.","haven't … yet",'لم ينته بعد'],still:["I'm still loosening them.",'still + ing','ما زال مستمراً']};
const LAB2B={title:'الآن أم انتهى؟ المضارع المستمر والمضارع التام مع yet',w:(el,B)=>N.labB(el,B,{intro:'اختر حالة العمل، وشاهد الجملة المناسبة.',
 controls:[{k:'s',label:'الحالة',opts:[['now','جارٍ الآن'],['still','ما زال'],['done','انتهى'],['q','سؤال: هل انتهى؟'],['neg','لم ينته بعد']]}],
 out:({s})=>{const [t,f,ar]=PP[s];return{pieces:[[t,s==='now'||s==='still'?'q':'k',f]],say:t,why:ar+'. '+(s==='q'||s==='neg'?`${e('yet')} في آخر السؤال والنفي: كان المتكلم يتوقع أن ينتهي العمل قبل الآن.`:s==='done'?'المضارع التام: انتهى العمل ونتيجته ظاهرة الآن.':'المضارع المستمر لعمل يحدث لحظة الكلام.')}}})};
const R2=N.rule({title:'الأفعال المركبة، والمضارع المستمر والمضارع التام مع yet',ref:'ص 6–7، ص 100–101، ص 104',
 intro:`في التدريب يعطي المدرب تعليمة، والمتدرب يؤكدها مرتين: ماذا <b>يفعل الآن</b>، ثم ماذا <b>أنجز</b>. فنحتاج ثلاث صيغ للفعل نفسه، والكثير من هذه الأفعال <b>مركبة</b> مثل ${e('take off')}.`,
 parts:[
 {t:'الأفعال المركبة ومكان المفعول',short:'take them off',old:[1],q:'لماذا نقول Take them off ولا نقول Take off them؟',ref:'ص 6، ص 104',
  lead:`الفعل المركب = فعل + أداة صغيرة (${e('off, on, out, up, away, down, in')}) تغيّر معناه أو تحدد اتجاهه.`,
  points:[`<b>أمثلة الدرس:</b> ${e('lift up · pick up · pull out · push in · put down · put on · take away · take off · bring out')}`,`<b>المفعول اسم:</b> يصح المكانان: ${e('Take the tyres off. = Take off the tyres.')}`,`<b>المفعول ضمير:</b> بين الفعل والأداة فقط: ${e('Take them off.')}`,`القاعدة نفسها في كل الأزمنة: ${e("I'm taking them off. · I've taken them off.")}`],
  grid:{head:['فعل الأمر','المضارع المستمر','المضارع التام'],rows:[['Take the tyres off.',"I'm taking the tyres off.","I've taken the tyres off."],['Take off the tyres.',"I'm taking off the tyres.","I've taken off the tyres."],['Take them off.',"I'm taking them off.","I've taken them off."]]},
  pairs:[['Take off them.','Take them off.','الضمير في الوسط.'],["I've taken off it.","I've taken it off.",'الضمير في الوسط.']],labs:[LAB2A]},
 {t:'ماذا تفعل الآن؟ وماذا أنجزت؟',short:"I'm doing / I've done",old:[2],q:'بماذا تجيب المدرب وأنت في منتصف العمل؟ وبماذا تجيبه بعد أن تنتهي؟',ref:'ص 6–7، ص 100–101',
  lead:`المضارع المستمر لما تفعله لحظة الكلام، والمضارع التام لعمل انتهى ونتيجته موجودة الآن.`,
  points:[`<b>المضارع المستمر:</b> ${e('am / is / are')} + الفعل ${e('ing')}: ${e("Right. I'm bringing them out now.")}`,`<b>المضارع التام:</b> ${e('have / has')} + التصريف الثالث: ${e("OK, I've brought them out.")}`,`<b>التصريف الثالث:</b> المنتظم ${e('ed')}: ${e('loosened, adjusted')}، والشاذ يُحفظ: ${e('take → taken · bring → brought · put → put · do → done')}`,`<b>${e('still')}:</b> مع المستمر لعمل لم يتوقف: ${e("I'm still tightening the wheel nuts.")}`],
  grid:{head:['التعليمة','الآن','انتهى'],rows:[['Bring out the new tyres.',"I'm bringing them out now.","I've brought them out."],['Lift up the car.',"I'm lifting it up now.","I've lifted it up."],['Switch off the systems.',"I'm switching them off now.","I've switched them off."]]},
  pairs:[["I'm bring them out.","I'm bringing them out.",'المستمر بـ ing.'],["I've bringed them out.","I've brought them out.",'bring فعل شاذ.']]},
 {t:'yet مع المضارع التام',short:'Have you … yet?',old:[3],q:'لماذا يسأل المشرف Have you adjusted the air pressure yet؟',ref:'ص 7، ص 101',
  lead:`${e('yet')} تأتي في آخر سؤال المضارع التام ونفيه، وتعني أن المتكلم كان يتوقع أن ينتهي العمل قبل الآن.`,
  points:[`<b>السؤال:</b> ${e('Has Bill finished that job yet?')} (كان يتوقع أن ينهيه)`,`<b>النفي:</b> ${e("John hasn't cleaned the car yet.")} (كان يتوقع أن ينظفها)`,`<b>الجواب القصير:</b> ${e("Yes, I have. · No, I haven't done that yet. I'll do it next.")}`,`<b>عبارات لكسب الوقت:</b> ${e('Hang on. · Just a minute. · One minute. · Nearly finished. · Almost done.')}`],
  grid:{head:['الحالة','الجملة'],rows:[['done',"I've put the new tyres on."],['in progress',"I'm still tightening the wheel nuts. It's almost done."],['not yet done',"I haven't adjusted the air pressure yet."]]},
  pairs:[['Have you yet adjusted it?','Have you adjusted it yet?','yet في آخر الجملة.'],["I've adjusted it yet.","I've already adjusted it. / I've adjusted it.",'yet مع السؤال والنفي فقط.']],labs:[LAB2B]}
 ]});
B.lesson({
 id:'u1-l2',unit:1,order:2,pages:'6–7',
 title:'2 Training — التدريب',
 summary:'تدريب ميكانيكي على تغيير العجلة: الأفعال المركبة (take off, put on, lift up…) ومكان الضمير فيها، والمضارع المستمر لما تفعله الآن والمضارع التام لما أنجزته، و yet في السؤال والنفي، وعبارات كسب الوقت.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 6–7',html:`<p>أنت متدرب في فريق صيانة، والمدرب يعطيك التعليمات ويتابعك. ستتعلم:</p><ol><li>أفعالاً مركبة مثل ${e('take off')} و ${e('put on')} ومكان المفعول معها.</li><li>كيف تؤكد ما تفعله الآن وما أنجزته.</li><li>السؤال والنفي بـ ${e('yet')}.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u1-l2'](el,B)},
  ...R2.theory,
  {h:'تمارين الكتاب',ref:'ص 6–7، ص 111',html:
   bk(1,'ص 6','استمع إلى المدرب، ورقّم التعليمات من 1 إلى 10 بترتيبها الصحيح.',['1 Bring the new wheel out.','2 Adjust the air pressure in the tyre.','3 Loosen the wheel nuts.','4 Put the jack under the car.','5 Raise the car with the jack.','6 Take the old wheel off.','7 Put the new wheel on.','8 Tighten the wheel nuts.','9 Lower the car and take the jack away.','10 Take the old wheel away.'])+
   bk(2,'ص 6','طابق الصور بالأفعال في الصندوق.',['1 put down','2 pick up','3 take off','4 put on','5 take away','6 push in','7 lift up','8 pull out'],'من قراءتنا للصور.')+
   bk(3,'ص 6','استمع وردّ على التعليمات بسرعة: أكّد (a) ما تفعله الآن ثم (b) ما أنجزته.',["1 I'm bringing them out now. / I've brought them out.","2 I'm lifting it up now. / I've lifted it up.","3 I'm taking them off now. / I've taken them off.","4 I'm putting them on now. / I've put them on.","5 I'm taking them away now. / I've taken them away.","6 I'm pumping it in now. / I've pumped it in.","7 I'm switching them off now. / I've switched them off.","8 I'm turning it on now. / I've turned it on."])+
   bk(4,'ص 7','نشاط ثنائي: حوارات بين مشرف ومتدرب من القوائم.',null,'إجابات حرة على نمط المثال.')+
   bk(5,'ص 7','مهمة جماعية: اختر عملاً من أعمال السيارة واكتب تعليماته.',null)+
   bk(6,'ص 7 و ص 111','افتح ص 111 واختر التعليمات المفيدة لعملك، ثم راجع تعليماتك.',['Changing a wheel: Loosen the wheel nuts. · Place a jack under the car. · Lift up the car. · Take off the wheel nuts. · Take off the old wheel. · Put the new wheel on. · Put on the wheel nuts. · Tighten the wheel nuts. · Lower the car. · Take away the jack.','Cleaning a spark plug: Take off the spark plug cover. · Loosen the spark plug. · Remove the spark plug from the socket. · Clean the spark plug. · Replace the spark plug in the socket. · Tighten the spark plug. · Replace the spark plug cover.','Checking the oil level: Switch off the engine. · Take out the dipstick. · Clean the oil off the dipstick. · Put back the dipstick. · Take out the dipstick again. · Check the oil level. · Take off the oil filler cap. · Add some oil (if necessary). · Put the oil filler cap on. · Tighten the oil filler cap.'],'ترتيب نموذجي؛ يُقبل ترتيب آخر منطقي.')+
   bk(7,'ص 7','لعب أدوار: مدير الورشة يعلّم متدرباً جديداً العمل.',null)},
  {h:'الاستماع',ref:'ص 6',html:au('02','ص 6 — التمرين 1','المدرب يعطي المتدرب تعليمات تغيير العجلة.')+au('03','ص 6 — التمرين 3','ثماني تعليمات سريعة.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u1-l2'](el,B),title:'شرح مرئي'}]},
  ...R2.stations,
  {recap:['Take the tyres off. = Take off the tyres. · Take them off (لا: take off them).',"I'm taking them off now. (الآن)","I've taken them off. (انتهى)","Have you adjusted it yet? — No, I haven't done that yet.",'Hang on. · Just a minute. · Almost done.']}
 ],
 lab:lab2,
 examples:[
  {title:'مثال 1: مكان الضمير',ref:'ص 6',q:`<p>استبدل ${e('the old wheel')} بضمير: ${e('Take away the old wheel.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('the old wheel')} مفرد ← ${e('it')}.`},{t:'الخطوة 2: الضمير يأتي بين الفعل والأداة.'},{t:`الخطوة 3: ${e('Take it away.')}`,final:true}]},
  {title:'مثال 2: التأكيد مرتين',ref:'ص 6',q:`<p>المدرب قال: ${e('Put on the new wheels.')} أكّد ما تفعله الآن ثم ما أنجزته.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الآن: ${e("Right. I'm putting them on now.")}`},{t:`الخطوة 2: ${e('put')} تصريفه الثالث ${e('put')}.`},{t:`الخطوة 3: ${e("OK, I've put them on.")}`,final:true}]},
  {title:'مثال 3: yet',ref:'ص 7',q:`<p>لم تختبر الدوائر بعد. أجب المشرف: ${e('Have you tested the circuits yet?')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الجواب القصير: ${e("No, I haven't.")}`},{t:`الخطوة 2: ${e('yet')} في آخر النفي.`},{t:`الخطوة 3: ${e("No, I haven't tested them yet. I'll do it next.")}`,final:true}]}
 ],
 quiz:[
  {q:'Take ___ off.',o:['them','off them','they','their'],c:0,e:'الضمير بين الفعل والأداة.'},
  {q:"Right. I'm ___ them out now.",o:['bringing','bring','brought','brings'],c:0,e:'المستمر + ing.'},
  {q:"OK, I've ___ them out.",o:['brought','bringed','bring','bringing'],c:0,e:'bring → brought.'},
  {q:'Have you adjusted the air pressure ___?',o:['yet','still','now','already yet'],c:0,e:'yet في آخر السؤال.'},
  {q:"I'm ___ tightening the wheel nuts.",o:['still','yet','ever','just yet'],c:0,e:'still مع المستمر.'},
  {q:'Phrase to gain more time:',o:['Hang on.','Go on.','Get out.','Come back.'],c:0,e:'Hang on. Just a minute.'}
 ]
});

/* ========== 3 Method ========== */
const DEV={ticket:['ticket machine','touching','the screen','touch'],phone:['phone','pressing','the green button','press'],motor:['outboard motor','pulling','the cord','pull'],bike:['motorbike engine','kicking','the lever','kick'],alarm:['alarm','breaking','a laser beam','break'],car:['car engine','turning','the key','turn'],solar:['solar battery','putting','it under a lamp','put']};
function lab3(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">كيف تشغّله؟</h3><p class="sub">أجهزة من إعدادنا مبنية على التمرينين 2 و 4 ص 8. اختر الجهاز، ثم اختر طريقة التشغيل الصحيحة.</p>
  <label class="sub">الجهاز</label><select id="d">${Object.keys(DEV).map(k=>`<option value="${k}">${DEV[k][0]}</option>`).join('')}</select>
  <div id="m" class="ph-row" style="flex-wrap:wrap;margin-top:8px"></div><div id="fb"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">السؤال والجواب</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما صيغة الفعل بعد by؟</li><li>اكتب الجملة نفسها بـ by means of: ماذا يأتي بعدها؟</li><li>كيف تسأل عن الطريقة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=(pick)=>{const k=$('#d').value,[n,ing,o,v]=DEV[k];const vs=[...new Set(Object.values(DEV).map(x=>x[3]))];
  $('#m').innerHTML=vs.map(x=>`<button type="button" class="btn" data-v="${x}" lang="en">${x}</button>`).join('');
  el.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>sh(b.dataset.v));
  $('#fb').innerHTML=pick?(pick===v?`<p class="sub" style="color:var(--green,#2e8b57)">صحيح.</p>`:`<p class="sub" style="color:var(--red)">ليس هذا. جرّب فعلاً آخر.</p>`):'';
  $('#o').innerHTML=pick===v?eb([`How do you start the ${n}?`,`You start it by ${ing} ${o}.`,`By ${ing} ${o}.`]):eb([`How do you start the ${n}?`]);};
 $('#d').onchange=()=>sh();sh();
}
const BY={pull:['You start the outboard motor','by','pulling','the cord.'],break:['The burglar activated the alarm','by','breaking','a laser beam.'],touch:['The passenger activates the machine','by','touching','the screen.'],rotate:['You activate the accelerator','by','rotating','the handle.']};
const LAB3A={title:'الطريقة: by + ing',w:(el,B)=>N.labB(el,B,{intro:'اختر الجهاز، وشاهد الطريقة بـ by + الفعل بـ ing.',
 controls:[{k:'d',label:'الجهاز',opts:[['pull','outboard motor'],['break','alarm'],['touch','ticket machine'],['rotate','accelerator']]}],
 out:({d})=>{const [a,b,c,o]=BY[d];return{pieces:[[a,'x','الجهاز'],[b,'q','الطريقة'],[c,'k','فعل + ing'],[o,'n','']],say:`${a} ${b} ${c} ${o}`,why:`بعد ${e('by')} يأتي الفعل بـ ${e('ing')}، لأن ${e('by')} حرف جر.`}}})};
const MN={by:['by','a camera in its head.','by + اسم'],using:['using','a camera in its head.','using + اسم'],byusing:['by using','a camera in its head.','by using + اسم'],means:['by means of','a camera in its head.','by means of + اسم']};
const LAB3B={title:'by · using · by means of + الأداة',w:(el,B)=>N.labB(el,B,{intro:'اختر الكلمة، وشاهد أنها كلها تعطي المعنى نفسه: الأداة التي يعمل بها الجهاز.',
 controls:[{k:'m',label:'الكلمة',opts:[['by','by'],['using','using'],['byusing','by using'],['means','by means of']]}],
 out:({m})=>{const [w,o,f]=MN[m];return{pieces:[['The robot can look ahead','x','العمل'],[w,'q',f],[o,'k','الأداة']],say:`The robot can look ahead ${w} ${o}`,why:'الأربع بالمعنى نفسه. بعدها اسم (الأداة)، أما by وحدها فيأتي بعدها اسم أو فعل بـ ing.'}}})};
const R3=N.rule({title:'السؤال عن الطريقة، و by + ing، و by means of',ref:'ص 8–9، ص 106',
 intro:`حين تشرح كيف يعمل جهاز تذكر شيئين: <b>الفعل</b> الذي تقوم به (تضغط، تسحب، تلمس)، أو <b>الأداة</b> التي يعمل بها الجهاز (حساس، كاميرا).`,
 parts:[
 {t:'الطريقة بفعل: by + ing',short:'by pulling the cord',old:[1],q:'كيف تقول: تشغّل المحرك بسحب الحبل؟',ref:'ص 8، ص 106',
  lead:`نسأل عن الطريقة بـ ${e('How')}، ونجيب بـ ${e('by')} + الفعل بـ ${e('ing')}.`,
  points:[`<b>السؤال:</b> ${e('How does the passenger activate the ticket machine?')} ${e('How do you start the outboard motor?')}`,`<b>الجواب الكامل:</b> ${e('He activates it by touching the screen.')}`,`<b>الجواب القصير:</b> ${e('By touching the screen.')}`,`<b>فعلان:</b> ${e('You switch on the phone by picking up the handset and pressing the green button.')}`,`<b>إملاء ing:</b> ${e('touch → touching · rotate → rotating · put → putting')}`],
  grid:{head:['الجهاز','الطريقة'],rows:[['You start the outboard motor','by pulling the cord.'],['The burglar activated the alarm','by breaking a laser beam.'],['You activate the accelerator','by rotating the handle.']]},
  pairs:[['by pull the cord','by pulling the cord','بعد by الفعل بـ ing.'],['How you start it?','How do you start it?','السؤال بـ do / does.']],labs:[LAB3A]},
 {t:'الأداة: using · by means of',short:'by means of sensors',old:[2],q:'كيف يرى الروبوت ما أمامه؟',ref:'ص 9، ص 106',
  lead:`حين يعمل الجهاز بأداة أو جهاز آخر نذكرها باسمها بعد ${e('by · using · by using · by means of')}.`,
  points:[`<b>by + اسم:</b> ${e('It works by sensors.')} (أقل استعمالاً)`,`<b>using / by using + اسم:</b> ${e('The robot can look ahead using a camera.')}`,`<b>by means of + اسم:</b> ${e('It works by means of sensors and wireless technology.')} (أكثر رسمية)`,`<b>السؤال:</b> ${e('How does it detect walls? — By a sensor in its chest.')}`],
  grid:{head:['العمل','الكلمة','الأداة'],rows:[['The robot can look ahead','using','a camera in its head.'],['It receives instructions','by means of','a wireless receiver.'],['It detects walls','by using','a sensor in its chest.']]},
  pairs:[['by means of using a camera','by means of a camera','by means of + اسم مباشرة.'],['using of a camera','using a camera','using بلا of.']],labs:[LAB3B]}
 ]});
B.lesson({
 id:'u1-l3',unit:1,order:3,pages:'8–9',
 title:'3 Method — الطريقة',
 summary:'كيف تشغّل الأجهزة أو تفعّلها: السؤال بـ How do you…? والجواب بـ by + الفعل بـ ing، والأداة بعد using و by means of، مع قراءة عن روبوت يقود دراجة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 8–9',html:`<p>تشرح كيف يعمل جهاز وكيف نشغّله. ستتعلم:</p><ol><li>السؤال عن الطريقة بـ ${e('How')}.</li><li>الجواب بـ ${e('by')} + الفعل بـ ${e('ing')}.</li><li>ذكر الأداة بـ ${e('using')} و ${e('by means of')}.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u1-l3'](el,B)},
  ...R3.theory,
  {h:'تمارين الكتاب',ref:'ص 8–9',html:
   bk(1,'ص 8','كيف تشغّل هذه الأجهزة أو تفعّلها؟',null,'نقاش؛ الإجابات في التمرين 2.')+
   bk(2,'ص 8','أكمل الجمل بالأفعال في الصندوق.',['1 touching','2 picking up · pressing','3 pulling','4 switching on · kicking','5 breaking'])+
   bk(3,'ص 8','كوّن أسئلة وأجوبة على نمط المثال.',['How do you switch on the phone? — You do it by picking up the handset and pressing the green button.','How does the user start the outboard motor? — By pulling the handle of the cord.','How does the rider start the engine? — By switching on the battery and kicking the lever downwards.','How did the burglar activate the alarm? — By breaking the laser beam.'],'إجابات نموذجية.')+
   bk(4,'ص 8','طابق الأجهزة بطرق تشغيلها.',['1 c','2 f','3 a','4 e','5 b','6 d'])+
   bk(5,'ص 8','كوّن أسئلة وأجوبة عن الأجهزة في 4.',null,'على نمط المثال.')+
   bk(6,'ص 9','اكتب جملاً تشرح كيف تُشغّل الأجهزة في 4.',['1 You activate the accelerator on a motorbike by rotating the handle.','2 The user activates a voice-operated computer by speaking to it.','3 You activate a solar battery by putting it under an electric lamp.','4 The passenger activates the emergency stop in a train by pulling the lever.','5 The customer activates the shop door alarm by stepping on a sensor in the door mat.','6 The driver starts the car engine by inserting the key and turning it.'],'إجابات نموذجية؛ يُقبل أي فاعل من القائمة.')+
   bk(7,'ص 9','ماذا يستطيع هذا الروبوت أن يفعل؟ وكيف يعمل؟ ناقش.',null)+
   bk(8,'ص 9','اقرأ المقال واكتب أسماء الأجهزة ومكانها في الجدول.',['1 sensor · body','2 (wireless) receiver · box on its back','3 sensor · frame of the bike','4 camera · head','5 sensor · chest'])+
   bk(9,'ص 9','اكتب أسئلة المقابلة مع مخترع الروبوت.',['1 What can the robot do?','2 How does it work?','3 How does it detect changes in the surface of the road?','4 How does it detect walls?','5 How does it look ahead?'],'أسئلة نموذجية؛ تُقبل صياغات قريبة.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u1-l3'](el,B),title:'شرح مرئي'}]},
  ...R3.stations,
  {recap:['How do you start the outboard motor?','You start it by pulling the cord. · By pulling the cord.','by + فعل بـ ing','using · by using · by means of + الأداة','It works by means of sensors and wireless technology.']}
 ],
 lab:lab3,
 examples:[
  {title:'مثال 1: by + ing',ref:'ص 8',q:`<p>اكتب: تشغّل السيارة بإدخال المفتاح وتدويره.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('You start the car engine by')}`},{t:`الخطوة 2: الفعلان بـ ing: ${e('inserting')} و ${e('turning')}.`},{t:`الخطوة 3: ${e('You start the car engine by inserting the key and turning it.')}`,final:true}]},
  {title:'مثال 2: السؤال عن الطريقة',ref:'ص 8',q:`<p>اسأل عن طريقة تشغيل جرس باب المحل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('How')}.`},{t:`الخطوة 2: ${e('do you')} + الفعل كما هو.`},{t:`الخطوة 3: ${e('How do you activate the shop door alarm?')}`,final:true}]},
  {title:'مثال 3: by means of',ref:'ص 9',q:`<p>الروبوت يستقبل التعليمات بجهاز استقبال لاسلكي. اكتبها بـ ${e('by means of')}.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('The robot receives instructions')}`},{t:`الخطوة 2: ${e('by means of')} + الأداة (اسم).`},{t:`الخطوة 3: ${e('The robot receives instructions by means of a wireless receiver.')}`,final:true}]}
 ],
 quiz:[
  {q:'You start the motor by ___ the cord.',o:['pulling','pull','pulls','to pull'],c:0,e:'by + ing.'},
  {q:'___ do you activate the alarm?',o:['How','What','Which','Who'],c:0,e:'How للطريقة.'},
  {q:'The robot looks ahead ___ a camera.',o:['using','by means','using of','by using of'],c:0,e:'using + اسم.'},
  {q:'It works by means ___ sensors.',o:['of','by','with','for'],c:0,e:'by means of.'},
  {q:'How does the passenger activate the ticket machine? — ___',o:['By touching the screen.','By touch the screen.','He touching the screen.','For touching the screen.'],c:0,e:'By + ing.'},
  {q:'You activate a voice-operated computer by ___ to it.',o:['speaking','speak','spoke','speaks'],c:0,e:'by + ing.'}
 ]
});
})(PLCBOOK);

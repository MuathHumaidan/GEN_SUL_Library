/* الوحدة 8 — Reporting: الدرس 8.1 Recent incidents (ص 58–59) والدرس 8.2 Damage and loss (ص 60–61) */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,upd,ab,sp}=N;

/* الأفعال: [الأصل، الماضي، التصريف الثالث، المعنى، شاذ؟] */
const VERBS=[['break','broke','broken','يكسر',1],['buy','bought','bought','يشتري',1],['check','checked','checked','يفحص',0],['crash','crashed','crashed','يصطدم',0],['cut','cut','cut','يقطع / يجرح',1],['drive','drove','driven','يقود',1],['fall','fell','fallen','يسقط',1],['have','had','had','يملك / يحدث له',1],['lose','lost','lost','يفقد',1],['order','ordered','ordered','يطلب (يوصي على)',0],['put','put','put','يضع',1],['repair','repaired','repaired','يصلح',0],['sell','sold','sold','يبيع',1],['send','sent','sent','يرسل',1],['speak','spoke','spoken','يتحدث',1],['steal','stole','stolen','يسرق',1],['take','took','taken','يأخذ',1],['write','wrote','written','يكتب',1],['change','changed','changed','يغيّر',0],['clean','cleaned','cleaned','ينظّف',0]];
const OBJ={break:'the window',buy:'some new tools',check:'the brakes',crash:'the van',cut:'the cable',drive:'the truck into the garage',fall:'',have:'an accident',lose:'the key',order:'the new parts',put:'the fuses in the box',repair:'the tyres',sell:'the old machine',send:'the email',speak:'to the supplier',steal:'the laptop',take:'the hard drive out',write:'the report',change:'the oil',clean:'the spark plugs'};
const SUBJ=[['I','have'],['You','have'],['He','has'],['She','has'],['We','have'],['They','have']];
function lab81(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">كوّن جملة بالمضارع التام</h3>
  <p class="sub">مبني على «Language» ص 58. اختر الفعل والفاعل ونوع الجملة، وشاهد الجملة وكيف تُبنى. (الأمثلة من عندنا.)</p>
  <select class="ph-sel" id="vv">${VERBS.map((v,i)=>`<option value="${i}">${v[0]} — ${v[3]}</option>`).join('')}</select>
  <div class="ph-row">${SUBJ.map((s,i)=>`<button type="button" class="btn${i===2?' pri':''}" data-s="${i}">${s[0]}</button>`).join('')}</div>
  <div class="ph-row">${[['+','إثبات'],['-','نفي'],['?','سؤال']].map(([k,l],i)=>`<button type="button" class="btn${i?'':' pri'}" data-f="${k}">${l}</button>`).join('')}</div>
  <div class="pk-facts" id="vf"></div><div id="vo"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">جدول الأفعال</h3>
  <div class="tbx"><table class="vt" dir="ltr"><thead><tr><th>Base</th><th>Past</th><th>Past participle</th></tr></thead><tbody>${VERBS.map(v=>`<tr><td class="en">${v[0]}</td><td class="en">${v[1]}</td><td class="en">${v[2]}${v[4]?' <span style="color:var(--stop);font-size:12px">●</span>':''}</td></tr>`).join('')}</tbody></table></div>
  <p class="pk-ill"><span style="color:var(--stop)">●</span> فعل شاذ (لا يُضاف له ed).</p>
 </div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اختر <span class="en">check</span> ثم <span class="en">steal</span>: أيهما أُضيف له <span class="en">ed</span>؟</li>
  <li>غيّر الفاعل من <span class="en">I</span> إلى <span class="en">He</span>: ماذا تغيّر؟</li>
  <li>اختر «سؤال» ثم اقرأ الجواب القصير المكتوب تحته.</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);let si=2,f='+';
 const draw=()=>{const v=VERBS[+$('#vv').value],[S,h]=SUBJ[si],o=OBJ[v[0]];const oo=o?' '+o:'';const hn=h==='has'?"hasn't":"haven't";
  const sent=f==='+'?`${S} ${h} ${v[2]}${oo}.`:f==='-'?`${S} ${hn} ${v[2]}${oo}.`:`${h[0].toUpperCase()+h.slice(1)} ${S==='I'?'I':S.toLowerCase()} ${v[2]}${oo}?`;
  $('#vf').innerHTML=`<div><span>الفعل المساعد</span><b>${f==='-'?hn:h}</b></div><div class="${v[4]?'bad':'hi'}"><span>التصريف الثالث</span><b>${v[2]}</b></div><div><span>النوع</span><b style="font-family:var(--font);direction:rtl;text-align:start">${v[4]?'شاذ':'منتظم (ed)'}</b></div>`;
  const pr=S==='I'?'you':S==='You'?'I':S.toLowerCase(),ph=pr==='I'||pr==='you'||pr==='we'||pr==='they'?'have':'has';
  $('#vo').innerHTML=eb(sent)+(f==='?'?`<p class="pk-ill">الجواب القصير:</p>${eb([`Yes, ${pr} ${ph}.`,`No, ${pr} ${ph==='has'?"hasn't":"haven't"}.`])}`:'')};
 $('#vv').onchange=draw;
 el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{si=+b.dataset.s;el.querySelectorAll('[data-s]').forEach(x=>x.classList.toggle('pri',x===b));draw()});
 el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=b.dataset.f;el.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('pri',x===b));draw()});
 draw();
}

const VOC81=[['incident','حادثة (واقعة)',''],['recent','حديث (قريب الوقوع)',''],['break down','يتعطّل','My car has broken down.'],['break into','يقتحم (للسرقة)','Thieves have broken into my office.'],['hotline','خط الدعم (خط ساخن)',''],['data','البيانات',''],['ambulance','سيارة إسعاف',''],['fall downstairs','يسقط من الدرج',''],['exhaust pipe','أنبوب العادم',''],['tyre','إطار السيارة','tire بالأمريكية'],['brakes','الفرامل',''],['spark plug','شمعة الإشعال',''],['fuse','فيوز (مُنصهِر)',''],['supplier','المورِّد',''],['supervisor','المشرف',''],['mechanic','الميكانيكي',''],['past participle','التصريف الثالث للفعل','checked, broken, taken']];

B.lesson({
 id:'u8-l1',unit:8,order:1,pages:'58–59',
 title:'Recent incidents — حوادث وقعت للتو',
 summary:'المضارع التام (have/has + التصريف الثالث) للأفعال الحديثة، والأفعال الشاذة، وسؤال Have you…? وجوابه القصير، ولماذا لا يأتي المضارع التام مع yesterday و in 2005.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 58–59',html:`<ol><li>تبلّغ عن مشكلة حدثت للتو: ${e('My car has broken down.')}</li><li>تكوّن المضارع التام بـ ${e('have / has')} + التصريف الثالث.</li><li>تعرف التصريف الثالث للأفعال المنتظمة والشاذة.</li><li>تسأل ${e('Have you checked…?')} وتجيب ${e("Yes, I have. / No, I haven't.")}</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 58–59',html:vt(VOC81)},
  {h:'المضارع التام',ref:'ص 58',html:`<p>نكوّنه بـ ${e('have')} (مع I/you/we/they) أو ${e('has')} (مع he/she/it) ثم <b>التصريف الثالث</b>:</p>${eb(["I<b>'ve changed</b> the tyre.","The machine <b>has broken</b> down.","Someone <b>has taken</b> my laptop."])}
   <p>نستعمله لحدث <b>قريب</b> ما زالت نتيجته أمامنا، دون ذكر وقت محدد.</p>`},
  {h:'متى لا نستعمله؟',ref:'ص 58',html:`<p>لا نضع المضارع التام مع وقت محدد في الماضي مثل ${e('yesterday, a week ago, in 2005')}؛ معها نستعمل الماضي البسيط:</p>${eb(['I <b>have lost</b> my key. ✔','I <b>lost</b> my key yesterday. ✔','I have lost my key yesterday. ✘'])}`},
  {h:'التصريف الثالث',ref:'ص 58',html:`<p>المنتظم يضاف له ${e('-ed')}: ${e('check → checked, repair → repaired')}. والشاذ يُحفظ:</p>${vt(VERBS.filter(v=>v[4]).map(v=>[`${v[0]} → ${v[2]}`,v[3]]),['الفعل → التصريف الثالث','المعنى'])}`},
  {h:'السؤال والجواب القصير',ref:'ص 59',html:`${eb(['<b>Have</b> you <b>checked</b> the brakes?',"Yes, I have.","<b>Has</b> he <b>repaired</b> the tyres?","No, he hasn't. He'll do it now."])}<p>لاحظ: الجواب القصير يعيد ${e('have/has')} فقط، ولا يعيد الفعل.</p>`},
  {h:'تمارين الكتاب',ref:'ص 58–59',html:
   bk(1,'ص 58','مع زميلك: صف ما يحدث في الصورة، واذكر خمس مشكلات شائعة في السيارات.',null)+
   bk(4,'ص 58','أكمل الجمل بالأفعال في الصندوق، كلمتان في كل فراغ.',['have broken (example) · have taken','has happened · have lost','has fallen · has cut','have had · have driven'],'التمرين 4 مرتبط بالمكالمات في التمرين 3، وفيه أربع مكالمات.')+
   bk(5,'ص 58','اكتب التصريف الثالث لكل فعل، وحدد الشاذ منها.',['bought (irregular)','checked','crashed','fallen (irregular)','ordered','put (irregular)','repaired','sold (irregular)','sent (irregular)','spoken (irregular)','stolen (irregular)','taken (irregular)','written (irregular)'])+
   bk(6,'ص 59','حوارات قصيرة بين مشرف وميكانيكي: سؤال Have you…? وجواب قصير، كما في المثال.',null,'انظر المحطة 3 في الأسلوب التفاعلي: حوار مشابه من عندنا.')+
   bk(7,'ص 59','اختبار الذاكرة: انظر الصورة في صفحة أخرى دقيقة، ثم قارن بالصورة هنا.',null,'الصفحة المطلوبة ليست في الحقيبة؛ يكفي التمرين 8 بالصورة التي أمامك.')+
   bk(8,'ص 59','الساعة الآن 10:16. اشرح ما حدث في الصورة منذ 10:12 مستعملاً الكلمات والأفعال في الصندوقين.',null,'جمل مفتوحة بالمضارع التام مثل: Two builders have taken off their jackets.')},
  {h:'الاستماع',ref:'ص 58',html:au(43,'ص 58 — التمرين 2','استمع لمكالمة وأكمل بيانات النموذج.')+au(44,'ص 58 — التمرين 3','استمع للمكالمات وطابق كل مكالمة مع صورتها.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'have / has + V3',title:'تكوين المضارع التام',q:'سيارتك توقفت للتو في الطريق. كيف تخبر خط الدعم؟',ref:'ص 58',
   art:art(`<g data-tip="has مع he / she / it ومع اسم مفرد."><rect x="40" y="110" width="80" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(80,141,'has',{fs:18,w:700})}</g>
    <g data-tip="التصريف الثالث: broken من break."><rect x="140" y="110" width="110" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(195,141,'broken',{fs:18,w:700})}</g>
    <g data-tip="الجملة: My car has broken down. = تعطلت سيارتي للتو.">${TL(180,220,'My car has broken down.',{fs:16,w:700})}</g>${TL(270,141,'down',{fs:16})}`,'has + broken down'),
   cap:'أجزاء الجملة. مرّر المؤشر على كل جزء.',
   side:[{tip:`القالب: ${e('subject + have/has + past participle')}. و ${e("I've")} = ${e('I have')}، و ${e("He's")} قد تعني ${e('He has')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الصيغة الصحيحة (مواقف جديدة):',items:[
     {s:'The printer ___ stopped.',o:['has','have','is'],a:0,why:'printer مفرد: has.'},
     {s:'Someone has ___ my phone.',o:['took','taken','take'],a:1,why:'بعد has: التصريف الثالث taken.'},
     {s:'We ___ lost the password.',o:['has','have','are'],a:1},
     {s:'He has ___ his hand.',o:['cut','cutted','cuts'],a:0,why:'cut شاذ: cut / cut / cut.'}]}),title:'مختبر مصغّر: have / has'}]},
  {st:2,short:'الأفعال الشاذة',title:'المنتظم والشاذ',q:'لماذا نقول stolen وليس stealed؟',ref:'ص 58',
   art:art(`<g data-tip="منتظم: نضيف ed — check → checked."><rect x="30" y="80" width="140" height="160" rx="12" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(100,110,'regular',{fs:14,w:700,c:C.grn})}${['checked','ordered','repaired','crashed'].map((w,i)=>TL(100,145+i*24,w,{fs:13})).join('')}</g>
    <g data-tip="شاذ: يُحفظ — steal → stolen."><rect x="190" y="80" width="140" height="160" rx="12" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(260,110,'irregular',{fs:14,w:700,c:C.red})}${['stolen','taken','written','sold'].map((w,i)=>TL(260,145+i*24,w,{fs:13})).join('')}</g>`,'أفعال منتظمة وشاذة'),
   cap:'منتظم وشاذ. مرّر المؤشر على كل عمود.',
   side:[{tip:'الشاذ لا قاعدة له، فاحفظ الثلاثة معاً: <span class="en">write – wrote – written</span>.'}],
   body:[{widget:(el,B)=>N.sort(el,B,{intro:'صنّف الفعل حسب تصريفه الثالث:',cats:['منتظم (ed)','شاذ'],items:[['order',0,'ordered'],['sell',1,'sold'],['repair',0,'repaired'],['speak',1,'spoken'],['send',1,'sent'],['crash',0,'crashed']]}),title:'مختبر مصغّر: صنّف'}]},
  {st:3,short:'Have you…?',title:'السؤال والجواب القصير',q:'المشرف يسأل: Have you checked the brakes? كيف تجيب بالنفي؟',ref:'ص 59',
   art:art(`<g data-tip="المشرف يسأل بـ Have you + V3 …?"><rect x="30" y="70" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,104,'Have you cleaned the filter?',{fs:15,w:700})}</g>
    <g data-tip="الجواب القصير يعيد have فقط."><rect x="30" y="170" width="140" height="50" rx="10" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(100,201,'Yes, I have.',{fs:14,w:700,c:'#fff'})}<rect x="190" y="170" width="140" height="50" rx="10" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(260,201,"No, I haven't.",{fs:14,w:700,c:'#fff'})}</g>`,'سؤال وجوابان قصيران'),
   cap:'السؤال وجوابه. مرّر المؤشر على كل جزء.',
   side:[{tip:'بعد الجواب القصير المنفي نَعِد بالفعل: <span class="en">No, I haven\'t. I\'ll do it now.</span>'}],
   body:[{html:dl([['Supervisor','Have you changed the oil?'],['Mechanic','Yes, I have.'],['Supervisor','Good. What about the filter? Have you cleaned it?'],['Mechanic',"No, I haven't. I'll do it now."]])+'<p class="pk-ill">حوار جديد من عندنا على نمط التمرين 6.</p>'},
    {widget:(el,B)=>N.cases(el,B,{intro:'اختر الجواب الصحيح:',cases:[{q:'Has the supplier sent the parts? (✓)',opts:[['Yes, he has.',1,''],['Yes, he sent.',0,'الجواب القصير: Yes, he has.'],['Yes, he have.',0,'he مع has.']]},{q:'Have you written the report? (✗)',opts:[["No, I haven't.",1,''],["No, I didn't write.",0,''],["No, I hasn't.",0,'I مع have.']]}]}),title:'مختبر مصغّر: الجواب القصير'}]},
  {st:4,short:'لا مع yesterday',title:'المضارع التام والوقت المحدد',q:'هل تقول I have lost my key yesterday؟',ref:'ص 58',
   art:art(`<g data-tip="بلا وقت محدد: المضارع التام."><rect x="30" y="80" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,111,"I've lost my key. ✔",{fs:15,w:700})}</g>
    <g data-tip="مع yesterday: الماضي البسيط."><rect x="30" y="160" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,191,'I lost my key yesterday. ✔',{fs:15,w:700})}</g>
    <g data-tip="خطأ: المضارع التام مع وقت محدد."><rect x="30" y="240" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(180,271,'I have lost it yesterday. ✘',{fs:15,w:700})}</g>`,'جملتان صحيحتان وجملة خاطئة'),
   cap:'الصحيح والخطأ. مرّر المؤشر على كل جملة.',
   side:[{tip:'إذا ذكرت <b>متى</b> بالضبط (yesterday, last week, in 2005, two hours ago) فاستعمل الماضي البسيط.'}],
   body:[{widget:(el,B)=>N.tf(el,B,{intro:'صح أم خطأ؟',items:[["The engine has stopped.",true,'لا وقت محدد: صحيحة.'],["We have finished the job last week.",false,'last week وقت محدد: We finished the job last week.'],["Has the technician arrived?",true,'سؤال صحيح.']]}),title:'مختبر مصغّر: صح أم خطأ'}]},
  {recap:['المضارع التام: have/has + التصريف الثالث لحدث قريب ونتيجته أمامنا.','المنتظم يضاف له ed، والشاذ يُحفظ (break → broken، take → taken).','السؤال: Have you …? والجواب: Yes, I have. / No, I haven\'t.','لا نستعمله مع yesterday أو in 2005 أو ago؛ معها الماضي البسيط.']}
 ],
 lab:lab81,
 examples:[
  {title:'مثال 1: بلاغ عن عطل',ref:'ص 58',q:`<p>أبلغ خط الدعم أن طابعتك تعطلت للتو.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الفاعل مفرد (my printer) فنستعمل ${e('has')}.`},{t:`الخطوة 2: ${e('break down')} تصريفها الثالث ${e('broken down')}.`},{t:`الخطوة 3: ${e('My printer has broken down.')}`,final:true}]},
  {title:'مثال 2: سؤال المشرف',ref:'ص 59',q:`<p>اسأل الفني إن كان قد طلب القطع الجديدة.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('Have')} لأن الفاعل ${e('you')}.`},{t:`الخطوة 2: ${e('order')} منتظم: ${e('ordered')}.`},{t:`الخطوة 3: ${e('Have you ordered the new parts?')}`,final:true}]},
  {title:'مثال 3: تصحيح جملة',ref:'ص 58',q:`<p>صحّح: ${e('I have sent the email two hours ago.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e('two hours ago')} وقت محدد، فلا يصلح المضارع التام.`},{t:`الخطوة 2: نستعمل الماضي البسيط ${e('sent')}.`},{t:`الخطوة 3: ${e('I sent the email two hours ago.')} (أو بلا وقت: ${e("I've sent the email.")})`,final:true}]}
 ],
 quiz:[
  {q:'She ___ her leg.',o:['have broken','has broken','has broke','have break'],c:1,e:'she + has + broken.'},
  {q:'The past participle of take:',o:['took','taked','taken','taking'],c:2,e:'take – took – taken.'},
  {q:'Which verb is irregular?',o:['check','repair','write','order'],c:2,e:'write – wrote – written.'},
  {q:'Have you checked the tyres? (✗)',o:["No, I haven't.","No, I didn't.","No, I don't.","No, I hasn't."],c:0,e:"No, I haven't."},
  {q:'اختر الجملة الصحيحة:',o:['I have repaired it yesterday.','I repaired it yesterday.','I have repair it yesterday.','I repaired it now have.'],c:1,e:'مع yesterday: الماضي البسيط.'},
  {q:'Thieves ___ into my office.',o:['have broken','has broken','have broke','are broken'],c:0,e:'thieves جمع: have + broken.'},
  {q:'break down معناها:',o:['يكسر شيئاً','يتعطّل (يتوقف عن العمل)','يقتحم','يسقط'],c:1,e:'My car has broken down = تعطلت سيارتي.'}
 ]
});

/* =================== 8.2 Damage and loss =================== */
/* أفعال التلف: [الفعل، التصريف الثالث، الاسم، المعنى] */
const DMG=[['bend','bent','bend','يثني (ينحني)'],['break','broken','break','يكسر'],['burn','burnt','burn','يحرق'],['crack','cracked','crack','يشرخ (يتشقق)'],['cut','cut','cut','يقطع'],['dent','dented','dent','يبعج (ينبعج)'],['scratch','scratched','scratch','يخدش'],['tear','torn','tear','يمزّق']];
const PARTS=[['front bumper','الصدّام الأمامي'],['rear bumper','الصدّام الخلفي'],['bonnet','غطاء المحرك (الكبوت)'],['boot','صندوق السيارة الخلفي'],['windscreen','الزجاج الأمامي'],['front nearside door','الباب الأمامي جهة الرصيف'],['rear offside door','الباب الخلفي جهة السائق'],['roof','السقف']];
const carSVG=sel=>`<svg viewBox="0 0 420 220" role="img" aria-label="سيارة من الجانب"><path d="M40 150 L60 110 L130 95 L170 60 L290 60 L330 95 L390 110 L395 150 Z" fill="var(--surface-2)" stroke="var(--fg)" stroke-width="2"/>
 ${[['roof','M175 64 H285 V72 H175Z'],['windscreen','M290 64 L326 95 L300 95 L282 70Z'],['bonnet','M330 97 L388 112 L388 124 L330 118Z'],['boot','M46 124 L62 112 L130 98 L130 120Z'],['front nearside door','M235 98 H300 V146 H235Z'],['rear offside door','M165 98 H232 V146 H165Z'],['front bumper','M380 130 H398 V152 H380Z'],['rear bumper','M34 130 H52 V152 H34Z']].map(([k,d])=>`<path d="${d}" fill="${k===sel?'var(--stop)':'var(--blue-soft)'}" stroke="var(--blue)" stroke-width="1.5" data-p="${k}" style="cursor:pointer"/>`).join('')}
 <circle cx="110" cy="155" r="24" fill="var(--fg)"/><circle cx="320" cy="155" r="24" fill="var(--fg)"/><circle cx="110" cy="155" r="9" fill="var(--surface)"/><circle cx="320" cy="155" r="9" fill="var(--surface)"/>
 <text x="400" y="200" text-anchor="end" font-size="12" fill="var(--muted)" direction="ltr">front →</text></svg>`;
function lab82(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">افحص أضرار السيارة</h3>
  <p class="sub">مبني على «Language» ص 61. اضغط جزءاً من السيارة (أو اختره من القائمة)، واختر نوع الضرر، وشاهد الجمل الثلاث. (سيارة من رسمنا.)</p>
  <div class="pk-pic" id="cs"></div>
  <select class="ph-sel" id="cp">${PARTS.map((p,i)=>`<option value="${i}">${p[0]} — ${p[1]}</option>`).join('')}</select>
  <div class="ph-row" id="cd">${DMG.filter(d=>d[0]!=='cut').map((d,i)=>`<button type="button" class="btn${i===4?' pri':''}" data-d="${d[0]}">${d[0]}</button>`).join('')}</div>
  <div id="co"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">ثلاث طرق لوصف الضرر</h3><ol class="ph-try">
  <li><b>التركيز على الفعل</b> (من فعلها؟):<br><span class="en">Someone has dented the door.</span></li>
  <li><b>التركيز على النتيجة</b> (حالته الآن):<br><span class="en">The door is dented.</span></li>
  <li><b>بالاسم</b>:<br><span class="en">There's a dent in the door.</span></li></ol>
  <p class="pk-ill"><span class="en">nearside</span> جهة الرصيف و <span class="en">offside</span> جهة السائق (في بريطانيا عجلة القيادة يميناً).</p></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اختر الزجاج الأمامي و <span class="en">crack</span>: لماذا صارت <span class="en">There's a crack in</span>؟</li>
  <li>اختر <span class="en">tear</span> ثم <span class="en">break</span>: لاحظ التصريف الثالث الشاذ <span class="en">torn</span> و <span class="en">broken</span>.</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);let d='dent';
 const prep=p=>/windscreen|roof|bonnet|door/.test(p)?'in':'in';
 const draw=()=>{const p=PARTS[+$('#cp').value],D=DMG.find(x=>x[0]===d);
  $('#cs').innerHTML=carSVG(p[0]);el.querySelectorAll('[data-p]').forEach(x=>x.onclick=()=>{$('#cp').value=PARTS.findIndex(q=>q[0]===x.dataset.p);draw()});
  const noun=D[0]==='break'?null:D[2];
  $('#co').innerHTML=`<div class="pk-facts"><div><span>التصريف الثالث</span><b>${D[1]}</b></div><div><span>المعنى</span><b style="font-family:var(--font);direction:rtl;text-align:start">${D[3]}</b></div></div>`+
   eb([`Someone has ${D[1]} the ${p[0]}.`,`The ${p[0]} is ${D[1]}.`].concat(noun?[`There's a ${noun} ${prep(p[0])} the ${p[0]}.`]:[]))+(noun?'':'<p class="pk-ill">مع break نكتفي بالجملتين؛ الاسم a break غير شائع لوصف الضرر.</p>')};
 $('#cp').onchange=draw;
 el.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{d=b.dataset.d;el.querySelectorAll('[data-d]').forEach(x=>x.classList.toggle('pri',x===b));draw()});draw();
}

const VOC82=DMG.map(x=>[`${x[0]} → ${x[1]}`,x[3],`a ${x[2]}`]).concat([['damaged','تالف',''],['missing','مفقود (ناقص)','The manual is missing.'],['condition','الحالة',''],['antenna','هوائي',''],['display screen','شاشة العرض',''],['plug','قابس (فيش)',''],['user manual','دليل المستخدم',''],['goggles','نظارات واقية',''],['overalls','بدلة العمل (أفرول)',''],['insulation','العازل (غلاف السلك)',''],['bonnet / boot','غطاء المحرك / صندوق السيارة','hood / trunk بالأمريكية'],['bumper','الصدّام',''],['windscreen','الزجاج الأمامي','windshield بالأمريكية'],['front ≠ rear','أمامي ≠ خلفي',''],['nearside / offside','جهة الرصيف / جهة السائق','']]);

B.lesson({
 id:'u8-l2',unit:8,order:2,pages:'60–61',
 title:'Damage and loss — التلف والفقد',
 summary:'أفعال التلف (bend, break, burn, crack, cut, dent, scratch, tear) وتصريفها، ووصف الضرر بالتركيز على الفعل أو على النتيجة، و There\'s a dent in…، والإبلاغ عن شيء مفقود، وأجزاء السيارة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 60–61',html:`<ol><li>تصف الضرر في جهاز أو سيارة بثماني أفعال.</li><li>تفرّق بين ${e('I have dented it')} (الفعل) و ${e("It's dented")} (النتيجة).</li><li>تستعمل ${e("There's a … / There are some …")} لوصف الضرر.</li><li>تبلّغ عن شيء ناقص: ${e("The manual is missing. / There's no manual.")}</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 60–61',html:vt(VOC82,['English','المعنى','الاسم / ملاحظة'])},
  {h:'التركيز على الفعل أم على النتيجة',ref:'ص 61',html:`<p><b>الفعل:</b> من فعل الضرر، بالمضارع التام. <b>النتيجة:</b> حالة الشيء الآن، بـ ${e('is / are')} + التصريف الثالث كصفة:</p>${eb(['I<b> have scratched</b> the screen.','The screen <b>is scratched</b>.','He <b>has broken</b> the speakers.','The speakers <b>are broken</b>.'])}`},
  {h:"There's a … / There are some …",ref:'ص 60–61',html:`${eb(["<b>There's a</b> dent in the side of the box.","<b>There are some</b> scratches on the lenses.","<b>There's no</b> plug on the cable."])}<p>ومع الناقص: ${e("The manual is missing. · There's no manual in the box. · The cable doesn't have a plug.")}</p>`},
  {note:'<b>توضيح للمتدرب:</b> ثلاثة أفعال تصريفها شاذ: <span class="en">bend → bent</span>، <span class="en">break → broken</span>، <span class="en">tear → torn</span>. و <span class="en">burn → burnt</span> (أو <span class="en">burned</span> بالأمريكية).'},
  {h:'تمارين الكتاب',ref:'ص 60–61',html:
   bk(1,'ص 60','هل عندك أدوات أو أجهزة تالفة؟ صف الضرر لزميلك.',null)+
   bk(2,'ص 60','طابق الأفعال الثمانية مع الصور.',null,'الصور في كتابك؛ راجع معاني الأفعال في جدول الكلمات.')+
   bk(3,'ص 60','صحّح الأخطاء في قائمة الفحص بعد الاستماع (التمرين 4).',null)+
   bk(5,'ص 60','كوّن جملاً عن الضرر والأشياء الناقصة في صورة التمرين 3 بالقوالب المعطاة.',null)+
   bk(6,'ص 61','أعد كتابة الجمل الست بالتركيز على النتيجة.',['The display screen is scratched.','The antenna is bent.','The body of the radio is burnt.','The top of the speaker is dented.','The cover of the plug is cracked.','The user manual is torn.'])+
   bk(7,'ص 61','أكمل الجمل الست بالصيغة الصحيحة من كلمات الصندوق (حسب الصور).',['dented','scratched','cracked','cut','bent','torn'],'قراءتنا للصور الست بالترتيب: صندوق، نظارة، طريق، عازل كابل، أنبوب، أفرول. تحقق من صور كتابك.')+
   bk(8,'ص 61',"أعد كتابة جمل التمرين 7 بـ There's a … / There are some ….",["There's a dent in the side of the box.","There are some scratches on the lenses of the goggles.","There are some cracks in the surface of the road.","There's a cut in the insulation of the cable.","There's a bend in the pipe below the tank.","There's a tear in the overalls."])+
   bk(9,'ص 61','مهمة ثنائية: اسأل زميلك عن أضرار سيارته وارسمها على الرسم.',null,'صفحتا المعلومات ليستا في الحقيبة؛ استعمل البطاقتين البديلتين أسفل.')},
  {h:'الاستماع',ref:'ص 60',html:au(45,'ص 60 — التمرين 4','انظر صورة التمرين 3، واستمع لمكالمة هاتفية وتحقق من القائمة.')},
  {h:'مهمة ثنائية بديلة (إضافة من خارج الكتاب)',ref:'ص 61 — التمرين 9',html:`<p>كل طالب يقرأ أضرار سيارته على زميله، والزميل يرسمها على الرسم (أو يعلّمها في المختبر).</p>`+ab(eb(["The front bumper is dented.","There's a crack in the windscreen.","The rear offside door is scratched."]),eb(["The bonnet is bent.","There are some scratches on the boot.","The front nearside door is dented."]))+`<p>الأسئلة: ${e("What's the problem? · Which door? · Anything else?")}</p>`}
 ],
 stations:[
  {intro:true},
  {st:1,short:'أفعال التلف',title:'ثماني أفعال للتلف',q:'شاشة هاتفك عليها خطوط رفيعة: هل هي cracked أم scratched؟',ref:'ص 60',
   art:art(`${[['scratch','خدش',60,90],['crack','شرخ',180,90],['dent','بعج',300,90],['bend','ثني',60,200],['tear','تمزيق',180,200],['burn','حرق',300,200]].map(([w,a,x,y])=>`<g data-tip="${w}: ${a}"><rect x="${x-48}" y="${y-38}" width="96" height="76" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(x,y-4,w,{fs:15,w:700})}${T(x,y+20,a,{ar:1,fs:12})}</g>`).join('')}`,'ستة أفعال للتلف مع معانيها'),
   cap:'أفعال التلف. مرّر المؤشر على كل فعل.',
   side:[{tip:'<span class="en">scratch</span> خط سطحي، <span class="en">crack</span> شق في مادة صلبة (زجاج، بلاستيك)، <span class="en">dent</span> انبعاج في معدن.'}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر الفعل المناسب:',cases:[{q:'شق في زجاج النافذة',opts:[['cracked',1,''],['dented',0,'dent للمعدن المنبعج.'],['torn',0,'tear للقماش والورق.']]},{q:'قميص فيه فتحة ممزقة',opts:[['bent',0,''],['torn',1,''],['burnt',0,'']]},{q:'مسمار لم يعد مستقيماً',opts:[['bent',1,''],['scratched',0,''],['cut',0,'']]}]}),title:'مختبر مصغّر: أي ضرر؟'}]},
  {st:2,short:'الفعل أم النتيجة',title:'التركيز على الفعل أم على النتيجة',q:'كيف تقول «الشاشة مخدوشة» بدل «خدشتُ الشاشة»؟',ref:'ص 61',
   art:art(`<g data-tip="الفعل: have/has + التصريف الثالث."><rect x="30" y="80" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.blue}" stroke-width="3"/>${TL(180,114,"I've scratched the screen.",{fs:15,w:700})}</g>
    <g data-tip="النتيجة: is/are + التصريف الثالث كصفة."><rect x="30" y="180" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,214,'The screen is scratched.',{fs:15,w:700})}</g>${arrowS(180,140,180,174,C.ink,3)}`,'من الفعل إلى النتيجة'),
   cap:'من الفعل إلى النتيجة. مرّر المؤشر على كل جملة.',
   side:[{tip:'التحويل: نجعل المفعول فاعلاً، ونضع <span class="en">is</span> للمفرد و <span class="en">are</span> للجمع، ونُبقي التصريف الثالث.'}],
   body:[{widget:(el,B)=>N.typ(el,B,{intro:'حوّل إلى التركيز على النتيجة (أمثلة جديدة):',items:[{q:e("Someone has bent the key."),a:['The key is bent.']},{q:e("They've cracked the mirrors."),a:['The mirrors are cracked.']},{q:e("He's torn the map."),a:['The map is torn.']}]}),title:'مختبر مصغّر: حوّل'}]},
  {st:3,short:"There's a…",title:"There's a dent in… / There's no…",q:'كيف تقول «يوجد بعج في الباب»؟ وكيف تقول إن الكابل بلا قابس؟',ref:'ص 60–61',
   art:art(`<g data-tip="There's a + اسم مفرد + in / on …"><rect x="30" y="80" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,111,"There's a dent in the door.",{fs:15,w:700})}</g>
    <g data-tip="There are some + جمع"><rect x="30" y="150" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,181,'There are some scratches on it.',{fs:14,w:700})}</g>
    <g data-tip="الناقص: There's no … / doesn't have …"><rect x="30" y="220" width="300" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,251,"There's no plug on the cable.",{fs:14,w:700})}</g>`,'ثلاث جمل لوصف الضرر والنقص'),
   cap:'القوالب الثلاثة. مرّر المؤشر على كل قالب.',
   side:[{tip:'الاسم من الفعل نفسه غالباً: <span class="en">a dent, a scratch, a crack, a cut, a tear, a burn, a bend</span>.'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الصحيح:',items:[{s:"There's a ___ in the windscreen.",o:['crack','cracked','cracks'],a:0,why:'بعد a: اسم مفرد.'},{s:'There are some ___ on the table.',o:['burn','burns','burnt'],a:1},{s:"The box ___ have a lid.",o:["doesn't","isn't","hasn't got a"],a:0,why:"The box doesn't have a lid."}]}),title:'مختبر مصغّر: There\'s a…'}]},
  {recap:['أفعال التلف: bend (bent)، break (broken)، burn (burnt)، crack، cut (cut)، dent، scratch، tear (torn).','الفعل: I have dented it. النتيجة: It is dented.',"There's a dent in … / There are some scratches on ….","الناقص: The manual is missing. / There's no manual. / It doesn't have a manual."]}
 ],
 lab:lab82,
 examples:[
  {title:'مثال 1: من الفعل إلى النتيجة',ref:'ص 61',q:`<p>حوّل: ${e("They've broken the speakers.")}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: المفعول ${e('the speakers')} يصير فاعلاً.`},{t:`الخطوة 2: جمع فنستعمل ${e('are')}، ونُبقي التصريف الثالث ${e('broken')}.`},{t:`الخطوة 3: ${e('The speakers are broken.')}`,final:true}]},
  {title:"مثال 2: There's a…",ref:'ص 61',q:`<p>أعد كتابة: ${e('The side of the van is dented.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الاسم من ${e('dent')} هو ${e('a dent')}.`},{t:`الخطوة 2: القالب ${e("There's a … in …")}.`},{t:`الخطوة 3: ${e("There's a dent in the side of the van.")}`,final:true}]},
  {title:'مثال 3: الإبلاغ عن ناقص',ref:'ص 60',q:`<p>قل بطريقتين إن الصندوق بلا بطاريات.</p>`,given:[],
   solve:()=>[{t:`الطريقة 1: ${e('There are no batteries in the box.')}`},{t:`الطريقة 2: ${e('The batteries are missing.')}`,final:true}]}
 ],
 quiz:[
  {q:'The windscreen is ___.',o:['crack','cracked','cracks','cracking'],c:1,e:'is + التصريف الثالث (صفة).'},
  {q:'The past participle of tear:',o:['teared','tore','torn','tears'],c:2,e:'tear – tore – torn.'},
  {q:"There's a ___ in the door.",o:['dent','dented','dents','denting'],c:0,e:'بعد a: اسم.'},
  {q:'التركيز على النتيجة لـ I have bent the antenna:',o:['The antenna has bent.','The antenna is bent.','The antenna bends.','There bent antenna.'],c:1,e:'is + bent.'},
  {q:'The manual is ___.',o:['missing','miss','missed','lose'],c:0,e:'missing = ناقص/مفقود.'},
  {q:'The steering wheel in a British car is on the ___ side.',o:['nearside','offside','rear','boot'],c:1,e:'offside جهة السائق.'},
  {q:'bonnet في السيارة:',o:['صندوق السيارة','غطاء المحرك','الصدّام','الزجاج الأمامي'],c:1,e:'bonnet = غطاء المحرك.'}
 ]
});
})(PLCBOOK);

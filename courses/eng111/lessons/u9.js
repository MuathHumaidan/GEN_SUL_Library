/* الوحدة 9 — About the company: Part A (ص 42–43) · Part B (ص 44–45) · Review 3 (ص 46–47)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const IRR=[['meet','met','met'],['make','made','made'],['sell','sold','sold'],['build','built','built'],['leave','left','left'],['go','went','gone'],['begin','began','begun'],['rise','rose','risen'],['fall','fell','fallen']];
const REG=[['launch','launched'],['develop','developed'],['introduce','introduced'],['move','moved'],['increase','increased'],['decrease','decreased'],['expand','expanded'],['change','changed']];

/* ========== 9A Talking about company history ========== */
const HIST=[[1985,'Two engineers','met','at university in Dhahran.'],[1990,'They','made','their first solar water heater.'],[1992,'They','launched','SunNajd Ltd.'],[2001,'The company','built','a big factory in Jubail.'],[2010,'It','developed','a new solar panel for farms.'],[2019,'It','sold','its millionth panel.']];
function lab9a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">تاريخ شركة</h3><p class="sub">شركة من إعدادنا، مبني على التمرينين 1 و 2 ص 42. اضغط سنة.</p><div id="tl" style="max-width:420px;margin:auto"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">ارتفع أم انخفض؟</h3><p class="sub">مبني على التمرين 3 ص 43. عدد الموظفين بين سنتين (<b>قيم توضيحية</b>).</p>
  <div class="pk-sl"><label>2022 <b id="a-v"></b></label><input type="range" id="a" min="100" max="5000" step="100" value="3000"></div>
  <div class="pk-sl"><label>2023 <b id="b-v"></b></label><input type="range" id="b" min="100" max="5000" step="100" value="2000"></div><div id="ro"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي الأفعال في التاريخ شاذة (بلا ed)؟</li><li>اجعل العدد يرتفع: ما الأفعال الثلاثة الممكنة؟</li><li>اكتب ثلاث جمل عن تاريخ شركة تعرفها.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0;
 const draw=()=>{$('#tl').innerHTML=`<svg viewBox="0 0 420 110" style="width:100%"><line x1="20" y1="60" x2="400" y2="60" stroke="${C.ink}" stroke-width="3"/>${HIST.map((h,i)=>`<g data-h="${i}" style="cursor:pointer"><circle cx="${40+i*68}" cy="60" r="${i===k?12:8}" fill="${i===k?C.red:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(40+i*68,94,String(h[0]),{fs:12,w:700})}</g>`).join('')}</svg>`;
  el.querySelectorAll('[data-h]').forEach(g=>g.onclick=()=>{k=+g.dataset.h;draw()});const h=HIST[k],v=[...IRR,...REG].find(x=>x[1]===h[2]);
  $('#o').innerHTML=eb(`In ${h[0]}, ${h[1].charAt(0).toLowerCase()+h[1].slice(1)} ${h[2]} ${h[3]}`)+`<p class="sub">${v?`${v[0]} → ${v[1]} ${IRR.includes(v)?'(شاذ)':'(+ ed)'}`:''}</p>`};draw();
 const rs=()=>{const a=+$('#a').value,b=+$('#b').value;$('#a-v').textContent=a;$('#b-v').textContent=b;
  $('#ro').innerHTML=a===b?eb(`The number of employees stayed the same: ${a}.`):eb([`The number of employees ${b>a?'increased':'decreased'} from ${a.toLocaleString('en')} to ${b.toLocaleString('en')}.`,`= It ${b>a?'rose':'fell'} / It went ${b>a?'up':'down'}.`])};
 ['a','b'].forEach(x=>$('#'+x).addEventListener('input',rs));rs();
}
B.lesson({
 id:'u9-l1',unit:9,order:1,pages:'42–43',
 title:'Part A: Talking about company history — تاريخ الشركة',
 summary:'الماضي البسيط في سرد تاريخ شركة: الأفعال المنتظمة (launched، developed، introduced) والشاذة (met، made، sold، built، left)، وأفعال التغيير (increase / decrease، rise / fall، go up / go down، expand، move، change)، وكتابة فقرة عن تاريخ شركة من ملاحظات.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 42–43',html:`<p>تحكي تاريخ شركة. ستتعلم:</p><ol><li>الماضي البسيط المنتظم والشاذ.</li><li>أفعال التغيير.</li><li>كتابة فقرة من ملاحظات.</li></ol>`},
  {h:'الماضي البسيط',ref:'ص 42',html:`${vt(REG.map(r=>[r[0],r[1]]),['الفعل','الماضي (+ ed / d)'])}${vt(IRR.map(r=>[r[0],r[1]]),['الفعل الشاذ','الماضي'])}${eb(['The two founders met at university.','In 1992, they launched the company.','In 2019, it sold its millionth panel.'])}`},
  {h:'أفعال التغيير',ref:'ص 43',html:`${vt([['increase = rise = go up','يرتفع / يزيد'],['decrease = fall = go down','ينخفض / يقل'],['expand','يتوسّع'],['move','ينتقل'],['change','يغيّر'],['build','يبني']],['English','المعنى'])}${eb(['The number of employees decreased from 3000 to 2000.','Profit rose from $1.3 million to $1.7 million.'])}`},
  {note:'<b>توضيح للمتدرب:</b> مع الأرقام نستعمل <span class="en">from … to …</span>: <span class="en">It went up from 10 to 15.</span>'},
  {h:'تمارين الكتاب',ref:'ص 42–43',html:
   bk(1,'ص 42','استمع ورتّب مراحل تاريخ الشركة، واكتب الماضي تحت كل مرحلة.',['a: c → f → b → d → a → e','b: c met · f made · b launched · d developed · a sold · e introduced'])+
   bk(2,'ص 42','اكتب مع زميلك تاريخ الشركة من الملاحظات.',null)+
   bk(3,'ص 43','أكمل بالصيغة الصحيحة للأفعال، ثم أعد الجملة 1 بأفعال أخرى.',['a: 1 decreased · increased','2 increase','3 expand','4 built','5 moved','6 left','7 changed','b: The number of employees fell / went down … and profit rose / went up …'])+
   bk(4,'ص 43','دوّن ملاحظات عن تاريخ شركة تعرفها، ثم تحدث عنها.',null)},
  {h:'الاستماع',ref:'ص 42',html:au('9A-1a','ص 42 — التمرين 1','تاريخ شركة حواسيب.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الماضي البسيط',title:'met · made · launched',q:'كيف تحكي متى بدأت شركة؟',ref:'ص 42',
   art:art(`${HIST.slice(0,5).map((h,i)=>`<g data-tip="${h[0]}: ${h[1]} ${h[2]} ${h[3]}"><rect x="20" y="${30+i*52}" width="320" height="42" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(70,57+i*52,String(h[0]),{fs:14,w:700})}${TL(220,57+i*52,h[2],{fs:15,w:700})}</g>`).join('')}`,'خط زمني'),
   cap:'تاريخ شركة من إعدادنا. مرّر المؤشر على كل سنة.',side:[{tip:`في الماضي البسيط الفعل واحد لكل الضمائر: ${e('I met, he met, they met')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'They ___ at university in 1985.',o:['met','meeted'],a:0},{s:'In 1992, they ___ the company.',o:['launched','launch'],a:0},{s:'The company ___ a factory in 2001.',o:['built','builded'],a:0},{s:'It ___ a million panels.',o:['sold','selled'],a:0}]}),title:'مختبر مصغّر: الماضي'}]},
  {st:2,short:'rise · fall',title:'أفعال التغيير',q:'كيف تقول إن الأرباح ارتفعت؟',ref:'ص 43',
   art:art(`<g data-tip="increase = rise = go up"><polyline points="30,220 100,180 170,140 240,90 310,50" fill="none" stroke="${C.grn}" stroke-width="5"/>${TL(250,40,'rose / went up',{fs:13,w:700})}</g><g data-tip="decrease = fall = go down"><polyline points="30,80 100,120 170,160 240,200 310,230" fill="none" stroke="${C.red}" stroke-width="5"/>${TL(250,260,'fell / went down',{fs:13,w:700})}</g>`,'rise fall'),
   cap:'خط يرتفع وخط ينخفض. مرّر المؤشر على كل منهما.',side:[{tip:`${e('rise → rose')} و ${e('fall → fell')} شاذان.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Profit ___ from $1.3 million to $1.7 million.',o:['increased','decreased'],a:0},{s:'The number of employees ___ from 3000 to 2000.',o:['fell','rose'],a:0},{s:'Sales went ___ last year. (ارتفعت)',o:['up','down'],a:0}]}),title:'مختبر مصغّر: التغيير'}]},
  {recap:['regular: launched, developed, introduced.','irregular: met, made, sold, built, left.','increase / rise / go up ≠ decrease / fall / go down.','from … to …','expand, move, change, build.']}
 ],
 lab:lab9a,
 examples:[
  {title:'مثال 1: من ملاحظة إلى جملة',ref:'ص 42',q:`<p>1992 / launch / SunNajd Ltd.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الماضي: ${e('launch → launched')}.`},{t:`الخطوة 2: ${e('In 1992')} في البداية.`},{t:`الخطوة 3: ${e('In 1992, they launched SunNajd Ltd.')}`,final:true}]},
  {title:'مثال 2: فعل شاذ',ref:'ص 42',q:`<p>2001 / build / a factory in Jubail</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('build')} شاذ: ${e('built')}.`},{t:`الخطوة 2: ${e('In 2001, the company built')}`},{t:`الخطوة 3: ${e('In 2001, the company built a factory in Jubail.')}`,final:true}]},
  {title:'مثال 3: التغيير بالأرقام',ref:'ص 43',q:`<p>عدد الموظفين من 800 إلى 1200.</p>`,given:[],solve:()=>[{t:`الخطوة 1: العدد زاد: ${e('increased / rose')}.`},{t:`الخطوة 2: ${e('from 800 to 1,200')}.`},{t:`الخطوة 3: ${e('The number of employees increased from 800 to 1,200.')}`,final:true}]}
 ],
 quiz:[
  {q:'meet →',o:['met','meeted','meet','meat'],c:0,e:'شاذ.'},
  {q:'sell →',o:['sold','selled','sell','sale'],c:0,e:'شاذ.'},
  {q:'develop →',o:['developed','developt','develop','developped'],c:0,e:'+ ed.'},
  {q:'rise =',o:['go up','go down','stay','move'],c:0,e:'rise = go up.'},
  {q:'Sales fell ___ 500 ___ 300.',o:['from / to','to / from','at / to','in / on'],c:0,e:'from … to.'},
  {q:'They ___ a new office last year.',o:['built','build','builded','have build'],c:0,e:'built.'}
 ]
});

/* ========== 9B Company changes ========== */
const EVT=[['open','opened','opened','a new showroom'],['close','closed','closed','the old factory'],['build','built','built','a new warehouse'],['recruit','recruited','recruited','ten engineers'],['change','changed','changed','the company logo']];
const TREF=['(no time)','last month','in 2021','yesterday','two years ago'];
const PLAN=[['expand office space',1,'They have expanded office space.',"They haven't expanded office space yet."],['open a branch in Abha',0,'They have opened a branch in Abha.',"They haven't opened a branch in Abha yet."],['recruit bilingual secretaries',1,'They have recruited bilingual secretaries.',"They haven't recruited bilingual secretaries yet."],['find new investors',0,'They have found new investors.',"They haven't found new investors yet."]];
function lab9b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">بسيط أم تام؟</h3><p class="sub">مبني على «Language focus» ص 44. اختر الحدث والزمن، وشاهد الصيغة.</p>
  <div class="ph-row"><select class="ph-sel" id="ev">${EVT.map((x,i)=>`<option value="${i}">${x[0]} ${x[3]}</option>`).join('')}</select><select class="ph-sel" id="tr">${TREF.map((x,i)=>`<option value="${i}">${x}</option>`).join('')}</select></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">الخطط: تمّت أم لا؟</h3><p class="sub">خطط شركة من إعدادنا، مبني على التمرين 2 ص 45. غيّر العلامة.</p><div id="pl"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر «(no time)» ثم «last month»: لماذا تغيّر الفعل؟</li><li>متى نستعمل <span class="en">yet</span>؟</li><li>اكتب خبراً عن تغيير في كليتك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const st=PLAN.map(p=>p[1]);
 const sh=()=>{const x=EVT[+$('#ev').value],t=+$('#tr').value;
  $('#o').innerHTML=t===0?eb(`The company has ${x[2]} ${x[3]}.`)+'<p class="sub">لا يوجد زمن ماضٍ محدد ← المضارع التام (has + التصريف الثالث).</p>':eb(`The company ${x[1]} ${x[3]} ${TREF[t]}.`)+`<p class="sub">يوجد زمن ماضٍ محدد (${TREF[t]}) ← الماضي البسيط.</p>`};
 ['ev','tr'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const ps=()=>{$('#pl').innerHTML=PLAN.map((p,i)=>`<div class="ph-row" style="align-items:center"><button type="button" class="btn${st[i]?' pri':''}" data-p="${i}" style="min-width:42px">${st[i]?'✓':'✗'}</button><span class="en">${p[0]}</span></div>`).join('')+eb(PLAN.map((p,i)=>st[i]?p[2]:p[3]));
  el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{st[+b.dataset.p]^=1;ps()})};ps();
}
B.lesson({
 id:'u9-l2',unit:9,order:2,pages:'44–45',
 title:'Part B: Company changes — تغيّرات الشركة',
 summary:'المضارع التام (have / has + التصريف الثالث) للتغيّرات دون زمن محدد، والماضي البسيط مع زمن ماضٍ محدد (last month، in 2001، yesterday)، و already / just / yet، والسؤال Have they …?، والربط بـ and، but، so، because في كتابة تقرير عن تغيّرات شركة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 44–45',html:`<p>تتحدث وتكتب عن تغيّرات في شركة. ستتعلم:</p><ol><li>المضارع التام.</li><li>الفرق بينه وبين الماضي البسيط.</li><li>${e('already, just, yet')}.</li><li>أدوات الربط.</li></ol>`},
  {h:'المضارع التام والماضي البسيط',ref:'ص 44',html:`${vt([['The company has closed its factory.','لا زمن ماضٍ محدد','المضارع التام'],['The factory closed last month.','زمن ماضٍ محدد','الماضي البسيط'],['He has left the company.','لا زمن','المضارع التام'],['He left in June.','in June','الماضي البسيط']],['English','الزمن','الصيغة'])}<p>كلمات الزمن الماضي: ${e('yesterday, last week, last month, in 2002, ten years ago, two months ago')}.</p>`},
  {h:'التصريف الثالث',ref:'ص 44',html:vt(IRR.map(r=>[r[0],r[1],r[2]]).concat([['open','opened','opened'],['join','joined','joined']]),['الفعل','الماضي','التصريف الثالث'])},
  {h:'already · just · yet',ref:'ص 45',html:`${vt([["They've just installed new software.",'just = للتو'],["The company has already recruited ten new staff.",'already = بالفعل'],["They haven't opened the office yet.",'yet في النفي = بعد'],['Have they changed their computer system yet?','yet في السؤال']],['English','المعنى'])}`},
  {h:'الربط',ref:'ص 45',html:`${vt([['and','و'],['but','لكن'],['so','لذلك'],['because','لأن']],['English','المعنى'])}${eb("They have expanded their office space, but they haven't opened a new branch yet.")}`},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">have / has</span> + التصريف الثالث: <span class="en">They\'ve</span> = <span class="en">They have</span>، و <span class="en">It\'s closed</span> هنا = <span class="en">It has closed</span>.'},
  {h:'تمارين الكتاب',ref:'ص 44–45',html:
   bk(1,'ص 44','ضع خطاً تحت الأفعال، ثم أكمل بالماضي البسيط أو المضارع التام.',['a: has left · left · has closed · closed','b: 1 rose · 2 have joined · 3 built · 4 have opened · 5 went down · 6 have reduced'])+
   bk(2,'ص 44–45','نشاط ثنائي: اسأل زميلك عمّا تغيّر في الشركة، وأجب عن أسئلته.',null,'معلومات الطالب أ في ص 81 من الكتاب.')+
   bk(3,'ص 45','صنّف الخطط العشر تحت العناوين، ثم اكتب التقرير.',['1 Workplaces: expand office space · open a new branch office in Frankfurt','2 Products: design new products · produce new products','3 Training: increase training programmes','4 Staff: get more sales representatives · recruit bilingual secretaries','5 Marketing: do market research in Northern Europe · change company logo','6 Investment: find new investors'])+
   bk(4,'ص 45','تحدث مع زميلك عن تغيّرات حديثة في كليتك أو شركتك.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'تام أم بسيط؟',title:'has closed · closed last month',q:'لماذا نقول has closed مرة و closed مرة؟',ref:'ص 44',
   art:art(`<g data-tip="لا زمن محدد ← المضارع التام"><rect x="20" y="60" width="320" height="56" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,93,'The company has closed its factory.',{fs:14,w:700})}</g>
    <g data-tip="last month ← الماضي البسيط"><rect x="20" y="140" width="320" height="56" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,173,'The factory closed last month.',{fs:14,w:700})}</g>`,'present perfect'),
   cap:'خبران عن الحدث نفسه. مرّر المؤشر على كل منهما.',side:[{tip:`إذا ذكرت متى حدث بالضبط فاستعمل الماضي البسيط.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Two new accountants ___ the company.',o:['have joined','joined'],a:0,why:'لا زمن محدد.'},{s:'We ___ a new factory in 2001.',o:['built','have built'],a:0,why:'in 2001.'},{s:'Our costs ___ down last year.',o:['went','have gone'],a:0},{s:'He ___ the company.',o:['has left','left'],a:0}]}),title:'مختبر مصغّر: الزمن'}]},
  {st:2,short:'already · yet',title:'already · just · yet',q:'كيف تقول إنهم لم يفتحوا الفرع بعد؟',ref:'ص 45',
   art:art(`<g data-tip="just = للتو"><rect x="20" y="40" width="320" height="50" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,71,"They've just installed new software.",{fs:13,w:700,c:'#fff'})}</g>
    <g data-tip="already = بالفعل"><rect x="20" y="110" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,141,"They've already recruited ten staff.",{fs:13,w:700})}</g>
    <g data-tip="yet في النفي = بعد"><rect x="20" y="180" width="320" height="50" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(180,211,"They haven't opened the branch yet.",{fs:13,w:700,c:'#fff'})}</g>`,'already yet'),
   cap:'ثلاث كلمات مع المضارع التام. مرّر المؤشر على كل منها.',side:[{tip:`${e('yet')} في آخر الجملة، و ${e('just / already')} بين ${e('have')} والفعل.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"They haven't changed the logo ___.",o:['yet','already'],a:0},{s:"We've ___ found new investors. (بالفعل)",o:['already','yet'],a:0},{s:'Have they opened the branch ___?',o:['yet','just'],a:0}]}),title:'مختبر مصغّر: already / yet'}]},
  {recap:['have / has + past participle.','لا زمن محدد ← has closed؛ زمن محدد ← closed last month.','just, already (قبل الفعل) · yet (في الآخر، نفي وسؤال).','and, but, so, because.']}
 ],
 lab:lab9b,
 examples:[
  {title:'مثال 1: بلا زمن',ref:'ص 44',q:`<p>الشركة فتحت صالة عرض جديدة (دون ذكر متى).</p>`,given:[],solve:()=>[{t:`الخطوة 1: لا زمن محدد ← المضارع التام.`},{t:`الخطوة 2: ${e('has + opened')}.`},{t:`الخطوة 3: ${e('The company has opened a new showroom.')}`,final:true}]},
  {title:'مثال 2: بزمن محدد',ref:'ص 44',q:`<p>الشركة فتحت صالة عرض جديدة الشهر الماضي.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('last month')} ← الماضي البسيط.`},{t:`الخطوة 2: ${e('opened')}.`},{t:`الخطوة 3: ${e('The company opened a new showroom last month.')}`,final:true}]},
  {title:'مثال 3: الربط',ref:'ص 45',q:`<p>اربط: They have expanded the office. They haven't opened the new branch yet.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفكرتان متعاكستان.`},{t:`الخطوة 2: نربط بـ ${e('but')}.`},{t:`الخطوة 3: ${e("They have expanded the office, but they haven't opened the new branch yet.")}`,final:true}]}
 ],
 quiz:[
  {q:'He ___ the company in June.',o:['left','has left','leaves','leave'],c:0,e:'in June.'},
  {q:'Dinkie Heel ___ its factory in the UK. (لا زمن)',o:['has closed','closed last','close','closing'],c:0,e:'المضارع التام.'},
  {q:"They haven't opened it ___.",o:['yet','already','just','ago'],c:0,e:'yet.'},
  {q:'build → past participle:',o:['built','builded','build','builden'],c:0,e:'built.'},
  {q:'Two accountants ___ the company. (لا زمن)',o:['have joined','joined last','join','joining'],c:0,e:'have joined.'},
  {q:"We expanded, ___ we didn't open a new branch.",o:['but','because','so','and so'],c:0,e:'but للتعارض.'}
 ]
});

/* ========== Review 3 ========== */
B.lesson({
 id:'u9-l3',unit:9,order:3,pages:'46–47',
 title:'Review 3 — مراجعة الوحدات 7–9',
 summary:'مراجعة المترادفات (book = reserve، hire = rent)، وأسئلة الحجز (How many / How much / How long / When / May I have)، وأفعال تاريخ الشركة وتغيّراتها (increase، expand، launch، recruit)، والماضي البسيط والمضارع التام، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 46–47',html:vt([['الحجز','How many nights do you want to stay?','7A'],['الاتجاهات','Ask for directions to the office.','8A'],['الاستقبال','Arrive at reception. Introduce yourself.','8B'],['تاريخ الشركة','When did the company start?','9A'],['التغيّرات','Has it expanded recently?','9B']],['النقطة','مثال','الدرس'])},
  {h:'مترادفات',ref:'ص 46',html:vt([['make','produce'],['get on (a bus)','take'],['reserve','book'],['station','stop'],['start','begin'],['booking','reservation'],['rent','hire'],['leave','depart']],['الكلمة','مرادفها'])},
  {h:'كلمات السؤال',ref:'ص 46',html:vt([['How many …?','العدد: How many nights?'],['How much …?','السعر: How much is the room?'],['How long …?','المدة: How long does it take?'],['When …?','الوقت: When will you arrive?'],['How …?','الطريقة: How would you like to pay?'],['May I have …?','طلب: May I have your name?']],['English','الاستعمال'])},
  {h:'تمارين المراجعة',ref:'ص 46–47',html:
   bk('Vocabulary 1','ص 46','طابق الكلمات بمرادفاتها.',['1 d','2 e','3 f','4 g','5 b','6 c','7 h','8 a'])+
   bk('Language 1','ص 46','أكمل الأسئلة بكلمات الصندوق.',['1 How many','2 When','3 How many','4 May I have','5 How long','6 May I have','7 How much','8 How'])+
   bk('Communication 1','ص 46','لعبة: مثّل المواقف من البداية إلى النهاية.',null)+
   bk('Vocabulary 2','ص 47','أكمل الكلمات المتقاطعة بأفعال الوحدة 9.',['Across: 3 increased · 5 expand · 6 left','Down: 1 launch · 2 open · 4 recruit'],'من قراءتنا لشبكة الكلمات.')+
   bk('Language 2','ص 47','ضع علامة على الجملة الصحيحة في كل زوج.',['1 b','2 a','3 a','4 a'])+
   bk('Communication 2','ص 47','اقرأ عن شركة وأجب، ثم اسأل زميلك عن شركته.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدتان 7 و 8',title:'خلاصة: الحجز والتنقل',q:'ما الكلمة المناسبة: How many أم How long؟',ref:'ص 46',
   art:art(`${[['How many nights?','العدد'],['How much is the room?','السعر'],['How long does it take?','المدة'],['When will you arrive?','الوقت'],['May I have your name?','طلب']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="30" y="${26+i*52}" width="300" height="42" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,53+i*52,x[0],{fs:14,w:700})}</g>`).join('')}`,'question words'),
   cap:'خمس صيغ سؤال. مرّر المؤشر على كل منها.',side:[{tip:`${e('hire a car')} = ${e('rent a car')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'___ tickets do you want?',o:['How many','How much'],a:0},{s:'___ does it take to get to your office?',o:['How long','How many'],a:0},{s:'___ your telephone number, please?',o:['May I have','How'],a:0}]}),title:'مختبر مصغّر: السؤال'}]},
  {st:2,short:'الوحدة 9',title:'خلاصة: الشركة وتغيّراتها',q:'أي الجملتين صحيحة: has left last month أم left last month؟',ref:'ص 47',
   art:art(`<g data-tip="✔ زمن محدد مع الماضي البسيط"><rect x="20" y="70" width="320" height="50" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,101,'The manager left the company last month.',{fs:13,w:700,c:'#fff'})}</g>
    <g data-tip="✘ لا نستعمل المضارع التام مع last month"><rect x="20" y="140" width="320" height="50" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(180,171,'The manager has left the company last month.',{fs:13,w:700,c:'#fff'})}</g>`,'tenses'),
   cap:'جملة صحيحة وجملة خاطئة. مرّر المؤشر على كل منهما.',side:[{tip:`${e('already')} مع المضارع التام: ${e('has already recruited')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'أي جملة صحيحة؟',cases:[{q:'1',opts:[['The store opened in 2001.',1],['The store has opened in 2001.',0]]},{q:'2',opts:[["The company's sales have increased already.",1],["The company's sales increased already.",0]]}]}),title:'مختبر مصغّر: الزمن'}]},
  {recap:['book = reserve، hire = rent، start = begin.','How many / How much / How long / When / How / May I have.','launch, expand, recruit, increase, leave.','الماضي البسيط مع الزمن المحدد، والمضارع التام بدونه.']}
 ],
 examples:[
  {title:'مثال 1: مرادف',ref:'ص 46',q:`<p>ما مرادف ${e('reserve')}؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: reserve = يحجز.`},{t:`الخطوة 2: المرادف ${e('book')}.`},{t:`الخطوة 3: ${e('reserve = book')}`,final:true}]},
  {title:'مثال 2: كلمة السؤال',ref:'ص 46',q:`<p>أكمل: ___ is the room per night?</p>`,given:[],solve:()=>[{t:`الخطوة 1: نسأل عن السعر.`},{t:`الخطوة 2: ${e('How much')}.`},{t:`الخطوة 3: ${e('How much is the room per night?')}`,final:true}]},
  {title:'مثال 3: الزمن الصحيح',ref:'ص 47',q:`<p>صحّح: The store has opened in 2001.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('in 2001')} زمن ماضٍ محدد.`},{t:`الخطوة 2: نستعمل الماضي البسيط ${e('opened')}.`},{t:`الخطوة 3: ${e('The store opened in 2001.')}`,final:true}]}
 ],
 quiz:[
  {q:'rent =',o:['hire','book','take','leave'],c:0,e:'rent = hire.'},
  {q:'start =',o:['begin','depart','stop','book'],c:0,e:'start = begin.'},
  {q:'___ will you arrive?',o:['When','How many','How much','May I have'],c:0,e:'When.'},
  {q:'___ does it take?',o:['How long','How many','How much','When'],c:0,e:'المدة.'},
  {q:'Correct:',o:['The store opened in 2001.','The store has opened in 2001.','The store has open in 2001.','The store opens in 2001 ago.'],c:0,e:'in 2001.'},
  {q:'Sales have ___ this month.',o:['increased','increase','increasing','increases'],c:0,e:'have + increased.'}
 ]
});
})(PLCBOOK);

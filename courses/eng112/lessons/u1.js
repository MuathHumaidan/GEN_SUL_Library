/* الوحدة 1 (Business Goals 2) — Greeting visitors: Part A Greeting visitors to your country (ص 6–7) · Part B Greeting visitors to your office (ص 8–9)
   + Help files ص 86–87. الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 1A Greeting visitors to your country ========== */
const AIR=[['H',"Hello. Are you Mr Hall? I'm Sara from Delta Electric. I'm here to take you to our office.",'التعريف'],['V',"Yes, I'm Paul Hall. Please call me Paul. Thank you. That's very kind.",'رد الزائر'],['H','Can I help you with your bags?','عرض المساعدة'],['V',"No, it's all right, thanks. They're not heavy.",'رفض لطيف'],['H','This way. Did you have a good flight?','الرحلة'],['V',"Yes, it was fine. I slept for two hours.",'رد'],['H','Do you travel abroad a lot?','السفر'],['V','About five times a year.','رد'],['H',"It's very hot today. It's about 40 degrees.",'الطقس'],['V','Yes, it is! How long does it take to get to the office?','سؤال الزائر'],['H','About half an hour. You can put your bags in the boot.','رد المضيف']];
function lab1a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">في المطار</h3><p class="sub">حوار من إعدادنا، مبني على التمرينين 1 و 2 ص 6. اضغط «الجملة التالية»: من يقولها، المضيف (H) أم الزائر (V)؟</p>
  <div class="ph-row"><button type="button" class="btn" data-g="H">المضيف H</button><button type="button" class="btn" data-g="V">الزائر V</button><button type="button" class="btn pri" id="nx">الجملة التالية</button></div><div id="fb"></div><div id="sv"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما المواضيع التي تحدثا عنها؟</li><li>كيف عرض المضيف المساعدة؟ وكيف ردّ الزائر؟</li><li>أي سؤال بالماضي البسيط؟ ولماذا؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0,sc=0,ans=null;
 const sh=()=>{const x=AIR[k];$('#o').innerHTML=dl(AIR.slice(0,k).map(a=>[a[0]==='H'?'Host':'Visitor',a[1]]))+`<p class="sub">الجملة الآن:</p>${eb([x[1]])}`;
  $('#fb').innerHTML=ans==null?'<p class="sub">اختر: من يقولها؟</p>':ans?`<p class="sub" style="color:var(--green,#2e8b57)">صحيح: ${x[2]}.</p>`:`<p class="sub" style="color:var(--red)">ليس هذا. يقولها ${x[0]==='H'?'المضيف':'الزائر'}.</p>`;
  $('#sv').innerHTML=`<p class="sub">النتيجة: ${sc} من ${AIR.length}</p>`};
 el.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{if(ans!=null)return;ans=b.dataset.g===AIR[k][0];if(ans)sc++;sh()});
 $('#nx').onclick=()=>{if(k<AIR.length-1){k++;ans=null}else{k=0;sc=0;ans=null}sh()};sh();
}
const HV={intro:['H',"I'm here to take you to our office.",'المضيف يعرّف بنفسه'],help:['H','Can I help you with your bags?','عرض المساعدة'],yes:['V',"Thank you. That's very kind.",'قبول'],no:['V',"No, it's all right, thanks.",'رفض لطيف'],way:['H','This way. Here\'s our car.','إرشاد'],boot:['H','You can put your bags in the boot.','إرشاد'],flight:['H','How was your flight?','سؤال عن الرحلة'],far:['V','How long does it take to get there?','سؤال الزائر']};
const LAB111A={title:'المضيف أم الزائر؟',w:(el,B)=>N.labB(el,B,{intro:'اختر العبارة، وشاهد من يقولها ووظيفتها.',
 controls:[{k:'x',label:'العبارة',opts:Object.keys(HV).map(k=>[k,HV[k][1]])}],
 out:({x})=>{const [w,s,ar]=HV[x];return{pieces:[[w==='H'?'Host':'Visitor','x',w==='H'?'المضيف':'الزائر'],[s,w==='H'?'k':'q',ar]],say:s,why:w==='H'?'المضيف يرحّب ويعرض المساعدة ويرشد.':'الزائر يشكر ويرد ويسأل.'}}})};
const TN={pres:['Do you travel abroad a lot?','I travel about four times a year.','عادة: المضارع البسيط'],job:['What do you do?','I work in Marketing.','العمل الآن: المضارع البسيط'],past:['Did you have a good flight?',"Yes, but I didn't sleep.",'حدث انتهى: الماضي البسيط'],be:['How was your flight?',"It wasn't very comfortable.",'الماضي من be: بلا did'],why:['Why did you change departments?','A colleague left, so I applied.','سبب في الماضي']};
const LAB111B={title:'المضارع البسيط أم الماضي البسيط؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الموقف، وشاهد السؤال والجواب.',
 controls:[{k:'t',label:'الموقف',opts:[['pres','عادة'],['job','العمل'],['past','الرحلة'],['be','be في الماضي'],['why','سبب']]}],
 out:({t})=>{const [q,a,ar]=TN[t];return{pieces:[[q,'k','السؤال'],[a,'n',ar]],say:`${q} ${a}`,why:t==='be'?`مع ${e('be')} لا نستعمل ${e('did')}: ${e('How was …? · It wasn\'t …')}`:t==='pres'||t==='job'?`المضارع البسيط: ${e('do / does')} في السؤال والنفي.`:`الماضي البسيط: ${e('did')} في السؤال والنفي، والفعل بعدها كما هو.`}}})};
const R11=N.rule({title:'استقبال الزائر في المطار، والمضارع البسيط والماضي البسيط',ref:'ص 6–7، ص 86–87',
 intro:`حين تستقبل زائراً في المطار تعرّف بنفسك، وتعرض المساعدة، وتسأله عن رحلته، وتتحدث عن الطقس والعمل. وتحتاج زمنين: المضارع البسيط للعادات والعمل، والماضي البسيط لما حدث.`,
 parts:[
 {t:'المضيف والزائر في المطار',short:'Can I help you …?',old:[1,2],q:'كيف يعرض المضيف المساعدة؟ وكيف يرد الزائر؟',ref:'ص 6، ص 86',
  lead:`للمضيف عبارات ثابتة، وللزائر ردود ثابتة.`,
  points:[`<b>المضيف يعرّف:</b> ${e("Hello, Mr Smith. I'm Susie from Mirage. I'm here to take you to the office.")}`,`<b>الزائر:</b> ${e('Please call me David.')}`,`<b>عرض المساعدة:</b> ${e('Can I help you with your bags?')} — ${e("Thank you. That's very kind. / No, it's all right, thanks.")}`,`<b>الرحلة:</b> ${e('Did you have a good flight? · How was your journey / trip?')}`,`<b>السفر:</b> ${e('Do you travel abroad a lot? · Do you like travelling?')}`,`<b>الطقس:</b> ${e("It's a lovely / hot / very cold / windy day today. · It's about 30 degrees.")}`,`<b>الإرشاد:</b> ${e("This way. · Here's our car. · You can put your bags in the boot.")}`],
  grid:{head:['المضيف','الزائر'],rows:[["I'm here to take you to our office.","Thank you. That's very kind."],['Can I help you with your bags?',"No, it's all right, thanks."],['Did you have a good flight?','Yes, it was fine.'],['This way.','How long does it take to get there?']]},
  pairs:[['Did you had a good flight?','Did you have a good flight?','بعد did الفعل كما هو.'],["No, thanks. It's all right?","No, it's all right, thanks.",'رفض لطيف.']],
  art:art(`<g data-tip="المضيف"><circle cx="80" cy="80" r="30" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(80,85,'Host',{fs:13,w:700})}</g><g data-tip="الزائر"><circle cx="280" cy="80" r="30" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(280,85,'Visitor',{fs:13,w:700})}</g>${[['flight ✈',140],['weather ☀',175],['job',210],['bags',245]].map(x=>`<g data-tip="موضوع"><rect x="120" y="${x[1]-20}" width="120" height="28" rx="8" fill="${C.paper}" stroke="${C.ink}"/>${TL(180,x[1],x[0],{fs:12})}</g>`).join('')}<path d="M110 80 L250 80" stroke="${C.ink}" stroke-width="2"/>`,'airport'),cap:'المضيف والزائر ومواضيع الحديث في الطريق. مرّر المؤشر.',labs:[LAB111A]},
 {t:'المضارع البسيط والماضي البسيط',short:'do / did',old:[3],q:'لماذا نقول Do you travel a lot? لكن Did you have a good flight؟',ref:'ص 7، ص 87',
  lead:`المضارع البسيط لما نفعله عادة ولعملنا. والماضي البسيط لحدث انتهى في وقت معروف.`,
  points:[`<b>المضارع البسيط:</b> ${e('Do you travel abroad a lot? · What do you do? — I work in Accounts.')}، ومع ${e('he/she')}: ${e('What does Sheila do? — She works in Administration.')}`,`السؤال والنفي بـ ${e('do / does')}: ${e("No, he doesn't work in the same office.")}`,`<b>الماضي البسيط:</b> ${e('It was a good flight. · Before that, I worked in Sales. · Davina left last week.')}`,`السؤال والنفي بـ ${e('did')} والفعل كما هو: ${e("Did you have a good trip? · Why did you leave Amco? · I didn't like my boss.")}`,`<b>مع be لا نستعمل did:</b> ${e("How was your flight? — It wasn't very comfortable.")}`],
  grid:{head:['','المضارع البسيط','الماضي البسيط'],rows:[['متى؟','عادة / الآن','حدث انتهى'],['سؤال','Do you travel a lot?','Did you have a good flight?'],['نفي',"I don't travel much.","I didn't do any work."],['be','Is it far?','How was your trip?']]},
  pairs:[['Why you changed departments?','Why did you change departments?','السؤال بـ did والفعل كما هو.'],["I didn't did any work.","I didn't do any work.",'بعد didn\'t الفعل كما هو.'],['How did your flight?','How was your flight?','مع be لا نستعمل did.']],labs:[LAB111B]}
 ]});
B.lesson({
 id:'u1-l1',unit:1,order:1,pages:'6–7',
 title:'Part A: Greeting visitors to your country — استقبال زائر في بلدك',
 summary:'عبارات المضيف والزائر في المطار (I\'m here to take you to our office. Can I help you with your bags? This way.)، والحديث في الطريق عن الرحلة والطقس والعمل، والمضارع البسيط للعادات والعمل والماضي البسيط لما حدث.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 6–7',html:`<p>تستقبل زائراً لشركتك في المطار. ستتعلم:</p><ol><li>عبارات المضيف وردود الزائر.</li><li>مواضيع الحديث في الطريق: الرحلة والطقس والعمل.</li><li>المضارع البسيط والماضي البسيط في الأسئلة.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u1-l1'](el,B)},
  ...R11.theory,
  {h:'تمارين الكتاب',ref:'ص 6–7، ص 86–87',html:
   bk(1,'ص 6','أي المواضيع تتوقع أن يتحدث عنها Jon و Maria؟ ثم استمع وضع علامة على ما ذكراه.',['b: ✔ 1 Jon\'s flight · 3 Maria\'s job · 5 the weather · 7 transport to the office · 8 the time it takes to get to the office','✘ 2 Maria\'s family · 4 politics · 6 Jon\'s last holiday'])+
   bk(2,'ص 6','من يقول كل عبارة: المضيف (H) أم الزائر (V)؟',['1 V · 2 H · 3 H · 4 V · 5 H','6 H · 7 V · 8 H · 9 H · 10 H'])+
   bk(3,'ص 7','أكمل الجمل بصيغة الفعل المناسبة.',["1 was · didn't do",'2 do · do','3 work · worked','4 did · change','5 left · applied'])+
   bk(4,'ص 7','نشاط ثنائي: مثّل استقبال زائر في المطار، ثم بدّلا الأدوار.',null)+
   bk('Language file 1','ص 86','رتّب الحوار بين المضيف والزائرة.',["c Hello, I'm Michelle Delon. → j Hello, Ms Delon. I'm Dennis Clark from Vista. I'm here to take you to our office. → a Thank you. → f Can I help you with your bags? → b That's very kind. Could you take this one? → g Yes, of course. How was your trip? → e Not too bad, thanks. Ooh. It's cold today. → i Yes, it is. Winter's here. Do you travel a lot? → d No, only one or two trips a year. → h That's not too bad. This way ... here's our car."])+
   bk('Language file 2','ص 87','ضع الفعل بالمضارع البسيط أو الماضي البسيط.',['1 Did you have','2 was',"3 didn't like",'4 Do you visit','5 come','6 came','7 opened','8 did you open',"9 wasn't",'10 was'])},
  {h:'الاستماع',ref:'ص 6',html:au('1A-1','ص 6 — التمرينان 1 و 2','Maria تستقبل Jon في المطار.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u1-l1'](el,B),title:'شرح مرئي'}]},
  ...R11.stations,
  {recap:["I'm here to take you to our office.","Can I help you with your bags? — Thank you. That's very kind.",'Did you have a good flight? · Do you travel abroad a lot?',"It's very hot today. It's about 30 degrees.",'المضارع البسيط: do / does · الماضي البسيط: did · be بلا did.']}
 ],
 lab:lab1a,
 examples:[
  {title:'مثال 1: المضيف يعرّف',ref:'ص 6',q:`<p>أنت Omar من شركة Gulf Tech. استقبل Ms Lane في المطار.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Hello, Ms Lane.')}`},{t:`الخطوة 2: ${e("I'm Omar from Gulf Tech.")}`},{t:`الخطوة 3: ${e("Hello, Ms Lane. I'm Omar from Gulf Tech. I'm here to take you to our office.")}`,final:true}]},
  {title:'مثال 2: سؤال بالماضي',ref:'ص 87',q:`<p>اسأل الزائر هل كانت رحلته جيدة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: حدث انتهى: ${e('Did')}`},{t:`الخطوة 2: الفعل كما هو: ${e('have')}`},{t:`الخطوة 3: ${e('Did you have a good flight?')}`,final:true}]},
  {title:'مثال 3: be في الماضي',ref:'ص 87',q:`<p>صحّح: ${e('How did your trip?')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: لا فعل آخر، فنحتاج ${e('be')}.`},{t:`الخطوة 2: الماضي من ${e('is')}: ${e('was')}، بلا ${e('did')}.`},{t:`الخطوة 3: ${e('How was your trip?')}`,final:true}]}
 ],
 quiz:[
  {q:'Host: Can I help you ___ your bags?',o:['with','for','to','at'],c:0,e:'help with.'},
  {q:"Visitor: Thank you. That's very ___.",o:['kind','nice to','good for','well'],c:0,e:"That's very kind."},
  {q:'___ you have a good flight?',o:['Did','Do','Were','Have'],c:0,e:'الماضي البسيط.'},
  {q:'___ you travel abroad a lot?',o:['Do','Did','Are','Does'],c:0,e:'عادة: المضارع.'},
  {q:'How ___ your trip?',o:['was','did','were','does'],c:0,e:'be بلا did.'},
  {q:"I ___ any work on the plane.",o:["didn't do","didn't did","don't did","not did"],c:0,e:"didn't + الفعل."}
 ]
});

/* ========== 1B Greeting visitors to your office ========== */
const OFF={first:[['H',"Hello. I'm Laura Bell. Nice to meet you."],['V',"Nice to meet you, too. I'm Ken Ito."],['H','Please take a seat. Would you like a coffee?'],['V','Yes, please. That would be nice.'],['H','Have you been to Riyadh before?'],['V',"No, I haven't. But I've been to Jeddah."],['H','Oh, really? When was that?'],['V','In 2022. I came for a conference.']],
 again:[['H','Hello, Ken. Nice to see you again.'],['V','Hi, Laura. Nice to see you, too.'],['H','How are you?'],['V','Very well, thank you. How are things here?'],['H','Pretty good, thanks. Would you like a tea?'],['V','Yes, please.'],['H','Have you met our new manager, Mr Grant?'],['V','Yes, I have. We met at last year\'s meeting.']]};
function lab1b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الزيارة</h3><p class="sub">حواران من إعدادنا، مبنيان على التمرينين 2 و 4 ص 8–9.</p>
  <div class="ph-row"><button type="button" class="btn" data-m="first">أول لقاء</button><button type="button" class="btn" data-m="again">لقاء مرة أخرى</button></div>
  <div class="ph-row"><button type="button" class="btn pri" id="nx">الجملة التالية</button><button type="button" class="btn" id="al">الحوار كاملاً</button></div><div id="t"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما العبارة التي تدل على أنهما يلتقيان أول مرة؟</li><li>ماذا يعرض المضيف على الزائر؟</li><li>أي سؤال بالمضارع التام، وأي سؤال بالماضي البسيط؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let m='first',i=2;
 const sh=()=>{el.querySelectorAll('[data-m]').forEach(b=>b.classList.toggle('pri',b.dataset.m===m));$('#o').innerHTML=dl(OFF[m].slice(0,i).map(x=>[x[0]==='H'?'Host':'Visitor',x[1]]));
  $('#t').innerHTML=`<p class="sub">${m==='first'?e('Nice to meet you')+' = أول لقاء.':e('Nice to see you again')+' = التقيا من قبل.'}</p>`};
 el.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=b.dataset.m;i=2;sh()});$('#nx').onclick=()=>{i=Math.min(OFF[m].length,i+1);sh()};$('#al').onclick=()=>{i=OFF[m].length;sh()};sh();
}
const GR1B={first:['Nice to meet you.','Nice to meet you, too.','أول مرة'],again:['Nice to see you again.','Nice to see you, too.','التقيا من قبل'],how:['How are you?','Very well, thank you.','الاثنان'],seat:['Please take a seat.','Thank you.','الاثنان'],drink:['Would you like a coffee?','Yes, please. That would be nice.','الاثنان'],thanks:['Thank you for coming today.','Not at all. Thank you for seeing me.','الاثنان']};
const LAB111C={title:'التحية والرد',w:(el,B)=>N.labB(el,B,{intro:'اختر العبارة، وشاهد ردها ومتى نستعملها.',
 controls:[{k:'g',label:'العبارة',opts:Object.keys(GR1B).map(k=>[k,GR1B[k][0]])}],
 out:({g})=>{const [a,b,w]=GR1B[g];return{pieces:[[a,'k','المضيف'],[b,'q','الزائر'],[w,'x','']],say:`${a} ${b}`,why:w==='أول مرة'?`${e('meet')} لأول لقاء.`:w==='التقيا من قبل'?`${e('see … again')} لمن التقيته.`:'تصلح للحالين.'}}})};
const PP1={been:['Have you been here before?',"Yes, I've been to France before.",'When was that?','In 2003. I came for a conference.'],met:['Have you met Tom before?','Yes, I have.','When did you meet?','We met at last year\'s meeting.'],seen:['Have you seen the new office?',"No, I haven't.",'',"I haven't been to the new building."]};
const LAB111D={title:'Have you … before? ثم When …?',w:(el,B)=>N.labB(el,B,{intro:'اختر السؤال، وشاهد الانتقال من المضارع التام إلى الماضي البسيط.',
 controls:[{k:'q',label:'السؤال',opts:Object.keys(PP1).map(k=>[k,PP1[k][0]])}],
 out:({q})=>{const [a,b,c,d]=PP1[q];return{pieces:[[a,'k','المضارع التام'],[b,'n',''],...(c?[[c,'q','الماضي البسيط'],[d,'x','وقت محدد']]:[[d,'x','']])],say:[a,b,c,d].filter(Boolean).join(' '),why:`التجربة بلا وقت: ${e('Have you … before?')}. فإذا ذُكر الوقت أو سُئل عنه: الماضي البسيط.`}}})};
const R12=N.rule({title:'استقبال الزائر في المكتب، والمضارع التام والماضي البسيط',ref:'ص 8–9، ص 87',
 intro:`في المكتب ترحّب بالزائر وتعرض عليه مقعداً ومشروباً، وتبدأ حديثاً قصيراً. والتحية تختلف بين أول لقاء ولقاء مرة أخرى. ونسأل عن التجارب بالمضارع التام ثم عن التفاصيل بالماضي البسيط.`,
 parts:[
 {t:'التحية والضيافة في المكتب',short:'Nice to meet you · Nice to see you again',old:[1,2],q:'متى نقول Nice to meet you ومتى Nice to see you again؟',ref:'ص 8',
  lead:`أول لقاء: ${e('meet')}. لقاء مرة أخرى: ${e('see … again')}. وبعد التحية نعرض المقعد والمشروب.`,
  points:[`<b>أول مرة:</b> ${e('Nice to meet you. — Nice to meet you, too.')}، ونقدّم أنفسنا: ${e("Hello. I'm Sonja Blum. — Hi, Steve Verwoert.")}`,`<b>مرة أخرى:</b> ${e('Hello. Nice to see you again. — Hello. Nice to see you, too.')}`,`<b>للحالين:</b> ${e('How are you? — Very well, thank you.')}`,`<b>الضيافة:</b> ${e('Please take a seat. · Would you like a coffee? — Yes, please. That would be nice.')}`,`<b>الشكر:</b> ${e('Thank you for coming today. — Not at all. Thank you for seeing me.')}`,`<b>نصائح:</b> ابتسم وصافح، واحفظ الأسماء واستعملها، وانظر في عين محدثك، وأجب بأكثر من ${e('yes')} أو ${e('no')}، ولا تسأل أسئلة شخصية إن لم تعرف الشخص جيداً.`],
  grid:{head:['','أول مرة','مرة أخرى'],rows:[['التحية','Nice to meet you.','Nice to see you again.'],['الرد','Nice to meet you, too.','Nice to see you, too.'],['سؤال','Have you been here before?','How are things?']]},
  pairs:[['Nice to see you. (أول لقاء)','Nice to meet you.','أول لقاء: meet.'],['Would you like coffee? — Yes, I like.','Yes, please. That would be nice.','قبول المشروب.']],
  art:art(`<g data-tip="ابتسم وصافح"><rect x="20" y="30" width="155" height="50" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(97,60,'smile, shake hands',{fs:12,w:700})}</g><g data-tip="احفظ الاسم"><rect x="185" y="30" width="155" height="50" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(262,60,'use names',{fs:12,w:700})}</g><g data-tip="انظر في العين"><rect x="20" y="95" width="155" height="50" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(97,125,'eye contact',{fs:12,w:700})}</g><g data-tip="ثلاثة مواضيع جاهزة"><rect x="185" y="95" width="155" height="50" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(262,125,'be prepared',{fs:12,w:700})}</g><g data-tip="أكثر من نعم أو لا"><rect x="20" y="160" width="155" height="50" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(97,190,'more than yes/no',{fs:12,w:700})}</g><g data-tip="لا أسئلة شخصية"><rect x="185" y="160" width="155" height="50" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(262,190,'no personal questions',{fs:12,w:700})}</g>`,'tips'),cap:'نصائح الحديث القصير في العمل. مرّر المؤشر.',labs:[LAB111C]},
 {t:'المضارع التام ثم الماضي البسيط',short:'Have you … before? · When …?',old:[3],q:'لماذا نسأل Have you been here before? ثم When was that؟',ref:'ص 9، ص 87',
  lead:`مراجعة لما درسته في الوحدة 12: المضارع التام لتجربة بلا وقت، والماضي البسيط حين يُذكر الوقت أو يُفهم.`,
  points:[`${e('Have you been here before? · Has she met Bruce before? · Have they seen the new office?')}`,`${e("I haven't been to Slovakia. · She's met Bruce.")}`,`${e('I went to Russia last year. · I met Bruce in 2002.')}`],
  pairs:[['Did they visit our factory before? — Yes, they have.','Have they visited our factory before? — Yes, they have.','تجربة: المضارع التام.'],['When have they come?','When did they come?','When مع الماضي البسيط.']],labs:[LAB111D]}
 ]});
B.lesson({
 id:'u1-l2',unit:1,order:2,pages:'8–9',
 title:'Part B: Greeting visitors to your office — استقبال زائر في مكتبك',
 summary:'نصائح الحديث القصير في العمل، والتحية في أول لقاء (Nice to meet you) وفي لقاء مرة أخرى (Nice to see you again)، والضيافة (Please take a seat. Would you like a coffee?)، والسؤال عن التجارب بالمضارع التام ثم الماضي البسيط.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 8–9',html:`<p>تستقبل زائراً في مكتبك. ستتعلم:</p><ol><li>نصائح الحديث القصير قبل العمل.</li><li>التحية في أول لقاء وفي لقاء مرة أخرى، والضيافة.</li><li>${e('Have you … before?')} ثم ${e('When …?')}</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u1-l2'](el,B)},
  ...R12.theory,
  {h:'تمارين الكتاب',ref:'ص 8–9، ص 87',html:
   bk(1,'ص 8','اقرأ نصائح الحديث القصير، واختر أهم ثلاث، وقارن مع زميلك.',null)+
   bk(2,'ص 8','طابق الجمل بالردود، وحدد ما يُقال في أول لقاء وما يُقال بعد لقاء سابق، ثم استمع.',['a: 1 b · 2 e · 3 a · 4 c · 5 d · 6 f','b: First time: 1 b · 2 e — Met before: 6 f — Both: 3 a · 4 c · 5 d','c: الحوار 1: Claude و Michael لم يلتقيا (Nice to meet you) — الحوار 2: Cathy و Jenny التقتا من قبل (Nice to see you again)، و Jenny و Tom التقيا في الاجتماع العام السابق'])+
   bk(3,'ص 9','أكمل الجمل من الحوارين.',["1 Claude: Have you been (here before?) · Michael: I've been (to France before) · Claude: was (that?) · Michael: came · Claude: went · Michael: haven't been","2 Cathy: Have you met (Tom before?) · Jenny: I have · Tom: met"])+
   bk(4,'ص 9','نشاط ثنائي: استقبل زائراً في مكتبك، أول مرة ثم مرة أخرى.',null)+
   bk(5,'ص 9','ما الصحيح في لقاءاتكم مع الزوار؟ اختر وقارن.',null,'إجابات حرة.')+
   bk('Language file 3','ص 87','اختر الكلمة الصحيحة.',['1 Have · have · did · came','2 seen · has · Did · she','3 hear · never · have'])},
  {h:'الاستماع',ref:'ص 8',html:au('1B-2','ص 8 — التمرين 2c','حواران: أول لقاء، ولقاء مرة أخرى.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u1-l2'](el,B),title:'شرح مرئي'}]},
  ...R12.stations,
  {recap:['أول مرة: Nice to meet you. — Nice to meet you, too.','مرة أخرى: Nice to see you again. — Nice to see you, too.','Please take a seat. · Would you like a coffee? — Yes, please.','Thank you for coming today. — Not at all. Thank you for seeing me.','Have you been here before? — When was that?']}
 ],
 lab:lab1b,
 examples:[
  {title:'مثال 1: أول لقاء',ref:'ص 8',q:`<p>زائر جديد قال: ${e("Hello. I'm Mark Bell.")} ردّ.</p>`,given:[],solve:()=>[{t:'الخطوة 1: أول لقاء.'},{t:`الخطوة 2: نقدّم أنفسنا ونقول ${e('Nice to meet you')}.`},{t:`الخطوة 3: ${e("Hi, Mark. I'm Sami Ali. Nice to meet you.")}`,final:true}]},
  {title:'مثال 2: الضيافة',ref:'ص 9',q:`<p>اعرض على الزائر مقعداً ثم شاياً.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Please take a seat.')}`},{t:`الخطوة 2: ${e('Would you like')} + الشيء.`},{t:`الخطوة 3: ${e('Please take a seat. Would you like a tea?')}`,final:true}]},
  {title:'مثال 3: تجربة ثم وقت',ref:'ص 87',q:`<p>زائرك زار الرياض من قبل. اسأله، ثم اسأله متى.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Have you been to Riyadh before?')}`},{t:`الخطوة 2: الوقت بالماضي البسيط: ${e('When was that?')}`},{t:`الخطوة 3: ${e('Have you been to Riyadh before? When was that?')}`,final:true}]}
 ],
 quiz:[
  {q:'First meeting:',o:['Nice to meet you.','Nice to see you again.','How are things?','Good to see you again.'],c:0,e:'meet.'},
  {q:'Hello. Nice to see you again. —',o:['Hello. Nice to see you, too.','Nice to meet you, too.','Not at all.','Yes, please.'],c:0,e:'see you, too.'},
  {q:'Thank you for coming today. —',o:['Not at all. Thank you for seeing me.','Yes, please.','Nice to meet you.','Very well.'],c:0,e:'Not at all.'},
  {q:'Would you like a coffee? —',o:['Yes, please. That would be nice.','Yes, I like.','No, I not.','Very well, thank you.'],c:0,e:'قبول.'},
  {q:'___ you been here before?',o:['Have','Did','Do','Were'],c:0,e:'المضارع التام.'},
  {q:'When ___ they come?',o:['did','have','do','has'],c:0,e:'الماضي البسيط.'}
 ]
});
})(PLCBOOK);

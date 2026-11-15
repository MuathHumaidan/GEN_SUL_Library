/* الوحدة 5 (Business Goals 2) — Comparing services: Part A Business services (ص 24–25) · Part B Expressing your opinion (ص 26–27)
   + Help files ص 94–95. الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 5A Business services ========== */
/* شركات توصيل من إعدادنا (قيم توضيحية) */
const DLV=[{n:'FastBox',p:45,h:24,c:2,r:2},{n:'SkyPost',p:90,h:12,c:3,r:3},{n:'EasyShip',p:25,h:72,c:1,r:1}];
function lab5a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">مقارنة شركات التوصيل</h3><p class="sub">شركات من إعدادنا (<b>قيم توضيحية</b>)، مبنية على التمرين 1 ص 24. اختر الصفة وعدد الشركات.</p>
  <div class="ph-row"><button type="button" class="btn" data-a="cheap">cheap</button><button type="button" class="btn" data-a="fast">fast</button><button type="button" class="btn" data-a="conv">convenient</button><button type="button" class="btn" data-a="rel">reliable</button></div>
  <div class="ph-row"><button type="button" class="btn" data-n="2">شركتان</button><button type="button" class="btn" data-n="3">ثلاث شركات</button></div><div id="sv"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">الجملة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>متى نستعمل <span class="en">than</span> ومتى <span class="en">the</span>؟</li><li>لماذا <span class="en">cheaper</span> لكن <span class="en">more reliable</span>؟</li><li>تريد إرسال وثيقة مهمة غداً صباحاً: أي شركة تختار؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let a='cheap',n=2;
 const AD={cheap:['cheap','cheaper','the cheapest',x=>-x.p,x=>'SAR '+x.p],fast:['fast','faster','the fastest',x=>-x.h,x=>x.h+' hours'],conv:['convenient','more convenient','the most convenient',x=>x.c,x=>['','office only','collect from office','door-to-door'][x.c]],rel:['reliable','more reliable','the most reliable',x=>x.r,x=>['','not guaranteed','usually on time','guaranteed'][x.r]]};
 const sh=()=>{el.querySelectorAll('[data-a]').forEach(b=>b.classList.toggle('pri',b.dataset.a===a));el.querySelectorAll('[data-n]').forEach(b=>b.classList.toggle('pri',+b.dataset.n===n));
  const [b0,cmp,sup,sc,lab]=AD[a],L=DLV.slice(0,n),best=L.slice().sort((x,y)=>sc(y)-sc(x));
  $('#sv').innerHTML=vt(L.map(x=>[x.n,lab(x)]),['Company',b0]);
  $('#o').innerHTML=eb(n===2?[`${best[0].n} is ${cmp} than ${best[1].n}.`]:[`${best[0].n} is ${sup}.`,`${best[2].n} is ${a==='cheap'?'the most expensive':a==='fast'?'the slowest':a==='conv'?'the least convenient':'the least reliable'}.`])+`<p class="sub">${n===2?`شيئان: المقارنة + ${e('than')}.`:`ثلاثة أو أكثر: ${e('the')} + صيغة التفضيل.`}</p>`};
 el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{a=b.dataset.a;sh()});el.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{n=+b.dataset.n;sh()});sh();
}
const CS5={fast:['fast','faster','fastest','+ er'],big:['big','bigger','biggest','حرف مكرر'],cheap:['cheap','cheaper','cheapest','لا تكرار بعد حرفين'],tasty:['tasty','tastier','tastiest','y → ier'],exp:['expensive','more expensive','most expensive','طويلة: more'],good:['good','better','best','شاذة'],bad:['bad','worse','worst','شاذة'],far:['far','further','furthest','شاذة']};
const LAB555A={title:'المقارنة والتفضيل',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة.',
 controls:[{k:'a',label:'الصفة',opts:Object.keys(CS5).map(k=>[k,CS5[k][0]])}],
 out:({a})=>{const [x,y,z,r]=CS5[a];return{pieces:[[x,'x','الصفة'],[y+' than','k','المقارنة'],['the '+z,'q','التفضيل']],say:`${x}, ${y}, the ${z}`,why:`${r}. المقارنة بين شيئين مع ${e('than')}، والتفضيل بين ثلاثة أو أكثر مع ${e('the')}.`}}})};
const MD5={vs:['very','good.','يقوّي الصفة'],ex:['extremely','expensive!','يقوّي جداً'],re:['really','fast.','يقوّي (أقل رسمية)'],qu:['quite','good.','يضعّف'],fa:['fairly','cheap.','يضعّف'],mu:['much','cheaper.','فرق كبير'],al:['a lot','faster.','فرق كبير'],ab:['a bit','cheaper.','فرق صغير']};
const LAB555B={title:'very و much و a bit',w:(el,B)=>N.labB(el,B,{intro:'اختر الكلمة، وشاهد الصفة المناسبة لها.',
 controls:[{k:'m',label:'الكلمة',opts:Object.keys(MD5).map(k=>[k,MD5[k][0]])}],
 out:({m})=>{const [w,a,r]=MD5[m],cmp=['mu','al','ab'].includes(m);return{pieces:[['FastBox is','x',''],[w,'k',r],[a,'n',cmp?'مقارنة':'صفة']],say:`FastBox is ${w} ${a}`,why:cmp?`${e('much · a lot · a bit')} قبل صيغة المقارنة.`:`${e('very · extremely · really · quite · fairly')} قبل الصفة العادية.`}}})};
const R51=N.rule({title:'المقارنة والتفضيل، وكلمات تقوية الصفة وتضعيفها',ref:'ص 24–25، ص 94–95',
 intro:`حين تختار خدمة تقارن بين الشركات في السرعة والسعر والراحة والموثوقية.`,
 parts:[
 {t:'الاسم والصفة، والمقارنة والتفضيل',short:'cheaper · the cheapest',old:[1,2],q:'متى نقول cheaper than ومتى the cheapest؟',ref:'ص 24، ص 94',
  lead:`لكل معيار اسم وصفة وضد: ${e('speed → fast / slow · price → cheap / expensive · convenience → convenient / inconvenient · reliability → reliable / unreliable')}.`,
  points:[`<b>مقطع واحد:</b> + ${e('er / est')}: ${e('fast → faster → fastest')}`,`نكرر الحرف الأخير بعد حرف علة واحد: ${e('big → bigger')}، ولا نكرره بعد حرفي علة أو مع ${e('w / y')}: ${e('cheap → cheaper · slow → slower')}`,`<b>ينتهي بـ y:</b> ${e('tasty → tastier → tastiest')}`,`<b>طويلة:</b> ${e('more / most')}: ${e('expensive → more expensive → most expensive')}`,`<b>شاذة:</b> ${e('good → better → best · bad → worse → worst · far → further → furthest')}`,`شيئان: ${e('Smithsons are cheaper than Westons.')}، وثلاثة: ${e('BigPlane is the fastest airline.')}`],
  grid:{head:['الصفة','المقارنة','التفضيل'],rows:[['fast','faster','fastest'],['big','bigger','biggest'],['tasty','tastier','tastiest'],['convenient','more convenient','most convenient'],['good','better','best']]},
  pairs:[['more cheap','cheaper','قصيرة: er.'],['FastBox is cheaper SkyPost.','FastBox is cheaper than SkyPost.','than بعد المقارنة.'],['EasyShip is cheapest.','EasyShip is the cheapest.','the قبل التفضيل.']],labs:[LAB555A]},
 {t:'تقوية الصفة وتضعيفها',short:'very · quite · much · a bit',old:[3],q:'كيف تقول إن الفرق في السعر صغير؟',ref:'ص 25، ص 95',
  lead:`كلمات قبل الصفة تقوّيها أو تضعّفها، وكلمات قبل المقارنة تبيّن حجم الفرق.`,
  points:[`<b>تقوية:</b> ${e('very · extremely · really')} + صفة: ${e("They're really expensive.")}`,`<b>تضعيف:</b> ${e('quite · fairly')} + صفة: ${e('ParcelSpeed is fairly fast.')}`,`<b>فرق كبير:</b> ${e('much · a lot · far')} + مقارنة: ${e('Cybernet is much faster than Webspeed.')}`,`<b>فرق صغير:</b> ${e('a bit')} + مقارنة: ${e('Western Rail is a bit cheaper than TrainWest.')}`,`${e('really')} أقل رسمية من ${e('very')}.`],
  pairs:[['It is very cheaper.','It is much cheaper.','قبل المقارنة: much.'],['It is a bit good.','It is quite good.','قبل الصفة العادية: quite.']],labs:[LAB555B]}
 ]});
B.lesson({
 id:'u5-l1',unit:5,order:1,pages:'24–25',
 title:'Part A: Business services — خدمات الأعمال',
 summary:'معايير اختيار الخدمة (speed، price، convenience، reliability) وصفاتها وأضدادها، والمقارنة والتفضيل (cheaper than، the fastest، more convenient)، وكلمات التقوية والتضعيف (very، extremely، quite، fairly، much، a bit)، واختيار شركة توصيل وفندق للمؤتمر.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 24–25',html:`<p>تقارن بين خدمات الشركات لتختار الأفضل. ستتعلم:</p><ol><li>معايير الاختيار وصفاتها.</li><li>المقارنة والتفضيل.</li><li>تقوية الصفة وتضعيفها وحجم الفرق.</li></ol>`},
  ...R51.theory,
  {h:'تمارين الكتاب',ref:'ص 24–25، ص 94–95',html:
   bk(1,'ص 24','ما الأهم عند اختيار خدمة؟ ما الصفات من الأسماء؟ ثم اقرأ إعلانات شركات التوصيل وأجب.',['b: speed fast / slow · price cheap / expensive · convenience convenient / inconvenient · reliability reliable / unreliable','c1 Royal Star (guaranteed before 10.00 a.m.) · c2 NTN Express (the cheapest price) · c3 Royal Star (collects and delivers door-to-door)','d: Royal Star: guaranteed next-day delivery before 10.00 a.m.'],'c1 و c3 من قراءتنا للإعلانات.')+
   bk(2,'ص 24','استمع إلى Ben و Judy وضع علامة في الجدول.',['cheaper: Delivery Force','safer: Royal Star',"Ben's choice: Royal Star"])+
   bk(3,'ص 25','أكمل جمل Judy، ثم أين يمكن أن تأتي الكلمات؟',['a: 1 very · 2 really · 3 much','c: extremely 1، 2 · a bit 3 · fairly 1 · a lot 3 · quite 1'])+
   bk(4,'ص 25','نشاط ثنائي: اطلب من زميلك أن يوصي بمطبعة، وأوصِه بقاعة مؤتمرات.',null,'معلومات الطالب أ في ص 77 من الكتاب.')+
   bk('Language file 1','ص 94','اكتب جملاً بالمقارنة أو التفضيل.',['FlyByNight is the cheapest (airline).','1 Europe OnLine is slower than WizardNet. · WizardNet is more expensive than Europe OnLine.','2 Bottings Bank is the most convenient (bank). · ADL Bank is the smallest (bank).','3 Northern Trains are bigger than Express North Trains. · Express North Trains are faster than Northern Trains.','4 Beach Hotel is the most comfortable (hotel). · Centre Hotel is the cheapest (hotel).'])+
   bk('Language file 2','ص 95','اختر كلمة التقوية المناسبة في المقال.',['1 very · 2 a lot · 3 much · 4 really','5 a bit · 6 much · 7 extremely · 8 very'])},
  {h:'الاستماع',ref:'ص 24',html:au('5A-2','ص 24 — التمرين 2','Ben يسأل Judy عن شركة توصيل.')}
 ],
 stations:[
  {intro:true},
  ...R51.stations,
  {recap:['fast / cheap / convenient / reliable وأضدادها.','شيئان: cheaper than · more convenient than.','ثلاثة: the cheapest · the most convenient.','good → better → best · bad → worse → worst.','very / quite + صفة · much / a bit + مقارنة.']}
 ],
 lab:lab5a,
 examples:[
  {title:'مثال 1: المقارنة',ref:'ص 94',q:`<p>FastBox بـ 45 ريالاً، و SkyPost بـ 90. قارن السعر.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('cheap')} ← ${e('cheaper')}`},{t:`الخطوة 2: + ${e('than')}`},{t:`الخطوة 3: ${e('FastBox is cheaper than SkyPost.')}`,final:true}]},
  {title:'مثال 2: التفضيل',ref:'ص 94',q:`<p>ثلاثة فنادق، و Park Hotel أقربها إلى المحطة. اكتب.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('convenient')} طويلة: ${e('most')}.`},{t:`الخطوة 2: ${e('the most convenient')}`},{t:`الخطوة 3: ${e('Park Hotel is the most convenient.')}`,final:true}]},
  {title:'مثال 3: فرق صغير',ref:'ص 95',q:`<p>القطار أ أغلى قليلاً من القطار ب. اكتب.</p>`,given:[],solve:()=>[{t:`الخطوة 1: فرق صغير: ${e('a bit')}.`},{t:`الخطوة 2: + ${e('more expensive than')}`},{t:`الخطوة 3: ${e('Train A is a bit more expensive than Train B.')}`,final:true}]}
 ],
 quiz:[
  {q:'speed →',o:['fast','speedy','quickness','slowly'],c:0,e:'fast.'},
  {q:'NTN is ___ than Royal Star.',o:['cheaper','more cheap','cheapest','the cheaper'],c:0,e:'المقارنة.'},
  {q:'Royal Star is ___.',o:['the most reliable','the reliablest','more reliable','most reliable than'],c:0,e:'التفضيل.'},
  {q:'good →',o:['better','gooder','more good','best than'],c:0,e:'شاذة.'},
  {q:'Delivery Force are ___ cheaper.',o:['much','very','quite','fairly'],c:0,e:'much + مقارنة.'},
  {q:'big →',o:['bigger','biger','more big','bigest'],c:0,e:'تكرار الحرف.'}
 ]
});

/* ========== 5B Expressing your opinion ========== */
const CRS=[{n:'a first aid course',a:['It can save lives.','Everyone can use it at home, too.'],d:['It takes two full days.']},{n:'an English course',a:['We have a lot of international customers.','It helps in every department.'],d:['It takes a long time to see results.']},{n:'a sales course',a:['It can bring more customers.'],d:['Only the sales team needs it.','It is quite expensive.']}];
const RE5={ag:['I agree.','b'],gp:["Good point. I didn't think of that.",'b'],sw:['I see what you mean, but …','c'],ss:['I suppose so, but …','c'],tt:["That's true, but …",'c'],up:['I agree up to a point, but …','c']};
function lab5b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الاجتماع</h3><p class="sub">دورات من إعدادنا، مبنية على التمرينين 1 و 2 ص 26. اختر الدورة، ثم الرد.</p>
  <div class="ph-row">${CRS.map((c,i)=>`<button type="button" class="btn" data-c="${i}">${c.n}</button>`).join('')}</div>
  <div class="ph-row">${Object.keys(RE5).map(k=>`<button type="button" class="btn" data-r="${k}">${RE5[k][0]}</button>`).join('')}</div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div><div id="t"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي الردود موافقة كاملة؟ وأيها موافقة جزئية؟</li><li>كيف يعطي المتكلم رأيه؟</li><li>أي دورة تفضّل لزملائك؟ ولماذا؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let c=0,r='sw';
 const sh=()=>{el.querySelectorAll('[data-c]').forEach(b=>b.classList.toggle('pri',+b.dataset.c===c));el.querySelectorAll('[data-r]').forEach(b=>b.classList.toggle('pri',b.dataset.r===r));const x=CRS[c],[s,t]=RE5[r];
  $('#o').innerHTML=dl([['A',`What do you think? Which course is best?`],['B',`If you ask me, ${x.n} is best. ${x.a[0]}`],['A',t==='c'?s.replace('…',x.d[0].charAt(0).toLowerCase()+x.d[0].slice(1)):s]]);
  $('#t').innerHTML=`<p class="sub">${t==='b'?'موافقة كاملة.':'موافقة جزئية: نبدأ بقبول، ثم '+e('but')+' والعيب.'}</p>`};
 el.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{c=+b.dataset.c;sh()});el.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{r=b.dataset.r;sh()});sh();
}
const OP5={ask:['What do you think?','سؤال عن الرأي','x'],th:['I think a finance course is best.','رأي','k'],if:['If you ask me, a writing course is best.','رأي','k'],dt:["I don't think many people need that course.",'رأي منفي','k'],ag:['I agree.','موافقة كاملة','q'],gp:["Good point. I didn't think of that.",'موافقة كاملة','q'],sw:['I see what you mean, but it\'s expensive.','موافقة جزئية','r'],tt:["That's true, but it takes a long time.",'موافقة جزئية','r']};
const LAB555C={title:'الرأي والموافقة',w:(el,B)=>N.labB(el,B,{intro:'اختر العبارة.',
 controls:[{k:'o',label:'العبارة',opts:Object.keys(OP5).map(k=>[k,OP5[k][0]])}],
 out:({o})=>{const [a,ar,cl]=OP5[o];return{pieces:[[a,cl,ar]],say:a,why:cl==='r'?`الموافقة الجزئية تنتهي بـ ${e('but')} وسبب.`:o==='dt'?`النفي مع ${e('think')}: ${e("I don't think …")} لا ${e('I think … not')}.`:ar+'.'}}})};
const R52=N.rule({title:'إبداء الرأي، والموافقة الكاملة والجزئية',ref:'ص 26–27، ص 95',
 intro:`في الاجتماعات نطلب الرأي، ونعطي رأينا، ونوافق كلياً أو جزئياً بأدب.`,
 parts:[
 {t:'إبداء الرأي والموافقة',short:'If you ask me · I see what you mean',old:[1,2],q:'كيف توافق زميلك جزئياً دون أن تحرجه؟',ref:'ص 26، ص 95',
  lead:`ثلاث وظائف: طلب الرأي، وإعطاؤه، والرد عليه.`,
  points:[`<b>طلب الرأي:</b> ${e('What do you think?')}`,`<b>الرأي:</b> ${e("I think a finance course is best. · If you ask me, … · I don't think many people need …")}`,`<b>موافقة كاملة:</b> ${e("I agree. · Good point (I didn't think of that).")}`,`<b>موافقة جزئية:</b> ${e("I see what you mean, … · I suppose so, … · That's true, … · That's a good point, … · I agree up to a point, …")} ثم ${e('but …')}`],
  grid:{head:['الرأي','موافقة كاملة','موافقة جزئية'],rows:[['I think …','I agree.','I see what you mean, but …'],['If you ask me, …','Good point.','I suppose so, but …'],["I don't think …","I didn't think of that.","That's true, but …"]]},
  pairs:[["I don't to think it's a good idea.","I don't think it's a good idea.",'بلا to.'],["If you ask for me, …","If you ask me, …",'بلا for.'],["I am suppose so.",'I suppose so.','بلا am.'],["That's a good one point.","That's a good point.",'بلا one.']],
  art:art(`<g data-tip="الرأي"><rect x="90" y="20" width="180" height="44" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,47,'If you ask me, …',{fs:13,w:700})}</g><path d="M150 64 L90 110 M210 64 L270 110" stroke="${C.ink}" stroke-width="2"/><g data-tip="موافقة كاملة"><rect x="10" y="110" width="160" height="70" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(90,138,'I agree.',{fs:13,w:700})}${TL(90,162,'Good point.',{fs:12})}</g><g data-tip="موافقة جزئية"><rect x="190" y="110" width="160" height="70" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(270,138,'I see what you mean,',{fs:11,w:700})}${TL(270,162,'but …',{fs:12})}</g>`,'opinion'),cap:'رأي ثم موافقة كاملة أو جزئية. مرّر المؤشر.',labs:[LAB555C]},
 {t:'الرد المكتوب على رأي',short:'email reply',old:[3],q:'كيف ترد بالبريد على زميل يخالفك الرأي؟',ref:'ص 27',
  lead:`نستعمل العبارات نفسها في الرسالة: نشكر، ونوافق جزئياً، ثم نعرض رأينا وأسبابه.`,
  points:[`${e('Thanks for your email.')}`,`${e("I see what you mean about the price, but …")}`,`${e('If you ask me, a time-management course is best because …')}`,`${e('What do you think?')}`],
  ex:["Hi Roger, Thanks for your email. That's true, the course is expensive, but I think it's very useful. If you ask me, our staff waste a lot of time in meetings. What do you think?"]}
 ]});
B.lesson({
 id:'u5-l2',unit:5,order:2,pages:'26–27',
 title:'Part B: Expressing your opinion — إبداء الرأي',
 summary:'طلب الرأي وإبداؤه (What do you think? I think … If you ask me, …)، والموافقة الكاملة (I agree. Good point.) والجزئية (I see what you mean, but … That\'s true, but …)، ومزايا الدورات التدريبية وعيوبها، والرد المكتوب على زميل.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 26–27',html:`<p>تناقش مع زملائك أي دورة تدريبية تختارون. ستتعلم:</p><ol><li>طلب الرأي وإبداؤه.</li><li>الموافقة الكاملة والجزئية.</li><li>الرد المكتوب على رأي مخالف.</li></ol>`},
  ...R52.theory,
  {h:'تمارين الكتاب',ref:'ص 26–27، ص 95',html:
   bk(1,'ص 26','استمع إلى المديرين: ضع الأفكار في أعمدة المزايا والعيوب.',['Computer skills: advantages 2، 5 · disadvantages 6','Time-management skills: advantages 1، 3 · disadvantages 4'])+
   bk(2,'ص 26','أكمل عبارات المديرين، ثم حدد وظيفة كل عبارة.',['a1 think','a2 see what you mean','a3 you ask me',"a4 suppose so · don't think","a5 point · didn't think of",'a6 I agree','c: 1 a · 2 c · 3 a · 4 c · 5 b · 6 b'])+
   bk(3,'ص 27','اكتب رداً على رسالة Roger.',null,'إجابة حرة.')+
   bk(4,'ص 27','ناقشوا مزايا الدورات وعيوبها، وقرروا أفضلها لموظفيكم.',null)+
   bk('Language file 3','ص 95','احذف الكلمة الزائدة.',['1 to','2 for','3 a','4 am','5 of','6 one'])},
  {h:'الاستماع',ref:'ص 26',html:au('5B-1','ص 26 — التمرينان 1 و 2','مديران يناقشان دورة جديدة.')}
 ],
 stations:[
  {intro:true},
  ...R52.stations,
  {recap:['What do you think?',"I think … · If you ask me, … · I don't think …","موافقة كاملة: I agree. · Good point. I didn't think of that.","موافقة جزئية: I see what you mean / I suppose so / That's true, but …",'في الرسالة: الشكر، ثم الموافقة الجزئية، ثم رأيك وسببه.']}
 ],
 lab:lab5b,
 examples:[
  {title:'مثال 1: الرأي',ref:'ص 95',q:`<p>عبّر عن رأيك: دورة الهاتف هي الأفضل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('If you ask me,')}`},{t:`الخطوة 2: + ${e('a telephone skills course is best.')}`},{t:`الخطوة 3: ${e('If you ask me, a telephone skills course is best.')}`,final:true}]},
  {title:'مثال 2: موافقة جزئية',ref:'ص 95',q:`<p>زميلك قال إن دورة الحاسوب مفيدة، وأنت ترى أنها طويلة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نقبل جزئياً: ${e("That's true,")}`},{t:`الخطوة 2: ${e('but')} + السبب.`},{t:`الخطوة 3: ${e("That's true, but it takes a long time.")}`,final:true}]},
  {title:'مثال 3: تصحيح',ref:'ص 95',q:`<p>صحّح: ${e('I think of that we need more training.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('of')} زائدة.`},{t:`الخطوة 2: ${e('I think')} + جملة.`},{t:`الخطوة 3: ${e('I think that we need more training.')}`,final:true}]}
 ],
 quiz:[
  {q:'Asking for opinions:',o:['What do you think?','I agree.','Good point.','I suppose so.'],c:0,e:'سؤال.'},
  {q:'If you ask ___, a finance course is best.',o:['me','for me','to me','my'],c:0,e:'If you ask me.'},
  {q:'Agreeing completely:',o:['I agree.','I see what you mean, but …',"That's true, but …",'I suppose so, but …'],c:0,e:'كاملة.'},
  {q:"I see what you ___, but it's expensive.",o:['mean','think','say me','agree'],c:0,e:'I see what you mean.'},
  {q:"Good point. I didn't think ___ that.",o:['of','about of','for','to'],c:0,e:'think of.'},
  {q:"I ___ think many people need it.",o:["don't",'not','no',"doesn't"],c:0,e:"I don't think."}
 ]
});
})(PLCBOOK);

/* الوحدة 4 (Business Goals 2) — Products: Part A Talking about office equipment (ص 20–21) · Part B Talking about features and benefits (ص 22–23)
   + Help files ص 92–93. الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 4A Talking about office equipment ========== */
const EQ=[{n:'laptop',p:['old','slow','heavy'],c:['newer','faster','lighter'],en:{old:'modern',slow:'fast',heavy:'light'}},{n:'printer',p:['noisy','slow','unreliable'],c:['quieter','faster','more reliable'],en:{noisy:'quiet',slow:'fast',unreliable:'reliable'}},{n:'desk',p:['small','old-fashioned','ugly'],c:['bigger','more modern','more attractive'],en:{small:'big',['old-fashioned']:'modern',ugly:'attractive'}},{n:'phone',p:['complicated','old','heavy'],c:['simpler','newer','lighter'],en:{complicated:'simple',old:'new',heavy:'light'}}];
function lab4a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الجهاز والمشكلة</h3><p class="sub">مبني على التمارين 2 و 3 ص 20–21. اختر الجهاز والمشكلة وطريقة الشكوى.</p>
  <div class="ph-row">${EQ.map((x,i)=>`<button type="button" class="btn" data-q="${i}">${x.n}</button>`).join('')}</div><div class="ph-row" id="pb"></div>
  <div class="ph-row"><button type="button" class="btn" data-f="too">too + صفة</button><button type="button" class="btn" data-f="en">not + صفة + enough</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الطلب</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>متى نستعمل الصفة الأصلية ومتى عكسها؟</li><li>ما الفرق بين <span class="en">so</span> و <span class="en">because</span>؟</li><li>لماذا نقول <span class="en">a new one</span> لا <span class="en">a new printer</span>؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let q=0,p=0,f='too';
 const sh=()=>{const x=EQ[q];el.querySelectorAll('[data-q]').forEach(b=>b.classList.toggle('pri',+b.dataset.q===q));
  $('#pb').innerHTML=x.p.map((w,i)=>`<button type="button" class="btn${i===p?' pri':''}" data-p="${i}">${w}</button>`).join('');$('#pb').querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{p=+b.dataset.p;sh()});
  el.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('pri',b.dataset.f===f));const w=x.p[p],op=x.en[w];
  const s1=f==='too'?`This ${x.n} is too ${w}.`:`This ${x.n} isn't ${op} enough.`;
  $('#o').innerHTML=eb([s1,`${s1.replace('.','')}, so I need a new one.`,`I need a new ${x.n} because this one is too ${w}.`,`Can I get a ${x.c[p]} one?`])+`<p class="sub">${f==='too'?`${e('too')} + الصفة السلبية.`:`${e('not')} + الصفة الإيجابية + ${e('enough')}.`} والمقارنة: ${e(x.c[p])}.</p>`};
 el.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{q=+b.dataset.q;p=0;sh()});el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=b.dataset.f;sh()});sh();
}
const OP4={fast:['fast','slow'],light:['light','heavy'],rel:['reliable','unreliable'],simple:['simple','complicated'],mod:['modern','old-fashioned'],quiet:['quiet','noisy'],flex:['flexible','inflexible'],att:['attractive','ugly']};
const LAB444A={title:'الصفة وعكسها',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة.',
 controls:[{k:'a',label:'الصفة',opts:Object.keys(OP4).map(k=>[k,OP4[k][0]])}],
 out:({a})=>{const [x,y]=OP4[a];return{pieces:[[x,'q','إيجابية'],['↔','x',''],[y,'r','سلبية']],say:`${x}, ${y}`,why:/^(un|in)/.test(y)?`بعض الأضداد بإضافة ${e(y.slice(0,2))} في أولها.`:'ضد بكلمة مختلفة.'}}})};
const TE4={too:['This PC is','too old.','too + صفة سلبية'],en:["The screen isn't",'big enough.','not + صفة + enough'],noun:["It doesn't have",'enough memory.','not + enough + اسم'],so:['This PC is really old,','so I need a new one.','so = النتيجة'],bc:['I need a new PC','because this one is too old.','because = السبب']};
const LAB444B={title:'too و enough و so و because',w:(el,B)=>N.labB(el,B,{intro:'اختر التركيب.',
 controls:[{k:'t',label:'التركيب',opts:Object.keys(TE4).map(k=>[k,TE4[k][2]])}],
 out:({t})=>{const [a,b,ar]=TE4[t];return{pieces:[[a,'n',''],[b,'k',ar]],say:`${a} ${b}`,why:t==='en'?`${e('enough')} بعد الصفة.`:t==='noun'?`${e('enough')} قبل الاسم.`:t==='too'?`${e('too')} قبل الصفة: أكثر من اللازم.`:`${e('one')} بدل تكرار الاسم.`}}})};
const CP4={fast:['fast','faster','+ er'],quiet:['quiet','quieter','+ er'],big:['big','bigger','حرف مكرر + er'],easy:['easy','easier','y → ier'],rel:['reliable','more reliable','طويلة: more']};
const LAB444C={title:'المقارنة',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة، وشاهد صيغة المقارنة.',
 controls:[{k:'a',label:'الصفة',opts:Object.keys(CP4).map(k=>[k,CP4[k][0]])}],
 out:({a})=>{const [x,y,r]=CP4[a];return{pieces:[['I need a','x',''],[y,'k',r],['one.','n','بدل الاسم']],say:`I need a ${y} one.`,why:`مراجعة: الصفة القصيرة + ${e('er')}، والطويلة مع ${e('more')}.`}}})};
const R41=N.rule({title:'صفات الأجهزة، و too و enough، والمقارنة، و so و because',ref:'ص 20–21، ص 92–93',
 intro:`حين تطلب جهازاً جديداً لمكتبك تشرح ما المشكلة في الجهاز القديم، ولماذا تحتاج غيره، وما الذي تريده بدلاً منه.`,
 parts:[
 {t:'صفات الأجهزة وأضدادها',short:'fast ↔ slow',old:[1],q:'ما ضد reliable؟',ref:'ص 20، ص 93',
  lead:`صفات نصف بها الأجهزة، ولكل منها ضد.`,
  points:[`${e('fast ↔ slow · light ↔ heavy · quiet ↔ noisy')}`,`${e('reliable ↔ unreliable · flexible ↔ inflexible · attractive ↔ unattractive / ugly')}`,`${e('simple / easy-to-use ↔ complicated · modern / up-to-date ↔ old-fashioned / out-of-date')}`],
  grid:{head:['إيجابية','سلبية'],rows:[['fast','slow'],['light','heavy'],['reliable','unreliable'],['simple / easy-to-use','complicated'],['modern / up-to-date','old-fashioned / out-of-date'],['quiet','noisy'],['flexible','inflexible'],['attractive','unattractive / ugly']]},
  pairs:[['unflexible','inflexible','الضد بـ in.'],['unnoisy','quiet','ضد noisy كلمة مختلفة.']],labs:[LAB444A]},
 {t:'too و enough، و so و because، و one',short:'too old · not fast enough',old:[2],q:'ما الفرق بين too slow و not fast enough؟',ref:'ص 20، ص 92',
  lead:`طريقتان لتقول إن الجهاز لا يناسب، ثم ${e('so')} للنتيجة و ${e('because')} للسبب.`,
  points:[`<b>too + صفة:</b> ${e("This PC is too old. · It's too slow.")}`,`<b>not + صفة + enough:</b> ${e("The screen isn't big enough. · It isn't fast enough.")}`,`<b>not + enough + اسم:</b> ${e("It doesn't have enough memory.")}`,`<b>so</b> (النتيجة): ${e('This PC is really old, so I need a new one.')}`,`<b>because</b> (السبب): ${e('I need a new PC because this one is too old.')}`,`${e('one / ones')} بدل تكرار الاسم: ${e('My phone is broken, so I need a new one. · Our PCs are too slow, so we need new ones.')}`],
  pairs:[["It isn't enough fast.","It isn't fast enough.",'enough بعد الصفة.'],["It's too modern. (مشكلة)","It's too old.",'too مع الصفة السلبية.'],['I need a new phone because this phone is old.','I need a new phone because this one is too old.','one بدل الاسم.']],labs:[LAB444B]},
 {t:'المقارنة',short:'faster · quieter · bigger',old:[3],q:'كيف تطلب طابعة أهدأ؟',ref:'ص 21',
  lead:`حين تطلب بديلاً تقارنه بالقديم: الصفة القصيرة + ${e('er')}، والطويلة مع ${e('more')} (مراجعة).`,
  points:[`${e("I'll check the cost of a faster machine.")}`,`${e('I can find out about bigger desks.')}`,`${e('Is it possible to get a quieter one?')}`],
  pairs:[['a more fast machine','a faster machine','قصيرة: er.'],['a reliabler printer','a more reliable printer','طويلة: more.']],labs:[LAB444C]}
 ]});
B.lesson({
 id:'u4-l1',unit:4,order:1,pages:'20–21',
 title:'Part A: Talking about office equipment — الحديث عن أجهزة المكتب',
 summary:'صفات الأجهزة وأضدادها (fast ↔ slow، reliable ↔ unreliable)، وشرح المشكلة بـ too و not … enough، والسبب والنتيجة بـ because و so، و one / ones بدل تكرار الاسم، والمقارنة عند طلب جهاز أفضل.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 20–21',html:`<p>تطلب أجهزة جديدة لمكتبك وتشرح السبب. ستتعلم:</p><ol><li>صفات الأجهزة وأضدادها.</li><li>${e('too · not … enough · so · because · one')}.</li><li>المقارنة عند طلب البديل.</li></ol>`},
  ...R41.theory,
  {h:'تمارين الكتاب',ref:'ص 20–21، ص 92–93',html:
   bk(1,'ص 20','طابق الصفات بأضدادها.',['1 e · 2 h · 3 a · 4 g','5 f · 6 c · 7 d · 8 b'])+
   bk(2,'ص 20','أكمل الشكويين، ثم كوّن جملاً عن الأجهزة واطلب ما تحتاجه بـ so و because.',['a1 old-fashioned · a2 modern','b (نماذج): The phone is too old. / It isn\'t modern enough. · The copier is too slow. / It isn\'t fast enough. · The printer is too noisy. / It isn\'t quiet enough. · The fax is unreliable. / It isn\'t reliable enough.'])+
   bk(3,'ص 21','استمع إلى مدير المكتب: ماذا يحتاجون؟ ولماذا؟ ثم أكمل المقارنة.',['1 a new photocopier · too slow · faster','2 new desks · big enough · bigger','3 a new printer · noisy · quieter','c: إجابات حرة.'])+
   bk(4,'ص 21','اكتب جهازاً يحتاجه مكتبك وأسبابه، ثم قرروا في المجموعة أيها تشترون.',null)+
   bk('Language file 1','ص 92','أكمل بـ too و enough، ثم صِل النصفين بـ so و because.',['1 Our Internet connection is too slow, so we need to find a new server. (c)',"2 We need a new photocopier because this one isn't fast enough. (f)",'3 I think we should get new printers because these ones are too noisy. (e)',"4 We need to ask for new desks because these ones aren't big enough. (b)",'5 … so we should ask for up-to-date ones. (a)',"6 I think we need to ask for more chairs because we haven't got enough seats for visitors. (d)"],'البند 5 غير واضح في نسخة الحقيبة الممسوحة.')+
   bk('Vocabulary file','ص 93','أكمل الجمل بالصفات.',['1 complicated · fast','2 old-fashioned (out-of-date) · modern (up-to-date)','3 heavy','4 light','5 quiet','6 flexible · attractive','7 reliable · slow','8 simple (easy-to-use)'])},
  {h:'الاستماع',ref:'ص 21',html:au('4A-3','ص 21 — التمرين 3','مدير المكتب يخبر مدير المرافق بما يحتاجه مكتبه.')}
 ],
 stations:[
  {intro:true},
  ...R41.stations,
  {recap:['fast ↔ slow · light ↔ heavy · reliable ↔ unreliable · simple ↔ complicated.',"too + صفة · not + صفة + enough · not enough + اسم.",'so للنتيجة، because للسبب.','a new one · new ones.','a faster / bigger / quieter one.']}
 ],
 lab:lab4a,
 examples:[
  {title:'مثال 1: too',ref:'ص 20',q:`<p>الطابعة تُحدث ضجيجاً كثيراً. اشتكِ بـ ${e('too')}.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الصفة السلبية: ${e('noisy')}.`},{t:`الخطوة 2: ${e('too')} قبلها.`},{t:`الخطوة 3: ${e("The printer is too noisy.")}`,final:true}]},
  {title:'مثال 2: enough',ref:'ص 92',q:`<p>الشاشة صغيرة. اشتكِ بـ ${e('enough')}.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الصفة الإيجابية: ${e('big')}.`},{t:`الخطوة 2: ${e("isn't")} + ${e('big')} + ${e('enough')}.`},{t:`الخطوة 3: ${e("The screen isn't big enough.")}`,final:true}]},
  {title:'مثال 3: because و one',ref:'ص 92',q:`<p>اطلب حاسوباً جديداً لأن القديم بطيء جداً.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('I need a new PC')}`},{t:`الخطوة 2: السبب: ${e('because')} + ${e('this one')} بدل تكرار PC.`},{t:`الخطوة 3: ${e('I need a new PC because this one is too slow.')}`,final:true}]}
 ],
 quiz:[
  {q:'The opposite of reliable:',o:['unreliable','inreliable','noisy','heavy'],c:0,e:'un.'},
  {q:'The opposite of flexible:',o:['inflexible','unflexible','complicated','ugly'],c:0,e:'in.'},
  {q:"The screen isn't ___.",o:['big enough','enough big','too big','big too'],c:0,e:'صفة + enough.'},
  {q:"It doesn't have ___ memory.",o:['enough','too','so','very enough'],c:0,e:'enough + اسم.'},
  {q:'This PC is old, ___ I need a new one.',o:['so','because','but','too'],c:0,e:'النتيجة: so.'},
  {q:'Is it possible to get a ___ one?',o:['quieter','more quiet','quietest','quiet more'],c:0,e:'المقارنة.'}
 ]
});

/* ========== 4B Talking about features and benefits ========== */
const PR4=[{n:'smartphone (from us)',f:[['a long-life battery','This means that you can use it all day.'],['a big screen','This enables you to read documents easily.'],['fast charging',"You don't need to wait long."],['a good camera',"You'll be able to take great photos."]]},{n:'office chair (from us)',f:[['adjustable height','This enables you to sit at the right height.'],['wheels','You can move it easily.'],['a soft back',"You'll be able to work for hours comfortably."],['a strong frame',"You don't need to buy a new one for years."]]}];
function lab4b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">المنتج</h3><p class="sub">منتجان من إعدادنا، مبنيان على التمرينين 1 و 3 ص 22–23. اختر المنتج ثم الميزة.</p>
  <div class="ph-row">${PR4.map((x,i)=>`<button type="button" class="btn" data-p="${i}">${x.n}</button>`).join('')}</div><div class="ph-row" id="fs"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الميزة والفائدة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الفرق بين الميزة (<span class="en">feature</span>) والفائدة (<span class="en">benefit</span>)؟</li><li>أي العبارات يأتي بعدها <span class="en">to</span>؟</li><li>اكتب ميزة وفائدة لحقيبتك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let p=0,f=0;
 const sh=()=>{el.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('pri',+b.dataset.p===p));const x=PR4[p];
  $('#fs').innerHTML=x.f.map((y,i)=>`<button type="button" class="btn${i===f?' pri':''}" data-f="${i}">${y[0]}</button>`).join('');$('#fs').querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=+b.dataset.f;sh()});
  const [ft,bn]=x.f[f];$('#o').innerHTML=vt([['Feature',`It has ${ft}.`],['Benefit',bn]],['','English'])+`<p class="sub">الميزة: جزء من المنتج. الفائدة: ماذا تعني للزبون.</p>`};
 el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{p=+b.dataset.p;f=0;sh()});sh();
}
const BN4={means:['This means that','you can use it all day.','+ جملة كاملة'],enables:['This enables you to','read documents easily.','+ to + الفعل'],able:["You'll be able to",'take great photos.','+ الفعل'],can:['You can','move it easily.','+ الفعل بلا to'],dont:["You don't need to",'buy extra batteries.','غير ضروري']};
const LAB444D={title:'عبارات الفائدة',w:(el,B)=>N.labB(el,B,{intro:'اختر العبارة، ولاحظ ما يأتي بعدها.',
 controls:[{k:'b',label:'العبارة',opts:Object.keys(BN4).map(k=>[k,BN4[k][0]])}],
 out:({b})=>{const [a,c,ar]=BN4[b];return{pieces:[[a,'k',ar],[c,'n','']],say:`${a} ${c}`,why:b==='means'?`${e('This means that')} + جملة فيها فاعل.`:b==='can'?`بعد ${e('can')} الفعل بلا ${e('to')}.`:`بعد ${e(a.split(' ').slice(-1)[0])} ${b==='enables'||b==='dont'?e('to')+' + ':''}الفعل.`}}})};
const R42=N.rule({title:'الميزات والفوائد، وعبارات شرح الفائدة',ref:'ص 22–23، ص 93',
 intro:`البائع الجيد لا يكتفي بوصف ميزات المنتج، بل يشرح لماذا تهم الزبون: الفائدة.`,
 parts:[
 {t:'الميزة والفائدة',short:'features · benefits',old:[1],q:'ما الفرق بين easy-to-use و You don\'t need to spend hours learning it؟',ref:'ص 22',
  lead:`${e('Features')} = الأجزاء المهمة في المنتج. ${e('Benefits')} = لماذا هذه الميزات مهمة للزبون.`,
  points:[`<b>ميزة:</b> ${e("It's easy to use.")} — <b>فائدة:</b> ${e("You don't need to spend hours learning how to use it.")}`,`<b>ميزة:</b> ${e("It's reliable.")} — <b>فائدة:</b> ${e("It won't stop working in the middle of your presentation.")}`,`<b>ميزة:</b> ${e("It's fast.")} — <b>فائدة:</b> ${e("Your audience won't have to wait for each image.")}`],
  grid:{head:['Feature','Benefit'],rows:[['up-to-date','You can use it with most modern computers.'],['flexible','You can easily change things.'],['attractive',"You'll create a good impression."],['reliable',"It won't stop working."]]},
  pairs:[['Benefit: It has wheels.','Benefit: You can move it easily.','الفائدة ما يكسبه الزبون.']]},
 {t:'عبارات شرح الفائدة',short:'This means … · This enables you to …',old:[2,3],q:'ما الذي يأتي بعد This enables you؟',ref:'ص 22، ص 93',
  lead:`عبارات ثابتة تربط الميزة بالفائدة.`,
  points:[`${e('This means that it is easy to read.')} (+ جملة)`,`${e('This enables you to read it easily.')} (+ ${e('to')} + الفعل)`,`${e('You will be able to / You can use the product quickly.')}`,`${e("You don't need to / don't have to buy extra batteries.")}`],
  pairs:[['This enables you read it.','This enables you to read it.','enables you to.'],['You will able to copy quickly.','You will be able to copy quickly.','be able to.'],["You don't need buy cassettes.","You don't need to buy cassettes.","don't need to."],['You can to send long faxes.','You can send long faxes.','can بلا to.']],labs:[LAB444D]}
 ]});
B.lesson({
 id:'u4-l2',unit:4,order:2,pages:'22–23',
 title:'Part B: Talking about features and benefits — الميزات والفوائد',
 summary:'الفرق بين ميزات المنتج (features) وفوائده للزبون (benefits)، وعبارات شرح الفائدة (This means that … This enables you to … You\'ll be able to … You don\'t need to …)، واختيار أجهزة العرض المناسبة لكل شخص.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 22–23',html:`<p>تشرح لزبون لماذا المنتج مفيد له. ستتعلم:</p><ol><li>الفرق بين الميزة والفائدة.</li><li>عبارات شرح الفائدة.</li><li>اختيار المنتج المناسب لحاجة الشخص.</li></ol>`},
  ...R42.theory,
  {h:'تمارين الكتاب',ref:'ص 22–23، ص 93',html:
   bk(1,'ص 22','استمع إلى المدرّب: أكمل التعريفين، ورتّب الميزات، وطابقها بالفوائد.',['a1 important parts of','a2 the features are important for','b: b 1 · f 2 · c 3 · a 4 · e 5 · d 6','c: 1 f · 2 d · 3 e · 4 b · 5 a · 6 c'])+
   bk(2,'ص 22','أكمل جمل المدرّب، ثم استمع وتحقق.',["1 means · 'll be able to","2 don't need to",'3 enables you to','4 can easily change',"5 don't have to"])+
   bk(3,'ص 22–23','اقرأ ما يريده أربعة أشخاص، واختر لكل منهم جهاز العرض الأنسب.',['1 Shane Hooper: portable overhead projector (خفيف، ويحضّر الشرائح مسبقاً بلا حاسوب)','2 Paola Mirelli: presentation software (جداول ورسوم، وتحب التقنية، ولديها سيارة)','3 Eva Lozowski: mobile flipchart (تكتب أفكار المشاركين وتحتفظ بها، وله عجلات)','4 Joe Matthews: dry-wipe whiteboard (يكتب ولا يحتاج سجلاً)'],'إجابات من قراءتنا؛ قد يُقبل غيرها مع التعليل.')+
   bk(4,'ص 23','ما عيوب كل جهاز؟ وأيها تفضّل؟ ناقشوا.',null)+
   bk('Language file 2','ص 93','صحّح فوائد جهاز الهاتف والفاكس، ثم طابقها بالميزات.',['a1 This means faster transmission. (means)',"a2 You don't need to buy cassettes.",'a3 You will be able to copy documents quickly.','a4 This enables you to dial numbers quickly …',"a5 You don't have to use fax paper rolls.",'a6 You can send long faxes automatically.','b: a 5 · b 1 · c 4 · d 6 · e 2 · f 3'])},
  {h:'الاستماع',ref:'ص 22',html:au('4B-1','ص 22 — التمرين 1','بداية الدورة التدريبية: الميزات والفوائد.')+au('4B-2','ص 22 — التمرين 2','المدرّب يشرح فوائد برنامج العروض.')}
 ],
 stations:[
  {intro:true},
  ...R42.stations,
  {recap:['Feature = جزء مهم من المنتج · Benefit = ماذا يعني للزبون.','This means that + جملة.','This enables you to + الفعل.',"You'll be able to / You can + الفعل.","You don't need to / don't have to + الفعل."]}
 ],
 lab:lab4b,
 examples:[
  {title:'مثال 1: من ميزة إلى فائدة',ref:'ص 22',q:`<p>الميزة: ${e('The laptop is very light.')} اكتب الفائدة.</p>`,given:[],solve:()=>[{t:'الخطوة 1: ما الذي يكسبه الزبون؟ يحمله بسهولة.'},{t:`الخطوة 2: ${e('This enables you to')} + ${e('carry it')}`},{t:`الخطوة 3: ${e('This enables you to carry it easily.')}`,final:true}]},
  {title:'مثال 2: غير ضروري',ref:'ص 93',q:`<p>كل الكوابل مع الجهاز. اكتب الفائدة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("You don't need to")}`},{t:`الخطوة 2: + ${e('buy extra cables')}`},{t:`الخطوة 3: ${e("You don't need to buy extra cables.")}`,final:true}]},
  {title:'مثال 3: التصحيح',ref:'ص 93',q:`<p>صحّح: ${e('You will able to send emails quickly.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ينقص ${e('be')}.`},{t:`الخطوة 2: ${e('will be able to')}`},{t:`الخطوة 3: ${e('You will be able to send emails quickly.')}`,final:true}]}
 ],
 quiz:[
  {q:'Features are …',o:['the important parts of a product','why the product is good for you','the price','the customers'],c:0,e:'feature.'},
  {q:'This enables you ___ it easily.',o:['to carry','carry','carrying','can carry'],c:0,e:'enables you to.'},
  {q:"You don't need ___ extra batteries.",o:['to buy','buy','buying','bought'],c:0,e:"don't need to."},
  {q:'You will ___ able to copy quickly.',o:['be','—','can','have'],c:0,e:'will be able to.'},
  {q:'You can ___ long faxes.',o:['send','to send','sending','sends'],c:0,e:'can + الفعل.'},
  {q:'Benefit of "reliable":',o:["It won't stop working.",'It looks nice.','It is cheap.','It is small.'],c:0,e:'reliable.'}
 ]
});
})(PLCBOOK);

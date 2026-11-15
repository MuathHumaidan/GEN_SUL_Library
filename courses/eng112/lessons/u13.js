/* الوحدة 13 — Entertaining: Part A Recommending (ص 62–63) · Part B Inviting and responding (ص 64–65)
   + Help files ص 109–110. الكتاب: Business Goals 1.
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 13A Recommending ========== */
/* قائمة مطعم من إعدادنا */
const MENU=[{n:'lentil soup',k:['soup','vegetarian'],how:'boiled',t:'savoury',d:"It's made with lentils, onion and lemon."},
 {n:'grilled chicken',k:['chicken'],how:'grilled',t:'savoury',d:"It's grilled with garlic and served with rice."},
 {n:'fried prawns',k:['seafood','fried'],how:'fried',t:'salty',d:"They're fried in a light batter."},
 {n:'lamb kabsa',k:['red meat','spicy'],how:'cooked slowly',t:'spicy',d:"It's made with rice, lamb and spices."},
 {n:'steamed fish',k:['fish'],how:'steamed',t:'savoury',d:"It's steamed with ginger and lemon."},
 {n:'vegetable curry',k:['vegetarian','spicy'],how:'cooked slowly',t:'hot',d:"It's made with potatoes, peas and chilli."},
 {n:'date cake',k:['sweet'],how:'baked',t:'sweet',d:"It's baked with dates and nuts."},
 {n:'fruit salad',k:['sweet','fruit','vegetarian'],how:'fresh',t:'sweet',d:"It's made with fresh fruit."}];
const DISLIKE=[['red meat',"I'm afraid I don't eat red meat."],['seafood',"I'm sorry. I don't like seafood much."],['spicy',"I'm sorry. I don't like spicy food."],['sweet',"I'm sorry. I don't eat sweet food."]];
function lab13a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الزائر</h3><p class="sub">قائمة مطعم من إعدادنا، مبنية على التمرينين 1 و 2 ص 62. اختر ما لا يأكله الزائر، ثم اختر طبقاً توصي به.</p>
  <label class="sub">لا يأكل:</label><div class="ph-row" id="dl">${DISLIKE.map((d,i)=>`<button type="button" class="btn" data-d="${i}">${d[0]}</button>`).join('')}</div>
  <label class="sub">توصي بـ:</label><div class="ph-row" id="mn">${MENU.map((m,i)=>`<button type="button" class="btn" data-m="${i}">${m.n}</button>`).join('')}</div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div><div id="w"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>الزائر لا يأكل اللحم الأحمر: أوصِ بطبق يقبله.</li><li>ما الفرق في الرد بين القبول والرفض؟</li><li>كيف يصف المضيف الطبق؟ أي كلمة تقول كيف طُبخ؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let d=0,m=1;
 const sh=()=>{el.querySelectorAll('[data-d]').forEach(b=>b.classList.toggle('pri',+b.dataset.d===d));el.querySelectorAll('[data-m]').forEach(b=>b.classList.toggle('pri',+b.dataset.m===m));
  const x=MENU[m],bad=x.k.includes(DISLIKE[d][0]);
  $('#o').innerHTML=dl([['Host','Is there anything you don\'t eat?'],['Visitor',DISLIKE[d][1]],['Host',`I recommend the ${x.n}. ${x.d}`],['Visitor',bad?DISLIKE[d][1]+' Can you suggest something else?':"Sounds delicious. I'll try it."]]);
  $('#w').innerHTML=`<p class="sub">${bad?'<b style="color:var(--red)">الزائر رفض:</b> هذا الطبق فيه ما لا يأكله. اختر طبقاً آخر.':'<b style="color:var(--green,#2e8b57)">قَبِل الزائر.</b>'} طريقة الطبخ: ${e(x.how)}، والطعم: ${e(x.t)}.</p>`};
 el.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{d=+b.dataset.d;sh()});el.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=+b.dataset.m;sh()});sh();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 13 ===== */
const RC13={rec:['I recommend','the grilled chicken.','أوصي بـ'],sug:['I suggest','the lentil soup.','أقترح'],sh:['You should try','the steamed fish.','عليك أن تجرّب'],good:['The kabsa is','really good here.','الطبق جيد هنا']};
const RS13={yes1:["OK, I'll have that.",'قبول'],yes2:["Sounds delicious. I'll try it.",'قبول'],no1:["I'm sorry. I don't like fish much.",'رفض بلطف'],no2:["I'm afraid I don't eat red meat.",'رفض بلطف']};
const LAB1313A={title:'أوصِ وردّ',w:(el,B)=>N.labB(el,B,{intro:'اختر طريقة التوصية، ثم الرد.',
 controls:[{k:'r',label:'التوصية',opts:Object.keys(RC13).map(k=>[k,RC13[k][0]])},{k:'s',label:'الرد',opts:Object.keys(RS13).map(k=>[k,RS13[k][0]])}],
 out:({r,s})=>{const [a,b,ar]=RC13[r],[x,t]=RS13[s];return{pieces:[[a,'k',ar],[b,'n',''],[x,s.startsWith('yes')?'q':'r',t]],say:`${a} ${b} ${x}`,why:s.startsWith('yes')?`نقبل بـ ${e("I'll have that")} أو ${e("I'll try it")}.`:`نرفض بلطف: نبدأ بـ ${e("I'm sorry")} أو ${e("I'm afraid")}، ثم السبب.`}}})};
const CK13={g:['grill','grilled','cooked'],f:['fry','fried','cooked'],b:['bake','baked','cooked'],s:['steam','steamed','cooked'],bo:['boil','boiled','cooked'],sp:['','spicy','taste'],sw:['','sweet','taste'],sa:['','salty','taste']};
const LAB1313B={title:'كيف طُبخ؟ وما طعمه؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الكلمة، وشاهد هل تصف طريقة الطبخ أم الطعم.',
 controls:[{k:'w',label:'الكلمة',opts:Object.keys(CK13).map(k=>[k,CK13[k][1]])}],
 out:({w})=>{const [v,a,t]=CK13[w];return t==='cooked'?{pieces:[['The fish is','x',''],[a,'k','طريقة الطبخ'],['with lemon.','n','']],say:`The fish is ${a} with lemon.`,why:`${e(a)} من الفعل ${e(v)}: تصف كيف طُبخ الطعام، وتأتي بعد ${e('is')} (مبني للمجهول).`}
  :{pieces:[['It tastes','x',''],[a+'.','q','الطعم']],say:`It tastes ${a}.`,why:`${e(a)} تصف الطعم: ${e('It tastes …')} أو ${e("It's …")}.`}}})};
const PV13={make:['makes','is made','made'],use:['uses','are used','used'],eat:['eat','is eaten','eaten'],fry:['fries','is fried','fried'],serve:['serve','is served','served']};
const LAB1313C={title:'المبني للمجهول في وصف الطعام',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، وشاهد الجملة العادية ثم المبنية للمجهول.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(PV13).map(k=>[k,k])},{k:'f',label:'الجملة',opts:[['act','الفاعل مهم'],['pas','الطعام مهم']]}],
 out:({v,f})=>{const X={make:['The chef','the soup','from lentils.','The soup'],use:['The cook','only fresh vegetables','.','Only fresh vegetables'],eat:['People','this dish','with rice.','This dish'],fry:['The cook','the chicken','with garlic.','The chicken'],serve:['We','the tea','hot.','The tea']}[v],[a,p,pp]=PV13[v];
  return f==='act'?{pieces:[[X[0],'n','الفاعل'],[a,'k','الفعل'],[X[1],'x','المفعول'],[X[2],'x','']],say:`${X[0]} ${a} ${X[1]} ${X[2]}`.replace(' .','.'),why:'جملة عادية: نبدأ بمن يفعل.'}
  :{pieces:[[X[3],'n','الطعام أولاً'],[p,'k','be + التصريف الثالث'],[X[2],'x','']],say:`${X[3]} ${p} ${X[2]}`.replace(' .','.'),why:`المبني للمجهول: ${e('be')} + ${e(pp)}. نستعمله حين يكون الطعام أهم ممن طبخه.`}}})};
const R131=N.rule({title:'التوصية بطعام والرد عليها، ووصف الطبق',ref:'ص 62–63، ص 109–110',
 intro:`حين تستضيف زائراً في مطعم تسأله عما يحب، وتوصي بطبق، وتصفه: مما صُنع، وكيف طُبخ، وما طعمه.`,
 parts:[
 {t:'التوصية والرد',short:'I recommend …',old:[1,2],q:'لماذا لا نقول للزائر Eat the salad؟',ref:'ص 62، ص 109',
  lead:`التوصية اقتراح لطيف، لا أمر. فلا نستعمل صيغة الأمر (${e('Eat the salad.')}) ولا ${e('You will have …')}.`,
  points:[`<b>نوصي:</b> ${e('I recommend the steak. · I suggest the curry. · You should try the shrimp.')}`,`<b>أو نصف الطبق:</b> ${e('The chicken is (really) good / nice here.')}`,`<b>نقبل:</b> ${e("OK, I'll have that. · Sounds delicious. I'll try it.")}`,`<b>نرفض بلطف:</b> ${e("I'm sorry, I don't like fish much. · I'm afraid I don't eat red meat.")}`,`${e("It's up to you.")} = القرار لك (ليست توصية).`],
  grid:{head:['','صحيح','غير مناسب'],rows:[['توصية','I recommend the soup.','Eat the soup.'],['توصية','You should try the fish.','You will have the fish.'],['رفض',"I'm afraid I don't eat meat.",'No. I hate meat.']]},
  pairs:[['Eat the salad.','You should try the salad.','لا أمر مع الضيف.'],['You will have the noodles.','I recommend the noodles.','will هنا تبدو أمراً.'],['No, I don\'t want.',"I'm sorry. I don't like fish much.",'الرفض بلطف مع سبب.']],
  art:art(`<g data-tip="المضيف يوصي"><rect x="20" y="40" width="320" height="56" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,74,'I recommend the grilled fish.',{fs:14,w:700})}</g><g data-tip="قبول"><rect x="20" y="120" width="150" height="56" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(95,154,"I'll try it.",{fs:13,w:700})}</g><g data-tip="رفض بلطف"><rect x="190" y="120" width="150" height="56" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(265,148,"I'm sorry. I don't",{fs:12})}${TL(265,166,'like fish much.',{fs:12})}</g>`,'recommend'),cap:'توصية ثم قبول أو رفض بلطف. مرّر المؤشر.',labs:[LAB1313A]},
 {t:'وصف الطبق: الطبخ والطعم والمبني للمجهول',short:'grilled · spicy · is made',old:[3,4],q:'كيف تقول «تُصنع الشوربة من العدس»؟',ref:'ص 63، ص 109–110',
  lead:`نصف الطبق بثلاثة أسئلة: مما صُنع؟ كيف طُبخ؟ ما طعمه؟ وفي وصف الطعام يكثر المبني للمجهول لأن الطعام أهم ممن طبخه.`,
  points:[`<b>طريقة الطبخ:</b> ${e('boiled · steamed · fried · grilled · baked · roasted')}`,`<b>الطعم:</b> ${e('sweet · sour · salty · spicy / hot · savoury')}`,`${e('boiled')} يُطبخ في الماء، و ${e('steamed')} فوق الماء (بالبخار).`,`<b>المبني للمجهول:</b> ${e('be')} + التصريف الثالث: ${e("It's made with lentils. · It's eaten with rice.")}`,`ومن صنعه (إن أردنا): ${e('by')}: ${e('The soup is made by the chef.')}`,`<b>أسئلة الوصف:</b> ${e("What's it called? · What's in it? · How's it cooked? · How does it taste?")}`],
  grid:{head:['','كيف طُبخ','الطعم'],rows:[['أمثلة','grilled · fried · baked','spicy · sweet · salty'],['جملة',"It's grilled with garlic.",'It tastes a bit spicy.']]},
  pairs:[['The soup makes from lentils.','The soup is made from lentils.','الطعام لا يصنع نفسه: is made.'],['Boiled vegetables are cooked over water.','Steamed vegetables are cooked over water.','فوق الماء: steamed.'],['Cakes are savoury.','Cakes are sweet.','الكعك حلو.']],labs:[LAB1313B,LAB1313C]}
 ]});
B.lesson({
 id:'u13-l1',unit:13,order:1,pages:'62–63',
 title:'Part A: Recommending — التوصية',
 summary:'التوصية بطبق في مطعم (I recommend …، You should try …، I suggest …) والرد عليها بالقبول أو الرفض بلطف، وكلمات طريقة الطبخ والطعم (grilled، steamed، spicy، savoury)، ووصف الطبق بالمبني للمجهول (It\'s made with …).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 62–63',html:`<p>تستضيف زائراً في مطعم وتساعده على الاختيار. ستتعلم:</p><ol><li>كيف توصي بطبق، وكيف تقبل أو ترفض بلطف.</li><li>كلمات طريقة الطبخ والطعم.</li><li>وصف الطبق بالمبني للمجهول.</li></ol>`},
  ...R131.theory,
  {h:'تمارين الكتاب',ref:'ص 62–63، ص 109–110',html:
   bk(1,'ص 62','ضع علامة على الطرق الصحيحة للتوصية بطعام، ثم تبادلوا التوصية والرد.',["✔ I recommend the steak. · The chicken is good here. · You should try the shrimp. · I suggest the curry.","✘ Eat the salad. · You will have the noodles. · It's up to you."])+
   bk(2,'ص 62','استمع: ما الذي تحب Helen أكله وما الذي لا تحبه؟ ثم أكمل الجمل وضع علامة على الاقتراحات التي أحبتها.',['a: ✔ chicken · fried food · seafood · spicy food (not too spicy) · soup · rice · fish · fruit — ✘ red meat — لم تُذكر: vegetarian food · salad · sweet food','b1 soup ✔','b2 chicken ✔','b3 beef ✘','b4 (a whole) fish / red snapper ✔'])+
   bk(3,'ص 63','أي الكلمات تصف طريقة الطبخ وأيها تصف الطعم؟',['how things are cooked: steamed · boiled · fried · baked · grilled · roasted','how things taste: sweet · spicy · hot · sour · salty · savoury'])+
   bk(4,'ص 63','اختر طبقاً من بلدك واكتب وصفه بالأسئلة الأربعة، ثم قدّمه للصف.',null,'إجابات حرة.')+
   bk(5,'ص 63','نشاط ثنائي في مطعم: المضيف يسأل ويوصي، والزائر يسأل ويقبل أو يرفض. ثم تبادلا الأدوار.',null)+
   bk('Language file 1','ص 109','أكمل الحوارات.',["1 recommend (أو suggest)","2 Sounds","3 should","4 have","5 like (أو eat)","6 recommend (أو suggest)"])+
   bk('Language file 2','ص 109','أعد كتابة الجمل بالمبني للمجهول.',["1 This dish is called 'paella'.",'2 Only the best ingredients are used (by the cook).','3 A lot of pasta is eaten in Italy.','4 White wine is served cold.','5 A lot of spices are used in Indian cooking.','6 The chicken is fried with ginger (by the cook).','7 These dishes are cooked slowly.','8 A lot of cold drinks are sold on hot days.'])+
   bk('Vocabulary file','ص 110','اختر الكلمة الأنسب.',['1 spicy','2 Boiled · steamed','3 sweet','4 sour','5 baked','6 salty'])},
  {h:'الاستماع',ref:'ص 62',html:au('13A-2','ص 62 — التمرين 2','Helen في مطعم تايلندي مع زميلتها.')}
 ],
 stations:[
  {intro:true},
  ...R131.stations,
  {recap:['I recommend … · I suggest … · You should try … · The … is good here.',"OK, I'll have that. · Sounds delicious. I'll try it.","I'm sorry, I don't like … much. · I'm afraid I don't eat …",'الطبخ: boiled · steamed · fried · grilled · baked · roasted · الطعم: sweet · sour · salty · spicy · savoury.',"المبني للمجهول: It's made with … · It's eaten with …"]}
 ],
 lab:lab13a,
 examples:[
  {title:'مثال 1: توصية',ref:'ص 62',q:`<p>أوصِ زائرك بالسمك المشوي.</p>`,given:[],solve:()=>[{t:`الخطوة 1: لا أمر؛ نستعمل ${e('I recommend')} أو ${e('You should try')}.`},{t:`الخطوة 2: ${e('the grilled fish')}`},{t:`الخطوة 3: ${e('I recommend the grilled fish.')}`,final:true}]},
  {title:'مثال 2: رفض بلطف',ref:'ص 62',q:`<p>أنت لا تأكل الطعام الحار. ردّ على: ${e('You should try the curry.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e("I'm sorry")}.`},{t:`الخطوة 2: السبب: ${e("I don't like spicy food much.")}`},{t:`الخطوة 3: ${e("I'm sorry. I don't like spicy food much.")}`,final:true}]},
  {title:'مثال 3: المبني للمجهول',ref:'ص 109',q:`<p>حوّل: ${e('The cook makes the soup from lentils.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بالطعام: ${e('The soup')}.`},{t:`الخطوة 2: ${e('is')} + ${e('made')}.`},{t:`الخطوة 3: ${e('The soup is made from lentils.')}`,final:true}]}
 ],
 quiz:[
  {q:'Correct way to recommend:',o:['You should try the fish.','Eat the fish.','You will have the fish.',"It's up to you."],c:0,e:'توصية لطيفة.'},
  {q:"I'm ___ I don't eat red meat.",o:['afraid','sorry to','scared','fear'],c:0,e:"I'm afraid."},
  {q:'Vegetables cooked over water are ___.',o:['steamed','boiled','fried','baked'],c:0,e:'steamed.'},
  {q:'Cakes and biscuits are ___.',o:['sweet','salty','sour','savoury'],c:0,e:'sweet.'},
  {q:'The soup ___ from lentils.',o:['is made','makes','made','is make'],c:0,e:'المبني للمجهول.'},
  {q:'A word for how things taste:',o:['spicy','grilled','roasted','boiled'],c:0,e:'الطعم.'}
 ]
});

/* ========== 13B Inviting and responding ========== */
const ACT=[['go to a restaurant','have dinner with us tonight'],['go to the museum','visit the National Museum tomorrow'],['watch a match','watch the football match on Saturday'],['go to the countryside','drive to the mountains on Friday'],['go shopping','go shopping in the old market']];
const ANS={yes:[["Yes, I'd love to.",'What time shall we meet?'],['Yes, that would be nice.','Where shall we meet?'],["Yes, I'd really like that.",'How shall we get there?']],no:[["… Oh, I'm sorry.","I'm meeting a relative this evening."],['… Oh, thank you, but',"I'm very tired after my flight."],["… Oh, I'm sorry.",'I have a lot of work to do.']]};
function lab13b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الدعوة</h3><p class="sub">مبني على التمرينين 2 و 3 ص 64–65. اختر النشاط، ثم القبول أو الرفض.</p>
  <div class="ph-row">${ACT.map((a,i)=>`<button type="button" class="btn" data-a="${i}">${a[0]}</button>`).join('')}</div>
  <div class="ph-row"><button type="button" class="btn" data-r="yes">يقبل</button><button type="button" class="btn" data-r="no">يرفض</button><button type="button" class="btn" id="nx">جملة أخرى</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div><div id="t"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ماذا يأتي بعد القبول؟ وماذا يأتي بعد الرفض؟</li><li>لماذا لا نقول <span class="en">No, I'm not hungry.</span>؟</li><li>اختر «يرفض»: ماذا يقول الداعي في آخر الحوار؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let a=0,r='yes',k=0;
 const sh=()=>{el.querySelectorAll('[data-a]').forEach(b=>b.classList.toggle('pri',+b.dataset.a===a));el.querySelectorAll('[data-r]').forEach(b=>b.classList.toggle('pri',b.dataset.r===r));
  const [x,y]=ANS[r][k%3];
  $('#o').innerHTML=dl([['A',`Would you like to ${ACT[a][1]}?`],['B',`${x} ${y}`],['A',r==='yes'?"Great. I'll call you later.":'No problem. Maybe next time.']]);
  $('#t').innerHTML=`<p class="sub">${r==='yes'?'قبول ثم <b>سؤال</b> عن الوقت أو المكان أو الطريقة.':'توقف قصير، ثم <b>اعتذار</b> و<b>سبب</b>.'}</p>`};
 el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{a=+b.dataset.a;sh()});el.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{r=b.dataset.r;sh()});$('#nx').onclick=()=>{k++;sh()};sh();
}
const LAB1313D={title:'Would you like to …?',w:(el,B)=>N.labB(el,B,{intro:'اختر النشاط والرد.',
 controls:[{k:'a',label:'الدعوة',opts:ACT.map((x,i)=>[String(i),x[0]])},{k:'r',label:'الرد',opts:[['y','قبول + سؤال'],['n','اعتذار + سبب']]}],
 out:({a,r})=>{const q=`Would you like to ${ACT[+a][1]}?`;return r==='y'?{pieces:[['Would you like to','k','للدعوة'],[ACT[+a][1]+'?','n','الفعل كما هو'],["Yes, I'd love to.",'q','قبول'],['What time?','q','سؤال']],say:`${q} Yes, I'd love to. What time?`,why:`بعد ${e('Would you like to')} الفعل كما هو. والقبول يتبعه سؤال.`}
  :{pieces:[['Would you like to','k','للدعوة'],[ACT[+a][1]+'?','n',''],["Oh, I'm sorry.",'r','اعتذار'],["I'm meeting a friend.",'x','سبب']],say:`${q} Oh, I'm sorry. I'm meeting a friend.`,why:'الرفض المهذب: توقف قصير، ثم اعتذار، ثم سبب.'}}})};
const LAB1313E={title:'رسمي أم غير رسمي؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الجزء من الرسالة ونوعها.',
 controls:[{k:'p',label:'الجزء',opts:[['o','البداية'],['t','الشكر'],['r','الرفض'],['c','الختام']]},{k:'f',label:'الرسالة',opts:[['inf','لصديق'],['for','لشركة']]}],
 out:({p,f})=>{const X={o:['Dear Lucy,','Dear Ms Carter,'],t:['It was lovely to hear from you, and thanks for the invitation.','Thank you for your kind invitation to the opening of your new office.'],r:["I'm sorry, but I'm staying with my brother.",'I am away on business at that time, and so I am sorry, but I cannot attend.'],c:['Best wishes,','Yours sincerely,']}[p][f==='inf'?0:1];
  return{pieces:[[X,f==='inf'?'q':'k',f==='inf'?'غير رسمي':'رسمي']],say:X,why:f==='inf'?`مع الصديق: الاسم الأول، واختصارات مثل ${e("I'm")}، و ${e('Best wishes')}.`:`مع الشركة: اللقب واسم العائلة، وبلا اختصارات (${e('I am')})، و ${e('Yours sincerely')}.`}}})};
const R132=N.rule({title:'الدعوة والقبول والرفض، والرد المكتوب الرسمي وغير الرسمي',ref:'ص 64–65، ص 110',
 intro:`ندعو الزائر بـ ${e('Would you like to …?')}، ونقبل ثم نسأل، أو نرفض بلطف ثم نذكر السبب. وفي الرسائل يختلف الرد إلى صديق عن الرد إلى شركة.`,
 parts:[
 {t:'الدعوة والقبول والرفض',short:'Would you like to …?',old:[2,3],q:'ما الخطأ في الرد No, I\'m not hungry؟',ref:'ص 64، ص 110',
  lead:`الدعوة المهذبة: ${e('Would you like to')} + الفعل كما هو. والرد قسمان: القبول ثم سؤال، أو الرفض ثم سبب.`,
  points:[`<b>الدعوة:</b> ${e('Would you like to go to dinner? · Would you like to see a football match?')}`,`<b>القبول:</b> ${e("Yes, I'd love to. · Yes, that would be nice. · Yes, I'd (really) like that.")}`,`<b>ثم سؤال:</b> ${e('What time shall we meet? · Where shall we meet? · How shall we get there?')}`,`<b>الرفض:</b> نتوقف قليلاً ثم: ${e("… Oh, I'm sorry, … · … Oh, thank you, but …")}`,`<b>ثم السبب:</b> ${e("I have another appointment. · I'm very tired. · I have a lot of work to do.")}`,`${e("No, I'm not hungry.")} رد غير مهذب: رفض مباشر بلا شكر ولا اعتذار.`],
  grid:{head:['','الرد','ثم'],rows:[['قبول',"Yes, I'd love to.",'What time shall we meet?'],['قبول','Yes, that would be nice.','Where shall we meet?'],['رفض',"Oh, I'm sorry.","I'm meeting a relative."],['رفض','Oh, thank you, but …',"I'm very tired."]]},
  pairs:[['Would you like have dinner?','Would you like to have dinner?','Would you like to + الفعل.'],['Would you liking to come?','Would you like to come?','like بلا ing.'],["No, I'm not hungry.","Oh, thank you, but I'm very tired.",'الرفض بشكر وسبب.']],
  art:art(`<g data-tip="الدعوة"><rect x="90" y="20" width="180" height="46" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,48,'Would you like to …?',{fs:13,w:700})}</g><path d="M150 66 L90 110 M210 66 L270 110" stroke="${C.ink}" stroke-width="2"/><g data-tip="قبول ثم سؤال"><rect x="10" y="110" width="160" height="80" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(90,138,"Yes, I'd love to.",{fs:12,w:700})}${TL(90,166,'What time?',{fs:12})}</g><g data-tip="اعتذار ثم سبب"><rect x="190" y="110" width="160" height="80" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(270,138,"Oh, I'm sorry.",{fs:12,w:700})}${TL(270,166,"I'm very tired.",{fs:12})}</g>`,'invite'),cap:'الدعوة ثم القبول أو الرفض. مرّر المؤشر.',labs:[LAB1313D]},
 {t:'الرد المكتوب: رسمي وغير رسمي',short:'Dear Lucia · Dear Ms Irvine',old:[5],q:'كيف تختلف رسالة إلى صديق عن رسالة إلى شركة؟',ref:'ص 65',
  lead:`الرد على دعوة مكتوبة له أجزاء ثابتة: التحية، والشكر، والرد مع السبب، وكلمة طيبة، والختام. والكلمات تتغير حسب الرسمية.`,
  points:[`<b>لصديق:</b> ${e('Dear Lucia, · It was lovely to hear from you · thanks for … · Let me know … · Best wishes, Judy')}`,`<b>لشركة:</b> ${e('Dear Ms Irvine, · Thank you for your kind invitation · I am sorry, but I cannot attend. · Yours sincerely, Judy Jackson')}`,`في الرسمي لا نختصر: ${e('I am · I cannot')}، ونوقّع بالاسم كاملاً.`],
  pairs:[['Dear Katy Irvine, … Best wishes,','Dear Ms Irvine, … Yours sincerely,','الرسمي: اللقب + اسم العائلة، و Yours sincerely.']],labs:[LAB1313E]}
 ]});
B.lesson({
 id:'u13-l2',unit:13,order:2,pages:'64–65',
 title:'Part B: Inviting and responding — الدعوة والرد عليها',
 summary:'دعوة زائر إلى نشاط (Would you like to …?)، والقبول ثم سؤال (Yes, I\'d love to. What time shall we meet?)، والرفض المهذب ثم سبب (Oh, I\'m sorry. I\'m very tired.)، والرد المكتوب على دعوة صديق ودعوة شركة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 64–65',html:`<p>تدعو زائراً إلى نشاط وترد على الدعوات. ستتعلم:</p><ol><li>${e('Would you like to …?')}</li><li>القبول مع سؤال، والرفض المهذب مع سبب.</li><li>الرد المكتوب الرسمي وغير الرسمي.</li></ol>`},
  ...R132.theory,
  {h:'تمارين الكتاب',ref:'ص 64–65، ص 110',html:
   bk(1,'ص 64','ماذا تحب أن تفعل في زيارة لبلد آخر؟ أضف أفكاراً وقارن مع زميلك.',null)+
   bk(2,'ص 64','اختر الصيغة الصحيحة للدعوة، وحدد الرد غير المهذب، ثم صنّف الردود الأربعة.',['a: 3 Would you like to',"b: 3 No, I'm not hungry. (رفض مباشر بلا شكر ولا اعتذار)","c: Accept: Yes, I'd love to. · Yes, that would be nice. — Don't accept: Oh, I'm sorry. I can't. · Oh, thank you, but …"])+
   bk(3,'ص 65','استمع إلى أربع دعوات: لماذا الدعوة؟ هل قُبلت؟ ثم أكمل العمود الأخير.',["1 Dinner · Yes · What time?","2 the theatre · No · I'm meeting some old friends.","3 shopping · No · I'm very tired.","4 a football match · Yes · Who's playing?"])+
   bk(4,'ص 65','ادعُ زملاءك إلى أنشطة من قائمتك في التمرين 1.',null)+
   bk(5,'ص 65','اقرأ الدعوتين، ثم رتّب أجزاء رد Judy على كل منهما، واكتب رداً يقبل دعوة Lucia.',['a: الرسالة الإلكترونية من Lucia (صديقة، غير رسمية) · البطاقة من Trimstein Limited (رسمية)','b: إلى Lucia: 1 · 3 · 5 · 8 · 10 · 12 · 14 · 16 · 17','b: إلى Trimstein: 2 · 4 · 6 · 7 · 9 · 11 · 13 · 15 · 18','c: إجابة حرة.'])+
   bk('Language file 3','ص 110','اكتب الحوارات كاملة من الكلمات.',["1 Would you like to go shopping? — Yes, I'd love to. Where shall we meet?","2 Would you like to see the city? — Oh, I'm sorry, I'm tired. I need to sleep.","3 Would you like to watch the match? — Yes, I'd like that. What time does it start?","4 Would you like to go sightseeing? — Oh, thank you, but I'm meeting friends this afternoon.","5 Would you like to meet our director? — Yes, I'd like that. When can we do that?","6 Would you like to visit some museums? — Oh, thank you, but I have to make some calls."])},
  {h:'الاستماع',ref:'ص 65',html:au('13B-3','ص 65 — التمرين 3','أربع دعوات وردودها.')}
 ],
 stations:[
  {intro:true},
  ...R132.stations,
  {recap:['Would you like to + الفعل كما هو?',"قبول: Yes, I'd love to. · Yes, that would be nice. ثم: What time shall we meet?","رفض: … Oh, I'm sorry. / Oh, thank you, but … ثم السبب.","No, I'm not hungry. غير مهذب.",'لصديق: Dear Lucia · Best wishes. لشركة: Dear Ms Irvine · Yours sincerely.']}
 ],
 lab:lab13b,
 examples:[
  {title:'مثال 1: الدعوة',ref:'ص 64',q:`<p>ادعُ زائرك إلى زيارة المتحف غداً.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Would you like to')}`},{t:`الخطوة 2: + الفعل كما هو: ${e('visit the museum tomorrow')}`},{t:`الخطوة 3: ${e('Would you like to visit the museum tomorrow?')}`,final:true}]},
  {title:'مثال 2: قبول',ref:'ص 64',q:`<p>اقبل الدعوة واسأل عن المكان.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("Yes, I'd love to.")}`},{t:`الخطوة 2: ${e('Where shall we meet?')}`},{t:`الخطوة 3: ${e("Yes, I'd love to. Where shall we meet?")}`,final:true}]},
  {title:'مثال 3: رفض رسمي',ref:'ص 65',q:`<p>اكتب جملة رفض لدعوة من شركة لأنك مسافر للعمل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: السبب: ${e('I am away on business at that time,')}`},{t:`الخطوة 2: الرفض بلا اختصار: ${e('and so I am sorry, but I cannot attend.')}`},{t:`الخطوة 3: ${e('I am away on business at that time, and so I am sorry, but I cannot attend.')}`,final:true}]}
 ],
 quiz:[
  {q:'___ have dinner with us?',o:['Would you like to','Would you like','Would you liking','Do you like to'],c:0,e:'Would you like to.'},
  {q:'Not a polite response:',o:["No, I'm not hungry.","Yes, I'd love to.","Oh, thank you, but …",'Yes, that would be nice.'],c:0,e:'رفض مباشر.'},
  {q:"Yes, I'd love to. ___ shall we meet?",o:['What time','How long','Who','Why'],c:0,e:'سؤال بعد القبول.'},
  {q:"Oh, I'm sorry. ___",o:["I'm very tired.",'Yes, please.',"I'd love to.",'What time?'],c:0,e:'سبب الرفض.'},
  {q:'Formal ending:',o:['Yours sincerely,','Best wishes,','See you!','Bye,'],c:0,e:'رسمي.'},
  {q:'Formal greeting:',o:['Dear Ms Irvine,','Dear Katy,','Hi Katy,','Hello!'],c:0,e:'اللقب + اسم العائلة.'}
 ]
});
})(PLCBOOK);

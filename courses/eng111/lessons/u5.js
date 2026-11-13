/* الوحدة 5 — On the phone: Part A Answering the phone (ص 24–25) · Part B Calling for information (ص 26–27)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 5A Answering the phone ========== */
const CALLS=[{t:'تطلب شخصاً فيرد هو نفسه',L:[['A','Hello, Al-Noor Hospital.'],['B','Can I speak to Dr Khalid, please?'],['A','Speaking.'],['B','Ah, hello, Dr Khalid. My name is Fahad Saleh.']]},
 {t:'السكرتير يحوّل المكالمة',L:[['A','Delta Electric. Can I help you?'],['B',"Hello. Mr Saad's office, please."],['A',"Who's calling, please?"],['B','Laila Saeed.'],['A',"Just a moment. I'll put you through."]]},
 {t:'لا تعرف هل يتكلم الإنجليزية',L:[['A','Marhaba.'],['B','Hello … Do you speak English?'],['A','Yes, a little.'],['B','Oh, good. This is Tom Baker of Blue Line Shipping. Can I speak to Mr Majed, please?'],['A','Just a moment, please.']]}];
const PLACES=[['in the mosque',0,'switch off your phone'],['at the cinema',0,'switch it off or make it silent'],['when you drive',0,'use it'],['in a hospital',0,'talk loudly on it'],['in a meeting',0,'answer it'],['in your car (parked)',1,'make a call'],['at home',1,'use it']];
function lab5a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">مكالمة على مراحل</h3><p class="sub">مكالمات من إعدادنا، مبني على التمرين 1 ص 24.</p>
  <div class="ph-row">${CALLS.map((c,i)=>`<button type="button" class="btn${i?'':' pri'}" data-c="${i}">${c.t}</button>`).join('')}</div><div id="o"></div><div class="ph-row"><button type="button" class="btn pri" id="nx">السطر التالي</button></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">should / shouldn't</h3><p class="sub">مبني على التمرين 3c ص 25.</p><select class="ph-sel" id="pl">${PLACES.map((p,i)=>`<option value="${i}">${p[0]}</option>`).join('')}</select><div id="po"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ماذا يقول من يرد إذا كان هو الشخص المطلوب؟</li><li>متى يقول السكرتير <span class="en">I'll put you through</span>؟</li><li>اكتب ثلاث جمل عن آداب الجوال.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let c=0,k=1;
 const sh=()=>{el.querySelectorAll('[data-c]').forEach(b=>b.classList.toggle('pri',+b.dataset.c===c));$('#o').innerHTML=dl(CALLS[c].L.slice(0,k));$('#nx').disabled=k>=CALLS[c].L.length};
 el.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{c=+b.dataset.c;k=1;sh()});$('#nx').onclick=()=>{k++;sh()};sh();
 const ps=()=>{const p=PLACES[+$('#pl').value];$('#po').innerHTML=eb(p[1]?`You can ${p[2]} ${p[0]}.`:(p[2].startsWith('switch')?`You should ${p[2]} ${p[0]}.`:`You shouldn't ${p[2]} ${p[0]}.`))};$('#pl').addEventListener('input',ps);ps();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 5 ===== */
const PH5={r:{greet:['Hello, Delta Electric.','يذكر اسم الشركة'],help:['Can I help you?','يعرض المساعدة'],who:["Who's calling, please?",'يسأل عن المتصل'],me:['Speaking.','أنا الشخص المطلوب'],wait:['Just a moment, please.','يطلب الانتظار'],put:["I'll put you through.",'يحوّل المكالمة']},
 c:{ask:['Can I speak to Mr Saad, please?','يطلب شخصاً'],off:["Mr Saad's office, please.",'يطلب مكتباً'],me:['This is Laila Saeed of Najd Motors.','يعرّف بنفسه'],lang:['Do you speak English?','يسأل عن اللغة']}};
const LAB151A={title:'عبارات الهاتف',w:(el,B)=>N.labB(el,B,{intro:'اختر وظيفة العبارة في المكالمة، وشاهد العبارة ومن يقولها.',
 controls:[{k:'f',label:'الوظيفة',opts:[...Object.keys(PH5.r).map(k=>['r.'+k,PH5.r[k][1]]),...Object.keys(PH5.c).map(k=>['c.'+k,PH5.c[k][1]])]}],
 out:({f})=>{const [r,k]=f.split('.'),[a,ar]=PH5[r][k];return{pieces:[[r==='r'?'من يرد':'المتصل','x',''],[a,r==='r'?'n':'q',ar]],say:a,why:f==='c.me'?`في الهاتف نقول ${e('This is …')} لا ${e('I am …')}.`:f==='r.me'?`${e('Speaking.')} = أنا الشخص الذي تطلبه.`:'عبارات الهاتف ثابتة، فنحفظها كما هي.'}}})};
const SH5={mosque:['in the mosque','should','switch off your phone'],drive:['when you drive',"shouldn't",'use your phone'],hosp:['in a hospital',"shouldn't",'talk loudly on your phone'],meet:['in a meeting','should','make your phone silent'],car:['in your car (parked)','can','make a call']};
const LAB151B={title:'should أم shouldn\'t؟',w:(el,B)=>N.labB(el,B,{intro:'اختر المكان، وشاهد النصيحة المناسبة.',
 controls:[{k:'p',label:'المكان',opts:Object.keys(SH5).map(k=>[k,SH5[k][0]])}],
 out:({p})=>{const [pl,m,v]=SH5[p];return{pieces:[['You','x',''],[m,m==="shouldn't"?'r':'k',m==='should'?'من الأفضل أن':m==='can'?'تستطيع':'من الأفضل ألا'],[v,'n','الفعل كما هو'],[pl.replace(' (parked)','')+'.','q','المكان']],say:`You ${m} ${v} ${pl.replace(' (parked)','')}.`,why:`${e('should')} نصيحة، و ${e("shouldn't")} نصيحة بعدم الفعل، وبعدهما الفعل كما هو.`}}})};
const DT5={name:['name','Ibrahim Al-Fahd'],addr:['address','12 King Fahd Road, Riyadh'],fax:['fax number','017 555 6648'],ph:['contact phone number','014 555 7350']};
const LAB152A={title:'اطلب البيانات',w:(el,B)=>N.labB(el,B,{intro:'اختر المعلومة وأسلوب الطلب، وشاهد السؤال والجواب.',
 controls:[{k:'d',label:'المعلومة',opts:Object.keys(DT5).map(k=>[k,DT5[k][0]])},{k:'m',label:'الأسلوب',opts:[['Can','Can I have'],['Could','Could I have']]}],
 out:({d,m})=>{const [w,a]=DT5[d];return{pieces:[[m+' I have','q',m==='Could'?'ألطف قليلاً':'طلب'],['your '+w+',','n','المعلومة'],['please?','x',''],[`Yes, it's ${a}.`,'k','الجواب']],say:`${m} I have your ${w}, please? Yes, it's ${a}.`,why:`${e('Can I have …?')} و ${e('Could I have …?')} كلاهما طلب، و ${e('Could')} ألطف قليلاً.`}}})};
const LAB152B={title:'تهجئة الاسم وقراءة الرقم',w:(el,B)=>N.labB(el,B,{intro:'اختر المتصل وما تريد التحقق منه.',
 controls:[{k:'c',label:'المتصل',opts:CALLERS.map((c,i)=>[String(i),c.nm+' '+c.sn])},{k:'w',label:'أتحقق من',opts:[['sn','اسم العائلة'],['ph','رقم الهاتف']]}],
 out:({c,w})=>{const C0=CALLERS[+c];return w==='sn'?{pieces:[['Could you spell that, please?','q','طلب التهجئة'],[spell(C0.sn),'n','حرفاً حرفاً']],say:`Could you spell that, please? ${spell(C0.sn).replace(/ - /g,', ')}`,why:`نتهجى حرفاً حرفاً، والشرطة في الاسم نقولها ${e('dash')}.`}
  :{pieces:[['Can you say that again, please?','q','طلب الإعادة'],[digits(C0.ph),'n','رقماً رقماً']],say:`Can you say that again, please? ${digits(C0.ph)}`,why:`نقرأ الرقم رقماً رقماً، والصفر ${e('oh')}، والرقمان المتشابهان ${e('double')}.`}}})};
const R151=N.rule({title:'عبارات الرد على الهاتف، وآداب الجوال بـ should',ref:'ص 24–25',
 intro:`في هذا الدرس ترد على الهاتف في العمل، وتتكلم عن آداب استعمال الجوال. نشرح عبارات من يرد ومن يتصل، ثم النصيحة بـ ${e('should')} و ${e("shouldn't")}.`,
 parts:[
 {t:'عبارات الرد على الهاتف',short:'Speaking · This is',old:[1],q:'ماذا تقول إذا طلب المتصل شخصاً وكنت أنت هو؟',ref:'ص 24',
  lead:`مكالمات العمل لها عبارات ثابتة يعرفها الطرفان. نحفظها كما هي.`,
  points:[`<b>من يرد</b> يبدأ باسم الشركة: ${e('Hello, Delta Electric. Can I help you?')}`,`<b>المتصل يطلب شخصاً:</b> ${e('Can I speak to Mr Saad, please?')}`,`<b>إذا كنت أنت المطلوب:</b> ${e('Speaking.')}`,
   `<b>لمعرفة المتصل:</b> ${e("Who's calling, please?")} والمتصل يقول ${e('This is Laila Saeed of Najd Motors.')}`,`<b>للتحويل:</b> ${e('Just a moment, please.')} ثم ${e("I'll put you through.")}`,`في الهاتف نقول ${e('This is Laila')}، لا ${e('I am Laila')}.`],
  html:vt([['Hello, Delta Electric.','يذكر اسم الشركة'],['Can I help you?','هل أخدمك؟'],['Speaking.','معك (أنا الشخص المطلوب)'],["Who's calling, please?",'من المتصل؟'],['Just a moment, please.','لحظة من فضلك'],["I'll put you through.",'سأحوّلك']],['من يرد','المعنى'])+vt([['Can I speak to Mr Saad, please?','هل أستطيع التحدث إلى …؟'],["Mr Saad's office, please.",'مكتب … من فضلك'],['This is Laila Saeed of Najd Motors.','معك … من شركة …'],['Do you speak English?','هل تتكلم الإنجليزية؟']],['المتصل','المعنى']),
  pairs:[['I am Laila Saeed.','This is Laila Saeed.','في الهاتف نقول This is.']],
  art:art(`<g data-tip="من يرد: يذكر الشركة ويعرض المساعدة"><rect x="20" y="40" width="200" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(120,68,'Delta. Can I help you?',{fs:13,w:700})}</g>
    <g data-tip="المتصل يطلب شخصاً"><rect x="140" y="100" width="200" height="44" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(240,128,'Can I speak to Saad?',{fs:13,w:700})}</g>
    <g data-tip="Speaking = أنا هو"><rect x="20" y="160" width="200" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(120,188,'Speaking.',{fs:13,w:700})}</g>
    <g data-tip="أو: من المتصل؟ ثم التحويل"><rect x="20" y="220" width="320" height="44" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,248,"Who's calling? … I'll put you through.",{fs:13,w:700})}</g>`,'مكالمة'),cap:'بداية مكالمة. مرّر المؤشر على كل سطر.',labs:[LAB151A,{title:'الرد',w:(el,B)=>N.cases(el,B,{intro:'ماذا تقول؟',cases:[{q:'المتصل طلبك أنت.',opts:[['Speaking.',1],['Who are you?',0]]},{q:'تريد أن تعرف اسم المتصل.',opts:[["Who's calling, please?",1],["What's your problem?",0]]},{q:'ستحوّل المكالمة.',opts:[["Just a moment. I'll put you through.",1],['Goodbye.',0]]}]})}]},
 {t:'آداب الجوال بـ should و shouldn\'t',short:'should',old:[2],q:'كيف تنصح زميلك ألا يستعمل الجوال وهو يقود؟',ref:'ص 25',
  lead:`عندما ننصح أحداً بما هو أفضل أن يفعله أو لا يفعله نستعمل ${e('should')}.`,
  points:[`${e('should')} = من الأفضل أن: ${e('You should switch off your phone in the mosque.')}`,`${e("shouldn't")} = من الأفضل ألا: ${e("You shouldn't use your phone when you drive.")}`,`بعدهما الفعل كما هو، بلا ${e('to')} ولا ${e('s')}، ولا تتغير مع الضمائر: ${e('He should …')}`],
  ex:['You should switch off your phone in the mosque.',"You shouldn't use your phone when you drive.","You shouldn't talk loudly on your phone in a hospital."],
  pairs:[['You should to switch off your phone.','You should switch off your phone.','بعد should لا نضع to.'],['He shoulds listen.','He should listen.','should لا تأخذ s.']],
  art:art(`<g data-tip="should + الفعل = ينبغي"><rect x="20" y="70" width="320" height="50" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,101,'You should switch off your phone.',{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="shouldn't + الفعل = لا ينبغي"><rect x="20" y="140" width="320" height="50" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(180,171,"You shouldn't use it when you drive.",{fs:14,w:700,c:'#fff'})}</g>`,'should'),cap:'النصيحة بالإثبات والنفي. مرّر المؤشر على كل سطر.',labs:[LAB151B,{title:'should',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'You ___ use your phone in the cinema.',o:["shouldn't",'should'],a:0},{s:'You should ___ your phone in the mosque.',o:['switch off','switches off'],a:0},{s:'You ___ answer calls in a meeting.',o:["shouldn't",'should'],a:0}]})}]}
 ]});
B.lesson({
 id:'u5-l1',unit:5,order:1,pages:'24–25',
 title:'Part A: Answering the phone — الرد على الهاتف',
 summary:'عبارات الرد على الهاتف وبدء المكالمة (Can I help you? Can I speak to …? Speaking. Who\'s calling, please? Just a moment. I\'ll put you through. This is …)، وسؤال Do you speak English?، وآداب الجوال في الأماكن العامة بـ should / shouldn\'t.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 24–25',html:`<p>ترد على مكالمة عمل أو تبدأها. ستتعلم:</p><ol><li>عبارات من يرد على الهاتف.</li><li>عبارات المتصل.</li><li>${e("should / shouldn't")} للنصيحة.</li></ol>`},
  ...R151.theory,
  {h:'تمارين الكتاب',ref:'ص 24–25',html:
   bk(1,'ص 24','استمع: من المتصل؟ ثم أكمل المحادثات.',['a: 1 b Chris Fleming · 2 b Juliette Winter · 3 a Doug Gibbs',"b: 1 B: Can I speak to Ms Jackson, please? · A: Speaking.","2 A: … Can I help you? · A: Who's calling, please? · A: Just a moment. I'll put you through.","3 B: Uh … hello … Do you speak English? · B: Oh, good. This is Doug Gibbs … · A: Just a moment, please."])+
   bk(2,'ص 25','نشاط ثنائي: مثّل بداية أربع مكالمات.',null,'معلومات الطالب أ في ص 78 من الكتاب.')+
   bk(3,'ص 25','اقرأ المقال وناقش، ثم اكتب متى وأين لا تستعمل الجوال.',['a: لأن امرأة في الجمهور ردّت على جوالها أثناء العرض وقالت إنه «أوشك على الانتهاء» ثم رتّبت موعد العشاء.',"c (نموذج): You shouldn't use your mobile phone at the theatre."])},
  {h:'الاستماع',ref:'ص 24',html:au('5A-1a','ص 24 — التمرين 1','ثلاث مكالمات هاتفية.')}
 ],
 stations:[
  {intro:true},
  ...R151.stations,
  {recap:["Can I help you? · Speaking. · Who's calling, please?","Just a moment. I'll put you through.",'Can I speak to …, please?','This is … of …',"You should … / You shouldn't …"]}
 ],
 lab:lab5a,
 examples:[
  {title:'مثال 1: الرد',ref:'ص 24',q:`<p>ترد على هاتف شركة Gulf Cables.</p>`,given:[],solve:()=>[{t:`الخطوة 1: اسم الشركة: ${e('Gulf Cables.')}`},{t:`الخطوة 2: عرض المساعدة: ${e('Can I help you?')}`},{t:`الخطوة 3: ${e('Hello, Gulf Cables. Can I help you?')}`,final:true}]},
  {title:'مثال 2: المتصل',ref:'ص 24',q:`<p>أنت ليلى سعيد من Najd Motors وتريد السيد سعد.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('This is Laila Saeed of Najd Motors.')}`},{t:`الخطوة 2: ${e('Can I speak to Mr Saad, please?')}`},{t:`الخطوة 3: ${e('This is Laila Saeed of Najd Motors. Can I speak to Mr Saad, please?')}`,final:true}]},
  {title:'مثال 3: نصيحة',ref:'ص 25',q:`<p>انصح بعدم استعمال الجوال أثناء القيادة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: النفي: ${e("shouldn't")}.`},{t:`الخطوة 2: ${e('use your mobile phone when you drive')}`},{t:`الخطوة 3: ${e("You shouldn't use your mobile phone when you drive.")}`,final:true}]}
 ],
 quiz:[
  {q:'Can I speak to Ms Jackson? — ___',o:['Speaking.','Talking.','I am.','Yes, speak.'],c:0,e:'Speaking.'},
  {q:"___ calling, please?",o:["Who's","What's","Where's","Whose"],c:0,e:"Who's calling?"},
  {q:"I'll put you ___.",o:['through','on','in','to'],c:0,e:'put you through.'},
  {q:'في الهاتف تقول:',o:['This is Laila.','I is Laila.','Here Laila.','My Laila.'],c:0,e:'This is …'},
  {q:"You ___ use your phone when you drive.",o:["shouldn't","should","don't should","not should"],c:0,e:"shouldn't."},
  {q:'You should ___ your phone.',o:['switch off','switching off','to switch off','switches off'],c:0,e:'should + الفعل.'}
 ]
});

/* ========== 5B Calling for information ========== */
const CALLERS=[{nm:'Salem',sn:'Al-Rashid',co:'Tabuk Trading',ph:'014 555 7350',it:'price list'},{nm:'Nora',sn:'Hamdan',co:'Bright Schools',ph:'013 555 1902',it:'brochure'},{nm:'Ibrahim',sn:'Al-Fahd',co:'Desert Farms',ph:'017 555 6648',it:'catalogue'}];
const spell=s=>s.toUpperCase().replace(/[^A-Z-]/g,'').split('').map(c=>c==='-'?'dash':c).join(' - ');
const digits=s=>s.replace(/\D/g,'').split('').map(d=>d==='0'?'oh':d).join(' ');
function lab5b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">نموذج طلب العميل</h3><p class="sub">متصلون من إعدادنا، مبني على التمرين 3 ص 27. اضغط 🔊 لتسمع المتصل، ثم اكتب.</p>
  <div class="ph-row"><select class="ph-sel" id="cl">${CALLERS.map((c,i)=>`<option value="${i}">المتصل ${i+1}</option>`).join('')}</select><button type="button" class="btn" id="p1">🔊 الاسم</button><button type="button" class="btn" id="p2">🔊 التهجئة</button><button type="button" class="btn" id="p3">🔊 الرقم</button></div>
  <div class="ph-row"><input class="ph-num" id="sn" type="text" dir="ltr" maxlength="20" placeholder="surname" style="width:140px"><input class="ph-num" id="tl" type="text" dir="ltr" maxlength="16" placeholder="tel" style="width:140px"><button type="button" class="btn pri" id="ck">تحقّق</button></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">لغة التحقق</h3>${eb(['Could you spell that, please?','Can you say that again, please?',"I'll say it more slowly.",'Could I have your fax number?','And can I have a contact phone number?'])}</div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا نطلب التهجئة في الهاتف؟</li><li>كيف ننطق 0 في أرقام الهاتف؟</li><li>بدّل المتصل وجرّب مرة أخرى.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const cur=()=>CALLERS[+$('#cl').value];
 $('#p1').onclick=()=>N.speak(`Hello, this is ${cur().nm} ${cur().sn} of ${cur().co}. I'm calling to ask for your ${cur().it}.`);
 $('#p2').onclick=()=>N.speak(`My surname is ${cur().sn}. That's ${spell(cur().sn)}.`);
 $('#p3').onclick=()=>N.speak(`My number is ${digits(cur().ph)}.`);
 $('#cl').addEventListener('input',()=>{$('#sn').value='';$('#tl').value='';$('#o').innerHTML=''});
 $('#ck').onclick=()=>{const c=cur(),a=$('#sn').value.trim().toLowerCase().replace(/\s/g,'')===c.sn.toLowerCase(),b=$('#tl').value.replace(/\D/g,'')===c.ph.replace(/\D/g,'');
  $('#o').innerHTML=`<p class="sub">${a?'✔ اسم العائلة صحيح':'✘ اسم العائلة غير صحيح'} · ${b?'✔ الرقم صحيح':'✘ الرقم غير صحيح'}</p>`+((a&&b)?eb([`Name: ${c.nm} ${c.sn}`,`Company: ${c.co}`,`Tel: ${c.ph}`,`Request: ${c.it}`]):'')};
}
const R152=N.rule({title:'سبب الاتصال، وطلب البيانات، والتحقق والتهجئة',ref:'ص 26–27',
 intro:`في هذا الدرس تتصل بشركة لتطلب معلومات، أو ترد على متصل وتأخذ بياناته. نشرح كيف تذكر سبب الاتصال، وكيف تطلب البيانات، وكيف تتحقق منها.`,
 parts:[
 {t:'سبب الاتصال وطلب البيانات',short:'Can I have your …?',old:[1],q:'كيف تطلب رقم الفاكس بأدب؟',ref:'ص 26',
  lead:`المتصل يذكر سبب اتصاله أولاً، ثم يطلب من يرد عليه البيانات التي يحتاجها ليرسل له ما طلب.`,
  points:[`<b>سبب الاتصال:</b> ${e("I'm calling to")} + الفعل: ${e("I'm calling to ask for your latest price list.")}`,`<b>طريقة الإرسال:</b> ${e('Could you send it by email / fax / express mail?')}`,`<b>طلب البيانات:</b> ${e('Can I have your name, please?')} و ${e('Could I have your fax number?')}`,`${e('Could')} و ${e('Can')} كلاهما طلب، و ${e('Could')} ألطف قليلاً.`,`<b>للوعد بالتنفيذ:</b> ${e("I'll do that right now.")}`],
  html:vt([["I'm calling to ask for your latest price list.",'أتصل لأطلب …'],['Could you send it by fax / email?','هل ترسله بالفاكس / البريد؟'],['Could you send it by express mail?','بالبريد السريع'],['Can I have your name / address, please?','اسمك / عنوانك'],['Could I have your fax number?','رقم الفاكس'],['And can I have a contact phone number?','رقم للتواصل']],['English','المعنى']),
  pairs:[["I'm calling for ask your price list.","I'm calling to ask for your price list.",'سبب الاتصال: to + الفعل.']],
  art:art(`<rect x="40" y="30" width="280" height="240" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,58,'Customer request form',{fs:15,w:700})}${[['Name','Can I have your name, please?'],['Company','What company are you from?'],['Address','Can I have your address?'],['Tel','Can I have a contact phone number?'],['Fax','Could I have your fax number?']].map((x,i)=>`<g data-tip="${x[1]}"><text x="60" y="${96+i*36}" font-size="13" font-weight="700" fill="${C.ink}" direction="ltr">${x[0]}: ...................</text></g>`).join('')}`,'نموذج'),cap:'نموذج من إعدادنا. مرّر المؤشر على كل حقل لترى سؤاله.',labs:[LAB152A,{title:'الطلب',w:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:'Can I ___ your name, please?',o:['have','give'],a:0},{s:"I'm calling to ___ for your price list.",o:['ask','say'],a:0},{s:'Could you send it ___ fax?',o:['by','with'],a:0}]})}]},
 {t:'التحقق والتهجئة',short:'التحقق',old:[2],q:'ماذا تقول إذا لم تسمع الرقم جيداً؟',ref:'ص 26',
  lead:`في الهاتف يسهل الخطأ في الأسماء والأرقام، فنتحقق منها قبل إنهاء المكالمة.`,
  points:[`<b>للتهجئة:</b> ${e('Could you spell that, please?')}`,`<b>للإعادة:</b> ${e('Can you say that again, please?')}`,`<b>إذا طُلب منك الإعادة:</b> ${e("I'll say it more slowly.")}`,`<b>في الأرقام</b> ننطق 0 ${e('oh')}، و 66 ${e('double six')}.`],
  html:vt([['Could you spell that, please?','تهجّه'],['Can you say that again, please?','أعد'],["I'll say it more slowly.",'سأقوله ببطء'],["I'll do that right now.",'سأفعل ذلك الآن']],['English','المعنى']),
  art:art(`${[['Could you spell that, please?','تهجّه'],['Can you say that again, please?','أعد'],["I'll say it more slowly.",'سأبطئ'],['oh = 0 · double six = 66','الأرقام']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="20" y="${40+i*58}" width="320" height="46" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,69+i*58,x[0],{fs:14,w:700})}</g>`).join('')}`,'التحقق'),cap:'أربع عبارات للتحقق. مرّر المؤشر على كل منها.',labs:[LAB152B,{title:'التحقق',w:(el,B)=>N.cases(el,B,{intro:'ماذا تقول؟',cases:[{q:'الاسم صعب.',opts:[['Could you spell that, please?',1],['Speak English!',0]]},{q:'لم تسمع الرقم.',opts:[['Can you say that again, please?',1],['Goodbye.',0]]}]})}]}
 ]});
B.lesson({
 id:'u5-l2',unit:5,order:2,pages:'26–27',
 title:'Part B: Calling for information — الاتصال لطلب معلومات',
 summary:'طلب معلومات أو كتالوج بالهاتف (I\'m calling to ask for …)، وطلب البيانات (Can I have your name / address / fax number?)، والتحقق (Could you spell that? Can you say that again? I\'ll say it more slowly.)، وتهجئة الأسماء وقراءة الأرقام، وتعبئة نموذج طلب عميل.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 26–27',html:`<p>تتصل لتطلب معلومات، أو تستقبل مكالمة وتعبّئ نموذجاً. ستتعلم:</p><ol><li>سبب الاتصال.</li><li>طلب البيانات.</li><li>التحقق والتهجئة.</li></ol>`},
  ...R152.theory,
  {h:'تمارين الكتاب',ref:'ص 26–27',html:
   bk(1,'ص 26','من يقول كل جملة: المتصلة (F) أم من يرد (R)؟ ثم استمع.',['1 R (مثال)','2 F','3 R','4 R','5 F','6 R','7 R','8 F','9 R','10 R','11 R'])+
   bk(2,'ص 26','نشاط ثنائي: موقفان؛ اتصل لتطلب قائمة أسعار، واستقبل مكالمة واملأ النموذج.',null,'معلومات الطالب أ في ص 78 من الكتاب.')+
   bk(3,'ص 27','استمع وأكمل نموذج طلب العميل.',['request: brochure','Name: Philip de Roos','Company: SmartSchool','Address: Roentgenstraat 195, Rotterdam, Holland','Postcode: 3071 TB','Tel: 00 31 10 4508 3961','Notes: please send by express mail'])+
   bk(4,'ص 27','قرّر ما تريد شراءه، ثم مثّل مع زميلك مكالمة طلب وتعبئة النموذج.',null)},
  {h:'الاستماع',ref:'ص 26–27',html:au('5B-1b','ص 26 — التمرين 1b','متصلة تطلب قائمة أسعار.')+au('5B-3','ص 27 — التمرين 3','متصل يطلب كتيّباً.')}
 ],
 stations:[
  {intro:true},
  ...R152.stations,
  {recap:["I'm calling to ask for …",'Can I have your name / address / phone number?','Could you spell that, please?','Can you say that again, please?',"I'll say it more slowly. · I'll do that right now."]}
 ],
 lab:lab5b,
 examples:[
  {title:'مثال 1: سبب الاتصال',ref:'ص 26',q:`<p>تتصل لتطلب كتالوج الشركة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'm calling to ask for")}`},{t:`الخطوة 2: ${e('your catalogue')}`},{t:`الخطوة 3: ${e("Hello, I'm calling to ask for your catalogue.")}`,final:true}]},
  {title:'مثال 2: تهجئة',ref:'ص 26',q:`<p>تهجَّ اسم العائلة Hamdan.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نفصل الحروف.`},{t:`الخطوة 2: ${e('H-A-M-D-A-N')}`},{t:`الخطوة 3: ${e("It's Hamdan. That's H-A-M-D-A-N.")}`,final:true}]},
  {title:'مثال 3: رقم',ref:'ص 26',q:`<p>اقرأ الرقم 0566.</p>`,given:[],solve:()=>[{t:`الخطوة 1: 0 = ${e('oh')}.`},{t:`الخطوة 2: 66 = ${e('double six')}.`},{t:`الخطوة 3: ${e('oh five double six')}`,final:true}]}
 ],
 quiz:[
  {q:"I'm calling to ___ for your price list.",o:['ask','say','tell','speak'],c:0,e:'ask for.'},
  {q:'Could you ___ that, please? — K-R-O-M.',o:['spell','say','repeat','write'],c:0,e:'spell.'},
  {q:'Can I ___ your address, please?',o:['have','give','take to','get to'],c:0,e:'Can I have …?'},
  {q:'0 في رقم الهاتف:',o:['oh','zero only','o-clock','nil only'],c:0,e:'oh.'},
  {q:"I'll say it more ___.",o:['slowly','slow','slower','slowest'],c:0,e:'more slowly.'},
  {q:'Could you send it ___ express mail?',o:['by','with','on','in'],c:0,e:'by.'}
 ]
});
})(PLCBOOK);

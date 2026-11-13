/* الوحدة 4 — Time zones: Part A Telling the time (ص 20–21) · Part B Planning schedules (ص 22–23)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const NUM=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','quarter','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine','half'];
const say=(h,m)=>{const H=h%12,nx=(h+1)%12;if(m===0)return (h===12?'twelve midday':h===0?'twelve midnight':NUM[H]+" o'clock");if(m<=30)return `${NUM[m]} past ${NUM[H]}`.replace(/^(\w+(-\w+)?) past/,(x,a)=>a==='quarter'||a==='half'?x:x.replace(a,a+(m%5?(m===1?' minute':' minutes'):'')));return `${NUM[60-m]} to ${NUM[nx]}`.replace(/^(\w+(-\w+)?) to/,(x,a)=>a==='quarter'?x:x.replace(a,a+((60-m)%5?(60-m===1?' minute':' minutes'):'')))};
const dig=(h,m)=>`${h}:${String(m).padStart(2,'0')}`;
const clock=(h,m,r=70,cx=90,cy=90)=>{const ma=m*6,ha=(h%12)*30+m/2,p=(a,l)=>[cx+l*Math.sin(a*Math.PI/180),cy-l*Math.cos(a*Math.PI/180)].map(v=>v.toFixed(1));
 const[mx,my]=p(ma,r*.82),[hx,hy]=p(ha,r*.52);return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.paper}" stroke="${C.ink}" stroke-width="4"/>${[...Array(12)].map((_,i)=>{const[x,y]=p(i*30,r*.84);return TL(+x,+y+5,String(i||12),{fs:13,w:700})}).join('')}<line x1="${cx}" y1="${cy}" x2="${hx}" y2="${hy}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${mx}" y2="${my}" stroke="${C.red}" stroke-width="3.5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="5" fill="${C.ink}"/>`};
const GMT=[['London',0],['Los Angeles',-8],['New York',-5],['Rio de Janeiro',-3],['Riyadh',3],['Tokyo',9],['Sydney',10]];

/* ========== 4A Telling the time ========== */
function lab4a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">اقرأ الساعة</h3><p class="sub">مبني على التمرين 1 ص 20 و «Language file 1».</p>
  <div class="pk-sl"><label>الساعة <b id="hh-v"></b></label><input type="range" id="hh" min="0" max="23" value="9"></div>
  <div class="pk-sl"><label>الدقائق <b id="mm-v"></b></label><input type="range" id="mm" min="0" max="59" value="15"></div>
  <div id="sv" style="max-width:200px;margin:8px auto"></div><div id="o"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">كم الساعة هناك؟</h3><p class="sub">جدول GMT من الكتاب ص 20 (بلا التوقيت الصيفي).</p>
  <div class="ph-row"><select class="ph-sel" id="c1">${GMT.map((g,i)=>`<option value="${i}" ${i===4?'selected':''}>${g[0]}</option>`).join('')}</select><select class="ph-sel" id="c2">${GMT.map((g,i)=>`<option value="${i}">${g[0]}</option>`).join('')}</select></div><div id="wo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اضبط 8:45: لماذا نقول <span class="en">quarter to nine</span>؟</li><li>كم الساعة في طوكيو إذا كانت التاسعة صباحاً في الرياض؟</li><li>متى تتصل بصديق في نيويورك بعد عملك؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const h=+$('#hh').value,m=+$('#mm').value;$('#hh-v').textContent=h;$('#mm-v').textContent=m;
  $('#sv').innerHTML=`<svg viewBox="0 0 180 180" style="width:100%">${clock(h,m)}</svg>`;
  $('#o').innerHTML=eb([`It's ${say(h,m)}.`,`It's ${h%12||12}.${String(m).padStart(2,'0')} ${h<12?'a.m.':'p.m.'} (${dig(h,m)}).`]);
  const a=GMT[+$('#c1').value],b=GMT[+$('#c2').value];let t=(h*60+m+(b[1]-a[1])*60)%1440;if(t<0)t+=1440;const h2=Math.floor(t/60),m2=t%60;
  $('#wo').innerHTML=a===b?'<p class="sub">اختر مدينتين مختلفتين.</p>':eb([`When it's ${say(h,m)} in ${a[0]},`,`it's ${say(h2,m2)} in ${b[0]}.`])+`<p class="sub">${a[0]}: GMT ${a[1]>=0?'+':'−'}${Math.abs(a[1])} · ${b[0]}: GMT ${b[1]>=0?'+':'−'}${Math.abs(b[1])} · ${b[0]}: ${dig(h2,m2)}</p>`};
 ['hh','mm','c1','c2'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
}
B.lesson({
 id:'u4-l1',unit:4,order:1,pages:'20–21',
 title:'Part A: Telling the time — قول الوقت',
 summary:'قول الوقت (past / to، quarter، half، o\'clock، midday)، وصيغة الأرقام (9.30، a.m. / p.m.)، وفروق التوقيت (GMT)، وحروف الجر للزمن (at 9.00، on Saturday، from … to، around)، وساعات العمل والغداء في بلدان مختلفة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 20–21',html:`<p>تقول الوقت وتسأل عنه وتتحدث عن يوم عملك. ستتعلم:</p><ol><li>قول الوقت بطريقتين.</li><li>فروق التوقيت بين المدن.</li><li>حروف الجر للزمن.</li></ol>`},
  {h:'قول الوقت',ref:'ص 20',html:`${vt([['9.00',"nine o'clock"],['9.15','quarter past nine / nine fifteen'],['9.20','twenty past nine / nine twenty'],['9.30','half past nine / nine thirty'],['8.45','quarter to nine / eight forty-five'],['12.00','twelve midday / twelve noon']],['الرقم','نقول'])}<p>${e('past')} = بعد (حتى 30 دقيقة)، و ${e('to')} = إلا (بعد 30 دقيقة). و ${e('a.m.')} قبل الظهر، و ${e('p.m.')} بعده.</p>`},
  {h:'السؤال عن الوقت',ref:'ص 20',html:`${dl([['A','What time is it now?'],['B',"It's half past ten."],['A',"When it's half past ten in Riyadh, what time is it in London?"],['B',"It's half past seven."]])}`},
  {h:'حروف الجر للزمن',ref:'ص 21',html:`${vt([['at','at 9.00، at lunchtime'],['on','on Saturday، on Sunday afternoons'],['in','in the morning، in the evening'],['from … to','from 2.00 to 5.00'],['around / about','around 5.00 = تقريباً']],['حرف الجر','مثال'])}${eb(['I usually arrive at 7.30.',"I don't work on Fridays.",'We have lunch from 1.00 to 1.30.'])}`},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">GMT</span> = توقيت غرينتش (لندن). الرياض <span class="en">GMT +3</span>، أي متقدمة على لندن ثلاث ساعات.'},
  {h:'تمارين الكتاب',ref:'ص 20–21',html:
   bk(1,'ص 20','طابق الأوقات بالساعات.',['1 b','2 a','3 f','4 c','5 e','6 d'],'من قراءتنا لصور الساعات.')+
   bk(2,'ص 20','اكتب أسئلة عن الوقت في ثلاث مدن مقارنة بلندن، ثم اسأل زميلك.',["When it's half past four in London, what time is it in Sydney? — It's half past two in the morning (next day). (نموذج)"])+
   bk(3,'ص 21','اقرأ عن أسبوع عمل مدير وقارنه بأسبوعك، وأجب عن الأسئلة.',null,'إجابات شخصية.')+
   bk(4,'ص 21','استمع واملأ معلومات أربعة أشخاص.',['Michael Devas: starts 9.30 · lunch 1.00–1.30 · leaves 7.30 · sometimes works on Saturdays','Felipe Ramos: starts 9.00 · lunch 2.00 (closed 2.00–5.00) · leaves 8.00 · sometimes Sunday afternoons','Petra Hartmann: starts 8.00 · lunch 12.00 (closed 12.00–2.00) · leaves 5.30 · never works at weekends','Jo Watson: starts 10.00 · lunch 1.00 (one hour) · leaves about 6.00 · not at the office at weekends'])+
   bk(5,'ص 21','نشاط ثنائي: متى أفضل وقت للاتصال بهؤلاء من بلدك؟',null,'معلومات الطالب أ في ص 78 من الكتاب.')},
  {h:'الاستماع',ref:'ص 21',html:au('4A-4a','ص 21 — التمرين 4a','أربعة أشخاص يتحدثون عن أسبوع عملهم.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'past · to',title:'قول الوقت',q:'كيف تقول 8:45؟',ref:'ص 20',
   art:art(`<g data-tip="quarter past nine = 9.15">${clock(9,15,58,90,100)}${TL(90,186,'quarter past nine',{fs:13,w:700})}</g><g data-tip="quarter to nine = 8.45">${clock(8,45,58,270,100)}${TL(270,186,'quarter to nine',{fs:13,w:700})}</g>`,'ساعتان'),
   cap:'ساعتان من رسمنا. مرّر المؤشر على كل منهما.',side:[{tip:`نصف الساعة: ${e('half past')}، ولا نقول ${e('half to')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'كيف تقول؟',cases:[{q:'7.30',opts:[['half past seven',1],['half to eight',0]]},{q:'10.40',opts:[['twenty to eleven',1],['twenty past ten',0]]},{q:'12.00 (الظهر)',opts:[['twelve midday',1],['twelve midnight',0]]}]}),title:'مختبر مصغّر: الوقت'}]},
  {st:2,short:'GMT',title:'فروق التوقيت',q:'إذا كانت الساعة 4.30 في لندن، فكم في الرياض؟',ref:'ص 20',
   art:art(`${GMT.map((g,i)=>`<g data-tip="${g[0]}: GMT ${g[1]>=0?'+':'−'}${Math.abs(g[1])} (${g[1]===0?'London':g[1]>0?Math.abs(g[1])+' hours ahead of London':Math.abs(g[1])+' hours behind London'})"><rect x="40" y="${20+i*38}" width="280" height="32" rx="10" fill="${g[1]===0?C.yel:g[1]>0?C.paper:'#dbe8f5'}" stroke="${C.ink}" stroke-width="1.5"/>${TL(130,41+i*38,g[0],{fs:13,w:700})}${TL(260,41+i*38,'GMT '+(g[1]>0?'+':g[1]<0?'−':'')+(g[1]?Math.abs(g[1]):''),{fs:13,w:700})}</g>`).join('')}`,'GMT'),
   cap:'المدن ومقدار فرقها عن لندن. مرّر المؤشر على كل عمود.',side:[{tip:`${e('ahead of')} = متقدم على، و ${e('behind')} = متأخر عن.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'احسب:',cases:[{q:"It's 9.00 in London. What time is it in Riyadh?",opts:[['12.00',1],['6.00',0]]},{q:"It's 3.00 p.m. in Riyadh. What time is it in Tokyo?",opts:[['9.00 p.m.',1],['9.00 a.m.',0]]}]}),title:'مختبر مصغّر: GMT'}]},
  {st:3,short:'at · on · from … to',title:'حروف الجر للزمن',q:'متى تبدأ عملك؟',ref:'ص 21',
   art:art(`${[['at 7.30','at + الساعة'],['on Sunday','on + اليوم'],['in the morning','in + جزء اليوم'],['from 1.00 to 1.30','من … إلى'],['around 5.00','تقريباً']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="40" y="${26+i*52}" width="280" height="42" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,53+i*52,x[0],{fs:15,w:700})}</g>`).join('')}`,'حروف الجر للزمن'),
   cap:'خمس عبارات زمنية. مرّر المؤشر على كل منها.',side:[{tip:`${e('at the weekend')} (بريطاني) = ${e('on the weekend')} (أمريكي).`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'I start work ___ 7.30.',o:['at','on'],a:0},{s:"I don't work ___ Fridays.",o:['on','at'],a:0},{s:'The office is closed ___ 12.00 to 2.00.',o:['from','at'],a:0}]}),title:'مختبر مصغّر: حرف الجر'}]},
  {recap:["o'clock, quarter past, half past, quarter to.",'a.m. / p.m.، twelve midday.',"When it's … in London, what time is it in …?",'GMT +3 = Riyadh.','at 9.00، on Sunday، in the morning، from … to، around.']}
 ],
 lab:lab4a,
 examples:[
  {title:'مثال 1: قول الوقت',ref:'ص 20',q:`<p>اكتب 10.45 بطريقتين.</p>`,given:[],solve:()=>[{t:`الخطوة 1: بعد 30 دقيقة نستعمل ${e('to')}: بقي 15 دقيقة على 11.`},{t:`الخطوة 2: ${e('quarter to eleven')}.`},{t:`الخطوة 3: ${e('quarter to eleven / ten forty-five')}`,final:true}]},
  {title:'مثال 2: فرق التوقيت',ref:'ص 20',q:`<p>الساعة 2.00 مساءً في الرياض. كم في نيويورك؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفرق بين +3 و −5 = 8 ساعات.`},{t:`الخطوة 2: نيويورك متأخرة: 2.00 p.m. − 8 = 6.00 a.m.`},{t:`الخطوة 3: ${e("When it's two p.m. in Riyadh, it's six a.m. in New York.")}`,final:true}]},
  {title:'مثال 3: يوم العمل',ref:'ص 21',q:`<p>تبدأ عملك 7.30، وتستريح من 12.00 إلى 12.30، وتغادر تقريباً 3.00.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('I start work at 7.30.')}`},{t:`الخطوة 2: ${e('I have a break from 12.00 to 12.30.')}`},{t:`الخطوة 3: ${e('I leave work around 3.00.')}`,final:true}]}
 ],
 quiz:[
  {q:'8.45 =',o:['quarter to nine','quarter past eight','half past eight','quarter to eight'],c:0,e:'بقي ربع ساعة على التاسعة.'},
  {q:'6.30 =',o:['half past six','half to seven','six half','thirty to six'],c:0,e:'half past six.'},
  {q:'Riyadh is GMT ___',o:['+3','−3','+9','0'],c:0,e:'ص 20.'},
  {q:"I don't work ___ Saturdays.",o:['on','at','in','from'],c:0,e:'on + اليوم.'},
  {q:'I start work ___ 9.00.',o:['at','on','in','to'],c:0,e:'at + الساعة.'},
  {q:'p.m. =',o:['بعد الظهر','قبل الظهر','منتصف الليل','الفجر'],c:0,e:'p.m. بعد الظهر.'}
 ]
});

/* ========== 4B Planning schedules ========== */
const ACT=[['Meet at the airport','fri',18.5],['Check in at the hotel','fri',19.5],['Dinner with colleagues','fri',21],['Give the presentation','sat',10],['Visit the Expo','sat',13],['Bus tour of the old city','sun',9],['Shopping at the mall','sun',16],['Go to the airport','mon',11]];
function lab4b(el,B){kcss();
 const SL=[['fri','Friday evening'],['sat','Saturday'],['sun','Sunday'],['mon','Monday morning']];
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">خطّط جدول الزائر</h3><p class="sub">زائرة من إعدادنا: Ms Anna Weber تزور معرض الرياض. مبني على التمرين 3 ص 22. اختر لكل نشاط يوماً، ثم «تحقّق».</p>
  <div id="ls"></div><div class="ph-row"><button type="button" class="btn pri" id="ck">تحقّق</button></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">رسالة Anna</h3><p class="sub">ملخّص طلباتها.</p>${eb(['Arrives: Friday 18.30','Leaves: Monday 13.00 (flight)','Presentation: Saturday morning','Wants a bus tour and some shopping'])}</div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا لا يصح العشاء يوم الجمعة قبل وصولها؟</li><li>اكتب جملة: <span class="en">On Sunday morning, you can …</span></li><li>ما الفعل المناسب مع <span class="en">a presentation</span>؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 $('#ls').innerHTML=ACT.map((a,i)=>`<div class="ph-row" style="align-items:center"><span class="en" style="min-width:210px">${a[0]}</span><select class="ph-sel" data-i="${i}">${SL.map(s=>`<option value="${s[0]}">${s[1]}</option>`).join('')}</select></div>`).join('');
 $('#ck').onclick=()=>{const v=[...el.querySelectorAll('[data-i]')].map(s=>s.value);const bad=ACT.map((a,i)=>a[1]!==v[i]?a[0]:null).filter(Boolean);
  const nm={fri:'On Friday evening',sat:'On Saturday',sun:'On Sunday',mon:'On Monday morning'};
  $('#o').innerHTML=bad.length?`<p class="sub" style="color:var(--red)">راجع: <span class="en">${bad.join(' · ')}</span>. تذكّر: تصل الجمعة 18.30، والعرض صباح السبت، والجولة صباح الأحد، والرحلة ظهر الاثنين.</p>`:eb(ACT.map(a=>`${nm[a[1]]}, ${a[1]==='fri'&&a[0].startsWith('Meet')?"I'll meet you at the airport at 18.30.":a[0].startsWith('Give')?'you can give your presentation at 10.00.':a[0].startsWith('Dinner')?'we can have dinner with my colleagues at 9 o’clock.':'you can '+a[0].toLowerCase().replace('go to','go to')+'.'}`))};
}
B.lesson({
 id:'u4-l2',unit:4,order:2,pages:'22–23',
 title:'Part B: Planning schedules — تخطيط الجداول',
 summary:'قراءة رسالة طلبات زائر وتصحيح الملاحظات، والأفعال مع الأسماء (plan a schedule، book a hotel، give a presentation، have dinner، go shopping)، والطلب المهذب (Could you …? I\'d like to …)، والاقتراح والعرض (We can … / I\'ll …)، وتخطيط جدول وكتابة رسالة تشرحه.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 22–23',html:`<p>تخطط برنامج زيارة لضيف. ستتعلم:</p><ol><li>قراءة رسالة طلبات.</li><li>الأفعال مع الأسماء.</li><li>الطلب والعرض والاقتراح.</li><li>كتابة رسالة الجدول.</li></ol>`},
  {h:'الفعل مع الاسم',ref:'ص 22',html:vt([['plan','a schedule','يخطط جدولاً'],['meet','someone at the airport','يستقبل'],['book','a hotel / a restaurant','يحجز'],['give','a presentation','يقدّم عرضاً'],['have','dinner','يتناول العشاء'],['go','shopping / sightseeing','يتسوق / يتجول'],['suggest','some places to visit','يقترح']],['الفعل','الاسم','المعنى'])},
  {h:'الطلب والعرض والاقتراح',ref:'ص 22–23',html:`${vt([['Could you book a hotel for me, please?','طلب مهذب'],["I'd like to give a presentation on Saturday.",'رغبة'],["I'll meet you at the airport.",'عرض أو وعد'],['We can have dinner at 9 o’clock.','اقتراح']],['English','الاستعمال'])}`},
  {note:'<b>توضيح للمتدرب:</b> في الرسائل نكتب الوقت بنظام 24 ساعة غالباً: <span class="en">18.35</span> = <span class="en">6.35 p.m.</span>'},
  {h:'رسالة الجدول',ref:'ص 23',html:`<p>نبدأ بالشكر، ثم نشرح الجدول يوماً يوماً:</p>${eb(['Dear Anna,','Thanks for your email.',"I'm writing about the schedule for your visit to Riyadh.","I'll meet you at the airport on Friday evening and take you to your hotel.",'On Saturday morning, you can give your presentation at 10.00.','Best regards,'])}`},
  {h:'تمارين الكتاب',ref:'ص 22–23',html:
   bk(1,'ص 22','اقرأ رسالة الزائرة وصحّح الأخطاء في الملاحظات.',['arrives Fri 14 Nov (not 4 Nov), 18.35','returns Mon 17 Nov, 13.25','needs hotel – three nights (not two)','presentation – one hour, Saturday morning','wants to go shopping and sightseeing (not "but not sightseeing")'])+
   bk(2,'ص 22','جِد الأفعال التي تأتي مع الأسماء.',['1 plan (مثال)','2 arrives','3 meet','4 give','5 have','6 book','7 go','8 suggest'])+
   bk(3,'ص 22–23','خطط جدول الزائرة مستعيناً بالدليل السريع، ثم قارن جدولك بجدول زوج آخر.',null,'إجابات مفتوحة؛ تأكد: العرض صباح السبت، والجولات 09.00 أو 13.00 أو 17.00، والعودة الاثنين 13.25.')+
   bk(4,'ص 23','اكتب رسالة للزائرة تشرح جدولها.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الفعل والاسم',title:'plan · book · give · have',q:'ماذا نفعل بـ presentation؟',ref:'ص 22',
   art:art(`${[['book a hotel','يحجز'],['give a presentation','يقدّم عرضاً'],['have dinner','يتعشّى'],['go sightseeing','يتجول سائحاً']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="${30+(i%2)*160}" y="${60+Math.floor(i/2)*90}" width="140" height="66" rx="12" fill="${i%3===0?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(100+(i%2)*160,99+Math.floor(i/2)*90,x[0],{fs:13,w:700})}</g>`).join('')}`,'أفعال وأسماء'),
   cap:'أربعة أفعال مع أسمائها. مرّر المؤشر على كل منها.',side:[{tip:`نقول ${e('give a presentation')}، لا ${e('make a presentation')} في هذا الدرس.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'Could you ___ a hotel for me?',o:['book','give'],a:0},{s:"I'd like to ___ a presentation.",o:['give','go'],a:0},{s:'We can ___ dinner at 9.',o:['have','book'],a:0},{s:"I'd like to ___ shopping.",o:['go','have'],a:0}]}),title:'مختبر مصغّر: الفعل'}]},
  {st:2,short:'Could you · I\'ll',title:'الطلب والعرض',q:'كيف تطلب من زميل أن يحجز لك مطعماً؟',ref:'ص 22–23',
   art:art(`<g data-tip="Could you …? طلب مهذب"><rect x="20" y="60" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,91,'Could you book a restaurant, please?',{fs:14,w:700})}</g>
    <g data-tip="I'll … عرض أو وعد"><rect x="20" y="130" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,161,"I'll meet you at the airport.",{fs:14,w:700})}</g>
    <g data-tip="We can … اقتراح"><rect x="20" y="200" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,231,'We can go shopping on Sunday.',{fs:14,w:700})}</g>`,'requests offers'),
   cap:'طلب وعرض واقتراح. مرّر المؤشر على كل سطر.',side:[{tip:`${e("I'll")} = ${e('I will')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'ما الجملة المناسبة؟',cases:[{q:'تطلب بلطف.',opts:[['Could you meet me at the airport?',1],['Meet me at the airport!',0]]},{q:'تعرض المساعدة.',opts:[["I'll book the hotel for you.",1],['You book the hotel.',0]]}]}),title:'مختبر مصغّر: الطلب'}]},
  {recap:['plan a schedule، book a hotel، give a presentation، have dinner، go shopping.','Could you …, please?',"I'd like to …","I'll … / We can …",'Dear … · Thanks for your email. · Best regards.']}
 ],
 lab:lab4b,
 examples:[
  {title:'مثال 1: طلب مهذب',ref:'ص 22',q:`<p>اطلب من زميل أن يحجز لك فندقاً ثلاث ليالٍ.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('Could you')}.`},{t:`الخطوة 2: ${e('book a hotel for me for three nights')}`},{t:`الخطوة 3: ${e('Could you book a hotel for me for three nights, please?')}`,final:true}]},
  {title:'مثال 2: عرض',ref:'ص 23',q:`<p>اكتب أنك ستستقبل الزائرة في المطار يوم الجمعة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: العرض: ${e("I'll")}.`},{t:`الخطوة 2: ${e('meet you at the airport')}`},{t:`الخطوة 3: ${e("I'll meet you at the airport on Friday.")}`,final:true}]},
  {title:'مثال 3: سطر في الجدول',ref:'ص 23',q:`<p>صباح الأحد 9.00: جولة بالحافلة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('On Sunday morning,')}`},{t:`الخطوة 2: ${e('you can go on a bus tour at 9.00')}`},{t:`الخطوة 3: ${e('On Sunday morning, you can go on a bus tour at 9.00.')}`,final:true}]}
 ],
 quiz:[
  {q:'___ a hotel',o:['book','give','go','have'],c:0,e:'book a hotel.'},
  {q:'___ a presentation',o:['give','go','book','meet'],c:0,e:'give a presentation.'},
  {q:'___ you meet me at the airport?',o:['Could','Would like','Will to','Are'],c:0,e:'Could you …?'},
  {q:"I'll =",o:['I will','I would','I shall not','I all'],c:0,e:"I'll = I will."},
  {q:'18.35 =',o:['6.35 p.m.','8.35 p.m.','6.35 a.m.','4.35 p.m.'],c:0,e:'18 − 12 = 6.'},
  {q:"I'd like to ___ shopping.",o:['go','do','make','have'],c:0,e:'go shopping.'}
 ]
});
})(PLCBOOK);

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
/* ===== مختبرات «شرح القاعدة» الوحدة 4 ===== */
const TM4={a:[9,0],b:[9,15],c:[9,20],d:[9,30],e:[8,45],f:[10,50],g:[12,0]};
const LAB141A={title:'قل الوقت بطريقتين',w:(el,B)=>N.labB(el,B,{intro:'اختر الوقت، وشاهد الساعة والطريقتين: past / to، والأرقام.',
 controls:[{k:'t',label:'الوقت',opts:Object.keys(TM4).map(k=>[k,dig(...TM4[k])])}],
 out:({t})=>{const [h,m]=TM4[t],s=say(h,m),dg=m===0?(h===12?'twelve noon':NUM[h%12]+" o'clock"):`${NUM[h%12]} ${m<10?'oh '+NUM[m]:({15:'fifteen',20:'twenty',30:'thirty',45:'forty-five',50:'fifty'})[m]}`;
  const pw=m===0?'':m<=30?'past':'to';
  return{svg:`<svg viewBox="0 0 180 180" width="170">${clock(h,m)}</svg>`,pieces:[[`It's ${s}.`,'n',pw?(pw==='past'?'past = بعد (حتى 30 دقيقة)':'to = إلا (بعد 30 دقيقة)'):"o'clock = تماماً"],[`It's ${dg}.`,'q','بالأرقام']],say:`It's ${s}. It's ${dg}.`,why:`${e('past')} بعد الساعة حتى نصفها، و ${e('to')} قبل الساعة التالية..`}}})};
const LAB141B={title:'فروق التوقيت',w:(el,B)=>N.labB(el,B,{intro:'الساعة في الرياض 10:30 صباحاً. اختر المدينة، وشاهد الوقت فيها والسؤال والجواب.',
 controls:[{k:'c',label:'المدينة',opts:GMT.filter(g=>g[0]!=='Riyadh').map(g=>[g[0],g[0]])}],
 out:({c})=>{const off=GMT.find(g=>g[0]===c)[1]-3;let H=(10.5+off+24)%24;const h=Math.floor(H),m=Math.round((H-h)*60),ap=h<12?'a.m.':'p.m.';
  return{svg:`<svg viewBox="0 0 180 180" width="170">${clock(h,m)}</svg>`,pieces:[["When it's half past ten in Riyadh,",'x',''],['what time is it in '+c+'?','q','السؤال'],[`It's ${say(h,m)} ${ap}`,'n',(off>0?'+':'')+off+' ساعة']],say:`When it's half past ten in Riyadh, what time is it in ${c}? It's ${say(h,m)}.`,why:`${e('GMT')} توقيت غرينتش (لندن). الرياض ${e('GMT +3')}، أي متقدمة على لندن ثلاث ساعات. و ${e('a.m.')} قبل الظهر، و ${e('p.m.')} بعده.`}}})};
const TP4={t:['at','7.30','الساعة'],l:['at','lunchtime','وقت محدد'],d:['on','Saturday','اليوم'],da:['on','Sunday afternoons','اليوم وجزؤه'],p:['in','the morning','جزء من اليوم'],r:['from','2.00 to 5.00','من … إلى'],a:['around','5.00','تقريباً']};
const LAB141C={title:'at أم on أم in؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الزمن، وشاهد حرف الجر المناسب له.',
 controls:[{k:'x',label:'الزمن',opts:Object.keys(TP4).map(k=>[k,TP4[k][1]])}],
 out:({x})=>{const [p,w,ar]=TP4[x];return{pieces:[['I work','x',''],[p,'k',ar],[w+'.','n','']],say:`I work ${p} ${w}.`,why:`${e('at')} مع الساعة، و ${e('on')} مع الأيام، و ${e('in')} مع أجزاء اليوم: ${e('at 9.00 · on Saturday · in the morning')}`}}})};
const CL4={plan:['plan','a schedule','يخطط جدولاً'],meet:['meet','someone at the airport','يستقبل'],book:['book','a hotel','يحجز'],give:['give','a presentation','يقدّم عرضاً'],have:['have','dinner','يتناول'],go:['go','sightseeing','يتجول']};
const LAB142A={title:'الفعل مع الاسم',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، وشاهد الاسم الذي يأتي معه عادة.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(CL4).map(k=>[k,k])}],
 out:({v})=>{const [a,b,ar]=CL4[v];return{pieces:[[a,'k',ar],[b,'n','الاسم']],say:`${a} ${b}`,why:`بعض الأفعال لها أسماء تأتي معها عادة، فنحفظهما معاً: ${e('book a hotel · give a presentation')}`}}})};
const FN4={req:['Could you','book a hotel for me, please?','طلب مهذب','q'],wish:["I'd like to",'give a presentation on Saturday.','رغبة','k'],off:["I'll",'meet you at the airport.','عرض أو وعد','n'],sug:['We can','have dinner at 9 o’clock.','اقتراح','k']};
const LAB142B={title:'طلب أم رغبة أم عرض أم اقتراح؟',w:(el,B)=>N.labB(el,B,{intro:'اختر ما تريد أن تفعله في رسالتك، وشاهد العبارة المناسبة.',
 controls:[{k:'f',label:'أريد',opts:[['req','أطلب'],['wish','أعبّر عن رغبة'],['off','أعرض أو أعد'],['sug','أقترح']]}],
 out:({f})=>{const [a,b,ar,c]=FN4[f];return{pieces:[[a,c,ar],[b,'x','الفعل كما هو']],say:`${a} ${b}`,why:`بعد ${e('Could you · would like to · will · can')} الفعل كما هو.`}}})};
const DAY4={fri:'Friday',sat:'Saturday',sun:'Sunday',mon:'Monday'};
const LAB142C={title:'جملة الجدول',w:(el,B)=>N.labB(el,B,{intro:'اختر النشاط من الجدول، وشاهد الجملة التي تكتبها له في الرسالة.',
 controls:[{k:'a',label:'النشاط',opts:ACT.map((a,i)=>[String(i),a[0]])}],
 out:({a})=>{const [n,d,t]=ACT[+a],h=Math.floor(t),m=Math.round((t-h)*60),tm=`${h}.${String(m).padStart(2,'0')}`,pt=h<12?'morning':h<17?'afternoon':'evening';
  return{pieces:[[`On ${DAY4[d]} ${pt},`,'q','اليوم وجزؤه'],['you can','k','اقتراح'],[n[0].toLowerCase()+n.slice(1),'n','النشاط'],['at '+tm+'.','x','الساعة']],say:`On ${DAY4[d]} ${pt}, you can ${n[0].toLowerCase()+n.slice(1)} at ${tm}.`,why:`نشرح الجدول يوماً يوماً: ${e('on')} مع اليوم، و ${e('at')} مع الساعة. وفي الرسائل نكتب الوقت بنظام 24 ساعة غالباً.`}}})};
const R141=N.rule({title:'قول الوقت، وفروق التوقيت، وحروف الجر للزمن',ref:'ص 20–21',
 intro:`في هذا الدرس تتكلم عن الوقت مع زملاء في بلدان أخرى. نشرح طريقتي قول الوقت، ثم فروق التوقيت بين المدن، ثم حروف الجر مع الأوقات والأيام.`,
 parts:[
 {t:'قول الوقت',short:'past · to',old:[1],q:'ما الفرق بين quarter past nine و quarter to nine؟',ref:'ص 20',
  lead:`للوقت طريقتان: بالأرقام كما تراها على الساعة الرقمية، أو بـ ${e('past')} و ${e('to')} كما في الساعة ذات العقارب.`,
  points:[`<b>بالأرقام:</b> الساعة ثم الدقائق: ${e('9.15 = nine fifteen')}`,`<b>${e('past')}</b> بعد الساعة، حتى 30 دقيقة: ${e('9.20 = twenty past nine')}`,`<b>${e('to')}</b> قبل الساعة التالية، بعد 30 دقيقة: ${e('8.45 = quarter to nine')}`,
   `${e('quarter')} ربع، و ${e('half')} نصف، و ${e("o'clock")} تماماً.`,`${e('a.m.')} قبل الظهر، و ${e('p.m.')} بعده. و ${e('12.00 = twelve midday / twelve noon')}`,`<b>السؤال:</b> ${e('What time is it?')} والجواب ${e("It's half past ten.")}`],
  grid:{head:['الرقم','نقول'],rows:[['9.00',"nine o'clock"],['9.15','quarter past nine / nine fifteen'],['9.20','twenty past nine / nine twenty'],['9.30','half past nine / nine thirty'],['8.45','quarter to nine / eight forty-five'],['12.00','twelve midday / twelve noon']]},
  pairs:[['quarter past to nine','quarter to nine','8.45 = إلا ربع: to.'],["It's nine o'clock and fifteen.","It's quarter past nine.",'نقول quarter past.']],
  art:art(`<g data-tip="quarter past nine = 9.15">${clock(9,15,58,90,100)}${TL(90,186,'quarter past nine',{fs:13,w:700})}</g><g data-tip="quarter to nine = 8.45">${clock(8,45,58,270,100)}${TL(270,186,'quarter to nine',{fs:13,w:700})}</g>`,'ساعتان'),cap:'ساعتان من رسمنا. مرّر المؤشر على كل منهما.',labs:[LAB141A,{title:'الوقت',w:(el,B)=>N.cases(el,B,{intro:'كيف تقول؟',cases:[{q:'7.30',opts:[['half past seven',1],['half to eight',0]]},{q:'10.40',opts:[['twenty to eleven',1],['twenty past ten',0]]},{q:'12.00 (الظهر)',opts:[['twelve midday',1],['twelve midnight',0]]}]})}]},
 {t:'فروق التوقيت',short:'GMT',old:[2],q:'إذا كانت الساعة 10.30 في الرياض، كم هي في لندن؟',ref:'ص 20',
  lead:`عندما تتصل بزميل في بلد آخر تحتاج أن تعرف الوقت عنده.`,
  points:[`${e('GMT')} توقيت غرينتش (لندن). الرياض ${e('GMT +3')}، أي متقدمة على لندن ثلاث ساعات.`,`<b>السؤال:</b> ${e("When it's half past ten in Riyadh, what time is it in London?")}`,`<b>الجواب:</b> ${e("It's half past seven.")}`],
  html:dl([['A','What time is it now?'],['B',"It's half past ten."],['A',"When it's half past ten in Riyadh, what time is it in London?"],['B',"It's half past seven."]]),
  art:art(`${GMT.map((g,i)=>`<g data-tip="${g[0]}: GMT ${g[1]>=0?'+':'−'}${Math.abs(g[1])} (${g[1]===0?'London':g[1]>0?Math.abs(g[1])+' hours ahead of London':Math.abs(g[1])+' hours behind London'})"><rect x="40" y="${20+i*38}" width="280" height="32" rx="10" fill="${g[1]===0?C.yel:g[1]>0?C.paper:'#dbe8f5'}" stroke="${C.ink}" stroke-width="1.5"/>${TL(130,41+i*38,g[0],{fs:13,w:700})}${TL(260,41+i*38,'GMT '+(g[1]>0?'+':g[1]<0?'−':'')+(g[1]?Math.abs(g[1]):''),{fs:13,w:700})}</g>`).join('')}`,'GMT'),cap:'المدن ومقدار فرقها عن لندن. مرّر المؤشر على كل عمود.',labs:[LAB141B,{title:'GMT',w:(el,B)=>N.cases(el,B,{intro:'احسب:',cases:[{q:"It's 9.00 in London. What time is it in Riyadh?",opts:[['12.00',1],['6.00',0]]},{q:"It's 3.00 p.m. in Riyadh. What time is it in Tokyo?",opts:[['9.00 p.m.',1],['9.00 a.m.',0]]}]})}]},
 {t:'حروف الجر للزمن',short:'at · on · in',old:[3],q:'لماذا نقول at 9.00 لكن on Saturday؟',ref:'ص 21',
  lead:`لنقول متى نفعل شيئاً نضع قبل الوقت حرف جر، ويختلف حسب نوع الوقت.`,
  points:[`${e('at')} مع الساعة ووقت محدد: ${e('at 9.00 · at lunchtime')}`,`${e('on')} مع الأيام: ${e('on Saturday · on Sunday afternoons')}`,`${e('in')} مع أجزاء اليوم: ${e('in the morning · in the evening')}`,`${e('from … to')} للمدة: ${e('from 2.00 to 5.00')}`,`${e('around')} أو ${e('about')} تقريباً: ${e('around 5.00')}`],
  grid:{head:['حرف الجر','مع','مثال'],rows:[['at','الساعة','at 9.00 · at lunchtime'],['on','الأيام','on Saturday · on Sunday afternoons'],['in','أجزاء اليوم','in the morning · in the evening'],['from … to','المدة','from 2.00 to 5.00'],['around / about','تقريباً','around 5.00']]},
  ex:['I usually arrive at 7.30.',"I don't work on Fridays.",'We have lunch from 1.00 to 1.30.'],
  pairs:[['in Saturday','on Saturday','مع الأيام: on.'],['at the morning','in the morning','مع أجزاء اليوم: in.']],
  art:art(`${[['at 7.30','at + الساعة'],['on Sunday','on + اليوم'],['in the morning','in + جزء اليوم'],['from 1.00 to 1.30','من … إلى'],['around 5.00','تقريباً']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="40" y="${26+i*52}" width="280" height="42" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,53+i*52,x[0],{fs:15,w:700})}</g>`).join('')}`,'حروف الجر للزمن'),cap:'خمس عبارات زمنية. مرّر المؤشر على كل منها.',labs:[LAB141C,{title:'حرف الجر',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'I start work ___ 7.30.',o:['at','on'],a:0},{s:"I don't work ___ Fridays.",o:['on','at'],a:0},{s:'The office is closed ___ 12.00 to 2.00.',o:['from','at'],a:0}]})}]}
 ]});
B.lesson({
 id:'u4-l1',unit:4,order:1,pages:'20–21',
 title:'Part A: Telling the time — قول الوقت',
 summary:'قول الوقت (past / to، quarter، half، o\'clock، midday)، وصيغة الأرقام (9.30، a.m. / p.m.)، وفروق التوقيت (GMT)، وحروف الجر للزمن (at 9.00، on Saturday، from … to، around)، وساعات العمل والغداء في بلدان مختلفة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 20–21',html:`<p>تقول الوقت وتسأل عنه وتتحدث عن يوم عملك. ستتعلم:</p><ol><li>قول الوقت بطريقتين.</li><li>فروق التوقيت بين المدن.</li><li>حروف الجر للزمن.</li></ol>`},
  ...R141.theory,
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
  ...R141.stations,
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
const R142=N.rule({title:'الفعل مع الاسم، والطلب والعرض والاقتراح، ورسالة الجدول',ref:'ص 22–23',
 intro:`في هذا الدرس تخطط جدول زيارة لزائر وتكتب له رسالة. نشرح الأفعال التي تأتي مع أسماء معينة، ثم عبارات الطلب والرغبة والعرض والاقتراح، ثم ترتيب رسالة الجدول.`,
 parts:[
 {t:'الفعل مع الاسم',short:'plan · book · give',old:[1],q:'ما الفعل الذي يأتي مع presentation؟',ref:'ص 22',
  lead:`بعض الأفعال تأتي مع أسماء معينة عادة، فنحفظهما معاً كوحدة واحدة.`,
  points:[`${e('plan a schedule')} يخطط جدولاً، و ${e('book a hotel')} يحجز فندقاً.`,`${e('give a presentation')} يقدّم عرضاً، و ${e('have dinner')} يتناول العشاء.`,`${e('go shopping · go sightseeing')} يتسوق، يتجول.`],
  grid:{head:['الفعل','الاسم','المعنى'],rows:[['plan','a schedule','يخطط جدولاً'],['meet','someone at the airport','يستقبل'],['book','a hotel / a restaurant','يحجز'],['give','a presentation','يقدّم عرضاً'],['have','dinner','يتناول العشاء'],['go','shopping / sightseeing','يتسوق / يتجول'],['suggest','some places to visit','يقترح']]},
  art:art(`${[['book a hotel','يحجز'],['give a presentation','يقدّم عرضاً'],['have dinner','يتعشّى'],['go sightseeing','يتجول سائحاً']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="${30+(i%2)*160}" y="${60+Math.floor(i/2)*90}" width="140" height="66" rx="12" fill="${i%3===0?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(100+(i%2)*160,99+Math.floor(i/2)*90,x[0],{fs:13,w:700})}</g>`).join('')}`,'أفعال وأسماء'),cap:'أربعة أفعال مع أسمائها. مرّر المؤشر على كل منها.',labs:[LAB142A,{title:'الفعل',w:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'Could you ___ a hotel for me?',o:['book','give'],a:0},{s:"I'd like to ___ a presentation.",o:['give','go'],a:0},{s:'We can ___ dinner at 9.',o:['have','book'],a:0},{s:"I'd like to ___ shopping.",o:['go','have'],a:0}]})}]},
 {t:'الطلب والعرض والاقتراح',short:'Could you · I\'ll · We can',old:[2],q:'كيف تطلب من زميلك أن يحجز لك فندقاً؟',ref:'ص 22–23',
  lead:`في رسائل الترتيب نطلب ونعرض ونقترح. ولكل منها عبارة، وبعدها الفعل كما هو.`,
  points:[`<b>طلب مهذب:</b> ${e('Could you book a hotel for me, please?')}`,`<b>رغبة:</b> ${e("I'd like to give a presentation on Saturday.")}`,`<b>عرض أو وعد:</b> ${e("I'll meet you at the airport.")} و ${e("I'll")} = ${e('I will')}`,`<b>اقتراح:</b> ${e('We can have dinner at 9 o’clock.')}`],
  grid:{head:['English','الاستعمال'],rows:[['Could you book a hotel for me, please?','طلب مهذب'],["I'd like to give a presentation on Saturday.",'رغبة'],["I'll meet you at the airport.",'عرض أو وعد'],['We can have dinner at 9 o’clock.','اقتراح']]},
  pairs:[["I'll to meet you.","I'll meet you.",'بعد will الفعل كما هو.'],['Could you booking a hotel?','Could you book a hotel?','بعد Could you الفعل كما هو.']],
  art:art(`<g data-tip="Could you …? طلب مهذب"><rect x="20" y="60" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,91,'Could you book a restaurant, please?',{fs:14,w:700})}</g>
    <g data-tip="I'll … عرض أو وعد"><rect x="20" y="130" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,161,"I'll meet you at the airport.",{fs:14,w:700})}</g>
    <g data-tip="We can … اقتراح"><rect x="20" y="200" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,231,'We can go shopping on Sunday.',{fs:14,w:700})}</g>`,'requests offers'),cap:'طلب وعرض واقتراح. مرّر المؤشر على كل سطر.',labs:[LAB142B,{title:'الطلب',w:(el,B)=>N.cases(el,B,{intro:'ما الجملة المناسبة؟',cases:[{q:'تطلب بلطف.',opts:[['Could you meet me at the airport?',1],['Meet me at the airport!',0]]},{q:'تعرض المساعدة.',opts:[["I'll book the hotel for you.",1],['You book the hotel.',0]]}]})}]},
 {t:'رسالة الجدول',short:'رسالة الجدول',q:'بماذا تبدأ رسالة الجدول؟',ref:'ص 23',
  lead:`رسالة الجدول لها ترتيب يسهل قراءتها: شكر، ثم سبب الرسالة، ثم الجدول يوماً يوماً، ثم الختام.`,
  points:[`<b>البداية:</b> ${e('Dear Anna,')} ثم ${e('Thanks for your email.')}`,`<b>السبب:</b> ${e("I'm writing about the schedule for your visit.")}`,`<b>الجدول يوماً يوماً</b> مع ${e('on')} لليوم و ${e('at')} للساعة.`,`<b>الختام:</b> ${e('Best regards,')}`,`في الرسائل نكتب الوقت بنظام 24 ساعة غالباً: ${e('18.35 = 6.35 p.m.')}`],
  html:eb(['Dear Anna,','Thanks for your email.',"I'm writing about the schedule for your visit to Riyadh.","I'll meet you at the airport on Friday evening and take you to your hotel.",'On Saturday morning, you can give your presentation at 10.00.','Best regards,']),
  labs:[LAB142C]}
 ]});
B.lesson({
 id:'u4-l2',unit:4,order:2,pages:'22–23',
 title:'Part B: Planning schedules — تخطيط الجداول',
 summary:'قراءة رسالة طلبات زائر وتصحيح الملاحظات، والأفعال مع الأسماء (plan a schedule، book a hotel، give a presentation، have dinner، go shopping)، والطلب المهذب (Could you …? I\'d like to …)، والاقتراح والعرض (We can … / I\'ll …)، وتخطيط جدول وكتابة رسالة تشرحه.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 22–23',html:`<p>تخطط برنامج زيارة لضيف. ستتعلم:</p><ol><li>قراءة رسالة طلبات.</li><li>الأفعال مع الأسماء.</li><li>الطلب والعرض والاقتراح.</li><li>كتابة رسالة الجدول.</li></ol>`},
  ...R142.theory,
  {h:'تمارين الكتاب',ref:'ص 22–23',html:
   bk(1,'ص 22','اقرأ رسالة الزائرة وصحّح الأخطاء في الملاحظات.',['arrives Fri 14 Nov (not 4 Nov), 18.35','returns Mon 17 Nov, 13.25','needs hotel – three nights (not two)','presentation – one hour, Saturday morning','wants to go shopping and sightseeing (not "but not sightseeing")'])+
   bk(2,'ص 22','جِد الأفعال التي تأتي مع الأسماء.',['1 plan (مثال)','2 arrives','3 meet','4 give','5 have','6 book','7 go','8 suggest'])+
   bk(3,'ص 22–23','خطط جدول الزائرة مستعيناً بالدليل السريع، ثم قارن جدولك بجدول زوج آخر.',null,'إجابات مفتوحة؛ تأكد: العرض صباح السبت، والجولات 09.00 أو 13.00 أو 17.00، والعودة الاثنين 13.25.')+
   bk(4,'ص 23','اكتب رسالة للزائرة تشرح جدولها.',null)}
 ],
 stations:[
  {intro:true},
  ...R142.stations,
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

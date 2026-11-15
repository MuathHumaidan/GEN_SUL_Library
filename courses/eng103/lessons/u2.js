/* الوحدة 2 — Work: 1 Routines (ص 10–11) · 2 Plans (ص 12–13) · 3 New job (ص 14–15) · Review Unit A (ص 16–19)
   الشرح والأمثلة والمختبرات من إعدادنا؛ تمارين الكتاب تفاعلياً بجملها وصورها في bxd2.js. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const ING=v=>{const w=v.split(' ');let x=w[0];if(/ie$/.test(x))x=x.slice(0,-2)+'ying';else if(/[^e]e$/.test(x)&&x!=='be')x=x.slice(0,-1)+'ing';else if(/^(run|stop|plan|put|get|sit|swim)$/.test(x))x=x+x.slice(-1)+'ing';else x+='ing';return [x,...w.slice(1)].join(' ')};
const S3=v=>{const w=v.split(' ');let x=w[0];if(/(s|sh|ch|x|o)$/.test(x))x+='es';else if(/[^aeiou]y$/.test(x))x=x.slice(0,-1)+'ies';else if(x==='have')x='has';else x+='s';return [x,...w.slice(1)].join(' ')};

/* ========== 1 Routines ========== */
const ROS={Mark:[['check the safety equipment','repair a broken pump'],['supervise the divers','inspect the pipes'],['write the daily report','attend a training course']],Lena:[['operate the main crane','train new crane operators'],['work in the control room','work on deck'],['check the weather report','help the deck crew']],Omar:[['test the generators','repair a power line'],['do maintenance work','supervise the electricians'],['order spare parts','write a safety report']]};
const SL=['06.00–07.45','08.00–09.45','10.00–10.45'];
function lab1(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">جدول المناوبة اليوم</h3><p class="sub">جدول من إعدادنا مبني على التمرين 4 ص 10: اليوم تغيّرت بعض المهام بسبب مرض أحد العمال. اختر العامل والوقت.</p>
  <label class="sub">العامل</label><select id="w">${Object.keys(ROS).map(k=>`<option>${k}</option>`).join('')}</select>
  <label class="sub">الوقت</label><select id="s">${SL.map((x,i)=>`<option value="${i}">${x.replace('–',' to ')}</option>`).join('')}</select><div id="tb"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">عادة… لكن اليوم</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا جاء الفعل الأول بالمضارع البسيط والثاني بالمضارع المستمر؟</li><li>ما الكلمة التي تدل على العادة؟ وما الكلمة التي تدل على أن التغيير مؤقت؟</li><li>غيّر العامل: متى يضاف s للفعل؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const w=$('#w').value,s=+$('#s').value,[u,t]=ROS[w][s];
  $('#tb').innerHTML=`<table class="rt" style="margin-top:8px"><thead><tr><th></th><th>usually</th><th>today</th></tr></thead><tbody>${ROS[w].map((r,i)=>`<tr${i===s?' style="background:var(--accent-soft,#e3f1ea)"':''}><td>${SL[i]}</td><td lang="en"><s>${r[0]}</s></td><td lang="en">${r[1]}</td></tr>`).join('')}</tbody></table>`;
  $('#o').innerHTML=dl([['A',`What does ${w} usually do from ${SL[s].replace('–',' to ')}?`],['B',`${w==='Lena'?'She':'He'} usually ${S3(u)}. But not today.`],['A',`What's ${w==='Lena'?'she':'he'} doing today?`],['B',`${w==='Lena'?"She's":"He's"} ${ING(t)}.`]])};
 $('#w').onchange=sh;$('#s').onchange=sh;sh();
}
const PSU={routine:['I usually go home on my leave.','عادة متكررة'],job:['He operates the drilling equipment.','وصف وظيفة'],proc:['The water flows into the tank.','عملية (كيف يعمل شيء)']};
const PCO={now:["We're working very hard at the moment.",'يحدث الآن'],temp:["He's operating the main crane today.",'مؤقت حول الآن'],plan:["I'm flying to France tomorrow.",'خطة قريبة']};
const LAB2A={title:'المضارع البسيط أم المضارع المستمر؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الاستعمال، وشاهد الجملة والزمن.',
 controls:[{k:'u',label:'الاستعمال',opts:[['routine','عادة'],['job','وصف وظيفة'],['proc','عملية'],['now','الآن'],['temp','مؤقت'],['plan','خطة قريبة']]}],
 out:({u})=>{const s=PSU[u],c=PCO[u],x=s||c;return{pieces:[[x[0],s?'k':'q',s?'المضارع البسيط':'المضارع المستمر']],say:x[0],why:`${x[1]}: ${s?'المضارع البسيط (الفعل، ومع he/she/it + s).':'المضارع المستمر (am/is/are + ing).'}`}}})};
const JD={op:['operate','the cranes on the main deck'],ma:['maintain','the drilling equipment'],re:['repair','the electrical equipment'],su:['supervise','three electricians'],rp:['report','to the Maintenance Supervisor']};
const LAB2B={title:'وصف الوظيفة: report to · supervise',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل والفاعل، وشاهد جملة وصف الوظيفة.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(JD).map(k=>[k,JD[k][0]])},{k:'p',label:'الفاعل',opts:[['i','I'],['he','He']]}],
 out:({v,p})=>{const [vb,o]=JD[v];const f=p==='he'?S3(vb):vb;return{pieces:[[p==='he'?'He':'I','x','الفاعل'],[f,'k',p==='he'?'الفعل + s':'الفعل'],[o,'n','']],say:`${p==='he'?'He':'I'} ${f} ${o}.`,why:v==='rp'?`${e('report to')} = مديري المباشر هو… (أرفع تقاريري إليه).`:v==='su'?`${e('supervise')} = أشرف على… (يعملون تحت إدارتي).`:'وصف الوظيفة بالمضارع البسيط لأنه عمل ثابت يتكرر.'}}})};
const R1=N.rule({title:'المضارع البسيط والمضارع المستمر، ووصف الوظيفة',ref:'ص 10–11، ص 100',
 intro:`عمال المنصة البحرية لهم <b>روتين</b> ثابت، لكن الجدول قد يتغير يوماً. نصف الثابت بالمضارع البسيط، والمؤقت أو الجاري الآن بالمضارع المستمر.`,
 parts:[
 {t:'متى المضارع البسيط ومتى المستمر؟',short:'usually … / today …',old:[1],q:'لماذا نقول He usually supervises لكن He\'s operating the crane today؟',ref:'ص 10، ص 100',
  lead:`لكل زمن ثلاثة استعمالات في هذا الدرس.`,
  subs:[{h:'المضارع البسيط',points:[`<b>العادة والروتين:</b> ${e('I usually go home to Nigeria.')}`,`<b>وصف الوظيفة:</b> ${e('The Chief Electrician supervises four electricians.')}`,`<b>العمليات:</b> ${e('The water flows from the tank into the pipe.')}`,`مع ${e('he / she / it')}: الفعل + ${e('s')}، والسؤال والنفي بـ ${e('does')}.`]},
   {h:'المضارع المستمر',points:[`<b>يحدث الآن:</b> ${e("We're working very hard at the moment.")}`,`<b>مؤقت حول الآن:</b> ${e("He's operating the main crane today.")}`,`<b>خطة قريبة:</b> ${e("I'm going on leave tomorrow.")}`,`الصيغة: ${e('am / is / are')} + الفعل بـ ${e('ing')}.`]}],
  grid:{head:['الكلمة الدالة','الزمن','مثال'],rows:[['usually · every day · always','المضارع البسيط','He usually works in the control room.'],['now · at the moment · today','المضارع المستمر',"Today he's working on deck."],['tomorrow · next week','المستمر للخطة',"I'm flying to Norway tomorrow."]]},
  pairs:[["He's usually supervising the crew.",'He usually supervises the crew.','العادة بالمضارع البسيط.'],['Today he operates the crane.',"Today he's operating the crane.",'المؤقت بالمستمر.']],labs:[LAB2A]},
 {t:'وصف الوظيفة ومفردات العمل البحري',short:'I report to …',old:[2],q:'كيف تقول من مديرك ومن تشرف عليه؟',ref:'ص 10–11',
  lead:`وصف الوظيفة يجيب ثلاثة أسئلة: ماذا تفعل؟ من تشرف عليه؟ لمن ترفع تقاريرك؟`,
  points:[`<b>الأفعال:</b> ${e('operate · maintain · repair · supervise · report to')}`,`<b>الأسئلة:</b> ${e("What's your job? · What do you do? · Who do you supervise? · Who do you report to?")}`,`<b>الجواب:</b> ${e("I'm an Assistant Driller. I operate the drilling equipment. I report to the Driller.")}`,`<b>متضادات:</b> ${e('onshore ≠ offshore · on duty ≠ off duty')}، و ${e('on leave = on holiday')}`,`<b>نظام العمل:</b> ${e('two weeks on, two weeks off')} = أسبوعان عمل ثم أسبوعان إجازة.`],
  grid:{head:['السؤال','الجواب'],rows:[['What do you do?','I operate the cranes.'],['Who do you supervise?','I supervise the Derrick Man.'],['Who do you report to?','I report to the Driller.']]},
  pairs:[['I report the Driller.','I report to the Driller.','report to.'],['Who do you report?','Who do you report to?','to في آخر السؤال.']],labs:[LAB2B]}
 ]});
B.lesson({
 id:'u2-l1',unit:2,order:1,pages:'10–11',
 title:'1 Routines — الروتين',
 summary:'العمل على منصة نفط بحرية: المضارع البسيط للعادة ووصف الوظيفة والعمليات، والمضارع المستمر لما يحدث الآن أو مؤقتاً أو للخطط القريبة، ووصف الوظيفة بـ operate و maintain و supervise و report to.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 10–11',html:`<p>تتعرف على عمال منصة نفط بحرية وجداول عملهم. ستتعلم:</p><ol><li>الفرق بين المضارع البسيط والمضارع المستمر.</li><li>وصف وظيفتك ومن تشرف عليه ولمن ترفع تقاريرك.</li><li>مفردات العمل: ${e('offshore, on duty, on leave')}.</li></ol>`},
  ...R1.theory,
  {h:'تمارين الكتاب',ref:'ص 10–11',html:
   bk(1,'ص 10','هل تحب العمل على منصة نفط بحرية؟ لماذا؟ ناقش.',null)+
   bk(2,'ص 10','استمع إلى مكالمة Tore و Ken وأكمل المعلومات.',['Tore: on duty 2 weeks · on leave 2 weeks','Ken: on duty 3 weeks · on leave 3 weeks'])+
   bk(3,'ص 10','استمع مرة أخرى وأكمل الحوار.',["1 're working","2 'm going",'3 are you going','4 go',"5 'm flying",'6 Do you work','7 do','8 work',"9 'm flying"])+
   bk(4,'ص 10','اسأل زميلك عن التغييرات في جدول العمل.',['Bill: usually inspects underwater pipes → today he\'s checking diving equipment · supervises divers → inspecting the blowout preventer · conducts the safety drill → attending a safety meeting','Tore: supervises the deck crew → operating the main crane · operates the main crane → training the new deck crew · works in the control room → working on deck','Adel: checks the generators → repairing a power line · does maintenance work → supervising electricians · tests electrical switches → writing a safety report'])+
   bk(5,'ص 11','استمع إلى عمال المنصة يتحدثون عن وظائفهم، وضع علامة على وظائفهم في الخرائط التنظيمية.',['Bill: Assistant Sub-Sea Engineer','Tore: Assistant Crane Operator','Ken: Assistant Driller','Adel: Chief Electrician'])+
   bk(6,'ص 11','أكمل أوصاف الوظائف بالصيغة الصحيحة للأفعال.',['1 repairs · maintains · reports','2 operates · maintains · reports','3 operates · supervises · reports','4 maintains · repairs · supervises · reports'])+
   bk(7,'ص 11','مثّل مع زميلك دور اثنين من العمال، واسألا عن وظيفتيكما.',null)+
   bk(8,'ص 11','اكتب مسمى وظيفتك ووصفاً قصيراً لها (أو وظيفة تريدها بعد التدريب).',null)+
   bk(9,'ص 11','اسأل زميلك عن وظيفته.',null)},
  {h:'الاستماع',ref:'ص 10–11',html:au('04','ص 10 — التمرينان 2 و 3','مكالمة Tore و Ken.')+au('05','ص 11 — التمرين 5','أربعة عمال يتحدثون عن وظائفهم.')}
 ],
 stations:[
  {intro:true},
  ...R1.stations,
  {recap:['He usually supervises the deck crew. (عادة)',"Today he's operating the main crane. (مؤقت)","I'm flying to France tomorrow. (خطة)",'I operate … · I supervise … · I report to …','onshore ≠ offshore · on duty ≠ off duty · on leave']}
 ],
 lab:lab1,
 examples:[
  {title:'مثال 1: عادة أم اليوم؟',ref:'ص 10',q:`<p>أكمل: ${e('Adel usually ___ (check) the generators, but today he ___ (repair) a power line.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('usually')} عادة: المضارع البسيط + s: ${e('checks')}.`},{t:`الخطوة 2: ${e('today')} تغيير مؤقت: ${e("he's repairing")}.`},{t:`الخطوة 3: ${e("Adel usually checks the generators, but today he's repairing a power line.")}`,final:true}]},
  {title:'مثال 2: وصف وظيفة',ref:'ص 11',q:`<p>أنت مشغّل رافعة مساعد، مديرك مشغّل الرافعة. صِف وظيفتك.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'm an Assistant Crane Operator.")}`},{t:`الخطوة 2: ${e('I operate and maintain the cranes.')}`},{t:`الخطوة 3: ${e('I report to the Crane Operator.')}`,final:true}]},
  {title:'مثال 3: السؤال عن المدير',ref:'ص 11',q:`<p>اسأل زميلك لمن يرفع تقاريره.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Who')} + ${e('do you')}.`},{t:`الخطوة 2: الفعل ${e('report')} وبعده ${e('to')} في الآخر.`},{t:`الخطوة 3: ${e('Who do you report to?')}`,final:true}]}
 ],
 quiz:[
  {q:'He usually ___ the deck crew.',o:['supervises','is supervising','supervise','supervising'],c:0,e:'عادة.'},
  {q:"Today he ___ the main crane.",o:["'s operating",'operates','operate','operated'],c:0,e:'مؤقت.'},
  {q:"I ___ to Norway tomorrow!",o:["'m flying",'fly','flies','flew'],c:0,e:'خطة قريبة.'},
  {q:'Who do you report ___?',o:['to','for','with','at'],c:0,e:'report to.'},
  {q:'The opposite of onshore:',o:['offshore','on duty','on leave','off duty'],c:0,e:'onshore ≠ offshore.'},
  {q:'On leave means:',o:['on holiday','at work','on the rig','on duty'],c:0,e:'on leave = on holiday.'}
 ]
});

/* ========== 2 Plans ========== */
const DY=[['MON','09.30','meet','the IT manager','discuss the new software'],['MON','14.00','take','the train to Head Office','meet the director'],['TUE','12.00','write','the new safety rules','send them to the team'],['WED','08.00','inspect','the fire exits','write a short report'],['WED','10.00','run','a fire drill','test the alarms'],['FRI','14.00','visit','the North Platform','check the safety equipment']];
const DN={MON:'Monday',TUE:'Tuesday',WED:'Wednesday',FRI:'Friday'};
function lab2(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">مفكرة Lisa</h3><p class="sub">مفكرة من إعدادنا مبنية على التمرين 5 ص 12. اختر موعداً، ثم اختر نوع الجملة.</p><div id="d"></div>
  <div class="ph-row"><button type="button" class="btn" data-m="say">Lisa تشرح خطتها</button><button type="button" class="btn" data-m="ask">زميلها يسأل</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الجملة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي جملة بالمضارع المستمر، وأي جملة بـ going to؟</li><li>أين يأتي الوقت في الجملة؟</li><li>كيف يتغير ترتيب الكلمات في السؤال؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0,m='say';
 const sh=()=>{$('#d').innerHTML=DY.map((x,i)=>`<button type="button" class="btn${i===k?' pri':''}" data-i="${i}" style="display:block;width:100%;text-align:left;margin:4px 0" lang="en">${x[0]} ${x[1]} — ${x[2]} ${x[3]}</button>`).join('');
  el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{k=+b.dataset.i;sh()});el.querySelectorAll('[data-m]').forEach(b=>b.classList.toggle('pri',b.dataset.m===m));
  const [d,t,v,o,p]=DY[k];const tm=t.replace(/^0/,'').replace('.00','').replace('.30','.30');
  $('#o').innerHTML=m==='say'?eb([`On ${DN[d]} at ${tm}, I'm ${ING(v)} ${o}.`,`I'm going to ${p}.`]):eb([`When are you ${ING(v)} ${o}?`,`What are you going to do there?`])};
 el.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=b.dataset.m;sh()});sh();
}
const FU={cont:["I'm holding a meeting next Thursday.",'am/is/are + ing','خطة مرتّبة (موعد)'],going:["I'm going to hold a meeting next Thursday.",'am/is/are + going to + الفعل','نية أو خطة'],q1:['When are you having the meeting?','are you + ing','السؤال عن الخطة'],q2:["What's the meeting going to be about?",'is … going to','السؤال بـ going to']};
const LAB2C={title:'الخطط: المضارع المستمر و going to',w:(el,B)=>N.labB(el,B,{intro:'اختر الصيغة، وشاهد جملة الخطة.',
 controls:[{k:'f',label:'الصيغة',opts:[['cont','المضارع المستمر'],['going','going to'],['q1','سؤال بالمستمر'],['q2','سؤال بـ going to']]}],
 out:({f})=>{const [s,form,ar]=FU[f];return{pieces:[[s,'k',form]],say:s,why:`${ar}. الصيغتان للخطط والنوايا، ويأتي معهما وقت في المستقبل.`}}})};
const WV={want:'I want to finish this report next week.',intend:'I intend to visit the platform on Friday.',hope:'I hope to see you at the meeting.',plan:'We plan to open a new office next year.'};
const LAB2D={title:'want · intend · hope · plan + to',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، وشاهد to والفعل بعده.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(WV).map(k=>[k,k])}],
 out:({v})=>{const s=WV[v];const m=s.match(/^(I|We) (\w+) to (\w+)(.*)$/);return{pieces:[[m[1],'x',''],[m[2],'q','النية'],['to','k','to'],[m[3],'n','الفعل كما هو'],[m[4].trim(),'x','']],say:s,why:`بعد ${e('want / intend / hope / plan')} نضع ${e('to')} + الفعل كما هو.`}}})};
const R2=N.rule({title:'الخطط والنوايا، ولغة البريد الرسمي',ref:'ص 12–13، ص 100',
 intro:`ضابط السلامة يرتب اجتماعات وزيارات للأسبوع القادم. نتحدث عن الخطط بصيغتين، ونكتب عنها في البريد بعبارات رسمية ثابتة.`,
 parts:[
 {t:'الخطط: المضارع المستمر و going to',short:"I'm holding / I'm going to hold",old:[1],q:'كيف تقول إن عندك اجتماعاً الخميس القادم؟',ref:'ص 12، ص 100',
  lead:`نتحدث عن الخطط والنوايا بالمضارع المستمر أو بـ ${e('going to')} + الفعل، والمعنى قريب.`,
  points:[`<b>المضارع المستمر:</b> ${e("I'm holding a meeting next Thursday.")} (موعد مرتّب)`,`<b>going to:</b> ${e("I'm going to tell them about the new safety rules.")} (نية)`,`<b>السؤال:</b> ${e("When are you having the meeting? · What's the meeting going to be about?")}`,`<b>كلمات الوقت:</b> ${e('tomorrow · next Thursday · on Monday at 9.30 · this week')}`],
  grid:{head:['الصيغة','مثال'],rows:[['am / is / are + ing',"On Monday at 9.30, I'm meeting the safety manager."],['am / is / are + going to + verb',"We're going to discuss the safety report."],['سؤال',"When are you meeting the safety manager?"]]},
  pairs:[["I going to hold a meeting.","I'm going to hold a meeting.",'لا تنس am.'],['When you are having the meeting?','When are you having the meeting?','في السؤال: are قبل you.']],labs:[LAB2C]},
 {t:'want · intend · hope · plan + to',short:'I want to …',old:[2],q:'ما الذي يأتي بعد I want؟',ref:'ص 12، ص 100',
  lead:`بعض الأفعال تعبّر عن النية، ويأتي بعدها ${e('to')} + الفعل كما هو.`,
  points:[`${e('I want / intend / hope to finish this report next week.')}`,`${e('I want to hold a meeting for the deck crew sometime soon.')}`,`${e('plan to')} و ${e('intend to')} أكثر رسمية من ${e('want to')}.`],
  pairs:[['I want finish the report.','I want to finish the report.','بعد want: to.'],['I hope to finishing it.','I hope to finish it.','بعد to: الفعل كما هو.']],labs:[LAB2D]},
 {t:'عبارات البريد الرسمي',short:'With reference to …',old:[3],q:'كيف تجعل بريدك إلى زميل أكثر رسمية؟',ref:'ص 13',
  lead:`لكل وظيفة في البريد عبارات ثابتة. نختار منها ما يناسب درجة الرسمية.`,
  points:[`<b>الشكر:</b> ${e('Thanks for … · Many thanks for …')}`,`<b>الإشارة إلى موضوع:</b> ${e('With reference to … · With regard to … · Concerning …')}`,`<b>التذكير:</b> ${e('As you are aware, … · As you may know, …')}`,`<b>التأكيد:</b> ${e("This is to confirm that … · I'd like to confirm that …")}`,`<b>خبر سيئ / جيد:</b> ${e('Unfortunately, … · I am pleased to inform you that … · Fortunately, …')}`,`<b>معلومة جديدة:</b> ${e('I would like to inform you that … · This is to let you know that …')}`,`<b>طلب:</b> ${e('Could you please … · I would appreciate it if you could …')}`,`<b>الاستعداد للمساعدة:</b> ${e('Please do not hesitate to contact me if … · Do let me know if …')}`,`<b>المرفق والختام:</b> ${e('I attach … · Kind regards · Best wishes')}، و ${e('FYI = for your information')}`],
  pairs:[['With reference of your email','With reference to your email','with reference to.'],['Please not hesitate to contact me.','Please do not hesitate to contact me.','do not.']]}
 ]});
B.lesson({
 id:'u2-l2',unit:2,order:2,pages:'12–13',
 title:'2 Plans — الخطط',
 summary:'ترتيب اجتماع بالهاتف، والتحدث عن الخطط بالمضارع المستمر و going to، و want / intend / hope + to، وعبارات البريد الرسمي لكل وظيفة (الشكر، التأكيد، الخبر السيئ، الطلب، المرفق، الختام).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 12–13',html:`<p>ضابط سلامة على منصة نفط يرتب اجتماعات الأسبوع ويكتب رسائل. ستتعلم:</p><ol><li>الخطط بالمضارع المستمر و ${e('going to')}.</li><li>${e('want / intend / hope / plan')} + ${e('to')}.</li><li>عبارات البريد الرسمي.</li></ol>`},
  ...R2.theory,
  {h:'تمارين الكتاب',ref:'ص 12–13',html:
   bk(1,'ص 12','ما مهام ضابط السلامة على منصة نفط بحرية؟ ناقش.',null)+
   bk(2,'ص 12','استمع إلى مكالمة Ben: ما غرضها؟',['c) to arrange a meeting'])+
   bk(3,'ص 12','استمع مرة أخرى وأكمل الملاحظات.',['Day: (next) Thursday','Time: 3 o\'clock','Participants: the deck crew','Agenda: new safety rules for crane operators'])+
   bk(4,'ص 12','استمع إلى Tore و Ben وأكمل الفراغات.',['1 want to','2 going to',"3 'm going to",'4 are you having'])+
   bk(5,'ص 12','أنت Ben وهذه مفكرتك للأسبوع. اشرح خططك.',["MON 9.30: I'm meeting the safety manager. We're going to discuss the safety report.","MON 14.00: I'm taking the helicopter to HQ. I'm going to meet the company manager.","TUE 12.00: I'm writing new safety rules for cranes.","WED 8.00: I'm inspecting the fire exits. 10.00: I'm running a fire drill. 14.00: I'm visiting Nord Platform. I'm going to discuss the new safety rules with the manager.","THU: I'm having a day off!","FRI 9.30: I'm writing a report about the visit to Nord Platform. 14.00: I'm inspecting the sub-sea safety equipment."],'إجابات نموذجية؛ تصح الصيغتان.')+
   bk(6,'ص 12','اسأل Ben عن مفكرته.',null,'على نمط المثال.')+
   bk(7,'ص 13','مهمة: ما الأشياء التي يجب أن تفعلها اليوم أو في نهاية الأسبوع؟ رتّب لها جدولاً واعرضه.',null)+
   bk(8,'ص 13','أعد كتابة البريد مستبدلاً العبارات المائلة.',['Many thanks for your email this morning. / As you are aware, I have arranged a safety meeting for the Deck Crew tomorrow. / Unfortunately, I cannot attend the meeting because I have sick leave for one week. However, I\'d like to confirm that my assistant Bob will run the meeting in my place. / I would appreciate it if you could tell Tore about this change. / Please do not hesitate to contact me if you need any further information. / I attach a copy of the agenda FYI. / Kind regards'],'إجابة نموذجية؛ يُقبل أي بديل من الجدول بنفس الوظيفة.')+
   bk(9,'ص 13','أنت Pete. اكتب بريداً رداً على الفاكس.',null,'نموذج إجابة في التمرين التفاعلي تحته.')+
   bk(10,'ص 13','تبادل البريد مع زميلك. خذ دور Ben ورد على بريد زميلك.',null)},
  {h:'الاستماع',ref:'ص 12',html:au('06','ص 12 — التمارين 2–4','مكالمة Ben و Tore.')}
 ],
 stations:[
  {intro:true},
  ...R2.stations,
  {recap:["I'm holding a meeting next Thursday.","I'm going to tell them about the new rules.",'When are you having the meeting?','I want / intend / hope to + verb','With reference to … · Unfortunately, … · Please do not hesitate to contact me if … · I attach …']}
 ],
 lab:lab2,
 examples:[
  {title:'مثال 1: خطة من المفكرة',ref:'ص 12',q:`<p>في المفكرة: ${e('TUE 10.00 meet the new engineers')}. اكتب الخطة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الوقت: ${e('On Tuesday at 10,')}`},{t:`الخطوة 2: المضارع المستمر: ${e("I'm meeting")}`},{t:`الخطوة 3: ${e("On Tuesday at 10, I'm meeting the new engineers.")}`,final:true}]},
  {title:'مثال 2: السؤال عن الخطة',ref:'ص 12',q:`<p>اسأل زميلك متى يزور المصنع.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('When')} + ${e('are you')}.`},{t:`الخطوة 2: الفعل بـ ${e('ing')}: ${e('visiting')}.`},{t:`الخطوة 3: ${e('When are you visiting the factory?')}`,final:true}]},
  {title:'مثال 3: بريد رسمي',ref:'ص 13',q:`<p>اجعلها رسمية: ${e("Sorry, I can't come to the meeting.")}</p>`,given:[],solve:()=>[{t:`الخطوة 1: خبر سيئ: ${e('I am sorry to tell you that')} أو ${e('Unfortunately,')}`},{t:`الخطوة 2: ${e('cannot attend')} أكثر رسمية من ${e("can't come to")}.`},{t:`الخطوة 3: ${e('Unfortunately, I cannot attend the meeting.')}`,final:true}]}
 ],
 quiz:[
  {q:"I ___ a meeting next Thursday.",o:["'m holding",'hold','held','holds'],c:0,e:'خطة.'},
  {q:"What's the meeting going ___ be about?",o:['to','for','at','be'],c:0,e:'going to.'},
  {q:'I want ___ this report next week.',o:['to finish','finish','finishing','finished'],c:0,e:'want to.'},
  {q:'When ___ the meeting?',o:['are you having','you are having','do you having','you have'],c:0,e:'سؤال المستمر.'},
  {q:'Bad news:',o:['Unfortunately, …','Fortunately, …','Many thanks for …','I attach …'],c:0,e:'Unfortunately.'},
  {q:'FYI means:',o:['for your information','for your interest','fill your information','find your item'],c:0,e:'FYI.'}
 ]
});

/* ========== 3 New job ========== */
const CVS=[['2014–2017','worked','at Delta Motors as a mechanic'],['2017','left','Delta Motors'],['2017','became','a full-time student at the technical college'],['2017–2019','studied','electrical maintenance'],['2019','received','my Diploma in Electrical Maintenance'],['2019','started','work as an electrician at a power station']];
function lab3(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">السيرة الذاتية لـ Peter Cole</h3><p class="sub">سيرة من إعدادنا مبنية على التمرين 4 ص 14. اضغط «السطر التالي»: كيف يحكي Peter سيرته؟</p>
  <div class="ph-row"><button type="button" class="btn pri" id="nx">السطر التالي</button><button type="button" class="btn" id="al">السيرة كاملة</button></div><div id="t"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">Peter يتحدث</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الزمن في كل الجمل؟ ولماذا؟</li><li>أي الأفعال شاذة (لا تنتهي بـ ed)؟</li><li>متى نقول from … to …، ومتى in …؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let i=1;
 const line=x=>`${/–/.test(x[0])?`From ${x[0].replace('–',' to ')}`:`In ${x[0]}`}, I ${x[1]} ${x[2]}.`;
 const sh=()=>{$('#t').innerHTML=`<table class="rt" style="margin-top:8px"><tbody>${CVS.map((x,k)=>`<tr${k<i?'':' style="opacity:.35"'}><td>${x[0]}</td><td lang="en">${x[1]} ${x[2]}</td></tr>`).join('')}</tbody></table>`;$('#o').innerHTML=eb(CVS.slice(0,i).map(line))};
 $('#nx').onclick=()=>{i=i>=CVS.length?1:i+1;sh()};$('#al').onclick=()=>{i=CVS.length;sh()};sh();
}
const PV2={work:['worked','منتظم'],study:['studied','y ← ied'],leave:['left','شاذ'],become:['became','شاذ'],receive:['received','منتظم (e + d)'],start:['started','منتظم'],join:['joined','منتظم']};
const LAB2E={title:'الماضي البسيط في السيرة الذاتية',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، وشاهد صيغة الماضي.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(PV2).map(k=>[k,k])}],
 out:({v})=>{const [p,t]=PV2[v];return{pieces:[['In 2019, I','x',''],[p,'k',t],['…','n','']],say:`In 2019, I ${p}.`,why:'السيرة أحداث انتهت في سنوات محددة، فنستعمل الماضي البسيط.'}}})};
const WF={engineer:[['engineer','person',2],['engine','equipment',0],['engineering','college subject',2]],electric:[['electrician','person',2],['electricity','scientific concept',2],['electrical','adjective',1]],electron:[['electronics','college subject',2],['electron','scientific concept',1],['electronic','adjective',2]],mechanic:[['mechanic','person',1],['mechanism','equipment',0],['mechanics','college subject',1],['mechanical','adjective',1]],tech:[['technician','person',1],['technical','adjective',0],['technologist','person',1],['technology','college subject',1]]};
const SY={engineer:['en','gin','eer'],engine:['en','gine'],engineering:['en','gin','eer','ing'],electrician:['el','ec','tri','cian'],electricity:['el','ec','tri','ci','ty'],electrical:['el','ec','tric','al'],electronics:['el','ec','tron','ics'],electron:['el','ec','tron'],electronic:['el','ec','tron','ic'],mechanic:['mech','an','ic'],mechanism:['mech','an','is','m'],mechanics:['mech','an','ics'],mechanical:['mech','an','ic','al'],technician:['tech','ni','cian'],technical:['tech','ni','cal'],technologist:['tech','no','lo','gist'],technology:['tech','no','lo','gy']};
const STR={engineer:2,engine:0,engineering:2,electrician:2,electricity:2,electrical:1,electronics:2,electron:1,electronic:2,mechanic:1,mechanism:0,mechanics:1,mechanical:1,technician:1,technical:0,technologist:1,technology:1};
const AR={person:'شخص',equipment:'جهاز','college subject':'مادة دراسية','scientific concept':'مفهوم علمي',adjective:'صفة'};
const LAB2F={title:'عائلة الكلمة والمقطع المنبور',w:(el,B)=>N.labB(el,B,{intro:'اختر العائلة والكلمة، وشاهد نوعها والمقطع الذي نضغط عليه في النطق.',
 controls:[{k:'f',label:'العائلة',opts:Object.keys(WF).map(k=>[k,k])},{k:'i',label:'الكلمة',opts:[['0','1'],['1','2'],['2','3'],['3','4']]}],
 out:({f,i})=>{const L=WF[f];const x=L[Math.min(+i,L.length-1)];const w=x[0];const sy=SY[w],st=STR[w];return{pieces:sy.map((s,k)=>[k===st?s.toUpperCase():s,k===st?'k':'x',k===st?'منبور':'']),say:w,why:`${e(w)} = ${AR[x[1]]} (${e(x[1])}). لاحظ أن موضع النبر قد يتغير داخل العائلة: ${e('ENgine')} لكن ${e('engiNEER')}.`}}})};
const R3=N.rule({title:'السيرة الذاتية بالماضي البسيط، وعائلات الكلمات',ref:'ص 14–15، ص 101',
 intro:`حين تتقدم لوظيفة تكتب <b>سيرة ذاتية</b> (${e('CV = Curriculum Vitae')}) وتحكيها في المقابلة. تحتاج الماضي البسيط للتواريخ، وتحتاج الكلمة الصحيحة: هل أنت ${e('mechanic')} أم درست ${e('mechanics')}؟`,
 parts:[
 {t:'حكاية السيرة بالماضي البسيط',short:'I worked … I left …',old:[1],q:'كيف تحكي ما فعلته من 2003 إلى 2006؟',ref:'ص 14، ص 101',
  lead:`كل سطر في السيرة حدث انتهى في وقت محدد، فنستعمل الماضي البسيط.`,
  points:[`<b>المنتظم:</b> + ${e('ed')}: ${e('worked · started · received · studied (y → ied)')}`,`<b>الشاذ:</b> ${e('leave → left · become → became · go → went · get → got')}`,`<b>الوقت:</b> ${e('From 2003 until 2005 · From 2005 to 2006 · In 2006 · In September 2006')}`,`<b>العمل الحالي:</b> ${e('September 2006 – present day')} = ما زالت تعمل هناك: ${e("I've worked at Omega Studios since 2006.")} أو ${e('I work at Omega Studios now.')}`,`<b>الأسئلة:</b> ${e('Where did you work in 2004? · When did you join Omega Studios? · Where are you working at the moment?')}`],
  grid:{head:['في السيرة','في الحديث'],rows:[['2003–2005 Technician, Comet Electronics','From 2003 until 2005, I worked at Comet Electronics.'],['2005–2006 Thames Valley University','From 2005 to 2006, I studied audio electronics.'],['2006 Diploma in Audio Technology','In 2006, I received my diploma.']]},
  pairs:[['In 2005, I leaved Comet.','In 2005, I left Comet.','leave فعل شاذ.'],['Where you worked in 2004?','Where did you work in 2004?','السؤال بـ did.']],labs:[LAB2E]},
 {t:'عائلات الكلمات: الشخص والجهاز والمادة والصفة',short:'mechanic · mechanics · mechanical',old:[2],q:'ما الفرق بين mechanic و mechanics و mechanical؟',ref:'ص 15',
  lead:`كلمات المهن تأتي في عائلات. كل كلمة لها نوع: شخص، أو جهاز، أو مادة دراسية، أو مفهوم علمي، أو صفة.`,
  points:[`<b>الشخص:</b> ${e('engineer · electrician · mechanic · technician · technologist')}`,`<b>المادة الدراسية:</b> ${e('engineering · electronics · mechanics · technology')}`,`<b>الصفة (قبل الاسم):</b> ${e('electrical · electronic · mechanical · technical')}`,`<b>الجهاز والمفهوم:</b> ${e('engine · mechanism')} — ${e('electricity · electron')}`,`<b>النبر:</b> ${e('ENgine')} لكن ${e('engiNEER')}، و ${e('elecTRIcian')} و ${e('elecTRIcity')} لكن ${e('eLECtrical')}.`],
  grid:{head:['الشخص','المادة','الصفة'],rows:[['engineer','engineering','—'],['electrician','—','electrical'],['mechanic','mechanics','mechanical'],['technician','technology','technical']]},
  pairs:[['My brother is a mechanism.','My brother is a mechanic.','الشخص: mechanic.'],['He studied mechanical.','He studied mechanics.','المادة: mechanics.'],['electrician wires','electrical wires','قبل الاسم: صفة.']],labs:[LAB2F]}
 ]});
B.lesson({
 id:'u2-l3',unit:2,order:3,pages:'14–15',
 title:'3 New job — وظيفة جديدة',
 summary:'قراءة سيرة ذاتية والإجابة عن أسئلتها، وحكاية السيرة بالماضي البسيط (worked, left, became, studied, received, started)، وعائلات كلمات المهن (engineer, engineering, mechanic, mechanics, mechanical…) ونبرها، والاستعداد لمقابلة عمل.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 14–15',html:`<p>تقرأ سيرة ذاتية لفنية صوتيات وتستعد لمقابلة عمل. ستتعلم:</p><ol><li>أجزاء السيرة الذاتية.</li><li>حكاية السيرة بالماضي البسيط.</li><li>الفرق بين الشخص والمادة والصفة في كلمات المهن، ونبرها.</li></ol>`},
  ...R3.theory,
  {h:'تمارين الكتاب',ref:'ص 14–15',html:
   bk(1,'ص 14','هل كتبت سيرة ذاتية؟ ما المعلومات التي تكتبها فيها؟',null)+
   bk(2,'ص 14','اقرأ جزء السيرة الذاتية وأجب عن الأسئلة.',['1 Petersons','2 Senior Audio Maintenance Technician','3 (at) Omega Studios, Riga, Latvia','4 She maintains digital audio equipment, makes recordings, does troubleshooting and repairs, and buys new equipment.','5 (at) Comet Electronics, Riga','6 She repaired video and DVD equipment.','7 a Diploma in Audio Technology','8 (at) Thames Valley University, London'])+
   bk(3,'ص 14 و ص 118–119','القراءة السريعة: ابحث عن إعلان وظيفة يناسب خطط Anna ومؤهلاتها وخبرتها.',['Experienced AUDIO TECHNICIAN at Tower Recording Studios (ص 119)'],'السبب: تطلب دبلوماً في تقنية الصوت وخبرة سنتين في الإصلاح والصيانة، وهذا عند Anna.')+
   bk(4,'ص 14','Anna تتحدث عن سيرتها. أكمل الفراغات.',['1 worked','2 left','3 became','4 studied','5 received','6 started'])+
   bk(5,'ص 14','استمع إلى Anna وتحقق من إجاباتك.',null)+
   bk(6,'ص 15','ضع العناوين في المربعات الملونة.',['العمود 1: person · العمود 2: equipment · العمود 3: college subject · العمود 4: scientific concept · العمود 5 (خارج noun): adjective'])+
   bk(7,'ص 15','ضع خطاً تحت المقاطع المنبورة في كلمات المربعات البيضاء.',['elecTRIcian · elecTRIcity · eLECtrical','elecTROnics · eLECtron · elecTROnic','meCHAnic · MEchanism · meCHAnics · meCHAnical','techNIcian · TECHnical','techNOlogist · techNOlogy'])+
   bk(8,'ص 15','استمع وتحقق من إجاباتك في 7.',null)+
   bk(9,'ص 15','أكمل الفراغات.',['1 engineer · engine','2 mechanic · mechanical','3 technician · technical','4 electrician · electrical'])+
   bk(10,'ص 15','اكتب رقم السطر من السيرة أمام كل سؤال لـ Anna.',['a 6','b 5','c 3','d 2','e 13','f 15','g 10'])+
   bk(11,'ص 15','نشاط ثنائي: أ هي Anna تجيب عن سيرتها، و ب المحاوِر.',null)+
   bk(12,'ص 15','اكتب نسخة قصيرة من سيرتك.',null)+
   bk(13,'ص 15','استعد لمقابلة عمل: اكتب ملاحظات تجيب عن الأسئلة.',null)+
   bk(14,'ص 15','في مجموعة: مرّروا السير الذاتية ومثّلوا مقابلة عمل.',null)},
  {h:'الاستماع',ref:'ص 14–15',html:au('07','ص 14 — التمرين 5','Anna تتحدث عن سيرتها.')+au('08','ص 15 — التمرين 8','نطق كلمات المهن.')}
 ],
 stations:[
  {intro:true},
  ...R3.stations,
  {recap:['CV = Curriculum Vitae','From 2003 until 2005, I worked … · In 2005, I left … · In 2006, I received …','Where did you work in 2004? · When did you join …?','mechanic (شخص) · mechanics (مادة) · mechanical (صفة)','ENgine · engiNEER · elecTRIcian · eLECtrical']}
 ],
 lab:lab3,
 examples:[
  {title:'مثال 1: سطر من السيرة',ref:'ص 14',q:`<p>في السيرة: ${e('2015–2018 Mechanic, City Garage')}. احكِه.</p>`,given:[],solve:()=>[{t:`الخطوة 1: مدة انتهت: ${e('From 2015 until 2018,')}`},{t:`الخطوة 2: الماضي البسيط: ${e('I worked')}`},{t:`الخطوة 3: ${e('From 2015 until 2018, I worked at City Garage as a mechanic.')}`,final:true}]},
  {title:'مثال 2: سؤال المقابلة',ref:'ص 15',q:`<p>اسأل المتقدم أين درس للدبلوم.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Where')} + ${e('did you')}.`},{t:`الخطوة 2: الفعل كما هو: ${e('study')}.`},{t:`الخطوة 3: ${e('Where did you study for your diploma?')}`,final:true}]},
  {title:'مثال 3: الكلمة الصحيحة',ref:'ص 15',q:`<p>اختر: ${e('He repairs the (electrician / electrical) equipment.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الكلمة قبل الاسم ${e('equipment')}.`},{t:'الخطوة 2: قبل الاسم نحتاج صفة.'},{t:`الخطوة 3: ${e('He repairs the electrical equipment.')}`,final:true}]}
 ],
 quiz:[
  {q:'In 2005, I ___ Comet Electronics.',o:['left','leaved','leave','have left'],c:0,e:'leave → left.'},
  {q:'From 2005 to 2006, I ___ audio electronics.',o:['studied','studyed','study','have studied'],c:0,e:'y → ied.'},
  {q:'Where ___ in 2004?',o:['did you work','you worked','do you worked','did you worked'],c:0,e:'did + الفعل.'},
  {q:'My brother is a ___. He repairs cars.',o:['mechanic','mechanism','mechanics','mechanical'],c:0,e:'الشخص.'},
  {q:'She studied ___ at college.',o:['electronics','electronic','electron','electrician'],c:0,e:'المادة.'},
  {q:'The lab technician maintains all the ___ equipment.',o:['technical','technician','technology','technologist'],c:0,e:'صفة قبل الاسم.'}
 ]
});

/* ========== Review Unit A ========== */
const PPV=[['take off','taken','taking'],['put on','put','putting'],['bring out','brought','bringing'],['switch off','switched','switching'],['take away','taken','taking'],['put back','put','putting']];
B.lesson({
 id:'u2-l4',unit:2,order:4,pages:'16–19',
 title:'Review Unit A — مراجعة الوحدتين 1 و 2',
 summary:'مراجعة الأفعال المركبة ومكان الضمير، والمضارع التام والمضارع المستمر مع yet، والفرق بين المضارع التام والماضي البسيط مع الوقت المحدد، و by + ing، ووصف الوظائف والهيكل التنظيمي، والخطط، وعائلات الكلمات، وعبارات البريد، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 16–19',html:`<p>هذه المراجعة تغطي الوحدتين 1 و 2.</p>`+vt([['الأفعال المركبة','Take it off. · Pick them up. · Put them down.'],['انتهى أم ما زال؟',"Have you switched it off yet? — No, not yet. I'm switching it off now."],['وقت محدد',"Have you checked the tyres? — Yes, we checked them this morning."],['الطريقة','by + ing: by touching the screen'],['الوظيفة','manage · supervise · report to · work for'],['الخطط',"I'm attending … · I'm going to … · I'm planning to …"]],['الموضوع','مثال'])},
  {h:'المضارع التام أم الماضي البسيط؟',ref:'ص 17',html:`<p>في تقرير الميكانيكي يسأل المشرف بالمضارع التام (${e('Have you checked the tyres yet?')})، لأنه يهمه أن العمل انتهى الآن. ويجيب الميكانيكي بالماضي البسيط (${e('Yes, we checked all the tyres first thing this morning.')})، لأنه يذكر <b>وقتاً محدداً</b>.</p>`+vt([['Have you … yet? / I\'ve …','المضارع التام: بلا وقت محدد'],['this morning · at ten · an hour ago · yesterday','الماضي البسيط: وقت محدد']],['الكلمات','الزمن'])},
  {h:'تمارين المراجعة',ref:'ص 16–19',html:
   bk(1,'ص 16','طابق الصور بالتعليمات في الصندوق.',['1 Take it away.','2 Switch it on.','3 Take it off.','4 Pick them up.','5 Switch it off.','6 Push them down.','7 Pull it back.','8 Pull it out.','9 Put it on.','10 Take them out.','11 Put them down.','12 Pour it out.','13 Put it in.','14 Push it forward.','15 Push it in.','16 Pour it in.'],'من قراءتنا للصور؛ الصورتان 2 و 5 (on/off) و 13 و 15 قد تُقرأ بطريقة أخرى.')+
   bk(2,'ص 16','أكمل الحوارات.',['2 brought out · bringing it out','3 taken off · taking them off','4 put on · putting them on','5 taken away · taking them away','6 put back · putting them back'])+
   bk(3,'ص 17','أكمل تقرير الميكانيكي لمشرفه.',['2 found','3 replaced','4 adjusted','5 put','6 examined','7 took','8 unblocked','9 stripped','10 cleaned','11 repaired','12 repainted','13 pumped','14 did'])+
   bk(4,'ص 17','أكمل الجمل بالكلمات في الصندوق.',['2 carries · putting','3 raise · putting','4 keep · covering','5 protect · wearing','6 opens · pressing'])+
   bk(5,'ص 17','صِف التنظيم في هذا القسم بالكلمات في الصندوق.',['The Chief Engineer manages the Operation Manager, the Maintenance Manager and the IT Manager.','The Crane Operator reports to the Operation Manager. He supervises the Assistant Crane Operator.','The Electrician and the Mechanic work for the Maintenance Manager. The Part-time Repair Man reports to the Mechanic.','The Senior Technician reports to the IT Manager and supervises the Junior Technician.'],'إجابات نموذجية.')+
   bk(6,'ص 18','أكمل وصف الوظيفة بالكلمات في الصندوق.',['2 maintains','3 inspects / checks','4 makes','5 checks / inspects','6 orders','7 works','8 reports','9 supervises','10 has'],'في 3 و 5 تصح check و inspect.')+
   bk(7,'ص 18','نشاط ثنائي: رتّبا موعد اجتماع بالهاتف.',['الوقت المتاح للاثنين: Thursday afternoon (أو Friday)'])+
   bk(8,'ص 18 و ص 118–119','القراءة السريعة: ابحث عن نصائح لمقابلة العمل.',['before: e.g. find out about the company and the job','at the interview, do: e.g. answer every question fully','at the interview, don\'t: e.g. be late for the interview'],'أي نصيحة من كل قائمة صحيحة.')+
   bk(9,'ص 18','أكمل هذا الجزء من مقابلة عمل.',['1 do you work','2 have you been',"3 I've been",'4 did you work','5 I was','6 did you leave','7 I wanted','8 Have you finished','9 did you complete'])+
   bk(10,'ص 19','تعرّف على الأجهزة من أوصافها.',['1 ticket machine','2 burglar alarm','3 outboard motor','4 accelerator (on a motorbike)'])+
   bk(11,'ص 19','صحّح الأخطاء.',['1 My brother is a mechanic. He studied mechanics at technical college.','2 We need to find a good electrician to repair the electrical wires in the house.',"3 I'm a computer technician. How can I help you?","4 I'm studying for a diploma in electronics. I want to be an electronic(s) engineer."])+
   bk(12,'ص 19','أعد كتابة البريد مستبدلاً الكلمات المائلة.',["Hi John / With reference to our phone call this morning, this is to let you know that I have now written the report. / I'd be grateful if you would let me know how many copies you need. / Best wishes / Marcia"])+
   bk(13,'ص 19','مشروع: ابدأ نسخة كاملة من سيرتك الذاتية (نموذج Europass).',null)+
   bk(14,'ص 19','ابحث عن وظيفة تهمك: إعلانات، مهارات، شركات، وصف الوظيفة.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 1',title:'خلاصة: الأفعال المركبة والمضارع التام',q:"أكمل: Have you taken the wheels off yet? — No, I'm ___ now.",ref:'ص 16',
   side:[{tip:`الضمير بين الفعل والأداة: ${e('Take it off.')}، والمستمر لما تفعله الآن، والتام لما أنجزته.`}],
   body:[{html:vt(PPV.map(x=>[`${x[0].split(' ')[0]} it ${x[0].split(' ')[1]}`,`I'm ${x[2]} it ${x[0].split(' ')[1]} now.`,`I've ${x[1]} it ${x[0].split(' ')[1]}.`]),['الأمر','الآن','انتهى'])},{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"Has she brought out the jack yet? — No. Look, she's ___ now.",o:['bringing it out','bringing out it'],a:0},{s:'Take ___ away.',o:['them','off them'],a:0},{s:"I've ___ the new wheels on.",o:['put','putted'],a:0},{s:'Have you switched it off ___?',o:['yet','still'],a:0}]}),title:'تدريب سريع'}]},
  {st:2,short:'وقت محدد',title:'خلاصة: المضارع التام أم الماضي البسيط؟',q:'Have you checked the tyres? — Yes, we ___ them this morning.',ref:'ص 17',
   side:[{tip:`مع الوقت المحدد (${e('this morning, an hour ago, at ten')}) نستعمل الماضي البسيط.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الزمن:',items:[{s:'We ___ the fuel system at about ten this morning.',o:['examined','have examined'],a:0},{s:'Have you ___ the air pressure yet?',o:['adjusted','adjust'],a:0},{s:'We ___ that about an hour ago.',o:['did','have done'],a:0},{s:'How long ___ there? — Two years.',o:['have you been','did you be'],a:0}]}),title:'تدريب سريع'}]},
  {st:3,short:'الوحدة 2',title:'خلاصة: الوظيفة والخطط والكلمات',q:'من يدير ومن يرفع التقارير في الهيكل التنظيمي؟',ref:'ص 17–19',
   side:[{tip:`${e('manage / supervise')} للأعلى نحو الأسفل، و ${e('report to / work for')} من الأسفل نحو الأعلى.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The Junior Technician ___ the Senior Technician.',o:['reports to','manages'],a:0},{s:'The Chief Engineer ___ three managers.',o:['manages','reports to'],a:0},{s:"I'm sorry, I'm ___ a project meeting on Monday.",o:['attending','attend'],a:0},{s:'He studied ___ at technical college.',o:['mechanics','mechanic'],a:0},{s:'With reference ___ our phone call …',o:['to','of'],a:0}]}),title:'تدريب سريع'}]},
  {recap:['Take it off. · Pick them up. · Put them down.',"Have you … yet? — No, I'm …ing it now.",'وقت محدد ← الماضي البسيط: We checked them this morning.','manage · supervise · report to · work for',"I'm attending … · I'm going to … · mechanic / mechanics / mechanical"]}
 ],
 examples:[
  {title:'مثال 1: الضمير والأداة',ref:'ص 16',q:`<p>أجب: ${e('Have you put the new wheels on yet?')} (ما زلت تعمل)</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("Hold on. I'm …")}`},{t:`الخطوة 2: ${e('the new wheels')} ← ${e('them')} بين الفعل والأداة.`},{t:`الخطوة 3: ${e("Hold on. I'm putting them on right now.")}`,final:true}]},
  {title:'مثال 2: وقت محدد',ref:'ص 17',q:`<p>أكمل: ${e('Have you cleaned the door? — Yes, we ___ (clean) it straight after lunch.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('straight after lunch')} وقت محدد.`},{t:'الخطوة 2: الماضي البسيط.'},{t:`الخطوة 3: ${e('Yes, we cleaned it straight after lunch.')}`,final:true}]},
  {title:'مثال 3: الهيكل التنظيمي',ref:'ص 17',q:`<p>صِف: المهندس الأول يدير مدير الصيانة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الأعلى يدير الأدنى: ${e('manages')}.`},{t:`الخطوة 2: ${e('The Chief Engineer manages the Maintenance Manager.')}`},{t:`الخطوة 3: والعكس: ${e('The Maintenance Manager reports to the Chief Engineer.')}`,final:true}]}
 ],
 quiz:[
  {q:'Pick ___ up.',o:['them','up them','they','their'],c:0,e:'الضمير في الوسط.'},
  {q:"Has he taken the wheel nuts off yet? — No, he's ___ at the moment.",o:['taking them off','taking off them','taken them off','take them off'],c:0,e:'الآن.'},
  {q:'We ___ the tyres first thing this morning.',o:['checked','have checked','check','are checking'],c:0,e:'وقت محدد.'},
  {q:'The driver opens the fuel flap by ___ a button.',o:['pressing','press','pressed','to press'],c:0,e:'by + ing.'},
  {q:'The Assistant Crane Operator ___ the Crane Operator.',o:['reports to','manages','supervises','works'],c:0,e:'report to.'},
  {q:'We need a good ___ to repair the wires.',o:['electrician','electricity','electrical','electronic'],c:0,e:'الشخص.'}
 ]
});
})(PLCBOOK);

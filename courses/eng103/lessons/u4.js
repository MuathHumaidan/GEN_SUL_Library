/* الوحدة 4 — Processes: 1 Infrastructure (ص 26–27) · 2 Manufacturing (ص 28–29) · 3 Communications (ص 30–31) · Review Unit B (ص 32–35)
   الشرح والأمثلة والمختبرات من إعدادنا؛ تمارين الكتاب تفاعلياً بجملها وصورها في bxd4.js. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const PP={make:'made',fill:'filled',push:'pushed',drive:'driven',cool:'cooled',monitor:'monitored',bring:'brought',clean:'cleaned',remove:'removed',paint:'painted',take:'taken',collect:'collected',weld:'welded',deliver:'delivered',test:'tested',install:'installed',carry:'carried',run:'run',switch:'switched',pour:'poured',put:'put',empty:'emptied',transmit:'transmitted',send:'sent',convert:'converted',connect:'connected'};

/* ========== 1 Infrastructure ========== */
const STG=[['Cutting the rock surface','The cutter face rotates, and the teeth cut circles into the rock.','The rock is cut by the teeth.'],['Collecting the rocks','Large scoops collect the pieces of rock.','The rocks are collected by large scoops.'],['Moving the cutter','Hydraulic cylinders push the cutter forwards.','The cutter is pushed forwards by hydraulic cylinders.'],['Supplying the electricity','Fifteen electric motors supply the power.','The power is supplied by fifteen electric motors.'],['Strengthening the roof','Workers fill the holes with bolts and cement.','The holes are filled with bolts and cement.'],['Controlling the movement','The operator controls the speed and direction.','The speed and direction are controlled by the operator.']];
function lab1(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">آلة حفر الأنفاق</h3><p class="sub">مختبر من إعدادنا مبني على نص التمرين 3 ص 26. اختر المرحلة، ثم اختر الصيغة: من يفعل (المبني للمعلوم) أم ماذا يحدث للشيء (المبني للمجهول).</p>
  <div id="s"></div><div class="ph-row"><button type="button" class="btn" data-v="a">المبني للمعلوم</button><button type="button" class="btn" data-v="p">المبني للمجهول</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الوصف</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>في المبني للمجهول: ما الكلمة قبل الفاعل الحقيقي (الفاعل)؟</li><li>متى جاء is ومتى are؟</li><li>بمَ يبدأ عنوان كل مرحلة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0,v='a';
 const sh=()=>{$('#s').innerHTML=STG.map((x,i)=>`<button type="button" class="btn${i===k?' pri':''}" data-i="${i}" style="display:block;width:100%;text-align:left;margin:4px 0" lang="en">${i+1} ${x[0]}</button>`).join('');
  el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{k=+b.dataset.i;sh()});el.querySelectorAll('[data-v]').forEach(b=>b.classList.toggle('pri',b.dataset.v===v));
  const x=STG[k];$('#o').innerHTML=`<p class="sub">${v==='a'?'المبني للمعلوم: الفاعل في أول الجملة.':'المبني للمجهول: الشيء في أول الجملة، و be + التصريف الثالث.'}</p>${eb([v==='a'?x[1]:x[2]])}`};
 el.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{v=b.dataset.v;sh()});sh();
}
const PAS={push:['Hydraulic cylinders','push','the cutter','The cutter','is'],collect:['Large scoops','collect','the rocks','The rocks','are'],fill:['The workers','fill','the holes','The holes','are'],monitor:['Video cameras','monitor','the tunnel','The tunnel','is'],drive:['A powerful engine','drives','the propeller','The propeller','is']};
const LAB4A={title:'من المبني للمعلوم إلى المبني للمجهول',w:(el,B)=>N.labB(el,B,{intro:'اختر الجملة والصيغة.',
 controls:[{k:'v',label:'الجملة',opts:Object.keys(PAS).map(k=>[k,PAS[k][1]])},{k:'f',label:'الصيغة',opts:[['a','active'],['p','passive'],['pa','passive + by']]}],
 out:({v,f})=>{const [ag,vb,ob,S,be]=PAS[v];const pp=PP[vb.replace(/s$/,'')]||PP[vb];
  if(f==='a')return{pieces:[[ag,'x','الفاعل'],[vb,'k','الفعل'],[ob+'.','n','المفعول']],say:`${ag} ${vb} ${ob}.`,why:'المبني للمعلوم: الفاعل يقوم بالفعل.'};
  const pc=[[S,'n','الشيء'],[be,'q','be'],[pp,'k','التصريف الثالث']];if(f==='pa')pc.push(['by '+ag.toLowerCase()+'.','x','الفاعل بعد by']);
  return{pieces:pc,say:pc.map(p=>p[0]).join(' ')+(f==='p'?'.':''),why:f==='pa'?`نذكر الفاعل بعد ${e('by')} إذا كان مهماً.`:`المفعول صار في أول الجملة، و ${e(be)} لأن ${e(S)} ${be==='is'?'مفرد':'جمع'}.`}}})};
const R1=N.rule({title:'المبني للمجهول في وصف العمليات، وعناوين المراحل',ref:'ص 26–27، ص 103',
 intro:`حين نشرح كيف تعمل آلة أو كيف يُصنع شيء، يهمنا <b>ماذا يحدث للشيء</b> أكثر من <b>من يفعله</b>. لذلك نستعمل المبني للمجهول كثيراً في وصف العمليات.`,
 parts:[
 {t:'المبني للمعلوم والمبني للمجهول',short:'The rocks are collected',old:[1],q:'كيف تقول إن الصخور تُجمع بالمغارف؟',ref:'ص 27، ص 103',
  lead:`في المبني للمعلوم الفاعل يقوم بالفعل. في المبني للمجهول يصبح المفعول في أول الجملة، والفعل ${e('be')} + التصريف الثالث، والفاعل بعد ${e('by')} إن ذكرناه.`,
  points:[`<b>المعلوم:</b> ${e('Hydraulic cylinders push the cutter.')}`,`<b>المجهول:</b> ${e('The cutter is pushed by hydraulic cylinders.')}`,`المفرد: ${e('is')} + التصريف الثالث، والجمع: ${e('are')} + التصريف الثالث.`,`<b>التصريف الثالث الشاذ:</b> ${e('drive → driven · bring → brought · take → taken · put → put · make → made')}`,`كثيراً لا نذكر الفاعل: ${e('The holes are filled with bolts and cement.')}`],
  grid:{head:['الفاعل / الشيء','الفعل','الباقي'],rows:[['Large scoops','collect','the rocks.'],['The rocks','are collected','by large scoops.'],['The cutter','is pushed','by hydraulic cylinders.']]},
  pairs:[['The rocks are collect by scoops.','The rocks are collected by scoops.','التصريف الثالث.'],['The propeller is drove by an engine.','The propeller is driven by an engine.','drive → driven.'],['The cutter are pushed.','The cutter is pushed.','المفرد مع is.']],labs:[LAB4A]},
 {t:'من التعليمات إلى وصف العملية',short:'First the engine is run …',old:[2],q:'كيف تحوّل «شغّل المحرك» إلى وصف لعملية؟',ref:'ص 27',
  lead:`التعليمات بفعل الأمر تخاطب من يعمل. وصف العملية بالمبني للمجهول يشرح ما يحدث، ونربط الخطوات بكلمات الترتيب.`,
  points:[`<b>التعليمة:</b> ${e('Run the engine for a few minutes.')}`,`<b>الوصف:</b> ${e('First the engine is run for a few minutes.')}`,`<b>كلمات الترتيب:</b> ${e('First · Then · Next · Now · Finally')}`,`نستعمل ${e('it / they')} حتى لا نكرر: ${e('Then it is switched off.')}`,`<b>عناوين المراحل:</b> فعل بـ ${e('ing')}: ${e('Cutting the rock surface · Collecting the rocks')}`],
  grid:{head:['التعليمة','وصف العملية'],rows:[['Switch off the engine.','Then it is switched off.'],['Take off the oil drain plug.','Now the oil drain plug is taken off.'],['Pour in the new oil.','Next the new oil is poured in.']]},
  pairs:[['First the engine run.','First the engine is run.','نحتاج is.'],['Collect the rocks (عنوان)','Collecting the rocks','العنوان بـ ing.']]}
 ]});
B.lesson({
 id:'u4-l1',unit:4,order:1,pages:'26–27',
 title:'1 Infrastructure — البنية التحتية',
 summary:'آلة حفر الأنفاق MB471/316 ومواصفاتها وأجزاؤها (cutter face, teeth, conveyor belt, shoe, leg)، وأسماء أعضاء الجسم في السياق التقني، والمبني للمجهول (is pushed, are collected) لوصف العمليات، وتحويل التعليمات إلى وصف عملية، وعناوين المراحل بـ ing.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 26–27',html:`<p>تتعرف على واحدة من أكبر آلات حفر الأنفاق في العالم. ستتعلم:</p><ol><li>المبني للمجهول في وصف العمليات.</li><li>تحويل التعليمات إلى وصف عملية.</li><li>كلمات أعضاء الجسم في الآلات: ${e('teeth, arms, legs, shoes')}.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u4-l1'](el,B)},
  ...R1.theory,
  {h:'تمارين الكتاب',ref:'ص 26–27',html:
   bk(1,'ص 26','ما هذه الآلة؟ ماذا تفعل؟ كيف تعمل؟ ناقش مع زميلك.',null)+
   bk(2,'ص 26','استمع وأكمل جدول المواصفات.',['Length: 24.4 m','Diameter: about 14.3 m','Speed: 3 metres per hour','Manpower needed: at least 230 workers','Cost: more than $31 million'])+
   bk(3,'ص 26','اقرأ المقال وضع العناوين في مكانها.',['1 Cutting the rock surface','2 Collecting the rocks','3 Moving the cutter','4 Supplying the electricity','5 Strengthening the roof','6 Controlling the movement'])+
   bk(4,'ص 26','اكتب كل أسماء أعضاء الجسم والملابس في النص.',['face · teeth · arms · shoes · legs · heart (و body)'])+
   bk(5,'ص 26','اذكر سياقات تقنية أخرى تُستعمل فيها هذه الكلمات.',['teeth: gears, saws, a zip · arms: a crane, a robot, a chair · legs: a table, a ladder · face: a clock, a cliff · shoes: brake shoes · heart: the heart of a machine / city'],'إجابات نموذجية.')+
   bk(6,'ص 27','حوّل التعليمات إلى وصف عملية بالمبني للمجهول وكلمات الترتيب.',['First the engine is run for a few minutes. Then it is switched off. Now the oil drain plug is taken off. Next the old oil is emptied into a container. Then the oil drain plug is put on. Next the oil filler cap is taken off. Then the new oil is poured in. Finally the oil filler cap is put back on.'],'إجابة نموذجية؛ يصح ترتيب آخر لكلمات الترتيب.')+
   bk(7,'ص 27','اكتب تعليمات لعملية تعرفها، ثم أعد كتابتها وصفاً بالمبني للمجهول.',null)+
   bk(8,'ص 27','املأ الفراغات بالصيغة الصحيحة للفعل.',['1 make · are filled','2 pushes · is driven','3 flows · is cooled','4 is monitored · controls','5 are brought · are cleaned · is removed · are painted · are taken'])+
   bk(9,'ص 27','اكتب عناوين المراحل الرئيسية لعملية تعرفها، كل عنوان يبدأ بفعل بـ ing.',null)+
   bk(10,'ص 27','قدّم عرضاً قصيراً تشرح فيه العملية بعناوينك.',null)},
  {h:'الاستماع',ref:'ص 26',html:au('12','ص 26 — التمرين 2','مواصفات آلة حفر الأنفاق.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u4-l1'](el,B),title:'شرح مرئي'}]},
  ...R1.stations,
  {recap:['Hydraulic cylinders push the cutter. (معلوم)','The cutter is pushed by hydraulic cylinders. (مجهول)','is / are + التصريف الثالث (+ by …)','First the engine is run … Then it is switched off …','Cutting the rock surface · Collecting the rocks']}
 ],
 lab:lab1,
 examples:[
  {title:'مثال 1: إلى المجهول',ref:'ص 27',q:`<p>حوّل: ${e('Video cameras monitor the cutter.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: المفعول ${e('the cutter')} مفرد ← ${e('The cutter is')}`},{t:`الخطوة 2: ${e('monitor')} ← ${e('monitored')}`},{t:`الخطوة 3: ${e('The cutter is monitored by video cameras.')}`,final:true}]},
  {title:'مثال 2: وصف عملية',ref:'ص 27',q:`<p>حوّل التعليمة الأولى إلى وصف: ${e('Wash the vegetables.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: كلمة الترتيب: ${e('First')}`},{t:`الخطوة 2: ${e('the vegetables')} جمع ← ${e('are washed')}`},{t:`الخطوة 3: ${e('First the vegetables are washed.')}`,final:true}]},
  {title:'مثال 3: عنوان مرحلة',ref:'ص 26',q:`<p>اكتب عنواناً لمرحلة: الآلة تُزوَّد بالكهرباء.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفعل ${e('supply')}.`},{t:`الخطوة 2: + ${e('ing')}: ${e('Supplying')}`},{t:`الخطوة 3: ${e('Supplying the electricity')}`,final:true}]}
 ],
 quiz:[
  {q:'The rocks ___ by large scoops.',o:['are collected','is collected','collected','are collect'],c:0,e:'جمع + are.'},
  {q:'The cutter ___ forwards by hydraulic cylinders.',o:['is pushed','are pushed','pushes','is push'],c:0,e:'مفرد + is.'},
  {q:'The propeller is ___ by a powerful engine.',o:['driven','drove','drive','drived'],c:0,e:'drive → driven.'},
  {q:'Large drills ___ holes in the roof.',o:['make','are made','is made','makes'],c:0,e:'معلوم.'},
  {q:'Heading for a stage:',o:['Collecting the rocks','Collect the rocks','Collected the rocks','The rocks collect'],c:0,e:'ing.'},
  {q:'Teeth are also found on ___.',o:['gears','cables','tyres','screens'],c:0,e:'gears.'}
 ]
});

/* ========== 2 Manufacturing ========== */
const LINE=[['Delivering the parts','delivery area','The parts are delivered by truck or rail.'],['Welding the body panels to the frame','body shop','The panels are welded to the frame by more than 400 robots.'],['Painting the body','paint shop','The body is cleaned and painted by robots.'],['Adding parts to the body','trim line','The instrument panel and the wiring are installed. The windscreen is inserted.'],['Installing parts in the chassis','chassis line','The fuel system, the axles and the drive shaft are installed. The engine is lowered into the chassis.'],['Attaching the body to the chassis','final assembly line','The body is attached to the chassis, and the final parts are added.'],['Testing the finished car','test area','The car is filled with fuel and tested on special rollers.']];
function lab2(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">خط تجميع السيارة</h3><p class="sub">مختبر من إعدادنا مبني على نص التمرين 4 ص 29. اضغط «المرحلة التالية» وتابع السيارة في المصنع.</p>
  <div class="ph-row"><button type="button" class="btn pri" id="nx">المرحلة التالية</button><button type="button" class="btn" id="rs">من البداية</button></div><div id="d"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">ماذا يحدث هنا؟</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي المراحل تحدث في الوقت نفسه (meanwhile)؟</li><li>ما الفعل في كل عنوان؟ وما صيغته؟</li><li>لماذا الأوصاف بالمبني للمجهول؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0;
 const sh=()=>{$('#d').innerHTML=art(LINE.map((x,i)=>`<g data-tip="${x[1]}"><rect x="${14+(i%4)*86}" y="${70+Math.floor(i/4)*90}" width="78" height="60" rx="10" fill="${i===k?C.yel:i<k?'#d9eee3':C.paper}" stroke="${C.ink}" stroke-width="${i===k?3:1.5}"/>${TL(53+(i%4)*86,105+Math.floor(i/4)*90,String(i+1),{fs:18,w:700})}</g>`).join(''),'line');
  $('#o').innerHTML=`<p class="sub" lang="en" dir="ltr"><b>${LINE[k][1]}</b></p>${eb([LINE[k][0],LINE[k][2]])}`};
 $('#nx').onclick=()=>{k=(k+1)%LINE.length;sh()};$('#rs').onclick=()=>{k=0;sh()};sh();
}
const PU={weld:['Workers weld thin metal sheets to a frame','to make the car body.'],turn:['They turn the chassis upside down','to install the fuel system easily.'],wear:['The robots wear special clothes','to protect the wet paint from dust.'],roll:['Workers put the finished car on rollers','to check the movement of the wheels.'],paint:['The car body is painted','to protect it from rust.']};
const LAB4B={title:'الغرض: to + الفعل',w:(el,B)=>N.labB(el,B,{intro:'اختر العمل، وشاهد غرضه.',
 controls:[{k:'p',label:'العمل',opts:Object.keys(PU).map(k=>[k,k])}],
 out:({p})=>{const [a,b]=PU[p];return{pieces:[[a,'x','العمل'],[b,'k','الغرض: to + الفعل']],say:`${a} ${b}`,why:`نسأل عن الغرض بـ ${e('Why …?')} ونجيب بـ ${e('To + الفعل')}: ${e('Why is the body painted? — '+b.charAt(0).toUpperCase()+b.slice(1))}`}}})};
const QP={how:['How are the parts delivered?','By truck or rail.'],where:['Where are the panels welded?','In the body shop.'],why:['Why is the body checked by human workers?','To look for faults in the paint.'],who:['Who is the body checked by?','By human workers.'],what:['What is installed in the trim line?','The instrument panel, the heating system and the wiring.']};
const LAB4C={title:'السؤال بالمبني للمجهول',w:(el,B)=>N.labB(el,B,{intro:'اختر أداة السؤال.',
 controls:[{k:'q',label:'السؤال',opts:Object.keys(QP).map(k=>[k,k])}],
 out:({q})=>{const [a,b]=QP[q];const m=a.match(/^(\w+) (is|are) (.+)$/);return{pieces:[[m[1],'q','أداة السؤال'],[m[2],'k','be'],[m[3],'n','الشيء + التصريف الثالث'],[b,'x','الجواب']],say:`${a} ${b}`,why:`السؤال: أداة السؤال + ${e('is / are')} + الشيء + التصريف الثالث.`}}})};
const R2=N.rule({title:'الغرض بـ to، والأسئلة بالمبني للمجهول',ref:'ص 28–29، ص 103',
 intro:`في مصنع السيارات يمر الجسم بمراحل كثيرة. نشرح <b>لماذا</b> نقوم بكل عمل، ونسأل عن المراحل بالمبني للمجهول.`,
 parts:[
 {t:'الغرض: to + الفعل',short:'to protect it from rust',old:[1],q:'لماذا يُطلى جسم السيارة؟',ref:'ص 29',
  lead:`نعبّر عن غرض العمل بـ ${e('to')} + الفعل كما هو.`,
  points:[`<b>السؤال:</b> ${e('Why do you paint the car body?')} — <b>الجواب:</b> ${e('To protect it from rust.')}`,`<b>في الجملة:</b> ${e('The car body is painted to protect it from rust.')}`,`${e('They turn the chassis upside down to make the work easier.')}`],
  pairs:[['for protect it from rust','to protect it from rust','الغرض بـ to.'],['to protecting it','to protect it','to + الفعل كما هو.']],labs:[LAB4B]},
 {t:'الأسئلة بالمبني للمجهول',short:'How are the parts delivered?',old:[2],q:'كيف تسأل عن طريقة توصيل القطع؟',ref:'ص 29، ص 103',
  lead:`نضع ${e('is / are')} قبل الشيء، والتصريف الثالث بعده.`,
  points:[`${e('How are the parts delivered? — They\'re delivered by truck or rail.')}`,`${e('Where are the panels welded? — In the body shop.')}`,`${e('Why are thin metal sheets welded to a frame? — To make the car body.')}`,`${e('Who is the body checked by? — By human workers.')}`],
  pairs:[['How the parts are delivered?','How are the parts delivered?','is/are قبل الشيء.'],['Where are the panels weld?','Where are the panels welded?','التصريف الثالث.']],labs:[LAB4C]}
 ]});
B.lesson({
 id:'u4-l2',unit:4,order:2,pages:'28–29',
 title:'2 Manufacturing — التصنيع',
 summary:'أجزاء السيارة (body, chassis, drive shaft, axle, transmission) ومراحل تجميعها في المصنع، وعناوين المراحل بـ ing، والمبني للمجهول في وصف خط الإنتاج، والغرض بـ to + الفعل، والأسئلة بالمبني للمجهول (How are the parts delivered?).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 28–29',html:`<p>تتابع سيارة من وصول قطعها إلى خروجها من المصنع. ستتعلم:</p><ol><li>مراحل تجميع السيارة وأسماء أجزائها.</li><li>الغرض بـ ${e('to')} + الفعل.</li><li>الأسئلة بالمبني للمجهول.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u4-l2'](el,B)},
  ...R2.theory,
  {h:'تمارين الكتاب',ref:'ص 28–29',html:
   bk(1,'ص 28','ناقش موقع هذه الأجزاء ووظيفتها: body, chassis, drive shaft, axle, transmission.',null)+
   bk(2,'ص 28','الصور مراحل تجميع السيارة بترتيب خاطئ. ضع أرقام الصور في المخطط.',['A Fig. 6 · B Fig. 5 · C Fig. 2','D Fig. 4','E Fig. 3 · F Fig. 1'],'من قراءتنا للصور والنص.')+
   bk(3,'ص 28','اكتب عناوين للصور الست بالأفعال والأسماء في الصندوق (فعل بـ ing).',['Fig. 6 Welding the body panels to the body frame.','Fig. 5 Painting the body.','Fig. 2 Adding parts to the body.','Fig. 4 Installing parts in the chassis.','Fig. 3 Attaching the body to the chassis.','Fig. 1 Testing the finished car.'],'إجابات نموذجية.')+
   bk(4,'ص 29','اقرأ صفحة شركة السيارات وتحقق من إجاباتك في 2 و 3.',null)+
   bk(5,'ص 29','طابق الأعمال بأغراضها.',['1 b','2 e','3 d','4 f','5 a','6 c'])+
   bk(6,'ص 29','اسأل زميلك وأجب عن أسئلة 5 بالمبني للمجهول.',['Why are thin metal sheets welded to a frame? — To make the car body.','Why is the chassis turned upside down? — To install the fuel system easily.','Why do the robots wear special clothes? — To protect the wet paint from dust.','Why is the chassis turned rightside up? — To lower the engine into it.','Why is the finished car put on rollers? — To check the movement of the wheels.','Why is the car body checked by hand? — To inspect it for faults in the paint.'])+
   bk(7,'ص 29','اكتب أسئلة لهذه الأجوبة.',['1 How are the parts delivered?','2 Where are the panels welded (together)?','3 How are the parts carried around the plant?','4 Why is the body checked by human workers?','5 Who is the body checked by? / How is the body checked?','6 How is the windscreen inserted?'],'إجابات نموذجية.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u4-l2'](el,B),title:'شرح مرئي'}]},
  ...R2.stations,
  {recap:['Delivering → Welding → Painting → Adding parts → Installing → Attaching → Testing','The car body is painted to protect it from rust.','Why …? — To + verb.','How are the parts delivered? — By truck or rail.','Who is the body checked by? — By human workers.']}
 ],
 lab:lab2,
 examples:[
  {title:'مثال 1: الغرض',ref:'ص 29',q:`<p>لماذا يُقلب الشاسيه رأساً على عقب؟ (تركيب نظام الوقود بسهولة)</p>`,given:[],solve:()=>[{t:`الخطوة 1: الغرض بـ ${e('to')} + الفعل.`},{t:`الخطوة 2: ${e('to install the fuel system easily')}`},{t:`الخطوة 3: ${e('The chassis is turned upside down to install the fuel system easily.')}`,final:true}]},
  {title:'مثال 2: سؤال',ref:'ص 29',q:`<p>اكتب سؤالاً جوابه: ${e("They're carried by forklift trucks.")}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الطريقة: ${e('How')}`},{t:`الخطوة 2: ${e('are')} + ${e('the parts')} + ${e('carried')}`},{t:`الخطوة 3: ${e('How are the parts carried around the plant?')}`,final:true}]},
  {title:'مثال 3: عنوان',ref:'ص 28',q:`<p>اكتب عنوان مرحلة: يُختبر المحرك.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفعل ${e('test')} ← ${e('Testing')}`},{t:`الخطوة 2: + الشيء.`},{t:`الخطوة 3: ${e('Testing the engine')}`,final:true}]}
 ],
 quiz:[
  {q:'The car body is painted ___ it from rust.',o:['to protect','for protect','protecting','to protecting'],c:0,e:'to + الفعل.'},
  {q:'How ___ the parts delivered?',o:['are','do','is','does'],c:0,e:'are + جمع.'},
  {q:'Where ___ the panels welded?',o:['are','do','did','have'],c:0,e:'سؤال مجهول.'},
  {q:'Who is the body checked ___?',o:['by','with','from','to'],c:0,e:'by.'},
  {q:'The engine is ___ into the chassis.',o:['lowered','lower','lowering','lowers'],c:0,e:'التصريف الثالث.'},
  {q:'Why do the robots wear special clothes? —',o:['To protect the wet paint from dust.','For protect the paint.','Because protect.','Protecting the paint.'],c:0,e:'To + الفعل.'}
 ]
});

/* ========== 3 Communications ========== */
const CHAIN=[['TV station','The TV station transmits the programmes to the satellite,','which then sends the signals down to Earth.'],['satellite','The satellite sends high-frequency signals to your dish,','which reflects them to the feed horn.'],['dish','The dish reflects the signals to the feed horn,','which converts them to a lower frequency.'],['feed horn','The feed horn is connected to the DTV card,','which processes the signal.'],['DTV card','The DTV card extracts the video and audio,','which are then played via the PC monitor and speakers.']];
function lab3(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">رحلة الإشارة</h3><p class="sub">مختبر من إعدادنا مبني على نشرة التمرين 3 ص 30. اختر الجهاز، وشاهد كيف نربط جملتين بـ which.</p><div id="d"></div><div id="b"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الجملة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>على ماذا تعود which في كل جملة؟</li><li>متى نستعمل who بدل which؟</li><li>لماذا توجد فاصلة قبل which؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0;
 const sh=()=>{$('#d').innerHTML=art(CHAIN.map((x,i)=>`<g data-tip="${x[0]}"><rect x="${20+i*66}" y="${130-(i===1?60:0)}" width="58" height="44" rx="8" fill="${i===k?C.yel:C.paper}" stroke="${C.ink}" stroke-width="${i===k?3:1.5}"/>${TL(49+i*66,157-(i===1?60:0),String(i+1),{fs:16,w:700})}</g>${i<CHAIN.length-1?`<path d="M${78+i*66} ${152-(i===1?60:0)} L${86+i*66} ${152-(i===0?60:0)}" stroke="${C.ink}" stroke-width="2"/>`:''}`).join(''),'signal');
  $('#b').innerHTML=CHAIN.map((x,i)=>`<button type="button" class="btn${i===k?' pri':''}" data-i="${i}" lang="en">${i+1} ${x[0]}</button>`).join(' ');
  el.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{k=+b.dataset.i;sh()});
  const x=CHAIN[k];$('#o').innerHTML=`<p class="sub">جملتان:</p>${eb([x[1].replace(/,$/,'.'),x[2].replace(/^which (then )?/,'It $1').replace('It are','They are').replace(/^It then/,'It then')])}<p class="sub">جملة واحدة بـ which:</p>${eb([`${x[1]} ${x[2]}`])}`};
 sh();
}
const WW={sat:['Signals are transmitted to the satellite,','which','then sends the signals to Earth.','شيء'],adel:['John reports to Adel,','who','is the training manager.','شخص'],tech:['Contact our technician,','who','will repair it.','شخص'],horn:['The dish reflects the signal to the feed horn,','which','converts it to a lower frequency.','شيء']};
const LAB4D={title:'who أم which؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الجملة، ولاحظ who و which.',
 controls:[{k:'w',label:'الجملة',opts:[['sat','satellite'],['adel','Adel'],['tech','technician'],['horn','feed horn']]}],
 out:({w})=>{const [a,b,c,t]=WW[w];return{pieces:[[a,'x',''],[b,'k',t],[c,'n','']],say:`${a} ${b} ${c}`,why:`${e(b)} لأنها تعود على ${t}: ${b==='who'?'للأشخاص':'للأشياء'}.`}}})};
const CA={hf:['The signal has a high frequency.','a high-frequency signal'],hp:['This pump uses high pressure.','a high-pressure pump'],amp:['The fuse breaks at 13 amps.','a 13-amp fuse'],volt:['The cable carries 13,800 volts.','a 13,800-volt cable'],m:['My dish is 1.8 metres wide.','a 1.8-metre dish']};
const LAB4E={title:'الصفة المركبة بالشَّرطة (-)',w:(el,B)=>N.labB(el,B,{intro:'اختر الجملة، وشاهد الصفة المركبة.',
 controls:[{k:'c',label:'الجملة',opts:Object.keys(CA).map(k=>[k,k])}],
 out:({c})=>{const [a,b]=CA[c];return{pieces:[[a,'x','الجملة'],[b,'k','الصفة المركبة']],say:`${a} It's ${b}.`,why:`الصفة المركبة قبل الاسم، وبين كلمتيها شَرطة، والوحدة مفردة: ${e('13 amps → 13-amp')}.`}}})};
const R3=N.rule({title:'which و who في وصف الأنظمة، والصفات المركبة',ref:'ص 30–31، ص 104',
 intro:`حين نشرح كيف يصل البث من القمر الصناعي إلى الشاشة نصف سلسلة من الأجهزة. نربط الجمل بـ ${e('which')} و ${e('who')} حتى يكون الشرح متصلاً.`,
 parts:[
 {t:'ربط جملتين بـ which و who',short:'the satellite, which …',old:[1],q:'كيف تجعل الجملتين جملة واحدة: Signals are transmitted to the satellite. The satellite sends the signals to Earth؟',ref:'ص 31، ص 104',
  lead:`بدل تكرار الاسم في جملة ثانية نضع فاصلة ثم ${e('which')} للأشياء أو ${e('who')} للأشخاص.`,
  points:[`<b>شيء:</b> ${e('Signals are transmitted to the satellite, which then sends the signals to Earth.')}`,`<b>شخص:</b> ${e('John reports to Adel, who is the training manager.')}`,`${e('which')} تحل محل ${e('This / It / These')}، و ${e('who')} تحل محل ${e('He / She')}.`,`<b>via = by means of:</b> ${e('The feed horn is connected via a cable to the DTV card.')}`],
  grid:{head:['جملتان','جملة واحدة'],rows:[['My computer has a DTV card. This is connected to my dish.','My computer has a DTV card, which is connected to my dish.'],['Contact our technician. He will repair it.','Contact our technician, who will repair it.']]},
  pairs:[['the technician, which will repair it','the technician, who will repair it','للأشخاص who.'],['the satellite, which it sends','the satellite, which sends','لا نكرر it.']],labs:[LAB4D]},
 {t:'الصفة المركبة',short:'a high-frequency signal',old:[2],q:'كيف تقول «كابل جهده 13800 فولت» في كلمتين قبل الاسم؟',ref:'ص 31',
  lead:`نحوّل وصفاً طويلاً إلى صفة مركبة قبل الاسم، بشَرطة بين جزأيها.`,
  points:[`${e("The signal has a high frequency. → It's a high-frequency signal.")}`,`<b>الوحدة مفردة:</b> ${e("The fuse breaks at 13 amps. → It's a 13-amp fuse.")}`,`${e("The cable is six metres long. → It's a six-metre cable.")}`],
  pairs:[['a 13-amps fuse','a 13-amp fuse','الوحدة مفردة.'],['a high frequency signal','a high-frequency signal','نضع الشرطة.']],labs:[LAB4E]},
 {t:'كلمات متقاربة المعنى',short:'transmit = send',old:[3],q:'ما الكلمة البسيطة لـ transmit؟',ref:'ص 31',
  lead:`في النصوص التقنية كلمات رسمية لها مقابل بسيط.`,
  points:[`${e('transmit = send · receive = get · convert = change')}`,`${e('extract = take out · display = show · operate = work')}`]}
 ]});
B.lesson({
 id:'u4-l3',unit:4,order:3,pages:'30–31',
 title:'3 Communications — الاتصالات',
 summary:'الأقمار الصناعية للاتصالات واستقبال البث الرقمي (satellite, dish, feed horn, DTV card)، وربط الجمل بـ which و who، والكلمات المتقاربة (transmit = send)، والصفات المركبة بالشرطة (a high-frequency signal, a 13-amp fuse)، ووصف نظام بالرسم.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 30–31',html:`<p>تقرأ نشرة عن استقبال البث الرقمي من القمر الصناعي. ستتعلم:</p><ol><li>ربط الجمل بـ ${e('which')} و ${e('who')}.</li><li>كلمات تقنية ومقابلها البسيط.</li><li>الصفات المركبة بالشرطة.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u4-l3'](el,B)},
  ...R3.theory,
  {h:'تمارين الكتاب',ref:'ص 30–31',html:
   bk(1,'ص 30','ماذا تعرف عن أقمار الاتصالات؟ أجب عن الاختبار مع زميلك.',['1 c) 35,000 km','2 b) 11,000 km/h','3 a) 12 GHz','4 b) 1500 MHz'],'من صفحات Speed search: 35,700 km · 11,000 kph · 10.7–12.75 GHz · 950–2150 MHz.')+
   bk(2,'ص 30 و ص 118–119','القراءة السريعة: تحقق من إجاباتك في 1.',null)+
   bk(3,'ص 30','اقرأ النشرة وضع أسماء الأجزاء على الرسم.',['1 satellite','2 TV station','3 feed horn','4 dish','5 DTV card','6 TV','7 computer'])+
   bk(4,'ص 30','على ماذا تعود which في النص؟',['1 b) the satellite dish','2 a) the satellite','3 b) the feed horn','4 a) the DTV card'])+
   bk(5,'ص 31','اربط كل جملتين بـ who أو which.',["2 If your DTV card doesn't work, contact our technician, who will repair it.",'3 The dish reflects the signal to the feed horn, which converts the signal to a lower frequency.','4 Please send any complaints to our customer service manager, who will then contact you.','5 The radio station sends signals to the satellite, which then transmits the signals to my dish.','6 My DTV card extracts the audio and video, which are then displayed on my PC monitor.'])+
   bk(6,'ص 31','طابق الكلمات المتقاربة في المعنى.',['transmit = send','receive = get','convert = change','extract = take out','display = show','operate = work'])+
   bk(7,'ص 31','أكمل الجمل. لاحظ الشَّرطة.',['2 high-pressure','4 13,800-volt','5 1.8-metre'])+
   bk(8,'ص 31','ارسم مخططاً بسيطاً لنظام تعرفه ودوّن ملاحظات، أو استعمل نظام الصحن في الكتاب.',null)+
   bk(9,'ص 31','صِف النظام للصف واشرح كيف يعمل.',null)}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u4-l3'](el,B),title:'شرح مرئي'}]},
  ...R3.stations,
  {recap:['satellite → dish → feed horn → DTV card → monitor','…, which … (شيء) · …, who … (شخص)','via = by means of','transmit = send · convert = change · extract = take out','a high-frequency signal · a 13-amp fuse']}
 ],
 lab:lab3,
 examples:[
  {title:'مثال 1: which',ref:'ص 31',q:`<p>اربط: ${e('The engine drives a pump. The pump sends water to the tank.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الاسم المكرر ${e('the pump')} شيء.`},{t:`الخطوة 2: فاصلة + ${e('which')} بدل ${e('The pump')}.`},{t:`الخطوة 3: ${e('The engine drives a pump, which sends water to the tank.')}`,final:true}]},
  {title:'مثال 2: who',ref:'ص 31',q:`<p>اربط: ${e('Call our engineer. She will install the dish.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('She')} شخص.`},{t:`الخطوة 2: فاصلة + ${e('who')}.`},{t:`الخطوة 3: ${e('Call our engineer, who will install the dish.')}`,final:true}]},
  {title:'مثال 3: الصفة المركبة',ref:'ص 31',q:`<p>${e('The battery gives 12 volts.')} اكتبها بصفة مركبة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('12 volts')} ← ${e('12-volt')} (الوحدة مفردة).`},{t:'الخطوة 2: الصفة قبل الاسم.'},{t:`الخطوة 3: ${e("It's a 12-volt battery.")}`,final:true}]}
 ],
 quiz:[
  {q:'The dish reflects the signal to the feed horn, ___ converts it.',o:['which','who','what','it'],c:0,e:'شيء.'},
  {q:'Contact our technician, ___ will repair it.',o:['who','which','what','he'],c:0,e:'شخص.'},
  {q:'transmit =',o:['send','get','change','show'],c:0,e:'send.'},
  {q:'extract =',o:['take out','put in','change','work'],c:0,e:'take out.'},
  {q:"The fuse breaks at 13 amps. It's a ___ fuse.",o:['13-amp','13-amps','13 amps','amp-13'],c:0,e:'الوحدة مفردة.'},
  {q:'How high are communications satellites above the Earth?',o:['about 35,000 km','about 3,500 km','about 350 km','about 350,000 km'],c:0,e:'35,700 km.'}
 ]
});

/* ========== Review Unit B ========== */
const RC={Audi:{len:4178,wid:1842,hgt:1352,tank:55,speed:149,acc:6.6,mpg:36.7,co2:183},BMW:{len:4091,wid:1781,hgt:1299,tank:55,speed:137,acc:8.2,mpg:37.7,co2:181},Saab:{len:4635,wid:2038,hgt:1434,tank:62,speed:127,acc:11.0,mpg:37.2,co2:233}};
B.lesson({
 id:'u4-l4',unit:4,order:4,pages:'32–35',
 title:'Review Unit B — مراجعة الوحدتين 3 و 4',
 summary:'مراجعة المقارنة والتفضيل بمقارنة ثلاث سيارات وأنواع الوقود، والعبارات المهذبة في الهاتف و one، ومواصفات 4x4، والمبني للمجهول في وصف العمليات والأسئلة، وتحويل الوصف إلى تعليمات، وعناوين المراحل بـ ing، والصفات المركبة، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 32–35',html:`<p>هذه المراجعة تغطي الوحدتين 3 و 4.</p>`+vt([['المقارنة','faster than · more common · less noisy'],['التفضيل','the least harmful · the cleanest · the quietest'],['الهاتف',"I'd like … · Would you like me to …? · Did you say …?"],['one',"There's one with a cable, and there's a wireless one."],['المبني للمجهول','The car parts are delivered by truck or rail.'],['الغرض','to + verb: to protect it from rust'],['الصفة المركبة','a six-metre cable · a voice-activated computer']],['الموضوع','مثال'])},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u4-l4'](el,B)},
  {h:'مقارنة السيارات الثلاث',ref:'ص 32',html:vt([['Length (mm)','4178','4091','4635'],['Width (mm)','1842','1781','2038'],['Top speed (mph)','149','137','127'],['Acceleration (sec)','6.6','8.2','11.0'],['Fuel consumption (mpg)','36.7','37.7','37.2'],['CO₂ emission (g/km)','183','181','233']],['','Audi TT','BMW Z4','Saab 93'])+`<p>بيانات الكتاب ص 32. لاحظ أن ${e('mpg')} (أميال لكل جالون): الرقم الأكبر أفضل، و ${e('CO₂')} الرقم الأصغر أفضل.</p>`},
  {h:'تمارين المراجعة',ref:'ص 32–35',html:
   bk(1,'ص 32','اختر سيارتين وقارن بينهما.',['e.g. The Audi is faster than the BMW. Its top speed is 149 mph.','The BMW is shorter and narrower than the Audi.','The BMW has lower fuel consumption than the Audi (37.7 mpg).'],'إجابات نموذجية.')+
   bk(2,'ص 32','قارن السيارات الثلاث، وقل أيها تفضل ولماذا.',['e.g. The Audi is the fastest. The Saab is the longest and the widest, but it produces the most CO₂. The BMW has the lowest CO₂ emission.'],'إجابات نموذجية.')+
   bk(3,'ص 32','أكمل النص.',['4 noisier','5 heavier','6 better','7 safer','8 less combustible','9 least harmful','10 smallest','11 cleanest','12 quietest','13 least expensive','14 more durable'],'البند 14 من قراءتنا للمعنى؛ راجع التقرير.')+
   bk(4,'ص 33','طابق الجمل بوظائفها.',['1 f','2 c','3 e','4 d','5 a','6 b'])+
   bk(5,'ص 33','أكمل المكالمة.',["1 I'd",'2 Would','3 could','4 Shall','5 could','6 did','7 do',"8 I'll"])+
   bk(6,'ص 33','كلمة one ناقصة من ستة مواضع. حدّدها.',["There's one with a cable, and there's a wireless one.","There's one with a USB connection, and there's one with FireWire connection.",'Which one would you like?',"I'd like the one with the USB cable connection, please."])+
   bk(7,'ص 33','طابق أوصاف سيارة 4x4.',['1 d','2 a','3 f','4 b','5 c','6 e'])+
   bk(8,'ص 34','حوّل التعليمات إلى وصف عملية بالمبني للمجهول.',['First of all, the spark plug cover is taken off. Then the spark plug is loosened with a special wrench. Next it is removed from the socket. Then it is cleaned using a wire brush. Next it is replaced in the socket. Then it is tightened using the wrench. Finally, the cover is put back on the spark plug.'],'إجابة نموذجية.')+
   bk(9,'ص 34','حوّل الفقرة الثانية إلى تعليمات بفعل الأمر.',['1 Hammer the rod into the ground.','2 Strip the insulation off the end of the 3-metre wire.','3 Twist the wire around the rod ten times.','4 Attach the detector to the other end of the earth wire.','5 Take the 6-metre wire and connect one end to the other end of the detector.','6 Hang the antenna from a tree (make sure the bare end does not touch the earth).','7 Connect the two wires from the earphones to each end of the detector.','8 Put on the earphones.'])+
   bk(10,'ص 34','اكتب عناوين لعرض عن هذه المواضيع، كل عنوان بفعل بـ ing.',['1 Launching the communications satellite','2 Transmitting the programmes to the satellite','3 Receiving the digital signals from the satellite','4 Installing your satellite dish and digital receiver','5 Connecting your dish to the digital TV receiver','6 Converting high-frequency signals to low-frequency ones','7 Extracting the video and audio from the digital signal','8 Playing the video and audio via the monitor and speakers'])+
   bk(11,'ص 35','أكمل بالشرطة. انتبه للأسماء الجمع.',['3 three-blade (three-bladed) propeller','4 six-metre cable','5 voice-activated computer','6 touch-screen ticket machine'])+
   bk(12,'ص 35','اسأل وأجب عن مصنع تجميع السيارات.',['2a Where are the parts carried? — To different parts of the plant. · 2b How are they carried? — By forklift trucks or conveyor belts.','3a Where are the panels welded to the frame? — In the body shop. · 3b Who are they welded by? — By 400 robots. · 3c Why …? — To make the body of the car.','4a When is the car body checked? — After painting. · 4b Who is it checked by? — By human workers. · 4c Why? — To look for faults in the paint.','5a Where is the windscreen inserted? — In the front of the car body. · 5b Who is it inserted by? — By robots. · 5c How? — Using laser guides.','6a Where are the chassis and body moved? — To the final assembly line. · 6b Why? — To attach the body to the chassis.'],'إجابات نموذجية.')+
   bk(13,'ص 35','اكتب جملاً كاملة بالمبني للمجهول.',['2 The parts are carried to different parts of the plant by forklift trucks or conveyor belts.','3 The panels are welded to the frame in the body shop by 400 robots to make the body of the car.','4 The car body is checked by human workers after painting to look for faults in the paint.','5 The windscreen is inserted into the front of the car body by robots using laser guides.','6 The chassis and body are moved simultaneously to the final assembly line to attach the body to the chassis.'],'إجابات نموذجية.')+
   bk(14,'ص 35','أعد كتابة التعليمات فقرةً تصف العملية بالمبني للمجهول.',['First the bonnet of the car is opened and the battery is located. Then the battery cables are loosened, using a wrench, and they are removed from the posts. The negative (or earth) cable is always removed first, then the positive. The detached ends of the cables are carefully laid to one side. Next, corrosion is wiped away from the top of the battery, using baking soda and water. If corrosion is very heavy, it can be cleaned from the posts using a wire brush. Then petroleum jelly is applied to the inside of the terminals and the posts. Finally, the cables are reattached and the car bonnet is closed.'],'إجابة نموذجية.')+
   bk(15,'ص 35','مشروع: ابحث عن عملية مهمة في صناعة تهمك، وارسم مخطط مراحلها، واكتب وصفها، واشرحها للصف.',null)}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u4-l4'](el,B),title:'شرح مرئي'}]},
  {st:1,short:'الوحدة 3',title:'خلاصة: المقارنة والتفضيل',q:'أي السيارات الثلاث الأسرع؟ وأيها الأنظف (أقل CO₂)؟',ref:'ص 32',
   side:[{tip:`المقارنة بين اثنين بـ ${e('than')}، والتفضيل بين ثلاثة بـ ${e('the')}.`}],
   body:[{html:vt(Object.keys(RC).map(k=>[k,RC[k].speed+' mph',RC[k].co2+' g/km']),['Car','Top speed','CO₂'])},{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The Audi is ___ than the BMW.',o:['faster','fastest'],a:0},{s:'The Saab is ___ car.',o:['the longest','longer'],a:0},{s:'The BMW has ___ CO₂ emission.',o:['the lowest','lower'],a:0},{s:'LPG is ___ fuel of the three.',o:['the cleanest','cleaner'],a:0},{s:'Diesel engines are ___ than petrol ones.',o:['noisier','noisiest'],a:0}]}),title:'تدريب سريع'}]},
  {st:2,short:'الوحدة 4',title:'خلاصة: المبني للمجهول والعناوين',q:'حوّل: Take off the spark plug cover.',ref:'ص 34–35',
   side:[{tip:`التعليمة ← الوصف: ${e('First of all, the spark plug cover is taken off.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The car parts ___ by truck or rail.',o:['are delivered','deliver'],a:0},{s:'Then the spark plug ___ with a special wrench.',o:['is loosened','loosens'],a:0},{s:'___ the rod into the ground. (instruction)',o:['Hammer','The rod is hammered'],a:0},{s:'Heading: ___ the satellite',o:['Launching','Launch'],a:0},{s:"The cable is six metres long. It's a ___ cable.",o:['six-metre','six-metres'],a:0}]}),title:'تدريب سريع'}]},
  {recap:['faster than · the fastest · the least harmful','Shall I …? · Would you like me to …? · Did you say …?',"There's one with … · Which one?",'The parts are delivered … · How are they carried?','Launching the satellite · a six-metre cable']}
 ],
 examples:[
  {title:'مثال 1: المقارنة',ref:'ص 32',q:`<p>قارن تسارع Audi (6.6 ثانية) و BMW (8.2 ثانية).</p>`,given:[],solve:()=>[{t:'الخطوة 1: الوقت الأقل يعني تسارعاً أسرع.'},{t:`الخطوة 2: ${e('faster')} + ${e('than')}.`},{t:`الخطوة 3: ${e('The Audi accelerates faster than the BMW.')}`,final:true}]},
  {title:'مثال 2: من الوصف إلى التعليمة',ref:'ص 34',q:`<p>حوّل: ${e('The detector is attached to the other end of the earth wire.')}</p>`,given:[],solve:()=>[{t:'الخطوة 1: فعل الأمر في أول الجملة.'},{t:`الخطوة 2: ${e('is attached')} ← ${e('Attach')}`},{t:`الخطوة 3: ${e('Attach the detector to the other end of the earth wire.')}`,final:true}]},
  {title:'مثال 3: سؤال المصنع',ref:'ص 35',q:`<p>اسأل عن مكان لحام الألواح.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Where')}`},{t:`الخطوة 2: ${e('are')} + ${e('the panels')} + ${e('welded')}`},{t:`الخطوة 3: ${e('Where are the panels welded to the frame? — In the body shop.')}`,final:true}]}
 ],
 quiz:[
  {q:'Petrol makes a car go ___ than diesel.',o:['faster','fastest','more fast','fast'],c:0,e:'المقارنة.'},
  {q:"LPG is the ___ harmful fuel.",o:['least','less','little','lowest'],c:0,e:'التفضيل.'},
  {q:'Sorry, ___ you say db13?',o:['did','do','would','shall'],c:0,e:'تحقق.'},
  {q:'The car parts ___ to the delivery area.',o:['are delivered','deliver','are deliver','delivered'],c:0,e:'مجهول.'},
  {q:'It has high clearance =',o:["there's a lot of space between the ground and the chassis",'the petrol tank is very big','the drive shaft is long','the driver can see all around'],c:0,e:'clearance.'},
  {q:'It\'s a ___ computer. (activated by voice)',o:['voice-activated','voice activate','activated-voice','voices-activated'],c:0,e:'صفة مركبة.'}
 ]
});
})(PLCBOOK);

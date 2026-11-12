/* الوحدة 1 — Check-up: 1.1 Basics (ص 4–5) · 1.2 Letters and numbers (ص 6–7) · 1.3 Dates and times (ص 8–9)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const cap=s=>s[0].toUpperCase()+s.slice(1);
/* أنماط أدوات المختبر (المنزلقات والخانات) حتى لو فُتح تبويب المختبر أولاً */
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 1.1 Basics ========== */
const greetArt=()=>art(`
 <g data-tip="تعريف بالنفس: I'm Ali. أو My name's Ali. (I'm = I am، name's = name is)"><rect x="24" y="60" width="150" height="62" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(99,88,"Hi. I'm Ali.",{fs:14,w:700})}${TL(99,108,"I'm from Riyadh.",{fs:12})}</g>
 <g data-tip="الرد على التعارف: Pleased to meet you. أو Nice to meet you."><rect x="186" y="60" width="150" height="62" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(261,88,'Nice to meet you,',{fs:13,w:700})}${TL(261,108,'Ali.',{fs:13,w:700})}</g>
 <g data-tip="السؤال عن العمل: What do you do? والجواب: I'm a technician. (a قبل الحرف الساكن، an قبل الحرف المتحرك: an electrician)"><rect x="40" y="160" width="280" height="58" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,186,'What do you do?',{fs:14,w:700})}${TL(180,206,"I'm an electrician.",{fs:13,c:C.blue,w:700})}</g>
 <g data-tip="التعليمات (فعل الأمر): Stand up. Sit down. ونضيف please لتكون مهذبة."><rect x="70" y="240" width="220" height="44" rx="12" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,268,'Stand up, please.',{fs:14,w:700,c:'#fff'})}</g>`,'تعارف وسؤال عن العمل وتعليمات');
const OPP=[['pick up','put down','يرفع (يلتقط) ≠ يضع'],['raise','lower','يرفع ≠ يُنزل'],['read','write','يقرأ ≠ يكتب'],['say','listen','يقول ≠ يستمع'],['stand','sit','يقف ≠ يجلس'],['start','stop','يبدأ ≠ يتوقف']];
const POS=[['on ≠ off','يعمل ≠ مطفأ (الجهاز)'],['open ≠ closed','مفتوح ≠ مغلق'],['left ≠ right','يسار ≠ يمين'],['in ≠ out','داخل ≠ خارج'],['up ≠ down','أعلى ≠ أسفل'],['in / on / under the box','في / على / تحت الصندوق']];
const TOOLS=[['screwdriver','مفك'],['spanner','مفتاح ربط'],['saw','منشار'],['chisel','إزميل'],['screws','براغي (مسامير ملولبة)'],['bolts','مسامير ملولبة كبيرة (براغي بصامولة)'],['nuts','صواميل'],['washers','حلقات (وردات)'],['cable','كابل (سلك)'],['plug','قابس (فيش)'],['adapter','محوّل'],['antenna','هوائي']];
const JOBS=[['technician','a'],['electrician','an'],['engineer','an'],['builder','a'],['student','a'],['operator','an'],['mechanic','a'],['instructor','an']];
function lab11(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">كوّن تعارفاً</h3><p class="sub">مبني على «Start here» و«Speaking» ص 4. اختر الاسم والبلد والعمل، وشاهد الحوار يتغير، وانتبه لـ a و an.</p>
  <div class="ph-row"><input class="ph-num" id="nm" value="Saad" aria-label="الاسم" style="width:9em;font-family:var(--font)" dir="ltr">
  <select class="ph-sel" id="ct">${['Saudi Arabia','Egypt','Jordan','Japan','Poland','Brazil'].map(c=>`<option>${c}</option>`).join('')}</select>
  <select class="ph-sel" id="jb">${JOBS.map((j,i)=>`<option value="${i}">${j[0]}</option>`).join('')}</select></div><div id="dlg"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">لعبة التعليمات</h3><p class="sub">مثل لعبة التمرين 5 ص 5: نفّذ الأمر فقط إذا قال المتحدث please. اضغط «أمر جديد».</p>
  <button class="btn pri" type="button" id="cmd">أمر جديد</button><div id="co" style="margin-top:10px"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر <span class="en">engineer</span> ثم <span class="en">builder</span>: متى تقول <span class="en">a</span> ومتى <span class="en">an</span>؟</li><li>اكتب اسمك وبلدك، واقرأ الحوار مع زميلك بصوت عالٍ.</li><li>في لعبة التعليمات: كم أمراً نفّذته صحيحاً من عشرة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const show=()=>{const n=($('#nm').value||'Saad').trim()||'Saad',c=$('#ct').value,j=JOBS[+$('#jb').value];
  $('#dlg').innerHTML=dl([['A',"Hello. What's your name?"],['B',`I'm ${cap(n)}.`],['A','Where are you from?'],['B',`I'm from ${c}.`],['A','What do you do?'],['B',`I'm ${j[1]} ${j[0]}.`],['A',`Nice to meet you, ${cap(n)}.`]])+`<p class="sub" style="margin-top:6px">${j[1]==='an'?`${e(j[0])} تبدأ بصوت متحرك (a, e, i, o, u) فنقول ${e('an')}.`:`${e(j[0])} تبدأ بصوت ساكن فنقول ${e('a')}.`}</p>`};
 ['nm','ct','jb'].forEach(k=>$('#'+k).addEventListener('input',show));show();
 const CM=['Stand up','Sit down','Raise your left arm','Lower your arm','Pick up a pen','Put down the pen','Say hello','Read your book silently','Stop','Open your book','Close your book','Write your name'];let s=7;
 $('#cmd').onclick=()=>{s=(s*48271)%2147483647;const c=CM[s%CM.length],pl=(s>>3)%3!==0,txt=pl?(s%2?`${c}, please.`:`Please ${c.toLowerCase()}.`):`${c}!`;
  $('#co').innerHTML=`${eb(txt)}<div class="ph-row" style="margin-top:6px"><button class="btn" type="button" data-d="1">أنفّذ</button><button class="btn" type="button" data-d="0">لا أنفّذ</button></div><p class="sub" id="cr"></p>`;
  el.querySelectorAll('#co [data-d]').forEach(b=>b.onclick=()=>{const ok=(b.dataset.d==='1')===pl;$('#cr').innerHTML=ok?'<b>صحيح.</b> ':'<b>ليس كذلك.</b> ';$('#cr').innerHTML+=pl?'قال please فتنفّذ الأمر.':'لم يقل please فلا تنفّذ.'})};
}
B.lesson({
 id:'u1-l1',unit:1,order:1,pages:'4–5',
 title:'Basics — الأساسيات',
 summary:'التعارف بالفعل be (I\'m، My name\'s، Are you…?)، والسؤال عن الاسم والبلد والعمل مع a و an، والتعليمات بفعل الأمر و please، والأضداد، وكلمات الحالة والمكان، وأسماء أدوات ومثبتات شائعة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 4–5',html:`<p>هذا أول درس في المقرر: تتعرف على الناس بالإنجليزي، وتفهم التعليمات في الورشة والصف. ستتعلم:</p><ol><li>التعريف بنفسك والرد على التعارف.</li><li>السؤال عن الاسم والبلد والعمل.</li><li>التعليمات بفعل الأمر، وأضداد أفعال شائعة.</li><li>كلمات الحالة والمكان مثل ${e('on/off')} و ${e('in/out')}.</li><li>أسماء أدوات ومثبتات تراها كل يوم.</li></ol>`},
  {h:'التعارف والفعل be',ref:'ص 4',html:`<p>نعرّف بأنفسنا بـ ${e("I'm")} (= ${e('I am')}) أو ${e("My name's")} (= ${e('My name is')}). ونرد بـ ${e('Pleased to meet you.')} أو ${e('Nice to meet you.')}</p>
   ${dl([['A',"Hello. I'm Fahad Al-Qahtani."],['B',"Hi, Fahad. My name's Omar."],['A','Nice to meet you, Omar.']])}
   <p>وللتأكد من شخص نسأل بـ ${e('Are you…?')} ونجيب ${e('Yes, I am.')} أو ${e("No, I'm not.")}</p>${eb(['Excuse me. Are you Mr Salem?','Yes, I am.'])}
   ${vt([['I am','I\'m','أنا'],['My name is','My name\'s','اسمي'],['What is','What\'s','ما'],['you are','you\'re','أنت']],['الكاملة','المختصرة','المعنى'])}`},
  {h:'السؤال عن الاسم والبلد والعمل',ref:'ص 4',html:`${dl([['A',"What's your name?"],['B',"I'm Badr."],['A','Where are you from?'],['B',"I'm from Saudi Arabia."],['A','What do you do?'],['B',"I'm a technician."]])}
   <p>${e('What do you do?')} معناها «ما عملك؟». في الجواب نضع ${e('a')} قبل الكلمة التي تبدأ بصوت ساكن، و ${e('an')} قبل الصوت المتحرك:</p>${eb(["I'm <b>a</b> builder.","I'm <b>an</b> electrician.","I'm <b>a</b> student."])}`},
  {h:'التعليمات والأضداد',ref:'ص 5',html:`<p>التعليمات تبدأ بالفعل مباشرة (فعل الأمر)، ونضيف ${e('please')} للتهذيب:</p>${eb(['Stand up, please.','Please sit down.','Read the text aloud.'])}
   ${vt(OPP.map(o=>[o[0]+' ≠ '+o[1],o[2]]),['الضدان','المعنى'])}`},
  {h:'الحالة والمكان',ref:'ص 5',html:`${vt(POS,['English','المعنى'])}${eb(['The TV is on.','The doors are open.','The hammer is in the box.'])}`},
  {h:'أدوات ومثبتات',ref:'ص 5',html:vt(TOOLS,['English','المعنى'])},
  {h:'تمارين الكتاب',ref:'ص 4–5',html:
   bk(1,'ص 4','استمع وأكمل الحوارات الثلاثة بكلمات الصندوق (am، are، I\'m، is، name\'s).',['(1) am (مثال)','(2) is','(3) Are','(4) I\'m','(5) name\'s','(6) I\'m','(7) Are','(8) I\'m'])+
   bk(2,'ص 4','مع زميلك: تدرّب على حوارات التمرين 1، ثم تحدّث عن نفسك.',null)+
   bk(3,'ص 4','أكمل النموذج عن نفسك بالحروف الكبيرة (الاسم، البلد، العمل).',null)+
   bk(4,'ص 4','مع زميلك: اسأل وأجب (What\'s your name? / Where are you from? / What do you do?).',null)+
   bk(5,'ص 5','لعبة استماع: نفّذ التعليمات فقط إذا قال المتحدث please.',null)+
   bk(6,'ص 5','وصّل الأضداد (المثال: stand ≠ sit).',['pick up ≠ put down','raise ≠ lower','read ≠ write','say ≠ listen','stand ≠ sit (مثال)','start ≠ stop'])+
   bk(7,'ص 5','اختبار قصير: اختر الإجابة الصحيحة حسب الصور الست.',['1 a) on','2 b) open','3 a) left','4 a) in','5 b) down','6 a) in the box'],'إجابات الأرقام 2–5 من قراءتنا للصور.')+
   bk(8,'ص 5','طابق الصور الاثنتي عشرة مع كلمات الصندوق.',['chisel','screwdriver','spanner','saw','screws','nuts','bolts','washers','antenna','cable','adapter','plug'],'حسب ترتيب الصور 1–12.')},
  {h:'الاستماع',ref:'ص 4–5',html:au('02','ص 4 — التمرين 1','استمع إلى ثلاثة حوارات تعارف وأكمل الفراغات.')+au('03','ص 5 — التمرين 5','لعبة التعليمات: نفّذ فقط إذا سمعت please.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'التعارف',title:'التعارف والفعل be',q:'كيف تعرّف بنفسك؟ وما الفرق بين I\'m و My name\'s؟',ref:'ص 4',art:greetArt(),cap:'حوار تعارف من رسمنا. مرّر المؤشر على كل جزء (أو المسه في الجوال).',
   side:[{tip:`${e("I'm")} = ${e('I am')} و ${e("My name's")} = ${e('My name is')}. والمعنى واحد: «أنا…/اسمي…».`}],
   body:[{html:dl([['A',"Hello. I'm Majed."],['B',"Hi, Majed. My name's Turki."],['A','Pleased to meet you.']])},
    {widget:(el,B)=>N.gaps(el,B,{intro:'أكمل الحوار (أمثلة من عندنا):',items:[{s:'Hello. ___ Nawaf.',o:["I'm","I"],a:0,why:"I'm = I am."},{s:"___ you Mr Hassan? — Yes, I am.",o:['Are','Is'],a:0,why:'مع you نستعمل are.'},{s:"My ___ Sara.",o:["name's","names"],a:0,why:"name's = name is."},{s:"I'm ___ Jordan.",o:['from','in'],a:0,why:'البلد بعد from.'}]}),title:'مختبر مصغّر: أكمل التعارف'}]},
  {st:2,short:'العمل و a/an',title:'السؤال عن العمل',q:'أيهما صحيح: I\'m a electrician أم I\'m an electrician؟',ref:'ص 4',
   art:art(`${JOBS.slice(0,6).map((j,i)=>`<g data-tip="${j[1]} ${j[0]}: ${j[1]==='an'?'تبدأ بصوت متحرك فنقول an':'تبدأ بصوت ساكن فنقول a'}"><rect x="${i%2?190:30}" y="${60+Math.floor(i/2)*70}" width="140" height="48" rx="12" fill="${j[1]==='an'?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(i%2?260:100,90+Math.floor(i/2)*70,j[1]+' '+j[0],{fs:13,w:700})}</g>`).join('')}`,'a و an مع أسماء الأعمال'),
   cap:'الأصفر يبدأ بصوت متحرك (an)، والأبيض بصوت ساكن (a).',side:[{tip:`نسأل عن العمل بـ ${e('What do you do?')} لا ${e('What is your job?')} فقط؛ الاثنان صحيحان، والأول أكثر استعمالاً في الكلام.`}],
   body:[{predict:{q:'اختر الصحيح:',opts:[["<span class=\"en\">I'm an electrician.</span>",true,'electrician تبدأ بصوت متحرك e.'],["<span class=\"en\">I'm a electrician.</span>",false,'قبل الصوت المتحرك نقول an.']]}},
    {widget:(el,B)=>N.cases(el,B,{intro:'اختر a أو an:',cases:[{q:"I'm ___ engineer.",opts:[['a',0],['an',1,'engineer تبدأ بـ e.']]},{q:"He's ___ mechanic.",opts:[['a',1,'mechanic تبدأ بصوت ساكن m.'],['an',0]]},{q:"She's ___ operator.",opts:[['a',0],['an',1,'operator تبدأ بـ o.']]}]}),title:'مختبر مصغّر: a أم an'}]},
  {st:3,short:'التعليمات والأضداد',title:'التعليمات والأضداد والمكان',q:'ما ضد pick up؟ وأين المطرقة إذا كانت in the box؟',ref:'ص 5',
   art:art(`<g data-tip="in the box: داخل الصندوق"><rect x="40" y="170" width="80" height="60" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><rect x="62" y="186" width="36" height="10" rx="3" fill="${C.ink}"/>${TL(80,256,'in',{fs:14,w:700})}</g>
    <g data-tip="on the box: فوق الصندوق"><rect x="140" y="170" width="80" height="60" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><rect x="162" y="154" width="36" height="12" rx="3" fill="${C.ink}"/>${TL(180,256,'on',{fs:14,w:700})}</g>
    <g data-tip="under the box: تحت الصندوق"><rect x="240" y="150" width="80" height="60" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><rect x="262" y="216" width="36" height="12" rx="3" fill="${C.ink}"/>${TL(280,256,'under',{fs:14,w:700})}</g>
    <g data-tip="Stand up ≠ Sit down — الوقوف ضد الجلوس">${TL(180,80,'stand ≠ sit',{fs:18,w:700,c:C.blue})}</g><g data-tip="pick up ≠ put down — الرفع (الالتقاط) ضد الوضع">${TL(180,116,'pick up ≠ put down',{fs:16,w:700,c:C.red})}</g>`,'in on under والأضداد'),
   cap:'ثلاثة مواقع لمطرقة صغيرة، وضدان من الكتاب. مرّر المؤشر على كل منها.',side:[{tip:`الأمر يبدأ بالفعل: ${e('Pick up the hammer.')} — ${e('Put it in the box, please.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الضد:',items:[{s:'raise ≠ ___',o:['lower','start'],a:0},{s:'read ≠ ___',o:['write','listen'],a:0},{s:'start ≠ ___',o:['stop','sit'],a:0},{s:'The light is on. ≠ The light is ___.',o:['off','out'],a:0}]}),title:'مختبر مصغّر: الأضداد'}]},
  {st:4,short:'الأدوات',title:'أدوات ومثبتات',q:'ما الفرق بين screw و bolt و nut؟',ref:'ص 5',
   art:art(`<g data-tip="screw: برغي له رأس وسنّ مدبب، يدخل الخشب بالمفك."><path d="M60 80 l20 0 l-4 10 l0 90 l-6 14 l-6 -14 l0 -90z" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(70,230,'screw',{fs:13,w:700})}</g>
    <g data-tip="bolt: مسمار ملولب طرفه مستوٍ، يُشد بصامولة nut."><rect x="150" y="80" width="30" height="16" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/><rect x="158" y="96" width="14" height="110" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(165,230,'bolt',{fs:13,w:700})}</g>
    <g data-tip="nut: صامولة تُلف على الـ bolt."><polygon points="240,120 262,108 284,120 284,144 262,156 240,144" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><circle cx="262" cy="132" r="8" fill="${C.bg}" stroke="${C.ink}"/>${TL(262,180,'nut',{fs:13,w:700})}</g>
    <g data-tip="washer: حلقة مسطحة توضع تحت الصامولة."><circle cx="262" cy="230" r="20" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><circle cx="262" cy="230" r="8" fill="${C.bg}" stroke="${C.ink}"/>${TL(262,272,'washer',{fs:13,w:700})}</g>`,'screw bolt nut washer'),
   cap:'أربعة مثبتات من رسمنا. مرّر المؤشر على كل منها.',side:[{tip:`الجمع بإضافة ${e('s')}: ${e('screw → screws')}، ${e('nut → nuts')}.`}],
   body:[{html:vt(TOOLS,['English','المعنى'])},{widget:(el,B)=>N.cases(el,B,{intro:'ما الأداة؟',cases:[{q:'You use it to turn a screw.',opts:[['screwdriver',1],['saw',0],['plug',0]]},{q:'You use it to cut wood.',opts:[['chisel',0],['saw',1],['spanner',0]]},{q:'You put it on a bolt.',opts:[['nut',1],['cable',0],['antenna',0]]}]}),title:'مختبر مصغّر: ما الأداة؟'}]},
  {recap:['التعارف: I\'m… / My name\'s… والرد: Nice to meet you.','السؤال: What\'s your name? Where are you from? What do you do?','a قبل الصوت الساكن، an قبل المتحرك: an electrician.','الأمر يبدأ بالفعل: Stand up, please.','الأضداد: pick up ≠ put down، raise ≠ lower، start ≠ stop.']}
 ],
 lab:lab11,
 examples:[
  {title:'مثال 1: تعريف بالنفس',ref:'ص 4',q:`<p>عرّف بنفسك: اسمك Faisal، من Saudi Arabia، وتعمل فنياً (technician).</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الاسم: ${e("I'm Faisal.")}`},{t:`الخطوة 2: البلد: ${e("I'm from Saudi Arabia.")}`},{t:`الخطوة 3: technician تبدأ بصوت ساكن فنقول a: ${e("I'm a technician.")}`,final:true}]},
  {title:'مثال 2: تأكيد شخص',ref:'ص 4',q:`<p>تريد التأكد أن الرجل أمامك هو Mr Nasser. ماذا تسأل؟ وماذا يجيب إذا كان هو؟</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: نبدأ بالاعتذار المهذب: ${e('Excuse me.')}`},{t:`الخطوة 2: السؤال بـ Are: ${e('Are you Mr Nasser?')}`},{t:`الخطوة 3: الجواب القصير: ${e('Yes, I am.')}`,final:true}]},
  {title:'مثال 3: تعليمة مهذبة',ref:'ص 5',q:`<p>اطلب من زميلك أن يضع المفك على الطاولة بأدب.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الأمر يبدأ بالفعل: ${e('Put down…')}`},{t:`الخطوة 2: الشيء والمكان: ${e('the screwdriver on the table')}`},{t:`الخطوة 3: نضيف please: ${e('Please put down the screwdriver on the table.')}`,final:true}]}
 ],
 quiz:[
  {q:"Hello. ___ Ahmed.",o:["I'm","I","Me","My"],c:0,e:"I'm = I am."},
  {q:'What do you do?',o:["I'm from Egypt.","I'm a builder.","I'm fine.","My name's Ali."],c:1,e:'السؤال عن العمل.'},
  {q:"I'm ___ engineer.",o:['a','an','the','—'],c:1,e:'قبل الصوت المتحرك an.'},
  {q:'ضد pick up:',o:['put down','stand up','start','raise'],c:0,e:'pick up ≠ put down.'},
  {q:'The hammer is ___ the box. (داخل)',o:['on','under','in','up'],c:2,e:'in = داخل.'},
  {q:'أداة تقطع الخشب:',o:['saw','nut','plug','washer'],c:0,e:'saw = منشار.'},
  {q:'الرد على Nice to meet you:',o:['Nice to meet you, too.','Yes, I am.','Goodbye.',"I'm a student."],c:0,e:'نرد بالعبارة نفسها مع too.'}
 ]
});

/* ========== 1.2 Letters and numbers ========== */
const ABC={three:'BCDEGPTV',eight:'AHJK',five:'IY',ten:'FLMNSXZ',two:'QUW',exc:'OR'};
const GROUP=ch=>Object.keys(ABC).find(k=>ABC[k].includes(ch));
const GCOL={three:C.blue,eight:C.red,five:C.grn,ten:'#8a5a9a',two:'#c47b1b',exc:C.mut};
const GAR={three:'مثل three (صوت إي)',eight:'مثل eight (صوت إيه)',five:'مثل five (صوت آي)',ten:'مثل ten (صوت إ)',two:'مثل two (صوت أو)',exc:'استثناء'};
const UNITS=[['km','kilometre','kilometres','كيلومتر'],['m','metre','metres','متر'],['kg','kilogram','kilograms','كيلوغرام'],['g','gram','grams','غرام'],['L','litre','litres','لتر'],['°C','degree Celsius','degrees Celsius','درجة مئوية'],['V','volt','volts','فولت'],['A','amp','amps','أمبير'],['W','watt','watts','واط'],['kW','kilowatt','kilowatts','كيلوواط'],['rpm','revolution per minute','revolutions per minute','دورة في الدقيقة'],['km/h','kilometre per hour','kilometres per hour','كيلومتر في الساعة'],['ft','foot','feet','قدم'],['in','inch','inches','بوصة'],['gal','gallon','gallons','غالون'],['£','pound','pounds','جنيه إسترليني'],['€','euro','euros','يورو']];
const lettersArt=()=>art(`${Object.keys(ABC).map((g,i)=>`<g data-tip="${ABC[g].split('').join(' ')} — ${GAR[g]}"><rect x="${i%2?190:30}" y="${48+Math.floor(i/2)*80}" width="140" height="62" rx="12" fill="${C.paper}" stroke="${GCOL[g]}" stroke-width="3"/>${TL(i%2?260:100,74+Math.floor(i/2)*80,g==='exc'?'O R':g,{fs:14,w:700,c:GCOL[g]})}${TL(i%2?260:100,96+Math.floor(i/2)*80,ABC[g].split('').join(' '),{fs:13})}</g>`).join('')}`,'الحروف حسب أصواتها');
function lab12(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">تهجئة الكلمات</h3><p class="sub">مبني على التمرينين 3 و4 ص 6. اكتب اسماً أو بريداً، وشاهد كل حرف بلون مجموعته الصوتية، واستمع للتهجئة.</p>
  <input class="ph-num" id="wd" value="Al-Harbi" dir="ltr" aria-label="كلمة للتهجئة" style="width:16em;font-family:var(--font)"><div id="wo" style="margin-top:10px"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">الوحدات والرموز</h3><p class="sub">مبني على التمرين 9 ص 7. اختر رمزاً لترى كيف يُقرأ.</p>
  <select class="ph-sel" id="un">${UNITS.map((u,i)=>`<option value="${i}">${u[0]}</option>`).join('')}</select><input class="ph-num" id="uv" value="230" type="number" step="any" style="max-width:110px" aria-label="الرقم"><div id="uo" style="margin-top:10px"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اكتب بريدك مثل <span class="en">saad_99@mail.com</span>: كيف تُقرأ <span class="en">_</span> و <span class="en">@</span> و <span class="en">.</span>؟</li><li>اكتب اسم عائلتك وتهجّه لزميلك حرفاً حرفاً.</li><li>اختر <span class="en">°C</span> والرقم 1: لماذا صارت <span class="en">degree</span> مفردة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const SYM={'@':'at','.':'dot','_':'underscore','-':'hyphen (dash)','/':'forward slash'};
 const sp1=()=>{const w=$('#wd').value.trim();const parts=[];let txt=[];
  for(const ch of w){const U=ch.toUpperCase();if(/[A-Z]/.test(U)){const g=GROUP(U);parts.push(`<span style="display:inline-block;min-width:24px;text-align:center;font-weight:700;color:${GCOL[g]};border:2px solid ${GCOL[g]};border-radius:8px;margin:2px;padding:2px 4px" title="${GAR[g]}">${U}</span>`);txt.push(U)}
   else if(/\d/.test(ch)){parts.push(`<b style="margin:0 4px">${ch}</b>`);txt.push(ch==='0'?'oh':ch)}else if(SYM[ch]){parts.push(`<span class="en" style="margin:0 4px">${SYM[ch]}</span>`);txt.push(SYM[ch])}}
  $('#wo').innerHTML=`<div dir="ltr" lang="en">${parts.join('')}</div>${eb(txt.join(', ')||'—')}`};
 $('#wd').addEventListener('input',sp1);sp1();
 const NW=n=>{const a=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],t=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const f=x=>x<20?a[x]:x<100?t[Math.floor(x/10)]+(x%10?'-'+a[x%10]:''):x<1000?a[Math.floor(x/100)]+' hundred'+(x%100?' and '+f(x%100):''):x<1e6?f(Math.floor(x/1000))+' thousand'+(x%1000?(x%1000<100?' and ':' ')+f(x%1000):''):String(x);
  if(!isFinite(n))return '';const neg=n<0;n=Math.abs(n);const s=String(n),[i,d]=s.split('.');return (neg?'minus ':'')+f(+i)+(d?' point '+d.split('').map(c=>a[+c]).join(' '):'')};
 const us=()=>{const u=UNITS[+$('#un').value],v=parseFloat($('#uv').value);if(!isFinite(v))return;const name=Math.abs(v)===1?u[1]:u[2];
  $('#uo').innerHTML=`<div class="pk-facts"><div><span>الرمز</span><b>${u[0]}</b></div><div class="hi"><span>المعنى</span><b style="font-family:var(--font)">${u[3]}</b></div></div>${eb(`${/[£€]/.test(u[0])?u[0]+v:v+' '+u[0]} = ${NW(v)} ${name}`)}`};
 $('#un').onchange=us;$('#uv').addEventListener('input',us);us();
}
B.lesson({
 id:'u1-l2',unit:1,order:2,pages:'6–7',
 title:'Letters and numbers — الحروف والأرقام',
 summary:'نطق الحروف الإنجليزية في ست مجموعات صوتية، والتهجئة (How do you spell…?)، وقراءة الهاتف والبريد (oh، at، dot، underscore)، وقراءة الأرقام الكبيرة والعشرية، ورموز الوحدات مثل km و rpm و °C.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 6–7',html:`<p>في العمل تُملي اسماً أو رقم هاتف أو بريداً إلكترونياً، وتكتب أرقاماً بوحداتها. ستتعلم:</p><ol><li>نطق الحروف وتهجئة الكلمات.</li><li>قراءة أرقام الهاتف والبريد.</li><li>قراءة الأرقام الكبيرة والعشرية.</li><li>معاني رموز الوحدات الشائعة.</li></ol>`},
  {h:'الحروف في ست مجموعات صوتية',ref:'ص 6',html:`<p>الكتاب يقسم الحروف حسب صوتها، فتحفظها أسهل:</p>${vt(Object.keys(ABC).map(g=>[g==='exc'?'EXCEPTIONS':g,ABC[g].split('').join(' '),GAR[g]]),['المجموعة','الحروف','الصوت'])}
   <p>اسأل عن التهجئة بـ ${e('How do you spell…?')}:</p>${dl([['A','How do you spell your surname?'],['B','O-T-A-I-B-I.'],['A','Could you repeat that, please?']])}`},
  {note:'<b>توضيح للمتدرب:</b> الحرف Z يُنطق «زِد» في البريطانية و«زي» في الأمريكية. والحرفان المتكرران نقول لهما double: <span class="en">LL = double L</span>.'},
  {h:'الهاتف والبريد الإلكتروني',ref:'ص 6',html:`<p>نقرأ رقم الهاتف رقماً رقماً، والصفر ${e('oh')} غالباً، والرقمان المتشابهان ${e('double')}:</p>${eb(['0556 33 21 08 = oh five five six, double three, two one, oh eight.'])}
   ${vt([['at','@'],['dot','.'],['underscore','_'],['hyphen / dash','-'],['forward slash','/']],['نقرؤه','الرمز'])}${eb(['salem_21@tvtc.com = salem underscore twenty-one at tvtc dot com'])}`},
  {h:'قراءة الأرقام',ref:'ص 7',html:`${vt([['13 / 30','thirteen / thirty','انتبه للنبرة: thirTEEN و THIRty'],['1.2','one point two','الفاصلة العشرية = point'],['150,000','a hundred and fifty thousand','الفاصلة للآلاف'],['12,500','twelve thousand five hundred',''],['−5','minus five','']],['الرقم','نقرؤه','ملاحظة'])}`},
  {h:'رموز الوحدات',ref:'ص 7',html:`${vt(UNITS.map(u=>[u[0],u[1],u[3]]),['الرمز','الكلمة','المعنى'])}<p>بعد رقم أكبر من واحد نجمع الكلمة: ${e('230 volts')}، ${e('40 watts')}، لكن الرمز لا يُجمع: ${e('230 V')}.</p>`},
  {h:'تمارين الكتاب',ref:'ص 6–7',html:
   bk(1,'ص 6','استمع وصحّح الأخطاء الأربعة في بطاقة العمل.',['Martin → Martyn','89 → 85 (رقم الهاتف)','mart70 → mart17','.com → .co.fr'])+
   bk(2,'ص 6','استمع وأكمل النماذج الثلاثة.',['1: QUAYLE · VOX · pq99@biz.com','2: FIRE · 17 EAST Street · CS4 8NT · MATHERS','3: PIETER BRAUN · 20953 · 67 · GJ 8041'])+
   bk(3,'ص 6','أملِ تفاصيل بطاقة عملك على زميلك وتهجّها.',null)+
   bk(4,'ص 6','ضع حروف الأبجدية في العمود الصحيح.',['three: B C D E G P T V','eight: A H J K','five: I Y','ten: F L M N S X Z','two: Q U W','EXCEPTIONS: O R'])+
   bk(5,'ص 6','مسابقة تهجئة في مجموعتين: دول وعواصم.',null)+
   bk(6,'ص 7','استمع وطابق الصور A–G مع الإعلانات.',['A → 2 (radio)','B → 6 (Live Aid)','C → 5 (flight)','D → 7 (countdown)','E → 4 (train)','F → 1 (counter)','G → 3 (pay)'])+
   bk(7,'ص 7','استمع مرة أخرى وأكمل الجمل بالأرقام والحروف.',['11','1 · 98.8','18 · 80','14.43 · 9','EZ 370 · 14','0207 903 8672','20, 19, 18, 17, 16, 15, 14, 13 …'])+
   bk(8,'ص 7','لعبة Fizz Buzz: عدّوا من 1 إلى 100 في الصف.',null)+
   bk(9,'ص 7','ماذا تعني هذه الرموز؟',['km kilometre · + plus · g gram · in inch · kW kilowatt · kg kilogram','L litre · V volt · A amp · ° degree · m metre · rpm revolutions per minute','£ pound · C Celsius · − minus · ft foot/feet · km/h kilometres per hour','€ euro · W watt · gal gallon'])+
   bk(10,'ص 7','استمع واكتب الأرقام في المكان الصحيح.',['89 °C','13 A','1.2 km','13.8 m','15°','190 km/h','12,500 rpm','160 kg','40 W','230 V','€80','150,000 L'])},
  {h:'الاستماع',ref:'ص 6–7',html:au('04','ص 6 — التمرين 1','رجل يملي بيانات بطاقته. صحّح الأخطاء.')+au('05','ص 6 — التمرين 2','ثلاث مكالمات. أكمل النماذج.')+au('06','ص 7 — التمرينان 6 و 7','سبعة إعلانات فيها أرقام وحروف.')+au('07','ص 7 — التمرين 10','أرقام مع وحداتها.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الحروف',title:'الحروف في مجموعات صوتية',q:'لماذا الحروف B و C و D في مجموعة واحدة؟',ref:'ص 6',art:lettersArt(),cap:'ست مجموعات للحروف حسب صوتها. مرّر المؤشر على كل مجموعة.',
   side:[{tip:`كل حروف المجموعة الأولى تنتهي بصوت «إي» مثل ${e('three')}: بي، سي، دي.`}],
   body:[{widget:(el,B)=>N.sort(el,B,{intro:'ضع الحرف في مجموعته:',cats:['three','eight','ten','two'],items:[['G',0],['J',1],['M',2],['W',3],['P',0],['K',1]]}),title:'مختبر مصغّر: صنّف الحروف'}]},
  {st:2,short:'الهاتف والبريد',title:'التهجئة والهاتف والبريد',q:'كيف تقرأ البريد ali_7@tvtc.com؟',ref:'ص 6',
   art:art(`<rect x="30" y="90" width="300" height="70" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,132,'ali_7@tvtc.com',{fs:20,w:700})}
    <g data-tip="_ = underscore">${TL(112,190,'underscore',{fs:12,c:C.red,w:700})}</g><g data-tip="@ = at">${TL(170,212,'at',{fs:13,c:C.blue,w:700})}</g><g data-tip=". = dot">${TL(250,190,'dot',{fs:13,c:C.grn,w:700})}</g>`,'قراءة البريد'),
   cap:'بريد إلكتروني ورموزه. مرّر المؤشر على اسم كل رمز.',side:[{tip:`${e('ali_7@tvtc.com')} = ${e('ali underscore seven at tvtc dot com')}.`}],
   body:[{html:eb(['ali underscore seven at tvtc dot com'])},{widget:(el,B)=>N.cases(el,B,{intro:'كيف نقرأ الرمز؟',cases:[{q:'@',opts:[['at',1],['dot',0]]},{q:'.',opts:[['dot',1],['point',0,'point للأرقام العشرية فقط.']]},{q:'0 في رقم الهاتف',opts:[['oh',1],['O letter',0]]}]}),title:'مختبر مصغّر: الرموز'}]},
  {st:3,short:'الأرقام والوحدات',title:'الأرقام ورموز الوحدات',q:'كيف تقرأ 230 V و 1.2 km؟',ref:'ص 7',
   art:art(`${[['230 V','two hundred and thirty volts'],['1.2 km','one point two kilometres'],['40 W','forty watts'],['89 °C','eighty-nine degrees Celsius']].map((u,i)=>`<g data-tip="${u[1]}"><rect x="40" y="${50+i*62}" width="280" height="48" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,80+i*62,u[0],{fs:18,w:700})}</g>`).join('')}`,'أرقام بوحداتها'),
   cap:'أربعة أرقام بوحداتها. مرّر المؤشر لترى كيف تُقرأ.',side:[{tip:`الرمز لا يُجمع (${e('230 V')})، أما الكلمة فتُجمع (${e('230 volts')}).`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر القراءة الصحيحة:',cases:[{q:'1.2 km',opts:[['one point two kilometres',1],['one two kilometre',0]]},{q:'13.8 m',opts:[['thirteen point eight metres',1],['thirty point eight metres',0]]},{q:'12,500 rpm',opts:[['twelve thousand five hundred revolutions per minute',1],['one hundred twenty-five rpm',0]]}]}),title:'مختبر مصغّر: اقرأ الرقم'}]},
  {recap:['الحروف في ست مجموعات صوتية: three, eight, five, ten, two، والاستثناءان O و R.','How do you spell…? ونكرر بـ Could you repeat that, please?','الهاتف رقماً رقماً، والصفر oh، والمكرر double.','@ at، . dot، _ underscore.','الفاصلة العشرية point، والرمز لا يُجمع: 230 V = two hundred and thirty volts.']}
 ],
 lab:lab12,
 examples:[
  {title:'مثال 1: تهجئة اسم',ref:'ص 6',q:`<p>تهجّ الاسم ${e('BAKER')} وحدد مجموعة صوت كل حرف.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: B مثل three، A مثل eight.`},{t:`الخطوة 2: K مثل eight، E مثل three، R استثناء.`},{t:`الخطوة 3: ${e('B-A-K-E-R')}`,final:true}]},
  {title:'مثال 2: قراءة رقم هاتف',ref:'ص 6',q:`<p>اقرأ الرقم ${e('0504 11 92 70')} كما يُقرأ في الهاتف.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الصفر oh: ${e('oh five oh four')}`},{t:`الخطوة 2: 11 مكرر: ${e('double one')}`},{t:`الخطوة 3: ${e('oh five oh four, double one, nine two, seven oh')}`,final:true}]},
  {title:'مثال 3: رقم مع وحدة',ref:'ص 7',q:`<p>اكتب قراءة ${e('150,000 L')} بالكلمات.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الرقم: ${e('a hundred and fifty thousand')}`},{t:`الخطوة 2: L = litre، والرقم أكبر من واحد فنجمع: litres.`},{t:`الخطوة 3: ${e('a hundred and fifty thousand litres')}`,final:true}]}
 ],
 quiz:[
  {q:'الحرف الذي في مجموعة eight:',o:['B','H','F','Q'],c:1,e:'A H J K مثل eight.'},
  {q:'@ نقرؤها:',o:['dot','at','and','about'],c:1,e:'@ = at.'},
  {q:'1.5 kg تُقرأ:',o:['one five kilos','one point five kilograms','fifteen kilograms','one dot five kg'],c:1,e:'الفاصلة العشرية point.'},
  {q:'rpm معناها:',o:['revolutions per minute','rate per metre','road per mile','rotations per mile'],c:0,e:'دورة في الدقيقة.'},
  {q:'How do you ___ your name?',o:['write','spell','say','tell'],c:1,e:'How do you spell…?'},
  {q:'440 V:',o:['four hundred and forty volts','four four oh volt','forty-four volts','four hundred forty volt'],c:0,e:'الكلمة تُجمع: volts.'},
  {q:'الحرفان الاستثناء في الكتاب:',o:['A و E','O و R','X و Z','I و Y'],c:1,e:'O و R لا يتبعان مجموعة.'}
 ]
});

/* ========== 1.3 Dates and times ========== */
const ORD=n=>n+((n%100>=11&&n%100<=13)?'th':(['th','st','nd','rd'][n%10]||'th'));
const ORDW=['','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty-first','twenty-second','twenty-third','twenty-fourth','twenty-fifth','twenty-sixth','twenty-seventh','twenty-eighth','twenty-ninth','thirtieth','thirty-first'];
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const NUM=['oh','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
const nw=n=>n<=20?(n===0?'zero':NUM[n]):(['','','twenty','thirty','forty','fifty'][Math.floor(n/10)]+(n%10?'-'+NUM[n%10]:''));
const say24=(h,m)=>`${h===0?'zero':nw(h)} ${m===0?'hundred':(m<10?'oh '+NUM[m]:nw(m))}`;
const say12=(h,m)=>{const hh=h%12||12;return `${nw(hh)} ${m===0?"o'clock":(m<10?'oh '+NUM[m]:nw(m))} ${h<12?'am':'pm'}`};
const pad=n=>String(n).padStart(2,'0');
const clockArt=(h,m)=>{const a=((h%12)+m/60)*30*Math.PI/180,b=m*6*Math.PI/180;return `<circle cx="180" cy="150" r="96" fill="${C.paper}" stroke="${C.ink}" stroke-width="4"/>${[...Array(12)].map((_,i)=>{const t=(i+1)*30*Math.PI/180;return TL(180+78*Math.sin(t),156-78*Math.cos(t),i+1,{fs:13,w:700})}).join('')}<line x1="180" y1="150" x2="${180+50*Math.sin(a)}" y2="${150-50*Math.cos(a)}" stroke="${C.ink}" stroke-width="6" stroke-linecap="round"/><line x1="180" y1="150" x2="${180+76*Math.sin(b)}" y2="${150-76*Math.cos(b)}" stroke="${C.red}" stroke-width="3.5" stroke-linecap="round"/><circle cx="180" cy="150" r="5" fill="${C.ink}"/>`};
function lab13(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">الساعة: 24 ساعة و 12 ساعة</h3><p class="sub">مبني على التمارين 9–13 ص 9. حرّك المنزلقين وشاهد الوقت بالنظامين وكيف يُقرأ.</p>
  <label class="pk-sl"><span class="pk-h"><span>الساعة</span><b id="hh-v"></b></span><input type="range" id="hh" min="0" max="23" value="14" aria-label="الساعة"></label><label class="pk-sl"><span class="pk-h"><span>الدقائق</span><b id="mm-v"></b></span><input type="range" id="mm" min="0" max="59" value="40" aria-label="الدقائق"></label>
  <div id="co"></div><div id="cpic" style="max-width:260px;margin:auto"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">التاريخ</h3><p class="sub">مبني على التمرينين 2 و 8 ص 8–9. اختر اليوم والشهر والسنة، وشاهد طرق الكتابة والقراءة.</p>
  <div class="ph-row"><input type="number" class="ph-num" id="dd" min="1" max="31" value="23" style="max-width:80px" aria-label="اليوم"><select class="ph-sel" id="mo">${MON.map((m,i)=>`<option value="${i}" ${i===8?'selected':''}>${m}</option>`).join('')}</select><input type="number" class="ph-num" id="yy" min="1900" max="2099" value="2026" style="max-width:100px" aria-label="السنة"></div><div id="do"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اجعل الوقت 17:30: كيف يُقرأ بالنظامين؟</li><li>اختر يوم 22: لماذا صار <span class="en">22nd</span> وليس <span class="en">22th</span>؟</li><li>اكتب تاريخ ميلادك، وأمْلِه على زميلك بالصيغة الطويلة.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const tm=()=>{const h=+$('#hh').value,m=+$('#mm').value;$('#hh-v').textContent=h;$('#mm-v').textContent=m;$('#co').innerHTML=`<div class="pk-facts"><div class="hi"><span>نظام 24 ساعة</span><b>${pad(h)}.${pad(m)}</b></div><div><span>نظام 12 ساعة</span><b>${(h%12||12)}.${pad(m)} ${h<12?'am':'pm'}</b></div></div>${eb([say24(h,m),say12(h,m)])}`;
  $('#cpic').innerHTML=`<svg viewBox="80 40 200 220">${clockArt(h,m)}</svg>`};
 ['hh','mm'].forEach(k=>$('#'+k).addEventListener('input',tm));tm();
 const dt=()=>{const d=Math.min(31,Math.max(1,+$('#dd').value||1)),mi=+$('#mo').value,y=+$('#yy').value||2026;
  $('#do').innerHTML=`<div class="pk-facts"><div><span>بريطانيا dd/mm/yy</span><b>${pad(d)}/${pad(mi+1)}/${String(y).slice(2)}</b></div><div><span>أمريكا mm/dd/yy</span><b>${pad(mi+1)}/${pad(d)}/${String(y).slice(2)}</b></div><div class="hi"><span>ISO yyyy-mm-dd</span><b>${y}-${pad(mi+1)}-${pad(d)}</b></div></div>${eb([`${ORD(d)} ${MON[mi]} ${y}`,`the ${ORDW[d]} of ${MON[mi]}`])}`};
 ['dd','mo','yy'].forEach(k=>$('#'+k).addEventListener('input',dt));dt();
}
B.lesson({
 id:'u1-l3',unit:1,order:3,pages:'8–9',
 title:'Dates and times — التواريخ والأوقات',
 summary:'الأعداد الترتيبية (1st، 2nd، 3rd، 4th) وكتابة التاريخ وقراءته، وأسماء الأشهر والأيام، و on Mondays للتكرار، والوقت بنظامي 24 و 12 ساعة وقراءته، ودعوة بسيطة بالتاريخ والوقت.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 8–9',html:`<p>المواعيد والرحلات ومواعيد التسليم كلها تواريخ وأوقات. ستتعلم:</p><ol><li>الأعداد الترتيبية وكتابة التاريخ وقراءته.</li><li>أسماء الأشهر والأيام، و ${e('on Mondays')}.</li><li>الوقت بنظامي 24 ساعة و 12 ساعة وقراءته.</li></ol>`},
  {h:'الأعداد الترتيبية',ref:'ص 8',html:`${vt([['-st','1st, 21st, 31st','first, twenty-first'],['-nd','2nd, 22nd','second, twenty-second'],['-rd','3rd, 23rd','third, twenty-third'],['-th','4th–20th, 24th–30th','fourth, eleventh, twelfth, thirteenth…']],['النهاية','الأرقام','القراءة'])}<p>انتبه: ${e('11th, 12th, 13th')} تنتهي بـ ${e('th')} رغم أن آخرها 1 و 2 و 3.</p>`},
  {h:'الأشهر والأيام',ref:'ص 8',html:`${eb([MON.join(', ')])}${eb([DAYS.join(', ')])}<p>${e('on Monday')} = يوم الاثنين هذا، و ${e('on Mondays')} = كل اثنين:</p>${eb(['The bus leaves on Sundays and Wednesdays.'])}`},
  {h:'كتابة التاريخ وقراءته',ref:'ص 9',html:`${vt([['dd/mm/yy','بريطانيا وأوروبا','23/09/26'],['mm/dd/yy','أمريكا','09/23/26'],['yyyy-mm-dd','ISO 8601 (دولي)','2026-09-23']],['الصيغة','المكان','مثال'])}<p>ونقرؤه: ${e('the twenty-third of September, twenty twenty-six')}.</p>${eb(['the twenty-third of September, twenty twenty-six'])}`},
  {h:'الوقت بنظامي 24 و 12 ساعة',ref:'ص 9',html:`${vt([['07.50','7.50 am','seven fifty'],['14.40','2.40 pm','fourteen forty / two forty pm'],['20.05','8.05 pm','twenty oh five / eight oh five pm'],['12.00','12 noon','twelve hundred / twelve o\'clock']],['24 ساعة','12 ساعة','القراءة'])}<p>${e('am')} قبل الظهر و ${e('pm')} بعده. وفي نظام 24 ساعة نقرأ الصفر ${e('oh')}: ${e('09.05 = oh nine oh five')}.</p>`},
  {h:'دعوة بالتاريخ والوقت',ref:'ص 9',html:dl([['A',"When's the meeting?"],['B',"It's on Sunday."],['A','Is that Sunday the 14th?'],['B',"Yes, that's right."],['A','What time?'],['B','9.30.'],['A','OK. See you then.']])},
  {h:'تمارين الكتاب',ref:'ص 8–9',html:
   bk(1,'ص 8','استمع إلى نتائج السباق: أضف المراكز وأكمل الأزمنة.',['(1) 3rd','(2) 3:35.61','(3) 3:34.18','(4) 2nd','(5) 3:36.33','(6) 5th'])+
   bk(2,'ص 8','ضع الأعداد الترتيبية 1st–31st في الجدول واقرأها.',['-st: 1st, 21st, 31st','-nd: 2nd, 22nd','-rd: 3rd, 23rd','-th: 4th–20th, 24th–30th'])+
   bk(3,'ص 8','قل أسماء الأشهر.',null)+bk(4,'ص 8','قل أيام الأسبوع، ابدأ بـ Monday.',null)+
   bk(5,'ص 8','اقرأ رموز المطارات.',null)+
   bk(6,'ص 8','قل أيام الرحلات من الجدول.',['LH 306: Mondays and Thursdays (مثال)','AF 835: Tuesdays, Thursdays and Saturdays','EK 971: Mondays, Tuesdays, Thursdays and Fridays','MS 740: Mondays, Wednesdays, Fridays and Sundays','AZ 7788: Tuesdays, Wednesdays, Fridays and Saturdays','SA 104: Mondays, Thursdays and Sundays'])+
   bk(7,'ص 9','استمع واكتب التواريخ (dd/mm/yy).',['28/12/10','18/11/08','21/07/99','12/01/09'])+
   bk(8,'ص 9','اكتب تواريخ مهمة لك وأملِها على زميلك.',null)+
   bk(9,'ص 9','أكمل جدول الوقت بالنظامين.',['(1) 7.50 am (مثال)','(2) 06.30','(3) 3.15 pm','(4) 2.40 pm','(5) 16.45','(6) 13.35','(7) 8.25 pm','(8) 5.55 am','(9) 21.10'])+
   bk(10,'ص 9','اقرأ الأوقات بنظام 24 ثم بنظام 12.',null)+
   bk(11,'ص 9','استمع وأضف أوقات الإقلاع والوصول إلى جدول التمرين 6 (24 ساعة).',['LH 306: 07.30 → 09.05','AF 835: 08.20 → 10.10','EK 971: 06.30 → 15.15','MS 740: 14.40 → 17.50','AZ 7788: 21.10 → 04.15 (next day)','SA 104: 15.45 → 21.25'])+
   bk(12,'ص 9','استمع واكتب رقم كل جملة بجانب الساعة.',['A → 2','B → 4','C → 3','D → 1'])+
   bk(13,'ص 9','اقرأ الأوقات والتواريخ على الساعات بنظام 12 ساعة.',null)+
   bk(14,'ص 9','تدرّب على حوار الدعوة بأيام وأوقات مختلفة.',null)},
  {h:'الاستماع',ref:'ص 8–9',html:au('08','ص 8 — التمرين 1','نتائج سباق 1500 متر.')+au('09','ص 9 — التمرين 7','أربعة تواريخ.')+au('10','ص 9 — التمرين 11','أوقات الرحلات.')+au('11','ص 9 — التمرين 12','أوقات وتواريخ على الساعات.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الترتيبية',title:'الأعداد الترتيبية والتاريخ',q:'لماذا نكتب 22nd لكن 12th؟',ref:'ص 8',
   art:art(`${[[1,'st'],[2,'nd'],[3,'rd'],[4,'th'],[12,'th'],[22,'nd']].map((x,i)=>`<g data-tip="${x[0]}${x[1]} = ${ORDW[x[0]]}"><rect x="${i%3*100+30}" y="${70+Math.floor(i/3)*100}" width="90" height="70" rx="12" fill="${x[0]===12?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(i%3*100+75,112+Math.floor(i/3)*100,x[0]+x[1],{fs:22,w:700})}</g>`).join('')}`,'أعداد ترتيبية'),
   cap:'ستة أعداد ترتيبية. 12th بالأصفر لأنها استثناء. مرّر المؤشر على كل منها.',side:[{tip:`11 و 12 و 13 تنتهي دائماً بـ ${e('th')}: ${e('eleventh, twelfth, thirteenth')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر الكتابة الصحيحة:',cases:[{q:'21',opts:[['21st',1],['21th',0]]},{q:'13',opts:[['13rd',0],['13th',1,'13 استثناء.']]},{q:'32? لا يوجد في التاريخ؛ 31',opts:[['31st',1],['31th',0]]}]}),title:'مختبر مصغّر: الترتيبية'}]},
  {st:2,short:'الأيام والأشهر',title:'الأيام والأشهر و on Mondays',q:'ما الفرق بين on Monday و on Mondays؟',ref:'ص 8',
   art:art(`${DAYS.map((d,i)=>`<g data-tip="${d}"><rect x="${30+i*43}" y="110" width="40" height="70" rx="8" fill="${[0,3].includes(i)?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(50+i*43,150,d.slice(0,3),{fs:12,w:700})}</g>`).join('')}${TL(180,220,'on Mondays and Thursdays',{fs:14,w:700,c:C.blue})}`,'أيام الأسبوع'),
   cap:'الأيام الملونة يتكرر فيها الشيء كل أسبوع.',side:[{tip:`${e('on Mondays')} = كل يوم اثنين (تكرار).`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:'The flight leaves ___ Fridays.',o:['on','in'],a:0},{s:'The ___ month of the year is March.',o:['third','three'],a:0},{s:'The day after Tuesday is ___.',o:['Wednesday','Thursday'],a:0}]}),title:'مختبر مصغّر: الأيام'}]},
  {st:3,short:'الوقت',title:'الوقت بنظامي 24 و 12 ساعة',q:'14.40 بنظام 12 ساعة كم؟',ref:'ص 9',art:art(clockArt(14,40)+`${TL(180,282,'14.40 = 2.40 pm',{fs:16,w:700,c:C.blue})}`,'ساعة 2:40'),cap:'الساعة 2:40 بعد الظهر.',
   side:[{tip:`من 13 إلى 23 اطرح 12 وأضف ${e('pm')}: ${e('14.40 → 2.40 pm')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'حوّل:',cases:[{q:'18.15',opts:[['6.15 pm',1],['8.15 pm',0]]},{q:'09.30',opts:[['9.30 am',1],['9.30 pm',0]]},{q:'7.45 pm',opts:[['19.45',1],['17.45',0]]}]}),title:'مختبر مصغّر: حوّل الوقت'}]},
  {recap:['1st 2nd 3rd ثم th، و 11th 12th 13th استثناء.','on Mondays = كل اثنين.','بريطانيا dd/mm/yy، أمريكا mm/dd/yy، ISO yyyy-mm-dd.','نقرأ التاريخ: the twenty-third of September.','الوقت: 14.40 = 2.40 pm، والصفر oh: 09.05 oh nine oh five.']}
 ],
 lab:lab13,
 examples:[
  {title:'مثال 1: تاريخ بالكلمات',ref:'ص 9',q:`<p>اكتب التاريخ ${e('03/05/2027')} (بريطاني) بالكلمات.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: الصيغة البريطانية يوم/شهر: اليوم 3 والشهر 5.'},{t:`الخطوة 2: 3 = ${e('third')}، 5 = ${e('May')}.`},{t:`الخطوة 3: ${e('the third of May, twenty twenty-seven')}`,final:true}]},
  {title:'مثال 2: من 24 إلى 12 ساعة',ref:'ص 9',q:`<p>حوّل ${e('21.05')} إلى نظام 12 ساعة واقرأه.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: 21 أكبر من 12، فنطرح 12: 9.'},{t:`الخطوة 2: بعد الظهر: ${e('9.05 pm')}.`},{t:`الخطوة 3: القراءة: ${e('nine oh five pm')}`,final:true}]},
  {title:'مثال 3: أيام الرحلة',ref:'ص 8',q:`<p>رحلة أيامها في الجدول 2 و 5 (1 = Monday). اكتب جملة.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: 2 = ${e('Tuesday')}، 5 = ${e('Friday')}.`},{t:`الخطوة 2: التكرار بالجمع: ${e('on Tuesdays and Fridays')}.`},{t:`الخطوة 3: ${e('The flight departs on Tuesdays and Fridays.')}`,final:true}]}
 ],
 quiz:[
  {q:'22 الترتيبي:',o:['22th','22nd','22rd','22st'],c:1,e:'آخره 2 فينتهي بـ nd.'},
  {q:'the twelfth of June:',o:['12th June','2nd June','20th June','12st June'],c:0,e:'twelfth = 12th.'},
  {q:'19.30 بنظام 12:',o:['9.30 pm','7.30 pm','7.30 am','9.30 am'],c:1,e:'19 − 12 = 7، وبعد الظهر pm.'},
  {q:'on Saturdays معناها:',o:['السبت القادم فقط','كل يوم سبت','قبل السبت','بعد السبت'],c:1,e:'الجمع للتكرار.'},
  {q:'الصيغة الأمريكية للتاريخ:',o:['dd/mm/yy','mm/dd/yy','yyyy-mm-dd','yy/dd/mm'],c:1,e:'الشهر أولاً.'},
  {q:'08.05 تُقرأ:',o:['oh eight oh five','eight five','zero eight five','eighty-five'],c:0,e:'الصفر oh.'},
  {q:'الشهر الثامن:',o:['June','August','October','July'],c:1,e:'August.'}
 ]
});
})(PLCBOOK);

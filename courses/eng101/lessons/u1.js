/* الوحدة 1 — Check-up: 1.1 Basics (ص 4–5) · 1.2 Letters and numbers (ص 6–7) · 1.3 Dates and times (ص 8–9)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const cap=s=>s[0].toUpperCase()+s.slice(1);
/* أنماط أدوات المختبر (المنزلقات والخانات) حتى لو فُتح تبويب المختبر أولاً */
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 1.1 Basics ========== */
const greetArt=()=>art(`
 <g data-tip="تعريف بالنفس: I'm Alex. أو My name's Alex. (I'm = I am، name's = name is)"><rect x="24" y="60" width="150" height="62" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(99,88,"Hi. I'm Alex.",{fs:14,w:700})}${TL(99,108,"I'm from London.",{fs:12})}</g>
 <g data-tip="الرد على التعارف: Pleased to meet you. أو Nice to meet you."><rect x="186" y="60" width="150" height="62" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(261,88,'Nice to meet you,',{fs:13,w:700})}${TL(261,108,'Alex.',{fs:13,w:700})}</g>
 <g data-tip="السؤال عن العمل: What do you do? والجواب: I'm a technician. (a قبل الحرف الساكن، an قبل الحرف المتحرك: an electrician)"><rect x="40" y="160" width="280" height="58" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,186,'What do you do?',{fs:14,w:700})}${TL(180,206,"I'm an electrician.",{fs:13,c:C.blue,w:700})}</g>
 <g data-tip="التعليمات (فعل الأمر): Stand up. Sit down. ونضيف please لتكون مهذبة."><rect x="70" y="240" width="220" height="44" rx="12" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,268,'Stand up, please.',{fs:14,w:700,c:'#fff'})}</g>`,'تعارف وسؤال عن العمل وتعليمات');
const OPP=[['pick up','put down','يرفع (يلتقط) ≠ يضع'],['raise','lower','يرفع ≠ يُنزل'],['read','write','يقرأ ≠ يكتب'],['say','listen','يقول ≠ يستمع'],['stand','sit','يقف ≠ يجلس'],['start','stop','يبدأ ≠ يتوقف']];
const POS=[['on ≠ off','يعمل ≠ مطفأ (الجهاز)'],['open ≠ closed','مفتوح ≠ مغلق'],['left ≠ right','يسار ≠ يمين'],['in ≠ out','داخل ≠ خارج'],['up ≠ down','أعلى ≠ أسفل'],['in / on / under the box','في / على / تحت الصندوق']];
const TOOLS=[['screwdriver','مفك'],['spanner','مفتاح ربط'],['saw','منشار'],['chisel','إزميل'],['screws','براغي (مسامير ملولبة)'],['bolts','مسامير ملولبة كبيرة (براغي بصامولة)'],['nuts','صواميل'],['washers','حلقات (وردات)'],['cable','كابل (سلك)'],['plug','قابس (فيش)'],['adapter','محوّل'],['antenna','هوائي']];
const JOBS=[['technician','a'],['electrician','an'],['engineer','an'],['builder','a'],['student','a'],['operator','an'],['mechanic','a'],['instructor','an']];
function lab11(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">كوّن تعارفاً</h3><p class="sub">مبني على «Start here» و«Speaking» ص 4. اختر الاسم والبلد والعمل، وشاهد الحوار يتغير، وانتبه لـ a و an.</p>
  <div class="ph-row"><input class="ph-num" id="nm" value="Steve" aria-label="الاسم" style="width:9em;font-family:var(--font)" dir="ltr">
  <select class="ph-sel" id="ct">${['Saudi Arabia','Egypt','Jordan','Japan','Poland','Brazil'].map(c=>`<option>${c}</option>`).join('')}</select>
  <select class="ph-sel" id="jb">${JOBS.map((j,i)=>`<option value="${i}">${j[0]}</option>`).join('')}</select></div><div id="dlg"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">لعبة التعليمات</h3><p class="sub">مثل لعبة التمرين 5 ص 5: نفّذ الأمر فقط إذا قال المتحدث please. اضغط «أمر جديد».</p>
  <button class="btn pri" type="button" id="cmd">أمر جديد</button><div id="co" style="margin-top:10px"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر <span class="en">engineer</span> ثم <span class="en">builder</span>: متى تقول <span class="en">a</span> ومتى <span class="en">an</span>؟</li><li>اكتب اسمك وبلدك، واقرأ الحوار مع زميلك بصوت عالٍ.</li><li>في لعبة التعليمات: كم أمراً نفّذته صحيحاً من عشرة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const show=()=>{const n=($('#nm').value||'Steve').trim()||'Steve',c=$('#ct').value,j=JOBS[+$('#jb').value];
  $('#dlg').innerHTML=dl([['A',"Hello. What's your name?"],['B',`I'm ${cap(n)}.`],['A','Where are you from?'],['B',`I'm from ${c}.`],['A','What do you do?'],['B',`I'm ${j[1]} ${j[0]}.`],['A',`Nice to meet you, ${cap(n)}.`]])+`<p class="sub" style="margin-top:6px">${j[1]==='an'?`${e(j[0])} تبدأ بصوت متحرك (a, e, i, o, u) فنقول ${e('an')}.`:`${e(j[0])} تبدأ بصوت ساكن فنقول ${e('a')}.`}</p>`};
 ['nm','ct','jb'].forEach(k=>$('#'+k).addEventListener('input',show));show();
 const CM=['Stand up','Sit down','Raise your left arm','Lower your arm','Pick up a pen','Put down the pen','Say hello','Read your book silently','Stop','Open your book','Close your book','Write your name'];let s=7;
 $('#cmd').onclick=()=>{s=(s*48271)%2147483647;const c=CM[s%CM.length],pl=(s>>3)%3!==0,txt=pl?(s%2?`${c}, please.`:`Please ${c.toLowerCase()}.`):`${c}!`;
  $('#co').innerHTML=`${eb(txt)}<div class="ph-row" style="margin-top:6px"><button class="btn" type="button" data-d="1">أنفّذ</button><button class="btn" type="button" data-d="0">لا أنفّذ</button></div><p class="sub" id="cr"></p>`;
  el.querySelectorAll('#co [data-d]').forEach(b=>b.onclick=()=>{const ok=(b.dataset.d==='1')===pl;$('#cr').innerHTML=ok?'<b>صحيح.</b> ':'<b>ليس كذلك.</b> ';$('#cr').innerHTML+=pl?'قال please فتنفّذ الأمر.':'لم يقل please فلا تنفّذ.'})};
}
/* ===== مختبرات «شرح القاعدة» 1.1 ===== */
const BE11={I:['am',"I'm","I'm not",'أنا'],you:['are',"You're","You aren't",'أنت'],he:['is',"He's","He isn't",'هو'],she:['is',"She's","She isn't",'هي'],it:['is',"It's","It isn't",'هو/هي لغير الإنسان'],we:['are',"We're","We aren't",'نحن'],they:['are',"They're","They aren't",'هم']};
const CM11={I:'a student',you:'an engineer',he:'from Egypt',she:'a technician',it:'a screwdriver',we:'students',they:'from Jordan'};
const LAB11A={title:'am أم is أم are؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الضمير ونوع الجملة، وشاهد صيغة be التي تناسبه.',
 controls:[{k:'s',label:'الضمير',opts:Object.keys(BE11).map(k=>[k,k])},{k:'t',label:'الجملة',opts:[['pos','مثبتة'],['short','مختصرة'],['neg','منفية'],['q','سؤال']]}],
 out:({s,t})=>{const x=BE11[s],c=CM11[s],S=s==='I'?'I':s.replace(/^./,m=>m.toUpperCase());
  if(t==='pos')return{pieces:[[S,'x',x[3]],[x[0],'k',s==='I'?'مع I: am':x[0]==='is'?'مع he/she/it: is':'مع you/we/they: are'],[c+'.','n','']],say:`${S} ${x[0]} ${c}.`,why:'am مع I فقط، و is مع he و she و it، و are مع you و we و they.'};
  if(t==='short')return{pieces:[[x[1],'k',`${s} + ${x[0]}`],[c+'.','n','']],say:`${x[1]} ${c}.`,why:'في الكلام نختصر: نحذف أول حرف من be ونضع مكانه علامة (\').'};
  if(t==='neg')return{pieces:[[x[2],'k','نفي: not بعد be'],[c+'.','n','']],say:`${x[2]} ${c}.`,why:"النفي: نضع not بعد be. ومع I نقول I'm not فقط."};
  const Q=x[0].replace(/^./,m=>m.toUpperCase()),yes=s==='I'?'Yes, you are.':s==='you'?'Yes, I am.':`Yes, ${s} ${x[0]}.`;
  return{pieces:[[Q,'k','be في أول السؤال'],[s==='I'?'I':s,'x',''],[c+'?','n',''],[yes,'q','جواب قصير']],say:`${Q} ${s==='I'?'I':s} ${c}? ${yes}`,why:'في السؤال نقدّم be على الضمير. وفي جواب «نعم» القصير لا نختصر.'}}})};
const LAB11B={title:'عرّف بنفسك',w:(el,B)=>N.labB(el,B,{intro:'اختر الاسم وطريقة التعريف، وشاهد التعارف والرد عليه.',
 controls:[{k:'n',label:'الاسم',opts:[['Felix','Felix'],['Oliver','Oliver'],['Ben','Ben']]},{k:'f',label:'الطريقة',opts:[['im',"I'm …"],['name',"My name's …"],['check','Are you …?']]}],
 out:({n,f})=>{if(f==='im')return{pieces:[['Hello.','x',''],["I'm",'k','= I am'],[n+'.','n','الاسم'],['Nice to meet you.','q','الرد']],say:`Hello. I'm ${n}. Nice to meet you.`,why:"I'm = I am: أنا. والرد Nice to meet you أو Pleased to meet you."};
  if(f==='name')return{pieces:[['Hi.','x',''],["My name's",'k','= My name is'],[n+'.','n','الاسم'],['Pleased to meet you.','q','الرد']],say:`Hi. My name's ${n}. Pleased to meet you.`,why:"My name's = My name is: اسمي. والمعنى مثل I'm."};
  return{pieces:[['Excuse me.','x','للتنبيه بأدب'],['Are you','k','هل أنت'],[n+'?','n',''],['Yes, I am.','q',"أو No, I'm not."]],say:`Excuse me. Are you ${n}? Yes, I am.`,why:'للتأكد من شخص نسأل Are you …? ونجيب بجواب قصير.'}}})};
const JOB11={technician:'فني',electrician:'كهربائي',engineer:'مهندس',builder:'عامل بناء',student:'طالب',operator:'مشغّل',mechanic:'ميكانيكي',architect:'مهندس معماري'};
const LAB11C={title:'a أم an؟',w:(el,B)=>N.labB(el,B,{intro:'اختر العمل، وشاهد هل يأتي قبله a أو an، والسبب.',
 controls:[{k:'j',label:'العمل',opts:Object.keys(JOB11).map(k=>[k,k])}],
 out:({j})=>{const an=/^[aeiou]/.test(j);
  return{pieces:[['What do you do?','x','ما عملك؟'],["I'm",'x',''],[an?'an':'a','k',an?'صوت متحرك ← an':'صوت ساكن ← a'],[j+'.','n',JOB11[j]]],say:`What do you do? I'm ${an?'an':'a'} ${j}.`,why:an?`${j} تبدأ بصوت متحرك (a, e, i, o, u)، فنقول an.`:`${j} تبدأ بصوت ساكن، فنقول a.`}}})};
const IN11=[['stand up','sit down'],['pick up the hammer','put down the hammer'],['start the machine','stop the machine'],['read the text','write the answer'],['raise your hand','lower your hand']];
const LAB11D={title:'ركّب التعليمة',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل وضده، ومكان please، وشاهد التعليمة.',
 controls:[{k:'i',label:'الفعل',opts:IN11.map((x,i)=>[String(i),x[0].split(' ')[0]+' / '+x[1].split(' ')[0]])},{k:'w',label:'الاختيار',opts:[['0','الفعل'],['1','ضده']]},{k:'p',label:'please',opts:[['','بدون'],['s','في البداية'],['e','في النهاية']]}],
 out:({i,w,p})=>{const v=IN11[+i][+w],V=v.replace(/^./,m=>m.toUpperCase());
  const pieces=p==='s'?[['Please','q','للتهذيب'],[v+'.','n','الفعل أولاً']]:p==='e'?[[V+',','n','الفعل أولاً'],['please.','q','للتهذيب']]:[[V+'.','n','الفعل أولاً']];
  return{pieces,say:p==='s'?`Please ${v}.`:p==='e'?`${V}, please.`:`${V}.`,ar:`ضده: ${IN11[+i][+w?0:1]}`,why:'التعليمة تبدأ بالفعل مباشرة، ونضيف please في أولها أو آخرها للتهذيب.'}}})};
const box11=(w)=>{const hm={in:'<g transform="translate(250 66)"><rect x="0" y="0" width="60" height="9" rx="2" fill="#8a5a2b"/><rect x="48" y="-12" width="14" height="30" rx="3" fill="#555"/></g>',on:'<g transform="translate(250 28)"><rect x="0" y="0" width="60" height="9" rx="2" fill="#8a5a2b"/><rect x="48" y="-12" width="14" height="30" rx="3" fill="#555"/></g>',under:'<g transform="translate(250 124)"><rect x="0" y="0" width="60" height="9" rx="2" fill="#8a5a2b"/><rect x="48" y="-12" width="14" height="30" rx="3" fill="#555"/></g>'}[w];
 const boxb=`<rect x="220" y="44" width="120" height="70" fill="${C.yel}" stroke="${C.ink}" stroke-width="2" opacity="${w==='in'?0.55:1}"/>`;
 return `<svg viewBox="0 0 560 150" aria-hidden="true"><rect width="560" height="150" rx="14" fill="${C.bg}"/><line x1="140" y1="140" x2="420" y2="140" stroke="${C.ink}" stroke-width="2"/>${w==='under'?'<rect x="230" y="114" width="10" height="26" fill="'+C.ink+'"/><rect x="320" y="114" width="10" height="26" fill="'+C.ink+'"/>':''}${w==='in'?hm+boxb:boxb+hm}</svg>`};
const LAB11E={title:'in أم on أم under؟',w:(el,B)=>N.labB(el,B,{intro:'اختر مكان المطرقة، وشاهد الرسم والجملة.',
 controls:[{k:'w',label:'المكان',opts:[['in','داخل'],['on','فوق'],['under','تحت']]}],
 out:({w})=>({svg:box11(w),pieces:[['The hammer','x',''],['is','x',''],[w,'k',{in:'داخل',on:'فوق (على)',under:'تحت'}[w]],['the box.','n','']],say:`The hammer is ${w} the box.`,why:{in:'in: داخل الشيء.',on:'on: فوقه وملامس له.',under:'under: تحته.'}[w]})})};
const TL11={screwdriver:['a','screwdrivers','مفك'],spanner:['a','spanners','مفتاح ربط'],saw:['a','saws','منشار'],chisel:['a','chisels','إزميل'],screw:['a','screws','برغي'],bolt:['a','bolts','مسمار بصامولة'],nut:['a','nuts','صامولة'],washer:['a','washers','حلقة (وردة)'],adapter:['an','adapters','محوّل'],aerial:['an','aerials','هوائي']};
const LAB11F={title:'المفرد والجمع',w:(el,B)=>N.labB(el,B,{intro:'اختر الأداة والعدد، وشاهد a أو an مع المفرد، و s مع الجمع.',
 controls:[{k:'t',label:'الأداة',opts:Object.keys(TL11).map(k=>[k,k])},{k:'n',label:'العدد',opts:[['1','واحد'],['2','أكثر']]}],
 out:({t,n})=>{const x=TL11[t];if(n==='1')return{pieces:[[x[0],'k',x[0]==='an'?'صوت متحرك ← an':'a'],[t,'n',x[2]]],say:`${x[0]} ${t}`,why:'مع الشيء الواحد a أو an.'};
  return{pieces:[['two','k','رقم'],[x[1],'n','+ s للجمع']],say:`two ${x[1]}`,why:`الجمع: نضيف s: ${t} ← ${x[1]}.`}}})};
const R11=N.rule({title:'التعارف، والفعل be، والتعليمات، والأماكن، والأدوات',ref:'ص 4–5',
 intro:`هذا أول درس، ونبني فيه الأساس خطوة خطوة: الفعل ${e('be')} مع الضمائر، ثم التعارف، ثم السؤال عن العمل مع ${e('a')} و ${e('an')}، ثم التعليمات، ثم المكان والحالة، ثم أسماء الأدوات بالمفرد والجمع.`,
 parts:[
 {t:'الفعل be مع الضمائر',short:'الضمائر و be',q:'متى نقول am ومتى is ومتى are؟',add:true,
  lead:`قبل أن نتعارف نحتاج الفعل ${e('be')}، ومعناه «يكون». لا يظهر في الجملة العربية غالباً (نقول «أنا طالب» بلا فعل)، لكنه لازم في الجملة الإنجليزية: ${e('I am a student.')}`,
  points:[`<b>${e('be')} له ثلاث صيغ في المضارع</b>، ونختار منها حسب الضمير:<br>${e('am')} مع ${e('I')} فقط.<br>${e('is')} مع ${e('he · she · it')}.<br>${e('are')} مع ${e('you · we · they')}.`,
   `<b>الاختصار</b> يكثر في الكلام: نحذف أول حرف من ${e('be')} ونضع مكانه علامة: ${e("I'm · you're · he's · she's · it's · we're · they're")}`,
   `<b>النفي:</b> نضع ${e('not')} بعد ${e('be')}: ${e("I'm not · he isn't · they aren't")}`,
   `<b>السؤال:</b> نقدّم ${e('be')} على الضمير: ${e('You are a student.')} ← ${e('Are you a student?')}`,
   `<b>الجواب القصير:</b> ${e("Yes, I am. · No, I'm not.")} وفي «نعم» لا نختصر: لا نقول ${e("Yes, I'm.")}`],
  grid:{head:['الضمير','be','المختصر','المعنى'],rows:[['I','am',"I'm",'أنا'],['you','are',"you're",'أنتَ / أنتِ / أنتم'],['he','is',"he's",'هو'],['she','is',"she's",'هي'],['it','is',"it's",'لغير الإنسان'],['we','are',"we're",'نحن'],['they','are',"they're",'هم / هنّ']]},
  pairs:[['I is a student.','I am a student.','مع I نستعمل am.'],['They is from Jordan.','They are from Jordan.','مع they نستعمل are.'],["Yes, I'm.",'Yes, I am.','في جواب نعم لا نختصر.']],
  labs:[LAB11A]},
 {t:'التعارف',short:'التعارف',old:[1],q:'كيف تعرّف بنفسك؟ وما الفرق بين I\'m و My name\'s؟',ref:'ص 4',
  lead:`أول ما تحتاجه في أي لغة أن تعرّف بنفسك وترد على من يعرّف بنفسه. وللتعريف صيغتان بالمعنى نفسه.`,
  points:[`<b>${e("I'm")}</b> + الاسم (= ${e('I am')}): ${e("I'm Frank.")}`,
   `<b>${e("My name's")}</b> + الاسم (= ${e('My name is')}): ${e("My name's Oliver.")}`,
   `<b>الرد على التعارف:</b> ${e('Nice to meet you.')} أو ${e('Pleased to meet you.')}`,
   `<b>للتأكد من شخص</b> نسأل ${e('Are you …?')} ونجيب ${e('Yes, I am.')} أو ${e("No, I'm not.")}، ونبدأ بـ ${e('Excuse me.')} للتنبيه بأدب.`],
  html:dl([['A',"Hello. I'm Frank Carter."],['B',"Hi, Frank. My name's Oliver."],['A','Nice to meet you, Oliver.']])+vt([['I am','I\'m','أنا'],['My name is','My name\'s','اسمي'],['What is','What\'s','ما'],['you are','you\'re','أنت']],['الكاملة','المختصرة','المعنى']),
  labs:[LAB11B,{title:'أكمل التعارف',w:(el,B)=>N.gaps(el,B,{intro:'أكمل الحوار (أمثلة من عندنا):',items:[{s:'Hello. ___ Neil.',o:["I'm","I"],a:0,why:"I'm = I am."},{s:"___ you Mr Harry? — Yes, I am.",o:['Are','Is'],a:0,why:'مع you نستعمل are.'},{s:"My ___ Sara.",o:["name's","names"],a:0,why:"name's = name is."},{s:"I'm ___ Jordan.",o:['from','in'],a:0,why:'البلد بعد from.'}]})}]},
 {t:'السؤال عن الاسم والبلد والعمل، و a / an',short:'a أم an',old:[2],q:'أيهما صحيح: I\'m a electrician أم I\'m an electrician؟',ref:'ص 4',
  lead:`بعد التعارف نسأل عن الاسم والبلد والعمل. وفي جواب العمل نضع قبل اسم المهنة ${e('a')} أو ${e('an')}، ويختلف الاختيار حسب أول صوت في الكلمة.`,
  points:[`<b>الأسئلة الثلاثة:</b><br>${e("What's your name? — I'm Ben.")}<br>${e("Where are you from? — I'm from Saudi Arabia.")}<br>${e("What do you do? — I'm a technician.")}`,
   `<b>${e('What do you do?')}</b> معناها «ما عملك؟» وليس «ماذا تفعل الآن؟».`,
   `<b>${e('a')}</b> قبل الكلمة التي تبدأ بصوت ساكن: ${e('a technician · a builder · a student')}`,
   `<b>${e('an')}</b> قبل الكلمة التي تبدأ بصوت متحرك (${e('a, e, i, o, u')}): ${e('an electrician · an engineer · an operator')}`,
   `<b>العبرة بالصوت لا بالحرف</b> <small>(إضافة من خارج الكتاب)</small>: ${e('an hour')} لأن h لا تُنطق، و ${e('a university')} لأنها تُنطق «يو».`],
  grid:{head:['أول صوت','الكلمة','مثال'],rows:[['ساكن','a',"I'm a technician."],['متحرك','an',"I'm an electrician."]]},
  pairs:[["I'm a electrician.","I'm an electrician.",'electrician تبدأ بصوت متحرك: an.'],["I'm technician.","I'm a technician.",'لا ننسى a قبل المهنة.']],
  art:art(`${JOBS.slice(0,6).map((j,i)=>`<g data-tip="${j[1]} ${j[0]}: ${j[1]==='an'?'تبدأ بصوت متحرك فنقول an':'تبدأ بصوت ساكن فنقول a'}"><rect x="${i%2?190:30}" y="${60+Math.floor(i/2)*70}" width="140" height="48" rx="12" fill="${j[1]==='an'?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(i%2?260:100,90+Math.floor(i/2)*70,j[1]+' '+j[0],{fs:13,w:700})}</g>`).join('')}`,'a و an مع أسماء الأعمال'),cap:'الأصفر يبدأ بصوت متحرك (an)، والأبيض بصوت ساكن (a).',labs:[LAB11C,{title:'a أم an',w:(el,B)=>N.cases(el,B,{intro:'اختر a أو an:',cases:[{q:"I'm ___ engineer.",opts:[['a',0],['an',1,'engineer تبدأ بـ e.']]},{q:"He's ___ mechanic.",opts:[['a',1,'mechanic تبدأ بصوت ساكن m.'],['an',0]]},{q:"She's ___ operator.",opts:[['a',0],['an',1,'operator تبدأ بـ o.']]}]})}]},
 {t:'التعليمات والأضداد',short:'التعليمات',old:[3],q:'كيف تطلب من زميلك أن يضع المفك بأدب؟',ref:'ص 5',
  lead:`في الصف والورشة نسمع التعليمات طوال الوقت: قف، اجلس، ارفع، ضع. والتعليمة بالإنجليزي سهلة البناء، وكثير منها له ضد.`,
  points:[`<b>التعليمة تبدأ بالفعل مباشرة</b>، بلا فاعل: ${e('Stand up.')} ${e('Read the text aloud.')}`,
   `<b>للتهذيب</b> نضيف ${e('please')} في أول الجملة أو آخرها: ${e('Please sit down.')} ${e('Sit down, please.')}`,
   `<b>الأضداد</b> تُحفظ أزواجاً: ${e('pick up ≠ put down · raise ≠ lower · start ≠ stop · stand ≠ sit · read ≠ write · say ≠ listen')}`],
  html:vt(OPP.map(o=>[o[0]+' ≠ '+o[1],o[2]]),['الضدان','المعنى']),
  pairs:[['You stand up.','Stand up.','التعليمة بلا فاعل.'],['Sit down please the chair.','Sit down, please.','please في أول الجملة أو آخرها.']],
  labs:[LAB11D]},
 {t:'الحالة والمكان',short:'in / on / under',q:'أين المطرقة إذا كانت in the box؟',ref:'ص 5',
  lead:`نصف أيضاً أين الشيء وما حالته: هل الجهاز يعمل أم مطفأ؟ هل الباب مفتوح أم مغلق؟ هل المطرقة داخل الصندوق أم فوقه؟`,
  points:[`<b>الحالة:</b> ${e('on ≠ off')} للجهاز، و ${e('open ≠ closed')} للباب: ${e('The TV is on. The doors are open.')}`,
   `<b>المكان:</b> ${e('in')} داخل، و ${e('on')} فوق وملامس، و ${e('under')} تحت: ${e('The hammer is in the box.')}`,
   `<b>الاتجاه:</b> ${e('left ≠ right · in ≠ out · up ≠ down')}`],
  html:vt(POS,['English','المعنى']),
  art:art(`<g data-tip="in the box: داخل الصندوق"><rect x="40" y="170" width="80" height="60" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><rect x="62" y="186" width="36" height="10" rx="3" fill="${C.ink}"/>${TL(80,256,'in',{fs:14,w:700})}</g>
    <g data-tip="on the box: فوق الصندوق"><rect x="140" y="170" width="80" height="60" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><rect x="162" y="154" width="36" height="12" rx="3" fill="${C.ink}"/>${TL(180,256,'on',{fs:14,w:700})}</g>
    <g data-tip="under the box: تحت الصندوق"><rect x="240" y="150" width="80" height="60" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><rect x="262" y="216" width="36" height="12" rx="3" fill="${C.ink}"/>${TL(280,256,'under',{fs:14,w:700})}</g>
    <g data-tip="Stand up ≠ Sit down — الوقوف ضد الجلوس">${TL(180,80,'stand ≠ sit',{fs:18,w:700,c:C.blue})}</g><g data-tip="pick up ≠ put down — الرفع (الالتقاط) ضد الوضع">${TL(180,116,'pick up ≠ put down',{fs:16,w:700,c:C.red})}</g>`,'in on under والأضداد'),cap:'ثلاثة مواقع لمطرقة صغيرة، وضدان من الكتاب. مرّر المؤشر على كل منها.',labs:[LAB11E,{title:'الأضداد',w:(el,B)=>N.gaps(el,B,{intro:'اختر الضد:',items:[{s:'raise ≠ ___',o:['lower','start'],a:0},{s:'read ≠ ___',o:['write','listen'],a:0},{s:'start ≠ ___',o:['stop','sit'],a:0},{s:'The light is on. ≠ The light is ___.',o:['off','out'],a:0}]})}]},
 {t:'أدوات ومثبتات',short:'الأدوات',old:[4],q:'ما الفرق بين screw و bolt و nut؟',ref:'ص 5',
  lead:`في الورشة تحتاج أسماء الأدوات والمثبتات التي تستعملها كل يوم، بالمفرد والجمع.`,
  points:[`<b>المفرد</b> يسبقه ${e('a')} أو ${e('an')}: ${e('a screwdriver · an adapter')}`,
   `<b>الجمع</b> نضيف له ${e('s')}: ${e('screw → screws · nut → nuts')}`,
   `<b>التمييز:</b> ${e('screw')} له رأس وسن مدبب يدخل الخشب بالمفك، و ${e('bolt')} طرفه مستوٍ يُشد بصامولة ${e('nut')}، و ${e('washer')} حلقة توضع تحت الصامولة.`],
  html:vt(TOOLS,['English','المعنى']),
  art:art(`<g data-tip="screw: برغي له رأس وسنّ مدبب، يدخل الخشب بالمفك."><path d="M60 80 l20 0 l-4 10 l0 90 l-6 14 l-6 -14 l0 -90z" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(70,230,'screw',{fs:13,w:700})}</g>
    <g data-tip="bolt: مسمار ملولب طرفه مستوٍ، يُشد بصامولة nut."><rect x="150" y="80" width="30" height="16" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/><rect x="158" y="96" width="14" height="110" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(165,230,'bolt',{fs:13,w:700})}</g>
    <g data-tip="nut: صامولة تُلف على الـ bolt."><polygon points="240,120 262,108 284,120 284,144 262,156 240,144" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/><circle cx="262" cy="132" r="8" fill="${C.bg}" stroke="${C.ink}"/>${TL(262,180,'nut',{fs:13,w:700})}</g>
    <g data-tip="washer: حلقة مسطحة توضع تحت الصامولة."><circle cx="262" cy="230" r="20" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><circle cx="262" cy="230" r="8" fill="${C.bg}" stroke="${C.ink}"/>${TL(262,272,'washer',{fs:13,w:700})}</g>`,'screw bolt nut washer'),cap:'أربعة مثبتات من رسمنا. مرّر المؤشر على كل منها.',labs:[LAB11F,{title:'ما الأداة؟',w:(el,B)=>N.cases(el,B,{intro:'ما الأداة؟',cases:[{q:'You use it to turn a screw.',opts:[['screwdriver',1],['saw',0],['plug',0]]},{q:'You use it to cut wood.',opts:[['chisel',0],['saw',1],['spanner',0]]},{q:'You put it on a bolt.',opts:[['nut',1],['cable',0],['antenna',0]]}]})}]}
 ]});
B.lesson({
 id:'u1-l1',unit:1,order:1,pages:'4–5',
 title:'Basics — الأساسيات',
 summary:'التعارف بالفعل be (I\'m، My name\'s، Are you…?)، والسؤال عن الاسم والبلد والعمل مع a و an، والتعليمات بفعل الأمر و please، والأضداد، وكلمات الحالة والمكان، وأسماء أدوات ومثبتات شائعة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 4–5',html:`<p>هذا أول درس في المقرر: تتعرف على الناس بالإنجليزي، وتفهم التعليمات في الورشة والصف. ستتعلم:</p><ol><li>التعريف بنفسك والرد على التعارف.</li><li>السؤال عن الاسم والبلد والعمل.</li><li>التعليمات بفعل الأمر، وأضداد أفعال شائعة.</li><li>كلمات الحالة والمكان مثل ${e('on/off')} و ${e('in/out')}.</li><li>أسماء أدوات ومثبتات تراها كل يوم.</li></ol>`},
  ...R11.theory,
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
  ...R11.stations,
  {recap:['be: I am · he / she / it is · you / we / they are، والاختصار I\'m, he\'s, they\'re.','التعارف: I\'m … / My name\'s … والرد: Nice to meet you.','What do you do? — I\'m a technician / an electrician: a قبل الصوت الساكن، و an قبل المتحرك.','التعليمة تبدأ بالفعل، و please في أولها أو آخرها.','in داخل، on فوق، under تحت؛ والجمع بإضافة s: screw → screws.']}
 ],
 lab:lab11,
 examples:[
  {title:'مثال 1: تعريف بالنفس',ref:'ص 4',q:`<p>عرّف بنفسك: اسمك Felix، من Saudi Arabia، وتعمل فنياً (technician).</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الاسم: ${e("I'm Felix.")}`},{t:`الخطوة 2: البلد: ${e("I'm from Saudi Arabia.")}`},{t:`الخطوة 3: technician تبدأ بصوت ساكن فنقول a: ${e("I'm a technician.")}`,final:true}]},
  {title:'مثال 2: تأكيد شخص',ref:'ص 4',q:`<p>تريد التأكد أن الرجل أمامك هو Mr Nick. ماذا تسأل؟ وماذا يجيب إذا كان هو؟</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: نبدأ بالاعتذار المهذب: ${e('Excuse me.')}`},{t:`الخطوة 2: السؤال بـ Are: ${e('Are you Mr Nick?')}`},{t:`الخطوة 3: الجواب القصير: ${e('Yes, I am.')}`,final:true}]},
  {title:'مثال 3: تعليمة مهذبة',ref:'ص 5',q:`<p>اطلب من زميلك أن يضع المفك على الطاولة بأدب.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الأمر يبدأ بالفعل: ${e('Put down…')}`},{t:`الخطوة 2: الشيء والمكان: ${e('the screwdriver on the table')}`},{t:`الخطوة 3: نضيف please: ${e('Please put down the screwdriver on the table.')}`,final:true}]}
 ],
 quiz:[
  {q:"Hello. ___ Edward.",o:["I'm","I","Me","My"],c:0,e:"I'm = I am."},
  {q:'What do you do?',o:["I'm from Egypt.","I'm a builder.","I'm fine.","My name's Alex."],c:1,e:'السؤال عن العمل.'},
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
  <input class="ph-num" id="wd" value="Harris" dir="ltr" aria-label="كلمة للتهجئة" style="width:16em;font-family:var(--font)"><div id="wo" style="margin-top:10px"></div></div>
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
/* ===== مختبرات «شرح القاعدة» 1.2 ===== */
const GC12={three:'#1f5fd1',eight:'#00875a',five:'#b37d00',ten:'#7a3fb0',two:'#c0392b',exc:'#555'};
const grp12=ch=>Object.keys(ABC).find(g=>ABC[g].includes(ch));
const LAB12A={title:'تهجّ الاسم',w:(el,B)=>N.labB(el,B,{intro:'اختر اسماً، وشاهد حروفه ملونة حسب مجموعتها الصوتية، وتحت كل حرف مجموعته.',
 controls:[{k:'n',label:'الاسم',opts:[['OWENS','OWENS'],['BEN','BEN'],['FRANK','FRANK'],['SIMON','SIMON'],['MILLER','MILLER']]}],
 out:({n})=>{const L=n.split(''),pieces=[];for(let i=0;i<L.length;i++){if(L[i+1]===L[i]){pieces.push(['double '+L[i],'k','حرفان متشابهان']);i++;continue}const g=grp12(L[i]);pieces.push([L[i],'x',g==='exc'?'استثناء':g])}
  return{pieces,say:pieces.map(p=>p[0]).join(', '),ar:`السؤال: How do you spell your name? والجواب: ${n.split('').join('-')}.`,why:'نقول الحروف حرفاً حرفاً. والحرفان المتكرران نقول لهما double، مثل double L.'}}})};
const PH12={a:'0556 33 21 08',b:'0112 44 07 90',c:'0503 00 18 66'};
const rd12=d=>({0:'oh',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'})[d];
const LAB12B={title:'اقرأ رقم الهاتف',w:(el,B)=>N.labB(el,B,{intro:'اختر رقماً، وشاهد كيف نقرؤه: رقماً رقماً، والصفر oh، والمتكرر double.',
 controls:[{k:'p',label:'الرقم',opts:Object.keys(PH12).map(k=>[k,PH12[k]])}],
 out:({p})=>{const groups=PH12[p].split(' '),pieces=[];
  groups.forEach(g=>{const d=g.split('');let w=[];for(let i=0;i<d.length;i++){if(d[i+1]===d[i]){w.push('double '+rd12(d[i]));i++}else w.push(rd12(d[i]))}pieces.push([w.join(' '),w.some(x=>x.startsWith('double'))?'k':(g.includes('0')?'q':'x'),g])});
  return{pieces,say:pieces.map(x=>x[0]).join(', '),why:'نقرأ الرقم بمجموعاته، والصفر oh، والرقمان المتشابهان المتتاليان double.'}}})};
const UN12={V:['volt','volts'],W:['watt','watts'],km:['kilometre','kilometres'],kg:['kilogram','kilograms'],L:['litre','litres']};
const NM12={1:'one','1.5':'one point five',230:'two hundred and thirty',40:'forty',12500:'twelve thousand five hundred'};
const LAB12C={title:'الرقم مع رمز الوحدة',w:(el,B)=>N.labB(el,B,{intro:'اختر الرقم والوحدة، وقارن بين الكتابة بالرمز والقراءة بالكلمات.',
 controls:[{k:'n',label:'الرقم',opts:Object.keys(NM12).map(k=>[k,k])},{k:'u',label:'الوحدة',opts:Object.keys(UN12).map(k=>[k,k])}],
 out:({n,u})=>{const one=n==='1',w=one?UN12[u][0]:UN12[u][1];
  return{pieces:[[`${n} ${u}`,'k','نكتب: الرمز لا يُجمع'],['=','x',''],[NM12[n],'q',n.includes('.')?'الفاصلة العشرية: point':'الرقم'],[w,'n',one?'مفرد':'جمع']],say:`${NM12[n]} ${w}`,why:one?'الرقم واحد، فالكلمة مفردة.':'بعد رقم غير الواحد نجمع الكلمة عند القراءة، لكن الرمز يبقى كما هو.'}}})};
const R12=N.rule({title:'الحروف والتهجئة، والهاتف والبريد، والأرقام والوحدات',ref:'ص 6–7',
 intro:`في هذا الدرس تتعلم أن تتهجّى وتقرأ الأرقام بالإنجليزي، في ثلاث خطوات مرتبة: الحروف ومجموعاتها الصوتية، ثم رقم الهاتف والبريد الإلكتروني، ثم الأرقام الكبيرة والعشرية ورموز الوحدات.`,
 parts:[
 {t:'الحروف والتهجئة',short:'الحروف',old:[1],q:'كيف تتهجى اسمك؟ وكيف تقول LL؟',ref:'ص 6',
  lead:`كثيراً ما يُطلب منك أن تتهجى اسمك أو اسم شركة على الهاتف أو في نموذج. والحروف الإنجليزية أسهل حفظاً إذا جمعناها حسب صوتها.`,
  points:[`<b>ست مجموعات</b> بحسب الصوت الذي ينتهي به اسم الحرف، كما في الجدول. والحرفان ${e('O')} و ${e('R')} استثناء.`,
   `<b>السؤال عن التهجئة:</b> ${e('How do you spell …?')} والجواب حرفاً حرفاً: ${e('O-W-E-N-S.')}`,
   `<b>الحرفان المتكرران</b> نقول لهما ${e('double')}: ${e('LL = double L')}`,
   `<b>إذا لم تسمع جيداً:</b> ${e('Could you repeat that, please?')}`,
   `${e('Z')} تُنطق «زِد» في البريطانية و«زي» في الأمريكية.`],
  html:`<p>الكتاب يقسم الحروف حسب صوتها، فتحفظها أسهل:</p>${vt(Object.keys(ABC).map(g=>[g==='exc'?'EXCEPTIONS':g,ABC[g].split('').join(' '),GAR[g]]),['المجموعة','الحروف','الصوت'])}
   <p>اسأل عن التهجئة بـ ${e('How do you spell…?')}:</p>${dl([['A','How do you spell your surname?'],['B','O-W-E-N-S.'],['A','Could you repeat that, please?']])}`,labs:[LAB12A,{title:'صنّف الحروف',w:(el,B)=>N.sort(el,B,{intro:'ضع الحرف في مجموعته:',cats:['three','eight','ten','two'],items:[['G',0],['J',1],['M',2],['W',3],['P',0],['K',1]]})}]},
 {t:'رقم الهاتف والبريد الإلكتروني',short:'الهاتف والبريد',old:[2],q:'كيف تقرأ 0556 33 21 08؟ وكيف تقرأ @ و _؟',ref:'ص 6',
  lead:`عند تبادل أرقام الهواتف وعناوين البريد بالإنجليزي لها طريقة قراءة ثابتة، تختلف عن قراءة الأعداد العادية.`,
  points:[`<b>الهاتف:</b> نقرؤه رقماً رقماً بمجموعاته، لا عدداً واحداً كبيراً.`,`<b>الصفر</b> نقرؤه غالباً ${e('oh')}، و<b>الرقمان المتشابهان المتتاليان</b> ${e('double')}: ${e('33 = double three')}`,
   `<b>البريد الإلكتروني:</b> ${e('@ = at')}، و ${e('. = dot')}، و ${e('_ = underscore')}، و ${e('- = hyphen')}`],
  html:`<p>نقرأ رقم الهاتف رقماً رقماً، والصفر ${e('oh')} غالباً، والرقمان المتشابهان ${e('double')}:</p>${eb(['0556 33 21 08 = oh five five six, double three, two one, oh eight.'])}
   ${vt([['at','@'],['dot','.'],['underscore','_'],['hyphen / dash','-'],['forward slash','/']],['نقرؤه','الرمز'])}${eb(['salem_21@tvtc.com = salem underscore twenty-one at tvtc dot com'])}`,art:art(`<rect x="30" y="90" width="300" height="70" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,132,'ali_7@tvtc.com',{fs:20,w:700})}
    <g data-tip="_ = underscore">${TL(112,190,'underscore',{fs:12,c:C.red,w:700})}</g><g data-tip="@ = at">${TL(170,212,'at',{fs:13,c:C.blue,w:700})}</g><g data-tip=". = dot">${TL(250,190,'dot',{fs:13,c:C.grn,w:700})}</g>`,'قراءة البريد'),cap:'بريد إلكتروني ورموزه. مرّر المؤشر على اسم كل رمز.',labs:[LAB12B,{title:'الرموز',w:(el,B)=>N.cases(el,B,{intro:'كيف نقرأ الرمز؟',cases:[{q:'@',opts:[['at',1],['dot',0]]},{q:'.',opts:[['dot',1],['point',0,'point للأرقام العشرية فقط.']]},{q:'0 في رقم الهاتف',opts:[['oh',1],['O letter',0]]}]})}]},
 {t:'الأرقام ورموز الوحدات',short:'الأرقام والوحدات',old:[3],q:'كيف تقرأ 1.2 و 230 V؟',ref:'ص 7',
  lead:`في العمل الفني تقرأ مواصفات فيها أرقام عشرية وكبيرة ورموز وحدات. ولكل منها قاعدة قراءة.`,
  points:[`<b>الفاصلة العشرية</b> نقرؤها ${e('point')}: ${e('1.2 = one point two')}`,`<b>الفاصلة في الأعداد الكبيرة</b> للآلاف: ${e('150,000 = a hundred and fifty thousand')}`,
   `<b>النبرة</b> تفرّق بين ${e('thirTEEN')} و ${e('THIRty')}.`,`<b>الرمز لا يُجمع</b> في الكتابة، لكننا نجمع الكلمة عند القراءة: ${e('230 V = two hundred and thirty volts')}`],
  html:`${vt([['13 / 30','thirteen / thirty','انتبه للنبرة: thirTEEN و THIRty'],['1.2','one point two','الفاصلة العشرية = point'],['150,000','a hundred and fifty thousand','الفاصلة للآلاف'],['12,500','twelve thousand five hundred',''],['−5','minus five','']],['الرقم','نقرؤه','ملاحظة'])}`+`${vt(UNITS.map(u=>[u[0],u[1],u[3]]),['الرمز','الكلمة','المعنى'])}<p>بعد رقم أكبر من واحد نجمع الكلمة: ${e('230 volts')}، ${e('40 watts')}، لكن الرمز لا يُجمع: ${e('230 V')}.</p>`,
  pairs:[['230 Vs','230 V','الرمز لا يُجمع.'],['two hundred and thirty volt','two hundred and thirty volts','عند القراءة نجمع الكلمة.']],
  art:art(`${[['230 V','two hundred and thirty volts'],['1.2 km','one point two kilometres'],['40 W','forty watts'],['89 °C','eighty-nine degrees Celsius']].map((u,i)=>`<g data-tip="${u[1]}"><rect x="40" y="${50+i*62}" width="280" height="48" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,80+i*62,u[0],{fs:18,w:700})}</g>`).join('')}`,'أرقام بوحداتها'),cap:'أربعة أرقام بوحداتها. مرّر المؤشر لترى كيف تُقرأ.',labs:[LAB12C,{title:'اقرأ الرقم',w:(el,B)=>N.cases(el,B,{intro:'اختر القراءة الصحيحة:',cases:[{q:'1.2 km',opts:[['one point two kilometres',1],['one two kilometre',0]]},{q:'13.8 m',opts:[['thirteen point eight metres',1],['thirty point eight metres',0]]},{q:'12,500 rpm',opts:[['twelve thousand five hundred revolutions per minute',1],['one hundred twenty-five rpm',0]]}]})}]}
 ]});
B.lesson({
 id:'u1-l2',unit:1,order:2,pages:'6–7',
 title:'Letters and numbers — الحروف والأرقام',
 summary:'نطق الحروف الإنجليزية في ست مجموعات صوتية، والتهجئة (How do you spell…?)، وقراءة الهاتف والبريد (oh، at، dot، underscore)، وقراءة الأرقام الكبيرة والعشرية، ورموز الوحدات مثل km و rpm و °C.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 6–7',html:`<p>في العمل تُملي اسماً أو رقم هاتف أو بريداً إلكترونياً، وتكتب أرقاماً بوحداتها. ستتعلم:</p><ol><li>نطق الحروف وتهجئة الكلمات.</li><li>قراءة أرقام الهاتف والبريد.</li><li>قراءة الأرقام الكبيرة والعشرية.</li><li>معاني رموز الوحدات الشائعة.</li></ol>`},
  ...R12.theory,
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
  ...R12.stations,
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
/* ===== مختبرات «شرح القاعدة» 1.3 ===== */
const ORDW13={1:'first',2:'second',3:'third',4:'fourth',5:'fifth',11:'eleventh',12:'twelfth',13:'thirteenth',21:'twenty-first',22:'twenty-second',23:'twenty-third',30:'thirtieth'};
const suf13=n=>n%100>=11&&n%100<=13?'th':({1:'st',2:'nd',3:'rd'})[n%10]||'th';
const LAB13A={title:'العدد الترتيبي والتاريخ',w:(el,B)=>N.labB(el,B,{intro:'اختر اليوم والشهر، وشاهد كتابة التاريخ وقراءته. لاحظ نهاية الرقم.',
 controls:[{k:'d',label:'اليوم',opts:Object.keys(ORDW13).map(k=>[k,k])},{k:'m',label:'الشهر',opts:[[2,'February'],[5,'May'],[9,'September'],[12,'December']].map(([v,t])=>[String(v),t])}],
 out:({d,m})=>{d=+d;const sx=suf13(d),mn=MON[+m-1];
  return{pieces:[['the','x',''],[d+sx,'k',sx==='th'&&d%10>=1&&d%10<=3?'11–13: th استثناء':'نهاية '+sx],['of','x',''],[mn,'n','الشهر']],say:`the ${ORDW13[d]} of ${mn}`,ar:`نقرؤه: the ${ORDW13[d]} of ${mn}. وبالأرقام البريطانية: ${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}، والأمريكية: ${String(m).padStart(2,'0')}/${String(d).padStart(2,'0')}.`,why:`${e('1st · 2nd · 3rd')}، وباقي الأرقام ${e('th')}، إلا ${e('11th · 12th · 13th')} فكلها ${e('th')}.`}}})};
const LAB13B={title:'on Monday أم on Mondays؟',w:(el,B)=>N.labB(el,B,{intro:'اختر اليوم، ثم اختر: مرة واحدة أم كل أسبوع؟',
 controls:[{k:'d',label:'اليوم',opts:DAYS.map(d=>[d,d])},{k:'f',label:'المعنى',opts:[['one','مرة واحدة'],['every','كل أسبوع']]}],
 out:({d,f})=>f==='one'?{pieces:[['The meeting is','x',''],['on','k','مع الأيام'],[d+'.','n','مفرد = هذا اليوم']],say:`The meeting is on ${d}.`,why:`on ${d} = يوم ${d} القادم (مرة واحدة).`}:{pieces:[['The bus leaves','x',''],['on','k','مع الأيام'],[d+'s.','n','بالجمع = كل أسبوع']],say:`The bus leaves on ${d}s.`,why:`on ${d}s = كل ${d}.`}})};
const TM13={a:[7,50],b:[14,40],c:[20,5],d:[9,5],e:[12,0]};
const w13=n=>['oh','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'][n]||({30:'thirty',40:'forty',50:'fifty'})[n]||(n>20&&n<30?'twenty-'+w13(n-20):'');
const LAB13C={title:'الوقت بنظامين',w:(el,B)=>N.labB(el,B,{intro:'اختر وقتاً، وشاهده بنظام 24 ساعة و 12 ساعة، وطريقة قراءته.',
 controls:[{k:'t',label:'الوقت',opts:Object.keys(TM13).map(k=>[k,String(TM13[k][0]).padStart(2,'0')+'.'+String(TM13[k][1]).padStart(2,'0')])}],
 out:({t})=>{const [h,m]=TM13[t],h12=h%12||12,ap=h<12?'am':(h===12&&m===0?'noon':'pm'),mm=m===0?"o'clock":(m<10?'oh '+w13(m):w13(m));
  const r24=(h<10?'oh ':'')+w13(h)+' '+(m===0?'hundred':(m<10?'oh '+w13(m):w13(m)));
  return{pieces:[[String(h).padStart(2,'0')+'.'+String(m).padStart(2,'0'),'k','نظام 24 ساعة'],['=','x',''],[`${h12}.${String(m).padStart(2,'0')} ${ap}`,'n','نظام 12 ساعة']],say:`${w13(h12)} ${m===0?'':mm} ${ap==='noon'?'noon':ap}`,ar:`القراءة بنظام 24: ${r24}.`,why:`${e('am')} قبل الظهر و ${e('pm')} بعده. وفي نظام 24 ساعة نقرأ الصفر ${e('oh')}: ${e('09.05 = oh nine oh five')}`}}})};
const R13=N.rule({title:'التواريخ والأيام والوقت',ref:'ص 8–9',
 intro:`نشرح الكلام عن المواعيد في ثلاث خطوات مرتبة: الأعداد الترتيبية وكتابة التاريخ وقراءته، ثم الأيام والأشهر مع ${e('on')}، ثم الوقت بنظامي 24 و 12 ساعة.`,
 parts:[
 {t:'الأعداد الترتيبية والتاريخ',short:'1st, 2nd, 3rd',old:[1],q:'كيف تكتب «الحادي عشر» وتقرؤه؟',ref:'ص 8–9',
  lead:`التاريخ بالإنجليزي يُقرأ بالعدد الترتيبي (الأول، الثاني…) لا بالعدد العادي. ويُكتب بأكثر من صيغة حسب البلد.`,
  points:[`<b>النهايات:</b> ${e('1st · 2nd · 3rd')}، وباقي الأرقام ${e('th')}: ${e('4th · 20th')}`,`<b>استثناء:</b> ${e('11th · 12th · 13th')} تنتهي بـ ${e('th')} رغم أن آخرها 1 و 2 و 3.`,
   `<b>القراءة:</b> ${e('the twenty-third of September')}`,`<b>الكتابة بالأرقام:</b> بريطانيا ${e('dd/mm/yy')}، وأمريكا ${e('mm/dd/yy')}، والدولية ${e('yyyy-mm-dd')}. فالتاريخ ${e('03/05')} يعني 3 مايو في بريطانيا و 5 مارس في أمريكا.`],
  html:`${vt([['-st','1st, 21st, 31st','first, twenty-first'],['-nd','2nd, 22nd','second, twenty-second'],['-rd','3rd, 23rd','third, twenty-third'],['-th','4th–20th, 24th–30th','fourth, eleventh, twelfth, thirteenth…']],['النهاية','الأرقام','القراءة'])}<p>انتبه: ${e('11th, 12th, 13th')} تنتهي بـ ${e('th')} رغم أن آخرها 1 و 2 و 3.</p>`+`${vt([['dd/mm/yy','بريطانيا وأوروبا','23/09/26'],['mm/dd/yy','أمريكا','09/23/26'],['yyyy-mm-dd','ISO 8601 (دولي)','2026-09-23']],['الصيغة','المكان','مثال'])}<p>ونقرؤه: ${e('the twenty-third of September, twenty twenty-six')}.</p>${eb(['the twenty-third of September, twenty twenty-six'])}`,art:art(`${[[1,'st'],[2,'nd'],[3,'rd'],[4,'th'],[12,'th'],[22,'nd']].map((x,i)=>`<g data-tip="${x[0]}${x[1]} = ${ORDW[x[0]]}"><rect x="${i%3*100+30}" y="${70+Math.floor(i/3)*100}" width="90" height="70" rx="12" fill="${x[0]===12?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(i%3*100+75,112+Math.floor(i/3)*100,x[0]+x[1],{fs:22,w:700})}</g>`).join('')}`,'أعداد ترتيبية'),cap:'ستة أعداد ترتيبية. 12th بالأصفر لأنها استثناء. مرّر المؤشر على كل منها.',labs:[LAB13A,{title:'الترتيبية',w:(el,B)=>N.cases(el,B,{intro:'اختر الكتابة الصحيحة:',cases:[{q:'21',opts:[['21st',1],['21th',0]]},{q:'13',opts:[['13rd',0],['13th',1,'13 استثناء.']]},{q:'32? لا يوجد في التاريخ؛ 31',opts:[['31st',1],['31th',0]]}]})}]},
 {t:'الأيام والأشهر و on',short:'on Mondays',old:[2],q:'ما الفرق بين on Monday و on Mondays؟',ref:'ص 8',
  lead:`عندما نحدد موعداً نذكر اليوم أو التاريخ، ونستعمل معهما ${e('on')}. وجمع اسم اليوم يغيّر المعنى.`,
  points:[`<b>${e('on')}</b> مع الأيام والتواريخ: ${e('on Sunday · on the 14th')}`,`<b>${e('on Monday')}</b> = يوم الاثنين هذا (مرة واحدة).`,`<b>${e('on Mondays')}</b> = كل اثنين (عادة تتكرر).`,`أسماء الأيام والأشهر تبدأ دائماً بحرف كبير: ${e('Monday · May')}`],
  html:`${eb([MON.join(', ')])}${eb([DAYS.join(', ')])}<p>${e('on Monday')} = يوم الاثنين هذا، و ${e('on Mondays')} = كل اثنين:</p>${eb(['The bus leaves on Sundays and Wednesdays.'])}`+dl([['A',"When's the meeting?"],['B',"It's on Sunday."],['A','Is that Sunday the 14th?'],['B',"Yes, that's right."],['A','What time?'],['B','9.30.'],['A','OK. See you then.']]),art:art(`${DAYS.map((d,i)=>`<g data-tip="${d}"><rect x="${30+i*43}" y="110" width="40" height="70" rx="8" fill="${[0,3].includes(i)?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(50+i*43,150,d.slice(0,3),{fs:12,w:700})}</g>`).join('')}${TL(180,220,'on Mondays and Thursdays',{fs:14,w:700,c:C.blue})}`,'أيام الأسبوع'),cap:'الأيام الملونة يتكرر فيها الشيء كل أسبوع.',labs:[LAB13B,{title:'الأيام',w:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:'The flight leaves ___ Fridays.',o:['on','in'],a:0},{s:'The ___ month of the year is March.',o:['third','three'],a:0},{s:'The day after Tuesday is ___.',o:['Wednesday','Thursday'],a:0}]})}]},
 {t:'الوقت بنظامي 24 و 12 ساعة',short:'الوقت',old:[3],q:'كيف تقول 14.40 بنظام 12 ساعة؟',ref:'ص 9',
  lead:`جداول الرحلات والعمل تكتب الوقت غالباً بنظام 24 ساعة، والناس يقولونه كثيراً بنظام 12 ساعة. فتحتاج أن تنتقل بينهما.`,
  points:[`<b>نظام 12 ساعة:</b> ${e('am')} قبل الظهر و ${e('pm')} بعده: ${e('14.40 = 2.40 pm')}`,`<b>القراءة:</b> الساعة ثم الدقائق: ${e('2.40 = two forty')}`,`<b>في نظام 24 ساعة</b> نقرأ الصفر ${e('oh')}: ${e('09.05 = oh nine oh five')}`,`${e('12.00')} = ${e('twelve noon')} أو ${e("twelve o'clock")}`],
  html:`${vt([['07.50','7.50 am','seven fifty'],['14.40','2.40 pm','fourteen forty / two forty pm'],['20.05','8.05 pm','twenty oh five / eight oh five pm'],['12.00','12 noon','twelve hundred / twelve o\'clock']],['24 ساعة','12 ساعة','القراءة'])}<p>${e('am')} قبل الظهر و ${e('pm')} بعده. وفي نظام 24 ساعة نقرأ الصفر ${e('oh')}: ${e('09.05 = oh nine oh five')}.</p>`,labs:[LAB13C,{title:'حوّل الوقت',w:(el,B)=>N.cases(el,B,{intro:'حوّل:',cases:[{q:'18.15',opts:[['6.15 pm',1],['8.15 pm',0]]},{q:'09.30',opts:[['9.30 am',1],['9.30 pm',0]]},{q:'7.45 pm',opts:[['19.45',1],['17.45',0]]}]})}]}
 ]});
B.lesson({
 id:'u1-l3',unit:1,order:3,pages:'8–9',
 title:'Dates and times — التواريخ والأوقات',
 summary:'الأعداد الترتيبية (1st، 2nd، 3rd، 4th) وكتابة التاريخ وقراءته، وأسماء الأشهر والأيام، و on Mondays للتكرار، والوقت بنظامي 24 و 12 ساعة وقراءته، ودعوة بسيطة بالتاريخ والوقت.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 8–9',html:`<p>المواعيد والرحلات ومواعيد التسليم كلها تواريخ وأوقات. ستتعلم:</p><ol><li>الأعداد الترتيبية وكتابة التاريخ وقراءته.</li><li>أسماء الأشهر والأيام، و ${e('on Mondays')}.</li><li>الوقت بنظامي 24 ساعة و 12 ساعة وقراءته.</li></ol>`},
  ...R13.theory,
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
  ...R13.stations,
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

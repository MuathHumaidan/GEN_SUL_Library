/* الوحدة 1 — New faces: Part A Introducing yourself (ص 6–7) · Part B Introducing other people (ص 8–9)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const cap=s=>s?s[0].toUpperCase()+s.slice(1):s;
const card=(x,y,co,nm,job,col)=>`<rect x="${x}" y="${y}" width="200" height="110" rx="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><rect x="${x}" y="${y}" width="200" height="24" rx="8" fill="${col}"/>${TL(x+100,y+17,co,{fs:12,w:700,c:'#fff'})}${TL(x+100,y+60,nm,{fs:15,w:700})}${TL(x+100,y+84,job,{fs:12})}`;

/* ========== 1A Introducing yourself ========== */
function lab1a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">بطاقتك</h3><p class="sub">مبني على التمرينين 2 و 3 ص 6–7. اكتب بياناتك بالإنجليزية.</p>
  <div class="ph-row"><select class="ph-sel" id="tt"><option>Mr</option><option>Ms</option></select><input class="ph-num" id="fn" type="text" value="Khalid" maxlength="16" dir="ltr" style="width:110px" aria-label="first name"><input class="ph-num" id="ln" type="text" value="Al-Harbi" maxlength="20" dir="ltr" style="width:120px" aria-label="last name"></div>
  <div class="ph-row"><input class="ph-num" id="dp" type="text" value="Sales" maxlength="24" dir="ltr" style="width:130px" aria-label="department"><input class="ph-num" id="ct" type="text" value="Riyadh" maxlength="20" dir="ltr" style="width:110px" aria-label="city"><input class="ph-num" id="cn" type="text" value="Saudi Arabia" maxlength="24" dir="ltr" style="width:130px" aria-label="country"></div>
  <p class="sub">الحقول: اللقب، الاسم الأول، اسم العائلة، القسم، المدينة، الدولة.</p><div id="cd" style="max-width:300px"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">قدّم نفسك</h3><div class="ph-row"><button type="button" class="btn pri" data-m="w">موظف جديد</button><button type="button" class="btn" data-m="s">متدرب</button></div><div id="o"></div><div id="w"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الفرق بين <span class="en">first name</span> و <span class="en">last name</span>؟</li><li>متى يناديك الناس بـ <span class="en">Mr</span> + اسم العائلة؟</li><li>غيّر إلى «متدرب»: ما الجملة التي تغيّرت؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let m='w';
 const ok=v=>/^[A-Za-z][A-Za-z' -]*$/.test(v.trim());
 const sh=()=>{el.querySelectorAll('[data-m]').forEach(b=>b.classList.toggle('pri',b.dataset.m===m));
  const f=['fn','ln','dp','ct','cn'].map(k=>$('#'+k).value.trim());
  if(!f.every(ok)){$('#w').innerHTML='<p class="sub" style="color:var(--red)">اكتب كل الحقول بحروف إنجليزية فقط.</p>';return}$('#w').innerHTML='';
  const [fn,ln,dp,ct,cn]=f.map(cap),t=$('#tt').value;
  $('#cd').innerHTML=`<svg viewBox="0 0 300 150" style="width:100%"><rect x="4" y="4" width="292" height="142" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><text x="20" y="40" font-size="13" fill="${C.mut}" direction="ltr">first name</text><text x="150" y="40" font-size="13" fill="${C.mut}" direction="ltr">last name</text><text x="20" y="68" font-size="20" font-weight="700" fill="${C.ink}" direction="ltr">${fn}</text><text x="150" y="68" font-size="20" font-weight="700" fill="${C.ink}" direction="ltr">${ln}</text><text x="20" y="104" font-size="14" fill="${C.ink}" direction="ltr">${m==='w'?dp+' Department':'Trainee, '+dp}</text><text x="20" y="128" font-size="13" fill="${C.ink}" direction="ltr">${ct}, ${cn}</text></svg>`;
  $('#o').innerHTML=eb([`Hello. My name's ${fn} ${ln}.`,`Please call me ${fn}.`,m==='w'?`I'm in the ${dp} Department.`:`I'm a student at the technical college. I study ${dp}.`,`I'm from ${ct} in ${cn}.`,'Nice to meet you.'])+`<p class="sub">الزائر يناديك: <span class="en">${t} ${ln}</span>، والأصدقاء: <span class="en">${fn}</span>.</p>`};
 ['tt','fn','ln','dp','ct','cn'].forEach(k=>$('#'+k).addEventListener('input',sh));el.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=b.dataset.m;sh()});sh();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 1 ===== */
const BE1={I:['am',"I'm","I'm not",'أنا'],you:['are',"You're","You aren't",'أنت'],he:['is',"He's","He isn't",'هو'],she:['is',"She's","She isn't",'هي'],it:['is',"It's","It isn't",'لغير الإنسان'],we:['are',"We're","We aren't",'نحن'],they:['are',"They're","They aren't",'هم']};
const CM1={I:'new here',you:'in Sales',he:'an engineer',she:'a manager',it:'a big company',we:'in the IT Department',they:'from Riyadh'};
const LAB111A={title:'am أم is أم are؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الضمير ونوع الجملة، وشاهد صيغة be التي تناسبه.',
 controls:[{k:'s',label:'الضمير',opts:Object.keys(BE1).map(k=>[k,k])},{k:'t',label:'الجملة',opts:[['pos','مثبتة'],['short','مختصرة'],['neg','منفية'],['q','سؤال']]}],
 out:({s,t})=>{const x=BE1[s],c=CM1[s],S=s==='I'?'I':s.replace(/^./,m=>m.toUpperCase());
  if(t==='pos')return{pieces:[[S,'x',x[3]],[x[0],'k',s==='I'?'مع I':x[0]==='is'?'مع he · she · it':'مع you · we · they'],[c+'.','n','']],say:`${S} ${x[0]} ${c}.`,why:`${e('am')} مع ${e('I')} فقط، و ${e('is')} مع ${e('he · she · it')}، و ${e('are')} مع ${e('you · we · they')}.`};
  if(t==='short')return{pieces:[[x[1],'k',`${s} + ${x[0]}`],[c+'.','n','']],say:`${x[1]} ${c}.`,why:'في الكلام نختصر: نحذف أول حرف من be ونضع مكانه علامة.'};
  if(t==='neg')return{pieces:[[x[2],'k','not بعد be'],[c+'.','n','']],say:`${x[2]} ${c}.`,why:`النفي: ${e('not')} بعد ${e('be')}. ومع ${e('I')} نقول ${e("I'm not")}.`};
  const Q=x[0].replace(/^./,m=>m.toUpperCase()),yes=s==='I'?'Yes, you are.':s==='you'?'Yes, I am.':`Yes, ${s} ${x[0]}.`;
  return{pieces:[[Q,'k','be في أول السؤال'],[s==='I'?'I':s,'x',''],[c+'?','n',''],[yes,'q','جواب قصير']],say:`${Q} ${s==='I'?'I':s} ${c}? ${yes}`,why:'في السؤال نقدّم be على الضمير. وفي جواب «نعم» القصير لا نختصر.'}}})};
const ME1={name:["My name's",'Saad Al-Otaibi','الاسم'],call:['Please call me','Saad','الاسم الذي تحب أن تُنادى به'],dep:["I'm in the",'Sales Department','القسم'],co:['I work for','Delta Electric','الشركة'],from:["I'm from",'Abha','المدينة'],st:["I'm a student at",'the technical college','الدراسة']};
const LAB111B={title:'قدّم نفسك',w:(el,B)=>N.labB(el,B,{intro:'اختر المعلومة التي تريد أن تقولها عن نفسك، وشاهد الجملة.',
 controls:[{k:'i',label:'المعلومة',opts:[['name','اسمي'],['call','نادني'],['dep','قسمي'],['co','شركتي'],['from','مدينتي'],['st','دراستي']]}],
 out:({i})=>{const [a,b,ar]=ME1[i];return{pieces:[[a,'k','العبارة'],[b+'.','n',ar]],say:`${a} ${b}.`,why:i==='dep'?`مع القسم ${e('in')}، ومع الشركة ${e('for')}.`:i==='co'?`نعمل ${e('for')} شركة، ونكون ${e('in')} قسم.`:`${e("My name's")} = ${e('My name is')}، و ${e("I'm")} = ${e('I am')}.`}}})};
const LAB111C={title:'الاسم الأول أم اللقب؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الشخص، ومن يتكلم معه: زميل أم زائر؟',
 controls:[{k:'p',label:'الشخص',opts:CARDS.map((c,i)=>[String(i),c.nm])},{k:'w',label:'المتكلم',opts:[['f','زميل أو صديق'],['v','زائر (رسمي)']]}],
 out:({p,w})=>{const c=CARDS[+p];return w==='f'?{pieces:[['Hello,','x',''],[c.fn+'.','n','الاسم الأول']],say:`Hello, ${c.fn}.`,why:'الأصدقاء والزملاء يستعملون الاسم الأول غالباً.'}
  :{pieces:[['Good morning,','x',''],[c.t,'k','اللقب'],[c.ln+'.','n','اسم العائلة']],say:`Good morning, ${c.t} ${c.ln}.`,why:`في الرسمي: اللقب + اسم العائلة، لا الاسم الأول: ${e(c.t+' '+c.ln)}`}}})};
const S112={I:['I',0],you:['You',0],we:['We',0],they:['They',0],he:['Majed',1],she:['Laila',1]};
const V112={live:['live','lives','in Riyadh'],work:['work','works','for Delta Electric']};
const LAB112A={title:'أين تسكن؟ أين تعمل؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الفاعل والفعل ونوع الجملة. لاحظ متى تظهر s ومتى تختفي.',
 controls:[{k:'s',label:'الفاعل',opts:Object.keys(S112).map(k=>[k,k==='he'?'Majed (he)':k==='she'?'Laila (she)':k])},{k:'v',label:'الفعل',opts:[['live','live'],['work','work']]},{k:'f',label:'الجملة',opts:[['pos','إثبات'],['neg','نفي'],['q','سؤال']]}],
 out:({s,v,f})=>{const [S,th]=S112[s],[b,t,o]=V112[v],Sl=th||S==='I'?S:S.toLowerCase();
  if(f==='pos')return{pieces:[[S,'n','الفاعل'],[th?t:b,'k',th?'نضيف s':'كما هو'],[o+'.','x','']],say:`${S} ${th?t:b} ${o}.`,why:th?`مع ${e('he · she')} نضيف ${e('s')}.`:`مع ${e('I · you · we · they')} يبقى الفعل كما هو.`};
  if(f==='neg')return{pieces:[[S,'n','الفاعل'],[th?"doesn't":"don't",'r','النفي'],[b,'k','بلا s'],[o+'.','x','']],say:`${S} ${th?"doesn't":"don't"} ${b} ${o}.`,why:`في النفي ${e(th?"doesn't":"don't")}، والفعل بعدها بلا ${e('s')}.`};
  return{pieces:[['Where','q','أين'],[th?'does':'do','q',th?'he · she':'I · you · we · they'],[Sl,'n','الفاعل'],[b+'?','k','بلا s']],say:`Where ${th?'does':'do'} ${Sl} ${b}?`,why:`السؤال: ${e('Where')} + ${e('do')} أو ${e('does')} + الفاعل + الفعل بلا ${e('s')}.`}}})};
const LAB112B={title:'قدّم شخصين',w:(el,B)=>N.labB(el,B,{intro:'اختر الشخص الذي تقدمه، وشاهد التقديم مع معلومة تساعد على بدء الحديث.',
 controls:[{k:'p',label:'الشخص',opts:CARDS.map((c,i)=>[String(i),c.nm])},{k:'f',label:'الأسلوب',opts:[['r',"I'd like to introduce you to"],['s','This is']]}],
 out:({p,f})=>{const c=CARDS[+p],he=c.t==='Ms'?'She':'He';return{pieces:[[f==='r'?"I'd like to introduce you to":'This is','k',f==='r'?'رسمي ولطيف':'أبسط'],[c.nm+'.','n','الاسم كاملاً'],[`${he} works for ${c.co}.`,'q','معلومة تساعد على الحديث']],say:`${f==='r'?"I'd like to introduce you to":'This is'} ${c.nm}. ${he} works for ${c.co}.`,why:`${e("I'd like to")} = ${e('I would like to')}، وهي ألطف من ${e('I want to')}. ثم نضيف معلومة عن الشخص.`}}})};
const Q112={from:['Where are you from?',"I'm from Tabuk."],live:['Where do you live?','I live in the suburbs.'],work:['Where do you work?','I work for Gulf Cables.'],dep:['Which department do you work in?',"I'm in Finance."]};
const LAB112C={title:'أسئلة شخصية بسيطة',w:(el,B)=>N.labB(el,B,{intro:'اختر ما تريد أن تعرفه، وشاهد السؤال وجواباً مناسباً.',
 controls:[{k:'q',label:'تريد أن تعرف',opts:[['from','بلده'],['live','سكنه'],['work','عمله'],['dep','قسمه']]}],
 out:({q})=>{const [a,b]=Q112[q];return{pieces:[[a,'q','السؤال'],[b,'n','الجواب']],say:`${a} ${b}`,why:q==='from'?`مع ${e('from')} نسأل بـ ${e('are')}، لأنه بلا فعل آخر.`:`مع الأفعال ${e('live · work')} نسأل بـ ${e('do')}.`}}})};
const R111=N.rule({title:'الفعل be، وتقديم نفسك، والاسم واللقب',ref:'ص 6–7',
 intro:`أول يوم في العمل تقدّم نفسك لزملائك. نبدأ بالفعل ${e('be')} الذي تُبنى عليه جمل التعارف، ثم عبارات تقديم النفس والرد عليها، ثم متى نستعمل الاسم الأول ومتى اللقب.`,
 parts:[
 {t:'الفعل be مع الضمائر',short:'الضمائر و be',q:'متى نقول am ومتى is ومتى are؟',add:true,
  lead:`الفعل ${e('be')} معناه «يكون». لا يظهر في الجملة العربية غالباً (نقول «أنا جديد هنا» بلا فعل)، لكنه لازم في الجملة الإنجليزية: ${e("I'm new here.")}`,
  points:[`<b>${e('be')} له ثلاث صيغ في المضارع</b>، ونختار منها حسب الضمير:<br>${e('am')} مع ${e('I')} فقط.<br>${e('is')} مع ${e('he · she · it')}.<br>${e('are')} مع ${e('you · we · they')}.`,
   `<b>الاختصار</b> يكثر في الكلام: ${e("I'm · you're · he's · she's · it's · we're · they're")}`,`<b>النفي:</b> ${e('not')} بعد ${e('be')}: ${e("I'm not · she isn't · they aren't")}`,
   `<b>السؤال:</b> نقدّم ${e('be')}: ${e('Are you new here?')} والجواب ${e("Yes, I am. / No, I'm not.")}، وفي «نعم» لا نختصر.`],
  grid:{head:['الضمير','be','المختصر','المعنى'],rows:[['I','am',"I'm",'أنا'],['you','are',"you're",'أنتَ / أنتِ / أنتم'],['he','is',"he's",'هو'],['she','is',"she's",'هي'],['it','is',"it's",'لغير الإنسان'],['we','are',"we're",'نحن'],['they','are',"they're",'هم / هنّ']]},
  ex:["I'm new here.","She's a manager.","We're in the IT Department.",'Is she in Sales? — No, she isn\'t.'],
  pairs:[['She are a manager.',"She's a manager.",'مع she نستعمل is.'],["Yes, I'm.",'Yes, I am.','في جواب نعم لا نختصر.']],
  labs:[LAB111A]},
 {t:'تقديم نفسك والرد على التحية',short:'تقديم نفسك',old:[1],q:'كيف تقول اسمك وقسمك وشركتك؟',ref:'ص 6',
  lead:`عندما تقابل شخصاً لأول مرة تذكر اسمك، ثم معلومة أو اثنتين عن عملك أو بلدك. وله عبارات ثابتة.`,
  points:[`<b>الاسم:</b> ${e("My name's Saad Al-Otaibi.")} أو ${e("I'm Saad Al-Otaibi.")}، ولتحدد كيف تُنادى: ${e('Please call me Saad.')}`,
   `<b>القسم</b> مع ${e('in')}: ${e("I'm in the Sales Department.")}`,`<b>الشركة</b> مع ${e('for')}: ${e('I work for Delta Electric.')}`,`<b>البلد:</b> ${e("I'm from Abha in Saudi Arabia.")}`,
   `<b>الرد:</b> أول من يحيّي يقول ${e('Nice to meet you.')} بلا too، ومن يرد عليه يضيف too: ${e('Nice to meet you, too.')} أو ${e('Good to meet you, too.')}`],
  html:dl([['A',"Hello. I'm Fahad. I'm new here."],['B',"Nice to meet you, Fahad. I'm Salem. I'm in the IT Department."],['A','Good to meet you, too. Where are you from, Salem?'],['B',"I'm from Tabuk."]]),
  pairs:[['I work in Delta Electric.','I work for Delta Electric.','مع الشركة: for.'],['A: Nice to meet you. B: Nice to meet you.','A: Nice to meet you. B: Nice to meet you, too.','الأول بلا <span class="en">too</span>، والرد عليه يضيف <span class="en">too</span> أو يقول <span class="en">Good to meet you, too.</span>']],
  art:art(`<g data-tip="My name's … = اسمي …"><rect x="20" y="40" width="320" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,68,"Hello. My name's Saad.",{fs:15,w:700})}</g>
    <g data-tip="Please call me … = نادني …"><rect x="20" y="96" width="320" height="44" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,124,'Please call me Saad.',{fs:15,w:700})}</g>
    <g data-tip="I'm in the … Department = أنا في قسم …"><rect x="20" y="152" width="320" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,180,"I'm in the Sales Department.",{fs:15,w:700})}</g>
    <g data-tip="I'm from … = أنا من …"><rect x="20" y="208" width="320" height="44" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,236,"I'm from Abha.",{fs:15,w:700})}</g>`,'تقديم النفس'),cap:'أربع جمل تقدّم بها نفسك. مرّر المؤشر على كل منها.',labs:[LAB111B,{title:'التقديم',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"My ___ Fahad.",o:["name's","name"],a:0},{s:"I'm ___ the IT Department.",o:['in','from'],a:0},{s:"I'm ___ Jeddah.",o:['from','in the'],a:0},{s:'Nice to meet you, ___.',o:['too','to'],a:0}]})}]},
 {t:'الاسم واللقب',short:'Mr · Ms · Dr',old:[2],q:'متى تقول Saad ومتى Mr Al-Otaibi؟',ref:'ص 7',
  lead:`لكل شخص اسم أول واسم عائلة. ويختلف ما نناديه به حسب العلاقة: زميل أم زائر.`,
  points:[`${e('first name')} الاسم الأول، و ${e('last name')} أو ${e('surname')} اسم العائلة.`,`<b>اللقب</b> ${e('title')}: ${e('Mr')} للرجل، و ${e('Ms')} للمرأة، و ${e('Dr')} للدكتور.`,`<b>اللقب يأتي مع اسم العائلة</b> لا الاسم الأول: ${e('Mr Al-Otaibi')}`,`الأصدقاء والزملاء يستعملون الاسم الأول غالباً، والزوار يستعملون اللقب واسم العائلة. وتختلف العادة من بلد لآخر.`],
  grid:{head:['English','المعنى','مثال'],rows:[['first name','الاسم الأول','Saad'],['last name (surname)','اسم العائلة','Al-Otaibi'],['title','اللقب','Mr / Ms / Dr'],['title + last name','للرسمي والزوار','Mr Al-Otaibi']]},
  pairs:[['Mr Saad','Mr Al-Otaibi','اللقب مع اسم العائلة.']],
  art:art(`${card(80,60,'Delta Electric','Saad Al-Otaibi','Sales Manager',C.blue)}
    <g data-tip="first name — الاسم الأول: Saad">${TL(85,230,'first name: Saad',{fs:13,w:700})}</g>
    <g data-tip="last name — اسم العائلة: Al-Otaibi">${TL(265,230,'last name: Al-Otaibi',{fs:13,w:700})}</g>
    <g data-tip="title + last name — للرسمي: Mr Al-Otaibi">${TL(180,270,'visitors: Mr Al-Otaibi',{fs:13,w:700})}</g>`,'بطاقة عمل'),cap:'بطاقة عمل من إعدادنا. مرّر المؤشر على كل سطر.',labs:[LAB111C,{title:'الاسم المناسب',w:(el,B)=>N.cases(el,B,{intro:'ماذا يقول؟',cases:[{q:'صديق قديم',opts:[['Saad',1],['Mr Al-Otaibi',0]]},{q:'زائر من شركة أخرى',opts:[['Mr Al-Otaibi',1],['Saad',0]]},{q:'اسم العائلة',opts:[['Al-Otaibi',1],['Saad',0]]}]})}]}
 ]});
B.lesson({
 id:'u1-l1',unit:1,order:1,pages:'6–7',
 title:'Part A: Introducing yourself — تقديم نفسك',
 summary:'تقديم النفس في العمل: My name\'s … / I\'m …، و Please call me …، و I\'m in the … Department، و I\'m from …، والرد Nice / Good to meet you (too)، والاسم الأول واسم العائلة واللقب، وماذا يناديك الناس في ثقافات مختلفة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 6–7',html:`<p>تقدّم نفسك لزميل أو زائر في العمل. ستتعلم:</p><ol><li>قول اسمك وكيف يناديك الناس.</li><li>قول قسمك أو دراستك ومن أين أنت.</li><li>الرد على التحية.</li><li>الاسم الأول واسم العائلة واللقب.</li></ol>`},
  ...R111.theory,
  {h:'تمارين الكتاب',ref:'ص 6–7',html:
   bk(1,'ص 6','انظر إلى الصورة وأجب، ثم استمع.',['a1 Andrew Walsh (موظف جديد: أول يوم له)','a2 names · departments · hometowns','b Andrew هو الجديد، وتحدثا عن الأسماء والأقسام والمدن.'])+
   bk(2,'ص 6','أكمل جمل Andrew و Florence ثم استمع وتحقق.',["a1 My name's Andrew Walsh.","a2 I'm from Dublin in Ireland.","a3 Nice to meet you.","b1 I'm Florence Garnier. Please call me Florence.","b2 I'm in the Human Resources Department.","b3 Good to meet you, too."])+
   bk(3,'ص 7','قدّم نفسك لزملائك في الصف.',null)+
   bk(4,'ص 7','استمع وأكمل جدول الأسماء.',['Pamela Bryson: friends Pamela · colleagues Pamela · boss Pamela · visitors Ms Bryson','Vladimir Popov: friends Vladimir · colleagues Popov · boss Popov · visitors Gospodin Popov','Elisabeth Reiser: friends Eli · colleagues Eli · visitors Ms Reiser','Koji Hirano: friends Koji · colleagues Hirano · boss Hirano-san'])},
  {h:'الاستماع',ref:'ص 6–7',html:au('1A-1b','ص 6 — التمرين 1b','موظفان يقدمان نفسيهما.')+au('1A-2c','ص 6 — التمرين 2c','الحوار نفسه للتحقق.')+au('1A-4a','ص 7 — التمرين 4a','أربعة أشخاص: ماذا يناديهم الناس؟')}
 ],
 stations:[
  {intro:true},
  ...R111.stations,
  {recap:['be: I am · he / she / it is · you / we / they are، والاختصار I\'m, she\'s, we\'re.','My name\'s … / I\'m … / Please call me …','I\'m in the … Department. I work for … I\'m from …','Nice to meet you. — Nice to meet you, too.','اللقب Mr / Ms / Dr مع اسم العائلة: Mr Al-Otaibi.']}
 ],
 lab:lab1a,
 examples:[
  {title:'مثال 1: تقديم نفسك',ref:'ص 6',q:`<p>اسمك عمر الزهراني، وتحب أن ينادوك عمر.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("My name's Omar Al-Zahrani.")}`},{t:`الخطوة 2: ${e('Please call me Omar.')}`},{t:`الخطوة 3: ${e("My name's Omar Al-Zahrani. Please call me Omar.")}`,final:true}]},
  {title:'مثال 2: القسم والمدينة',ref:'ص 6',q:`<p>أنت في قسم الموارد البشرية ومن الطائف.</p>`,given:[],solve:()=>[{t:`الخطوة 1: القسم: ${e("I'm in the Human Resources Department.")}`},{t:`الخطوة 2: المدينة: ${e("I'm from Taif.")}`},{t:`الخطوة 3: ${e("I'm in the Human Resources Department. I'm from Taif.")}`,final:true}]},
  {title:'مثال 3: الرد',ref:'ص 6',q:`<p>قال لك زميل: Nice to meet you. بماذا ترد؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: نكرر العبارة.`},{t:`الخطوة 2: نضيف ${e('too')} في آخرها.`},{t:`الخطوة 3: ${e('Nice to meet you, too.')}`,final:true}]}
 ],
 quiz:[
  {q:"My ___ Ali.",o:["name's","name","names","named"],c:0,e:"My name's = My name is."},
  {q:"I'm ___ the Sales Department.",o:['in','on','at','from'],c:0,e:'in the … Department.'},
  {q:'Nice to meet you. — Nice to meet you, ___.',o:['too','also','two','to'],c:0,e:'too.'},
  {q:'last name =',o:['surname','first name','title','nickname'],c:0,e:'last name = surname.'},
  {q:'الزائر يناديك عادة بـ:',o:['اللقب + اسم العائلة','الاسم الأول','اسم الشهرة','اسم القسم'],c:0,e:'ص 7.'},
  {q:"I'm a student ___ the technical college.",o:['at','in','from','to'],c:0,e:'a student at.'}
 ]
});

/* ========== 1B Introducing other people ========== */
const CARDS=[{co:'Gulf Cables',nm:'Majed Al-Qahtani',job:'Engineer',dep:'Production',t:'Mr',ln:'Al-Qahtani',fn:'Majed',col:C.blue},{co:'Najd Motors',nm:'Laila Saeed',job:'Accountant',dep:'Finance',t:'Ms',ln:'Saeed',fn:'Laila',col:C.red},{co:'Red Sea Foods',nm:'Turki Al-Shehri',job:'Director',dep:'Marketing',t:'Mr',ln:'Al-Shehri',fn:'Turki',col:C.grn}];
function lab1b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">قدّم شخصين</h3><p class="sub">مبني على التمرينين 3 و 4 ص 9. اختر شخصين، واكشف الخطوات الأربع للنصيحة.</p>
  <div class="ph-row"><select class="ph-sel" id="a">${CARDS.map((c,i)=>`<option value="${i}">${c.nm}</option>`).join('')}</select><select class="ph-sel" id="b">${CARDS.map((c,i)=>`<option value="${i}" ${i===1?'selected':''}>${c.nm}</option>`).join('')}</select></div>
  <div id="o"></div><div class="ph-row"><button type="button" class="btn pri" id="nx">الخطوة التالية</button><button type="button" class="btn" id="rs">من البداية</button></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">البطاقات</h3><div id="cd"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا نضيف معلومة عن كل شخص بعد الاسم؟</li><li>لماذا يقول الشخص الثاني اسم الأول مباشرة؟</li><li>قدّم زميلين في صفك بنفس الخطوات.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0;
 const ADV=['1 قدّم الشخصين بأسمائهما.','2 أضف معلومة عن كل منهما.','3 استعمل اسم الشخص الآخر مبكراً.','4 استعمل المعلومة لتبدأ حديثاً.'];
 const sh=()=>{const a=CARDS[+$('#a').value],b=CARDS[+$('#b').value];
  $('#cd').innerHTML=`<svg viewBox="0 0 220 250" style="width:100%">${card(10,6,a.co,a.nm,a.job,a.col)}${card(10,130,b.co,b.nm,b.job,b.col)}</svg>`;
  if(a===b){$('#o').innerHTML='<p class="sub">اختر شخصين مختلفين.</p>';$('#nx').disabled=true;return}$('#nx').disabled=k>=4;
  const L=[[`${a.t} ${a.ln}, I'd like to introduce you to ${b.nm}.`],[`${b.fn} works in the ${b.dep} Department of ${b.co}.`,`${a.t} ${a.ln} is ${/^[AEIOU]/.test(a.job)?'an':'a'} ${a.job.toLowerCase()} at ${a.co}.`],[`Nice to meet you, ${a.t} ${a.ln}.`],[`Nice to meet you, too. Is ${b.co} a big company?`]];
  $('#o').innerHTML=L.slice(0,k).map((l,i)=>`<p class="sub" style="margin:8px 0 2px"><b>${ADV[i]}</b></p>${eb(l)}`).join('')||'<p class="sub">اضغط «الخطوة التالية».</p>'};
 $('#nx').onclick=()=>{if(k<4){k++;sh()}};$('#rs').onclick=()=>{k=0;sh()};['a','b'].forEach(x=>$('#'+x).addEventListener('input',()=>{k=0;sh()}));sh();
}
const R112=N.rule({title:'المضارع البسيط، وتقديم الآخرين، والأسئلة الشخصية',ref:'ص 8–9',
 intro:`في هذا الدرس تقدّم زميلاً لزائر، وتسأل عن السكن والعمل. نبدأ بالمضارع البسيط الذي نتكلم به عن السكن والعمل، ثم عبارات التقديم، ثم الأسئلة الشخصية البسيطة.`,
 parts:[
 {t:'المضارع البسيط: أين تسكن؟ أين تعمل؟',short:'المضارع البسيط',q:'لماذا نقول Where do you work? لكن Where does she work؟',add:true,
  lead:`السكن والعمل والدراسة أشياء ثابتة، فنتكلم عنها بالمضارع البسيط. وقاعدته الأساسية تخص ${e('he · she · it')}.`,
  points:[`<b>مع ${e('I · you · we · they')}</b> يبقى الفعل كما هو: ${e('I live in Riyadh.')}`,`<b>مع ${e('he · she · it')}</b> نضيف ${e('s')}: ${e('She works for Delta.')}`,
   `<b>السؤال:</b> ${e('Where')} + ${e('do')} أو ${e('does')} + الفاعل + الفعل بلا ${e('s')}: ${e('Where does he work?')}`,`<b>النفي:</b> ${e("don't")} أو ${e("doesn't")} + الفعل بلا ${e('s')}: ${e("She doesn't work here.")}`,
   `عند تقديم شخص نستعمل ${e('he')} للرجل و ${e('she')} للمرأة: ${e('This is Majed. He works in Sales.')}`],
  grid:{head:['','I / you / we / they','he / she / it'],rows:[['إثبات','I live in Riyadh.','He lives in Jeddah.'],['نفي',"I don't live in the centre.","She doesn't work here."],['سؤال','Where do you live?','Where does he work?']]},
  pairs:[['Laila work in Finance.','Laila works in Finance.','Laila = she، فنضيف s.'],['Where does he works?','Where does he work?','بعد does الفعل بلا s.']],
  labs:[LAB112A]},
 {t:'تقديم الآخرين',short:'تقديم الآخرين',old:[1],q:'كيف تقدّم زميلتك لزائر؟',ref:'ص 9',
  lead:`عندما تقدّم شخصين لبعضهما تذكر اسميهما، ثم معلومة عن كل منهما تساعدهما على بدء الحديث.`,
  points:[`<b>رسمي ولطيف:</b> ${e("I'd like to introduce you to Laila Saeed.")}`,`<b>أبسط:</b> ${e('This is Majed Al-Qahtani.')}`,`<b>ثم معلومة:</b> ${e('Laila works in our Finance Department.')}`,`<b>والرد:</b> ${e("It's nice to meet you, Mr Al-Shehri.")}`,
   `${e("I'd like to")} = ${e('I would like to')}، وهي ألطف من ${e('I want to')}.`],
  html:vt([["I'd like to introduce you to Laila Saeed.",'أود أن أقدّم لك …'],['This is Majed Al-Qahtani.','هذا …'],['Laila works in our Finance Department.','تعمل في …'],["Mr Al-Shehri is a director of Red Sea Foods.",'مدير في …'],["It's nice to meet you, Mr Al-Shehri.",'سعدت بلقائك'],['Do you have a large Finance Department?','سؤال لبدء الحديث']],['English','المعنى']),
  art:art(`<circle cx="60" cy="110" r="30" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(60,116,'A',{fs:16,w:700})}<circle cx="180" cy="60" r="30" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,66,'you',{fs:14,w:700})}<circle cx="300" cy="110" r="30" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(300,116,'B',{fs:16,w:700})}
    <g data-tip="1 الأسماء: Mr A, I'd like to introduce you to B."><rect x="20" y="160" width="320" height="40" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,185,"Mr A, I'd like to introduce you to B.",{fs:13,w:700})}</g>
    <g data-tip="2 معلومة عن كل شخص."><rect x="20" y="210" width="320" height="40" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,235,'B works in our Finance Department.',{fs:13,w:700})}</g>`,'تقديم شخصين'),cap:'أنت في الوسط تقدّم A و B. مرّر المؤشر على السطرين.',labs:[LAB112B,{title:'التقديم',w:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:"I'd like to ___ you to Laila.",o:['introduce','meet'],a:0},{s:'Laila ___ in the Finance Department.',o:['works','work'],a:0},{s:"Mr Al-Shehri is a director ___ Red Sea Foods.",o:['of','in'],a:0}]})}]},
 {t:'نصائح التعارف والأسئلة الشخصية',short:'الأسئلة الشخصية',old:[2],q:'كيف تبدأ الحديث مع شخص جديد؟',ref:'ص 8–9',
  lead:`بعد التقديم يبدأ الحديث بأسئلة بسيطة عن البلد والسكن والعمل.`,
  points:[`<b>السؤال عن البلد</b> بـ ${e('are')}: ${e('Where are you from?')}`,`<b>عن السكن والعمل</b> بـ ${e('do')}: ${e('Where do you live? Where do you work?')}`,`<b>عن القسم:</b> ${e('Which department do you work in?')}`,
   `إذا قُدّمت لشخص فاستعمل اسمه فوراً، فهذا يساعدك على تذكره.`],
  html:vt([['Where are you from?','من أين أنت؟'],['Where do you live?','أين تسكن؟'],['Where do you work?','أين تعمل؟'],['Which department do you work in?','في أي قسم تعمل؟']],['English','المعنى']),
  pairs:[['Where you are from?','Where are you from?','في السؤال نقدّم are.'],['Where you live?','Where do you live?','مع live نسأل بـ do.']],
  art:art(`${['1 Introduce the two people.','2 Add more information.','3 Use the name early.','4 Start a conversation.'].map((x,i)=>`<g data-tip="${['قدّم الشخصين بأسمائهما','أضف معلومة عن كل منهما','استعمل اسم الشخص مبكراً','استعمل المعلومة لبدء حديث'][i]}"><rect x="30" y="${40+i*58}" width="300" height="44" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,68+i*58,x,{fs:14,w:700})}</g>`).join('')}`,'نصائح التعارف'),cap:'النصائح الأربع بالترتيب. مرّر المؤشر على كل منها.',labs:[LAB112C,{title:'النصيحة',w:(el,B)=>N.cases(el,B,{intro:'أي نصيحة؟',cases:[{q:"It's nice to meet you, Ms Saeed.",opts:[['3 Use the name early.',1],['1 Introduce the two people.',0]]},{q:'Do you have a large Finance Department?',opts:[['4 Start a conversation.',1],['2 Add more information.',0]]},{q:'Majed works in Production.',opts:[['2 Add more information.',1],['3 Use the name early.',0]]}]})}]}
 ]});
B.lesson({
 id:'u1-l2',unit:1,order:2,pages:'8–9',
 title:'Part B: Introducing other people — تقديم الآخرين',
 summary:'تقديم شخصين بعضهما لبعض: I\'d like to introduce you to …، و This is …، وإضافة معلومة عن كل شخص (works in …، is a director of …)، واستعمال اسم الشخص مبكراً، وسؤال يفتح الحديث (Do you have …?، Is … a big company?)، وعادات التعارف في البلدان.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 8–9',html:`<p>تقدّم زميلاً لضيف. ستتعلم:</p><ol><li>${e("I'd like to introduce you to …")}</li><li>إضافة معلومة عن كل شخص.</li><li>استعمال الاسم وبدء الحديث.</li></ol>`},
  ...R112.theory,
  {h:'تمارين الكتاب',ref:'ص 8–9',html:
   bk(1,'ص 8','اقرأ النص وأجب.',['a1 لتساعدهما على الحديث مع بعضهما.','a2 لأنه يساعدك على تذكّر الاسم.'])+
   bk(2,'ص 8','استمع وأكمل، ثم رتّب الكلمات.',['a1 Marketing','a2 director of Yonegawa Industries',"b1 Mr Haneda, I'd like to introduce you to Jacob Travis.",'b2 Jacob works in the Marketing Department of our company.','b3 Mr Haneda is a director of Yonegawa Industries.',"b4 It's nice to meet you, Mr Haneda.",'b5 Do you have a large Marketing Department here?'])+
   bk(3,'ص 9','طابق النصيحة بالأمثلة، ثم اكتب حواراً في مجموعة من ثلاثة.',['a 2','b 4','c 1 (مثال)','d 3'])+
   bk(4,'ص 9','اختر بطاقة عمل وقدّم زملاءك، واسأل سؤالاً واحداً على الأقل.',null)},
  {h:'الاستماع',ref:'ص 8',html:au('1B-2a','ص 8 — التمرين 2a','تقديم شخصين في العمل.')}
 ],
 stations:[
  {intro:true},
  ...R112.stations,
  {recap:['المضارع البسيط: I live / work، و He lives / works.','Where do you work? Where does she live?','I\'d like to introduce you to … / This is …','ثم معلومة: Laila works in our Finance Department.','Where are you from? Which department do you work in?']}
 ],
 lab:lab1b,
 examples:[
  {title:'مثال 1: تقديم',ref:'ص 9',q:`<p>قدّم ليلى سعيد إلى السيد الشهري.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ باسم الضيف: ${e('Mr Al-Shehri,')}`},{t:`الخطوة 2: ${e("I'd like to introduce you to Laila Saeed.")}`},{t:`الخطوة 3: ${e("Mr Al-Shehri, I'd like to introduce you to Laila Saeed.")}`,final:true}]},
  {title:'مثال 2: معلومة',ref:'ص 9',q:`<p>أضف: ماجد يعمل في قسم الإنتاج في شركتنا.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Majed works')} (مع s).`},{t:`الخطوة 2: ${e('in the Production Department of our company')}`},{t:`الخطوة 3: ${e('Majed works in the Production Department of our company.')}`,final:true}]},
  {title:'مثال 3: بدء الحديث',ref:'ص 9',q:`<p>عرفت أن ضيفك من شركة Najd Motors. اسأله سؤالاً يفتح الحديث.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نستعمل المعلومة: اسم الشركة.`},{t:`الخطوة 2: سؤال بسيط بـ ${e('Is')}.`},{t:`الخطوة 3: ${e('Is Najd Motors a big company?')}`,final:true}]}
 ],
 quiz:[
  {q:"I'd like to ___ you to Majed.",o:['introduce','meet','say','tell'],c:0,e:'introduce you to.'},
  {q:"I'd like =",o:['I would like','I did like','I had like','I like'],c:0,e:"I'd = I would."},
  {q:'Laila ___ in the Finance Department.',o:['works','work','working','is work'],c:0,e:'she + works.'},
  {q:'Why use a person\'s name immediately?',o:['to remember it','to be funny','to change it','to spell it'],c:0,e:'ص 8.'},
  {q:"He's a director ___ Red Sea Foods.",o:['of','for to','at in','from of'],c:0,e:'a director of.'},
  {q:'سؤال يفتح الحديث:',o:['Is your company big?','Goodbye.','My name is Ali.','Please call me.'],c:0,e:'ص 9.'}
 ]
});
})(PLCBOOK);

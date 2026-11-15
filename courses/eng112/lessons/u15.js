/* الوحدة 15 — Working together: Part A Making requests (ص 70–71) · Part B Making suggestions (ص 72–73)
   · Review 5 (ص 74–75) + Help files ص 112. الكتاب: Business Goals 1.
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 15A Making requests ========== */
const TASK=[['print this report','printing this report'],['book a meeting room','booking a meeting room'],['call the supplier','calling the supplier'],['check my email','checking my email'],['help me with this spreadsheet','helping me with this spreadsheet']];
const FORM=[['Can you',0,1],['Could you',0,2],['Would you mind',1,3]];
const REP={yes:['Sure. No problem.',"Yes, of course. I'll do it right away."],later:["OK, but I've got a meeting now. I'll do it after that.","Yes, but I have to finish this letter first."],no:["Sorry, I can't. My computer's crashed.","I'm sorry, but I really don't have time. Have you asked Lisa?"]};
function lab15a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الطلب</h3><p class="sub">مبني على التمرين 1 ص 70 و Language file 1 ص 112. اختر المهمة والصيغة والرد.</p>
  <div class="ph-row">${TASK.map((t,i)=>`<button type="button" class="btn" data-t="${i}">${t[0]}</button>`).join('')}</div>
  <div class="ph-row">${FORM.map((f,i)=>`<button type="button" class="btn" data-f="${i}">${f[0]} …</button>`).join('')}</div>
  <div class="ph-row"><button type="button" class="btn" data-r="yes">نعم</button><button type="button" class="btn" data-r="later">لاحقاً</button><button type="button" class="btn" data-r="no">لا</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div><div id="m"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي صيغة هي الأكثر أدباً؟</li><li>اختر <span class="en">Would you mind</span>: ماذا حدث للفعل؟</li><li>حين ترفض، ماذا تضيف بعد <span class="en">Sorry</span>؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let t=0,f=2,r='yes',k=0;
 const sh=()=>{el.querySelectorAll('[data-t]').forEach(b=>b.classList.toggle('pri',+b.dataset.t===t));el.querySelectorAll('[data-f]').forEach(b=>b.classList.toggle('pri',+b.dataset.f===f));el.querySelectorAll('[data-r]').forEach(b=>b.classList.toggle('pri',b.dataset.r===r));
  const [fm,ing,lv]=FORM[f],q=`${fm} ${TASK[t][ing]} for me, please?`,ans=f===2&&r==='yes'?'Not at all. '+REP.yes[k%2]:REP[r][k%2];
  $('#o').innerHTML=dl([['A',q],['B',ans]]);
  $('#m').innerHTML=`<p class="sub">درجة الأدب:</p><svg viewBox="0 0 300 30" style="width:100%;max-width:300px">${[1,2,3].map(i=>`<rect x="${(i-1)*100+2}" y="4" width="96" height="22" rx="6" fill="${i<=lv?'#2e8b57':C.paper}" stroke="${C.ink}"/>`).join('')}</svg><p class="sub">${f===2?`بعد ${e('Would you mind')} الفعل + ${e('ing')}، ونقبل بـ ${e('Not at all')} (= لا مانع).`:`بعد ${e(fm)} الفعل كما هو.`}</p>`};
 el.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{t=+b.dataset.t;sh()});el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=+b.dataset.f;sh()});el.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{r=b.dataset.r;k++;sh()});sh();
}
const LAB1515A={title:'Can · Could · Would you mind',w:(el,B)=>N.labB(el,B,{intro:'اختر الصيغة والمهمة.',
 controls:[{k:'f',label:'الصيغة',opts:FORM.map((x,i)=>[String(i),x[0]])},{k:'t',label:'المهمة',opts:TASK.map((x,i)=>[String(i),x[0]])}],
 out:({f,t})=>{const [fm,ing]=FORM[+f];return{pieces:[[fm,'k',['عادي','أكثر أدباً','الأكثر أدباً'][+f]],[TASK[+t][ing],'n',ing?'الفعل + ing':'الفعل كما هو'],['for me, please?','x','']],say:`${fm} ${TASK[+t][ing]} for me, please?`,why:ing?`${e('Would you mind')} + ${e('ing')}. معناها: هل يزعجك أن …؟`:`${e(fm)} + الفعل كما هو.`}}})};
const LAB1515B={title:'الرد على الطلب',w:(el,B)=>N.labB(el,B,{intro:'الطلب: Would you mind sending this email, please? اختر الرد.',
 controls:[{k:'r',label:'الرد',opts:[['y','نعم'],['l','لاحقاً'],['n','لا']]}],
 out:({r})=>r==='y'?{pieces:[['Not at all.','q','= لا مانع (نعم)'],["I'll do it right away.",'n','وعد']],say:"Not at all. I'll do it right away.",why:`جواب ${e('Would you mind')} بالقبول قد يكون بالنفي: ${e('Not at all. / No problem.')}`}
  :r==='l'?{pieces:[["OK, but I've got a meeting now.",'k','قبول مع عائق'],["I'll do it after that.",'n','موعد لاحق']],say:"OK, but I've got a meeting now. I'll do it after that.",why:'نقبل ثم نذكر متى نستطيع.'}
  :{pieces:[["I'm sorry, but",'r','اعتذار'],["my computer's crashed.",'x','سبب']],say:"I'm sorry, but my computer's crashed.",why:'نرفض باعتذار وسبب، وقد نقترح شخصاً آخر.'}})};
const R151=N.rule({title:'الطلب المهذب والرد عليه',ref:'ص 70، ص 112',
 intro:`في العمل نطلب من الزملاء أشياء كثيرة. الطلب المباشر (${e('Send these letters.')}) قد يبدو أمراً، فنستعمل صيغاً مهذبة، ونرد بالقبول أو التأجيل أو الرفض المهذب.`,
 parts:[
 {t:'صيغ الطلب',short:'Can · Could · Would you mind',old:[1],q:'ما الفرق بين Could you make … و Would you mind making …؟',ref:'ص 70، ص 112',
  lead:`ثلاث صيغ، من الأقل أدباً إلى الأكثر: ${e('Can you … → Could you … → Would you mind …ing')}.`,
  points:[`${e('Can you make some copies for me, please?')}`,`${e('Could you make some copies for me, please?')}`,`${e('Would you mind making some copies for me, please?')} (الفعل + ${e('ing')})`,`نضيف ${e('please')} في آخر الطلب.`,`لتجعل الأمر طلباً مهذباً: ${e('Send these letters.')} ← ${e('Could you send these letters, please?')}`],
  grid:{head:['الصيغة','بعدها','مثال'],rows:[['Can you','الفعل','Can you call the supplier?'],['Could you','الفعل','Could you call the supplier?'],['Would you mind','الفعل + ing','Would you mind calling the supplier?']]},
  pairs:[['Would you mind to send this fax?','Would you mind sending this fax?','بعد mind: ing.'],['Could you sending this fax?','Could you send this fax?','بعد Could you: الفعل كما هو.'],['I want you to stay late.','Would you mind staying late?','طلب لا أمر.']],
  art:art(`${FORM.map((x,i)=>`<g data-tip="${['عادي','أكثر أدباً','الأكثر أدباً'][i]}"><rect x="20" y="${170-i*60}" width="${130+i*80}" height="46" rx="12" fill="${[C.paper,C.yel,C.yel][i]}" stroke="${C.ink}" stroke-width="${1+i}"/>${TL(85+i*40,198-i*60,x[0]+' …',{fs:14,w:700})}</g>`).join('')}`,'requests'),cap:'كلما طالت الصيغة زاد الأدب. مرّر المؤشر.',labs:[LAB1515A]},
 {t:'الرد على الطلب',short:'Sure · Not at all · Sorry',old:[2],q:'كيف تقبل طلباً يبدأ بـ Would you mind …؟',ref:'ص 70، ص 112',
  lead:`ثلاثة أنواع من الرد: نعم، أو نعم لاحقاً، أو لا مع سبب.`,
  points:[`<b>نعم:</b> ${e('OK. · Sure. · No problem. · Yes, of course.')}`,`<b>نعم مع ${e('Would you mind')}:</b> ${e('Not at all. · No problem.')} (= لا يزعجني)`,`<b>لاحقاً:</b> ${e("OK, but I've got a meeting now. I'll do it after that.")}`,`<b>لا:</b> ${e("Sorry, I can't. My computer's crashed. · I'm sorry, but I really don't have time. Have you asked Sandy?")}`],
  grid:{head:['نعم','لاحقاً','لا'],rows:[['Sure.',"OK, but I've got a meeting now.","Sorry, I can't."],['Not at all.',"I'll do it after that.","I've got plans this evening."]]},
  pairs:[['Would you mind …? — Yes, I mind. (وأنت تقبل)','Would you mind …? — Not at all.','Not at all = أقبل.'],["No.","Sorry, I can't. I'm going to lunch now.",'الرفض باعتذار وسبب.']],labs:[LAB1515B]}
 ]});
B.lesson({
 id:'u15-l1',unit:15,order:1,pages:'70–71',
 title:'Part A: Making requests — تقديم الطلبات',
 summary:'الطلب المهذب (Can you …? Could you …? Would you mind …ing?) وتحويل الأمر إلى طلب، والرد بالقبول (Sure. Not at all.) أو التأجيل (I\'ll do it after that.) أو الرفض مع سبب، وكتابة رسالة تطلب معلومات.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 70–71',html:`<p>تطلب من زملائك أشياء في العمل وترد على طلباتهم. ستتعلم:</p><ol><li>صيغ الطلب من العادي إلى الأكثر أدباً.</li><li>الرد بنعم أو لاحقاً أو لا.</li><li>رسالة قصيرة تطلب فيها معلومات.</li></ol>`},
  ...R151.theory,
  {h:'تمارين الكتاب',ref:'ص 70–71، ص 112',html:
   bk(1,'ص 70','أكمل الطلبات (أيها الأكثر أدباً؟)، وأعد كتابة الجمل بأدب، ثم استمع وأكمل الردود.',['a: 1 make · 2 Could … make · 3 mind making — الأكثر أدباً: 3','b (نماذج): 1 Would you mind staying late to finish the report? · 2 Could you call the travel agent and book a flight to Frankfurt for me, please? · 3 Could you show me how to use the fax machine? · 4 Would you mind giving me the sales figures for last month, please? · 5 Could you help me with my PowerPoint presentation? · 6 Could you send these letters, please?',"c1 I'm sorry, but I've got plans for this evening.",'c2 Sure.','c3 OK. Do you want to use it now?','c4 OK. No problem.',"c5 Sorry, I'm not very good with PowerPoint.","c6 I'm sorry, I've got a meeting now."])+
   bk(2,'ص 71','نشاط ثنائي: اطلب أشياء من زملائك وردّ على طلباتهم حسب البطاقة.',null,'معلومات الطالب أ في ص 82 من الكتاب.')+
   bk(3,'ص 71','اكتب مع زميلك رسالة إلى شركة MBMG تطلب كتيباً ومعلومات عن التأمين الصحي للموظفين.',null,'إجابة حرة.')+
   bk('Language file 1','ص 112','رتّب الكلمات لتكوّن حوارات.',['1 A: Can you send this fax to Johnsons? — B: No problem.',"2 A: Would you mind staying late to finish the report, please? — B: I'm sorry, I've got an appointment after work.","3 A: Could you book a table for lunch? — B: Yes, I'll do it now.",'4 A: Would you mind typing these letters this afternoon? — B: No, not at all.',"5 A: Can you print a copy for me? — B: Sorry, my printer's not working.",'6 A: Could you arrange a meeting with Chris? — B: Yes, but I have to finish this first.'])},
  {h:'الاستماع',ref:'ص 70',html:au('15A-1','ص 70 — التمرين 1c','ستة طلبات وردودها.')}
 ],
 stations:[
  {intro:true},
  ...R151.stations,
  {recap:['Can you / Could you + الفعل … please?','Would you mind + الفعل ing … please? (الأكثر أدباً)','نعم: Sure. · No problem. · Not at all.',"لاحقاً: OK, but I've got a meeting now.","لا: Sorry, I can't. + السبب."]}
 ],
 lab:lab15a,
 examples:[
  {title:'مثال 1: من أمر إلى طلب',ref:'ص 70',q:`<p>اجعلها مهذبة: ${e('Give me the sales figures.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: نختار ${e('Would you mind')}.`},{t:`الخطوة 2: ${e('give')} ← ${e('giving')}، ونضيف ${e('please')}.`},{t:`الخطوة 3: ${e('Would you mind giving me the sales figures, please?')}`,final:true}]},
  {title:'مثال 2: القبول',ref:'ص 112',q:`<p>زميلك سأل: ${e('Would you mind closing the window?')} اقبل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: القبول هنا بالنفي: ${e('Not at all.')}`},{t:'الخطوة 2: نضيف وعداً.'},{t:`الخطوة 3: ${e("Not at all. I'll do it now.")}`,final:true}]},
  {title:'مثال 3: الرفض',ref:'ص 70',q:`<p>مديرك طلب أن تبقى متأخراً، وعندك موعد. ردّ.</p>`,given:[],solve:()=>[{t:`الخطوة 1: اعتذار: ${e("I'm sorry, but")}`},{t:`الخطوة 2: سبب: ${e("I've got an appointment this evening.")}`},{t:`الخطوة 3: ${e("I'm sorry, but I've got an appointment this evening. I'll come in early tomorrow.")}`,final:true}]}
 ],
 quiz:[
  {q:'Would you mind ___ this letter?',o:['typing','type','to type','typed'],c:0,e:'mind + ing.'},
  {q:'___ you send this fax, please?',o:['Could','Would mind','Do','Are'],c:0,e:'Could you.'},
  {q:'The most polite:',o:['Would you mind making copies?','Can you make copies?','Make copies.','I want copies.'],c:0,e:'Would you mind.'},
  {q:'Would you mind helping me? — ___ (yes)',o:['Not at all.','Yes, I mind.','No, I can.','I mind.'],c:0,e:'Not at all = أقبل.'},
  {q:"OK, but I've got a meeting now. I'll do it ___ that.",o:['after','before','since','for'],c:0,e:'after that.'},
  {q:"Sorry, I ___. My printer's not working.",o:["can't",'mind',"don't mind",'could'],c:0,e:"Sorry, I can't."}
 ]
});

/* ========== 15B Making suggestions ========== */
const SUG=[['We could','sponsor a sports team.','sponsor'],["Let's",'build a new website.','build'],["Why don't we",'advertise on the radio?','advertise'],['How about','giving a free gift with the product?','giving'],['What about','organizing a competition?','organizing']];
const RSP=[['I agree.','agree'],["That's a good idea.",'agree'],['Yes, but it takes a long time.','disagree'],["That's a good idea, but it's expensive.",'disagree']];
function lab15b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">اجتماع التسويق</h3><p class="sub">اجتماع من إعدادنا، مبني على التمرينين 2 و 3 ص 72–73: مبيعات الشركة تتراجع. اختر الاقتراح والرد.</p>
  <div class="ph-row">${SUG.map((s,i)=>`<button type="button" class="btn" data-s="${i}">${s[0]} …</button>`).join('')}</div>
  <div class="ph-row">${RSP.map((s,i)=>`<button type="button" class="btn" data-r="${i}">${s[0]}</button>`).join('')}</div></div>
 <div class="c6 panel"><h3 style="margin-top:0">محضر الاجتماع</h3><div id="o"></div><div id="l"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>بعد أي صيغ يأتي الفعل بـ ing؟</li><li>كيف ترفض اقتراحاً بأدب؟</li><li>اقترح فكرة جديدة لزيادة المبيعات.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let s=0,r=0;const log=[];
 const sh=()=>{el.querySelectorAll('[data-s]').forEach(b=>b.classList.toggle('pri',+b.dataset.s===s));el.querySelectorAll('[data-r]').forEach(b=>b.classList.toggle('pri',+b.dataset.r===r));
  const x=SUG[s],y=RSP[r];$('#o').innerHTML=dl([['A',`${x[0]} ${x[1]}`],['B',y[0]]]);
  const key=s+':'+r;if(!log.includes(key))log.push(key);
  $('#l').innerHTML=`<p class="sub">القرارات:</p><ul>${log.slice(-5).map(k=>{const [a,b]=k.split(':').map(Number);return `<li>${e(SUG[a][1].replace('?','.'))} ${RSP[b][1]==='agree'?'✔':'✘'}</li>`}).join('')}</ul>`};
 el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{s=+b.dataset.s;sh()});el.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{r=+b.dataset.r;sh()});sh();
}
const LAB1515C={title:'صيغ الاقتراح',w:(el,B)=>N.labB(el,B,{intro:'اختر الصيغة، وشاهد شكل الفعل بعدها.',
 controls:[{k:'s',label:'الصيغة',opts:SUG.map((x,i)=>[String(i),x[0]])}],
 out:({s})=>{const [a,b,v]=SUG[+s],ing=/ing$/.test(v);return{pieces:[[a,'k','الاقتراح'],[b,'n',ing?'الفعل + ing':'الفعل كما هو']],say:`${a} ${b}`,why:ing?`بعد ${e('How about')} و ${e('What about')}: الفعل + ${e('ing')}.`:`بعد ${e(a)}: الفعل كما هو.`}}})};
const LAB1515D={title:'الموافقة والاعتراض بأدب',w:(el,B)=>N.labB(el,B,{intro:"الاقتراح: Let's advertise on TV. اختر الرد.",
 controls:[{k:'r',label:'الرد',opts:[['a','أوافق'],['g','فكرة جيدة'],['b','نعم، لكن …'],['ab','أوافق، لكن …']]}],
 out:({r})=>{const X={a:['I agree.','q','موافقة'],g:["That's a good idea.",'q','موافقة'],b:["Yes, but it's very expensive.",'r','اعتراض مهذب'],ab:['I agree, but we need to check the price.','r','اعتراض مهذب']}[r];return{pieces:[[X[0],X[1],X[2]]],say:X[0],why:X[1]==='r'?`لا نقول ${e("No, that's a bad idea.")}؛ نبدأ بموافقة جزئية ثم ${e('but')}.`:'موافقة واضحة.'}}})};
const R152=N.rule({title:'الاقتراح، والموافقة والاعتراض بأدب',ref:'ص 72–73، ص 112',
 intro:`في الاجتماعات يقترح الناس أفكاراً، ويوافق الآخرون أو يعترضون بأدب، حتى يصلوا إلى قرار.`,
 parts:[
 {t:'صيغ الاقتراح',short:"We could · Let's · How about",old:[1,2],q:'لماذا نقول How about advertising لا How about advertise؟',ref:'ص 72، ص 112',
  lead:`خمس صيغ للاقتراح. ثلاث بعدها الفعل كما هو، واثنتان بعدهما الفعل + ${e('ing')}.`,
  points:[`<b>الفعل كما هو:</b> ${e("We could build a new website. · Let's build a new website. · Why don't we build a new website?")}`,`<b>الفعل + ing:</b> ${e('How about building a new website? · What about building a new website?')}`,`ونسأل عن أفكار: ${e('Does anyone have any new ideas? · Any more suggestions?')}`],
  grid:{head:['الصيغة','بعدها','مثال'],rows:[['We could','الفعل','We could have displays in stores.'],["Let's",'الفعل',"Let's build a new website."],["Why don't we",'الفعل',"Why don't we organize a competition?"],['How about','الفعل + ing','How about advertising on TV?'],['What about','الفعل + ing','What about sending emails?']]},
  pairs:[['How about advertise on TV?','How about advertising on TV?','بعد How about: ing.'],["Let's to build a website.","Let's build a website.","بعد Let's: الفعل كما هو."],["Why we don't organize a competition?","Why don't we organize a competition?","Why don't we …?"]],labs:[LAB1515C]},
 {t:'الموافقة والاعتراض بأدب',short:'I agree · Yes, but …',old:[3],q:'كيف تعترض على اقتراح دون أن تحرج صاحبه؟',ref:'ص 72، ص 112',
  lead:`نوافق بوضوح، ونعترض بأدب: نبدأ بموافقة جزئية ثم ${e('but')} والسبب.`,
  points:[`<b>نوافق:</b> ${e("I agree. · That's a good idea. · I like that.")}`,`<b>نعترض بأدب:</b> ${e("Yes, but … · I agree, but … · That's a good idea, but …")}`,`ومعها السبب: ${e("Yes, but we don't have enough money. · I agree, but prizes are expensive.")}`],
  pairs:[["No. That's a bad idea.","That's a good idea, but it's expensive.",'اعتراض مهذب.']],
  art:art(`<g data-tip="اقتراح"><rect x="90" y="20" width="180" height="46" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,48,'How about …ing?',{fs:13,w:700})}</g><path d="M150 66 L90 110 M210 66 L270 110" stroke="${C.ink}" stroke-width="2"/><g data-tip="موافقة"><rect x="10" y="110" width="160" height="70" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(90,138,'I agree.',{fs:13,w:700})}${TL(90,162,"That's a good idea.",{fs:11})}</g><g data-tip="اعتراض بأدب"><rect x="190" y="110" width="160" height="70" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(270,138,'Yes, but …',{fs:13,w:700})}${TL(270,162,'I agree, but …',{fs:11})}</g>`,'agree'),cap:'اقتراح ثم موافقة أو اعتراض بأدب. مرّر المؤشر.',labs:[LAB1515D]}
 ]});
B.lesson({
 id:'u15-l2',unit:15,order:2,pages:'72–73',
 title:'Part B: Making suggestions — تقديم الاقتراحات',
 summary:'أنواع الاجتماعات، وصيغ الاقتراح (We could …، Let\'s …، Why don\'t we …? How about …ing? What about …ing?)، والموافقة (I agree. That\'s a good idea.) والاعتراض بأدب (Yes, but …)، وطرق تسويق منتج، واتخاذ قرار في اجتماع.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 72–73',html:`<p>تشارك في اجتماع لتسويق منتج جديد. ستتعلم:</p><ol><li>خمس صيغ للاقتراح وشكل الفعل بعد كل منها.</li><li>الموافقة والاعتراض بأدب.</li><li>كلمات التسويق: ${e('advertise on TV · displays in stores · a competition · a website')}.</li></ol>`},
  ...R152.theory,
  {h:'تمارين الكتاب',ref:'ص 72–73، ص 112',html:
   bk(1,'ص 72','اقرأ وصف ثلاثة أنواع من الاجتماعات: هل اجتماعاتكم مثلها؟ أيها تفضّل؟',null)+
   bk(2,'ص 72','طابق الأفعال بالأسماء، ثم استمع وأكمل الاقتراحات والردود.',['a: 1 d · 2 a · 3 b · 4 c','b1 How about advertising (on TV?)','b2 (We) could have some displays (in stores.)',"b3 Why don't we organize (a competition?)","b4 Let's build a new (website.)",'c1 Yes, but (er,) (we don\'t have enough money.)',"c2 (That's) a good idea. (I like that.)",'c3 (I) agree, but (prizes are expensive.)','c4 (I) agree. (A new website is important.)'])+
   bk(3,'ص 73','حوارات قصيرة: اقترح ورد حسب البطاقة (مبيعات الشركة تتراجع).',null)+
   bk(4,'ص 73','في مجموعة: خططوا يوماً لبناء الفريق (أين، وكيف، والأنشطة، والطعام)، واقترحوا حتى تتفقوا، ثم أخبروا الصف.',null)+
   bk('Language file 2','ص 112','أكمل الحوارات بالصيغة المناسبة للفعل.',["1 A: We could (Let's) send emails to all our customers. — B: That's a good idea.","2 A: Why don't we advertise on the radio? — B: Yes, but that's expensive.","3 A: How (What) about giving a free gift with the product? — B: That's a good idea, but will it work?","4 A: Let's organize a competition. — B: Yes, let's do that."],'إجابات نموذجية؛ أكثر من صيغة مقبولة في 1 و 3.')},
  {h:'الاستماع',ref:'ص 72',html:au('15B-2','ص 72 — التمرين 2','اجتماع لتسويق المنتجات الجديدة.')}
 ],
 stations:[
  {intro:true},
  ...R152.stations,
  {recap:["We could / Let's / Why don't we + الفعل.",'How about / What about + الفعل ing.',"موافقة: I agree. · That's a good idea.",'اعتراض بأدب: Yes, but … · I agree, but … + السبب.','advertise on TV · have displays in stores · organize a competition · build a website.']}
 ],
 lab:lab15b,
 examples:[
  {title:'مثال 1: How about',ref:'ص 112',q:`<p>اقترح إعطاء هدية مجانية مع المنتج.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('How about')}`},{t:`الخطوة 2: ${e('give')} ← ${e('giving')}`},{t:`الخطوة 3: ${e('How about giving a free gift with the product?')}`,final:true}]},
  {title:'مثال 2: Let\'s',ref:'ص 112',q:`<p>صحّح: ${e("Let's to organize a competition.")}</p>`,given:[],solve:()=>[{t:`الخطوة 1: بعد ${e("Let's")} الفعل كما هو.`},{t:`الخطوة 2: نحذف ${e('to')}.`},{t:`الخطوة 3: ${e("Let's organize a competition.")}`,final:true}]},
  {title:'مثال 3: اعتراض',ref:'ص 72',q:`<p>زميلك اقترح الإعلان في التلفزيون، وهو غالٍ. اعترض بأدب.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بموافقة جزئية: ${e('Yes, but')}`},{t:`الخطوة 2: السبب: ${e('TV is very expensive.')}`},{t:`الخطوة 3: ${e('Yes, but TV is very expensive.')}`,final:true}]}
 ],
 quiz:[
  {q:'How about ___ on the radio?',o:['advertising','advertise','to advertise','advertised'],c:0,e:'How about + ing.'},
  {q:"Let's ___ a new website.",o:['build','building','to build','builds'],c:0,e:"Let's + الفعل."},
  {q:"Why ___ we organize a competition?",o:["don't",'not',"doesn't",'we'],c:0,e:"Why don't we."},
  {q:'Polite disagreement:',o:["That's a good idea, but it's expensive.","No, that's bad.",'I agree.',"That's a good idea."],c:0,e:'اعتراض مهذب.'},
  {q:'advertise ___ TV',o:['on','in','at','by'],c:0,e:'on TV.'},
  {q:'organize a ___',o:['competition','website','display','TV'],c:0,e:'organize a competition.'}
 ]
});

/* ========== Review 5 ========== */
B.lesson({
 id:'u15-l3',unit:15,order:3,pages:'74–75',
 title:'Review 5 — مراجعة الوحدات 13–15',
 summary:'مراجعة كلمات الطبخ والطعم، والمبني للمجهول في وصف الطعام، والدعوات وقبولها ورفضها، وكلمات الحجز والتسويق، والطلبات والاقتراحات، والتعليمات بالخطوات، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 74–75',html:vt([['الطبخ والطعم','baked · steamed · fried · boiled · spicy · salty · sweet · sour','13A'],['المبني للمجهول','A lot of tea is drunk in Britain.','13A'],['الدعوات',"Would you like to …? — Yes, I'd love to. / Oh, I'm sorry …",'13B'],['التعليمات','First, close all the programs. Then, click …','14A'],['الطلبات','Could you …? · Would you mind …ing?','15A'],['الاقتراحات',"How about …ing? · Let's … · That's a good idea, but …",'15B']],['الموضوع','أمثلة','من'])},
  {h:'متى يكون المبني للمجهول أفضل؟',ref:'ص 74',html:`<p>حين لا نعرف من فعل الشيء، أو لا يهمنا: ${e('Someone serves delicious food …')} ← ${e('Delicious food is served …')}. أما حين يكون الفاعل مهماً (${e('Mr Dunn makes very nice cakes.')}) أو الفعل لا يصلح للمجهول (${e('has')}) فنبقي الجملة كما هي.</p>`},
  {h:'تمارين المراجعة',ref:'ص 74–75',html:
   bk('Vocabulary 1','ص 74','أكمل الكلمات المتقاطعة بكلمات الطبخ والطعم.',['Across: 3 baked · 4 spicy · 6 steamed · 7 salty','Down: 1 sweet · 2 fried · 3 boiled · 5 savoury · 6 sour'],'من قراءتنا لشبكة الكلمات المتقاطعة.')+
   bk('Language 1','ص 74','أي الجمل أفضل بالمبني للمجهول؟ حوّلها.',['2 Delicious food is served in that restaurant.','3 A lot of tea is drunk in Britain.','5 Fresh bread is made every day in my local supermarket.','6 A lot of potatoes are eaten in the UK.','1 و 4 أفضل كما هما (الفاعل مهم في 1، و has لا يصلح للمجهول في 4).'])+
   bk('Communication 1','ص 74','اكتب ما تريد فعله هذا الأسبوع، وادعُ زملاءك واقبل دعواتهم أو اعتذر، واكتب خطتك في المفكرة.',null)+
   bk('Vocabulary 2','ص 75','أكمل الجمل بكلمات الصندوق.',['1 select','2 build','3 advertise','4 Click','5 competition','6 display'])+
   bk('Language 2','ص 75','طابق الأسئلة بالأجوبة.',['1 c','2 e','3 a','4 d','5 b'])+
   bk('Communication 2','ص 75','اشرح لزميلك كيف يطفئ الكمبيوتر، واستمع إليه يشرح كيف يبحث على الإنترنت.',null,'معلومات الطالب أ في ص 82 من الكتاب.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 13',title:'خلاصة: الطعام والدعوات',q:'أكمل: Chips are ___ in hot oil.',ref:'ص 74',
   art:art(`${[['baked','oven'],['steamed','over water'],['boiled','in water'],['fried','in oil']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="${20+(i%2)*165}" y="${30+Math.floor(i/2)*60}" width="155" height="48" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="1.5"/>${TL(97+(i%2)*165,52+Math.floor(i/2)*60,x[0],{fs:14,w:700})}${TL(97+(i%2)*165,70+Math.floor(i/2)*60,x[1],{fs:11})}</g>`).join('')}${[['sweet'],['salty'],['spicy'],['sour']].map((x,i)=>`<g data-tip="طعم"><rect x="${20+i*82}" y="160" width="74" height="36" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="1.5"/>${TL(57+i*82,183,x[0],{fs:12,w:700})}</g>`).join('')}`,'cooking'),
   cap:'طرق الطبخ والطعم. مرّر المؤشر.',side:[{tip:`المبني للمجهول: ${e('be')} + التصريف الثالث: ${e('A lot of rice is eaten in Asia.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Bread is ___ in an oven.',o:['baked','boiled'],a:0},{s:'Chips are ___ in hot oil.',o:['fried','steamed'],a:0},{s:'A lot of tea ___ in Britain.',o:['is drunk','drinks'],a:0},{s:"Would you like to go to the theatre? — Yes, I'd love to. ___",o:["What's on?","I'm tired."],a:0}]}),title:'مختبر مصغّر: الوحدة 13'}]},
  {st:2,short:'الوحدتان 14–15',title:'خلاصة: التعليمات والطلبات والاقتراحات',q:'ما الرد المناسب على: Would you mind sending this fax?',ref:'ص 75',
   side:[{tip:`${e('Would you mind')} + ${e('ing')}، والقبول: ${e('Not at all.')}`}],
   body:[{html:vt([['First, close all the programs.','تعليمات'],['Then, click the Start button.','تعليمات'],['Could you go to the bank for me?','طلب'],['Would you mind sending this fax?','طلب مهذب'],['How about advertising in the newspaper?','اقتراح'],["That's a good idea, but it's expensive.",'اعتراض مهذب']],['جملة','الوظيفة'])},{widget:(el,B)=>N.cases(el,B,{intro:'اختر الرد:',cases:[{q:'Could you go to the bank for me, please?',opts:[["Sorry, I can't. It's closed now.",1],["Yes, I'd love to. What's on?",0]]},{q:'Would you mind sending this fax, please?',opts:[["Not at all. What's the number?",1],['Yes, I mind.',0]]},{q:'How about advertising in the newspaper?',opts:[["That's a good idea, but it's expensive.",1],["Yes, I'd really like that. Who's playing?",0]]}]}),title:'مختبر مصغّر: الردود'}]},
  {recap:['baked · steamed · boiled · fried · sweet · salty · spicy · sour · savoury.','المبني للمجهول حين لا يهمنا الفاعل.',"Would you like to …? · Could you …? · Would you mind …ing? · How about …ing?",'First, … Then, … Finally, …','select · build · advertise · click · competition · display.']}
 ],
 examples:[
  {title:'مثال 1: المبني للمجهول',ref:'ص 74',q:`<p>حوّل: ${e('People eat a lot of rice in Asia.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('A lot of rice')}.`},{t:`الخطوة 2: ${e('is eaten')}، ونحذف ${e('People')} لأنه لا يهم.`},{t:`الخطوة 3: ${e('A lot of rice is eaten in Asia.')}`,final:true}]},
  {title:'مثال 2: الرد المناسب',ref:'ص 75',q:`<p>ردّ على: ${e('Would you like to go to a basketball match?')} بالقبول.</p>`,given:[],solve:()=>[{t:`الخطوة 1: قبول: ${e("Yes, I'd really like that.")}`},{t:'الخطوة 2: ثم سؤال.'},{t:`الخطوة 3: ${e("Yes, I'd really like that. Who's playing?")}`,final:true}]},
  {title:'مثال 3: تعليمات',ref:'ص 75',q:`<p>اكتب أول خطوتين لإطفاء الكمبيوتر.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('First, close all the programs.')}`},{t:`الخطوة 2: ${e("Then, click the 'Start' button.")}`},{t:`الخطوة 3: ${e("First, close all the programs. Then, click the 'Start' button.")}`,final:true}]}
 ],
 quiz:[
  {q:'Bread and cakes are ___ in an oven.',o:['baked','boiled','fried','steamed'],c:0,e:'baked.'},
  {q:'The opposite of sweet:',o:['savoury','sour','spicy','hot'],c:0,e:'savoury.'},
  {q:'A lot of potatoes ___ in the UK.',o:['are eaten','eat','are eat','eaten'],c:0,e:'المبني للمجهول.'},
  {q:'You need to ___ an airport from the list.',o:['select','build','display','advertise'],c:0,e:'select.'},
  {q:'Would you mind sending this fax? —',o:["Not at all. What's the number?","Yes, I'd love to. What's on?","Sorry, it's closed.","That's a good idea."],c:0,e:'Not at all.'},
  {q:'How about advertising in the newspaper? —',o:["That's a good idea, but it's expensive.","Not at all.","Yes, I'd love to. Who's playing?","Sorry, I can't. It's closed."],c:0,e:'رد على اقتراح.'}
 ]
});
})(PLCBOOK);

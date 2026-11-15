/* الوحدة 11 — Small talk: Part A Breaking the ice (ص 52–53) · Part B Keeping a conversation going (ص 54–55)
   + Help files ص 105–106. الكتاب: Business Goals 1.
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 11A Breaking the ice ========== */
const SIT={
 n:{t:'شخص جديد في العمل',k:0,lines:[['A','Hi. Are you new here?'],['B',"Yes. Today's my first day."],['A',"I'm new, too. I started last month. I'm Kate, by the way."],['B',"I'm Daniel. Nice to meet you, Kate."],['A',"Nice to meet you, too. I think the coffee's in this room. Would you like one?"]]},
 c:{t:'ضيف في مؤتمر',k:0,lines:[['A','Good morning. How do you do?'],['B','How do you do? I enjoyed your presentation. It was very interesting.'],['A',"Thank you. I'm Paul Grant, from Delta Electric."],['B',"I'm Helen Moore. I work for Bright Media."],['A','Nice to meet you, Ms Moore.']]},
 k:{t:'زميل تعرفه',k:1,lines:[['A',"Hi, Simon! It's good to see you again."],['B','Laura! Good to see you, too. How are things?'],['A','Fine, thanks. How about you?'],['B','Very well. How was your holiday?'],['A','Great, thanks. We went to the coast.']]},
 b:{t:'عميل تعرفه',k:1,lines:[['A','Hello, Mr Clark. Nice to see you again.'],['B','Hello, Ms Ward. How are you?'],['A',"I'm very well, thanks. How's business?"],['B',"Very good, actually. We've opened a new shop."],['A',"That's great news!"]]}};
function lab11a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الموقف</h3><p class="sub">حوارات من إعدادنا مبنية على التمرينين 1 و 2 ص 52. اختر الموقف، ثم اضغط «الجملة التالية».</p>
  <div class="ph-row" id="sb">${Object.keys(SIT).map(k=>`<button type="button" class="btn" data-s="${k}">${SIT[k].t}</button>`).join('')}</div>
  <div id="tag"></div><div class="ph-row"><button type="button" class="btn pri" id="nx">الجملة التالية</button><button type="button" class="btn" id="al">الحوار كاملاً</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>في أي المواقف قال المتكلم <span class="en">Nice to meet you</span>؟ ولماذا؟</li><li>أي عبارة تسمعها مع شخص تعرفه فقط؟</li><li>في حوار «شخص جديد في العمل»: من أعطى معلومة عن نفسه أولاً؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let s='n',i=1;
 const sh=()=>{el.querySelectorAll('[data-s]').forEach(b=>b.classList.toggle('pri',b.dataset.s===s));const x=SIT[s];
  $('#tag').innerHTML=`<p class="sub">${x.k?'شخصان <b>يعرف أحدهما الآخر</b>: عبارات مثل '+e('Good to see you again · How are things?'):'شخصان <b>يلتقيان أول مرة</b>: عبارات مثل '+e('Nice to meet you · How do you do?')}</p>`;
  $('#o').innerHTML=dl(x.lines.slice(0,i))+(i<x.lines.length?`<p class="sub">بقي ${x.lines.length-i} من ${x.lines.length}.</p>`:'<p class="sub">انتهى الحوار.</p>')};
 el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{s=b.dataset.s;i=1;sh()});
 $('#nx').onclick=()=>{i=Math.min(SIT[s].lines.length,i+1);sh()};$('#al').onclick=()=>{i=SIT[s].lines.length;sh()};sh();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 11 ===== */
const GR11={first:{n:['Nice to meet you.','لطيف أن ألتقيك','أول مرة'],f:['How do you do?','تحية رسمية جداً، والرد عليها بنفسها','أول مرة'],b:["I'm Kate, by the way.",'بالمناسبة، أنا …','أول مرة'],w:['Are you new here?','هل أنت جديد هنا؟','أول مرة']},
 know:{n:["It's good to see you again.",'سعيد برؤيتك مرة أخرى','تعرفه'],f:['How are things?','كيف الأحوال؟ (غير رسمي)','تعرفه'],b:["How's business?",'كيف العمل؟','تعرفه'],w:['How are you?','كيف حالك؟ (للاثنين، وأكثر مع من تعرفه)','الاثنان']}};
const LAB1111A={title:'أول مرة أم تعرفه؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الموقف ووظيفة العبارة، وشاهد العبارة المناسبة.',
 controls:[{k:'s',label:'الموقف',opts:[['first','ألتقيه أول مرة'],['know','أعرفه من قبل']]},{k:'f',label:'الوظيفة',opts:[['n','التحية'],['f','السؤال عن الحال'],['b','تقديم نفسي / العمل'],['w','سؤال للبدء']]}],
 out:({s,f})=>{const [x,ar,t]=GR11[s][f];return{pieces:[[x,s==='first'?'k':'q',t]],say:x,ar,why:s==='first'?`مع من تلتقيه أول مرة: ${e('meet')}. لا نقول ${e('again')}.`:`مع من تعرفه: ${e('see you again')}، وأسئلة عن الحال والعمل.`}}})};
const DO11={a:['give information about yourself first','do',"I'm new here, too. Is this your first day?"],b:['talk about easy things','do',"I work for Delta Electric. Where are you from?"],c:['make positive comments','do','Your talk was very useful.'],e:['offer to help','do',"The coffee's over there. Shall I show you?"],
 g:['ask very personal questions','dont','How much do you earn?'],h:['talk about difficult topics','dont','What do you think about politics?'],j:['make personal comments','dont','Your hair looks strange today.']};
const LAB1111B={title:'حديث جيد أم لا؟',w:(el,B)=>N.labB(el,B,{intro:'اختر النصيحة، وشاهد جملة توضّحها، وهل هي حديث جيد.',
 controls:[{k:'a',label:'النصيحة',opts:Object.keys(DO11).map(k=>[k,k+' — '+DO11[k][0]])}],
 out:({a})=>{const [t,d,x]=DO11[a];return{pieces:[[d==='do'?'Do ✔':"Don't ✘",d==='do'?'n':'r',d==='do'?'افعل':'لا تفعل'],[x,d==='do'?'k':'q','مثال من عندنا']],say:x,why:d==='do'?'هذا يريح الطرف الآخر ويفتح الحديث.':'هذا يحرج الطرف الآخر في أول لقاء.'}}})};
const R111=N.rule({title:'التحية في أول لقاء ومع من تعرفه، ونصائح الحديث الاجتماعي',ref:'ص 52–53، ص 105',
 intro:`الحديث الاجتماعي (${e('small talk')}) كلام قصير مهذب قبل العمل أو في الاستراحة. نشرح أولاً عبارات اللقاء الأول وعبارات اللقاء مع شخص تعرفه، ثم ما يناسب وما لا يناسب في هذا الحديث.`,
 parts:[
 {t:'أول مرة أم شخص تعرفه؟',short:'meet · see again',old:[1],q:'لماذا نقول Nice to meet you لشخص جديد، و Good to see you again لشخص نعرفه؟',ref:'ص 52، ص 105',
  lead:`العبارة تختلف حسب معرفتك بالشخص: مع الجديد نستعمل ${e('meet')}، ومع من تعرفه نستعمل ${e('see … again')} ونسأل عن الحال والعمل.`,
  points:[`<b>أول مرة:</b> ${e('Nice to meet you. · Good to meet you. · Pleased to meet you.')}`,`<b>أول مرة (رسمي جداً):</b> ${e('How do you do?')} والرد عليها: ${e('How do you do?')}`,`<b>لتبدأ مع شخص جديد:</b> ${e('Are you new here?')}، وتقدّم نفسك: ${e("I'm Kate, by the way.")}`,`<b>شخص تعرفه:</b> ${e("It's good to see you again. · It's nice to see you again.")}`,`<b>تسأل من تعرفه:</b> ${e("How are things? · How's business?")}`,`${e('How are you?')} تصلح للحالين.`],
  grid:{head:['','أول مرة','شخص تعرفه'],rows:[['التحية','Nice to meet you.',"It's good to see you again."],['السؤال','Are you new here?','How are things?'],['العمل','I work for …',"How's business?"]]},
  pairs:[['Nice to meet you again.',"It's nice to see you again.",'مع من تعرفه: see you again، لا meet.'],['How do you do? — Fine, thanks.','How do you do? — How do you do?','الرد على How do you do? بنفسها.'],["I'm by the way Jo.","I'm Jo, by the way.",'by the way في آخر الجملة.']],
  art:art(`<g data-tip="أول مرة: meet"><rect x="8" y="50" width="170" height="190" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(93,80,'first time',{fs:15,w:700})}${['Nice to meet you.','How do you do?','Are you new here?',"I'm …, by the way."].map((x,i)=>TL(93,118+i*30,x,{fs:11})).join('')}</g>
   <g data-tip="شخص تعرفه: see you again"><rect x="184" y="50" width="170" height="190" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(269,80,'you know them',{fs:15,w:700})}${["Good to see you again.",'How are things?',"How's business?",'How are you?'].map((x,i)=>TL(269,118+i*30,x,{fs:11})).join('')}</g>`,'meet see'),cap:'عبارات اللقاء الأول وعبارات من تعرفه. مرّر المؤشر على كل عمود.',labs:[LAB1111A]},
 {t:'نصائح الحديث الاجتماعي',short:'Do · Don\'t',old:[2],q:'ما أهم شيء في الحديث مع شخص جديد؟',ref:'ص 53',
  lead:`أهم شيء أن يرتاح الطرف الآخر. لذلك نبدأ بمعلومة عن أنفسنا، ونتكلم في الأشياء السهلة، ونتجنب الأسئلة المحرجة.`,
  points:[`<b>افعل:</b> أعطِ معلومة عن نفسك أولاً ثم أعطِ الآخر فرصة: ${e("I'm new here, too. Is this your first day?")}`,`<b>افعل:</b> تكلم في الأشياء السهلة (الاسم، البلد، الشركة)، وقل كلاماً إيجابياً عن العمل، وابحث عن شيء مشترك، واعرض المساعدة.`,`<b>لا تفعل:</b> لا تتكلم عن نفسك فقط، ولا تسأل أسئلة كثيرة متتالية.`,`<b>لا تفعل:</b> لا تسأل عن الأشياء الشخصية جداً (العمر، الراتب)، ولا عن المواضيع الصعبة (السياسة، الدين).`,`<b>لا تفعل:</b> لا تعلّق على ملابس الشخص أو شعره أو نظارته، ولا تقل كلاماً سلبياً عن العمل.`],
  pairs:[['How old are you?','Are you new here?','العمر سؤال شخصي جداً.'],["What's your name? Where are you from? Where do you live?","Hi, I'm Kate. I work in Sales. And you?",'لا تسأل أسئلة كثيرة متتالية؛ أعطِ معلومة عن نفسك أولاً.'],['Your shoes look expensive!','I enjoyed your presentation.','لا تعليق على الملابس؛ علّق على العمل.']],
  art:art(`<g data-tip="افعل"><rect x="20" y="40" width="155" height="210" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(97,70,'Do ✔',{fs:16,w:700})}${['name, company','positive comments','find something','in common','offer to help'].map((x,i)=>TL(97,105+i*28,x,{fs:12})).join('')}</g>
   <g data-tip="لا تفعل"><rect x="185" y="40" width="155" height="210" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(262,70,"Don't ✘",{fs:16,w:700})}${['age, salary','politics, religion','clothes, hair','negative comments','only questions'].map((x,i)=>TL(262,105+i*28,x,{fs:12})).join('')}</g>`,'small talk'),cap:'نصائح الحديث الاجتماعي. مرّر المؤشر على كل عمود.',labs:[LAB1111B]}
 ]});
B.lesson({
 id:'u11-l1',unit:11,order:1,pages:'52–53',
 title:'Part A: Breaking the ice — كسر الجليد',
 summary:'عبارات اللقاء الأول (Nice to meet you، How do you do?، Are you new here?، I\'m …, by the way) وعبارات اللقاء مع شخص تعرفه (It\'s good to see you again، How are things?، How\'s business?)، ونصائح الحديث الاجتماعي: ما يناسب وما لا يناسب.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 52–53',html:`<p>تبدأ حديثاً قصيراً مهذباً مع شخص في العمل. ستتعلم:</p><ol><li>عبارات اللقاء الأول وعبارات اللقاء مع شخص تعرفه.</li><li>كيف تبدأ الحديث وتقدّم نفسك.</li><li>ما يناسب وما لا يناسب في الحديث الاجتماعي.</li></ol>`},
  ...R111.theory,
  {h:'تمارين الكتاب',ref:'ص 52–53، ص 105',html:
   bk(1,'ص 52','متى تستعمل كل عبارة؟ مع شخص تلتقيه أول مرة أم مع شخص تعرفه؟',["أول مرة: Nice to meet you. · I'm Jo, by the way. · Are you new here? · How do you do?","شخص تعرفه: It's good to see you again. · How's business? · How are things?","How are you? تصلح للحالين."])+
   bk(2,'ص 52','استمع إلى حوارين: هل يلتقي الشخصان أول مرة؟ وما المواضيع؟ وأي العبارات قالوها؟',["a: الحوار 1 نعم (أول مرة) · الحوار 2 لا (يعرف أحدهما الآخر)","b: الحوار 1 work · الحوار 2 hotel, food, family","c: الحوار 1 Are you new here? · I'm Jo, by the way. · Nice to meet you. — الحوار 2 It's good to see you again. · How are things?","d: تدريب ثنائي حر."])+
   bk(3,'ص 53','اقرأ النص: صح أم خطأ؟ ثم قرّر أي الجمل حديث جيد وطابقها بالنصيحة.',["a: 1 T · 2 F (أعطِ معلومة عن نفسك أولاً) · 3 F","b: 1 جيد (a، d) · 2 غير جيد (f) · 3 جيد (c) · 4 غير جيد (j) · 5 جيد (e) · 6 غير جيد (g) · 7 غير جيد (h) · 8 جيد (a، b)"])+
   bk(4,'ص 53','نشاط ثنائي: موقفان (استراحة مؤتمر، وموظف جديد في المكتب). ابدأ حديثاً وقدّم نفسك.',null,'معلومات الطالب أ في ص 81 من الكتاب.')+
   bk('Language file 1a','ص 105','صحّح الأخطاء في الحوارات.',["1 A: Hi. Are you new here? B: Yes. How about you?","2 A: It's good to see you again. B: Good to see you, too.","3 A: I'm John, by the way. B: Nice to meet you, John.","4 A: How's business? B: Very well, thanks.","5 A: How are you? B: I'm fine, thanks."])+
   bk('Language file 1b','ص 105','رتّب الجمل لتكوّن حوارين.',["الحوار 1: Hello. Are you new here? → Yes. How did you know? → I haven't seen you before. → Right. Today's my first day. → Welcome! I'm Paolo, by the way. → I'm Fabio. Nice to meet you, Paolo.","الحوار 2: Hello, Nina. It's good to see you again. → And you, Anna! How are things? → Fine, thanks. And how are you? → Very well, thanks. How's business? → Really good, actually. Shall we go for a drink? → I'd love to!"])},
  {h:'الاستماع',ref:'ص 52',html:au('11A-2','ص 52 — التمرين 2','حواران: شخصان يلتقيان أول مرة، وصديقتان تلتقيان من جديد.')}
 ],
 stations:[
  {intro:true},
  ...R111.stations,
  {recap:["أول مرة: Nice to meet you. · How do you do? · Are you new here?","من تعرفه: It's good to see you again. · How are things? · How's business?","I'm …, by the way. (by the way في آخر الجملة)",'ابدأ بمعلومة عن نفسك، وتكلم في الأشياء السهلة.','لا عمر ولا راتب ولا سياسة ولا تعليق على الملابس.']}
 ],
 lab:lab11a,
 examples:[
  {title:'مثال 1: لقاء أول',ref:'ص 52',q:`<p>تلتقي زميلاً جديداً في أول يوم له. ابدأ الحديث وقدّم نفسك (اسمك Kate).</p>`,given:[],solve:()=>[{t:`الخطوة 1: السؤال: ${e('Are you new here?')}`},{t:`الخطوة 2: معلومة عنك: ${e('I started last month.')}`},{t:`الخطوة 3: ${e("Are you new here? I started last month. I'm Kate, by the way.")}`,final:true}]},
  {title:'مثال 2: من تعرفه',ref:'ص 52',q:`<p>تلتقي عميلاً تعرفه منذ سنة. حيّه واسأله عن العمل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: تعرفه، فنستعمل ${e('see … again')}.`},{t:`الخطوة 2: عن العمل: ${e("How's business?")}`},{t:`الخطوة 3: ${e("It's good to see you again. How's business?")}`,final:true}]},
  {title:'مثال 3: نصيحة',ref:'ص 53',q:`<p>زميل جديد قال: ${e('How much do you earn?')} هل هذا حديث جيد؟</p>`,given:[],solve:()=>[{t:'الخطوة 1: الراتب موضوع شخصي جداً.'},{t:'الخطوة 2: يخالف النصيحة g.'},{t:`الخطوة 3: ليس حديثاً جيداً. الأفضل: ${e('How long have you worked here?')}`,final:true}]}
 ],
 quiz:[
  {q:'Meeting someone for the first time:',o:['Nice to meet you.',"It's good to see you again.","How's business?",'How are things?'],c:0,e:'meet لأول مرة.'},
  {q:'How do you do? —',o:['How do you do?','Fine, thanks.','I do well.','Yes, I do.'],c:0,e:'الرد بنفس العبارة.'},
  {q:"I'm Jo, ___ the way.",o:['by','on','in','at'],c:0,e:'by the way.'},
  {q:"It's good to ___ you again.",o:['see','meet','look','watch'],c:0,e:'see you again لمن تعرفه.'},
  {q:'Good small talk:',o:["I enjoyed your presentation.",'How old are you?','Your shoes look expensive!','What do you think of the government?'],c:0,e:'تعليق إيجابي عن العمل.'},
  {q:'Small talk: you should talk about ___ first.',o:['yourself','the other person’s salary','politics','their clothes'],c:0,e:'نصيحة a.'}
 ]
});

/* ========== 11B Keeping a conversation going ========== */
const AP={
 stay:{q:'Where are you staying?',a:'At the Park Hotel.',i:"It's near the train station.",qq:'Do you know it?',c:"It's very comfortable."},
 week:{q:'What do you do at weekends?',a:'I usually play football.',i:'I play with friends from work.',qq:'Do you like sport?',c:"It's a great way to relax."},
 talk:{q:'What did you think of the presentation?',a:'It was good.',i:'I learned a lot about the new products.',qq:'What did you think?',c:'The speaker was excellent.'},
 long:{q:'How long have you worked here?',a:'For four years.',i:'I started in the Sales Department.',qq:'How about you?',c:"It's a good company to work for."}};
function lab11b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">السؤال</h3><p class="sub">مبني على التمرين 2 ص 54 و Language file 3 ص 106. اختر السؤال ثم نوع الـ <span class="en">plus</span>.</p>
  <div id="qs" class="ph-row">${Object.keys(AP).map(k=>`<button type="button" class="btn" data-q="${k}">${AP[k].q}</button>`).join('')}</div>
  <div class="ph-row" id="ps"><button type="button" class="btn" data-p="0">جواب قصير فقط</button><button type="button" class="btn" data-p="i">+ معلومة</button><button type="button" class="btn" data-p="qq">+ سؤال</button><button type="button" class="btn" data-p="c">+ تعليق</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div><div id="m"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر «جواب قصير فقط»: لماذا يتوقف الحديث؟</li><li>أي نوع من الـ <span class="en">plus</span> يعيد الكلام للطرف الآخر؟</li><li>اكتب جواباً مع <span class="en">plus</span> لسؤال: <span class="en">Where do you live?</span></li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let q='stay',p='i';
 const meter=n=>`<svg viewBox="0 0 300 40" style="width:100%;max-width:320px"><rect x="2" y="12" width="296" height="16" rx="8" fill="${C.paper}" stroke="${C.ink}"/><rect x="2" y="12" width="${n*296}" height="16" rx="8" fill="${n>0.5?'#2e8b57':'#c0392b'}"/></svg>`;
 const sh=()=>{el.querySelectorAll('[data-q]').forEach(b=>b.classList.toggle('pri',b.dataset.q===q));el.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('pri',b.dataset.p===p));
  const x=AP[q],pl=p==='0'?'':' '+x[p];
  $('#o').innerHTML=dl([['A',x.q],['B',x.a+pl]]);
  $('#m').innerHTML=`<p class="sub">هل يستمر الحديث؟</p>${meter(p==='0'?0.2:p==='qq'?1:0.8)}<p class="sub">${p==='0'?'جواب قصير فقط: الطرف الآخر لا يجد ما يقوله.':p==='i'?'معلومة إضافية تعطي الطرف الآخر موضوعاً جديداً.':p==='qq'?'سؤال يعيد الكلام للطرف الآخر: أقوى طريقة.':'تعليق يُظهر رأيك واهتمامك.'}</p>`};
 el.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{q=b.dataset.q;sh()});el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{p=b.dataset.p;sh()});sh();
}
const LAB1112A={title:'answer plus',w:(el,B)=>N.labB(el,B,{intro:'اختر السؤال ونوع الإضافة، وشاهد الجواب يتكوّن.',
 controls:[{k:'q',label:'السؤال',opts:Object.keys(AP).map(k=>[k,AP[k].q])},{k:'p',label:'الإضافة',opts:[['i','معلومة'],['qq','سؤال'],['c','تعليق']]}],
 out:({q,p})=>{const x=AP[q];return{pieces:[[x.a,'n','answer'],[x[p],p==='qq'?'q':'k',{i:'plus: معلومة',qq:'plus: سؤال',c:'plus: تعليق'}[p]]],say:x.a+' '+x[p],why:'الجواب القصير وحده يوقف الحديث، والإضافة تعطي الطرف الآخر شيئاً يرد عليه.'}}})};
const FS={y:['two years','for','مدة'],m:['six months','for','مدة'],a:['ages','for','مدة طويلة'],t:['2003','since','سنة'],j:['January','since','شهر'],l:['last week','since','نقطة في الماضي'],c:['I was at college','since','حدث في الماضي']};
const LAB1112B={title:'for أم since؟',w:(el,B)=>N.labB(el,B,{intro:'اختر التعبير الزمني، وشاهد الجملة بالمضارع التام مع for أو since.',
 controls:[{k:'x',label:'الزمن',opts:Object.keys(FS).map(k=>[k,FS[k][0]])},{k:'s',label:'الفاعل',opts:[['I','I'],['she','she']]}],
 out:({x,s})=>{const [t,w,ar]=FS[x],h=s==='I'?"I've":"She's";return{pieces:[[h,'x',s==='I'?'I have':'she has'],['worked here','n','have + التصريف الثالث'],[w,'k',w==='for'?'for + مدة':'since + بداية'],[t+'.','q',ar]],say:`${h} worked here ${w} ${t}.`,why:w==='for'?`${e('for')} مع المدة: كم بقي الشيء.`:`${e('since')} مع نقطة البداية: متى بدأ الشيء.`}}})};
const R112=N.rule({title:'answer plus، و How long … ? مع for و since، وعبارات متابعة الحديث',ref:'ص 54، ص 105–106',
 intro:`حتى لا يتوقف الحديث نضيف شيئاً إلى جوابنا. ونسأل كثيراً: كم مدة عملك هنا؟ فنحتاج المضارع التام مع ${e('for')} و ${e('since')}. وفي آخر الدرس عبارات قصيرة نرد بها.`,
 parts:[
 {t:'answer plus',short:'answer plus',old:[1],q:'لماذا لا نكتفي بجواب قصير؟',ref:'ص 54، ص 106',
  lead:`الجواب القصير مثل ${e('Yes, it is.')} يوقف الحديث. نضيف بعده واحداً من ثلاثة أشياء، ويسمى ذلك ${e('answer plus')}.`,
  points:[`<b>معلومة إضافية:</b> ${e("Where's the Head Office? — It's in Paris. There are branches all over Europe, too.")}`,`<b>سؤال:</b> ${e('How long have you been in Berlin? — Five years. How about you?')}`,`<b>تعليق:</b> ${e('What do you think of the new offices? — They\'re good. The desks are excellent.')}`,`السؤال أقوى طريقة لأنه يعيد الكلام للطرف الآخر: ${e('How about you? · And you?')}`],
  grid:{head:['السؤال','answer','plus'],rows:[['Did you have a good flight?','Yes, pretty good.','This is a very nice building.'],['Is this your first time here?','Yes, it is.','How long have you worked here?'],['Where are you staying?','At the Park Hotel.',"It's near the station."]]},
  pairs:[['A: Did you have a good weekend? B: Yes.','B: Yes, thanks. We went to the beach.','أضف معلومة بعد الجواب.'],['A: Where do you live? B: In Bath.','B: In Bath. Do you know it?','أضف سؤالاً.']],
  art:art(`${[['answer','Yes, it is.',C.paper],['+ information',"It's near the station.",C.yel],['+ question','How about you?',C.yel],['+ comment',"It's very nice.",C.yel]].map((x,i)=>`<g data-tip="${x[0]}"><rect x="20" y="${30+i*60}" width="320" height="48" rx="12" fill="${x[2]}" stroke="${C.ink}" stroke-width="2"/>${TL(90,59+i*60,x[0],{fs:13,w:700})}${TL(250,59+i*60,x[1],{fs:13})}</g>`).join('')}`,'answer plus'),cap:'الجواب ثم واحد من ثلاثة: معلومة أو سؤال أو تعليق.',labs:[LAB1112A]},
 {t:'How long … ? مع for و since',short:'for · since',old:[2],q:'ما الفرق بين for three years و since 2021؟',ref:'ص 105',add:false,
  lead:`نستعمل المضارع التام (${e('have/has')} + التصريف الثالث) لشيء بدأ في الماضي وما زال مستمراً الآن، ونسأل عنه بـ ${e('How long …?')}`,
  points:[`<b>السؤال:</b> ${e('How long have you worked here? · How long has she lived in Bath?')}`,`<b>for + مدة:</b> ${e("I've worked here for three months.")} (بدأت قبل ثلاثة أشهر وما زلت أعمل)`,`<b>since + نقطة البداية:</b> ${e("I've worked here since January.")} (بدأت في يناير وما زلت أعمل)`,`مع ${e('since')}: سنة، شهر، يوم، ساعة، أو حدث: ${e('since 2003 · since Monday · since I was at college')}`,`مع ${e('for')}: ${e('two years · six months · three days · ages · a long time')}`],
  grid:{head:['','for','since'],rows:[['معناه','مدة','نقطة البداية'],['أمثلة','three weeks · two years','Monday · 2003 · last week'],['جملة',"I've lived here for two years.","I've lived here since 2023."]]},
  pairs:[['I work here since 2020.',"I've worked here since 2020.",'الحدث مستمر: المضارع التام.'],["I've lived here since three years.","I've lived here for three years.",'المدة مع for.'],['How long do you work here?','How long have you worked here?','السؤال بالمضارع التام.']],
  art:art(`<line x1="30" y1="150" x2="330" y2="150" stroke="${C.ink}" stroke-width="3"/>${TL(60,180,'2023',{fs:13,w:700})}${TL(300,180,'now',{fs:13,w:700})}<circle cx="60" cy="150" r="7" fill="${C.ink}"/><circle cx="300" cy="150" r="7" fill="${C.ink}"/>
   <g data-tip="since: من نقطة البداية"><path d="M60 120 L60 100" stroke="${C.ink}" stroke-width="2"/>${TL(60,90,'since 2023',{fs:13,w:700})}</g>
   <g data-tip="for: طول المدة"><path d="M62 210 L298 210" stroke="${C.ink}" stroke-width="2"/>${TL(180,240,'for three years',{fs:13,w:700})}</g>`,'for since'),cap:'since تشير إلى نقطة البداية، و for إلى طول المدة.',labs:[LAB1112B]},
 {t:'عبارات قصيرة نرد بها',short:'Really? · Me, too.',old:[3],q:'كيف تُظهر اهتمامك بما يقوله الآخر؟',ref:'ص 106',
  lead:`عبارات قصيرة تُظهر أنك تستمع، فيستمر الحديث.`,
  points:[`${e('Really?')} = هذا مثير للاهتمام.`,`${e('Me, too.')} = وأنا كذلك.`,`${e('Sure.')} = نعم، موافق.`,`${e('Great.')} = جيد جداً.`,`${e("I'd love to!")} = أحب ذلك كثيراً (رد على دعوة).`],
  rows:[['Really?',"That's interesting."],['Me, too.',"That's the same for me."],['Sure.','Yes, I agree.'],['Great.','Very good.'],["I'd love to!",'I would like that very much.']],head:['العبارة','معناها'],
  pairs:[['A: I live near the park. B: I too.','B: Me, too.','نقول Me, too.'],['A: Would you like a coffee? B: I love to!',"B: I'd love to!","I'd love to = I would love to."]]}
 ]});
B.lesson({
 id:'u11-l2',unit:11,order:2,pages:'54–55',
 title:'Part B: Keeping a conversation going — إبقاء الحديث مستمراً',
 summary:'answer plus: الجواب ثم معلومة أو سؤال أو تعليق، والمضارع التام مع How long …? و for و since، وعبارات الرد القصيرة (Really? Me, too. Sure. I\'d love to!)، وأسئلة مناسبة وغير مناسبة لزميل العمل.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 54–55',html:`<p>تُبقي الحديث مستمراً مع زميل أو زائر. ستتعلم:</p><ol><li>${e('answer plus')}: أن تضيف شيئاً إلى جوابك.</li><li>السؤال عن المدة: ${e('How long have you …?')} مع ${e('for')} و ${e('since')}.</li><li>عبارات قصيرة تُظهر اهتمامك.</li></ol>`},
  ...R112.theory,
  {h:'تمارين الكتاب',ref:'ص 54–55، ص 105–106',html:
   bk(1,'ص 54','استمع إلى Werner و Michelle وأجب، ثم أكمل أجوبة Werner.',["a1 لا: تحدثا بالهاتف فقط، وهذا أول لقاء","a2 تأخذه Michelle في جولة في سيدني (دار الأوبرا ثم الغداء عند الميناء)","b: the hotel ✔ · the flight ✔ · sightseeing ✔ (dinner ✘ · television ✘)","c1 This is a very nice building.","c2 How long have you worked here?","c3 It's near Darling Harbour station on the Metro Monorail.","c4 Do I need to bring anything?"])+
   bk(2,'ص 54','أي أجوبة Werner تعطي معلومة، وأيها سؤال، وأيها تعليق؟ ثم أكمل الـ plus في الحوارات.',["a: معلومة: 3 (It's near Darling Harbour station …) · سؤال: 2 و 4 · تعليق: 1 (This is a very nice building.)","b (إجابات نموذجية): 1 We went with Tom. · 2 This restaurant is very good. · 3 How's Donna?"])+
   bk(3,'ص 55','اكتب سؤالاً لكل موضوع، ثم جوابك مع answer plus، وتحادث مع زميل.',null)+
   bk(4,'ص 55','في بلدك: أي الأسئلة مناسبة لزميل العمل؟ ناقش.',null,'لا جواب واحد صحيح؛ الأسئلة عن العمر والراتب والدين غير مناسبة غالباً في العمل.')+
   bk('Language file 2a','ص 105','ضع التعابير الزمنية في عمود for أو since.',["for: three weeks · two years · five minutes · six months · ages · three days · two hours · a long time","since: Monday · last week · 2002 · 12th October · yesterday · May · 10 o'clock · I was at college"])+
   bk('Language file 2b','ص 106','اكتب الحوارات بالمضارع التام مع for أو since.',["1 How long have you known Mr Porter? — For about six years, I think.","2 How long has your department had two secretaries? — Well, Christine has been here for two months, and Nadia has worked here since January.","3 How long has he worked for Gasco? — Since 2002.","4 How long have you lived here? — For nine months.","5 How long has Stella been your manager? — For a long time now. Since about 2001.","6 How long have you had it? — Oh, I've only had it for three weeks.","7 How long has Mauro worked in Rome? — He's worked there for about three years, but he's worked in the centre since last March.","8 How long have you been at this branch? — Since August 2000."])+
   bk('Language file 3','ص 106','اكتب جواباً و plus لكل سؤال.',null,'إجابات حرة. نموذج: 1 At the Park Hotel. It\'s near the station. · 2 I play football. Do you like sport? · 3 It was good. I learned a lot.')+
   bk('Vocabulary file','ص 106','وصّل العبارة بمعناها.',['1 c · 2 a · 3 d · 4 e · 5 b'])},
  {h:'الاستماع',ref:'ص 54',html:au('11B-1a','ص 54 — التمرين 1a و 1b','Werner و Michelle قبل الاجتماع.')+au('11B-1c','ص 54 — التمرين 1c','أجزاء الحوار الأربعة مرة أخرى.')}
 ],
 stations:[
  {intro:true},
  ...R112.stations,
  {recap:['answer plus: الجواب + معلومة أو سؤال أو تعليق.','How about you? تعيد الكلام للطرف الآخر.',"How long have you worked here? — For three years. / Since 2023.",'for + مدة · since + بداية.',"Really? · Me, too. · Sure. · Great. · I'd love to!"]}
 ],
 lab:lab11b,
 examples:[
  {title:'مثال 1: answer plus',ref:'ص 54',q:`<p>سُئلت: ${e('Did you have a good flight?')} أجب ثم أضف تعليقاً.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الجواب: ${e('Yes, pretty good, thanks.')}`},{t:`الخطوة 2: تعليق: ${e('The airport is very modern.')}`},{t:`الخطوة 3: ${e('Yes, pretty good, thanks. The airport is very modern.')}`,final:true}]},
  {title:'مثال 2: for أم since؟',ref:'ص 105',q:`<p>بدأت العمل في الشركة سنة 2022 وما زلت تعمل. اكتب الجملة.</p>`,given:[],solve:()=>[{t:'الخطوة 1: بدأ في الماضي ومستمر: المضارع التام.'},{t:`الخطوة 2: 2022 نقطة بداية: ${e('since')}.`},{t:`الخطوة 3: ${e("I've worked here since 2022.")}`,final:true}]},
  {title:'مثال 3: السؤال',ref:'ص 105',q:`<p>اسأل زميلتك عن مدة سكنها في Leeds.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('How long')} + ${e('have')}`},{t:`الخطوة 2: + ${e('you')} + ${e('lived')} (التصريف الثالث)`},{t:`الخطوة 3: ${e('How long have you lived in Leeds?')}`,final:true}]}
 ],
 quiz:[
  {q:'Answer plus (a question):',o:['For two years. How about you?','For two years.','Yes.','Two.'],c:0,e:'الجواب ثم سؤال.'},
  {q:"I've worked here ___ six months.",o:['for','since','from','in'],c:0,e:'مدة: for.'},
  {q:"She's lived in Bath ___ 2019.",o:['since','for','from','ago'],c:0,e:'نقطة بداية: since.'},
  {q:'How long ___ you known him?',o:['have','do','did','are'],c:0,e:'المضارع التام.'},
  {q:"A: I love football. B: ___",o:['Me, too.','I too.','Me also.','Too me.'],c:0,e:'Me, too.'},
  {q:"Would you like to come? — ___",o:["I'd love to!",'I love to!',"I'd love!",'I like to!'],c:0,e:"I'd love to!"}
 ]
});
})(PLCBOOK);

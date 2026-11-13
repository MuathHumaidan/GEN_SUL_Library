/* الوحدة 10 — Routines: Part A Routines and past events (ص 48–49) · Part B Comparing routines (ص 50–51)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 10A Routines and past events ========== */
/* [فعل, s مع he, الماضي, ing, المكمّل, الوقت] */
const DAY=[['get up','gets up','got up','getting up','','5.30'],['have','has','had','having','breakfast','6.00'],['leave','leaves','left','leaving','home','6.30'],['start','starts','started','starting','work','7.00'],['have','has','had','having','a meeting','9.00'],['call','calls','called','calling','his clients','11.00'],['have','has','had','having','lunch','12.30'],['finish','finishes','finished','finishing','work','3.00'],['go','goes','went','going','to the gym','5.00'],['get','gets','got','getting','home','7.00']];
function lab10a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">يوم فيصل</h3><p class="sub">شخصية من إعدادنا، مبني على التمرينين 1–3 ص 48. اختر الزمن ثم ساعة من اليوم.</p>
  <div class="ph-row"><button type="button" class="btn pri" data-t="every">every Sunday</button><button type="button" class="btn" data-t="now">now</button><button type="button" class="btn" data-t="last">last Sunday</button></div>
  <div class="ph-row" id="hs">${DAY.map((d,i)=>`<button type="button" class="btn${i?'':' pri'}" data-h="${i}">${d[5]}</button>`).join('')}</div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">الأزمنة الثلاثة</h3>${vt([['every Sunday','He gets up at 5.30.','المضارع البسيط'],['now','He is getting up.','المضارع المستمر'],['last Sunday','He got up at 5.30.','الماضي البسيط']],['متى','مثال','الزمن'])}</div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر «now»: لماذا أضفنا <span class="en">is … ing</span>؟</li><li>أي الأفعال ماضيها شاذ؟</li><li>صِف يومك بالأزمنة الثلاثة.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let t='every',h=0;
 const sh=()=>{el.querySelectorAll('[data-t]').forEach(b=>b.classList.toggle('pri',b.dataset.t===t));el.querySelectorAll('[data-h]').forEach(b=>b.classList.toggle('pri',+b.dataset.h===h));
  const d=DAY[h],c=d[4]?' '+d[4]:'';
  $('#o').innerHTML=t==='every'?eb(`Every Sunday, Faisal ${d[1]}${c} at ${d[5]}.`):t==='now'?eb([`It's ${d[5]} now.`,`Look! Faisal is ${d[3]}${c}.`]):eb(`Last Sunday, Faisal ${d[2]}${c} at ${d[5]}.`)};
 el.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{t=b.dataset.t;sh()});el.querySelectorAll('[data-h]').forEach(b=>b.onclick=()=>{h=+b.dataset.h;sh()});sh();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 10 ===== */
const LAB1101A={title:'ثلاثة أزمنة',w:(el,B)=>N.labB(el,B,{intro:'اختر النشاط والوقت، وشاهد الزمن المناسب للفعل.',
 controls:[{k:'a',label:'النشاط',opts:DAY.slice(0,6).map((d,i)=>[String(i),d[0]+(d[4]?' '+d[4]:'')])},{k:'t',label:'الوقت',opts:[['every','Every day'],['now','Look! (الآن)'],['past','Yesterday']]},{k:'s',label:'الفاعل',opts:[['I','I'],['he','he']]}],
 out:({a,t,s})=>{const [b,th,p,ing,o]=DAY[+a],obj=o?' '+o:'';const S=s==='I'?'I':'he';
  if(t==='every'){const v=s==='he'?th:b;return{pieces:[['Every day,','q','روتين'],[S,'n',''],[v,'k',s==='he'?'مضارع بسيط + s':'مضارع بسيط'],[obj.trim()+'.','x','']],say:`Every day, ${S} ${v}${obj}.`,why:'للروتين المتكرر: المضارع البسيط.'}}
  if(t==='now'){const be=s==='he'?"'s":"'m";return{pieces:[['Look!','q','الآن'],[(s==='he'?'He':'I')+be,'n','am / is'],[ing,'k','الفعل + ing'],[obj.trim()+'.','x','']],say:`Look! ${s==='he'?'He':'I'}${be} ${ing}${obj}.`,why:`لما يحدث الآن: ${e('am · is · are')} + الفعل + ${e('ing')}.`}}
  const reg=p.endsWith('ed');return{pieces:[['Yesterday,','q','ماضٍ'],[S,'n',''],[p,'k',reg?'منتظم + ed':'شاذ'],[obj.trim()+'.','x','']],say:`Yesterday, ${S} ${p}${obj}.`,why:'لما حدث وانتهى: الماضي البسيط، وهو واحد مع كل الضمائر.'}}})};
const LAB1101B={title:'النفي والسؤال في الماضي',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل ونوع الجملة. لاحظ أن الفعل يعود إلى أصله بعد did.',
 controls:[{k:'a',label:'الفعل',opts:DAY.slice(0,6).map((d,i)=>[String(i),d[0]+(d[4]?' '+d[4]:'')])},{k:'f',label:'الجملة',opts:[['pos','إثبات'],['neg','نفي'],['q','سؤال']]}],
 out:({a,f})=>{const [b,,p,,o]=DAY[+a],obj=o?' '+o:'';if(f==='pos')return{pieces:[['I','n',''],[p,'k','الماضي'],[obj.trim()+' yesterday.','x','']],say:`I ${p}${obj} yesterday.`,why:'الإثبات: الفعل في الماضي.'};
  if(f==='neg')return{pieces:[['I','n',''],["didn't",'r','= did not'],[b,'k','الفعل الأصلي'],[obj.trim()+' yesterday.','x','']],say:`I didn't ${b}${obj} yesterday.`,why:`النفي: ${e("didn't")} + الفعل الأصلي، لا الماضي.`};
  return{pieces:[['Did','q','السؤال'],['you','n',''],[b,'k','الفعل الأصلي'],[obj.trim()+' yesterday?','x','']],say:`Did you ${b}${obj} yesterday?`,ar:"Yes, I did. / No, I didn't.",why:`السؤال: ${e('Did')} + الفاعل + الفعل الأصلي.`}}})};
const LAB1102A={title:'ظروف التكرار',w:(el,B)=>N.labB(el,B,{intro:'اختر الظرف والجملة. لاحظ مكانه: قبل الفعل، أو بعد be.',
 controls:[{k:'a',label:'الظرف',opts:ADV.map(a=>[a[1],a[1]+' ('+a[0]+'%)'])},{k:'v',label:'الجملة',opts:[['main','مع فعل: take the train'],['be','مع be: late']]}],
 out:({a,v})=>{const pc=ADV.find(x=>x[1]===a)[0];const bar=`<svg viewBox="0 0 320 40" width="300"><rect x="10" y="12" width="300" height="16" rx="8" fill="#eee"/><rect x="10" y="12" width="${3*pc}" height="16" rx="8" fill="#00875a"/><text x="${Math.max(18,3*pc)}" y="10" font-size="10">${pc}%</text></svg>`;
  return v==='main'?{svg:bar,pieces:[['I','n',''],[a,'k','قبل الفعل'],['take','q','الفعل'],['the train.','x','']],say:`I ${a} take the train.`,why:`ظرف التكرار يأتي قبل الفعل الأساسي.${a==='never'?` ومع ${e('never')} لا نستعمل ${e("don't")}.`:''}`}
  :{svg:bar,pieces:[["I'm",'q','be'],[a,'k','بعد be'],['late.','x','']],say:`I'm ${a} late.`,why:`مع ${e('be')} يأتي ظرف التكرار بعده.`}}})};
const LAB1102B={title:'How often …?',w:(el,B)=>N.labB(el,B,{intro:'اختر النشاط والظرف، وشاهد السؤال والجواب.',
 controls:[{k:'x',label:'النشاط',opts:[['late','work late'],['out','go out with your classmates'],['bus','take the bus']]},{k:'a',label:'الجواب',opts:ADV.map(a=>[a[1],a[1]])}],
 out:({x,a})=>{const act={late:'work late',out:'go out with your classmates',bus:'take the bus'}[x];return{pieces:[['How often do you','q','كم مرة؟'],[act+'?','x',''],['I','n',''],[a,'k','ظرف التكرار'],[act+'.','x','']],say:`How often do you ${act}? I ${a} ${act}.`,why:`نسأل عن التكرار بـ ${e('How often …?')} ونجيب بظرف تكرار.`}}})};
const R1101=N.rule({title:'أفعال الروتين، والأزمنة الثلاثة',ref:'ص 48–49',
 intro:`في هذا الدرس تتكلم عن يومك المعتاد، وعما تفعله الآن، وعما فعلته أمس. نشرح أفعال الروتين، ثم كيف نكوّن الأزمنة الثلاثة ومتى نستعمل كلاً منها.`,
 parts:[
 {t:'أفعال الروتين',short:'get up · leave home',old:[1],q:'ما الفرق بين get to work و get home؟',ref:'ص 48',
  lead:`الروتين اليومي له أفعال تأتي مع كلمات معينة، فنحفظها معاً.`,
  points:[`${e('get up')} يستيقظ وينهض، و ${e('leave home')} يغادر البيت.`,`${e('get to work')} يصل إلى العمل، و ${e('get home')} يصل إلى البيت (بلا ${e('to')}).`,`${e('have breakfast / lunch / a break')}، و ${e('finish work')}، و ${e('go shopping / go out')}`],
  html:vt([['get up','يستيقظ وينهض'],['have breakfast / lunch / a break','يتناول الفطور / الغداء / يستريح'],['leave home','يغادر البيت'],['get to work / get home','يصل إلى العمل / البيت'],['call my clients','يتصل بعملائه'],['pick up a friend','يمرّ لأخذ صديق'],['go shopping / go out','يتسوق / يخرج'],['finish work','ينهي العمل'],['watch TV / play tennis','يشاهد التلفاز / يلعب التنس']],['English','المعنى']),
  pairs:[['I get to home at five.','I get home at five.','مع home بلا to.']],
  art:art(`${DAY.slice(0,8).map((d,i)=>`<g data-tip="${d[5]}: ${d[0]}${d[4]?' '+d[4]:''}"><rect x="${20+(i%2)*165}" y="${26+Math.floor(i/2)*60}" width="155" height="46" rx="12" fill="${i%3===0?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(97+(i%2)*165,54+Math.floor(i/2)*60,d[0]+(d[4]?' '+d[4]:''),{fs:12,w:700})}</g>`).join('')}`,'روتين'),cap:'يوم فيصل. مرّر المؤشر لترى الوقت.',labs:[{title:'الأفعال',w:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'I ___ up at six.',o:['get','have'],a:0},{s:'I ___ breakfast at home.',o:['have','make to'],a:0},{s:'I ___ home at seven.',o:['leave','go'],a:0},{s:'I ___ my friend on the way.',o:['pick up','go out'],a:0}]})}]},
 {t:'ثلاثة أزمنة: الروتين والآن والماضي',short:'leaves · is leaving · left',old:[2],q:"ما الفرق بين I play و I'm playing و I played؟",ref:'ص 48',
  lead:`لكل وقت زمن: ما نفعله كل يوم، وما يحدث الآن، وما حدث وانتهى. ونعرف الزمن غالباً من كلمة الوقت في الجملة.`,
  points:[`<b>المضارع البسيط</b> للروتين (${e('every day · every Monday')}): ${e('Every Monday, I leave home at seven.')} ومع ${e('he · she')} نضيف ${e('s')}: ${e('She leaves home at seven.')}`,
   `<b>المضارع المستمر</b> لما يحدث الآن (${e('Look! · now')}): ${e('am · is · are')} + الفعل + ${e('ing')}: ${e("Look! She's playing tennis.")}`,
   `<b>الماضي البسيط</b> لما حدث وانتهى (${e('yesterday · last Saturday')}): الفعل + ${e('ed')} أو الشاذ: ${e('Last Saturday, I got up at ten.')}`,
   `<b>نفي الماضي وسؤاله:</b> ${e("didn't")} و ${e('Did')} + الفعل الأصلي: ${e("He didn't take the bus.")} و ${e('Did you have lunch at one?')}`,
   `<b>إملاء ing:</b> نحذف ${e('e')} الأخيرة: ${e('have → having')}، ونضاعف الحرف الأخير في الفعل القصير: ${e('get → getting')}.`],
  grid:{head:['الزمن','نكوّنه بـ','مثال'],rows:[['المضارع البسيط (روتين)','الفعل، ومع he/she/it + s','Every Monday, I leave home at seven.'],['المضارع المستمر (الآن)','am / is / are + الفعل + ing',"Look! She's playing tennis."],['الماضي البسيط (انتهى)','الفعل + ed، أو الشاذ','Last Saturday, I got up at ten.'],['نفي الماضي',"didn't + الفعل الأصلي","He didn't take the bus."]]},
  html:vt([['get','got'],['have','had'],['drive','drove'],['make','made'],['eat','ate'],['go','went']],['الفعل','الماضي الشاذ']),
  pairs:[["I didn't went home.","I didn't go home.","بعد didn't الفعل الأصلي."],['Look! He plays tennis.',"Look! He's playing tennis.",'الآن: المضارع المستمر.'],['Yesterday, she leaves at seven.','Yesterday, she left at seven.','أمس: الماضي البسيط.']],
  art:art(`<g data-tip="روتين: المضارع البسيط"><rect x="20" y="50" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,81,'Every Monday, she leaves at seven.',{fs:14,w:700})}</g>
    <g data-tip="الآن: المضارع المستمر"><rect x="20" y="120" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,151,"Look! She's leaving now.",{fs:14,w:700})}</g>
    <g data-tip="في الماضي: الماضي البسيط"><rect x="20" y="190" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,221,'Last Saturday, she left at ten.',{fs:14,w:700})}</g>`,'tenses'),cap:'ثلاثة أزمنة. مرّر المؤشر على كل سطر.',labs:[LAB1101A,LAB1101B,{title:'الزمن',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Every day, she ___ at eight.',o:['starts','started'],a:0},{s:"Look! He ___ tennis.",o:["'s playing",'plays'],a:0},{s:'Last Saturday, I ___ a Japanese meal.',o:['made','make'],a:0},{s:'Yesterday, we ___ lunch at a pizza restaurant.',o:['had','have'],a:0}]})}]}
 ]});
B.lesson({
 id:'u10-l1',unit:10,order:1,pages:'48–49',
 title:'Part A: Routines and past events — الروتين والأحداث الماضية',
 summary:'أفعال الروتين اليومي (get up، have breakfast، leave home، pick up، go out، get home)، والمضارع البسيط للروتين (every Monday)، والمضارع المستمر لما يحدث الآن (She\'s playing tennis)، والماضي البسيط لما حدث (last Saturday: got up، had، drove)، وترتيب قصتين متداخلتين.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 48–49',html:`<p>تتحدث عن روتينك وعما فعلته. ستتعلم:</p><ol><li>أفعال الروتين.</li><li>الفرق بين ثلاثة أزمنة.</li><li>رواية يوم في الماضي.</li></ol>`},
  ...R1101.theory,
  {h:'تمارين الكتاب',ref:'ص 48–49',html:
   bk(1,'ص 48','أكمل تحت الصور بالأفعال.',['a have lunch · b leave home · c have breakfast · d call my clients · e watch TV','f go shopping · g pick up my friend · h have a break · i finish work · j get home','k go out · l get up · m have a meeting · n play tennis · o have lunch'],'من قراءتنا للصور؛ b و j: leave home / get home حسب الصورة.')+
   bk(2,'ص 48','اختر صورة وقل ماذا تفعل الشخصية، وزميلك يخمّن.',["A: She's playing tennis. B: Picture n. (مثال)"])+
   bk(3,'ص 48','استمع وافصل القصتين ورتّب الصور.',['Story A (every Monday): b → m → d → h → o → k → i → f → j','Story B (last Saturday): l → c → g → n → a → e'],'من قراءتنا للصور والتسجيل.')+
   bk(4,'ص 49','دوّن ما تفعله بانتظام وما فعلته في نهاية الأسبوع، ثم أخبر زميلك.',null)},
  {h:'الاستماع',ref:'ص 48',html:au('10A-3a','ص 48 — التمرين 3','قصتان: يوم اثنين في العمل، ويوم سبت.')}
 ],
 stations:[
  {intro:true},
  ...R1101.stations,
  {recap:['get up, have breakfast, leave home, get to work, get home.','every Monday ← المضارع البسيط (+ s مع he / she).',"now / Look! ← am / is / are + ing.",'last Saturday / yesterday ← الماضي البسيط.','got, had, drove, made, ate, went.']}
 ],
 lab:lab10a,
 examples:[
  {title:'مثال 1: روتين',ref:'ص 48',q:`<p>كل اثنين تغادر سارة البيت الساعة 7.</p>`,given:[],solve:()=>[{t:`الخطوة 1: روتين ← المضارع البسيط.`},{t:`الخطوة 2: مع she: ${e('leaves')}.`},{t:`الخطوة 3: ${e('Every Monday, Sara leaves home at seven.')}`,final:true}]},
  {title:'مثال 2: الآن',ref:'ص 48',q:`<p>انظر! أحمد يلعب التنس.</p>`,given:[],solve:()=>[{t:`الخطوة 1: يحدث الآن ← ${e('is + ing')}.`},{t:`الخطوة 2: ${e('playing')}.`},{t:`الخطوة 3: ${e("Look! Ahmed is playing tennis.")}`,final:true}]},
  {title:'مثال 3: الماضي',ref:'ص 48',q:`<p>السبت الماضي استيقظت الساعة 10 وتناولت الفطور.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('get up → got up')}.`},{t:`الخطوة 2: ${e('have → had')}.`},{t:`الخطوة 3: ${e('Last Saturday, I got up at ten and had breakfast.')}`,final:true}]}
 ],
 quiz:[
  {q:'Every Monday, she ___ home at seven.',o:['leaves','left','is leaving','leave'],c:0,e:'روتين + she.'},
  {q:"Look! She ___ tennis.",o:["'s playing",'plays','played','play'],c:0,e:'الآن.'},
  {q:'Last Saturday, I ___ up at ten.',o:['got','get','gets','getting'],c:0,e:'الماضي.'},
  {q:'have →',o:['had','haved','has','having'],c:0,e:'شاذ.'},
  {q:'I ___ my friend on the way to town.',o:['picked up','pick upped','picked','pick'],c:0,e:'picked up.'},
  {q:'drive →',o:['drove','drived','droved','driven'],c:0,e:'drove.'}
 ]
});

/* ========== 10B Comparing routines ========== */
const ADV=[[0,'never'],[10,'hardly ever'],[30,'sometimes'],[60,'often'],[85,'usually'],[100,'always']];
const CNT=[['UK',43.7,8.3,7.8],['France',39.6,10.4,14.1],['Germany',38.7,10.8,11.0],['Canada',39.2,7.9,1.2],['USA',42.8,7.4,0.5]];
function lab10b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">كم مرة؟</h3><p class="sub">مبني على التمرين 1 ص 50. حرّك المؤشر.</p>
  <div class="pk-sl"><label>النسبة <b id="p-v"></b></label><input type="range" id="p" min="0" max="100" step="5" value="60"></div>
  <div class="ph-row"><select class="ph-sel" id="ac"><option value="drive to college">drive to college</option><option value="be late">be late</option><option value="have lunch at work">have lunch at work</option><option value="be tired on Sundays">be tired on Sundays</option></select></div><div id="o"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">مقارنة البلدان</h3><p class="sub">أرقام الكتاب ص 51، ومنها الولايات المتحدة من التسجيل.</p>
  <select class="ph-sel" id="q"><option value="1">longest working hours</option><option value="2">longest years in one company</option><option value="3">saves most</option><option value="-3">saves least</option><option value="-1">shortest working hours</option></select><div id="co"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أين نضع <span class="en">always</span> مع <span class="en">be</span>؟</li><li>أي بلد يدّخر الناس فيه أقل؟</li><li>قل جملتين عن الفرق بينك وبين زميلك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const p=+$('#p').value;$('#p-v').textContent=p+'%';const a=ADV.reduce((b,x)=>Math.abs(x[0]-p)<Math.abs(b[0]-p)?x:b);const act=$('#ac').value;
  const s=act.startsWith('be ')?`I'm ${a[1]} ${act.slice(3)}.`:`I ${a[1]} ${act}.`;$('#o').innerHTML=eb(s)+`<p class="sub">${a[1]} ≈ ${a[0]}% · ${act.startsWith('be ')?'بعد be':'قبل الفعل الأساسي'}</p>`};
 ['p','ac'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const cs=()=>{const q=+$('#q').value,i=Math.abs(q),s=[...CNT].sort((x,y)=>q>0?y[i]-x[i]:x[i]-y[i]),L=['','working hours a week','years in one company','% of income saved'][i];
  $('#co').innerHTML=vt(s.map(c=>[c[0],String(c[i])]),['Country',L])+eb(`People in ${s[0][0]==='UK'||s[0][0]==='USA'?'the '+s[0][0]:s[0][0]} ${q===1?'work the longest hours':q===-1?'work the shortest hours':q===2?'stay at one company the longest':q===3?'save the most':'save the least'}.`)};
 $('#q').addEventListener('input',cs);cs();
}
const R1102=N.rule({title:'ظروف التكرار، و How often …?، والمقارنة',ref:'ص 50–51',
 intro:`في هذا الدرس تقارن روتينك بروتين غيرك: كم مرة تفعل الشيء؟ نشرح ظروف التكرار ومكانها في الجملة، ثم السؤال بـ ${e('How often')}، ثم قراءة جدول للمقارنة.`,
 parts:[
 {t:'ظروف التكرار',short:'always · never',old:[1],q:'أين نضع usually في الجملة؟',ref:'ص 50',
  lead:`ظرف التكرار يبين كم مرة نفعل الشيء، من «دائماً» إلى «أبداً».`,
  points:[`<b>من الأكثر إلى الأقل:</b> ${e('always · usually · often · sometimes · hardly ever · never')}`,`<b>قبل الفعل الأساسي:</b> ${e('I usually take the train.')}`,`<b>بعد be:</b> ${e("I'm never late.")}`,`مع ${e('never')} لا نستعمل ${e("don't")}: ${e('I never drive')}، لا ${e("I don't never drive")}.`,
   `<b>السؤال:</b> ${e('How often do you work late?')} والجواب ${e('I sometimes work late on Thursdays.')} أو باختصار ${e('Hardly ever.')}`],
  grid:{head:['المكان','مثال'],rows:[['قبل الفعل الأساسي','I usually take the train.'],['بعد be',"I'm never late."]]},
  html:vt(ADV.map(a=>[a[1],a[0]+'%']).reverse(),['English','النسبة تقريباً'])+dl([['A','How often do you work late?'],['B','I sometimes work late on Thursdays.'],['A','How often do you go out with your classmates?'],['B','Hardly ever. I always go home after college.']]),
  pairs:[['I take usually the train.','I usually take the train.','الظرف قبل الفعل الأساسي.'],['I usually am late.',"I'm usually late.",'مع be: الظرف بعده.'],["I don't never drive.",'I never drive.',"never لا تأتي مع don't."]],
  art:art(`<line x1="30" y1="150" x2="330" y2="150" stroke="${C.ink}" stroke-width="3"/>${ADV.map(a=>`<g data-tip="${a[1]} ≈ ${a[0]}%"><circle cx="${30+a[0]*3}" cy="150" r="9" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(30+a[0]*3,a[0]%20===0||a[0]===85?126:182,a[1],{fs:11,w:700})}${TL(30+a[0]*3,a[0]%20===0||a[0]===85?110:198,a[0]+'%',{fs:10})}</g>`).join('')}`,'adverbs'),cap:'مقياس التكرار. مرّر المؤشر على كل نقطة.',labs:[LAB1102A,LAB1102B,{title:'التكرار',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'I ___ drive to college. (100%)',o:['always','never'],a:0},{s:"I'm ___ late. (0%)",o:['never','always'],a:0},{s:'How ___ do you work late?',o:['often','many'],a:0},{s:'I ___ go out on Fridays. (50%)',o:['sometimes','hardly ever'],a:0}]})}]},
 {t:'قراءة جدول والمقارنة',short:'قراءة جدول',old:[2],q:'كيف تقارن بين روتينك وروتين زميلك؟',ref:'ص 50–51',
  lead:`عندما نقرأ جدولاً نقارن أرقامه، ونستعمل ما تعلمناه من المقارنة والتفضيل.`,
  points:[`نقارن بين شخصين بـ ${e('but')}: ${e('Sami always drives to work, but I never do.')}`,`ونختار الأعلى بالتفضيل: ${e('In the UK, people work the longest hours.')}`],
  html:eb(["Sami always drives to work, but I never do. I usually take the bus.","In the UK, people work the longest hours."]),
  art:art(`${CNT.slice(0,4).map((c,i)=>`<g data-tip="${c[0]}: ${c[1]} hours a week"><rect x="${40+i*75}" y="${240-(c[1]-30)*12}" width="55" height="${(c[1]-30)*12}" fill="${i===0?C.red:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(67+i*75,258,c[0],{fs:12,w:700})}${TL(67+i*75,232-(c[1]-30)*12,String(c[1]),{fs:12,w:700})}</g>`).join('')}`,'working hours'),cap:'ساعات العمل الأسبوعية من جدول الكتاب (المحور يبدأ من 30). مرّر المؤشر على كل عمود.',labs:[{title:'الجدول',w:(el,B)=>N.cases(el,B,{intro:'أي بلد؟',cases:[{q:'People work the shortest hours.',opts:[['Germany',1],['the UK',0]]},{q:'People save the most.',opts:[['France',1],['Canada',0]]}]})}]}
 ]});
B.lesson({
 id:'u10-l2',unit:10,order:2,pages:'50–51',
 title:'Part B: Comparing routines — مقارنة الروتين',
 summary:'ظروف التكرار (always، usually، often، sometimes، hardly ever، never) ومكانها في الجملة، والسؤال How often …?، والمقارنة بين روتينك وروتين زميلك، وقراءة جدول عن ساعات العمل وسنوات البقاء في الشركة والادخار في بلدان مختلفة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 50–51',html:`<p>تقارن عاداتك بعادات غيرك. ستتعلم:</p><ol><li>ظروف التكرار.</li><li>مكانها في الجملة.</li><li>${e('How often …?')}</li><li>قراءة جدول مقارنة.</li></ol>`},
  ...R1102.theory,
  {h:'تمارين الكتاب',ref:'ص 50–51',html:
   bk(1,'ص 50','ضع ظروف تكرار أخرى على المقياس.',['never (0%) · hardly ever · sometimes (50%) · often · usually · always (100%)'])+
   bk(2,'ص 50','أكمل الجدول عن نفسك ثم اسأل زميلين.',null)+
   bk(3,'ص 50','أخبر الصف بفرقين بينك وبين زميل.',["Sam always drives to work, but I never do. I usually take the train. (مثال)"])+
   bk(4,'ص 51','انظر إلى الجدول وأجب.',['1 the UK (43.7 hours)','2 Germany (38.7 hours)','3 France (10.4 years)','4 France (14.1%)','5 Canada (1.2%)'])+
   bk(5,'ص 51','خمّن أرقام الولايات المتحدة، ثم استمع وقارن.',['b: 42.8 hours a week · 7.4 years in one company · 0.5% of income saved'])},
  {h:'الاستماع',ref:'ص 51',html:au('10B-5b','ص 51 — التمرين 5b','أرقام الولايات المتحدة.')}
 ],
 stations:[
  {intro:true},
  ...R1102.stations,
  {recap:['always, usually, often, sometimes, hardly ever, never.','قبل الفعل الأساسي، وبعد be.','How often do you …?',"Sam always drives, but I never do.",'the longest / the shortest / the most / the least.']}
 ],
 lab:lab10b,
 examples:[
  {title:'مثال 1: مكان الظرف',ref:'ص 50',q:`<p>رتّب: usually / I / the bus / take</p>`,given:[],solve:()=>[{t:`الخطوة 1: الظرف قبل الفعل الأساسي.`},{t:`الخطوة 2: ${e('I usually take')}`},{t:`الخطوة 3: ${e('I usually take the bus.')}`,final:true}]},
  {title:'مثال 2: مع be',ref:'ص 50',q:`<p>رتّب: late / never / I'm</p>`,given:[],solve:()=>[{t:`الخطوة 1: مع ${e('be')} الظرف بعده.`},{t:`الخطوة 2: ${e("I'm never")}`},{t:`الخطوة 3: ${e("I'm never late.")}`,final:true}]},
  {title:'مثال 3: الفرق',ref:'ص 50',q:`<p>زميلك دائماً يتغدى في العمل، وأنت أبداً؛ تتغدى في البيت عادة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Omar always has lunch at work')}`},{t:`الخطوة 2: ${e("but I never do")}`},{t:`الخطوة 3: ${e("Omar always has lunch at work, but I never do. I usually have lunch at home.")}`,final:true}]}
 ],
 quiz:[
  {q:'100% =',o:['always','usually','often','sometimes'],c:0,e:'always.'},
  {q:'0% =',o:['never','hardly ever','sometimes','rarely often'],c:0,e:'never.'},
  {q:'I ___ take the train.',o:['usually','am usually','usual','usually am'],c:0,e:'قبل الفعل.'},
  {q:"I'm ___ late.",o:['never','don\'t never','not never','never am'],c:0,e:'بعد be.'},
  {q:'How ___ do you go to the gym?',o:['often','many','much','long ago'],c:0,e:'How often.'},
  {q:'Canada: 1.2% saved → people there save the ___.',o:['least','most','longest','best'],c:0,e:'ص 51.'}
 ]
});
})(PLCBOOK);

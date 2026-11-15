/* الوحدة 12 — Getting personal: Part A Talking about your career (ص 56–57) · Part B Talking about your experiences (ص 58–59)
   · Review 4 (ص 60–61) + Help files ص 107–108. الكتاب: Business Goals 1.
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 12A Talking about your career ========== */
/* حجارة الطريق: مسيرة شخصية من إعدادنا (David Ross) */
const STONES=[['1998','finished school','He finished school in 1998.'],['1999','went to university','He went to university in 1999.'],['2002','graduated from Leeds University','He graduated from Leeds University in 2002.'],['2003','started work at a bank','He started work at a bank in 2003.'],['2008','left the bank','He left the bank in 2008.'],['2009','did an MBA in London','He did an MBA in London in 2009.'],['2010','worked for Delta Electric','He worked for Delta Electric from 2010 to 2018.'],['2018','started his own company','He started his own company in 2018.']];
const SH=['school','university','graduated','bank','left bank','MBA','Delta','own company'];
function lab12a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">حجارة الطريق</h3><p class="sub">مسيرة شخص من إعدادنا (David Ross)، مبنية على التمرين 1 ص 56. اضغط حجراً لترى جملته، أو «الخطوة التالية».</p>
  <div id="sv"></div><div class="ph-row"><button type="button" class="btn pri" id="nx">الخطوة التالية</button><button type="button" class="btn" id="rs">من البداية</button></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">القصة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي حرف جر يأتي مع السنة؟ ومع الجامعة بعد <span class="en">graduated</span>؟</li><li>لماذا لا نقول <span class="en">left from the bank</span>؟</li><li>ارسم حجارة طريقك أنت وقل جملة لكل حجر.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=1;
 const sh=()=>{const pos=STONES.map((s,i)=>[30+(i%4)*85,i<4?60:170]);
  $('#sv').innerHTML=`<svg viewBox="0 0 370 240" style="width:100%">${pos.slice(0,-1).map((p,i)=>i<k-1?`<line x1="${p[0]+35}" y1="${p[1]}" x2="${pos[i+1][0]+35}" y2="${pos[i+1][1]}" stroke="${C.ink}" stroke-width="2"/>`:'').join('')}${STONES.map((s,i)=>{const [x,y]=pos[i],on=i<k;return `<g data-i="${i}" style="cursor:pointer"><ellipse cx="${x+35}" cy="${y}" rx="40" ry="28" fill="${on?C.yel:C.paper}" stroke="${C.ink}" stroke-width="${on?2.5:1}"/>${TL(x+35,y-6,s[0],{fs:12,w:700})}${TL(x+35,y+10,SH[i],{fs:10})}</g>`}).join('')}</svg>`;
  el.querySelectorAll('[data-i]').forEach(g=>g.onclick=()=>{k=+g.dataset.i+1;sh()});
  $('#o').innerHTML=eb(STONES.slice(0,k).map(s=>s[2]))};
 $('#nx').onclick=()=>{k=Math.min(STONES.length,k+1);sh()};$('#rs').onclick=()=>{k=1;sh()};sh();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 12 ===== */
const PR12={year:['in','2015','finished school','السنة'],study:['at','Leeds University','studied','مكان الدراسة'],gfrom:['from','Leeds University','graduated','الجامعة بعد graduated'],gin:['in','Marketing','graduated','التخصص بعد graduated'],wfor:['for','Delta Electric','worked','الشركة'],win:['in','London','worked','المدينة أو المكان'],go:['to','university','went','الاتجاه بعد go'],leave:['—','school','left','leave بلا حرف جر']};
const LAB1212A={title:'حروف الجر في المسيرة',w:(el,B)=>N.labB(el,B,{intro:'اختر نوع المعلومة، وشاهد حرف الجر الذي يأتي معها.',
 controls:[{k:'p',label:'المعلومة',opts:Object.keys(PR12).map(k=>[k,PR12[k][3]])}],
 out:({p})=>{const [pr,o,v,ar]=PR12[p];const ph=pr==='—'?`${v} ${o}`:`${v} ${pr} ${o}`;return{pieces:[['She','x',''],[v,'n','الفعل'],...(pr==='—'?[]:[[pr,'k','حرف الجر']]),[o+'.','q',ar]],say:`She ${ph}.`,why:pr==='—'?`${e('leave')} و ${e('start')} و ${e('finish')} بلا حرف جر.`:`${ar}: ${e(pr)}.`}}})};
const PS12={finish:['finish','finished','منتظم: ed'],study:['study','studied','y ← ied'],go:['go','went','شاذ'],leave:['leave','left','شاذ'],do:['do','did','شاذ'],work:['work','worked','منتظم: ed']};
const LAB1212B={title:'الماضي البسيط في القصة',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل والسنة، وشاهد جملة الماضي البسيط.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(PS12).map(k=>[k,k])},{k:'y',label:'السنة',opts:[['2010','2010'],['2016','2016']]}],
 out:({v,y})=>{const [b,p,r]=PS12[v],o={finish:'school',study:'Law',go:'to Canada',leave:'the company',do:'an MBA',work:'for a bank'}[v];return{pieces:[['I','x',''],[p,'k',r],[o,'n',''],['in '+y+'.','q','وقت محدد']],say:`I ${p} ${o} in ${y}.`,why:`حدث انتهى في وقت محدد: الماضي البسيط. ${e(b)} ← ${e(p)}.`}}})};
const R121=N.rule({title:'حروف الجر في الحديث عن الدراسة والعمل، والماضي البسيط في قصة المسيرة',ref:'ص 56، ص 107',
 intro:`حين تحكي مسيرتك تذكر السنوات والجامعات والشركات والمدن، ولكل منها حرف جر ثابت. والقصة نفسها بالماضي البسيط لأنها أحداث انتهت في أوقات محددة.`,
 parts:[
 {t:'حروف الجر في المسيرة',short:'in · at · from · for · to',old:[1],q:'لماذا نقول graduated from Hull لكن graduated in Marketing؟',ref:'ص 56، ص 107',
  lead:`حرف الجر يتبع نوع المعلومة لا الفعل وحده. احفظ كل فعل مع ما بعده.`,
  points:[`<b>in + سنة:</b> ${e('I left England in 2002.')}، و ${e('from 2002 to 2004')} للمدة.`,`<b>study at + مكان:</b> ${e('She studied at Leeds University.')}`,`<b>go to + university / college / school / بلد:</b> ${e('He went to the USA in 2002.')}`,`<b>graduate from + الجامعة:</b> ${e('graduated from Harvard')}، و <b>graduate in + التخصص:</b> ${e('graduated in Economics')}`,`<b>work for / at + شركة:</b> ${e('I work for Benetton. · I work at HSBC.')}`,`<b>work in + مكان:</b> ${e('She works in Dublin. · in a bank')}`,`<b>بلا حرف جر:</b> ${e('start / finish a course · leave school · leave Spain · study Law · do a degree')}`],
  grid:{head:['الفعل','حرف الجر','مثال'],rows:[['graduate','from (place)','graduated from Hull'],['graduate','in (subject)','graduated in Marketing'],['study','at (place)','studied at Hull'],['work','for (company)','worked for Rainbow'],['work','in (city)','worked in London'],['leave','—','left Iceland']]},
  pairs:[['She left from Iceland in 1988.','She left Iceland in 1988.','leave بلا حرف جر.'],['He graduated at Marketing.','He graduated in Marketing.','التخصص: in.'],['I studied in Hull University.','I studied at Hull University.','مكان الدراسة: at.']],
  art:art(`${[['in','2002 · London · Marketing'],['at','Hull University · HSBC'],['from','graduated from Hull'],['for','worked for Rainbow'],['to','went to Canada'],['—','left school · did an MBA']].map((x,i)=>`<g data-tip="${x[0]}"><rect x="20" y="${22+i*42}" width="320" height="34" rx="10" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="1.5"/>${TL(55,44+i*42,x[0],{fs:14,w:700})}${TL(215,44+i*42,x[1],{fs:12})}</g>`).join('')}`,'prepositions'),cap:'حروف الجر وأمثلتها. مرّر المؤشر على كل سطر.',labs:[LAB1212A]},
 {t:'قصة المسيرة بالماضي البسيط',short:'finished · went · left',old:[2],q:'لماذا نقول I left in 2000 لا I have left in 2000؟',ref:'ص 56',add:true,
  lead:`أحداث المسيرة انتهت، ومع كل حدث سنة محددة، فنستعمل الماضي البسيط. ونربط الأحداث بكلمات تبيّن الترتيب.`,
  points:[`<b>الفعل المنتظم:</b> + ${e('ed')}: ${e('worked · finished · graduated')}، والمنتهي بـ ${e('y')} بعد حرف ساكن: ${e('study → studied')}`,`<b>أفعال شاذة شائعة:</b> ${e('go → went · leave → left · do → did · come → came · have → had')}`,`<b>للترتيب:</b> ${e('then · after that · after graduating')}`,`ومع الحاضر (ما تفعله الآن): ${e("I'm running my own business. · I still run it.")}`],
  rows:[['go','went'],['leave','left'],['do','did'],['come back','came back'],['study','studied'],['graduate','graduated']],head:['الفعل','الماضي'],
  pairs:[['I go to Canada in 2005.','I went to Canada in 2005.','حدث في الماضي: went.'],['She studyed in Hull.','She studied in Hull.','y ← ied.']],labs:[LAB1212B]}
 ]});
B.lesson({
 id:'u12-l1',unit:12,order:1,pages:'56–57',
 title:'Part A: Talking about your career — الحديث عن مسيرتك',
 summary:'حكاية المسيرة الدراسية والمهنية بالماضي البسيط (finished، went، graduated، left، did an MBA)، وحروف الجر الثابتة (in 2002، at university، graduated from / in، work for / in، left بلا حرف جر)، وقراءة إعلانين لبرامج دراسة عن بُعد.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 56–57',html:`<p>تحكي قصة دراستك وعملك خطوة خطوة. ستتعلم:</p><ol><li>حروف الجر مع السنوات والجامعات والشركات والمدن.</li><li>ترتيب أحداث المسيرة بالماضي البسيط.</li><li>قراءة إعلان عن برنامج دراسة.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u12-l1'](el,B)},
  ...R121.theory,
  {h:'تمارين الكتاب',ref:'ص 56–57، ص 107',html:
   bk(1,'ص 56','استمع إلى Inga: صِل حجارة الطريق بالترتيب، ثم طابق السنوات بالخطوات.',['a: left Iceland → graduated from University of Hull → worked in London → left Rainbow Advertising Agency → did an MBA at Cranfield → went back to Iceland → running her own business','b: 1988 left Iceland · 1991 graduated from University of Hull · 2000 left Rainbow · 2002 went back to Iceland'])+
   bk(2,'ص 56','اكتب جملاً مشابهة عن نفسك بحروف الجر نفسها.',null,'إجابات حرة. نموذج: I finished school in 2022. · I study at the technical college. · I want to graduate in Electrical Engineering. · I work in Riyadh.')+
   bk(3,'ص 57','احكِ لزميلك أهم خطوات حياتك ومسيرتك، ثم احكِ للصف عن زميلك.',null)+
   bk(4,'ص 57','اقرأ الإعلانين وأكمل الجدول، ثم ناقش.',['1 Heriot-Watt · Westminster','2 MBA (Master of Business Administration) · Certified Diploma','3 Business Administration · Accounting and Finance','4 anywhere in the world (distance learning) · home study (distance learning)','5 no need for direct contact · six days of tuition, 12 revision evenings, a revision weekend and a telephone helpline at stated times','6 up to seven years · one year'])+
   bk('Language file 1','ص 107','أكمل الفراغات بحروف الجر حيث تلزم.',['1 — (left school)','2 in','3 —  (did a degree)','4 at','5 In','6 in','7 for','8 to','9 —  (study Economics)','10 at','11 from','12 in'])},
  {h:'الاستماع',ref:'ص 56',html:au('12A-1','ص 56 — التمرين 1','Inga تحكي مسيرتها.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u12-l1'](el,B),title:'شرح مرئي'}]},
  ...R121.stations,
  {recap:['in + سنة · from 2002 to 2004.','study at · go to · graduate from (مكان) / in (تخصص).','work for (شركة) · work in (مدينة).','leave / start / finish / study / do: بلا حرف جر.','القصة بالماضي البسيط: went · left · did · graduated.']}
 ],
 lab:lab12a,
 examples:[
  {title:'مثال 1: حرف الجر',ref:'ص 107',q:`<p>أكمل: ${e('He graduated ___ Leeds University ___ 2012.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: بعد ${e('graduated')} مع الجامعة: ${e('from')}.`},{t:`الخطوة 2: مع السنة: ${e('in')}.`},{t:`الخطوة 3: ${e('He graduated from Leeds University in 2012.')}`,final:true}]},
  {title:'مثال 2: بلا حرف جر',ref:'ص 107',q:`<p>صحّح: ${e('I left from school in 2019.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('leave')} بلا حرف جر.`},{t:`الخطوة 2: نحذف ${e('from')}.`},{t:`الخطوة 3: ${e('I left school in 2019.')}`,final:true}]},
  {title:'مثال 3: خطوتان في القصة',ref:'ص 56',q:`<p>اكتب: عملت في بنك ثم ذهبت إلى الجامعة سنة 2015.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('I worked in a bank.')}`},{t:`الخطوة 2: ${e('go')} ← ${e('went')}، ومعها ${e('to')} و ${e('in')}.`},{t:`الخطوة 3: ${e('I worked in a bank. Then I went to university in 2015.')}`,final:true}]}
 ],
 quiz:[
  {q:'She graduated ___ Marketing.',o:['in','from','at','for'],c:0,e:'التخصص: in.'},
  {q:'He graduated ___ Harvard.',o:['from','in','at','to'],c:0,e:'الجامعة: from.'},
  {q:'I work ___ HSBC.',o:['at','in','to','from'],c:0,e:'work at / for + شركة.'},
  {q:'She left ___ Spain in 2001.',o:['— (no word)','from','to','at'],c:0,e:'leave بلا حرف جر.'},
  {q:'I studied ___ Leeds University.',o:['at','to','from','for'],c:0,e:'study at.'},
  {q:'Past of "leave":',o:['left','leaved','leaft','leave'],c:0,e:'شاذ.'}
 ]
});

/* ========== 12B Talking about your experiences ========== */
const EXP=[['live abroad','lived abroad','lived in Canada','2015'],['work for a big company','worked for a big company','worked for a car company','2019'],['be to Japan','been to Japan','went to Tokyo','2021'],['run a marathon','run a marathon','ran in the Dubai Marathon','2023'],['study online','studied online','did an online course','2020']];
function lab12b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">المقابلة</h3><p class="sub">مبني على التمرين 1 ص 58. اختر التجربة، ثم جواب الشخص.</p>
  <label class="sub">التجربة</label><div class="ph-row" id="xs">${EXP.map((x,i)=>`<button type="button" class="btn" data-x="${i}">${x[0]}</button>`).join('')}</div>
  <div class="ph-row"><button type="button" class="btn" data-a="y">نعم، فعلها</button><button type="button" class="btn" data-a="n">لا، لم يفعلها</button></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الحوار</h3><div id="o"></div><div id="t"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>متى انتقل السؤال من <span class="en">Have you ever …?</span> إلى <span class="en">When did you …?</span></li><li>لماذا لا نقول <span class="en">When have you gone?</span></li><li>اختر «لا»: أين جاءت <span class="en">never</span>؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let x=0,a='y';
 const sh=()=>{el.querySelectorAll('[data-x]').forEach(b=>b.classList.toggle('pri',+b.dataset.x===x));el.querySelectorAll('[data-a]').forEach(b=>b.classList.toggle('pri',b.dataset.a===a));
  const [b,pp,ps,y]=EXP[x];const q=`Have you ever ${pp}?`;
  $('#o').innerHTML=dl(a==='y'?[['A',q],['B','Yes, I have.'],['A',`When did you do that?`],['B',`I ${ps} in ${y}.`]]:[['A',q],['B',"No, I haven't."],['A','Would you like to?'],['B',`Yes. I've never ${pp}, but I'd like to.`]]);
  $('#t').innerHTML=`<p class="sub">${a==='y'?`السؤال الأول بالمضارع التام (تجربة بلا وقت)، ثم الماضي البسيط حين نذكر الوقت (${e(y)}).`:`${e("I've never")} = ${e("I haven't ever")}.`}</p>`};
 el.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{x=+b.dataset.x;sh()});el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{a=b.dataset.a;sh()});sh();
}
const LAB1222A={title:'المضارع التام أم الماضي البسيط؟',w:(el,B)=>N.labB(el,B,{intro:'اختر: هل تذكر وقتاً محدداً أم لا؟',
 controls:[{k:'t',label:'الوقت',opts:[['none','لا وقت (تجربة)'],['2019','in 2019'],['ago','two years ago']]},{k:'v',label:'التجربة',opts:[['live','live in England'],['work','work in a factory']]}],
 out:({t,v})=>{const o=v==='live'?['lived','in England']:['worked','in a factory'];if(t==='none')return{pieces:[["I've",'k','have + التصريف الثالث'],[o[0],'n',''],[o[1]+'.','x','']],say:`I've ${o[0]} ${o[1]}.`,why:'تجربة في وقت ما، والوقت غير مهم: المضارع التام.'};
  const w=t==='2019'?'in 2019':'two years ago';return{pieces:[['I','x',''],[o[0],'k','الماضي البسيط'],[o[1],'n',''],[w+'.','q','وقت محدد']],say:`I ${o[0]} ${o[1]} ${w}.`,why:`مع وقت محدد (${e(w)}) نستعمل الماضي البسيط، لا ${e('have')}.`}}})};
const LAB1222B={title:'been أم gone؟',w:(el,B)=>N.labB(el,B,{intro:'اختر: أين الشخص الآن؟',
 controls:[{k:'w',label:'الآن',opts:[['there','ما زال هناك'],['back','ذهب ورجع']]},{k:'p',label:'المكان',opts:[['Brazil','Brazil'],['a meeting','a meeting']]}],
 out:({w,p})=>w==='there'?{pieces:[["Tara's",'x','Tara has'],['gone','k','ذهب وما زال هناك'],['to '+p+'.','n','']],say:`Tara's gone to ${p}.`,why:`${e('gone')}: هي هناك الآن.`}:{pieces:[["Tara's",'x','Tara has'],['been','k','ذهب ورجع'],['to '+p+'.','n','']],say:`Tara's been to ${p}.`,why:`${e('been')}: ذهبت في الماضي، وليست هناك الآن.`}})};
const R122=N.rule({title:'المضارع التام للتجارب، والماضي البسيط للوقت المحدد، و ever / never و been / gone',ref:'ص 58، ص 107–108',
 intro:`نسأل عن تجارب الشخص بالمضارع التام لأن الوقت غير مهم، فإذا أراد أن يعرف «متى» انتقل إلى الماضي البسيط.`,
 parts:[
 {t:'المضارع التام للتجارب',short:'Have you ever …?',old:[1],q:'ما الفرق بين I\'ve lived in England و I lived in England in 2001؟',ref:'ص 58، ص 107',
  lead:`المضارع التام = ${e('have / has')} + التصريف الثالث. نستعمله لتجربة حدثت في وقت ما دون أن نذكر متى. فإذا ذكرنا الوقت بالضبط استعملنا الماضي البسيط.`,
  points:[`<b>تجربة بلا وقت:</b> ${e("I've lived abroad. · Anita's worked in the UK.")}`,`<b>وقت محدد:</b> ${e('I lived abroad from 1998 to 2002. · I went there in 2002.')}`,`<b>السؤال:</b> ${e('Have you ever been to the US? — Yes, I have. / No, I haven\'t.')}`,`<b>ثم نسأل عن التفاصيل بالماضي البسيط:</b> ${e('When did you go there? · Did you work there?')}`,`<b>النفي:</b> ${e("I haven't worked in a factory.")}`],
  grid:{head:['','المضارع التام','الماضي البسيط'],rows:[['متى؟','وقت غير محدد','وقت محدد'],['سؤال','Have you ever lived abroad?','When did you live there?'],['جملة',"I've been to the US.",'I went there in 2002.']]},
  pairs:[['I have lived in England in 2001.','I lived in England in 2001.','مع سنة محددة: الماضي البسيط.'],['When have you gone there?','When did you go there?','When يحتاج الماضي البسيط.'],['Did you ever work in a factory?','Have you ever worked in a factory?','التجربة: المضارع التام.']],
  art:art(`<line x1="20" y1="150" x2="340" y2="150" stroke="${C.ink}" stroke-width="3"/>${TL(330,180,'now',{fs:13,w:700})}<g data-tip="المضارع التام: وقت غير محدد"><text x="70" y="140" font-size="30">?</text><text x="140" y="140" font-size="30">?</text><text x="210" y="140" font-size="30">?</text>${TL(160,90,"I've lived abroad.",{fs:13,w:700})}</g><g data-tip="الماضي البسيط: وقت محدد"><circle cx="110" cy="150" r="8" fill="${C.red}"/>${TL(110,200,'2001',{fs:13,w:700})}${TL(110,225,'I lived there in 2001.',{fs:12})}</g>`,'experience'),cap:'التجربة بلا وقت، ثم الوقت المحدد. مرّر المؤشر.',labs:[LAB1222A]},
 {t:'ever و never، و been و gone',short:'ever · never · been · gone',old:[2],q:'ما الفرق بين He\'s gone to Brazil و He\'s been to Brazil؟',ref:'ص 107–108',
  lead:`${e('ever')} = في أي وقت، ونستعملها في السؤال والنفي. و ${e('never')} = أبداً، ومعها الفعل مثبت. أما ${e('been')} و ${e('gone')} فكلاهما من ${e('go')} لكن بمعنيين مختلفين.`,
  points:[`${e('Have you ever worked in Africa?')} (السؤال)`,`${e("I've never worked in a city.")} = ${e("I haven't ever worked in a city.")}`,`لا نقول ${e("I've ever …")} في جملة مثبتة، ولا نجمع ${e("haven't")} مع ${e('never')}.`,`<b>ظروف التكرار</b> بين ${e('have')} والفعل: ${e('Tim has often stayed in a hotel.')}`,`${e('gone')} = ذهب وما زال هناك: ${e('Paul has gone to university.')}`,`${e('been')} = ذهب ورجع: ${e('Tara has been to Brazil.')} (ليست هناك الآن)`],
  pairs:[["I've ever travelled outside Europe.","I've never travelled outside Europe.",'ever لا تأتي في جملة مثبتة.'],["Anna hasn't never been to Russia.",'Anna has never been to Russia.','لا نفي مرتين.'],["Sorry, he's been to a meeting. (وهو ما زال فيه)","Sorry, he's gone to a meeting.",'ما زال هناك: gone.']],labs:[LAB1222B]}
 ]});
B.lesson({
 id:'u12-l2',unit:12,order:2,pages:'58–59',
 title:'Part B: Talking about your experiences — الحديث عن تجاربك',
 summary:'المضارع التام للتجارب (Have you ever …? Yes, I have. I\'ve never …)، والانتقال إلى الماضي البسيط حين نذكر الوقت (When did you …?)، و ever / never، و been / gone، والحديث عن التجارب الشخصية مع answer plus.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 58–59',html:`<p>تسأل زملاءك عن تجاربهم وتحكي تجاربك. ستتعلم:</p><ol><li>${e('Have you ever …?')} والجواب القصير.</li><li>متى نستعمل المضارع التام ومتى الماضي البسيط.</li><li>${e('ever · never · been · gone')}.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u12-l2'](el,B)},
  ...R122.theory,
  {h:'تمارين الكتاب',ref:'ص 58–59، ص 107–108',html:
   bk(1,'ص 58','استمع إلى مقابلة Philippe: ما الذي فعله وما الذي لم يفعله؟ ثم أكمل الأسئلة والأجوبة، واختر القاعدة الصحيحة.',['a: 1 ✘ · 2 ✔ · 3 ✘ · 4 ✔ · 5 ✔ · 6 ✘ · 7 ✔ · 8 ✔',"b1 Have you ever run your own business?","b2 No, I haven't, but I've helped my father with his business.",'b3 And have you worked for an American company?',"b4 Yes, I have, in my country, but I haven't worked in the US.",'c: 1 some time · 2 an exact time · 3 at any time'])+
   bk(2,'ص 58','اسأل زميلك عن حياته وعمله ودراسته، ثم أخبر الصف عن تجاربه.',null)+
   bk(3,'ص 59','استمع إلى أربعة أشخاص: طابق كل شخص بموضوعه، ثم أكمل الجمل.',['a: 1 Tanya b (changing jobs) · 2 Ian d (playing golf) · 3 Alain c (working abroad) · 4 Naomi a (scuba diving)','b1 ABC Software and AT&T','b2 a better salary (the salary was much better)','b3 lessons','b4 once','b5 three','b6 four','b7 all her','b8 her husband'])+
   bk(4,'ص 59','ما هذه الأنشطة في الصور؟ هل جربت أياً منها؟ تحدثوا عنها مع answer plus.',null,'الصور: تسلق الصخور، ركوب الدراجة الجبلية، الغولف، عرض تقديمي، التخييم.')+
   bk('Language file 2a','ص 108','ضع علامة على الجملة الصحيحة.',['1 Anna has never been to Russia.','2 Pete worked abroad in 2001.',"3 I've been to university. I graduated in 1995.","4 Sorry, Ricardo's not here. He's gone to a meeting.","5 I've never travelled outside Europe, but I'd like to do it one day."])+
   bk('Language file 2b','ص 108','اختر العبارة المناسبة في الحوارات.',['1 Have you ever worked · Yes, I have · did you do that · It was · Where did you work · I worked',"2 Have you ever been · No, I haven't · But I've been · did you go · I went","3 Have you ever travelled · No, I haven't · I've been (in one) · did you do that · I went · when I was"])},
  {h:'الاستماع',ref:'ص 58–59',html:au('12B-1','ص 58 — التمرين 1','مقابلة عمل مع Philippe.')+au('12B-3','ص 59 — التمرين 3','أربعة أشخاص يتحدثون عن تجاربهم.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u12-l2'](el,B),title:'شرح مرئي'}]},
  ...R122.stations,
  {recap:["Have you ever …? — Yes, I have. / No, I haven't.","تجربة بلا وقت: I've lived abroad.",'وقت محدد: I lived there in 2001. · When did you …?',"never مع فعل مثبت: I've never …","gone = ما زال هناك · been = ذهب ورجع."]}
 ],
 lab:lab12b,
 examples:[
  {title:'مثال 1: سؤال التجربة',ref:'ص 58',q:`<p>اسأل زميلك: هل عمل في مصنع من قبل؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: تجربة بلا وقت: ${e('Have you ever')}`},{t:`الخطوة 2: التصريف الثالث: ${e('worked')}`},{t:`الخطوة 3: ${e('Have you ever worked in a factory?')}`,final:true}]},
  {title:'مثال 2: الوقت المحدد',ref:'ص 58',q:`<p>أجاب: نعم. اسأله متى.</p>`,given:[],solve:()=>[{t:'الخطوة 1: نسأل عن وقت محدد: الماضي البسيط.'},{t:`الخطوة 2: ${e('When did you')} + الفعل كما هو.`},{t:`الخطوة 3: ${e('When did you work there?')}`,final:true}]},
  {title:'مثال 3: been أم gone؟',ref:'ص 108',q:`<p>مديرك في اجتماع الآن. قل للزائر.</p>`,given:[],solve:()=>[{t:'الخطوة 1: هو هناك الآن.'},{t:`الخطوة 2: ${e('gone')}.`},{t:`الخطوة 3: ${e("Sorry, he's gone to a meeting.")}`,final:true}]}
 ],
 quiz:[
  {q:'___ you ever been to the US?',o:['Have','Did','Do','Are'],c:0,e:'المضارع التام.'},
  {q:'When ___ you go there?',o:['did','have','do','has'],c:0,e:'سؤال عن وقت محدد.'},
  {q:'I ___ in England in 2001.',o:['lived','have lived','live','has lived'],c:0,e:'سنة محددة.'},
  {q:"I've ___ worked in a factory.",o:['never','ever','not','no'],c:0,e:'never مع المثبت.'},
  {q:"He isn't here. He's ___ to the bank.",o:['gone','been','go','went'],c:0,e:'ما زال هناك.'},
  {q:"Have you ever worked abroad? — Yes, I ___.",o:['have','did','am','do'],c:0,e:'Yes, I have.'}
 ]
});

/* ========== Review 4 ========== */
const AL=[['always','100%'],['all the time','دائماً'],['usually','غالباً'],['often','كثيراً'],['sometimes','أحياناً'],['rarely','نادراً'],['never','أبداً'],['not at all','0%']];
B.lesson({
 id:'u12-l3',unit:12,order:3,pages:'60–61',
 title:'Review 4 — مراجعة الوحدات 10–12',
 summary:'مراجعة أفعال الروتين (leave home، get home، pick up، have lunch، finish work)، وظروف التكرار، وأسئلة الحديث الاجتماعي، والمضارع التام والماضي البسيط والمضارع المستمر، وحجارة الطريق ليوم لا يُنسى، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 60–61',html:`<p>هذه المراجعة تغطي الوحدات 10 و 11 و 12. الوحدة 10 (الروتين) درستها في انجل-111، وهنا تذكير قصير بها.</p>`+vt([['أفعال الروتين','leave home · get home · have lunch · finish work','الوحدة 10'],['ظروف التكرار','always · usually · often · sometimes · never','الوحدة 10'],['أسئلة الحديث',"Is this your first day? · How long have you worked for this company?",'الوحدة 11'],['المسيرة والتجارب',"I graduated in 2015. · I've worked here for three years.",'الوحدة 12']],['الموضوع','أمثلة','من']),ref:''},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u12-l3'](el,B)},
  {h:'ظروف التكرار من 100% إلى 0%',ref:'ص 61',html:vt(AL.map(x=>[x[0],x[1]]),['English','المعنى'])+`<p>تأتي قبل الفعل الأساسي، وبعد ${e('be')}: ${e("I usually take a break at 11. · He's always late.")}</p>`},
  {h:'تمارين المراجعة',ref:'ص 60–61',html:
   bk('Vocabulary 1','ص 60','أكمل الكلمات المتقاطعة بالأفعال المناسبة.',['Across: 2 leave · 4 get · 6 pick up · 8 watch','Down: 1 have · 3 finish · 5 take · 7 play · 9 call'],'من قراءتنا لشبكة الكلمات المتقاطعة.')+
   bk('Language 1','ص 60','طابق كلمات من A و B و C لتكوّن أسئلة.',["1 What's Pavel doing at the moment?",'2 What time do you usually have lunch?','3 Did you have a good weekend?','4 Is this your first day?','5 How long have you worked for this company?','6 Have you ever been to the USA?','7 Have you ever worked abroad?'])+
   bk('Communication 1','ص 60','اسأل زملاءك وأجب مع answer plus.',null)+
   bk('Vocabulary 2','ص 61','أكمل كلمات التكرار.',['1 always','2 all the time','3 usually','4 often','5 sometimes','6 rarely','7 never','8 not at all'])+
   bk('Language 2','ص 61','أكمل بصيغة الفعل المناسبة.',['1 graduated',"2 've worked (have worked)","3 haven't given",'4 take',"5 didn't go","6 'm having (am having)"])+
   bk('Communication 2','ص 61','ارسم حجارة الطريق ليوم لا يُنسى، واسأل زميلك عن حجارته.',null)}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u12-l3'](el,B),title:'شرح مرئي'}]},
  {st:1,short:'الوحدات 10–11',title:'خلاصة: الروتين والحديث الاجتماعي',q:'أكمل: What time do you usually ___ lunch?',ref:'ص 60',
   art:art(`${AL.map((x,i)=>`<g data-tip="${x[1]}"><rect x="${20+(i%2)*165}" y="${30+Math.floor(i/2)*50}" width="155" height="40" rx="10" fill="${i<4?C.yel:C.paper}" stroke="${C.ink}" stroke-width="1.5"/>${TL(97+(i%2)*165,55+Math.floor(i/2)*50,x[0],{fs:13,w:700})}</g>`).join('')}`,'frequency'),
   cap:'ظروف التكرار من الأكثر إلى الأقل. مرّر المؤشر على كل منها.',side:[{tip:`ظرف التكرار قبل الفعل: ${e('I usually leave home at 7.')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'I ___ home at 7.00 in the morning.',o:['leave','get'],a:0},{s:'What time do you ___ home from work?',o:['get','leave'],a:0},{s:'It\'s a good idea to ___ a break.',o:['take','do'],a:0},{s:'We usually ___ TV in the evening.',o:['watch','look'],a:0}]}),title:'مختبر مصغّر: أفعال الروتين'}]},
  {st:2,short:'الوحدة 12',title:'خلاصة: الأزمنة الثلاثة',q:'أي زمن في: I ___ (not go) fishing last weekend؟',ref:'ص 61',
   side:[{tip:`وقت محدد في الماضي: الماضي البسيط. مدة حتى الآن: المضارع التام. الآن: المضارع المستمر.`}],
   body:[{html:vt([['graduated in 2015','الماضي البسيط: وقت محدد'],["I've worked here for ten years.",'المضارع التام: مستمر حتى الآن'],["I haven't given this talk before.",'المضارع التام: تجربة'],["I'm having lunch at the moment.",'المضارع المستمر: الآن'],['I always take a break at 11.','المضارع البسيط: عادة']],['جملة','الزمن'])},{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الصيغة:',items:[{s:'I ___ in Chemistry in 2012.',o:['graduated','have graduated'],a:0},{s:'I ___ here for six years.',o:["'ve worked",'work'],a:0},{s:"Can I call you back? I ___ lunch at the moment.",o:["'m having",'have'],a:0},{s:'I ___ fishing last weekend.',o:["didn't go","haven't gone"],a:0}]}),title:'مختبر مصغّر: الأزمنة'}]},
  {recap:['leave home · get home · pick up · have lunch · take a break · finish work.','always · usually · often · sometimes · rarely · never.',"Is this your first day? · How long have you worked for …?",'graduated in … · have worked for … · am having …']}
 ],
 examples:[
  {title:'مثال 1: ظرف التكرار',ref:'ص 61',q:`<p>رتّب: ${e('usually / I / at 6 / finish work')}</p>`,given:[],solve:()=>[{t:'الخطوة 1: الفاعل أولاً.'},{t:'الخطوة 2: ظرف التكرار قبل الفعل.'},{t:`الخطوة 3: ${e('I usually finish work at 6.')}`,final:true}]},
  {title:'مثال 2: سؤال من A و B و C',ref:'ص 60',q:`<p>كوّن سؤالاً من: ${e('How long · have you worked for · this company?')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('How long')}`},{t:`الخطوة 2: + ${e('have you worked for')}`},{t:`الخطوة 3: ${e('How long have you worked for this company?')}`,final:true}]},
  {title:'مثال 3: الزمن المناسب',ref:'ص 61',q:`<p>أكمل: ${e("I ___ (not give) this presentation before.")}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('before')} بلا وقت محدد: تجربة.`},{t:'الخطوة 2: المضارع التام المنفي.'},{t:`الخطوة 3: ${e("I haven't given this presentation before.")}`,final:true}]}
 ],
 quiz:[
  {q:'I ___ home at 7.00 in the morning.',o:['leave','get','take','finish'],c:0,e:'leave home.'},
  {q:'I try to ___ my clients every week.',o:['call','watch','leave','play'],c:0,e:'call.'},
  {q:'0% =',o:['never','often','usually','sometimes'],c:0,e:'never.'},
  {q:'I ___ here for thirteen years.',o:["'ve worked",'work','worked','am working'],c:0,e:'مدة حتى الآن.'},
  {q:"Can I call you back? I ___ lunch at the moment.",o:["'m having",'have','had',"'ve had"],c:0,e:'الآن.'},
  {q:'___ you ever been to the USA?',o:['Have','Did','Do','Is'],c:0,e:'Have you ever.'}
 ]
});
})(PLCBOOK);

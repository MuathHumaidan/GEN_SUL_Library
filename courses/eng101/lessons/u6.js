/* الوحدة 6 — Materials: 6.1 Materials testing (ص 42–43) · 6.2 Properties (ص 44–45) · 6.3 Buying (ص 46–47) · Review C (ص 48–51)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const cap=s=>s[0].toUpperCase()+s.slice(1);
const ING=v=>({strike:'striking',drop:'dropping',cut:'cutting',stretch:'stretching',heat:'heating',bend:'bending',pull:'pulling',scratch:'scratching',compress:'compressing'})[v]||v+'ing';

/* ========== 6.1 Materials testing ========== */
const MAT={rope:{n:'the nylon rope',it:'it',res:{pull:['stretch',1],heat:['melt',1],cut:['break',1],strike:['break',0]}},helmet:{n:'the polycarbonate helmet',it:'it',res:{strike:['break',0],drop:['break',0],heat:['melt',0],scratch:['scratch',1]}},glass:{n:'the glass plate',it:'it',res:{strike:['break',1],drop:['break',1],heat:['melt',0],bend:['bend',0]}},plate:{n:'the steel plate',it:'it',res:{strike:['bend',0],bend:['bend',1],heat:['melt',0],cut:['break',0]}},band:{n:'the rubber band',it:'it',res:{pull:['stretch',1],bend:['bend',1],heat:['melt',1],drop:['break',0]}}};
function lab61(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">آلة اختبار المواد</h3><p class="sub">مبني على التمارين 2–5 ص 42–43. اختر المادة والاختبار، وصِف ما يحدث الآن بالمضارع المستمر.</p>
  <div class="ph-row"><select class="ph-sel" id="m">${Object.keys(MAT).map(k=>`<option value="${k}">${MAT[k].n}</option>`).join('')}</select><select class="ph-sel" id="t"></select></div><div id="sv" style="max-width:300px;margin:8px auto"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">تغيّر الإملاء مع ing</h3><p class="sub">من الملاحظة الجانبية ص 43.</p>${vt([['strike','striking','نحذف e'],['drop','dropping','نضاعف الحرف الأخير'],['cut','cutting','نضاعف الحرف الأخير'],['pull','pulling','نضيف ing فقط']],['الفعل','+ ing','القاعدة'])}</div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اسحب الحبل: هل ينقطع؟ ماذا يحدث له؟</li><li>اضرب اللوح الزجاجي ثم الخوذة: قارن.</li><li>لماذا نقول <span class="en">I'm striking</span> لا <span class="en">I strike</span> هنا؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const fill=()=>{const m=MAT[$('#m').value];$('#t').innerHTML=Object.keys(m.res).map(t=>`<option>${t}</option>`).join('')};
 const sh=()=>{const m=MAT[$('#m').value],t=$('#t').value,[v,y]=m.res[t];const obj=m.n;
  const shape=y?`<path d="M90 70 L150 90 L130 100 L200 120" stroke="${C.red}" stroke-width="4" fill="none"/>`:'';
  $('#sv').innerHTML=`<svg viewBox="0 0 300 160" style="width:100%"><rect width="300" height="160" rx="12" fill="${C.paper}"/><rect x="60" y="50" width="180" height="70" rx="10" fill="${y?C.yel:C.mut}" stroke="${C.ink}" stroke-width="2"/>${shape}${TL(150,145,t.toUpperCase(),{fs:13,w:700})}</svg>`;
  $('#o').innerHTML=eb([`I'm ${ING(t)} ${obj}.`,`Is it ${ING(v)}?`,y?`Yes, it is. It's ${ING(v)}.`:`No, it isn't. It isn't ${ING(v)}.`])};
 $('#m').addEventListener('input',()=>{fill();sh()});$('#t').addEventListener('input',sh);fill();sh();
}
B.lesson({
 id:'u6-l1',unit:6,order:1,pages:'42–43',
 title:'Materials testing — اختبار المواد',
 summary:'اختبار المواد (strike، stretch، bend، compress، drop، cut، heat، scratch)، والمضارع المستمر (am/is/are + ing) لوصف ما يحدث الآن في الإثبات والنفي والسؤال، وتغيّر الإملاء مع ing (striking، dropping، cutting)، ووصف صورة لأشخاص يتحركون.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 42–43',html:`<p>تصف تجربة تحدث أمامك الآن. ستتعلم:</p><ol><li>أفعال اختبار المواد.</li><li>المضارع المستمر: ${e("I'm pulling the rope.")}</li><li>تغيّر الإملاء مع ${e('ing')}.</li></ol>`},
  {h:'أفعال اختبار المواد',ref:'ص 42',html:vt([['strike','يضرب'],['stretch','يمطّ (يشدّ فيطول)'],['bend','يثني'],['compress','يضغط'],['drop','يُسقط'],['cut','يقطع'],['heat','يسخّن'],['scratch','يخدش'],['break','ينكسر / ينقطع'],['melt','يذوب']],['English','المعنى'])},
  {h:'المضارع المستمر',ref:'ص 42',html:`${vt([["I'm (am) pulling the rope.",'إثبات'],["The rope isn't (is not) breaking.",'نفي'],['What are you doing?','سؤال بـ What'],['Is the rope breaking?','سؤال بـ Is'],["Yes, it is. / No, it isn't.",'جواب قصير']],['English','القاعدة'])}<p>نستعمله لما يحدث <b>الآن</b> ونحن نتكلم: ${e('am / is / are')} + الفعل + ${e('ing')}.</p>`},
  {note:'<b>توضيح للمتدرب:</b> قارن: <span class="en">The machine tests materials.</span> (عادة وعمل دائم) و <span class="en">The machine is testing the rope now.</span> (الآن).'},
  {h:'تغيّر الإملاء',ref:'ص 43',html:vt([['strike','striking','نحذف e الأخيرة'],['drop','dropping','نضاعف الحرف الأخير'],['cut','cutting','نضاعف الحرف الأخير'],['stretch','stretching','نضيف ing']],['الفعل','+ ing','القاعدة'])},
  {h:'تمارين الكتاب',ref:'ص 42–43',html:
   bk(1,'ص 42','مع زميلك: من أي مادة الخوذة والحبل؟ صمّم اختبارات لهما.',null)+
   bk(2,'ص 42','استمع وأجب.',['1 nylon','2 He\'s pulling (stretching) the rope. (اختبار قوة الشد)','3 No, it isn\'t.'])+
   bk(3,'ص 42','استمع مرة أخرى وأكمل الحوار.',['(1) pulling','(2) stretching','(3) breaking','(4) isn\'t','(5) isn\'t breaking'])+
   bk(4,'ص 42','طابق الأفعال بالصور.',['1 scratch','2 compress','3 stretch','4 bend','5 strike','6 drop','7 cut','8 heat'],'من قراءتنا للصور.')+
   bk(5,'ص 43','أكمل وصف المحاضر.',["(1) 'm heating (مثال)","(2) isn't melting","(3) 'm putting","(4) 's dropping","(5) 's striking","(6) isn't bending","(7) are compressing","(8) isn't breaking","(9) 's hanging","(10) aren't stretching"])+
   bk(6,'ص 43','ماذا يفعل الناس في النادي الرياضي؟ صِف الصورة.',null,'حسب صورة الكتاب.')+
   bk(7,'ص 43','اسأل وأجب عن الصورة.',null)+
   bk(8,'ص 43','مع زميلك: خمّن الرياضة من التمثيل.',null)},
  {h:'الاستماع',ref:'ص 42',html:au(32,'ص 42 — التمرينان 2 و 3','محاضر يختبر حبل تسلق.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'أفعال الاختبار',title:'كيف نختبر مادة؟',q:'ما الفرق بين stretch و compress؟',ref:'ص 42',
   art:art(`${[['strike','يضرب'],['stretch','يمطّ'],['compress','يضغط'],['bend','يثني'],['drop','يُسقط'],['heat','يسخّن']].map((x,i)=>`<g data-tip="${x[0]} — ${x[1]}"><rect x="${40+(i%2)*150}" y="${50+Math.floor(i/2)*76}" width="130" height="60" rx="12" fill="${i%3===0?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(105+(i%2)*150,86+Math.floor(i/2)*76,x[0],{fs:15,w:700})}</g>`).join('')}`,'أفعال الاختبار'),
   cap:'ستة أفعال لاختبار المواد. مرّر المؤشر على كل منها.',side:[{tip:`${e('stretch')} يطيل المادة، و ${e('compress')} يضغطها فتقصر.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'ما الفعل؟',cases:[{q:'تضرب المادة بمطرقة.',opts:[['strike',1],['stretch',0]]},{q:'تشدّ المطاط فيطول.',opts:[['stretch',1],['compress',0]]},{q:'تضع المادة على النار.',opts:[['heat',1],['drop',0]]}]}),title:'مختبر مصغّر: الفعل'}]},
  {st:2,short:'am/is/are + ing',title:'المضارع المستمر',q:'كيف تقول «أنا أسحب الحبل الآن»؟',ref:'ص 42',
   art:art(`<g data-tip="I + am ('m) + الفعل + ing."><rect x="30" y="56" width="300" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,87,"I'm pulling the rope.",{fs:15,w:700})}</g>
    <g data-tip="النفي: isn't + ing."><rect x="30" y="124" width="300" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,155,"The rope isn't breaking.",{fs:15,w:700})}</g>
    <g data-tip="السؤال: Is / Are في البداية."><rect x="30" y="192" width="300" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,223,'Is the rope breaking?',{fs:15,w:700})}</g>`,'present continuous'),
   cap:'الإثبات والنفي والسؤال. مرّر المؤشر على كل سطر.',side:[{tip:`${e('am')} مع I، و ${e('is')} مع he/she/it، و ${e('are')} مع you/we/they.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"I ___ heating the plastic.",o:["'m","'s"],a:0},{s:"The plate ___ bending.",o:["isn't","aren't"],a:0},{s:'What ___ you doing?',o:['are','is'],a:0},{s:'He is ___ the plate.',o:['striking','strikeing'],a:0}]}),title:'مختبر مصغّر: المستمر'}]},
  {recap:['strike, stretch, compress, bend, drop, cut, heat, scratch.','am / is / are + ing لما يحدث الآن.','Is it breaking? — No, it isn\'t.','strike → striking، drop → dropping، cut → cutting.']}
 ],
 lab:lab61,
 examples:[
  {title:'مثال 1: ماذا تفعل الآن؟',ref:'ص 42',q:`<p>أنت تسخّن قطعة بلاستيك الآن. صِف ذلك.</p>`,given:[],solve:()=>[{t:`الخطوة 1: I + ${e("'m")}.`},{t:`الخطوة 2: ${e('heat')} + ing = ${e('heating')}.`},{t:`الخطوة 3: ${e("I'm heating the plastic.")}`,final:true}]},
  {title:'مثال 2: النفي',ref:'ص 43',q:`<p>الحبل لا يتمطّط الآن.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الحبل مفرد: ${e("isn't")}.`},{t:`الخطوة 2: ${e('stretch')} + ing = ${e('stretching')}.`},{t:`الخطوة 3: ${e("The rope isn't stretching.")}`,final:true}]},
  {title:'مثال 3: الإملاء',ref:'ص 43',q:`<p>اكتب بصيغة ing: drop · strike</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('drop')} ينتهي بساكن قبله متحرك واحد: نضاعف ${e('p')}.`},{t:`الخطوة 2: ${e('strike')} ينتهي بـ e: نحذفها.`},{t:`الخطوة 3: ${e('dropping · striking')}`,final:true}]}
 ],
 quiz:[
  {q:"I ___ pulling the rope.",o:["'m","'s","'re","be"],c:0,e:"I'm."},
  {q:'Is the rope breaking? — No, it ___.',o:["isn't","doesn't","aren't","not"],c:0,e:"No, it isn't."},
  {q:'drop + ing =',o:['dropping','droping','dropeing','dropps'],c:0,e:'نضاعف p.'},
  {q:'strike + ing =',o:['striking','strikeing','strikking','strikes'],c:0,e:'نحذف e.'},
  {q:'compress معناها:',o:['يضغط','يمطّ','يثني','يخدش'],c:0,e:'compress = يضغط.'},
  {q:'What ___ the engineers doing?',o:['are','is','am','do'],c:0,e:'engineers جمع: are.'}
 ]
});

/* ========== 6.2 Properties ========== */
const MATS=[['aluminium','ألومنيوم'],['ceramic','خزف (سيراميك)'],['fibreglass','ألياف زجاجية'],['graphite','غرافيت'],['nylon','نايلون'],['polycarbonate','بولي كربونات'],['polystyrene','بوليسترين (فلين)'],['rubber','مطاط'],['steel','فولاذ'],['titanium','تيتانيوم']];
const PROP=[['tough ≠ brittle','لا ينكسر بسهولة ≠ هشّ'],['hard ≠ soft','صلب لا يُخدش ≠ ليّن'],['rigid ≠ flexible','لا ينثني ≠ مرن'],['strong ≠ weak','قوي ≠ ضعيف'],['light ≠ heavy','خفيف ≠ ثقيل'],['heat-resistant','مقاوم للحرارة'],['corrosion-resistant','مقاوم للتآكل (الصدأ)']];
const CARP=[['nose cone','fibreglass','strong, light'],['spoiler and wings','polystyrene coated with fibreglass','light inner core, hard outer skin'],['wheels','aluminium alloy','strong, light'],['tyres','rubber composite','tough'],['pistons','aluminium alloy coated with ceramic','light, heat-resistant'],['frame','cromoly (a steel alloy)','light, tough, rigid'],['radiator','aluminium coated with ceramic','corrosion-resistant']];
function lab62(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">سيارة السباق</h3><p class="sub">مبني على نص ص 45 والتمرين 9. اختر الجزء.</p><div class="ph-row" id="pp">${CARP.map((p,i)=>`<button type="button" class="btn${i?'':' pri'}" data-p="${i}">${p[0]}</button>`).join('')}</div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">الضد</h3><p class="sub">التمرين 8 ص 45.</p><select class="ph-sel" id="w">${PROP.slice(0,5).map((p,i)=>`<option value="${i}">${p[0].split(' ≠ ')[0]}</option>`).join('')}</select><div id="wo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا يُصنع المكبس (piston) من سبيكة مغطاة بالسيراميك؟</li><li>ما الفرق بين <span class="en">alloy</span> و <span class="en">composite</span>؟</li><li>اسأل زميلك: <span class="en">What's your phone made of?</span></li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=i=>{el.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('pri',+b.dataset.p===i));const p=CARP[i],pl=/s$/.test(p[0])&&p[0]!=='radiator';
  $('#o').innerHTML=eb([`What ${pl?'are':'is'} the ${p[0]} made of?`,`${pl?"They're":"It's"} made of ${p[1]}.`,`Why do they use ${p[1].split(' coated')[0].replace(/ \(.*\)/,'')}?`,`Because ${pl?"they're":"it's"} ${p[2]}.`])};
 el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>sh(+b.dataset.p));sh(0);
 const ws=()=>{const p=PROP[+$('#w').value],[a,b]=p[0].split(' ≠ ');$('#wo').innerHTML=`${eb(`${a} ≠ ${b}`)}<p class="sub">${p[1]}</p>`};$('#w').addEventListener('input',ws);ws();
}
B.lesson({
 id:'u6-l2',unit:6,order:2,pages:'44–45',
 title:'Properties — خصائص المواد',
 summary:'أسماء المواد (aluminium، ceramic، fibreglass، nylon، polycarbonate، steel…) والنبر في نطقها، والسؤال What\'s it made of? / What are they made of?، وخصائص المواد وأضدادها (tough ≠ brittle، rigid ≠ flexible، heat-resistant، corrosion-resistant)، والسبيكة والمادة المركبة، وقراءة وصف مواد سيارة سباق.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 44–45',html:`<p>تصف ممّ صُنع شيء ولماذا. ستتعلم:</p><ol><li>أسماء المواد ونطقها.</li><li>${e('What\'s it made of? It\'s made of …')}</li><li>خصائص المواد وأضدادها.</li></ol>`},
  {h:'المواد',ref:'ص 44',html:`${vt(MATS,['English','المعنى'])}<p>${e('fibreglass, aluminium')} بالبريطانية = ${e('fiberglass, aluminum')} بالأمريكية.</p>`},
  {h:'What\'s it made of?',ref:'ص 44',html:`${vt([["What's this helmet made of?","It's made of polycarbonate."],['What are those ropes made of?',"They're made of nylon."]],['السؤال','الجواب'])}`},
  {h:'خصائص المواد',ref:'ص 45',html:`${vt(PROP,['English','المعنى'])}${eb(["It's heat-resistant. It doesn't burn or melt if you heat it.","It's tough. It doesn't break if you strike it."])}`},
  {h:'سبيكة ومادة مركبة',ref:'ص 45',html:`${vt([['alloy','خليط من معدنين أو أكثر','cromoly (steel alloy)'],['composite','خليط من نوعين من المواد','fibreglass = plastic + ceramic']],['الكلمة','المعنى','مثال'])}`},
  {h:'تمارين الكتاب',ref:'ص 44–45',html:
   bk(1,'ص 44','ما أهم خصائص هذه المواد؟ ناقش زميلك.',null)+
   bk(2,'ص 44','طابق الصور بالمواد.',['1 ceramic','2 polycarbonate','3 polystyrene','4 fibreglass','5 graphite','6 titanium','7 rubber','8 nylon','9 aluminium','10 steel'],'من قراءتنا للصور.')+
   bk(3,'ص 44','ضع خطاً تحت المقطع المنبور.',['1 NY-lon','2 GRAPH-ite','3 ce-RAM-ic','4 pol-y-CAR-bon-ate','5 al-u-MIN-i-um','6 pol-y-STY-rene','7 ti-TA-ni-um','8 FI-bre-glass'])+
   bk(4,'ص 44','استمع وتحقق من إجاباتك وانطق الكلمات.',null)+bk(5,'ص 44','استمع وكرّر.',null)+bk(6,'ص 44','مع زميلك: اسأل وأجب عن صور التمرين 2.',null)+
   bk(7,'ص 45','طابق الجمل.',['1 d) heat-resistant','2 c) tough','3 a) rigid','4 e) corrosion-resistant','5 b) hard'])+
   bk(8,'ص 45','طابق الكلمات بأضدادها.',['1 tough – d) brittle','2 hard – a) soft','3 rigid – e) flexible','4 strong – c) weak','5 light – b) heavy'])+
   bk(9,'ص 45','اقرأ النص وأكمل الجدول.',['nose cone: (1) fibreglass · (2) strong, light','spoiler and wings: (3) polystyrene coated with fibreglass · (4) light inner core, hard outer skin','wheels: (5) aluminium alloy · (6) strong, light','tyres: (7) rubber composite · (8) tough','pistons: (9) aluminium alloy coated with ceramic · (10) light, heat-resistant','frame: (11) cromoly (a steel alloy) · (12) light, tough, rigid','radiator: (13) aluminium coated with ceramic · (14) corrosion-resistant'])},
  {h:'الاستماع',ref:'ص 44',html:au(33,'ص 44 — التمرين 4','نطق أسماء المواد.')+au(34,'ص 44 — التمرين 5','What\'s this made of?')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'What\'s it made of?',title:'ممّ صُنع؟',q:'كيف تسأل عن مادة النظارة؟',ref:'ص 44',
   art:art(`<g data-tip="مفرد: What's … made of? — It's made of …"><rect x="20" y="60" width="320" height="56" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,86,"What's this helmet made of?",{fs:14,w:700})}${TL(180,106,"It's made of polycarbonate.",{fs:13})}</g>
    <g data-tip="جمع: What are … made of? — They're made of …"><rect x="20" y="140" width="320" height="56" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,166,'What are these ropes made of?',{fs:14,w:700})}${TL(180,186,"They're made of nylon.",{fs:13})}</g>`,'made of'),
   cap:'السؤال والجواب للمفرد والجمع. مرّر المؤشر على كل منهما.',side:[{tip:`لا تنسَ ${e('of')} في آخر السؤال: ${e('made of?')}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"What ___ these sunglasses made of?",o:['are','is'],a:0},{s:"It's made ___ steel.",o:['of','from in'],a:0},{s:"___ made of rubber. (the tyres)",o:["They're","It's"],a:0}]}),title:'مختبر مصغّر: made of'}]},
  {st:2,short:'الخصائص',title:'خصائص المواد وأضدادها',q:'هل الزجاج tough أم brittle؟',ref:'ص 45',
   art:art(`${PROP.slice(0,5).map((p,i)=>`<g data-tip="${p[0]} — ${p[1]}"><rect x="30" y="${36+i*52}" width="300" height="42" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,62+i*52,p[0],{fs:15,w:700})}</g>`).join('')}`,'الخصائص'),
   cap:'خمس خصائص مع أضدادها. مرّر المؤشر على كل منها.',side:[{tip:`${e('hard')} لا يُخدش، و ${e('tough')} لا ينكسر. الزجاج ${e('hard')} لكنه ${e('brittle')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'ما الخاصية؟',cases:[{q:"It doesn't break if you drop it.",opts:[['tough',1],['brittle',0]]},{q:'You can bend it easily.',opts:[['flexible',1],['rigid',0]]},{q:"It doesn't rust in water.",opts:[['corrosion-resistant',1],['heat-resistant',0]]}]}),title:'مختبر مصغّر: الخاصية'}]},
  {recap:['aluminium, ceramic, fibreglass, nylon, polycarbonate, steel…','What\'s it made of? — It\'s made of …','tough ≠ brittle، hard ≠ soft، rigid ≠ flexible، strong ≠ weak، light ≠ heavy.','heat-resistant، corrosion-resistant.','alloy = معادن، composite = مادتان مختلفتان.']}
 ],
 lab:lab62,
 examples:[
  {title:'مثال 1: ممّ صُنع؟',ref:'ص 44',q:`<p>اسأل عن مادة الإطارات (tyres)، والجواب مطاط.</p>`,given:[],solve:()=>[{t:`الخطوة 1: tyres جمع: ${e('What are')}.`},{t:`الخطوة 2: ${e('What are the tyres made of?')}`},{t:`الخطوة 3: ${e("They're made of rubber.")}`,final:true}]},
  {title:'مثال 2: من الوصف إلى الخاصية',ref:'ص 45',q:`<p>«لا يحترق ولا يذوب إذا سخّنته». ما الخاصية؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: الوصف عن الحرارة.`},{t:`الخطوة 2: مقاوم للحرارة = ${e('heat-resistant')}.`},{t:`الخطوة 3: ${e("It's heat-resistant.")}`,final:true}]},
  {title:'مثال 3: لماذا هذه المادة؟',ref:'ص 45',q:`<p>لماذا يُصنع إطار سيارة السباق من الكرومولي؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: من النص: الإطار خفيف لكنه متين وصلب.`},{t:`الخطوة 2: ${e('light, tough, rigid')}.`},{t:`الخطوة 3: ${e("Because it's light, tough and rigid.")}`,final:true}]}
 ],
 quiz:[
  {q:"What ___ the ropes made of?",o:['are','is','do','does'],c:0,e:'ropes جمع.'},
  {q:'tough ضدها:',o:['brittle','soft','light','weak'],c:0,e:'tough ≠ brittle.'},
  {q:'rigid ضدها:',o:['flexible','heavy','hard','tough'],c:0,e:'rigid ≠ flexible.'},
  {q:'alloy:',o:['خليط من معادن','خليط من بلاستيك وسيراميك','مادة طبيعية','نوع من المطاط'],c:0,e:'alloy = mixture of metals.'},
  {q:'المقطع المنبور في aluminium (BrE):',o:['al-u-MIN-i-um','AL-u-min-i-um','al-U-min-i-um','al-u-min-I-um'],c:0,e:'ص 44.'},
  {q:"It doesn't corrode in water. It's ___.",o:['corrosion-resistant','heat-resistant','brittle','flexible'],c:0,e:'corrosion-resistant.'}
 ]
});

/* ========== 6.3 Buying ========== */
const SAY=[['@','at'],['.','dot'],['_','underscore'],['-','dash'],['/','forward slash'],['www','double u, double u, double u (or: www)'],['00','double oh'],['66','double six']];
const phoneSay=d=>{const w=['oh','one','two','three','four','five','six','seven','eight','nine'];const out=[];for(let i=0;i<d.length;i++){if(!/\d/.test(d[i]))continue;if(d[i]===d[i+1]&&d[i]!==d[i+2]&&d[i-1]!==d[i]){out.push('double '+w[+d[i]]);i++}else out.push(w[+d[i]])}return out.join(' ')};
function lab63(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">انطق رقم الهاتف</h3><p class="sub">مبني على المسار 35 ص 46: double oh، double six.</p><input class="ph-num" id="ph" type="text" value="0550 776 123" maxlength="16" dir="ltr" style="width:180px"><div id="po"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">انطق البريد الإلكتروني</h3><p class="sub">مبني على التمرين 2 ص 46.</p><input class="ph-num" id="em" type="text" value="ali_salem@tech-college.edu.sa" maxlength="48" dir="ltr" style="width:100%"><div id="eo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">sixteen أم sixty؟</h3><p class="sub">من الملاحظة الجانبية ص 46: النبر في ‑teen على آخر الكلمة، وفي ‑ty على أولها.</p><div class="ph-row">${[13,30,14,40,15,50,16,60,17,70].map(n=>`<button type="button" class="btn" data-n="${n}">${n}</button>`).join('')}</div><div id="no"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اكتب رقم جوالك وانطقه.</li><li>كيف تنطق <span class="en">_</span> و <span class="en">-</span> في البريد؟</li><li>اضغط 17 ثم 70 واستمع للفرق.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const ps=()=>{const v=$('#ph').value.replace(/[^\d ]/g,'');$('#ph').value=v;$('#po').innerHTML=v.replace(/\D/g,'')?eb(cap(v.split(' ').filter(Boolean).map(phoneSay).join(', '))+'.'):'<p class="sub">اكتب أرقاماً فقط.</p>'};
 const es=()=>{const v=$('#em').value.trim().toLowerCase();if(!/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(v)){$('#eo').innerHTML='<p class="sub" style="color:var(--red)">اكتب بريداً صحيحاً بالإنجليزية، مثل name@site.com</p>';return}
  const said=v.replace(/@/g,' at ').replace(/\./g,' dot ').replace(/_/g,' underscore ').replace(/-/g,' dash ').replace(/\s+/g,' ').trim();$('#eo').innerHTML=eb(cap(said)+'.')};
 $('#ph').addEventListener('input',ps);$('#em').addEventListener('input',es);ps();es();
 const NW={13:'thirTEEN',30:'THIRty',14:'fourTEEN',40:'FORty',15:'fifTEEN',50:'FIFty',16:'sixTEEN',60:'SIXty',17:'sevenTEEN',70:'SEVenty'};
 el.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{const w=NW[b.dataset.n];$('#no').innerHTML=eb(w);N.speak(w.toLowerCase())});
}
B.lesson({
 id:'u6-l3',unit:6,order:3,pages:'46–47',
 title:'Buying — الشراء',
 summary:'الشراء بالهاتف: نطق أرقام الهاتف (double oh)، والبريد الإلكتروني وعناوين المواقع (at، dot، underscore، dash، forward slash)، وطلب الإعادة والتهجئة (Could you repeat / spell that?)، والتمييز بين ‑teen و ‑ty، وتعبئة نموذج طلب، وبداية المكالمة الهاتفية.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 46–47',html:`<p>تطلب منتجاً بالهاتف. ستتعلم:</p><ol><li>نطق الأرقام والعناوين.</li><li>طلب الإعادة والتهجئة.</li><li>${e('-teen')} و ${e('-ty')}.</li><li>بداية المكالمة.</li></ol>`},
  {h:'نطق البريد والموقع',ref:'ص 46',html:`${vt(SAY,['نكتب','نقول'])}${eb(['ali_salem@tech.com = ali underscore salem at tech dot com','www.site.com/sales-team = www dot site dot com forward slash sales dash team'])}`},
  {h:'لغة مفيدة في المكالمة',ref:'ص 46–47',html:`${vt([["What's your name / phone number / email address?",'ما اسمك / رقمك / بريدك؟'],['Could you repeat that, please?','هل تعيد من فضلك؟'],['Could you spell that, please?','هل تتهجاه من فضلك؟'],['Is that sixteen or sixty?','هل هو 16 أم 60؟'],["What's the product name / number?",'ما اسم المنتج / رقمه؟'],['What colour / size / material would you like?','أي لون / مقاس / مادة تريد؟'],['How many would you like?','كم قطعة تريد؟']],['English','المعنى'])}<p>${e('no. = # = number')}</p>`},
  {note:'<b>توضيح للمتدرب:</b> في ‑teen يكون النبر على آخر الكلمة (seven<b>TEEN</b>)، وفي ‑ty على أولها (<b>SEV</b>enty). وللتوضيح قل الرقمين: <span class="en">seventeen, one seven</span>.'},
  {h:'بداية المكالمة',ref:'ص 47',html:dl([['A','Hello?'],['B','Hello. Is that Khalid?'],['A','Yes. Is that Omar?'],['B',"Yes, it's me. How are you?"],['A','Fine, thanks. How about you?'],['B',"I'm fine. I'm phoning to …"]])},
  {h:'تمارين الكتاب',ref:'ص 46–47',html:
   bk(1,'ص 46','استمع وأكمل نموذج المكالمة.',['Name: Manuel Vargas','Phone number: 00 34 94 66 389','<span style="overflow-wrap:anywhere">Email address: mvargas17@xtreme_sports.co.es</span>','Message: Please send your catalogue of sports equipment.'])+
   bk(2,'ص 46','استمع واكتب العناوين.',['1 waleed@sports.com (مثال)','2 adam@city.co.uk','<span style="overflow-wrap:anywhere">3 theowalcott@goalfeast.com</span>','<span style="overflow-wrap:anywhere">4 c.ronaldo@back-of-the.net</span>','<span style="overflow-wrap:anywhere">5 www.toyota.com/customer-support</span>','<span style="overflow-wrap:anywhere">6 www.orascom.com.eg/sales_one</span>'])+
   bk(3,'ص 46','مع زميلك: أملِ عليه العناوين.',null,'معلومات الطالبين في ص 114 و 118 من الكتاب.')+
   bk(4,'ص 46','استمع وأكمل الأسئلة.',['(1) repeat','(2) spell','(3) Is that','(4) Is that'])+
   bk(5,'ص 46','تدرّب على المكالمة مع زميلك.',null)+
   bk(6,'ص 47','مع زميلك: اشترِ معدات رياضية بالهاتف وأكمل نموذج الطلب.',null,'معلومات الطالب أ في ص 116 من الكتاب.')+
   bk(7,'ص 47','استمع إلى ثلاث مكالمات.',null)+
   bk(8,'ص 47','مع زميلك: تدرّب على مكالمات قصيرة بأسمائكما.',null)},
  {h:'الاستماع',ref:'ص 46–47',html:au(35,'ص 46 — التمرين 1','رسالة صوتية من زبون.')+au(36,'ص 46 — التمرين 2','ستة عناوين.')+au(37,'ص 46 — التمرين 4','مكالمة: التهجئة والأرقام.')+au(38,'ص 47 — التمرين 7','ثلاث مكالمات قصيرة.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'at · dot · dash',title:'نطق البريد الإلكتروني',q:'كيف تنطق _ في البريد؟',ref:'ص 46',
   art:art(`<rect x="20" y="70" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,102,'ali_salem@tech-college.com',{fs:16,w:700})}
    ${[['_','underscore',96],['@','at',158],['-','dash',226],['.','dot',282]].map((x,i)=>`<g data-tip="${x[0]} = ${x[1]}"><rect x="${x[2]-34}" y="150" width="68" height="40" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(x[2],176,x[1],{fs:12,w:700})}</g>`).join('')}`,'email'),
   cap:'بريد من إعدادنا ونطق رموزه. مرّر المؤشر على كل رمز.',side:[{tip:`${e('/')} = ${e('forward slash')}، و ${e('www')} نقرؤها حرفاً حرفاً.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'كيف تنطق؟',cases:[{q:'@',opts:[['at',1],['and',0]]},{q:'.',opts:[['dot',1],['point',0]]},{q:'-',opts:[['dash',1],['underscore',0]]}]}),title:'مختبر مصغّر: الرموز'}]},
  {st:2,short:'repeat · spell',title:'التأكد في المكالمة',q:'لم تسمع الاسم جيداً. ماذا تقول؟',ref:'ص 46',
   art:art(`${[['Could you repeat that, please?','أعد من فضلك'],['Could you spell that, please?','تهجّه من فضلك'],['Is that T or D?','T أم D؟'],['Is that 17 or 70?','17 أم 70؟']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="20" y="${40+i*60}" width="320" height="46" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,69+i*60,x[0],{fs:14,w:700})}</g>`).join('')}`,'repeat spell'),
   cap:'أربع جمل للتأكد. مرّر المؤشر على كل منها.',side:[{tip:`للتوضيح قل حرفاً بكلمة: ${e('T for teacher')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Could you ___ that, please? (أعد)',o:['repeat','spell'],a:0},{s:'Could you ___ that, please? (تهجّه)',o:['spell','repeat'],a:0},{s:'___ that sixteen or sixty?',o:['Is','Are'],a:0}]}),title:'مختبر مصغّر: التأكد'}]},
  {recap:['@ at · . dot · _ underscore · - dash · / forward slash.','00 = double oh.','Could you repeat / spell that, please?','seventeen (النبر آخراً) ≠ seventy (النبر أولاً).','Hello? — Is that …? — Yes, it\'s me.']}
 ],
 lab:lab63,
 examples:[
  {title:'مثال 1: نطق بريد',ref:'ص 46',q:`<p>انطق: sami.n@shop-sa.com</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('sami dot n')}`},{t:`الخطوة 2: ${e('at shop dash sa')}`},{t:`الخطوة 3: ${e('sami dot n at shop dash sa dot com')}`,final:true}]},
  {title:'مثال 2: رقم هاتف',ref:'ص 46',q:`<p>انطق: 0055 812</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('00 = double oh')}`},{t:`الخطوة 2: ${e('55 = double five')}`},{t:`الخطوة 3: ${e('double oh, double five, eight one two')}`,final:true}]},
  {title:'مثال 3: التأكد',ref:'ص 46',q:`<p>الزبون قال رقماً ولم تعرف: 15 أم 50؟ اسأله.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نسأل بـ ${e('Is that … or …?')}`},{t:`الخطوة 2: ${e('Is that fifteen or fifty?')}`},{t:`الخطوة 3: الجواب المتوقع: ${e('Fifteen. One five.')}`,final:true}]}
 ],
 quiz:[
  {q:'@ نقرؤها:',o:['at','and','about','add'],c:0,e:'@ = at.'},
  {q:'_ نقرؤها:',o:['underscore','dash','slash','dot'],c:0,e:'_ = underscore.'},
  {q:'00 في الهاتف:',o:['double oh','zero zero only','two oh','oh two'],c:0,e:'double oh.'},
  {q:'Could you ___ that, please? — L-I-N-T.',o:['spell','repeat','say','write'],c:0,e:'التهجئة: spell.'},
  {q:'النبر في seventeen:',o:['على آخرها','على أولها','لا نبر','على الوسط'],c:0,e:'seven-TEEN.'},
  {q:'no. =',o:['number','not','now','north'],c:0,e:'no. = number.'}
 ]
});

/* ========== Review Unit C ========== */
B.lesson({
 id:'u6-l4',unit:6,order:4,pages:'48–51',
 title:'Review Unit C — مراجعة الوحدتين 5 و 6',
 summary:'مراجعة التعليمات بفعل الأمر وأفعال الأدوات، والمضارع البسيط للحقائق والعمليات، والمضارع المستمر لما يحدث الآن، والشرط If، والأضداد، وخصائص المواد، وأجزاء الكلمات (sol-، poly-)، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 48–51',html:vt([['التعليمات','Grip the nail. Use a pair of pliers.','2.2 · 3.2'],['المضارع البسيط','Hot water rises to the top.','5.1 · 5.3'],['If','If you heat water to 100°C, it boils.','5.2'],['المضارع المستمر',"I'm pressing the pedal, but the truck isn't going faster.",'6.1'],['المواد والخصائص',"It's made of rubber. It's flexible.",'6.2']],['النقطة','مثال','الدرس'])},
  {h:'البسيط أم المستمر؟',ref:'ص 49–51',html:`${vt([['حقيقة أو عملية تتكرر','The hammer strikes the material.','المضارع البسيط'],['شيء يحدث الآن','The hammer is striking the bar now.','المضارع المستمر']],['متى','مثال','الزمن'])}`},
  {h:'تمارين المراجعة (ص 48–49)',ref:'ص 48–49',html:
   bk(1,'ص 48','أعطِ تعليمات للصور بكلمات الصندوق.',['1 Grip the nail. Use a pair of pliers. (مثال)','2 Pull out the nail. (مثال)'],'بقية الصور حسب الكتاب.')+
   bk(2,'ص 48','قل ماذا يحدث في صور التمرين 1.',["1 He's gripping the nail. He's using a pair of pliers. (مثال)"],'حسب صور الكتاب.')+
   bk(3,'ص 48','صحّح الأخطاء.',["1 Water doesn't boil at 32°F. It freezes. (مثال)","2 Hot water doesn't sink to the bottom of a tank. It rises to the top.","3 Cool air doesn't rise to the top of a room. It sinks.","4 Hot air doesn't sink to the bottom of a room. It stays at the top.","5 The Sun's rays don't cool the water in the solar panel. They heat it."])+
   bk(4,'ص 49','أكمل الحوار بالصيغة الصحيحة.',['(1) work (2) enters (3) pushes (4) does (5) become','(6) flows (7) heat (8) rises (9) passes (10) Does','(11) have (12) doesn\'t (13) stays (14) open (15) flows'])+
   bk(5,'ص 49','حدد الجهاز من الوصف.',['1 solar panel','2 pump','3 fan','4 thermostat'])+
   bk(6,'ص 49','ما المشكلة في الرافعة الشوكية؟',["1 'm pressing · isn't going (مثال)","2 's pulling · aren't rising","3 're pushing down · isn't slowing","4 'm sliding · aren't tilting","5 's pulling · isn't reversing","6 're moving · isn't going"])},
  {h:'تمارين المراجعة (ص 50–51)',ref:'ص 50–51',html:
   bk(7,'ص 50','أكمل بـ bend أو break وكلمات أخرى.',["1 break","2 bend","3 doesn't scratch (easily)","4 can break it (easily)","5 bend (easily)"],'3–5 إجابات نموذجية.')+
   bk(8,'ص 50','صل كل كلمة بضدها.',['rise – sink · enter – leave · into – out of · go in – go out · go up – go down','inlet – outlet · push – pull · open – close · to – from','heavy – light · strong – weak · tough – brittle · hard – soft · flexible – rigid'])+
   bk(9,'ص 50','أكمل بالصيغة الصحيحة.',['1 boils','2 freezes','3 rises','4 sinks','5 melt','6 stretches'])+
   bk(10,'ص 50','حدد المادة من الوصف.',['1 polycarbonate','2 rubber','3 ceramic','4 aluminium'])+
   bk(11,'ص 51','كوّن حوارات عن أجزاء سيارة السباق.',["What's the nose cone made of? — It's made of fibreglass. — Why do they use fibreglass? — Because it's strong and light. (نموذج)"])+
   bk(12,'ص 51','أكمل النص بالصيغة الصحيحة.',['(1) strikes (2) pull (3) presses (4) scratch','(5) is striking (6) are pulling (7) isn\'t stretching','(8) is pressing (9) isn\'t breaking (10) are scratching'])+
   bk(13,'ص 51','ما معنى أجزاء الكلمات؟',['sol- = sun (solar, solar panel)','poly- = many (polytechnic, polystyrene, polygon)'])+
   bk(14,'ص 51','اعرف المواد في مجالك واصنع جدولاً.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 5',title:'خلاصة الوحدة 5: التدفق',q:'ماذا يحدث للماء إذا سخّنته إلى 100°C؟',ref:'ص 48–50',
   art:art(`<g data-tip="المضارع البسيط للحقائق."><rect x="20" y="56" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,87,'Hot water rises to the top.',{fs:15,w:700})}</g>
    <g data-tip="If + مضارع بسيط, + مضارع بسيط."><rect x="20" y="124" width="320" height="50" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,155,'If you heat water to 100°C, it boils.',{fs:14,w:700})}</g>
    <g data-tip="تصحيح بالنفي ثم الإثبات."><rect x="20" y="192" width="320" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,223,"It doesn't sink. It rises.",{fs:15,w:700})}</g>`,'خلاصة الوحدة 5'),
   cap:'ثلاث قواعد من الوحدة 5. مرّر المؤشر على كل منها.',side:[{tip:`${e('boil')} يغلي، و ${e('freeze')} يتجمد، و ${e('melt')} يذوب.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'If you cool water to 0°C, it ___.',o:['freezes','boils'],a:0},{s:"Cool air ___ to the bottom of a room.",o:['sinks','rises'],a:0},{s:'The water pressure ___ the water around the system.',o:['pushes','push'],a:0}]}),title:'مختبر مصغّر: الوحدة 5'}]},
  {st:2,short:'الوحدة 6',title:'خلاصة الوحدة 6: المواد',q:'كيف تصف عطلاً يحدث الآن؟',ref:'ص 49–51',
   art:art(`<g data-tip="المستمر لما يحدث الآن، و but للمفاجأة."><rect x="20" y="70" width="320" height="64" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,98,"I'm pressing the pedal,",{fs:14,w:700,c:'#fff'})}${TL(180,120,"but the truck isn't going faster.",{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="المادة وخاصيتها."><rect x="20" y="160" width="320" height="64" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,188,"It's made of rubber.",{fs:14,w:700})}${TL(180,210,"It's flexible.",{fs:14,w:700})}</g>`,'خلاصة الوحدة 6'),
   cap:'قاعدتان من الوحدة 6. مرّر المؤشر على كل منهما.',side:[{tip:`في النص الواحد قد نجد الزمنين: البسيط لوصف الاختبار عموماً، والمستمر لما يحدث الآن.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'In the first test, a hammer ___ the material.',o:['strikes','is striking now'],a:0},{s:'Look! The hammer ___ the bar.',o:['is striking','strikes'],a:0},{s:"The forks ___ rising.",o:["aren't","isn't"],a:0}]}),title:'مختبر مصغّر: الزمن'}]},
  {recap:['التعليمات بفعل الأمر: Grip, Pull out, Tighten…','البسيط للحقائق: Hot water rises.','If you heat …, it …','المستمر للآن: The jaws are pulling the material.','sol- = sun، poly- = many.']}
 ],
 examples:[
  {title:'مثال 1: تصحيح خطأ',ref:'ص 48',q:`<p>صحّح: Ice melts at −10°C. (freeze)</p>`,given:[],solve:()=>[{t:`الخطوة 1: ننفي الجملة الخاطئة: ${e("Ice doesn't melt at −10°C.")}`},{t:`الخطوة 2: نكتب الصحيح بالفعل المعطى: ${e('It freezes.')}`},{t:`الخطوة 3: ${e("Ice doesn't melt at −10°C. It freezes.")}`,final:true}]},
  {title:'مثال 2: عطل الآن',ref:'ص 49',q:`<p>أنت تدير المفتاح الآن لكن المحرك لا يشتغل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'm turning the key")}`},{t:`الخطوة 2: ${e("but the engine isn't starting")}`},{t:`الخطوة 3: ${e("I'm turning the key, but the engine isn't starting.")}`,final:true}]},
  {title:'مثال 3: بسيط أم مستمر؟',ref:'ص 51',q:`<p>أكمل: Every day, the machine ___ (test) 50 helmets. Now it ___ (test) a blue helmet.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Every day')} عادة: ${e('tests')}.`},{t:`الخطوة 2: ${e('Now')} الآن: ${e('is testing')}.`},{t:`الخطوة 3: ${e('Every day, the machine tests 50 helmets. Now it is testing a blue helmet.')}`,final:true}]}
 ],
 quiz:[
  {q:'If you heat water to 100°C, it ___.',o:['boils','freezes','sinks','melts'],c:0,e:'boils.'},
  {q:"Look! The jaws ___ the material.",o:['are pulling','pull','pulls','is pull'],c:0,e:'الآن: are pulling.'},
  {q:'tough ضدها:',o:['brittle','soft','weak','light'],c:0,e:'tough ≠ brittle.'},
  {q:'It pushes water around a car engine:',o:['pump','fan','thermostat','radiator'],c:0,e:'pump.'},
  {q:'sol- معناها:',o:['الشمس','كثير','حرارة','ألف'],c:0,e:'sol = sun.'},
  {q:"I'm pressing the pedal, but the truck ___ going faster.",o:["isn't","doesn't","aren't","not"],c:0,e:"the truck isn't going."}
 ]
});
})(PLCBOOK);

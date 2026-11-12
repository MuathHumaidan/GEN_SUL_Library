/* الوحدة 7 — Specifications: الدرس 7.1 Dimensions (ص 52–53) */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,upd,ab,sp}=N;

/* جسر مائل الكوابل (رسمنا): الأجزاء مع شرحها */
const bridgeArt=()=>art(`
 <path d="M20 250 Q180 232 340 250 L340 300 L20 300Z" fill="#7fb3d5" opacity=".55"/>
 ${[96,248].map(x=>`<g data-tip="pier — الركيزة (الدعامة): العمود الخرساني الذي يحمل الجسر من الأرض."><rect x="${x}" y="160" width="16" height="96" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/></g>`).join('')}
 <g data-tip="${'deck — سطح الجسر: الطريق الذي تسير عليه السيارات.'}"><rect x="30" y="150" width="300" height="12" rx="2" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/></g>

 <g data-tip="${'cables — الكوابل (الحبال الفولاذية): تشدّ السطح إلى البرج.'}" stroke="${C.ink}" stroke-width="1.4">${[40,60,80,124,144,164].map(x=>`<line x1="104" y1="74" x2="${x}" y2="150"/>`).join('')}${[196,216,236,280,300,320].map(x=>`<line x1="256" y1="74" x2="${x}" y2="150"/>`).join('')}</g>
 ${[100,252].map(x=>`<g data-tip="pylon — البرج: الصاري الطويل فوق السطح الذي تتصل به الكوابل."><rect x="${x}" y="70" width="8" height="82" fill="${C.red}" stroke="${C.ink}" stroke-width="1.5"/></g>`).join('')}
 <g data-tip="${'span — البحر (الباع): المسافة بين ركيزتين متجاورتين.'}">${arrowS(112,190,244,190,C.blue,2.5,9)}${arrowS(244,190,112,190,C.blue,2.5,9)}${TL(178,184,'span',{fs:13,w:700,c:C.blue})}</g>
 ${TL(104,62,'pylon',{fs:12,w:700})}${TL(40,140,'deck',{fs:12,w:700})}${TL(104,276,'pier',{fs:12,w:700})}${TL(300,96,'cables',{fs:12,w:700})}`,'جسر مائل الكوابل: الركائز والسطح والبرجان والكوابل والبحر بين ركيزتين');

/* مواصفات جسر ميو Millau (حقائق عامة، تُستعمل في المختبر والأمثلة) */
const MILLAU=[
 {k:'deck',part:'the deck',pl:false,dim:'long',val:'2.46',u:'km',ar:'طول سطح الجسر'},
 {k:'deckw',part:'the deck',pl:false,dim:'wide',val:'32',u:'m',ar:'عرض السطح'},
 {k:'inner',part:'the inner spans',pl:true,dim:'long',val:'342',u:'m',ar:'طول البحور الداخلية'},
 {k:'outer',part:'the outer spans',pl:true,dim:'long',val:'204',u:'m',ar:'طول البحرين الطرفيين'},
 {k:'pylon',part:'the pylons',pl:true,dim:'high',val:'87',u:'m',ar:'ارتفاع الأبراج فوق السطح'},
 {k:'pier',part:'the tallest pier',pl:false,dim:'high',val:'245',u:'m',ar:'ارتفاع أطول ركيزة'},
 {k:'above',part:'the deck',pl:false,dim:'high',val:'270',u:'m',ar:'ارتفاع السطح فوق النهر',extra:' above the river'}];
const NOUN={long:'length',wide:'width',high:'height',deep:'depth'};
const qOf=r=>`How ${r.dim} ${r.pl?'are':'is'} ${r.part}${r.extra?'':''}?`;
const aOf=r=>`${r.pl?"They're":"It's"} ${r.val} ${r.u} ${r.dim}${r.extra||''}.`;
const nOf=r=>`The ${NOUN[r.dim]} of ${r.part}${r.extra||''} ${r.pl?'is':'is'} ${r.val} ${r.u}.`;
const cap=s=>s[0].toUpperCase()+s.slice(1);

function lab71(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">اسأل عن المواصفات وأجب</h3>
  <p class="sub">مبني على «Language» ص 53. اختر بنداً من جدول مواصفات جسر ميو Millau (حقائق عامة، إضافة من خارج الكتاب)، وشاهد السؤال والجواب بصيغتي الصفة والاسم.</p>
  <select class="ph-sel" id="mp">${MILLAU.map((r,i)=>`<option value="${i}">${r.ar}</option>`).join('')}</select>
  <div id="mo"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">صفة أم اسم؟</h3>
  <p class="sub">اختر البُعد لترى الصفة والاسم ومثالاً لكل منهما.</p>
  <div class="ph-row" id="dims">${Object.keys(NOUN).map((d,i)=>`<button type="button" class="btn${i?'':' pri'}" data-d="${d}">${d} / ${NOUN[d]}</button>`).join('')}</div>
  <div id="do"></div>
 </div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اختر «طول البحور الداخلية»: لماذا صار السؤال <span class="en">How long <b>are</b>…?</span> والجواب <span class="en"><b>They're</b>…</span>؟</li>
  <li>اختر «عرض السطح» واقرأ الجملتين بصوت الجهاز 🔊، ثم قلهما بنفسك.</li>
  <li>في «صفة أم اسم» اختر <span class="en">deep</span>: متى نقول <span class="en">deep</span> ومتى <span class="en">depth</span>؟</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);
 const show=()=>{const r=MILLAU[+$('#mp').value];
  $('#mo').innerHTML=`<div class="pk-facts" style="margin-top:12px"><div><span>البند</span><b style="font-family:var(--font);direction:rtl;text-align:start">${r.ar}</b></div><div class="hi"><span>القيمة</span><b>${r.val} ${r.u}</b></div></div>
   <p style="margin:10px 0 4px"><b>السؤال</b> (How + صفة + ${r.pl?'are للجمع':'is للمفرد'}):</p>${eb(cap(qOf(r)).replace('?',(r.extra||'')+'?'))}
   <p style="margin:10px 0 4px"><b>الجواب بالصفة</b> (الرقم ثم الوحدة ثم الصفة):</p>${eb(aOf(r))}
   <p style="margin:10px 0 4px"><b>الجملة نفسها بالاسم</b>:</p>${eb(nOf(r))}`};
 $('#mp').onchange=show;show();
 const EX={long:['The tunnel is 9 km long.','The length of the tunnel is 9 km.'],wide:['The road is 12 m wide.','The width of the road is 12 m.'],high:['The tower is 150 m high.','The height of the tower is 150 m.'],deep:['The well is 40 m deep.','The depth of the well is 40 m.']};
 const dshow=d=>{el.querySelectorAll('[data-d]').forEach(b=>b.classList.toggle('pri',b.dataset.d===d));
  $('#do').innerHTML=`<div class="pk-facts" style="margin-top:12px"><div><span>الصفة (بعد الرقم)</span><b>${d}</b></div><div><span>الاسم (بعد The … of)</span><b>${NOUN[d]}</b></div></div>${eb(EX[d])}`};
 el.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>dshow(b.dataset.d));dshow('long');
}

const VOC=[['specifications','المواصفات','جدول المواصفات = specification chart'],['dimensions','الأبعاد',''],['bridge','جسر',''],['structure','المنشأة؛ نوع البناء',''],['cable-stayed bridge','جسر مائل الكوابل','الكوابل مشدودة إلى أبراج'],['suspension bridge','جسر معلّق','السطح معلّق بكوابل رئيسية طويلة'],['cable','كابل (حبل فولاذي)',''],['deck','سطح الجسر',''],['pier','ركيزة (دعامة)',''],['pylon','برج (صاري)',''],['span','بحر الجسر (المسافة بين ركيزتين)',''],['completion date','تاريخ الإنجاز',''],['material','المادة (الخامة)',''],['steel','فولاذ',''],['concrete','خرسانة',''],['above water','فوق سطح الماء','']];
const DIMS=[['long','طويل','length','الطول'],['wide','عريض','width','العرض'],['high','مرتفع / عالٍ','height','الارتفاع'],['deep','عميق','depth','العمق']];
const dimTable=`<div class="tbx"><table class="vt"><thead><tr><th>Adjective الصفة</th><th>المعنى</th><th>Noun الاسم</th><th>المعنى</th></tr></thead><tbody>${DIMS.map(r=>`<tr><td class="en">${r[0]} ${sp(r[0])}</td><td>${r[1]}</td><td class="en">${r[2]} ${sp(r[2])}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div>`;

B.lesson({
 id:'u7-l1',unit:7,order:1,pages:'52–53',
 title:'Dimensions — الأبعاد',
 summary:'كلمات أجزاء الجسر، والصفة والاسم للأبعاد (long/length، wide/width، high/height، deep/depth)، والسؤال عن الأبعاد بـ How + صفة وإجابته، وكتابة الوحدات واختصارها.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 52–53',html:`<p>في هذا الدرس تصف <b>أبعاد منشأة</b> مثل جسر: كم طوله؟ كم ارتفاعه؟ كم عرض سطحه؟ ستتعلم:</p><ol><li>أسماء أجزاء الجسر بالإنجليزي.</li><li>الصفة والاسم لكل بُعد، ومتى تستعمل كلاً منهما.</li><li>السؤال عن الأبعاد بـ ${e('How + صفة')} وطريقة الإجابة.</li><li>قراءة <b>جدول مواصفات</b> ${e('specification chart')} وتعبئته.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 52',html:vt(VOC)},
  {h:'الصفة والاسم للأبعاد',ref:'ص 53',html:`<p>لكل بُعد كلمتان: <b>صفة</b> تأتي بعد الرقم والوحدة، و<b>اسم</b> يأتي بعد ${e('The')} ويتبعه ${e('of')}.</p>${dimTable}
   <p>الجملتان التاليتان بالمعنى نفسه (أمثلة من عندنا):</p>${eb(['The tunnel is 9 km <b>long</b>.','The <b>length</b> of the tunnel is 9 km.'])}
   <p>انتبه: مع الصفة الترتيب <b>رقم ← وحدة ← صفة</b> (${e('9 km long')})، ومع الاسم نضع الرقم في آخر الجملة.</p>`},
  {h:'السؤال عن الأبعاد: How + صفة',ref:'ص 53',html:`<p>نسأل بـ ${e('How')} ثم <b>الصفة</b> ثم ${e('is')} للمفرد أو ${e('are')} للجمع ثم الشيء:</p>
   ${eb(['How <b>high</b> is the tower?','How <b>long</b> are the cables?'])}
   <p>ونجيب بـ ${e("It's")} للمفرد و ${e("They're")} للجمع، ثم الرقم والوحدة والصفة:</p>
   ${eb(["<b>It's</b> 150 metres high.","<b>They're</b> 60 metres long."])}`},
  {note:'<b>توضيح للمتدرب:</b> لا تقل <span class="en">How height is…?</span> فبعد <span class="en">How</span> تأتي الصفة دائماً، لا الاسم. والجواب قد يكون تقريبياً: <span class="en">It\'s <b>about</b> 50 m wide.</span> أو <span class="en"><b>over / more than</b> 80 m high</span>.'},
  {h:'كتابة الوحدات وقراءتها',ref:'ص 52',html:`<ul><li>البريطانية تكتب ${e('metre, millimetre, centimetre')} والأمريكية ${e('meter, millimeter, centimeter')}.</li><li>لا تضف ${e('-s')} إلى الاختصار: نكتب ${e('100 m')} و ${e('100 km')} (لا ${e('100 ms')})، ونقرؤها ${e('one hundred metres')}.</li></ul>`},
  {h:'تمارين الكتاب',ref:'ص 52–53',html:
   bk(1,'ص 52','أجب عن أسئلة الصورة: ما اسم الجسر؟ أين هو؟ كم ارتفاعه؟',['Millau Viaduct (Millau Bridge)','In the south of France, over the Tarn valley near Millau','About 343 m at the top of the highest pylon'],'هذه حقائق عامة عن الجسر؛ تحقق من أرقام التسجيل في التمرين 2.')+
   bk(3,'ص 52','اعمل مع زميلك: أي الكلمات الخمس تراها في الصورة؟ (cable، deck، pier، pylon، span)',null)+
   bk(5,'ص 53','أكمل جدول الصفة والاسم.',['high → height','long → length','deep → depth','wide → width'])+
   bk(6,'ص 53','اختر الكلمة الصحيحة بين القوسين لكل جملة من الثماني: صفة بعد الرقم، واسم بعد The.',['width','long','depth','high','deep','length','wide','height'])+
   bk(7,'ص 53','كوّن أسئلة عن جسر ميو باستعمال جدول المواصفات في التمرين 4 (How + صفة).',null)+
   bk(8,'ص 53','مع زميلك: اسأل وأجب عن أسئلتك في التمرين 7 (مذيع ومهندس).',null)+
   bk(9,'ص 53','مهمة ثنائية: كل طالب يسأل عن مواصفات جسر زميله ويكمل جدوله.',null,'معلومات الطالبين في صفحات من الكتاب ليست في الحقيبة، فصنعنا بطاقتين بديلتين أسفل هذا القسم.')},
  {h:'الاستماع',ref:'ص 52',html:au(39,'ص 52 — التمرين 2','استمع لجزء من برنامج تلفزيوني عن الجسر، وتحقق من إجاباتك في التمرين 1.')+au(40,'ص 52 — التمرين 4','استمع لبقية البرنامج وأكمل جدول مواصفات الجسر (12 بنداً).')+
   bk(4,'ص 52','جدول مواصفات جسر ميو (من التسجيل).',['(1) cable-stayed','(2) December 2004','(3) steel','(4) concrete','(5) 8','(6) 342 m','(7) 204 m','(8) 7','(9) 87 m','(10) about 270 m','(11) 2.46 km','(12) 32 m'],'القيم من المصادر العامة عن الجسر؛ قد يقرّبها التسجيل قليلاً، فاعتمد ما تسمعه.')},
  {h:'مهمة ثنائية بديلة (إضافة من خارج الكتاب)',ref:'ص 53 — التمرين 9',html:`<p>بيانات جسرين <b>افتراضيين</b> من عندنا. كل طالب يرى بطاقته فقط، ويسأل زميله بـ ${e('How + صفة')} ليكمل البيانات الناقصة.</p>`+
   ab(vt([['Type of structure','cable-stayed'],['Total length','1.8 km'],['Number of piers','5'],['Height of pylons above deck','65 m'],['Width of deck','28 m'],['Height of deck above water','?'],['Length of main span','?']],['جسري: جسر النخيل (افتراضي)','القيمة'])+`<p><b>يسألك زميلك عن جسر الصخرة، فأجبه من هنا:</b></p>${eb('Depth of water at main pier: 45 m · Width of deck: 30 m · Completion date: 2019')}`,
      vt([['Type of structure','suspension'],['Total length','3.2 km'],['Length of main span','1.1 km'],['Height of towers','190 m'],['Depth of water at main pier','?'],['Width of deck','?'],['Completion date','?']],['جسري: جسر الصخرة (افتراضي)','القيمة'])+`<p><b>يسألك زميلك عن جسر النخيل، فأجبه من هنا:</b></p>${eb('Height of deck above water: 52 m · Length of main span: 400 m')}`)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'أجزاء الجسر',title:'أجزاء الجسر بالإنجليزي',q:'في الجسر المائل الكوابل: ما الجزء الذي تسير عليه السيارات؟ وما الذي يحمله من الأرض؟',ref:'ص 52',
   art:bridgeArt(),cap:'جسر مائل الكوابل من رسمنا. مرّر المؤشر على كل جزء (أو المسه في الجوال) لتعرف اسمه ومعناه.',
   side:[{tip:`الجسر في صورة الكتاب ${e('cable-stayed')}: <b>كوابل</b> تشدّ <b>السطح</b> إلى <b>أبراج</b> قائمة فوق <b>ركائز</b>، والمسافة بين ركيزتين اسمها <b>بحر</b> ${e('span')}.`}],
   body:[{html:vt(VOC.slice(6,11))},
    {widget:(el,B)=>N.cases(el,B,{intro:'اختر الكلمة المناسبة لكل وصف:',cases:[
     {q:'The part of the bridge for cars and trucks.',opts:[['deck',1,'السطح هو الطريق نفسه.'],['pier',0,''],['pylon',0,'']]},
     {q:'The distance between two piers.',opts:[['cable',0,''],['span',1,'البحر = المسافة بين ركيزتين.'],['deck',0,'']]},
     {q:'The tall post above the deck. The cables hang from it.',opts:[['pylon',1,'البرج يعلو السطح وتتصل به الكوابل.'],['pier',0,'الركيزة تحت السطح، لا فوقه.'],['span',0,'']]}]}),title:'مختبر مصغّر: ما اسم الجزء؟'}]},
  {st:2,short:'صفة أم اسم؟',title:'الصفة والاسم للأبعاد',q:'أيهما صحيح: The road is 6 m wide أم The road is 6 m width؟',ref:'ص 53',
   art:art(`${[['long','length',70],['wide','width',130],['high','height',190],['deep','depth',250]].map(([a,n,y])=>`<g data-tip="${a} صفة تأتي بعد الرقم والوحدة، و ${n} اسم يأتي بعد The."><rect x="40" y="${y-26}" width="120" height="36" rx="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(100,y-3,a,{fs:16,w:700})}${arrowS(166,y-8,196,y-8,C.ink,2.5,8)}<rect x="200" y="${y-26}" width="120" height="36" rx="8" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(260,y-3,n,{fs:16,w:700})}</g>`).join('')}
    ${T(100,290,'صفة',{ar:1,w:700})}${T(260,290,'اسم',{ar:1,w:700})}`,'أربع صفات وأسماؤها: long length، wide width، high height، deep depth'),
   cap:'كل صفة واسمها. مرّر المؤشر على أي زوج لتعرف مكان كل كلمة في الجملة.',
   side:[{tip:`بعد الرقم والوحدة تأتي <b>الصفة</b>: ${e('6 m wide')}. وبعد ${e('The … of')} يأتي <b>الاسم</b>: ${e('The width of the road')}.`}],
   body:[{predict:{q:'اختر الجملة الصحيحة:',opts:[['<span class="en">The road is 6 m wide.</span>',true,'بعد الرقم والوحدة نضع الصفة wide.'],['<span class="en">The road is 6 m width.</span>',false,'width اسم، ومكانه بعد The: The width of the road is 6 m.'],['<span class="en">The wide of the road is 6 m.</span>',false,'بعد The … of نحتاج الاسم width لا الصفة wide.']]}},
    {widget:(el,B)=>N.gaps(el,B,{intro:'اختر الكلمة الصحيحة (أمثلة جديدة من عندنا):',items:[
     {s:'The tunnel is 9 km ___.',o:['long','length'],a:0,why:'بعد الرقم والوحدة: صفة.'},
     {s:'The ___ of the tower is 150 m.',o:['high','height'],a:1,why:'بعد The: اسم.'},
     {s:'The lake has a ___ of 20 m.',o:['deep','depth'],a:1,why:'بعد a: اسم.'},
     {s:'The new bridge is 30 m ___.',o:['wide','width'],a:0,why:'بعد الرقم والوحدة: صفة.'}]}),title:'مختبر مصغّر: صفة أم اسم'}]},
  {st:3,short:'How + صفة',title:'السؤال عن الأبعاد وجوابه',q:'كيف تسأل عن طول الكوابل؟ ولماذا are وليست is؟',ref:'ص 53',
   art:art(`<g data-tip="How + صفة: How high / How long / How wide / How deep."><rect x="30" y="70" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,104,'How long are the cables?',{fs:17,w:700})}</g>
    <g data-tip="للجمع They're، وللمفرد It's، ثم الرقم والوحدة والصفة."><rect x="30" y="180" width="300" height="56" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,214,"They're 60 metres long.",{fs:17,w:700})}</g>${arrowS(180,130,180,174,C.ink,3)}`,'سؤال How long are the cables وجوابه They are 60 metres long'),
   cap:'السؤال وجوابه. مرّر المؤشر على كل منهما لترى القاعدة.',
   side:[{tip:`القالب: ${e('How + adjective + is/are + the …?')} والجواب: ${e("It's / They're + number + unit + adjective.")}`}],
   body:[{html:dl([['Presenter','How high is the main tower?'],['Engineer',"It's about 180 metres high."],['Presenter','And how long are the cables?'],['Engineer',"They're over 300 metres long."]])+'<p class="pk-ill">حوار جديد من عندنا للتمثيل.</p>'},
    {widget:(el,B)=>N.typ(el,B,{intro:'اكتب السؤال الذي جوابه بين القوسين:',items:[
     {q:`الجواب: ${e("It's 6 m wide.")} (the road)`,a:['How wide is the road?'],hint:'How + wide + is + the road?'},
     {q:`الجواب: ${e("They're 87 m high.")} (the pylons)`,a:['How high are the pylons?'],hint:'الجمع: are.'},
     {q:`الجواب: ${e("It's 300 m deep.")} (the sea)`,a:['How deep is the sea?'],hint:'How deep …?'}]}),title:'مختبر مصغّر: اكتب السؤال'}]},
  {st:4,short:'جدول المواصفات',title:'قراءة جدول مواصفات',q:'في جدول المواصفات: كيف تحوّل السطر «Length of deck 2.46 km» إلى جملة؟',ref:'ص 52–53',
   art:art(`<rect x="40" y="50" width="280" height="220" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,78,'Specifications',{fs:16,w:700})}
    ${[['Structure','cable-stayed'],['Piers','7'],['Length of deck','2.46 km'],['Width of deck','32 m'],['Pylons above deck','87 m']].map(([a,b],i)=>`<g data-tip="${a}: ${b}"><line x1="50" x2="310" y1="${98+i*34}" y2="${98+i*34}" stroke="${C.mut}"/>${TL(56,120+i*34,a,{fs:12,a:'start'})}${TL(304,120+i*34,b,{fs:12,a:'end',w:700})}</g>`).join('')}`,'جدول مواصفات فيه نوع المنشأة وعدد الركائز والطول والعرض والارتفاع'),
   cap:'جدول مواصفات (أرقام جسر ميو العامة). مرّر المؤشر على أي سطر.',
   side:[{tip:'كل سطر في الجدول يصير جملة: <span class="en">The deck is 2.46 km long.</span> أو <span class="en">The length of the deck is 2.46 km.</span>'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'حوّل كل سطر إلى جملة:',items:[
     {s:'Width of deck: 32 m → The deck is 32 m ___.',o:['wide','width','long'],a:0},
     {s:'Pylons above deck: 87 m → The pylons are 87 m ___ above the deck.',o:['high','height','deep'],a:0},
     {s:'Number of piers: 7 → The bridge ___ seven piers.',o:['has','is','are'],a:0,why:'العدد: The bridge has seven piers.'}]}),title:'مختبر مصغّر: من الجدول إلى الجملة'}]},
  {recap:['أجزاء الجسر: deck السطح، pier الركيزة، pylon البرج، cable الكابل، span البحر بين ركيزتين.','الصفة بعد الرقم والوحدة (9 km long)، والاسم بعد The … of (The length of …).','السؤال: How + صفة + is/are …? والجواب: It\'s / They\'re + رقم + وحدة + صفة.','لا تضف s إلى الاختصار: 100 m وتُقرأ one hundred metres.']}
 ],
 lab:lab71,
 examples:[
  {title:'مثال 1: سؤال عن طول السطح',ref:'ص 53',q:`<p>كوّن سؤالاً وجواباً عن طول سطح جسر طوله ${e('2.46 km')}.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: البُعد طول، فالصفة ${e('long')}.`},{t:`الخطوة 2: الشيء مفرد (the deck) فنستعمل ${e('is')}: ${e('How long is the deck?')}`},{t:`الخطوة 3: الجواب بـ ${e("It's")} ثم الرقم والوحدة والصفة: ${e("It's 2.46 km long.")}`,final:true}]},
  {title:'مثال 2: من الاسم إلى الصفة',ref:'ص 53',q:`<p>أعد كتابة الجملة بالصفة: ${e('The width of the road is 6 m.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الاسم ${e('width')} صفته ${e('wide')}.`},{t:'الخطوة 2: نبدأ بالشيء ثم is ثم الرقم والوحدة.'},{t:`الخطوة 3: ${e('The road is 6 m wide.')}`,final:true}]},
  {title:'مثال 3: سؤال عن جمع',ref:'ص 53',q:`<p>كوّن سؤالاً عن ارتفاع الأبراج وجوابه (${e('87 m')}).</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: البُعد ارتفاع، فالصفة ${e('high')}.`},{t:`الخطوة 2: الأبراج جمع فنستعمل ${e('are')}: ${e('How high are the pylons?')}`},{t:`الخطوة 3: الجواب للجمع ${e("They're")}: ${e("They're 87 m high.")}`,final:true}]}
 ],
 quiz:[
  {q:'The part of a bridge where cars drive:',o:['pier','deck','pylon','span'],c:1,e:'deck = سطح الجسر.'},
  {q:'The ___ of the river is 230 km.',o:['long','length','longs','lengthy'],c:1,e:'بعد The نضع الاسم length.'},
  {q:'These towers are over 80 m ___.',o:['height','high','highs','heights'],c:1,e:'بعد الرقم والوحدة نضع الصفة high.'},
  {q:'اختر السؤال الصحيح:',o:['How height is the bridge?','How long are the cables?','How long is the cables?','How the bridge is high?'],c:1,e:'How + صفة + are للجمع (cables).'},
  {q:'الجواب المناسب لـ How deep is the well?',o:["They're 40 m deep.","It's 40 m deep.","It's 40 m depth.","It deep is 40 m."],c:1,e:"المفرد It's ثم الرقم والوحدة والصفة deep."},
  {q:'الكتابة الصحيحة لمئة متر مختصرة:',o:['100 ms','100 m','100 mts','100 meters m'],c:1,e:'لا نضيف s إلى الاختصار.'},
  {q:'span معناها:',o:['الركيزة','البرج','المسافة بين ركيزتين','الكابل'],c:2,e:'span = بحر الجسر بين ركيزتين.'}
 ]
});
})(PLCBOOK);

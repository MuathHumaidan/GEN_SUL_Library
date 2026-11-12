/* الوحدة 7 — Specifications: الدرس 7.2 Quantities (ص 54–55) والدرس 7.3 Future projects (ص 56–57) */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,upd,ab,sp}=N;

/* =================== 7.2 Quantities =================== */
/* أصناف المحل في المختبر: [الاسم مفرداً، الجمع أو null لغير المعدود، العبوة، المعنى، سؤال النوع] */
const SHOP=[
 {n:'screw',pl:'screws',c:true,ar:'برغي (مسمار ملولب)',unit:'',kind:'What size?',kv:['6 mm','10 mm','20 mm']},
 {n:'nail',pl:'nails',c:true,ar:'مسمار',unit:'',kind:'What size?',kv:['25 mm','50 mm','75 mm']},
 {n:'bolt',pl:'bolts',c:true,ar:'مسمار بصامولة (بُرغي)',unit:'',kind:'What size?',kv:['12 mm','16 mm','25 mm']},
 {n:'nut',pl:'nuts',c:true,ar:'صامولة',unit:'',kind:'What size?',kv:['8 mm','12 mm','15 mm']},
 {n:'paint',c:false,ar:'دهان',unit:'tin',units:'tins',kind:'What colour?',kv:['white','black','grey']},
 {n:'glue',c:false,ar:'غراء',unit:'tube',units:'tubes',kind:'What kind?',kv:['superglue','wood glue']},
 {n:'cement',c:false,ar:'أسمنت',unit:'bag',units:'bags',kind:'What kind?',kv:['white','grey']},
 {n:'oil',c:false,ar:'زيت',unit:'litre',units:'litres',kind:'What kind?',kv:['motor oil','machine oil']},
 {n:'sand',c:false,ar:'رمل',unit:'bag',units:'bags',kind:'What kind?',kv:['fine','coarse']}];
const W2=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
function lab72(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">في محل العِدد</h3>
  <p class="sub">مبني على «Language» ص 55. اختر صنفاً وكمية ونوعاً، وشاهد هل هو معدود أم غير معدود، وكيف يسأل البائع وكيف تجيب. (حوار جديد من عندنا.)</p>
  <select class="ph-sel" id="si">${SHOP.map((x,i)=>`<option value="${i}">${x.n} — ${x.ar}</option>`).join('')}</select>
  ${K.sl('sq','الكمية',1,60,1,10)}
  <div class="ph-row" id="sk"></div>
  <div class="pk-facts" id="sf"></div>
  <div id="sd"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">القاعدة باختصار</h3>
  <div class="tbx"><table class="vt"><thead><tr><th></th><th>معدود <span class="en">screws</span></th><th>غير معدود <span class="en">cement</span></th></tr></thead><tbody>
   <tr><td>المفرد</td><td class="en">a screw / one screw</td><td class="en">—</td></tr>
   <tr><td>الكمية</td><td class="en">some screws, ten screws</td><td class="en">some cement, two bags of cement</td></tr>
   <tr><td>السؤال</td><td class="en">How many screws?</td><td class="en">How much cement?</td></tr>
   <tr><td>هل عندك؟</td><td class="en">Do you need any screws?</td><td class="en">Do you need any cement?</td></tr></tbody></table></div>
  <p class="pk-ill">مع غير المعدود نعدّ <b>العبوات</b>: <span class="en">two bags of cement, six tins of paint</span>.</p>
 </div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اختر <span class="en">screw</span> ثم <span class="en">paint</span>: لماذا تغيّر السؤال من <span class="en">How many</span> إلى <span class="en">How much</span>؟</li>
  <li>اجعل الكمية 1 مع <span class="en">screw</span>: ماذا حدث لكلمة <span class="en">screws</span>؟</li>
  <li>اختر <span class="en">oil</span>: ما وحدة العدّ؟ اقرأ جملة الطلب بصوت الجهاز 🔊 ثم قلها.</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);let kv=0;
 const draw=()=>{const x=SHOP[+$('#si').value],q=+$('#sq').value;$('#sq-v').textContent=q;
  if(kv>=x.kv.length)kv=0;
  $('#sk').innerHTML=x.kv.map((v,i)=>`<button type="button" class="btn${i===kv?' pri':''}" data-k="${i}">${v}</button>`).join('');
  el.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{kv=+b.dataset.k;draw()});
  const qty=x.c?`${q<=10?W2[q]:q} ${x.kv[kv]} ${q===1?x.n:x.pl}`:`${q<=10?W2[q]:q} ${q===1?x.unit:x.units} of ${x.kv[kv]} ${x.n}`;
  $('#sf').innerHTML=`<div class="${x.c?'hi':''}"><span>النوع</span><b style="font-family:var(--font);direction:rtl;text-align:start">${x.c?'معدود (له جمع)':'غير معدود (لا جمع له)'}</b></div><div><span>سؤال الكمية</span><b>${x.c?'How many '+x.pl+'?':'How much '+x.n+'?'}</b></div><div><span>وحدة العدّ</span><b>${x.c?'—':x.unit}</b></div>`;
  $('#sd').innerHTML=dl([['Shop assistant','Good morning. Can I help you?'],['You',`Yes. Do you have any ${x.c?x.pl:x.n}?`],['Shop assistant',`Certainly. ${x.kind}`],['You',`${x.kv[kv][0].toUpperCase()+x.kv[kv].slice(1)}, please.`],['Shop assistant',x.c?`And how many ${x.pl} do you need?`:`And how much ${x.n} do you need?`],['You',`${qty[0].toUpperCase()+qty.slice(1)}, please.`]])};
 $('#si').onchange=()=>{kv=0;draw()};$('#sq').addEventListener('input',draw);draw();
}

const VOC72=[['quantity','الكمية',''],['countable noun','اسم معدود','له مفرد وجمع: screw → screws'],['uncountable noun','اسم غير معدود','لا جمع له: cement, oil, sand'],['screw','برغي',''],['nail','مسمار',''],['bolt / nut','مسمار بصامولة / صامولة',''],['concrete','خرسانة',''],['cement','أسمنت',''],['sand','رمل',''],['glue','غراء',''],['tin','علبة معدنية','six tins of paint'],['tube','أنبوب (عبوة)','two tubes of glue'],['bag','كيس','twenty bags of cement'],['packet','علبة كرتون صغيرة','two packets of nails'],['storey','طابق','How many storeys does it have?'],['elevator / lift','مصعد','elevator أمريكية و lift بريطانية'],['footprint','مساحة قاعدة المبنى على الأرض',''],['tonne','طن (1000 كجم)',''],['reinforced concrete','خرسانة مسلّحة','']];

B.lesson({
 id:'u7-l2',unit:7,order:2,pages:'54–55',
 title:'Quantities — الكميات',
 summary:'الاسم المعدود وغير المعدود، و some/any، والسؤال بـ How many و How much، وعبوات البيع (tin, tube, bag, packet)، وأسئلة المواصفات عن مبنى.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 54–55',html:`<ol><li>تفرّق بين الاسم <b>المعدود</b> ${e('screws')} و<b>غير المعدود</b> ${e('cement')}.</li><li>تسأل عن الكمية بـ ${e('How many')} و ${e('How much')}.</li><li>تطلب مواد من محل: الكمية والنوع والمقاس واللون والعبوة.</li><li>تقرأ أسئلة وأجوبة عن مواصفات مبنى عالٍ.</li></ol>`},
  {h:'كلمات الدرس',ref:'ص 54–55',html:vt(VOC72)},
  {h:'المعدود وغير المعدود',ref:'ص 55',html:`<p><b>المعدود</b> له مفرد وجمع، فنقول ${e('a screw')} و ${e('ten screws')}. <b>غير المعدود</b> مفرد دائماً ولا نضع قبله ${e('a')} ولا رقماً مباشرة، بل نعدّ عبواته:</p>
   ${eb(['I need <b>a</b> screw. I need <b>fifty</b> screws.','I need <b>some</b> cement. I need <b>two bags of</b> cement.'])}
   <p>في السؤال نستعمل ${e('any')}، وفي الطلب الإيجابي ${e('some')}:</p>${eb(['Do you need <b>any</b> nails?','Yes, I need <b>some</b> nails.'])}`},
  {h:'How many و How much',ref:'ص 55',html:`<p>${e('How many')} مع <b>المعدود</b> (بالجمع)، و ${e('How much')} مع <b>غير المعدود</b>:</p>${eb(['<b>How many</b> bolts do you need?','<b>How much</b> oil do you need?'])}
   <p>وأسئلة النوع: ${e('What size? · What colour? · What kind? · What type?')}</p>`},
  {note:'<b>توضيح للمتدرب:</b> كلمات مثل <span class="en">paint, oil, glue, cement, concrete, sand, steel</span> غير معدودة في العادة، فلا تقل <span class="en">two paints</span> بل <span class="en">two tins of paint</span>. ونكتب <span class="en">15 L</span> ونقرؤها <span class="en">fifteen litres</span>.'},
  {h:'تمارين الكتاب',ref:'ص 54–55',html:
   bk(1,'ص 54','اختبار المباني: طابق أسماء المباني السبعة مع الصور، واكتب الارتفاع التقريبي لكل مبنى.',null,'الإجابة من التسجيل في التمرين 2.')+
   upd('المعلومات في الكتاب صحيحة وقت طباعته. اليوم: أعلى مبنى مكتمل في العالم <b>برج خليفة</b> في دبي (نحو 828 م، افتُتح 2010)، أما <span class="en">Taipei 101</span> فكان الأعلى من 2004 إلى 2010. و<span class="en">Sears Tower</span> صار اسمه <span class="en">Willis Tower</span> منذ 2009، و<span class="en">Burj Dubai</span> صار اسمه برج خليفة. وأبراج البيت في مكة (<span class="en">Abraj Al Bait</span>) اكتملت 2012 بارتفاع نحو 601 م.')+
   bk(3,'ص 54','طابق الأسئلة الشائعة الستة عن المبنى مع أجوبتها (A–F).',['D','F','C','B','E','A'])+
   bk(4,'ص 55','أكمل حوار المحل بكلمات الصندوق.',['any','What size','how many','some','What colour','how much'])+
   bk(5,'ص 55','اعمل حوارات مشابهة مع زميلك من جدول «To buy…».',null,'انظر المختبر: يبني لك حواراً لكل صنف.')},
  {h:'الاستماع',ref:'ص 54',html:au(41,'ص 54 — التمرين 2','استمع وتحقق من إجاباتك في اختبار المباني.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'معدود أم لا؟',title:'المعدود وغير المعدود',q:'هل تقول two cements أم two bags of cement؟',ref:'ص 55',
   art:art(`<g data-tip="screws: معدود، نقول ten screws."><rect x="40" y="70" width="120" height="90" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${[0,1,2,3,4].map(i=>`<g transform="translate(${62+i*20},90)"><rect x="-3" y="0" width="6" height="40" fill="${C.mut}"/><rect x="-7" y="-4" width="14" height="6" rx="2" fill="${C.ink}"/></g>`).join('')}${TL(100,182,'screws',{fs:14,w:700})}</g>
    <g data-tip="cement: غير معدود، نعدّ الأكياس: two bags of cement."><path d="M210 80 h100 l-8 90 h-84z" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(260,130,'CEMENT',{fs:13,w:700})}${TL(260,192,'a bag of cement',{fs:13,w:700})}</g>
    <g data-tip="How many مع المعدود، و How much مع غير المعدود.">${TL(100,250,'How many?',{fs:16,w:700,c:C.blue})}${TL(260,250,'How much?',{fs:16,w:700,c:C.red})}</g>`,'براغٍ معدودة وكيس أسمنت غير معدود'),
   cap:'المعدود والغير معدود. مرّر المؤشر على كل منهما.',
   side:[{tip:`نسأل: ${e('Is it countable?')} هل له جمع؟ ${e('screw → screws')} نعم. ${e('cement')} لا.`}],
   body:[{widget:(el,B)=>N.sort(el,B,{intro:'صنّف كل كلمة:',cats:['معدود','غير معدود'],items:[['bolt',0,'bolt → bolts.'],['oil',1,'نقول two litres of oil.'],['bottle',0,'bottle → bottles.'],['sand',1,'نقول a bag of sand.'],['nail',0,'nail → nails.'],['concrete',1,'نقول 150,000 m³ of concrete.']]}),title:'مختبر مصغّر: صنّف'}]},
  {st:2,short:'How many / much',title:'السؤال عن الكمية',q:'أيهما تقول: How many paint أم How much paint؟',ref:'ص 55',
   art:art(`<g data-tip="How many + اسم معدود بالجمع"><rect x="30" y="80" width="300" height="60" rx="12" fill="${C.paper}" stroke="${C.blue}" stroke-width="3"/>${TL(180,117,'How many nuts do you need?',{fs:16,w:700})}</g>
    <g data-tip="How much + اسم غير معدود"><rect x="30" y="180" width="300" height="60" rx="12" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(180,217,'How much oil do you need?',{fs:16,w:700})}</g>`,'سؤالان عن الكمية'),
   cap:'القالبان. مرّر المؤشر على كل سؤال.',
   side:[{tip:`بعد ${e('How many')} يأتي الجمع دائماً: ${e('How many screws')}، لا ${e('How many screw')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الكلمة الصحيحة:',items:[
     {s:'___ tubes of glue do you need?',o:['How many','How much'],a:0,why:'tubes معدودة.'},
     {s:'___ cement do you need?',o:['How many','How much'],a:1,why:'cement غير معدود.'},
     {s:'Do you have ___ bolts?',o:['any','a','much'],a:0,why:'في السؤال: any.'},
     {s:'I need ___ white paint.',o:['a','some','many'],a:1,why:'في الطلب الإيجابي مع غير المعدود: some.'}]}),title:'مختبر مصغّر: املأ الفراغ'}]},
  {st:3,short:'العبوات',title:'العبوات: tin, tube, bag, packet',q:'كيف تطلب دهاناً؟ وكيف تطلب غراءً؟',ref:'ص 55',
   art:art(`${[['tin','paint',70,C.mut],['tube','glue',150,C.red],['bag','cement',230,C.yel],['packet','nails',300,C.grn]].map(([u,m,x,c])=>`<g data-tip="a ${u} of ${m}"><rect x="${x-30}" y="120" width="56" height="${u==='tube'?24:70}" rx="${u==='tin'?6:3}" fill="${c}" stroke="${C.ink}" stroke-width="2.5"/>${TL(x-2,220,u,{fs:14,w:700})}${TL(x-2,240,m,{fs:12})}</g>`).join('')}`,'أربع عبوات: tin و tube و bag و packet'),
   cap:'أربع عبوات. مرّر المؤشر على كل واحدة.',
   side:[{tip:`نقول ${e('six large tins of paint')} و ${e('two tubes of superglue')} و ${e('twenty bags of cement')} و ${e('two packets of 50 nails')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر العبوة المناسبة:',cases:[
     {q:'Three ___ of superglue, please.',opts:[['tubes',1,'الغراء يباع في أنابيب.'],['bags',0,''],['tins',0,'']]},
     {q:'We need forty ___ of cement.',opts:[['packets',0,''],['bags',1,'الأسمنت يباع في أكياس.'],['tubes',0,'']]},
     {q:'Two large ___ of black paint, please.',opts:[['tins',1,'الدهان يباع في علب معدنية.'],['tubes',0,''],['packets',0,'']]}]}),title:'مختبر مصغّر: اختر العبوة'}]},
  {st:4,short:'أسئلة عن مبنى',title:'أسئلة شائعة عن مبنى عالٍ',q:'ما السؤال الذي جوابه «It has 60 storeys»؟',ref:'ص 54',
   art:art(`<g data-tip="How high is it? — الارتفاع"><rect x="140" y="40" width="80" height="240" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${[...Array(10)].map((_,i)=>`<line x1="140" x2="220" y1="${60+i*22}" y2="${60+i*22}" stroke="${C.mut}"/>`).join('')}</g>
    <g data-tip="How many storeys does it have? — عدد الطوابق">${arrowS(240,60,240,270,C.blue,2.5,8)}${TL(290,170,'storeys',{fs:13,w:700,c:C.blue})}</g>
    <g data-tip="What's the footprint of the building? — مساحة القاعدة"><rect x="130" y="280" width="100" height="10" fill="${C.yel}" stroke="${C.ink}"/>${TL(80,292,'footprint',{fs:12,w:700})}</g>`,'مبنى عالٍ: الارتفاع والطوابق ومساحة القاعدة'),
   cap:'مبنى من رسمنا. مرّر المؤشر على أجزائه.',
   side:[{tip:`أسئلة المواصفات عن مبنى: ${e('How high is it? · How many storeys does it have? · What is it made of? · How much steel is in it?')}`}],
   body:[{html:dl([['Visitor','How high is the new tower?'],['Guide',"It's about 320 metres high."],['Visitor','How many storeys does it have?'],['Guide','It has 72 storeys.'],['Visitor','What is it made of?'],['Guide',"Steel, glass and reinforced concrete."]])+'<p class="pk-ill">حوار جديد من عندنا عن برج افتراضي.</p>'},
    {widget:(el,B)=>N.cases(el,B,{intro:'اختر السؤال المناسب لكل جواب:',cases:[
     {q:'It has 60 storeys.',opts:[['How many storeys does it have?',1,''],['How much storeys does it have?',0,'storeys معدودة: How many.'],['How high is it?',0,'']]},
     {q:'About 40,000 tonnes of steel.',opts:[['How many steel is in it?',0,'steel غير معدود.'],['How much steel is in it?',1,'']]}]}),title:'مختبر مصغّر: السؤال والجواب'}]},
  {recap:['المعدود له جمع (screw → screws) ونعدّه بالأرقام؛ غير المعدود (cement, oil, paint) نعدّ عبواته.','How many + جمع معدود، How much + غير معدود.','any في السؤال والنفي، some في الطلب الإيجابي.','العبوات: a tin of paint، a tube of glue، a bag of cement، a packet of nails.']}
 ],
 lab:lab72,
 examples:[
  {title:'مثال 1: سؤال عن كمية مسامير',ref:'ص 55',q:`<p>زبون يريد مسامير. كوّن سؤال البائع عن الكمية.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e('nail')} معدود، والجمع ${e('nails')}.`},{t:`الخطوة 2: مع المعدود ${e('How many')} والاسم بالجمع.`},{t:`الخطوة 3: ${e('How many nails do you need?')}`,final:true}]},
  {title:'مثال 2: طلب أسمنت',ref:'ص 55',q:`<p>اطلب عشرين كيس أسمنت أبيض.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e('cement')} غير معدود، فنعدّ الأكياس ${e('bags')}.`},{t:`الخطوة 2: الرقم ثم العبوة ثم ${e('of')} ثم النوع والاسم.`},{t:`الخطوة 3: ${e('Twenty bags of white cement, please.')}`,final:true}]},
  {title:'مثال 3: سؤال «هل عندك؟»',ref:'ص 55',q:`<p>اسأل البائع إن كان عنده غراء.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: سؤال فنستعمل ${e('any')}.`},{t:`الخطوة 2: ${e('glue')} غير معدود فلا جمع.`},{t:`الخطوة 3: ${e('Do you have any glue?')}`,final:true}]}
 ],
 quiz:[
  {q:'Which word is uncountable?',o:['screw','bottle','cement','nail'],c:2,e:'cement لا جمع له.'},
  {q:'___ litres of oil do you need?',o:['How much','How many','How','What'],c:1,e:'litres معدودة (جمع).'},
  {q:'___ concrete is in the building?',o:['How many','How much','How long','What many'],c:1,e:'concrete غير معدود.'},
  {q:'Do you have ___ nuts?',o:['a','much','any','one'],c:2,e:'في السؤال: any.'},
  {q:'الطريقة الصحيحة لطلب دهان:',o:['two paints','two tins of paint','two paint','two tin of paints'],c:1,e:'نعدّ العبوات مع غير المعدود.'},
  {q:'storey معناها:',o:['قصة','طابق','مخزن','سلّم'],c:1,e:'storey = طابق.'},
  {q:'السؤال المناسب للجواب «Black»:',o:['What size?','What colour?','How many?','What kind of size?'],c:1,e:'الجواب لون.'}
 ]
});

/* =================== 7.3 Future projects =================== */
/* مشروع افتراضي (من عندنا): خط مترو جديد — المراحل [المهمة، الفعل، البداية، النهاية] */
const PLAN=[['lay the foundations','lay',2026,2026],['dig the tunnels','dig',2027,2028],['build the stations','build',2028,2029],['lay the tracks','lay',2029,2029],['test the trains','test',2030,2030],['open the line','open',2031,2031]];
const Y0=2026,Y1=2031;
function lab73(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">جدول مشروع مترو جديد (افتراضي)</h3>
  <p class="sub">مبني على التمرين 6 ص 57، بمشروع جديد من عندنا. حرّك السنة لترى ماذا سيحدث فيها، واختر مرحلة لترى السؤال والجواب بـ <span class="en">will</span>.</p>
  <div id="gt"></div>
  ${K.sl('gy','السنة',Y0,Y1,1,2028)}
  <div id="gyo"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">سؤال وجواب</h3>
  <select class="ph-sel" id="gs">${PLAN.map((p,i)=>`<option value="${i}">${p[0]}</option>`).join('')}</select>
  <div id="gso"></div>
 </div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اجعل السنة 2028: كم مرحلة ستعمل في الوقت نفسه؟</li>
  <li>اختر «dig the tunnels»: لاحظ <span class="en">We'll start in … and finish in …</span>.</li>
  <li>قل جملة نفي: <span class="en">They won't open the line in 2029. They'll open it in 2031.</span></li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);
 const W=440,H=PLAN.length*30+34,x=y=>110+(y-Y0)/(Y1-Y0+1)*(W-120);
 const gantt=yy=>`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="جدول زمني للمشروع">${[...Array(Y1-Y0+1)].map((_,i)=>`<text x="${x(Y0+i)+((W-120)/(Y1-Y0+1))/2}" y="16" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="var(--mono)">${Y0+i}</text>`).join('')}
  ${PLAN.map((p,i)=>`<text x="104" y="${42+i*30}" text-anchor="end" font-size="12" fill="var(--fg)" direction="ltr">${p[0]}</text><rect x="${x(p[2])}" y="${28+i*30}" width="${x(p[3]+1)-x(p[2])-2}" height="18" rx="4" fill="${yy>=p[2]&&yy<=p[3]?'var(--live)':'var(--blue-soft)'}" stroke="var(--blue)"/>`).join('')}
  <rect x="${x(yy)}" y="22" width="${(W-120)/(Y1-Y0+1)}" height="${H-24}" fill="none" stroke="var(--stop)" stroke-width="2" stroke-dasharray="4 3"/></svg>`;
 const yr=()=>{const y=+$('#gy').value;$('#gy-v').textContent=y;$('#gt').innerHTML=gantt(y);
  const now=PLAN.filter(p=>y>=p[2]&&y<=p[3]);
  $('#gyo').innerHTML=now.length?eb(now.map(p=>`In ${y}, they'll ${p[0]}.`)):'<p class="pk-ill">لا مرحلة في هذه السنة.</p>'};
 const one=()=>{const p=PLAN[+$('#gs').value];
  $('#gso').innerHTML=dl([['Presenter',`When will you ${p[0]}?`],['Engineer',p[2]===p[3]?`We'll ${p[0]} in ${p[2]}.`:`We'll start in ${p[2]} and finish in ${p[3]}.`],['Presenter',`Will you ${p[0]} in ${p[2]-1}?`],['Engineer',`No, we won't. We'll ${p[0]} in ${p[2]}.`]])};
 $('#gy').addEventListener('input',yr);$('#gs').onchange=one;yr();one();
}

const VOC73=[['project','مشروع',''],['future','مستقبل',''],['predict','يتوقّع',''],['complete / completion','يُنجز / الإنجاز',''],['schedule','جدول زمني',''],['tube','أنبوب ضخم (نفق)','في درس النقل: نفق أنبوبي'],['tunnel','نفق',''],['MagLev (magnetic levitation)','الرفع المغناطيسي','قطار يطفو فوق مسار مغناطيسي'],['track','مسار (سكة)',''],['power supply','مصدر الطاقة',''],['vacuum','فراغ (خلاء من الهواء)',''],['foundations','الأساسات','lay foundations = يضع الأساسات'],['attach','يُثبّت / يربط',''],['fibreglass','ألياف زجاجية','']];

B.lesson({
 id:'u7-l3',unit:7,order:3,pages:'56–57',
 title:'Future projects — مشاريع المستقبل',
 summary:'التوقع بـ will و won\'t، والسؤال بـ When will…? و Will…? وأجوبته القصيرة، وجدول مواصفات مشروع مستقبلي، وجدول تنفيذ المشروع بالسنوات.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 56–57',html:`<ol><li>تتوقع حقيقة أو حدثاً في المستقبل بـ ${e("will / 'll / won't")}.</li><li>تسأل ${e('When will…?')} و ${e('Will…?')} وتجيب باختصار.</li><li>تقرأ مواصفات مشروع لم يُبنَ بعد، وتحوّلها إلى جدول.</li><li>تتكلم عن جدول تنفيذ مشروع بالسنوات.</li></ol>`},
  {h:'كلمات الدرس',ref:'ص 56–57',html:vt(VOC73)},
  {h:'will و won\'t للتوقع',ref:'ص 56',html:`<p>للتوقع في المستقبل: الفاعل + ${e('will')} (أو ${e("'ll")}) + الفعل في صورته الأصلية. والنفي ${e("won't")} (= ${e('will not')}):</p>
   ${eb(["The engineers <b>will</b> finish the tunnel in 2035.","They<b>'ll</b> use steel and concrete.","The trains <b>won't</b> use diesel."])}
   <p>السؤال: ${e('When will they build it?')} والسؤال بنعم/لا: ${e('Will they build it in 2035?')} — ${e("Yes, they will. / No, they won't.")}</p>`},
  {note:'<b>توضيح للمتدرب:</b> بعد <span class="en">will</span> لا نضيف <span class="en">s</span> ولا <span class="en">to</span>: نقول <span class="en">It will connect</span> لا <span class="en">It will connects</span> ولا <span class="en">It will to connect</span>.'},
  {h:'تمارين الكتاب',ref:'ص 56–57',html:
   bk(1,'ص 56','مع زميلك: ما هذه المركبة في الصورة؟ وكيف تتحرك؟',null)+
   bk(3,'ص 56','اعترض على كل جملة من الست مستعملاً الكلمة بين القوسين، مثل المثال تحت التمرين.',["They won't start the tube in 2020. They'll start it in 2080.","It won't be under the Pacific Ocean. It'll be under the Atlantic.","It won't connect Britain with Europe. It'll connect Britain with the USA.","It won't use diesel. It'll use magnetism.","It won't contain compressed air. It'll contain a vacuum.","They won't travel at 11,000 km/h. They'll travel at 8000 km/h."])+
   bk(4,'ص 57','اقرأ المقابلة وكوّن جدول مواصفات للجسر بالكلمات المعطاة.',['completion date: around 2030','length: almost 15 km','spans: two, each 4800 m long','pylons: three, steel, 1000 m high','piers: concrete','deck: fibreglass (very light and strong)'])+
   bk(5,'ص 57','مع زميلك: اسأل وأجب عن مواصفات الجسر (How long will…? It will be…).',null)+
   bk(6,'ص 57','مثّل مقابلة بين مذيع ومهندس عن جدول تنفيذ الجسر (When will you…?).',['lay foundations: 2024–2025','build piers: start in 2026, finish in 2027','put pylons on piers: 2028','attach cables to pylons: 2029','make deck: 2026–2029','fix deck to cables: 2030–2031','build roads: 2031–2032','open bridge: 2032'],'قراءتنا لألوان الجدول في الصفحة؛ تحقق منها في كتابك.')+
   bk(7,'ص 57','كيف سيتغير العالم في العشرين سنة القادمة؟ (تقنياً واجتماعياً وسياسياً وقانونياً)',null)},
  {h:'الاستماع',ref:'ص 56',html:au(42,'ص 56 — التمرين 2','استمع لمقابلة إذاعية وأكمل جدول مواصفات أنبوب الماجليف عبر الأطلسي.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'will / won\'t',title:'التوقع بـ will و won\'t',q:'كيف تقول إن القطار سيستعمل المغناطيس وليس الديزل؟',ref:'ص 56',
   art:art(`<g data-tip="will + الفعل الأصلي: The train will use magnetism."><rect x="30" y="90" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,124,'It will use magnetism.',{fs:16,w:700})}</g>
    <g data-tip="won't = will not"><rect x="30" y="180" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(180,214,"It won't use diesel.",{fs:16,w:700})}</g>`,'جملتان: will use magnetism و won\'t use diesel'),
   cap:'الإثبات والنفي. مرّر المؤشر على كل جملة.',
   side:[{tip:`القالب: ${e("subject + will / won't + verb")}. والاختصار ${e("'ll")}: ${e("They'll build it.")}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الصيغة الصحيحة:',items:[
     {s:'The new tunnel will ___ two cities.',o:['connect','connects','to connect'],a:0,why:'بعد will: الفعل الأصلي.'},
     {s:"The trains ___ use diesel. They'll use electricity.",o:["won't","willn't","don't will"],a:0},
     {s:'___ they finish the bridge in 2030?',o:['Will','Do','Are'],a:0,why:'سؤال المستقبل يبدأ بـ Will.'}]}),title:'مختبر مصغّر: will'}]},
  {st:2,short:'اعترض',title:'الاعتراض على توقع خاطئ',q:'أحدهم قال: «They\'ll open it in 2028». والصحيح 2031. ماذا تقول؟',ref:'ص 56',
   art:art(`<g data-tip="نفي الخطأ أولاً: They won't open it in 2028."><rect x="30" y="80" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(180,114,"They won't open it in 2028.",{fs:15,w:700})}</g>
    <g data-tip="ثم الصحيح: They'll open it in 2031."><rect x="30" y="180" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,214,"They'll open it in 2031.",{fs:15,w:700})}</g>${arrowS(180,140,180,174,C.ink,3)}`,'نفي ثم تصحيح'),
   cap:'خطوتا الاعتراض. مرّر المؤشر على كل خطوة.',
   side:[{tip:'نعترض بجملتين: <b>ننفي</b> الخطأ بـ <span class="en">won\'t</span>، ثم <b>نصحّح</b> بـ <span class="en">\'ll</span>.'}],
   body:[{widget:(el,B)=>N.typ(el,B,{intro:'اعترض على كل جملة (أمثلة جديدة):',items:[
     {q:`${e("The bridge will be 5 km long.")} (8 km)`,a:["It won't be 5 km long. It'll be 8 km long.","The bridge won't be 5 km long. It'll be 8 km long.","It won't be 5 km long. It will be 8 km long."]},
     {q:`${e("They'll use wood.")} (steel)`,a:["They won't use wood. They'll use steel.","They won't use wood. They will use steel."]}]}),title:'مختبر مصغّر: اعترض'}]},
  {st:3,short:'جدول التنفيذ',title:'جدول تنفيذ مشروع',q:'كيف تسأل متى سيبنون الركائز؟ وكيف تجيب إذا كانت المرحلة سنتين؟',ref:'ص 57',
   art:art(`${[['foundations',0,2],['piers',2,2],['deck',3,3],['open',6,1]].map(([t,s,d],i)=>`<g data-tip="${t}: ${2026+s}${d>1?'–'+(2026+s+d-1):''}">${TL(70,96+i*44,t,{fs:12,w:700})}<rect x="${120+s*28}" y="${82+i*44}" width="${d*28-3}" height="20" rx="4" fill="${[C.yel,C.red,C.grn,C.blue][i]}" stroke="${C.ink}"/></g>`).join('')}
    ${TL(180,270,"We'll start in 2028 and finish in 2029.",{fs:13,w:700})}`,'جدول زمني بأربع مراحل'),
   cap:'جدول زمني مختصر من رسمنا. مرّر المؤشر على كل مرحلة.',
   side:[{tip:`السؤال: ${e('When will you build the piers?')} والجواب لمرحلة طويلة: ${e("We'll start in 2028 and finish in 2029.")}`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر الجواب المناسب:',cases:[{q:'When will you lay the foundations? (2026–2027)',opts:[["We'll start in 2026 and finish in 2027.",1,''],["We lay them in 2026.",0,'نحتاج will للمستقبل.'],["We'll started in 2026.",0,'بعد will الفعل الأصلي.']]}]}),title:'مختبر مصغّر: متى؟'}]},
  {recap:["will / 'll + الفعل الأصلي للتوقع، و won't للنفي.","السؤال: When will …? و Will …? — Yes, they will. / No, they won't.","نعترض بجملتين: They won't … They'll ….","جدول التنفيذ: We'll start in … and finish in …."]}
 ],
 lab:lab73,
 examples:[
  {title:'مثال 1: توقع',ref:'ص 56',q:`<p>قل إن المهندسين سيكملون النفق عام 2035.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: الفاعل The engineers.'},{t:`الخطوة 2: ${e('will')} + الفعل الأصلي ${e('complete')}.`},{t:`الخطوة 3: ${e('The engineers will complete the tunnel in 2035.')}`,final:true}]},
  {title:'مثال 2: سؤال When',ref:'ص 57',q:`<p>اسأل المهندس متى سيبنون الطرق.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: أداة السؤال ${e('When')}.`},{t:`الخطوة 2: ثم ${e('will')} ثم الفاعل ${e('you')} ثم الفعل.`},{t:`الخطوة 3: ${e('When will you build the roads?')}`,final:true}]},
  {title:'مثال 3: جواب قصير',ref:'ص 56',q:`<p>أجب بالنفي: ${e('Will the tube be under the Pacific?')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الجواب القصير المنفي ${e("No, it won't.")}`},{t:'الخطوة 2: نضيف الصحيح إن عرفناه.'},{t:`الخطوة 3: ${e("No, it won't. It'll be under the Atlantic.")}`,final:true}]}
 ],
 quiz:[
  {q:'The bridge will ___ Europe with Africa.',o:['connects','connect','connecting','to connect'],c:1,e:'بعد will: الفعل الأصلي.'},
  {q:"won't = ",o:['want not','will not','was not','would not'],c:1,e:"won't اختصار will not."},
  {q:'___ they finish the tunnel in 2030?',o:['Do','Will','Are','Did'],c:1,e:'سؤال عن المستقبل.'},
  {q:'الجواب القصير المنفي لـ Will they use diesel?',o:["No, they don't.","No, they won't.","No, they willn't.","No, won't they."],c:1,e:"No, they won't."},
  {q:'When will you build the piers? (2026–2027)',o:["We'll start in 2026 and finish in 2027.","We start 2026 finish 2027.","We'll build in 2026 to finishing.","We built them in 2026."],c:0,e:'start … and finish ….'},
  {q:'foundations معناها:',o:['النوافذ','الأساسات','الأبراج','الكوابل'],c:1,e:'foundations = الأساسات.'},
  {q:'vacuum معناها:',o:['فراغ خالٍ من الهواء','هواء مضغوط','ماء','مغناطيس'],c:0,e:'vacuum = فراغ.'}
 ]
});
})(PLCBOOK);

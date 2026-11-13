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

/* رسوم العبوات: نفس الرسم في الشرح وفي المختبر */
const PKD={
 paint:{c:[72,165],g:`<ellipse cx="72" cy="128" rx="34" ry="9" fill="#cfd4d6" stroke="${C.ink}" stroke-width="2"/>
  <path d="M38 128 V196 a34 9 0 0 0 68 0 V128" fill="#b9c0c3" stroke="${C.ink}" stroke-width="2"/>
  <path d="M38 150 a34 9 0 0 0 68 0 M38 174 a34 9 0 0 0 68 0" fill="none" stroke="#8d969a" stroke-width="1.5"/>
  <ellipse cx="72" cy="128" rx="26" ry="6" fill="#e07b39"/>
  <path d="M60 131 q-2 14 2 22 q4-8 2-22z" fill="#e07b39"/>`},
 glue:{c:[150,172],g:`<g transform="rotate(-35 150 175)">
   <path d="M128 150 h44 l-4 70 h-36 z" fill="#f3f1ec" stroke="${C.ink}" stroke-width="2"/>
   <rect x="126" y="214" width="48" height="8" fill="#dcd8cf" stroke="${C.ink}" stroke-width="1.5"/>
   <path d="M128 222 h44 M128 226 h44" stroke="${C.ink}" stroke-width="1"/>
   <path d="M140 150 h20 l-3 -12 h-14 z" fill="#d8d4ca" stroke="${C.ink}" stroke-width="1.5"/>
   <rect x="142" y="124" width="16" height="14" rx="2" fill="${C.red}" stroke="${C.ink}" stroke-width="1.5"/>
   <path d="M134 168 h32 M134 176 h24" stroke="${C.blue}" stroke-width="3"/>
  </g>`},
 cement:{c:[246,165],g:`<path d="M212 120 q34 -8 64 0 l6 92 q-38 10 -76 0 z" fill="#e6c76a" stroke="${C.ink}" stroke-width="2"/>
  <path d="M212 120 q34 6 64 0" fill="none" stroke="${C.ink}" stroke-width="1.5"/>
  <path d="M220 124 l-4 -8 m12 9 l-2 -9 m14 9 l0 -9 m14 9 l2 -9 m12 8 l4 -8" stroke="${C.ink}" stroke-width="1.5"/>
  <rect x="222" y="150" width="46" height="30" rx="3" fill="#fff8e6" stroke="${C.ink}" stroke-width="1.2"/>
  ${TL(245,170,'CEMENT',{fs:9,w:700})}`},
 nails:{c:[319,166],g:`<path d="M296 118 h46 v96 h-46 z" fill="#7fb36a" stroke="${C.ink}" stroke-width="2"/>
  <path d="M296 118 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 M296 214 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6" fill="none" stroke="${C.ink}" stroke-width="1.5"/>
  <rect x="304" y="140" width="30" height="40" rx="3" fill="#f4f8ef" stroke="${C.ink}" stroke-width="1.2"/>
  <path d="M312 148 v22 m-3 -22 h6 M320 148 v22 m-3 -22 h6 M328 148 v22 m-3 -22 h6" stroke="${C.ink}" stroke-width="1.6"/>`},
};
const pkd=(k,x,y,sc)=>`<g transform="translate(${x} ${y}) scale(${sc}) translate(${-PKD[k].c[0]} ${-PKD[k].c[1]})">${PKD[k].g}</g>`;
/* ===== مختبرات «شرح القاعدة» 7.2: يختار المتدرب فتتكوّن الجملة بقطع ملونة ويتغير الرسم ===== */
const NOUNS72={screw:{c:true,pl:'screws',ar:['برغي','براغٍ'],ic:'scr'},nail:{c:true,pl:'nails',ar:['مسمار','مسامير'],ic:'nail'},bottle:{c:true,pl:'bottles',ar:['زجاجة','زجاجات'],ic:'bot'},
 cement:{c:false,ar:'أسمنت',ic:'cem',box:'bags'},sand:{c:false,ar:'رمل',ic:'sand',box:'bags'},oil:{c:false,ar:'زيت',ic:'oil',box:'litres'},paint:{c:false,ar:'دهان',ic:'pnt',box:'tins'}};
const ico72=(k,x,y)=>({scr:`<g transform="translate(${x} ${y})"><rect x="-9" y="-30" width="18" height="7" rx="2" fill="${C.ink}"/><path d="M-3 -23 V12 L0 18 L3 12 V-23" fill="#9aa3a0" stroke="${C.ink}" stroke-width="1.5"/><path d="M-5 -14 L5 -11 M-5 -6 L5 -3 M-5 2 L5 5" stroke="${C.ink}" stroke-width="1.2"/></g>`,
 nail:`<g transform="translate(${x} ${y})"><rect x="-8" y="-30" width="16" height="5" rx="2" fill="${C.ink}"/><path d="M-2 -25 V14 L0 20 L2 14 V-25" fill="#9aa3a0" stroke="${C.ink}" stroke-width="1.3"/></g>`,
 bot:`<g transform="translate(${x} ${y})"><rect x="-5" y="-30" width="10" height="9" fill="${C.ink}"/><path d="M-5 -21 Q-13 -14 -13 -4 V18 H13 V-4 Q13 -14 5 -21 Z" fill="#cfe6f5" stroke="${C.ink}" stroke-width="2"/></g>`,
 cem:`<g transform="translate(${x} ${y})"><path d="M-70 18 Q-50 -24 -10 -28 Q30 -24 50 18 Z" fill="#b9b8b1" stroke="${C.ink}" stroke-width="2"/><path d="M-40 4 q10 -6 20 0 M0 -8 q8 -5 16 0" stroke="#8d8c86" stroke-width="2" fill="none"/>${pkd('cement',95,-6,.42)}</g>`,
 sand:`<g transform="translate(${x} ${y})"><path d="M-75 18 Q-45 -20 0 -24 Q45 -20 75 18 Z" fill="#e8c37a" stroke="${C.ink}" stroke-width="2"/>${[[-40,4],[-20,-8],[0,2],[18,-12],[34,6],[-6,-16],[50,10],[-55,12]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="1.8" fill="#9a7633"/>`).join('')}<path d="M70 -30 l-30 40" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/><path d="M34 6 q-6 14 6 16 q12 -2 6 -14 z" fill="#9aa3a0" stroke="${C.ink}" stroke-width="1.5"/></g>`,
 oil:`<g transform="translate(${x} ${y})"><path d="M-30 -34 h18 v8 h-18 z" fill="${C.ink}"/><path d="M-36 -26 h30 l6 10 v34 h-42 v-34 z" fill="#f2c14e" stroke="${C.ink}" stroke-width="2"/><rect x="-32" y="-8" width="30" height="14" rx="2" fill="#fff8e6" stroke="${C.ink}" stroke-width="1"/>${TL(-17,3,'OIL',{fs:9,w:700})}<path d="M30 -10 q-10 14 0 20 q10 -6 0 -20 z" fill="#d99a1b" stroke="${C.ink}" stroke-width="1.5"/><path d="M10 18 q20 -6 40 0" stroke="#d99a1b" stroke-width="5" fill="none" stroke-linecap="round"/></g>`,
 pnt:`<g transform="translate(${x} ${y})">${pkd('paint',-40,0,.5)}<path d="M5 14 q20 -20 40 -6 q20 14 40 -4" stroke="#e07b39" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M78 -26 l-14 22" stroke="#8a5a2b" stroke-width="5" stroke-linecap="round"/><rect x="58" y="-6" width="12" height="10" rx="2" transform="rotate(33 64 0)" fill="#e07b39" stroke="${C.ink}" stroke-width="1.2"/></g>`})[k];
const scene72=(k,n)=>{const ic=NOUNS72[k].ic;let g='';if(!NOUNS72[k].c){g=ico72(ic,280,66)}else{const xs=n===1?[280]:n===3?[230,280,330]:[170,210,250,290,330,370,410];xs.forEach(x=>{g+=ico72(ic,x,70)})}
 return `<svg viewBox="0 0 560 110" aria-hidden="true"><rect x="0" y="0" width="560" height="110" rx="14" fill="${C.bg}"/>${g}</svg>`};
const LAB72A={title:'معدود أم غير معدود؟',w:(el,B)=>N.labB(el,B,{intro:'اختر اسماً ثم اختر الصيغة، وشاهد كيف تتكوّن الكلمة. الأخضر هو الاسم، والأصفر هو ما يأتي قبله.',
 controls:[{k:'n',label:'الاسم',opts:Object.keys(NOUNS72).map(k=>[k,k])},{k:'f',label:'الصيغة',opts:[['one','واحد'],['many','أكثر من واحد'],['num','مع رقم (3)'],['q','السؤال عن الكمية']]}],
 out:({n,f})=>{const x=NOUNS72[n];
  if(x.c){if(f==='one')return{svg:scene72(n,1),pieces:[['a','k','واحد'],[n,'n','اسم معدود مفرد']],say:'a '+n,ar:`${x.ar[0]} واحد.`,why:'الاسم المعدود المفرد يسبقه a (أو an إذا بدأ بصوت متحرك).'};
   if(f==='many')return{svg:scene72(n,7),pieces:[['some','k','بعض'],[x.pl,'n','اسم معدود جمع']],say:'some '+x.pl,ar:`بعض ال${x.ar[1]}.`,why:`المعدود له جمع: ${n} ← ${x.pl}، ويمكن أن يسبقه some عندما لا نذكر العدد.`};
   if(f==='num')return{svg:scene72(n,3),pieces:[['three','k','رقم'],[x.pl,'n','اسم معدود جمع']],say:'three '+x.pl,ar:`ثلاثة ${x.ar[1]}.`,why:'المعدود يأتي قبله رقم مباشرة، والاسم بعده بالجمع.'};
   return{svg:scene72(n,7),pieces:[['How many','q','كم عدد'],[x.pl,'n','جمع'],['do you need?','x','']],say:'How many '+x.pl+' do you need?',ar:`كم ${x.ar[0]} تحتاج؟`,why:'نسأل عن عدد المعدود بـ How many، والاسم بعدها بالجمع.'}}
  if(f==='one')return{svg:scene72(n),bad:`✘ لا نقول a ${n}: الاسم غير المعدود لا يسبقه a.`,pieces:[['some','k','شيء من'],[n,'n','اسم غير معدود']],say:'some '+n,ar:`شيء من ال${x.ar}.`,why:`نقول ${n} وحدها أو some ${n}.`};
  if(f==='many')return{svg:scene72(n),pieces:[['some','k','شيء من'],[n,'n','بلا s']],say:'some '+n,ar:`شيء من ال${x.ar}.`,why:`غير المعدود لا يُجمع: نقول some ${n} لا some ${n}s.`};
  if(f==='num')return{svg:scene72(n),bad:`✘ لا نقول three ${n}s: الاسم غير المعدود لا يأتي معه رقم.`,pieces:[['three','k','رقم'],[x.box,'q','العبوة تُجمع'],['of','x',''],[n,'n','المادة لا تُجمع']],say:`three ${x.box} of ${n}`,why:'الصحيح أن نعدّ العبوة: رقم + العبوة + of + المادة. وهذا ما يشرحه الجزء الثاني.'};
  return{svg:scene72(n),pieces:[['How much','q','كم كمية'],[n,'n','مفرد'],['do you need?','x','']],say:`How much ${n} do you need?`,ar:`كم تحتاج من ال${x.ar}؟`,why:'نسأل عن كمية غير المعدود بـ How much، والاسم بعدها مفرد.'}}})};
const BOX72={paint:['tin','tins','علبة','علب','دهان'],glue:['tube','tubes','أنبوب','أنابيب','غراء'],cement:['bag','bags','كيس','أكياس','أسمنت'],nails:['packet','packets','كيس','أكياس','مسامير']};
const NUM72={1:'one',2:'two',5:'five',20:'twenty'};
const pkg72=(m,n)=>{const d=n>5?5:n,w=78,x0=280-(d-1)*w/2;let g='';
 for(let i=0;i<d;i++)g+=pkd(m,x0+i*w,58,.6);
 return `<svg viewBox="0 0 560 116" aria-hidden="true"><rect x="0" y="0" width="560" height="116" rx="14" fill="${C.bg}"/>${g}${n>5?`<text x="${x0+(d-1)*w+40}" y="66" font-family="monospace" font-weight="700" font-size="22" fill="${C.ink}">… ×${n}</text>`:''}</svg>`};
const LAB72B={title:'ركّب الطلب بالعبوة',w:(el,B)=>N.labB(el,B,{intro:'اختر المادة والعدد، وشاهد العبوات وكيف تتكوّن الجملة. لاحظ أن العبوة هي التي تُجمع.',
 controls:[{k:'m',label:'المادة',opts:Object.keys(BOX72).map(k=>[k,k])},{k:'n',label:'العدد',opts:[['1','1'],['2','2'],['5','5'],['20','20']]}],
 out:({m,n})=>{n=+n;const b=BOX72[m],one=n===1;
  return{svg:pkg72(m,n),pieces:[[one?'a':NUM72[n],'k',one?'واحد':'العدد'],[one?b[0]:b[1],'q',one?'العبوة':'العبوة بالجمع'],['of','x',''],[m,'n',m==='nails'?'المحتوى':'المادة كما هي']],say:`${one?'a':NUM72[n]} ${one?b[0]:b[1]} of ${m}`,
   ar:one?`${b[2]} ${b[4]} واحد.`:`${n} من ${b[3]} ال${b[4]}.`,why:one?`مع العبوة الواحدة نقول a ${b[0]} of ${m}.`:`العبوة صارت ${b[1]} بالجمع، أما ${m} فلم تتغير.`}}})};
const LAB72C={title:'some أم any أم a؟',w:(el,B)=>N.labB(el,B,{intro:'اختر نوع الجملة ونوع الاسم، وشاهد الكلمة التي تناسبهما.',
 controls:[{k:'t',label:'نوع الجملة',opts:[['pos','مثبتة'],['neg','منفية'],['req','سؤال عرض أو طلب'],['q','سؤال عام']]},{k:'n',label:'الاسم',opts:[['nails','nails (جمع معدود)'],['cement','cement (غير معدود)'],['hammer','hammer (مفرد معدود)']]}],
 out:({t,n})=>{const one=n==='hammer',w=one?'a':(t==='pos'||t==='req'?'some':'any');
  const lbl=one?'مفرد معدود ← a':w==='some'?(t==='pos'?'مثبتة ← some':'عرض أو طلب ← some'):(t==='neg'?'منفية ← any':'سؤال عام ← any');
  const P={pos:[['I need','x','']],neg:[["We don't have",'x','نفي']],req:[['Can I have','x','طلب']],q:[['Do you have','x','سؤال']]}[t];
  const tail={pos:'.',neg:'.',req:', please?',q:'?'}[t];
  const ar={pos:'أحتاج',neg:'ليس عندنا',req:'هل يمكن أن آخذ',q:'هل عندكم'}[t];
  const sent=`${P[0][0]} ${w} ${n}${tail}`;
  return{pieces:[...P,[w,'k',lbl],[n+tail,'n',one?'مفرد':n==='nails'?'جمع':'غير معدود']],say:sent,ar:`${ar} ${{nails:'مسامير',cement:'أسمنت',hammer:'مطرقة'}[n]}${t==='req'||t==='q'?'؟':'.'}`,
   why:one?'المفرد المعدود يسبقه a في كل أنواع الجمل، ولا يأتي معه some ولا any.':{pos:'الجملة المثبتة تأخذ some.',neg:'الجملة المنفية تأخذ any.',req:'سؤال العرض أو الطلب يأخذ some، لأننا نتوقع «نعم».',q:'السؤال العام، الذي لا نعرف جوابه، يأخذ any.'}[t]}}})};
const QN72={bolts:['How many','Sixty, please.','معدود جمع'],screws:['How many','Two hundred.','معدود جمع'],oil:['How much','Fifteen litres.','غير معدود'],paint:['How much','Two tins.','غير معدود'],cement:['How much','Twenty bags.','غير معدود'],'tins of paint':['How many','Three.','عبوة تُعدّ']};
const LAB72D={title:'How many أم How much؟',w:(el,B)=>N.labB(el,B,{intro:'اختر ما تسأل عنه، وشاهد السؤال والجواب.',
 controls:[{k:'n',label:'تسأل عن',opts:Object.keys(QN72).map(k=>[k,k])}],
 out:({n})=>{const x=QN72[n];return{pieces:[[x[0],'q',x[0]==='How many'?'للمعدود':'لغير المعدود'],[n,'n',x[2]],['do you need?','x','']],say:`${x[0]} ${n} do you need? ${x[1]}`,
  ar:`الجواب: ${x[1]}`,why:x[0]==='How many'?`${n} تُعدّ، فنسأل بـ How many، والاسم بعدها بالجمع.`:`${n} لا يُعدّ، فنسأل بـ How much، والاسم بعدها مفرد.`}}})};
const R72=N.rule({title:'المعدود وغير المعدود، و some و any، و How many و How much',ref:'ص 55',
 intro:`في هذا الدرس تطلب مواد للورشة وتسأل عن كمياتها. ولكي تتكلم عن الكمية بشكل صحيح تحتاج أربعة أشياء مترابطة، نشرحها بالترتيب: أن تميّز الاسم المعدود من غير المعدود، ثم كيف تعدّ غير المعدود بالعبوات، ثم متى تستعمل some ومتى any، ثم كيف تسأل عن الكمية.`,
 parts:[
 {t:'المعدود وغير المعدود',short:'معدود أم لا؟',old:[1],q:'هل تقول two cements أم two bags of cement؟',ref:'ص 55',
  lead:`بعض الأشياء التي نطلبها في الورشة نعدّها بالحبة، مثل البراغي والمسامير، وبعضها لا نعدّه، مثل الأسمنت والزيت والدهان. والإنجليزية تعامل كل نوع بطريقة مختلفة في الجمع، وفي الكلمة التي تسبق الاسم، وفي السؤال عن الكمية؛ لذلك نبدأ بالتفريق بينهما.`,
  points:[`<b>الاسم المعدود</b> هو ما يمكن عدّه بالأرقام. يأتي بصيغة المفرد وبصيغة الجمع، ويمكن أن يسبقه ${e('a')} أو ${e('an')} أو رقم.<br>${e('a screw · an engineer · ten screws')}`,
   `<b>الاسم غير المعدود</b> هو ما لا يمكن عدّه بالأرقام، وغالباً يكون مادة أو سائلاً أو مسحوقاً. لا يُجمع، ولا يسبقه ${e('a')} ولا ${e('an')} ولا رقم.<br>${e('cement · oil · sand · paint')}`,
   `<b>للتمييز بينهما</b> اسأل نفسك: هل أقدر أقول «ثلاثة منه»؟<br>${e('three screws')}: نعم، إذن ${e('screw')} معدود.<br>${e('three cements')}: لا، إذن ${e('cement')} غير معدود.`,
   `<b>الكلمات غير المعدودة في هذا الدرس:</b> ${e('paint, oil, glue, cement, concrete, sand, steel')}`],
  grid:{head:['','screw (معدود)','cement (غير معدود)'],rows:[['المفرد','a screw','cement'],['الجمع','screws','لا يُجمع'],['مع رقم','ten screws','لا يأتي معه رقم'],['كمية غير محددة','some screws','some cement'],['السؤال عن الكمية','How many screws?','How much cement?']]},
  ex:['I need <b>a</b> screw.','I need <b>fifty</b> screws.','I need <b>some</b> cement.'],
  pairs:[['two cements','two bags of cement','cement غير معدود، فنعدّ الأكياس.'],['a sand','some sand','sand غير معدود، فلا يسبقه a.']],
  art:art(`<g data-tip="screws: معدود، نقول ten screws."><rect x="40" y="70" width="120" height="90" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${[0,1,2,3,4].map(i=>`<g transform="translate(${62+i*20},90)"><rect x="-3" y="0" width="6" height="40" fill="${C.mut}"/><rect x="-7" y="-4" width="14" height="6" rx="2" fill="${C.ink}"/></g>`).join('')}${TL(100,182,'screws',{fs:14,w:700})}</g>
    <g data-tip="cement: غير معدود، نعدّ الأكياس: two bags of cement."><path d="M210 80 h100 l-8 90 h-84z" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(260,130,'CEMENT',{fs:13,w:700})}${TL(260,192,'a bag of cement',{fs:13,w:700})}</g>
    <g data-tip="How many مع المعدود، و How much مع غير المعدود.">${TL(100,250,'How many?',{fs:16,w:700,c:C.blue})}${TL(260,250,'How much?',{fs:16,w:700,c:C.red})}</g>`,'براغٍ معدودة وكيس أسمنت غير معدود'),cap:'المعدود وغير المعدود. مرّر المؤشر على كل منهما.',labs:[LAB72A,{title:'صنّف',w:(el,B)=>N.sort(el,B,{intro:'صنّف كل كلمة:',cats:['معدود','غير معدود'],items:[['bolt',0,'bolt → bolts.'],['oil',1,'نقول two litres of oil.'],['bottle',0,'bottle → bottles.'],['sand',1,'نقول a bag of sand.'],['nail',0,'nail → nails.'],['concrete',1,'نقول 150,000 m³ of concrete.']]})}]},
 {t:'العبوات: كيف نعدّ غير المعدود؟',short:'العبوات',old:[3],q:'كيف تطلب دهاناً؟ وكيف تطلب غراءً؟',ref:'ص 55',
  lead:`الأسمنت لا يُعدّ، لكنك تحتاج في العمل أن تطلب منه كمية محددة. والحل أن تعدّ العبوة التي يوضع فيها، مثل الكيس أو العلبة أو الأنبوب.`,
  points:[`<b>القالب:</b> رقم + العبوة + ${e('of')} + المادة.<br>${e('twenty bags of cement')}`],
  subs:[{h:'العبوة هي التي تُجمع، والمادة تبقى مفردة',points:[`✔ نقول: ${e('two tins of paint')}`,`✘ ولا نقول: ${e('two tin of paints')}`]},
   {h:'لكل مادة عبوتها المعتادة',points:[`${e('a tin')}: علبة معدنية، للدهان والزيت.`,`${e('a tube')}: أنبوب يُعصر، للغراء.`,`${e('a bag')}: كيس كبير، للأسمنت والرمل.`,`${e('a packet')}: كيس أو علبة صغيرة مغلقة، للمسامير والبراغي.`]}],
  grid:{head:['العبوة','تُستعمل مع','مثال'],rows:[['a tin of','paint · oil','six tins of paint'],['a tube of','glue','two tubes of glue'],['a bag of','cement · sand','twenty bags of cement'],['a packet of','nails · screws','two packets of nails'],['a litre of','oil · water','fifteen litres of oil']]},
  html:`<p><small>(السطر الأخير a litre of إضافة من خارج الكتاب)</small> ونكتب ${e('15 L')} ونقرؤها ${e('fifteen litres')}.</p>`,
  pairs:[['two tin of paints','two tins of paint','نجمع العبوة (tins) لا المادة (paint).'],['three glues','three tubes of glue','glue غير معدود، فنعدّ الأنابيب.']],
  art:art(`
 <g data-tip="a tin of paint: علبة معدنية، للدهان والزيت." transform="translate(-22 0)">${PKD.paint.g}${TL(72,234,'a tin',{fs:13,w:700})}${TL(72,251,'of paint',{fs:11})}</g>
 <g data-tip="a tube of glue: أنبوب يُعصر، للغراء." transform="translate(-6 -14)">${PKD.glue.g}${TL(156,248,'a tube',{fs:13,w:700})}${TL(156,265,'of glue',{fs:11})}</g>
 <g data-tip="a bag of cement: كيس كبير، للأسمنت والرمل.">${PKD.cement.g}${TL(246,234,'a bag',{fs:13,w:700})}${TL(246,251,'of cement',{fs:11})}</g>
 <g data-tip="a packet of nails: علبة أو كيس صغير مغلق، للمسامير والبراغي." transform="translate(8 0)">${PKD.nails.g}${TL(319,234,'a packet',{fs:13,w:700})}${TL(319,251,'of nails',{fs:11})}</g>
`,'أربع عبوات: علبة دهان وأنبوب غراء وكيس أسمنت وكيس مسامير'),cap:'أربع عبوات من رسمنا. مرّر المؤشر على كل واحدة.',labs:[LAB72B,{title:'اختر العبوة',w:(el,B)=>N.cases(el,B,{intro:'اختر العبوة المناسبة:',cases:[
     {q:'Three ___ of superglue, please.',opts:[['tubes',1,'الغراء يباع في أنابيب.'],['bags',0,''],['tins',0,'']]},
     {q:'We need forty ___ of cement.',opts:[['packets',0,''],['bags',1,'الأسمنت يباع في أكياس.'],['tubes',0,'']]},
     {q:'Two large ___ of black paint, please.',opts:[['tins',1,'الدهان يباع في علب معدنية.'],['tubes',0,''],['packets',0,'']]}]})}]},
 {t:'some و any',short:'some / any',q:'Do you need some nails أم Do you need any nails؟',ref:'ص 55',
  lead:`كثيراً ما نطلب شيئاً أو نسأل عنه دون أن نذكر عدده بالضبط، كأن تقول «أحتاج مسامير» أو «هل عندكم أسمنت؟». هنا نستعمل ${e('some')} أو ${e('any')}، ومعناهما «بعض» أو «أي». ويأتيان مع الجمع المعدود (${e('nails')}) ومع غير المعدود (${e('cement')})، ويتحدد أيهما نستعمل حسب نوع الجملة.`,
  subs:[{h:'أولاً: في الجملة العادية (ليست سؤالاً)',points:[`<b>الجملة المثبتة</b> تأخذ ${e('some')}:<br>${e('I need some nails.')}<br>${e('We have some cement.')}`,`<b>الجملة المنفية</b> تأخذ ${e('any')}:<br>${e("We don't have any nails.")}<br>${e("There isn't any cement.")}`]},
   {h:'ثانياً: في السؤال',points:[`<b>العرض والطلب</b> يأخذان ${e('some')}، لأننا نتوقع أن يكون الجواب «نعم»:<br>عرض: ${e('Would you like some water?')}<br>طلب: ${e('Can I have some screws, please?')}`,`<b>السؤال العام</b> (لا نعرف الجواب) يأخذ ${e('any')}:<br>${e('Do you have any glue?')}<br>${e('Are there any bolts in the box?')}`]},
   {h:'وماذا عن المفرد المعدود؟',points:[`لا يأتي معه ${e('some')} ولا ${e('any')}، بل ${e('a')} أو ${e('an')} في كل الحالات:<br>${e("I need a hammer. · I don't have a hammer. · Do you have a hammer?")}`]}],
  grid:{head:['نوع الجملة','الكلمة','مثال'],rows:[['مثبتة','some','I need some oil.'],['منفية','any',"We don't have any sand."],['سؤال عرض أو طلب','some','Can I have some glue?'],['سؤال عام','any','Do you have any glue?']]},
  html:`<p><small>(الكتاب يذكر some في الطلب و any في السؤال، وأضفنا النفي والعرض والمفرد من خارج الكتاب)</small></p>`,
  pairs:[['I need some hammer.','I need a hammer.','hammer مفرد معدود، فيسبقه a.'],['Do you have some bolts?','Do you have any bolts?','سؤال عام لا نعرف جوابه، فنستعمل any.'],["We don't have some sand.","We don't have any sand.",'الجملة المنفية تأخذ any.']],
  labs:[LAB72C,{title:'اختر الصحيح',intro:'اختر الصحيح:',items:[
   {s:'I need ___ screws, please.',o:['some','any','a'],a:0,why:'جملة طلب مثبتة مع جمع: some.'},
   {s:'Do you have ___ glue?',o:['some','any','a'],a:1,why:'سؤال: any.'},
   {s:"We don't have ___ sand.",o:['some','any','a'],a:1,why:'نفي: any.'},
   {s:'Can I have ___ spanner?',o:['some','any','a'],a:2,why:'spanner مفرد معدود: a.'},
   {s:'I need ___ white paint.',o:['some','any','a'],a:0,why:'غير معدود في طلب مثبت: some.'}]}]},
 {t:'How many و How much',short:'How many / much',old:[2],q:'أيهما تقول: How many paint أم How much paint؟',ref:'ص 55',
  lead:`عند الشراء يسألك البائع عن الكمية التي تريدها، وتسأل أنت عنها كذلك. وكلمة السؤال تتغير حسب نوع الاسم الذي تسأل عنه.`,
  points:[`<b>${e('How many')}</b> للاسم المعدود، ويأتي الاسم بعدها بصيغة الجمع:<br>${e('How many bolts do you need?')}`,
   `<b>${e('How much')}</b> للاسم غير المعدود، ويأتي الاسم بعدها مفرداً:<br>${e('How much oil do you need?')}`,
   `<b>مع العبوات</b> نستعمل ${e('How many')}، لأن العبوة نفسها تُعدّ:<br>${e('How many tins of paint do you need?')}`,
   `<b>أسئلة أخرى في المحل:</b><br>${e('What size? · What colour? · What kind? · What type?')}`],
  grid:{head:['السؤال','يأتي بعده','مثال'],rows:[['How many','اسم معدود بالجمع','How many bolts?'],['How much','اسم غير معدود','How much oil?'],['How many','عبوة بالجمع','How many bags of cement?']]},
  ex:['How many bolts do you need? — Sixty, please.','How much oil do you need? — Fifteen litres.'],
  html:`<p><small>(إضافة من خارج الكتاب)</small> ونسأل عن السعر بـ ${e('How much')} أيضاً: ${e("How much is it? — It's 20 riyals.")}</p>`,
  pairs:[['How many screw?','How many screws?','بعد How many يأتي الاسم بالجمع.'],['How much nails?','How many nails?','nails معدودة، فنستعمل How many.']],
  art:art(`<g data-tip="How many + اسم معدود بالجمع"><rect x="30" y="80" width="300" height="60" rx="12" fill="${C.paper}" stroke="${C.blue}" stroke-width="3"/>${TL(180,117,'How many nuts do you need?',{fs:16,w:700})}</g>
    <g data-tip="How much + اسم غير معدود"><rect x="30" y="180" width="300" height="60" rx="12" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(180,217,'How much oil do you need?',{fs:16,w:700})}</g>`,'سؤالان عن الكمية'),cap:'القالبان. مرّر المؤشر على كل سؤال.',labs:[LAB72D,{title:'املأ الفراغ',w:(el,B)=>N.gaps(el,B,{intro:'اختر الكلمة الصحيحة:',items:[
     {s:'___ tubes of glue do you need?',o:['How many','How much'],a:0,why:'tubes معدودة.'},
     {s:'___ cement do you need?',o:['How many','How much'],a:1,why:'cement غير معدود.'},
     {s:'Do you have ___ bolts?',o:['any','a','much'],a:0,why:'في السؤال: any.'},
     {s:'I need ___ white paint.',o:['a','some','many'],a:1,why:'جملة طلب مثبتة مع اسم غير معدود: some.'}]})}]}
 ]});
B.lesson({
 id:'u7-l2',unit:7,order:2,pages:'54–55',
 title:'Quantities — الكميات',
 summary:'الاسم المعدود وغير المعدود، و some/any، والسؤال بـ How many و How much، وعبوات البيع (tin, tube, bag, packet)، وأسئلة المواصفات عن مبنى.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 54–55',html:`<ol><li>تفرّق بين الاسم <b>المعدود</b> ${e('screws')} و<b>غير المعدود</b> ${e('cement')}.</li><li>تسأل عن الكمية بـ ${e('How many')} و ${e('How much')}.</li><li>تطلب مواد من محل: الكمية والنوع والمقاس واللون والعبوة.</li><li>تقرأ أسئلة وأجوبة عن مواصفات مبنى عالٍ.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 54–55',html:vt(VOC72)},
  ...R72.theory,
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
  ...R72.stations,
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
  {recap:['المعدود يُجمع ويمكن أن يسبقه a أو an أو رقم (a screw، ten screws)؛ وغير المعدود لا يُجمع ولا يسبقه a ولا رقم (cement، oil).','نعدّ غير المعدود بعبوته، والعبوة هي التي تُجمع: two tins of paint، twenty bags of cement.','some في الجملة المثبتة وفي سؤال العرض أو الطلب؛ any في الجملة المنفية وفي السؤال العام.','How many + اسم معدود بالجمع، و How much + اسم غير معدود.']}
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
  {h:'جدول المفردات كاملاً',ref:'ص 56–57',html:vt(VOC73)},
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

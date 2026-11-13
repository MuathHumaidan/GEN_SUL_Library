/* الوحدة 10 — Safety: 10.1 Rules and warnings (ص 74–75) و 10.2 Safety hazards (ص 76–77) و 10.3 Investigations (ص 78–79) ومراجعة E (ص 80–83) */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,upd,ab,sp}=N;

/* =================== 10.1 Rules and warnings =================== */
/* لوحات من رسمنا: [المعرف، النوع، الرسم، القاعدة، النتيجة المحتملة] */
const SIGNS=[
 ['smoke','prohibition','🚬','Do not smoke here. / You mustn\'t smoke here.','You might start a fire.'],
 ['goggles','mandatory','🥽','Always wear safety goggles. / You must wear goggles.','You could injure your eyes.'],
 ['volt','warning','⚡','Danger. High voltage. Don\'t touch the cables.','You could get an electric shock.'],
 ['entry','prohibition','⛔','No entry. Never go through this door.','You might fall into the machine area.'],
 ['gloves','mandatory','🧤','You must wear safety gloves.','You might cut your hands.'],
 ['floor','warning','⚠','Warning. Slippery floor. Be careful.','You could slip and fall.']];
const TYPE={warning:['Warning sign','لوحة تحذير','مثلث أصفر بإطار أسود','There is a danger. Be careful.'],prohibition:['Prohibition sign','لوحة منع','دائرة حمراء بخط مائل على خلفية بيضاء','Do not do this.'],mandatory:['Mandatory action sign','لوحة إلزام','دائرة زرقاء برمز أبيض','You must do this.']};
const signSVG=(t,ic,sz)=>{sz=sz||70;const h=sz/2;
 if(t==='warning')return `<svg viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}" aria-hidden="true"><path d="M${h} 4 L${sz-4} ${sz-6} L4 ${sz-6}Z" fill="#F2C14E" stroke="#111" stroke-width="4"/><text x="${h}" y="${sz*0.72}" text-anchor="middle" font-size="${sz*0.36}">${ic}</text></svg>`;
 if(t==='prohibition')return `<svg viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}" aria-hidden="true"><circle cx="${h}" cy="${h}" r="${h-5}" fill="#fff" stroke="#C8302C" stroke-width="7"/><text x="${h}" y="${h+sz*0.13}" text-anchor="middle" font-size="${sz*0.38}">${ic}</text><line x1="${sz*0.2}" y1="${sz*0.2}" x2="${sz*0.8}" y2="${sz*0.8}" stroke="#C8302C" stroke-width="7"/></svg>`;
 return `<svg viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}" aria-hidden="true"><circle cx="${h}" cy="${h}" r="${h-3}" fill="#1F5FAE"/><text x="${h}" y="${h+sz*0.13}" text-anchor="middle" font-size="${sz*0.38}">${ic}</text></svg>`};
function lab101(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">ما نوع اللوحة؟</h3>
  <p class="sub">مبني على نص اللوحات ص 74. اختر الشكل واللون، واعرف نوع اللوحة ومعناها.</p>
  <div class="ph-row">${[['triangle','مثلث'],['circle','دائرة']].map(([k,l],i)=>`<button type="button" class="btn${i?'':' pri'}" data-sh="${k}">${l}</button>`).join('')}</div>
  <div class="ph-row">${[['yellow','أصفر وأسود'],['red','أحمر وأبيض'],['blue','أزرق وأبيض']].map(([k,l],i)=>`<button type="button" class="btn${i?'':' pri'}" data-co="${k}">${l}</button>`).join('')}</div>
  <div id="so"></div>
 </div>
 <div class="c6 panel"><h3 style="margin-top:0">اللوحة: القاعدة والنتيجة المحتملة</h3>
  <p class="sub">لوحات من رسمنا. اختر لوحة لترى القاعدة (must / mustn't / always / never) والنتيجة المحتملة (might / could).</p>
  <div class="ph-row">${SIGNS.map((s,i)=>`<button type="button" class="btn" data-sg="${i}" aria-label="${s[0]}" style="padding:4px">${signSVG(s[1],s[2],44)}</button>`).join('')}</div>
  <div id="go"></div>
 </div></div></div>`;
 const $=s=>el.querySelector(s);let sh='triangle',co='yellow';
 const draw=()=>{const t=sh==='triangle'&&co==='yellow'?'warning':sh==='circle'&&co==='red'?'prohibition':sh==='circle'&&co==='blue'?'mandatory':null;
  $('#so').innerHTML=t?`<div class="ph-row">${signSVG(t,t==='warning'?'!':t==='prohibition'?'✋':'👷',80)}</div><div class="pk-facts"><div class="hi"><span>النوع</span><b>${TYPE[t][0]}</b></div><div><span>بالعربي</span><b style="font-family:var(--font);direction:rtl;text-align:start">${TYPE[t][1]}</b></div></div>${eb(TYPE[t][3])}`:`<div class="pk-fb bad"><b>ليس من الأنواع الثلاثة في الكتاب.</b> التحذير مثلث أصفر، والمنع دائرة حمراء، والإلزام دائرة زرقاء.</div>`};
 el.querySelectorAll('[data-sh]').forEach(b=>b.onclick=()=>{sh=b.dataset.sh;el.querySelectorAll('[data-sh]').forEach(x=>x.classList.toggle('pri',x===b));draw()});
 el.querySelectorAll('[data-co]').forEach(b=>b.onclick=()=>{co=b.dataset.co;el.querySelectorAll('[data-co]').forEach(x=>x.classList.toggle('pri',x===b));draw()});
 el.querySelectorAll('[data-sg]').forEach(b=>b.onclick=()=>{const s=SIGNS[+b.dataset.sg];$('#go').innerHTML=`<div class="pk-facts"><div><span>النوع</span><b>${TYPE[s[1]][0]}</b></div></div>${eb(s[3].split(' / '))}<p class="pk-ill">النتيجة المحتملة:</p>${eb(s[4])}`});
 draw();el.querySelector('[data-sg]').click();
}
const VOC101=[['rule','قاعدة',''],['warning','تحذير',''],['safety sign','لوحة سلامة',''],['hazard','خطر (مصدر خطر)',''],['danger','خطر',''],['poison','سُمّ',''],['prohibition','منع',''],['mandatory','إلزامي',''],['hard hat','خوذة',''],['safety gloves / boots','قفازات / أحذية سلامة',''],['high-voltage','جهد عالٍ',''],['electric shock','صعقة كهربائية',''],['guard','واقٍ (حاجز حماية)','على المنشار أو الآلة'],['injure','يُصيب (يجرح)',''],['trap','يحبس (يعلق)','trap your hand in the gears'],['lighted match','عود ثقاب مشتعل','']];

/* ===== مختبرات «شرح القاعدة» 10.1 ===== */
const RA101={hat:['wear a hard hat','do','ارتدِ خوذة'],gloves:['wear gloves','do','ارتدِ قفازات'],touch:['touch the machine','dont','لا تلمس الآلة'],smoke:['smoke','dont','لا تدخّن'],run:['run in the workshop','dont','لا تركض في الورشة']};
const cap101=s=>s.replace(/^./,c=>c.toUpperCase());
const LAB101A={title:'ركّب قاعدة السلامة',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل وقوة القاعدة، وشاهد الصيغ الثلاث للأمر والمنع.',
 controls:[{k:'a',label:'الفعل',opts:Object.keys(RA101).map(k=>[k,RA101[k][0]])},{k:'f',label:'الصيغة',opts:[['imp','أمر بسيط'],['adv','always / never'],['must',"must / mustn't"]]}],
 out:({a,f})=>{const [v,t]=RA101[a],neg=t==='dont';
  const W={imp:neg?["Don't",'لا تفعل']:['','افعل'],adv:neg?['Never','أبداً لا']:['Always','دائماً'],must:neg?["You mustn't",'ممنوع']:['You must','يجب']}[f];
  const pieces=[...(W[0]?[[W[0],'k',W[1]]]:[]),[(W[0]?v:cap101(v))+'.','n','الفعل الأصلي']];
  return{pieces,say:`${W[0]?W[0]+' '+v:cap101(v)}.`,ar:RA101[a][2]+'.',why:`بعد ${W[0]||'بداية الجملة'} يأتي الفعل الأصلي. ${f==='must'?(neg?"mustn't = must not: منع قوي.":'must: إلزام قوي.'):f==='adv'?'always و never تقويان الأمر أو المنع.':'الأمر يبدأ بالفعل الأصلي، والمنع بـ Don\'t.'}`}}})};
const SG101={warn:['Warning sign','تحذير','There is a danger. Be careful.','Be careful. The floor is wet.'],proh:['Prohibition sign','منع','Do not do this.',"Do not smoke here."],mand:['Mandatory action sign','إلزام','You must do this.','You must wear a hard hat.'],safe:['Safe condition sign','حالة آمنة','This is safe. Go this way.','Fire exit. Go this way.']};
const sgsvg101=k=>{const I='#222';const g={warn:`<path d="M280 14 L340 116 H220 Z" fill="#F2C14E" stroke="${I}" stroke-width="6" stroke-linejoin="round"/><rect x="275" y="50" width="10" height="38" rx="3" fill="${I}"/><circle cx="280" cy="100" r="6" fill="${I}"/>`,
 proh:`<circle cx="280" cy="66" r="52" fill="#fff" stroke="#C8553D" stroke-width="12"/><rect x="262" y="56" width="40" height="10" rx="3" fill="${I}"/><path d="M243 30 L317 102" stroke="#C8553D" stroke-width="12"/>`,
 mand:`<circle cx="280" cy="66" r="52" fill="#3E7CB1"/><path d="M256 76 q24 -50 48 0 z M250 78 h60" stroke="#fff" stroke-width="6" fill="#fff"/>`,
 safe:`<rect x="210" y="22" width="140" height="88" rx="8" fill="#4F9D69"/><path d="M250 66 h50 M285 50 l18 16 l-18 16" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>`}[k];
 return `<svg viewBox="0 0 560 130" aria-hidden="true"><rect width="560" height="130" rx="14" fill="${C.bg}"/>${g}</svg>`};
const LAB101B={title:'اقرأ لوحة السلامة',w:(el,B)=>N.labB(el,B,{intro:'اختر نوع اللوحة، وشاهد شكلها ولونها ومعناها، ثم جملة تكتبها تحتها.',
 controls:[{k:'k',label:'اللوحة',opts:Object.keys(SG101).map(k=>[k,SG101[k][1]])}],
 out:({k})=>{const x=SG101[k];return{svg:sgsvg101(k),pieces:[[x[0],'q',x[1]],['=','x',''],[x[2],'k','معناها'],[x[3],'n','مثال']],say:`${x[0]}. ${x[3]}`,why:{warn:'مثلث أصفر بإطار أسود: يوجد خطر، فانتبه.',proh:'دائرة بإطار أحمر وخط مائل: ممنوع.',mand:'دائرة زرقاء: إلزام، يجب أن تفعل.',safe:'مستطيل أخضر: حالة آمنة، مثل مخرج الطوارئ (إضافة من خارج الكتاب).'}[k]}}})};
const HZ101={hot:['The surface is hot.','burn your hand','قد تحرق يدك'],laser:['Lasers.','injure your eyes','قد تؤذي عينيك'],wet:['The floor is wet.','slip','قد تنزلق'],blade:['The blade is sharp.','cut your fingers','قد تجرح أصابعك']};
const LAB101C={title:'التحذير ونتيجته: might و could',w:(el,B)=>N.labB(el,B,{intro:'اختر الخطر والكلمة، وشاهد جملتي التحذير.',
 controls:[{k:'h',label:'الخطر',opts:Object.keys(HZ101).map(k=>[k,k])},{k:'m',label:'الكلمة',opts:[['might','might'],['could','could']]}],
 out:({h,m})=>{const x=HZ101[h];return{pieces:[['Be careful.','x','تنبيه'],[x[0],'x','الخطر'],['You','x',''],[m,'k','قد (احتمال)'],[x[1]+'.','n','الفعل الأصلي']],say:`Be careful. ${x[0]} You ${m} ${x[1]}.`,ar:x[2]+'.',why:`${m} = «قد»، ويأتي بعدها الفعل الأصلي. و might و could هنا بمعنى واحد تقريباً.`}}})};
const R101=N.rule({title:'قواعد السلامة ولوحاتها وتحذيراتها',ref:'ص 74–75',
 intro:`نشرح لغة السلامة في ثلاث خطوات مرتبة: صيغ القاعدة (الأمر والمنع)، ثم أنواع لوحات السلامة ومعانيها، ثم ذكر النتيجة المحتملة للخطر بـ ${e('might')} و ${e('could')}.`,
 parts:[
 {t:'صيغ القاعدة: الأمر والمنع',short:'القواعد',old:[1],q:'كيف تكتب قاعدة «ممنوع لمس الآلة» بثلاث طرق؟',ref:'ص 75',
  lead:`في الورشة والموقع تُكتب قواعد السلامة بجمل قصيرة واضحة: ما يجب أن تفعله، وما يُمنع. ولكل منهما ثلاث صيغ تختلف في قوتها.`,
  subs:[{h:'ما يجب أن تفعله',points:[`<b>أمر بسيط</b> يبدأ بالفعل الأصلي: ${e('Wear a hard hat here.')}`,`<b>${e('Always')}</b> + الفعل الأصلي: ${e('Always wear a hard hat here.')}`,`<b>${e('You must')}</b> + الفعل الأصلي (أقواها): ${e('You must wear a hard hat here.')}`]},
   {h:'ما يُمنع',points:[`<b>${e("Do not / Don't")}</b> + الفعل الأصلي: ${e("Don't touch the machine.")}`,`<b>${e('Never')}</b> + الفعل الأصلي: ${e('Never touch the machine.')}`,`<b>${e("You must not / mustn't")}</b> + الفعل الأصلي: ${e("You mustn't touch the machine.")}`]}],
  points:[`<b>في كل الصيغ</b> يأتي بعد الكلمة الفعل الأصلي بلا ${e('s')} وبلا ${e('to')}.`],
  grid:{head:['','افعل ✓','لا تفعل ✗'],rows:[['أمر','Wear a hard hat.',"Don't touch it."],['always / never','Always wear a hard hat.','Never touch it.'],["must / mustn't",'You must wear a hard hat.',"You mustn't touch it."]]},
  pairs:[['You must to wear a hard hat.','You must wear a hard hat.','لا نضع to بعد must.'],["Don't touching the machine.","Don't touch the machine.","بعد Don't الفعل الأصلي."]],
  art:art(`<g data-tip="Wear a hard hat. / Always wear a hard hat. / You must wear a hard hat.">${signSVG('mandatory','⛑',120).replace('<svg ','<svg x="40" y="70" ')}</g><g data-tip="Don't touch. / Never touch. / You mustn't touch.">${signSVG('prohibition','✋',120).replace('<svg ','<svg x="200" y="70" ')}</g>${TL(100,230,'must',{fs:16,w:700,c:C.blue})}${TL(260,230,"mustn't",{fs:16,w:700,c:C.red})}`,'لوحة إلزام ولوحة منع'),cap:'إلزام ومنع. مرّر المؤشر على كل لوحة.',labs:[LAB101A,{title:'القاعدة',w:(el,B)=>N.gaps(el,B,{intro:'اختر الكلمة:',items:[{s:'You ___ wear safety boots in the workshop.',o:['must','mustn\'t','never'],a:0},{s:'___ use your phone near the fuel pump.',o:['Never','Always','Must'],a:0},{s:"You ___ open this door. It's an emergency door only.",o:["mustn't","must","always"],a:0}]})}]},
 {t:'أنواع لوحات السلامة',short:'اللوحات',old:[2],q:'ما معنى الدائرة الزرقاء؟ وما معنى الدائرة ذات الخط الأحمر المائل؟',ref:'ص 74',
  lead:`لوحات السلامة لغة عالمية: من شكلها ولونها تعرف معناها قبل أن تقرأ ما كُتب عليها. وهي موحّدة في المعيار الدولي ISO.`,
  points:[`<b>لوحة التحذير</b> ${e('Warning sign')}: مثلث أصفر بإطار أسود، ومعناها يوجد خطر فانتبه.`,
   `<b>لوحة المنع</b> ${e('Prohibition sign')}: دائرة بيضاء بإطار أحمر وخط مائل، ومعناها لا تفعل هذا.`,
   `<b>لوحة الإلزام</b> ${e('Mandatory action sign')}: دائرة زرقاء، ومعناها يجب أن تفعل هذا.`,
   `<small>(إضافة من خارج الكتاب)</small> وفي المعيار نفسه <b>لوحات الحالة الآمنة</b> الخضراء، مثل مخرج الطوارئ، و<b>لوحات معدات الحريق</b> الحمراء المربعة.`],
  grid:{head:['النوع','الشكل واللون','جملة تناسبها'],rows:[['Warning','مثلث أصفر','Be careful. The floor is wet.'],['Prohibition','دائرة بخط أحمر مائل','Do not smoke here.'],['Mandatory','دائرة زرقاء','You must wear ear protectors.']]},
  art:art(`<g data-tip="Warning: yellow and black, triangle — تحذير">${signSVG('warning','!',90).replace('<svg ','<svg x="30" y="110" ')}</g><g data-tip="Prohibition: red, white and black, round — منع">${signSVG('prohibition','🔥',90).replace('<svg ','<svg x="135" y="110" ')}</g><g data-tip="Mandatory: blue and white, round — إلزام">${signSVG('mandatory','👓',90).replace('<svg ','<svg x="240" y="110" ')}</g>${TL(75,230,'warning',{fs:12,w:700})}${TL(180,230,'prohibition',{fs:12,w:700})}${TL(285,230,'mandatory',{fs:12,w:700})}`,'ثلاث لوحات: تحذير ومنع وإلزام'),cap:'الأنواع الثلاثة. مرّر المؤشر على كل لوحة.',labs:[LAB101B,{title:'صنّف',w:(el,B)=>N.sort(el,B,{intro:'صنّف اللوحة من وصفها:',cats:['تحذير','منع','إلزام'],items:[['دائرة زرقاء فيها قفازات',2,'إلزام: You must wear gloves.'],['مثلث أصفر فيه صاعقة',0,'تحذير: high voltage.'],['دائرة حمراء بخط مائل على سيجارة',1,'منع: No smoking.'],['دائرة زرقاء فيها أذن بسماعة',2,'إلزام: wear ear protection.']]})}]},
 {t:'النتيجة المحتملة: might و could',short:'might / could',old:[3],q:'كيف تحذّر زميلك من سطح ساخن وتذكر ما قد يحدث له؟',ref:'ص 75',
  lead:`التحذير الجيد لا يكتفي بذكر الخطر، بل يذكر ما قد يحدث إذا لم ننتبه. وهنا نستعمل ${e('might')} أو ${e('could')}.`,
  points:[`<b>القالب:</b> نذكر الخطر، ثم ${e('You might / could')} + الفعل الأصلي.<br>${e('The surface is hot. You might burn your hand.')}`,
   `<b>${e('might')} و ${e('could')}</b> هنا بمعنى واحد تقريباً: «قد»، أي شيء محتمل لا مؤكد.`,
   `<b>بعدهما الفعل الأصلي</b> بلا ${e('s')} وبلا ${e('to')}، مع كل الفاعلين.`],
  grid:{head:['الخطر','النتيجة المحتملة'],rows:[['The surface is hot.','You might burn your hand.'],['Lasers.','You could injure your eyes.'],['The floor is wet.','You might slip.']]},
  pairs:[['You could to injure your eyes.','You could injure your eyes.','لا نضع to بعد could.'],['You might burns your hand.','You might burn your hand.','بعد might الفعل الأصلي.']],
  art:art(`<g data-tip="Be careful. You might trap your hand in the gears."><circle cx="140" cy="150" r="50" fill="${C.mut}" stroke="${C.ink}" stroke-width="3"/><circle cx="225" cy="150" r="38" fill="${C.mut}" stroke="${C.ink}" stroke-width="3"/>${TL(180,250,'You might trap your hand.',{fs:14,w:700})}</g>`,'ترسان متداخلان'),cap:'خطر التروس. مرّر المؤشر على الرسم.',labs:[LAB101C,{title:'النتيجة',w:(el,B)=>N.cases(el,B,{intro:'اختر التحذير المناسب:',cases:[{q:'A wet floor',opts:[['You could slip and fall.',1,''],['You could burn your hand.',0,'']]},{q:'An open cable box',opts:[['You might get an electric shock.',1,''],['You might trap your hand.',0,'']]}]})}]}
 ]});
B.lesson({
 id:'u10-l1',unit:10,order:1,pages:'74–75',
 title:'Rules and warnings — القواعد والتحذيرات',
 summary:'قواعد السلامة بـ must / mustn\'t / always / never / do not، وأنواع لوحات السلامة الثلاثة بألوانها وأشكالها، والنتائج المحتملة للخطر بـ might و could.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 74–75',html:`<ol><li>تكتب قواعد السلامة: ${e('You must wear a hard hat.')}</li><li>تميّز لوحات التحذير والمنع والإلزام.</li><li>تحوّل اللوحة إلى جملة: ${e('Do not smoke here.')}</li><li>تقول النتيجة المحتملة للخطر: ${e('You might burn your arm.')}</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 74–75',html:vt(VOC101)},
  ...R101.theory,
  {h:'تمارين الكتاب',ref:'ص 74–75',html:
   bk(1,'ص 74','مع زميلك: ما قواعد السلامة في عملك أو كليتك؟ اكتب قائمة.',null)+
   bk(2,'ص 74','استمع وأكمل التحذيرات بالكلمات في الصندوق.',['must','Don\'t','must',"Don't",'might',"mustn't"],'إجابات متوقعة من معنى الجمل؛ تحقق منها بالتسجيل.')+
   bk(3,'ص 74','مع زميلك: لماذا تختلف ألوان اللوحات وأشكالها؟',null)+
   bk(4,'ص 74','اقرأ النص وطابق الأمثلة مع اللوحات A–F.',['C (example)','E','B','D','A','F'],'1 سم، 2 خطر حريق، 3 لا ترفع بخطاف، 4 لا تنزع الواقي، 5 اقرأ الدليل، 6 استعمل واقي المنشار.')+
   bk(5,'ص 75','أكمل التعليمات بكلمات الصندوق (حسب اللوحات الست).',['Never','Always','Do not','must','Do','mustn\'t'],'5: «Do not smoke» بإضافة Do قبل not الموجودة في الجملة.')+
   bk(6,'ص 75','اكتب اللوحات بطريقة أخرى.',['Do not smoke here. (example)','Do not use mobile phones here.','Do not run.','Do not enter.','Do not exit here.','Do not park here.'])+
   bk(7,'ص 75','أكمل التحذيرات بالكلمات (could، might، there are، there\'s).',['could / might injure your back','There\'s … You could / might injure your hands','could / might trap your hand','There are … You could / might injure your eyes'])},
  {h:'الاستماع',ref:'ص 74',html:au(53,'ص 74 — التمرين 2','استمع وأكمل التحذيرات الست.')}
 ],
 stations:[
  {intro:true},
  ...R101.stations,
  {recap:["القواعد: Always / Never / Do / Don't / must / mustn't + فعل أصلي.",'لوحة التحذير مثلث أصفر، والمنع دائرة حمراء، والإلزام دائرة زرقاء.','You might / could + فعل للنتيجة المحتملة.']}
 ],
 lab:lab101,
 examples:[
  {title:'مثال 1: من لوحة إلى قاعدة',ref:'ص 75',q:`<p>لوحة إلزام زرقاء عليها نظارة واقية. اكتب القاعدة بطريقتين.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: دائرة زرقاء = إلزام.'},{t:`الخطوة 2: ${e('Always wear safety goggles.')}`},{t:`الخطوة 3: ${e('You must wear safety goggles.')}`,final:true}]},
  {title:'مثال 2: تحذير ونتيجة',ref:'ص 75',q:`<p>سطح بارد جداً في المختبر. اكتب التحذير والنتيجة.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e("Warning. There's a cold surface here.")}`},{t:`الخطوة 2: النتيجة بـ ${e('could')} + فعل.`},{t:`الخطوة 3: ${e('You could injure your hands.')}`,final:true}]}
 ],
 quiz:[
  {q:'A mandatory action sign is:',o:['a yellow triangle','a red circle','a blue circle','a green square'],c:2,e:'الإلزام دائرة زرقاء.'},
  {q:'A prohibition sign means:',o:['Be careful.','Do not do this.','You must do this.','Exit here.'],c:1,e:'المنع: Do not do this.'},
  {q:'You ___ smoke in this factory.',o:['must','mustn\'t','always','might'],c:1,e:"mustn't = ممنوع."},
  {q:'___ wear a hard hat on the building site.',o:['Never','Always','Don\'t','Mustn\'t'],c:1,e:'Always + فعل.'},
  {q:'Danger. High voltage. You ___ get an electric shock.',o:['could','must','mustn\'t','never'],c:0,e:'النتيجة المحتملة: could / might.'},
  {q:'Write the sign "No running" another way:',o:['Do not run.','You must run.','Always run.','You might run.'],c:0,e:'Do not run.'},
  {q:'hazard معناها:',o:['أمان','مصدر خطر','لوحة','قاعدة'],c:1,e:'hazard = مصدر خطر.'}
 ]
});

/* =================== 10.2 Safety hazards =================== */
const HZ=[{k:'ext',x:60,y:70,ar:'لا طفاية حريق في مكانها',now:'There is no fire extinguisher on the wall.',past:'There was no fire extinguisher on the wall.'},
 {k:'exit',x:300,y:70,ar:'باب الطوارئ مقفل',now:'The fire exit is locked.',past:'The fire exit was locked.'},
 {k:'oil',x:180,y:255,ar:'زيت مسكوب على الأرض',now:'There is some oil on the floor.',past:'There was some oil on the floor.'},
 {k:'cable',x:95,y:200,ar:'كابل تالف',now:'A cable is damaged.',past:'A cable was damaged.'},
 {k:'boxes',x:280,y:200,ar:'صناديق على الدرج',now:'There are some boxes on the stairs.',past:'There were some boxes on the stairs.'},
 {k:'food',x:180,y:150,ar:'طعام وشراب على المنضدة',now:'There is some food on the bench.',past:'There was some food on the bench.'}];
const shopSVG=found=>`<svg viewBox="0 0 360 300" role="img" aria-label="ورشة فيها مخاطر">
 <rect x="0" y="0" width="360" height="300" fill="var(--surface-2)"/><rect x="0" y="230" width="360" height="70" fill="var(--surface)"/>
 <rect x="40" y="40" width="40" height="60" rx="4" fill="none" stroke="var(--fg)" stroke-dasharray="4 3"/>
 <rect x="275" y="30" width="55" height="90" fill="#4F9D69"/><text x="302" y="70" text-anchor="middle" font-size="10" fill="#fff" direction="ltr">FIRE EXIT</text><rect x="292" y="80" width="20" height="16" rx="3" fill="#888"/>
 <rect x="110" y="140" width="140" height="14" fill="#8a5a2b"/><rect x="118" y="154" width="8" height="70" fill="#8a5a2b"/><rect x="236" y="154" width="8" height="70" fill="#8a5a2b"/><circle cx="160" cy="132" r="9" fill="#F2C14E"/><rect x="185" y="122" width="12" height="18" fill="#C8553D"/>
 <path d="M30 200 Q70 170 110 205 T170 200" fill="none" stroke="#111" stroke-width="4"/><path d="M88 196 l8 -6 l4 8 l8 -4" stroke="#C8302C" stroke-width="3" fill="none"/>
 <path d="M250 240 L330 160 L340 160 L340 240Z" fill="#cfc6b8"/><rect x="268" y="190" width="22" height="18" fill="#c99a5b"/><rect x="292" y="176" width="22" height="18" fill="#c99a5b"/>
 <ellipse cx="180" cy="262" rx="46" ry="10" fill="#3b3b3b" opacity=".75"/>
 ${HZ.map((h,i)=>`<circle cx="${h.x}" cy="${h.y}" r="22" fill="${found[i]?'rgba(200,48,44,.25)':'transparent'}" stroke="${found[i]?'#C8302C':'transparent'}" stroke-width="3" data-hz="${i}" style="cursor:pointer"/>`).join('')}</svg>`;
function lab102(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">ابحث عن المخاطر</h3>
  <p class="sub">مبني على التمارين 4–7 ص 76–77، بورشة من رسمنا. اضغط على كل خطر تراه (ستة مخاطر)، ثم بدّل بين «الآن» و«تقرير التفتيش» لترى الجمل بالحاضر والماضي.</p>
  <div class="pk-pic" id="hp"></div><p class="sub" id="hn"></p>
  <div class="ph-row"><button class="btn pri" data-t="now">الآن (There is / are)</button><button class="btn" data-t="past">التقرير (There was / were)</button></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">ما وجدته</h3><div id="hl"></div></div>
 </div></div>`;
 const $=s=>el.querySelector(s);const found=HZ.map(()=>0);let t='now';
 const draw=()=>{$('#hp').innerHTML=shopSVG(found);el.querySelectorAll('[data-hz]').forEach(c=>c.onclick=()=>{found[+c.dataset.hz]=1;draw()});
  const n=found.filter(Boolean).length;$('#hn').textContent=`وجدت ${n} من ${HZ.length}.`;
  const L=HZ.filter((h,i)=>found[i]);
  $('#hl').innerHTML=L.length?(t==='past'?`<p class="pk-ill">Safety inspection report — findings:</p>`:'')+eb(L.map(h=>t==='now'?h.now:h.past))+`<ul class="ph-try">${L.map(h=>`<li>${h.ar}</li>`).join('')}</ul>`:'<p class="pk-ill">اضغط على الرسم حيث ترى خطراً.</p>'};
 el.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{t=b.dataset.t;el.querySelectorAll('[data-t]').forEach(x=>x.classList.toggle('pri',x===b));draw()});draw();
}
const VOC102=[['hazard','خطر',''],['trip over','يتعثّر بـ',''],['fall into','يسقط في',''],['low beam','عارضة منخفضة',''],['gears','تروس',''],['slippery','زلق',''],['liquid','سائل',''],['fire extinguisher','طفاية حريق',''],['fire exit','مخرج طوارئ',''],['locked','مقفل','with a padlock = بقفل'],['coiled','ملفوف','a coiled cable'],['cones','أقماع (مخاريط) تحذير',''],['inspector','مفتش',''],['inspection report','تقرير التفتيش',''],['findings','النتائج (ما وُجد)','']];

/* ===== مختبرات «شرح القاعدة» 10.2 و 10.3 ===== */
const HZ102={beam:["There's a low beam in front of you.",'could','injure your head','عارضة منخفضة'],gears:['The gears are moving.','might','catch your fingers','تروس تدور'],floor:['The floor is slippery.','could','slip and fall','أرضية زلقة'],cable:["There's a cable on the floor.",'might','trip over it','كابل على الأرض']};
const LAB102A={title:'حذّر زميلك',w:(el,B)=>N.labB(el,B,{intro:'اختر الخطر، وشاهد التحذير من ثلاثة أجزاء: النداء، ثم الخطر، ثم ما قد يحدث.',
 controls:[{k:'h',label:'الخطر',opts:Object.keys(HZ102).map(k=>[k,HZ102[k][3]])}],
 out:({h})=>{const x=HZ102[h];return{pieces:[['Look out!','q','انتبه!'],[x[0],'x','الخطر'],['You','x',''],[x[1],'k','قد'],[x[2]+'.','n','النتيجة']],say:`Look out! ${x[0]} You ${x[1]} ${x[2]}.`,why:'التحذير: نداء سريع، ثم الخطر بـ There\'s أو بجملة وصف، ثم النتيجة المحتملة بـ could أو might.'}}})};
const OB102={liquid:[['There','is','some liquid on the floor.']],boxes:[['There','are','some boxes on the stairs.']],exit:[['The fire exit','is','locked.']],cables:[['Some cables','are','damaged.']],ext:[['There','are','no fire extinguishers.']]};
const LAB102B={title:'من الحاضر إلى التقرير',w:(el,B)=>N.labB(el,B,{intro:'اختر ما رأيته في الورشة، ثم اختر: الآن أم في التقرير (بعد الزيارة)؟',
 controls:[{k:'o',label:'الملاحظة',opts:[['liquid','سائل على الأرض'],['boxes','صناديق على الدرج'],['exit','مخرج طوارئ مقفل'],['cables','كابلات تالفة'],['ext','لا طفايات حريق']]},{k:'t',label:'الوقت',opts:[['now','الآن'],['rep','في التقرير']]}],
 out:({o,t})=>{const [S,v,r]=OB102[o][0],pl=v==='are',now=t==='now',V=now?v:(pl?'were':'was');
  return{pieces:[[S,'x',''],[V,'k',now?(pl?'جمع الآن':'مفرد الآن'):(pl?'are ← were':'is ← was')],[r,'n','']],say:`${S} ${V} ${r}`,why:now?'نصف ما نراه الآن بـ is أو are.':'في التقرير نكتب ما رأيناه في الزيارة بالماضي: is ← was، و are ← were.'}}})};
const CL103={12:'ahead (in front of you)',1:'ahead, a little to the right',2:'ahead and to the right',3:'to your right',4:'behind and to the right',5:'behind, a little to the right',6:'behind you',7:'behind, a little to the left',8:'behind and to the left',9:'to your left',10:'ahead and to the left',11:'ahead, a little to the left'};
const AR103={12:'أمامك تماماً',1:'أمامك قليلاً إلى اليمين',2:'أمامك يميناً',3:'على يمينك',4:'خلفك يميناً',5:'خلفك قليلاً إلى اليمين',6:'خلفك تماماً',7:'خلفك قليلاً إلى اليسار',8:'خلفك يساراً',9:'على يسارك',10:'أمامك يساراً',11:'أمامك قليلاً إلى اليسار'};
const NW103=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const clk103=h=>{const a=h/12*2*Math.PI,x=280+70*Math.sin(a),y=72-55*Math.cos(a);let t='';for(let i=1;i<=12;i++){const b=i/12*2*Math.PI;t+=`<text x="${280+52*Math.sin(b)}" y="${76-40*Math.cos(b)}" text-anchor="middle" font-size="11" font-family="monospace" fill="${C.ink}">${i}</text>`}
 return `<svg viewBox="0 0 560 150" aria-hidden="true"><rect width="560" height="150" rx="14" fill="${C.bg}"/><circle cx="280" cy="72" r="62" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${t}<path d="M280 62 l8 18 l-8 -4 l-8 4 z" fill="${C.blue}"/><path d="M280 72 L${x} ${y}" stroke="${C.red}" stroke-width="3" stroke-dasharray="4 3"/><circle cx="${x}" cy="${y}" r="8" fill="${C.red}"/></svg>`};
const LAB103A={title:'الاتجاه بالساعة',w:(el,B)=>N.labB(el,B,{intro:'أنت في وسط الساعة ووجهك نحو 12. اختر الساعة، وشاهد أين الطائرة الأخرى والجملة التي تقولها.',
 controls:[{k:'h',label:'الساعة',opts:[12,1,2,3,4,6,8,9,10].map(h=>[String(h),String(h)])}],
 out:({h})=>{h=+h;return{svg:clk103(h),pieces:[["There's a plane",'x',''],['at','k',''],[`${NW103[h]} o'clock.`,'n','الاتجاه']],say:`There's a plane at ${NW103[h]} o'clock.`,ar:AR103[h]+'.',why:"12 أمامك، و 3 يمينك، و 6 خلفك، و 9 يسارك. ونقول at + الرقم + o'clock."}}})};
const Q103={where:['Where','were','the planes?',"They were 3500 m above the city.",'be'],high:['How high','was','the plane?','It was at 3500 m.','be'],far:['How far','was','the jet from the plane?','It was 1 km away.','be'],many:['How many passengers','were','on the plane?','There were 180.','be'],when:['When','did','the incident happen?','It happened at 22.17.','did'],what:['What','did','the pilot do?','He turned left.','did']};
const LAB103B={title:'was / were أم did؟',w:(el,B)=>N.labB(el,B,{intro:'اختر سؤال التحقيق، وشاهد متى نستعمل was / were ومتى did.',
 controls:[{k:'q',label:'السؤال',opts:Object.keys(Q103).map(k=>[k,Q103[k][0]])}],
 out:({q})=>{const x=Q103[q],be=x[4]==='be';
  return{pieces:[[x[0],'q','كلمة السؤال'],[x[1],'k',be?(x[1]==='was'?'be مفرد ← was':'be جمع ← were'):'did + فعل أصلي'],[x[2],'n',be?'':'الفعل الأصلي في آخره'],[x[3],'x','الجواب']],say:`${x[0]} ${x[1]} ${x[2]} ${x[3]}`,why:be?'مع الفعل be نسأل بـ was أو were مباشرة، بلا did.':'مع بقية الأفعال نسأل بـ did، ويعود الفعل إلى صورته الأصلية (happen لا happened).'}}})};
const R102=N.rule({title:'التحذير من الخطر وتقرير التفتيش',ref:'ص 76–77',
 intro:`نشرح لغة مخاطر السلامة في خطوتين مرتبتين: التحذير السريع من خطر أمامك، ثم كتابة ما رأيته في تقرير تفتيش بالماضي.`,
 parts:[
 {t:'التحذير ونتيجته',short:'Look out!',old:[1],q:'زميلك سيمشي تحت عارضة منخفضة. ماذا تقول له؟',ref:'ص 76',
  lead:`إذا رأيت زميلك يقترب من خطر فلا وقت لجملة طويلة. التحذير الجيد ثلاثة أجزاء قصيرة: نداء، ثم الخطر، ثم ما قد يحدث.`,
  points:[`<b>النداء:</b> ${e('Look out!')} أو ${e('Be careful!')}`,
   `<b>الخطر:</b> ${e("There's")} + مفرد، أو ${e('There are')} + جمع، أو جملة تصف الحالة.<br>${e("There's a low beam in front of you.")}`,
   `<b>النتيجة المحتملة:</b> ${e('You could / might')} + الفعل الأصلي (من الدرس 10.1).<br>${e('You could injure your head.')}`],
  grid:{head:['الجزء','مثال'],rows:[['النداء','Look out!'],['الخطر',"There's a cable on the floor."],['النتيجة','You might trip over it.']]},
  art:art(`<g data-tip="Look out! There's a low beam in front of you. You could injure your head."><rect x="40" y="100" width="280" height="22" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${[0,1,2,3,4,5,6].map(i=>`<rect x="${48+i*40}" y="100" width="18" height="22" fill="${C.ink}"/>`).join('')}<circle cx="180" cy="160" r="22" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><rect x="164" y="182" width="32" height="70" rx="8" fill="${C.blue}"/></g>${TL(180,280,'Look out!',{fs:18,w:700,c:C.red})}`,'شخص يقترب من عارضة منخفضة'),cap:'خطر العارضة. مرّر المؤشر على الرسم.',labs:[LAB102A,{title:'النتيجة',w:(el,B)=>N.cases(el,B,{intro:'اختر النتيجة المناسبة:',cases:[{q:"Be careful! There are some bricks on the floor.",opts:[['You could trip over them.',1,''],['You could get an electric shock.',0,'']]},{q:"Look out! There's a gap in the floor.",opts:[['You might fall into it.',1,''],['You might burn your hands.',0,'']]}]})}]},
 {t:'من الحاضر إلى تقرير الماضي',short:'was / were',old:[2],q:'وجدت أمس صناديق على الدرج. كيف تكتبها في التقرير؟',ref:'ص 77',
  lead:`أثناء التفتيش تصف ما تراه بالحاضر. لكن التقرير تكتبه بعد الزيارة، فتنقل كل ما رأيته إلى الماضي.`,
  points:[`<b>المفرد وغير المعدود:</b> ${e('is → was')}<br>${e("There's some liquid on the floor. → There was some liquid on the floor.")}`,
   `<b>الجمع:</b> ${e('are → were')}<br>${e('There are some boxes on the stairs. → There were some boxes on the stairs.')}`,
   `<b>النفي في التقرير:</b> ${e('There were no')} + جمع، أو ${e('There was no')} + مفرد.<br>${e('There were no fire extinguishers.')}`],
  grid:{head:['','الآن','في التقرير'],rows:[['مفرد',"There's some liquid.",'There was some liquid.'],['جمع','There are some boxes.','There were some boxes.'],['حالة','The exit is locked.','The exit was locked.']]},
  pairs:[['There was some boxes.','There were some boxes.','boxes جمع: were.'],['The fire exit were locked.','The fire exit was locked.','exit مفرد: was.']],
  art:art(`<g data-tip="الآن: There are some boxes on the stairs."><rect x="30" y="80" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,111,'There are some boxes…',{fs:15,w:700})}</g>${arrowS(180,134,180,166,C.ink,3)}
    <g data-tip="التقرير: There were some boxes on the stairs."><rect x="30" y="170" width="300" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,201,'There were some boxes…',{fs:15,w:700})}</g>`,'are تصير were'),cap:'التحويل إلى الماضي. مرّر المؤشر على كل جملة.',labs:[LAB102B,{title:'حوّل',w:(el,B)=>N.typ(el,B,{intro:'حوّل إلى الماضي (جمل جديدة):',items:[{q:e("There's a hole in the fence."),a:['There was a hole in the fence.']},{q:e('Two windows are broken.'),a:['Two windows were broken.']},{q:e('There are no cones around the gap.'),a:['There were no cones around the gap.']}]})}]}
 ]});
B.lesson({
 id:'u10-l2',unit:10,order:2,pages:'76–77',
 title:'Safety hazards — مخاطر السلامة',
 summary:'التحذير من الخطر ونتيجته، ووصف مخاطر ورشة بـ There is / There are، وتحويلها إلى الماضي There was / There were و was / were في تقرير التفتيش، وكتابة قواعد للورشة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 76–77',html:`<ol><li>تحذّر من خطر وتذكر نتيجته: ${e("Look out! There's a low beam. You could injure your head.")}</li><li>تصف ما تراه في ورشة: ${e('There are some boxes on the stairs.')}</li><li>تكتب تقرير تفتيش بالماضي: ${e('There were some boxes on the stairs.')}</li><li>تكتب قواعد سلامة للورشة.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 76–77',html:vt(VOC102)},
  ...R102.theory,
  {h:'تمارين الكتاب',ref:'ص 76–77',html:
   bk(3,'ص 76','قل التحذيرات ونتائجها المحتملة، كما في المثال.',null,'القالب: Look out! There\'s … . You could / might … .')+
   bk(4,'ص 76','مع زميلك: كم خطراً ترى في صورة الورشة؟ اكتب قائمة.',null,'جرّب أيضاً «ابحث عن المخاطر» في المختبر بورشة من رسمنا.')+
   bk(5,'ص 77','أنت مفتش سلامة: صف ما تراه في الورشة بجدول There is / are.',null)+
   bk(6,'ص 77','حوّل جملاً أخرى من التمرين 5 إلى الماضي.',null)+
   bk(7,'ص 77','أكمل تقرير المفتش: صف كل المخاطر في الورشة.',null,'ابدأ كل بند بـ There was / There were أو The … was / were.')+
   bk(8,'ص 77','في مجموعات: اكتب عشر قواعد سلامة على الأقل للورشة.',null)},
  {h:'الاستماع',ref:'ص 76',html:au(54,'ص 76 — التمرينان 1 و 2','استمع وطابق التحذيرات مع الصور، ثم اكتب رقم التحذير في الجدول.')},
  {h:'تقرير نموذجي قصير (إضافة من خارج الكتاب)',ref:'ص 77',html:eb(['Safety inspection report','Visit to: City Motors Workshop','I inspected the workshop on the 3rd of May. Here are my findings:','1 There were no fire extinguishers in the workshop.','2 The fire exit was locked.','3 There was some oil on the floor near the car lift.','4 There were some boxes on the stairs.'])}
 ],
 stations:[
  {intro:true},
  ...R102.stations,
  {recap:["التحذير: Look out! There's … You could / might ….","الوصف: There is / are + المكان، و The … is / are + الحالة.",'التقرير بالماضي: is → was و are → were.','قواعد الورشة: Always … / Never … / Staff must / must not ….']}
 ],
 lab:lab102,
 examples:[
  {title:'مثال 1: سطر في التقرير',ref:'ص 77',q:`<p>رأيت أمس كابلاً تالفاً. اكتبه في التقرير.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الحاضر ${e('A cable is damaged.')}`},{t:`الخطوة 2: ${e('is → was')}.`},{t:`الخطوة 3: ${e('A cable was damaged.')}`,final:true}]},
  {title:'مثال 2: قاعدة من خطر',ref:'ص 77',q:`<p>الخطر: طعام وشراب في الورشة. اكتب قاعدة.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: نريد منعاً.'},{t:`الخطوة 2: ${e('Do not bring food or drink into the workshop.')}`},{t:`الخطوة 3: أو ${e('No eating or drinking in the workshop.')}`,final:true}]}
 ],
 quiz:[
  {q:'There ___ some liquid on the floor yesterday.',o:['is','are','was','were'],c:2,e:'غير معدود بالماضي: was.'},
  {q:'There ___ two damaged windows last week.',o:['was','were','is','be'],c:1,e:'جمع بالماضي: were.'},
  {q:'The fire exit ___ locked when I inspected it.',o:['is','was','were','are'],c:1,e:'مفرد بالماضي: was.'},
  {q:"Look out! There's a gap. You ___ fall into it.",o:['might','must','mustn\'t','always'],c:0,e:'النتيجة: might.'},
  {q:'fire extinguisher:',o:['مخرج طوارئ','طفاية حريق','جرس إنذار','خرطوم'],c:1,e:'fire extinguisher = طفاية حريق.'},
  {q:'trip over معناها:',o:['يتعثّر بـ','يسافر','يرفع','يسقط من أعلى'],c:0,e:'trip over = يتعثّر.'}
 ]
});

/* =================== 10.3 Investigations =================== */
function lab103(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">رادار برج المراقبة</h3>
  <p class="sub">مبني على «Clock references» ص 78. حرّك الطائرة الأخرى حول طائرتك (اتجاه الساعة والمسافة)، واقرأ تحذير برج المراقبة. (موقف جديد من عندنا.)</p>
  <div class="pk-pic" id="rp"></div>
  ${K.sl('rc','الاتجاه (الساعة)',1,12,1,2)}${K.sl('rd','المسافة (km)',1,10,1,5)}
  <div id="ro"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">أسئلة المحقق</h3><p class="sub">أسئلة الماضي عن حادثة (جديدة من عندنا):</p>
  ${dl([['Investigator','Where did the incident happen?'],['Pilot','It happened over the sea, 20 km east of the airport.'],['Investigator','When did it take place?'],['Pilot','At 14.05.'],['Investigator','How high were the planes?'],['Pilot','They were at about 3000 metres.'],['Investigator','How far was the other plane from you?'],['Pilot','About 400 metres.']])}
 </div></div></div>`;
 const $=s=>el.querySelector(s);
 const draw=()=>{const c=+$('#rc').value,d=+$('#rd').value;$('#rc-v').textContent=c+" o'clock";$('#rd-v').textContent=d+' km';
  const a=(c%12)/12*2*Math.PI,r=20+d*11,x=180+r*Math.sin(a),y=150-r*Math.cos(a);
  $('#rp').innerHTML=`<svg viewBox="0 0 360 300" role="img" aria-label="رادار"><circle cx="180" cy="150" r="135" fill="var(--surface-2)" stroke="var(--line)"/>${[...Array(12)].map((_,i)=>{const b=(i+1)/12*2*Math.PI;return `<text x="${180+125*Math.sin(b)}" y="${155-125*Math.cos(b)}" text-anchor="middle" font-size="12" fill="var(--muted)" font-family="var(--mono)">${i+1}</text>`}).join('')}
   <path d="M180 132 l8 22 l-8 -5 l-8 5z" fill="var(--blue)"/><text x="180" y="175" text-anchor="middle" font-size="11" fill="var(--blue)" direction="ltr">you</text>
   <circle cx="${x}" cy="${y}" r="8" fill="var(--stop)"/></svg>`;
  $('#ro').innerHTML=dl([['Control',`ConAir 286. Unknown traffic. ${c} o'clock. ${d} kilometres.`],['Pilot','Negative contact. Request vectors.']])};
 $('#rc').addEventListener('input',draw);$('#rd').addEventListener('input',draw);draw();
}
const VOC103=[['investigation','تحقيق',''],['near miss','حادثة كادت تقع (تفادٍ في آخر لحظة)',''],['air traffic control','برج المراقبة الجوية',''],['pilot','طيار',''],['passenger plane','طائرة ركاب',''],['military jet','طائرة عسكرية نفاثة',''],['altitude','الارتفاع (عن سطح البحر)',''],['flight number','رقم الرحلة',''],['collision','تصادم',''],["at two o'clock",'في اتجاه الساعة الثانية','مقدمة الطائرة = 12'],['heading','الاتجاه (المسار)',''],['descend ≠ climb','يهبط ≠ يرتفع',''],['take place = happen','يحدث',''],['injury / injured','إصابة / مصاب',''],['slip, trip, fall','ينزلق، يتعثر، يسقط','']];

const R103=N.rule({title:'الاتجاه بالساعة وأسئلة التحقيق',ref:'ص 78–79',
 intro:`نشرح لغة التحقيق في حادثة في خطوتين مرتبتين: تحديد الاتجاه بالساعة، ثم أسئلة التحقيق بالماضي.`,
 parts:[
 {t:'الاتجاه بالساعة',short:"o'clock",old:[1],q:'طائرة تظهر أمامك قليلاً إلى اليمين. أي ساعة؟',ref:'ص 78',
  lead:`الطيارون وأبراج المراقبة يحتاجون طريقة سريعة ودقيقة لتحديد مكان طائرة أخرى. والطريقة المتفق عليها: تخيّل أنك في وسط ساعة، ووجهك نحو الرقم 12.`,
  points:[`<b>الاتجاهات الأربعة:</b> 12 أمامك تماماً، و 3 على يمينك، و 6 خلفك، و 9 على يسارك.`,
   `<b>وما بينها:</b> 1 و 2 أمامك يميناً، و 10 و 11 أمامك يساراً، و 4 و 5 خلفك يميناً، و 7 و 8 خلفك يساراً.`,
   `<b>القالب:</b> ${e("at")} + الرقم + ${e("o'clock")}<br>${e("There's a plane at two o'clock.")}`],
  grid:{head:['الساعة','المعنى','مثال'],rows:[['12','أمامك',"at twelve o'clock"],['3','على يمينك',"at three o'clock"],['6','خلفك',"at six o'clock"],['9','على يسارك',"at nine o'clock"]]},
  art:art(`<circle cx="180" cy="160" r="110" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${[...Array(12)].map((_,i)=>{const a=(i+1)/12*2*Math.PI;return TL(180+95*Math.sin(a),165-95*Math.cos(a),i+1,{fs:14,w:700})}).join('')}
    <g data-tip="أنت في المركز ومقدمتك نحو 12."><path d="M180 140 l10 28 l-10 -6 l-10 6z" fill="${C.blue}"/></g>
    <g data-tip="at two o'clock: أمامك يميناً"><circle cx="${180+70*Math.sin(Math.PI/3)}" cy="${160-70*Math.cos(Math.PI/3)}" r="9" fill="${C.red}"/></g>`,'ساعة حول الطائرة وهدف عند الساعة الثانية'),cap:'الاتجاه بالساعة. مرّر المؤشر على طائرتك وعلى الهدف.',labs:[LAB103A,{title:'الاتجاه',w:(el,B)=>N.cases(el,B,{intro:'اختر الاتجاه:',cases:[{q:'The other plane is on your left.',opts:[["at nine o'clock",1,''],["at three o'clock",0,'3 يمينك.']]},{q:'The truck is behind you.',opts:[["at six o'clock",1,''],["at twelve o'clock",0,'12 أمامك.']]}]})}]},
 {t:'أسئلة التحقيق بالماضي',short:'Where were…?',old:[2],q:'كيف تسأل متى وقعت الحادثة؟ ولماذا did هنا وليس was؟',ref:'ص 79',
  lead:`المحقق يسأل عن حادثة وقعت وانتهت، فكل أسئلته بالماضي. والسؤال يتكوّن بطريقتين حسب الفعل الذي فيه.`,
  subs:[{h:'مع الفعل be (كان)',points:[`نسأل بـ ${e('was')} للمفرد و ${e('were')} للجمع، مباشرة بعد كلمة السؤال:<br>${e('Where were the planes?')}<br>${e('How far was the jet from the plane?')}`]},
   {h:'مع بقية الأفعال',points:[`نسأل بـ ${e('did')}، ويعود الفعل إلى صورته الأصلية:<br>${e('When did the incident happen?')}<br>${e('What did the pilot do?')}`,`والجواب بالماضي: ${e('It happened at 22.17.')}`]}],
  points:[`<small>(من الكتاب)</small> ${e('take place')} بمعنى ${e('happen')}: ${e('When did it take place?')}`],
  grid:{head:['الفعل','السؤال','الجواب'],rows:[['be (مفرد)','How high was the plane?','It was at 3500 m.'],['be (جمع)','Where were the planes?','They were above the city.'],['غيره','When did it happen?','It happened at 22.17.']]},
  pairs:[['When did the incident happened?','When did the incident happen?','بعد did الفعل الأصلي.'],['Where did the planes be?','Where were the planes?','مع be نسأل بـ was / were.']],
  art:art(`<g data-tip="مع be: Where were …? / How high was …?"><rect x="30" y="80" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,111,'Where were the planes?',{fs:15,w:700})}</g>
    <g data-tip="مع فعل آخر: When did … happen?"><rect x="30" y="170" width="300" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,201,'When did it happen?',{fs:15,w:700})}</g>`,'سؤالان بالماضي'),cap:'نوعا السؤال. مرّر المؤشر على كل منهما.',labs:[LAB103B,{title:'السؤال',w:(el,B)=>N.typ(el,B,{intro:'كوّن السؤال (من عندنا):',items:[{q:`(When / the accident / happen)`,a:['When did the accident happen?']},{q:`(How high / be / the ladder)`,a:['How high was the ladder?']},{q:`(How many / workers / be / in the room)`,a:['How many workers were in the room?']}]})}]}
 ]});
B.lesson({
 id:'u10-l3',unit:10,order:3,pages:'78–79',
 title:'Investigations — التحقيق في الحوادث',
 summary:'تحديد الاتجاه بالساعة (at two o\'clock)، وتحذير برج المراقبة، وأسئلة التحقيق بالماضي (Where were…? When did… happen?)، وتقرير الحادثة، والدعوة والاعتذار في الحديث الاجتماعي.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 78–79',html:`<ol><li>تحدد اتجاه شيء بالنسبة إليك بالساعة: ${e("Unknown traffic at two o'clock.")}</li><li>تقرأ خبراً عن حادثة وتملأ تقريرها.</li><li>تسأل أسئلة التحقيق بالماضي وتجيب.</li><li>تدعو زميلاً أو تعتذر بلباقة.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 78–79',html:vt(VOC103)},
  ...R103.theory,
  {h:'تمارين الكتاب',ref:'ص 78–79',html:
   bk(1,'ص 78','مع زميلك: ماذا يحدث في الصورة؟ في أي اتجاه تتحرك الطائرتان؟ من سيكلم الطيارين؟',null)+
   bk(3,'ص 78','اقرأ الخبر وأكمل تقرير الحادثة.',['Date: 24 November (the day before the article)','Time: 22.17','Location: 10 km west of Manchester','Distance between two planes: 36 metres','Plane 1: Boeing 757 passenger plane · altitude 3505 m · flight BA 4058 · 234 passengers · from Manchester to Greece','Plane 2: F16 military jet · altitude 3527 m · from Scotland to the south of England'],'التاريخ: الخبر بتاريخ 25 نوفمبر ويقول «Last night».')+
   bk(4,'ص 79','مع زميلك (محقق وطيار): اسأل وأجب.',['Where did the incident happen?','When did it take place?','How high was the Boeing?','What was the height of the F16?','What time did the F16 pass the Boeing?','How far was the jet from the passenger plane?','What was the flight number of the passenger plane?','How many passengers were in the Boeing?'])+
   bk(5,'ص 79','مهمة ثنائية: حقّق في حادثة زميلك وأكمل نموذج التقرير.',null,'صفحتا الحادثتين ليستا في الحقيبة؛ استعمل البطاقتين البديلتين أسفل.')+
   bk(6,'ص 79','أكمل الحوار بالكلمات في الصندوق.',['must',"I'd",'are',"can't","don't","I'll"])+
   bk(8,'ص 79','مع زميلك: حوارات دعوة مشابهة بأوقات وأيام مختلفة.',null)},
  {h:'الاستماع',ref:'ص 78',html:au(55,'ص 78 — التمرين 2','استمع وأكمل تحذير برج المراقبة للطيار.')},
  {h:'مهمة ثنائية بديلة (إضافة من خارج الكتاب)',ref:'ص 79 — التمرين 5',html:`<p>كل طالب يجيب عن أسئلة زميله من بطاقته، والزميل يملأ نموذج التقرير (التاريخ، الوقت، المكان، الارتفاع، المصاب، وظيفته، الإصابة، نوع الحادثة، الوصف).</p>`+ab(eb(['Date: 12 March · Time: 09.40','Location: warehouse, loading area','Height above ground: 2 m','Name: Omar Saleh · Job title: storeman','Injury: broken arm','Type: fell from a height (a ladder)','He climbed a ladder. The ladder slipped and he fell.']),eb(['Date: 3 June · Time: 15.20','Location: workshop 2','Height above ground: 0 m','Name: Fahad Ali · Job title: technician','Injury: burnt hand','Type: received an electric shock','He touched a damaged cable. The power was on.']))}
 ],
 stations:[
  {intro:true},
  ...R103.stations,
  {recap:["at … o'clock: 12 أمامك و 3 يمينك و 6 خلفك و 9 يسارك.",'أسئلة الماضي: Where were …? How high was …? When did … happen?','take place = happen.']}
 ],
 lab:lab103,
 examples:[
  {title:'مثال 1: سؤال تحقيق',ref:'ص 79',q:`<p>(${e('How far / be / the jet / from the plane')})</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الفعل ${e('be')}، والفاعل مفرد ${e('the jet')} → ${e('was')}.`},{t:`الخطوة 2: ${e('How far')} + ${e('was')} + الفاعل.`},{t:`الخطوة 3: ${e('How far was the jet from the plane?')}`,final:true}]},
  {title:'مثال 2: سؤال بـ did',ref:'ص 79',q:`<p>(${e('What time / the F16 / pass / the Boeing')})</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: فعل غير be، فنستعمل ${e('did')}.`},{t:`الخطوة 2: بعد did الفعل الأصلي ${e('pass')}.`},{t:`الخطوة 3: ${e('What time did the F16 pass the Boeing?')}`,final:true}]}
 ],
 quiz:[
  {q:"Something is directly on your right. It's at ___ o'clock.",o:['twelve','three','six','nine'],c:1,e:'3 = يمينك.'},
  {q:'When ___ the incident happen?',o:['was','did','were','does'],c:1,e:'did + happen.'},
  {q:'How high ___ the planes?',o:['was','were','did','do'],c:1,e:'planes جمع: were.'},
  {q:'take place =',o:['happen','stop','place','take'],c:0,e:'take place = happen.'},
  {q:'altitude:',o:['السرعة','الارتفاع','المسافة','الاتجاه'],c:1,e:'altitude = الارتفاع.'},
  {q:"I'm sorry, I ___ do it tomorrow. What about Saturday?",o:["can't","must","I'd","I'll"],c:0,e:"اعتذار: I can't."}
 ]
});

/* =================== مراجعة E (ص 80–83) =================== */
const DRILLE=[
 {k:'الوظيفة',q:`أعد الكتابة: ${e('The purpose of the pedals is to turn the chain.')}`,a:['The pedals turn the chain.']},
 {k:'الوظيفة',q:`كوّن السؤال عن ${e('the pump')} (ماذا يفعل؟)`,a:['What does the pump do?']},
 {k:'التثبيت',q:`اختر وأكمل: ${e('The camera is ___ a stand.')} (اكتب الجملة كاملة)`,a:['The camera is mounted on a stand.']},
 {k:'جواب قصير',q:`أجب بالنفي: ${e('Is the cable connected to the adapter?')}`,a:["No, it isn't."]},
 {k:'If',q:`حوّل: ${e('Is the screen dark? → Press any key.')}`,a:['If the screen is dark, press any key.']},
 {k:'If',q:`حوّل: ${e("Does the motor start? No → Check the fuse.")}`,a:["If the motor doesn't start, check the fuse."]},
 {k:'القواعد',q:`اكتب لوحة «No smoking» بطريقة أخرى.`,a:['Do not smoke.',"Don't smoke.",'Do not smoke here.','You must not smoke.',"You mustn't smoke.",'Never smoke.']},
 {k:'النتيجة',q:`أكمل بـ might: ${e("The oven is very hot. You ___ burn yourself.")} (الجملة كاملة)`,a:['The oven is very hot. You might burn yourself.']},
 {k:'الماضي',q:`حوّل إلى التقرير: ${e('There are some ropes on the ground.')}`,a:['There were some ropes on the ground.']},
 {k:'التحقيق',q:`كوّن السؤال: (${e('How / climb / to the cable')}) عن عامل الصيانة`,a:['How did he climb to the cable?','How did the repair man climb to the cable?']}];
function labE(el,B){
 el.innerHTML=`<div class="phl"><div class="grid"><div class="c12 panel"><h3 style="margin-top:0">تدريب سريع على الوحدتين 9 و 10</h3>
  <p class="sub">10 أسئلة جديدة من عندنا تغطي قواعد الوحدتين. اكتب الجملة ثم «تحقّق».</p>
  <div class="ph-row"><span id="dk" class="tag"></span><span class="sub" id="dn"></span></div><div id="dq"></div>
  <div class="ph-row"><button class="btn" id="dp">→ السابق</button><button class="btn pri" id="dx">التالي ←</button></div></div></div></div>`;
 const $=s=>el.querySelector(s);let i=0;
 const draw=()=>{const d=DRILLE[i];$('#dk').textContent=d.k;$('#dn').textContent=`${i+1} من ${DRILLE.length}`;N.typ($('#dq'),B,{items:[{q:d.q,a:d.a}]});$('#dp').disabled=!i;$('#dx').disabled=i===DRILLE.length-1};
 $('#dp').onclick=()=>{i--;draw()};$('#dx').onclick=()=>{i++;draw()};draw();
}

B.lesson({
 id:'u10-l4',unit:10,order:4,pages:'80–83',
 title:'Review Unit E — مراجعة الوحدتين 9 و 10',
 summary:'مراجعة وظائف الأجزاء والتثبيت، والأجوبة القصيرة وجمل If ومخطط السير، وقواعد السلامة والتحذيرات، وتقرير السلامة بالماضي وأسئلة التحقيق، مع إجابات تمارين المراجعة E.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 80–83',html:`<div class="tbx"><table class="vt"><thead><tr><th>النقطة</th><th>مثال</th><th>الدرس</th></tr></thead><tbody>
   <tr><td>الوظيفة</td><td class="en">The engine drives the fan.</td><td>9.1</td></tr><tr><td>التثبيت</td><td class="en">The lamp is suspended from the ceiling.</td><td>9.1</td></tr>
   <tr><td>الأجوبة القصيرة</td><td class="en">Is it connected? — No, it isn't.</td><td>9.2</td></tr><tr><td>If والمخطط</td><td class="en">If the light is off, press the button.</td><td>9.3</td></tr>
   <tr><td>القواعد والتحذير</td><td class="en">You mustn't smoke. You might start a fire.</td><td>10.1</td></tr><tr><td>التقرير بالماضي</td><td class="en">There were no fire extinguishers.</td><td>10.2</td></tr>
   <tr><td>أسئلة التحقيق</td><td class="en">When did it happen?</td><td>10.3</td></tr></tbody></table></div>`},
  {h:'تمارين المراجعة (ص 80–81)',ref:'ص 80–81',html:
   bk(1,'ص 80','أكمل الجمل عن الدراجة بالصيغة الصحيحة للأفعال.',['supports · pushes','turn · rotate · propels (or moves)','control · increases','steers','turns'],'الأفعال المتاحة: control, increase, move, propel, push, rotate, steer, support, turn.')+
   bk(2,'ص 80','أكمل وصف الحوامة بالصيغة الصحيحة للأفعال.',['work','drives','suck','contains','moves'])+
   bk(3,'ص 80','أكمل الجمل عن مخطط التوصيل بالكلمات والعبارات.',null,'الإجابة حسب مواضع المقابس في رسم كتابك (above, below, between, in the centre, on the left/right, to the left/right).')+
   bk(4,'ص 81','تعرّف على الجهاز من الوصف.',['digital receiver','battery','router','modem','starter motor','disk drive'])+
   bk(5,'ص 81','أكمل الجمل عن الصور بعبارات التثبيت.',['suspended from','connected to','mounted on','connected to','attached to · suspended from','mounted on · connected to'],'قراءتنا للصور: مفتاح معلّق، طابعة بمقبس، ملزمة على طاولة، فأرة بالكمبيوتر، خطاف بحبل على قضيب، سماعة على قاعدة.')+
   bk(6,'ص 81','ارسم مخطط السير وأكمله من النص.',['Does the computer start? NO → Check the adapter.','Is it connected? NO → Connect it to the computer.','YES → Check the disk drive.','Is there a disk in the drive? YES → Take it out.','NO → Press the power button.'])+
   bk(7,'ص 81','اكتب دليل أعطال من المخطط.',["If the radio doesn't work, check the adapter. (begin)","If it isn't connected, connect the adapter.","If it is connected, check the LED.","If it is on, press the START button.","If it isn't on, check the power switch."])},
  {h:'تمارين المراجعة (ص 82–83)',ref:'ص 82–83',html:
   bk(8,'ص 82','أكمل التحذيرات، كل كلمة مرة واحدة.',['must','never',"mustn't",'might','Always',"could · don't"])+
   bk(9,'ص 82','أكمل تقرير السلامة بالصيغة الصحيحة للأفعال.',['found','was','were','were','had',"wasn't wearing (didn't wear)",'was','were','told','took place','put on','climbed','was','had','shouted','switched','switched','touched',"wasn't",'was','was',"didn't receive"])+
   bk(10,'ص 83','اكتب أسئلة لهذه الأجوبة عن الحادثة.',['Where did the incident take place? (example)','When did it happen?','Did the repair man wear his hard hat?','How did he climb to the cable?','How high was the cable?','What was the problem?','Did he get an electric shock?','Was the cable connected to the mains supply?'])+
   bk(11,'ص 83','اكتب قواعد سلامة من التقرير في التمرين 9.',null,'أمثلة: Always wear a hard hat. Never touch a cable before you switch off the power. Keep the emergency exit unlocked.')+
   bk(12,'ص 83','مشروع: دليل أعطال في مجالك، أو ملصق سلامة مع قواعده.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 9',title:'خلاصة الوحدة 9: حل الأعطال',q:'ما الأدوات اللغوية التي يحتاجها فني الدعم؟',ref:'ص 80–81',
   art:art(`${[['What does it do?','It drives the fan.',70],['Is it connected?',"No, it isn't.",140],['If …,','check the fuse.',210]].map(([a,b,y],i)=>`<g data-tip="${a} ${b}"><rect x="20" y="${y-30}" width="320" height="50" rx="10" fill="${[C.paper,C.yel,C.paper][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(180,y,a+' '+b,{fs:14,w:700})}</g>`).join('')}`,'ثلاثة قوالب للوحدة 9'),
   cap:'قوالب الوحدة 9. مرّر المؤشر على كل قالب.',
   side:[{tip:'الوظيفة بالمضارع البسيط، والأجوبة القصيرة بالفعل المساعد، والتعليمات بـ If.'}],
   body:[{widget:(el,B)=>N.cases(el,B,{cases:[{q:"Does the speaker work? (✓)",opts:[['Yes, it does.',1,''],['Yes, it is.',0,''],['Yes, it works it.',0,'']]},{q:"If the LED ___ off, push the power button.",opts:[['is',1,''],['will be',0,''],['be',0,'']]}]}),title:'مختبر مصغّر'}]},
  {st:2,short:'الوحدة 10',title:'خلاصة الوحدة 10: السلامة',q:'كيف تكتب قاعدة وتحذيراً وسطراً في تقرير؟',ref:'ص 82–83',
   art:art(`${[["You mustn't touch it.",70],['You could get a shock.',140],['The cable was damaged.',210]].map(([a,y],i)=>`<g data-tip="${a}"><rect x="20" y="${y-30}" width="320" height="50" rx="10" fill="${[C.paper,C.yel,C.paper][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(180,y,a,{fs:14,w:700})}</g>`).join('')}`,'ثلاثة قوالب للوحدة 10'),
   cap:'قوالب الوحدة 10. مرّر المؤشر على كل قالب.',
   side:[{tip:'القاعدة بـ must/mustn\'t، والتحذير بـ might/could، والتقرير بالماضي.'}],
   body:[{widget:(el,B)=>N.cases(el,B,{cases:[{q:"Staff ___ wear hard hats at all times.",opts:[['must',1,''],['might',0,''],['never',0,'']]},{q:"There ___ many tools on the ground.",opts:[['were',1,'في التقرير بالماضي والجمع.'],['was',0,''],['is',0,'']]}]}),title:'مختبر مصغّر'}]},
  {recap:['الوظيفة: It drives … / The purpose of … is to ….','الأجوبة القصيرة بالفعل المساعد، والتعليمات بـ If + مضارع ثم أمر.',"القواعد: must / mustn't / always / never، والتحذير: might / could.",'التقرير بالماضي: was / were، والأسئلة: When did …? How high was …?']}
 ],
 lab:labE,
 examples:[
  {title:'مثال 1: من مخطط إلى دليل (تمرين 7)',ref:'ص 81',q:`<p>${e('Is it connected? NO → Connect the adapter.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الحالة المنفية ${e("it isn't connected")}.`},{t:`الخطوة 2: الأمر ${e('connect the adapter')}.`},{t:`الخطوة 3: ${e("If it isn't connected, connect the adapter.")}`,final:true}]},
  {title:'مثال 2: سؤال لجواب (تمرين 10)',ref:'ص 83',q:`<p>${e('It was about 8 metres high. (How / cable)')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الجواب بـ ${e('was')}، فالسؤال بـ ${e('was')}.`},{t:`الخطوة 2: ${e('How high')} + ${e('was')} + ${e('the cable')}.`},{t:`الخطوة 3: ${e('How high was the cable?')}`,final:true}]}
 ],
 quiz:[
  {q:'This device stores electricity. When it is flat, you recharge it.',o:['modem','battery','router','starter motor'],c:1,e:'battery.'},
  {q:'This equipment connects two or more computers to one modem.',o:['router','disk drive','digital receiver','battery'],c:0,e:'router.'},
  {q:'The vice is ___ the workbench.',o:['suspended from','mounted on','connected to','attached from'],c:1,e:'mounted on.'},
  {q:'You ___ use a lighted match near petrol.',o:['must never','must always','might','could'],c:0,e:'must never.'},
  {q:'A repair man ___ a ladder last July.',o:['climbs','climbed','has climbed','climb'],c:1,e:'مع last July: الماضي.'},
  {q:'Did he get an electric shock? (✗)',o:["No, he didn't.","No, he wasn't.","No, he hasn't.","No, he doesn't."],c:0,e:"Did → didn't."}
 ]
});
})(PLCBOOK);

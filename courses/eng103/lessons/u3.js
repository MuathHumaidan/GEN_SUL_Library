/* الوحدة 3 — Comparison: 1 Limits (ص 20–21) · 2 Products (ص 22–23) · 3 Equipment (ص 24–25)
   الشرح والأمثلة والمختبرات من إعدادنا؛ تمارين الكتاب تفاعلياً بجملها وصورها في bxd3.js. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const COMP=a=>{const IR={good:'better',bad:'worse',far:'farther'};if(IR[a])return IR[a];if(/^(expensive|powerful|reliable|comfortable|economical|modern|important|difficult|useful|rapid)$/.test(a))return 'more '+a;if(/[^aeiou]y$/.test(a))return a.slice(0,-1)+'ier';if(/e$/.test(a))return a+'r';if(/^(big|thin|hot|fat|wet)$/.test(a))return a+a.slice(-1)+'er';return a+'er'};
const SUP=a=>{const IR={good:'best',bad:'worst',far:'farthest'};if(IR[a])return 'the '+IR[a];const c=COMP(a);return 'the '+(c.startsWith('more ')?c.replace('more','most'):c.replace(/er$/,'est'))};

/* ========== 1 Limits ========== */
const LIM={len:7.0,wid:2.0,hgt:2.9};
function lab1(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">هل تصعد العبّارة؟</h3><p class="sub">مختبر من إعدادنا مبني على حدود العبّارة في التمرين 4 ص 20 (الطول 7.0 م، العرض 2.0 م، الارتفاع 2.9 م). غيّر مقاسات سيارتك.</p>
  ${[['l','الطول (m)',3,9,5.0],['w','العرض (m)',1.4,2.6,1.8],['h','الارتفاع (m)',1.2,3.6,1.6]].map(x=>`<label class="sub">${x[1]}: <b id="v${x[0]}">${x[4]}</b></label><input type="range" id="${x[0]}" min="${x[2]}" max="${x[3]}" step="0.1" value="${x[4]}" style="width:100%">`).join('')}
  <div id="d"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">رد موظف العبّارة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اجعل الارتفاع 3.2 م (السيارة مع الدراجات): ماذا قال الموظف؟</li><li>متى نقول too high ومتى not high enough؟</li><li>اجعل العرض أقل من 2 م: لماذا قال just under؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const l=+$('#l').value,w=+$('#w').value,h=+$('#h').value;['l','w','h'].forEach(k=>$('#v'+k).textContent=$('#'+k).value);
  const sc=26;$('#d').innerHTML=art(`<rect x="20" y="${250-LIM.hgt*sc*2.5}" width="${LIM.len*sc*1.5}" height="${LIM.hgt*sc*2.5}" fill="none" stroke="${C.red||'#c4553f'}" stroke-width="2" stroke-dasharray="6 4"/><rect x="20" y="${250-h*sc*2.5}" width="${l*sc*1.5}" height="${h*sc*2.5}" rx="10" fill="${h>LIM.hgt||l>LIM.len||w>LIM.wid?'#f3c9bd':C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,285,'the ferry limit',{fs:12})}`,'ferry');
  const L=[];const ap=(v,lim)=>Math.abs(v-lim)<0.05?'exactly':v<lim?'just under':'just over';
  L.push(['S','How long is it?'],['C',`It's ${ap(l,Math.round(l))} ${l.toFixed(1)} metres long.`]);
  L.push(['S','How wide is it?'],['C',`It's ${w.toFixed(1)} metres wide.`]);
  L.push(['S','How high is it?'],['C',`It's ${h.toFixed(1)} metres high.`]);
  const bad=[];if(l>LIM.len)bad.push(['long','longer']);if(w>LIM.wid)bad.push(['wide','wider']);if(h>LIM.hgt)bad.push(['high','higher']);
  if(!bad.length)L.push(['S',"OK, that's fine. Your car can board the ferry."]);else bad.forEach(([a,c])=>L.push(['S',`Mm, that's too ${a}. The vehicle must not be ${c} than ${LIM[{long:'len',wide:'wid',high:'hgt'}[a]].toFixed(1)} metres.`]));
  $('#o').innerHTML=dl(L.map(x=>[x[0]==='S'?'Sales staff':'Customer',x[1]]))};
 ['l','w','h'].forEach(k=>$('#'+k).oninput=sh);sh();
}
const ADJ=['long','wide','high','heavy','big','thin','easy','noisy','expensive','good','bad','far'];
const LAB3A={title:'صيغة المقارنة',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة، وشاهد صيغة المقارنة وقاعدتها.',
 controls:[{k:'a',label:'الصفة',opts:ADJ.map(a=>[a,a])}],
 out:({a})=>{const c=COMP(a);const why=/^more /.test(c)?'صفة طويلة (أكثر من مقطع): more + الصفة.':['good','bad','far'].includes(a)?'صفة شاذة: تُحفظ.':/ier$/.test(c)?'تنتهي بـ y بعد حرف ساكن: y ← ier.':/(gg|nn|tt)er$/.test(c)?'مقطع واحد ينتهي بحرف ساكن بعد حرف علة واحد: نضاعف الحرف الأخير.':/e$/.test(a)?'تنتهي بـ e: نضيف r فقط.':'مقطع واحد: نضيف er.';
  return{pieces:[['The van is','x',''],[c,'k','المقارنة'],['than','q','than'],['the car.','x','']],say:`The van is ${c} than the car.`,why}}})};
const TE={toohigh:['The lorry is too high for the bridge.','too + صفة + for'],notenough:['The bridge is not high enough for the lorry.','not + صفة + enough + for'],toowide:['The ship is too wide for the canal.','too + صفة + for'],notwide:['The canal is not wide enough for the ship.','not + صفة + enough + for']};
const LAB3B={title:'too … for و not … enough for',w:(el,B)=>N.labB(el,B,{intro:'اختر الجملة، وقارن بين طريقتي وصف المشكلة.',
 controls:[{k:'t',label:'الجملة',opts:[['toohigh','too high'],['notenough','not high enough'],['toowide','too wide'],['notwide','not wide enough']]}],
 out:({t})=>{const [s,f]=TE[t];return{pieces:[[s,'k',f]],say:s,why:t.startsWith('too')?`${e('too')} قبل الصفة = أكثر من الحد المسموح، فهناك مشكلة.`:`${e('enough')} بعد الصفة: ${e('not wide enough')} = أقل من المطلوب.`}}})};
const R1=N.rule({title:'المقارنة بالصفة، و too و enough مع الحدود',ref:'ص 20–21، ص 102',
 intro:`لكل جسر ونفق وعبّارة <b>حدود</b>: أقصى طول وعرض وارتفاع ووزن. نقارن مقاسات المركبة بالحد، ونشرح المشكلة إذا تجاوزته.`,
 parts:[
 {t:'السؤال عن المقاسات، و must not be … than',short:'How wide is it?',old:[1],q:'كيف تسأل عن عرض السيارة؟ وكيف يقول الموظف إن الحد الأقصى 2 م؟',ref:'ص 20',
  lead:`ثلاث صيغ في هذا الجزء، وكل صيغة تُقرأ من اليسار لليمين مثل الجملة الإنجليزية:<br><b>السؤال:</b>${N.fm('How','+','الصفة','+','is it?')}<b>الجواب:</b>${N.fm("It's",'+','الرقم','+','metres','+','الصفة')}<b>الحد:</b>${N.fm('It must not be','+','الصفة','+','er','+','than','+','الرقم')}`,
  points:[`<b>السؤال:</b> ${e('How (long / wide / high / heavy) is it?')} اختر صفة واحدة من القوس.`,`<b>الجواب:</b> ${e("It's exactly 7 metres long. · It's just under 1.9 metres wide. · It's just over 3.2 metres high.")}`,`<b>قريب من الرقم:</b><br>أقل قليلاً: ${e('just under')}<br>تماماً: ${e('exactly')}<br>أكثر قليلاً: ${e('just over')}`,`<b>الحد:</b> ${e('The vehicle must not be wider than 2 metres.')} المعنى: الحد الأقصى للعرض 2 م.`,`<b>الاسم من الصفة:</b> ${e('long → length · wide → width · high → height · heavy → weight')}`],
  grid:{head:['الصفة','الاسم','السؤال'],rows:[['long','length','How long is it?'],['wide','width','How wide is it?'],['high','height','How high is it?'],['heavy','weight','How heavy is it?']]},
  pairs:[['How wide it is?','How wide is it?','السؤال: is قبل it.'],['must not be wider of 2 m','must not be wider than 2 m','بعد المقارنة: than.']]},
 {t:'صيغة المقارنة',short:'wider than · more expensive than',old:[2],q:'لماذا نقول wider لكن more expensive؟',ref:'ص 21، ص 102',
  lead:`صيغة المقارنة تعتمد على طول الصفة، وبعدها ${e('than')}:${N.fm('الصفة القصيرة','+','er','+','than')}${N.fm('more','+','الصفة الطويلة','+','than')}`,
  points:[`<b>الصفة القصيرة (مقطع واحد):</b>${N.fm('الصفة','+','er')}${e('longer, wider, higher')}`,`<b>تنتهي بـ y:</b> ${e('noisy → noisier · easy → easier')}`,`<b>تغيّر الإملاء:</b> ${e('big → bigger · wide → wider · thin → thinner')}`,`<b>صفة طويلة:</b> ${e('more expensive · more powerful')}، و ${e('less')} مع كل الصفات: ${e('less cheap, less expensive')}`,`<b>الشاذ:</b> ${e('good → better · bad → worse · far → farther / further')}، و ${e('more, less')}`],
  grid:{head:['الصفة','المقارنة','مثال'],rows:[['high','higher','The van is higher than the car.'],['heavy','heavier','The lorry is heavier than the van.'],['expensive','more expensive','The plane is more expensive than the car.'],['good','better','This road is better than that one.']]},
  pairs:[['more wider','wider','لا نجمع more و er.'],['bigger then the box','bigger than the box','than لا then.']],labs:[LAB3A]},
 {t:'too و enough',short:'too high · not high enough',old:[3],q:'كيف تقول إن الشاحنة لا تمر تحت الجسر؟',ref:'ص 21، ص 102',
  lead:`إذا كان المقاس غير مناسب أو تجاوز الحد، نصف المشكلة بطريقتين لهما المعنى نفسه.`,
  points:[`<b>عن الشيء الكبير:</b>${N.fm('too','+','الصفة','+','for')}${e('The lorry is too wide for the bridge.')} (الشاحنة عريضة أكثر من اللازم)`,`<b>عن المكان الصغير:</b>${N.fm('not','+','الصفة','+','enough','+','for')}${e('The bridge is not wide enough for the lorry.')} (الجسر ليس عريضاً بما يكفي)`,`لاحظ أن الفاعل يتغير: الشيء الكبير مع ${e('too')}، والمكان الضيق مع ${e('not … enough')}.`,`مثال كامل: ${e('The bridge is 2.7 metres high, but the lorry is 2.9 metres high. The lorry is too high for the bridge.')}`],
  pairs:[['The lorry is enough high.','The bridge is not high enough.','enough بعد الصفة.'],['The lorry is too much high.','The lorry is too high.','too بلا much.']],labs:[LAB3B]}
 ]});
B.lesson({
 id:'u3-l1',unit:3,order:1,pages:'20–21',
 title:'1 Limits — الحدود',
 summary:'لافتات الحدود على الطرق، والسؤال عن المقاسات (How long/wide/high is it?)، و must not be + المقارنة + than، وصيغة المقارنة (wider, noisier, more expensive, better)، ووصف المشكلة بـ too … for و not … enough for، وقراءة شروط عبّارة السيارات.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 20–21',html:`<p>تريد عميلة أن تصعد بسيارتها إلى عبّارة، وللعبّارة حدود. ستتعلم:</p><ol><li>السؤال عن المقاسات والإجابة عنها.</li><li>صيغة المقارنة.</li><li>وصف المشكلة بـ ${e('too')} و ${e('enough')}.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u3-l1'](el,B)},
  ...R1.theory,
  {h:'تمارين الكتاب',ref:'ص 20–21',html:
   bk(1,'ص 20','ماذا تخبرك لافتات الطريق هذه؟',['7.5T: no vehicles heavier than 7.5 tonnes','4.4 m (14\'5"): no vehicles higher than 4.4 m','2.0 m (6\'6"): no vehicles wider than 2.0 m','10.0 m: no vehicles longer than 10 m','Safe height 5.3 m: overhead electric cables; vehicles must not be higher than 5.3 m','17T mgw / WEAK BRIDGE: the bridge is weak; maximum gross weight 17 tonnes'],'إجابات نموذجية بصياغتنا.')+
   bk(2,'ص 20','استمع إلى مكالمة العميلة، وأكمل مقاسات سيارتها التقريبية.',['1 (height) just over 3.2 m (with the bicycles)','2 (width) just under 1.9 m','3 (length) exactly 7 m'])+
   bk(3,'ص 20','استمع مرة أخرى وأكمل الحوار.',['1 wide is your van','2 1.9','3 wider than','4 How long is it','5 7','6 longer than','7 How high is it','8 3.2','9 higher than'])+
   bk(4,'ص 20','اقرأ صفحة SuperFerries: أي المركبات على اليسار تصعد العبّارة؟ وما نوعها؟',['1 (5 m, 2.9 m, bicycle on the roof): yes — a high car','2 (car and trailer, 7.6 m, 3.1 m): no — too long and too high','3 (7 m, 2.9 m, roof box): yes — a large car','4 (5 m, 1.85 m): yes — a standard car'],'من قراءتنا للرسوم.')+
   bk(5,'ص 21','اشرح المشكلة.',['2 The canal is 11.5 m wide, but the ship is 12.2 m wide. The ship is too wide for the canal.','3 The hangar is 18.8 m long, but the plane is 19.3 m long. The plane is too long for the hangar.','4 The box is 11.3 cm wide, but the CD is 12.2 cm across. The CD is too big for the box.','5 The slot is 2.88 mm wide, but the coin is 3 mm thick. The coin is too thick for the slot.','6 The hole is 4.35 cm long (deep), but the screw is 5.5 cm long. The screw is too long for the hole.'],'تصح أيضاً: The canal is not wide enough for the ship …')+
   bk(6,'ص 21','مهمة ثنائية: اقرأ عن الطائرة التي تسير على الطريق، وناقش: هل سيشتريها الناس؟ قارنها بالسيارة والطائرة الصغيرة، واذكر نقاط قوتها وضعفها.',null)+
   bk(7,'ص 21','اكتب رداً على بريد مديرك مستعيناً بملاحظات النقاش.',null,'نموذج في التمرين التفاعلي.')},
  {h:'الاستماع',ref:'ص 20',html:au('09','ص 20 — التمرينان 2 و 3','عميلة تتصل بشركة العبّارة.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u3-l1'](el,B),title:'شرح مرئي'}]},
  ...R1.stations,
  {recap:['How long / wide / high is it? — just under · exactly · just over','The vehicle must not be wider than 2 metres.','wider · noisier · bigger · more expensive · better','The lorry is too high for the bridge.','The bridge is not high enough for the lorry.']}
 ],
 lab:lab1,
 examples:[
  {title:'مثال 1: الحد',ref:'ص 20',q:`<p>العبّارة لا تقبل مركبة ارتفاعها أكثر من 2.9 م. اكتب الحد بـ ${e('must not be')}.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الصفة ${e('high')} ← المقارنة ${e('higher')}.`},{t:`الخطوة 2: + ${e('than')} + الرقم.`},{t:`الخطوة 3: ${e('The vehicle must not be higher than 2.9 metres.')}`,final:true}]},
  {title:'مثال 2: صيغة المقارنة',ref:'ص 21',q:`<p>أكمل: ${e('The new printer is ___ (noisy) than the old one.')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('noisy')} تنتهي بـ y بعد حرف ساكن.`},{t:`الخطوة 2: ${e('y')} ← ${e('ier')}.`},{t:`الخطوة 3: ${e('The new printer is noisier than the old one.')}`,final:true}]},
  {title:'مثال 3: too',ref:'ص 21',q:`<p>الباب عرضه 0.8 م، والثلاجة عرضها 0.9 م. اشرح المشكلة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('The door is 0.8 m wide, but the fridge is 0.9 m wide.')}`},{t:`الخطوة 2: الثلاجة أكبر من الحد: ${e('too wide for')}.`},{t:`الخطوة 3: ${e('The fridge is too wide for the door.')}`,final:true}]}
 ],
 quiz:[
  {q:'How ___ is your van? — It\'s 1.9 metres wide.',o:['wide','width','long','high'],c:0,e:'How wide.'},
  {q:'The vehicle must not be ___ than 2 metres.',o:['wider','more wide','widest','wide'],c:0,e:'wider than.'},
  {q:'noisy →',o:['noisier','noisyer','more noisy','noisiest'],c:0,e:'y → ier.'},
  {q:'big →',o:['bigger','biger','more big','biggest'],c:0,e:'نضاعف g.'},
  {q:'The lorry is ___ for the bridge.',o:['too high','high enough','too much high','enough high'],c:0,e:'too + صفة.'},
  {q:'The canal is not ___ for the ship.',o:['wide enough','enough wide','too wide','wider'],c:0,e:'صفة + enough.'}
 ]
});

/* ========== 2 Products ========== */
const PH={Classic:{dim:'115 x 61 x 11.6 mm',thick:11.6,weight:135,screen:88.9,battery:16,charge:3.5},Fonarama:{dim:'96 x 52 x 9.7 mm',thick:9.7,weight:94,screen:72,battery:24,charge:3}};
const FE=[['thick','thickness','thinner','thicker','mm'],['weight','weight','lighter','heavier','g'],['screen','screen size','smaller','bigger','mm'],['battery','battery life','longer','shorter','hours'],['charge','charging time','shorter','longer','hours']];
function lab2(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">قارن بين هاتفين</h3><p class="sub">مختبر مبني على جدول التمرين 6 ص 23 (بيانات الكتاب). اختر الميزة.</p>
  <label class="sub">الميزة</label><select id="f">${FE.map((x,i)=>`<option value="${i}">${x[1]}</option>`).join('')}</select><div id="d"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">الجملة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أي هاتف أخف؟ وكم الفرق؟</li><li>لماذا نقول much lighter؟</li><li>في جملة «Which one would you like?» إلامَ تعود one؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const [k,n,a,b,u]=FE[+$('#f').value];const c=PH.Classic[k],f=PH.Fonarama[k];const fwin=(k==='battery')?f>c:f<c;
  $('#d').innerHTML=art(`${[['Classic',c,60],['Fonarama',f,200]].map(([nm,v,x])=>{const H=v/Math.max(c,f)*200;return `<g data-tip="${nm}: ${v} ${u}"><rect x="${x}" y="${250-H}" width="100" height="${H}" rx="8" fill="${nm==='Fonarama'?C.yel:C.paper}" stroke="${C.ink}" stroke-width="1.5"/>${TL(x+50,270,nm,{fs:13,w:700})}${TL(x+50,240-H,`${v} ${u}`,{fs:12})}</g>`}).join('')}`,'compare');
  const s=`The Fonarama is ${k==='battery'?'better':'much'} … `;
  const big=Math.abs(c-f)/Math.max(c,f)>0.2;
  const sent=k==='thick'?`The Fonarama is ${big?'much ':''}thinner than the Classic. It's only ${f} mm thick.`:k==='weight'?`The Fonarama is ${big?'much ':''}lighter than the Classic. It weighs only ${f} g.`:k==='screen'?`The screen of the Fonarama is ${big?'much ':''}smaller. It's only ${f} mm across.`:k==='battery'?`The battery of the Fonarama lasts ${big?'much ':''}longer: ${f} hours.`:`The Fonarama's charging time is ${big?'a bit ':''}shorter: only ${f} hours.`;
  $('#o').innerHTML=eb([sent,`Which one would you like? The Classic or the Fonarama? — The ${fwin?'Fonarama':'Classic'} one, please.`])};
 $('#f').onchange=sh;sh();
}
const FN={want:["I'd like to cancel an order, please.",'قول ما تريد (a)'],offer:['Would you like me to send you a specification table?','عرض خدمة (b)'],shall:['Shall I put you through to the service department?','عرض خدمة (b)'],ask:['Could you give me your name, please?','طلب من شخص (c)'],mind:['Would you mind telling me what the problem is?','طلب من شخص (c)'],check:['Sorry, could you repeat that, please?','التحقق من معلومة (d)'],spell:['Did you say Johnson?','التحقق من معلومة (d)']};
const LAB3C={title:'عبارات الهاتف المهذبة ووظائفها',w:(el,B)=>N.labB(el,B,{intro:'اختر العبارة، وشاهد وظيفتها.',
 controls:[{k:'f',label:'العبارة',opts:Object.keys(FN).map(k=>[k,FN[k][0].slice(0,26)+'…'])}],
 out:({f})=>{const [s,ar]=FN[f];return{pieces:[[s,'k',ar]],say:s,why:f==='mind'?`بعد ${e('Would you mind')} الفعل بـ ${e('ing')}.`:f==='offer'?`${e('Would you like me to')} + الفعل: عرض مهذب.`:`عبارة مهذبة: ${ar}.`}}})};
const ONE={spanner:['Please pass me a spanner.','Which one do you want? The long one or the short one?'],mp3:["I'd like to buy an MP3 player, please.",'Which one would you like? The white one or the black one?'],radio:["I'd like a portable radio, please.","There's one with rechargeable batteries, and there's one with normal batteries."]};
const LAB3D={title:'one بدل تكرار الاسم',w:(el,B)=>N.labB(el,B,{intro:'اختر الحوار، ولاحظ one.',
 controls:[{k:'o',label:'الحوار',opts:[['spanner','spanner'],['mp3','MP3 player'],['radio','portable radio']]}],
 out:({o})=>{const [a,b]=ONE[o];return{pieces:[[a,'x','A'],[b,'k','B']],say:`${a} ${b}`,why:`${e('one')} تعود على الاسم المذكور (${e(o==='mp3'?'MP3 player':o==='radio'?'radio':'spanner')}) حين نختار بين نوعين، فلا نكرره.`}}})};
const R2=N.rule({title:'عبارات الهاتف المهذبة، والمقارنة بـ much، و one',ref:'ص 22–23، ص 102',
 intro:`موظفة خدمة العملاء تتلقى مكالمات: طلب كتالوج، إلغاء طلب، شكوى. تحتاج عبارات مهذبة، وتحتاج أن تقارن بين منتجين.`,
 parts:[
 {t:'العبارات المهذبة في الهاتف',short:'Could you …? Would you mind …?',old:[1],q:'كيف تطلب اسم المتصل بأدب؟',ref:'ص 22',
  lead:`لكل وظيفة في المكالمة عبارات مهذبة ثابتة.`,
  points:[`<b>قول ما تريد:</b> ${e("I'd like to cancel an order. · I'd like some information about the ePhone.")}`,`<b>عرض خدمة:</b> ${e('Would you like me to send you a specification table? · Shall I put you through to the service department?')}`,`<b>طلب من شخص:</b> ${e('Could I have your name, please? · Do you think you could tell me the model number? · Would you mind telling me what the problem is?')}`,`<b>التحقق من معلومة:</b> ${e('Sorry, could you repeat that, please? · Did you say Johnson? · How do you spell that?')}`,`بعد ${e('Would you mind')} الفعل بـ ${e('ing')}، وبعد ${e('Would you like me')} يأتي ${e('to')} + الفعل.`],
  grid:{head:['الوظيفة','مثال'],rows:[['saying what you want',"I'd like to order an ePhone."],['offering','Shall I put you through?'],['asking someone','Could you repeat that, please?'],['checking','Did you say Martins?']]},
  pairs:[['Would you mind to tell me …?','Would you mind telling me …?','mind + ing.'],['Would you like me send …?','Would you like me to send …?','me to + الفعل.']],labs:[LAB3C]},
 {t:'much + المقارنة، و one',short:'much lighter · the black one',old:[2],q:'كيف تقول إن الفرق كبير؟ وكيف لا تكرر اسم الشيء؟',ref:'ص 23',
  lead:`نضع ${e('much')} قبل المقارنة إذا كان الفرق كبيراً، ونستعمل ${e('one')} بدل تكرار الاسم حين نختار بين نوعين.`,
  points:[`<b>فرق كبير:</b> ${e('The Fonarama is much lighter than the Classic.')}، و <b>فرق صغير:</b> ${e('a bit')} أو ${e('slightly')}.`,`<b>only</b> تؤكد أن الرقم صغير: ${e("It's only 9.7 mm thick. · It weighs only 94 g.")}`,`<b>one:</b> ${e('Which one would you like? The 8 GB one or the 12 GB one? — The 12 GB one, please.')}`,`للجمع ${e('ones')}: ${e('the red ones')}.`],
  grid:{head:['','Classic','Fonarama'],rows:[['Weight','135 g','94 g'],['Screen','88.9 mm','72 mm'],['Battery','16 hours','24 hours']]},
  pairs:[['The Fonarama is very lighter.','The Fonarama is much lighter.','very لا تأتي مع المقارنة.'],['The black, please.','The black one, please.','نحتاج one.']],labs:[LAB3D]}
 ]});
B.lesson({
 id:'u3-l2',unit:3,order:2,pages:'22–23',
 title:'2 Products — المنتجات',
 summary:'مكالمات خدمة العملاء وسجل المكالمات، والعبارات المهذبة لقول ما تريد وعرض الخدمة والطلب والتحقق (I\'d like … · Would you like me to … · Could you … · Would you mind …ing)، والمقارنة بين هاتفين بـ much، واستعمال one بدل تكرار الاسم.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 22–23',html:`<p>تعمل في خدمة العملاء لشركة إلكترونيات. ستتعلم:</p><ol><li>العبارات المهذبة في الهاتف ووظائفها.</li><li>المقارنة بين منتجين بـ ${e('much')}.</li><li>${e('one')} بدل تكرار الاسم.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u3-l2'](el,B)},
  ...R2.theory,
  {h:'تمارين الكتاب',ref:'ص 22–23',html:
   bk(1,'ص 22','ما أهم المزايا لك في الهاتف المحمول؟ رتّبها حسب الأهمية وقارن مع زميلك.',null)+
   bk(2,'ص 22','استمع وأكمل سجل المكالمات.',['complained about fault in ePhone: call 6 — Gray','cancelled order for classic ePhone: call 3 — Walters','requested service assistance: call 5 — Brandt','requested ePhone catalogue: call 1 — Willard','requested information about ePhones: call 4 — Martinez','placed order for classic ePhone: call 2 — Jensen'])+
   bk(3,'ص 22','استمع مرة أخرى وأكمل الجمل.',['1 could','2 Could',"3 'd (would)",'4 Do · could',"5 'd (would)",'6 Would · to','7 Shall','8 Would · telling'])+
   bk(4,'ص 22','طابق جمل التمرين 3 بالوظائف.',['a) saying what you want: 3, 5','b) offering to do something: 6, 7','c) asking someone to do something: 2, 4, 8','d) checking information: 1'],'من فهمنا للوظائف؛ قد يُقبل 1 ضمن c أيضاً.')+
   bk(5,'ص 22','نشاط ثنائي: مثّلا مكالمات بين عميل وموظف، الحوارات الستة، بالاستعانة بسجل المكالمات ونص الاستماع ص 121.',null)+
   bk(6,'ص 23','انظر إلى الجدول وأكمل المكالمة.',['1 thinner (smaller)','2 lighter','3 smaller','4 bigger (larger)'])+
   bk(7,'ص 23','تدرّب على الحوار وأضف معلومات أخرى من الجدول.',null)+
   bk(8,'ص 23','إلامَ تعود كلمة one في الحوار؟',['MP3 player'])+
   bk(9,'ص 23','كلمة one ناقصة من أربعة مواضع. حدّدها.',["There's one with rechargeable batteries, and there's one with normal batteries.",'Which one would you like?',"I'd like the red one with the rechargeable batteries, please."])+
   bk(10,'ص 23','استمع وتحقق من إجاباتك.',null)+
   bk(11,'ص 23','تدرّب مع زميلك على الحوار المصحح.',null)},
  {h:'الاستماع',ref:'ص 22–23',html:au('10','ص 22 — التمارين 2–5','ست مكالمات لخدمة العملاء.')+au('11','ص 23 — التمرين 10','شراء راديو محمول.')}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u3-l2'](el,B),title:'شرح مرئي'}]},
  ...R2.stations,
  {recap:["I'd like to … (ما تريد)",'Would you like me to …? · Shall I …? (عرض)','Could you …? · Would you mind …ing? (طلب)','Sorry, could you repeat that? · Did you say …? (تحقق)','much lighter · Which one? The black one.']}
 ],
 lab:lab2,
 examples:[
  {title:'مثال 1: طلب مهذب',ref:'ص 22',q:`<p>اطلب من المتصل رقم هاتفه بأدب، مستعملاً ${e('Would you mind')}.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Would you mind')}`},{t:`الخطوة 2: الفعل بـ ${e('ing')}: ${e('giving')}`},{t:`الخطوة 3: ${e('Would you mind giving me your phone number, please?')}`,final:true}]},
  {title:'مثال 2: المقارنة',ref:'ص 23',q:`<p>بطارية Fonarama تدوم 24 ساعة، و Classic 16 ساعة. قارن.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('long')} ← ${e('longer')}، والفرق كبير: ${e('much')}.`},{t:`الخطوة 2: ${e('The battery of the Fonarama lasts much longer')}`},{t:`الخطوة 3: ${e('The battery of the Fonarama lasts much longer than the battery of the Classic.')}`,final:true}]},
  {title:'مثال 3: one',ref:'ص 23',q:`<p>بلا تكرار: ${e('Do you want the big screwdriver or the small screwdriver?')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: الاسم المكرر ${e('screwdriver')}.`},{t:`الخطوة 2: نضع ${e('one')} بدله.`},{t:`الخطوة 3: ${e('Do you want the big one or the small one?')}`,final:true}]}
 ],
 quiz:[
  {q:'Sorry, ___ you repeat that, please?',o:['could','would like','shall','do'],c:0,e:'طلب مهذب.'},
  {q:'___ I put you through to the service department?',o:['Shall','Would','Do','Could you'],c:0,e:'عرض خدمة.'},
  {q:'Would you mind ___ me what the problem is?',o:['telling','to tell','tell','told'],c:0,e:'mind + ing.'},
  {q:'Would you like me ___ you a catalogue?',o:['to send','send','sending','sent'],c:0,e:'me to.'},
  {q:'The Fonarama is ___ lighter than the Classic.',o:['much','very','more','too'],c:0,e:'much + المقارنة.'},
  {q:'Which ___ would you like? The red one or the black one?',o:['one','ones','it','that'],c:0,e:'one.'}
 ]
});

/* ========== 3 Equipment ========== */
const CAR={'Land Rover Defender':{pass:9,price:24700,engine:2.4,tow:3500,clear:215.9,speed:132,fuel:4.7,wb:2794,tank:75,height:2021},'Jeep Cherokee':{pass:5,price:23620,engine:2.8,tow:3360,clear:234,speed:173,fuel:15.5,wb:2649,tank:77.6,height:1807},'Toyota Land Cruiser':{pass:8,price:28000,engine:4.7,tow:2948,clear:222,speed:174,fuel:7.2,wb:2850,tank:96.1,height:1830},'Mitsubishi Shogun':{pass:5,price:27300,engine:3.2,tow:2800,clear:225,speed:170,fuel:12.6,wb:2545,tank:71,height:1105}};
const CR=[['wb','wheelbase','the longest wheelbase','mm',1],['clear','ground clearance','the highest clearance','mm',1],['engine','engine size','the most powerful engine','litre',1],['pass','passengers','the most space (passengers)','',1],['fuel','fuel consumption (km/L)','the lowest fuel consumption','km/L',1],['tank','tank','the largest fuel tank','L',1],['tow','towing power','the best towing power','kg',1],['price','price','the lowest price','£',0]];
function lab3(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">اختيار سيارة 4x4</h3><p class="sub">بيانات السيارات الأربع من صفحات الطلاب أ و ب و ج و د في الكتاب (ص 111–117). اختر المعيار.</p>
  <label class="sub">المعيار</label><select id="c">${CR.map((x,i)=>`<option value="${i}">${x[1]}</option>`).join('')}</select><div id="d"></div></div>
 <div class="c7 panel"><h3 style="margin-top:0">التقرير</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا نضع the قبل صيغة التفضيل؟</li><li>اختر fuel consumption: لماذا الأفضل هو الرقم الأكبر هنا (كيلومتر لكل لتر)؟</li><li>أي سيارة تختار لفريق منصة النفط؟ لماذا؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const [k,n,sup,u,hi]=CR[+$('#c').value];const ns=Object.keys(CAR);const vals=ns.map(x=>CAR[x][k]);const best=hi?Math.max(...vals):Math.min(...vals);const w=ns[vals.indexOf(best)];
  $('#d').innerHTML=`<table class="rt" style="margin-top:8px"><tbody>${ns.map(x=>`<tr${x===w?' style="background:var(--accent-soft,#e3f1ea);font-weight:700"':''}><td lang="en">${x}</td><td lang="en" dir="ltr">${u==='£'?'£'+CAR[x][k].toLocaleString('en'):CAR[x][k]+' '+u}</td></tr>`).join('')}</tbody></table>`;
  $('#o').innerHTML=eb([`The ${w} has ${sup}.`,`It is ${u==='£'?'£'+best.toLocaleString('en'):best+' '+u}.`])};
 $('#c').onchange=sh;sh();
}
const LAB3E={title:'صيغة التفضيل',w:(el,B)=>N.labB(el,B,{intro:'اختر الصفة، وشاهد صيغة التفضيل مع the.',
 controls:[{k:'a',label:'الصفة',opts:['long','wide','big','noisy','fast','expensive','powerful','good','bad','far'].map(a=>[a,a])}],
 out:({a})=>{const s=SUP(a);return{pieces:[['This is','x',''],[s,'k','التفضيل'],['car in the world.','x','']],say:`This is ${s} car in the world.`,why:/most/.test(s)?'صفة طويلة: the most + الصفة.':['good','bad','far'].includes(a)?'شاذة: best · worst · farthest.':'مقطع واحد أو تنتهي بـ y: the + الصفة + est.'}}})};
const R3=N.rule({title:'صيغة التفضيل، و as … as',ref:'ص 24–25، ص 102',
 intro:`حين نختار من بين ثلاثة أشياء أو أكثر نستعمل <b>صيغة التفضيل</b>: الأسرع، الأرخص، الأقوى.`,
 parts:[
 {t:'صيغة التفضيل',short:'the fastest · the most expensive',old:[1],q:'كيف تقول: أرخص محرك من الخمسة؟',ref:'ص 24، ص 102',
  lead:`من المقارنة إلى التفضيل: ${e('er')} ← ${e('est')}، و ${e('more')} ← ${e('most')}، و ${e('less')} ← ${e('least')}، ونضع ${e('the')} قبلها.`,
  points:[`${e('longest · widest · biggest · noisiest · most expensive · least noisy')}`,`<b>the:</b> ${e('the fastest car in the world')}`,`<b>الشاذ (خمسة):</b> ${e('best · worst · farthest / furthest · most · least')}`,`مع الأرقام: ${e('Engine D is the cheapest engine.')} ${e('The heaviest engine is Engine B.')}`],
  grid:{head:['الصفة','المقارنة','التفضيل'],rows:[['fast','faster','the fastest'],['noisy','noisier','the noisiest'],['expensive','more expensive','the most expensive'],['good','better','the best']]},
  pairs:[['the most fastest','the fastest','لا نجمع most و est.'],['Engine D is cheapest engine.','Engine D is the cheapest engine.','نحتاج the.']],labs:[LAB3E]},
 {t:'as … as: التساوي',short:'as powerful as',old:[2],q:'كيف تقول إن المحركين بالقوة نفسها؟',ref:'ص 24',
  lead:`إذا تساوى شيئان نستعمل ${e('as')} + الصفة كما هي + ${e('as')}.`,
  points:[`${e('Engine C is as powerful as Engine E.')} (كلاهما 115 hp)`,`النفي: ${e('Engine D is not as heavy as Engine B.')} = أخف منه.`],
  pairs:[['as powerful than','as powerful as','as … as.'],['as more powerful as','as powerful as','الصفة كما هي.']]}
 ]});
B.lesson({
 id:'u3-l3',unit:3,order:3,pages:'24–25',
 title:'3 Equipment — المعدات',
 summary:'الأرقام القياسية، وبريد عن اختبار محركات القوارب، والقراءة السريعة في جداول المواصفات ونتائج الاختبار، وصيغة التفضيل (the fastest, the most expensive, the best)، و as … as، ومهمة اختيار سيارة 4x4 لفريق منصة نفط في الصحراء وكتابة تقرير.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 24–25',html:`<p>تختار أفضل محرك وأفضل سيارة لفريق العمل. ستتعلم:</p><ol><li>صيغة التفضيل.</li><li>${e('as … as')} للتساوي.</li><li>كتابة تقرير قصير عن اجتماع ومقارنة.</li></ol>`},
  {h:'شاهد الفكرة',widget:(el,B)=>window.VX.L['u3-l3'](el,B)},
  ...R3.theory,
  {h:'تمارين الكتاب',ref:'ص 24–25',html:
   bk(1,'ص 24','ناقش في مجموعة: هل ما زال كل رقم قياسي قائماً؟',['1 لا: الرقم الحالي 9.58 ثانية (Usain Bolt، 2009)','2 لا: الأعلى اليوم برج خليفة في دبي (نحو 828 م، 2010)','3 لا: صُنعت ترانزستورات أصغر كثيراً بعد صدور الكتاب','4 نعم: ما زال 437 يوماً (Valeri Polyakov)'],'معلومة محدّثة من خارج الكتاب (الكتاب طبعة 2008).')+
   bk(2,'ص 24','اقرأ البريدين وأجب.',['1a to ask Jeff to test five engines · 1b to confirm the tests are finished and send the results','2a they are going to replace all their outboard engines · 2b test five engines and tell him the cheapest and the best performance','3a he has finished the tests; he is attaching specs and test results · 3b to send a full report in a couple of days'])+
   bk(3,'ص 24 و ص 118–119','القراءة السريعة: ضع خطاً تحت الإجابة الصحيحة.',['Specifications: 1 longer · 2 B · 3 cheapest · 4 as powerful as','Test results: 1 fastest · 2 most rapid · 3 quietest · 4 A'])+
   bk(4,'ص 25','قارن: فكّر في أكبر عدد من الفروق.',null)+
   bk(5,'ص 25','اكتب مع زميلك ثلاثة منتجات تعرفها وقارن بينها.',null)+
   bk(6,'ص 25 و ص 111–117','مهمة: اجتماع لاختيار سيارة 4x4 لفريق منصة نفط في الصحراء. معلومات الطالب أ ص 111، ب ص 113، ج ص 115، د ص 117.',null,'لا جواب واحداً؛ المقارنة في المختبر وفي التمرين التفاعلي.')+
   bk(7,'ص 25','اكتب تقريراً قصيراً عن الاجتماع: القرار وأسبابه.',null)}
 ],
 stations:[
  {intro:true},
  {st:0,short:'شاهد الفكرة',title:'شاهد الفكرة',q:'شاهد القاعدة بعينك قبل التمارين.',body:[{widget:(el,B)=>window.VX.L['u3-l3'](el,B),title:'شرح مرئي'}]},
  ...R3.stations,
  {recap:['the longest · the biggest · the noisiest · the most expensive','best · worst · farthest · most · least','Engine C is as powerful as Engine E.','The Toyota Land Cruiser has the longest wheelbase.','We decided to buy the … because …']}
 ],
 lab:lab3,
 examples:[
  {title:'مثال 1: التفضيل',ref:'ص 24',q:`<p>من الجدول: أرخص محرك هو D (8934 دولاراً). اكتب الجملة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('cheap')} ← ${e('cheapest')}.`},{t:`الخطوة 2: ${e('the')} قبلها.`},{t:`الخطوة 3: ${e('Engine D is the cheapest engine.')}`,final:true}]},
  {title:'مثال 2: صفة طويلة',ref:'ص 24',q:`<p>أغلى محرك هو B. اكتب الجملة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('expensive')} صفة طويلة.`},{t:`الخطوة 2: ${e('the most expensive')}`},{t:`الخطوة 3: ${e('Engine B is the most expensive engine.')}`,final:true}]},
  {title:'مثال 3: التقرير',ref:'ص 25',q:`<p>اكتب جملة التقرير: Jeep Cherokee أعلى ارتفاعاً عن الأرض (234 مم).</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('high')} ← ${e('the highest')}.`},{t:`الخطوة 2: ${e('The Jeep Cherokee has the highest clearance.')}`},{t:`الخطوة 3: ${e('The Jeep Cherokee has the highest clearance. It is 234 mm.')}`,final:true}]}
 ],
 quiz:[
  {q:'The ___ engine was Engine C. (fast)',o:['fastest','faster','most fast','fastiest'],c:0,e:'est.'},
  {q:'Engine B is ___ engine.',o:['the heaviest','heaviest','the most heavy','the heavier'],c:0,e:'the + iest.'},
  {q:'good → the ___',o:['best','goodest','better','most good'],c:0,e:'شاذ.'},
  {q:'The ___ engine was Engine B. (quiet)',o:['quietest','most quiet','quieter','quiet'],c:0,e:'est.'},
  {q:'Engine C is ___ Engine E.',o:['as powerful as','as powerful than','more powerful as','powerful as'],c:0,e:'as … as.'},
  {q:'This is ___ expensive car in the shop.',o:['the most','most','the more','more'],c:0,e:'the most.'}
 ]
});
})(PLCBOOK);

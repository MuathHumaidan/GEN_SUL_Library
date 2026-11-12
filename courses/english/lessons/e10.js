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

B.lesson({
 id:'u10-l1',unit:10,order:1,pages:'74–75',
 title:'Rules and warnings — القواعد والتحذيرات',
 summary:'قواعد السلامة بـ must / mustn\'t / always / never / do not، وأنواع لوحات السلامة الثلاثة بألوانها وأشكالها، والنتائج المحتملة للخطر بـ might و could.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 74–75',html:`<ol><li>تكتب قواعد السلامة: ${e('You must wear a hard hat.')}</li><li>تميّز لوحات التحذير والمنع والإلزام.</li><li>تحوّل اللوحة إلى جملة: ${e('Do not smoke here.')}</li><li>تقول النتيجة المحتملة للخطر: ${e('You might burn your arm.')}</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 74–75',html:vt(VOC101)},
  {h:'القواعد',ref:'ص 75',html:`<div class="tbx"><table class="vt" dir="ltr"><thead><tr><th>Do this ✓</th><th>Don't do this ✗</th></tr></thead><tbody><tr><td class="en">Wear a hard hat here.</td><td class="en">Do not / Don't touch the machine.</td></tr><tr><td class="en">Always wear a hard hat here.</td><td class="en">Never touch the machine.</td></tr><tr><td class="en">You must wear a hard hat here.</td><td class="en">You must not / mustn't touch the machine.</td></tr></tbody></table></div><p>بعد ${e('must / mustn\'t / always / never / don\'t')} الفعل الأصلي.</p>`},
  {h:'أنواع لوحات السلامة (معيار ISO)',ref:'ص 74',html:`${vt([['Warning signs','تحذير: مثلث أصفر بإطار أسود','There is a danger. Be careful.'],['Prohibition signs','منع: دائرة حمراء وبيضاء وسوداء بخط مائل','Do not do this.'],['Mandatory action signs','إلزام: دائرة زرقاء وبيضاء','You must do this.']],['النوع','الشكل واللون','المعنى'])}<div class="sb sb-add" style="margin-top:8px"><div class="sb-h"><span class="tg t-add">إضافة من خارج الكتاب</span></div><div class="prose">في المعيار نفسه نوعان آخران: <b>لوحات الحالة الآمنة</b> خضراء (مثل مخرج الطوارئ ${e('fire exit')})، و<b>لوحات معدات الحريق</b> حمراء مربعة (مثل طفاية الحريق).</div></div>`},
  {h:'النتيجة المحتملة: might و could',ref:'ص 75',html:`${eb(['Be careful. The surface is hot. You <b>might</b> burn your hand.','Danger. Lasers. You <b>could</b> injure your eyes.'])}<p>${e('might')} و ${e('could')} هنا بمعنى واحد تقريباً: «قد».</p>`},
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
  {st:1,short:'must / mustn\'t',title:'قواعد السلامة',q:'كيف تكتب قاعدة لبس الخوذة بثلاث طرق؟',ref:'ص 75',
   art:art(`<g data-tip="Wear a hard hat. / Always wear a hard hat. / You must wear a hard hat.">${signSVG('mandatory','⛑',120).replace('<svg ','<svg x="40" y="70" ')}</g><g data-tip="Don't touch. / Never touch. / You mustn't touch.">${signSVG('prohibition','✋',120).replace('<svg ','<svg x="200" y="70" ')}</g>${TL(100,230,'must',{fs:16,w:700,c:C.blue})}${TL(260,230,"mustn't",{fs:16,w:700,c:C.red})}`,'لوحة إلزام ولوحة منع'),
   cap:'إلزام ومنع. مرّر المؤشر على كل لوحة.',
   side:[{tip:'<span class="en">mustn\'t</span> = ممنوع. ولا تخلطها بـ <span class="en">don\'t have to</span> (لا يلزم).'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر الكلمة:',items:[{s:'You ___ wear safety boots in the workshop.',o:['must','mustn\'t','never'],a:0},{s:'___ use your phone near the fuel pump.',o:['Never','Always','Must'],a:0},{s:"You ___ open this door. It's an emergency door only.",o:["mustn't","must","always"],a:0}]}),title:'مختبر مصغّر: القاعدة'}]},
  {st:2,short:'أنواع اللوحات',title:'التحذير والمنع والإلزام',q:'لوحة دائرية زرقاء: هل هي منع أم إلزام؟',ref:'ص 74',
   art:art(`<g data-tip="Warning: yellow and black, triangle — تحذير">${signSVG('warning','!',90).replace('<svg ','<svg x="30" y="110" ')}</g><g data-tip="Prohibition: red, white and black, round — منع">${signSVG('prohibition','🔥',90).replace('<svg ','<svg x="135" y="110" ')}</g><g data-tip="Mandatory: blue and white, round — إلزام">${signSVG('mandatory','👓',90).replace('<svg ','<svg x="240" y="110" ')}</g>${TL(75,230,'warning',{fs:12,w:700})}${TL(180,230,'prohibition',{fs:12,w:700})}${TL(285,230,'mandatory',{fs:12,w:700})}`,'ثلاث لوحات: تحذير ومنع وإلزام'),
   cap:'الأنواع الثلاثة. مرّر المؤشر على كل لوحة.',
   side:[{tip:'اللون والشكل يكفيان لفهم اللوحة دون لغة، ولهذا تُستعمل في أوروبا رغم كثرة لغاتها.'}],
   body:[{widget:(el,B)=>N.sort(el,B,{intro:'صنّف اللوحة من وصفها:',cats:['تحذير','منع','إلزام'],items:[['دائرة زرقاء فيها قفازات',2,'إلزام: You must wear gloves.'],['مثلث أصفر فيه صاعقة',0,'تحذير: high voltage.'],['دائرة حمراء بخط مائل على سيجارة',1,'منع: No smoking.'],['دائرة زرقاء فيها أذن بسماعة',2,'إلزام: wear ear protection.']]}),title:'مختبر مصغّر: صنّف'}]},
  {st:3,short:'might / could',title:'النتيجة المحتملة',q:'أمامك تروس مكشوفة. ماذا قد يحدث ليدك؟',ref:'ص 75',
   art:art(`<g data-tip="Be careful. You might trap your hand in the gears."><circle cx="140" cy="150" r="50" fill="${C.mut}" stroke="${C.ink}" stroke-width="3"/><circle cx="225" cy="150" r="38" fill="${C.mut}" stroke="${C.ink}" stroke-width="3"/>${TL(180,250,'You might trap your hand.',{fs:14,w:700})}</g>`,'ترسان متداخلان'),
   cap:'خطر التروس. مرّر المؤشر على الرسم.',
   side:[{tip:'<span class="en">You might / could + فعل أصلي</span>: burn your arm, injure yourself, get an electric shock, trap your hand.'}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر التحذير المناسب:',cases:[{q:'A wet floor',opts:[['You could slip and fall.',1,''],['You could burn your hand.',0,'']]},{q:'An open cable box',opts:[['You might get an electric shock.',1,''],['You might trap your hand.',0,'']]}]}),title:'مختبر مصغّر: النتيجة'}]},
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

B.lesson({
 id:'u10-l2',unit:10,order:2,pages:'76–77',
 title:'Safety hazards — مخاطر السلامة',
 summary:'التحذير من الخطر ونتيجته، ووصف مخاطر ورشة بـ There is / There are، وتحويلها إلى الماضي There was / There were و was / were في تقرير التفتيش، وكتابة قواعد للورشة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 76–77',html:`<ol><li>تحذّر من خطر وتذكر نتيجته: ${e("Look out! There's a low beam. You could injure your head.")}</li><li>تصف ما تراه في ورشة: ${e('There are some boxes on the stairs.')}</li><li>تكتب تقرير تفتيش بالماضي: ${e('There were some boxes on the stairs.')}</li><li>تكتب قواعد سلامة للورشة.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 76–77',html:vt(VOC102)},
  {h:'There is / are ← There was / were',ref:'ص 77',html:`<div class="tbx"><table class="vt" dir="ltr"><thead><tr><th>Now</th><th>Report (past)</th></tr></thead><tbody><tr><td class="en">There's some liquid on the floor.</td><td class="en">There was some liquid on the floor.</td></tr><tr><td class="en">There are some boxes on the stairs.</td><td class="en">There were some boxes on the stairs.</td></tr><tr><td class="en">The fire exit is locked.</td><td class="en">The fire exit was locked.</td></tr><tr><td class="en">Some cables are coiled.</td><td class="en">Some cables were coiled.</td></tr></tbody></table></div><p>المفرد وغير المعدود: ${e('is → was')}، والجمع: ${e('are → were')}. وللنفي: ${e('There were no fire extinguishers.')}</p>`},
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
  {st:1,short:'التحذير',title:'التحذير ونتيجته',q:'زميلك سيمشي تحت عارضة منخفضة. ماذا تقول له؟',ref:'ص 76',
   art:art(`<g data-tip="Look out! There's a low beam in front of you. You could injure your head."><rect x="40" y="100" width="280" height="22" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${[0,1,2,3,4,5,6].map(i=>`<rect x="${48+i*40}" y="100" width="18" height="22" fill="${C.ink}"/>`).join('')}<circle cx="180" cy="160" r="22" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/><rect x="164" y="182" width="32" height="70" rx="8" fill="${C.blue}"/></g>${TL(180,280,'Look out!',{fs:18,w:700,c:C.red})}`,'شخص يقترب من عارضة منخفضة'),
   cap:'خطر العارضة. مرّر المؤشر على الرسم.',
   side:[{tip:'التحذير ثلاثة أجزاء: <span class="en">Look out! / Be careful!</span> ثم الخطر <span class="en">There\'s a …</span> ثم النتيجة <span class="en">You could …</span>.'}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر النتيجة المناسبة:',cases:[{q:"Be careful! There are some bricks on the floor.",opts:[['You could trip over them.',1,''],['You could get an electric shock.',0,'']]},{q:"Look out! There's a gap in the floor.",opts:[['You might fall into it.',1,''],['You might burn your hands.',0,'']]}]}),title:'مختبر مصغّر: النتيجة'}]},
  {st:2,short:'was / were',title:'من الحاضر إلى تقرير الماضي',q:'وجدت أمس صناديق على الدرج. كيف تكتبها في التقرير؟',ref:'ص 77',
   art:art(`<g data-tip="الآن: There are some boxes on the stairs."><rect x="30" y="80" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,111,'There are some boxes…',{fs:15,w:700})}</g>${arrowS(180,134,180,166,C.ink,3)}
    <g data-tip="التقرير: There were some boxes on the stairs."><rect x="30" y="170" width="300" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,201,'There were some boxes…',{fs:15,w:700})}</g>`,'are تصير were'),
   cap:'التحويل إلى الماضي. مرّر المؤشر على كل جملة.',
   side:[{tip:'<span class="en">is → was</span> و <span class="en">are → were</span>، والباقي كما هو.'}],
   body:[{widget:(el,B)=>N.typ(el,B,{intro:'حوّل إلى الماضي (جمل جديدة):',items:[{q:e("There's a hole in the fence."),a:['There was a hole in the fence.']},{q:e('Two windows are broken.'),a:['Two windows were broken.']},{q:e('There are no cones around the gap.'),a:['There were no cones around the gap.']}]}),title:'مختبر مصغّر: حوّل'}]},
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

B.lesson({
 id:'u10-l3',unit:10,order:3,pages:'78–79',
 title:'Investigations — التحقيق في الحوادث',
 summary:'تحديد الاتجاه بالساعة (at two o\'clock)، وتحذير برج المراقبة، وأسئلة التحقيق بالماضي (Where were…? When did… happen?)، وتقرير الحادثة، والدعوة والاعتذار في الحديث الاجتماعي.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 78–79',html:`<ol><li>تحدد اتجاه شيء بالنسبة إليك بالساعة: ${e("Unknown traffic at two o'clock.")}</li><li>تقرأ خبراً عن حادثة وتملأ تقريرها.</li><li>تسأل أسئلة التحقيق بالماضي وتجيب.</li><li>تدعو زميلاً أو تعتذر بلباقة.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 78–79',html:vt(VOC103)},
  {h:'الاتجاه بالساعة',ref:'ص 78',html:`<p>تخيّل ساعة حولك: <b>12</b> أمامك تماماً، و<b>3</b> يمينك، و<b>6</b> خلفك، و<b>9</b> يسارك:</p>${eb(["There's a plane at two o'clock. (أمامك يميناً)","Turn left. Heading 270."])}`},
  {h:'أسئلة التحقيق بالماضي',ref:'ص 79',html:`${eb(['Where <b>were</b> the planes? — They were 3500 m above the city.','When <b>did</b> the incident <b>happen</b>? — It happened at 22.17.','How far <b>was</b> the jet from the plane?','How many passengers <b>were</b> on the plane?'])}<p>مع ${e('be')}: ${e('was / were')} في السؤال. ومع بقية الأفعال: ${e('did')} + الفعل الأصلي.</p>`},
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
  {st:1,short:'الاتجاه بالساعة',title:"at two o'clock",q:'طائرة تظهر أمامك قليلاً إلى اليمين. أي ساعة؟',ref:'ص 78',
   art:art(`<circle cx="180" cy="160" r="110" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${[...Array(12)].map((_,i)=>{const a=(i+1)/12*2*Math.PI;return TL(180+95*Math.sin(a),165-95*Math.cos(a),i+1,{fs:14,w:700})}).join('')}
    <g data-tip="أنت في المركز ومقدمتك نحو 12."><path d="M180 140 l10 28 l-10 -6 l-10 6z" fill="${C.blue}"/></g>
    <g data-tip="at two o'clock: أمامك يميناً"><circle cx="${180+70*Math.sin(Math.PI/3)}" cy="${160-70*Math.cos(Math.PI/3)}" r="9" fill="${C.red}"/></g>`,'ساعة حول الطائرة وهدف عند الساعة الثانية'),
   cap:'الاتجاه بالساعة. مرّر المؤشر على طائرتك وعلى الهدف.',
   side:[{tip:'<b>12</b> أمامك، <b>3</b> يمينك، <b>6</b> خلفك، <b>9</b> يسارك.'}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر الاتجاه:',cases:[{q:'The other plane is on your left.',opts:[["at nine o'clock",1,''],["at three o'clock",0,'3 يمينك.']]},{q:'The truck is behind you.',opts:[["at six o'clock",1,''],["at twelve o'clock",0,'12 أمامك.']]}]}),title:'مختبر مصغّر: الاتجاه'}]},
  {st:2,short:'أسئلة التحقيق',title:'أسئلة الماضي',q:'كيف تسأل متى وقعت الحادثة؟',ref:'ص 79',
   art:art(`<g data-tip="مع be: Where were …? / How high was …?"><rect x="30" y="80" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,111,'Where were the planes?',{fs:15,w:700})}</g>
    <g data-tip="مع فعل آخر: When did … happen?"><rect x="30" y="170" width="300" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,201,'When did it happen?',{fs:15,w:700})}</g>`,'سؤالان بالماضي'),
   cap:'نوعا السؤال. مرّر المؤشر على كل منهما.',
   side:[{tip:'<span class="en">take place</span> = <span class="en">happen</span>: <span class="en">When did it take place?</span>'}],
   body:[{widget:(el,B)=>N.typ(el,B,{intro:'كوّن السؤال (من عندنا):',items:[{q:`(When / the accident / happen)`,a:['When did the accident happen?']},{q:`(How high / be / the ladder)`,a:['How high was the ladder?']},{q:`(How many / workers / be / in the room)`,a:['How many workers were in the room?']}]}),title:'مختبر مصغّر: السؤال'}]},
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

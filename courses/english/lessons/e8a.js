/* الوحدة 8 — Reporting: الدرس 8.1 Recent incidents (ص 58–59) والدرس 8.2 Damage and loss (ص 60–61) */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,upd,ab,sp}=N;

/* الأفعال: [الأصل، الماضي، التصريف الثالث، المعنى، شاذ؟] */
const VERBS=[['break','broke','broken','يكسر',1],['buy','bought','bought','يشتري',1],['check','checked','checked','يفحص',0],['crash','crashed','crashed','يصطدم',0],['cut','cut','cut','يقطع / يجرح',1],['drive','drove','driven','يقود',1],['fall','fell','fallen','يسقط',1],['have','had','had','يملك / يحدث له',1],['lose','lost','lost','يفقد',1],['order','ordered','ordered','يطلب (يوصي على)',0],['put','put','put','يضع',1],['repair','repaired','repaired','يصلح',0],['sell','sold','sold','يبيع',1],['send','sent','sent','يرسل',1],['speak','spoke','spoken','يتحدث',1],['steal','stole','stolen','يسرق',1],['take','took','taken','يأخذ',1],['write','wrote','written','يكتب',1],['change','changed','changed','يغيّر',0],['clean','cleaned','cleaned','ينظّف',0]];
const OBJ={break:'the window',buy:'some new tools',check:'the brakes',crash:'the van',cut:'the cable',drive:'the truck into the garage',fall:'',have:'an accident',lose:'the key',order:'the new parts',put:'the fuses in the box',repair:'the tyres',sell:'the old machine',send:'the email',speak:'to the supplier',steal:'the laptop',take:'the hard drive out',write:'the report',change:'the oil',clean:'the spark plugs'};
const SUBJ=[['I','have'],['You','have'],['He','has'],['She','has'],['We','have'],['They','have']];
function lab81(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">كوّن جملة بالمضارع التام</h3>
  <p class="sub">مبني على «Language» ص 58. اختر الفعل والفاعل ونوع الجملة، وشاهد الجملة وكيف تُبنى. (الأمثلة من عندنا.)</p>
  <select class="ph-sel" id="vv">${VERBS.map((v,i)=>`<option value="${i}">${v[0]} — ${v[3]}</option>`).join('')}</select>
  <div class="ph-row">${SUBJ.map((s,i)=>`<button type="button" class="btn${i===2?' pri':''}" data-s="${i}">${s[0]}</button>`).join('')}</div>
  <div class="ph-row">${[['+','إثبات'],['-','نفي'],['?','سؤال']].map(([k,l],i)=>`<button type="button" class="btn${i?'':' pri'}" data-f="${k}">${l}</button>`).join('')}</div>
  <div class="pk-facts" id="vf"></div><div id="vo"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">جدول الأفعال</h3>
  <div class="tbx"><table class="vt" dir="ltr"><thead><tr><th>Base</th><th>Past</th><th>Past participle</th></tr></thead><tbody>${VERBS.map(v=>`<tr><td class="en">${v[0]}</td><td class="en">${v[1]}</td><td class="en">${v[2]}${v[4]?' <span style="color:var(--stop);font-size:12px">●</span>':''}</td></tr>`).join('')}</tbody></table></div>
  <p class="pk-ill"><span style="color:var(--stop)">●</span> فعل شاذ (لا يُضاف له ed).</p>
 </div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اختر <span class="en">check</span> ثم <span class="en">steal</span>: أيهما أُضيف له <span class="en">ed</span>؟</li>
  <li>غيّر الفاعل من <span class="en">I</span> إلى <span class="en">He</span>: ماذا تغيّر؟</li>
  <li>اختر «سؤال» ثم اقرأ الجواب القصير المكتوب تحته.</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);let si=2,f='+';
 const draw=()=>{const v=VERBS[+$('#vv').value],[S,h]=SUBJ[si],o=OBJ[v[0]];const oo=o?' '+o:'';const hn=h==='has'?"hasn't":"haven't";
  const sent=f==='+'?`${S} ${h} ${v[2]}${oo}.`:f==='-'?`${S} ${hn} ${v[2]}${oo}.`:`${h[0].toUpperCase()+h.slice(1)} ${S==='I'?'I':S.toLowerCase()} ${v[2]}${oo}?`;
  $('#vf').innerHTML=`<div><span>الفعل المساعد</span><b>${f==='-'?hn:h}</b></div><div class="${v[4]?'bad':'hi'}"><span>التصريف الثالث</span><b>${v[2]}</b></div><div><span>النوع</span><b style="font-family:var(--font);direction:rtl;text-align:start">${v[4]?'شاذ':'منتظم (ed)'}</b></div>`;
  const pr=S==='I'?'you':S==='You'?'I':S.toLowerCase(),ph=pr==='I'||pr==='you'||pr==='we'||pr==='they'?'have':'has';
  $('#vo').innerHTML=eb(sent)+(f==='?'?`<p class="pk-ill">الجواب القصير:</p>${eb([`Yes, ${pr} ${ph}.`,`No, ${pr} ${ph==='has'?"hasn't":"haven't"}.`])}`:'')};
 $('#vv').onchange=draw;
 el.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{si=+b.dataset.s;el.querySelectorAll('[data-s]').forEach(x=>x.classList.toggle('pri',x===b));draw()});
 el.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{f=b.dataset.f;el.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('pri',x===b));draw()});
 draw();
}

const VOC81=[['incident','حادثة (واقعة)',''],['recent','حديث (قريب الوقوع)',''],['break down','يتعطّل','My car has broken down.'],['break into','يقتحم (للسرقة)','Thieves have broken into my office.'],['hotline','خط الدعم (خط ساخن)',''],['data','البيانات',''],['ambulance','سيارة إسعاف',''],['fall downstairs','يسقط من الدرج',''],['exhaust pipe','أنبوب العادم',''],['tyre','إطار السيارة','tire بالأمريكية'],['brakes','الفرامل',''],['spark plug','شمعة الإشعال',''],['fuse','فيوز (مُنصهِر)',''],['supplier','المورِّد',''],['supervisor','المشرف',''],['mechanic','الميكانيكي',''],['past participle','التصريف الثالث للفعل','checked, broken, taken']];

/* ===== مختبرات «شرح القاعدة» 8.1: يختار المتدرب فتتكوّن الجملة بقطع ملونة ===== */
const V81={break:['broke','broken','يكسر'],stop:['stopped','stopped','يتوقف'],lose:['lost','lost','يضيّع'],finish:['finished','finished','ينهي'],arrive:['arrived','arrived','يصل'],take:['took','taken','يأخذ'],check:['checked','checked','يفحص'],try:['tried','tried','يجرّب'],steal:['stole','stolen','يسرق'],write:['wrote','written','يكتب'],cut:['cut','cut','يقطع'],send:['sent','sent','يرسل']};
const SUB81={I:[0,"I've"],you:[0,"You've"],he:[1,"He's"],she:[1,"She's"],it:[1,"It's"],we:[0,"We've"],they:[0,"They've"],'The printer':[1,'—'],'The parts':[0,'—']};
const OBJ81={break:'the window',stop:'',lose:'the key',finish:'the report',arrive:'',take:'the tools',check:'the brakes',send:'the email'};
const LAB81A={title:'have أم has؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الفاعل والفعل، وشاهد have أو has والتصريف الثالث.',
 controls:[{k:'s',label:'الفاعل',opts:Object.keys(SUB81).map(k=>[k,k])},{k:'v',label:'الفعل',opts:['break','stop','lose','finish','arrive','check'].map(k=>[k,k])}],
 out:({s,v})=>{const has=SUB81[s][0]===1,aux=has?'has':'have',o=OBJ81[v];
  const pieces=[[s,'x','الفاعل'],[aux,'k',has?'مفرد غائب ← has':'have'],[V81[v][1],'n','التصريف الثالث'],...(o?[[o+'.','x','']]:[])];
  if(!o)pieces[2][0]+='.';
  return{pieces,say:`${s} ${aux} ${V81[v][1]}${o?' '+o:''}.`,ar:SUB81[s][1]!=='—'?`الاختصار: ${SUB81[s][1]} ${V81[v][1]}${o?' '+o:''}.`:'',why:has?`${s} مفرد غائب، فنستعمل has.`:`مع ${s} نستعمل have.`}}})};
const LAB81B={title:'النفي والسؤال والجواب القصير',w:(el,B)=>N.labB(el,B,{intro:'اختر نوع الجملة والفاعل، وشاهد مكان have أو has.',
 controls:[{k:'t',label:'الجملة',opts:[['pos','مثبتة'],['neg','منفية'],['q','سؤال'],['y','جواب: نعم'],['n','جواب: لا']]},{k:'s',label:'الفاعل',opts:[['you','you'],['she','she'],['they','they']]},{k:'v',label:'العمل',opts:[['check','check the brakes'],['send','send the email'],['finish','finish the report']]}],
 out:({t,s,v})=>{const has=s==='she',aux=has?'has':'have',S=s==='you'?'I':s,a2=s==='you'?'have':aux,o=OBJ81[v],V3=V81[v][1];
  if(t==='pos')return{pieces:[[S==='I'?'I':s.replace(/^./,c=>c.toUpperCase()),'x','الفاعل'],[a2,'k',''],[V3,'n','V3'],[o+'.','x','']],say:`${S==='I'?'I':s} ${a2} ${V3} ${o}.`,why:'المثبت: الفاعل + have/has + التصريف الثالث.'};
  if(t==='neg')return{pieces:[[S==='I'?'I':s.replace(/^./,c=>c.toUpperCase()),'x','الفاعل'],[a2+"n't",'k','not بعد have/has'],[V3,'n','V3'],[o+'.','x','']],say:`${S==='I'?'I':s} ${a2}n't ${V3} ${o}.`,why:"النفي: نضع not بعد have/has، واختصارها haven't / hasn't."};
  if(t==='q')return{pieces:[[aux.replace(/^./,c=>c.toUpperCase()),'k','يتقدم على الفاعل'],[s,'x','الفاعل'],[V3,'n','V3'],[o+'?','x','']],say:`${aux.replace(/^./,c=>c.toUpperCase())} ${s} ${V3} ${o}?`,why:'السؤال: نقدّم Have/Has على الفاعل.'};
  const ans=t==='y'?`Yes, ${S} ${a2}.`:`No, ${S} ${a2}n't.`;
  return{pieces:[[t==='y'?'Yes,':'No,','q',''],[S,'x','الفاعل'],[t==='y'?a2+'.':a2+"n't.",'k','have/has فقط']],say:ans,why:'الجواب القصير يعيد have/has فقط، بلا الفعل.'}}})};
const LAB81C={title:'مصنع التصريف الثالث',w:(el,B)=>N.labB(el,B,{intro:'اختر فعلاً وشاهد تصريفه الثالث، ولون التغيير يخبرك بالقاعدة.',
 controls:[{k:'v',label:'الفعل',opts:['check','arrive','try','stop','break','take','steal','write','lose','cut'].map(k=>[k,k])}],
 out:({v})=>{const V3=V81[v][1],R={check:['+ ed','أغلب الأفعال: نضيف ed'],arrive:['+ d','ينتهي بـ e: نضيف d فقط'],try:['y → ied','حرف ساكن + y: تصير ied'],stop:['p → pped','قصير ينتهي بساكن بعد متحرك: نكرر الحرف ثم ed']}[v];
  return{pieces:[[v,'x',V81[v][2]],['→','x',''],[V3,R?'k':'q',R?R[0]:'شاذ يُحفظ']],say:`${v}, ${V81[v][0]}, ${V3}`,ar:`الثلاث معاً: ${v} – ${V81[v][0]} – ${V3}`,why:R?R[1]+'.':'فعل شاذ: صيغته الثالثة لا قاعدة لها، فنحفظ الثلاث معاً.'}}})};
const LAB81D={title:'المضارع التام أم الماضي البسيط؟',w:(el,B)=>N.labB(el,B,{intro:'اختر كلمة الوقت، وشاهد أي الزمنين يناسبها.',
 controls:[{k:'t',label:'الوقت',opts:[['','بلا وقت'],['just','just'],['yesterday','yesterday'],['last week','last week'],['two hours ago','two hours ago'],['in 2020','in 2020']]}],
 out:({t})=>{if(!t)return{pieces:[['I','x',''],["'ve",'k','have'],['lost','n','V3'],['my key.','x','']],say:"I've lost my key.",why:'لم نذكر الوقت، والنتيجة الآن (المفتاح ضائع): المضارع التام.'};
  if(t==='just')return{pieces:[['I','x',''],["'ve",'k','have'],['just','q','للتو'],['lost','n','V3'],['my key.','x','']],say:"I've just lost my key.",why:'just تأتي مع المضارع التام، بين have والتصريف الثالث.'};
  return{pieces:[['I','x',''],['lost','n','الماضي البسيط'],['my key','x',''],[t+'.','q','وقت محدد']],say:`I lost my key ${t}.`,why:`${t} وقت محدد في الماضي، فنستعمل الماضي البسيط لا المضارع التام.`}}})};
const R81=N.rule({title:'المضارع التام (have / has + التصريف الثالث)',ref:'ص 58–59',
 intro:`نشرح المضارع التام في خمس خطوات مرتبة: متى نستعمله، ثم كيف نكوّنه، ثم النفي والسؤال والجواب القصير، ثم التصريف الثالث للفعل، ثم الفرق بينه وبين الماضي البسيط.`,
 parts:[
 {t:'متى نستعمله؟',short:'متى؟',q:'سيارتك توقفت للتو في الطريق. كيف تخبر خط الدعم؟',ref:'ص 58',
  lead:`في العمل تحتاج كثيراً أن تبلّغ عن شيء حدث للتو وما زال أثره أمامك: آلة توقفت، أو جهاز انكسر، أو قطعة ضاعت. وهذا هو عمل المضارع التام.`,
  points:[`<b>الاستعمال الأول:</b> حدث وقع قبل قليل، ونتيجته ما زالت الآن.<br>${e('The machine has stopped.')} = توقفت الآلة (وهي واقفة الآن).`,
   `<b>الاستعمال الثاني:</b> خبر عن حدث، ولا يهمنا متى وقع بالضبط.<br>${e('Someone has taken my laptop.')} = أحدهم أخذ حاسوبي.`,
   `<b>بالعربي</b> يقابله غالباً «قد + فعل ماضٍ» أو «للتو».`],
  ex:["I<b>'ve changed</b> the tyre.","The machine <b>has broken</b> down.","Someone <b>has taken</b> my laptop."],
  html:`<p><small>(إضافة من خارج الكتاب)</small> كلمة ${e('just')} معناها «للتو»، وتأتي بين ${e('have/has')} والتصريف الثالث: ${e('The bus has just left.')}</p>`},
 {t:'كيف نكوّنه؟',short:'have / has + V3',old:[1],q:'متى نقول have ومتى has؟',ref:'ص 58',
  lead:`المضارع التام يتكوّن من جزأين لا يصح أحدهما دون الآخر: ${e('have')} أو ${e('has')}، ثم التصريف الثالث للفعل.`,
  points:[`<b>القالب:</b> الفاعل + ${e('have')} أو ${e('has')} + التصريف الثالث للفعل (نرمز له ${e('V3')}).`,
   `<b>${e('has')}</b> مع ${e('he / she / it')} ومع الاسم المفرد: ${e('The printer has stopped.')}`,
   `<b>${e('have')}</b> مع ${e('I / you / we / they')} ومع الاسم الجمع: ${e('The parts have arrived.')}`,
   `<b>الاختصار:</b> ${e("I've · you've · we've · they've")} و ${e("he's · she's · it's")}`],
  grid:{head:['الفاعل','الصيغة','مثال'],rows:[['I / you / we / they','have + V3',"I have checked it. = I've checked it."],['he / she / it','has + V3',"She has left. = She's left."],['اسم مفرد','has + V3','The printer has stopped.'],['اسم جمع','have + V3','The parts have arrived.']]},
  pairs:[['I broken it.',"I've broken it.",'لا ننسى have/has قبل التصريف الثالث.'],['The printer have stopped.','The printer has stopped.','printer مفرد: has.']],
  watch:`${e("He's")} قد تكون اختصار ${e('He is')} أو ${e('He has')}. نعرفها من الكلمة التي بعدها:<br>• ${e("He's tired")}: بعدها صفة، إذن ${e('He is')}.<br>• ${e("He's left")}: بعدها تصريف ثالث، إذن ${e('He has')}.`,
  art:art(`<g data-tip="has مع he / she / it ومع اسم مفرد."><rect x="40" y="110" width="80" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(80,141,'has',{fs:18,w:700})}</g>
    <g data-tip="التصريف الثالث: broken من break."><rect x="140" y="110" width="110" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(195,141,'broken',{fs:18,w:700})}</g>
    <g data-tip="الجملة: My car has broken down. = تعطلت سيارتي للتو.">${TL(180,220,'My car has broken down.',{fs:16,w:700})}</g>${TL(270,141,'down',{fs:16})}`,'has + broken down'),cap:'أجزاء الجملة. مرّر المؤشر على كل جزء.',labs:[LAB81A,{title:'have / has',w:(el,B)=>N.gaps(el,B,{intro:'اختر الصيغة الصحيحة (مواقف جديدة):',items:[
     {s:'The printer ___ stopped.',o:['has','have','is'],a:0,why:'printer مفرد: has.'},
     {s:'Someone has ___ my phone.',o:['took','taken','take'],a:1,why:'بعد has: التصريف الثالث taken.'},
     {s:'We ___ lost the password.',o:['has','have','are'],a:1},
     {s:'He has ___ his hand.',o:['cut','cutted','cuts'],a:0,why:'cut شاذ: cut / cut / cut.'}]})}]},
 {t:'النفي والسؤال والجواب القصير',short:'Have you…?',old:[3],q:'المشرف يسأل: Have you checked the brakes? كيف تجيب بالنفي؟',ref:'ص 59',
  lead:`بعد أي مهمة يسألك المشرف هل أنجزتها، فتحتاج أن تجيب بالإثبات أو النفي، وأن تسأل زملاءك بالطريقة نفسها.`,
  points:[`<b>النفي:</b> نضع ${e('not')} بعد ${e('have/has')}، واختصارها ${e("haven't / hasn't")}.<br>${e("The parts haven't arrived.")}`,
   `<b>السؤال:</b> نقدّم ${e('Have/Has')} على الفاعل.<br>${e('Have you checked the brakes?')}`,
   `<b>الجواب القصير:</b> نعيد ${e('have/has')} فقط، بلا الفعل.<br>${e("Yes, I have. · No, I haven't.")}`],
  grid:{head:['الجملة','الصيغة','مثال'],rows:[['النفي',"haven't / hasn't + V3","He hasn't called."],['السؤال','Have / Has + الفاعل + V3 ؟','Has she sent it?'],['الجواب القصير',"have / has · haven't / hasn't","Yes, she has. · No, she hasn't."]]},
  html:dl([['Supervisor','Have you changed the oil?'],['Mechanic','Yes, I have.'],['Supervisor','Good. What about the filter? Have you cleaned it?'],['Mechanic',"No, I haven't. I'll do it now."]]),
  pairs:[['Yes, I checked.','Yes, I have.','الجواب القصير يعيد have فقط.'],["No, I don't.","No, I haven't.",'السؤال بـ Have فالجواب بـ have.']],
  watch:`بعد الجواب المنفي نَعِد بالفعل: ${e("No, I haven't. I'll do it now.")}`,
  art:art(`<g data-tip="المشرف يسأل بـ Have you + V3 …?"><rect x="30" y="70" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,104,'Have you cleaned the filter?',{fs:15,w:700})}</g>
    <g data-tip="الجواب القصير يعيد have فقط."><rect x="30" y="170" width="140" height="50" rx="10" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(100,201,'Yes, I have.',{fs:14,w:700,c:'#fff'})}<rect x="190" y="170" width="140" height="50" rx="10" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(260,201,"No, I haven't.",{fs:14,w:700,c:'#fff'})}</g>`,'سؤال وجوابان قصيران'),cap:'السؤال وجوابه. مرّر المؤشر على كل جزء.',labs:[LAB81B,{title:'الجواب القصير',w:(el,B)=>N.cases(el,B,{intro:'اختر الجواب الصحيح:',cases:[{q:'Has the supplier sent the parts? (✓)',opts:[['Yes, he has.',1,''],['Yes, he sent.',0,'الجواب القصير: Yes, he has.'],['Yes, he have.',0,'he مع has.']]},{q:'Have you written the report? (✗)',opts:[["No, I haven't.",1,''],["No, I didn't write.",0,''],["No, I hasn't.",0,'I مع have.']]}]})}]},
 {t:'التصريف الثالث (V3)',short:'المنتظم والشاذ',old:[2],q:'لماذا نقول stolen وليس stealed؟',ref:'ص 58',
  lead:`كل جملة في المضارع التام تحتاج التصريف الثالث للفعل. وأغلب الأفعال تتبع قاعدة واحدة، وبعضها شاذ له صيغة خاصة تُحفظ.`,
  points:[`<b>الفعل المنتظم:</b> نضيف له ${e('-ed')}، مثل الماضي البسيط تماماً: ${e('check → checked')}`,
   `<b>الفعل الشاذ:</b> له صيغة خاصة لا قاعدة لها، فنحفظ الثلاث معاً: ${e('write – wrote – written')}`,
   `<b>قواعد إملاء ed</b> <small>(إضافة من خارج الكتاب)</small> في الجدول التالي.`],
  grid:{head:['الفعل المنتظم','القاعدة','مثال'],rows:[['أغلب الأفعال','+ ed','check → checked'],['ينتهي بـ e','+ d','arrive → arrived'],['حرف ساكن + y','y → ied','try → tried'],['قصير: ساكن + متحرك + ساكن','نضاعف الأخير + ed','stop → stopped']]},
  html:`<p><b>الأفعال الشاذة في هذا الدرس:</b></p>${vt(VERBS.filter(v=>v[4]).map(v=>[`${v[0]} → ${v[2]}`,v[3]]),['الفعل → التصريف الثالث','المعنى'])}`,
  pairs:[['stealed','stolen','steal شاذ: steal – stole – stolen.'],['I have took it.','I have taken it.','بعد have التصريف الثالث (taken) لا الماضي (took).']],
  art:art(`<g data-tip="منتظم: نضيف ed — check → checked."><rect x="30" y="80" width="140" height="160" rx="12" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(100,110,'regular',{fs:14,w:700,c:C.grn})}${['checked','ordered','repaired','crashed'].map((w,i)=>TL(100,145+i*24,w,{fs:13})).join('')}</g>
    <g data-tip="شاذ: يُحفظ — steal → stolen."><rect x="190" y="80" width="140" height="160" rx="12" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(260,110,'irregular',{fs:14,w:700,c:C.red})}${['stolen','taken','written','sold'].map((w,i)=>TL(260,145+i*24,w,{fs:13})).join('')}</g>`,'أفعال منتظمة وشاذة'),cap:'منتظم وشاذ. مرّر المؤشر على كل عمود.',labs:[LAB81C,{title:'صنّف',w:(el,B)=>N.sort(el,B,{intro:'صنّف الفعل حسب تصريفه الثالث:',cats:['منتظم (ed)','شاذ'],items:[['order',0,'ordered'],['sell',1,'sold'],['repair',0,'repaired'],['speak',1,'spoken'],['send',1,'sent'],['crash',0,'crashed']]})}]},
 {t:'المضارع التام أم الماضي البسيط؟',short:'لا مع yesterday',old:[4],q:'هل تقول I have lost my key yesterday؟',ref:'ص 58',
  lead:`المضارع التام والماضي البسيط كلاهما يتكلم عن شيء حدث، والفرق بينهما في أمر واحد: هل ذكرت وقت حدوثه أم لا.`,
  points:[`<b>ذكرت الوقت بالضبط؟</b> استعمل الماضي البسيط: ${e('I lost my key yesterday.')}`,
   `<b>لم تذكر الوقت، والنتيجة الآن؟</b> استعمل المضارع التام: ${e("I've lost my key.")}`,
   `<b>كلمات الوقت المحدد</b> (تأتي مع الماضي البسيط): ${e('yesterday · last week · two hours ago · in 2005 · When…?')}`],
  grid:{head:['الحالة','الزمن','مثال'],rows:[['بلا وقت محدد، والنتيجة الآن','المضارع التام',"I've lost my key."],['مع وقت محدد في الماضي','الماضي البسيط','I lost my key yesterday.']]},
  pairs:[['I have lost my key yesterday.','I lost my key yesterday.','مع yesterday نستعمل الماضي البسيط.'],['When have you finished?','When did you finish?','السؤال بـ When يحتاج الماضي البسيط.']],
  art:art(`<g data-tip="بلا وقت محدد: المضارع التام."><rect x="30" y="80" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,111,"I've lost my key. ✔",{fs:15,w:700})}</g>
    <g data-tip="مع yesterday: الماضي البسيط."><rect x="30" y="160" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,191,'I lost my key yesterday. ✔',{fs:15,w:700})}</g>
    <g data-tip="خطأ: المضارع التام مع وقت محدد."><rect x="30" y="240" width="300" height="50" rx="10" fill="${C.paper}" stroke="${C.red}" stroke-width="3"/>${TL(180,271,'I have lost it yesterday. ✘',{fs:15,w:700})}</g>`,'جملتان صحيحتان وجملة خاطئة'),cap:'الصحيح والخطأ. مرّر المؤشر على كل جملة.',labs:[LAB81D,{title:'صح أم خطأ',w:(el,B)=>N.tf(el,B,{intro:'صح أم خطأ؟',items:[["The engine has stopped.",true,'لا وقت محدد: صحيحة.'],["We have finished the job last week.",false,'last week وقت محدد: We finished the job last week.'],["Has the technician arrived?",true,'سؤال صحيح.']]})}]}
 ]});
B.lesson({
 id:'u8-l1',unit:8,order:1,pages:'58–59',
 title:'Recent incidents — حوادث وقعت للتو',
 summary:'المضارع التام (have/has + التصريف الثالث) للأفعال الحديثة، والأفعال الشاذة، وسؤال Have you…? وجوابه القصير، ولماذا لا يأتي المضارع التام مع yesterday و in 2005.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 58–59',html:`<ol><li>تبلّغ عن مشكلة حدثت للتو: ${e('My car has broken down.')}</li><li>تكوّن المضارع التام بـ ${e('have / has')} + التصريف الثالث.</li><li>تعرف التصريف الثالث للأفعال المنتظمة والشاذة.</li><li>تسأل ${e('Have you checked…?')} وتجيب ${e("Yes, I have. / No, I haven't.")}</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 58–59',html:vt(VOC81)},
  ...R81.theory,
  {h:'تمارين الكتاب',ref:'ص 58–59',html:
   bk(1,'ص 58','مع زميلك: صف ما يحدث في الصورة، واذكر خمس مشكلات شائعة في السيارات.',null)+
   bk(4,'ص 58','أكمل الجمل بالأفعال في الصندوق، كلمتان في كل فراغ.',['have broken (example) · have taken','has happened · have lost','has fallen · has cut','have had · have driven'],'التمرين 4 مرتبط بالمكالمات في التمرين 3، وفيه أربع مكالمات.')+
   bk(5,'ص 58','اكتب التصريف الثالث لكل فعل، وحدد الشاذ منها.',['bought (irregular)','checked','crashed','fallen (irregular)','ordered','put (irregular)','repaired','sold (irregular)','sent (irregular)','spoken (irregular)','stolen (irregular)','taken (irregular)','written (irregular)'])+
   bk(6,'ص 59','حوارات قصيرة بين مشرف وميكانيكي: سؤال Have you…? وجواب قصير، كما في المثال.',null,'انظر المحطة 3 في الأسلوب التفاعلي: حوار مشابه من عندنا.')+
   bk(7,'ص 59','اختبار الذاكرة: انظر الصورة في صفحة أخرى دقيقة، ثم قارن بالصورة هنا.',null,'الصفحة المطلوبة ليست في الحقيبة؛ يكفي التمرين 8 بالصورة التي أمامك.')+
   bk(8,'ص 59','الساعة الآن 10:16. اشرح ما حدث في الصورة منذ 10:12 مستعملاً الكلمات والأفعال في الصندوقين.',null,'جمل مفتوحة بالمضارع التام مثل: Two builders have taken off their jackets.')},
  {h:'الاستماع',ref:'ص 58',html:au(43,'ص 58 — التمرين 2','استمع لمكالمة وأكمل بيانات النموذج.')+au(44,'ص 58 — التمرين 3','استمع للمكالمات وطابق كل مكالمة مع صورتها.')}
 ],
 stations:[
  {intro:true},
  ...R81.stations,
  {recap:['المضارع التام: have/has + التصريف الثالث لحدث قريب ونتيجته أمامنا.','المنتظم يضاف له ed، والشاذ يُحفظ (break → broken، take → taken).','السؤال: Have you …? والجواب: Yes, I have. / No, I haven\'t.','لا نستعمله مع yesterday أو in 2005 أو ago؛ معها الماضي البسيط.']}
 ],
 lab:lab81,
 examples:[
  {title:'مثال 1: بلاغ عن عطل',ref:'ص 58',q:`<p>أبلغ خط الدعم أن طابعتك تعطلت للتو.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الفاعل مفرد (my printer) فنستعمل ${e('has')}.`},{t:`الخطوة 2: ${e('break down')} تصريفها الثالث ${e('broken down')}.`},{t:`الخطوة 3: ${e('My printer has broken down.')}`,final:true}]},
  {title:'مثال 2: سؤال المشرف',ref:'ص 59',q:`<p>اسأل الفني إن كان قد طلب القطع الجديدة.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('Have')} لأن الفاعل ${e('you')}.`},{t:`الخطوة 2: ${e('order')} منتظم: ${e('ordered')}.`},{t:`الخطوة 3: ${e('Have you ordered the new parts?')}`,final:true}]},
  {title:'مثال 3: تصحيح جملة',ref:'ص 58',q:`<p>صحّح: ${e('I have sent the email two hours ago.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e('two hours ago')} وقت محدد، فلا يصلح المضارع التام.`},{t:`الخطوة 2: نستعمل الماضي البسيط ${e('sent')}.`},{t:`الخطوة 3: ${e('I sent the email two hours ago.')} (أو بلا وقت: ${e("I've sent the email.")})`,final:true}]}
 ],
 quiz:[
  {q:'She ___ her leg.',o:['have broken','has broken','has broke','have break'],c:1,e:'she + has + broken.'},
  {q:'The past participle of take:',o:['took','taked','taken','taking'],c:2,e:'take – took – taken.'},
  {q:'Which verb is irregular?',o:['check','repair','write','order'],c:2,e:'write – wrote – written.'},
  {q:'Have you checked the tyres? (✗)',o:["No, I haven't.","No, I didn't.","No, I don't.","No, I hasn't."],c:0,e:"No, I haven't."},
  {q:'اختر الجملة الصحيحة:',o:['I have repaired it yesterday.','I repaired it yesterday.','I have repair it yesterday.','I repaired it now have.'],c:1,e:'مع yesterday: الماضي البسيط.'},
  {q:'Thieves ___ into my office.',o:['have broken','has broken','have broke','are broken'],c:0,e:'thieves جمع: have + broken.'},
  {q:'break down معناها:',o:['يكسر شيئاً','يتعطّل (يتوقف عن العمل)','يقتحم','يسقط'],c:1,e:'My car has broken down = تعطلت سيارتي.'}
 ]
});

/* =================== 8.2 Damage and loss =================== */
/* أفعال التلف: [الفعل، التصريف الثالث، الاسم، المعنى] */
const DMG=[['bend','bent','bend','يثني (ينحني)'],['break','broken','break','يكسر'],['burn','burnt','burn','يحرق'],['crack','cracked','crack','يشرخ (يتشقق)'],['cut','cut','cut','يقطع'],['dent','dented','dent','يبعج (ينبعج)'],['scratch','scratched','scratch','يخدش'],['tear','torn','tear','يمزّق']];
const PARTS=[['front bumper','الصدّام الأمامي'],['rear bumper','الصدّام الخلفي'],['bonnet','غطاء المحرك (الكبوت)'],['boot','صندوق السيارة الخلفي'],['windscreen','الزجاج الأمامي'],['front nearside door','الباب الأمامي جهة الرصيف'],['rear offside door','الباب الخلفي جهة السائق'],['roof','السقف']];
const carSVG=sel=>`<svg viewBox="0 0 420 220" role="img" aria-label="سيارة من الجانب"><path d="M40 150 L60 110 L130 95 L170 60 L290 60 L330 95 L390 110 L395 150 Z" fill="var(--surface-2)" stroke="var(--fg)" stroke-width="2"/>
 ${[['roof','M175 64 H285 V72 H175Z'],['windscreen','M290 64 L326 95 L300 95 L282 70Z'],['bonnet','M330 97 L388 112 L388 124 L330 118Z'],['boot','M46 124 L62 112 L130 98 L130 120Z'],['front nearside door','M235 98 H300 V146 H235Z'],['rear offside door','M165 98 H232 V146 H165Z'],['front bumper','M380 130 H398 V152 H380Z'],['rear bumper','M34 130 H52 V152 H34Z']].map(([k,d])=>`<path d="${d}" fill="${k===sel?'var(--stop)':'var(--blue-soft)'}" stroke="var(--blue)" stroke-width="1.5" data-p="${k}" style="cursor:pointer"/>`).join('')}
 <circle cx="110" cy="155" r="24" fill="var(--fg)"/><circle cx="320" cy="155" r="24" fill="var(--fg)"/><circle cx="110" cy="155" r="9" fill="var(--surface)"/><circle cx="320" cy="155" r="9" fill="var(--surface)"/>
 <text x="400" y="200" text-anchor="end" font-size="12" fill="var(--muted)" direction="ltr">front →</text></svg>`;
function lab82(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">افحص أضرار السيارة</h3>
  <p class="sub">مبني على «Language» ص 61. اضغط جزءاً من السيارة (أو اختره من القائمة)، واختر نوع الضرر، وشاهد الجمل الثلاث. (سيارة من رسمنا.)</p>
  <div class="pk-pic" id="cs"></div>
  <select class="ph-sel" id="cp">${PARTS.map((p,i)=>`<option value="${i}">${p[0]} — ${p[1]}</option>`).join('')}</select>
  <div class="ph-row" id="cd">${DMG.filter(d=>d[0]!=='cut').map((d,i)=>`<button type="button" class="btn${i===4?' pri':''}" data-d="${d[0]}">${d[0]}</button>`).join('')}</div>
  <div id="co"></div>
 </div>
 <div class="c5 panel"><h3 style="margin-top:0">ثلاث طرق لوصف الضرر</h3><ol class="ph-try">
  <li><b>التركيز على الفعل</b> (من فعلها؟):<br><span class="en">Someone has dented the door.</span></li>
  <li><b>التركيز على النتيجة</b> (حالته الآن):<br><span class="en">The door is dented.</span></li>
  <li><b>بالاسم</b>:<br><span class="en">There's a dent in the door.</span></li></ol>
  <p class="pk-ill"><span class="en">nearside</span> جهة الرصيف و <span class="en">offside</span> جهة السائق (في بريطانيا عجلة القيادة يميناً).</p></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اختر الزجاج الأمامي و <span class="en">crack</span>: لماذا صارت <span class="en">There's a crack in</span>؟</li>
  <li>اختر <span class="en">tear</span> ثم <span class="en">break</span>: لاحظ التصريف الثالث الشاذ <span class="en">torn</span> و <span class="en">broken</span>.</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);let d='dent';
 const prep=p=>/windscreen|roof|bonnet|door/.test(p)?'in':'in';
 const draw=()=>{const p=PARTS[+$('#cp').value],D=DMG.find(x=>x[0]===d);
  $('#cs').innerHTML=carSVG(p[0]);el.querySelectorAll('[data-p]').forEach(x=>x.onclick=()=>{$('#cp').value=PARTS.findIndex(q=>q[0]===x.dataset.p);draw()});
  const noun=D[0]==='break'?null:D[2];
  $('#co').innerHTML=`<div class="pk-facts"><div><span>التصريف الثالث</span><b>${D[1]}</b></div><div><span>المعنى</span><b style="font-family:var(--font);direction:rtl;text-align:start">${D[3]}</b></div></div>`+
   eb([`Someone has ${D[1]} the ${p[0]}.`,`The ${p[0]} is ${D[1]}.`].concat(noun?[`There's a ${noun} ${prep(p[0])} the ${p[0]}.`]:[]))+(noun?'':'<p class="pk-ill">مع break نكتفي بالجملتين؛ الاسم a break غير شائع لوصف الضرر.</p>')};
 $('#cp').onchange=draw;
 el.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{d=b.dataset.d;el.querySelectorAll('[data-d]').forEach(x=>x.classList.toggle('pri',x===b));draw()});draw();
}

const VOC82=DMG.map(x=>[`${x[0]} → ${x[1]}`,x[3],`a ${x[2]}`]).concat([['damaged','تالف',''],['missing','مفقود (ناقص)','The manual is missing.'],['condition','الحالة',''],['antenna','هوائي',''],['display screen','شاشة العرض',''],['plug','قابس (فيش)',''],['user manual','دليل المستخدم',''],['goggles','نظارات واقية',''],['overalls','بدلة العمل (أفرول)',''],['insulation','العازل (غلاف السلك)',''],['bonnet / boot','غطاء المحرك / صندوق السيارة','hood / trunk بالأمريكية'],['bumper','الصدّام',''],['windscreen','الزجاج الأمامي','windshield بالأمريكية'],['front ≠ rear','أمامي ≠ خلفي',''],['nearside / offside','جهة الرصيف / جهة السائق','']]);

/* ===== مختبرات «شرح القاعدة» 8.2 ===== */
const DV82={bend:['bent','bent','يثني','the key'],break:['broke','broken','يكسر','the speakers'],burn:['burnt','burnt','يحرق','the cable'],crack:['cracked','cracked','يشقّ','the screen'],cut:['cut','cut','يقطع','the wire'],dent:['dented','dented','يطعج','the car door'],scratch:['scratched','scratched','يخدش','the lenses'],tear:['tore','torn','يمزّق','the bag']};
const PL82=o=>/speakers|lenses/.test(o);
const LAB82A={title:'الفعل أم النتيجة؟',w:(el,B)=>N.labB(el,B,{intro:'اختر فعل التلف، ثم اختر: هل تتكلم عمّن فعل الضرر، أم عن حالة الشيء الآن؟',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(DV82).map(k=>[k,k])},{k:'f',label:'التركيز',opts:[['act','على الفعل'],['res','على النتيجة']]}],
 out:({v,f})=>{const d=DV82[v],o=d[3],pl=PL82(o),O=o.replace(/^the/,'The');
  if(f==='act')return{pieces:[['I','x','الفاعل'],['have','k','have'],[d[1],'n','التصريف الثالث'],[o+'.','x','المفعول']],say:`I have ${d[1]} ${o}.`,why:`نركز على من فعل الضرر، فنستعمل المضارع التام: have + ${d[1]}.`};
  return{pieces:[[O,'x','الشيء'],[pl?'are':'is','k',pl?'جمع ← are':'مفرد ← is'],[d[1]+'.','n','التصريف الثالث كصفة']],say:`${O} ${pl?'are':'is'} ${d[1]}.`,why:`نركز على حالة الشيء الآن، فنستعمل ${pl?'are':'is'} + ${d[1]} كصفة، ولا نذكر من فعلها.`}}})};
const DM82={dent:['a dent','some dents','in the side of the box','طعجة'],scratch:['a scratch','some scratches','on the lens','خدش'],crack:['a crack','some cracks','in the screen','شق'],hole:['a hole','some holes','in the bag','ثقب']};
const LAB82B={title:"There's أم There are؟",w:(el,B)=>N.labB(el,B,{intro:'اختر نوع التلف وعدده، وشاهد الجملة.',
 controls:[{k:'d',label:'التلف',opts:Object.keys(DM82).map(k=>[k,k])},{k:'n',label:'العدد',opts:[['1','واحد'],['2','أكثر من واحد'],['0','لا يوجد']]}],
 out:({d,n})=>{const x=DM82[d],place=x[2];
  if(n==='1')return{pieces:[["There's",'k','مفرد'],[x[0],'n','a + مفرد'],[place+'.','x','المكان']],say:`There's ${x[0]} ${place}.`,why:"There's (= There is) مع شيء واحد، وبعده a."};
  if(n==='2')return{pieces:[['There are','k','جمع'],[x[1],'n','some + جمع'],[place+'.','x','المكان']],say:`There are ${x[1]} ${place}.`,why:'There are مع أكثر من شيء، وبعده some والاسم بالجمع.'};
  return{pieces:[["There's",'k',''],['no','q','لا يوجد'],[x[0].slice(2),'n',''],[place+'.','x','']],say:`There's no ${x[0].slice(2)} ${place}.`,why:"There's no = لا يوجد. وهي أقوى من There isn't any."}}})};
const MS82={manual:['The manual','is','a manual'],batteries:['The batteries','are','batteries'],plug:['The plug','is','a plug'],screws:['The screws','are','screws']};
const LAB82C={title:'الشيء الناقص',w:(el,B)=>N.labB(el,B,{intro:'اختر الشيء الناقص والصيغة، وشاهد ثلاث طرق لقول المعنى نفسه.',
 controls:[{k:'m',label:'الناقص',opts:Object.keys(MS82).map(k=>[k,k])},{k:'f',label:'الصيغة',opts:[['miss','missing'],['no',"There's no / There are no"],['have',"doesn't have"]]}],
 out:({m,f})=>{const x=MS82[m],pl=x[1]==='are',noun=x[0].replace('The ','');
  if(f==='miss')return{pieces:[[x[0],'n','الشيء'],[x[1],'k',pl?'جمع':'مفرد'],['missing.','q','ناقص']],say:`${x[0]} ${x[1]} missing.`,why:'missing صفة معناها «ناقص، غير موجود».'};
  if(f==='no')return{pieces:[[pl?'There are':"There's",'k',''],['no','q','لا يوجد'],[noun,'n',''],['in the box.','x','']],say:`${pl?'There are':"There's"} no ${noun} in the box.`,why:`${pl?'There are no':"There's no"} + الاسم.`};
  return{pieces:[['The box','x','الشيء الكامل'],["doesn't have",'k','ليس فيه'],[x[2]+'.','n','']],say:`The box doesn't have ${x[2]}.`,why:"doesn't have + a للمفرد، أو الاسم الجمع مباشرة."}}})};
const R82=N.rule({title:'وصف التلف والنقص',ref:'ص 60–61',
 intro:`نشرح وصف الأشياء التالفة أو الناقصة في ثلاث خطوات مرتبة: أفعال التلف وتصاريفها، ثم الفرق بين الكلام عن الفعل والكلام عن النتيجة، ثم وصف مكان التلف والشيء الناقص.`,
 parts:[
 {t:'أفعال التلف وتصاريفها',short:'أفعال التلف',old:[1],q:'ما الفرق بين cracked و broken؟',ref:'ص 60',
  lead:`عندما تستلم جهازاً أو تعيده للمحل، تحتاج أن تصف ما أصابه بدقة: هل هو مكسور، أم مخدوش، أم مطعوج؟ ولكل نوع من التلف فعل خاص.`,
  points:[`<b>ثمانية أفعال</b> للتلف في هذا الدرس، ولكل منها تصريف ثالث نستعمله بعد ${e('have/has')} وبعد ${e('is/are')}.`,
   `<b>خمسة منها منتظمة</b> نضيف لها ${e('-ed')}: ${e('crack → cracked · dent → dented · scratch → scratched')}`,
   `<b>وثلاثة شاذة</b> تُحفظ: ${e('bend → bent · break → broken · tear → torn')}، و ${e('cut')} لا يتغير، و ${e('burn → burnt')} (وبالأمريكية ${e('burned')}).`],
  grid:{head:['الفعل','التصريف الثالث','المعنى'],rows:[['bend','bent','يثني (يعوج)'],['break','broken','يكسر'],['burn','burnt','يحرق'],['crack','cracked','يشقّ'],['cut','cut','يقطع'],['dent','dented','يطعج'],['scratch','scratched','يخدش'],['tear','torn','يمزّق']]},
  pairs:[['The key is bended.','The key is bent.','bend شاذ: bent.'],['The bag is teared.','The bag is torn.','tear شاذ: torn.']],
  art:art(`${[['scratch','خدش',60,90],['crack','شرخ',180,90],['dent','بعج',300,90],['bend','ثني',60,200],['tear','تمزيق',180,200],['burn','حرق',300,200]].map(([w,a,x,y])=>`<g data-tip="${w}: ${a}"><rect x="${x-48}" y="${y-38}" width="96" height="76" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(x,y-4,w,{fs:15,w:700})}${T(x,y+20,a,{ar:1,fs:12})}</g>`).join('')}`,'ستة أفعال للتلف مع معانيها'),cap:'أفعال التلف. مرّر المؤشر على كل فعل.',labs:[LAB82A,{title:'أي ضرر؟',w:(el,B)=>N.cases(el,B,{intro:'اختر الفعل المناسب:',cases:[{q:'شق في زجاج النافذة',opts:[['cracked',1,''],['dented',0,'dent للمعدن المنبعج.'],['torn',0,'tear للقماش والورق.']]},{q:'قميص فيه فتحة ممزقة',opts:[['bent',0,''],['torn',1,''],['burnt',0,'']]},{q:'مسمار لم يعد مستقيماً',opts:[['bent',1,''],['scratched',0,''],['cut',0,'']]}]})}]},
 {t:'الفعل أم النتيجة؟',short:'فعل أم نتيجة',old:[2],q:'أيهما تقول للمحل: I have scratched it أم It is scratched؟',ref:'ص 61',
  lead:`عن الضرر نفسه نستطيع أن نتكلم بطريقتين: نذكر من فعله، أو نصف حالة الشيء الآن دون ذكر الفاعل. وكل طريقة لها صيغتها.`,
  points:[`<b>التركيز على الفعل</b> (من سبّب الضرر): المضارع التام، الفاعل + ${e('have/has')} + التصريف الثالث.<br>${e('I have scratched the screen.')}`,
   `<b>التركيز على النتيجة</b> (حالة الشيء الآن): الشيء + ${e('is/are')} + التصريف الثالث، فيعمل التصريف الثالث هنا عمل الصفة.<br>${e('The screen is scratched.')}`,
   `${e('is')} مع المفرد و ${e('are')} مع الجمع: ${e('The speakers are broken.')}`],
  grid:{head:['التركيز','الصيغة','مثال'],rows:[['على الفعل','have / has + V3','He has broken the speakers.'],['على النتيجة','is / are + V3','The speakers are broken.']]},
  pairs:[['The screen has scratched.','The screen is scratched.','الشاشة لم تخدش شيئاً، بل هي مخدوشة: is + V3.'],['The speakers is broken.','The speakers are broken.','speakers جمع: are.']],
  art:art(`<g data-tip="الفعل: have/has + التصريف الثالث."><rect x="30" y="80" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.blue}" stroke-width="3"/>${TL(180,114,"I've scratched the screen.",{fs:15,w:700})}</g>
    <g data-tip="النتيجة: is/are + التصريف الثالث كصفة."><rect x="30" y="180" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.grn}" stroke-width="3"/>${TL(180,214,'The screen is scratched.',{fs:15,w:700})}</g>${arrowS(180,140,180,174,C.ink,3)}`,'من الفعل إلى النتيجة'),cap:'من الفعل إلى النتيجة. مرّر المؤشر على كل جملة.',labs:[{title:'حوّل',w:(el,B)=>N.typ(el,B,{intro:'حوّل إلى التركيز على النتيجة (أمثلة جديدة):',items:[{q:e("Someone has bent the key."),a:['The key is bent.']},{q:e("They've cracked the mirrors."),a:['The mirrors are cracked.']},{q:e("He's torn the map."),a:['The map is torn.']}]})}]},
 {t:"مكان التلف والشيء الناقص",short:"There's / missing",q:'كيف تقول إن في جانب الصندوق طعجة، وإن الكتيّب ناقص؟',ref:'ص 60–61',
  lead:`عند الفحص نصف أين التلف بالضبط، ونذكر ما ينقص الجهاز. ولهذا صيغ ثابتة.`,
  subs:[{h:'مكان التلف',points:[`${e("There's a")} + اسم مفرد + المكان:<br>${e("There's a dent in the side of the box.")}`,`${e('There are some')} + اسم جمع + المكان:<br>${e('There are some scratches on the lens.')}`,`${e('in')} داخل الشيء (${e('in the screen')})، و ${e('on')} على سطحه (${e('on the lens')}).`]},
   {h:'الشيء الناقص: ثلاث طرق بالمعنى نفسه',points:[`${e('The manual is missing.')}`,`${e("There's no manual in the box.")}`,`${e("The box doesn't have a manual.")}`]}],
  grid:{head:['المعنى','الصيغة','مثال'],rows:[['تلف واحد',"There's a + مفرد","There's a crack in the screen."],['أكثر من تلف','There are some + جمع','There are some scratches on it.'],['ناقص','… is / are missing','The batteries are missing.'],['لا يوجد',"There's no + اسم","There's no plug on the cable."]]},
  pairs:[["There's some scratches.",'There are some scratches.','scratches جمع: There are.'],["The manual is miss.",'The manual is missing.','الصفة missing بـ ing.']],
  labs:[LAB82B,LAB82C]}
 ]});
B.lesson({
 id:'u8-l2',unit:8,order:2,pages:'60–61',
 title:'Damage and loss — التلف والفقد',
 summary:'أفعال التلف (bend, break, burn, crack, cut, dent, scratch, tear) وتصريفها، ووصف الضرر بالتركيز على الفعل أو على النتيجة، و There\'s a dent in…، والإبلاغ عن شيء مفقود، وأجزاء السيارة.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 60–61',html:`<ol><li>تصف الضرر في جهاز أو سيارة بثماني أفعال.</li><li>تفرّق بين ${e('I have dented it')} (الفعل) و ${e("It's dented")} (النتيجة).</li><li>تستعمل ${e("There's a … / There are some …")} لوصف الضرر.</li><li>تبلّغ عن شيء ناقص: ${e("The manual is missing. / There's no manual.")}</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 60–61',html:vt(VOC82,['English','المعنى','الاسم / ملاحظة'])},
  ...R82.theory,
  {h:'تمارين الكتاب',ref:'ص 60–61',html:
   bk(1,'ص 60','هل عندك أدوات أو أجهزة تالفة؟ صف الضرر لزميلك.',null)+
   bk(2,'ص 60','طابق الأفعال الثمانية مع الصور.',null,'الصور في كتابك؛ راجع معاني الأفعال في جدول الكلمات.')+
   bk(3,'ص 60','صحّح الأخطاء في قائمة الفحص بعد الاستماع (التمرين 4).',null)+
   bk(5,'ص 60','كوّن جملاً عن الضرر والأشياء الناقصة في صورة التمرين 3 بالقوالب المعطاة.',null)+
   bk(6,'ص 61','أعد كتابة الجمل الست بالتركيز على النتيجة.',['The display screen is scratched.','The antenna is bent.','The body of the radio is burnt.','The top of the speaker is dented.','The cover of the plug is cracked.','The user manual is torn.'])+
   bk(7,'ص 61','أكمل الجمل الست بالصيغة الصحيحة من كلمات الصندوق (حسب الصور).',['dented','scratched','cracked','cut','bent','torn'],'قراءتنا للصور الست بالترتيب: صندوق، نظارة، طريق، عازل كابل، أنبوب، أفرول. تحقق من صور كتابك.')+
   bk(8,'ص 61',"أعد كتابة جمل التمرين 7 بـ There's a … / There are some ….",["There's a dent in the side of the box.","There are some scratches on the lenses of the goggles.","There are some cracks in the surface of the road.","There's a cut in the insulation of the cable.","There's a bend in the pipe below the tank.","There's a tear in the overalls."])+
   bk(9,'ص 61','مهمة ثنائية: اسأل زميلك عن أضرار سيارته وارسمها على الرسم.',null,'صفحتا المعلومات ليستا في الحقيبة؛ استعمل البطاقتين البديلتين أسفل.')},
  {h:'الاستماع',ref:'ص 60',html:au(45,'ص 60 — التمرين 4','انظر صورة التمرين 3، واستمع لمكالمة هاتفية وتحقق من القائمة.')},
  {h:'مهمة ثنائية بديلة (إضافة من خارج الكتاب)',ref:'ص 61 — التمرين 9',html:`<p>كل طالب يقرأ أضرار سيارته على زميله، والزميل يرسمها على الرسم (أو يعلّمها في المختبر).</p>`+ab(eb(["The front bumper is dented.","There's a crack in the windscreen.","The rear offside door is scratched."]),eb(["The bonnet is bent.","There are some scratches on the boot.","The front nearside door is dented."]))+`<p>الأسئلة: ${e("What's the problem? · Which door? · Anything else?")}</p>`}
 ],
 stations:[
  {intro:true},
  ...R82.stations,
  {recap:['أفعال التلف: bend (bent)، break (broken)، burn (burnt)، crack، cut (cut)، dent، scratch، tear (torn).','الفعل: I have dented it. النتيجة: It is dented.',"There's a dent in … / There are some scratches on ….","الناقص: The manual is missing. / There's no manual. / It doesn't have a manual."]}
 ],
 lab:lab82,
 examples:[
  {title:'مثال 1: من الفعل إلى النتيجة',ref:'ص 61',q:`<p>حوّل: ${e("They've broken the speakers.")}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: المفعول ${e('the speakers')} يصير فاعلاً.`},{t:`الخطوة 2: جمع فنستعمل ${e('are')}، ونُبقي التصريف الثالث ${e('broken')}.`},{t:`الخطوة 3: ${e('The speakers are broken.')}`,final:true}]},
  {title:"مثال 2: There's a…",ref:'ص 61',q:`<p>أعد كتابة: ${e('The side of the van is dented.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الاسم من ${e('dent')} هو ${e('a dent')}.`},{t:`الخطوة 2: القالب ${e("There's a … in …")}.`},{t:`الخطوة 3: ${e("There's a dent in the side of the van.")}`,final:true}]},
  {title:'مثال 3: الإبلاغ عن ناقص',ref:'ص 60',q:`<p>قل بطريقتين إن الصندوق بلا بطاريات.</p>`,given:[],
   solve:()=>[{t:`الطريقة 1: ${e('There are no batteries in the box.')}`},{t:`الطريقة 2: ${e('The batteries are missing.')}`,final:true}]}
 ],
 quiz:[
  {q:'The windscreen is ___.',o:['crack','cracked','cracks','cracking'],c:1,e:'is + التصريف الثالث (صفة).'},
  {q:'The past participle of tear:',o:['teared','tore','torn','tears'],c:2,e:'tear – tore – torn.'},
  {q:"There's a ___ in the door.",o:['dent','dented','dents','denting'],c:0,e:'بعد a: اسم.'},
  {q:'التركيز على النتيجة لـ I have bent the antenna:',o:['The antenna has bent.','The antenna is bent.','The antenna bends.','There bent antenna.'],c:1,e:'is + bent.'},
  {q:'The manual is ___.',o:['missing','miss','missed','lose'],c:0,e:'missing = ناقص/مفقود.'},
  {q:'The steering wheel in a British car is on the ___ side.',o:['nearside','offside','rear','boot'],c:1,e:'offside جهة السائق.'},
  {q:'bonnet في السيارة:',o:['صندوق السيارة','غطاء المحرك','الصدّام','الزجاج الأمامي'],c:1,e:'bonnet = غطاء المحرك.'}
 ]
});
})(PLCBOOK);

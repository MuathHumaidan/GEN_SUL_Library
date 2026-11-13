/* الوحدة 5 — Flow: 5.1 Heating system (ص 36–37) · 5.2 Electrical circuit (ص 38–39) · 5.3 Cooling system (ص 40–41)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const AR=(x1,y1,x2,y2,c,w)=>{w=w||4;const a=Math.atan2(y2-y1,x2-x1),h=12,p=t=>[x2-h*Math.cos(a+t),y2-h*Math.sin(a+t)].map(v=>v.toFixed(1)).join(',');return `<line x1="${x1}" y1="${y1}" x2="${(x2-9*Math.cos(a)).toFixed(1)}" y2="${(y2-9*Math.sin(a)).toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><polygon points="${x2},${y2} ${p(.45)} ${p(-.45)}" fill="${c}"/>`};

/* ========== 5.1 Heating system ========== */
const PREP=[['into','إلى داخل'],['out of','إلى خارج'],['through','عبر / من خلال'],['around','حول'],['to','إلى'],['from','من']];
const STG=[['Cold water enters the system through the inlet.','الماء البارد يدخل النظام من المدخل.','inlet'],['It flows into the tank.','يتدفق إلى الخزان.','tank'],['From the tank, the water flows into the solar panel.','من الخزان يذهب إلى اللوح الشمسي.','panel'],['The Sun heats the water in the panel.','الشمس تسخّن الماء في اللوح.','panel'],['The hot water rises and flows from the panel into the tank.','الماء الساخن يصعد ويعود إلى الخزان.','tank'],['Hot water stays at the top, and cold water sinks to the bottom.','الساخن يبقى أعلى الخزان والبارد ينزل لأسفله.','tank'],['When you open the valve, hot water flows through the valve to the shower head.','عند فتح الصمام يذهب الماء الساخن إلى رأس الدش.','valve'],['The water leaves the system.','الماء يخرج من النظام.','shower']];
const POS={inlet:[60,250],tank:[230,60],panel:[110,95],valve:[300,170],shower:[300,240]};
const heaterIn=hi=>`
 <polygon points="40,150 160,40 200,40 80,150" fill="${C.blue}" stroke="${C.ink}" stroke-width="2"/>${TL(105,170,'solar panel',{fs:11,w:700})}
 <rect x="200" y="40" width="70" height="40" rx="18" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(235,30,'water tank',{fs:11,w:700})}
 <path d="M60 260 L60 200 L250 200 L250 80" fill="none" stroke="${C.blue}" stroke-width="4"/><path d="M200 66 L170 66 L150 90" fill="none" stroke="${C.blue}" stroke-width="4"/><path d="M80 120 L120 120 L200 50" fill="none" stroke="${C.red}" stroke-width="4"/>
 <path d="M270 60 L300 60 L300 230" fill="none" stroke="${C.red}" stroke-width="4"/><rect x="292" y="160" width="16" height="16" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(330,172,'valve',{fs:11,w:700})}
 <path d="M290 236 l20 0 l-4 10 l-12 0 z" fill="${C.ink}"/>${TL(320,265,'shower head',{fs:11,w:700})}${TL(60,274,'inlet',{fs:11,w:700})}
 <circle cx="40" cy="30" r="18" fill="${C.yel}"/>
 ${hi?`<circle cx="${POS[hi][0]}" cy="${POS[hi][1]}" r="16" fill="none" stroke="${C.red}" stroke-width="4"/>`:''}`;
const heaterSVG=hi=>`<svg viewBox="0 0 360 280" style="width:100%" role="img" aria-label="سخان شمسي"><rect width="360" height="280" fill="${C.paper}" rx="12"/>${heaterIn(hi)}</svg>`;
function lab51(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">رحلة الماء في السخان الشمسي</h3><p class="sub">مبني على نص ص 36. اضغط «التالي» لتتبع الماء مرحلة مرحلة.</p><div id="sv" style="max-width:380px;margin:auto"></div>
  <div class="ph-row"><button type="button" class="btn" id="pv">السابق</button><button type="button" class="btn pri" id="nx">التالي</button><span class="sub" id="ct"></span></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">حروف الجر مع الحركة</h3><p class="sub">مبني على «Language» والتمرين 5 ص 37.</p><select class="ph-sel" id="pp">${PREP.map((p,i)=>`<option value="${i}">${p[0]}</option>`).join('')}</select><div id="po"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>لماذا يكون الخزان أعلى من اللوح؟ (الماء الساخن <span class="en">rises</span>)</li><li>ما الفرق بين <span class="en">into</span> و <span class="en">to</span>؟</li><li>صِف طريق الماء في بيتك من الخزان إلى الصنبور.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let i=0;
 const sh=()=>{const s=STG[i];$('#sv').innerHTML=heaterSVG(s[2]);$('#ct').textContent=`${i+1} / ${STG.length}`;$('#o').innerHTML=`${eb(s[0])}<p class="sub">${s[1]}</p>`;$('#pv').disabled=i===0;$('#nx').disabled=i===STG.length-1};
 $('#nx').onclick=()=>{if(i<STG.length-1){i++;sh()}};$('#pv').onclick=()=>{if(i>0){i--;sh()}};sh();
 const EX=['The water flows into the tank.','The water goes out of the tank.','The water passes through the pipes.','The water goes around the solar panel.','The water flows to the outlet.','The water comes from the inlet.'];
 const ps=()=>{const k=+$('#pp').value;$('#po').innerHTML=`${eb(EX[k])}<p class="sub">${PREP[k][0]} = ${PREP[k][1]}</p>`};$('#pp').addEventListener('input',ps);ps();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 5 ===== */
const pr51=p=>{const tank='<rect x="150" y="40" width="110" height="80" rx="8" fill="#e8f1f8" stroke="#555" stroke-width="3"/><text x="205" y="135" font-size="11" fill="#666" text-anchor="middle">tank</text>';
 const pipe='<rect x="20" y="70" width="360" height="22" fill="#e8f1f8" stroke="#555" stroke-width="3"/><text x="200" y="115" font-size="11" fill="#666" text-anchor="middle">pipe</text>';
 const A={into:tank+AR(40,80,170,80,'#1f5fd1'),'out of':tank+AR(230,80,360,80,'#1f5fd1'),through:pipe+AR(30,81,370,81,'#1f5fd1',4),around:'<rect x="150" y="45" width="100" height="70" rx="8" fill="#f3e3c1" stroke="#555" stroke-width="3"/><text x="200" y="85" font-size="11" fill="#666" text-anchor="middle">panel</text><path d="M130 130 L130 30 L270 30 L270 130" fill="none" stroke="#1f5fd1" stroke-width="5"/>'+AR(270,110,270,135,'#1f5fd1')}[p];
 return `<svg viewBox="0 0 400 150" width="380">${A}</svg>`};
const LAB51A={title:'حروف الجر مع الحركة',w:(el,B)=>N.labB(el,B,{intro:'اختر حرف الجر والفعل، وشاهد مسار الماء والجملة.',
 controls:[{k:'p',label:'الحركة',opts:[['into','into'],['out of','out of'],['through','through'],['around','around']]},{k:'v',label:'الفعل',opts:[['flows','flow'],['goes','go'],['passes','pass']]}],
 out:({p,v})=>{const o={into:'the tank','out of':'the tank',through:'the pipe',around:'the panel'}[p],ar={into:'إلى داخل','out of':'إلى خارج',through:'عبر','around':'حول'}[p];
  return{svg:pr51(p),pieces:[['The water','n','مفرد = it'],[v,'k',v==='flows'?'نضيف s':'نضيف es'],[p,'q',ar],[o+'.','x','']],say:`The water ${v} ${p} ${o}.`,why:`مع المفرد نضيف ${e('s')} للفعل، والفعلان ${e('go')} و ${e('pass')} يأخذان ${e('es')}: ${e('goes · passes')}`}}})};
const RV51={rise:['rises','goes up','يصعد','The hot water'],sink:['sinks','goes down','ينزل','The cool air'],enter:['enters','goes into','يدخل','Cold water'],leave:['leaves','goes out of','يخرج','The hot air']};
const LAB51B={title:'فعل واحد أم go + اتجاه؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، ثم اختر الصيغة: كلمة واحدة أم go مع اتجاه. المعنى واحد.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(RV51).map(k=>[k,k])},{k:'f',label:'الصيغة',opts:[['1','كلمة واحدة'],['2','go + اتجاه']]}],
 out:({v,f})=>{const [s,g,ar,S]=RV51[v],o=v==='enter'?' the tank':v==='leave'?' the chimney':'';return{pieces:[[S,'n','الفاعل'],[f==='1'?s:g,'k',ar],[o?o.trim()+'.':'.','x','']],say:`${S} ${f==='1'?s:g}${o}.`,why:`${e(v)} = ${e(g.replace('goes','go'))}. ومع المفرد يأخذ الفعل ${e('s')}.`}}})};
const IF52={shine:['the Sun shines','the current flows from the panel'],no:["the Sun doesn't shine",'the current flows from the battery'],full:['the battery is full',"the current doesn't flow into the battery"],off:["the lamps aren't on",'the current flows into the battery']};
const LAB52A={title:'If والنتيجة الدائمة',w:(el,B)=>N.labB(el,B,{intro:'اختر الشرط والترتيب، وشاهد الجملة. لاحظ الفاصلة.',
 controls:[{k:'c',label:'الشرط',opts:[['shine','الشمس مشرقة'],['no','لا شمس'],['full','البطارية ممتلئة'],['off','المصابيح مطفأة']]},{k:'o',label:'الترتيب',opts:[['1','If أولاً'],['2','النتيجة أولاً']]}],
 out:({c,o})=>{const [a,b]=IF52[c],B0=b[0].toUpperCase()+b.slice(1);return o==='1'?{pieces:[['If','q','الشرط'],[a+',','k','مضارع + فاصلة'],[b+'.','n','النتيجة: مضارع']],say:`If ${a}, ${b}.`,why:`الفعلان في المضارع البسيط لأن النتيجة تحدث في كل مرة. وبعد جزء ${e('If')} فاصلة.`}
  :{pieces:[[B0,'n','النتيجة'],['if','q','بلا فاصلة'],[a+'.','k','الشرط']],say:`${B0} if ${a}.`,why:'إذا بدأنا بالنتيجة لا نضع فاصلة.'}}})};
const LAB53A={title:'سلسيوس وفهرنهايت',w:(el,B)=>N.labB(el,B,{intro:'اختر درجة الحرارة بالسلسيوس، وشاهد التحويل بقانون الكتاب وطريقة القراءة.',
 controls:[{k:'c',label:'°C',opts:[['-18','−18'],['0','0'],['20','20'],['37','37'],['100','100']]}],
 out:({c})=>{c=+c;const f=Math.round(c*9/5+32),W={'-18':'minus eighteen',0:'zero',20:'twenty',37:'thirty-seven',100:'one hundred'}[c];
  return{pieces:[[(c<0?'−':'')+Math.abs(c)+'°C','k',W+' degrees Celsius'],['=','x',''],[f+'°F','n','degrees Fahrenheit']],say:`${W} degrees Celsius`,ar:`الحساب: ${c} × 9 / 5 + 32 = ${f}`,why:`نقرأ ${e('°C')} = ${e('degrees Celsius')}، وتحت الصفر ${e('minus')}.`}}})};
const WK53={sun:['Sunday','morning','attend lectures'],mon:['Monday','afternoon','do my practical work'],wed:['Wednesday','evening','study in the library']};
const LAB53B={title:'every أم on … s؟',w:(el,B)=>N.labB(el,B,{intro:'اختر اليوم والصيغة. المعنى واحد: عادة تتكرر كل أسبوع.',
 controls:[{k:'d',label:'اليوم',opts:Object.keys(WK53).map(k=>[k,WK53[k][0]])},{k:'f',label:'الصيغة',opts:[['e','every'],['o','on … s']]}],
 out:({d,f})=>{const [D,p,a]=WK53[d],t=f==='e'?`every ${D} ${p}`:`on ${D} ${p}s`;return{pieces:[['I','n',''],[a,'x','العادة'],[t+'.','k',f==='e'?'every + مفرد':'on + جمع']],say:`I ${a} ${t}.`,why:`${e(`every ${D} ${p}`)} = ${e(`on ${D} ${p}s`)}: مع ${e('every')} الاسم مفرد، ومع ${e('on')} يُجمع.`}}})};
const R51=N.rule({title:'السخان الشمسي، وحروف الجر مع الحركة، وأفعال الصعود والدخول',ref:'ص 36–37',
 intro:`في هذا الدرس نصف كيف يسري الماء في سخان شمسي. نحتاج لذلك أسماء الأجزاء، ثم حروف الجر التي تصف مسار الحركة، ثم أفعالاً تختصر الحركة في كلمة واحدة.`,
 parts:[
 {t:'أجزاء السخان الشمسي',short:'الأجزاء',old:[1],q:'ما الفرق بين inlet و outlet؟',ref:'ص 36',
  lead:`نبدأ بأسماء الأجزاء التي يمر بها الماء.`,
  points:[`${e('solar water panel')} لوح التسخين، و ${e('water tank')} الخزان، و ${e('pipes')} الأنابيب.`,`${e('inlet ≠ outlet')} مدخل ≠ مخرج، و ${e('valve')} صمام.`],
  html:vt([['solar water panel','لوح تسخين شمسي'],['water tank','خزان ماء'],['water pipes','أنابيب'],['inlet ≠ outlet','مدخل ≠ مخرج'],['valve','صمام'],['shower head','رأس الدش']],['English','المعنى']),
  art:art(`<g transform="translate(0 20)">${heaterIn()}`+`<g data-tip="inlet — المدخل: يدخل منه الماء البارد."><circle cx="60" cy="250" r="14" fill="transparent"/></g><g data-tip="water tank — الخزان: أعلى من اللوح."><rect x="200" y="40" width="70" height="40" fill="transparent"/></g><g data-tip="solar panel — اللوح: الشمس تسخّن الماء فيه."><polygon points="40,150 160,40 200,40 80,150" fill="transparent"/></g><g data-tip="valve — الصمام: افتحه فيخرج الماء الساخن."><rect x="288" y="156" width="24" height="24" fill="transparent"/></g></g>`,'السخان الشمسي'),cap:'سخان شمسي من رسمنا. الأزرق ماء بارد والأحمر ساخن. مرّر المؤشر على الأجزاء.',labs:[{title:'أين؟',w:(el,B)=>N.cases(el,B,{intro:'أين؟',cases:[{q:'The Sun heats the water here.',opts:[['in the panel',1],['in the inlet',0]]},{q:'Hot water stays at the top of …',opts:[['the tank',1],['the valve',0]]},{q:'Cold water enters through …',opts:[['the inlet',1],['the shower head',0]]}]})}]},
 {t:'حروف الجر مع الحركة',short:'into · through',old:[2],q:'ما الفرق بين in و into؟',ref:'ص 37',
  lead:`عندما يتحرك الماء أو الهواء نصف مساره بحرف جر: هل يدخل؟ يخرج؟ يمر خلال شيء؟ يدور حوله؟`,
  points:[`${e('into')} إلى داخل، و ${e('out of')} إلى خارج.`,`${e('through')} عبر شيء من طرف إلى طرف: ${e('through the pipes')}`,`${e('around')} حول، و ${e('from … to')} من … إلى.`,
   `<b>الجملة:</b> الفاعل + فعل حركة + حرف الجر + المكان: ${e('The water flows into the tank.')}`,`مع المفرد نضيف ${e('s')} للفعل، و ${e('go')} و ${e('pass')} يأخذان ${e('es')}: ${e('goes · passes')}`,
   `${e('in')} للمكان الثابت (${e('The water is in the tank.')})، و ${e('into')} للحركة إلى الداخل.`],
  grid:{head:['الفاعل','الفعل','المكان'],rows:[['The water','flows','into the tank.'],['The water','goes','through the pipes.'],['The electron','flows','around the circuit.']]},
  html:vt(PREP,['English','المعنى']),
  pairs:[['The water flows in the tank.','The water flows into the tank.','للحركة إلى الداخل: into.'],['The water gos through the pipes.','The water goes through the pipes.','go مع المفرد: goes.']],
  art:art(`<rect x="120" y="90" width="120" height="100" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>
    <g data-tip="into — إلى داخل الصندوق">${AR(60,60,135,105,C.blue)}${TL(56,50,'into',{fs:13,w:700})}</g>
    <g data-tip="out of — إلى خارج الصندوق">${AR(225,105,300,60,C.red)}${TL(306,50,'out of',{fs:13,w:700})}</g>
    <g data-tip="through — يدخل من جهة ويخرج من الأخرى">${AR(40,150,320,150,C.grn)}${TL(180,215,'through',{fs:13,w:700})}</g>`,'حروف الجر'),cap:'ثلاثة حروف جر للحركة. مرّر المؤشر على كل سهم.',labs:[LAB51A,{title:'حرف الجر',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Water flows ___ the tank.',o:['into','out'],a:0},{s:'The hot water goes ___ the pipes.',o:['through','into of'],a:0},{s:'Electrons flow ___ the circuit.',o:['around','out'],a:0}]})}]},
 {t:'enter · leave · rise · sink',short:'rise · sink',old:[3],q:'لماذا يصعد الماء الساخن؟',ref:'ص 37',
  lead:`بدل أن نقول ${e('go up')} أو ${e('go into')} يمكن أن نستعمل فعلاً واحداً بالمعنى نفسه.`,
  points:[`${e('rise = go up')} يصعد، و ${e('sink = go down')} ينزل.`,`${e('enter = go into')} يدخل، و ${e('leave = go out of')} يخرج.`,`بعد ${e('enter')} و ${e('leave')} لا نضع حرف جر: ${e('Cold water enters the tank.')}`,
   `الماء الساخن أخف من البارد فيصعد (${e('rises')})، والبارد ينزل (${e('sinks')}). لذلك يكون الخزان أعلى من اللوح، فيدور الماء وحده بلا مضخة.`],
  grid:{head:['الفعل','= go …','المعنى'],rows:[['rise','go up','يصعد'],['sink','go down','ينزل'],['enter','go into','يدخل'],['leave','go out of','يخرج']]},
  pairs:[['The water enters into the tank.','The water enters the tank.','بعد enter لا نضع into.']],
  art:art(`<rect x="110" y="40" width="140" height="210" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/><rect x="112" y="42" width="136" height="80" rx="12" fill="${C.red}" opacity=".5"/><rect x="112" y="170" width="136" height="78" rx="12" fill="${C.blue}" opacity=".5"/>
    <g data-tip="rise = go up — الماء الساخن يصعد.">${AR(150,190,150,90,C.red)}${TL(150,70,'rises',{fs:13,w:700})}</g>
    <g data-tip="sink = go down — الماء البارد ينزل.">${AR(210,90,210,190,C.blue)}${TL(210,230,'sinks',{fs:13,w:700})}</g>`,'rise sink'),cap:'في الخزان: الساخن يصعد والبارد ينزل. مرّر المؤشر على كل سهم.',labs:[LAB51B,{title:'الفعل',w:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:'Water ___ the house through the inlet pipe.',o:['enters','enters into'],a:0},{s:'When you heat the water, the hot water ___.',o:['rises','sinks'],a:0},{s:'When you cool the air, the cool air ___.',o:['sinks','rises'],a:0}]})}]}
 ]});
B.lesson({
 id:'u5-l1',unit:5,order:1,pages:'36–37',
 title:'Heating system — نظام التسخين',
 summary:'أجزاء السخان الشمسي (solar panel، tank، pipes، inlet، valve، shower head)، ووصف حركة الماء بالمضارع البسيط وحروف الجر (into، out of، through، around، to، from)، وأفعال الحركة (enter، leave، rise، sink)، ومرجع الضمائر it و here، ومخطط تسلسل العملية.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 36–37',html:`<p>تشرح كيف يسري الماء في نظام. ستتعلم:</p><ol><li>أجزاء السخان الشمسي.</li><li>حروف الجر مع الحركة.</li><li>${e('enter, leave, rise, sink')}.</li><li>رسم مخطط تسلسل (flow chart).</li></ol>`},
  ...R51.theory,
  {h:'تمارين الكتاب',ref:'ص 36–37',html:
   bk(1,'ص 36','ارسم أسهماً لاتجاه الماء في النظام.',['inlet → tank → solar panel → tank → valve → shower head'])+
   bk(2,'ص 36','اقرأ النص وتحقق من أسهمك.',null)+
   bk(3,'ص 36','على أي كلمة يعود كل ضمير؟',['1 b) cold water (مثال)','2 a) tank','3 c) shower head','4 c) hot water'])+
   bk(4,'ص 36','رتّب مربعات المخطط.',['1 cold water goes into the system','2 cold water enters the water tank','3 water goes from the tank to the panel','4 water becomes warm in the panel','5 warm water goes out of the panel','6 warm water enters the water tank','7 the valve opens','8 warm water flows to the shower'])+
   bk(5,'ص 37','سمِّ الرسوم 1–6 بحروف الجر.',['1 into','2 out of','3 to','4 from','5 through','6 around'],'من قراءتنا للرسوم.')+
   bk(6,'ص 37','أكمل الجدول بالأفعال.',['(1) up = rise','(2) down = sink','(3) in/into = enter','(4) out/out of = leave'])+
   bk(7,'ص 37','أكمل الجمل بالصيغة الصحيحة من أفعال التمرين 6.',['1 enters','2 leaves','3 rises','4 sinks'])+
   bk(8,'ص 37','مهمة ثنائية: اشرح نظامك لزميلك وارسم نظامه.',null,'معلومات الطالب أ في ص 114 من الكتاب.')+
   bk(9,'ص 37','اكتب شرحاً لنظامك.',null)}
 ],
 stations:[
  {intro:true},
  ...R51.stations,
  {recap:['solar panel, tank, pipes, inlet, valve, shower head.','into, out of, through, around, to, from.','rise = go up، sink = go down، enter = go into، leave = go out of.','goes / passes مع المفرد.','it و here تعودان على كلمة قبلها.']}
 ],
 lab:lab51,
 examples:[
  {title:'مثال 1: حركة الماء',ref:'ص 37',q:`<p>الماء يمر عبر الصمام. اكتب الجملة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفعل ${e('pass')} مع المفرد: ${e('passes')}.`},{t:`الخطوة 2: عبر = ${e('through')}.`},{t:`الخطوة 3: ${e('The water passes through the valve.')}`,final:true}]},
  {title:'مثال 2: rise أم sink؟',ref:'ص 37',q:`<p>أكمل: When you heat the air, the hot air ___.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الهواء الساخن خفيف فيصعد.`},{t:`الخطوة 2: يصعد = ${e('rise')}، ومع المفرد ${e('rises')}.`},{t:`الخطوة 3: ${e('When you heat the air, the hot air rises.')}`,final:true}]},
  {title:'مثال 3: مرجع الضمير',ref:'ص 36',q:`<p>Cold water enters the tank. <b>It</b> then flows into the panel. على ماذا يعود It؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبحث عن اسم مفرد قبل ${e('It')}.`},{t:`الخطوة 2: الذي «يتدفق» هو الماء، لا الخزان.`},{t:`الخطوة 3: ${e('It = cold water')}`,final:true}]}
 ],
 quiz:[
  {q:'rise =',o:['go up','go down','go in','go out'],c:0,e:'rise = go up.'},
  {q:'The water ___ through the pipes.',o:['passes','pass','passs','passing'],c:0,e:'pass + es مع المفرد.'},
  {q:'Cold water enters ___ the inlet.',o:['through','into of','out','around of'],c:0,e:'through the inlet.'},
  {q:'leave =',o:['go out of','go into','go up','go down'],c:0,e:'leave = go out.'},
  {q:'inlet ضدها:',o:['outlet','valve','tank','pipe'],c:0,e:'inlet ≠ outlet.'},
  {q:'Hot water ___ at the top of the tank.',o:['stays','sinks','enter','leaves of'],c:0,e:'الساخن يبقى في الأعلى.'}
 ]
});

/* ========== 5.2 Electrical circuit ========== */
const SYM=[['lamp','مصباح'],['conductor','موصل (سلك)'],['negative (−)','قطب سالب'],['battery','بطارية'],['positive (+)','قطب موجب'],['switch','مفتاح'],['terminal','طرف توصيل'],['fuse','منصهر (فيوز)']];
const SPEC=[['solar panel','60W'],['controller','5A'],['battery','12V 100Ah'],['lamps','12V 8W'],['electrical current','DC']];
function lab52(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c8 panel"><h3 style="margin-top:0">أين يسري التيار؟</h3><p class="sub">مبني على دليل اللوح الشمسي ص 39 والتمرين 4 ص 38. غيّر الحالة وشاهد المسار والجملة الشرطية.</p>
  <div class="ph-row"><button type="button" class="btn" id="sun"></button><button type="button" class="btn" id="lmp"></button><button type="button" class="btn" id="bat"></button></div><div id="sv" style="max-width:460px;margin:8px auto"></div><div id="o"></div></div>
 <div class="c4 panel"><h3 style="margin-top:0">المواصفات</h3><p class="sub">التمرين 3 ص 38 (المسار 29).</p>${vt(SPEC,['Item','Specification'])}<p class="sub">W = watt · V = volt · A = amp · Ah = amp hours · DC = direct current</p></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>الشمس غائبة والمصابيح تعمل: من أين يأتي التيار؟</li><li>البطارية ممتلئة والمصابيح مطفأة: ماذا يفعل المتحكم؟</li><li>لماذا نقول <span class="en">If the Sun shine<b>s</b></span>؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let sun=true,on=true,full=false;
 const P={panel:[60,90],ctl:[220,50],bat:[220,190],lamp:[380,120]};
 const sh=()=>{$('#sun').textContent=sun?'☀ The Sun shines':'☁ The Sun doesn\'t shine';$('#lmp').textContent=on?'💡 Lamps on':'Lamps off';$('#bat').textContent=full?'🔋 Battery full':'🔋 Battery not full';
  const fl=[];const L=[];
  if(sun&&on){fl.push(['panel','ctl'],['ctl','lamp']);L.push('If the Sun shines, the current flows from the panel, through the controller and into the lamps.')}
  if(sun&&!full){fl.push(['panel','ctl'],['ctl','bat']);L.push(on?'The current also flows into the battery.':'If the lamps are off, the current flows from the panel, through the controller and into the battery.')}
  if(sun&&full&&!on)L.push("If the battery is full, the controller stops the flow from the panel into the battery.");
  if(sun&&full&&on)L.push("If the battery is full, the current doesn't flow into the battery.");
  if(!sun&&on){fl.push(['bat','ctl'],['ctl','lamp']);L.push("If the Sun doesn't shine, the current flows from the battery, through the controller and into the lamps.")}
  if(!sun&&!on)L.push('No current flows.');
  const box=(k,t,c)=>`<rect x="${P[k][0]-46}" y="${P[k][1]-22}" width="92" height="44" rx="10" fill="${c}" stroke="${C.ink}" stroke-width="2"/>${TL(P[k][0],P[k][1]+5,t,{fs:12,w:700,c:c===C.ink?'#fff':C.ink})}`;
  const seen=new Set();const arr=fl.filter(f=>{const k=f.join();if(seen.has(k))return false;seen.add(k);return true}).map(([a,b])=>{const[x1,y1]=P[a],[x2,y2]=P[b],dx=x2-x1,dy=y2-y1,d=Math.hypot(dx,dy),ux=dx/d,uy=dy/d;return AR((x1+ux*52).toFixed(0),(y1+uy*30).toFixed(0),(x2-ux*52).toFixed(0),(y2-uy*30).toFixed(0),C.red,4)}).join('');
  $('#sv').innerHTML=`<svg viewBox="0 0 440 240" style="width:100%"><rect width="440" height="240" fill="${C.paper}" rx="12"/>${[['panel','ctl'],['ctl','lamp'],['ctl','bat']].map(([a,b])=>`<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="${C.mut}" stroke-width="2" stroke-dasharray="4 4"/>`).join('')}${box('panel','solar panel',sun?C.yel:C.mut)}${box('ctl','controller',C.paper)}${box('bat','battery',full?C.grn:C.paper)}${box('lamp','lamps',on?C.yel:C.mut)}${arr}</svg>`;
  $('#o').innerHTML=eb(L)};
 $('#sun').onclick=()=>{sun=!sun;sh()};$('#lmp').onclick=()=>{on=!on;sh()};$('#bat').onclick=()=>{full=!full;sh()};sh();
}
const R52=N.rule({title:'رموز الدائرة، ونظام الطاقة الشمسية، و If للنتيجة الدائمة',ref:'ص 38–39',
 intro:`في هذا الدرس نقرأ مخطط نظام طاقة شمسية: رموز الدائرة وأجزاء النظام، ثم نصف متى يسري التيار ومن أين بجمل ${e('If')}.`,
 parts:[
 {t:'رموز الدائرة ونظام الطاقة الشمسية',short:'الرموز والأجزاء',old:[1],q:'ماذا يفعل الـ controller؟',ref:'ص 38',
  lead:`المخطط الكهربائي يستعمل رموزاً بدل الرسم، ولكل رمز اسم. ثم نصف وظيفة كل جزء.`,
  points:[`<b>الرموز:</b> ${e('lamp · battery · switch · fuse · terminal')}`,`<b>الوظيفة</b> بالمضارع البسيط: ${e('The battery stores electricity.')}`,`${e('convert = change')}: ${e("The panel converts the Sun's energy into a DC electric current.")}`,`${e('DC')} تيار مستمر في اتجاه واحد، و ${e('AC')} تيار متردد (كهرباء البيت).`],
  html:vt(SYM,['English','المعنى'])+vt([['solar panel','يحوّل ضوء الشمس إلى كهرباء'],['controller','يتحكم في سريان التيار'],['battery','تخزن الكهرباء'],['lamps','مصابيح'],['cables (wires)','أسلاك']],['English','المعنى'])+vt(SPEC,['الجزء','المواصفة']),
  art:art(`<rect x="40" y="50" width="280" height="170" fill="none" stroke="${C.ink}" stroke-width="2.5"/>
    <g data-tip="lamp — مصباح: دائرة بداخلها علامة ×."><circle cx="180" cy="50" r="16" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/><path d="M169 39 L191 61 M191 39 L169 61" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,24,'lamp',{fs:12,w:700})}</g>
    <g data-tip="fuse — منصهر: مستطيل صغير على السلك يحمي الدائرة."><rect x="80" y="42" width="34" height="16" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(97,24,'fuse',{fs:12,w:700})}</g>
    <g data-tip="battery — بطارية: خطوط طويلة (+) وقصيرة (−)."><rect x="150" y="205" width="60" height="30" fill="${C.paper}"/><line x1="160" y1="200" x2="160" y2="240" stroke="${C.ink}" stroke-width="3"/><line x1="172" y1="208" x2="172" y2="232" stroke="${C.ink}" stroke-width="5"/><line x1="186" y1="200" x2="186" y2="240" stroke="${C.ink}" stroke-width="3"/><line x1="198" y1="208" x2="198" y2="232" stroke="${C.ink}" stroke-width="5"/>${TL(180,262,'battery  + −',{fs:12,w:700})}</g>
    <g data-tip="switch — مفتاح: يفتح الدائرة ويغلقها."><rect x="30" y="110" width="20" height="50" fill="${C.paper}"/><line x1="40" y1="110" x2="62" y2="150" stroke="${C.ink}" stroke-width="3"/><circle cx="40" cy="160" r="4" fill="${C.ink}"/>${TL(80,140,'switch',{fs:12,w:700})}</g>
    <g data-tip="conductor — موصل: السلك الذي يسري فيه التيار.">${TL(290,140,'conductor',{fs:12,w:700})}</g>`,'رموز الدائرة'),cap:'دائرة بسيطة من رسمنا. مرّر المؤشر على كل رمز.',labs:[{title:'الرموز',w:(el,B)=>N.cases(el,B,{intro:'ما الرمز؟',cases:[{q:'⊗',opts:[['lamp',1],['fuse',0]]},{q:'يفتح الدائرة ويغلقها',opts:[['switch',1],['terminal',0]]},{q:'+',opts:[['positive',1],['negative',0]]}]})}]},
 {t:'If للنتيجة الدائمة',short:'If',old:[2],q:'لماذا نقول If the Sun shines ولا نقول If the Sun will shine؟',ref:'ص 39',
  lead:`في الأنظمة الآلية تحدث النتيجة نفسها كلما تحقق الشرط. نصف ذلك بجملة من جزأين: الشرط بـ ${e('If')}، ثم النتيجة.`,
  points:[`<b>الفعلان في المضارع البسيط</b> لأن النتيجة تحدث في كل مرة: ${e('If the Sun shines, the current flows from the panel.')}`,`مع المفرد نضيف ${e('s')}: ${e('the Sun shines · the current flows')}`,
   `<b>النفي</b> بـ ${e("doesn't")} أو ${e("aren't")}: ${e("If the Sun doesn't shine, the current flows from the battery.")}`,`<b>الفاصلة:</b> إذا بدأنا بـ ${e('If')} نضع فاصلة بعد الشرط، وإذا بدأنا بالنتيجة فلا فاصلة: ${e('The current flows from the battery if the Sun doesn\'t shine.')}`],
  grid:{head:['الشرط','النتيجة'],rows:[['If the Sun shines,','the current flows from the panel.'],["If the Sun doesn't shine,",'the current flows from the battery.'],['If the battery is full,',"the current doesn't flow into the battery."],["If the lamps aren't on,",'the current flows into the battery.']]},
  pairs:[['If the Sun shine, the current flow.','If the Sun shines, the current flows.','مع المفرد نضيف s.'],['If the Sun will shine, …','If the Sun shines, …','النتيجة الدائمة: مضارع بسيط في الجزأين.']],
  art:art(`<g data-tip="الشرط: If + المضارع البسيط، ثم فاصلة."><rect x="20" y="60" width="150" height="70" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(95,90,"If the Sun",{fs:13,w:700})}${TL(95,112,"doesn't shine,",{fs:13,w:700})}</g>${AR(172,95,196,95,C.ink,3)}
    <g data-tip="النتيجة: المضارع البسيط أيضاً."><rect x="198" y="60" width="150" height="70" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(273,90,'the current flows',{fs:13,w:700,c:'#fff'})}${TL(273,112,'from the battery.',{fs:13,w:700,c:'#fff'})}</g>
    <g data-tip="يمكن قلب الجملة بلا فاصلة."><rect x="20" y="160" width="328" height="56" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(184,193,'The current flows from the battery if …',{fs:13,w:700})}</g>`,'if'),cap:'الشرط ثم النتيجة. مرّر المؤشر على كل جزء.',labs:[LAB52A,{title:'if',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'If the Sun ___, the current flows from the panel.',o:['shines','shine'],a:0},{s:"If the battery is full, the current ___ flow into it.",o:["doesn't","isn't"],a:0},{s:'If the lamps ___ off, the current flows into the battery.',o:['are','is'],a:0}]})}]}
 ]});
B.lesson({
 id:'u5-l2',unit:5,order:2,pages:'38–39',
 title:'Electrical circuit — الدائرة الكهربائية',
 summary:'رموز الدائرة الكهربائية (battery، lamp، switch، fuse، conductor، terminal، positive/negative)، ونظام الطاقة الشمسية (solar panel، controller، battery، lamps، cables) ومواصفاته (V، W، A، Ah، DC)، ومسار التيار، وجملة الشرط بـ if للنتيجة الدائمة (If the Sun shines, the current flows from the panel).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 38–39',html:`<p>تشرح مسار التيار في نظام طاقة شمسية. ستتعلم:</p><ol><li>رموز الدائرة الكهربائية.</li><li>أجزاء النظام ومواصفاتها.</li><li>${e('If …, …')} للنتيجة التي تحدث دائماً.</li></ol>`},
  ...R52.theory,
  {h:'تمارين الكتاب',ref:'ص 38–39',html:
   bk(1,'ص 38','سمِّ رموز الدائرة.',['(1) lamp','(2) conductor','(3) negative','(4) battery','(5) positive','(6) switch','(7) terminal','(8) fuse'],'من قراءتنا للرسم؛ الإجابات في مسرد ص 109.')+
   bk(2,'ص 38','استمع وسمِّ أجزاء النظام.',['(1) solar panel','(2) controller','(3) cables','(4) lamps','(5) battery'])+
   bk(3,'ص 38','استمع وطابق الأجزاء بمواصفاتها.',['1 d) 60W','2 c) 5A','3 e) 12V 100Ah','4 a) 12V 8W','5 b) DC'])+
   bk(4,'ص 38','أين يسري التيار في الحالات الثلاث؟',['1 panel → controller → lamps','2 panel → controller → battery','3 battery → controller → lamps'])+
   bk(5,'ص 39','اقرأ الدليل وتحقق من إجاباتك في التمرين 4.',null)+
   bk(6,'ص 39','مع زميلك: كيف يعمل المتحكم؟ دوّن ملاحظات.',null)+
   bk(7,'ص 39','أكمل الشرح بالصيغة الصحيحة للفعل.',['(1) closes (مثال)',"(2) doesn't flow",'(3) opens',"(4) doesn't flow"])},
  {h:'الاستماع',ref:'ص 38',html:au(28,'ص 38 — التمرين 2','محاضرة: أجزاء نظام الطاقة الشمسية.')+au(29,'ص 38 — التمرين 3','مواصفات الأجزاء.')}
 ],
 stations:[
  {intro:true},
  ...R52.stations,
  {recap:['lamp, switch, fuse, battery, conductor, terminal, + / −.','solar panel → controller → battery / lamps.','W, V, A, Ah, DC.','If + مضارع بسيط, + مضارع بسيط.','convert = change.']}
 ],
 lab:lab52,
 examples:[
  {title:'مثال 1: جملة شرطية',ref:'ص 39',q:`<p>الشمس مشرقة ← التيار يأتي من اللوح. اكتب جملة بـ If.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('If the Sun shines,')}`},{t:`الخطوة 2: ${e('the current flows from the panel.')}`},{t:`الخطوة 3: ${e('If the Sun shines, the current flows from the panel.')}`,final:true}]},
  {title:'مثال 2: نفي في الشرط',ref:'ص 39',q:`<p>المصابيح ليست مضاءة ← التيار يذهب إلى البطارية.</p>`,given:[],solve:()=>[{t:`الخطوة 1: lamps جمع: ${e("aren't on")}.`},{t:`الخطوة 2: ${e('the current flows into the battery.')}`},{t:`الخطوة 3: ${e("If the lamps aren't on, the current flows into the battery.")}`,final:true}]},
  {title:'مثال 3: قراءة مواصفة',ref:'ص 38',q:`<p>اقرأ: battery — 12V 100Ah</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('12V = twelve volts')}`},{t:`الخطوة 2: ${e('100Ah = a hundred amp hours')}`},{t:`الخطوة 3: ${e('a twelve volt, one hundred amp hours battery')}`,final:true}]}
 ],
 quiz:[
  {q:'If the Sun ___, the current flows from the panel.',o:['shines','shine','shining','is shine'],c:0,e:'the Sun مفرد: shines.'},
  {q:'⊗ في الدائرة هو:',o:['lamp','fuse','switch','battery'],c:0,e:'رمز المصباح.'},
  {q:'convert =',o:['change','store','measure','stop'],c:0,e:'convert = change.'},
  {q:'الجزء الذي يخزّن الكهرباء:',o:['battery','controller','lamp','cable'],c:0,e:'The battery stores the electricity.'},
  {q:'DC =',o:['direct current','double current','digital cable','direct cable'],c:0,e:'DC = direct current.'},
  {q:"If the battery is full, the current ___ flow into it.",o:["doesn't","don't","isn't","not"],c:0,e:"the current مفرد: doesn't."}
 ]
});

/* ========== 5.3 Cooling system ========== */
const CAR=[['The engine drives the water pump.','المحرك يدير مضخة الماء.'],['The pump pushes cool water around the engine.','المضخة تدفع الماء البارد حول المحرك.'],['The water becomes hot.','الماء يسخن.'],['The hot water passes through the thermostat.','الماء الساخن يمر عبر منظم الحرارة.'],['It flows through the top hose into the radiator.','يتدفق عبر الخرطوم العلوي إلى المشعاع.'],['A fan cools the water. The cool water sinks to the bottom.','المروحة تبرّد الماء فينزل إلى أسفل المشعاع.'],['The cool water flows along the bottom hose and enters the engine again.','يعود عبر الخرطوم السفلي إلى المحرك.']];
function lab53(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">محوّل الحرارة</h3><p class="sub">مبني على الملاحظة الجانبية ص 40: °F = °C × 9 / 5 + 32</p>
  <div class="ph-row"><input class="ph-num" id="tv" type="number" value="100" min="-100" max="300" step="0.5" style="width:100px"><select class="ph-sel" id="tu"><option value="c">°C</option><option value="f">°F</option></select></div><div id="to"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">نظام تبريد السيارة</h3><p class="sub">مبني على نص ص 40. اضغط «التالي».</p><div class="ph-row"><button type="button" class="btn" id="pv">السابق</button><button type="button" class="btn pri" id="nx">التالي</button><span class="sub" id="ct"></span></div><div id="co"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>حوّل 0°C و 100°C إلى فهرنهايت.</li><li>كم 0°F بالسلسيوس؟</li><li>ما وظيفة <span class="en">thermostat</span> في السيارة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const r1=x=>Math.round(x*10)/10;
 const cv=()=>{let v=+$('#tv').value,w='';if(!($('#tv').value!==''&&v>=-100&&v<=300)){v=Math.min(300,Math.max(-100,v||0));$('#tv').value=v;w='<p class="sub" style="color:var(--red)">صُحّحت القيمة: المدى المسموح −100 إلى 300.</p>'}
  const c=$('#tu').value==='c';const r=c?v*9/5+32:(v-32)*5/9;
  $('#to').innerHTML=`<div class="pk-facts"><div class="hi"><span>${c?'Fahrenheit':'Celsius'}</span><b><span class="ltr">${r1(r)}°${c?'F':'C'}</span></b></div></div>${eb(`${r1(v)} degrees ${c?'Celsius':'Fahrenheit'} = ${r1(r)} degrees ${c?'Fahrenheit':'Celsius'}`)}`+w};
 ['tv','tu'].forEach(k=>$('#'+k).addEventListener('input',cv));cv();
 let i=0;const sh=()=>{$('#ct').textContent=`${i+1} / ${CAR.length}`;$('#co').innerHTML=`${eb(CAR[i][0])}<p class="sub">${CAR[i][1]}</p>`;$('#pv').disabled=i===0;$('#nx').disabled=i===CAR.length-1};
 $('#nx').onclick=()=>{if(i<CAR.length-1){i++;sh()}};$('#pv').onclick=()=>{if(i>0){i--;sh()}};sh();
}
const Q1=`<span class="bkb" data-bk="shw101">1 a) 60°C (140°F)</span><span class="bkf" data-bk="shw101">1 a) 60°C (140°F) هو جواب الكتاب والتسجيل، لكنه حرارة الماء في خزان السخان لا ماء الدش.<span class="fixnote"> ماء الدش المريح نحو 38–42°C، وماء 60°C يحرق الجلد في ثوانٍ.</span></span>`;
const Q5=`<span class="bkb" data-bk="hot101">5 b) 136°F (58°C) — in Libya</span><span class="bkf" data-bk="hot101">5 b) 136°F (58°C) هو جواب الكتاب والتسجيل (ليبيا).<span class="fixnote"> ألغت المنظمة العالمية للأرصاد هذا الرقم سنة 2012، والرقم المعتمد اليوم 56.7°C (134°F) في وادي الموت بأمريكا.</span></span>`;
const R53=N.rule({title:'درجات الحرارة، ودورة التبريد، والجدول الأسبوعي',ref:'ص 40–41',
 intro:`في هذا الدرس نقرأ درجات الحرارة ونحوّلها، ثم نصف دورة الماء في تبريد السيارة والهواء في برج التبريد، ثم نتكلم عن جدولنا الأسبوعي.`,
 parts:[
 {t:'درجات الحرارة',short:'°C و °F',old:[1],q:'كيف تقرأ −18°C؟',ref:'ص 40',
  lead:`درجة الحرارة تُكتب برمز وتُقرأ بكلمات. وهناك نظامان: سلسيوس وفهرنهايت.`,
  points:[`${e('°C')} نقرؤها ${e('degrees Celsius')}، و ${e('°F')} نقرؤها ${e('degrees Fahrenheit')}.`,`تحت الصفر نقول ${e('minus')}: ${e('−18°C = minus eighteen degrees Celsius')}`,`القانون من الكتاب: ${e('°F = °C × 9 / 5 + 32')}، و ${e('°C = (°F − 32) × 5 / 9')}`],
  html:vt([['°C','degrees Celsius','سلسيوس'],['°F','degrees Fahrenheit','فهرنهايت'],['−18°C','minus eighteen degrees Celsius','تحت الصفر']],['الرمز','نقرؤه','المعنى']),
  art:art(`<rect x="160" y="30" width="40" height="200" rx="20" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/><rect x="168" y="80" width="24" height="150" rx="12" fill="${C.red}"/><circle cx="180" cy="236" r="26" fill="${C.red}" stroke="${C.ink}" stroke-width="2.5"/>
    <g data-tip="غليان الماء: 100°C = 212°F">${TL(110,64,'100°C',{fs:13,w:700})}${TL(250,64,'212°F',{fs:13,w:700})}<line x1="140" y1="60" x2="220" y2="60" stroke="${C.ink}" stroke-dasharray="4 3"/></g>
    <g data-tip="تجمّد الماء: 0°C = 32°F">${TL(110,184,'0°C',{fs:13,w:700})}${TL(250,184,'32°F',{fs:13,w:700})}<line x1="140" y1="180" x2="220" y2="180" stroke="${C.ink}" stroke-dasharray="4 3"/></g>`,'ميزان حرارة'),cap:'ميزان من رسمنا بالمقياسين. مرّر المؤشر على العلامتين.',labs:[LAB53A,{title:'الحرارة',w:(el,B)=>N.cases(el,B,{intro:'اختر:',cases:[{q:'0°C =',opts:[['32°F',1],['0°F',0]]},{q:'100°C =',opts:[['212°F',1],['180°F',0]]},{q:'−18°C نقرؤها:',opts:[['minus eighteen degrees Celsius',1],['eighteen degrees Fahrenheit',0]]}]})}]},
 {t:'دورة الماء في التبريد',short:'دورة التبريد',old:[2],q:'إلى أين يذهب الماء بعد المشعاع؟',ref:'ص 40–41',
  lead:`نصف الدورة خطوة خطوة بالمضارع البسيط وحروف الجر مع الحركة التي تعلمناها. وحتى لا نكرر الاسم نستعمل كلمات تعود عليه.`,
  points:[`كل خطوة: الفاعل + فعل + حرف جر: ${e('The hot water passes through the thermostat.')}`,`${e('it')} و ${e('this')} و ${e('here')} تعود على كلمة قبلها: ${e('It flows through the top hose.')} (it = the water)`,`وفي برج التبريد: ${e('Hot air enters the tower. The cool air sinks. The hot air rises and leaves the chimney.')}`],
  html:vt([['engine','المحرك'],['water pump','مضخة الماء'],['thermostat','منظم الحرارة'],['top hose','الخرطوم العلوي'],['radiator','المشعاع (الرديتر)'],['bottom hose','الخرطوم السفلي'],['fan blades','ريش المروحة']],['English','المعنى'])+eb(CAR.map(x=>x[0])),
  art:art(`<g data-tip="engine — المحرك: يسخّن الماء."><rect x="30" y="50" width="120" height="80" rx="10" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/>${TL(90,95,'engine',{fs:13,w:700})}</g>
    <g data-tip="thermostat — منظم الحرارة: يتحكم في حرارة المحرك."><rect x="170" y="56" width="40" height="26" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(190,44,'thermostat',{fs:11,w:700})}</g>
    <g data-tip="top hose — الخرطوم العلوي: يحمل الماء الساخن إلى المشعاع.">${AR(150,70,168,70,C.red,4)}${AR(210,70,280,140,C.red,4)}${TL(270,98,'top hose',{fs:11,w:700})}</g>
    <g data-tip="radiator — المشعاع: المروحة تبرّد الماء فيه."><rect x="230" y="150" width="110" height="90" rx="8" fill="${C.blue}" opacity=".7" stroke="${C.ink}" stroke-width="2"/>${TL(285,200,'radiator',{fs:13,w:700,c:'#fff'})}</g>
    <g data-tip="bottom hose + water pump — الخرطوم السفلي والمضخة: يعيدان الماء البارد إلى المحرك.">${AR(228,220,100,220,C.blue,4)}${AR(100,220,100,134,C.blue,4)}${TL(150,250,'bottom hose · pump',{fs:11,w:700})}</g>`,'تبريد السيارة'),cap:'دورة الماء: من المحرك إلى المشعاع ثم العودة. مرّر المؤشر على كل جزء.',labs:[{title:'الأفعال',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The water pump ___ water around the engine.',o:['pushes','cools'],a:0},{s:'The fan blades ___ air onto the radiator.',o:['blow','sink'],a:0},{s:'Cool water ___ to the bottom of the radiator.',o:['sinks','rises'],a:0},{s:'The thermostat ___ the temperature.',o:['controls','connects'],a:0}]})}]},
 {t:'الجدول الأسبوعي',short:'every / on … s',q:'ما الفرق بين on Monday و every Monday؟',ref:'ص 41',
  lead:`نستعمل المضارع البسيط أيضاً لجدولنا الذي يتكرر كل أسبوع.`,
  points:[`${e('every Sunday')} = ${e('on Sundays')} كل أحد.`,`${e('every Monday morning')} = ${e('on Monday mornings')}: مع ${e('every')} مفرد، ومع ${e('on')} جمع.`,`السؤال: ${e('When do you attend lectures?')} و ${e('What do you do on Monday afternoons?')}`],
  html:dl([['A','When do you attend lectures?'],['B','Every Sunday morning.'],['A','What do you do on Monday afternoons?'],['B','I do my practical work then.']]),
  pairs:[['every Mondays','every Monday','بعد every مفرد.']],
  labs:[LAB53B]}
 ]});
B.lesson({
 id:'u5-l3',unit:5,order:3,pages:'40–41',
 title:'Cooling system — نظام التبريد',
 summary:'درجات الحرارة بالسلسيوس والفهرنهايت والتحويل بينهما، وأجزاء نظام تبريد السيارة (engine، water pump، thermostat، top hose، radiator، bottom hose، fan) ووصف حركة الماء، ومرجع الضمائر this و it و here، وتبريد البيت بالبرج والمدخنة الشمسية، والجدول الأسبوعي (every Tuesday، on Mondays).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 40–41',html:`<p>تشرح كيف يُبرَّد محرك أو بيت. ستتعلم:</p><ol><li>السلسيوس والفهرنهايت.</li><li>أجزاء نظام تبريد السيارة.</li><li>وصف العملية بالأفعال وحروف الجر.</li><li>الحديث عن جدولك الأسبوعي.</li></ol>`},
  ...R53.theory,
  {h:'تمارين الكتاب',ref:'ص 40–41',html:
   `<p>${B.bkCtl('shw101','حرارة ماء الدش:')} ${B.bkCtl('hot101','أعلى حرارة هواء:')}</p>`+
   bk(1,'ص 40','اختبار: ما درجات الحرارة المعتادة؟',[Q1,'2 b) 40°F (4.5°C)','3 b) −18°C (0°F)','4 a) −89°C (−128°F)',Q5,'6 a) 110°C (230°F)'])+
   bk(2,'ص 40','استمع وتحقق من إجاباتك.',null)+
   bk(3,'ص 40','سمِّ أجزاء الرسم بكلمات الصندوق.',['1 engine (مثال)','3 thermostat','4 radiator','2، 5، 6: top hose · bottom hose · water pump حسب الرسم'],'من قراءتنا للرسم.')+
   bk(4,'ص 40','اقرأ النص وتحقق من إجاباتك في التمرين 3.',null)+
   bk(5,'ص 40','على أي كلمة يعود كل ضمير؟',['1 b) thermostat (مثال)','2 b) thermostat','3 b) radiator','4 a) water'])+
   bk(6,'ص 40','كوّن جملاً صحيحة.',['(1) The water pump pushes water around the engine.','(2) The thermostat controls the temperature of the water.','(3) The two hoses connect the radiator to the engine.','(4) The radiator cools the hot water from the engine.','(5) The fan blades blow air onto the radiator.','(6) Cool water sinks to the bottom of the radiator.','(7) Hot water rises to the top of the engine.','(8) Water flows through the two hoses.'])+
   bk(7,'ص 41','كيف يعمل تبريد البيت؟ ماذا يحدث في كل مرحلة؟',null)+
   bk(8,'ص 41','أكمل الوصف بالأفعال وحروف الجر.',['(3) Hot air enters the tower through the air inlet.','(4) The shower of cold water cools the air. (5) The cool air then sinks to the bottom of the tower.','(6) The cool air enters (flows into) the house, and then it rises (7).','(8) It leaves the house and enters the solar chimney.','(9) The Sun heats the chimney, and the hot air rises (10).','(11) The hot air finally flows out of the chimney through the air outlet.'],'(7) إجابة نموذجية، وبعض المواضع تقبل أكثر من فعل.')+
   bk(9,'ص 41','استمع واقرأ.',null)+bk(10,'ص 41','مع زميلك: تدرّب على الحوار.',null)+bk(11,'ص 41','ناقش جدولك الأسبوعي مع زميلك.',null)},
  {h:'الاستماع',ref:'ص 40–41',html:au(30,'ص 40 — التمرين 2','ستة حوارات عن درجات الحرارة.')+au(31,'ص 41 — التمرين 9','حوار عن الجدول الأسبوعي.')}
 ],
 stations:[
  {intro:true},
  ...R53.stations,
  {recap:['°F = °C × 9 / 5 + 32.','engine → thermostat → top hose → radiator → bottom hose → pump → engine.','push, cool, control, connect, blow, flow.','This / it / here تعود على كلمة قبلها.','every Tuesday = on Tuesdays.']}
 ],
 lab:lab53,
 examples:[
  {title:'مثال 1: تحويل الحرارة',ref:'ص 40',q:`<p>حوّل 20°C إلى فهرنهايت.</p>`,given:[],solve:()=>[{t:'الخطوة 1: القانون من الكتاب: °F = °C × 9 / 5 + 32'},{t:'الخطوة 2: نعوّض: 20 × 9 / 5 = 36'},{t:'الخطوة 3: نضيف 32: 36 + 32 = 68، إذن 20°C = 68°F',final:true}]},
  {title:'مثال 2: وظيفة جزء',ref:'ص 40',q:`<p>اكتب جملة عن وظيفة المشعاع.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفعل: يبرّد = ${e('cool')}، ومع المفرد ${e('cools')}.`},{t:`الخطوة 2: ماذا يبرّد؟ ${e('the hot water from the engine')}.`},{t:`الخطوة 3: ${e('The radiator cools the hot water from the engine.')}`,final:true}]},
  {title:'مثال 3: الجدول الأسبوعي',ref:'ص 41',q:`<p>أجب: When do you go to the workshop? (كل أربعاء صباحاً)</p>`,given:[],solve:()=>[{t:`الخطوة 1: كل أربعاء = ${e('every Wednesday')}.`},{t:`الخطوة 2: صباحاً: ${e('morning')}.`},{t:`الخطوة 3: ${e('Every Wednesday morning.')}`,final:true}]}
 ],
 quiz:[
  {q:'0°C =',o:['32°F','0°F','100°F','−32°F'],c:0,e:'0 × 9 / 5 + 32 = 32.'},
  {q:'The thermostat ___ the temperature of the engine.',o:['controls','pushes','blows','sinks'],c:0,e:'controls.'},
  {q:'The fan ___ the water in the radiator.',o:['cools','heats','rises','enters'],c:0,e:'cools.'},
  {q:'every Monday =',o:['on Mondays','in Monday','at Monday','on Monday mornings'],c:0,e:'on Mondays = every Monday.'},
  {q:'الماء الساخن يدخل المشعاع عبر:',o:['the top hose','the bottom hose','the fan','the pump'],c:0,e:'top hose.'},
  {q:'−18°C نقرؤها:',o:['minus eighteen degrees Celsius','eighteen minus Celsius','negative Fahrenheit eighteen','eighteen under'],c:0,e:'minus eighteen degrees Celsius.'}
 ]
});
})(PLCBOOK);

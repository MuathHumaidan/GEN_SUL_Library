/* الوحدة 8 — Reporting: الدرس 8.3 Past events (ص 62–63) ودرس مراجعة D (ص 64–67) */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,upd,ab,sp}=N;

/* =================== 8.3 Past events =================== */
/* أحداث تاريخية في الفضاء (حقائق عامة): [السنة، الشهر، اليوم، الجملة بالماضي، السؤال] */
const SPACE=[[1957,10,4,'The Soviet Union launched the first satellite, Sputnik 1.','When did they launch the first satellite?'],[1961,4,12,'Yuri Gagarin became the first man in space.','When did the first man go into space?'],[1965,3,18,'Alexei Leonov made the first spacewalk.','When did Leonov make the first spacewalk?'],[1969,7,20,'Armstrong and Aldrin landed on the Moon.','When did the first men land on the Moon?'],[1971,4,19,'The first space station, Salyut 1, went into orbit.','When did the first space station go into orbit?'],[1981,4,12,'The first space shuttle flew into space.','When did the first shuttle fly into space?'],[1990,4,24,'NASA sent the Hubble telescope into space.','When did NASA send Hubble into space?'],[2000,11,2,'The first crew entered the International Space Station.','When did the first crew enter the ISS?'],[2001,4,28,'The first space tourist flew to the ISS.','When did the first space tourist fly into space?'],[2005,12,28,'Europe launched its first Galileo navigation satellite.','When did Europe launch its first Galileo satellite?']];
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
const ord=n=>n+(n%100>=11&&n%100<=13?'th':['th','st','nd','rd'][n%10]||'th');
function lab83(el,B){
 const today=new Date();today.setHours(0,0,0,0);
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">التقويم و ago</h3>
  <p class="sub">مبني على «Vocabulary» ص 63. اليوم مأخوذ من جهازك. اضغط أي يوم في الشهر لترى كيف تصفه بالإنجليزي.</p>
  <div id="cal"></div><div id="co"></div>
  ${K.sl('hh','قبل كم دقيقة/ساعة؟ (بالدقائق)',5,300,5,60)}<div id="ho"></div>
 </div>
 <div class="c6 panel"><h3 style="margin-top:0">أحداث الفضاء: متى؟ ومنذ كم؟</h3>
  <p class="sub">حقائق تاريخية عامة. اختر حدثاً لترى السؤال بالماضي والجواب بالتاريخ وبـ ago (محسوب من سنة اليوم).</p>
  <select class="ph-sel" id="se" dir="ltr">${SPACE.map((x,i)=>`<option value="${i}">${x[0]} — ${x[3].replace(/\.$/,'')}</option>`).join('')}</select>
  <div id="so"></div>
 </div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اضغط يوماً قبل اليوم بسبعة أيام: هل قال <span class="en">a week ago</span>؟</li>
  <li>اجعل الدقائق 120: كيف تقول الوقت قبل ساعتين؟</li>
  <li>اختر هبوط القمر: لاحظ <span class="en">did … land</span> في السؤال و <span class="en">landed</span> في الجواب.</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);const Y=today.getFullYear(),M=today.getMonth(),D=today.getDate();let pick=D;
 const ago=n=>n===0?'today':n===1?'yesterday':n===2?'the day before yesterday (two days ago)':n===7?'a week ago (one week ago)':n===14?'two weeks ago':n>0?`${n} days ago`:n===-1?'tomorrow':`in ${-n} days`;
 const cal=()=>{const first=new Date(Y,M,1).getDay(),days=new Date(Y,M+1,0).getDate();let h=`<div style="direction:ltr"><b class="en">${MON[M]} ${Y}</b><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-top:6px">${['Su','Mo','Tu','We','Th','Fr','Sa'].map(d=>`<span style="text-align:center;font-size:12px;color:var(--muted)">${d}</span>`).join('')}`;
  for(let i=0;i<first;i++)h+='<span></span>';
  for(let d=1;d<=days;d++)h+=`<button type="button" class="btn" data-day="${d}" style="min-height:34px;padding:2px;${d===D?'outline:2px solid var(--stop);':''}${d===pick?'background:var(--blue);color:#fff;':''}">${d}</button>`;
  $('#cal').innerHTML=h+'</div></div>';el.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{pick=+b.dataset.day;cal()});
  const n=D-pick;$('#co').innerHTML=eb([`Today is the ${ord(D)} of ${MON[M]}.`,n>0?`The ${ord(pick)} was ${ago(n)}.`:n===0?`The ${ord(pick)} is today.`:`The ${ord(pick)} is ${ago(n)}.`])};
 const hrs=()=>{const m=+$('#hh').value;$('#hh-v').textContent=m+' min';const t=new Date();const h=new Date(t.getTime()-m*60000);
  const f=d=>`${d.getHours()}.${String(d.getMinutes()).padStart(2,'0')}`;const txt=m<60?`${m} minutes ago`:m%60===0?`${m/60===1?'an hour':m/60+' hours'} ago`:`${Math.floor(m/60)} hours and ${m%60} minutes ago`;
  $('#ho').innerHTML=eb(`It's ${f(t)} now. ${txt[0].toUpperCase()+txt.slice(1)} = ${f(h)}.`)};
 const sp_=()=>{const x=SPACE[+$('#se').value],n=Y-x[0];
  $('#so').innerHTML=dl([['A',x[4]],['B',`${x[3].replace(/\.$/,'')} on the ${ord(x[2])} of ${MON[x[1]-1]} ${x[0]}.`],['B',`That was ${n} years ago (more than ${Math.floor(n/10)*10} years ago).`]])};
 cal();$('#hh').addEventListener('input',hrs);hrs();$('#se').onchange=sp_;sp_();
}

const VOC83=[['launch','يطلق (صاروخاً أو قمراً صناعياً)',''],['satellite','قمر صناعي',''],['space station','محطة فضائية',''],['spacewalk','سير في الفضاء خارج المركبة',''],['shuttle','مكوك فضاء',''],['telescope','تلسكوب (مقراب)',''],['crew','طاقم',''],['navigation','الملاحة (تحديد الموقع)',''],['ago','قبل (من الآن)','two days ago'],['yesterday','أمس',''],['the day before yesterday','أول أمس',''],['purchase','الشراء','date of purchase'],['model number','رقم الطراز',''],['drop','يُسقط','I dropped it in water.']];
const PASTV=[['become','became','يصبح'],['fly','flew','يطير'],['go','went','يذهب'],['make','made','يصنع / يقوم بـ'],['send','sent','يرسل'],['travel','travelled','يسافر'],['land','landed','يهبط'],['launch','launched','يطلق'],['enter','entered','يدخل'],['buy','bought','يشتري'],['drop','dropped','يُسقط']];

/* ===== مختبرات «شرح القاعدة» 8.3 ===== */
const PV83={launch:['launched','يطلق','+ ed'],enter:['entered','يدخل','+ ed'],arrive:['arrived','يصل','+ d (آخره e)'],try:['tried','يحاول','y ← ied'],stop:['stopped','يتوقف','نكرر الحرف + ed'],send:['sent','يرسل','شاذ'],fly:['flew','يطير','شاذ'],become:['became','يصبح','شاذ'],go:['went','يذهب','شاذ'],break:['broke','يكسر','شاذ']};
const LAB83A={title:'مصنع الماضي',w:(el,B)=>N.labB(el,B,{intro:'اختر فعلاً وشاهد ماضيه، ولون التغيير يخبرك هل هو منتظم أم شاذ.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(PV83).map(k=>[k,k])}],
 out:({v})=>{const x=PV83[v],irr=x[2]==='شاذ';
  return{pieces:[[v,'x',x[1]],['→','x',''],[x[0],irr?'q':'k',irr?'شاذ يُحفظ':x[2]]],say:`${v}, ${x[0]}`,why:irr?'فعل شاذ: ماضيه لا قاعدة له، فنحفظه.':`فعل منتظم: ${x[2]}.`}}})};
const EV83={sat:['they','launch','the first satellite','1957'],iss:['the first crew','enter','the ISS','2000'],tel:['NASA','send','a telescope into space','1990'],moon:['two men','fly','to the Moon','1969']};
const LAB83B={title:'المثبت والسؤال والنفي',w:(el,B)=>N.labB(el,B,{intro:'اختر الحدث ونوع الجملة، وشاهد أين يظهر did وأين يختفي.',
 controls:[{k:'e',label:'الحدث',opts:[['sat','first satellite'],['iss','first ISS crew'],['tel','space telescope'],['moon','Moon landing']]},{k:'t',label:'الجملة',opts:[['pos','مثبتة'],['when','When did…?'],['yn','Did…?'],['neg','منفية']]}],
 out:({e,t})=>{const [S,v,o,y]=EV83[e],P=PV83[v][0],SS=S.replace(/^./,c=>c.toUpperCase());
  if(t==='pos')return{pieces:[[SS,'x','الفاعل'],[P,'n','الماضي'],[o,'x',''],[`in ${y}.`,'q','وقت محدد']],say:`${SS} ${P} ${o} in ${y}.`,why:'في المثبت يكون الفعل نفسه بصيغة الماضي، بلا did.'};
  if(t==='when')return{pieces:[['When','q','متى'],['did','k','علامة الماضي'],[S,'x','الفاعل'],[v,'n','الفعل الأصلي'],[o+'?','x','']],say:`When did ${S} ${v} ${o}?`,why:'في السؤال تحمل did علامة الماضي، فيعود الفعل إلى صورته الأصلية.'};
  if(t==='yn')return{pieces:[['Did','k','في أول السؤال'],[S,'x',''],[v,'n','الفعل الأصلي'],[o+'?','x',''],['Yes, '+(S==='NASA'?'it':'they')+' did.','q','جواب قصير']],say:`Did ${S} ${v} ${o}? Yes, ${S==='NASA'?'it':'they'} did.`,why:"الجواب القصير: Yes, … did. / No, … didn't."};
  return{pieces:[[SS,'x',''],["didn't",'k','نفي الماضي'],[v,'n','الفعل الأصلي'],[o,'x',''],[`in ${+y+5}.`,'q','']],say:`${SS} didn't ${v} ${o} in ${+y+5}.`,why:"النفي: didn't + الفعل الأصلي، لا الماضي."}}})};
const MON83=['January','February','March','April','May','June','July','August','September','October','November','December'];
const ORD83=n=>n+(n%100>=11&&n%100<=13?'th':['th','st','nd','rd','th','th','th','th','th','th'][n%10]);
const ORDW83={1:'first',2:'second',3:'third',4:'fourth',5:'fifth',14:'fourteenth',21:'twenty-first',22:'twenty-second',23:'twenty-third',30:'thirtieth'};
const LAB83C={title:'on أم in؟ و ago',w:(el,B)=>N.labB(el,B,{intro:'اختر نوع الوقت، وشاهد حرف الجر المناسب. وفي ago يحسب المختبر من تاريخ اليوم.',
 controls:[{k:'t',label:'الوقت',opts:[['date','تاريخ يوم كامل'],['month','شهر'],['year','سنة'],['ago1','قبل يومين (ago)'],['ago2','قبل 10 سنوات (ago)']]}],
 out:({t})=>{const d=new Date();
  if(t==='date')return{pieces:[['on','k','لليوم المحدد'],['the 5th of October 1957','n','']],say:'on the fifth of October 1957',ar:'نقرؤها: on the fifth of October',why:'on مع اليوم والتاريخ الكامل، ونقرأ الرقم ترتيبياً: fifth.'};
  if(t==='month')return{pieces:[['in','k','للشهر'],['October','n','']],say:'in October',why:'in مع الشهر.'};
  if(t==='year')return{pieces:[['in','k','للسنة'],['1957','n','']],say:'in 1957',why:'in مع السنة.'};
  const back=t==='ago1'?new Date(d.getTime()-2*864e5):new Date(d.getFullYear()-10,d.getMonth(),d.getDate());
  const when=t==='ago1'?`the ${ORD83(back.getDate())} of ${MON83[back.getMonth()]}`:`${back.getFullYear()}`;
  return{pieces:[[t==='ago1'?'two days':'ten years','n','المدة'],['ago','k','قبل الآن'],['=','x',''],[when,'q','الحساب من اليوم']],say:`${t==='ago1'?'two days':'ten years'} ago`,why:'ago تأتي بعد المدة، ونحسبها من اليوم إلى الوراء.'}}})};
const R83=N.rule({title:'الماضي البسيط والتواريخ',ref:'ص 62–63',
 intro:`نشرح الكلام عن أحداث مضت في ثلاث خطوات مرتبة: جملة الماضي المثبتة، ثم السؤال والنفي بـ ${e('did')}، ثم حروف الجر مع التواريخ و ${e('ago')}.`,
 parts:[
 {t:'الماضي البسيط في الجملة المثبتة',short:'الماضي',old:[1],q:'كيف تقول إنهم أطلقوا أول قمر صناعي عام 1957؟',ref:'ص 62',
  lead:`عندما نروي حدثاً وقع وانتهى في وقت معروف، مثل إطلاق قمر صناعي أو افتتاح جسر، نستعمل الماضي البسيط. وغالباً نذكر معه الوقت.`,
  points:[`<b>القالب:</b> الفاعل + الفعل بصيغة الماضي، وهي واحدة مع كل الفاعلين.<br>${e('They launched the satellite in 1957.')}`,
   `<b>الفعل المنتظم</b> نضيف له ${e('-ed')}، مع قواعد الإملاء نفسها في الدرس 8.1:<br>${e('launch → launched · arrive → arrived · try → tried · stop → stopped')}`,
   `<b>الفعل الشاذ</b> له صيغة ماضٍ خاصة تُحفظ:<br>${e('send → sent · fly → flew · become → became · go → went')}`,
   `<b>كلمات الوقت المحدد</b> التي تأتي معه: ${e('yesterday · last year · in 2007 · two days ago · When…?')}`],
  html:`<p><b>أفعال الماضي في هذا الدرس:</b></p>${vt(PASTV.map(v=>[`${v[0]} → ${v[1]}`,v[2]]),['الفعل → الماضي','المعنى'])}`,
  pairs:[['They launch it in 1957.','They launched it in 1957.','مع وقت مضى نستعمل الماضي.'],['They sended a telescope.','They sent a telescope.','send شاذ: sent.']],
  art:art(`<g data-tip="launched: منتظم بـ ed"><circle cx="110" cy="130" r="56" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(110,126,'launch',{fs:14})}${TL(110,150,'launched',{fs:15,w:700,c:C.grn})}</g>
    <g data-tip="sent: شاذ (send → sent)"><circle cx="250" cy="130" r="56" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(250,126,'send',{fs:14})}${TL(250,150,'sent',{fs:15,w:700,c:C.red})}</g>
    <g data-tip="NASA sent Hubble into space in 1990.">${TL(180,250,'in 1990',{fs:18,w:700})}</g>`,'launch → launched و send → sent'),cap:'منتظم وشاذ. مرّر المؤشر على كل منهما.',labs:[LAB83A,{title:'الماضي',w:(el,B)=>N.gaps(el,B,{intro:'اختر الصيغة الصحيحة:',items:[{s:'Gagarin ___ the first man in space in 1961.',o:['became','become','has become'],a:0,why:'مع 1961: الماضي البسيط.'},{s:'The first shuttle ___ into space in 1981.',o:['flew','flied','has flown'],a:0,why:'fly → flew.'},{s:'They ___ the satellite last year.',o:['launched','have launched','launch'],a:0}]})}]},
 {t:'السؤال والنفي بـ did',short:'When did…?',old:[2],q:'كيف تسأل متى دخل أول طاقم محطة الفضاء؟',ref:'ص 62',
  lead:`في السؤال والنفي لا نغيّر الفعل نفسه، بل نضيف ${e('did')} لتحمل علامة الماضي، فيعود الفعل إلى صورته الأصلية.`,
  subs:[{h:'السؤال',points:[`<b>بكلمة سؤال:</b> كلمة السؤال + ${e('did')} + الفاعل + الفعل الأصلي؟<br>${e('When did they launch it?')}`,`<b>بنعم أو لا:</b> ${e('Did')} + الفاعل + الفعل الأصلي؟<br>${e("Did they launch it in 1957? — Yes, they did. · No, they didn't.")}`]},
   {h:'النفي',points:[`الفاعل + ${e("didn't")} (= ${e('did not')}) + الفعل الأصلي:<br>${e("They didn't go there in 2006.")}`]}],
  grid:{head:['الجملة','الصيغة','مثال'],rows:[['مثبتة','الفعل بالماضي','They launched it.'],['سؤال','When did + الفاعل + الفعل الأصلي','When did they launch it?'],['سؤال نعم/لا','Did + الفاعل + الفعل الأصلي','Did they launch it?'],['منفية',"didn't + الفعل الأصلي","They didn't launch it."]]},
  pairs:[['When did they launched it?','When did they launch it?','بعد did الفعل الأصلي.'],["They didn't went.","They didn't go.","بعد didn't الفعل الأصلي."]],
  art:art(`<g data-tip="When + did + الفاعل + الفعل الأصلي?"><rect x="30" y="90" width="300" height="56" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,124,'When did they land on the Moon?',{fs:14,w:700})}</g>
    <g data-tip="الجواب بالماضي والتاريخ."><rect x="30" y="190" width="300" height="56" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,224,'They landed on it in July 1969.',{fs:14,w:700})}</g>`,'سؤال When did وجوابه'),cap:'السؤال والجواب. مرّر المؤشر على كل منهما.',labs:[LAB83B,{title:'اكتب السؤال',w:(el,B)=>N.typ(el,B,{intro:'اكتب السؤال بـ When did (أحداث تاريخية):',items:[{q:e('Leonov made the first spacewalk in 1965.'),a:['When did Leonov make the first spacewalk?']},{q:e('NASA sent Hubble into space in 1990.'),a:['When did NASA send Hubble into space?']}]})}]},
 {t:'التواريخ: on و in و ago',short:'on / in / ago',old:[3],q:'هل تقول on 1957 أم in 1957؟',ref:'ص 62–63',
  lead:`مع الماضي نذكر متى حدث الشيء. ولكل نوع من الوقت حرف جر خاص، وهناك كلمة ${e('ago')} للحساب من اليوم إلى الوراء.`,
  points:[`<b>${e('on')}</b> مع اليوم المحدد والتاريخ الكامل: ${e('on Monday · on the 5th of October 1957')}`,
   `<b>${e('in')}</b> مع الشهر والسنة: ${e('in October · in 1957 · in October 1957')}`,
   `<b>قراءة التاريخ:</b> نكتب ${e('5 October')} أو ${e('the 5th of October')}، ونقرأ الرقم ترتيبياً: ${e('the fifth of October')}.`,
   `<b>${e('ago')}</b> = قبل الآن، وتأتي بعد المدة: ${e('two days ago · ten years ago')}. إذا كان اليوم 15 نوفمبر فـ ${e('two days ago')} = 13 نوفمبر.`],
  grid:{head:['الوقت','الكلمة','مثال'],rows:[['يوم أو تاريخ كامل','on','on the 14th of May 2005'],['شهر','in','in May'],['سنة','in','in 2005'],['مدة قبل الآن','… ago','two days ago']]},
  pairs:[['on 1957','in 1957','مع السنة: in.'],['ago two days','two days ago','ago تأتي بعد المدة.']],
  art:art(`<rect x="60" y="60" width="240" height="200" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/><rect x="60" y="60" width="240" height="40" rx="14" fill="${C.red}"/>${TL(180,87,'November',{fs:16,w:700,c:'#fff'})}
    <g data-tip="today: the 15th of November"><circle cx="180" cy="170" r="34" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,177,'15',{fs:22,w:700})}</g>
    <g data-tip="two days ago = the 13th"> ${TL(110,177,'13',{fs:18,c:C.blue,w:700})}</g><g data-tip="two weeks ago = the 1st">${TL(250,177,'1',{fs:18,c:C.blue,w:700})}</g>${TL(180,235,'ago = before now',{fs:13})}`,'تقويم نوفمبر واليوم 15'),cap:'ago في التقويم. مرّر المؤشر على الأرقام.',labs:[LAB83C,{title:'on / in / ago',w:(el,B)=>N.gaps(el,B,{intro:'اختر الحرف أو الكلمة:',items:[{s:'They launched it ___ the 28th of December 2005.',o:['on','in','at'],a:0},{s:'The station opened ___ 1971.',o:['on','in','ago'],a:1},{s:'I bought it three months ___.',o:['ago','before now','in'],a:0}]})}]}
 ]});
B.lesson({
 id:'u8-l3',unit:8,order:3,pages:'62–63',
 title:'Past events — أحداث مضت',
 summary:'الماضي البسيط (المنتظم والشاذ) للأحداث في وقت محدد، والسؤال When did…? والتواريخ (on the 5th of October، in May، in 2005)، و ago، ومكالمة إصلاح جهاز.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 62–63',html:`<ol><li>تتكلم عن أحداث في وقت محدد بالماضي البسيط: ${e('They launched it in 1957.')}</li><li>تسأل ${e('When did…?')} وتجيب بتاريخ.</li><li>تقرأ التواريخ وتكتبها، وتستعمل ${e('ago')}.</li><li>تفرّق بين الماضي البسيط والمضارع التام.</li></ol>`},
  {h:'جدول المفردات كاملاً',ref:'ص 62–63',html:vt(VOC83)},
  ...R83.theory,
  {h:'تمارين الكتاب',ref:'ص 62–63',html:
   bk(1,'ص 62','مع زميلك: متى حدثت الأحداث العشرة لأول مرة (السنة التقريبية)؟',['space station: 1971','telescope in space: 1990','man in space: 1961','space tourist: 2001','satellite: 1957','spacewalk: 1965','man on the Moon: 1969','shuttle in space: 1981','crew to enter the ISS: 2000','European navigation satellite: 2005'])+
   bk(2,'ص 62','اقرأ الجدول وتحقق من إجاباتك في التمرين 1.',null)+
   bk(3,'ص 62','كوّن أسئلة وأجوبة عن الجدول (When did…? They … it on…).',null,'انظر المختبر: سؤال وجواب لكل حدث.')+
   bk(4,'ص 63','اكتب اسم الشهر على التقويم وضع دائرة حول تاريخ اليوم، ثم قل التواريخ الست.',null,'تختلف الإجابة حسب تاريخ اليوم؛ المختبر يحسبها لك من تقويم جهازك.')+
   bk(5,'ص 63','كوّن جملاً عن أحداث الجدول بـ ago وسنوات تقريبية.',null,'مثال الكتاب كُتب قبل سنوات؛ احسب من سنتنا الحالية (المختبر يحسبها).')+
   upd('مثال الكتاب يقول إن إطلاق أول قمر صناعي كان قبل «أكثر من 50 سنة»، وهذا صحيح وقت طباعة الكتاب. اليوم مرّ عليه قرابة 70 سنة (1957). وأجهزة مثل <span class="en">MP3 player</span> قلّ استعمالها، لكن لغة المكالمة نفسها لم تتغير.')+
   bk(7,'ص 63','مع زميلك: مكالمات مشابهة لمحل الإصلاح بالمعلومات في الجدول (ثلاثة أجهزة).',null)+
   bk(8,'ص 63','اكتب قائمة بأشياء ممتعة فعلتها في حياتك مع تواريخها.',null)+
   bk(9,'ص 63','حدّث زملاءك عن قائمتك.',null)},
  {h:'الاستماع',ref:'ص 63',html:au(46,'ص 63 — التمرين 6','استمع وأكمل المكالمة الهاتفية مع محل الإصلاح.')},
  {h:'مكالمة جديدة للتمثيل (إضافة من خارج الكتاب)',ref:'ص 63 — التمرين 7',html:dl([['Shop','Hello, City Repairs. How can I help you?'],['Customer',"Hi. I've broken my tablet. Can you repair it?"],['Shop',"Sure. What's the model number?"],['Customer',"It's a Tab 10."],['Shop','When did you buy it?'],['Customer','I bought it on the 3rd of March.'],['Shop',"What's the problem?"],['Customer',"I've dropped it and I've cracked the screen."],['Shop','When did you drop it?'],['Customer','Two days ago.']])}
 ],
 stations:[
  {intro:true},
  ...R83.stations,
  {recap:['الماضي البسيط لحدث في وقت محدد: launched, sent, flew, became.','السؤال: When did + فاعل + فعل أصلي? والنفي didn\'t + فعل أصلي.','on the 5th of October 1957 · in October · in 1957.','ago = قبل الآن: two days ago, an hour ago.']}
 ],
 lab:lab83,
 examples:[
  {title:'مثال 1: سؤال وجواب عن حدث',ref:'ص 62',q:`<p>اسأل متى دخل أول طاقم محطة الفضاء الدولية، وأجب (2 نوفمبر 2000).</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: السؤال ${e('When did the first crew enter the ISS?')}`},{t:`الخطوة 2: الجواب بالماضي ${e('entered')} والتاريخ مع ${e('on')}.`},{t:`الخطوة 3: ${e('They entered it on the 2nd of November 2000.')}`,final:true}]},
  {title:'مثال 2: ago',ref:'ص 63',q:`<p>الساعة الآن 10.15. صف الساعة 9.15 بـ ago.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: الفرق ساعة واحدة.'},{t:`الخطوة 2: ${e('an hour ago')}.`},{t:`الخطوة 3: ${e('9.15 was an hour ago.')}`,final:true}]},
  {title:'مثال 3: الماضي أم المضارع التام؟',ref:'ص 62–63',q:`<p>صحّح: ${e("I've dropped my phone yesterday.")}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e('yesterday')} وقت محدد.`},{t:`الخطوة 2: نستعمل الماضي البسيط ${e('dropped')}.`},{t:`الخطوة 3: ${e('I dropped my phone yesterday.')}`,final:true}]}
 ],
 quiz:[
  {q:'NASA ___ Hubble into space in 1990.',o:['sended','sent','has sent','send'],c:1,e:'send → sent، ومع 1990 الماضي البسيط.'},
  {q:'When ___ they launch Sputnik?',o:['do','did','have','were'],c:1,e:'سؤال الماضي: did.'},
  {q:'When did they ___ on the Moon?',o:['landed','land','lands','landing'],c:1,e:'بعد did: الفعل الأصلي.'},
  {q:'They launched it ___ the 5th of October.',o:['in','on','at','ago'],c:1,e:'on مع اليوم المحدد.'},
  {q:'اليوم 15 نوفمبر. two days ago =',o:['17 November','13 November','15 October','1 November'],c:1,e:'15 − 2 = 13.'},
  {q:'اختر الجملة الصحيحة:',o:["I've bought it last week.","I bought it last week.","I buyed it last week.","I have buy it last week."],c:1,e:'مع last week: الماضي البسيط bought.'},
  {q:'satellite معناها:',o:['مكوك','قمر صناعي','محطة فضاء','تلسكوب'],c:1,e:'satellite = قمر صناعي.'}
 ]
});

/* =================== مراجعة D (ص 64–67) =================== */
const DRILL=[
 {k:'سؤال How',q:`كوّن السؤال (the tunnel): ${e("It's 12 km long.")}`,a:['How long is the tunnel?']},
 {k:'سؤال How',q:`كوّن السؤال (the cables): ${e("They're 40 m long.")}`,a:['How long are the cables?']},
 {k:'الصفة والاسم',q:`أعد الكتابة بالصفة: ${e('The height of the mast is 60 m.')}`,a:['The mast is 60 m high.','The mast is 60 metres high.']},
 {k:'الصفة والاسم',q:`أعد الكتابة بالاسم: ${e('The lake is 15 m deep.')}`,a:['The depth of the lake is 15 m.','The depth of the lake is 15 metres.']},
 {k:'How many / much',q:`كوّن السؤال (glue / you): ${e('I need three tubes.')}`,a:['How much glue do you need?']},
 {k:'How many / much',q:`كوّن السؤال (bolts / the mechanic): ${e('He needs 40.')}`,a:['How many bolts does the mechanic need?']},
 {k:'المستقبل',q:`اعترض: ${e("They'll finish it in 2030.")} (2033)`,a:["They won't finish it in 2030. They'll finish it in 2033.","They won't finish it in 2030. They will finish it in 2033."]},
 {k:'المضارع التام',q:`أعد الكتابة بالمضارع التام (بلا وقت): ${e('The fan stopped ten minutes ago.')}`,a:['The fan has stopped.']},
 {k:'النتيجة',q:`ركّز على النتيجة: ${e("Someone has cracked the lens.")}`,a:['The lens is cracked.']},
 {k:"There's a…",q:`أعد الكتابة: ${e('The door of the van is dented.')}`,a:["There's a dent in the door of the van."]},
 {k:'الماضي',q:`أجب بالنفي والتصحيح: ${e('Did they open the bridge in 2003? (2004)')}`,a:["No, they didn't. They opened it in 2004."]},
 {k:'ناقص',q:`قلها بطريقة أخرى: ${e("There's no plug on the cable.")}`,a:["The cable doesn't have a plug.","The plug is missing."]}];
function labD(el,B){
 el.innerHTML=`<div class="phl"><div class="grid"><div class="c12 panel"><h3 style="margin-top:0">تدريب سريع على الوحدتين 7 و 8</h3>
  <p class="sub">12 سؤالاً جديداً من عندنا تغطي قواعد الوحدتين. اكتب الجملة ثم «تحقّق». السؤال يتغير بـ «التالي».</p>
  <div class="ph-row"><span id="dk" class="tag"></span><span class="sub" id="dn"></span></div><div id="dq"></div>
  <div class="ph-row"><button class="btn" id="dp">→ السابق</button><button class="btn pri" id="dx">التالي ←</button></div></div></div></div>`;
 const $=s=>el.querySelector(s);let i=0;
 const draw=()=>{const d=DRILL[i];$('#dk').textContent=d.k;$('#dn').textContent=`${i+1} من ${DRILL.length}`;N.typ($('#dq'),B,{items:[{q:d.q,a:d.a}]});$('#dp').disabled=!i;$('#dx').disabled=i===DRILL.length-1};
 $('#dp').onclick=()=>{i--;draw()};$('#dx').onclick=()=>{i++;draw()};draw();
}

B.lesson({
 id:'u8-l4',unit:8,order:4,pages:'64–67',
 title:'Review Unit D — مراجعة الوحدتين 7 و 8',
 summary:'مراجعة الأبعاد وأسئلة How، والمعدود وغير المعدود، و will، والمضارع التام والماضي البسيط، ووصف التلف، مع إجابات تمارين المراجعة D كلها.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 64–67',html:`<div class="tbx"><table class="vt"><thead><tr><th>النقطة</th><th>مثال</th><th>الدرس</th></tr></thead><tbody>
   <tr><td>How + صفة</td><td class="en">How wide is the road?</td><td>7.1</td></tr><tr><td>الصفة والاسم</td><td class="en">high → height</td><td>7.1</td></tr>
   <tr><td>How many / How much</td><td class="en">How much cement do you need?</td><td>7.2</td></tr><tr><td>will / won't</td><td class="en">It'll be 40 km long.</td><td>7.3</td></tr>
   <tr><td>المضارع التام</td><td class="en">My car has broken down.</td><td>8.1</td></tr><tr><td>الفعل والنتيجة</td><td class="en">The bumper is dented.</td><td>8.2</td></tr>
   <tr><td>الماضي البسيط</td><td class="en">They completed it in 2004.</td><td>8.3</td></tr></tbody></table></div>`},
  {h:'تمارين المراجعة (ص 64–65)',ref:'ص 64–65',html:
   bk(1,'ص 64','كوّن أسئلة لهذه الأجوبة (How + صفة).',['How wide is the road? (example)','How high are the pylons?','How long is the deck of the bridge?','How high is the scaffolding?','How deep are the foundations of the building?','How long are the steel beams?'])+
   bk(2,'ص 64','حوّل الأسماء إلى صفات.',['deep','high','wide','long'])+
   bk(3,'ص 64','أعد كتابة الجمل بالمعنى نفسه.',['How high is the bridge? (example)','The tower is 46 m high.','How deep is the sea under the bridge?','This new road is 355 km long.','How wide are the screws?','The well is more than 30 m deep.'])+
   bk(4,'ص 64','كوّن أسئلة لهذه الأجوبة (How many / How much).',['How many storeys does the building have? (example)','How much cement does the builder need?','How many cranes are the men using?','How much oil does the car need?','How many screws are you buying?','How much concrete can ten trucks carry?'])+
   bk(5,'ص 65','اقرأ النص وضع على الرسم الأجزاء والأبعاد المكتوبة بخط مائل.',null)+
   bk(6,'ص 65','مع زميلك: رتّب ما تحتاجه لبناء البرج (some / How much / How many).',null,'مثال: I need to order some trucks. — How many trucks do you need? — I need 40,000.')+
   bk(7,'ص 65','أكمل الحوار عن النفق من البطاقة.',['(1) will it','(2) It will be 40 km long.','(3) railway lines will it','(4) It will have two.','(5) How wide will it be?','(6) It will be 8 m wide.','(7) How deep will it be?','(8) It will be 300 m below sea level.','(9) will … complete it','(10) They will complete it in 2025.'])+
   bk(8,'ص 65','أجب عن الأسئلة مستعملاً المعلومة بين القوسين.',["No, they didn't. They completed it in 2004. (example)","No, I haven't. I've worked in a video shop.","No, they won't. They'll build a tunnel.","No, they aren't. They're planning and designing it.","No, it hasn't. It has put men on the Moon.","No, it didn't. It launched it in 1957."])},
  {h:'تمارين المراجعة (ص 66–67)',ref:'ص 66–67',html:
   bk(9,'ص 66','أعد كتابة الجمل بالمضارع التام (احذف تعبير الوقت).',['My car has broken down. (example)','NASA has launched the space shuttle.','A virus has attacked our office computers.',"I've written the email and I've sent it to the customer.",'The technician has taken the hard drive out of the computer.','The exhaust pipe has fallen off my car.'])+
   bk(10,'ص 66','انظر الصور وقل ما الناقص بثلاث طرق.',null,'القوالب: The … has no … / The … doesn\'t have any … / There are no … on the ….')+
   bk(11,'ص 66','أكمل الجدول بالتركيز على النتيجة.',['The front bumper is dented. (example)','The windscreen is broken.','The rear seat of the car is burnt.','The poles of the scaffolding are bent.','The safety jackets are torn.','The rear panel of the car is scratched.'])+
   bk(12,'ص 66','أكمل الجدول (الصفة ثم الاسم).',['bent · bend','burnt · burns','cracked · cracks','torn · tear'])+
   bk(13,'ص 67','أعد كتابة الجمل بالمعنى نفسه.',['This cover is scratched.','The car has no wheels.',"There are no plugs on the cables.",'There are some cracks in the windscreens.',"This garage doesn't have a workshop manual.",'The roof of the car is dented.'])+
   bk(14,'ص 67','أكمل الحوار بالصيغة الصحيحة للفعل.',['bought','find','found','keyed','did you pay','use','gave','used','did you receive','came'])+
   bk(15,'ص 67','اكتب وصفاً لبرج الماء وطريقة عمله من الملاحظات.',null,'نموذج قصير من عندنا: The water tower stores water. Its main parts are the tower, the tank and the pump. The tower is made of galvanised steel. The tank is 10 m wide and the tower is 60 m high. First, water flows to the pump. The pump pushes the water up into the tank. The tank stores the water. Then the water flows down to the city.')+
   bk(16,'ص 67','مشروع: اختر منشأة مشهورة واكتب عنها مقالاً قصيراً، أو صمّم جسراً أو نفقاً وارسمه واكتب جدول مواصفاته.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 7',title:'خلاصة الوحدة 7: المواصفات',q:'كم قالباً تحتاج لتصف منشأة كاملة؟',ref:'ص 64–65',
   art:art(`${[['How + adj','How high is it?',70],['many / much','How much steel?',140],['will','It will be 2 km long.',210]].map(([a,b,y],i)=>`<g data-tip="${a}: ${b}"><rect x="30" y="${y-30}" width="300" height="50" rx="10" fill="${[C.paper,C.yel,C.paper][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(180,y,b,{fs:15,w:700})}</g>`).join('')}`,'ثلاثة قوالب للوحدة 7'),
   cap:'قوالب الوحدة 7. مرّر المؤشر على كل قالب.',
   side:[{tip:'صف المنشأة: <b>الأبعاد</b> (How + صفة)، و<b>الكميات</b> (How many/much)، و<b>المستقبل</b> إن لم تُبنَ بعد (will).'}],
   body:[{widget:(el,B)=>N.cases(el,B,{cases:[{q:"___ concrete will they need?",opts:[['How much',1,''],['How many',0,'concrete غير معدود.'],['How long',0,'']]},{q:"The tunnel will ___ 40 km long.",opts:[['be',1,''],['is',0,'بعد will: be.'],['being',0,'']]}]}),title:'مختبر مصغّر'}]},
  {st:2,short:'الوحدة 8',title:'خلاصة الوحدة 8: الإبلاغ',q:'متى تقول has broken ومتى broke ومتى is broken؟',ref:'ص 66–67',
   art:art(`${[['المضارع التام','It has broken down.',70],['الماضي البسيط','It broke down yesterday.',140],['النتيجة','It is broken.',210]].map(([a,b,y],i)=>`<g data-tip="${a}: ${b}"><rect x="30" y="${y-30}" width="300" height="50" rx="10" fill="${[C.paper,C.yel,C.paper][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(180,y,b,{fs:15,w:700})}</g>`).join('')}`,'ثلاثة قوالب للوحدة 8'),
   cap:'قوالب الوحدة 8. مرّر المؤشر على كل قالب.',
   side:[{tip:'<b>has broken</b>: حدث قريب بلا وقت. <b>broke</b>: مع وقت محدد. <b>is broken</b>: حالة الشيء الآن.'}],
   body:[{widget:(el,B)=>N.cases(el,B,{cases:[{q:"The engine ___ yesterday.",opts:[['stopped',1,''],['has stopped',0,'مع yesterday: الماضي.'],['is stopped',0,'']]},{q:"Look! The mirror ___.",opts:[['is cracked',1,'حالة الآن.'],['cracked yesterday',0,''],['crack',0,'']]}]}),title:'مختبر مصغّر'}]},
  {recap:['How + صفة للأبعاد، والاسم بعد The … of.','How many للمعدود و How much لغير المعدود.',"will / won't للمستقبل.",'المضارع التام بلا وقت، والماضي البسيط مع وقت محدد.','الفعل: I have dented it. النتيجة: It is dented.']}
 ],
 lab:labD,
 examples:[
  {title:'مثال 1: من جدول إلى حوار (تمرين 7)',ref:'ص 65',q:`<p>بند البطاقة: ${e('Width: 8 m')}. كوّن السؤال والجواب عن نفق لم يُبنَ بعد.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: النفق مستقبلي، فنستعمل will.'},{t:`الخطوة 2: السؤال ${e('How wide will it be?')}`},{t:`الخطوة 3: الجواب ${e("It'll be 8 m wide.")}`,final:true}]},
  {title:'مثال 2: من الماضي إلى المضارع التام (تمرين 9)',ref:'ص 66',q:`<p>${e('The pump stopped an hour ago.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: نحذف تعبير الوقت ${e('an hour ago')}.`},{t:`الخطوة 2: ${e('has')} + التصريف الثالث ${e('stopped')}.`},{t:`الخطوة 3: ${e('The pump has stopped.')}`,final:true}]}
 ],
 quiz:[
  {q:'The noun of wide:',o:['wideness','width','widely','wides'],c:1,e:'wide → width.'},
  {q:'How ___ is the river? It\'s 12 m deep.',o:['depth','deep','long','high'],c:1,e:'How + الصفة deep.'},
  {q:'___ screws are you buying?',o:['How much','How many','How long','What many'],c:1,e:'screws معدودة.'},
  {q:'They ___ the bridge in 2004.',o:['have completed','completed','will complete','complete'],c:1,e:'مع 2004: الماضي البسيط.'},
  {q:'The windows ___.',o:['is broken','are broken','has broken','broke now'],c:1,e:'جمع: are + broken.'},
  {q:"Has NASA put men on Mars? (the Moon)",o:["No, it hasn't. It has put men on the Moon.","No, it didn't. It put men on the Moon.","Yes, it has.","No, it hasn't. It puts men on the Moon."],c:0,e:'السؤال بالمضارع التام فالجواب به.'}
 ]
});
})(PLCBOOK);

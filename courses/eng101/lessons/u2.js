/* الوحدة 2 — Parts (1): 2.1 Naming (ص 10–11) · 2.2 Assembling (ص 12–13) · 2.3 Ordering (ص 14–15) · Review A (ص 16–19)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 2.1 Naming ========== */
const SK=[['nose','مقدمة اللوح'],['tail','مؤخرة اللوح'],['deck','سطح اللوح (الخشبة)'],['truck','الحامل المعدني للعجلات'],['axle','المحور'],['wheel','العجلة'],['plate','القاعدة المثبتة تحت السطح']];
const skateArt=()=>art(`
 <g data-tip="deck — سطح اللوح: الخشبة التي يقف عليها اللاعب."><rect x="40" y="110" width="280" height="30" rx="15" fill="${C.blue}" stroke="${C.ink}" stroke-width="2.5"/></g>
 <g data-tip="nose — المقدمة: الطرف الأمامي للوح."><path d="M300 110 q28 0 28 15 q0 15 -28 15z" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(318,100,'nose',{fs:12,w:700})}</g>
 <g data-tip="tail — المؤخرة: الطرف الخلفي للوح."><path d="M60 110 q-28 0 -28 15 q0 15 28 15z" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(42,100,'tail',{fs:12,w:700})}</g>
 ${[100,260].map(x=>`<g data-tip="plate — القاعدة: قطعة معدنية مثبتة تحت السطح بأربعة براغي."><rect x="${x-24}" y="140" width="48" height="10" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/></g>
 <g data-tip="truck — الحامل: القطعة المعدنية التي تحمل المحور والعجلات."><path d="M${x-14} 150 l28 0 l-6 24 l-16 0z" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/></g>
 <g data-tip="axle — المحور: القضيب الذي تدور عليه العجلات."><rect x="${x-40}" y="172" width="80" height="8" fill="${C.ink}"/></g>
 ${[x-44,x+44].map(w=>`<g data-tip="wheel — العجلة."><circle cx="${w}" cy="176" r="16" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/></g>`).join('')}`).join('')}
 ${TL(180,128,'deck',{fs:13,w:700,c:'#fff'})}${TL(100,226,'truck · axle · wheels',{fs:12,w:700})}${TL(260,226,'plate',{fs:12,w:700})}`,'أجزاء لوح التزلج');
const DEM=[['this','هذا (قريب)','مفرد'],['that','ذلك (بعيد)','مفرد'],['these','هؤلاء / هذه (قريبة)','جمع'],['those','أولئك / تلك (بعيدة)','جمع']];
function lab21(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">ما اسم هذا؟</h3><p class="sub">مبني على «Language» ص 11. اختر الشيء، وهل هو قريب أم بعيد، وواحد أم أكثر، وشاهد السؤال والجواب.</p>
  <div class="ph-row"><select class="ph-sel" id="it">${[['screw','screws'],['nut','nuts'],['wheel','wheels'],['axle','axles'],['antenna','antennas'],['spanner','spanners']].map((x,i)=>`<option value="${i}">${x[0]}</option>`).join('')}</select>
  <select class="ph-sel" id="nr"><option value="0">قريب</option><option value="1">بعيد</option></select><select class="ph-sel" id="pl"><option value="0">واحد</option><option value="1">أكثر من واحد</option></select></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">أجزاء اللوح</h3><p class="sub">اضغط اسم الجزء لترى معناه ومكانه.</p><div class="ph-row" id="pp">${SK.map((p,i)=>`<button type="button" class="btn${i?'':' pri'}" data-p="${i}">${p[0]}</button>`).join('')}</div><div id="po"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر <span class="en">antenna</span> «بعيد» و«أكثر من واحد»: لماذا صار السؤال <span class="en">What are those called?</span></li><li>متى تقول <span class="en">a</span> ومتى <span class="en">an</span>؟ جرّب <span class="en">axle</span> و <span class="en">wheel</span>.</li><li>أشر إلى أشياء في الصف واسأل زميلك بنفس القالب.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const IT=[['screw','screws'],['nut','nuts'],['wheel','wheels'],['axle','axles'],['antenna','antennas'],['spanner','spanners']];
 const show=()=>{const x=IT[+$('#it').value],far=$('#nr').value==='1',pl=$('#pl').value==='1';
  const dem=pl?(far?'those':'these'):(far?'that':'this'),art1=/^[aeiou]/.test(x[0])?'an':'a';
  $('#o').innerHTML=`<div class="pk-facts"><div class="hi"><span>الإشارة</span><b>${dem}</b></div><div><span>الفعل</span><b>${pl?'are':'is'}</b></div></div>${eb(pl?[`What are ${dem} called?`,`They're called ${x[1]}.`]:[`What's ${dem} called?`,`It's called ${art1} ${x[0]}.`])}`};
 ['it','nr','pl'].forEach(k=>$('#'+k).addEventListener('input',show));show();
 const ps=i=>{el.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('pri',+b.dataset.p===i));$('#po').innerHTML=`<p style="margin:8px 0"><b>${SK[i][1]}</b></p>${eb(`It's called ${/^[aeiou]/.test(SK[i][0])?'an':'a'} ${SK[i][0]}.`)}`};
 el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>ps(+b.dataset.p));ps(0);
}
/* ===== مختبرات «شرح القاعدة» الوحدة 2 ===== */
const OB2={spanner:['spanner','spanners','مفتاح ربط'],washer:['washer','washers','حلقة'],axle:['axle','axles','محور'],nut:['nut','nuts','صامولة'],adapter:['adapter','adapters','محوّل']};
const an2=w=>/^[aeiou]/.test(w)?'an':'a';
const LAB21A={title:"What's this called?",w:(el,B)=>N.labB(el,B,{intro:'اختر الشيء، وهل هو واحد أم أكثر، وشاهد السؤال والجواب.',
 controls:[{k:'o',label:'الشيء',opts:Object.keys(OB2).map(k=>[k,OB2[k][2]])},{k:'n',label:'العدد',opts:[['1','واحد'],['2','أكثر من واحد']]}],
 out:({o,n})=>{const [s,p]=OB2[o];return n==='1'?{pieces:[["What's this called?",'q','سؤال المفرد'],["It's called",'x',''],[an2(s),'k',an2(s)==='an'?'صوت متحرك':'صوت ساكن'],[s+'.','n','مفرد']],say:`What's this called? It's called ${an2(s)} ${s}.`,why:"مع المفرد: What's … called? والجواب It's called a / an."}
  :{pieces:[['What are these called?','q','سؤال الجمع'],["They're called",'x',''],[p+'.','n','جمع بلا a']],say:`What are these called? They're called ${p}.`,why:"مع الجمع: What are … called? والجواب They're called … بلا a."}}})};
const dem2=(near,many)=>{const x=near?70:250,o=[];const n=many?3:1;for(let i=0;i<n;i++)o.push(`<circle cx="${x+i*22}" cy="${88-i%2*6}" r="9" fill="#c9a23a" stroke="#6b4f12" stroke-width="2"/><circle cx="${x+i*22}" cy="${88-i%2*6}" r="3.5" fill="#fff"/>`);
 return `<svg viewBox="0 0 320 120" width="320"><circle cx="30" cy="30" r="12" fill="#f2d3b1" stroke="#555"/><path d="M30 42v40M30 82l-10 28M30 82l10 28" stroke="#555" stroke-width="4" fill="none"/><path d="M30 55 L${x-14} 80" stroke="#555" stroke-width="4"/>${o.join('')}<text x="${near?100:170}" y="20" font-size="13" fill="#666">${near?'قريب':'بعيد'}</text></svg>`};
const LAB21B={title:'this / that / these / those',w:(el,B)=>N.labB(el,B,{intro:'اختر المسافة والعدد، وشاهد الكلمة المناسبة.',
 controls:[{k:'d',label:'المسافة',opts:[['near','قريب'],['far','بعيد']]},{k:'n',label:'العدد',opts:[['1','واحد'],['2','أكثر']]}],
 out:({d,n})=>{const near=d==='near',one=n==='1',w=one?(near?'this':'that'):(near?'these':'those');
  return{svg:dem2(near,!one),pieces:[[one?"What's":'What are','x',''],[w,'k',(near?'قريب':'بعيد')+' · '+(one?'مفرد':'جمع')],['called?','x','']],say:`${one?"What's":'What are'} ${w} called?`,why:`${e('this')} و ${e('that')} للمفرد، و ${e('these')} و ${e('those')} للجمع. ${e('this')} و ${e('these')} للقريب، و ${e('that')} و ${e('those')} للبعيد.`}}})};
const IT22={washer:['washer','washers'],nut:['nut','nuts'],axle:['axle','axles'],bolt:['bolt','bolts']};
const LAB22A={title:'a أم some أم عدد؟',w:(el,B)=>N.labB(el,B,{intro:'اختر القطعة والكمية، وشاهد الطلب في المحل.',
 controls:[{k:'i',label:'القطعة',opts:Object.keys(IT22).map(k=>[k,k])},{k:'q',label:'الكمية',opts:[['a','واحدة'],['some','بعض (عدد غير محدد)'],['20','عدد محدد (20)']]}],
 out:({i,q})=>{const [s,p]=IT22[i];if(q==='a')return{pieces:[['I need','x',''],[an2(s),'k','لواحد'],[s,'n','مفرد'],['please.','x','']],say:`I need ${an2(s)} ${s}, please.`,why:`لشيء واحد: ${an2(s)} + الاسم المفرد.`};
  if(q==='some')return{pieces:[['I need','x',''],['some','k','عدد غير محدد'],[p,'n','جمع'],['please.','x','']],say:`I need some ${p}, please.`,ar:'والبائع يسأل: How many? كم العدد؟',why:'لأكثر من واحد دون ذكر العدد: some + الاسم بالجمع.'};
  return{pieces:[['I need','x',''],['twenty','k','عدد محدد'],[p,'n','جمع'],['please.','x','']],say:`I need twenty ${p}, please.`,why:'إذا عرفنا العدد نذكره، والاسم بعده جمع.'}}})};
const V22={put:['Put',true],take:['Take',true],tighten:['Tighten',false],loosen:['Loosen',false]};
const LAB22B={title:'ابنِ التعليمة',w:(el,B)=>N.labB(el,B,{intro:'ابنِ تعليمة تركيب: الفعل ثم الشيء ثم المكان (إن احتاج).',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(V22).map(k=>[k,V22[k][0]])},{k:'o',label:'الشيء',opts:[['the nut','the nut'],['the wheel','the wheel']]},{k:'l',label:'المكان',opts:[['','بلا مكان'],['on','on the axle'],['off','off the axle']]}],
 out:({v,o,l})=>{const [V,needs]=V22[v];const loc=l?(l+' the axle'):'';let bad='';
  if(v==='put'&&l!=='on')bad=l?`${e('put')} تأتي مع ${e('on')}: ${e('Put … on the axle.')}`:`${e('put')} تحتاج مكاناً: أين تضعه؟`;
  else if(v==='take'&&l!=='off')bad=l?`${e('take')} تأتي مع ${e('off')}: ${e('Take … off the axle.')}`:`${e('take')} تحتاج مكاناً: من أين تنزعه؟`;
  else if(!needs&&l)bad=`${e(V)} لا تحتاج مكاناً عادة: ${e(V+' '+o+'.')}`;
  const pieces=[[V,'k','الفعل'],[o,'n','الشيء']];if(loc)pieces.push([loc,'q','المكان']);
  return{pieces,say:`${V} ${o}${loc?' '+loc:''}.`,bad,why:`التعليمة: فعل + شيء + مكان. وبعض الأفعال مثل ${e('tighten')} لا تحتاج مكاناً.`}}})};
const OP22={put:['put on','take off','يضع','ينزع','Put the wheel on.','Take the wheel off.'],tighten:['tighten','loosen','يشدّ','يرخي','Tighten the nut.','Loosen the nut.'],push:['push','pull','يدفع','يسحب','Push the door.','Pull the door.']};
const LAB22C={title:'الفعل وضده',w:(el,B)=>N.labB(el,B,{intro:'اختر الفعل، ثم اقلبه إلى ضده.',
 controls:[{k:'v',label:'الفعل',opts:Object.keys(OP22).map(k=>[k,OP22[k][0]])},{k:'f',label:'',opts:[['a','الفعل'],['b','ضده']]}],
 out:({v,f})=>{const o=OP22[v],a=f==='a';return{pieces:[[a?o[4]:o[5],a?'n':'q',a?o[2]:o[3]]],say:a?o[4]:o[5],why:`${e(o[0])} ${o[2]}، وضده ${e(o[1])} ${o[3]}.`}}})};
const NM23={nawaf:['Neil Shaw','S-H-A-W','Delta Tools','00966 50 311 7788'],badr:['Ben Harris','H-A-R-R-I-S','Star Parts','00966 55 420 1199']};
const LAB23A={title:'رسالة صوتية',w:(el,B)=>N.labB(el,B,{intro:'اختر المتصل، ثم اختر السطر لترى ترتيب الرسالة الصوتية.',
 controls:[{k:'p',label:'المتصل',opts:[['nawaf','نيل'],['badr','بن']]},{k:'s',label:'السطر',opts:[['1','1 من أنت'],['2','2 التهجئة'],['3','3 الشركة والرقم'],['4','4 الختام']]}],
 out:({p,s})=>{const [n,sp,c,ph]=NM23[p];const L={1:[['Hello. This is','k','في الهاتف: This is'],[n+'.','n','الاسم']],2:[["That's",'x',''],[sp+'.','q','حرفاً حرفاً']],3:[["I'm from",'x',''],[c+'.','n','الشركة'],['My phone number is','x',''],[ph+'.','q','00 = double oh']],4:[['Please call me back.','k','الختام'],['Thanks.','x','']]}[s];
  return{pieces:L,say:L.map(x=>x[0]).join(' '),why:"في الهاتف نبدأ بـ This is … لا I'm …، ونتهجى الاسم، ونذكر الرقم، ونختم بـ Please call me back."}}})};
const Q23={colour:['What colour?','Black.','اللون'],size:['What size?','Large.','المقاس'],many:['How many?','Two, please.','العدد'],name:["What's your name, please?","It's Henry. H-E-N-R-Y.",'الاسم'],phone:["What's your phone number?",'0556 33 21 08.','الرقم']};
const LAB23B={title:'أسئلة الطلب بالهاتف',w:(el,B)=>N.labB(el,B,{intro:'اختر ما يريد البائع أن يعرفه، وشاهد السؤال وجواباً مناسباً.',
 controls:[{k:'q',label:'يريد أن يعرف',opts:Object.keys(Q23).map(k=>[k,Q23[k][2]])}],
 out:({q})=>{const [a,b,t]=Q23[q];return{pieces:[[a,'q','البائع'],[b,'n','الزبون']],say:`${a} ${b}`,why:`للسؤال عن ${t} نقول ${e(a)}`}}})};
const PP23={saud:['Stuart','He','student'],hind:['Hannah','She','engineer'],omar:['Oliver','He','technician']};
const LAB23C={title:'عرّف شخصاً آخر',w:(el,B)=>N.labB(el,B,{intro:'اختر الشخص، وشاهد كيف تعرّفه لغيرك.',
 controls:[{k:'p',label:'الشخص',opts:Object.keys(PP23).map(k=>[k,PP23[k][0]])}],
 out:({p})=>{const [n,h,j]=PP23[p];return{pieces:[['This is','k','لتعريف شخص'],[n+'.','n','الاسم'],[h+"'s",'x',h==='He'?'هو':'هي'],[an2(j)+' '+j+',','q','المهنة'],['too.','x','أيضاً']],say:`This is ${n}. ${h}'s ${an2(j)} ${j}, too.`,why:`نعرّف غيرنا بـ This is …، ثم He's أو She's. و too في الآخر تعني «أيضاً».`}}})};
const R21=N.rule({title:'أسماء الأشياء، و What\'s this called?، وأسماء الإشارة',ref:'ص 10–11',
 intro:`في الورشة كثيراً ما ترى قطعة لا تعرف اسمها بالإنجليزي. في هذا الدرس تتعلم أسماء أجزاء لوح التزلج، ثم كيف تسأل عن اسم أي شيء، ثم الفرق بين ${e('this')} و ${e('that')} و ${e('these')} و ${e('those')}.`,
 parts:[
 {t:'أجزاء لوح التزلج',short:'الأجزاء',old:[1],q:'ما اسم الجزء الذي تُركّب عليه العجلات؟',ref:'ص 10',
  lead:`نبدأ بالكلمات التي سنستعملها في الأسئلة: أجزاء لوح التزلج.`,
  points:[`كل جزء له اسم، ونذكره عادة مع ${e('the')}: ${e('the deck · the wheel · the axle')}`,`العجلة ${e('wheel')} تُركّب على المحور ${e('axle')}، والمحور جزء من الحامل ${e('truck')}.`],
  html:vt(SK,['English','المعنى']),labs:[{title:'ما الجزء؟',w:(el,B)=>N.cases(el,B,{intro:'ما الجزء؟',cases:[{q:'The wheels turn on it.',opts:[['axle',1],['deck',0],['nose',0]]},{q:'You stand on it.',opts:[['deck',1],['truck',0],['plate',0]]},{q:'The back end of the board.',opts:[['tail',1],['nose',0]]}]})}]},
 {t:"السؤال عن اسم الشيء",short:"What's this called?",old:[2],q:"ما الفرق بين What's this? و What's this called?",ref:'ص 11',
  lead:`عندما ترى شيئاً ولا تعرف اسمه الإنجليزي تحتاج سؤالاً ثابتاً. والسؤال والجواب يختلفان قليلاً بين المفرد والجمع.`,
  points:[`<b>${e("What's this called?")}</b> نسأل بها عندما نعرف الشيء ولا نعرف اسمه الإنجليزي. ونضيف ${e('in English')} للتوضيح.`,`<b>${e("What's this?")}</b> نسأل بها عندما لا نعرف ما هو الشيء أصلاً.`,
   `<b>المفرد:</b> ${e("What's this called? — It's called a spanner.")} وبعد ${e("It's called")} نضع ${e('a')} أو ${e('an')}.`,`<b>الجمع:</b> ${e("What are these called? — They're called washers.")} وبعد ${e("They're called")} لا نضع ${e('a')}.`],
  grid:{head:['','السؤال','الجواب'],rows:[['مفرد',"What's this called?","It's called a spanner."],['جمع','What are these called?',"They're called washers."]]},
  pairs:[["They're called a washers.","They're called washers.",'مع الجمع لا نضع a.'],["What's these called?",'What are these called?','these جمع، فنقول What are.']],
  art:art(`<g data-tip="What's this called? — تعرف الشيء لكن لا تعرف اسمه بالإنجليزي."><rect x="30" y="70" width="300" height="58" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,104,"What's this called?",{fs:17,w:700})}</g>
    <g data-tip="It's called a spanner. — الجواب للمفرد."><rect x="30" y="170" width="300" height="58" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,204,"It's called a spanner.",{fs:17,w:700})}</g>`,'سؤال الاسم وجوابه'),cap:'السؤال وجوابه. مرّر المؤشر على كل منهما.',labs:[LAB21A,{title:'أكمل السؤال',w:(el,B)=>N.gaps(el,B,{intro:'أكمل (أمثلة من عندنا):',items:[{s:"What's this ___ in English?",o:['called','call'],a:0},{s:"It's called ___ axle.",o:['an','a'],a:0,why:'axle تبدأ بصوت متحرك.'},{s:"What are these called? — They're called ___.",o:['washers','a washers'],a:0,why:'لا أداة مع الجمع.'}]})}]},
 {t:'this / that / these / those',short:'أسماء الإشارة',old:[3],q:'أيهما للقريب: this أم that؟',ref:'ص 11',
  lead:`عندما نشير إلى شيء نختار الكلمة حسب أمرين: هل هو قريب أم بعيد؟ وهل هو واحد أم أكثر؟`,
  points:[`<b>${e('this')}</b> لشيء واحد قريب، و <b>${e('that')}</b> لشيء واحد بعيد.`,`<b>${e('these')}</b> لأشياء قريبة، و <b>${e('those')}</b> لأشياء بعيدة.`],
  grid:{head:['','قريب','بعيد'],rows:[['مفرد','this','that'],['جمع','these','those']]},
  html:vt([['nails','مسامير (تُدق بالمطرقة)'],['bolts','مسامير ملولبة (براغي بصامولة)'],['nuts','صواميل'],['washers','حلقات'],['staples','دبابيس (مشابك على شكل U)'],['screws','براغي'],['spanner','مفتاح ربط'],['screwdriver','مفك']],['English','المعنى']),
  pairs:[['What are this called?','What are these called?','للجمع القريب: these.']],
  art:art(`${DEM.map((d,i)=>`<g data-tip="${d[0]}: ${d[1]} — ${d[2]}"><rect x="${i%2?190:30}" y="${70+Math.floor(i/2)*100}" width="140" height="70" rx="14" fill="${i<2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(i%2?260:100,112+Math.floor(i/2)*100,d[0],{fs:22,w:700})}</g>`).join('')}${TL(100,56,'near',{fs:12,c:C.blue,w:700})}${TL(260,56,'far',{fs:12,c:C.red,w:700})}`,'this that these those'),cap:'العمود الأيمن للقريب والأيسر للبعيد، والصف الثاني للجمع.',labs:[LAB21B,{title:'الإشارة',w:(el,B)=>N.cases(el,B,{intro:'اختر الكلمة:',cases:[{q:'nuts — far',opts:[['those',1],['these',0],['that',0]]},{q:'a screw — near',opts:[['this',1],['that',0]]},{q:'bolts — near',opts:[['these',1],['those',0]]}]})}]}
 ]});
B.lesson({
 id:'u2-l1',unit:2,order:1,pages:'10–11',
 title:'Naming — التسمية',
 summary:'أجزاء لوح التزلج (deck، truck، axle، wheel…)، والسؤال عن اسم الشيء بـ What\'s this called (in English)? وأسماء الإشارة this و that و these و those، والجواب It\'s called… / They\'re called…، ومثبتات مثل nails و staples.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 10–11',html:`<p>في الورشة تحتاج أن تسأل عن اسم قطعة لا تعرفها. ستتعلم:</p><ol><li>أسماء أجزاء لوح التزلج.</li><li>السؤال ${e("What's this called?")} والجواب ${e("It's called…")}.</li><li>الفرق بين ${e('this, that, these, those')}.</li><li>أسماء مثبتات وأدوات جديدة.</li></ol>`},
  ...R21.theory,
  {h:'تمارين الكتاب',ref:'ص 10–11',html:
   bk(1,'ص 10','استمع وأكمل جدول أرقام التزلج القياسية.',['High jump: 7.1 metres · 19/06/03','Long jump: 24 metres · 08/08/04'])+
   bk(2,'ص 10','مع زميلك: سمِّ أجزاء الرسم بكلمات الصندوق.',['1 tail','2 truck','3 deck','4 nose','5 wheel','6 axle','7 plate'])+
   bk(3,'ص 10','استمع وتحقق من إجاباتك في التمرين 2.',null)+
   bk(4,'ص 10','استمع وأكمل الحوار.',['called','called','this','a'])+
   bk(5,'ص 10','مع زميلك: اسأل وأجب عن كل أجزاء الرسم.',null)+
   bk(6,'ص 11','أكمل الحوارات بكلمات الصندوق.',['this · It\'s','that · It\'s','these · They\'re','those · They\'re'])+
   bk(7,'ص 11','استمع وكرّر الكلمات.',null)+
   bk(8,'ص 11','طابق كلمات التمرين 7 مع الصور.',['1 screws','2 nuts','3 bolts','4 nails','5 washers','6 staples','7 spanner','8 screwdriver'],'الترتيب من قراءتنا للصور.')+
   bk(9,'ص 11','مع زميلك: اسأل وأجب عن الأدوات والمثبتات.',null)+
   bk(10,'ص 11','أشر إلى أشياء في الصف أو خارجه، واسأل وأجب.',null)+
   bk(11,'ص 11','في مجموعات: ما هذه المركبات؟',['1 racing car','2 rocket','3 mountain bike','4 plane','5 motorbike','6 boat'],'الإجابات من ص 113 في الكتاب.')},
  {h:'الاستماع',ref:'ص 10–11',html:au(12,'ص 10 — التمرين 1','أرقام قياسية في التزلج.')+au(13,'ص 10 — التمرين 3','أسماء أجزاء اللوح.')+au(14,'ص 10 — التمرين 4','حوار عن أسماء الأجزاء.')+au(15,'ص 11 — التمرين 7','كلمات المثبتات والأدوات.')}
 ],
 stations:[
  {intro:true},
  ...R21.stations,
  {recap:['أجزاء اللوح: nose, tail, deck, truck, axle, wheel, plate.',"What's this called (in English)? — It's called a/an …",'What are these called? — They\'re called … (بلا a).','this/that للمفرد، these/those للجمع؛ this/these قريب، that/those بعيد.']}
 ],
 lab:lab21,
 examples:[
  {title:'مثال 1: سؤال عن اسم قطعة',ref:'ص 11',q:`<p>في يدك قطعة لا تعرف اسمها بالإنجليزي، وهي صامولة (nut). كوّن السؤال والجواب.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: القطعة قريبة ومفردة: ${e('this')}.`},{t:`الخطوة 2: السؤال: ${e("What's this called in English?")}`},{t:`الخطوة 3: الجواب: ${e("It's called a nut.")}`,final:true}]},
  {title:'مثال 2: جمع بعيد',ref:'ص 11',q:`<p>تشير إلى هوائيات على سطح مبنى بعيد. اسأل عن اسمها وأجب.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: جمع بعيد: ${e('those')}.`},{t:`الخطوة 2: السؤال مع الجمع are: ${e('What are those called?')}`},{t:`الخطوة 3: الجواب بلا أداة: ${e("They're called antennas.")}`,final:true}]},
  {title:'مثال 3: a أم an',ref:'ص 11',q:`<p>أجب عن ${e("What's this called?")} والقطعة axle.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: axle تبدأ بصوت متحرك a.'},{t:`الخطوة 2: نستعمل ${e('an')}.`},{t:`الخطوة 3: ${e("It's called an axle.")}`,final:true}]}
 ],
 quiz:[
  {q:'الجزء الذي تدور عليه العجلات:',o:['axle','deck','nose','tail'],c:0,e:'axle = المحور.'},
  {q:"What are ___ called? (قريبة، جمع)",o:['this','that','these','those'],c:2,e:'جمع قريب these.'},
  {q:"They're called ___.",o:['a bolts','bolts','an bolts','bolt'],c:1,e:'لا أداة مع الجمع.'},
  {q:"What's ___ called? (بعيد، مفرد)",o:['this','that','these','those'],c:1,e:'مفرد بعيد that.'},
  {q:"It's called ___ antenna.",o:['a','an','the','—'],c:1,e:'قبل الصوت المتحرك an.'},
  {q:'staples:',o:['دبابيس','صواميل','حلقات','مسامير'],c:0,e:'staples = دبابيس.'}
 ]
});

/* ========== 2.2 Assembling ========== */
const STEPS=[['Put','the plate','on the four bolts'],['Put','the nuts','on the bolts'],['Tighten','the nuts',''],['Put','the axle','on the large bolt'],['Put','the large nut','on the large bolt'],['Tighten','the nut',''],['Put','the wheels','on the axle'],['Put','the nuts','on the axle'],['Tighten','the nuts','']];
const OPV=[['put on','take off','يضع ≠ ينزع'],['tighten','loosen','يشدّ ≠ يرخي'],['push','pull','يدفع ≠ يسحب']];
const opArt=()=>art(`
 <g data-tip="tighten — يشدّ: ندير المفتاح مع عقارب الساعة."><circle cx="100" cy="110" r="40" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/><polygon points="86,96 100,88 114,96 114,124 100,132 86,124" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/><path d="M60 80 A50 50 0 0 1 140 80" fill="none" stroke="${C.grn}" stroke-width="4" marker-end=""/>${arrowS(132,72,144,90,C.grn,4,10)}${TL(100,176,'tighten',{fs:14,w:700,c:C.grn})}</g>
 <g data-tip="loosen — يرخي: ندير المفتاح عكس عقارب الساعة."><circle cx="260" cy="110" r="40" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/><polygon points="246,96 260,88 274,96 274,124 260,132 246,124" fill="${C.mut}" stroke="${C.ink}" stroke-width="2"/><path d="M300 80 A50 50 0 0 0 220 80" fill="none" stroke="${C.red}" stroke-width="4"/>${arrowS(228,72,216,90,C.red,4,10)}${TL(260,176,'loosen',{fs:14,w:700,c:C.red})}</g>
 <g data-tip="push — يدفع (بعيداً عنك)">${arrowS(60,240,150,240,C.blue,5,14)}${TL(105,226,'push',{fs:14,w:700,c:C.blue})}</g>
 <g data-tip="pull — يسحب (نحوك)">${arrowS(300,240,210,240,C.red,5,14)}${TL(255,226,'pull',{fs:14,w:700,c:C.red})}</g>`,'tighten loosen push pull');
function lab22(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">كوّن تعليمة تركيب</h3><p class="sub">مبني على التمرين 6 ص 13: فعل + شيء + مكان.</p>
  <div class="ph-row"><select class="ph-sel" id="v">${['Put','Take','Tighten','Loosen','Push','Pull'].map(v=>`<option>${v}</option>`).join('')}</select>
  <select class="ph-sel" id="ob">${['the wheel','the nut','the bolts','the plate','the lever','the axle'].map(v=>`<option>${v}</option>`).join('')}</select>
  <select class="ph-sel" id="lo">${['—','on the axle','off the axle','on the bolt','off the bolt','on the four bolts'].map(v=>`<option>${v}</option>`).join('')}</select></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">في المحل: كم وأي مقاس؟</h3><p class="sub">مبني على التمرين 3 ص 12.</p>
  <div class="ph-row"><select class="ph-sel" id="sh">${['bolts','washers','screws','nuts','nails'].map(v=>`<option>${v}</option>`).join('')}</select><input class="ph-num" id="sz" value="10" type="number" style="width:5em" aria-label="المقاس mm"><input class="ph-num" id="qt" value="50" type="number" style="width:5em" aria-label="العدد"></div><div id="so"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>كوّن تعليمة بـ <span class="en">Tighten</span> وبلا مكان: لماذا لا نحتاج المكان؟</li><li>اختر <span class="en">Take</span> مع <span class="en">on the axle</span>: هل المعنى سليم؟ ماذا يناسب <span class="en">Take</span>؟</li><li>غيّر المقاس إلى 7 واقرأ الحوار بصوت عالٍ مع زميلك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const v=$('#v').value,o=$('#ob').value,l=$('#lo').value;let warn='';
  if(v==='Take'&&/^on/.test(l))warn='الفعل Take يأتي مع off: Take … off …';if(v==='Put'&&/^off/.test(l))warn='الفعل Put يأتي مع on: Put … on …';if(/Tighten|Loosen|Push|Pull/.test(v)&&l!=='—')warn='هذا الفعل لا يحتاج مكاناً غالباً.';
  if((v==='Put'||v==='Take')&&l==='—')warn='Put و Take يحتاجان مكاناً (on / off …).';
  $('#o').innerHTML=eb(`${v} ${o}${l==='—'?'':' '+l}.`)+(warn?`<p class="sub" style="color:var(--red)">${warn}</p>`:'<p class="sub">تعليمة سليمة.</p>')};
 ['v','ob','lo'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const shop=()=>{const it=$('#sh').value,s=+$('#sz').value,q=+$('#qt').value;$('#so').innerHTML=dl([['Customer',`I need some ${it}, please.`],['Shopkeeper','What size?'],['Customer',`${s} mm.`],['Shopkeeper','How many?'],['Customer',`${q}, please.`]])};
 ['sh','sz','qt'].forEach(k=>$('#'+k).addEventListener('input',shop));shop();
}
const R22=N.rule({title:'الطلب في المحل، والتعليمة، وأفعال التركيب',ref:'ص 12–13',
 intro:`في هذا الدرس تشتري قطعاً من المحل، ثم تقرأ تعليمات تركيب لوح التزلج. نشرح ذلك في ثلاث خطوات: كيف تطلب القطع بالعدد والمقاس، ثم كيف تُبنى التعليمة، ثم أفعال التركيب وأضدادها.`,
 parts:[
 {t:'الطلب في المحل: a و some و How many?',short:'a و some',old:[1],q:'متى نقول a washer ومتى some washers؟',ref:'ص 12',
  lead:`عندما تطلب قطعاً من المحل يسألك البائع عن المقاس والعدد. وقبل ذلك تحتاج أن تعرف كيف تذكر الشيء: واحد أم أكثر؟ وهل تعرف العدد؟`,
  points:[`<b>لشيء واحد</b> نستعمل ${e('a')} أو ${e('an')} مع الاسم المفرد: ${e('a washer · an axle')}`,`<b>لأكثر من واحد</b> نضيف ${e('s')} للاسم. وإذا لم نذكر العدد نضع ${e('some')} (بعض): ${e('some washers')}`,
   `<b>إذا عرفنا العدد</b> نذكره بدل ${e('some')}: ${e('twenty washers')}`,`<b>أسئلة البائع:</b> ${e('What size?')} (ما المقاس؟) و ${e('How many?')} (كم العدد؟)، والاسم بعد ${e('How many')} جمع.`,
   `نكتب ${e('8 mm')} ونقول ${e('eight millimetres')} أو باختصار ${e('eight mil')}. و ${e('M5')} مقاس برغي قطره 5 mm.`],
  grid:{head:['واحد','عدد غير محدد','عدد محدد'],rows:[['a washer','some washers','twenty washers'],['a nut','some nuts','six nuts'],['an axle','some axles','two axles']]},
  html:dl([['Customer','I need some washers, please.'],['Shopkeeper','What size?'],['Customer','8 mm.'],['Shopkeeper','How many?'],['Customer','Twenty, please.']]),
  pairs:[['I need a washers.','I need some washers.','washers جمع، فلا نضع a.'],['How many nut?','How many nuts?','بعد How many يكون الاسم جمعاً.']],
  art:art(`<g data-tip="What size? — سؤال عن المقاس، والجواب 7 mm أو M5."><rect x="30" y="70" width="140" height="60" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(100,106,'What size?',{fs:16,w:700})}</g>
    <g data-tip="How many? — سؤال عن العدد، والجواب Four, please."><rect x="190" y="70" width="140" height="60" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(260,106,'How many?',{fs:16,w:700})}</g>
    <g data-tip="8 mm = eight millimetres = eight mil"><rect x="80" y="180" width="200" height="56" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,214,'8 mm · M5',{fs:18,w:700})}</g>`,'What size How many'),cap:'سؤالا البائع والمقاسات. مرّر المؤشر على كل منها.',labs:[LAB22A,{title:'رتّب الحوار',w:(el,B)=>N.order(el,B,{intro:'رتّب الحوار:',steps:['I need some screws, please.','What size?','6 mm.','How many?','Thirty, please.']})}]},
 {t:'التعليمة: فعل + شيء + مكان',short:'بناء التعليمة',old:[2],q:'ما ترتيب كلمات التعليمة؟',ref:'ص 13',
  lead:`تعليمات التركيب في أي كتيّب لها ترتيب ثابت. إذا عرفته فهمت أي تعليمة بسرعة.`,
  points:[`<b>الفعل أولاً</b> بلا فاعل، ثم <b>الشيء</b>، ثم <b>المكان</b>: ${e('Put the plate on the four bolts.')}`,`<b>بعض الأفعال لا تحتاج مكاناً:</b> ${e('Tighten the nuts.')}`],
  grid:{head:['الفعل','الشيء','المكان'],rows:STEPS.slice(0,6).map(s=>[s[0],s[1],s[2]||'—'])},
  pairs:[['The plate put on the bolts.','Put the plate on the bolts.','التعليمة تبدأ بالفعل.']],
  labs:[LAB22B,{title:'رتّب الخطوات',w:(el,B)=>N.order(el,B,{intro:'رتّب خطوات تركيب العجلة (من عندنا):',steps:['Put the wheel on the axle.','Put the nut on the axle.','Tighten the nut.']})}]},
 {t:'أفعال التركيب وأضدادها',short:'الأضداد',old:[3],q:'ما ضد tighten؟',ref:'ص 13',
  lead:`كل عمل تركيب له عكس في الفك. لذلك نحفظ أفعال التركيب أزواجاً.`,
  points:[`${e('put on ≠ take off')} (يضع ≠ ينزع)`,`${e('tighten ≠ loosen')} (يشدّ ≠ يرخي)`,`${e('push ≠ pull')} (يدفع ≠ يسحب)`,`مع ${e('put')} نقول ${e('on')}، ومع ${e('take')} نقول ${e('off')}: ${e('Put the wheel on the axle. Take the wheel off the axle.')}`],
  labs:[LAB22C,{title:'اختر الفعل',w:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'___ the old tyre off the car.',o:['Take','Put'],a:0},{s:'The nut is too tight. ___ it.',o:['Loosen','Tighten'],a:0},{s:'___ the door to open it. (نحوك)',o:['Pull','Push'],a:0}]})}]}
 ]});
B.lesson({
 id:'u2-l2',unit:2,order:2,pages:'12–13',
 title:'Assembling — التركيب',
 summary:'طلب القطع في المحل (What size? How many?) وقراءة المقاسات (10 mm، M5)، وترتيب خطوات التركيب، والتعليمات بقالب فعل + شيء + مكان (Put the plate on the bolts)، والأفعال put on/take off و tighten/loosen و push/pull.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 12–13',html:`<p>${e('assemble')} = يركّب الأجزاء معاً. ستتعلم:</p><ol><li>طلب القطع في المحل بالمقاس والعدد.</li><li>ترتيب خطوات تركيب لوح تزلج.</li><li>كتابة التعليمات بقالب: فعل + شيء + مكان.</li><li>أفعال التركيب وأضدادها.</li></ol>`},
  ...R22.theory,
  {h:'تمارين الكتاب',ref:'ص 12–13',html:
   bk(1,'ص 12','مع زميلك: تريد تركيب لوح تزلج. ماذا تحتاج من كلمات التمرين 7 ص 11؟',null)+
   bk(2,'ص 12','استمع وأكمل قائمة المشتريات.',['spanner: 10 mm · 1','nuts: 7 mm · 4','bolts: M5 · 8'])+
   bk(3,'ص 12','مع زميلك: كوّن حوارات بين زبون وبائع (قطعة / مقاس / عدد).',null)+
   bk(4,'ص 12','رتّب رسوم تركيب اللوح A–F.',['F → D → E → B → C → A'],'الترتيب حسب دليل التعليمات في التمرين 5، وقراءتنا للرسوم.')+
   bk(5,'ص 13','اقرأ دليل التعليمات وتحقق من إجاباتك في التمرين 4.',null)+
   bk(6,'ص 13','أكمل جدول الفعل والشيء والمكان من جمل التمرين 5.',STEPS.map((s,i)=>`${i+1} ${s[0]} · ${s[1]} · ${s[2]||'—'}`))+
   bk(7,'ص 13','استمع وكرّر الأفعال.',null)+
   bk(8,'ص 13','أكمل التعليمات الست بأفعال التمرين 7.',['1 Put','2 Take','3 Push','4 Pull','5 Tighten','6 Loosen'],'من قراءتنا لاتجاه الأسهم في الصور.')+
   bk(9,'ص 13','أكمل جدول الأضداد.',['(1) take (off)','(2) loosen','(3) pull'])},
  {h:'الاستماع',ref:'ص 12–13',html:au(16,'ص 12 — التمرين 2','زبون في محل قطع.')+au(17,'ص 13 — التمرين 7','أفعال التركيب.')}
 ],
 stations:[
  {intro:true},
  ...R22.stations,
  {recap:['لشيء واحد a / an، ولأكثر some + جمع، أو العدد + جمع.','في المحل: What size? How many? — والاسم بعد How many جمع.','10 mm = ten millimetres (ten mil)، و M5 مقاس البرغي.','التعليمة: فعل + شيء + مكان: Put the plate on the bolts.','put on ≠ take off، tighten ≠ loosen، push ≠ pull.']}
 ],
 lab:lab22,
 examples:[
  {title:'مثال 1: طلب قطع',ref:'ص 12',q:`<p>تحتاج 20 صامولة مقاسها 8 mm. اكتب الحوار مع البائع.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الطلب: ${e('I need some nuts, please.')}`},{t:`الخطوة 2: البائع يسأل ${e('What size?')} وتجيب ${e('8 mm.')}`},{t:`الخطوة 3: البائع يسأل ${e('How many?')} وتجيب ${e('Twenty, please.')}`,final:true}]},
  {title:'مثال 2: تعليمة كاملة',ref:'ص 13',q:`<p>اكتب تعليمة: ضع العجلات على المحور.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: الفعل: ${e('Put')}`},{t:`الخطوة 2: الشيء: ${e('the wheels')}`},{t:`الخطوة 3: المكان: ${e('Put the wheels on the axle.')}`,final:true}]},
  {title:'مثال 3: عكس التعليمة',ref:'ص 13',q:`<p>اعكس التعليمة ${e('Put the plate on the bolts.')}</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ضد ${e('put … on')} هو ${e('take … off')}.`},{t:'الخطوة 2: الشيء والمكان كما هما.'},{t:`الخطوة 3: ${e('Take the plate off the bolts.')}`,final:true}]}
 ],
 quiz:[
  {q:'ضد tighten:',o:['loosen','pull','take','put'],c:0,e:'tighten ≠ loosen.'},
  {q:'I need some bolts. — ___?',o:['What size','What colour','What time','Where'],c:0,e:'البائع يسأل عن المقاس.'},
  {q:'5 mm تُقرأ:',o:['five millimetres','five metres','fifty mil','five meters per'],c:0,e:'mm = millimetre.'},
  {q:'___ the wheel off the axle.',o:['Put','Take','Tighten','Push'],c:1,e:'off مع Take.'},
  {q:'ضد push:',o:['pull','put','press','lift'],c:0,e:'push ≠ pull.'},
  {q:'assemble معناها:',o:['يركّب','يفكّ','يشتري','يقيس'],c:0,e:'assemble = fit the parts together.'}
 ]
});

/* ========== 2.3 Ordering ========== */
function lab23(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">اترك رسالة هاتفية</h3><p class="sub">مبني على التمرين 4 ص 14. أكمل البيانات وشاهد الرسالة وطريقة تهجئتها وقراءة الرقم.</p>
  <div class="ph-row"><input class="ph-num" id="nm" value="Mark" style="width:7em;font-family:var(--font)" aria-label="الاسم"><input class="ph-num" id="co" value="Riverside" style="width:7em;font-family:var(--font)" aria-label="الشركة"><input class="ph-num" id="ph" value="00966 55 410 2233" style="width:12em" aria-label="الهاتف"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">اطلب بالهاتف</h3><p class="sub">مبني على التمرين 5 ص 15: اللون والمقاس والعدد.</p>
  <div class="ph-row"><select class="ph-sel" id="it">${['helmet','deck','pads'].map(v=>`<option>${v}</option>`).join('')}</select><select class="ph-sel" id="cl">${['red','blue','black','white','green'].map(v=>`<option>${v}</option>`).join('')}</select><select class="ph-sel" id="sz">${['small','medium','large'].map(v=>`<option>${v}</option>`).join('')}</select><input class="ph-num" id="q" type="number" value="2" min="1" style="width:4em" aria-label="العدد"></div><div id="oo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اكتب اسمك وشركة، واقرأ الرسالة كأنك تتركها في البريد الصوتي.</li><li>في رقم الهاتف: أين تقول <span class="en">double</span>؟</li><li>اطلب <span class="en">pads</span> بعدد 1: هل تتغير الجملة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const NUMW=['oh','one','two','three','four','five','six','seven','eight','nine'];
 const rd=p=>{const d=p.replace(/\D/g,'').split('');const out=[];for(let i=0;i<d.length;i++){if(d[i+1]===d[i]&&d[i+2]!==d[i]){out.push('double '+NUMW[+d[i]]);i++}else out.push(NUMW[+d[i]])}return out.join(' ')};
 const msg=()=>{const n=$('#nm').value.trim()||'Mark',c=$('#co').value.trim()||'Riverside',p=$('#ph').value;const spell=w=>w.toUpperCase().replace(/[^A-Z]/g,'').split('').join('-');
  $('#o').innerHTML=eb([`Hello. This is ${n}. That's ${spell(n)}.`,`I'm from ${c}. That's ${spell(c)}.`,`My phone number is ${p}.`,'Please call me back. Thank you.'])+`<p class="sub">قراءة الرقم: <span class="en">${rd(p)}</span></p>`};
 ['nm','co','ph'].forEach(k=>$('#'+k).addEventListener('input',msg));msg();
 const ord=()=>{const it=$('#it').value,c=$('#cl').value,s=$('#sz').value,q=+$('#q').value||1;const pl=it==='pads'?'pads':(q>1?it+'s':it);
  $('#oo').innerHTML=dl([['A','Hello. I need to buy some things for my skateboard.'],['B','OK. What do you need?'],['A',`I need ${q>1||it==='pads'?q:'a'} ${q>1||it==='pads'?pl:it}.`],['B','What colour do you need?'],['A',cap(c)+'.'],['B','What size?'],['A',cap(s)+'.']])};
 const cap=s=>s[0].toUpperCase()+s.slice(1);['it','cl','sz','q'].forEach(k=>$('#'+k).addEventListener('input',ord));ord();
}
const R23=N.rule({title:'الرسالة الصوتية، والطلب بالهاتف، وتعريف شخص آخر',ref:'ص 14–15',
 intro:`الهاتف له عبارات خاصة به. في هذا الدرس تتعلم أن تترك رسالة صوتية، وأن تطلب بضاعة بالهاتف، وأن تعرّف شخصاً آخر.`,
 parts:[
 {t:'الرسالة الصوتية والأرقام الدولية',short:'الرسالة الصوتية',old:[1],q:"لماذا نقول This is … في الهاتف؟",ref:'ص 14',
  lead:`إذا اتصلت ولم يرد أحد تترك رسالة صوتية. والرسالة الجيدة قصيرة ومرتبة حتى يعرف السامع من أنت وكيف يتصل بك.`,
  points:[`<b>نبدأ بـ</b> ${e('This is …')} لا ${e("I'm …")}: ${e('Hello. This is Neil Shaw.')}`,`<b>نتهجى</b> الاسم الصعب: ${e("That's S-H-A-W.")}`,`<b>نذكر</b> الشركة والرقم: ${e("I'm from Delta Tools. My phone number is …")}`,`<b>نختم</b> بـ ${e('Please call me back.')}`,
   `<b>الرقم الدولي:</b> ${e('00')} نقرؤه ${e('double oh')} أو ${e('zero zero')}، و ${e('966')} رمز السعودية ${e('nine six six')}.`],
  html:eb(["Hello. This is Neil Shaw. That's S-H-A-W.","I'm from Delta Tools. My phone number is 00966 50 311 7788.",'Please call me back. Thanks.'])+vt([['00','double oh / zero zero','رمز الاتصال الدولي'],['966','nine six six','رمز السعودية'],['55','double five / five five',''],['0','oh / zero','']],['المكتوب','نقرؤه','ملاحظة']),
  art:art(`<rect x="110" y="40" width="140" height="240" rx="20" fill="${C.ink}"/><rect x="122" y="62" width="116" height="180" rx="8" fill="${C.paper}"/>
    <g data-tip="This is … — في الهاتف نعرّف بأنفسنا بـ This is.">${TL(180,96,'This is Mark.',{fs:12,w:700})}</g><g data-tip="That's M-A-R-K. — نتهجى الاسم.">${TL(180,126,"That's M-A-R-K.",{fs:11})}</g>
    <g data-tip="My phone number is … — نقرأ الرقم رقماً رقماً.">${TL(180,160,'My number is …',{fs:11})}</g><g data-tip="Please call me back. — اتصل بي من فضلك.">${TL(180,196,'Please call me back.',{fs:11,w:700,c:C.red})}</g>`,'رسالة صوتية'),cap:'رسالة صوتية في أربعة أجزاء. مرّر المؤشر على كل جزء.',labs:[LAB23A,{title:'رتّب الرسالة',w:(el,B)=>N.order(el,B,{intro:'رتّب الرسالة:',steps:["Hello. This is Oliver Sullivan.","That's S-U-L-L-I-V-A-N.",'My phone number is 0555 21 04 66.','Please call me back. Thanks.']})}]},
 {t:'طلب البضائع بالهاتف',short:'الطلب بالهاتف',old:[2],q:'ماذا يسألك البائع عندما تطلب غطاء مقعد؟',ref:'ص 15',
  lead:`عندما تطلب بضاعة بالهاتف لا يرى البائع ما تريد، فيسألك أسئلة قصيرة ليعرف التفاصيل.`,
  points:[`${e('What do you need?')} ماذا تحتاج؟ والجواب ${e('I need two seat covers.')}`,`${e('What colour?')} ما اللون؟`,`${e('What size?')} ما المقاس؟`,`${e('How many?')} كم العدد؟`,`${e("What's your name, please?")} و ${e('Please spell that.')}`],
  html:dl([['A','Hello. I need to buy some things for my car.'],['B','OK. What do you need?'],['A','I need two seat covers.'],['B','What colour?'],['A','Black.'],['B','What size?'],['A','Large.'],['B',"What's your name, please?"]]),
  art:art(`${[['What colour?',C.red],['What size?',C.blue],['How many?',C.grn]].map((q,i)=>`<g data-tip="${q[0]}"><rect x="40" y="${60+i*72}" width="280" height="54" rx="14" fill="${C.paper}" stroke="${q[1]}" stroke-width="3"/>${TL(180,93+i*72,q[0],{fs:18,w:700,c:q[1]})}</g>`).join('')}`,'أسئلة البائع'),cap:'أسئلة البائع الثلاثة. مرّر المؤشر على كل منها.',labs:[LAB23B,{title:'السؤال المناسب',w:(el,B)=>N.cases(el,B,{intro:'اختر السؤال المناسب للجواب:',cases:[{q:'Medium.',opts:[['What size?',1],['What colour?',0]]},{q:'Three, please.',opts:[['How many?',1],['What size?',0]]},{q:'Red.',opts:[['What colour?',1],['How many?',0]]}]})}]},
 {t:'تعريف شخص آخر',short:'This is …',q:'كيف تعرّف زميلك لشخص آخر؟',ref:'ص 15',
  lead:`عرفت كيف تعرّف بنفسك. وتحتاج أحياناً أن تعرّف زميلك لغيرك.`,
  points:[`<b>نبدأ بـ</b> ${e('This is …')}: ${e('This is Stuart.')}`,`<b>ثم</b> ${e("He's")} أو ${e("She's")}: ${e("He's a student.")}`,`<b>${e('too')}</b> في آخر الجملة تعني «أيضاً»: ${e("He's a student, too.")}`],
  html:dl([['A',"I'm Henry. I'm a student. And this is Stuart. He's a student, too."],['B','Hello, Henry. Hello, Stuart. Nice to meet you.']]),
  pairs:[["He's Stuart.",'This is Stuart.','لتعريف شخص نقول This is.']],
  labs:[LAB23C]}
 ]});
B.lesson({
 id:'u2-l3',unit:2,order:3,pages:'14–15',
 title:'Ordering — الطلب بالهاتف',
 summary:'الرسائل الهاتفية والبريد الصوتي (Please call me back)، وتهجئة الأسماء وقراءة أرقام الهاتف الدولية (double، zero/oh)، وطلب البضائع بالهاتف بأسئلة What colour / What size / How many، وتعريف شخص آخر (This is…).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 14–15',html:`<p>كثيراً ما تطلب قطعاً بالهاتف أو تترك رسالة. ستتعلم:</p><ol><li>ترك رسالة صوتية وتسجيل رسالة من شخص.</li><li>تهجئة الأسماء وقراءة الأرقام الدولية.</li><li>طلب البضائع بالهاتف.</li><li>تعريف شخص آخر.</li></ol>`},
  ...R23.theory,
  {h:'تمارين الكتاب',ref:'ص 14–15',html:
   bk(1,'ص 14','استمع إلى الرسالة الصوتية وأكمل الملاحظات.',['Name: Ben Johnson','Phone number: 0044 208 8947'])+
   bk(2,'ص 14','استمع وصحّح الأخطاء في الأسماء والأرقام.',['1 Abdul Monim Waheed · 00 202 48830','2 José Fernando Ruiz · 00 35 912 828 990','3 Adil Al-Mansur · 00 971 2 605 9943','4 Nikolai Kuznetsev · 00 7 455 988-22-77'])+
   bk(3,'ص 14','مع زميلك: أملِ كلمات من الوحدة وتهجّها.',null)+
   bk(4,'ص 14','مع زميلك: اتركا رسائل هاتفية ببطاقات العمل ودوّنا الرسائل.',null,'معلومات الطالب أ في ص 112 من الكتاب.')+
   bk(5,'ص 15','مع زميلك: اطلب بضائع بالهاتف (زبون وبائع).',null,'معلومات الطالب أ في ص 112 من الكتاب.')+
   bk(6,'ص 15','استمع ثم عرّف بنفسك وبزميلك لزملاء آخرين.',null)},
  {h:'الاستماع',ref:'ص 14–15',html:au(18,'ص 14 — التمرين 1','رسالة صوتية.')+au(19,'ص 14 — التمرين 2','أسماء وأرقام.')+au(20,'ص 15 — التمرين 6','تعريف شخص آخر.')}
 ],
 stations:[
  {intro:true},
  ...R23.stations,
  {recap:['في الهاتف: This is … ثم التهجئة والرقم، ثم Please call me back.','00 = double oh، والرقمان المتشابهان double.','أسئلة الطلب: What colour? What size? How many?','تعريف شخص آخر: This is Stuart. He\'s a student, too.']}
 ],
 lab:lab23,
 examples:[
  {title:'مثال 1: رسالة صوتية',ref:'ص 14',q:`<p>اترك رسالة: اسمك Alex Fisher، رقمك 0501 23 45 67، واطلب أن يتصلوا بك.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e("Hello. This is Alex Fisher.")}`},{t:`الخطوة 2: ${e('My phone number is oh five oh one, two three, four five, six seven.')}`},{t:`الخطوة 3: ${e('Please call me back. Thanks.')}`,final:true}]},
  {title:'مثال 2: تصحيح رقم',ref:'ص 14',q:`<p>كتبتَ ${e('00 974 44 9128')} وسمعت ${e('double oh nine seven one, double four, nine one two eight')}. صحّح.</p>`,given:[],
   solve:()=>[{t:'الخطوة 1: double oh = 00 ✓.'},{t:'الخطوة 2: nine seven one = 971 لا 974.'},{t:`الخطوة 3: ${e('00 971 44 9128')}`,final:true}]},
  {title:'مثال 3: طلب بالهاتف',ref:'ص 15',q:`<p>تريد خوذة (helmet) زرقاء متوسطة، واحدة. أجب عن أسئلة البائع.</p>`,given:[],
   solve:()=>[{t:`الخطوة 1: ${e('I need a helmet.')}`},{t:`الخطوة 2: What colour? ${e('Blue.')} What size? ${e('Medium.')}`},{t:`الخطوة 3: How many? ${e('One, please.')}`,final:true}]}
 ],
 quiz:[
  {q:'في بداية رسالة صوتية نقول:',o:["This is Alex.","I'm is Alex.","Here Alex.","My is Alex."],c:0,e:'في الهاتف This is.'},
  {q:'Please call me ___.',o:['back','again','return','up'],c:0,e:'call back = يعاود الاتصال.'},
  {q:'00 في الرقم الدولي:',o:['double oh','hundred','oh-oh-one','zero hundred'],c:0,e:'double oh.'},
  {q:'Large. هو جواب:',o:['What size?','What colour?','How many?','What time?'],c:0,e:'المقاس.'},
  {q:'This is Frank. ___ a technician, too.',o:["He's","His","He","Is"],c:0,e:"He's = He is."},
  {q:'Please ___ that. (التهجئة)',o:['spell','speak','call','say'],c:0,e:'Please spell that.'}
 ]
});

/* ========== Review A ========== */
B.lesson({
 id:'u2-l4',unit:2,order:4,pages:'16–19',
 title:'Review Unit A — مراجعة الوحدتين 1 و 2',
 summary:'مراجعة الفعل be في الإثبات والسؤال والنفي والاختصارات، وأسئلة What/How، والأضداد، وقراءة الأرقام والتواريخ والأوقات، وتعليمات التركيب، مع إجابات تمارين المراجعة A كلها.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 16–19',html:`<div class="tbx"><table class="vt"><thead><tr><th>النقطة</th><th>مثال</th><th>الدرس</th></tr></thead><tbody>
   <tr><td>be: السؤال</td><td class="en">Is the machine on?</td><td>1.1</td></tr><tr><td>be: النفي والاختصار</td><td class="en">No, it isn't. It's off.</td><td>1.1</td></tr>
   <tr><td>a / an</td><td class="en">I'm an engineer.</td><td>1.1</td></tr><tr><td>الحروف والأرقام</td><td class="en">one oh one · 8850</td><td>1.2</td></tr>
   <tr><td>التواريخ والأوقات</td><td class="en">the tenth of April at 1.40 pm</td><td>1.3</td></tr><tr><td>What's this called?</td><td class="en">They're called nuts.</td><td>2.1</td></tr>
   <tr><td>التعليمات</td><td class="en">Take the wheel off the axle.</td><td>2.2</td></tr><tr><td>What / How / What's</td><td class="en">How many do you need?</td><td>2.3</td></tr></tbody></table></div>`},
  {h:'الفعل be: سؤال ونفي واختصار',ref:'ص 16',html:`${vt([['The machine is on.','Is the machine on?','No, it isn\'t. It\'s off.'],['They are technicians.','Are they technicians?','No, they aren\'t. They\'re engineers.'],['I am from Jordan.','Are you from Jordan?','No, I\'m not. I\'m from Egypt.']],['الإثبات','السؤال','النفي ثم التصحيح'])}<p>الاختصارات: ${e("is not → isn't")}، ${e("are not → aren't")}، ${e("I am → I'm")}، ${e("What is → What's")}.</p>`},
  {h:'تمارين المراجعة (ص 16–17)',ref:'ص 16–17',html:
   bk(1,'ص 16','حوّل الجمل إلى أسئلة.',['Is the machine on? (مثال)','Are the switches off?','Is Roberto in London?','Are they IT technicians?','Is he a student?','Is she Polish?'])+
   bk(2,'ص 16','أجب بالنفي ثم بجملة مثبتة.',["No, it isn't Sunday today. It's Monday. (مثال)","No, it isn't on. It's off.","No, I'm not Peter. I'm John.","No, they aren't from Berlin. They're from Bonn.","No, she isn't a technician. She's an engineer.","No, he isn't an electrician. He's a builder."])+
   bk(3,'ص 16','أعد كتابة الجمل بالاختصارات حيث يمكن.',["My name's Jamal and I'm from Jordan. (مثال)","This is Jean. He's French, but he isn't from Paris.","This is Frieda. She's from Rome, but she isn't Italian.","Look at the switch. It's down, but the power isn't on.","These are the wrong items. They aren't bolts. They're screws.","What's this tool called? What are these called?"])+
   bk(4,'ص 17','أكمل الأسئلة والأجوبة بكلمات الصندوق.',['1 are · 2 do · 3 Are · 4 does · 5 is · 6 Are','a) is · b) am · c) is · d) are · e) am · f) is'])+
   bk(5,'ص 17','طابق الأسئلة مع الأجوبة في التمرين 4.',['1 e','2 b','3 a','4 f','5 c','6 d'])+
   bk(6,'ص 17','مع زميلك: تدرّب على أسئلة التمرين 4 وأجوبتها بالاختصارات.',null)+
   bk(7,'ص 17','مع زميلك: اسأل وأجب عن صور الوحدتين 1 و 2 (What\'s this called?).',null)+
   bk(8,'ص 17','انظر إلى الدرج 15 ثانية، ثم أغلق الكتاب واكتب ما فيه.',null)+
   bk(9,'ص 17','صِل كل كلمة بضدها.',['on ≠ off','stand ≠ sit','large ≠ small','in ≠ out','stop ≠ start','left ≠ right','up ≠ down','open ≠ closed','tighten ≠ loosen'])+
   bk(10,'ص 17','اختر الطريقة الصحيحة لقراءة الأرقام.',['1 b (one oh one)','2 a (eight thousand eight hundred and fifty)','3 b (seven four double seven double eight)','4 b (one hundred and nine thousand eight hundred and forty-five)'])},
  {h:'تمارين المراجعة (ص 18–19)',ref:'ص 18–19',html:
   bk(11,'ص 18','حلّ اللغز واكتب جملة من ثماني كلمات.',['Practise your English every day with a friend.'])+
   bk(12,'ص 18','أكمل الحوار بكلمات السؤال (How، What، What\'s).',['1 What','2 How','3 What','4 What','5 What\'s','6 What\'s'])+
   bk(13,'ص 18','قل التواريخ والأوقات بنظام 12 ساعة.',['1 Wednesday, the tenth of April 2007 at 1.40 pm (مثال)','2 Friday, the thirteenth of November 2009 at 7.55 am','3 Monday, the third of September 2010 at 11.05 am','4 Wednesday, the twenty-ninth of January 2011 at 9.32 pm'])+
   bk(14,'ص 18','أكمل سلاسل الأرقام مع زميلك.',['a) 11, 13, 17 (الأعداد الأولية)','b) 13, 21, 34 (كل عدد مجموع اللذين قبله)','c) 37, 50, 65 (مربع العدد + 1)','d) 110, 111, 1000 (العد الثنائي)'])+
   bk(15,'ص 18','اكتب الأرقام والوحدات بالكلمات.',['five kilometres (مثال)','two hundred and fifty kilograms','one thousand and fifteen euros','one hundred and ten volts','zero degrees Celsius','thirteen millimetres'])+
   bk(16,'ص 18','انظر إلى صور ص 113 خمس عشرة ثانية ثم أجب صح أو خطأ.',null,'صور ص 113 ليست في الحقيبة.')+
   bk(17,'ص 19','أكمل تعليمات الصور ببعض كلمات الصندوق.',['(a) Loosen (b) use','(c) Take (d) off','(e) Take (f) off','(g) Loosen (h) use','(i) Take (j) off','(k) Take (l) off'])+
   bk(18,'ص 19','رتّب كلمات التعليمات.',['Tighten the screws. (مثال)','Use the large hammer.','Take the old wheel off the car.','Put the new wheel on the car.','Hammer the nails into the wood.','Push the bolts through the holes.'])+
   bk(19,'ص 19','مشروع: ابحث عن معاني plate و truck و axle في مجالات تقنية مختلفة واكتبها في جدول.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدة 1',title:'خلاصة الوحدة 1: البداية',q:'كيف تحوّل The machine is on إلى سؤال؟',ref:'ص 16–18',
   art:art(`${[['سؤال','Is the machine on?',70],['نفي','No, it isn\'t. It\'s off.',140],['رقم','101 = one oh one',210]].map(([a,b,y],i)=>`<g data-tip="${a}: ${b}"><rect x="30" y="${y-30}" width="300" height="50" rx="10" fill="${[C.paper,C.yel,C.paper][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(180,y,b,{fs:15,w:700})}</g>`).join('')}`,'قوالب الوحدة 1'),
   cap:'قوالب الوحدة 1. مرّر المؤشر على كل قالب.',side:[{tip:'السؤال بقلب الفعل: <span class="en">It is → Is it…?</span> والنفي بـ <span class="en">not</span>: <span class="en">It isn\'t.</span>'}],
   body:[{widget:(el,B)=>N.cases(el,B,{cases:[{q:'They are engineers. → سؤال',opts:[['Are they engineers?',1],['They are engineers?',0],['Is they engineers?',0]]},{q:'Is it Friday? (Thursday)',opts:[["No, it isn't. It's Thursday.",1],["No, it is. It's Thursday.",0]]}]}),title:'مختبر مصغّر'}]},
  {st:2,short:'الوحدة 2',title:'خلاصة الوحدة 2: الأجزاء',q:'ما الفرق بين What\'s this called? و What are those called؟',ref:'ص 17–19',
   art:art(`${[['الاسم',"They're called nuts.",70],['التعليمة','Take the wheel off.',140],['الطلب','How many do you need?',210]].map(([a,b,y],i)=>`<g data-tip="${a}: ${b}"><rect x="30" y="${y-30}" width="300" height="50" rx="10" fill="${[C.paper,C.yel,C.paper][i]}" stroke="${C.ink}" stroke-width="2"/>${TL(180,y,b,{fs:15,w:700})}</g>`).join('')}`,'قوالب الوحدة 2'),
   cap:'قوالب الوحدة 2. مرّر المؤشر على كل قالب.',side:[{tip:'التعليمة: فعل + شيء + مكان، وأسئلة الطلب: What colour / What size / How many.'}],
   body:[{widget:(el,B)=>N.gaps(el,B,{items:[{s:"What are ___ called? (بعيدة، جمع)",o:['those','that'],a:0},{s:'___ the old tyre off the car.',o:['Take','Put'],a:0},{s:'___ size do you need?',o:['What','How'],a:0}]}),title:'مختبر مصغّر'}]},
  {recap:['السؤال بقلب الفعل be، والنفي بـ not والاختصار isn\'t / aren\'t.','a قبل الساكن، an قبل المتحرك.','this/that للمفرد، these/those للجمع.','التعليمة: فعل + شيء + مكان، والأضداد put on/take off، tighten/loosen.','أسئلة: What do you need? How many? What size? What colour?']}
 ],
 examples:[
  {title:'مثال 1: من الإثبات إلى السؤال',ref:'ص 16',q:`<p>حوّل إلى سؤال: ${e("The pumps are on.")}</p>`,given:[],solve:()=>[{t:'الخطوة 1: الفعل are.'},{t:'الخطوة 2: نقدمه أول الجملة.'},{t:`الخطوة 3: ${e('Are the pumps on?')}`,final:true}]},
  {title:'مثال 2: نفي وتصحيح',ref:'ص 16',q:`<p>أجب بالنفي: ${e('Is he a driver? (mechanic)')}</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("No, he isn't.")}`},{t:'الخطوة 2: mechanic تبدأ بصوت ساكن: a.'},{t:`الخطوة 3: ${e("He's a mechanic.")}`,final:true}]},
  {title:'مثال 3: رقم بالكلمات',ref:'ص 18',q:`<p>اكتب ${e('380 V')} بالكلمات.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('three hundred and eighty')}`},{t:'الخطوة 2: V = volt، والرقم أكبر من واحد: volts.'},{t:`الخطوة 3: ${e('three hundred and eighty volts')}`,final:true}]}
 ],
 quiz:[
  {q:'They are from Bonn. → سؤال:',o:['Are they from Bonn?','They are from Bonn?','Is they from Bonn?','Do they from Bonn?'],c:0,e:'نقدم الفعل are.'},
  {q:"This is Frieda. ___ from Rome.",o:["She's","Her","She","Is"],c:0,e:"She's = She is."},
  {q:'ضد large:',o:['small','short','low','light'],c:0,e:'large ≠ small.'},
  {q:'Room 101 تُقرأ:',o:['one oh one','one hundred and one only','ten one','one zero one zero'],c:0,e:'أرقام الغرف تُقرأ رقماً رقماً.'},
  {q:'___ do you need? — Some bolts, please.',o:['What','How','What\'s','Where'],c:0,e:'What do you need?'},
  {q:'Hammer the nails ___ the wood.',o:['into','off','under','from'],c:0,e:'into = إلى داخل.'},
  {q:'0 °C بالكلمات:',o:['zero degrees Celsius','oh degree','nothing Celsius','zero degree C'],c:0,e:'zero degrees Celsius.'}
 ]
});
})(PLCBOOK);

/* الوحدة 3 — Parts (2): 3.1 Tools (ص 20–21) · 3.2 Functions (ص 22–23) · 3.3 Locations (ص 24–25)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL,arrowS}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const cap=s=>s[0].toUpperCase()+s.slice(1);

/* ========== 3.1 Tools ========== */
const MT=[['hammer','مطرقة'],['a pair of pliers','زردية (كماشة)'],['a pair of scissors','مقص'],['saw','منشار'],['blade','شفرة'],['can opener','فتّاحة علب'],['bottle opener','فتّاحة زجاجات'],['screwdriver','مفك'],['ruler','مسطرة'],['wrench (AmE) = spanner (BrE)','مفتاح ربط']];
const PARTS=[['handle','المقبض'],['shaft','الساق (الجزء الطويل)'],['head','الرأس'],['blade','الشفرة'],['jaws','فكّا الزردية']];
const toolArt=()=>art(`
 <g data-tip="head — رأس المطرقة: الجزء المعدني الذي يضرب المسمار."><rect x="40" y="70" width="90" height="34" rx="6" fill="${C.mut}" stroke="${C.ink}" stroke-width="2.5"/>${TL(85,60,'head',{fs:12,w:700})}</g>
 <g data-tip="handle — المقبض: الجزء الذي تمسكه بيدك."><rect x="76" y="104" width="18" height="120" rx="6" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(120,200,'handle',{fs:12,w:700})}</g>
 <g data-tip="jaws — الفكّان: طرفا الزردية اللذان يمسكان الأشياء."><path d="M230 70 l-14 40 l10 6 z M250 70 l14 40 l-10 6 z" fill="${C.mut}" stroke="${C.ink}" stroke-width="2.5"/>${TL(240,60,'jaws',{fs:12,w:700})}</g>
 <g data-tip="a pair of pliers — زردية: مقبضان وفكّان. نقول دائماً pliers بالجمع أو a pair of pliers."><path d="M226 116 l-20 110 l14 2 l18 -106 z M254 116 l20 110 l-14 2 l-18 -106 z" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/><circle cx="240" cy="118" r="6" fill="${C.ink}"/>${TL(240,252,'a pair of pliers',{fs:12,w:700})}</g>`,'أجزاء المطرقة والزردية');
function lab31(el,B){kcss();
 const TOOLS=[{n:'Multi Tool',has:['hammer','pliers','saw','blade','can opener']},{n:'Survival Tool',has:['ruler','screwdriver','pick','blade','can opener','bottle opener','wrench']},{n:'Key Tool',has:['blade','screwdriver','bottle opener','pliers','saw']}];
 const ALL=['hammer','pliers','scissors','saw','blade','can opener','bottle opener','screwdriver','ruler','wrench'];
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">Does it have…?</h3><p class="sub">مبني على «Language» ص 20 والتمرين 11 ص 21. اختر الأداة والجزء، وشاهد السؤال والجواب القصير.</p>
  <div class="ph-row"><select class="ph-sel" id="tl">${TOOLS.map((t,i)=>`<option value="${i}">${t.n}</option>`).join('')}</select><select class="ph-sel" id="pt">${ALL.map(p=>`<option>${p}</option>`).join('')}</select></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">قارن أداتين</h3><p class="sub">مبني على التمرين 12 ص 21: but للمقارنة.</p><div class="ph-row"><select class="ph-sel" id="a1">${TOOLS.map((t,i)=>`<option value="${i}">${t.n}</option>`).join('')}</select><select class="ph-sel" id="a2">${TOOLS.map((t,i)=>`<option value="${i}" ${i===1?'selected':''}>${t.n}</option>`).join('')}</select></div><div id="cp"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر <span class="en">pliers</span>: لماذا نقول <span class="en">a pair of pliers</span>؟</li><li>متى يكون الجواب <span class="en">Yes, it does</span> ومتى <span class="en">No, it doesn't</span>؟</li><li>اكتب جملة مقارنة بنفسك لأداتين في بيتك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const nm=p=>/pliers|scissors/.test(p)?'a pair of '+p:(/^[aeiou]/.test(p)?'an ':'a ')+p;
 const sh=()=>{const t=TOOLS[+$('#tl').value],p=$('#pt').value,h=t.has.includes(p);$('#o').innerHTML=`<div class="pk-facts"><div class="${h?'hi':''}"><span>النتيجة</span><b>${h?'نعم':'لا'}</b></div></div>${eb([`Does the ${t.n} have ${nm(p)}?`,h?'Yes, it does.':"No, it doesn't."])}`};
 ['tl','pt'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const cmp=()=>{const a=TOOLS[+$('#a1').value],b=TOOLS[+$('#a2').value];if(a===b){$('#cp').innerHTML='<p class="sub">اختر أداتين مختلفتين.</p>';return}
  const x=a.has.find(p=>!b.has.includes(p)),y=b.has.find(p=>!a.has.includes(p));const L=[];if(x)L.push(`The ${a.n} has ${nm(x)}, but the ${b.n} doesn't.`);if(y)L.push(`The ${b.n} has ${nm(y)}, but the ${a.n} doesn't.`);$('#cp').innerHTML=eb(L.length?L:['They have the same parts.'])};
 ['a1','a2'].forEach(k=>$('#'+k).addEventListener('input',cmp));cmp();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 3 ===== */
const SB3={I:['I',0],you:['You',0],we:['We',0],they:['They',0],he:['He',1],she:['She',1],it:['The Multi Tool',1]};
const LAB31A={title:'have أم has؟ do أم does؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الفاعل ونوع الجملة، وشاهد كيف يتغير have.',
 controls:[{k:'s',label:'الفاعل',opts:Object.keys(SB3).map(k=>[k,k==='it'?'it (الأداة)':k])},{k:'f',label:'الجملة',opts:[['pos','إثبات'],['neg','نفي'],['q','سؤال']]}],
 out:({s,f})=>{const [S,three]=SB3[s],Sl=S==='I'||S==='The Multi Tool'?S:S.toLowerCase(),obj='a saw';
  if(f==='pos')return{pieces:[[S,'n','الفاعل'],[three?'has':'have','k',three?'he / she / it':'I / you / we / they'],[obj+'.','x','']],say:`${S} ${three?'has':'have'} ${obj}.`,why:`مع ${e('he · she · it')} نقول ${e('has')}، ومع البقية ${e('have')}.`};
  if(f==='neg')return{pieces:[[S,'n','الفاعل'],[three?"doesn't":"don't",'r',three?'does + not':'do + not'],['have','k','يعود have'],[obj+'.','x','']],say:`${S} ${three?"doesn't":"don't"} have ${obj}.`,why:`في النفي: ${e("don't")} أو ${e("doesn't")}، وبعدها ${e('have')} دائماً (لا ${e('has')}).`};
  return{pieces:[[three?'Does':'Do','q',three?'he / she / it':'I / you / we / they'],[Sl,'n','الفاعل'],['have','k','يعود have'],[obj+'?','x','']],say:`${three?'Does':'Do'} ${Sl} have ${obj}?`,ar:(()=>{const P={I:'you',you:'I',we:'we',they:'they',he:'he',she:'she',it:'it'}[s],D=three?'does':'do';return `الجواب القصير: Yes, ${P} ${D}. / No, ${P} ${D}n't.`})(),why:`السؤال يبدأ بـ ${e('Do')} أو ${e('Does')}، وبعد الفاعل ${e('have')}.`}}})};
const PL3={pliers:['pliers',1,'زردية'],scissors:['scissors',1,'مقص'],hammer:['hammer',0,'مطرقة'],saw:['saw',0,'منشار']};
const LAB31B={title:'a أم a pair of؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الأداة، وشاهد كيف نطلب واحدة منها.',
 controls:[{k:'t',label:'الأداة',opts:Object.keys(PL3).map(k=>[k,k])}],
 out:({t})=>{const [w,pair,ar]=PL3[t];return pair?{pieces:[['I need','x',''],['a pair of','k','للأداة ذات الفكّين'],[w+'.','n','دائماً جمع']],say:`I need a pair of ${w}.`,ar:`أو: I need some ${w}. ولا نقول a ${w.replace(/s$/,'')}.`,why:`${ar} له جزآن متشابهان، فاسمه بالجمع دائماً، ونعدّه بـ ${e('a pair of')}.`}
  :{pieces:[['I need','x',''],['a','k','مفرد'],[w+'.','n','']],say:`I need a ${w}.`,why:`${ar} اسم مفرد عادي، فنقول ${e('a '+w)}.`}}})};
const TL3={key:['The Key Tool','a screwdriver','a wrench'],survival:['The Survival Tool','a ruler','a hammer'],multi:['The Multi Tool','a saw','a ruler']};
const LAB31C={title:'قارن بـ but',w:(el,B)=>N.labB(el,B,{intro:'اختر الأداة، وشاهد جملة تذكر ما فيها وما ليس فيها، يربط بينهما but.',
 controls:[{k:'t',label:'الأداة',opts:Object.keys(TL3).map(k=>[k,TL3[k][0]])}],
 out:({t})=>{const [n,h,x]=TL3[t];return{pieces:[[n,'n','الفاعل'],['has '+h+',','k','ما فيها'],['but','q','لكن'],["it doesn't have "+x+'.','r','ما ليس فيها']],say:`${n} has ${h}, but it doesn't have ${x}.`,why:`${e('but')} تربط جملتين متعاكستين: الأولى مثبتة والثانية منفية.`}}})};
const S32={I:['I',0],you:['You',0],we:['We',0],they:['They',0],he:['He',1],she:['She',1],it:['The thermometer',1]};
const V32={work:['work','works','in a factory'],study:['study','studies','English'],watch:['watch','watches','the meter'],measure:['measure','measures','temperature']};
const LAB32A={title:'المضارع البسيط: s أم بدونها؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الفاعل والفعل ونوع الجملة. لاحظ متى تظهر s ومتى تختفي.',
 controls:[{k:'s',label:'الفاعل',opts:Object.keys(S32).map(k=>[k,k==='it'?'it (الجهاز)':k])},{k:'v',label:'الفعل',opts:Object.keys(V32).map(k=>[k,k])},{k:'f',label:'الجملة',opts:[['pos','إثبات'],['neg','نفي'],['q','سؤال']]}],
 out:({s,v,f})=>{const [S,three]=S32[s],[b,th,o]=V32[v],Sl=S==='I'||S.startsWith('The')?S.replace('The','the'):S.toLowerCase();
  const sp=th.endsWith('ies')?'ساكن + y ← ies':th.endsWith('es')?'نضيف es':'نضيف s';
  if(f==='pos')return{pieces:[[S,'n','الفاعل'],[three?th:b,'k',three?sp:'كما هو'],[o+'.','x','']],say:`${S} ${three?th:b} ${o}.`,why:three?`مع ${e('he · she · it')} نضيف ${e('s')} للفعل في الإثبات.`:`مع ${e('I · you · we · they')} يبقى الفعل كما هو.`};
  if(f==='neg')return{pieces:[[S,'n','الفاعل'],[three?"doesn't":"don't",'r','النفي'],[b,'k','بلا s'],[o+'.','x','']],say:`${S} ${three?"doesn't":"don't"} ${b} ${o}.`,why:`في النفي نضع ${e(three?"doesn't":"don't")}، ويعود الفعل بلا ${e('s')}.`};
  return{pieces:[[three?'Does':'Do','q','السؤال'],[Sl,'n','الفاعل'],[b,'k','بلا s'],[o+'?','x','']],say:`${three?'Does':'Do'} ${Sl} ${b} ${o}?`,why:`في السؤال نبدأ بـ ${e(three?'Does':'Do')}، ويعود الفعل بلا ${e('s')}.`}}})};
const TV32={saw:['A saw','cuts','wood and metal','يقطع'],pliers:['Pliers','grip','wire','تمسك'],hammer:['A hammer','drives in','nails','يدق'],spanner:['A spanner','tightens','nuts','يشد']};
const LAB32B={title:'ماذا تفعل الأداة؟',w:(el,B)=>N.labB(el,B,{intro:'اختر الأداة، وشاهد جملة وظيفتها. لاحظ الفعل مع المفرد والجمع.',
 controls:[{k:'t',label:'الأداة',opts:Object.keys(TV32).map(k=>[k,k])}],
 out:({t})=>{const [a,v,o,ar]=TV32[t];const pl=a==='Pliers';return{pieces:[[a,'n',pl?'جمع = they':'مفرد = it'],[v,'k',ar],[o+'.','x','']],say:`${a} ${v} ${o}.`,why:pl?`${e('pliers')} جمع، فالفعل بلا ${e('s')}.`:`الأداة مفردة (${e('it')})، فنضيف ${e('s')} للفعل.`}}})};
const JB32={you:['What do you do?',"I'm a mechanic.",'Where do you work?','I work at a car company.'],he:['What does Edward do?',"He's a student.",'Where does he study?','He studies at the technical college.'],she:['What does Hannah do?',"She's an engineer.",'Where does she work?','She works in a factory.']};
const LAB32C={title:'السؤال عن العمل والدراسة',w:(el,B)=>N.labB(el,B,{intro:'اختر الشخص والسؤال، وشاهد السؤال وجوابه.',
 controls:[{k:'p',label:'عن',opts:[['you','أنت'],['he','إدوارد'],['she','هانا']]},{k:'q',label:'السؤال',opts:[['1','ما عمله؟'],['2','أين يعمل أو يدرس؟']]}],
 out:({p,q})=>{const J=JB32[p],i=q==='1'?0:2;return{pieces:[[J[i],'q',p==='you'?'do مع you':'does مع he / she'],[J[i+1],'n','الجواب']],say:`${J[i]} ${J[i+1]}`,why:q==='1'?`${e('What do you do?')} معناها «ما عملك؟».`:`مع ${e('he · she')} نسأل بـ ${e('does')}، وفي الجواب يأخذ الفعل ${e('s')}.`}}})};
const g33=(r,c,clk)=>{let s='<svg viewBox="0 0 240 170" width="260"><rect x="10" y="10" width="220" height="150" rx="8" fill="#fff" stroke="#555" stroke-width="3"/>';for(let i=1;i<3;i++){s+=`<line x1="${10+i*73.3}" y1="10" x2="${10+i*73.3}" y2="160" stroke="#ddd" stroke-dasharray="4"/><line x1="10" y1="${10+i*50}" x2="230" y2="${10+i*50}" stroke="#ddd" stroke-dasharray="4"/>`}
 s+=`<rect x="${20+c*73.3}" y="${20+r*50}" width="53" height="30" rx="6" fill="#1f8a5b"/><text x="${46+c*73.3}" y="${40+r*50}" font-size="11" fill="#fff" text-anchor="middle">START</text></svg>`;return s};
const LAB33A={title:'المواقع التسعة',w:(el,B)=>N.labB(el,B,{intro:'اختر الصف والعمود، وشاهد مكان الزر على الشاشة ووصفه.',
 controls:[{k:'r',label:'الصف',opts:[['0','أعلى'],['1','الوسط'],['2','أسفل']]},{k:'c',label:'العمود',opts:[['0','يسار'],['1','الوسط'],['2','يمين']]}],
 out:({r,c})=>{r=+r;c=+c;const ph=posPhrase(r,c);return{svg:g33(r,c),pieces:[['The button is','x',''],[ph+'.','k','المكان']],say:`The button is ${ph}.`,why:`${e('at')} مع ${e('the top · the bottom')}، و ${e('on')} مع ${e('the left · the right')}، و ${e('in')} مع ${e('the middle · the centre')}.`}}})};
const rel33=(p)=>{const W={x:110,y:55};const P={above:[110,18],below:[110,128],left:[40,72],right:[180,72]}[p];
 return `<svg viewBox="0 0 220 150" width="240"><rect x="85" y="45" width="50" height="55" fill="#cfe6f7" stroke="#555" stroke-width="3"/><line x1="110" y1="45" x2="110" y2="100" stroke="#555" stroke-width="2"/><text x="110" y="115" font-size="10" fill="#666" text-anchor="middle">window</text><circle cx="${P[0]}" cy="${P[1]}" r="14" fill="#fff" stroke="#b37d00" stroke-width="3"/><path d="M${P[0]} ${P[1]}v-8M${P[0]} ${P[1]}h6" stroke="#333" stroke-width="2"/></svg>`};
const LAB33B={title:'المكان بالنسبة لشيء آخر',w:(el,B)=>N.labB(el,B,{intro:'حرّك الساعة حول النافذة، وشاهد الوصف.',
 controls:[{k:'p',label:'الساعة',opts:[['above','فوق'],['below','تحت'],['left','يسار'],['right','يمين']]}],
 out:({p})=>{const w={above:'above',below:'below',left:'to the left of',right:'to the right of'}[p];return{svg:rel33(p),pieces:[['The clock is','x',''],[w,'k','بالنسبة لشيء'],['the window.','n','الشيء']],say:`The clock is ${w} the window.`,why:`${e('on the left')} = في الجهة اليسرى من المكان كله، و ${e('to the left of')} = يسار شيء محدد.`}}})};
const R31=N.rule({title:'have و has، والسؤال بـ Do / Does، و a pair of، والربط بـ but',ref:'ص 20–21',
 intro:`في هذا الدرس نصف أداة متعددة الاستعمالات: ماذا فيها، وماذا ليس فيها. نحتاج لذلك الفعل ${e('have')} (يملك / فيه)، ثم أسماء الأجزاء و ${e('a pair of')}، ثم الربط بـ ${e('but')}.`,
 parts:[
 {t:'have و has، والسؤال والنفي',short:'have / has',old:[1],q:'لماذا نقول The knife has لكن Does the knife have؟',ref:'ص 20',
  lead:`لنقول إن أداة «فيها» شفرة أو منشار نستعمل الفعل ${e('have')}. وهو يتغير حسب الفاعل، ويحتاج ${e('do')} أو ${e('does')} في السؤال والنفي.`,
  points:[`<b>الإثبات:</b> ${e('have')} مع ${e('I · you · we · they')}، و ${e('has')} مع ${e('he · she · it')}: ${e('The knife has a blade.')}`,
   `<b>السؤال:</b> ${e('Do')} مع ${e('I · you · we · they')}، و ${e('Does')} مع ${e('he · she · it')}، وبعد الفاعل ${e('have')}: ${e('Does the knife have a saw?')}`,
   `<b>النفي:</b> ${e("don't have")} أو ${e("doesn't have")}: ${e("The Multi Tool doesn't have a ruler.")}`,
   `<b>بعد does و doesn't</b> يعود الفعل ${e('have')}، ولا نقول ${e('has')}.`,
   `<b>الجواب القصير:</b> ${e("Yes, it does. / No, it doesn't.")} و ${e("Yes, I do. / No, I don't.")}`],
  grid:{head:['','I / you / we / they','he / she / it'],rows:[['إثبات','I have a saw.','It has a saw.'],['نفي',"I don't have a saw.","It doesn't have a saw."],['سؤال','Do you have a saw?','Does it have a saw?'],['جواب قصير',"Yes, I do. / No, I don't.","Yes, it does. / No, it doesn't."]]},
  html:vt(MT,['English','المعنى']),
  pairs:[['Does it has a saw?','Does it have a saw?','بعد does نقول have.'],["It don't have a ruler.","It doesn't have a ruler.","مع it نستعمل doesn't."]],
  art:art(`<g data-tip="Does + الشيء + have + …? — السؤال عن مفرد (it)."><rect x="30" y="60" width="300" height="56" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,94,'Does it have a saw?',{fs:17,w:700})}</g>
    <g data-tip="Yes, it does. — جواب قصير بالإيجاب."><rect x="30" y="140" width="140" height="56" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(100,174,'Yes, it does.',{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="No, it doesn't. — جواب قصير بالنفي (doesn't = does not)."><rect x="190" y="140" width="140" height="56" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(260,174,"No, it doesn't.",{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="بعد does يبقى have."><rect x="70" y="224" width="220" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,252,'does + have (not has)',{fs:13,w:700})}</g>`,'Does it have'),cap:'السؤال والجوابان. مرّر المؤشر على كل منها.',labs:[LAB31A,{title:'do أم does؟',w:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:'___ you have a torch?',o:['Do','Does'],a:0},{s:'Does the knife ___ a saw?',o:['have','has'],a:0},{s:"No, it ___.",o:["doesn't","don't"],a:0},{s:'The car ___ a radio.',o:['has','have'],a:0}]})}]},
 {t:'أجزاء الأداة و a pair of',short:'a pair of',old:[2],q:'لماذا لا نقول a plier؟',ref:'ص 21',
  lead:`بعد أن عرفنا ما في الأداة نسمّي أجزاءها. وبعض الأدوات لها اسم بالجمع دائماً لأنها مكونة من جزأين متشابهين.`,
  points:[`<b>الأجزاء:</b> ${e('handle')} المقبض، و ${e('head')} الرأس، و ${e('blade')} الشفرة، و ${e('jaws')} فكّا الزردية.`,
   `<b>${e('pliers')} و ${e('scissors')}</b> جمع دائماً، فنقول ${e('a pair of pliers')} أو ${e('some pliers')}، ولا نقول ${e('a plier')}.`,
   `وما دام الاسم جمعاً نقول معه ${e('These are · They have')}: ${e('These are pliers. They have two handles.')}`],
  html:vt(PARTS,['English','المعنى'])+eb(['This is a hammer. It has a handle and a head.','These are pliers. They have two handles and two jaws.']),
  pairs:[['I need a scissor.','I need a pair of scissors.','scissors جمع دائماً.'],['This is pliers.','These are pliers.','pliers جمع، فنقول These are.']],
  labs:[LAB31B,{title:'ما الجزء؟',w:(el,B)=>N.cases(el,B,{intro:'ما الجزء؟',cases:[{q:'You hold it in your hand.',opts:[['handle',1],['blade',0]]},{q:'It cuts.',opts:[['blade',1],['jaws',0]]},{q:'Pliers hold things with them.',opts:[['jaws',1],['head',0]]}]})}]},
 {t:'المقارنة بـ but',short:'but',q:'كيف تقول إن الأداة فيها مفك لكن ليس فيها مفتاح ربط؟',ref:'ص 21',
  lead:`عندما نقارن أداتين نذكر ما في الأولى وما ليس فيها، ونربط الجملتين بـ ${e('but')} (لكن).`,
  points:[`<b>${e('but')}</b> تربط جملتين متعاكستين: الأولى مثبتة والثانية منفية، أو العكس.`,`نضع فاصلة قبل ${e('but')}: ${e("The Key Tool has a screwdriver, but it doesn't have a wrench.")}`,`يمكن أن نختصر الجملة الثانية: ${e("The Survival Tool has a ruler, but the Multi Tool doesn't.")}`],
  labs:[LAB31C]}
 ]});
B.lesson({
 id:'u3-l1',unit:3,order:1,pages:'20–21',
 title:'Tools — الأدوات',
 summary:'أسماء أدوات الأداة المتعددة (hammer، pliers، saw، blade، can opener…)، والفعل have في السؤال والنفي (Does it have…? Yes, it does / No, it doesn\'t)، و a pair of مع pliers و scissors، وأجزاء الأداة (handle، shaft، head، blade، jaws)، والمقارنة بـ but.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 20–21',html:`<p>تصف أداة: ماذا فيها وماذا ليس فيها، وما أجزاؤها. ستتعلم:</p><ol><li>أسماء أدوات شائعة.</li><li>السؤال والجواب بـ ${e('Does … have …?')}</li><li>${e('a pair of')} مع الأدوات التي لها جزءان.</li><li>أجزاء الأداة، والمقارنة بـ ${e('but')}.</li></ol>`},
  ...R31.theory,
  {h:'تمارين الكتاب',ref:'ص 20–21',html:
   bk(1,'ص 20','استمع وأكمل إعلان التلفاز.',['(1) hammer','(2) pliers','(3) saw','(4) blade','(5) can opener'])+
   bk(2,'ص 20','استمع وأكمل الحوار بكلمات الصندوق.',['(1) have','(2) do','(3) have','(4) does','(5) have','(6) doesn\'t'])+
   bk(3,'ص 20','استمع وكرّر.',null)+bk(4,'ص 20','مع زميلك: تدرّب على الحوار بأسماء وأدوات مختلفة.',null)+bk(5,'ص 20','مع زميلك: صمّم أداة متعددة لعملك.',null)+
   bk(6,'ص 21','أكمل أسماء أجزاء أداة Survival Tool.',['1 screwdriver (مثال)','بقية الأجزاء: ruler, pick, blade, can opener, bottle opener, wrenches, cover'],'مواقع الأرقام 2–8 حسب صورة الكتاب؛ النص في التمرين 7 يذكر الأجزاء كلها.')+
   bk(7,'ص 21','اقرأ مراجعة المنتج وتحقق من إجاباتك في التمرين 6.',null)+
   bk(8,'ص 21','اسأل وأجب عن الأداتين بكلمات الصندوق (Does … have …?).',null)+
   bk(9,'ص 21','طابق الأجزاء مع الكلمات.',['1 head','2 handle','3 shaft','4 blade','5 jaws'],'من قراءتنا للصور.')+
   bk(10,'ص 21','ارسم أدوات من عملك وسمِّ أجزاءها واكتب جملاً.',null)+
   bk(11,'ص 21','قارن المنتجات الثلاثة (جدول المقارنة).',null)+
   bk(12,'ص 21','اكتب مقارنة قصيرة للمنتجات الثلاثة.',null)},
  {h:'الاستماع',ref:'ص 20',html:au(21,'ص 20 — التمرين 1','إعلان عن أداة متعددة.')+au(22,'ص 20 — التمرين 2','حوار بـ Does it have…?')+au(23,'ص 20 — التمرين 3','أسماء الأدوات.')}
 ],
 stations:[
  {intro:true},
  ...R31.stations,
  {recap:['Does it have a saw? — Yes, it does. / No, it doesn\'t.','do مع I/you/we/they، و does مع he/she/it، وبعد does: have.','a pair of pliers / a pair of scissors.','أجزاء الأداة: handle, shaft, head, blade, jaws.','المقارنة: It has a ruler, but the other tool doesn\'t.']}
 ],
 lab:lab31,
 examples:[
  {title:'مثال 1: سؤال وجواب',ref:'ص 20',q:`<p>اسأل هل في السكين مفك، والجواب نعم.</p>`,given:[],solve:()=>[{t:`الخطوة 1: السكين مفرد (it): ${e('Does')}.`},{t:`الخطوة 2: ${e('Does the knife have a screwdriver?')}`},{t:`الخطوة 3: ${e('Yes, it does.')}`,final:true}]},
  {title:'مثال 2: نفي',ref:'ص 20',q:`<p>قل إن الأداة ليس فيها مطرقة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: النفي مع it: ${e("doesn't")}.`},{t:`الخطوة 2: بعد doesn't يبقى ${e('have')}.`},{t:`الخطوة 3: ${e("The tool doesn't have a hammer.")}`,final:true}]},
  {title:'مثال 3: مقارنة',ref:'ص 21',q:`<p>قارن: الأداة A فيها مقص، والأداة B ليس فيها.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Tool A has a pair of scissors')}`},{t:`الخطوة 2: نضيف ${e('but')} للمقارنة.`},{t:`الخطوة 3: ${e("Tool A has a pair of scissors, but Tool B doesn't.")}`,final:true}]}
 ],
 quiz:[
  {q:'___ the tool have a saw?',o:['Does','Do','Is','Has'],c:0,e:'مع it نستعمل does.'},
  {q:'Does it have a ruler? — No, it ___.',o:["doesn't","don't","isn't","hasn't"],c:0,e:"No, it doesn't."},
  {q:'I need a ___ of scissors.',o:['pair','two','set','one'],c:0,e:'a pair of scissors.'},
  {q:'الجزء الذي تمسكه:',o:['handle','blade','jaws','head'],c:0,e:'handle = المقبض.'},
  {q:'wrench بالبريطانية:',o:['spanner','pliers','saw','chisel'],c:0,e:'BrE spanner, AmE wrench.'},
  {q:'The Multi Tool ___ a hammer.',o:['has','have','does','do'],c:0,e:'في الإثبات مع it: has.'}
 ]
});

/* ========== 3.2 Functions ========== */
const FN=[['thermometer','measures temperature','يقيس الحرارة'],['compass','finds North','يحدد الشمال'],['torch','shines a light','يضيء'],['clock','tells the time','يبين الوقت'],['alarm','makes a loud noise','يصدر صوتاً عالياً'],['solar panel','makes electricity','يولّد الكهرباء'],['handle','turns the dynamo','يدير المولّد'],['antenna','receives radio signals','يستقبل إشارات الراديو']];
const radioArt=()=>art(`<rect x="70" y="100" width="220" height="130" rx="20" fill="${C.ink}"/>
 <g data-tip="antenna — الهوائي: يستقبل إشارات الراديو (receives radio signals)."><line x1="270" y1="100" x2="310" y2="40" stroke="${C.mut}" stroke-width="5"/>${TL(318,34,'antenna',{fs:11,w:700})}</g>
 <g data-tip="torch — الكشاف: يضيء (shines a light)."><circle cx="250" cy="165" r="30" fill="${C.yel}" stroke="${C.paper}" stroke-width="3"/>${TL(250,252,'torch',{fs:11,w:700})}</g>
 <g data-tip="clock — الساعة: تبين الوقت (tells the time)."><rect x="90" y="120" width="70" height="30" rx="4" fill="#bfe5d2"/>${TL(125,140,'12:40',{fs:12,w:700})}</g>
 <g data-tip="thermometer — مقياس الحرارة: يقيس الحرارة (measures temperature)."><rect x="168" y="120" width="34" height="30" rx="4" fill="${C.paper}"/>${TL(185,140,'31°',{fs:11,w:700})}</g>
 <g data-tip="solar panel — اللوح الشمسي: يحوّل طاقة الشمس إلى كهرباء ويشحن البطارية."><rect x="90" y="168" width="110" height="44" fill="${C.blue}" stroke="${C.paper}" stroke-width="2"/>${TL(145,260,'solar panel',{fs:11,w:700})}</g>
 <g data-tip="handle — المقبض: يدير المولّد (turns the dynamo) فيشحن البطارية."><path d="M70 150 q-34 0 -34 30 l0 30" fill="none" stroke="${C.red}" stroke-width="7" stroke-linecap="round"/>${TL(36,234,'handle',{fs:11,w:700})}</g>`,'راديو الطوارئ وأجزاؤه');
function lab32(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">الجزء ووظيفته</h3><p class="sub">مبني على التمارين 6–8 ص 23. اختر الجزء والوظيفة، وشاهد الجملة أو السؤال والجواب.</p>
  <div class="ph-row"><select class="ph-sel" id="p">${FN.map((f,i)=>`<option value="${i}">${f[0]}</option>`).join('')}</select><select class="ph-sel" id="f">${FN.map((f,i)=>`<option value="${i}">${f[1]}</option>`).join('')}</select></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">مصادر الطاقة</h3><p class="sub">مبني على التمرين 1 ص 22.</p><div class="ph-row" id="pw">${['mains + AC adapter','solar power','dynamo','batteries'].map((x,i)=>`<button type="button" class="btn${i?'':' pri'}" data-w="${i}">${x}</button>`).join('')}</div><div id="wo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر <span class="en">compass</span> مع وظيفة خاطئة: كيف صار الجواب؟</li><li>لماذا نضيف <span class="en">s</span> إلى الفعل: <span class="en">The torch shine<b>s</b> a light</span>؟</li><li>صِف جهازاً في بيتك ووظيفة أحد أجزائه.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const base=v=>v.replace(/^(\w+?)(es|s) /,(m,a,b)=>(b==='es'&&/(sh|ch|x|s)$/.test(a)?a:a+(b==='es'?'e':''))+' ');
 const sh=()=>{const p=FN[+$('#p').value],f=FN[+$('#f').value],ok=p===f;
  $('#o').innerHTML=`${eb([`Does the ${p[0]} ${base(f[1])}?`,ok?'Yes, it does.':`No, it doesn't. It ${p[1]}.`])}<p class="sub">${p[0]}: ${p[2]}.</p>`};
 ['p','f'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const W=[['The AC adapter connects the mains electricity to the radio.','المحوّل يوصل كهرباء الشبكة بالجهاز.'],['The solar panel changes the Sun\'s energy into electricity.','اللوح الشمسي يحوّل طاقة الشمس إلى كهرباء.'],['The handle turns the dynamo. The dynamo makes electricity.','المقبض يدير المولّد، والمولّد يصنع الكهرباء.'],['The batteries give power to the radio.','البطاريات تعطي الجهاز الطاقة.']];
 const ws=i=>{el.querySelectorAll('[data-w]').forEach(b=>b.classList.toggle('pri',+b.dataset.w===i));$('#wo').innerHTML=`${eb(W[i][0])}<p class="sub">${W[i][1]}</p>`};
 el.querySelectorAll('[data-w]').forEach(b=>b.onclick=()=>ws(+b.dataset.w));ws(0);
}
const R32=N.rule({title:'مصادر الطاقة ووظائف الأجزاء، والمضارع البسيط',ref:'ص 22–23',
 intro:`في هذا الدرس نصف راديو طوارئ: من أين يأخذ الطاقة، وماذا يفعل كل جزء فيه. ولوصف الوظيفة نحتاج المضارع البسيط، ثم نستعمله للسؤال عن العمل والدراسة.`,
 parts:[
 {t:'مصادر الطاقة وأجزاء الجهاز',short:'الأجزاء والوظائف',old:[1],q:'ماذا يفعل الـ compass؟',ref:'ص 22–23',
  lead:`كل جهاز يحتاج مصدر طاقة، وكل جزء فيه له وظيفة. نصف الوظيفة بجملة قصيرة: الجزء ثم الفعل.`,
  points:[`<b>مصادر الطاقة:</b> ${e('mains electricity · solar power · dynamo · batteries')}`,`<b>الوظيفة:</b> ${e('The compass finds North.')} ${e('The torch shines a light.')}`],
  html:vt([['mains electricity + AC adapter','كهرباء الشبكة مع محوّل'],['solar power','الطاقة الشمسية'],['dynamo','مولّد (دينامو) يدار باليد'],['batteries','بطاريات'],['internal ≠ external','داخلي ≠ خارجي']],['English','المعنى'])+vt(FN.map(f=>[f[0],f[1],f[2]]),['Part الجزء','Function الوظيفة','المعنى']),
  labs:[{title:'الوظيفة',w:(el,B)=>N.cases(el,B,{intro:'ما الوظيفة؟',cases:[{q:'The compass …',opts:[['finds North',1],['tells the time',0]]},{q:'The thermometer …',opts:[['measures temperature',1],['makes electricity',0]]},{q:'The alarm …',opts:[['makes a loud noise',1],['shines a light',0]]}]})}]},
 {t:'المضارع البسيط مع كل الضمائر',short:'المضارع البسيط',old:[2],q:'لماذا نقول I work لكن He works؟',ref:'ص 23',
  lead:`نستعمل المضارع البسيط لشيء ثابت أو متكرر: وظيفة جهاز، أو عمل نقوم به كل يوم. وقاعدته الأساسية تخص ${e('he · she · it')}.`,
  points:[`<b>مع ${e('I · you · we · they')}</b> يبقى الفعل كما هو: ${e('I work in Liverpool.')}`,`<b>مع ${e('he · she · it')}</b> نضيف ${e('s')}: ${e('He works in a factory.')} ${e('It measures temperature.')}`,
   `<b>السؤال:</b> ${e('Do')} أو ${e('Does')} + الفاعل + الفعل بلا ${e('s')}: ${e('Does it measure temperature?')}`,`<b>النفي:</b> ${e("don't")} أو ${e("doesn't")} + الفعل بلا ${e('s')}: ${e("It doesn't measure speed.")}`,
   `<b>إملاء s:</b><br>المنتهي بـ ${e('s · sh · ch · x · o')} نضيف له ${e('es')}: ${e('watch → watches · go → goes')}<br>المنتهي بحرف ساكن + ${e('y')} نحذف ${e('y')} ونضيف ${e('ies')}: ${e('study → studies')}`],
  grid:{head:['','I / you / we / they','he / she / it'],rows:[['إثبات','I work.','He works.'],['نفي',"I don't work.","He doesn't work."],['سؤال','Do you work?','Does he work?'],['جواب قصير',"Yes, I do. / No, I don't.","Yes, he does. / No, he doesn't."]]},
  pairs:[['It measure temperature.','It measures temperature.','مع it نضيف s.'],['Does it measures speed?','Does it measure speed?','بعد does يعود الفعل بلا s.'],['He studys English.','He studies English.','ساكن + y: نحذف y ونضيف ies.']],
  art:art(`<g data-tip="الإثبات: الفعل + s مع it."><rect x="30" y="60" width="300" height="52" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,92,'It measures speed.',{fs:16,w:700})}</g>
    <g data-tip="السؤال: does + الفعل بلا s."><rect x="30" y="134" width="300" height="52" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,166,'Does it measure speed?',{fs:16,w:700})}</g>
    <g data-tip="النفي: doesn't + الفعل بلا s."><rect x="30" y="208" width="300" height="52" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,240,"It doesn't measure time.",{fs:16,w:700})}</g>`,'measures does doesnt'),cap:'الإثبات والسؤال والنفي. مرّر المؤشر على كل سطر.',labs:[LAB32A,{title:'s أم لا؟',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'The clock ___ the time.',o:['tells','tell'],a:0},{s:'Does the torch ___ a light?',o:['shine','shines'],a:0},{s:"The radio doesn't ___ batteries.",o:['need','needs'],a:0},{s:'A chisel ___ wood.',o:['cuts','cut'],a:0}]})}]},
 {t:'أفعال الأدوات',short:'أفعال الأدوات',old:[3],q:'ماذا تفعل الـ pliers؟',ref:'ص 23',
  lead:`لكل أداة فعل يصف عملها. ونطبق عليه قاعدة المضارع البسيط نفسها.`,
  points:[`${e('cut')} يقطع، و ${e('grip')} يمسك بإحكام، و ${e('drive in')} يدق، و ${e('tighten')} يشد، و ${e('loosen')} يرخي.`,`<b>الأداة المفردة</b> (${e('it')}) يأخذ فعلها ${e('s')}: ${e('A saw cuts wood.')}`,`<b>${e('pliers')} و ${e('scissors')}</b> جمع (${e('they')})، فالفعل بلا ${e('s')}: ${e('Pliers grip wire.')}`],
  art:art(`${[['A saw cuts wood.','cut'],['Pliers grip wire.','grip'],['A hammer drives in nails.','drive in'],['A spanner tightens nuts.','tighten']].map((x,i)=>`<g data-tip="${x[1]}: ${x[0]}"><rect x="30" y="${50+i*62}" width="300" height="48" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,80+i*62,x[0],{fs:15,w:700})}</g>`).join('')}`,'أفعال الأدوات'),cap:'أربع أدوات وأفعالها. مرّر المؤشر على كل منها.',labs:[LAB32B,{title:'فعل الأداة',w:(el,B)=>N.gaps(el,B,{intro:'اختر الفعل:',items:[{s:'Scissors ___ paper.',o:['cut','cuts'],a:0,why:'scissors جمع.'},{s:'A screwdriver ___ screws.',o:['drives in','drive in'],a:0},{s:'Pliers ___ wire.',o:['grip','grips'],a:0}]})}]},
 {t:'السؤال عن العمل والدراسة',short:'What do you do?',q:'كيف تسأل عن عمل زميلك إدوارد؟',ref:'ص 23',
  lead:`نستعمل المضارع البسيط أيضاً للكلام عن عمل الشخص ودراسته، لأنهما شيء ثابت.`,
  points:[`${e('What do you do?')} = ما عملك؟ والجواب ${e("I'm a mechanic.")}`,`${e('Where do you work?')} والجواب ${e('I work at a car company.')}`,`عن شخص آخر نستعمل ${e('does')}: ${e('What does Edward do?')} والجواب ${e('He studies at the technical college.')}`],
  html:dl([['A','What do you do?'],['B',"I'm a mechanic."],['A','Where do you work?'],['B','I work at a car company in Liverpool.'],['A','What does Edward do?'],['B',"He's a student. He studies at the technical college."]]),
  labs:[LAB32C]}
 ]});
B.lesson({
 id:'u3-l2',unit:3,order:2,pages:'22–23',
 title:'Functions — الوظائف',
 summary:'مصادر الطاقة الكهربائية (mains، solar، dynamo، batteries)، وأجزاء راديو الطوارئ ووظائفها، والمضارع البسيط مع he/she/it بإضافة s (It measures temperature)، والسؤال والنفي بـ does / doesn\'t، وأفعال الأدوات (cut، grip، drive in، tighten، loosen)، والسؤال عن العمل.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 22–23',html:`<p>تصف ماذا يفعل كل جزء في جهاز. ستتعلم:</p><ol><li>مصادر الطاقة الكهربائية.</li><li>أجزاء جهاز ووظيفة كل جزء.</li><li>المضارع البسيط: ${e('It measures temperature.')}</li><li>أفعال الأدوات، والسؤال عن العمل.</li></ol>`},
  ...R32.theory,
  {h:'تمارين الكتاب',ref:'ص 22–23',html:
   bk(1,'ص 22','طابق مصادر الطاقة مع الصور.',['A → 4 batteries','B → 1 mains electricity + AC adapter','C → 2 solar power','D → 3 dynamo'])+
   bk(2,'ص 22','سمِّ أجزاء راديو الطوارئ بكلمات الصندوق.',['1 clock (مثال)','الكلمات: alarm, antenna, compass, handle, thermometer, torch'],'مواقع الأرقام حسب صورة الكتاب.')+
   bk(3,'ص 22','استمع وكرّر.',null)+bk(4,'ص 22','اقرأ الوصف وتحقق من إجاباتك.',null)+
   bk(5,'ص 22','اشرح وظيفة كل جزء.',['The AC adapter connects the mains electricity supply to the radio.','The handle turns the dynamo.','The dynamo produces electricity and charges the internal battery.','The solar panel changes the Sun\'s energy into electricity and charges the internal battery.'])+
   bk(6,'ص 23','طابق الأجزاء مع وظائفها.',['1 g','2 e','3 a','4 d','5 h','6 b','7 c','8 f'])+
   bk(7,'ص 23','كوّن جملاً من التمرين 6.',['The thermometer measures temperature. (مثال)','The compass finds North.','The torch shines a light.','The clock tells the time.','The alarm makes a loud noise.','The solar panel makes electricity.','The handle turns the dynamo.','The antenna receives radio signals.'])+
   bk(8,'ص 23','مع زميلك: اسأل وأجب بكلمات التمرين 6 (Does a thermometer measure time?).',null)+
   bk(9,'ص 23','طابق الصور مع الأفعال.',['3 grip','4 cut','5 drive in','1 و 2: tighten / loosen حسب الصورة'],'من قراءتنا للصور.')+
   bk(10,'ص 23','كوّن جملاً من الجدول.',['A spanner tightens and loosens nuts and bolts.','Pliers grip bolts and wire.','A screwdriver drives in screws.','A chisel cuts wood.','Scissors cut paper and string.','A saw cuts wood and metal.','Hammers drive in nails.'])+
   bk(11,'ص 23','اكتب قائمة بأسماء وظائف تفيدك.',null)+
   bk(12,'ص 23','اسأل زملاءك عن أعمالهم ودراستهم.',null)},
  {h:'الاستماع',ref:'ص 22',html:au(24,'ص 22 — التمرين 3','أجزاء راديو الطوارئ.')}
 ],
 stations:[
  {intro:true},
  ...R32.stations,
  {recap:['الوظيفة بالمضارع البسيط: The compass finds North.','مع he / she / it نضيف s: works, measures, watches, studies.','السؤال والنفي: Do / Does و don\'t / doesn\'t، والفعل بعدها بلا s.','pliers و scissors جمع: Pliers grip wire.','What do you do? — I\'m a mechanic. What does Edward do?']}
 ],
 lab:lab32,
 examples:[
  {title:'مثال 1: وظيفة جزء',ref:'ص 23',q:`<p>اكتب وظيفة الكشاف (torch).</p>`,given:[],solve:()=>[{t:`الخطوة 1: الوظيفة: يضيء = ${e('shine a light')}.`},{t:`الخطوة 2: مع it نضيف s: ${e('shines')}.`},{t:`الخطوة 3: ${e('The torch shines a light.')}`,final:true}]},
  {title:'مثال 2: سؤال ونفي',ref:'ص 23',q:`<p>اسأل هل الساعة تقيس الحرارة، وأجب بالنفي مع التصحيح.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Does the clock measure temperature?')}`},{t:`الخطوة 2: ${e("No, it doesn't.")}`},{t:`الخطوة 3: ${e('It tells the time.')}`,final:true}]},
  {title:'مثال 3: أداة وفعلها',ref:'ص 23',q:`<p>اكتب جملة عن المنشار والخشب والمعدن.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الفعل ${e('cut')}.`},{t:`الخطوة 2: a saw مفرد فنضيف s: ${e('cuts')}.`},{t:`الخطوة 3: ${e('A saw cuts wood and metal.')}`,final:true}]}
 ],
 quiz:[
  {q:'The thermometer ___ temperature.',o:['measures','measure','measuring','is measure'],c:0,e:'مع it نضيف s.'},
  {q:'___ the compass find North?',o:['Does','Do','Is','Has'],c:0,e:'Does + it.'},
  {q:"No, it ___. It tells the time.",o:["doesn't","don't","isn't","not"],c:0,e:"No, it doesn't."},
  {q:'المكوّن الذي يحوّل طاقة الشمس إلى كهرباء:',o:['solar panel','dynamo','antenna','torch'],c:0,e:'solar panel.'},
  {q:'Pliers ___ wire.',o:['grip','grips','gripping','is grip'],c:0,e:'pliers جمع: grip.'},
  {q:'internal ضدها:',o:['external','inside','under','middle'],c:0,e:'internal ≠ external.'}
 ]
});

/* ========== 3.3 Locations ========== */
const GRID=[['top left','top centre','top right'],['centre left','centre','centre right'],['bottom left','bottom centre','bottom right']];
const posPhrase=(r,c)=>{const v=['at the top','in the middle','at the bottom'][r],h=['on the left','in the centre','on the right'][c];if(r===1&&c===1)return 'in the centre';return `${v}${c===1?(r===1?'':', in the middle'):', '+h}`.replace('in the middle, on','in the middle, on')};
function lab33(el,B){kcss();
 const ITEMS=['the printer','the scanner','the mouse','the screen','the speaker','the keyboard'];
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">أين الشيء؟</h3><p class="sub">مبني على «Language» ص 24 والتمرين 6 ص 25. اضغط مربعاً لتضع الشيء فيه، وشاهد الجملة.</p>
  <select class="ph-sel" id="it">${ITEMS.map(x=>`<option>${x}</option>`).join('')}</select>
  <div id="gr" style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px;direction:ltr">${GRID.flat().map((g,i)=>`<button type="button" class="btn" data-g="${i}" style="min-height:52px">${g}</button>`).join('')}</div><div id="o" style="margin-top:10px"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">on the left أم to the left of؟</h3><p class="sub">مبني على التمرين 5 ص 25. اختر شيئين ومكان الأول بالنسبة للثاني.</p>
  <div class="ph-row"><select class="ph-sel" id="a">${ITEMS.map(x=>`<option>${x}</option>`).join('')}</select><select class="ph-sel" id="rel">${['to the left of','to the right of','above','below'].map(x=>`<option>${x}</option>`).join('')}</select><select class="ph-sel" id="b">${ITEMS.map((x,i)=>`<option ${i===3?'selected':''}>${x}</option>`).join('')}</select></div><div id="ro"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ضع الطابعة أعلى اليسار: لماذا <span class="en">at</span> مع <span class="en">top</span> و <span class="en">on</span> مع <span class="en">left</span>؟</li><li>ما الفرق بين <span class="en">on the left</span> و <span class="en">to the left of the screen</span>؟</li><li>صِف مكان ثلاثة أشياء على مكتبك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const PH=['at the top, on the left','at the top, in the middle','at the top, on the right','in the middle, on the left','in the centre','in the middle, on the right','at the bottom, on the left','at the bottom, in the middle','at the bottom, on the right'];
 let sel=0;const sh=()=>{el.querySelectorAll('[data-g]').forEach(b=>b.classList.toggle('pri',+b.dataset.g===sel));$('#o').innerHTML=eb(`${cap($('#it').value)} is ${PH[sel]}.`)};
 el.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{sel=+b.dataset.g;sh()});$('#it').addEventListener('input',sh);sh();
 const rel=()=>{const a=$('#a').value,b=$('#b').value;$('#ro').innerHTML=a===b?'<p class="sub">اختر شيئين مختلفين.</p>':eb(`${cap(a)} is ${$('#rel').value} ${b}.`)};
 ['a','rel','b'].forEach(k=>$('#'+k).addEventListener('input',rel));rel();
}
const R33=N.rule({title:'وصف المكان: at و on و in، و to the left of',ref:'ص 24–25',
 intro:`في هذا الدرس تصف مكان الأزرار على الشاشة ومكان الأشياء في الغرفة. نبدأ بالمواقع التسعة في أي مساحة، ثم المكان بالنسبة لشيء آخر.`,
 parts:[
 {t:'المواقع التسعة',short:'at / on / in',old:[1],q:'لماذا نقول at the top لكن on the left؟',ref:'ص 24',
  lead:`أي مساحة (شاشة، لوحة، جدار) نقسمها إلى تسعة مواقع. ولكل جهة حرف جر ثابت معها، فاحفظها مع حرفها.`,
  points:[`${e('at')} مع ${e('the top')} و ${e('the bottom')}: ${e('at the top')}`,`${e('on')} مع ${e('the left')} و ${e('the right')}: ${e('on the right')}`,`${e('in')} مع ${e('the middle')} و ${e('the centre')}: ${e('in the centre')}`,
   `<b>نجمع الاتجاهين</b> بفاصلة: ${e('The START button is at the bottom, on the left.')}`,`${e('middle = centre')}. والبريطانية تكتب ${e('centre')} والأمريكية ${e('center')}.`],
  grid:{head:['حرف الجر','مع','المعنى'],rows:[['at','the top · the bottom','أعلى / أسفل'],['on','the left · the right','يسار / يمين'],['in','the middle · the centre','الوسط']]},
  pairs:[['in the top','at the top','مع top و bottom نستعمل at.'],['in the left','on the left','مع left و right نستعمل on.']],
  art:art(`${GRID.map((row,r)=>row.map((g,c)=>`<g data-tip="${['at the top','in the middle','at the bottom'][r]}${c===1?(r===1?'':''):', '+['on the left','','on the right'][c]}${r===1&&c===1?' = in the centre':''}"><rect x="${54+c*86}" y="${44+r*80}" width="80" height="74" rx="10" fill="${r===0&&c===2?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(94+c*86,86+r*80,g.replace('centre','ctr'),{fs:11,w:700})}</g>`).join('')).join('')}`,'تسعة مواقع'),cap:'تسعة مواقع على شاشة. الأصفر: at the top, on the right. مرّر المؤشر على كل مربع.',labs:[LAB33A,{title:'حرف الجر',w:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:"It's ___ the top.",o:['at','on'],a:0},{s:"It's ___ the left.",o:['on','at'],a:0},{s:"It's ___ the middle.",o:['in','on'],a:0}]})}]},
 {t:'المكان بالنسبة لشيء آخر',short:'to the left of',old:[2],q:'ما الفرق بين on the left و to the left of؟',ref:'ص 25',
  lead:`أحياناً لا نصف المكان في المساحة كلها، بل بالنسبة لشيء آخر: الساعة يسار النافذة، والرف فوق الطاولة.`,
  points:[`${e('on the left')} = في الجهة اليسرى من المكان كله: ${e('The clock is on the left.')}`,`${e('to the left of')} = يسار شيء محدد، ونذكر الشيء بعدها: ${e('The clock is to the left of the window.')}`,`${e('above')} فوق، و ${e('below')} تحت: ${e('The shelf is above the desk.')}`],
  grid:{head:['English','المعنى'],rows:[['above','فوق'],['below','تحت'],['to the left of','يسار …'],['to the right of','يمين …']]},
  pairs:[['The clock is on the left of the window.','The clock is to the left of the window.','مع شيء محدد: to the left of.']],
  art:art(`<rect x="140" y="110" width="80" height="80" fill="${C.blue}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,156,'screen',{fs:12,w:700,c:'#fff'})}
    <g data-tip="above the screen — فوق الشاشة"><circle cx="180" cy="66" r="18" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,40,'above',{fs:11,w:700})}</g>
    <g data-tip="below the screen — تحت الشاشة"><circle cx="180" cy="232" r="18" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,272,'below',{fs:11,w:700})}</g>
    <g data-tip="to the left of the screen — يسار الشاشة"><circle cx="96" cy="150" r="18" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(70,190,'to the left of',{fs:11,w:700})}</g>
    <g data-tip="to the right of the screen — يمين الشاشة"><circle cx="264" cy="150" r="18" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(290,190,'to the right of',{fs:11,w:700})}</g>`,'above below to the left of'),cap:'أربعة مواقع حول الشاشة. مرّر المؤشر على كل منها.',labs:[LAB33B,{title:'أي عبارة؟',w:(el,B)=>N.cases(el,B,{intro:'اختر:',cases:[{q:'The mouse is ___ the keyboard. (يمينها)',opts:[['to the right of',1],['on the right',0]]},{q:'The printer is ___. (على الرف كله، يسار)',opts:[['on the left',1],['to the left of',0]]},{q:'The clock is ___ the door. (فوقه)',opts:[['above',1],['below',0]]}]})}]}
 ]});
B.lesson({
 id:'u3-l3',unit:3,order:3,pages:'24–25',
 title:'Locations — المواقع',
 summary:'تحديد مكان الأشياء على الشاشة أو الرف: at the top / at the bottom، on the left / on the right، in the middle / in the centre، والمكان بالنسبة لشيء آخر: to the left of، to the right of، above، below.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 24–25',html:`<p>تصف مكان شيء على الشاشة أو في الورشة. ستتعلم:</p><ol><li>${e('at the top / at the bottom')}.</li><li>${e('on the left / on the right')}.</li><li>${e('in the middle / in the centre')}.</li><li>المكان بالنسبة لشيء آخر: ${e('to the left of, above, below')}.</li></ol>`},
  ...R33.theory,
  {h:'تمارين الكتاب',ref:'ص 24–25',html:
   bk(1,'ص 24','استمع إلى درس الحاسوب وأكمل الحوار بكلمات الصندوق.',['at · bottom · left','on · right · top'])+
   bk(2,'ص 24','طابق الشاشات مع مواقعها.',['1 G','2 I','3 H','4 D','5 F','6 B','7 A','8 C','9 E'])+
   bk(3,'ص 24','صحّح الوصف: فيه ستة أخطاء في المواقع.',['scanner: at the top on the right','computer: at the top on the left','DVD drive: at the bottom on the left','printer: at the top in the middle','keyboard: at the bottom in the middle','mouse: at the bottom on the right'])+
   bk(4,'ص 25','صح أم خطأ؟',['1 T','2 T','3 T'])+
   bk(5,'ص 25','متى نستعمل ON the left ومتى TO the left OF؟',['on the left: مكان في المنطقة كلها (الشاشة، الرف).','to the left of: مكان بالنسبة لشيء آخر.'])+
   bk(6,'ص 25','أكمل الجمل بكلمات الصندوق.',['1 at the top, in the middle · to the right of · below','2 at the bottom, on the right · to the left of · above'])+
   bk(7,'ص 25','كوّن جملاً عن مواقع الأشياء.',['The mouse is at the bottom, on the right.','The DVD drive is at the bottom, on the left.','The scanner is at the top, on the right.','The screen is in the middle (in the centre).'])+
   bk(8,'ص 25','مهمة ثنائية: اسأل زميلك أين الأشياء وضعها في مكانها على الرفوف.',null,'معلومات الطالب أ في ص 113 من الكتاب.')},
  {h:'الاستماع',ref:'ص 24',html:au(25,'ص 24 — التمرين 1','درس حاسوب: مكان الأزرار على الشاشة.')}
 ],
 stations:[
  {intro:true},
  ...R33.stations,
  {recap:['at the top / at the bottom.','on the left / on the right.','in the middle = in the centre.','on the left (في المكان كله) ≠ to the left of (بالنسبة لشيء).','above فوق، below تحت.']}
 ],
 lab:lab33,
 examples:[
  {title:'مثال 1: مكان زر',ref:'ص 24',q:`<p>زر الحفظ في أسفل الشاشة يميناً. صِف مكانه.</p>`,given:[],solve:()=>[{t:`الخطوة 1: أسفل: ${e('at the bottom')}.`},{t:`الخطوة 2: يمين: ${e('on the right')}.`},{t:`الخطوة 3: ${e("It's at the bottom, on the right.")}`,final:true}]},
  {title:'مثال 2: بالنسبة لشيء',ref:'ص 25',q:`<p>السماعة يسار الشاشة. اكتب جملة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: بالنسبة لشيء آخر فنستعمل ${e('to the left of')}.`},{t:`الخطوة 2: الشيء الآخر: ${e('the screen')}.`},{t:`الخطوة 3: ${e('The speaker is to the left of the screen.')}`,final:true}]},
  {title:'مثال 3: الوسط',ref:'ص 24',q:`<p>الشاشة في وسط الرف. اكتب جملة.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الوسط ${e('middle')} أو ${e('centre')}.`},{t:`الخطوة 2: حرف الجر ${e('in')}.`},{t:`الخطوة 3: ${e('The screen is in the centre.')}`,final:true}]}
 ],
 quiz:[
  {q:"It's ___ the bottom.",o:['at','on','in','to'],c:0,e:'at the bottom.'},
  {q:"It's ___ the right.",o:['on','at','in','of'],c:0,e:'on the right.'},
  {q:'middle =',o:['centre','top','side','corner'],c:0,e:'middle = centre.'},
  {q:'The mouse is to the right ___ the keyboard.',o:['of','on','at','in'],c:0,e:'to the right of.'},
  {q:'below معناها:',o:['تحت','فوق','يمين','يسار'],c:0,e:'below = تحت.'},
  {q:'center هي الكتابة:',o:['الأمريكية','البريطانية','الخاطئة','القديمة'],c:0,e:'AmE center, BrE centre.'}
 ]
});
})(PLCBOOK);

/* الوحدة 8 — Getting around: Part A Getting around town (ص 38–39) · Part B Arriving for an appointment (ص 40–41)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};

/* ========== 8A Getting around town ========== */
/* مدينة صغيرة: شبكة 5×4 تقاطعات، والأماكن على جوانب الشوارع */
const PL={bank:{x:2,y:1,n:'the bank'},cafe:{x:3,y:2,n:'the café'},office:{x:3,y:3,n:'our office'},mosque:{x:1,y:3,n:'the mosque'},hotel:{x:0,y:0,n:'the hotel'}};
const DIRV=[[0,-1],[1,0],[0,1],[-1,0]],DN=['north','east','south','west'];
function lab8a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">اتبع التعليمات</h3><p class="sub">مدينة من رسمنا، مبني على التمرينين 2 و 3 ص 38–39. ابدأ من المحطة (S)، واصل إلى المكان المطلوب بالأزرار.</p>
  <div class="ph-row"><select class="ph-sel" id="tg">${Object.keys(PL).map(k=>`<option value="${k}">${PL[k].n}</option>`).join('')}</select><button type="button" class="btn" id="rs">من البداية</button></div>
  <div id="sv" style="max-width:380px;margin:8px auto"></div>
  <div class="ph-row"><button type="button" class="btn" data-a="L">↰ turn left</button><button type="button" class="btn pri" data-a="F">↑ go straight on</button><button type="button" class="btn" data-a="R">turn right ↱</button></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">تعليماتك</h3><div id="ins"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اذهب إلى البنك بأقل عدد من الخطوات.</li><li>ما الفرق بين <span class="en">turn left</span> و <span class="en">take the second left</span>؟</li><li>اكتب تعليمات من بوابة الكلية إلى صفّك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let p,dir,steps,blk;
 const reset=()=>{p={x:2,y:4};dir=0;steps=[];blk=0;draw()};
 const flush=()=>{if(blk){steps.push(blk===1?'Go straight on for one block.':`Go straight on for ${blk} blocks.`);blk=0}};
 const near=()=>{const t=PL[$('#tg').value];return Math.abs(t.x+0.5-p.x)<=0.5&&Math.abs(t.y+0.5-p.y)<=0.5};
 const draw=()=>{const G=70,O=20;let s=`<rect width="380" height="340" fill="#eef1ea" rx="10"/>`;
  for(let i=0;i<=4;i++)s+=`<line x1="${O+i*G}" y1="${O}" x2="${O+i*G}" y2="${O+4*G}" stroke="#c9c2b0" stroke-width="12"/>`;for(let j=0;j<=4;j++)s+=`<line x1="${O}" y1="${O+j*G}" x2="${O+4*G}" y2="${O+j*G}" stroke="#c9c2b0" stroke-width="12"/>`;
  Object.entries(PL).forEach(([k,v])=>{const on=k===$('#tg').value;s+=`<rect x="${O+v.x*G+14}" y="${O+v.y*G+14}" width="${G-28}" height="${G-28}" rx="6" fill="${on?C.yel:C.paper}" stroke="${C.ink}" stroke-width="${on?3:1.5}"/>${TL(O+v.x*G+G/2,O+v.y*G+G/2+4,v.n.replace(/^(the|our) /,''),{fs:10,w:700})}`});
  s+=`<rect x="${O+2*G-14}" y="${O+4*G+8}" width="28" height="20" fill="${C.red}"/>${TL(O+2*G,O+4*G+23,'S',{fs:12,w:700,c:'#fff'})}`;
  const cx=O+p.x*G,cy=O+p.y*G;s+=`<g transform="translate(${cx} ${cy}) rotate(${dir*90})"><polygon points="0,-13 10,9 0,4 -10,9" fill="${C.blue}" stroke="${C.ink}"/></g>`;
  $('#sv').innerHTML=`<svg viewBox="0 0 380 340" style="width:100%">${s}</svg>`;
  const t=PL[$('#tg').value];$('#ins').innerHTML=eb(['Come out of the station.',...steps,...(blk?[blk===1?'Go straight on for one block.':`Go straight on for ${blk} blocks.`]:[])])+(near()?eb(`You'll see ${t.n} on the ${(()=>{const dx=t.x+0.5-p.x,dy=t.y+0.5-p.y,[fx,fy]=DIRV[dir];const cr=fx*dy-fy*dx;return cr>0?'right':'left'})()}.`)+'<p class="sub">✔ وصلت!</p>':'')};
 el.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const a=b.dataset.a;$('#o').innerHTML='';
  if(a==='F'){const nx=p.x+DIRV[dir][0],ny=p.y+DIRV[dir][1];if(nx<0||nx>4||ny<0||ny>4){$('#o').innerHTML='<p class="sub" style="color:var(--red)">نهاية الشارع؛ انعطف.</p>';return}p={x:nx,y:ny};blk++}
  else{flush();dir=(dir+(a==='R'?1:3))%4;steps.push(a==='R'?'Turn right.':'Turn left.')}draw()});
 $('#rs').onclick=reset;$('#tg').addEventListener('input',reset);reset();
}
/* ===== مختبرات «شرح القاعدة» الوحدة 8 ===== */
const DR8={l:['Turn left.','انعطف يساراً','l'],r:['Turn right.','انعطف يميناً','r'],s:['Go straight on for ten minutes.','امشِ مباشرة','s'],t2:['Take the second right.','خذ الشارع الثاني يميناً','t2'],op:["It's opposite the bank.",'مقابل البنك','op'],see:["You'll see our office on the left.",'سترى المكتب على اليسار','see']};
const st8=k=>{const road='<rect x="150" y="10" width="60" height="200" fill="#ddd"/>',ar=(d)=>d;let g='';
 if(k==='l')g=road+'<rect x="20" y="70" width="140" height="50" fill="#ddd"/>'+AR8(180,190,180,95)+AR8(180,95,60,95);
 else if(k==='r')g=road+'<rect x="200" y="70" width="140" height="50" fill="#ddd"/>'+AR8(180,190,180,95)+AR8(180,95,300,95);
 else if(k==='s')g=road+AR8(180,200,180,25);
 else if(k==='t2')g=road+'<rect x="200" y="140" width="140" height="30" fill="#ddd"/><rect x="200" y="50" width="140" height="30" fill="#ddd"/><text x="260" y="160" font-size="11" text-anchor="middle">1st</text><text x="260" y="70" font-size="11" text-anchor="middle">2nd</text>'+AR8(180,200,180,65)+AR8(180,65,320,65);
 else if(k==='op')g=road+'<rect x="60" y="80" width="80" height="60" fill="#cfe6f7" stroke="#555"/><text x="100" y="115" font-size="12" text-anchor="middle">bank</text><rect x="220" y="80" width="80" height="60" fill="#f3e3c1" stroke="#d2452f" stroke-width="3"/><text x="260" y="115" font-size="12" text-anchor="middle">office</text>';
 else g=road+'<rect x="60" y="40" width="80" height="60" fill="#f3e3c1" stroke="#d2452f" stroke-width="3"/><text x="100" y="75" font-size="12" text-anchor="middle">office</text>'+AR8(180,200,180,40);
 return `<svg viewBox="0 0 360 220" width="300">${g}</svg>`};
const AR8=(x1,y1,x2,y2)=>{const a=Math.atan2(y2-y1,x2-x1),p=t=>[x2-12*Math.cos(a+t),y2-12*Math.sin(a+t)].map(v=>v.toFixed(1)).join(',');return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1f5fd1" stroke-width="6" stroke-linecap="round"/><polygon points="${x2},${y2} ${p(.5)} ${p(-.5)}" fill="#1f5fd1"/>`};
const LAB181A={title:'تعليمات الاتجاه',w:(el,B)=>N.labB(el,B,{intro:'اختر التعليمة، وشاهد الرسم والجملة.',
 controls:[{k:'d',label:'التعليمة',opts:Object.keys(DR8).map(k=>[k,DR8[k][1]])}],
 out:({d})=>{const [a,ar]=DR8[d];return{svg:st8(d),pieces:[[a,'n',ar]],say:a,why:`التعليمة تبدأ بالفعل: ${e('Turn · Take · Go')}. و ${e('opposite')} = مقابل، و ${e('on the left')} = على اليسار.`}}})};
const MT8={line:['Take the Red line','northbound.','خذ الخط','باتجاه الشمال'],chg:['Change at Central station','for the Green line.','غيّر في','للخط الأخضر'],off:['Get off at','King Fahd Road.','انزل في','اسم المحطة'],stop:["It's the",'second stop.','هي','المحطة الثانية']};
const LAB181B={title:'المترو والقطار',w:(el,B)=>N.labB(el,B,{intro:'اختر الخطوة في رحلة المترو، وشاهد العبارة.',
 controls:[{k:'s',label:'الخطوة',opts:[['line','1 الخط'],['chg','2 التغيير'],['off','3 النزول'],['stop','4 عدد المحطات']]}],
 out:({s})=>{const [a,b,x,y]=MT8[s];return{pieces:[[a,'k',x],[b,'n',y]],say:`${a} ${b}`,why:`${e('northbound')} باتجاه الشمال، و ${e('change at')} غيّر في، و ${e('get off at')} انزل في. وللتحقق كرر التعليمات: ${e('So, I need the Red line northbound …')}`}}})};
const TR8={train:['by','train'],bus:['by','bus'],car:['by','car'],foot:['on','foot']};
const LAB181C={title:'by train أم on foot؟',w:(el,B)=>N.labB(el,B,{intro:'اختر وسيلة الوصول، وشاهد حرف الجر.',
 controls:[{k:'t',label:'الوسيلة',opts:[['train','القطار'],['bus','الحافلة'],['car','السيارة'],['foot','مشياً']]}],
 out:({t})=>{const [p,w]=TR8[t];return{pieces:[['I go to work','x',''],[p,'k',p==='on'?'استثناء':'مع الوسائل'],[w+'.','n','بلا the']],say:`I go to work ${p} ${w}.`,why:`${e('by')} مع وسائل النقل بلا ${e('the')}: ${e('by train · by car')}، لكن ${e('on foot')} سيراً على الأقدام.`}}})};
const LAB182A={title:'في الاستقبال',w:(el,B)=>N.labB(el,B,{intro:'اختر الزائر، ثم السطر، وشاهد ما يقوله الزائر وما يرد به موظف الاستقبال.',
 controls:[{k:'v',label:'الزائر',opts:VIS.slice(0,2).map((v,i)=>[String(i),v.nm])},{k:'s',label:'السطر',opts:[['1','التعريف'],['2','سبب الزيارة'],['3','الموعد'],['4','الانتظار']]}],
 out:({v,s})=>{const V=VIS[+v],to=V.to,he=/^Ms/.test(to)?'She':'He',him=he==='She'?'her':'him';
  const L={1:[`Good morning. My name's ${V.nm} from ${V.co}.`,'الزائر','Can I help you?','الموظف'],2:[`I'm here to see ${to}.`,'الزائر','What department is that?','الموظف'],3:[`I have an appointment at ${V.ap}.`,'الزائر',`One moment, please. I'll call ${to}.`,'الموظف'],4:['Thank you.','الزائر',`Please take a seat. ${he}'ll be down in a moment.`,'الموظف']}[s];
  return{pieces:[[L[0],'q',L[1]],[L[2],'n',L[3]]],say:`${L[0]} ${L[2]}`,why:s==='4'?`${e("He'll be down")} = سينزل من مكتبه.`:`${e("I'm here to see …")} = جئت لأقابل …، و ${e("I'll")} للوعد.`}}})};
const HM8={hi:["Hello. I'm Tony Shaw.",'Hello. Paul Grant. Nice to meet you.','التعارف'],card:["Here's my business card.","Oh, thank you. Here's mine.",'تبادل البطاقات'],jr:['Did you have a good journey?','Yes, thank you. It was fine.','السؤال عن الرحلة'],th:['Thank you for coming.',"You're welcome.",'الشكر']};
const LAB182B={title:'لقاء المضيف',w:(el,B)=>N.labB(el,B,{intro:'اختر خطوة اللقاء، وشاهد العبارة والرد.',
 controls:[{k:'s',label:'الخطوة',opts:Object.keys(HM8).map(k=>[k,HM8[k][2]])}],
 out:({s})=>{const [a,b]=HM8[s];return{pieces:[[a,'q',''],[b,'n','الرد']],say:`${a} ${b}`,why:s==='card'?`${e('mine')} = بطاقتي، بدل أن نكرر ${e('my card')}.`:s==='th'?`${e("You're welcome.")} = العفو.`:`${e('Did you …?')} سؤال عن الماضي.`}}})};
const R181=N.rule({title:'السؤال عن الطريق والاتجاهات، والمترو والقطار',ref:'ص 38–39',
 intro:`في هذا الدرس تسأل عن الطريق إلى مكان في المدينة، وتصف الطريق لزائر. نشرح عبارات الاتجاه، ثم عبارات المترو والقطار ووسائل النقل.`,
 parts:[
 {t:'السؤال والاتجاهات',short:'Turn left · Go straight on',old:[1],q:'كيف تصف لزائر طريق المتحف؟',ref:'ص 38',
  lead:`وصف الطريق سلسلة تعليمات قصيرة تبدأ بالفعل، ثم معلم يراه الزائر.`,
  points:[`<b>السؤال:</b> ${e('How do I get to the National Museum?')}`,`<b>التعليمات:</b> ${e('Turn left / right.')} و ${e('Take the second right.')} و ${e('Go straight on for ten minutes.')}`,`<b>المعلم:</b> ${e("You'll see our office on the left.")} و ${e("It's opposite the bank.")}`,`<b>المسافة:</b> ${e("It's a twenty-minute walk.")} (${e('minute')} بلا ${e('s')} لأنها صفة هنا)`],
  html:vt([['How do I get to the National Museum?','كيف أصل إلى …؟'],['Turn left / right.','انعطف يساراً / يميناً'],['Take the second right.','خذ الشارع الثاني يميناً'],['Go straight on for ten minutes.','امشِ مباشرة'],["You'll see our office on the left.",'سترى … على اليسار'],["It's opposite the bank.",'مقابل البنك'],["It's a twenty-minute walk, or you can take a taxi.",'مشي عشرين دقيقة']],['English','المعنى']),
  pairs:[["It's a twenty-minutes walk.","It's a twenty-minute walk.",'قبل الاسم بلا s.']],
  art:art(`<line x1="180" y1="270" x2="180" y2="40" stroke="#c9c2b0" stroke-width="22"/><line x1="40" y1="140" x2="320" y2="140" stroke="#c9c2b0" stroke-width="22"/><line x1="40" y1="70" x2="320" y2="70" stroke="#c9c2b0" stroke-width="22"/>
    <g data-tip="Go straight on = امشِ مباشرة"><polygon points="180,250 192,226 168,226" fill="${C.blue}"/>${TL(240,240,'go straight on',{fs:12,w:700})}</g>
    <g data-tip="the first right = أول شارع يميناً">${TL(270,130,'first right',{fs:12,w:700})}</g>
    <g data-tip="the second left = ثاني شارع يساراً">${TL(90,60,'second left',{fs:12,w:700})}</g>
    <g data-tip="opposite the bank = مقابل البنك"><rect x="200" y="86" width="60" height="36" fill="${C.yel}" stroke="${C.ink}"/>${TL(230,108,'bank',{fs:11,w:700})}<rect x="100" y="86" width="60" height="36" fill="${C.paper}" stroke="${C.ink}"/>${TL(130,108,'office',{fs:11,w:700})}</g>`,'اتجاهات'),cap:'شوارع من رسمنا. مرّر المؤشر على العبارات.',labs:[LAB181A,{title:'الاتجاهات',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'How do I ___ to the station?',o:['get','go'],a:0},{s:'___ the second right.',o:['Take','Get'],a:0},{s:'Go ___ on for five minutes.',o:['straight','right'],a:0},{s:"The office is ___ the bank.",o:['opposite','straight'],a:0}]})}]},
 {t:'المترو والقطار ووسائل النقل',short:'northbound · by train',old:[2],q:'ما الفرق بين by car و on foot؟',ref:'ص 38–39',
  lead:`في المترو تحتاج أن تعرف الخط واتجاهه، وأين تغيّر، وأين تنزل.`,
  points:[`${e('Take the Red line northbound.')} خذ الخط الأحمر باتجاه الشمال.`,`${e('Change at Central station for the Green line.')} و ${e('Get off at King Fahd Road.')}`,`${e("It's the second stop.")} و ${e('The next train is from platform five.')}`,
   `<b>وسيلة النقل:</b> ${e('by train / by bus / by car')} بلا ${e('the')}، لكن ${e('on foot')} سيراً على الأقدام.`,`للتحقق كرّر التعليمات: ${e('So, I need the Red line northbound and then …')}`],
  html:vt([['Take the Red line northbound.','خذ الخط الأحمر باتجاه الشمال'],['Change at Central station for the Green line.','غيّر في محطة …'],['Get off at King Fahd Road.','انزل في …'],["It's the second stop.",'المحطة الثانية'],['The next train is from platform five.','الرصيف رقم …']],['English','المعنى']),
  pairs:[['by the train','by train','مع by بلا the.'],['by foot','on foot','سيراً: on foot.']],
  art:art(`<line x1="40" y1="230" x2="320" y2="60" stroke="${C.red}" stroke-width="10"/><line x1="40" y1="80" x2="320" y2="220" stroke="${C.grn}" stroke-width="10"/>
    ${[[40,230,'Start'],[180,145,'Central'],[320,220,'Museum']].map(x=>`<g data-tip="${x[2]==='Central'?'change at Central = غيّر الخط هنا':x[2]==='Start'?'take the Red line = خذ الخط الأحمر':'get off at Museum = انزل هنا'}"><circle cx="${x[0]}" cy="${x[1]}" r="12" fill="#fff" stroke="${C.ink}" stroke-width="3"/>${TL(x[0],x[1]-18,x[2],{fs:12,w:700})}</g>`).join('')}`,'المترو'),cap:'خطان من رسمنا. مرّر المؤشر على كل محطة.',labs:[LAB181B,LAB181C,{title:'المترو',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Take the Red line and ___ at Central.',o:['change','get to'],a:0},{s:'Then ___ the Green line.',o:['take','turn'],a:0},{s:'___ off at Museum.',o:['Get','Go'],a:0}]})}]}
 ]});
B.lesson({
 id:'u8-l1',unit:8,order:1,pages:'38–39',
 title:'Part A: Getting around town — التنقل في المدينة',
 summary:'السؤال عن الطريق (How do I get to …?)، وإعطاء الاتجاهات بفعل الأمر (turn left، take the second right، go straight on، get off at، change at)، ووسائل النقل (by train، on foot)، وخطوط المترو (northbound، platform)، والأماكن (opposite، on the left)، والتحقق بتكرار التعليمات (So, I need …).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 38–39',html:`<p>تصف الطريق إلى مكتبك، وتفهم وصف طريق. ستتعلم:</p><ol><li>${e('How do I get to …?')}</li><li>أفعال الاتجاهات.</li><li>المترو والمحطات.</li><li>التحقق بتكرار التعليمات.</li></ol>`},
  ...R181.theory,
  {h:'تمارين الكتاب',ref:'ص 38–39',html:
   bk(1,'ص 38','اقرأ الرسالة وجِد مبنى المكتب على الخريطة.',null,'حسب خريطة الكتاب: المبنى الرمادي ذو الاثني عشر طابقاً على اليسار بعد أول شارع يميناً.')+
   bk(2,'ص 38','أكمل الحوارين بالأفعال، ثم استمع.',['1 get to · take · change · Get off','2 get to · take · Turn · Go'])+
   bk(3,'ص 39','استمع وأكمل الملاحظات.',['1 turn left · turn right at end · Go straight on to station · line number one northbound, change at Bilbao · line number four to San Bernardo','2 turn right for centre · second turning on left – opposite big café · Office is third building on right','3 red line southbound – next train, platform five · Change at History Museum for green line · National Bank three stops · ten minutes from here'])+
   bk(4,'ص 39','نشاط ثنائي: صِف الطريق على خريطة المترو، وكرّر التعليمات للتحقق.',null,'معلومات الطالب أ في ص 80 من الكتاب.')+
   bk(5,'ص 39','صِف لزميلك الطريق من أقرب محطة إلى مكتبك أو كليتك.',null)},
  {h:'الاستماع',ref:'ص 38–39',html:au('8A-2b','ص 38 — التمرين 2b','حواران عن الطريق.')+au('8A-3','ص 39 — التمرين 3','ثلاثة أشخاص يصفون الطريق.')}
 ],
 stations:[
  {intro:true},
  ...R181.stations,
  {recap:['How do I get to …?','Turn left / right. Take the second right. Go straight on.','Take the … line northbound. Change at … Get off at …',"You'll see … on the left. It's opposite …",'So, I need …']}
 ],
 lab:lab8a,
 examples:[
  {title:'مثال 1: سؤال الطريق',ref:'ص 38',q:`<p>اسأل كيف تصل إلى المتحف الوطني.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Excuse me.')}`},{t:`الخطوة 2: ${e('How do I get to')} + المكان.`},{t:`الخطوة 3: ${e('Excuse me. How do I get to the National Museum?')}`,final:true}]},
  {title:'مثال 2: وصف الطريق',ref:'ص 38',q:`<p>اخرج من الفندق يساراً، ثم ثاني شارع يميناً، وسترى المكتب على اليمين.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Turn left out of the hotel.')}`},{t:`الخطوة 2: ${e('Take the second right.')}`},{t:`الخطوة 3: ${e("You'll see our office on the right.")}`,final:true}]},
  {title:'مثال 3: التحقق',ref:'ص 39',q:`<p>كرّر لتتحقق: الخط الأحمر شمالاً ثم التغيير في Central.</p>`,given:[],solve:()=>[{t:`الخطوة 1: نبدأ بـ ${e('So,')}`},{t:`الخطوة 2: ${e('I need the Red line northbound')}`},{t:`الخطوة 3: ${e('So, I need the Red line northbound and then I change at Central.')}`,final:true}]}
 ],
 quiz:[
  {q:'How do I ___ to the station?',o:['get','go','take','turn'],c:0,e:'get to.'},
  {q:'___ the second right.',o:['Take','Get','Go','Make'],c:0,e:'Take the second right.'},
  {q:'___ off at Oxford Circus.',o:['Get','Go','Take','Turn'],c:0,e:'get off.'},
  {q:'northbound:',o:['باتجاه الشمال','باتجاه الجنوب','محطة','رصيف'],c:0,e:'northbound.'},
  {q:'I go to work ___ foot.',o:['on','by','with','in'],c:0,e:'on foot.'},
  {q:'opposite:',o:['مقابل','بجانب','خلف','تحت'],c:0,e:'opposite.'}
 ]
});

/* ========== 8B Arriving for an appointment ========== */
const VIS=[{nm:'Edward Sullivan',co:'Red Sea Foods',to:'Ms Helen Allen',dep:'Sales',ap:'10 o’clock'},{nm:'Paul Grant',co:'Blue Line Shipping',to:'Mr Tony Shaw',dep:'Accounts',ap:'2 o’clock'},{nm:'Rachel Nick',co:'',to:'Mr Frank',dep:'IT',ap:''}];
function lab8b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">مكتب الاستقبال</h3><p class="sub">زوار من إعدادنا، مبني على التمرين 4 ص 41. اختر الزائر واكشف المحادثة.</p>
  <div class="ph-row">${VIS.map((v,i)=>`<button type="button" class="btn${i?'':' pri'}" data-v="${i}">${v.nm}</button>`).join('')}</div><div id="o"></div><div class="ph-row"><button type="button" class="btn pri" id="nx">السطر التالي</button></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">قائمة التحقق</h3><div id="ck"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ماذا يفعل الموظف إذا لم يكن للزائر موعد؟</li><li>ما معنى <span class="en">He'll be down in a moment</span>؟</li><li>كيف تقدّم بطاقة عملك؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let v=0,k=1;
 const lines=x=>[['Receptionist','Good morning. Can I help you?'],['Visitor',`Good morning. My name's ${x.nm}${x.co?' from '+x.co:''}. I'm here to see ${x.to}.`],['Receptionist',x.ap?'Do you have an appointment?':'Do you have an appointment?'],['Visitor',x.ap?`Yes, at ${x.ap}.`:"No, I don't. I'm sorry."],['Receptionist',x.ap?`One moment, please. I'll call ${x.to.split(' ').slice(0,2).join(' ')}. Please take a seat.`:`Please wait a moment. I'll check if ${x.to} is free.`],['Visitor','Thank you.'],['Receptionist',"You're welcome."]];
 const sh=()=>{el.querySelectorAll('[data-v]').forEach(b=>b.classList.toggle('pri',+b.dataset.v===v));const x=VIS[v],L=lines(x);$('#o').innerHTML=dl(L.slice(0,k));$('#nx').disabled=k>=L.length;
  $('#ck').innerHTML=vt([["visitor's name",x.nm],['company',x.co||'—'],['person to see',x.to],['department',x.dep],['appointment',x.ap||'no']],['Check','']) };
 el.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{v=+b.dataset.v;k=1;sh()});$('#nx').onclick=()=>{k++;sh()};sh();
}
const R182=N.rule({title:'في الاستقبال، ولقاء المضيف',ref:'ص 40–41',
 intro:`في هذا الدرس تصل إلى شركة لموعد. نشرح ما يقوله الزائر وموظف الاستقبال، ثم عبارات لقاء المضيف.`,
 parts:[
 {t:'في الاستقبال',short:'الاستقبال',old:[1],q:'ماذا تقول لموظف الاستقبال عند وصولك؟',ref:'ص 40',
  lead:`عند الوصول تعرّف بنفسك، وتذكر من جئت لتقابله وموعدك. وموظف الاستقبال يسأل ويتصل ويطلب منك الانتظار.`,
  points:[`<b>الزائر:</b> ${e("Good morning. My name's Edward Sullivan from Red Sea Foods.")}`,`${e("I'm here to see Ms Helen Allen.")} و ${e('I have an appointment at 2 o’clock.')}`,`<b>الموظف:</b> ${e('Do you have an appointment?')} و ${e('What department is that?')}`,`${e("One moment, please. I'll call Mr Tony.")} و ${e('Please take a seat.')}`,`${e("He'll be down in a moment.")} = سينزل من مكتبه بعد لحظة.`],
  html:vt([["Good morning. My name's Edward Sullivan from Red Sea Foods.",'التعريف'],["I'm here to see Ms Helen Allen.",'جئت لأقابل …'],["I'd like to see Mr Tony, please.",'أود مقابلة …'],['I have an appointment at 2 o’clock.','موعدي الساعة …']],['الزائر','المعنى'])+vt([['Do you have an appointment?','هل لديك موعد؟'],['What department is that?','أي قسم؟'],['Can I have your name, please?','اسمك من فضلك'],["One moment, please. I'll call Mr Tony.",'سأتصل به'],['Please take a seat.','تفضل بالجلوس'],["He'll be down in a moment.",'سينزل بعد لحظة'],["I'll tell him you're here.",'سأخبره بوصولك']],['موظف الاستقبال','المعنى']),
  art:art(`${[["Good morning. Can I help you?",'الموظف',C.paper],["I'm here to see Ms Helen.",'الزائر',C.yel],['Do you have an appointment?','الموظف',C.paper],['Yes, at 10 o’clock.','الزائر',C.yel],['Please take a seat.','الموظف',C.paper]].map((x,i)=>`<g data-tip="${x[1]}"><rect x="${x[1]==='الزائر'?60:20}" y="${26+i*52}" width="280" height="42" rx="12" fill="${x[2]}" stroke="${C.ink}" stroke-width="2"/>${TL(x[1]==='الزائر'?200:160,53+i*52,x[0],{fs:13,w:700})}</g>`).join('')}`,'الاستقبال'),cap:'حوار في الاستقبال. مرّر المؤشر لترى من يتكلم.',labs:[LAB182A,{title:'الاستقبال',w:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"I'm here to ___ Mr Tony.",o:['see','meet to'],a:0},{s:'Do you ___ an appointment?',o:['have','has'],a:0},{s:'Please ___ a seat.',o:['take','sit'],a:0},{s:"He'll be ___ in a moment.",o:['down','up to'],a:0}]})}]},
 {t:'لقاء المضيف',short:'لقاء المضيف',old:[2],q:"ماذا تقول بعد Here's my business card؟",ref:'ص 40',
  lead:`عندما ينزل المضيف تتعارفان وتتبادلان بطاقات العمل، ثم يبدأ الحديث بسؤال بسيط.`,
  points:[`<b>التعارف:</b> ${e("Hello. I'm Tony Shaw.")} والرد ${e('Hello. Paul Grant. Nice to meet you.')}`,`<b>البطاقات:</b> ${e("Here's my business card.")} والرد ${e("Oh, thank you. Here's mine.")} و ${e('mine')} = بطاقتي.`,`<b>سؤال للحديث:</b> ${e('Did you have a good journey?')}`,`${e("You're welcome.")} = العفو.`],
  html:dl([['Host',"Hello. I'm Tony Shaw."],['Visitor','Hello. Paul Grant. Nice to meet you.'],['Host','Nice to meet you, too.'],['Visitor',"Here's my business card."],['Host',"Oh, thank you. Here's mine. Did you have a good journey?"]]),
  art:art(`<g data-tip="Here's my business card. = تفضل بطاقتي"><rect x="40" y="80" width="130" height="80" rx="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(105,125,'my card',{fs:13,w:700})}</g><g data-tip="Here's mine. = وهذه بطاقتي"><rect x="190" y="80" width="130" height="80" rx="8" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(255,125,'mine',{fs:13,w:700})}</g>${TL(180,210,'Did you have a good journey?',{fs:14,w:700})}`,'business cards'),cap:'تبادل البطاقات. مرّر المؤشر على كل بطاقة.',labs:[LAB182B,{title:'اللقاء',w:(el,B)=>N.cases(el,B,{intro:'ماذا تقول؟',cases:[{q:'تقدّم بطاقتك.',opts:[["Here's my business card.",1],['Give me your card.',0]]},{q:'أخذت بطاقته وتعطيه بطاقتك.',opts:[["Thank you. Here's mine.",1],["It's my.",0]]},{q:'تسأل عن رحلته.',opts:[['Did you have a good journey?',1],['Where is your car?',0]]}]})}]}
 ]});
B.lesson({
 id:'u8-l2',unit:8,order:2,pages:'40–41',
 title:'Part B: Arriving for an appointment — الوصول إلى موعد',
 summary:'الوصول إلى استقبال شركة (I\'m here to see … · I have an appointment at …)، وأسئلة موظف الاستقبال (Do you have an appointment? What department is that?)، وعبارات الانتظار (Please take a seat. He\'ll be down in a moment.)، ولقاء المضيف وتبادل بطاقات العمل (Here\'s my business card. Did you have a good journey?)، وعادات التحية.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 40–41',html:`<p>تصل إلى شركة لموعد، أو تستقبل زائراً. ستتعلم:</p><ol><li>عبارات الزائر.</li><li>عبارات موظف الاستقبال.</li><li>لقاء المضيف وبطاقات العمل.</li></ol>`},
  ...R182.theory,
  {h:'تمارين الكتاب',ref:'ص 40–41',html:
   bk(1,'ص 40','استمع: ضع علامة على المذكور، ثم أكمل المحادثتين.',['a Visitor 1: name ✓ · company ✓ · person ✓ · appointment ✓ (no department)','a Visitor 2: name ✓ · person ✓ · department ✓ · appointment ✓ (no company)',"b1: My name's · I'm here to see · Do you have","b2: I'd like to see · is that · I have an · I'm"])+
   bk(2,'ص 40','رتّب المحادثتين المختلطتين، ثم استمع.',['Conversation 1: A Good morning. Can I help you? · B 1 · A 4 · B 7 · A 3','Conversation 2: C Hello. I\'m Richard Chandler. · B 6 · C 5 · B 8 · C 2'])+
   bk(3,'ص 41','ناقش عادات بطاقات العمل والتحية والمسافة عند الحديث.',null)+
   bk(4,'ص 41','مثّل: موظف استقبال وزائر، ثم المضيف والزائر.',null)},
  {h:'الاستماع',ref:'ص 40',html:au('8B-1a','ص 40 — التمرين 1','زائران في الاستقبال.')+au('8B-2b','ص 40 — التمرين 2b','زائر في الاستقبال ثم مع مضيفه.')}
 ],
 stations:[
  {intro:true},
  ...R182.stations,
  {recap:["I'm here to see … · I have an appointment at …",'Do you have an appointment? · What department is that?',"Please take a seat. He'll be down in a moment.","Here's my business card. — Here's mine.",'Did you have a good journey?']}
 ],
 lab:lab8b,
 examples:[
  {title:'مثال 1: الوصول',ref:'ص 40',q:`<p>أنت إدوارد سوليفان من Red Sea Foods، وموعدك مع الأستاذة هيلين الساعة 10.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("My name's Edward Sullivan from Red Sea Foods.")}`},{t:`الخطوة 2: ${e("I'm here to see Ms Helen Allen.")}`},{t:`الخطوة 3: ${e('I have an appointment at 10 o’clock.')}`,final:true}]},
  {title:'مثال 2: موظف الاستقبال',ref:'ص 40',q:`<p>اطلب من الزائر الجلوس، وأخبره أن المدير سينزل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Please take a seat.')}`},{t:`الخطوة 2: ${e("He'll be down in a moment.")}`},{t:`الخطوة 3: ${e("Please take a seat. He'll be down in a moment.")}`,final:true}]},
  {title:'مثال 3: الترتيب',ref:'ص 40',q:`<p>رتّب: Nice to meet you, too. / Hello. I'm Tony. / Hello. Paul Grant. Nice to meet you.</p>`,given:[],solve:()=>[{t:`الخطوة 1: المضيف يبدأ: ${e("Hello. I'm Tony.")}`},{t:`الخطوة 2: الزائر: ${e('Hello. Paul Grant. Nice to meet you.')}`},{t:`الخطوة 3: المضيف: ${e('Nice to meet you, too.')}`,final:true}]}
 ],
 quiz:[
  {q:"I'm here to ___ Mr Smith.",o:['see','seeing','sees','saw'],c:0,e:"I'm here to see."},
  {q:'Do you have an ___?',o:['appointment','appoint','appointing','appointed'],c:0,e:'appointment.'},
  {q:'Please take a ___.',o:['seat','sit','chair to','sitting'],c:0,e:'take a seat.'},
  {q:"Here's my business card. — Thank you. Here's ___.",o:['mine','my','me','I'],c:0,e:'mine.'},
  {q:'Thank you. — ___',o:["You're welcome.","Welcome you.","You welcome.","Your welcome."],c:0,e:"You're welcome."},
  {q:'What ___ is that? — Sales.',o:['department','departure','depart','departed'],c:0,e:'department.'}
 ]
});
})(PLCBOOK);

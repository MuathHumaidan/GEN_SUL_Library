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
B.lesson({
 id:'u8-l1',unit:8,order:1,pages:'38–39',
 title:'Part A: Getting around town — التنقل في المدينة',
 summary:'السؤال عن الطريق (How do I get to …?)، وإعطاء الاتجاهات بفعل الأمر (turn left، take the second right، go straight on، get off at، change at)، ووسائل النقل (by train، on foot)، وخطوط المترو (northbound، platform)، والأماكن (opposite، on the left)، والتحقق بتكرار التعليمات (So, I need …).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 38–39',html:`<p>تصف الطريق إلى مكتبك، وتفهم وصف طريق. ستتعلم:</p><ol><li>${e('How do I get to …?')}</li><li>أفعال الاتجاهات.</li><li>المترو والمحطات.</li><li>التحقق بتكرار التعليمات.</li></ol>`},
  {h:'السؤال والاتجاهات',ref:'ص 38',html:`${vt([['How do I get to the National Museum?','كيف أصل إلى …؟'],['Turn left / right.','انعطف يساراً / يميناً'],['Take the second right.','خذ الشارع الثاني يميناً'],['Go straight on for ten minutes.','امشِ مباشرة'],["You'll see our office on the left.",'سترى … على اليسار'],["It's opposite the bank.",'مقابل البنك'],["It's a twenty-minute walk, or you can take a taxi.",'مشي عشرين دقيقة']],['English','المعنى'])}`},
  {h:'المترو والقطار',ref:'ص 38–39',html:`${vt([['Take the Red line northbound.','خذ الخط الأحمر باتجاه الشمال'],['Change at Central station for the Green line.','غيّر في محطة …'],['Get off at King Fahd Road.','انزل في …'],["It's the second stop.",'المحطة الثانية'],['The next train is from platform five.','الرصيف رقم …']],['English','المعنى'])}<p>${e('by train / by bus / by car')} لكن ${e('on foot')} سيراً على الأقدام.</p>`},
  {note:'<b>توضيح للمتدرب:</b> للتحقق كرّر التعليمات: <span class="en">So, I need the Red line northbound and then …</span>'},
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
  {st:1,short:'الاتجاهات',title:'Turn left · Go straight on',q:'كيف تصف الطريق من المحطة إلى المكتب؟',ref:'ص 38',
   art:art(`<line x1="180" y1="270" x2="180" y2="40" stroke="#c9c2b0" stroke-width="22"/><line x1="40" y1="140" x2="320" y2="140" stroke="#c9c2b0" stroke-width="22"/><line x1="40" y1="70" x2="320" y2="70" stroke="#c9c2b0" stroke-width="22"/>
    <g data-tip="Go straight on = امشِ مباشرة"><polygon points="180,250 192,226 168,226" fill="${C.blue}"/>${TL(240,240,'go straight on',{fs:12,w:700})}</g>
    <g data-tip="the first right = أول شارع يميناً">${TL(270,130,'first right',{fs:12,w:700})}</g>
    <g data-tip="the second left = ثاني شارع يساراً">${TL(90,60,'second left',{fs:12,w:700})}</g>
    <g data-tip="opposite the bank = مقابل البنك"><rect x="200" y="86" width="60" height="36" fill="${C.yel}" stroke="${C.ink}"/>${TL(230,108,'bank',{fs:11,w:700})}<rect x="100" y="86" width="60" height="36" fill="${C.paper}" stroke="${C.ink}"/>${TL(130,108,'office',{fs:11,w:700})}</g>`,'اتجاهات'),
   cap:'شوارع من رسمنا. مرّر المؤشر على العبارات.',side:[{tip:`${e('opposite')} = مقابل (على الجهة الأخرى من الشارع).`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'How do I ___ to the station?',o:['get','go'],a:0},{s:'___ the second right.',o:['Take','Get'],a:0},{s:'Go ___ on for five minutes.',o:['straight','right'],a:0},{s:"The office is ___ the bank.",o:['opposite','straight'],a:0}]}),title:'مختبر مصغّر: الاتجاهات'}]},
  {st:2,short:'المترو',title:'northbound · change at · get off',q:'كيف تصف رحلة بالمترو بخطين؟',ref:'ص 38–39',
   art:art(`<line x1="40" y1="230" x2="320" y2="60" stroke="${C.red}" stroke-width="10"/><line x1="40" y1="80" x2="320" y2="220" stroke="${C.grn}" stroke-width="10"/>
    ${[[40,230,'Start'],[180,145,'Central'],[320,220,'Museum']].map(x=>`<g data-tip="${x[2]==='Central'?'change at Central = غيّر الخط هنا':x[2]==='Start'?'take the Red line = خذ الخط الأحمر':'get off at Museum = انزل هنا'}"><circle cx="${x[0]}" cy="${x[1]}" r="12" fill="#fff" stroke="${C.ink}" stroke-width="3"/>${TL(x[0],x[1]-18,x[2],{fs:12,w:700})}</g>`).join('')}`,'المترو'),
   cap:'خطان من رسمنا. مرّر المؤشر على كل محطة.',side:[{tip:`${e('northbound')} = متجه شمالاً، و ${e('southbound')} = متجه جنوباً.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'Take the Red line and ___ at Central.',o:['change','get to'],a:0},{s:'Then ___ the Green line.',o:['take','turn'],a:0},{s:'___ off at Museum.',o:['Get','Go'],a:0}]}),title:'مختبر مصغّر: المترو'}]},
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
const VIS=[{nm:'Ahmed Saleh',co:'Red Sea Foods',to:'Ms Huda Al-Ali',dep:'Sales',ap:'10 o’clock'},{nm:'Paul Grant',co:'Blue Line Shipping',to:'Mr Turki Al-Shehri',dep:'Accounts',ap:'2 o’clock'},{nm:'Reem Nasser',co:'',to:'Mr Fahad',dep:'IT',ap:''}];
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
B.lesson({
 id:'u8-l2',unit:8,order:2,pages:'40–41',
 title:'Part B: Arriving for an appointment — الوصول إلى موعد',
 summary:'الوصول إلى استقبال شركة (I\'m here to see … · I have an appointment at …)، وأسئلة موظف الاستقبال (Do you have an appointment? What department is that?)، وعبارات الانتظار (Please take a seat. He\'ll be down in a moment.)، ولقاء المضيف وتبادل بطاقات العمل (Here\'s my business card. Did you have a good journey?)، وعادات التحية.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 40–41',html:`<p>تصل إلى شركة لموعد، أو تستقبل زائراً. ستتعلم:</p><ol><li>عبارات الزائر.</li><li>عبارات موظف الاستقبال.</li><li>لقاء المضيف وبطاقات العمل.</li></ol>`},
  {h:'الزائر',ref:'ص 40',html:vt([["Good morning. My name's Ahmed Saleh from Red Sea Foods.",'التعريف'],["I'm here to see Ms Huda Al-Ali.",'جئت لأقابل …'],["I'd like to see Mr Turki, please.",'أود مقابلة …'],['I have an appointment at 2 o’clock.','موعدي الساعة …']],['English','المعنى'])},
  {h:'موظف الاستقبال',ref:'ص 40',html:vt([['Do you have an appointment?','هل لديك موعد؟'],['What department is that?','أي قسم؟'],['Can I have your name, please?','اسمك من فضلك'],["One moment, please. I'll call Mr Turki.",'سأتصل به'],['Please take a seat.','تفضل بالجلوس'],["He'll be down in a moment.",'سينزل بعد لحظة'],["I'll tell him you're here.",'سأخبره بوصولك']],['English','المعنى'])},
  {h:'لقاء المضيف',ref:'ص 40',html:dl([['Host',"Hello. I'm Turki Al-Shehri."],['Visitor','Hello. Paul Grant. Nice to meet you.'],['Host','Nice to meet you, too.'],['Visitor',"Here's my business card."],['Host',"Oh, thank you. Here's mine. Did you have a good journey?"]])},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">He\'ll be down</span> = سينزل (من مكتبه في الطابق الأعلى). و <span class="en">You\'re welcome</span> = العفو.'},
  {h:'تمارين الكتاب',ref:'ص 40–41',html:
   bk(1,'ص 40','استمع: ضع علامة على المذكور، ثم أكمل المحادثتين.',['a Visitor 1: name ✓ · company ✓ · person ✓ · appointment ✓ (no department)','a Visitor 2: name ✓ · person ✓ · department ✓ · appointment ✓ (no company)',"b1: My name's · I'm here to see · Do you have","b2: I'd like to see · is that · I have an · I'm"])+
   bk(2,'ص 40','رتّب المحادثتين المختلطتين، ثم استمع.',['Conversation 1: A Good morning. Can I help you? · B 1 · A 4 · B 7 · A 3','Conversation 2: C Hello. I\'m Richard Chandler. · B 6 · C 5 · B 8 · C 2'])+
   bk(3,'ص 41','ناقش عادات بطاقات العمل والتحية والمسافة عند الحديث.',null)+
   bk(4,'ص 41','مثّل: موظف استقبال وزائر، ثم المضيف والزائر.',null)},
  {h:'الاستماع',ref:'ص 40',html:au('8B-1a','ص 40 — التمرين 1','زائران في الاستقبال.')+au('8B-2b','ص 40 — التمرين 2b','زائر في الاستقبال ثم مع مضيفه.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الاستقبال',title:'في الاستقبال',q:'ماذا تقول لموظف الاستقبال عند وصولك؟',ref:'ص 40',
   art:art(`${[["Good morning. Can I help you?",'الموظف',C.paper],["I'm here to see Ms Huda.",'الزائر',C.yel],['Do you have an appointment?','الموظف',C.paper],['Yes, at 10 o’clock.','الزائر',C.yel],['Please take a seat.','الموظف',C.paper]].map((x,i)=>`<g data-tip="${x[1]}"><rect x="${x[1]==='الزائر'?60:20}" y="${26+i*52}" width="280" height="42" rx="12" fill="${x[2]}" stroke="${C.ink}" stroke-width="2"/>${TL(x[1]==='الزائر'?200:160,53+i*52,x[0],{fs:13,w:700})}</g>`).join('')}`,'الاستقبال'),
   cap:'حوار في الاستقبال. مرّر المؤشر لترى من يتكلم.',side:[{tip:`${e("I'm here to see")} + الشخص.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"I'm here to ___ Mr Turki.",o:['see','meet to'],a:0},{s:'Do you ___ an appointment?',o:['have','has'],a:0},{s:'Please ___ a seat.',o:['take','sit'],a:0},{s:"He'll be ___ in a moment.",o:['down','up to'],a:0}]}),title:'مختبر مصغّر: الاستقبال'}]},
  {st:2,short:'بطاقات العمل',title:'لقاء المضيف',q:'كيف تقدّم بطاقة عملك؟',ref:'ص 40–41',
   art:art(`<g data-tip="Here's my business card. = تفضل بطاقتي"><rect x="40" y="80" width="130" height="80" rx="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(105,125,'my card',{fs:13,w:700})}</g><g data-tip="Here's mine. = وهذه بطاقتي"><rect x="190" y="80" width="130" height="80" rx="8" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(255,125,'mine',{fs:13,w:700})}</g>${TL(180,210,'Did you have a good journey?',{fs:14,w:700})}`,'business cards'),
   cap:'تبادل البطاقات. مرّر المؤشر على كل بطاقة.',side:[{tip:`${e('mine')} = الخاص بي (بطاقتي).`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'ماذا تقول؟',cases:[{q:'تقدّم بطاقتك.',opts:[["Here's my business card.",1],['Give me your card.',0]]},{q:'أخذت بطاقته وتعطيه بطاقتك.',opts:[["Thank you. Here's mine.",1],["It's my.",0]]},{q:'تسأل عن رحلته.',opts:[['Did you have a good journey?',1],['Where is your car?',0]]}]}),title:'مختبر مصغّر: اللقاء'}]},
  {recap:["I'm here to see … · I have an appointment at …",'Do you have an appointment? · What department is that?',"Please take a seat. He'll be down in a moment.","Here's my business card. — Here's mine.",'Did you have a good journey?']}
 ],
 lab:lab8b,
 examples:[
  {title:'مثال 1: الوصول',ref:'ص 40',q:`<p>أنت أحمد صالح من Red Sea Foods، وموعدك مع الأستاذة هدى الساعة 10.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("My name's Ahmed Saleh from Red Sea Foods.")}`},{t:`الخطوة 2: ${e("I'm here to see Ms Huda Al-Ali.")}`},{t:`الخطوة 3: ${e('I have an appointment at 10 o’clock.')}`,final:true}]},
  {title:'مثال 2: موظف الاستقبال',ref:'ص 40',q:`<p>اطلب من الزائر الجلوس، وأخبره أن المدير سينزل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('Please take a seat.')}`},{t:`الخطوة 2: ${e("He'll be down in a moment.")}`},{t:`الخطوة 3: ${e("Please take a seat. He'll be down in a moment.")}`,final:true}]},
  {title:'مثال 3: الترتيب',ref:'ص 40',q:`<p>رتّب: Nice to meet you, too. / Hello. I'm Turki. / Hello. Paul Grant. Nice to meet you.</p>`,given:[],solve:()=>[{t:`الخطوة 1: المضيف يبدأ: ${e("Hello. I'm Turki.")}`},{t:`الخطوة 2: الزائر: ${e('Hello. Paul Grant. Nice to meet you.')}`},{t:`الخطوة 3: المضيف: ${e('Nice to meet you, too.')}`,final:true}]}
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

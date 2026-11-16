/* نهج الشرح لانجل-103 (dev-kit/guides/TEACHING_APPROACH.md) — مربع «الفكرة» لكل جزء من «شرح القاعدة».
   المفتاح = عنوان الجزء (t) في u1…u6. الأمثلة والمشاهد من إعدادنا (إضافة من خارج الكتاب). */
(function(G){const NH=G.NH=G.NH||{};const FM=(...p)=>G.ENK.fm(...p);const E=t=>`<span class="en" lang="en" dir="ltr">${t}</span>`;
/* ---------- أدوات الرسم ---------- */
const ink='#3b4a54',grn='#1f8a5b',red='#c4553f',blu='#2f6b8f',yel='#f1b33c',gry='#9aa3aa',lgt='#dfe7ec',sand='#e9dcc3';
const F='font-family="IBM Plex Sans,Segoe UI,Arial,sans-serif"';
const svg=(h,b)=>`<svg viewBox="0 0 400 ${h}" role="img" aria-hidden="true">${b}</svg>`;
const tx=(x,y,t,o={})=>`<text x="${x}" y="${y}" ${F} font-size="${o.fs||14}" font-weight="${o.w||700}" text-anchor="${o.a||'middle'}" fill="${o.c||ink}"${o.op!=null?` opacity="${o.op}"`:''}>${t}</text>`;
const rc=(x,y,w,h,f,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx!=null?o.rx:6}" fill="${f}"${o.st?` stroke="${o.st}" stroke-width="${o.sw||2}"`:''}${o.op!=null?` opacity="${o.op}"`:''}${o.da?` stroke-dasharray="${o.da}"`:''}/>`;
const ci=(x,y,r,f,o={})=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"${o.st?` stroke="${o.st}" stroke-width="${o.sw||2}"`:''}${o.op!=null?` opacity="${o.op}"`:''}/>`;
const ln=(x1,y1,x2,y2,c=ink,w=3,o={})=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"${o.da?` stroke-dasharray="${o.da}"`:''}/>`;
const head=(x,y,a,c,s=9)=>`<path d="M${x} ${y} L${x-s*Math.cos(a-0.5)} ${y-s*Math.sin(a-0.5)} L${x-s*Math.cos(a+0.5)} ${y-s*Math.sin(a+0.5)}Z" fill="${c}"/>`;
const ar=(x1,y1,x2,y2,c=grn,w=3)=>ln(x1,y1,x2,y2,c,w)+head(x2,y2,Math.atan2(y2-y1,x2-x1),c);
const ar2=(x1,y1,x2,y2,c=yel,w=3)=>ln(x1,y1,x2,y2,c,w)+head(x2,y2,Math.atan2(y2-y1,x2-x1),c)+head(x1,y1,Math.atan2(y1-y2,x1-x2),c);
const man=(x,y,c=blu,s=1,op)=>`<g transform="translate(${x},${y}) scale(${s})"${op!=null?` opacity="${op}"`:''}><circle cx="0" cy="-34" r="10" fill="#e8c7a5" stroke="${ink}" stroke-width="1.5"/><path d="M-13 14 v-30 q13 -9 26 0 v30z" fill="${c}"/><rect x="-11" y="14" width="9" height="16" fill="${ink}"/><rect x="2" y="14" width="9" height="16" fill="${ink}"/></g>`;
const wh=(x,y,r=13)=>ci(x,y,r,'#222')+ci(x,y,r*.4,gry);
const lorry=(x,g,L,H,c=grn,lab)=>G.VXA?G.VXA.lorry(x,g,L,H,c,{lab}):'';
const car=(x,g,L,H,c=blu,lab)=>`<path d="M${x} ${g-12} V${g-H*0.55} Q${x+L*0.2} ${g-H} ${x+L*0.4} ${g-H} H${x+L*0.66} Q${x+L*0.85} ${g-H} ${x+L} ${g-H*0.45} V${g-12}Z" fill="${c}"/>${wh(x+L*0.22,g-10,11)}${wh(x+L*0.78,g-10,11)}${lab?tx(x+L/2,g-H*0.45,lab,{c:'#fff',fs:12}):''}`;
const grd=(y,w=400)=>ln(0,y,w,y,gry,4);
const ok=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})">${ci(0,0,16,grn)}<path d="M-7 0 L-2 6 L8 -6" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
const no=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})">${ci(0,0,16,red)}<path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>`;
const bub=(x,y,w,h,t,o={})=>`${rc(x,y,w,h,o.f||'#fff',{st:o.st||ink,sw:1.5,rx:12})}${tx(x+w/2,y+h/2+5,t,{fs:o.fs||13,c:o.c||ink})}`;
/* قطع الجملة: 'a:The lorry|x:is|k:higher' ← [[مفتاح,نص,لون]] */
const S=str=>{const seen={};return str.split('|').map(p=>{const m=p.match(/^([aknxq]):([\s\S]*)$/);const c=m?m[1]:'q',t=m?m[2]:p;const k=c+t.replace(/<[^>]+>/g,'').toLowerCase();seen[k]=(seen[k]||0)+1;return [k+(seen[k]>1?seen[k]:''),t,c]})};
const R=t=>`<b style="color:#c4553f">${t}</b>`;
const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
G.NHK={svg,tx,rc,ci,ln,ar,ar2,man,wh,lorry,car,grd,ok,no,bub,S,R,cap,E,C:{ink,grn,red,blu,yel,gry,lgt,sand}};

/* =================== الوحدة 1 =================== */
const WK={loosen:['loosen the wheel nuts','فكّ صواميل العجلة','لا تفكّ صواميل العجلة'],tighten:['tighten the wheel nuts','اربط صواميل العجلة','لا تربط صواميل العجلة'],raise:['raise the car','ارفع السيارة','لا ترفع السيارة'],lower:['lower the car','نزّل السيارة','لا تنزّل السيارة']};
NH['التعليمات بفعل الأمر']={
 say:[`لما أبوك يقول لك «سكّر الباب!» ما يقول «أنت سكّر». يبدأ بالفعل على طول. الإنجليزي نفس الشي: ${E('Close the door.')} وإذا يبي يمنعك يحط ${E("Don't")} قبل الفعل:${FM("Don't",'+','الفعل')}${E("Don't open the door.")}`,
  `When your father says "Close the door!", he doesn't say "You close the door". He starts with the action. English is the same: ${E('Close the door.')} To stop you, he puts ${E("Don't")} before the action: ${E("Don't open the door.")}`],
 life:[['Close the door, please.','سكّر الباب لو سمحت.'],["Don't touch the hot pan.",'لا تلمس القدر الحار.']],
 scene:{title:['فريق الصيانة يغيّر الكفر','The pit crew changes a wheel'],
  ctrl:[{k:'v',label:['الحركة','Action'],opts:[['loosen','loosen'],['tighten','tighten'],['raise','raise'],['lower','lower']]},{k:'d',label:['الطلب','Order'],opts:[['do',['سوِّ','Do it']],['dont',['لا تسوّي',"Don't"]]]}],
  svg:s=>{const A=G.VXA,X=40,Gd=176,sc=.8,up=s.v==='raise'?-16:0;const P=(rx,ry)=>[X+rx*sc,Gd+ry*sc];const [wx,wy]=P(58,-26),[fx,fy]=P(300,-2);
   let b=`<rect width="400" height="210" fill="#e9eef1"/><rect y="${Gd}" width="400" height="34" fill="#8d969c"/><rect y="${Gd+16}" width="400" height="3" fill="#fff" opacity=".6"/>`;
   if(s.v==='raise'||s.v==='lower'){b+=`<g transform="rotate(${s.v==='raise'?-4:0} ${X+60} ${Gd})">${A.raceCar({x:X,y:Gd,s:sc})}</g>`+A.jack(fx+6,fy,.8)+A.crew(fx+58,Gd,'#2f6b8f',.9,-1)+ar(fx+20,s.v==='raise'?Gd-70:Gd-120,fx+20,s.v==='raise'?Gd-120:Gd-70,grn,5)+tx(fx+20,s.v==='raise'?Gd-128:Gd-60,s.v==='raise'?'up':'down',{c:grn,fs:15})}
   else{const cw=s.v==='tighten';b+=A.raceCar({x:X,y:Gd,s:sc})+A.gun(wx,wy,.85)+A.crew(wx-62,Gd,'#2f6b8f',.9,1,'reach')+(()=>{const r=30,a0=cw?-2.6:-0.5,a1=cw?-0.5:-2.6,p=a=>[wx+r*Math.cos(a),wy+r*Math.sin(a)],[x0,y0]=p(a0),[x1,y1]=p(a1);return `<path d="M${x0} ${y0} A${r} ${r} 0 0 ${cw?1:0} ${x1} ${y1}" stroke="${grn}" stroke-width="5" fill="none"/>`+head(x1,y1,a1+(cw?Math.PI/2:-Math.PI/2),grn,13)})()+tx(230,34,cw?'tighten = clockwise':'loosen = anticlockwise',{c:grn,fs:15})}
   if(s.d==='dont')b+=`<g>${ci(330,48,30,'#fff',{st:red,sw:6})}${ln(310,28,350,68,red,6)}</g>`+tx(330,98,"DON'T",{c:red,fs:15});
   return svg(210,b)},
  ask:s=>{const v=s.d==='dont'?"Don't":cap(s.v);return{q:['بأي كلمة تبدأ التعليمة؟','Which word starts the instruction?'],opts:[v,'You','The'],a:v,hint:['التعليمة ما فيها You، تبدأ بالفعل.','No You: start with the action.']}},
  out:s=>{const w=WK[s.v],dn=s.d==='dont';const[v,...r]=w[0].split(' ');return{t:S(`${dn?"x:Don't|":''}k:${dn?v:cap(v)}|n:${r.join(' ')}.`),ar:dn?w[2]+'.':w[1]+'.',why:dn?[`المنع:${FM("Don't",'+','الفعل')}`,"To stop someone: Don't + the action."]:['التعليمة تبدأ بالفعل مباشرة.','The instruction starts with the action.']}}},
 think:[['أطلب من شخص يسوي شي؟ ← ابدأ بالفعل مباشرة، بدون You.','Am I telling someone to do something? → Start with the action, no You.'],[`أمنعه؟${FM("Don't",'+','الفعل')}`,"Am I stopping him? → Don't + the action."]]};

const WHO={driver:['the driver',1,'press','es','a button','السائق يضغط زراً.'],mech:['the mechanics',4,'bring','','out the new wheels','الميكانيكيون يُخرجون العجلات الجديدة.'],lead:['the team leader',1,'adjust','s','the air pressure','قائد الفريق يضبط ضغط الهواء.'],crew:['the crew',3,'work','s','together','الطاقم يعمل معاً.']};
NH['وصف خطوات العمل بالمضارع البسيط']={
 say:[`روتين كل يوم: «أبوي يصحى الساعة ست ويشرب القهوة». شي يتكرر بنفس الطريقة، فنستخدم الفعل العادي. وإذا اللي يسوي الفعل واحد (${E('he / she / it')}) نزيد ${E('s')} في آخر الفعل.`,
  `A daily routine: "My father gets up at six and drinks coffee." It happens the same way every time, so we use the simple verb. If one person does it (${E('he / she / it')}), we add ${E('s')} to the verb.`],
 life:[['My father drinks coffee every morning.','أبوي يشرب قهوة كل صباح.'],['My brothers play football on Fridays.','إخواني يلعبون كورة كل جمعة.']],
 scene:{title:['من يسوي الخطوة؟','Who does the step?'],
  ctrl:[{k:'w',label:['الفاعل','Who'],opts:[['driver','the driver'],['mech','the mechanics'],['lead','the team leader'],['crew','the crew']]}],
  svg:s=>{const A=G.VXA,w=WHO[s.w];let b=`<rect width="400" height="200" fill="#e9eef1"/><rect y="170" width="400" height="30" fill="#8d969c"/>`;
   if(s.w==='driver'){b+=A.raceCar({x:60,y:170,s:.85})+ci(60+166*.85,170-70*.85,16,'none',{st:red,sw:4})+tx(200,24,'the driver = one',{fs:15,c:red})}
   else{const n=w[1],cols=s.w==='crew'?['#2f6b8f','#2f6b8f','#2f6b8f']:s.w==='lead'?['#c4553f']:['#2f6b8f','#2f6b8f','#2f6b8f','#2f6b8f'];for(let i=0;i<n;i++)b+=A.crew(200-(n-1)*45+i*90,168,cols[i],1.05);
    if(s.w==='crew')b+=rc(70,46,260,128,'none',{st:grn,da:'7 6',rx:18})+tx(200,38,'one crew',{c:grn,fs:15});
    if(s.w==='lead')b+=ci(232,98,14,'#fff',{st:ink,sw:2})+ln(232,98,240,90,red,3)+tx(200,24,'one team leader',{fs:15,c:red});
    if(s.w==='mech')b+=tx(200,24,'four mechanics',{fs:15,c:blu})}
   return svg(200,b)},
  ask:s=>({q:['كم واحد يسوي الفعل؟','How many do the action?'],opts:['one','more than one'],a:WHO[s.w][1]===4?'more than one':'one',hint:s.w==='crew'?['crew مجموعة وحدة ← واحد.','A crew is one group → one.']:['عدّ اللي يسوون الفعل.','Count the doers.']}),
  out:s=>{const w=WHO[s.w],one=w[1]!==4;return{t:S(`a:${cap(w[0])}|k:${w[2]}${one?R(w[3]):''}|n:${w[4]}.`),ar:w[5],why:one?[`واحد:${FM('الفعل','+','s')}`,'One → verb + s.']:['أكثر من واحد ← الفعل بدون s.','More than one → no s.']}}},
 think:[['هل الشي يتكرر بنفس الطريقة كل مرة؟ ← الفعل العادي.','Does it happen the same way every time? → the simple verb.'],[`اللي يسوي الفعل واحد (${E('he, she, it, the team')})؟${FM('الفعل','+','s')}`,'Is the doer one (he, she, it, the team)? → add s.']]};

const PV={off:['take','off','the wheels','them','يفكّ العجلات'],on:['put','on','the new wheels','them','يركّب العجلات الجديدة'],out:['bring','out','the new wheels','them','يُخرج العجلات الجديدة'],up:['pick','up','the wheel nut','it','يلتقط صامولة العجلة']};
NH['الأفعال المركبة ومكان المفعول']={
 say:[`بعض الأفعال معها كلمة صغيرة تغيّر معناها: ${E('take')} = ياخذ، لكن ${E('take off')} = يفكّ أو يشيل. إذا الشي اسم (${E('the wheels')}) يجي قبل الكلمة الصغيرة أو بعدها، الاثنين صح. لكن إذا كان ${E('it')} أو ${E('them')} لازم يجي في النص: ${E('Take them off.')}`,
  `Some verbs come with a small word that changes the meaning: ${E('take')} = take, but ${E('take off')} = remove. If the thing is a noun (${E('the wheels')}), it can go before or after the small word. But ${E('it')} or ${E('them')} must go in the middle: ${E('Take them off.')}`],
 life:[['Take off your shoes.','اخلع حذاءك.'],['Put it on, please.','البسه لو سمحت.']],
 scene:{title:['وين يجي الشي؟','Where does the thing go?'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:[['off','take off'],['on','put on'],['out','bring out'],['up','pick up']]},{k:'o',label:['الشي','Thing'],opts:[['n',['اسم','a noun']],['p',['ضمير it / them','it / them']]]}],
  svg:s=>{let b=grd(170)+car(40,170,200,80,red);const wx=s.v==='off'?300:s.v==='on'?84:s.v==='out'?330:150,wy=s.v==='up'?100:156;
   b+=wh(wx,wy,s.v==='up'?7:16);if(s.v==='off')b+=ar(110,150,280,150,grn,4);if(s.v==='on')b+=ar(300,150,110,150,grn,4);if(s.v==='out')b+=rc(300,60,90,110,'none',{st:ink,rx:4})+tx(345,54,'store',{fs:12})+ar(330,150,260,150,grn,4);if(s.v==='up')b+=ar(150,160,150,110,grn,4)+man(190,150,blu,1);
   b+=tx(200,26,s.o==='p'?PV[s.v][3]:PV[s.v][2],{c:blu,fs:16});return svg(185,b)},
  ask:s=>s.o==='p'?{q:['وين يجي الضمير؟','Where does the pronoun go?'],opts:[`${cap(PV[s.v][0])} ${PV[s.v][3]} ${PV[s.v][1]}.`,`${cap(PV[s.v][0])} ${PV[s.v][1]} ${PV[s.v][3]}.`],a:`${cap(PV[s.v][0])} ${PV[s.v][3]} ${PV[s.v][1]}.`,hint:['it و them لازم في النص.','it and them go in the middle.']}:{q:['مع الاسم: كم مكان يصح؟','With a noun: how many places are correct?'],opts:['one','two'],a:'two',hint:['الاسم يصح قبل الكلمة الصغيرة وبعدها.','A noun can go before or after the small word.']},
  out:s=>{const[v,p,n,pr,ar_]=PV[s.v];return s.o==='p'?{t:S(`k:${cap(v)}|n:${pr}|x:${p}.`),ar:ar_+'.',why:['الضمير بين الفعل والكلمة الصغيرة.','The pronoun goes between the verb and the small word.']}:{t:S(`k:${cap(v)}|n:${n}|x:${p}.|q:=|k:${v}|x:${p}|n:${n}.`),ar:ar_+'.',why:['الاسم: المكانان صح.','A noun: both places are correct.']}}},
 think:[['الفعل معه كلمة صغيرة (off, on, out, up)؟','Does the verb have a small word (off, on, out, up)?'],['الشي ضمير (it, them)؟ ← في النص بين الفعل والكلمة الصغيرة.','Is the thing it or them? → in the middle.']]};

const JB={nuts:['tighten','tightening','tightened','the wheel nuts','أربط صواميل العجلة','ربطت صواميل العجلة'],wheels:['bring','bringing','brought','the new wheels out','أُخرج العجلات الجديدة','أخرجت العجلات الجديدة'],air:['adjust','adjusting','adjusted','the air pressure','أضبط ضغط الهواء','ضبطت ضغط الهواء']};
NH['ماذا تفعل الآن؟ وماذا أنجزت؟']={
 say:[`لو أحد اتصل عليك وأنت في نص الأكل تقول: «قاعد آكل» ${E("I'm eating.")} ولو خلصت والصحن فاضي تقول: «أكلت» ${E("I've eaten.")} الشغل في نصه ← ${E('am / is / are + ing')}. الشغل خلص ونتيجته قدامك ← ${E('have / has')} + التصريف الثالث.`,
  `If someone calls you in the middle of lunch, you say ${E("I'm eating.")} If you finished and the plate is empty, you say ${E("I've eaten.")} Job in the middle → ${E('am / is / are + ing')}. Job finished and you can see the result → ${E('have / has')} + past participle.`],
 life:[["I'm eating now.",'أنا قاعد آكل الحين.'],["I've finished my homework.",'خلّصت واجبي.']],
 scene:{title:['حرّك الشغل لين يخلص','Move the job until it is finished'],
  ctrl:[{k:'j',label:['الشغل','Job'],opts:[['nuts','tighten the nuts'],['wheels','bring out the wheels'],['air','adjust the air']]},{k:'p',label:['الإنجاز','Done'],range:[0,100,10],init:40,unit:'%'}],
  svg:s=>{const d=s.p>=100;let b=rc(40,70,320,34,lgt,{rx:17})+rc(40,70,320*s.p/100,34,d?grn:yel,{rx:17})+tx(200,93,s.p+'%',{fs:16})+man(70,170,blu,1)+(d?ok(330,150,1.4):`<g>${tx(330,160,'...',{fs:30,c:gry})}</g>`)+tx(200,40,JB[s.j][0],{c:blu,fs:16});return svg(190,b)},
  ask:s=>({q:['خلص الشغل؟','Is the job finished?'],opts:['still working','finished'],a:s.p>=100?'finished':'still working'}),
  out:s=>{const j=JB[s.j];return s.p>=100?{t:S(`a:I|x:'ve|k:${j[2]}|n:${j[3]}.`),ar:j[5]+'.',why:['خلص ← have + التصريف الثالث.','Finished → have + past participle.']}:{t:S(`a:I|x:'m|k:${j[1]}|n:${j[3]}${s.p>0?' now':''}.`),ar:j[4]+' الحين.',why:['في نصه ← am + ing.','In the middle → am + ing.']}}},
 think:[['الشغل في نصه الحين؟ ← am / is / are + ing.','Is the job happening now? → am / is / are + ing.'],['خلص والنتيجة قدامك؟ ← have / has + التصريف الثالث.','Is it finished and you can see the result? → have / has + past participle.']]};

const YT={air:['adjusted','the air pressure','ضبطت ضغط الهواء'],car:['cleaned','the car','نظّفت السيارة'],tyres:['checked','the tyres','فحصت الكفرات']};
NH['yet مع المضارع التام']={
 say:[`${E('yet')} مثل «للحين». المشرف يسألك ${E('Have you finished yet?')} يعني «خلصت ولا للحين؟» لأنه يتوقع إنك خلصت. وإذا ما خلصت تقول: ${E("No, I haven't finished yet.")}`,
  `${E('yet')} means "until now". The supervisor asks ${E('Have you finished yet?')} because he expects you to be finished. If you haven't, you say ${E("No, I haven't finished yet.")}`],
 life:[['Have you eaten yet?','أكلت ولا للحين؟'],["I haven't finished yet.",'ما خلّصت للحين.']],
 scene:{title:['قائمة الشغل','The job list'],
  ctrl:[{k:'j',label:['الشغل','Job'],opts:[['air','air pressure'],['car','clean the car'],['tyres','check the tyres']]},{k:'d',label:['الحالة','State'],opts:[['y',['خلص','done']],['n',['ما خلص','not done']]]}],
  svg:s=>{let b='';Object.keys(YT).forEach((k,i)=>{const y=40+i*48,sel=k===s.j;b+=rc(60,y-22,280,38,sel?'#fff':lgt,{st:sel?blu:'none',sw:3,rx:10})+tx(80,y+3,YT[k][1],{a:'start',fs:15})+(sel?(s.d==='y'?ok(310,y-3):`${ci(310,y-3,15,yel)}${tx(310,y+3,'?',{fs:16})}`):'')});return svg(170,b)},
  ask:s=>({q:['وش جوابك؟','What is your answer?'],opts:['Yes, I have.',"No, I haven't."],a:s.d==='y'?'Yes, I have.':"No, I haven't."}),
  out:s=>{const j=YT[s.j];return{t:S(`x:Have|a:you|k:${j[0]}|n:${j[1]}|x:yet?|q:— ${s.d==='y'?'Yes, I have.':`No, I haven't ${j[0]} it yet.`}`),ar:s.d==='y'?`${j[2]} ولا للحين؟ — إي، خلصت.`:`${j[2]} ولا للحين؟ — لا، للحين.`,why:['yet في آخر السؤال والنفي.','yet goes at the end of the question and the negative.']}}},
 think:[['أسأل عن شي كنت أتوقعه يخلص؟ ← yet في آخر السؤال.','Am I asking about something I expect to be finished? → yet at the end.'],["ما خلص؟ ← haven't … yet.","Not finished? → haven't … yet."]]};

const DV={motor:['the outboard motor','start','pulling the cord','شغّل الماطور بسحب الحبل','pull the cord','pulls the cord'],phone:['the phone','switch on','pressing the green button','شغّل الجوال بضغط الزر الأخضر','press the green button','presses'],ticket:['the ticket machine','activate','touching the screen','شغّل آلة التذاكر بلمس الشاشة','touch the screen','touches'],light:['the light','switch on','pressing the switch','شغّل النور بضغط المفتاح','press the switch','presses']};
NH['الطريقة بفعل: by + ing']={
 say:[`بالعربي نقول: شغّلت الماطور «بـ» سحب الحبل. بالإنجليزي «بـ» قبل فعل = ${E('by')} + الفعل مع ${E('ing')}: ${E('by pulling the cord')}. ونسأل عن الطريقة بـ ${E('How')}.`,
  `We start the motor "by" pulling the cord. Before an action, use ${E('by')} + the verb with ${E('ing')}: ${E('by pulling the cord')}. We ask about the way with ${E('How')}.`],
 life:[['I open the door by pushing it.','أفتح الباب بدفعه.'],['I pay by tapping my card.','أدفع بتمرير بطاقتي.']],
 scene:{title:['كيف تشغّله؟','How do you start it?'],
  ctrl:[{k:'d',label:['الجهاز','Device'],opts:[['motor','motor'],['phone','phone'],['ticket','ticket machine'],['light','light']]}],
  svg:s=>{let b='';if(s.d==='motor')b=rc(150,40,90,70,blu,{rx:12})+rc(185,110,20,60,ink)+ln(150,70,90,100,ink,3)+ci(86,102,8,red)+ar(110,120,60,140,grn,4);
   if(s.d==='phone')b=rc(160,20,80,150,ink,{rx:14})+rc(168,32,64,110,'#cfe3ee',{rx:4})+ci(200,156,9,grn)+ar(260,156,215,156,grn,4);
   if(s.d==='ticket')b=rc(140,20,120,160,'#7aa6bf',{rx:10})+rc(155,35,90,70,'#e8f4fa',{rx:6})+tx(200,75,'TOUCH',{fs:12,c:blu})+ar(300,70,250,70,grn,4);
   if(s.d==='light')b=ci(120,70,30,yel)+rc(108,100,24,16,gry)+rc(240,60,50,80,'#fff',{st:ink})+rc(255,80,20,30,ink,{rx:3})+ar(320,95,280,95,grn,4);
   return svg(190,b)},
  ask:s=>{const d=DV[s.d];return{q:['How do you '+d[1]+' it?','How do you '+d[1]+' it?'],opts:['By '+d[2]+'.','By '+d[4]+'.','With '+d[2]+'.'],a:'By '+d[2]+'.',hint:['by + الفعل مع ing.','by + verb + ing.']}},
  out:s=>{const d=DV[s.d];const[v,...r]=d[2].split(' ');return{t:S(`a:You|k:${d[1]}|n:${d[0]}|x:by|k:${v.replace(/ing$/,'')+R('ing')}|n:${r.join(' ')}.`),ar:d[3]+'.',why:['الطريقة: by + فعل + ing.','The way: by + verb + ing.']}}},
 think:[['يسأل How (كيف)؟','Is the question How?'],['الجواب فعل؟ ← by + الفعل مع ing.','Is the answer an action? → by + verb + ing.']]};

const RB={cam:['a camera','see ahead','يرى ما أمامه باستعمال كاميرا'],sen:['sensors','detect walls','يكتشف الجدران باستعمال حساسات'],whl:['wheels','move','يتحرك باستعمال عجلات'],arm:['a robot arm','pick up objects','يلتقط الأشياء باستعمال ذراع']};
NH['الأداة: using · by means of']={
 say:[`إذا الشي يشتغل بأداة نذكر اسم الأداة: «الروبوت يشوف باستخدام كاميرا» = ${E('using a camera')}. والكلام الرسمي: ${E('by means of a camera')}. انتبه: بعد ${E('using')} و ${E('by means of')} يجي اسم أداة، أما ${E('by')} مع فعل فيجي بعده ${E('ing')}.`,
  `If something works with a tool, we name the tool: "The robot sees using a camera" = ${E('using a camera')}. More formal: ${E('by means of a camera')}. After ${E('using')} and ${E('by means of')} comes the name of a tool; ${E('by')} + an action takes ${E('ing')}.`],
 life:[['I write using a pen.','أكتب باستخدام قلم.'],['The door opens by means of a sensor.','الباب ينفتح بواسطة حسّاس.']],
 scene:{title:['الروبوت وأدواته','The robot and its tools'],
  ctrl:[{k:'p',label:['الأداة','Tool'],opts:[['cam','camera'],['sen','sensors'],['whl','wheels'],['arm','arm']]},{k:'f',label:['الأسلوب','Style'],opts:[['u','using'],['m','by means of']]}],
  svg:s=>{const H=k=>s.p===k?red:ink;let b=rc(150,40,100,80,lgt,{st:ink,rx:16})+ci(180,75,10,H('cam'))+ci(220,75,10,H('cam'))+rc(160,120,80,40,lgt,{st:ink})+ci(165,180,13,H('whl'))+ci(235,180,13,H('whl'))+ln(250,130,300,100,H('arm'),7)+ln(300,100,320,120,H('arm'),5)+ci(150,140,6,H('sen'))+ci(250,150,6,H('sen'));
   if(s.p==='sen')b+=`<path d="M140 140 q-20 -12 0 -24 M134 146 q-34 -18 0 -36" stroke="${red}" stroke-width="3" fill="none"/>`;if(s.p==='cam')b+=ar(240,70,320,50,red,3);return svg(200,b)},
  out:s=>{const r=RB[s.p];return{t:S(`a:The robot|k:can ${r[1]}|x:${s.f==='u'?'using':'by means of'}|n:${r[0]}.`),ar:'الروبوت '+r[2]+'.',why:s.f==='u'?['using + اسم الأداة.','using + the name of the tool.']:['by means of + اسم الأداة (أكثر رسمية).','by means of + tool (more formal).']}}},
 think:[['بعدها اسم أداة؟ ← using أو by means of.','Is it followed by a tool? → using or by means of.'],['بعدها فعل؟ ← by + ing.','Is it followed by an action? → by + ing.']]};

/* =================== الوحدة 2 =================== */
const PP2={bill:['Bill','supervises the divers','checking the blowout preventer','يشرف على الغواصين','يفحص مانع الانفجار'],tori:['Tori','supervises the deck crew','operating the main crane','يشرف على طاقم السطح','يشغّل الرافعة الرئيسية'],adel:['Adel','tests electrical switches','writing a safety report','يختبر المفاتيح الكهربائية','يكتب تقرير سلامة']};
NH['متى المضارع البسيط ومتى المستمر؟']={
 say:[`عندك شي تسويه «عادةً» كل يوم، وشي تسويه «اليوم بس» لأن اليوم غير. العادة ← الفعل العادي مع ${E('usually')}. اليوم أو الحين ← ${E('am / is / are + ing')} مع ${E('today')} أو ${E('now')}.`,
  `There are things you do "usually", every day, and things you do "only today" because today is different. Habit → simple verb with ${E('usually')}. Today or now → ${E('am / is / are + ing')} with ${E('today')} or ${E('now')}.`],
 life:[['I usually drive to work.','عادةً أسوق للدوام.'],["Today I'm taking the bus.",'اليوم آخذ الباص.']],
 scene:{title:['عادةً أو اليوم؟','Usually or today?'],
  ctrl:[{k:'p',label:['الموظف','Worker'],opts:[['bill','Bill'],['tori','Tori'],['adel','Adel']]},{k:'w',label:['الوقت','When'],opts:[['u','usually'],['t','today']]}],
  svg:s=>{let b='';['S','M','T','W','T','F','S'].forEach((d,i)=>{const x=40+i*48,isT=i===3;const on=s.w==='u'?!isT||true:isT;b+=rc(x,40,40,60,s.w==='t'&&isT?red:(s.w==='u'?'#cfe7da':lgt),{rx:8})+tx(x+20,62,d,{fs:13,c:s.w==='t'&&isT?'#fff':ink})+(s.w==='u'||isT?ci(x+20,82,7,s.w==='t'&&isT?'#fff':grn):'')});
   b+=tx(200,130,s.w==='u'?'every day':'only today',{fs:18,c:s.w==='u'?grn:red});return svg(150,b)},
  ask:s=>({q:['عادة تتكرر ولا اليوم بس؟','A habit, or only today?'],opts:['a habit','only today'],a:s.w==='u'?'a habit':'only today'}),
  out:s=>{const p=PP2[s.p];return s.w==='u'?{t:S(`a:${p[0]}|x:usually|k:${p[1].split(' ')[0]}|n:${p[1].split(' ').slice(1).join(' ')}.`),ar:`${p[0]} عادةً ${p[3]}.`,why:['عادة ← الفعل العادي (+ s مع الواحد).','Habit → simple verb (+ s with one person).']}:{t:S(`a:${p[0]}|x:is|k:${p[2].split(' ')[0]}|n:${p[2].split(' ').slice(1).join(' ')}|q:today.`),ar:`${p[0]} اليوم ${p[4]}.`,why:['اليوم بس ← is + ing.','Only today → is + ing.']}}},
 think:[['هل هي عادة تتكرر؟ ← الفعل العادي مع usually.','Is it a habit? → simple verb with usually.'],['هل هي اليوم بس أو الحين؟ ← am / is / are + ing.','Is it only today or now? → am / is / are + ing.']]};

const ORG=[['Toolpusher',null],['Driller','Toolpusher'],['Assistant Driller','Driller'],['Roughneck','Assistant Driller']];
const JOBS={Driller:'operate the drill',['Assistant Driller']:'operate the drilling equipment',Roughneck:'maintain the equipment'};
NH['وصف الوظيفة ومفردات العمل البحري']={
 say:[`لما تعرّف بشغلك تجاوب ثلاث أسئلة: وش تسوي؟ مين تحتك (تشرف عليه)؟ ولمين ترفع تقاريرك (مديرك)؟ ← ${E('I supervise …')} و ${E('I report to …')}.`,
  `When you describe your job you answer three questions: What do you do? Who is under you? Who is your boss? → ${E('I supervise …')} and ${E('I report to …')}.`],
 life:[['I report to the manager.','أرفع تقاريري للمدير.'],['I supervise two workers.','أشرف على عاملين.']],
 scene:{title:['خريطة الوظائف على المنصة','Jobs on the rig'],
  ctrl:[{k:'p',label:['أنت','You are'],opts:[[1,'Driller'],[2,'Assistant Driller'],[3,'Roughneck']]}],
  svg:s=>{let b='';ORG.forEach(([n],i)=>{const y=22+i*42,me=i===s.p;b+=rc(110,y,180,30,me?blu:(i===s.p-1?'#cfe7da':i===s.p+1?'#fbe2c5':lgt),{rx:8})+tx(200,y+20,n,{fs:14,c:me?'#fff':ink});if(i)b+=ln(200,y-12,200,y,gry,2)});
   b+=ar(305,22+s.p*42+15,305,22+(s.p-1)*42+15,grn,4)+tx(352,22+(s.p-0.5)*42+19,'report to',{fs:12,c:grn});if(s.p<3)b+=ar(95,22+s.p*42+15,95,22+(s.p+1)*42+15,yel,4)+tx(48,22+(s.p+0.5)*42+19,'supervise',{fs:12,c:'#b37d00'});return svg(190,b)},
  ask:s=>({q:['مين مديرك؟','Who is your boss?'],opts:ORG.map(o=>'the '+o[0]),a:'the '+ORG[s.p][1]}),
  out:s=>{const me=ORG[s.p][0],up=ORG[s.p][1],dn=s.p<3?ORG[s.p+1][0]:null;return{t:S(`a:I'm the ${me}.|a:I|k:${JOBS[me]}.|a:I|x:report to|n:the ${up}.${dn?`|a:I|x:supervise|n:the ${dn}s.`:''}`),ar:`أنا ${me}. أرفع تقاريري إلى ${up}${dn?` وأشرف على ${dn}`:''}.`,why:['فوقك ← report to. تحتك ← supervise.','Above you → report to. Under you → supervise.']}}},
 think:[['مين فوقه؟ ← I report to …','Who is above him? → I report to …'],['مين تحته؟ ← I supervise …','Who is under him? → I supervise …']]};

const PL={meet:['c','hold a meeting','holding a meeting','next Thursday','عندي اجتماع الخميس القادم'],dent:['c','see the dentist','seeing the dentist','at 4 o\'clock','عندي موعد مع طبيب الأسنان الساعة 4'],rules:['m','tell them about the new rules','telling them about the new rules','at the meeting','ناوي أخبرهم بالقواعد الجديدة'],drive:['m','learn to drive','learning to drive','next year','ناوي أتعلم السواقة']};
NH['الخطط: المضارع المستمر و going to']={
 say:[`لما يكون عندك موعد مكتوب في التقويم (اجتماع، موعد مستشفى) تقول: ${E("I'm meeting the team on Thursday.")} ولما تكون نيّة في راسك: ${E("I'm going to tell them about the new rules.")} الاثنين عن المستقبل.`,
  `For an arrangement in your calendar (a meeting, an appointment): ${E("I'm meeting the team on Thursday.")} For an idea in your head: ${E("I'm going to tell them about the new rules.")} Both are about the future.`],
 life:[["I'm meeting my friend tomorrow.",'بشوف صديقي بكرة (متفقين).'],["I'm going to buy a new phone.",'ناوي أشتري جوال جديد.']],
 scene:{title:['تقويم ولا نيّة؟','Calendar or idea?'],
  ctrl:[{k:'p',label:['الخطة','Plan'],opts:[['meet','meeting'],['dent','dentist'],['rules','new rules'],['drive','learn to drive']]}],
  svg:s=>{const c=PL[s.p][0]==='c';let b=c?rc(120,20,160,150,'#fff',{st:ink})+rc(120,20,160,34,red,{rx:6})+tx(200,43,'CALENDAR',{c:'#fff'})+rc(140,80,120,30,'#cfe7da',{rx:6})+tx(200,100,s.p==='meet'?'Thu: meeting':'4:00 dentist',{fs:13}):man(150,170,blu,1.4)+`<path d="M200 70 q0 -40 60 -40 q60 0 60 40 q0 40 -60 40 q-20 0 -30 -6 l-24 14 l8 -22 q-14 -10 -14 -26z" fill="#fff" stroke="${ink}" stroke-width="2"/>`+tx(260,76,s.p==='rules'?'tell them!':'drive!',{fs:14,c:blu});return svg(185,b)},
  ask:s=>({q:['أي صيغة؟','Which form?'],opts:["I'm …ing","I'm going to …"],a:PL[s.p][0]==='c'?"I'm …ing":"I'm going to …",hint:['موعد مرتّب ← I\'m …ing. نيّة ← going to.',"Arranged → I'm …ing. Idea → going to."]}),
  out:s=>{const p=PL[s.p];return p[0]==='c'?{t:S(`a:I|x:'m|k:${p[2].split(' ')[0]}|n:${p[2].split(' ').slice(1).join(' ')}|q:${p[3]}.`),ar:p[4]+'.',why:['موعد مرتّب ← am + ing.','An arrangement → am + ing.']}:{t:S(`a:I|x:'m going to|k:${p[1].split(' ')[0]}|n:${p[1].split(' ').slice(1).join(' ')}|q:${p[3]}.`),ar:p[4]+'.',why:['نيّة ← going to + الفعل.','An idea → going to + verb.']}}},
 think:[['مكتوب في التقويم (موعد)؟ ← I\'m + ing.',"Is it in the calendar? → I'm + ing."],['نيّة في الراس؟ ← I\'m going to + الفعل.',"Is it an idea in your head? → I'm going to + verb."]]};

const IV={want:['want',1],hope:['hope',2],plan:['plan',3],intend:['intend',4]};
const IA={rep:['finish','the report','أخلّص التقرير'],meet:['hold','a meeting','أعقد اجتماعاً'],rig:['visit','the rig','أزور المنصة']};
NH['want · intend · hope · plan + to']={
 say:[`بالعربي نقول: «أبي أنام». بالإنجليزي بعد ${E('want')} و ${E('hope')} و ${E('plan')} و ${E('intend')} يجي ${E('to')} وبعده الفعل كما هو: ${E('I want to sleep.')} و ${E('intend')} أرسمها، تناسب الإيميل الرسمي.`,
  `After ${E('want')}, ${E('hope')}, ${E('plan')} and ${E('intend')} comes ${E('to')} + the verb as it is: ${E('I want to sleep.')} ${E('intend')} is the most formal, good for formal emails.`],
 life:[['I want to sleep.','أبي أنام.'],['I hope to pass the test.','أتمنى أنجح في الاختبار.']],
 scene:{title:['النية والرسمية','Intention and formality'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(IV).map(k=>[k,k])},{k:'a',label:['الخطة','Plan'],opts:[['rep','finish the report'],['meet','hold a meeting'],['rig','visit the rig']]}],
  svg:s=>{const n=IV[s.v][1];let b=tx(60,40,'friends',{fs:13,c:gry})+tx(340,40,'formal email',{fs:13,c:gry})+rc(50,55,300,20,lgt,{rx:10})+rc(50,55,75*n,20,n>2?blu:grn,{rx:10})+tx(200,120,s.v,{fs:26,c:n>2?blu:grn});return svg(150,b)},
  ask:()=>({q:['وش يجي بعد الفعل؟','What comes after the verb?'],opts:['to + verb','verb + ing','verb + s'],a:'to + verb'}),
  out:s=>{const a=IA[s.a];return{t:S(`a:I|k:${s.v}|x:to|k:${a[0]}|n:${a[1]}|q:next week.`),ar:{want:'أبي',hope:'أتمنى',plan:'أخطط',intend:'أنوي'}[s.v]+' '+a[2]+' الأسبوع القادم.',why:['بعدها to + الفعل كما هو.','Then to + the verb as it is.']}}},
 think:[['الفعل want / hope / plan / intend؟ ← بعده to + الفعل كما هو.','Is the verb want / hope / plan / intend? → to + verb.']]};

const EM={thank:['Many thanks for your email.','شكراً جزيلاً على إيميلك.','الشكر','Thanking'],ref:['With reference to the meeting on Monday, …','بالإشارة إلى اجتماع الاثنين، …','الإشارة إلى موضوع','Referring'],rem:['As you are aware, the rig closes on Friday.','كما تعلم، تُغلق المنصة يوم الجمعة.','التذكير','Reminding'],conf:['This is to confirm that the meeting is at 9.30.','نؤكد أن الاجتماع الساعة 9:30.','التأكيد','Confirming'],bad:['Unfortunately, the crane is not working.','للأسف، الرافعة لا تعمل.','خبر سيئ','Bad news'],good:['I am pleased to inform you that you passed the course.','يسرّني إبلاغك أنك نجحت في الدورة.','خبر جيد','Good news']};
NH['عبارات البريد الرسمي']={
 say:[`الإيميل الرسمي مثل الخطاب الرسمي بالعربي: «بالإشارة إلى…»، «نود إفادتكم…». لكل غرض عبارة جاهزة تبدأ فيها الجملة. اسأل نفسك: وش أبي أقول؟ ثم اختر عبارته.`,
  `A formal email is like a formal letter: each purpose has a ready phrase to start the sentence. Ask yourself: what do I want to say? Then choose its phrase.`],
 life:[['Thanks for your email.','شكراً على إيميلك.'],['With reference to your call, …','بالإشارة إلى اتصالك، …']],
 scene:{title:['اكتب الإيميل','Write the email'],
  ctrl:[{k:'p',label:['الغرض','Purpose'],opts:Object.keys(EM).map(k=>[k,[EM[k][2],EM[k][3]]])}],
  svg:s=>{let b=rc(40,10,320,170,'#fff',{st:ink})+rc(40,10,320,30,blu,{rx:6})+tx(60,31,'New message',{a:'start',c:'#fff',fs:13})+tx(60,62,'To: Mr Hassan',{a:'start',fs:12,c:gry})+ln(60,72,340,72,lgt,2)+tx(60,96,'Dear Mr Hassan,',{a:'start',fs:13})+rc(56,108,288,30,'#fff3c7',{rx:6})+tx(64,128,'....................',{a:'start',fs:13,c:'#b37d00'})+tx(60,160,'Best regards,',{a:'start',fs:13});return svg(190,b)},
  ask:s=>{const ks=Object.keys(EM),i=ks.indexOf(s.p),o=[ks[i],ks[(i+2)%ks.length],ks[(i+4)%ks.length]].sort();return{q:['أي عبارة تناسب الغرض؟','Which phrase fits the purpose?'],opts:o.map(k=>EM[k][0].split(/[,.]/)[0]+' …'),a:EM[s.p][0].split(/[,.]/)[0]+' …'}},
  out:s=>{const m=EM[s.p];const p=m[0].match(/^(Many thanks for|With reference to|As you are aware,|This is to confirm that|Unfortunately,|I am pleased to inform you that)(.*)$/);return{t:S(`x:${p[1]}|q:${p[2].trim()}`),ar:m[1],why:['العبارة الجاهزة أول الجملة.','The ready phrase starts the sentence.']}}},
 think:[['وش غرضي من الجملة؟ شكر؟ تذكير؟ تأكيد؟ خبر؟','What is my purpose? Thanks? Reminder? Confirmation? News?'],['أختار العبارة الجاهزة وأكمل بعدها.','Choose the ready phrase, then continue.']]};

const CV={2001:['study','studied','r','Engineering at college','درست الهندسة في الكلية'],2002:['get','got','i','my diploma','حصلت على الدبلوم'],2003:['start','started','r','work at Mobile Force','بدأت العمل في موبايل فورس'],2005:['leave','left','i','Mobile Force','تركت موبايل فورس'],2006:['join','joined','r','Omega Studios','انضممت إلى استوديوهات أوميغا']};
NH['حكاية السيرة بالماضي البسيط']={
 say:[`الشي اللي صار وخلص في وقت معروف (سنة 2004، أمس، الشهر الماضي) نقوله بالماضي. أغلب الأفعال نزيد ${E('ed')}: ${E('work → worked')}. وبعضها شاذ يتحفظ: ${E('go → went · leave → left')}.`,
  `Something that happened and finished at a known time (2004, yesterday, last month) is in the past simple. Most verbs add ${E('ed')}: ${E('work → worked')}. Some are irregular and must be learned: ${E('go → went · leave → left')}.`],
 life:[['I finished school in 2020.','خلّصت المدرسة في 2020.'],['I went to Jeddah last year.','رحت جدة السنة الماضية.']],
 scene:{title:['حرّك السنة في السيرة','Move along the CV'],
  ctrl:[{k:'y',label:['السنة','Year'],opts:Object.keys(CV).map(y=>[+y,y])}],
  svg:s=>{let b=ln(30,90,370,90,ink,4);const ys=Object.keys(CV).map(Number);ys.forEach((y,i)=>{const x=50+i*75,on=y===s.y;b+=ci(x,90,on?13:8,on?red:blu)+tx(x,125,y,{fs:on?16:13,c:on?red:ink})});const x=50+ys.indexOf(s.y)*75;b+=bub(Math.max(10,Math.min(250,x-70)),20,140,36,CV[s.y][1],{fs:16,c:CV[s.y][2]==='r'?grn:red});return svg(150,b)},
  ask:s=>({q:['الفعل منتظم (ed) ولا شاذ؟','Regular (ed) or irregular?'],opts:['regular','irregular'],a:CV[s.y][2]==='r'?'regular':'irregular'}),
  out:s=>{const c=CV[s.y];const v=c[2]==='r'?c[1].replace(/(ed|ied)$/,m=>R(m)):R(c[1]);return{t:S(`q:In ${s.y}|a:I|k:${v}|n:${c[3]}.`),ar:`في ${s.y} ${c[4]}.`,why:c[2]==='r'?[`منتظم: ${c[0]} + ed.`,`Regular: ${c[0]} + ed.`]:[`شاذ: ${c[0]} ← ${c[1]}.`,`Irregular: ${c[0]} → ${c[1]}.`]}}},
 think:[['صار وخلص في وقت معروف؟ ← الماضي البسيط.','Did it happen and finish at a known time? → past simple.'],['الفعل شاذ؟ ← احفظه (go → went).','Is the verb irregular? → learn it (go → went).']]};

const FAM={elec:{person:'electrician',subject:'electronics',adj:'electrical',thing:'electricity'},mech:{person:'mechanic',subject:'mechanics',adj:'mechanical',thing:'mechanism'},tech:{person:'technician',subject:'technology',adj:'technical',thing:null},eng:{person:'engineer',subject:'engineering',adj:null,thing:'engine'}};
const FS={person:['My brother is an ','.','أخوي '],subject:['I study ','.','أدرس '],adj:['This is an ',' problem.','هذه مشكلة '],thing:['We need the ','.','نحتاج ']};
const FAR={electrician:'كهربائي',electronics:'إلكترونيات',electrical:'كهربائية',electricity:'الكهرباء',mechanic:'ميكانيكي',mechanics:'علم الميكانيكا',mechanical:'ميكانيكية',mechanism:'الآلية',technician:'فني',technology:'التقنية',technical:'تقنية',engineer:'مهندس',engineering:'الهندسة',engine:'المحرك'};
NH['عائلات الكلمات: الشخص والجهاز والمادة والصفة']={
 say:[`مثل العربي: كهرباء ← كهربائي (الشخص) ← كهربائية (صفة). الإنجليزي نفس الفكرة: ${E('electricity · electrician · electrical')}. قبل ما تختار الكلمة اسأل: أتكلم عن شخص؟ مادة أدرسها؟ صفة قبل اسم؟ ولا شي؟`,
  `Like Arabic, words come in families: ${E('electricity · electrician · electrical')}. Before you choose, ask: Am I talking about a person? A subject I study? An adjective before a noun? Or a thing?`],
 life:[['My uncle is an electrician.','خالي كهربائي.'],['I study engineering.','أدرس هندسة.']],
 scene:{title:['اختر فرد العائلة','Choose the family member'],
  ctrl:[{k:'f',label:['العائلة','Family'],opts:[['elec','electric-'],['mech','mechanic-'],['tech','techn-'],['eng','engine-']]},{k:'r',label:['أبي','I need'],opts:[['person',['شخص','a person']],['subject',['مادة دراسة','a subject']],['adj',['صفة','an adjective']],['thing',['شي','a thing']]]}],
  svg:s=>{const f=FAM[s.f];let b='';['person','subject','adj','thing'].forEach((r,i)=>{const x=10+i*97,on=r===s.r;b+=rc(x,30,90,110,on?'#fff':lgt,{st:on?red:'none',sw:3,rx:12})+tx(x+45,60,r==='adj'?'adjective':r,{fs:12,c:gry})+tx(x+45,100,f[r]||'—',{fs:f[r]&&f[r].length>10?11:14,c:on?red:ink})});return svg(160,b)},
  ask:s=>{const f=FAM[s.f];const o=Object.values(f).filter(Boolean);const a=f[s.r];return a?{q:['وش الكلمة؟','Which word?'],opts:o,a}:null},
  out:s=>{const w=FAM[s.f][s.r];if(!w)return{t:S('q:—'),why:['ما لها كلمة شائعة في هذه العائلة. اختر غيرها.','No common word here. Choose another.']};const art=/^[aeiou]/.test(w)?'an':'a';const fr={person:`q:My brother is ${art}|x:${w}.`,subject:`q:I study|x:${w}.`,adj:`q:This is ${art}|x:${w}|q:problem.`,thing:w==='electricity'?`q:We need|x:${w}.`:`q:Look at the|x:${w}.`}[s.r];const ar_={person:'أخوي ',subject:'أدرس ',adj:'هذه مشكلة ',thing:w==='electricity'?'نحتاج ':'انظر إلى '}[s.r];return{t:S(fr),ar:ar_+FAR[w]+'.',why:[`${{person:'شخص',subject:'مادة',adj:'صفة قبل اسم',thing:'شي'}[s.r]} ← ${w}.`,`${s.r==='adj'?'adjective':s.r} → ${w}.`]}}},
 think:[['أتكلم عن شخص؟ مادة دراسة؟ صفة قبل اسم؟ شي؟','A person? A subject? An adjective? A thing?'],['بعد a / an غالباً شخص، وقبل الاسم صفة.','After a / an: often a person. Before a noun: an adjective.']]};

/* =================== الوحدة 3 =================== */
const DM={long:['long','length',[6.8,7.2],7,'طولها'],wide:['wide','width',[1.8,2.0],1.9,'عرضها'],high:['high','height',[3.1,3.3],3.2,'ارتفاعها']};
const near=(v,r)=>Math.abs(v-r)<0.001?'exactly':v<r?'just under':'just over';
NH['السؤال عن المقاسات، و must not be … than']={
 say:[`بالعربي نسأل «كم عرضها؟». بالإنجليزي:${FM('How','+','الصفة','+','is it?')}${E('How wide is it?')} والجواب:${FM("It's",'+','الرقم','+','metres','+','الصفة')}${E("It's 1.8 metres wide.")} وإذا الرقم أقل بشوي نقول ${E('just under')}، وأكثر بشوي ${E('just over')}، وبالضبط ${E('exactly')}. والحد «ممنوع أعرض من 2 م»:${FM('It must not be','+','الصفة','+','er','+','than','+','الرقم')}${E('It must not be wider than 2 metres.')}`,
  `We ask ${E('How wide is it?')} and answer with the number + the adjective: ${E("It's 1.8 metres wide.")} A little less → ${E('just under')}, a little more → ${E('just over')}, the same → ${E('exactly')}. A limit: ${E('It must not be wider than 2 metres.')}`],
 life:[['How tall are you?','كم طولك؟'],['How far is your house?','كم يبعد بيتك؟']],
 scene:{title:['قِس الفان','Measure the van'],
  ctrl:[{k:'d',label:['المقاس','Size'],opts:[['long','long'],['wide','wide'],['high','high']]},{k:'v',label:['الرقم','Number'],range:[-0.1,0.1,0.05],init:-0.05,fmt:x=>'',unit:''}],
  svg:s=>{const d=DM[s.d],v=+(d[3]+s.v).toFixed(2);let b=grd(170)+lorry(110,170,190,110,blu);
   if(s.d==='long')b+=ar2(110,30,300,30)+tx(205,22,v+' m',{fs:15,c:'#b37d00'});if(s.d==='high')b+=ar2(330,170,330,60)+tx(365,118,v+' m',{fs:15,c:'#b37d00'});if(s.d==='wide')b+=rc(10,60,70,100,'none',{st:ink})+ar2(14,150,76,150)+tx(45,140,v+' m',{fs:13,c:'#b37d00'})+tx(45,52,'from behind',{fs:10,c:gry});
   b+=tx(205,195,`${near(v,d[3])} ${d[3]} m`,{fs:14,c:red});return svg(205,b)},
  ask:s=>{const d=DM[s.d],v=+(d[3]+s.v).toFixed(2);return{q:[`الرقم ${v} مقارنة بـ ${d[3]}؟`,`${v} compared with ${d[3]}?`],opts:['just under','exactly','just over'],a:near(v,d[3])}},
  out:s=>{const d=DM[s.d],v=+(d[3]+s.v).toFixed(2),w=near(v,d[3]);return{t:S(`x:How|k:${d[0]}|q:is it?|q:— It's|x:${w}|n:${d[3]} metres|k:${d[0]}.`),ar:`كم ${d[4]}؟ — ${w==='exactly'?'بالضبط':w==='just under'?'أقل بقليل من':'أكثر بقليل من'} ${d[3]} م.`,why:[`السؤال:${FM('How','+','الصفة','+','is it?')}الجواب:${FM("It's",'+','الرقم','+','الصفة')}`,'Question: How + adjective. Answer: number + adjective.']}}},
 think:[[`أسأل عن أي مقاس؟ اختر صفته:${FM('How','+','(long / wide / high / heavy)','+','is it?')}`,'Which size? → How + its adjective.'],['الرقم أقل بشوي؟ أكثر بشوي؟ بالضبط؟','A little less? A little more? Exactly?']]};

const OB={lorry:{h:3.2,l:8,w:8000,p:90000},van:{h:2.4,l:5.5,w:3000,p:45000},car:{h:1.5,l:4.5,w:1500,p:30000}};
const AD={high:['h',1,'higher','أعلى'],low:['h',-1,'lower','أوطى'],long:['l',1,'longer','أطول'],short:['l',-1,'shorter','أقصر'],heavy:['w',1,'heavier','أثقل'],light:['w',-1,'lighter','أخف'],expensive:['p',1,'more expensive','أغلى'],cheap:['p',-1,'cheaper','أرخص']};
const ARN={lorry:'الشاحنة',van:'الفان',car:'السيارة'};
const cmpWin=s=>{const a=AD[s.a],x=OB[s.x][a[0]],y=OB[s.y][a[0]];return (x-y)*a[1]>0?s.x:s.y};
const UN={h:'m',l:'m',w:'kg',p:'SAR'};
NH['صيغة المقارنة']={
 say:[`لما تقارن بين شيئين بالعربي تقول «أطول من». بالإنجليزي:${FM('الصفة','+','er','+','than')}${E('longer than')}. والصفة الطويلة ما تاخذ ${E('er')}، نحط قبلها ${E('more')}:${FM('more','+','الصفة','+','than')}${E('more expensive than')}`,
  `To compare two things, use the adjective + ${E('er')} + ${E('than')}: ${E('longer than')}. Long adjectives don't take er; put ${E('more')} before them: ${E('more expensive than')}.`],
 life:[['My brother is taller than me.','أخوي أطول مني.'],['Gold is more expensive than silver.','الذهب أغلى من الفضة.']],
 scene:{title:['أيهما أكبر؟','Which one is more?'],
  ctrl:[{k:'x',label:['الأول','First'],opts:[['lorry','lorry'],['van','van'],['car','car']]},{k:'y',label:['الثاني','Second'],opts:[['car','car'],['van','van'],['lorry','lorry']]},{k:'a',label:['الصفة','Adjective'],opts:Object.keys(AD).map(k=>[k,k])}],
  svg:s=>{const a=AD[s.a],k=a[0];const D=(o,x)=>{const O=OB[o],L=O.l*24,H=O.h*40;return (o==='lorry'?lorry(x,180,L,H,grn):o==='van'?lorry(x,180,L,H,blu):car(x,180,L,H,red))+tx(x+L/2,200,o,{fs:13})+(k==='h'?ar2(x+L+12,180,x+L+12,180-H)+tx(x+L+12,170-H,O.h+' m',{fs:12,c:'#b37d00'}):k==='l'?ar2(x,186-H-14,x+L,186-H-14)+tx(x+L/2,180-H-22,O.l+' m',{fs:12,c:'#b37d00'}):tx(x+L/2,180-H-10,(k==='w'?O.w+' kg':O.p.toLocaleString('en')+' SAR'),{fs:12,c:'#b37d00'}))};
   if(s.x===s.y)return svg(210,grd(180)+tx(200,100,'choose two different things',{c:red}));return svg(210,grd(180)+D(s.x,10)+D(s.y,225))},
  ask:s=>s.x===s.y?null:{q:[`Which is ${AD[s.a][2]}?`,`Which is ${AD[s.a][2]}?`],opts:['the '+s.x,'the '+s.y],a:'the '+cmpWin(s)},
  out:s=>{if(s.x===s.y)return{t:S('q:—'),why:['اختر شيئين مختلفين.','Choose two different things.']};const a=AD[s.a],w=cmpWin(s),l=w===s.x?s.y:s.x;const c=a[2].startsWith('more ')?`x:more|k:${a[2].slice(5)}`:`k:${a[2].replace(/(ier|er|r)$/,m=>R(m))}`;return{t:S(`a:The ${w}|q:is|${c}|x:than|n:the ${l}.`),ar:`${ARN[w]} ${a[3]} من ${ARN[l]}.`,why:a[2].startsWith('more ')?[`صفة طويلة:${FM('more','+','الصفة','+','than')}`,'Long adjective → more + adjective + than.']:[`صفة قصيرة:${FM('الصفة','+','er','+','than')}`,'Short adjective → adjective + er + than.']}}},
 think:[['أقارن بين شيئين؟ ← than.','Am I comparing two things? → than.'],[`الصفة قصيرة؟${FM('الصفة','+','er')}طويلة؟${FM('more','+','الصفة')}`,'Short adjective? → er. Long? → more.'],['آخرها y؟ ← ier. حرف واحد بعد حركة (big)؟ ← نكرره: bigger.','Ends in y? → ier. Short like big? → double: bigger.']]};

NH['too و enough']={
 say:[`لو الشي أكبر من مكانه: نقول عن الشي «زيادة عن اللزوم» ${E('too')}، ونقول عن المكان «مو كافي» ${E('not … enough')}. نفس المشكلة بطريقتين، والفرق مين نتكلم عنه.`,
  `If a thing is bigger than its space, we say the thing is ${E('too')} big, and the space is ${E('not')} big ${E('enough')}. The same problem two ways; the difference is who we talk about.`],
 life:[['This shirt is too small for me.','هالقميص صغير عليّ.'],["The room isn't big enough for us.",'الغرفة مو كبيرة بما يكفي لنا.']],
 scene:{title:['ارفع الجسر أو نزّله','Move the bridge up or down'],
  ctrl:[{k:'h',label:['ارتفاع الجسر','Bridge height'],range:[2.5,3.3,0.1],init:2.7,fmt:x=>(+x).toFixed(1),unit:'m'},{k:'v',label:['نتكلم عن','Talk about'],opts:[['lorry','the lorry'],['bridge','the bridge']]}],
  svg:s=>{const g=190,px=m=>g-m*45,fits=s.h>2.9+1e-9,sh=fits?150:0;let b=grd(g)+rc(240,px(s.h)-22,130,22,gry,{rx:2})+rc(240,px(s.h),16,g-px(s.h),lgt,{rx:0})+rc(354,px(s.h),16,g-px(s.h),lgt,{rx:0})+tx(305,px(s.h)-28,(+s.h).toFixed(1)+' m',{fs:14,c:blu});
   b+=`<g transform="translate(${sh},0)">${lorry(30,g,170,2.9*45,grn)}${tx(95,px(2.9)-8,'2.9 m',{fs:14,c:grn})}</g>`;b+=fits?ok(370,30,1.2):no(370,30,1.2)+tx(200,30,'STOP',{fs:22,c:red});return svg(205,b)},
  ask:s=>{const fits=s.h>2.9+1e-9;return fits?{q:['تمر الشاحنة؟','Can the lorry go under?'],opts:['yes','no'],a:'yes'}:{q:['مين الكبير هنا؟','Which one is too big?'],opts:['the lorry','the bridge'],a:'the lorry',hint:['الشاحنة أعلى من الجسر.','The lorry is higher than the bridge.']}},
  out:s=>{const fits=s.h>2.9+1e-9;if(fits)return{t:S('a:The bridge|q:is|k:high|x:enough|n:for the lorry.'),ar:'الجسر عالٍ بما يكفي للشاحنة — تمر.',why:[`المكان كافي:${FM('الصفة','+','enough')}`,'The space is OK → adjective + enough.']};return s.v==='lorry'?{t:S('a:The lorry|q:is|x:too|k:high|n:for the bridge.'),ar:'الشاحنة عالية زيادة عن اللزوم على الجسر.',why:[`عن الشي الكبير:${FM('too','+','الصفة','+','for')}`,'About the big thing → too + adjective.']}:{t:S("a:The bridge|x:isn't|k:high|x:enough|n:for the lorry."),ar:'الجسر مو عالي بما يكفي للشاحنة.',why:[`عن المكان الصغير:${FM('not','+','الصفة','+','enough','+','for')}`,'About the small space → not + adjective + enough.']}}},
 think:[[`مين الكبير؟${FM('too','+','الصفة')}`,'Which is too big? → too + adjective.'],[`مين الصغير (المكان)؟${FM('not','+','الصفة','+','enough')}`,'Which is too small (the space)? → not + adjective + enough.']]};

const PO={want:["Give me a catalogue.","I'd like a catalogue, please.",'ودّي كتالوج لو سمحت.','Saying what you want'],offer:["I send you the table.","Would you like me to send you the table?",'تبي أرسل لك الجدول؟','Offering'],ask:["What's your name?","Could I have your name, please?",'ممكن اسمك لو سمحت؟','Asking someone'],check:["What?","Sorry, could you repeat that, please?",'عفواً، ممكن تعيد لو سمحت؟','Checking']};
NH['العبارات المهذبة في الهاتف']={
 say:[`في التلفون نتكلم بأدب: بدل «أبي» نقول «ودّي» ${E("I'd like …")}، وبدل «عطني اسمك» نقول «ممكن اسمك؟» ${E('Could I have your name, please?')} ولما ما نسمع زين ما نقول «ها؟» نقول ${E('Sorry, could you repeat that?')}`,
  `On the phone we speak politely: instead of "I want" we say ${E("I'd like …")}; instead of "Give me your name" we say ${E('Could I have your name, please?')} If we don't hear well we say ${E('Sorry, could you repeat that?')}`],
 life:[["I'd like a coffee, please.",'ودّي قهوة لو سمحت.'],['Could you help me, please?','ممكن تساعدني لو سمحت؟']],
 scene:{title:['خلّ العميل مبسوط','Keep the customer happy'],
  ctrl:[{k:'f',label:['الغرض','Purpose'],opts:Object.keys(PO).map(k=>[k,PO[k][3]])}],
  svg:s=>svg(170,rc(40,30,70,120,ink,{rx:14})+rc(48,44,54,80,'#cfe3ee',{rx:4})+bub(130,40,250,40,PO[s.f][0],{st:red,c:red,fs:13})+no(370,40,0.8)+ci(330,128,26,yel)+ci(320,122,3,ink)+ci(340,122,3,ink)+`<path d="M318 138 q12 -8 24 0" stroke="${ink}" stroke-width="3" fill="none"/>`+tx(240,135,'customer:',{fs:12,c:gry})),
  ask:s=>({q:['أي جملة مؤدبة؟','Which one is polite?'],opts:[PO[s.f][0],PO[s.f][1]].sort(),a:PO[s.f][1],hint:['المؤدبة فيها Could / Would / I\'d like و please.',"Polite ones use Could / Would / I'd like and please."]}),
  out:s=>{const p=PO[s.f];const m=p[1].match(/^(I'd like|Would you like me to|Could I have|Sorry, could you)(.*)$/);return{t:S(`x:${m[1]}|q:${m[2].trim()}`),ar:p[2],why:[`بدل «${p[0]}» ← عبارة مهذبة.`,`Instead of "${p[0]}" → a polite phrase.`]}}},
 think:[['وش أبي؟ أطلب شي؟ أعرض خدمة؟ أسأل؟ أتأكد؟','What do I want: ask for something, offer, ask a question, or check?'],["أستخدم Could / Would / I'd like و please.","Use Could / Would / I'd like and please."]]};

NH['much + المقارنة، و one']={
 say:[`لو الفرق كبير بالعربي نقول «أخف بكثير». بالإنجليزي ${E('much')} قبل المقارنة: ${E('much lighter')}. ولو الفرق صغير: ${E('a bit lighter')}. ولما تختار بين نوعين ما تكرر الاسم: «أبي الأسود» = ${E('the black one')}.`,
  `For a big difference: ${E('much')} before the comparative: ${E('much lighter')}. For a small one: ${E('a bit lighter')}. When you choose between two kinds, don't repeat the noun: ${E('the black one')}.`],
 life:[['My new phone is much faster.','جوالي الجديد أسرع بكثير.'],['I want the red one.','أبي الأحمر.']],
 scene:{title:['غيّر وزن الجوال','Change the phone weight'],
  ctrl:[{k:'w',label:['وزن Fonarama','Fonarama weight'],range:[95,130,5],init:95,unit:'g'},{k:'c',label:['اللون','Colour'],opts:[['black','black'],['white','white']]}],
  svg:s=>{const big=135-s.w>=20;const bar=(x,v,c,n)=>rc(x,170-v,70,v,c,{rx:8})+tx(x+35,165-v,v+' g',{fs:13})+tx(x+35,190,n,{fs:13});return svg(200,bar(90,135,lgt,'Classic')+bar(240,s.w,s.c==='black'?ink:'#f4f4f4',"Fonarama")+`<rect x="240" y="${170-s.w}" width="70" height="${s.w}" rx="8" fill="none" stroke="${ink}"/>`+tx(200,24,(135-s.w)+' g lighter',{fs:15,c:big?red:'#b37d00'}))},
  ask:s=>({q:['الفرق كبير ولا صغير؟','Is the difference big or small?'],opts:['big','small'],a:135-s.w>=20?'big':'small'}),
  out:s=>{const big=135-s.w>=20;return{t:S(`a:The Fonarama|q:is|x:${big?'much':'a bit'}|k:light${R('er')}|x:than|n:the Classic.|q:— The ${s.c}|x:one,|q:please.`),ar:`الفوناراما أخف ${big?'بكثير':'بقليل'} من الكلاسيك. — ${s.c==='black'?'الأسود':'الأبيض'} لو سمحت.`,why:big?['فرق كبير ← much. ولا نكرر phone ← one.','Big difference → much. Instead of repeating phone → one.']:['فرق صغير ← a bit. ولا نكرر phone ← one.','Small difference → a bit. Instead of repeating phone → one.']}}},
 think:[['الفرق كبير؟ ← much. صغير؟ ← a bit.','Big difference? → much. Small? → a bit.'],['أختار بين نوعين والاسم معروف؟ ← one.','Choosing between two kinds of a known thing? → one.']]};

const EN5={A:[90,120,2000],B:[140,190,3500],C:[115,150,2800],D:[75,110,1500],E:[115,160,3000]};
const SP={p:[0,'powerful','قوة','hp'],w:[1,'heavy','وزن','kg'],c:[2,'expensive','سعر','SAR']};
const supW=(a,d)=>{const i=SP[a][0];const ks=Object.keys(EN5);return ks.reduce((b,k)=>(d==='most'?EN5[k][i]>EN5[b][i]:EN5[k][i]<EN5[b][i])?k:b,ks[0])};
const supT=(a,d)=>a==='w'?(d==='most'?'heaviest':'lightest'):a==='c'?(d==='most'?'most expensive':'cheapest'):(d==='most'?'most powerful':'least powerful');
NH['صيغة التفضيل']={
 say:[`لما تقارن بين أكثر من اثنين وتختار الأول فيهم تقول «الأطول، الأغلى». بالإنجليزي ${E('the')} + الصفة + ${E('est')}: ${E('the longest')}، والطويلة ${E('the most')}: ${E('the most expensive')}.`,
  `When you compare more than two things and choose the top one: ${E('the')} + adjective + ${E('est')}: ${E('the longest')}; long adjectives take ${E('the most')}: ${E('the most expensive')}.`],
 life:[['Riyadh is the biggest city in Saudi Arabia.','الرياض أكبر مدينة في السعودية.'],['This is the most expensive car in the shop.','هذي أغلى سيارة في المعرض.']],
 scene:{title:['خمسة محركات (قيم توضيحية)','Five engines (illustrative values)'],
  ctrl:[{k:'a',label:['نقارن','Compare'],opts:[['p','power'],['w','weight'],['c','price']]},{k:'d',label:['نبي','We want'],opts:[['most',['الأكثر','the most']],['least',['الأقل','the least']]]}],
  svg:s=>{const i=SP[s.a][0],mx=Math.max(...Object.values(EN5).map(v=>v[i]));let b='';Object.keys(EN5).forEach((k,j)=>{const v=EN5[k][i],H=v/mx*120,x=30+j*72;b+=rc(x,150-H,50,H,lgt,{rx:6})+tx(x+25,145-H,s.a==='c'?(v/1000)+'k':v,{fs:12})+tx(x+25,172,k,{fs:15})});b+=tx(200,22,SP[s.a][3],{fs:12,c:gry});return svg(185,b)},
  ask:s=>({q:[`Which engine is the ${supT(s.a,s.d)}?`,`Which engine is the ${supT(s.a,s.d)}?`],opts:Object.keys(EN5).map(k=>'Engine '+k),a:'Engine '+supW(s.a,s.d)}),
  out:s=>{const t=supT(s.a,s.d),w=supW(s.a,s.d);const c=/^(most|least) /.test(t)?`x:the ${t.split(' ')[0]}|k:${t.split(' ')[1]}`:`x:the|k:${t.replace(/(iest|est)$/,m=>R(m))}`;return{t:S(`a:Engine ${w}|q:is|${c}|n:engine.`),ar:`المحرك ${w} هو ${{heaviest:'الأثقل',lightest:'الأخف','most expensive':'الأغلى',cheapest:'الأرخص','most powerful':'الأقوى','least powerful':'الأضعف'}[t]}.`,why:['أكثر من اثنين ← the + est / the most.','More than two → the + est / the most.']}}},
 think:[['أقارن أكثر من شيئين وأختار الأول؟ ← the …est / the most.','More than two, and choosing the top one? → the …est / the most.'],['لا تنسَ the قبلها.','Do not forget the.']]};

NH['as … as: التساوي']={
 say:[`لو الشيئين متساويين بالعربي نقول «بنفس القوة». بالإنجليزي: ${E('as')} + الصفة كما هي + ${E('as')}: ${E('as powerful as')}. ولو مو متساويين ونبي نقول إن الأول أقل: ${E('not as … as')}.`,
  `If two things are the same: ${E('as')} + adjective + ${E('as')}: ${E('as powerful as')}. If the first is less: ${E('not as … as')}.`],
 life:[['My son is as tall as me now.','ولدي صار بطولي.'],["Tea isn't as expensive as coffee.",'الشاي مو غالي مثل القهوة.']],
 scene:{title:['غيّر قوة المحرك C','Change the power of Engine C'],
  ctrl:[{k:'p',label:['قوة C','Power of C'],range:[95,135,5],init:115,unit:'hp'}],
  svg:s=>{const bar=(x,v,n,c)=>rc(x,170-v,80,v,c,{rx:8})+tx(x+40,164-v,v+' hp',{fs:14})+tx(x+40,192,'Engine '+n,{fs:14});return svg(200,bar(90,s.p,'C',s.p===115?grn:s.p<115?yel:blu)+bar(230,115,'E',lgt)+(s.p===115?tx(200,24,'=',{fs:30,c:grn}):''))},
  ask:s=>({q:['متساويين؟','Are they the same?'],opts:['yes','no'],a:s.p===115?'yes':'no'}),
  out:s=>s.p===115?{t:S('a:Engine C|q:is|x:as|k:powerful|x:as|n:Engine E.'),ar:'المحرك C بنفس قوة المحرك E.',why:['متساويين ← as + الصفة + as.','The same → as + adjective + as.']}:s.p<115?{t:S("a:Engine C|x:isn't as|k:powerful|x:as|n:Engine E."),ar:'المحرك C مو بقوة المحرك E.',why:['الأول أقل ← not as … as.','The first is less → not as … as.']}:{t:S('a:Engine C|q:is|x:more|k:powerful|x:than|n:Engine E.'),ar:'المحرك C أقوى من المحرك E.',why:['الأول أكثر ← more … than.','The first is more → more … than.']}},
 think:[['متساويين؟ ← as + الصفة + as.','The same? → as + adjective + as.'],['الأول أقل؟ ← not as … as.','The first is less? → not as … as.']]};

/* =================== الوحدة 4 =================== */
const PS={rock:['Large scoops','collect','the rocks','are','collected','by large scoops','المغارف الكبيرة تجمع الصخور.','الصخور تُجمع بالمغارف الكبيرة.'],cut:['Hydraulic cylinders','push','the cutter','is','pushed','by hydraulic cylinders','المكابس الهيدروليكية تدفع القاطعة.','القاطعة تُدفع بالمكابس الهيدروليكية.'],chair:['The workers','make','the chairs','are','made','by the workers','العمّال يصنعون الكراسي.','الكراسي تُصنع بواسطة العمّال.'],prop:['A powerful engine','drives','the propeller','is','driven','by a powerful engine','محرك قوي يحرّك الرفّاص.','الرفّاص يُحرَّك بمحرك قوي.']};
NH['المبني للمعلوم والمبني للمجهول']={
 say:[`بالعربي نقول «صنع العامل الكرسي» (نعرف مين صنع). أو «صُنِعَ الكرسي» (المهم الكرسي، مو مين صنعه). الثانية اسمها المبني للمجهول. بالإنجليزي: الشي أول + ${E('is / are')} + التصريف الثالث، وإذا نبي نذكر مين سوّاه نضيف ${E('by')}. نستخدمه كثيراً في وصف الآلات والمصانع، لأن المهم الشي وش يصير له.`,
  `We can say "The worker made the chair" (we know who) or "The chair was made" (the chair is important). The second is the passive: the thing first + ${E('is / are')} + past participle, and ${E('by')} + the doer if we want. We use it a lot for machines and factories.`],
 life:[['My father washes the car.','أبوي يغسل السيارة.'],['The car is washed every Friday.','السيارة تُغسل كل جمعة.']],
 scene:{title:['حوّل الجملة وشوف القطع تتحرك','Change the sentence and watch the pieces move'],
  ctrl:[{k:'s',label:['الجملة','Sentence'],opts:[['rock','scoops'],['cut','cutter'],['chair','chairs'],['prop','propeller']]},{k:'v',label:['المهم','Important'],opts:[['a',['اللي يسوي','the doer']],['p',['الشي','the thing']]]}],
  svg:s=>{const p=PS[s.s],pa=s.v==='p';const op=pa?0.25:1;const D={rock:`<g opacity="${op}"><path d="M50 70 H130 L115 120 H65Z" fill="${grn}"/>${ln(130,72,150,40,ink,6)}</g>`,cut:`<g opacity="${op}"><rect x="45" y="80" width="70" height="30" rx="6" fill="${grn}"/><rect x="115" y="89" width="30" height="12" fill="${ink}"/></g>`,chair:man(90,110,grn,1.2,op),prop:`<g opacity="${op}"><rect x="45" y="65" width="90" height="60" rx="8" fill="${grn}"/><circle cx="75" cy="95" r="16" fill="${ink}"/></g>`}[s.s];return svg(170,D+tx(90,160,p[0].toLowerCase(),{fs:12,c:grn,op:pa?0.4:1})+ar(130,80,240,80,yel,5)+tx(185,70,p[1],{fs:13,c:'#b37d00'})+rc(260,50,100,60,blu,{rx:10,op:1})+tx(310,86,p[2].replace('the ',''),{fs:13,c:'#fff'})+(pa?rc(254,44,112,72,'none',{st:red,sw:4,rx:14}):''))},
  ask:s=>s.v==='p'?{q:['الشي واحد ولا أكثر؟','Is the thing one or more?'],opts:['is','are'],a:PS[s.s][3]}:null,
  out:s=>{const p=PS[s.s];return s.v==='a'?{t:S(`a:${p[0]}|k:${p[1]}|n:${p[2]}.`),ar:p[6],why:['المعلوم: اللي يسوي الفعل أول.','Active: the doer comes first.']}:{t:S(`n:${cap(p[2])}|x:${p[3]}|k:${p[4]}|a:${p[5]}.`),ar:p[7],why:[`المجهول: الشي أول + ${p[3]} + التصريف الثالث (+ by).`,`Passive: the thing first + ${p[3]} + past participle (+ by).`]}}},
 think:[['الشي يسوي الفعل، ولا الفعل يصير له؟','Does the thing do the action, or does the action happen to it?'],['الفعل يصير له ← is / are + التصريف الثالث.','It happens to it → is / are + past participle.'],['الشي واحد ← is. أكثر ← are.','One thing → is. More → are.']]};

const OIL=[['Run the engine for a few minutes.','First','the engine','is run','for a few minutes','أولاً يُشغَّل المحرك بضع دقائق.',['is run','is runned','runs']],['Switch off the engine.','Then','it','is switched off','','ثم يُطفأ.',['is switched off','switches off','are switched off']],['Take off the oil drain plug.','Now','the oil drain plug','is taken off','','الآن تُنزع سدّادة تصريف الزيت.',['is taken off','is took off','takes off']],['Empty the old oil into a container.','Next','the old oil','is emptied','into a container','بعدها يُفرَّغ الزيت القديم في وعاء.',['is emptied','is emptyed','empties']],['Put the oil drain plug back on.','Then','the oil drain plug','is put','back on','ثم تُعاد سدّادة التصريف.',['is put','is putted','are put']],['Pour in the new oil.','Finally','the new oil','is poured','in','أخيراً يُصبّ الزيت الجديد.',['is poured','pours','are poured']]];
NH['من التعليمات إلى وصف العملية']={
 say:[`الكتالوج يقول لك «شغّل المحرك» (أمر لك أنت). لكن لو تشرح لأحد كيف تصير العملية في الورشة تقول «يُشغّل المحرك أولاً، ثم يُطفأ…». هذا وصف بالمبني للمجهول، ونرتّب الخطوات بـ ${E('First · Then · Next · Now · Finally')}.`,
  `A manual tells you "Run the engine" (an order to you). To describe how the process happens, we say "First the engine is run, then it is switched off…". That is the passive, and we order the steps with ${E('First · Then · Next · Now · Finally')}.`],
 life:[['First the water is boiled.','أول شي يُغلى الماء.'],['Then the tea is added.','بعدها يُضاف الشاي.']],
 scene:{title:['تغيير زيت السيارة خطوة خطوة','Changing the oil step by step'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,6,1],init:1},{k:'m',label:['الأسلوب','Style'],opts:[['ins',['تعليمة','instruction']],['des',['وصف','description']]]}],
  svg:s=>{let b='';OIL.forEach((o,j)=>{const x=20+j*62,on=j===s.i-1,done=j<s.i-1;b+=ci(x+24,40,20,on?red:done?grn:lgt)+tx(x+24,46,j+1,{fs:15,c:on||done?'#fff':ink})+(j<OIL.length-1?ln(x+46,40,x+60,40,gry,3):'')});b+=tx(200,100,OIL[s.i-1][1],{fs:22,c:red})+tx(200,135,OIL[s.i-1][0],{fs:14,c:gry});return svg(150,b)},
  ask:s=>s.m==='des'?{q:[`${OIL[s.i-1][1]} ${OIL[s.i-1][2]} … ؟`,`${OIL[s.i-1][1]} ${OIL[s.i-1][2]} …?`],opts:[...OIL[s.i-1][6]].sort(),a:OIL[s.i-1][3]}:null,
  out:s=>{const o=OIL[s.i-1];return s.m==='ins'?{t:S(`k:${o[0].split(' ')[0]}|n:${o[0].split(' ').slice(1).join(' ')}`),ar:o[5].replace(/^(أولاً|ثم|الآن|بعدها|أخيراً) /,''),why:['تعليمة: تبدأ بالفعل (أمر لك).','Instruction: starts with the verb.']}:{t:S(`x:${o[1]}|n:${o[2]}|k:${o[3]}${o[4]?'|q:'+o[4]:''}.`),ar:o[5],why:['وصف: كلمة الترتيب + الشي + is + التصريف الثالث.','Description: order word + thing + is + past participle.']}}},
 think:[['أعطي أمر ولا أوصف العملية؟','Am I giving an order or describing the process?'],['وصف ← First / Then / Next … + الشي + is / are + التصريف الثالث.','Description → First / Then / Next … + thing + is / are + past participle.']]};

const WHY={paint:['The car body','is painted','to protect it from rust','تُطلى السيارة لتحميها من الصدأ',['to protect it from rust','to make it heavier','to clean the engine']],turn:['The chassis','is turned upside down','to make the work easier','يُقلب الشاسيه لتسهيل العمل',['to make the work easier','to paint the roof','to check the lights']],test:['The wheels','are tested','to check their movement','تُختبر العجلات لفحص حركتها',['to check their movement','to make them black','to fill them with oil']],hand:['The body','is checked by hand','to find faults','يُفحص الهيكل يدوياً لإيجاد العيوب',['to find faults','to paint it','to weld it']]};
NH['الغرض: to + الفعل']={
 say:[`بالعربي: «ندهن السيارة عشان نحميها». كلمة «عشان» بالإنجليزي = ${E('to')} + الفعل كما هو: ${E('to protect it')}. ونسأل عن السبب بـ ${E('Why?')} والجواب يبدأ بـ ${E('To …')}`,
  `"We paint the car to protect it." The purpose = ${E('to')} + the verb: ${E('to protect it')}. We ask with ${E('Why?')} and the answer starts with ${E('To …')}`],
 life:[['I study to pass the test.','أذاكر عشان أنجح في الاختبار.'],['I went to the shop to buy bread.','رحت البقالة عشان أشتري خبز.']],
 scene:{title:['مصنع السيارات: ليش؟','Car factory: why?'],
  ctrl:[{k:'s',label:['المحطة','Station'],opts:[['paint','paint'],['turn','turn over'],['test','test wheels'],['hand','check by hand']]}],
  svg:s=>{let b=grd(170);if(s.s==='paint')b+=car(110,170,180,80,blu)+`<path d="M300 60 l30 -10 l0 30z" fill="${ink}"/>`+`<path d="M300 66 q-30 10 -40 40" stroke="${blu}" stroke-width="6" fill="none" stroke-dasharray="4 6"/>`;
   if(s.s==='turn')b+=`<g transform="translate(400,170) scale(-1,-1) translate(110,80)">${car(0,0,180,80,gry)}</g>`+`<path d="M90 60 a40 40 0 1 1 0 60" stroke="${grn}" stroke-width="4" fill="none"/>`;
   if(s.s==='test')b+=car(110,170,180,80,gry)+`<path d="M145 140 a22 22 0 1 1 -1 0" stroke="${red}" stroke-width="3" fill="none"/>`+`<path d="M255 140 a22 22 0 1 1 -1 0" stroke="${red}" stroke-width="3" fill="none"/>`;
   if(s.s==='hand')b+=car(60,170,180,80,gry)+man(300,150,blu,1.1)+ar(280,110,230,110,grn,4);return svg(185,b)},
  ask:s=>({q:['Why?','Why?'],opts:[...WHY[s.s][4]].sort(),a:WHY[s.s][2]}),
  out:s=>{const w=WHY[s.s];const[t,...r]=w[2].split(' ');return{t:S(`n:${w[0]}|k:${w[1]}|x:${t}|k:${r[0]}|q:${r.slice(1).join(' ')}.`),ar:w[3]+'.',why:['الغرض ← to + الفعل كما هو.','Purpose → to + the verb.']}}},
 think:[['يسأل Why (ليش)؟','Is the question Why?'],['الجواب غرض؟ ← To + الفعل كما هو.','Is the answer a purpose? → To + the verb.']]};

const PQ={how:['How','the parts','delivered','are','By truck or rail.','كيف تُوصَّل القطع؟ — بالشاحنات أو القطار.'],where:['Where','the panels','welded','are','In the body shop.','أين تُلحم الألواح؟ — في قسم الهياكل.'],why:['Why','the body','painted','is','To protect it from rust.','لماذا يُطلى الهيكل؟ — لحمايته من الصدأ.'],who:['Who','the body','checked','is','By human workers.','من يفحص الهيكل؟ — عمّال.']};
NH['الأسئلة بالمبني للمجهول']={
 say:[`السؤال مثل ما تقلب الجملة: ${E('The parts are delivered by truck.')} ← نقدّم ${E('are')} قبل الشي ونحط كلمة السؤال في الأول: ${E('How are the parts delivered?')}`,
  `A question turns the sentence around: ${E('The parts are delivered by truck.')} → move ${E('are')} before the thing and put the question word first: ${E('How are the parts delivered?')}`],
 life:[['Where is this phone made?','وين يُصنع هالجوال؟'],['When is the shop opened?','متى يُفتح المحل؟']],
 scene:{title:['اقلب الجملة إلى سؤال','Turn the sentence into a question'],
  ctrl:[{k:'q',label:['السؤال','Question'],opts:[['how','How'],['where','Where'],['why','Why'],['who','Who … by']]},{k:'v',label:['الشكل','Form'],opts:[['s',['جملة','sentence']],['q',['سؤال','question']]]}],
  svg:s=>{const ic={how:grd(150)+lorry(120,150,170,90,grn,'PARTS'),where:grd(150)+rc(110,50,180,100,'#b0bec5',{rx:4})+`<path d="M100 52 L200 15 L300 52Z" fill="${ink}"/>`+tx(200,110,'BODY SHOP',{fs:13}),why:grd(150)+car(110,150,180,80,blu)+`<path d="M300 40 l30 -10 l0 30z" fill="${ink}"/><path d="M300 46 q-30 10 -40 40" stroke="${blu}" stroke-width="6" fill="none" stroke-dasharray="4 6"/>`,who:grd(150)+car(60,150,180,80,gry)+man(300,130,blu,1.1)}[s.q];return svg(160,ic+tx(370,40,s.v==='q'?'?':'.',{fs:40,c:s.v==='q'?red:gry}))},
  ask:s=>s.v==='q'?{q:['وش يجي بعد كلمة السؤال؟','What comes after the question word?'],opts:[PQ[s.q][3],PQ[s.q][1],PQ[s.q][2]],a:PQ[s.q][3]}:null,
  out:s=>{const p=PQ[s.q];const ans=p[4].replace(/\.$/,'').replace(/^By /,'by ').replace(/^In /,'in ').replace(/^To /,'to ');return s.v==='s'?{t:S(`n:${cap(p[1])}|x:${p[3]}|k:${p[2]}|q:${ans}.`),ar:p[5].split(' — ')[0].replace('؟',''),why:['جملة: الشي + is/are + التصريف الثالث.','Sentence: thing + is/are + past participle.']}:{t:S(`a:${p[0]}|x:${p[3]}|n:${p[1]}|k:${p[2]}${s.q==='who'?'|x:by':''}?|q:— ${p[4]}`),ar:p[5],why:['سؤال: كلمة السؤال + is/are + الشي + التصريف الثالث.','Question: question word + is/are + thing + past participle.']}}},
 think:[['أسأل عن عملية؟ ← كلمة السؤال + is / are + الشي + التصريف الثالث.','Asking about a process? → question word + is / are + thing + past participle.']]};

const WW={sat:['Signals are sent to the satellite.','The satellite sends them to Earth.','Signals are sent to the satellite,','which','then sends them to Earth.','تُرسل الإشارات إلى القمر الصناعي، الذي يرسلها إلى الأرض.','t'],adel:['John reports to Adel.','Adel is the training manager.','John reports to Adel,','who','is the training manager.','جون يرفع تقاريره إلى عادل، وهو مدير التدريب.','p'],card:['The cable goes to the DTV card.','The card is inside the computer.','The cable goes to the DTV card,','which','is inside the computer.','الكابل يصل إلى بطاقة التلفاز الرقمي، التي داخل الحاسوب.','t'],bro:['This is my brother.','He works in Riyadh.','This is my brother,','who','works in Riyadh.','هذا أخوي، اللي يشتغل في الرياض.','p']};
NH['ربط جملتين بـ which و who']={
 say:[`بالعربي نربط جملتين بـ «اللي»: «هذا أخوي، اللي يشتغل في الرياض». بالإنجليزي «اللي» = ${E('which')} للأشياء، و ${E('who')} للناس، وقبلها فاصلة.`,
  `To join two sentences we use ${E('which')} for things and ${E('who')} for people, with a comma before it.`],
 life:[['This is my brother, who works in Riyadh.','هذا أخوي، اللي يشتغل في الرياض.'],['I have a car, which is very old.','عندي سيارة، قديمة مرة.']],
 scene:{title:['اربط الجملتين','Join the two sentences'],
  ctrl:[{k:'p',label:['الجملتان','Sentences'],opts:[['sat','satellite'],['adel','Adel'],['card','DTV card'],['bro','my brother']]},{k:'j',label:['الشكل','Form'],opts:[['2',['جملتان','two sentences']],['1',['جملة وحدة','one sentence']]]}],
  svg:s=>{const w=WW[s.p];return svg(90,(w[6]==='p'?man(200,70,blu,1):rc(170,20,60,50,blu,{rx:10})+ln(200,70,200,82,ink,3))+tx(200,88,w[6]==='p'?'a person':'a thing',{fs:12,c:gry}))},
  ask:s=>s.j==='1'?{q:['شخص ولا شي؟','A person or a thing?'],opts:['which','who'],a:WW[s.p][3]}:null,
  out:s=>{const w=WW[s.p];return s.j==='2'?{t:S(`q:${w[0]}|q:${w[1]}`),ar:w[5],why:['جملتان، والاسم يتكرر.','Two sentences; the noun is repeated.']}:{t:S(`q:${w[2]}|x:${w[3]}|q:${w[4]}`),ar:w[5],why:w[3]==='who'?['شخص ← who.','A person → who.']:['شي ← which.','A thing → which.']}}},
 think:[['أبي أربط جملتين عن نفس الاسم؟','Do I want to join two sentences about the same noun?'],['شخص ← who. شي ← which. وقبلها فاصلة.','A person → who. A thing → which. Put a comma before it.']]};

const UNI={m:['metre','metres','cable','long','كابل طوله'],a:['amp','amps','fuse','','فيوز'],v:['volt','volts','battery','','بطارية'],min:['minute','minutes','walk','','مشي']};
NH['الصفة المركبة']={
 say:[`بدل جملة طويلة «الكابل طوله 6 أمتار» نختصرها في كلمتين قبل الاسم: ${E('a 6-metre cable')}. بين الرقم والوحدة شَرطة، والوحدة بدون ${E('s')} لأنها صارت صفة، والصفة ما تنجمع.`,
  `Instead of "The cable is 6 metres long" we can say ${E('a 6-metre cable')}: a hyphen between the number and the unit, and no ${E('s')}, because it is now an adjective.`],
 life:[["It's a ten-minute walk to the mosque.",'المسجد على بعد عشر دقائق مشي.'],['I bought a 12-volt battery.','اشتريت بطارية 12 فولت.']],
 scene:{title:['اختصر الوصف','Make the description short'],
  ctrl:[{k:'u',label:['الوحدة','Unit'],opts:[['m','metre'],['a','amp'],['v','volt'],['min','minute']]},{k:'n',label:['الرقم','Number'],range:[2,20,1],init:6},{k:'f',label:['الشكل','Form'],opts:[['l',['جملة طويلة','long sentence']],['s',['قبل الاسم','before the noun']]]}],
  svg:s=>svg(70,tx(200,45,`${s.n} ${s.f==='s'?UNI[s.u][0]:UNI[s.u][1]}`,{fs:28,c:s.f==='s'?red:blu})),
  ask:s=>s.f==='s'?{q:['مع الصفة قبل الاسم:','Before the noun:'],opts:[UNI[s.u][0],UNI[s.u][1]],a:UNI[s.u][0],hint:['الصفة ما تنجمع: بدون s.','An adjective has no s.']}:null,
  out:s=>{const u=UNI[s.u];if(s.f==='l'){const t=s.u==='m'?`n:The cable|q:is|x:${s.n} ${u[1]}|k:long.`:s.u==='a'?`n:The fuse|q:breaks at|x:${s.n} ${u[1]}.`:s.u==='v'?`n:The battery|q:gives|x:${s.n} ${u[1]}.`:`n:The walk|q:takes|x:${s.n} ${u[1]}.`;return{t:S(t),ar:`${u[4]} ${s.n}.`,why:['جملة طويلة: الوحدة بالجمع.','Long sentence: the unit is plural.']}}return{t:S(`q:It's a|x:${s.n}-${u[0]}|n:${u[2]}.`),ar:`${u[4]} ${s.n}.`,why:['قبل الاسم: رقم-وحدة بدون s.','Before the noun: number-unit, no s.']}}},
 think:[['أبي أختصر الوصف قبل الاسم؟ ← رقم-وحدة.','Do I want a short description before the noun? → number-unit.'],['الوحدة بدون s.','No s on the unit.']]};

const SYN={transmit:['send','The satellite','the signal','يرسل'],receive:['get','The dish','the signal','يستقبل'],convert:['change','The machine','salt water into fresh water','يحوّل'],extract:['take out','The pump','the water','يستخرج'],display:['show','The screen','the picture','يعرض'],operate:['work','The engineer','the crane','يشغّل']};
NH['كلمات متقاربة المعنى']={
 say:[`بالعربي عندنا «يرسل» و«يبعث»: نفس المعنى، وحدة رسمية ووحدة عادية. الكتب التقنية تستخدم الرسمية (${E('transmit')}) وإحنا في الكلام نستخدم البسيطة (${E('send')}). اعرف الاثنتين.`,
  `Like "send" and "transmit": the same meaning, one formal and one simple. Technical texts use the formal one (${E('transmit')}); in speaking we use the simple one (${E('send')}). Know both.`],
 life:[['Send me the photo.','ابعث لي الصورة.'],['The TV shows the news.','التلفزيون يعرض الأخبار.']],
 scene:{title:['رسمي أو بسيط؟','Formal or simple?'],
  ctrl:[{k:'w',label:['الكلمة','Word'],opts:Object.keys(SYN).map(k=>[k,k])},{k:'f',label:['الأسلوب','Style'],opts:[['f',['كتاب تقني','technical text']],['s',['كلام عادي','everyday talk']]]}],
  svg:s=>svg(70,tx(120,45,s.w,{fs:22,c:s.f==='f'?blu:gry})+tx(200,45,'=',{fs:22})+tx(280,45,SYN[s.w][0],{fs:22,c:s.f==='s'?grn:gry})),
  ask:s=>({q:[`وش الكلمة البسيطة لـ ${s.w}؟`,`What is the simple word for ${s.w}?`],opts:Object.values(SYN).map(v=>v[0]).slice(0,6),a:SYN[s.w][0]}),
  out:s=>{const y=SYN[s.w];const v=s.f==='f'?s.w:y[0];const vs=v.replace(/^(\w+)/,m=>m+(/(sh|ch|s|x)$/.test(m)?'es':'s'));return{t:S(`a:${y[1]}|k:${vs}|n:${y[2]}.`),ar:`${y[1]==='The satellite'?'القمر الصناعي':y[1]==='The dish'?'الطبق':y[1]==='The machine'?'الآلة':y[1]==='The pump'?'المضخة':y[1]==='The screen'?'الشاشة':'المهندس'} ${y[3]} …`,why:s.f==='f'?['رسمي (كتاب تقني).','Formal (technical text).']:['بسيط (كلام عادي).','Simple (everyday talk).']}}},
 think:[['الكلمة رسمية؟ وش مقابلها البسيط؟','Is the word formal? What is the simple word?']]};

/* =================== الوحدة 5 =================== */
const TL5={spanner:['a spanner','tightening nuts','tighten nuts','لربط الصواميل',['tightening nuts','cutting paper','measuring heat']],hammer:['a hammer','hammering in nails','hammer in nails','لدق المسامير',['hammering in nails','cutting wood','charging batteries']],scissors:['scissors','cutting paper','cut paper','لقص الورق',['cutting paper','turning screws','measuring current']],charger:['a charger','charging batteries','charge batteries','لشحن البطاريات',['charging batteries','cutting paper','tightening nuts']]};
NH['for + ing و to + الفعل']={
 say:[`نسأل «هذا لإيش؟» = ${E("What's it for?")} والجواب «للقطع» = ${E('for')} + الفعل مع ${E('ing')}: ${E("It's for cutting paper.")} أو نقول «تستخدمه عشان تقص» = ${E('to')} + الفعل كما هو: ${E('You use it to cut paper.')}`,
  `We ask ${E("What's it for?")} and answer ${E('for')} + verb + ${E('ing')}: ${E("It's for cutting paper.")} Or ${E('to')} + the verb: ${E('You use it to cut paper.')}`],
 life:[['A knife is for cutting.','السكين للقطع.'],['I use my phone to take photos.','أستخدم جوالي عشان أصوّر.']],
 scene:{title:['هذي الأداة لإيش؟',"What's this tool for?"],
  ctrl:[{k:'t',label:['الأداة','Tool'],opts:[['spanner','spanner'],['hammer','hammer'],['scissors','scissors'],['charger','charger']]},{k:'f',label:['الشكل','Form'],opts:[['for','for + ing'],['to','to + verb']]}],
  svg:s=>{let b='';if(s.t==='spanner')b=rc(120,90,160,20,gry,{rx:8})+`<path d="M90 80 a26 26 0 1 0 40 30 l-12 -10 l-10 10 z" fill="${gry}"/>`;if(s.t==='hammer')b=rc(190,60,18,110,'#a7744a',{rx:4})+rc(150,40,100,34,ink,{rx:6});if(s.t==='scissors')b=ci(160,130,18,'none',{st:red,sw:6})+ci(220,130,18,'none',{st:red,sw:6})+ln(170,115,260,40,gry,6)+ln(210,115,140,40,gry,6);if(s.t==='charger')b=rc(160,70,80,60,'#fff',{st:ink})+ln(180,130,180,160,ink,4)+ln(220,130,220,160,ink,4)+ln(200,70,200,30,ink,3)+`<path d="M195 92 l-8 16 h12 l-8 16" stroke="${yel}" stroke-width="4" fill="none"/>`;return svg(180,b)},
  ask:s=>({q:["What's it for?","What's it for?"],opts:[...TL5[s.t][4]].sort().map(x=>'for '+x),a:'for '+TL5[s.t][1]}),
  out:s=>{const t=TL5[s.t];const[v1,...r1]=t[1].split(' '),[v2,...r2]=t[2].split(' ');return s.f==='for'?{t:S(`a:${s.t==='scissors'?"They're":"It's"}|x:for|k:${v1.replace(/ing$/,'')+R('ing')}|n:${r1.join(' ')}.`),ar:(s.t==='scissors'?'هو ':'هي ')+t[3]+'.',why:['for + الفعل مع ing.','for + verb + ing.']}:{t:S(`a:You use|n:${s.t==='scissors'?'them':'it'}|x:to|k:${v2}|n:${r2.join(' ')}.`),ar:'تستخدمها '+t[3]+'.',why:['to + الفعل كما هو.','to + the verb as it is.']}}},
 think:[["يسأل What's it for?","Is the question What's it for?"],['بعد for ← ing. بعد to ← الفعل كما هو.','After for → ing. After to → the verb as it is.']]};

const ER={generate:['generat','or','e','generator','machine','generates electricity','مولّد: آلة تولّد الكهرباء'],calculate:['calculat','or','e','calculator','machine','calculates sums','آلة حاسبة: آلة تحسب'],propel:['propel','ler','dbl','propeller','device','pushes a boat forward','رفّاص: يدفع القارب للأمام'],transmit:['transmit','ter','dbl','transmitter','device','sends signals','جهاز إرسال: يرسل الإشارات'],receive:['receiv','er','e','receiver','device','gets signals','جهاز استقبال: يستقبل الإشارات'],drive:['driv','er','e','driver','person','drives a car','سائق: يسوق السيارة']};
NH['أسماء الفاعل -er / -or']={
 say:[`بالعربي من «يولّد» نقول «مُوَلِّد» (اللي يولّد). بالإنجليزي نزيد ${E('er')} أو ${E('or')} على الفعل: ${E('generate → generator')}، ${E('drive → driver')}. إذا آخر الفعل ${E('e')} نحذفه، وأحياناً نكرر الحرف الأخير: ${E('propel → propeller')}.`,
  `From a verb we make the "doer": add ${E('er')} or ${E('or')}: ${E('generate → generator')}, ${E('drive → driver')}. Drop a final ${E('e')}; sometimes double the last letter: ${E('propel → propeller')}.`],
 life:[['My phone charger is broken.','شاحن جوالي خربان.'],['The driver is waiting outside.','السوّاق ينتظر برا.']],
 scene:{title:['مصنع الكلمات','The word factory'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(ER).map(k=>[k,k])}],
  svg:s=>{const e=ER[s.v];const base=e[2]==='dbl'?e[0]+`</tspan><tspan fill="${red}">${e[0].slice(-1)}</tspan><tspan fill="${yel}">${e[1].slice(1)}`:e[0]+`</tspan><tspan fill="${yel}">${e[1]}`;return svg(130,tx(200,40,s.v+(e[2]==='e'?'':''),{fs:20,c:gry})+(e[2]==='e'?tx(200,40,'',{}):'')+`<text x="200" y="100" ${F} font-size="34" font-weight="700" text-anchor="middle"><tspan fill="${ink}">${base}</tspan></text>`)},
  ask:s=>{const e=ER[s.v];return{q:['وش صار للفعل؟','What happened to the verb?'],opts:['+ er','+ or','drop e + er/or','double + er'],a:e[2]==='dbl'?'double + er':e[2]==='e'?'drop e + er/or':(e[1]==='or'?'+ or':'+ er')}},
  out:s=>{const e=ER[s.v];return{t:S(`q:A|n:${e[3]}|q:is a ${e[4]}.|q:It|k:${e[5].split(' ')[0]}|q:${e[5].split(' ').slice(1).join(' ')}.`),ar:e[6]+'.',why:['اسم الفاعل = اللي يسوي الفعل.','The -er/-or noun = the thing or person that does the action.']}}},
 think:[['أبي اسم اللي يسوي الفعل؟ ← الفعل + er / or.','Do I need the doer? → verb + er / or.'],['آخره e؟ احذفه. حرف واحد بعد حركة قصيرة؟ كرره.','Ends in e? Drop it. Short like propel? Double the letter.']]};

const BL={dome:['a dome','dome-shaped','قبة'],sail:['a sail','sail-shaped','شراع'],L:['an L','L-shaped','حرف L'],egg:['an egg','egg-shaped','بيضة']};
NH['looks like و is shaped like و in the shape of']={
 say:[`بالعربي نقول «المبنى يشبه شراع» أو «على شكل قبة». بالإنجليزي «يشبه» = ${E('looks like')} + اسم، و«على شكل» = ${E('is shaped like')} أو ${E('in the shape of')} + اسم. ونقدر نختصرها قبل الاسم: ${E('a dome-shaped building')}.`,
  `"Looks like" + a noun: ${E('It looks like a sail.')} "Shape": ${E('is shaped like')} / ${E('in the shape of')} + a noun. Short before a noun: ${E('a dome-shaped building')}.`],
 life:[['This cloud looks like a camel.','هالغيمة تشبه جمل.'],['The pool is in the shape of an L.','المسبح على شكل حرف L.']],
 scene:{title:['وصف المبنى','Describe the building'],
  ctrl:[{k:'b',label:['المبنى','Building'],opts:[['dome','dome'],['sail','sail'],['L','L'],['egg','egg']]},{k:'f',label:['الشكل','Form'],opts:[['look','looks like'],['shape','is shaped like'],['in','in the shape of'],['adj','…-shaped']]}],
  svg:s=>{let b=grd(180);if(s.b==='dome')b+=`<path d="M120 180 V130 A80 70 0 0 1 280 130 V180Z" fill="${blu}"/>`;if(s.b==='sail')b+=`<path d="M200 180 V30 Q290 110 280 180Z" fill="${blu}"/>`+ln(200,30,200,180,ink,4);if(s.b==='L')b+=`<path d="M120 60 H180 V130 H290 V180 H120Z" fill="${blu}"/>`+tx(200,40,'plan',{fs:12,c:gry});if(s.b==='egg')b+=`<ellipse cx="200" cy="115" rx="60" ry="80" fill="${blu}"/>`;return svg(195,b)},
  ask:s=>s.f==='adj'?{q:['قبل الاسم نكتب:','Before the noun we write:'],opts:[BL[s.b][1],BL[s.b][0]+'-shape'],a:BL[s.b][1]}:null,
  out:s=>{const b=BL[s.b];const t=s.f==='look'?`a:The building|x:looks like|n:${b[0]}.`:s.f==='shape'?`a:The building|x:is shaped like|n:${b[0]}.`:s.f==='in'?`a:The building|q:is|x:in the shape of|n:${b[0]}.`:`q:It's a|x:${b[1]}|a:building.`;return{t:S(t),ar:`المبنى ${s.f==='look'?'يشبه':'على شكل'} ${b[2]}.`,why:s.f==='adj'?['قبل الاسم: الاسم + shaped بشَرطة.','Before a noun: noun-shaped.']:['بعدها اسم (a / an + اسم).','After it: a noun (a / an + noun).']}}},
 think:[['بعدها اسم؟ ← looks like / is shaped like / in the shape of + a + اسم.','A noun follows? → looks like / is shaped like / in the shape of + a noun.'],['أبيها قبل الاسم؟ ← …-shaped.','Before a noun? → …-shaped.']]};

const SH={circle:['circular','دائري'],square:['square','مربع'],triangle:['triangular','مثلث'],rectangle:['rectangular','مستطيل'],cube:['cubic','مكعب'],cylinder:['cylindrical','أسطواني'],sphere:['spherical','كروي'],cone:['conical','مخروطي']};
const SHN={circle:'table',square:'window',triangle:'sign',rectangle:'screen',cube:'box',cylinder:'tank',sphere:'ball',cone:'roof'};
const shp=k=>({circle:ci(200,95,60,blu),square:rc(140,35,120,120,blu,{rx:2}),triangle:`<path d="M200 30 L270 160 H130Z" fill="${blu}"/>`,rectangle:rc(110,55,180,90,blu,{rx:2}),cube:`<path d="M150 70 L190 45 H270 L230 70Z" fill="#6f9bb6"/><path d="M230 70 L270 45 V125 L230 150Z" fill="#244f6a"/>`+rc(150,70,80,80,blu,{rx:0}),cylinder:`<rect x="150" y="50" width="100" height="100" fill="${blu}"/><ellipse cx="200" cy="150" rx="50" ry="14" fill="${blu}"/><ellipse cx="200" cy="50" rx="50" ry="14" fill="#6f9bb6"/>`,sphere:ci(200,95,62,blu)+`<ellipse cx="200" cy="95" rx="62" ry="18" fill="none" stroke="#6f9bb6" stroke-width="3"/>`,cone:`<path d="M200 30 L260 150 H140Z" fill="${blu}"/><ellipse cx="200" cy="150" rx="60" ry="14" fill="#244f6a"/>`})[k];
NH['أسماء الأشكال وصفاتها']={
 say:[`كل شكل له اسم وصفة، مثل العربي «دائرة» و«دائري». الاسم بعد ${E('a')} أو ${E('the')}: ${E("It's a circle.")} والصفة قبل اسم ثاني أو بعد ${E('is')}: ${E('a circular table')}.`,
  `Each shape has a noun and an adjective. The noun comes after ${E('a / the')}: ${E("It's a circle.")} The adjective comes before another noun or after ${E('is')}: ${E('a circular table')}.`],
 life:[['Our dining table is circular.','طاولة الأكل عندنا دائرية.'],['The water tank is a cylinder.','خزان الماء أسطوانة.']],
 scene:{title:['اسم ولا صفة؟','Noun or adjective?'],
  ctrl:[{k:'s',label:['الشكل','Shape'],opts:Object.keys(SH).map(k=>[k,k])},{k:'f',label:['أبي','I need'],opts:[['n',['الاسم','the noun']],['a',['الصفة','the adjective']]]}],
  svg:s=>svg(185,shp(s.s)),
  ask:s=>s.f==='a'?{q:[`وش صفة ${s.s}؟`,`What is the adjective of ${s.s}?`],opts:[SH[s.s][0],s.s+'al',s.s+'ic'].filter((v,i,a)=>a.indexOf(v)===i),a:SH[s.s][0]}:null,
  out:s=>{const a=/^[aeiou]/.test(s.s)?'an':'a';return s.f==='n'?{t:S(`q:It's ${a}|n:${s.s}.`),ar:`هذا ${SH[s.s][1]}.`,why:['الاسم بعد a / an.','The noun comes after a / an.']}:{t:S(`q:It's a|x:${SH[s.s][0]}|n:${SHN[s.s]}.`),ar:`${SHN[s.s]} شكله ${SH[s.s][1]}.`,why:['الصفة قبل الاسم.','The adjective comes before the noun.']}}},
 think:[['قبلها a وبعدها ما فيه اسم؟ ← الاسم (a cylinder).','After a, with no noun after it? → the noun (a cylinder).'],['قبل اسم ثاني؟ ← الصفة (a cylindrical tank).','Before another noun? → the adjective (a cylindrical tank).']]};

const DF={drill:['A drill','tool','which','makes holes','الدريل أداة تسوي ثقوب'],ammeter:['An ammeter','instrument','which','measures electric current','الأميتر جهاز قياس يقيس التيار'],fire:['A firefighter','person','who','puts out fires','رجل الإطفاء شخص يطفي الحرائق'],alarm:['A smoke alarm','device','which','warns people about fire','جهاز إنذار الدخان ينبّه الناس من الحريق'],nurse:['A nurse','person','who','helps sick people','الممرض شخص يساعد المرضى']};
NH['أجزاء التعريف']={
 say:[`لما تعرّف شي تقول ثلاث قطع: الكلمة + نوعها + «اللي يسوي كذا». مثل: «الدريل أداة تسوي ثقوب» = ${E('A drill is a tool which makes holes.')} للأشياء ${E('which')} وللناس ${E('who')}.`,
  `A definition has three parts: the word + its type + what it does. ${E('A drill is a tool which makes holes.')} Use ${E('which')} for things and ${E('who')} for people.`],
 life:[['A doctor is a person who helps sick people.','الطبيب شخص يساعد المرضى.'],['A fridge is a machine which keeps food cold.','الثلاجة آلة تحافظ على الأكل بارد.']],
 scene:{title:['ركّب التعريف','Build the definition'],
  ctrl:[{k:'w',label:['الكلمة','Word'],opts:[['drill','drill'],['ammeter','ammeter'],['fire','firefighter'],['alarm','smoke alarm'],['nurse','nurse']]}],
  svg:s=>{const d=DF[s.w];return svg(90,['Word','is a + type','which / who','what it does'].map((h,i)=>rc(8+i*98,20,92,50,[grn,lgt,red,'#fff3c7'][i],{rx:10})+tx(54+i*98,50,h,{fs:12,c:i===0||i===2?'#fff':ink})).join(''))},
  ask:s=>({q:['شخص ولا شي؟','A person or a thing?'],opts:['which','who'],a:DF[s.w][2]}),
  out:s=>{const d=DF[s.w];const art=/^[aeiou]/.test(d[1])?'an':'a';return{t:S(`a:${d[0]}|q:is ${art}|n:${d[1]}|x:${d[2]}|k:${d[3]}.`),ar:d[4]+'.',why:['الكلمة + is a + النوع + which/who + الوظيفة.','Word + is a + type + which/who + job.']}}},
 think:[['وش نوعه (أداة؟ جهاز؟ شخص؟)','What type is it (tool, device, person)?'],['شخص ← who. شي ← which.','A person → who. A thing → which.'],['وش يسوي؟ ← الفعل + s.','What does it do? → verb + s.']]};

const TY={hammer:['A hammer','tool','is used for hitting nails','المطرقة أداة'],ammeter:['An ammeter','instrument','measures current','الأميتر جهاز قياس'],alarm:['A smoke alarm','device','warns people about smoke','إنذار الدخان جهاز'],generator:['A generator','machine','makes electricity','المولّد آلة'],forklift:['A forklift','vehicle','lifts heavy loads','الرافعة الشوكية مركبة']};
NH['كلمات النوع']={
 say:[`قبل ما تعرّف الشي اختر نوعه الصح: شي تمسكه بيدك وتشتغل فيه ← ${E('tool')}. يقيس ← ${E('instrument')}. جهاز صغير له وظيفة ← ${E('device')}. كبير وفيه محرك ← ${E('machine')}. يمشي وينقل ← ${E('vehicle')}.`,
  `Choose the right type: you hold it and work with it → ${E('tool')}; it measures → ${E('instrument')}; a small thing with one job → ${E('device')}; big, with a motor → ${E('machine')}; it moves and carries → ${E('vehicle')}.`],
 life:[['A pen is a tool for writing.','القلم أداة للكتابة.'],['A thermometer is an instrument.','الثرمومتر جهاز قياس.']],
 scene:{title:['وش نوعه؟','What type is it?'],
  ctrl:[{k:'o',label:['الشي','Object'],opts:Object.keys(TY).map(k=>[k,k])}],
  svg:s=>{let b='';if(s.o==='hammer')b=rc(190,60,18,100,'#a7744a',{rx:4})+rc(150,40,100,34,ink,{rx:6});if(s.o==='ammeter')b=rc(140,40,120,110,'#fff',{st:ink,rx:12})+`<path d="M160 120 A40 40 0 0 1 240 120" stroke="${ink}" stroke-width="3" fill="none"/>`+ln(200,120,225,90,red,4)+tx(200,140,'A',{fs:16});if(s.o==='alarm')b=ci(200,95,50,'#fff',{st:ink})+ci(200,95,12,red)+`<path d="M260 70 q20 25 0 50 M275 60 q30 35 0 70" stroke="${gry}" stroke-width="3" fill="none"/>`;if(s.o==='generator')b=rc(110,60,180,90,yel,{rx:10})+ci(160,105,26,ink)+`<path d="M235 90 l-12 18 h14 l-12 18" stroke="${ink}" stroke-width="4" fill="none"/>`;if(s.o==='forklift')b=grd(170)+rc(150,90,110,60,yel,{rx:6})+ln(140,40,140,160,ink,6)+ln(140,150,90,150,ink,6)+wh(175,160)+wh(240,160);return svg(185,b)},
  ask:s=>({q:['وش نوعه؟','What type is it?'],opts:['tool','instrument','device','machine','vehicle'],a:TY[s.o][1]}),
  out:s=>{const t=TY[s.o];const art=/^[aeiou]/.test(t[1])?'an':'a';return{t:S(`a:${t[0]}|q:is ${art}|x:${t[1]}|q:which|k:${t[2]}.`),ar:t[3]+'.',why:[`النوع: ${t[1]}.`,`The type: ${t[1]}.`]}}},
 think:[['أمسكه بيدي؟ tool. يقيس؟ instrument. صغير بوظيفة؟ device. كبير بمحرك؟ machine. يمشي؟ vehicle.','Hold it? tool. Measures? instrument. Small, one job? device. Big, with a motor? machine. Moves? vehicle.']]};

/* =================== الوحدة 6 =================== */
const SG={helmet:['Helmets','are','worn','wear a helmet','يجب لبس الخوذة',['worn','wear','wore']],gloves:['Gloves','are','worn','wear gloves','يجب لبس القفازات',['worn','wear','weared']],phone:['Phones','are','switched off','switch off your phone','يجب إغلاق الجوالات',['switched off','switch off','switching off']],box:['This box','is','kept','keep this box','يجب حفظ هذا الصندوق',['kept','keep','keeped']]};
const sgSvg=k=>{let b=rc(120,20,160,150,k==='phone'?red:blu,{rx:16});if(k==='helmet')b+=`<path d="M160 120 A40 40 0 0 1 240 120 Z" fill="#fff"/>`+rc(150,118,100,10,'#fff',{rx:4});if(k==='gloves')b+=`<path d="M175 140 V90 q0 -8 7 -8 q7 0 7 8 V70 q0 -8 7 -8 q7 0 7 8 V75 q0 -8 7 -8 q7 0 7 8 V140Z" fill="#fff"/>`;if(k==='phone')b+=rc(180,50,40,80,'#fff',{rx:6})+ln(160,140,240,40,'#fff',8);if(k==='box')b+=rc(165,70,70,60,'#fff',{rx:4})+tx(200,108,'0°C',{fs:16,c:blu});return b};
NH['must / should / have to / need to + be + التصريف الثالث']={
 say:[`لوحات السلامة تقول «يجب لبس الخوذة» بدون ما تحدد مين. بالإنجليزي الشي أول، وبعده ${E('must be')} + التصريف الثالث: ${E('Helmets must be worn.')} و ${E('must')} = ضروري، و ${E('should')} = ننصح فيه.`,
  `Safety signs say "Helmets must be worn" without saying who. The thing first, then ${E('must be')} + past participle. ${E('must')} = necessary; ${E('should')} = we advise it.`],
 life:[['Phones must be switched off in the exam.','يجب إغلاق الجوالات في الاختبار.'],['Shoes should be taken off at the door.','يُستحسن خلع الأحذية عند الباب.']],
 scene:{title:['لوحة السلامة','The safety sign'],
  ctrl:[{k:'g',label:['اللوحة','Sign'],opts:[['helmet','helmet'],['gloves','gloves'],['phone','phone'],['box','box']]},{k:'m',label:['القوة','Strength'],opts:[['must',['ضروري','necessary']],['should',['ننصح','advice']]]}],
  svg:s=>svg(185,sgSvg(s.g)+tx(200,180,s.m==='must'?'MUST':'SHOULD',{fs:14,c:s.m==='must'?red:'#b37d00'})),
  ask:s=>({q:[`${SG[s.g][0]} ${s.m} be … ?`,`${SG[s.g][0]} ${s.m} be …?`],opts:[...SG[s.g][5]].sort(),a:SG[s.g][2]}),
  out:s=>{const g=SG[s.g];return{t:S(`n:${g[0]}|x:${s.m} be|k:${g[2]}${s.g==='box'?'|q:frozen':''}${s.g==='phone'?'':'|q:here'}.`),ar:s.m==='must'?g[4]+'.':g[4].replace('يجب','يُستحسن')+'.',why:['الشي + must/should + be + التصريف الثالث.','Thing + must/should + be + past participle.']}}},
 think:[['ضروري ← must. نصيحة ← should.','Necessary → must. Advice → should.'],['اللوحة ما تذكر مين؟ ← الشي + must be + التصريف الثالث.','The sign says no person? → thing + must be + past participle.']]};

NH['من المجهول إلى المعلوم']={
 say:[`اللوحة تقول ${E('Helmets must be worn.')} لكن لو تكلم العامل اللي قدامك تقول «لازم تلبس خوذة» = ${E('You must wear a helmet.')} مع الشخص: ${E('You')} + ${E('must')} + الفعل كما هو.`,
  `The sign says ${E('Helmets must be worn.')} When you speak to the worker in front of you: ${E('You must wear a helmet.')} With a person: ${E('You')} + ${E('must')} + the verb as it is.`],
 life:[['You must wear your seat belt.','لازم تلبس حزام الأمان.'],['You should drink more water.','المفروض تشرب ماء أكثر.']],
 scene:{title:['اللوحة أو الكلام','The sign or talking'],
  ctrl:[{k:'g',label:['اللوحة','Sign'],opts:[['helmet','helmet'],['gloves','gloves'],['phone','phone'],['box','box']]},{k:'v',label:['أكلم','I am'],opts:[['sign',['أكتب لوحة','writing a sign']],['you',['أكلم شخص','talking to a person']]]}],
  svg:s=>svg(185,sgSvg(s.g)+(s.v==='you'?man(330,170,grn,1.1)+`<path d="M300 70 q-20 -30 -50 -30" stroke="${grn}" stroke-width="3" fill="none"/>`:'')),
  ask:s=>s.v==='you'?{q:['بعد You must …','After You must …'],opts:[SG[s.g][3].split(' ')[0],'be '+SG[s.g][2],SG[s.g][2]],a:SG[s.g][3].split(' ')[0]}:null,
  out:s=>{const g=SG[s.g];if(s.v==='sign')return{t:S(`n:${g[0]}|x:must be|k:${g[2]}${s.g==='box'?'|q:frozen':''}.`),ar:g[4]+'.',why:['لوحة: الشي + must be + التصريف الثالث.','Sign: thing + must be + past participle.']};const[v,...r]=g[3].split(' ');return{t:S(`a:You|x:must|k:${v}|n:${r.join(' ')}${s.g==='box'?' frozen':''}.`),ar:'لازم '+{helmet:'تلبس خوذة',gloves:'تلبس قفازات',phone:'تقفل جوالك',box:'تحفظ الصندوق مجمّداً'}[s.g]+'.',why:['مع شخص: You + must + الفعل كما هو.','To a person: You + must + the verb.']}}},
 think:[['أكلم شخص؟ ← You must / should + الفعل كما هو.','Talking to a person? → You must / should + the verb.'],['أكتب قاعدة عامة؟ ← الشي + must be + التصريف الثالث.','Writing a general rule? → thing + must be + past participle.']]};

const PRB={diver:["the diver's location is unknown",'locate them and mark their position','وش نسوي لو ما نعرف مكان الغواص؟ — حدّد مكانه وعلّمه.',['locate them and mark their position','go home','switch off the lights']],fire:['there is a fire','raise the alarm and leave the building','وش نسوي لو صار حريق؟ — شغّل الإنذار واطلع من المبنى.',['raise the alarm and leave the building','open the windows','take photos']],hurt:['someone is injured','call the first aider','وش نسوي لو أحد انصاب؟ — اتصل بالمسعف.',['call the first aider','move them quickly','give them coffee']],crane:['the crane stops working','report it to the supervisor','وش نسوي لو الرافعة وقفت؟ — بلّغ المشرف.',['report it to the supervisor','repair it yourself','ignore it']]};
NH['What should we do if …? — You should …']={
 say:[`«وش نسوي لو…؟» = ${E('What should we do if …?')} والجواب نصيحة: «المفروض…» = ${E('You should')} + الفعل كما هو.`,
  `"What should we do if …?" asks for advice. The answer: ${E('You should')} + the verb as it is.`],
 life:[["What should I do if I'm sick? — You should see a doctor.",'وش أسوي لو تعبت؟ — المفروض تروح للدكتور.'],['What should we do if it rains? — You should take an umbrella.','وش نسوي لو مطرت؟ — خذوا مظلة.']],
 scene:{title:['اختر المشكلة وأعطِ النصيحة','Choose the problem and give advice'],
  ctrl:[{k:'p',label:['المشكلة','Problem'],opts:[['diver','diver'],['fire','fire'],['hurt','injured'],['crane','crane']]}],
  svg:s=>{let b='';if(s.p==='diver')b=rc(0,40,400,140,'#bfe0ee',{rx:0})+man(200,150,blu,1)+tx(200,90,'?',{fs:40,c:red});if(s.p==='fire')b=rc(140,70,120,100,lgt,{rx:4})+`<path d="M200 60 q-30 -30 0 -60 q10 30 30 20 q10 30 -30 40z" fill="${red}"/>`;if(s.p==='hurt')b=man(200,160,blu,1.1)+rc(240,60,40,40,'#fff',{st:red,rx:6})+rc(255,66,10,28,red,{rx:1})+rc(246,75,28,10,red,{rx:1});if(s.p==='crane')b=ln(120,170,120,40,ink,8)+ln(120,40,300,40,ink,6)+ln(280,40,280,110,ink,3)+no(310,110,1.1);return svg(185,b)},
  ask:s=>({q:['What should we do?','What should we do?'],opts:[...PRB[s.p][3]].sort().map(x=>'You should '+x+'.'),a:'You should '+PRB[s.p][1]+'.'}),
  out:s=>{const p=PRB[s.p];return{t:S(`q:What|x:should|a:we|k:do|q:if ${p[0]}?|q:—|a:You|x:should|k:${p[1].split(' ')[0]}|n:${p[1].split(' ').slice(1).join(' ')}.`),ar:p[2],why:['النصيحة: You should + الفعل كما هو.','Advice: You should + the verb.']}}},
 think:[['يسأل عن الإجراء (وش نسوي لو…)؟ ← You should + الفعل.','Asking what to do? → You should + verb.']]};

NH['must و should و should + passive']={
 say:[`${E('must')} = لازم وضروري (ما فيه خيار). ${E('should')} = ننصح أو نقترح. وفي التقرير الرسمي نكتب التوصية بالمجهول: ${E('The equipment should be checked.')}`,
  `${E('must')} = necessary, no choice. ${E('should')} = we advise. In a formal report we write the recommendation in the passive: ${E('The equipment should be checked.')}`],
 life:[['You must stop at a red light.','لازم توقف عند الإشارة الحمراء.'],['You should sleep early.','المفروض تنام بدري.']],
 scene:{title:['قوة الكلام وأسلوبه','How strong and how formal'],
  ctrl:[{k:'a',label:['الفعل','Action'],opts:[['eq',['فحص المعدات','check the equipment']],['tr',['تدريب الطاقم','train the crew']]]},{k:'l',label:['الأهمية','How important'],opts:[['must',['ضروري','necessary']],['should',['نصيحة','advice']]]},{k:'s',label:['الأسلوب','Style'],opts:[['t',['كلام','talking']],['r',['تقرير','report']]]}],
  svg:s=>svg(110,rc(40,30,320,24,lgt,{rx:12})+rc(40,30,s.l==='must'?320:180,24,s.l==='must'?red:yel,{rx:12})+tx(60,85,'advice',{fs:12,c:gry,a:'start'})+tx(340,85,'necessary',{fs:12,c:gry,a:'end'})+(s.s==='r'?rc(170,64,60,38,'#fff',{st:ink,rx:3})+tx(200,88,'REPORT',{fs:10}):'')),
  ask:s=>s.s==='r'?{q:['في التقرير:','In the report:'],opts:[`The ${s.a==='eq'?'equipment':'crew'} ${s.l} be ${s.a==='eq'?'checked':'trained'}.`,`The ${s.a==='eq'?'equipment':'crew'} ${s.l} ${s.a==='eq'?'check':'train'}.`],a:`The ${s.a==='eq'?'equipment':'crew'} ${s.l} be ${s.a==='eq'?'checked':'trained'}.`}:null,
  out:s=>{const th=s.a==='eq'?'the equipment':'the crew',v=s.a==='eq'?'check':'train',pp=s.a==='eq'?'checked':'trained';return s.s==='t'?{t:S(`a:You|x:${s.l}|k:${v}|n:${th}.`),ar:`${s.l==='must'?'لازم':'المفروض'} ${s.a==='eq'?'تفحص المعدات':'تدرّب الطاقم'}.`,why:s.l==='must'?['ضروري ← must.','Necessary → must.']:['نصيحة ← should.','Advice → should.']}:{t:S(`n:${cap(th)}|x:${s.l} be|k:${pp}.`),ar:`${s.l==='must'?'يجب':'يُوصى بأن'} ${s.a==='eq'?'تُفحص المعدات':'يُدرَّب الطاقم'}.`,why:['تقرير ← الشي + should be + التصريف الثالث.','Report → thing + should be + past participle.']}}},
 think:[['ضروري ولا نصيحة؟ ← must / should.','Necessary or advice? → must / should.'],['تقرير رسمي؟ ← الشي + should be + التصريف الثالث.','A formal report? → thing + should be + past participle.']]};

const RT=[['Go straight on at the crossroads.','امشِ على طول عند التقاطع.'],['Turn left at the roundabout.','لف يسار عند الدوّار.'],['Go under the flyover.','امشِ تحت الجسر العلوي.'],['Take the second turning on the right.','خذ ثاني لفّة يمين.']];
NH['معالم الطريق وفعل الأمر']={
 say:[`لما تدل أحد على الطريق تتكلم بالأمر: «لف يمين، امشِ على طول». بالإنجليزي نفس الشي: ${E('Turn right.')} ${E('Go straight on.')} ونذكر المَعلم: ${E('at the roundabout')}، والترتيب: ${E('the second turning')}.`,
  `To give directions we use orders: ${E('Turn right.')} ${E('Go straight on.')} We name the landmark: ${E('at the roundabout')}, and the order: ${E('the second turning')}.`],
 life:[['Turn left at the mosque.','لف يسار عند المسجد.'],['Take the first turning on the right.','خذ أول لفّة يمين.']],
 scene:{title:['دلّه على الطريق','Give him directions'],
  ctrl:[{k:'i',label:['المرحلة','Stage'],range:[1,4,1],init:1}],
  svg:s=>{let b=rc(0,0,400,200,'#eef3e8',{rx:0})+rc(0,92,400,24,lgt,{rx:0})+rc(70,0,24,200,lgt,{rx:0})+ci(200,104,26,'#cfd8dc')+ci(200,104,10,'#eef3e8')+rc(270,80,30,60,'#b0bec5',{rx:0})+rc(330,116,20,84,lgt,{rx:0})+rc(370,116,20,84,lgt,{rx:0})+tx(82,20,'crossroads',{fs:10})+tx(200,150,'roundabout',{fs:10})+tx(285,72,'flyover',{fs:10})+tx(360,190,'1st  2nd',{fs:10});
   const P=[[20,104],[82,104],[200,104],[285,104],[380,150]];const[x,y]=P[s.i];const[x0,y0]=P[s.i-1];b+=ar(x0,y0,x,y,red,4)+ci(x,y,8,red);return svg(200,b)},
  ask:s=>({q:['وش التعليمة؟',"What's the instruction?"],opts:RT.map(r=>r[0]),a:RT[s.i-1][0]}),
  out:s=>{const r=RT[s.i-1];const[v,...rest]=r[0].split(' ');return{t:S(`k:${v}|q:${rest.join(' ')}`),ar:r[1],why:['التعليمة تبدأ بالفعل + المَعلم.','The instruction starts with the verb + the landmark.']}}},
 think:[['وش يسوي؟ (Turn / Go / Take) ← ابدأ بالفعل.','What does he do (Turn / Go / Take)? → start with the verb.'],['عند أي مَعلم؟ ← at the …','At which landmark? → at the …']]};

NH['صف الموقف ثم أعطِ التعليمة']={
 say:[`قبل التعليمة قل له وش بيشوف: «لما تشوف المقهى، لف يمين». ${E("When you see the café, turn right.")} ولو تعدّى المكان: ${E("If you cross the bridge, you've gone too far. Do a U-turn.")}`,
  `Before the order, tell him what he will see: ${E('When you see the café, turn right.')} If he passes the place: ${E("If you cross the bridge, you've gone too far. Do a U-turn.")}`],
 life:[["When you see the mosque, turn left.",'لما تشوف المسجد، لف يسار.'],["If you see the bank, you've gone too far.",'لو شفت البنك، تعدّيت.']],
 scene:{title:['حرّك السيارة','Move the car'],
  ctrl:[{k:'x',label:['السيارة','The car'],range:[0,100,10],init:20,unit:'%'}],
  svg:s=>{const X=30+s.x*3.4;let b=rc(0,100,400,30,lgt,{rx:0})+rc(170,130,26,70,lgt,{rx:0})+rc(120,60,50,36,'#e9dcc3',{rx:4})+tx(145,82,'café',{fs:12})+rc(300,92,60,46,'#90a4ae',{rx:2})+tx(330,86,'bridge',{fs:12})+tx(183,196,'Market St',{fs:10});b+=`<g transform="translate(${X-30},0)">${car(0,132,60,28,red)}</g>`;return svg(200,b)},
  ask:s=>null,
  out:s=>s.x<40?{t:S('q:Go straight on.|x:You will see|n:a café|q:on the left.'),ar:'امشِ على طول. بتشوف مقهى على اليسار.',why:['صف وش بيشوف.','Describe what he will see.']}:s.x<=50?{t:S('x:When you see|n:the café,|k:turn right|q:into Market Street.'),ar:'لما تشوف المقهى، لف يمين على شارع ماركت.',why:['When + الموقف، ثم الأمر.','When + the situation, then the order.']}:s.x<85?{t:S("x:If you see|n:the bridge,|q:you've gone too far."),ar:'لو شفت الجسر، تعدّيت.',why:['If + الموقف ← تعدّى المكان.','If + the situation → he passed the place.']}:{t:S("x:If you cross|n:the bridge,|q:you've gone too far.|k:Do|q:a U-turn."),ar:'لو عبرت الجسر، تعدّيت. ارجع (لفّة U).',why:['الموقف ثم التعليمة.','The situation, then the instruction.']}},
 think:[['وش بيشوف قبل ما يلف؟ ← When you see …','What will he see first? → When you see …'],['لو تعدّى؟ ← If you …, you\'ve gone too far.',"If he passes it? → If you …, you've gone too far."]]};
})(window);

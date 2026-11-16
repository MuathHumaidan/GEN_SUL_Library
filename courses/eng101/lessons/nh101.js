/* نهج الشرح لانجل-101 (dev-kit/guides/TEACHING_APPROACH.md) — مربع «الفكرة» لكل جزء من «شرح القاعدة».
   المفتاح = عنوان الجزء (t). الأمثلة والمشاهد من إعدادنا (إضافة من خارج الكتاب). يعتمد على nhk.js */
(function(G){const NH=G.NH=G.NH||{};const K=G.NHK,A=G.VXA;
const {svg,tx,rc,ci,ln,ar,ar2,man,wh,grd,ok,no,bub,S,R,cap,E,head}=K;const FM=(...p)=>G.ENK.fm(...p);
const {ink,grn,red,blu,yel,gry,lgt}=K.C;
const bg=(h,c='#eaf3f9')=>`<rect width="400" height="${h}" fill="${c}"/>`;
/* رسم أداة بسيطة: مطرقة، مفك، مفتاح، زردية، مقص، سكين … */
const TOOL={hammer:(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><rect x="-4" y="-10" width="8" height="60" rx="3" fill="#a7744a"/><rect x="-22" y="-22" width="44" height="16" rx="3" fill="#5f6a71"/></g>`,
 screwdriver:(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><rect x="-7" y="-26" width="14" height="30" rx="5" fill="${red}"/><rect x="-2" y="4" width="4" height="40" fill="#9aa3aa"/><rect x="-3" y="42" width="6" height="4" fill="#5f6a71"/></g>`,
 spanner:(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s}) rotate(-30)"><rect x="-7" y="-12" width="14" height="74" rx="6" fill="#9aa3aa" stroke="#6b757c" stroke-width="2"/><circle cx="0" cy="-24" r="21" fill="#9aa3aa" stroke="#6b757c" stroke-width="2"/><rect x="-8" y="-50" width="16" height="28" fill="#eaf3f9"/><circle cx="0" cy="66" r="9" fill="#eaf3f9" stroke="#6b757c" stroke-width="2"/></g>`,
 pliers:(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-3 0 L-14 44 M3 0 L14 44" stroke="${blu}" stroke-width="8" stroke-linecap="round"/><path d="M-3 0 L-6 -30 M3 0 L6 -30" stroke="#7d878e" stroke-width="7" stroke-linecap="round"/><circle cx="0" cy="0" r="5" fill="#33424c"/></g>`,
 scissors:(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><circle cx="-12" cy="30" r="10" fill="none" stroke="${red}" stroke-width="5"/><circle cx="12" cy="30" r="10" fill="none" stroke="${red}" stroke-width="5"/><path d="M-6 22 L10 -30 M6 22 L-10 -30" stroke="#9aa3aa" stroke-width="5" stroke-linecap="round"/></g>`,
 knife:(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><rect x="-6" y="0" width="12" height="40" rx="4" fill="#33424c"/><path d="M-6 0 L-6 -40 Q0 -50 6 -40 L6 0Z" fill="#c9d1d6"/></g>`,
 saw:(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-40 0 H30 L40 -14 H-30Z" fill="#c9d1d6"/><path d="M-40 0 l5 6 l5 -6 l5 6 l5 -6 l5 6 l5 -6 l5 6 l5 -6 l5 6 l5 -6 l5 6 l5 -6 l5 6 l5 -6" stroke="#9aa3aa" stroke-width="2" fill="none"/><rect x="30" y="-24" width="22" height="30" rx="6" fill="#a7744a"/></g>`};

/* =================== الوحدة 1 =================== */
const BE={I:['I','am',"I'm",'a student','أنا طالب.'],he:['He','is',"He's",'an engineer','هو مهندس.'],she:['She','is',"She's",'a teacher','هي معلمة.'],it:['It','is',"It's",'a hammer','هذه مطرقة.'],you:['You','are',"You're",'a technician','أنت فني.'],we:['We','are',"We're",'students','نحن طلاب.'],they:['They','are',"They're",'drivers','هم سائقون.']};
NH['الفعل be مع الضمائر']={
 say:[`بالعربي نقول «أنا طالب» بدون فعل. الإنجليزي لازم يحط فعل بالنص اسمه ${E('be')}: ${E('I am a student.')} وله ثلاث صور حسب الضمير: ${E('am')} مع ${E('I')} بس، و ${E('is')} مع ${E('he / she / it')}، و ${E('are')} مع ${E('you / we / they')}.`,
  `In English we need ${E('be')} in the middle: ${E('I am a student.')} ${E('am')} with I; ${E('is')} with he / she / it; ${E('are')} with you / we / they.`],
 life:[["I'm from Saudi Arabia.",'أنا من السعودية.'],["They're my brothers.",'هؤلاء إخواني.']],
 scene:{title:['اختر الضمير','Choose the pronoun'],
  ctrl:[{k:'p',label:['الضمير','Pronoun'],opts:Object.keys(BE).map(k=>[k,BE[k][0]])},{k:'f',label:['الشكل','Form'],opts:[['full',['كامل','full']],['short',['مختصر','short']]]}],
  svg:s=>{let b=bg(150)+grd(140);const n={I:1,he:1,she:1,it:0,you:1,we:2,they:3}[s.p];if(s.p==='it')b+=TOOL.hammer(200,80,1.2);else for(let i=0;i<n;i++)b+=man(200-(n-1)*40+i*80,108,s.p==='she'?'#b05a7a':blu,1);if(s.p==='I'||s.p==='we')b+=tx(200,24,'me',{fs:13,c:gry});return svg(150,b)},
  ask:s=>({q:['am / is / are؟','am / is / are?'],opts:['am','is','are'],a:BE[s.p][1]}),
  out:s=>{const b=BE[s.p];return s.f==='full'?{t:S(`a:${b[0]}|x:${b[1]}|n:${b[3]}.`),ar:b[4],why:[`${b[0]} ← ${b[1]}.`,`${b[0]} → ${b[1]}.`]}:{t:S(`x:${b[2]}|n:${b[3]}.`),ar:b[4],why:['المختصر يكثر في الكلام.','The short form is common in speaking.']}}},
 think:[['I ← am. he / she / it ← is. you / we / they ← are.','I → am. he / she / it → is. you / we / they → are.']]};

NH['التعارف']={
 say:[`تعرّف بنفسك بطريقتين بنفس المعنى: ${E("I'm Frank.")} أو ${E("My name's Frank.")} واللي قدامك يرد: ${E('Nice to meet you.')} وإذا تبي تتأكد من شخص: ${E('Excuse me. Are you …?')}`,
  `Two ways: ${E("I'm Frank.")} or ${E("My name's Frank.")} Reply: ${E('Nice to meet you.')} To check: ${E('Excuse me. Are you …?')}`],
 life:[["Hello, I'm Ahmed.",'مرحباً، أنا أحمد.'],['Nice to meet you.','سعيد بلقائك.']],
 scene:{title:['أول لقاء','The first meeting'],
  ctrl:[{k:'s',label:['المرحلة','Step'],range:[1,4,1],init:1}],
  svg:s=>svg(150,bg(150)+grd(140)+man(110,128,blu,1.1)+man(290,128,grn,1.1)+(s.s>=2?`<path d="M128 100 L272 100" stroke="#e3b892" stroke-width="6" stroke-linecap="round"/>`:'')+bub(s.s%2?30:190,8,180,34,["Hello. I'm Frank.",'Nice to meet you.','Are you Ben Owens?',"No, I'm not."][s.s-1],{fs:12})),
  ask:s=>s.s===2?{q:['وش الرد؟','What is the reply?'],opts:['Nice to meet you.','Goodbye.','Yes, I am.'],a:'Nice to meet you.'}:null,
  out:s=>[{t:S("a:Hello.|x:I'm|n:Frank."),ar:'مرحباً. أنا فرانك.',why:["I'm + الاسم","I'm + name"]},{t:S("x:Nice to meet you.|q:My name's|n:Oliver."),ar:'سعيد بلقائك. اسمي أوليفر.',why:["الرد، ثم My name's + الاسم","Reply, then My name's + name"]},{t:S('x:Excuse me.|q:Are you|n:Ben Owens?'),ar:'عفواً، هل أنت بن أوينز؟',why:['للتأكد بأدب: Excuse me. Are you …?','To check politely: Excuse me. Are you …?']},{t:S("q:—|x:No, I'm not.|q:I'm|n:Sam."),ar:'لا. أنا سام.',why:["الجواب القصير: Yes, I am. / No, I'm not.","Short answer: Yes, I am. / No, I'm not."]}][s.s-1]},
 think:[["أعرّف بنفسي ← I'm … / My name's …","Introducing myself → I'm … / My name's …"],['أرد ← Nice to meet you.','Reply → Nice to meet you.']]};

const JOB={tech:['a technician','فني'],eng:['an engineer','مهندس'],elec:['an electrician','كهربائي'],build:['a builder','عامل بناء'],stud:['a student','طالب'],arch:['an architect','مهندس معماري']};
NH['السؤال عن الاسم والبلد والعمل، و a / an']={
 say:[`ثلاث أسئلة للتعارف: ${E("What's your name?")} و ${E('Where are you from?')} و ${E('What do you do?')} (يعني وش شغلك). وقبل اسم المهنة نحط ${E('a')} إذا تبدأ بصوت ساكن، و ${E('an')} إذا تبدأ بصوت متحرك: ${E('a technician · an engineer')}.`,
  `Three questions: name, country, job. Before a job: ${E('a')} for a consonant sound, ${E('an')} for a vowel sound: ${E('a technician · an engineer')}.`],
 life:[["What do you do? — I'm a student.",'ما عملك؟ — أنا طالب.'],["I'm an electrician.",'أنا كهربائي.']],
 scene:{title:['وش شغلك؟','What do you do?'],
  ctrl:[{k:'j',label:['المهنة','Job'],opts:Object.keys(JOB).map(k=>[k,JOB[k][0].split(' ')[1]])}],
  svg:s=>{const w=JOB[s.j][0].split(' ')[1];return svg(130,bg(130)+man(70,110,blu,1)+bub(110,20,180,36,'What do you do?',{fs:13})+tx(260,98,w[0].toUpperCase(),{fs:40,c:/[aeiou]/.test(w[0])?red:blu})+tx(260,122,/[aeiou]/.test(w[0])?'vowel sound':'consonant sound',{fs:12,c:gry}))},
  ask:s=>({q:['a ولا an؟','a or an?'],opts:['a','an'],a:JOB[s.j][0].split(' ')[0]}),
  out:s=>{const j=JOB[s.j];return{t:S(`q:I'm|x:${j[0].split(' ')[0]}|n:${j[0].split(' ')[1]}.`),ar:`أنا ${j[1]}.`,why:j[0].startsWith('an')?['صوت متحرك ← an.','Vowel sound → an.']:['صوت ساكن ← a.','Consonant sound → a.']}}},
 think:[['أول صوت في الكلمة متحرك (a e i o u)؟ ← an. غيره ← a.','First sound a vowel? → an. Otherwise → a.']]};

const OPP={up:['Pick up','Put down','the screwdriver','ارفع المفك','ضع المفك'],start:['Start','Stop','the machine','شغّل الآلة','أوقف الآلة'],stand:['Stand up','Sit down','','قف','اجلس'],raise:['Raise','Lower','your hand','ارفع يدك','أنزل يدك']};
NH['التعليمات والأضداد']={
 say:[`المعلم يقول «قم» ما يقول «أنت قم». التعليمة تبدأ بالفعل على طول: ${E('Stand up.')} وللأدب نزيد ${E('please')} في الأول أو الآخر. وكثير من التعليمات لها ضد: ${E('Stand up ≠ Sit down')}.`,
  `An instruction starts with the verb: ${E('Stand up.')} Add ${E('please')} to be polite. Many have opposites: ${E('Stand up ≠ Sit down')}.`],
 life:[['Close the window, please.','أغلق النافذة لو سمحت.'],['Please open your books.','افتحوا كتبكم لو سمحتم.']],
 scene:{title:['التعليمة وضدها','The instruction and its opposite'],
  ctrl:[{k:'o',label:['الزوج','Pair'],opts:Object.keys(OPP).map(k=>[k,OPP[k][0].toLowerCase()])},{k:'w',label:['أيهما','Which'],opts:[['a',['الأولى','first']],['b',['الضد','opposite']]]}],
  svg:s=>{const B=s.w==='b';let b=bg(150)+grd(140);if(s.o==='stand')b+=B?`<rect x="170" y="96" width="60" height="10" fill="#a7744a"/>`+man(200,118,blu,1):man(200,108,blu,1.1);if(s.o==='raise')b+=man(200,120,blu,1.1)+ln(213,86,B?222:224,B?118:50,'#e3b892',6);if(s.o==='up')b+=man(170,120,blu,1)+TOOL.screwdriver(B?240:226,B?110:70,0.8)+ar(260,B?70:120,260,B?120:70,grn,3);if(s.o==='start')b+=rc(150,50,110,70,'#7d878e',{rx:8})+ci(205,85,16,B?red:grn);return svg(150,b)},
  ask:s=>({q:['أول كلمة في التعليمة:','The first word is:'],opts:['the verb','You','The'],a:'the verb'}),
  out:s=>{const o=OPP[s.o];const v=s.w==='a'?o[0]:o[1];return{t:S(`k:${v}|n:${o[2]}|q:, please.`),say:`${v}${o[2]?' '+o[2]:''}, please.`,ar:(s.w==='a'?o[3]:o[4])+' لو سمحت.',why:['التعليمة تبدأ بالفعل، و please للأدب.','The instruction starts with the verb; please is polite.']}}},
 think:[['أطلب منه يسوي شي؟ ← ابدأ بالفعل، وزد please.','Asking someone? → start with the verb, add please.']]};

const PL={in:['in','داخل'],on:['on','فوق'],under:['under','تحت']};
NH['الحالة والمكان']={
 say:[`وين المطرقة؟ داخل الصندوق ← ${E('in')}. فوقه ← ${E('on')}. تحته ← ${E('under')}. والحالة: الجهاز شغّال ${E('on')} أو طافي ${E('off')}، والباب مفتوح ${E('open')} أو مسكّر ${E('closed')}.`,
  `Where is it? inside → ${E('in')}; on top → ${E('on')}; below → ${E('under')}. State: ${E('on / off')}, ${E('open / closed')}.`],
 life:[['The keys are on the table.','المفاتيح على الطاولة.'],['The TV is off.','التلفزيون مطفأ.']],
 scene:{title:['وين المطرقة؟','Where is the hammer?'],
  ctrl:[{k:'p',label:['المكان','Place'],opts:[['in','in'],['on','on'],['under','under']]}],
  svg:s=>{let b=bg(160)+grd(150)+rc(130,70,140,60,'#a7744a',{rx:4})+rc(130,70,140,10,'#8a5d36',{rx:2});const y={in:100,on:40,under:140}[s.p];b+=`<g transform="rotate(90 200 ${y})">${TOOL.hammer(200,y-16,0.6)}</g>`;if(s.p==='in')b=b.replace(/<rect x="130" y="70"[^>]*\/>/,'')+rc(130,70,140,60,'#a7744a',{rx:4,op:.55});if(s.p==='under')b=bg(160)+grd(150)+rc(130,50,140,60,'#a7744a',{rx:4})+rc(140,110,10,40,'#8a5d36',{rx:0})+rc(250,110,10,40,'#8a5d36',{rx:0})+`<g transform="rotate(90 200 132)">${TOOL.hammer(200,116,0.6)}</g>`;return svg(160,b)},
  ask:s=>({q:['in / on / under؟','in / on / under?'],opts:['in','on','under'],a:s.p}),
  out:s=>({t:S(`a:The hammer|q:is|x:${s.p}|n:the box.`),ar:`المطرقة ${PL[s.p][1]} الصندوق.`,why:[`${PL[s.p][1]} ← ${s.p}.`,`${s.p}.`]})},
 think:[['داخل ← in. فوق ← on. تحت ← under.','inside → in. on top → on. below → under.']]};

const FX={screw:['a screw','screws','برغي','له سن مدبب يدخل الخشب بالمفك.'],bolt:['a bolt','bolts','مسمار ملولب','طرفه مستوٍ ويُشدّ بصامولة.'],nut:['a nut','nuts','صامولة','تُركّب على المسمار الملولب.'],washer:['a washer','washers','حلقة','توضع تحت الصامولة.']};
const fxSvg=k=>{let b=bg(150);if(k==='screw')b+=`<rect x="186" y="30" width="28" height="10" rx="3" fill="#7d878e"/><path d="M194 40 V112 L200 126 L206 112 V40" fill="#9aa3aa"/>${[50,62,74,86,98].map(y=>ln(192,y,208,y+6,'#6b757c',2)).join('')}`;if(k==='bolt')b+=`<rect x="182" y="26" width="36" height="16" rx="2" fill="#7d878e"/><rect x="192" y="42" width="16" height="84" fill="#9aa3aa"/>${[54,66,78,90,102,114].map(y=>ln(192,y,208,y+5,'#6b757c',2)).join('')}`;if(k==='nut')b+=`<path d="M200 46 L232 64 V100 L200 118 L168 100 V64Z" fill="#7d878e"/>`+ci(200,82,16,'#eaf3f9');if(k==='washer')b+=ci(200,82,36,'#9aa3aa')+ci(200,82,14,'#eaf3f9');return svg(150,b)};
NH['أدوات ومثبتات']={
 say:[`في الورشة تحتاج أسماء القطع بالمفرد والجمع: المفرد قبله ${E('a / an')}، والجمع نزيد ${E('s')}: ${E('a screw → screws')}. وفرّق بينها: البرغي يدخل الخشب، والمسمار الملولب ${E('bolt')} يُشدّ بصامولة ${E('nut')}.`,
  `Singular with ${E('a / an')}, plural with ${E('s')}: ${E('a screw → screws')}. A screw goes into wood; a bolt takes a nut.`],
 life:[['I need a screwdriver.','أحتاج مفكاً.'],['Where are the nuts?','أين الصواميل؟']],
 scene:{title:['تعرّف على القطعة','Know the part'],
  ctrl:[{k:'p',label:['القطعة','Part'],opts:Object.keys(FX).map(k=>[k,k])},{k:'n',label:['العدد','Number'],opts:[['1','one'],['3','three']]}],
  svg:s=>fxSvg(s.p),
  ask:s=>s.n==='3'?{q:['الجمع:','Plural:'],opts:[FX[s.p][1],s.p,s.p+'es'],a:FX[s.p][1]}:{q:['وش اسمها؟','What is it?'],opts:Object.keys(FX),a:s.p},
  out:s=>{const f=FX[s.p];return s.n==='1'?{t:S(`q:It's|x:${f[0].split(' ')[0]}|n:${s.p}.`),ar:`هذا ${f[2]}. ${f[3]}`,why:['واحد ← a + الاسم','One → a + noun']}:{t:S(`q:They're|n:${s.p}${R('s')}.`),say:`They're ${f[1]}.`,ar:`هذه ${f[2]} (جمع).`,why:['أكثر ← الاسم + s','More → noun + s']}}},
 think:[['واحد ← a / an. أكثر ← s.','One → a / an. More → s.']]};

/* =================== الوحدة 2 =================== */
const SPL=[['Owens','O-W-E-N-S'],['Hill','H-I-double L'],['Scott','S-C-O-double T'],['Ahmed','A-H-M-E-D']];
NH['الحروف والتهجئة']={
 say:[`في التلفون كثير يطلبون منك تتهجى اسمك: ${E('How do you spell it?')} وتقول الحروف وحدة وحدة. والحرفين المتكررين نقول ${E('double')}: ${E('LL = double L')}. وإذا ما سمعت زين: ${E('Could you repeat that, please?')}`,
  `${E('How do you spell it?')} — say the letters one by one; two same letters → ${E('double')}: ${E('LL = double L')}.`],
 life:[['How do you spell your name?','كيف تتهجى اسمك؟'],['Could you repeat that, please?','هل تستطيع أن تعيد ذلك لو سمحت؟']],
 scene:{title:['تهجَّ الاسم','Spell the name'],
  ctrl:[{k:'n',label:['الاسم','Name'],opts:SPL.map((x,i)=>[i,x[0]])}],
  svg:s=>{const w=SPL[s.n][0].toUpperCase();let b=bg(120);[...w].forEach((c,i)=>{const dbl=i>0&&w[i-1]===c||w[i+1]===c;b+=rc(40+i*56,34,48,52,dbl?'#fff3c7':'#fff',{st:dbl?red:ink,rx:8})+tx(64+i*56,70,c,{fs:24,c:dbl?red:ink})});return svg(120,b)},
  ask:s=>/(.)\1/.test(SPL[s.n][0])?{q:['حرفين متشابهين جنب بعض نقول:','Two same letters:'],opts:['double','two','twice'],a:'double'}:null,
  out:s=>({t:S(`q:How do you spell it?|q:—|x:${SPL[s.n][1]}`),say:`How do you spell it? ${SPL[s.n][1].replace(/-/g,', ')}`,ar:'كيف تتهجاه؟',why:['حرف حرف، والمتكرر double.','Letter by letter; two the same → double.']})},
 think:[['حرفين متشابهين؟ ← double.','Two same letters? → double.']]};

const PH=[['0556 33 21 08','oh five five six, double three, two one, oh eight'],['ali_salem@tech.com','ali underscore salem at tech dot com'],['k-hill@mail.com','k hyphen hill at mail dot com']];
NH['رقم الهاتف والبريد الإلكتروني']={
 say:[`رقم الجوال ما نقرأه عدد كبير، نقرأه رقم رقم: الصفر ${E('oh')}، والرقمين المتشابهين ${E('double')}. والإيميل له كلماته: ${E('@ = at')}، ${E('. = dot')}، ${E('_ = underscore')}، ${E('- = hyphen')}.`,
  `Phone numbers digit by digit: 0 = ${E('oh')}, 33 = ${E('double three')}. Email: @ = at, . = dot, _ = underscore, - = hyphen.`],
 life:[['My number is oh five five …','رقمي صفر خمسة خمسة …']],
 scene:{title:['اقرأها بصوت','Read it aloud'],
  ctrl:[{k:'i',label:['النص','Text'],opts:[[0,'phone'],[1,'email 1'],[2,'email 2']]}],
  svg:s=>svg(110,bg(110)+rc(30,26,340,52,'#fff',{st:ink,rx:10})+tx(200,60,PH[s.i][0],{fs:20,c:blu})),
  ask:s=>s.i===0?{q:['33 نقرأها:','33 is read:'],opts:['double three','thirty-three','three three three'],a:'double three'}:{q:['@ نقرأها:','@ is read:'],opts:['at','and','about'],a:'at'},
  out:s=>({t:S(`k:${PH[s.i][1]}`),ar:'',why:s.i===0?['رقم رقم، والصفر oh.','Digit by digit; 0 = oh.']:['@ at · . dot · _ underscore · - hyphen','@ at · . dot · _ underscore · - hyphen']})},
 think:[['رقم جوال ← رقم رقم.','A phone number → digit by digit.'],['إيميل ← at و dot و underscore.','Email → at, dot, underscore.']]};

const NUM=[['1.2','one point two','point'],['230 V','two hundred and thirty volts','volts'],['13','thirTEEN','teen'],['30','THIRty','ty'],['150,000','a hundred and fifty thousand','thousand']];
NH['الأرقام ورموز الوحدات']={
 say:[`الفاصلة العشرية نقرأها ${E('point')}: ${E('1.2 = one point two')}. والرمز ما ينجمع بالكتابة، لكن نجمعه بالقراءة: ${E('230 V = two hundred and thirty volts')}. وانتبه للنبرة: ${E('thirTEEN')} غير ${E('THIRty')}.`,
  `Decimal point → ${E('point')}. Symbols have no s in writing, but we read them plural. Stress: ${E('thirTEEN')} vs ${E('THIRty')}.`],
 life:[['The price is 2.5 riyals.','السعر ريالان ونصف.']],
 scene:{title:['اقرأ المواصفات','Read the specification'],
  ctrl:[{k:'i',label:['الرقم','Number'],opts:NUM.map((n,i)=>[i,n[0]])}],
  svg:s=>svg(110,bg(110)+rc(110,24,180,60,'#33424c',{rx:10})+tx(200,64,NUM[s.i][0],{fs:26,c:'#7cf2b4'})),
  ask:s=>s.i===0?{q:['النقطة نقرأها:','The dot is read:'],opts:['point','dot','and'],a:'point'}:s.i===1?{q:['V نقرأها:','V is read:'],opts:['volts','volt','vee'],a:'volts'}:null,
  out:s=>({t:S(`k:${NUM[s.i][1]}`),say:NUM[s.i][1].replace(/TEEN/,'teen').replace(/THIR/,'thir'),ar:'',why:s.i===2||s.i===3?['النبرة: -teen على الآخر، -ty على الأول.','Stress: -teen at the end, -ty at the start.']:['اقرأها كلمات.','Read it in words.']})},
 think:[['فاصلة عشرية ← point. رمز وحدة ← نقرأه بالجمع.','Decimal → point. Unit symbol → read plural.']]};

/* =================== الوحدة 3 =================== */
const ORD=[[1,'1st','first'],[2,'2nd','second'],[3,'3rd','third'],[4,'4th','fourth'],[11,'11th','eleventh'],[12,'12th','twelfth'],[21,'21st','twenty-first'],[23,'23rd','twenty-third']];
NH['الأعداد الترتيبية والتاريخ']={
 say:[`التاريخ نقرأه بالترتيبي (الأول، الثاني) مو بالعادي: ${E('the twenty-third of September')}. النهايات: ${E('1st · 2nd · 3rd')} والباقي ${E('th')}، وانتبه: ${E('11th · 12th · 13th')} كلها ${E('th')}.`,
  `Dates use ordinal numbers: ${E('the twenty-third of September')}. 1st · 2nd · 3rd, then th; but 11th, 12th, 13th.`],
 life:[['My birthday is on the 5th of May.','عيد ميلادي في الخامس من مايو.']],
 scene:{title:['التقويم','The calendar'],
  ctrl:[{k:'i',label:['اليوم','Day'],opts:ORD.map((o,i)=>[i,String(o[0])])}],
  svg:s=>svg(140,bg(140)+rc(140,14,120,116,'#fff',{st:ink,rx:8})+rc(140,14,120,30,red,{rx:6})+tx(200,36,'SEPTEMBER',{fs:13,c:'#fff'})+tx(200,100,ORD[s.i][0],{fs:42})),
  ask:s=>{const n=ORD[s.i];const suf=n[1].replace(/\d+/,'');return{q:['النهاية:','The ending:'],opts:['st','nd','rd','th'],a:suf}},
  out:s=>{const n=ORD[s.i];return{t:S(`q:the|x:${n[2]}|q:of September`),ar:`${n[0]} سبتمبر`,why:[`${n[1]}.`,`${n[1]}.`]}}},
 think:[['آخره 1 ← st، 2 ← nd، 3 ← rd. ما عدا 11، 12، 13 ← th.','Ends in 1 → st, 2 → nd, 3 → rd, except 11–13 → th.']]};

NH['الأيام والأشهر و on']={
 say:[`مع الأيام والتواريخ نستخدم ${E('on')}: ${E('on Sunday')}. وانتبه للفرق: ${E('on Monday')} = هالاثنين مرة وحدة، و ${E('on Mondays')} = كل اثنين (عادة).`,
  `Days and dates take ${E('on')}. ${E('on Monday')} = this Monday, once; ${E('on Mondays')} = every Monday.`],
 life:[['I play football on Fridays.','ألعب كرة القدم كل جمعة.'],['The exam is on Monday.','الاختبار يوم الاثنين.']],
 scene:{title:['مرة ولا كل أسبوع؟','Once or every week?'],
  ctrl:[{k:'f',label:['الحدث','Event'],opts:[['once',['مرة وحدة','once']],['every',['كل أسبوع','every week']]]}],
  svg:s=>{let b=bg(120);['S','M','T','W','T','F','S'].forEach((d,i)=>{for(let w=0;w<2;w++){const on=d==='M'&&i===1&&(s.f==='every'||w===0);b+=rc(40+i*46,20+w*46,38,38,on?red:'#fff',{st:ink,rx:6})+tx(59+i*46,44+w*46,d,{fs:13,c:on?'#fff':ink})}});return svg(120,b)},
  ask:s=>({q:['Monday ولا Mondays؟','Monday or Mondays?'],opts:['on Monday','on Mondays'],a:s.f==='once'?'on Monday':'on Mondays'}),
  out:s=>s.f==='once'?{t:S('q:I have a test|x:on|n:Monday.'),ar:'عندي اختبار يوم الاثنين.',why:['مرة وحدة ← on Monday.','Once → on Monday.']}:{t:S('q:I have football|x:on|n:Monday'+R('s')+'.'),say:'I have football on Mondays.',ar:'عندي كرة قدم كل اثنين.',why:['كل أسبوع ← on Mondays.','Every week → on Mondays.']}},
 think:[['مرة وحدة ← on Monday. كل أسبوع ← on Mondays.','Once → on Monday. Every week → on Mondays.']]};

NH['الوقت بنظامي 24 و 12 ساعة']={
 say:[`الجداول تكتب الوقت بنظام 24 ساعة (${E('14.40')})، والناس يقولونه بنظام 12: قبل الظهر ${E('am')} وبعده ${E('pm')}: ${E('14.40 = 2.40 pm')}. ونقرأ الساعة ثم الدقائق: ${E('two forty')}.`,
  `Timetables use 24-hour time; people say 12-hour time with ${E('am / pm')}: ${E('14.40 = 2.40 pm')}, read ${E('two forty')}.`],
 life:[['The bus leaves at 7.15 am.','يغادر الباص الساعة 7:15 صباحاً.']],
 scene:{title:['حوّل الوقت','Change the time'],
  ctrl:[{k:'h',label:['الساعة','Hour'],range:[0,23,1],init:14},{k:'m',label:['الدقائق','Minutes'],opts:[[0,'00'],[15,'15'],[40,'40']]}],
  svg:s=>{const h12=(s.h%12)||12;let b=bg(150)+ci(100,75,58,'#fff',{st:ink,sw:3});const ah=((s.h%12)+s.m/60)/12*2*Math.PI-Math.PI/2,am=s.m/60*2*Math.PI-Math.PI/2;b+=ln(100,75,100+30*Math.cos(ah),75+30*Math.sin(ah),ink,5)+ln(100,75,100+46*Math.cos(am),75+46*Math.sin(am),blu,3);b+=rc(200,30,170,40,'#33424c',{rx:6})+tx(285,58,`${String(s.h).padStart(2,'0')}.${String(s.m).padStart(2,'0')}`,{fs:20,c:'#7cf2b4'})+tx(285,110,`${h12}.${String(s.m).padStart(2,'0')} ${s.h<12?'am':'pm'}`,{fs:20,c:s.h<12?blu:red});return svg(150,b)},
  ask:s=>({q:['am ولا pm؟','am or pm?'],opts:['am','pm'],a:s.h<12?'am':'pm'}),
  out:s=>{const h12=(s.h%12)||12,NW=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'],MW={15:'fifteen',40:'forty'};return{t:S(`k:${NW[h12]}${s.m?'|n:'+MW[s.m]:''}|x:${s.h<12?'am':'pm'}`),ar:`${h12}:${String(s.m).padStart(2,'0')} ${s.h<12?'صباحاً':'مساءً'}`,why:['قبل الظهر am، وبعده pm.','Before noon am; after noon pm.']}}},
 think:[['قبل 12 ← am. من 12 وبعد ← pm (اطرح 12).','Before 12 → am. From 12 → pm (minus 12).']]};

/* =================== الوحدة 4: الأسماء والإشارة =================== */
const SB={deck:['the deck','اللوح الذي تقف عليه'],wheel:['the wheel','العجلة'],axle:['the axle','المحور: تُركّب عليه العجلة'],truck:['the truck','الحامل: يحمل المحور']};
const sbSvg=k=>{const H=x=>k===x?red:null;return svg(160,bg(160)+`<path d="M40 70 Q40 56 60 56 H340 Q360 56 360 70 Q360 82 340 82 H60 Q40 82 40 70Z" fill="${H('deck')||'#c97b3a'}" stroke="${ink}" stroke-width="2"/>`+[110,290].map(x=>rc(x-26,82,52,14,H('truck')||'#9aa3aa',{rx:3})+ln(x-40,104,x+40,104,H('axle')||'#5f6a71',6)+ci(x-40,108,14,H('wheel')||'#f1b33c',{st:ink})+ci(x+40,108,14,H('wheel')||'#f1b33c',{st:ink})).join(''))};
NH['أجزاء لوح التزلج']={
 say:[`قبل ما نسأل عن الأسماء نعرف أجزاء لوح التزلج: اللوح ${E('the deck')}، والعجلة ${E('the wheel')}، والمحور ${E('the axle')}، والحامل ${E('the truck')}. العجلة على المحور، والمحور جزء من الحامل.`,
  `The parts: ${E('the deck · the wheel · the axle · the truck')}. The wheel is on the axle; the axle is part of the truck.`],
 life:[['The wheels are on the axle.','العجلات على المحور.']],
 scene:{title:['المس الجزء','Tap a part'],
  ctrl:[{k:'p',label:['الجزء','Part'],opts:Object.keys(SB).map(k=>[k,k])}],
  svg:s=>sbSvg(s.p),
  ask:s=>({q:['وش اسم الجزء الأحمر؟','The red part is:'],opts:Object.keys(SB).map(k=>SB[k][0]),a:SB[s.p][0]}),
  out:s=>({t:S(`q:This is|x:${SB[s.p][0]}.`),ar:SB[s.p][1]+'.',why:['نذكر الجزء مع the.','We say the part with the.']})},
 think:[['أعرف مكان الجزء في اللوح؟ ← أختار اسمه.','Where is the part? → choose its name.']]};

const WC={spanner:['a spanner','spanners','It','is','مفتاح ربط'],washer:['a washer','washers','They','are','حلقات']};
NH['السؤال عن اسم الشيء']={
 say:[`تعرف الشي بس ما تعرف اسمه بالإنجليزي؟ اسأل: ${E("What's this called in English?")} والجواب: ${E("It's called a spanner.")} وللجمع: ${E('What are these called?')} — ${E("They're called washers.")}`,
  `${E("What's this called?")} — ${E("It's called a spanner.")} Plural: ${E('What are these called?')} — ${E("They're called washers.")}`],
 life:[["What's this called in English?",'ما اسم هذا بالإنجليزي؟']],
 scene:{title:['اسأل عن الاسم','Ask for the name'],
  ctrl:[{k:'t',label:['الشيء','Thing'],opts:[['spanner','one'],['washer','more']]}],
  svg:s=>svg(140,bg(140)+(s.t==='spanner'?TOOL.spanner(200,80,1):[150,200,250].map(x=>ci(x,70,26,'#9aa3aa')+ci(x,70,10,'#eaf3f9')).join(''))),
  ask:s=>({q:['this ولا these؟','this or these?'],opts:['this','these'],a:s.t==='spanner'?'this':'these'}),
  out:s=>s.t==='spanner'?{t:S("q:What's|x:this|q:called?|q:—|x:It's called|n:a spanner."),ar:'ما اسم هذا؟ — اسمه مفتاح ربط.',why:["مفرد ← this / It's called a …","Singular → this / It's called a …"]}:{t:S("q:What are|x:these|q:called?|q:—|x:They're called|n:washers."),ar:'ما اسم هذه؟ — اسمها حلقات.',why:["جمع ← these / They're called …","Plural → these / They're called …"]}},
 think:[["واحد ← What's this called? أكثر ← What are these called?","One → What's this called? More → What are these called?"]]};

const TT={this:['this','near','one','هذا (قريب)'],that:['that','far','one','ذاك (بعيد)'],these:['these','near','more','هؤلاء (قريبة)'],those:['those','far','more','أولئك (بعيدة)']};
NH['this / that / these / those']={
 say:[`نختار الكلمة بسؤالين: قريب ولا بعيد؟ واحد ولا أكثر؟ قريب وواحد ← ${E('this')}. بعيد وواحد ← ${E('that')}. قريب وأكثر ← ${E('these')}. بعيد وأكثر ← ${E('those')}.`,
  `Near or far? One or more? ${E('this · that · these · those')}.`],
 life:[['This is my phone.','هذا جوالي.'],['Those are my brothers.','أولئك إخواني.']],
 scene:{title:['قريب أو بعيد؟','Near or far?'],
  ctrl:[{k:'d',label:['المسافة','Distance'],opts:[['near',['قريب','near']],['far',['بعيد','far']]]},{k:'n',label:['العدد','Number'],opts:[['one',['واحد','one']],['more',['أكثر','more']]]}],
  svg:s=>{const x=s.d==='near'?130:330,sc=s.d==='near'?1:0.6;let b=bg(150)+grd(140)+man(60,120,blu,1)+ln(80,96,s.d==='near'?110:300,96,'#e3b892',4);const n=s.n==='one'?1:3;for(let i=0;i<n;i++)b+=TOOL.screwdriver(x+(i-(n-1)/2)*24*sc,90,sc*0.9);return svg(150,b)},
  ask:s=>{const k=Object.keys(TT).find(k=>TT[k][1]===s.d&&TT[k][2]===s.n);return{q:['أي كلمة؟','Which word?'],opts:['this','that','these','those'],a:k}},
  out:s=>{const k=Object.keys(TT).find(k=>TT[k][1]===s.d&&TT[k][2]===s.n);const one=s.n==='one';return{t:S(`x:${cap(k)}|q:${one?'is':'are'}|n:${one?'my screwdriver':'my screwdrivers'}.`),ar:TT[k][3],why:[`${s.d==='near'?'قريب':'بعيد'} و${one?'واحد':'أكثر'} ← ${k}.`,`${s.d} + ${s.n} → ${k}`]}}},
 think:[['قريب ولا بعيد؟ واحد ولا أكثر؟','Near or far? One or more?']]};

/* =================== الوحدة 4: المحل والتركيب =================== */
NH['الطلب في المحل: a و some و How many?']={
 say:[`في المحل: قطعة وحدة ← ${E('a washer')}. أكثر وما تعرف العدد ← ${E('some washers')}. تعرف العدد ← ${E('twenty washers')}. والبائع يسألك: ${E('What size?')} و ${E('How many?')}`,
  `One → ${E('a washer')}. More, no number → ${E('some washers')}. A number → ${E('twenty washers')}. The seller asks ${E('What size? How many?')}`],
 life:[['I need some eggs.','أحتاج بعض البيض.'],['Can I have a bottle of water?','هل يمكنني أخذ قارورة ماء؟']],
 scene:{title:['اطلب من البائع','Ask the seller'],
  ctrl:[{k:'n',label:['الطلب','Order'],opts:[['1',['واحدة','one']],['some',['كم وحدة','some']],['20',['عشرين','twenty']]]}],
  svg:s=>{let b=bg(140)+rc(40,80,320,20,'#a7744a',{rx:2})+man(330,76,grn,1);const n=s.n==='1'?1:s.n==='some'?4:8;for(let i=0;i<n;i++)b+=ci(70+i*28,66,11,'#9aa3aa')+ci(70+i*28,66,4,'#eaf3f9');if(s.n==='20')b+=tx(180,40,'× 20',{fs:18,c:red});return svg(140,b)},
  ask:s=>({q:['وش تقول؟','What do you say?'],opts:['a washer','some washers','twenty washers'],a:s.n==='1'?'a washer':s.n==='some'?'some washers':'twenty washers'}),
  out:s=>({t:S(`q:I need|x:${s.n==='1'?'a':s.n==='some'?'some':'twenty'}|n:washer${s.n==='1'?'':R('s')}.`),say:`I need ${s.n==='1'?'a washer':s.n==='some'?'some washers':'twenty washers'}.`,ar:s.n==='1'?'أحتاج حلقة.':s.n==='some'?'أحتاج بعض الحلقات.':'أحتاج عشرين حلقة.',why:s.n==='1'?['واحدة ← a.','One → a.']:s.n==='some'?['أكثر بدون عدد ← some + جمع.','More, no number → some + plural.']:['عدد ← الرقم + جمع.','A number → number + plural.']})},
 think:[['واحد ← a. أكثر بدون عدد ← some. عدد ← الرقم.','One → a. More, no number → some. Number → the number.']]};

const IN=[['Put','the plate','on the four bolts','ضع اللوح على المسامير الأربعة'],['Put','the washers','on the bolts','ضع الحلقات على المسامير'],['Tighten','the nuts','','اشدد الصواميل']];
NH['التعليمة: فعل + شيء + مكان']={
 say:[`تعليمات التركيب لها ترتيب ثابت:${FM('الفعل','+','الشيء','+','المكان')}${E('Put the plate on the four bolts.')} وبعضها ما يحتاج مكان: ${E('Tighten the nuts.')}`,
  `Verb + thing + place: ${E('Put the plate on the four bolts.')} Some need no place: ${E('Tighten the nuts.')}`],
 life:[['Put the cup on the table.','ضع الكوب على الطاولة.']],
 scene:{title:['خطوات التركيب','Assembly steps'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,3,1],init:1}],
  svg:s=>{let b=bg(140)+rc(80,100,240,16,'#a7744a',{rx:2})+[120,170,230,280].map(x=>rc(x-4,70,8,30,'#9aa3aa',{rx:1})).join('');if(s.i>=1)b+=rc(100,84,200,14,'#5d7f96',{rx:3,op:s.i===1?1:0.8});if(s.i>=2)b+=[120,170,230,280].map(x=>rc(x-9,78,18,5,'#c9d1d6',{rx:2})).join('');if(s.i>=3)b+=[120,170,230,280].map(x=>rc(x-7,70,14,9,'#5f6a71',{rx:1})).join('');return svg(140,b+tx(200,30,`step ${s.i}`,{fs:15,c:red}))},
  ask:()=>({q:['أول كلمة:','First word:'],opts:['the verb','the thing','the place'],a:'the verb'}),
  out:s=>{const i=IN[s.i-1];return{t:S(`k:${i[0]}|n:${i[1]}${i[2]?'|a:'+i[2]:''}.`),ar:i[3]+'.',why:['الفعل ← الشيء ← المكان.','Verb → thing → place.']}}},
 think:[['ابدأ بالفعل، ثم الشيء، ثم المكان.','Verb, then thing, then place.']]};

const AS={put:['Put','on','Take','off','the wheel','ضع العجلة','انزع العجلة'],tight:['Tighten','','Loosen','','the nut','اشدد الصامولة','أرخِ الصامولة'],push:['Push','','Pull','','the lever','ادفع الذراع','اسحب الذراع']};
NH['أفعال التركيب وأضدادها']={
 say:[`كل حركة تركيب لها عكس في الفك، فنحفظها أزواج: ${E('put on ≠ take off')}، ${E('tighten ≠ loosen')}، ${E('push ≠ pull')}. ومع ${E('put')} نقول ${E('on')}، ومع ${E('take')} نقول ${E('off')}.`,
  `Learn them in pairs: ${E('put on ≠ take off · tighten ≠ loosen · push ≠ pull')}.`],
 life:[['Put on your jacket.','البس معطفك.'],['Take off your shoes.','اخلع حذاءك.']],
 scene:{title:['ركّب أو فكّ','Fit or remove'],
  ctrl:[{k:'v',label:['الحركة','Action'],opts:[['put','wheel'],['tight','nut'],['push','lever']]},{k:'d',label:['الاتجاه','Direction'],opts:[['a',['تركيب','fit']],['b',['فك','remove']]]}],
  svg:s=>{const B=s.d==='b';let b=bg(140);if(s.v==='put')b+=ln(120,80,300,80,'#5f6a71',8)+wh(B?300:200,80,26)+ar(B?220:290,80,B?290:220,80,grn,4);if(s.v==='tight')b+=`<path d="M200 50 L230 66 V98 L200 114 L170 98 V66Z" fill="#7d878e"/>`+`<path d="M160 82 A40 40 0 0 ${B?0:1} 240 82" stroke="${grn}" stroke-width="4" fill="none"/>`;if(s.v==='push')b+=rc(160,100,80,20,'#7d878e',{rx:3})+ln(200,100,B?170:230,50,ink,6)+ar(B?240:160,60,B?280:120,60,grn,4)+man(B?320:80,120,blu,0.9);return svg(140,b)},
  ask:s=>{const a=AS[s.v];return{q:['وش الفعل؟','Which verb?'],opts:[a[0],a[2]],a:s.d==='a'?a[0]:a[2]}},
  out:s=>{const a=AS[s.v],A=s.d==='a';return{t:S(`k:${A?a[0]:a[2]}|n:${a[4]}${(A?a[1]:a[3])?'|x:'+(A?a[1]:a[3]):''}.`),ar:(A?a[5]:a[6])+'.',why:[`${a[0].toLowerCase()} ≠ ${a[2].toLowerCase()}`,`${a[0].toLowerCase()} ≠ ${a[2].toLowerCase()}`]}}},
 think:[['ركّب ولا فكّ؟ ← اختر الفعل من الزوج.','Fit or remove? → choose from the pair.']]};

/* =================== الوحدة 5: الهاتف والتعريف =================== */
const VM=[['Hello.','x:This is','n:Neil Shaw.','مرحباً، معك نيل شو.'],['That\'s','x:S-H-A-W.','','هذا تهجئة الاسم.'],["I'm from",'n:Delta Tools.','','أنا من شركة دلتا تولز.'],['My number is','x:double oh, nine six six …','','رقمي 00966 …'],['Please','x:call me back.','','أرجو أن تعاود الاتصال بي.']];
NH['الرسالة الصوتية والأرقام الدولية']={
 say:[`في التلفون ما نقول ${E("I'm …")}، نقول ${E('This is …')}. والرسالة الصوتية خمس خطوات قصيرة: مين أنت ← تهجئة الاسم ← الشركة ← رقمك ← اطلب يرد عليك. و ${E('00')} نقولها ${E('double oh')}.`,
  `On the phone we say ${E('This is …')}. A voicemail: who you are → spelling → company → number → ${E('Please call me back.')}`],
 life:[['Hello, this is Sara.','مرحباً، معك سارة.']],
 scene:{title:['اترك رسالة','Leave a message'],
  ctrl:[{k:'i',label:['الجزء','Part'],range:[1,5,1],init:1}],
  svg:s=>svg(130,bg(130)+rc(150,20,100,100,'#33424c',{rx:14})+rc(160,32,80,60,'#9fc3d8',{rx:4})+ci(200,104,8,red)+tx(200,66,`${s.i} / 5`,{fs:16})+man(80,112,blu,1)),
  ask:s=>s.i===1?{q:['في التلفون نقول:','On the phone we say:'],opts:['This is','I am','Here is'],a:'This is'}:null,
  out:s=>{const v=VM[s.i-1];return{t:S(`q:${v[0]}|${v[1]}${v[2]?'|'+v[2]:''}`),ar:v[3],why:['خطوات قصيرة ومرتبة.','Short, ordered steps.']}}},
 think:[['أبدأ بـ This is … وأختم بـ Please call me back.','Start with This is …, end with Please call me back.']]};

const OQ=[['What do you need?','I need two seat covers.','ماذا تحتاج؟ — أحتاج غطاءي مقعد.'],['What colour?','Black, please.','ما اللون؟ — أسود لو سمحت.'],['What size?','Large.','ما المقاس؟ — كبير.'],['How many?','Two.','كم العدد؟ — اثنان.'],["What's your name, please?","It's Ali Hassan.",'ما اسمك لو سمحت؟ — علي حسن.']];
NH['طلب البضائع بالهاتف']={
 say:[`البائع في التلفون ما يشوف وش تبي، فيسألك أسئلة قصيرة: وش تحتاج؟ أي لون؟ أي مقاس؟ كم عدد؟ وجاوب باختصار.`,
  `The seller can't see you, so he asks short questions: ${E('What do you need? What colour? What size? How many?')}`],
 life:[['What size? — Medium.','ما المقاس؟ — متوسط.']],
 scene:{title:['أسئلة البائع',"The seller's questions"],
  ctrl:[{k:'i',label:['السؤال','Question'],range:[1,5,1],init:1}],
  svg:s=>svg(130,bg(130)+man(70,112,grn,1)+rc(46,48,16,10,ink,{rx:3})+man(330,112,blu,1)+rc(338,48,16,10,ink,{rx:3})+bub(110,20,180,36,OQ[s.i-1][0],{fs:13})),
  ask:s=>({q:['أنسب جواب:','Best answer:'],opts:OQ.map(o=>o[1]),a:OQ[s.i-1][1]}),
  out:s=>{const o=OQ[s.i-1];return{t:S(`q:${o[0]}|q:—|n:${o[1]}`),ar:o[2],why:['سؤال قصير وجواب قصير.','Short question, short answer.']}}},
 think:[['وش يبي يعرف البائع؟ الشي؟ اللون؟ المقاس؟ العدد؟','What does the seller want to know?']]};

const PE={stuart:['Stuart',"He's",'a student','هذا ستيوارت. هو طالب.'],laura:['Laura',"She's",'an engineer','هذه لورا. هي مهندسة.']};
NH['تعريف شخص آخر']={
 say:[`تعرّف زميلك لغيرك: ${E('This is Stuart.')} ثم ${E("He's")} أو ${E("She's")}: ${E("He's a student.")} و ${E('too')} في آخر الجملة يعني «أيضاً»: ${E("He's a student, too.")}`,
  `${E('This is Stuart.')} Then ${E("He's / She's …")}. ${E('too')} at the end = also.`],
 life:[['This is my brother, Ahmed.','هذا أخي أحمد.']],
 scene:{title:['عرّف زميلك','Introduce your friend'],
  ctrl:[{k:'p',label:['الشخص','Person'],opts:[['stuart','Stuart'],['laura','Laura']]},{k:'t',label:['أنت كذلك؟','You too?'],opts:[['n',['لا','no']],['y',['نعم','yes']]]}],
  svg:s=>svg(140,bg(140)+grd(130)+man(80,112,blu,1)+man(200,112,s.p==='laura'?'#b05a7a':grn,1)+man(320,112,'#5d7f96',1)+ar(110,70,170,70,grn,3)),
  ask:s=>({q:["He's ولا She's؟","He's or She's?"],opts:["He's","She's"],a:PE[s.p][1]}),
  out:s=>{const p=PE[s.p];return{t:S(`x:This is|n:${p[0]}.|a:${p[1]}|n:${p[2]}${s.t==='y'?',|x:too':''}.`),ar:p[3]+(s.t==='y'?' (مثلي أيضاً)':''),why:s.t==='y'?['too في الآخر = أيضاً.','too at the end = also.']:["This is …، ثم He's / She's.","This is …, then He's / She's."]}}},
 think:[["رجل ← He's. امرأة ← She's.","A man → He's. A woman → She's."]]};

/* =================== الوحدة 5: have و has =================== */
const HV={knife:['The knife','has','a blade','it',1,'السكين فيها شفرة.'],I:['I','have','a screwdriver','I',2,'عندي مفك.'],tools:['The tools','have','handles','they',2,'الأدوات لها مقابض.'],he:['He','has','a spanner','he',1,'عنده مفتاح ربط.']};
NH['have و has، والسؤال والنفي']={
 say:[`«عندي» أو «فيها» = ${E('have')}. مع ${E('he / she / it')} تصير ${E('has')}: ${E('The knife has a blade.')} وفي السؤال والنفي نجيب ${E('Do / Does')} و ${E("don't / doesn't")}، وترجع ${E('have')} كما هي: ${E('Does the knife have a saw?')}`,
  `${E('have')}; with he / she / it → ${E('has')}. Questions and negatives use ${E('do / does')} and the verb goes back to ${E('have')}.`],
 life:[['I have two brothers.','عندي أخوان.'],["She doesn't have a car.",'ليس عندها سيارة.']],
 scene:{title:['عنده ولا ما عنده؟','Has it or not?'],
  ctrl:[{k:'s',label:['الفاعل','Subject'],opts:Object.keys(HV).map(k=>[k,HV[k][0]])},{k:'f',label:['الشكل','Form'],opts:[['p',['مثبتة','positive']],['q',['سؤال','question']],['n',['نفي','negative']]]}],
  svg:s=>svg(140,bg(140)+(s.s==='knife'?TOOL.knife(200,80,1.2):s.s==='tools'?TOOL.hammer(150,70,0.9)+TOOL.screwdriver(250,70,0.9):man(200,112,blu,1)+(s.s==='I'?TOOL.screwdriver(240,80,0.7):TOOL.spanner(240,80,0.7)))),
  ask:s=>{const h=HV[s.s];return s.f==='p'?{q:['have ولا has؟','have or has?'],opts:['have','has'],a:h[1]}:{q:['بعد Does / Do / doesn\'t:',"After do / does:"],opts:['have','has'],a:'have',hint:['بعد does ترجع have.','After does → have.']}},
  out:s=>{const h=HV[s.s],one=h[4]===1;return s.f==='p'?{t:S(`a:${h[0]}|x:${h[1]}|n:${h[2]}.`),ar:h[5],why:one?['he / she / it ← has.','he / she / it → has.']:['I / you / we / they ← have.','I / you / we / they → have.']}:s.f==='q'?{t:S(`x:${one?'Does':'Do'}|a:${h[0]==='I'?'you':h[0].toLowerCase()}|k:have|n:${h[2]}?`),ar:'هل '+h[5].replace('.','؟'),why:[`${one?'Does':'Do'} + الفاعل + have`,`${one?'Does':'Do'} + subject + have`]}:{t:S(`a:${h[0]}|x:${one?"doesn't":"don't"}|k:have|n:${h[2]}.`),ar:'ليس '+h[5].replace(/^\S+ /,''),why:[`${one?"doesn't":"don't"} + have`,`${one?"doesn't":"don't"} + have`]}}},
 think:[['he / she / it ← has. بعد does ← have.','he / she / it → has. After does → have.']]};

const PR={pliers:['pliers','a pair of pliers','زردية'],scissors:['scissors','a pair of scissors','مقص']};
NH['أجزاء الأداة و a pair of']={
 say:[`بعض الأدوات من قطعتين متشابهتين، فاسمها جمع دايماً: ${E('pliers')} و ${E('scissors')}. ما نقول ${E('a plier')}، نقول ${E('a pair of pliers')}. وأجزاء الأداة: المقبض ${E('handle')}، والرأس ${E('head')}، والشفرة ${E('blade')}، والفكّين ${E('jaws')}.`,
  `Some tools have two same halves, so the name is always plural: ${E('a pair of pliers')}, not "a plier".`],
 life:[['I need a pair of scissors.','أحتاج مقصاً.']],
 scene:{title:['أداة من قطعتين','A tool with two halves'],
  ctrl:[{k:'t',label:['الأداة','Tool'],opts:[['pliers','pliers'],['scissors','scissors']]}],
  svg:s=>svg(150,bg(150)+TOOL[s.t](200,70,1.5)+tx(100,140,'1',{fs:16,c:red})+tx(300,140,'2',{fs:16,c:red})),
  ask:s=>({q:['نقول:','We say:'],opts:[PR[s.t][1],'a '+s.t.replace(/s$/,'')],a:PR[s.t][1]}),
  out:s=>({t:S(`q:I need|x:a pair of|n:${s.t}.|q:These are ${s.t}.`),ar:`أحتاج ${PR[s.t][2]}.`,why:['اسمها جمع دايماً ← a pair of.','Always plural → a pair of.']})},
 think:[['أداة من قطعتين متشابهتين؟ ← a pair of + الجمع.','Two same halves? → a pair of + plural.']]};

const BT={key:['The Key Tool','a screwdriver','a wrench','عنده مفك، لكن ليس عنده مفتاح ربط'],surv:['The Survival Tool','a ruler','a saw','عندها مسطرة، لكن ليس عندها منشار']};
NH['المقارنة بـ but']={
 say:[`«لكن» = ${E('but')}. تربط جملتين عكس بعض: وحدة مثبتة ووحدة منفية، وقبلها فاصلة: ${E("The Key Tool has a screwdriver, but it doesn't have a wrench.")}`,
  `${E('but')} joins two opposite sentences (one positive, one negative), with a comma before it.`],
 life:[["I have a car, but I don't have a bike.",'عندي سيارة، لكن ليس عندي دراجة.']],
 scene:{title:['قارن الأداتين','Compare the tools'],
  ctrl:[{k:'t',label:['الأداة','Tool'],opts:[['key','Key Tool'],['surv','Survival Tool']]}],
  svg:s=>{const t=BT[s.t];return svg(130,bg(130)+rc(30,20,160,90,'#e2f2e8',{st:grn,rx:10})+tx(110,50,'✓ '+t[1].replace('a ',''),{fs:15,c:grn})+rc(210,20,160,90,'#fbe9e4',{st:red,rx:10})+tx(290,50,'✗ '+t[2].replace('a ',''),{fs:15,c:red})+TOOL.screwdriver(110,82,0.5)+tx(200,70,'but',{fs:16,c:red}))},
  ask:()=>({q:['قبل but:','Before but:'],opts:[', (comma)','. (full stop)','nothing'],a:', (comma)'}),
  out:s=>{const t=BT[s.t];return{t:S(`a:${t[0]}|k:has|n:${t[1]},|x:but|q:it|k:doesn't have|n:${t[2]}.`),ar:t[3]+'.',why:['مثبتة، but، منفية.','Positive, but, negative.']}}},
 think:[['جملتين عكس بعض؟ ← , but','Two opposite sentences? → , but']]};

/* =================== الوحدة 6: المضارع البسيط =================== */
const PW={mains:['mains electricity','كهرباء الشبكة'],solar:['solar power','الطاقة الشمسية'],dynamo:['a dynamo','مولّد يدوي'],batteries:['batteries','بطاريات']};
const pwSvg=k=>{let b=bg(140)+rc(250,50,90,60,'#33424c',{rx:10})+ci(295,80,16,yel);if(k==='mains')b+=rc(40,60,40,50,'#fff',{st:ink,rx:6})+ci(52,80,4,ink)+ci(68,80,4,ink)+ln(80,85,250,85,ink,4);if(k==='solar')b+=ci(60,40,20,yel)+[0,1,2,3,4,5,6,7].map(i=>ln(60+26*Math.cos(i*0.785),40+26*Math.sin(i*0.785),60+34*Math.cos(i*0.785),40+34*Math.sin(i*0.785),yel,3)).join('')+rc(100,90,90,34,'#2b4d7a',{rx:2,st:ink})+ln(190,105,250,95,ink,3);if(k==='dynamo')b+=ci(110,85,24,'#7d878e',{st:ink})+ln(110,85,140,60,ink,6)+ci(140,60,6,red)+ln(134,85,250,85,ink,3);if(k==='batteries')b+=[80,130].map(x=>rc(x,70,36,50,grn,{rx:4})+rc(x+12,64,12,6,ink,{rx:1})).join('')+ln(166,95,250,95,ink,3);return svg(140,b)};
NH['مصادر الطاقة وأجزاء الجهاز']={
 say:[`أي جهاز يحتاج شي يشغّله: كهرباء البيت، أو الشمس، أو مولّد تدوّره بيدك، أو بطاريات. وكل جزء فيه له شغلة، ونوصفها بجملة قصيرة:${FM('الجزء','+','الفعل','+','الباقي')}${E('The torch shines a light.')}`,
  `Every device needs a power source, and every part has a job: ${E('The torch shines a light.')}`],
 life:[['My phone uses batteries.','جوالي يعمل بالبطارية.']],
 scene:{title:['وش يشغّل الجهاز؟','What powers it?'],
  ctrl:[{k:'p',label:['المصدر','Source'],opts:Object.keys(PW).map(k=>[k,k])}],
  svg:s=>pwSvg(s.p),
  ask:()=>({q:['وظيفة البوصلة:','The compass:'],opts:['finds North','shines a light','measures speed'],a:'finds North'}),
  out:s=>({t:S(`a:The radio|k:uses|n:${PW[s.p][0]}.`),ar:`يعمل الراديو بـ${PW[s.p][1]}.`,why:['الجزء أو الجهاز، ثم الفعل.','The part or device, then the verb.']})},
 think:[['وش يسوي هذا الجزء؟ ← الجزء + الفعل.','What does this part do? → part + verb.']]};

const PS={I:['I','work','work','do',"don't",'أعمل'],you:['You','work','work','do',"don't",'تعمل'],he:['He','works','work','does',"doesn't",'يعمل'],she:['She','watches','watch','does',"doesn't",'تشاهد'],it:['It','measures','measure','does',"doesn't",'يقيس'],they:['They','study','study','do',"don't",'يدرسون']};
const OBJ={I:'in Liverpool',you:'in a bank',he:'in a factory',she:'the screen',it:'temperature',they:'English'};
NH['المضارع البسيط مع كل الضمائر']={
 say:[`المضارع البسيط للشي الثابت أو اللي يتكرر. والقاعدة كلها في ${E('he / she / it')}: نزيد ${E('s')} على الفعل: ${E('I work → He works')}. وفي السؤال والنفي تنتقل ${E('s')} إلى ${E('does / doesn\'t')}، ويرجع الفعل بلا ${E('s')}.`,
  `With ${E('he / she / it')} add ${E('s')}: ${E('He works.')} In questions and negatives the s moves to ${E("does / doesn't")}.`],
 life:[['My father works in a hospital.','أبي يعمل في مستشفى.'],["I don't drink coffee.",'لا أشرب القهوة.']],
 scene:{title:['وين تروح s؟','Where does the s go?'],
  ctrl:[{k:'p',label:['الفاعل','Subject'],opts:Object.keys(PS).map(k=>[k,PS[k][0]])},{k:'f',label:['الشكل','Form'],opts:[['p',['مثبتة','positive']],['q',['سؤال','question']],['n',['نفي','negative']]]}],
  svg:s=>{const one=['he','she','it'].includes(s.p);let b=bg(130)+grd(122);b+=s.p==='it'?rc(170,40,60,80,'#fff',{st:ink,rx:30})+rc(194,60,12,50,red,{rx:6}):man(200,90,s.p==='she'?'#b05a7a':blu,1);b+=tx(330,60,one?'+ s':'—',{fs:30,c:one?red:gry});return svg(130,b)},
  ask:s=>{const p=PS[s.p];return s.f==='p'?{q:['الفعل:','The verb:'],opts:[p[1],p[2]].filter((v,i,a)=>a.indexOf(v)===i).concat(p[1]===p[2]?[p[2]+'s']:[]),a:p[1]}:{q:['do ولا does؟','do or does?'],opts:['do','does'],a:p[3]}},
  out:s=>{const p=PS[s.p],one=p[3]==='does';const sub=p[0]==='I'?'you':p[0].toLowerCase();if(s.f==='p')return{t:S(`a:${p[0]}|k:${one?p[2]+R(p[1].slice(p[2].length)):p[1]}|n:${OBJ[s.p]}.`),say:`${p[0]} ${p[1]} ${OBJ[s.p]}.`,ar:'',why:one?['he / she / it ← نزيد s.','he / she / it → add s.']:['I / you / we / they ← الفعل كما هو.','I / you / we / they → verb as it is.']};if(s.f==='q')return{t:S(`x:${cap(p[3])}|a:${sub}|k:${p[2]}|n:${OBJ[s.p]}?`),ar:'',why:[`${cap(p[3])} + الفاعل + الفعل بلا s`,`${cap(p[3])} + subject + verb without s`]};return{t:S(`a:${p[0]}|x:${p[4]}|k:${p[2]}|n:${OBJ[s.p]}.`),ar:'',why:[`${p[4]} + الفعل بلا s`,`${p[4]} + verb without s`]}}},
 think:[['he / she / it؟ ← s على الفعل، أو على does.','he / she / it? → s on the verb, or on does.']]};

const TV={saw:['A saw','cuts','wood','it','المنشار يقطع الخشب.','cut'],pliers:['Pliers','grip','wire','they','الزردية تمسك السلك.','grips'],hammer:['A hammer','drives in','nails','it','المطرقة تدق المسامير.','drive in'],spanner:['A spanner','tightens','nuts','it','مفتاح الربط يشد الصواميل.','tighten'],scissors:['Scissors','cut','paper','they','المقص يقطع الورق.','cuts']};
NH['أفعال الأدوات']={
 say:[`كل أداة لها فعل يوصف شغلها، ونطبق نفس قاعدة ${E('s')}: الأداة المفردة (${E('it')}) ← ${E('A saw cuts wood.')} لكن ${E('pliers')} و ${E('scissors')} جمع (${E('they')})، فبدون ${E('s')}: ${E('Pliers grip wire.')}`,
  `A single tool (it) → s: ${E('A saw cuts wood.')} Pliers and scissors are plural (they) → no s.`],
 life:[['A knife cuts bread.','السكين تقطع الخبز.']],
 scene:{title:['وش تسوي الأداة؟','What does the tool do?'],
  ctrl:[{k:'t',label:['الأداة','Tool'],opts:Object.keys(TV).map(k=>[k,k])}],
  svg:s=>svg(140,bg(140)+TOOL[s.t](200,70,1.2)+tx(330,70,TV[s.t][3],{fs:22,c:TV[s.t][3]==='it'?red:blu})),
  ask:s=>{const t=TV[s.t];return{q:['الفعل:','The verb:'],opts:[t[1],t[5]],a:t[1]}},
  out:s=>{const t=TV[s.t];return{t:S(`a:${t[0]}|k:${t[1]}|n:${t[2]}.`),ar:t[4],why:t[3]==='it'?['أداة وحدة ← it ← s.','One tool → it → s.']:['pliers / scissors جمع ← they ← بلا s.','pliers / scissors are plural → no s.']}}},
 think:[['الأداة مفردة ولا جمع؟ مفردة ← s.','Is the tool singular? → s.']]};

const WK=[["What do you do?","I'm a mechanic.",'ما عملك؟ — أنا ميكانيكي.','you'],['Where do you work?','I work at a car company.','أين تعمل؟ — أعمل في شركة سيارات.','you'],['What does Edward do?','He studies at the technical college.','ماذا يعمل إدوارد؟ — يدرس في الكلية التقنية.','he']];
NH['السؤال عن العمل والدراسة']={
 say:[`الشغل والدراسة شي ثابت، فنسأل عنها بالمضارع البسيط. لك أنت ← ${E('do')}: ${E('What do you do?')} ولشخص ثاني ← ${E('does')}: ${E('What does Edward do?')} وجوابه فيه ${E('s')}: ${E('He studies …')}`,
  `You → ${E('do')}; another person → ${E('does')}, and the answer has s: ${E('He studies …')}`],
 life:[['Where do you study?','أين تدرس؟']],
 scene:{title:['اسأل عن الشغل','Ask about work'],
  ctrl:[{k:'i',label:['السؤال','Question'],range:[1,3,1],init:1}],
  svg:s=>svg(130,bg(130)+man(70,108,blu,1)+man(330,108,grn,1)+(s.i===3?man(200,108,'#5d7f96',0.8):'')+bub(100,14,200,32,WK[s.i-1][0],{fs:13})),
  ask:s=>({q:['do ولا does؟','do or does?'],opts:['do','does'],a:s.i===3?'does':'do'}),
  out:s=>{const w=WK[s.i-1];const m=w[0].match(/^(\S+) (does|do) (.*)$/);return{t:S(`q:${m[1]}|x:${m[2]}|q:${m[3]}|q:—|n:${w[1]}`),say:`${w[0]} ${w[1]}`,ar:w[2],why:w[3]==='he'?['شخص ثاني ← does، والجواب فيه s.','Another person → does; the answer has s.']:['أنت ← do.','You → do.']}}},
 think:[['أسألك أنت ← do. أسأل عن غيرك ← does.','You → do. Someone else → does.']]};

/* =================== الوحدة 7: المكان =================== */
const P9={tl:['at the top, on the left','at the top','on the left'],t:['at the top','at the top',''],tr:['at the top, on the right','at the top','on the right'],l:['on the left','','on the left'],c:['in the centre','','in the centre'],r:['on the right','','on the right'],bl:['at the bottom, on the left','at the bottom','on the left'],b:['at the bottom','at the bottom',''],br:['at the bottom, on the right','at the bottom','on the right']};
NH['المواقع التسعة']={
 say:[`أي شاشة أو لوحة نقسمها تسعة مربعات. ولكل جهة حرف ثابت: فوق وتحت ← ${E('at')}، يمين ويسار ← ${E('on')}، الوسط ← ${E('in')}. والزاوية نجمع اثنين بفاصلة: ${E('at the bottom, on the left')}.`,
  `${E('at')} the top / bottom · ${E('on')} the left / right · ${E('in')} the centre. Corners: ${E('at the bottom, on the left')}.`],
 life:[['The clock is at the top.','الساعة في الأعلى.']],
 scene:{title:['وين الزر؟','Where is the button?'],
  ctrl:[{k:'p',label:['المربع','Square'],opts:Object.keys(P9).map((k,i)=>[k,'↖↑↗←•→↙↓↘'[i]])}],
  svg:s=>{let b=bg(170)+rc(110,10,180,150,'#33424c',{rx:8});const K=Object.keys(P9);K.forEach((k,i)=>{const x=120+(i%3)*56,y=20+Math.floor(i/3)*46;b+=rc(x,y,50,40,k===s.p?red:'#5d6b74',{rx:6})+(k===s.p?tx(x+25,y+26,'START',{fs:10,c:'#fff'}):'')});return svg(170,b)},
  ask:s=>{const p=P9[s.p];return{q:['حرف الجر مع '+(p[1]?'top/bottom':p[2].includes('centre')?'centre':'left/right')+':','The preposition:'],opts:['at','on','in'],a:p[1]?'at':p[2].includes('centre')?'in':'on'}},
  out:s=>({t:S(`a:The START button|q:is|x:${P9[s.p][0]}.`),ar:'',why:['top / bottom ← at. left / right ← on. centre ← in.','top / bottom → at. left / right → on. centre → in.']})},
 think:[['فوق / تحت ← at. يمين / يسار ← on. الوسط ← in.','top / bottom → at. left / right → on. centre → in.']]};

const RL={left:['to the left of','يسار'],right:['to the right of','يمين'],above:['above','فوق'],below:['below','تحت']};
NH['المكان بالنسبة لشيء آخر']={
 say:[`${E('on the left')} = في الجهة اليسرى من المكان كله. لكن ${E('to the left of')} = يسار شي محدد، ولازم نذكره بعدها: ${E('The clock is to the left of the window.')} و ${E('above')} فوق، و ${E('below')} تحت.`,
  `${E('on the left')} = left side of the whole place; ${E('to the left of')} + a thing: ${E('to the left of the window')}.`],
 life:[['The mirror is above the sink.','المرآة فوق المغسلة.']],
 scene:{title:['الساعة والنافذة','The clock and the window'],
  ctrl:[{k:'p',label:['مكان الساعة','Clock'],opts:Object.keys(RL).map(k=>[k,k])}],
  svg:s=>{let b=bg(170,'#f3ead9')+rc(160,55,80,60,'#9fc3d8',{st:'#8a5d36',sw:5,rx:2})+ln(200,55,200,115,'#8a5d36',3);const pos={left:[110,85],right:[290,85],above:[200,28],below:[200,145]}[s.p];b+=ci(pos[0],pos[1],18,'#fff',{st:ink,sw:3})+ln(pos[0],pos[1],pos[0],pos[1]-11,ink,2)+ln(pos[0],pos[1],pos[0]+8,pos[1],ink,2);return svg(170,b)},
  ask:s=>({q:['الساعة … النافذة','The clock is … the window.'],opts:Object.values(RL).map(r=>r[0]),a:RL[s.p][0]}),
  out:s=>({t:S(`a:The clock|q:is|x:${RL[s.p][0]}|n:the window.`),ar:`الساعة ${RL[s.p][1]} النافذة.`,why:['بالنسبة لشي محدد ← نذكره بعدها.','Relative to a thing → name it after.']})},
 think:[['في المكان كله ← on the left. بجنب شي ← to the left of + الشيء.','The whole place → on the left. Next to a thing → to the left of + thing.']]};

/* =================== الوحدة 8: الحركة والقدرة =================== */
const DR={up:['up',0,-1,'لأعلى'],down:['down',0,1,'لأسفل'],fw:['forwards',1,0,'للأمام'],bw:['backwards',-1,0,'للخلف'],sd:['sideways',0,0,'جانبياً'],diag:['diagonally up',1,-1,'مائلاً لأعلى']};
NH['الاتجاهات والخطوط']={
 say:[`كلمات الاتجاه أغلبها أزواج عكس بعض: ${E('up ≠ down')} و ${E('forwards ≠ backwards')}. و ${E('straight up')} = عمودي تماماً، و ${E('diagonally up')} = مائل. والخطوط: ${E('vertical')} عمودي، و ${E('horizontal')} أفقي، و ${E('diagonal')} مائل.`,
  `Pairs: ${E('up ≠ down · forwards ≠ backwards')}. ${E('straight up')} vs ${E('diagonally up')}.`],
 life:[['The lift goes up.','المصعد يصعد.']],
 scene:{title:['وين يروح الصاروخ؟','Which way?'],
  ctrl:[{k:'d',label:['الاتجاه','Direction'],opts:Object.keys(DR).map(k=>[k,DR[k][0]])}],
  svg:s=>{const d=DR[s.d];let b=bg(160)+ci(200,80,10,red);if(s.d==='sd')b+=ar2(130,80,270,80,blu,4);else b+=ar(200,80,200+d[1]*80,80+d[2]*60,blu,4);return svg(160,b+tx(70,150,'←  backwards',{fs:11,c:gry})+tx(330,150,'forwards  →',{fs:11,c:gry}))},
  ask:s=>({q:['الاتجاه:','The direction:'],opts:Object.values(DR).map(d=>d[0]),a:DR[s.d][0]}),
  out:s=>({t:S(`a:It|k:moves|x:${DR[s.d][0]}.`),ar:`يتحرك ${DR[s.d][3]}.`,why:['كلمة الاتجاه بعد الفعل.','The direction comes after the verb.']})},
 think:[['عمودي ← straight up / vertical. مائل ← diagonally / diagonal.','Straight → vertical. Slanted → diagonal.']]};

const VH={heli:['A helicopter',{fw:1,bw:1,sd:1,up:1},'هليكوبتر'],plane:['A plane',{fw:1,bw:0,sd:0,up:1},'طائرة']};
const MV={fw:'forwards',bw:'backwards',sd:'sideways',up:'straight up'};
NH["القدرة بـ can و can't"]={
 say:[`«يقدر» = ${E('can')}، وهي ما تتغير أبداً: ${E('I can · he can · it can')}. وبعدها الفعل كما هو، بلا ${E('s')} ولا ${E('to')}. والنفي ${E("can't")}، والسؤال نقدّم ${E('can')}: ${E('Can it fly sideways?')}`,
  `${E('can')} never changes; the verb after it has no s and no to. Negative ${E("can't")}; question: ${E('Can it …?')}`],
 life:[['I can drive.','أستطيع القيادة.'],["My brother can't swim.",'أخي لا يستطيع السباحة.']],
 scene:{title:['هليكوبتر ولا طائرة؟','Helicopter or plane?'],
  ctrl:[{k:'v',label:['المركبة','Vehicle'],opts:[['heli','helicopter'],['plane','plane']]},{k:'m',label:['الحركة','Move'],opts:Object.keys(MV).map(k=>[k,MV[k]])}],
  svg:s=>{let b=bg(150);if(s.v==='heli')b+=`<ellipse cx="200" cy="80" rx="50" ry="24" fill="${blu}"/>`+rc(240,74,70,10,blu,{rx:4})+ln(140,48,260,48,ink,4)+ln(200,48,200,58,ink,4);else b+=`<path d="M130 80 Q200 64 290 76 L300 84 Q200 92 130 86Z" fill="#c9d1d6" stroke="${ink}" stroke-width="2"/><path d="M200 78 L170 46 L188 46 L232 78Z M200 84 L170 116 L188 116 L232 84Z" fill="#9aa3aa"/>`;const okk=VH[s.v][1][s.m];const d={fw:[1,0],bw:[-1,0],sd:[0,1],up:[0,-1]}[s.m];b+=ar(200,80,200+d[0]*120,80+d[1]*55,okk?grn:red,4)+(okk?ok(360,30):no(360,30));return svg(150,b)},
  ask:s=>({q:['can ولا can\'t؟',"can or can't?"],opts:['can',"can't"],a:VH[s.v][1][s.m]?'can':"can't"}),
  out:s=>{const v=VH[s.v],c=v[1][s.m];return{t:S(`a:${v[0]}|x:${c?'can':"can't"}|k:fly|n:${MV[s.m]}.`),ar:`${v[2]} ${c?'تستطيع':'لا تستطيع'} الطيران ${({fw:'للأمام',bw:'للخلف',sd:'جانبياً',up:'عمودياً'})[s.m]}.`,why:['can + الفعل كما هو (fly، مو flies)','can + verb as it is (fly, not flies)']}}},
 think:[['بعد can ← الفعل بلا s ولا to.','After can → the verb, no s, no to.']]};

const JT={wrist:['The wrist',3,'الرسغ'],elbow:['The elbow',1,'المرفق'],shoulder:['The shoulder',2,'الكتف']};
NH['الدوران والمفاصل']={
 say:[`الذراع الآلية مثل ذراعك: فيها مفاصل (الرسغ ${E('wrist')}، والمرفق ${E('elbow')}، والكتف ${E('shoulder')})، وكل مفصل يدور ${E('rotate')} حول محور ${E('axis')}. ونوصف حركته بـ ${E('can')}: ${E('The elbow can only move in one direction.')}`,
  `Joints rotate around an axis; we describe them with can: ${E('The elbow can only move in one direction.')}`],
 life:[['My shoulder can move in many directions.','كتفي يتحرك في اتجاهات كثيرة.']],
 scene:{title:['الذراع الآلية','The robot arm'],
  ctrl:[{k:'j',label:['المفصل','Joint'],opts:Object.keys(JT).map(k=>[k,k])}],
  svg:s=>{const P={shoulder:[110,120],elbow:[200,70],wrist:[290,100]};let b=bg(160)+rc(70,130,80,20,'#5f6a71',{rx:4})+ln(110,120,200,70,'#f1b33c',16)+ln(200,70,290,100,'#f1b33c',14)+ln(290,100,320,90,'#7d878e',6)+ln(290,100,320,115,'#7d878e',6);Object.keys(P).forEach(k=>{b+=ci(P[k][0],P[k][1],k===s.j?14:10,k===s.j?red:'#33424c')});const n=JT[s.j][1],p=P[s.j];for(let i=0;i<n;i++)b+=`<ellipse cx="${p[0]}" cy="${p[1]}" rx="${30-i*4}" ry="${10+i*8}" fill="none" stroke="${blu}" stroke-width="2" stroke-dasharray="4 3" transform="rotate(${i*60} ${p[0]} ${p[1]})"/>`;return svg(160,b)},
  ask:s=>({q:['كم اتجاه؟','How many directions?'],opts:['one','two','three'],a:['','one','two','three'][JT[s.j][1]]}),
  out:s=>{const j=JT[s.j];const w=['','one direction','two directions','three directions'][j[1]];return{t:S(`a:${j[0]}|x:can${j[1]===1?' only':''}|k:move|n:in ${w}.`),ar:`${j[2]} يتحرك في ${['','اتجاه واحد فقط','اتجاهين','ثلاثة اتجاهات'][j[1]]}.`,why:['can + move، والعدد بعدها','can + move, then the number']}}},
 think:[['كم اتجاه يدور المفصل؟ ← can move in …','How many directions? → can move in …']]};

/* =================== الوحدة 9: السرعة والتحكم =================== */
const SP=[['1200 km/h','one thousand two hundred kilometres per hour','1200 كيلومتر في الساعة'],['60 rpm','sixty revolutions per minute','60 دورة في الدقيقة'],['67,000','sixty-seven thousand','67 ألفاً'],['5 m/s','five metres per second','5 أمتار في الثانية']];
NH['السرعة ووحداتها']={
 say:[`السرعة = كم مسافة في كل وحدة زمن. والشرطة ${E('/')} نقرؤها ${E('per')} يعني «في كل»: ${E('km/h = kilometres per hour')}. و ${E('rpm')} = كم دورة في الدقيقة.`,
  `The slash ${E('/')} is read ${E('per')}: ${E('km/h = kilometres per hour')}; ${E('rpm = revolutions per minute')}.`],
 life:[['The speed limit is 120 km/h.','الحد الأعلى للسرعة 120 كم/س.']],
 scene:{title:['اقرأ العداد','Read the meter'],
  ctrl:[{k:'i',label:['القيمة','Value'],opts:SP.map((x,i)=>[i,x[0]])}],
  svg:s=>{let b=bg(150)+`<path d="M90 120 A110 110 0 0 1 310 120" stroke="#33424c" stroke-width="18" fill="none"/>`+ln(200,120,200+80*Math.cos(Math.PI*(1-[0.8,0.3,0.6,0.15][s.i])),120-80*Math.sin(Math.PI*(1-[0.8,0.3,0.6,0.15][s.i])),red,5)+ci(200,120,8,ink)+tx(200,145,SP[s.i][0],{fs:18,c:blu});return svg(150,b)},
  ask:s=>s.i===2?null:{q:['/ نقرؤها:','/ is read:'],opts:['per','slash','and'],a:'per'},
  out:s=>({t:S(`k:${SP[s.i][1]}`),ar:SP[s.i][2],why:s.i===2?['الفاصلة للآلاف ← thousand.','The comma → thousand.']:['/ ← per (في كل).','/ → per.']})},
 think:[['شرطة بين وحدتين ← per.','A slash between units → per.']]};

const JS={push:['Push','up','ادفع العصا لأعلى'],pull:['Pull','down','اسحب العصا لأسفل'],slide:['Slide','to the left','حرّك المنزلق لليسار']};
NH['جهاز التحكم وأفعاله']={
 say:[`${E('push')} = ادفع بعيد عنك، و ${E('pull')} = اسحب ناحيتك، و ${E('slide')} = حرّك بالانزلاق. والتعليمة:${FM('الفعل','+','الشيء','+','الاتجاه')}${E('Push the joystick up.')} وحركات الطائرة أزواج: ${E('accelerate ≠ slow down')} و ${E('ascend ≠ descend')}.`,
  `${E('push')} away, ${E('pull')} towards you, ${E('slide')}. Verb + thing + direction: ${E('Push the joystick up.')}`],
 life:[['Push the door.','ادفع الباب.'],['Pull the drawer.','اسحب الدرج.']],
 scene:{title:['عصا التحكم','The joystick'],
  ctrl:[{k:'v',label:['الحركة','Action'],opts:Object.keys(JS).map(k=>[k,k])}],
  svg:s=>{let b=bg(150)+rc(110,90,180,40,'#33424c',{rx:10});if(s.v==='slide')b+=rc(140,100,120,8,'#7d878e',{rx:4})+rc(150,94,20,20,red,{rx:4})+ar(150,80,110,80,grn,4);else{const up=s.v==='push';b+=ln(200,100,200,up?40:70,ink,8)+ci(200,up?36:66,12,red)+ar(240,up?80:50,240,up?40:90,grn,4)}return svg(150,b+man(60,128,blu,0.9))},
  ask:s=>({q:['الفعل:','The verb:'],opts:['Push','Pull','Slide'],a:JS[s.v][0]}),
  out:s=>{const j=JS[s.v];return{t:S(`k:${j[0]}|n:the ${s.v==='slide'?'slider':'joystick'}|x:${j[1]}.`),ar:j[2]+'.',why:['الفعل ← الشيء ← الاتجاه.','Verb → thing → direction.']}}},
 think:[['بعيد عني ← push. ناحيتي ← pull.','Away → push. Towards me → pull.']]};

const IT=[['Look at the LH stick.','Push','it','up.','the LH stick','انظر إلى العصا اليسرى. ادفعها لأعلى.'],['Take the nuts.','Tighten','them','.','the nuts','خذ الصواميل. اشددها.'],['Find the red button.','Press','it','.','the red button','ابحث عن الزر الأحمر. اضغطه.']];
NH['الضمير it']={
 say:[`في التعليمات ما نكرر الاسم كل مرة، نحط بداله ${E('it')}. وعشان تفهم التعليمة، ارجع للجملة اللي قبلها ودوّر على الاسم: ${E('Look at the LH stick. Push it up.')} هنا ${E('it = the LH stick')}. وللجمع ${E('them')}.`,
  `${E('it')} replaces a singular noun said before; ${E('them')} for plural.`],
 life:[['This is my phone. I use it every day.','هذا جوالي. أستعمله كل يوم.']],
 scene:{title:['على وش يرجع؟','What does it mean?'],
  ctrl:[{k:'i',label:['المثال','Example'],range:[1,3,1],init:1}],
  svg:s=>{const x=IT[s.i-1];return svg(120,bg(120)+rc(20,20,170,44,'#fff',{st:blu,rx:8})+tx(105,48,x[4],{fs:13,c:blu})+rc(230,20,150,44,'#fff',{st:red,rx:8})+tx(305,48,x[2],{fs:18,c:red})+`<path d="M300 66 Q200 110 110 66" stroke="${red}" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/>`+head(110,66,-2.5,red))},
  ask:s=>{const x=IT[s.i-1];return{q:[`${x[2]} = ؟`,`${x[2]} = ?`],opts:IT.map(y=>y[4]),a:x[4]}},
  out:s=>{const x=IT[s.i-1];return{t:S(`n:${x[0]}|k:${x[1]}|x:${x[2]}|q:${x[3]}`),say:`${x[0]} ${x[1]} ${x[2]}${x[3]==='.'?'.':' '+x[3]}`,ar:x[5],why:[`${x[2]} = ${x[4]}`,`${x[2]} = ${x[4]}`]}}},
 think:[['شفت it؟ ← ارجع للجملة اللي قبل ودوّر على الاسم.','See it? → find the noun in the sentence before.']]};

const CY={swim:['swim','السباحة',1],drive:['drive a truck','قيادة شاحنة',0],speak:['speak French','التحدث بالفرنسية',0],cook:['cook','الطبخ',1]};
NH['Can you…?']={
 say:[`تبي تعرف وش يقدر زميلك يسوي؟ قدّم ${E('can')}: ${E('Can you swim?')} والجواب قصير: ${E("Yes, I can.")} أو ${E("No, I can't.")} وترد السؤال عليه: ${E('Can you?')}`,
  `${E('Can you swim?')} — ${E("Yes, I can. / No, I can't.")} Return the question: ${E('Can you?')}`],
 life:[['Can you help me?','هل تستطيع مساعدتي؟']],
 scene:{title:['اسأل زميلك','Ask your friend'],
  ctrl:[{k:'a',label:['المهارة','Skill'],opts:Object.keys(CY).map(k=>[k,k])}],
  svg:s=>svg(140,bg(140)+grd(132)+man(90,100,blu,1)+man(310,100,grn,1)+bub(110,14,180,32,`Can you ${CY[s.a][0]}?`,{fs:13})+(CY[s.a][2]?ok(310,40):no(310,40))),
  ask:s=>({q:['الجواب:','The answer:'],opts:['Yes, I can.',"No, I can't.",'Yes, I do.'],a:CY[s.a][2]?'Yes, I can.':"No, I can't."}),
  out:s=>{const c=CY[s.a];return{t:S(`x:Can|a:you|k:${c[0]}?|q:—|x:${c[2]?'Yes, I can.':"No, I can't."}|q:Can you?`),say:`Can you ${c[0]}? ${c[2]?'Yes, I can.':"No, I can't."} Can you?`,ar:`هل تستطيع ${c[1]}؟ — ${c[2]?'نعم':'لا'}. وأنت؟`,why:['Can + you + الفعل','Can + you + verb']}}},
 think:[['أسأل عن مهارة ← Can you + الفعل؟','Asking about a skill → Can you + verb?']]};

/* =================== الوحدة 10: الرافعة و when =================== */
const FT={up:['moves up','ترتفع كلها'],tilt:['tilts up','تميل للأعلى'],rev:['reverses','ترجع للخلف'],turn:['turns round','تستدير']};
NH['أدوات التحكم والحركات']={
 say:[`في الرافعة الشوكية أدوات باليد (الذراع ${E('lever')}، والمقود ${E('steering wheel')}) وأدوات بالرجل (الدواسة ${E('pedal')}). وانتبه للفرق: ${E('moves up')} = ترتفع كلها، و ${E('tilts up')} = تميل بس. و ${E('reverses')} = ترجع للخلف.`,
  `Hand: lever, steering wheel. Foot: pedal. ${E('moves up')} (all of it) vs ${E('tilts up')} (it leans).`],
 life:[['Press the brake.','اضغط الفرامل.']],
 scene:{title:['الرافعة الشوكية','The forklift'],
  ctrl:[{k:'m',label:['الحركة','Movement'],opts:Object.keys(FT).map(k=>[k,FT[k][0]])}],
  svg:s=>{const dx=s.m==='rev'?-50:0,fy=s.m==='up'?-40:0,tl=s.m==='tilt'?-12:0,fl=s.m==='turn';let g=`<g transform="translate(${dx},0)${fl?' scale(-1,1) translate(-400,0)':''}">`+rc(150,80,100,45,'#f1b33c',{rx:6})+rc(165,50,50,32,'none',{st:ink,sw:3,rx:4})+wh(170,128,14)+wh(235,128,14)+rc(255,40,8,88,'#5f6a71',{rx:2})+`<g transform="rotate(${tl} 260 ${118+fy})">`+rc(258,110+fy,60,7,'#33424c',{rx:1})+rc(275,88+fy,40,22,'#a7744a',{rx:2})+`</g></g>`;return svg(150,bg(150)+grd(142)+g+(s.m==='rev'?ar(150,30,100,30,grn,4):''))},
  ask:s=>s.m==='up'||s.m==='tilt'?{q:['ترتفع كلها ولا تميل؟','Up or tilt?'],opts:['moves up','tilts up'],a:FT[s.m][0]}:null,
  out:s=>({t:S(`a:${s.m==='up'||s.m==='tilt'?'The load':'The truck'}|k:${FT[s.m][0]}.`),ar:`${s.m==='up'||s.m==='tilt'?'الحمولة':'الرافعة'} ${FT[s.m][1]}.`,why:['المفرد ← الفعل + s','Singular → verb + s']})},
 think:[['كلها ترتفع ← moves up. تميل ← tilts up.','All of it → moves up. It leans → tilts up.']]};

const WN={brake:['press the brake pedal','stops','عندما تضغط دواسة الفرامل، تتوقف الرافعة.'],acc:['press the accelerator','goes faster','عندما تضغط دواسة السرعة، تسرع الرافعة.'],lever:['push the lever forwards','tilts forwards','عندما تدفع الذراع للأمام، تميل الشوكة للأمام.']};
NH['التعليمة ونتيجتها بـ when']={
 say:[`دليل التشغيل يقول: سويت كذا ← يصير كذا. نربطهم بـ ${E('when')} (عندما / كلما). ولها ترتيبين:${FM('When you','+','الحركة',',','النتيجة')}${FM('النتيجة','+','when you','+','الحركة')}إذا بدأت بـ ${E('When')} حط فاصلة، وإذا بدأت بالنتيجة لا.`,
  `${E('When you press the brake pedal, the truck stops.')} / ${E('The truck stops when you press the brake pedal.')} Comma only when When comes first.`],
 life:[['When you press this button, the light comes on.','عندما تضغط هذا الزر، يشتغل الضوء.']],
 scene:{title:['الحركة ونتيجتها','Action and result'],
  ctrl:[{k:'a',label:['الحركة','Action'],opts:[['brake','brake'],['acc','accelerator'],['lever','lever']]},{k:'o',label:['الترتيب','Order'],opts:[['w',['When أولاً','When first']],['r',['النتيجة أولاً','result first']]]}],
  svg:s=>svg(130,bg(130)+rc(30,30,150,60,'#fff',{st:blu,rx:10})+tx(105,66,s.a==='lever'?'lever':s.a==='acc'?'accelerator':'brake',{fs:15,c:blu})+ar(190,60,220,60,ink,3)+rc(225,30,150,60,'#fff',{st:grn,rx:10})+tx(300,66,WN[s.a][1],{fs:15,c:grn})),
  ask:s=>({q:['نحط فاصلة؟','Comma?'],opts:['yes','no'],a:s.o==='w'?'yes':'no'}),
  out:s=>{const w=WN[s.a];return s.o==='w'?{t:S(`x:When|a:you|k:${w[0]},|a:the truck|k:${w[1]}.`),say:`When you ${w[0]}, the truck ${w[1]}.`,ar:w[2],why:['When أولاً ← فاصلة بعد الحركة.','When first → comma.']}:{t:S(`a:The truck|k:${w[1]}|x:when|a:you|k:${w[0]}.`),say:`The truck ${w[1]} when you ${w[0]}.`,ar:w[2],why:['النتيجة أولاً ← بلا فاصلة.','Result first → no comma.']}}},
 think:[['بدأت بـ When؟ ← فاصلة. بدأت بالنتيجة؟ ← بلا فاصلة.','Starting with When → comma. Result first → no comma.']]};

const DRV={fw:['Drive forwards.','قُد للأمام.'],rev:['Reverse.','ارجع للخلف.'],slow:['Slow down.','خفف السرعة.'],turn:['Turn round.','استدر.'],stop:['Stop.','توقف.']};
NH['تعليمات القيادة']={
 say:[`مدرب القيادة ما عنده وقت يقول «أنت ارجع للخلف»، يقول الفعل على طول: ${E('Reverse.')} ${E('Slow down.')} ${E('Turn round.')} التعليمة تبدأ بالفعل بدون فاعل.`,
  `Instructions start with the verb, no subject: ${E('Reverse. Slow down. Turn round.')}`],
 life:[['Turn left here.','انعطف يساراً هنا.']],
 scene:{title:['المدرب يقول','The instructor says'],
  ctrl:[{k:'c',label:['التعليمة','Instruction'],opts:Object.keys(DRV).map(k=>[k,DRV[k][0].replace('.','').toLowerCase()])}],
  svg:s=>{let b=bg(140)+grd(130);const x=s.c==='rev'?140:200;b+=A?A.lorry(x,130,120,60,blu,{}):'';const arr={fw:[260,60,330,60],rev:[200,60,130,60],slow:null,turn:null,stop:null}[s.c];if(arr)b+=ar(...arr,grn,4);if(s.c==='turn')b+=`<path d="M330 60 A30 30 0 1 1 300 30" stroke="${grn}" stroke-width="4" fill="none"/>`;if(s.c==='stop')b+=no(350,40);if(s.c==='slow')b+=tx(350,50,'▼',{fs:22,c:yel});return svg(140,b)},
  ask:()=>({q:['أول كلمة:','First word:'],opts:['the verb','You','The truck'],a:'the verb'}),
  out:s=>({t:S(`k:${DRV[s.c][0]}`),ar:DRV[s.c][1],why:['الفعل بلا فاعل.','The verb, no subject.']})},
 think:[['تعليمة ← ابدأ بالفعل.','Instruction → start with the verb.']]};

/* =================== الوحدة 11: الماء والطاقة الشمسية =================== */
const heater=(hi)=>{let b=bg(200)+`<path d="M50 170 L150 110 L150 125 L50 185Z" fill="#2b4d7a" stroke="${ink}" stroke-width="2"/>`+rc(240,30,110,60,'#d8dee2',{st:ink,rx:30});const H=k=>hi===k?red:'#5f6a71';b+=ln(150,112,250,80,H('pipes'),6)+ln(50,178,280,178,H('pipes'),6)+ln(280,178,280,88,H('pipes'),6)+ci(280,140,9,H('valve'),{st:ink})+tx(355,24,'outlet',{fs:11,c:hi==='outlet'?red:gry})+ln(340,40,370,30,H('outlet'),5)+tx(230,24,'inlet',{fs:11,c:hi==='inlet'?red:gry})+ln(255,40,230,30,H('inlet'),5);if(hi==='tank')b+=rc(240,30,110,60,'none',{st:red,sw:4,rx:30});if(hi==='panel')b+=`<path d="M50 170 L150 110 L150 125 L50 185Z" fill="none" stroke="${red}" stroke-width="4"/>`;return svg(200,b)};
const SH={panel:['the solar water panel','لوح التسخين الشمسي'],tank:['the water tank','الخزان'],pipes:['the pipes','الأنابيب'],valve:['the valve','الصمام'],inlet:['the inlet','المدخل'],outlet:['the outlet','المخرج']};
NH['أجزاء السخان الشمسي']={
 say:[`قبل ما نوصف حركة الماء، نعرف الأجزاء اللي يمر فيها: اللوح ${E('solar water panel')}، والخزان ${E('water tank')}، والأنابيب ${E('pipes')}، والصمام ${E('valve')}. و ${E('inlet ≠ outlet')} = مدخل ≠ مخرج.`,
  `The parts: panel, tank, pipes, valve; ${E('inlet ≠ outlet')}.`],
 life:[['The water tank is on the roof.','خزان الماء على السطح.']],
 scene:{title:['المس الجزء','Tap a part'],
  ctrl:[{k:'p',label:['الجزء','Part'],opts:Object.keys(SH).map(k=>[k,k])}],
  svg:s=>heater(s.p),
  ask:s=>({q:['الجزء الأحمر:','The red part:'],opts:Object.values(SH).map(x=>x[0]),a:SH[s.p][0]}),
  out:s=>({t:S(`q:This is|n:${SH[s.p][0]}.`),ar:SH[s.p][1]+'.',why:['مدخل ← inlet. مخرج ← outlet.','In → inlet. Out → outlet.']})},
 think:[['يدخل منه الماء ← inlet. يطلع منه ← outlet.','Water goes in → inlet. Out → outlet.']]};

const MP={into:['flows','into','the tank','إلى داخل'],outof:['flows','out of','the tank','إلى خارج'],through:['goes','through','the pipes','عبر'],around:['flows','around','the circuit','حول']};
NH['حروف الجر مع الحركة']={
 say:[`الماء يتحرك، فنوصف طريقه بحرف: يدخل ← ${E('into')}، يطلع ← ${E('out of')}، يمر من طرف لطرف ← ${E('through')}، يلف ← ${E('around')}. والجملة:${FM('الفاعل','+','فعل حركة','+','حرف الجر','+','المكان')}وانتبه: ${E('in')} للمكان الثابت، و ${E('into')} للحركة.`,
  `Subject + movement verb + preposition + place: ${E('The water flows into the tank.')} ${E('in')} = still; ${E('into')} = moving.`],
 life:[['Come into the room.','ادخل إلى الغرفة.']],
 scene:{title:['طريق الماء','The water path'],
  ctrl:[{k:'p',label:['الحركة','Movement'],opts:Object.keys(MP).map(k=>[k,MP[k][1]])}],
  svg:s=>{let b=bg(150);if(s.p==='into'||s.p==='outof'){b+=rc(220,40,110,80,'#d8dee2',{st:ink,rx:8})+rc(222,80,106,38,'#7fb6d9',{rx:6});b+=s.p==='into'?ar(80,80,230,80,blu,6):ar(320,80,380,80,blu,6)}if(s.p==='through')b+=rc(100,66,200,28,'#9aa3aa',{rx:14})+ar(60,80,340,80,blu,5);if(s.p==='around')b+=rc(120,40,160,80,'none',{st:ink,sw:3,rx:4})+ci(200,40,10,yel,{st:ink})+[[120,80,'v'],[280,80,'v']].map(()=>'').join('')+ar(150,120,250,120,blu,4)+ar(280,100,280,60,blu,4)+ar(250,40,150,40,blu,4)+ar(120,60,120,100,blu,4);return svg(150,b)},
  ask:s=>({q:['حرف الجر:','The preposition:'],opts:['into','out of','through','around'],a:MP[s.p][1]}),
  out:s=>{const m=MP[s.p];return{t:S(`a:The ${s.p==='around'?'electron':'water'}|k:${m[0]}|x:${m[1]}|n:${m[2]}.`),ar:'',why:[`${m[3]} ← ${m[1]}. والفعل مع المفرد فيه s.`,`${m[1]}; singular → s on the verb.`]}}},
 think:[['يدخل؟ يطلع؟ يمر؟ يلف؟ ← into / out of / through / around.','In? Out? Through? Round? → into / out of / through / around.']]};

const ELR={rise:['rises','goes up','يصعد','hot water'],sink:['sinks','goes down','ينزل','cold water'],enter:['enters','goes into','يدخل','cold water'],leave:['leaves','goes out of','يخرج','hot water']};
NH['enter · leave · rise · sink']={
 say:[`بدل كلمتين، فعل واحد بنفس المعنى: ${E('rise = go up')}، ${E('sink = go down')}، ${E('enter = go into')}، ${E('leave = go out of')}. وبعد ${E('enter')} و ${E('leave')} ما نحط حرف جر: ${E('Cold water enters the tank.')} والماء الحار أخف فيصعد، والبارد ينزل.`,
  `One verb instead of two words. No preposition after ${E('enter / leave')}: ${E('Cold water enters the tank.')}`],
 life:[['The sun rises in the east.','تشرق الشمس من الشرق.']],
 scene:{title:['الخزان','The tank'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(ELR).map(k=>[k,k])}],
  svg:s=>{let b=bg(160)+rc(130,20,140,120,'#d8dee2',{st:ink,rx:10})+rc(132,22,136,58,'#f2b8a8',{rx:8})+rc(132,80,136,58,'#a8d0ee',{rx:8});const A_={rise:[200,110,200,40,red],sink:[200,40,200,120,blu],enter:[40,110,170,110,blu],leave:[230,50,370,50,red]}[s.v];b+=ar(A_[0],A_[1],A_[2],A_[3],A_[4],5)+tx(200,155,'hot ↑   cold ↓',{fs:11,c:gry});return svg(160,b)},
  ask:s=>(s.v==='enter'||s.v==='leave')?{q:['بعده حرف جر؟','Preposition after it?'],opts:['no','into','out of'],a:'no'}:{q:['يعني:','It means:'],opts:['goes up','goes down'],a:ELR[s.v][1]},
  out:s=>{const v=ELR[s.v];const obj=s.v==='enter'||s.v==='leave'?'|n:the tank':'';return{t:S(`a:${cap(v[3])}|k:${v[0]}${obj}.`),say:`${cap(v[3])} ${v[0]}${obj?' the tank':''}.`,ar:'',why:[`${s.v} = ${v[1]} (${v[2]}).`,`${s.v} = ${v[1]}.`]}}},
 think:[['enter / leave ← بعدها المكان على طول، بلا حرف جر.','enter / leave → the place directly, no preposition.']]};

const SYM={lamp:['a lamp','gives light','المصباح يعطي ضوءاً'],battery:['a battery','stores electricity','البطارية تخزن الكهرباء'],switch:['a switch','turns the current on and off','المفتاح يشغل التيار ويوقفه'],fuse:['a fuse','protects the circuit','المصهر يحمي الدائرة']};
const symSvg=k=>{let b=bg(130)+ln(60,65,140,65,ink,3)+ln(260,65,340,65,ink,3)+ci(60,65,5,ink)+ci(340,65,5,ink);if(k==='lamp')b+=ci(200,65,26,'#fff',{st:ink,sw:3})+ln(182,47,218,83,ink,3)+ln(218,47,182,83,ink,3)+ln(140,65,174,65,ink,3)+ln(226,65,260,65,ink,3);if(k==='battery')b+=ln(140,65,190,65,ink,3)+ln(190,40,190,90,ink,4)+ln(210,52,210,78,ink,7)+ln(210,65,260,65,ink,3);if(k==='switch')b+=ln(140,65,180,65,ink,3)+ci(180,65,4,ink)+ln(180,65,222,42,ink,3)+ci(225,65,4,ink)+ln(225,65,260,65,ink,3);if(k==='fuse')b+=ln(140,65,260,65,ink,3)+rc(170,52,60,26,'none',{st:ink,sw:3,rx:2});return svg(130,b)};
NH['رموز الدائرة ونظام الطاقة الشمسية']={
 say:[`المخطط الكهربائي يرسم رموز بدل الأجهزة، وكل رمز له اسم. وبعدين نوصف شغلته بالمضارع البسيط: ${E('The battery stores electricity.')} و ${E('convert = change')}: اللوح يحوّل طاقة الشمس إلى تيار ${E('DC')} (في اتجاه واحد).`,
  `Each symbol has a name; describe its job in present simple: ${E('The battery stores electricity.')}`],
 life:[['The switch turns the light on.','المفتاح يشغّل الضوء.']],
 scene:{title:['الرمز ووظيفته','The symbol and its job'],
  ctrl:[{k:'y',label:['الرمز','Symbol'],opts:Object.keys(SYM).map(k=>[k,k])}],
  svg:s=>symSvg(s.y),
  ask:s=>({q:['وش هذا الرمز؟','What is this symbol?'],opts:Object.keys(SYM),a:s.y}),
  out:s=>{const y=SYM[s.y];return{t:S(`a:The ${s.y}|k:${y[1]}.`),ar:y[2]+'.',why:['الجزء + الفعل مع s','Part + verb with s']}}},
 think:[['أعرف الرمز ← أقول اسمه ← أوصف وظيفته.','Know the symbol → its name → its job.']]};

const IF=[[1,0,0,"If the Sun shines,","the current flows from the panel.",'إذا أشرقت الشمس، يتدفق التيار من اللوح.'],[0,0,0,"If the Sun doesn't shine,","the current flows from the battery.",'إذا لم تشرق الشمس، يتدفق التيار من البطارية.'],[1,1,0,"If the battery is full,","the current doesn't flow into the battery.",'إذا امتلأت البطارية، لا يتدفق التيار إليها.'],[1,0,1,"If the lamps aren't on,","the current flows into the battery.",'إذا لم تكن المصابيح مضاءة، يتدفق التيار إلى البطارية.']];
NH['If للنتيجة الدائمة']={
 say:[`في الأنظمة الآلية: كل مرة يصير الشرط ← تصير نفس النتيجة. والفعلين في المضارع البسيط:${FM('If','+','الشرط',',','النتيجة')}${E('If the Sun shines, the current flows from the panel.')} وإذا بدأت بالنتيجة، لا تحط فاصلة.`,
  `Same result every time → both verbs in present simple: ${E('If the Sun shines, the current flows from the panel.')}`],
 life:[['If you heat ice, it melts.','إذا سخّنت الثلج، يذوب.']],
 scene:{title:['النظام الشمسي','The solar system'],
  ctrl:[{k:'i',label:['الحالة','Case'],range:[1,4,1],init:1}],
  svg:s=>{const c=IF[s.i-1];let b=bg(160)+rc(30,90,80,40,'#2b4d7a',{rx:2,st:ink})+rc(170,90,60,46,c[1]?grn:'#7d878e',{rx:4})+ci(320,100,18,c[2]?'#ddd':yel,{st:ink});if(c[0])b+=ci(70,40,18,yel);else b+=`<ellipse cx="70" cy="40" rx="34" ry="16" fill="#9aa3aa"/>`;const from=c[0]?110:230,to=c[0]&&!c[1]&&c[2]?170:302;b+=ar(c[0]?110:230,110,c[0]&&c[2]&&!c[1]?168:300,110,red,4);return svg(160,b+tx(70,150,'panel',{fs:11,c:gry})+tx(200,150,'battery',{fs:11,c:gry})+tx(320,150,'lamps',{fs:11,c:gry}))},
  ask:s=>({q:['الفعل في النتيجة:','The result verb:'],opts:['flows','will flow','flowed'],a:'flows'}),
  out:s=>{const c=IF[s.i-1];return{t:S(`x:${c[3]}|n:${c[4]}`),ar:c[5],why:['نتيجة دائمة ← المضارع البسيط في الجزأين.','Always true → present simple in both parts.']}}},
 think:[['تصير النتيجة كل مرة؟ ← If + مضارع بسيط، ونتيجة بمضارع بسيط.','Every time? → If + present simple, result in present simple.']]};

/* =================== الوحدة 12: الحرارة والتبريد =================== */
NH['درجات الحرارة']={
 say:[`${E('°C')} نقرؤها ${E('degrees Celsius')}، و ${E('°F')} ${E('degrees Fahrenheit')}. وتحت الصفر نقول ${E('minus')}: ${E('−18°C = minus eighteen degrees Celsius')}. والتحويل من الكتاب: ${E('°F = °C × 9 / 5 + 32')}.`,
  `${E('°C')} = degrees Celsius; below zero → ${E('minus')}. ${E('°F = °C × 9 / 5 + 32')}.`],
 life:[['It is forty-five degrees today.','درجة الحرارة اليوم خمس وأربعون.']],
 scene:{title:['الترمومتر','The thermometer'],
  ctrl:[{k:'c',label:['°C','°C'],opts:[-18,0,20,37,45,100].map(v=>[v,v+' °C'])}],
  svg:s=>{const f=Math.round(s.c*9/5+32);const h=(s.c+20)/120*110;let b=bg(160)+rc(185,15,30,120,'#fff',{st:ink,rx:15})+ci(200,140,18,red,{st:ink})+rc(193,130-h,14,h+6,red,{rx:6})+tx(120,70,`${s.c}°C`,{fs:20,c:blu})+tx(290,70,`${f}°F`,{fs:20,c:'#b05a7a'});return svg(160,b)},
  ask:s=>s.c<0?{q:['تحت الصفر نقول:','Below zero:'],opts:['minus','under','less'],a:'minus'}:null,
  out:s=>{const f=Math.round(s.c*9/5+32);const w=n=>(n<0?'minus ':'')+Math.abs(n);return{t:S(`k:${w(s.c)} degrees Celsius|q:=|k:${w(f)} degrees Fahrenheit`),ar:`${s.c} درجة مئوية = ${f} فهرنهايت (مقربة)`,why:['°F = °C × 9 / 5 + 32','°F = °C × 9 / 5 + 32']}}},
 think:[['تحت الصفر ← minus. ° ← degrees.','Below zero → minus. ° → degrees.']]};

const CL=[['The hot water','passes through','the thermostat.','يمر الماء الحار عبر منظم الحرارة.'],['It','flows through','the top hose.','يتدفق عبر الخرطوم العلوي. (it = الماء)'],['It','enters','the radiator.','يدخل المبرّد.'],['The cool water','leaves','the radiator.','يخرج الماء البارد من المبرّد.']];
NH['دورة الماء في التبريد']={
 say:[`نوصف الدورة خطوة خطوة بالمضارع البسيط وحروف الحركة:${FM('الفاعل','+','الفعل','+','حرف الجر','+','المكان')}وعشان ما نكرر «الماء» كل مرة، نقول ${E('it')}: ${E('It flows through the top hose.')}`,
  `Step by step in present simple; ${E('it')} replaces the water.`],
 life:[['The air passes through the filter.','يمر الهواء عبر المرشّح.']],
 scene:{title:['دورة التبريد','The cooling cycle'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,4,1],init:1}],
  svg:s=>{let b=bg(160)+rc(40,50,100,70,'#7d878e',{rx:8})+tx(90,90,'engine',{fs:12,c:'#fff'})+rc(270,30,90,110,'#c9d1d6',{st:ink,rx:4})+[50,70,90,110].map(y=>ln(275,y,355,y,'#9aa3aa',2)).join('')+tx(315,152,'radiator',{fs:11,c:gry})+ci(160,50,10,'#5f6a71')+ln(170,40,270,40,s.i>=2?red:'#9aa3aa',8)+ln(140,120,270,120,s.i>=4?blu:'#9aa3aa',8);const P=[[160,50],[220,40],[300,60],[220,120]][s.i-1];b+=ci(P[0],P[1],12,s.i===4?blu:red,{st:'#fff',sw:3});return svg(160,b)},
  ask:s=>s.i===2?{q:['it = ؟','it = ?'],opts:['the water','the hose','the engine'],a:'the water'}:null,
  out:s=>{const c=CL[s.i-1];return{t:S(`a:${c[0]}|k:${c[1]}|n:${c[2]}`),ar:c[3],why:['مضارع بسيط، و it بدل الاسم.','Present simple; it replaces the noun.']}}},
 think:[['شفت it؟ ← ارجع للخطوة اللي قبلها.','See it? → look at the step before.']]};

/* =================== الوحدة 13: الجدول =================== */
const WD={sun:['Sunday','الأحد'],mon:['Monday','الاثنين'],tue:['Tuesday','الثلاثاء']};
NH['الجدول الأسبوعي']={
 say:[`جدولك يتكرر كل أسبوع، فنستعمل المضارع البسيط. وفيه طريقتين بنفس المعنى: ${E('every Sunday = on Sundays')}. انتبه: مع ${E('every')} مفرد، ومع ${E('on')} جمع: ${E('every Monday morning = on Monday mornings')}.`,
  `${E('every Sunday = on Sundays')}: singular after every, plural after on.`],
 life:[['I visit my family every Friday.','أزور أهلي كل جمعة.']],
 scene:{title:['كل أسبوع','Every week'],
  ctrl:[{k:'d',label:['اليوم','Day'],opts:Object.keys(WD).map(k=>[k,WD[k][0]])},{k:'w',label:['الكلمة','Word'],opts:[['every','every'],['on','on']]}],
  svg:s=>{let b=bg(120);for(let w=0;w<3;w++)b+=rc(60+w*100,30,80,60,'#fff',{st:ink,rx:8})+tx(100+w*100,56,WD[s.d][0].slice(0,3),{fs:14,c:red})+tx(100+w*100,78,'lectures',{fs:11,c:gry});return svg(120,b)},
  ask:s=>({q:['اليوم بعد '+s.w+':','The day after '+s.w+':'],opts:[WD[s.d][0],WD[s.d][0]+'s'],a:s.w==='every'?WD[s.d][0]:WD[s.d][0]+'s'}),
  out:s=>{const d=WD[s.d][0];return{t:S(`a:I|k:attend|n:lectures|x:${s.w}|q:${s.w==='every'?d:d+R('s')}.`),say:`I attend lectures ${s.w} ${s.w==='every'?d:d+'s'}.`,ar:`أحضر المحاضرات كل ${WD[s.d][1]}.`,why:s.w==='every'?['every + مفرد.','every + singular.']:['on + جمع.','on + plural.']}}},
 think:[['every ← مفرد. on ← جمع.','every → singular. on → plural.']]};

/* =================== الوحدة 14: المواد =================== */
const MT={strike:['Strike','break','اضرب','تنكسر'],bend:['Bend','bend','اثنِ','تنثني'],heat:['Heat','melt','سخّن','تذوب'],stretch:['Stretch','stretch','اسحب (مدّ)','تتمدد']};
NH['أفعال اختبار المواد']={
 say:[`عشان نختبر مادة، نسوي فيها شي ونشوف وش يصير. أفعال اللي نسويه: ${E('strike · stretch · bend · compress · drop · cut · heat · scratch')}. واللي ممكن يصير لها: تنكسر ${E('break')}، تذوب ${E('melt')}، تنثني ${E('bend')}.`,
  `What we do: strike, stretch, bend … What can happen: break, melt, bend.`],
 life:[["Don't drop the glass. It breaks.",'لا تُسقط الكأس، فهو ينكسر.']],
 scene:{title:['اختبر القطعة','Test the bar'],
  ctrl:[{k:'v',label:['الاختبار','Test'],opts:Object.keys(MT).map(k=>[k,k])}],
  svg:s=>{let b=bg(150)+grd(140);if(s.v==='strike')b+=rc(110,96,80,14,'#c9d1d6',{rx:2})+rc(210,96,80,14,'#c9d1d6',{rx:2})+`<g transform="rotate(-30 200 50)">${TOOL.hammer(200,40,0.8)}</g>`;if(s.v==='bend')b+=`<path d="M110 70 Q200 130 290 70" stroke="#c9d1d6" stroke-width="14" fill="none"/>`;if(s.v==='heat')b+=`<path d="M130 100 H270 Q260 112 240 110 H130Z" fill="#c9d1d6"/>`+[160,200,240].map(x=>`<path d="M${x} 136 q-10 -16 0 -26 q10 10 0 26" fill="${red}"/>`).join('');if(s.v==='stretch')b+=rc(110,92,180,12,'#c9d1d6',{rx:6})+ar(110,98,70,98,grn,4)+ar(290,98,330,98,grn,4);return svg(150,b)},
  ask:s=>({q:['وش يصير لها؟','What happens?'],opts:['break','bend','melt','stretch'],a:MT[s.v][1]}),
  out:s=>{const m=MT[s.v];return{t:S(`k:${m[0]}|n:the bar.|q:It|k:${m[1]}s.`),say:`${m[0]} the bar. It ${m[1]}s.`,ar:`${m[2]} القطعة. ${m[3]}.`,why:['ما نسويه بالأمر، وما يصير بالمضارع البسيط.','What we do → instruction; what happens → present simple.']}}},
 think:[['وش أسوي بالمادة؟ ووش يصير لها؟','What do I do? What happens to it?']]};

const PC={pull:['pull','pulling',"I'm",'أسحب'],strike:['strike','striking',"I'm",'أضرب'],drop:['drop','dropping',"I'm",'أُسقط'],cut:['cut','cutting',"I'm",'أقطع'],stretch:['stretch','stretching',"I'm",'أمدّ']};
NH['المضارع المستمر']={
 say:[`اللي يصير قدامك الحين ونحن نتكلم ← المضارع المستمر. جزأين:${FM('am / is / are','+','الفعل','+','ing')}${E("I'm pulling the rope.")} والنفي ${E('not')} بعد ${E('be')}، والسؤال نقدّم ${E('be')}: ${E('Is the rope breaking?')}`,
  `Happening now: ${E('am / is / are')} + verb + ${E('ing')}: ${E("I'm pulling the rope.")}`],
 life:[["I'm studying now.",'أنا أذاكر الآن.'],['Is it raining?','هل تمطر الآن؟']],
 scene:{title:['الحين','Right now'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(PC).map(k=>[k,k])}],
  svg:s=>svg(140,bg(140)+grd(132)+man(110,100,blu,1)+rc(122,98,230,8,'#c9a26a',{rx:4})+tx(330,40,'NOW',{fs:16,c:red})+ci(300,36,6,red)),
  ask:s=>({q:['إملاء ing:','Spelling:'],opts:[PC[s.v][1],s.v+'ing',s.v.replace(/e$/,'')+'ing',s.v+s.v.slice(-1)+'ing'].filter((v,i,a)=>a.indexOf(v)===i),a:PC[s.v][1]}),
  out:s=>{const p=PC[s.v];const sp=s.v==='strike'?['آخره e ← نحذفها.','Ends in e → drop it.']:(s.v==='drop'||s.v==='cut')?['قصير: ساكن بعد متحرك ← نضاعف آخره.','Short, consonant after vowel → double it.']:['نضيف ing.','Add ing.'];return{t:S(`a:I|x:'m|k:${p[1]}|n:the rope.`),say:`I'm ${p[1]} the rope.`,ar:`أنا ${p[3]} الحبل الآن.`,why:sp}}},
 think:[['يصير الحين؟ ← am / is / are + ing.','Happening now? → am / is / are + ing.']]};

NH['البسيط أم المستمر؟']={
 say:[`عندنا الحين زمنين للمضارع: البسيط للعادة والحقيقة ← ${E('The machine tests materials.')} والمستمر لللي يصير الحين ← ${E('The machine is testing the rope now.')} والكلمات تدلّك: ${E('every day · always')} ← بسيط، و ${E('now · at the moment')} ← مستمر.`,
  `Habit or fact → present simple. Happening now → present continuous.`],
 life:[['I usually walk to work, but today I am driving.','عادة أمشي إلى العمل، لكني اليوم أقود السيارة.']],
 scene:{title:['عادة ولا الحين؟','Usually or now?'],
  ctrl:[{k:'t',label:['الكلمة','Time word'],opts:[['always','always'],['every','every day'],['now','now'],['moment','at the moment']]}],
  svg:s=>{const now=s.t==='now'||s.t==='moment';let b=bg(120);for(let i=0;i<5;i++)b+=ci(80+i*60,60,14,now?(i===4?red:'#d8dee2'):blu);b+=tx(200,105,now?'now':'again and again',{fs:13,c:now?red:blu});return svg(120,b)},
  ask:s=>({q:['أي زمن؟','Which tense?'],opts:['present simple','present continuous'],a:(s.t==='now'||s.t==='moment')?'present continuous':'present simple'}),
  out:s=>{const now=s.t==='now'||s.t==='moment';const w={always:'always',every:'every day',now:'now',moment:'at the moment'}[s.t];return now?{t:S(`a:The machine|x:is|k:testing|n:the rope|q:${w}.`),ar:'الآلة تختبر الحبل الآن.',why:['الحين ← مستمر.','Now → continuous.']}:{t:s.t==='always'?S('a:The machine|q:always|k:tests|n:materials.'):S('a:The machine|k:tests|n:materials|q:every day.'),ar:'الآلة تختبر المواد دائماً.',why:['عادة ← بسيط.','Habit → simple.']}}},
 think:[['عادة / حقيقة ← بسيط. الحين ← مستمر.','Habit / fact → simple. Now → continuous.']]};

const MO={helmet:['this helmet','polycarbonate',1,'البولي كربونات'],ropes:['those ropes','nylon',0,'النايلون'],frame:['this frame','aluminium',1,'الألمنيوم'],bolts:['these bolts','steel',0,'الفولاذ']};
NH["المواد و What's it made of?"]={
 say:[`تبي تعرف القطعة من وش مصنوعة؟ ${E("What's it made of?")} — ${E("It's made of steel.")} وللجمع: ${E("What are they made of?")} — ${E("They're made of nylon.")} واسم المادة بدون ${E('a')}: ${E('made of steel')}.`,
  `${E("What's it made of? — It's made of steel.")} Plural: ${E("They're made of …")} No a before the material.`],
 life:[["What's this table made of? — It's made of wood.",'من أي شيء صُنعت هذه الطاولة؟ — من الخشب.']],
 scene:{title:['من وش مصنوع؟','What is it made of?'],
  ctrl:[{k:'o',label:['القطعة','Object'],opts:Object.keys(MO).map(k=>[k,k])}],
  svg:s=>{let b=bg(140);if(s.o==='helmet')b+=`<path d="M140 110 Q140 40 200 40 Q260 40 260 110Z" fill="${yel}" stroke="${ink}" stroke-width="2"/>`+rc(130,106,140,10,ink,{rx:4});if(s.o==='ropes')b+=[160,200,240].map(x=>`<path d="M${x} 20 Q${x+20} 70 ${x} 120" stroke="#3a7d44" stroke-width="7" fill="none"/>`).join('');if(s.o==='frame')b+=rc(130,30,140,90,'none',{st:'#9aa3aa',sw:10,rx:4});if(s.o==='bolts')b+=[160,200,240].map(x=>rc(x-12,30,24,12,'#7d878e',{rx:2})+rc(x-5,42,10,70,'#9aa3aa',{rx:1})).join('');return svg(140,b)},
  ask:s=>({q:["What's ولا What are؟","What's or What are?"],opts:["What's","What are"],a:MO[s.o][2]?"What's":'What are'}),
  out:s=>{const m=MO[s.o];return m[2]?{t:S(`x:What's|n:${m[0]}|k:made of?|q:—|x:It's|k:made of|n:${m[1]}.`),ar:`من أي شيء صُنعت؟ — من ${m[3]}.`,why:["مفرد ← What's … / It's made of …","Singular → It's made of …"]}:{t:S(`x:What are|n:${m[0]}|k:made of?|q:—|x:They're|k:made of|n:${m[1]}.`),ar:`من أي شيء صُنعت؟ — من ${m[3]}.`,why:["جمع ← What are … / They're made of …","Plural → They're made of …"]}}},
 think:[["واحد ← It's made of. أكثر ← They're made of. والمادة بلا a.","One → It's made of. More → They're made of. No a."]]};

const PRP={tough:['tough','brittle',"It doesn't break if you strike it.",'قوية لا تنكسر','هشة'],hard:['hard','soft',"You can't scratch it.",'صلبة','لينة'],rigid:['rigid','flexible',"It doesn't bend.",'جاسئة','مرنة'],light:['light','heavy','It weighs very little.','خفيفة','ثقيلة']};
NH['خصائص المواد وأضدادها']={
 say:[`نختار المادة حسب صفاتها، والصفات نحفظها أزواج: ${E('tough ≠ brittle')}، ${E('hard ≠ soft')}، ${E('rigid ≠ flexible')}، ${E('light ≠ heavy')}. ونشرح الصفة بجملة: ${E("It's tough. It doesn't break if you strike it.")}`,
  `Learn properties in pairs and explain them: ${E("It's tough. It doesn't break if you strike it.")}`],
 life:[['This phone is light.','هذا الجوال خفيف.']],
 scene:{title:['الصفة وضدها','The property and its opposite'],
  ctrl:[{k:'p',label:['الزوج','Pair'],opts:Object.keys(PRP).map(k=>[k,k+' / '+PRP[k][1]])},{k:'w',label:['أيهما','Which'],opts:[['a',['الصفة','property']],['b',['الضد','opposite']]]}],
  svg:s=>{const B=s.w==='b';let b=bg(140)+grd(130);if(s.p==='tough')b+=B?rc(110,100,70,14,'#c9d1d6',{rx:2})+rc(220,104,70,14,'#c9d1d6',{rx:2}):rc(110,100,180,14,'#5f6a71',{rx:2});if(s.p==='hard')b+=rc(130,80,140,40,B?'#f3d9a6':'#7d878e',{rx:B?20:4});if(s.p==='rigid')b+=B?`<path d="M110 100 Q200 50 290 100" stroke="${grn}" stroke-width="12" fill="none"/>`:rc(110,94,180,12,'#5f6a71',{rx:2});if(s.p==='light')b+=ln(110,70,290,B?90:50,ink,4)+ci(200,72-0,6,ink)+rc(100,B?92:52,30,26,B?'#5f6a71':'#f3d9a6',{rx:3});return svg(140,b)},
  ask:s=>({q:['الصفة:','The property:'],opts:[PRP[s.p][0],PRP[s.p][1]],a:s.w==='a'?PRP[s.p][0]:PRP[s.p][1]}),
  out:s=>{const p=PRP[s.p];return s.w==='a'?{t:S(`q:It's|x:${p[0]}.|n:${p[2]}`),ar:`المادة ${p[3]}.`,why:[`${p[0]} ≠ ${p[1]}`,`${p[0]} ≠ ${p[1]}`]}:{t:S(`q:It's|x:${p[1]}.`),ar:`المادة ${p[4]}.`,why:[`${p[1]} ≠ ${p[0]}`,`${p[1]} ≠ ${p[0]}`]}}},
 think:[['أحفظ الصفة مع ضدها، وأشرحها بجملة.','Learn each property with its opposite, and explain it.']]};

/* =================== الوحدة 15: الهاتف =================== */
const WEB=[['www.tech-tools.com/parts','w w w dot tech dash tools dot com forward slash parts'],['j_scott@tvtc.sa','j underscore scott at t v t c dot s a'],['0566 123','oh double six, one two three']];
NH['نطق البريد والموقع']={
 say:[`البريد والموقع فيهم رموز، وكل رمز له كلمة: ${E('@ = at')}، ${E('. = dot')}، ${E('_ = underscore')}، ${E('- = dash')}، ${E('/ = forward slash')}. والرقمين المتشابهين ${E('double')}: ${E('66 = double six')}.`,
  `@ at · . dot · _ underscore · - dash · / forward slash · 66 double six.`],
 life:[['Visit our website: www dot …','زر موقعنا: …']],
 scene:{title:['اقرأها بصوت','Read it aloud'],
  ctrl:[{k:'i',label:['النص','Text'],opts:[[0,'website'],[1,'email'],[2,'number']]}],
  svg:s=>svg(110,bg(110)+rc(20,26,360,52,'#fff',{st:ink,rx:10})+tx(200,60,WEB[s.i][0],{fs:18,c:blu})),
  ask:s=>s.i===0?{q:['/ نقرؤها:','/ is read:'],opts:['forward slash','dot','dash'],a:'forward slash'}:s.i===1?{q:['_ نقرؤها:','_ is read:'],opts:['underscore','dash','dot'],a:'underscore'}:{q:['66 نقرؤها:','66 is read:'],opts:['double six','sixty-six','six six six'],a:'double six'},
  out:s=>({t:S(`k:${WEB[s.i][1]}`),ar:'',why:['كل رمز له كلمة.','Each symbol has a word.']})},
 think:[['@ at · . dot · _ underscore · - dash · / forward slash','@ at · . dot · _ underscore · - dash · / forward slash']]};

const CK={teen:['Is that seventeen or seventy?','Seventeen. One seven.','هل هو سبعة عشر أم سبعون؟ — سبعة عشر: واحد سبعة.'],rep:['Could you repeat that, please?','Sure. Six, four, two.','هل تستطيع الإعادة لو سمحت؟ — طبعاً.'],spell:['Could you spell that, please?','K-E-V-I-N.','هل تستطيع تهجئته لو سمحت؟']};
NH['التأكد في المكالمة']={
 say:[`في التلفون سهل تغلط في السمع، خصوصاً ${E('-teen')} و ${E('-ty')}. فتأكد: ${E('Is that sixteen or sixty?')} والنبرة تفرّق: ${E('sevenTEEN')} النبرة في الآخر، و ${E('SEVenty')} في الأول. وللتوضيح قل الرقمين: ${E('seventeen, one seven')}.`,
  `Check: ${E('Is that sixteen or sixty?')} Stress: ${E('sevenTEEN')} vs ${E('SEVenty')}; say the digits: ${E('one seven')}.`],
 life:[['Could you repeat that, please?','هل تستطيع أن تعيد ذلك لو سمحت؟']],
 scene:{title:['تأكد من الرقم','Check the number'],
  ctrl:[{k:'c',label:['العبارة','Phrase'],opts:[['teen','17 or 70?'],['rep','repeat'],['spell','spell']]}],
  svg:s=>svg(130,bg(130)+man(70,110,blu,1)+rc(46,46,16,10,ink,{rx:3})+man(330,110,grn,1)+rc(338,46,16,10,ink,{rx:3})+(s.c==='teen'?tx(200,60,'17 ?  70',{fs:24,c:red})+tx(200,96,'sevenTEEN · SEVenty',{fs:13,c:gry}):bub(110,30,180,36,'… ? …',{fs:14}))),
  ask:s=>s.c==='teen'?{q:['النبرة في seventeen:','Stress in seventeen:'],opts:['at the end','at the start'],a:'at the end'}:null,
  out:s=>{const c=CK[s.c];return{t:S(`x:${c[0]}|q:—|n:${c[1]}`),ar:c[2],why:s.c==='teen'?['-teen في الآخر، -ty في الأول.','-teen at the end, -ty at the start.']:['اطلب بأدب: Could you …, please?','Ask politely: Could you …, please?']}}},
 think:[['ما سمعت زين؟ ← Could you repeat that, please?','Not sure? → Could you repeat that, please?']]};
})(window);

/* نهج الشرح لانجل-111 (dev-kit/guides/TEACHING_APPROACH.md) — مربع «الفكرة» لكل جزء من «شرح القاعدة».
   المفتاح = عنوان الجزء. الأمثلة والمشاهد من إعدادنا (إضافة من خارج الكتاب). يعتمد على nhk.js */
(function(G){const NH=G.NH=G.NH||{};const K=G.NHK;
const {svg,tx,rc,ci,ln,ar,ar2,man,wh,grd,ok,no,bub,S,R,cap,E,head}=K;const FM=(...p)=>G.ENK.fm(...p);
const {ink,grn,red,blu,yel,gry}=K.C;
const bg=(h,c='#eaf3f9')=>`<rect width="400" height="${h}" fill="${c}"/>`;
const phone=(x,y)=>rc(x-6,y-4,14,10,ink,{rx:3});
const desk=()=>rc(60,100,280,14,'#a7744a',{rx:3})+rc(80,114,10,36,'#8a5d36')+rc(310,114,10,36,'#8a5d36');
const clock=(x,y,r,h,m)=>{const ah=((h%12)+m/60)/12*2*Math.PI-Math.PI/2,am=m/60*2*Math.PI-Math.PI/2;let b=ci(x,y,r,'#fff',{st:ink,sw:3});for(let i=0;i<12;i++){const a=i/12*2*Math.PI;b+=ln(x+(r-6)*Math.cos(a),y+(r-6)*Math.sin(a),x+(r-2)*Math.cos(a),y+(r-2)*Math.sin(a),ink,2)}return b+ln(x,y,x+r*0.5*Math.cos(ah),y+r*0.5*Math.sin(ah),ink,5)+ln(x,y,x+r*0.8*Math.cos(am),y+r*0.8*Math.sin(am),blu,3)+ci(x,y,4,ink)};

/* ===== الوحدة 1 ===== */
const BE={I:['I','am',"I'm",'new here','أنا جديد هنا.'],he:['He','is',"He's",'in Sales','هو في قسم المبيعات.'],she:['She','is',"She's",'an engineer','هي مهندسة.'],you:['You','are',"You're",'early','أنت مبكر.'],we:['We','are',"We're",'from Delta Electric','نحن من شركة دلتا إلكتريك.'],they:['They','are',"They're",'my colleagues','هم زملائي.']};
NH['الفعل be مع الضمائر']={
 say:[`بالعربي نقول «أنا جديد هنا» بدون فعل. الإنجليزي لازم يحط في النص ${E('be')}: ${E("I'm new here.")} وله ثلاث صور: ${E('am')} مع ${E('I')} بس، و ${E('is')} مع ${E('he / she / it')}، و ${E('are')} مع ${E('you / we / they')}.`,
  `English needs ${E('be')}: ${E("I'm new here.")} am with I; is with he / she / it; are with you / we / they.`],
 life:[["I'm from Riyadh.",'أنا من الرياض.'],["Are you new here? — Yes, I am.",'هل أنت جديد هنا؟ — نعم.']],
 scene:{title:['اختر الضمير','Choose the pronoun'],
  ctrl:[{k:'p',label:['الضمير','Pronoun'],opts:Object.keys(BE).map(k=>[k,BE[k][0]])},{k:'f',label:['الشكل','Form'],opts:[['p',['مثبتة','positive']],['n',['نفي','negative']],['q',['سؤال','question']]]}],
  svg:s=>{let b=bg(140)+grd(130);const n={I:1,he:1,she:1,you:1,we:2,they:3}[s.p];for(let i=0;i<n;i++)b+=man(200-(n-1)*40+i*80,100,s.p==='she'?'#b05a7a':blu,1);return svg(140,b)},
  ask:s=>({q:['am / is / are؟','am / is / are?'],opts:['am','is','are'],a:BE[s.p][1]}),
  out:s=>{const b=BE[s.p];if(s.f==='p')return{t:S(`a:${b[0]}|x:${b[1]}|n:${b[3]}.`),ar:b[4],why:[`${b[0]} ← ${b[1]}`,`${b[0]} → ${b[1]}`]};if(s.f==='n')return{t:S(`a:${b[0]}|x:${b[1]} not|n:${b[3]}.`),ar:'',why:['النفي: not بعد be','Negative: not after be']};return{t:S(`x:${cap(b[1])}|a:${b[0]==='I'?'you':b[0].toLowerCase()}|n:${b[3]}?`),say:`${cap(b[1])} ${b[0]==='I'?'you':b[0].toLowerCase()} ${b[3]}?`,ar:'',why:['السؤال: نقدّم be','Question: be comes first']}}},
 think:[['I ← am. he / she / it ← is. you / we / they ← are.','I → am. he / she / it → is. you / we / they → are.']]};

const IN={name:["My name's Steve Owens.",'اسمي ستيف أوينز.','الاسم'],dept:["I'm in the Sales Department.",'أنا في قسم المبيعات.','القسم ← in'],co:['I work for Delta Electric.','أعمل لدى شركة دلتا إلكتريك.','الشركة ← for'],from:["I'm from Bath in England.",'أنا من باث في إنجلترا.','البلد ← from']};
NH['تقديم نفسك والرد على التحية']={
 say:[`أول لقاء: اسمك، ثم معلومة أو اثنتين. ولكل معلومة حرف ثابت: القسم ← ${E('in')}، والشركة ← ${E('for')}، والبلد ← ${E('from')}. وفي الرد: اللي يبدأ يقول ${E('Nice to meet you.')}، واللي يرد يزيد ${E('too')}.`,
  `Department → ${E('in')}; company → ${E('for')}; country → ${E('from')}. The reply adds ${E('too')}.`],
 life:[['I work for a bank.','أعمل في بنك.'],['Nice to meet you, too.','سعيد بلقائك أيضاً.']],
 scene:{title:['عرّف بنفسك','Introduce yourself'],
  ctrl:[{k:'i',label:['المعلومة','Information'],opts:Object.keys(IN).map(k=>[k,k])},{k:'r',label:['أنت','You'],opts:[['1',['تبدأ','first']],['2',['ترد','reply']]]}],
  svg:s=>svg(140,bg(140)+grd(130)+man(110,100,blu,1.05)+man(290,100,grn,1.05)+bub(s.r==='1'?40:200,10,170,30,s.r==='1'?'Nice to meet you.':'Nice to meet you, too.',{fs:12})),
  ask:s=>s.i==='name'?{q:['اللي يرد يقول:','The reply:'],opts:['Nice to meet you, too.','Nice to meet you.'],a:s.r==='1'?'Nice to meet you.':'Nice to meet you, too.'}:{q:['الحرف:','The preposition:'],opts:['in','for','from'],a:{dept:'in',co:'for',from:'from'}[s.i]},
  out:s=>{const v=IN[s.i];return{t:S(`n:${v[0]}|x:${s.r==='1'?'Nice to meet you.':'Nice to meet you, too.'}`),ar:v[1],why:[v[2],v[2]]}}},
 think:[['القسم ← in. الشركة ← for. البلد ← from.','Department → in. Company → for. Country → from.']]};

const TT={Mr:['Mr','Steve','Owens','للرجل'],Ms:['Ms','Laura','Scott','للمرأة'],Dr:['Dr','Ali','Hassan','للدكتور']};
NH['الاسم واللقب']={
 say:[`الزميل يناديك باسمك الأول ${E('Steve')}، والزائر يحطّ اللقب مع اسم العائلة: ${E('Mr Owens')}. واللقب ما يجي مع الاسم الأول أبداً: ما نقول ${E('Mr Steve')} في الرسمي.`,
  `Colleagues: first name. Visitors: title + last name: ${E('Mr Owens')}.`],
 life:[['Good morning, Dr Hassan.','صباح الخير يا دكتور حسن.']],
 scene:{title:['زميل أو زائر؟','Colleague or visitor?'],
  ctrl:[{k:'t',label:['اللقب','Title'],opts:Object.keys(TT).map(k=>[k,k])},{k:'w',label:['من يناديه','Who calls him'],opts:[['c',['زميل','colleague']],['v',['زائر','visitor']]]}],
  svg:s=>{const t=TT[s.t];return svg(140,bg(140)+rc(110,20,180,80,'#fff',{st:ink,rx:8})+rc(110,20,180,24,blu,{rx:6})+tx(200,38,'NAME CARD',{fs:11,c:'#fff'})+tx(200,66,`${t[0]} ${t[1]} ${t[2]}`,{fs:16})+tx(150,90,'first',{fs:10,c:grn})+tx(250,90,'last',{fs:10,c:red}))},
  ask:s=>{const t=TT[s.t];return{q:['يناديه:','He says:'],opts:[t[1],`${t[0]} ${t[2]}`,`${t[0]} ${t[1]}`],a:s.w==='c'?t[1]:`${t[0]} ${t[2]}`}},
  out:s=>{const t=TT[s.t];return s.w==='c'?{t:S(`q:Hi,|a:${t[1]}.`),ar:'',why:['الزميل ← الاسم الأول.','Colleague → first name.']}:{t:S(`q:Good morning,|x:${t[0]}|n:${t[2]}.`),ar:'',why:['الزائر ← اللقب مع اسم العائلة.','Visitor → title + last name.']}}},
 think:[['اللقب يجي مع اسم العائلة، مو الأول.','A title goes with the last name.']]};

/* ===== الوحدة 2 ===== */
const PS={I:['I','live','live','do'],you:['You','work','work','do'],he:['Mark','works','work','does'],she:['She','lives','live','does'],they:['They','work','work','do']};
const PO={I:'in London',you:'for Delta',he:'in Sales',she:'in Bristol',they:'in Finance'};
NH['المضارع البسيط: أين تسكن؟ أين تعمل؟']={
 say:[`السكن والشغل أشياء ثابتة، فنستعمل المضارع البسيط. والقاعدة كلها في ${E('he / she / it')}: نزيد ${E('s')}: ${E('She works for Delta.')} وفي السؤال والنفي تنتقل ${E('s')} إلى ${E("does / doesn't")}، ويرجع الفعل بلا ${E('s')}.`,
  `he / she / it → add s. Questions and negatives: ${E("does / doesn't")} + verb without s.`],
 life:[['Where do you live?','أين تسكن؟'],["My brother doesn't work here.",'أخي لا يعمل هنا.']],
 scene:{title:['وين تروح s؟','Where does the s go?'],
  ctrl:[{k:'p',label:['الفاعل','Subject'],opts:Object.keys(PS).map(k=>[k,PS[k][0]])},{k:'f',label:['الشكل','Form'],opts:[['p',['مثبتة','positive']],['q',['سؤال','question']],['n',['نفي','negative']]]}],
  svg:s=>{const one=PS[s.p][3]==='does';return svg(130,bg(130)+grd(122)+man(160,90,s.p==='she'?'#b05a7a':blu,1)+(s.p==='they'?man(220,90,grn,1):'')+tx(320,64,one?'+ s':'—',{fs:30,c:one?red:gry}))},
  ask:s=>({q:['do ولا does؟','do or does?'],opts:['do','does'],a:PS[s.p][3]}),
  out:s=>{const p=PS[s.p],one=p[3]==='does',sub=p[0]==='I'?'you':p[0]==='Mark'?'Mark':p[0].toLowerCase();if(s.f==='p')return{t:S(`a:${p[0]}|k:${one?p[2]+R('s'):p[1]}|n:${PO[s.p]}.`),say:`${p[0]} ${p[1]} ${PO[s.p]}.`,ar:'',why:one?['he / she / it ← s','he / she / it → s']:['الفعل كما هو','The verb as it is']};if(s.f==='q')return{t:S(`q:Where|x:${p[3]}|a:${sub}|k:${p[2]}?`),ar:'',why:[`${p[3]} والفعل بلا s`,`${p[3]}, verb without s`]};return{t:S(`a:${p[0]}|x:${one?"doesn't":"don't"}|k:${p[2]}|n:${PO[s.p]}.`),ar:'',why:[`${one?"doesn't":"don't"} والفعل بلا s`,'verb without s']}}},
 think:[['he / she / it؟ ← s على الفعل، أو على does.','he / she / it → s on the verb, or on does.']]};

const IT={f:['I\'d like to introduce you to','Laura Scott.','Laura works in our Finance Department.','أود أن أعرّفك على لورا سكوت. لورا تعمل في قسم المالية.'],s:['This is','Mark Carter.','Mark works in Sales.','هذا مارك كارتر. مارك يعمل في المبيعات.']};
NH['تقديم الآخرين']={
 say:[`وأنت تعرّف شخصين على بعض: اذكر الاسم، ثم معلومة عنه تفتح الحديث. وفيه طريقتين: رسمية ${E("I'd like to introduce you to …")} وبسيطة ${E('This is …')}. و ${E("I'd like to")} ألطف من ${E('I want to')}.`,
  `Formal: ${E("I'd like to introduce you to …")} Simple: ${E('This is …')} Then one fact.`],
 life:[['This is my friend, Fahad. He studies with me.','هذا صديقي فهد. يدرس معي.']],
 scene:{title:['عرّف الضيف','Introduce the guest'],
  ctrl:[{k:'s',label:['الأسلوب','Style'],opts:[['f',['رسمي','formal']],['s',['بسيط','simple']]]}],
  svg:s=>svg(140,bg(140)+grd(130)+man(80,100,blu,1)+man(200,100,grn,1)+man(320,100,s.s==='f'?'#b05a7a':'#5d7f96',1)+ar(110,60,170,60,grn,3)+ar(230,60,290,60,grn,3)),
  ask:s=>s.s==='f'?{q:['ألطف:','More polite:'],opts:["I'd like to",'I want to'],a:"I'd like to"}:null,
  out:s=>{const v=IT[s.s];return{t:S(`x:${v[0]}|a:${v[1]}|n:${v[2]}`),ar:v[3],why:['الاسم، ثم معلومة تفتح الحديث.','The name, then one fact.']}}},
 think:[['اذكر الاسم، ثم معلومة عنه.','Say the name, then one fact.']]};

const PQ={from:['Where','are','you from?','من أين أنت؟'],live:['Where','do','you live?','أين تسكن؟'],work:['Where','do','you work?','أين تعمل؟'],dept:['Which department','do','you work in?','في أي قسم تعمل؟']};
NH['نصائح التعارف والأسئلة الشخصية']={
 say:[`بعد التعارف تبدأ بأسئلة بسيطة. انتبه للفرق: البلد ← ${E('are')}: ${E('Where are you from?')} والسكن والشغل ← ${E('do')}: ${E('Where do you live?')} لأن ${E('live')} و ${E('work')} أفعال، و ${E('from')} مو فعل.`,
  `Country → ${E('are')}: ${E('Where are you from?')} Live / work → ${E('do')}.`],
 life:[['Where are you from? — I\'m from Jeddah.','من أين أنت؟ — من جدة.']],
 scene:{title:['اسأل الضيف','Ask the guest'],
  ctrl:[{k:'q',label:['عن','About'],opts:Object.keys(PQ).map(k=>[k,k])}],
  svg:s=>svg(130,bg(130)+man(80,104,blu,1)+man(320,104,grn,1)+bub(110,14,180,34,'?',{fs:18})),
  ask:s=>({q:['are ولا do؟','are or do?'],opts:['are','do'],a:PQ[s.q][1]}),
  out:s=>{const v=PQ[s.q];return{t:S(`q:${v[0]}|x:${v[1]}|q:${v[2]}`),ar:v[3],why:v[1]==='are'?['from مو فعل ← are','from is not a verb → are']:['فيه فعل (live / work) ← do','A verb (live / work) → do']}}},
 think:[['فيه فعل ثاني؟ ← do. ما فيه؟ ← are.','Another verb? → do. No verb? → are.']]};

/* ===== الوحدة 3 ===== */
const OF={stapler:['a stapler','دباسة'],ruler:['a ruler','مسطرة'],calc:['a calculator','آلة حاسبة'],rubber:['a rubber','ممحاة'],scissors:['scissors','مقص']};
const ofSvg=k=>{let b=bg(140);if(k==='stapler')b+=`<path d="M120 100 L280 100 L280 88 L140 70 Q120 70 120 86Z" fill="${red}" stroke="${ink}" stroke-width="2"/>`+rc(120,100,170,10,'#5f6a71',{rx:3});if(k==='ruler')b+=rc(80,60,240,30,yel,{st:ink,rx:2})+Array.from({length:23},(_,i)=>ln(90+i*10,60,90+i*10,i%5?68:76,ink,1.5)).join('');if(k==='calc')b+=rc(150,20,100,110,'#33424c',{rx:8})+rc(160,30,80,24,'#c7e8c0',{rx:3})+Array.from({length:12},(_,i)=>rc(162+(i%4)*20,62+Math.floor(i/4)*20,16,14,'#9aa3aa',{rx:2})).join('');if(k==='rubber')b+=`<g transform="rotate(-15 200 75)">`+rc(150,55,100,40,'#f3b0c3',{st:ink,rx:6})+rc(150,55,40,40,blu,{rx:6})+`</g>`;if(k==='scissors')b+=ci(170,105,14,'none',{st:red,sw:6})+ci(230,105,14,'none',{st:red,sw:6})+ln(178,94,225,25,'#9aa3aa',6)+ln(222,94,175,25,'#9aa3aa',6);return svg(140,b)};
NH['أدوات المكتب']={
 say:[`تبي تسأل عن أداة؟ ${E("What's this?")} والجواب ${E("It's a stapler.")} وبعض الأسماء تختلف بين البريطاني والأمريكي: ${E('rubber = eraser')}.`,
  `${E("What's this? — It's a stapler.")} BrE / AmE: ${E('rubber = eraser')}.`],
 life:[['Can I borrow your ruler?','هل أستعير مسطرتك؟']],
 scene:{title:['وش هذا؟','What is this?'],
  ctrl:[{k:'o',label:['الأداة','Item'],opts:Object.keys(OF).map(k=>[k,k])}],
  svg:s=>ofSvg(s.o),
  ask:s=>({q:['اسمها:','Its name:'],opts:Object.values(OF).map(o=>o[0].replace(/^an? /,'')),a:OF[s.o][0].replace(/^an? /,'')}),
  out:s=>({t:S(`q:What's this?|q:—|x:It's|n:${OF[s.o][0]}.`),say:`What's this? It's ${OF[s.o][0]}.`,ar:`ما هذا؟ — هذا ${OF[s.o][1]}.`,why:["It's + a + الاسم","It's + a + noun"]})},
 think:[["What's this? ← It's a …","What's this? → It's a …"]]};

const DS={calc:['a thing for','adding numbers',"It's a thing for adding numbers.",'آلة حاسبة','calculator'],ruler:['something we use to','draw a straight line',"It's something we use to draw a straight line.",'مسطرة','ruler'],tippex:['stuff for','correcting mistakes',"It's stuff for correcting mistakes.",'سائل التصحيح','correction fluid']};
NH['وصف شيء لا تعرف اسمه']={
 say:[`نسيت اسم الشي؟ لا توقف، وصف وش نسوي فيه. ولكل عبارة صيغة فعل:${FM('a thing for','+','الفعل','+','ing')}${FM('something we use to','+','الفعل كما هو')}وللسوائل والمواد اللي ما تنعد نقول ${E('stuff for')} بدل ${E('a thing for')}.`,
  `${E('a thing for')} + -ing · ${E('something we use to')} + verb · ${E('stuff for')} + -ing (for liquids and materials).`],
 life:[["It's a thing for opening bottles.",'هي أداة لفتح القوارير.']],
 scene:{title:['صفها بدون اسمها','Describe it without its name'],
  ctrl:[{k:'o',label:['الشيء','Thing'],opts:Object.keys(DS).map(k=>[k,DS[k][4]])}],
  svg:s=>s.o==='tippex'?svg(140,bg(140)+rc(170,30,60,90,'#fff',{st:ink,rx:8})+rc(185,14,30,18,'#5f6a71',{rx:3})+tx(200,80,'?',{fs:30,c:red})):ofSvg(s.o==='calc'?'calc':'ruler').replace('</svg>',tx(360,30,'?',{fs:30,c:red})+'</svg>'),
  ask:s=>({q:['بعدها:','After it:'],opts:[DS[s.o][1],DS[s.o][0]==='something we use to'?'drawing a straight line':DS[s.o][1].replace(/ing\b/,'').replace('add','add ').trim()],a:DS[s.o][1]}),
  out:s=>{const d=DS[s.o];return{t:S(`q:It's|x:${d[0]}|k:${d[1]}.`),say:d[2],ar:`(تقصد: ${d[3]})`,why:d[0]==='something we use to'?['use to ← الفعل كما هو','use to → verb as it is']:['for ← الفعل مع ing','for → verb + ing']}}},
 think:[['بعد for ← ing. بعد use to ← الفعل كما هو.','After for → ing. After use to → the verb.']]};

const PP={on:['on','على'],under:['under','تحت'],front:['in front of','أمام'],behind:['behind','خلف'],next:['next to','بجانب'],near:['near','قريب من']};
NH['حروف الجر للمكان']={
 say:[`تبي تقول لزميلك وين يلقى الشي؟ اربطه بشي ثاني يشوفه:${FM('الشيء','+','is / are','+','حرف الجر','+','المكان')}وانتبه: ${E('next to')} = ملاصق، و ${E('near')} = قريب وممكن ما يلاصق.`,
  `Thing + is / are + preposition + place. ${E('next to')} touches; ${E('near')} is close.`],
 life:[['My keys are on the table.','مفاتيحي على الطاولة.']],
 scene:{title:['وين الجوال؟','Where is the phone?'],
  ctrl:[{k:'p',label:['المكان','Place'],opts:Object.keys(PP).map(k=>[k,PP[k][0]])}],
  svg:s=>{let b=bg(160)+grd(150)+desk()+rc(170,70,60,30,'#5d7f96',{rx:3});const P={on:[150,90],under:[200,140],front:[200,126],behind:[200,60],next:[245,90],near:[300,90]}[s.p];const fr=s.p==='front';const ph=`<g transform="translate(${P[0]},${P[1]})">`+rc(-9,-16,18,30,'#1f2a33',{rx:4})+rc(-6,-12,12,20,'#9fc3d8',{rx:2})+`</g>`;if(s.p==='behind')b=bg(160)+grd(150)+ph+desk()+rc(170,70,60,30,'#5d7f96',{rx:3});else b+=ph;return svg(160,b+tx(200,58,s.p==='behind'?'':'',{}))},
  ask:s=>({q:['حرف الجر:','The preposition:'],opts:Object.values(PP).map(p=>p[0]),a:PP[s.p][0]}),
  out:s=>({t:S(`a:The phone|q:is|x:${PP[s.p][0]}|n:the ${s.p==='on'||s.p==='under'?'desk':'laptop'}.`),ar:`الجوال ${PP[s.p][1]} ${s.p==='on'||s.p==='under'?'المكتب':'الحاسوب'}.`,why:['الشيء، ثم is، ثم حرف الجر والمكان.','Thing, is, preposition, place.']})},
 think:[['ملاصق ← next to. قريب بس ← near.','Touching → next to. Just close → near.']]};

/* ===== الوحدة 4 ===== */
const LC={centre:['in','the centre'],north:['in','the north'],nw:['in','the northwest'],coast:['on','the east coast'],sub:['in','the suburbs']};
NH['المواقع والجهات']={
 say:[`وين المصنع؟ في الوسط أو الشمال أو الضواحي ← ${E('in')}. على الساحل ← ${E('on')} (لأنه خط على حافة البلد). والجهات المركبة كلمة وحدة: ${E('northwest')}.`,
  `${E('in')} the centre / the north / the suburbs; ${E('on')} the coast; ${E('northwest')} is one word.`],
 life:[['Jeddah is on the west coast.','جدة على الساحل الغربي.']],
 scene:{title:['الخريطة','The map'],
  ctrl:[{k:'l',label:['المكان','Place'],opts:Object.keys(LC).map(k=>[k,LC[k][1].replace('the ','')])}],
  svg:s=>{let b=bg(170)+`<path d="M90 30 L300 20 L330 80 L310 150 L120 155 L70 90Z" fill="#f3e3c3" stroke="${ink}" stroke-width="2"/>`+`<path d="M330 80 L310 150" stroke="${blu}" stroke-width="8"/>`+tx(360,100,'N ↑',{fs:12,c:gry});const P={centre:[200,90],north:[200,40],nw:[120,50],coast:[318,115],sub:[230,100]}[s.l];if(s.l==='sub')b+=ci(200,90,26,'none',{st:gry,sw:2})+ci(200,90,6,ink);b+=ci(P[0],P[1],10,red,{st:'#fff',sw:3});return svg(170,b)},
  ask:s=>({q:['in ولا on؟','in or on?'],opts:['in','on'],a:LC[s.l][0]}),
  out:s=>({t:S(`a:The factory|q:is|x:${LC[s.l][0]}|n:${LC[s.l][1]}.`),ar:'',why:LC[s.l][0]==='on'?['الساحل ← on','The coast → on']:['الوسط والجهات والضواحي ← in','Centre, directions, suburbs → in']})},
 think:[['ساحل ← on. غيره ← in.','Coast → on. Others → in.']]};

const WL={p:["I'd like to","meet more people.",'أود أن ألتقي بأشخاص أكثر.'],n:["I wouldn't like to",'work at home.','لا أود أن أعمل من البيت.'],q:['Would you like to','work at home?','هل تود أن تعمل من البيت؟'],like:['I like','my job.','أحب عملي (حب عام).']};
NH['الرغبة بـ would like to']={
 say:[`«أتمنى / أود» بلطف = ${E("I'd like to")} وبعدها الفعل كما هو: ${E("I'd like to meet more people.")} وانتبه: ${E('I like')} حب عام لشي موجود (${E('I like my job.')})، و ${E("I'd like to")} رغبة في شي ما صار.`,
  `${E("I'd like to")} + verb = a wish; ${E('I like')} = general liking.`],
 life:[["I'd like to visit Japan one day.",'أود أن أزور اليابان يوماً ما.']],
 scene:{title:['رغبة ولا حب؟','Wish or liking?'],
  ctrl:[{k:'f',label:['الجملة','Sentence'],opts:[['p',['رغبة','wish']],['n',['نفي','negative']],['q',['سؤال','question']],['like',['حب عام','liking']]]}],
  svg:s=>svg(130,bg(130)+man(100,108,blu,1)+(s.f==='like'?tx(220,70,'♥',{fs:40,c:red}):`<g opacity="${s.f==='n'?0.4:1}">`+rc(200,30,140,70,'#fff',{st:ink,rx:30})+tx(270,72,'💭',{fs:26})+`</g>`)),
  ask:s=>s.f==='like'?{q:['هذا حب عام ولا رغبة؟','Liking or wish?'],opts:['I like','I\'d like to'],a:'I like'}:{q:['بعد would like to:','After would like to:'],opts:['the verb','verb + ing'],a:'the verb'},
  out:s=>{const w=WL[s.f];return{t:S(`x:${w[0]}|k:${w[1]}`),ar:w[2],why:s.f==='like'?['حب عام ← I like','Liking → I like']:['would like to ← الفعل كما هو','would like to → the verb']}}},
 think:[['أتمنى شي ← I\'d like to. أحب شي موجود ← I like.','A wish → I\'d like to. A liking → I like.']]};

NH['أماكن الشركة']={
 say:[`الشركة الكبيرة لها مقر رئيسي ${E('Head Office')}، وفروع ومصانع ومستودعات. نذكر المقر أول، ثم نضيف الباقي بـ ${E('also')} قبل الفعل: ${E('They also have a factory in Jubail.')}`,
  `Head Office first, then add places with ${E('also')} before the verb.`],
 life:[['The bank also has a branch near my house.','للبنك أيضاً فرع قرب بيتي.']],
 scene:{title:['أماكن الشركة',"The company's sites"],
  ctrl:[{k:'s',label:['المكان','Site'],opts:[['ho','Head Office'],['f','factory'],['w','warehouse']]}],
  svg:s=>{let b=bg(150)+`<path d="M90 30 L300 20 L330 80 L310 140 L120 145 L70 90Z" fill="#f3e3c3" stroke="${ink}" stroke-width="2"/>`;const P={ho:[200,85,'Riyadh'],f:[320,90,'Jubail'],w:[110,80,'Jeddah']}[s.s];b+=rc(P[0]-14,P[1]-14,28,22,s.s==='ho'?blu:s.s==='f'?'#7d878e':yel,{st:ink,rx:2})+tx(P[0],P[1]+26,P[2],{fs:11});return svg(150,b)},
  ask:s=>s.s==='ho'?null:{q:['نضيف المكان بـ:','We add it with:'],opts:['also','too first','and only'],a:'also'},
  out:s=>s.s==='ho'?{t:S('a:The company|k:has|n:its Head Office|q:in Riyadh.'),ar:'مقر الشركة الرئيسي في الرياض.',why:['المقر أول.','Head Office first.']}:{t:S(`a:They|x:also|k:have|n:a ${s.s==='f'?'factory|q:in Jubail.':'warehouse|q:in Jeddah.'}`),say:`They also have a ${s.s==='f'?'factory in Jubail':'warehouse in Jeddah'}.`,ar:`ولديهم أيضاً ${s.s==='f'?'مصنع في الجبيل':'مستودع في جدة'}.`,why:['also قبل الفعل.','also before the verb.']}},
 think:[['المقر أول، والباقي مع also.','Head Office first, the rest with also.']]};

/* ===== الوحدة 5 ===== */
const PSV={phones:['They','make','mobile phones','product','تصنع جوالات'],drinks:['They','produce','soft drinks','product','تنتج مشروبات غازية'],bank:['The bank','provides','banking services','service','يقدّم خدمات مصرفية'],air:['The airline','offers','air travel','service','تقدّم رحلات جوية']};
NH['المنتج والخدمة و make / provide / offer']={
 say:[`تقدر تمسكه بيدك؟ منتج ${E('product')} ← ${E('make / produce')}. شغل يتقدّم لك؟ خدمة ${E('service')} ← ${E('provide / offer')}. والشركة مفردة، فالفعل معها فيه ${E('s')}: ${E('The bank provides …')}`,
  `Product → ${E('make / produce')}. Service → ${E('provide / offer')}. The company is singular → s.`],
 life:[['This company makes cars.','هذه الشركة تصنع السيارات.']],
 scene:{title:['منتج ولا خدمة؟','Product or service?'],
  ctrl:[{k:'c',label:['الشركة','Company'],opts:Object.keys(PSV).map(k=>[k,PSV[k][2]])}],
  svg:s=>{const p=PSV[s.c];let b=bg(140);if(s.c==='phones')b+=rc(180,20,40,80,'#1f2a33',{rx:6})+rc(184,28,32,62,'#9fc3d8',{rx:2});if(s.c==='drinks')b+=[170,200,230].map(x=>rc(x-10,40,20,60,red,{rx:4})).join('');if(s.c==='bank')b+=`<path d="M140 50 L200 20 L260 50Z" fill="#7d878e"/>`+[155,185,215,245].map(x=>rc(x-5,52,10,40,'#c9d1d6')).join('')+rc(140,92,120,8,'#7d878e');if(s.c==='air')b+=`<path d="M120 70 Q200 56 290 66 L300 74 Q200 82 120 76Z" fill="#c9d1d6" stroke="${ink}"/>`;b+=tx(200,128,p[3]==='product'?'✋ product':'🤝 service',{fs:14,c:p[3]==='product'?blu:grn});return svg(140,b)},
  ask:s=>({q:['الفعل:','The verb:'],opts:PSV[s.c][3]==='product'?['make','provide']:['provide','make'],a:PSV[s.c][3]==='product'?'make':'provide'}),
  out:s=>{const p=PSV[s.c];return{t:S(`a:${p[0]}|k:${p[1]}|n:${p[2]}.`),ar:'',why:p[3]==='product'?['منتج ← make / produce','Product → make / produce']:['خدمة ← provide / offer، والمفرد مع s','Service → provide / offer']}}},
 think:[['أمسكه بيدي؟ ← make. شغل لي؟ ← provide.','Can I hold it? → make. A service? → provide.']]};

const PD=[['It','has','two USB ports.','فيه منفذا USB.'],['It','can charge','a phone three times.','يستطيع شحن الجوال ثلاث مرات.'],['You','can carry','it in your pocket.','تستطيع حمله في جيبك.'],['It','costs','SAR 149.','سعره 149 ريالاً.']];
NH['وصف المنتج']={
 say:[`تعرض منتج على زبون؟ أربع جمل: وش فيه ${E('has')}، وش يقدر يسوي ${E('can')}، ووش تقدر تسوي فيه أنت ${E('You can')}، وسعره ${E('costs')}. وبعد ${E('can')} الفعل كما هو: ${E('It can charge')} مو ${E('It can charges')}.`,
  `has · can · You can · costs. After can → verb without s.`],
 life:[['This phone has a good camera.','هذا الجوال فيه كاميرا جيدة.']],
 scene:{title:['الشاحن المتنقل','The power bank'],
  ctrl:[{k:'i',label:['الجملة','Sentence'],range:[1,4,1],init:1}],
  svg:s=>svg(140,bg(140)+rc(140,30,120,70,'#33424c',{rx:12})+rc(160,96,14,8,ink)+rc(186,96,14,8,ink)+[0,1,2,3].map(i=>rc(210+i*10,44,8,16,i<3?grn:'#556',{rx:1})).join('')+tx(200,128,['ports','charge ×3','pocket','SAR 149'][s.i-1],{fs:14,c:red})),
  ask:s=>s.i===2?{q:['بعد can:','After can:'],opts:['charge','charges'],a:'charge'}:null,
  out:s=>{const p=PD[s.i-1];return{t:S(`a:${p[0]}|k:${p[1]}|n:${p[2]}`),ar:p[3],why:s.i===2||s.i===3?['can ← الفعل كما هو','can → the verb']:['It ← الفعل مع s','It → verb + s']}}},
 think:[['بعد can ← الفعل بلا s.','After can → no s.']]};

const CP={cheap:['cheap','cheaper','er'],fast:['fast','faster','er'],big:['big','bigger','double'],easy:['easy','easier','ier'],comf:['comfortable','more comfortable','more'],good:['good','better','irr']};
NH['صيغة المقارنة']={
 say:[`نقارن بين شيئين: نغيّر الصفة ثم ${E('than')} (من). والتغيير حسب طول الصفة: القصيرة ← ${E('er')}، والطويلة ← ${E('more')} قبلها. والشاذة تنحفظ: ${E('good → better')}.`,
  `Short → ${E('er')}; long → ${E('more')}; irregular: ${E('good → better')}; then ${E('than')}.`],
 life:[['The train is cheaper than the plane.','القطار أرخص من الطائرة.']],
 scene:{title:['القطار والطائرة','Train and plane'],
  ctrl:[{k:'a',label:['الصفة','Adjective'],opts:Object.keys(CP).map(k=>[k,CP[k][0]])}],
  svg:s=>svg(130,bg(130)+rc(40,60,140,36,'#5d7f96',{rx:10})+[60,90,120,150].map(x=>rc(x,66,20,12,'#cfe3f0',{rx:2})).join('')+wh(70,100,8)+wh(150,100,8)+`<path d="M230 70 Q300 58 370 66 L376 74 Q300 82 230 76Z" fill="#c9d1d6" stroke="${ink}"/>`+tx(200,40,'>',{fs:26,c:red})),
  ask:s=>({q:['صيغة المقارنة:','Comparative:'],opts:[CP[s.a][1],s.a==='comf'?'comfortabler':s.a==='good'?'gooder':CP[s.a][0]+'er'].filter((v,i,a)=>a.indexOf(v)===i).concat(s.a==='cheap'||s.a==='fast'?['more '+CP[s.a][0]]:[]),a:CP[s.a][1]}),
  out:s=>{const c=CP[s.a];const W={er:['قصيرة ← er','Short → er'],double:['ساكن بعد متحرك ← نضاعف','Double the last letter'],ier:['آخرها y ← ier','y → ier'],more:['طويلة ← more','Long → more'],irr:['شاذة: good ← better','Irregular']}[c[2]];return{t:S(`a:The train|q:is|x:${c[1]}|q:than|n:the plane.`),ar:'',why:W}}},
 think:[['الصفة قصيرة ← er. طويلة ← more. وبعدها than.','Short → er. Long → more. Then than.']]};

const HB={garden:['the Garden Hotel',"it's near the airport",'cheaper than the Palm Hotel','فندق الحديقة قريب من المطار'],palm:['the Palm Hotel',"it's in the city centre",'more comfortable than the Garden Hotel','فندق النخيل في وسط المدينة']};
NH['اختيار الأنسب مع السبب']={
 say:[`تختار لشخص؟ قل اختيارك، ثم السبب بعد ${E('because')}:${FM('I think','+','الاختيار','+','is better for','+','الشخص')}${E("because it's near the airport.")} والسبب غالباً مقارنة.`,
  `${E('I think … is better for … because …')} The reason is often a comparison.`],
 life:[['I think the bus is better for you because it\'s cheaper.','أظن أن الحافلة أفضل لك لأنها أرخص.']],
 scene:{title:['أي فندق؟','Which hotel?'],
  ctrl:[{k:'h',label:['الفندق','Hotel'],opts:[['garden','Garden'],['palm','Palm']]}],
  svg:s=>svg(150,bg(150)+rc(40,40,100,90,s.h==='garden'?grn:'#c9d1d6',{st:ink,rx:4})+tx(90,30,'Garden',{fs:12})+rc(260,30,100,100,s.h==='palm'?blu:'#c9d1d6',{st:ink,rx:4})+tx(310,22,'Palm',{fs:12})+tx(200,140,'✈ airport',{fs:12,c:gry})+ln(140,130,180,130,gry,2)),
  ask:()=>({q:['السبب بعد:','The reason after:'],opts:['because','so','than'],a:'because'}),
  out:s=>{const h=HB[s.h];return{t:S(`q:I think|n:${h[0]}|x:is better for|a:Mr Daniel|x:because|q:${h[1]}.`),ar:h[3]+'.',why:['الاختيار، ثم because والسبب.','Choice, then because + reason.']}}},
 think:[['اخترت؟ ← قل ليه بـ because.','You chose? → say why with because.']]};

/* ===== الوحدة 6 ===== */
const NW=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const tw=(h,m)=>{const h12=h%12||12,nx=(h+1)%12||12;if(m===0)return`${NW[h12]} o'clock`;if(m===15)return`quarter past ${NW[h12]}`;if(m===30)return`half past ${NW[h12]}`;if(m===45)return`quarter to ${NW[nx]}`;if(m<30)return`${['','','','','','five','','','','','ten','','','','','','','','','','twenty','','','','','twenty-five'][m]} past ${NW[h12]}`;return`${['','','','','','twenty-five','','','','','twenty','','','','','','','','','','ten','','','','','five'][60-m]} to ${NW[nx]}`};
NH['قول الوقت']={
 say:[`الوقت له طريقتين: بالأرقام زي الساعة الرقمية ${E('nine fifteen')}، أو بالعقارب: لين نص الساعة نقول ${E('past')} (بعد)، وبعد النص نقول ${E('to')} (قبل الساعة الجاية): ${E('8.45 = quarter to nine')}.`,
  `Digital: ${E('nine fifteen')}. Clock: up to 30 → ${E('past')}; after 30 → ${E('to')} the next hour.`],
 life:[["What time is it? — It's half past four.",'كم الساعة؟ — الرابعة والنصف.']],
 scene:{title:['الساعة','The clock'],
  ctrl:[{k:'h',label:['الساعة','Hour'],range:[1,12,1],init:9},{k:'m',label:['الدقائق','Minutes'],opts:[0,10,15,20,30,40,45,50].map(v=>[v,String(v).padStart(2,'0')])}],
  svg:s=>svg(150,bg(150)+clock(110,75,60,s.h,s.m)+rc(220,50,150,50,'#33424c',{rx:8})+tx(295,84,`${s.h}.${String(s.m).padStart(2,'0')}`,{fs:24,c:'#7cf2b4'})),
  ask:s=>s.m===0?null:{q:['past ولا to؟','past or to?'],opts:['past','to'],a:s.m<=30?'past':'to'},
  out:s=>({t:S(`q:It's|k:${tw(s.h,s.m)}.`),ar:'',why:s.m===0?["تماماً ← o'clock","Exactly → o'clock"]:s.m<=30?['لين النص ← past','Up to 30 → past']:['بعد النص ← to الساعة الجاية','After 30 → to the next hour']})},
 think:[['أقل من نص ← past. أكثر ← to الساعة الجاية.','Before half → past. After → to the next hour.']]};

const TZ={london:['London',0],riyadh:['Riyadh',3],dubai:['Dubai',4],ny:['New York',-5]};
NH['فروق التوقيت']={
 say:[`قبل ما تتصل بزميل برّا، احسب الوقت عنده. لندن ${E('GMT')}، والرياض ${E('GMT +3')} يعني قدّامها بثلاث ساعات. والسؤال: ${E("When it's half past ten in Riyadh, what time is it in London?")}`,
  `Riyadh is GMT +3: three hours ahead of London.`],
 life:[["It's 9 p.m. here, but it's 6 p.m. in London.",'الساعة 9 مساءً هنا، لكنها 6 مساءً في لندن.']],
 scene:{title:['كم الساعة عندهم؟','What time is it there?'],
  ctrl:[{k:'c',label:['المدينة','City'],opts:[['london','London'],['dubai','Dubai'],['ny','New York']]}],
  svg:s=>{const d=TZ[s.c][1]-3;const h=((10+d)%12+12)%12||12;return svg(150,bg(150)+clock(100,75,52,10,30)+tx(100,145,'Riyadh',{fs:12})+clock(300,75,52,h,30)+tx(300,145,TZ[s.c][0],{fs:12})+tx(200,80,(d>0?'+':'')+d,{fs:22,c:red}))},
  ask:s=>{const d=TZ[s.c][1]-3,h=((10+d)%12+12)%12||12;return{q:['الساعة عندهم:','The time there:'],opts:[`half past ${NW[h]}`,`half past ten`,`half past ${NW[((10-d)%12+12)%12||12]}`].filter((v,i,a)=>a.indexOf(v)===i),a:`half past ${NW[h]}`}},
  out:s=>{const d=TZ[s.c][1]-3,h=((10+d)%12+12)%12||12;return{t:S(`q:When it's half past ten in Riyadh,|q:it's|x:half past ${NW[h]}|q:in ${TZ[s.c][0]}.`),ar:'',why:[`الفرق ${d} ساعة`,`Difference: ${d} hours`]}}},
 think:[['غرب الرياض ← أبكر. شرقها ← أبعد.','West of Riyadh → earlier. East → later.']]};

const TP={at:['at','9.00','الساعة'],on:['on','Saturday','الأيام'],in:['in','the morning','أجزاء اليوم'],from:['from … to','2.00 to 5.00','المدة'],around:['around','5.00','تقريباً']};
NH['حروف الجر للزمن']={
 say:[`قبل الوقت نحط حرف، والحرف حسب نوع الوقت: ساعة ← ${E('at')}، يوم ← ${E('on')}، جزء من اليوم ← ${E('in')}، مدة ← ${E('from … to')}، وتقريباً ← ${E('around')}.`,
  `${E('at')} a time · ${E('on')} a day · ${E('in')} part of the day · ${E('from … to')} · ${E('around')}.`],
 life:[['I go to the gym in the evening.','أذهب إلى النادي في المساء.']],
 scene:{title:['متى الاجتماع؟','When is the meeting?'],
  ctrl:[{k:'p',label:['الوقت','Time'],opts:Object.keys(TP).map(k=>[k,TP[k][1]])}],
  svg:s=>svg(130,bg(130)+rc(60,20,280,90,'#fff',{st:ink,rx:8})+rc(60,20,280,24,blu,{rx:6})+tx(200,38,'MEETING',{fs:12,c:'#fff'})+tx(200,84,TP[s.p][1],{fs:22,c:red})),
  ask:s=>({q:['الحرف:','The preposition:'],opts:['at','on','in','from … to','around'],a:TP[s.p][0]}),
  out:s=>{const p=TP[s.p];const t=s.p==='from'?'from|n:2.00|x:to|n:5.00':`${p[0]}|n:${p[1]}`;return{t:S(`q:The meeting is|x:${t}.`),say:`The meeting is ${s.p==='from'?'from 2.00 to 5.00':p[0]+' '+p[1]}.`,ar:'',why:[`${p[2]} ← ${p[0]}`,`${p[0]}`]}}},
 think:[['ساعة ← at. يوم ← on. صباح / مساء ← in.','A time → at. A day → on. Morning / evening → in.']]};

const VN={plan:['plan','a schedule','يخطط جدولاً'],book:['book','a hotel','يحجز فندقاً'],give:['give','a presentation','يقدّم عرضاً'],have:['have','dinner','يتناول العشاء'],go:['go','sightseeing','يتجول']};
NH['الفعل مع الاسم']={
 say:[`بعض الأفعال تمشي مع أسماء معيّنة، والترجمة الحرفية تضيّعك: «يقدّم عرض» ← ${E('give a presentation')} مو ${E('make')}. «يتعشى» ← ${E('have dinner')} مو ${E('eat')}. فاحفظهم مع بعض كقطعة وحدة.`,
  `Learn the pair together: ${E('give a presentation · have dinner · book a hotel')}.`],
 life:[["Let's have lunch together.",'لنتناول الغداء معاً.']],
 scene:{title:['اجمع الزوج','Make the pair'],
  ctrl:[{k:'n',label:['الاسم','Noun'],opts:Object.keys(VN).map(k=>[k,VN[k][1]])}],
  svg:s=>svg(110,bg(110)+rc(40,30,110,46,'#fff3c7',{st:ink,rx:8})+tx(95,60,'?',{fs:22,c:red})+tx(170,60,'+',{fs:22})+rc(190,30,170,46,'#dceaf6',{st:ink,rx:8})+tx(275,60,VN[s.n][1],{fs:15,c:blu})),
  ask:s=>({q:['الفعل:','The verb:'],opts:Object.values(VN).map(v=>v[0]),a:VN[s.n][0]}),
  out:s=>{const v=VN[s.n];return{t:S(`q:We|k:${v[0]}|n:${v[1]}.`),ar:v[2],why:['نحفظهم مع بعض.','Learn them together.']}}},
 think:[['أحفظ الفعل مع اسمه، مو كلمة كلمة.','Learn the verb with its noun.']]};

const RO={req:['Could you','book a hotel for me, please?','طلب مهذب'],wish:["I'd like to",'give a presentation on Saturday.','رغبة'],off:["I'll",'meet you at the airport.','عرض أو وعد'],sug:['We can','have dinner at 9 o\'clock.','اقتراح']};
NH['الطلب والعرض والاقتراح']={
 say:[`في رسالة الترتيب تطلب وتعرض وتقترح. كل وحدة لها عبارة، وبعدها الفعل كما هو: طلب ← ${E('Could you')}، رغبة ← ${E("I'd like to")}، عرض ← ${E("I'll")}، اقتراح ← ${E('We can')}.`,
  `Request → ${E('Could you')}; wish → ${E("I'd like to")}; offer → ${E("I'll")}; suggestion → ${E('We can')}.`],
 life:[["I'll call you tomorrow.",'سأتصل بك غداً.']],
 scene:{title:['وش تبي تقول؟','What do you want to say?'],
  ctrl:[{k:'f',label:['الغرض','Function'],opts:Object.keys(RO).map(k=>[k,RO[k][2]])}],
  svg:s=>svg(120,bg(120)+rc(80,16,240,90,'#fff',{st:ink,rx:6})+ln(100,40,300,40,'#c9d1d6',3)+ln(100,60,280,60,'#c9d1d6',3)+ln(100,80,240,80,'#c9d1d6',3)+tx(330,24,'✉',{fs:22,c:blu})),
  ask:s=>({q:['العبارة:','The phrase:'],opts:Object.values(RO).map(r=>r[0]),a:RO[s.f][0]}),
  out:s=>{const r=RO[s.f];return{t:S(`x:${r[0]}|k:${r[1]}`),ar:'',why:[`${r[2]} ← ${r[0]}`,r[0]]}}},
 think:[['أطلب؟ أعرض؟ أقترح؟ ← العبارة، ثم الفعل كما هو.','Request, offer or suggestion? → phrase + verb.']]};

const LT=[['Dear Anna,','البداية'],['Thanks for your email.','الشكر'],["I'm writing about the schedule for your visit.",'السبب'],['On Sunday at 10.00 we can visit the factory.','الجدول يوماً يوماً'],['Best regards,','الختام']];
NH['رسالة الجدول']={
 say:[`رسالة الجدول لها ترتيب يسهّل قراءتها: بداية ← شكر ← سبب الرسالة ← الجدول يوم يوم ← ختام. وفي الجدول ${E('on')} لليوم و ${E('at')} للساعة.`,
  `Greeting → thanks → reason → day by day (on + day, at + time) → closing.`],
 life:[['Thanks for your message.','شكراً على رسالتك.']],
 scene:{title:['رتّب الرسالة','Order the email'],
  ctrl:[{k:'i',label:['السطر','Line'],range:[1,5,1],init:1}],
  svg:s=>{let b=bg(160)+rc(80,10,240,140,'#fff',{st:ink,rx:6});LT.forEach((l,i)=>{b+=rc(96,22+i*24,208,16,i===s.i-1?'#fff3c7':'#eef1f3',{rx:3})+tx(110,34+i*24,String(i+1),{fs:11,c:i===s.i-1?red:gry})});return svg(160,b)},
  ask:s=>s.i===4?{q:['قبل اليوم وقبل الساعة:','Before the day / time:'],opts:['on / at','at / on','in / at'],a:'on / at'}:null,
  out:s=>{const l=LT[s.i-1];return{t:S(`n:${l[0]}`),ar:l[1],why:['كل جزء في مكانه.','Each part in its place.']}}},
 think:[['شكر، ثم سبب، ثم الجدول، ثم الختام.','Thanks, reason, schedule, closing.']]};

/* ===== الوحدة 7 ===== */
const TL=[['Hello, Delta Electric. Can I help you?','الموظف: باسم الشركة.'],['Can I speak to Mr Steve, please?','المتصل: يطلب شخصاً.'],["Who's calling, please?",'الموظف: يسأل عن المتصل.'],['This is Laura Scott of Nova Motors.','المتصل: This is، مو I am.'],["Just a moment, please. I'll put you through.",'الموظف: يحوّل المكالمة.']];
NH['عبارات الرد على الهاتف']={
 say:[`مكالمات الشغل لها عبارات ثابتة يعرفها الطرفين، فاحفظها كما هي. أهم فرق: في التلفون تعرّف بنفسك بـ ${E('This is …')} مو ${E('I am …')}. وإذا كنت أنت المطلوب تقول بس: ${E('Speaking.')}`,
  `Fixed phrases. On the phone: ${E('This is …')}, not "I am". If it's you: ${E('Speaking.')}`],
 life:[['Hello, this is Omar.','مرحباً، معك عمر.']],
 scene:{title:['المكالمة','The call'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,5,1],init:1}],
  svg:s=>{const L=s.i%2===1&&s.i!==5?false:true;const rec=[1,3,5].includes(s.i);return svg(140,bg(140)+man(70,96,blu,1)+phone(70,34)+man(330,96,grn,1)+phone(330,34)+tx(70,136,'caller',{fs:11,c:gry})+tx(330,136,'receptionist',{fs:11,c:gry})+bub(rec?160:20,10,220,34,['Delta Electric. Can I help you?','Can I speak to Mr Steve?',"Who's calling, please?",'This is Laura Scott.',"I'll put you through."][s.i-1],{fs:11}))},
  ask:s=>s.i===4?{q:['المتصل يقول:','The caller says:'],opts:['This is Laura.','I am Laura.'],a:'This is Laura.'}:null,
  out:s=>{const l=TL[s.i-1];return{t:S(`k:${l[0]}`),ar:l[1],why:['عبارات ثابتة.','Fixed phrases.']}}},
 think:[["أعرّف نفسي في التلفون ← This is …","On the phone → This is …"]]};

const SH={mosque:['should','switch off your phone in the mosque.','من الأفضل أن تطفئ جوالك في المسجد.',1],drive:["shouldn't",'use your phone when you drive.','من الأفضل ألا تستعمل جوالك وأنت تقود.',0],meet:['should','put your phone on silent in meetings.','من الأفضل أن تجعل جوالك صامتاً في الاجتماعات.',1],loud:["shouldn't",'talk loudly on the bus.','من الأفضل ألا تتكلم بصوت عالٍ في الحافلة.',0]};
NH["آداب الجوال بـ should و shouldn't"]={
 say:[`تنصح أحد؟ «من الأفضل» = ${E('should')}، و«الأفضل لا» = ${E("shouldn't")}. وبعدهم الفعل كما هو، بلا ${E('to')} ولا ${E('s')}، وما يتغيرون مع الضمائر: ${E('He should …')}`,
  `${E('should / shouldn\'t')} + verb, no to, no s.`],
 life:[['You should sleep early.','من الأفضل أن تنام مبكراً.']],
 scene:{title:['نصيحة','Advice'],
  ctrl:[{k:'p',label:['المكان','Place'],opts:Object.keys(SH).map(k=>[k,k])}],
  svg:s=>{const v=SH[s.p];let b=bg(140)+rc(170,30,60,90,'#1f2a33',{rx:10})+rc(176,40,48,66,'#9fc3d8',{rx:3});b+=v[3]?ok(320,40):no(320,40);b+=tx(100,80,{mosque:'🕌',drive:'🚗',meet:'👥',loud:'🚌'}[s.p],{fs:40});return svg(140,b)},
  ask:s=>({q:['should ولا shouldn\'t؟',"should or shouldn't?"],opts:['should',"shouldn't"],a:SH[s.p][0]}),
  out:s=>{const v=SH[s.p];return{t:S(`a:You|x:${v[0]}|k:${v[1]}`),ar:v[2],why:['بعدها الفعل كما هو.','Then the verb as it is.']}}},
 think:[['أنصح يسويه ← should. ما يسويه ← shouldn\'t.',"Do it → should. Don't → shouldn't."]]};

const CL={price:['ask for your latest price list','by email'],cat:['ask for a catalogue','by express mail'],order:['check my order','by fax']};
NH['سبب الاتصال وطلب البيانات']={
 say:[`المتصل يبدأ بسبب اتصاله:${FM("I'm calling to",'+','الفعل كما هو')}ثم اللي يرد يطلب البيانات بـ ${E('Can I have …?')} أو ${E('Could I have …?')} (ألطف شوي)، ويوعد: ${E("I'll do that right now.")}`,
  `${E("I'm calling to")} + verb. Then ${E('Can / Could I have …?')} and ${E("I'll do that right now.")}`],
 life:[["I'm calling to book an appointment.",'أتصل لأحجز موعداً.']],
 scene:{title:['ليش تتصل؟','Why are you calling?'],
  ctrl:[{k:'r',label:['السبب','Reason'],opts:Object.keys(CL).map(k=>[k,k])}],
  svg:s=>svg(130,bg(130)+man(80,106,blu,1)+phone(80,46)+man(320,106,grn,1)+phone(320,46)+bub(110,14,180,34,"I'm calling to …",{fs:12})),
  ask:()=>({q:['بعد I\'m calling to:',"After I'm calling to:"],opts:['the verb','verb + ing'],a:'the verb'}),
  out:s=>{const c=CL[s.r];return{t:S(`x:I'm calling to|k:${c[0]}.|q:Could you send it|n:${c[1]}?`),ar:'',why:["I'm calling to ← الفعل كما هو","I'm calling to → the verb"]}}},
 think:[["أبدأ بسبب الاتصال: I'm calling to …","Start with the reason: I'm calling to …"]]};

const SP=[['Could you spell that, please?','S-U-double L-I-V-A-N.','هل تستطيع تهجئته لو سمحت؟'],['Can you say that again, please?',"Sure. I'll say it more slowly.",'هل تستطيع إعادته لو سمحت؟ — طبعاً، سأقوله ببطء.'],['Is that 0566?','Yes. Oh, double five, six.','هل هو 0566؟ — نعم.']];
NH['التحقق والتهجئة']={
 say:[`في التلفون سهل تغلط في الأسماء والأرقام، فتأكد قبل ما تسكّر: اطلب التهجئة ${E('Could you spell that, please?')} أو الإعادة ${E('Can you say that again, please?')} وفي الأرقام: الصفر ${E('oh')}، والمتكرر ${E('double')}.`,
  `Check before you hang up: ${E('Could you spell that? Can you say that again?')} 0 = oh, 66 = double six.`],
 life:[['Sorry, can you say that again, please?','عذراً، هل تستطيع إعادة ذلك؟']],
 scene:{title:['تأكد','Check it'],
  ctrl:[{k:'i',label:['الطلب','Request'],opts:[[0,'spell'],[1,'again'],[2,'number']]}],
  svg:s=>svg(130,bg(130)+man(80,106,blu,1)+phone(80,46)+man(320,106,grn,1)+phone(320,46)+tx(200,70,['A B C ?','↻ ?','0 5 5 6 ?'][s.i],{fs:22,c:red})),
  ask:s=>s.i===2?{q:['55 نقرؤها:','55 is read:'],opts:['double five','fifty-five'],a:'double five'}:null,
  out:s=>{const p=SP[s.i];return{t:S(`x:${p[0]}|q:—|n:${p[1]}`),ar:p[2],why:['تأكد قبل ما تسكّر.','Check before you hang up.']}}},
 think:[['ما سمعت زين؟ ← اطلب الإعادة أو التهجئة.','Not clear? → ask to repeat or spell.']]};

/* ===== الوحدة 8 ===== */
const OR=[['Customer',"I'd like to place an order, please.",'أود أن أقدّم طلباً.'],['Customer',"I'd like to order 30 lab coats.",'أود أن أطلب 30 معطف مختبر.'],['Customer','How much are they?','كم سعرها؟'],['Seller','SAR 45 each.','45 ريالاً للواحد.'],['Seller','Can I just check your order?','هل أراجع طلبك؟'],['Seller',"We'll send the goods immediately.",'سنرسل البضاعة فوراً.']];
NH['تقديم الطلب']={
 say:[`مكالمة الطلب تمشي بخطوات ثابتة: البداية ← الكمية ← السعر ← مراجعة البائع ← وعده بالإرسال. و ${E('each')} = للواحدة: ${E('SAR 45 each')}.`,
  `Start → quantity → price → check → promise. ${E('each')} = for one.`],
 life:[['They are ten riyals each.','سعر الواحدة عشرة ريالات.']],
 scene:{title:['مكالمة الطلب','The order call'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,6,1],init:1}],
  svg:s=>{const c=OR[s.i-1][0]==='Customer';return svg(130,bg(130)+man(70,92,blu,1)+phone(70,30)+man(330,92,grn,1)+phone(330,30)+tx(70,126,'customer',{fs:11,c:c?red:gry})+tx(330,126,'seller',{fs:11,c:c?gry:red})+[0,1,2,3,4,5].map(i=>ci(140+i*24,64,8,i<s.i?blu:'#d8dee2')).join(''))},
  ask:s=>s.i===4?{q:['each يعني:','each means:'],opts:['for one','for all'],a:'for one'}:null,
  out:s=>{const o=OR[s.i-1];return{t:S(`q:${o[0]}:|k:${o[1]}`),say:o[1],ar:o[2],why:['خطوات ثابتة بالترتيب.','Fixed steps in order.']}}},
 think:[['البداية، الكمية، السعر، المراجعة، الإرسال.','Start, quantity, price, check, send.']]};

const CN={coats:['lab coats',1,'معاطف'],paper:['paper',0,'ورق'],money:['money',0,'مال'],pens:['pens',1,'أقلام'],time:['time',0,'وقت']};
NH['المعدود وغير المعدود والكميات']={
 say:[`قبل ما تسأل عن الكمية: تقدر تعدّه؟ ${E('one coat, two coats')} ← معدود ← ${E('How many')}. ما تقدر تعدّه (ورق، فلوس، وقت) ← غير معدود ← ${E('How much')}، وما نحط قبله ${E('a')} ولا رقم.`,
  `Countable → ${E('How many')}. Uncountable (paper, money, time) → ${E('How much')}.`],
 life:[['How much water do you drink?','كم كمية الماء التي تشربها؟']],
 scene:{title:['نعدّه ولا لا؟','Can we count it?'],
  ctrl:[{k:'n',label:['الاسم','Noun'],opts:Object.keys(CN).map(k=>[k,CN[k][0]])}],
  svg:s=>{let b=bg(130);const c=CN[s.n][1];if(c)for(let i=0;i<4;i++)b+=rc(110+i*48,40,36,56,s.n==='pens'?blu:'#fff',{st:ink,rx:s.n==='pens'?10:4})+tx(128+i*48,114,String(i+1),{fs:13,c:red});else b+=`<ellipse cx="200" cy="70" rx="90" ry="34" fill="${s.n==='paper'?'#fff':s.n==='money'?'#cfe7c4':'#d8dee2'}" stroke="${ink}"/>`+tx(200,76,'?',{fs:26,c:red});return svg(130,b)},
  ask:s=>({q:['How many ولا How much؟','How many or How much?'],opts:['How many','How much'],a:CN[s.n][1]?'How many':'How much'}),
  out:s=>{const c=CN[s.n];return{t:S(`x:How ${c[1]?'many':'much'}|n:${c[0]}|q:do you need?`),ar:`كم ${c[2]} تحتاج؟`,why:c[1]?['نعدّه ← How many + جمع','Countable → How many']:['ما نعدّه ← How much','Uncountable → How much']}}},
 think:[['أقدر أقول واحد، اثنين؟ ← many. ما أقدر؟ ← much.','Can I count it? → many. No → much.']]};

NH['قراءة الفاتورة']={
 say:[`الفاتورة سطور: الكمية ${E('quantity')} × سعر القطعة ${E('price / item')} = ${E('goods total')}، ثم ينقص الخصم ${E('discount')}، ثم تنزاد الضريبة ${E('VAT')}، والنهاية ${E('grand total')}. نسبة الضريبة هنا قيمة توضيحية قابلة للتغيير.`,
  `quantity × price = goods total − discount + VAT = grand total.`],
 life:[["What's the grand total?",'كم الإجمالي النهائي؟']],
 scene:{title:['احسب الفاتورة','Work out the invoice'],
  ctrl:[{k:'q',label:['الكمية','Quantity'],range:[10,50,10],init:30},{k:'d',label:['الخصم %','Discount %'],opts:[[0,'0%'],[10,'10%']]}],
  svg:s=>{const gt=s.q*45,dc=gt*s.d/100,v=Math.round((gt-dc)*0.15*100)/100,tot=Math.round((gt-dc+v)*100)/100;const R_=[['quantity',s.q],['price / item','SAR 45'],['goods total',gt],['discount',dc],['VAT 15%',v],['grand total',tot]];let b=bg(190)+rc(60,8,280,174,'#fff',{st:ink,rx:6});R_.forEach((r,i)=>{b+=tx(150,32+i*27,r[0],{fs:13,c:i===5?red:ink})+tx(280,32+i*27,String(r[1]),{fs:13,c:i===5?red:blu})});return svg(190,b)},
  ask:s=>({q:['goods total = ؟','goods total = ?'],opts:[String(s.q*45),String(s.q+45),String(s.q*45*2)],a:String(s.q*45)}),
  out:s=>{const gt=s.q*45;return{t:S(`n:${s.q} lab coats|q:at|n:SAR 45 each|x:=|k:SAR ${gt}`),say:`${s.q} lab coats at SAR 45 each = SAR ${gt}.`,ar:'',why:['الكمية × سعر القطعة.','Quantity × price per item.']}}},
 think:[['الكمية × السعر، ثم الخصم، ثم الضريبة.','Quantity × price, then discount, then VAT.']]};

const PB=[['Complaint',"I ordered ten fluorescent lights but I've got twenty.",'الشكوى'],['Apology',"Oh, I'm sorry about that.",'الاعتذار'],['Action',"I'll check that and send you a new invoice.",'الإجراء'],['Response',"Thank you. That's very helpful.",'الرد']];
NH['مراحل حل المشكلة']={
 say:[`مكالمة الشكوى الناجحة أربع مراحل بالترتيب: الزبون يشتكي ← الموظف يعتذر ← الموظف يقول وش بيسوي ← الزبون يشكره. لو نقصت مرحلة، تحس المكالمة ناقصة.`,
  `Complaint → apology → action → response.`],
 life:[["I'm sorry about that. I'll fix it now.",'أعتذر عن ذلك. سأصلحه الآن.']],
 scene:{title:['أربع مراحل','Four stages'],
  ctrl:[{k:'i',label:['المرحلة','Stage'],range:[1,4,1],init:1}],
  svg:s=>{let b=bg(110);PB.forEach((p,i)=>{b+=rc(20+i*96,30,86,44,i===s.i-1?red:'#fff',{st:ink,rx:8})+tx(63+i*96,57,p[0],{fs:11,c:i===s.i-1?'#fff':ink})+(i<3?ar(106+i*96,52,116+i*96,52,ink,2):'')});return svg(110,b)},
  ask:s=>({q:['المرحلة:','The stage:'],opts:PB.map(p=>p[0]),a:PB[s.i-1][0]}),
  out:s=>{const p=PB[s.i-1];return{t:S(`x:${p[0]}:|k:${p[1]}`),say:p[1],ar:p[2],why:['أربع مراحل بالترتيب.','Four stages in order.']}}},
 think:[['شكوى، اعتذار، إجراء، رد.','Complaint, apology, action, response.']]};

const PF={order:['ordered','order','ed'],promise:['promised','promise','d'],send:["I'll send",'send','will'],give:["We'll give",'give','will']};
NH['الماضي البسيط والمستقبل البسيط']={
 say:[`في الشكوى نحتاج زمنين: اللي صار وخلص (الطلب) ← الماضي ${E('ed')}: ${E('I ordered …')} واللي بنسويه، قرار الحين ← ${E("will / 'll")} والفعل كما هو: ${E("I'll send another one.")}`,
  `What happened → past ${E('ed')}. A decision now → ${E("will / 'll")} + verb.`],
 life:[['I called you yesterday.','اتصلت بك أمس.'],["I'll call you tomorrow.",'سأتصل بك غداً.']],
 scene:{title:['صار ولا بيصير؟','Happened or will happen?'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(PF).map(k=>[k,k])}],
  svg:s=>{const past=PF[s.v][2]!=='will';return svg(110,bg(110)+ln(40,60,360,60,ink,3)+ci(200,60,8,ink)+tx(200,90,'now',{fs:12})+ci(past?110:290,60,12,past?blu:grn)+tx(past?110:290,36,past?'past':'future',{fs:13,c:past?blu:grn}))},
  ask:s=>{const p=PF[s.v];return p[2]==='will'?{q:['بعد will:','After will:'],opts:[p[1],p[1]+'s',p[1]+'ed'],a:p[1]}:{q:['الماضي:','The past:'],opts:[p[0],p[1]+'ed'===p[0]?p[1]+'d':p[1]+'ed'],a:p[0]}},
  out:s=>{const p=PF[s.v];if(s.v==='order')return{t:S('a:I|k:order'+R('ed')+'|n:ten lights.'),say:'I ordered ten lights.',ar:'طلبت عشرة مصابيح.',why:['انتهى ← ed','Finished → ed']};if(s.v==='promise')return{t:S('a:You|k:promise'+R('d')+'|n:next-day delivery.'),say:'You promised next-day delivery.',ar:'وعدتم بالتوصيل في اليوم التالي.',why:['آخره e ← d','Ends in e → d']};return{t:S(`x:${p[0]}|k:${p[1]}|n:${s.v==='send'?'another one.':'you your money back.'}`),ar:'',why:["قرار الحين ← 'll + الفعل","A decision now → 'll + verb"]}}},
 think:[['صار وخلص ← ed. أقرر الحين ← will.','Finished → ed. Deciding now → will.']]};

/* ===== الوحدة 9 ===== */
const BQ=[['When would you like to stay?','From the 20th until the 22nd.','متى تود الإقامة؟'],['Would you like a single or a double room?','A single, please.','غرفة مفردة أم مزدوجة؟'],['May I have your name, please?',"It's Paul Grant.",'ما اسمك لو سمحت؟'],['How do you want to pay?','By credit card.','كيف تريد الدفع؟'],['Can I confirm your booking?','Yes, please.','هل أؤكد حجزك؟']];
NH['أسئلة موظف الحجز']={
 say:[`موظف الحجز يسأل نفس الأسئلة بنفس الترتيب: التاريخ ← نوع الغرفة ← الاسم ← طريقة الدفع ← التأكيد. اعرفها قبل ما تتصل، وجهّز أجوبتك.`,
  `Date → room → name → payment → confirm.`],
 life:[['A double room, please.','غرفة مزدوجة لو سمحت.']],
 scene:{title:['الحجز','The booking'],
  ctrl:[{k:'i',label:['السؤال','Question'],range:[1,5,1],init:1}],
  svg:s=>svg(130,bg(130)+rc(250,60,120,50,'#a7744a',{rx:4})+man(310,56,grn,0.9)+man(80,108,blu,1)+bub(100,10,210,34,BQ[s.i-1][0].length>34?BQ[s.i-1][0].slice(0,32)+'…':BQ[s.i-1][0],{fs:11})),
  ask:s=>({q:['أنسب جواب:','Best answer:'],opts:BQ.map(b=>b[1]),a:BQ[s.i-1][1]}),
  out:s=>{const b=BQ[s.i-1];return{t:S(`q:${b[0]}|q:—|n:${b[1]}`),ar:b[2],why:['أسئلة ثابتة بالترتيب.','Fixed questions in order.']}}},
 think:[['جهّز: التاريخ، الغرفة، الاسم، الدفع.','Prepare: date, room, name, payment.']]};

NH['want to و would like to']={
 say:[`الاثنين رغبة، بس ${E('would like to')} ألطف، فنستعملها مع اللي ما نعرفه (موظف، ضيف). و ${E('want to')} مباشرة، مع الأصحاب أو في السؤال العادي. وبعدهم الفعل كما هو.`,
  `${E('would like to')} is more polite (strangers); ${E('want to')} is direct.`],
 life:[['I want to sleep.','أريد أن أنام.'],["I'd like to see the manager, please.",'أود مقابلة المدير لو سمحت.']],
 scene:{title:['مع مين تتكلم؟','Who are you talking to?'],
  ctrl:[{k:'w',label:['مع','With'],opts:[['clerk',['موظف الحجز','booking clerk']],['friend',['صديق','friend']]]}],
  svg:s=>svg(130,bg(130)+grd(122)+man(110,92,blu,1)+(s.w==='clerk'?rc(230,64,120,30,'#a7744a',{rx:3})+man(290,60,grn,0.9):man(290,92,'#5d7f96',1)+tx(290,30,'☺',{fs:22,c:grn}))),
  ask:s=>({q:['أنسب:','Better:'],opts:["I'd like to",'I want to'],a:s.w==='clerk'?"I'd like to":'I want to'}),
  out:s=>s.w==='clerk'?{t:S("x:I'd like to|k:book|n:a flight."),say:"I'd like to book a flight.",ar:'أود أن أحجز رحلة.',why:['شخص ما أعرفه ← ألطف','A stranger → more polite']}:{t:S('x:I want to|k:fly|n:on May the 13th.'),ar:'أريد أن أسافر في 13 مايو.',why:['مباشر ← want to','Direct → want to']}},
 think:[['ما أعرفه ← would like to. أعرفه ← want to.','A stranger → would like to. A friend → want to.']]};

const DT=[[13,'thirteenth','May'],[22,'twenty-second','June'],[1,'first','March'],[3,'third','April'],[20,'twentieth','July']];
NH['التاريخ في الكلام']={
 say:[`بالكلام نقول اليوم بالعدد الترتيبي مع ${E('the')}، وفيه طريقتين: ${E('May the 13th')} أو ${E('the 13th of May')}. والمدة: ${E('from … until …')}`,
  `Ordinal with the: ${E('May the 13th')} or ${E('the 13th of May')}.`],
 life:[['My exam is on the 3rd of June.','اختباري في الثالث من يونيو.']],
 scene:{title:['قل التاريخ','Say the date'],
  ctrl:[{k:'i',label:['التاريخ','Date'],opts:DT.map((d,i)=>[i,d[0]+' '+d[2]])},{k:'f',label:['الطريقة','Way'],opts:[['a','May the 13th'],['b','the 13th of May']]}],
  svg:s=>{const d=DT[s.i];return svg(140,bg(140)+rc(140,14,120,116,'#fff',{st:ink,rx:8})+rc(140,14,120,30,red,{rx:6})+tx(200,36,d[2].toUpperCase(),{fs:13,c:'#fff'})+tx(200,100,d[0],{fs:42}))},
  ask:s=>({q:['نقرأ اليوم:','We say:'],opts:[DT[s.i][1],String(DT[s.i][0])],a:DT[s.i][1]}),
  out:s=>{const d=DT[s.i];return s.f==='a'?{t:S(`q:On|n:${d[2]}|x:the ${d[1]}.`),ar:'',why:['الشهر، ثم the والترتيبي.','Month, then the + ordinal.']}:{t:S(`q:On|x:the ${d[1]}|q:of|n:${d[2]}.`),ar:'',why:['the والترتيبي، ثم of والشهر.','the + ordinal, then of + month.']}}},
 think:[['اليوم بالترتيبي، ومعه the.','The day as an ordinal with the.']]};

const CR={picanto:['The Picanto','cheap','cheaper','the cheapest'],camry:['The Camry','comfortable','more comfortable','the most comfortable'],best:['The Accent','good','better','the best']};
NH['المقارنة والتفضيل']={
 say:[`بين شيئين ← المقارنة ${E('er / more')} + ${E('than')}. من ثلاثة أو أكثر وتختار الأعلى ← التفضيل ${E('the … est / the most')}. ومع التفضيل لازم ${E('the')}.`,
  `Two things → ${E('er / more … than')}. Three or more → ${E('the … est / the most')}.`],
 life:[['This is the best restaurant in town.','هذا أفضل مطعم في المدينة.']],
 scene:{title:['كم سيارة؟','How many cars?'],
  ctrl:[{k:'c',label:['الصفة','Adjective'],opts:Object.keys(CR).map(k=>[k,CR[k][1]])},{k:'n',label:['العدد','Number'],opts:[['2',['سيارتان','two cars']],['3',['ثلاث','three cars']]]}],
  svg:s=>{let b=bg(120)+grd(110);const n=+s.n;for(let i=0;i<n;i++){const x=200-(n-1)*65+i*130;b+=rc(x-45,64,90,30,[red,blu,grn][i],{rx:10})+rc(x-28,48,52,20,[red,blu,grn][i],{rx:6})+wh(x-26,98,10)+wh(x+26,98,10)}return svg(120,b)},
  ask:s=>({q:['المقارنة ولا التفضيل؟','Comparative or superlative?'],opts:[CR[s.c][2],CR[s.c][3]],a:s.n==='2'?CR[s.c][2]:CR[s.c][3]}),
  out:s=>{const c=CR[s.c];return s.n==='2'?{t:S(`a:${c[0]}|q:is|x:${c[2]}|q:than|n:the Elantra.`),ar:'',why:['شيئان ← مقارنة + than','Two → comparative + than']}:{t:S(`a:${c[0]}|q:is|x:${c[3]}|n:car.`),ar:'',why:['ثلاثة أو أكثر ← the + تفضيل','Three or more → the + superlative']}}},
 think:[['شيئان ← than. ثلاثة فأكثر ← the … est.','Two → than. Three or more → the … est.']]};

NH['كتابة التاريخ وقراءته']={
 say:[`نفس الأرقام ممكن تعني تاريخين! بريطانيا: يوم/شهر، وأمريكا: شهر/يوم. فـ ${E('8/3/05')} في بريطانيا 8 مارس، وفي أمريكا 3 أغسطس. وإذا الرقم الأول أكبر من 12 فأكيد بريطاني (ما فيه شهر 23).`,
  `UK: day/month. US: month/day. If the first number is over 12, it's British.`],
 life:[['Write the date like this: 05/11/2026.','اكتب التاريخ هكذا.']],
 scene:{title:['بريطاني ولا أمريكي؟','British or American?'],
  ctrl:[{k:'d',label:['التاريخ','Date'],opts:[['8/3/05','8/3/05'],['23/09/07','23/09/07'],['4/7/10','4/7/10']]},{k:'c',label:['البلد','Country'],opts:[['uk','UK'],['us','US']]}],
  svg:s=>svg(110,bg(110)+rc(110,24,180,56,'#fff',{st:ink,rx:8})+tx(200,62,s.d,{fs:26,c:blu})+tx(200,100,s.c==='uk'?'day / month':'month / day',{fs:13,c:red})),
  ask:s=>{const [a,b]=s.d.split('/').map(Number);const imp=s.c==='us'&&b>12||s.c==='us'&&a>12;return imp?{q:['ممكن يكون أمريكي؟','Can it be American?'],opts:['no','yes'],a:'no'}:null},
  out:s=>{const M=['','January','February','March','April','May','June','July','August','September','October','November','December'],O=['','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth'];const [a,b,y]=s.d.split('/').map(Number);const yr=y<10?'two thousand and '+['','one','two','three','four','five','six','seven','eight','nine'][y]:'two thousand and ten';const dd=n=>n<=12?O[n]:n===23?'twenty-third':String(n);if(s.c==='us'&&a>12)return{t:S('x:Not possible:|n:there is no month 23.'),ar:'غير ممكن: لا يوجد شهر 23.',why:['أول رقم أكبر من 12 ← بريطاني','First number over 12 → British']};return s.c==='uk'?{t:S(`x:the ${dd(a)} of ${M[b]},|n:${yr}`),ar:'',why:['يوم / شهر','day / month']}:{t:S(`x:${M[a]} the ${dd(b)},|n:${yr}`),ar:'',why:['شهر / يوم','month / day']}}},
 think:[['أول رقم أكبر من 12؟ ← بريطاني أكيد.','First number over 12? → British.']]};

/* ===== الوحدة 10 ===== */
const DR=[['Turn left.','انعطف يساراً.'],['Take the second right.','خذ ثاني شارع يميناً.'],['Go straight on for ten minutes.','امشِ مستقيماً عشر دقائق.'],["You'll see our office on the left.",'سترى مكتبنا على اليسار.']];
NH['السؤال والاتجاهات']={
 say:[`السؤال: ${E('How do I get to …?')} والوصف سلسلة تعليمات قصيرة تبدأ بالفعل ${E('Turn · Take · Go')}، وفي الآخر معلم يشوفه الزائر: ${E("You'll see our office on the left.")} وانتبه: ${E('a twenty-minute walk')} بدون ${E('s')} لأنها صفة.`,
  `Short instructions that start with the verb, then a landmark.`],
 life:[['How do I get to the station?','كيف أصل إلى المحطة؟']],
 scene:{title:['الطريق','The route'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,4,1],init:1}],
  svg:s=>{let b=bg(170)+rc(185,0,30,170,'#c9d1d6')+rc(0,110,400,24,'#c9d1d6')+rc(0,40,400,24,'#c9d1d6');const P=[[200,160,200,122,90,122],[90,122,90,52,0,0],[90,52,20,52,0,0],[20,52,20,52,0,0]];const path=['M200 160 V122 H90','M200 160 V122 H90 V52','M200 160 V122 H90 V52 H30','M200 160 V122 H90 V52 H30'][s.i-1];b+=`<path d="${path}" stroke="${red}" stroke-width="5" fill="none" stroke-dasharray="8 5"/>`+man(200,160,blu,0.5);if(s.i===4)b+=rc(10,6,40,30,grn,{st:ink,rx:3})+tx(30,26,'office',{fs:9,c:'#fff'});return svg(170,b)},
  ask:()=>({q:['التعليمة تبدأ بـ:','It starts with:'],opts:['the verb','You'],a:'the verb'}),
  out:s=>{const d=DR[s.i-1];return{t:S(`k:${d[0]}`),ar:d[1],why:['فعل، ثم مكان.','Verb, then place.']}}},
 think:[['ابدأ بالفعل، واختم بمعلم يشوفه.','Start with the verb; end with a landmark.']]};

const MT={by:['by train','بالقطار'],bus:['by bus','بالحافلة'],car:['by car','بالسيارة'],foot:['on foot','سيراً على الأقدام']};
NH['المترو والقطار ووسائل النقل']={
 say:[`في المترو تحتاج: أي خط واتجاهه ${E('northbound')}، ووين تغيّر ${E('Change at …')}، ووين تنزل ${E('Get off at …')}. والوسيلة بـ ${E('by')} بدون ${E('the')}: ${E('by train')}، إلا المشي: ${E('on foot')}.`,
  `Line + direction, ${E('Change at')}, ${E('Get off at')}. ${E('by train / by bus')}, but ${E('on foot')}.`],
 life:[['I go to work by car.','أذهب إلى العمل بالسيارة.']],
 scene:{title:['كيف تروح؟','How do you go?'],
  ctrl:[{k:'m',label:['الوسيلة','Transport'],opts:Object.keys(MT).map(k=>[k,MT[k][0]])}],
  svg:s=>{let b=bg(120)+grd(110);if(s.m==='by')b+=rc(80,50,240,40,'#5d7f96',{rx:10})+[100,140,180,220,260].map(x=>rc(x,58,26,14,'#cfe3f0',{rx:2})).join('');if(s.m==='bus')b+=rc(110,40,180,54,yel,{st:ink,rx:8})+wh(140,98,10)+wh(260,98,10);if(s.m==='car')b+=rc(140,62,120,30,red,{rx:10})+rc(160,46,70,20,red,{rx:6})+wh(165,96,10)+wh(235,96,10);if(s.m==='foot')b+=man(200,92,blu,1.1);return svg(120,b)},
  ask:s=>({q:['الحرف:','The preposition:'],opts:['by','on','by the'],a:s.m==='foot'?'on':'by'}),
  out:s=>({t:S(`q:I go to work|x:${MT[s.m][0]}.`),ar:`أذهب إلى العمل ${MT[s.m][1]}.`,why:s.m==='foot'?['المشي ← on foot','Walking → on foot']:['by بدون the','by without the']})},
 think:[['مركبة ← by. مشي ← on foot.','A vehicle → by. Walking → on foot.']]};

const RC=[['Visitor',"Good morning. My name's Edward Sullivan from Red Sea Foods.",'الزائر يعرّف بنفسه.'],['Visitor',"I'm here to see Ms Helen Allen.",'يذكر من جاء ليقابله.'],['Receptionist','Do you have an appointment?','الموظف يسأل عن الموعد.'],['Visitor',"Yes, at 2 o'clock.",'الزائر يذكر الموعد.'],['Receptionist',"One moment, please. Please take a seat.",'الموظف يطلب الانتظار.']];
NH['في الاستقبال']={
 say:[`توصل للاستقبال: عرّف بنفسك وشركتك ← قل مين جاي تقابله ${E("I'm here to see …")} ← وموعدك. والموظف يسأل ويتصل ويقول لك تنتظر: ${E('Please take a seat.')}`,
  `Name and company → ${E("I'm here to see …")} → appointment. The receptionist: ${E('Please take a seat.')}`],
 life:[["I'm here to see Dr Ahmed.",'جئت لمقابلة الدكتور أحمد.']],
 scene:{title:['الاستقبال','Reception'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,5,1],init:1}],
  svg:s=>{const v=RC[s.i-1][0]==='Visitor';return svg(130,bg(130)+rc(230,60,140,50,'#a7744a',{rx:4})+man(300,56,grn,0.9)+man(90,94,blu,1)+tx(v?90:300,127,v?'visitor':'receptionist',{fs:11,c:red}))},
  ask:s=>s.i===2?{q:['جاي تقابله:','To meet someone:'],opts:["I'm here to see",'I came for see'],a:"I'm here to see"}:null,
  out:s=>{const r=RC[s.i-1];return{t:S(`q:${r[0]}:|k:${r[1]}`),say:r[1],ar:r[2],why:['عبارات ثابتة.','Fixed phrases.']}}},
 think:[["اسمي وشركتي، ثم I'm here to see …","Name and company, then I'm here to see …"]]};

const MH=[["Hello. I'm Tony Shaw.",'Hello. Paul Grant. Nice to meet you.','التعارف'],["Here's my business card.","Oh, thank you. Here's mine.",'تبادل البطاقات'],['Did you have a good journey?','Yes, thank you.','سؤال يفتح الحديث']];
NH['لقاء المضيف']={
 say:[`ينزل المضيف: تتعارفون ← تتبادلون بطاقات العمل ← يسألك سؤال بسيط يفتح الحديث. و ${E('mine')} = حقّي، بدل ما تكرر ${E('my business card')}.`,
  `Introduce → exchange cards (${E("Here's mine.")}) → a simple question.`],
 life:[["This is my pen. Where's yours?",'هذا قلمي. أين قلمك؟']],
 scene:{title:['لقاء المضيف','Meeting the host'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,3,1],init:1}],
  svg:s=>svg(140,bg(140)+grd(130)+man(130,100,blu,1)+man(270,100,grn,1)+(s.i===2?rc(160,70,22,14,'#fff',{st:ink,rx:2})+rc(218,70,22,14,'#fff',{st:ink,rx:2}):'')),
  ask:s=>s.i===2?{q:["mine = ؟",'mine = ?'],opts:['my card','your card'],a:'my card'}:null,
  out:s=>{const m=MH[s.i-1];return{t:S(`q:${m[0]}|q:—|n:${m[1]}`),ar:m[2],why:s.i===2?['mine بدل my card','mine = my card']:['خطوة ثابتة.','A fixed step.']}}},
 think:[['تعارف، بطاقات، سؤال.','Introduce, cards, a question.']]};

/* ===== الوحدة 11 ===== */
const PSt={launch:['launch','launched','reg','In 1992, the company launched its first phone.'],move:['move','moved','e','In 2001, they moved to Riyadh.'],meet:['meet','met','irr','In 1990, the two engineers met.'],build:['build','built','irr','In 2005, they built a new factory.'],sell:['sell','sold','irr','In 2010, they sold one million phones.']};
NH['الماضي البسيط']={
 say:[`تاريخ الشركة أحداث صارت وخلصت ← الماضي البسيط. المنتظم نزيد ${E('ed')} (وإذا آخره ${E('e')} نزيد ${E('d')})، والشاذ له شكل خاص ينحفظ: ${E('meet → met')}. والماضي واحد مع كل الضمائر، ومع السنة ${E('in')}.`,
  `Regular → ${E('ed')}; irregular → learn it. Same for all pronouns. Year → ${E('in')}.`],
 life:[['I moved to Riyadh in 2020.','انتقلت إلى الرياض عام 2020.']],
 scene:{title:['تاريخ الشركة',"The company's history"],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(PSt).map(k=>[k,k])}],
  svg:s=>{let b=bg(110)+ln(30,60,370,60,ink,3);const Y=[1990,1992,2001,2005,2010];const yy=+PSt[s.v][3].match(/\d{4}/)[0];Y.forEach((y,i)=>{b+=ci(60+i*70,60,y===yy?12:6,y===yy?red:ink)+tx(60+i*70,92,String(y),{fs:12,c:y===yy?red:gry})});return svg(110,b)},
  ask:s=>({q:['الماضي:','The past:'],opts:[PSt[s.v][1],s.v+(s.v.endsWith('e')?'d':'ed')].filter((v,i,a)=>a.indexOf(v)===i).concat(PSt[s.v][2]==='reg'||PSt[s.v][2]==='e'?[s.v+'s']:[]),a:PSt[s.v][1]}),
  out:s=>{const p=PSt[s.v];return{t:S(`k:${p[3]}`),ar:'',why:p[2]==='irr'?[`شاذ: ${p[0]} ← ${p[1]}`,`Irregular: ${p[0]} → ${p[1]}`]:p[2]==='e'?['آخره e ← d','Ends in e → d']:['منتظم ← ed','Regular → ed']}}},
 think:[['منتظم ← ed. شاذ ← أحفظه.','Regular → ed. Irregular → learn it.']]};

const CH={up:['rose','from $1.3 million','to $1.7 million','ارتفع الربح'],down:['fell','from $1.7 million','to $1.2 million','انخفض الربح']};
NH['أفعال التغيير']={
 say:[`أرقام الشركة طلعت ولا نزلت؟ طلوع ← ${E('increase / rise / go up')}، ونزول ← ${E('decrease / fall / go down')}. ومع الأرقام: ${E('from … to …')}. وانتبه للماضي الشاذ: ${E('rise → rose')}، ${E('fall → fell')}.`,
  `Up: ${E('increase / rise / go up')}. Down: ${E('decrease / fall / go down')}. ${E('from … to …')}`],
 life:[['Prices went up last year.','ارتفعت الأسعار العام الماضي.']],
 scene:{title:['الرسم البياني','The graph'],
  ctrl:[{k:'d',label:['الاتجاه','Direction'],opts:[['up',['ارتفاع','up']],['down',['انخفاض','down']]]}],
  svg:s=>{const up=s.d==='up';return svg(150,bg(150)+ln(60,130,360,130,ink,2)+ln(60,130,60,20,ink,2)+`<path d="M80 ${up?110:50} L330 ${up?40:120}" stroke="${up?grn:red}" stroke-width="5" fill="none"/>`+ci(80,up?110:50,6,ink)+ci(330,up?40:120,6,ink)+tx(110,up?128:40,up?'1.3':'1.7',{fs:12})+tx(330,up?30:142,up?'1.7':'1.2',{fs:12}))},
  ask:s=>({q:['الماضي:','The past:'],opts:['rose','fell','rised'],a:CH[s.d][0]}),
  out:s=>{const c=CH[s.d];return{t:S(`a:Profit|k:${c[0]}|x:${c[1]}|x:${c[2]}.`),ar:c[3]+'.',why:['from الرقم الأول، to الرقم الأخير.','from the first number, to the last.']}}},
 think:[['طلع ← rose. نزل ← fell. والأرقام بـ from … to.','Up → rose. Down → fell. from … to.']]};

const PT={pp:['The company','has closed','its factory.','',1],ps:['The factory','closed','','last month.',0],pp2:['They','have opened','a new office.','',1],ps2:['They','opened','a new office','in 2022.',0]};
NH['المضارع التام والماضي البسيط']={
 say:[`الاثنين عن شي صار. الفرق سؤال واحد: ذكرت متى؟ ذكرت وقت ماضي (${E('last month · in 2022 · ago')}) ← الماضي البسيط. ما ذكرت، والمهم إنه صار ← ${E('have / has')} + التصريف الثالث.`,
  `A past time word → past simple. No time, the result matters → ${E('have / has')} + past participle.`],
 life:[["I've lost my keys.",'أضعت مفاتيحي.'],['I lost my keys yesterday.','أضعت مفاتيحي أمس.']],
 scene:{title:['فيه وقت ولا لا؟','Is there a time?'],
  ctrl:[{k:'t',label:['الجملة','Sentence'],opts:[['pp',['بدون وقت','no time']],['ps',['last month','last month']],['pp2',['بدون وقت','no time']],['ps2',['in 2022','in 2022']]]}],
  svg:s=>{const p=PT[s.t];return svg(110,bg(110)+ln(40,60,360,60,ink,3)+ci(330,60,8,ink)+tx(330,90,'now',{fs:12})+(p[4]?`<path d="M120 60 Q225 10 330 60" stroke="${grn}" stroke-width="3" fill="none" stroke-dasharray="6 4"/>`+ci(120,60,10,grn):ci(150,60,10,blu)+tx(150,90,p[3].replace('.',''),{fs:12,c:blu})))},
  ask:s=>({q:['أي زمن؟','Which tense?'],opts:['present perfect','past simple'],a:PT[s.t][4]?'present perfect':'past simple'}),
  out:s=>{const p=PT[s.t];return{t:S(`a:${p[0]}|k:${p[1]}${p[2]?'|n:'+p[2]:''}${p[3]?'|x:'+p[3]:''}`),ar:'',why:p[4]?['ما فيه وقت ← have / has + التصريف الثالث','No time → have / has + past participle']:['فيه وقت ماضي ← الماضي البسيط','A past time → past simple']}}},
 think:[['فيه yesterday / last / ago / in 2022؟ ← الماضي البسيط.','A past time word? → past simple.']]};

const AJ={just:['They','\'ve just','installed','new software.','للتو'],already:['The company','has already','recruited','ten new staff.','بالفعل'],yetn:['They','haven\'t','opened','the office yet.','بعد'],yetq:['Have they','','changed','their logo yet?','حتى الآن؟']};
NH['already · just · yet']={
 say:[`ثلاث كلمات مع المضارع التام، كل وحدة لها مكان: ${E('just')} (للتو) و ${E('already')} (بالفعل، أسرع من المتوقع) ← بين ${E('have')} والتصريف الثالث. و ${E('yet')} في النفي والسؤال ← آخر الجملة.`,
  `${E('just / already')} between have and the participle; ${E('yet')} at the end of negatives and questions.`],
 life:[["I've just finished my homework.",'أنهيت واجبي للتو.'],["I haven't eaten yet.",'لم آكل بعد.']],
 scene:{title:['وين تروح الكلمة؟','Where does the word go?'],
  ctrl:[{k:'w',label:['الكلمة','Word'],opts:[['just','just'],['already','already'],['yetn','yet (not)'],['yetq','yet (?)']]}],
  svg:s=>{const mid=s.w==='just'||s.w==='already';let b=bg(100);['have','___','done','…'].forEach((w,i)=>{b+=rc(40+i*84,30,74,36,(mid&&i===1)||(!mid&&i===3)?'#fff3c7':'#fff',{st:ink,rx:6})+tx(77+i*84,54,w,{fs:13})});return svg(100,b)},
  ask:s=>({q:['مكانها:','Its place:'],opts:['middle','end'],a:s.w==='just'||s.w==='already'?'middle':'end'}),
  out:s=>{const a=AJ[s.w];const yet=s.w.startsWith('yet');return{t:S(`a:${a[0]}|x:${a[1]||' '}|k:${a[2]}|n:${a[3]}`.replace('|x: ','')),say:`${a[0]}${a[1]?(a[1].startsWith("'")?'':' ')+a[1]:''} ${a[2]} ${a[3]}`,ar:'',why:yet?['yet في الآخر','yet at the end']:[`${s.w} بين have والتصريف الثالث`,`${s.w} between have and the participle`]}}},
 think:[['just / already ← النص. yet ← الآخر.','just / already → middle. yet → end.']]};

const LK={and:['and','إضافة'],but:['but','عكس'],so:['so','نتيجة'],because:['because','سبب']};
const LKS={and:['Sales have increased,','and','profit has gone up.'],but:['Sales have increased,','but','profit has gone down.'],so:['Sales have increased,','so','they have recruited new staff.'],because:['They have recruited new staff','because','sales have increased.']};
NH['الربط']={
 say:[`تربط جملتين؟ اختر الأداة حسب العلاقة: إضافة ← ${E('and')}، عكس ← ${E('but')}، نتيجة ← ${E('so')} (لذلك)، سبب ← ${E('because')} (لأن). وانتبه: ${E('so')} قبل النتيجة، و ${E('because')} قبل السبب.`,
  `${E('and')} add · ${E('but')} contrast · ${E('so')} result · ${E('because')} reason.`],
 life:[["I was tired, so I went to bed.",'كنت متعباً، لذلك نمت.']],
 scene:{title:['وش العلاقة؟',"What's the link?"],
  ctrl:[{k:'l',label:['العلاقة','Link'],opts:Object.keys(LK).map(k=>[k,LK[k][1]])}],
  svg:s=>svg(110,bg(110)+rc(30,30,140,44,'#dceaf6',{st:ink,rx:8})+rc(230,30,140,44,'#dceaf6',{st:ink,rx:8})+rc(172,40,56,24,red,{rx:12})+tx(200,57,LK[s.l][0],{fs:12,c:'#fff'})),
  ask:s=>({q:['الأداة:','The link word:'],opts:Object.keys(LK),a:s.l}),
  out:s=>{const l=LKS[s.l];return{t:S(`n:${l[0]}|x:${l[1]}|n:${l[2]}`),ar:'',why:[`${LK[s.l][1]} ← ${s.l}`,s.l]}}},
 think:[['so قبل النتيجة، because قبل السبب.','so before the result; because before the reason.']]};

/* ===== الوحدة 12 ===== */
const RT={up:['get up','at 6.30','يستيقظ'],leave:['leave home','at 7.15','يغادر البيت'],work:['get to work','at 8.00','يصل إلى العمل'],lunch:['have lunch','at 1.00','يتناول الغداء'],home:['get home','at 5.00','يصل إلى البيت']};
NH['أفعال الروتين']={
 say:[`يومك كله أفعال تمشي مع كلمات معيّنة: ${E('get up · leave home · get to work · have lunch · get home')}. وانتبه: ${E('get to work')} لكن ${E('get home')} بدون ${E('to')}.`,
  `${E('get to work')} but ${E('get home')} (no to).`],
 life:[['I get home at four o\'clock.','أصل إلى البيت الساعة الرابعة.']],
 scene:{title:['يومك','Your day'],
  ctrl:[{k:'r',label:['الفعل','Verb'],opts:Object.keys(RT).map(k=>[k,RT[k][0]])}],
  svg:s=>{const r=RT[s.r];const h=+r[1].match(/\d+/)[0],m=+(r[1].split('.')[1]);return svg(140,bg(140)+clock(110,70,50,h,m)+tx(280,76,r[0],{fs:18,c:blu}))},
  ask:s=>s.r==='home'?{q:['get … home:','get … home:'],opts:['get home','get to home'],a:'get home'}:null,
  out:s=>{const r=RT[s.r];return{t:S(`a:I|k:${r[0]}|x:${r[1]}.`),ar:`${r[2]} الساعة ${r[1].replace('at ','')}.`,why:s.r==='home'?['get home بدون to','get home — no to']:['احفظ الفعل مع كلمته.','Learn the verb with its word.']}}},
 think:[['get to work، لكن get home.','get to work, but get home.']]};

const T3={every:['Every Monday,','I leave home at seven.','present simple'],now:['Look!',"She's playing tennis.",'present continuous'],past:['Last Saturday,','I went shopping.','past simple']};
NH['ثلاثة أزمنة: الروتين والآن والماضي']={
 say:[`كلمة الوقت تدلّك على الزمن: كل يوم / كل اثنين ← المضارع البسيط. ${E('Look! · now')} ← المضارع المستمر (${E('am / is / are')} + ${E('ing')}). ${E('yesterday · last Saturday')} ← الماضي البسيط.`,
  `every … → present simple. Look! / now → present continuous. yesterday / last … → past simple.`],
 life:[['Every day I drink tea, but now I am drinking coffee.','كل يوم أشرب الشاي، لكني الآن أشرب القهوة.']],
 scene:{title:['كلمة الوقت','The time word'],
  ctrl:[{k:'t',label:['الوقت','Time'],opts:[['every','every Monday'],['now','Look!'],['past','last Saturday']]}],
  svg:s=>{let b=bg(110)+ln(40,60,360,60,ink,3)+ci(250,60,8,ink)+tx(250,90,'now',{fs:12});if(s.t==='every')for(let i=0;i<5;i++)b+=ci(60+i*70,60,9,blu);if(s.t==='now')b+=ci(250,60,14,red);if(s.t==='past')b+=ci(120,60,12,grn);return svg(110,b)},
  ask:s=>({q:['الزمن:','The tense:'],opts:['present simple','present continuous','past simple'],a:T3[s.t][2]}),
  out:s=>{const t=T3[s.t];return{t:S(`x:${t[0]}|k:${t[1]}`),ar:'',why:[t[2],t[2]]}}},
 think:[['كل يوم ← بسيط. الحين ← مستمر. أمس ← ماضي.','Every day → simple. Now → continuous. Yesterday → past.']]};

const FQ=[['always','100%','دائماً'],['usually','80%','عادةً'],['often','60%','غالباً'],['sometimes','40%','أحياناً'],['hardly ever','10%','نادراً جداً'],['never','0%','أبداً']];
NH['ظروف التكرار']={
 say:[`كم مرة تسويه؟ من ${E('always')} (دائماً) لين ${E('never')} (أبداً). ومكانه: قبل الفعل ${E('I usually take the train.')}، لكن بعد ${E('be')}: ${E("I'm never late.")} و ${E('never')} ما يجي معها ${E("don't")}.`,
  `Before the main verb; after be. No ${E("don't")} with never.`],
 life:[['I always drink water in the morning.','أشرب الماء دائماً في الصباح.']],
 scene:{title:['كم مرة؟','How often?'],
  ctrl:[{k:'f',label:['التكرار','Frequency'],range:[1,6,1],init:2},{k:'v',label:['الفعل','Verb'],opts:[['take',['فعل','verb']],['be',['be','be']]]}],
  svg:s=>{const f=FQ[s.f-1];const pc=+f[1].replace('%','');let b=bg(110)+rc(60,40,280,26,'#eef1f3',{st:ink,rx:13})+rc(60,40,280*pc/100,26,grn,{rx:13})+tx(200,96,f[1],{fs:16,c:red});return svg(110,b)},
  ask:s=>({q:['مكانه:','Its place:'],opts:['before the verb','after be'],a:s.v==='be'?'after be':'before the verb'}),
  out:s=>{const f=FQ[s.f-1];return s.v==='be'?{t:S(`a:I|k:'m|x:${f[0]}|n:late.`),say:`I'm ${f[0]} late.`,ar:`أنا ${f[2]} متأخر.`,why:['بعد be','After be']}:{t:S(`a:I|x:${f[0]}|k:take|n:the train.`),ar:`${f[2]} أركب القطار.`,why:['قبل الفعل','Before the verb']}}},
 think:[['قبل الفعل، وبعد be.','Before the verb; after be.']]};

const TB={sean:['Sean','always','drives to work','I','never do'],hours:['In the UK,','people','work the longest hours','','']};
NH['قراءة جدول والمقارنة']={
 say:[`تقرأ جدول؟ قارن أرقامه باللي تعلمته: شخصين عكس بعض ← ${E('but')}: ${E('Sean always drives to work, but I never do.')} وأعلى رقم في الجدول ← التفضيل ${E('the …est')}: ${E('people work the longest hours')}.`,
  `Two opposite people → ${E('but')}. The highest number → superlative.`],
 life:[['My brother always gets up early, but I never do.','أخي يستيقظ دائماً مبكراً، لكنني لا أفعل أبداً.']],
 scene:{title:['ساعات العمل','Working hours'],
  ctrl:[{k:'c',label:['البلد','Country'],opts:[['uk','UK'],['fr','France'],['de','Germany']]}],
  svg:s=>{const H={uk:43,fr:38,de:40};let b=bg(150)+ln(60,130,360,130,ink,2);Object.keys(H).forEach((k,i)=>{const h=(H[k]-30)*7;b+=rc(90+i*90,130-h,50,h,k===s.c?red:'#9aa3aa',{rx:3})+tx(115+i*90,145,k.toUpperCase(),{fs:11})+tx(115+i*90,124-h,String(H[k]),{fs:12})});return svg(150,b+tx(200,18,'قيم توضيحية',{fs:10,c:gry}))},
  ask:s=>({q:['الأعلى؟','Is it the highest?'],opts:['yes','no'],a:s.c==='uk'?'yes':'no'}),
  out:s=>s.c==='uk'?{t:S('x:In the UK,|a:people|k:work|x:the longest|n:hours.'),ar:'في بريطانيا يعمل الناس أطول الساعات.',why:['أعلى رقم ← التفضيل','The highest → superlative']}:{t:S(`a:People in ${s.c==='fr'?'France':'Germany'}|k:work|x:shorter|n:hours|q:than people in the UK.`),ar:'',why:['شيئان ← مقارنة + than','Two → comparative + than']}},
 think:[['أعلى رقم ← the …est. اثنين ← than.','The highest → the …est. Two → than.']]};
})(window);

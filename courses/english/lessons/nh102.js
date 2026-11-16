/* نهج الشرح لانجل-102 (dev-kit/guides/TEACHING_APPROACH.md) — مربع «الفكرة» لكل جزء من «شرح القاعدة».
   المفتاح = عنوان الجزء (t). الأمثلة والمشاهد من إعدادنا (إضافة من خارج الكتاب). يعتمد على nhk.js */
(function(G){const NH=G.NH=G.NH||{};const K=G.NHK,A=G.VXA;
const {svg,tx,rc,ci,ln,ar,ar2,man,wh,grd,ok,no,bub,S,R,cap,E,head}=K;const FM=(...p)=>G.ENK.fm(...p);
const {ink,grn,red,blu,yel,gry,lgt}=K.C;
const sky=(h,g)=>`<rect width="400" height="${h}" fill="#eaf3f9"/>${g!=null?`<rect y="${g}" width="400" height="${h-g}" fill="#a8b0a0"/>`:''}`;

/* =================== الوحدة 7: الأبعاد =================== */
const DIM={long:['the tunnel','9 km','long','length','طول النفق 9 كم'],high:['the tower','300 m','high','height','ارتفاع البرج 300 م'],wide:['the road','6 m','wide','width','عرض الطريق 6 م'],deep:['the lake','20 m','deep','depth','عمق البحيرة 20 م']};
const dimSvg=k=>{let b=sky(200,150);if(k==='long')b+=`<path d="M0 150 Q60 60 140 70 Q220 60 260 100 L400 100 V150Z" fill="#8a9a7a"/><path d="M40 150 V128 A26 26 0 0 1 92 128 V150Z" fill="#33424c"/><path d="M300 150 V128 A26 26 0 0 1 352 128 V150Z" fill="#33424c"/>`+ar2(66,172,326,172,yel)+tx(196,166,'9 km',{fs:15,c:'#b37d00'});
 if(k==='high')b+=`<path d="M190 150 L198 30 L202 30 L210 150Z" fill="#7d878e"/><rect x="186" y="60" width="28" height="14" rx="4" fill="#5d7f96"/>`+ar2(250,150,250,30,yel)+tx(290,95,'300 m',{fs:15,c:'#b37d00'});
 if(k==='wide')b+=`<path d="M150 150 L185 40 H215 L250 150Z" fill="#555"/><path d="M200 140 V125 M200 110 V95 M200 80 V68" stroke="#fff" stroke-width="3"/>`+ar2(150,170,250,170,yel)+tx(200,192,'6 m',{fs:15,c:'#b37d00'});
 if(k==='deep')b=sky(200,null)+`<rect y="60" width="400" height="140" fill="#5d9cc6"/><path d="M0 60 Q100 52 200 60 T400 60" stroke="#fff" stroke-width="2" fill="none"/><path d="M60 200 Q200 160 340 200Z" fill="#8a7a5a"/>`+ar2(200,62,200,178,yel)+tx(240,125,'20 m',{fs:15,c:'#fff3c7'});
 return svg(200,b)};
NH['الصفة والاسم للأبعاد']={
 say:[`بالعربي نقول «النفق طوله 9 كم» أو «طول النفق 9 كم»: نفس المعنى بطريقتين. الإنجليزي كذلك، لكن كل طريقة لها كلمتها:<br>بالصفة (${E('long')}) بعد الرقم:${FM('The tunnel is','+','الرقم','+','long')}${E('The tunnel is 9 km long.')}<br>بالاسم (${E('length')}) بعد The:${FM('The length of','+','الشيء','+','is','+','الرقم')}${E('The length of the tunnel is 9 km.')}`,
  `"The tunnel is 9 km long" and "The length of the tunnel is 9 km" mean the same. Each way has its own word: the adjective (${E('long')}) after the number, or the noun (${E('length')}) after The.`],
 life:[['My room is 4 metres wide.','غرفتي عرضها 4 أمتار.'],['The height of the door is 2 metres.','ارتفاع الباب مترين.']],
 scene:{title:['اختر البُعد والطريقة','Choose the size and the way'],
  ctrl:[{k:'d',label:['البُعد','Size'],opts:[['long','long'],['high','high'],['wide','wide'],['deep','deep']]},{k:'f',label:['الطريقة','Way'],opts:[['a',['بالصفة','adjective']],['n',['بالاسم','noun']]]}],
  svg:s=>dimSvg(s.d),
  ask:s=>s.f==='n'?{q:[`وش الاسم من ${s.d}؟`,`What is the noun of ${s.d}?`],opts:['length','height','width','depth'],a:DIM[s.d][3]}:{q:['وين تجي الصفة؟','Where does the adjective go?'],opts:['after the number','before the number'],a:'after the number'},
  out:s=>{const d=DIM[s.d];return s.f==='a'?{t:S(`a:${cap(d[0])}|q:is|n:${d[1]}|x:${d[2]}.`),ar:d[4]+'.',why:[`الصفة بعد الرقم:${FM('الرقم','+','الوحدة','+','الصفة')}`,'Adjective after the number.']}:{t:S(`q:The|x:${d[3]}|q:of|a:${d[0]}|q:is|n:${d[1]}.`),ar:d[4]+'.',why:[`الاسم بعد The:${FM('The','+','الاسم','+','of','+','الشيء')}`,'Noun after The … of.']}}},
 think:[['بعد الرقم والوحدة؟ ← الصفة (long, high, wide, deep).','After the number and unit? → the adjective.'],['بعد The … of؟ ← الاسم (length, height, width, depth).','After The … of? → the noun.']]};

const HQ={tower:['the tower','is','high','150 metres',"It's",'كم ارتفاع البرج؟ — 150 متراً.',1],cables:['the cables','are','long','60 metres',"They're",'كم طول الكوابل؟ — 60 متراً.',2],bridge:['the bridge','is','long','2.5 kilometres',"It's",'كم طول الجسر؟ — 2.5 كم.',1],pipes:['the pipes','are','wide','30 centimetres',"They're",'كم عرض الأنابيب؟ — 30 سم.',2]};
NH['السؤال عن الأبعاد وجوابه']={
 say:[`نسأل بنفس الصفة اللي نوصف فيها. مثل «كم ارتفاعه؟» = ${E('How high')} … وبعدها ${E('is')} للواحد و ${E('are')} للأكثر:${FM('How','+','الصفة','+','is / are','+','الشيء')}والجواب يبدأ بـ ${E("It's")} للواحد و ${E("They're")} للأكثر.`,
  `We ask with the same adjective we describe with: ${E('How high')} … then ${E('is')} for one thing and ${E('are')} for more. The answer starts with ${E("It's")} or ${E("They're")}.`],
 life:[['How tall is your brother?','كم طول أخوك؟'],['How long are the holidays?','كم مدة الإجازة؟']],
 scene:{title:['اسأل عن المقاس','Ask about the size'],
  ctrl:[{k:'o',label:['الشيء','Thing'],opts:[['tower','the tower'],['cables','the cables'],['bridge','the bridge'],['pipes','the pipes']]}],
  svg:s=>{const q=HQ[s.o];let b=sky(170,140);if(s.o==='tower')b+=`<path d="M190 140 L197 30 L203 30 L210 140Z" fill="#7d878e"/>`+ar2(240,140,240,30,yel);
   if(s.o==='cables')b+=[0,1,2].map(i=>`<path d="M60 ${60+i*25} Q200 ${90+i*25} 340 ${60+i*25}" stroke="#33424c" stroke-width="4" fill="none"/>`).join('')+ar2(60,30,340,30,yel);
   if(s.o==='bridge')b+=rc(30,90,340,14,'#b8a07a',{rx:2})+[80,200,320].map(x=>rc(x-6,104,12,36,'#cdb894',{rx:0})).join('')+ar2(30,72,370,72,yel);
   if(s.o==='pipes')b+=[0,1].map(i=>`<rect x="60" y="${60+i*40}" width="280" height="26" rx="13" fill="#7d878e"/><ellipse cx="340" cy="${73+i*40}" rx="7" ry="13" fill="#33424c"/>`).join('')+ar2(355,60,355,86,yel);
   b+=tx(200,22,q[6]===1?'one thing':'more than one',{fs:14,c:q[6]===1?blu:red});return svg(170,b)},
  ask:s=>({q:['is ولا are؟','is or are?'],opts:['is','are'],a:HQ[s.o][1]}),
  out:s=>{const q=HQ[s.o];return{t:S(`x:How|k:${q[2]}|x:${q[1]}|a:${q[0]}?|q:— ${q[4]}|n:${q[3]}|k:${q[2]}.`),ar:q[5],why:q[6]===1?['واحد ← is، والجواب It\'s.',"One → is; answer It's."]:['أكثر من واحد ← are، والجواب They\'re.',"More than one → are; answer They're."]}}},
 think:[['أسأل عن أي مقاس؟ ← How + الصفة.','Which size? → How + adjective.'],['الشيء واحد ← is. أكثر ← are.','One thing → is. More → are.']]};

const UW={m:['m','metre','metres','متر'],km:['km','kilometre','kilometres','كيلومتر'],cm:['cm','centimetre','centimetres','سنتيمتر'],mm:['mm','millimetre','millimetres','مليمتر']};
const NW={1:'one',2:'two',5:'five',10:'ten',25:'twenty-five',100:'one hundred',250:'two hundred and fifty'};
NH['كتابة الوحدات وقراءتها']={
 say:[`في الجداول نكتب الوحدة مختصرة (${E('100 m')})، لكن لما نقرأها نقولها كاملة (${E('one hundred metres')}). المختصر ما ينجمع أبداً، والمقروء ينجمع إذا الرقم أكثر من واحد.`,
  `In tables we write short units (${E('100 m')}), but we read them in full (${E('one hundred metres')}). The short form never takes s; the spoken form is plural when the number is more than one.`],
 life:[['The shop is 200 metres from my house.','المحل على بعد 200 متر من بيتي.'],['I drive 30 kilometres to work.','أسوق 30 كيلومتراً إلى العمل.']],
 scene:{title:['اكتبها واقرأها','Write it and read it'],
  ctrl:[{k:'n',label:['الرقم','Number'],opts:Object.keys(NW).map(n=>[+n,n])},{k:'u',label:['الوحدة','Unit'],opts:Object.keys(UW).map(u=>[u,u])}],
  svg:s=>svg(130,rc(40,20,150,90,'#fff',{st:ink,rx:10})+tx(115,48,'written',{fs:12,c:gry})+tx(115,86,`${s.n} ${UW[s.u][0]}`,{fs:24,c:blu})+ar(200,65,226,65,grn,4)+rc(232,20,150,90,'#fff3c7',{st:ink,rx:10})+tx(307,48,'spoken',{fs:12,c:gry})+`<text x="307" y="86" font-family="IBM Plex Sans,Arial" font-size="${NW[s.n].length>12?11:15}" font-weight="700" text-anchor="middle" fill="${ink}">🔊 ${NW[s.n]}</text>`),
  ask:s=>({q:['نقرأ الوحدة:','We read the unit as:'],opts:[UW[s.u][1],UW[s.u][2]],a:s.n===1?UW[s.u][1]:UW[s.u][2],hint:['أكثر من واحد ← نجمع.','More than one → plural.']}),
  out:s=>{const u=UW[s.u];return{t:S(`n:${s.n} ${u[0]}|q:=|k:${NW[s.n]}|x:${s.n===1?u[1]:u[2]}`),say:`${NW[s.n]} ${s.n===1?u[1]:u[2]}`,ar:`${s.n} ${u[3]}`,why:s.n===1?['واحد ← بدون s.','One → no s.']:['المكتوب بدون s، والمقروء بالجمع.','Written: no s. Spoken: plural.']}}},
 think:[['مكتوب مختصر؟ ← بدون s دائماً (100 m).','Short written form? → never s.'],['مقروء والرقم أكثر من واحد؟ ← بالجمع (metres).','Spoken, more than one? → plural.']]};

/* =================== الوحدة 7: المعدود وغير المعدود =================== */
const CN={screws:['screw',1,'three screws','ثلاثة براغي'],cement:['cement',0,'some cement','بعض الأسمنت'],nails:['nail',1,'three nails','ثلاثة مسامير'],oil:['oil',0,'some oil','بعض الزيت'],engineers:['engineer',1,'three engineers','ثلاثة مهندسين'],sand:['sand',0,'some sand','بعض الرمل']};
const cnSvg=k=>{let b=sky(150,null);const c=CN[k];if(c[1]){for(let i=0;i<3;i++){const x=120+i*80;b+=k==='engineers'?man(x,110,blu,1):k==='screws'?`<rect x="${x-14}" y="40" width="28" height="12" rx="3" fill="#7d878e"/><path d="M${x-5} 52 V110 L${x} 120 L${x+5} 110 V52" fill="#9aa3aa"/>${[60,72,84,96].map(y=>ln(x-8,y,x+8,y+5,'#6b757c',2)).join('')}`:`<rect x="${x-12}" y="40" width="24" height="6" rx="2" fill="#7d878e"/><path d="M${x-2} 46 V112 L${x} 122 L${x+2} 112 V46" fill="#9aa3aa"/>`;b+=tx(x,140,i+1,{fs:16,c:red})}}
 else b+=k==='oil'?`<path d="M160 40 h80 v90 h-80z" fill="#c9a227"/><rect x="185" y="26" width="30" height="14" fill="#7d878e"/>`+tx(200,95,'OIL',{fs:16,c:'#fff'}):`<path d="M140 130 L150 50 Q200 30 250 50 L260 130Z" fill="${k==='cement'?'#c9c3b5':'#d9c38f'}" stroke="${ink}" stroke-width="2"/>`+tx(200,98,k.toUpperCase(),{fs:16});
 return svg(150,b)};
NH['المعدود وغير المعدود']={
 say:[`اسأل نفسك: أقدر أقول «ثلاثة منه»؟ ثلاثة براغي ✓ ← معدود (${E('screws')}). ثلاثة أسمنت ✗ ← غير معدود (${E('cement')}). غير المعدود ما ينجمع، وما يجي قبله ${E('a')} ولا رقم.`,
  `Ask yourself: can I say "three of it"? Three screws ✓ → countable. Three cements ✗ → uncountable: no plural, no ${E('a')}, no number.`],
 life:[['I bought three apples.','اشتريت ثلاث تفاحات.'],['I need some water.','أحتاج بعض الماء.']],
 scene:{title:['أقدر أعدّه؟','Can I count it?'],
  ctrl:[{k:'o',label:['الشيء','Thing'],opts:Object.keys(CN).map(k=>[k,CN[k][0]])}],
  svg:s=>cnSvg(s.o),
  ask:s=>({q:[`تقدر تقول three ${CN[s.o][0]}s؟`,`Can you say "three ${CN[s.o][0]}s"?`],opts:['yes','no'],a:CN[s.o][1]?'yes':'no'}),
  out:s=>{const c=CN[s.o];return c[1]?{t:S(`x:three|n:${c[0]}${R('s')}`),say:c[2],ar:c[3],why:['معدود ← رقم + جمع.','Countable → number + plural.']}:{t:S(`x:some|n:${c[0]}`),say:c[2],ar:c[3],why:['غير معدود ← بدون رقم وبدون s.','Uncountable → no number, no s.']}}},
 think:[['أقدر أقول «ثلاثة منه»؟ نعم ← معدود، لا ← غير معدود.','Can I say "three of it"? Yes → countable. No → uncountable.']]};

const CT={cement:['bags','bag','كيس','أكياس','أسمنت'],paint:['tins','tin','علبة','علب','دهان'],glue:['tubes','tube','أنبوب','أنابيب','غراء'],oil:['cans','can','علبة','علب','زيت'],water:['bottles','bottle','قارورة','قوارير','ماء']};
const ctSvg=(k,n)=>{const m=Math.min(n,8);let b=sky(150,null);for(let i=0;i<m;i++){const x=40+i*42;b+=k==='cement'?`<path d="M${x} 130 L${x+3} 80 Q${x+16} 72 ${x+29} 80 L${x+32} 130Z" fill="#c9c3b5" stroke="${ink}"/>`:k==='paint'?`<rect x="${x}" y="88" width="32" height="42" rx="3" fill="${blu}" stroke="${ink}"/><rect x="${x}" y="84" width="32" height="7" fill="#7d878e"/>`:k==='glue'?`<path d="M${x+4} 130 L${x+10} 84 H${x+22} L${x+28} 130Z" fill="${yel}" stroke="${ink}"/><rect x="${x+13}" y="74" width="6" height="10" fill="${ink}"/>`:k==='oil'?`<rect x="${x}" y="84" width="30" height="46" rx="4" fill="#c9a227" stroke="${ink}"/><rect x="${x+18}" y="76" width="8" height="8" fill="${ink}"/>`:`<path d="M${x+8} 130 V92 Q${x+8} 84 ${x+13} 80 V70 H${x+19} V80 Q${x+24} 84 ${x+24} 92 V130Z" fill="#a9d6f0" stroke="${ink}"/>`}if(n>8)b+=tx(370,112,'…',{fs:24});b+=tx(200,40,`${n} × ${CT[k][1]}`,{fs:18,c:red});return svg(150,b)};
NH['العبوات: كيف نعدّ غير المعدود؟']={
 say:[`الأسمنت ما ينعدّ، لكن الكيس ينعدّ! فنعدّ العبوة: «عشرين كيس أسمنت»:${FM('الرقم','+','العبوة','+','of','+','المادة')}${E('twenty bags of cement')}`,
  `You can't count cement, but you can count bags: number + container + ${E('of')} + material: ${E('twenty bags of cement')}.`],
 life:[['two bottles of water','قارورتا ماء'],['a cup of tea','كوب شاي']],
 scene:{title:['اطلب كمية','Order an amount'],
  ctrl:[{k:'m',label:['المادة','Material'],opts:Object.keys(CT).map(k=>[k,k])},{k:'n',label:['العدد','Number'],range:[1,12,1],init:3}],
  svg:s=>ctSvg(s.m,s.n),
  ask:s=>({q:[`عبوة ${s.m}:`,`Container for ${s.m}:`],opts:Object.values(CT).map(v=>v[1]),a:CT[s.m][1]}),
  out:s=>{const c=CT[s.m];const w=s.n===1?c[1]:c[0];return{t:S(`k:${s.n}|n:${w}|x:of|a:${s.m}`),say:`${s.n} ${w} of ${s.m}`,ar:`${s.n} ${s.n===1?c[2]:c[3]} ${c[4]}`,why:['نعدّ العبوة: رقم + العبوة + of + المادة.','Count the container: number + container + of + material.']}}},
 think:[['المادة ما تنعدّ؟ ← عدّ العبوة: bags / tins / tubes of …','Uncountable? → count the container.']]};

const SA={pos:["I need","some","",'أحتاج'],neg:["We don't have","any","",'ليس عندنا'],offer:["Can I have","some","?",'هل أستطيع أن آخذ'],q:["Do you have","any","?",'هل عندك']};
NH['some و any']={
 say:[`«أحتاج مسامير» ما نذكر العدد، فنقول ${E('some')} أو ${E('any')}. القاعدة سهلة: الجملة المثبتة وطلب الشي ← ${E('some')}. النفي والسؤال العام ← ${E('any')}.`,
  `When we don't say the number we use ${E('some')} or ${E('any')}: positive sentences and requests → ${E('some')}; negatives and general questions → ${E('any')}.`],
 life:[['I want some tea.','أريد بعض الشاي.'],["There isn't any milk.",'لا يوجد أي حليب.']],
 scene:{title:['في محل العُدد','In the hardware shop'],
  ctrl:[{k:'t',label:['الجملة','Sentence'],opts:[['pos',['مثبتة','positive']],['neg',['نفي','negative']],['offer',['طلب','request']],['q',['سؤال','question']]]},{k:'n',label:['الشيء','Thing'],opts:[['nails','nails'],['glue','glue']]}],
  svg:s=>svg(150,sky(150,null)+man(90,110,blu,1)+man(310,110,grn,1)+rc(150,96,100,40,'#a7744a',{rx:4})+bub(30,10,160,36,s.t==='q'||s.t==='offer'?'?':s.t==='neg'?'✗':'✓',{fs:20,c:s.t==='neg'?red:grn})),
  ask:s=>({q:['some ولا any؟','some or any?'],opts:['some','any'],a:SA[s.t][1]}),
  out:s=>{const a=SA[s.t];return{t:S(`q:${a[0]}|x:${a[1]}|n:${s.n}${a[2]||'.'}`),ar:`${a[3]} ${s.n==='nails'?'مسامير':'غراء'}${a[2]?'؟':'.'}`,why:a[1]==='some'?['مثبتة أو طلب ← some.','Positive or request → some.']:['نفي أو سؤال عام ← any.','Negative or general question → any.']}}},
 think:[['مثبتة أو أطلب شي؟ ← some.','Positive or asking for something? → some.'],['نفي أو سؤال عام؟ ← any.','Negative or general question? → any.']]};

const HM={bolts:['bolts','many','كم مسماراً ملولباً تحتاج؟'],oil:['oil','much','كم زيتاً تحتاج؟'],tins:['tins of paint','many','كم علبة دهان تحتاج؟'],sand:['sand','much','كم رملاً تحتاج؟'],screws:['screws','many','كم برغياً تحتاج؟']};
NH['How many و How much']={
 say:[`نسأل عن الكمية: إذا الشي ينعدّ ← ${E('How many')} والاسم بعدها جمع. إذا ما ينعدّ ← ${E('How much')} والاسم مفرد. ومع العبوات (${E('tins')}) ← ${E('How many')} لأن العبوة تنعدّ.`,
  `Countable → ${E('How many')} + plural. Uncountable → ${E('How much')} + singular. With containers → ${E('How many')}, because the container is countable.`],
 life:[['How many brothers do you have?','كم أخاً عندك؟'],['How much sugar do you want?','كم سكراً تريد؟']],
 scene:{title:['اسأل الزبون','Ask the customer'],
  ctrl:[{k:'o',label:['الشيء','Thing'],opts:Object.keys(HM).map(k=>[k,HM[k][0]])}],
  svg:s=>cnSvg({bolts:'screws',screws:'screws',oil:'oil',sand:'sand',tins:'oil'}[s.o]),
  ask:s=>({q:['How many ولا How much؟','How many or How much?'],opts:['How many','How much'],a:'How '+HM[s.o][1]}),
  out:s=>{const h=HM[s.o];return{t:S(`x:How ${h[1]}|n:${h[0]}|q:do you need?`),ar:h[2],why:h[1]==='many'?['ينعدّ ← How many + جمع.','Countable → How many + plural.']:['ما ينعدّ ← How much.','Uncountable → How much.']}}},
 think:[['الشي ينعدّ (أو عبوة)؟ ← How many.','Countable (or a container)? → How many.'],['ما ينعدّ؟ ← How much.','Uncountable? → How much.']]};

/* =================== الوحدة 7: will =================== */
const WS={I:['I','أنا'],he:['He','هو'],they:['The engineers','المهندسون'],it:['The bridge','الجسر']};
const WV={finish:['finish the tunnel','ينهي النفق','سينهون النفق'],connect:['connect two cities','يربط مدينتين','سيربط مدينتين'],open:['open in 2032','يُفتح عام 2032','سيُفتح عام 2032']};
NH['جملة التوقع بـ will']={
 say:[`«سـ» و«سوف» في العربي = ${E('will')} في الإنجليزي. وهي ثابتة مع الكل، وبعدها الفعل كما هو بدون s وبدون to:${FM('الفاعل','+','will','+','الفعل كما هو')}${E('The engineers will finish the tunnel in 2035.')}`,
  `"will" is the same with everyone, followed by the verb as it is (no s, no to): ${E('The engineers will finish the tunnel in 2035.')}`],
 life:[["I'll call you tomorrow.",'سأتصل بك غداً.'],['It will rain tonight.','ستمطر الليلة.']],
 scene:{title:['خط زمن المشروع','The project timeline'],
  ctrl:[{k:'s',label:['الفاعل','Subject'],opts:Object.keys(WS).map(k=>[k,WS[k][0]])},{k:'y',label:['السنة','Year'],range:[2026,2036,1],init:2030}],
  svg:s=>{let b=sky(130,null)+ln(30,70,370,70,ink,4);for(let y=2026;y<=2036;y+=2){const x=30+(y-2026)*34;b+=ln(x,64,x,76,ink,3)+tx(x,96,y,{fs:12})}const x=30+(s.y-2026)*34;b+=ci(x,70,10,s.y<=2026?blu:red)+tx(x,48,s.y<=2026?'now':'future',{fs:13,c:s.y<=2026?blu:red});return svg(130,b)},
  ask:s=>s.y<=2026?null:{q:['بعد will:','After will:'],opts:['finish','finishes','to finish'],a:'finish'},
  out:s=>{const w=WS[s.s];if(s.y<=2026)return{t:S(`q:2026 is now. Choose a later year.`),why:['will للمستقبل: اختر سنة قادمة.','will is for the future: choose a later year.']};const v=s.s==='it'?WV.open:s.s==='they'?WV.finish:WV.connect;return{t:S(`a:${w[0]}|x:will|k:${v[0].split(' ')[0]}|n:${v[0].split(' ').slice(1).join(' ').replace(/in 20\d\d/,'')}${s.s==='it'?'':' '}|q:in ${s.y}.`),ar:`${w[1]} ${v[2]} عام ${s.y}.`,why:['will مع الكل + الفعل كما هو.','will with everyone + the verb as it is.']}}},
 think:[['أتكلم عن المستقبل؟ ← will.','Talking about the future? → will.'],['بعد will الفعل كما هو: بدون s وبدون to.','After will: the verb with no s and no to.']]};

NH["النفي بـ won't والاعتراض"]={
 say:[`لو أحد قال معلومة غلط عن المستقبل، تنفيها بـ ${E("won't")} (= ${E('will not')}) ثم تقول الصح بـ ${E("'ll")}:${FM("won't",'+','الفعل كما هو')}${E("They won't open it in 2028. They'll open it in 2031.")}`,
  `If someone says something wrong about the future, deny it with ${E("won't")} and give the right information with ${E("'ll")}.`],
 life:[["I won't be late.",'لن أتأخر.'],["She won't come today. She'll come tomorrow.",'لن تأتي اليوم. ستأتي غداً.']],
 scene:{title:['صحّح المعلومة','Correct the information'],
  ctrl:[{k:'y',label:['قال زميلك','Your friend said'],opts:[[2028,'2028'],[2031,'2031'],[2034,'2034']]}],
  svg:s=>svg(130,sky(130,null)+man(70,100,blu,1)+bub(100,20,200,40,`They'll open it in ${s.y}.`,{fs:13})+rc(300,70,90,46,'#fff',{st:grn,rx:8})+tx(345,90,'Correct:',{fs:11,c:gry})+tx(345,108,'2031',{fs:16,c:grn})),
  ask:s=>({q:['كلامه صح؟','Is he right?'],opts:['yes','no'],a:s.y===2031?'yes':'no'}),
  out:s=>s.y===2031?{t:S("q:Yes.|a:They|x:'ll|k:open|n:it|q:in 2031."),ar:'نعم، سيفتحونه عام 2031.',why:['صح ← نوافقه.','Right → agree.']}:{t:S(`a:They|x:won't|k:open|n:it|q:in ${s.y}.|a:They|x:'ll|k:open|n:it|q:in 2031.`),ar:`لن يفتحوه عام ${s.y}. سيفتحونه عام 2031.`,why:[`الغلط${FM("won't",'+','الفعل')}والصح${FM("'ll",'+','الفعل')}`,"Wrong → won't. Right → 'll."]}},
 think:[["المعلومة غلط؟ ← won't + الفعل، ثم الصح بـ 'll.","Wrong? → won't + verb, then the right one with 'll."]]};

const ST={found:['the foundations','2028','2 years','build','بناء الأساسات'],towers:['the towers','2030','1 year','build','بناء الأبراج'],deck:['the deck','2031','3 years','make','صنع سطح الجسر']};
NH['السؤال بـ will وجوابه']={
 say:[`في السؤال تتقدّم ${E('will')} قبل الفاعل:${FM('When / How long','+','will','+','الفاعل','+','الفعل')}${E('When will you build the towers?')} والجواب: ${E("We'll build them in 2030.")}`,
  `In a question ${E('will')} comes before the subject: ${E('When will you build the towers?')} Answer: ${E("We'll build them in 2030.")}`],
 life:[['When will you arrive?','متى ستصل؟'],['Will it be hot tomorrow?','هل سيكون الجو حاراً غداً؟']],
 scene:{title:['مقابلة عن الجسر','An interview about the bridge'],
  ctrl:[{k:'p',label:['المرحلة','Stage'],opts:Object.keys(ST).map(k=>[k,ST[k][0].replace('the ','')])},{k:'q',label:['السؤال','Question'],opts:[['when','When'],['long','How long'],['yn','Will …?']]}],
  svg:s=>{let b=sky(150,120);b+=rc(0,120,400,30,'#5d9cc6',{rx:0});const on=k=>s.p===k;b+=[90,310].map(x=>rc(x-10,70,20,60,on('found')?red:'#cdb894',{rx:2})).join('')+[90,310].map(x=>rc(x-5,20,10,50,on('towers')?red:'#9aa3aa',{rx:2})).join('')+rc(20,62,360,10,on('deck')?red:'#b8a07a',{rx:2});return svg(150,b)},
  ask:s=>({q:['وش يجي بعد كلمة السؤال؟','What comes after the question word?'],opts:['will','you','build'],a:s.q==='yn'?'you':'will',hint:s.q==='yn'?['Will هي أول كلمة، بعدها الفاعل.','Will is first, then the subject.']:null}),
  out:s=>{const p=ST[s.p];return s.q==='when'?{t:S(`a:When|x:will|q:you|k:${p[3]}|n:${p[0]}?|q:— We'll ${p[3]} them in ${p[1]}.`),ar:`متى ستُنجزون ${p[4]}؟ — عام ${p[1]}.`,why:['When + will + الفاعل + الفعل.','When + will + subject + verb.']}:s.q==='long'?{t:S(`a:How long|x:will|q:it|k:take?|q:— It'll take ${p[2]}.`),ar:`كم سيستغرق ${p[4]}؟ — ${p[2].replace('years','سنوات').replace('year','سنة')}.`,why:['How long + will …?','How long + will …?']}:{t:S(`x:Will|q:you|k:${p[3]}|n:${p[0]}|q:in ${p[1]}?|q:— Yes, we will.`),ar:`هل ستُنجزون ${p[4]} عام ${p[1]}؟ — نعم.`,why:['Will أول السؤال، والجواب Yes, we will.','Will first; answer Yes, we will.']}}},
 think:[['سؤال؟ ← will قبل الفاعل.','A question? → will before the subject.'],["الجواب القصير: Yes, it will. / No, it won't.","Short answer: Yes, it will. / No, it won't."]]};

/* =================== الوحدة 8: المضارع التام =================== */
const PE={printer:['The printer','has stopped','توقفت الطابعة (وهي متوقفة الآن)'],laptop:['Someone','has taken my laptop','أحدهم أخذ حاسوبي (وهو ليس معي الآن)'],glass:['The glass','has broken','انكسر الكأس (وهو مكسور الآن)']};
const peSvg=(k,now)=>{let b=sky(150,130);if(k==='printer')b+=rc(140,60,120,60,'#e8ecef',{st:ink,rx:8})+rc(160,46,80,18,'#fff',{st:ink})+ci(240,80,5,now?red:grn)+(now?tx(200,40,'STOPPED',{fs:13,c:red}):'');
 if(k==='laptop')b+=rc(120,120,160,8,'#a7744a',{rx:2})+(now?tx(200,100,'?',{fs:40,c:red}):`<path d="M160 118 L170 80 H230 L240 118Z" fill="#7d878e"/>`);
 if(k==='glass')b+=now?`<path d="M170 128 l12 -10 l6 8 l10 -12 l8 14 l10 -6" stroke="#9fc3d8" stroke-width="4" fill="none"/>`:`<path d="M185 60 H215 L210 128 H190Z" fill="#cfe7f5" stroke="${ink}"/>`;
 return svg(150,b+tx(60,24,now?'now':'before',{fs:14,c:now?red:gry}))};
NH['متى نستعمله؟']={
 say:[`لما شي يصير قبل شوي ونتيجته باقية قدامك، مثل «الطابعة وقفت» وهي واقفة الحين، نستخدم المضارع التام. وبالعربي غالباً نقول «قد» أو «للتو».`,
  `When something has just happened and you can see the result now ("the printer has stopped" and it is still stopped), we use the present perfect.`],
 life:[["I've lost my keys.",'أضعت مفاتيحي (وما لقيتها).'],["He has finished his work.",'أنهى عمله (والعمل خالص الآن).']],
 scene:{title:['قبل وبعد','Before and now'],
  ctrl:[{k:'e',label:['الحدث','Event'],opts:[['printer','printer'],['laptop','laptop'],['glass','glass']]},{k:'t',label:['الوقت','Time'],opts:[['b',['قبل','before']],['n',['الحين','now']]]}],
  svg:s=>peSvg(s.e,s.t==='n'),
  ask:s=>s.t==='n'?{q:['النتيجة موجودة الحين؟','Is the result here now?'],opts:['yes','no'],a:'yes'}:null,
  out:s=>{const p=PE[s.e];return s.t==='b'?{t:S('q:Everything is OK.'),ar:'كل شيء طبيعي.',why:['ما صار شي بعد. اضغط «الحين».','Nothing has happened yet. Choose "now".']}:{t:S(`a:${p[0]}|x:${p[1].split(' ')[0]}|k:${p[1].split(' ')[1]}|n:${p[1].split(' ').slice(2).join(' ')}.`),ar:p[2]+'.',why:[`صار قبل شوي ونتيجته الحين:${FM('have / has','+','التصريف الثالث')}`,'Just happened, result now → have/has + past participle.']}}},
 think:[['صار الشي ونتيجته باقية الحين؟ ← المضارع التام.','Did it happen with a result now? → present perfect.']]};

const SU={I:['I','have'],you:['You','have'],he:['He','has'],printer:['The printer','has'],parts:['The parts','have']};
const PV3={stop:['stopped','توقف'],arrive:['arrived','وصل'],finish:['finished','انتهى']};
NH['كيف نكوّنه؟']={
 say:[`المضارع التام قطعتين ما تنفصل: ${E('have')} أو ${E('has')}، ثم التصريف الثالث. ${E('has')} مع الواحد (${E('he / she / it')})، و ${E('have')} مع الباقي.`,
  `Two parts that go together: ${E('have')} or ${E('has')} + past participle. ${E('has')} with he / she / it; ${E('have')} with the others.`],
 life:[["She has called you.",'اتصلت بك.'],["We have finished.",'انتهينا.']],
 scene:{title:['have ولا has؟','have or has?'],
  ctrl:[{k:'s',label:['الفاعل','Subject'],opts:Object.keys(SU).map(k=>[k,SU[k][0]])},{k:'v',label:['الفعل','Verb'],opts:Object.keys(PV3).map(k=>[k,k])}],
  svg:s=>svg(110,sky(110,null)+(s.s==='parts'?[0,1,2].map(i=>rc(130+i*50,40,36,36,'#7d878e',{rx:6})).join(''):s.s==='printer'?rc(160,36,80,46,'#e8ecef',{st:ink,rx:8}):man(200,80,blu,0.9))+tx(200,104,SU[s.s][1]==='has'?'one (he / she / it)':'I / you / we / they / more',{fs:12,c:SU[s.s][1]==='has'?blu:red})),
  ask:s=>({q:['have ولا has؟','have or has?'],opts:['have','has'],a:SU[s.s][1]}),
  out:s=>{const u=SU[s.s];return{t:S(`a:${u[0]}|x:${u[1]}|k:${PV3[s.v][0]}.`),ar:`${{I:'أنا',you:'أنت',he:'هو',printer:'الطابعة',parts:'القطع'}[s.s]} ${PV3[s.v][1]}.`,why:u[1]==='has'?['واحد (he / she / it) ← has.','One → has.']:['I / you / we / they / جمع ← have.','I / you / we / they / plural → have.']}}},
 think:[['الفاعل he / she / it أو مفرد؟ ← has. غيره ← have.','he / she / it or singular? → has. Others → have.'],['بعدها التصريف الثالث.','Then the past participle.']]};

const TK={brakes:['checked the brakes','فحصت الفرامل'],oil:['changed the oil','غيّرت الزيت'],tyres:['cleaned the tyres','نظفت الإطارات']};
NH['النفي والسؤال والجواب القصير']={
 say:[`المشرف يسأل: «فحصت الفرامل؟» = ${E('Have you checked the brakes?')} (${E('Have')} تتقدّم). والجواب القصير نعيد ${E('have')} بس: ${E('Yes, I have.')} أو ${E("No, I haven't.")}`,
  `In the question ${E('Have')} comes first. In the short answer we repeat only ${E('have')}: ${E('Yes, I have.')} / ${E("No, I haven't.")}`],
 life:[['Have you eaten?','أكلت؟'],["No, I haven't.",'لا، ما أكلت.']],
 scene:{title:['قائمة المهام','The task list'],
  ctrl:[{k:'t',label:['المهمة','Task'],opts:Object.keys(TK).map(k=>[k,k])},{k:'d',label:['الحالة','State'],opts:[['y',['خلصت','done']],['n',['ما خلصت','not done']]]}],
  svg:s=>{let b=sky(160,null);Object.keys(TK).forEach((k,i)=>{const y=34+i*44,on=k===s.t;b+=rc(60,y-20,280,34,on?'#fff':lgt,{st:on?blu:'none',sw:3,rx:8})+tx(80,y+2,TK[k][0],{a:'start',fs:14})+(on?(s.d==='y'?ok(312,y-3):no(312,y-3)):'')});return svg(160,b)},
  ask:s=>({q:['وش جوابك؟','Your answer?'],opts:['Yes, I have.',"No, I haven't."],a:s.d==='y'?'Yes, I have.':"No, I haven't."}),
  out:s=>{const t=TK[s.t];return{t:S(`x:Have|a:you|k:${t[0].split(' ')[0]}|n:${t[0].split(' ').slice(1).join(' ')}?|q:— ${s.d==='y'?'Yes, I have.':"No, I haven't."}`),ar:`هل ${t[1]}؟ — ${s.d==='y'?'نعم.':'لا.'}`,why:['السؤال: Have أولاً. الجواب: have فقط.','Question: Have first. Answer: only have.']}}},
 think:[['سؤال؟ ← Have / Has قبل الفاعل.','Question? → Have / Has before the subject.'],["الجواب القصير ← Yes, I have. / No, I haven't.","Short answer → Yes, I have. / No, I haven't."]]};

const V3={check:['checked','r'],stop:['stopped','r'],arrive:['arrived','r'],write:['written','i'],steal:['stolen','i'],break:['broken','i'],send:['sent','i']};
const V3W={check:['checked','checkt','check'],stop:['stopped','stoped','stop'],arrive:['arrived','arriveed','arrive'],write:['written','writed','wrote'],steal:['stolen','stealed','stole'],break:['broken','breaked','broke'],send:['sent','sended','send']};
NH['التصريف الثالث (V3)']={
 say:[`أغلب الأفعال نزيد عليها ${E('ed')} (مثل الماضي): ${E('check → checked')}. وبعضها شاذ له شكل خاص يُحفظ: ${E('write → wrote → written')}. ما نقول ${E('stealed')}، نقول ${E('stolen')}.`,
  `Most verbs add ${E('ed')}: ${E('check → checked')}. Some are irregular and must be learned: ${E('write → wrote → written')}.`],
 life:[["I've written a letter.",'كتبت رسالة.'],["They've checked the car.",'فحصوا السيارة.']],
 scene:{title:['مصنع التصريف الثالث','The past participle factory'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(V3).map(k=>[k,k])}],
  svg:s=>svg(110,sky(110,null)+tx(110,64,s.v,{fs:24,c:ink})+ar(170,58,230,58,grn,4)+tx(300,64,'?',{fs:28,c:V3[s.v][1]==='r'?grn:red})+tx(300,96,V3[s.v][1]==='r'?'regular':'irregular',{fs:12,c:gry})),
  ask:s=>({q:['وش التصريف الثالث؟','Past participle?'],opts:[...V3W[s.v]].sort(),a:V3[s.v][0]}),
  out:s=>{const v=V3[s.v];return{t:S(`a:I|x:have|k:${v[1]==='r'?v[0].replace(/ed$/,'')+R('ed'):R(v[0])}|q:it.`),say:`I have ${v[0]} it.`,ar:'',why:v[1]==='r'?['منتظم ← + ed.','Regular → + ed.']:['شاذ ← يُحفظ.','Irregular → learn it.']}}},
 think:[['الفعل منتظم؟ ← ed. شاذ؟ ← من الجدول.','Regular? → ed. Irregular? → from the table.']]};

NH['المضارع التام أم الماضي البسيط؟']={
 say:[`السؤال الوحيد: ذكرت متى صار؟ إذا قلت «أمس» ← الماضي البسيط: ${E('I lost my key yesterday.')} إذا ما ذكرت الوقت والنتيجة الحين ← المضارع التام: ${E("I've lost my key.")}`,
  `One question: did you say when? With a time (yesterday) → past simple. No time, result now → present perfect.`],
 life:[['I saw him yesterday.','رأيته أمس.'],["I've seen this film.",'شفت هذا الفيلم.']],
 scene:{title:['ذكرت الوقت؟','Did you say when?'],
  ctrl:[{k:'t',label:['الوقت','Time'],opts:[['none',['بدون وقت','no time']],['yest','yesterday'],['ago','two hours ago'],['last','last week']]}],
  svg:s=>svg(120,sky(120,null)+`<path d="M160 70 a14 14 0 1 1 20 12 l40 0 l0 10 l-6 0 l0 8 l-8 0 l0 -8 l-26 0z" fill="${yel}" stroke="${ink}"/>`+tx(200,30,s.t==='none'?'(no time)':{yest:'yesterday',ago:'two hours ago',last:'last week'}[s.t],{fs:16,c:s.t==='none'?gry:red})),
  ask:s=>({q:['أي زمن؟','Which tense?'],opts:['present perfect','past simple'],a:s.t==='none'?'present perfect':'past simple'}),
  out:s=>s.t==='none'?{t:S("a:I|x:'ve|k:lost|n:my key."),ar:'أضعت مفتاحي.',why:['بدون وقت والنتيجة الحين ← المضارع التام.','No time, result now → present perfect.']}:{t:S(`a:I|k:lost|n:my key|x:${{yest:'yesterday',ago:'two hours ago',last:'last week'}[s.t]}.`),ar:`أضعت مفتاحي ${{yest:'أمس',ago:'قبل ساعتين',last:'الأسبوع الماضي'}[s.t]}.`,why:['ذكرت الوقت ← الماضي البسيط.','A time is given → past simple.']}},
 think:[['فيه كلمة وقت (yesterday, ago, last, in 2005)؟ ← الماضي البسيط.','A time word? → past simple.'],['ما فيه وقت والنتيجة الحين؟ ← have / has + V3.','No time, result now? → have / has + V3.']]};

/* =================== الوحدة 8: التلف =================== */
const DM={crack:['cracked','r','screen','مشقوقة','الشاشة'],dent:['dented','r','case','مطعوج','الغطاء'],scratch:['scratched','r','screen','مخدوشة','الشاشة'],bend:['bent','i','aerial','مثني','الهوائي'],break:['broken','i','handle','مكسور','المقبض'],tear:['torn','i','cable cover','ممزق','غلاف الكابل'],burn:['burnt','i','cable','محروق','الكابل']};
const dmSvg=k=>{let b=sky(160,null)+rc(110,30,180,110,'#33424c',{rx:14})+rc(122,42,156,86,'#9fc3d8',{rx:6})+ln(250,30,280,0,'#7d878e',4)+rc(150,140,100,10,'#7d878e',{rx:4});
 const D={crack:`<path d="M150 52 l20 22 l-8 10 l22 20 l-6 12" stroke="#fff" stroke-width="3" fill="none"/>`,dent:`<path d="M110 90 q14 8 0 20" stroke="${red}" stroke-width="5" fill="none"/>`,scratch:`<path d="M140 70 l60 -14 M150 84 l70 -16" stroke="#fff" stroke-width="2.5"/>`,bend:`<path d="M250 30 L262 10 L290 6" stroke="${red}" stroke-width="5" fill="none"/>`,break:`<path d="M190 140 l10 -6 l10 6" stroke="${red}" stroke-width="5" fill="none"/>`,tear:`<path d="M230 140 l6 8 l6 -8 l6 8" stroke="${red}" stroke-width="4" fill="none"/>`,burn:`<circle cx="220" cy="146" r="9" fill="#3a2a20"/>`}[k];return svg(160,b+D)};
NH['أفعال التلف وتصاريفها']={
 say:[`لما ترجّع جهاز للمحل لازم تقول بالضبط وش فيه: مشقوق؟ مطعوج؟ مخدوش؟ كل تلف له فعل، ونصف الحالة بالتصريف الثالث:${FM('الشيء','+','is','+','التصريف الثالث')}${E('The screen is cracked.')}`,
  `When you return something, say exactly what is wrong. Each kind of damage has a verb, and we describe the state with the past participle: ${E('The screen is cracked.')}`],
 life:[['My phone screen is cracked.','شاشة جوالي مشقوقة.'],['The car door is dented.','باب السيارة مطعوج.']],
 scene:{title:['وش فيه الجهاز؟',"What's wrong with it?"],
  ctrl:[{k:'d',label:['التلف','Damage'],opts:Object.keys(DM).map(k=>[k,k])}],
  svg:s=>dmSvg(s.d),
  ask:s=>{const d=DM[s.d];return{q:[`التصريف الثالث من ${s.d}:`,`Past participle of ${s.d}:`],opts:[d[0],s.d+'ed',s.d==='burn'?'burned':s.d+'s'].filter((v,i,a)=>a.indexOf(v)===i).sort(),a:d[0]}},
  out:s=>{const d=DM[s.d];return{t:S(`a:The ${d[2]}|x:is|k:${d[0]}.`),ar:`${d[4]} ${d[3]}.`,why:d[1]==='r'?['منتظم ← + ed.','Regular → + ed.']:['شاذ ← يُحفظ.','Irregular → learn it.']}}},
 think:[['وش نوع التلف؟ شق؟ طعجة؟ خدش؟','What kind of damage?'],['الشيء + is / are + التصريف الثالث.','Thing + is / are + past participle.']]};

NH['الفعل أم النتيجة؟']={
 say:[`نقدر نتكلم عن التلف بطريقتين:<br>مين سوّاه؟${FM('الفاعل','+','have / has','+','التصريف الثالث')}${E('I have scratched the screen.')}<br>وش حالته الحين؟${FM('الشيء','+','is / are','+','التصريف الثالث')}${E('The screen is scratched.')}`,
  `Two ways: who did it (${E('I have scratched the screen.')}) or what it is like now (${E('The screen is scratched.')}).`],
 life:[['I have broken my glasses.','كسرت نظارتي.'],['My glasses are broken.','نظارتي مكسورة.']],
 scene:{title:['الفاعل أو الحالة','The doer or the state'],
  ctrl:[{k:'d',label:['التلف','Damage'],opts:[['scratch','scratch'],['break','break'],['dent','dent']]},{k:'f',label:['نركّز على','Focus on'],opts:[['who',['مين سوّاه','who did it']],['now',['حالته الحين','the state now']]]}],
  svg:s=>s.f==='who'?svg(160,dmSvg(s.d).replace(/^<svg[^>]*>|<\/svg>$/g,'')+man(60,140,blu,1)):dmSvg(s.d),
  ask:s=>s.f==='who'?{q:['بعد I:','After I:'],opts:['have','am','is'],a:'have'}:{q:['بعد The screen:','After the thing:'],opts:['is','has','have'],a:'is'},
  out:s=>{const d=DM[s.d];return s.f==='who'?{t:S(`a:I|x:have|k:${d[0]}|n:the ${d[2]}.`),ar:`أنا ${{scratch:'خدشت',break:'كسرت',dent:'طعجت'}[s.d]} ${d[4]}.`,why:['مين سوّاه ← have + التصريف الثالث.','Who did it → have + past participle.']}:{t:S(`n:The ${d[2]}|x:is|k:${d[0]}.`),ar:`${d[4]} ${d[3]}.`,why:['حالته الحين ← is + التصريف الثالث.','The state now → is + past participle.']}}},
 think:[['أتكلم عن اللي سوّاه؟ ← have / has.','About who did it? → have / has.'],['عن حالة الشيء الحين؟ ← is / are.','About the state now? → is / are.']]};

const LOC={crack:['a crack','in the screen','There\'s a crack in the screen.','في الشاشة شق.'],scr:['some scratches','on the case','There are some scratches on the case.','على الغطاء بعض الخدوش.'],bat:['The batteries','are missing','The batteries are missing.','البطاريات ناقصة.'],plug:['no plug','on the cable',"There's no plug on the cable.",'لا يوجد قابس على الكابل.']};
NH['مكان التلف والشيء الناقص']={
 say:[`بالعربي نقول «في الشاشة شق» أو «البطاريات ناقصة». بالإنجليزي:<br>تلف واحد:${FM("There's a",'+','التلف','+','in / on','+','المكان')}أكثر من تلف: ${E('There are some …')}<br>شي ناقص: ${E('… is / are missing.')}`,
  `One damage: ${E("There's a crack in the screen.")} More: ${E('There are some scratches on it.')} Missing: ${E('The batteries are missing.')}`],
 life:[["There's a hole in my sock.",'في جوربي ثقب.'],['My keys are missing.','مفاتيحي ضايعة.']],
 scene:{title:['افحص الكرتون','Check the box'],
  ctrl:[{k:'p',label:['المشكلة','Problem'],opts:[['crack','crack'],['scr','scratches'],['bat','batteries'],['plug','plug']]}],
  svg:s=>{let b=sky(150,null)+rc(70,40,120,80,'#33424c',{rx:10})+rc(80,50,100,60,'#9fc3d8',{rx:4})+rc(240,60,60,40,'#e8ecef',{st:ink,rx:4})+tx(270,84,'AA',{fs:13})+ln(190,100,330,120,ink,4)+rc(330,112,24,16,'#7d878e',{rx:2});
   if(s.p==='crack')b+=`<path d="M95 60 l20 18 l-6 10 l20 14" stroke="#fff" stroke-width="3" fill="none"/>`+ci(120,80,40,'none',{st:red,sw:3});
   if(s.p==='scr')b+=`<path d="M74 50 l20 -6 M74 66 l24 -8 M78 112 l30 4" stroke="${red}" stroke-width="2.5"/>`;
   if(s.p==='bat')b+=no(270,80,1.4);
   if(s.p==='plug')b+=rc(326,108,32,24,sky?'#eaf3f9':'#fff',{rx:0})+no(342,120,0.9);
   return svg(150,b)},
  ask:s=>({q:["There's ولا There are؟","There's or There are?"],opts:["There's","There are","(missing)"],a:s.p==='scr'?'There are':s.p==='bat'?'(missing)':"There's",hint:['واحد ← There\'s. أكثر ← There are. ناقص ← missing.',"One → There's. More → There are. Not there → missing."]}),
  out:s=>{const l=LOC[s.p];return s.p==='bat'?{t:S('n:The batteries|x:are missing.'),ar:l[3],why:['شي ناقص ← is / are missing.','Not there → is / are missing.']}:s.p==='scr'?{t:S('x:There are|k:some scratches|n:on the case.'),ar:l[3],why:['أكثر من تلف ← There are some.','More than one → There are some.']}:s.p==='plug'?{t:S("x:There's|k:no plug|n:on the cable."),ar:l[3],why:["ما فيه ← There's no.","None → There's no."]}:{t:S("x:There's|k:a crack|n:in the screen."),ar:l[3],why:["تلف واحد ← There's a.","One damage → There's a."]}}},
 think:[["تلف واحد ← There's a … in / on …","One damage → There's a … in / on …"],['شي ناقص ← … is / are missing.','Missing → … is / are missing.']]};

/* =================== الوحدة 9: الماضي والتواريخ =================== */
const SP={1957:['They','launch','launched','r','Sputnik','أطلقوا سبوتنيك'],1961:['Yuri Gagarin','become','became','i','the first man in space','أصبح يوري غاغارين أول إنسان في الفضاء'],1969:['Armstrong','land','landed','r','on the Moon','هبط آرمسترونغ على القمر'],1990:['NASA','send','sent','i','Hubble into space','أرسلت ناسا تلسكوب هابل إلى الفضاء']};
const spSvg=y=>{let b=`<rect width="400" height="150" fill="#14213d"/>`+[[30,20],[90,60],[150,30],[330,25],[370,80],[250,15],[60,120]].map(([x,yy])=>ci(x,yy,1.6,'#fff')).join('');
 if(y==1957)b+=ci(200,75,14,'#c9d1d6')+[0,1,2,3].map(i=>ln(200,75,200+40*Math.cos(2.4+i*0.25),75+40*Math.sin(2.4+i*0.25),'#c9d1d6',2)).join('');
 if(y==1961)b+=`<path d="M200 30 L215 70 V120 H185 V70Z" fill="#e8ecef"/><path d="M185 120 L170 135 H230 L215 120" fill="${red}"/><path d="M190 135 q10 20 20 0" fill="${yel}"/>`;
 if(y==1969)b+=`<path d="M0 150 Q200 90 400 150Z" fill="#9aa3aa"/>`+man(200,110,'#e8ecef',0.9)+ln(240,60,240,110,'#ccc',2)+rc(240,60,30,18,red,{rx:1});
 if(y==1990)b+=rc(170,60,70,30,'#c9d1d6',{rx:6})+rc(110,66,56,18,'#3a6ea5',{rx:2})+rc(244,66,56,18,'#3a6ea5',{rx:2});
 return svg(150,b+tx(360,140,y,{fs:16,c:yel}))};
NH['الماضي البسيط في الجملة المثبتة']={
 say:[`حدث صار وخلص في وقت معروف ← الماضي البسيط. والفعل نفسه مع الكل. المنتظم نزيد ${E('ed')}: ${E('launch → launched')}، والشاذ يتحفظ: ${E('send → sent')}.`,
  `Something that happened and finished at a known time → past simple, the same form for everyone. Regular: ${E('launch → launched')}; irregular: ${E('send → sent')}.`],
 life:[['I visited my uncle last Friday.','زرت عمي الجمعة الماضية.'],['We went to Makkah in 2020.','ذهبنا إلى مكة عام 2020.']],
 scene:{title:['تاريخ الفضاء','Space history'],
  ctrl:[{k:'y',label:['السنة','Year'],opts:Object.keys(SP).map(y=>[+y,y])}],
  svg:s=>spSvg(s.y),
  ask:s=>({q:[`الماضي من ${SP[s.y][1]}:`,`Past of ${SP[s.y][1]}:`],opts:[SP[s.y][2],SP[s.y][1]+'ed',SP[s.y][1]].filter((v,i,a)=>a.indexOf(v)===i).sort(),a:SP[s.y][2]}),
  out:s=>{const p=SP[s.y];return{t:S(`a:${p[0]}|k:${p[3]==='r'?p[1]+R('ed').replace('>ed<','>'+p[2].slice(p[1].length)+'<'):R(p[2])}|n:${p[4]}|q:in ${s.y}.`),say:`${p[0]} ${p[2]} ${p[4]} in ${s.y}.`,ar:`${p[5]} عام ${s.y}.`,why:p[3]==='r'?['منتظم ← + ed.','Regular → + ed.']:['شاذ ← يُحفظ.','Irregular → learn it.']}}},
 think:[['صار وخلص في وقت معروف؟ ← الماضي البسيط.','Finished at a known time? → past simple.'],['منتظم ← ed. شاذ ← يُحفظ.','Regular → ed. Irregular → learn it.']]};

NH['السؤال والنفي بـ did']={
 say:[`في السؤال والنفي ما نغيّر الفعل، نجيب ${E('did')} تشيل علامة الماضي، والفعل يرجع لأصله:${FM('When','+','did','+','الفاعل','+','الفعل الأصلي')}${E('When did they launch it?')}<br>والنفي: ${E("They didn't launch it.")}`,
  `In questions and negatives ${E('did')} carries the past, and the verb goes back to its base form: ${E('When did they launch it?')} / ${E("They didn't launch it.")}`],
 life:[['When did you arrive?','متى وصلت؟'],["I didn't see him.",'لم أره.']],
 scene:{title:['اسأل عن الحدث','Ask about the event'],
  ctrl:[{k:'y',label:['الحدث','Event'],opts:Object.keys(SP).map(y=>[+y,y])},{k:'f',label:['الشكل','Form'],opts:[['p',['مثبتة','positive']],['q',['سؤال','question']],['n',['نفي','negative']]]}],
  svg:s=>spSvg(s.y),
  ask:s=>s.f==='p'?null:{q:['بعد did الفعل:','After did, the verb is:'],opts:[SP[s.y][1],SP[s.y][2]],a:SP[s.y][1]},
  out:s=>{const p=SP[s.y];return s.f==='p'?{t:S(`a:${p[0]}|k:${p[2]}|n:${p[4]}.`),ar:p[5]+'.',why:['مثبتة ← الفعل بالماضي.','Positive → past form.']}:s.f==='q'?{t:S(`q:When|x:did|a:${p[0]==='They'?'they':p[0]}|k:${p[1]}|n:${p[4]}?`),ar:`متى ${p[5].split(' ')[0]}…؟`,why:['سؤال ← did + الفعل الأصلي.','Question → did + base verb.']}:{t:S(`a:${p[0]}|x:didn't|k:${p[1]}|n:${p[4]}|q:in 2000.`),ar:`لم يحدث ذلك عام 2000.`,why:["نفي ← didn't + الفعل الأصلي.","Negative → didn't + base verb."]}}},
 think:[['سؤال أو نفي بالماضي؟ ← did / didn\'t والفعل يرجع لأصله.',"Past question or negative? → did / didn't + base verb."]]};

const DT={mon:['Monday','on','يوم الاثنين'],date:['the 5th of October 1957','on','في 5 أكتوبر 1957'],month:['October','in','في أكتوبر'],year:['1957','in','عام 1957'],ago:['two days','ago','قبل يومين']};
NH['التواريخ: on و in و ago']={
 say:[`كل نوع وقت له كلمته: يوم أو تاريخ كامل ← ${E('on')}. شهر أو سنة ← ${E('in')}. ولما نحسب من اليوم للورا ← المدة + ${E('ago')}: ${E('two days ago')} = قبل يومين.`,
  `A day or a full date → ${E('on')}. A month or a year → ${E('in')}. Counting back from today → time + ${E('ago')}.`],
 life:[['I was born in 2008.','وُلدت عام 2008.'],['I called him two hours ago.','اتصلت به قبل ساعتين.']],
 scene:{title:['التقويم','The calendar'],
  ctrl:[{k:'d',label:['الوقت','Time'],opts:Object.keys(DT).map(k=>[k,DT[k][0].replace('the 5th of October 1957','5 October 1957')])}],
  svg:s=>{let b=sky(150,null)+rc(120,20,160,120,'#fff',{st:ink,rx:8})+rc(120,20,160,30,red,{rx:6})+tx(200,42,s.d==='year'?'1957':s.d==='month'?'OCTOBER':s.d==='mon'?'MONDAY':s.d==='date'?'OCT 1957':'TODAY',{fs:15,c:'#fff'});
   if(s.d==='date'||s.d==='mon')b+=tx(200,110,s.d==='date'?'5':'MON',{fs:34,c:ink});else if(s.d==='ago')b+=tx(200,110,'15',{fs:34})+ar(120,100,60,100,red,4)+tx(60,90,'13',{fs:16,c:red});else b+=[0,1,2,3].map(r=>[0,1,2,3,4,5,6].map(c=>rc(132+c*20,58+r*20,14,14,lgt,{rx:2})).join('')).join('');
   return svg(150,b)},
  ask:s=>({q:['on / in / ago؟','on / in / ago?'],opts:['on','in','ago'],a:DT[s.d][1]}),
  out:s=>{const d=DT[s.d];return d[1]==='ago'?{t:S(`a:It happened|n:${d[0]}|x:ago.`),ar:`حدث ${d[2]}.`,why:['ago بعد المدة.','ago comes after the time.']}:{t:S(`a:It happened|x:${d[1]}|n:${d[0]}.`),ar:`حدث ${d[2]}.`,why:d[1]==='on'?['يوم أو تاريخ كامل ← on.','A day or a full date → on.']:['شهر أو سنة ← in.','A month or a year → in.']}}},
 think:[['يوم / تاريخ كامل ← on. شهر / سنة ← in.','Day / full date → on. Month / year → in.'],['من اليوم للورا ← المدة + ago.','Back from today → time + ago.']]};

/* =================== الوحدة 9: الوظيفة والتثبيت =================== */
const PT={engine:['The engine','drives','the fan',1,'المحرك يدير المروحة'],fan:['The fan','pulls','the air in',1,'المروحة تسحب الهواء'],levers:['The levers','control','the speed',2,'الأذرع تتحكم في السرعة'],handlebar:['The handlebar','steers','the board',1,'المقود يوجّه اللوح'],rudders:['The rudders','turn','the hovercraft',2,'الدفّات تدير الحوّامة']};
const hcSvg=k=>{const on=x=>k===x?red:null;let b=sky(170,null)+rc(0,140,400,30,'#5d9cc6',{rx:0})+`<path d="M60 130 Q60 112 90 110 H310 Q340 112 340 130Z" fill="#33424c"/>`+rc(110,80,160,32,on('handlebar')?'#f6d6cf':'#e8ecef',{st:ink,rx:8})+ci(300,80,30,'none',{st:on('fan')||'#7d878e',sw:5})+[0,1,2].map(i=>ln(300,80,300+24*Math.cos(i*2.1),80+24*Math.sin(i*2.1),on('fan')||'#7d878e',4)).join('')+rc(240,92,36,22,on('engine')||'#7d878e',{rx:4})+[340,352].map(x=>rc(x,56,8,46,on('rudders')||'#5d7f96',{rx:2})).join('')+ln(160,80,150,56,on('levers')||ink,4)+ln(176,80,170,56,on('levers')||ink,4)+ln(140,80,130,60,on('handlebar')||ink,4);return svg(170,b)};
NH['الوظيفة بالمضارع البسيط']={
 say:[`لما تشرح آلة تقول وش يسوي كل جزء دايماً ← المضارع البسيط. الجزء الواحد يأخذ ${E('s')}: ${E('The engine drives the fan.')} والأجزاء الكثيرة بدون ${E('s')}: ${E('The levers control the speed.')}`,
  `To explain a machine we say what each part always does (present simple). One part takes ${E('s')}; more parts don't.`],
 life:[['The fridge keeps food cold.','الثلاجة تحافظ على الطعام بارداً.'],['The keys open the doors.','المفاتيح تفتح الأبواب.']],
 scene:{title:['أجزاء الحوّامة','Parts of the hovercraft'],
  ctrl:[{k:'p',label:['الجزء','Part'],opts:Object.keys(PT).map(k=>[k,k])},{k:'f',label:['الشكل','Form'],opts:[['s',['جملة','sentence']],['q',['سؤال','question']]]}],
  svg:s=>hcSvg(s.p),
  ask:s=>({q:['الجزء واحد ولا أكثر؟','One part or more?'],opts:['one (+ s)','more (no s)'],a:PT[s.p][3]===1?'one (+ s)':'more (no s)'}),
  out:s=>{const p=PT[s.p],one=p[3]===1;const v=one?p[1].replace(/s$/,'')+R('s'):p[1];return s.f==='s'?{t:S(`a:${p[0]}|k:${v}|n:${p[2]}.`),say:`${p[0]} ${p[1]} ${p[2]}.`,ar:p[4]+'.',why:one?['واحد ← الفعل + s.','One → verb + s.']:['أكثر ← بدون s.','More → no s.']}:{t:S(`q:What|x:${one?'does':'do'}|a:${p[0].toLowerCase()}|k:do?|q:— ${one?'It':'They'} ${p[1]} ${p[2]}.`),ar:`ماذا ${one?'يفعل':'تفعل'} ${p[4].split(' ')[0]}؟`,why:one?['واحد ← What does … do?','One → What does … do?']:['أكثر ← What do … do?','More → What do … do?']}}},
 think:[['الجزء واحد؟ ← الفعل + s، والسؤال What does … do?','One part? → verb + s; What does … do?'],['أكثر؟ ← بدون s، والسؤال What do … do?','More? → no s; What do … do?']]};

const PU={handlebar:['the handlebar','steer the board','المقود: توجيه اللوح'],fan:['the fan','push the air down','المروحة: دفع الهواء إلى الأسفل'],engine:['the engine','turn the fan','المحرك: إدارة المروحة']};
NH['الغرض والوظيفة: purpose و function و job']={
 say:[`في دليل المستخدم نقول الوظيفة بجملة أطول:${FM('The purpose / function / job of','+','الجزء','+','is to','+','الفعل كما هو')}${E('The purpose of the handlebar is to steer the board.')} والكلمات الثلاث بنفس المعنى، وبعد ${E('is to')} الفعل دايماً كما هو.`,
  `In manuals: ${E('The purpose / function / job of')} + part + ${E('is to')} + verb. The three words mean the same here.`],
 life:[['The job of a teacher is to teach.','عمل المعلم هو التدريس.'],['The purpose of this key is to open the box.','الغرض من هذا المفتاح فتح الصندوق.']],
 scene:{title:['اكتب سطر الدليل','Write the manual line'],
  ctrl:[{k:'p',label:['الجزء','Part'],opts:Object.keys(PU).map(k=>[k,k])},{k:'w',label:['الكلمة','Word'],opts:[['purpose','purpose'],['function','function'],['job','job']]}],
  svg:s=>hcSvg(s.p),
  ask:()=>({q:['بعد is to:','After is to:'],opts:['steer','steers','steering'],a:'steer',hint:['الفعل كما هو.','The verb as it is.']}),
  out:s=>{const p=PU[s.p];return{t:S(`x:The ${s.w} of|a:${p[0]}|x:is to|k:${p[1].split(' ')[0]}|n:${p[1].split(' ').slice(1).join(' ')}.`),ar:p[2]+'.',why:['is to + الفعل كما هو.','is to + the verb as it is.']}}},
 think:[['أكتب دليل رسمي؟ ← The purpose of … is to + الفعل.','A formal manual? → The purpose of … is to + verb.']]};

const AT={attached:['The handle','attached to','the door','المقبض مثبّت على الباب'],connected:['The charger','connected to','the socket','الشاحن موصول بالمقبس'],mounted:['The engine','mounted on','the frame','المحرك مركّب على الإطار'],suspended:['The lamp','suspended from','the ceiling','المصباح معلّق من السقف']};
NH['التثبيت: attached و connected و mounted و suspended']={
 say:[`كل طريقة تثبيت لها صفة وحرف جر ثابت يتحفظ معها:<br>${E('attached to')} ملصوق فيه · ${E('connected to')} موصول بسلك · ${E('mounted on')} مركّب فوقه · ${E('suspended from')} معلّق ومتدلّي منه.`,
  `Each way of fixing has an adjective and a fixed preposition: attached to · connected to · mounted on · suspended from.`],
 life:[['The TV is mounted on the wall.','التلفزيون مركّب على الجدار.'],['The lamp is suspended from the ceiling.','المصباح معلّق من السقف.']],
 scene:{title:['كيف هو مثبّت؟','How is it fixed?'],
  ctrl:[{k:'a',label:['التثبيت','Fixing'],opts:Object.keys(AT).map(k=>[k,k])}],
  svg:s=>{let b=sky(160,null);if(s.a==='attached')b+=rc(150,20,100,130,'#a7744a',{rx:2})+rc(222,80,18,30,'#c9d1d6',{st:ink,rx:4})+ci(231,95,13,'none',{st:red,sw:3});
   if(s.a==='connected')b+=rc(300,60,50,60,'#fff',{st:ink,rx:6})+ci(318,90,4,ink)+ci(332,90,4,ink)+rc(80,70,60,40,ink,{rx:6})+`<path d="M140 90 Q220 140 300 90" stroke="${red}" stroke-width="4" fill="none"/>`;
   if(s.a==='mounted')b+=rc(80,110,240,16,'#7d878e',{rx:3})+rc(150,60,100,50,red,{rx:8})+ci(200,85,14,ink);
   if(s.a==='suspended')b+=rc(0,0,400,14,'#cdb894',{rx:0})+ln(200,14,200,80,red,3)+`<path d="M170 110 L200 80 L230 110Z" fill="${yel}"/>`+ci(200,116,10,'#fff3c7');
   return svg(160,b)},
  ask:s=>{const p=AT[s.a][1].split(' ')[1];return{q:[`${s.a} + ؟`,`${s.a} + ?`],opts:['to','on','from'],a:p}},
  out:s=>{const a=AT[s.a];return{t:S(`a:${a[0]}|q:is|k:${a[1].split(' ')[0]}|x:${a[1].split(' ')[1]}|n:${a[2]}.`),ar:a[3]+'.',why:['الصفة وحرف جرّها يتحفظون مع بعض.','Learn the adjective with its preposition.']}}},
 think:[['ملصوق؟ attached to. بسلك؟ connected to. فوقه؟ mounted on. متدلّي؟ suspended from.','Stuck to it? attached to. By a cable? connected to. On top? mounted on. Hanging? suspended from.']]};

/* =================== الوحدة 9: الدعم الفني =================== */
const CL=[['You\'ve reached the computer hotline. This is Sam speaking.','tech','الفني يعرّف بنفسه.'],['How can I help you?','tech','الفني يعرض المساعدة.'],["My printer doesn't work.",'cust','الزبون يصف المشكلة.'],["I'll talk you through it.",'tech','الفني يرشدك خطوة خطوة.'],['Look at the back. Is the cable connected?','tech','الفني يعطي خطوة ويسأل.']];
NH['عبارات مكالمة الدعم']={
 say:[`مكالمة الدعم الفني لها ترتيب شبه ثابت: الفني يعرّف بنفسه، ثم يعرض المساعدة، أنت تصف المشكلة، ثم يرشدك خطوة خطوة. إذا عرفت العبارات بترتيبها فهمت المكالمة.`,
  `A support call has an almost fixed order: introduction, offer of help, the problem, then step-by-step help.`],
 life:[['How can I help you?','كيف أستطيع مساعدتك؟'],["My phone doesn't work.",'جوالي لا يعمل.']],
 scene:{title:['امشِ مع المكالمة','Follow the call'],
  ctrl:[{k:'i',label:['المرحلة','Stage'],range:[1,5,1],init:1}],
  svg:s=>{const c=CL[s.i-1],t=c[1]==='tech';return svg(150,sky(150,null)+man(70,120,blu,1)+rc(46,58,16,10,ink,{rx:3})+man(330,120,grn,1)+rc(338,58,16,10,ink,{rx:3})+tx(70,145,'technician',{fs:11,c:gry})+tx(330,145,'customer',{fs:11,c:gry})+`<path d="M${t?110:290} 40 L${t?95:305} 54" stroke="${ink}" stroke-width="2"/>`+rc(110,14,180,30,t?'#e2f2e8':'#fff3c7',{st:ink,rx:12})+tx(200,34,`${s.i} / 5`,{fs:13}))},
  ask:s=>({q:['مين يقولها؟','Who says it?'],opts:['technician','customer'],a:CL[s.i-1][1]==='tech'?'technician':'customer'}),
  out:s=>{const c=CL[s.i-1];return{t:S(`q:${c[0]}`),ar:c[2],why:[c[2],c[2]]}}},
 think:[['وين أنا في المكالمة؟ تعريف؟ مشكلة؟ خطوات؟','Where am I in the call?']]};

const CO={pc:['the printer','is','the computer','it','الطابعة موصولة بالحاسوب؟'],amp:['the speakers','are','the amplifier','they','السماعات موصولة بالمضخّم؟'],rt:['the cables','are','the router','they','الكابلات موصولة بالراوتر؟']};
NH['السؤال عن التوصيلات']={
 say:[`أغلب الأعطال سببها سلك مفصول، فالفني يسأل كثير:${FM('Is / Are','+','الجهاز','+','connected to','+','الجهاز الثاني')}${E('Is the printer connected to the computer?')} والجواب: ${E('Yes, it is.')} / ${E("No, it isn't.")}`,
  `Most faults are a loose cable: ${E('Is the printer connected to the computer?')} — ${E('Yes, it is.')} / ${E("No, it isn't.")}`],
 life:[['Is your phone connected to the Wi-Fi?','هل جوالك متصل بالواي فاي؟'],['Are the lights on?','هل الأنوار مضاءة؟']],
 scene:{title:['افحص التوصيلة','Check the connection'],
  ctrl:[{k:'d',label:['الجهاز','Device'],opts:[['pc','printer'],['amp','speakers'],['rt','cables']]},{k:'c',label:['التوصيلة','Cable'],opts:[['y',['موصولة','connected']],['n',['مفصولة','not connected']]]}],
  svg:s=>{let b=sky(140,null)+rc(50,50,90,60,'#e8ecef',{st:ink,rx:8})+tx(95,128,CO[s.d][0].replace('the ',''),{fs:12})+rc(260,50,90,60,'#33424c',{rx:8})+tx(305,128,CO[s.d][2].replace('the ',''),{fs:12});b+=s.c==='y'?`<path d="M140 80 Q200 110 260 80" stroke="${grn}" stroke-width="4" fill="none"/>`+ok(200,40):`<path d="M140 80 Q170 100 185 96" stroke="${red}" stroke-width="4" fill="none"/><path d="M215 96 Q230 100 260 80" stroke="${red}" stroke-width="4" fill="none"/>`+no(200,40);return svg(140,b)},
  ask:s=>({q:['Is ولا Are؟','Is or Are?'],opts:['Is','Are'],a:cap(CO[s.d][1])}),
  out:s=>{const c=CO[s.d],y=s.c==='y';return{t:S(`x:${cap(c[1])}|a:${c[0]}|k:connected to|n:${c[2]}?|q:— ${y?`Yes, ${c[3]} ${c[1]}.`:`No, ${c[3]} ${c[1]}n't.`}`),ar:`${c[4]} — ${y?'نعم.':'لا.'}`,why:c[1]==='is'?['واحد ← Is، والجواب it is.','One → Is; answer it is.']:['أكثر ← Are، والجواب they are.','More → Are; answer they are.']}}},
 think:[['الجهاز واحد ← Is … connected to …? أكثر ← Are …?','One → Is …? More → Are …?']]};

const SH={is:['Is it on?','it','is','هل هو مشغّل؟'],are:['Are the cables connected?','they','are','هل الكابلات موصولة؟'],do:['Do you have a router?','I','do','هل عندك راوتر؟'],does:['Does it work?','it','does','هل يعمل؟'],did:['Did you restart it?','I','did','هل أعدت تشغيله؟'],have:['Have you checked the cable?','I','have','هل فحصت الكابل؟'],can:['Can you see a green light?','I','can','هل ترى ضوءاً أخضر؟'],areyou:['Are you at home?','I','am','هل أنت في البيت؟']};
NH['الجواب القصير بالفعل المساعد']={
 say:[`في المكالمة ما نعيد السؤال كله. نشوف أول كلمة في السؤال ونرجعها في الجواب:${FM('Yes,','+','ضمير','+','الكلمة')}${E('Do you have a router? — Yes, I do.')} والنفي نزيد ${E("n't")}: ${E("No, I don't.")}`,
  `We don't repeat the whole question; we repeat the first word of the question: ${E('Do you have a router? — Yes, I do.')} / ${E("No, I don't.")}`],
 life:[['Do you like tea? — Yes, I do.','هل تحب الشاي؟ — نعم.'],['Can you swim? — No, I can\'t.','هل تستطيع السباحة؟ — لا.']],
 scene:{title:['جاوب باختصار','Answer short'],
  ctrl:[{k:'q',label:['السؤال','Question'],opts:Object.keys(SH).map(k=>[k,SH[k][0].split(' ')[0]+(k==='areyou'?' you':'')])},{k:'a',label:['الجواب','Answer'],opts:[['y','Yes'],['n','No']]}],
  svg:s=>svg(110,sky(110,null)+bub(20,16,240,36,SH[s.q][0],{fs:13})+bub(170,62,210,36,`${s.a==='y'?'Yes':'No'}, ${SH[s.q][1]} ___ .`,{fs:14,c:blu})),
  ask:s=>{const h=SH[s.q],neg=s.a==='n';const a=neg?(h[2]==='am'?"'m not":h[2]+"n't").replace("cann't","can't"):h[2];return{q:['وش الكلمة؟','Which word?'],opts:[...new Set([a,'do','is','have'])].slice(0,4),a}},
  out:s=>{const h=SH[s.q],neg=s.a==='n';const w=neg?(h[2]==='am'?"I'm not":`${h[1]} ${h[2]}n't`.replace("cann't","can't")):`${h[1]} ${h[2]}`;return{t:S(`q:${h[0]}|q:—|q:${neg?'No,':'Yes,'}|x:${w}.`),ar:`${h[3]} — ${neg?'لا.':'نعم.'}`,why:['الجواب يعيد أول كلمة في السؤال.','The answer repeats the first word of the question.']}}},
 think:[['وش أول كلمة في السؤال؟ ← أرجعها في الجواب.','What is the first word? → repeat it.'],["Are you …? ← Yes, I am. / No, I'm not.","Are you …? → Yes, I am. / No, I'm not."]]};

/* =================== الوحدة 10: If والسلامة =================== */
const IF={car:["the car doesn't start",'check the battery','إذا لم تعمل السيارة، افحص البطارية'],light:['the light is off','press the reset button','إذا كان الضوء مطفأ، اضغط زر إعادة الضبط'],paper:['the printer has no paper','add some paper','إذا لم يكن في الطابعة ورق، أضف ورقاً']};
NH['If + الحالة، ثم الأمر']={
 say:[`بالعربي: «إذا ما اشتغلت السيارة، افحص البطارية». الإنجليزي نفس الترتيب:${FM('If','+','الحالة','+',',','+','الأمر')}${E("If the car doesn't start, check the battery.")} وإذا بدأت بالأمر ما فيه فاصلة.`,
  `${E('If')} + situation + comma + instruction: ${E("If the car doesn't start, check the battery.")} If you start with the instruction, no comma.`],
 life:[["If you're tired, sleep early.",'إذا كنت متعباً، نم مبكراً.'],["Call me if you need help.",'اتصل بي إذا احتجت مساعدة.']],
 scene:{title:['دليل الأعطال','The troubleshooting guide'],
  ctrl:[{k:'c',label:['الحالة','Situation'],opts:[['car','car'],['light','light'],['paper','paper']]},{k:'o',label:['البداية','Start with'],opts:[['if','If …'],['do',['الأمر','the instruction']]]}],
  svg:s=>svg(120,sky(120,null)+rc(20,30,170,60,'#fff3c7',{st:ink,rx:10})+tx(105,56,'IF',{fs:13,c:gry})+tx(105,76,'situation',{fs:13})+ar(196,60,214,60,grn,3)+rc(220,30,160,60,'#e2f2e8',{st:ink,rx:10})+tx(300,56,'DO',{fs:13,c:gry})+tx(300,76,'instruction',{fs:13})),
  ask:s=>({q:['فيه فاصلة بالنص؟','Is there a comma in the middle?'],opts:['yes','no'],a:s.o==='if'?'yes':'no'}),
  out:s=>{const c=IF[s.c];return s.o==='if'?{t:S(`x:If|n:${c[0]},|k:${c[1]}.`),say:`If ${c[0]}, ${c[1]}.`,ar:c[2]+'.',why:['تبدأ بـ If ← فاصلة بعد الحالة.','Start with If → comma after the situation.']}:{t:S(`k:${cap(c[1])}|x:if|n:${c[0]}.`),ar:c[2]+'.',why:['تبدأ بالأمر ← بدون فاصلة.','Start with the instruction → no comma.']}}},
 think:[['الحالة بعد If بالمضارع (بدون will).','The situation after If is present (no will).'],['الأمر يبدأ بالفعل.','The instruction starts with the verb.']]};

NH['من مخطط السير إلى الجمل']={
 say:[`في مخطط السير: المعيّن سؤال جوابه نعم أو لا، والمستطيل خطوة تسويها. كل فرع يصير جملة ${E('If')}: الجواب هو الحالة، والمستطيل هو الأمر.`,
  `In a flowchart the diamond is a Yes/No question and the rectangle is a step. Each branch becomes an ${E('If')} sentence.`],
 life:[["If it's raining, take an umbrella.",'إذا كانت تمطر، خذ مظلة.']],
 scene:{title:['اتبع الفرع','Follow a branch'],
  ctrl:[{k:'b',label:['الجواب','Answer'],opts:[['y','Yes'],['n','No']]}],
  svg:s=>{const Y=s.b==='y';return svg(200,sky(200,null)+`<path d="M200 20 L290 60 L200 100 L110 60Z" fill="#fff3c7" stroke="${ink}" stroke-width="2"/>`+tx(200,64,'Does the car start?',{fs:12})+ar(110,60,70,130,Y?grn:'#c9d1d6',4)+tx(76,90,'Yes',{fs:13,c:Y?grn:gry})+ar(290,60,330,130,!Y?red:'#c9d1d6',4)+tx(326,90,'No',{fs:13,c:!Y?red:gry})+rc(10,130,120,40,Y?'#e2f2e8':'#f3f5f6',{st:Y?grn:gry,rx:6})+tx(70,155,'Drive away.',{fs:13})+rc(260,130,130,40,!Y?'#fbe9e4':'#f3f5f6',{st:!Y?red:gry,rx:6})+tx(325,155,'Check the battery.',{fs:12}))},
  ask:s=>({q:['الحالة في الجملة:','The situation:'],opts:['the car starts',"the car doesn't start"],a:s.b==='y'?'the car starts':"the car doesn't start"}),
  out:s=>s.b==='y'?{t:S('x:If|n:the car starts,|k:drive away.'),ar:'إذا اشتغلت السيارة، انطلق.',why:['الجواب Yes ← حالة مثبتة.','Yes → positive situation.']}:{t:S("x:If|n:the car doesn't start,|k:check the battery."),ar:'إذا لم تعمل السيارة، افحص البطارية.',why:["الجواب No ← حالة منفية (doesn't).","No → negative situation (doesn't)."]}},
 think:[['المعيّن ← سؤال (الحالة). المستطيل ← أمر.','Diamond → question (situation). Rectangle → instruction.']]};

const RU={hat:['wear a hard hat','touch','يجب لبس الخوذة'],machine:['use the guard','touch the blade','يجب استعمال الواقي']};
NH['صيغ القاعدة: الأمر والمنع']={
 say:[`القاعدة نكتبها بثلاث طرق، كل وحدة أقوى من اللي قبلها:<br>أمر: ${E('Wear a hard hat.')} / ${E("Don't touch it.")}<br>دايماً وأبداً: ${E('Always …')} / ${E('Never …')}<br>الأقوى: ${E('You must …')} / ${E("You mustn't …")}<br>وبعد كل كلمة الفعل كما هو.`,
  `Three ways, each stronger: ${E('Wear …')} / ${E("Don't …")} · ${E('Always …')} / ${E('Never …')} · ${E('You must …')} / ${E("You mustn't …")}`],
 life:[['Always wash your hands.','اغسل يديك دائماً.'],["You mustn't use your phone in class.",'يجب ألا تستعمل جوالك في الفصل.']],
 scene:{title:['اكتب قاعدة الورشة','Write the workshop rule'],
  ctrl:[{k:'d',label:['القاعدة','Rule'],opts:[['do',['افعل','do']],['dont',['لا تفعل',"don't"]]]},{k:'f',label:['القوة','Strength'],range:[1,3,1],init:1}],
  svg:s=>svg(130,sky(130,null)+rc(60,60,280,20,lgt,{rx:10})+rc(60,60,280*s.f/3,20,s.d==='do'?grn:red,{rx:10})+tx(70,104,'weak',{fs:12,c:gry,a:'start'})+tx(330,104,'strong',{fs:12,c:gry,a:'end'})+(s.d==='do'?`<circle cx="200" cy="30" r="20" fill="${blu}"/>`+tx(200,36,'✓',{fs:18,c:'#fff'}):`<circle cx="200" cy="30" r="20" fill="#fff" stroke="${red}" stroke-width="5"/>`+ln(186,16,214,44,red,5))),
  ask:s=>({q:['بعد الكلمة الفعل:','After the word, the verb is:'],opts:['wear','wears','to wear'],a:'wear'}),
  out:s=>{const T=s.d==='do'?[['k:Wear','n:a hard hat.'],['x:Always','k:wear','n:a hard hat.'],['x:You must','k:wear','n:a hard hat.']]:[["x:Don't","k:touch","n:the machine."],['x:Never','k:touch','n:the machine.'],["x:You mustn't",'k:touch','n:the machine.']];return{t:S(T[s.f-1].join('|')),ar:s.d==='do'?['البس الخوذة.','البس الخوذة دائماً.','يجب أن تلبس الخوذة.'][s.f-1]:['لا تلمس الآلة.','لا تلمس الآلة أبداً.','يجب ألا تلمس الآلة.'][s.f-1],why:['الأقوى: must / mustn\'t. وبعدها الفعل كما هو.',"Strongest: must / mustn't. Then the verb as it is."]}}},
 think:[["أبي أمر ولا منع؟ ← Do / Always / must أو Don't / Never / mustn't.","Do or don't? → Do / Always / must or Don't / Never / mustn't."]]};

const SG={warn:['warning sign','There is a danger. Be careful.','لوحة تحذير: يوجد خطر، انتبه.','yellow triangle'],pro:['prohibition sign',"Don't do this.",'لوحة منع: لا تفعل هذا.','red circle with a line'],man:['mandatory action sign','You must do this.','لوحة إلزام: يجب أن تفعل هذا.','blue circle'],safe:['safe condition sign','This is the safe way.','لوحة الحالة الآمنة: هذا هو الطريق الآمن.','green square']};
NH['أنواع لوحات السلامة']={
 say:[`لوحات السلامة لغة عالمية: من الشكل واللون تعرف المعنى قبل القراءة. المثلث الأصفر ← خطر انتبه. الدائرة الحمراء بخط ← ممنوع. الدائرة الزرقاء ← لازم تسويه. المربع الأخضر ← الأمان.`,
  `Safety signs: yellow triangle → danger; red circle with a line → don't; blue circle → you must; green square → safe.`],
 life:[['This sign means "No smoking".','هذه اللوحة تعني «ممنوع التدخين».']],
 scene:{title:['اعرف اللوحة من شكلها','Know the sign by its shape'],
  ctrl:[{k:'s',label:['اللوحة','Sign'],opts:[['warn','triangle'],['pro','red circle'],['man','blue circle'],['safe','green square']]}],
  svg:s=>{let b=sky(160,null);if(s.s==='warn')b+=`<path d="M200 20 L270 140 H130Z" fill="${yel}" stroke="#222" stroke-width="7" stroke-linejoin="round"/>`+tx(200,120,'!',{fs:50,c:'#222'});if(s.s==='pro')b+=ci(200,80,60,'#fff',{st:red,sw:12})+ln(158,38,242,122,red,12)+`<rect x="185" y="60" width="30" height="40" rx="4" fill="#222"/>`;if(s.s==='man')b+=ci(200,80,60,'#1f5fa8')+`<path d="M170 92 A30 30 0 0 1 230 92Z" fill="#fff"/>`+rc(165,90,70,8,'#fff',{rx:3});if(s.s==='safe')b+=rc(140,20,120,120,'#1f8a5b',{rx:6})+man(200,110,'#fff',0.9)+ar(230,80,252,80,'#fff',4);return svg(160,b)},
  ask:s=>({q:['وش معناها؟','What does it mean?'],opts:Object.values(SG).map(v=>v[1]),a:SG[s.s][1]}),
  out:s=>{const g=SG[s.s];return{t:S(`a:It's a|k:${g[0]}.|n:${g[1]}`),ar:g[2],why:[`${g[3]}.`,`${g[3]}.`]}}},
 think:[['شوف الشكل واللون قبل الكلام المكتوب.','Look at the shape and colour first.']]};

const HZ={hot:['The surface is hot.','burn your hand','السطح ساخن. قد تحرق يدك.'],wet:['The floor is wet.','slip and fall','الأرض مبللة. قد تنزلق وتسقط.'],loud:['The machine is very loud.','damage your ears','الآلة مزعجة جداً. قد تؤذي أذنيك.'],sharp:['The blade is sharp.','cut your finger','الشفرة حادة. قد تجرح إصبعك.']};
NH['النتيجة المحتملة: might و could']={
 say:[`التحذير الزين يقول الخطر ثم وش «ممكن» يصير لك. «قد» بالإنجليزي = ${E('might')} أو ${E('could')}، وبعدها الفعل كما هو:${FM('You might / could','+','الفعل كما هو')}${E('The surface is hot. You might burn your hand.')}`,
  `A good warning says the danger, then what might happen: ${E('You might / could')} + verb.`],
 life:[['Take an umbrella. It might rain.','خذ مظلة. قد تمطر.'],["Don't run. You could fall.",'لا تركض. قد تسقط.']],
 scene:{title:['حذّر زميلك','Warn your colleague'],
  ctrl:[{k:'h',label:['الخطر','Danger'],opts:[['hot','hot'],['wet','wet floor'],['loud','loud'],['sharp','sharp']]}],
  svg:s=>{let b=sky(150,130)+man(320,120,blu,1);if(s.h==='hot')b+=rc(80,90,140,40,'#7d878e',{rx:4})+`<path d="M110 80 q8 -14 0 -28 M150 80 q8 -14 0 -28 M190 80 q8 -14 0 -28" stroke="${red}" stroke-width="4" fill="none"/>`;if(s.h==='wet')b+=`<ellipse cx="180" cy="132" rx="90" ry="8" fill="#9fd0ef"/>`+`<path d="M120 130 L140 60 L160 130Z" fill="${yel}" stroke="#222" stroke-width="3"/>`;if(s.h==='loud')b+=rc(80,60,120,70,'#7d878e',{rx:8})+`<path d="M215 70 q20 25 0 50 M235 60 q30 35 0 70" stroke="${red}" stroke-width="4" fill="none"/>`;if(s.h==='sharp')b+=ci(150,90,40,'#c9d1d6',{st:ink})+[...Array(12)].map((_,i)=>{const a=i*Math.PI/6;return `<path d="M${150+40*Math.cos(a)} ${90+40*Math.sin(a)} L${150+50*Math.cos(a+0.15)} ${90+50*Math.sin(a+0.15)} L${150+40*Math.cos(a+0.3)} ${90+40*Math.sin(a+0.3)}Z" fill="#9aa3aa"/>`}).join('');return svg(150,b)},
  ask:()=>({q:['بعد might:','After might:'],opts:['burn','burns','to burn'],a:'burn',hint:['الفعل كما هو.','The verb as it is.']}),
  out:s=>{const h=HZ[s.h];return{t:S(`q:${h[0]}|a:You|x:might|k:${h[1].split(' ')[0]}|n:${h[1].split(' ').slice(1).join(' ')}.`),ar:h[2],why:['might / could = قد (شيء محتمل).','might / could = something possible.']}}},
 think:[['أذكر الخطر، ثم You might / could + الفعل.','Say the danger, then You might / could + verb.']]};

const WN={beam:["There's a low beam in front of you.",'injure your head','انتبه! يوجد عارضة منخفضة أمامك. قد تؤذي رأسك.'],hole:["There's a hole in the floor.",'fall','انتبه! يوجد حفرة في الأرض. قد تسقط.'],cables:['There are some cables on the floor.','trip','انتبه! يوجد كابلات على الأرض. قد تتعثر.']};
NH['التحذير ونتيجته']={
 say:[`زميلك قرّب من خطر؟ ما فيه وقت لكلام طويل. ثلاث قطع قصيرة: نداء (${E('Look out!')}) ← الخطر (${E("There's …")}) ← وش ممكن يصير (${E('You could …')}).`,
  `Three short parts: a call (${E('Look out!')}) → the danger (${E("There's …")}) → what could happen (${E('You could …')}).`],
 life:[['Look out! The floor is wet.','انتبه! الأرض مبللة.']],
 scene:{title:['حذّره بسرعة','Warn him quickly'],
  ctrl:[{k:'h',label:['الخطر','Danger'],opts:[['beam','low beam'],['hole','hole'],['cables','cables']]}],
  svg:s=>{let b=sky(160,140)+man(120,130,blu,1.1);if(s.h==='beam')b+=rc(150,48,220,16,'#a7744a',{rx:2});if(s.h==='hole')b+=`<ellipse cx="240" cy="142" rx="50" ry="10" fill="#222"/>`;if(s.h==='cables')b+=`<path d="M170 138 q20 -10 40 0 t40 0 t40 0" stroke="#222" stroke-width="4" fill="none"/>`;return svg(160,b+tx(330,40,'!',{fs:40,c:red}))},
  ask:s=>({q:["There's ولا There are؟","There's or There are?"],opts:["There's",'There are'],a:s.h==='cables'?'There are':"There's"}),
  out:s=>{const w=WN[s.h];return{t:S(`x:Look out!|n:${w[0]}|a:You|x:could|k:${w[1]}.`),ar:w[2],why:['نداء ← الخطر ← النتيجة.','Call → danger → result.']}}},
 think:[["واحد ← There's. أكثر ← There are.","One → There's. More → There are."]]};

const RP={liquid:["There's some liquid on the floor.","There was some liquid on the floor.",'كان يوجد سائل على الأرض.','is','was'],boxes:['There are some boxes on the stairs.','There were some boxes on the stairs.','كانت توجد صناديق على الدرج.','are','were'],ext:['There are no fire extinguishers.','There were no fire extinguishers.','لم تكن توجد طفايات حريق.','are','were']};
NH['من الحاضر إلى تقرير الماضي']={
 say:[`وقت التفتيش تصف اللي تشوفه الحين (${E('is / are')}). بس التقرير تكتبه بعدين، فتنقل كل شي للماضي: ${E('is → was')} و ${E('are → were')}.`,
  `During the inspection you describe what you see now (${E('is / are')}). The report is written later: ${E('is → was')}, ${E('are → were')}.`],
 life:[['There was a lot of traffic yesterday.','كان هناك زحام كبير أمس.']],
 scene:{title:['الزيارة ثم التقرير','The visit, then the report'],
  ctrl:[{k:'o',label:['الملاحظة','Finding'],opts:[['liquid','liquid'],['boxes','boxes'],['ext','no extinguishers']]},{k:'t',label:['الوقت','When'],opts:[['now',['أثناء الزيارة','during the visit']],['rep',['في التقرير','in the report']]]}],
  svg:s=>svg(130,sky(130,null)+(s.t==='now'?man(80,110,blu,1)+`<path d="M110 60 h40" stroke="${ink}" stroke-width="2"/>`+tx(200,40,'NOW',{fs:16,c:blu}):rc(150,20,100,100,'#fff',{st:ink,rx:4})+[40,56,72,88].map(y=>ln(165,y,235,y,lgt,4)).join('')+tx(200,16,'REPORT',{fs:12,c:red}))),
  ask:s=>s.t==='rep'?{q:[`${RP[s.o][3]} في التقرير يصير:`,`In the report, ${RP[s.o][3]} becomes:`],opts:['was','were'],a:RP[s.o][4]}:null,
  out:s=>{const r=RP[s.o];return s.t==='now'?{t:S(`q:${r[0]}`),ar:r[2].replace('كان يوجد','يوجد').replace('كانت توجد','توجد').replace('لم تكن توجد','لا توجد'),why:['الحين ← is / are.','Now → is / are.']}:{t:S(`x:${r[1].split(' ').slice(0,2).join(' ')}|q:${r[1].split(' ').slice(2).join(' ')}`),ar:r[2],why:[`التقرير ← ${r[3]} → ${r[4]}.`,`Report → ${r[3]} → ${r[4]}.`]}}},
 think:[['أكتب تقرير بعد الزيارة؟ ← was / were.','Writing the report later? → was / were.']]};

const CLK=[[12,'straight ahead','أمامك تماماً'],[1,'ahead, a little to the right','أمامك قليلاً إلى اليمين'],[2,'ahead, to the right','أمامك إلى اليمين'],[3,'on your right','على يمينك'],[4,'behind, to the right','خلفك إلى اليمين'],[5,'behind, a little to the right','خلفك قليلاً إلى اليمين'],[6,'behind you','خلفك'],[7,'behind, a little to the left','خلفك قليلاً إلى اليسار'],[8,'behind, to the left','خلفك إلى اليسار'],[9,'on your left','على يسارك'],[10,'ahead, to the left','أمامك إلى اليسار'],[11,'ahead, a little to the left','أمامك قليلاً إلى اليسار']];
NH['الاتجاه بالساعة']={
 say:[`تخيّل إنك في وسط ساعة ووجهك على 12: الـ 12 قدامك، الـ 3 يمينك، الـ 6 وراك، الـ 9 يسارك. وتقول المكان:${FM("There's a plane at",'+','الرقم','+',"o'clock")}`,
  `Imagine you are in the middle of a clock facing 12: 12 ahead, 3 right, 6 behind, 9 left: ${E("There's a plane at two o'clock.")}`],
 life:[["The mosque is at three o'clock.",'المسجد على يمينك (الساعة الثالثة).']],
 scene:{title:['وين الطائرة؟','Where is the plane?'],
  ctrl:[{k:'h',label:['الساعة',"O'clock"],range:[1,12,1],init:2}],
  svg:s=>{let b=`<rect width="400" height="220" fill="#eaf3f9"/>`+ci(200,110,90,'#fff',{st:ink,sw:2});for(let i=1;i<=12;i++){const a=(i/12)*2*Math.PI-Math.PI/2;b+=tx(200+76*Math.cos(a),115+76*Math.sin(a),i,{fs:13,c:i===s.h?red:ink})}b+=`<path d="M200 92 L210 122 L200 116 L190 122Z" fill="${blu}"/>`;const a=(s.h/12)*2*Math.PI-Math.PI/2,x=200+108*Math.cos(a),y=110+100*Math.sin(a);b+=`<g transform="translate(${x},${y}) rotate(${s.h*30+180})"><path d="M0 -12 L3 -2 L12 2 L3 2 L2 10 L5 12 L-5 12 L-2 10 L-3 2 L-12 2 L-3 -2Z" fill="${red}"/></g>`;return svg(220,b+tx(200,214,'you (facing 12)',{fs:11,c:gry}))},
  ask:s=>({q:['وين هي بالنسبة لك؟','Where is it?'],opts:[CLK[s.h%12][1],CLK[(s.h+3)%12][1],CLK[(s.h+6)%12][1]].sort(),a:CLK[s.h%12][1]}),
  out:s=>({t:S(`q:There's a plane|x:at ${s.h} o'clock.`),say:`There's a plane at ${s.h} o'clock.`,ar:`توجد طائرة ${CLK[s.h%12][2]}.`,why:['at + الرقم + o\'clock.',"at + number + o'clock."]})},
 think:[['وجهك على 12؟ ← الرقم يقول المكان.','Facing 12 → the number gives the direction.']]};

const IQ={when:['When','did','it happen?','It happened at 22.17.','متى حدث ذلك؟ — حدث الساعة 22:17.'],high:['How high','was','the plane?','It was at 3500 m.','كم كان ارتفاع الطائرة؟ — كانت على 3500 م.'],where:['Where','were','the planes?','They were above the city.','أين كانت الطائرتان؟ — كانتا فوق المدينة.'],what:['What','did','the pilot see?','He saw another plane.','ماذا رأى الطيار؟ — رأى طائرة أخرى.']};
NH['أسئلة التحقيق بالماضي']={
 say:[`المحقق يسأل عن شي صار وخلص، فكل الأسئلة بالماضي. إذا السؤال عن وصف (وين؟ كم ارتفاع؟) ← ${E('was / were')}. وإذا فيه فعل ثاني (صار، شاف) ← ${E('did')} + الفعل الأصلي.`,
  `All questions are in the past. Describing (where? how high?) → ${E('was / were')}. Another verb (happen, see) → ${E('did')} + base verb.`],
 life:[['Where were you yesterday?','أين كنت أمس؟'],['What did you eat?','ماذا أكلت؟']],
 scene:{title:['أسئلة المحقق',"The investigator's questions"],
  ctrl:[{k:'q',label:['السؤال','Question'],opts:Object.keys(IQ).map(k=>[k,IQ[k][0]])}],
  svg:s=>svg(140,`<rect width="400" height="140" fill="#14213d"/>`+[[40,30],[300,20],[360,60],[90,90]].map(([x,y])=>ci(x,y,1.5,'#fff')).join('')+`<g transform="translate(150,70)"><path d="M0 0 L60 -6 L70 0 L60 6Z" fill="#c9d1d6"/><path d="M30 -2 L20 -22 L30 -22 L44 -2Z M30 2 L20 22 L30 22 L44 2Z" fill="#9aa3aa"/></g>`+tx(200,130,IQ[s.q][0],{fs:16,c:yel})),
  ask:s=>({q:['did ولا was / were؟','did or was / were?'],opts:['did','was','were'],a:IQ[s.q][1]}),
  out:s=>{const q=IQ[s.q];return{t:S(`a:${q[0]}|x:${q[1]}|n:${q[2]}|q:— ${q[3]}`),ar:q[4],why:q[1]==='did'?['فيه فعل ثاني ← did + الفعل الأصلي.','Another verb → did + base verb.']:[`وصف ← ${q[1]}.`,`Describing → ${q[1]}.`]}}},
 think:[['السؤال عن وصف الحالة؟ ← was / were.','About a state? → was / were.'],['فيه فعل ثاني؟ ← did + الفعل الأصلي.','Another verb? → did + base verb.']]};
})(window);

/* «شاهد الفكرة» لدروس انجل-111. القالب في vx.js (VX.make) */
(function(G){const V=G.VX;if(!V)return;
const M=(id,cfg)=>{V.L[id]=(el,B)=>V.make(el,B,cfg)};
const ink='#3b4a54',grn='#1f8a5b',red='#c4553f',blu='#2f6b8f',yel='#f1b33c',gry='#9aa3aa';
const svg=(h,body,lab)=>`<svg viewBox="0 0 360 ${h}" role="img" aria-label="${lab||''}">${body}</svg>`;
const tx=(x,y,t,o={})=>`<text x="${x}" y="${y}" font-size="${o.fs||12}" font-weight="${o.w||700}" text-anchor="${o.a||'middle'}" fill="${o.c||ink}">${t}</text>`;
const arr=(x1,y1,x2,y2,c=grn,w=4)=>{const a=Math.atan2(y2-y1,x2-x1),h=10;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><path d="M${x2} ${y2} L${x2-h*Math.cos(a-0.45)} ${y2-h*Math.sin(a-0.45)} L${x2-h*Math.cos(a+0.45)} ${y2-h*Math.sin(a+0.45)}Z" fill="${c}"/>`};
const man=(x,y,c=blu,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="-30" r="9" fill="#e8c7a5" stroke="${ink}"/><path d="M-12 12 v-26 q12 -8 24 0 v26z" fill="${c}"/></g>`;
const W=t=>t.split(' | ');
const S=(t,c)=>t.map((x,i)=>['k'+i,x,c&&c[i]||'']);
const RV=(k,chip,a,ac,b,bc,cue,qo,why)=>({k,chip,A:{t:S(a,ac),why:why&&why[0]},B:{t:S(b,bc),why:why&&why[1]},cue,qo});
const REV=(title,items)=>({title,sub:['المس قاعدة لترى مثالها، ثم حوّله.','Tap a rule to see its example, then change it.'],cols:3,sw:[['↔ الصيغة الأخرى','↔ The other form'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة الناقصة:','Choose the missing word:'],items});

/* ---------- 1.1 تقديم نفسك ---------- */
const S11=en=>svg(150,`<rect width="360" height="150" fill="#f3f6f8"/><rect x="70" y="14" width="220" height="122" rx="12" fill="#fff" stroke="${ink}" stroke-width="2"/><rect x="70" y="14" width="220" height="26" rx="12" fill="${blu}"/>${tx(180,32,'VISITOR',{fs:12,c:'#fff'})}${man(110,98,grn,.9)}
 <g class="hl" data-d="name">${tx(150,62,'Andrew Walsh',{fs:14,a:'start'})}</g>
 <g class="hl" data-d="call">${tx(150,80,'"Andy"',{fs:12,a:'start',c:grn})}</g>
 <g class="hl" data-d="dept">${tx(150,100,'Sales Department',{fs:11,a:'start'})}</g>
 <g class="hl" data-d="from">${tx(150,118,'from: Manchester',{fs:11,a:'start'})}</g>
 <g class="hl" data-d="reply">${tx(180,148,'Nice to meet you!',{fs:11,c:red})}</g>`,'بطاقة زائر فيها الاسم والقسم والمدينة');
M('u1-l1',{title:['تقديم نفسك في العمل','Introducing yourself at work'],sub:['المس معلومة في البطاقة لترى كيف تقولها، ثم الصيغة الأخرى.','Tap a fact on the card to see how to say it, then the other form.'],
 scene:S11,cols:3,sw:[['↔ صيغة أخرى','↔ Another form'],['↔ رجوع','↔ Back']],quiz:['اختر الرد المناسب:','Choose the right reply:'],
 items:[RV('name',['name','الاسم','name'],["My name's",'Andrew Walsh.'],['a','k'],["I'm",'Andrew Walsh.'],['a','k'],['Hello, my name\'s Andrew Walsh.','Hello, my name\'s Andrew Walsh.'],['Nice to meet you. I\'m Florence.','Yes, I am.','Fine, thanks.'],[["My name's = My name is.","My name's = My name is."],["I'm = I am، والمعنى نفسه.","I'm = I am, with the same meaning."]]),
  RV('call',['Please call me','الاسم المختصر','short name'],['Please call me','Andy.'],['a','k'],["Everyone calls me",'Andy.'],['a','k'],['My name\'s Andrew, but please call me Andy.','My name\'s Andrew, but please call me Andy.'],['OK, Andy.','Yes, please.','Thank you, Andrew Walsh.'],[['نطلب الاسم الذي نحبه.','We ask for the name we like.'],['المعنى نفسه.','The same meaning.']]),
  RV('dept',['Department','القسم','department'],["I'm in the",'Sales','Department.'],['a','k',''],['I work in','Sales.'],['a','k'],['Which department are you in?','Which department are you in?'],["I'm in the Sales Department.","I'm from Sales Department.","I'm Sales."],[['القسم: I\'m in the … Department.','Department: I\'m in the … Department.'],['أو: I work in …','Or: I work in …']]),
  RV('from',['from','المدينة','city'],["I'm from",'Manchester.'],['a','k'],['Where are you from?'],['q'],['Where are you from?','Where are you from?'],["I'm from Manchester.","I'm in Manchester.","I from Manchester."],[['المدينة أو البلد: I\'m from …','City or country: I\'m from …'],['السؤال: Where are you from?','The question: Where are you from?']]),
  RV('reply',['Nice to meet you','الرد','reply'],['Nice to meet you.'],['a'],['Nice to meet you,','too.'],['a','n'],['Nice to meet you.','Nice to meet you.'],['Nice to meet you, too.','Me too nice.','Yes, it is.'],[['أول من يتكلم يقول: Nice / Good to meet you.','The first person says: Nice / Good to meet you.'],['الآخر يضيف too.','The other person adds too.']])]});

/* ---------- 1.2 تقديم الآخرين ---------- */
const S12=en=>svg(140,`<rect width="360" height="140" fill="#f3f6f8"/>${man(70,96,grn)}${man(180,96,blu)}${man(290,96,red)}${tx(70,128,'Tom')}${tx(180,128,en?'you':'أنت')}${tx(290,128,'Maria')}
 <g class="hl" data-d="intro">${arr(196,60,268,60)}${arr(164,60,92,60)}</g>
 <g class="hl" data-d="this"><path d="M200 70 q40 -40 80 0" fill="none" stroke="${blu}" stroke-width="3"/></g>
 <g class="hl" data-d="works">${tx(290,30,'Production',{fs:11,c:grn})}</g>
 <g class="hl" data-d="name">${tx(70,30,'"Tom"',{fs:12,c:grn})}</g>`,'أنت تقدّم Tom إلى Maria');
M('u1-l2',{title:['تقديم شخصين أحدهما للآخر','Introducing two people'],sub:['المس جزءاً من المشهد لترى العبارة المناسبة.','Tap part of the scene to see the right phrase.'],
 scene:S12,cols:4,sw:[['↔ صيغة أخرى','↔ Another form'],['↔ رجوع','↔ Back']],quiz:['اختر العبارة المناسبة:','Choose the right phrase:'],
 items:[RV('intro',['introduce','التقديم','introduce'],["Tom, I'd like to",'introduce you to','Maria.'],['','a','k'],["Maria,",'this is','Tom.'],['','a','k'],['You want to introduce Tom to Maria. You say:','You want to introduce Tom to Maria. You say:'],["Tom, I'd like to introduce you to Maria.","Tom, I'd like introduce Maria.","Tom, this Maria."],[['رسمي: I\'d like to introduce you to …','Formal: I\'d like to introduce you to …'],['أبسط: This is …','Simpler: This is …']]),
  RV('this',['This is','هذا','this is'],['Maria,','this is','Tom.'],['','a','k'],['This is','Tom.','He works in Sales.'],['a','k',''],['Maria, ___ Tom.','Maria, ___ Tom.'],['this is','he is','it is'],[['نقدّم شخصاً بـ This is (لا He is).','We introduce a person with This is (not He is).'],['ثم نضيف معلومة عنه.','Then we add a fact about him.']]),
  RV('works',['works in','معلومة','a fact'],['Maria','works in','Production.'],['k','a',''],['She','is a director of','Production.'],['','a',''],['Maria ___ in Production.','Maria ___ in Production.'],['works','work','working'],[['she / he + works (بـ s).','she / he + works (with s).'],['أو: is a director of …','Or: is a director of …']]),
  RV('name',['first name','الاسم الأول','first name'],['Hello,','Tom.','Nice to meet you.'],['','k','a'],['Hello,','Mr Brown.','Nice to meet you.'],['','n','a'],['In a friendly office, you say:','In a friendly office, you say:'],['Hello, Tom.','Hello, Mr Tom.','Hello, Brown Tom.'],[['الاسم الأول في جو ودّي.','The first name in a friendly place.'],['Mr / Ms + اسم العائلة في جو رسمي.','Mr / Ms + family name in a formal place.']])]});

/* ---------- 2.1 أدوات المكتب ---------- */
const S21=en=>svg(150,`<rect width="360" height="150" fill="#f6f2ea"/><rect x="0" y="120" width="360" height="30" fill="#c9a77a"/>
 <g class="hl" data-d="calc"><rect x="20" y="50" width="50" height="70" rx="6" fill="#555"/><rect x="26" y="56" width="38" height="14" fill="#cfe"/>${[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${28+c*12}" y="${76+r*13}" width="9" height="9" fill="#ddd"/>`).join('')).join('')}</g>
 <g class="hl" data-d="ruler"><rect x="86" y="96" width="90" height="16" fill="${yel}" stroke="${ink}"/>${[0,1,2,3,4,5,6,7,8].map(i=>`<line x1="${92+i*10}" y1="96" x2="${92+i*10}" y2="104" stroke="${ink}"/>`).join('')}</g>
 <g class="hl" data-d="hl"><rect x="190" y="70" width="16" height="48" rx="3" fill="#e5f04a" stroke="${ink}"/></g>
 <g class="hl" data-d="cf"><rect x="220" y="64" width="22" height="54" rx="5" fill="#fff" stroke="${ink}"/>${tx(231,96,'CF',{fs:9})}</g>
 <g class="hl" data-d="rubber"><rect x="258" y="100" width="34" height="18" rx="4" fill="#f4a3b0" stroke="${ink}"/></g>
 <g class="hl" data-d="stapler"><path d="M300 104 h52 v14 h-52z M300 104 l46 -14 h6 v14" fill="${red}" stroke="${ink}"/></g>`,'أدوات مكتب: آلة حاسبة، مسطرة، قلم تظليل، مزيل حبر، ممحاة، دباسة');
const OF=(k,name,thing,ar,e2,stuff)=>({k,chip:[name,ar,e2],A:{t:[['i',"It's"],['t',stuff?'stuff':'a thing','q'],['f','for'],['v',thing+'.','a']],why:stuff?['لا يُعد (سائل): It\'s stuff for + ing.','Uncountable (a liquid): It\'s stuff for + ing.']:['لا تعرف الاسم؟ صِف وظيفته: It\'s a thing for + ing.','You don\'t know the name? Describe its use: It\'s a thing for + ing.']},B:{t:[['i',"It's called"],['n',name+'.','k']],why:['ثم يخبرك زميلك باسمه.','Then your colleague tells you its name.']},qa:[["What's this called in English?",`It's called ${/^[aeiou]/.test(name)?'an':'a'} ${name}.`.replace('a correction fluid','correction fluid')]]});
M('u2-l1',{title:['لا تعرف اسمه؟ صِف وظيفته','Don\'t know its name? Describe its use'],sub:['المس أداة في المكتب لترى كيف تصفها، ثم اسمها.','Tap an office item to see how to describe it, then its name.'],
 scene:S21,cols:3,sw:[['↔ اسمه','↔ Its name'],['↔ الوصف','↔ The description']],quiz:['ما الأداة المحاطة بالأخضر؟','Which item is in green?'],
 items:[OF('calc','calculator','doing sums','آلة حاسبة','calculator'),OF('ruler','ruler','measuring lines','مسطرة','ruler'),OF('hl','highlighter','marking words','قلم تظليل','highlighter'),OF('cf','correction fluid','covering mistakes','مزيل الحبر','correction fluid',1),OF('rubber','rubber','removing pencil marks','ممحاة','rubber'),OF('stapler','stapler','joining papers','دباسة','stapler')].map(x=>{if(x.k==='cf')x.chip[0]='correction fluid';return x})});

/* ---------- 2.2 الجهات والمواقع ---------- */
const S22=en=>svg(200,`<rect width="360" height="200" fill="#e8f2e4"/><path d="M300 0 h60 v200 h-60z" fill="#9cc7e8"/>${tx(330,100,'sea',{fs:11,c:blu})}
 <circle cx="160" cy="100" r="34" fill="#d9d2c4" stroke="${ink}"/>${tx(160,104,en?'city':'المدينة',{fs:11})}
 <g transform="translate(40,40)"><circle r="22" fill="#fff" stroke="${ink}"/>${tx(0,-8,'N',{fs:10})}${tx(0,18,'S',{fs:10})}${tx(-14,4,'W',{fs:10})}${tx(14,4,'E',{fs:10})}</g>
 <g class="hl" data-d="north"><rect x="146" y="10" width="28" height="22" fill="${red}"/>${tx(160,46,'north',{fs:10})}</g>
 <g class="hl" data-d="se"><rect x="236" y="150" width="28" height="22" fill="${red}"/>${tx(250,186,'southeast',{fs:10})}</g>
 <g class="hl" data-d="centre"><rect x="152" y="88" width="16" height="12" fill="${red}"/></g>
 <g class="hl" data-d="coast"><rect x="282" y="80" width="18" height="18" fill="${red}"/>${tx(270,74,'east coast',{fs:10})}</g>
 <g class="hl" data-d="suburbs"><rect x="104" y="120" width="18" height="14" fill="${red}"/>${tx(100,150,'suburbs',{fs:10})}</g>`,'خريطة: مدينة، شمال، جنوب شرق، ساحل شرقي، ضواحٍ');
const LC=(k,a,b,ar,e2,qo)=>({k,chip:[k==='se'?'southeast':k==='coast'?'east coast':k,ar,e2],A:{t:[['s','The factory'],['b',"is"],['p',a+'.','a']]},B:{t:[['s',"It's"],['p',b+'.','n']]},cue:null,qo:null});
M('u2-l2',{title:['أين مكان العمل؟','Where is the workplace?'],sub:['المس مكاناً على الخريطة لترى العبارة التي تصفه.','Tap a place on the map to see the phrase that describes it.'],
 scene:S22,cols:3,sw:[['↔ بالنسبة للمدينة','↔ Next to the city'],['↔ في المنطقة','↔ In the area']],quiz:['أين المكان المحاط بالأخضر؟','Where is the place in green?'],
 items:[LC('north','in the north','north of the city','الشمال','north'),LC('se','in the southeast','southeast of the city','جنوب شرق','southeast'),LC('centre','in the centre','in the city centre','المركز','centre'),LC('coast','on the east coast','by the sea','الساحل','coast'),LC('suburbs','in the suburbs','just outside the city','الضواحي','suburbs')].map(x=>{x.A.why=['in the + الجهة (in the north)، و on the coast للساحل.','in the + direction (in the north), and on the coast for the sea side.'];x.B.why=['الجهة + of + المكان: north of the city.','direction + of + place: north of the city.'];return x})});

/* ---------- 3.1 وصف منتج ---------- */
const S31=en=>svg(170,`<rect width="360" height="170" fill="#f6f2ea"/><rect x="110" y="20" width="140" height="140" rx="14" fill="#5b3a29" stroke="${ink}" stroke-width="2"/><rect x="130" y="40" width="100" height="30" rx="4" fill="#222"/>${tx(180,60,'Tuttoespresso',{fs:10,c:'#fff'})}
 <g class="hl" data-d="has">${[0,1,2,3].map(i=>`<circle cx="${140+i*27}" cy="92" r="9" fill="${yel}" stroke="${ink}"/>`).join('')}${tx(180,120,'4 types',{fs:10,c:'#fff'})}</g>
 <g class="hl" data-d="can">${arr(250,100,330,100)}${tx(296,90,'go anywhere',{fs:10})}</g>
 <g class="hl" data-d="costs"><rect x="20" y="70" width="80" height="34" rx="6" fill="#fff" stroke="${red}" stroke-width="2"/>${tx(60,92,'50¢ a cup',{fs:12,c:red})}</g>
 <g class="hl" data-d="youcan"><rect x="150" y="132" width="60" height="18" rx="4" fill="#ddd"/>${tx(180,145,'simple',{fs:10})}</g>`,'آلة قهوة: أربعة أنواع، تعمل في أي مكان، السعر 50 سنتاً');
M('u3-l1',{title:['وصف منتج: has و can و costs','Describing a product: has, can and costs'],sub:['المس جزءاً من آلة القهوة لترى الجملة التي تصفه.','Tap part of the coffee machine to see the sentence that describes it.'],
 scene:S31,cols:4,sw:[['↔ سؤال الزبون','↔ The customer\'s question'],['↔ الوصف','↔ The description']],quiz:['اختر الفعل المناسب:','Choose the right verb:'],
 items:[RV('has',['has','فيه','has'],['It','has','four types of coffee.'],['','a','k'],['How many types','does it','have?'],['q','n',''],['It ___ four types of coffee.','It ___ four types of coffee.'],['has','have','is'],[['has = فيه / يملك (مع it).','has = it contains (with it).'],['السؤال: does it have …? (بلا s)','The question: does it have …? (no s)']]),
  RV('can',['can','يستطيع','can'],['It','can','go anywhere.'],['','a','k'],['Can','it','go anywhere?'],['n','',''],['It ___ go anywhere. No pipes!','It ___ go anywhere. No pipes!'],['can','cans','can to'],[['can + فعل أصلي.','can + base verb.'],['السؤال: Can + it …?','The question: Can + it …?']]),
  RV('costs',['costs','السعر','costs'],['The coffee','costs','50¢ a cup.'],['','a','k'],['How much','does','the coffee cost?'],['q','n',''],['How much ___ the coffee cost?','How much ___ the coffee cost?'],['does','is','do'],[['السعر: costs + المبلغ.','The price: costs + amount.'],['How much does … cost?','How much does … cost?']]),
  RV('youcan',['You can','الاستعمال','you can'],['You','can use','it easily.'],['','a','k'],['It','has','a very simple operating system.'],['','a','k'],['___ use it easily.','___ use it easily.'],['You can','You has','You costs'],[['You can = ما يستطيع الزبون فعله.','You can = what the customer can do.'],['السبب: النظام بسيط.','The reason: the system is simple.']])]});

/* ---------- 3.2 المقارنة ---------- */
const BAR=(x,y,w,c,l)=>`<rect x="${x}" y="${y}" width="${w}" height="14" rx="3" fill="${c}"/>${tx(x-6,y+11,l,{fs:10,a:'end'})}`;
const S32=en=>svg(190,`<rect width="360" height="190" fill="#f3f6f8"/>${tx(200,16,en?'plane  vs  train':'الطائرة مقابل القطار',{fs:11})}
 ${[['fast',['plane 800 km/h',220],['train 300 km/h',90]],['cheap',['plane €200',150],['train €90',70]],['comf',['plane',100],['train',190]],['time',['plane 1 h',40],['train 3 h',140]]].map(([k,p,t],i)=>`<g class="hl" data-d="${k}">${BAR(140,30+i*40,p[1],blu,p[0])}${BAR(140,46+i*40,t[1],red,t[0])}</g>`).join('')}`,'مقارنة الطائرة والقطار: السرعة والسعر والراحة والوقت');
const CP=(k,adj,c,a,b,ar,e2,qo)=>({k,chip:[adj,ar,e2],A:{t:[['s',a],['b','is'],['c',c,'a'],['t','than','q'],['o',b+'.']]},B:{t:[['s',b],['b',"isn't as"],['c',adj,'n'],['t','as','q'],['o',a+'.']]},cue:[`${adj} → ?`,`${adj} → ?`],qo});
M('u3-l2',{title:['المقارنة: faster than','Comparing: faster than'],sub:['المس صفاً في المقارنة: من الأطول؟ ثم شاهد الجملة.','Tap a row in the comparison: which is longer? Then see the sentence.'],
 scene:S32,cols:4,sw:[['↔ بطريقة أخرى','↔ Another way'],['↔ رجوع','↔ Back']],quiz:['ما صيغة المقارنة؟','What is the comparative?'],
 items:[CP('fast','fast','faster','The plane','the train','سرعة','speed',['faster','more fast','fastest']),CP('cheap','cheap','cheaper','The train','the plane','سعر','price',['cheaper','more cheap','cheapier']),CP('comf','comfortable','more comfortable','The train','the plane','راحة','comfort',['more comfortable','comfortabler','most comfortable']),{k:'time',chip:['good','أفضل','better'],A:{t:[['s','The plane'],['b','is'],['c','better','a'],['f','for short trips.']]},B:{t:[['s','The train'],['b','is'],['c','worse','n'],['f','for short trips.']]},cue:['good → ?','good → ?'],qo:['better','gooder','more good']}].map(x=>{x.A.why=x.A.why||(x.k==='comf'?['صفة طويلة: more + الصفة + than.','A long adjective: more + adjective + than.']:x.k==='time'?['good → better (شاذة).','good → better (irregular).']:['صفة قصيرة: + er + than.','A short adjective: + er + than.']);x.B.why=x.B.why||(x.k==='time'?['bad → worse (شاذة).','bad → worse (irregular).']:['not as + الصفة + as = أقل.','not as + adjective + as = less.']);return x})});

/* ---------- 3.3 مراجعة 1 ---------- */
M('u3-l3',REV(['مراجعة 1: الوحدات 1–3','Review 1: Units 1–3'],[
 RV('prep',['in / on / at','حروف الجر','prepositions'],["I'm",'in','the Sales Department.'],['','a',''],['Our office is','on','the east coast.'],['','a',''],["I'm ___ the Marketing Department.","I'm ___ the Marketing Department."],['in','on','at']),
 RV('pron',['it / them','الضمائر','pronouns'],['I like the hotel.','It','is near the station.'],['','a',''],['I use these pens.','I like','them.'],['','','a'],['These rulers are good. I use ___ every day.','These rulers are good. I use ___ every day.'],['them','it','they']),
 RV('intro',['This is','التقديم','introductions'],['Maria,','this is','Tom.'],['','a',''],['Nice to meet you,','too.'],['','a'],['Nice to meet you. — Nice to meet you, ___.','Nice to meet you. — Nice to meet you, ___.'],['too','also','to']),
 RV('opp',['big ≠ small','الأضداد','opposites'],['expensive','≠','cheap'],['a','q','n'],['fast','≠','slow'],['a','q','n'],['modern ≠ ___','modern ≠ ___'],['old-fashioned','new','fast']),
 RV('comp',['bigger than','المقارنة','comparative'],['The hotel is','bigger','than','the guesthouse.'],['','a','q',''],['The hotel is','more expensive','than','the guesthouse.'],['','a','q',''],['The train is ___ than the bus.','The train is ___ than the bus.'],['faster','more fast','fast']),
 RV('for',['work for','العمل','work'],['I','work for','a large company.'],['','a',''],['I','work in','the IT department.'],['','a',''],['I work ___ Siemens.','I work ___ Siemens.'],['for','in','of'])]));

/* ---------- 4.1 قول الوقت ---------- */
const clk=(x,y,h,m,k)=>{const a=(h%12+m/60)*30,b=m*6;return `<g class="hl" data-d="${k}"><circle cx="${x}" cy="${y}" r="28" fill="#fff" stroke="${ink}" stroke-width="2"/><line x1="${x}" y1="${y}" x2="${x+16*Math.sin(a*Math.PI/180)}" y2="${y-16*Math.cos(a*Math.PI/180)}" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><line x1="${x}" y1="${y}" x2="${x+24*Math.sin(b*Math.PI/180)}" y2="${y-24*Math.cos(b*Math.PI/180)}" stroke="${red}" stroke-width="2.5"/></g>`};
const TM=[['a',9,30,'half past nine','nine thirty'],['b',10,15,'quarter past ten','ten fifteen'],['c',2,45,'quarter to three','two forty-five'],['d',5,10,'ten past five','five ten'],['e',11,40,'twenty to twelve','eleven forty']];
M('u4-l1',{title:['قول الوقت: past و to','Telling the time: past and to'],sub:['المس ساعة: اقرأها بـ past / to، ثم بالأرقام.','Tap a clock: say it with past / to, then with numbers.'],
 scene:en=>svg(90,`<rect width="360" height="90" fill="#f3f6f8"/>${TM.map((t,i)=>clk(40+i*70,44,t[1],t[2],t[0])).join('')}`,'خمس ساعات'),cols:5,
 sw:[['↔ بالأرقام','↔ With numbers'],['↔ past / to','↔ past / to']],quiz:['كم الساعة؟','What time is it?'],
 items:TM.map(([k,h,m,w,n])=>({k,chip:[h+'.'+(m<10?'0':'')+m,'',''],A:{t:[['i',"It's"],['t',w+'.','a']],why:m<=30?['الدقائق حتى 30: past + الساعة الحالية.','Minutes up to 30: past + this hour.']:['بعد 30: to + الساعة القادمة.','After 30: to + the next hour.']},B:{t:[['i',"It's"],['t',n+'.','k']],why:['أو نقرأ الساعة ثم الدقائق.','Or we say the hour, then the minutes.']},cue:[h+'.'+(m<10?'0':'')+m,h+'.'+(m<10?'0':'')+m],qo:[w,m<=30?w.replace('past','to'):w.replace(' to ',' past '),'half past '+h]}))});

/* ---------- 4.2 الأفعال والأسماء في الجدول ---------- */
const PL=[['plan','09.00','plan','a schedule'],['book','10.30','book','a hotel'],['give','12.00','give','a presentation'],['go','16.00','go','shopping'],['have','19.30','have','dinner']];
M('u4-l2',{title:['جدول الزائر: فعل + اسم','The visitor\'s schedule: verb + noun'],sub:['المس وقتاً في الجدول لترى العمل والفعل الذي يناسبه.','Tap a time in the schedule to see the task and the verb that goes with it.'],
 scene:en=>svg(170,`<rect width="360" height="170" fill="#fff"/><rect x="20" y="10" width="320" height="150" rx="8" fill="#f7f5f0" stroke="${ink}"/>${PL.map(([k,t,v,n],i)=>`<g class="hl" data-d="${k}"><rect x="30" y="${20+i*28}" width="300" height="22" rx="4" fill="#e3eef5"/>${tx(40,35+i*28,t,{fs:11,a:'start'})}${tx(100,35+i*28,v+' '+n,{fs:11,a:'start',c:grn})}</g>`).join('')}`,'جدول يوم الزائر'),cols:5,
 sw:[['↔ طلب مهذب','↔ A polite request'],['↔ الجدول','↔ The schedule']],quiz:['اختر الفعل المناسب:','Choose the right verb:'],
 items:PL.map(([k,t,v,n])=>({k,chip:[t,'',''],A:{t:[['t','At '+t+','],['s','we'],['v',v,'a'],['n',n+'.','k']],why:['كل اسم له فعل يناسبه: give a presentation، have dinner.','Each noun has its own verb: give a presentation, have dinner.']},B:{t:[['q','Could you'],['v',v,'a'],['n',n],['p','for me, please?','q']],why:['طلب مهذب: Could you + فعل أصلي …, please?','A polite request: Could you + base verb …, please?']},cue:[`___ ${n}`,`___ ${n}`],qo:[v,...['make','do','take','have','give'].filter(z=>z!==v).slice(0,2)]}))});

/* ---------- 5.1 الرد على الهاتف ---------- */
const PHN=en=>svg(130,`<rect width="360" height="130" fill="#f3f6f8"/>${man(50,100,grn)}${man(310,100,blu)}<rect x="30" y="44" width="10" height="20" rx="3" fill="${ink}"/><rect x="320" y="44" width="10" height="20" rx="3" fill="${ink}"/>
 <path d="M90 40 q90 -40 180 0" fill="none" stroke="${gry}" stroke-dasharray="6 5" stroke-width="2"/>${tx(50,124,en?'caller':'المتصل',{fs:10})}${tx(310,124,en?'company':'الشركة',{fs:10})}`,'متصل وموظف شركة يتكلمان بالهاتف');
const PR=(k,chip,a,b,cue,qo)=>({k,chip,A:{t:[['a',a,'a']],why:null},B:{t:[['b',b,'n']],why:null},qa:[[a,b]],cue,qo});
M('u5-l1',{title:['عبارات الهاتف: العبارة والرد','Phone phrases: the phrase and the reply'],sub:['المس عبارة لترى من يقولها وكيف يرد الآخر.','Tap a phrase to see who says it and how the other person replies.'],
 scene:PHN,cols:3,sw:[['↔ الرد','↔ The reply'],['↔ العبارة','↔ The phrase']],quiz:['اختر الرد المناسب:','Choose the right reply:'],
 items:[PR('help',['Can I help you?','الموظف','company'],'Good morning, Tecnoplus. Can I help you?',"Yes. Can I speak to Mr Lopez, please?",['Good morning, Tecnoplus. Can I help you?','Good morning, Tecnoplus. Can I help you?'],["Yes. Can I speak to Mr Lopez, please?","Yes, I help you.","Speaking."]),
  PR('speak',['Can I speak to …?','المتصل','caller'],'Can I speak to Mr Lopez, please?','Speaking.',['Can I speak to Mr Lopez? (You are Mr Lopez.)','Can I speak to Mr Lopez? (You are Mr Lopez.)'],['Speaking.',"I'm speak.",'This is speaking.']),
  PR('who',["Who's calling?",'الموظف','company'],"Who's calling, please?",'This is Anna Weber from Siemens.',["Who's calling, please?","Who's calling, please?"],['This is Anna Weber.',"I'm calling.","It's me calling."]),
  PR('mom',['Just a moment.','الموظف','company'],"Just a moment. I'll put you through.",'Thank you.',['Just a moment. I\'ll put you through.','Just a moment. I\'ll put you through.'],['Thank you.','Speaking.','Can I help you?']),
  PR('eng',['Do you speak English?','المتصل','caller'],'Do you speak English?',"Yes, a little. / Sorry, I don't.",['Do you speak English? (✓)','Do you speak English? (✓)'],['Yes, a little.','Yes, I speak.','Yes, I am.'])].map(x=>{x.A.why=['العبارة.','The phrase.'];x.B.why=['الرد المناسب عليها.','The right reply to it.'];return x})});

/* ---------- 5.2 طلب المعلومات ---------- */
M('u5-l2',{title:['طلب البيانات والتحقق منها','Asking for details and checking them'],sub:['المس طلباً لترى العبارة، ثم كيف تتحقق.','Tap a request to see the phrase, then how to check.'],
 scene:PHN,cols:3,sw:[['↔ التحقق','↔ Checking'],['↔ الطلب','↔ The request']],quiz:['اختر العبارة المناسبة:','Choose the right phrase:'],
 items:[PR('name',['name','الاسم','name'],'Can I have your name, please?','Could you spell that, please?',['You want the caller\'s name. You say:','You want the caller\'s name. You say:'],['Can I have your name, please?','Can I your name?','Give me name.']),
  PR('addr',['address','العنوان','address'],"What's your address?",'Can you say that again, please?',["You didn't hear the address. You say:","You didn't hear the address. You say:"],['Can you say that again, please?','Say again you.','What again?']),
  PR('fax',['fax number','الفاكس','fax'],"What's your fax number?","Is that 0044 or 0045?",['You are not sure: 44 or 45?','You are not sure: 44 or 45?'],['Is that 0044 or 0045?','Are that 44?','It is 44 or?']),
  PR('call',["I'm calling to …",'السبب','reason'],"I'm calling to ask for a catalogue.",'Certainly. Can I have your address?',['You explain why you are phoning:','You explain why you are phoning:'],["I'm calling to ask for a catalogue.","I calling for ask catalogue.","I'm call to ask a catalogue."]),
  PR('slow',['slowly','ببطء','slowly'],'Could you speak more slowly, please?','Of course. My name is …',['The caller speaks very fast. You say:','The caller speaks very fast. You say:'],['Could you speak more slowly, please?','Speak slow, please.','You speak more slow?'])].map(x=>{x.A.why=['الطلب المهذب: Can I have … / What\'s your …?','A polite request: Can I have … / What\'s your …?'];x.B.why=['للتحقق: Could you spell that? / Can you say that again?','To check: Could you spell that? / Can you say that again?'];return x})});

/* ---------- 6.1 الطلب والكميات ---------- */
const S61=en=>svg(160,`<rect width="360" height="160" fill="#f6f2ea"/><rect x="0" y="130" width="360" height="30" fill="#c9a77a"/>
 <g class="hl" data-d="few">${[0,1,2].map(i=>`<rect x="${20+i*22}" y="${100}" width="18" height="28" fill="#fff" stroke="${ink}"/>`).join('')}${tx(50,92,'a few',{fs:11})}</g>
 <g class="hl" data-d="lot">${Array.from({length:12},(_,i)=>`<rect x="${110+(i%6)*14}" y="${72+Math.floor(i/6)*28}" width="12" height="26" fill="#fff" stroke="${ink}"/>`).join('')}${tx(150,62,'a lot of',{fs:11})}</g>
 <g class="hl" data-d="little"><rect x="220" y="110" width="30" height="18" fill="#bfe1f5" stroke="${ink}"/>${tx(235,100,'a little',{fs:11})}</g>
 <g class="hl" data-d="much"><rect x="280" y="60" width="60" height="68" fill="#bfe1f5" stroke="${ink}"/>${tx(310,50,'a lot of',{fs:11})}</g>`,'كميات: علب قليلة وكثيرة، وسائل قليل وكثير');
M('u6-l1',{title:['الكميات: a few و a lot of','Quantities: a few and a lot of'],sub:['المس كمية: هل الشيء يُعد أم لا؟ وكيف تسأل عنه؟','Tap an amount: can you count the thing? How do you ask about it?'],
 scene:S61,cols:4,sw:[['↔ السؤال','↔ The question'],['↔ الكمية','↔ The amount']],quiz:['اختر الكلمة المناسبة:','Choose the right word:'],
 items:[RV('few',['a few','عدد قليل','a few'],["I'd like to order",'a few','boxes of paper.'],['','a','k'],['How many','boxes','do you need?'],['q','k',''],["I'd like ___ boxes of paper. (3)","I'd like ___ boxes of paper. (3)"],['a few','a little','much'],[['a few + جمع يُعد (boxes).','a few + a countable plural (boxes).'],['How many + جمع يُعد.','How many + a countable plural.']]),
  RV('lot',['a lot of (boxes)','عدد كبير','many'],["We need",'a lot of','boxes.'],['','a','k'],['How many','boxes','do you need?'],['q','k',''],['How ___ boxes do you need?','How ___ boxes do you need?'],['many','much','few'],[['a lot of مع يُعد ولا يُعد.','a lot of goes with countable and uncountable nouns.'],['How many + يُعد.','How many + countable.']]),
  RV('little',['a little','كمية قليلة','a little'],['We need','a little','ink.'],['','a','k'],['How much','ink','do you need?'],['q','k',''],['We need ___ ink. Not much.','We need ___ ink. Not much.'],['a little','a few','many'],[['a little + لا يُعد (ink).','a little + uncountable (ink).'],['How much + لا يُعد.','How much + uncountable.']]),
  RV('much',['not much','كمية غير كبيرة','not much'],["We don't need",'much','ink.'],['','a','k'],['How much','ink','do you need?'],['q','k',''],['How ___ ink do you need?','How ___ ink do you need?'],['much','many','few'],[['في النفي: not much + لا يُعد.','In negatives: not much + uncountable.'],['How much + لا يُعد.','How much + uncountable.']])]});

/* ---------- 6.2 الشكوى ---------- */
const S62=en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/><rect x="90" y="10" width="180" height="150" rx="6" fill="#fff" stroke="${ink}" stroke-width="2"/>${tx(180,30,'INVOICE',{fs:13})}
 <g class="hl" data-d="qty">${tx(104,56,'Desks ×20',{fs:11,a:'start'})}${tx(256,56,'✗ 10',{fs:11,a:'end',c:red})}</g>
 <g class="hl" data-d="price">${tx(104,80,'Price €150',{fs:11,a:'start'})}${tx(256,80,'✗ €120',{fs:11,a:'end',c:red})}</g>
 <g class="hl" data-d="disc">${tx(104,104,'Discount 0%',{fs:11,a:'start'})}${tx(256,104,'✗ 10%',{fs:11,a:'end',c:red})}</g>
 <g class="hl" data-d="late">${tx(104,128,'Delivery: 12 May',{fs:11,a:'start'})}${tx(256,128,'✗ 5 May',{fs:11,a:'end',c:red})}</g>
 <g class="hl" data-d="dmg">${tx(104,150,'2 chairs damaged',{fs:11,a:'start',c:red})}</g>`,'فاتورة فيها أخطاء');
const CM=(k,chip,a,b,cue,qo)=>({k,chip,A:{t:a.split(' | ').map((x,i)=>['a'+i,x,i===1?'a':'']),why:['الشكوى بالماضي البسيط: ordered / promised، ثم المشكلة الآن.','The complaint in the past simple: ordered / promised, then the problem now.']},B:{t:b.split(' | ').map((x,i)=>['b'+i,x,i===1?'n':'']),why:['الاعتذار والإجراء: I\'m sorry. I\'ll …','The apology and the action: I\'m sorry. I\'ll …']},cue,qo});
M('u6-l2',{title:['الشكوى والاعتذار','Complaining and apologizing'],sub:['المس خطأ في الفاتورة لترى الشكوى، ثم رد البائع.','Tap a mistake on the invoice to see the complaint, then the seller\'s reply.'],
 scene:S62,cols:3,sw:[['↔ رد البائع','↔ The seller\'s reply'],['↔ الشكوى','↔ The complaint']],quiz:['اختر الفعل الصحيح:','Choose the correct verb:'],
 items:[CM('qty',['quantity','الكمية','quantity'],"I | ordered | ten desks, but you sent twenty.","I'm sorry. | I'll collect | the extra desks.",['I ___ ten desks, but you sent twenty.','I ___ ten desks, but you sent twenty.'],['ordered','order','have order']),
  CM('price',['price','السعر','price'],"The salesman | promised | €120, but the invoice says €150.","I'm sorry. | I'll send | a new invoice.",['The salesman ___ €120.','The salesman ___ €120.'],['promised','promise','promises']),
  CM('disc',['discount','الخصم','discount'],"You | offered | a 10% discount, but there's no discount.","I apologize. | I'll check | it now.",['You ___ a 10% discount.','You ___ a 10% discount.'],['offered','offer','offering']),
  CM('late',['delivery','التسليم','delivery'],"You | said | the 5th of May, but they came on the 12th.","I'm very sorry. | It won't happen | again.",['You ___ the 5th of May.','You ___ the 5th of May.'],['said','sayed','say']),
  CM('dmg',['damaged','تالف','damaged'],"Two chairs | arrived | damaged.","I'm sorry. | We'll replace | them.",['Two chairs ___ damaged.','Two chairs ___ damaged.'],['arrived','arrive','arriving'])]});

/* ---------- 6.3 مراجعة 2 ---------- */
M('u6-l3',REV(['مراجعة 2: الوحدات 4–6','Review 2: Units 4–6'],[
 RV('time',['half past','الوقت','time'],["It's",'half past','nine.'],['','a',''],["It's",'quarter to','ten.'],['','a',''],['9.45 = It\'s quarter ___ ten.','9.45 = It\'s quarter ___ ten.'],['to','past','at']),
 RV('prep',['at / on / from','حروف الزمن','time prepositions'],['The meeting is','at','9.00','on','Monday.'],['','a','','a',''],["I'm in the office",'from','9','to','5.'],['','a','','a',''],['I have a meeting ___ Saturday.','I have a meeting ___ Saturday.'],['on','at','in']),
 RV('phone',['Speaking.','الهاتف','phone'],['Can I speak to Mr Lopez?'],['q'],['Speaking.'],['a'],["Who's calling, please? — ___ Anna Weber.","Who's calling, please? — ___ Anna Weber."],['This is','I am calling','Here']),
 RV('qty',['a few / not much','الكميات','quantities'],['We have','a few','boxes.'],['','a',''],["We don't have",'much','ink.'],['','a',''],["We don't have ___ paper.","We don't have ___ paper."],['much','many','a few']),
 RV('cmp',['ordered','الشكوى','complaint'],['I','ordered','ten.'],['','a',''],['But I','have got','twenty.'],['','a',''],['The salesman ___ a discount.','The salesman ___ a discount.'],['promised','promise','promising']),
 RV('req',['Could you …?','الطلب','request'],['Could you','book','a hotel for me?'],['','a',''],['Could you','send','me a catalogue?'],['','a',''],['Could you ___ me a catalogue, please?','Could you ___ me a catalogue, please?'],['send','sending','sends'])]));

/* ---------- 7.1 الحجز ---------- */
const S71=en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/><rect x="60" y="10" width="240" height="150" rx="8" fill="#fff" stroke="${ink}" stroke-width="2"/>${tx(180,30,'HOTEL BOOKING',{fs:13})}
 ${[['when','Dates: 5–8 May'],['room','Room: single / double'],['name','Name: ………'],['tel','Phone: ………'],['pay','Payment: card / cash']].map(([k,t],i)=>`<g class="hl" data-d="${k}"><rect x="72" y="${42+i*23}" width="216" height="19" rx="3" fill="#eef4f8"/>${tx(80,56+i*23,t,{fs:11,a:'start'})}</g>`).join('')}`,'نموذج حجز فندق');
const BK=(k,chip,q,a,cue,qo)=>({k,chip,A:{t:[['q',q,'q']],why:['سؤال موظف الحجز.','The booking clerk\'s question.']},B:{t:[['a',a,'a']],why:['جواب الزبون.','The customer\'s answer.']},qa:[[q,a]],cue,qo});
M('u7-l1',{title:['الحجز: أسئلة الموظف','Making a booking: the clerk\'s questions'],sub:['المس سطراً في نموذج الحجز لترى سؤاله وجوابه.','Tap a line on the booking form to see its question and answer.'],
 scene:S71,cols:3,sw:[['↔ الجواب','↔ The answer'],['↔ السؤال','↔ The question']],quiz:['هذا الجواب؛ ما السؤال؟','This is the answer; what is the question?'],
 items:[BK('when',['When','التاريخ','dates'],'When would you like to stay?','From the 5th to the 8th of May.',['From the 5th to the 8th of May.','From the 5th to the 8th of May.'],['When would you like to stay?','How do you want to pay?','May I have your name?']),
  BK('room',['single / double','نوع الغرفة','room'],'Would you like a single or a double room?',"A single room, please.",['A single room, please.','A single room, please.'],['Would you like a single or a double room?','When would you like to stay?','Can I have your telephone number?']),
  BK('name',['name','الاسم','name'],'May I have your name, please?','Yes. It\'s Carlos Mendez.',["It's Carlos Mendez.","It's Carlos Mendez."],['May I have your name, please?','How do you want to pay?','Would you like a double room?']),
  BK('tel',['telephone','الهاتف','phone'],'Can I have your telephone number?',"It's 0034 91 555 2134.",["It's 0034 91 555 2134.","It's 0034 91 555 2134."],['Can I have your telephone number?','May I have your name?','When would you like to stay?']),
  BK('pay',['pay','الدفع','payment'],'How do you want to pay?','By credit card.',['By credit card.','By credit card.'],['How do you want to pay?','Would you like a single room?','Could you spell that?'])]});

/* ---------- 7.2 التفضيل ---------- */
const CARS=[['Fiat',60,30,40],['Ford',80,60,70],['Volvo',120,90,95]];
const S72=en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/>${CARS.map(([n,p,s,c],i)=>`<g transform="translate(${30+i*110},0)"><rect x="0" y="${110-s*0.5}" width="${50+s*0.4}" height="${s*0.5}" rx="8" fill="${[red,blu,grn][i]}"/><circle cx="12" cy="112" r="8" fill="${ink}"/><circle cx="${40+s*0.4}" cy="112" r="8" fill="${ink}"/>${tx(40,140,n,{fs:12})}${tx(40,158,'€'+p+'/day',{fs:10,w:400})}</g>`).join('')}
 <g class="hl" data-d="cheap"><rect x="22" y="146" width="96" height="18" fill="none" stroke="${grn}" stroke-width="3" rx="4"/></g>
 <g class="hl" data-d="big"><rect x="242" y="50" width="110" height="74" fill="none" stroke="${grn}" stroke-width="3" rx="6"/></g>
 <g class="hl" data-d="exp"><rect x="242" y="146" width="96" height="18" fill="none" stroke="${grn}" stroke-width="3" rx="4"/></g>
 <g class="hl" data-d="good">${tx(180,20,'★★★',{fs:16,c:yel})}${tx(180,36,'Ford: the best value',{fs:10})}</g>`,'ثلاث سيارات إيجار بأحجام وأسعار مختلفة');
const SP=(k,adj,cmp,sup,car,ar,e2,qo)=>({k,chip:[adj,ar,e2],A:{t:[['s','The Ford'],['b','is'],['c',cmp,'a'],['t','than','q'],['o','the '+(car==='Fiat'?'Volvo':'Fiat')+'.']]},B:{t:[['s','The '+car],['b','is'],['c',sup,'n'],['o','of the three.']]},cue:[`${adj} → the ___`,`${adj} → the ___`],qo});
M('u7-l2',{title:['التفضيل: the cheapest و the best','Superlatives: the cheapest and the best'],sub:['المس صفة لترى السيارة التي تفوز، ثم المقارنة والتفضيل.','Tap an adjective to see which car wins, then the comparative and the superlative.'],
 scene:S72,cols:4,sw:[['↔ التفضيل the …est','↔ Superlative the …est'],['↔ المقارنة …er than','↔ Comparative …er than']],quiz:['ما صيغة التفضيل؟','What is the superlative?'],
 items:[{k:'cheap',chip:['cheap','رخيص','cheap'],A:{t:[['s','The Fiat'],['b','is'],['c','cheaper','a'],['t','than','q'],['o','the Ford.']]},B:{t:[['s','The Fiat'],['b','is'],['c','the cheapest','n'],['o','of the three.']]},cue:['cheap → the ___','cheap → the ___'],qo:['cheapest','most cheap','cheaper']},
  {k:'big',chip:['big','كبير','big'],A:{t:[['s','The Volvo'],['b','is'],['c','bigger','a'],['t','than','q'],['o','the Ford.']]},B:{t:[['s','The Volvo'],['b','is'],['c','the biggest','n'],['o','car.']]},cue:['big → the ___','big → the ___'],qo:['biggest','bigest','most big']},
  {k:'exp',chip:['expensive','غالٍ','expensive'],A:{t:[['s','The Volvo'],['b','is'],['c','more expensive','a'],['t','than','q'],['o','the Ford.']]},B:{t:[['s','The Volvo'],['b','is'],['c','the most expensive','n'],['o','car.']]},cue:['expensive → the ___','expensive → the ___'],qo:['most expensive','expensivest','more expensive']},
  {k:'good',chip:['good','جيد','good'],A:{t:[['s','The Ford'],['b','is'],['c','better','a'],['t','than','q'],['o','the Fiat.']]},B:{t:[['s','The Ford'],['b','is'],['c','the best','n'],['o','value.']]},cue:['good → the ___','good → the ___'],qo:['best','goodest','most good']}].map(x=>{x.A.why=['المقارنة بين اثنين: …er / more … + than.','Comparing two: …er / more … + than.'];x.B.why=x.k==='good'?['شاذة: good → better → the best.','Irregular: good → better → the best.']:['التفضيل بين ثلاثة أو أكثر: the + …est / the most …','The superlative for three or more: the + …est / the most …'];return x})});

/* ---------- 8.1 الاتجاهات في المدينة ---------- */
const S81=en=>svg(200,`<rect width="360" height="200" fill="#e8ecef"/>${[60,160,260].map(x=>`<rect x="${x}" y="0" width="30" height="200" fill="#fff"/>`).join('')}<rect x="0" y="90" width="360" height="30" fill="#fff"/>
 ${tx(30,110,en?'YOU':'أنت',{fs:11,c:red})}<circle cx="30" cy="96" r="5" fill="${red}"/>
 <g class="hl" data-d="straight">${arr(40,105,140,105)}</g>
 <g class="hl" data-d="left">${arr(175,100,175,30)}</g>
 <g class="hl" data-d="second">${arr(150,112,270,112,blu)}${arr(275,120,275,180,blu)}</g>
 <g class="hl" data-d="onleft"><rect x="296" y="150" width="50" height="34" fill="${yel}" stroke="${ink}"/>${tx(321,172,'BANK',{fs:10})}</g>`,'خريطة شوارع وأسهم اتجاهات');
const DR=(k,chip,a,b)=>({k,chip,A:{t:[['a',a,'a']],why:['التعليمة بفعل الأمر.','The direction with an instruction verb.']},B:{t:[['b',b,'n']],why:['ومعنى آخر قريب.','Another way to say it.']}});
M('u8-l1',{title:['كيف أصل إلى …؟ الاتجاهات','How do I get to …? Directions'],sub:['المس سهماً على الخريطة لترى التعليمة.','Tap an arrow on the map to see the direction.'],
 scene:S81,cols:4,sw:[['↔ صيغة أخرى','↔ Another way'],['↔ رجوع','↔ Back']],quiz:['ما التعليمة للسهم المحاط؟','Which direction is the arrow in green?'],
 items:[DR('straight',['straight on','للأمام','straight'],'Go straight on.','Go along this street.'),DR('left',['turn left','يساراً','left'],'Turn left at the crossroads.','Take the first left.'),DR('second',['second right','الثاني يميناً','second right'],'Take the second right.','Turn right at the second street.'),DR('onleft',['on your left','على يسارك','on your left'],"It's on your left.","You'll see it on your left.")]});

/* ---------- 8.2 الاستقبال ---------- */
const S82=en=>svg(130,`<rect width="360" height="130" fill="#f3f6f8"/><rect x="180" y="70" width="160" height="40" fill="#b08a5a"/>${tx(260,94,'RECEPTION',{fs:11,c:'#fff'})}${man(260,64,red)}${man(80,100,grn)}${tx(80,124,en?'visitor':'الزائر',{fs:10})}`,'زائر أمام موظفة الاستقبال');
M('u8-l2',{title:['عند الاستقبال: الزائر والموظف','At reception: the visitor and the receptionist'],sub:['المس عبارة لترى من يقولها ورد الآخر.','Tap a phrase to see who says it and the other person\'s reply.'],
 scene:S82,cols:3,sw:[['↔ الرد','↔ The reply'],['↔ العبارة','↔ The phrase']],quiz:['اختر الرد المناسب:','Choose the right reply:'],
 items:[PR('see',["I'm here to see …",'الزائر','visitor'],"Good morning. I'm here to see Ms Grant.",'Do you have an appointment?',["I'm here to see Ms Grant.","I'm here to see Ms Grant."],['Do you have an appointment?','Speaking.',"I'm fine, thanks."]),
  PR('app',['appointment','الموعد','appointment'],'Do you have an appointment?','Yes, I have an appointment at 10.30.',['Do you have an appointment?','Do you have an appointment?'],['Yes, I have an appointment at 10.30.','Yes, I am.','Yes, at Monday.']),
  PR('dept',['department','القسم','department'],'What department is that?',"It's the Sales Department.",['What department is that?','What department is that?'],["It's the Sales Department.","It's at 10.30.","It's Ms Grant."]),
  PR('wait',['take a seat','انتظر','wait'],'Please take a seat. She\'ll be here in a moment.','Thank you.',['Please take a seat.','Please take a seat.'],['Thank you.','Yes, I take.','Speaking.']),
  PR('drink',['Would you like …?','الضيافة','offer'],'Would you like a coffee?',"Yes, please. / No, thank you.",['Would you like a coffee?','Would you like a coffee?'],['Yes, please.','Yes, I like.','Yes, I would like coffee you.'])].map(x=>{x.A.why=['العبارة.','The phrase.'];x.B.why=['الرد المناسب.','The right reply.'];return x})});

/* ---------- 9.1 تاريخ الشركة: الماضي البسيط ---------- */
const HS=[['h1',1954,'opened','open','the first restaurant'],['h2',1957,'introduced','introduce','the Whopper'],['h3',1967,'sold','sell','the company'],['h4',1975,'built','build','the first drive-through'],['h5',2005,'made','make','1.7 billion sandwiches']];
M('u9-l1',{title:['تاريخ الشركة: الماضي البسيط','Company history: the past simple'],sub:['المس سنة على الخط الزمني لترى الحدث، ثم الفعل في أصله.','Tap a year on the timeline to see the event, then the verb in its base form.'],
 scene:en=>svg(110,`<rect width="360" height="110" fill="#f6f2ea"/><line x1="20" y1="60" x2="340" y2="60" stroke="${ink}" stroke-width="3"/>${HS.map(([k,y],i)=>`<g class="hl" data-d="${k}"><circle cx="${40+i*70}" cy="60" r="9" fill="${yel}" stroke="${ink}"/>${tx(40+i*70,40,y,{fs:12})}</g>`).join('')}`,'خط زمني لتاريخ شركة'),cols:5,
 sw:[['↔ الفعل الأصلي','↔ The base verb'],['↔ الماضي','↔ The past']],quiz:['اختر صيغة الماضي:','Choose the past form:'],
 items:HS.map(([k,y,p,b,o])=>({k,chip:[String(y),'',''],A:{t:[['y','In '+y+','],['s','they'],['v',p,'a'],['o',o+'.','k']],why:/ed$/.test(p)?['فعل منتظم: + ed.','A regular verb: + ed.']:['فعل شاذ: يُحفظ ('+b+' → '+p+').','An irregular verb: learn it ('+b+' → '+p+').']},B:{t:[['v',b,'n'],['x','→','q'],['p',p,'a']],why:['الأصل ← الماضي.','Base form → past.']},cue:[`${b} → ?`,`${b} → ?`],qo:[p,b+'ed',b+'d'].filter((v,i,a)=>a.indexOf(v)===i).concat(p===b+'ed'?[b+'t']:[]).slice(0,3)}))});

/* ---------- 9.2 المضارع التام والماضي ---------- */
M('u9-l2',{title:['تغيّرات الشركة: has done أم did؟','Company changes: has done or did?'],sub:['المس تغييراً: بدون وقت محدد = المضارع التام، ومع وقت = الماضي.','Tap a change: no finished time = present perfect; with a time = past simple.'],
 scene:en=>svg(110,`<rect width="360" height="110" fill="#f3f6f8"/><line x1="20" y1="60" x2="300" y2="60" stroke="${ink}" stroke-width="3"/><circle cx="320" cy="60" r="10" fill="${red}"/>${tx(320,90,en?'now':'الآن',{fs:12,c:red})}
 <g class="hl" data-d="open">${arr(80,40,300,40,grn,3)}${tx(80,30,'?',{fs:12})}</g><g class="hl" data-d="sales"><circle cx="160" cy="60" r="8" fill="${blu}"/>${tx(160,90,'2001',{fs:11})}</g><g class="hl" data-d="staff">${arr(120,78,300,78,grn,3)}</g><g class="hl" data-d="ceo"><circle cx="250" cy="60" r="8" fill="${blu}"/>${tx(250,90,en?'last month':'الشهر الماضي',{fs:10})}</g>`,'خط زمني يصل إلى الآن'),cols:4,
 sw:[['↔ مع وقت محدد','↔ With a time'],['↔ بدون وقت','↔ No time']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('open',['opened','افتتاح','opened'],['We','have opened','three new branches.'],['','a',''],['We','opened','a branch in Dubai','in 2015.'],['','n','','q'],['We ___ three new branches. (no time)','We ___ three new branches. (no time)'],['have opened','opened in 2015','open'],[['have / has + التصريف الثالث: النتيجة الآن، بلا وقت محدد.','have / has + past participle: the result now, no finished time.'],['مع وقت ماضٍ محدد: الماضي البسيط.','With a finished past time: the past simple.']]),
  RV('sales',['increased','زيادة','increased'],['Sales','have increased','by 20%.'],['','a',''],['Sales','increased','by 20%','in 2001.'],['','n','','q'],['Sales ___ in 2001.','Sales ___ in 2001.'],['increased','have increased','has increase'],[['المضارع التام: تغيّر وصل أثره إلى اليوم.','Present perfect: a change that affects today.'],['in 2001 وقت محدد: الماضي.','in 2001 is a finished time: past simple.']]),
  RV('staff',['already / yet','already / yet','already / yet'],['We have','already','hired 50 new staff.'],['','a',''],["We haven't",'hired the engineers','yet.'],['','','n'],["We haven't finished the building ___.","We haven't finished the building ___."],['yet','already','last year'],[['already = قبل المتوقع (في الإثبات).','already = sooner than expected (in positives).'],['yet = حتى الآن (في النفي والسؤال، في الآخر).','yet = until now (in negatives and questions, at the end).']]),
  RV('ceo',['left','غادر','left'],['Our director','has left','the company.'],['','a',''],['Our director','left','the company','last month.'],['','n','','q'],['Our director ___ last month.','Our director ___ last month.'],['left','has left','leaves'],[['النتيجة الآن: لم يعد معنا.','The result now: he is not with us.'],['last month وقت محدد: الماضي.','last month is a finished time: past simple.']])]});

/* ---------- 9.3 مراجعة 3 ---------- */
M('u9-l3',REV(['مراجعة 3: الوحدات 7–9','Review 3: Units 7–9'],[
 RV('syn',['book = reserve','المترادفات','synonyms'],['I want to','book','a room.'],['','a',''],['I want to','reserve','a room.'],['','a',''],['hire = ___','hire = ___'],['rent','buy','sell']),
 RV('q',['How long …?','أسئلة الحجز','booking questions'],['How long','would you like to stay?'],['q',''],['How much','is a double room?'],['q',''],['___ would you like to stay? — Three nights.','___ would you like to stay? — Three nights.'],['How long','How much','How many']),
 RV('sup',['the best','التفضيل','superlative'],['This hotel is','the cheapest.'],['','a'],['That one is','the most comfortable.'],['','a'],['good → the ___','good → the ___'],['best','goodest','better']),
 RV('dir',['turn left','الاتجاهات','directions'],['Go straight on and','turn left.'],['','a'],['Get off','at the second stop.'],['a',''],['___ off at the next station.','___ off at the next station.'],['Get','Take','Go']),
 RV('past',['launched','الماضي','past simple'],['They','launched','a new product in 2005.'],['','a',''],['They','sold','the company in 1967.'],['','a',''],['They ___ the first factory in 1954. (build)','They ___ the first factory in 1954. (build)'],['built','builded','build']),
 RV('pp',['has increased','التغيّر','change'],['Profits','have increased.'],['','a'],['Profits','increased','last year.'],['','n','q'],['The company ___ (expand) a lot since 2010.','The company ___ (expand) a lot since 2010.'],['has expanded','expanded','expands'])]));

/* ---------- 10.1 الروتين: البسيط والمستمر ---------- */
const RT=[['up','06.30','get up','gets up'],['bf','07.00','have breakfast','has breakfast'],['leave','07.30','leave home','leaves home'],['work','09.00','start work','starts work'],['home','18.00','get home','gets home']];
M('u10-l1',{title:['الروتين أم الآن؟','Routine or now?'],sub:['المس وقتاً في يوم Sandra: ماذا تفعل عادة؟ وماذا تفعل اليوم مختلفاً؟','Tap a time in Sandra\'s day: what does she usually do? What is she doing differently today?'],
 scene:en=>svg(110,`<rect width="360" height="110" fill="#f6f2ea"/><line x1="20" y1="60" x2="340" y2="60" stroke="${ink}" stroke-width="3"/>${RT.map(([k,t,v],i)=>`<g class="hl" data-d="${k}"><circle cx="${40+i*70}" cy="60" r="9" fill="${yel}" stroke="${ink}"/>${tx(40+i*70,40,t,{fs:12})}${tx(40+i*70,86,v,{fs:10,w:400})}</g>`).join('')}`,'يوم Sandra من الصباح إلى المساء'),cols:5,
 sw:[['↔ اليوم (الآن)','↔ Today (now)'],['↔ عادة','↔ Usually']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:RT.map(([k,t,v,s3])=>({k,chip:[t,'',''],A:{t:[['s','Sandra'],['f','usually','q'],['v',s3,'a'],['t','at '+t+'.']],why:['الروتين: المضارع البسيط (s مع she).','A routine: the present simple (s with she).']},B:{t:[['t','Today'],['s','she'],['b',"'s",'n'],['v',{up:'getting up late',bf:'having breakfast at a café',leave:'leaving home early',work:'working from home',home:'staying at the office'}[k]+'.','n']],why:['ما يحدث الآن أو اليوم مختلفاً: am / is / are + ing.','What is happening now or differently today: am / is / are + ing.']},cue:[`Every day she ___ (${v}) at ${t}.`,`Every day she ___ (${v}) at ${t}.`],qo:[s3,v.replace(/^(\w+)/,'$1ing').replace('geting','getting').replace('haveing','having').replace('leaveing','leaving'),v]}))});

/* ---------- 10.2 ظروف التكرار ---------- */
const FQ=[['always',100],['usually',80],['often',60],['sometimes',40],['hardly',10],['never',0]];
M('u10-l2',{title:['كم مرة؟ ظروف التكرار','How often? Frequency adverbs'],sub:['المس نسبة على المقياس لترى الظرف ومكانه في الجملة.','Tap a level on the scale to see the adverb and its place in the sentence.'],
 scene:en=>svg(120,`<rect width="360" height="120" fill="#f3f6f8"/><rect x="30" y="50" width="300" height="16" rx="8" fill="#ddd"/>${FQ.map(([k,p])=>`<g class="dim" data-d="${k}"><rect x="30" y="50" width="${Math.max(6,p*3)}" height="16" rx="8" fill="${grn}"/><circle cx="${30+Math.max(6,p*3)}" cy="58" r="9" fill="${yel}" stroke="${ink}"/>${tx(30+Math.max(6,p*3),40,p+'%',{fs:12})}</g>`).join('')}${tx(30,92,'0%',{fs:10})}${tx(330,92,'100%',{fs:10})}`,'مقياس من 0% إلى 100%'),cols:3,
 sw:[['↔ مع be','↔ With be'],['↔ مع الفعل','↔ With a verb']],quiz:['انظر إلى النسبة واختر الظرف:','Look at the level and choose the adverb:'],
 items:FQ.map(([k,p])=>{const w=k==='hardly'?'hardly ever':k;return {k,chip:[w,p+'%',p+'%'],A:{t:[['s','I'],['f',w,'a'],['v','check my email at work.']],why:['الظرف قبل الفعل الأساسي.','The adverb goes before the main verb.']},B:{t:[['s','I'],['b',"'m"],['f',w,'a'],['o','late for meetings.']],why:['مع be: الظرف بعد be.','With be: the adverb goes after be.']},qa:[['How often do you check your email?',`I ${w} check it.`]]}})});
})(window);

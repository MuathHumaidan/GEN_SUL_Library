/* «شاهد الفكرة» لدروس انجل-102 (7.2 – 10.4). القالب في vx.js (VX.make) */
(function(G){const V=G.VX;if(!V)return;
const M=(id,cfg)=>{V.L[id]=(el,B)=>V.make(el,B,cfg)};
const ink='#3b4a54',grn='#1f8a5b',red='#c4553f',blu='#2f6b8f',yel='#f1b33c';
const svg=(h,body,lab)=>`<svg viewBox="0 0 360 ${h}" role="img" aria-label="${lab||''}">${body}</svg>`;
const tx=(x,y,t,o={})=>`<text x="${x}" y="${y}" font-size="${o.fs||12}" font-weight="${o.w||700}" text-anchor="${o.a||'middle'}" fill="${o.c||ink}">${t}</text>`;
const ring=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="none" stroke="${grn}" stroke-width="3.5"/>`;

/* ---------- 7.2 الكميات: يُعد ولا يُعد ---------- */
const S72=en=>svg(220,`<rect width="360" height="220" fill="#f6efe2"/>
 <rect x="10" y="100" width="340" height="8" fill="#b08a5a"/><rect x="10" y="200" width="340" height="8" fill="#b08a5a"/>
 <g class="hl" data-d="screws">${[0,1,2,3,4,5].map(i=>`<rect x="${22+i*9}" y="${70+(i%2)*10}" width="4" height="22" fill="#888"/>`).join('')}${tx(45,62,'screws')}${ring(14,48,66,52)}</g>
 <g class="hl" data-d="nails">${[0,1,2,3,4,5,6].map(i=>`<line x1="${102+i*7}" y1="72" x2="${102+i*7}" y2="96" stroke="#666" stroke-width="2"/>`).join('')}${tx(124,62,'nails')}${ring(94,48,62,52)}</g>
 <g class="hl" data-d="cement"><path d="M182 60 h56 l4 40 h-64z" fill="#d9cfc0" stroke="${ink}"/>${tx(210,84,'CEMENT',{fs:10})}${tx(210,52,'cement')}${ring(172,38,76,64)}</g>
 <g class="hl" data-d="paint"><rect x="272" y="62" width="44" height="38" rx="4" fill="#5b6d7a" stroke="${ink}"/><rect x="272" y="62" width="44" height="8" fill="#333"/>${tx(294,52,'paint')}${ring(262,38,64,64)}</g>
 <g class="hl" data-d="glue"><rect x="40" y="170" width="60" height="16" rx="6" fill="#e9e3d6" stroke="${ink}"/><rect x="100" y="174" width="10" height="8" fill="${red}"/>${tx(70,160,'glue')}${ring(30,146,90,48)}</g>
 <g class="hl" data-d="oil"><path d="M200 150 h40 v48 h-40z" fill="${yel}" stroke="${ink}"/><rect x="230" y="142" width="8" height="10" fill="${ink}"/>${tx(220,140,'oil')}${ring(190,126,62,76)}</g>
 ${tx(310,170,en?'shop':'المحل',{fs:13,c:'#8a6a3a'})}`,'رفوف محل فيها براغٍ ومسامير وإسمنت ودهان وغراء وزيت');
const Q72=(k,cnt,q,qty,why,cue)=>({k,chip:[k,cnt?'تُعد':'لا تُعد',cnt?'countable':'uncountable'],
 A:{t:[['do','Do you have'],['any','any','q'],['obj',k+'?','k']],why},
 B:{t:[['how','How','q'],['mm',cnt?'many':'much',cnt?'a':'n'],['obj',k,'k'],['do','do you need?']],why:cnt?['تُعد: How many، ونجيب بعدد.','Countable: How many, and we answer with a number.']:['لا تُعد: How much، ونجيب بالكمية أو الوعاء (a bag of, a tin of…).','Uncountable: How much, and we answer with an amount or a container (a bag of, a tin of…).']},
 qa:[[`How ${cnt?'many':'much'} ${k} do you need?`,qty]],cue:[`How ___ ${k} do you need?`,`How ___ ${k} do you need?`],qo:cnt?['many','much']:['much','many']});
M('u7-l2',{title:['يُعد ولا يُعد: How many و How much','Countable and uncountable: How many and How much'],sub:['المس شيئاً في المحل: هل يُعد أم لا؟ وشاهد كيف تسأل عنه.','Tap a thing in the shop: can you count it? See how you ask about it.'],
 scene:S72,cols:3,h1:['1. نسأل عن الشيء، ثم عن كميته','1. We ask about the thing, then about the amount'],h2:['2. السؤال والجواب في المحل','2. Question and answer in the shop'],
 sw:[['↔ اسأل عن الكمية','↔ Ask about the amount'],['↔ رجوع','↔ Back']],quiz:['اختر many أو much:','Choose many or much:'],
 items:[Q72('screws',1,'',"Fifty, please. (50 screws)",['screws جمع يُعد، ومعه any في السؤال.','screws is a countable plural; we use any in the question.']),
  Q72('nails',1,'','Two packets of 50, please.',['nails تُعد.','nails are countable.']),
  Q72('cement',0,'','Twenty bags, please. (20 bags of cement)',['cement لا يُعد: لا نقول two cements.','cement is uncountable: we don\'t say two cements.']),
  Q72('paint',0,'','Six large tins, please.',['paint لا يُعد، نعدّ العلب: a tin of paint.','paint is uncountable; we count the tins: a tin of paint.']),
  Q72('glue',0,'','Two tubes, please.',['glue لا يُعد: a tube of glue.','glue is uncountable: a tube of glue.']),
  Q72('oil',0,'','Fifteen litres, please.',['oil لا يُعد: 15 litres of oil.','oil is uncountable: 15 litres of oil.'])]});

/* ---------- 7.3 المستقبل: will و won't ---------- */
const TK=[['found','lay foundations',2024,2025,'#e6b84a'],['piers','build piers',2026,2027,'#e07b39'],['pylons','put pylons on piers',2028,2028,'#d7d23a'],['deck','make deck',2026,2029,'#8cc63f'],['roads','build roads',2031,2032,'#e8c23a'],['open','open bridge',2032,2032,red]];
const S73=en=>{const X=y=>40+(y-2024)*38;return svg(210,`<rect width="360" height="210" fill="#f7f7f2"/>
 ${[2024,2026,2028,2030,2032].map(y=>`<line x1="${X(y)}" y1="22" x2="${X(y)}" y2="196" stroke="#ddd"/>${tx(X(y)+19,16,y,{fs:10,w:400})}`).join('')}
 <line x1="${X(2026)+19}" y1="20" x2="${X(2026)+19}" y2="200" stroke="${red}" stroke-dasharray="4 3"/>${tx(X(2026)+19,208,en?'now':'الآن',{fs:10,c:red})}
 ${TK.map(([k,n,a,b,c],i)=>`<g class="hl" data-d="${k}"><rect x="${X(a)}" y="${30+i*28}" width="${(b-a+1)*38}" height="22" rx="5" fill="${c}"/>${tx(a>2029?X(a)-4:X(a)+4,46+i*28,n,{fs:12,a:a>2029?'end':'start'})}</g>`).join('')}`,'جدول زمني لمراحل بناء جسر من 2024 إلى 2032')};
const F73=(k,v,y,neg,q)=>({k,chip:[String(y),...{found:['الأساسات','foundations'],piers:['الركائز','piers'],pylons:['الأبراج','pylons'],deck:['السطح','deck'],roads:['الطرق','roads'],open:['الافتتاح','opening']}[k]],
 A:{t:[['s','They'],['w',"'ll",'a'],['v',v,'k'],['y','in '+y+'.','q']],say:`They'll ${v} in ${y}.`,why:['will (أو \'ll) + الفعل الأصلي للمستقبل.','will (or \'ll) + base verb for the future.']},
 B:{t:[['s','They'],['w',"won't",'n'],['v',v,'k'],['y','in '+neg+'.','q']],say:`They won't ${v} in ${neg}.`,why:['النفي: won\'t = will not، والفعل يبقى أصلياً.','Negative: won\'t = will not, and the verb stays in the base form.']},
 qa:[[`When will they ${v}?`,`They'll ${v} in ${y}.`],[`Will they ${v} in ${neg}?`,"No, they won't."]],cue:[`When will they ${v}?`,`When will they ${v}?`],qo:[String(y),String(neg),String(y+3)]});
M('u7-l3',{title:['المستقبل: will و won\'t','The future: will and won\'t'],sub:['هذا جدول بناء جسر المستقبل. المس سنة لترى المرحلة، وكيف نتكلم عنها.','This is the schedule for the bridge of the future. Tap a year to see the stage and how we talk about it.'],
 scene:S73,cols:3,sw:[['↔ النفي won\'t','↔ Negative won\'t'],['↔ المثبت will','↔ Positive will']],h2:['2. نسأل بـ When will …? و Will …?','2. We ask with When will …? and Will …?'],quiz:['متى؟ اختر السنة من الجدول:','When? Choose the year from the schedule:'],
 items:[F73('found','lay the foundations',2024,2027),F73('piers','build the piers',2026,2030),F73('pylons','put the pylons on the piers',2028,2025),F73('deck','start the deck',2026,2031),F73('roads','build the roads',2031,2026),F73('open','open the bridge',2032,2028)]});

/* ---------- 8.1 المضارع التام: حدث قريب ونتيجته الآن ---------- */
const S81=en=>svg(200,`<rect width="360" height="200" fill="#eef3f6"/>
 <g class="hl" data-d="break"><rect x="14" y="20" width="100" height="74" rx="10" fill="#fff" stroke="#ccd"/><path d="M30 70 h60 l-8 -18 h-40z" fill="${red}"/><circle cx="44" cy="74" r="7" fill="${ink}"/><circle cx="78" cy="74" r="7" fill="${ink}"/><path d="M56 34 q6 -10 12 0 q6 -10 12 0" fill="none" stroke="#999" stroke-width="2"/>${tx(64,90,en?'car':'السيارة',{fs:10})}</g>
 <g class="hl" data-d="steal"><rect x="128" y="20" width="100" height="74" rx="10" fill="#fff" stroke="#ccd"/><rect x="150" y="34" width="56" height="34" rx="3" fill="none" stroke="${ink}" stroke-dasharray="4 3"/>${tx(178,56,'?',{fs:18,c:red})}${tx(178,90,en?'office':'المكتب',{fs:10})}</g>
 <g class="hl" data-d="lose"><rect x="242" y="20" width="104" height="74" rx="10" fill="#fff" stroke="#ccd"/><rect x="262" y="30" width="64" height="40" rx="3" fill="#222"/>${tx(294,56,'0 files',{fs:10,c:'#f66'})}${tx(294,90,en?'computer':'الحاسب',{fs:10})}</g>
 <g class="hl" data-d="fall"><rect x="70" y="106" width="100" height="78" rx="10" fill="#fff" stroke="#ccd"/><path d="M84 160 h70" stroke="${ink}" stroke-width="3"/><rect x="96" y="150" width="40" height="8" fill="#777" transform="rotate(14 116 154)"/>${tx(120,178,en?'exhaust pipe':'العادم',{fs:10})}</g>
 <g class="hl" data-d="cut"><rect x="190" y="106" width="100" height="78" rx="10" fill="#fff" stroke="#ccd"/><path d="M220 120 v40 M236 120 v40" stroke="#c99" stroke-width="10" stroke-linecap="round"/><line x1="214" y1="140" x2="226" y2="146" stroke="${red}" stroke-width="3"/>${tx(240,178,en?'leg':'الساق',{fs:10})}</g>
 ${tx(330,190,en?'NOW':'الآن',{fs:12,c:red})}`,'نتائج أحداث قريبة: سيارة معطلة، مكتب سُرق منه حاسب، ملفات ضاعت، عادم سقط، ساق مجروحة');
const P81=(k,sub,aux,pp,obj,past,ago,qo)=>({k,chip:[pp,...{break:['تعطّلت','broken down'],steal:['سُرق','stolen'],lose:['ضاع','lost'],fall:['سقط','fallen off'],cut:['جُرحت','cut']}[k]],
 A:{t:[['s',sub],['h',aux,'a'],['v',pp,'k'],['o',obj+'.']],why:[`${aux} + التصريف الثالث: الحدث قريب ونتيجته واضحة الآن.`,`${aux} + past participle: the action is recent and we see the result now.`]},
 B:{t:[['s',sub],['v',past,'n'],['o',obj],['t',ago+'.','q']],why:['مع وقت محدد (ago, yesterday, in 2005) نستعمل الماضي البسيط، لا المضارع التام.','With a finished time (ago, yesterday, in 2005) we use the past simple, not the present perfect.']},
 cue:[`${sub} ${aux} ___ ${obj}.`,`${sub} ${aux} ___ ${obj}.`],qo});
M('u8-l1',{title:['المضارع التام: ماذا حدث الآن؟','Present perfect: what has happened?'],sub:['المس مشكلة: حدثت قبل قليل، ونرى نتيجتها الآن.','Tap a problem: it happened a short time ago, and we see the result now.'],
 scene:S81,cols:5,sw:[['↔ مع وقت محدد','↔ With a time'],['↔ رجوع','↔ Back']],quiz:['اختر التصريف الثالث:','Choose the past participle:'],
 items:[P81('break','My car','has','broken','down','broke down','',['broken','broke','break']),P81('steal','Thieves','have','taken','my computer','took','an hour ago',['taken','took','take']),P81('lose','I','have','lost','all my data','lost','yesterday',['lost','losed','lose']),P81('fall','The exhaust pipe','has','fallen','off','fell off','ten minutes ago',['fallen','fell','falled']),P81('cut','She','has','cut','her leg','cut','this morning',['cut','cutted','cuts'])].map(x=>{if(x.k==='break'){x.B.t=[['s','My car'],['v','broke down','n'],['t','five minutes ago.','q']]}return x})});

/* ---------- 8.2 الضرر: التركيز على النتيجة ---------- */
const S82=en=>svg(210,`<rect width="360" height="210" fill="#f4f1ea"/>
 <rect x="70" y="70" width="190" height="100" rx="12" fill="#c9cfd4" stroke="${ink}" stroke-width="2"/>
 <g class="hl" data-d="scratch"><rect x="96" y="88" width="90" height="54" rx="4" fill="#9fd0e0" stroke="${ink}"/><path d="M104 96 l30 36 M120 92 l26 30" stroke="#fff" stroke-width="2"/></g>
 <g class="hl" data-d="bend"><path d="M240 70 L246 30 L270 14" fill="none" stroke="${ink}" stroke-width="4"/></g>
 <g class="hl" data-d="dent"><rect x="280" y="96" width="60" height="74" rx="8" fill="#888" stroke="${ink}"/><path d="M296 116 q14 12 28 0" fill="none" stroke="#333" stroke-width="3"/></g>
 <g class="hl" data-d="crack"><path d="M200 150 l10 -10 l-6 -8 l12 -12" fill="none" stroke="${red}" stroke-width="3"/></g>
 <g class="hl" data-d="tear"><path d="M14 120 h46 v60 h-46z" fill="#fff" stroke="${ink}"/><path d="M30 120 l6 20 l-8 14 l8 26" fill="none" stroke="${red}" stroke-width="2"/>${tx(37,112,en?'manual':'الدليل',{fs:10})}</g>
 <g class="hl" data-d="burn"><ellipse cx="140" cy="160" rx="22" ry="8" fill="#3b2a1a"/></g>`,'راديو فيه أضرار: شاشة مخدوشة، هوائي منحني، سماعة مبعوجة، جسم مكسور، دليل ممزق، أثر حرق');
const D82=(k,v,pp,obj,ar,en2)=>({k,chip:[pp,ar,en2],A:{t:[['s','Someone'],['h','has'],['v',pp,'k'],['o','the '+obj+'.']],why:['التركيز على الفعل: من فعل؟ has + التصريف الثالث.','Focus on the action: who did it? has + past participle.']},
 B:{t:[['o','The '+obj],['is','is'],['v',pp+'.','a']],why:['التركيز على النتيجة: الشيء + is + التصريف الثالث (صفة).','Focus on the result: the thing + is + past participle (adjective).']},qa:[["What's the problem?",`The ${obj} is ${pp}.`]]});
M('u8-l2',{title:['الضرر: الفعل أم النتيجة؟','Damage: the action or the result?'],sub:['المس مكان الضرر في الراديو، ثم حوّل الجملة من الفعل إلى النتيجة.','Tap the damage on the radio, then change the sentence from the action to the result.'],
 scene:S82,cols:3,sw:[['↔ ركّز على النتيجة','↔ Focus on the result'],['↔ ركّز على الفعل','↔ Focus on the action']],quiz:['انظر إلى الضرر المحاط بالأخضر واختر:','Look at the damage in green and choose:'],
 items:[D82('scratch','scratch','scratched','screen','مخدوشة','scratched'),D82('bend','bend','bent','antenna','منحني','bent'),D82('dent','dent','dented','speaker','مبعوجة','dented'),D82('crack','crack','cracked','body','مشقوق','cracked'),D82('tear','tear','torn','user manual','ممزّق','torn'),D82('burn','burn','burnt','cover','محروق','burnt')]});

/* ---------- 8.3 الماضي البسيط: تواريخ و ago ---------- */
const EV=[['sput',1957,'The Russians','launched','Sputnik','launch'],['gag',1961,'Yuri Gagarin','became','the first man in space','become'],['moon',1969,'Armstrong and Aldrin','landed','on the Moon','land'],['hub',1990,'NASA','sent','the Hubble telescope into space','send'],['gal',2005,'The Europeans','launched','Galileo','launch']];
const S83=en=>{const X=y=>20+(y-1955)*4.6;return svg(150,`<rect width="360" height="150" fill="#0f2233"/>
 ${Array.from({length:30},(_,i)=>`<circle cx="${(i*53)%360}" cy="${(i*37)%60+6}" r="1" fill="#fff" opacity=".6"/>`).join('')}
 <line x1="20" y1="100" x2="${X(2026)}" y2="100" stroke="#9cc" stroke-width="2"/>
 ${EV.map(([k,y],i)=>`<g class="hl" data-d="${k}"><circle cx="${X(y)}" cy="100" r="7" fill="${yel}"/>${tx(X(y),124+(i%2)*14,y,{fs:11,c:'#fff'})}</g>`).join('')}
 <circle cx="${X(2026)}" cy="100" r="6" fill="${red}"/>${tx(X(2026)-4,86,en?'now 2026':'الآن 2026',{fs:10,c:'#f99',a:'end'})}`,'خط زمني لأحداث الفضاء من 1957 إلى اليوم')};
const ago=y=>{const d=2026-y;return d%10>=7?`nearly ${Math.ceil(d/10)*10} years ago`:`more than ${Math.floor(d/10)*10} years ago`};
M('u8-l3',{title:['الماضي البسيط: متى حدث؟','Past simple: when did it happen?'],sub:['المس حدثاً على الخط الزمني: نقوله بالسنة، أو بـ ago من اليوم.','Tap an event on the timeline: we say it with the year, or with ago from today.'],
 scene:S83,cols:5,sw:[['↔ قلها بـ ago','↔ Say it with ago'],['↔ قلها بالسنة','↔ Say it with the year']],quiz:['متى حدث؟ اختر السنة:','When did it happen? Choose the year:'],
 items:EV.map(([k,y,s,v,o,base])=>({k,chip:[String(y),'',''],A:{t:[['s',s],['v',v,'a'],['o',o],['t','in '+y+'.','q']],why:['الماضي البسيط: حدث انتهى في وقت محدد، والفعل بالتصريف الثاني.','Past simple: a finished action at a known time; the verb is in the past form.']},
  B:{t:[['s',s],['v',v,'a'],['o',o],['t',ago(y)+'.','q']],why:['ago = قبل الآن: نحسبها من سنة اليوم (2026).','ago = before now: we count from this year (2026).']},
  qa:[[`When did ${s.replace(/^The /,'the ')} ${base} ${o}?`,`${s} ${v} ${o} in ${y}.`]],
  cue:[`${s} ${v} ${o} in ___.`,`${s} ${v} ${o} in ___.`],qo:[String(y),String(y+4),String(y-3)]}))});

/* ---------- 8.4 مراجعة D ---------- */
M('u8-l4',{title:['مراجعة D: كل قواعد الوحدتين في مكان واحد','Review D: all the grammar of the two units'],sub:['المس قاعدة لترى مثالها، ثم حوّله.','Tap a rule to see its example, then change it.'],cols:3,
 sw:[['↔ الصيغة الأخرى','↔ The other form'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة الناقصة:','Choose the missing word:'],
 items:[{k:'how',chip:['How + adj','الأبعاد','dimensions'],A:{t:[['s','The tower'],['is','is'],['n','46 m','k'],['a','high.','a']]},B:{t:[['h','How'],['a','high','a'],['is','is'],['s','the tower?']]},cue:['___ deep is the sea?','___ deep is the sea?'],qo:['How','What','Which']},
  {k:'mm',chip:['many/much','الكمية','amount'],A:{t:[['h','How'],['m','many','a'],['o','cranes','k'],['r','are they using?']]},B:{t:[['h','How'],['m','much','n'],['o','cement','k'],['r','does he need?']]},cue:['How ___ oil does the car need?','How ___ oil does the car need?'],qo:['much','many','long']},
  {k:'will',chip:['will','المستقبل','future'],A:{t:[['s','It'],['w','will','a'],['v','be 40 km long.']]},B:{t:[['w','Will','a'],['s','it'],['v','be 40 km long?']]},cue:['They ___ complete it in 2025.','They ___ complete it in 2025.'],qo:['will','did','have']},
  {k:'pp',chip:['has + pp','المضارع التام','present perfect'],A:{t:[['s','My car'],['h','has','a'],['v','broken down.','k']]},B:{t:[['s','My car'],['v','broke down','n'],['t','five minutes ago.','q']]},cue:['NASA has ___ the space shuttle.','NASA has ___ the space shuttle.'],qo:['launched','launch','launching']},
  {k:'past',chip:['did','الماضي','past'],A:{t:[['s','They'],['v','completed','a'],['o','it in 2004.']]},B:{t:[['d','Did','n'],['s','they'],['v','complete','k'],['o','it in 2000?']]},cue:['When ___ you buy it?','When ___ you buy it?'],qo:['did','have','will']},
  {k:'res',chip:['is + pp','النتيجة','result'],A:{t:[['s',"He's"],['v','dented','k'],['o','the front bumper.']]},B:{t:[['o','The front bumper'],['is','is'],['v','dented.','a']]},cue:['The windscreen is ___.','The windscreen is ___.'],qo:['broken','break','broke']}]});

/* ---------- 9.1 وظائف الأجزاء ---------- */
const S91=en=>svg(210,`<rect width="360" height="210" fill="#eef1f4"/>
 <ellipse cx="170" cy="168" rx="150" ry="22" fill="#2b2b2b" opacity=".18"/>
 <g class="hl" data-d="skirt"><path d="M40 150 q130 40 260 0 v12 q-130 40 -260 0z" fill="#333"/></g>
 <g class="hl" data-d="body"><path d="M50 118 q120 -36 240 0 v32 q-120 34 -240 0z" fill="#c9ced3" stroke="${ink}" stroke-width="2"/></g>
 <g class="hl" data-d="fan"><circle cx="250" cy="128" r="16" fill="#fff" stroke="${ink}"/><path d="M250 128 l0 -14 M250 128 l12 7 M250 128 l-12 7" stroke="${ink}" stroke-width="3"/></g>
 <g class="hl" data-d="engine"><rect x="220" y="96" width="40" height="22" rx="4" fill="#666"/></g>
 <g class="hl" data-d="handle"><path d="M120 112 L140 40 L190 34" fill="none" stroke="${ink}" stroke-width="5"/></g>
 <g class="hl" data-d="lever"><rect x="182" y="26" width="16" height="6" fill="${red}"/></g>
 ${tx(40,24,en?'airboard':'لوح هوائي',{fs:13,a:'start'})}`,'لوح هوائي: الجسم، والتنورة المطاطية، والمروحة، والمحرك، والمقود، والذراع');
const F91=(k,part,v,o,ar,e2)=>({k,chip:[part,ar,e2],A:{t:[['s','The '+part],['v',v,'a'],['o',o+'.']]},B:{t:[['f','The function of'],['s','the '+part],['is','is to'],['v',v.replace(/s$/,'').replace(/ie$/,'y'),'n'],['o',o+'.']]},why:null,
 qa:[[`What does the ${part} do?`,`It ${v} ${o}.`]]});
M('u9-l1',{title:['ماذا يفعل كل جزء؟','What does each part do?'],sub:['المس جزءاً من اللوح الهوائي لترى وظيفته بجملتين.','Tap a part of the airboard to see its function in two sentences.'],
 scene:S91,cols:3,sw:[['↔ The function of … is to …','↔ The function of … is to …'],['↔ الجملة القصيرة','↔ The short sentence']],quiz:['ما الجزء المحاط بالأخضر؟','Which part is in green?'],
 items:[F91('engine','engine','drives','the fan','المحرك','engine'),F91('fan','fan','pushes','air downwards','المروحة','fan'),F91('lever','lever','controls','the speed','الذراع','lever'),F91('handle','handlebar','steers','the airboard','المقود','handlebar'),F91('body','body','supports','the rider','الجسم','body'),F91('skirt','skirt','holds','the air','التنورة','skirt')].map(x=>{x.A.why=['الشيء المفرد + الفعل + s.','A singular thing + verb + s.'];x.B.why=['المعنى نفسه: to + الفعل الأصلي (بلا s).','The same meaning: to + base verb (no s).'];return x})});

/* ---------- 9.2 التوصيل والإجابات القصيرة ---------- */
const S92=en=>svg(200,`<rect width="360" height="200" fill="#f3f5f2"/>
 <rect x="20" y="30" width="70" height="110" rx="6" fill="#e8e8e8" stroke="${ink}"/>${tx(55,24,en?'computer':'الحاسب',{fs:11})}
 <rect x="130" y="120" width="90" height="34" rx="8" fill="#555"/>${tx(175,172,en?'router':'الموجّه',{fs:11})}
 <rect x="250" y="120" width="70" height="30" rx="8" fill="#ddd" stroke="${ink}"/>${tx(285,168,en?'modem':'المودم',{fs:11})}
 <rect x="300" y="30" width="40" height="44" rx="4" fill="#fff" stroke="${ink}"/>${tx(320,24,en?'power':'الكهرباء',{fs:11})}
 <g class="hl" data-d="pc"><path d="M90 120 Q110 140 130 137" fill="none" stroke="${blu}" stroke-width="4"/></g>
 <g class="hl" data-d="modem"><path d="M220 137 Q236 150 250 137" fill="none" stroke="${grn}" stroke-width="4"/></g>
 <g class="hl" data-d="power"><path d="M285 120 Q300 90 318 74" fill="none" stroke="${ink}" stroke-width="4"/></g>`,'حاسب وموجّه ومودم ومقبس كهرباء، وأسلاك بينها');
M('u9-l2',{title:['ما الموصول بماذا؟ والجواب القصير','What is connected to what? Short answers'],sub:['المس سلكاً لترى ما يصله، ثم حوّل الجملة إلى سؤال.','Tap a cable to see what it connects, then change the sentence into a question.'],
 scene:S92,cols:3,sw:[['↔ حوّلها إلى سؤال','↔ Make it a question'],['↔ رجوع','↔ Back']],quiz:['اختر الجواب القصير الصحيح:','Choose the correct short answer:'],
 items:[{k:'pc',chip:['computer → router','',''],A:{t:[['s','The computer'],['is','is'],['c','connected to','a'],['o','the router.']]},B:{t:[['is','Is','n'],['s','the computer'],['c','connected to','a'],['o','the router?']]},qa:[['Is the computer connected to the router?','Yes, it is.']],cue:['Is the computer connected to the router?','Is the computer connected to the router?'],qo:['Yes, it is.','Yes, it does.','Yes, I have.']},
  {k:'modem',chip:['router → modem','',''],A:{t:[['s',"I've"],['c','connected','a'],['o','the router'],['t','to the modem.']]},B:{t:[['h','Have','n'],['s','you'],['c','connected','a'],['o','the router to the modem?']]},qa:[['Have you connected the router to the modem?','Yes, I have.']],cue:['Have you connected the router to the modem?','Have you connected the router to the modem?'],qo:['Yes, I have.','Yes, I am.','Yes, it is.']},
  {k:'power',chip:['modem → power','',''],A:{t:[['s','The modem'],['d',"doesn't",'n'],['v','work.']]},B:{t:[['d','Does','n'],['s','the modem'],['v','work?']]},qa:[['Does the modem work?',"No, it doesn't."]],cue:['Does the modem work? (✗)','Does the modem work? (✗)'],qo:["No, it doesn't.","No, it isn't.","No, I don't."]}]});

/* ---------- 9.3 الشرط If ومخطط السير ---------- */
const S93=en=>svg(220,`<rect width="360" height="220" fill="#f6f6f1"/>
 <path d="M90 40 l50 -26 l50 26 l-50 26z" fill="#fff" stroke="${ink}" stroke-width="2"/>${tx(140,44,'Does the car start?',{fs:10})}
 <path d="M90 150 l50 -26 l50 26 l-50 26z" fill="#fff" stroke="${ink}" stroke-width="2"/>${tx(140,154,'Battery works?',{fs:10})}
 <g class="hl" data-d="yes1"><path d="M190 40 h60" stroke="${grn}" stroke-width="3"/>${tx(220,34,'YES',{fs:10,c:grn})}<rect x="252" y="26" width="96" height="28" rx="8" fill="#e2f2e8" stroke="${grn}"/>${tx(300,45,'Drive away.',{fs:13})}</g>
 <g class="hl" data-d="no1"><path d="M140 66 v58" stroke="${red}" stroke-width="3"/>${tx(152,90,'NO',{fs:10,c:red,a:'start'})}<rect x="160" y="82" width="110" height="26" rx="8" fill="#fbe9e4" stroke="${red}"/>${tx(215,100,'Check the battery.',{fs:12})}</g>
 <g class="hl" data-d="no2"><path d="M190 150 h60" stroke="${red}" stroke-width="3"/>${tx(220,144,'NO',{fs:10,c:red})}<rect x="252" y="136" width="96" height="28" rx="8" fill="#fbe9e4" stroke="${red}"/>${tx(300,155,'Recharge it.',{fs:13})}</g>
 <g class="hl" data-d="yes2"><path d="M140 176 v20" stroke="${grn}" stroke-width="3"/>${tx(152,192,'YES',{fs:10,c:grn,a:'start'})}<rect x="40" y="196" width="200" height="20" rx="8" fill="#e2f2e8" stroke="${grn}"/>${tx(140,211,'Check the starter motor.',{fs:12})}</g>`,'مخطط سير: هل تعمل السيارة؟ هل تعمل البطارية؟');
const IF=(k,cond,ins,chip,cue,qo)=>({k,chip,A:{t:[['if','If','q'],['c',cond+',','k'],['i',ins.toLowerCase()+'.','a']],say:`If ${cond}, ${ins.toLowerCase()}.`,why:['If + الحالة (مضارع)، ثم التعليمة (فعل أصلي في أول الجملة).','If + the situation (present), then the instruction (base verb).']},
 B:{t:[['i',ins+'','a'],['if','if','q'],['c',cond+'.','k']],say:`${ins} if ${cond}.`,why:['يمكن أن تأتي التعليمة أولاً، وبلا فاصلة.','The instruction can come first, with no comma.']},cue,qo});
M('u9-l3',{title:['If: من مخطط السير إلى جملة','If: from a flow chart to a sentence'],sub:['المس سهماً في المخطط لترى الجملة التي يقولها.','Tap an arrow in the flow chart to see the sentence it says.'],
 scene:S93,cols:4,sw:[['↔ التعليمة أولاً','↔ Instruction first'],['↔ If أولاً','↔ If first']],quiz:['أكمل الجملة من المخطط:','Complete the sentence from the flow chart:'],
 items:[IF('yes1','the car starts','Drive away',['YES ①','',''],['If the car starts, ___.','If the car starts, ___.'],['drive away','check the battery','recharge it']),
  IF('no1',"the car doesn't start",'Check the battery',['NO ①','',''],["If the car doesn't start, ___.","If the car doesn't start, ___."],['check the battery','drive away','check the starter motor']),
  IF('no2',"the battery doesn't work",'Recharge it',['NO ②','',''],["If the battery doesn't work, ___.","If the battery doesn't work, ___."],['recharge it','drive away','check the battery']),
  IF('yes2','the battery works','Check the starter motor',['YES ②','',''],['If the battery works, ___.','If the battery works, ___.'],['check the starter motor','recharge it','drive away'])]});

/* ---------- 10.1 القواعد والتحذيرات ---------- */
const S101=en=>svg(150,`<rect width="360" height="150" fill="#fafafa"/>
 <g class="hl" data-d="must"><circle cx="50" cy="60" r="34" fill="#1f5fa8"/><path d="M34 66 q16 -30 32 0z" fill="#fff"/><rect x="30" y="64" width="40" height="6" fill="#fff"/>${tx(50,118,en?'mandatory':'إلزام',{fs:11})}</g>
 <g class="hl" data-d="mustnt"><circle cx="140" cy="60" r="34" fill="#fff" stroke="${red}" stroke-width="7"/><rect x="118" y="58" width="40" height="7" fill="#555"/><line x1="116" y1="38" x2="164" y2="84" stroke="${red}" stroke-width="7"/>${tx(140,118,en?'prohibition':'منع',{fs:11})}</g>
 <g class="hl" data-d="never"><circle cx="230" cy="60" r="34" fill="#fff" stroke="${red}" stroke-width="7"/><rect x="220" y="40" width="20" height="34" rx="3" fill="#555"/><line x1="206" y1="38" x2="254" y2="84" stroke="${red}" stroke-width="7"/>${tx(230,118,en?'prohibition':'منع',{fs:11})}</g>
 <g class="hl" data-d="might"><path d="M320 26 l34 60 h-68z" fill="${yel}" stroke="#222" stroke-width="3"/><path d="M322 42 l-8 18 h8 l-6 16 l14 -22 h-8 l6 -12z" fill="#222"/>${tx(320,118,en?'warning':'تحذير',{fs:11})}</g>`,'أربع لوحات: إلزام أزرق، منع أحمر، منع الهاتف، تحذير أصفر');
M('u10-l1',{title:['اللوحات: must و mustn\'t و might','Signs: must, mustn\'t and might'],sub:['المس لوحة: شكلها ولونها يخبرانك بنوع القاعدة.','Tap a sign: its shape and colour tell you the type of rule.'],
 scene:S101,cols:4,sw:[['↔ قلها أمراً','↔ Say it as an order'],['↔ رجوع','↔ Back']],quiz:['انظر إلى اللوحة المحاطة واختر:','Look at the sign in green and choose:'],
 items:[{k:'must',chip:['must','دائرة زرقاء','blue circle'],A:{t:[['s','You'],['m','must','a'],['v','wear a hard hat.']],why:['لوحة الإلزام (زرقاء مستديرة): must + فعل أصلي.','Mandatory sign (blue, round): must + base verb.']},B:{t:[['al','Always','a'],['v','wear a hard hat.']],why:['المعنى نفسه بأمر: Always / Wear …','The same meaning as an order: Always / Wear …']}},
  {k:'mustnt',chip:["mustn't",'دائرة حمراء','red circle'],A:{t:[['s','You'],['m',"mustn't",'n'],['v','smoke here.']],why:['لوحة المنع (حمراء مستديرة): mustn\'t + فعل أصلي.','Prohibition sign (red, round): mustn\'t + base verb.']},B:{t:[['d','Do not','n'],['v','smoke here.']],why:['المعنى نفسه: Do not / Don\'t …','The same meaning: Do not / Don\'t …']}},
  {k:'never',chip:['never','دائرة حمراء','red circle'],A:{t:[['nv','Never','n'],['v','use your mobile phone here.']]},B:{t:[['s','You'],['m',"mustn't",'n'],['v','use your mobile phone here.']]},why:null},
  {k:'might',chip:['might','مثلث أصفر','yellow triangle'],A:{t:[['b','Be careful!','q'],['s','You'],['m','might','k'],['v','get an electric shock.']],why:['لوحة التحذير (صفراء مثلثة): might / could = نتيجة ممكنة.','Warning sign (yellow, triangle): might / could = a possible result.']},B:{t:[['d','Danger!','q'],['s','You'],['m','could','k'],['v','get an electric shock.']],why:['could بالمعنى نفسه.','could has the same meaning.']}}].map(x=>{if(x.k==='never'){x.A.why=['never = لا تفعل أبداً.','never = don\'t do it at any time.'];x.B.why=['المعنى نفسه بـ mustn\'t.','The same meaning with mustn\'t.']}return x})});

/* ---------- 10.2 المخاطر: there is / there are ---------- */
const S102=en=>svg(210,`<rect width="360" height="210" fill="#e9eef0"/><rect x="0" y="150" width="360" height="60" fill="#c9c3b6"/>
 <g class="hl" data-d="liquid"><ellipse cx="80" cy="180" rx="44" ry="10" fill="#6aa3c8"/></g>
 <g class="hl" data-d="boxes"><path d="M250 150 l20 -20 h20 l20 -20 h20 l20 -20 v80z" fill="#9b8f7e"/><rect x="292" y="112" width="18" height="18" fill="#c99a5a" stroke="${ink}"/><rect x="314" y="94" width="18" height="18" fill="#c99a5a" stroke="${ink}"/></g>
 <g class="hl" data-d="guard"><rect x="140" y="104" width="50" height="46" fill="#777"/><circle cx="165" cy="96" r="16" fill="#bbb" stroke="${ink}"/>${[0,60,120,180,240,300].map(a=>`<line x1="165" y1="96" x2="${165+16*Math.cos(a*Math.PI/180)}" y2="${96+16*Math.sin(a*Math.PI/180)}" stroke="${ink}"/>`).join('')}</g>
 <g class="hl" data-d="cable"><path d="M20 120 q40 -30 70 0 q30 30 40 0" fill="none" stroke="#222" stroke-width="4"/><path d="M92 118 l6 -8 l4 8" stroke="${red}" stroke-width="2" fill="none"/></g>
 <g class="hl" data-d="food"><rect x="200" y="140" width="40" height="10" fill="#8b5a2b"/><circle cx="212" cy="134" r="7" fill="#e0a050"/><rect x="224" y="124" width="10" height="16" fill="${red}"/></g>
 <g class="hl" data-d="exit"><rect x="12" y="20" width="44" height="80" fill="#2e8b57"/>${tx(34,16,'FIRE EXIT',{fs:8})}<rect x="26" y="56" width="16" height="14" rx="2" fill="#ddd" stroke="#222"/></g>`,'ورشة فيها مخاطر: سائل على الأرض، صناديق على الدرج، آلة بلا واقٍ، سلك تالف، طعام، مخرج طوارئ مقفل');
const H102=(k,pl,thing,where,res,ar,e2)=>({k,chip:[thing.replace(/^(some|a|an|no) /,''),ar,e2],A:{t:[['th',pl?'There are':"There's",'a'],['o',thing,'k'],['w',where+'.']],why:pl?['There are + جمع.','There are + plural.']:["There's + مفرد أو لا يُعد.","There's + singular or uncountable."]},
 B:{t:[['th',pl?'There were':'There was','n'],['o',thing,'k'],['w',where+'.']],why:['في تقرير المفتش نكتب بالماضي: was / were.','In the inspector\'s report we write in the past: was / were.']},qa:[[`Look out! ${pl?'There are':"There's"} ${thing} ${where}.`,`You could ${res}.`]]});
M('u10-l2',{title:['المخاطر: There is / There are','Hazards: There is / There are'],sub:['المس خطراً في الورشة: كيف تحذّر منه؟ وكيف تكتبه في التقرير؟','Tap a hazard in the workshop: how do you warn about it? How do you write it in a report?'],
 scene:S102,cols:3,sw:[['↔ في التقرير (الماضي)','↔ In the report (past)'],['↔ الآن','↔ Now']],h2:['2. التحذير والنتيجة الممكنة','2. The warning and the possible result'],quiz:['ما الخطر المحاط بالأخضر؟','Which hazard is in green?'],
 items:[H102('liquid',0,'some liquid','on the floor','slip and fall','سائل','liquid'),H102('boxes',1,'some boxes','on the stairs','trip over them','صناديق','boxes'),H102('guard',1,'no guards','on the machines','cut your hand','بلا واقٍ','no guards'),H102('cable',0,'a damaged cable','on the wall','get an electric shock','سلك تالف','cable'),H102('food',0,'some food','on the bench','make the food dirty','طعام','food'),H102('exit',0,'a locked fire exit','in the workshop','be trapped in a fire','مخرج مقفل','fire exit')].map(x=>{x.chip[0]={liquid:'liquid',boxes:'boxes',guard:'guards',cable:'cable',food:'food',exit:'fire exit'}[x.k];return x})});

/* ---------- 10.3 التحقيق: أسئلة الماضي ---------- */
const S103=en=>svg(170,`<rect width="360" height="170" fill="#bfe0f2"/><path d="M0 140 q90 -20 180 0 t180 0 v30 h-360z" fill="#9cc58a"/>
 <g transform="translate(70,70)"><path d="M0 0 h70 l14 -6 l-6 10 h-78z" fill="#fff" stroke="${ink}"/><path d="M30 0 l-10 18 h10 l14 -18z" fill="#ddd" stroke="${ink}"/></g>
 <g transform="translate(220,46)"><path d="M0 0 h50 l12 -5 l-4 8 h-58z" fill="#777" stroke="${ink}"/></g>
 <g class="hl" data-d="far"><line x1="160" y1="66" x2="220" y2="50" stroke="${red}" stroke-width="3" stroke-dasharray="5 3"/>${tx(190,44,'36 m',{fs:12,c:red})}</g>
 <g class="hl" data-d="high"><line x1="110" y1="74" x2="110" y2="138" stroke="${grn}" stroke-width="3"/>${tx(118,112,'3505 m',{fs:11,c:grn,a:'start'})}</g>
 <g class="hl" data-d="when"><rect x="282" y="104" width="68" height="26" rx="6" fill="#fff" stroke="${ink}"/>${tx(316,122,'22.17',{fs:13})}</g>
 <g class="hl" data-d="where">${tx(60,160,en?'10 km west of Manchester':'10 km غرب مانشستر',{fs:11,a:'start'})}</g>
 <g class="hl" data-d="many"><rect x="70" y="20" width="76" height="24" rx="6" fill="#fff" stroke="${ink}"/>${tx(108,37,'234 👤',{fs:12})}</g>`,'طائرتان قريبتان فوق مانشستر: المسافة والارتفاع والوقت والمكان وعدد الركاب');
const Q103=(k,q,ans,ar,e2,qo)=>({k,chip:[q[0],ar,e2],A:{t:q.map((t,i)=>['q'+i,t,i===0?'q':i===1?'a':'']),why:['كلمة السؤال + did / was / were + الفاعل …؟ (did مع الفعل الأصلي).','Question word + did / was / were + subject …? (did with the base verb).']},
 B:{t:ans.map((t,i)=>['b'+i,t,i===0?'':'k']),why:['الجواب بالماضي: happened, took place, was, were.','The answer is in the past: happened, took place, was, were.']},qa:[[q.join(' '),ans.join(' ')]],cue:[ans.join(' '),ans.join(' ')],qo});
M('u10-l3',{title:['أسئلة المحقق: الماضي','The investigator\'s questions: the past'],sub:['المس معلومة في الصورة لترى سؤالها وجوابها.','Tap a fact in the picture to see its question and answer.'],
 scene:S103,cols:3,sw:[['↔ الجواب','↔ The answer'],['↔ السؤال','↔ The question']],quiz:['هذا الجواب؛ ما كلمة السؤال؟','This is the answer; what is the question word?'],
 items:[Q103('where',['Where','did','the incident','happen?'],['It happened','10 km west of Manchester.'],'أين','where',['Where','When','How far']),
  Q103('when',['When','did','it','take place?'],['It took place','at 22.17.'],'متى','when',['When','Where','How high']),
  Q103('high',['How high','was','the Boeing?'],['It was','3505 m high.'],'كم ارتفاع','how high',['How high','How far','How many']),
  Q103('far',['How far','was','the jet','from the Boeing?'],['It was','only 36 m away.'],'كم بُعد','how far',['How far','How high','Where']),
  Q103('many',['How many','passengers were','in the Boeing?'],['There were','234 passengers.'],'كم عدد','how many',['How many','How much','How far'])]});

/* ---------- 10.4 مراجعة E ---------- */
M('u10-l4',{title:['مراجعة E: قواعد الوحدتين','Review E: the grammar of the two units'],sub:['المس قاعدة لترى مثالها، ثم حوّله.','Tap a rule to see its example, then change it.'],cols:3,
 sw:[['↔ الصيغة الأخرى','↔ The other form'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة الناقصة:','Choose the missing word:'],
 items:[{k:'fn',chip:['drives','الوظيفة','function'],A:{t:[['s','The engine'],['v','drives','a'],['o','two fans.']]},B:{t:[['q','What does'],['s','the engine'],['v','do?','n']]},cue:['The pedals ___ the chain.','The pedals ___ the chain.'],qo:['turn','turns','turning']},
  {k:'con',chip:['connected to','التوصيل','connection'],A:{t:[['s','The mouse'],['is','is'],['c','connected to','a'],['o','the computer.']]},B:{t:[['s','The printer'],['is','is'],['c','disconnected from','n'],['o','the socket.']]},cue:['The vice is ___ the workbench.','The vice is ___ the workbench.'],qo:['mounted on','suspended from','connected to']},
  {k:'if',chip:['If','الشرط','condition'],A:{t:[['if','If','q'],['c',"the radio doesn't work,",'k'],['i','check the adapter.','a']]},B:{t:[['i','Check the adapter','a'],['if','if','q'],['c',"the radio doesn't work.",'k']]},cue:["If it isn't connected, ___ the adapter.","If it isn't connected, ___ the adapter."],qo:['connect','connects','connected']},
  {k:'must',chip:['must','القاعدة','rule'],A:{t:[['s','Staff'],['m','must','a'],['v','wear hard hats.']]},B:{t:[['s','You'],['m',"mustn't",'n'],['v','smoke here.']]},cue:['You must ___ use a lighted match near petrol.','You must ___ use a lighted match near petrol.'],qo:['never','always','could']},
  {k:'was',chip:['there was','التقرير','report'],A:{t:[['th','There were','a'],['o','some ropes'],['w','on the ground.']]},B:{t:[['th','There was','n'],['o','a spark.']]},cue:['Two fire extinguishers ___ damaged.','Two fire extinguishers ___ damaged.'],qo:['were','was','are']},
  {k:'did',chip:['did','السؤال','question'],A:{t:[['w','Where','q'],['d','did','a'],['s','the incident'],['v','take place?']]},B:{t:[['d','Did','a'],['s','he'],['v','get an electric shock?']]},cue:["He ___ receive a shock.","He ___ receive a shock."],qo:["didn't","wasn't","doesn't"]}]});
})(window);

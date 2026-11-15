/* «شاهد الفكرة» لدروس انجل-112. القالب في vx.js (VX.make) */
(function(G){const V=G.VX;if(!V)return;
const M=(id,cfg)=>{V.L[id]=(el,B)=>V.make(el,B,cfg)};
const ink='#3b4a54',grn='#1f8a5b',red='#c4553f',blu='#2f6b8f',yel='#f1b33c',gry='#9aa3aa';
const svg=(h,body,lab)=>`<svg viewBox="0 0 360 ${h}" role="img" aria-label="${lab||''}">${body}</svg>`;
const tx=(x,y,t,o={})=>`<text x="${x}" y="${y}" font-size="${o.fs||12}" font-weight="${o.w||700}" text-anchor="${o.a||'middle'}" fill="${o.c||ink}">${t}</text>`;
const arr=(x1,y1,x2,y2,c=grn,w=4)=>{const a=Math.atan2(y2-y1,x2-x1),h=10;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><path d="M${x2} ${y2} L${x2-h*Math.cos(a-0.45)} ${y2-h*Math.sin(a-0.45)} L${x2-h*Math.cos(a+0.45)} ${y2-h*Math.sin(a+0.45)}Z" fill="${c}"/>`};
const man=(x,y,c=blu,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="-30" r="9" fill="#e8c7a5" stroke="${ink}"/><path d="M-12 12 v-26 q12 -8 24 0 v26z" fill="${c}"/></g>`;
const S=(t,c)=>t.map((x,i)=>['k'+i,x,c&&c[i]||'']);
const RV=(k,chip,a,ac,b,bc,cue,qo,why)=>({k,chip,A:{t:S(a,ac),why:why&&why[0]},B:{t:S(b,bc),why:why&&why[1]},cue,qo});
const PR=(k,chip,a,b,cue,qo,why)=>({k,chip,A:{t:[['a',a,'a']],why:(why||[])[0]||['العبارة.','The phrase.']},B:{t:[['b',b,'n']],why:(why||[])[1]||['الرد المناسب.','The right reply.']},qa:[[a,b]],cue,qo});
const REV=(title,items)=>({title,sub:['المس قاعدة لترى مثالها، ثم حوّله.','Tap a rule to see its example, then change it.'],cols:3,sw:[['↔ الصيغة الأخرى','↔ The other form'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة الناقصة:','Choose the missing word:'],items});
const TALK=(a,b,en)=>svg(120,`<rect width="360" height="120" fill="#f3f6f8"/>${man(60,92,grn)}${man(300,92,blu)}${tx(60,114,a,{fs:10})}${tx(300,114,b,{fs:10})}<path d="M100 40 q80 -30 160 0" fill="none" stroke="${gry}" stroke-dasharray="6 5" stroke-width="2"/>`,'شخصان يتحدثان');
const PH={sw:[['↔ الرد','↔ The reply'],['↔ العبارة','↔ The phrase']],quiz:['اختر الرد المناسب:','Choose the right reply:'],cols:3};

/* ---------- 1.1 في المطار ---------- */
M('u1-l1',Object.assign({},PH,{title:['استقبال زائر في المطار','Meeting a visitor at the airport'],sub:['المس عبارة لترى من يقولها ورد الآخر.','Tap a phrase to see who says it and the other person\'s reply.'],scene:en=>TALK(en?'host':'المضيف',en?'visitor':'الزائر'),
 items:[PR('take',['take you','المضيف','host'],"Hello, Mr Lee. I'm here to take you to our office.",'Oh, thank you. Nice to meet you.',["I'm here to take you to our office.","I'm here to take you to our office."],['Oh, thank you. Nice to meet you.','Yes, I take.','Speaking.']),
  PR('bags',['your bags','المساعدة','help'],'Can I help you with your bags?',"Thanks, that's very kind of you.",['Can I help you with your bags?','Can I help you with your bags?'],["Thanks, that's very kind of you.","Yes, you can't.","No, I help."]),
  PR('way',['This way.','الطريق','the way'],'The car is outside. This way, please.','OK. Thank you.',['This way, please.','This way, please.'],['OK. Thank you.','Yes, this is.','Good morning.']),
  PR('trip',['the flight','الرحلة','the trip'],'How was your flight?','It was fine, thanks. A bit long.',['How was your flight?','How was your flight?'],['It was fine, thanks.','Yes, I was.','I fly.']),
  PR('first',['first time','أول مرة','first time'],'Is this your first time in Saudi Arabia?',"Yes, it is. / No, I've been here before.",['Is this your first time here?','Is this your first time here?'],["Yes, it is.","Yes, I am.","Yes, it does."])]}));

/* ---------- 1.2 في المكتب ---------- */
M('u1-l2',Object.assign({},PH,{title:['استقبال زائر في المكتب','Meeting a visitor at the office'],sub:['أول لقاء أم لقاء مرة أخرى؟ والضيافة. المس عبارة.','First meeting or meeting again? And hospitality. Tap a phrase.'],scene:en=>TALK(en?'you':'أنت',en?'visitor':'الزائر'),
 items:[PR('meet',['first meeting','أول لقاء','first meeting'],'Nice to meet you.','Nice to meet you, too.',['Nice to meet you.','Nice to meet you.'],['Nice to meet you, too.','Nice to see you again.','Fine.'],[['أول لقاء: meet.','First meeting: meet.'],['الرد بـ too.','Reply with too.']]),
  PR('see',['again','لقاء ثانٍ','again'],'Nice to see you again.','You too. How are you?',['Nice to see you again.','Nice to see you again.'],['You too. How are you?','Nice to meet you.','Yes, again.'],[['نعرفه من قبل: see you again.','We know him already: see you again.'],['الرد: You too.','Reply: You too.']]),
  PR('seat',['take a seat','الجلوس','sit'],'Please take a seat.','Thank you.',['Please take a seat.','Please take a seat.'],['Thank you.','Yes, I take.','Please.']),
  PR('drink',['Would you like …?','الضيافة','offer'],'Would you like something to drink?',"Yes, please. A coffee would be nice.",['Would you like something to drink?','Would you like something to drink?'],['Yes, please. A coffee would be nice.','Yes, I like.','Yes, I would like you.']),
  PR('find',['find us','الوصول','finding us'],'Did you find us easily?',"Yes, no problem. Your directions were very good.",['Did you find us easily?','Did you find us easily?'],['Yes, no problem.','Yes, I find.','Yes, I did find you easy.'])]}));

/* ---------- 2.1 سلسلة المنتج ---------- */
const CH=[['des','designer','design','designs the product'],['man','manufacturer','manufacture','makes the product'],['who','wholesaler','sell in large amounts','sells to shops'],['ret','retailer','sell to the public','sells to customers'],['exp','exporter','export','sells to other countries']];
M('u2-l1',{title:['رحلة المنتج: من يفعل ماذا؟','The product\'s journey: who does what?'],sub:['المس حلقة في السلسلة لترى عملها، ثم كيف نكوّن اسمها.','Tap a link in the chain to see its job, then how we make its name.'],
 scene:en=>svg(110,`<rect width="360" height="110" fill="#f3f6f8"/>${CH.map(([k,n],i)=>`<g class="hl" data-d="${k}"><rect x="${8+i*71}" y="30" width="62" height="40" rx="8" fill="#fff" stroke="${ink}" stroke-width="2"/>${tx(39+i*71,55,n.slice(0,9)+(n.length>9?'…':''),{fs:9})}</g>${i<4?arr(70+i*71,50,79+i*71,50,ink,2):''}`).join('')}${tx(180,96,en?'designer → … → customer':'المصمم ← … ← الزبون',{fs:11})}`,'سلسلة من المصمم إلى الزبون'),cols:3,
 sw:[['↔ الاسم من الفعل','↔ The noun from the verb'],['↔ عمله','↔ The job']],quiz:['ما الحلقة المحاطة بالأخضر؟','Which link is in green?'],
 items:CH.map(([k,n,v,job])=>({k,chip:[n.replace('manufacturer','manu&shy;facturer').replace('wholesaler','whole&shy;saler'),'',''],A:{t:[['s',(/^[aeiou]/.test(n)?'An ':'A ')+n],['v',job+'.','a']],why:['المضارع البسيط للعمل الدائم: s مع المفرد.','The present simple for a permanent job: s with a singular subject.']},B:{t:[['v',v.split(' ')[0],'k'],['x','+ er →','q'],['n',n,'n']],why:['كثير من أسماء الأعمال: الفعل + er / or.','Many job nouns: verb + er / or.']}}))});

/* ---------- 2.2 الملف التعريفي: المبني للمجهول ---------- */
M('u2-l2',{title:['الملف التعريفي: المبني للمجهول','The company profile: the passive'],sub:['المس عبارة لترى الجملة بالمعلوم ثم بالمجهول.','Tap a phrase to see the sentence in the active, then the passive.'],cols:2,
 sw:[['↔ المبني للمجهول','↔ The passive'],['↔ المبني للمعلوم','↔ The active']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('est',['was established','التأسيس','established'],['Two brothers','established','the company in 1990.'],['','a',''],['The company','was established','in 1990.'],['','n',''],['The company ___ in 1990.','The company ___ in 1990.'],['was established','established','is establish'],[['المعلوم: من فعل؟','Active: who did it?'],['المجهول في الماضي: was / were + التصريف الثالث.','Past passive: was / were + past participle.']]),
  RV('made',['are made','الصنع','made'],['We','make','our products in Germany.'],['','a',''],['Our products','are made','in Germany.'],['','n',''],['Our products ___ in Germany.','Our products ___ in Germany.'],['are made','made','are make'],[['المعلوم: We make …','Active: We make …'],['المجهول في المضارع: am / is / are + التصريف الثالث.','Present passive: am / is / are + past participle.']]),
  RV('based',['is based in','المقر','based'],['The company','is based','in Dubai.'],['','n',''],['Its head office','is','in Dubai.'],['','a',''],['The company ___ in Dubai.','The company ___ in Dubai.'],['is based','based','bases'],[['is based in = مقرها في.','is based in = its main office is in.'],['المعنى نفسه بلا مجهول.','The same meaning without a passive.']]),
  RV('spec',['specializes in','التخصص','specializes'],['The company','specializes in','software.'],['','a',''],['Our software','is sold','in 20 countries.'],['','n',''],['It ___ in software for banks.','It ___ in software for banks.'],['specializes','is specialized','specialize'],[['specialize in + اسم.','specialize in + noun.'],['مجهول آخر: is sold.','Another passive: is sold.']])]});

/* ---------- 3.1 وصف عملك ---------- */
M('u3-l1',{title:['ماذا تعمل؟ ومسؤولياتك','What do you do? Your responsibilities'],sub:['المس سؤالاً لترى العبارة وجوابها.','Tap a question to see the phrase and its answer.'],cols:3,
 scene:en=>svg(140,`<rect width="360" height="140" fill="#f3f6f8"/><rect x="140" y="10" width="80" height="28" rx="6" fill="${blu}"/>${tx(180,29,en?'manager':'المدير',{fs:11,c:'#fff'})}${[40,180,320].map((x,i)=>`<line x1="180" y1="38" x2="${x}" y2="70" stroke="${ink}"/><g class="hl" data-d="${['qc','des','sales'][i]}"><rect x="${x-50}" y="70" width="100" height="30" rx="6" fill="#fff" stroke="${ink}" stroke-width="2"/>${tx(x,90,['quality control','design studio','sales'][i],{fs:10})}</g>`).join('')}`,'هيكل تنظيمي'),
 sw:[['↔ الجواب','↔ The answer'],['↔ السؤال','↔ The question']],quiz:['اختر الجواب المناسب:','Choose the right answer:'],
 items:[PR('qc',['responsible for','المسؤولية','responsible'],'What are you responsible for?',"I'm responsible for quality control.",['What are you responsible for?','What are you responsible for?'],["I'm responsible for quality control.","I'm responsible of quality control.","I responsible quality control."],[['السؤال عن المسؤولية.','Asking about responsibility.'],['responsible for + اسم.','responsible for + noun.']]),
  PR('des',['What do you do?','العمل','job'],'What do you do?',"I'm a graphic designer. I work in a design studio.",['What do you do?','What do you do?'],["I'm a graphic designer.","I do designer.","I'm do design."],[['السؤال عن العمل: What do you do?','Asking about a job: What do you do?'],['I\'m a/an + الوظيفة.','I\'m a/an + job.']]),
  PR('sales',['in charge of','المسؤول','in charge'],'Who is in charge of sales?','Maria is in charge of sales. She deals with customers.',['Who is in charge of sales?','Who is in charge of sales?'],['Maria is in charge of sales.','Maria is charge sales.','Maria in charge for sales.'],[['in charge of = مسؤول عن.','in charge of = responsible for.'],['deal with = يتعامل مع.','deal with = handle.']])]});

/* ---------- 3.2 have to / need to / don't need to ---------- */
M('u3-l2',{title:['ضروري أم غير ضروري؟','Necessary or not necessary?'],sub:['المس شرطاً للوظيفة: هل هو ضروري؟','Tap a requirement for the job: is it necessary?'],cols:3,
 scene:en=>svg(120,`<rect width="360" height="120" fill="#f3f6f8"/><g class="hl" data-d="have">${tx(60,50,'✓✓',{fs:28,c:grn})}${tx(60,90,'have to',{fs:12})}</g><g class="hl" data-d="need">${tx(180,50,'✓',{fs:28,c:grn})}${tx(180,90,'need to',{fs:12})}</g><g class="hl" data-d="dont">${tx(300,50,'—',{fs:28,c:gry})}${tx(300,90,"don't need to",{fs:12})}</g>`,'ضروري جداً، ضروري، غير ضروري'),
 sw:[['↔ السؤال','↔ The question'],['↔ الجملة','↔ The statement']],quiz:['اختر الكلمة المناسبة:','Choose the right word:'],
 items:[RV('have',['have to','ضروري (قاعدة)','a rule'],['You','have to','speak English.'],['','a',''],['Do you','have to','work at weekends?'],['q','a',''],['It\'s a rule. You ___ wear a uniform.','It\'s a rule. You ___ wear a uniform.'],['have to',"don't need to",'has to'],[['have to = ضروري (قاعدة أو نظام).','have to = necessary (a rule).'],['السؤال: Do you have to …?','Question: Do you have to …?']]),
  RV('need',['need to','ضروري','necessary'],['You','need to','have experience.'],['','a',''],['She','needs to','be able to work under pressure.'],['','a',''],['He ___ be flexible.','He ___ be flexible.'],['needs to','need to','needs'],[['need to + فعل أصلي.','need to + base verb.'],['مع he / she: needs to.','With he / she: needs to.']]),
  RV('dont',["don't need to",'غير ضروري','not necessary'],['You',"don't need to",'have a degree.'],['','n',''],['You',"don't have to",'wear a suit.'],['','n',''],["It isn't necessary. You ___ come early.","It isn't necessary. You ___ come early."],["don't need to",'have to','need'],[["don't need to = غير ضروري (لكن مسموح).","don't need to = not necessary (but you can)."],["don't have to بالمعنى نفسه.","don't have to has the same meaning."]])]});

/* ---------- 3.3 مراجعة 1 ---------- */
M('u3-l3',REV(['مراجعة 1: الوحدات 1–3','Review 1: Units 1–3'],[
 RV('adj',['punctual','الصفات','adjectives'],['She is','punctual.'],['','a'],['She always','arrives on time.'],['','k'],['He arrives on time. He is ___.','He arrives on time. He is ___.'],['punctual','flexible','confident']),
 RV('air',['take you','المطار','airport'],["I'm here to",'take you','to the hotel.'],['','a',''],['Can I','help you','with your bags?'],['','a',''],["I'm here to ___ you to our office.","I'm here to ___ you to our office."],['take','bring you','go']),
 RV('co',['manu&shy;facturer','الشركات','companies'],['A manufacturer','makes','products.'],['','a',''],['A retailer','sells','to customers.'],['','a',''],['A company that sells to other countries is an ___.','A company that sells to other countries is an ___.'],['exporter','importer','retailer']),
 RV('pas',['was established','المجهول','passive'],['The company','was established','in 1990.'],['','a',''],['The products','are made','in China.'],['','a',''],['The company ___ based in Riyadh.','The company ___ based in Riyadh.'],['is','are','was be']),
 RV('job',['responsible for','العمل','job'],["I'm",'responsible for','quality control.'],['','a',''],["I'm",'in charge of','the sales team.'],['','a',''],["I'm responsible ___ the budget.","I'm responsible ___ the budget."],['for','of','to']),
 RV('nec',['have to','الضرورة','necessity'],['You','have to','speak English.'],['','a',''],['You',"don't need to",'have a car.'],['','n',''],["It isn't necessary. You ___ bring a laptop.","It isn't necessary. You ___ bring a laptop."],["don't need to",'have to','must'])]));

/* ---------- 4.1 too و not … enough ---------- */
const G4=en=>svg(150,`<rect width="360" height="150" fill="#f3f6f8"/><rect x="120" y="40" width="120" height="70" rx="8" fill="#d8dde2" stroke="${ink}" stroke-width="2"/><rect x="140" y="30" width="80" height="12" fill="#fff" stroke="${ink}"/>${tx(180,82,'PRINTER',{fs:11})}
 <g class="hl" data-d="slow">${tx(60,40,'🐢',{fs:26})}${tx(60,70,'slow',{fs:11})}</g>
 <g class="hl" data-d="big"><rect x="110" y="30" width="140" height="90" fill="none" stroke="${red}" stroke-width="3" stroke-dasharray="6 4"/>${tx(180,138,'big',{fs:11})}</g>
 <g class="hl" data-d="exp">${tx(300,44,'€€€',{fs:22,c:red})}${tx(300,70,'expensive',{fs:11})}</g>
 <g class="hl" data-d="why">${tx(300,110,'because / so',{fs:11,c:blu})}</g>`,'طابعة: بطيئة، كبيرة، غالية');
M('u4-l1',{title:['ما المشكلة؟ too و not … enough','What\'s the problem? too and not … enough'],sub:['المس مشكلة في الطابعة: قلها بطريقتين.','Tap a problem with the printer: say it in two ways.'],
 scene:G4,cols:4,sw:[['↔ بطريقة أخرى','↔ Another way'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة المناسبة:','Choose the right word:'],
 items:[RV('slow',['slow','بطيئة','slow'],["It's",'too','slow.'],['','a','k'],["It isn't",'fast','enough.'],['','k','n'],["It's ___ slow.","It's ___ slow."],['too','enough','very much'],[['too + صفة = أكثر من اللازم.','too + adjective = more than we want.'],['not + الضد + enough = أقل من اللازم.','not + the opposite + enough = less than we need.']]),
  RV('big',['big','كبيرة','big'],["It's",'too','big','for my desk.'],['','a','k',''],["My desk isn't",'big','enough.'],['','k','n'],["My desk isn't big ___.","My desk isn't big ___."],['enough','too','very'],[['too big for = أكبر من المكان.','too big for = bigger than the space.'],['enough بعد الصفة.','enough comes after the adjective.']]),
  RV('exp',['expensive','غالية','expensive'],["It's",'too','expensive.'],['','a','k'],["It isn't",'cheap','enough.'],['','k','n'],["It isn't cheap ___.","It isn't cheap ___."],['enough','too','so'],[['too + صفة.','too + adjective.'],['not + صفة + enough.','not + adjective + enough.']]),
  RV('why',['because / so','السبب والنتيجة','reason and result'],['We need a new printer','because','this one is too slow.'],['','a',''],['This printer is too slow,','so','we need a new one.'],['','n',''],["It's too slow, ___ we need a new one.","It's too slow, ___ we need a new one."],['so','because','but'],[['because + السبب.','because + the reason.'],['so + النتيجة.','so + the result.']])]});

/* ---------- 4.2 الميزة والفائدة ---------- */
M('u4-l2',{title:['الميزة والفائدة','Features and benefits'],sub:['المس ميزة في المنتج لترى فائدتها للزبون.','Tap a feature of the product to see its benefit for the customer.'],cols:2,
 sw:[['↔ الفائدة','↔ The benefit'],['↔ الميزة','↔ The feature']],quiz:['اختر العبارة المناسبة:','Choose the right phrase:'],
 items:[RV('war',['2-year warranty','ضمان','warranty'],['It has','a 2-year warranty.'],['','k'],['This means that','you don\'t pay for repairs.'],['n','a'],['It has a long battery life. ___ you can work all day.','It has a long battery life. ___ you can work all day.'],['This means that','This means to','It means of'],[['الميزة: ما في المنتج.','The feature: what the product has.'],['الفائدة: ماذا يعني لك.','The benefit: what it means for you.']]),
  RV('light',['light','خفيف','light'],['It weighs','only 1 kg.'],['','k'],['This enables you to','carry it everywhere.'],['n','a'],['It is light. This enables you ___ carry it everywhere.','It is light. This enables you ___ carry it everywhere.'],['to','for','that'],[['ميزة.','A feature.'],['This enables you to + فعل.','This enables you to + verb.']]),
  RV('fast',['fast','سريع','fast'],['It prints','40 pages a minute.'],['','k'],["You'll be able to",'save time.'],['n','a'],["You'll be able ___ save time.","You'll be able ___ save time."],['to','for','of'],[['ميزة.','A feature.'],["You'll be able to + فعل.","You'll be able to + verb."]]),
  RV('touch',['touch screen','شاشة لمس','touch screen'],['It has','a touch screen.'],['','k'],['So','it\'s very easy to use.'],['n','a'],['It has a touch screen, ___ it is easy to use.','It has a touch screen, ___ it is easy to use.'],['so','because','to'],[['ميزة.','A feature.'],['so + الفائدة.','so + the benefit.']])]});

/* ---------- 5.1 مقارنة الخدمات ---------- */
const SV=[['A','Fast Post',90,40,60],['B','CityCourier',60,80,90],['C','Express 24',40,95,70]];
M('u5-l1',{title:['اختيار خدمة: المقارنة والتفضيل','Choosing a service: comparing'],sub:['المس معياراً لترى أي خدمة أفضل فيه.','Tap a criterion to see which service is best for it.'],
 scene:en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/>${SV.map(([k,n],i)=>tx(70+i*110,160,n,{fs:11})).join('')}
 <g class="dim" data-d="price">${SV.map(([k,n,p],i)=>`<rect x="${45+i*110}" y="${140-p}" width="50" height="${p}" fill="${red}"/>`).join('')}${tx(20,20,'€',{fs:14,c:red,a:'start'})}</g>
 <g class="dim" data-d="speed">${SV.map(([k,n,p,s],i)=>`<rect x="${45+i*110}" y="${140-s}" width="50" height="${s}" fill="${grn}" opacity=".85"/>`).join('')}${tx(20,40,'⚡',{fs:14,a:'start'})}</g>
 <g class="dim" data-d="rel">${SV.map(([k,n,p,s,r],i)=>`<rect x="${55+i*110}" y="${140-r}" width="30" height="${r}" fill="${blu}"/>`).join('')}${tx(20,60,'✓',{fs:14,c:blu,a:'start'})}</g>`,'ثلاث خدمات شحن: السعر والسرعة والموثوقية'),cols:3,
 sw:[['↔ التفضيل','↔ The superlative'],['↔ المقارنة','↔ The comparative']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('price',['price','السعر','price'],['CityCourier is','cheaper than','Fast Post.'],['','a',''],['Express 24 is','the cheapest.'],['','n'],['cheap → the ___','cheap → the ___'],['cheapest','most cheap','cheaper'],[['المقارنة: …er than.','The comparative: …er than.'],['التفضيل: the …est.','The superlative: the …est.']]),
  RV('speed',['speed','السرعة','speed'],['CityCourier is','faster than','Fast Post.'],['','a',''],['Express 24 is','the fastest.'],['','n'],['fast → the ___','fast → the ___'],['fastest','most fast','faster'],[['المقارنة.','The comparative.'],['التفضيل.','The superlative.']]),
  RV('rel',['reliability','الموثوقية','reliability'],['CityCourier is','more reliable than','Express 24.'],['','a',''],['CityCourier is','the most reliable.'],['','n'],['reliable → the ___','reliable → the ___'],['most reliable','reliablest','more reliable'],[['صفة طويلة: more … than.','A long adjective: more … than.'],['the most + صفة طويلة.','the most + long adjective.']])]});

/* ---------- 5.2 الرأي ---------- */
M('u5-l2',Object.assign({},PH,{title:['إبداء الرأي والموافقة','Giving opinions and agreeing'],sub:['المس عبارة لترى العبارة وردّاً مناسباً.','Tap a phrase to see it and a good reply.'],scene:en=>TALK('A','B'),
 items:[PR('ask',['What do you think?','طلب الرأي','asking'],'What do you think about the new office?','I think it\'s great.',['What do you think about the new office?','What do you think about the new office?'],["I think it's great.","I'm think great.","Yes, I think."]),
  PR('give',['If you ask me','الرأي','opinion'],"If you ask me, it's too expensive.",'I agree. Good point.',["If you ask me, it's too expensive.","If you ask me, it's too expensive."],['I agree. Good point.','I am agree.','Yes, you ask me.']),
  PR('part',['I see what you mean, but …','موافقة جزئية','partly agree'],"The service is fast.","I see what you mean, but it isn't very reliable.",['You partly agree. You say:','You partly agree. You say:'],["I see what you mean, but …","I see what you mean, so …","I mean what you see."]),
  PR('dis',["I'm not sure about that.",'عدم الموافقة','disagree'],'Courier services are always better.',"I'm not sure about that.",['You politely disagree. You say:','You politely disagree. You say:'],["I'm not sure about that.","You are wrong!","I not agree."])]}));

/* ---------- 11.1 كسر الجليد ---------- */
M('u11-l1',Object.assign({},PH,{title:['كسر الجليد','Breaking the ice'],sub:['المس عبارة لتعرف متى تقولها وكيف يُرد عليها.','Tap a phrase to see when to say it and how to reply.'],scene:en=>TALK('A','B'),
 items:[PR('how',['How do you do?','رسمي','formal'],'How do you do?','How do you do?',['How do you do?','How do you do?'],['How do you do?','I do well.','Fine, I do.'],[['أول لقاء رسمي.','A formal first meeting.'],['الرد بالعبارة نفسها.','Reply with the same phrase.']]),
  PR('new',['Are you new here?','سؤال','question'],'Are you new here?',"Yes, I started last week. I'm Sam, by the way.",['Are you new here?','Are you new here?'],["Yes, I started last week.","Yes, I'm new here since.","Yes, I new."]),
  PR('see',['good to see you','لقاء من تعرفه','someone you know'],"It's good to see you again.","You too. How's work?",["It's good to see you again.","It's good to see you again."],['You too.','Nice to meet you.','How do you do?']),
  PR('busy',['Are you busy?','الحديث','small talk'],'Are you busy at the moment?',"Yes, very! We've got a big project.",['Are you busy at the moment?','Are you busy at the moment?'],["Yes, very! We've got a big project.","Yes, I busy.","Yes, I do."])]}));

/* ---------- 11.2 How long + for / since ---------- */
M('u11-l2',{title:['منذ متى؟ for و since','How long? for and since'],sub:['المس نقطة على الخط الزمني: مدة (for) أم بداية (since)؟','Tap a point on the timeline: a period (for) or a start (since)?'],
 scene:en=>svg(120,`<rect width="360" height="120" fill="#f3f6f8"/><line x1="20" y1="60" x2="320" y2="60" stroke="${ink}" stroke-width="3"/><circle cx="330" cy="60" r="9" fill="${red}"/>${tx(330,92,en?'now':'الآن',{fs:11,c:red})}
 <g class="dim" data-d="for5">${arr(70,40,320,40,grn,4)}${tx(195,30,'for five years',{fs:12,c:grn})}</g>
 <g class="dim" data-d="since"><circle cx="70" cy="60" r="8" fill="${blu}"/>${tx(70,92,'2021',{fs:12,c:blu})}</g>
 <g class="dim" data-d="for2">${arr(240,80,320,80,grn,4)}${tx(280,104,'for 2 months',{fs:11,c:grn})}</g>
 <g class="dim" data-d="sinc2"><circle cx="240" cy="60" r="8" fill="${blu}"/>${tx(240,30,'September',{fs:11,c:blu})}</g>`,'خط زمني إلى الآن'),cols:4,
 sw:[['↔ السؤال How long …?','↔ The question How long …?'],['↔ الجواب','↔ The answer']],quiz:['for أم since؟','for or since?'],
 items:[RV('for5',['for','مدة','period'],["I've worked here",'for','five years.'],['','a','k'],['How long','have you','worked here?'],['q','n',''],["I've lived here ___ five years.","I've lived here ___ five years."],['for','since','from'],[['for + مدة (five years).','for + a period (five years).'],['How long + المضارع التام؟','How long + present perfect?']]),
  RV('since',['since','بداية','start'],["I've worked here",'since','2021.'],['','a','k'],['How long','have you','worked here?'],['q','n',''],["I've worked here ___ 2021.","I've worked here ___ 2021."],['since','for','from'],[['since + بداية (2021).','since + a starting point (2021).'],['السؤال نفسه.','The same question.']]),
  RV('for2',['for 2 months','مدة','period'],["She's been in Riyadh",'for','two months.'],['','a','k'],['How long','has she','been in Riyadh?'],['q','n',''],["She's been here ___ two months.","She's been here ___ two months."],['for','since','ago'],[['for + مدة.','for + a period.'],['has مع she.','has with she.']]),
  RV('sinc2',['since September','بداية','start'],["She's been in Riyadh",'since','September.'],['','a','k'],['How long','has she','been in Riyadh?'],['q','n',''],["She's been here ___ September.","She's been here ___ September."],['since','for','in'],[['since + شهر بدأ فيه.','since + the month it started.'],['السؤال.','The question.']])]});

/* ---------- 12.1 المسيرة: الماضي البسيط ---------- */
const CR=[['sch',2000,'finished school','finish'],['uni',2004,'graduated from university','graduate'],['job',2005,'started work at Siemens','start'],['mba',2010,'did an MBA','do'],['left',2015,'left Siemens','leave']];
M('u12-l1',{title:['مسيرتك: الماضي البسيط','Your career: the past simple'],sub:['المس سنة على الخط لترى الحدث وسؤاله.','Tap a year on the line to see the event and its question.'],
 scene:en=>svg(110,`<rect width="360" height="110" fill="#f6f2ea"/><line x1="20" y1="60" x2="340" y2="60" stroke="${ink}" stroke-width="3"/>${CR.map(([k,y],i)=>`<g class="hl" data-d="${k}"><circle cx="${40+i*70}" cy="60" r="9" fill="${yel}" stroke="${ink}"/>${tx(40+i*70,40,y,{fs:12})}</g>`).join('')}`,'خط زمني للمسيرة'),cols:5,
 sw:[['↔ السؤال When did …?','↔ The question When did …?'],['↔ الجملة','↔ The statement']],quiz:['اختر صيغة الماضي:','Choose the past form:'],
 items:CR.map(([k,y,e,b])=>({k,chip:[String(y),'',''],A:{t:[['s','I'],['v',e.split(' ')[0],'a'],['o',e.split(' ').slice(1).join(' ')],['y','in '+y+'.','q']],why:['الماضي البسيط مع سنة (in 2004).','The past simple with a year (in 2004).']},B:{t:[['w','When'],['d','did','n'],['s','you'],['v',b,'k'],['o',(e.split(' ').slice(1).join(' ')||'')+'?']],why:['السؤال: When did + you + الفعل الأصلي?','Question: When did + you + base verb?']},cue:[`${b} → ?`,`${b} → ?`],qo:[e.split(' ')[0],b+'ed',b+'s'].filter((v,i,a)=>a.indexOf(v)===i)}))});

/* ---------- 12.2 التجارب: Have you ever …? ---------- */
M('u12-l2',{title:['التجارب: Have you ever …?','Experiences: Have you ever …?'],sub:['المس تجربة: نسأل بالمضارع التام، ثم بالماضي حين نذكر الوقت.','Tap an experience: we ask with the present perfect, then the past when we say the time.'],cols:2,
 sw:[['↔ متى؟ (الماضي)','↔ When? (past)'],['↔ هل جربت؟','↔ Have you ever?']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('jp',['been to Japan','السفر','travel'],['Have you ever','been','to Japan?'],['q','a',''],['When','did you go?','I went in 2015.'],['q','n','k'],['Have you ever ___ to Japan?','Have you ever ___ to Japan?'],['been','went','go'],[['التجربة بلا وقت: Have you ever + التصريف الثالث؟','An experience with no time: Have you ever + past participle?'],['حين نذكر الوقت: الماضي البسيط.','When we say the time: the past simple.']]),
  RV('pres',['given a presentation','العرض','presentation'],["I've",'given','a lot of presentations.'],['','a',''],['I','gave','one last week.'],['','n','q'],['I ___ a presentation last week.','I ___ a presentation last week.'],['gave','have given','give'],[['المضارع التام للتجربة.','The present perfect for experience.'],['last week وقت محدد: الماضي.','last week is a finished time: past.']]),
  RV('never',['never','أبداً','never'],["I've",'never','worked','abroad.'],['','n','a',''],['Have you?','Yes, I have.'],['q','k'],["I've ___ worked abroad.","I've ___ worked abroad."],['never','ever','yet'],[['never = لم يحدث أبداً.','never = not at any time.'],['الجواب القصير: Yes, I have.','Short answer: Yes, I have.']]),
  RV('met',['met','قابلت','met'],['Have you ever','met','the CEO?'],['q','a',''],['Yes, I','met','him at a conference in 2019.'],['','n',''],['I ___ him at a conference in 2019.','I ___ him at a conference in 2019.'],['met','have met','meet'],[['التصريف الثالث: met.','Past participle: met.'],['مع in 2019: الماضي.','With in 2019: past simple.']])]});

/* ---------- 12.3 مراجعة 4 ---------- */
M('u12-l3',REV(['مراجعة 4: الوحدات 10–12','Review 4: Units 10–12'],[
 RV('rout',['leave home','الروتين','routine'],['I','leave home','at 7.30.'],['','a',''],['I','get home','at 6.'],['','a',''],['I ___ lunch at 1.','I ___ lunch at 1.'],['have','make','do']),
 RV('freq',['usually','التكرار','frequency'],['I','usually','start at 8.'],['','a',''],["I'm",'never','late.'],['','a',''],["I'm ___ late for meetings.","I'm ___ late for meetings."],['never','ever','sometimes are']),
 RV('hl',['How long …?','المدة','duration'],['How long','have you','lived here?'],['q','a',''],["I've lived here",'since','2019.'],['','a',''],["I've worked here ___ six years.","I've worked here ___ six years."],['for','since','ago']),
 RV('car',['graduated','المسيرة','career'],['I','graduated','in 2004.'],['','a',''],['When','did you','graduate?'],['q','a',''],['When ___ you leave Siemens?','When ___ you leave Siemens?'],['did','have','do']),
 RV('exp',['Have you ever …?','التجربة','experience'],['Have you ever','been','to Paris?'],['q','a',''],['Yes, I have.','I went','last year.'],['','a',''],["I've ___ been to Paris.","I've ___ been to Paris."],['never','ever','yet']),
 RV('st',['Really?','الرد القصير','short reply'],["I've worked in five countries."],[''],['Really?','Which ones?'],['a',''],["I live in Jeddah. — ___ So do I!","I live in Jeddah. — ___ So do I!"],['Really?','Speaking.','How do you do?'])]));

/* ---------- 13.1 التوصية ---------- */
M('u13-l1',Object.assign({},PH,{title:['التوصية في المطعم','Recommending in a restaurant'],sub:['المس عبارة توصية لترى الرد بالقبول أو بالرفض بلطف.','Tap a recommendation to see a reply that accepts or politely refuses.'],scene:en=>TALK(en?'host':'المضيف',en?'guest':'الضيف'),
 sw:[['↔ الرد','↔ The reply'],['↔ التوصية','↔ The recommendation']],
 items:[PR('rec',['I recommend …','أوصي','recommend'],'I recommend the lamb. It\'s delicious.',"That sounds good. I'll have that.",["I recommend the lamb.","I recommend the lamb."],["That sounds good. I'll have that.","I recommend you.","Yes, I am."]),
  PR('try',['You should try …','جرّب','should try'],'You should try the kabsa.',"OK, I'll try it.",['You should try the kabsa.','You should try the kabsa.'],["OK, I'll try it.","Yes, I should.","No, you try."]),
  PR('sug',['I suggest …','أقترح','suggest'],'I suggest the fish. It\'s very fresh.',"Actually, I don't really like fish. Is there any chicken?",['You don\'t like fish. You say:','You don\'t like fish. You say:'],["Actually, I don't really like fish.","No! I hate it.","I suggest no."]),
  PR('how',['How is it cooked?','طريقة الطبخ','cooking'],'How is it cooked?',"It's grilled, and it's served with rice.",['How is it cooked?','How is it cooked?'],["It's grilled, and it's served with rice.","It grills.","It is cook."],[['السؤال عن الطبخ بالمجهول.','Asking about cooking with the passive.'],['is + التصريف الثالث: grilled, served.','is + past participle: grilled, served.']])]}));

/* ---------- 13.2 الدعوة ---------- */
M('u13-l2',Object.assign({},PH,{title:['الدعوة والقبول والرفض','Inviting, accepting and refusing'],sub:['المس دعوة لترى الرد المناسب.','Tap an invitation to see the right reply.'],scene:en=>TALK('A','B'),
 items:[PR('inv',['Would you like to …?','الدعوة','invite'],'Would you like to come to dinner on Friday?','Yes, I\'d love to. What time shall we meet?',['Would you like to come to dinner?','Would you like to come to dinner?'],["Yes, I'd love to.","Yes, I like.","Yes, I would like you."],[['الدعوة: Would you like to + فعل؟','The invitation: Would you like to + verb?'],['القبول ثم سؤال.','Accept, then ask a question.']]),
  PR('ref',["I'm sorry, but …",'الرفض','refuse'],'Would you like to see the old town tomorrow?',"Oh, I'm sorry, I can't. I have a meeting.",['You are busy. You say:','You are busy. You say:'],["I'm sorry, I can't. I have a meeting.","No. I don't want.","No, I'm not."],[['الدعوة.','The invitation.'],['الرفض المهذب: اعتذار + سبب.','A polite refusal: sorry + a reason.']]),
  PR('time',['What time …?','الموعد','time'],'What time shall we meet?',"How about 7.30 at your hotel?",['What time shall we meet?','What time shall we meet?'],['How about 7.30?','At Friday.','Yes, we shall.']),
  PR('thx',['Thank you for …','الشكر','thanks'],'Thank you for a lovely evening.',"You're welcome. I'm glad you enjoyed it.",['Thank you for a lovely evening.','Thank you for a lovely evening.'],["You're welcome.","Yes, thank you.","Me too."])]}));

/* ---------- 14.1 خطوة خطوة ---------- */
const STP=[['first','First','press "Tickets".'],['then','Then','choose your station.'],['next','Next','put in your money.'],['after','After that','take your ticket.'],['fin','Finally','take your change.']];
M('u14-l1',{title:['خطوة خطوة: First، Then …','Step by step: First, Then …'],sub:['المس رقم الخطوة على جهاز التذاكر لترى التعليمة.','Tap a step number on the ticket machine to see the instruction.'],
 scene:en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/><rect x="110" y="10" width="140" height="150" rx="10" fill="#d8dde2" stroke="${ink}" stroke-width="2"/><rect x="124" y="22" width="112" height="44" rx="4" fill="#cfe8f5"/>
 ${STP.map(([k],i)=>`<g class="hl" data-d="${k}"><circle cx="${i<3?60:300}" cy="${30+(i%3)*44+(i>=3?22:0)}" r="15" fill="${yel}" stroke="${ink}" stroke-width="2"/>${tx(i<3?60:300,35+(i%3)*44+(i>=3?22:0),i+1,{fs:14})}${arr(i<3?78:282,30+(i%3)*44+(i>=3?22:0),i<3?120:240,[44,90,116,124,140][i],ink,2)}</g>`).join('')}
 <rect x="130" y="76" width="44" height="10" fill="#555"/><rect x="186" y="76" width="40" height="22" fill="#fff" stroke="${ink}"/><rect x="140" y="120" width="80" height="10" fill="#333"/><rect x="200" y="136" width="30" height="14" fill="#555"/>`,'جهاز تذاكر وخطواته'),cols:5,
 sw:[['↔ النهي Don\'t','↔ Don\'t'],['↔ الخطوة','↔ The step']],quiz:['ما كلمة الترتيب لهذه الخطوة؟','Which sequence word goes with this step?'],
 items:STP.map(([k,w,i],n)=>({k,chip:[String(n+1),w,w],A:{t:[['w',w+',','q'],['v',i[0].toUpperCase()+i.slice(1),'a']],why:['كلمة الترتيب + فعل الأمر.','A sequence word + an instruction verb.']},B:{t:[["d","Don't",'n'],['v',['press "Cancel".','forget your ticket.','use old coins.','leave the machine.','forget your change.'][n]]],why:["النهي: Don't + فعل أصلي.","A negative instruction: Don't + base verb."]},cue:[i,i],qo:[w,...STP.map(z=>z[1]).filter(z=>z!==w).slice(0,2)]}))});

/* ---------- 14.2 النصيحة ---------- */
M('u14-l2',{title:['النصيحة: should و Why don\'t you …?','Advice: should and Why don\'t you …?'],sub:['المس مشكلة زميلك لترى نصيحتين.','Tap your colleague\'s problem to see two pieces of advice.'],cols:2,
 sw:[['↔ نصيحة أخرى','↔ Other advice'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة المناسبة:','Choose the right word:'],
 items:[RV('late',['always late','التأخر','late'],['I think you','should','leave home earlier.'],['','a',''],['Why don\'t you','take','the metro?'],['q','a',''],['I think you ___ leave earlier.','I think you ___ leave earlier.'],['should','should to','shoulds'],[['should + فعل أصلي (بلا to).','should + base verb (no to).'],["Why don't you + فعل؟ اقتراح.","Why don't you + verb? A suggestion."]]),
  RV('tired',['tired','التعب','tired'],["I don't think you",'should','work at weekends.'],['','n',''],['You','should','take a holiday.'],['','a',''],["I don't think you ___ work so much.","I don't think you ___ work so much."],['should',"shouldn't",'should not to'],[["النفي: I don't think you should …","Negative: I don't think you should …"],['should للنصيحة.','should for advice.']]),
  RV('pc',['computer problem','الحاسب','computer'],['You','should talk to','Ali.'],['','a',''],['He','is in charge of','IT.'],['','n',''],['He is responsible ___ the computers.','He is responsible ___ the computers.'],['for','of','to'],[['انصحه بالشخص المسؤول.','Advise him to see the right person.'],['in charge of / responsible for.','in charge of / responsible for.']])]});

/* ---------- 15.1 الطلبات ---------- */
M('u15-l1',{title:['من الأمر إلى الطلب المهذب','From an order to a polite request'],sub:['المس طلباً لترى الأمر ثم الصيغة المهذبة.','Tap a request to see the order, then the polite form.'],cols:2,
 sw:[['↔ مهذب','↔ Polite'],['↔ أمر','↔ An order']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('send',['send','أرسل','send'],['Send me','the report.'],['n',''],['Could you','send me','the report, please?'],['a','',''],['Could you ___ me the report?','Could you ___ me the report?'],['send','sending','to send'],[['الأمر مباشر وقد يبدو غير مهذب.','An order is direct and can sound rude.'],['Could you + فعل أصلي …, please?','Could you + base verb …, please?']]),
  RV('close',['close','أغلق','close'],['Close','the window.'],['n',''],['Would you mind','closing','the window?'],['a','k',''],['Would you mind ___ the door?','Would you mind ___ the door?'],['closing','close','to close'],[['الأمر.','The order.'],['Would you mind + ing؟','Would you mind + ing?']]),
  RV('call',['call','اتصل','call'],['Call','the client.'],['n',''],['Can you','call','the client?'],['a','',''],['Can you ___ the client?','Can you ___ the client?'],['call','calling','to call'],[['الأمر.','The order.'],['Can you + فعل أصلي؟ (أقل رسمية من Could)','Can you + base verb? (less formal than Could)']]),
  RV('reply',['the reply','الرد','reply'],['Would you mind checking this?'],['q'],['Not at all.',"I'll do it now."],['a',''],['Would you mind checking this? — ___','Would you mind checking this? — ___'],['Not at all.','Yes, I mind.','No, I do.'],[['الطلب.','The request.'],['Not at all = لا مانع (نعم سأفعل).','Not at all = no problem (yes, I will).']])]});

/* ---------- 15.2 الاقتراحات ---------- */
M('u15-l2',{title:['الاقتراحات: Let\'s و How about …?','Suggestions: Let\'s and How about …?'],sub:['المس صيغة اقتراح لترى الفعل بعدها.','Tap a suggestion form to see the verb after it.'],cols:3,
 sw:[['↔ الرد','↔ The reply'],['↔ الاقتراح','↔ The suggestion']],quiz:['اختر صيغة الفعل:','Choose the verb form:'],
 items:[RV('could',['We could …','نستطيع','we could'],['We could','have','the meeting on Monday.'],['a','k',''],["That's a good idea."],['n'],['We could ___ the meeting online.','We could ___ the meeting online.'],['have','having','to have'],[['We could + فعل أصلي.','We could + base verb.'],['الموافقة.','Agreeing.']]),
  RV('lets',["Let's …",'هيا','let\'s'],["Let's",'start','at 9.'],['a','k',''],['I agree.'],['n'],["Let's ___ at 9.","Let's ___ at 9."],['start','starting','to start'],[["Let's + فعل أصلي.","Let's + base verb."],['الموافقة.','Agreeing.']]),
  RV('why',["Why don't we …?",'لماذا لا','why don\'t we'],["Why don't we",'use','the big room?'],['a','k',''],["I'm not sure. It's very cold."],['n'],["Why don't we ___ a break?","Why don't we ___ a break?"],['take','taking','to take'],[["Why don't we + فعل أصلي؟","Why don't we + base verb?"],['عدم الموافقة بلطف.','Politely disagreeing.']]),
  RV('how',['How about …?','ما رأيك','how about'],['How about','meeting','on Tuesday?'],['a','k',''],["Good idea."],['n'],['How about ___ on Tuesday?','How about ___ on Tuesday?'],['meeting','meet','to meet'],[['How about / What about + ing؟','How about / What about + ing?'],['الموافقة.','Agreeing.']])]});

/* ---------- 15.3 مراجعة 5 ---------- */
M('u15-l3',REV(['مراجعة 5: الوحدات 13–15','Review 5: Units 13–15'],[
 RV('cook',['is grilled','الطبخ','cooking'],['The fish','is grilled.'],['','a'],["It's",'served with','rice.'],['','a',''],['The lamb ___ roasted.','The lamb ___ roasted.'],['is','are','has']),
 RV('inv',["I'd love to",'الدعوة','invitation'],['Would you like to','come?'],['q',''],["Yes,",'I\'d love to.'],['','a'],['Would you like to join us? — Yes, ___','Would you like to join us? — Yes, ___'],["I'd love to.","I love.","I would."]),
 RV('seq',['First / Then','الترتيب','sequence'],['First,','press "Start".'],['q',''],['Then,','choose the size.'],['q',''],['___, take your ticket. (the last step)','___, take your ticket. (the last step)'],['Finally','First','Next']),
 RV('adv',['should','النصيحة','advice'],['You','should','see a doctor.'],['','a',''],["Why don't you",'take','a day off?'],['q','a',''],['I think you ___ rest.','I think you ___ rest.'],['should','should to','are should']),
 RV('req',['Would you mind …?','الطلب','request'],['Would you mind','waiting','a moment?'],['','a',''],['Could you','wait','a moment?'],['','a',''],['Would you mind ___ again?','Would you mind ___ again?'],['calling','call','to call']),
 RV('sug',['How about …?','الاقتراح','suggestion'],['How about','having','lunch?'],['','a',''],["Let's",'have','lunch.'],['','a',''],["Let's ___ a break.","Let's ___ a break."],['take','taking','to take'])]));
})(window);

/* نهج الشرح لانجل-112 (dev-kit/guides/TEACHING_APPROACH.md) — مربع «الفكرة» لكل جزء من «شرح القاعدة».
   المفتاح = عنوان الجزء. الأمثلة والمشاهد من إعدادنا (إضافة من خارج الكتاب). يعتمد على nhk.js */
(function(G){const NH=G.NH=G.NH||{};const K=G.NHK;
const {svg,tx,rc,ci,ln,ar,ar2,man,wh,grd,ok,no,bub,S,R,cap,E,head}=K;const FM=(...p)=>G.ENK.fm(...p);
const {ink,grn,red,blu,yel,gry}=K.C;
const bg=(h,c='#eaf3f9')=>`<rect width="400" height="${h}" fill="${c}"/>`;
const two=(h=130,b='')=>svg(h+14,bg(h+14)+grd(h+4)+man(110,h-26,blu,1)+man(290,h-26,grn,1)+b);
const tline=(b='')=>bg(110)+ln(40,60,360,60,ink,3)+ci(320,60,8,ink)+tx(320,90,'now',{fs:12})+b;

/* ===== الوحدة 11 ===== */
NH['أول مرة أم شخص تعرفه؟']={
 say:[`أول مرة تشوفه ← ${E('meet')}: ${E('Nice to meet you.')} شخص تعرفه من قبل ← ${E('see … again')}: ${E('Nice to see you again.')} ومع اللي تعرفه تسأل عن حاله وشغله.`,
  `First time → ${E('meet')}. Someone you know → ${E('see … again')}.`],
 life:[['Nice to see you again, Khalid!','سعيد برؤيتك مجدداً يا خالد!']],
 scene:{title:['تعرفه ولا لا؟','Do you know him?'],
  ctrl:[{k:'k',label:['الشخص','Person'],opts:[['new',['جديد','new']],['old',['تعرفه','you know him']]]}],
  svg:s=>two(130,s.k==='old'?tx(200,40,'☺ ☺',{fs:22,c:grn}):tx(200,40,'?',{fs:26,c:red})),
  ask:s=>({q:['meet ولا see again؟','meet or see again?'],opts:['meet','see … again'],a:s.k==='new'?'meet':'see … again'}),
  out:s=>s.k==='new'?{t:S('x:Nice to meet you.|q:—|n:Nice to meet you, too.'),ar:'سعيد بلقائك. — وأنا كذلك.',why:['أول مرة ← meet','First time → meet']}:{t:S("x:Nice to see you again.|q:How's work?"),ar:'سعيد برؤيتك مجدداً. كيف العمل؟',why:['تعرفه ← see … again','You know him → see … again']}},
 think:[['أول مرة ← meet. مرة ثانية ← see again.','First time → meet. Again → see again.']]};

const SM=[['Do','I\'m new here, too. Is this your first day?',1],['Do','The canteen here is great!',1],["Don't",'How much do you earn?',0],["Don't",'I hate this job.',0]];
NH['نصائح الحديث الاجتماعي']={
 say:[`الهدف إن الثاني يرتاح. فابدأ بمعلومة عنك، وتكلم في الأشياء السهلة (الاسم، البلد، الشغل)، وقل شي إيجابي. وابعد عن الأسئلة المحرجة: الراتب والعمر، وعن الكلام السلبي.`,
  `Make the other person comfortable: give information, keep it easy and positive, avoid personal questions.`],
 life:[["I'm new here, too.",'أنا جديد هنا أيضاً.']],
 scene:{title:['يصلح ولا لا؟','OK or not?'],
  ctrl:[{k:'i',label:['الجملة','Sentence'],range:[1,4,1],init:1}],
  svg:s=>two(130,(SM[s.i-1][2]?ok(200,40):no(200,40))),
  ask:s=>({q:['يصلح؟','OK?'],opts:['Do',"Don't"],a:SM[s.i-1][0]}),
  out:s=>{const m=SM[s.i-1];return{t:S(`x:${m[0]}:|k:${m[1]}`),say:m[1],ar:'',why:m[2]?['سهل وإيجابي.','Easy and positive.']:['محرج أو سلبي.','Personal or negative.']}}},
 think:[['يريّح الثاني؟ ← قله. يحرجه؟ ← لا.','Comfortable? → say it. Awkward? → don\'t.']]};

const AP={info:["Where's the Head Office?","It's in Paris.",'There are branches all over Europe, too.','معلومة'],q:['How long have you been in Berlin?','Five years.','How about you?','سؤال'],c:['What do you think of the new office?',"It's great.",'The view is amazing.','تعليق']};
NH['answer plus']={
 say:[`الجواب القصير ${E("Yes, it is.")} يوقف الحديث. زد بعده شي واحد: معلومة، أو سؤال ${E('How about you?')}، أو تعليق. هذا اسمه ${E('answer plus')}.`,
  `Short answer + information, a question, or a comment.`],
 life:[["Five years. How about you?",'خمس سنوات. وأنت؟']],
 scene:{title:['زد على جوابك','Add to your answer'],
  ctrl:[{k:'p',label:['الإضافة','Plus'],opts:Object.keys(AP).map(k=>[k,AP[k][3]])}],
  svg:s=>two(130,bub(40,10,150,30,'answer',{fs:12})+bub(210,10,150,30,'+ '+AP[s.p][3],{fs:12})),
  ask:()=>({q:['الجواب القصير وحده:','A short answer alone:'],opts:['stops the talk','keeps the talk going'],a:'stops the talk'}),
  out:s=>{const a=AP[s.p];return{t:S(`q:${a[0]}|q:—|n:${a[1]}|x:${a[2]}`),ar:'',why:[`الجواب + ${a[3]}`,`answer + ${a[3]}`]}}},
 think:[['جاوبت؟ ← زد معلومة أو سؤال أو تعليق.','Answered? → add information, a question or a comment.']]};

const FS={for3:['for','three months','ثلاثة أشهر'],for5:['for','five years','خمس سنوات'],sinceM:['since','March','مارس'],since20:['since','2020','2020']};
NH['How long … ? مع for و since']={
 say:[`شي بدأ في الماضي وللحين مستمر ← المضارع التام، ونسأل: ${E('How long have you worked here?')} والجواب: طول المدة ← ${E('for')}، ونقطة البداية ← ${E('since')}.`,
  `Started in the past, still true: ${E('for')} + a period, ${E('since')} + a starting point.`],
 life:[["I've lived here since 2019.",'أسكن هنا منذ 2019.']],
 scene:{title:['مدة ولا بداية؟','Period or start?'],
  ctrl:[{k:'t',label:['الوقت','Time'],opts:Object.keys(FS).map(k=>[k,FS[k][1]])}],
  svg:s=>{const f=FS[s.t][0]==='for';return svg(110,tline(f?`<path d="M120 60 H320" stroke="${grn}" stroke-width="8"/>`+tx(220,40,'↔ '+FS[s.t][1],{fs:13,c:grn}):ci(120,60,12,red)+tx(120,40,FS[s.t][1],{fs:13,c:red})+`<path d="M120 60 H320" stroke="${red}" stroke-width="3" stroke-dasharray="6 4"/>`))},
  ask:s=>({q:['for ولا since؟','for or since?'],opts:['for','since'],a:FS[s.t][0]}),
  out:s=>{const f=FS[s.t];return{t:S(`a:I|k:'ve worked|q:here|x:${f[0]}|n:${f[1]}.`),say:`I've worked here ${f[0]} ${f[1]}.`,ar:'',why:f[0]==='for'?['طول المدة ← for','A period → for']:['نقطة البداية ← since','A starting point → since']}}},
 think:[['كم المدة؟ ← for. من متى؟ ← since.','How long? → for. From when? → since.']]};

const SR={really:["I've worked in six countries.",'Really?','حقاً؟'],too:['I love football.','Me, too.','وأنا كذلك.'],sure:['Can you help me?','Sure.','طبعاً.'],love:['Would you like to come to dinner?',"I'd love to!",'بكل سرور!']};
NH['عبارات قصيرة نرد بها']={
 say:[`كلمة قصيرة تبيّن إنك تسمع، فيكمل الحديث: ${E('Really?')} (مثير!)، ${E('Me, too.')} (وأنا كذلك)، ${E('Sure.')} (طبعاً)، ${E("I'd love to!")} (رد على دعوة).`,
  `Short replies show you are listening.`],
 life:[['I like coffee. — Me, too.','أحب القهوة. — وأنا كذلك.']],
 scene:{title:['رد قصير','A short reply'],
  ctrl:[{k:'r',label:['الموقف','Situation'],opts:Object.keys(SR).map(k=>[k,k])}],
  svg:s=>two(130,bub(30,8,200,32,SR[s.r][0].length>30?SR[s.r][0].slice(0,28)+'…':SR[s.r][0],{fs:11})),
  ask:s=>({q:['أنسب رد:','Best reply:'],opts:Object.values(SR).map(r=>r[1]),a:SR[s.r][1]}),
  out:s=>{const r=SR[s.r];return{t:S(`q:${r[0]}|q:—|x:${r[1]}`),ar:r[2],why:['رد قصير يكمل الحديث.','A short reply keeps it going.']}}},
 think:[['أبيّن إني أسمع ← كلمة قصيرة.','Show you listen → a short reply.']]};

const CP={left:['I','left','England','in 2002.','in + سنة'],study:['She','studied','at','Leeds University.','study at + مكان'],go:['He','went','to','the USA.','go to + بلد'],grad:['They','graduated','from','Harvard.','graduate from + جامعة']};
NH['حروف الجر في المسيرة']={
 say:[`حرف الجر يمشي مع الفعل ونوع المعلومة، فاحفظهم مع بعض: السنة ← ${E('in 2002')}، يدرس في ← ${E('study at')}، يروح لـ ← ${E('go to')}، يتخرج من ← ${E('graduate from')}.`,
  `${E('in')} + year · ${E('study at')} · ${E('go to')} · ${E('graduate from')}.`],
 life:[['I graduated from King Saud University.','تخرجت من جامعة الملك سعود.']],
 scene:{title:['المسيرة','The career'],
  ctrl:[{k:'v',label:['الفعل','Verb'],opts:Object.keys(CP).map(k=>[k,k])}],
  svg:s=>svg(110,tline(ci(140,60,10,red)+tx(140,40,{left:'2002',study:'Leeds',go:'USA',grad:'Harvard'}[s.v],{fs:13,c:red}))),
  ask:s=>{const c=CP[s.v];return s.v==='left'?{q:['مع السنة:','With a year:'],opts:['in','on','at'],a:'in'}:{q:['الحرف:','The preposition:'],opts:['at','to','from'],a:c[2]}},
  out:s=>{const c=CP[s.v];return s.v==='left'?{t:S(`a:I|k:left|n:England|x:in 2002.`),ar:'',why:[c[4],c[4]]}:{t:S(`a:${c[0]}|k:${c[1]}|x:${c[2]}|n:${c[3]}`),ar:'',why:[c[4],c[4]]}}},
 think:[['أحفظ الفعل مع حرفه.','Learn the verb with its preposition.']]};

const CS=[['First,','I studied','at Leeds University.','studied'],['Then,','I worked','for a bank in London.','worked'],['After that,','I went','to the USA.','went'],['Finally,','I came','back to Riyadh.','came']];
NH['قصة المسيرة بالماضي البسيط']={
 say:[`أحداث المسيرة خلصت ولها سنوات ← الماضي البسيط: المنتظم ${E('ed')} (و ${E('study → studied')})، والشاذ ينحفظ ${E('go → went')}. ونرتّب الأحداث: ${E('First · Then · After that · Finally')}.`,
  `Past simple + order words: ${E('First, Then, After that, Finally')}.`],
 life:[['After that, I moved to Jeddah.','بعد ذلك انتقلت إلى جدة.']],
 scene:{title:['قصة المسيرة','The career story'],
  ctrl:[{k:'i',label:['الحدث','Event'],range:[1,4,1],init:1}],
  svg:s=>{let b=bg(110)+ln(40,60,360,60,ink,3);for(let i=0;i<4;i++)b+=ci(70+i*85,60,i===s.i-1?12:7,i===s.i-1?red:i<s.i?blu:'#c9d1d6');return svg(110,b)},
  ask:s=>s.i===3?{q:['go في الماضي:','The past of go:'],opts:['went','goed'],a:'went'}:s.i===1?{q:['study في الماضي:','The past of study:'],opts:['studied','studyed'],a:'studied'}:null,
  out:s=>{const c=CS[s.i-1];return{t:S(`x:${c[0]}|k:${c[1]}|n:${c[2]}`),ar:'',why:['كلمة الترتيب، ثم الماضي.','Order word, then past.']}}},
 think:[['حدث خلص ← ماضي. وأرتّبه بـ First, Then …','Finished → past. Order with First, Then …']]};

const EX={pp:["I've","lived","abroad.",1],ps:['I','lived','abroad from 1998 to 2002.',0],ppq:['Have you','ever been','to the UK?',1]};
NH['المضارع التام للتجارب']={
 say:[`تجربة صارت في حياتك وما تذكر متى ← ${E('have / has')} + التصريف الثالث: ${E("I've lived abroad.")} إذا ذكرت الوقت بالضبط ← الماضي البسيط: ${E('I lived abroad from 1998 to 2002.')}`,
  `Experience, no time → present perfect. Exact time → past simple.`],
 life:[["I've visited Egypt.",'زرت مصر (من قبل).']],
 scene:{title:['تجربة ولا وقت؟','Experience or time?'],
  ctrl:[{k:'t',label:['الجملة','Sentence'],opts:[['pp',['بلا وقت','no time']],['ps',['مع وقت','with time']],['ppq',['سؤال','question']]]}],
  svg:s=>{const p=EX[s.t][3];return svg(110,tline(p?`<path d="M60 60 H320" stroke="${grn}" stroke-width="6" opacity=".4"/>`+tx(190,40,'some time in my life',{fs:12,c:grn}):`<path d="M110 60 H190" stroke="${blu}" stroke-width="8"/>`+tx(150,40,'1998 – 2002',{fs:12,c:blu})))},
  ask:s=>({q:['أي زمن؟','Which tense?'],opts:['present perfect','past simple'],a:EX[s.t][3]?'present perfect':'past simple'}),
  out:s=>{const e=EX[s.t];return{t:S(`a:${e[0]}|k:${e[1]}|n:${e[2]}`),say:`${e[0]} ${e[1]} ${e[2]}`.replace("I've lived","I've lived"),ar:'',why:e[3]?['تجربة بلا وقت ← have + التصريف الثالث','No time → present perfect']:['وقت محدد ← الماضي البسيط','Exact time → past simple']}}},
 think:[['ذكرت متى؟ ← ماضي. ما ذكرت؟ ← have + التصريف الثالث.','Said when? → past. No? → present perfect.']]};

const EN={ever:['Have you','ever','worked in Africa?','في أي وقت'],never:["I've",'never','worked in a city.','أبداً'],been:['She','has been','to Paris. (She is back.)','راحت ورجعت'],gone:['She','has gone','to Paris. (She is there now.)','راحت وللحين هناك']};
NH['ever و never، و been و gone']={
 say:[`${E('ever')} = في أي وقت، للسؤال. و ${E('never')} = أبداً، والفعل معها مثبت (ما نقول ${E("haven't never")}). و ${E('been')} = راح ورجع، و ${E('gone')} = راح وللحين هناك.`,
  `${E('ever')} in questions; ${E('never')} with a positive verb. ${E('been')} = went and came back; ${E('gone')} = still there.`],
 life:[["Have you ever been to Japan?",'هل سبق أن زرت اليابان؟']],
 scene:{title:['الكلمة','The word'],
  ctrl:[{k:'w',label:['الكلمة','Word'],opts:Object.keys(EN).map(k=>[k,k])}],
  svg:s=>{let b=bg(120)+grd(110)+rc(30,40,70,70,'#d8dee2',{st:ink,rx:4})+tx(65,30,'home',{fs:11})+rc(300,40,70,70,'#f3e3c3',{st:ink,rx:4})+tx(335,30,'Paris',{fs:11});if(s.w==='been')b+=man(65,80,'#b05a7a',0.8)+`<path d="M100 60 Q200 10 300 60" stroke="${grn}" stroke-width="3" fill="none"/>`+`<path d="M300 75 Q200 120 100 75" stroke="${grn}" stroke-width="3" fill="none"/>`;else if(s.w==='gone')b+=man(335,80,'#b05a7a',0.8)+ar(100,60,290,60,red,3);else b+=tx(200,70,s.w==='ever'?'?':'✗',{fs:30,c:red});return svg(120,b)},
  ask:s=>s.w==='been'||s.w==='gone'?{q:['هي الحين:','She is now:'],opts:['back home','in Paris'],a:s.w==='been'?'back home':'in Paris'}:{q:['تجي في:','It goes in:'],opts:['questions','positive verbs'],a:s.w==='ever'?'questions':'positive verbs'},
  out:s=>{const e=EN[s.w];return{t:S(`a:${e[0]}|x:${e[1]}|n:${e[2]}`),say:`${e[0]} ${e[1]} ${e[2].replace(/ \(.*\)/,'')}`,ar:'',why:[`${s.w} = ${e[3]}`,s.w]}}},
 think:[['رجع ← been. للحين هناك ← gone.','Came back → been. Still there → gone.']]};

/* ===== الوحدة 12 ===== */
const RC={rec:['I recommend','the steak.'],sug:['I suggest','the curry.'],sh:['You should try','the shrimp.'],good:['The chicken is really good','here.']};
NH['التوصية والرد']={
 say:[`التوصية اقتراح لطيف، مو أمر. فما نقول ${E('Eat the salad.')}، نقول ${E('I recommend …')} أو ${E('You should try …')} والضيف يقبل ${E("OK, I'll have that.")} أو يرفض بلطف.`,
  `A recommendation, not an order: ${E('I recommend … · You should try …')}`],
 life:[['You should try the kabsa here.','عليك أن تجرّب الكبسة هنا.']],
 scene:{title:['في المطعم','At the restaurant'],
  ctrl:[{k:'r',label:['العبارة','Phrase'],opts:Object.keys(RC).map(k=>[k,RC[k][0].split(' ').slice(0,2).join(' ')])}],
  svg:s=>svg(130,bg(130)+rc(110,80,180,12,'#a7744a',{rx:3})+man(80,104,blu,1)+man(320,104,grn,1)+`<ellipse cx="200" cy="76" rx="40" ry="10" fill="#fff" stroke="${ink}"/>`),
  ask:()=>({q:['أنسب:','Better:'],opts:['I recommend the steak.','Eat the steak.'],a:'I recommend the steak.'}),
  out:s=>{const r=RC[s.r];return{t:S(`x:${r[0]}|n:${r[1]}|q:—|k:OK, I'll have that.`),ar:'',why:['اقتراح لطيف، مو أمر.','A suggestion, not an order.']}}},
 think:[['أوصي ← I recommend / You should try، مو أمر.','Recommend → I recommend, not an order.']]};

const CK={boil:['boiled','in water','مسلوق'],steam:['steamed','over water','على البخار'],fry:['fried','in oil','مقلي'],grill:['grilled','over fire','مشوي']};
NH['وصف الطبق: الطبخ والطعم والمبني للمجهول']={
 say:[`نوصف الطبق بثلاثة أسئلة: من وش؟ كيف انطبخ؟ وش طعمه؟ وفي الطبخ يهمنا الأكل مو الطباخ، فنستعمل المبني للمجهول:${FM('is / are','+','التصريف الثالث')}${E('The fish is grilled.')}`,
  `Food matters more than the cook → passive: ${E('The fish is grilled.')}`],
 life:[['The chicken is grilled with lemon.','الدجاج مشوي بالليمون.']],
 scene:{title:['كيف انطبخ؟','How is it cooked?'],
  ctrl:[{k:'c',label:['الطريقة','Method'],opts:Object.keys(CK).map(k=>[k,CK[k][0]])},{k:'n',label:['الطبق','Dish'],opts:[['fish','fish'],['veg','vegetables']]}],
  svg:s=>{let b=bg(140);if(s.c==='boil'||s.c==='fry')b+=rc(130,70,140,50,'#7d878e',{rx:6})+rc(134,74,132,20,s.c==='boil'?'#9fd0f0':'#f1c56a',{rx:4});if(s.c==='steam')b+=rc(130,90,140,40,'#7d878e',{rx:6})+rc(140,70,120,20,'#c9d1d6',{rx:4})+[170,200,230].map(x=>`<path d="M${x} 66 q-6 -10 0 -20 q6 -10 0 -20" stroke="#aab" fill="none" stroke-width="2"/>`).join('');if(s.c==='grill')b+=[150,180,210,240].map(x=>ln(x,90,x+20,90,'#33424c',4)).join('')+[160,200,240].map(x=>`<path d="M${x} 126 q-10 -16 0 -26 q10 10 0 26" fill="${red}"/>`).join('');b+=s.n==='fish'?`<ellipse cx="200" cy="${s.c==='steam'?62:80}" rx="34" ry="12" fill="#e7a76b"/>`:[180,200,220].map(x=>ci(x,s.c==='steam'?62:80,8,grn)).join('');return svg(140,b)},
  ask:s=>({q:['is ولا are؟','is or are?'],opts:['is','are'],a:s.n==='fish'?'is':'are'}),
  out:s=>{const c=CK[s.c],one=s.n==='fish';return{t:S(`a:The ${one?'fish':'vegetables'}|x:${one?'is':'are'}|k:${c[0]}|n:${c[1]}.`),ar:'',why:['is / are + التصريف الثالث','is / are + past participle']}}},
 think:[['يهمني الأكل مو الطباخ ← is / are + التصريف الثالث.','The food matters → is / are + past participle.']]};

const INV={yes:["Yes, I'd love to.",'What time shall we meet?','القبول ثم سؤال'],no:["I'm sorry, I can't.","I'm busy on Friday.",'الرفض ثم سبب']};
NH['الدعوة والقبول والرفض']={
 say:[`الدعوة المؤدبة:${FM('Would you like to','+','الفعل كما هو')}والرد قسمين: قبول ← ثم سؤال (الوقت، المكان). أو رفض ← ثم سبب. الرفض بدون سبب يزعّل.`,
  `Accept + a question, or refuse + a reason.`],
 life:[['Would you like to have dinner with us?','هل تود تناول العشاء معنا؟']],
 scene:{title:['دعوة','An invitation'],
  ctrl:[{k:'r',label:['الرد','Reply'],opts:[['yes',['قبول','accept']],['no',['رفض','refuse']]]}],
  svg:s=>two(130,bub(30,8,170,30,'Would you like to …?',{fs:11})+(s.r==='yes'?ok(330,30):no(330,30))),
  ask:s=>({q:['بعده:','After it:'],opts:['a question','a reason'],a:s.r==='yes'?'a question':'a reason'}),
  out:s=>{const v=INV[s.r];return{t:S(`q:Would you like to go to dinner?|q:—|x:${v[0]}|n:${v[1]}`),ar:'',why:[v[2],v[2]]}}},
 think:[['قبلت ← اسأل. رفضت ← قل السبب.','Accept → ask. Refuse → give a reason.']]};

const WR=[['Dear Lucia,','Dear Ms Irvine,','التحية'],['Thanks for your invitation.','Thank you for your kind invitation.','الشكر'],["I'm sorry, but I can't come.",'I am sorry, but I cannot attend.','الرد'],['Have a great time!','I hope the event is a great success.','كلمة طيبة'],['Best wishes, Judy','Yours sincerely, Judy Brown','الختام']];
NH['الرد المكتوب: رسمي وغير رسمي']={
 say:[`الرد المكتوب نفس الأجزاء دايماً: تحية ← شكر ← الرد مع السبب ← كلمة طيبة ← ختام. اللي يتغيّر الكلمات: لصديق بسيطة ومختصرة (${E("can't")})، ولشركة رسمية وكاملة (${E('cannot')}).`,
  `Same parts; the words change: friend → short forms; company → full and formal.`],
 life:[['Thank you for your kind invitation.','شكراً على دعوتكم الكريمة.']],
 scene:{title:['لصديق ولا لشركة؟','Friend or company?'],
  ctrl:[{k:'i',label:['الجزء','Part'],range:[1,5,1],init:1},{k:'f',label:['لـ','To'],opts:[['inf',['صديق','friend']],['for',['شركة','company']]]}],
  svg:s=>{let b=bg(150)+rc(90,10,220,130,'#fff',{st:ink,rx:6});WR.forEach((w,i)=>{b+=rc(106,22+i*22,188,14,i===s.i-1?(s.f==='inf'?'#dcf1e3':'#dceaf6'):'#eef1f3',{rx:3})});return svg(150,b+tx(350,30,s.f==='inf'?'☺':'🏢',{fs:22}))},
  ask:s=>({q:['أنسب:','Better:'],opts:[WR[s.i-1][0],WR[s.i-1][1]],a:WR[s.i-1][s.f==='inf'?0:1]}),
  out:s=>{const w=WR[s.i-1];return{t:S(`k:${w[s.f==='inf'?0:1]}`),ar:w[2],why:s.f==='inf'?['لصديق ← بسيط ومختصر','Friend → simple']:['لشركة ← رسمي وكامل','Company → formal']}}},
 think:[['مين بيقرأ؟ صديق ← بسيط. شركة ← رسمي.','Who reads it? Friend → simple. Company → formal.']]};

/* ===== الوحدة 13 ===== */
const SQ=[['First,','park your car.'],['Then,','go to the ticket machine.'],['Next,','pay for your ticket.'],['Finally,','put your ticket in the car window.']];
NH['ظروف الترتيب']={
 say:[`التعليمات أسهل لما ترتّبها بكلمات: أول ← ${E('First,')}، الوسط ← ${E('Then, · Next, · After that,')}، الأخير ← ${E('Finally,')}. وبعد الكلمة فاصلة.`,
  `${E('First, … Then, … Next, … Finally, …')} with a comma.`],
 life:[['First, wash your hands. Then, eat.','أولاً اغسل يديك، ثم كُل.']],
 scene:{title:['موقف السيارات','The car park'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,4,1],init:1}],
  svg:s=>{let b=bg(110);for(let i=0;i<4;i++)b+=rc(30+i*92,30,80,44,i===s.i-1?red:i<s.i?'#dceaf6':'#fff',{st:ink,rx:8})+tx(70+i*92,57,String(i+1),{fs:16,c:i===s.i-1?'#fff':ink});return svg(110,b)},
  ask:s=>({q:['الكلمة:','The word:'],opts:['First,','Then,','Finally,'],a:s.i===1?'First,':s.i===4?'Finally,':'Then,'}),
  out:s=>{const q=SQ[s.i-1];return{t:S(`x:${q[0]}|k:${q[1]}`),ar:'',why:['كلمة الترتيب ثم فاصلة.','Order word, then a comma.']}}},
 think:[['أول ← First. آخر ← Finally. بينهم ← Then / Next.','First → First. Last → Finally. Between → Then / Next.']]};

const IM={p:['Press','the green button.','اضغط الزر الأخضر.'],n:["Don't",'leave the lid open.','لا تترك الغطاء مفتوحاً.'],pl:['Please','listen to the safety instructions.','أرجو الاستماع لتعليمات السلامة.'],sign:['Do not','enter.','ممنوع الدخول.']};
NH['صيغة الأمر']={
 say:[`الأمر في التعليمات: الفعل كما هو بدون فاعل ${E('Press the green button.')} والنفي ${E("Don't")}، وفي اللوحات الرسمية ${E('Do not')}. وللأدب ${E('Please')}.`,
  `Verb, no subject. ${E("Don't")}; on signs ${E('Do not')}; ${E('Please')} for politeness.`],
 life:[["Don't forget your keys.",'لا تنسَ مفاتيحك.']],
 scene:{title:['الآلة','The machine'],
  ctrl:[{k:'f',label:['النوع','Type'],opts:[['p',['أمر','do']],['n',['نفي','don\'t']],['pl',['مؤدب','polite']],['sign',['لوحة','sign']]]}],
  svg:s=>{let b=bg(130);if(s.f==='sign')b+=ci(200,65,44,red)+rc(170,58,60,14,'#fff',{rx:2});else b+=rc(140,20,120,100,'#7d878e',{rx:8})+ci(200,85,14,s.f==='n'?'#9aa3aa':grn)+rc(150,26,100,26,s.f==='n'?'#c9d1d6':'#5f6a71',{rx:3});return svg(130,b)},
  ask:s=>s.f==='n'?{q:['النفي:','Negative:'],opts:["Don't",'Not','No'],a:"Don't"}:{q:[s.f==='pl'?'أول كلمة بعد Please:':'أول كلمة:','First word:'],opts:['the verb','You'],a:'the verb'},
  out:s=>{const i=IM[s.f];return{t:S(`x:${i[0]}|k:${i[1]}`),ar:i[2],why:['الفعل بدون فاعل.','The verb, no subject.']}}},
 think:[['تعليمة ← الفعل. ممنوع ← Don\'t.',"Instruction → the verb. Not allowed → Don't."]]};

const AD={sh:['I think you should','call the engineer.'],shn:["I don't think you should",'try to mend it yourself.'],why:["Why don't you",'use the one in the next office?']};
NH['النصيحة']={
 say:[`ثلاث صيغ للنصيحة، وبعدها كلها الفعل كما هو: ${E('I think you should …')}، ولا تسويه ← النفي يروح على ${E('think')}: ${E("I don't think you should …")}، واقتراح بسؤال ${E("Why don't you …?")}`,
  `${E('I think you should …')} · ${E("I don't think you should …")} · ${E("Why don't you …?")}`],
 life:[["Why don't you take a break?",'لماذا لا تأخذ استراحة؟']],
 scene:{title:['الطابعة خربانة','The printer is broken'],
  ctrl:[{k:'a',label:['النصيحة','Advice'],opts:[['sh',['سوّه','do']],['shn',['لا تسوّه','don\'t']],['why',['اقتراح','suggest']]]}],
  svg:s=>svg(130,bg(130)+rc(150,50,100,60,'#c9d1d6',{st:ink,rx:6})+rc(165,36,70,16,'#fff',{st:ink})+tx(200,90,'✗',{fs:24,c:red})+man(70,104,blu,1)+man(330,104,grn,1)),
  ask:s=>s.a==='shn'?{q:['النفي يروح على:','not goes with:'],opts:['think','should'],a:'think'}:null,
  out:s=>{const a=AD[s.a];return{t:S(`x:${a[0]}|k:${a[1]}`),ar:'',why:['بعدها الفعل كما هو.','Then the verb.']}}},
 think:[["لا تسويه ← I don't think you should.","Don't do it → I don't think you should."]]};

const RS={charge:['She','is in charge of','the clerical staff.','تدير'],resp:['She','is responsible for','ordering office supplies.','مسؤولة عن'],look:['He','looks after','all the PCs.','يعتني بـ'],sup:['He','supervises','the stock levels.','يشرف على']};
NH['مسؤوليات الموظفين']={
 say:[`تبي تعرف مين تكلم؟ اعرف شغلة كل موظف. والعبارات ثابتة: ${E('in charge of')} (يدير)، ${E('responsible for')} (مسؤول عن، وبعدها ${E('ing')})، ${E('looks after')} (يعتني بـ)، ${E('supervises')} (يشرف على).`,
  `${E('in charge of · responsible for + ing · looks after · supervises')}`],
 life:[["I'm responsible for the team's schedule.",'أنا مسؤول عن جدول الفريق.']],
 scene:{title:['مين المسؤول؟',"Who's responsible?"],
  ctrl:[{k:'r',label:['العبارة','Phrase'],opts:Object.keys(RS).map(k=>[k,RS[k][1]])}],
  svg:s=>svg(130,bg(130)+man(90,104,RS[s.r][0]==='She'?'#b05a7a':blu,1)+rc(170,30,200,70,'#fff',{st:ink,rx:6})+tx(270,70,RS[s.r][3],{fs:16,c:red})),
  ask:s=>s.r==='resp'?{q:['بعد responsible for:','After responsible for:'],opts:['ordering','order'],a:'ordering'}:null,
  out:s=>{const r=RS[s.r];return{t:S(`a:${r[0]}|x:${r[1]}|n:${r[2]}`),ar:'',why:[`${r[1]} = ${r[3]}`,r[1]]}}},
 think:[['أعرف شغلته ← أعرف مين أكلم.','Know the job → know who to call.']]};

/* ===== الوحدة 14 ===== */
const RQ={can:['Can you','make some copies for me, please?',1],could:['Could you','make some copies for me, please?',2],mind:['Would you mind','making some copies for me, please?',3]};
NH['صيغ الطلب']={
 say:[`ثلاث صيغ من الأقل أدب للأكثر: ${E('Can you')} ← ${E('Could you')} ← ${E('Would you mind')}. وانتبه: بعد ${E('Would you mind')} الفعل مع ${E('ing')}: ${E('Would you mind making …?')}`,
  `${E('Can you')} → ${E('Could you')} → ${E('Would you mind')} + ing.`],
 life:[['Could you close the door, please?','هل تستطيع إغلاق الباب لو سمحت؟']],
 scene:{title:['كم الأدب؟','How polite?'],
  ctrl:[{k:'r',label:['الصيغة','Form'],opts:Object.keys(RQ).map(k=>[k,RQ[k][0]])}],
  svg:s=>{let b=bg(110);for(let i=0;i<3;i++)b+=rc(80+i*90,80-(i+1)*18,70,(i+1)*18,i<RQ[s.r][2]?grn:'#d8dee2',{rx:3});return svg(110,b+tx(200,100,'polite →',{fs:12,c:gry}))},
  ask:s=>s.r==='mind'?{q:['بعد Would you mind:','After Would you mind:'],opts:['making','make'],a:'making'}:{q:['بعدها:','After it:'],opts:['make','making'],a:'make'},
  out:s=>{const r=RQ[s.r];return{t:S(`x:${r[0]}|k:${r[1]}`),ar:'',why:s.r==='mind'?['Would you mind ← ing','Would you mind → ing']:['الفعل كما هو','The verb as it is']}}},
 think:[['Would you mind ← ing. الباقي ← الفعل كما هو.','Would you mind → ing. Others → the verb.']]};

const RR={yes:['Sure. No problem.','نعم'],later:["OK, but I've got a meeting now. I'll do it after that.",'لاحقاً'],no:["Sorry, I can't. My computer's crashed.",'لا مع سبب'],mind:['Not at all.','نعم (لا يزعجني)']};
NH['الرد على الطلب']={
 say:[`ثلاث ردود: نعم، أو نعم بس بعدين، أو لا مع سبب. وانتبه للفخ: ${E('Would you mind …?')} معناها «يزعجك؟»، فالموافقة ${E('Not at all.')} (يعني ما يزعجني).`,
  `Yes, later, or no + reason. Would you mind …? → yes = ${E('Not at all.')}`],
 life:[["Would you mind waiting? — Not at all.",'هل تمانع الانتظار؟ — أبداً.']],
 scene:{title:['الرد','The reply'],
  ctrl:[{k:'r',label:['الرد','Reply'],opts:Object.keys(RR).map(k=>[k,RR[k][1]])}],
  svg:s=>two(130,s.r==='no'?no(200,40):s.r==='later'?tx(200,46,'⏱',{fs:26}):ok(200,40)),
  ask:s=>s.r==='mind'?{q:['Would you mind…? والموافقة:','Would you mind…? Yes:'],opts:['Not at all.','Yes, I mind.'],a:'Not at all.'}:null,
  out:s=>{const r=RR[s.r];return{t:S(`k:${r[0]}`),ar:r[1],why:{yes:['نعم بوضوح.','A clear yes.'],later:['نعم، بس بعدين.','Yes, but later.'],no:['لا، ومعها السبب.','No, with a reason.'],mind:['Not at all = ما يزعجني','Not at all = OK']}[s.r]}}},
 think:[['Would you mind? ← Not at all = موافق.','Would you mind? → Not at all = yes.']]};

const SG={could:['We could','build','a new website.',0],lets:["Let's",'build','a new website.',0],why:["Why don't we",'build','a new website?',0],how:['How about','building','a new website?',1],what:['What about','building','a new website?',1]};
NH['صيغ الاقتراح']={
 say:[`خمس صيغ للاقتراح. ثلاث بعدها الفعل كما هو: ${E("We could · Let's · Why don't we")}، واثنتين بعدها ${E('ing')}: ${E('How about · What about')}.`,
  `${E("We could / Let's / Why don't we")} + verb. ${E('How about / What about')} + ing.`],
 life:[["Let's go to the beach.",'لنذهب إلى الشاطئ.'],['How about going to the park?','ما رأيك أن نذهب إلى الحديقة؟']],
 scene:{title:['اقترح','Suggest'],
  ctrl:[{k:'s',label:['الصيغة','Form'],opts:Object.keys(SG).map(k=>[k,SG[k][0]])}],
  svg:s=>svg(120,bg(120)+rc(120,20,160,80,'#fff',{st:ink,rx:6})+tx(200,64,'💡',{fs:30})+tx(340,64,SG[s.s][3]?'+ ing':'verb',{fs:16,c:SG[s.s][3]?red:blu})),
  ask:s=>({q:['بعدها:','After it:'],opts:['build','building'],a:SG[s.s][1]}),
  out:s=>{const g=SG[s.s];return{t:S(`x:${g[0]}|k:${g[1]}|n:${g[2]}`),ar:'',why:g[3]?['about ← ing','about → ing']:['الفعل كما هو','The verb as it is']}}},
 think:[['How / What about ← ing. الباقي ← الفعل.','How / What about → ing. Others → the verb.']]};

const AG={agree:['I agree.','',1],good:["That's a good idea.",'',1],but:["Yes, but","we don't have enough money.",0],ibut:['I agree, but','prizes are expensive.',0]};
NH['الموافقة والاعتراض بأدب']={
 say:[`توافق؟ قلها واضحة ${E('I agree.')} تعترض؟ لا تقول ${E('No.')} على طول، ابدأ بموافقة جزئية ثم ${E('but')} والسبب: ${E("Yes, but we don't have enough money.")}`,
  `Agree clearly. Disagree politely: partial agreement + but + reason.`],
 life:[["That's a good idea, but it's too late.",'فكرة جيدة، لكن الوقت متأخر.']],
 scene:{title:['موافق ولا لا؟','Agree or not?'],
  ctrl:[{k:'a',label:['الرد','Reply'],opts:Object.keys(AG).map(k=>[k,AG[k][0]])}],
  svg:s=>two(130,AG[s.a][2]?ok(200,40):tx(200,48,'½',{fs:30,c:yel})),
  ask:s=>AG[s.a][2]?null:{q:['بعد but:','After but:'],opts:['a reason','nothing'],a:'a reason'},
  out:s=>{const a=AG[s.a];return{t:S(`x:${a[0]}${a[1]?'|n:'+a[1]:''}`),ar:'',why:a[2]?['موافقة واضحة.','Clear agreement.']:['موافقة جزئية، but، السبب.','Partial agreement, but, reason.']}}},
 think:[['أعترض ← Yes, but + السبب.','Disagree → Yes, but + reason.']]};

/* ===== الوحدة 15 ===== */
const AI=[['Host',"Hello, Mr Smith. I'm Susie from Mirage.",'المضيف يعرّف بنفسه.'],['Visitor','Please call me David.','الزائر يطلب اسمه الأول.'],['Host','Can I help you with your bags?','عرض المساعدة.'],['Visitor',"Thank you. That's very kind.",'قبول المساعدة.'],['Host','Did you have a good flight?','سؤال عن الرحلة.']];
NH['المضيف والزائر في المطار']={
 say:[`في المطار للمضيف عبارات ثابتة: يعرّف بنفسه، يعرض المساعدة ${E('Can I help you with your bags?')}، يسأل عن الرحلة. والزائر يرد بأدب: ${E("Thank you. That's very kind.")}`,
  `Host: introduce, offer help, ask about the flight. Visitor: polite replies.`],
 life:[["That's very kind of you.",'هذا لطف منك.']],
 scene:{title:['في المطار','At the airport'],
  ctrl:[{k:'i',label:['الخطوة','Step'],range:[1,5,1],init:1}],
  svg:s=>{const h=AI[s.i-1][0]==='Host';return svg(140,bg(140)+grd(130)+man(110,90,'#b05a7a',1)+man(290,90,blu,1)+rc(310,96,26,30,'#5f6a71',{rx:4})+tx(h?110:290,20,h?'host':'visitor',{fs:12,c:red}))},
  ask:s=>s.i===4?{q:['قبول بأدب:','Polite yes:'],opts:["Thank you. That's very kind.",'Yes, take them.'],a:"Thank you. That's very kind."}:null,
  out:s=>{const a=AI[s.i-1];return{t:S(`q:${a[0]}:|k:${a[1]}`),say:a[1],ar:a[2],why:['عبارات ثابتة.','Fixed phrases.']}}},
 think:[['أعرض المساعدة ← Can I help you with …?','Offer help → Can I help you with …?']]};

const SP={ps:['Do you','travel','abroad a lot?','present simple','عادة'],ps2:['What does Sheila','do?','— She works in Administration.','present simple','عمل'],past:['Did you','have','a good flight?','past simple','حدث انتهى']};
NH['المضارع البسيط والماضي البسيط']={
 say:[`اللي تسويه عادة وشغلك ← المضارع البسيط (${E('do / does')}). حدث خلص في وقت معروف (الرحلة اللي جيت فيها) ← الماضي البسيط (${E('did')}).`,
  `Habits and jobs → present simple. A finished event → past simple.`],
 life:[['Did you sleep well?','هل نمت جيداً؟']],
 scene:{title:['عادة ولا حدث؟','Habit or event?'],
  ctrl:[{k:'t',label:['السؤال','Question'],opts:[['ps',['عادة','habit']],['ps2',['عمل','job']],['past',['رحلة اليوم','today\'s flight']]]}],
  svg:s=>{let b=bg(110)+ln(40,60,360,60,ink,3)+ci(320,60,8,ink)+tx(320,90,'now',{fs:12});if(s.t==='past')b+=ci(240,60,12,blu)+tx(240,36,'✈',{fs:18});else for(let i=0;i<5;i++)b+=ci(60+i*60,60,8,grn);return svg(110,b)},
  ask:s=>({q:['أي زمن؟','Which tense?'],opts:['present simple','past simple'],a:SP[s.t][3]}),
  out:s=>{const p=SP[s.t];return{t:S(`x:${p[0]}|k:${p[1]}|n:${p[2]}`),ar:'',why:[`${p[4]} ← ${p[3]}`,p[3]]}}},
 think:[['عادة ← do / does. خلص ← did.','Habit → do / does. Finished → did.']]};

const GO={first:['Nice to meet you.','Nice to meet you, too.'],again:['Nice to see you again.','Nice to see you, too.'],seat:['Please, have a seat.','Thank you.'],drink:['Would you like something to drink?','A coffee, please.']};
NH['التحية والضيافة في المكتب']={
 say:[`أول لقاء ← ${E('meet')}، مرة ثانية ← ${E('see … again')}. وبعد التحية تضيّف ضيفك: تعرض عليه يجلس ${E('Please, have a seat.')} ومشروب ${E('Would you like something to drink?')}`,
  `Greet (meet / see again), then offer a seat and a drink.`],
 life:[['Would you like some tea?','هل تود بعض الشاي؟']],
 scene:{title:['في المكتب','In the office'],
  ctrl:[{k:'g',label:['الموقف','Moment'],opts:[['first',['أول لقاء','first time']],['again',['مرة ثانية','again']],['seat',['المقعد','seat']],['drink',['مشروب','drink']]]}],
  svg:s=>two(130,(s.g==='seat'?rc(180,70,40,30,'#a7744a',{rx:4}):s.g==='drink'?rc(190,70,20,24,'#fff',{st:ink,rx:3}):'')),
  ask:s=>s.g==='first'||s.g==='again'?{q:['meet ولا see؟','meet or see?'],opts:['meet','see'],a:s.g==='first'?'meet':'see'}:null,
  out:s=>{const g=GO[s.g];return{t:S(`x:${g[0]}|q:—|n:${g[1]}`),ar:'',why:['تحية، ثم ضيافة.','Greeting, then hospitality.']}}},
 think:[['أول مرة ← meet. مرة ثانية ← see again.','First → meet. Again → see again.']]};

NH['المضارع التام ثم الماضي البسيط']={
 say:[`الحديث يبدأ غالباً بسؤال تجربة بدون وقت ← ${E('Have you been here before?')} وإذا الجواب نعم، نكمل بالتفاصيل ومتى ← الماضي البسيط: ${E('Yes, I came here last year.')}`,
  `Start with a present perfect question; continue with past simple details.`],
 life:[["Have you met Bruce? — Yes, I met him in 2002.",'هل قابلت بروس؟ — نعم، قابلته عام 2002.']],
 scene:{title:['السؤال ثم التفاصيل','Question, then details'],
  ctrl:[{k:'s',label:['الجزء','Part'],opts:[['q',['السؤال','question']],['a',['التفاصيل','details']]]}],
  svg:s=>svg(110,bg(110)+ln(40,60,360,60,ink,3)+ci(320,60,8,ink)+tx(320,90,'now',{fs:12})+(s.s==='q'?`<path d="M60 60 H320" stroke="${grn}" stroke-width="6" opacity=".4"/>`:ci(180,60,12,blu)+tx(180,36,'last year',{fs:12,c:blu}))),
  ask:s=>({q:['أي زمن؟','Which tense?'],opts:['present perfect','past simple'],a:s.s==='q'?'present perfect':'past simple'}),
  out:s=>s.s==='q'?{t:S('x:Have you|k:been|n:here before?'),ar:'هل جئت هنا من قبل؟',why:['تجربة بلا وقت','Experience, no time']}:{t:S('q:Yes,|a:I|k:came|n:here|x:last year.'),ar:'نعم، جئت العام الماضي.',why:['وقت محدد ← ماضي','A time → past']}},
 think:[['السؤال ← Have you …? التفاصيل ← الماضي.','Question → Have you …? Details → past.']]};

/* ===== الوحدة 16 ===== */
const WF={design:['design','designer','er'],import:['import','importer','er'],manuf:['manufacture','manufacturer','r'],act:['act','actor','or']};
NH['من المصمم إلى الزبون: تكوين الكلمات']={
 say:[`من الفعل نطلع اسم الشخص اللي يسويه: نزيد ${E('er')} (${E('design → designer')})، وإذا آخره ${E('e')} نزيد ${E('r')} بس، وبعضها ${E('or')} (${E('act → actor')}).`,
  `Verb + ${E('er / or')} = the person: ${E('design → designer · act → actor')}.`],
 life:[['My uncle is a teacher.','عمي معلم.']],
 scene:{title:['الفعل والشخص','Verb and person'],
  ctrl:[{k:'w',label:['الفعل','Verb'],opts:Object.keys(WF).map(k=>[k,WF[k][0]])}],
  svg:s=>svg(110,bg(110)+rc(40,34,130,40,'#fff3c7',{st:ink,rx:8})+tx(105,60,WF[s.w][0],{fs:14})+ar(180,54,220,54,ink,3)+rc(230,34,140,40,'#dceaf6',{st:ink,rx:8})+tx(300,60,WF[s.w][1],{fs:14,c:blu})),
  ask:s=>({q:['الشخص:','The person:'],opts:[WF[s.w][1],WF[s.w][0]+(WF[s.w][2]==='or'?'er':'or')],a:WF[s.w][1]}),
  out:s=>{const w=WF[s.w];return{t:S(`a:I'm a|n:${w[1]}.|q:I|k:${w[0]}|q:things.`),say:`I'm a${/^[aeiou]/.test(w[1])?'n':''} ${w[1]}.`,ar:'',why:[`${w[0]} + ${w[2]}`,`${w[0]} + ${w[2]}`]}}},
 think:[['الفعل + er / or = الشخص.','Verb + er / or = the person.']]};

const CN={travel:['travel','agent','وكيل سفر'],law:['law','firm','مكتب محاماة'],ins:['insurance','company','شركة تأمين'],car:['car','manufacturer','مصنع سيارات']};
NH['الأسماء المركبة لأنواع الشركات']={
 say:[`نحط اسمين مع بعض: الأول يقول المجال، والثاني نوع الشغل: ${E('travel agent · law firm · car manufacturer')}. والأول يبقى مفرد غالباً: ${E('car manufacturer')} مو ${E('cars manufacturer')}.`,
  `First noun = field (singular), second = type: ${E('travel agent · car manufacturer')}.`],
 life:[['He works for an insurance company.','يعمل في شركة تأمين.']],
 scene:{title:['ركّب الاسم','Build the name'],
  ctrl:[{k:'c',label:['الشركة','Company'],opts:Object.keys(CN).map(k=>[k,CN[k][0]+' '+CN[k][1]])}],
  svg:s=>svg(110,bg(110)+rc(60,34,130,40,'#fff3c7',{st:ink,rx:8})+tx(125,60,CN[s.c][0],{fs:14})+tx(200,60,'+',{fs:20})+rc(210,34,130,40,'#dceaf6',{st:ink,rx:8})+tx(275,60,CN[s.c][1],{fs:14,c:blu})+tx(125,94,'field',{fs:11,c:gry})+tx(275,94,'type',{fs:11,c:gry})),
  ask:s=>s.c==='car'?{q:['الأول:','The first noun:'],opts:['car','cars'],a:'car'}:null,
  out:s=>{const c=CN[s.c];return{t:S(`q:It's a${s.c==='ins'?'n':''}|x:${c[0]}|n:${c[1]}.`),ar:c[2],why:['المجال + نوع الشغل','Field + type']}}},
 think:[['المجال أول (مفرد)، ثم نوع الشركة.','Field first (singular), then the type.']]};

const PV={pr:['Our products','are','manufactured','in Asia.','are'],ps:['The company','was','started','in 1925.','was'],ps2:['Two new offices','were','opened','in 2003.','were'],pr2:['Expert advice','is','offered','to our clients.','is']};
NH['المبني للمجهول في المضارع والماضي']={
 say:[`ما نعرف مين سوّاها أو ما يهمنا ← المبني للمجهول:${FM('be','+','التصريف الثالث')}الحين ← ${E('am / is / are')}، والماضي ← ${E('was / were')}. والمفرد والجمع يحددون الشكل.`,
  `be + past participle: now ${E('is / are')}, past ${E('was / were')}.`],
 life:[['This mosque was built in 1950.','بُني هذا المسجد عام 1950.']],
 scene:{title:['الحين ولا الماضي؟','Now or past?'],
  ctrl:[{k:'p',label:['الجملة','Sentence'],opts:[['pr',['جمع، الحين','plural, now']],['pr2',['مفرد، الحين','singular, now']],['ps',['مفرد، ماضي','singular, past']],['ps2',['جمع، ماضي','plural, past']]]}],
  svg:s=>{const past=s.p.startsWith('ps');return svg(110,bg(110)+ln(40,60,360,60,ink,3)+ci(past?130:320,60,12,past?blu:red)+tx(past?130:320,36,past?'past':'now',{fs:13,c:past?blu:red})+tx(200,96,(s.p==='pr'||s.p==='ps2')?'many':'one',{fs:13,c:gry}))},
  ask:s=>({q:['be:','be:'],opts:['is','are','was','were'],a:PV[s.p][4]}),
  out:s=>{const p=PV[s.p];return{t:S(`n:${p[0]}|x:${p[1]}|k:${p[2]}|q:${p[3]}`),ar:'',why:[`${p[1]} + التصريف الثالث`,`${p[1]} + past participle`]}}},
 think:[['الحين ← is / are. الماضي ← was / were.','Now → is / are. Past → was / were.']]};

const PQ={when:['The offices were opened in 2003.','When','were','the offices opened?'],where:['The products are manufactured in Asia.','Where','are','the products manufactured?'],many:['46 million burgers are sold every day.','How many burgers','are','sold every day?']};
NH['السؤال بالمبني للمجهول']={
 say:[`تسأل عن آخر الجملة (الوقت أو المكان)؟ حط كلمة السؤال، ثم قدّم ${E('be')} قبل الموضوع: ${E('When were the offices opened?')} وإذا تسأل عن أول الجملة (${E('How many burgers')}) يبقى الترتيب كما هو.`,
  `About the end → question word + be + subject. About the subject → same order.`],
 life:[['Where was this phone made?','أين صُنع هذا الجوال؟']],
 scene:{title:['اسأل عن الجزء','Ask about a part'],
  ctrl:[{k:'q',label:['عن','About'],opts:[['when','when'],['where','where'],['many','how many']]}],
  svg:s=>svg(110,bg(110)+rc(20,30,360,40,'#fff',{st:ink,rx:8})+tx(200,56,PQ[s.q][0].length>40?PQ[s.q][0].slice(0,38)+'…':PQ[s.q][0],{fs:12})),
  ask:s=>s.q==='many'?{q:['الترتيب:','Order:'],opts:['same order','be first'],a:'same order'}:{q:['بعد كلمة السؤال:','After the question word:'],opts:['be','the subject'],a:'be'},
  out:s=>{const p=PQ[s.q];return s.q==='many'?{t:S(`x:${p[1]}|k:${p[2]} ${p[3]}`),say:`${p[1]} ${p[2]} ${p[3]}`,ar:'',why:['نسأل عن أول الجملة ← نفس الترتيب','Asking about the subject → same order']}:{t:S(`x:${p[1]}|k:${p[2]}|n:${p[3]}`),ar:'',why:['كلمة السؤال، ثم be، ثم الموضوع','Question word, be, subject']}}},
 think:[['أسأل عن الوقت أو المكان ← be قبل الموضوع.','Time or place → be before the subject.']]};

const JQ=[['What do you do?',"I'm a production manager.",'ما وظيفتك؟'],['Who do you work for?','I work for Espinosa in the production division.','لمن تعمل؟'],['What exactly do you do?',"I'm responsible for producing batteries.",'ماذا تعمل بالضبط؟']];
NH['الوظيفة ومكان العمل والمسؤولية']={
 say:[`ثلاث أسئلة ثابتة عن الشغل: وش وظيفتك؟ ← ${E('What do you do?')} لمين تشتغل؟ ← ${E('Who do you work for?')} وش تسوي بالضبط؟ ← ${E('What exactly do you do?')} وجوابها بـ ${E('responsible for')} + ${E('ing')}.`,
  `Job, company, responsibilities.`],
 life:[["I'm in charge of the sales team.",'أنا مسؤول عن فريق المبيعات.']],
 scene:{title:['عن شغلك','About your job'],
  ctrl:[{k:'i',label:['السؤال','Question'],range:[1,3,1],init:1}],
  svg:s=>two(130,bub(40,8,180,30,JQ[s.i-1][0],{fs:11})),
  ask:s=>({q:['الجواب:','The answer:'],opts:JQ.map(j=>j[1]),a:JQ[s.i-1][1]}),
  out:s=>{const j=JQ[s.i-1];return{t:S(`q:${j[0]}|q:—|n:${j[1]}`),ar:j[2],why:['أسئلة ثابتة.','Fixed questions.']}}},
 think:[['وظيفة، شركة، مسؤولية.','Job, company, responsibility.']]};

const FS2={for:['for','five years'],since:['since','1998'],forA:['for','ages'],sinceS:['since','September']};
NH['منذ متى؟ for و since']={
 say:[`نفس قاعدة الوحدة 11: شي بدأ وللحين مستمر ← المضارع التام. طول المدة ← ${E('for')}، ونقطة البداية ← ${E('since')}: ${E("I've worked for Canon since 1998.")}`,
  `${E('for')} + period, ${E('since')} + start.`],
 life:[["I've known him for ages.",'أعرفه منذ زمن طويل.']],
 scene:{title:['مدة ولا بداية؟','Period or start?'],
  ctrl:[{k:'t',label:['الوقت','Time'],opts:Object.keys(FS2).map(k=>[k,FS2[k][1]])}],
  svg:s=>{const f=FS2[s.t][0]==='for';return svg(110,tline(f?`<path d="M120 60 H320" stroke="${grn}" stroke-width="8"/>`+tx(220,40,'↔ '+FS2[s.t][1],{fs:13,c:grn}):ci(120,60,12,red)+tx(120,40,FS2[s.t][1],{fs:13,c:red})))},
  ask:s=>({q:['for ولا since؟','for or since?'],opts:['for','since'],a:FS2[s.t][0]}),
  out:s=>{const f=FS2[s.t];return{t:S(`a:I|k:'ve worked|q:here|x:${f[0]}|n:${f[1]}.`),say:`I've worked here ${f[0]} ${f[1]}.`,ar:'',why:f[0]==='for'?['مدة ← for','Period → for']:['بداية ← since','Start → since']}}},
 think:[['كم؟ ← for. من متى؟ ← since.','How long? → for. From when? → since.']]};

const SK={adj:['be','flexible','صفة'],noun:['have','good computer skills','اسم'],verb:['be able to','work well in a team','فعل']};
NH['الصفات والمهارات']={
 say:[`نوصف نفسنا بثلاث طرق، وكل وحدة لها فعل: صفة ← بعد ${E('be')}: ${E("I'm flexible.")} اسم ← بعد ${E('have')}: ${E('I have experience.')} فعل ← بعد ${E('be able to')}: ${E("I'm able to work in a team.")}`,
  `be + adjective · have + noun · be able to + verb.`],
 life:[["I'm punctual and I have good English.",'أنا منضبط في المواعيد ولغتي الإنجليزية جيدة.']],
 scene:{title:['السيرة الذاتية','The CV'],
  ctrl:[{k:'k',label:['النوع','Type'],opts:Object.keys(SK).map(k=>[k,SK[k][2]])}],
  svg:s=>svg(130,bg(130)+rc(130,10,140,110,'#fff',{st:ink,rx:6})+ci(160,36,12,'#c9d1d6')+[60,76,92].map(y=>rc(146,y,108,8,y===60+['adj','noun','verb'].indexOf(s.k)*16?yel:'#eef1f3',{rx:2})).join('')),
  ask:s=>({q:['قبلها:','Before it:'],opts:['be','have','be able to'],a:SK[s.k][0]}),
  out:s=>{const k=SK[s.k];return{t:S(`a:I|x:${k[0]==='be'?"'m":k[0]==='have'?'have':"'m able to"}|n:${k[1]}.`),say:`I${k[0]==='be'?"'m":k[0]==='have'?' have':"'m able to"} ${k[1]}.`,ar:'',why:[`${k[2]} ← ${k[0]}`,`${k[0]} + ${s.k}`]}}},
 think:[['صفة ← be. اسم ← have. فعل ← be able to.','Adjective → be. Noun → have. Verb → be able to.']]};

const ND={need:['you','need to','be ambitious','To be a director,',1],dont:['you',"don't need to",'be qualified','To be a waiter,',0],can:['I','can','speak three languages','',2]};
NH['need to و have to و can']={
 say:[`ضروري للوظيفة ← ${E('need to / have to')}. مو ضروري ← ${E("don't need to / don't have to")}. وقدراتك أنت ← ${E("can / can't")}.`,
  `Necessary → ${E('need to / have to')}. Not necessary → ${E("don't need to")}. Your ability → ${E('can')}.`],
 life:[["You don't have to wear a tie.",'لا يلزمك لبس ربطة عنق.']],
 scene:{title:['ضروري؟','Necessary?'],
  ctrl:[{k:'n',label:['الحالة','Case'],opts:[['need',['ضروري','necessary']],['dont',['مو ضروري','not necessary']],['can',['قدرتي','my ability']]]}],
  svg:s=>two(130,ND[s.n][4]===1?tx(200,46,'!',{fs:30,c:red}):ND[s.n][4]===0?tx(200,46,'—',{fs:30,c:gry}):ok(200,40)),
  ask:s=>({q:['العبارة:','The phrase:'],opts:['need to',"don't need to",'can'],a:ND[s.n][1]}),
  out:s=>{const n=ND[s.n];return{t:S(`${n[3]?'q:'+n[3]+'|':''}a:${n[0]}|x:${n[1]}|k:${n[2]}.`),ar:'',why:[['مو ضروري','ضروري','قدرة'][n[4]],['not necessary','necessary','ability'][n[4]]]}}},
 think:[['ضروري ← need to. مو ضروري ← don\'t need to. أقدر ← can.',"Necessary → need to. Not → don't need to. Able → can."]]};

/* ===== الوحدة 17 ===== */
const OPP={fast:['fast','slow'],light:['light','heavy'],quiet:['quiet','noisy'],rel:['reliable','unreliable'],modern:['modern','old-fashioned']};
NH['صفات الأجهزة وأضدادها']={
 say:[`نوصف الأجهزة بصفات، ونحفظها مع ضدها: ${E('fast ↔ slow · light ↔ heavy · quiet ↔ noisy')}. وبعضها الضد بإضافة ${E('un')}: ${E('reliable ↔ unreliable')}.`,
  `Learn adjectives with opposites; some add ${E('un')}.`],
 life:[['My phone is old-fashioned.','جوالي قديم الطراز.']],
 scene:{title:['الجهاز','The device'],
  ctrl:[{k:'a',label:['الصفة','Adjective'],opts:Object.keys(OPP).map(k=>[k,OPP[k][0]])},{k:'w',label:['أيهما','Which'],opts:[['a',['الصفة','adjective']],['b',['الضد','opposite']]]}],
  svg:s=>{const B=s.w==='b';let b=bg(130)+rc(140,30,120,76,'#33424c',{rx:6})+rc(150,38,100,56,'#9fc3d8',{rx:3})+rc(120,106,160,8,'#5f6a71',{rx:3});const ic={fast:B?'🐢':'⚡',light:B?'🪨':'🪶',quiet:B?'🔊':'🔈',rel:B?'✗':'✓',modern:B?'📼':'✨'}[s.a];return svg(130,b+tx(330,60,ic,{fs:26}))},
  ask:s=>({q:['الصفة:','The adjective:'],opts:OPP[s.a],a:OPP[s.a][s.w==='a'?0:1]}),
  out:s=>{const o=OPP[s.a];return{t:S(`a:This laptop|q:is|x:${o[s.w==='a'?0:1]}.`),ar:'',why:[`${o[0]} ↔ ${o[1]}`,`${o[0]} ↔ ${o[1]}`]}}},
 think:[['أحفظ الصفة مع ضدها.','Learn each adjective with its opposite.']]};

const TE={too:['This PC is','too','old.'],en:["The screen isn't",'big enough.',''],enn:["It doesn't have",'enough','memory.'],so:['This PC is really old,','so','I need a new one.']};
NH['too و enough، و so و because، و one']={
 say:[`الجهاز ما يناسب؟ طريقتين: ${E('too')} + صفة (زيادة عن اللازم)، أو ${E('not')} + صفة + ${E('enough')} (أقل من اللازم). ومع الاسم ${E('enough')} قبله: ${E('enough memory')}. وبعدين ${E('so')} للنتيجة، و ${E('one')} بدل ما نكرر الاسم: ${E('a new one')}.`,
  `${E('too')} + adjective; ${E('not')} + adjective + ${E('enough')}; ${E('enough')} + noun; ${E('so')} for the result; ${E('one')} replaces the noun.`],
 life:[["This bag is too heavy, so I need a smaller one.",'هذه الحقيبة ثقيلة جداً، لذلك أحتاج واحدة أصغر.']],
 scene:{title:['ليش ما يناسب؟',"Why doesn't it fit?"],
  ctrl:[{k:'t',label:['الطريقة','Way'],opts:[['too','too old'],['en','not big enough'],['enn','enough memory'],['so','so … one']]}],
  svg:s=>svg(130,bg(130)+rc(140,30,120,76,'#33424c',{rx:6})+rc(150,38,100,56,s.t==='en'?'#9fc3d8':'#7d8a94',{rx:3})+(s.t==='en'?rc(170,48,60,36,'#cfe3f0'):'')+tx(330,60,{too:'2009',en:'↔',enn:'💾',so:'→ 🆕'}[s.t],{fs:22})),
  ask:s=>s.t==='en'?{q:['enough مع الصفة:','enough with an adjective:'],opts:['after','before'],a:'after'}:s.t==='enn'?{q:['enough مع الاسم:','enough with a noun:'],opts:['before','after'],a:'before'}:null,
  out:s=>{const t=TE[s.t];return{t:S(`a:${t[0]}|x:${t[1]}${t[2]?'|n:'+t[2]:''}`),ar:'',why:{too:['too + صفة','too + adjective'],en:['صفة + enough','adjective + enough'],enn:['enough + اسم','enough + noun'],so:['so للنتيجة، one بدل الاسم','so = result; one = the noun']}[s.t]}}},
 think:[['زيادة ← too. أقل ← not … enough.','Too much → too. Not sufficient → not … enough.']]};

const CM={fast:['faster','a faster machine'],big:['bigger','bigger desks'],quiet:['quieter','a quieter one'],mod:['more modern','a more modern printer']};
NH['المقارنة']={
 say:[`تطلب بديل أحسن؟ قارنه بالقديم: القصيرة ← ${E('er')}، والطويلة ← ${E('more')}: ${E("I'll check the cost of a faster machine.")} و ${E('Is it possible to get a quieter one?')}`,
  `Short → ${E('er')}; long → ${E('more')}.`],
 life:[['Can I have a bigger size?','هل أستطيع أخذ مقاس أكبر؟']],
 scene:{title:['البديل','The replacement'],
  ctrl:[{k:'a',label:['الصفة','Adjective'],opts:[['fast','fast'],['big','big'],['quiet','quiet'],['mod','modern']]}],
  svg:s=>svg(120,bg(120)+rc(60,40,90,56,'#7d878e',{rx:6})+tx(105,110,'old',{fs:12})+ar(165,68,225,68,ink,3)+rc(240,30,110,70,blu,{rx:6})+tx(295,110,'new',{fs:12})),
  ask:s=>({q:['المقارنة:','Comparative:'],opts:s.a==='mod'?['more modern','moderner']:[CM[s.a][0],'more '+s.a],a:CM[s.a][0]}),
  out:s=>{const c=CM[s.a];return{t:S(`q:Is it possible to get|x:${c[1]}?`),ar:'',why:s.a==='mod'?['طويلة ← more','Long → more']:s.a==='big'?['نضاعف الحرف ← bigger','Double → bigger']:['قصيرة ← er','Short → er']}}},
 think:[['قصيرة ← er. طويلة ← more.','Short → er. Long → more.']]};

const FB={easy:["It's easy to use.","You don't need to spend hours learning how to use it."],rel:["It's reliable.","It won't stop working in the middle of your presentation."],fast:["It's fast.","Your audience won't have to wait."]};
NH['الميزة والفائدة']={
 say:[`الميزة ${E('feature')} = وش في المنتج. والفائدة ${E('benefit')} = ليش هذا يهمك أنت. الزبون يشتري الفائدة، فلا توقف عند الميزة: ${E("It's reliable.")} ← ${E("It won't stop working in the middle of your presentation.")}`,
  `Feature = what it has. Benefit = why it matters to the customer.`],
 life:[["It's light, so you can carry it everywhere.",'إنه خفيف، فتستطيع حمله في كل مكان.']],
 scene:{title:['الميزة ← الفائدة','Feature → benefit'],
  ctrl:[{k:'f',label:['الميزة','Feature'],opts:[['easy','easy to use'],['rel','reliable'],['fast','fast']]},{k:'p',label:['الجزء','Part'],opts:[['f','feature'],['b','benefit']]}],
  svg:s=>svg(110,bg(110)+rc(30,30,150,44,s.p==='f'?'#fff3c7':'#fff',{st:ink,rx:8})+tx(105,57,'feature',{fs:13})+ar(185,52,215,52,ink,3)+rc(220,30,150,44,s.p==='b'?'#dcf1e3':'#fff',{st:ink,rx:8})+tx(295,57,'benefit',{fs:13})),
  ask:s=>({q:['هذا:','This is:'],opts:['feature','benefit'],a:s.p==='f'?'feature':'benefit'}),
  out:s=>{const f=FB[s.f];return{t:S(`${s.p==='f'?'x':'n'}:${f[s.p==='f'?0:1]}`),ar:'',why:s.p==='f'?['وش في المنتج','What it has']:['ليش يهم الزبون','Why it matters']}}},
 think:[['ذكرت ميزة؟ ← قل فائدتها للزبون.','A feature? → say the benefit.']]};

const BP={means:['This means that','it is easy to read.','+ جملة'],enable:['This enables you to','read it easily.','+ to + الفعل'],able:['You will be able to','use the product quickly.','+ الفعل'],dont:["You don't need to",'buy extra batteries.','+ الفعل']};
NH['عبارات شرح الفائدة']={
 say:[`عبارات تربط الميزة بالفائدة، وكل وحدة لها تكملة: ${E('This means that')} + جملة كاملة. ${E('This enables you to')} + الفعل. ${E('You will be able to')} + الفعل. ${E("You don't need to")} + الفعل.`,
  `${E('This means that')} + sentence; the others + verb.`],
 life:[["This means that you save time.",'هذا يعني أنك توفر الوقت.']],
 scene:{title:['اربط','Link'],
  ctrl:[{k:'b',label:['العبارة','Phrase'],opts:Object.keys(BP).map(k=>[k,BP[k][0]])}],
  svg:s=>svg(110,bg(110)+rc(30,30,160,44,'#fff3c7',{st:ink,rx:8})+tx(110,57,'feature',{fs:13})+rc(210,30,160,44,'#dcf1e3',{st:ink,rx:8})+tx(290,57,'benefit',{fs:13})+tx(200,96,BP[s.b][2],{fs:13,c:red})),
  ask:s=>({q:['بعدها:','After it:'],opts:['a sentence','a verb'],a:s.b==='means'?'a sentence':'a verb'}),
  out:s=>{const b=BP[s.b];return{t:S(`x:${b[0]}|k:${b[1]}`),ar:'',why:[b[2],b[2]]}}},
 think:[['means that ← جملة. الباقي ← فعل.','means that → a sentence. Others → a verb.']]};

const NA={speed:['speed','fast','faster','the fastest'],price:['price','cheap','cheaper','the cheapest'],conv:['convenience','convenient','more convenient','the most convenient'],rel:['reliability','reliable','more reliable','the most reliable']};
NH['الاسم والصفة، والمقارنة والتفضيل']={
 say:[`لكل معيار اسم وصفة: ${E('speed → fast')}. والصفة تتقارن: مقطع واحد ← ${E('er / est')}، وأطول ← ${E('more / the most')}. اثنين ← مقارنة، ثلاثة فأكثر ← تفضيل.`,
  `Noun → adjective → comparative → superlative.`],
 life:[['This is the fastest way to the airport.','هذا أسرع طريق إلى المطار.']],
 scene:{title:['شركات الشحن','Delivery companies'],
  ctrl:[{k:'c',label:['المعيار','Criterion'],opts:Object.keys(NA).map(k=>[k,NA[k][0]])},{k:'n',label:['العدد','Number'],opts:[['2',['شركتان','two']],['3',['ثلاث','three']]]}],
  svg:s=>{let b=bg(110);for(let i=0;i<+s.n;i++)b+=rc(80+i*90,30,70,44,[red,blu,grn][i],{rx:6})+tx(115+i*90,57,['A','B','C'][i],{fs:16,c:'#fff'});return svg(110,b)},
  ask:s=>({q:['الصيغة:','The form:'],opts:[NA[s.c][2],NA[s.c][3]],a:s.n==='2'?NA[s.c][2]:NA[s.c][3]}),
  out:s=>{const n=NA[s.c];return s.n==='2'?{t:S(`a:Company A|q:is|x:${n[2]}|q:than|n:Company B.`),ar:'',why:['اثنين ← مقارنة + than','Two → comparative']}:{t:S(`a:Company A|q:is|x:${n[3]}.`),ar:'',why:['ثلاثة فأكثر ← تفضيل','Three or more → superlative']}}},
 think:[['اثنين ← than. ثلاثة فأكثر ← the …est.','Two → than. Three or more → the …est.']]};

const IS={very:['really','expensive','قوي'],quite:['fairly','fast','خفيف'],much:['much','faster','فرق كبير'],bit:['a bit','slower','فرق صغير']};
NH['تقوية الصفة وتضعيفها']={
 say:[`كلمة قبل الصفة تقويها ${E('very · really · extremely')} أو تخففها ${E('quite · fairly')}. وقبل المقارنة تبيّن حجم الفرق: كبير ${E('much · a lot · far')}، صغير ${E('a bit')}.`,
  `Stronger: very / really. Weaker: quite / fairly. Big difference: much. Small: a bit.`],
 life:[["It's really hot today.",'الجو حار جداً اليوم.']],
 scene:{title:['قوة الكلمة','How strong?'],
  ctrl:[{k:'w',label:['الكلمة','Word'],opts:Object.keys(IS).map(k=>[k,IS[k][0]])}],
  svg:s=>{const v={very:90,quite:45,much:85,bit:25}[s.w];return svg(100,bg(100)+rc(60,36,280,24,'#eef1f3',{st:ink,rx:12})+rc(60,36,280*v/100,24,s.w==='quite'||s.w==='bit'?yel:red,{rx:12})+tx(200,86,IS[s.w][2],{fs:13,c:gry}))},
  ask:s=>({q:['قبل:','Before:'],opts:['an adjective','a comparative'],a:s.w==='much'||s.w==='bit'?'a comparative':'an adjective'}),
  out:s=>{const i=IS[s.w];return s.w==='much'||s.w==='bit'?{t:S(`a:Cybernet|q:is|x:${i[0]}|k:${i[1]}|q:than Webspeed.`),ar:'',why:[i[2],i[2]]}:{t:S(`a:They|q:'re|x:${i[0]}|k:${i[1]}.`),say:`They're ${i[0]} ${i[1]}.`,ar:'',why:[i[2],i[2]]}}},
 think:[['قبل الصفة ← very / quite. قبل المقارنة ← much / a bit.','Adjective → very / quite. Comparative → much / a bit.']]};

const OP={ask:['What do you think?','طلب الرأي'],give:['If you ask me,','a finance course is best.','إعطاء الرأي'],full:['Good point.',"I didn't think of that.",'موافقة كاملة'],part:['I see what you mean,','but it\'s expensive.','موافقة جزئية']};
NH['إبداء الرأي والموافقة']={
 say:[`ثلاث وظايف: تطلب الرأي ${E('What do you think?')}، تعطي رأيك ${E('If you ask me, …')}، وترد: موافقة كاملة ${E('Good point.')} أو جزئية ${E('I see what you mean, but …')}`,
  `Ask, give, respond (full or partial agreement).`],
 life:[['I see what you mean, but I disagree.','أفهم ما تقصد، لكني لا أوافق.']],
 scene:{title:['النقاش','The discussion'],
  ctrl:[{k:'o',label:['الوظيفة','Function'],opts:Object.keys(OP).map(k=>[k,OP[k][OP[k].length-1]])}],
  svg:s=>svg(130,bg(130)+man(200,84,grn,0.9)+rc(130,98,140,12,'#a7744a',{rx:3})+man(90,96,blu,1)+man(310,96,'#b05a7a',1)+tx(200,30,{ask:'?',give:'!',full:'✓',part:'½'}[s.o],{fs:26,c:red})),
  ask:s=>s.o==='part'?{q:['بعد I see what you mean:','After I see what you mean:'],opts:['but …','and …'],a:'but …'}:null,
  out:s=>{const o=OP[s.o];return{t:S(`x:${o[0]}${o.length>2?'|n:'+o[1]:''}`),ar:o[o.length-1],why:[o[o.length-1],o[o.length-1]]}}},
 think:[['أطلب، أعطي، أرد.','Ask, give, respond.']]};

const WRp=[['Thanks for your email.','الشكر'],['I see what you mean about the price, but …','موافقة جزئية'],['If you ask me, a time-management course is best because …','الرأي والسبب'],['What do you think?','طلب الرأي']];
NH['الرد المكتوب على رأي']={
 say:[`في الإيميل نفس العبارات بترتيب: شكر ← موافقة جزئية ← رأيك وسببه بـ ${E('because')} ← تسأله عن رأيه.`,
  `Thanks → partial agreement → your opinion + because → ask.`],
 life:[['Thanks for your message.','شكراً على رسالتك.']],
 scene:{title:['الإيميل','The email'],
  ctrl:[{k:'i',label:['السطر','Line'],range:[1,4,1],init:1}],
  svg:s=>{let b=bg(130)+rc(90,10,220,110,'#fff',{st:ink,rx:6});WRp.forEach((w,i)=>{b+=rc(106,24+i*22,188,14,i===s.i-1?'#fff3c7':'#eef1f3',{rx:3})});return svg(130,b)},
  ask:s=>s.i===3?{q:['السبب بعد:','The reason after:'],opts:['because','so'],a:'because'}:null,
  out:s=>{const w=WRp[s.i-1];return{t:S(`k:${w[0]}`),ar:w[1],why:['كل جزء في مكانه.','Each part in its place.']}}},
 think:[['شكر، موافقة جزئية، رأي وسبب، سؤال.','Thanks, partial agreement, opinion + reason, question.']]};
})(window);

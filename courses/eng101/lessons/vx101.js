/* «شاهد الفكرة» لدروس انجل-101. القالب في vx.js (VX.make) */
(function(G){const V=G.VX;if(!V)return;
const M=(id,cfg)=>{V.L[id]=(el,B)=>V.make(el,B,cfg)};
const ink='#3b4a54',grn='#1f8a5b',red='#c4553f',blu='#2f6b8f',yel='#f1b33c',gry='#9aa3aa';
const svg=(h,body,lab)=>`<svg viewBox="0 0 360 ${h}" role="img" aria-label="${lab||''}">${body}</svg>`;
const tx=(x,y,t,o={})=>`<text x="${x}" y="${y}" font-size="${o.fs||12}" font-weight="${o.w||700}" text-anchor="${o.a||'middle'}" fill="${o.c||ink}">${t}</text>`;
const arr=(x1,y1,x2,y2,c=grn,w=4)=>{const a=Math.atan2(y2-y1,x2-x1),h=10;return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><path d="M${x2} ${y2} L${x2-h*Math.cos(a-0.45)} ${y2-h*Math.sin(a-0.45)} L${x2-h*Math.cos(a+0.45)} ${y2-h*Math.sin(a+0.45)}Z" fill="${c}"/>`};
const man=(x,y,c=blu,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="-30" r="9" fill="#e8c7a5" stroke="${ink}"/><path d="M-12 12 v-26 q12 -8 24 0 v26z" fill="${c}"/></g>`;
const R2=(a,b)=>[a,b];

/* ---------- 1.1 الفعل be ---------- */
const S11=en=>svg(150,`<rect width="360" height="150" fill="#f3f6f8"/>
 <g class="hl" data-d="i">${man(40,100,grn)}${tx(40,128,'I',{fs:14})}</g>
 <g class="hl" data-d="you">${man(100,100,blu)}${tx(100,128,'you',{fs:14})}</g>
 <g class="hl" data-d="he">${man(160,100,'#7a5ea8')}${tx(160,128,'he',{fs:14})}</g>
 <g class="hl" data-d="she">${man(220,100,red)}${tx(220,128,'she',{fs:14})}</g>
 <g class="hl" data-d="they">${man(285,100,yel,.85)}${man(315,100,yel,.85)}${tx(300,128,'they',{fs:14})}</g>`,'أشخاص: أنا، أنت، هو، هي، هم');
const BE=(k,s,b,c,q,qa,cue,qo,ar,e2)=>({k,chip:[s,ar,e2],A:{t:[['s',s],['b',b,'a'],['o',c+'.']],why:[`${s} + ${b}`,`${s} + ${b}`]},B:{t:[['b',q,'n'],['s',s.toLowerCase()==='i'?'I':s.toLowerCase()],['o',c+'?']],why:['السؤال: نقدّم الفعل be على الفاعل.','Question: be comes before the subject.']},qa:[qa],cue,qo});
M('u1-l1',{title:['الفعل be: am و is و are','The verb be: am, is and are'],sub:['المس شخصاً: أي صيغة من be معه؟ ثم حوّل الجملة إلى سؤال.','Tap a person: which form of be goes with it? Then make a question.'],
 scene:S11,cols:5,sw:[['↔ سؤال','↔ Question'],['↔ جملة','↔ Statement']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[BE('i','I',"'m",'from Poland','Am',["Are you from Poland?","Yes, I am."],["___ from Poland. (I)","___ from Poland. (I)"],["I'm","I is","I are"],'أنا','I'),
  BE('you','You','are','an engineer','Are',["Are you an engineer?","No, I'm not. I'm a student."],["Excuse me. ___ you Mr Rossi?","Excuse me. ___ you Mr Rossi?"],['Are','Is','Am'],'أنت','you'),
  BE('he','He','is','a builder','Is',["Is he a builder?","Yes, he is."],["My name ___ Pedro.","My name ___ Pedro."],['is','are','am'],'هو','he'),
  BE('she','She','is','from Egypt','Is',["Is she from Egypt?","No, she isn't. She's from Jordan."],["___ she a technician?","___ she a technician?"],['Is','Are','Am'],'هي','she'),
  BE('they','They','are','students','Are',["Are they students?","Yes, they are."],["They ___ from France.","They ___ from France."],['are','is','am'],'هم','they')]});

/* ---------- 1.2 أصوات الحروف ---------- */
const LG=[['ei','A H J K','eight',['هل G مع A؟','Is G with A?']],['ii','B C D E G P T V','three'],['e','F L M N S X Z','ten'],['ai','I Y','five'],['uu','Q U W','two'],['ex','O R','no group']];
M('u1-l2',{title:['الحروف في مجموعات صوتية','The letters in sound groups'],sub:['المس مجموعة: الحروف فيها تُنطق بصوت واحد مثل الكلمة.','Tap a group: the letters in it have the same sound as the word.'],cols:3,
 sw:[['↔ مثال تهجئة','↔ A spelling example'],['↔ المجموعة','↔ The group']],quiz:['في أي مجموعة هذا الحرف؟','Which group is this letter in?'],
 items:[{k:'ei',chip:['eight','A H J K',''],A:{t:'A H J K'.split(' ').map((l,i)=>['l'+i,l,'k']).concat([['w','= eight','a']]),why:['صوتها مثل eight.','Their sound is like eight.']},B:{t:[['s','K-A-T-E','k'],['w','= Kate']]},cue:['J','J'],qo:['eight','three','five']},
  {k:'ii',chip:['three','B C D E…',''],A:{t:'B C D E G P T V'.split(' ').map((l,i)=>['l'+i,l,'k']).concat([['w','= three','a']]),why:['صوتها ينتهي مثل three.','Their sound ends like three.']},B:{t:[['s','P-E-T-E','k'],['w','= Pete']]},cue:['G','G'],qo:['three','eight','ten']},
  {k:'e',chip:['ten','F L M N…',''],A:{t:'F L M N S X Z'.split(' ').map((l,i)=>['l'+i,l,'k']).concat([['w','= ten','a']]),why:['صوتها يبدأ مثل ten.','Their sound starts like ten.']},B:{t:[['s','M-A-X','k'],['w','= Max']]},cue:['S','S'],qo:['ten','three','two']},
  {k:'ai',chip:['five','I Y',''],A:{t:[['l0','I','k'],['l1','Y','k'],['w','= five','a']],why:['صوتها مثل five.','Their sound is like five.']},B:{t:[['s','R-Y-A-N','k'],['w','= Ryan']]},cue:['Y','Y'],qo:['five','eight','two']},
  {k:'uu',chip:['two','Q U W',''],A:{t:[['l0','Q','k'],['l1','U','k'],['l2','W','k'],['w','= two','a']],why:['صوتها مثل two.','Their sound is like two.']},B:{t:[['s','Q-U-A-Y-L-E','k'],['w','= Quayle']]},cue:['W','W'],qo:['two','five','ten']},
  {k:'ex',chip:['O R','وحدهما','alone'],A:{t:[['l0','O','k'],['l1','R','k'],['w','= exceptions','n']],why:['حرفان لا مجموعة لهما: O مثل no، و R مثل are.','Two letters with no group: O like no, R like are.']},B:{t:[['s','R-O-S-S-I','k'],['w','= Rossi']]},cue:['R','R'],qo:['O R','eight','ten']}]});

/* ---------- 1.3 الوقت بنظامي 24 و 12 ---------- */
const clk=(x,y,h,m,k)=>{const a=(h%12+m/60)*30,b=m*6,R=28;return `<g class="hl" data-d="${k}"><circle cx="${x}" cy="${y}" r="${R}" fill="#fff" stroke="${ink}" stroke-width="2"/><line x1="${x}" y1="${y}" x2="${x+16*Math.sin(a*Math.PI/180)}" y2="${y-16*Math.cos(a*Math.PI/180)}" stroke="${ink}" stroke-width="4" stroke-linecap="round"/><line x1="${x}" y1="${y}" x2="${x+24*Math.sin(b*Math.PI/180)}" y2="${y-24*Math.cos(b*Math.PI/180)}" stroke="${red}" stroke-width="2.5"/>${tx(x,y+R+16,(h<10?'0':'')+h+'.'+(m<10?'0':'')+m,{fs:13})}</g>`};
const T13=[['a',7,50,'seven fifty','ten to eight in the morning','7.50 am'],['b',15,15,'fifteen fifteen','a quarter past three in the afternoon','3.15 pm'],['c',13,35,'thirteen thirty-five','twenty-five to two in the afternoon','1.35 pm'],['d',21,10,'twenty-one ten','ten past nine in the evening','9.10 pm']];
M('u1-l3',{title:['الوقت بنظامي 24 و 12 ساعة','The time in the 24-hour and 12-hour clock'],sub:['المس ساعة: اقرأ وقتها بنظام 24 ثم بنظام 12.','Tap a clock: read its time in the 24-hour clock, then the 12-hour clock.'],
 scene:en=>svg(110,`<rect width="360" height="110" fill="#f3f6f8"/>${T13.map((t,i)=>clk(48+i*88,44,t[1],t[2],t[0])).join('')}`,'أربع ساعات بأوقات مختلفة'),cols:4,
 sw:[['↔ نظام 12 ساعة','↔ 12-hour clock'],['↔ نظام 24 ساعة','↔ 24-hour clock']],quiz:['ما الوقت بنظام 12 ساعة؟','What is the time in the 12-hour clock?'],
 items:T13.map(([k,h,m,r24,r12,s12])=>({k,chip:[(h<10?'0':'')+h+'.'+m,'',''],A:{t:[['i',"It's"],['t',r24+'.','k']],why:['نظام 24 ساعة: نقرأ الساعة ثم الدقائق.','24-hour clock: we read the hour, then the minutes.']},B:{t:[['i',"It's"],['t',s12+'.','a']],say:`It's ${r12}.`,why:[`نظام 12 ساعة: am قبل الظهر، و pm بعده. ونقول أيضاً: ${r12}.`,`12-hour clock: am before midday, pm after it. We also say: ${r12}.`]},
  cue:[(h<10?'0':'')+h+'.'+m,(h<10?'0':'')+h+'.'+m],qo:[s12,(h>12?h-12:h)+'.'+m+(h<12?' pm':' am'),((h+2)%12||12)+'.'+m+(h<12?' am':' pm')]}))});

/* ---------- 2.1 this / that / these / those ---------- */
const S21=en=>svg(150,`<rect width="360" height="150" fill="#f6f2ea"/><rect x="0" y="120" width="360" height="30" fill="#e2d6c2"/>
 ${man(50,112,blu)}<path d="M60 92 L84 100" stroke="${ink}" stroke-width="3"/>
 <g class="hl" data-d="this"><rect x="88" y="94" width="18" height="6" fill="#888"/><line x1="92" y1="100" x2="92" y2="112" stroke="#888" stroke-width="3"/>${tx(97,86,en?'near, 1':'قريب، 1',{fs:10})}</g>
 <g class="hl" data-d="these">${[0,1,2].map(i=>`<rect x="${128+i*14}" y="106" width="10" height="4" fill="#888"/><line x1="${131+i*14}" y1="110" x2="${131+i*14}" y2="120" stroke="#888" stroke-width="2"/>`).join('')}${tx(148,96,en?'near, 2+':'قريب، أكثر',{fs:10})}</g>
 <g class="hl" data-d="that"><rect x="250" y="70" width="40" height="22" rx="6" fill="${red}"/><circle cx="258" cy="96" r="7" fill="${ink}"/><circle cx="284" cy="96" r="7" fill="${ink}"/>${tx(270,60,en?'far, 1':'بعيد، 1',{fs:10})}</g>
 <g class="hl" data-d="those">${[0,1,2].map(i=>`<line x1="${310+i*14}" y1="60" x2="${310+i*14}" y2="104" stroke="${gry}" stroke-width="3"/>`).join('')}${tx(324,52,en?'far, 2+':'بعيد، أكثر',{fs:10})}</g>
 ${tx(200,140,en?'near ← → far':'قريب ← → بعيد',{fs:11,c:'#8a6a3a'})}`,'رجل يشير إلى أشياء قريبة وبعيدة');
const DM=(k,w,v,thing,pl,ar,e2)=>({k,chip:[w,ar,e2],A:{t:[['q',"What"],['b',pl?'are':"'s",'a'],['d',w,'n'],['c','called?']],say:`What ${pl?'are':'is'} ${w} called?`,why:pl?[`${w} للجمع، فنستعمل are.`,`${w} is plural, so we use are.`]:[`${w} للمفرد، فنستعمل is ('s).`,`${w} is singular, so we use is ('s).`]},B:{t:[['i',pl?"They're":"It's",'a'],['c','called'],['o',thing+'.','k']]},cue:[en=>'',''],qo:null});
M('u2-l1',{title:['this و that و these و those','this, that, these and those'],sub:['المس شيئاً: هل هو قريب أم بعيد؟ واحد أم أكثر؟','Tap a thing: is it near or far? One or more?'],
 scene:S21,cols:4,sw:[['↔ الجواب','↔ The answer'],['↔ السؤال','↔ The question']],quiz:['انظر إلى الشيء المحاط واختر:','Look at the thing in green and choose:'],
 items:[DM('this','this',0,'a screw',0,'قريب، مفرد','near, one'),DM('these','these',0,'screws',1,'قريب، جمع','near, more'),DM('that','that',0,'a car',0,'بعيد، مفرد','far, one'),DM('those','those',0,'pylons',1,'بعيد، جمع','far, more')].map(x=>{delete x.cue;delete x.qo;return x})});

/* ---------- 2.2 أفعال التركيب وأضدادها ---------- */
const S22=en=>svg(150,`<rect width="360" height="150" fill="#f3f6f8"/>
 <g class="hl" data-d="put"><rect x="20" y="96" width="80" height="10" fill="#b08a5a"/><rect x="48" y="60" width="24" height="16" fill="${ink}"/>${arr(60,40,60,58)}${tx(60,130,'put on',{fs:12})}</g>
 <g class="hl" data-d="take"><rect x="20" y="96" width="80" height="10" fill="#b08a5a" transform="translate(0,0)" opacity="0"/></g>
 <g class="hl" data-d="tighten"><polygon points="180,62 194,70 194,86 180,94 166,86 166,70" fill="${gry}" stroke="${ink}"/><path d="M160 54 a26 26 0 0 1 40 0" fill="none" stroke="${grn}" stroke-width="4"/>${arr(196,50,204,62)}${tx(180,130,'tighten ↻',{fs:12})}</g>
 <g class="hl" data-d="loosen"><path d="M200 108 a26 26 0 0 1 -40 0" fill="none" stroke="${red}" stroke-width="4"/>${tx(180,146,'loosen ↺',{fs:12,c:red})}</g>
 <g class="hl" data-d="push"><rect x="270" y="50" width="12" height="60" fill="${ink}"/>${arr(320,80,290,80)}${tx(300,130,'push',{fs:12})}</g>
 <g class="hl" data-d="pull">${arr(290,100,326,100,red)}${tx(340,146,'pull',{fs:12,c:red})}</g>`,'ثلاثة أزواج من الأفعال المتضادة');
const OP=(k,v,o,loc,ov,ar,e2)=>({k,chip:[v,ar,e2],A:{t:[['v',v[0].toUpperCase()+v.slice(1),'a'],['o',o,'k'],...(loc?[['l',loc+'.','q']]:[['l','.','q']])]},B:{t:[['v',ov[0].toUpperCase()+ov.slice(1),'n'],['o',o,'k'],...(loc?[['l',loc.replace(/^on /,'off ')+'.','q']]:[['l','.','q']])]}});
M('u2-l2',{title:['التعليمات: فعل + شيء + مكان','Instructions: verb + thing + place'],sub:['المس فعلاً لترى حركته، ثم ضدّه.','Tap a verb to see its movement, then its opposite.'],
 scene:S22,cols:3,sw:[['↔ الضد','↔ The opposite'],['↔ رجوع','↔ Back']],quiz:['ما الفعل المحاط بالأخضر؟','Which verb is in green?'],
 items:[OP('put','put','the nuts','on the bolts','take','يضع','put'),OP('tighten','tighten','the nuts','','loosen','يشدّ','tighten'),OP('push','push','the lever','','pull','يدفع','push'),OP('loosen','loosen','the nut','','tighten','يرخي','loosen'),OP('pull','pull','the lever','','push','يسحب','pull')].map(x=>{x.A.t=x.A.t.filter(z=>z[1]!=='.');x.B.t=x.B.t.filter(z=>z[1]!=='.');x.A.t[x.A.t.length-1][1]+='.';x.B.t[x.B.t.length-1][1]+='.';x.A.why=['الأمر: نبدأ بالفعل الأصلي، ثم الشيء، ثم المكان.','An instruction: start with the base verb, then the thing, then the place.'];x.B.why=['الفعل الضد يعكس الحركة.','The opposite verb reverses the movement.'];return x})});

/* ---------- 2.3 أرقام الهاتف ---------- */
const PH=(k,d,say,ar,e2,qo)=>({k,chip:[d,ar,e2],A:{t:d.split(' ').map((x,i)=>['d'+i,x,'k'])},B:{t:say.split(' · ').map((x,i)=>['d'+i,x,'a'])},cue:[d,d],qo});
M('u2-l3',{title:['قراءة أرقام الهاتف','Reading phone numbers'],sub:['المس رقماً: كيف نقرؤه بالهاتف؟ لاحظ oh و double.','Tap a number: how do we say it on the phone? Notice oh and double.'],cols:2,
 sw:[['↔ كيف نقرؤه؟','↔ How do we say it?'],['↔ الرقم','↔ The number']],quiz:['كيف تقرأ هذا الرقم؟','How do you say this number?'],
 items:[PH('a','0044','oh · oh · double four','oh و double','oh, double',['oh oh double four','zero zero forty-four','double oh four four']),PH('b','208 8947','two oh eight · double eight · nine four seven','الصفر oh','0 = oh',['two oh eight double eight nine four seven','two hundred and eight eight nine four seven','two zero eight eighty-eight nine forty-seven']),
  PH('c','77','double seven','رقمان متشابهان','two the same',['double seven','seventy-seven','seven seven seven']),PH('d','00 971 2','oh oh · nine seven one · two','رمز الدولة','country code',['oh oh nine seven one two','zero zero nine hundred seventy-one two','double oh ninety-seven one two'])].map(x=>{x.A.why=['نكتب الأرقام هكذا.','We write the numbers like this.'];x.B.why=['بالهاتف نقرأ كل رقم وحده: 0 = oh، ورقمان متشابهان = double.','On the phone we say each number alone: 0 = oh, two the same = double.'];return x})});

/* ---------- 2.4 مراجعة A ---------- */
M('u2-l4',{title:['مراجعة A: الفعل be والأسئلة','Review A: the verb be and questions'],sub:['المس قاعدة لترى مثالها، ثم حوّله.','Tap a rule to see its example, then change it.'],cols:3,
 sw:[['↔ الصيغة الأخرى','↔ The other form'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة الناقصة:','Choose the missing word:'],
 items:[{k:'q',chip:['Is …?','السؤال','question'],A:{t:[['s','The machine'],['b',"'s",'a'],['o','on.']]},B:{t:[['b','Is','a'],['s','the machine'],['o','on?']]},cue:['___ the switches off?','___ the switches off?'],qo:['Are','Is','Am']},
  {k:'neg',chip:["isn't",'النفي','negative'],A:{t:[['s','It'],['b',"isn't",'n'],['o','on.'],['o2',"It's off.",'k']]},B:{t:[['s','They'],['b',"aren't",'n'],['o','from Berlin.']]},cue:["No, she ___ a technician.","No, she ___ a technician."],qo:["isn't","aren't","not"]},
  {k:'con',chip:["I'm",'الاختصار','short form'],A:{t:[['s','I am'],['o','from Jordan.']]},B:{t:[['s',"I'm",'a'],['o','from Jordan.']]},cue:['What ___ this tool called?','What ___ this tool called?'],qo:["'s","'re","'m"]},
  {k:'wh',chip:['What / How','كلمة السؤال','question word'],A:{t:[['w','How','q'],['m','many'],['o','do you need?']]},B:{t:[['w','What','q'],['o','size?']]},cue:['___ colour? Black or silver?','___ colour? Black or silver?'],qo:['What','How','Who']},
  {k:'ins',chip:['Tighten','الأمر','instruction'],A:{t:[['v','Tighten','a'],['o','the screws.']]},B:{t:[['v','Take','a'],['o','the old wheel'],['l','off the car.','q']]},cue:['___ the large hammer.','___ the large hammer.'],qo:['Use','Uses','Using']},
  {k:'num',chip:['101','الأرقام','numbers'],A:{t:[['n','Room 101','k']]},B:{t:[['n','one oh one','a']]},cue:['74 77 88','74 77 88'],qo:['seven four double seven double eight','seventy-four seventy-seven eighty-eight','seven four seven seven eight eight']}]});

/* ---------- 3.1 الأداة المتعددة: have ---------- */
const S31=en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/><rect x="110" y="70" width="140" height="30" rx="14" fill="${red}" stroke="${ink}" stroke-width="2"/>${tx(180,90,'MULTI TOOL',{fs:11,c:'#fff'})}
 <g class="hl" data-d="hammer"><rect x="60" y="52" width="50" height="10" fill="${gry}"/><rect x="50" y="40" width="18" height="34" rx="3" fill="${ink}"/>${tx(70,30,'hammer',{fs:11})}</g>
 <g class="hl" data-d="pliers"><path d="M250 80 l60 -30 M250 86 l60 -14" stroke="${ink}" stroke-width="5"/>${tx(300,36,'pliers',{fs:11})}</g>
 <g class="hl" data-d="saw"><path d="M250 92 h70 l-6 10 h-64z" fill="${gry}"/><path d="M254 102 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6" fill="none" stroke="${ink}"/>${tx(296,126,'saw',{fs:11})}</g>
 <g class="hl" data-d="blade"><path d="M110 92 l-60 22 l10 -26z" fill="#ccd"/>${tx(60,136,'blade',{fs:11})}</g>
 <g class="hl" data-d="opener"><path d="M160 100 v30 q8 8 16 0 v-8 h-8 v-22z" fill="${gry}"/>${tx(180,152,en?'can opener':'can opener',{fs:11})}</g>
 <g class="hl" data-d="scissors">${tx(330,160,'scissors ✗',{fs:11,c:red,a:'end'})}</g>`,'أداة متعددة فيها مطرقة وكماشة ومنشار ونصل وفتّاحة، وليس فيها مقص');
const HV=(k,thing,yes,ar,e2)=>({k,chip:[k==='opener'?'can opener':k,ar,e2],A:{t:[['s','It'],['h',yes?'has':"doesn't have",yes?'a':'n'],['o',thing+'.','k']]},B:{t:[['d','Does','q'],['s','it'],['h','have'],['o',thing+'?','k']]},qa:[[`Does it have ${thing}?`,yes?'Yes, it does.':"No, it doesn't."]],cue:[`Does it have ${thing}?`,`Does it have ${thing}?`],qo:yes?['Yes, it does.',"No, it doesn't.",'Yes, it has.']:["No, it doesn't.",'Yes, it does.',"No, it hasn't."]});
M('u3-l1',{title:['have: ماذا في الأداة؟','have: what is on the tool?'],sub:['المس جزءاً من الأداة: هل هو فيها؟ وكيف تسأل عنه؟','Tap a part of the tool: does it have it? How do you ask?'],
 scene:S31,cols:3,sw:[['↔ سؤال Does …?','↔ Question Does …?'],['↔ جملة','↔ Statement']],quiz:['أجب بإجابة قصيرة:','Give a short answer:'],
 items:[HV('hammer','a hammer',1,'مطرقة','hammer'),HV('pliers','a pair of pliers',1,'كماشة','pliers'),HV('saw','a saw',1,'منشار','saw'),HV('blade','a blade',1,'نصل','blade'),HV('opener','a can opener',1,'فتّاحة','can opener'),HV('scissors','a pair of scissors',0,'مقص','scissors')].map(x=>{x.A.why=x.A.t[1][1]==='has'?['he / she / it + has.','he / she / it + has.']:["النفي: doesn't have (لا doesn't has).","Negative: doesn't have (not doesn't has)."];x.B.why=['السؤال: Does + it + have …?','Question: Does + it + have …?'];return x})});

/* ---------- 3.2 الوظائف: المضارع البسيط ---------- */
const S32=en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/><rect x="90" y="50" width="180" height="100" rx="14" fill="#d8dde2" stroke="${ink}" stroke-width="2"/>
 <g class="hl" data-d="thermo"><rect x="104" y="64" width="10" height="56" rx="5" fill="#fff" stroke="${ink}"/><circle cx="109" cy="124" r="8" fill="${red}"/></g>
 <g class="hl" data-d="compass"><circle cx="150" cy="84" r="16" fill="#fff" stroke="${ink}"/><path d="M150 72 l4 12 l-4 12 l-4 -12z" fill="${red}"/></g>
 <g class="hl" data-d="clock"><circle cx="200" cy="84" r="16" fill="#fff" stroke="${ink}"/><path d="M200 84 v-10 M200 84 h8" stroke="${ink}" stroke-width="2"/></g>
 <g class="hl" data-d="torch"><rect x="232" y="72" width="26" height="26" rx="4" fill="${yel}" stroke="${ink}"/><path d="M270 76 l40 -14 M270 86 l44 0 M270 96 l40 14" stroke="${yel}" stroke-width="3"/></g>
 <g class="hl" data-d="antenna"><line x1="250" y1="50" x2="290" y2="8" stroke="${ink}" stroke-width="4"/></g>
 <g class="hl" data-d="handle"><path d="M90 110 h-30 v30 h14" fill="none" stroke="${ink}" stroke-width="6"/></g>
 <g class="hl" data-d="solar"><rect x="140" y="112" width="80" height="26" fill="#2f4f8a" stroke="${ink}"/><path d="M160 112 v26 M180 112 v26 M200 112 v26" stroke="#9ab"/></g>`,'راديو طوارئ: مقياس حرارة، بوصلة، ساعة، مصباح، هوائي، مقبض، لوح شمسي');
const FN=(k,part,v,o,ar,e2)=>({k,chip:[part,ar,e2],A:{t:[['s','The '+part],['v',v,'a'],['o',o+'.','k']],why:['الشيء المفرد (it) + الفعل + s.','A singular thing (it) + verb + s.']},B:{t:[['q','What does'],['s','the '+part],['v','do?','n']],why:['السؤال: What does + الشيء + do? (بلا s)','Question: What does + thing + do? (no s)']},qa:[[`What does the ${part} do?`,`It ${v} ${o}.`]]});
M('u3-l2',{title:['ماذا يفعل كل جزء؟ (المضارع البسيط)','What does each part do? (present simple)'],sub:['المس جزءاً من راديو الطوارئ لترى وظيفته.','Tap a part of the emergency radio to see its function.'],
 scene:S32,cols:4,sw:[['↔ السؤال','↔ The question'],['↔ الجواب','↔ The answer']],quiz:['ما الجزء المحاط بالأخضر؟','Which part is in green?'],
 items:[FN('thermo','thermometer','measures','temperature','مقياس الحرارة','thermometer'),FN('compass','compass','finds','North','البوصلة','compass'),FN('clock','clock','tells','the time','الساعة','clock'),FN('torch','torch','shines','a light','المصباح','torch'),FN('antenna','antenna','receives','radio signals','الهوائي','antenna'),FN('handle','handle','turns','the dynamo','المقبض','handle'),FN('solar','solar panel','makes','electricity','اللوح الشمسي','solar panel')].map(x=>{x.chip[0]={thermo:'thermo&shy;meter',solar:'solar panel'}[x.k]||x.chip[0];return x})});

/* ---------- 3.3 المواقع ---------- */
const POS=[['tl','at the top, on the left',0,0],['tm','at the top, in the middle',1,0],['tr','at the top, on the right',2,0],['ml','in the middle, on the left',0,1],['c','in the centre',1,1],['mr','in the middle, on the right',2,1],['bl','at the bottom, on the left',0,2],['bm','at the bottom, in the middle',1,2],['br','at the bottom, on the right',2,2]];
M('u3-l3',{title:['أين هو؟ المواقع','Where is it? Locations'],sub:['المس مربعاً في الشاشة لترى عبارة مكانه.','Tap a box on the screen to see the phrase for its place.'],
 ltr:1,scene:en=>svg(190,`<rect width="360" height="190" fill="#f3f6f8"/><rect x="60" y="10" width="240" height="170" rx="8" fill="#222"/>${POS.map(([k,_,c,r])=>`<g class="hl" data-d="${k}"><rect x="${70+c*76}" y="${20+r*52}" width="68" height="44" rx="6" fill="${k==='c'?yel:'#4c8fbf'}"/></g>`).join('')}`,'شاشة مقسمة إلى تسعة مربعات'),cols:3,
 sw:[['↔ بالنسبة لشيء آخر','↔ Next to another thing'],['↔ في الشاشة','↔ On the screen']],quiz:['أين المربع المحاط بالأخضر؟','Where is the box in green?'],
 items:POS.map(([k,p,c,r])=>{const nb=c<2?['to the left of','the box on its right']:['to the right of','the box on its left'];return {k,chip:[{tl:'↖',tm:'↑',tr:'↗',ml:'←',c:'●',mr:'→',bl:'↙',bm:'↓',br:'↘'}[k],'',''],A:{t:[['i',"It's"],['p',p+'.','a']],why:['المكان في المساحة كلها: at the top / at the bottom، on the left / on the right، in the middle.','The place in the whole area: at the top / at the bottom, on the left / on the right, in the middle.']},
  B:{t:[['i',"It's"],['p',nb[0],'n'],['o',nb[1]+'.']],why:['المكان بالنسبة لشيء آخر: to the left of / to the right of / above / below.','The place next to another thing: to the left of / to the right of / above / below.']},cue:null,qo:null}})});

/* ---------- 4.1 الاتجاهات و can ---------- */
const S41=en=>svg(200,`<rect width="360" height="200" fill="#e8f2f8"/>
 <g transform="translate(180,100)"><ellipse cx="0" cy="0" rx="34" ry="16" fill="${red}" stroke="${ink}" stroke-width="2"/><path d="M30 -4 h44 l6 -10" fill="none" stroke="${ink}" stroke-width="4"/><line x1="-50" y1="-22" x2="50" y2="-22" stroke="${ink}" stroke-width="3"/><line x1="0" y1="-16" x2="0" y2="-22" stroke="${ink}" stroke-width="3"/></g>
 <g class="hl" data-d="up">${arr(180,64,180,14)}${tx(196,24,'up',{a:'start'})}</g>
 <g class="hl" data-d="down">${arr(180,124,180,186)}${tx(196,182,'down',{a:'start'})}</g>
 <g class="hl" data-d="fwd">${arr(140,100,70,100)}${tx(90,90,'forwards')}</g>
 <g class="hl" data-d="back">${arr(270,100,330,100)}${tx(310,90,'backwards')}</g>
 <g class="hl" data-d="side">${arr(180,128,232,160,blu)}${tx(250,174,'sideways')}</g>
 <g class="hl" data-d="diag">${arr(140,70,90,30)}${tx(80,22,'diagonally')}</g>`,'مروحية وأسهم الاتجاهات');
const CN=(k,d,plane,ar,e2)=>({k,chip:[{up:'up',down:'down',fwd:'forwards',back:'backwards',side:'sideways',diag:'diagonally'}[k],ar,e2],A:{t:[['s','A helicopter'],['c','can','a'],['v','fly '+d+'.','k']]},B:{t:[['s','A plane'],['c',plane?'can':"can't",plane?'a':'n'],['v','fly '+d+'.','k']]},qa:[[`Can a plane fly ${d}?`,plane?'Yes, it can.':"No, it can't."]],cue:[`Can a plane fly ${d}?`,`Can a plane fly ${d}?`],qo:plane?['Yes, it can.',"No, it can't.",'Yes, it does.']:["No, it can't.",'Yes, it can.',"No, it doesn't."]});
M('u4-l1',{title:['الاتجاهات، و can / can\'t','Directions, and can / can\'t'],sub:['المس اتجاهاً: المروحية تطير فيه. والطائرة؟','Tap a direction: a helicopter can fly in it. What about a plane?'],
 scene:S41,cols:3,sw:[['↔ والطائرة؟','↔ And a plane?'],['↔ المروحية','↔ The helicopter']],quiz:['هل تستطيع الطائرة؟ أجب بإجابة قصيرة:','Can a plane do it? Give a short answer:'],
 items:[CN('up','straight up',0,'أعلى','up'),CN('down','straight down',0,'أسفل','down'),CN('fwd','forwards',1,'أمام','forwards'),CN('back','backwards',0,'خلف','backwards'),CN('side','sideways',0,'جانبياً','sideways'),CN('diag','diagonally up',1,'قطرياً','diagonally')].map(x=>{x.A.why=['can + الفعل الأصلي (بلا to وبلا s).','can + base verb (no to, no s).'];x.B.why=["can't = cannot: لا يستطيع.","can't = cannot: is not able to."];return x})});

/* ---------- 4.2 جهاز التحكم ---------- */
const S42=en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/><rect x="70" y="40" width="220" height="110" rx="20" fill="#d8dde2" stroke="${ink}" stroke-width="2"/><line x1="270" y1="40" x2="300" y2="6" stroke="${ink}" stroke-width="3"/>
 <circle cx="125" cy="95" r="26" fill="#fff" stroke="${ink}"/><circle cx="235" cy="95" r="26" fill="#fff" stroke="${ink}"/><circle cx="125" cy="95" r="6" fill="${ink}"/><circle cx="235" cy="95" r="6" fill="${ink}"/>${tx(125,160,'LH')}${tx(235,160,'RH')}
 <g class="hl" data-d="lu">${arr(125,90,125,66)}</g><g class="hl" data-d="ld">${arr(125,100,125,124,red)}</g><g class="hl" data-d="ll">${arr(120,95,96,95,blu)}</g>
 <g class="hl" data-d="ru">${arr(235,90,235,66)}</g><g class="hl" data-d="rd">${arr(235,100,235,124,red)}</g><g class="hl" data-d="rl">${arr(230,95,206,95,blu)}</g>`,'جهاز تحكم بعصوين يسار ويمين');
const ST=(k,s,dir,res,ar,e2)=>({k,chip:[s+' '+{u:'↑',d:'↓',l:'←'}[dir],ar,e2],A:{t:[['v',dir==='d'?'Pull':'Move','a'],['o','the '+s+' stick'],['d',{u:'up',d:'down',l:'to the left'}[dir]+'.','q']]},B:{t:[['s','The plane'],['v',res+'.','k']]},why:null});
M('u4-l2',{title:['العصا تتحرك… والطائرة تتحرك','Move the stick… and the plane moves'],sub:['المس حركة عصا لترى ماذا تفعل الطائرة.','Tap a stick movement to see what the plane does.'],
 scene:S42,cols:3,sw:[['↔ ماذا تفعل الطائرة؟','↔ What does the plane do?'],['↔ الحركة','↔ The movement']],quiz:['ما حركة العصا المحاطة؟','Which stick movement is in green?'],
 items:[ST('lu','LH','u','goes faster','أسرع','faster'),ST('ld','LH','d','goes more slowly','أبطأ','slower'),ST('ll','LH','l','turns left','ينعطف','turns'),ST('ru','RH','u','goes down','يهبط','descends'),ST('rd','RH','d','goes up','يصعد','ascends'),ST('rl','RH','l','rolls to the left','يميل','rolls')].map(x=>{x.A.why=['أمر: Move / Pull + العصا + الاتجاه.','Instruction: Move / Pull + the stick + the direction.'];x.B.why=['النتيجة بالمضارع البسيط: الطائرة + الفعل + s.','The result in the present simple: the plane + verb + s.'];return x})});

/* ---------- 4.3 الرافعة الشوكية و When you … ---------- */
const S43=en=>svg(180,`<rect width="360" height="180" fill="#f3f6f8"/><rect x="0" y="160" width="360" height="20" fill="#cfc6b6"/>
 <rect x="150" y="90" width="110" height="56" rx="8" fill="${yel}" stroke="${ink}" stroke-width="2"/><circle cx="175" cy="150" r="14" fill="${ink}"/><circle cx="240" cy="150" r="14" fill="${ink}"/><rect x="130" y="30" width="8" height="120" fill="${ink}"/>
 <g class="hl" data-d="up"><rect x="90" y="70" width="44" height="6" fill="${gry}"/>${arr(112,64,112,30)}</g>
 <g class="hl" data-d="down"><rect x="90" y="132" width="44" height="6" fill="${gry}"/>${arr(112,124,112,156,red)}</g>
 <g class="hl" data-d="tilt">${arr(96,100,82,84,blu)}${tx(70,110,'tilt',{fs:11})}</g>
 <g class="hl" data-d="rev">${arr(270,150,330,150,red)}${tx(300,140,'reverse',{fs:11})}</g>
 <g class="hl" data-d="stop"><rect x="270" y="40" width="70" height="30" rx="6" fill="#fff" stroke="${red}" stroke-width="2"/>${tx(305,60,'STOP',{c:red})}</g>
 <g class="hl" data-d="fast">${arr(140,20,80,20)}${tx(110,14,'faster',{fs:11})}</g>`,'رافعة شوكية وحركاتها');
const FK=(k,ctl,res,ar,e2)=>({k,chip:[{up:'up',down:'down',tilt:'tilt',rev:'reverse',stop:'stop',fast:'faster'}[k],ar,e2],A:{t:[['v',ctl+'.','a']]},B:{t:[['w','When you','q'],['v',ctl[0].toLowerCase()+ctl.slice(1)+',','a'],['r',res+'.','k']]}});
M('u4-l3',{title:['التحكم: When you … , …','Controls: When you … , …'],sub:['المس حركة الرافعة لترى أداة التحكم، ثم الجملة كاملة.','Tap a forklift movement to see the control, then the full sentence.'],
 scene:S43,cols:3,sw:[['↔ When you …','↔ When you …'],['↔ التعليمة','↔ The instruction']],quiz:['ما حركة الرافعة المحاطة؟','Which forklift movement is in green?'],
 items:[FK('up','Push lever B forwards','the fork moves up','للأعلى','up'),FK('down','Pull lever B backwards','the fork moves down','للأسفل','down'),FK('tilt','Pull lever C backwards','the fork tilts down','يميل','tilts'),FK('rev','Pull lever G backwards','the truck reverses','للخلف','reverses'),FK('stop','Press the brake pedal','the truck stops','يتوقف','stops'),FK('fast','Press the accelerator','the truck goes faster','أسرع','faster')].map(x=>{x.A.why=['أمر: الفعل + أداة التحكم + الاتجاه.','Instruction: verb + control + direction.'];x.B.why=['When you + الفعل، ثم النتيجة بالمضارع البسيط (s).','When you + verb, then the result in the present simple (s).'];return x})});

/* ---------- 4.4 مراجعة B ---------- */
M('u4-l4',{title:['مراجعة B: have و does و can','Review B: have, does and can'],sub:['المس قاعدة لترى مثالها، ثم حوّله.','Tap a rule to see its example, then change it.'],cols:3,
 sw:[['↔ الصيغة الأخرى','↔ The other form'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة الناقصة:','Choose the missing word:'],
 items:[{k:'have',chip:['Does … have','have','have'],A:{t:[['s','John'],['h','has','a'],['o','the spanners.']]},B:{t:[['d','Does','q'],['s','John'],['h','have','a'],['o','the spanners?']]},cue:['___ these bikes have strong brakes?','___ these bikes have strong brakes?'],qo:['Do','Does','Are']},
  {k:'neg',chip:["doesn't",'النفي','negative'],A:{t:[['s','It'],['h',"doesn't have",'n'],['o','scissors.']]},B:{t:[['s','It'],['h','has','a'],['o','a knife blade.']]},cue:["It ___ have batteries. It has a dynamo.","It ___ have batteries. It has a dynamo."],qo:["doesn't","don't","isn't"]},
  {k:'does',chip:['does','المضارع','present'],A:{t:[['s','The dynamo'],['v','produces','a'],['o','electricity.']]},B:{t:[['q','What'],['d','does','q'],['s','the dynamo'],['v','do?']]},cue:['The handle ___ the dynamo.','The handle ___ the dynamo.'],qo:['turns','turn','turning']},
  {k:'can',chip:["can't",'القدرة','ability'],A:{t:[['s','A rocket'],['c','can','a'],['v','fly straight up.']]},B:{t:[['s','It'],['c',"can't",'n'],['v','reverse.']]},cue:["Passenger planes ___ fly sideways.","Passenger planes ___ fly sideways."],qo:["can't","doesn't","isn't"]},
  {k:'art',chip:['a / an / some','الأدوات','articles'],A:{t:[['a','a','q'],['o','printer']]},B:{t:[['a','an','q'],['o','amplifier'],['s','· some nuts · a pair of pliers']]},cue:['___ AC adapter','___ AC adapter'],qo:['an','a','some']},
  {k:'short',chip:['Yes, I am.','الجواب القصير','short answer'],A:{t:[['q','Are you a technology student?']]},B:{t:[['a','Yes, I am.','a']]},cue:['Does the DVD work now? (✓)','Does the DVD work now? (✓)'],qo:['Yes, it does.','Yes, it is.','Yes, it can.']}]});

/* ---------- 5.1 حركة الماء وحروف الجر ---------- */
const S51=en=>svg(200,`<rect width="360" height="200" fill="#eef4f8"/>
 <rect x="40" y="110" width="110" height="60" fill="#2f4f8a" stroke="${ink}" transform="skewX(-20)"/>${tx(70,190,en?'solar panel':'اللوح الشمسي',{fs:10})}
 <rect x="200" y="30" width="90" height="56" rx="10" fill="#dfe6ec" stroke="${ink}" stroke-width="2"/>${tx(245,62,en?'tank':'الخزان',{fs:11})}
 <g class="hl" data-d="into">${arr(330,20,290,40,blu)}${tx(330,14,'into',{fs:12})}</g>
 <g class="hl" data-d="outof">${arr(245,86,245,130)}${tx(258,112,'out of',{fs:12,a:'start'})}</g>
 <g class="hl" data-d="through">${arr(120,140,40,140,red)}${tx(80,104,'through',{fs:12})}</g>
 <g class="hl" data-d="to">${arr(300,160,340,160)}${tx(320,152,'to',{fs:12})}<rect x="340" y="150" width="14" height="22" fill="${gry}"/></g>
 <g class="hl" data-d="from">${arr(160,90,200,60,red)}${tx(176,64,'from',{fs:12})}</g>
 <g class="hl" data-d="around"><path d="M300 60 a40 30 0 1 1 -10 -30" fill="none" stroke="${grn}" stroke-width="4"/>${tx(320,104,'around',{fs:12})}</g>`,'سخان شمسي وأسهم حركة الماء');
const PR=(k,p,s,syn,ar,e2)=>({k,chip:[p,ar,e2],A:{t:[['s','Water'],['v','flows'],['p',p,'a'],['o',s+'.','k']]},B:syn?{t:[['s','Water'],['v',syn,'n'],['o',s+'.','k']],why:['المعنى نفسه بفعل واحد.','The same meaning with one verb.']}:null});
M('u5-l1',{title:['أين يذهب الماء؟ حروف الجر','Where does the water go? Prepositions'],sub:['المس سهماً لترى حرف الجر الذي يصف حركة الماء.','Tap an arrow to see the preposition for the movement of the water.'],
 scene:S51,cols:3,sw:[['↔ بفعل واحد','↔ With one verb'],['↔ بحرف الجر','↔ With the preposition']],quiz:['ما حرف الجر للسهم المحاط؟','Which preposition is the arrow in green?'],
 items:[PR('into','into','the tank','enters','إلى داخل','into'),PR('outof','out of','the tank','leaves','إلى خارج','out of'),PR('through','through','the panel','','عبر','through'),PR('to','to','the shower','','إلى','to'),PR('from','from','the panel','','من','from'),PR('around','around','the system','','حول','around')].map(x=>{x.A.why=['flows + حرف الجر + المكان: حرف الجر يرسم الحركة.','flows + preposition + place: the preposition draws the movement.'];return x})});

/* ---------- 5.2 الدائرة الكهربائية ---------- */
const S52=en=>svg(190,`<rect width="360" height="190" fill="#f6f6f1"/><rect x="40" y="30" width="280" height="130" fill="none" stroke="${ink}" stroke-width="3"/>
 <g class="hl" data-d="bat"><rect x="30" y="80" width="20" height="30" fill="#f6f6f1"/><line x1="30" y1="86" x2="50" y2="86" stroke="${ink}" stroke-width="4"/><line x1="34" y1="96" x2="46" y2="96" stroke="${ink}" stroke-width="4"/>${tx(70,94,'+  −',{fs:11,a:'start'})}</g>
 <g class="hl" data-d="lamp"><circle cx="180" cy="30" r="14" fill="#fff" stroke="${ink}" stroke-width="3"/><path d="M170 20 l20 20 M190 20 l-20 20" stroke="${ink}" stroke-width="2"/></g>
 <g class="hl" data-d="sw"><rect x="300" y="80" width="40" height="30" fill="#f6f6f1"/><circle cx="320" cy="80" r="3" fill="${ink}"/><line x1="320" y1="80" x2="334" y2="104" stroke="${ink}" stroke-width="3"/><circle cx="320" cy="110" r="3" fill="${ink}"/></g>
 <g class="hl" data-d="fuse"><rect x="160" y="150" width="40" height="20" fill="#fff" stroke="${ink}" stroke-width="2"/><line x1="160" y1="160" x2="200" y2="160" stroke="${ink}" stroke-width="2"/></g>
 <g class="hl" data-d="cond"><line x1="60" y1="160" x2="140" y2="160" stroke="${grn}" stroke-width="6"/></g>
 <g class="hl" data-d="flow">${arr(220,30,280,30,red,3)}${arr(320,140,320,160,red,3)}${arr(140,160,90,160,red,3)}</g>`,'دائرة كهربائية: بطارية، مصباح، مفتاح، فاصمة، موصل، واتجاه التيار');
const CI=(k,name,v,o,ar,e2)=>({k,chip:[name,ar,e2],A:{t:[['s','The '+name],['v',v,'a'],['o',o+'.','k']]},B:{t:[['q','What does'],['s','the '+name],['v','do?','n']]},qa:[[`What does the ${name} do?`,`It ${v} ${o}.`]]});
M('u5-l2',{title:['الدائرة الكهربائية: الرموز ووظائفها','The electrical circuit: symbols and functions'],sub:['المس رمزاً في الدائرة لترى اسمه ووظيفته.','Tap a symbol in the circuit to see its name and function.'],
 scene:S52,cols:3,sw:[['↔ السؤال','↔ The question'],['↔ الجواب','↔ The answer']],quiz:['ما الرمز المحاط بالأخضر؟','Which symbol is in green?'],
 items:[CI('bat','battery','stores','electricity','البطارية','battery'),CI('lamp','lamp','gives','light','المصباح','lamp'),CI('sw','switch','opens and closes','the circuit','المفتاح','switch'),CI('fuse','fuse','protects','the circuit','الفاصمة','fuse'),CI('cond','conductor','carries','the current','الموصل','conductor')].concat([{k:'flow',chip:['current →','التيار','current'],A:{t:[['if','If','q'],['c','the switch is closed,','k'],['r','the current flows.','a']],why:['If + الحالة، ثم النتيجة: المفتاح المغلق يُكمل الدائرة.','If + the situation, then the result: a closed switch completes the circuit.']},B:{t:[['if','If','q'],['c','the switch is open,','k'],['r',"the current doesn't flow.",'n']],why:['المفتاح المفتوح يقطع الدائرة، فلا يسري التيار.','An open switch breaks the circuit, so no current flows.']}}]).map(x=>{x.A.why=x.A.why||['المضارع البسيط للوظيفة: الشيء + الفعل + s.','The present simple for a function: the thing + verb + s.'];x.B.why=x.B.why||['السؤال: What does … do?','Question: What does … do?'];return x})});

/* ---------- 5.3 نظام التبريد ---------- */
const S53=en=>svg(190,`<rect width="360" height="190" fill="#eef4f8"/>
 <rect x="30" y="60" width="110" height="90" rx="10" fill="#9aa3aa" stroke="${ink}" stroke-width="2"/>${tx(85,110,en?'engine':'المحرك',{fs:12,c:'#fff'})}
 <rect x="240" y="40" width="70" height="120" rx="6" fill="#c9d6df" stroke="${ink}" stroke-width="2"/>${[0,1,2,3,4,5,6,7].map(i=>`<line x1="244" y1="${50+i*14}" x2="306" y2="${50+i*14}" stroke="#8aa"/>`).join('')}${tx(275,178,en?'radiator':'المشع',{fs:11})}
 <g class="hl" data-d="hot"><path d="M140 70 Q190 30 240 52" fill="none" stroke="${red}" stroke-width="6"/>${tx(190,36,en?'hot ↑':'ساخن',{fs:11,c:red})}</g>
 <g class="hl" data-d="cool"><path d="M240 150 Q190 180 140 140" fill="none" stroke="${blu}" stroke-width="6"/>${tx(190,184,en?'cool ↓':'بارد',{fs:11,c:blu})}</g>
 <g class="hl" data-d="pump"><circle cx="150" cy="140" r="12" fill="${yel}" stroke="${ink}"/></g>
 <g class="hl" data-d="thermo"><rect x="140" y="62" width="16" height="16" fill="#fff" stroke="${ink}"/>${tx(148,74,'T',{fs:10})}</g>
 <g class="hl" data-d="fan"><circle cx="335" cy="100" r="18" fill="#fff" stroke="${ink}"/><path d="M335 100 l0 -16 M335 100 l14 8 M335 100 l-14 8" stroke="${ink}" stroke-width="3"/></g>`,'نظام تبريد السيارة: المحرك والمشع والمضخة ومنظم الحرارة والمروحة');
M('u5-l3',{title:['نظام التبريد: من يفعل ماذا؟','The cooling system: what does what?'],sub:['المس جزءاً من نظام التبريد لترى ماذا يفعل.','Tap a part of the cooling system to see what it does.'],
 scene:S53,cols:3,sw:[['↔ السؤال','↔ The question'],['↔ الجواب','↔ The answer']],quiz:['ما الجزء المحاط بالأخضر؟','Which part is in green?'],
 items:[CI('pump','water pump','pushes','water around the engine','المضخة','pump'),CI('thermo','thermostat','controls','the temperature of the water','منظم الحرارة','thermostat'),CI('fan','fan','blows','air onto the radiator','المروحة','fan'),{k:'hot',chip:['hot water','الماء الساخن','hot water'],A:{t:[['s','Hot water'],['v','rises','a'],['o','to the top.','k']]},B:{t:[['s','Hot water'],['v','flows','a'],['o','into the radiator.','k']]}},{k:'cool',chip:['cool water','الماء البارد','cool water'],A:{t:[['s','Cool water'],['v','sinks','a'],['o','to the bottom.','k']]},B:{t:[['s','Cool water'],['v','enters','a'],['o','the engine again.','k']]}}].map(x=>{x.A.why=x.A.why||['المضارع البسيط يصف كيف يعمل النظام دائماً.','The present simple describes how the system always works.'];x.B.why=x.B.why||['المضارع البسيط يصف كيف يعمل النظام دائماً.','The present simple describes how the system always works.'];if(x.k==='thermo')x.chip[0]='thermostat';if(x.k==='pump')x.chip[0]='pump';return x})});

/* ---------- 6.1 المضارع المستمر: ماذا يحدث الآن؟ ---------- */
const S61=en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/>
 <g class="hl" data-d="strike"><rect x="20" y="110" width="90" height="12" fill="${gry}"/><rect x="58" y="40" width="10" height="50" fill="#8b5a2b" transform="rotate(-30 63 65)"/><rect x="40" y="40" width="40" height="18" fill="${ink}" transform="rotate(-30 63 65)"/>${tx(65,146,'strike')}</g>
 <g class="hl" data-d="stretch"><path d="M130 80 h90" stroke="#a0522d" stroke-width="6"/>${arr(150,80,124,80,red,3)}${arr(200,80,226,80,red,3)}${tx(175,146,'stretch')}</g>
 <g class="hl" data-d="bend"><path d="M250 110 q40 -50 80 0" fill="none" stroke="${ink}" stroke-width="7"/>${tx(290,146,'bend')}</g>
 <g class="hl" data-d="heat"><rect x="140" y="20" width="60" height="16" fill="${gry}"/><path d="M150 50 q6 -10 0 -14 M170 50 q6 -10 0 -14 M190 50 q6 -10 0 -14" stroke="${red}" stroke-width="3" fill="none"/>${tx(220,32,'heat',{a:'start'})}</g>`,'اختبار المواد: ضرب، شدّ، ثني، تسخين');
const PC=(k,v,ing,o,ar,e2)=>({k,chip:[v,ar,e2],A:{t:[['s',"He's"],['v',ing,'a'],['o',o+'.','k']],why:['am / is / are + ing: يحدث الآن.','am / is / are + ing: it is happening now.']},B:{t:[['s','The '+o.replace(/^the /,'')],['n',"isn't",'n'],['v','breaking.']],why:["النفي: isn't + ing.","Negative: isn't + ing."]},qa:[[`Is he ${ing} ${o}?`,'Yes, he is.']],cue:[`He's ___ ${o}. (${v})`,`He's ___ ${o}. (${v})`],qo:[ing,v+'s',v]});
M('u6-l1',{title:['المضارع المستمر: ماذا يحدث الآن؟','Present continuous: what is happening now?'],sub:['المس اختباراً لترى ما يفعله المحاضر الآن.','Tap a test to see what the lecturer is doing now.'],
 scene:S61,cols:4,sw:[['↔ النفي','↔ Negative'],['↔ المثبت','↔ Positive']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[PC('strike','strike','striking','the plate','يضرب','strike'),PC('stretch','stretch','stretching','the rope','يشدّ','stretch'),PC('bend','bend','bending','the bar','يثني','bend'),PC('heat','heat','heating','the plastic','يسخّن','heat')].map(x=>{if(x.k==='strike')x.why2=1;return x})});

/* ---------- 6.2 المواد وخصائصها ---------- */
const S62=en=>svg(170,`<rect width="360" height="170" fill="#eef1f4"/><path d="M20 110 L120 80 L260 80 L330 100 L330 120 L20 124z" fill="${yel}" stroke="${ink}" stroke-width="2"/>
 <g class="hl" data-d="nose"><path d="M20 110 L80 92 L80 124 L20 124z" fill="#e8d36a" stroke="${grn}" stroke-width="3"/>${tx(40,80,'nose cone',{fs:10})}</g>
 <g class="hl" data-d="tyre"><circle cx="90" cy="130" r="22" fill="#222"/><circle cx="270" cy="130" r="22" fill="#222"/>${tx(90,166,'tyres',{fs:10})}</g>
 <g class="hl" data-d="wheel"><circle cx="90" cy="130" r="9" fill="#ccc"/><circle cx="270" cy="130" r="9" fill="#ccc"/>${tx(270,166,'wheels',{fs:10})}</g>
 <g class="hl" data-d="frame"><rect x="140" y="88" width="100" height="10" fill="#555"/>${tx(190,74,'frame',{fs:10})}</g>
 <g class="hl" data-d="spoiler"><rect x="300" y="60" width="44" height="8" fill="#e8d36a" stroke="${ink}"/><line x1="320" y1="68" x2="320" y2="100" stroke="${ink}" stroke-width="3"/>${tx(322,52,'spoiler',{fs:10})}</g>`,'سيارة سباق: مقدمة، إطارات، عجلات، هيكل، جناح خلفي');
const MT=(k,part,pl,mat,prop,ar,e2)=>({k,chip:[part,ar,e2],A:{t:[['s',(pl?'The ':'The ')+part],['b',pl?'are made of':'is made of','q'],['m',mat+'.','k']],why:pl?['جمع: What are they made of? — They\'re made of …','Plural: What are they made of? — They\'re made of …']:['مفرد: What\'s it made of? — It\'s made of …','Singular: What\'s it made of? — It\'s made of …']},B:{t:[['b','Because'],['s',pl?"they're":"it's"],['p',prop+'.','a']],why:['لماذا هذه المادة؟ بسبب خصائصها.','Why this material? Because of its properties.']},qa:[[`Why do they use ${mat}?`,`Because it's ${prop}.`]].map(q=>pl?[q[0],`Because it's ${prop}.`]:q)});
M('u6-l2',{title:['من أي مادة؟ ولماذا؟','What is it made of? Why?'],sub:['المس جزءاً من سيارة السباق لترى مادته وخصائصها.','Tap a part of the racing car to see its material and properties.'],
 scene:S62,cols:3,sw:[['↔ لماذا؟','↔ Why?'],['↔ المادة','↔ The material']],quiz:['ما الجزء المحاط بالأخضر؟','Which part is in green?'],
 items:[MT('nose','nose cone',0,'fibreglass','strong and light','المقدمة','nose cone'),MT('tyre','tyres',1,'a rubber composite','tough','الإطارات','tyres'),MT('wheel','wheels',1,'a light aluminium alloy','strong and light','العجلات','wheels'),MT('frame','frame',0,'cromoly, a steel alloy','light, tough and rigid','الهيكل','frame'),MT('spoiler','spoiler',0,'polystyrene coated with fibreglass','light and hard','الجناح','spoiler')]});

/* ---------- 6.3 العناوين: الرموز ---------- */
const SY=(k,sym,word,ex,exs,qo)=>({k,chip:[sym,word,word],A:{t:[['s',sym,'k'],['e','=','q'],['w',word,'a']],say:word,why:[`الرمز ${sym} نقرؤه ${word}.`,`We say the symbol ${sym} as ${word}.`]},B:{t:[['x',ex,'k']],say:exs,why:[`نقرؤه: ${exs}`,`We say it: ${exs}`]},cue:[sym,sym],qo});
M('u6-l3',{title:['قراءة البريد والمواقع','Reading email and web addresses'],sub:['المس رمزاً لترى كيف نقرؤه، ثم شاهده في عنوان.','Tap a symbol to see how we say it, then see it in an address.'],cols:3,
 sw:[['↔ في عنوان','↔ In an address'],['↔ الرمز','↔ The symbol']],quiz:['كيف تقرأ هذا الرمز؟','How do you say this symbol?'],
 items:[SY('at','@','at','waleed@sports.com','waleed at sports dot com',['at','dot','dash']),SY('dot','.','dot','adam@city.co.uk','adam at city dot co dot U K',['dot','at','slash']),SY('us','_','underscore','sales_one','sales underscore one',['underscore','dash','dot']),SY('dash','-','dash','back-of-the.net','back dash of dash the dot net',['dash','underscore','slash']),SY('sl','/','forward slash','toyota.com/support','toyota dot com forward slash support',['forward slash','dash','dot'])]});

/* ---------- 6.4 مراجعة C ---------- */
M('u6-l4',{title:['مراجعة C: الأزمنة والتعليمات','Review C: tenses and instructions'],sub:['المس قاعدة لترى مثالها، ثم حوّله.','Tap a rule to see its example, then change it.'],cols:3,
 sw:[['↔ الصيغة الأخرى','↔ The other form'],['↔ رجوع','↔ Back']],quiz:['اختر الكلمة الناقصة:','Choose the missing word:'],
 items:[{k:'imp',chip:['Grip','الأمر','instruction'],A:{t:[['v','Grip','a'],['o','the nail.']]},B:{t:[['v','Use','a'],['o','a pair of pliers.']]},cue:['___ the goggles.','___ the goggles.'],qo:['Put on','Puts on','Putting on']},
  {k:'ps',chip:['flows','المضارع البسيط','present simple'],A:{t:[['s','Water'],['v','flows','a'],['o','into the panel.']]},B:{t:[['s','Hot water'],['v',"doesn't sink",'n'],['o','It rises.']]},cue:['Water ___ at 100°C.','Water ___ at 100°C.'],qo:['boils','boil','boiling']},
  {k:'pc',chip:["'m pressing",'المستمر','continuous'],A:{t:[['s',"I'm"],['v','pressing','a'],['o','the pedal.']]},B:{t:[['s','The truck'],['v',"isn't going",'n'],['o','faster.']]},cue:["He ___ the lever back.","He ___ the lever back."],qo:["'s pulling","pulls","'s pull"]},
  {k:'if',chip:['If','الشرط','condition'],A:{t:[['if','If','q'],['c','you heat water to 100°C,','k'],['r','it boils.','a']]},B:{t:[['if','If','q'],['c','you cool water to 0°C,','k'],['r','it freezes.','a']]},cue:['If you pull a copper wire very hard, it ___.','If you pull a copper wire very hard, it ___.'],qo:['stretches','stretch','stretching']},
  {k:'made',chip:['made of','المادة','material'],A:{t:[['s',"What's"],['o','the nose cone'],['m','made of?','q']]},B:{t:[['s',"It's"],['m','made of','q'],['o','fibreglass.','k']]},cue:['Sunglasses are made of ___.','Sunglasses are made of ___.'],qo:['polycarbonate','rubber','steel']},
  {k:'opp',chip:['tough ≠ brittle','الأضداد','opposites'],A:{t:[['a','tough','a'],['x','≠','q'],['b','brittle','n']]},B:{t:[['a','flexible','a'],['x','≠','q'],['b','rigid','n']]},cue:['hard ≠ ___','hard ≠ ___'],qo:['soft','heavy','weak']}]});
})(window);

/* «شاهد الفكرة» لدروس انجل-103. القالب في vx.js (VX.make) */
(function(G){/* ---------- رسوم مشتركة احترافية (سيارة سباق، فريق الصيانة، شاحنة، أبعاد) — تستعملها vx103 و nh103 و u1 ---------- */
G.VXA=(()=>{const ink='#2c3a43';
const wheel=(cx,cy,r=24,nut='#f1b33c')=>`<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="#1a1a1a"/><circle cx="${cx}" cy="${cy}" r="${r-4}" fill="none" stroke="#3a3a3a" stroke-width="2"/><path d="M${cx-r+5} ${cy} A${r-5} ${r-5} 0 0 1 ${cx} ${cy-r+5}" stroke="#e8c13a" stroke-width="2" fill="none" opacity=".8"/><circle cx="${cx}" cy="${cy}" r="${r*0.56}" fill="#c9d1d6"/>${[0,72,144,216,288].map(a=>`<line x1="${cx}" y1="${cy}" x2="${(cx+r*0.52*Math.cos(a*Math.PI/180)).toFixed(1)}" y2="${(cy+r*0.52*Math.sin(a*Math.PI/180)).toFixed(1)}" stroke="#7d878e" stroke-width="3"/>`).join('')}<circle cx="${cx}" cy="${cy}" r="${r*0.22}" fill="${nut}" stroke="${ink}" stroke-width="1.5"/></g>`;
/* سيارة سباق جانبية تتجه يميناً؛ الأرض y=0، العجلتان عند x=58 و 242 (نسبي) */
const raceCar=(o={})=>{const c=o.c||'#c4553f';return `<g transform="translate(${o.x||0},${o.y||0}) scale(${o.s||1})">
 <rect x="22" y="-18" width="262" height="7" rx="3" fill="#2b2b2b"/>
 <rect x="0" y="-92" width="46" height="9" rx="3" fill="${ink}"/><rect x="2" y="-80" width="40" height="6" rx="3" fill="${ink}"/><rect x="8" y="-92" width="9" height="62" rx="2" fill="${c}" stroke="${ink}" stroke-width="1.5"/>
 <path d="M18 -26 L22 -44 L70 -48 Q96 -50 108 -60 L124 -76 Q130 -84 142 -82 L150 -70 L198 -62 L262 -50 Q292 -44 306 -30 L306 -24 Z" fill="${c}" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/>
 <path d="M30 -36 L120 -40 L262 -40 Q288 -36 300 -30" stroke="#fff" stroke-width="4" fill="none" opacity=".85"/>
 <path d="M126 -76 L134 -94 L150 -92 L146 -78Z" fill="${ink}"/>
 <ellipse cx="170" cy="-64" rx="22" ry="6" fill="#1e2a31"/>
 <circle cx="166" cy="-70" r="10" fill="#f1b33c" stroke="${ink}" stroke-width="1.5"/><rect x="167" y="-74" width="10" height="5" rx="2" fill="#1e2a31"/>
 <path d="M146 -66 Q166 -90 192 -64" stroke="${ink}" stroke-width="3.5" fill="none"/>
 <rect x="262" y="-16" width="54" height="6" rx="3" fill="${ink}"/><rect x="308" y="-26" width="8" height="18" rx="2" fill="${c}" stroke="${ink}" stroke-width="1.2"/>
 ${o.noWheels?'':wheel(58,-26)+wheel(242,-26)}${o.extra||''}</g>`};
/* عضو فريق الصيانة: بدلة وخوذة، يتجه يميناً (f=-1 يساراً)؛ الأرض y=0 */
const crew=(x,y,c='#2f6b8f',s=1,f=1,pose='')=>`<g transform="translate(${x},${y}) scale(${s*f},${s})">
 <rect x="-9" y="-30" width="8" height="30" rx="4" fill="${ink}"/><rect x="2" y="-30" width="8" height="30" rx="4" fill="${ink}"/>
 <rect x="-11" y="-64" width="22" height="38" rx="9" fill="${c}"/><rect x="-11" y="-44" width="22" height="5" fill="#fff" opacity=".7"/>
 ${pose==='reach'?`<path d="M2 -56 L22 -46" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`:`<path d="M0 -56 L8 -36" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`}
 <circle cx="0" cy="-74" r="11" fill="#e7ecef" stroke="${ink}" stroke-width="1.5"/><path d="M2 -78 h9 v7 h-9z" fill="#1e2a31"/></g>`;
const gun=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-46 -6 H-6 V6 H-46Z" fill="#f1b33c" stroke="${ink}" stroke-width="1.5"/><rect x="-6" y="-4" width="8" height="8" fill="#7d878e"/><path d="M-38 6 L-34 22 H-26 L-28 6Z" fill="${ink}"/><path d="M-46 0 Q-70 0 -72 30" stroke="#222" stroke-width="3" fill="none"/></g>`;
const jack=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M0 0 L46 -48" stroke="${ink}" stroke-width="6" stroke-linecap="round"/><rect x="40" y="-60" width="18" height="10" rx="4" fill="#2f6b8f"/><circle cx="6" cy="-4" r="6" fill="#222"/><rect x="-14" y="-14" width="20" height="8" rx="2" fill="#2f6b8f"/></g>`;
const nozzle=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-120 -120 Q-40 -110 -14 -12" stroke="#222" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="-22" y="-16" width="20" height="14" rx="3" fill="#9aa3aa" stroke="${ink}" stroke-width="1.5"/><rect x="-2" y="-12" width="8" height="6" fill="${ink}"/></g>`;

/* شاحنة جانبية تتجه يميناً: الأرض y=0، الطول L والارتفاع H بالبكسل */
const lorry=(x,y,L,H,c='#c4553f',o={})=>{const cab=Math.min(54,L*0.26),bx=L-cab-4;return `<g transform="translate(${x},${y})">
 <rect x="0" y="${-H}" width="${bx}" height="${H-16}" rx="4" fill="${c}" stroke="${ink}" stroke-width="2"/>
 <line x1="6" y1="${-H+10}" x2="${bx-6}" y2="${-H+10}" stroke="#fff" stroke-width="2" opacity=".5"/>
 <path d="M${bx+4} -16 V${-H*0.72} Q${bx+4} ${-H*0.8} ${bx+12} ${-H*0.8} H${L-14} L${L} ${-H*0.5} V-16Z" fill="#e8ecef" stroke="${ink}" stroke-width="2"/>
 <path d="M${L-16} ${-H*0.76} L${L-3} ${-H*0.52} H${bx+18} V${-H*0.76}Z" fill="#9fc3d8" stroke="${ink}" stroke-width="1.2"/>
 <rect x="-2" y="-18" width="${L+2}" height="6" rx="2" fill="#3a3a3a"/>
 ${wheel(L*0.16,-12,12)}${wheel(L*0.36,-12,12)}${wheel(L-cab*0.5,-12,12)}${o.lab?`<text x="${bx/2}" y="${-H/2+4}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="13" text-anchor="middle" fill="#fff">${o.lab}</text>`:''}</g>`};
/* شاحنة من الأمام: عرض W وارتفاع H */
const lorryFront=(cx,y,W,H,c='#c4553f')=>`<g transform="translate(${cx},${y})"><rect x="${-W/2}" y="${-H}" width="${W}" height="${H*0.55}" rx="4" fill="${c}" stroke="${ink}" stroke-width="2"/><rect x="${-W/2+4}" y="${-H*0.45}" width="${W-8}" height="${H*0.38}" rx="4" fill="#e8ecef" stroke="${ink}" stroke-width="2"/><rect x="${-W/2+10}" y="${-H*0.42}" width="${W-20}" height="${H*0.16}" rx="3" fill="#9fc3d8"/><rect x="${-W/2-2}" y="-12" width="${W+4}" height="8" rx="3" fill="#3a3a3a"/><rect x="${-W/2+2}" y="-6" width="12" height="6" fill="#1a1a1a"/><rect x="${W/2-14}" y="-6" width="12" height="6" fill="#1a1a1a"/></g>`;
const dimV=(x,y1,y2,t,c,side=1)=>`<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${c}" stroke-width="2.5"/><path d="M${x} ${y1} l-5 9 h10z M${x} ${y2} l-5 -9 h10z" fill="${c}"/><text x="${x+side*8}" y="${(y1+y2)/2+5}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="14" text-anchor="${side>0?'start':'end'}" fill="${c}">${t}</text>`;
const dimH=(x1,x2,y,t,c,up=1)=>`<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${c}" stroke-width="2.5"/><path d="M${x1} ${y} l9 -5 v10z M${x2} ${y} l-9 -5 v10z" fill="${c}"/><text x="${(x1+x2)/2}" y="${y-up*7+(up<0?12:0)}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="14" text-anchor="middle" fill="${c}">${t}</text>`;


return {ink,wheel,raceCar,crew,gun,jack,nozzle,lorry,lorryFront,dimV,dimH}})();
const V=G.VX;if(!V)return;
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

/* ---------- 1.1 فريق الصيانة ---------- */
const S11=en=>{const L=window.VXA;
const T2=(x,y,t,c='#2c3a43',fs=11)=>`<text x="${x}" y="${y}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="${fs}" text-anchor="middle" fill="${c}">${t}</text>`;
const lab=(x,y,t,lx,ly)=>`<line x1="${x}" y1="${y+4}" x2="${lx}" y2="${ly}" stroke="#2c3a43" stroke-width="1.2"/><rect x="${x-t.length*3.6-6}" y="${y-12}" width="${t.length*7.2+12}" height="17" rx="8" fill="#fff" stroke="#2c3a43" stroke-width="1"/>${T2(x,y+1,t)}`;
const G=160,X=34,s=.82,P=(rx,ry)=>[X+rx*s,G+ry*s];
 const [gx,gy]=P(58,-26),[jx,jy]=P(300,-2),[sx,sy]=P(98,-40),[fx,fy]=P(112,-46);
 return svg(200,`<rect width="360" height="200" fill="#e9eef1"/><rect y="${G}" width="360" height="40" fill="#8d969c"/><rect y="${G+16}" width="360" height="3" fill="#fff" opacity=".6"/>
 ${L.raceCar({x:X,y:G,s})}
 <g class="hl" data-d="gun">${L.gun(gx,gy,.85)}${lab(42,G+30,'wheel gun',gx-20,gy+6)}</g>
 <g class="hl" data-d="jack">${L.jack(jx,jy,.8)}${lab(318,G+30,'jack',jx+10,jy-6)}</g>
 <g class="hl" data-d="nozzle">${L.nozzle(sx+2,sy+4,.8)}${lab(60,30,'hose + nozzle',60,48)}</g>
 <g class="hl" data-d="socket"><rect x="${sx-6}" y="${sy-5}" width="12" height="10" rx="2" fill="#111"/>${lab(150,40,'socket',sx,sy-6)}</g>
 <g class="hl" data-d="flap"><rect x="${fx}" y="${fy}" width="12" height="12" rx="2" fill="#fff" stroke="#2c3a43" stroke-width="1.5" transform="rotate(35 ${fx} ${fy})"/>${lab(215,58,'flap',fx+6,fy)}</g>`,'سيارة سباق وأدوات فريق الصيانة')};
const T11=(k,chip,ins,fn,ar,e2)=>({k,chip:[chip,ar,e2],A:{t:S(ins.split(' | '),['a','k','']),why:['قائمة التعليمات: فعل الأمر في أول السطر.','A checklist: the instruction verb starts the line.']},B:{t:S(fn.split(' | '),['','a','k']),why:['وظيفة الأداة بالمضارع البسيط.','The tool\'s function in the present simple.']}});
M('u1-l1',{title:['فريق الصيانة: التعليمات والأدوات','The pit crew: instructions and tools'],sub:['المس أداة لترى التعليمة التي تُستعمل فيها، ثم وظيفتها.','Tap a tool to see the instruction for it, then its function.'],
 scene:S11,cols:3,sw:[['↔ وظيفة الأداة','↔ The tool\'s function'],['↔ التعليمة','↔ The instruction']],quiz:['ما الأداة المحاطة بالأخضر؟','Which tool is in green?'],
 items:[T11('gun','wheel gun','Remove | the wheel nut | with the wheel gun.','The wheel gun | removes | the wheel nut.','مسدس العجلات','wheel gun'),T11('jack','jack','Lift | the car | with the jack.','The jack | lifts | the car.','الرافعة','jack'),T11('nozzle','nozzle','Put | the nozzle | into the socket.','The hose | carries | the fuel.','الفوهة','nozzle'),T11('flap','flap','Open | the flap.','The flap | covers | the socket.','الغطاء','flap'),T11('socket','socket','Remove | the nozzle | from the socket.','The fuel | goes into | the socket.','المقبس','socket')]});

/* ---------- 1.2 الأفعال المركبة ومكان الضمير ---------- */
const PV=(k,v,p,o,pr,ar,e2)=>({k,chip:[v+' '+p,ar,e2],A:{t:[['v',v[0].toUpperCase()+v.slice(1),'a'],['p',p,'a'],['o',o+'.','k']],why:['الفعل المركب + الاسم: الاسم بعد الكلمتين (أو بينهما).','Phrasal verb + noun: the noun after both words (or between them).']},B:{t:[['v',v[0].toUpperCase()+v.slice(1),'a'],['o',pr,'n'],['p',p+'.','a']],why:['مع الضمير (it / them): الضمير بين الكلمتين دائماً.','With a pronoun (it / them): the pronoun always goes between the two words.']},cue:[`${o} → ${v} ___`,`${o} → ${v} ___`],qo:[pr+' '+p,p+' '+pr,pr]});
M('u1-l2',{title:['الأفعال المركبة: أين يذهب it؟','Phrasal verbs: where does it go?'],sub:['المس فعلاً، ثم حوّل الاسم إلى ضمير: شاهد الضمير يدخل بين الكلمتين.','Tap a verb, then change the noun to a pronoun: watch the pronoun go between the two words.'],cols:3,
 sw:[['↔ بالضمير it / them','↔ With it / them'],['↔ بالاسم','↔ With the noun']],quiz:['اختر الترتيب الصحيح:','Choose the correct order:'],
 items:[PV('off','take','off','the wheel','it','ينزع','take off'),PV('on','put','on','the new wheel','it','يركّب','put on'),PV('up','lift','up','the car','it','يرفع','lift up'),PV('pick','pick','up','the tools','them','يلتقط','pick up'),PV('down','put','down','the jack','it','يضع','put down'),PV('in','plug','in','the cable','it','يوصل','plug in')]});

/* ---------- 1.3 How do you …? by + ing ---------- */
const BY=(k,q,ans,tool,ar,e2,qo)=>({k,chip:[q,ar,e2],A:{t:[['h','How do you','q'],['v',q+'?','k']]},B:{t:[['b','By','a'],['v',ans,'a'],...(tool?[['u','using','n'],['t',tool+'.','k']]:[])].map((z,i,a)=>{if(!tool&&i===a.length-1)z[1]+='.';return z})},qa:[[`How do you ${q}?`,`By ${ans}${tool?' using '+tool:''}.`]],cue:[`How do you ${q}?`,`How do you ${q}?`],qo});
M('u1-l3',{title:['How do you …? By + ing','How do you …? By + ing'],sub:['المس عملاً لترى السؤال عن طريقته، ثم الجواب بـ by + ing.','Tap a task to see the question about how to do it, then the answer with by + ing.'],cols:3,
 sw:[['↔ الجواب','↔ The answer'],['↔ السؤال','↔ The question']],quiz:['اختر الجواب الصحيح:','Choose the correct answer:'],
 items:[BY('start','start the engine','pressing the button','','يشغّل','start',['By pressing the button.','By press the button.','To pressing the button.']),BY('open','open the flap','turning the handle','','يفتح','open',['By turning the handle.','By turn the handle.','For turning the handle.']),BY('lift','lift the car','pushing the lever','a jack',' يرفع','lift',['By pushing the lever.','By push the lever.','With pushing lever.']),BY('fix','fix the wheel','tightening the nut','a wheel gun','يثبّت','fix',['By tightening the nut.','By tighten the nut.','By tightened the nut.'])].map(x=>{x.A.why=['How do you + الفعل؟ = ما الطريقة؟','How do you + verb? = what is the method?'];x.B.why=['By + فعل بـ ing، والأداة بعد using.','By + verb with ing, and the tool after using.'];return x})});

/* ---------- 2.1 الروتين على المنصة ---------- */
const RG=en=>svg(170,`<rect width="360" height="170" fill="#bfe0f2"/><rect x="0" y="120" width="360" height="50" fill="#5d9cc6"/>${[90,250].map(x=>`<rect x="${x}" y="90" width="12" height="80" fill="${gry}"/>`).join('')}<rect x="60" y="70" width="230" height="22" fill="#777" stroke="${ink}"/><path d="M200 70 l20 -60 l20 60" fill="none" stroke="${red}" stroke-width="4"/>
 <g class="hl" data-d="check"><circle cx="100" cy="60" r="8" fill="${yel}"/>${man(100,62,grn,.6)}${tx(100,22,en?'checks pumps':'يفحص المضخات',{fs:10})}</g>
 <g class="hl" data-d="write">${man(160,62,blu,.6)}${tx(160,22,en?'writes reports':'يكتب تقارير',{fs:10})}</g>
 <g class="hl" data-d="repair">${man(270,62,red,.6)}<rect x="276" y="52" width="14" height="6" fill="${ink}"/>${tx(286,22,en?'today: repairing':'اليوم: يصلح',{fs:10,c:red})}</g>`,'منصة نفط بحرية وعمال');
M('u2-l1',{title:['العادة أم الآن؟','Routine or now?'],sub:['المس عاملاً على المنصة: ماذا يفعل عادة؟ وماذا يفعل الآن؟','Tap a worker on the rig: what does he usually do? What is he doing now?'],
 scene:RG,cols:3,sw:[['↔ الآن','↔ Now'],['↔ عادة','↔ Usually']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('check',['checks','الفحص','checks'],['He','usually','checks','the pumps.'],['','q','a',''],["He's",'checking','the pressure','now.'],['','n','','q'],['He ___ the pumps every morning.','He ___ the pumps every morning.'],['checks','is checking','check'],[['العادة: المضارع البسيط (s).','A routine: the present simple (s).'],['الآن: is + ing.','Now: is + ing.']]),
  RV('write',['writes','التقارير','reports'],['She','writes','a report','every day.'],['','a','','q'],["She's",'writing','the safety report','at the moment.'],['','n','','q'],["She ___ a report at the moment.","She ___ a report at the moment."],["'s writing",'writes','write'],[['every day: البسيط.','every day: present simple.'],['at the moment: المستمر.','at the moment: continuous.']]),
  RV('repair',['repairing','مؤقت','temporary'],['He','works','in the control room.'],['','a',''],['This week he',"'s working",'on the drill floor.'],['','n',''],['This week he ___ on the drill floor.','This week he ___ on the drill floor.'],["'s working",'works','work'],[['الوظيفة الدائمة: البسيط.','The permanent job: present simple.'],['وضع مؤقت (this week): المستمر.','A temporary situation (this week): continuous.']])]});

/* ---------- 2.2 الخطط ---------- */
M('u2-l2',{title:['الخطط: going to والمضارع المستمر','Plans: going to and the present continuous'],sub:['المس خطة لترى كيف نقولها.','Tap a plan to see how we say it.'],cols:2,
 sw:[['↔ صيغة أخرى','↔ Another form'],['↔ رجوع','↔ Back']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('going',['going to','نية','intention'],["I'm",'going to','visit','the rig next month.'],['','a','k',''],['I','intend to','visit','the rig.'],['','n','k',''],["I'm ___ visit the factory.","I'm ___ visit the factory."],['going to','go to','going'],[['going to + فعل أصلي = نية أو خطة.','going to + base verb = an intention or plan.'],['intend to / want to / hope to + فعل.','intend to / want to / hope to + verb.']]),
  RV('meet',['arrangement','موعد مرتب','arrangement'],["I'm",'meeting','Mr Khan','on Monday at 10.'],['','a','','q'],['Are you','free','on Tuesday?'],['q','',''],["I ___ the engineers on Friday. (arranged)","I ___ the engineers on Friday. (arranged)"],["'m meeting",'meet','meeting'],[['موعد مرتب مع وقت: المضارع المستمر.','An arrangement with a time: the present continuous.'],['السؤال عن الموعد.','Asking about a time.']]),
  RV('hope',['hope to','أمل','hope'],['We','hope to','finish','by June.'],['','a','k',''],['We','want to','finish','by June.'],['','n','k',''],['We hope ___ finish soon.','We hope ___ finish soon.'],['to','for','—'],[['hope to + فعل.','hope to + verb.'],['want to + فعل.','want to + verb.']]),
  RV('email',['Dear …','البريد الرسمي','formal email'],['Dear','Mr Khan,'],['a','k'],['Best regards,','Ali'],['n','k'],['A formal email starts with: ___','A formal email starts with: ___'],['Dear Mr Khan,','Hi Khan!','Hey,'],[['بداية رسمية.','A formal opening.'],['نهاية رسمية.','A formal ending.']])]});

/* ---------- 2.3 السيرة الذاتية ---------- */
const CVY=[['tech',2005,'worked','work','as a technician'],['study',2008,'studied','study','engineering'],['left',2012,'left','leave','the company'],['became',2015,'became','become','a manager']];
M('u2-l3',{title:['السيرة الذاتية: الماضي البسيط','The CV: the past simple'],sub:['المس سنة لترى ما حدث فيها، ثم السؤال عنه.','Tap a year to see what happened, then the question about it.'],
 scene:en=>svg(110,`<rect width="360" height="110" fill="#f6f2ea"/><line x1="20" y1="60" x2="340" y2="60" stroke="${ink}" stroke-width="3"/>${CVY.map(([k,y],i)=>`<g class="hl" data-d="${k}"><circle cx="${50+i*85}" cy="60" r="9" fill="${yel}" stroke="${ink}"/>${tx(50+i*85,40,y,{fs:12})}</g>`).join('')}`,'خط زمني لسيرة ذاتية'),cols:4,
 sw:[['↔ السؤال','↔ The question'],['↔ الجملة','↔ The statement']],quiz:['اختر صيغة الماضي:','Choose the past form:'],
 items:CVY.map(([k,y,p,b,o])=>({k,chip:[String(y),'',''],A:{t:[['s','He'],['v',p,'a'],['o',o],['y','in '+y+'.','q']],why:/ed$/.test(p)?['منتظم: + ed (study → studied).','Regular: + ed (study → studied).']:['شاذ: '+b+' → '+p+'.','Irregular: '+b+' → '+p+'.']},B:{t:[['w','When'],['d','did','n'],['s','he'],['v',b,'k'],['o',o+'?']],why:['السؤال: When did + الفعل الأصلي؟','The question: When did + base verb?']},cue:[`${b} → ?`,`${b} → ?`],qo:[p,b==='study'?'studyed':b+'ed',b==='leave'?'leaved':b==='become'?'becomed':b+'s']}))});

/* ---------- 2.4 مراجعة A ---------- */
M('u2-l4',REV(['مراجعة A: الوحدتان 1 و 2','Review A: Units 1 and 2'],[
 RV('pv',['take it off','الضمير','pronoun'],['Take off','the wheel.'],['a','k'],['Take','it','off.'],['a','n','a'],['Put the wheel on. → Put ___','Put the wheel on. → Put ___'],['it on.','on it.','it.']),
 RV('pp',['yet','المضارع التام','present perfect'],["I've",'finished','the report.'],['','a',''],["I haven't",'finished','it','yet.'],['','a','','n'],["Have you checked the pumps ___?","Have you checked the pumps ___?"],['yet','already','ago']),
 RV('past',['did','الماضي','past'],['I','checked','them','yesterday.'],['','a','','q'],["I've",'checked','them.'],['','a',''],['I ___ them yesterday.','I ___ them yesterday.'],['checked','have checked','check']),
 RV('cont',['is changing','المستمر','continuous'],['He','is changing','the wheel','now.'],['','a','','q'],['He','changes','wheels','every race.'],['','n','','q'],['Look! He ___ the tyre.','Look! He ___ the tyre.'],["'s changing",'changes','change']),
 RV('by',['by + ing','الطريقة','method'],['You start it','by','pressing','the button.'],['','q','a',''],['You open it','using','a key.'],['','q',''],['You switch it on by ___ the switch.','You switch it on by ___ the switch.'],['pressing','press','pressed']),
 RV('plan',['going to','الخطة','plan'],["We're",'going to','build','a new rig.'],['','a','k',''],["We're",'meeting','the client','tomorrow.'],['','n','',''],["They're ___ open a new office.","They're ___ open a new office."],['going to','go','going'])]));

/* ---------- 3.1 الحدود: الشاحنة والجسر ---------- */
const S31=en=>{const L=window.VXA;
const T3=(x,y,t,c=ink,fs=12)=>`<text x="${x}" y="${y}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="${fs}" text-anchor="middle" fill="${c}">${t}</text>`;
const G=176,m=34;/* 1 م = 34 بكسل */
 const ground=`<rect width="360" height="230" fill="#eaf3f9"/><rect y="${G}" width="360" height="54" fill="#8d969c"/>`;
 /* الارتفاع: جانبي */
 const hi=`<g class="dim" data-d="high"><rect x="196" y="${G-2.7*m-30}" width="164" height="30" fill="#b8a07a" stroke="${ink}" stroke-width="2"/><rect x="${330}" y="${G-2.7*m}" width="16" height="${2.7*m}" fill="#cdb894" stroke="${ink}" stroke-width="1.5"/>
  ${L.lorry(24,G,170,3.2*m,red)}${L.dimV(14,G,G-3.2*m,'',red)}${T3(60,G-3.2*m-10,'lorry 3.2 m',red,13)}
  ${L.dimV(214,G,G-2.7*m,'2.7 m',grn)}${T3(278,G-2.7*m-36,'bridge',ink,12)}
  <line x1="24" y1="${G-3.2*m}" x2="360" y2="${G-3.2*m}" stroke="${red}" stroke-dasharray="5 4" stroke-width="1.5"/><line x1="196" y1="${G-2.7*m}" x2="196" y2="${G-2.7*m}" />
  <rect x="190" y="${G-3.2*m}" width="12" height="${0.5*m}" fill="${red}" opacity=".35"/>${T3(180,22,'3.2 m > 2.7 m',red,15)}</g>`;
 /* العرض: من الأمام */
 const wd=`<g class="dim" data-d="wide"><path d="M190 ${G} V${G-118} H${190+2.5*m+40} V${G}" fill="none"/><rect x="${200}" y="${G-120}" width="${2.5*m+36}" height="18" fill="#b8a07a" stroke="${ink}" stroke-width="2"/><rect x="200" y="${G-102}" width="18" height="102" fill="#cdb894" stroke="${ink}" stroke-width="1.5"/><rect x="${218+2.5*m}" y="${G-102}" width="18" height="102" fill="#cdb894" stroke="${ink}" stroke-width="1.5"/>
  ${L.dimH(218,218+2.5*m,G+18,'2.5 m',grn,-1)}${T3(218+1.25*m,G-128,'bridge (front view)',ink,11)}
  ${L.lorryFront(90,G,2.6*m,110,red)}${L.dimH(90-1.3*m,90+1.3*m,G+18,'2.6 m',red,-1)}${T3(90,G-120,'lorry (front view)',ink,11)}${T3(180,30,'2.6 m > 2.5 m',red,15)}</g>`;
 /* الوزن */
 const hv=`<g class="dim" data-d="heavy"><rect x="190" y="${G-40}" width="170" height="16" fill="#b8a07a" stroke="${ink}" stroke-width="2"/><rect x="200" y="${G-24}" width="14" height="24" fill="#cdb894"/><rect x="336" y="${G-24}" width="14" height="24" fill="#cdb894"/>
  <line x1="300" y1="${G-40}" x2="300" y2="${G-96}" stroke="${ink}" stroke-width="3"/><circle cx="300" cy="${G-112}" r="20" fill="#fff" stroke="${red}" stroke-width="5"/>${T3(300,G-107,'7.5t',ink,13)}${T3(300,G-140,'max weight',ink,11)}
  ${L.lorry(14,G,170,3.0*m,red,{lab:'18 t'})}${T3(150,30,'18 t > 7.5 t',red,15)}</g>`;
 /* الطول: سطح العبّارة */
 const lg=`<g class="dim" data-d="long"><path d="M10 ${G} L30 ${G+22} H330 L350 ${G}Z" fill="#5d7f96"/>
  ${L.lorry(30,G-6,300,2.4*m,red)}${L.dimH(30,280,G+22,'ferry space 10 m',grn,-1)}${L.dimH(30,330,G-2.4*m-18,'lorry 12 m',red)}<line x1='280' y1='${G-110}' x2='280' y2='${G+30}' stroke='${grn}' stroke-dasharray='5 4' stroke-width='2'/>${T3(180,24,'12 m > 10 m',red,15)}</g>`;
 return svg(230,ground+hi+wd+hv+lg,'شاحنة وحدود الجسر والعبّارة: الارتفاع والعرض والوزن والطول')};
const LM=(k,adj,cmp,lim,ar,e2)=>({k,chip:[adj,ar,e2],A:{t:[['s','The lorry'],['b','is'],['t','too','a'],['a',adj,'k'],['f','for the bridge.']],why:['too + صفة + for: الشيء الكبير أكبر من الحد.','too + adjective + for: the big thing is over the limit.']},B:{t:[['s','The bridge'],['b',"isn't"],['a',adj,'k'],['e','enough','n'],['f','for the lorry.']],why:['not + صفة + enough + for: المكان أصغر من اللازم. لاحظ أن الفاعل تغيّر.','not + adjective + enough + for: the place is too small. Notice the subject changes.']},qa:[[`How ${adj} is it?`,`It's ${cmp} than ${lim}. It mustn't be ${cmp} than ${lim}.`]],cue:[`The lorry is too ${adj} for the bridge. = The bridge isn't ${adj} ___ for the lorry.`,`The lorry is too ${adj} for the bridge. = The bridge isn't ${adj} ___ for the lorry.`],qo:['enough','too','very']});
M('u3-l1',{title:['الحدود: too و not … enough','Limits: too and not … enough'],sub:['المس بُعداً: يظهر مقاس الشاحنة ومقاس الحد بالأرقام في رسم واحد، ثم قل المشكلة بالطريقة الأخرى.','Tap a dimension: you see the lorry and the limit with their numbers, then say it the other way.'],
 scene:S31,cols:4,sw:[['↔ من جهة الجسر','↔ From the bridge\'s side'],['↔ من جهة الشاحنة','↔ From the lorry\'s side']],h2:['2. المقارنة بالحد','2. Comparing with the limit'],quiz:['أكمل الجملة:','Complete the sentence:'],
 items:[LM('high','high','higher','2.7 metres','الارتفاع','height'),LM('wide','wide','wider','2.5 metres','العرض','width'),LM('heavy','heavy','heavier','7.5 tonnes','الوزن','weight'),LM('long','long','longer','10 metres','الطول','length')].map(x=>{if(x.k==='heavy'){x.B.t=[['s','The bridge'],['b',"isn't"],['a','strong','k'],['e','enough','n'],['f','for the lorry.']];}if(x.k==='long'){x.A.t=[['s','The lorry'],['b','is'],['t','too','a'],['a','long','k'],['f','for the ferry.']];x.B.t=[['s','The ferry'],['b',"isn't"],['a','long','k'],['e','enough','n'],['f','for the lorry.']]}return x})});

/* ---------- 3.2 خدمة العملاء ---------- */
M('u3-l2',{title:['خدمة العملاء: عبارات مهذبة','Customer service: polite phrases'],sub:['المس عبارة لترى الصيغة المباشرة والصيغة المهذبة.','Tap a phrase to see the direct form and the polite form.'],cols:2,
 sw:[['↔ المهذبة','↔ Polite'],['↔ المباشرة','↔ Direct']],quiz:['اختر الصيغة المهذبة:','Choose the polite form:'],
 items:[RV('want',["I'd like …",'الطلب','asking'],['I want','a new battery.'],['n',''],["I'd like",'a new battery,','please.'],['a','',''],['You want a catalogue. You say:','You want a catalogue. You say:'],["I'd like a catalogue, please.","Give me catalogue.","I want catalogue now."],[['مباشر جداً.','Very direct.'],["I'd like = I would like: مهذب.","I'd like = I would like: polite."]]),
  RV('offer',['Would you like …?','العرض','offering'],['Do you want','a replacement?'],['n',''],['Would you like','a replacement?'],['a',''],['You offer a refund. You say:','You offer a refund. You say:'],['Would you like a refund?','You want refund?','Like refund?'],[['مباشر.','Direct.'],['Would you like …? للعرض المهذب.','Would you like …? for a polite offer.']]),
  RV('can',['Could you …?','الطلب من الآخر','request'],['Give me','your order number.'],['n',''],['Could you give me','your order number, please?'],['a',''],['You need the order number. You say:','You need the order number. You say:'],['Could you give me your order number, please?','Give number.','You give me number?'],[['أمر.','An order.'],['Could you …, please? مهذب.','Could you …, please? is polite.']]),
  RV('one',['one / ones','بدل التكرار','one'],["I don't want the black battery.",'I want','the red','battery.'],['','','k','n'],["I don't want the black one.",'I want','the red','one.'],['','','k','a'],["I don't like the big box. I want the small ___.","I don't like the big box. I want the small ___."],['one','it','ones'],[['تكرار الاسم.','Repeating the noun.'],['one بدل الاسم المفرد، و ones للجمع.','one for a singular noun, ones for a plural.']])]});

/* ---------- 3.3 المعدات: التفضيل ---------- */
const EN3=[['A','Turbo 200',90,60,40],['B','Marine X',70,90,80],['C','EcoPro',50,40,95]];
M('u3-l3',{title:['أي محرك الأفضل؟ التفضيل','Which engine is best? Superlatives'],sub:['المس معياراً لترى المحرك الفائز.','Tap a criterion to see the winning engine.'],
 scene:en=>svg(170,`<rect width="360" height="170" fill="#f3f6f8"/>${EN3.map(([k,n],i)=>tx(70+i*110,162,n,{fs:11})).join('')}
 <g class="dim" data-d="fast">${EN3.map(([k,n,s],i)=>`<rect x="${45+i*110}" y="${145-s}" width="50" height="${s}" fill="${grn}"/>`).join('')}</g>
 <g class="dim" data-d="power">${EN3.map(([k,n,s,p],i)=>`<rect x="${45+i*110}" y="${145-p}" width="50" height="${p}" fill="${blu}"/>`).join('')}</g>
 <g class="dim" data-d="quiet">${EN3.map(([k,n,s,p,q],i)=>`<rect x="${45+i*110}" y="${145-q}" width="50" height="${q}" fill="${yel}"/>`).join('')}</g>`,'ثلاثة محركات قوارب: السرعة والقوة والهدوء'),cols:3,
 sw:[['↔ التفضيل','↔ The superlative'],['↔ المقارنة','↔ The comparative']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('fast',['fast','سريع','fast'],['Turbo 200 is','faster than','Marine X.'],['','a',''],['Turbo 200 is','the fastest.'],['','n'],['fast → the ___','fast → the ___'],['fastest','most fast','faster'],[['…er than.','…er than.'],['the …est.','the …est.']]),
  RV('power',['powerful','قوي','powerful'],['Marine X is','more powerful than','EcoPro.'],['','a',''],['Marine X is','the most powerful.'],['','n'],['powerful → the ___','powerful → the ___'],['most powerful','powerfullest','more powerful'],[['more … than.','more … than.'],['the most ….','the most ….']]),
  RV('quiet',['quiet','هادئ','quiet'],['EcoPro is','quieter than','Turbo 200.'],['','a',''],['EcoPro is','the quietest.'],['','n'],['quiet → the ___','quiet → the ___'],['quietest','most quiet','quieter'],[['…er than.','…er than.'],['the …est.','the …est.']])]});

/* ---------- 4.1 آلة حفر الأنفاق ---------- */
const S41=en=>svg(170,`<rect width="360" height="170" fill="#9b8466"/><rect x="0" y="40" width="360" height="90" fill="#d9cdb8"/>
 <rect x="80" y="50" width="220" height="70" rx="10" fill="${yel}" stroke="${ink}" stroke-width="2"/>
 <g class="hl" data-d="face"><rect x="56" y="44" width="26" height="82" rx="6" fill="${gry}" stroke="${ink}" stroke-width="2"/>${tx(40,32,'cutter face',{fs:10})}</g>
 <g class="hl" data-d="teeth">${[52,66,80,94,108,122].map(y=>`<path d="M56 ${y} l-10 4 l10 4z" fill="${ink}"/>`).join('')}${tx(30,150,'teeth',{fs:10})}</g>
 <g class="hl" data-d="belt"><rect x="150" y="96" width="160" height="10" fill="#333"/>${arr(190,90,300,90,grn,3)}${tx(240,84,'conveyor belt',{fs:10})}</g>
 <g class="hl" data-d="shoe"><rect x="200" y="30" width="40" height="14" fill="${blu}"/><rect x="200" y="126" width="40" height="14" fill="${blu}"/>${tx(220,24,'shoe',{fs:10})}</g>
 <g class="hl" data-d="leg"><rect x="214" y="44" width="12" height="10" fill="${ink}"/><rect x="214" y="116" width="12" height="10" fill="${ink}"/>${tx(260,140,'leg',{fs:10})}</g>`,'آلة حفر أنفاق: واجهة القطع، الأسنان، السير الناقل، الحذاء، الرجل');
const TB=(k,part,v,o,ar,e2,bd)=>({k,chip:[part,ar,e2],A:{t:[['s','The '+part],['v',v,'a'],['o',o+'.','k']],why:['المضارع البسيط لوظيفة الجزء.','The present simple for the part\'s function.']},B:{t:[['s','It'],['l','is like','n'],['o',bd+'.','k']],why:['أسماء أعضاء الجسم تُستعمل للأجزاء: teeth, shoe, leg, face.','Body words are used for machine parts: teeth, shoe, leg, face.']}});
M('u4-l1',{title:['آلة حفر الأنفاق: الأجزاء ووظائفها','The tunnel boring machine: parts and functions'],sub:['المس جزءاً من الآلة لترى وظيفته، ولماذا سُمّي باسم عضو من الجسم.','Tap a part of the machine to see its function, and why it has a body-part name.'],
 scene:S41,cols:3,sw:[['↔ لماذا هذا الاسم؟','↔ Why this name?'],['↔ الوظيفة','↔ The function']],quiz:['ما الجزء المحاط بالأخضر؟','Which part is in green?'],
 items:[TB('face','cutter face','rotates and','cuts the rock','واجهة القطع','cutter face','a face at the front'),TB('teeth','teeth','break','the rock','الأسنان','teeth','teeth that bite'),TB('belt','conveyor belt','carries','the rock out of the tunnel','السير الناقل','conveyor belt','a moving road'),TB('shoe','shoes','push against','the tunnel wall','الأحذية','shoes','shoes on a foot'),TB('leg','legs','hold','the shoes','الأرجل','legs','legs')].map(x=>{if(x.k==='face')x.A.t=[['s','The cutter face'],['v','rotates','a'],['o','and cuts the rock.','k']];if(['teeth','shoe','leg'].includes(x.k))x.B.t=[['s','They'],['l','are like','n'],['o',{teeth:'teeth that bite.',shoe:'shoes on a foot.',leg:'legs.'}[x.k],'k']];return x})});

/* ---------- 4.2 التصنيع: المبني للمجهول ---------- */
const AS=[['weld','Robots','weld','the body','is welded'],['paint','Machines','paint','the body','is painted'],['fit','Workers','fit','the engine','is fitted'],['test','Inspectors','test','the car','is tested']];
M('u4-l2',{title:['خط التجميع: المبني للمجهول','The assembly line: the passive'],sub:['المس مرحلة في المصنع: من يفعلها؟ ثم ركّز على السيارة بالمجهول.','Tap a stage in the factory: who does it? Then focus on the car with the passive.'],
 scene:en=>svg(120,`<rect width="360" height="120" fill="#eef1f4"/><rect x="0" y="80" width="360" height="12" fill="#555"/>${AS.map(([k],i)=>`<g class="hl" data-d="${k}"><rect x="${20+i*86}" y="40" width="70" height="38" rx="6" fill="${[gry,red,yel,grn][i]}" stroke="${ink}" stroke-width="2"/>${tx(55+i*86,108,['Welding','Painting','Fitting','Testing'][i],{fs:11})}</g>${i<3?arr(92+i*86,60,104+i*86,60,ink,2):''}`).join('')}`,'خط تجميع: لحام، طلاء، تركيب، اختبار'),cols:4,
 sw:[['↔ المبني للمجهول','↔ The passive'],['↔ المبني للمعلوم','↔ The active']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:AS.map(([k,s,v,o,p])=>({k,chip:[k[0].toUpperCase()+k.slice(1)+'ing','',''],A:{t:[['s',s],['v',v,'a'],['o',o+'.','k']],why:['المعلوم: من يقوم بالعمل أولاً.','Active: the doer comes first.']},B:{t:[['o',o[0].toUpperCase()+o.slice(1),'k'],['v',p,'n'],['b','by '+s.toLowerCase()+'.','q']],why:['المجهول: الشيء أولاً + is + التصريف الثالث (+ by).','Passive: the thing first + is + past participle (+ by).']},cue:[`${o[0].toUpperCase()+o.slice(1)} ___ by ${s.toLowerCase()}.`,`${o[0].toUpperCase()+o.slice(1)} ___ by ${s.toLowerCase()}.`],qo:[p,v,p.replace('is ','')]}))});

/* ---------- 4.3 which و who ---------- */
M('u4-l3',{title:['ربط جملتين بـ which و who','Joining two sentences with which and who'],sub:['المس مثالاً لترى الجملتين تتحولان إلى جملة واحدة.','Tap an example to see two sentences become one.'],cols:2,
 sw:[['↔ جملة واحدة','↔ One sentence'],['↔ جملتان','↔ Two sentences']],quiz:['which أم who؟','which or who?'],
 items:[RV('sat',['satellite','شيء','thing'],['A satellite receives signals.','It','sends them to Earth.'],['','n',''],['A satellite receives signals','which','it sends to Earth.'],['','a',''],['A dish is a device ___ receives signals.','A dish is a device ___ receives signals.'],['which','who','where'],[['جملتان: it يعود على الشيء.','Two sentences: it refers to the thing.'],['which للأشياء.','which is for things.']]),
  RV('eng',['engineer','شخص','person'],['We called an engineer.','He','installed the dish.'],['','n',''],['We called an engineer','who','installed the dish.'],['','a',''],['A technician is a person ___ repairs things.','A technician is a person ___ repairs things.'],['who','which','what'],[['جملتان: he يعود على الشخص.','Two sentences: he refers to the person.'],['who للأشخاص.','who is for people.']]),
  RV('card',['DTV card','شيء','thing'],['You need a DTV card.','It','decodes the signal.'],['','n',''],['You need a DTV card','which','decodes the signal.'],['','a',''],['You need a card ___ decodes the signal.','You need a card ___ decodes the signal.'],['which','who','it'],[['جملتان.','Two sentences.'],['which بدل it.','which instead of it.']])]});

/* ---------- 4.4 مراجعة B ---------- */
M('u4-l4',REV(['مراجعة B: الوحدتان 3 و 4','Review B: Units 3 and 4'],[
 RV('cmp',['faster than','المقارنة','comparative'],['The diesel car is','cheaper than','the petrol car.'],['','a',''],['The electric car is','the cheapest.'],['','a'],['good → ___ → the best','good → ___ → the best'],['better','gooder','more good']),
 RV('too',['too / enough','الحدود','limits'],["It's",'too','high.'],['','a',''],["It isn't",'low','enough.'],['','','a'],["The door isn't wide ___.","The door isn't wide ___."],['enough','too','very']),
 RV('pol',["I'd like …",'المهذب','polite'],["I'd like",'the blue one,','please.'],['a','',''],['Would you like','a receipt?'],['a',''],['___ like to order a new one.','___ like to order a new one.'],["I'd","I'm","I"]),
 RV('pas',['is made','المجهول','passive'],['The body','is welded','by robots.'],['','a',''],['The cars','are tested','before delivery.'],['','a',''],['The engines ___ fitted by hand.','The engines ___ fitted by hand.'],['are','is','be']),
 RV('rel',['which / who','الربط','relative'],['a machine','which','digs tunnels'],['','a',''],['a driver','who','operates it'],['','a',''],['an operator ___ controls the machine','an operator ___ controls the machine'],['who','which','where']),
 RV('spec',['4x4','المواصفات','specs'],["It's",'4.5 m','long.'],['','k',''],['How','long','is it?'],['q','',''],['How ___ is it? — 1.8 m wide.','How ___ is it? — 1.8 m wide.'],['wide','width','long'])]));

/* ---------- 5.1 الاستعمال ---------- */
const DV=[['wrench','X-beam wrench','loosening wheel nuts','loosen wheel nuts'],['start','Simple Start','starting a car with a flat battery','start a car with a flat battery'],['sea','Sea Breacher','travelling under the water','travel under the water'],['loc','Loc8tor','finding lost keys','find lost keys']];
M('u5-l1',{title:['ما فائدته؟ for + ing و used to','What\'s it for? for + ing and used to'],sub:['المس جهازاً لترى استعماله بصيغتين.','Tap a device to see its use in two forms.'],cols:2,
 sw:[['↔ used to + فعل','↔ used to + verb'],['↔ for + ing','↔ for + ing']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:DV.map(([k,n,ing,base])=>({k,chip:[n,'',''],A:{t:[['i',"It's"],['f','for','q'],['v',ing+'.','a']],why:['It\'s for + فعل بـ ing.','It\'s for + verb with ing.']},B:{t:[['i',"It's"],['u','used to','n'],['v',base+'.','a']],why:['It\'s used to + فعل أصلي (أو used for + ing).','It\'s used to + base verb (or used for + ing).']},qa:[["What's it for?",`It's for ${ing}.`]],cue:[`It's used to ___ (${base.split(' ')[0]}).`,`It's used to ___ (${base.split(' ')[0]}).`],qo:[base.split(' ')[0],ing.split(' ')[0],base.split(' ')[0]+'s']}))});

/* ---------- 5.2 الأشكال ---------- */
const SH=[['circle','circular','a circle',`<circle cx="45" cy="60" r="28" fill="${blu}"/>`],['square','square','a square',`<rect x="94" y="32" width="56" height="56" fill="${red}"/>`],['tri','triangular','a triangle',`<path d="M185 88 l30 -56 l30 56z" fill="${yel}"/>`],['cyl','cylindrical','a cylinder',`<rect x="268" y="38" width="44" height="50" fill="${grn}"/><ellipse cx="290" cy="38" rx="22" ry="8" fill="#5fbf8f"/><ellipse cx="290" cy="88" rx="22" ry="8" fill="${grn}"/>`]];
M('u5-l2',{title:['الشكل: shaped like و الصفة','Shape: shaped like and the adjective'],sub:['المس شكلاً لترى طريقتين لوصفه.','Tap a shape to see two ways to describe it.'],
 scene:en=>svg(120,`<rect width="360" height="120" fill="#f3f6f8"/>${SH.map(([k,,,d])=>`<g class="hl" data-d="${k}">${d}</g>`).join('')}`,'دائرة ومربع ومثلث وأسطوانة'),cols:4,
 sw:[['↔ بالصفة','↔ With the adjective'],['↔ shaped like','↔ shaped like']],quiz:['ما صفة الشكل المحاط؟','What is the adjective for the shape in green?'],
 items:SH.map(([k,adj,noun])=>({k,chip:[noun.replace(/^a /,''),'',''],A:{t:[['i',"It's"],['s','shaped like','q'],['n',noun+'.','k']],why:['shaped like / looks like + الاسم.','shaped like / looks like + noun.']},B:{t:[['i',"It's"],['a',adj+'.','a']],why:['الصفة من الاسم: circle → circular.','The adjective from the noun: circle → circular.']}}))});

/* ---------- 5.3 التعريفات ---------- */
M('u5-l3',{title:['التعريف في جملة واحدة','A definition in one sentence'],sub:['المس كلمة لترى تعريفها: الكلمة + is + النوع + which / who + الوظيفة.','Tap a word to see its definition: word + is + type + which / who + function.'],cols:3,
 sw:[['↔ تعريف آخر','↔ Another definition'],['↔ رجوع','↔ Back']],quiz:['which أم who؟','which or who?'],
 items:[RV('inv',['inventor','شخص','person'],['An inventor','is a person','who','invents things.'],['k','','a',''],['A designer','is a person','who','designs products.'],['k','','a',''],['A pilot is a person ___ flies planes.','A pilot is a person ___ flies planes.'],['who','which','where'],[['شخص: who.','A person: who.'],['شخص آخر: who.','Another person: who.']]),
  RV('dev',['device','جهاز','device'],['A thermometer','is a device','which','measures temperature.'],['k','','a',''],['A compass','is a device','which','finds North.'],['k','','a',''],['A pump is a machine ___ moves water.','A pump is a machine ___ moves water.'],['which','who','when'],[['جهاز: which (أو that).','A device: which (or that).'],['جهاز آخر.','Another device.']]),
  RV('mat',['material','مادة','material'],['Nylon','is a material','which','is strong and flexible.'],['k','','a',''],['Steel','is a metal','which','is very strong.'],['k','','a',''],['Rubber is a material ___ stretches.','Rubber is a material ___ stretches.'],['which','who','it'],[['مادة: which.','A material: which.'],['معدن: which.','A metal: which.']])]});

/* ---------- 6.1 السلامة: المجهول مع must ---------- */
const S61=en=>svg(130,`<rect width="360" height="130" fill="#fafafa"/>
 <g class="hl" data-d="helm"><circle cx="50" cy="56" r="34" fill="#1f5fa8"/><path d="M34 62 q16 -30 32 0z" fill="#fff"/><rect x="30" y="60" width="40" height="6" fill="#fff"/></g>
 <g class="hl" data-d="truck"><circle cx="140" cy="56" r="34" fill="#fff" stroke="${red}" stroke-width="7"/><rect x="124" y="40" width="20" height="30" fill="#c99a5a"/><rect x="144" y="46" width="10" height="24" fill="#c99a5a"/><line x1="116" y1="34" x2="164" y2="80" stroke="${red}" stroke-width="7"/></g>
 <g class="hl" data-d="aisle"><rect x="196" y="22" width="68" height="68" fill="${grn}"/>${tx(230,62,'KEEP',{fs:10,c:'#fff'})}${tx(230,76,'CLEAR',{fs:10,c:'#fff'})}</g>
 <g class="hl" data-d="box"><path d="M320 22 l34 60 h-68z" fill="${yel}" stroke="#222" stroke-width="3"/>${tx(320,72,'!',{fs:24})}</g>`,'لوحات سلامة في المستودع');
M('u6-l1',{title:['قواعد السلامة: must be + التصريف الثالث','Safety rules: must be + past participle'],sub:['المس لوحة لترى القاعدة بالمعلوم ثم بالمجهول.','Tap a sign to see the rule in the active, then the passive.'],
 scene:S61,cols:4,sw:[['↔ المبني للمجهول','↔ The passive'],['↔ المبني للمعلوم','↔ The active']],quiz:['اختر الصيغة الصحيحة:','Choose the correct form:'],
 items:[RV('helm',['helmets','الخوذ','helmets'],['You','must wear','helmets.'],['','a','k'],['Helmets','must be worn','here.'],['k','n',''],['Helmets must ___ here.','Helmets must ___ here.'],['be worn','wear','worn'],[['المعلوم: من يفعل؟','Active: who does it?'],['المجهول: الشيء + must be + التصريف الثالث.','Passive: thing + must be + past participle.']]),
  RV('truck',['hand trucks','العربات','hand trucks'],["You mustn't",'overload','hand trucks.'],['','a','k'],['Hand trucks','must not be overloaded.'],['k','n'],['Hand trucks must not ___.','Hand trucks must not ___.'],['be overloaded','overload','overloaded'],[['المنع بالمعلوم.','A prohibition in the active.'],['must not be + التصريف الثالث.','must not be + past participle.']]),
  RV('aisle',['aisles','الممرات','aisles'],['You','have to keep','aisles free.'],['','a','k'],['Aisles','have to be kept','free.'],['k','n',''],['Aisles have to ___ free.','Aisles have to ___ free.'],['be kept','keep','kept'],[['have to بالمعلوم.','have to in the active.'],['have to be + التصريف الثالث.','have to be + past participle.']]),
  RV('box',['boxes','الصناديق','boxes'],['You',"shouldn't stack",'boxes in the aisles.'],['','a','k'],['Boxes',"shouldn't be stacked",'in the aisles.'],['k','n',''],["Boxes shouldn't ___ in the aisles.","Boxes shouldn't ___ in the aisles."],['be stacked','stack','stacked'],[['should not بالمعلوم.','should not in the active.'],['should not be + التصريف الثالث.','should not be + past participle.']])]});

/* ---------- 6.2 الطوارئ ---------- */
M('u6-l2',{title:['ماذا نفعل إذا …؟','What should we do if …?'],sub:['المس موقفاً طارئاً لترى السؤال والنصيحة.','Tap an emergency to see the question and the advice.'],cols:3,
 sw:[['↔ النصيحة','↔ The advice'],['↔ السؤال','↔ The question']],quiz:['اختر الكلمة المناسبة:','Choose the right word:'],
 items:[RV('diver',['diver trapped','غواص عالق','diver'],['What','should','we do','if','the diver is trapped?'],['q','a','','q',''],['We','should','send','another diver','first.'],['','a','k','',''],['What ___ we do if the air runs out?','What ___ we do if the air runs out?'],['should','shall to','must to'],[['السؤال: What should we do if + مضارع؟','Question: What should we do if + present?'],['النصيحة: should + فعل أصلي.','Advice: should + base verb.']]),
  RV('air',['no air','لا هواء','no air'],['What should we do','if','he runs out of air?'],['','q',''],['We','should','give him','the spare tank.'],['','a','k',''],['If he ___ out of air, give him the spare tank.','If he ___ out of air, give him the spare tank.'],['runs','will run','run'],[['بعد if: المضارع البسيط.','After if: the present simple.'],['should + فعل.','should + verb.']]),
  RV('first',['first','الأولوية','first'],['First,','we should','call','the coastguard.'],['q','a','k',''],['After that,','we should','tell','his family.'],['q','a','k',''],['___, we should call the coastguard. (step 1)','___, we should call the coastguard. (step 1)'],['First','Finally','After that'],[['ترتيب المهام: First.','Ordering the tasks: First.'],['ثم: After that / Then / Finally.','Then: After that / Then / Finally.']])]});

/* ---------- 6.3 الاتجاهات على الطريق ---------- */
const S63=en=>svg(200,`<rect width="360" height="200" fill="#dfe8d8"/><rect x="0" y="86" width="360" height="28" fill="#888"/><rect x="166" y="0" width="28" height="200" fill="#888"/>
 <g class="hl" data-d="round"><circle cx="180" cy="100" r="30" fill="#6aa04f" stroke="#fff" stroke-width="6"/>${arr(150,124,186,140,yel,3)}</g>
 <g class="hl" data-d="exit">${arr(210,100,280,100,grn)}${tx(300,80,'3rd exit',{fs:11})}</g>
 <g class="hl" data-d="tj"><rect x="60" y="20" width="12" height="66" fill="#888"/>${arr(66,80,66,30,blu)}${tx(66,16,'T-junction',{fs:10})}</g>
 <g class="hl" data-d="fly"><rect x="166" y="150" width="28" height="12" fill="#555" stroke="#fff"/>${tx(230,166,'flyover',{fs:10})}</g>
 <g class="hl" data-d="slip"><path d="M300 114 q20 30 50 40" fill="none" stroke="#888" stroke-width="14"/>${tx(320,180,'slip road',{fs:10})}</g>`,'دوار وتقاطعات وجسر علوي ومخرج');
M('u6-l3',{title:['الاتجاهات على الطريق','Directions on the road'],sub:['المس معلماً على الطريق لترى التعليمة.','Tap a road feature to see the direction.'],
 scene:S63,cols:3,sw:[['↔ صيغة أخرى','↔ Another way'],['↔ رجوع','↔ Back']],quiz:['ما المعلم المحاط بالأخضر؟','Which road feature is in green?'],
 items:[RV('round',['roundabout','الدوار','roundabout'],['At the','roundabout,','go straight on.'],['','k','a'],['Go','round','the roundabout.'],['a','',''],['At the ___, take the third exit.','At the ___, take the third exit.'],['roundabout','flyover','slip road'],[['عند الدوار.','At the roundabout.'],['حوله.','Around it.']]),
  RV('exit',['third exit','المخرج الثالث','exit'],['Take','the third exit','from the roundabout.'],['a','k',''],['Turn off','at the third exit.'],['a','k'],['Take the ___ exit. (3)','Take the ___ exit. (3)'],['third','three','thirdth'],[['الأعداد الترتيبية: first, second, third.','Ordinal numbers: first, second, third.'],['المعنى نفسه.','The same meaning.']]),
  RV('tj',['T-junction','تقاطع T','T-junction'],['Turn left','at the T-junction.'],['a','k'],['Go up to','the T-junction','and turn left.'],['','k','a'],['Turn left at the ___.','Turn left at the ___.'],['T-junction','roundabout','flyover'],[['تقاطع على شكل T.','A junction shaped like a T.'],['ثم انعطف.','Then turn.']]),
  RV('fly',['flyover','الجسر العلوي','flyover'],['Go','over','the flyover.'],['a','q','k'],['Go','under','the underpass.'],['a','q','k'],['Go ___ the flyover.','Go ___ the flyover.'],['over','under','through'],[['فوق.','Over it.'],['تحت.','Under it.']]),
  RV('slip',['slip road','المخرج الجانبي','slip road'],['Leave the motorway','at the slip road.'],['a','k'],['Take','the slip road','to the city centre.'],['a','k',''],['Leave the motorway at the ___.','Leave the motorway at the ___.'],['slip road','roundabout','gantry'],[['طريق الخروج من الطريق السريع.','The road off the motorway.'],['خذه.','Take it.']])]});

/* ---------- 6.4 مراجعة C ---------- */
M('u6-l4',REV(['مراجعة C: الوحدتان 5 و 6','Review C: Units 5 and 6'],[
 RV('for',['for + ing','الاستعمال','use'],["It's",'for','checking','the air.'],['','q','a',''],["It's",'used to','check','the air.'],['','n','a',''],["It's used to ___ air pressure.","It's used to ___ air pressure."],['measure','measuring','measures']),
 RV('act',['acts as','يعمل كـ','acts as'],['The tank','acts as','a float.'],['','a',''],['It','is designed to','float.'],['','n',''],['The jacket ___ as a float.','The jacket ___ as a float.'],['acts','act','acting']),
 RV('def',['which / who','التعريف','definition'],['A regulator','is a device','which','controls air.'],['','','a',''],['A diver','is a person','who','works under water.'],['','','a',''],['A diver is a person ___ swims under water.','A diver is a person ___ swims under water.'],['who','which','where']),
 RV('shape',['circular','الشكل','shape'],["It's",'shaped like','a circle.'],['','q',''],["It's",'circular.'],['','a'],["It's shaped like a triangle. = It's ___.","It's shaped like a triangle. = It's ___."],['triangular','triangle','triangled']),
 RV('mpas',['must be worn','المجهول','passive'],['Lifejackets','must be worn.'],['','a'],['Boxes','must not be stacked','here.'],['','n',''],['Gloves must ___ worn.','Gloves must ___ worn.'],['be','is','being']),
 RV('should',['should','النصيحة','advice'],['What','should','we do?'],['q','a',''],['We','should','call for help.'],['','a',''],['You ___ check your air before you dive.','You ___ check your air before you dive.'],['should','should to','shoulds'])]));
})(window);

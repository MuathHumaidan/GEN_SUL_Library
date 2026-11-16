/* أدوات مقرر الإنجليزية التقنية (انجل-102): الجمل الإنجليزية، النطق بصوت الجهاز، جداول الكلمات، تمارين الكتاب وإجاباتها،
   خانات الصوتيات، وأدوات «املأ الفراغ» و«اكتب الجملة». يُحمَّل بعد kit.js (window.ENK).
   مبدأ المقرر: الشرح بالعربي، والأمثلة والجمل بالإنجليزي، والكلمات الجديدة مع ترجمتها. لا يُنسخ نص الكتاب ولا حواراته ولا صوره:
   كل الأمثلة والحوارات هنا جديدة، وتمارين الكتاب يُحال إليها برقمها وصفحتها. */
(function(G){
"use strict";
const K=G.PHK;
const css=`
.en{direction:ltr;unicode-bidi:isolate;font-family:var(--font-la,var(--font));}
p.en,div.en,li.en{display:block;text-align:left}
.enb{direction:ltr;text-align:left;unicode-bidi:isolate;background:var(--surface-2);border-radius:10px;padding:8px 12px;margin:8px 0;line-height:1.9}
.enb p{margin:0}
.say{font:inherit;border:0;background:none;cursor:pointer;padding:0 4px;vertical-align:-2px;color:var(--blue-ink);font-size:15px;line-height:1}
.say:hover{color:var(--blue)}
.say[hidden]{display:none}
.vt{width:100%;border-collapse:collapse;font-size:14.5px;margin:8px 0}
.vt[dir=ltr] th,.vt[dir=ltr] td{text-align:left}
.vt th,.vt td{border-bottom:1px solid var(--line);padding:6px 8px;text-align:start;vertical-align:top}
.vt th{background:var(--surface-2);font-weight:600}
.vt td.en{white-space:nowrap;font-weight:600}
.vt td.v2{white-space:normal;font-weight:400;text-align:left}
.vt td.nt{color:var(--muted);font-size:13px}
.ebk{border:1px solid var(--line);border-inline-start:4px solid #8a5a2b;border-radius:12px;padding:10px 14px;margin:10px 0;background:var(--surface)}
.ebk .eh{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:4px}
.ebk .eh .tg{background:#f3e7d8;color:#6b4320;border-radius:999px;padding:1px 9px;font-size:12px;font-weight:700}
.ebk .eh b{font-size:15px}
.ebk .eh .ref{color:var(--muted);font-size:13px}
.ebk p{margin:4px 0;line-height:1.85}
.ebk details{margin-top:6px}
.ebk summary{cursor:pointer;color:var(--blue-ink);font-weight:600;font-size:14px}
.ebk ol.ans{direction:ltr;text-align:left;margin:6px 0 0;padding-left:26px;line-height:1.9}
.ebk .ans-n{font-size:12.5px;color:var(--muted);margin-top:4px}
.aud{border:1px solid var(--line);border-inline-start:4px solid var(--blue);border-radius:12px;padding:10px 14px;margin:10px 0;background:var(--surface)}
.aud .eh{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.aud .eh .tg{background:var(--blue-soft);color:var(--blue-ink);border-radius:999px;padding:1px 9px;font-size:12px;font-weight:700}
.aud audio{width:100%;margin-top:8px}
.aud .miss{margin-top:6px;font-size:13.5px;color:var(--muted)}
.gp .gp-s{direction:ltr;text-align:left;line-height:2.1;margin:0}
.gp select{font:inherit;font-size:15px;padding:3px 8px;border-radius:8px;border:1.5px solid var(--line);background:var(--bg);color:var(--fg);direction:ltr;max-width:100%}
.gp select.ok{border-color:var(--on);background:var(--on-soft)}
.gp select.no{border-color:var(--stop);background:var(--stop-soft)}
.ty input{font:inherit;font-size:15px;width:100%;padding:6px 10px;border-radius:10px;border:1.5px solid var(--line);background:var(--bg);color:var(--fg);direction:ltr;text-align:left}
.ty .pk-why .en{display:inline}
.card-ab{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:10px;margin:8px 0}
.card-ab>div{border:1.5px dashed var(--line);border-radius:12px;padding:10px 12px;background:var(--surface)}
.card-ab h4{margin:0 0 6px;font-size:15px}
.dlg{direction:ltr;text-align:left;margin:8px 0;padding:0;list-style:none}
.dlg li{margin:4px 0;line-height:1.8}
.dlg li b{display:inline-block;min-width:5.5em;color:var(--muted);font-weight:600}
.upd{border:1px solid var(--line);border-inline-start:4px solid #b7791f;border-radius:12px;padding:8px 12px;margin:10px 0;background:#fff8ec;font-size:14px;line-height:1.8}
[data-theme="dark"] .upd{background:#2b2418}
.upd b:first-child{color:#8a5a00}
.phl .btn,.pk .pk-b,.phl .seg button{unicode-bidi:plaintext}
.lb-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:8px 0}
.lb-l{font-weight:700;min-width:6.5em;color:var(--muted);font-size:14px}
.lb-btns{display:flex;gap:6px;flex-wrap:wrap}
.lb-btns button{font:inherit;font-size:15px;padding:6px 14px;border-radius:10px;border:2px solid var(--line);background:var(--surface);color:var(--fg);cursor:pointer;unicode-bidi:plaintext}
.lb-btns button[aria-pressed=true]{border-color:var(--blue);background:var(--blue);color:#fff}
.lb-svg svg{max-width:min(560px,100%);height:auto;display:block;margin:8px auto 0}.lb-svg svg:not([width]){width:100%}
.lb-out{background:var(--surface-2);border-radius:14px;padding:14px;margin-top:10px;display:flex;flex-direction:column;gap:10px}
.lb-sent{display:flex;flex-wrap:nowrap;gap:10px 5px;direction:ltr;align-items:flex-start}.lb-sent>.say,.lb-sent>button{align-self:center}
.lb-p{display:flex;flex-direction:column;align-items:stretch;gap:4px;max-width:100%}
.lb-p .pc{font-weight:700;font-size:clamp(14px,4.3vw,19px);padding:5px clamp(6px,2vw,12px);border-radius:10px;font-family:var(--font-la,var(--font));text-align:center;white-space:nowrap}
.pc.n{background:#00875a;color:#fff}.pc.k{background:#f2a900;color:#3a2a00}.pc.q{background:#1f5fd1;color:#fff}.pc.x{background:var(--surface);color:var(--fg);border:1px solid var(--line)}.pc.r{background:#d2452f;color:#fff;text-decoration:line-through}
.lb-p small{font-size:12px;direction:rtl;white-space:nowrap;border-top:3px solid currentColor;padding-top:3px;text-align:center;color:var(--muted);font-family:var(--font)}
.lb-p.n small{color:#00875a}.lb-p.k small{color:#a87500}.lb-p.q small{color:#1f5fd1}.lb-p.r small{color:#d2452f}
.lb-why{font-weight:600;line-height:1.8}
.lb-bad{background:var(--stop-soft);color:var(--stop);border-radius:10px;padding:8px 12px;font-weight:700;line-height:1.8}
.lb-ar{color:var(--muted)}
`;
const addCss=()=>{if(typeof document==='undefined'||document.getElementById('enk-css'))return;const s=document.createElement('style');s.id='enk-css';s.textContent=css;document.head.appendChild(s)};
addCss();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const plain=s=>String(s).replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/___+/g,' blank ');
/* ---- النطق بصوت الجهاز (إنجليزي بريطاني إن وُجد) ---- */
const hasTTS=()=>typeof speechSynthesis!=='undefined';
let voice=null;
function pickVoice(){if(!hasTTS())return;const vs=speechSynthesis.getVoices();voice=vs.find(v=>/en[-_]US/i.test(v.lang)&&/natural|neural|premium|enhanced|google/i.test(v.name))||vs.find(v=>/en[-_]US/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang))||null}
if(hasTTS()){pickVoice();try{speechSynthesis.addEventListener('voiceschanged',pickVoice)}catch(e){}}
/* النطق: تسجيل جاهز (صوت واضح موحّد على كل الأجهزة) إن وُجد للجملة، وإلا صوت الجهاز */
const ttsKey=s=>{let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return ('0000000'+h.toString(16)).slice(-8)};
let TTSSET=null,cur=null;
function devSpeak(t){if(!hasTTS())return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang=voice?voice.lang:'en-US';if(voice)u.voice=voice;u.rate=0.9;speechSynthesis.speak(u)}
function speak(t){const s=plain(t).replace(/\s+/g,' ').trim();if(!TTSSET)TTSSET=new Set(String(G.ENG_TTS||'').split(' ').filter(Boolean));
  if(cur){try{cur.pause()}catch(e){}cur=null}if(hasTTS())speechSynthesis.cancel();
  const k=ttsKey(s);if(TTSSET.has(k)){const a=new Audio('audio/tts/'+k+'.mp3');cur=a;a.play().catch(()=>devSpeak(s));return}
  devSpeak(s)}
/* نطق ينتظر نهاية الجملة (للاستماع لقسم كامل في الوضع الإنجليزي) */
function speakP(t){return new Promise(res=>{const s=plain(t).replace(/\s+/g,' ').trim();if(!TTSSET)TTSSET=new Set(String(G.ENG_TTS||'').split(' ').filter(Boolean));
  if(cur){try{cur.pause()}catch(e){}cur=null}if(hasTTS())speechSynthesis.cancel();
  const dev=()=>{if(!hasTTS())return res();const u=new SpeechSynthesisUtterance(s);u.lang=voice?voice.lang:'en-US';if(voice)u.voice=voice;u.rate=0.9;u.onend=u.onerror=()=>res();speechSynthesis.speak(u)};
  const k=ttsKey(s);if(TTSSET.has(k)){const a=new Audio('audio/tts/'+k+'.mp3');cur=a;a.onended=()=>res();a.onerror=()=>dev();a.play().catch(dev);return}dev()})}
if(typeof document!=='undefined')document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-say]');if(!b)return;e.preventDefault();speak(b.dataset.say)});
const latinT=t=>{const x=plain(t),l=(x.match(/[A-Za-z]/g)||[]).length,a=(x.match(/[\u0600-\u06FF]/g)||[]).length;return l>0&&l>a};
const sp=t=>hasTTS()&&latinT(t)?`<button type="button" class="say" data-say="${esc(plain(t))}" title="استمع للنطق" aria-label="استمع للنطق">🔊</button>`:'';
/* جملة إنجليزية داخل النص العربي */
const e=s=>`<span class="en" lang="en">${s}</span>`;
/* فقرة/أمثلة إنجليزية: سطر لكل جملة مع زر نطق */
const eb=lines=>`<div class="enb" lang="en">${(Array.isArray(lines)?lines:[lines]).map(l=>`<p>${l} ${sp(l)}</p>`).join('')}</div>`;
/* حوار جديد (ليس من الكتاب): [[المتحدث, الجملة]] */
const dl=rows=>`<ul class="dlg" lang="en">${rows.map(([w,t])=>`<li><b>${w}:</b> ${t} ${sp(t)}</li>`).join('')}</ul>`;
/* جدول كلمات: [[إنجليزي, عربي, ملاحظة]] */
const vt=(rows,h)=>`<div class="tbx"><table class="vt"><thead><tr><th>${(h&&h[0])||'English'}</th><th>${(h&&h[1])||'المعنى'}</th>${rows.some(r=>r[2])?`<th>${(h&&h[2])||'ملاحظة'}</th>`:''}</tr></thead><tbody>${rows.map(r=>`<tr><td${latinT(r[0])?' class="en" lang="en"':''}>${r[0]} ${sp(r[0])}</td><td${/^[\x20-\x7E·—–…’→]+$/.test(r[1])?' class="en v2" lang="en" dir="ltr"':''}>${r[1]}</td>${rows.some(x=>x[2])?`<td class="nt"${/^[\x20-\x7E·—–…’]+$/.test(r[2]||'')?' lang="en" dir="ltr" style="text-align:left"':''}>${r[2]||''}</td>`:''}</tr>`).join('')}</tbody></table></div>`;
/* تمرين في الكتاب: يُحال إليه برقمه وصفحته، مع المطلوب بالعربي وإجابات البنود (للمراجعة) */
/* يُحفظ نص «في كتابك» ليظهر أيضاً في «التفاعلي» قبل تمرينه المقابل (bx.js) */
const bkReg=(n,ref,h)=>{(window.BKH=window.BKH||{})[n+'|'+ref]=h;return h};
const bk=(n,ref,task,ans,note)=>bkReg(n,ref,`<div class="ebk"><div class="eh"><span class="tg">في كتابك</span><b>تمرين ${n}</b><span class="ref">${ref}</span></div><p>${task}</p>${ans?`<details><summary>${Array.isArray(ans)?'الإجابات (بأرقام البنود)':'الإجابة'}</summary>${Array.isArray(ans)?`<ol class="ans" lang="en">${ans.map(a=>`<li>${a}</li>`).join('')}</ol>`:`<p>${ans}</p>`}${note?`<p class="ans-n">${note}</p>`:''}</details>`:''}</div>`);
/* مقطع من صوتيات الكتاب: يُرفع الملف إلى courses/english/audio/track-NN.mp3 */
const au=(track,ref,task)=>`<div class="aud"><div class="eh"><span class="tg">استمع</span><b>المقطع <span class="ltr" dir="ltr">${track}</span></b><span class="ref" style="color:var(--muted);font-size:13px">${ref}</span></div><p style="margin:4px 0">${task}</p>
 <audio controls preload="metadata" src="audio/track-${String(track).padStart(2,'0')}.mp3" onerror="this.hidden=true;this.nextElementSibling.hidden=false"></audio><p class="miss" hidden>مقطع الصوت ${track} من صوتيات الكتاب لم يُرفع بعد، وسيضيفه المدرب. شغّله الآن من قرص الكتاب إن توفّر.</p></div>`;
/* معلومة محدّثة: ما في الكتاب صحيح وقت طباعته وتغيّر بعدها */
const upd=html=>`<div class="upd"><b>معلومة محدّثة (إضافة من خارج الكتاب):</b> ${html}</div>`;
/* بطاقتا الطالب أ والطالب ب لمهمة ثنائية (بيانات جديدة من عندنا) */
const ab=(a,b)=>`<div class="card-ab"><div><h4>الطالب أ</h4>${a}</div><div><h4>الطالب ب</h4>${b}</div></div>`;

/* ---- املأ الفراغ بالاختيار: items [{s:'... ___ ...', o:[خيارات], a:رقم الصحيح, why}] (الجملة إنجليزية) ---- */
function gaps(el,B,o){el.classList.add('pk','gp');const PM=G.PLCBOOK&&G.PLCBOOK.perm;if(PM)o={...o,items:o.items.map(it=>{if(!Array.isArray(it.o)||it.o.length<2||typeof it.a!=='number')return it;const p=PM(it.s,it.o.length);return {...it,o:p.map(i=>it.o[i]),a:p.indexOf(it.a)}})};
 let h=o.intro?`<p class="pk-in">${o.intro}</p>`:'';
 h+=o.items.map((it,i)=>`<div class="pk-it" data-i="${i}"><p class="gp-s" lang="en">${(o.items.length>1?`<b>${i+1}.</b> `:'')+it.s.replace('___',`<select aria-label="اختر الكلمة"><option value="">…</option>${it.o.map((x,j)=>`<option value="${j}">${x}</option>`).join('')}</select>`)}</p><div class="pk-why" hidden></div></div>`).join('');
 h+='<div class="pk-score" hidden></div>';el.innerHTML=h;const done={};
 el.querySelectorAll('.pk-it').forEach(box=>{const i=+box.dataset.i,it=o.items[i],sel=box.querySelector('select'),w=box.querySelector('.pk-why');
  sel.onchange=()=>{if(sel.value==='')return;const ok=+sel.value===it.a;sel.classList.toggle('ok',ok);sel.classList.toggle('no',!ok);
   const full=it.s.replace('___',`<b>${it.o[it.a]}</b>`);
   w.innerHTML=ok?`<b>صحيح.</b> ${it.why||''}<div class="enb" lang="en"><p>${full} ${sp(full)}</p></div>`:`<b>ليس هذا.</b> ${it.hint||'جرّب كلمة أخرى.'}`;w.hidden=false;
   if(ok)done[i]=1;if(Object.keys(done).length===o.items.length){const s=el.querySelector('.pk-score');s.innerHTML='أكملت الجمل كلها.';s.hidden=false}}})}
/* ---- اكتب الجملة: items [{q:'المطلوب', a:['إجابة مقبولة', …], hint}] — التصحيح يتجاهل حالة الأحرف والمسافات الزائدة والنقطة الأخيرة والاختصارات الشائعة ---- */
const norm=s=>String(s).toLowerCase().replace(/[’‘`]/g,"'").replace(/\s+/g,' ').replace(/\s*([?.!,])\s*/g,'$1').replace(/[.!]+$/,'').trim()
 .replace(/\bit is\b/g,"it's").replace(/\bthey are\b/g,"they're").replace(/\bi have\b/g,"i've").replace(/\bhas not\b/g,"hasn't").replace(/\bhave not\b/g,"haven't").replace(/\bdo not\b/g,"don't").replace(/\bdoes not\b/g,"doesn't").replace(/\bwill not\b/g,"won't").replace(/\bmust not\b/g,"mustn't").replace(/\bthere is\b/g,"there's").replace(/\bis not\b/g,"isn't").replace(/\bare not\b/g,"aren't").replace(/\bdid not\b/g,"didn't").replace(/\bthey will\b/g,"they'll").replace(/\bit will\b/g,"it'll").replace(/\bwe will\b/g,"we'll").replace(/\bi will\b/g,"i'll").replace(/\bhe has\b/g,"he's").replace(/\bshe has\b/g,"she's").replace(/\bwe have\b/g,"we've").replace(/\bthey have\b/g,"they've").replace(/\byou have\b/g,"you've").replace(/\bwas not\b/g,"wasn't").replace(/\bwere not\b/g,"weren't");
function typ(el,B,o){el.classList.add('pk','ty');
 let h=o.intro?`<p class="pk-in">${o.intro}</p>`:'';
 h+=o.items.map((it,i)=>`<div class="pk-it" data-i="${i}"><p>${o.items.length>1?`<b>${i+1}.</b> `:''}${it.q}</p><input type="text" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="اكتب الجملة"><div class="pk-row"><button type="button" class="pk-b" data-c>تحقّق</button><button type="button" class="pk-b" data-s>أظهر الإجابة</button></div><div class="pk-why" hidden></div></div>`).join('');
 el.innerHTML=h;
 el.querySelectorAll('.pk-it').forEach(box=>{const it=o.items[+box.dataset.i],inp=box.querySelector('input'),w=box.querySelector('.pk-why');
  const show=ok=>{w.innerHTML=(ok===true?'<b>صحيح.</b> ':ok===false?`<b>ليس بعد.</b> ${it.hint||'راجع القاعدة وحاول مرة أخرى.'} `:'<b>الإجابة:</b> ')+(ok===false?'':`<div class="enb" lang="en"><p>${it.a[0]} ${sp(it.a[0])}</p></div>${it.why?`<span>${it.why}</span>`:''}`);w.hidden=false};
  const chk=()=>{if(!inp.value.trim())return;show(it.a.some(a=>norm(a)===norm(inp.value)))};
  box.querySelector('[data-c]').onclick=chk;inp.addEventListener('keydown',ev=>{if(ev.key==='Enter')chk()});box.querySelector('[data-s]').onclick=()=>show(null)})}

/* نسخ من أدوات kit تلف الجمل الإنجليزية الخالصة باتجاه من اليسار إلى اليمين */
const isEn=s=>/^[\x20-\x7E’‘…–—]+$/.test(String(s).replace(/<[^>]+>/g,''));
const W=s=>isEn(s)?e(s):s;
const cases=(el,B,o)=>K.cases(el,B,{...o,cases:o.cases.map(c=>({...c,q:W(c.q),opts:c.opts.map(x=>[W(x[0]),x[1],x[2]])}))});
const tf=(el,B,o)=>K.tf(el,B,{...o,items:o.items.map(x=>[W(x[0]),x[1],x[2]])});
const sort=(el,B,o)=>K.sort(el,B,{...o,items:o.items.map(x=>[W(x[0]),x[1],x[2]])});
const order=(el,B,o)=>K.order(el,B,{...o,steps:o.steps.map(x=>Array.isArray(x)?[W(x[0]),x[1]]:W(x))});

/* ===== «اشرح أولاً»: شرح قاعدة من خارج الكتاب قبل الحوارات والتمارين =====
   gram.js في كل مقرر يسجّل: ENK.gram('u1-l1',{title,short,q,intro,rows,head,ex,note,lab:{title,intro,items}})
   فيُضاف للدرس قسم في «رسمي» بعد «ماذا ستتعلم؟» ومحطة أولى في «التفاعلي»، وتُعاد أرقام المحطات. */
const GRAM={};
const gram=(id,s)=>{GRAM[id]=s};
const gramParts=s=>{const tag='إضافة من خارج الكتاب';const nt=Array.isArray(s.note)?`<ul>${s.note.map(x=>`<li>${x}</li>`).join('')}</ul>`:s.note?`<p>${s.note}</p>`:'';
  const table=s.rows?vt(s.rows,s.head):'';const ex=s.ex&&s.ex.length?eb(s.ex):'';
  const labW=s.lab?((el,B)=>gaps(el,B,{intro:s.lab.intro,items:s.lab.items})):null;
  const theory=[{h:`${s.title} (${tag})`,html:`<p>${s.intro}</p>${table}${ex}${nt}${s.lab?`<p><b>مختبر مصغّر: ${s.lab.title}</b></p>`:''}`}];
  if(labW)theory.push({widget:labW});
  const station={st:0,short:s.short||s.title,title:s.title,q:s.q,
    side:[{add:s.intro}],
    body:[{html:table+ex},...(s.note?[{tip:nt}]:[]),...(labW?[{widget:labW,title:'مختبر مصغّر: '+s.lab.title}]:[])]};
  return {theory,station}};
if(G.PLCBOOK&&!G.PLCBOOK.__gram){const ol=G.PLCBOOK.lesson;G.PLCBOOK.__gram=1;
  G.PLCBOOK.lesson=L=>{const s=GRAM[L.id];
    if(s){const p=gramParts(s);
      if(Array.isArray(L.theory)){const i=L.theory.findIndex(b=>b.h==='ماذا ستتعلم؟');L.theory.splice(i+1,0,...p.theory)}
      if(Array.isArray(L.stations)){const i=L.stations.findIndex(b=>b.intro);L.stations.splice(i+1,0,p.station)}}
    if(Array.isArray(L.theory)&&!L.__nh){L.__nh=1;const TH=[].concat(...L.theory.filter(b=>b&&b._think).map(b=>b._think));
      if(TH.length){const i=L.theory.findIndex(b=>b.h==='تمارين الكتاب');if(i>=0)L.theory.splice(i,0,{widget:nhAllThink(TH)})}}
    /* صوتيات الكتاب داخل تماريننا (قرار المدرب، نوفمبر 2026): قسم «الاستماع» يُلغى، وكل مقطع يُربط بتمرينه في bx.js */
    if(Array.isArray(L.theory)&&!L.__trk){L.__trk=1;const A=L.theory.filter(b=>b.h==='الاستماع'&&b.html);
      if(A.length){const T=[];let rest='';
        A.forEach(b=>{rest+=b.html.replace(/<div class="aud">([\s\S]*?)<p class="miss" hidden>[\s\S]*?<\/p><\/div>/g,(m,inn)=>{const src=(inn.match(/src="([^"]+)"/)||[])[1];const ref=((inn.match(/class="ref"[^>]*>([^<]*)</)||[])[1]||'');const task=((inn.match(/<p style="margin:4px 0">([\s\S]*?)<\/p>/)||[])[1]||'');const n=(ref.match(/التما?رين(?:ان)?\s+([0-9]+)/)||[])[1];const id=((src||'').match(/track-([^.\/]+)\.mp3/)||[])[1];if(src)T.push({src,id,n,ref,task});return ''})});
        (G.PLCBOOK.trk=G.PLCBOOK.trk||{})[L.id]=T;
        L.theory=L.theory.filter(b=>A.indexOf(b)<0);
        if(rest.replace(/\s+/g,'')){const X=L.theory.find(b=>b.h==='تمارين الكتاب'&&typeof b.html==='string');if(X)X.html+=rest;else L.theory.push({h:'تمارين الكتاب',html:rest})}}}
    /* صوتيات الكتاب في «التفاعلي»: قسم «الاستماع» في الرسمي يصير محطة أخيرة بنفس المقاطع */
    if(Array.isArray(L.stations)&&Array.isArray(L.theory)&&!L.stations.some(b=>b._aud)){
      const A=L.theory.filter(b=>b.h==='الاستماع'&&b.html);
      if(A.length)L.stations.push({st:0,_aud:1,short:'الاستماع',title:'الاستماع من صوتيات الكتاب',q:'استمع إلى مقاطع الكتاب وحل تمارينها في كتابك.',
        ref:A.map(b=>b.ref).filter(Boolean).join('، '),body:A.map(b=>({html:b.html}))})}
    if(Array.isArray(L.stations)){let n=0;const M={};
      /* تمارين «يقابل» (bx.js) مربوطة برقم المحطة الأصلي: نحفظ خريطة الرقم القديم ← الجديد */
      L.stations.forEach(b=>{if(b.st==null)return;const nw=++n;if(b.st>0&&!b._old)M[b.st]=nw;(b._old||[]).forEach(o=>{M[o]=nw});b.st=nw});
      (G.PLCBOOK.stMap=G.PLCBOOK.stMap||{})[L.id]=M}
    return ol(L)}}

/* ===== مختبر التركيب: يختار المتدرب من أزرار، فتتكوّن الجملة أمامه بقطع ملوّنة تحت كل قطعة وظيفتها،
   مع رسم يتغير، وسطر يشرح السبب، وتنبيه إذا كان التركيب خطأً.
   labB(el,B,{intro,controls:[{k,label,opts:[[v,نص]]}],out:s=>({svg,pieces:[[نص,لون n|k|q|x|r,وظيفة]],say,ar,why,bad})}) */
const labB=(el,B,o)=>{const s={};o.controls.forEach(c=>{s[c.k]=c.init!=null?c.init:c.opts[0][0]});
  el.innerHTML=`${o.intro?`<p class="pk-i">${o.intro}</p>`:''}<div class="lb-c"></div><div class="lb-svg"></div><div class="lb-out" aria-live="polite"></div>`;
  const C=el.querySelector('.lb-c'),SV=el.querySelector('.lb-svg'),OUT=el.querySelector('.lb-out');
  o.controls.forEach(c=>{const r=document.createElement('div');r.className='lb-row';
    r.innerHTML=`<span class="lb-l">${c.label}</span><div class="lb-btns">${c.opts.map(([v,t])=>`<button type="button" data-v="${esc(v)}">${t}</button>`).join('')}</div>`;
    r.querySelectorAll('button').forEach(b=>b.onclick=()=>{s[c.k]=b.dataset.v;draw()});C.appendChild(r);c._r=r});
  function draw(){o.controls.forEach(c=>c._r.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===String(s[c.k]))));
    const r=o.out(s)||{};SV.innerHTML=r.svg||'';
    OUT.innerHTML=`${r.bad?`<div class="lb-bad">${r.bad}</div>`:''}${r.pieces?`<div class="lb-sent">${r.pieces.map(([t,c,l])=>`<span class="lb-p ${c}"><span class="pc ${c}">${t}</span>${l?`<small>${l}</small>`:''}</span>`).join('')}${r.say?sp(r.say):''}</div>`:''}${r.ar?`<div class="lb-ar">${/[\u0600-\u06FF]/.test(r.ar)?r.ar:e(r.ar)}</div>`:''}${r.why?`<div class="lb-why">${r.why}</div>`:''}`;{const S=OUT.querySelector('.lb-sent');if(S){let f=19;S.querySelectorAll('.pc').forEach(x=>x.style.fontSize='');const W=()=>S.scrollWidth>S.clientWidth+1;if(W()){S.style.flexWrap='nowrap';while(W()&&f>11){f-=1;S.querySelectorAll('.pc').forEach(x=>{x.style.fontSize=f+'px';x.style.paddingInline=Math.max(4,f-9)+'px'})}if(W()){S.style.flexWrap='wrap';S.querySelectorAll('.pc').forEach(x=>{x.style.whiteSpace='normal';x.style.fontSize='';x.style.paddingInline=''})}}}}
    if(B&&B.ltrU)try{B.ltrU(OUT)}catch(e){}}
  draw()};
/* يحوّل الصيغ المختلطة (إنجليزي + عربي بينها +) داخل النص العربي إلى سطر صيغة من اليسار لليمين */
const fmAR=/[؀-ۿ]/;
const fmAuto=h=>{if(!h||typeof h!=='string'||h.indexOf('+')<0)return h;
  h=h.replace(/<span class="en" lang="en"[^>]*>([^<]*\+[^<]*)<\/span>/g,(m,x)=>fmAR.test(x)?x.split(/\s*\+\s*/).map(t=>fmAR.test(t)?t:`<span class="en" lang="en">${t}</span>`).join(' + '):m);
  const PH=['التصريف الثالث للفعل','التصريف الثالث','الفعل الأصلي','الفعل كما هو','الفعل بلا s','الفعل','الفاعل','الصفة القصيرة','الصفة الطويلة','الصفة','صفة','الاسم','اسم','فعل','المادة','العبوة','الرقم','رقم','كلمة السؤال','مدة','نقطة البداية','بداية','سنة','مكان','شركة','الجامعة','التخصص','المقارنة','مقارنة','الباقي','الشيء','المكان'].join('|');
  const EN1=`(?:<span class="en" lang="en"[^>]*>[^<]*</span>|[A-Za-z][A-Za-z'’…\\-]*(?: [A-Za-z'’…\\-]+){0,3})`;
  const TOK=`(?:(?<![\\u0621-\\u064A])(?:${PH})(?![\\u0621-\\u064A])(?:\\s*(?:بـ|بلا|مع)?\\s*<span class="en" lang="en"[^>]*>[^<]{1,4}</span>)?|${EN1}(?:\\s*(?:/|·|أو)\\s*${EN1})*)`;
  const re=new RegExp(`${TOK}(?:\\s*\\+\\s*${TOK})+`,'g');
  return h.replace(re,m=>{const pl=m.split(/\s*\+\s*/).map(t=>{const x=t.replace(/<[^>]+>/g,'').trim();return /[A-Za-z]/.test(x)&&/(^|\s)أو(\s|$)/.test(x)?x.replace(/\s*أو\s*/g,' / '):x});if(!pl.some(t=>fmAR.test(t))||!pl.some(t=>/[A-Za-z]/.test(t)))return m;const o=[];pl.forEach((t,i)=>{if(i)o.push('+');o.push(t)});return fm(...o)})};
/* ===== نهج الشرح (dev-kit/guides/TEACHING_APPROACH.md): مربع «الفكرة» لكل جزء من «شرح القاعدة» =====
   G.NH[عنوان الجزء]={say:[ar,en],life:[[en,ar]],scene:{title,ctrl,svg,ask,out},think:[[ar,en]]}
   الألوان الثابتة: a فاعل أخضر · k فعل أصفر · n شيء أزرق · x كلمة القاعدة أحمر · q باقي الجملة */
const NHcss=`
.nh{border:2px solid #1f8a5b;border-radius:16px;overflow:hidden;background:var(--surface,#fff);margin:6px 0 16px}
.nh-h{background:#e2f2e8;padding:9px 14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.nh-h .tg{background:#1f8a5b;color:#fff;border-radius:999px;padding:2px 10px;font-size:13px;font-weight:700}
.nh-b{padding:12px 14px;display:flex;flex-direction:column;gap:12px}
.nh-s{border-radius:12px;padding:10px 12px;background:var(--surface-2,#f4f6f5)}
.nh-s>h4{margin:0 0 6px;font-size:.95em;line-height:1.7}
.nh-s>h4 i{font-style:normal;margin-inline-end:6px;background:#1f8a5b;color:#fff;border-radius:7px;padding:0 7px;font-size:.85em}
.nh-say{font-size:1.06em;line-height:1.9;margin:0}
.nh-life{display:flex;flex-direction:column;gap:6px;margin-top:8px}
.nh-l{display:flex;flex-direction:column;gap:2px;background:var(--surface,#fff);border-radius:10px;padding:6px 10px}
.nh-en{direction:ltr;text-align:left;font-family:var(--font-la,var(--font));font-weight:700;font-size:1.05em}
.nh-gl{align-self:flex-end;cursor:pointer;border-radius:7px;padding:0 6px;color:var(--muted);transition:filter .2s}
.nh-gl.hid{filter:blur(6px);background:var(--surface-2,#eef1ef);user-select:none}
.nh-ctl{display:flex;flex-direction:column;gap:6px;margin-bottom:8px}
.nh-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.nh-row .lb{font-weight:700;color:var(--muted);font-size:14px;min-width:5.5em}
.nh-row .bt{display:flex;gap:6px;flex-wrap:wrap}
.nh-row button{font:inherit;font-weight:700;border:2px solid #c9d7e1;background:var(--surface,#fff);color:inherit;border-radius:10px;padding:5px 12px;cursor:pointer}
.nh-row button[aria-pressed="true"]{background:#2f6b8f;border-color:#2f6b8f;color:#fff}
.nh-row input[type=range]{flex:1 1 200px;accent-color:#2f6b8f;height:28px;direction:ltr}
.nh-row .v{font-family:var(--font-la,var(--font));font-weight:700;direction:ltr;min-width:4em}
.nh-svg{background:#f4f8fb;border-radius:12px;padding:4px}
.nh-svg svg{width:100%;height:auto;display:block;max-height:340px}
.nh-ask{margin-top:8px;font-weight:700}
.nh-ask .q{margin-bottom:6px}
.nh-ask .op{display:flex;gap:6px;flex-wrap:wrap}
.nh-ask .op button{font:inherit;font-weight:700;border:2px solid #d9d2c4;background:var(--surface,#fff);color:inherit;border-radius:10px;padding:6px 14px;cursor:pointer}
.nh-ask .op button.ok{background:#e2f2e8;border-color:#1f8a5b}.nh-ask .op button.no{background:#fbe9e4;border-color:#c4553f}
.nh-ask .hn{color:#c4553f;margin-top:4px;font-weight:600}
.nh-out{margin-top:8px;display:flex;flex-direction:column;gap:6px}
.nh-out[hidden]{display:none}
.nh-why{font-weight:600;line-height:1.8}
.nh bdi.nw{white-space:nowrap}
.nh-th ol{margin:0;padding-inline-start:1.4em;line-height:1.9;font-weight:600}
.vx-t.x{background:#c4553f;color:#fff;border-color:#c4553f}
html[data-theme=dark] .nh-svg{background:#e8eef2}
`;
const nhCssAdd=()=>{if(document.getElementById('nh-css'))return;const s=document.createElement('style');s.id='nh-css';s.textContent=NHcss;document.head.appendChild(s);if(G.VX)G.VX.css()};
const nhEN=B=>!!(B&&B.lang&&B.lang()==='en');
const nhGl=(ar,en)=>`<span class="nh-gl hid" data-keep-ar dir="rtl" title="${en?'Tap to see the meaning':'المس لترى المعنى'}">${ar}</span>`;
const nhTap=el=>el.addEventListener('click',ev=>{const g=ev.target.closest('.nh-gl');if(g)g.classList.remove('hid')});
const nhBd=t=>/</.test(t)?t:String(t).replace(/[A-Za-z][A-Za-z0-9'’,.\/…+\- ]*[A-Za-z0-9'’.…?!]/g,m=>`<bdi dir="ltr"${m.length<=16?' class="nw"':''}>${m}</bdi>`);
const nhThink=(x,en)=>`<ol>${x.map(q=>`<li>${en?q[1]:nhBd(fmAuto(q[0]))}</li>`).join('')}</ol>`;
const nhScene=(host,sc,B)=>{const en=nhEN(B),L=p=>Array.isArray(p)?(en?p[1]:p[0]):(p||'');const st={};
  (sc.ctrl||[]).forEach(c=>{st[c.k]=c.init!=null?c.init:(c.range?c.range[0]:c.opts[0][0])});
  host.innerHTML=`<div class="nh-ctl">${(sc.ctrl||[]).map(c=>`<div class="nh-row" data-k="${c.k}"><span class="lb">${L(c.label)}</span>${c.range?`<input type="range" min="${c.range[0]}" max="${c.range[1]}" step="${c.range[2]}" value="${st[c.k]}" aria-label="${esc(L(c.label))}"><span class="v"></span>`:`<div class="bt">${c.opts.map(([v,t])=>`<button type="button" data-v="${esc(v)}">${Array.isArray(t)?L(t):t}</button>`).join('')}</div>`}</div>`).join('')}</div>
   <div class="nh-svg"></div><div class="nh-ask"></div><div class="nh-out"><div class="vx-row"></div><div class="nh-why"></div><div class="nh-m"></div></div>`;
  const $=q=>host.querySelector(q),SV=$('.nh-svg'),AS=$('.nh-ask'),OUT=$('.nh-out');let solved=false;
  const show=()=>{const r=sc.out(st)||{};OUT.hidden=false;const row=OUT.querySelector('.vx-row');
    if(G.VX&&G.VX.tiles){G.VX.tiles(row,r.t||[]);row.style.flexWrap='wrap';row.style.rowGap='8px';row.querySelectorAll('.vx-t').forEach(x=>{x.style.fontSize='';x.style.padding='';x.style.whiteSpace='normal'})}else row.innerHTML=(r.t||[]).map(z=>`<span class="vx-t ${z[2]||''}">${z[1]}</span>`).join(' ');
    const say=r.say||(r.t||[]).map(z=>z[1]).join(' ').replace(/<[^>]+>/g,'').replace(/\s+([.,?!])/g,'$1');
    OUT.querySelector('.nh-why').innerHTML=`${sp(say)} ${en?L(r.why):fmAuto(L(r.why))}`;OUT.querySelector('.nh-m').innerHTML=r.ar?nhGl(r.ar,en):''};
  const draw=(fresh)=>{(sc.ctrl||[]).forEach(c=>{const row=host.querySelector(`.nh-row[data-k="${c.k}"]`);if(c.range){row.querySelector('.v').textContent=(c.fmt?c.fmt(st[c.k]):st[c.k])+(c.unit?' '+c.unit:'')}else row.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===String(st[c.k])))});
    SV.innerHTML=sc.svg?sc.svg(st,en):'';SV.hidden=!sc.svg;
    const a=sc.ask&&sc.ask(st);if(fresh)solved=false;
    if(a&&!solved){OUT.hidden=true;const hs=o=>[...String(o)].reduce((h,c)=>(h*31+c.charCodeAt(0))%9973,7);const OP=[...a.opts].sort((x,y)=>hs(x)-hs(y));AS.innerHTML=`<div class="q">${L(a.q)}</div><div class="op" dir="ltr">${OP.map(o=>`<button type="button" data-o="${esc(o)}">${o}</button>`).join('')}</div><div class="hn"></div>`;
      AS.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(b.dataset.o===String(a.a)){b.classList.add('ok');solved=true;AS.querySelectorAll('button').forEach(x=>x.disabled=true);show()}else{b.classList.add('no');AS.querySelector('.hn').textContent=L(a.hint||['جرّب مرة ثانية.','Try again.'])}})}
    else{if(!a)AS.innerHTML='';show()}};
  (sc.ctrl||[]).forEach(c=>{const row=host.querySelector(`.nh-row[data-k="${c.k}"]`);
    if(c.range){const i=row.querySelector('input');i.oninput=()=>{st[c.k]=+i.value;draw(true)}}
    else row.querySelectorAll('button').forEach(b=>b.onclick=()=>{const v=b.dataset.v;st[c.k]=isNaN(+v)||v===''?v:(typeof c.opts[0][0]==='number'?+v:v);draw(true)})});
  draw(true)};
const nhW=(x,t)=>(el,B)=>{nhCssAdd();const en=nhEN(B),L=p=>Array.isArray(p)?(en?p[1]:p[0]):(p||'');
  el.innerHTML=`<div class="nh" data-notr><div class="nh-h"><span class="tg">${en?'The idea':'الفكرة'}</span><b>${L(x.title)||nhBd(t)}</b><small style="color:var(--muted)">${en?'(not from the book)':'(إضافة من خارج الكتاب)'}</small></div><div class="nh-b">
   ${x.say?`<div class="nh-s"><h4><i>1</i>${en?'From your life':'من حياتك'}</h4><p class="nh-say">${fmAuto(L(x.say))}</p>${x.life?`<div class="nh-life">${x.life.map(([s,a])=>`<div class="nh-l"><span class="nh-en" lang="en">${s} ${sp(s)}</span>${nhGl(a,en)}</div>`).join('')}</div>`:''}</div>`:''}
   ${x.scene?`<div class="nh-s"><h4><i>2</i>${en?'Try it yourself':'جرّب بيدك'}${x.scene.title?': '+L(x.scene.title):''}</h4><div class="nh-scene"></div></div>`:''}
   ${x.think?`<div class="nh-s nh-th"><h4><i>3</i>${en?'Before you answer, ask yourself':'قبل ما تحل، اسأل نفسك'}</h4>${nhThink(x.think,en)}</div>`:''}
  </div></div>`;
  nhTap(el);if(x.scene)nhScene(el.querySelector('.nh-scene'),x.scene,B);if(B&&B.ltrU)try{B.ltrU(el)}catch(e){}};
const nhAllThink=TH=>(el,B)=>{nhCssAdd();const en=nhEN(B);el.innerHTML=`<div class="nh" data-notr><div class="nh-h"><span class="tg">${en?'Before the exercises':'قبل التمارين'}</span><b>${en?'Before you answer, ask yourself':'قبل ما تحل، اسأل نفسك'}</b></div><div class="nh-b nh-th">${TH.map(([h,q])=>`<div class="nh-s"><h4>${en?h:nhBd(h)}</h4>${nhThink(q,en)}</div>`).join('')}</div></div>`};
/* ===== «شرح القاعدة»: قسم شامل واحد يدمج شرح قاعدة الدرس =====
   const R=ENK.rule({title,ref,intro,parts:[{t,short,q,ref,add,text,head,rows,ex,html,watch,art,cap,dlg,lab:{title,w|intro+items}}]})
   ثم في الدرس: theory:[…ماذا ستتعلم، ...R.theory, …]  و stations:[{intro:true}, ...R.stations, …]
   «رسمي»: عنوان «شرح القاعدة: …» ثم كل جزء بعنوان فرعي وجدوله وأمثلته و«انتبه» ومختبره. «التفاعلي»: محطة لكل جزء. */
const rule=R=>{const TAG='إضافة من خارج الكتاب';
  const labW=l=>l?(l.w||((el,B)=>gaps(el,B,{intro:l.intro,items:l.items}))):null;
  const isLat=x=>/^[\x20-\x7E·—–…’→✔✘]+$/.test(String(x));
  /* جدول مرتب: أعمدة متساوية، والخلية الإنجليزية من اليسار لليمين */
  const grid=g=>g?`<div class="rt-wrap"><table class="rt"><thead><tr>${g.head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${g.rows.map(r=>`<tr>${r.map((c,j)=>`<td${isLat(c)?' class="en" lang="en" dir="ltr"':''}${j===0?' data-k="1"':''}>${isLat(c)?c:fmAuto(c)}${j===r.length-1&&isLat(c)&&/[a-z]{2}/i.test(c)?' '+sp(c.replace(/ · .*/,'')):''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';
  const pairsH=ps=>ps&&ps.length?`<div class="wx">${ps.map(p=>`<div class="wx-r"><span class="wx-x">✘ ${W(p[0])}</span><span class="wx-ok">✔ ${W(p[1])}</span>${p[2]?`<span class="wx-why">${p[2]}</span>`:''}</div>`).join('')}</div>`:'';
  const watchH=p=>{const w=p.watch?(Array.isArray(p.watch)?p.watch.map(x=>`<p>${x}</p>`).join(''):`<p>${p.watch}</p>`):'';return pairsH(p.pairs)+w};
  const pts=a=>(a||[]).map(x=>`<p class="rpt">${x}</p>`).join('');
  const body=p=>`${p.lead?`<p class="rlead">${fmAuto(p.lead)}</p>`:''}${pts((p.points||[]).map(fmAuto))}${(p.subs||[]).map(s=>`<h4 class="rsub">${s.h}</h4>${pts((s.points||[]).map(fmAuto))}`).join('')}${p.text?`<p class="rpt">${fmAuto(p.text)}</p>`:''}`;
  const theory=[{h:'شرح القاعدة: '+R.title,ref:R.ref,html:R.intro?`<p>${R.intro}</p>`:''}];
  const stations=[];
  const NH=G.NH||{},TH=[];
  R.parts.forEach((p,i)=>{const tbl=(p.rows?vt(p.rows,p.head):'')+grid(p.grid);const ex=p.ex&&p.ex.length?eb(p.ex):'';const dlg=p.dlg?dl(p.dlg):'';
    const hasW=p.watch||(p.pairs&&p.pairs.length);const nh=NH[p.t];const h3=`<h3 class="rh">${i+1}. ${p.t}${p.add?` <small>(${TAG})</small>`:''}${p.ref?` <span class="ref">${p.ref}</span>`:''}</h3>`;
    if(nh){const pb=nh.say?Object.assign({},p,{lead:''}):p;theory.push({html:h3});theory.push({widget:nhW(nh,p.t)});theory.push({html:`<div class="rbody">${body(pb)}</div>${tbl}${ex}${dlg}${p.html||''}`});if(nh.think)TH.push([`${i+1}. ${p.t}`,nh.think])}
    else theory.push({html:`${h3}<div class="rbody">${body(p)}</div>${tbl}${ex}${dlg}${p.html||''}`});
    if(hasW)theory.push({note:`<b>انتبه: الخطأ والصحيح</b>${watchH(p)}`});
    (p.labs||(p.lab?[p.lab]:[])).forEach(l=>{theory.push({html:`<p><b>مختبر مصغّر: ${l.title}</b></p>`});theory.push({widget:labW(l)})});
    const sb=body(p);const side=sb?[p.add?{add:sb}:{tip:sb}]:[];
    stations.push({st:0,_old:p.old||[],short:p.short||p.t,title:p.t,q:p.q,ref:p.ref,...(p.art?{art:p.art,cap:p.cap}:{}),side,
      body:[...(nh?[{widget:nhW(nh,p.t)}]:[]),...(tbl||ex||dlg||p.html?[{html:tbl+ex+dlg+(p.html||'')}]:[]),...(hasW?[{watch:watchH(p)}]:[]),...(p.labs||(p.lab?[p.lab]:[])).map(l=>({widget:labW(l),title:'مختبر مصغّر: '+l.title}))]})});
  if(TH.length)theory[0]._think=TH;
  return {theory,stations}};
/* سطر صيغة: يُعرض من اليسار لليمين بترتيب الجملة الإنجليزية، والأجزاء العربية رقع داخلها */
const fm=(...p)=>`<span class="fm" dir="ltr">${p.map(x=>x==='+'?'<i>+</i>':/[\u0600-\u06FF]/.test(x)?`<span class="fm-ar" dir="rtl">${x}</span>`:`<b lang="en">${x}</b>`).join('')}</span>`;

/* ===== «من الواقع» (تبويب في الدرس): حوار من الحياة اليومية لشاب في المملكة يطبق فيه درس اليوم =====
   البيانات في ملف المقرر: G.REAL['<lesson id>']={title:[ar,en],scene:[ar,en],me:[ar,en],them:{n,role:[ar,en]},
   steps:[{who:'them',t,ar} | {who:'me',pick:[{t,ok:1}|{t,why:[ar,en]}],ar,hint?} | {who:'me',fill:'… ___ …',opts,a,why:[ar,en],ar}
          | {who:'note',t:[ar,en]}], used:[[ar,en]]}. إضافة من خارج الكتاب. */
const RLcss=`.rl{border:1px solid var(--line,#d7e0e6);border-radius:14px;background:var(--card,#fff);overflow:hidden;margin:6px 0 14px}
.rl-h{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:10px 14px;background:#eef6f1;border-bottom:1px solid var(--line,#d7e0e6)}
.rl-h .tg{background:#1f7a4d;color:#fff;border-radius:999px;padding:2px 10px;font-size:.8em}
.rl-sc{padding:10px 14px;color:var(--ink,#1f2a33);line-height:1.8;border-bottom:1px dashed var(--line,#d7e0e6)}
.rl-who{display:flex;gap:14px;flex-wrap:wrap;font-size:.85em;color:var(--muted,#5b6b75);margin-top:4px}
.rl-who b{color:var(--ink,#1f2a33)}
.rl-chat{display:flex;flex-direction:column;gap:8px;padding:12px}
.rl-m{max-width:88%;padding:8px 12px;border-radius:14px;line-height:1.6}
.rl-m .nm{display:block;font-size:.75em;color:var(--muted,#5b6b75);margin-bottom:2px}
.rl-them{align-self:flex-end;background:#eef1f3;border-bottom-left-radius:4px}
.rl-me{align-self:flex-start;background:#dcf1e3;border-bottom-right-radius:4px}
.rl-them .tx,.rl-me .tx{direction:ltr;text-align:left;display:block;font-weight:600}
.rl-note{align-self:center;background:#fff8e1;border:1px dashed #e5c46a;border-radius:10px;padding:6px 12px;font-size:.92em;max-width:95%}
.rl-ask{border-top:1px solid var(--line,#d7e0e6);padding:12px;background:#fafcfd}
.rl-ask .q{font-weight:700;margin-bottom:8px}
.rl-ask .fl{direction:ltr;text-align:left;font-weight:600;margin-bottom:8px}
.rl-ask .fl u{display:inline-block;min-width:3em;border-bottom:2px solid #c0392b;text-decoration:none;text-align:center}
.rl-op{display:flex;flex-wrap:wrap;gap:8px}
.rl-op button{direction:ltr;text-align:left;border:1.5px solid var(--line,#c9d4db);background:#fff;border-radius:10px;padding:8px 12px;font:inherit;cursor:pointer;max-width:100%;white-space:normal}
.rl-op button.no{border-color:#c0392b;background:#fbe9e4;opacity:.75}
.rl-why{margin-top:8px;color:#a23b26;font-size:.92em}
.rl-hint{margin-top:6px;color:var(--muted,#5b6b75);font-size:.88em}
.rl-end{padding:12px 14px;border-top:1px solid var(--line,#d7e0e6);background:#eef6f1}
.rl-end ul{margin:6px 0;padding-inline-start:20px;line-height:1.8}
.rl-ex{direction:ltr;text-align:left;font-weight:600;color:#1f5f8b}
.rl-btn{border:none;background:#1f7a4d;color:#fff;border-radius:10px;padding:8px 14px;font:inherit;cursor:pointer;margin-top:6px}`;
const realRender=(L,el,B)=>{const R=(G.REAL||{})[L.id];if(!R){el.innerHTML='';return}
  nhCssAdd();if(!document.getElementById('rl-css')){const st=document.createElement('style');st.id='rl-css';st.textContent=RLcss;document.head.appendChild(st)}
  const en=nhEN(B),T=p=>Array.isArray(p)?(en?p[1]:p[0]):(p||'');
  el.innerHTML=`<div class="rl" data-notr><div class="rl-h"><span class="tg">${en?'Real life':'من الواقع'}</span><b>${T(R.title)}</b><small style="color:var(--muted)">${en?'(not from the book)':'(إضافة من خارج الكتاب)'}</small></div>
   <div class="rl-sc">${fmAuto(T(R.scene))}<div class="rl-who"><span>${en?'You':'أنت'}: <b>${T(R.me)}</b></span><span>${en?'With':'مع'}: <b lang="en">${R.them.n}</b> (${T(R.them.role)})</span></div></div>
   <div class="rl-chat"></div><div class="rl-ask"></div><div class="rl-end" hidden></div></div>`;
  nhTap(el);
  const chat=el.querySelector('.rl-chat'),ask=el.querySelector('.rl-ask'),end=el.querySelector('.rl-end');let i=0,errs=0;
  const bub=(who,t,ar,n)=>{const d=document.createElement('div');d.className='rl-m rl-'+who;d.innerHTML=`<span class="nm">${who==='me'?T(R.me):(n||R.them.n)}</span><span class="tx" lang="en">${t} ${sp(t)}</span>${ar?nhGl(ar,en):''}`;chat.appendChild(d)};
  const note=t=>{const d=document.createElement('div');d.className='rl-note';d.innerHTML=fmAuto(T(t));chat.appendChild(d)};
  const next=()=>{ask.innerHTML='';
    while(i<R.steps.length&&R.steps[i].who!=='me'){const s=R.steps[i++];if(s.who==='them')bub('them',s.t,s.ar,s.n);else note(s.t)}
    if(B&&B.ltrU)try{B.ltrU(chat)}catch(e){}
    if(i>=R.steps.length){ask.hidden=true;end.hidden=false;
      end.innerHTML=`<b>${en?'What you used from today\'s lesson':'وش استعملت من درس اليوم'}</b><ul>${(R.used||[]).map(u=>`<li>${T(u.t)}${u.ex?`<div class="rl-ex" dir="ltr" lang="en">${u.ex}</div>`:''}</li>`).join('')}</ul>
       <div>${errs?(en?`Wrong tries: ${errs}. Try again for a clean run!`:`محاولات خاطئة: ${errs}. جرّب مرة ثانية بدون أخطاء!`):(en?'Perfect, no mistakes!':'ممتاز، بدون أي خطأ!')}</div>
       <button type="button" class="rl-btn">${en?'Start again':'ابدأ من جديد'}</button>`;
      end.querySelector('.rl-btn').onclick=()=>realRender(L,el,B);return}
    ask.hidden=false;const s=R.steps[i];
    const opts=s.pick?s.pick.map(o=>o.t):s.opts;const ord=opts.map((o,k)=>[o,k]).sort((a,b)=>((ttsKey(a[0]+L.id)>ttsKey(b[0]+L.id))?1:-1));
    ask.innerHTML=`<div class="q">${s.pick?(en?'What do you say?':'وش تقول؟'):(en?'Complete your sentence:':'كمّل جملتك:')}</div>
      ${s.fill?`<div class="fl" lang="en">${s.fill.replace('___','<u>?</u>')}</div>`:''}
      <div class="rl-op">${ord.map(([o,k])=>`<button type="button" data-k="${k}" lang="en">${o}</button>`).join('')}</div>
      ${s.hint?`<div class="rl-hint">${fmAuto(T(s.hint))}</div>`:''}<div class="rl-why"></div>`;
    ask.querySelectorAll('.rl-op button').forEach(b=>b.onclick=()=>{const k=+b.dataset.k;
      const good=s.pick?!!s.pick[k].ok:opts[k]===s.a;
      if(!good){errs++;b.classList.add('no');b.disabled=true;const w=s.pick?s.pick[k].why:s.why;ask.querySelector('.rl-why').innerHTML=fmAuto(T(w)||(en?'Not quite. Try again.':'مو هذا. جرّب مرة ثانية.'));return}
      const t=s.pick?s.pick[k].t:s.fill.replace('___',s.a);bub('me',t,s.ar);i++;next();chat.lastElementChild&&chat.lastElementChild.scrollIntoView({block:'nearest'})})};
  next()};
G.realRender=realRender;G.REAL=G.REAL||{};
G.ENK={fm,fmAuto,e,eb,dl,vt,bk,au,upd,ab,sp,speak,speakP,gaps,typ,norm,esc,cases,tf,sort,order,W,gram,rule,labB};
})(window);
/* ===== «إخفاء الترجمة» (التخمين) و«الدرجات» — من مختبر المدرب =====
   - خلايا المعنى العربي في الجداول (.gl) وترجمات «كلمات الدرس» تُغطّى بضباب عند تشغيل «إخفاء الترجمة»؛ تظهر بالوقوف عليها أو لمسها.
     الافتراضي: مشغّل في وضع English، ومطفأ في العربي. الاختيار محفوظ على هذا الجهاز لكل وضع.
   - «الدرجات»: قائمة أسماء المتدربين مع + و − لكل اسم، محفوظة في هذا المتصفح فقط (لكل مقرر). */
(function(){const B=window.PLCBOOK||{},root=document.documentElement;
const isEn=()=>(B.lang?B.lang():'ar')==='en';
const AR=/[؀-ۿ]/,MEAN=/^(المعنى|الترجمة|Meaning)$/;
function mark(scope){(scope||document).querySelectorAll('table:not([data-glm])').forEach(t=>{t.setAttribute('data-glm','');const ths=[...t.querySelectorAll('thead th')];
  ths.forEach((th,i)=>{if(!MEAN.test(th.textContent.trim()))return;t.querySelectorAll('tbody tr').forEach(tr=>{const td=tr.children[i];if(td&&AR.test(td.textContent))td.classList.add('gl')})})})}
const css=document.createElement('style');css.textContent=`
html.guess :is(.gl,.lw-ar,.lw-mean,.lw-tr):not(.open){filter:blur(6px);cursor:pointer;user-select:none;transition:filter .2s}
@media (hover:hover){html.guess :is(.gl,.lw-ar,.lw-mean,.lw-tr):hover{filter:none}}
.gsbtn .sw{display:inline-block;width:28px;height:16px;border-radius:9px;background:rgba(255,255,255,.3);position:relative}
.gsbtn .sw::after{content:'';position:absolute;top:2px;inset-inline-start:2px;width:12px;height:12px;border-radius:50%;background:#fff;transition:inset-inline-start .2s}
.gsbtn[aria-pressed="true"] .sw{background:#2fb37a}.gsbtn[aria-pressed="true"] .sw::after{inset-inline-start:14px}
.mkpanel{position:fixed;inset-inline-end:12px;top:64px;z-index:60;width:min(360px,calc(100vw - 24px));max-height:70vh;overflow:auto;background:var(--surface);color:var(--fg);border:1px solid var(--line);border-radius:16px;box-shadow:0 12px 30px rgba(0,0,0,.18);padding:14px}
.mkpanel h3{margin:0 0 8px;font-size:17px;display:flex;justify-content:space-between;align-items:center}
.mkpanel .mkx{border:0;background:none;font-size:20px;cursor:pointer;color:var(--muted)}
.mkadd{display:flex;gap:8px}.mkadd input{flex:1;min-width:0;font:inherit;padding:6px 10px;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--fg)}
.mkadd button,.mkfoot button{font:inherit;font-weight:700;border:0;border-radius:10px;padding:6px 12px;background:#00875a;color:#fff;cursor:pointer}
.mkrow{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.mkn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:999px;padding:4px 6px 4px 12px;font-weight:700}
.mkn b{min-width:22px;text-align:center;font-family:var(--font-la,var(--font))}
.mkn button{width:28px;height:28px;border-radius:50%;border:0;cursor:pointer;font-weight:700;font-size:16px}
.mkn .p{background:#00875a;color:#fff}.mkn .m{background:var(--line);color:var(--fg)}
.mkfoot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:13px;color:var(--muted)}
.mkfoot button{background:var(--line);color:var(--fg);font-weight:600}
@media (max-width:600px){.gsbtn .sl,.mkbtn .sl{display:none}}`;
document.head.appendChild(css);
let guess=false;const GK='elib-guess-'+(isEn()?'en':'ar');
function setGuess(v){guess=v;root.classList.toggle('guess',v);try{localStorage.setItem(GK,v?'1':'0')}catch(e){};const b=document.querySelector('.gsbtn');if(b)b.setAttribute('aria-pressed',v)}
document.addEventListener('click',e=>{if(!guess)return;const g=e.target.closest('.gl,.lw-ar,.lw-mean,.lw-tr');if(g)g.classList.toggle('open')});
/* الدرجات */
const PS=location.pathname.split('/'),key='elib-marks-'+(PS[PS.indexOf('courses')+1]||'course');
let M=[];try{M=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){M=[]}
const save=()=>{try{localStorage.setItem(key,JSON.stringify(M))}catch(e){}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
let panel=null;
function draw(){if(!panel)return;const row=panel.querySelector('.mkrow');row.innerHTML='';
  M.forEach((m,i)=>{const s=document.createElement('span');s.className='mkn';s.innerHTML=`${esc(m.n)}<b>${m.s}</b>`;
   const mi=document.createElement('button');mi.type='button';mi.className='m';mi.textContent='−';mi.setAttribute('aria-label','إنقاص درجة '+m.n);
   const pl=document.createElement('button');pl.type='button';pl.className='p';pl.textContent='+';pl.setAttribute('aria-label','زيادة درجة '+m.n);
   mi.onclick=()=>{if(m.s>0)m.s--;else M.splice(i,1);save();draw()};pl.onclick=()=>{m.s++;save();draw()};s.append(mi,pl);row.appendChild(s)});
  panel.querySelector('.mkcount').textContent=M.length?`${M.length} ${isEn()?'trainees':'متدرب'}`:''}
function openPanel(){if(panel){panel.remove();panel=null;return}
  panel=document.createElement('div');panel.className='mkpanel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','الدرجات');
  panel.innerHTML=`<h3><span>الدرجات</span><button type="button" class="mkx" aria-label="إغلاق">×</button></h3><p style="margin:0 0 8px;font-size:13px;color:var(--muted)">أضف أسماء المتدربين، واضغط + عند كل إجابة صحيحة. الأسماء محفوظة في هذا المتصفح فقط. الضغط على − عند الصفر يحذف الاسم.</p>
   <div class="mkadd"><input placeholder="اسم المتدرب" aria-label="اسم المتدرب"><button type="button">إضافة</button></div><div class="mkrow"></div>
   <div class="mkfoot"><span class="mkcount"></span><button type="button" class="mkz">تصفير الدرجات</button></div>`;
  document.body.appendChild(panel);const inp=panel.querySelector('input'),add=()=>{const v=inp.value.trim();if(!v)return;M.push({n:v,s:0});inp.value='';save();draw();inp.focus()};
  panel.querySelector('.mkadd button').onclick=add;inp.addEventListener('keydown',e=>{if(e.key==='Enter')add()});
  panel.querySelector('.mkx').onclick=openPanel;panel.querySelector('.mkz').onclick=()=>{M.forEach(m=>m.s=0);save();draw()};draw();inp.focus()}
function buttons(){const ta=document.querySelector('.top-actions');if(!ta||ta.querySelector('.gsbtn'))return;
  const g=document.createElement('button');g.type='button';g.className='stylebtn gsbtn';g.innerHTML='<span class="sl">إخفاء الترجمة </span><span class="sw" aria-hidden="true"></span>';
  g.title='إخفاء الترجمة: تظهر بالوقوف عليها أو لمسها';g.setAttribute('aria-label','إخفاء الترجمة');g.onclick=()=>setGuess(!guess);
  const m=document.createElement('button');m.type='button';m.className='stylebtn mkbtn';m.innerHTML='🏅<span class="sl"> الدرجات</span>';m.title='الدرجات';m.setAttribute('aria-label','الدرجات');m.onclick=openPanel;
  ta.insertBefore(m,ta.firstChild);ta.insertBefore(g,ta.firstChild);
  let v=isEn();try{const s=localStorage.getItem(GK);if(s!=null)v=s==='1'}catch(e){}setGuess(v)}
const obs=new MutationObserver(()=>mark());
function start(){buttons();mark();obs.observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')addEventListener('DOMContentLoaded',start);else start();
})();
/* ===== ترتيب الجمل الإنجليزية وترجمتها (قرار المدرب، نوفمبر 2026) =====
   1) الجملة الإنجليزية الخالصة داخل صفحة عربية تُثبَّت من اليسار لليمين (فلا تقفز النقطة وعلامة السؤال لأول السطر).
   2) قائمة جمل مفصولة بـ « · » في آخر السطر: كل جملة في سطر مستقل تحت عنوانها.
   3) الترجمة: G.ENTR[المفتاح]=ترجمة عربية (ملف tr.js لكل مقرر). في الشرح والأمثلة: لمس الجملة يُظهر ترجمتها تحتها.
      في التمارين والاختبارات: زر صغير «ترجمة» جنب الجملة، والفراغ يبقى ___ في الترجمة. */
(function(G){const AR=/[؀-ۿ]/,LAT=/[A-Za-z]/;
const SKIP='script,style,svg,select,input,textarea,.tr-ar,.tr-btn,.say,.lw-pop,.lw-tr,.lw-ar,.lw-mean,[data-notr],.ltabs,.vx-chips,.fx-box,.fx-tray,.opts,.lb-sent,.nh,.fm';
const GAP='input,select,textarea,.gp2,[data-gap]';
const BLK=/^(DIV|P|LI|UL|OL|TABLE|THEAD|TBODY|TR|TD|TH|DETAILS|SUMMARY|H[1-6]|SECTION|FIGURE|FIGCAPTION|BLOCKQUOTE|DL|DT|DD|FORM|FIELDSET|NAV|HEADER|FOOTER|ARTICLE|ASIDE|MAIN|BR|IMG)$/;
const INL=/^(B|I|EM|STRONG|SPAN|U|SUB|SUP|SMALL|CODE|BDI|MARK|A|BR|ABBR|Q|S)$/;
const EXQ='.fx,.bx,.ebk,.pk-b,.pk-body,.pk-q,.pk-it,.vx-quiz,.lb-out,[data-ex]';
const gv=n=>{if(n.matches('.gp2.ok'))return n.textContent;if(n.tagName==='SELECT'&&n.classList.contains('ok')&&n.selectedIndex>0)return n.options[n.selectedIndex].text;if(n.tagName==='INPUT'&&n.classList.contains('ok'))return n.value;return null};
let SOLV=false;/* SOLV: نص الجملة بعد الحل (الفراغ المحلول صحيحاً يُستبدل بإجابته) */
const txt=n=>{if(n.nodeType===3)return n.nodeValue;if(n.nodeType!==1)return '';if(n.matches(GAP)){const v=SOLV&&gv(n);return v?' '+v+' ':' ___ '}if(n.matches('.tr-ar,.tr-btn,.say,script,style,svg,.lw-pop,[data-notr]'))return '';
 if(n.tagName==='BUTTON'&&!n.matches('.gp2'))return '';let s='';for(const c of n.childNodes)s+=txt(c);if(n.classList&&(n.classList.contains('enli')||n.classList.contains('vx-br')||n.classList.contains('vx-t')))s+=' ';return s};
const norm=s=>String(s).replace(/<[^>]+>/g,' ').replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/🔊/g,'').replace(/_{2,}/g,'___').replace(/\s+/g,' ').replace(/\s+([.,?!:;])/g,'$1').replace(/(\w)\s+'(d|s|m|re|ve|ll)\b/g,"$1'$2").trim()
 .replace(/^(?:(?:\d+[.)]?|[a-h][.)]|[●○•·–✔✓:;-])\s*)+(?=\S)/,'').trim();
const two=t=>/[A-Za-z][\w'-]*[\s/]+[^\s]*[A-Za-z]/.test(t);
/* كلمة مفردة: تُترجم في خلية جدول إذا لم يكن في صفها معنى عربي */
const one=(el,t)=>{if(!/^[A-Za-z][\w'-]*[.!?]?$/.test(t)||t.length<2)return false;const c=el.closest('td,th');if(!c)return false;const r=c.closest('tr');return !!r&&!AR.test(txt(r))};
const NB=/^(inline|contents|none)$/;const blockKids=el=>[...el.children].some(c=>{if(c.matches(GAP+',.tr-ar,.tr-btn,.say,.ltr,.ltrw,.gp2'))return false;if(BLK.test(c.tagName)||c.classList.contains('enli')||c.classList.contains('vx-br')||c.classList.contains('vx-t'))return true;return !NB.test(getComputedStyle(c).display)});
/* المرشحون: أصغر عنصر يحوي جملة إنجليزية كاملة بلا عربي */
function cands(root,all){const out=[];const visit=el=>{if(el.nodeType!==1||el.matches(SKIP))return;if(!all&&el.dataset.tr)return;
  if(el.tagName==='BUTTON')return;
  const raw=txt(el);if(!raw.trim())return;if(/^\s*[✘✗]/.test(raw))return;const t=norm(raw);
  if(t&&!AR.test(t)&&(two(t)||one(el,t))&&(el.classList.contains('vx-row')||!blockKids(el))){out.push([el,t]);return}
  for(const c of el.children)visit(c)};visit(root);return out}
/* 1 و 2: الترتيب */
function tidy(root){
 root.querySelectorAll('span.en:not([data-tdy])').forEach(s=>{s.dataset.tdy=1;const t=s.textContent;if(!t.includes(' · '))return;
  let n=s.nextSibling,last=true;while(n){if(n.nodeType===3?n.nodeValue.trim():!(n.matches&&n.matches('.say'))){last=false;break}n=n.nextSibling}
  if(!last)return;const parts=s.innerHTML.split(/\s·\s/);const pl=p=>p.replace(/<[^>]+>/g,'').trim();
  if(parts.length<2||!parts.some(p=>/[.?!]$/.test(pl(p))||pl(p).split(/\s+/).length>=3))return;
  s.classList.add('enl');s.innerHTML=parts.map(p=>`<span class="enli">${p.trim()}</span>`).join('')});
 root.querySelectorAll('span.en:not(.enl):not([data-tdb])').forEach(s=>{s.dataset.tdb=1;if(s.closest('.enl,td,th,button,.vx-row,.fx,.pk-it,h1,h2,h3,h4,h5'))return;const t=s.textContent.trim();
  if(t.split(/\s+/).length<3||!/[.?!]["')]?$/.test(t))return;const p=s.parentElement;if(!p||!AR.test(p.textContent))return;
  s.classList.add('enblk');{const x=s.nextSibling;if(x&&x.nodeType===3)x.nodeValue=x.nodeValue.replace(/^\s*[،,]\s*/,'')}const n=s.nextElementSibling;if(n&&n.matches('.say')&&!(s.nextSibling&&s.nextSibling.nodeType===3&&s.nextSibling.nodeValue.trim()))s.appendChild(n)});
 root.querySelectorAll('p,li,div,td,th,span,b,strong,h3,h4,h5,label,summary,button,figcaption,em,i').forEach(el=>{
  if(el.hasAttribute('dir')&&!el.dataset.tdl)return;if([...el.children].some(c=>!INL.test(c.tagName)&&!c.matches(GAP+',.say,.gp2,.tr-ar,.tr-btn')))return;
  if(el.closest('svg'))return;const t=el.tagName==='BUTTON'?el.textContent:txt(el);
  if(el.dataset.tdl){if(AR.test(t)){el.removeAttribute('dir');delete el.dataset.tdl}return}
  if(!LAT.test(t)||AR.test(t))return;if(getComputedStyle(el).direction!=='rtl')return;el.setAttribute('dir','ltr');el.dataset.tdl=1})}
/* 3: الترجمة */
const drop=el=>{(el._trb||[]).forEach(x=>x.remove());el._trb=null;delete el.dataset.tr;el.classList.remove('tr-tap')};
function attach(root){const D=G.ENTR||{};
 root.querySelectorAll('[data-tr*="___"]').forEach(el=>{const b=(el._trb||[]).find(x=>x.classList&&x.classList.contains('tr-ar'));if(!b)return;SOLV=true;const k=norm(txt(el));SOLV=false;const v=(!k.includes('___')&&D[k])||D[el.dataset.tr];if(v&&b.textContent!==v)b.textContent=v});
 root.querySelectorAll('[data-tr]').forEach(el=>{if(norm(txt(el))!==el.dataset.tr)drop(el)});
 if(!Object.keys(D).length)return;
 cands(root).forEach(([el,t])=>{el.dataset.tr=t;const ar=D[t];if(!ar)return;
  const ex=t.includes('___')||!!el.closest(EXQ);const inside=!el.classList.contains('vx-row')&&(BLK.test(el.tagName)||/^(flex|grid|block|list-item|table-cell)$/.test(getComputedStyle(el).display));
  const box=document.createElement('span');box.className='tr-ar';box.lang='ar';box.hidden=true;box.textContent=ar;const parts=[box];
  let b=null;if(ex){b=document.createElement('button');b.type='button';b.className='tr-btn';b.textContent='ترجمة';b.title='ترجمة الجملة';parts.unshift(b)}
  if(inside)parts.forEach(x=>el.appendChild(x));else{let a=el;parts.forEach(x=>{a.after(x);a=x})}
  el._trb=parts;
  if(b)b.onclick=ev=>{ev.stopPropagation();box.hidden=!box.hidden;b.classList.toggle('on',!box.hidden)};
  else if(!el._trl){el._trl=1;el.classList.add('tr-tap');el.addEventListener('click',ev=>{if(ev.target.closest('button,a,input,select,.say'))return;const bx=(el._trb||[]).find(x=>x.classList.contains('tr-ar'));if(bx)bx.hidden=!bx.hidden})}
  else el.classList.add('tr-tap')})}
const css=document.createElement('style');css.textContent=`
.fm{display:flex;flex-wrap:wrap;gap:5px;align-items:center;direction:ltr;justify-content:flex-start;margin:6px 0;unicode-bidi:isolate}.fm b{font-family:var(--font-la,var(--font));background:#e8f0f6;color:#1d4f6e;border-radius:8px;padding:1px 9px}.fm .fm-ar{background:#fff1c9;color:#6b4d00;border-radius:8px;padding:1px 9px;font-weight:700}.fm i{font-style:normal;color:var(--muted);font-weight:700}html[data-theme=dark] .fm b{background:#1e3445;color:#cfe3f1}html[data-theme=dark] .fm .fm-ar{background:#3a300f;color:#f5d98a}.enl{display:block;margin:4px 0 2px}li[data-tdl]{list-style-position:inside}.enblk{display:block;text-align:left;margin:3px 0}.vx-row.tr-tap,.vx-row.tr-tap .vx-t{text-decoration:none}.enli{display:block;text-align:left;padding:2px 0}.enli::before{content:'• ';color:var(--muted)}
.tr-tap{cursor:pointer;text-decoration:underline dotted rgba(47,107,143,.45);text-underline-offset:4px;text-decoration-thickness:1.5px}
.tr-ar{display:block;flex-basis:100%;width:100%;box-sizing:border-box;font-family:var(--font);font-weight:400;font-size:.92em;color:#2f4f3c;background:#eef6f0;border-inline-start:3px solid #7dbb98;border-radius:6px;padding:3px 9px;margin:4px 0 2px;text-align:right;direction:rtl;line-height:1.7;white-space:normal}
.tr-ar[hidden]{display:none}
.tr-btn{font:inherit;font-size:12px;font-weight:600;border:1px solid #9fc8b1;background:#f3faf6;color:#2f6b4f;border-radius:999px;padding:0 8px;margin-inline:6px;cursor:pointer;vertical-align:middle;line-height:1.7;white-space:nowrap;direction:rtl}
.tr-btn.on{background:#2f8a5b;color:#fff;border-color:#2f8a5b}
html.dark .tr-ar,[data-theme=dark] .tr-ar{background:#1f3329;color:#cfe9da}
.fx-l li{flex-wrap:wrap}`;document.head.appendChild(css);
let q=0;const run=()=>{q=0;const v=document.getElementById('view')||document.querySelector('main');if(!v)return;tidy(v);attach(v)};
G.ENTRK={solved:el=>{SOLV=true;const k=norm(txt(el));SOLV=false;return k},cands,norm,run,tidy,txt};
const st=()=>{run();new MutationObserver(ms=>{if(ms.every(m=>[...m.addedNodes,...m.removedNodes].every(n=>n.nodeType===1&&n.matches&&n.matches('.tr-ar,.tr-btn'))))return;if(!q){q=1;setTimeout(run,60)}}).observe(document.body,{childList:true,subtree:true})};
if(document.readyState==='loading')addEventListener('DOMContentLoaded',st);else st();
})(window);

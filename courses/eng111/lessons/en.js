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
.lb-svg svg{width:100%;max-width:560px;height:auto;display:block;margin:8px auto 0}
.lb-out{background:var(--surface-2);border-radius:14px;padding:14px;margin-top:10px;display:flex;flex-direction:column;gap:10px}
.lb-sent{display:flex;flex-wrap:wrap;gap:10px 6px;direction:ltr;align-items:flex-start}
.lb-p{display:flex;flex-direction:column;align-items:stretch;gap:4px}
.lb-p .pc{font-weight:700;font-size:19px;padding:6px 12px;border-radius:10px;font-family:var(--font-la,var(--font));text-align:center;white-space:nowrap}
.pc.n{background:#00875a;color:#fff}.pc.k{background:#f2a900;color:#3a2a00}.pc.q{background:#1f5fd1;color:#fff}.pc.x{background:var(--surface);color:var(--fg);border:1px solid var(--line)}.pc.r{background:#d2452f;color:#fff;text-decoration:line-through}
.lb-p small{font-size:12px;direction:rtl;border-top:3px solid currentColor;padding-top:3px;text-align:center;color:var(--muted);font-family:var(--font)}
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
const bk=(n,ref,task,ans,note)=>`<div class="ebk"><div class="eh"><span class="tg">في كتابك</span><b>تمرين ${n}</b><span class="ref">${ref}</span></div><p>${task}</p>${ans?`<details><summary>${Array.isArray(ans)?'الإجابات (بأرقام البنود)':'الإجابة'}</summary>${Array.isArray(ans)?`<ol class="ans" lang="en">${ans.map(a=>`<li>${a}</li>`).join('')}</ol>`:`<p>${ans}</p>`}${note?`<p class="ans-n">${note}</p>`:''}</details>`:''}</div>`;
/* مقطع من صوتيات الكتاب: يُرفع الملف إلى courses/english/audio/track-NN.mp3 */
const au=(track,ref,task)=>`<div class="aud"><div class="eh"><span class="tg">استمع</span><b>المقطع ${track}</b><span class="ref" style="color:var(--muted);font-size:13px">${ref}</span></div><p style="margin:4px 0">${task}</p>
 <audio controls preload="metadata" src="audio/track-${String(track).padStart(2,'0')}.mp3" onerror="this.hidden=true;this.nextElementSibling.hidden=false"></audio><p class="miss" hidden>مقطع الصوت ${track} من صوتيات الكتاب لم يُرفع بعد، وسيضيفه المدرب. شغّله الآن من قرص الكتاب إن توفّر.</p></div>`;
/* معلومة محدّثة: ما في الكتاب صحيح وقت طباعته وتغيّر بعدها */
const upd=html=>`<div class="upd"><b>معلومة محدّثة (إضافة من خارج الكتاب):</b> ${html}</div>`;
/* بطاقتا الطالب أ والطالب ب لمهمة ثنائية (بيانات جديدة من عندنا) */
const ab=(a,b)=>`<div class="card-ab"><div><h4>الطالب أ</h4>${a}</div><div><h4>الطالب ب</h4>${b}</div></div>`;

/* ---- املأ الفراغ بالاختيار: items [{s:'... ___ ...', o:[خيارات], a:رقم الصحيح, why}] (الجملة إنجليزية) ---- */
function gaps(el,B,o){el.classList.add('pk','gp');
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
    OUT.innerHTML=`${r.bad?`<div class="lb-bad">${r.bad}</div>`:''}${r.pieces?`<div class="lb-sent">${r.pieces.map(([t,c,l])=>`<span class="lb-p ${c}"><span class="pc ${c}">${t}</span>${l?`<small>${l}</small>`:''}</span>`).join('')}${r.say?sp(r.say):''}</div>`:''}${r.ar?`<div class="lb-ar">${r.ar}</div>`:''}${r.why?`<div class="lb-why">${r.why}</div>`:''}`;
    if(B&&B.ltrU)try{B.ltrU(OUT)}catch(e){}}
  draw()};
/* ===== «شرح القاعدة»: قسم شامل واحد يدمج شرح قاعدة الدرس =====
   const R=ENK.rule({title,ref,intro,parts:[{t,short,q,ref,add,text,head,rows,ex,html,watch,art,cap,dlg,lab:{title,w|intro+items}}]})
   ثم في الدرس: theory:[…ماذا ستتعلم، ...R.theory, …]  و stations:[{intro:true}, ...R.stations, …]
   «رسمي»: عنوان «شرح القاعدة: …» ثم كل جزء بعنوان فرعي وجدوله وأمثلته و«انتبه» ومختبره. «التفاعلي»: محطة لكل جزء. */
const rule=R=>{const TAG='إضافة من خارج الكتاب';
  const labW=l=>l?(l.w||((el,B)=>gaps(el,B,{intro:l.intro,items:l.items}))):null;
  const isLat=x=>/^[\x20-\x7E·—–…’→✔✘]+$/.test(String(x));
  /* جدول مرتب: أعمدة متساوية، والخلية الإنجليزية من اليسار لليمين */
  const grid=g=>g?`<div class="rt-wrap"><table class="rt"><thead><tr>${g.head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${g.rows.map(r=>`<tr>${r.map((c,j)=>`<td${isLat(c)?' class="en" lang="en" dir="ltr"':''}${j===0?' data-k="1"':''}>${c}${j===r.length-1&&isLat(c)&&/[a-z]{2}/i.test(c)?' '+sp(c.replace(/ · .*/,'')):''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';
  const pairsH=ps=>ps&&ps.length?`<div class="wx">${ps.map(p=>`<div class="wx-r"><span class="wx-x">✘ ${W(p[0])}</span><span class="wx-ok">✔ ${W(p[1])}</span>${p[2]?`<span class="wx-why">${p[2]}</span>`:''}</div>`).join('')}</div>`:'';
  const watchH=p=>{const w=p.watch?(Array.isArray(p.watch)?p.watch.map(x=>`<p>${x}</p>`).join(''):`<p>${p.watch}</p>`):'';return pairsH(p.pairs)+w};
  const pts=a=>(a||[]).map(x=>`<p class="rpt">${x}</p>`).join('');
  const body=p=>`${p.lead?`<p class="rlead">${p.lead}</p>`:''}${pts(p.points)}${(p.subs||[]).map(s=>`<h4 class="rsub">${s.h}</h4>${pts(s.points)}`).join('')}${p.text?`<p class="rpt">${p.text}</p>`:''}`;
  const theory=[{h:'شرح القاعدة: '+R.title,ref:R.ref,html:R.intro?`<p>${R.intro}</p>`:''}];
  const stations=[];
  R.parts.forEach((p,i)=>{const tbl=(p.rows?vt(p.rows,p.head):'')+grid(p.grid);const ex=p.ex&&p.ex.length?eb(p.ex):'';const dlg=p.dlg?dl(p.dlg):'';
    const hasW=p.watch||(p.pairs&&p.pairs.length);
    theory.push({html:`<h3 class="rh">${i+1}. ${p.t}${p.add?` <small>(${TAG})</small>`:''}${p.ref?` <span class="ref">${p.ref}</span>`:''}</h3><div class="rbody">${body(p)}</div>${tbl}${ex}${dlg}${p.html||''}`});
    if(hasW)theory.push({note:`<b>انتبه: الخطأ والصحيح</b>${watchH(p)}`});
    (p.labs||(p.lab?[p.lab]:[])).forEach(l=>{theory.push({html:`<p><b>مختبر مصغّر: ${l.title}</b></p>`});theory.push({widget:labW(l)})});
    const sb=body(p);const side=sb?[p.add?{add:sb}:{tip:sb}]:[];
    stations.push({st:0,_old:p.old||[],short:p.short||p.t,title:p.t,q:p.q,ref:p.ref,...(p.art?{art:p.art,cap:p.cap}:{}),side,
      body:[...(tbl||ex||dlg||p.html?[{html:tbl+ex+dlg+(p.html||'')}]:[]),...(hasW?[{watch:watchH(p)}]:[]),...(p.labs||(p.lab?[p.lab]:[])).map(l=>({widget:labW(l),title:'مختبر مصغّر: '+l.title}))]})});
  return {theory,stations}};
G.ENK={e,eb,dl,vt,bk,au,upd,ab,sp,speak,speakP,gaps,typ,norm,esc,cases,tf,sort,order,W,gram,rule,labB};
})(window);

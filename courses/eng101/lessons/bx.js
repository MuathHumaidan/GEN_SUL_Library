/* تمارين الكتاب التفاعلية والتمارين المقابلة (انجل-103، قرار المنسق نوفمبر 2026)
   bk:{kind,…,img:[…],cap} = تمرين الكتاب نفسه تفاعلياً بجمله وصوره، ثم التمرين المقابل (kind,…) بجمل جديدة.
   (الأصل:) التمارين المقابلة لتمارين الكتاب (قرار المنسق، نوفمبر 2026)
   لكل تمرين في الكتاب تمرين مقابل بنفس رقمه ونوعه وعدد بنوده وقاعدته وكلماته، لكن بجمل جديدة من إعدادنا.
   يظهر بعد مربع «في كتابك» في الأسلوب الرسمي، وفي آخر المحطة st في الأسلوب التفاعلي.
   البيانات: BX.add('<درس>',[{n, ref, st, kind, intro, ...}]) في ملفات bxd*.js
   الأنواع: gaps · typ · choose · match · sort · order · listen · speak */
(function(G){
const N=G.ENK,B=G.PLCBOOK;const D={};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const css=`
.bx{border:2px solid var(--accent,#1f7a55);border-radius:16px;margin:14px 0 22px;background:var(--surface,#fff);overflow:hidden}
.bx-h{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 14px;background:var(--accent-soft,#e3f1ea)}
.bx-h .tg{background:var(--accent,#1f7a55);color:#fff;border-radius:999px;padding:2px 10px;font-size:13px;font-weight:700}
.bx-h b{font-size:1.02em}.bx-h .sub{font-size:13px;color:var(--muted)}
.bx-b{padding:12px 14px}
.bx-b .pk{margin:0}
.bx-mt{display:grid;gap:8px}.bx-mt .row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.bx-mt select{font:inherit;padding:4px 8px;border-radius:8px;border:1.5px solid var(--line)}
.bx-mt select.ok{border-color:#2e9d6a;background:#e4f5ec}.bx-mt select.no{border-color:#c4553f;background:#fbe9e4}
.bx-opts{display:grid;gap:4px;margin:8px 0;padding:8px 12px;background:var(--surface-2);border-radius:10px}
.bx-sp table{display:block;max-width:100%;overflow-x:auto}
.bx-sp ol{margin:6px 0 10px;padding-inline-start:22px}.bx-sp .ul{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 10px}
.bx-sp .ul span{background:var(--surface-2);border-radius:8px;padding:3px 9px}
.bx-sp details{margin-top:8px}.bx-sp summary{cursor:pointer;font-weight:700}
.bx-dl{margin:6px 0;padding:0;list-style:none}.bx-dl li{margin:4px 0}
.bx[data-aq] .pk-it{direction:ltr;text-align:left}
.bx-ls{background:var(--surface-2);border-radius:12px;padding:10px 12px;margin-bottom:10px}
.bx-fig{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 10px}.bx-fig img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line)}.bx-fig figcaption{width:100%;font-size:13px;color:var(--muted)}
.bx.bkx{border-color:#b9773a}.bx.bkx .bx-h{background:#f6eadb}.bx.bkx .bx-h .tg{background:#8a5321}
.bx-tgl{display:flex;align-items:center;gap:8px;margin:10px 0;padding:8px 12px;border:1px dashed var(--line);border-radius:12px;background:var(--surface-2);font-size:14px}.bx-tgl input{width:20px;height:20px;accent-color:var(--accent,#1f7a55)}
html.bx-nohlp .bx.hlp{display:none}
.fx{direction:ltr;text-align:left}
.fx-box{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;padding:10px;margin:0 0 12px;background:#efe6d6;border-radius:10px}
.fx-box button,.fx-tray button{font:inherit;font-family:var(--font-la,var(--font));font-weight:600;border:1.5px solid #c9b99c;background:#fff;border-radius:9px;padding:5px 12px;cursor:pointer;min-height:38px}
.fx-box button.sel,.fx-tray button.sel{background:#8a5321;color:#fff;border-color:#8a5321}
.fx .fx-l{margin:0!important;padding:0!important;list-style:none}
.fx-l li{display:flex;gap:8px;align-items:baseline;padding:5px 0;line-height:2.1}
.fx-l .no{min-width:1.4em;font-weight:700;color:#8a5321}
.fx-l .who{min-width:1.1em;font-size:.9em}
.fx-l .tx{flex:1}
.fx-l .tx i{font-style:italic}
.fx .gp2{font:inherit;font-family:var(--font-la,var(--font));display:inline-block;min-width:4.6em;padding:0 8px;margin:0 2px;border:0;border-bottom:2px solid #8a5321;background:#fbf6ee;border-radius:6px 6px 0 0;cursor:pointer;line-height:1.7;color:var(--ink)}
.fx .gp2.sel{outline:2px solid #8a5321;background:#fff1dc}
.fx .gp2.ok{border-color:#2e9d6a;background:#e4f5ec;color:#145c3b;font-weight:700}
.fx .gp2.bad{border-color:#c4553f;background:#fbe9e4;color:#8d2c1c;text-decoration:line-through}
.fx-tray{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 6px;padding:8px;background:#efe6d6;border-radius:10px}
.fx table{border-collapse:collapse;width:100%;font-size:.95em}.fx td,.fx th{border:1px solid var(--line);padding:6px 8px;vertical-align:middle}.fx th{background:#f3ebde;text-align:left}
.fx-tw{overflow-x:auto}
.fx-ft{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px;direction:rtl}
.fx-ft button{font:inherit;border:1px solid var(--line);background:var(--surface-2);border-radius:9px;padding:5px 12px;cursor:pointer}
.fx-ft .sc{font-weight:700}
.bx-aud{background:#f6eadb;border-radius:12px;padding:10px 12px;margin:0 0 12px}
.bx-aud p{margin:0 0 6px;font-weight:700}.bx-aud audio{width:100%}
.bx-aq{margin-top:12px}.bx-aq>summary{cursor:pointer;font-weight:700;padding:6px 0}

.bx-ls .play{font:inherit;font-weight:700;border:0;border-radius:10px;padding:8px 14px;background:var(--accent,#1f7a55);color:#fff;cursor:pointer}
`;
const addCss=()=>{if(document.getElementById('bx-css'))return;const s=document.createElement('style');s.id='bx-css';s.textContent=css;document.head.appendChild(s)};
const sayB=t=>N.sp(t);
const en=t=>`<span class="en" lang="en" dir="ltr">${t}</span>`;
/* ترتيب ثابت (غير عشوائي في كل فتح) لخيارات «وصّل» */
const perm=n=>{const a=[...Array(n).keys()];let s=n*13+5;for(let i=n-1;i>0;i--){s=(s*48271)%2147483647;const j=s%(i+1);[a[i],a[j]]=[a[j],a[i]]}if(n>1&&a.every((v,i)=>v===i))a.push(a.shift());return a};

/* وصّل: pairs [[يسار, يمين, سبب؟]] — اليمين مرقّم بالحروف ومخلوط */
function match(el,x){const P=x.pairs,m=perm(P.length),L='ABCDEFGHIJ';
  el.innerHTML=(x.intro?`<p class="pk-in">${x.intro}</p>`:'')+`<div class="bx-opts" lang="en" dir="ltr">${m.map((i,k)=>`<div><b>${L[k]}</b> ${P[i][1]} ${sayB(P[i][1])}</div>`).join('')}</div>
   <div class="bx-mt">${P.map((p,i)=>`<div class="row" data-i="${i}"><b>${i+1}.</b> ${/[\u0600-\u06FF]/.test(p[0])?`<span>${p[0]}</span>`:`<span lang="en" dir="ltr">${p[0]}</span>`} ${sayB(p[0])} <select aria-label="اختر الحرف"><option value="">…</option>${m.map((j,k)=>`<option value="${j}">${L[k]}</option>`).join('')}</select><span class="pk-why" hidden></span></div>`).join('')}</div><div class="pk-score" hidden></div>`;
  const done={};el.querySelectorAll('.row').forEach(r=>{const i=+r.dataset.i,s=r.querySelector('select'),w=r.querySelector('.pk-why');
    s.onchange=()=>{if(s.value==='')return;const ok=+s.value===i;s.classList.toggle('ok',ok);s.classList.toggle('no',!ok);w.innerHTML=ok?`<b>صحيح.</b> ${P[i][2]||''}`:'<b>ليس هذا.</b> جرّب حرفاً آخر.';w.hidden=false;if(ok)done[i]=1;
      if(Object.keys(done).length===P.length){const sc=el.querySelector('.pk-score');sc.innerHTML='أحسنت، وصّلت الكل.';sc.hidden=false}}})}

/* محادثة / نشاط مفتوح: goal, steps[], useful[], model[[متحدث, جملة]], card (html لبطاقتي أ و ب), answer (نموذج إجابة نصي) */
function speak(el,x){
  el.innerHTML=`<div class="bx-sp">${x.goal?`<p class="pk-in">${x.goal}</p>`:''}
   ${x.steps?`<ol>${x.steps.map(s=>`<li>${s}</li>`).join('')}</ol>`:''}
   ${x.card||''}
   ${x.useful?`<p style="margin:6px 0 2px"><b>جمل تساعدك:</b></p><div class="ul" lang="en" dir="ltr">${x.useful.map(u=>`<span>${u} ${sayB(u)}</span>`).join('')}</div>`:''}
   ${x.model?`<details><summary>نموذج (اقرأه بعد أن تحاول)</summary><ul class="bx-dl" lang="en" dir="ltr">${x.model.map(([who,t])=>`<li>${who?`<b>${who}:</b> `:''}${t} ${sayB(t)}</li>`).join('')}</ul></details>`:''}
   ${x.answer?`<details><summary>نموذج إجابة</summary><div lang="en" dir="ltr">${x.answer}</div></details>`:''}</div>`}

/* استماع قصير من إعدادنا: text (يُقرأ بالصوت ويُخفى حتى يُطلب)، ثم تمرين من نوع آخر then:{kind,...} */
function listen(el,x){const id='ls'+Math.random().toString(36).slice(2,7);
  el.innerHTML=`<div class="bx-ls"><p style="margin:0 0 8px">${x.intro||'استمع ثم أجب.'}</p><button type="button" class="play" data-say="${esc(x.text.replace(/<[^>]+>/g,''))}">🔊 استمع</button>
   <details style="margin-top:8px"><summary>أظهر النص</summary><p lang="en" dir="ltr">${x.text}</p></details></div><div id="${id}"></div>`;
  run(el.querySelector('#'+id),x.then)}


/* تمرين الكتاب بشكله في الكتاب: kind:'fill'
   layout:'dlg' (lines:[[رقم,●/○,نص]]) · 'list' (lines:[نص]) · 'table' (head:[…], lines:[[خلية,…]])
   الفراغ {الجواب} من صندوق الكلمات box، أو {الصحيح|خيار|خيار} بخيارات خاصة تظهر عند لمس الفراغ؛ ~ لإجابات مقبولة أخرى */
function fill(el,x){const P=G.PLCBOOK&&G.PLCBOOK.perm;const G2=[];let k=0;
  const gap=t=>{const p=t.split('|'),acc=p[0].split('~'),opts=p.length>1?p.map(z=>z.split('~')[0]):null;const i=k++;G2.push({acc,opts,v:null});return `<button type="button" class="gp2" data-g="${i}" aria-label="فراغ"></button>`};
  const tx=t=>String(t).replace(/\{([^}]+)\}/g,(_,g)=>gap(g));
  let body='';
  if(x.layout==='table'){body=`<div class="fx-tw"><table>${x.head?`<tr>${x.head.map(h=>Array.isArray(h)?`<th colspan="${h[1]}">${h[0]}</th>`:`<th>${h}</th>`).join('')}</tr>`:''}${x.lines.map(r=>`<tr>${r.map(c=>`<td>${tx(c)}</td>`).join('')}</tr>`).join('')}</table></div>`}
  else body=`<ul class="fx-l">${x.lines.map(l=>{let [n,w,t]=Array.isArray(l)?(l.length===3?l:['',l[0],l[1]]):['','',l];if(!n&&typeof t==='string'){const m=t.match(/^([0-9]+|[a-z]\))\s+/);if(m){n=m[1];t=t.slice(m[0].length)}}return `<li><span class="no">${n||''}</span>${x.layout==='dlg'?`<span class="who">${w||''}</span>`:''}<span class="tx">${tx(t)}</span></li>`}).join('')}</ul>`;
  const box=x.box?x.box:null;
  el.innerHTML=(x.intro?`<p class="pk-in" style="direction:rtl;text-align:right">${x.intro}</p>`:'')+`<div class="fx">${box?`<div class="fx-box">${box.map(w=>`<button type="button" data-w="${esc(w)}">${w}</button>`).join('')}</div>`:''}${body}</div><div class="fx-ft"><span class="sc"></span><button type="button" data-a="show">أظهر الإجابات</button><button type="button" data-a="reset">من جديد</button></div>`;
  let selW=null,selG=null;const gb=[...el.querySelectorAll('.gp2')];const sc=el.querySelector('.sc');
  const score=()=>{const n=G2.length,f=G2.filter(g=>g.v!=null).length,ok=G2.filter(g=>g.v!=null&&g.acc.includes(g.v)).length;sc.textContent=f?`${ok} / ${n}`:'';if(f===n&&ok===n)sc.textContent=`${(B&&B.lang&&B.lang()==='en')?'Well done!':'أحسنت!'} ${ok} / ${n}`};
  const put=(i,v)=>{const g=G2[i],b=gb[i];g.v=v;b.textContent=v;const ok=g.acc.includes(v);b.classList.toggle('ok',ok);b.classList.toggle('bad',!ok);b.classList.remove('sel');if(window.ENK&&ok&&N.say)try{}catch(e){}score()};
  const tray=i=>{el.querySelectorAll('.fx-tray').forEach(t=>t.remove());const g=G2[i];if(!g.opts)return;const order=P?P(g.opts.join('|')+i,g.opts.length):g.opts.map((_,j)=>j);
    const t=document.createElement('div');t.className='fx-tray';t.innerHTML=order.map(j=>`<button type="button">${g.opts[j]}</button>`).join('');
    const host=gb[i].closest('li,tr');(host.tagName==='TR'?host.closest('.fx-tw'):host).after(t);
    t.querySelectorAll('button').forEach(b=>b.onclick=()=>{put(i,b.textContent);t.remove();selG=null})};
  gb.forEach((b,i)=>b.onclick=()=>{if(b.classList.contains('ok'))return;
    if(!G2[i].opts&&selW!=null){put(i,selW);return}
    gb.forEach(z=>z.classList.remove('sel'));b.classList.add('sel');selG=i;tray(i)});
  el.querySelectorAll('.fx-box button').forEach(w=>w.onclick=()=>{const v=w.dataset.w;
    if(selG!=null&&!G2[selG].opts){put(selG,v);selG=null;return}
    el.querySelectorAll('.fx-box button').forEach(z=>z.classList.toggle('sel',z===w&&selW!==v));selW=selW===v?null:v});
  el.querySelector('[data-a=show]').onclick=()=>{G2.forEach((g,i)=>put(i,g.acc[0]))};
  el.querySelector('[data-a=reset]').onclick=()=>fill(el,x);
}
/* صوت تمرين الكتاب: مشغّل المقطع داخل التمرين، وأسئلة «تمرين على المقطع» تحته */
const aud=x=>x.track?`<div class="bx-aud"><p>🎧 المقطع <span dir="ltr">${x.track}</span> من صوتيات الكتاب</p><audio controls preload="metadata" src="audio/track-${String(x.track).padStart(2,'0')}.mp3" onerror="this.hidden=true;this.nextElementSibling.hidden=false"></audio><p class="miss" hidden style="font-weight:400">مقطع الصوت لم يُرفع بعد، وسيضيفه المدرب.</p></div>`:'';

function run(el,x){addCss();try{
  if(x.kind==='fill')return fill(el,x);
  if(x.kind==='gaps')return N.gaps(el,B,{intro:x.intro,items:x.items});
  if(x.kind==='typ')return N.typ(el,B,{intro:x.intro,items:x.items});
  if(x.kind==='choose')return N.cases(el,B,{intro:x.intro,cases:x.items});
  if(x.kind==='sort')return N.sort(el,B,{intro:x.intro,cats:x.cats,items:x.items});
  if(x.kind==='order')return N.order(el,B,{intro:x.intro,steps:x.steps,done:x.done});
  if(x.kind==='match')return match(el,x);
  if(x.kind==='listen')return listen(el,x);
  if(x.kind==='speak')return speak(el,x);
 }catch(e){console.error(e);el.textContent='تعذّر عرض التمرين.'}}

const fig=k=>k.img?`<figure class="bx-fig">${k.img.map(u=>`<a href="${u}" target="_blank" rel="noopener" title="تكبير الصورة"><img src="${u}" alt="صورة من الكتاب" loading="lazy"></a>`).join('')}${k.cap?`<figcaption>${k.cap} <span class="zh">(اضغط الصورة لتكبيرها)</span></figcaption>`:''}</figure>`:'';
const box=(lid,x)=>{const w=document.createElement('div');w.dataset.bx=lid+':'+x.n;
  if(x.bk){const b=document.createElement('div');b.className='bx bkx';
   b.innerHTML=`<div class="bx-h"><span class="tg">تمرين الكتاب</span><b>تمرين ${x.n}${x.ref?' '+x.ref:''}</b></div><div class="bx-b">${aud(x.bk)}${fig(x.bk)}<div></div></div>`;
   run(b.querySelector('.bx-b>div:last-child'),x.bk);
   const tq=x.bk.track&&AQ[String(x.bk.track).padStart(2,'0')];if(tq){const d=document.createElement('details');d.className='bx-aq';d.dataset.aqIn=1;d.innerHTML='<summary>أسئلة إضافية على المقطع (من إعدادنا)</summary><div></div>';b.querySelector('.bx-b').appendChild(d);run(d.querySelector('div'),tq)}
   w.appendChild(b)}
  if(x.kind){const d=document.createElement('div');d.className='bx hlp';
   d.innerHTML=`<div class="bx-h"><span class="tg">تمرين مساعد</span><b>مساعد لتمرين ${x.n}${x.ref?' '+x.ref:''}</b></div><div class="bx-b"></div>`;
   run(d.querySelector('.bx-b'),x);w.appendChild(d)}
  return w};

/* الحقن: بعد مربع «في كتابك» (رسمي) أو في آخر المحطة (تفاعلي) */
const HK='elib-hlp-'+((B.C&&B.C.key)||location.pathname.split('/').slice(-2)[0]);
const hlpOn=()=>{try{return localStorage.getItem(HK)!=='0'}catch(e){return true}};
const setHlp=v=>{try{localStorage.setItem(HK,v?'1':'0')}catch(e){}document.documentElement.classList.toggle('bx-nohlp',!v);document.querySelectorAll('.bx-tgl input').forEach(i=>i.checked=v)};
function tgl(view){if(view.querySelector('.bx-tgl'))return;const f=view.querySelector('.ebk, .bk-st, [data-bx]');if(!f||!view.querySelector('.bx.hlp'))return;const t=document.createElement('label');t.className='bx-tgl';
 t.innerHTML='<input type="checkbox"> <span>إظهار التمارين المساعدة</span>';const i=t.querySelector('input');i.checked=hlpOn();i.onchange=()=>setHlp(i.checked);
 f.parentNode.insertBefore(t,f)}
function inject(){const view=document.getElementById('view');if(!view)return;document.documentElement.classList.toggle('bx-nohlp',!hlpOn());try{_inject(view)}finally{addCss();tgl(view)}}
function _inject(view){injectAQ(view);const lid=(location.hash||'').slice(1).split(/[/?]/)[0];const X=D[lid];if(!X)return;
  const sts=view.querySelectorAll('section[id^="st-"]');
  if(sts.length){const SM=(B.stMap&&B.stMap[lid])||{};X.forEach(x=>{const s=view.querySelector('#st-'+(SM[x.st||1]||x.st||1));if(!s||s.querySelector(`[data-bx="${lid}:${x.n}"]`))return;const h=window.BKH&&window.BKH[x.n+'|'+x.ref];if(h){const w=document.createElement('div');w.className='bk-st';w.innerHTML=h;s.appendChild(w)}s.appendChild(box(lid,x))});return}
  const bks=[...view.querySelectorAll('.ebk')];if(!bks.length)return;
  X.forEach(x=>{if(view.querySelector(`[data-bx="${lid}:${x.n}"]`))return;const t=bks.find(b=>{const h=b.querySelector('.eh b');return h&&h.textContent.trim()==='تمرين '+x.n});
    if(t)t.after(box(lid,x))})}
/* تمرين على مقطع من صوتيات الكتاب (أسئلة من إعدادنا عمّا يُقال في المقطع): AQ.add('<رقم المقطع>',{kind,intro,items})
   يظهر تحت مشغّل المقطع في الأسلوبين */
const AQ={};
function injectAQ(view){view.querySelectorAll('.aud').forEach(a=>{const au=a.querySelector('audio');if(!au)return;const m=(au.getAttribute('src')||'').match(/track-([^.\/]+)\.mp3$/);if(!m)return;const x=AQ[m[1]];
  if(!x||a.nextElementSibling&&a.nextElementSibling.dataset&&a.nextElementSibling.dataset.aq===m[1])return;
  addCss();const d=document.createElement('div');d.className='bx';d.dataset.aq=m[1];
  d.innerHTML=`<div class="bx-h"><span class="tg">تمرين على المقطع</span><b>المقطع ${en(m[1])}</b><span class="sub">استمع للمقطع ثم أجب (أسئلة من إعدادنا)</span></div><div class="bx-b"></div>`;
  a.after(d);run(d.querySelector('.bx-b'),x)})}
G.BX={add:(lid,arr)=>{D[lid]=(D[lid]||[]).concat(arr)},bk:(lid,o)=>{(D[lid]||[]).forEach(x=>{if(o[x.n])x.bk=o[x.n]})},data:D,inject};
G.AQ={add:(t,x)=>{AQ[t]=x},data:AQ};
const go=()=>{const v=document.getElementById('view');if(!v)return;inject();let q=0;new MutationObserver(()=>{if(q)return;q=1;requestAnimationFrame(()=>{q=0;inject()})}).observe(v,{childList:true,subtree:true})};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})(window);

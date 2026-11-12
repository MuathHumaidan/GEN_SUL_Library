/* التمارين المقابلة لتمارين الكتاب (قرار المنسق، نوفمبر 2026)
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
.bx-ls{background:var(--surface-2);border-radius:12px;padding:10px 12px;margin-bottom:10px}
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
   <div class="bx-mt">${P.map((p,i)=>`<div class="row" data-i="${i}"><b>${i+1}.</b> <span lang="en" dir="ltr">${p[0]}</span> ${sayB(p[0])} <select aria-label="اختر الحرف"><option value="">…</option>${m.map((j,k)=>`<option value="${j}">${L[k]}</option>`).join('')}</select><span class="pk-why" hidden></span></div>`).join('')}</div><div class="pk-score" hidden></div>`;
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

function run(el,x){addCss();try{
  if(x.kind==='gaps')return N.gaps(el,B,{intro:x.intro,items:x.items});
  if(x.kind==='typ')return N.typ(el,B,{intro:x.intro,items:x.items});
  if(x.kind==='choose')return N.cases(el,B,{intro:x.intro,cases:x.items});
  if(x.kind==='sort')return N.sort(el,B,{intro:x.intro,cats:x.cats,items:x.items});
  if(x.kind==='order')return N.order(el,B,{intro:x.intro,steps:x.steps,done:x.done});
  if(x.kind==='match')return match(el,x);
  if(x.kind==='listen')return listen(el,x);
  if(x.kind==='speak')return speak(el,x);
 }catch(e){console.error(e);el.textContent='تعذّر عرض التمرين.'}}

const box=(lid,x)=>{const d=document.createElement('div');d.className='bx';d.dataset.bx=lid+':'+x.n;
  d.innerHTML=`<div class="bx-h"><span class="tg">تمرين مقابل</span><b>يقابل تمرين ${x.n}${x.ref?' '+x.ref:''}</b><span class="sub">بنفس فكرة تمرين الكتاب وبجمل جديدة</span></div><div class="bx-b"></div>`;
  run(d.querySelector('.bx-b'),x);return d};

/* الحقن: بعد مربع «في كتابك» (رسمي) أو في آخر المحطة (تفاعلي) */
function inject(){const view=document.getElementById('view');if(!view)return;const lid=(location.hash||'').slice(1).split(/[/?]/)[0];const X=D[lid];if(!X)return;
  const sts=view.querySelectorAll('section[id^="st-"]');
  if(sts.length){X.forEach(x=>{const s=view.querySelector('#st-'+(x.st||1));if(!s||s.querySelector(`[data-bx="${lid}:${x.n}"]`))return;s.appendChild(box(lid,x))});return}
  const bks=[...view.querySelectorAll('.ebk')];if(!bks.length)return;
  X.forEach(x=>{if(view.querySelector(`[data-bx="${lid}:${x.n}"]`))return;const t=bks.find(b=>{const h=b.querySelector('.eh b');return h&&h.textContent.trim()==='تمرين '+x.n});
    if(t)t.after(box(lid,x))})}
G.BX={add:(lid,arr)=>{D[lid]=(D[lid]||[]).concat(arr)},data:D,inject};
const go=()=>{const v=document.getElementById('view');if(!v)return;inject();let q=0;new MutationObserver(()=>{if(q)return;q=1;requestAnimationFrame(()=>{q=0;inject()})}).observe(v,{childList:true,subtree:true})};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})(window);

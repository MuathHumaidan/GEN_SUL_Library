/* أدوات مشتركة لمقرر الفيزياء (فيزي-101): تنسيق الأرقام، المختبرات المصغرة في الأسلوب «التفاعلي»، وعناصر الرسم.
   يُحمَّل قبل ملفات الوحدات (window.PHK). */
(function(G){
"use strict";
const css=`
.pk{--pkh:42px}
.pk .pk-in{margin:0 0 10px;color:var(--muted);font-size:14px;line-height:1.8}
.pk .pk-b{font:inherit;font-size:14px;min-height:var(--pkh);padding:7px 14px;border-radius:12px;border:1.5px solid var(--line);background:var(--bg);color:var(--fg);cursor:pointer;line-height:1.5;text-align:start}
.pk .pk-b:hover:not(:disabled){border-color:var(--blue)}
.pk .pk-b:disabled{cursor:default}
.pk .pk-b[aria-pressed="true"]{background:var(--blue);border-color:var(--blue);color:#fff}
.pk .pk-b.ok{border-color:var(--on);background:var(--on-soft);color:var(--fg)}
.pk .pk-b.no{border-color:var(--stop);background:var(--stop-soft);color:var(--fg)}
.pk .pk-b.dim{opacity:.55}
.pk .pk-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}
.pk .pk-fb{margin-top:10px;font-size:14.5px;line-height:1.8;border-inline-start:3px solid var(--blue);background:var(--blue-soft);padding:8px 12px;border-radius:8px}
.pk .pk-fb.bad{border-inline-start-color:var(--stop);background:var(--stop-soft)}
.pk .pk-fb:empty,.pk [hidden]{display:none}
.pk .pk-it{border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin-top:8px;background:var(--surface)}
.pk .pk-it p{margin:0 0 8px;line-height:1.75}
.pk .pk-it .pk-row{margin-top:0}
.pk .pk-why{margin-top:8px;font-size:14px;line-height:1.75}
.pk .pk-score{margin-top:10px;font-weight:700}
.pk .pk-ord{margin:10px 0 0;padding-inline-start:22px}
.pk .pk-ord li{margin:6px 0;padding:6px 10px;border-radius:10px;background:var(--on-soft);border:1px solid var(--on);line-height:1.6}
.pk .pk-pool{display:grid;gap:8px;margin-top:10px}
.pk .pk-sl,.phl .pk-sl{display:block;margin-top:12px;font-size:14px;min-width:0}
.pk-sl .pk-h{display:flex;justify-content:space-between;gap:8px;align-items:baseline}
.pk-sl b{font-family:var(--mono);direction:ltr;unicode-bidi:isolate;color:var(--blue-ink);font-size:15px;white-space:nowrap}
.pk-sl input{width:100%;accent-color:var(--blue);direction:ltr;margin:6px 0 0;height:28px}
.pk .pk-facts,.phl .pk-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,140px),1fr));gap:8px;margin-top:12px}
.pk-facts div{background:var(--surface-2);border-radius:12px;padding:8px 10px;min-width:0}
.pk-facts span{display:block;font-size:12.5px;color:var(--muted);line-height:1.5}
.pk-facts b{display:block;font-family:var(--mono);font-size:17px;direction:ltr;text-align:end;unicode-bidi:plaintext;white-space:normal;overflow-wrap:anywhere}
.pk-facts div.hi{background:var(--blue-soft)}
.pk-facts div.bad{background:var(--stop-soft)}
.pk .pk-pic,.phl .pk-pic{margin-top:10px;max-width:560px;margin-inline:auto}
.pk-pic svg{width:100%;height:auto;display:block;touch-action:pan-y}
.pk .pk-lock{opacity:.45;pointer-events:none;filter:grayscale(.4)}
.pk .pk-pd{border:1.5px dashed var(--blue);border-radius:12px;padding:10px 12px;background:var(--bg)}
.pk .pk-pd .pk-q{font-weight:600;margin-bottom:8px;line-height:1.7}
.pk .pk-pd .pk-pool{margin-top:0}
.pk .pk-ill,.phl .pk-ill{font-size:12.5px;color:var(--muted);margin-top:8px}
.pk .ltr,.phl .ltr{direction:ltr;unicode-bidi:isolate;white-space:nowrap}
.pk .pk-in2{font:inherit;font-family:var(--mono);font-size:16px;width:9em;max-width:100%;padding:6px 10px;border-radius:10px;border:1.5px solid var(--line);background:var(--bg);color:var(--fg);direction:ltr}
.phl .grid{gap:12px}
.phl .seg{flex-wrap:wrap;max-width:100%}
.phl .seg button{white-space:nowrap}
.phl .ph-try{margin:6px 0 0;padding-inline-start:20px;line-height:1.9}
.phl .ph-big{font-family:var(--mono);font-size:22px;direction:ltr;unicode-bidi:isolate;font-weight:700;color:var(--blue-ink)}
.phl .ph-tbl{width:100%;border-collapse:collapse;font-size:14px}
.phl .ph-tbl th,.phl .ph-tbl td{border-bottom:1px solid var(--line);padding:6px 6px;text-align:center}
.phl .ph-tbl td.l{font-family:var(--mono);direction:ltr}
.phl .ph-tw{overflow-x:auto}
.phl input.ph-num{font:inherit;font-family:var(--mono);font-size:16px;width:8em;max-width:100%;padding:6px 10px;border-radius:10px;border:1.5px solid var(--line);background:var(--bg);color:var(--fg);direction:ltr}
.phl select.ph-sel{font:inherit;font-size:15px;padding:6px 10px;border-radius:10px;border:1.5px solid var(--line);background:var(--bg);color:var(--fg);max-width:100%}
.phl .ph-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}
.phl svg{touch-action:pan-y}
.ph-q{border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin:10px 0;background:var(--surface)}
.ph-q summary{cursor:pointer;font-weight:600;line-height:1.7}
.ph-ans{margin-top:8px;border-inline-start:3px solid var(--blue);padding:6px 12px;background:var(--blue-soft);border-radius:0 10px 10px 0}
.tt{border-collapse:collapse;width:100%;font-size:14.5px;margin:8px 0}
.tt th,.tt td{border:1px solid var(--line);padding:6px 8px;text-align:center}
.tt th{background:var(--surface-2)}
.tt td.l{font-family:var(--mono);direction:ltr}
.tbx{overflow-x:auto;max-width:100%;contain:paint}
.theory .katex-display,.stations .katex-display,.ex .katex-display{overflow-x:auto;overflow-y:hidden;max-width:100%;padding:2px 0}
.st-hero>div,.sb .prose{min-width:0}
`;
const addCss=()=>{if(typeof document==='undefined'||document.getElementById('phk-css'))return;const s=document.createElement('style');s.id='phk-css';s.textContent=css;document.head.appendChild(s)};
addCss();
const lt=s=>`<span class="ltr">${s}</span>`;
const q=(el,s)=>el.querySelector(s),qa=(el,s)=>[...el.querySelectorAll(s)];
/* تقريب: رقمان بعد الفاصلة؛ الأرقام الصغيرة جداً أو الكبيرة جداً بالصيغة العلمية برقمين بعد الفاصلة */
const SUP={'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
const sup=n=>String(n).split('').map(c=>SUP[c]||c).join('');
function fm(x,dp){if(typeof x!=='number'||!isFinite(x))return '—';dp=dp==null?2:dp;const a=Math.abs(x);
 if(a!==0&&(a>=1e6||a<0.01)){let e=Math.floor(Math.log10(a)),m=x/Math.pow(10,e);m=Math.round(m*100)/100;if(Math.abs(m)>=10){m/=10;e++}return `${m.toFixed(2)} × 10${sup(e)}`.replace(/^-/,'−')}
 const p=Math.pow(10,dp);let r=Math.round(x*p)/p;if(Object.is(r,-0)||r===0)r=0;return r.toFixed(dp).replace(/^-/,'−')}
/* الصيغة نفسها لكن بنص LaTeX (للحلول المكتوبة بـ KaTeX) */
function tx(x,dp){const s=fm(x,dp);return s.replace(/ × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/,(m,e)=>'\\times 10^{'+e.split('').map(c=>Object.keys(SUP).find(k=>SUP[k]===c)).join('')+'}').replace('−','-')}
const fin=(el,B)=>{try{B.math(el)}catch(e){}};
const start=(el,intro)=>{addCss();el.classList.add('pk');return intro?`<p class="pk-in">${intro}</p>`:''};
const mix=n=>{const a=[...Array(n).keys()];let s=n*7+3;for(let i=n-1;i>0;i--){s=(s*48271)%2147483647;const j=s%(i+1);[a[i],a[j]]=[a[j],a[i]]}if(a.every((v,i)=>v===i)&&n>1)a.push(a.shift());return a};

/* صح أم خطأ: items [[العبارة, true|false, السبب], …] */
function tf(el,B,o){let h=start(el,o.intro);
 h+=o.items.map((it,i)=>`<div class="pk-it" data-i="${i}"><p>${it[0]}</p><div class="pk-row"><button type="button" class="pk-b" data-a="1">صح</button><button type="button" class="pk-b" data-a="0">خطأ</button></div><div class="pk-why" hidden></div></div>`).join('')+`<div class="pk-score" hidden></div>`;
 el.innerHTML=h;fin(el,B);const done={};
 qa(el,'.pk-it').forEach(box=>{const i=+box.dataset.i,it=o.items[i],w=q(box,'.pk-why');
  qa(box,'[data-a]').forEach(b=>b.onclick=()=>{const ok=(b.dataset.a==='1')===!!it[1];
   qa(box,'[data-a]').forEach(x=>{x.disabled=true;x.classList.add((x.dataset.a==='1')===!!it[1]?'ok':x===b?'no':'dim')});
   w.innerHTML=`<b>${ok?'صحيح.':'ليس كذلك.'}</b> العبارة ${it[1]?'صحيحة':'خاطئة'}: ${it[2]||''}`;w.hidden=false;fin(w,B);done[i]=ok;
   if(Object.keys(done).length===o.items.length){const s=q(el,'.pk-score'),k=Object.values(done).filter(Boolean).length;
    s.innerHTML=`أصبت ${lt(k+' / '+o.items.length)}. <button type="button" class="pk-b" data-rs>أعد المحاولة</button>`;s.hidden=false;q(s,'[data-rs]').onclick=()=>tf(el,B,o)}})})}
/* صنّف: cats [..], items [[نص, رقم الصنف, السبب]] */
function sort(el,B,o){let h=start(el,o.intro);
 h+=o.items.map((it,i)=>`<div class="pk-it" data-i="${i}"><p>${it[0]}</p><div class="pk-row">${o.cats.map((c,j)=>`<button type="button" class="pk-b" data-c="${j}">${c}</button>`).join('')}</div><div class="pk-why" hidden></div></div>`).join('')+`<div class="pk-score" hidden></div>`;
 el.innerHTML=h;fin(el,B);const done={};
 qa(el,'.pk-it').forEach(box=>{const i=+box.dataset.i,it=o.items[i],w=q(box,'.pk-why');
  qa(box,'[data-c]').forEach(b=>b.onclick=()=>{const ok=+b.dataset.c===it[1];
   qa(box,'[data-c]').forEach(x=>{x.disabled=true;x.classList.add(+x.dataset.c===it[1]?'ok':x===b?'no':'dim')});
   w.innerHTML=`<b>${ok?'صحيح.':'ليس كذلك.'}</b> ${it[2]||''}`;w.hidden=false;fin(w,B);done[i]=ok;
   if(Object.keys(done).length===o.items.length){const s=q(el,'.pk-score'),k=Object.values(done).filter(Boolean).length;
    s.innerHTML=`أصبت ${lt(k+' / '+o.items.length)}. <button type="button" class="pk-b" data-rs>أعد المحاولة</button>`;s.hidden=false;q(s,'[data-rs]').onclick=()=>sort(el,B,o)}})})}
/* مواقف: cases [{q, opts:[[نص, صحيح؟, السبب]]}] */
function cases(el,B,o){let h=start(el,o.intro);
 h+=o.cases.map((c,i)=>`<div class="pk-it" data-i="${i}"><p>${o.cases.length>1?`<b>${i+1}.</b> `:''}${c.q}</p><div class="pk-pool">${c.opts.map((x,j)=>`<button type="button" class="pk-b" data-j="${j}">${x[0]}</button>`).join('')}</div><div class="pk-why" hidden></div></div>`).join('');
 el.innerHTML=h;fin(el,B);
 qa(el,'.pk-it').forEach(box=>{const c=o.cases[+box.dataset.i],w=q(box,'.pk-why'),bs=qa(box,'[data-j]');
  bs.forEach(b=>b.onclick=()=>{const j=+b.dataset.j,ok=!!c.opts[j][1];
   bs.forEach(x=>{x.disabled=true;x.classList.add(c.opts[+x.dataset.j][1]?'ok':x===b?'no':'dim')});
   const right=c.opts.find(x=>x[1]);w.innerHTML=`<b>${ok?'صحيح.':'ليس هذا.'}</b> ${c.opts[j][2]||''}${!ok&&right&&right[2]?'<br>'+right[2]:''} <button type="button" class="pk-b" data-r style="min-height:34px;padding:3px 10px">حاول مرة أخرى</button>`;w.hidden=false;fin(w,B);
   q(w,'[data-r]').onclick=()=>{bs.forEach(x=>{x.disabled=false;x.classList.remove('ok','no','dim')});w.hidden=true}})})}
/* رتّب: steps [نص | [نص, لماذا ليست الآن]] */
function order(el,B,o){const S=o.steps.map(s=>Array.isArray(s)?s:[s,'']);const m=mix(S.length);let nx=0;
 el.innerHTML=start(el,o.intro||'اضغط الخطوات بالترتيب الصحيح.')+`<ol class="pk-ord"></ol><div class="pk-pool">${m.map(i=>`<button type="button" class="pk-b" data-i="${i}">${S[i][0]}</button>`).join('')}</div><div class="pk-fb"></div><div class="pk-row"><button type="button" class="pk-b" data-rs>من جديد</button></div>`;
 fin(el,B);const ol=q(el,'.pk-ord'),fb=q(el,'.pk-fb');
 qa(el,'.pk-pool [data-i]').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;
  if(i===nx){const li=document.createElement('li');li.innerHTML=S[i][0];ol.appendChild(li);fin(li,B);b.hidden=true;nx++;fb.className='pk-fb';fb.innerHTML=nx===S.length?`<b>أحسنت، الترتيب كامل.</b> ${o.done||''}`:'';fin(fb,B)}
  else{fb.className='pk-fb bad';fb.innerHTML=`<b>ليست هذه الخطوة التالية.</b> ${S[i][1]||''}`;fin(fb,B)}});
 q(el,'[data-rs]').onclick=()=>order(el,B,o)}
/* منزلقات وحساب حي: ins [{k,l,u,min,max,step,v,dp}], seg:{k,l,opts:[[v,label]],v}, calc(s)->{facts:[[label,value,cls]],pic,note}
   pre: سؤال «توقّع أولاً» يفتح الأدوات بعد الإجابة {q, opts:[[نص,صح,سبب]]} */
function calc(el,B,o){let h=start(el,o.intro);
 const st={};(o.ins||[]).forEach(i=>st[i.k]=i.v);(o.segs||[]).forEach(s=>st[s.k]=s.v);
 if(o.pre)h+=`<div class="pk-pd"><div class="pk-q">توقّع أولاً: ${o.pre.q}</div><div class="pk-pool">${o.pre.opts.map((x,j)=>`<button type="button" class="pk-b" data-p="${j}">${x[0]}</button>`).join('')}</div><div class="pk-fb" data-pf></div></div>`;
 h+=`<div class="pk-body${o.pre?' pk-lock':''}">`;
 h+=(o.segs||[]).map(s=>`<div class="pk-sl"><span>${s.l}</span><div class="pk-row" style="margin-top:6px">${s.opts.map(([v,l])=>`<button type="button" class="pk-b" data-sk="${s.k}" data-sv="${v}" aria-pressed="${String(v)===String(s.v)}">${l}</button>`).join('')}</div></div>`).join('');
 h+=(o.ins||[]).map(i=>`<label class="pk-sl"><span class="pk-h"><span>${i.l}</span><b data-v="${i.k}"></b></span><input type="range" data-k="${i.k}" min="${i.min}" max="${i.max}" step="${i.step}" value="${i.v}" aria-label="${i.l.replace(/<[^>]+>/g,'')}"></label>`).join('');
 h+=`<div class="pk-pic" data-pic></div><div class="pk-facts" data-f></div><div class="pk-fb" data-n></div>${o.ill?`<p class="pk-ill">${o.ill}</p>`:''}</div>`;
 el.innerHTML=h;
 const draw=()=>{(o.ins||[]).forEach(i=>{const b=q(el,`[data-v="${i.k}"]`);b.textContent=(i.fmt?i.fmt(st[i.k]):B.fmtN(st[i.k],i.dp))+(i.u?' '+i.u:'')});
  let r={};try{r=o.calc(st,B)||{}}catch(e){console.error(e)}
  q(el,'[data-pic]').innerHTML=r.pic||'';q(el,'[data-pic]').hidden=!r.pic;
  q(el,'[data-f]').innerHTML=(r.facts||[]).map(f=>`<div class="${f[2]||''}"><span>${f[0]}</span><b>${f[1]}</b></div>`).join('');
  const n=q(el,'[data-n]');n.innerHTML=r.note||'';fin(n,B);fin(q(el,'[data-f]'),B)};
 qa(el,'[data-k]').forEach(inp=>inp.addEventListener('input',()=>{st[inp.dataset.k]=+inp.value;draw()}));
 qa(el,'[data-sk]').forEach(b=>b.addEventListener('click',()=>{st[b.dataset.sk]=b.dataset.sv;qa(el,`[data-sk="${b.dataset.sk}"]`).forEach(x=>x.setAttribute('aria-pressed',String(x===b)));draw()}));
 if(o.pre){const bs=qa(el,'[data-p]'),pf=q(el,'[data-pf]');bs.forEach(b=>b.onclick=()=>{const j=+b.dataset.p,ok=!!o.pre.opts[j][1];
  bs.forEach(x=>{x.disabled=true;x.classList.add(o.pre.opts[+x.dataset.p][1]?'ok':x===b?'no':'dim')});
  const right=o.pre.opts.find(x=>x[1]);pf.className='pk-fb'+(ok?'':' bad');pf.innerHTML=`<b>${ok?'توقعك صحيح.':'ليس هذا.'}</b> ${o.pre.opts[j][2]||''}${!ok&&right[2]?'<br>'+right[2]:''} — جرّب الآن بنفسك.`;fin(pf,B);
  q(el,'.pk-body').classList.remove('pk-lock')})}
 fin(el,B);draw();return {st,draw}}
/* سؤال كتابة رقم: {q, ans, tol(نسبة), unit, why} */
function num(el,B,o){let h=start(el,o.intro);
 h+=o.items.map((it,i)=>`<div class="pk-it" data-i="${i}"><p>${it.q}</p><div class="pk-row"><input class="pk-in2" type="text" inputmode="decimal" aria-label="إجابتك"> ${it.unit?lt(it.unit):''}<button type="button" class="pk-b" data-c>تحقّق</button><button type="button" class="pk-b" data-s>أظهر الحل</button></div><div class="pk-why" hidden></div></div>`).join('');
 el.innerHTML=h;fin(el,B);
 qa(el,'.pk-it').forEach(box=>{const it=o.items[+box.dataset.i],w=q(box,'.pk-why'),inp=q(box,'input');
  const parse=s=>{s=String(s).trim().replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[×x*]\s*10\^?\s*([−-]?\d+)/i,'e$1').replace(/[−]/g,'-').replace(/\s+/g,'').replace(/,/g,'.');return parseFloat(s)};
  const chk=()=>{const v=parse(inp.value);if(!isFinite(v))return;const ok=Math.abs(v-it.ans)<=Math.abs(it.ans)*(it.tol||0.01)+1e-12;
   w.innerHTML=`<b>${ok?'صحيح.':'ليس بعد.'}</b> ${ok?(it.why||''):'راجع الخطوات وحاول مرة أخرى، أو اضغط «أظهر الحل».'}`;w.hidden=false;fin(w,B)};
  q(box,'[data-c]').onclick=chk;inp.addEventListener('keydown',e=>{if(e.key==='Enter')chk()});
  q(box,'[data-s]').onclick=()=>{w.innerHTML=`<b>الحل:</b> ${it.why||''}`;w.hidden=false;fin(w,B)}})}

/* رسم: خلفية المحطة وعناصر ثابتة */
const C={ink:'#2C4A40',bg:'#FBE6C4',paper:'#FBF6EE',yel:'#F2C14E',red:'#C8553D',blue:'#3E7CB1',grn:'#4F9D69',mut:'#8a8f86'};
const art=(inner,aria)=>`<svg viewBox="0 0 360 320" role="img" aria-label="${aria||''}" style="font-family:var(--font)" xmlns="http://www.w3.org/2000/svg"><circle cx="180" cy="160" r="140" fill="${C.bg}"/>${inner}</svg>`;
const T=(x,y,s,o)=>{o=o||{};return `<text x="${x}" y="${y}" text-anchor="${o.a||'middle'}" font-size="${o.fs||13}" fill="${o.c||C.ink}"${o.w?` font-weight="${o.w}"`:''}${o.ar?' direction="rtl"':''}>${s}</text>`};
const TL=(x,y,s,o)=>{o=o||{};return `<text x="${x}" y="${y}" text-anchor="${o.a||'middle'}" font-size="${o.fs||13}" fill="${o.c||C.ink}"${o.w?` font-weight="${o.w}"`:''} direction="ltr" font-family="var(--mono)">${s}</text>`};
function arrowS(x1,y1,x2,y2,col,w,head){w=w||3;const a=Math.atan2(y2-y1,x2-x1),L=Math.hypot(x2-x1,y2-y1);if(L<2)return '';const h=Math.min(head||12,L*0.6)+w;
 const bx=x2-h*Math.cos(a),by=y2-h*Math.sin(a),px=-Math.sin(a)*h*0.42,py=Math.cos(a)*h*0.42,f=v=>(+v).toFixed(1);
 return `<path d="M${f(x1)} ${f(y1)}L${f(bx)} ${f(by)}" stroke="${col}" stroke-width="${w}" fill="none" stroke-linecap="round"/><path d="M${f(x2)} ${f(y2)}L${f(bx+px)} ${f(by+py)}L${f(bx-px)} ${f(by-py)}Z" fill="${col}"/>`}
/* سؤال كتاب بإجابة مقترحة */
const Qd=(n,qs,ans)=>`<details class="ph-q"><summary>${n}: ${qs}</summary><div class="ph-ans"><b>إجابة مقترحة (ليست من الكتاب):</b> ${ans}</div></details>`;
/* حلقة رسم تتوقف عند مغادرة الصفحة */
/* key: تشغيل جديد بنفس المفتاح يوقف السابق (حتى تعمل «إعادة التجربة» دائماً)؛ وإرجاع false من fn يوقف الحلقة */
function loopOn(el,fn,key){let last=performance.now();const tok={};if(key)(el._loops||(el._loops={}))[key]=tok;const f=now=>{if(!document.body.contains(el))return;if(key&&el._loops[key]!==tok)return;const dt=Math.min(0.05,Math.max(0,(now-last)/1000));last=now;let r;try{r=fn(dt)}catch(e){console.error(e);return}if(r===false){if(key&&el._loops[key]===tok)delete el._loops[key];return}requestAnimationFrame(f)};requestAnimationFrame(f)}
function loopStop(el,key){if(el._loops)delete el._loops[key]}
const sl=(id,label,min,max,step,val)=>`<label class="pk-sl"><span class="pk-h"><span>${label}</span><b id="${id}-v"></b></span><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}" aria-label="${label.replace(/<[^>]+>/g,'')}"></label>`;
const seg=(attr,items,cur)=>`<div class="seg" role="group">${items.map(([v,l])=>`<button type="button" data-${attr}="${v}" aria-pressed="${String(v)===String(cur)}">${l}</button>`).join('')}</div>`;
const segBind=(el,attr,fn)=>qa(el,`[data-${attr}]`).forEach(b=>b.addEventListener('click',()=>{qa(el,`[data-${attr}]`).forEach(x=>x.setAttribute('aria-pressed',String(x===b)));fn(b.dataset[attr])}));
const facts=list=>`<div class="pk-facts">${list.map(([l,v,c])=>`<div class="${c||''}"><span>${l}</span><b>${v}</b></div>`).join('')}</div>`;
/* قيمة خطوة حل: رقم عادي، أو نص بالصيغة العلمية للأرقام الكبيرة جداً والصغيرة جداً */
const ev=x=>{const a=Math.abs(x);return (a!==0&&(a>=1e6||a<0.01))?fm(x):x};
/* رسم بياني بسيط: {w,h,xr:[a,b],yr:[a,b],xl,yl,series:[{pts:[[x,y]],col,dash,w}],dots:[[x,y,col,label]],extra:(X,Y)=>svg,xt,yt} */
function plot(o){const W=o.w||520,H=o.h||260,L=o.left||46,Rm=14,Tm=16,Bm=34,[x0,x1]=o.xr,[y0,y1]=o.yr;
 const X=x=>L+(x-x0)/((x1-x0)||1)*(W-L-Rm),Y=y=>H-Bm-(y-y0)/((y1-y0)||1)*(H-Tm-Bm),f=v=>(+v).toFixed(1);
 const tk=(a,b)=>{const sp=(b-a)||1,e=Math.pow(10,Math.floor(Math.log10(sp/4))),st=[1,2,2.5,5,10].map(k=>k*e).find(k=>sp/k<=6.01);const r=[];for(let v=Math.ceil(a/st-1e-9)*st;v<=b+1e-9;v+=st)r.push(+v.toFixed(10));return r};
 const xt=o.xt||tk(x0,x1),yt=o.yt||tk(y0,y1);let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.aria||'رسم بياني'}">`;
 yt.forEach(v=>{s+=`<path d="M${L} ${f(Y(v))}H${W-Rm}" stroke="var(--line)"/><text x="${L-6}" y="${f(Y(v)+4)}" text-anchor="end" font-size="11" fill="var(--muted)" font-family="var(--mono)">${+v.toFixed(3)}</text>`});
 xt.forEach(v=>{s+=`<path d="M${f(X(v))} ${Tm}V${H-Bm}" stroke="var(--line)" stroke-dasharray="3 3"/><text x="${f(X(v))}" y="${H-Bm+15}" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="var(--mono)">${+v.toFixed(3)}</text>`});
 s+=`<path d="M${L} ${Tm}V${H-Bm}H${W-Rm}" stroke="var(--fg)" fill="none" stroke-width="1.4"/>`;
 if(y0<0&&y1>0)s+=`<path d="M${L} ${f(Y(0))}H${W-Rm}" stroke="var(--fg)" stroke-width="1"/>`;
 if(o.xl)s+=`<text x="${W-Rm}" y="${H-6}" text-anchor="start" font-size="12" fill="var(--fg)" direction="rtl">${o.xl}</text>`;
 if(o.yl)s+=`<text x="${L+6}" y="${Tm+10}" text-anchor="end" font-size="12" fill="var(--fg)" direction="rtl">${o.yl}</text>`;
 (o.series||[]).forEach(se=>{if(!se.pts.length)return;s+=`<path d="${se.pts.map((p,i)=>(i?'L':'M')+f(X(p[0]))+' '+f(Y(Math.max(y0-(y1-y0),Math.min(y1+(y1-y0),p[1]))))).join('')}" fill="none" stroke="${se.col||'var(--blue)'}" stroke-width="${se.w||2.6}" ${se.dash?`stroke-dasharray="${se.dash}"`:''} stroke-linejoin="round" stroke-linecap="round"/>`});
 (o.dots||[]).forEach(d=>{s+=`<circle cx="${f(X(d[0]))}" cy="${f(Y(d[1]))}" r="${d[4]||4.5}" fill="${d[2]||'var(--live)'}" stroke="var(--surface)" stroke-width="1.5"/>`+(d[3]?`<text x="${f(X(d[0])+7)}" y="${f(Y(d[1])-7)}" font-size="12" font-weight="700" fill="${d[2]||'var(--live)'}" font-family="var(--mono)">${d[3]}</text>`:'')});
 if(o.extra)s+=o.extra(X,Y);
 return s+'</svg>'}
G.PHK={plot,ev,css,lt,fm,tx,sup,tf,sort,cases,order,calc,num,C,art,T,TL,arrowS,Qd,loopOn,loopStop,sl,seg,segBind,facts,q,qa,fin};
})(window);

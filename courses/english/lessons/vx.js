/* «شاهد الفكرة»: شرح مرئي تفاعلي في بداية الدرس (قرار المدرب، نوفمبر 2026)
   أدوات مشتركة: VX.css() · VX.tiles(host, tiles) مع حركة انتقال القطع (FLIP) · VX.L[<درس>] = (el,B)=>… */
(function(G){
const css=`
.vx{border:2px solid #2f6b8f;border-radius:16px;overflow:hidden;background:#fff;margin:6px 0 18px}
.vx-h{background:#e3eef5;padding:10px 14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.vx-h .tg{background:#2f6b8f;color:#fff;border-radius:999px;padding:2px 10px;font-size:13px;font-weight:700}
.vx-b{padding:12px 14px}
.vx-scene{background:#f4f8fb;border-radius:12px;padding:4px;margin-bottom:10px}
.vx-scene svg{width:100%;height:auto;display:block}
.vx-scene .dim{opacity:0;transition:opacity .35s}
.vx-scene .dim.on{opacity:1}
.vx-scene .dim.on .ln{stroke-dasharray:400;stroke-dashoffset:400;animation:vxdraw .7s ease-out forwards}
@keyframes vxdraw{to{stroke-dashoffset:0}}
.vx-scene .dim.on .val{animation:vxpop .4s .5s both}
@keyframes vxpop{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.vx-chips{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:4px 0 12px}
.vx-chips button{font:inherit;border:2px solid #c9d7e1;background:#fff;border-radius:12px;padding:6px 2px;cursor:pointer;line-height:1.3}
.vx-chips button b{display:block;font-family:var(--font-la,var(--font));font-size:1.05em;direction:ltr}
.vx-chips button small{color:var(--muted);font-size:.8em}
.vx-chips button.on{border-color:#2f6b8f;background:#2f6b8f;color:#fff}.vx-chips button.on small{color:#dce9f2}
.vx-card{background:#f7f5f0;border-radius:12px;padding:10px 12px;margin-bottom:10px}
.vx-card h4{margin:0 0 6px;font-size:.95em}
.vx-row{display:flex;flex-wrap:nowrap;gap:6px;direction:ltr;align-items:center;min-height:44px;position:relative}
.vx-t{font-family:var(--font-la,var(--font));font-weight:700;font-size:clamp(14px,4.2vw,18px);padding:5px 10px;border-radius:9px;background:#fff;border:1.5px solid #d9d2c4;transition:transform .55s cubic-bezier(.3,.7,.3,1),background .3s,color .3s;white-space:nowrap}
.vx-t.a{background:#1f8a5b;color:#fff;border-color:#1f8a5b}
.vx-t.n{background:#2f6b8f;color:#fff;border-color:#2f6b8f}
.vx-t.k{background:#f1b33c;border-color:#e0a32b}
.vx-t.q{background:#fff3c7;border-color:#e6c766}
.vx-t.new{animation:vxpop .45s .25s both}
.vx-why{margin:8px 0 0;font-size:.95em}
.vx-why .a{color:#1f8a5b;font-weight:700}.vx-why .n{color:#2f6b8f;font-weight:700}
.vx-sw{font:inherit;border:0;border-radius:10px;padding:7px 14px;background:#2f6b8f;color:#fff;cursor:pointer;margin-top:8px}
.vx-qa{display:grid;gap:6px}
.vx-bub{display:flex;align-items:center;gap:8px;direction:ltr;font-family:var(--font-la,var(--font));padding:8px 12px;border-radius:14px;max-width:92%;animation:vxpop .4s both}
.vx-bub.q{background:#e3eef5;justify-self:start;border-bottom-left-radius:4px}
.vx-bub.r{background:#e2f2e8;justify-self:end;border-bottom-right-radius:4px;animation-delay:.35s}
.vx-quiz{border-top:1px dashed var(--line);padding-top:10px;margin-top:4px}
.vx-quiz .opts{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:8px}
.vx-quiz .opts button{font:inherit;font-family:var(--font-la,var(--font));font-weight:700;border:2px solid #d9d2c4;background:#fff;border-radius:10px;padding:8px 2px;cursor:pointer}
.vx-quiz .opts button.ok{background:#e2f2e8;border-color:#1f8a5b}.vx-quiz .opts button.no{background:#fbe9e4;border-color:#c4553f}
.vx-fb{min-height:1.6em;margin-top:6px;font-weight:700}
`;
const addCss=()=>{if(document.getElementById('vx-css'))return;const s=document.createElement('style');s.id='vx-css';s.textContent=css;document.head.appendChild(s)};
/* قطع جملة مع حركة: tiles=[[مفتاح,نص,لون]] — القطعة بنفس المفتاح تنتقل من مكانها القديم إلى الجديد */
function tiles(host,T){const old={};host.querySelectorAll('.vx-t').forEach(t=>{old[t.dataset.k]=t.getBoundingClientRect()});
 host.innerHTML=T.map(([k,t,c])=>`<span class="vx-t ${c||''}${old[k]?'':' new'}" data-k="${k}">${t}</span>`).join('');
 {let f=18;const W=()=>host.scrollWidth>host.clientWidth+1;while(W()&&f>11){f--;host.querySelectorAll('.vx-t').forEach(x=>{x.style.fontSize=f+'px';x.style.padding='5px '+Math.max(4,f-10)+'px'})}}
 host.querySelectorAll('.vx-t').forEach(t=>{const o=old[t.dataset.k];if(!o)return;const n=t.getBoundingClientRect();const dx=o.left-n.left,dy=o.top-n.top;if(!dx&&!dy)return;
  t.style.transition='none';t.style.transform=`translate(${dx}px,${dy}px)`;requestAnimationFrame(()=>requestAnimationFrame(()=>{t.style.transition='';t.style.transform=''}))})}
const EN=B=>!!(B&&B.lang&&B.lang()==='en');
const sp=t=>(G.ENK&&G.ENK.sp)?G.ENK.sp(t):'';
const shell=(el,title,sub,B)=>{addCss();el.innerHTML=`<div class="vx"><div class="vx-h"><span class="tg">${EN(B)?'See the idea':'شاهد الفكرة'}</span><b>${title}</b></div><div class="vx-b">${sub?`<p style="margin:0 0 8px">${sub}</p>`:''}<div class="vx-in"></div></div></div>`;return el.querySelector('.vx-in')};
G.VX={css:addCss,tiles,sp,shell,EN,L:{}};

/* ========== انجل-102 الدرس 7.1: الأبعاد الأربعة ========== */
const D71={
 long:{ar:'الطول',n:'length',v:'2.5 km',qa:['How long is the bridge?',"It's 2.5 km long."],tip:'من أول الجسر إلى آخره.',te:'from one end of the bridge to the other.'},
 wide:{ar:'العرض',n:'width',v:'30 m',qa:['How wide is the bridge?',"It's 30 m wide."],tip:'من جانب الطريق إلى الجانب الآخر (انظر الجسر من فوق).',te:'from one side of the road to the other (look at the bridge from above).'},
 high:{ar:'الارتفاع',n:'height',v:'90 m',qa:['How high is the bridge?',"It's 90 m high."],tip:'من سطح الماء إلى أعلى البرج.',te:'from the water to the top of the pylon.'},
 deep:{ar:'العمق',n:'depth',v:'20 m',qa:['How deep is the river?',"It's 20 m deep."],tip:'من سطح الماء إلى قاع النهر.',te:'from the water to the bottom of the river.'}};
const scene71=(en)=>`<svg viewBox="0 0 360 236" role="img" aria-label="جسر فوق نهر، مع أسهم للطول والعرض والارتفاع والعمق">
 <rect x="0" y="0" width="360" height="236" fill="#eaf3f9"/>
 <path d="M0 120 L60 120 L90 212 L270 212 L300 120 L360 120 L360 236 L0 236Z" fill="#b9a27f"/>
 <path d="M60 140 L300 140 L270 212 L90 212Z" fill="#7fb3d5"/>
 <line x1="60" y1="140" x2="300" y2="140" stroke="#3d7fae" stroke-width="2"/>
 <rect x="20" y="112" width="320" height="10" rx="2" fill="#3b4a54"/>
 ${[120,240].map(x=>`<rect x="${x-5}" y="122" width="10" height="90" fill="#8b8f93"/><rect x="${x-3}" y="40" width="6" height="74" fill="#c4553f"/>${[-70,-45,-20,20,45,70].map(d=>`<line x1="${x}" y1="44" x2="${x+d}" y2="112" stroke="#555" stroke-width="1"/>`).join('')}`).join('')}
 <g transform="translate(262,6)"><rect x="0" y="0" width="94" height="64" rx="6" fill="#fff" stroke="#c9d7e1"/><rect x="6" y="22" width="82" height="24" fill="#3b4a54"/><line x1="8" y1="34" x2="86" y2="34" stroke="#f1b33c" stroke-dasharray="6 5" stroke-width="2"/><text x="47" y="15" font-size="11" font-weight="700" text-anchor="middle" fill="#567">${en?'from above':'الجسر من فوق'}</text></g>
 <g class="dim" data-d="long"><line class="ln" x1="22" y1="100" x2="338" y2="100" stroke="#1f8a5b" stroke-width="3"/><path d="M22 100 l8 -5 v10z M338 100 l-8 -5 v10z" fill="#1f8a5b"/><text class="val" x="180" y="94" font-size="14" font-weight="700" text-anchor="middle" fill="#1f8a5b">2.5 km</text></g>
 <g class="dim" data-d="wide"><line class="ln" x1="290" y1="28" x2="290" y2="52" stroke="#1f8a5b" stroke-width="3"/><path d="M290 27 l-5 7 h10z M290 53 l-5 -7 h10z" fill="#1f8a5b"/><text class="val" x="300" y="88" font-size="14" font-weight="700" text-anchor="middle" fill="#1f8a5b">30 m</text></g>
 <g class="dim" data-d="high"><line class="ln" x1="252" y1="40" x2="252" y2="140" stroke="#1f8a5b" stroke-width="3"/><path d="M252 40 l-5 8 h10z M252 140 l-5 -8 h10z" fill="#1f8a5b"/><text class="val" x="262" y="82" font-size="14" font-weight="700" fill="#1f8a5b">90 m</text></g>
 <g class="dim" data-d="deep"><line class="ln" x1="180" y1="142" x2="180" y2="211" stroke="#1f8a5b" stroke-width="3"/><path d="M180 142 l-5 8 h10z M180 211 l-5 -8 h10z" fill="#1f8a5b"/><text class="val" x="190" y="182" font-size="14" font-weight="700" fill="#1f8a5b">20 m</text></g>
</svg>`;
G.VX.L['u7-l1']=(el,B)=>{const en=EN(B),L=(a,b)=>en?b:a;const h=shell(el,L('الأبعاد الأربعة: الصفة والاسم','The four dimensions: adjective and noun'),L('المس بُعداً لترى أين يُقاس، ثم شاهد كيف نصفه بجملتين.','Tap a dimension to see where we measure it, then see how we describe it in two sentences.'),B);
 h.innerHTML=`<div class="vx-scene">${scene71(en)}</div>
  <div class="vx-chips">${Object.keys(D71).map(k=>`<button type="button" data-d="${k}"><b>${k}</b><small>${en?D71[k].n:D71[k].ar}</small></button>`).join('')}</div>
  <div class="vx-card"><h4>${L('1. نصف البُعد بالصفة أو بالاسم','1. We describe a dimension with the adjective or the noun')}</h4><div class="vx-row" id="r1"></div><p class="vx-why" id="w1"></p><button type="button" class="vx-sw" id="sw">↔ قلها بالاسم</button></div>
  <div class="vx-card"><h4>${L('2. نسأل بـ How + الصفة','2. We ask with How + adjective')}</h4><div class="vx-qa" id="qa"></div></div>
  <div class="vx-quiz"><b>${L('اختبر عينك:','Test your eye:')}</b> ${L('أي بُعد يشير إليه السهم الأخضر؟','Which dimension does the green arrow show?')}<div class="opts">${Object.keys(D71).map(k=>`<button type="button" data-q="${k}">${k}</button>`).join('')}</div><div class="vx-fb"></div></div>`;
 const $=s=>h.querySelector(s);let cur='long',noun=false,quiz=null,qn=0,qok=0;
 const obj=d=>d==='deep'?'river':'bridge';
 const draw=()=>{const d=D71[cur],o=obj(cur);
  h.querySelectorAll('.dim').forEach(g=>{g.classList.remove('on');if(g.dataset.d===cur){void g.getBBox();requestAnimationFrame(()=>g.classList.add('on'))}});
  h.querySelectorAll('.vx-chips button').forEach(b=>b.classList.toggle('on',b.dataset.d===cur));
  tiles($('#r1'),noun?[['the','The'],['adj',d.n,'n'],['of','of the '+o],['is','is'],['num',d.v+'.','k']]:[['the','The '+o],['is','is'],['num',d.v,'k'],['adj',cur+'.','a']]);
  const s=noun?`The ${d.n} of the ${o} is ${d.v}.`:`The ${o} is ${d.v} ${cur}.`;
  $('#w1').innerHTML=(noun?L(`<span class="n">الاسم ${d.n}</span> يأتي بعد The، ثم of والشيء، والرقم في الآخر.`,`<span class="n">The noun ${d.n}</span> comes after The, then of and the thing, and the number is at the end.`):L(`<span class="a">الصفة ${cur}</span> تأتي بعد الرقم والوحدة في آخر الجملة.`,`<span class="a">The adjective ${cur}</span> comes after the number and the unit, at the end of the sentence.`))+` ${sp(s)}<br><small>${en?d.n+': '+d.te:d.ar+': '+d.tip}</small>`;
  $('#sw').textContent=noun?L('↔ قلها بالصفة','↔ Say it with the adjective'):L('↔ قلها بالاسم','↔ Say it with the noun');
  $('#qa').innerHTML=`<div class="vx-bub q">${d.qa[0]} ${sp(d.qa[0])}</div><div class="vx-bub r">${d.qa[1]} ${sp(d.qa[1])}</div>`};
 h.querySelectorAll('.vx-chips button').forEach(b=>b.onclick=()=>{cur=b.dataset.d;quiz=null;$('.vx-fb').textContent='';draw()});
 $('#sw').onclick=()=>{noun=!noun;draw()};
 const ask=()=>{const ks=Object.keys(D71).filter(k=>k!==quiz);quiz=ks[(qn*7+3)%ks.length];
  h.querySelectorAll('.dim').forEach(g=>{g.classList.remove('on');if(g.dataset.d===quiz)requestAnimationFrame(()=>g.classList.add('on'))});
  h.querySelectorAll('.vx-chips button').forEach(b=>b.classList.remove('on'));h.querySelectorAll('.opts button').forEach(b=>b.className='')};
 h.querySelectorAll('.opts button').forEach(b=>b.onclick=()=>{if(!quiz){ask();$('.vx-fb').textContent=L('انظر إلى السهم واختر.','Look at the arrow and choose.');return}
  const ok=b.dataset.q===quiz;b.className=ok?'ok':'no';qn++;if(ok)qok++;
  $('.vx-fb').innerHTML=ok?L(`✔ صحيح: ${quiz} = ${D71[quiz].ar}. (${qok} من ${qn})`,`✔ Correct: ${quiz} (${qok} of ${qn})`):L(`✘ هذا ${b.dataset.q}. السهم يشير إلى ${quiz}.`,`✘ That is ${b.dataset.q}. The arrow shows ${quiz}.`);
  if(ok)setTimeout(()=>{if(qn<6)ask();else{$('.vx-fb').innerHTML+=L(' انتهى الاختبار.',' The test is over.');quiz=null;cur='long';draw()}},900)});
 $('.vx-quiz b').insertAdjacentHTML('afterend',` <small>${L('(اضغط أي زر للبدء)','(tap any button to start)')}</small>`);
 draw()};
})(window);

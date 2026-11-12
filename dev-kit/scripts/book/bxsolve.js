const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
const url='file://'+path.resolve(__dirname,'../lib/courses/english/index.html');await p.goto(url);await p.evaluate(()=>localStorage.setItem('elib-style','formal'));await p.reload();await p.waitForTimeout(300);
let tot={gaps:0,typ:0,match:0,choose:0,order:0},bad=[];
for(const id of await p.evaluate(()=>Object.keys(BX.data))){await p.evaluate(id=>location.hash=id,id);await p.waitForTimeout(400);
 const r=await p.evaluate(async id=>{const out={c:{gaps:0,typ:0,match:0,choose:0,order:0},bad:[]};const X=BX.data[id];
  for(const x0 of X){const host=document.querySelector(`[data-bx="${id}:${x0.n}"] .bx-b`);if(!host){out.bad.push(x0.n+' no host');continue}
   const x=x0.kind==='listen'?x0.then:x0;
   if(x.kind==='gaps'){host.querySelectorAll('.pk-it').forEach((it,i)=>{const s=it.querySelector('select');s.value=String(x.items[i].a);s.dispatchEvent(new Event('change'));out.c.gaps++;if(!/صحيح/.test(it.querySelector('.pk-why').textContent))out.bad.push(x0.n+' gap '+i)})}
   if(x.kind==='typ'){host.querySelectorAll('.pk-it').forEach((it,i)=>{const inp=it.querySelector('input');inp.value=x.items[i].a[0];it.querySelector('[data-c]').click();out.c.typ++;if(!/صحيح|أحسنت/.test(it.querySelector('.pk-why').textContent))out.bad.push(x0.n+' typ '+i+': '+it.querySelector('.pk-why').textContent.slice(0,40))})}
   if(x.kind==='match'){const rights=x.pairs.map(p=>p[1]);if(new Set(rights).size!==rights.length)out.bad.push(x0.n+' dup rights');host.querySelectorAll('.row').forEach((r,i)=>{const s=r.querySelector('select');s.value=String(i);s.dispatchEvent(new Event('change'));out.c.match++;if(!s.classList.contains('ok'))out.bad.push(x0.n+' match '+i)})}
   if(x.kind==='choose'){host.querySelectorAll('.pk-it').forEach((it,i)=>{const j=x.items[i].opts.findIndex(o=>o[1]);it.querySelector(`[data-j="${j}"]`).click();out.c.choose++;if(!/صحيح/.test(it.querySelector('.pk-why').textContent))out.bad.push(x0.n+' choose '+i)})}
   if(x.kind==='order'){for(let i=0;i<x.steps.length;i++){const bt=host.querySelector(`.pk-pool [data-i="${i}"]`);bt.click()}out.c.order++;if(!/أحسنت/.test(host.querySelector('.pk-fb').textContent))out.bad.push(x0.n+' order')}
  }return out},id);
 for(const k in r.c)tot[k]+=r.c[k];bad.push(...r.bad.map(s=>id+' '+s))}
console.log(tot,'bad',bad,errs.slice(0,5));await b.close()})();

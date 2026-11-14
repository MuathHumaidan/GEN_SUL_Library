const {chromium}=require('playwright');const path=require('path');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
const url='file://'+path.resolve('../lib/courses/'+(process.env.COURSE||'english')+'/index.html')+(process.env.LANG2?'?lang='+process.env.LANG2:'');const all=new Set();
for(const st of ['formal','stations']){await p.goto(url);await p.evaluate(s=>localStorage.setItem('elib-style',s),st);await p.reload();await p.waitForTimeout(400);
 const ids=await p.evaluate(()=>PLCBOOK.LESSONS.map(l=>l.id));
 for(const id of ids){await p.evaluate(id=>location.hash=id,id);await p.waitForTimeout(250);
  const tabs=await p.$$eval('.ltabs button',bs=>bs.map(b=>b.dataset.tab));
  for(const t of tabs){await p.click(`.ltabs button[data-tab="${t}"]`);await p.waitForTimeout(220);
   if(t==='examples'){for(const bt of await p.$$('[data-all]'))await bt.click().catch(()=>{});await p.waitForTimeout(150)}
   if(t==='lab'){ // اضغط الأزرار والقوائم لتظهر جمل المختبر
     for(const s of await p.$$('#view select')){const n=await s.$$eval('option',o=>o.length);for(let i=0;i<n;i++){await s.selectOption({index:i}).catch(()=>{});await p.waitForTimeout(40);(await p.$$eval('[data-say]',x=>x.map(e=>e.dataset.say))).forEach(v=>all.add(v))}}
     for(const bt of await p.$$('#view .phl button:not(.say)')){await bt.click().catch(()=>{});await p.waitForTimeout(40);(await p.$$eval('[data-say]',x=>x.map(e=>e.dataset.say))).forEach(v=>all.add(v))}}
   (await p.$$eval('[data-say]',x=>x.map(e=>e.dataset.say))).forEach(v=>all.add(v))}}}
const extra=await p.evaluate(()=>{const o=[];const pl=t=>String(t).replace(/<[^>]+>/g,'');
 Object.values(BX.data).forEach(X=>X.forEach(x0=>{[x0,x0.then].filter(Boolean).forEach(x=>{
  if(x.kind==='gaps')x.items.forEach(it=>o.push(pl(it.s.replace('___',it.o[it.a]))));
  if(x.kind==='typ')x.items.forEach(it=>o.push(pl(it.a[0])));
  if(x.kind==='listen')o.push(pl(x.text));})}));return o});extra.forEach(v=>all.add(v));
const W=await p.evaluate(()=>PLCBOOK.WORDS);Object.values(W).forEach(ls=>ls.forEach(w=>{all.add(w[0]);all.add(w[2])}));
const arr=[...all].map(s=>s.replace(/\s+/g,' ').trim()).filter(Boolean);fs.writeFileSync((process.env.SAY||'/home/claude/tts/say.json'),JSON.stringify([...new Set(arr)],null,0));
console.log('unique',new Set(arr).size);await b.close()})();

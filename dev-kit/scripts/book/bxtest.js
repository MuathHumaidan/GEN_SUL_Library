const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const errs=[];
for(const st of ['formal','stations']){const p=await b.newPage({viewport:{width:1280,height:900}});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 const url='file://'+path.resolve(__dirname,'../lib/courses/english/index.html');await p.goto(url);await p.evaluate(s=>localStorage.setItem('elib-style',s),st);await p.reload();await p.waitForTimeout(300);
 for(const id of (process.argv[2]||'u7-l1,u7-l2,u7-l3').split(',')){await p.evaluate(id=>location.hash=id,id);await p.waitForTimeout(400);
  const want=await p.evaluate(id=>(BX.data[id]||[]).length,id);const got=await p.$$eval('.bx',x=>x.length);
  const empty=await p.$$eval('.bx-b',x=>x.filter(e=>!e.textContent.trim()).length);console.log(st,id,'expected',want,'shown',got,'empty',empty)}
 if(st==='formal'){await p.evaluate(()=>location.hash='u7-l1');await p.waitForTimeout(400);const x=await p.$('[data-bx="u7-l1:4"]');await x.scrollIntoViewIfNeeded();await x.screenshot({path:'shots/bx-4.png'})}
 await p.close()}
console.log(errs.slice(0,8));await b.close()})();

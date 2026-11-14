// يمرّ على كل مختبرات التركيب (labB) في الدرس ويجرب كل التوليفات في الوضع الإنجليزي، ويضيف النصوص الناقصة إلى /home/claude/en/<C>/<id>.json
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const C=process.env.COURSE,ids=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
for(const id of ids){await p.goto(`file:///home/claude/lib/courses/${C}/index.html?lang=en&style=formal#${id}`);await p.waitForTimeout(1200);
 const n=await p.$$eval('.lb-out',x=>x.length);
 for(let i=0;i<n;i++){await p.evaluate(async i=>{const out=document.querySelectorAll('.lb-out')[i],box=out.parentElement;const rows=[...box.querySelectorAll('.lb-row')].map(r=>[...r.querySelectorAll('.lb-btns button')]);
   let total=rows.reduce((a,r)=>a*Math.max(1,r.length),1);if(total>400)total=400;
   for(let k=0;k<total;k++){let x=k;for(const r of rows){if(!r.length)continue;const j=x%r.length;x=Math.floor(x/r.length);r[j].click()}await new Promise(r=>setTimeout(r,25))}},i);await p.waitForTimeout(200)}
 await p.waitForTimeout(400);const miss=await p.evaluate(()=>[...window.__enMissing]);
 const f=`/home/claude/en/${C}/${id}.json`;let old=[];try{old=JSON.parse(fs.readFileSync(f))}catch(e){}
 const all=[...new Set([...old,...miss])];fs.writeFileSync(f,JSON.stringify(all,null,1));console.log(id,'labs',n,'total',all.length)}
await b.close()})();

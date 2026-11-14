const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
await p.addInitScript(()=>{localStorage.setItem('elib-style','stations')});const out={};
for(const id of ['u7-l1','u7-l2','u7-l3','u8-l1','u8-l2','u8-l3','u8-l4','u9-l1','u9-l2','u9-l3','u10-l1','u10-l2','u10-l3','u10-l4']){
await p.goto('file:///home/claude/lib/courses/english/index.html#'+id);await p.waitForTimeout(700);
const st=await p.$$eval('#tab-body h2,#tab-body h3',e=>e.map(x=>x.textContent.trim().replace(/\s+/g,' ')));
const mini=await p.$$eval('#tab-body b',e=>e.map(x=>x.textContent.trim()).filter(t=>/^مختبر مصغّر/.test(t)));
await p.click('.ltabs button[data-tab="lab"]');await p.waitForTimeout(300);
const lab=await p.$$eval('#tab-body h2,#tab-body h3',e=>e.map(x=>x.textContent.trim().replace(/\s+/g,' ')));
out[id]={st,mini,lab}}
console.log(JSON.stringify(out,null,0));await b.close()})()

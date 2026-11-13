const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.goto('file://'+path.resolve('../lib/courses/'+(process.env.COURSE||'english')+'/index.html'));await p.waitForTimeout(300);
let hit=0,miss=new Set();
for(const id of await p.evaluate(()=>PLCBOOK.LESSONS.map(l=>l.id))){await p.evaluate(id=>location.hash=id,id);await p.waitForTimeout(350);
 const r=await p.evaluate(()=>{const set=new Set(String(window.ENG_TTS).split(' '));const key=s=>{let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return ('0000000'+h.toString(16)).slice(-8)};
  const o={h:0,m:[]};document.querySelectorAll('#view [data-say]').forEach(b=>{const s=b.dataset.say.replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/___+/g,' blank ').replace(/\s+/g,' ').trim();set.has(key(s))?o.h++:o.m.push(s)});return o});
 hit+=r.h;r.m.forEach(s=>miss.add(s))}
console.log('hits',hit,'missing',miss.size,[...miss].slice(0,5));await b.close()})();

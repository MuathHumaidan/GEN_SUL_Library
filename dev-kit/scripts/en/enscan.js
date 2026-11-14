// الوضع الإنجليزي: يفتح كل درس بالأسلوبين وكل تبويب، ويجمع كل نص عربي لم يُترجم.
// usage: COURSE=eng101 node enscan.js [lessonId ...]  → /home/claude/en/<COURSE>/<lesson>.json و summary
const {chromium}=require('playwright');const path=require('path');const fs=require('fs');
(async()=>{const C=process.env.COURSE;const ids=process.argv.slice(2);
const out='/home/claude/en/'+C;fs.mkdirSync(out,{recursive:true});
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(String(e.message).slice(0,200)));
const url='file://'+path.resolve(__dirname,'../lib/courses/'+C+'/index.html');
await p.goto(url);await p.evaluate(()=>localStorage.setItem('elib-lang','en'));
let total=0;const all=await p.evaluate(()=>PLCBOOK.LESSONS.map(l=>l.id));
for(const id of (ids.length?ids:all)){const miss=new Set(),left=new Set();
 for(const st of ['formal','stations']){await p.evaluate(s=>localStorage.setItem('elib-style',s),st);await p.goto(url+'?lang=en&style='+st+'#'+id);await p.waitForTimeout(700);
  const tabs=await p.$$eval('.ltabs button',bs=>bs.map(b=>b.dataset.tab));
  for(const t of tabs){if(st==='stations'&&t!=='theory')continue;await p.click(`.ltabs button[data-tab="${t}"]`);await p.waitForTimeout(350);
   if(t==='lab'||t==='quiz'||t==='act'){const bs=await p.$$('#tab-body button:not(.say):not(.en-say), #tab-body select');const h0=await p.evaluate(()=>location.hash);for(const b of bs.slice(0,60)){if(await p.evaluate(()=>location.hash)!==h0)break;try{if(await b.evaluate(e=>e.tagName==='SELECT'))await b.selectOption({index:1});else await b.click({timeout:300});await p.waitForTimeout(60)}catch(e){}}}
   if(t==='examples'){for(const a of await p.$$('[data-all]')){try{await a.click();await p.waitForTimeout(80)}catch(e){}}}
   if(t==='theory'){for(const d of await p.$$('details:not([open]) > summary')){try{await d.click()}catch(e){}}}
   await p.waitForTimeout(300);
   (await p.evaluate(()=>[...window.__enMissing])).forEach(s=>miss.add(s));
   /* أي عربي ظاهر لم يُسجَّل (أمان) */
   (await p.evaluate(()=>{const AR=/[؀-ۿ]/,o=[];const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(!AR.test(n.nodeValue))continue;const e=n.parentElement;if(!e||e.closest('.lw-ar,.lw-mean,.lw-tr,[data-keep-ar],script,style,.lw-pop'))continue;if(e.closest('[hidden]'))continue;o.push(n.nodeValue.replace(/\s+/g,' ').trim())}return o})).forEach(s=>s&&left.add(s));
  }}
 const arr=[...miss];total+=arr.length;fs.writeFileSync(out+'/'+id+'.json',JSON.stringify(arr,null,1));fs.writeFileSync(out+'/'+id+'.left.json',JSON.stringify([...left],null,1));console.log(id,arr.length,'still-visible-arabic',left.size);
}
console.log('TOTAL',total,errs.length?'ERRORS '+errs.slice(0,5).join(' | '):'');await b.close()})();

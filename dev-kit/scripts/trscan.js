// الترجمة: يفتح كل درس بالأسلوبين وكل تبويب، ويجمع مفاتيح الجمل الإنجليزية (ENTRK.cands) + جمل «شاهد الفكرة».
// usage: COURSE=x node trscan.js [ids] → /home/claude/tr/<COURSE>.keys.json
const {chromium}=require('playwright');const path=require('path');const fs=require('fs');
(async()=>{const C=process.env.COURSE;const ids=process.argv.slice(2);fs.mkdirSync('/home/claude/tr',{recursive:true});
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(String(e.message).slice(0,200)));
const url='file://'+path.resolve(__dirname,'../lib/courses/'+C+'/index.html');
await p.addInitScript(()=>{localStorage.setItem('elib-lang','ar');const t=setInterval(()=>{if(window.VX&&window.VX.make&&!window.VX.__p){const m=window.VX.make;window.VX.__p=1;window.__vxc=[];window.VX.make=(el,B,cfg)=>{window.__vxc.push(cfg);return m(el,B,cfg)};clearInterval(t)}},5)});
await p.goto(url);const all=await p.evaluate(()=>PLCBOOK.LESSONS.map(l=>l.id));const K=new Map();
const add=(arr,id)=>arr.forEach(k=>{if(!K.has(k))K.set(k,id)});
for(const id of (ids.length?ids:all)){let n0=K.size;
 for(const st of ['formal','stations']){await p.evaluate(s=>localStorage.setItem('elib-style',s),st);await p.goto(url+'?style='+st+'#'+id);await p.waitForTimeout(700);
  const tabs=await p.$$eval('.ltabs button',bs=>bs.map(b=>b.dataset.tab));
  for(const t of (tabs.length?tabs:['theory'])){if(st==='stations'&&t!=='theory')continue;if(tabs.length){await p.click(`.ltabs button[data-tab="${t}"]`);await p.waitForTimeout(350)}
   if(t==='theory'){for(const d of await p.$$('details:not([open]) > summary')){try{await d.click()}catch(e){}}
     await p.evaluate(()=>document.querySelectorAll('.bx-tgl input').forEach(i=>{if(!i.checked)i.click()}));await p.waitForTimeout(200)}
   const grab=async()=>add(await p.evaluate(()=>{ENTRK.tidy(document.getElementById('view'));return ENTRK.cands(document.getElementById('view'),true).map(x=>x[1])}),id);
   await grab();
   if(t==='lab'||t==='quiz'||t==='act'||t==='examples'){const bs=await p.$$('#tab-body button:not(.say):not(.tr-btn), #tab-body select');const h0=await p.evaluate(()=>location.hash);
     for(const x of bs.slice(0,80)){if(await p.evaluate(()=>location.hash)!==h0)break;try{if(await x.evaluate(e=>e.tagName==='SELECT'))await x.selectOption({index:1});else await x.click({timeout:300});await p.waitForTimeout(60)}catch(e){}if(Math.random()<.25)await grab()}
     await grab()}
  }
  /* «شاهد الفكرة»: كل الجمل من الإعدادات */
  add(await p.evaluate(()=>{const N=ENTRK.norm,o=[];(window.__vxc||[]).forEach(c=>(c.items||[]).forEach(x=>{['A','B'].forEach(k=>{if(x[k]&&x[k].t)o.push(N(x[k].t.map(z=>z[1]).join(' ')))});(x.qa||[]).forEach(([q,a])=>{q&&o.push(N(q));a&&o.push(N(a))});if(x.cue)o.push(N(x.cue[0]))}));window.__vxc=[];return o.filter(t=>/[A-Za-z]/.test(t)&&!/[؀-ۿ]/.test(t)&&/\s/.test(t))}),id);
 }
 console.log(id,K.size-n0)}
const out={};K.forEach((id,k)=>{(out[id]=out[id]||[]).push(k)});fs.writeFileSync('/home/claude/tr/'+C+'.keys.json',JSON.stringify(out,null,1));
console.log('TOTAL',K.size,errs.length?'ERRORS '+[...new Set(errs)].slice(0,5).join(' | '):'');await b.close()})();

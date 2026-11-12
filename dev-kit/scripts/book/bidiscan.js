// يمر على كل الدروس وكل التبويبات بالأسلوبين ويبحث عن أرقام مع وحدات/إشارات غير مثبتة الاتجاه
const {chromium}=require('playwright');const path=require('path');
(async()=>{const c=process.argv[2];const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
const url='file://'+path.resolve('../lib/courses/'+c+'/index.html');const found=new Map();let wrapped=[];
for(const st of ['formal','stations']){await p.goto(url);await p.evaluate(s=>localStorage.setItem('elib-style',s),st);await p.reload();await p.waitForTimeout(400);
 const ids=await p.evaluate(()=>PLCBOOK.LESSONS.map(l=>l.id));
 for(const id of ids){await p.evaluate(id=>location.hash=id,id);await p.waitForTimeout(250);
  const tabs=await p.$$eval('.ltabs button',bs=>bs.map(b=>b.dataset.tab));
  for(const t of tabs){if(st==='stations'&&t!=='theory')continue;await p.click(`.ltabs button[data-tab="${t}"]`);await p.waitForTimeout(220);
   if(t==='examples'){for(const bt of await p.$$('[data-all]'))await bt.click().catch(()=>{});await p.waitForTimeout(150)}
   const r=await p.evaluate(()=>{const SK='.ltr,.katex,svg,script,style,textarea,input,select,option,code,[dir="ltr"],[lang="en"],.en';const out=[],w=document.createTreeWalker(document.getElementById('view'),NodeFilter.SHOW_TEXT);
     while(w.nextNode()){const n=w.currentNode,pe=n.parentElement;if(!pe||pe.closest(SK))continue;if(getComputedStyle(pe).direction!=='rtl'||!/[\u0600-\u06FF]/.test(pe.textContent))continue;const v=n.nodeValue;
      const m=v.match(/(?:^|[^\d.])[−\-+]\s?\d|\d\s?(?:[A-Za-z°Ωµ%]|[×÷=\/]\s?\d)/);if(m&&!/[\\$]/.test(v))out.push(v.trim().slice(0,90))}
     const wr=[...document.querySelectorAll('#view .ltr')].map(e=>e.textContent).filter(t=>/[A-Za-z]{3,}.*[A-Za-z]{3,}/.test(t));return {out,wr}});
   r.out.forEach(s=>found.set(s,(found.get(s)||'')+' '+id+':'+t));wrapped.push(...r.wr)}}}
console.log(c,'remaining:',found.size);[...found].slice(0,40).forEach(([s,w])=>console.log(' -',s,'|',w.trim().split(' ').slice(0,3).join(' ')));
console.log('ltr spans with words (sample):',[...new Set(wrapped)].slice(0,25));console.log('errors',errs.slice(0,5));await b.close()})();

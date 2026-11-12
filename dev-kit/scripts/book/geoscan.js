const {chromium}=require('playwright');const path=require('path');
(async()=>{const c=process.argv[2];const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
const url='file://'+path.resolve('../lib/courses/'+c+'/index.html');const bad=new Map();let checked=0;
for(const st of ['formal','stations']){await p.goto(url);await p.evaluate(s=>localStorage.setItem('elib-style',s),st);await p.reload();await p.waitForTimeout(400);
 const ids=await p.evaluate(()=>PLCBOOK.LESSONS.map(l=>l.id));
 for(const id of ids){await p.evaluate(id=>location.hash=id,id);await p.waitForTimeout(250);
  const tabs=await p.$$eval('.ltabs button',bs=>bs.map(b=>b.dataset.tab));
  for(const t of tabs){if(st==='stations'&&t!=='theory')continue;await p.click(`.ltabs button[data-tab="${t}"]`);await p.waitForTimeout(220);
   if(t==='examples'){for(const bt of await p.$$('[data-all]'))await bt.click().catch(()=>{});await p.waitForTimeout(150)}
   const r=await p.evaluate(()=>{const out=[];let n=0;const w=document.createTreeWalker(document.getElementById('view'),NodeFilter.SHOW_TEXT);
    const rect=(nd,i)=>{const rg=document.createRange();rg.setStart(nd,i);rg.setEnd(nd,i+1);const rs=rg.getClientRects();return rs[0]};
    while(w.nextNode()){const nd=w.currentNode,pe=nd.parentElement;if(!pe||pe.closest('svg,.katex,script,style,option'))continue;const v=nd.nodeValue;
     const re=/(\d)( ?)([A-Za-z°Ω%])|([−\-])(\d)/g;let m;while((m=re.exec(v))){
      let i1,i2;if(m[1]){i1=m.index;i2=m.index+1+m[2].length}else{i1=m.index;i2=m.index+1}
      const a=rect(nd,i1),bb=rect(nd,i2);if(!a||!bb||a.width===0)continue;if(Math.abs(a.top-bb.top)>4)continue;n++;
      if(a.left>bb.left){const ctx=v.slice(Math.max(0,m.index-25),m.index+20).replace(/\s+/g,' ');if(!/[A-Za-z]{3}/.test(v.slice(Math.max(0,m.index-6),m.index)))out.push(ctx)}}}
    return {out,n}});
   checked+=r.n;r.out.forEach(s=>bad.set(s,(bad.get(s)||[]).concat(id+':'+t+':'+st)))}}}
console.log(c,'pairs checked',checked,'wrong',bad.size);[...bad].slice(0,40).forEach(([s,w])=>console.log(' -',JSON.stringify(s),'|',w.slice(0,2).join(' ')));await b.close()})();

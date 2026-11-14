// node clipscan.js <course> <style> <width> [fz]
const {chromium}=require('playwright');
(async()=>{const [course,style,w,fz]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:+w,height:900}});
await p.addInitScript(([s,fz])=>{localStorage.setItem('elib-style',s);localStorage.setItem('elib-lang','en');if(fz)localStorage.setItem('elib-fz',fz)},[style,fz||'']);
await p.goto(`file:///home/claude/lib/courses/${course}/index.html`);await p.waitForTimeout(400);
const ids=await p.evaluate(()=>[...document.querySelectorAll('a[href^="#u"]')].map(a=>a.getAttribute('href').slice(1)).filter((v,i,a)=>/^u\d+-l\d+$/.test(v)&&a.indexOf(v)===i));
for(const id of ids){await p.goto(`file:///home/claude/lib/courses/${course}/index.html#${id}`);await p.waitForTimeout(600);
 const tabs=await p.evaluate(()=>[...document.querySelectorAll('[data-tab]')].map(t=>t.dataset.tab));
 for(const tab of (tabs.length?tabs:[null])){
  if(tab){await p.evaluate(t=>{const e=document.querySelector(`[data-tab="${t}"]`);e&&e.click()},tab);await p.waitForTimeout(350)}
  const r=await p.evaluate(()=>{const out=[];
   [].forEach(svg=>{const vb=svg.viewBox&&svg.viewBox.baseVal;if(!vb||!vb.width)return;if(svg.getBoundingClientRect().width<5)return;
    svg.querySelectorAll('text').forEach(t=>{const txt=t.textContent.trim();if(!txt)return;let bb;try{bb=t.getBBox()}catch(e){return}
     let x=bb.x,y=bb.y;let m=t.getCTM&&t.getCTM(),sm=svg.getCTM();
     // map bbox corners through transform relative to svg
     try{const M=sm.inverse().multiply(m);const pts=[[bb.x,bb.y],[bb.x+bb.width,bb.y+bb.height]].map(([a,c])=>{const P=svg.createSVGPoint();P.x=a;P.y=c;return P.matrixTransform(M)});
      const x0=Math.min(pts[0].x,pts[1].x),x1=Math.max(pts[0].x,pts[1].x),y0=Math.min(pts[0].y,pts[1].y),y1=Math.max(pts[0].y,pts[1].y);
      const tol=1;if(x0<vb.x-tol||x1>vb.x+vb.width+tol||y0<vb.y-tol||y1>vb.y+vb.height+tol)out.push('SVG «'+txt.slice(0,30)+'» x'+x0.toFixed(0)+'..'+x1.toFixed(0)+' y'+y0.toFixed(0)+'..'+y1.toFixed(0)+' vb'+vb.width+'x'+vb.height)}catch(e){}})});
   document.querySelectorAll('main *').forEach(el=>{if(el.closest('svg,.katex,.tbx'))return;const cs=getComputedStyle(el);if(el.offsetParent===null)return;
    if(el.scrollWidth>el.clientWidth+2&&el.clientWidth>0&&!el.closest('pre,code,.tbx,.katex-display')&&/^(B|SPAN|LABEL|BUTTON|TD|TH|P|LI|DIV|H1|H2|H3|H4|FIGCAPTION)$/.test(el.tagName)&&cs.overflowX!=='auto'&&cs.overflowX!=='scroll')out.push('HTML spill <'+el.tagName.toLowerCase()+'.'+el.className+'> «'+el.textContent.trim().slice(0,30)+'»')});
   return [...new Set(out)]});
  if(r.length)console.log(id,tab||'',r.join(' || '))}}
console.log('done');await b.close()})();

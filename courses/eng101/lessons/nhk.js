/* أدوات الرسم المشتركة لمربعات «الفكرة» (نهج الشرح) — تُحمّل قبل nh<المقرر>.js */
(function(G){if(G.NHK&&G.VXA)return;
G.VXA=(()=>{const ink='#2c3a43';
const wheel=(cx,cy,r=24,nut='#f1b33c')=>`<g><circle cx="${cx}" cy="${cy}" r="${r}" fill="#1a1a1a"/><circle cx="${cx}" cy="${cy}" r="${r-4}" fill="none" stroke="#3a3a3a" stroke-width="2"/><path d="M${cx-r+5} ${cy} A${r-5} ${r-5} 0 0 1 ${cx} ${cy-r+5}" stroke="#e8c13a" stroke-width="2" fill="none" opacity=".8"/><circle cx="${cx}" cy="${cy}" r="${r*0.56}" fill="#c9d1d6"/>${[0,72,144,216,288].map(a=>`<line x1="${cx}" y1="${cy}" x2="${(cx+r*0.52*Math.cos(a*Math.PI/180)).toFixed(1)}" y2="${(cy+r*0.52*Math.sin(a*Math.PI/180)).toFixed(1)}" stroke="#7d878e" stroke-width="3"/>`).join('')}<circle cx="${cx}" cy="${cy}" r="${r*0.22}" fill="${nut}" stroke="${ink}" stroke-width="1.5"/></g>`;
/* سيارة سباق جانبية تتجه يميناً؛ الأرض y=0، العجلتان عند x=58 و 242 (نسبي) */
const raceCar=(o={})=>{const c=o.c||'#c4553f';return `<g transform="translate(${o.x||0},${o.y||0}) scale(${o.s||1})">
 <rect x="22" y="-18" width="262" height="7" rx="3" fill="#2b2b2b"/>
 <rect x="0" y="-92" width="46" height="9" rx="3" fill="${ink}"/><rect x="2" y="-80" width="40" height="6" rx="3" fill="${ink}"/><rect x="8" y="-92" width="9" height="62" rx="2" fill="${c}" stroke="${ink}" stroke-width="1.5"/>
 <path d="M18 -26 L22 -44 L70 -48 Q96 -50 108 -60 L124 -76 Q130 -84 142 -82 L150 -70 L198 -62 L262 -50 Q292 -44 306 -30 L306 -24 Z" fill="${c}" stroke="${ink}" stroke-width="2" stroke-linejoin="round"/>
 <path d="M30 -36 L120 -40 L262 -40 Q288 -36 300 -30" stroke="#fff" stroke-width="4" fill="none" opacity=".85"/>
 <path d="M126 -76 L134 -94 L150 -92 L146 -78Z" fill="${ink}"/>
 <ellipse cx="170" cy="-64" rx="22" ry="6" fill="#1e2a31"/>
 <circle cx="166" cy="-70" r="10" fill="#f1b33c" stroke="${ink}" stroke-width="1.5"/><rect x="167" y="-74" width="10" height="5" rx="2" fill="#1e2a31"/>
 <path d="M146 -66 Q166 -90 192 -64" stroke="${ink}" stroke-width="3.5" fill="none"/>
 <rect x="262" y="-16" width="54" height="6" rx="3" fill="${ink}"/><rect x="308" y="-26" width="8" height="18" rx="2" fill="${c}" stroke="${ink}" stroke-width="1.2"/>
 ${o.noWheels?'':wheel(58,-26)+wheel(242,-26)}${o.extra||''}</g>`};
/* عضو فريق الصيانة: بدلة وخوذة، يتجه يميناً (f=-1 يساراً)؛ الأرض y=0 */
const crew=(x,y,c='#2f6b8f',s=1,f=1,pose='')=>`<g transform="translate(${x},${y}) scale(${s*f},${s})">
 <rect x="-9" y="-30" width="8" height="30" rx="4" fill="${ink}"/><rect x="2" y="-30" width="8" height="30" rx="4" fill="${ink}"/>
 <rect x="-11" y="-64" width="22" height="38" rx="9" fill="${c}"/><rect x="-11" y="-44" width="22" height="5" fill="#fff" opacity=".7"/>
 ${pose==='reach'?`<path d="M2 -56 L22 -46" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`:`<path d="M0 -56 L8 -36" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`}
 <circle cx="0" cy="-74" r="11" fill="#e7ecef" stroke="${ink}" stroke-width="1.5"/><path d="M2 -78 h9 v7 h-9z" fill="#1e2a31"/></g>`;
const gun=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-46 -6 H-6 V6 H-46Z" fill="#f1b33c" stroke="${ink}" stroke-width="1.5"/><rect x="-6" y="-4" width="8" height="8" fill="#7d878e"/><path d="M-38 6 L-34 22 H-26 L-28 6Z" fill="${ink}"/><path d="M-46 0 Q-70 0 -72 30" stroke="#222" stroke-width="3" fill="none"/></g>`;
const jack=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M0 0 L46 -48" stroke="${ink}" stroke-width="6" stroke-linecap="round"/><rect x="40" y="-60" width="18" height="10" rx="4" fill="#2f6b8f"/><circle cx="6" cy="-4" r="6" fill="#222"/><rect x="-14" y="-14" width="20" height="8" rx="2" fill="#2f6b8f"/></g>`;
const nozzle=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-120 -120 Q-40 -110 -14 -12" stroke="#222" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="-22" y="-16" width="20" height="14" rx="3" fill="#9aa3aa" stroke="${ink}" stroke-width="1.5"/><rect x="-2" y="-12" width="8" height="6" fill="${ink}"/></g>`;

/* شاحنة جانبية تتجه يميناً: الأرض y=0، الطول L والارتفاع H بالبكسل */
const lorry=(x,y,L,H,c='#c4553f',o={})=>{const cab=Math.min(54,L*0.26),bx=L-cab-4;return `<g transform="translate(${x},${y})">
 <rect x="0" y="${-H}" width="${bx}" height="${H-16}" rx="4" fill="${c}" stroke="${ink}" stroke-width="2"/>
 <line x1="6" y1="${-H+10}" x2="${bx-6}" y2="${-H+10}" stroke="#fff" stroke-width="2" opacity=".5"/>
 <path d="M${bx+4} -16 V${-H*0.72} Q${bx+4} ${-H*0.8} ${bx+12} ${-H*0.8} H${L-14} L${L} ${-H*0.5} V-16Z" fill="#e8ecef" stroke="${ink}" stroke-width="2"/>
 <path d="M${L-16} ${-H*0.76} L${L-3} ${-H*0.52} H${bx+18} V${-H*0.76}Z" fill="#9fc3d8" stroke="${ink}" stroke-width="1.2"/>
 <rect x="-2" y="-18" width="${L+2}" height="6" rx="2" fill="#3a3a3a"/>
 ${wheel(L*0.16,-12,12)}${wheel(L*0.36,-12,12)}${wheel(L-cab*0.5,-12,12)}${o.lab?`<text x="${bx/2}" y="${-H/2+4}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="13" text-anchor="middle" fill="#fff">${o.lab}</text>`:''}</g>`};
/* شاحنة من الأمام: عرض W وارتفاع H */
const lorryFront=(cx,y,W,H,c='#c4553f')=>`<g transform="translate(${cx},${y})"><rect x="${-W/2}" y="${-H}" width="${W}" height="${H*0.55}" rx="4" fill="${c}" stroke="${ink}" stroke-width="2"/><rect x="${-W/2+4}" y="${-H*0.45}" width="${W-8}" height="${H*0.38}" rx="4" fill="#e8ecef" stroke="${ink}" stroke-width="2"/><rect x="${-W/2+10}" y="${-H*0.42}" width="${W-20}" height="${H*0.16}" rx="3" fill="#9fc3d8"/><rect x="${-W/2-2}" y="-12" width="${W+4}" height="8" rx="3" fill="#3a3a3a"/><rect x="${-W/2+2}" y="-6" width="12" height="6" fill="#1a1a1a"/><rect x="${W/2-14}" y="-6" width="12" height="6" fill="#1a1a1a"/></g>`;
const dimV=(x,y1,y2,t,c,side=1)=>`<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${c}" stroke-width="2.5"/><path d="M${x} ${y1} l-5 9 h10z M${x} ${y2} l-5 -9 h10z" fill="${c}"/><text x="${x+side*8}" y="${(y1+y2)/2+5}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="14" text-anchor="${side>0?'start':'end'}" fill="${c}">${t}</text>`;
const dimH=(x1,x2,y,t,c,up=1)=>`<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${c}" stroke-width="2.5"/><path d="M${x1} ${y} l9 -5 v10z M${x2} ${y} l-9 -5 v10z" fill="${c}"/><text x="${(x1+x2)/2}" y="${y-up*7+(up<0?12:0)}" font-family="IBM Plex Sans,Arial" font-weight="700" font-size="14" text-anchor="middle" fill="${c}">${t}</text>`;


return {ink,wheel,raceCar,crew,gun,jack,nozzle,lorry,lorryFront,dimV,dimH}})();
const E=t=>`<span class="en" lang="en" dir="ltr"${t.replace(/<[^>]+>/g,'').length<=18?' style="white-space:nowrap"':''}>${t}</span>`;
/* ---------- أدوات الرسم ---------- */
const ink='#3b4a54',grn='#1f8a5b',red='#c4553f',blu='#2f6b8f',yel='#f1b33c',gry='#9aa3aa',lgt='#dfe7ec',sand='#e9dcc3';
const F='font-family="IBM Plex Sans,Segoe UI,Arial,sans-serif"';
const svg=(h,b)=>`<svg viewBox="0 0 400 ${h}" role="img" aria-hidden="true">${b}</svg>`;
const tx=(x,y,t,o={})=>`<text x="${x}" y="${y}" ${F} font-size="${o.fs||14}" font-weight="${o.w||700}" text-anchor="${o.a||'middle'}" fill="${o.c||ink}"${o.op!=null?` opacity="${o.op}"`:''}>${t}</text>`;
const rc=(x,y,w,h,f,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx!=null?o.rx:6}" fill="${f}"${o.st?` stroke="${o.st}" stroke-width="${o.sw||2}"`:''}${o.op!=null?` opacity="${o.op}"`:''}${o.da?` stroke-dasharray="${o.da}"`:''}/>`;
const ci=(x,y,r,f,o={})=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"${o.st?` stroke="${o.st}" stroke-width="${o.sw||2}"`:''}${o.op!=null?` opacity="${o.op}"`:''}/>`;
const ln=(x1,y1,x2,y2,c=ink,w=3,o={})=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"${o.da?` stroke-dasharray="${o.da}"`:''}/>`;
const head=(x,y,a,c,s=9)=>`<path d="M${x} ${y} L${x-s*Math.cos(a-0.5)} ${y-s*Math.sin(a-0.5)} L${x-s*Math.cos(a+0.5)} ${y-s*Math.sin(a+0.5)}Z" fill="${c}"/>`;
const ar=(x1,y1,x2,y2,c=grn,w=3)=>ln(x1,y1,x2,y2,c,w)+head(x2,y2,Math.atan2(y2-y1,x2-x1),c);
const ar2=(x1,y1,x2,y2,c=yel,w=3)=>ln(x1,y1,x2,y2,c,w)+head(x2,y2,Math.atan2(y2-y1,x2-x1),c)+head(x1,y1,Math.atan2(y1-y2,x1-x2),c);
const man=(x,y,c=blu,s=1,op)=>`<g transform="translate(${x},${y}) scale(${s})"${op!=null?` opacity="${op}"`:''}><rect x="-9" y="-2" width="8" height="32" rx="4" fill="#33424c"/><rect x="1" y="-2" width="8" height="32" rx="4" fill="#33424c"/><rect x="-12" y="-36" width="24" height="38" rx="10" fill="${c}"/><path d="M-11 -30 L-17 -6 M11 -30 L17 -6" stroke="${c}" stroke-width="7" stroke-linecap="round"/><circle cx="-17" cy="-5" r="3.5" fill="#e3b892"/><circle cx="17" cy="-5" r="3.5" fill="#e3b892"/><circle cx="0" cy="-46" r="11" fill="#e3b892" stroke="#33424c" stroke-width="1.2"/><path d="M-11 -48 Q-10 -60 0 -59 Q11 -60 11 -48 Q6 -54 0 -53 Q-6 -54 -11 -48Z" fill="#3b2a20"/><circle cx="-4" cy="-46" r="1.4" fill="#33424c"/><circle cx="4" cy="-46" r="1.4" fill="#33424c"/></g>`;
const wh=(x,y,r=13)=>ci(x,y,r,'#222')+ci(x,y,r*.4,gry);
const lorry=(x,g,L,H,c=grn,lab)=>G.VXA.lorry(x,g,L,H,c,{lab});
const car=(x,g,L,H,c=blu,lab)=>`<path d="M${x} ${g-12} V${g-H*0.55} Q${x+L*0.2} ${g-H} ${x+L*0.4} ${g-H} H${x+L*0.66} Q${x+L*0.85} ${g-H} ${x+L} ${g-H*0.45} V${g-12}Z" fill="${c}"/>${wh(x+L*0.22,g-10,11)}${wh(x+L*0.78,g-10,11)}${lab?tx(x+L/2,g-H*0.45,lab,{c:'#fff',fs:12}):''}`;
const grd=(y,w=400)=>ln(0,y,w,y,gry,4);
const ok=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})">${ci(0,0,16,grn)}<path d="M-7 0 L-2 6 L8 -6" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
const no=(x,y,s=1)=>`<g transform="translate(${x},${y}) scale(${s})">${ci(0,0,16,red)}<path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>`;
const bub=(x,y,w,h,t,o={})=>`${rc(x,y,w,h,o.f||'#fff',{st:o.st||ink,sw:1.5,rx:12})}${tx(x+w/2,y+h/2+5,t,{fs:o.fs||13,c:o.c||ink})}`;
/* قطع الجملة: 'a:The lorry|x:is|k:higher' ← [[مفتاح,نص,لون]] */
const S=str=>{const seen={};return str.split('|').map(p=>{const m=p.match(/^([aknxq]):([\s\S]*)$/);const c=m?m[1]:'q',t=m?m[2]:p;const k=c+t.replace(/<[^>]+>/g,'').toLowerCase();seen[k]=(seen[k]||0)+1;return [k+(seen[k]>1?seen[k]:''),t,c]})};
const R=t=>`<b style="color:#c4553f">${t}</b>`;
const cap=t=>t.charAt(0).toUpperCase()+t.slice(1);
G.NHK={svg,tx,rc,ci,ln,ar,ar2,man,wh,lorry,car,grd,ok,no,bub,S,R,cap,E,C:{ink,grn,red,blu,yel,gry,lgt,sand}};
G.NHK.FM=(...p)=>G.ENK.fm(...p);G.NHK.head=head;G.NHK.F=F;
})(window);

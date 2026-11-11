/* الوحدة الثالثة — الدروس 3.5 (التيار الكهربائي) و 3.6 (قانون أوم وتوصيل المقاومات) و 3.7 (المكثف — إضافة من خارج الكتاب) */
(function(B){
const K=window.PHK,{lt,fm,tx,C,art,T,TL,arrowS,facts,seg,segBind,sl,plot}=K;
const R=String.raw;const E=1.6e-19;
const ADD='<b>إضافة من خارج الكتاب:</b> ';

/* =================== الدرس 3.5 — التيار الكهربائي =================== */
function wireSVG(t,I,dir,ac){const W=560,H=150;let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="سلك تتحرك فيه الشحنات"><rect x="20" y="45" width="520" height="56" rx="28" fill="var(--surface-2)" stroke="var(--fg)" stroke-width="2"/><path d="M280 36V110" stroke="var(--live)" stroke-width="2.4" stroke-dasharray="5 4"/><text x="280" y="128" text-anchor="middle" font-size="12" fill="var(--live)" direction="rtl">مقطع السلك</text>`;
 const v=ac?Math.sin(2*Math.PI*0.5*t):1,shift=(ac?-Math.cos(2*Math.PI*0.5*t)/Math.PI*1.2:t*0.25*Math.min(1,I/2+0.2))*1;
 for(let i=0;i<14;i++){const x=40+((i/14+shift)%1+1)%1*480;s+=`<circle cx="${x.toFixed(1)}" cy="73" r="8" fill="var(--blue)"/><text x="${x.toFixed(1)}" y="78" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">−</text>`}
 const e=v>=0?1:-1;/* الإلكترونات تتحرك لليمين عندما e=1 */const conv=-e;
 if(Math.abs(v)>0.15){const d=dir==='e'?e:conv;s+=arrowS(280-d*60,22,280+d*60,22,dir==='e'?'var(--blue)':'var(--stop)',3,10)+`<text x="${280+d*80}" y="27" text-anchor="${d>0?'start':'end'}" font-size="12" font-weight="700" fill="var(--fg)" direction="rtl">${dir==='e'?'حركة الإلكترونات':'التيار الاصطلاحي'}</text>`}
 return s+`<text x="34" y="80" font-size="16" font-weight="800" fill="var(--stop)">${ac?'':'+'}</text><text x="526" y="80" text-anchor="end" font-size="16" font-weight="800" fill="var(--blue)">${ac?'':'−'}</text></svg>`}
function lab35(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">الشحنات في سلك</h3><p class="sub">مبني على تعريف التيار <span class="ltr">I = Q / t</span> وأنواعه ص 48، ومثال <span class="ltr">2 A</span> خلال <span class="ltr">3 s</span>.</p>
  ${seg('ty',[['dc','تيار مستمر DC'],['ac','تيار متردد AC']],'dc')}<div class="pk-sl"><span>اتجاه السهم</span><div class="pk-row" style="margin-top:6px"><button type="button" class="pk-b" data-dr="c" aria-pressed="true">التيار الاصطلاحي (من + إلى −)</button><button type="button" class="pk-b" data-dr="e" aria-pressed="false">حركة الإلكترونات (من − إلى +)</button></div></div>
  ${sl('ci','شدة التيار I (A)',0.5,5,0.5,2)}<div class="ph-row"><button class="btn pri" id="cgo">ابدأ العدّ</button><button class="btn" id="crs">صفّر</button></div><div id="cres"></div></div>
 <div class="c7 panel"><div class="pk-pic" id="cpic" style="max-width:560px"></div><div class="pk-pic" id="cplot" style="max-width:520px"></div><div class="pk-fb" id="cnote"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اجعل التيار <span class="ltr">2 A</span> وعُدّ حتى <span class="ltr">3 s</span>: الشحنة <span class="ltr">6 C</span> وعدد الإلكترونات <span class="ltr">3.75 × 10¹⁹</span> (مثال ص 48).</li>
  <li>بدّل اتجاه السهم: الإلكترونات تتحرك عكس التيار الاصطلاحي.</li><li>اختر التيار المتردد: ماذا يحدث لاتجاه حركة الشحنات؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let ty='dc',dr='c',t=0,cnt=0,run=false;
 const draw=()=>{const I=+$('#ci').value;$('#ci-v').textContent=I+' A';$('#cpic').innerHTML=wireSVG(t,I,dr,ty==='ac');
  const pts=[];for(let u=0;u<=6.001;u+=0.05)pts.push([u,ty==='ac'?I*Math.sin(2*Math.PI*0.5*u):I]);
  $('#cplot').innerHTML=plot({w:520,h:180,xr:[0,6],yr:[-5.5,5.5],xl:'الزمن (s)',yl:'التيار (A)',series:[{pts,col:'var(--stop)'}],dots:[[t%6,ty==='ac'?I*Math.sin(2*Math.PI*0.5*t):I,'var(--live)']]});
  const Q=ty==='dc'?I*cnt:0;$('#cres').innerHTML=facts([['الزمن t',fm(cnt)+' s'],['الشحنة المارة Q = I t',ty==='dc'?fm(Q)+' C':'—','hi'],['عدد الإلكترونات N = Q / e',ty==='dc'&&Q>0?fm(Q/E):'—']]);
  $('#cnote').innerHTML=ty==='ac'?'في التيار المتردد تتحرك الشحنات ذهاباً وإياباً، ويتغير اتجاه التيار باستمرار (في شبكة السعودية 60 مرة في الثانية؛ أبطأناه هنا للتوضيح).':dr==='e'?'الحقيبة تصف التيار المستمر بأنه يتدفق «من القطب السالب إلى الموجب»، وهذا اتجاه حركة الإلكترونات.':'التيار الاصطلاحي يُرسم من الموجب إلى السالب خارج المصدر، وهو المستخدم في رسم الدوائر.'};
 K.loopOn(el,dt=>{t+=dt;if(run){cnt+=dt;if(cnt>=3&&ty==='dc'){cnt=3;run=false;$('#cgo').textContent='ابدأ العدّ'}}draw()});
 $('#cgo').onclick=()=>{if(cnt>=3)cnt=0;run=!run;$('#cgo').textContent=run?'إيقاف':'تابع'};$('#crs').onclick=()=>{cnt=0;run=false;$('#cgo').textContent='ابدأ العدّ'};
 segBind(el,'ty',v=>{ty=v});$('#ci').addEventListener('input',draw);[...el.querySelectorAll('[data-dr]')].forEach(b=>b.onclick=()=>{dr=b.dataset.dr;el.querySelectorAll('[data-dr]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))});
}
B.lesson({
 id:'u3-l5',unit:3,order:5,pages:'48–49',
 title:'التيار الكهربائي',
 summary:'تعريف التيار الكهربائي I = Q / t ووحدته الأمبير، ونوعا التيار المستمر DC والمتردد AC، واتجاه التيار، مع مثال وثلاثة تدريبات.',
 theory:[
  {h:'التيار الكهربائي',ref:'ص 48',html:R`<p>يعرف التيار الكهربائي على أنه حركة الشحنات الكهربائية خلال فترة معينة من الزمن.</p>$$I=\frac{Q}{t}$$<p>وحدة التيار في النظام الدولي أمبير \(A\) \((A=C/s)\).</p>`},
  {h:'أنواع التيار الكهربائي',ref:'ص 48',html:'<ol><li><b>التيار المستمر:</b> هو التيار الكهربائي الذي يتدفق بشكل ثابت من القطب السالب إلى الموجب من مصدر توليد التيار الكهربائي، مثل التيار المتدفق من البطارية الجافة، ويكون رمزه <span class="ltr">DC</span>.</li><li><b>التيار المتردد:</b> هو التيار الذي يتدفق بشكل متردد من السالب إلى الموجب مرة ومن الموجب إلى السالب مرة أخرى من مصدر توليد الطاقة الكهربائية، مثل التيار المتدفق من محطة توليد الكهرباء، ويكون رمزه <span class="ltr">AC</span>.</li></ol>'},
  {note:'<b>توضيح للمتدرب — ليس من الكتاب:</b> للتيار اتجاهان يُذكران في الكتب: <b>اتجاه حركة الإلكترونات</b> من القطب السالب إلى الموجب خارج المصدر (وهو ما تصفه الحقيبة)، و<b>التيار الاصطلاحي</b> من الموجب إلى السالب، وهو المعتمد في رسم الدوائر وفي قانون أوم ودروس الكهرباء التالية. الاثنان يصفان الحركة نفسها؛ لأن الإلكترونات سالبة، فحركتها في اتجاه تعادل حركة شحنات موجبة في الاتجاه المعاكس. وفي المختبر مفتاح يعرض الاتجاهين، والظاهر أولاً التيار الاصطلاحي.'},
  {h:'مثال',ref:'ص 48',html:'<p>إذا كانت شدة التيار الكهربائي <span class="ltr">2 A</span> خلال زمن قدره <span class="ltr">3 s</span> فكم مقدار الشحنة الكهربائية التي مرت؟ وكم عدد الإلكترونات التي عبرت؟</p>'},
  {h:'تدريبات',ref:'ص 49',html:R`<ol><li>إذا كانت كمية الكهرباء المارة في مقطع تساوي \(5\times10^{-12}\ \mathrm{C}\) خلال <span class="ltr">3</span> ثوانٍ، احسب شدة التيار الكهربائي.</li><li>إذا كانت كمية الكهرباء المارة في مقطع تساوي \(7\ \mu\mathrm{C}\) خلال دقيقة، احسب شدة التيار الكهربائي.</li><li>إذا كان عدد الإلكترونات المار في دائرة كهربائية يساوي مليون إلكترون خلال <span class="ltr">5</span> ثوانٍ، احسب شدة التيار الكهربائي.</li></ol>`}
 ],
 stations:[
  {intro:true},
  {st:1,short:'تعريف التيار',title:'التيار الكهربائي',q:'إذا مرت شحنة أكبر في الزمن نفسه، هل يكون التيار أكبر؟',ref:'ص 48',
   art:art(`<rect x="30" y="130" width="300" height="60" rx="30" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${[...Array(7)].map((_,i)=>`<circle cx="${60+i*40}" cy="160" r="11" fill="${C.blue}"/>`).join('')}
    <g data-tip="مقطع السلك: نعدّ الشحنة ⟦Q⟧ التي تعبره خلال الزمن ⟦t⟧."><path d="M180 112V208" stroke="${C.red}" stroke-width="4" stroke-dasharray="6 4"/></g>
    <g data-tip="⟦I = Q / t⟧ ووحدته الأمبير ⟦A = C/s⟧."><rect x="90" y="40" width="180" height="50" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,72,'I = Q / t',{fs:20,w:800})}</g>`,'شحنات تعبر مقطع سلك'),
   cap:'التيار: كم شحنة تعبر المقطع في الثانية. مرّر المؤشر على الأجزاء (أو المسها في الجوال).',
   side:[{book:'التيار الكهربائي: يعرف التيار الكهربائي على أنه حركة الشحنات الكهربائية خلال فترة معينة من الزمن. I = Q/t. وحدة التيار في النظام الدولي أمبير A (A = C/S).',ref:'ص 48'}],
   body:[{widget:(el,B)=>K.calc(el,B,{intro:'غيّر الشحنة والزمن:',ins:[{k:'q',l:'الشحنة Q',u:'C',min:1,max:20,step:1,v:6},{k:'t',l:'الزمن t',u:'s',min:1,max:10,step:1,v:3}],calc:s=>({facts:[['I = Q / t',fm(s.q/s.t)+' A','hi']]})}),title:'مختبر مصغّر: احسب التيار'}]},
  {st:2,short:'DC و AC',title:'أنواع التيار الكهربائي',q:'لماذا يكتب على شاحن الجوال AC في المدخل و DC في المخرج؟',ref:'ص 48',
   art:art(`<g data-tip="التيار المستمر ⟦DC⟧: ثابت الاتجاه، مثل البطارية."><rect x="40" y="70" width="280" height="90" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/><path d="M60 140H300" stroke="${C.ink}" stroke-width="1.5"/><path d="M60 100H300" stroke="${C.red}" stroke-width="4"/>${TL(290,90,'DC',{fs:16,w:800,a:'end'})}</g>
    <g data-tip="التيار المتردد ⟦AC⟧: يتغير اتجاهه ذهاباً وإياباً، مثل كهرباء المنزل."><rect x="40" y="190" width="280" height="100" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/><path d="M60 240H300" stroke="${C.ink}" stroke-width="1.5"/><path d="${[...Array(49)].map((_,i)=>(i?'L':'M')+(60+i*5)+' '+(240-30*Math.sin(i*5/240*4*Math.PI)).toFixed(1)).join('')}" fill="none" stroke="${C.red}" stroke-width="4"/>${TL(290,210,'AC',{fs:16,w:800,a:'end'})}</g>`,'منحنى التيار المستمر والمتردد'),
   cap:'المستمر ثابت الاتجاه، والمتردد يتبدل. مرّر المؤشر على كل منحنى (أو المسه في الجوال).',
   side:[{book:'أنواع التيار الكهربائي: 1- التيار المستمر: هو التيار الكهربائي الذي يتدفق بشكل ثابت من القطب السالب إلى الموجب من مصدر توليد التيار الكهربائي مثل التيار المتدفق من البطارية الجافة ويكون رمزه DC. 2- التيار المتردد: هو التيار الذي يتدفق بشكل متردد من السالب إلى الموجب مره ومن الموجب إلى السالب مره أخرى من مصدر توليد الطاقة الكهربائية مثل التيار المتدفق من محطة توليد الكهرباء ويكون رمزه AC.',ref:'ص 48'}],
   body:[{tip:'الحقيبة تصف اتجاه حركة الإلكترونات (من السالب إلى الموجب). أما في رسم الدوائر فنستخدم التيار الاصطلاحي من الموجب إلى السالب. الاثنان صحيحان ويصفان الحركة نفسها.'},
    {add:'كهرباء المنازل في السعودية متردد جهده 220 فولت وتردده 60 هيرتز، والشاحن يحوّله إلى مستمر منخفض لشحن بطارية الجوال.',title:'من الواقع'},
    {widget:(el,B)=>K.sort(el,B,{intro:'مستمر أم متردد؟',cats:['DC','AC'],items:[['بطارية جافة',0,'من أمثلة الكتاب على المستمر.'],['محطة توليد الكهرباء',1,'من أمثلة الكتاب على المتردد.'],['بطارية السيارة',0,'بطارية: مستمر.'],['مقبس الكهرباء في المنزل',1,'تصل من المحطة: متردد.']]}),title:'مختبر مصغّر: صنّف التيار'}]},
  {st:3,short:'المثال',title:'مثال: 2 A خلال 3 s',q:'كم إلكتروناً يعبر السلك في 3 ثوانٍ عندما يكون التيار 2 A؟ آلاف؟ مليارات؟',ref:'ص 48',
   art:art(`<g data-tip="⟦Q = I t = 2 × 3 = 6 C⟧."><rect x="60" y="70" width="240" height="60" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,108,'Q = 2 × 3 = 6 C',{fs:17,w:800})}</g><g data-tip="⟦N = Q / e = 6 / 1.6 × 10⁻¹⁹ = 3.75 × 10¹⁹⟧ إلكتروناً."><rect x="40" y="170" width="280" height="70" rx="12" fill="${C.grn}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,212,'N = 3.75 × 10¹⁹',{fs:18,w:800,c:'#fff'})}</g>${arrowS(180,134,180,164,C.ink,3)}`,'حل المثال: الشحنة ثم عدد الإلكترونات'),
   cap:'خطوتا الحل. مرّر المؤشر على البطاقتين (أو المسهما في الجوال).',
   side:[{book:'إذا كانت شدة التيار الكهربائي 2A خلال زمن قدره 3s فكم مقدار الشحنة الكهربائية التي مرت؟ وكم عدد الإلكترونات التي عبرت؟',ref:'ص 48'}],
   body:[{predict:{q:'عدد الإلكترونات التي عبرت:',opts:[['<span class="ltr">6</span>',false,'6 هي الشحنة بالكولوم لا عدد الإلكترونات.'],['<span class="ltr">3.75 × 10¹⁹</span>',true,R`\(N=\dfrac{Q}{e}=\dfrac{6}{1.6\times10^{-19}}\).`],['<span class="ltr">9.6 × 10⁻¹⁹</span>',false,'ضربت بدل أن تقسم.']]}}]},
  {st:4,short:'التدريبات',title:'تدريبات على التيار',q:'7 µC خلال دقيقة: ما أول خطوتين قبل التعويض؟',ref:'ص 49',
   art:art(`${['5 × 10⁻¹² C , 3 s','7 µC , 1 min','10⁶ e⁻ , 5 s'].map((s_,i)=>`<g data-tip="${['تدريب 1: نقسم الشحنة على الزمن مباشرة.','تدريب 2: نحوّل ⟦7 µC = 7 × 10⁻⁶ C⟧ و ⟦1 min = 60 s⟧.','تدريب 3: نجد الشحنة أولاً ⟦Q = N e⟧ ثم نقسم على الزمن.'][i]}"><rect x="40" y="${70+i*76}" width="280" height="56" rx="12" fill="${[C.paper,C.yel,C.grn][i]}" stroke="${C.ink}" stroke-width="2.4"/>${TL(180,104+i*76,s_,{fs:16,w:800,c:i===2?'#fff':C.ink})}</g>`).join('')}`,'معطيات التدريبات الثلاثة'),
   cap:'معطيات التدريبات. مرّر المؤشر على كل منها (أو المسه في الجوال).',
   side:[{book:'تدريبات: 1- إذا كانت كمية الكهرباء المارة في مقطع تساوي 5x10^-12 C خلال 3 ثواني، احسب شدة التيار الكهربائي؟ 2- إذا كانت كمية الكهرباء المارة في مقطع تساوي 7 µC خلال دقيقة، احسب شدة التيار الكهربائي؟ 3- إذا كانت عدد الإلكترونات المار في دائرة كهربائية تساوي مليون إلكترون خلال 5 ثواني، احسب شدة التيار الكهربائي؟',ref:'ص 49'}],
   body:[{widget:(el,B)=>K.num(el,B,{intro:'حل التدريبات (يمكنك كتابة الأُسّ هكذا: <span class="ltr">1.67e-12</span>):',items:[{q:'تدريب 1',ans:5e-12/3,unit:'A',why:R`\(I=\dfrac{5\times10^{-12}}{3}=1.67\times10^{-12}\ \mathrm{A}\).`},{q:'تدريب 2',ans:7e-6/60,unit:'A',why:R`\(I=\dfrac{7\times10^{-6}}{60}=1.17\times10^{-7}\ \mathrm{A}\).`},{q:'تدريب 3',ans:1e6*E/5,unit:'A',why:R`\(Q=10^{6}\times1.6\times10^{-19}=1.6\times10^{-13}\ \mathrm{C}\)، \(I=\dfrac{1.6\times10^{-13}}{5}=3.2\times10^{-14}\ \mathrm{A}\).`}]}),title:'مختبر مصغّر: احسب التيار'}]},
  {recap:['التيار حركة الشحنات خلال زمن: I = Q / t، ووحدته الأمبير A = C/s.','التيار المستمر DC ثابت الاتجاه (البطارية)، والمتردد AC يتبدل اتجاهه (محطة التوليد).','الإلكترونات تتحرك من السالب إلى الموجب، والتيار الاصطلاحي من الموجب إلى السالب.','عدد الإلكترونات N = Q / e.']}
 ],
 lab:lab35,
 examples:[
  {title:'مثال: الشحنة وعدد الإلكترونات',ref:'ص 48',q:'<p>إذا كانت شدة التيار الكهربائي <span class="ltr">2 A</span> خلال زمن قدره <span class="ltr">3 s</span> فكم مقدار الشحنة الكهربائية التي مرت؟ وكم عدد الإلكترونات التي عبرت؟</p>',given:[{id:'I',label:'التيار',sym:'I',unit:'A',value:2},{id:'t',label:'الزمن',sym:'t',unit:'s',value:3}],solve:g=>[{t:'الشحنة من \\(I=Q/t\\):',f:R`Q=I\,t=${g.I}\times${g.t}`,v:g.I*g.t,unit:'C',dp:2},{t:'عدد الإلكترونات من \\(Q=Ne\\):',f:R`N=\dfrac{Q}{e}=\dfrac{${g.I*g.t}}{1.6\times10^{-19}}`,v:K.ev(g.I*g.t/E),unit:'إلكترون',dp:2,final:true}]},
  {title:'تدريب 1',ref:'ص 49',q:R`<p>كمية الكهرباء المارة في مقطع \(5\times10^{-12}\ \mathrm{C}\) خلال <span class="ltr">3</span> ثوانٍ. احسب شدة التيار.</p>`,given:[{id:'q',label:'الشحنة (× 10⁻¹² C)',unit:'',value:5},{id:'t',label:'الزمن',sym:'t',unit:'s',value:3}],solve:g=>[{t:'نعوض:',f:R`I=\dfrac{${g.q}\times10^{-12}}{${g.t}}`,v:K.ev(g.q*1e-12/g.t),unit:'A',dp:2,final:true}]},
  {title:'تدريب 2',ref:'ص 49',q:R`<p>كمية الكهرباء المارة في مقطع \(7\ \mu\mathrm{C}\) خلال دقيقة. احسب شدة التيار.</p>`,given:[{id:'q',label:'الشحنة',sym:'Q',unit:'µC',value:7},{id:'t',label:'الزمن',sym:'t',unit:'min',value:1}],solve:g=>[{t:'نحوّل: \\(7\\ \\mu\\mathrm{C}='+g.q+'\\times10^{-6}\\ \\mathrm{C}\\) والزمن إلى الثواني:',f:R`t=${g.t}\times60`,v:g.t*60,unit:'s',dp:2},{t:'التيار:',f:R`I=\dfrac{${g.q}\times10^{-6}}{${g.t*60}}`,v:K.ev(g.q*1e-6/(g.t*60)),unit:'A',dp:2,final:true}]},
  {title:'تدريب 3',ref:'ص 49',q:'<p>عدد الإلكترونات المار في دائرة يساوي مليون إلكترون خلال <span class="ltr">5</span> ثوانٍ. احسب شدة التيار.</p>',given:[{id:'n',label:'عدد الإلكترونات (بالمليون)',unit:'× 10⁶',value:1},{id:'t',label:'الزمن',sym:'t',unit:'s',value:5}],solve:g=>[{t:'الشحنة أولاً:',f:R`Q=N\,e=${g.n}\times10^{6}\times1.6\times10^{-19}`,v:K.ev(g.n*1e6*E),unit:'C',dp:2},{t:'التيار:',f:R`I=\dfrac{Q}{t}`,v:K.ev(g.n*1e6*E/g.t),unit:'A',dp:2,final:true}]}
 ],
 quiz:[
  {q:'التيار الكهربائي هو:',o:['كمية الشحنة','حركة الشحنات الكهربائية خلال فترة من الزمن','فرق الجهد'],c:1,e:'ص 48.'},
  {q:'وحدة التيار:',o:['الفولت','الأمبير A = C/s','الأوم'],c:1,e:'ص 48.'},
  {q:'التيار المتدفق من البطارية الجافة:',o:['متردد AC','مستمر DC'],c:1,e:'ص 48.'},
  {q:'التيار المتدفق من محطة توليد الكهرباء:',o:['متردد AC','مستمر DC'],c:0,e:'ص 48.'},
  {q:'تيار 2 A لمدة 3 s. الشحنة المارة:',o:['0.67 C','6 C','5 C'],c:1,e:'Q = I t.'},
  {q:'التيار الاصطلاحي في الدائرة خارج المصدر يتجه:',o:['من الموجب إلى السالب','من السالب إلى الموجب'],c:0,e:'وهو عكس حركة الإلكترونات (توضيح من خارج الكتاب).'}
 ]
});

/* =================== الدرس 3.6 — قانون أوم وتوصيل المقاومات =================== */
const zig=(x1,y,x2,lbl,val,col)=>{const n=6,w=(x2-x1)/n;let d=`M${x1} ${y}`;for(let i=0;i<n;i++)d+=`L${(x1+w*(i+0.25)).toFixed(1)} ${y-9}L${(x1+w*(i+0.75)).toFixed(1)} ${y+9}`;d+=`L${x2} ${y}`;
 return `<path d="${d}" fill="none" stroke="${col||'var(--fg)'}" stroke-width="2.4" stroke-linejoin="round"/><text x="${(x1+x2)/2}" y="${y-16}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--fg)" font-family="var(--mono)">${lbl}=${val}Ω</text>`};
function circuitSVG(mode,Rs,V){const W=560,H=280;let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="دائرة ${mode==='s'?'توالٍ':'توازٍ'}">`;
 s+=`<path d="M60 240H250M310 240H500V60M60 240V60" fill="none" stroke="var(--fg)" stroke-width="2.4"/><path d="M262 222V258M278 230V250" stroke="var(--fg)" stroke-width="3"/><path d="M250 240h12M278 240h32" stroke="var(--fg)" stroke-width="2.4"/><text x="270" y="275" text-anchor="middle" font-size="13" font-weight="700" fill="var(--fg)" font-family="var(--mono)">${typeof V==="number"?V+" V":"V"}</text><text x="254" y="218" font-size="13" font-weight="800" fill="var(--stop)">+</text>`;
 const rs=Rs.filter(r=>r>0);
 if(mode==='s'){const w=440/rs.length;let x=60;rs.forEach((r,i)=>{const x2=x+w;s+=`<path d="M${x} 60H${x+w*0.15}M${x2-w*0.15} 60H${x2}" stroke="var(--fg)" stroke-width="2.4"/>`+zig(x+w*0.15,60,x2-w*0.15,'R'+(i+1),r);x=x2})}
 else{const ys=rs.map((_,i)=>60+i*(140/Math.max(1,rs.length-1||1)));s+=`<path d="M60 60V${ys[ys.length-1]}M500 60V${ys[ys.length-1]}" stroke="var(--fg)" stroke-width="2.4"/>`;rs.forEach((r,i)=>{const y=rs.length===1?60:60+i*65;s+=`<path d="M60 ${y}H200M360 ${y}H500" stroke="var(--fg)" stroke-width="2.4"/>`+zig(200,y,360,'R'+(i+1),r)})}
 return s+'</svg>'}
function lab36(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">صمّم الدائرة</h3><p class="sub">مبني على «ربط المقاومات» ص 51 وتدريبي ص 51–52 (القيم الافتراضية من تدريب 1). قوانين المقاومة المكافئة إضافة من خارج الكتاب.</p>
  ${seg('md',[['s','توالٍ'],['p','توازٍ']],'s')}${sl('v','جهد المصدر V (v)',1,40,1,18)}${sl('r1','R1 (Ω)',1,20,1,3)}${sl('r2','R2 (Ω)',1,20,1,6)}${sl('r3','R3 (Ω) — صفر يعني غير موجودة',0,20,1,0)}</div>
 <div class="c7 panel"><div class="pk-pic" id="dpic" style="max-width:560px"></div><div class="ph-tw" id="dtab"></div><div id="dres"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>بالقيم الافتراضية (توالٍ، <span class="ltr">3 Ω</span> و <span class="ltr">6 Ω</span> و <span class="ltr">18 v</span>): المقاومة المكافئة <span class="ltr">9 Ω</span> والتيار <span class="ltr">2 A</span> و <span class="ltr">V1 = 6 v</span> و <span class="ltr">V2 = 12 v</span> (تدريب 1).</li>
  <li>اختر «توازٍ» واجعل <span class="ltr">R1 = 8</span> و <span class="ltr">R2 = 10</span> و <span class="ltr">V = 30</span> (تدريب 2): لاحظ أن <span class="ltr">I = I1 + I2</span>.</li>
  <li>أضف مقاومة ثالثة في التوالي ثم في التوازي: ماذا يحدث للتيار الكلي في كل حالة؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let md='s';
 const draw=()=>{const V=+$('#v').value,R_=[+$('#r1').value,+$('#r2').value,+$('#r3').value];['v','r1','r2','r3'].forEach(k=>$('#'+k+'-v').textContent=$('#'+k).value);const rs=R_.filter(r=>r>0);
  const Req=md==='s'?rs.reduce((a,b)=>a+b,0):1/rs.reduce((a,b)=>a+1/b,0),I=V/Req;
  $('#dpic').innerHTML=circuitSVG(md,R_,V);
  $('#dtab').innerHTML=`<table class="ph-tbl"><thead><tr><th>المقاومة</th><th>R (Ω)</th><th>الجهد (v)</th><th>التيار (A)</th></tr></thead><tbody>${rs.map((r,i)=>{const Vi=md==='s'?I*r:V,Ii=md==='s'?I:V/r;return `<tr><td class="l">R${i+1}</td><td class="l">${r}</td><td class="l">${fm(Vi)}</td><td class="l">${fm(Ii)}</td></tr>`}).join('')}</tbody></table>`;
  $('#dres').innerHTML=facts([['المقاومة المكافئة Req',fm(Req)+' Ω','hi'],['التيار الكلي I = V / Req',fm(I)+' A','hi'],[md==='s'?'تحقق: <span class="ltr">V1 + V2 + …</span>':'تحقق: <span class="ltr">I1 + I2 + …</span>',md==='s'?fm(rs.reduce((a,r)=>a+I*r,0))+' v':fm(rs.reduce((a,r)=>a+V/r,0))+' A']])};
 segBind(el,'md',v=>{md=v;if(v==='p'){$('#r1').value=8;$('#r2').value=10;$('#v').value=30}else{$('#r1').value=3;$('#r2').value=6;$('#v').value=18}$('#r3').value=0;draw()});['v','r1','r2','r3'].forEach(k=>$('#'+k).addEventListener('input',draw));draw();
}
const ohmFig=()=>`<svg viewBox="0 0 340 190" role="img" aria-label="دائرة بسيطة: مقاومة وبطارية" style="max-width:340px;margin:auto;display:block"><path d="M50 40H130M210 40H290V160H190M150 160H50V40" fill="none" stroke="var(--fg)" stroke-width="2.4"/>${zig(130,40,210,'R','').replace(/R=Ω/,'R')}<path d="M162 144V176M178 150V170" stroke="var(--fg)" stroke-width="3"/><path d="M150 160h12M178 160h12" stroke="var(--fg)" stroke-width="2.4"/><text x="150" y="140" font-size="13" font-weight="800" fill="var(--stop)">+</text>${arrowS(30,120,30,70,'var(--stop)',2.4,8)}<text x="18" y="100" font-size="13" font-weight="700" fill="var(--fg)" font-family="var(--mono)">I</text>${arrowS(310,70,310,120,'var(--stop)',2.4,8)}<text x="318" y="100" font-size="13" font-weight="700" fill="var(--fg)" font-family="var(--mono)">I</text></svg>`;
B.lesson({
 id:'u3-l6',unit:3,order:6,pages:'49–52',
 title:'قانون أوم وتوصيل المقاومات',
 summary:'قانون أوم V = IR ووحدات الجهد والتيار والمقاومة، وربط المقاومات على التوالي وعلى التوازي وخصائص كل منهما، مع أربعة تدريبات.',
 theory:[
  {h:'قانون أوم',ref:'ص 49',html:R`<p>وينص هذا القانون على أن فرق الجهد الكهربائي بين طرفي ناقل معدني يتناسب طردياً مع شدة التيار الكهربائي المار فيه.</p>${ohmFig()}<p class="sub" style="text-align:center">شكل <span class="ltr">(3-6)</span></p><p><b>الصيغة الرياضية لقانون أوم:</b></p>$$V=I\,R$$
   <p>حيث: \(V\) فرق الجهد الكهربائي، ويقاس بوحدة الفولت نسبة للعالم أليساندرو فولتا. \(I\) شدة التيار الكهربائي، ويقاس بوحدة الأمبير نسبة للعالم أندريه أمبير. \(R\) المقاومة، وتقاس بوحدة الأوم نسبة للعالم جورج أوم.</p>`},
  {err:'كُتب في الحقيبة أن شدة التيار الكهربائي «يقاس بوحدة الفولت نسبة للعالم أندريه أمبير»، والصحيح: يقاس بوحدة <b>الأمبير</b>. كتبناها مصححة.'},
  {note:'<b>توضيح للمتدرب — ليس من الكتاب:</b> قانون أوم صحيح عند ثبوت درجة حرارة الموصل. والمقاومة هي «إعاقة» الموصل لمرور التيار: بالجهد نفسه، كلما زادت المقاومة قلّ التيار (<span class="ltr">I = V / R</span>). والحقيبة تكتب وحدة الفولت بحرف صغير <span class="ltr">v</span> بعد الأرقام (مثل <span class="ltr">220 v</span>) لتفرّقها عن رمز الكمية <span class="ltr">V</span> في القانون.'},
  {h:'تدريبات على قانون أوم',ref:'ص 50',html:'<ol><li>مدفأة كهربائية تعمل عند فرق جهد مقداره <span class="ltr">220 v</span>، فإذا كانت شدة التيار المار فيها <span class="ltr">10 A</span>، احسب مقاومة سلك المدفأة.</li><li>إذا كانت مقاومة موصل نحاسي <span class="ltr">35</span> أوم وفرق الجهد بين طرفيه <span class="ltr">20 v</span>، احسب شدة التيار المار فيه.</li></ol>'},
  {h:'توصيل (ربط) المقاومات',ref:'ص 50',html:'<p>عند تصميم دائرة كهربائية يتطلب الأمر ربط مجموعة من المقاومات بإحدى الطريقتين على التوالي أو على التوازي أو كلتيهما معاً، وسوف نتعرف في هذه الوحدة كيفية الربط لكل نوع وخصائصه.</p>'},
  {h:'1- ربط المقاومات على التوالي',ref:'ص 51',html:`<p>تربط المقاومات على التوالي بتوصيل نهاية المقاومة الأولى ببداية المقاومة الثانية، ونهاية المقاومة الثانية ببداية المقاومة الثالثة وهكذا، بحيث يكون هناك مسار واحد فقط للتيار الكهربائي يمر في هذه المقاومات حين توصيلها بمصدر للجهد، كما في الشكل.</p>${circuitSVG('s',[2,3,4],'V')}`},
  {h:'2- ربط المقاومات على التوازي',ref:'ص 51',html:`<p>تربط المقاومات على التوازي بربط البدايات ببعضها البعض، وكذلك الأمر بالنسبة للنهايات كما في الدائرة الكهربائية، وفي هذا الربط يكون فرق الجهد هو نفسه عبر جميع المقاومات، أما التيار فإنه يتجزأ (يتفرع) في مسارات متعددة.</p>${circuitSVG('p',[2,3,4],'V')}`},
  {note:R`<b>توضيح للمتدرب — إضافة من خارج الكتاب:</b> الحقيبة لا تذكر قانوني المقاومة المكافئة، وتحتاجهما التدريبات: <br>في <b>التوالي</b>: \(R_{eq}=R_1+R_2+R_3+\dots\) والتيار واحد في كل المقاومات، والجهد يتوزع: \(V=V_1+V_2+\dots\)<br>في <b>التوازي</b>: \(\dfrac{1}{R_{eq}}=\dfrac{1}{R_1}+\dfrac{1}{R_2}+\dots\) والجهد واحد على كل المقاومات، والتيار يتفرع: \(I=I_1+I_2+\dots\) (ولمقاومتين فقط: \(R_{eq}=\dfrac{R_1R_2}{R_1+R_2}\)).`},
  {h:'تدريب 1 (التوالي)',ref:'ص 51',html:`<p>من الدائرة الكهربائية المبينة في الشكل (<span class="ltr">R1 = 3 Ω</span> و <span class="ltr">R2 = 6 Ω</span> على التوالي مع مصدر <span class="ltr">18 V</span>) احسب ما يلي:</p><ol><li>المقاومة المكافئة للدائرة.</li><li>شدة التيار المار في الدائرة.</li><li>فرق الجهد بين طرفي كل مقاومة <span class="ltr">V1 , V2</span>، ثم تحقق من القاعدة <span class="ltr">V = V1 + V2</span>.</li></ol>${circuitSVG('s',[3,6],18)}`},
  {h:'تدريب 2 (التوازي)',ref:'ص 52',html:`<p>من الدائرة الكهربائية المبينة في الشكل (<span class="ltr">R1 = 8 Ω</span> و <span class="ltr">R2 = 10 Ω</span> على التوازي مع مصدر <span class="ltr">30 V</span>) احسب ما يلي:</p><ol><li>المقاومة المكافئة لهما.</li><li>شدة التيار المار بالدائرة.</li><li>شدة التيار المار بكل مقاومة <span class="ltr">I1 , I2</span>، ثم تحقق من العلاقة <span class="ltr">I = I1 + I2</span>.</li></ol>${circuitSVG('p',[8,10],30)}`}
 ],
 stations:[
  {intro:true},
  {st:1,short:'قانون أوم',title:'قانون أوم',q:'بالجهد نفسه، هل يمر تيار أكبر في مقاومة صغيرة أم كبيرة؟',ref:'ص 49',
   art:art(`<g data-tip="مثلث قانون أوم: غطِّ الكمية المطلوبة تظهر طريقة حسابها ⟦V = IR⟧ ، ⟦I = V/R⟧ ، ⟦R = V/I⟧."><path d="M180 60L300 260H60Z" fill="${C.yel}" stroke="${C.ink}" stroke-width="3"/><path d="M110 175H250M180 175V260" stroke="${C.ink}" stroke-width="3"/>${TL(180,150,'V',{fs:30,w:800})}${TL(135,232,'I',{fs:28,w:800})}${TL(225,232,'R',{fs:28,w:800})}</g>
    ${T(50,90,'فولت',{ar:1,fs:12,a:'start'})}${T(50,110,'أمبير',{ar:1,fs:12,a:'start'})}${T(50,130,'أوم Ω',{ar:1,fs:12,a:'start'})}`,'مثلث قانون أوم'),
   cap:'مثلث للحفظ (إضافة). مرّر المؤشر على المثلث (أو المسه في الجوال).',
   side:[{book:'قانون أوم: وينص هذا القانون على أن فرق الجهد الكهربائي بين طرفي ناقل معدني يتناسب طردياً مع شدة التيار الكهربائي المار فيه. الصيغة الرياضية لقانون أوم: V = IR. حيث: V = فرق الجهد الكهربائي ويقاس بوحدة الفولت نسبة للعالم أليساندرو فولتا، I = شدة التيار الكهربائي ويقاس بوحدة الأمبير نسبة للعالم أندريه أمبير، R = المقاومة وتقاس بوحدة الأوم نسبة للعالم جورج أوم.',ref:'ص 49'}],
   body:[{watch:'في الحقيبة كُتب أن شدة التيار «يقاس بوحدة الفولت»، والصحيح بوحدة الأمبير.',fix:true},
    {widget:(el,B)=>K.calc(el,B,{intro:'غيّر الجهد والمقاومة وشاهد التيار:',pre:{q:'ضاعفنا المقاومة مع بقاء الجهد. التيار:',opts:[['يتضاعف',false,'I = V / R: المقاومة في المقام.'],['ينقص إلى النصف',true,'مضاعفة المقام تنصّف الناتج.'],['لا يتغير',false,'المقاومة تؤثر في التيار.']]},ins:[{k:'v',l:'الجهد V',u:'v',min:1,max:240,step:1,v:220},{k:'r',l:'المقاومة R',u:'Ω',min:1,max:100,step:1,v:22}],calc:s=>({pic:plot({w:420,h:200,xr:[0,10],yr:[0,240],xl:'I (A)',yl:'V (v)',series:[{pts:[[0,0],[240/s.r,240]]}],dots:[[s.v/s.r,s.v,'var(--live)']]}),facts:[['I = V / R',fm(s.v/s.r)+' A','hi']]})}),title:'مختبر مصغّر: قانون أوم'}]},
  {st:2,short:'تدريبات أوم',title:'تدريبات على قانون أوم',q:'المدفأة: 220 v و 10 A. هل مقاومتها كبيرة أم صغيرة؟',ref:'ص 50',
   art:art(`<g data-tip="المدفأة: ⟦V = 220 v⟧ و ⟦I = 10 A⟧ ⇒ ⟦R = 22 Ω⟧."><rect x="60" y="80" width="240" height="90" rx="16" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/>${[0,1,2,3,4].map(i=>`<path d="M${90+i*45} 100v50" stroke="${C.red}" stroke-width="6" stroke-linecap="round"/>`).join('')}${TL(180,196,'220 v , 10 A',{fs:15,w:800})}</g>
    <g data-tip="الموصل النحاسي: ⟦R = 35 Ω⟧ و ⟦V = 20 v⟧ ⇒ ⟦I = 0.57 A⟧."><path d="M60 250H300" stroke="#c97b4a" stroke-width="10" stroke-linecap="round"/>${TL(180,282,'35 Ω , 20 v',{fs:15,w:800})}</g>`,'مدفأة وموصل نحاسي'),
   cap:'معطيات التدريبين. مرّر المؤشر على كل منهما (أو المسه في الجوال).',
   side:[{book:'تدريبات: 1- مدفأة كهربائية تعمل عند فرق جهد مقداره 220 v فإذا كانت شدة التيار المار فيها 10 A. احسب مقاومة سلك المدفأة؟ 2- إذا كانت مقاومة موصل نحاسي 35 أوم و فرق الجهد بين طرفيه 20 v، احسب شدة التيار المار فيه؟',ref:'ص 50'}],
   body:[{widget:(el,B)=>K.num(el,B,{intro:'حل التدريبين:',items:[{q:'تدريب 1: مقاومة سلك المدفأة',ans:22,unit:'Ω',why:R`\(R=\dfrac{V}{I}=\dfrac{220}{10}=22\ \Omega\).`},{q:'تدريب 2: التيار في الموصل',ans:20/35,tol:0.01,unit:'A',why:R`\(I=\dfrac{V}{R}=\dfrac{20}{35}=0.57\ \mathrm{A}\).`}]}),title:'مختبر مصغّر: احسب'}]},
  {st:3,short:'ربط المقاومات',title:'توصيل (ربط) المقاومات',q:'لماذا إذا احترق مصباح في زينة رخيصة انطفأ الصف كله؟',ref:'ص 50',
   art:art(`<g data-tip="على التوالي: مسار واحد للتيار؛ إذا انقطع جزء توقف الجميع."><rect x="30" y="70" width="300" height="90" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${[0,1,2].map(i=>`<circle cx="${100+i*80}" cy="115" r="16" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>`).join('')}<path d="M50 115H84M116 115H164M196 115H244M276 115H310" stroke="${C.ink}" stroke-width="3"/>${T(180,150,'توالٍ',{ar:1,fs:14,w:800})}</g>
    <g data-tip="على التوازي: لكل مقاومة مسار؛ الجهد نفسه على الجميع والتيار يتفرع."><rect x="30" y="185" width="300" height="115" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2.5"/><path d="M60 205V285M300 205V285" stroke="#fff" stroke-width="3"/>${[0,1,2].map(i=>`<path d="M60 ${210+i*36}H164M196 ${210+i*36}H300" stroke="#fff" stroke-width="3"/><circle cx="180" cy="${210+i*36}" r="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>`).join('')}${T(90,296,'توازٍ',{ar:1,fs:14,w:800,c:'#fff'})}</g>`,'ثلاثة مصابيح على التوالي وثلاثة على التوازي'),
   cap:'الطريقتان. مرّر المؤشر على كل دائرة (أو المسها في الجوال).',
   side:[{book:'توصيل (ربط) المقاومات: عند تصميم دائرة كهربائية يتطلب الأمر ربط مجموعة من المقاومات بإحدى الطريقتين على التوالي أو على التوازي أو كلتيهما معاً، وسوف نتعرف في هذه الوحدة كيفية الربط لكل نوع وخصائصه.',ref:'ص 50'},{book:'1- ربط المقاومات على التوالي: تربط المقاومات على التوالي بتوصيل نهاية المقاومة الأولى ببداية المقاومة الثانية، ونهاية المقاومة الثانية ببداية المقاومة الثالثة وهكذا، بحيث يكون هناك مسار واحد فقط للتيار الكهربائي يمر في هذه المقاومات حين توصيلها بمصدر للجهد كما في الشكل. 2- ربط المقاومات على التوازي: تربط المقاومات على التوازي بربط البدايات ببعضها البعض، وكذلك الأمر بالنسبة للنهايات كما في الدائرة الكهربائية، وفي هذا الربط يكون فرق الجهد هو نفسه عبر جميع المقاومات، أما التيار فإنه يتجزأ (يتفرع) في مسارات متعددة.',ref:'ص 51'}],
   body:[{add:R`قانونا المقاومة المكافئة: توالٍ \(R_{eq}=R_1+R_2+\dots\)، وتوازٍ \(\dfrac1{R_{eq}}=\dfrac1{R_1}+\dfrac1{R_2}+\dots\)`,title:'المقاومة المكافئة'},{add:'تمديدات المنزل على التوازي: كل جهاز يأخذ 220 v نفسها، وإطفاء جهاز لا يطفئ غيره.',title:'من الواقع'},
    {widget:(el,B)=>K.sort(el,B,{intro:'توالٍ أم توازٍ؟',cats:['توالٍ','توازٍ'],items:[['مسار واحد فقط للتيار',0,'خاصية التوالي.'],['الجهد نفسه على كل المقاومات',1,'خاصية التوازي.'],['التيار يتفرع',1,'خاصية التوازي.'],['أجهزة المنزل',1,'كل جهاز يعمل مستقلاً.']]}),title:'مختبر مصغّر: صنّف'}]},
  {st:4,short:'تدريب التوالي',title:'تدريب 1: مقاومتان على التوالي',q:'المقاومتان 3 Ω و 6 Ω على التوالي: أيهما يأخذ جهداً أكبر؟',ref:'ص 51',
   art:art(`<path d="M60 250V90H300V250H210M150 250H60" fill="none" stroke="${C.ink}" stroke-width="3"/><path d="M168 234V266M182 240V260" stroke="${C.ink}" stroke-width="4"/>${TL(175,292,'18 V',{fs:15,w:800})}
    <g data-tip="⟦R1 = 3 Ω⟧: ⟦V1 = I R1 = 2 × 3 = 6 v⟧."><rect x="90" y="74" width="70" height="32" rx="6" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.4"/>${TL(125,96,'3 Ω',{fs:14,w:800})}</g>
    <g data-tip="⟦R2 = 6 Ω⟧: ⟦V2 = 2 × 6 = 12 v⟧ (المقاومة الأكبر تأخذ جهداً أكبر)."><rect x="200" y="74" width="70" height="32" rx="6" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.4"/>${TL(235,96,'6 Ω',{fs:14,w:800})}</g>
    <g data-tip="⟦Req = 9 Ω⟧ و ⟦I = 18 / 9 = 2 A⟧.">${TL(180,170,'Req = 9 Ω , I = 2 A',{fs:15,w:800})}</g>`,'مقاومتان على التوالي مع مصدر 18 فولت'),
   cap:'تدريب 1. مرّر المؤشر على الأجزاء (أو المسها في الجوال).',
   side:[{book:'تدريب 1: من الدائرة الكهربائية المبينة في الشكل احسب ما يلي: 1- المقاومة المكافئة للدائرة. 2- شدة التيار المار في الدائرة. 3- فرق الجهد بين طرفي كل مقاومة V1 , V2 ثم تحقق من القاعدة V = V1 + V2. (R1 = 3 Ω، R2 = 6 Ω، 18 V)',ref:'ص 51'}],
   body:[{widget:(el,B)=>K.num(el,B,{intro:'حل التدريب:',items:[{q:'المقاومة المكافئة',ans:9,unit:'Ω',why:R`\(3+6=9\ \Omega\).`},{q:'التيار',ans:2,unit:'A',why:R`\(18\div9=2\ \mathrm{A}\).`},{q:'V2',ans:12,unit:'v',why:R`\(2\times6=12\) و \(V_1=6\)، والمجموع \(18\).`}]}),title:'مختبر مصغّر: احسب'}]},
  {st:5,short:'تدريب التوازي',title:'تدريب 2: مقاومتان على التوازي',q:'هل المقاومة المكافئة لمقاومتين على التوازي أكبر من كل منهما أم أصغر؟',ref:'ص 52',
   art:art(`<path d="M60 90V260H150M210 260H300V90" fill="none" stroke="${C.ink}" stroke-width="3"/><path d="M168 244V276M182 250V270" stroke="${C.ink}" stroke-width="4"/>${TL(175,300,'30 V',{fs:15,w:800})}<path d="M60 90H300M60 160H300" stroke="${C.ink}" stroke-width="3"/>
    <g data-tip="⟦R1 = 8 Ω⟧: ⟦I1 = 30 / 8 = 3.75 A⟧."><rect x="145" y="74" width="70" height="32" rx="6" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.4"/>${TL(180,96,'8 Ω',{fs:14,w:800})}</g>
    <g data-tip="⟦R2 = 10 Ω⟧: ⟦I2 = 30 / 10 = 3 A⟧."><rect x="145" y="144" width="70" height="32" rx="6" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.4"/>${TL(180,166,'10 Ω',{fs:14,w:800})}</g>
    <g data-tip="⟦Req = 80/18 = 4.44 Ω⟧ أصغر من أصغرهما، و ⟦I = 6.75 A = I1 + I2⟧.">${TL(180,218,'Req = 4.44 Ω',{fs:15,w:800})}</g>`,'مقاومتان على التوازي مع مصدر 30 فولت'),
   cap:'تدريب 2. مرّر المؤشر على الأجزاء (أو المسها في الجوال).',
   side:[{book:'تدريب 2: من الدائرة الكهربائية المبينة في الشكل احسب ما يلي: 1- المقاومة المكافئة لهما. 2- شدة التيار المار بالدائرة. 3- شدة التيار المار بكل مقاومة I1 , I2 ثم تحقق من العلاقة I = I1 + I2. (R1 = 8 Ω، R2 = 10 Ω، 30 V)',ref:'ص 52'}],
   body:[{predict:{q:'المقاومة المكافئة لـ <span class="ltr">8 Ω</span> و <span class="ltr">10 Ω</span> على التوازي:',opts:[['<span class="ltr">18 Ω</span>',false,'هذه للتوالي.'],['<span class="ltr">4.44 Ω</span>',true,R`\(\dfrac{8\times10}{8+10}=4.44\ \Omega\)، أصغر من أصغرهما لأن التيار وجد مسارين.`],['<span class="ltr">9 Ω</span>',false,'ليست متوسط المقاومتين.']]}}]},
  {recap:['قانون أوم: V = IR؛ الجهد بالفولت والتيار بالأمبير والمقاومة بالأوم Ω.','التوالي: مسار واحد، التيار واحد، Req = R1 + R2 + …، و V = V1 + V2 + ….','التوازي: الجهد نفسه، التيار يتفرع I = I1 + I2 + …، و 1/Req = 1/R1 + 1/R2 + ….','المقاومة المكافئة في التوازي أصغر من أصغر المقاومات.']}
 ],
 lab:lab36,
 examples:[
  {title:'تدريب: مقاومة سلك المدفأة',ref:'ص 50',q:'<p>مدفأة كهربائية تعمل عند فرق جهد <span class="ltr">220 v</span>، وشدة التيار المار فيها <span class="ltr">10 A</span>. احسب مقاومة سلك المدفأة.</p>',given:[{id:'V',label:'الجهد',sym:'V',unit:'v',value:220},{id:'I',label:'التيار',sym:'I',unit:'A',value:10}],solve:g=>[{t:'من قانون أوم:',f:R`R=\dfrac{V}{I}=\dfrac{${g.V}}{${g.I}}`,v:g.V/g.I,unit:'Ω',dp:2,final:true}]},
  {title:'تدريب: التيار في موصل نحاسي',ref:'ص 50',q:'<p>مقاومة موصل نحاسي <span class="ltr">35 Ω</span> وفرق الجهد بين طرفيه <span class="ltr">20 v</span>. احسب شدة التيار المار فيه.</p>',given:[{id:'R',label:'المقاومة',sym:'R',unit:'Ω',value:35},{id:'V',label:'الجهد',sym:'V',unit:'v',value:20}],solve:g=>[{t:'من قانون أوم:',f:R`I=\dfrac{V}{R}=\dfrac{${g.V}}{${g.R}}`,v:g.V/g.R,unit:'A',dp:2,final:true}]},
  {title:'تدريب 1: مقاومتان على التوالي',ref:'ص 51',q:'<p><span class="ltr">R1 = 3 Ω</span> و <span class="ltr">R2 = 6 Ω</span> على التوالي مع مصدر <span class="ltr">18 V</span>. احسب المقاومة المكافئة، والتيار، و V1 و V2، وتحقق من <span class="ltr">V = V1 + V2</span>.</p>',given:[{id:'a',label:'R1',sym:'R_1',unit:'Ω',value:3},{id:'b',label:'R2',sym:'R_2',unit:'Ω',value:6},{id:'V',label:'الجهد',sym:'V',unit:'V',value:18}],
   solve:g=>{const Req=g.a+g.b,I=g.V/Req,Ir=B.round(I,2);return [{t:'1- المقاومة المكافئة (توالٍ):',f:R`R_{eq}=R_1+R_2=${g.a}+${g.b}`,v:Req,unit:'Ω',dp:2},{t:'2- التيار:',f:R`I=\dfrac{V}{R_{eq}}=\dfrac{${g.V}}{${Req}}`,v:I,unit:'A',dp:2},{t:'3- جهد R1:',f:R`V_1=I\,R_1=${fm(Ir)}\times${g.a}`,v:Ir*g.a,unit:'v',dp:2},{t:'جهد R2:',f:R`V_2=I\,R_2=${fm(Ir)}\times${g.b}`,v:Ir*g.b,unit:'v',dp:2},{t:'التحقق:',f:R`V_1+V_2=${fm(Ir*g.a)}+${fm(Ir*g.b)}`,v:Ir*(g.a+g.b),unit:'v',dp:2,final:true}]}},
  {title:'تدريب 2: مقاومتان على التوازي',ref:'ص 52',q:'<p><span class="ltr">R1 = 8 Ω</span> و <span class="ltr">R2 = 10 Ω</span> على التوازي مع مصدر <span class="ltr">30 V</span>. احسب المقاومة المكافئة، والتيار الكلي، و I1 و I2، وتحقق من <span class="ltr">I = I1 + I2</span>.</p>',given:[{id:'a',label:'R1',sym:'R_1',unit:'Ω',value:8},{id:'b',label:'R2',sym:'R_2',unit:'Ω',value:10},{id:'V',label:'الجهد',sym:'V',unit:'V',value:30}],
   solve:g=>{const Req=g.a*g.b/(g.a+g.b),Rr=B.round(Req,2);return [{t:'1- المقاومة المكافئة (توازٍ):',f:R`R_{eq}=\dfrac{R_1R_2}{R_1+R_2}=\dfrac{${g.a}\times${g.b}}{${g.a}+${g.b}}`,v:Req,unit:'Ω',dp:2},{t:'2- التيار الكلي:',f:R`I=\dfrac{V}{R_{eq}}=\dfrac{${g.V}}{${fm(Rr)}}`,v:g.V/Req,unit:'A',dp:2},{t:'3- تيار R1 (الجهد نفسه على كل مقاومة):',f:R`I_1=\dfrac{V}{R_1}=\dfrac{${g.V}}{${g.a}}`,v:g.V/g.a,unit:'A',dp:2},{t:'تيار R2:',f:R`I_2=\dfrac{V}{R_2}=\dfrac{${g.V}}{${g.b}}`,v:g.V/g.b,unit:'A',dp:2},{t:'التحقق:',f:R`I_1+I_2`,v:B.round(g.V/g.a,2)+B.round(g.V/g.b,2),unit:'A',dp:2,final:true}]},note:'حسبنا التيار الكلي من المقاومة المكافئة قبل تقريبها (80/18 Ω) حتى لا يظهر فرق بسبب التقريب.'}
 ],
 quiz:[
  {q:'من قانون أوم: فرق الجهد بين طرفي موصل يتناسب ...... مع شدة التيار المار فيه:',o:['عكسياً','طردياً','لا توجد علاقة'],c:1,e:'ص 49 (ورقة العمل الثانية).'},
  {q:'وحدة المقاومة:',o:['الفولت','الأمبير','الأوم Ω'],c:2,e:'نسبة إلى جورج أوم.'},
  {q:'مدفأة 220 v يمر فيها 10 A. مقاومتها:',o:['2200 Ω','22 Ω','0.045 Ω'],c:1,e:'R = V / I.'},
  {q:'في التوصيل على التوالي:',o:['الجهد نفسه على كل المقاومات','مسار واحد فقط للتيار','التيار يتفرع'],c:1,e:'ص 51.'},
  {q:'في التوصيل على التوازي:',o:['فرق الجهد نفسه عبر جميع المقاومات','التيار نفسه في كل المقاومات','المقاومة المكافئة مجموعها'],c:0,e:'ص 51.'},
  {q:'3 Ω و 6 Ω على التوالي. المقاومة المكافئة:',o:['2 Ω','9 Ω','18 Ω'],c:1,e:'تجمع في التوالي.'},
  {q:'8 Ω و 10 Ω على التوازي. المقاومة المكافئة:',o:['18 Ω','4.44 Ω','80 Ω'],c:1,e:'(8 × 10) ÷ (8 + 10).'}
 ]
});

/* =================== الدرس 3.7 — المكثف الكهربائي (إضافة من خارج الكتاب) =================== */
function lab37(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c5 panel"><h3 style="margin-top:0">شحن المكثف عبر مقاومة</h3><p class="sub">${ADD}مختبر يوضح شحن مكثف من بطارية عبر مقاومة. الأرقام تختارها أنت.</p>
  ${sl('kv','جهد البطارية V (v)',1,24,1,12)}${sl('kr','المقاومة R (kΩ)',1,100,1,10)}${sl('kc','السعة C (µF)',10,1000,10,100)}
  <div class="ph-row"><button class="btn pri" id="kgo">اشحن</button><button class="btn" id="kdis">فرّغ</button></div><div id="kres"></div></div>
 <div class="c7 panel"><div class="pk-pic" id="kplot" style="max-width:540px"></div><p class="pk-ill">ثابت الزمن τ = R C: بعده يصل جهد المكثف إلى نحو 63% من جهد البطارية، وبعد 5τ يكون قد امتلأ تقريباً.</p></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اشحن المكثف وراقب: الجهد يرتفع سريعاً ثم يبطئ.</li><li>ضاعف المقاومة: هل يستغرق الشحن وقتاً أطول؟</li><li>لاحظ الشحنة المخزنة <span class="ltr">Q = C V</span> والطاقة <span class="ltr">½ C V²</span> عند الامتلاء.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let t=0,mode='idle',v0=0;
 const draw=()=>{const V=+$('#kv').value,Rk=+$('#kr').value,Cu=+$('#kc').value;['kv','kr','kc'].forEach(k=>$('#'+k+'-v').textContent=$('#'+k).value);const tau=Rk*1e3*Cu*1e-6;
  const vc=mode==='charge'?V+(v0-V)*Math.exp(-t/tau):mode==='dis'?v0*Math.exp(-t/tau):v0;const T5=5*tau;const pts=[];for(let u=0;u<=T5*1.0001;u+=T5/80)pts.push([u,mode==='dis'?v0*Math.exp(-u/tau):V+(mode==='charge'?v0-V:0-V)*Math.exp(-u/tau)]);
  $('#kplot').innerHTML=plot({w:540,h:240,xr:[0,T5],yr:[0,24],xl:'الزمن (s)',yl:'جهد المكثف (v)',series:[{pts}],dots:mode==='idle'?[]:[[Math.min(t,T5),vc,'var(--live)']],extra:(X,Y)=>`<path d="M${X(tau).toFixed(1)} 16V${(240-34)}" stroke="var(--muted)" stroke-dasharray="4 3"/><text x="${X(tau).toFixed(1)}" y="28" font-size="11" fill="var(--muted)" text-anchor="middle" font-family="var(--mono)">τ</text>`});
  $('#kres').innerHTML=facts([['τ = R C',fm(tau)+' s'],['جهد المكثف الآن',fm(vc)+' v','hi'],['الشحنة Q = C V',fm(Cu*1e-6*vc)+' C'],['الطاقة ½ C V²',fm(0.5*Cu*1e-6*vc*vc)+' J']]);return vc};
 K.loopOn(el,dt=>{if(mode==='idle')return;t+=dt;draw()});
 $('#kgo').onclick=()=>{v0=draw();t=0;mode='charge'};$('#kdis').onclick=()=>{v0=draw();t=0;mode='dis'};['kv','kr','kc'].forEach(k=>$('#'+k).addEventListener('input',draw));draw();
}
const capSVG=()=>`<svg viewBox="0 0 360 200" role="img" aria-label="مكثف لوحين متوازيين موصول ببطارية" style="max-width:360px;margin:auto;display:block"><rect x="140" y="40" width="12" height="120" fill="var(--stop)"/><rect x="208" y="40" width="12" height="120" fill="var(--blue)"/>${[0,1,2,3,4].map(i=>`<text x="160" y="${60+i*24}" font-size="14" font-weight="800" fill="var(--stop)">+</text><text x="192" y="${60+i*24}" font-size="14" font-weight="800" fill="var(--blue)">−</text>`).join('')}<path d="M146 160V185H120M214 160V185H240" stroke="var(--fg)" stroke-width="2.4" fill="none"/><path d="M120 185H60V20H146V40M214 40V20H300V185H240" stroke="var(--fg)" stroke-width="2.4" fill="none"/><path d="M52 95h16M56 105h8" stroke="var(--fg)" stroke-width="3"/><text x="180" y="196" text-anchor="middle" font-size="12" fill="var(--muted)" direction="rtl">عازل بين اللوحين</text></svg>`;
B.lesson({
 id:'u3-l7',unit:3,order:7,pages:'—',
 title:'المكثف الكهربائي (إضافة من خارج الكتاب)',
 summary:'درس مضاف ليس في الحقيبة: ذُكر «المكثف الكهربائي» في عناصر الوحدة الرابعة دون شرح. تركيب المكثف، والسعة C = Q / V ووحدتها الفاراد، وشحنه وتفريغه، والطاقة المخزنة فيه.',
 theory:[
  {note:'<b>تنبيه:</b> هذا الدرس كله <b>إضافة من خارج الكتاب</b>. ورد «المكثف الكهربائي» ضمن عناصر الوحدة الرابعة في الحقيبة (ص 53) دون أي شرح، فأضفناه هنا مع دروس الكهرباء بقرار من المنسق.'},
  {h:'ما المكثف؟',html:`<p>${ADD}المكثف عنصر كهربائي يخزن الشحنة الكهربائية. أبسط أشكاله لوحان معدنيان متوازيان بينهما مادة عازلة. عند توصيله ببطارية تتجمع شحنة موجبة على أحد اللوحين وشحنة سالبة مساوية على الآخر، ولا يعبر التيار العازل.</p>${capSVG()}`},
  {h:'السعة الكهربائية',html:R`<p>${ADD}السعة \(C\) مقدار ما يخزنه المكثف من شحنة لكل فولت:</p>$$C=\frac{Q}{V}$$<p>ووحدتها <b>الفاراد</b> <span class="ltr">(F)</span>. والفاراد وحدة كبيرة جداً، لذلك نستخدم أجزاءه: المايكروفاراد \(\mu\mathrm{F}=10^{-6}\ \mathrm{F}\)، والنانوفاراد \(\mathrm{nF}=10^{-9}\ \mathrm{F}\)، والبيكوفاراد \(\mathrm{pF}=10^{-12}\ \mathrm{F}\) (راجع درس البادئات 1.3).</p>`},
  {h:'الشحن والتفريغ والطاقة',html:R`<p>${ADD}عند وصل المكثف ببطارية عبر مقاومة \(R\) يرتفع جهده تدريجياً حتى يساوي جهد البطارية، وعند وصل طرفيه بمقاومة وحدها يفرغ شحنته تدريجياً. والزمن المميز لذلك هو ثابت الزمن \(\tau=R\,C\). والطاقة المخزنة في مكثف مشحون:</p>$$E=\tfrac12\,C\,V^2$$`},
  {h:'استخدامات المكثف',html:`<p>${ADD}فلاش الكاميرا (يُشحن ببطء ويفرغ دفعة واحدة)، ومحركات المراوح والمكيفات (مكثف التشغيل)، وتنعيم الجهد في الشواحن ومصادر القدرة، ودوائر التوقيت.</p>`},
  {h:'تمرينان إضافيان',html:'<ol><li>مكثف سعته <span class="ltr">100 µF</span> وُصل ببطارية <span class="ltr">12 v</span>. احسب الشحنة المخزنة فيه.</li><li>احسب الطاقة المخزنة في المكثف نفسه.</li></ol><p class="sub">التمرينان من إعدادنا وليسا من الحقيبة.</p>'}
 ],
 stations:[
  {intro:true},
  {st:1,short:'ما المكثف؟',title:'ما المكثف؟',q:'هل يمر التيار عبر المكثف؟',
   art:art(`<g data-tip="لوح موجب الشحنة."><rect x="130" y="70" width="18" height="180" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/></g><g data-tip="لوح سالب الشحنة."><rect x="212" y="70" width="18" height="180" fill="${C.blue}" stroke="${C.ink}" stroke-width="2"/></g><g data-tip="عازل بين اللوحين: يمنع مرور التيار عبر المكثف."><rect x="150" y="70" width="60" height="180" fill="${C.yel}" opacity=".6"/>${T(180,165,'عازل',{ar:1,fs:13,w:800})}</g><path d="M139 70V40H60M221 70V40H300" stroke="${C.ink}" stroke-width="3" fill="none"/>${TL(180,290,'C = Q / V',{fs:18,w:800})}`,'لوحان بينهما عازل'),
   cap:'تركيب المكثف. مرّر المؤشر على الأجزاء (أو المسها في الجوال).',
   side:[{add:'المكثف عنصر يخزن الشحنة: لوحان معدنيان بينهما عازل. عند توصيله ببطارية يتجمع على أحد اللوحين شحنة موجبة وعلى الآخر سالبة مساوية، ولا يعبر التيار العازل.',title:'التعريف'}],
   body:[{predict:{q:'بعد امتلاء المكثف المتصل ببطارية تيار مستمر، التيار في الدائرة:',opts:[['يستمر بالقيمة نفسها',false,'العازل يمنع مرور التيار عبر المكثف.'],['يتوقف تقريباً',true,'عندما يتساوى جهد المكثف مع جهد البطارية تتوقف الشحنات عن الحركة.'],['يتضاعف',false,'لا يوجد ما يضاعفه.']]}}]},
  {st:2,short:'السعة',title:'السعة الكهربائية والفاراد',q:'لماذا نكتب سعة المكثفات غالباً بالمايكروفاراد؟',
   art:art(`<g data-tip="⟦C = Q / V⟧: الشحنة لكل فولت."><rect x="70" y="70" width="220" height="60" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,108,'C = Q / V',{fs:20,w:800})}</g>${[['µF','10⁻⁶ F'],['nF','10⁻⁹ F'],['pF','10⁻¹² F']].map(([a,b],i)=>`<g data-tip="⟦1 ${a} = ${b}⟧."><rect x="${40+i*100}" y="180" width="80" height="60" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.2"/>${TL(80+i*100,206,a,{fs:16,w:800})}${TL(80+i*100,228,b,{fs:11})}</g>`).join('')}`,'قانون السعة وأجزاء الفاراد'),
   cap:'السعة ووحداتها. مرّر المؤشر على البطاقات (أو المسها في الجوال).',
   side:[{add:'السعة C = Q / V ووحدتها الفاراد F، وهي وحدة كبيرة، لذلك نستخدم µF و nF و pF.',title:'السعة'}],
   body:[{widget:(el,B)=>K.calc(el,B,{intro:'غيّر السعة والجهد:',ins:[{k:'c',l:'السعة',u:'µF',min:10,max:1000,step:10,v:100},{k:'v',l:'الجهد',u:'v',min:1,max:24,step:1,v:12}],calc:s=>({facts:[['Q = C V',fm(s.c*1e-6*s.v)+' C','hi'],['الطاقة ½ C V²',fm(0.5*s.c*1e-6*s.v*s.v)+' J']]})}),title:'مختبر مصغّر: الشحنة المخزنة'}]},
  {st:3,short:'الشحن والتفريغ',title:'الشحن والتفريغ والطاقة',q:'لماذا يحتاج فلاش الكاميرا ثانية قبل أن يعمل مرة أخرى؟',
   art:art(`<path d="M60 260H320M60 260V70" stroke="${C.ink}" stroke-width="2.5"/><g data-tip="منحنى الشحن: سريع في البداية ثم يبطئ حتى يقترب من جهد البطارية."><path d="${[...Array(41)].map((_,i)=>{const x=60+i*6.5,y=260-170*(1-Math.exp(-i/9));return (i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}).join('')}" fill="none" stroke="${C.blue}" stroke-width="4"/></g><path d="M60 90H320" stroke="${C.red}" stroke-dasharray="6 4" stroke-width="2"/>${T(300,80,'جهد البطارية',{ar:1,fs:12,w:700})}<g data-tip="ثابت الزمن ⟦τ = RC⟧: يصل الجهد عنده إلى نحو ⟦63%⟧."><path d="M118 260V153" stroke="${C.ink}" stroke-dasharray="4 3"/>${TL(118,284,'τ = RC',{fs:13,w:800})}</g>`,'منحنى شحن المكثف'),
   cap:'منحنى الشحن. مرّر المؤشر على المنحنى (أو المسه في الجوال).',
   side:[{add:'عند الشحن عبر مقاومة R يرتفع جهد المكثف تدريجياً، والزمن المميز τ = RC. والطاقة المخزنة ½ C V². فلاش الكاميرا يُشحن ببطء ثم يفرغ دفعة واحدة.',title:'الشحن والطاقة'}],
   body:[{widget:(el,B)=>K.calc(el,B,{intro:'غيّر المقاومة والسعة:',ins:[{k:'r',l:'R',u:'kΩ',min:1,max:100,step:1,v:10},{k:'c',l:'C',u:'µF',min:10,max:1000,step:10,v:100}],calc:s=>({facts:[['τ = R C',fm(s.r*1e3*s.c*1e-6)+' s','hi'],['زمن الامتلاء تقريباً (5τ)',fm(5*s.r*1e3*s.c*1e-6)+' s']]})}),title:'مختبر مصغّر: ثابت الزمن'}]},
  {recap:['المكثف لوحان بينهما عازل، يخزن الشحنة ولا يمرر التيار المستمر بعد امتلائه.','السعة C = Q / V ووحدتها الفاراد F (غالباً µF و nF و pF).','يُشحن ويُفرغ تدريجياً عبر مقاومة بثابت زمن τ = RC.','الطاقة المخزنة ½ C V².']}
 ],
 lab:lab37,
 examples:[
  {title:'تمرين إضافي 1: الشحنة المخزنة',ref:'ليس من الكتاب',q:'<p>مكثف سعته <span class="ltr">100 µF</span> وُصل ببطارية <span class="ltr">12 v</span>. احسب الشحنة المخزنة فيه.</p>',given:[{id:'c',label:'السعة',sym:'C',unit:'µF',value:100},{id:'v',label:'الجهد',sym:'V',unit:'v',value:12}],solve:g=>[{t:'من تعريف السعة:',f:R`Q=C\,V=${g.c}\times10^{-6}\times${g.v}`,v:K.ev(g.c*1e-6*g.v),unit:'C',dp:2,final:true}]},
  {title:'تمرين إضافي 2: الطاقة المخزنة',ref:'ليس من الكتاب',q:'<p>احسب الطاقة المخزنة في المكثف السابق (<span class="ltr">100 µF</span> و <span class="ltr">12 v</span>).</p>',given:[{id:'c',label:'السعة',sym:'C',unit:'µF',value:100},{id:'v',label:'الجهد',sym:'V',unit:'v',value:12}],solve:g=>[{t:'الطاقة:',f:R`E=\tfrac12\,C\,V^2=\tfrac12\times${g.c}\times10^{-6}\times${g.v}^2`,v:K.ev(0.5*g.c*1e-6*g.v*g.v),unit:'J',dp:2,final:true}]}
 ],
 quiz:[
  {q:'المكثف عنصر:',o:['يولّد التيار','يخزن الشحنة الكهربائية','يقيس الجهد'],c:1,e:'إضافة من خارج الكتاب.'},
  {q:'قانون السعة:',o:['C = Q V','C = Q / V','C = V / Q'],c:1,e:'الشحنة لكل فولت.'},
  {q:'وحدة السعة:',o:['الفاراد F','الفولت','الأوم'],c:0,e:'وأجزاؤها µF و nF و pF.'},
  {q:'ثابت زمن الشحن:',o:['τ = R / C','τ = R C','τ = C / R'],c:1,e:'كلما كبر زاد زمن الشحن.'},
  {q:'الطاقة المخزنة في مكثف:',o:['C V','½ C V²','Q / V'],c:1,e:'إضافة من خارج الكتاب.'}
 ]
});
})(PLCBOOK);

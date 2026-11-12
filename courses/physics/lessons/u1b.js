/* الوحدة الأولى — الدروس 1.3 (البادئات) و 1.4 (الكميات القياسية والمتجهة) و 1.5 (تحليل المتجهات والعمليات عليها) */
(function(B){
const K=window.PHK,{lt,fm,tx,C,art,T,TL,arrowS,facts,seg,segBind,sl}=K;
const R=String.raw;
const D2R=Math.PI/180;

/* =================== الدرس 1.3 — بادئات النظام الدولي =================== */
const PX=[[24,'yotta','يوتا','Y'],[21,'zetta','زيتا','Z'],[18,'exa','إكسا','E'],[15,'peta','بيتا','P'],[12,'tera','تيرا','T'],[9,'giga','جيجا','G'],[6,'mega','ميجا','M'],[3,'kilo','كيلو','k'],[2,'hecto','هكتو','h'],[1,'deka','ديكا','da'],
 [-1,'deci','ديسي','d'],[-2,'centi','سنتي','c'],[-3,'milli','ملي','m'],[-6,'micro','مايكرو','µ'],[-9,'nano','نانو','n'],[-12,'pico','بيكو','p'],[-15,'femto','فيمتو','f'],[-18,'atto','أتو','a'],[-21,'zepto','زبتو','z'],[-24,'yocto','يوكتو','y']];
const pTable=()=>{const a=PX.slice(0,10),b=PX.slice(10);return `<div class="tbx"><table class="tt"><thead><tr><th>معامل الضرب</th><th>البادئة</th><th>الرمز</th><th>معامل الضرب</th><th>البادئة</th><th>الرمز</th></tr></thead><tbody>${a.map((r,i)=>`<tr><td class="l">10<sup>${r[0]}</sup></td><td>${r[2]} <span class="ltr">${r[1]}</span></td><td class="l">${r[3]}</td><td class="l">10<sup>${b[i][0]}</sup></td><td>${b[i][2]} <span class="ltr">${b[i][1]}</span></td><td class="l">${b[i][3]}</td></tr>`).join('')}</tbody></table></div><p class="sub" style="text-align:center">الجدول <span class="ltr">(1-3)</span>: البادئات التي يمكن إضافتها قبل وحدات النظام الدولي للقياس <span class="ltr">Prefixes for SI units</span></p>`};
const pow=e=>`10${K.sup(e)}`;
const LADDER=[[12,'T'],[9,'G'],[6,'M'],[3,'k'],[2,'h'],[1,'da'],[0,''],[-1,'d'],[-2,'c'],[-3,'m'],[-6,'µ'],[-9,'n'],[-12,'p']];
function ladderSVG(fromE,toE,unit){const W=420,H=440,x0=150;let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="سلم البادئات">`;
 const y=i=>24+i*31;
 LADDER.forEach(([e,sym],i)=>{const on=e===fromE||e===toE;const name=e===0?'الوحدة نفسها':(PX.find(p=>p[0]===e)||[])[2];
  s+=`<rect x="${x0}" y="${y(i)-13}" width="120" height="26" rx="8" fill="${e===fromE?'var(--blue)':e===toE?'var(--live)':'var(--surface)'}" stroke="var(--line)" stroke-width="1.4"/><text x="${x0+60}" y="${y(i)+5}" text-anchor="middle" font-size="14" font-weight="700" fill="${on?'#fff':'var(--fg)'}" direction="ltr" font-family="var(--mono)">${sym}${unit}</text>`;
  s+=`<text x="${x0-12}" y="${y(i)+5}" text-anchor="end" font-size="12.5" fill="var(--muted)" direction="ltr" font-family="var(--mono)">${pow(e)}</text><text x="${x0+132}" y="${y(i)+5}" text-anchor="start" font-size="12.5" fill="var(--muted)" direction="rtl">${name||''}</text>`});
 const iF=LADDER.findIndex(l=>l[0]===fromE),iT=LADDER.findIndex(l=>l[0]===toE);
 if(iF>=0&&iT>=0&&iF!==iT){const xa=x0+128+(iF<iT?0:0);s+=arrowS(x0-70,y(iF),x0-70,y(iT),'var(--live)',3);s+=`<text x="${x0-80}" y="${(y(iF)+y(iT))/2+5}" text-anchor="end" font-size="15" font-weight="700" fill="var(--live)" direction="ltr" font-family="var(--mono)">× ${pow(fromE-toE)}</text>`}
 return s+'</svg>'}
function lab13(el,B){
 const units=[['m','المتر'],['g','الجرام'],['A','الأمبير'],['Ω','الأوم'],['s','الثانية']];
 const opt=sel=>LADDER.map(([e,s])=>`<option value="${e}" ${e===sel?'selected':''}>${s||'—'} (${pow(e)})</option>`).join('');
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">سلّم البادئات</h3><p class="sub">مبني على الجدول <span class="ltr">(1-3)</span> وملاحظة 2 ص 8–9. اختر الوحدة والبادئتين واكتب القيمة.</p>
  <div class="ph-row"><span>الوحدة:</span><select class="ph-sel" id="pu">${units.map(([u,n])=>`<option value="${u}">${n} ${u}</option>`).join('')}</select></div>
  <div class="ph-row"><input class="ph-num" id="pv" type="number" step="any" value="3" aria-label="القيمة"><span>من</span><select class="ph-sel" id="pf">${opt(9)}</select><span>إلى</span><select class="ph-sel" id="pt">${opt(0)}</select></div>
  <div id="pres"></div><ol class="ph-try" id="psteps"></ol></div>
 <div class="c6 panel"><div class="pk-pic" id="ppic" style="max-width:420px"></div><p class="pk-ill">الأزرق: البادئة التي تحوّل منها، والبرتقالي: التي تحوّل إليها. السهم يبين معامل الضرب.</p></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>حوّل <span class="ltr">3 Gm</span> إلى المتر (تدريب 1-a ص 9): الناتج <span class="ltr">3 × 10⁹ m</span>.</li>
  <li>حوّل <span class="ltr">100 mA</span> إلى الأمبير (تدريب 2-d): لاحظ أن السهم يصعد فيصغر الرقم.</li>
  <li>حوّل <span class="ltr">1000 km</span> إلى <span class="ltr">mm</span>: كم خطوة من خطوات السلم قطعت؟ وكم أُسّاً جمعت؟</li>
  <li>اختر الجرام وحوّل <span class="ltr">99 cg</span> إلى <span class="ltr">ng</span> (تدريب 2-a).</li></ol></div>
 </div></div>`;
 const $=s=>el.querySelector(s);
 const run=()=>{const u=$('#pu').value,v=+$('#pv').value,f=+$('#pf').value,t=+$('#pt').value;if(!isFinite(v))return;
  const sym=e=>(LADDER.find(l=>l[0]===e)||[0,''])[1];const r=v*Math.pow(10,f-t);
  $('#pres').innerHTML=facts([[`<span class="ltr">${v} ${sym(f)}${u} =</span>`,`${fm(r)} ${sym(t)}${u}`,'hi']]);
  $('#psteps').innerHTML=`<li>نستبدل رمز البادئة <span class="ltr">${sym(f)||'(لا يوجد)'}</span> بمعامل ضربها: <span class="ltr">${v} ${sym(f)}${u} = ${v} × ${pow(f)} ${u}</span></li><li>نقسم على معامل البادئة المطلوبة <span class="ltr">${pow(t)}</span>: <span class="ltr">${v} × ${pow(f)} ÷ ${pow(t)} = ${v} × ${pow(f-t)}</span></li><li>الناتج: <span class="ltr">${fm(r)} ${sym(t)}${u}</span></li>`;
  $('#ppic').innerHTML=ladderSVG(f,t,u)};
 ['pu','pv','pf','pt'].forEach(k=>{$('#'+k).addEventListener('input',run);$('#'+k).addEventListener('change',run)});run();
}
const exP=(n,v,fs,fe,ts,te,u)=>({title:`تدريب <span class="ltr">${n}</span>: <span class="ltr">${v} ${fs}${u} ⟶ ${ts}${u}</span>`,ref:'ص 9',q:`<p>حوّل <span class="ltr">${v} ${fs}${u} ⟶ ${ts}${u}</span></p>`,
 given:[{id:'v',label:'القيمة',sym:'x',unit:fs+u,value:v}],
 solve:g=>[{t:`نستبدل رمز البادئة ${fs?`<span class="ltr">${fs}</span>`:''} بمعامل ضربها:`,f:R`${g.v}\ \mathrm{${fs.replace('µ','\\mu ')}${u.replace('Ω','\\Omega')}}=${g.v}\times10^{${fe}}\ \mathrm{${u.replace('Ω','\\Omega')}}`},
  te===0?{t:'المطلوب الوحدة نفسها بلا بادئة، فلا نقسم على شيء.'}:{t:`نقسم على معامل البادئة المطلوبة <span class="ltr">${ts}</span>:`,f:R`${g.v}\times10^{${fe}}\div10^{${te}}=${g.v}\times10^{${fe-te}}`},
  {t:'الناتج:',v:K.ev(g.v*Math.pow(10,fe-te)),unit:ts+u,dp:2,final:true}]});
B.lesson({
 id:'u1-l3',unit:1,order:3,pages:'8–9',
 title:'بادئات النظام الدولي',
 summary:'أجزاء الوحدات ومضاعفاتها (البادئات) في الجدول (1-3)، وطريقة كتابة البادئة مع الوحدة، والتحويل باستبدال رمز البادئة بمعامل ضربها.',
 theory:[
  {h:'بادئات النظام الدولي: أجزاء ومضاعفات النظام الدولي',ref:'ص 8',html:`<p>جميع وحدات القياس الدولية المتفق عليها، سواء الوحدات الأساسية أو المشتقة، لها أجزاء ومضاعفات يمكن إجمالها بالجدول <span class="ltr">(1-3)</span>، وسميت بادئات لأنها تسبق وحدات القياس الأساسية أو المشتقة.</p>${pTable()}`},
  {note:'<b>توضيح للمتدرب — ليس من الكتاب:</b> البادئة اختصار لرقم: كلمة «كيلو» تعني ألفاً، فالكيلومتر ألف متر والكيلوجرام ألف جرام. والبادئات التي ستقابلها كثيراً في التخصصات التقنية: جيجا <span class="ltr">G</span>، ميجا <span class="ltr">M</span>، كيلو <span class="ltr">k</span>، سنتي <span class="ltr">c</span>، ملي <span class="ltr">m</span>، مايكرو <span class="ltr">µ</span>، نانو <span class="ltr">n</span>، بيكو <span class="ltr">p</span>.'},
  {h:'ملاحظة 1',ref:'ص 9',html:R`<p>لإضافة البادئة ميجا إلى المتر فإنها تكتب على النحو الآتي: <span class="ltr">(Mm)</span>. لاحظ ليس هناك فراغ بين الرمزين، حيث الرمز <span class="ltr">M</span> يشير إلى الميجا، و <span class="ltr">m</span> يشير إلى المتر.</p><p>ومن الجدول فإن:</p>$$1\ \mathrm{Mm}=10^{6}\ \mathrm{m}\qquad 1\ \mathrm{km}=10^{3}\ \mathrm{m}\qquad 1\ \mathrm{mm}=10^{-3}\ \mathrm{m}$$`},
  {note:'<b>توضيح للمتدرب — ليس من الكتاب:</b> انتبه لحالة الحرف: <span class="ltr">Mm</span> (ميجامتر = مليون متر) تختلف تماماً عن <span class="ltr">mm</span> (ملليمتر = جزء من ألف من المتر). و <span class="ltr">m</span> الأولى في <span class="ltr">mm</span> بادئة «ملي» والثانية وحدة «المتر».'},
  {h:'ملاحظة 2',ref:'ص 9',html:`<p>لعلك لاحظت أنه بمجرد التحويل من البادئة إلى وحدة القياس في النظام الدولي فإنه يستبدل رمز البادئة بمعامل الضرب الخاص بها.</p>`},
  {note:R`<b>توضيح للمتدرب — ليس من الكتاب:</b> للتحويل بين بادئتين: نستبدل البادئة الأولى بمعاملها، ثم نقسم على معامل البادئة المطلوبة. مثال: \(5\ \mathrm{km}\to\mathrm{cm}\): \(5\times10^{3}\div10^{-2}=5\times10^{5}\ \mathrm{cm}\). وعند القسمة على قوة للعشرة نطرح الأُسّين: \(3-(-2)=5\).`},
  {h:'تدريبات',ref:'ص 9',html:`<p><b>تدريب 1:</b> حوّل العمليات التالية: <span class="ltr">a- 3 Gm ⟶ m</span>&nbsp;&nbsp;<span class="ltr">b- 17 µm ⟶ m</span></p><p><b>تدريب 2:</b> حوّل العمليات التالية: <span class="ltr">a- 99 cg ⟶ ng</span>&nbsp;&nbsp;<span class="ltr">b- 1000 km ⟶ mm</span>&nbsp;&nbsp;<span class="ltr">c- 9 kΩ ⟶ cΩ</span>&nbsp;&nbsp;<span class="ltr">d- 100 mA ⟶ A</span></p><p class="sub">حلولها المقترحة في تبويب «الأمثلة المحلولة».</p>`}
 ],
 stations:[
  {intro:true},
  {st:1,short:'ما البادئة؟',title:'بادئات النظام الدولي: أجزاء ومضاعفات',q:'لماذا نكتب «5 km» بدل «5000 m»؟ وكيف نكتب سُمك شعرة بالمتر دون أصفار كثيرة؟',ref:'ص 8',
   art:art(`<g data-tip="كيلومتر ⟦km⟧ = ⟦10³ m⟧: مضاعف للمتر."><rect x="40" y="60" width="280" height="44" rx="10" fill="${C.grn}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,89,'1 km = 1000 m',{fs:17,w:700,c:'#fff'})}</g>
    <g data-tip="المتر ⟦m⟧: الوحدة نفسها بلا بادئة."><rect x="100" y="140" width="160" height="40" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,166,'1 m',{fs:17,w:700})}</g>
    <g data-tip="ملليمتر ⟦mm⟧ = ⟦10⁻³ m⟧: جزء من المتر."><rect x="140" y="216" width="80" height="40" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,242,'1 mm',{fs:16,w:700})}</g>
    ${T(52,128,'مضاعفات',{ar:1,a:'start',fs:13,w:700})}${T(52,206,'أجزاء',{ar:1,a:'start',fs:13,w:700})}${arrowS(300,132,300,108,C.ink,2.5)}${arrowS(300,190,300,214,C.ink,2.5)}`,'الكيلومتر مضاعف للمتر والملليمتر جزء منه'),
   cap:'البادئة تكبّر الوحدة أو تصغّرها بقوى العشرة. مرّر المؤشر على الأجزاء (أو المسها في الجوال) لتعرف معناها.',
   side:[{book:'جميع وحدات القياس الدولية المتفق عليها، سواء الوحدات الأساسية أو المشتقة، لها أجزاء ومضاعفات يمكن إجمالها بالجدول (1-3)، وسميت بادئات لأنها تسبق وحدات القياس الأساسية أو المشتقة.',ref:'ص 8'}],
   body:[{book:pTable(),ref:'ص 8'},
    {add:'سرعة معالجات الحاسب تقاس بالجيجاهيرتز <span class="ltr">GHz</span>، وسعة الذاكرة بالجيجابايت، والمكثفات الصغيرة في الدوائر الإلكترونية بالمايكروفاراد <span class="ltr">µF</span> والبيكوفاراد <span class="ltr">pF</span>.',title:'البادئات حولك'},
    {predict:{q:'البادئة «كيلو» <span class="ltr">k</span> معامل ضربها:',opts:[['<span class="ltr">10²</span>',false,'هذا معامل «هكتو» <span class="ltr">h</span>.'],['<span class="ltr">10⁻³</span>',false,'هذا معامل «ملي» <span class="ltr">m</span>.'],['<span class="ltr">10³</span>',true,'كيلو تعني ألفاً: <span class="ltr">1 km = 1000 m</span>.']]}},
    {widget:(el,B)=>K.sort(el,B,{intro:'هل البادئة مضاعف (أكبر من الوحدة) أم جزء (أصغر منها)؟',cats:['مضاعف','جزء'],items:[['ميجا <span class="ltr">M</span>',0,'<span class="ltr">10⁶</span>: مليون ضعف.'],['مايكرو <span class="ltr">µ</span>',1,'<span class="ltr">10⁻⁶</span>: جزء من مليون.'],['سنتي <span class="ltr">c</span>',1,'<span class="ltr">10⁻²</span>: جزء من مئة.'],['جيجا <span class="ltr">G</span>',0,'<span class="ltr">10⁹</span>: مليار ضعف.']]}),title:'مختبر مصغّر: مضاعف أم جزء؟'}]},
  {st:2,short:'كتابة البادئة',title:'ملاحظة 1: كتابة البادئة مع الوحدة',q:'ما الفرق بين Mm و mm؟ حرف واحد كبير أو صغير، فهل يهم؟',ref:'ص 9',
   art:art(`<g data-tip="⟦M⟧: رمز البادئة ميجا ⟦10⁶⟧."><rect x="90" y="100" width="80" height="80" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(130,155,'M',{fs:40,w:700})}</g>
    <g data-tip="⟦m⟧: رمز وحدة المتر."><rect x="190" y="100" width="80" height="80" rx="12" fill="${C.grn}" stroke="${C.ink}" stroke-width="2.5"/>${TL(230,155,'m',{fs:40,w:700,c:'#fff'})}</g>
    ${T(180,82,'بلا فراغ بين الرمزين',{ar:1,fs:13,w:700})}${T(130,206,'البادئة',{ar:1,fs:13})}${T(230,206,'الوحدة',{ar:1,fs:13})}${TL(180,250,'1 Mm = 10⁶ m',{fs:17,w:700})}`,'الرمز M للبادئة ميجا بجانب الرمز m للمتر'),
   cap:'رمز البادئة يلتصق برمز الوحدة. مرّر المؤشر على كل رمز (أو المسه في الجوال).',
   side:[{book:R`لإضافة البادئة ميجا إلى المتر فإنها تكتب على النحو الآتي: (Mm). لاحظ ليس هناك فراغ بين الرمزين، حيث الرمز M يشير إلى الميجا، و m يشير إلى المتر. ومن الجدول فإن: \(1\ \mathrm{Mm}=10^{6}\ \mathrm{m}\)، \(1\ \mathrm{km}=10^{3}\ \mathrm{m}\)، \(1\ \mathrm{mm}=10^{-3}\ \mathrm{m}\).`,ref:'ص 9'}],
   body:[{watch:'<span class="ltr">Mm</span> ميجامتر (مليون متر)، و <span class="ltr">mm</span> ملليمتر (جزء من ألف من المتر): الفرق بينهما <span class="ltr">10⁹</span> مرة بسبب حالة حرف واحد.'},
    {widget:(el,B)=>K.cases(el,B,{intro:'ماذا يعني كل رمز؟',cases:[
     {q:'<span class="ltr">mA</span>',opts:[['ميجا أمبير',false,'الميجا رمزها <span class="ltr">M</span> كبيرة.'],['ملي أمبير',true,'<span class="ltr">m</span> الصغيرة قبل الوحدة بادئة «ملي» <span class="ltr">10⁻³</span>.'],['متر أمبير',false,'المتر لا يكتب قبل وحدة أخرى بهذا الشكل.']]},
     {q:'<span class="ltr">kΩ</span>',opts:[['كيلو أوم',true,'<span class="ltr">k</span> بادئة كيلو <span class="ltr">10³</span> و <span class="ltr">Ω</span> وحدة الأوم.'],['كلفن أوم',false,'الكلفن <span class="ltr">K</span> كبيرة ووحدة لا بادئة.'],['كيلوجرام أوم',false,'لا يوجد هنا جرام.']]}]}),title:'مختبر مصغّر: اقرأ الرمز'}]},
  {st:3,short:'التحويل بالبادئات',title:'ملاحظة 2: استبدال رمز البادئة بمعامل ضربها',q:'كيف نحوّل 3 Gm إلى متر بخطوة واحدة؟',ref:'ص 9',
   art:art(`<rect x="40" y="70" width="120" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(100,102,'3 Gm',{fs:20,w:700})}
    ${arrowS(165,95,205,95,C.ink,3)}<g data-tip="نستبدل الرمز ⟦G⟧ بمعامل ضربه ⟦10⁹⟧."><rect x="210" y="70" width="120" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(270,102,'3 × 10⁹ m',{fs:17,w:700})}</g>
    <rect x="40" y="190" width="120" height="50" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(100,222,'100 mA',{fs:19,w:700})}
    ${arrowS(165,215,205,215,C.ink,3)}<g data-tip="نستبدل الرمز ⟦m⟧ (ملي) بمعامل ضربه ⟦10⁻³⟧."><rect x="210" y="190" width="120" height="50" rx="10" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(270,222,'100 × 10⁻³ A',{fs:15,w:700})}</g>${T(270,264,'= 0.1 A',{fs:15,w:700})}`,'استبدال رمز البادئة بمعامل ضربها في مثالين'),
   cap:'رمز البادئة يُستبدل بمعامل ضربه. مرّر المؤشر على النتيجة (أو المسها في الجوال).',
   side:[{book:'لعلك لاحظت أنه بمجرد التحويل من البادئة إلى وحدة القياس في النظام الدولي فإنه يستبدل رمز البادئة بمعامل الضرب الخاص بها.',ref:'ص 9'},
    {book:'تدريب 1: حوّل العمليات التالية <span class="ltr">a- 3 Gm ⟶ m</span> <span class="ltr">b- 17 µm ⟶ m</span>. تدريب 2: حوّل العمليات التالية <span class="ltr">a- 99 cg ⟶ ng</span> <span class="ltr">b- 1000 km ⟶ mm</span> <span class="ltr">c- 9 kΩ ⟶ cΩ</span> <span class="ltr">d- 100 mA ⟶ A</span>',ref:'ص 9'}],
   body:[{tip:R`بين بادئتين: \(\text{القيمة}\times\dfrac{\text{معامل البادئة الأولى}}{\text{معامل البادئة المطلوبة}}\). مثال \(1000\ \mathrm{km}\to\mathrm{mm}\): \(10^{3}\times\dfrac{10^{3}}{10^{-3}}=10^{3}\times10^{6}=10^{9}\ \mathrm{mm}\).`},
    {predict:{q:'<span class="ltr">17 µm</span> بالمتر:',opts:[['<span class="ltr">17 × 10⁶ m</span>',false,'المايكرو جزء لا مضاعف، فالأُسّ سالب.'],['<span class="ltr">17 × 10⁻⁶ m</span>',true,'نستبدل <span class="ltr">µ</span> بـ <span class="ltr">10⁻⁶</span>: <span class="ltr">1.7 × 10⁻⁵ m</span>.'],['<span class="ltr">17 × 10⁻³ m</span>',false,'<span class="ltr">10⁻³</span> معامل «ملي» لا «مايكرو».']]}},
    {widget:(el,B)=>K.num(el,B,{intro:'حل بنفسك (يمكنك كتابة الأُسّ هكذا: <span class="ltr">9e5</span> أو <span class="ltr">9×10^5</span>):',items:[
     {q:'<span class="ltr">9 kΩ ⟶ cΩ</span>',ans:9e5,unit:'cΩ',why:R`\(9\times10^{3}\div10^{-2}=9\times10^{5}\ \mathrm{c\Omega}\).`},
     {q:'<span class="ltr">100 mA ⟶ A</span>',ans:0.1,unit:'A',why:R`\(100\times10^{-3}=0.1\ \mathrm{A}\).`}]}),title:'مختبر مصغّر: احسب أنت'}]},
  {recap:['البادئات أجزاء ومضاعفات للوحدات تسبقها، وتجمعها الحقيبة في الجدول (1-3).','رمز البادئة يلتصق برمز الوحدة بلا فراغ: Mm، km، mm.','للتحويل: نستبدل رمز البادئة بمعامل ضربها، ثم نقسم على معامل البادئة المطلوبة.','حالة الحرف مهمة: M ميجا (10⁶) و m ملي (10⁻³).']}
 ],
 lab:lab13,
 examples:[exP('1-a',3,'G',9,'',0,'m'),exP('1-b',17,'µ',-6,'',0,'m'),exP('2-a',99,'c',-2,'n',-9,'g'),exP('2-b',1000,'k',3,'m',-3,'m'),exP('2-c',9,'k',3,'c',-2,'Ω'),exP('2-d',100,'m',-3,'',0,'A')],
 quiz:[
  {q:'المايكرو يعتبر من البادئات وقيمته تساوي:',o:['10⁻⁸','10⁻³','10⁻⁶','10⁶'],c:2,e:'من الجدول (1-3): مايكرو µ = 10⁻⁶ (ورقة العمل الأولى، س2).'},
  {q:'1 km يساوي:',o:['10² m','10³ m','10⁻³ m','10⁶ m'],c:1,e:'كيلو = 10³.'},
  {q:'كيف تكتب «ميجا متر» بالرموز؟',o:['M m','mm','Mm','mM'],c:2,e:'Mm بلا فراغ، والميم الأولى كبيرة.'},
  {q:'3 Gm بالمتر:',o:['3 × 10⁶ m','3 × 10⁹ m','3 × 10⁻⁹ m','3000 m'],c:1,e:'نستبدل G بمعاملها 10⁹.'},
  {q:'100 mA بالأمبير:',o:['100 000 A','0.1 A','10 A','0.01 A'],c:1,e:'100 × 10⁻³ = 0.1 A.'},
  {q:'البادئة التي معامل ضربها 10⁻² :',o:['ملي m','ديسي d','سنتي c','هكتو h'],c:2,e:'سنتي c = 10⁻².'},
  {q:'400 m بالكيلومتر:',o:['0.4 km','4 km','400 000 km','40 km'],c:0,e:'400 ÷ 10³ = 0.4 km (ورقة العمل الأولى، س4).'}
 ]
});

/* =================== الدرس 1.4 — الكميات القياسية والكميات المتجهة وتمثيل المتجه =================== */
function gridSVG(o){/* o: {ax,ay, target:[x,y]|null, n:6} */
 const n=o.n||6,S=300,c=S/2,u=(S-30)/(2*n);const X=x=>c+x*u,Y=y=>c-y*u;
 let s=`<svg viewBox="0 0 ${S} ${S}" role="img" aria-label="مستوى إحداثي" style="max-width:420px;margin:auto;display:block;cursor:crosshair" data-grid>`;
 for(let i=-n;i<=n;i++){s+=`<path d="M${X(i)} ${Y(-n)}V${Y(n)}M${X(-n)} ${Y(i)}H${X(n)}" stroke="var(--line)" stroke-width="${i===0?0:1}"/>`;
  if(i&&i%1===0){s+=`<text x="${X(i)}" y="${c+13}" font-size="9" text-anchor="middle" fill="var(--muted)" font-family="var(--mono)">${i}</text><text x="${c-5}" y="${Y(i)+3}" font-size="9" text-anchor="end" fill="var(--muted)" font-family="var(--mono)">${i}</text>`}}
 s+=`<path d="M${X(-n)} ${c}H${X(n)}M${c} ${Y(-n)}V${Y(n)}" stroke="var(--fg)" stroke-width="1.6"/><text x="${X(n)}" y="${c-6}" font-size="12" text-anchor="end" fill="var(--fg)" font-family="var(--mono)">X</text><text x="${c+6}" y="${Y(n)+10}" font-size="12" fill="var(--fg)" font-family="var(--mono)">Y</text>`;
 if(o.target){const [tx_,ty]=o.target;s+=`<circle cx="${X(tx_)}" cy="${Y(ty)}" r="8" fill="none" stroke="var(--live)" stroke-width="2.4" stroke-dasharray="3 3"/>`}
 if(o.ax||o.ay){s+=`<path d="M${X(o.ax)} ${c}V${Y(o.ay)}M${c} ${Y(o.ay)}H${X(o.ax)}" stroke="var(--muted)" stroke-dasharray="4 3" stroke-width="1.4"/>`;
  s+=arrowS(c,c,X(o.ax),c,'var(--stop)',2.6,9)+arrowS(c,c,c,Y(o.ay),'var(--on)',2.6,9)+arrowS(c,c,X(o.ax),Y(o.ay),'var(--blue)',3.4,12);
  s+=`<text x="${X(o.ax)+(o.ax>=0?6:-6)}" y="${Y(o.ay)+(o.ay>=0?-6:14)}" font-size="12" font-weight="700" fill="var(--blue-ink)" text-anchor="${o.ax>=0?'start':'end'}" font-family="var(--mono)">(${o.ax},${o.ay})</text>`}
 return s+'</svg>'}
function lab14(el,B){
 const TG=[[3,2],[-2,4],[5,-3],[-4,-2],[0,5],[6,1]];let ti=-1,ax=3,ay=2;
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">ارسم المتجه على المستوى الإحداثي</h3><p class="sub">مبني على الشكل ص 12: المتجه <span class="ltr">A = 3î + 2ĵ</span>. اضغط على أي نقطة في الشبكة لتجعلها رأس المتجه.</p>
  <div id="gsvg"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">المتجه الذي رسمته</h3><div id="gres"></div>
  <div class="ph-row"><button class="btn pri" id="gch">تحدَّ نفسك: ارسم متجهاً مطلوباً</button><button class="btn" id="gbk">متجه الكتاب</button></div><div class="pk-fb" id="gfb" style="margin-top:10px"></div>
  <p class="pk-ill">الأحمر: المركبة على محور X، والأخضر: على محور Y، والأزرق: المتجه نفسه. الطول والزاوية إضافة للتوضيح وستدرسهما في الدرس القادم.</p></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>ارسم متجه الكتاب: رأسه عند <span class="ltr">(3,2)</span>، واكتبه بالصيغة <span class="ltr">3î + 2ĵ</span>.</li>
  <li>ارسم متجهاً يتجه إلى اليسار: ماذا تلاحظ في إشارة معامل <span class="ltr">î</span>؟</li>
  <li>ارسم متجهاً على محور Y فقط: ما معامل <span class="ltr">î</span> فيه؟</li>
  <li>اضغط «تحدَّ نفسك» وارسم المتجه المطلوب.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const draw=()=>{$('#gsvg').innerHTML=gridSVG({ax,ay,target:ti>=0?TG[ti]:null});
  const L=Math.hypot(ax,ay),th=Math.atan2(ay,ax)/D2R;const sg=v=>v<0?'− '+(-v):'+ '+v;
  $('#gres').innerHTML=facts([['بصيغة متجهات الوحدة',`A = ${ax}î ${sg(ay)}ĵ`,'hi'],['المركبة على X',`${ax}`],['المركبة على Y',`${ay}`],['طول المتجه',fm(L)],['زاوية الاتجاه من محور X',fm((th+360)%360)+'°']]);
  const svg=$('#gsvg svg');svg.addEventListener('click',e=>{const r=svg.getBoundingClientRect(),S=300,n=6,u=(S-30)/(2*n);const x=(e.clientX-r.left)/r.width*S,y=(e.clientY-r.top)/r.height*S;
   ax=Math.max(-n,Math.min(n,Math.round((x-S/2)/u)));ay=Math.max(-n,Math.min(n,Math.round((S/2-y)/u)));
   if(ti>=0){const ok=ax===TG[ti][0]&&ay===TG[ti][1];$('#gfb').className='pk-fb'+(ok?'':' bad');$('#gfb').innerHTML=ok?'<b>أحسنت!</b> رسمت المتجه المطلوب.':'ليس بعد. تذكّر: معامل <span class="ltr">î</span> هو الإزاحة على محور X، ومعامل <span class="ltr">ĵ</span> على محور Y.'}
   draw()})};
 $('#gch').onclick=()=>{ti=(ti+1)%TG.length;const [a,b]=TG[ti];const sg=v=>v<0?'− '+(-v):'+ '+v;$('#gfb').className='pk-fb';$('#gfb').innerHTML=`ارسم المتجه <span class="ltr">B = ${a}î ${sg(b)}ĵ</span> (الدائرة المنقطة تساعدك).`;draw()};
 $('#gbk').onclick=()=>{ti=-1;ax=3;ay=2;$('#gfb').innerHTML='';draw()};draw();
}
const VQ_S=['المسافة أو الطول','الزمن','الكتلة','الحجم','الكثافة','الطاقة','الشغل','درجة الحرارة'],VQ_V=['القوة','الإزاحة','السرعة','التسارع'];
B.lesson({
 id:'u1-l4',unit:1,order:4,pages:'10–12',
 title:'الكميات القياسية والكميات المتجهة وتمثيل المتجه',
 summary:'الفرق بين الكمية القياسية (مقدار ووحدة) والكمية المتجهة (مقدار واتجاه ووحدة)، وتمثيل المتجه بسهم، وكتابته على المستوى الإحداثي بمتجهات الوحدة î و ĵ.',
 theory:[
  {h:'الكميات القياسية والكميات المتجهة',ref:'ص 10',html:`<p>تقسم الكميات الفيزيائية إلى قسمين رئيسيين هما:</p><ol><li>الكميات القياسية.</li><li>الكميات المتجهة.</li></ol>`},
  {h:'الكميات القياسية',ref:'ص 11',html:`<p>هي الكميات التي يمكن تعيينها تعييناً كاملاً بمعرفة مقدارها ووحدة قياسها فقط، أي لا نحتاج إلى ذكر اتجاه عند تعريف الكميات القياسية، فمثلاً نقول زمن المحاضرة <span class="ltr">50</span> دقيقة، طول المسطرة <span class="ltr">30</span> سم أو كتلة الإناء <span class="ltr">4</span> جرام ... إلخ، كلها كميات ومقادير تعبر عن المقصود بكل دقة من دون الحاجة لتحديد اتجاه.</p>
   <p><b>أمثلة على الكميات القياسية:</b> (${VQ_S.join('، ')} ..).</p><p><b>جمع الكميات القياسية:</b> نستطيع جمع وطرح وقسمة وضرب الكميات القياسية باستخدام القواعد الرياضية البسيطة.</p>`},
  {h:'الكميات المتجهة',ref:'ص 11',html:R`<p>هي الكميات التي يمكن تعيينها تعييناً كاملاً بمعرفة مقدارها واتجاهها ووحدة قياسها، فمثلاً نحن نقول تحركت سيارة بسرعة \(80\ \mathrm{km/h}\) نحو الشمال، أي إن السرعة توصف بمقدار واتجاه معاً، لذلك نقول عن السرعة أنها كمية متجهة.</p>
   <p><b>أمثلة على الكميات المتجهة:</b> (${VQ_V.join('، ')} ... إلخ).</p><p><b>ملاحظة:</b> السرعة يمكن أن تكون قياسية في حالة لم يذكر الاتجاه.</p>`},
  {note:'<b>توضيح للمتدرب — ليس من الكتاب:</b> المقصود بالملاحظة أن «مقدار السرعة» وحده (قراءة عداد السيارة مثلاً <span class="ltr">80 km/h</span> دون اتجاه) كمية قياسية، ويسميه بعضهم «الوَتيرة» أو «مقدار السرعة»، أما السرعة بمقدارها واتجاهها فكمية متجهة. ومثلها المسافة (قياسية) والإزاحة (متجهة) كما سترى في الوحدة الثانية.'},
  {h:'تمثيل الكمية المتجهة',ref:'ص 12',html:R`<p>نمثل الكمية المتجهة بسهم يدل طوله على مقدار الكمية المتجهة، ويدل اتجاهه على اتجاه الكمية المتجهة.</p><p>تظهر في الشكل كمية متجهة مقدارها = <span class="ltr">4</span> وحدات، زاوية اتجاهها = <span class="ltr">30</span> درجة.</p>
   <p><b>ملاحظة:</b> نميز الكمية المتجهة عن القياسية وذلك بكتابة المتجهة بخط عريض \(\mathbf{A}\) أو بكتابة سهم أعلى الرمز \(\vec{A}\).</p>`},
  {fig:'',html:`<svg viewBox="0 -14 360 184" role="img" aria-label="سهم طوله 4 وحدات بزاوية 30 درجة" style="max-width:420px;margin:auto;display:block"><path d="M40 140H330" stroke="var(--muted)" stroke-dasharray="5 4" stroke-width="1.5"/>${[0,1,2,3,4].map(i=>`<circle cx="${(40+i*65*Math.cos(30*D2R)).toFixed(1)}" cy="${(140-i*65*Math.sin(30*D2R)).toFixed(1)}" r="2.5" fill="var(--fg)"/>`).join('')}${arrowS(40,140,40+260*Math.cos(30*D2R),140-260*Math.sin(30*D2R),'var(--blue)',3.4)}<path d="M100 140A60 60 0 0 0 92 110" fill="none" stroke="var(--fg)" stroke-width="1.6"/><text x="108" y="128" font-size="13" fill="var(--fg)" font-family="var(--mono)">30°</text><text x="${(40+268*Math.cos(30*D2R)).toFixed(0)}" y="${(140-268*Math.sin(30*D2R)).toFixed(0)}" font-size="15" font-weight="700" fill="var(--blue-ink)" font-family="var(--mono)">A</text><text x="200" y="76" font-size="12" fill="var(--muted)" direction="rtl" transform="rotate(-30 200 76)">4 وحدات</text></svg>`,caption:'كمية متجهة مقدارها 4 وحدات وزاوية اتجاهها 30 درجة',ref:'ص 12'},
  {h:'تمثيل المتجه في المستوى الإحداثي',ref:'ص 12',html:R`<p>لتمثيل المتجه الآتي الذي يقطع عند النقطة <span class="ltr">3</span> على محور <span class="ltr">x</span> ويقطع عند النقطة <span class="ltr">2</span> على محور <span class="ltr">y</span> نستخدم القاعدة الآتية:</p>$$\vec{A}=A_x\,\hat{i}+A_y\,\hat{j}$$<p>وسيكون تمثيل المتجه رياضياً كالتالي:</p>$$\vec{A}=3\,\hat{i}+2\,\hat{j}$$<p>حيث أن \(\hat{i}\) و \(\hat{j}\) هي متجهات الوحدة باتجاه <span class="ltr">x</span> و <span class="ltr">y</span>.</p>`},
  {fig:'',html:gridSVG({ax:3,ay:2,n:6}),caption:'المتجه \\(\\vec{A}=3\\hat{i}+2\\hat{j}\\) على المستوى الإحداثي',ref:'ص 12'},
  {note:R`<b>توضيح للمتدرب — ليس من الكتاب:</b> متجه الوحدة طوله واحد ويدل على الاتجاه فقط: \(\hat{i}\) «خطوة واحدة» باتجاه محور x الموجب، و \(\hat{j}\) خطوة باتجاه محور y الموجب. فالمتجه \(3\hat{i}+2\hat{j}\) يعني: ثلاث خطوات يميناً ثم خطوتان إلى أعلى. والإشارة السالبة تعني الاتجاه المعاكس (يساراً أو إلى أسفل).`}
 ],
 stations:[
  {intro:true},
  {st:1,short:'قسمان للكميات',title:'تقسيم الكميات الفيزيائية',q:'إذا قلت لصديقك «امشِ 50 متراً» فقط، هل يعرف إلى أين يصل؟',ref:'ص 10',
   art:art(`<g data-tip="الكميات القياسية: يكفي المقدار والوحدة."><rect x="30" y="100" width="140" height="120" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${T(100,130,'قياسية',{ar:1,w:700,fs:16})}${TL(100,170,'50 min',{fs:16})}${T(100,200,'مقدار + وحدة',{ar:1,fs:12})}</g>
    <g data-tip="الكميات المتجهة: نحتاج المقدار والاتجاه والوحدة."><rect x="190" y="100" width="140" height="120" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${T(260,130,'متجهة',{ar:1,w:700,fs:16})}${arrowS(215,172,305,160,C.red,3.5)}${T(260,200,'مقدار + اتجاه + وحدة',{ar:1,fs:12})}</g>${T(180,80,'الكميات الفيزيائية',{ar:1,w:700,fs:15})}`,'قسمان: كميات قياسية وكميات متجهة'),
   cap:'قسمان رئيسيان للكميات الفيزيائية. مرّر المؤشر على كل قسم (أو المسه في الجوال).',
   side:[{book:'تقسم الكميات الفيزيائية إلى قسمين رئيسيين هما: الكميات القياسية، الكميات المتجهة.',ref:'ص 10'}],
   body:[{predict:{q:'«امشِ <span class="ltr">50 m</span>» دون ذكر اتجاه. هل هذا كافٍ لتحديد المكان الذي تصل إليه؟',opts:[['نعم، 50 متراً تكفي',false,'قد تمشي 50 متراً شمالاً أو جنوباً فتصل إلى مكانين مختلفين.'],['لا، نحتاج الاتجاه أيضاً',true,'المكان الذي تصل إليه يحتاج مقداراً واتجاهاً، أي كمية متجهة.']]}}]},
  {st:2,short:'الكميات القياسية',title:'الكميات القياسية',q:'زمن المحاضرة 50 دقيقة: هل ينقصه شيء ليكون واضحاً تماماً؟',ref:'ص 11',
   art:art(`<g data-tip="الزمن: كمية قياسية ⟦50 min⟧."><circle cx="110" cy="130" r="56" fill="${C.paper}" stroke="${C.ink}" stroke-width="3"/><path d="M110 130V88M110 130l30 16" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>${TL(110,212,'50 min',{fs:15,w:700})}</g>
    <g data-tip="الطول: كمية قياسية ⟦30 cm⟧."><rect x="200" y="96" width="130" height="28" rx="4" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${[0,1,2,3,4,5].map(i=>`<path d="M${212+i*21} 96v10" stroke="${C.ink}" stroke-width="2"/>`).join('')}${TL(265,146,'30 cm',{fs:15,w:700})}</g>
    <g data-tip="الكتلة: كمية قياسية ⟦4 g⟧."><path d="M220 230h90l-12 40h-66z" fill="${C.grn}" stroke="${C.ink}" stroke-width="2.5"/>${TL(265,296,'4 g',{fs:15,w:700})}</g>`,'ساعة وزمن 50 دقيقة، ومسطرة 30 سم، وإناء 4 جرام'),
   cap:'أمثلة الكتاب على الكميات القياسية. مرّر المؤشر على الأشكال (أو المسها في الجوال).',
   side:[{book:'هي الكميات التي يمكن تعيينها تعييناً كاملاً بمعرفة مقدارها ووحدة قياسها فقط، أي لا نحتاج إلى ذكر اتجاه عند تعريف الكميات القياسية، فمثلاً نقول زمن المحاضرة 50 دقيقة، طول المسطرة 30 سم أو كتلة الإناء 4 جرام ... إلخ، كلها كميات ومقادير تعبر عن المقصود بكل دقة من دون الحاجة لتحديد اتجاه.',ref:'ص 11'}],
   body:[{book:`أمثلة على الكميات القياسية: (${VQ_S.join('، ')} ..). جمع الكميات القياسية: نستطيع جمع وطرح وقسمة وضرب الكميات القياسية باستخدام القواعد الرياضية البسيطة.`,ref:'ص 11'},
    {tip:'جمع الكميات القياسية جمع عادي: كتلتان <span class="ltr">3 kg</span> و <span class="ltr">2 kg</span> مجموعهما <span class="ltr">5 kg</span> دائماً. أما المتجهات فجمعها يعتمد على اتجاهاتها كما سترى.'},
    {widget:(el,B)=>K.calc(el,B,{intro:'اجمع كتلتين (كمية قياسية):',ins:[{k:'a',l:'الكتلة الأولى',u:'kg',min:0,max:20,step:1,v:3},{k:'b',l:'الكتلة الثانية',u:'kg',min:0,max:20,step:1,v:2}],calc:s=>({facts:[['المجموع',`${s.a+s.b} kg`,'hi']],note:'لا يهم «اتجاه» الكتلة؛ المجموع جمع حسابي عادي.'})}),title:'مختبر مصغّر: جمع قياسي'}]},
  {st:3,short:'الكميات المتجهة',title:'الكميات المتجهة',q:'سيارتان سرعة كل منهما 80 km/h. هل حركتهما متماثلة دائماً؟',ref:'ص 11',
   art:art(`<g data-tip="سيارة تسير ⟦80 km/h⟧ نحو الشمال."><rect x="80" y="150" width="50" height="80" rx="12" fill="${C.blue}" stroke="${C.ink}" stroke-width="2.5"/>${arrowS(105,145,105,70,C.red,4)}${TL(105,60,'80 km/h',{fs:13,w:700})}${T(105,250,'شمالاً',{ar:1,fs:13,w:700})}</g>
    <g data-tip="سيارة أخرى بالمقدار نفسه ⟦80 km/h⟧ لكن نحو الشرق: حركة مختلفة."><rect x="190" y="170" width="80" height="44" rx="12" fill="${C.grn}" stroke="${C.ink}" stroke-width="2.5"/>${arrowS(276,192,340,192,C.red,4)}${TL(300,170,'80 km/h',{fs:13,w:700})}${T(230,240,'شرقاً',{ar:1,fs:13,w:700})}</g>
    ${T(325,70,'N',{fs:14,w:700})}${arrowS(325,110,325,78,C.ink,2)}`,'سيارتان بالسرعة نفسها في اتجاهين مختلفين'),
   cap:'المقدار نفسه والاتجاه مختلف، فالحركتان مختلفتان. مرّر المؤشر على السيارتين (أو المسهما في الجوال).',
   side:[{book:R`هي الكميات التي يمكن تعيينها تعييناً كاملاً بمعرفة مقدارها واتجاهها ووحدة قياسها، فمثلاً نحن نقول تحركت سيارة بسرعة \(80\ \mathrm{km/h}\) نحو الشمال، أي إن السرعة توصف بمقدار واتجاه معاً، لذلك نقول عن السرعة أنها كمية متجهة.`,ref:'ص 11'}],
   body:[{book:`أمثلة على الكميات المتجهة: (${VQ_V.join('، ')} ... إلخ). ملاحظة: السرعة يمكن أن تكون قياسية في حالة لم يذكر الاتجاه.`,ref:'ص 11'},
    {tip:'معنى الملاحظة: قراءة عداد السيارة <span class="ltr">80 km/h</span> وحدها «مقدار السرعة» وهو كمية قياسية، أما «السرعة نحو الشمال» فمتجهة.'},
    {widget:(el,B)=>K.sort(el,B,{intro:'صنّف كل كمية:',cats:['قياسية','متجهة'],items:[['الكتلة',0,'تكفيها المقدار والوحدة.'],['القوة',1,'القوة دفع أو سحب في اتجاه معين.'],['درجة الحرارة',0,'لا اتجاه لدرجة الحرارة.'],['الإزاحة',1,'الإزاحة تحدد من أين إلى أين، أي باتجاه.'],['الطاقة',0,'من أمثلة الكتاب على الكميات القياسية.'],['التسارع',1,'من أمثلة الكتاب على الكميات المتجهة.']]}),title:'مختبر مصغّر: قياسية أم متجهة؟'}]},
  {st:4,short:'تمثيل المتجه بسهم',title:'تمثيل الكمية المتجهة',q:'كيف يحمل سهم واحد معلومتين: المقدار والاتجاه؟',ref:'ص 12',
   art:art(`${[0,1,2,3,4].map(i=>`<circle cx="${(60+i*55*Math.cos(30*D2R)).toFixed(1)}" cy="${(240-i*55*Math.sin(30*D2R)).toFixed(1)}" r="3.5" fill="${C.ink}"/>`).join('')}<path d="M60 240H320" stroke="${C.ink}" stroke-dasharray="6 4" stroke-width="2"/>
    <g data-tip="طول السهم: يدل على مقدار الكمية المتجهة (⟦4⟧ وحدات)."><path d="M60 240L${(60+220*Math.cos(30*D2R)).toFixed(1)} ${(240-220*Math.sin(30*D2R)).toFixed(1)}" stroke="transparent" stroke-width="20"/>${arrowS(60,240,60+220*Math.cos(30*D2R),240-220*Math.sin(30*D2R),C.red,5)}</g>
    <g data-tip="الزاوية: تدل على اتجاه الكمية المتجهة (⟦30°⟧ مع الأفقي)."><path d="M120 240A60 60 0 0 0 112 210" fill="none" stroke="${C.ink}" stroke-width="2.5"/>${TL(140,228,'30°',{fs:15,w:700})}</g>
    <g data-tip="رمز المتجه: يكتب بخط عريض ⟦A⟧ أو بسهم فوق الرمز."><text x="${(60+232*Math.cos(30*D2R)).toFixed(0)}" y="${(240-232*Math.sin(30*D2R)).toFixed(0)}" font-size="22" font-weight="800" fill="${C.ink}" font-family="var(--mono)">A</text></g>`,'سهم طوله 4 وحدات بزاوية 30 درجة'),
   cap:'طول السهم مقدار، واتجاهه اتجاه. مرّر المؤشر على السهم والزاوية والرمز (أو المسها في الجوال).',
   side:[{book:R`نمثل الكمية المتجهة بسهم يدل طوله على مقدار الكمية المتجهة، ويدل اتجاهه على اتجاه الكمية المتجهة. تظهر في الشكل كمية متجهة مقدارها = 4 وحدات، زاوية اتجاهها = 30 درجة. ملاحظة: نميز الكمية المتجهة عن القياسية وذلك بكتابة المتجهة بخط عريض \(\mathbf{A}\) أو بكتابة سهم أعلى الرمز \(\vec{A}\).`,ref:'ص 12'}],
   body:[{widget:(el,B)=>K.calc(el,B,{intro:'غيّر المقدار والزاوية وشاهد السهم:',ins:[{k:'m',l:'المقدار',u:'وحدة',min:1,max:6,step:1,v:4},{k:'a',l:'زاوية الاتجاه',u:'°',min:0,max:360,step:15,v:30}],calc:s=>{const W=360,H=220,cx=180,cy=110,u=17;const x2=cx+s.m*u*Math.cos(s.a*D2R),y2=cy-s.m*u*Math.sin(s.a*D2R);
     const pic=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="سهم المتجه"><path d="M20 ${cy}H340M${cx} 10V210" stroke="var(--line)" stroke-width="1.4"/>${arrowS(cx,cy,x2,y2,'var(--blue)',3.4)}<path d="M${cx+30} ${cy}A30 30 0 ${s.a>180?1:0} 0 ${(cx+30*Math.cos(s.a*D2R)).toFixed(1)} ${(cy-30*Math.sin(s.a*D2R)).toFixed(1)}" fill="none" stroke="var(--live)" stroke-width="2"/></svg>`;
     return {pic,facts:[['المقدار (طول السهم)',s.m+' وحدات','hi'],['الاتجاه (الزاوية)',s.a+'°','hi']]}}}),title:'مختبر مصغّر: ارسم السهم'},
    {predict:{q:'سهمان: الأول طوله ضعف الثاني وفي الاتجاه نفسه. ماذا نستنتج؟',opts:[['مقدار الأول ضعف مقدار الثاني',true,'طول السهم يدل على المقدار.'],['اتجاه الأول ضعف اتجاه الثاني',false,'الاتجاه لا يتضاعف؛ الطول هو الذي يدل على المقدار.'],['لا يمكن المقارنة',false,'يمكن: الطول يقارن المقادير.']]}}]},
  {st:5,short:'المتجه على المستوى الإحداثي',title:'تمثيل المتجه في المستوى الإحداثي',q:'كيف نكتب سهماً بالأرقام فقط دون رسمه؟',ref:'ص 12',
   art:art(`${[...Array(7)].map((_,i)=>`<path d="M${60+i*40} 60V300M60 ${60+i*40}H300" stroke="#e6cf9f" stroke-width="1.4"/>`).join('')}<path d="M60 260H300M100 60V300" stroke="${C.ink}" stroke-width="2.4"/>
    <g data-tip="المركبة على محور ⟦x⟧: ⟦3⟧ وحدات، ومتجه الوحدة ⟦î⟧ يدل على اتجاه x."><path d="M100 260H220" stroke="${C.red}" stroke-width="5"/>${TL(160,284,'3î',{fs:16,w:700,c:C.red})}</g>
    <g data-tip="المركبة على محور ⟦y⟧: ⟦2⟧ وحدة، ومتجه الوحدة ⟦ĵ⟧ يدل على اتجاه y."><path d="M220 260V180" stroke="${C.grn}" stroke-width="5"/>${TL(244,225,'2ĵ',{fs:16,w:700,c:C.grn})}</g>
    <g data-tip="المتجه ⟦A = 3î + 2ĵ⟧ ورأسه عند النقطة ⟦(3,2)⟧.">${arrowS(100,260,220,180,C.blue,4.5)}${TL(225,170,'(3,2)',{fs:14,w:700})}</g>${TL(300,252,'x',{fs:14,w:700,a:'end'})}${TL(108,74,'y',{fs:14,w:700,a:'start'})}`,'المتجه 3i + 2j على شبكة إحداثية'),
   cap:'المتجه = خطوات على x + خطوات على y. مرّر المؤشر على المركبتين والمتجه (أو المسها في الجوال).',
   side:[{book:R`لتمثيل المتجه الآتي الذي يقطع عند النقطة 3 على محور x ويقطع عند النقطة 2 على محور y نستخدم القاعدة الآتية: \(\vec{A}=A_x\hat{i}+A_y\hat{j}\). وسيكون تمثيل المتجه رياضياً كالتالي: \(\vec{A}=3\hat{i}+2\hat{j}\)، حيث أن \(\hat{i}\) و \(\hat{j}\) هي متجهات الوحدة باتجاه x و y.`,ref:'ص 12'}],
   body:[{tip:R`\(\hat{i}\) خطوة واحدة على محور x، و \(\hat{j}\) خطوة واحدة على محور y. الإشارة السالبة تعني عكس الاتجاه: \(-2\hat{i}\) خطوتان إلى اليسار.`},
    {predict:{q:'متجه رأسه عند النقطة <span class="ltr">(−4, 1)</span>. يكتب:',opts:[[R`\(4\hat{i}+1\hat{j}\)`,false,'الإحداثي x سالب، فلا بد من إشارة سالبة.'],[R`\(-4\hat{i}+1\hat{j}\)`,true,'معامل \\(\\hat{i}\\) هو x = −4، ومعامل \\(\\hat{j}\\) هو y = 1.'],[R`\(1\hat{i}-4\hat{j}\)`,false,'بدّلت المحورين: الرقم الأول دائماً لـ x.']]}},
    {widget:(el,B)=>K.calc(el,B,{intro:'حرّك المركبتين وشاهد المتجه يتغير:',ins:[{k:'x',l:'المركبة على x',min:-6,max:6,step:1,v:3},{k:'y',l:'المركبة على y',min:-6,max:6,step:1,v:2}],calc:s=>({pic:gridSVG({ax:s.x,ay:s.y,n:6}),facts:[['المتجه',`${s.x}î ${s.y<0?'− '+(-s.y):'+ '+s.y}ĵ`,'hi']]})}),title:'مختبر مصغّر: من الأرقام إلى السهم'}]},
  {recap:['الكميات الفيزيائية قسمان: قياسية ومتجهة.','القياسية تتعين بالمقدار والوحدة فقط، وتجمع جمعاً عادياً (الكتلة، الزمن، الطاقة...).','المتجهة تحتاج المقدار والاتجاه والوحدة (القوة، الإزاحة، السرعة، التسارع).','نمثل المتجه بسهم: طوله مقداره واتجاهه اتجاهه، ونكتبه A = Ax î + Ay ĵ.']}
 ],
 lab:lab14,
 quiz:[
  {q:'الكميات التي يمكن تعيينها تعييناً كاملاً بمعرفة مقدارها ووحدة قياسها فقط هي:',o:['الكميات القياسية','الكميات المتجهة','كلاهما'],c:0,e:'تعريف الكميات القياسية ص 11 (ورقة العمل الأولى، س2).'},
  {q:'تعتبر الكتلة من الكميات:',o:['القياسية','المتجهة','كلاهما'],c:0,e:'الكتلة من أمثلة الكميات القياسية.'},
  {q:'أي مما يلي كمية متجهة؟',o:['الزمن','الطاقة','القوة','درجة الحرارة'],c:2,e:'القوة لها مقدار واتجاه.'},
  {q:'في تمثيل المتجه بسهم، طول السهم يدل على:',o:['الاتجاه','المقدار','الوحدة','الزمن'],c:1,e:'الطول للمقدار، والاتجاه للاتجاه.'},
  {q:'المتجه الذي يقطع 3 على محور x و 2 على محور y يكتب:',o:['2î + 3ĵ','3î + 2ĵ','5î','3 + 2'],c:1,e:'A = Ax î + Ay ĵ = 3î + 2ĵ.'},
  {q:'î و ĵ هما:',o:['متجها الوحدة باتجاه x و y','كميتان قياسيتان','وحدتا قياس الطول','زاويتان'],c:0,e:'كما في ص 12.'},
  {q:'«سرعة السيارة 80 km/h» دون ذكر اتجاه تعتبر:',o:['كمية متجهة','كمية قياسية (مقدار السرعة)','ليست كمية فيزيائية'],c:1,e:'حسب ملاحظة الكتاب: السرعة قياسية إذا لم يذكر الاتجاه.'}
 ]
});

/* =================== الدرس 1.5 — تحليل المتجهات والعمليات عليها =================== */
function compSVG(F,ang,ref){/* ref: 'x' الزاوية من المحور الأفقي، 'y' من الرأسي */
 const W=360,H=300,ox=60,oy=250,sc=17;const th=ref==='x'?ang:90-ang;const fx_=F*Math.cos(th*D2R),fy=F*Math.sin(th*D2R);
 const X=ox+fx_*sc,Y=oy-fy*sc;let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="تحليل متجه إلى مركبتيه">`;
 s+=`<path d="M${ox} ${oy}H340M${ox} ${oy}V20" stroke="var(--fg)" stroke-width="1.6"/><text x="340" y="${oy-6}" text-anchor="end" font-size="12" fill="var(--fg)" font-family="var(--mono)">x</text><text x="${ox+6}" y="30" font-size="12" fill="var(--fg)" font-family="var(--mono)">y</text>`;
 s+=`<path d="M${X.toFixed(1)} ${oy}V${Y.toFixed(1)}M${ox} ${Y.toFixed(1)}H${X.toFixed(1)}" stroke="var(--muted)" stroke-dasharray="4 3"/>`;
 s+=arrowS(ox,oy,X,oy,'var(--stop)',3,10)+arrowS(ox,oy,ox,Y,'var(--on)',3,10)+arrowS(ox,oy,X,Y,'var(--blue)',3.6,13);
 const r=46;if(ref==='x')s+=`<path d="M${ox+r} ${oy}A${r} ${r} 0 0 0 ${(ox+r*Math.cos(th*D2R)).toFixed(1)} ${(oy-r*Math.sin(th*D2R)).toFixed(1)}" fill="none" stroke="var(--live)" stroke-width="2.2"/><text x="${ox+r+6}" y="${oy-8}" font-size="13" fill="var(--live)" font-family="var(--mono)">θ=${ang}°</text>`;
 else s+=`<path d="M${ox} ${oy-r}A${r} ${r} 0 0 1 ${(ox+r*Math.cos(th*D2R)).toFixed(1)} ${(oy-r*Math.sin(th*D2R)).toFixed(1)}" fill="none" stroke="var(--live)" stroke-width="2.2"/><text x="${ox+8}" y="${oy-r-8}" font-size="13" fill="var(--live)" font-family="var(--mono)">θ=${ang}°</text>`;
 s+=`<text x="${(ox+X)/2}" y="${oy+18}" text-anchor="middle" font-size="13" font-weight="700" fill="var(--stop)" font-family="var(--mono)">Fx=${fm(fx_)}</text><text x="${ox-6}" y="${((oy+Y)/2).toFixed(1)}" text-anchor="end" font-size="13" font-weight="700" fill="var(--on)" font-family="var(--mono)">Fy=${fm(fy)}</text><text x="${(X+6).toFixed(1)}" y="${(Y-6).toFixed(1)}" font-size="13" font-weight="700" fill="var(--blue-ink)" font-family="var(--mono)">F=${F} N</text>`;
 return s+'</svg>'}
function sumSVG(a,b,op){const W=360,H=300,c=[150,170],u=16;const P=(x,y)=>[c[0]+x*u,c[1]-y*u];
 const r=op==='add'?[a[0]+b[0],a[1]+b[1]]:op==='sub'?[a[0]-b[0],a[1]-b[1]]:op==='bsa'?[b[0]-a[0],b[1]-a[1]]:null;
 let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="جمع المتجهين">`;
 for(let i=-9;i<=12;i++){const [x]=P(i,0);s+=`<path d="M${x} 0V${H}" stroke="var(--line)" stroke-width=".7"/>`}for(let j=-8;j<=10;j++){const [,y]=P(0,j);s+=`<path d="M0 ${y}H${W}" stroke="var(--line)" stroke-width=".7"/>`}
 s+=`<path d="M0 ${c[1]}H${W}M${c[0]} 0V${H}" stroke="var(--fg)" stroke-width="1.3"/>`;
 const A=P(...a),Bp=P(...b);s+=arrowS(c[0],c[1],A[0],A[1],'var(--blue)',3)+`<text x="${A[0]+5}" y="${A[1]-5}" font-size="13" font-weight="700" fill="var(--blue-ink)" font-family="var(--mono)">A</text>`;
 if(op==='add'){const E=P(a[0]+b[0],a[1]+b[1]);s+=arrowS(A[0],A[1],E[0],E[1],'var(--on)',3)+`<text x="${(A[0]+E[0])/2+6}" y="${(A[1]+E[1])/2}" font-size="13" font-weight="700" fill="var(--on)" font-family="var(--mono)">B</text>`}
 else if(op==='sub'){const E=P(a[0]-b[0],a[1]-b[1]);s+=arrowS(c[0],c[1],Bp[0],Bp[1],'var(--on)',2,9)+`<text x="${Bp[0]+5}" y="${Bp[1]-5}" font-size="12" fill="var(--on)" font-family="var(--mono)">B</text>`+arrowS(A[0],A[1],E[0],E[1],'var(--stop)',3)+`<text x="${(A[0]+E[0])/2+6}" y="${(A[1]+E[1])/2}" font-size="13" font-weight="700" fill="var(--stop)" font-family="var(--mono)">−B</text>`}
 else {s+=arrowS(c[0],c[1],Bp[0],Bp[1],'var(--on)',3)+`<text x="${Bp[0]+5}" y="${Bp[1]-5}" font-size="13" font-weight="700" fill="var(--on)" font-family="var(--mono)">B</text>`}
 if(op==='bsa'){const E=P(-a[0],-a[1]);s+=arrowS(Bp[0],Bp[1],Bp[0]+(E[0]-c[0]),Bp[1]+(E[1]-c[1]),'var(--stop)',3)}
 if(r){const E=P(...r);s+=arrowS(c[0],c[1],E[0],E[1],'var(--live)',4,13)+`<text x="${E[0]+6}" y="${E[1]+14}" font-size="13" font-weight="700" fill="var(--live)" font-family="var(--mono)">${op==='add'?'A+B':op==='sub'?'A−B':'B−A'}</text>`}
 return s+'</svg>'}
function lab15(el,B){
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c6 panel"><h3 style="margin-top:0">حلّل المتجه إلى مركبتيه</h3><p class="sub">مبني على قوانين «تحليل المتجهات» ص 13 وتدريب 1. اختر من أين تقاس الزاوية.</p>
  ${seg('rf',[['x','الزاوية من المحور الأفقي x'],['y','الزاوية من المحور الرأسي y']],'x')}
  ${sl('cf','مقدار القوة F (N)',1,14,1,10)}${sl('ca','الزاوية θ',0,90,5,30)}
  <div class="pk-pic" id="cpic"></div><div id="cres"></div><div class="pk-fb" id="cnote" style="margin-top:8px"></div></div>
 <div class="c6 panel"><h3 style="margin-top:0">اجمع واطرح واضرب المتجهين</h3><p class="sub">مبني على تدريبي ص 14: <span class="ltr">A = 3î + 2ĵ</span> و <span class="ltr">B = 4î + 5ĵ</span>. غيّر المركبات إن شئت.</p>
  <div class="grid" style="gap:0 12px"><div class="c6">${sl('ax','Ax',-6,6,1,3)}${sl('ay','Ay',-6,6,1,2)}</div><div class="c6">${sl('bx','Bx',-6,6,1,4)}${sl('by','By',-6,6,1,5)}</div></div>
  ${seg('op',[['add','A + B'],['sub','A − B'],['bsa','B − A'],['dot','A · B']],'add')}
  <div class="pk-pic" id="spic"></div><div id="sres"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try">
  <li>اضبط <span class="ltr">F = 10 N</span> و <span class="ltr">θ = 30°</span> من المحور الأفقي (الشكل الثاني في تدريب 1): <span class="ltr">Fx = 8.66 N</span> و <span class="ltr">Fy = 5 N</span>.</li>
  <li>اضبط <span class="ltr">F = 12 N</span> و <span class="ltr">θ = 50°</span> واختر «من المحور الرأسي» كما في الشكل الأول: لاحظ أن الجيب وجيب التمام يتبادلان.</li>
  <li>قارن <span class="ltr">A − B</span> مع <span class="ltr">B − A</span>: المقدار نفسه والاتجاه معاكس، أي أن <span class="ltr">A − B ≠ B − A</span>.</li>
  <li>اجعل <span class="ltr">A = 3î</span> و <span class="ltr">B = 4ĵ</span> واضغط <span class="ltr">A · B</span>: الناتج صفر لأن المتجهين متعامدان.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let rf='x',op='add';
 const c1=()=>{const F=+$('#cf').value,a=+$('#ca').value;$('#cf-v').textContent=F+' N';$('#ca-v').textContent=a+'°';
  const th=rf==='x'?a:90-a;const fx_=F*Math.cos(th*D2R),fy=F*Math.sin(th*D2R);$('#cpic').innerHTML=compSVG(F,a,rf);
  $('#cres').innerHTML=facts([['Fx (الأفقية)',fm(fx_)+' N','hi'],['Fy (الرأسية)',fm(fy)+' N','hi'],['تحقق: <span class="ltr">√(Fx²+Fy²)</span>',fm(Math.hypot(fx_,fy))+' N']]);
  $('#cnote').innerHTML=rf==='x'?R`الزاوية من المحور الأفقي: \(F_x=F\cos\theta\) و \(F_y=F\sin\theta\) كما في قوانين الكتاب.`:R`الزاوية من المحور الرأسي: تنعكس الدالتان: \(F_x=F\sin\theta\) و \(F_y=F\cos\theta\)، لأن الزاوية مع الأفقي تساوي \(90°-\theta\).`;K.fin($('#cnote'),B)};
 const c2=()=>{const a=[+$('#ax').value,+$('#ay').value],b=[+$('#bx').value,+$('#by').value];['ax','ay','bx','by'].forEach(k=>$('#'+k+'-v').textContent=$('#'+k).value);
  $('#spic').innerHTML=sumSVG(a,b,op);const vs=(x,y)=>`${x}î ${y<0?'− '+(-y):'+ '+y}ĵ`;
  if(op==='dot'){const d=a[0]*b[0]+a[1]*b[1];$('#sres').innerHTML=facts([['A · B = AxBx + AyBy',`${a[0]}×${b[0]} + ${a[1]}×${b[1]} = ${d}`,'hi']])}
  else{const r=op==='add'?[a[0]+b[0],a[1]+b[1]]:op==='sub'?[a[0]-b[0],a[1]-b[1]]:[b[0]-a[0],b[1]-a[1]];$('#sres').innerHTML=facts([[op==='add'?'A + B':op==='sub'?'A − B':'B − A',vs(...r),'hi'],['المقدار',fm(Math.hypot(...r))]])}};
 segBind(el,'rf',v=>{rf=v;c1()});segBind(el,'op',v=>{op=v;c2()});['cf','ca'].forEach(k=>$('#'+k).addEventListener('input',c1));['ax','ay','bx','by'].forEach(k=>$('#'+k).addEventListener('input',c2));c1();c2();
}
B.lesson({
 id:'u1-l5',unit:1,order:5,pages:'13–14',
 title:'تحليل المتجهات وجمعها وطرحها والضرب القياسي',
 summary:'تجزئة المتجه إلى مركبتيه السينية والصادية (<span class="ltr">Ax = A cosθ</span> و <span class="ltr">Ay = A sinθ</span>)، وحساب طوله وزاويته، وجمع المتجهات وطرحها، والضرب القياسي لمتجهين.',
 theory:[
  {h:'تحليل المتجهات',ref:'ص 13',html:R`<p>هي عملية تجزئة المتجه إلى مركبتيه السينية والصادية.</p>
   <div class="tbx"><table class="tt"><tbody><tr><td>المركبة باتجاه x</td><td>\(A_x=A\cos\theta\)</td></tr><tr><td>المركبة باتجاه y</td><td>\(A_y=A\sin\theta\)</td></tr><tr><td>طول المتجه</td><td>\(A=\sqrt{A_x^2+A_y^2}\)</td></tr><tr><td>زاوية المتجه</td><td>\(\theta=\tan^{-1}\left(\dfrac{A_y}{A_x}\right)\)</td></tr></tbody></table></div>`},
  {fig:'',html:compSVG(10,30,'x'),caption:'تحليل المتجه إلى مركبتيه: الزاوية θ مقاسة من المحور x',ref:'ص 13'},
  {note:R`<b>توضيح للمتدرب — ليس من الكتاب:</b> القانونان \(A_x=A\cos\theta\) و \(A_y=A\sin\theta\) صحيحان عندما تكون الزاوية \(\theta\) مقاسة من <b>المحور الأفقي x</b> كما في الشكل. فإذا أعطيت الزاوية من المحور الرأسي y تتبادل الدالتان: \(A_x=A\sin\theta\) و \(A_y=A\cos\theta\). لذلك انظر دائماً إلى الرسم قبل التعويض. واضبط الحاسبة على الدرجات (<span class="ltr">D</span> أو <span class="ltr">DEG</span>).`},
  {h:'تدريب 1',ref:'ص 13',html:`<p>من خلال الشكل التالي أوجد مركبات المتجه:</p>`},
  {fig:'',html:`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center"><div style="flex:1 1 260px;max-width:340px">${compSVG(12,50,'y')}</div><div style="flex:1 1 260px;max-width:340px">${compSVG(10,30,'x')}</div></div>`,caption:'الشكل الأول: <span class="ltr">F = 12 N</span> والزاوية <span class="ltr">50°</span> مرسومة من المحور الرأسي. الشكل الثاني: <span class="ltr">F = 10 N</span> والزاوية <span class="ltr">30°</span> من المحور الأفقي. (رسمنا المركبتين للتوضيح)',ref:'ص 13'},
  {h:'جمع المتجهات وطرحها',ref:'ص 14',html:R`<p>عند الجمع والطرح نتبع قواعد الرياضيات الأساسية البسيطة حيث أن:</p>$$\vec{A}+\vec{B}=\vec{B}+\vec{A}\qquad,\qquad \vec{A}-\vec{B}\neq\vec{B}-\vec{A}$$<p><b>تدريب 2:</b> أوجد حاصل الجمع والطرح للمتجهين: \(\vec{A}=3\hat{i}+2\hat{j}\ ,\ \vec{B}=4\hat{i}+5\hat{j}\)</p>`},
  {note:R`<b>توضيح للمتدرب — ليس من الكتاب:</b> نجمع مركبات x معاً ومركبات y معاً: \(\vec{A}+\vec{B}=(A_x+B_x)\hat{i}+(A_y+B_y)\hat{j}\)، وكذلك الطرح. لا نجمع \(\hat{i}\) مع \(\hat{j}\) لأنهما في اتجاهين مختلفين.`},
  {h:'الضرب القياسي',ref:'ص 14',html:R`<p>عند الضرب القياسي نقوم بضرب المتجهات ضرباً اعتيادياً مع مراعاة أن:</p>$$\hat{i}\cdot\hat{i}=1\quad,\quad\hat{j}\cdot\hat{j}=1\quad,\quad\hat{i}\cdot\hat{j}=0\quad,\quad\hat{j}\cdot\hat{i}=0$$<p><b>تدريب 3:</b> أوجد حاصل الضرب القياسي للمتجهين: \(\vec{A}=3\hat{i}+2\hat{j}\ ,\ \vec{B}=4\hat{i}+5\hat{j}\)</p>`},
  {err:'رُقّم تدريب الضرب القياسي في الحقيبة «تدريب 2» مرة ثانية، والصحيح أنه التدريب الثالث في الدرس، فرقّمناه «تدريب 3».'},
  {note:R`<b>توضيح للمتدرب — ليس من الكتاب:</b> ناتج الضرب القياسي <b>رقم</b> (كمية قياسية) لا متجه، ولهذا سمي «قياسياً». وعند فك الأقواس تختفي الحدود التي فيها \(\hat{i}\cdot\hat{j}\) لأنها صفر، فيبقى: \(\vec{A}\cdot\vec{B}=A_xB_x+A_yB_y\). وسترى في الوحدة الثانية أن الشغل حاصل ضرب قياسي للقوة والإزاحة.`}
 ],
 stations:[
  {intro:true},
  {st:1,short:'تحليل المتجه',title:'تحليل المتجهات',q:'حبل يسحب صندوقاً بزاوية مائلة: كم من هذا السحب يحرك الصندوق أفقياً؟',ref:'ص 13',
   art:art(`<path d="M50 260H320M70 270V60" stroke="${C.ink}" stroke-width="2.5"/>
    <g data-tip="المركبة الأفقية ⟦Ax = A cosθ⟧."><path d="M70 260H250" stroke="${C.red}" stroke-width="5"/>${TL(160,288,'Ax = A cosθ',{fs:14,w:700,c:C.red})}</g>
    <g data-tip="المركبة الرأسية ⟦Ay = A sinθ⟧."><path d="M250 260V140" stroke="${C.grn}" stroke-width="5" stroke-dasharray="7 4"/>${TL(258,206,'Ay = A sinθ',{fs:14,w:700,c:C.grn,a:'start'})}</g>
    <g data-tip="المتجه ⟦A⟧: طوله ⟦√(Ax² + Ay²)⟧.">${arrowS(70,260,250,140,C.blue,5)}${TL(150,180,'A',{fs:20,w:800})}</g>
    <g data-tip="الزاوية ⟦θ⟧ مقاسة من المحور الأفقي، و ⟦θ = tan⁻¹(Ay/Ax)⟧."><path d="M125 260A55 55 0 0 0 116 230" fill="none" stroke="${C.ink}" stroke-width="2.5"/>${TL(135,250,'θ',{fs:16,w:700})}</g>`,'متجه وزاويته ومركبتاه الأفقية والرأسية'),
   cap:'المتجه = مركبة أفقية + مركبة رأسية. مرّر المؤشر على الأجزاء (أو المسها في الجوال) لتعرف قانون كل منها.',
   side:[{book:R`تحليل المتجهات: هي عملية تجزئة المتجه إلى مركبتيه السينية والصادية. حيث: المركبة باتجاه x: \(A_x=A\cos\theta\)، المركبة باتجاه y: \(A_y=A\sin\theta\)، طول المتجه: \(A=\sqrt{A_x^2+A_y^2}\)، زاوية المتجه: \(\theta=\tan^{-1}\left(\dfrac{A_y}{A_x}\right)\).`,ref:'ص 13'},{book:'تدريب 1: من خلال الشكل التالي أوجد مركبات المتجه؟ (الشكل الأول: <span class="ltr">F = 12 N</span>، <span class="ltr">θ = 50°</span>. الشكل الثاني: <span class="ltr">F = 10 N</span>، <span class="ltr">θ = 30°</span>)',ref:'ص 13'}],
   body:[{watch:R`في الشكل الأول من تدريب 1 رُسمت الزاوية \(50°\) بين القوة والمحور <b>الرأسي</b>، فالمركبة الأفقية \(12\sin50°=9.19\ \mathrm{N}\) والرأسية \(12\cos50°=7.71\ \mathrm{N}\). القانون \(A_x=A\cos\theta\) يخص الزاوية من المحور الأفقي.`},
    {predict:{q:R`قوة \(10\ \mathrm{N}\) بزاوية \(30°\) مع الأفقي. مركبتها الأفقية:`,opts:[[R`\(5\ \mathrm{N}\)`,false,R`هذه المركبة الرأسية \(10\sin30°\).`],[R`\(8.66\ \mathrm{N}\)`,true,R`\(F_x=10\cos30°=8.66\ \mathrm{N}\).`],[R`\(10\ \mathrm{N}\)`,false,'المركبة أصغر من المتجه نفسه ما دامت الزاوية ليست صفراً.']]}},
    {widget:(el,B)=>K.calc(el,B,{intro:'غيّر الزاوية وشاهد كيف تتقاسم المركبتان القوة:',ins:[{k:'F',l:'مقدار القوة',u:'N',min:1,max:14,step:1,v:10},{k:'a',l:'الزاوية مع الأفقي θ',u:'°',min:0,max:90,step:5,v:30}],calc:s=>{const fx_=s.F*Math.cos(s.a*D2R),fy=s.F*Math.sin(s.a*D2R);return {pic:compSVG(s.F,s.a,'x'),facts:[['Fx = F cosθ',fm(fx_)+' N','hi'],['Fy = F sinθ',fm(fy)+' N','hi']],note:s.a===0?'الزاوية صفر: القوة كلها أفقية.':s.a===90?'الزاوية 90°: القوة كلها رأسية.':s.a===45?'عند 45° تتساوى المركبتان.':''}}}),title:'مختبر مصغّر: حلّل القوة'}]},
  {st:2,short:'الجمع والطرح',title:'جمع المتجهات وطرحها',q:'هل يهم ترتيب المتجهين عند الجمع؟ وعند الطرح؟',ref:'ص 14',
   art:art(`<path d="M60 270H330M70 280V50" stroke="${C.ink}" stroke-width="2"/>
    <g data-tip="المتجه ⟦A = 3î + 2ĵ⟧.">${arrowS(70,270,160,210,C.blue,4.5)}${TL(110,228,'A',{fs:17,w:800})}</g>
    <g data-tip="المتجه ⟦B = 4î + 5ĵ⟧ يبدأ من رأس ⟦A⟧.">${arrowS(160,210,280,60,C.grn,4.5)}${TL(236,140,'B',{fs:17,w:800,a:'start'})}</g>
    <g data-tip="المحصلة ⟦A + B = 7î + 7ĵ⟧: من بداية الأول إلى نهاية الثاني.">${arrowS(70,270,280,60,C.red,4.5)}${TL(150,150,'A+B',{fs:16,w:800,c:C.red})}</g>`,'جمع متجهين بطريقة الرأس والذيل'),
   cap:'نضع ذيل B على رأس A، والمحصلة من بداية A إلى نهاية B. مرّر المؤشر على الأسهم (أو المسها في الجوال).',
   side:[{book:R`عند الجمع والطرح نتبع قواعد الرياضيات الأساسية البسيطة حيث أن: \(\vec{A}+\vec{B}=\vec{B}+\vec{A}\)، \(\vec{A}-\vec{B}\neq\vec{B}-\vec{A}\). تدريب 2: أوجد حاصل الجمع والطرح للمتجهين: \(\vec{A}=3\hat{i}+2\hat{j}\)، \(\vec{B}=4\hat{i}+5\hat{j}\).`,ref:'ص 14'}],
   body:[{tip:R`نجمع كل مركبة مع نظيرتها: \((3+4)\hat{i}+(2+5)\hat{j}=7\hat{i}+7\hat{j}\). وفي الطرح: \((3-4)\hat{i}+(2-5)\hat{j}=-\hat{i}-3\hat{j}\).`},
    {predict:{q:R`إذا كان \(\vec{A}-\vec{B}=-\hat{i}-3\hat{j}\) فإن \(\vec{B}-\vec{A}\) يساوي:`,opts:[[R`\(-\hat{i}-3\hat{j}\)`,false,'الطرح ليس تبادلياً، فلا يبقى الناتج نفسه.'],[R`\(\hat{i}+3\hat{j}\)`,true,'المقدار نفسه والاتجاه معاكس: تنعكس الإشارات.'],[R`\(7\hat{i}+7\hat{j}\)`,false,'هذا ناتج الجمع.']]}},
    {widget:(el,B)=>K.calc(el,B,{intro:'اختر العملية على متجهي الكتاب:',segs:[{k:'op',l:'العملية',opts:[['add','A + B'],['sub','A − B'],['bsa','B − A']],v:'add'}],calc:s=>{const a=[3,2],b=[4,5];const r=s.op==='add'?[7,7]:s.op==='sub'?[-1,-3]:[1,3];return {pic:sumSVG(a,b,s.op),facts:[['الناتج',`${r[0]}î ${r[1]<0?'− '+(-r[1]):'+ '+r[1]}ĵ`,'hi'],['المقدار',fm(Math.hypot(...r))]]}}}),title:'مختبر مصغّر: الجمع والطرح بالرسم'}]},
  {st:3,short:'الضرب القياسي',title:'الضرب القياسي',q:'إذا ضربنا متجهين ضرباً قياسياً، هل يكون الناتج متجهاً أم رقماً؟',ref:'ص 14',
   art:art(`<g data-tip="⟦î · î = 1⟧ و ⟦ĵ · ĵ = 1⟧: المتجه مع نفسه."><rect x="40" y="70" width="130" height="80" rx="12" fill="${C.grn}" stroke="${C.ink}" stroke-width="2.5"/>${TL(105,104,'î · î = 1',{fs:16,w:700,c:'#fff'})}${TL(105,132,'ĵ · ĵ = 1',{fs:16,w:700,c:'#fff'})}</g>
    <g data-tip="⟦î · ĵ = 0⟧: متجها الوحدة متعامدان."><rect x="190" y="70" width="130" height="80" rx="12" fill="${C.paper}" stroke="${C.ink}" stroke-width="2.5"/>${TL(255,104,'î · ĵ = 0',{fs:16,w:700})}${TL(255,132,'ĵ · î = 0',{fs:16,w:700})}</g>
    <g data-tip="الناتج رقم: ⟦A · B = AxBx + AyBy⟧."><rect x="50" y="190" width="260" height="70" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2.5"/>${TL(180,222,'A · B = 3×4 + 2×5',{fs:15,w:700})}${TL(180,248,'= 22',{fs:18,w:800})}</g>`,'قواعد الضرب القياسي لمتجهات الوحدة'),
   cap:'قواعد الضرب القياسي، وتطبيقها على متجهي الكتاب. مرّر المؤشر على البطاقات (أو المسها في الجوال).',
   side:[{book:R`عند الضرب القياسي نقوم بضرب المتجهات ضرباً اعتيادياً مع مراعاة أن: \(\hat{i}\cdot\hat{i}=1\)، \(\hat{j}\cdot\hat{j}=1\)، \(\hat{i}\cdot\hat{j}=0\)، \(\hat{j}\cdot\hat{i}=0\). تدريب 3: أوجد حاصل الضرب القياسي للمتجهين: \(\vec{A}=3\hat{i}+2\hat{j}\)، \(\vec{B}=4\hat{i}+5\hat{j}\).`,ref:'ص 14'}],
   body:[{watch:'رُقّم هذا التدريب في الحقيبة «تدريب 2» مرة ثانية، والصحيح أنه التدريب الثالث.',fix:true},
    {tip:R`نفك الأقواس: \((3\hat{i}+2\hat{j})\cdot(4\hat{i}+5\hat{j})=12\,\hat{i}\cdot\hat{i}+15\,\hat{i}\cdot\hat{j}+8\,\hat{j}\cdot\hat{i}+10\,\hat{j}\cdot\hat{j}=12+0+0+10=22\).`},
    {predict:{q:R`\(\vec{A}=3\hat{i}\) و \(\vec{B}=4\hat{j}\). حاصل ضربهما القياسي:`,opts:[['<span class="ltr">12</span>',false,R`\(\hat{i}\cdot\hat{j}=0\) فلا يبقى 12.`],['<span class="ltr">0</span>',true,'المتجهان متعامدان، فالضرب القياسي صفر.'],['<span class="ltr">7</span>',false,'لا نجمع المعاملات في الضرب القياسي.']]}},
    {widget:(el,B)=>K.num(el,B,{intro:'احسب بنفسك:',items:[{q:R`\(\vec{A}=2\hat{i}-\hat{j}\) و \(\vec{B}=3\hat{i}+4\hat{j}\). أوجد \(\vec{A}\cdot\vec{B}\)`,ans:2,unit:'',why:R`\(2\times3+(-1)\times4=6-4=2\).`}]}),title:'مختبر مصغّر: احسب الضرب القياسي'}]},
  {recap:['تحليل المتجه: Ax = A cosθ و Ay = A sinθ (الزاوية من المحور الأفقي).','طول المتجه A = √(Ax² + Ay²) وزاويته θ = tan⁻¹(Ay/Ax).','الجمع تبادلي A + B = B + A، والطرح ليس تبادلياً A − B ≠ B − A؛ نجمع المركبات المتناظرة.','الضرب القياسي: î·î = ĵ·ĵ = 1 و î·ĵ = 0، فيكون A·B = AxBx + AyBy رقماً.']}
 ],
 lab:lab15,
 examples:[
  {title:'تدريب 1 (الشكل الأول): F = 12 N والزاوية 50° من المحور الرأسي',ref:'ص 13',q:'<p>من خلال الشكل أوجد مركبات المتجه: <span class="ltr">F = 12 N</span>، <span class="ltr">θ = 50°</span> مرسومة بين القوة والمحور الرأسي.</p>',
   given:[{id:'F',label:'القوة',sym:'F',unit:'N',value:12},{id:'t',label:'الزاوية مع الرأسي',sym:'\\theta',unit:'°',value:50}],
   solve:g=>[{t:'الزاوية مقاسة من المحور الرأسي، فالزاوية مع الأفقي:',f:R`90°-${g.t}°`,v:90-g.t,unit:'°',dp:2},{t:'المركبة الأفقية (أو مباشرة \\(F\\sin\\theta\\)):',f:R`F_x=${g.F}\cos${90-g.t}°=${g.F}\sin${g.t}°`,v:g.F*Math.sin(g.t*D2R),unit:'N',dp:2},{t:'المركبة الرأسية:',f:R`F_y=${g.F}\sin${90-g.t}°=${g.F}\cos${g.t}°`,v:g.F*Math.cos(g.t*D2R),unit:'N',dp:2,final:true}],
   note:'اعتمدنا أن الزاوية في الشكل الأول مقاسة من المحور الرأسي كما هي مرسومة في الحقيبة. لو قيست من الأفقي لكانت المركبتان متبادلتين (Fx = 7.71 N و Fy = 9.19 N).'},
  {title:'تدريب 1 (الشكل الثاني): F = 10 N والزاوية 30° من المحور الأفقي',ref:'ص 13',q:'<p>من خلال الشكل أوجد مركبات المتجه: <span class="ltr">F = 10 N</span>، <span class="ltr">θ = 30°</span> مع المحور الأفقي.</p>',
   given:[{id:'F',label:'القوة',sym:'F',unit:'N',value:10},{id:'t',label:'الزاوية مع الأفقي',sym:'\\theta',unit:'°',value:30}],
   solve:g=>[{t:'المركبة الأفقية:',f:R`F_x=F\cos\theta=${g.F}\cos${g.t}°`,v:g.F*Math.cos(g.t*D2R),unit:'N',dp:2},{t:'المركبة الرأسية:',f:R`F_y=F\sin\theta=${g.F}\sin${g.t}°`,v:g.F*Math.sin(g.t*D2R),unit:'N',dp:2,final:true}]},
  {title:'تدريب 2: جمع المتجهين وطرحهما',ref:'ص 14',q:R`<p>أوجد حاصل الجمع والطرح للمتجهين: \(\vec{A}=3\hat{i}+2\hat{j}\)، \(\vec{B}=4\hat{i}+5\hat{j}\)</p>`,
   given:[{id:'ax',label:'Ax',unit:'',value:3},{id:'ay',label:'Ay',unit:'',value:2},{id:'bx',label:'Bx',unit:'',value:4},{id:'by',label:'By',unit:'',value:5}],
   solve:g=>{const v=(x,y)=>`${x}\\hat{i}${y<0?'-'+(-y):'+'+y}\\hat{j}`;return [{t:'الجمع: نجمع مركبات x معاً ومركبات y معاً:',f:R`\vec{A}+\vec{B}=(${g.ax}+${g.bx})\hat{i}+(${g.ay}+${g.by})\hat{j}=${v(g.ax+g.bx,g.ay+g.by)}`},{t:'مركبة x للمجموع:',v:g.ax+g.bx,dp:2},{t:'مركبة y للمجموع:',v:g.ay+g.by,dp:2},
    {t:'الطرح:',f:R`\vec{A}-\vec{B}=(${g.ax}-${g.bx})\hat{i}+(${g.ay}-${g.by})\hat{j}=${v(g.ax-g.bx,g.ay-g.by)}`},{t:'مركبة x للفرق:',v:g.ax-g.bx,dp:2},{t:'مركبة y للفرق:',v:g.ay-g.by,dp:2,final:true}]}},
  {title:'تدريب 3: الضرب القياسي',ref:'ص 14',q:R`<p>أوجد حاصل الضرب القياسي للمتجهين: \(\vec{A}=3\hat{i}+2\hat{j}\)، \(\vec{B}=4\hat{i}+5\hat{j}\)</p>`,
   given:[{id:'ax',label:'Ax',unit:'',value:3},{id:'ay',label:'Ay',unit:'',value:2},{id:'bx',label:'Bx',unit:'',value:4},{id:'by',label:'By',unit:'',value:5}],
   solve:g=>[{t:'نضرب ضرباً اعتيادياً ونفك الأقواس:',f:R`(${g.ax}\hat{i}+${g.ay}\hat{j})\cdot(${g.bx}\hat{i}+${g.by}\hat{j})`},{t:'نستخدم \\(\\hat{i}\\cdot\\hat{i}=\\hat{j}\\cdot\\hat{j}=1\\) و \\(\\hat{i}\\cdot\\hat{j}=0\\):',f:R`=${g.ax}\times${g.bx}+${g.ay}\times${g.by}`},{t:'الناتج (رقم وليس متجهاً):',v:g.ax*g.bx+g.ay*g.by,dp:2,final:true}],note:'ترقيم هذا التدريب في الحقيبة «تدريب 2» مكرر، والصحيح أنه الثالث.'}
 ],
 quiz:[
  {q:'المركبة الأفقية لمتجه A يصنع زاوية θ مع المحور الأفقي:',o:['A sinθ','A cosθ','A tanθ','A / cosθ'],c:1,e:'Ax = A cosθ.'},
  {q:'طول المتجه A بدلالة مركبتيه:',o:['Ax + Ay','√(Ax² + Ay²)','Ax × Ay','Ax² + Ay²'],c:1,e:'A = √(Ax² + Ay²).'},
  {q:'قوة 10 N بزاوية 30° مع الأفقي. مركبتها الرأسية:',o:['8.66 N','5 N','10 N','0 N'],c:1,e:'Fy = 10 sin30° = 5 N.'},
  {q:'إذا كان A = 3î + 2ĵ و B = 4î + 5ĵ فإن A + B:',o:['7î + 7ĵ','−î − 3ĵ','12î + 10ĵ','22'],c:0,e:'نجمع المركبات المتناظرة.'},
  {q:'أي العبارات صحيحة؟',o:['A − B = B − A','A + B = B + A','A + B ≠ B + A','لا يمكن جمع المتجهات'],c:1,e:'الجمع تبادلي، والطرح ليس تبادلياً.'},
  {q:'î · ĵ يساوي:',o:['1','0','−1','ĵ'],c:1,e:'متجها الوحدة متعامدان فحاصل ضربهما القياسي صفر.'},
  {q:'حاصل الضرب القياسي للمتجهين A = 3î + 2ĵ و B = 4î + 5ĵ:',o:['22','7î + 7ĵ','12î + 10ĵ','14'],c:0,e:'3×4 + 2×5 = 22.'},
  {q:'ناتج الضرب القياسي لمتجهين يكون:',o:['متجهاً','كمية قياسية (رقماً)','صفراً دائماً','وحدة'],c:1,e:'لذلك سمي ضرباً قياسياً.'}
 ]
});
})(PLCBOOK);

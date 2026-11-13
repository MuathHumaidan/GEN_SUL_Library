/* الوحدة 2 — Around the office: Part A In the office (ص 10–11) · Part B Workplaces and locations (ص 12–13)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const cap=s=>s[0].toUpperCase()+s.slice(1);

/* ========== 2A In the office ========== */
const OBJ=[['calculator','آلة حاسبة','a thing for adding numbers'],['ruler','مسطرة','something we use to draw a straight line'],['notepad','دفتر ملاحظات','a thing for making notes'],['rubber (BrE) = eraser (AmE)','ممحاة','something we use to correct pencil mistakes'],['correction fluid','سائل التصحيح','white stuff for correcting mistakes'],['highlighter','قلم تظليل','a coloured pen for showing important points'],['stapler','دبّاسة','a thing for joining papers'],['filing cabinet','خزانة ملفات','something we use to keep files']];
const PREP=[['next to','بجانب'],['under','تحت'],['on','على'],['in front of','أمام'],['near','قريب من'],['behind','خلف']];
/* مشهد المكتب: الأشياء وأماكنها */
const SC={monitor:{x:150,y:70,w:80,h:60,c:C.ink,n:'the monitor'},keyboard:{x:150,y:150,w:90,h:18,c:C.mut,n:'the keyboard'},lamp:{x:60,y:60,w:30,h:70,c:C.yel,n:'the lamp'},phone:{x:270,y:110,w:40,h:25,c:C.red,n:'the phone'},bin:{x:300,y:210,w:30,h:40,c:C.mut,n:'the bin'},files:{x:120,y:215,w:60,h:30,c:C.blue,n:'the files'}};
const REL={'monitor-keyboard':'behind','keyboard-monitor':'in front of','lamp-monitor':'next to','monitor-lamp':'next to','phone-monitor':'near','phone-keyboard':'near','files-keyboard':'under','bin-phone':'under','files-lamp':'under'};
const scene=hi=>`<rect x="20" y="180" width="320" height="10" fill="${C.mut}"/><rect x="30" y="190" width="10" height="70" fill="${C.mut}"/><rect x="320" y="190" width="10" height="70" fill="${C.mut}"/>`+Object.entries(SC).map(([k,o])=>`<g data-k="${k}" style="cursor:pointer"><rect x="${o.x}" y="${o.y}" width="${o.w}" height="${o.h}" rx="4" fill="${o.c}" stroke="${hi&&hi.includes(k)?C.red:C.ink}" stroke-width="${hi&&hi.includes(k)?4:1.5}"/>${TL(o.x+o.w/2,o.y-6,k,{fs:11,w:700})}</g>`).join('');
function lab2a(el,B){kcss();
 const K2=Object.keys(SC);
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">أين هو؟</h3><p class="sub">مبني على التمرين 3 ص 11. اختر شيئين وشاهد الجملة.</p>
  <div class="ph-row"><select class="ph-sel" id="a">${K2.map(k=>`<option>${k}</option>`).join('')}</select><select class="ph-sel" id="b">${K2.map((k,i)=>`<option ${i===1?'selected':''}>${k}</option>`).join('')}</select></div>
  <div id="sv" style="max-width:380px;margin:8px auto"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">اشرح الشيء دون اسمه</h3><p class="sub">مبني على التمرين 2c ص 10.</p><select class="ph-sel" id="ob">${OBJ.map((o,i)=>`<option value="${i}">${o[1]}</option>`).join('')}</select><div id="xo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>اختر monitor ثم keyboard، ثم اعكسهما: ماذا تغيّر؟</li><li>متى نقول <span class="en">It's a thing for …ing</span>؟</li><li>صِف ثلاثة أشياء على مكتبك.</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);
 const sh=()=>{const a=$('#a').value,b=$('#b').value;$('#sv').innerHTML=`<svg viewBox="0 0 360 270" style="width:100%">${scene([a,b])}</svg>`;
  if(a===b){$('#o').innerHTML='<p class="sub">اختر شيئين مختلفين.</p>';return}const r=REL[a+'-'+b];
  $('#o').innerHTML=r?eb(`${cap(SC[a].n)} ${a==='files'?'are':'is'} ${r} ${SC[b].n}.`):`<p class="sub">لا توجد علاقة قريبة بينهما في المشهد؛ جرّب شيئين متجاورين.</p>`};
 ['a','b'].forEach(k=>$('#'+k).addEventListener('input',sh));sh();
 const xs=()=>{const o=OBJ[+$('#ob').value];$('#xo').innerHTML=`${eb([`It's ${o[2]}.`,`(${o[0]})`])}`};$('#ob').addEventListener('input',xs);xs();
}
B.lesson({
 id:'u2-l1',unit:2,order:1,pages:'10–11',
 title:'Part A: In the office — في المكتب',
 summary:'أسماء أدوات المكتب (calculator، ruler، notepad، rubber، correction fluid، highlighter…)، ووصف شيء لا تعرف اسمه (It\'s a thing for …ing / It\'s stuff for … / It\'s something we use to …)، وحروف الجر للمكان (next to، under، on، in front of، near، behind).',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 10–11',html:`<p>تتحدث عن الأشياء في المكتب. ستتعلم:</p><ol><li>أسماء أدوات المكتب.</li><li>وصف شيء لا تعرف اسمه.</li><li>حروف الجر للمكان.</li></ol>`},
  {h:'أدوات المكتب',ref:'ص 10',html:vt(OBJ.map(o=>[o[0],o[1]]),['English','المعنى'])},
  {h:'وصف شيء لا تعرف اسمه',ref:'ص 10',html:`${vt([["It's a thing for adding numbers.",'شيء لـ + فعل ing'],["It's stuff for correcting mistakes.",'مادة لـ … (لما لا يُعدّ)'],["It's something we use to draw a straight line.",'شيء نستعمله لـ + فعل']],['English','القالب'])}<p>بعد ${e('for')} نضع الفعل بـ ${e('ing')}، وبعد ${e('to')} نضع الفعل كما هو.</p>`},
  {h:'حروف الجر للمكان',ref:'ص 11',html:`${vt(PREP,['English','المعنى'])}${eb(['The phone is on the desk.','The bin is under the desk.','The keyboard is in front of the monitor.'])}`},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">next to</span> ملاصق بجانبه، و <span class="en">near</span> قريب منه وقد لا يلاصقه.'},
  {h:'تمارين الكتاب',ref:'ص 10–11',html:
   bk(1,'ص 10','اكتب أسماء الأشياء في صورة المكتب (1–15).',null,'حسب صورة الكتاب؛ الكلمات في «Vocabulary file 1» ص 84 (مثل lamp, monitor, keyboard, printer, filing cabinet, drawer, telephone).')+
   bk(2,'ص 10','استمع واكتب رقم الحوار تحت كل صورة، ثم اكتب الأسماء.',['a calculator → 3','b ruler → 1','c notepad → 4','d rubber → 2','e correction fluid → 2','f highlighter → 4'],'في الحوار 2 ذُكرت الممحاة ثم سائل التصحيح، وفي الحوار 4 الدفتر ثم قلم التظليل.')+
   bk(3,'ص 11','أكمل بحروف الجر.',['1 near (مثال)','2 on','3 behind','4 in front of','5 under','6 next to'],'من قراءتنا للصورة.')+
   bk(4,'ص 11','نشاط ثنائي: 11 فرقاً صغيراً بين صورتين.',null,'صورة الطالب أ في ص 76 من الكتاب.')+
   bk(5,'ص 11','قارن مكتبك أو مكان دراستك بمكتب زميلك.',null)},
  {h:'الاستماع',ref:'ص 10',html:au('2A-2a','ص 10 — التمرين 2a','أربعة أشخاص يصفون أشياء لا يعرفون اسمها.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'أدوات المكتب',title:'أدوات المكتب',q:'كيف تطلب شيئاً لا تعرف اسمه؟',ref:'ص 10',
   art:art(`${OBJ.slice(0,6).map((o,i)=>`<g data-tip="${o[0]} — ${o[1]}: ${o[2]}"><rect x="${30+(i%2)*160}" y="${40+Math.floor(i/2)*76}" width="140" height="60" rx="12" fill="${i%3===0?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(100+(i%2)*160,76+Math.floor(i/2)*76,o[0].split(' (')[0],{fs:13,w:700})}</g>`).join('')}`,'أدوات المكتب'),
   cap:'ست أدوات. مرّر المؤشر لترى المعنى ووصفاً بلا اسم.',side:[{tip:`${e("It's a thing for")} + فعل بـ ${e('ing')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"It's a thing for ___ numbers.",o:['adding','add'],a:0},{s:"It's something we use to ___ a straight line.",o:['draw','drawing'],a:0},{s:"It's white ___ for correcting mistakes.",o:['stuff','thing'],a:0}]}),title:'مختبر مصغّر: الوصف'}]},
  {st:2,short:'حروف الجر',title:'أين هو؟',q:'أين الهاتف؟',ref:'ص 11',art:art(scene(),'مشهد المكتب'),cap:'مكتب من رسمنا. حدّد مكان كل شيء بالنسبة لغيره.',
   side:[{tip:`نبدأ بالشيء ثم ${e('is / are')} ثم حرف الجر ثم الشيء الآخر.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'اختر:',cases:[{q:'The keyboard is ___ the monitor.',opts:[['in front of',1],['behind',0]]},{q:'The bin is ___ the phone.',opts:[['under',1],['on',0]]},{q:'The lamp is ___ the monitor.',opts:[['next to',1],['under',0]]}]}),title:'مختبر مصغّر: المكان'}]},
  {recap:['calculator, ruler, notepad, rubber, correction fluid, highlighter.',"It's a thing for …ing.","It's stuff for …","It's something we use to …",'next to, under, on, in front of, near, behind.']}
 ],
 lab:lab2a,
 examples:[
  {title:'مثال 1: وصف بلا اسم',ref:'ص 10',q:`<p>لا تعرف اسم «الدبّاسة». صِفها.</p>`,given:[],solve:()=>[{t:`الخطوة 1: وظيفتها: تجمع الأوراق = ${e('join papers')}.`},{t:`الخطوة 2: بعد ${e('for')} فعل بـ ing: ${e('joining')}.`},{t:`الخطوة 3: ${e("It's a thing for joining papers.")}`,final:true}]},
  {title:'مثال 2: مكان',ref:'ص 11',q:`<p>الملفات تحت المكتب.</p>`,given:[],solve:()=>[{t:`الخطوة 1: files جمع: ${e('are')}.`},{t:`الخطوة 2: تحت = ${e('under')}.`},{t:`الخطوة 3: ${e('The files are under the desk.')}`,final:true}]},
  {title:'مثال 3: something we use to',ref:'ص 10',q:`<p>صِف المسطرة بقالب ${e('something we use to')}.</p>`,given:[],solve:()=>[{t:`الخطوة 1: بعد ${e('to')} الفعل كما هو.`},{t:`الخطوة 2: ${e('draw a straight line')}.`},{t:`الخطوة 3: ${e("It's something we use to draw a straight line.")}`,final:true}]}
 ],
 quiz:[
  {q:"It's a thing for ___ numbers.",o:['adding','add','adds','to adding'],c:0,e:'for + ing.'},
  {q:'rubber بالأمريكية:',o:['eraser','ruler','marker','cleaner'],c:0,e:'BrE rubber = AmE eraser.'},
  {q:'The bin is ___ the desk. (تحت)',o:['under','on','behind','next to'],c:0,e:'under.'},
  {q:'The keyboard is ___ the monitor. (أمامها)',o:['in front of','behind','under','on'],c:0,e:'in front of.'},
  {q:"It's white stuff for correcting mistakes:",o:['correction fluid','highlighter','notepad','calculator'],c:0,e:'ص 10.'},
  {q:'The files ___ on the shelf.',o:['are','is','be','am'],c:0,e:'files جمع.'}
 ]
});

/* ========== 2B Workplaces and locations ========== */
const WP=[['head office','المقر الرئيسي'],['branch office','فرع'],['factory','مصنع'],['warehouse','مستودع'],['showroom','صالة عرض'],['store','متجر'],['design studio','مكتب تصميم']];
const LOC=[['in the centre','في الوسط'],['in the suburbs','في الضواحي'],['in the country','في الريف'],['in the north / south / east / west','في الشمال / الجنوب / الشرق / الغرب'],['in the northwest / southeast…','في الشمال الغربي / الجنوب الشرقي…'],['on the east coast','على الساحل الشرقي']];
const CITY=[{n:'Riyadh',x:205,y:150,w:'its Head Office and a showroom',p:'in the centre of Saudi Arabia'},{n:'Jubail',x:262,y:95,w:'a factory',p:'on the east coast'},{n:'Dammam',x:280,y:120,w:'a warehouse',p:'in the east'},{n:'Jeddah',x:92,y:185,w:'a branch office and a warehouse',p:'on the west coast'},{n:'Abha',x:125,y:240,w:'a design studio',p:'in the southwest'},{n:'Tabuk',x:68,y:60,w:'a store',p:'in the northwest'}];
const ksa=()=>`<path d="M40 40 L150 20 L250 60 L300 110 L330 170 L300 230 L210 270 L130 280 L95 230 L60 150 Z" fill="#f4ecd6" stroke="${C.ink}" stroke-width="2"/>
 <g transform="translate(330 40)"><line x1="0" y1="18" x2="0" y2="-18" stroke="${C.ink}" stroke-width="2"/><polygon points="0,-22 -5,-12 5,-12" fill="${C.ink}"/>${TL(0,-26,'N',{fs:11,w:700})}</g>`;
function lab2b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">أماكن عمل شركة Sahara Foods</h3><p class="sub">شركة من إعدادنا على خريطة تقريبية، مبني على التمرينين 3 و 4 ص 13. اضغط مدينة.</p><div id="sv" style="max-width:380px;margin:auto"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">أين تحب أن تعيش وتعمل؟</h3><p class="sub">مبني على التمرين 2 ص 12.</p>
  <div class="ph-row"><select class="ph-sel" id="lv"><option>the centre</option><option>the suburbs</option><option>the country</option></select><select class="ph-sel" id="wk"><option value="1">commute</option><option value="0">work at home</option></select></div><div id="wo"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>أين المقر الرئيسي؟ وأين المصنع؟</li><li>ما الفرق بين <span class="en">warehouse</span> و <span class="en">showroom</span>؟</li><li>اكتب جملة: أين تحب أن تعمل ولماذا؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let k=0;
 const draw=()=>{$('#sv').innerHTML=`<svg viewBox="0 0 360 300" style="width:100%">${ksa()}${CITY.map((c,i)=>`<g data-c="${i}" style="cursor:pointer"><circle cx="${c.x}" cy="${c.y}" r="${i===k?10:7}" fill="${i===k?C.red:C.ink}"/>${TL(c.x,c.n==='Dammam'?c.y+24:c.y-14,c.n,{fs:12,w:700})}</g>`).join('')}</svg>`;
  el.querySelectorAll('[data-c]').forEach(g=>g.onclick=()=>{k=+g.dataset.c;draw()});const c=CITY[k];$('#o').innerHTML=eb([`Sahara Foods has ${c.w} in ${c.n}, ${c.p}.`,`Where is the ${c.w.replace(/^(an?|its) /,'').split(' and')[0]}? — It's in ${c.n}.`])};draw();
 const ws=()=>{const l=$('#lv').value,c=$('#wk').value==='1';$('#wo').innerHTML=eb([`I'd like to live in ${l}.`,c?"I'd like to commute to work.":"I'd like to work at home.",c?"I wouldn't like to work at home.":"I wouldn't like to commute."])};['lv','wk'].forEach(x=>$('#'+x).addEventListener('input',ws));ws();
}
B.lesson({
 id:'u2-l2',unit:2,order:2,pages:'12–13',
 title:'Part B: Workplaces and locations — أماكن العمل ومواقعها',
 summary:'الجهات (north، southeast…) والمواقع (in the centre، in the suburbs، in the country، on the east coast)، والتنقل للعمل (commute، commuter، teleworker)، والرغبة بـ would like to / wouldn\'t like to، وأماكن عمل الشركة (head office، branch office، factory، warehouse، showroom)، ووصف مواقعها.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 12–13',html:`<p>تصف أين تعيش وتعمل، وأين أماكن شركة. ستتعلم:</p><ol><li>الجهات والمواقع.</li><li>${e("I'd like to / I wouldn't like to")}</li><li>أماكن العمل في الشركة.</li></ol>`},
  {h:'المواقع والجهات',ref:'ص 12',html:`${vt(LOC,['English','المعنى'])}${vt([['commute','يتنقل يومياً من بيته إلى عمله'],['commuter','من يتنقل يومياً للعمل'],['teleworker / telecommuter','من يعمل من بيته بالهاتف والحاسوب'],['village','قرية']],['English','المعنى'])}`},
  {h:'would like to',ref:'ص 12',html:`${vt([["I'd like to meet more people.",'أريد (بلطف)'],["I wouldn't like to work at home.",'لا أريد'],['Where would you like to live?','أين تحب أن …؟'],["Would you like to work at home? — No, I'd like to commute.",'هل تحب أن …؟']],['English','المعنى'])}<p>بعد ${e('would like to')} الفعل كما هو.</p>`},
  {h:'أماكن العمل',ref:'ص 13',html:`${vt(WP,['English','المعنى'])}${eb(['The company has its Head Office in Riyadh, in the centre of Saudi Arabia.','They also have a factory in Jubail, on the east coast.'])}`},
  {note:'<b>توضيح للمتدرب:</b> نقول <span class="en">in the north of the country</span> مع <span class="en">in</span>، لكن <span class="en">on the coast</span> مع <span class="en">on</span>.'},
  {h:'تمارين الكتاب',ref:'ص 12–13',html:
   bk(1,'ص 12','اقرأ عن الشخصين واكتب أسماء الأماكن على الخريطة.',['1 Tadlow (شمال لندن)','2 Westminster (وسط لندن)','3 Croydon (جنوب لندن)'],'من قراءتنا للخريطة.')+
   bk(2,'ص 12','أكمل الجمل، ثم اسأل زملاءك وأكمل الجدول.',["a1 Rob: I'd like to meet more people.","a2 Ann: I wouldn't like to work at home."])+
   bk(3,'ص 13','استمع واكتب المدن على الخريطة، ثم ضع علامة على أماكن العمل.',['a: 1 Milan · 2 Turin · 3 Ancona · 4 Naples','b: ✓ factory (Turin، وقرب Naples، و Ancona) · ✓ Head Office (Rome) · ✓ branch office (Milan) · ✓ showroom (Rome)','✗ warehouse · ✗ store · ✗ design studio'],'أرقام الخريطة من قراءتنا للصورة.')+
   bk(4,'ص 13','نشاط ثنائي: صِف أماكن Ultra في ألمانيا، واكتب ما يقوله زميلك عن فرنسا.',null,'معلومات الطالب أ في ص 76 من الكتاب.')+
   bk(5,'ص 13','اكتب رسالة لزائر تشرح فيها أماكن شركتك.',null)},
  {h:'الاستماع',ref:'ص 13',html:au('2B-3a','ص 13 — التمرين 3a','أماكن شركة سيارات في إيطاليا.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الجهات والمواقع',title:'in the centre · on the coast',q:'كيف تصف مكان مدينة في بلدك؟',ref:'ص 12–13',
   art:art(`${ksa()}${CITY.map(c=>`<g data-tip="${c.n}: ${c.p}"><circle cx="${c.x}" cy="${c.y}" r="7" fill="${C.ink}"/>${TL(c.x,c.n==='Dammam'?c.y+22:c.y-12,c.n,{fs:11,w:700})}</g>`).join('')}`,'مدن ومواقعها'),
   cap:'خريطة تقريبية من رسمنا. مرّر المؤشر على كل مدينة.',side:[{tip:`${e('in the southwest')} = في الجنوب الغربي (كلمة واحدة).`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"Jeddah is ___ the west coast.",o:['on','in'],a:0},{s:"Riyadh is in the ___ of the country.",o:['centre','coast'],a:0},{s:'Tabuk is in the ___.',o:['northwest','west north'],a:0}]}),title:'مختبر مصغّر: الموقع'}]},
  {st:2,short:'would like to',title:'الرغبة بـ would like to',q:'كيف تقول بلطف إنك تريد أن تعمل في الوسط؟',ref:'ص 12',
   art:art(`<g data-tip="I'd like to + الفعل = أريد بلطف."><rect x="30" y="60" width="300" height="50" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,91,"I'd like to work in the centre.",{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="I wouldn't like to = لا أريد."><rect x="30" y="130" width="300" height="50" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(180,161,"I wouldn't like to work at home.",{fs:14,w:700,c:'#fff'})}</g>
    <g data-tip="السؤال: Would you like to …?"><rect x="30" y="200" width="300" height="50" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,231,'Would you like to commute?',{fs:14,w:700})}</g>`,'would like to'),
   cap:'الإثبات والنفي والسؤال. مرّر المؤشر على كل سطر.',side:[{tip:`${e("I'd")} = ${e('I would')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'أكمل:',items:[{s:"I'd like to ___ in the suburbs.",o:['live','living'],a:0},{s:"I ___ like to commute every day.",o:["wouldn't","don't would"],a:0},{s:'Where ___ you like to work?',o:['would','do'],a:0}]}),title:'مختبر مصغّر: would like'}]},
  {st:3,short:'أماكن العمل',title:'أماكن الشركة',q:'أين تُصنع المنتجات؟ وأين تُعرض؟',ref:'ص 13',
   art:art(`${WP.slice(0,6).map((w,i)=>`<g data-tip="${w[0]} — ${w[1]}"><rect x="${30+(i%2)*160}" y="${40+Math.floor(i/2)*76}" width="140" height="60" rx="12" fill="${i%3===0?C.yel:C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(100+(i%2)*160,76+Math.floor(i/2)*76,w[0],{fs:13,w:700})}</g>`).join('')}`,'أماكن العمل'),
   cap:'ستة أماكن عمل. مرّر المؤشر على كل منها.',side:[{tip:`${e('factory')} للتصنيع، و ${e('warehouse')} للتخزين، و ${e('showroom')} للعرض.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'أي مكان؟',cases:[{q:'They make cars here.',opts:[['factory',1],['showroom',0]]},{q:'They keep products here.',opts:[['warehouse',1],['design studio',0]]},{q:'The main office of the company.',opts:[['head office',1],['branch office',0]]}]}),title:'مختبر مصغّر: المكان'}]},
  {recap:['in the centre / suburbs / country، on the east coast.','north, southeast, northwest…',"I'd like to … / I wouldn't like to …",'head office, branch office, factory, warehouse, showroom.','commute, commuter, teleworker.']}
 ],
 lab:lab2b,
 examples:[
  {title:'مثال 1: موقع مكان عمل',ref:'ص 13',q:`<p>للشركة مصنع في الجبيل على الساحل الشرقي.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('The company has a factory in Jubail')}`},{t:`الخطوة 2: على الساحل = ${e('on the east coast')}.`},{t:`الخطوة 3: ${e('The company has a factory in Jubail, on the east coast.')}`,final:true}]},
  {title:'مثال 2: رغبة',ref:'ص 12',q:`<p>تحب أن تسكن في الضواحي ولا تحب أن تسكن في الوسط.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'd like to live in the suburbs.")}`},{t:`الخطوة 2: ${e("I wouldn't like to live in the centre.")}`},{t:`الخطوة 3: ${e("I'd like to live in the suburbs. I wouldn't like to live in the centre.")}`,final:true}]},
  {title:'مثال 3: سؤال',ref:'ص 12',q:`<p>اسأل زميلك أين يحب أن يعمل.</p>`,given:[],solve:()=>[{t:`الخطوة 1: كلمة السؤال ${e('Where')}.`},{t:`الخطوة 2: ${e('would you like to')} + ${e('work')}.`},{t:`الخطوة 3: ${e('Where would you like to work?')}`,final:true}]}
 ],
 quiz:[
  {q:"I'd like to ___ more people.",o:['meet','meeting','meets','to meet'],c:0,e:'would like to + الفعل.'},
  {q:'They keep products in a ___.',o:['warehouse','showroom','head office','studio'],c:0,e:'warehouse.'},
  {q:'Jeddah is ___ the west coast.',o:['on','in','at','to'],c:0,e:'on the coast.'},
  {q:'commuter:',o:['من يتنقل يومياً للعمل','من يعمل من بيته','مدير الفرع','عامل المستودع'],c:0,e:'ص 12.'},
  {q:'Where ___ you like to live?',o:['would','do','are','will'],c:0,e:'Where would you like to …?'},
  {q:"I ___ like to work at home.",o:["wouldn't","don't would","not would","won't to"],c:0,e:"wouldn't like."}
 ]
});
})(PLCBOOK);

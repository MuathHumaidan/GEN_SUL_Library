/* الوحدة 6 — Placing an order: Part A (ص 28–29) · Part B (ص 30–31) · Review 2 (ص 32–33)
   الشرح والأمثلة والحوارات والرسوم من إعدادنا؛ تمارين الكتاب يُحال إليها برقمها وصفحتها مع إجاباتها. */
(function(B){
const K=window.PHK,N=window.ENK,{C,art,T,TL}=K,{e,eb,dl,vt,bk,au,ab,sp}=N;
const kcss=()=>{if(!document.getElementById('phk-css')){const st=document.createElement('style');st.id='phk-css';st.textContent=K.css;document.head.appendChild(st)}};
const money=v=>'SAR '+v.toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:2});

/* ========== 6A Ordering what you need ========== */
const CAT=[{no:'H12',d:'safety helmets',u:'',p:35},{no:'G40',d:'gloves',u:'pairs of ',p:12.5},{no:'B07',d:'safety boots',u:'pairs of ',p:180},{no:'V22',d:'safety vests',u:'',p:25}];
function lab6a(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">نموذج الطلب</h3><p class="sub">كتالوج ملابس عمل من إعدادنا (<b>قيم توضيحية</b>)، مبني على التمرين 1b ص 28. الكمية من 0 إلى 500.</p>
  <div id="rows"></div><div id="tot"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">المكالمة</h3><div id="o"></div></div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>متى نقول <span class="en">How many</span> ومتى <span class="en">How much</span>؟</li><li>لماذا نقول <span class="en">pairs of gloves</span>؟</li><li>اطلب 3 خوذات: هل نقول <span class="en">a few</span> أم <span class="en">a lot</span>؟</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);const q=[20,30,0,0];
 $('#rows').innerHTML=vt(CAT.map((c,i)=>[`${c.no} ${c.d}`,`<input class="ph-num" type="number" min="0" max="500" step="1" value="${q[i]}" data-q="${i}" style="width:80px"> × ${money(c.p)}`]),['Item','Quantity × price']);
 const sh=()=>{let w='';el.querySelectorAll('[data-q]').forEach(inp=>{let v=Math.round(+inp.value);if(!(v>=0&&v<=500)){v=Math.min(500,Math.max(0,v||0));inp.value=v;w='<p class="sub" style="color:var(--red)">صُحّحت الكمية: المدى المسموح 0 إلى 500.</p>'}q[+inp.dataset.q]=v});
  const L=CAT.map((c,i)=>q[i]?[c,q[i],q[i]*c.p]:null).filter(Boolean);const g=L.reduce((s,x)=>s+x[2],0);
  $('#tot').innerHTML=w+(L.length?vt(L.map(x=>[`${x[1]} × ${x[0].no}`,money(x[2])]).concat([['Grand total',`<b>${money(g)}</b>`]]),['Order','Total']):'<p class="sub">أدخل كمية واحدة على الأقل.</p>');
  const W=n=>n<=5?'a few':'a lot of';
  $('#o').innerHTML=L.length?dl([['Supplier','Unifit Workwear. Can I help you?'],['You',"I'd like to place an order, please."],...L.flatMap(x=>[['You',`I'd like ${x[1]} ${x[0].u}${x[0].d}, order number ${x[0].no}.`],['Supplier',`OK. That's ${W(x[1])} ${x[0].d}. They're ${money(x[0].p)} each.`]]),['Supplier',`So that's ${money(g)} in total. We'll send the goods immediately.`]]):''};
 el.querySelectorAll('[data-q]').forEach(i=>i.addEventListener('input',sh));sh();
}
B.lesson({
 id:'u6-l1',unit:6,order:1,pages:'28–29',
 title:'Part A: Ordering what you need — طلب ما تحتاجه',
 summary:'طرق الشراء (by phone، on the Internet…)، وتقديم طلب شراء بالهاتف (I\'d like to place an order. I\'d like to order …)، والكميات (a few، a lot of، How many …? How much …?) مع المعدود وغير المعدود، و pairs of، وقراءة شاشة طلب وحساب المجموع.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 28–29',html:`<p>تطلب ما تحتاجه شركتك من مورّد. ستتعلم:</p><ol><li>عبارات الطلب بالهاتف.</li><li>الكميات: ${e('a few, a lot of, many, much')}.</li><li>السؤال عن العدد والسعر.</li></ol>`},
  {h:'تقديم الطلب',ref:'ص 28',html:vt([["I'd like to place an order, please.",'أود تقديم طلب'],["I'd like to order 30 lab coats.",'أود أن أطلب …'],['Do you have an account with us?','هل لك حساب لدينا؟'],['How much are they? — SAR 45 each.','كم سعرها؟ — … للواحدة'],['Anything else?','شيء آخر؟'],['Can I just check your order?','أراجع طلبك'],["We'll send the goods immediately.",'سنرسل البضاعة فوراً']],['English','المعنى'])},
  {h:'الكميات',ref:'ص 29',html:`${vt([['How many …?','للمعدود (lab coats, pens)','How many lab coats do you need?'],['How much …?','لغير المعدود (paper, money) وللسعر','How much paper? How much are they?'],['a few','قليل من المعدود','a few lab coats'],['a little','قليل من غير المعدود','a little paper'],['a lot of','كثير من الاثنين','a lot of goggles / a lot of money'],['not many / not much','ليس كثيراً','not many problems / not much time']],['English','الاستعمال','مثال'])}`},
  {note:'<b>توضيح للمتدرب:</b> بعض الأشياء من جزأين نعدّها بـ <span class="en">pairs of</span>: <span class="en">20 pairs of goggles</span>، <span class="en">three pairs of overalls</span>.'},
  {h:'تمارين الكتاب',ref:'ص 28–29',html:
   bk(1,'ص 28','استمع: كم يحتاج الزميلان من كل شيء؟ ثم أكمل شاشة الطلب.',['a: Ben: 6 lab coats · 20 pairs of goggles — Ron: 3 pairs of overalls · 30 pairs of gloves','b: account MX 343467 · P21G5 lab coats 30 × €45 = €1350 · P2251 overalls 25 × €58 = €1450 · WB91 goggles 50 × €8 = €400 · S32 gloves 50 × €5 = €250 · Grand Total €3450'])+
   bk(2,'ص 29','أكمل الجمل بالكلمات، ثم استمع وتحقق.',['1 A: We need a few lab coats. B: How many? A: Er, three … four … six will be fine.','2 We need a lot of goggles.','3 He needs three pairs of overalls.','4 B: How much are they? A: €58 each.'])+
   bk(3,'ص 29','نشاط ثنائي: اطلب أدوات مكتبية، واستقبل طلباً واملأ نموذجه.',null,'معلومات الطالب أ في ص 79 من الكتاب.')+
   bk(4,'ص 29','ناقش الصور: لماذا يلبس الناس ملابس خاصة في العمل؟',null)},
  {h:'الاستماع',ref:'ص 28',html:au('6A-1a','ص 28 — التمرين 1a','مسؤولة المشتريات تسأل زميليها.')+au('6A-1b','ص 28 — التمرين 1b','مكالمة الطلب مع المورّد.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الطلب بالهاتف',title:'I\'d like to place an order',q:'كيف تبدأ مكالمة طلب شراء؟',ref:'ص 28',
   art:art(`${[["I'd like to place an order.",'أبدأ الطلب'],["I'd like to order 30 lab coats.",'العدد والصنف'],['How much are they?','السعر'],["That's everything, thanks.",'انتهيت']].map((x,i)=>`<g data-tip="${x[1]}"><rect x="20" y="${40+i*58}" width="320" height="46" rx="12" fill="${i%2?C.paper:C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(180,69+i*58,x[0],{fs:14,w:700})}</g>`).join('')}`,'الطلب'),
   cap:'مراحل الطلب. مرّر المؤشر على كل منها.',side:[{tip:`${e("I'd like")} ألطف من ${e('I want')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"I'd like to ___ an order, please.",o:['place','put'],a:0},{s:'How much ___ they?',o:['are','is'],a:0},{s:'They are €58 ___.',o:['each','one'],a:0}]}),title:'مختبر مصغّر: الطلب'}]},
  {st:2,short:'many · much',title:'الكميات',q:'هل تقول How many paper أم How much paper؟',ref:'ص 29',
   art:art(`<g data-tip="المعدود: How many / a few / many"><rect x="20" y="50" width="155" height="190" rx="14" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(97,80,'countable',{fs:15,w:700})}${['How many?','a few','many','a lot of','lab coats, pens'].map((x,i)=>TL(97,115+i*26,x,{fs:13})).join('')}</g>
    <g data-tip="غير المعدود: How much / a little / much"><rect x="185" y="50" width="155" height="190" rx="14" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(262,80,'uncountable',{fs:15,w:700})}${['How much?','a little','much','a lot of','paper, money'].map((x,i)=>TL(262,115+i*26,x,{fs:13})).join('')}</g>`,'many much'),
   cap:'المعدود وغير المعدود. مرّر المؤشر على كل عمود.',side:[{tip:`${e('a lot of')} تصلح للنوعين.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:'How ___ pens do you need?',o:['many','much'],a:0},{s:'How ___ paper do you need?',o:['much','many'],a:0},{s:'We need ___ lab coats. (عدد قليل)',o:['a few','a little'],a:0},{s:'We need ___ goggles. (عدد كبير)',o:['a lot of','a few'],a:0}]}),title:'مختبر مصغّر: الكمية'}]},
  {recap:["I'd like to place an order. · I'd like to order …",'How many + معدود؟ How much + غير معدود / السعر؟','a few / a little / a lot of.','pairs of goggles / overalls / gloves.',"Can I just check your order? · We'll send the goods immediately."]}
 ],
 lab:lab6a,
 examples:[
  {title:'مثال 1: الطلب',ref:'ص 28',q:`<p>اطلب 40 خوذة رقمها H12.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'd like to order")}`},{t:`الخطوة 2: ${e('40 safety helmets, order number H12')}`},{t:`الخطوة 3: ${e("I'd like to order 40 safety helmets, order number H12.")}`,final:true}]},
  {title:'مثال 2: المجموع',ref:'ص 28',q:`<p>25 زوجاً من القفازات، سعر الزوج 12.50 ريالاً. كم المجموع؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: نضرب الكمية في السعر.`},{t:`الخطوة 2: 25 × 12.50 = 312.50`},{t:`الخطوة 3: ${e("That's SAR 312.50 in total.")}`,final:true}]},
  {title:'مثال 3: السؤال المناسب',ref:'ص 29',q:`<p>اسأل عن كمية الورق التي يحتاجها زميلك.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e('paper')} غير معدود.`},{t:`الخطوة 2: نستعمل ${e('How much')}.`},{t:`الخطوة 3: ${e('How much paper do you need?')}`,final:true}]}
 ],
 quiz:[
  {q:"I'd like to ___ an order.",o:['place','make to','give','put'],c:0,e:'place an order.'},
  {q:'How ___ lab coats do you need?',o:['many','much','lot','few'],c:0,e:'معدود.'},
  {q:'How ___ money do we have?',o:['much','many','few','lots'],c:0,e:'غير معدود.'},
  {q:'We need ___ goggles. (كثير)',o:['a lot of','a little','much','a few of'],c:0,e:'a lot of.'},
  {q:'20 ___ goggles',o:['pairs of','pair','pairs','pair of'],c:0,e:'20 pairs of.'},
  {q:'30 × €45 =',o:['€1350','€1500','€1250','€135'],c:0,e:'30 × 45 = 1350.'}
 ]
});

/* ========== 6B Dealing with problems ========== */
const ORD=[['AC filters','10',30],['LED lamps','24',18],['cable ties (packs)','15',9],['extension leads','6',45]];
const MIST=[{r:0,q:20,t:"I ordered ten AC filters but I've got twenty.",a:"I'm sorry about that. Could you give ten back to the driver?"},{r:1,p:21,t:'The catalogue says SAR 18 but the invoice says SAR 21.',a:"I'm sorry about that. I'll check that and send you a new invoice."},{r:2,q:5,t:"We ordered fifteen packs of cable ties but we've got five.",a:"I'm sorry. I'll send ten more with the driver tomorrow."}];
function lab6b(el,B){kcss();
 el.innerHTML=`<div class="phl"><div class="grid">
 <div class="c7 panel"><h3 style="margin-top:0">افحص الفاتورة</h3><p class="sub">طلب وفاتورة من إعدادنا (<b>قيم توضيحية</b>)، مبني على التمرينين 2 و 4 ص 30–31. اضغط السطر الذي فيه خطأ.</p>
  <div class="ph-row"><button type="button" class="btn pri" id="nw">فاتورة أخرى</button></div><div id="tb"></div><div id="o"></div></div>
 <div class="c5 panel"><h3 style="margin-top:0">الطلب الأصلي</h3>${vt(ORD.map(o=>[o[0],`${o[1]} × SAR ${o[2]}`]),['Item','Order'])}</div>
 <div class="c12 panel"><h3 style="margin-top:0">جرّب</h3><ol class="ph-try"><li>ما الفرق بين الشكوى والاعتذار والإجراء؟</li><li>رتّب: <span class="en">Thank you. / I'm sorry. / I've got twenty.</span></li><li>كم ضريبة القيمة المضافة في السعودية؟ (15%)</li></ol></div></div></div>`;
 const $=s=>el.querySelector(s);let m=0;
 const sh=()=>{const x=MIST[m];const rows=ORD.map((o,i)=>{let q=+o[1],p=o[2];if(i===x.r){if(x.q)q=x.q;if(x.p)p=x.p}return [i,o[0],q,p]});
  const gt=rows.reduce((s,r)=>s+r[2]*r[3],0),vat=gt*0.15;
  $('#tb').innerHTML=`<div class="tbx"><table class="vt"><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>${rows.map(r=>`<tr data-r="${r[0]}" style="cursor:pointer"><td class="en">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[2]*r[3]}</td></tr>`).join('')}<tr><td>VAT 15%</td><td></td><td></td><td>${vat.toFixed(2)}</td></tr><tr><td><b>Grand total</b></td><td></td><td></td><td><b>${(gt+vat).toFixed(2)}</b></td></tr></tbody></table></div>`;$('#o').innerHTML='';
  el.querySelectorAll('[data-r]').forEach(tr=>tr.onclick=()=>{const ok=+tr.dataset.r===x.r;$('#o').innerHTML=ok?`<p class="sub">✔ وجدت الخطأ.</p>`+dl([['Customer (complaint)',x.t],['Supplier (apology + action)',x.a],['Customer (response)',"Thank you. That's very helpful."]]):'<p class="sub" style="color:var(--red)">✘ هذا السطر يطابق الطلب. قارن الكمية والسعر بالطلب الأصلي.</p>'})};
 $('#nw').onclick=()=>{m=(m+1)%MIST.length;sh()};sh();
}
B.lesson({
 id:'u6-l2',unit:6,order:2,pages:'30–31',
 title:'Part B: Dealing with problems — التعامل مع المشكلات',
 summary:'ما قد يخطئ في الطلب، وقراءة فاتورة (discount، VAT، grand total)، والشكوى بالماضي البسيط (I ordered ten but I\'ve got twenty. The salesman promised …)، والاعتذار (I\'m sorry about that)، والإجراء بالمستقبل البسيط (I\'ll check that. We\'ll send …) والطلب (Could you …?)، والرد.',
 theory:[
  {h:'ماذا ستتعلم؟',ref:'ص 30–31',html:`<p>تشتكي من خطأ في طلب، أو تعتذر وتحل المشكلة. ستتعلم:</p><ol><li>قراءة الفاتورة.</li><li>الشكوى والاعتذار والإجراء والرد.</li><li>${e('ordered')} للماضي و ${e("I'll")} للإجراء.</li></ol>`},
  {h:'الفاتورة',ref:'ص 30',html:vt([['invoice','فاتورة'],['quantity','الكمية'],['price / item','سعر القطعة'],['goods total','مجموع البضاعة'],['discount (5%)','خصم'],['VAT','ضريبة القيمة المضافة'],['grand total','الإجمالي النهائي']],['English','المعنى'])},
  {h:'الشكوى والاعتذار والإجراء',ref:'ص 31',html:`${vt([['Complaint','شكوى',"I ordered ten fluorescent lights but I've got twenty. / The salesman promised us a ten per cent discount, not five."],['Apology','اعتذار',"Oh, I'm sorry about that."],['Action','إجراء',"I'll check that and send you a new invoice. / Could you give ten back to the driver?"],['Response','رد',"Thank you. / Oh, good. That's very helpful."]],['المرحلة','المعنى','مثال'])}`},
  {h:'الماضي البسيط والمستقبل البسيط',ref:'ص 31',html:`${vt([['order → ordered','الماضي بـ ed'],['promise → promised','الماضي بـ d'],["I'll send another one.",'سأرسل (قرار الآن)'],["We'll give you your money back.",'سنعيد لك المبلغ']],['English','القاعدة'])}`},
  {note:'<b>توضيح للمتدرب:</b> <span class="en">VAT</span> ضريبة القيمة المضافة، ونسبتها في السعودية 15% (إضافة من خارج الكتاب؛ الفاتورة في الكتاب بريطانية بنسبة 17.5%).'},
  {h:'تمارين الكتاب',ref:'ص 30–31',html:
   bk(1,'ص 30','اكتب مع زميلك ما قد يخطئ في الطلب.',['wrong address (مثال) · wrong items · wrong quantity · wrong price · late delivery · damaged goods · no discount (نماذج)'])+
   bk(2,'ص 30','استمع: ما المشكلتان؟ وماذا يقول المورّد؟',['1: the discount — the salesman promised 10%, not 5% · the quantity — she ordered 10 fluorescent lights but got 20','2: b and e'])+
   bk(3,'ص 31','صنّف الجمل: شكوى، اعتذار، إجراء، رد.',["Complaint: The salesman promised us a ten per cent discount, not five. · I ordered ten fluorescent lights but I've got twenty.","Apology: Oh, I'm sorry about that.","Action: Could you give ten back to the driver? (مثال) · I'll make the changes to the invoice and send it to you immediately. · I'll check that and send you a new invoice.","Response: Thank you. (مثال) · Oh, good. That's very helpful."])+
   bk(4,'ص 31','نشاط ثنائي: جِد الخطأ في الفاتورة واشتكِ، أو اعتذر واقترح إجراء.',['الموقف 1: الفاتورة تحسب Zip Drive بسعر €180، والكتالوج يقول €149.95 (€180 سعر MO Drive).','الموقف 2: الفاتورة فيها 20 كرسياً دواراً PJ25P، والطلب 12.'],'معلومات الطالب أ في ص 79 من الكتاب.')},
  {h:'الاستماع',ref:'ص 30',html:au('6B-2a','ص 30 — التمرين 2','زبونة تتصل بالمورّد بسبب مشكلتين.')}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الفاتورة',title:'قراءة الفاتورة',q:'كيف تتأكد أن الفاتورة صحيحة؟',ref:'ص 30',
   art:art(`<rect x="40" y="30" width="280" height="240" rx="8" fill="${C.paper}" stroke="${C.ink}" stroke-width="2"/>${TL(180,58,'INVOICE',{fs:16,w:700})}${[['10 AC filters × 30','300.00','quantity × price'],['24 LED lamps × 18','432.00','quantity × price'],['Goods total','732.00','المجموع'],['VAT 15%','109.80','الضريبة'],['Grand total','841.80','الإجمالي']].map((x,i)=>`<g data-tip="${x[2]}"><text x="60" y="${96+i*34}" font-size="13" fill="${C.ink}" direction="ltr" font-weight="${i>1?700:400}">${x[0]}</text><text x="300" y="${96+i*34}" font-size="13" fill="${C.ink}" text-anchor="end" direction="ltr" font-weight="${i>1?700:400}">${x[1]}</text></g>`).join('')}`,'فاتورة'),
   cap:'فاتورة من إعدادنا. مرّر المؤشر على كل سطر.',side:[{tip:`تحقق من: الكمية، والسعر، والخصم، والمجموع.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'ما المشكلة؟',cases:[{q:'You ordered 10, the invoice says 20.',opts:[['wrong quantity',1],['wrong address',0]]},{q:'The catalogue says SAR 18, the invoice says SAR 21.',opts:[['wrong price',1],['late delivery',0]]}]}),title:'مختبر مصغّر: المشكلة'}]},
  {st:2,short:'الشكوى والاعتذار',title:'Complaint → Apology → Action → Response',q:'ماذا تقول إذا وصلك عدد أكثر مما طلبت؟',ref:'ص 31',
   art:art(`${[["I ordered 10 but I've got 20.",'Complaint',C.red],["I'm sorry about that.",'Apology',C.yel],['Could you give 10 back to the driver?','Action',C.paper],["Thank you. That's very helpful.",'Response',C.grn]].map((x,i)=>`<g data-tip="${x[1]}"><rect x="20" y="${30+i*60}" width="320" height="48" rx="12" fill="${x[2]}" stroke="${C.ink}" stroke-width="2"/>${TL(180,60+i*60,x[0],{fs:13,w:700,c:x[2]===C.red||x[2]===C.grn?'#fff':C.ink})}</g>`).join('')}`,'complaint'),
   cap:'المراحل الأربع. مرّر المؤشر على كل منها.',side:[{tip:`${e("I'll")} للقرار الذي نتخذه الآن: ${e("I'll send you a new invoice.")}`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"I ___ ten boxes but I've got twenty.",o:['ordered','order'],a:0},{s:"I'm ___ about that.",o:['sorry','sad'],a:0},{s:"___ send you a new invoice.",o:["I'll","I"],a:0},{s:"Oh, good. That's very ___.",o:['helpful','help'],a:0}]}),title:'مختبر مصغّر: المراحل'}]},
  {recap:['invoice, discount, VAT, grand total.',"Complaint: I ordered … but I've got …","Apology: I'm sorry about that.","Action: I'll … / Could you …?","Response: Thank you. That's very helpful."]}
 ],
 lab:lab6b,
 examples:[
  {title:'مثال 1: شكوى',ref:'ص 31',q:`<p>طلبت 15 علبة ووصلك 5.</p>`,given:[],solve:()=>[{t:`الخطوة 1: الماضي: ${e('I ordered fifteen boxes')}`},{t:`الخطوة 2: ${e("but I've got five")}`},{t:`الخطوة 3: ${e("I ordered fifteen boxes but I've got five.")}`,final:true}]},
  {title:'مثال 2: اعتذار وإجراء',ref:'ص 31',q:`<p>اعتذر وقل إنك سترسل الباقي غداً.</p>`,given:[],solve:()=>[{t:`الخطوة 1: ${e("I'm sorry about that.")}`},{t:`الخطوة 2: الإجراء بـ ${e("I'll")}: ${e("I'll send ten more tomorrow.")}`},{t:`الخطوة 3: ${e("I'm sorry about that. I'll send ten more tomorrow.")}`,final:true}]},
  {title:'مثال 3: حساب الضريبة',ref:'ص 30',q:`<p>مجموع البضاعة 732 ريالاً، والضريبة 15%. كم الإجمالي؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: الضريبة = 732 × 0.15 = 109.80`},{t:`الخطوة 2: الإجمالي = 732 + 109.80`},{t:`الخطوة 3: ${e('Grand total: SAR 841.80')}`,final:true}]}
 ],
 quiz:[
  {q:"I ___ ten lights but I've got twenty.",o:['ordered','order','ordering','orders'],c:0,e:'الماضي.'},
  {q:'Apology:',o:["I'm sorry about that.","Thank you.","I ordered ten.","Could you give ten back?"],c:0,e:'اعتذار.'},
  {q:"___ send you a new invoice.",o:["I'll","I'm","I","I'd to"],c:0,e:"I'll."},
  {q:'VAT:',o:['ضريبة القيمة المضافة','خصم','شحن','عربون'],c:0,e:'VAT.'},
  {q:'Response:',o:["Thank you. That's very helpful.","I'm sorry.","I'll check that.","I ordered ten."],c:0,e:'رد.'},
  {q:'promise →',o:['promised','promiseed','promisd','promissed'],c:0,e:'+ d.'}
 ]
});

/* ========== Review 2 ========== */
B.lesson({
 id:'u6-l3',unit:6,order:3,pages:'32–33',
 title:'Review 2 — مراجعة الوحدات 4–6',
 summary:'مراجعة قول الوقت وفروق التوقيت، وعبارات الهاتف، وتخطيط جدول يوم، والكميات (not much، a few، How many …?)، والشكوى والإجراء، وتقديم طلب بالهاتف، مع إجابات تمارين المراجعة.',
 theory:[
  {h:'ماذا تراجع؟',ref:'ص 32–33',html:vt([['الوقت','five to eight · nine thirty','4A'],['الهاتف',"Who's calling, please? · I'll put you through.",'5A'],['الجدول','At 10.00, you can visit the factory.','4B'],['الكميات','not many problems · a little money','6A'],['الشكوى والإجراء',"We ordered 100 but we've got 110. — Can you give ten back to the driver?",'6B']],['النقطة','مثال','الدرس'])},
  {h:'أخطاء شائعة في الهاتف',ref:'ص 32',html:vt([['I can help you?','Can I help you?'],['Can I speaking to …?','Can I speak to …?'],['Who calls?',"Who's calling?"],['I am Marco (في الهاتف)','This is Marco.'],['I put you through.',"I'll put you through."]],['خطأ','صواب'])},
  {h:'تمارين المراجعة',ref:'ص 32–33',html:
   bk('Vocabulary 1','ص 32','طابق الأوقات بالساعات، ثم احسب الوقت في نيوزيلندا.',['1 b','2 e','3 d','4 c','5 a','6 f'],'من قراءتنا لصور الساعات. نيوزيلندا GMT +12 على خريطة ص 20.')+
   bk('Language 1','ص 32','صحّح الأخطاء في المكالمة.',['A: Unicom. Can I help you?','B: Can I speak to Mr Perez, please?',"A: Who's calling, please?",'B: This is Marco Rosetti.',"A: Just a moment. I'll put you through."])+
   bk('Communication 1','ص 32','خطط جدول يوم لزميل زائر، ثم اشرحه لزميلك بالهاتف.',null)+
   bk('Vocabulary 2','ص 33','اختر كلمة من A وكلمة من B تتفقان.',['not much: stuff · trouble · money','not many: things · computers · problems · people','some / a lot of: كل الكلمات','a few: things · computers · problems · people','a little: stuff · trouble · money','How much …? stuff · trouble · money · How many …? things · computers · problems · people'])+
   bk('Language 2','ص 33','طابق الشكاوى بالإجراءات.',['1 c','2 d','3 b','4 e','5 a'])+
   bk('Communication 2','ص 33','مثّل مع زميلك مكالمات طلب من الكتيبات، وأعطِ السعر النهائي.',null)}
 ],
 stations:[
  {intro:true},
  {st:1,short:'الوحدتان 4 و 5',title:'خلاصة: الوقت والهاتف',q:'صحّح: Who calls, please?',ref:'ص 32',
   art:art(`<g data-tip="five to eight = 7.55"><rect x="20" y="40" width="150" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(95,68,'7.55 five to eight',{fs:12,w:700})}</g>
    <g data-tip="nine thirty = 9.30"><rect x="190" y="40" width="150" height="44" rx="12" fill="${C.yel}" stroke="${C.ink}" stroke-width="2"/>${TL(265,68,'9.30 nine thirty',{fs:12,w:700})}</g>
    ${[["Can I help you?"],["Who's calling, please?"],["This is Marco Rosetti."],["I'll put you through."]].map((x,i)=>`<g data-tip="عبارة صحيحة"><rect x="20" y="${100+i*44}" width="320" height="36" rx="10" fill="${C.paper}" stroke="${C.ink}" stroke-width="1.5"/>${TL(180,124+i*44,x[0],{fs:13,w:700})}</g>`).join('')}`,'خلاصة 4–5'),
   cap:'أوقات وعبارات هاتف صحيحة. مرّر المؤشر على كل منها.',side:[{tip:`بعد ${e('Can I')} الفعل كما هو: ${e('Can I speak')}.`}],
   body:[{widget:(el,B)=>N.cases(el,B,{intro:'أي جملة صحيحة؟',cases:[{q:'1',opts:[['Can I speak to Mr Perez?',1],['Can I speaking to Mr Perez?',0]]},{q:'2',opts:[["Who's calling, please?",1],['Who calls, please?',0]]},{q:'3',opts:[["I'll put you through.",1],['I put you through.',0]]}]}),title:'مختبر مصغّر: الهاتف'}]},
  {st:2,short:'الوحدة 6',title:'خلاصة: الكميات والشكاوى',q:'طلبت 100 علبة ووصلت 110. ماذا يقول المورّد؟',ref:'ص 33',
   art:art(`<g data-tip="الشكوى"><rect x="20" y="70" width="320" height="50" rx="14" fill="${C.red}" stroke="${C.ink}" stroke-width="2"/>${TL(180,101,"We ordered 100 boxes but we've got 110.",{fs:13,w:700,c:'#fff'})}</g>
    <g data-tip="الإجراء"><rect x="20" y="140" width="320" height="50" rx="14" fill="${C.grn}" stroke="${C.ink}" stroke-width="2"/>${TL(180,171,'Can you give ten back to the driver?',{fs:13,w:700,c:'#fff'})}</g>`,'complaint action'),
   cap:'شكوى وإجراء. مرّر المؤشر على كل منهما.',side:[{tip:`${e('not much money')} / ${e('not many people')}.`}],
   body:[{widget:(el,B)=>N.gaps(el,B,{intro:'اختر:',items:[{s:"There aren't ___ people here.",o:['many','much'],a:0},{s:"We don't have ___ money.",o:['much','many'],a:0},{s:"I'll put one in the ___ for you.",o:['post','driver'],a:0}]}),title:'مختبر مصغّر: الوحدة 6'}]},
  {recap:['five to eight · nine thirty · quarter past four.',"Can I help you? · Can I speak to …? · Who's calling? · This is … · I'll put you through.",'not much + غير معدود، not many + معدود.',"We ordered … but we've got …","We'll send … / Can you …?"]}
 ],
 examples:[
  {title:'مثال 1: الوقت',ref:'ص 32',q:`<p>اكتب 4.15 بالكلمات.</p>`,given:[],solve:()=>[{t:`الخطوة 1: 15 دقيقة = ${e('quarter')}.`},{t:`الخطوة 2: قبل النصف: ${e('past')}.`},{t:`الخطوة 3: ${e('quarter past four')}`,final:true}]},
  {title:'مثال 2: تصحيح جملة هاتف',ref:'ص 32',q:`<p>صحّح: I can help you?</p>`,given:[],solve:()=>[{t:`الخطوة 1: السؤال يبدأ بـ ${e('Can')}.`},{t:`الخطوة 2: ثم الفاعل ${e('I')}.`},{t:`الخطوة 3: ${e('Can I help you?')}`,final:true}]},
  {title:'مثال 3: إجراء مناسب',ref:'ص 33',q:`<p>الشكوى: The driver didn't bring a price list. ما الإجراء؟</p>`,given:[],solve:()=>[{t:`الخطوة 1: نحتاج أن نرسل قائمة الأسعار.`},{t:`الخطوة 2: بالبريد: ${e('in the post')}.`},{t:`الخطوة 3: ${e("I'll put one in the post for you.")}`,final:true}]}
 ],
 quiz:[
  {q:'7.55 =',o:['five to eight','five past seven','five to seven','fifty-five to eight'],c:0,e:'five to eight.'},
  {q:'Correct:',o:['Can I speak to Mr Perez?','Can I speaking to Mr Perez?','I can speak Mr Perez?','Can speak I to Mr Perez?'],c:0,e:'Can I speak.'},
  {q:"There isn't ___ time.",o:['much','many','few','a few'],c:0,e:'time غير معدود.'},
  {q:'How ___ computers do you need?',o:['many','much','little','lot'],c:0,e:'معدود.'},
  {q:"I'll put one in the ___ for you.",o:['post','drive','invoice','order'],c:0,e:'in the post.'},
  {q:'Who calls, please? → ___',o:["Who's calling, please?","Who is call?","Who called?","Who calling?"],c:0,e:"Who's calling?"}
 ]
});
})(PLCBOOK);

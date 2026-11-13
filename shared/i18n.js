/* وضع «English» لمقررات الإنجليزي: زر في الأعلى يحوّل المقرر كله إلى إنجليزية مبسطة.
   الفكرة: الصفحة تُبنى بالعربي كالعادة، ثم يُستبدل كل نص عربي بترجمته من قاموس المقرر.
   - PLCBOOK.enDict({ 'النص العربي كما يظهر': 'English', ... })  — المفتاح: innerHTML العنصر (أو نص العقدة) بعد ضغط المسافات.
     القيمة '=' تعني: يبقى بالعربي (ترجمة كلمة جديدة مثلاً).
   - PLCBOOK.enPat([[/regex/, 'replacement'], ...]) للنصوص المتغيرة (أرقام المختبر).
   - ما لا يوجد في القاموس يبقى بالعربي ويُسجَّل في window.__enMissing (لأداة الفحص).
   - العناصر .lw-ar و .lw-mean و .lw-tr و [data-keep-ar] تبقى بالعربي دائماً (ترجمة الكلمات الجديدة).
   - في الوضع الإنجليزي: 🔊 لكل فقرة شرح، وزر «Listen to the whole section» لكل قسم ومحطة. */
(function(B){
const AR=/[؀-ۿ]/;
const norm=s=>String(s).replace(/\s+/g,' ').replace(/&nbsp;/g,' ').trim();
const D=new Map(),PAT=[];
B.enDict=o=>{for(const k in o)D.set(norm(k),o[k])};
B.enPat=a=>{a.forEach(x=>PAT.push(x))};
let lang='ar';try{lang=localStorage.getItem('elib-lang')==='en'?'en':'ar'}catch(e){}
{const q=(location.search.match(/[?&]lang=(en|ar)/)||[])[1];if(q){lang=q;try{localStorage.setItem('elib-lang',q)}catch(e){}}}
B.lang=()=>lang;
const root=document.documentElement;
const miss=window.__enMissing=new Set();
const KEEP='.lw-ar,.lw-mean,.lw-tr,.gl,[data-keep-ar],.katex';
const LIVE='input,select,textarea,button,canvas,svg,[contenteditable]';
const REF=/\s*<span class="ref">([^<]*)<\/span>/;
function look(k){const n=norm(k);if(!n)return null;if(D.has(n))return D.get(n);
  /* عنوان + <span class="ref">ص 4</span>: نترجم الجزأين منفصلين */
  const rm=n.match(REF);if(rm&&n.replace(REF,'').trim()){const a=look(n.replace(REF,'')),r=look(rm[1]);if(a!=null&&(r!=null||!AR.test(rm[1])))return (a==='='?n.replace(REF,''):a)+' <span class="ref">'+(r==null||r==='='?rm[1]:r)+'</span>';return null}
  for(const [re,rep] of PAT){const m=n.match(re);if(m){const v=typeof rep==='function'?rep(m,look):n.replace(re,rep);if(v!=null&&!AR.test(v))return v}}return null}
B.enLook=look;
/* نصوص عقد مباشرة في العنصر */
const ownAr=el=>{for(const c of el.childNodes)if(c.nodeType===3&&AR.test(c.nodeValue))return true;return false};
function trText(el,quiet){let bad=0;for(const c of [...el.childNodes]){if(c.nodeType!==3||!AR.test(c.nodeValue))continue;const v=look(c.nodeValue);
  if(v==null){bad++;if(!quiet)miss.add(norm(c.nodeValue));continue}if(v==='=')continue;const lead=c.nodeValue.match(/^\s*/)[0],tail=c.nodeValue.match(/\s*$/)[0];c.nodeValue=lead+v+tail}return bad}
function trAttr(el){for(const a of ['data-tip','title','aria-label','placeholder','alt']){const v0=el.getAttribute&&el.getAttribute(a);if(!v0||!AR.test(v0))continue;const v=look(v0);if(v==null){miss.add(norm(v0));continue}if(v!=='=')el.setAttribute(a,v)}}
function walk(el){
  if(el.nodeType!==1||el.matches(KEEP))return;
  trAttr(el);
  if(el.tagName==='SCRIPT'||el.tagName==='STYLE')return;
  if(ownAr(el)){
    const live=el.querySelector(LIVE)||el.matches('svg *');
    if(!live&&!el.querySelector(KEEP)){if(el.__enk==null)el.__enk=el.innerHTML;let v=look(el.innerHTML);if(v==null&&el.__enk!==el.innerHTML)v=look(el.__enk);if(v!=null){if(v!=='=')el.innerHTML=v;else{el.setAttribute('dir','rtl');el.setAttribute('lang','ar')}el.querySelectorAll('*').forEach(trAttr);return}
      /* لا مطابقة للعنصر كاملاً: جرّب عُقد النص منفردة */
      const hasEl=[...el.children].length>0;if(!hasEl){miss.add(norm(el.__enk));return}
      if(trText(el,true))miss.add(norm(el.__enk))}
    else trText(el)}
  for(const ch of [...el.children])walk(ch);
}
/* 🔊 لكل فقرة + الاستماع للقسم كاملاً */
const sayText=el=>{const c=el.cloneNode(true);c.querySelectorAll('.say,.saybtn,.en-say,button,.ref,svg,.katex,'+KEEP).forEach(x=>x.remove());return norm(c.textContent)};
B.enSayText=sayText;
const PARA='.theory p,.theory li,.theory .note,.theory .prose,.theory figcaption';
function addSay(scope){if(!B.ENK&&!window.ENK)return;const N=window.ENK;
  scope.querySelectorAll(PARA).forEach(p=>{if(p.dataset.ensay||p.closest('.ebk,.bx,.vt,table,.lw,.ex-step,.pd'))return;if(p.matches('.prose,.note')&&p.querySelector('p,li,div,table'))return;if(p.querySelector('select,input,textarea,.gap'))return;if(p.querySelector('[data-say]'))return;const t=sayText(p);if(!t||AR.test(t)||t.split(' ').length<3)return;
    p.dataset.ensay='1';const b=document.createElement('button');b.type='button';b.className='say en-say';b.textContent='🔊';b.title='Listen';b.setAttribute('aria-label','Listen');b.dataset.say=t;p.appendChild(document.createTextNode(' '));p.appendChild(b)});
  /* زر لكل قسم/محطة */
  const heads=[...scope.querySelectorAll('.theory h2.th, .theory .st-h h2')];
  heads.forEach(h=>{if(h.dataset.enall)return;h.dataset.enall='1';const b=document.createElement('button');b.type='button';b.className='btn en-all';b.textContent='🔊 Listen to the whole section';
    b.addEventListener('click',()=>{const L=[];let n=h.closest('section.st')?h.closest('section.st').querySelectorAll('[data-ensay] > .en-say'):(()=>{const out=[];let x=h.nextElementSibling;while(x&&!(x.matches&&x.matches('h2.th'))){x.querySelectorAll&&x.querySelectorAll('[data-ensay] > .en-say').forEach(y=>out.push(y));x=x.nextElementSibling}return out})();
      n.forEach(y=>L.push(y.dataset.say));playList(L,b)});
    h.insertAdjacentElement('afterend',b)})}
let playing=null;
function playList(L,btn){if(playing){playing.stop=true;playing=null;btn.textContent='🔊 Listen to the whole section';return}
  const job={stop:false};playing=job;btn.textContent='⏹ Stop';let i=0;
  const next=()=>{if(job.stop||i>=L.length){if(playing===job)playing=null;btn.textContent='🔊 Listen to the whole section';return}
    const t=L[i++];(window.ENK&&ENK.speakP?ENK.speakP(t):new Promise(r=>{try{ENK.speak(t);setTimeout(r,Math.max(1500,t.length*75))}catch(e){r()}})).then(next)};next()}
let busy=false,queued=false;
function run(){if(lang!=='en')return;if(busy){queued=true;return}busy=true;obs&&obs.disconnect();
  try{walk(document.body);const v=document.getElementById('view');if(v)addSay(v)}catch(e){console.error(e)}root.setAttribute('data-en-ready','');
  obs&&obs.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['data-tip','title','aria-label','placeholder']});busy=false;if(queued){queued=false;requestAnimationFrame(run)}}
let obs=null;
function setLang(l){lang=l;try{localStorage.setItem('elib-lang',l)}catch(e){}location.reload()}
/* الزر */
function button(){const ta=document.querySelector('.top-actions');if(!ta||ta.querySelector('.langbtn'))return;
  /* أثناء التجربة: الزر يظهر فقط إذا فُعّل للمقرر (B.enShow) أو كان المتصفح على الإنجليزي (?lang=en) */
  if(lang!=='en'&&!B.enShow)return;
  const b=document.createElement('button');b.type='button';b.className='stylebtn langbtn';
  b.innerHTML=lang==='en'?'<span class="sl">Language: </span><b><span class="lg-l">English</span><span class="lg-s">EN</span></b>':'<span class="sl">لغة الشرح: </span><b><span class="lg-l">عربي</span><span class="lg-s">ع</span></b>';
  b.title=lang==='en'?'Switch to Arabic':'حوّل المقرر إلى إنجليزية مبسطة';b.setAttribute('aria-label',b.title);
  b.addEventListener('click',()=>setLang(lang==='en'?'ar':'en'));ta.insertBefore(b,ta.firstChild)}
if(lang==='en'){root.setAttribute('lang','en');root.setAttribute('dir','ltr');root.setAttribute('data-lang','en')}
B.enStart=()=>{button();if(lang!=='en')return;obs=new MutationObserver(()=>{if(!busy)requestAnimationFrame(run)});run();
  const t=document.querySelector('title');if(t&&AR.test(t.textContent)){const v=look(t.textContent);if(v&&v!=='=')t.textContent=v}};
/* ===== نصوص الواجهة المشتركة في كل مقررات الإنجليزي ===== */
const ORD=['','1','2','3','4','5','6','7','8','9','10'],ARO={'الأولى':1,'الثانية':2,'الثالثة':3,'الرابعة':4,'الخامسة':5,'السادسة':6,'السابعة':7,'الثامنة':8,'التاسعة':9,'العاشرة':10};
const pp=x=>/[–-]/.test(x)?'pp. '+x:'p. '+x;
const T=(m,f,i)=>{const v=f(m[i]);return v==null?null:(v==='='?m[i]:v)};
B.enPat([
 [/^ص ([\d–-]+)$/,m=>pp(m[1])],
 [/^انجل-(\d+)$/,'ENG-$1'],
 [/^(إنقاص|زيادة) درجة (.+)$/,m=>`${m[1]==='زيادة'?'One more mark':'One mark less'}: ${m[2]}`],
 [/^(\d+) متدرب$/,'$1 trainees'],
 [/^الدرس ([\d.]+) · ص ([\d–-]+)$/,m=>`Lesson ${m[1]} · ${pp(m[2])}`],
 [/^الوحدة (\S+)$/,m=>ARO[m[1]]?`Unit ${ARO[m[1]]}`:null],
 [/^المحطة (\S+) · ص ([\d–-]+)$/,m=>ARO[m[1]]?`Station ${ARO[m[1]]} · ${pp(m[2])}`:null],
 [/^تمرين ([\w. ]+)$/,m=>`Exercise ${m[1]}`],
 [/^يقابل تمرين ([\w. ]+) ص ([\d–-]+)$/,m=>`Like Exercise ${m[1]}, ${pp(m[2])}`],
 [/^ص ([\d–-]+) — التمرين ([\w. ]+)$/,m=>`${pp(m[1])} — Exercise ${m[2]}`],
 [/^المقطع (\S+)$/,m=>`Track ${m[1]}`],
 [/^\((\d+) من (\d+)\)$/,m=>`(${m[1]} of ${m[2]})`],
 [/^جاهز لهذا الدرس: <b>(\d+)<\/b> (أسئلة|سؤال|أمثلة|مثال|أعطال)$/,m=>`Ready for this lesson: <b>${m[1]}</b> ${/أمثلة|مثال/.test(m[2])?'examples':/أعطال/.test(m[2])?'faults':'questions'}`],
 [/^عرفت <b>(\d+)<\/b> من (\d+)$/,m=>`You know <b>${m[1]}</b> of ${m[2]}`],
 [/^باقي في هذه الجولة: (\d+)$/,m=>`Left in this round: ${m[1]}`],
 [/^وصّلت (\d+) من (\d+)$/,m=>`Matched ${m[1]} of ${m[2]}`],
 [/^رتّبت (\d+) من (\d+)$/,m=>`Ordered ${m[1]} of ${m[2]}`],
 [/^(الكل|قوانين|تعاريف|قواعد) <small>(\d+)<\/small>$/,m=>`${{'الكل':'All','قوانين':'Rules','قواعد':'Rules','تعاريف':'Words'}[m[1]]} <small>${m[2]}</small>`],
 [/^<i>(\d+)<\/i>(.+)$/,(m,f)=>{const v=T(m,f,2);return v==null?null:`<i>${m[1]}</i>${v}`}],
 [/^(\d+)\. ([\s\S]+)$/,(m,f)=>{const v=T(m,f,2);return v==null?null:`${m[1]}. ${v}`}],
 [/^([\s\S]*?) \(مثال\)$/,(m,f)=>{const v=AR.test(m[1])?f(m[1]):m[1];return v==null?null:`${v==='='?m[1]:v} (example)`}],
 [/^مثال (\d+): ([\s\S]+)$/,(m,f)=>{const v=T(m,f,2);return v==null?null:`Example ${m[1]}: ${v}`}],
 [/^([^\u0600-\u06FF]+?) — [\u0600-\u06FF][^<]*$/,'$1'],
 [/^(<span class="k">\d+<\/span>[^\u0600-\u06FF]+?) — [\u0600-\u06FF][^<]*$/,'$1']
]);
B.enDict({
 'المكتبة الرقمية للدراسات العامة':'General Studies Digital Library','حجم الخط':'Text size','تصغير الخط':'Smaller text','أ−':'A−','تكبير الخط':'Bigger text','أ+':'A+',
 'إخفاء فهرس الدروس وتوسيع الشرح':'Hide the lesson list','إخفاء الفهرس':'Hide list','إظهار فهرس الدروس':'Show the lesson list','إظهار الفهرس':'Show list',
 'اختر أسلوب الشرح':'Choose the lesson style','أسلوب الشرح الحالي رسمي، اضغط للتبديل':'Style: Classic. Click to change.','أسلوب الشرح الحالي التفاعلي، اضغط للتبديل':'Style: Interactive. Click to change.',
 'أسلوب الشرح:':'Style:','رسمي':'Classic','التفاعلي':'Interactive','الوضع الليلي':'Dark mode','تبديل الوضع الليلي':'Dark mode on/off',
 'دروس الوحدة':'Unit lessons','‹ فهرس المقرر':'‹ Course contents','الوحدات الأخرى':'Other units','الفهرس':'Contents',
 'الشرح':'Lesson','المختبر':'Lab','الأمثلة المحلولة':'Worked examples','اختبر نفسك':'Test yourself','الأنشطة التفاعلية':'Activities',
 'الأمثلة':'Examples','اختبر':'Test','الأنشطة':'Activities','أنهيت الدرس':'I finished the lesson','التالي':'Next','السابق':'Previous',
 'كلمات الدرس':'Lesson words','مرّر المؤشر على الكلمة (أو المسها) لترى مثالاً من الحياة اليومية.':'Point at a word (or touch it) to see an example from daily life.','مثال':'Example',
 'استمع للنطق':'Listen','🔊 استمع':'🔊 Listen','استمع':'Listen','أظهر النص':'Show the text','أخفِ النص':'Hide the text',
 'في كتابك':'In your book','الإجابات (بأرقام البنود)':'Answers (by item number)','الإجابات':'Answers',
 'تمرين مقابل':'Practice exercise','بنفس فكرة تمرين الكتاب وبجمل جديدة':'Same idea as the book exercise, with new sentences',
 'اختر الكلمة':'Choose the word','اختر الحرف':'Choose the letter','جمل تساعدك:':'Useful sentences:','نموذج (اقرأه بعد أن تحاول)':'Model answer (read it after you try)',
 'هذا مثال؛ اكتب بياناتك أنت.':'This is an example. Write your own information.','تحقّق':'Check','تحقق':'Check','إعادة':'Try again','ابدأ من جديد':'Start again',
 'جرّب':'Try it','أنفّذ':'I do it','لا أنفّذ':"I don't do it",
 'اعرض الحل كاملاً':'Show the full answer','إخفاء الحل':'Hide the answer','الخطوة التالية':'Next step','توقّع الناتج':'Guess the answer','غيّر القيم':'Change the values',
 'اختبر فهمك للدرس':'Check your understanding',
 'داخل المحاضرة <small>(يطلقها المدرب)</small>':'In class <small>(the trainer starts them)</small>','(يطلقها المدرب)':'(the trainer starts them)',
 'المسابقة':'Quiz','ابدأ المسابقة':'Start the quiz','سؤال مفتوح وسحابة كلمات':'Open question and word cloud','ابدأ السؤال المفتوح':'Start the open question',
 'تذكرة خروج':'Exit ticket','ابدأ تذكرة الخروج':'Start the exit ticket','اكتشف الخطأ':'Find the mistake','ابدأ اكتشف الخطأ':'Start "Find the mistake"','دخول نشاط برمز':'Join with a code',
 'للمذاكرة الذاتية':'Study on your own','بطاقات المراجعة':'Review cards','نوع البطاقات':'Card type','بطاقة: اضغط لقلبها':'Card: click to turn it over','قانون':'Rule','تعريف':'Word',
 'اضغط البطاقة (أو مسافة) لترى الجواب':'Click the card (or press space) to see the answer','اقلب البطاقة':'Turn the card','عرفتها':'I knew it','لم أعرفها':"I didn't know it",
 'اختبار قبل وبعد الدرس':'Test before and after the lesson','ابدأ: قبل الدرس':'Start: before the lesson','بعد الدرس':'After the lesson',
 'كيف تقرأ هذا الدرس؟':'How to use this lesson','توضيح للمتدرب':'Note for you','إضافة من خارج الكتاب':'Extra (not in the book)','محطات الدرس':'Lesson stations',
 'توقّع قبل أن تكمل':'Guess before you go on','اختر الصحيح:':'Choose the right answer:','خلاصة الدرس في 5 أسطر':'The lesson in 5 lines','الاستماع':'Listening',
 'تمارين الكتاب':'Book exercises','كما في الكتاب':'As in the book','المصحح':'Corrected','إخفاء الشرح':'Hide the note','لم يُرفع بعد':'Not uploaded yet',
 'من قراءتنا للصور.':'From our reading of the pictures.','من قراءتنا للصورة.':'From our reading of the picture.','حسب صورة الكتاب.':'See the picture in the book.',
 'لغة الشرح:':'Lesson language:','عربي':'Arabic',
 'إخفاء الترجمة':'Hide translation','إخفاء الترجمة: تظهر بالوقوف عليها أو لمسها':'Hide translation: point at it or touch it to see it','الدرجات':'Marks',' الدرجات':' Marks',
 'أضف أسماء المتدربين، واضغط + عند كل إجابة صحيحة. الأسماء محفوظة في هذا المتصفح فقط. الضغط على − عند الصفر يحذف الاسم.':'Add the trainees\' names. Press + for each right answer. The names stay in this browser only. Press − at zero to remove a name.',
 'اسم المتدرب':'Trainee name','إضافة':'Add','إغلاق':'Close','تصفير الدرجات':'Reset marks','المعنى':'Meaning'
});
if(document.readyState==='complete')B.enStart();else addEventListener('load',()=>B.enStart());
})(PLCBOOK);

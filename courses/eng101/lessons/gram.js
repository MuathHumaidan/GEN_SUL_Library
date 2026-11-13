/* «اشرح أولاً» — انجل-101: قواعد يحتاجها الدرس قبل تمارينه ولم يشرحها الكتاب قبلها. إضافة من خارج الكتاب، والأمثلة من عندنا.
   يُدرج كل شرح قسماً في «رسمي» بعد «ماذا ستتعلم؟» ومحطة أولى في «التفاعلي» (ENK.gram في en.js). */
(function(N){const {e}=N;
/* الفعل be مع الضمائر — مشترك بين انجل-101 و انجل-111 (الأمثلة تختلف) */
const BE=(ex)=>({title:'الفعل be مع الضمائر',short:'الضمائر و be',q:'متى نقول am ومتى is ومتى are؟',
 intro:`قبل أن نتعارف نحتاج الفعل ${e('be')}، ومعناه «يكون». لا يظهر في الجملة العربية غالباً، لكنه لازم في الجملة الإنجليزية. يتغيّر حسب الضمير: ${e('am')} مع ${e('I')}، و ${e('is')} مع ${e('he, she, it')}، و ${e('are')} مع ${e('you, we, they')}.`,
 head:['الضمير مع be','المختصر','المعنى'],
 rows:[['I am',"I'm",'أنا'],['you are',"you're",'أنتَ / أنتِ / أنتم'],['he is',"he's",'هو'],['she is',"she's",'هي'],['it is',"it's",'هو / هي (لغير الإنسان)'],['we are',"we're",'نحن'],['they are',"they're",'هم / هنّ']],
 ex:ex,
 note:[`السؤال: نقدّم ${e('be')} على الضمير: ${e('You are a student.')} ← ${e('Are you a student?')}`,`النفي: نضيف ${e('not')} بعد ${e('be')}: ${e("I'm not")}، ${e("he isn't")}، ${e("they aren't")}.`,`في جواب «نعم» القصير لا نختصر: ${e('Yes, I am.')} وليس ${e("Yes, I'm.")}`],
 lab:{title:'am أم is أم are؟',intro:'اختر الصحيح (أمثلة من عندنا):',items:[
  {s:'I ___ Faisal.',o:['am','is','are'],a:0,why:'مع I نستعمل am.'},
  {s:'She ___ an engineer.',o:['am','is','are'],a:1,why:'مع she نستعمل is.'},
  {s:'They ___ from Jordan.',o:['am','is','are'],a:2,why:'مع they نستعمل are.'},
  {s:'___ you a student?',o:['Am','Is','Are'],a:2,why:'مع you نستعمل are، وفي السؤال تأتي قبل الضمير.'},
  {s:'It ___ a spanner.',o:['am','is','are'],a:1,why:'مع it نستعمل is.'},
  {s:"He ___ a teacher. He's a student.",o:["isn't","aren't","am not"],a:0,why:"مع he النفي isn't (= is not)."}]}});
N.gram('u1-l1',BE(["I'm a student.","You're an engineer.","He's from Egypt.","She's a technician.","It's a screwdriver.","We're students.","They're from Jordan.","Are you a student? — Yes, I am.","Is he an engineer? — No, he isn't."]));

N.gram('u2-l2',{title:'a و some مع المفرد والجمع',short:'a و some',q:'متى نقول a washer ومتى some washers؟',
 intro:`مع شيء واحد نستعمل ${e('a')} أو ${e('an')}: ${e('a washer')}. ومع أكثر من واحد نضيف ${e('s')} للاسم، ونستعمل ${e('some')} (بعض) إذا لم نذكر العدد: ${e('some washers')}. وإذا عرفنا العدد نذكره: ${e('twenty washers')}. ونسأل عن العدد بـ ${e('How many…?')} والاسم بعده جمع.`,
 head:['واحد','بعض (عدد غير محدد)','عدد محدد'],
 rows:[['a washer','some washers','twenty washers'],['a nut','some nuts','six nuts'],['an axle','some axles','two axles']],
 ex:['I need a screwdriver.','I need some screws, please.','How many screws? — Ten, please.'],
 lab:{title:'a أم an أم some؟',intro:'اختر الصحيح:',items:[
  {s:'I need ___ spanner.',o:['a','some'],a:0,why:'spanner مفرد فنقول a.'},
  {s:'I need ___ bolts, please.',o:['a','some'],a:1,why:'bolts جمع فنقول some.'},
  {s:'I need ___ adapter.',o:['a','an'],a:1,why:'adapter تبدأ بصوت متحرك فنقول an.'},
  {s:'How many ___ do you need?',o:['nut','nuts'],a:1,why:'بعد How many يكون الاسم جمعاً.'}]}});

N.gram('u3-l2',{title:'المضارع البسيط مع كل الضمائر',short:'المضارع البسيط',q:'لماذا نقول I work لكن He works؟',
 intro:`نستعمل المضارع البسيط لعمل نقوم به دائماً أو كل يوم، ولوظيفة جهاز. مع ${e('I, you, we, they')} يبقى الفعل كما هو: ${e('I work')}. ومع ${e('he, she, it')} نضيف ${e('s')}: ${e('he works')}، ${e('it measures')}. وفي السؤال والنفي نستعمل ${e('do')} أو ${e('does')}، ويعود الفعل بعدها بلا ${e('s')}.`,
 head:['مع','الفعل','مثال'],
 rows:[['I / you / we / they','work','I work in Jeddah.'],['he / she / it','works','He works in a factory.'],['السؤال','Do / Does + الفعل','Where do you work? · Where does he work?'],['النفي',"don't / doesn't + الفعل","I don't work at night. · It doesn't measure speed."]],
 ex:['I study at a technical college.','She studies electronics.','What does Ahmed do? — He works at a car company.'],
 note:[`إملاء ${e('s')}: الفعل المنتهي بـ ${e('s, sh, ch, x, o')} نضيف له ${e('es')}: ${e('watch → watches')}، ${e('go → goes')}. والمنتهي بحرف ساكن + ${e('y')} نحذف ${e('y')} ونضيف ${e('ies')}: ${e('study → studies')}.`],
 lab:{title:'الفعل مع s أم بدونها؟',intro:'اختر الصحيح:',items:[
  {s:'I ___ at a factory.',o:['work','works'],a:0,why:'مع I يبقى الفعل كما هو.'},
  {s:'He ___ at a factory.',o:['work','works'],a:1,why:'مع he نضيف s.'},
  {s:'The compass ___ North.',o:['find','finds'],a:1,why:'the compass = it، فنضيف s.'},
  {s:'Where ___ you work?',o:['do','does'],a:0,why:'مع you نستعمل do.'},
  {s:'___ she study English?',o:['Do','Does'],a:1,why:'مع she نستعمل does، والفعل بعدها بلا s.'},
  {s:'Ali ___ electronics.',o:['studys','studies'],a:1,why:'حرف ساكن + y: نحذف y ونضيف ies.'}]}});
})(window.ENK);

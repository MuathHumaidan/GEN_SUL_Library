/* «اشرح أولاً» — انجل-111: قواعد يحتاجها الدرس قبل تمارينه ولم يشرحها الكتاب قبلها. إضافة من خارج الكتاب، والأمثلة من عندنا.
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
  {s:'I ___ Felix.',o:['am','is','are'],a:0,why:'مع I نستعمل am.'},
  {s:'She ___ an engineer.',o:['am','is','are'],a:1,why:'مع she نستعمل is.'},
  {s:'They ___ from Jordan.',o:['am','is','are'],a:2,why:'مع they نستعمل are.'},
  {s:'___ you a student?',o:['Am','Is','Are'],a:2,why:'مع you نستعمل are، وفي السؤال تأتي قبل الضمير.'},
  {s:'It ___ a spanner.',o:['am','is','are'],a:1,why:'مع it نستعمل is.'},
  {s:"He ___ a teacher. He's a student.",o:["isn't","aren't","am not"],a:0,why:"مع he النفي isn't (= is not)."}]}});
})(window.ENK);

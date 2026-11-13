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
  {s:'I ___ Faisal.',o:['am','is','are'],a:0,why:'مع I نستعمل am.'},
  {s:'She ___ an engineer.',o:['am','is','are'],a:1,why:'مع she نستعمل is.'},
  {s:'They ___ from Jordan.',o:['am','is','are'],a:2,why:'مع they نستعمل are.'},
  {s:'___ you a student?',o:['Am','Is','Are'],a:2,why:'مع you نستعمل are، وفي السؤال تأتي قبل الضمير.'},
  {s:'It ___ a spanner.',o:['am','is','are'],a:1,why:'مع it نستعمل is.'},
  {s:"He ___ a teacher. He's a student.",o:["isn't","aren't","am not"],a:0,why:"مع he النفي isn't (= is not)."}]}});
N.gram('u1-l1',BE(["I'm new here.","You're in Sales.","He's an engineer.","She's a manager.","It's a big company.","We're in the IT Department.","They're from Riyadh.","Are you new here? — Yes, I am.","Is she in Sales? — No, she isn't."]));

N.gram('u1-l2',{title:'المضارع البسيط: أين تسكن؟ أين تعمل؟',short:'المضارع البسيط',q:'لماذا نقول Where do you work? لكن Where does she work؟',
 intro:`نتكلم عن السكن والعمل والدراسة بالمضارع البسيط، لأنها أشياء ثابتة. مع ${e('I, you, we, they')} يبقى الفعل كما هو: ${e('I live in Riyadh.')} ومع ${e('he, she, it')} نضيف ${e('s')}: ${e('She works for Delta.')} وفي السؤال نستعمل ${e('do')} أو ${e('does')} قبل الضمير، ويعود الفعل بلا ${e('s')}.`,
 head:['مع','الفعل','مثال'],
 rows:[['I / you / we / they','live · work','I live in Riyadh. · We work in Sales.'],['he / she / it','lives · works','He lives in Jeddah. · She works for Delta.'],['السؤال','Do / Does + الفعل','Where do you live? · Where does he work?'],['النفي',"don't / doesn't + الفعل","I don't live in the centre. · She doesn't work here."]],
 ex:['Where do you work? — I work for a bank.','This is Laila. She works in the IT Department.','Where does Majed live? — He lives in Dammam.'],
 note:[`عند تقديم شخص نستعمل ${e('he')} للرجل و ${e('she')} للمرأة: ${e('This is Majed. He works in Sales.')}`],
 lab:{title:'do أم does؟ والفعل مع s أم بدونها؟',intro:'اختر الصحيح:',items:[
  {s:'Where ___ you live?',o:['do','does'],a:0,why:'مع you نستعمل do.'},
  {s:'Where ___ Laila work?',o:['do','does'],a:1,why:'Laila = she، فنستعمل does.'},
  {s:'I ___ in the centre of the city.',o:['live','lives'],a:0,why:'مع I يبقى الفعل كما هو.'},
  {s:'Majed ___ for an oil company.',o:['work','works'],a:1,why:'Majed = he، فنضيف s.'},
  {s:'Where does he ___?',o:['work','works'],a:0,why:'بعد does يعود الفعل بلا s.'}]}});

N.gram('u10-l1',{title:'كيف نكوّن المضارع المستمر والماضي البسيط؟',short:'تكوين الأزمنة',q:"ما الفرق بين I'm playing و I played؟",
 intro:`المضارع المستمر لشيء يحدث الآن: ${e('am / is / are')} + الفعل + ${e('ing')}. والماضي البسيط لشيء حدث وانتهى: الفعل + ${e('ed')}، أو صيغة شاذة تُحفظ مثل ${e('go → went')}. وفي نفي الماضي وسؤاله نستعمل ${e("didn't")} و ${e('Did')}، ويعود الفعل إلى صورته الأصلية.`,
 head:['الزمن','نكوّنه بـ','مثال'],
 rows:[['المضارع المستمر (الآن)','am / is / are + الفعل + ing',"She's playing tennis. · What are you doing?"],['نفي المستمر',"am not / isn't / aren't + ing","I'm not working now."],['الماضي البسيط (انتهى)','الفعل + ed، أو الشاذ','I finished work at five. · I got up at ten.'],['نفي الماضي',"didn't + الفعل الأصلي","I didn't go out."],['سؤال الماضي','Did + الفاعل + الفعل الأصلي','Did you go out? — Yes, I did.']],
 ex:["Look! He's driving to work.",'Yesterday, he drove to work.',"He didn't take the bus."],
 note:[`إملاء ${e('ing')}: نحذف ${e('e')} الأخيرة: ${e('have → having')}، ونضاعف الحرف الأخير في الفعل القصير: ${e('get → getting')}.`],
 lab:{title:'أي زمن؟',intro:'اختر الصحيح:',items:[
  {s:'Look! He ___ football.',o:["'s playing",'plays','played'],a:0,why:'Look! = الآن، فنستعمل المضارع المستمر.'},
  {s:'Every day, I ___ up at six.',o:['get','getting','got'],a:0,why:'Every day = روتين، فنستعمل المضارع البسيط.'},
  {s:'Yesterday, I ___ home at nine.',o:['leave','left','leaving'],a:1,why:'Yesterday = ماضٍ، و leave → left.'},
  {s:"I didn't ___ TV last night.",o:['watch','watched','watching'],a:0,why:"بعد didn't يأتي الفعل الأصلي."},
  {s:'___ you have lunch at one yesterday?',o:['Do','Did','Are'],a:1,why:'سؤال عن الماضي بـ Did.'}]}});
})(window.ENK);

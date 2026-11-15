/* تمارين الكتاب نفسها تفاعلياً — الوحدة 10 (قرار المدرب نوفمبر 2026) */
(function(){
const A=(s,o,a,why)=>({s,o,a,why}),Q=(q,ok,no,why)=>({q,opts:[[ok,1],...(Array.isArray(no)?no:[no]).map(n=>[n,0,why])]}),T=(q,a,why)=>({q:/[\u0600-\u06FF]/.test(q)?q:`<span class="en" lang="en" dir="ltr">${q}</span>`,a:Array.isArray(a)?a:[a],why});
const I=n=>'img/'+n+'.jpg';
const V=['call','finish','get','go','have','leave','pick up','play','watch'];
const CN=['the UK','France','Germany','Canada'];
BX.bk('u10-l1',{
 1:{kind:'gaps',img:[I('u10-l1-pics')],cap:'صور Sandra في الكتاب ص 49.',intro:'أكمل تحت الصور بأفعال الصندوق (get و go مرتين، و have خمس مرات؛ من قراءتنا للصور).',items:[A('a ___ lunch',V,4),A('b ___ home',V,5),A('c ___ breakfast',V,4),A('d ___ my clients',V,0),A('e ___ TV',V,8),A('f ___ shopping',V,3),A('g ___ my friend',V,6),A('h ___ a break',V,4),A('i ___ work',V,1),A('j ___ home',V,2),A('k ___ out',V,3),A('l ___ up',V,2),A('m ___ a meeting',V,4),A('n ___ tennis',V,7),A('o ___ lunch',V,4)]},
 2:{kind:'speak',img:[I('u10-l1-pics')],cap:'صور Sandra في الكتاب ص 49.',goal:'مع زميلك: اختر صورة وقل ماذا تفعل Sandra، وزميلك يخمّن الصورة.',model:[['A',"She's playing tennis."],['B','Picture n.']]},
 3:{kind:'sort',img:[I('u10-l1-pics')],cap:'صور Sandra في الكتاب ص 49.',intro:'استمع إلى القصتين (المقطع في قسم الاستماع)، وافصل الصور: القصة A ما تفعله Sandra كل اثنين في العمل، والقصة B ما فعلته السبت الماضي (من قراءتنا).',cats:['Story A (every Monday)','Story B (last Saturday)'],items:[['b leave home',0],['m have a meeting',0],['d call my clients',0],['h have a break',0],['o have lunch',0],['i finish work',0],['f go shopping',0],['j get home',0],['k go out',0],['l get up',1],['c have breakfast',1],['g pick up my friend',1],['n play tennis',1],['a have lunch',1],['e watch TV',1]]},
 4:{kind:'speak',goal:'a دوّن شيئاً تفعله بانتظام، وشيئاً فعلته في نهاية الأسبوع. b أخبر زميلك بما تفعله وما فعلته.',useful:['Every Sunday I …','Last weekend I …']}
});
BX.bk('u10-l2',{
 1:{kind:'order',intro:'رتّب ظروف التكرار على المقياس من 0% إلى 100%.',steps:['never','hardly ever','sometimes','often','usually','always']},
 2:{kind:'speak',goal:'كم مرة تفعل هذه الأشياء؟ أكمل الجدول عن نفسك، ثم اسأل زميلين: go home early · go out with your colleagues/classmates · entertain customers/classmates at home · socialize with your boss/teacher · work overtime/stay late studying · work/study through your lunch break · drive to work/college.',useful:['How often do you …?','I usually …','I hardly ever …']},
 3:{kind:'speak',goal:'أخبر الصف بفرقين بينك وبين زميل.',model:[['','Sam always drives to work, but I never do. I usually take the train.']]},
 4:{kind:'gaps',img:[I('u10-l2-table')],cap:'الجدول في الكتاب ص 51.',intro:'انظر إلى الجدول وأجب: في أي بلد …',items:[A('1 … do people work the longest hours? ___',CN,0),A('2 … do people work the shortest hours? ___',CN,2),A('3 … do people stay at one company the longest? ___',CN,2,'10.8 سنة؛ الرقم غير واضح تماماً في النسخة الممسوحة.'),A('4 … do people save most? ___',CN,1),A('5 … do people save least? ___',CN,3)]},
 5:{kind:'gaps',intro:'a خمّن أرقام الولايات المتحدة، ثم b استمع (المقطع في قسم الاستماع) واكتب الحقائق.',items:[A('USA — average working hours per week: ___',['42.8','38.2','45.5'],0),A('USA — average years working in one company: ___',['7.4','10.4','4.7'],0),A('USA — money people save (% of income): ___',['0.5','5.0','14.1'],0)]}
});
})();

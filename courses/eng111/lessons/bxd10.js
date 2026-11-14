/* التمارين المقابلة — الوحدة 10 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),T=(q,...a)=>({q,a}),Q=(q,ok,no,why)=>({q,opts:[[ok,1],[no,0,why]]});
BX.add('u10-l1',[
 {n:1,ref:'ص 48',st:1,kind:'match',intro:'وصّل الفعل بما بعده.',pairs:[['get','up'],['have','breakfast'],['leave','home'],['call','my clients'],['pick up','my friend'],['go','shopping'],['watch','TV'],['play','football'],['finish','work']]},
 {n:2,ref:'ص 48',st:2,kind:'gaps',intro:'ماذا يفعل الآن؟',items:[A("Look! Felix ___ football.",["'s playing",'plays'],0),A("He ___ his clients now.",["'s calling",'called'],0),A("They ___ lunch at the moment.",["'re having",'have'],0)]},
 {n:3,ref:'ص 48',st:2,kind:'listen',intro:'استمع إلى قصتين (من إعدادنا) وأجب.',text:"Story A. Every Sunday, Felix gets up at half past five. He leaves home at half past six and starts work at seven. He usually has a meeting at nine. Story B. Last Friday, Felix got up at ten. He had breakfast with his family, then he picked up his cousin and they played football. In the evening, they went to a restaurant.",
  then:{kind:'choose',items:[Q('What time does Felix get up on Sundays?','at 5.30','at 10.00'),Q('What did he do last Friday after breakfast?','He picked up his cousin.','He went to work.'),Q('Which story is in the past?','Story B','Story A')]}},
 {n:4,ref:'ص 49',st:2,kind:'typ',intro:'اكتب عن نفسك: جملة عن روتينك وجملة عما فعلته.',items:[T('every day / get up','I get up at six every day.','Every day, I get up at six.','I get up at six o’clock every day.'),T('last Friday / go','Last Friday, I went to the beach.','I went to the beach last Friday.')]}
]);
BX.add('u10-l2',[
 {n:1,ref:'ص 50',st:1,kind:'order',intro:'رتّب ظروف التكرار من 0% إلى 100%.',steps:['never','hardly ever','sometimes','often','usually','always']},
 {n:2,ref:'ص 50',st:1,kind:'gaps',intro:'أكمل أسئلة How often وأجوبتها.',items:[A('How ___ do you work late?',['often','many'],0),A('I ___ work late. (50%)',['sometimes','never'],0),A("I'm ___ late for college. (0%)",['never','always'],0),A('I ___ have lunch at college. (85%)',['usually','hardly ever'],0)]},
 {n:3,ref:'ص 50',st:1,kind:'typ',intro:'اكتب فرقاً بينك وبين زميل. المثال: Sam always drives to work, but I never do.',items:[T('Oliver: always / have breakfast · me: never','Oliver always has breakfast, but I never do.')]},
 {n:4,ref:'ص 51',st:2,kind:'choose',intro:'جدول من إعدادنا (قيم توضيحية): Country A 45 hours, saves 9% · Country B 38 hours, saves 3% · Country C 41 hours, saves 15%.',items:[Q('Where do people work the longest hours?','Country A','Country B'),Q('Where do people save the most?','Country C','Country A'),Q('Where do people work the shortest hours?','Country B','Country C')]},
 {n:5,ref:'ص 51',st:2,kind:'listen',intro:'استمع إلى أرقام بلد (من إعدادنا) وأكمل.',text:"In our survey, the average working week was forty-four hours. People stayed in one company for about nine years, and they saved around six per cent of their income.",
  then:{kind:'gaps',items:[A('working hours a week: ___',['44','14'],0),A('years in one company: ___',['9','19'],0),A('money saved: ___% of income',['6','16'],0)]}}
]);
})();

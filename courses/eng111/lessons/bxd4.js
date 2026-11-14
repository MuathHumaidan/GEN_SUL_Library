/* التمارين المقابلة — الوحدة 4 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),T=(q,...a)=>({q,a}),Q=(q,ok,no,why)=>({q,opts:[[ok,1],[no,0,why]]});
BX.add('u4-l1',[
 {n:1,ref:'ص 20',st:1,kind:'match',intro:'وصّل الوقت بالرقم.',pairs:[['twenty to eight','7.40'],['quarter past three','3.15'],['half past eleven','11.30'],['five to six','5.55'],['ten past one','1.10'],['twelve midday','12.00']]},
 {n:2,ref:'ص 20',st:2,kind:'choose',intro:'استعمل جدول GMT في الشرح.',items:[Q("When it's 10.00 in London, what time is it in Riyadh?",'1.00 p.m.','7.00 a.m.'),Q("When it's 12.00 in Riyadh, what time is it in Tokyo?",'6.00 p.m.','6.00 a.m.'),Q("When it's 8.00 p.m. in Riyadh, what time is it in New York?",'12.00 midday','4.00 a.m.')]},
 {n:3,ref:'ص 21',st:3,kind:'listen',intro:'اقرأ عن أسبوع عمل (من إعدادنا) وأجب.',text:"My name is Neil and I'm a supervisor in a factory in Yanbu. I start work at 7.00 in the morning. I have a short lunch break from 12.00 to 12.30. I usually leave the factory at 4.00. I don't work on Fridays or Saturdays.",
  then:{kind:'choose',items:[Q('What time does Neil start work?','at 7.00','at 4.00'),Q('How long is his lunch break?','half an hour','one hour'),Q('Does he work at weekends?',"No, he doesn't.",'Yes, he does.')]}},
 {n:4,ref:'ص 21',st:3,kind:'listen',intro:'استمع إلى موظفة (من إعدادنا) واملأ المعلومات.',text:"Hi, I'm Mary. I work in a bank in Dammam. I start work at 8.00 and I have lunch at 1.00. I leave work at 4.30. I sometimes work on Saturday mornings.",
  then:{kind:'gaps',items:[A('starts work: ___',['8.00','1.00'],0),A('lunch: ___',['1.00','4.30'],0),A('leaves work: ___',['4.30','8.00'],0),A('weekend: ___ works on Saturday mornings',['sometimes','never'],0)]}},
 {n:5,ref:'ص 21',st:2,kind:'speak',goal:'نشاط ثنائي: متى أفضل وقت للاتصال بموظفي التمرين 3 و 4 من مدينة في توقيت مختلف؟',card:window.ENK.ab('<span lang="en" dir="ltr">You are in London (GMT).<br>When are the best times to call Neil in Yanbu (GMT +3)?</span>','<span lang="en" dir="ltr">You are in Tokyo (GMT +9).<br>When are the best times to call Mary in Dammam (GMT +3)?</span>'),useful:['You can call him between 5.00 and 9.00 in the morning.',"Don't call him at 10.00, because it's his lunch break."]}
]);
BX.add('u4-l2',[
 {n:1,ref:'ص 22',st:1,kind:'listen',intro:'اقرأ رسالة الزائر (من إعدادنا) ثم صحّح الملاحظات.',text:"Thank you for planning my visit to the Riyadh Expo. My flight arrives on Thursday 9 March at 20.15. Could you book a hotel for me for four nights, please? I'd like to give a short presentation on Friday afternoon. I'd also like to visit your factory.",
  then:{kind:'choose',items:[Q('arrives:','Thursday 9 March, 20.15','Tuesday 9 March, 12.15'),Q('hotel:','four nights','two nights'),Q('presentation:','Friday afternoon','Friday morning'),Q('he also wants to:','visit the factory','go shopping')]}},
 {n:2,ref:'ص 22',st:1,kind:'match',intro:'وصّل الفعل بالاسم.',pairs:[['plan','a schedule'],['book','a hotel'],['give','a presentation'],['have','dinner'],['go','sightseeing'],['meet','him at the airport'],['suggest','some places to visit']]},
 {n:3,ref:'ص 22–23',st:2,kind:'order',intro:'رتّب جدول الزائر يوم الجمعة.',steps:['08.00 Breakfast at the hotel','09.30 Visit the factory','12.30 Lunch with the managers','15.00 Give the presentation','20.00 Dinner at a traditional restaurant']},
 {n:4,ref:'ص 23',st:2,kind:'gaps',intro:'أكمل رسالة الجدول.',items:[A('Thanks ___ your email.',['for','to'],0),A("I'm writing ___ the schedule for your visit.",['about','for'],0),A("I'll ___ you at the airport on Thursday.",['meet','meeting'],0),A('On Friday morning, you ___ visit the factory.',['can','could to'],0),A('We can ___ dinner at 8 o’clock.',['have','give'],0)]}
]);
})();

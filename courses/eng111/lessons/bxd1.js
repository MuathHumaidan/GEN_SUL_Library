/* التمارين المقابلة — الوحدة 1 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),T=(q,...a)=>({q,a}),Q=(q,ok,no,why)=>({q,opts:[[ok,1],[no,0,why]]});
BX.add('u1-l1',[
 {n:1,ref:'ص 6',st:1,kind:'listen',intro:'استمع إلى حوار في استراحة الشركة (من إعدادنا) وأجب.',text:"Hello. Are you new here? — Yes, it's my first week. My name's Badr Al-Mutairi. I'm in the IT Department. — Nice to meet you, Badr. I'm Huda. I'm in Accounts. Where are you from? — I'm from Hail. And you? — I'm from Dammam.",
  then:{kind:'choose',items:[Q('Who is the new employee?','Badr','Huda'),Q('Which department is Badr in?','IT','Accounts'),Q('Where is Huda from?','Dammam','Hail')]}},
 {n:2,ref:'ص 6',st:1,kind:'gaps',intro:'أكمل جمل الحوار.',items:[A("My ___ Badr Al-Mutairi.",["name's","name"],0),A("I'm ___ the IT Department.",['in','from'],0),A("I'm ___ Hail.",['from','in the'],0),A('Nice to ___ you, Badr.',['meet','see to'],0),A('Good to meet you, ___.',['too','also'],0)]},
 {n:3,ref:'ص 7',st:1,kind:'speak',goal:'قدّم نفسك لزملائك في الصف.',useful:["Hello. I'm …","I'm from …","I'm a student at …","I study …","I work for …","Nice to meet you."]},
 {n:4,ref:'ص 7',st:2,kind:'listen',intro:'استمع: ماذا يناديه الناس؟ (من إعدادنا)',text:"My name is Hamad Al-Dosari. My friends and my colleagues call me Hamad. My boss calls me Hamad too. But visitors to the company call me Mr Al-Dosari.",
  then:{kind:'match',pairs:[['His friends call him','Hamad.'],['Visitors call him','Mr Al-Dosari.'],['His first name is','Hamad, too.'],['His last name is','Al-Dosari.']]}}
]);
BX.add('u1-l2',[
 {n:1,ref:'ص 8',st:2,kind:'choose',intro:'أجب عن نصيحة التعارف.',items:[Q('When you introduce two people, when do you give their names?','at the beginning','at the end'),Q('Why do you add information about each person?','to help them talk','to finish quickly'),Q('Why do you use a new name immediately?','to remember it','to spell it')]},
 {n:2,ref:'ص 8',st:1,kind:'order',intro:'رتّب جمل التقديم (من إعدادنا).',steps:["Ms Saeed, I'd like to introduce you to Majed Al-Qahtani.",'Majed works in the Production Department of our company.','Ms Saeed is an accountant at Najd Motors.',"It's nice to meet you, Ms Saeed.",'Do you have a large Finance Department?']},
 {n:3,ref:'ص 9',st:2,kind:'match',intro:'وصّل الجملة بالنصيحة.',pairs:[["Mr Al-Shehri, I'd like to introduce you to Laila.",'1 Introduce the two people.'],['Laila works in our Finance Department.','2 Add more information.'],["It's nice to meet you, Mr Al-Shehri.",'3 Use the name early.'],['Is Red Sea Foods a big company?','4 Start a conversation.']]},
 {n:4,ref:'ص 9',st:1,kind:'speak',goal:'في مجموعة من ثلاثة: اختر بطاقة من بطاقات المختبر وقدّم زميليك، واسأل سؤالاً واحداً على الأقل.',model:[['A',"Mr Al-Qahtani, I'd like to introduce you to Laila Saeed. Laila is an accountant at Najd Motors. Mr Al-Qahtani is an engineer at Gulf Cables."],['B',"It's nice to meet you, Mr Al-Qahtani."],['C','Nice to meet you, too. Is Najd Motors a big company?']]}
]);
})();

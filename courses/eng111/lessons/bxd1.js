/* التمارين المقابلة — الوحدة 1 (جمل جديدة من إعدادنا، بنفس نوع تمرين الكتاب وقاعدته) */
(function(){const A=(s,o,a,why)=>({s,o,a,why}),T=(q,...a)=>({q,a}),Q=(q,ok,no,why)=>({q,opts:[[ok,1],[no,0,why]]});
BX.add('u1-l1',[
 {n:1,ref:'ص 6',st:1,kind:'listen',intro:'استمع إلى حوار في استراحة الشركة (من إعدادنا) وأجب.',text:"Hello. Are you new here? — Yes, it's my first week. My name's Ben Morgan. I'm in the IT Department. — Nice to meet you, Ben. I'm Helen. I'm in Accounts. Where are you from? — I'm from York. And you? — I'm from Leeds.",
  then:{kind:'choose',items:[Q('Who is the new employee?','Ben','Helen'),Q('Which department is Ben in?','IT','Accounts'),Q('Where is Helen from?','Leeds','York')]}},
 {n:2,ref:'ص 6',st:1,kind:'gaps',intro:'أكمل جمل الحوار.',items:[A("My ___ Ben Morgan.",["name's","name"],0),A("I'm ___ the IT Department.",['in','from'],0),A("I'm ___ York.",['from','in the'],0),A('Nice to ___ you, Ben.',['meet','see to'],0),A('Good to meet you, ___.',['too','also'],0)]},
 {n:3,ref:'ص 7',st:1,kind:'speak',goal:'قدّم نفسك لزملائك في الصف.',useful:["Hello. I'm …","I'm from …","I'm a student at …","I study …","I work for …","Nice to meet you."]},
 {n:4,ref:'ص 7',st:2,kind:'listen',intro:'استمع: ماذا يناديه الناس؟ (من إعدادنا)',text:"My name is Henry Dawson. My friends and my colleagues call me Henry. My boss calls me Henry too. But visitors to the company call me Mr Dawson.",
  then:{kind:'match',pairs:[['His friends call him','Henry.'],['Visitors call him','Mr Dawson.'],['His first name is','Henry, too.'],['His last name is','Dawson.']]}}
]);
BX.add('u1-l2',[
 {n:1,ref:'ص 8',st:2,kind:'choose',intro:'أجب عن نصيحة التعارف.',items:[Q('When you introduce two people, when do you give their names?','at the beginning','at the end'),Q('Why do you add information about each person?','to help them talk','to finish quickly'),Q('Why do you use a new name immediately?','to remember it','to spell it')]},
 {n:2,ref:'ص 8',st:1,kind:'order',intro:'رتّب جمل التقديم (من إعدادنا).',steps:["Ms Scott, I'd like to introduce you to Mark Carter.",'Mark works in the Production Department of our company.','Ms Scott is an accountant at Nova Motors.',"It's nice to meet you, Ms Scott.",'Do you have a large Finance Department?']},
 {n:3,ref:'ص 9',st:2,kind:'match',intro:'وصّل الجملة بالنصيحة.',pairs:[["Mr Shaw, I'd like to introduce you to Laura.",'1 Introduce the two people.'],['Laura works in our Finance Department.','2 Add more information.'],["It's nice to meet you, Mr Shaw.",'3 Use the name early.'],['Is Red Sea Foods a big company?','4 Start a conversation.']]},
 {n:4,ref:'ص 9',st:1,kind:'speak',goal:'في مجموعة من ثلاثة: اختر بطاقة من بطاقات المختبر وقدّم زميليك، واسأل سؤالاً واحداً على الأقل.',model:[['A',"Mr Carter, I'd like to introduce you to Laura Scott. Laura is an accountant at Nova Motors. Mr Carter is an engineer at Gulf Cables."],['B',"It's nice to meet you, Mr Carter."],['C','Nice to meet you, too. Is Nova Motors a big company?']]}
]);
})();

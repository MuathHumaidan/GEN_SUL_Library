# ملف «طرق التدريب» لانجل-102 — مسودة (نوفمبر 2026)
import json
from free_eng102 import FREE
S=json.load(open('/tmp/st.json'))
REC={
'u7-l1':('discover','guided','مختبر التركيب يوصل المتدرب بنفسه لقاعدة الصفة والاسم للأبعاد (long و length).'),
'u7-l2':('sim',None,'مختبر «في محل العِدد» حوار شراء حقيقي يطبّق فيه المعدود وغير المعدود والعبوات.'),
'u7-l3':('kwl',None,'المتدرب يعرف will غالباً من المرحلة السابقة، فيبدأ الدرس مما يعرفه ثم يضيف إليه النفي والسؤال وجدول المشروع.'),
'u8-l1':('discover','guided','زمن جديد على المتدرب، ومختبر تكوين الجملة وجدول الأفعال يكشفان القاعدة خطوة خطوة.'),
'u8-l2':('sim',None,'مختبر فحص أضرار السيارة موقف عمل حقيقي يصف فيه المتدرب الضرر ويبلغ عنه.'),
'u8-l3':('kwl',None,'الماضي البسيط سبق للمتدرب، والجديد التواريخ و ago، فيبدأ الدرس مما يعرفه.'),
'u8-l4':('problem',None,'درس مراجعة مبني على اكتشاف الخطأ وتصحيحه في قواعد الوحدتين 7 و 8.'),
'u9-l1':('imitate',None,'نموذج جملة واحد للوظيفة يعرضه المدرب ثم يكرره المتدرب على كل جزء من الحوّامة.'),
'u9-l2':('sim',None,'مختبر توصيل الإنترنت مع مكالمة الفني يحاكي مكالمة دعم فني حقيقية.'),
'u9-l3':('problem',None,'مخطط أعطال الطابعة: سؤال ثم قرار ثم حل، وهي خطوات حل المشكلات نفسها.'),
'u10-l1':('discover','guided','من شكل اللوحة ولونها يستنتج المتدرب نوعها ومعناها.'),
'u10-l2':('sim',None,'مختبر «ابحث عن المخاطر» تفتيش ورشة يكتب بعده المتدرب تقرير التفتيش.'),
'u10-l3':('sim',None,'مختبر رادار برج المراقبة يحاكي موقف تحذير حقيقي بالاتجاه بالساعة.'),
'u10-l4':('problem',None,'درس مراجعة مبني على اكتشاف الخطأ وتصحيحه في قواعد الوحدتين 9 و 10.'),
}
ALL=['imitate','kwl','discover','problem','sim']
D={'_meta':{'dept':'قسم الدراسات العامة'}}
for L,(m,lv,why) in REC.items():
  s=S[L];review=L in('u8-l4','u10-l4')
  st=[x for x in s['st'] if x!='كلمات الدرس']
  lab=s['lab'];mini=[x for x in s['mini'] if x!='مختبر مصغّر']
  WHAT='theory:f>'+('ماذا تراجع' if review else 'ماذا ستتعلم')
  RULE='theory:f>'+('تمارين المراجعة' if review else 'شرح القاعدة')
  BOOK='theory:f>'+('تمارين المراجعة' if review else 'تمارين الكتاب')
  L1='lab>'+lab[0]; L2='lab>'+(lab[1] if len(lab)>1 else lab[0])
  ST1='theory:i>'+st[0]; ST2='theory:i>'+(st[1] if len(st)>1 else st[0]); STL='theory:i>'+st[-1]
  MINI=('theory:i>'+mini[0]) if mini else ST1
  go={
   'imitate':[[ 'acts>سؤال مفتوح'],['acts>اختبار قبل وبعد'],[RULE],[L1,ST1],['acts>المسابقة'],[BOOK,L2],['acts>تذكرة خروج','quiz>اختبر فهمك']],
   'kwl':[['acts>جدول K.W.L','acts>سؤال مفتوح'],['acts>جدول K.W.L',WHAT,RULE],['acts>جدول K.W.L','acts>تذكرة خروج']],
   'discover':{'guided':[[WHAT],[ST1,ST2],[STL],['quiz>اختبر فهمك']],
               'semi':[[L1],[MINI],[L2],['acts>تذكرة خروج']],
               'free':[['acts>مهمة اكتشاف حر'],['acts>مهمة اكتشاف حر'],['acts>تذكرة خروج']]},
   'problem':[['acts>اكتشف الخطأ'],['examples>مثال 1'],[BOOK],['acts>المسابقة'],['acts>تذكرة خروج']],
   'sim':[['acts>اختبار قبل وبعد'],[WHAT],[RULE],[L1],[L2,BOOK],['acts>اختبار قبل وبعد']],
  }
  r={'m':m,'why':why}
  if lv: r['lv']=lv
  D[L]={'rec':[r],'ok':[x for x in ALL if x!=m],'no':{},'go':go,'free':{'t':FREE[L][0],'a':FREE[L][1].replace('\n','<br>')}}
js='/* «طرق التدريب» لمقرر انجل-102 — مسودة تُراجع (قرار المدرب نوفمبر 2026)\n   المبدأ: التوصية حسب هدف الدرس الأساسي (انظر تقرير المقرر). */\nwindow.METHODS_DATA='+json.dumps(D,ensure_ascii=False,indent=1)+';\n'
open('/home/claude/lib/courses/english/methods-data.js','w').write(js)
print('ok',len(REC))

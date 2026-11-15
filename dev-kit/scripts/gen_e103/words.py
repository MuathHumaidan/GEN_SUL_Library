# كلمات الدرس — انجل-103: [الكلمة, الترجمة, مثال يومي من إعدادنا, ترجمته]
W={}
W['u1-l1']=[
 ['crew','فريق عمل','The crew works together on the car.','يعمل الفريق معاً على السيارة.'],
 ['mechanic','ميكانيكي','The mechanic fixed my car in an hour.','أصلح الميكانيكي سيارتي في ساعة.'],
 ['wheel gun','مسدس العجلات (لفك الصواميل)','He loosens the nuts with a wheel gun.','يفك الصواميل بمسدس العجلات.'],
 ['jack','رافعة السيارة','Put the jack under the car.','ضع الرافعة تحت السيارة.'],
 ['nozzle','فوهة','Hold the nozzle tightly.','أمسك الفوهة بإحكام.'],
 ['hose','خرطوم','The garden hose is very long.','خرطوم الحديقة طويل جداً.'],
 ['socket','مقبس / فتحة','Push the plug into the socket.','أدخل القابس في المقبس.'],
 ['flap','غطاء صغير يُفتح','Open the fuel flap first.','افتح غطاء الوقود أولاً.'],
 ['loosen','يفك / يرخي','Loosen your belt a little.','أرخِ حزامك قليلاً.'],
 ['tighten','يشد / يربط بإحكام','Tighten the screws on the chair.','اشدد براغي الكرسي.'],
 ['adjust','يضبط','Adjust the seat before you drive.','اضبط المقعد قبل أن تقود.']]
W['u1-l2']=[
 ['trainee','متدرب','The trainee is learning fast.','المتدرب يتعلم بسرعة.'],
 ['trainer','مدرب','Our trainer gives clear instructions.','مدربنا يعطي تعليمات واضحة.'],
 ['take off','يخلع / ينزع','Take off your shoes, please.','اخلع حذاءك من فضلك.'],
 ['put on','يلبس / يركّب','Put on your safety helmet.','البس خوذة السلامة.'],
 ['lift up','يرفع','Lift up the box carefully.','ارفع الصندوق بحذر.'],
 ['pick up','يلتقط','Pick up the phone, please.','ارفع الهاتف من فضلك.'],
 ['pull out','يسحب للخارج','Pull out the plug before cleaning.','اسحب القابس قبل التنظيف.'],
 ['push in','يدفع للداخل','Push in the drawer.','ادفع الدرج للداخل.'],
 ['yet','بعد / حتى الآن (في السؤال والنفي)',"I haven't eaten yet.",'لم آكل بعد.'],
 ['almost','تقريباً',"It's almost five o'clock.",'الساعة تقريباً الخامسة.'],
 ['spark plug','شمعة الاحتراق','The mechanic cleaned the spark plug.','نظّف الميكانيكي شمعة الاحتراق.']]
W['u1-l3']=[
 ['device','جهاز','A phone is a useful device.','الهاتف جهاز مفيد.'],
 ['activate','يفعّل / يشغّل','Press here to activate the card.','اضغط هنا لتفعيل البطاقة.'],
 ['method','طريقة','This is a new method of cooking.','هذه طريقة جديدة للطبخ.'],
 ['handle','مقبض','Hold the door handle.','أمسك مقبض الباب.'],
 ['lever','ذراع (رافعة يدوية)','Pull the lever to open it.','اسحب الذراع لتفتحه.'],
 ['cord','حبل / سلك','The lamp has a long cord.','للمصباح سلك طويل.'],
 ['sensor','حسّاس','The light has a movement sensor.','للمصباح حسّاس حركة.'],
 ['wireless','لاسلكي','I use wireless headphones.','أستعمل سماعات لاسلكية.'],
 ['by means of','بواسطة','We paid by means of a bank card.','دفعنا بواسطة بطاقة بنكية.'],
 ['rotate','يدير / يلف','Rotate the knob to the right.','أدر المقبض إلى اليمين.'],
 ['upright','منتصب / قائم','Keep your back upright.','أبقِ ظهرك مستقيماً.']]
import json
open('/home/claude/lib/courses/eng103/words.js','w').write('/* كلمات الدرس — انجل-103. كل كلمة: [الكلمة, الترجمة, مثال من الحياة اليومية (من إعدادنا), ترجمة المثال] */\nPLCBOOK.words('+json.dumps(W,ensure_ascii=False,indent=0)+');\n')
print({k:len(v) for k,v in W.items()})

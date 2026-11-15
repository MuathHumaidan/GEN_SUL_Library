import json,glob,re
ks=json.load(open('all.json'));per=json.load(open('per.json'))
D={}
for f in sorted(glob.glob('b/*.ar')):
  for line in open(f,encoding='utf-8'):
    line=line.rstrip('\n')
    if not line.strip():continue
    n,_,ar=line.partition('|')
    try:n=int(n)
    except:print('BAD',f,line[:40]);continue
    ar=ar.strip()
    if ar and ar!='-':D[ks[n]]=ar
import os
EX=set(json.load(open('extra.json'))) if os.path.exists('extra.json') else set()
if os.path.exists('extra.json'):D.update(json.load(open('extra.json')))
print('translated',len(D),'of',len(ks))
for c,lst in per.items():
  d={k:D[k] for k in lst if k in D}
  d.update({k:v for k,v in D.items() if k in EX})
  # خيارات التوصيل: الحرف عشوائي (وكان يظهر undefined بعد J) فنضيف المفتاح بلا الحرف
  for k in list(d):
    m=re.match(r'^(?:undefined|[A-Z]) (?=[A-Za-z0-9])(.+)$',k)
    if m and m.group(1) not in d and not re.match(r'^[A-Z] [A-Z]( |$)',k): d[m.group(1)]=re.sub(r'^[A-Za-z]\s*[.)]?\s+','',d[k])
  open(f'/home/claude/lib/courses/{c}/lessons/tr.js','w',encoding='utf-8').write('/* ترجمة الجمل الإنجليزية (من إعدادنا) — يولّدها tr/build.py */\nwindow.ENTR='+json.dumps(d,ensure_ascii=False,separators=(',',':'))+';\n')
  print(c,len(d),'/',len(lst))

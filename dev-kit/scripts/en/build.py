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
# الجولة 2: الجمل بعد الحل والمفردات والأجزاء
R2K=json.load(open('r2/keys.json'));R2={}
for f in sorted(glob.glob('r2/*.ar')):
  for line in open(f,encoding='utf-8'):
    n,_,ar=line.rstrip('\n').partition('|')
    if n.strip().isdigit() and ar.strip(): R2[R2K[int(n)]]=ar.strip()
print('r2',len(R2),'of',len(R2K))
MEM={}
for c in per:
  try:
    j=json.load(open(f'{c}.keys2.json'));s2=set(k for v in j['keys'].values() for k in v)|set(j['solved'])
  except FileNotFoundError: s2=set()
  MEM[c]=s2
for c,lst in per.items():
  d={k:D[k] for k in lst if k in D}
  d.update({k:v for k,v in D.items() if k in EX})
  d.update({k:v for k,v in R2.items() if k in MEM[c] and k not in d})
  # خيارات التوصيل: الحرف عشوائي (وكان يظهر undefined بعد J) فنضيف المفتاح بلا الحرف
  for k in list(d):
    m=re.match(r'^(?:undefined|[A-Z]) (?=[A-Za-z0-9])(.+)$',k)
    if m and m.group(1) not in d and not re.match(r'^[A-Z] [A-Z]( |$)',k): d[m.group(1)]=re.sub(r'^[A-Za-z]\s*[.)]?\s+','',d[k])
  open(f'/home/claude/lib/courses/{c}/lessons/tr.js','w',encoding='utf-8').write('/* ترجمة الجمل الإنجليزية (من إعدادنا) — يولّدها tr/build.py */\nwindow.ENTR='+json.dumps(d,ensure_ascii=False,separators=(',',':'))+';\n')
  print(c,len(d),'/',len(lst))

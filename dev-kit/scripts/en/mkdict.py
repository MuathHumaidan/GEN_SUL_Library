#!/usr/bin/env python3
"""يحوّل قواميس /home/claude/en/src/<course>/<file>.py (المتغير D وPAT) إلى lib/courses/<course>/en/<file>.js"""
import sys,json,os,re,importlib.util,glob
def norm(s):return re.sub(r'\s+',' ',s).strip()
for c in sys.argv[1:]:
  out=f'/home/claude/lib/courses/{c}/en';os.makedirs(out,exist_ok=True)
  for f in sorted(glob.glob(f'/home/claude/en/src/{c}/*.txt')):
    # كتل: سطر عربي، ثم سطر الترجمة (= تعني يبقى عربياً)، ثم سطر فارغ. السطور التي تبدأ بـ # تعليق. PAT: نمط ||| بديل
    D={};P=[]
    blocks=[b for b in re.split(r'\n\s*\n',open(f).read()) if b.strip()]
    for b in blocks:
      L=[x for x in b.split('\n') if x.strip() and not x.startswith('#')]
      if not L:continue
      if L[0].startswith('PAT:'):a,r=L[0][4:].split('|||');P.append((a.strip(),r.strip()));continue
      assert len(L)==2,(f,L)
      D[norm(L[0])]=L[1].strip()
    class m:pass
    m.PAT=P
    js='/* مولّد آلياً من en/src — لا تعدّل هنا */\nPLCBOOK.enDict('+json.dumps(D,ensure_ascii=False,indent=0)+');\n'
    if getattr(m,'PAT',None):js+='PLCBOOK.enPat(['+','.join(f'[new RegExp({json.dumps(a)}),{json.dumps(b)}]' for a,b in m.PAT)+']);\n'
    open(f'{out}/'+os.path.basename(f)[:-4]+'.js','w').write(js);print(c,os.path.basename(f),len(D))

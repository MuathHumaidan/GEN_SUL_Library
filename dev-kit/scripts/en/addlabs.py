#!/usr/bin/env python3
"""يضيف مختبرات التركيب لدرس: addlabs.py <ملف الدرس> <اسم ثابت R> <ملف المختبرات> "<بداية عنوان الجزء>=LAB" ...
- يدرج ملف المختبرات قبل const R
- في كل جزء: lab:{…} يصير labs:[LAB,{…}]، وإن لم يكن للجزء lab يضاف labs:[LAB]."""
import sys
f,R,labf=sys.argv[1:4];maps=[a.split('=',1) for a in sys.argv[4:]]
s=open(f).read()
if open(labf).read().strip().split('\n')[1][:30] not in s:
  s=s.replace(f"const {R}=N.rule(",open(labf).read()+f"const {R}=N.rule(",1)
a=s.find(f"const {R}=N.rule(");b=s.find("\n ]});",a);c=s[a:b]
for start,L in maps:
  i=c.find(" {t:'"+start);assert i>=0,start
  j=c.find("\n {t:",i+5);j=len(c) if j<0 else j
  part=c[i:j]
  if 'labs:[' in part: continue
  k=part.find("lab:{")
  p=part.rstrip();tail=',' if p.endswith(',') else '';p=p.rstrip(',').rstrip()
  if k>0:
    p=p[:k]+"labs:["+L+",{"+p[k+5:]
    assert p.endswith('}}'),(start,p[-40:])
    p=p[:-1]+']}'
  else:
    assert p.endswith('}'),(start,p[-40:])
    p=p[:-1]+",\n  labs:["+L+"]}"
  c=c[:i]+p+tail+c[j:]
s=s[:a]+c+s[b:]
open(f,'w').write(s)
print('ok',f,R,len(maps))

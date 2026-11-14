#!/usr/bin/env python3
"""python3 enmerge.py work/x.txt answers.txt src/<C>/<name>.txt — answers: سطر «N: English» (PAT: البديل بـ $1…). '=' يبقى عربياً."""
import sys,json,re
BL=json.load(open(sys.argv[1]+'.json'));A={}
for line in open(sys.argv[2]):
  m=re.match(r'^(\d+):\s?(.*)$',line.rstrip('\n'))
  if m:A[int(m.group(1))]=m.group(2)
o=[];miss=[]
for i,(t,v) in enumerate(BL,1):
  if i not in A:miss.append(i);continue
  a=re.sub(r'\{([^{}]+)\}',r'<span class="en" lang="en">\1</span>',A[i])
  if t=='D':o.append(v+'\n'+a+'\n\n')
  else:o.append('PAT: '+v+' ||| '+a+'\n\n')
open(sys.argv[3],'w').write(''.join(o));print('written',len(o),'missing',miss[:30],len(miss))

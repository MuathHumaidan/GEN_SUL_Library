#!/usr/bin/env python3
"""prefill.py work/X.txt OUT.ans → يملأ ما سبقت ترجمته في أي مقرر، ويطبع الباقي بأرقامه."""
import sys,json,re,glob
def norm(s):return re.sub(r'\s+',' ',s).strip()
D={};P={}
for f in glob.glob('/home/claude/en/src/*/*.txt'):
  for b in re.split(r'\n\s*\n',open(f).read()):
    L=[x for x in b.split('\n') if x.strip() and not x.startswith('#')]
    if not L:continue
    if L[0].startswith('PAT:'):a,r=L[0][4:].split('|||');P[a.strip()]=r.strip();continue
    if len(L)==2:D[norm(L[0])]=L[1].strip()
BL=json.load(open(sys.argv[1]+'.json'));out=[];left=[]
W=open(sys.argv[1]).read().split('\n')
for i,(t,v) in enumerate(BL,1):
  if t=='D' and norm(v) in D:out.append(f'{i}: {D[norm(v)]}')
  elif t=='P' and v in P:out.append(f'{i}: {P[v]}')
  else:left.append(i)
open(sys.argv[2],'w').write('\n'.join(out)+'\n')
print('prefilled',len(out),'left',len(left))
L=set(left)
for line in W:
  m=re.match(r'^\[(\d+)\]',line)
  if m and int(m.group(1)) in L:print(line[:420])

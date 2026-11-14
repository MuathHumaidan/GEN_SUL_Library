#!/usr/bin/env python3
"""ورقة عمل الترجمة: python3 enwork.py COURSE out.txt lesson...
   نص واحد → كتلة (عربي، سطر فارغ للترجمة). مجموعة نصوص لا تختلف إلا في أجزاء لاتينية → PAT جاهز (اكتب البديل بعد |||)."""
import sys,json,re,collections
C,out,ids=sys.argv[1],sys.argv[2],sys.argv[3:]
TAG=re.compile(r'<[^>]+>')
RUN=re.compile(r"[A-Za-z0-9−°%$@#_/\-+(][A-Za-z0-9 .,'’/:?!=+\-–−()·°%$@#_×→←…]*[A-Za-z0-9.?!)'%°…]|[A-Za-z0-9]")
def tmpl(s):
  tags=[];t=TAG.sub(lambda m:(tags.append(m.group(0)),chr(0xE000+len(tags)-1))[1],s)
  parts=[];last=0;vals=[]
  for m in RUN.finditer(t):
    parts.append(t[last:m.start()]);vals.append(m.group(0));last=m.end()
  parts.append(t[last:])
  rest=lambda x:re.sub('[\ue000-\uefff]',lambda m:tags[ord(m.group(0))-0xE000],x)
  return tuple(rest(p) for p in parts),vals
seen=set();items=[]
for i in ids:
  for s in json.load(open(f'/home/claude/en/{C}/{i}.json')):
    if s not in seen:seen.add(s);items.append(s)
G=collections.OrderedDict()
for s in items:
  k,v=tmpl(s);G.setdefault(k,[]).append((s,v))
o=[];BL=[]
for k,L in G.items():
  if len(L)==1:BL.append(['D',L[0][0]]);o.append(f'[{len(BL)}] '+L[0][0]+'\n');continue
  # الأجزاء الثابتة في كل الأعضاء؟ نجعل كل جزء متغير مجموعة
  varying=[j for j in range(len(L[0][1])) if len(set(x[1][j] for x in L))>1]
  rx='';n=0;vi=0
  for j,part in enumerate(k):
    rx+=re.escape(part)
    if j<len(k)-1:
      if j in varying:n+=1;rx+='(.+?)'
      else:rx+=re.escape(L[0][1][j])
  BL.append(['P','^'+rx+'$']);o.append(f'[{len(BL)}] PAT ({len(L)}) مثال: '+L[0][0]+'   ← المتغير: '+' | '.join(L[0][1][j] for j in varying)+'\n')
open(out,'w').write(''.join(o));json.dump(BL,open(out+'.json','w'),ensure_ascii=False);print(len(items),'نص',len(G),'كتلة',sum(1 for L in G.values() if len(L)>1),'نمط')

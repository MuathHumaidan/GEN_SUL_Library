import sys,re;sys.path.insert(0,'/tmp')
from grab import grab_station,AL
def seg_of(s,lid):
  i=s.find(f"id:'{lid}'");L0=s.rfind("B.lesson({",0,i);L1=s.find("B.lesson({",i);L1=len(s) if L1<0 else L1;return L0,L1
def htmlof(seg,title):
  a=seg.find("  {h:'"+title);assert a>0,title;b=seg.find("\n  {",a+5);t=seg[a:b]
  m=re.search(r"html:(.*)\},?\s*$",t,re.S);return m.group(1).rstrip().rstrip('}').rstrip(',')
def convert(path,lid,nst,firstH,Rn,src,labs,recap=None,pre='',H={}):
  s=open(path).read();L0,L1=seg_of(s,lid);seg=s[L0:L1]
  G={n:grab_station(seg,n,nst) for n in range(1,nst+1)}
  for k,t in H.items():src=src.replace('`'+k+'`',htmlof(seg,t))
  for n,L in labs.items():src=src.replace(f'ALAB{n}',AL(G[n][0],G[n][1],L) if n in G else f'labs:[{L}]')
  a=seg.find("  {h:'"+firstH);b=seg.find("  {h:'تمارين الكتاب'");assert a>0 and b>a,(lid,a,b)
  seg2=seg[:a]+f"  ...{Rn}.theory,\n"+seg[b:]
  a=seg2.find("  {st:1,");b=seg2.find("  {recap:");assert a>0 and b>a
  seg2=seg2[:a]+f"  ...{Rn}.stations,\n"+seg2[b:]
  if recap:
    o=seg2[seg2.find("{recap:"):];o=o[:o.find("]}")+2];seg2=seg2.replace(o,"{recap:"+recap+"}")
  s=s[:L0]+pre+src+seg2+s[L1:];open(path,'w').write(s);print('ok',lid)

import re
Q=r"'(?:[^'\\]|\\.)*'"
def grab_station(seg,n,last):
  a=seg.find("{st:%d,"%n);b=seg.find("{st:%d,"%(n+1)) if n<last else seg.find("{recap:")
  g=seg[a:b]
  m=re.search(r"art:(art\(`.*?`,"+Q+r"\)),\s*cap:("+Q+")",g,re.S)
  m2=re.search(r"\{widget:(\(el,B\)=>N\.\w+\(el,B,\{.*?\}\)),title:'مختبر مصغّر: ((?:[^'\\]|\\.)*)'\}\]\}",g,re.S)
  return (m.group(1),m.group(2)) if m else None,(m2.group(1),m2.group(2)) if m2 else None
def AL(art,wid,L):
  s=''
  if art:s+=f"art:{art[0]},cap:{art[1]},"
  labs=[L] if L else []
  if wid:labs.append(f"{{title:'{wid[1]}',w:{wid[0]}}}")
  s+=f"labs:[{','.join(labs)}]"
  return s

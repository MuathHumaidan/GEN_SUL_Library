import sys,os,re
sys.path.insert(0,'/home/claude/lib')
os.chdir('/home/claude/lib')
src=open('make_course.py').read().split("open('courses/plc/index.html'")[0]
ns={};exec(src,ns)
files=sys.argv[1:] or ['kit','en','u1','u2','u3','u4','u5','u6','u7','u8','u9','u10','bx','bxd1','bxd2','bxd3','bxd4','bxd5','bxd6','bxd7','bxd8','bxd9','bxd10']
import os as _os;files=files+[x.replace('bxd','bkd') for x in files if x.startswith('bxd') and _os.path.exists('/home/claude/lib/courses/eng111/lessons/'+x.replace('bxd','bkd')+'.js')]
h=ns['course']('eng111','انجل-111',files)
h=h.replace('المكتبة الرقمية للتقنية الكهربائية','المكتبة الرقمية للدراسات العامة').replace('content="مكتبة الكهرباء"','content="مكتبة الدراسات العامة"')
import sys as _s;_s.path.insert(0,'/home/claude');from en_inject import inject;h=inject('eng111',h)
open('courses/eng111/index.html','w').write(h)

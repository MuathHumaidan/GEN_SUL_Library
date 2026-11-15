import sys,os,re
sys.path.insert(0,'/home/claude/lib')
os.chdir('/home/claude/lib')
src=open('make_course.py').read().split("open('courses/plc/index.html'")[0]
ns={};exec(src,ns)
files=sys.argv[1:] or ['kit','en','tr','vx','vx101','u1','u2','u3','u4','u5','u6','bx','aq','bxd1','bxd2','bxd3','bxd4','bxd5','bxd6']
import os as _os;files=files+[x.replace('bxd','bkd') for x in files if x.startswith('bxd') and _os.path.exists('/home/claude/lib/courses/eng101/lessons/'+x.replace('bxd','bkd')+'.js')]
h=ns['course']('eng101','انجل-101',files)
h=h.replace('المكتبة الرقمية للتقنية الكهربائية','المكتبة الرقمية للدراسات العامة').replace('content="مكتبة الكهرباء"','content="مكتبة الدراسات العامة"')
import sys as _s;_s.path.insert(0,'/home/claude');from en_inject import inject;h=inject('eng101',h)
open('courses/eng101/index.html','w').write(h)

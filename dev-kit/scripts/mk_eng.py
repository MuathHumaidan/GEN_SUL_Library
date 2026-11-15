import sys,os,re
sys.path.insert(0,'/home/claude/lib')
os.chdir('/home/claude/lib')
src=open('make_course.py').read().split("open('courses/plc/index.html'")[0]
ns={};exec(src,ns)
files=sys.argv[1:] or ['kit','en','tr','vx','vx102','e7a','e7b','e8a','e8b','e9','e10','bx','aq','bxd7','bxd8','bxd9','bxd10']
import os as _os;files=files+[x.replace('bxd','bkd') for x in files if x.startswith('bxd') and _os.path.exists('/home/claude/lib/courses/english/lessons/'+x.replace('bxd','bkd')+'.js')]
h=ns['course']('english','الإنجليزية التقنية',files)
h=h.replace('المكتبة الرقمية للتقنية الكهربائية','المكتبة الرقمية للدراسات العامة').replace('content="مكتبة الكهرباء"','content="مكتبة الدراسات العامة"')
import sys as _s;_s.path.insert(0,'/home/claude');from en_inject import inject;h=inject('english',h)
open('courses/english/index.html','w').write(h)

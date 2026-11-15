import sys,os,re
sys.path.insert(0,'/home/claude/lib')
os.chdir('/home/claude/lib')
src=open('make_course.py').read().split("open('courses/plc/index.html'")[0]
ns={};exec(src,ns)
U=['u1','u2','u3','u4','u5','u6']
L=lambda p:os.path.exists(f'courses/eng103/lessons/{p}.js')
files=['kit','en','tr','vx','vx103']+[u for u in U if L(u)]+['bx','aq']+['bxd'+u[1:] for u in U if L('bxd'+u[1:])]
files=[f for f in files if L(f)]
h=ns['course']('eng103','انجل-103',files)
h=h.replace('المكتبة الرقمية للتقنية الكهربائية','المكتبة الرقمية للدراسات العامة').replace('content="مكتبة الكهرباء"','content="مكتبة الدراسات العامة"')
import sys as _s;_s.path.insert(0,'/home/claude');from en_inject import inject;h=inject('eng103',h)
# data-en-off removed: EN mode enabled
open('courses/eng103/index.html','w').write(h);print(files)

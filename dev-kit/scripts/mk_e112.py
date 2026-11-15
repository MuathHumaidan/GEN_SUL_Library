import sys,os,re
sys.path.insert(0,'/home/claude/lib')
os.chdir('/home/claude/lib')
src=open('make_course.py').read().split("open('courses/plc/index.html'")[0]
ns={};exec(src,ns)
U=['u11','u12','u13','u14','u15','u1','u2','u3','u4','u5']
L=lambda p:os.path.exists(f'courses/eng112/lessons/{p}.js')
files=['kit','en']+[u for u in U if L(u)]+['bx','aq']+['bxd'+u[1:] for u in U if L('bxd'+u[1:])]
files=[f for f in files if L(f)]
h=ns['course']('eng112','انجل-112',files)
h=h.replace('المكتبة الرقمية للتقنية الكهربائية','المكتبة الرقمية للدراسات العامة').replace('content="مكتبة الكهرباء"','content="مكتبة الدراسات العامة"')
import sys as _s;_s.path.insert(0,'/home/claude');from en_inject import inject;h=inject('eng112',h)
h=h.replace('<html lang="ar" dir="rtl">','<html lang="ar" dir="rtl" data-en-off>',1)
open('courses/eng112/index.html','w').write(h);print(files)

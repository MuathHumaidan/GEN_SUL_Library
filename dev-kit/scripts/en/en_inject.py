import glob,os,re
def inject(course,h):
    """يضيف i18n.js بعد app.js وملفات القاموس courses/<course>/en/*.js قبل shell.js"""
    h=re.sub(r'\n?<script src="\.\./\.\./shared/i18n\.js"></script>','',h)
    h=re.sub(r'\n?<script src="en/[^"]+"></script>','',h)
    h=h.replace('<script src="../../shared/app.js"></script>','<script src="../../shared/app.js"></script>\n<script src="../../shared/i18n.js"></script>',1)
    fs=sorted(glob.glob(f'/home/claude/lib/courses/{course}/en/*.js'),key=lambda p:(len(os.path.basename(p)),p))
    tags=''.join(f'<script src="en/{os.path.basename(p)}"></script>\n' for p in fs)
    h=h.replace('<script src="../../shared/shell.js"></script>',tags+'<script src="../../shared/shell.js"></script>',1)
    # «اشرح أولاً»: gram.js بعد en.js وقبل ملفات الدروس
    h=re.sub(r'\n?<script src="lessons/gram\.js"></script>','',h)
    if os.path.exists(f'/home/claude/lib/courses/{course}/lessons/gram.js'):
        h=h.replace('<script src="lessons/en.js"></script>','<script src="lessons/en.js"></script>\n<script src="lessons/gram.js"></script>',1)
    return h
if __name__=='__main__':
    import sys
    for c in sys.argv[1:]:
        p=f'/home/claude/lib/courses/{c}/index.html';h=open(p).read();open(p,'w').write(inject(c,h));print(c,'ok')

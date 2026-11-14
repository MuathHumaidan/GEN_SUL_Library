# نطق الأسماء العربية والمدن السعودية (رموز صوتية يفهمها Kokoro)
N={
'Abbas':'æbbˈɑːs','Abha':'ˈæbhɑː','Abu':'ˈæbuː','Adel':'ˈɑːdɪl','Ahmed':'ˈæhmɛd','Ali':'ˈɑliː',
'Amri':'ˈæmɹiː','Dosari':'dˈoʊsɐɹiː','Fahd':'fˈæhd','Ghamdi':'ɡˈæmdiː','Harbi':'hˈɑːɹbiː','Kharj':'kˈɑːɹdʒ',
'Mutairi':'mʊtˈeɪɹiː','Noor':'nˈuːɹ','Otaibi':'ʊtˈeɪbiː','Qahtani':'kɑhtˈɑːniː','Saleh':'sˈɑːlɛ',
'Saud':'sɐˈuːd','Shehri':'ʃˈɛhɹiː','Bader':'bˈɑːdɚ','Badr':'bˈɑːdɚ','Bandar':'bˈændɑɹ','Buraydah':'bʊɹˈeɪdæ',
'Dammam':'dæmmˈɑːm','Dhahran':'ðæhɹˈɑːn','Fahad':'fˈæhæd','Fahmi':'fˈæhmiː','Faisal':'fˈaɪsæl',
'Faisaliah':'faɪsˈæliːæ','Fajr':'fˈædʒɚ','Faris':'fˈɑːɹɪs','Haddad':'hæddˈɑːd','Hadi':'hˈɑːdiː','Hail':'hˈɑːʔɪl',
'Hamad':'hˈæmæd','Haramain':'hæɹæmˈeɪn','Hassan':'hæsˈæn','Huda':'hˈuːdæ','Hussain':'hʊsˈeɪn','Ibrahim':'ɪbɹɑːhˈiːm',
'Jeddah':'dʒˈɛddæ','Jubail':'dʒʊbˈeɪl','Kareem':'kæɹˈiːm','Karim':'kæɹˈiːm','Khalid':'kˈɑːlɪd','Khalifa':'kælˈiːfæ',
'Laila':'lˈeɪlæ','Lina':'lˈiːnæ','Madinah':'mædˈiːnæ','Majed':'mˈɑːdʒɪd','Makkah':'mˈækkæ','Marhaba':'mˈɑɹhæbæ',
'Mona':'mˈuːnæ','Muharram':'mʊhˈæɹɹæm','Najd':'nˈædʒd','Nasser':'nˈɑːsɪɹ','Nawaf':'nəwˈɑːf','Nora':'nˈoʊɹæ',
'Nour':'nˈuːɹ','Omar':'ˈʊmæɹ','Qassim':'kæsˈiːm','Rakan':'ɹˈɑːkæn','Ramadan':'ɹæmædˈɑːn','Rawabi':'ɹæwˈɑːbiː',
'Reem':'ɹˈiːm','Riyadh':'ɹiːjˈɑːd','Saad':'sˈɑːʔæd','Saeed':'sæʔˈiːd','Salem':'sˈɑːlɪm','Sami':'sˈɑːmiː',
'Tabuk':'tæbˈuːk','Tareq':'tˈɑːɹɪk','Tariq':'tˈɑːɹɪk','Turki':'tˈʊɹkiː','Yanbu':'jˈænbuː','Yousef':'jˈuːsɪf',
'Ziyad':'zɪjˈɑːd','Rajhi':'ɹˈɑːdʒħiː','Ali':'ˈɑliː','Ola':'ʕˈʊlæ'}
N['Rajhi']='ɹˈɑːdʒhiː'; N.pop('Ola')
import re
NAMES=sorted(N,key=len,reverse=True)
RX=re.compile(r"\b(?:(Al)-)?("+'|'.join(NAMES)+r")\b(?!-)")
def has(s): return bool(RX.search(s))
def phon(tok,text,lang='en-us'):
  out=[];i=0
  for m in RX.finditer(text):
    seg=text[i:m.start()]
    if seg.strip(): out.append(tok.phonemize(seg,lang).strip())
    out.append(('æl' if m.group(1) else '')+N[m.group(2)]); i=m.end()
  seg=text[i:]
  if seg.strip():
    p=tok.phonemize(seg,lang).strip()
    if out and re.match(r'^[.,!?;:]',p): out[-1]+=p[0]; p=p[1:].strip()
    if p: out.append(p)
  s=' '.join(out)
  return re.sub(r' ([.,!?;:])',r'\1',s)

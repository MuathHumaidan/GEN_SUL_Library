# استبدال الأسماء العربية والمدن (في الجمل البسيطة) بأسماء أجنبية — قرار المدرب نوفمبر 2026
import re
SUR={'Otaibi':'Owens','Shehri':'Shaw','Qahtani':'Carter','Harbi':'Harris','Dosari':'Dawson','Mutairi':'Morgan',
 'Ghamdi':'Gibson','Amri':'Ames','Saud':'Stone','Saleh':'Sullivan','Fahd':'Fisher','Ali':'Allen','Zahrani':'Wilson',
 'Rashid':'Reed','Fahad':'Fisher'}
FIRST={'Ali':'Alex','Saad':'Steve','Omar':'Oliver','Majed':'Mark','Saeed':'Scott','Fahad':'Frank','Faisal':'Felix',
 'Turki':'Tony','Ahmed':'Edward','Huda':'Helen','Sami':'Sean','Badr':'Ben','Bader':'Ben','Khalid':'Kevin','Hamad':'Henry',
 'Nasser':'Nick','Saud':'Stuart','Nawaf':'Neil','Salem':'Simon','Adel':'Daniel','Laila':'Laura','Lina':'Lisa','Mona':'Mary',
 'Nora':'Nina','Reem':'Rachel','Nour':'Nancy','Noor':'Nancy','Fahmi':'Philip','Yousef':'Joseph','Karim':'Chris','Kareem':'Chris',
 'Rakan':'Ryan','Tariq':'Tim','Tareq':'Tim','Bandar':'Brian','Hassan':'Harry','Ibrahim':'Ian','Faris':'Fred','Haddad':'Hudson',
 'Hussain':'Hugh','Abbas':'Arthur','Ziyad':'Zack','Hadi':'Harvey','Saleh':'Shane','Fahd':'Fisher','Hind':'Hannah',
 'Hamdan':'Hamilton','Qarni':'Quinn'}
CITY={'Riyadh':'London','Jeddah':'Liverpool','Dammam':'Leeds','Jubail':'Hull','Abha':'Bath','Tabuk':'Bristol','Hail':'York',
 'Qassim':'Oxford','Buraydah':'Cambridge','Dhahran':'Manchester','Makkah':'Oxford'}
ORG=[('Al-Noor Hospital','Northfield Hospital'),('SunNajd','SunNova'),('Najd Motors','Nova Motors'),('Najd Bank','Nova Bank'),
 ('Rawabi','Riverside'),('Abu Fahad','Frank'),('DAMMAM','LEEDS'),('D-A-double M-A-M','L-double E-D-S'),
 ('A-L dash F-A-H-D','F-I-S-H-E-R'),("['Al-Fahd','Al-Fahad']","['Fisher','Fischer']"),("['Al-Saud','Al-Sayed']","['Stone','Stoner']")]
PROTECT=['King Fahd','Burj Khalifa','Haramain','Faisaliah','Makkah Clock','Kingdom Centre (Riyadh)','Tower (Riyadh)','Al-Kharj']
def spell(w): return '-'.join(w.upper())
def tr(s,cities=True):
  ph={}
  def hide(m):
    k='%d'%len(ph); ph[k]=m.group(0); return k
  s=re.sub('|'.join(re.escape(p) for p in PROTECT),hide,s)
  for a,b in ORG: s=s.replace(a,b)
  s=re.sub(r"\bAl-("+'|'.join(SUR)+r")\b",lambda m:SUR[m.group(1)],s)
  # surname right after a first name (Omar Saleh, Ali Fahd, Laila Saeed, Ms Saeed, Mona Haddad, Lina Kareem, Tareq Nasser)
  s=re.sub(r"\b(Mr|Ms|Mrs|Dr) (Saeed|Saleh|Fahd|Haddad|Kareem|Nasser|Hadi|Qarni|Hamdan)\b",lambda m:m.group(1)+' '+FIRST.get(m.group(2)) if m.group(2) not in('Saleh','Fahd') else m.group(1)+' '+SUR[m.group(2)],s)
  s=re.sub(r"\b("+'|'.join(sorted(FIRST,key=len,reverse=True))+r") (Saleh|Fahd)\b",lambda m:FIRST[m.group(1)]+' '+SUR[m.group(2)],s)
  s=re.sub(r"\b("+'|'.join(sorted(FIRST,key=len,reverse=True))+r")\b(?!-[a-z])",lambda m:FIRST[m.group(1)],s)
  # spelled names: F-A-H-A-D / That's S-A-U-D
  def sp(m):
    w=m.group(0).replace('-','')
    if w in('SAUD','SALEH'): return spell(SUR[w.title()])
    for d in (FIRST,SUR):
      for k,v in d.items():
        if k.upper()==w: return spell(v)
    return m.group(0)
  s=re.sub(r"\b[A-Z](?:-[A-Z]){2,}\b",sp,s)
  if cities:
    s=re.sub(r"\b("+'|'.join(CITY)+r") in Saudi Arabia\b",lambda m:CITY[m.group(1)]+' in England',s)
    s=re.sub(r"\b("+'|'.join(CITY)+r")\b",lambda m:CITY[m.group(1)],s)
  for k,v in ph.items(): s=s.replace(k,v)
  return s
AR={'ليلى سعيد':'لورا سكوت','أحمد صالح':'إدوارد سوليفان','عمر الزهراني':'أوليفر ويلسون','أبو فهد':'فرانك','ليلى':'لورا','عمر':'أوليفر',
 'الشهري':'شو','ماجد':'مارك','هدى':'هيلين','فيصل':'فيليكس','أحمد':'إدوارد','سعد':'ستيف','فهد':'فرانك','نواف':'نيل','بدر':'بن',
 'هند':'هانا','خالد':'كيفن','صالح':'شين','الدوسري':'داوسون','جدة':'ليفربول','الدمام':'ليدز','أبها':'باث','الرياض':'لندن','مكة':'أكسفورد'}
def tr_ar(s,cities=True):
  s=s.replace('الملك فهد','\ue200')
  for k in sorted(AR,key=len,reverse=True):
    if not cities and k in('جدة','الدمام','أبها','الرياض','مكة'): continue
    s=re.sub(r'(?<![ء-ي])'+k+r'(?![ء-ي])',AR[k],s)
  return s

# يولّد تسجيلاً لكل جملة في say.json بصوت am_michael (سرعة 0.9) — ملف لكل جملة باسم بصمتها (FNV-1a)
import json,re,os,subprocess,sys,soundfile as sf
from kokoro_onnx import Kokoro
import os as _o
COURSE=_o.environ.get('COURSE','english')
OUT=f'/home/claude/lib/courses/{COURSE}/audio/tts'; os.makedirs(OUT,exist_ok=True)
def key(s):
  h=0x811c9dc5
  for c in s: h^=ord(c); h=(h*0x01000193)&0xffffffff
  return '%08x'%h
def norm(s): return re.sub(r'\s+',' ',s).strip()
def speakable(s):
  t=s
  t=re.sub(r'(\d)\s?km/h\b',r'\1 kilometers per hour',t)
  t=re.sub(r'(\d)\s?m/s\b',r'\1 meters per second',t)
  t=re.sub(r'(\d)\s?km\b',r'\1 kilometers',t)
  t=re.sub(r'(\d)\s?cm\b',r'\1 centimeters',t)
  t=re.sub(r'(\d)\s?mm\b',r'\1 millimeters',t)
  t=re.sub(r'(\d)\s?kg\b',r'\1 kilograms',t)
  t=re.sub(r'(\d)\s?m\b',r'\1 meters',t)
  t=re.sub(r'\([^)]*[\u0600-\u06FF][^)]*\)','',t)
  t=re.sub(r'[\u0600-\u06FF]+','',t)
  t=t.replace('✔','').replace('✘','')
  t=re.sub(r'\b([01]?\d|2[0-3])\.([0-5]\d)\b(?!\s?(?:km|m|kg|cm|mm|kilo|meter|%))',lambda m:str(int(m.group(1)))+' '+m.group(2),t)
  t=re.sub(r'^\s*=\s*','',t)
  t=t.replace('≠',', or ').replace('→',', ').replace(' = ',', ').replace('·','. ').replace('—',', ').replace(' / ',', ').replace('…','...')
  return t
k=Kokoro('/home/claude/tts/kokoro-v1.0.onnx','/home/claude/tts/voices-v1.0.bin')
texts=[norm(x) for x in json.load(open(_o.environ.get('SAY','/home/claude/tts/say.json')))]
done=0
for s in texts:
  f=f'{OUT}/{key(s)}.mp3'
  if os.path.exists(f): continue
  src=f'/home/claude/lib/courses/english/audio/tts/{key(s)}.mp3'
  if COURSE!='english' and os.path.exists(src):
    import shutil;shutil.copy(src,f);continue
  try:
    a,sr=k.create(speakable(s),voice='am_michael',speed=0.9,lang='en-us');sf.write('/tmp/t.wav',a,sr)
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i','/tmp/t.wav','-ac','1','-b:a','48k',f],check=True);done+=1
  except Exception as e: print('FAIL',s,e,file=sys.stderr)
  if done%25==0: print(done,flush=True)
keys=sorted({key(s) for s in texts if os.path.exists(f'{OUT}/{key(s)}.mp3')})
open(f'/home/claude/lib/courses/{COURSE}/tts.js','w').write('/* تسجيلات النطق (صوت Kokoro am_michael) — بصمات الجمل المسجلة في audio/tts/ */\nwindow.ENG_TTS="'+' '.join(keys)+'";\n')
print('DONE',len(keys))

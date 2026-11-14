#!/bin/bash
# fin.sh COURSE TAG → يدمج الإجابات ويولّد القاموس ويحقنه
C=$1;T=$2;cd /home/claude/en
python3 enmerge.py work/${C}_$T.txt work/${C}_$T.ans src/$C/$T.txt && python3 mkdict.py $C | tail -1 && python3 /home/claude/lib/dev-kit/scripts/en/en_inject.py $C | tail -1

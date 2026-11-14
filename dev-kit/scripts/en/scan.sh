#!/bin/bash
# scan.sh COURSE TAG lesson... → work/<COURSE>_<TAG>.txt
C=$1;T=$2;shift 2
cd /home/claude/book && export PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers NODE_PATH=$(npm root -g)
for l in "$@";do rm -f /home/claude/en/$C/$l.json;done
COURSE=$C timeout 900 node enscan.js "$@" 2>&1 | tail -1
COURSE=$C timeout 600 node labscan.js "$@" 2>&1 | tail -1
cd /home/claude/en && python3 enwork.py $C work/${C}_$T.txt "$@"

import re
from collections import Counter

with open('src/data/centralBankingData.ts', encoding='utf-8') as f:
    text = f.read()

# Match recitationQuestions json array or parse directly
start = text.find('export const recitationQuestions')
arr_str = text[start:]

# extract content strings
contents = re.findall(r'"content":\s*"((?:[^"\\]|\\.)*)"', arr_str)
print(f'Total questions extracted: {len(contents)}')

line_types = []
special_symbols = Counter()

for c in contents:
    c_dec = c.encode('utf-8').decode('unicode_escape', errors='ignore')
    for line in c_dec.split('\n'):
        line_str = line.strip()
        if not line_str:
            continue
        
        # Check markers
        if '==' in line_str:
            special_symbols['==tag=='] += 1
        if line_str.startswith('- '):
            special_symbols['dash-list'] += 1
        if line_str.startswith('*'):
            special_symbols['single-star'] += 1
        if '**' in line_str:
            special_symbols['double-star-bold'] += 1
        if line_str.startswith('1.') or line_str.startswith('(1)') or line_str.startswith('（1）') or line_str.startswith('（一）'):
            special_symbols['numbered'] += 1

print('Symbol statistics in content:')
for k, v in special_symbols.items():
    print(f'  {k}: {v}')

# Let's inspect a few distinct questions (e.g. 1st, 15th, 50th, 100th)
print('\n--- Sample Question 1 ---')
print(contents[0].encode('utf-8').decode('unicode_escape')[:500])

print('\n--- Sample Question 15 ---')
print(contents[14].encode('utf-8').decode('unicode_escape')[:500])

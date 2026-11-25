with open('scripts/build_authoritative_homework.ts', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if '${' in line:
            print(str(i+1) + ': ' + line.strip())

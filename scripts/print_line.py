with open('scripts/build_authoritative_homework.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i in range(max(0, 790), min(len(lines), 805)):
        print(str(i+1) + ': ' + lines[i], end='')

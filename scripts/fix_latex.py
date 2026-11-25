with open('scripts/build_authoritative_homework.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('$\\rightarrow$', '→')
text = text.replace('$\\frac{\\text{企业市值}}{\\text{重置成本}}$', '(企业市值 / 重置成本)')
text = text.replace('\\frac{\\text{企业市值}}{\\text{重置成本}}', '(企业市值 / 重置成本)')
text = text.replace('$M \\uparrow \\rightarrow r \\downarrow \\rightarrow I \\uparrow \\rightarrow Y \\uparrow$', 'M↑ → r↓ → I↑ → Y↑')

with open('scripts/build_authoritative_homework.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print('Replaced LaTeX in build_authoritative_homework.ts')

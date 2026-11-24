import os

path = 'src/data/examData.ts'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Replace TOTAL_EXAM_TERMS = 28 with 30
new_lines = []
for l in lines:
    if 'export const TOTAL_EXAM_TERMS = 28;' in l:
        new_lines.append("import { terminologyList } from './terminology';\n")
        new_lines.append("export const TOTAL_EXAM_TERMS = 30;\n")
    else:
        new_lines.append(l)

# Now find where export const terminologyQuestions begins and ends
start_idx = -1
end_idx = -1
for i, l in enumerate(new_lines):
    if 'export const terminologyQuestions: TerminologyQuestion[] = [' in l:
        start_idx = i
    if start_idx != -1 and 'export const fillInQuestions:' in l:
        end_idx = i
        break

print(f'Replacing terminologyQuestions from line {start_idx} to {end_idx}')
if start_idx != -1 and end_idx != -1:
    replacement = [
        "export const terminologyQuestions: TerminologyQuestion[] = terminologyList;\n\n"
    ]
    final_lines = new_lines[:start_idx] + replacement + new_lines[end_idx:]
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(final_lines)
    print('Updated examData.ts successfully!')
else:
    print('Failed to find slice indices!')

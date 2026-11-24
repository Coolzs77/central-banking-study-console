import re

path = 'central-banking-study-console/src/components/MockExamCanvas.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

# Add MarkdownViewer import
if 'MarkdownViewer' not in text:
    text = text.replace(
        "import {",
        "import { MarkdownViewer } from './common/MarkdownViewer';\nimport {"
    )

# Replace type definition for termScores
text = text.replace(
    "termScores: Record<number, { def: number; nature: number; func: number }>;",
    "termScores: Record<number, number>;"
)

# Replace calculation of termScore
old_calc = """    // Terminology scores (self-scored)
    let termScore = 0;
    paper.terms.forEach((q) => {
      const s = subjectiveScores.termScores[q.id];
      if (s) {
        termScore += (s.def || 0) + (s.nature || 0) + (s.func || 0);
      }
    });"""

new_calc = """    // Terminology scores (self-scored: 0-3 pts)
    let termScore = 0;
    paper.terms.forEach((q) => {
      const s = subjectiveScores.termScores[q.id];
      termScore += (s !== undefined ? s : 3.0);
    });"""

text = text.replace(old_calc, new_calc)

# Replace the JSX block for term rubric
start_target = "{/* After submit: standard 3-point answer & interactive rubric */}"
end_target = "{/* Self-scoring rubric selectors */}"

# Let's find and replace from start_target to the end of the term self-scoring
pattern = re.compile(
    r"\{\/\* After submit: standard 3-point answer & interactive rubric \*\/}.*?<\/div>\s*<\/div>\s*\)\}",
    re.DOTALL
)

new_jsx = """{/* After submit: standard definition & interactive rubric */}
              {examStatus === 'submitted' && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    标准定义与核心采分点 (共3分)：
                  </div>
                  <div className="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                    <MarkdownViewer content={q.definition} maskKeywords={false} />
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-3 text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-300">自我采分：</span>
                    <select
                      value={subjectiveScores.termScores[q.id] ?? 3.0}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setSubjectiveScores((prev) => ({
                          ...prev,
                          termScores: {
                            ...prev.termScores,
                            [q.id]: val,
                          },
                        }));
                      }}
                      className="px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono"
                    >
                      <option value="0">0分</option>
                      <option value="1.0">1.0分 (部分答出)</option>
                      <option value="2.0">2.0分 (基本答对)</option>
                      <option value="3.0">3.0分 (满分，答准核心词)</option>
                    </select>
                  </div>
                </div>
              )}"""

subbed, count = pattern.subn(new_jsx, text)
print(f'Substituted pattern count: {count}')
if count > 0:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(subbed)
    print('Updated MockExamCanvas.tsx successfully!')
else:
    print('Pattern did not match, writing manually...')

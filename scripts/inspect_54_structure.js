import fs from 'fs';

const hwRaw = fs.readFileSync('src/data/homeworkData.ts', 'utf8');
const match = hwRaw.match(/export const homeworkQuestions: HomeworkQuestion\[\] = (\[[\s\S]*?\]);/);
const questions = JSON.parse(match[1]);

console.log('Inspecting 54 questions in homeworkData.ts:');
questions.forEach(q => {
  const lines = q.answer.split('\n');
  const hasSubheading = lines.some(l => /^\s*-\s*\*.*\*|^\s*\*.*\*/.test(l));
  const hasColonPattern = lines.some(l => /^\d+\.\s*\*\*.*?\*\*：/.test(l));
  const hasIndentBullet = lines.some(l => /^\s{2,}-\s/.test(l));
  console.log(`Q${q.id} (Ch${q.chapterId}): lines=${lines.length}, hasSubheading=${hasSubheading}, hasColonPattern=${hasColonPattern}, hasIndentBullet=${hasIndentBullet}`);
});

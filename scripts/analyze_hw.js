import fs from 'fs';

const hwRaw = fs.readFileSync('src/data/homeworkData.ts', 'utf8');
const match = hwRaw.match(/export const homeworkQuestions: HomeworkQuestion\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('Cannot parse homeworkData.ts');
  process.exit(1);
}

const hwQuestions = JSON.parse(match[1]);
console.log(`Loaded ${hwQuestions.length} homework questions.`);

const recRaw = fs.readFileSync('src/data/centralBankingData.ts', 'utf8');
const recMatch = recRaw.match(/export const recitationQuestions: RecitationQuestion\[\] = (\[[\s\S]*?\]);/);
const recQuestions = JSON.parse(recMatch[1]);
console.log(`Loaded ${recQuestions.length} recitation questions.`);

hwQuestions.forEach(hw => {
  console.log(`\n========================================`);
  console.log(`[Q${hw.id}] [Ch${hw.chapterId}] ${hw.question}`);
  console.log(`Current Answer Snippet:`);
  console.log(hw.answer.slice(0, 160).replace(/\n/g, ' '));
  
  // Find matching recitation questions
  const matches = recQuestions.filter(rq => {
    if (rq.chapterId !== hw.chapterId) return false;
    // Check keyword overlap
    const hwQStem = hw.question.replace(/[？。，、\s]/g, '');
    const rqTitle = rq.title.replace(/[？。，、\s\(p0-9\-\)]/g, '');
    return rqTitle.includes(hwQStem) || hwQStem.includes(rqTitle) || 
           (hwQStem.slice(0, 6) && rqTitle.includes(hwQStem.slice(0, 6)));
  });

  if (matches.length > 0) {
    console.log(`Found ${matches.length} matching Recitation Questions:`);
    matches.forEach(m => console.log(`  -> Recitation Q${m.id}: ${m.title}`));
  } else {
    console.log(`  (No direct stem match, checking content similarity)`);
  }
});

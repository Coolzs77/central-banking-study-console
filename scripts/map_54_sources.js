import fs from 'fs';
import path from 'path';

// Load homework questions
const hwRaw = fs.readFileSync('src/data/homeworkData.ts', 'utf8');
const match = hwRaw.match(/export const homeworkQuestions: HomeworkQuestion\[\] = (\[[\s\S]*?\]);/);
const hwQuestions = JSON.parse(match[1]);

// Load recitation questions
const recRaw = fs.readFileSync('src/data/centralBankingData.ts', 'utf8');
const recMatch = recRaw.match(/export const recitationQuestions: RecitationQuestion\[\] = (\[[\s\S]*?\]);/);
const recQuestions = JSON.parse(recMatch[1]);

// Load OCR files
const ocrDir = 'E:/Markdown/Obsidian/二学位/02/课件OCR全书原文';
const ocrFiles = fs.readdirSync(ocrDir);

console.log(`Checking all ${hwQuestions.length} homework questions against courseware sources:`);

const results = [];

hwQuestions.forEach(hw => {
  const ch = hw.chapterId;
  const ocrFileName = ocrFiles.find(f => f.startsWith(`第${ch < 10 ? '0' + ch : ch}章`));
  let ocrContent = '';
  if (ocrFileName) {
    ocrContent = fs.readFileSync(path.join(ocrDir, ocrFileName), 'utf8');
  }

  // Find related recitation questions in the same chapter
  const relatedRec = recQuestions.filter(rq => rq.chapterId === ch);

  // Score recitation questions
  const scoredRec = relatedRec.map(rq => {
    // compute keyword overlap between hw.question and rq.title
    const hwKeywords = hw.question.match(/[\u4e00-\u9fa5]{2,6}/g) || [];
    let score = 0;
    hwKeywords.forEach(kw => {
      if (rq.title.includes(kw)) score += kw.length;
      if (rq.content.includes(kw)) score += kw.length * 0.5;
    });
    return { rq, score };
  }).sort((a, b) => b.score - a.score);

  const topRec = scoredRec.slice(0, 3).filter(s => s.score > 2);

  results.push({
    id: hw.id,
    chapterId: hw.chapterId,
    question: hw.question,
    currentAnswer: hw.answer,
    topRec: topRec.map(t => ({ id: t.rq.id, title: t.rq.title, score: t.score })),
    ocrFile: ocrFileName
  });
});

console.log(JSON.stringify(results.map(r => ({
  id: r.id,
  ch: r.chapterId,
  q: r.question,
  topMatches: r.topRec.map(t => `Q${t.id}: ${t.title}`)
})), null, 2));

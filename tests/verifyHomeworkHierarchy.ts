import { homeworkQuestions } from '../src/data/homeworkData';
import { CENTRAL_BANKING_KEYWORDS } from '../src/data/keywords';

console.log('====================================================');
console.log('   HOMEWORK HIERARCHY & KEYWORD COVERAGE AUDIT       ');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(cond: boolean, name: string, detail?: string) {
  if (cond) {
    console.log(`  [PASS] ${name}`);
    passCount++;
  } else {
    console.error(`  [FAIL] ${name} -> ${detail || ''}`);
    failCount++;
  }
}

// 1. Check all 54 questions
assert(homeworkQuestions.length === 54, 'Total homework questions count is 54');

// 2. Check each question for hierarchical markdown structure
let subheadingsCount = 0;
let childBulletsCount = 0;
let keywordMatchesCount = 0;

homeworkQuestions.forEach(q => {
  const lines = q.answer.split('\n');
  const subheadings = lines.filter(l => /^\s*-\s*\*.*\*|^\s*\*.*\*/.test(l));
  const childBullets = lines.filter(l => /^\s{2,}-\s/.test(l));
  
  if (subheadings.length > 0) subheadingsCount++;
  if (childBullets.length > 0) childBulletsCount++;

  // Check that the answer has keywords
  const boldTerms = (q.answer.match(/\*\*[^*]+\*\*/g) || []).map(b => b.slice(2, -2));
  const dictMatches = CENTRAL_BANKING_KEYWORDS.filter(k => q.answer.includes(k));
  const totalKeywords = new Set([...boldTerms, ...dictMatches]);

  if (totalKeywords.size >= 3) keywordMatchesCount++;
});

assert(subheadingsCount === 54, 'All 54 homework questions contain green summary subheadings (*（一）...*)', `Found ${subheadingsCount}/54`);
assert(childBulletsCount === 54, 'All 54 homework questions contain indented child unordered bullet lists (  - ...)', `Found ${childBulletsCount}/54`);
assert(keywordMatchesCount === 54, 'All 54 homework questions have at least 3 highlighted financial keywords', `Found ${keywordMatchesCount}/54`);

// 3. Check Question 7 specifically
const q7 = homeworkQuestions.find(q => q.id === 7)!;
assert(!!q7, 'Question 7 exists');
assert(q7.question.includes('如何看待中央银行在现代经济中的作用'), 'Question 7 stem is accurate');
assert(q7.answer.includes('稳定货币，稳定经济'), 'Question 7 contains PPT point: 稳定货币，稳定经济');
assert(q7.answer.includes('调节信用，调节经济'), 'Question 7 contains PPT point: 调节信用，调节经济');
assert(q7.answer.includes('集中清算，加速资金周转'), 'Question 7 contains PPT point: 集中清算，加速资金周转');
assert(q7.answer.includes('推进国际金融的合作和交流'), 'Question 7 contains PPT point: 推进国际金融的合作和交流');
assert(q7.answer.includes('推进器') || q7.answer.includes('推动机'), 'Question 7 contains 推动机/推进器 role explanation');
assert(q7.answer.includes('守护者'), 'Question 7 contains 金融体系安全的守护者');
assert(q7.answer.includes('桥梁纽带') || q7.answer.includes('桥梁与纽带'), 'Question 7 contains 桥梁纽带');

// 4. Parser verification on MarkdownViewer regexes
const cleanQ7Lines = q7.answer.split('\n').map(l => l.trim()).filter(Boolean);
const headingLines = cleanQ7Lines.filter(l => {
  let c = l;
  if (c.startsWith('- ')) c = c.slice(2);
  return (
    /^[\\*]*[（\(][一二三四五六七八九十0-9]+[）\)][^\\*]*[\\*]*[:：]?$/.test(c) ||
    /^[\\*]*[一二三四五六七八九十]+[、.][^\\*]*[\\*]*[:：]?$/.test(c) ||
    (/^\*[^*]+\*[:：]?$/.test(c) && !c.includes('**')) ||
    (/^\*\*[^*]+\*\*[:：]?$/.test(c) && c.length <= 40) ||
    (/^\d+[\.、][^。；\n]{1,30}[:：]?$/.test(c) && !c.includes('。') && !c.includes('；'))
  );
});

assert(headingLines.length === 4, 'Question 7 has exactly 4 parsed emerald green subheadings', `Found ${headingLines.length}`);

console.log('\n====================================================');
console.log(`   AUDIT FINISHED: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) process.exit(1);

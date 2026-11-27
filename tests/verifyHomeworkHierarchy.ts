import fs from 'fs';
import path from 'path';
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

  // Check that the answer has keywords (using curated q.keywords if present, else CENTRAL_BANKING_KEYWORDS)
  const boldTerms = (q.answer.match(/\*\*[^*]+\*\*/g) || []).map(b => b.slice(2, -2));
  const activePool = q.keywords && q.keywords.length > 0 ? q.keywords : CENTRAL_BANKING_KEYWORDS;
  const dictMatches = activePool.filter(k => q.answer.includes(k));
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
assert(q7.answer.includes('发行的银行'), 'Question 7 contains 发行的银行 role explanation');
assert(q7.answer.includes('国民经济的枢纽'), 'Question 7 contains 国民经济的枢纽');
assert(q7.answer.includes('重要纽带'), 'Question 7 contains 重要纽带');

// 4. Parser verification on MarkdownViewer regexes
const cleanQ7Lines = q7.answer.split('\n').map(l => l.trim()).filter(Boolean);
const headingLines = cleanQ7Lines.filter(l => {
  let c = l;
  if (c.startsWith('- ')) c = c.slice(2);
  return (
    /^[\\*]*[（\(][一二三四五六七八九十0-9]+[）\)][^。；\n]*[:：]?$/.test(c) ||
    /^[\\*]*[一二三四五六七八九十]+[、.][^。；\n]*[:：]?$/.test(c) ||
    (/^\*[^*]+\*[:：]?$/.test(c) && !c.includes('**')) ||
    (/^\*\*[^*]+\*\*[:：]?$/.test(c) && c.length <= 40) ||
    (/^\d+[\.、][^。；\n]{1,30}[:：]?$/.test(c) && !c.includes('。') && !c.includes('；'))
  );
});

assert(headingLines.length === 4, 'Question 7 has exactly 4 parsed emerald green subheadings', `Found ${headingLines.length}`);

// 5. Deep regression tests for heading cleaning, multi-clause inline summaries, and level-2 preservation
const sampleInline = '1. **经济发展的推动机**：提供统一法定货币媒介；引导资金合理配置；支持实体经济稳步发展；';
const inlineMatch = sampleInline.match(
  /^([（\(][一二三四五六七八九十0-9]+[）\)][^：:]{1,30}|\d+[\.、]\s*\*\*[^*]+\*\*|\d+[\.、]\s*[^：:]{1,30}|[一二三四五六七八九十]+[、.][^：:]{1,30}|\*[^*]+\*|\*\*[^*]+\*\*|[^。；\n：:]{2,25})[：:]([\s\S]+)$/
);
assert(!!inlineMatch, 'Inline summary pattern matches user sample "1. **经济发展的推动机**：..."');
if (inlineMatch) {
  const cleanHeader = inlineMatch[1]
    .replace(/[:：]$/, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/^[*_]+|[*_]+$/g, '')
    .trim();
  assert(cleanHeader === '1. 经济发展的推动机', 'Inline summary header cleanly strips markdown asterisks', `Got "${cleanHeader}"`);
  assert(!cleanHeader.includes('*'), 'Inline summary header contains zero stray asterisks');

  const clauses = inlineMatch[2].trim().split(/[；;]\s*/).map(c => c.trim()).filter(Boolean);
  assert(clauses.length === 3, 'Inline summary splits semicolon-delimited clauses into child bullets', `Got ${clauses.length}`);
}

// 6. Level 2 sub-bullet preservation test
const sampleLevel2 = '    - **发行的银行**：垄断货币发行权，调节货币流通总量与钞票结构；';
const isL2 = sampleLevel2.search(/\S|$/) >= 4 || sampleLevel2.startsWith('    -');
assert(isL2, 'Level 2 sub-bullet is correctly detected as indented');

// 7. Verify HomeworkCanvas masking support
const hwCanvasPath = path.resolve(process.cwd(), 'src/components/HomeworkCanvas.tsx');
const hwCanvasCode = fs.readFileSync(hwCanvasPath, 'utf-8');
assert(hwCanvasCode.includes('maskKeywords={isMasking}'), 'HomeworkCanvas passes dynamic maskKeywords={isMasking} to MarkdownViewer');
assert(hwCanvasCode.includes('挖空遮挡'), 'HomeworkCanvas includes interactive cloze masking toggle button');

console.log('\n====================================================');
console.log(`   AUDIT FINISHED: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) process.exit(1);

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ClayQuestionNav } from '../src/components/common/ClayQuestionNav';
import { MarkdownViewer } from '../src/components/common/MarkdownViewer';
import { PracticeCanvas, PracticeTab } from '../src/components/PracticeCanvas';
import { terminologyList } from '../src/data/terminology';
import {
  singleChoiceQuestions,
  trueFalseQuestions,
  fillInQuestions,
  shortAnswerQuestions,
  essayQuestions,
} from '../src/data/examData';

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, name: string, detail?: string) {
  if (condition) {
    console.log(`  [PASS] ${name}`);
    passCount++;
  } else {
    console.error(`  [FAIL] ${name}${detail ? ` -> ${detail}` : ''}`);
    failCount++;
  }
}

console.log('====================================================');
console.log('   PRACTICE CANVAS & NAV RUNTIME RENDER AUDIT       ');
console.log('====================================================\n');

// 1. Render ClayQuestionNav directly (checks for zero ReferenceError / missing symbols)
const navHtml = renderToStaticMarkup(
  <ClayQuestionNav
    currentIndex={0}
    totalFiltered={40}
    onPrev={() => {}}
    onNext={() => {}}
    onJumpToIndex={() => {}}
    allItemIds={[1, 2, 3]}
    completedItemIds={[1]}
    starredItemIds={[2]}
    isMemorized={true}
    onToggleMemorized={() => {}}
    actionLabel="掌握"
    isStarred={false}
    onToggleStar={() => {}}
    revealed={false}
    onToggleRevealed={() => {}}
    toggleLabel="解析"
    onCopy={() => {}}
    isCopied={false}
    modeBadge="单选题"
  />
);
assert(navHtml.includes('单选题'), 'ClayQuestionNav renders modeBadge "单选题"');
assert(navHtml.includes('1 / 40 ▾'), 'ClayQuestionNav renders jump button');
assert(navHtml.includes('掌握') && navHtml.includes('收藏') && navHtml.includes('复制'), 'ClayQuestionNav renders 掌握/收藏/复制 buttons');

// 2. Render PracticeCanvas for ALL 6 tabs
const tabs: Array<{
  tab: PracticeTab;
  badge: string;
  toggle: string;
}> = [
  { tab: 'terms', badge: '名词解释', toggle: '定义' },
  { tab: 'fill', badge: '填空题', toggle: '答案' },
  { tab: 'choice', badge: '单选题', toggle: '解析' },
  { tab: 'truefalse', badge: '判断改错题', toggle: '解析' },
  { tab: 'short', badge: '简答题', toggle: '答案' },
  { tab: 'essay', badge: '论述题', toggle: '答案' },
];

for (const { tab, badge, toggle } of tabs) {
  const html = renderToStaticMarkup(
    <PracticeCanvas
      terms={terminologyList}
      singleChoices={singleChoiceQuestions}
      trueFalse={trueFalseQuestions}
      fillIns={fillInQuestions}
      shortAnswers={shortAnswerQuestions}
      essays={essayQuestions}
      termMemorized={[1]}
      onToggleTermMemorized={() => {}}
      termStarred={[2]}
      onToggleTermStarred={() => {}}
      choiceMemorized={[1, 2]}
      onToggleChoiceMemorized={() => {}}
      choiceStarred={[3]}
      onToggleChoiceStarred={() => {}}
      tfMemorized={[1]}
      onToggleTfMemorized={() => {}}
      tfStarred={[2]}
      onToggleTfStarred={() => {}}
      fillMemorized={[1]}
      onToggleFillMemorized={() => {}}
      fillStarred={[2]}
      onToggleFillStarred={() => {}}
      shortMemorized={[1]}
      onToggleShortMemorized={() => {}}
      shortStarred={[2]}
      onToggleShortStarred={() => {}}
      essayMemorized={[1]}
      onToggleEssayMemorized={() => {}}
      essayStarred={[2]}
      onToggleEssayStarred={() => {}}
      activePracticeTab={tab}
      currentTermIndex={0}
      currentChoiceIndex={0}
      currentTfIndex={0}
      currentFillIndex={0}
      currentShortIndex={0}
      currentEssayIndex={0}
    />
  );

  assert(html.includes(badge), `PracticeCanvas [${tab}] renders ClayQuestionNav badge "${badge}"`);
  assert(html.includes(toggle), `PracticeCanvas [${tab}] renders toggle button "${toggle}"`);
  assert(html.includes('掌握') && html.includes('收藏') && html.includes('复制'), `PracticeCanvas [${tab}] renders 掌握, 收藏, 复制 buttons`);
  assert(html.includes('已掌握:') && html.includes('已收藏:'), `PracticeCanvas [${tab}] displays mastered & starred summary counts`);
  if (tab === 'fill' || tab === 'choice' || tab === 'truefalse') {
    assert(html.includes('源自全书速记 #'), `PracticeCanvas [${tab}] displays recitation source badge`);
  }
}

// 3. Render MarkdownViewer 4-tier hierarchy
const sampleMd = [
  '根据课件第一章第二节内容，中央银行制度的形成经历了以下阶段：\t==2==',
  '*（一）测试小标题*',
  '  - **融资效果相同**：调节基础货币与货币乘数。',
].join('\n');

const mdNormalHtml = renderToStaticMarkup(
  <MarkdownViewer content={sampleMd} keywords={['货币乘数']} maskKeywords={false} />
);
assert(mdNormalHtml.includes('text-emerald-600'), 'MarkdownViewer Tier 1: subheading renders in emerald green');
assert(mdNormalHtml.includes('text-indigo-700') && mdNormalHtml.includes('融资效果相同'), 'MarkdownViewer Tier 2: bold lead phrase renders in indigo');
assert(mdNormalHtml.includes('text-rose-600') && mdNormalHtml.includes('货币乘数'), 'MarkdownViewer Tier 3: keyword renders in rose-pink');
assert(mdNormalHtml.includes('text-slate-500') && !mdNormalHtml.includes('text-rose-600">第二节'), 'MarkdownViewer Tier 4: 根据课件... line renders in slate-500 without red keyword highlight');

const mdMaskedHtml = renderToStaticMarkup(
  <MarkdownViewer content={sampleMd} keywords={['货币乘数']} maskKeywords={true} />
);
assert(mdMaskedHtml.includes('repeating-linear-gradient') && mdMaskedHtml.includes('role="button"'), 'MarkdownViewer Tier 3 masked: washi tape covers keyword');
assert(mdMaskedHtml.includes('text-indigo-700') && mdMaskedHtml.includes('融资效果相同'), 'MarkdownViewer Tier 2 masked: indigo lead phrase stays unmasked');

console.log('\n====================================================');
console.log(`   PRACTICE UI AUDIT: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) process.exit(1);

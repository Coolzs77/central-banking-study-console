import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ClayQuestionNav } from '../src/components/common/ClayQuestionNav';
import { PracticeCanvas } from '../src/components/PracticeCanvas';
import { terminologyList } from '../src/data/terminology';
import {
  singleChoiceQuestions,
  trueFalseQuestions,
  fillInQuestions,
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
    modeBadge="单选专项"
  />
);
assert(navHtml.includes('单选专项'), 'ClayQuestionNav renders modeBadge');
assert(navHtml.includes('第 1 / 40 题 ▾'), 'ClayQuestionNav renders jump button');
assert(navHtml.includes('掌握') && navHtml.includes('收藏') && navHtml.includes('复制'), 'ClayQuestionNav renders 掌握/收藏/复制 buttons');

// 2. Render PracticeCanvas for ALL 4 tabs
const tabs: Array<{
  tab: 'terms' | 'choice' | 'truefalse' | 'fill';
  badge: string;
  toggle: string;
}> = [
  { tab: 'terms', badge: '名词抽背', toggle: '定义' },
  { tab: 'choice', badge: '单选专项', toggle: '解析' },
  { tab: 'truefalse', badge: '判断改错', toggle: '解析' },
  { tab: 'fill', badge: '填空专项', toggle: '答案' },
];

for (const { tab, badge, toggle } of tabs) {
  const html = renderToStaticMarkup(
    <PracticeCanvas
      terms={terminologyList}
      singleChoices={singleChoiceQuestions}
      trueFalse={trueFalseQuestions}
      fillIns={fillInQuestions}
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
      activePracticeTab={tab}
      currentTermIndex={0}
      currentChoiceIndex={0}
      currentTfIndex={0}
      currentFillIndex={0}
    />
  );

  assert(html.includes(badge), `PracticeCanvas [${tab}] renders ClayQuestionNav badge "${badge}"`);
  assert(html.includes(toggle), `PracticeCanvas [${tab}] renders toggle button "${toggle}"`);
  assert(html.includes('掌握') && html.includes('收藏') && html.includes('复制'), `PracticeCanvas [${tab}] renders 掌握, 收藏, 复制 buttons`);
  assert(html.includes('已掌握:') && html.includes('已收藏:'), `PracticeCanvas [${tab}] displays mastered & starred summary counts`);
  if (tab !== 'terms') {
    assert(html.includes('源自全书速记 #'), `PracticeCanvas [${tab}] displays recitation source badge`);
  }
}

console.log('\n====================================================');
console.log(`   PRACTICE UI AUDIT: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) process.exit(1);

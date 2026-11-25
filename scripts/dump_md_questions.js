import fs from 'fs';

const md = fs.readFileSync('e:/workspace/central-banking-study/中央银行学课后思考题标准答案.md', 'utf8');

// Match sections like "### N. 题目"
const regex = /###\s*(\d+)\.\s*([^\n]+)\s*\n+\*\*【作业本手写答案】\*\*([\s\S]*?)(?=\n---\n|\n###|\n##|$)/g;

let match;
let count = 0;
while ((match = regex.exec(md)) !== null) {
  count++;
  const num = match[1];
  const title = match[2].trim();
  const ans = match[3].trim();
  console.log(`Q${count} [Original #${num}]: ${title}`);
}
console.log(`Total matched in MD: ${count}`);

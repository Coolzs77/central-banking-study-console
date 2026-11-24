import fs from 'fs';

const text = fs.readFileSync('scripts/original_terms.ts', 'utf-8');
const termsJson = text.replace('export const terminologyQuestions: TerminologyQuestion[] = ', '').trim().replace(/;$/, '');
const terms = JSON.parse(termsJson);

const content = `import { TerminologyQuestion } from './types';

export const terminologyList: TerminologyQuestion[] = ` + JSON.stringify(terms, null, 2) + `;\n`;

fs.writeFileSync('src/data/terminology.ts', content);
console.log('Successfully updated src/data/terminology.ts with 28 terms!');

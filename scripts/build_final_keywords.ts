import fs from 'fs';
import { QUESTION_KEYWORDS } from './craft_keywords';

const qs = JSON.parse(fs.readFileSync('scripts/all_161_questions.json', 'utf-8'));

// Specific refinements for questions to have 4-12 high yield exact substrings
const extraTerms: Record<number, string[]> = {
  119: ['时滞的客观存在', '外部时滞', '长期性与多变性', '精确预判', '反周期调节', '顺周期震荡', '加剧经济波动', '逆向冲击'],
  72: ['货币政策是宏观经济政策', '需求管理政策', '间接调控政策', '长期目标', '总需求', '总供给', '宏观变量', '利率、再贴现率、公开市场业务'],
  131: ['干预股市汇市', '全面担保', '非股权性救助', '股权性注资', '有毒资产', '专项基金', '修复金融机构资产负债表'],
  132: ['整顿、接管或兼并重组', '优化金融系统', '金融制度改革', '量化宽松', '针对性信贷政策', '扶持实体经济复苏'],
  134: ['防范化解系统性风险', '优化金融结构', '提高配置效率', '平稳健康运行', '守住不发生系统性金融风险的底线', '可持续稳健发展'],
  148: ['集中统一化', '宏观审慎监管', '《巴塞尔协议III》', '微观审慎与宏观审慎深度融合', '国际合作不断加强', '跨境金融风险'],
  149: ['大一统银行', '专门行使央行职能', '中国人民银行', '分业经营分业监管', '一行三会', '国务院金稳委', '银保监会', '国家金融监督管理总局'],
  151: ['金融全球化', '混业经营', '监管漏洞', '重复监管', '金融控股集团', '市场化风险处置机制', '数字金融监管', '金融科技创新'],
  152: ['宏观审慎监管', '构建理念', '顺周期性与逆周期监管', '大而不倒', '系统重要性机构', '跨机构风险传染', '羊群效应', '个体理性引发集体灾难'],
  26: ['服从履行职责的需要', '货币政策', '金融稳定', '不以盈利为目标', '商业利润', '不经营一般商业银行业务', '保持资产的流动性', '保持业务的公开性', '透明度与公信力', '保持业务的主动性和一定的独立性', '自主抉择权', '遵循相应的法律规范'],
  27: ['银行类业务', '资产负债业务', '支付清算业务', '经理国库业务', '会计核算业务', '管理类业务', '调查统计业务', '调查研究业务', '稽核监督业务', '反洗钱业务', '征信管理业务'],
  28: ['调控信贷规模和货币供应量', '法定存款准备金比率', '再贴现和公开市场操作', '维护金融安全', '控制信贷结构', '国内资金清算的需要', '支付系统', '现金发行量与货币结构', '现金投放', '回笼'],
  29: ['存款的强制性', '存款自愿，取款自由', '存款用途及目标的特殊性', '追求利润最大化', '控制信贷规模和调节货币供应量', '稳定币值', '存款人的特定性', '特殊行政法律关系'],
  30: ['存款准备金', '自存准备', '存储于中央银行的准备金', '库存现金', '业务库', '法定存款准备金', '超额存款准备金', '一般性存款', '资金清算', '资产调整和信用创造', '机会成本'],
  36: ['未按存款类别计提准备金', '差别存款准备金率', '资本充足率', '资产质量', '准备金存款支付利息', '备付金'],
  39: ['特种存款业务', '非常规性', '存款对象具有特定性', '存款期限较短', '行政强制性'],
  41: ['经济发行', '币值稳定', '财政发行', '弥补政府财政赤字', '通货膨胀'],
  42: ['货币发行的渠道', '现金投放', '发行库', '业务库', '现金回笼', '注销'],
  47: ['人民币的发行程序', '发行基金的调拨', '调拨命令', '货币的投放与回笼', '发行基金'],
  54: ['贷款业务', '商业银行等存款货币银行的贷款', '非货币金融机构的贷款', '对政府贷款', '其他贷款'],
  57: ['主动性不同', '流动性与风险不同', '影响范围不同', '全市场价格', '特定申请银行'],
  63: ['净额清算系统', '轧差净额', '全额清算系统', '逐笔一一对应', '即时完成资金终局清算'],
  74: ['扩张型货币政策', '降低基准利率', '买入证券', '降低再贴现率', '紧缩型货币政策', '提高基准利率', '卖出证券', '提高再贴现率'],
  78: ['稳定币值指标的选取', 'GNP平减指数', '消费物价指数', 'CPI', '批发物价指数', 'WPI', '物价变动幅度容忍度', '经济发展阶段'],
  80: ['充分就业', '自然失业率', '摩擦性', '结构性', '季节性失业', '非自愿失业', '扩张性货币政策', '失业率指标'],
  82: ['奥肯定律', '负相关关系', '正相关关系', '资本密集型', '技术密集型', '吸纳能力'],
  83: ['菲利普斯曲线', '反向替代关系', '通货膨胀率与失业率', '破坏正常经济秩序', '损害就业水平'],
  84: ['国际收支逆差与通货膨胀并存', '紧缩型货币政策', '国际收支顺差与通货紧缩并存', '扩张型货币政策', '国际收支逆差与通货紧缩并存', '政策冲突'],
  90: ['货币需求曲线位移', '利率剧烈波动', '固定利率目标', '货币供应量大幅波动'],
  97: ['法定存款准备金政策', '平等性', '影响力大', '力度大、速度快', '流动性危机'],
  100: ['告示效应', '误读', '利差变动', '主动权不完全在中央银行'],
  104: ['操作细微技术性强', '告示作用较弱', '不易被普通公众清晰感知', '发达完善的有价证券市场', '国债与有价证券市场'],
  111: ['凯恩斯传导机制', 'MS -> R -> I -> E -> Y', '市场利率下降', '流动性偏好', '投资利率弹性', '核心中介'],
  112: ['流动性陷阱', '凯恩斯陷阱', '现金形式持有', '完全失效', '投资的利率弹性极低', '投资乘数受限'],
  114: ['货币学派', '弗里德曼', '持久性收入', '稳定货币需求', 'MS -> A -> C -> I -> P -> Y', '名义收入'],
  118: ['内部时滞', '认识时滞', '决策时滞', '外部时滞', '操作时滞', '市场时滞', '实体经济变量'],
  120: ['货币中性论', '古典学派', '理性预期学派', '名义变量', '货币非中性论', '凯恩斯学派', '现代货币主义', '价格刚性', '信息不完全'],
  121: ['双紧搭配模式', '双松搭配模式', '紧货币、松财政', '松货币、紧财政', '挤出效应'],
  127: ['第一代货币危机理论', '克鲁格曼', '财政赤字论', '第二代货币危机理论', '奥布斯特费尔德', '自我实现论', '第三代货币危机理论', '麦金农', '道德风险论', '隐性担保', '第四代货币危机理论', '阿吉翁', '企业外债与资产负债表效应论'],
  128: ['货币政策失误论', '弗里德曼', '金融不稳定假说', '明斯基', '套期保值型', '投机型', '蓬齐型', '银行挤兑论', '戴蒙德与迪布维格', 'D-D模型', '期限错配', '银行体系关键论', '托宾', '折价抛售'],
  129: ['债务—通货紧缩论', '欧文·费雪', '过度负债', '综合性国际债务论', '苏特', '资产价格下降论', '沃尔芬森'],
  141: ['特殊私人部门利益理论', '捕获理论', '卡特尔管制', '被管制集团“捕获”', '社会选择理论'],
  146: ['现场检查', '非现场检查', '骆驼评级体系', 'CAMEL', '资本充足性(C)', '资产质量(A)', '管理能力(M)', '盈利能力(E)', '资产流动性(L)'],
  147: ['统一监管型', '单一全能型', '多头监管型', '牵头监管型', '双峰监管型', '审慎监管与业务行为监管分立', '功能监管型'],
  154: ['逆周期调节', '逆周期资本缓冲', 'CCyB', '动态拨备制度', '逆周期杠杆率', '贷款价值比限制', 'LTV', '偿债收入比限制', 'DTI', '抵押品减让率调整', 'Haircut'],
  155: ['普遍标准', '《巴塞尔协议III》', '核心一级资本要求', '4.5%', '资本留存缓冲', '2.5%', '系统重要性金融机构', 'SIFI', '附加资本要求', '大而不倒', '改革评级公司', '集中清算', '中央对手方', 'CCP', '影子银行', '或有资本']
};

const finalQuestionKeywords: Record<number, string[]> = {};

// Stopwords that must never be keywords on their own
const STOPWORDS = new Set([
  '银行', '国家', '经济', '金融', '发展', '产生', '业务', '需要', '管理', '机构', '系统',
  '关系', '活动', '职能', '地位', '制度', '原则', '手段', '工具', '目标', '内容', '作用',
  '要求', '情况', '方面', '过程', '阶段', '问题', '原因', '特点', '表现', '方式', '方法',
  '重要性', '优越性', '特殊性', '必然性', '必要性', '可能性', '有效性', '局限性'
]);

for (let id = 1; id <= 161; id++) {
  const q = qs[id - 1];
  const fullText = q.title + '\n' + q.content;
  const set = new Set<string>();

  // 1. Initial handcrafted list
  const baseList = QUESTION_KEYWORDS[id] || [];
  for (const item of baseList) {
    if (fullText.includes(item)) {
      set.add(item);
    } else {
      const clean = item.replace(/[《》、“”‘’（）()]/g, '');
      if (fullText.includes(clean)) set.add(clean);
    }
  }

  // 2. Add extra refined terms
  if (extraTerms[id]) {
    for (const item of extraTerms[id]) {
      if (fullText.includes(item)) {
        set.add(item);
      }
    }
  }

  // 3. Extract clean subheadings
  const lines = q.content.split('\n');
  for (const l of lines) {
    const trimmed = l.trim().replace(/^-\s*/, '');
    const m = trimmed.match(/^\*([^*]+)\*$/);
    if (m) {
      const cleanSub = m[1].replace(/^[（\(]?[一二三四五六七八九十0-9]+[）\)]?[\s、.]*/, '').trim();
      if (cleanSub.length >= 2 && cleanSub.length <= 16 && fullText.includes(cleanSub)) {
        set.add(cleanSub);
      }
    }
  }

  // Filter out any standalone stopwords
  const filtered = Array.from(set).filter(term => !STOPWORDS.has(term) && term.length >= 2);
  finalQuestionKeywords[id] = filtered;
}

// Global keyword list (deduplicated)
const allGlobalKeywordsSet = new Set<string>();
for (let id = 1; id <= 161; id++) {
  for (const k of finalQuestionKeywords[id]) {
    allGlobalKeywordsSet.add(k);
  }
}

// Add core terminology terms
const additionalFinancialTerms = [
  '中央银行资产', '再贴现业务', '再贴现利率', '中央银行贷款', '证券买卖业务', '正回购', '逆回购',
  '国际储备', '一般性货币政策工具', '选择性货币政策工具', '法定存款准备金政策', '再贴现政策',
  '公开市场业务', '消费者信用控制', '证券市场信用控制', '不动产信用控制', '信用配额',
  '流动性比率管理', '道义劝告', '窗口指导', '存款准备金', '法定存款准备金', '超额存款准备金',
  '基础货币', '大额实时支付系统', 'HVPS', '小额批量支付系统', 'BEPS', '货币政策',
  '货币政策中介指标', '金融危机', '金融稳定', '宏观审慎监管', 'MPA', '宏观审慎评估体系',
  '逆周期资本缓冲', '系统重要性金融机构', 'SIFI', '影子银行', '巴塞尔协议III', '资本充足率',
  '核心一级资本', '大而不倒', '最后贷款人', '巴杰特法则', '菲利普斯曲线', '奥肯定律',
  '流动性陷阱', '托宾q', '资产负债表渠道', '银行借贷渠道', '双支柱调控框架', '骆驼评级',
  'CAMEL', '存款保险制度', '反洗钱', '征信管理', '券款对付', 'DVP', '常备借贷便利',
  'SLF', '中期借贷便利', 'MLF', '抵押补充贷款', 'PSL', '定向中期借贷便利', 'TMLF',
  '短期流动性调节工具', 'SLO', '央行票据互换', 'CBS', 'Shibor', 'DR007', 'LPR',
  '贷款市场报价利率', '独立国库制', '委托国库制', '代理国库制', '皮尔条例', '联邦储备法',
  '单一中央银行制', '复合中央银行制', '准中央银行制', '跨国中央银行制'
];

for (const t of additionalFinancialTerms) {
  if (!STOPWORDS.has(t)) {
    allGlobalKeywordsSet.add(t);
  }
}

const sortedGlobalKeywords = Array.from(allGlobalKeywordsSet)
  .filter(k => k.length >= 2 && !STOPWORDS.has(k))
  .sort((a, b) => b.length - a.length);

console.log('--- Statistics ---');
console.log('Total questions covered:', Object.keys(finalQuestionKeywords).length);
let minCount = 999;
let maxCount = 0;
let totalKws = 0;
for (let id = 1; id <= 161; id++) {
  const cnt = finalQuestionKeywords[id].length;
  if (cnt < minCount) minCount = cnt;
  if (cnt > maxCount) maxCount = cnt;
  totalKws += cnt;
}
console.log(`Per-question keyword count: min = ${minCount}, max = ${maxCount}, avg = ${(totalKws / 161).toFixed(1)}`);
console.log('Total distinct global keywords:', sortedGlobalKeywords.length);

// Write src/data/keywords.ts
const fileHeader = `// Central Banking Core Financial & Academic Keywords Dictionary
// Comprehensive coverage across all 161 questions and 11 chapters
// Every single question has curated, score-bearing keywords.

export const QUESTION_KEYWORDS: Record<number, string[]> = ${JSON.stringify(finalQuestionKeywords, null, 2)};

export const CENTRAL_BANKING_KEYWORDS: string[] = ${JSON.stringify(sortedGlobalKeywords, null, 2)};

/**
 * Returns the score-bearing keywords for a specific recitation question (1..161)
 */
export function getQuestionKeywords(questionId: number): string[] {
  return QUESTION_KEYWORDS[questionId] || [];
}

/**
 * Check if a word is in the master academic keywords list
 */
export function isCentralBankingKeyword(term: string): boolean {
  return CENTRAL_BANKING_KEYWORDS.includes(term);
}
`;

fs.writeFileSync('src/data/keywords.ts', fileHeader);
console.log('Successfully written src/data/keywords.ts!');

// Central Banking 100-Point Exam Question Bank
// Rebuilt 100% from authoritative PPT recitation & homework datasets (162 recitation Qs, 54 homework Qs)
// Contains:
// - 28 Terminology questions (<= 30 core terms, selected from Ch 4, 5, 6, 7, 8, 10, 11 with 3-pt definitions)
// - 40 Fill-in-the-blank questions (1pt each)
// - 40 Single-choice questions (1pt each, ABCD with rationale)
// - 30 True/False with correction questions (1pt each, with errorCorrection)
// - 20 Short-answer questions (6/6/8pt rubrics)
// - 6 Major essay questions (20pt each with detailed 4-part rubric: theory 4pt, mechanism 8pt, practice 6pt, conclusion 2pt)

import {
  TerminologyQuestion,
  FillInQuestion,
  SingleChoiceQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  EssayQuestion,
  ExamPaper
} from './types';

import { terminologyList } from './terminology';
export const TOTAL_EXAM_TERMS = 28;
export const TOTAL_FILL_IN = 40;
export const TOTAL_SINGLE_CHOICE = 40;
export const TOTAL_TRUE_FALSE = 30;
export const TOTAL_SHORT_ANSWER = 20;
export const TOTAL_ESSAYS = 6;

export const terminologyQuestions: TerminologyQuestion[] = terminologyList;

export const fillInQuestions: FillInQuestion[] = [
  {
    "id": 1,
    "chapterId": 1,
    "recitationQuestionId": 4,
    "stem": "1694年成立、被世界各国一般认为是“中央银行的鼻祖”的是_____。",
    "answers": [
      "英格兰银行"
    ],
    "points": 1,
    "explanation": "全书速记第4题指出，英格兰银行于1694年成立，比瑞典银行晚38年，但世界各国一般都认为英格兰银行是中央银行的鼻祖。"
  },
  {
    "id": 2,
    "chapterId": 1,
    "recitationQuestionId": 4,
    "stem": "1656年设立、1668年改组为国家银行并最早执行中央银行职能的是_____。",
    "answers": [
      "瑞典银行"
    ],
    "points": 1,
    "explanation": "全书速记第4题指出，瑞典银行于1656年设立、1668年改组为国家银行，是最早执行中央银行职能的银行。"
  },
  {
    "id": 3,
    "chapterId": 1,
    "recitationQuestionId": 6,
    "stem": "按照中央银行的资本结构划分，中国人民银行属于_____的中央银行。",
    "answers": [
      "全部由国家所有",
      "国家所有"
    ],
    "points": 1,
    "explanation": "全书速记第6题指出，全部由国家所有的中央银行资本归国家所有，如英国、法国、德国、中国人民银行等均采用这种形式。"
  },
  {
    "id": 4,
    "chapterId": 1,
    "recitationQuestionId": 4,
    "stem": "美国1913年通过《_____》，设立由联邦储备委员会、12家联邦储备银行及会员银行组成的联邦储备体系。",
    "answers": [
      "联邦储备法"
    ],
    "points": 1,
    "explanation": "全书速记第4题指出，美国1913年通过《联邦储备法》，设立了由联邦储备委员会、12家联邦储备银行及会员银行组成的联邦储备体系。"
  },
  {
    "id": 5,
    "chapterId": 1,
    "recitationQuestionId": 13,
    "stem": "中央银行的三大基本职能是发行的银行、银行的银行和_____。",
    "answers": [
      "政府的银行"
    ],
    "points": 1,
    "explanation": "全书速记第11至13题指出，中央银行的三大职能是发行的银行、银行的银行和政府的银行。"
  },
  {
    "id": 6,
    "chapterId": 2,
    "recitationQuestionId": 17,
    "stem": "中央银行独立性的主要内容包括：享有独立的货币发行权、独立制定和执行货币政策，以及独立监督、监测_____。",
    "answers": [
      "金融市场"
    ],
    "points": 1,
    "explanation": "全书速记第17题指出，中央银行独立性主要反映在享有独立的货币发行权、独立制定和执行货币政策、独立监督监测金融市场三方面。"
  },
  {
    "id": 7,
    "chapterId": 2,
    "recitationQuestionId": 22,
    "stem": "中国人民银行的独立性属于在_____领导下的相对独立性。",
    "answers": [
      "国务院"
    ],
    "points": 1,
    "explanation": "全书速记第22题指出，我国《中国人民银行法》规定中国人民银行在国务院领导下依法独立执行货币政策，履行职责。"
  },
  {
    "id": 8,
    "chapterId": 3,
    "recitationQuestionId": 27,
    "stem": "中央银行业务活动的基本原则包括服从履行职责的需要、不以盈利为目标、不经营一般商业银行业务、保持资产的流动性、保持业务的公开性、保持业务的主动性和一定的_____、遵循相应的法律规范。",
    "answers": [
      "独立性"
    ],
    "points": 1,
    "explanation": "全书速记第27题列出了中央银行业务活动的七大原则，其中包括保持业务的主动性和一定的独立性。"
  },
  {
    "id": 9,
    "chapterId": 3,
    "recitationQuestionId": 26,
    "stem": "中央银行的法定业务限制明确规定，一般不得向财政_____，不得直接认购、包销国债和其他政府债券。",
    "answers": [
      "透支"
    ],
    "points": 1,
    "explanation": "全书速记第26题指出，中央银行一般不得向财政透支，不得直接认购、包销国债和其他政府债券。"
  },
  {
    "id": 10,
    "chapterId": 4,
    "recitationQuestionId": 31,
    "stem": "商业银行存放在中央银行的准备金分为法定存款准备金和_____两部分。",
    "answers": [
      "超额存款准备金",
      "超额准备金"
    ],
    "points": 1,
    "explanation": "全书速记第31题指出，存储于中央银行的准备金分为法定存款准备金与超额存款准备金。"
  },
  {
    "id": 11,
    "chapterId": 4,
    "recitationQuestionId": 35,
    "stem": "我国目前确定调整存款准备金的基期长度为_____。",
    "answers": [
      "一旬"
    ],
    "points": 1,
    "explanation": "全书速记第35题指出，我国目前确定调整存款准备金的基期长度为“一旬”。"
  },
  {
    "id": 12,
    "chapterId": 4,
    "recitationQuestionId": 46,
    "stem": "我国人民币的发行坚持集中发行原则、_____和计划发行原则三大原则。",
    "answers": [
      "经济发行原则"
    ],
    "points": 1,
    "explanation": "全书速记第46题指出，人民币发行的三大原则为集中发行原则、经济发行原则和计划发行原则。"
  },
  {
    "id": 13,
    "chapterId": 4,
    "recitationQuestionId": 47,
    "stem": "当商业银行现金收入超过库存限额时，超过部分存入人民银行发行库，转化为发行基金，这一过程称为现金_____。",
    "answers": [
      "回笼",
      "现金回笼"
    ],
    "points": 1,
    "explanation": "全书速记第47题指出，当商业银行现金收入超过库存限额时，超过部分存入发行库形成现金回笼（转化为发行基金）。"
  },
  {
    "id": 14,
    "chapterId": 4,
    "recitationQuestionId": 45,
    "stem": "中央银行发行货币并不要求持有一定准备资产，而以国家信用和中央银行信用作为发行保证的制度称为_____。",
    "answers": [
      "无准备制度"
    ],
    "points": 1,
    "explanation": "全书速记第45题指出，无准备制度下央行发行货币不要求持有一定准备资产，典型国家是中国。"
  },
  {
    "id": 15,
    "chapterId": 4,
    "recitationQuestionId": 50,
    "stem": "中央银行债券的发行对象和持有者主要是经过特许的_____，而国库券的持有者可以是金融机构、企业组织、社会团体及自然人。",
    "answers": [
      "金融机构"
    ],
    "points": 1,
    "explanation": "全书速记第50题指出，中央银行债券的持有者是经过特许的金融机构。"
  },
  {
    "id": 16,
    "chapterId": 5,
    "recitationQuestionId": 53,
    "stem": "商业银行申请再贴现时，必须以已办理贴现的_____合法票据申请再贴现。",
    "answers": [
      "未到期的",
      "未到期"
    ],
    "points": 1,
    "explanation": "全书速记第53题指出，商业银行必须以已办理贴现的未到期的合法票据申请再贴现。"
  },
  {
    "id": 17,
    "chapterId": 5,
    "recitationQuestionId": 59,
    "stem": "公开市场的证券买卖方式有两种，即回购和_____。",
    "answers": [
      "现券交易"
    ],
    "points": 1,
    "explanation": "全书速记第59题指出，公开市场的证券买卖方式有两种，即回购（正回购与逆回购）和现券交易（买断与卖断）。"
  },
  {
    "id": 18,
    "chapterId": 5,
    "recitationQuestionId": 52,
    "stem": "再贴现和贷款业务是中央银行履行“最后贷款人”职能的重要手段，也是中央银行提供_____的重要渠道。",
    "answers": [
      "基础货币"
    ],
    "points": 1,
    "explanation": "全书速记第52题指出，再贴现和贷款业务是中央银行提供基础货币的重要渠道。"
  },
  {
    "id": 19,
    "chapterId": 5,
    "recitationQuestionId": 61,
    "stem": "中国国际储备由黄金储备、外汇储备、在IMF的储备头寸和_____四部分构成，其主体是外汇储备。",
    "answers": [
      "SDR"
    ],
    "points": 1,
    "explanation": "全书速记第61题指出，中国国际储备由黄金储备、外汇储备、在IMF的储备头寸和SDR四部分构成。"
  },
  {
    "id": 20,
    "chapterId": 6,
    "recitationQuestionId": 64,
    "stem": "按对转账资金的不同处理方式，支付清算系统分为净额清算系统和_____。",
    "answers": [
      "全额清算系统"
    ],
    "points": 1,
    "explanation": "全书速记第64题指出，支付清算系统按对转账资金的不同处理方式分为净额清算系统和全额清算系统。"
  },
  {
    "id": 21,
    "chapterId": 6,
    "recitationQuestionId": 69,
    "stem": "国际清算银行（BIS）于2001年提出了建立重要支付系统的十条“_____”。",
    "answers": [
      "核心原则"
    ],
    "points": 1,
    "explanation": "全书速记第69题指出，国际清算银行（BIS）于2001年提出了建立重要支付系统的十条“核心原则”。"
  },
  {
    "id": 22,
    "chapterId": 7,
    "recitationQuestionId": 72,
    "stem": "货币政策的五大目标包括保持稳定币值、促进经济稳定增长、促进充分就业、促进国际收支平衡和保持_____。",
    "answers": [
      "金融稳定"
    ],
    "points": 1,
    "explanation": "全书速记第72题指出，货币政策五大目标包含保持金融稳定，防范金融危机。"
  },
  {
    "id": 23,
    "chapterId": 7,
    "recitationQuestionId": 84,
    "stem": "根据_____曲线和奥肯定律，在短期内通货膨胀与经济增长和充分就业之间通常存在正相关关系。",
    "answers": [
      "菲利普斯"
    ],
    "points": 1,
    "explanation": "全书速记第84题指出，根据菲利普斯曲线（Phillips curve）和奥肯定律，短期内通货膨胀与经济增长和充分就业之间通常存在正相关关系。"
  },
  {
    "id": 24,
    "chapterId": 7,
    "recitationQuestionId": 88,
    "stem": "选择货币政策中介指标和操作指标的四大标准是相关性、可测性、可控性和_____。",
    "answers": [
      "抗干扰性"
    ],
    "points": 1,
    "explanation": "全书速记第88题指出，选择中介指标和操作指标必须符合相关性、可测性、可控性和抗干扰性四大标准。"
  },
  {
    "id": 25,
    "chapterId": 7,
    "recitationQuestionId": 95,
    "stem": "被称为“强力货币”和“高能货币”，并且是我国现行货币政策操作指标的是_____。",
    "answers": [
      "基础货币"
    ],
    "points": 1,
    "explanation": "全书速记第95题指出，基础货币被称为“强力货币”和“高能货币”，是我国现行的货币政策操作指标。"
  },
  {
    "id": 26,
    "chapterId": 8,
    "recitationQuestionId": 97,
    "stem": "法定存款准备金政策为派生存款规定了量的界限，直接影响_____，从而调节货币供给总量。",
    "answers": [
      "货币乘数"
    ],
    "points": 1,
    "explanation": "全书速记第97题指出，法定存款准备金政策为派生存款规定了量的界限，影响货币乘数，进而调节货币供给总量。"
  },
  {
    "id": 27,
    "chapterId": 8,
    "recitationQuestionId": 98,
    "stem": "法定存款准备金率的轻微变动会通过货币乘数放大，可能给经济带来强烈_____，因此央行使用时一般比较慎重。",
    "answers": [
      "振荡"
    ],
    "points": 1,
    "explanation": "全书速记第98题指出，法定存款准备金率轻微变动会带来法定存款准备金量巨大变动，通过货币乘数放大可能带来经济强烈振荡。"
  },
  {
    "id": 28,
    "chapterId": 8,
    "recitationQuestionId": 100,
    "stem": "再贴现政策的四大作用包括影响准备金和资金成本、调整信贷结构、产生_____作用影响公众预期，以及防止金融恐慌。",
    "answers": [
      "告示"
    ],
    "points": 1,
    "explanation": "全书速记第100题指出，再贴现政策具有产生变动方向和力度的告示作用，影响公众预期。"
  },
  {
    "id": 29,
    "chapterId": 8,
    "recitationQuestionId": 108,
    "stem": "中央银行通过道义劝告、窗口指导等办法间接影响商业银行信用创造的措施称为_____。",
    "answers": [
      "间接信用控制"
    ],
    "points": 1,
    "explanation": "全书速记第108题指出，间接信用控制是指中央银行通过道义劝告、窗口指导等办法间接影响商业银行的信用创造。"
  },
  {
    "id": 30,
    "chapterId": 8,
    "recitationQuestionId": 111,
    "stem": "2014年9月中国人民银行创设的、期限包括3个月、6个月和12个月的中短期抵押贷款工具是_____（MLF）。",
    "answers": [
      "中期借贷便利"
    ],
    "points": 1,
    "explanation": "全书速记第111题指出，中期借贷便利（MLF）于2014年9月创设，是央行对金融机构发放的中短期抵押贷款。"
  },
  {
    "id": 31,
    "chapterId": 9,
    "recitationQuestionId": 113,
    "stem": "凯恩斯货币政策传导机制可能因“_____”出现或投资的利率弹性非常低而受阻。",
    "answers": [
      "凯恩斯陷阱"
    ],
    "points": 1,
    "explanation": "全书速记第113题指出，凯恩斯货币政策传导受阻的两大障碍是“凯恩斯陷阱”出现和投资的利率弹性非常低。"
  },
  {
    "id": 32,
    "chapterId": 9,
    "recitationQuestionId": 119,
    "stem": "货币政策的内部时滞是央行制定和操作货币政策所需时间，细分为认识时滞和_____。",
    "answers": [
      "决策时滞"
    ],
    "points": 1,
    "explanation": "全书速记第119题指出，内部时滞细分为认识时滞和决策时滞。"
  },
  {
    "id": 33,
    "chapterId": 9,
    "recitationQuestionId": 123,
    "stem": "我国积极探索建立货币政策和_____“双支柱”调控框架，前者侧重经济和物价稳定，后者侧重维护金融稳定。",
    "answers": [
      "宏观审慎政策"
    ],
    "points": 1,
    "explanation": "全书速记第123题指出，我国积极探索建立货币政策和宏观审慎政策“双支柱”调控框架。"
  },
  {
    "id": 34,
    "chapterId": 9,
    "recitationQuestionId": 125,
    "stem": "随着经济全球化和国际金融化的发展，加强国际货币政策协调可以克服国际经济竞争中的“_____”。",
    "answers": [
      "囚徒困境"
    ],
    "points": 1,
    "explanation": "全书速记第125题指出，国际货币政策协调旨在克服国际经济竞争中的“囚徒困境”。"
  },
  {
    "id": 35,
    "chapterId": 10,
    "recitationQuestionId": 129,
    "stem": "海曼·明斯基的金融不稳定假说将借款者分为套期保值型、投机型和_____三类。",
    "answers": [
      "蓬齐型"
    ],
    "points": 1,
    "explanation": "全书速记第129题指出，海曼·明斯基在1963年提出的金融不稳定假说将借款者分为套期保值型、投机型和蓬齐型。"
  },
  {
    "id": 36,
    "chapterId": 10,
    "recitationQuestionId": 132,
    "stem": "在金融危机化解举措中，向金融机构注资可通过非股权性救助、股权性注资和购买“_____”等方式实施。",
    "answers": [
      "有毒资产"
    ],
    "points": 1,
    "explanation": "全书速记第132题指出，向金融机构注资可通过非股权性救助、股权性注资和购买“有毒资产”等方式进行。"
  },
  {
    "id": 37,
    "chapterId": 10,
    "recitationQuestionId": 138,
    "stem": "1999年5月由IMF和世界银行联合推出的、通过宏观、微观和监管层次衡量金融体系稳定性的规划是_____（FSAP）。",
    "answers": [
      "金融部门评估规划"
    ],
    "points": 1,
    "explanation": "全书速记第138题指出，金融部门评估规划（FSAP）于1999年5月由IMF和世界银行联合推出。"
  },
  {
    "id": 38,
    "chapterId": 11,
    "recitationQuestionId": 147,
    "stem": "美国监管当局于20世纪70年代后期开始采用的骆驼评级体系（CAMEL），主要考察资本充足性、资产质量、管理能力、盈利能力和_____五个方面。",
    "answers": [
      "资产的流动性",
      "流动性"
    ],
    "points": 1,
    "explanation": "全书速记第147题指出，骆驼评级体系监管内容包括资本充足性、资产质量、管理能力、盈利能力、资产的流动性五个方面。"
  },
  {
    "id": 39,
    "chapterId": 11,
    "recitationQuestionId": 156,
    "stem": "《巴塞尔协议III》大幅提高高质量核心一级资本最低要求，将普通股比例从2%提升至_____。",
    "answers": [
      "4.5%"
    ],
    "points": 1,
    "explanation": "全书速记第156题指出，《巴塞尔协议III》将普通股比例从2%提升至4.5%。"
  },
  {
    "id": 40,
    "chapterId": 11,
    "recitationQuestionId": 162,
    "stem": "中国黄金现货交易、延期交收交易和中远期交易在_____进行，由中国人民银行监管。",
    "answers": [
      "上海黄金交易所"
    ],
    "points": 1,
    "explanation": "全书速记第162题指出，中国黄金现货交易、延期交收交易和中远期交易在上海黄金交易所进行，由中国人民银行监管。"
  }
];

export const singleChoiceQuestions: SingleChoiceQuestion[] = [
  {
    "id": 1,
    "chapterId": 1,
    "recitationQuestionId": 4,
    "stem": "历史上最早执行中央银行职能的银行是（ ）。",
    "options": {
      "A": "英格兰银行",
      "B": "瑞典银行",
      "C": "法兰西银行",
      "D": "美联储"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第4题指出，瑞典银行1656年设立、1668年改组为国家银行，是最早执行中央银行职能的银行；英格兰银行1694年成立，是现代中央银行的鼻祖。"
  },
  {
    "id": 2,
    "chapterId": 1,
    "recitationQuestionId": 5,
    "stem": "下列关于“复合式中央银行”的表述，符合课件内容的是（ ）。",
    "options": {
      "A": "一个国家仅设立一家中央银行机构统一行使职能",
      "B": "一个国家内设立一个一级中央银行机构，并在地方设立若干个二级中央银行机构，共同组成统一的中央银行体系",
      "C": "一个国家或地区没有通常意义上的中央银行，由类似机构代行部分职能",
      "D": "两个以上国家结成货币联盟共同设立一家中央银行"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第5题指出，复合式中央银行是指一个国家内设立一个一级中央银行机构，并在地方设立若干个二级中央银行机构，共同组成统一的中央银行体系；A为一元式单一中央银行，C为准中央银行，D为跨国中央银行。"
  },
  {
    "id": 3,
    "chapterId": 1,
    "recitationQuestionId": 7,
    "stem": "中央银行的最高权力机构中，决策权、执行权和监督权由不同机构交叉掌管的代表国家是（ ）。",
    "options": {
      "A": "英国、美国",
      "B": "日本、德国",
      "C": "瑞士、比利时",
      "D": "法国、韩国"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第7题指出，瑞士、比利时等国采用决策权、执行权和监督权由不同机构交叉掌管的模式；英国、美国为统一掌管，日本、德国、法国、韩国为分属不同机构。"
  },
  {
    "id": 4,
    "chapterId": 1,
    "recitationQuestionId": 6,
    "stem": "下列中央银行中，属于“公私混合所有”资本结构的是（ ）。",
    "options": {
      "A": "中国人民银行",
      "B": "美联储",
      "C": "日本银行",
      "D": "韩国银行"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第6题指出，日本银行和比利时国家银行属于公私混合所有；中国人民银行属于全部由国家所有，美联储属于集体所有，韩国银行属于无资本金的中央银行。"
  },
  {
    "id": 5,
    "chapterId": 2,
    "recitationQuestionId": 15,
    "stem": "在现代经济中，中央银行被称为“金融体系安全的守护者”，主要对应其哪一项作用（ ）。",
    "options": {
      "A": "稳定货币，稳定经济",
      "B": "调节信用，调节经济",
      "C": "集中清算，加速资金周转",
      "D": "推进国际金融的合作和交流"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第15题指出，中央银行在现代经济中的四大作用中，“集中清算，加速资金周转”体现其作为“金融体系安全的守护者”的角色。"
  },
  {
    "id": 6,
    "chapterId": 2,
    "recitationQuestionId": 20,
    "stem": "按照中央银行相对独立性的类型划分，英国的英格兰银行和日本银行属于（ ）。",
    "options": {
      "A": "独立性较强型",
      "B": "独立性居中型",
      "C": "独立性较弱型",
      "D": "完全从属型"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第20题指出，英格兰银行、日本银行属于独立性居中型（或次强型）；德国联邦银行、美联储和欧洲中央银行属于独立性较强型。"
  },
  {
    "id": 7,
    "chapterId": 2,
    "recitationQuestionId": 22,
    "stem": "下列关于中国人民银行独立性的表述，正确的是（ ）。",
    "options": {
      "A": "中国人民银行直接向全国人大常委会负责，不受国务院领导",
      "B": "中国人民银行在国务院领导下依法独立执行货币政策，不受地方政府、各级政府部门、社会团体和个人的干涉",
      "C": "中国人民银行可以根据地方政府要求直接向其提供贷款",
      "D": "中国人民银行可以按财政部门要求直接认购国债"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第22题指出，中国人民银行在国务院领导下依法独立执行货币政策，履行职责，不受地方政府、各级政府部门、社会团体和个人的干涉。"
  },
  {
    "id": 8,
    "chapterId": 3,
    "recitationQuestionId": 25,
    "stem": "根据《中央银行法》的规定，中央银行制度确立的标志以及进行宏观调控的基础是（ ）。",
    "options": {
      "A": "垄断货币发行权",
      "B": "代理国库业务",
      "C": "开展商业性证券投资",
      "D": "向企业提供担保"
    },
    "correctKey": "A",
    "points": 1,
    "rationale": "全书速记第25题指出，垄断货币发行权是中央银行最基本、最重要的特征，是中央银行制度确立的标志，也是进行宏观调控的基础。"
  },
  {
    "id": 9,
    "chapterId": 3,
    "recitationQuestionId": 28,
    "stem": "按照是否与货币资金的运动相关划分，下列属于中央银行“管理类业务”的是（ ）。",
    "options": {
      "A": "支付清算业务",
      "B": "经理国库业务",
      "C": "征信管理与反洗钱管理",
      "D": "公开市场业务"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第28题指出，管理类业务与货币资金运动无直接关系且不导致数量或结构变化，包括征信管理、反洗钱和金融安全管理等；A、B、D均属于银行类业务。"
  },
  {
    "id": 10,
    "chapterId": 4,
    "recitationQuestionId": 29,
    "stem": "与商业银行吸收存款不同，中央银行存款业务的资金来源形成机制是（ ）。",
    "options": {
      "A": "通过吸收居民储蓄创造资金来源",
      "B": "通过资金的运用创造资金来源",
      "C": "通过高息揽存扩大资金来源",
      "D": "通过财政拨款形成存款负债"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第29题指出，商业银行吸收存款是为了获取资金来源并通过资金运用创造利润，而中央银行是通过资金的运用创造资金来源。"
  },
  {
    "id": 11,
    "chapterId": 4,
    "recitationQuestionId": 37,
    "stem": "我国现行存款准备金制度与西方国家通行做法的主要差异之一是（ ）。",
    "options": {
      "A": "我国对活期存款和定期存款实行不同的准备金率",
      "B": "我国对法定存款准备金和备付金支付利息",
      "C": "我国只对企业存款计提准备金",
      "D": "我国商业银行可以自由动用法定存款准备金"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第37题指出，西方国家中央银行一般不对商业银行的准备金存款支付利息，而中国人民银行对法定存款准备金和备付金支付利息。"
  },
  {
    "id": 12,
    "chapterId": 4,
    "recitationQuestionId": 40,
    "stem": "下列关于中央银行特种存款业务特点的表述，不正确的是（ ）。",
    "options": {
      "A": "具有非常规性，只在特殊情况下开办",
      "B": "存款对象具有特定性，很少面向所有金融机构",
      "C": "存款期限较长，一般为五年以上",
      "D": "数量和利率完全由中央银行确定，具有一定强制性"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第40题指出，特种存款业务存款期限较短，一般为一年。"
  },
  {
    "id": 13,
    "chapterId": 4,
    "recitationQuestionId": 42,
    "stem": "中央银行为弥补国家财政赤字而额外增加的货币发行属于（ ）。",
    "options": {
      "A": "经济发行",
      "B": "财政发行",
      "C": "信用发行",
      "D": "弹性发行"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第42题指出，财政发行是指为弥补国家财政赤字而进行的货币发行，会形成超经济需要的过多货币量。"
  },
  {
    "id": 14,
    "chapterId": 4,
    "recitationQuestionId": 50,
    "stem": "下列关于中央银行债券与国库券区别的表述，正确的是（ ）。",
    "options": {
      "A": "中央银行债券旨在弥补财政预算赤字",
      "B": "国库券的持有者仅限于经过特许的金融机构",
      "C": "中央银行债券不受财政预算和国债规模等外在因素影响，操作更便利",
      "D": "中央银行债券的发行和交易成本比国库券更低"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第50题指出，中央银行债券不受财政预算、国债规模等外在因素影响，操作更便利，但会导致央行成本过高，通常作为公开市场操作的备用工具。"
  },
  {
    "id": 15,
    "chapterId": 5,
    "recitationQuestionId": 53,
    "stem": "根据课件关于再贴现票据的规定，美联储规定用于再贴现的商业票据期限不超过（ ）。",
    "options": {
      "A": "30天",
      "B": "60天",
      "C": "90天",
      "D": "180天"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第53题指出，美联储规定申请再贴现的商业票据不超过90天、农产品票据不超过9个月。"
  },
  {
    "id": 16,
    "chapterId": 5,
    "recitationQuestionId": 59,
    "stem": "为防止直接购买政府债券沦为弥补财政赤字的工具而引发通货膨胀，各国一般限定中央银行证券买卖业务只能在（ ）进行。",
    "options": {
      "A": "一级市场",
      "B": "二级市场",
      "C": "柜台发行市场",
      "D": "场外衍生品市场"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第59题指出，为了防止直接购买政府债券沦为弥补财政赤字的工具而引发通货膨胀，一般限定中央银行证券买卖业务只能在二级市场进行。"
  },
  {
    "id": 17,
    "chapterId": 5,
    "recitationQuestionId": 59,
    "stem": "中央银行在公开市场上卖出有价证券，并约定在未来特定日期买回的交易方式称为（ ）。",
    "options": {
      "A": "买断",
      "B": "卖断",
      "C": "正回购",
      "D": "逆回购"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第59题指出，正回购是卖出并约定未来买回，用于收回流动性；逆回购是买入并约定未来卖回，用于投放流动性。"
  },
  {
    "id": 18,
    "chapterId": 5,
    "recitationQuestionId": 61,
    "stem": "下列不属于中国外汇储备三大来源的是（ ）。",
    "options": {
      "A": "国际收支顺差",
      "B": "有管理的浮动汇率制度下的外汇市场干预",
      "C": "热钱（短期资本）流入",
      "D": "商业银行向居民发放外汇消费贷款"
    },
    "correctKey": "D",
    "points": 1,
    "rationale": "全书速记第61题指出，中国外汇储备的三大来源为国际收支顺差、制度因素（1994年以来实施有管理的浮动汇率制度）以及热钱流入。"
  },
  {
    "id": 19,
    "chapterId": 6,
    "recitationQuestionId": 66,
    "stem": "能够连续（实时）进行资金转账指令处理和最终结算的全额支付系统简称（ ）。",
    "options": {
      "A": "DNS",
      "B": "RTGS",
      "C": "HVPS",
      "D": "CNAPS"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第66题指出，实时全额支付系统（RTGS）可以连续（实时）进行资金转账指令处理和最终结算。"
  },
  {
    "id": 20,
    "chapterId": 6,
    "recitationQuestionId": 68,
    "stem": "在支付系统面临的风险中，因无法可依或法律对支付参与者权利义务界定不清（如“零点规则”、轧差合法性争议）导致的风险是（ ）。",
    "options": {
      "A": "信用风险",
      "B": "流动性风险",
      "C": "法律风险",
      "D": "操作风险"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第68题指出，法律风险主要来源有结算终结性、破产法中的“零点规则”、轧差的合法性、抵押物利益和回购协议争议等。"
  },
  {
    "id": 21,
    "chapterId": 6,
    "recitationQuestionId": 70,
    "stem": "在中国人民银行运营的支付系统体系中，主要处理5万元及以下的网上支付、移动支付等新兴电子支付业务的是（ ）。",
    "options": {
      "A": "大额实时支付系统",
      "B": "小额批量支付系统",
      "C": "境内外币支付系统",
      "D": "网上支付跨行清算系统"
    },
    "correctKey": "D",
    "points": 1,
    "rationale": "全书速记第70题指出，网上支付跨行清算系统主要处理5万元及以下的网上支付、移动支付等新兴电子支付业务。"
  },
  {
    "id": 22,
    "chapterId": 7,
    "recitationQuestionId": 74,
    "stem": "中央银行实施货币政策的标准传导流程是（ ）。",
    "options": {
      "A": "最终目标 → 中介指标 → 政策工具",
      "B": "政策工具 → 中介指标 → 最终目标",
      "C": "中介指标 → 操作指标 → 政策工具",
      "D": "政策工具 → 最终目标 → 操作指标"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第74题指出，货币政策的实施流程为“政策工具 → 中介指标 → 最终目标”。"
  },
  {
    "id": 23,
    "chapterId": 7,
    "recitationQuestionId": 85,
    "stem": "在以下哪种宏观经济失衡组合下，使用货币政策同时调节稳定币值与国际收支平衡会发生冲突（ ）。",
    "options": {
      "A": "国际收支逆差与通货膨胀并存",
      "B": "国际收支顺差与通货紧缩并存",
      "C": "国际收支逆差与通货紧缩并存",
      "D": "国际收支平衡与物价稳定并存"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第85题指出，国际收支逆差与通货紧缩并存时，采取扩张型货币政策促使经济复苏和物价回升会增加进口、刺激资本流出，从而使国际收支逆差更加严重。"
  },
  {
    "id": 24,
    "chapterId": 7,
    "recitationQuestionId": 91,
    "stem": "货币供给量和利率不能同时作为货币政策中介指标的原因在于（ ）。",
    "options": {
      "A": "两者都在中央银行资产负债表外",
      "B": "盯住货币供给总量将导致利率波动，盯住利率目标将导致货币供给总量波动",
      "C": "利率的变动完全不受公开市场业务影响",
      "D": "货币供给量的变动只取决于财政赤字"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第91题指出，货币供给量和利率之间不具有严格的一一对应关系，盯住货币供给总量将导致利率波动，盯住利率目标将导致货币供给总量波动。"
  },
  {
    "id": 25,
    "chapterId": 7,
    "recitationQuestionId": 94,
    "stem": "1979年10月至1982年10月期间，美联储在货币政策操作中主要使用的准备金计量口径是（ ）。",
    "options": {
      "A": "借入储备",
      "B": "非借入储备",
      "C": "法定准备存款",
      "D": "超额准备存款"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第94题指出，1979年10月至1982年10月美联储主要使用非借入储备，此后改为借入储备。"
  },
  {
    "id": 26,
    "chapterId": 8,
    "recitationQuestionId": 101,
    "stem": "下列关于再贴现政策局限性的表述，正确的是（ ）。",
    "options": {
      "A": "控制货币供给量的主动权完全在中央银行手中",
      "B": "央行可以直接强迫商业银行向贴现窗口借款",
      "C": "告示效应是相对的，有时不能准确反映央行的政策意向",
      "D": "再贴现率可以每天频繁调整，灵活性极强"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第101题指出，再贴现政策的局限性包括：告示效应是相对的、市场利率与再贴现率利差随市场利率波动、控制货币供给量的主动权并不完全在中央银行。"
  },
  {
    "id": 27,
    "chapterId": 8,
    "recitationQuestionId": 103,
    "stem": "中央银行开展公开市场操作时，预测并抵消公众持有通货数量改变等非央行直接控制因素对银行储备的影响，这属于（ ）。",
    "options": {
      "A": "主动性目标",
      "B": "保卫性目标",
      "C": "选择性目标",
      "D": "惩罚性目标"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第103题指出，公开市场操作的两大政策目的为维持既定的货币政策（保卫性目标）和实现货币政策的转变（主动性目标）。"
  },
  {
    "id": 28,
    "chapterId": 8,
    "recitationQuestionId": 106,
    "stem": "下列货币政策工具中，不属于选择性（结构性）货币政策工具的是（ ）。",
    "options": {
      "A": "消费者信用控制",
      "B": "证券市场信用控制",
      "C": "不动产信用控制",
      "D": "法定存款准备金政策"
    },
    "correctKey": "D",
    "points": 1,
    "rationale": "全书速记第106题指出，选择性货币政策工具包括消费者信用控制、证券市场信用控制、不动产信用控制和优惠利率；法定存款准备金政策属于一般性货币政策工具。"
  },
  {
    "id": 29,
    "chapterId": 8,
    "recitationQuestionId": 110,
    "stem": "中国人民银行基于传统央行票据工具创设、通过央行票据与银行永续债交换以支持银行永续债流动性的工具是（ ）。",
    "options": {
      "A": "SLO",
      "B": "CBS",
      "C": "SLF",
      "D": "PSL"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第110题指出，央行票据互换（CBS）通过央行票据与银行永续债之间交换实现对银行永续债流动性的支持。"
  },
  {
    "id": 30,
    "chapterId": 9,
    "recitationQuestionId": 114,
    "stem": "在后凯恩斯学派的传导机制理论中，托宾的 q 理论定义 q 等于（ ）。",
    "options": {
      "A": "企业厂商的真实资本的市场价值 / 资本的重置成本",
      "B": "资本的重置成本 / 企业厂商的真实资本的市场价值",
      "C": "流通中现金 / 商业银行存款总额",
      "D": "名义利率 / 预期通货膨胀率"
    },
    "correctKey": "A",
    "points": 1,
    "rationale": "全书速记第114题指出，托宾定义 q = 企业厂商的真实资本的市场价值 / 资本的重置成本，传导机制为 MS↑ → Ps↑ → q↑ → I↑ → Y↑。"
  },
  {
    "id": 31,
    "chapterId": 9,
    "recitationQuestionId": 115,
    "stem": "以弗里德曼为首的货币学派认为，决定货币需求的主要因素是（ ）。",
    "options": {
      "A": "市场名义利率",
      "B": "持久性收入",
      "C": "股票价格指数",
      "D": "银行超额储备"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第115题指出，货币学派认为持久性收入是决定货币需求的主要因素，货币需求函数稳定从而对利率变动不敏感。"
  },
  {
    "id": 32,
    "chapterId": 9,
    "recitationQuestionId": 120,
    "stem": "弗里德曼的实证研究表明，从货币增长率变化到名义收入变化一般需要（ ）的时间，而货币政策对GDP影响的最高点一般要经过1年至2年的滞后。",
    "options": {
      "A": "1～3个月",
      "B": "6～9个月",
      "C": "2～3年",
      "D": "3～5年"
    },
    "correctKey": "B",
    "points": 1,
    "rationale": "全书速记第120题指出，弗里德曼的研究认为，从货币增长率变化到名义收入变化需要6～9个月的时间。"
  },
  {
    "id": 33,
    "chapterId": 9,
    "recitationQuestionId": 122,
    "stem": "在货币政策与财政政策的配合模式中，既能使政策效应比较稳定又不带有很大惯性的是（ ）。",
    "options": {
      "A": "“双紧”政策",
      "B": "“双松”政策",
      "C": "“一松一紧”配合（紧财政、松信贷或松财政、紧信贷）",
      "D": "完全放弃财政政策"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第122题指出，“一松一紧”配合会产生相互抗衡的摩擦力，作用力度较弱，但政策效应比较稳定且不带有很大惯性。"
  },
  {
    "id": 34,
    "chapterId": 10,
    "recitationQuestionId": 128,
    "stem": "在四代货币危机理论中，认为国内扩张性货币政策与维持固定汇率之间存在矛盾（财政赤字论）的代表学者是（ ）。",
    "options": {
      "A": "保罗·克鲁格曼（第一代）",
      "B": "奥布斯特费尔德（第二代）",
      "C": "麦金农和克鲁格曼（第三代）",
      "D": "克鲁格曼和阿吉翁（第四代）"
    },
    "correctKey": "A",
    "points": 1,
    "rationale": "全书速记第128题指出，第一代货币危机理论（财政赤字论，保罗·克鲁格曼）认为国内扩张性货币政策与维持固定汇率之间存在矛盾。"
  },
  {
    "id": 35,
    "chapterId": 10,
    "recitationQuestionId": 129,
    "stem": "提出“银行挤兑论（D-D模型）”，认为银行体系脆弱性源于存款者流动性要求不确定性与资产负债流动性不匹配的学者是（ ）。",
    "options": {
      "A": "弗里德曼",
      "B": "海曼·明斯基",
      "C": "戴蒙德和迪布维格",
      "D": "欧文·费雪"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第129题指出，戴蒙德和迪布维格（1983年，D-D模型）提出了银行挤兑论。"
  },
  {
    "id": 36,
    "chapterId": 10,
    "recitationQuestionId": 136,
    "stem": "在金融稳定评估指标体系中，金融机构内部定量指标包括资本充足性、资产负债、资产安全性、盈利性及可持续发展能力五大类共（ ）个指标。",
    "options": {
      "A": "14",
      "B": "26",
      "C": "27",
      "D": "40"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第136题指出，金融机构内部定量指标包括五大类27个指标，定性指标包括内部管理能力中的4个指标。"
  },
  {
    "id": 37,
    "chapterId": 11,
    "recitationQuestionId": 148,
    "stem": "对同时从事银行、证券、互助基金、保险等业务的金融持股公司，指定美联储为综合监管人并由各行业主要功能监管人分业监督的模式称为（ ）。",
    "options": {
      "A": "统一监管型",
      "B": "多头监管型",
      "C": "“双峰”监管型",
      "D": "“伞形”功能监管型"
    },
    "correctKey": "D",
    "points": 1,
    "rationale": "全书速记第148题指出，“伞形”功能监管型指定美联储为金融持股公司监管人负责综合监管，同时接受不同行业主要功能监管人的监督。"
  },
  {
    "id": 38,
    "chapterId": 11,
    "recitationQuestionId": 150,
    "stem": "2023年3月，我国在银保监会基础上组建的统一监管除证券业之外金融业的机构是（ ）。",
    "options": {
      "A": "国务院金融稳定发展委员会",
      "B": "中国银行保险监督管理委员会",
      "C": "国家金融监督管理总局",
      "D": "中国证券监督管理委员会"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第150与151题指出，2023年3月决定在银保监会基础上组建国家金融监督管理总局，依法对除证券业之外的金融业实行统一监督管理。"
  },
  {
    "id": 39,
    "chapterId": 11,
    "recitationQuestionId": 155,
    "stem": "下列工具中，属于“空间维度”下宏观审慎金融监管政策工具的是（ ）。",
    "options": {
      "A": "流动性覆盖率",
      "B": "设定拨备标准",
      "C": "逆周期的抵质押品价值比率标准",
      "D": "衍生品交易的集中清算"
    },
    "correctKey": "D",
    "points": 1,
    "rationale": "全书速记第155与156题指出，衍生品交易的集中清算属于空间维度下的宏观审慎政策工具，A、B、C均属于时间维度下的政策工具。"
  },
  {
    "id": 40,
    "chapterId": 11,
    "recitationQuestionId": 161,
    "stem": "在证券交易所监管制度中，以英国为代表、传统上以自律为原则且无须政府批准的监管模式是（ ）。",
    "options": {
      "A": "注册制",
      "B": "核准制",
      "C": "认可制",
      "D": "审批制"
    },
    "correctKey": "C",
    "points": 1,
    "rationale": "全书速记第161题指出，对证券交易所的监管包括以美国为代表的注册制、以日本为代表的核准制以及以英国为代表的认可制。"
  }
];

export const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    "id": 1,
    "chapterId": 1,
    "recitationQuestionId": 5,
    "isCorrect": false,
    "points": 1,
    "statement": "复合式中央银行是指一个国家（或地区）没有通常意义上的中央银行，而由商业银行或类似机构代行部分中央银行职能。",
    "errorCorrection": "错误。全书速记第5题指出，题干描述的是“准中央银行”；复合式中央银行是指一个国家内设立一个一级中央银行机构，并在地方设立若干个二级中央银行机构，共同组成统一的中央银行体系。"
  },
  {
    "id": 2,
    "chapterId": 1,
    "recitationQuestionId": 7,
    "isCorrect": true,
    "points": 1,
    "statement": "在中央银行的权力结构中，日本、德国、法国、澳大利亚、巴西、韩国等国的最高权力机构属于决策权、执行权和监督权分属不同机构的模式。",
    "errorCorrection": "正确。全书速记第7题指出，日本、德国、法国、澳大利亚、巴西、韩国等采用决策权、执行权和监督权分属不同机构的模式。"
  },
  {
    "id": 3,
    "chapterId": 1,
    "recitationQuestionId": 9,
    "isCorrect": true,
    "points": 1,
    "statement": "中央银行分支机构的设置一般遵循按经济区域设置、按行政区划设置以及按经济区域与行政区划相结合设置三种原则。",
    "errorCorrection": "正确。全书速记第9题明确列出了中央银行分支机构设置的这三种原则。"
  },
  {
    "id": 4,
    "chapterId": 2,
    "recitationQuestionId": 19,
    "isCorrect": true,
    "points": 1,
    "statement": "中央银行保持相对独立性应遵循与经济发展水平和经济体制相适应、服从宏观经济整体利益以及明确职能职责权限范围并立法保障等原则。",
    "errorCorrection": "正确。全书速记第19题指出，中央银行保持相对独立性应遵循国家与宏观经济利益原则以及法律规范原则等。"
  },
  {
    "id": 5,
    "chapterId": 2,
    "recitationQuestionId": 21,
    "isCorrect": false,
    "points": 1,
    "statement": "中央银行作为“政府的银行”，应当在财政出现赤字时无条件向财政部门提供直接透支融通。",
    "errorCorrection": "错误。全书速记第21与26题指出，中央银行与财政部门分工合作且相互制约，一般不得向财政透支，不得直接认购、包销国债和其他政府债券。"
  },
  {
    "id": 6,
    "chapterId": 3,
    "recitationQuestionId": 26,
    "isCorrect": false,
    "points": 1,
    "statement": "为了支持实体经济发展，中央银行可以直接从事商业票据的承兑和贴现业务，并直接向大型企业提供担保。",
    "errorCorrection": "错误。全书速记第26题指出，中央银行法定业务限制明确规定不得向任何个人、企业或单位提供担保或直接发放贷款，不得直接从事商业票据的承兑、贴现业务。"
  },
  {
    "id": 7,
    "chapterId": 3,
    "recitationQuestionId": 27,
    "isCorrect": true,
    "points": 1,
    "statement": "中央银行开展业务活动应保持业务的公开性，使社会公众及时清晰了解货币政策意图并形成合理预期。",
    "errorCorrection": "正确。全书速记第27题指出，保持业务的公开性是中央银行业务活动的重要原则之一。"
  },
  {
    "id": 8,
    "chapterId": 4,
    "recitationQuestionId": 31,
    "isCorrect": true,
    "points": 1,
    "statement": "法定存款准备金的使用主动权在中央银行手中，商业银行无权动用；而超额存款准备金商业银行可以自由使用。",
    "errorCorrection": "正确。全书速记第31题明确区分了法定存款准备金与超额存款准备金在使用主动权上的区别。"
  },
  {
    "id": 9,
    "chapterId": 4,
    "recitationQuestionId": 37,
    "isCorrect": false,
    "points": 1,
    "statement": "我国现行的法定存款准备金制度和西方国家一样，对活期存款、定期存款和储蓄存款分别按不同流动性设置不同的法定准备金率。",
    "errorCorrection": "错误。全书速记第37题指出，我国未按存款类别计提准备金，差别存款准备金率只与资本充足率、资产质量状况等指标挂钩。"
  },
  {
    "id": 10,
    "chapterId": 4,
    "recitationQuestionId": 47,
    "isCorrect": false,
    "points": 1,
    "statement": "中国人民银行发行库保管的发行基金已经进入流通领域，具备现实的货币流通手段和支付手段职能。",
    "errorCorrection": "错误。全书速记第47题指出，发行基金是尚未发行的票币，不具备货币职能；只有调入商业银行进入流通后才转化为现实的流通货币（现金）。"
  },
  {
    "id": 11,
    "chapterId": 4,
    "recitationQuestionId": 51,
    "isCorrect": true,
    "points": 1,
    "statement": "中央银行对外负债的主要目的是平衡国际收支、维持本币汇率的既定水平以及应对货币危机或金融危机。",
    "errorCorrection": "正确。全书速记第51题明确指出了中央银行对外负债的这三个目的。"
  },
  {
    "id": 12,
    "chapterId": 5,
    "recitationQuestionId": 53,
    "isCorrect": false,
    "points": 1,
    "statement": "再贴现利息的计算不仅取决于票据面额、日再贴现率和贴现日数，还必须扣除商业票据原有的票面利息。",
    "errorCorrection": "错误。全书速记第53题指出，再贴现利息=票据面额×日再贴现率×贴现日数，仅与票据面额和再贴现率有关，与票据原有利息无关。"
  },
  {
    "id": 13,
    "chapterId": 5,
    "recitationQuestionId": 55,
    "isCorrect": true,
    "points": 1,
    "statement": "中央银行对商业银行等存款货币银行的贷款主要是短期的流动性贷款或季节性贷款，不能发放长期贷款。",
    "errorCorrection": "正确。全书速记第55题明确指出央行对商业银行主要提供短期流动性贷款或季节性贷款。"
  },
  {
    "id": 14,
    "chapterId": 5,
    "recitationQuestionId": 58,
    "isCorrect": true,
    "points": 1,
    "statement": "与中央银行贷款业务相比，证券买卖业务具有更强的资金流动性，但对有价证券市场的发达程度要求更高。",
    "errorCorrection": "正确。全书速记第58题指出，证券买卖业务流动性更强，且需要以较为发达的有价证券市场为前提。"
  },
  {
    "id": 15,
    "chapterId": 6,
    "recitationQuestionId": 64,
    "isCorrect": false,
    "points": 1,
    "statement": "净额清算系统逐笔实时全额结算，能够完全消除参与者之间的日间信用风险与流动性风险。",
    "errorCorrection": "错误。全书速记第64题指出，逐笔实时全额结算的是实时全额支付系统（RTGS）；净额清算系统存在日间信贷产生的信用风险、流动性风险隐患及法律风险。"
  },
  {
    "id": 16,
    "chapterId": 6,
    "recitationQuestionId": 70,
    "isCorrect": true,
    "points": 1,
    "statement": "中国现代化支付系统（CNAPS）中的小额批量支付系统实行7×24小时不间断运行，并通过净借记限额管理有效防范信用风险。",
    "errorCorrection": "正确。全书速记第70题明确记录了小额批量支付系统的这一运行特征。"
  },
  {
    "id": 17,
    "chapterId": 7,
    "recitationQuestionId": 79,
    "isCorrect": true,
    "points": 1,
    "statement": "量化稳定币值目标一般采用GNP平减指数、消费物价指数和批发物价指数三类指标，其中消费物价指数最为常见。",
    "errorCorrection": "正确。全书速记第79题明确列出了这三类稳定币值量化指标。"
  },
  {
    "id": 18,
    "chapterId": 7,
    "recitationQuestionId": 81,
    "isCorrect": false,
    "points": 1,
    "statement": "货币政策中的“充分就业”目标意味着要把全社会的失业率彻底降低到零失业率水平。",
    "errorCorrection": "错误。全书速记第81题指出，充分就业并不是追求零失业率，而是把失业降低到自然失业率水平。"
  },
  {
    "id": 19,
    "chapterId": 7,
    "recitationQuestionId": 90,
    "isCorrect": true,
    "points": 1,
    "statement": "利率作为货币政策中介指标的主要缺点在于：中央银行能控制的是名义利率，而对经济运行产生实质影响的是预期实际利率。",
    "errorCorrection": "正确。全书速记第90题指出，预期实际利率等于名义利率减去通货膨胀预期，很难准确计量与控制。"
  },
  {
    "id": 20,
    "chapterId": 8,
    "recitationQuestionId": 104,
    "isCorrect": true,
    "points": 1,
    "statement": "公开市场业务具有主动权完全在中央银行、灵活精巧、伸缩性与连续性强、极易逆转和可迅速操作五大优点。",
    "errorCorrection": "正确。全书速记第104题明确列出了公开市场业务的这五大优点。"
  },
  {
    "id": 21,
    "chapterId": 8,
    "recitationQuestionId": 105,
    "isCorrect": false,
    "points": 1,
    "statement": "与再贴现政策相比，公开市场业务操作具有极强的政策意图告示作用，市场极易直接解读。",
    "errorCorrection": "错误。全书速记第105题指出，公开市场操作较为细微、技术性较强，政策意图的告示作用较弱，不如再贴现政策明显。"
  },
  {
    "id": 22,
    "chapterId": 8,
    "recitationQuestionId": 109,
    "isCorrect": true,
    "points": 1,
    "statement": "近年来我国法定存款准备金制度改革由“普遍降准”逐步调整为“定向降准”，以引导信贷资源投向特定领域。",
    "errorCorrection": "正确。全书速记第109题指出，2014年开始我国更多采用“定向调节”引导信贷资源投向。"
  },
  {
    "id": 23,
    "chapterId": 9,
    "recitationQuestionId": 114,
    "isCorrect": false,
    "points": 1,
    "statement": "米什金的资产价格传导机制强调货币供应量增加使股票价格上升，从而直接提高企业投资水平。",
    "errorCorrection": "错误。全书速记第114题指出，米什金的传导机制（MS↑ → Ps↑ → V↑ → D↓ → CA↑ → Y↑）强调股价上升提高消费者金融资产价值、降低财务困难可能性，从而增加耐用消费品支出。"
  },
  {
    "id": 24,
    "chapterId": 9,
    "recitationQuestionId": 119,
    "isCorrect": false,
    "points": 1,
    "statement": "货币政策从调整政策工具到对中介目标产生作用的时间属于内部时滞中的决策时滞。",
    "errorCorrection": "错误。全书速记第119题指出，从调整货币政策工具到对中介目标产生作用的时间属于外部时滞中的“操作时滞”。"
  },
  {
    "id": 25,
    "chapterId": 9,
    "recitationQuestionId": 124,
    "isCorrect": true,
    "points": 1,
    "statement": "1976年4月形成的牙买加体系实现了黄金非货币化、国际收支调节方式多样化、汇率安排多样化及国际储备多元化。",
    "errorCorrection": "正确。全书速记第124题明确概括了牙买加体系的这些特征。"
  },
  {
    "id": 26,
    "chapterId": 10,
    "recitationQuestionId": 128,
    "isCorrect": true,
    "points": 1,
    "statement": "第三代货币危机理论认为东南亚经常账户逆转及危机深化源于货币贬值、高利率及销售下降使企业财务状况恶化。",
    "errorCorrection": "正确。全书速记第128题明确指出了第三代货币危机理论（麦金农和克鲁格曼）的这一核心观点。"
  },
  {
    "id": 27,
    "chapterId": 10,
    "recitationQuestionId": 138,
    "isCorrect": true,
    "points": 1,
    "statement": "金融稳定是金融安全的基础，金融安全是经济安全的核心，经济安全是国家安全的必要组成部分。",
    "errorCorrection": "正确。全书速记第138题明确界定了这四者之间的层次关系。"
  },
  {
    "id": 28,
    "chapterId": 11,
    "recitationQuestionId": 142,
    "isCorrect": false,
    "points": 1,
    "statement": "捕获理论认为政府管制者能够完全独立于被管制集团，始终站在社会公众利益一边作出最优监管决策。",
    "errorCorrection": "错误。全书速记第142题指出，捕获理论认为政府管制者因资源和专业技术有限而俯首于被管制集团的专家报告、证据及压力，使其特殊利益得到实现和巩固。"
  },
  {
    "id": 29,
    "chapterId": 11,
    "recitationQuestionId": 154,
    "isCorrect": true,
    "points": 1,
    "statement": "宏观审慎监管侧重金融机构整体行为及相互影响力，自上而下制定政策；微观审慎监管侧重个体行为和风险偏好，自下而上制定政策。",
    "errorCorrection": "正确。全书速记第154题明确对比了宏观审慎监管与微观审慎监管在内容上的区别。"
  },
  {
    "id": 30,
    "chapterId": 11,
    "recitationQuestionId": 157,
    "isCorrect": true,
    "points": 1,
    "statement": "中央银行对危机银行的政策选择顺序是先拯救，无力拯救再采取退出市场安排，拯救方法包括流量法和存量法。",
    "errorCorrection": "正确。全书速记第157题明确指出了危机银行处置的政策顺序与流量法、存量法两种拯救方法。"
  }
];

export const shortAnswerQuestions: ShortAnswerQuestion[] = [
  {
    "id": 1,
    "chapterId": 1,
    "totalPoints": 6,
    "question": "简述中央银行产生的客观必然性。",
    "rubricPoints": [
      {
        "point": "政府对货币财富和银行控制的需要：弥补财政亏空，建立受其直接控制的银行",
        "score": 1.2
      },
      {
        "point": "统一银行券发行的需要：克服分散发券导致的不能兑现挤兑与流通受限",
        "score": 1.2
      },
      {
        "point": "信用集中的需要：缓解商业银行资金周转不灵与兑现困难",
        "score": 1.2
      },
      {
        "point": "建立票据中心的需要：设立统一票据清算机构协调票据交换与债权债务关系",
        "score": 1.2
      },
      {
        "point": "统一金融管理的需要：制定金融政策和管理条例统筹监督全国货币金融活动",
        "score": 1.2
      }
    ],
    "sampleAnswer": "中央银行的产生是商品经济和银行业发展的客观必然要求，主要体现在五个方面：1. 政府对货币财富和银行控制的需要（弥补财政亏空）；2. 统一银行券发行的需要（避免分散发券引发挤兑与流通受限）；3. 信用集中的需要（避免商业银行降低支付准备金而陷入周转不灵与兑现困难）；4. 建立票据中心的需要（由统一票据清算机构处理票据交换与债权债务关系）；5. 统一金融管理的需要（通过专门机构制定金融政策和管理条例统筹监督货币金融活动）。"
  },
  {
    "id": 2,
    "chapterId": 1,
    "totalPoints": 6,
    "question": "简述中央银行作为“银行的银行”职能的具体表现。",
    "rubricPoints": [
      {
        "point": "集中保管存款准备金：成为商业银行的现金准备中心与存款准备金保管者",
        "score": 2
      },
      {
        "point": "充当最后贷款人：在商业银行流动性不足时通过再贴现和贷款提供资金支持",
        "score": 2
      },
      {
        "point": "组织全国银行间的清算：利用各银行在央行的存款准备金账户划拨资金实现清算",
        "score": 2
      }
    ],
    "sampleAnswer": "“银行的银行”职能体现在三方面：1. 集中保管商业银行的存款准备金，成为商业银行和其他存款机构的现金准备中心；2. 充当最后贷款人，在商业银行等金融机构出现流动性不足和兑现困难时提供再贴现和再贷款资金支持；3. 组织全国银行间的清算，使各银行间的债权债务通过央行存款准备金账户划拨实现高效清算。"
  },
  {
    "id": 3,
    "chapterId": 2,
    "totalPoints": 6,
    "question": "简述中央银行对政府保持一定独立性的原因。",
    "rubricPoints": [
      {
        "point": "中央银行作为特殊金融机构，其业务运行和调控功能具有高度专业性",
        "score": 1.2
      },
      {
        "point": "中央银行与政府在性质、目标和利益取向上存在一定差异",
        "score": 1.2
      },
      {
        "point": "政局更替（政治周期与经济周期矛盾）容易影响货币政策的连续性与稳定性",
        "score": 1.2
      },
      {
        "point": "防止政府直接利用货币发行弥补财政赤字而引发通货膨胀",
        "score": 1.2
      },
      {
        "point": "独立性有利于增强货币政策公信力，稳定社会公众预期",
        "score": 1.2
      }
    ],
    "sampleAnswer": "中央银行对政府保持一定独立性的原因包括：1. 货币政策制定与金融调控具有高度专业性；2. 中央银行侧重币值稳定与长期宏观均衡，与政府短期目标存在差异；3. 避免政局更替与政治周期干扰货币政策连续性；4. 防止财政赤字货币化引发恶性通货膨胀；5. 提升央行公信力与政策透明度，稳定市场预期。"
  },
  {
    "id": 4,
    "chapterId": 3,
    "totalPoints": 6,
    "question": "简述中央银行业务活动应遵循的基本原则。",
    "rubricPoints": [
      {
        "point": "服从履行职责的需要与不以盈利为目标",
        "score": 2
      },
      {
        "point": "不经营一般商业银行业务并保持资产的流动性",
        "score": 2
      },
      {
        "point": "保持业务的公开性、主动性与一定独立性，并遵循相应法律规范",
        "score": 2
      }
    ],
    "sampleAnswer": "中央银行业务活动遵循七大基本原则：1. 服从履行职责的需要；2. 不以盈利为目标；3. 不经营一般商业银行业务；4. 保持资产的流动性；5. 保持业务的公开性；6. 保持业务的主动性和一定的独立性；7. 业务活动须遵循相应的法律规范。"
  },
  {
    "id": 5,
    "chapterId": 4,
    "totalPoints": 6,
    "question": "简述中央银行存款业务与一般商业银行存款业务的区别（特点）。",
    "rubricPoints": [
      {
        "point": "存款的强制性：遵循金融法规，存款数量和利率由央行确定（商业银行为存款自愿、取款自由）",
        "score": 1.5
      },
      {
        "point": "存款用途及目标的特殊性：出于宏观调控和监管需要（商业银行为扩大资金来源争取盈利）",
        "score": 1.5
      },
      {
        "point": "存款人的特定性：收存商业银行、非银行金融机构、政府及特定部门存款（不面向普通居民和企业）",
        "score": 1.5
      },
      {
        "point": "与存款当事人关系的特殊性：除经济关系外还有管理者与被管理者的关系",
        "score": 1.5
      }
    ],
    "sampleAnswer": "中央银行存款业务具有四个显著特点：1. 存款具有强制性，存款数量和利率由央行依法确定；2. 存款用途及目标在于宏观调控和履行监管职能，而非追逐利润；3. 存款人特定，主要为商业银行、非银行金融机构、政府部门及特定部门；4. 与存款当事人之间不仅存在经济关系，还存在管理者与被管理者的关系。"
  },
  {
    "id": 6,
    "chapterId": 4,
    "totalPoints": 6,
    "question": "简述中央银行组织货币发行业务应遵循的三大原则。",
    "rubricPoints": [
      {
        "point": "垄断发行原则：发行权高度集中于中央银行，统一国内通货形式，避免多头发行混乱",
        "score": 2
      },
      {
        "point": "信用保证原则：货币投放要有一定黄金或有价证券作保证，避免财政发行",
        "score": 2
      },
      {
        "point": "弹性原则：货币发行需具备伸缩性和灵活性，适应经济发展需要，防止通胀或通缩",
        "score": 2
      }
    ],
    "sampleAnswer": "中央银行组织货币发行业务遵循三大原则：1. 垄断发行原则，将货币发行权高度集中于央行，避免多头发行混乱并增强宏观调控能力；2. 信用保证原则，通过建立发行准备制度以黄金或有价证券作保证，防止财政发行；3. 弹性原则，使货币发行随经济状况变化保持伸缩性，既满足经济增长需求又防止通货膨胀或通货紧缩。"
  },
  {
    "id": 7,
    "chapterId": 5,
    "totalPoints": 6,
    "question": "简述再贴现和贷款业务对中央银行的重要性。",
    "rubricPoints": [
      {
        "point": "履行“最后贷款人”职能的重要手段：在金融机构周转不灵或兑现困难时提供资金融通支持",
        "score": 2
      },
      {
        "point": "提供基础货币的重要渠道：是商业银行创造存款货币的源头",
        "score": 2
      },
      {
        "point": "再贴现利率是调控货币供应量的重要工具：通过改变资金价格调节信贷规模与市场利率",
        "score": 2
      }
    ],
    "sampleAnswer": "再贴现和贷款业务的重要性体现在三点：1. 是中央银行履行“最后贷款人”职能的重要手段，可在银行出现流动性困难时提供最后解决手段；2. 是中央银行提供基础货币的重要渠道，掌握着商业银行创造存款货币的源头；3. 再贴现利率是调控货币供应量的重要工具，可通过影响商业银行融资成本来调节信贷规模与社会货币量。"
  },
  {
    "id": 8,
    "chapterId": 5,
    "totalPoints": 8,
    "question": "试比较中央银行证券买卖业务与贷款业务的相同点与不同点。",
    "rubricPoints": [
      {
        "point": "相同点（3分）：融资效果相同（买入扩大资产/负债等同放贷，卖出等同收回）；对货币供应量影响相同（均通过货币乘数引起多倍扩张或收缩）；均是央行可直接控制的货币调控工具",
        "score": 3
      },
      {
        "point": "不同点——流动性与收益（2.5分）：证券买卖可随时进行且可逆向修正，流动性强于有期限约定的贷款；贷款获利息收入，未到期证券买卖可获价差收益",
        "score": 2.5
      },
      {
        "point": "不同点——依据与环境要求（2.5分）：证券买卖以证券质量为依据，需发达的有价证券市场为前提；贷款以商业银行信用或抵押物为依据，对金融环境要求较低",
        "score": 2.5
      }
    ],
    "sampleAnswer": "（一）相同点：1. 融资效果相同，买入证券相当于发放贷款，卖出证券相当于收回贷款；2. 对货币供应量影响相同，均通过货币乘数引起多倍扩张或收缩；3. 都是中央银行可直接控制的货币政策调控工具。\n（二）不同点：1. 资金流动性不同，证券买卖可随时逆向操作，流动性强于贷款；2. 收益不同，贷款获取利息收入，未到期证券买卖获取价差收益；3. 依据不同，证券买卖依据证券质量，贷款依据银行信用或抵押物质量；4. 对经济金融环境要求不同，证券买卖需要较为发达的有价证券市场，贷款业务对环境要求较低。"
  },
  {
    "id": 9,
    "chapterId": 5,
    "totalPoints": 6,
    "question": "简述中央银行保管和经营黄金外汇储备的目的和意义。",
    "rubricPoints": [
      {
        "point": "最初目的与储备职能：应付银行券兑现，演变为国际支付手段准备金及对外经济实力象征",
        "score": 1.5
      },
      {
        "point": "稳定币值：国内商品供应不足时进口商品或出售黄金外汇回笼货币、平抑物价",
        "score": 1.5
      },
      {
        "point": "稳定汇率：在浮动汇率制下通过买卖黄金外汇将汇率维持在合理水平",
        "score": 1.5
      },
      {
        "point": "调节国际收支：逆差时动用储备补足外汇不足，顺差充足时清偿外债",
        "score": 1.5
      }
    ],
    "sampleAnswer": "中央银行保管和经营黄金外汇储备的目的与意义包括：1. 充当国际支付手段的准备金与一国对外经济交往实力的象征；2. 稳定币值，必要时通过进口或抛售黄金外汇回笼货币以平抑物价；3. 稳定汇率，在浮动汇率制下买卖黄金外汇使本币汇率维持在合理水平；4. 调节国际收支，在逆差时弥补外汇缺口，顺差充足时清偿外债。"
  },
  {
    "id": 10,
    "chapterId": 6,
    "totalPoints": 6,
    "question": "简述中央银行支付清算业务的重要性。",
    "rubricPoints": [
      {
        "point": "保障经济和社会生活正常运转：使同城、异地及跨国债权债务通过央行最终清偿，提高资金转移效率",
        "score": 2
      },
      {
        "point": "对货币政策顺利实施具有重要影响：是有效开展公开市场操作的前提，增强货币市场流动性并减少在途资金",
        "score": 2
      },
      {
        "point": "与金融稳定密切相关：支付系统安全是金融安全的前提，防范连锁违约导致清算瘫痪",
        "score": 2
      }
    ],
    "sampleAnswer": "中央银行支付清算业务的重要性体现在三方面：1. 保障经济和社会生活正常运转，金融机构在央行开立准备金账户完成最终清偿，提升资金转移效率；2. 支撑货币政策顺利实施，为公开市场操作提供灵活高效的清算机制，增强货币市场流动性并减少在途资金；3. 维护金融稳定，防止单个机构违约通过支付清算网络引发连锁瘫痪。"
  },
  {
    "id": 11,
    "chapterId": 6,
    "totalPoints": 6,
    "question": "简述净额清算系统与全额清算系统的基本原理及各自优缺点。",
    "rubricPoints": [
      {
        "point": "净额清算系统原理及优缺点：在营业日终将收付转账总额相减得出净头寸划转；优点是批量处理大大减少支付绝对量，弊端是存在日间信贷的信用、流动性风险隐患及法律风险",
        "score": 3
      },
      {
        "point": "全额清算系统原理及优缺点：对每笔转账业务一一对应结算（含实时全额RTGS）；优点是减少信用与流动性风险、限制系统风险，弊端是对发起行清偿能力与日间流动性成本要求高",
        "score": 3
      }
    ],
    "sampleAnswer": "1. 净额清算系统在营业日结束时将收付转账总额轧差得出净结算头寸划转，优点是批量处理、大大减少必须支付的绝对量，弊端是净债权行向净债务行提供日间信贷产生信用与流动性风险隐患及轧差被作废的法律风险。\n2. 全额清算系统对每笔转账一一对应结算（含实时全额RTGS），优势是消除交易作废可能、显著减少信用和流动性风险并限制系统风险，弊端是对发起行清偿能力要求严格、参与者保持当日流动性的成本较高。"
  },
  {
    "id": 12,
    "chapterId": 7,
    "totalPoints": 8,
    "question": "试述货币供给量与利率不能同时作为货币政策中介指标的原因及选择原则。",
    "rubricPoints": [
      {
        "point": "不能同时作为中介指标的原因（4分）：二者不具有严格一一对应关系；盯住货币供给总量时货币需求曲线位移会导致利率剧烈波动；盯住利率目标时央行为维持利率必须在公开市场买卖债券，导致货币供给总量波动",
        "score": 4
      },
      {
        "point": "维度的比较（2分）：可测性上名义利率较快且准确但预期实际利率难计量；可控性上央行对货币总量有一定控制力但不能完全控制实际利率",
        "score": 2
      },
      {
        "point": "现实选择原则（2分）：以抑制通货膨胀为主要任务时常选货币供应量；以经济增长为主要目标时常选利率",
        "score": 2
      }
    ],
    "sampleAnswer": "1. 不能同时作为中介指标的原因：货币供给量与利率之间不存在严格的一一对应关系。当货币需求曲线发生意外位移时，若央行盯住货币供给总量目标，利率必将剧烈波动；若央行盯住利率目标，为维持利率水平必须在公开市场买卖债券，从而导致货币供给总量发生波动。\n2. 比较与选择：名义利率可测性较快且准确，但预期实际利率难以计量和控制；货币供给量需多次修正但与政策意图联系紧密。实践中，当以抑制通货膨胀为主要任务时，往往选择货币供应量为中介指标；当通胀不是主要矛盾、以经济增长为主要目标时，往往选择利率为中介指标。"
  },
  {
    "id": 13,
    "chapterId": 7,
    "totalPoints": 6,
    "question": "简述选择货币政策中介指标和操作指标的四大标准。",
    "rubricPoints": [
      {
        "point": "相关性：中介指标须与最终目标密切相关，操作指标须与中介指标密切相关",
        "score": 1.5
      },
      {
        "point": "可测性：央行能迅速获取准确数据，定义明确便于观察、分析与监测",
        "score": 1.5
      },
      {
        "point": "可控性：必须是央行能够应用货币政策工具对其进行有效控制的金融指标",
        "score": 1.5
      },
      {
        "point": "抗干扰性：能较准确反映货币政策效果，较少受外来因素干扰",
        "score": 1.5
      }
    ],
    "sampleAnswer": "选择货币政策中介指标和操作指标必须符合四大标准：1. 相关性，指标变动必须对最终目标或中介指标产生可预测的影响；2. 可测性，央行能迅速获取准确数据并比最终目标更快发出信号；3. 可控性，央行能够通过货币政策工具对其进行有效控制；4. 抗干扰性，能够准确反映货币政策效果并较少受外来因素干扰。"
  },
  {
    "id": 14,
    "chapterId": 8,
    "totalPoints": 8,
    "question": "试述公开市场业务的五大优点及两大局限性。",
    "rubricPoints": [
      {
        "point": "五大优点（5分）：主动权完全在中央银行；灵活精巧，避免猛烈冲击；具有较强的伸缩性与连续性；具有极强的可逆转性；可迅速地操作",
        "score": 5
      },
      {
        "point": "两大局限性（3分）：操作细微技术性强，政策意图的告示作用较弱；需要以较为发达的有价证券市场为前提",
        "score": 3
      }
    ],
    "sampleAnswer": "（一）五大优点：1. 操作规模完全受央行控制，主动权完全在中央银行；2. 灵活精巧，可用较小规模准确达到目标，避免猛烈冲击；3. 具有较强的伸缩性与连续性，适合日常性调节；4. 具有极强的可逆转性，发现偏差可立即逆向操作纠正；5. 可迅速执行指令，操作敏捷。\n（二）两大局限性：1. 公开市场操作细微且技术性强，不如再贴现政策那样具有明显的告示作用；2. 需要以较为发达的有价证券市场为前提，市场发育不足或交易工具太少会制约政策效果。"
  },
  {
    "id": 15,
    "chapterId": 8,
    "totalPoints": 6,
    "question": "简述中国人民银行创设的四类新型流动性借贷便利工具（SLF、MLF、PSL、TMLF）的主要功能。",
    "rubricPoints": [
      {
        "point": "常备借贷便利（SLF）：金融机构主动发起、“一对一”交易，满足政策性银行和全国性商行1、3个月大额流动性需求",
        "score": 1.5
      },
      {
        "point": "中期借贷便利（MLF）：2014年9月创设，3/6/12个月中短期抵押贷款，提供中期基础货币",
        "score": 1.5
      },
      {
        "point": "抵押补充贷款（PSL）：对政策性金融机构发放质押贷款，支持重点领域、薄弱环节和社会事业长期大额融资",
        "score": 1.5
      },
      {
        "point": "定向中期常备借贷便利（TMLF）：向符合要求金融机构提供长期稳定流动性支持，支持小微和民营企业融资，期限最长可达三年",
        "score": 1.5
      }
    ],
    "sampleAnswer": "1. 常备借贷便利（SLF）：由金融机构主动发起、“一对一”交易，满足政策性银行和全国性商业银行1个月和3个月的大额流动性需求；\n2. 中期借贷便利（MLF）：提供3个月、6个月和12个月中期基础货币，补充完善SLF期限结构；\n3. 抵押补充贷款（PSL）：对政策性金融机构发放质押贷款，支持国民经济重点领域、薄弱环节和社会事业长期大额融资；\n4. 定向中期常备借贷便利（TMLF）：向符合宏观审慎及支持中小民营企业融资要求的金融机构提供长期稳定流动性支持，续作后最长可达三年。"
  },
  {
    "id": 16,
    "chapterId": 9,
    "totalPoints": 8,
    "question": "试述货币政策传导机制的信用渠道论（银行贷款渠道与资产负债表渠道）及货币政策时滞构成。",
    "rubricPoints": [
      {
        "point": "信用渠道论（4分）：银行贷款渠道强调货币政策改变银行准备金头寸影响贷款供给与投资产出；资产负债表渠道分企业（改变净资产水平放大政策影响）与居民（流动性效应渠道减少耐用消费品支出）",
        "score": 4
      },
      {
        "point": "内部时滞（2分）：央行制定和操作货币政策所需时间，包括认识时滞与决策时滞",
        "score": 2
      },
      {
        "point": "外部时滞（2分）：从央行执行政策到对经济产生作用的时间，包括操作时滞与市场时滞",
        "score": 2
      }
    ],
    "sampleAnswer": "（一）信用渠道论（伯南克和格特勒）：1. 银行贷款渠道，货币政策改变商业银行在央行的准备金头寸，引起银行调整利率和资产负债表构成，进而影响投资与产出；2. 资产负债表渠道，包括企业资产负债表渠道（政策改变非货币资产价格和利率，直接改变企业净资产水平并放大政策效应）和居民资产负债表渠道（紧缩政策使银行信贷下降，迫使无其他融资渠道的消费者减少耐用消费品支出）。\n（二）货币政策时滞构成：1. 内部时滞，分为认识时滞和决策时滞；2. 外部时滞，分为操作时滞和市场时滞。"
  },
  {
    "id": 17,
    "chapterId": 9,
    "totalPoints": 6,
    "question": "简述国际货币政策协调的必要性、主要内容与作用。",
    "rubricPoints": [
      {
        "point": "必要性：经济全球化和国际金融化下，需要政府间协调机制以克服“囚徒困境”，解决国际因素对本国政策制定的困扰",
        "score": 2
      },
      {
        "point": "手段与内容：核心是汇率政策协调与利率政策协调（依据利率平价理论，两国利率相对变化影响汇率）",
        "score": 2
      },
      {
        "point": "作用：保持汇率稳定、促进国际贸易与资本流动、实现国际收支平衡，稳定国际金融市场并加强危机管理",
        "score": 2
      }
    ],
    "sampleAnswer": "1. 必要性：随着经济全球化和国际金融化发展，各国央行需采取政府间协调机制以克服国际经济竞争中的“囚徒困境”。\n2. 内容：主要包括汇率政策协调和利率政策协调。\n3. 作用：有助于保持汇率稳定、促进国际贸易与资本流动、实现国际收支平衡，同时稳定国际金融市场并加强金融危机管理。"
  },
  {
    "id": 18,
    "chapterId": 10,
    "totalPoints": 6,
    "question": "简述金融危机的四大类型及其三大特点。",
    "rubricPoints": [
      {
        "point": "四大类型（4分）：货币危机（国际收支危机）、银行业危机、外国债务危机（外债危机）、系统性金融危机（全面金融危机）",
        "score": 4
      },
      {
        "point": "三大特点（2分）：综合性（多领域危机同时爆发）、传染性（明显的多米诺骨牌效应）、破坏性（严重冲击金融体系与经济社会）",
        "score": 2
      }
    ],
    "sampleAnswer": "（一）IMF将金融危机分为四大类型：1. 货币危机（汇率受投机性袭击持续贬值或迫使当局消耗储备、大幅加息）；2. 银行业危机（银行不能按期偿付债务或迫使政府大规模援助，并可能波及全行业）；3. 外国债务危机（支付系统混乱导致不能按期偿付外债并被迫暂缓偿债）；4. 系统性金融危机（主要金融领域均出现严重混乱）。\n（二）金融危机具有三大特点：综合性、传染性（多米诺骨牌效应）和破坏性。"
  },
  {
    "id": 19,
    "chapterId": 11,
    "totalPoints": 6,
    "question": "简述金融监管的六大基本原则。",
    "rubricPoints": [
      {
        "point": "监管主体的独立性原则与依法监管原则",
        "score": 2
      },
      {
        "point": "适度竞争原则与自我约束原则",
        "score": 2
      },
      {
        "point": "安全、稳健与促进创新相结合原则以及提高监管效率原则",
        "score": 2
      }
    ],
    "sampleAnswer": "金融监管必须遵循六大基本原则：1. 监管主体的独立性原则（享有操作自主权和充分资源）；2. 适度竞争的原则（促进市场机制作用发挥）；3. 依法监管的原则（监管依法进行且所有被监管机构概莫能外）；4. 自我约束的原则；5. 安全、稳健与促进创新相结合的原则；6. 提高监管效率的原则（以最低成本达到监管目的）。"
  },
  {
    "id": 20,
    "chapterId": 11,
    "totalPoints": 8,
    "question": "试述宏观审慎监管与微观审慎监管的区别与联系。",
    "rubricPoints": [
      {
        "point": "目的不同（2分）：宏观审慎旨在防范系统性风险、维护金融体系整体稳定；微观审慎旨在控制单个金融机构或行业风险、保护消费者利益",
        "score": 2
      },
      {
        "point": "内容不同（2分）：宏观审慎侧重整体行为与相互影响力、风险内生、相关性重要、自上而下制定政策；微观审慎侧重个体行为与风险偏好、风险外生、相关性无关、自下而上制定政策",
        "score": 2
      },
      {
        "point": "监管对象不同（2分）：宏观审慎重点关注系统重要性金融机构、逆周期调控及整体市场趋势；微观审慎关注具体机构合规与风险暴露",
        "score": 2
      },
      {
        "point": "内在联系（2分）：良好的宏观与微观监管可以相互促进，增强彼此的监管效果",
        "score": 2
      }
    ],
    "sampleAnswer": "1. 目的不同：宏观审慎监管旨在防范系统性风险、维护金融体系整体稳定；微观审慎监管旨在控制单个金融机构或行业风险、保护消费者利益。\n2. 内容不同：宏观审慎侧重金融机构整体行为及相互影响力，认为风险内生、相关性重要，自上而下制定政策；微观审慎侧重个体行为和风险偏好，视风险为外生且相关性无关，自下而上制定政策。\n3. 监管对象不同：宏观审慎重点关注系统重要性金融机构行为、逆周期调控及与宏观经济相互影响；微观审慎关注具体机构的合规与风险暴露。\n4. 联系：良好的宏观与微观监管相互促进，共同增强监管效果。"
  }
];

export const essayQuestions: EssayQuestion[] = [
  {
    "id": 1,
    "chapterId": 7,
    "chapterRange": "第七章",
    "topicCategory": "monetary-policy",
    "title": "货币政策最终目标之间的权衡与目标体系构建",
    "totalPoints": 20,
    "question": "试结合货币政策五大最终目标之间的冲突与统一关系，论述中央银行应如何权衡最终目标并选择中介指标与操作指标。",
    "rubric": {
      "theory": {
        "desc": "阐明货币政策含义、五大最终目标（稳定币值、经济增长、充分就业、国际收支平衡、金融稳定）及目标体系三层次结构。",
        "score": 4
      },
      "mechanism": {
        "desc": "深入剖析稳定币值与经济增长/充分就业的短期与长期关系（菲利普斯曲线、奥肯定律），以及稳定币值与国际收支平衡在三种失衡组合下的协调与冲突。",
        "score": 8
      },
      "practice": {
        "desc": "结合三大理论主张（单目标、双目标、多目标）与现实权衡，论述中介指标（货币供给量与利率的比较）和操作指标（准备金与基础货币在我国的实践）的选择依据。",
        "score": 6
      },
      "conclusion": {
        "desc": "总结货币政策“政策工具→中介指标→最终目标”实施流程与以稳定币值为首要目标并动态兼顾的原则。",
        "score": 2
      }
    },
    "sampleAnswer": "一、理论基础（4分）：货币政策是央行运用工具调节货币供给量以实现宏观经济目标的方针措施总和。其目标体系由最终目标、中介指标和操作指标三层次构成，五大最终目标包括稳定币值、经济增长、充分就业、国际收支平衡和金融稳定。\n二、作用机制与目标权衡（8分）：1. 充分就业与经济增长受奥肯定律揭示总体正相关，但非劳动密集型增长模式可能存在矛盾；2. 根据菲利普斯曲线和奥肯定律，短期内通胀与经济增长及就业存在正相关，但长期过高通胀会破坏经济秩序并制约增长和就业；3. 稳定币值与国际收支平衡在“逆差+通胀”和“顺差+通缩”下无冲突，但在“逆差+通缩”下扩张政策虽促复苏却会加剧逆差。\n三、现实选择与指标搭配（6分）：在单目标、双目标与多目标论的权衡中，现实中应以稳定币值为首要目标，同时根据经济高涨、萧条或国际收支失衡时期动态调整相对重点。中介指标需满足相关性、可测性、可控性和抗干扰性四大标准；货币供给量与利率不能同时作为中介指标，抑制通胀时常选货币供应量，促进增长时常选利率。操作指标中，基础货币被称为“强力货币”和“高能货币”，是我国现行货币政策操作指标。\n四、结论（2分）：央行应遵循“政策工具→中介指标→最终目标”的实施流程，保持调控的科学性与动态适应性。"
  },
  {
    "id": 2,
    "chapterId": 8,
    "chapterRange": "第八章",
    "topicCategory": "monetary-policy",
    "title": "中央银行一般性、选择性及中国新型货币政策工具的协同运用",
    "totalPoints": 20,
    "question": "试比较一般性货币政策工具的优缺点，并论述我国近年来在准备金制度、公开市场创新及新型借贷便利工具方面的改革实践。",
    "rubric": {
      "theory": {
        "desc": "界定一般性货币政策工具（法定存款准备金政策、再贴现政策、公开市场业务）与选择性货币政策工具的基本内涵。",
        "score": 4
      },
      "mechanism": {
        "desc": "系统分析三大一般性工具的作用机制、各自优势与局限性（如准备金政策震撼大、再贴现主动权不完全在央行、公开市场灵活可逆但告示作用弱）。",
        "score": 8
      },
      "practice": {
        "desc": "详述我国货币政策工具改革：定向降准、再贴现改革、SLO与CBS、以及SLF/MLF/PSL/TMLF等新型借贷便利工具的定位与配合。",
        "score": 6
      },
      "conclusion": {
        "desc": "总结总量工具与结构性工具协同配合对提升宏观调控精准性的意义。",
        "score": 2
      }
    },
    "sampleAnswer": "一、理论基础（4分）：一般性货币政策工具针对全社会信用总量调节，包括法定存款准备金政策、再贴现政策和公开市场业务；选择性货币政策工具（消费者信用控制、证券市场信用控制、不动产信用控制、优惠利率）则针对特定资金流向与用途。\n二、一般性工具机制与优缺点对比（8分）：1. 法定存款准备金政策通过影响货币乘数调节货币供给，对所有银行平等且力度大，但轻微变动易引发经济强烈振荡且可能使超额准备低的银行陷入流动性困境；2. 再贴现政策通过再贴现率和资格规定发挥“最后贷款人”与告示作用，但告示效应具有相对性、利差受市场利率影响且主动权不完全在央行；3. 公开市场业务主动权完全在央行、灵活精巧、伸缩连续性强且可逆转，但告示作用较弱且需发达证券市场。\n三、我国工具改革实践（6分）：1. 法定存款准备金由“普遍降准”转向“定向降准”，引导信贷投向；2. 扩大再贴现对象范围并优先支持涉农及中小金融机构票据；3. 创设SLO熨平临时性流动性波动，创设CBS以央行票据互换支持银行永续债流动性；4. 构建SLF、MLF、PSL、TMLF等新型流动性借贷便利体系，补足不同期限结构流动性需求并定向支持重点领域与小微民营企业。\n四、结论（2分）：应推动一般性总量工具与结构性、创新型工具协调配合，提高货币政策调控的前瞻性与有效性。"
  },
  {
    "id": 3,
    "chapterId": 9,
    "chapterRange": "第九章",
    "topicCategory": "monetary-policy",
    "title": "货币政策传导机制、有效性制约因素及“双支柱”调控框架",
    "totalPoints": 20,
    "question": "试述货币政策传导的主要理论渠道、现实制约因素（体制、市场、信息与时滞），并论述我国建立“双支柱”调控框架的重要意义。",
    "rubric": {
      "theory": {
        "desc": "梳理凯恩斯利率传导（MS→R→I→E→Y）、后凯恩斯资产价格传导（托宾q与米什金）、货币学派（MS→A→C→I→P→Y）及信用渠道论。",
        "score": 4
      },
      "mechanism": {
        "desc": "深入分析传导受阻因素（凯恩斯陷阱、投资利率弹性低）以及体制、市场发育、信息不对称与内外时滞对货币政策有效性的影响。",
        "score": 8
      },
      "practice": {
        "desc": "阐述我国货币政策与财政政策四种配合模式（双紧、双松、一松一紧），并详述货币政策与宏观审慎政策“双支柱”框架的关系与机制建设。",
        "score": 6
      },
      "conclusion": {
        "desc": "总结疏通传导机制与强化双支柱协同的政策结论。",
        "score": 2
      }
    },
    "sampleAnswer": "一、传导机制理论（4分）：凯恩斯强调 MS→R→I→E→Y 的利率渠道；后凯恩斯学派补充了托宾q理论与米什金耐用消费品资产价格渠道；货币学派基于持久性收入提出 MS→A→C→I→P→Y 链条；信用渠道论则强调银行贷款渠道与企业、居民资产负债表渠道。\n二、制约因素与时滞分析（8分）：传导受阻源于“凯恩斯陷阱”或投资利率弹性极低。现实中，市场经济下的机构与企业预算硬约束、完整规范的市场体系以及充分的信息披露有助于政策传导；反之，体制扭曲、市场分割与信息不对称会削弱传导效率。同时，内部时滞（认识、决策）和外部时滞（操作、市场，对GDP最高影响通常滞后1～2年）要求央行具备前瞻性。\n三、政策配合与“双支柱”实践（6分）：货币与财政政策可通过“双紧”“双松”快速发力，或通过“一松一紧”实现较稳定调控。更重要的是，我国积极探索货币政策与宏观审慎政策“双支柱”调控框架：货币政策侧重总量与物价稳定，宏观审慎管理针对加杠杆行为、以防范系统性风险和维护金融稳定为目标，在“事前—事中—事后”环节实现数据共享与模型互补。\n四、结论（2分）：只有不断完善市场体制、精准把握时滞并深化双支柱协调，才能提升宏观调控的整体效能。"
  },
  {
    "id": 4,
    "chapterId": 10,
    "chapterRange": "第十章",
    "topicCategory": "financial-regulation",
    "title": "金融危机的形成机制、经典理论及防范化解治理体系",
    "totalPoints": 20,
    "question": "试结合金融脆弱性理论及货币危机、银行业危机、外债危机理论，论述中央银行应如何构建金融危机的防范、化解与中长期治理体系。",
    "rubric": {
      "theory": {
        "desc": "阐明金融危机四大类型（货币危机、银行业危机、外债危机、系统性金融危机）、三大特点及金融脆弱性形成逻辑。",
        "score": 4
      },
      "mechanism": {
        "desc": "梳理四代货币危机理论、银行业危机四大假说（弗里德曼、明斯基金融不稳定假说、D-D挤兑模型、托宾银行体系关键论）及外债危机三大假说。",
        "score": 8
      },
      "practice": {
        "desc": "系统论述危机“事前防范”（预警模型、国际协调、汇率与储备、IMF八类资本流入对策）、“事中化解”（稳市场信心、向金融机构注资及购买有毒资产）与“事后治理”（重组金融机构、量化宽松等扶持实体经济）。",
        "score": 6
      },
      "conclusion": {
        "desc": "总结全流程危机治理对维护金融稳定与经济安全的重要性。",
        "score": 2
      }
    },
    "sampleAnswer": "一、概念与特征（4分）：金融危机指信用基础破坏导致的金融体系动荡，分为货币危机、银行业危机、外国债务危机和系统性金融危机四类，具有综合性、传染性（多米诺骨牌效应）和破坏性。金融脆弱性理论指出繁荣期宽松信贷和高风险借款比重上升为危机埋下伏笔。\n二、危机理论机制（8分）：1. 四代货币危机理论依次从财政赤字与固定汇率矛盾（克鲁格曼）、维持汇率成本权衡（奥布斯特费尔德）、企业财务恶化（麦金农和克鲁格曼）和企业外债资产负债表效应（克鲁格曼和阿吉翁）解释危机；2. 银行业危机包括货币政策失误论、明斯基将借款者分为套期保值型/投机型/蓬齐型的金融不稳定假说、D-D银行挤兑模型及托宾银行体系关键论；3. 外债危机包括费雪债务—通货紧缩论、苏特综合性国际债务论与沃尔芬森资产价格下降论。\n三、全流程治理措施（6分）：1. 防范措施：建立预警模型捕捉超周期信号，加强国际金融协调，选择适宜汇率制度并维持适当外汇储备，落实IMF应对资本流入八类对策；2. 化解举措：首要稳定市场局势与存款人信心（稳股市、干预汇市、全面担保），并通过非股权救助、股权注资及购买“有毒资产”向机构注资；3. 中长期治理：对金融机构整顿接管重组以优化金融系统，同时实施适度货币政策刺激实体经济复苏。\n四、结论（2分）：唯有构建事前预警、事中果断救助与事后制度重构相结合的治理体系，方能筑牢金融安全防线。"
  },
  {
    "id": 5,
    "chapterId": 10,
    "chapterRange": "第十章",
    "topicCategory": "financial-regulation",
    "title": "金融稳定与金融安全的内涵、评估体系及联动维护机制",
    "totalPoints": 20,
    "question": "试论述金融稳定的三大特征与两大目标，并结合金融稳定评估指标体系及FSAP规划，分析如何通过政策、工具与制度三方联动维护金融稳定与安全。",
    "rubric": {
      "theory": {
        "desc": "阐明金融稳定（央行2005年报告定义）与金融安全的内涵，以及金融稳定、金融安全、经济安全与国家安全的层次关系。",
        "score": 4
      },
      "mechanism": {
        "desc": "深入解析金融稳定的综合性、全局性与动态性三大特征，以及两大核心目标和评估指标体系（宏观经济指标与机构内部五大类27个定量指标、4个定性指标）。",
        "score": 8
      },
      "practice": {
        "desc": "结合IMF与世界银行联合推出的FSAP（含FSIs 14项核心指标与26项鼓励指标及压力测试），论述金融政策、金融工具与金融制度三方联动维护机制。",
        "score": 6
      },
      "conclusion": {
        "desc": "总结维护金融稳定作为央行核心职责与经济稳定前提的战略意义。",
        "score": 2
      }
    },
    "sampleAnswer": "一、内涵与层次关系（4分）：中国人民银行2005年《中国金融稳定报告》将金融稳定定义为金融体系能够有效发挥其关键功能的状态。金融稳定是金融安全的基础，金融安全是经济安全的核心，经济安全是国家安全的必要组成。\n二、特征、目标与评估体系（8分）：金融稳定具有综合性（需货币、财政与监管政策综合施策）、全局性（立足国内国际全市场）与动态性（随经济发展变化）三大特征；其两大目标是保障市场与机构稳定运行、防范系统性风险，以及保障金融安全、优化金融结构、提高资源配置效率。评估指标体系由宏观经济指标（定量与定性）和金融机构内部指标（资本充足性、资产负债、资产安全性、盈利性、可持续发展能力五大类27个定量指标及内部管理4个定性指标）构成。\n三、FSAP与三方联动维护（6分）：国际上通过1999年5月IMF和世行推出的FSAP（含FSIs 14项核心指标、26项鼓励指标及压力测试）评估稳健性。维护金融稳定需三方联动：1. 金融政策（政治保障为基础，货币政策与财政政策为工具）；2. 金融工具（利率调控、汇率调控、资本账户管理、流动性管理营造良好运行环境）；3. 金融制度（支付体系、信用体系、金融法治体系、投资者保护制度营造良好生态环境）。\n四、结论（2分）：必须坚持政策、工具与制度协同发力，提升风险监测与压力测试能力，守住金融稳定与安全底线。"
  },
  {
    "id": 6,
    "chapterId": 11,
    "chapterRange": "第十一章",
    "topicCategory": "financial-regulation",
    "title": "宏观审慎监管制度框架、工具体系及中国金融监管体制演进",
    "totalPoints": 20,
    "question": "试述宏观审慎监管的必要性及其与微观审慎监管的异同，并结合时间维度与空间维度政策工具，分析中国现行金融监管体系的演进与面临的挑战。",
    "rubric": {
      "theory": {
        "desc": "阐明宏观审慎监管的概念、两大国际构建理念及金融监管的六大必要性与适度性理论。",
        "score": 4
      },
      "mechanism": {
        "desc": "深入剖析宏观审慎监管的必要性（顺周期性、“大而不倒”、普遍关联性、稳健标准局限、集体非理性、激励机制不合理），对比宏微观审慎在目的、内容和对象上的区别，并拆解时间与空间维度工具。",
        "score": 8
      },
      "practice": {
        "desc": "梳理中国金融监管体制三大演进阶段与现行五大机构构成（中央金融委、中央金融工委、人民银行、金融监管总局、证监会），分析全球化、全面开放、金控扩张、市场化处置与数字金融五大挑战。",
        "score": 6
      },
      "conclusion": {
        "desc": "总结深化宏观审慎与微观审慎协同、完善现代金融监管体系的方向。",
        "score": 2
      }
    },
    "sampleAnswer": "一、概念与构建理念（4分）：宏观审慎监管是将金融体系整体作为监管对象以减少金融动荡经济成本的监管模式，存在保留微观指标辅助宏观指标以及宏微观融为一体两种构建理念。\n二、必要性、宏微观对比及工具体系（8分）：1. 必要性源于顺周期性、“大而不倒”、机构普遍关联性、巴塞尔I/II标准局限、集体非理性及不合理激励机制；2. 与微观审慎相比，宏观审慎以防范系统性风险为目的、关注整体与内生风险、自上而下制定政策；3. 时间维度工具包括逆周期资本缓冲、流动性覆盖率、杠杆率、拨备标准和逆周期抵质押品价值比率；空间维度工具包括资本充足率普遍标准（《巴塞尔协议III》将普通股比例提至4.5%）、系统重要性银行1%附加资本、改革评级公司、衍生品集中清算、影子银行监管及或有资本安排。\n三、中国监管体制演进与挑战（6分）：中国监管体制历经大一统与央行统一监管阶段、“分业经营、分业监管”阶段，以及2017年成立金稳委、2018年组建银保监会、2023年3月组建国家金融监督管理总局的改革重构阶段，形成中央金融委、中央金融工委、人民银行、国家金融监管总局和证监会五大机构构成的现行体系。当前仍面临金融全球化、市场全面开放、金控集团监管有效性、市场化风险处置机制与数字金融监管不足五大挑战。\n四、结论（2分）：应强化宏观审慎与微观审慎协同，补齐监管短板，全面提升金融监管效能。"
  }
];

/**
 * Generate a 100-point balanced mock exam paper:
 * - 5 Terms * 3 pt = 15 pt
 * - 15 Fill-ins * 1 pt = 15 pt
 * - 15 Single Choices * 1 pt = 15 pt
 * - 15 True/False * 1 pt = 15 pt
 * - 3 Short Answers = 20 pt (two 6-pt + one 8-pt)
 * - 1 Essay * 20 pt = 20 pt
 * Total: 100 pt
 */
export function generateMockExamPaper(customSeed?: number): ExamPaper {
  const seed = customSeed ?? Date.now();

  // Deterministic pseudo-random picker
  function pseudoRandomPick<T>(arr: T[], count: number, offset: number): T[] {
    const copy = [...arr];
    const picked: T[] = [];
    let cur = (seed + offset) % copy.length;
    for (let i = 0; i < count && copy.length > 0; i++) {
      cur = (cur + 7) % copy.length;
      picked.push(copy.splice(cur, 1)[0]);
    }
    return picked;
  }

  // 1. Pick 5 Terms (15 pt)
  const terms = pseudoRandomPick(terminologyQuestions, 5, 11);

  // 2. Pick 15 Fill-ins (15 pt)
  const fillIns = pseudoRandomPick(fillInQuestions, 15, 23);

  // 3. Pick 15 Single Choices (15 pt)
  const singleChoices = pseudoRandomPick(singleChoiceQuestions, 15, 37);

  // 4. Pick 15 True/False (15 pt)
  const trueFalse = pseudoRandomPick(trueFalseQuestions, 15, 41);

  // 5. Pick 3 Short Answers: exactly two 6-pt questions + one 8-pt question = 20 pt
  const sixPtPool = shortAnswerQuestions.filter(q => q.totalPoints === 6);
  const eightPtPool = shortAnswerQuestions.filter(q => q.totalPoints === 8);
  const pickedSix = pseudoRandomPick(sixPtPool, 2, 53);
  const pickedEight = pseudoRandomPick(eightPtPool, 1, 67);
  const shortAnswers = [...pickedSix, ...pickedEight];

  // 6. Pick 1 Essay (20 pt)
  const pickedEssay = pseudoRandomPick(essayQuestions, 1, 79)[0];

  return {
    id: `exam-${seed}`,
    createdAt: Date.now(),
    durationMinutes: 120,
    terms,
    fillIns,
    singleChoices,
    trueFalse,
    shortAnswers,
    essay: pickedEssay,
    totalPoints: 100
  };
}

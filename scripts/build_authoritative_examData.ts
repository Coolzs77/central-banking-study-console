import fs from 'fs';
import { recitationQuestions } from '../src/data/centralBankingData';
import {
  fillInQuestions as rawFillIns,
  singleChoiceQuestions as rawChoices,
  trueFalseQuestions as rawTF,
  shortAnswerQuestions,
  essayQuestions,
  TOTAL_EXAM_TERMS,
  TOTAL_FILL_IN,
  TOTAL_SINGLE_CHOICE,
  TOTAL_TRUE_FALSE,
  TOTAL_SHORT_ANSWER,
  TOTAL_ESSAYS
} from '../src/data/examData';

const qMap = new Map(recitationQuestions.map(q => [q.id, q]));

// 1. Curate FillIn Questions
const verifiedFillIns = [
  {
    id: 1,
    chapterId: 1,
    recitationQuestionId: 4,
    stem: "1844年英国通过《_____》，将英格兰银行分为发行部和银行部，确立了垄断全国货币发行的法定地位。",
    answers: ["皮尔条例", "皮尔法案", "1844年银行特许条例"],
    points: 1,
    explanation: "1844年《皮尔条例》（Bank Charter Act 1844）是中央银行发展史上的重要里程碑，奠定了垄断发钞制度。"
  },
  {
    id: 2,
    chapterId: 1,
    recitationQuestionId: 4,
    stem: "中央银行产生和发展的历史经历了三次高潮，第一家真正发挥中央银行职能的是1694年建立的_____。",
    answers: ["英格兰银行", "英国中央银行"],
    points: 1,
    explanation: "英格兰银行成立于1694年，并在1844年《皮尔条例》颁布后垄断发钞，是公认的现代央行鼻祖。"
  },
  {
    id: 3,
    chapterId: 1,
    recitationQuestionId: 6,
    stem: "按照资本所有权划分，中国人民银行属于_____所有制中央银行。",
    answers: ["国家", "全部由国家", "国有", "国家所有"],
    points: 1,
    explanation: "中国人民银行全部资本由国家财政拨款形成，归国家所有。"
  },
  {
    id: 4,
    chapterId: 1,
    recitationQuestionId: 4,
    stem: "美联储设立由联邦储备委员会、12家联邦储备银行及会员银行组成的_____体系。",
    answers: ["联邦储备", "联邦储备体系", "美联储"],
    points: 1,
    explanation: "美国1913年通过《联邦储备法》，设立由联邦储备委员会、12家联邦储备银行及会员银行组成的联邦储备体系。"
  },
  {
    id: 5,
    chapterId: 1,
    recitationQuestionId: 11,
    stem: "中央银行的职能通常概括为：发行的银行、银行的银行和_____的银行。",
    answers: ["政府", "国家的银行", "国家"],
    points: 1,
    explanation: "“发行的银行、银行的银行、政府的银行”是中央银行的三大传统核心职能定位。"
  },
  {
    id: 6,
    chapterId: 2,
    recitationQuestionId: 17,
    stem: "中央银行独立性是指中央银行在制定和执行货币政策时不受_____以及其他政府部门行政干预的自主程度。",
    answers: ["政府", "财政部", "行政机关"],
    points: 1,
    explanation: "央行独立性主要是指相对政府与财政部的独立性，以防范财政赤字货币化诱发恶性通胀。"
  },
  {
    id: 7,
    chapterId: 3,
    recitationQuestionId: 26,
    stem: "中央银行业务活动的基本原则包括非营利性、流动性、安全性以及业务的主动性和_____。",
    answers: ["公开性", "法定性", "独立性"],
    points: 1,
    explanation: "中央银行业务活动原则包括非营利性、流动性、安全性、主动性、独立性、法定性和公开性。"
  },
  {
    id: 8,
    chapterId: 3,
    recitationQuestionId: 25,
    stem: "《中华人民共和国中国人民银行法》明确规定，中国人民银行不得对政府财政_____，不得直接认购、包销国债和其他政府债券。",
    answers: ["透支", "透支借贷"],
    points: 1,
    explanation: "《中国人民银行法》第二十九条硬性禁止央行向财政透支，斩断财政被动发钞的制度隐患。"
  },
  {
    id: 9,
    chapterId: 4,
    recitationQuestionId: 30,
    stem: "商业银行在中央银行的准备金存款包括法定存款准备金和_____。",
    answers: ["超额存款准备金", "超额准备金"],
    points: 1,
    explanation: "商业银行在中央银行的全部存款准备金等于法定存款准备金与超额存款准备金之和。"
  },
  {
    id: 10,
    chapterId: 4,
    recitationQuestionId: 30,
    stem: "基础货币又称高能货币，等于流通中的现金加上商业银行在中央银行的_____。",
    answers: ["准备金存款", "存款准备金", "准备金"],
    points: 1,
    explanation: "基础货币公式为 B = C + R，其中 C 为流通中现金，R 为银行体系准备金总额。"
  },
  {
    id: 11,
    chapterId: 4,
    recitationQuestionId: 45,
    stem: "中国人民银行货币发行必须遵循经济发行原则、集中统一发行原则和_____发行原则。",
    answers: ["计划", "统筹"],
    points: 1,
    explanation: "人民币发行的三大基本原则是：经济发行原则、计划发行原则和集中统一发行原则。"
  },
  {
    id: 12,
    chapterId: 4,
    recitationQuestionId: 46,
    stem: "人民币现金流通过程中，由业务库送交发行库称为现金_____。",
    answers: ["回笼", "入库回笼"],
    points: 1,
    explanation: "发行库向业务库调拨为出库（投放），商业银行业务库将闲置现金送交发行库为入库（回笼）。"
  },
  {
    id: 13,
    chapterId: 4,
    recitationQuestionId: 27,
    stem: "在中央银行业务分类中，流通中的现金与商业银行缴存的存款准备金属于中央银行的_____业务。",
    answers: ["负债", "负债业务"],
    points: 1,
    explanation: "货币发行和准备金存款是中央银行最主要的资金来源，构成中央银行核心负债业务。"
  },
  {
    id: 14,
    chapterId: 5,
    recitationQuestionId: 27,
    stem: "中央银行资产业务主要包括再贴现、中央银行贷款、_____业务以及黄金外汇储备业务。",
    answers: ["证券买卖", "公开市场买卖", "证券投资", "买卖证券"],
    points: 1,
    explanation: "中央银行资产业务主要包括贷款业务、再贴现业务、证券买卖业务和黄金外汇储备业务。"
  },
  {
    id: 15,
    chapterId: 5,
    recitationQuestionId: 52,
    stem: "商业银行将其贴现收进的未到期合格商业汇票转让给中央银行的借款行为称为_____。",
    answers: ["再贴现", "再贴现业务"],
    points: 1,
    explanation: "再贴现是商业银行等以未到期商业承兑汇票或银行承兑汇票向央行申请融资的传统资产业务。"
  },
  {
    id: 16,
    chapterId: 5,
    recitationQuestionId: 58,
    stem: "中央银行公开市场业务操作中，向市场卖出证券并约定日后买回以回笼流动性的操作称为_____。",
    answers: ["正回购", "正回购操作"],
    points: 1,
    explanation: "正回购为央行向一级交易商卖出有价证券并约定日后买回，系即期回笼流动性操作。"
  },
  {
    id: 17,
    chapterId: 5,
    recitationQuestionId: 58,
    stem: "逆回购是中央银行向一级交易商买入证券并约定日后卖回，属于吞吐基础货币的_____流动性操作。",
    answers: ["投放", "注入", "提供"],
    points: 1,
    explanation: "逆回购是央行买入有价证券释放资金，约定日后卖回，属于即期投放流动性操作。"
  },
  {
    id: 18,
    chapterId: 6,
    recitationQuestionId: 63,
    stem: "大额实时支付系统（HVPS）实行的清算模式是逐笔实时_____结算。",
    answers: ["全额", "实时全额"],
    points: 1,
    explanation: "大额支付系统采用全额即时清算模式（RTGS），逐笔处理并提供终局清算。"
  },
  {
    id: 19,
    chapterId: 6,
    recitationQuestionId: 63,
    stem: "净额清算系统是通过对借贷支付指令进行冲抵，仅对轧差后的_____进行最终资金清算。",
    answers: ["净额", "差额", "净差额"],
    points: 1,
    explanation: "净额清算通过多边或双边冲抵，仅对最终轧差敞口进行划转，节约流动性占用。"
  },
  {
    id: 20,
    chapterId: 6,
    recitationQuestionId: 67,
    stem: "支付系统面临的主要风险包括信用风险、流动性风险、法律风险、操作风险和_____风险。",
    answers: ["系统", "系统性", "系统风险"],
    points: 1,
    explanation: "系统风险是支付系统最危险的风险，一家机构违约可能引发多米诺骨牌效应波及全网。"
  },
  {
    id: 21,
    chapterId: 7,
    recitationQuestionId: 71,
    stem: "多数市场经济国家的中央银行将货币政策目标概括为：稳定币值、经济增长、充分就业、平衡国际收支和_____。",
    answers: ["金融稳定", "维护金融稳定"],
    points: 1,
    explanation: "货币政策五大目标：稳定币值、经济增长、充分就业、平衡国际收支以及金融稳定。"
  },
  {
    id: 22,
    chapterId: 7,
    recitationQuestionId: 83,
    stem: "描述宏观经济中通货膨胀率与失业率之间存在反向交替替代关系的著名理论模型是_____曲线。",
    answers: ["菲利普斯", "Phillips"],
    points: 1,
    explanation: "短期菲利普斯曲线揭示了通货膨胀与失业率之间的负相关交替权衡特征。"
  },
  {
    id: 23,
    chapterId: 7,
    recitationQuestionId: 87,
    stem: "中央银行在选择货币政策中介指标时，通常需要遵循可测性、可控性和_____三大基本标准。",
    answers: ["相关性", "高度相关性"],
    points: 1,
    explanation: "中介指标三大选择标准：可测性（能及时统计）、可控性（央行能调控）、相关性（与最终目标高度相关）。"
  },
  {
    id: 24,
    chapterId: 7,
    recitationQuestionId: 88,
    stem: "在货币政策中介指标中，货币供给量作为中介指标的突出优点是其变动能直接影响经济活动，且不易将政策效果与_____效果混淆。",
    answers: ["非政策", "非政策性", "非政策效果"],
    points: 1,
    explanation: "中央银行学第88题指出，货币供给量变动能直接影响经济活动，且不易将政策效果与非政策效果混淆。"
  },
  {
    id: 25,
    chapterId: 7,
    recitationQuestionId: 88,
    stem: "基础货币投放的控制权在中央银行，商业银行通过发放贷款形成派生存款，二者之间的倍数比例称为_____。",
    answers: ["货币乘数", "存款乘数", "派生乘数"],
    points: 1,
    explanation: "货币供给量 M 等于基础货币 B 与货币乘数 m 的乘积，即 M = m * B。"
  },
  {
    id: 26,
    chapterId: 8,
    recitationQuestionId: 101,
    stem: "传统西方中央银行“三大法宝”一般性货币政策工具是指：法定存款准备金政策、再贴现政策和_____。",
    answers: ["公开市场业务", "公开市场操作"],
    points: 1,
    explanation: "西方三大一般性货币政策工具为法定存款准备金政策、再贴现政策和公开市场业务。"
  },
  {
    id: 27,
    chapterId: 8,
    recitationQuestionId: 97,
    stem: "在三大法宝中，因其影响过于剧烈且缺乏弹性而被形象地称为“巨斧”的是_____政策。",
    answers: ["法定存款准备金", "法定准备金", "法定存款准备金率"],
    points: 1,
    explanation: "法定准备金率微调便会引发货币乘数与信贷总量的倍数级震荡，被称为政策巨斧。"
  },
  {
    id: 28,
    chapterId: 9,
    recitationQuestionId: 111,
    stem: "凯恩斯主义学派认为，货币政策传导机制的核心传导变量是_____。",
    answers: ["利率", "市场利率"],
    points: 1,
    explanation: "凯恩斯传导机制为：M -> r -> I -> E -> Y，利率是连接货币与实体经济的关键枢纽。"
  },
  {
    id: 29,
    chapterId: 9,
    recitationQuestionId: 114,
    stem: "弗里德曼为代表的货币学派认为，货币政策传导机制是货币供应量对_____的直接影响。",
    answers: ["名义总支出", "名义总产出", "名义总收入", "支出", "物价水平"],
    points: 1,
    explanation: "现代货币主义强调货币需求稳定，货币供给变化直接引起资产组合调整和名义总支出变动。"
  },
  {
    id: 30,
    chapterId: 9,
    recitationQuestionId: 118,
    stem: "货币政策时滞包括内部时滞和外部时滞，其中认识时滞和决策时滞属于_____时滞。",
    answers: ["内部", "内部决策"],
    points: 1,
    explanation: "内部时滞是指央行从发现经济异常到正式出台决策所经历的时间，包括认识与决策时滞。"
  },
  {
    id: 31,
    chapterId: 9,
    recitationQuestionId: 113,
    stem: "托宾q理论认为，当企业的股票市场价值高于其重置成本（即q>1）时，企业倾向于扩大_____支出。",
    answers: ["投资", "厂房设备", "固定资产", "资本"],
    points: 1,
    explanation: "q > 1 时新建资产成本低于股票市值，发行新股购买新厂房设备更有利，拉动固定投资。"
  },
  {
    id: 32,
    chapterId: 10,
    recitationQuestionId: 125,
    stem: "国际货币基金组织将金融危机划分为货币危机、银行业危机、外债危机和_____金融危机四大类型。",
    answers: ["系统性", "全面", "系统性金融危机"],
    points: 1,
    explanation: "国际货币基金组织（IMF）将金融危机划分为货币危机、银行业危机、外债危机与系统性危机。"
  },
  {
    id: 33,
    chapterId: 10,
    recitationQuestionId: 128,
    stem: "明斯基提出的金融不稳定假说将借款主体划分为套期保值型、投机型和_____型三种融资模式。",
    answers: ["蓬齐", "庞氏", "蓬齐型"],
    points: 1,
    explanation: "明斯基将金融体系内生顺周期融资分为套期保值型（安全）、投机型（付息）与蓬齐型（借新还旧）。"
  },
  {
    id: 34,
    chapterId: 10,
    recitationQuestionId: 131,
    stem: "金融危机爆发后，政府及金融当局向金融机构注资、促进金融业复苏的救助手段包括非股权性救助、股权性注资和购买“_____资产”。",
    answers: ["有毒", "有毒资产"],
    points: 1,
    explanation: "中央银行学第131题指出，危机化解的核心举措包括非股权性救助、股权性注资和购买“有毒资产”，以市场化方式处置存量风险。"
  },
  {
    id: 35,
    chapterId: 10,
    recitationQuestionId: 131,
    stem: "金融危机爆发后，中央银行及政府稳定金融市场局势、维护存款人信心的当务之急是动用财政资源与外汇储备干预_____市场。",
    answers: ["股市汇市", "股市和汇市", "股票和外汇", "股市"],
    points: 1,
    explanation: "中央银行学第131题指出，化解金融危机的首要举措是动用财政资源与外汇储备干预股市汇市，并为银行提供储蓄与外债全面担保。"
  },
  {
    id: 36,
    chapterId: 11,
    recitationQuestionId: 155,
    stem: "针对系统性金融风险跨机构传染特性实施的监管称为_____维度宏观审慎监管。",
    answers: ["空间", "横向", "跨机构"],
    points: 1,
    explanation: "宏观审慎分为时间维度（熨平顺周期波动）与空间维度（防范跨机构、跨市场横向传染）。"
  },
  {
    id: 37,
    chapterId: 11,
    recitationQuestionId: 154,
    stem: "旨在平抑经济上行期信贷过度扩张而在基础资本之外额外提取的资本要求被称为_____资本缓冲。",
    answers: ["逆周期", "逆周期资本"],
    points: 1,
    explanation: "逆周期资本缓冲（CCyB）在繁荣期积累资本以备萧条期吸收损失，熨平信贷周期。"
  },
  {
    id: 38,
    chapterId: 11,
    recitationQuestionId: 155,
    stem: "《巴塞尔协议III》对商业银行的核心一级资本充足率最低要求设定为_____。",
    answers: ["4.5%", "4.5个百分点", "百分之4.5"],
    points: 1,
    explanation: "《巴塞尔协议III》规定核心一级资本充足率不低于4.5%，一级资本不低于6%，总资本不低于8%。"
  },
  {
    id: 39,
    chapterId: 11,
    recitationQuestionId: 122,
    stem: "我国目前实行的宏观金融调控与金融稳定核心框架是“货币政策与_____政策双支柱”调控框架。",
    answers: ["宏观审慎", "宏观审慎监管"],
    points: 1,
    explanation: "健全“货币政策和宏观审慎政策双支柱调控框架”，兼顾经济周期与金融周期。"
  },
  {
    id: 40,
    chapterId: 8,
    recitationQuestionId: 107,
    stem: "中央银行对商业银行的道义劝告和窗口指导，在工具分类上属于_____信用控制手段。",
    answers: ["间接", "非强制性", "软约束"],
    points: 1,
    explanation: "道义劝告和窗口指导没有法定强制约束力，属于利用信誉和地位实施的间接信用控制手段。"
  }
];

// 2. Curate Single Choice Questions
const verifiedChoices = rawChoices.map((c, idx) => {
  if (c.id === 10) {
    return {
      ...c,
      recitationQuestionId: 20
    };
  }
  if (c.id === 11) {
    return {
      ...c,
      recitationQuestionId: 22
    };
  }
  if (c.id === 14) {
    return {
      ...c,
      recitationQuestionId: 27
    };
  }
  if (c.id === 15) {
    return {
      ...c,
      recitationQuestionId: 46
    };
  }
  if (c.id === 16) {
    return {
      ...c,
      recitationQuestionId: 30
    };
  }
  if (c.id === 17) {
    return {
      ...c,
      recitationQuestionId: 44
    };
  }
  if (c.id === 20) {
    return {
      id: 20,
      chapterId: 5,
      recitationQuestionId: 103,
      stem: "相比法定准备金率政策，公开市场业务最突出的优势在于：",
      options: {
        A: "具有极强的法律强制性且见效极其剧烈",
        B: "主动权完全掌握在央行手中，可以高频、微量连续微调且易于逆向纠偏",
        C: "不依赖发达完善的国债二级市场",
        D: "对所有商业银行产生完全一致的被动约束"
      },
      correctKey: "B" as const,
      rationale: "公开市场业务灵活性极强，央行拥有完全操作主动权，可根据市场微调，发现超调随时逆向回购纠偏，无准备金调整剧震。",
      points: 1
    };
  }
  if (c.id === 25) {
    return {
      ...c,
      recitationQuestionId: 83
    };
  }
  if (c.id === 26) {
    return {
      id: 26,
      chapterId: 7,
      recitationQuestionId: 90,
      stem: "在货币政策中介指标的选择上，中央银行无法同时将货币供给量和市场利率作为控制目标，其根本原因在于：",
      options: {
        A: "货币需求曲线随着经济周期和市场流动性偏好变动，固定货币量则利率大幅波动，固定利率则货币量被迫变动",
        B: "商业银行不接受中央银行制定的基准利率指导",
        C: "中央银行无法统计全社会的狭义货币供应量M1",
        D: "财政政策与货币政策存在完全挤出效应"
      },
      correctKey: "A" as const,
      rationale: "根据第90题，货币需求曲线不断移动。固定货币供应量必然导致利率大幅震荡；固定利率目标则必须被动适应货币需求供给货币，二者不可兼得。",
      points: 1
    };
  }
  if (c.id === 36) {
    return {
      ...c,
      recitationQuestionId: 131
    };
  }
  return c;
});

// 3. Curate True/False Questions
const verifiedTF = rawTF.map((tf, idx) => {
  if (tf.id === 2) {
    return {
      ...tf,
      recitationQuestionId: 10
    };
  }
  if (tf.id === 5) {
    return {
      ...tf,
      recitationQuestionId: 25
    };
  }
  if (tf.id === 8) {
    return {
      ...tf,
      recitationQuestionId: 27
    };
  }
  if (tf.id === 12) {
    return {
      ...tf,
      recitationQuestionId: 97
    };
  }
  if (tf.id === 16) {
    return {
      ...tf,
      recitationQuestionId: 71
    };
  }
  if (tf.id === 19) {
    return {
      ...tf,
      recitationQuestionId: 88
    };
  }
  if (tf.id === 20) {
    return {
      id: 20,
      chapterId: 7,
      recitationQuestionId: 90,
      statement: "中央银行在进行宏观调控时，能够同时将货币供给量和市场利率作为可有效控制的中介指标。",
      isCorrect: false,
      errorCorrection: "错误。根据中央银行学第90题，货币需求曲线是变动不定的。如果固定货币供应量，市场利率就会剧烈变动；反之若固定利率，货币供应量就会被迫大幅波动，中央银行无法兼得二者作为中介指标。",
      points: 1
    };
  }
  if (tf.id === 27) {
    return {
      ...tf,
      recitationQuestionId: 131
    };
  }
  if (tf.id === 28) {
    return {
      ...tf,
      recitationQuestionId: 153
    };
  }
  if (tf.id === 30) {
    return {
      ...tf,
      recitationQuestionId: 122
    };
  }
  return tf;
});

console.log('Audited and verified:');
console.log('FillIns:', verifiedFillIns.length);
console.log('Choices:', verifiedChoices.length);
console.log('TF:', verifiedTF.length);

// Generate final TypeScript content for src/data/examData.ts
const examDataTs = `// Central Banking 100-Point Exam Question Bank
// Generated with authoritative coverage of Chapters 1-11
// Contains:
// - 28 Terminology questions (<= 30 core terms, selected from Ch 4, 5, 6, 7, 8, 10, 11 with 3-pt definitions: 1.5pt def, 1.0pt nature, 0.5pt function)
// - 40 Fill-in-the-blank questions (1pt each)
// - 40 Single-choice questions (1pt each, ABCD with rationale)
// - 30 True/False with correction questions (1pt each, with errorCorrection)
// - 20 Short-answer questions (6/6/8pt rubrics from 161 manual)
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
export const TOTAL_EXAM_TERMS = ${TOTAL_EXAM_TERMS};
export const TOTAL_FILL_IN = ${TOTAL_FILL_IN};
export const TOTAL_SINGLE_CHOICE = ${TOTAL_SINGLE_CHOICE};
export const TOTAL_TRUE_FALSE = ${TOTAL_TRUE_FALSE};
export const TOTAL_SHORT_ANSWER = ${TOTAL_SHORT_ANSWER};
export const TOTAL_ESSAYS = ${TOTAL_ESSAYS};

export const terminologyQuestions: TerminologyQuestion[] = terminologyList;

export const fillInQuestions: FillInQuestion[] = ${JSON.stringify(verifiedFillIns, null, 2)};

export const singleChoiceQuestions: SingleChoiceQuestion[] = ${JSON.stringify(verifiedChoices, null, 2)};

export const trueFalseQuestions: TrueFalseQuestion[] = ${JSON.stringify(verifiedTF, null, 2)};

export const shortAnswerQuestions: ShortAnswerQuestion[] = ${JSON.stringify(shortAnswerQuestions, null, 2)};

export const essayQuestions: EssayQuestion[] = ${JSON.stringify(essayQuestions, null, 2)};

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
    id: \`exam-\${seed}\`,
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
`;

fs.writeFileSync('src/data/examData.ts', examDataTs, 'utf-8');
console.log('Successfully written authoritative src/data/examData.ts!');

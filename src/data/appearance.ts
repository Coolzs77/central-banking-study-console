export type PaperThemeId =
  | 'ivory'
  | 'parchment'
  | 'sage'
  | 'kraft'
  | 'grid'
  | 'lined'
  | 'default';

export type FontThemeId =
  | 'system'
  | 'song'
  | 'kai'
  | 'fangsong'
  | 'yuanti'
  | 'serif-mix'
  | 'mono-clean';

export const FONT_SIZE_MIN = 13;
export const FONT_SIZE_MAX = 22;
export const FONT_SIZE_DEFAULT = 16;
export const FONT_SIZE_STEP = 1;

export const PAPER_THEMES: {
  id: PaperThemeId;
  name: string;
  swatch: string;
  darkSwatch: string;
  previewPattern?: string;
}[] = [
  {
    id: 'ivory',
    name: '道林考卷',
    swatch: '#fbf8f1',
    darkSwatch: '#191815',
    previewPattern: 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(176,158,128,0.12) 100%)',
  },
  {
    id: 'parchment',
    name: '古典羊皮纸',
    swatch: '#f4ead2',
    darkSwatch: '#1c1813',
    previewPattern: 'radial-gradient(circle at 50% 45%, transparent 45%, rgba(139,98,42,0.22) 100%)',
  },
  {
    id: 'sage',
    name: '豆沙护眼',
    swatch: '#f1f7f2',
    darkSwatch: '#141b17',
    previewPattern: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(114,148,124,0.14) 100%)',
  },
  {
    id: 'kraft',
    name: '温润牛皮',
    swatch: '#efe3cd',
    darkSwatch: '#1b1713',
    previewPattern: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(110,80,42,0.2) 100%)',
  },
  {
    id: 'grid',
    name: '康奈尔方格',
    swatch: '#fcfaf5',
    darkSwatch: '#141820',
    previewPattern:
      'linear-gradient(to right, rgba(100,116,139,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.22) 1px, transparent 1px)',
  },
  {
    id: 'lined',
    name: '横线稿纸',
    swatch: '#fdfbf6',
    darkSwatch: '#171614',
    previewPattern:
      'linear-gradient(to right, transparent 6px, rgba(225,29,72,0.32) 6px, rgba(225,29,72,0.32) 7px, transparent 7px), repeating-linear-gradient(to bottom, transparent 0px, transparent 5px, rgba(59,130,246,0.22) 5px, rgba(59,130,246,0.22) 6px)',
  },
  {
    id: 'default',
    name: '极简白纸',
    swatch: '#ffffff',
    darkSwatch: '#151b26',
    previewPattern: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(148,163,184,0.1) 100%)',
  },
];

export const FONT_THEMES: {
  id: FontThemeId;
  name: string;
  previewFont: string;
}[] = [
  { id: 'system', name: '现代黑体', previewFont: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif' },
  { id: 'song', name: '印刷宋体', previewFont: '"Source Han Serif SC", "Noto Serif SC", "Songti SC", "SimSun", serif' },
  { id: 'kai', name: '温润楷体', previewFont: '"LXGW WenKai", "Kaiti SC", "STKaiti", "KaiTi", serif' },
  { id: 'fangsong', name: '清秀仿宋', previewFont: '"FangSong", "STFangsong", "FangSong_GB2312", serif' },
  { id: 'yuanti', name: '柔和圆体', previewFont: '"Hiragino Sans GB", "YouYuan", "STYuanti", "Microsoft YaHei", sans-serif' },
  { id: 'serif-mix', name: '学术混排', previewFont: '"Times New Roman", "Songti SC", "Noto Serif SC", "SimSun", serif' },
  { id: 'mono-clean', name: '等宽精读', previewFont: '"JetBrains Mono", "Cascadia Code", "Consolas", "Microsoft YaHei", monospace' },
];

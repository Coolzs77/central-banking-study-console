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

export const PAPER_THEMES: {
  id: PaperThemeId;
  name: string;
  swatch: string;
  darkSwatch: string;
}[] = [
  { id: 'ivory', name: '道林考卷', swatch: '#fbf8f1', darkSwatch: '#191815' },
  { id: 'parchment', name: '古典羊皮纸', swatch: '#f4ead2', darkSwatch: '#1c1813' },
  { id: 'sage', name: '豆沙护眼', swatch: '#f1f7f2', darkSwatch: '#141b17' },
  { id: 'kraft', name: '温润牛皮', swatch: '#efe3cd', darkSwatch: '#1b1713' },
  { id: 'grid', name: '康奈尔方格', swatch: '#fcfaf5', darkSwatch: '#141820' },
  { id: 'lined', name: '横线稿纸', swatch: '#fdfbf6', darkSwatch: '#171614' },
  { id: 'default', name: '极简白纸', swatch: '#ffffff', darkSwatch: '#151b26' },
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

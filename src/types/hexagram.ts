export const TrigramName = {
  QIAN: '乾',
  DUI: '兑',
  LI: '离',
  ZHEN: '震',
  XUN: '巽',
  KAN: '坎',
  GEN: '艮',
  KUN: '坤',
} as const;

export type TrigramName = (typeof TrigramName)[keyof typeof TrigramName];

export interface Trigram {
  name: TrigramName;
  binary: number;
  symbol: string;
  element: string;
}

export interface LineData {
  index: number;
  name: string;
  yaoCi: string;
  translation?: string;
}

export interface HexagramData {
  kingWenNumber: number;
  binary: number;
  name: string;
  fullName: string;
  pinyin: string;
  guaCi: string;
  guaCiTranslation?: string;
  upperTrigram: Trigram;
  lowerTrigram: Trigram;
  lines: [LineData, LineData, LineData, LineData, LineData, LineData];
}

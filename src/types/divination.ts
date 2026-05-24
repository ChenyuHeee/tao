import type { HexagramData } from './hexagram';

export type TossValue = 6 | 7 | 8 | 9;

export interface TossResult {
  value: TossValue;
  label: string;
  symbol: string;
  isChanging: boolean;
  yinOrYang: 0 | 1;
  coins: [boolean, boolean, boolean];
}

export type DivinationPhase = 'welcome' | 'focusing' | 'tossing' | 'result';

export interface DivinationState {
  phase: DivinationPhase;
  question: string;
  tosses: TossResult[];
  benGua: HexagramData | null;
  zhiGua: HexagramData | null;
  changingLineIndices: number[];
  interpretation: InterpretationResult | null;
}

export interface InterpretationResult {
  ruleLabel: string;
  primaryText: string;
  primaryTranslation: string;
  primarySource: string;
  secondaryText?: string;
  secondaryTranslation?: string;
  secondarySource?: string;
}

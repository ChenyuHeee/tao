import { TrigramName, type Trigram } from '../types';

// Convention: bit0=bottom line, bit1=middle, bit2=top
export const TRIGRAMS: Record<TrigramName, Trigram> = {
  [TrigramName.QIAN]: { name: TrigramName.QIAN, binary: 0b111, symbol: '☰', element: '天' },
  [TrigramName.DUI]:  { name: TrigramName.DUI,  binary: 0b011, symbol: '☱', element: '泽' },
  [TrigramName.LI]:   { name: TrigramName.LI,   binary: 0b101, symbol: '☲', element: '火' },
  [TrigramName.ZHEN]: { name: TrigramName.ZHEN, binary: 0b001, symbol: '☳', element: '雷' },
  [TrigramName.XUN]:  { name: TrigramName.XUN,  binary: 0b110, symbol: '☴', element: '风' },
  [TrigramName.KAN]:  { name: TrigramName.KAN,  binary: 0b010, symbol: '☵', element: '水' },
  [TrigramName.GEN]:  { name: TrigramName.GEN,  binary: 0b100, symbol: '☶', element: '山' },
  [TrigramName.KUN]:  { name: TrigramName.KUN,  binary: 0b000, symbol: '☷', element: '地' },
};

const BINARY_TO_TRIGRAM: Record<number, Trigram> = {};
for (const trigram of Object.values(TRIGRAMS)) {
  BINARY_TO_TRIGRAM[trigram.binary] = trigram;
}

export function getTrigramByBinary(binary: number): Trigram | undefined {
  return BINARY_TO_TRIGRAM[binary];
}

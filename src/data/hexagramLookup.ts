import type { HexagramData } from '../types';
import { HEXAGRAMS_PART_1 } from './hexagramsPart1';
import { HEXAGRAMS_PART_2 } from './hexagramsPart2';

export const ALL_HEXAGRAMS: HexagramData[] = [...HEXAGRAMS_PART_1, ...HEXAGRAMS_PART_2];

const BINARY_TO_KW: number[] = new Array(64);
for (const h of ALL_HEXAGRAMS) {
  BINARY_TO_KW[h.binary] = h.kingWenNumber;
}

export function getHexagramByBinary(binary: number): HexagramData | undefined {
  const kw = BINARY_TO_KW[binary];
  return kw ? ALL_HEXAGRAMS[kw - 1] : undefined;
}

export function getHexagramByKingWenNumber(n: number): HexagramData | undefined {
  return ALL_HEXAGRAMS[n - 1];
}

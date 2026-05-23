import type { TossResult, HexagramData } from '../types';
import { getHexagramByBinary } from '../data/hexagramLookup';

export function computeHexagrams(
  tosses: [TossResult, TossResult, TossResult, TossResult, TossResult, TossResult]
): {
  benGua: HexagramData;
  zhiGua: HexagramData;
  changingLineIndices: number[];
} {
  let benBinary = 0;
  const changingLineIndices: number[] = [];

  for (let i = 0; i < 6; i++) {
    if (tosses[i].yinOrYang === 1) {
      benBinary |= (1 << i);
    }
    if (tosses[i].isChanging) {
      changingLineIndices.push(i);
    }
  }

  let zhiBinary = benBinary;
  for (const idx of changingLineIndices) {
    zhiBinary ^= (1 << idx);
  }

  const benGua = getHexagramByBinary(benBinary);
  const zhiGua = getHexagramByBinary(zhiBinary);

  if (!benGua || !zhiGua) {
    throw new Error(
      `Hexagram lookup failed: ben=0b${benBinary.toString(2).padStart(6, '0')}, zhi=0b${zhiBinary.toString(2).padStart(6, '0')}`
    );
  }

  return { benGua, zhiGua, changingLineIndices };
}

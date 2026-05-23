import type { TossResult, TossValue } from '../types';

function randomBoolean(): boolean {
  return crypto.getRandomValues(new Uint8Array(1))[0] >= 128;
}

export function tossCoins(): TossResult {
  const coins: [boolean, boolean, boolean] = [
    randomBoolean(),
    randomBoolean(),
    randomBoolean(),
  ];

  const yangCount = coins.filter(Boolean).length;
  const sum = (yangCount * 3) + ((3 - yangCount) * 2);
  const value = sum as TossValue;

  let label: string;
  let symbol: string;
  let isChanging: boolean;
  let yinOrYang: 0 | 1;

  switch (value) {
    case 6: label = '老阴'; symbol = '- - ×'; isChanging = true;  yinOrYang = 0; break;
    case 7: label = '少阳'; symbol = '—';     isChanging = false; yinOrYang = 1; break;
    case 8: label = '少阴'; symbol = '- -';   isChanging = false; yinOrYang = 0; break;
    case 9: label = '老阳'; symbol = '○ —';  isChanging = true;  yinOrYang = 1; break;
    default: throw new Error(`Invalid toss value: ${value}`);
  }

  return { value, label, symbol, isChanging, yinOrYang, coins };
}

import type { HexagramData, InterpretationResult } from '../types';
import { YONG_JIU, YONG_LIU } from '../data/specialTexts';

export function applyZhuXiRule(
  benGua: HexagramData,
  zhiGua: HexagramData,
  changingLineIndices: number[]
): InterpretationResult {
  const count = changingLineIndices.length;

  switch (count) {
    case 0:
      return {
        ruleLabel: '六爻不变 · 参考本卦卦辞',
        primaryText: benGua.guaCi,
        primarySource: `${benGua.fullName}（第${benGua.kingWenNumber}卦）卦辞`,
      };

    case 1: {
      const idx = changingLineIndices[0];
      const line = benGua.lines[idx];
      return {
        ruleLabel: '一处变爻 · 参考本卦变爻爻辞',
        primaryText: line.yaoCi,
        primarySource: `${benGua.fullName}·${line.name}`,
      };
    }

    case 2: {
      const upper = Math.max(...changingLineIndices);
      const lower = Math.min(...changingLineIndices);
      return {
        ruleLabel: '两处变爻 · 参考本卦两变爻爻辞（上爻为主）',
        primaryText: benGua.lines[upper].yaoCi,
        primarySource: `${benGua.fullName}·${benGua.lines[upper].name}（主）`,
        secondaryText: benGua.lines[lower].yaoCi,
        secondarySource: `${benGua.fullName}·${benGua.lines[lower].name}（辅）`,
      };
    }

    case 3:
      return {
        ruleLabel: '三处变爻 · 参考本卦与之卦卦辞（本卦为主）',
        primaryText: benGua.guaCi,
        primarySource: `${benGua.fullName}卦辞（主）`,
        secondaryText: zhiGua.guaCi,
        secondarySource: `${zhiGua.fullName}卦辞（辅）`,
      };

    case 4: {
      const unchanged = [0, 1, 2, 3, 4, 5].filter(i => !changingLineIndices.includes(i));
      const lower = Math.min(...unchanged);
      const upper = Math.max(...unchanged);
      return {
        ruleLabel: '四处变爻 · 参考之卦二不变爻爻辞（下爻为主）',
        primaryText: zhiGua.lines[lower].yaoCi,
        primarySource: `${zhiGua.fullName}·${zhiGua.lines[lower].name}（主）`,
        secondaryText: zhiGua.lines[upper].yaoCi,
        secondarySource: `${zhiGua.fullName}·${zhiGua.lines[upper].name}（辅）`,
      };
    }

    case 5: {
      const unchangedIdx = [0, 1, 2, 3, 4, 5].find(i => !changingLineIndices.includes(i))!;
      const line = zhiGua.lines[unchangedIdx];
      return {
        ruleLabel: '五处变爻 · 参考之卦不变爻爻辞',
        primaryText: line.yaoCi,
        primarySource: `${zhiGua.fullName}·${line.name}`,
      };
    }

    case 6:
      if (benGua.kingWenNumber === 1) {
        return {
          ruleLabel: '六爻皆变（乾卦）· 参考「用九」',
          primaryText: YONG_JIU.yaoCi,
          primarySource: '乾卦·用九',
        };
      }
      if (benGua.kingWenNumber === 2) {
        return {
          ruleLabel: '六爻皆变（坤卦）· 参考「用六」',
          primaryText: YONG_LIU.yaoCi,
          primarySource: '坤卦·用六',
        };
      }
      return {
        ruleLabel: '六爻皆变 · 参考之卦卦辞',
        primaryText: zhiGua.guaCi,
        primarySource: `${zhiGua.fullName}卦辞`,
      };

    default:
      throw new Error(`Unexpected changing line count: ${count}`);
  }
}

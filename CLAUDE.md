# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

An online Taoist I Ching divination tool (易经金钱卦) built with React + TypeScript + Vite. Users toss 3 virtual coins 6 times to generate a hexagram (本卦) and derived hexagram (之卦), with interpretation following Zhu Xi's rules.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (default: http://localhost:5173)
npm run build        # Type-check and production build
npm run preview      # Preview production build
npx tsc --noEmit     # Type-check only
```

## Architecture

### Data flow
```
CoinTossPanel → useDivination (reducer) → tossCoins() → computeHexagrams() → applyZhuXiRule()
                                              │                  │                   │
                                         coinToss.ts      hexagramEngine.ts   interpretation.ts
```

### State machine (useDivination.ts)
`welcome` → `focusing` → `tossing` → `result` → (RESET) → `welcome`

### Key algorithms
- **Toss**: 3 coins (Yang=3, Yin=2), sum = 6(老阴/变), 7(少阳), 8(少阴), 9(老阳/变)
- **Hexagram**: 6-bit binary (bit0=初爻…bit5=上爻), `binary = (upperTrigram << 3) | lowerTrigram`
- **Zhu Xi rules**: 7 cases based on changing line count (0-6), including 用九/用六 special cases
- Trigram binary convention: bit0=bottom line, bit2=top line (乾=7,坤=0,震=1,坎=2,兑=3,艮=4,离=5,巽=6)

### Directory structure
```
src/
  types/         # HexagramData, LineData, TossResult, DivinationState, etc.
  data/          # 64 hexagrams (Part1: 1-30, Part2: 31-64), trigrams, lookup
  engine/        # Pure functions: coinToss, hexagramEngine, interpretation
  hooks/         # useDivination (state machine), useCoinAnimation
  components/    # divination/ (views), hexagram/ (diagram), layout/, shared/
  styles/        # CSS variables, reset, fonts, animations
```

### Hexagram data (src/data/)
- `trigrams.ts` — 8 basic trigrams with binary values
- `hexagramsPart1.ts` — Hexagrams 1-30 (上经), each with gua ci + 6 yao ci
- `hexagramsPart2.ts` — Hexagrams 31-64 (下经)
- `hexagramLookup.ts` — `getHexagramByBinary(binary)` → returns HexagramData
- `specialTexts.ts` — 用九 and 用六 texts for Qian/Kun all-changing cases

### Styling
- CSS Modules for component isolation
- CSS custom properties in `variables.css` for the Chinese ink-wash theme
- No CSS framework or Tailwind
- Fonts: Noto Serif SC (body), ZCOOL QingKe HuangYou (headings)

### TypeScript strictness
- `verbatimModuleSyntax` enabled — use `import type` for type-only imports
- `erasableSyntaxOnly` enabled — no `enum`, use `as const` objects
- `noUnusedLocals` / `noUnusedParameters` enabled

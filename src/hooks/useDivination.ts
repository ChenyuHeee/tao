import { useReducer, useCallback } from 'react';
import type { DivinationState, TossResult } from '../types';
import { tossCoins } from '../engine/coinToss';
import { computeHexagrams } from '../engine/hexagramEngine';
import { applyZhuXiRule } from '../engine/interpretation';

type Action =
  | { type: 'START' }
  | { type: 'SET_QUESTION'; question: string }
  | { type: 'TOSS' }
  | { type: 'COMPLETE' }
  | { type: 'RESET' };

const initialState: DivinationState = {
  phase: 'welcome',
  question: '',
  tosses: [],
  benGua: null,
  zhiGua: null,
  changingLineIndices: [],
  interpretation: null,
};

function reducer(state: DivinationState, action: Action): DivinationState {
  switch (action.type) {
    case 'START':
      return { ...initialState, phase: 'focusing' };

    case 'SET_QUESTION':
      return { ...state, question: action.question, phase: 'tossing' };

    case 'TOSS': {
      if (state.tosses.length >= 6) return state;
      const result = tossCoins();
      const newTosses = [...state.tosses, result];
      return { ...state, tosses: newTosses };
    }

    case 'COMPLETE': {
      if (state.tosses.length !== 6) return state;
      const tosses6 = state.tosses as [TossResult, TossResult, TossResult, TossResult, TossResult, TossResult];
      const { benGua, zhiGua, changingLineIndices } = computeHexagrams(tosses6);
      const interpretation = applyZhuXiRule(benGua, zhiGua, changingLineIndices);
      return {
        ...state,
        phase: 'result',
        benGua,
        zhiGua,
        changingLineIndices,
        interpretation,
      };
    }

    case 'RESET':
      return { ...initialState, phase: 'welcome' };

    default:
      return state;
  }
}

export function useDivination() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    start: useCallback(() => dispatch({ type: 'START' }), []),
    setQuestion: useCallback((q: string) => dispatch({ type: 'SET_QUESTION', question: q }), []),
    toss: useCallback(() => dispatch({ type: 'TOSS' }), []),
    complete: useCallback(() => dispatch({ type: 'COMPLETE' }), []),
    reset: useCallback(() => dispatch({ type: 'RESET' }), []),
  };
}

import { useState, useCallback, useRef } from 'react';

export interface CoinAnimationState {
  isFlipping: boolean;
  showResult: boolean;
  triggerFlip: () => void;
}

export function useCoinAnimation(): CoinAnimationState {
  const [isFlipping, setIsFlipping] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const triggerFlip = useCallback(() => {
    if (isFlipping) return;

    setShowResult(false);
    setIsFlipping(true);

    timeoutRef.current = setTimeout(() => {
      setIsFlipping(false);
      setShowResult(true);
    }, 800);
  }, [isFlipping]);

  return { isFlipping, showResult, triggerFlip };
}

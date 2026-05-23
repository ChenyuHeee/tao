import { useEffect, useRef } from 'react';
import type { TossResult } from '../../types';
import { useCoinAnimation } from '../../hooks/useCoinAnimation';
import { InkButton } from '../shared/InkButton';
import styles from './CoinTossPanel.module.css';

interface CoinTossPanelProps {
  question: string;
  tosses: TossResult[];
  onToss: () => void;
  onComplete: () => void;
}

export function CoinTossPanel({ question, tosses, onToss, onComplete }: CoinTossPanelProps) {
  const { isFlipping, showResult, triggerFlip } = useCoinAnimation();
  const lastToss = tosses[tosses.length - 1] ?? null;
  const count = tosses.length;
  const completedRef = useRef(false);

  useEffect(() => {
    if (count === 6 && !completedRef.current) {
      completedRef.current = true;
      const timer = setTimeout(onComplete, 600);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  function handleToss() {
    if (count >= 6 || isFlipping) return;
    triggerFlip();
    setTimeout(() => onToss(), 400);
  }

  return (
    <div className={styles.panel}>
      <p className={styles.question}>所问：{question}</p>

      <div className={styles.counter}>
        第 <span className={styles.current}>{Math.min(count + 1, 6)}</span>
        <span className={styles.separator}>/</span>6 次摇卦
      </div>

      <div className={styles.coinArea}>
        {[0, 1, 2].map(i => (
          <div key={i} className={`${styles.coin} ${isFlipping ? styles.flipping : ''}`}>
            <div className={styles.coinFace}>
              {showResult && lastToss
                ? (lastToss.coins[i] ? '阳' : '阴')
                : '⚭'}
            </div>
          </div>
        ))}
      </div>

      {lastToss && showResult && (
        <div className={styles.resultLabel}>
          <span className={styles.resultSymbol}>{lastToss.symbol}</span>
          <span className={styles.resultName}>{lastToss.label}</span>
        </div>
      )}

      {tosses.length > 0 && (
        <div className={styles.buildup}>
          <p className={styles.buildupTitle}>已得之爻（从下往上）</p>
          {[...tosses].reverse().map((t, i) => {
            const actualIndex = tosses.length - 1 - i;
            return (
              <div key={actualIndex} className={styles.lineRow} style={{ animationDelay: `${i * 0.05}s` }}>
                {t.isChanging ? (
                  <span className={styles.lineChanging}>{t.value === 6 ? '×' : '○'}</span>
                ) : (
                  <span className={styles.lineStable} />
                )}
                {t.yinOrYang === 1 ? (
                  <div className={`${styles.lineBar} ${styles.lineBarSolid}`} />
                ) : (
                  <div className={styles.lineBarBroken}>
                    <span /><span />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className={styles.tossButton}>
        {count < 6 && (
          <InkButton onClick={handleToss} disabled={isFlipping}>
            {count === 0 ? '摇第一爻' : `摇第${count + 1}爻`}
          </InkButton>
        )}
      </div>
    </div>
  );
}

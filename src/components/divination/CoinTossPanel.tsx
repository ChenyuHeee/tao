import { useEffect, useRef } from 'react';
import type { TossResult } from '../../types';
import { useCoinAnimation } from '../../hooks/useCoinAnimation';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';
import { InkButton } from '../shared/InkButton';
import { Coin } from './Coin';
import styles from './CoinTossPanel.module.css';

interface CoinTossPanelProps {
  question: string;
  tosses: TossResult[];
  onToss: () => void;
  onComplete: () => void;
}

export function CoinTossPanel({ question, tosses, onToss, onComplete }: CoinTossPanelProps) {
  const { isFlipping, showResult, triggerFlip } = useCoinAnimation();
  const { playTossSound } = useAudioFeedback();
  const lastToss = tosses[tosses.length - 1] ?? null;
  const count = tosses.length;
  const completedRef = useRef(false);

  useEffect(() => {
    if (count === 6 && !completedRef.current) {
      completedRef.current = true;
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  function handleToss() {
    if (count >= 6 || isFlipping) return;
    triggerFlip();
    playTossSound();
    setTimeout(() => onToss(), 350);
  }

  return (
    <div className={styles.panel}>
      <p className={styles.question}>所问：{question}</p>

      <div className={styles.counter}>
        第 <span className={styles.counterNum}>{Math.min(count + 1, 6)}</span> / 6 次
      </div>

      {/* Coins */}
      <div className={styles.coins}>
        {[0, 1, 2].map(i => (
          <Coin
            key={`${count}-${i}`}
            face={showResult && lastToss ? (lastToss.coins[i] ? 'yang' : 'yin') : null}
            flipping={isFlipping}
            revealed={showResult}
            delay={i * 50}
          />
        ))}
      </div>

      {/* Result label */}
      {lastToss && showResult && (
        <div className={styles.resultLabel}>
          <span className={`${lastToss.isChanging ? styles.resultNameChanging : ''} ${styles.resultName}`}>
            {lastToss.label}{lastToss.isChanging ? ' · 变爻' : ''}
          </span>
        </div>
      )}

      {/* Line buildup */}
      {tosses.length > 0 && (
        <div className={styles.buildup}>
          <p className={styles.buildupLabel}>已得之爻</p>
          {tosses.map((t, i) => (
            <div
              key={i}
              className={styles.line}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {t.isChanging ? (
                <span className={styles.lineMark}>{t.value === 6 ? '×' : '○'}</span>
              ) : (
                <span className={styles.lineMarkEmpty} />
              )}
              {t.yinOrYang === 1 ? (
                <div className={styles.lineBar}>
                  <div className={styles.lineYang} />
                </div>
              ) : (
                <div className={styles.lineBar}>
                  <div className={styles.lineYin}>
                    <span /><span />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Action */}
      <div className={styles.action}>
        {count < 6 ? (
          <InkButton onClick={handleToss} disabled={isFlipping}>
            {count === 0 ? '起卦' : '继续'}
          </InkButton>
        ) : (
          count === 6 && <div className={styles.waiting}>推演中...</div>
        )}
      </div>
    </div>
  );
}

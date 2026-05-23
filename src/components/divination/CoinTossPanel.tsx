import { useEffect, useRef } from 'react';
import type { TossResult } from '../../types';
import { useCoinAnimation } from '../../hooks/useCoinAnimation';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';
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
    setTimeout(() => onToss(), 400);
  }

  return (
    <div className={styles.panel}>
      <p className={styles.question}>所问：{question}</p>

      <div className={styles.counter}>
        第{' '}
        <span className={styles.counterCurrent}>{Math.min(count + 1, 6)}</span>
        <span className={styles.counterSep}>/</span>
        <span className={styles.counterTotal}>6</span>{' '}
        次摇卦
      </div>

      {/* 3D Coin Stage */}
      <div className={`${styles.coinStage} ${isFlipping ? styles.flipping : ''}`}>
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className={styles.coin3d}
            style={{ animationDelay: isFlipping ? `${i * 60}ms` : '0ms' }}
          >
            {showResult && lastToss ? (
              <div
                className={`${styles.coinResult} ${
                  lastToss.coins[i] ? styles.coinResultYang : styles.coinResultYin
                }`}
              >
                {lastToss.coins[i] ? '阳' : '阴'}
              </div>
            ) : (
              <div className={styles.coinInner}>
                <div className={`${styles.coinFace3d} ${styles.coinFront}`}>陽</div>
                <div className={`${styles.coinFace3d} ${styles.coinBack}`}>陰</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Toss Result */}
      {lastToss && showResult && (
        <div className={styles.tossResult}>
          <span className={styles.tossSymbol}>{lastToss.symbol}</span>
          <span className={`${styles.tossName} ${lastToss.isChanging ? styles.tossChanging : ''}`}>
            {lastToss.label}
            {lastToss.isChanging && '（变爻）'}
          </span>
        </div>
      )}

      {/* Line Buildup */}
      {tosses.length > 0 && (
        <div className={styles.buildup}>
          <p className={styles.buildupTitle}>
            已得之爻（下为初）
          </p>
          {tosses.map((t, i) => (
            <div
              key={i}
              className={`${styles.lineRow} ${styles.lineInitial}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {t.isChanging ? (
                <span className={`${styles.lineChangeMark} ${styles.lineChangeMarkPulse}`}>
                  {t.value === 6 ? '×' : '○'}
                </span>
              ) : (
                <span className={styles.lineStableMark} />
              )}
              {t.yinOrYang === 1 ? (
                <div className={styles.lineYinOrYang}>
                  <div className={styles.lineBarSolid} />
                </div>
              ) : (
                <div className={styles.lineYinOrYang}>
                  <div className={styles.lineBarBroken}>
                    <span />
                    <span />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Toss Button */}
      <div className={styles.tossAction}>
        {count < 6 && (
          <InkButton
            onClick={handleToss}
            disabled={isFlipping}
            variant="primary"
          >
            {count === 0 ? '摇第一爻' : `摇第${count + 1}爻`}
          </InkButton>
        )}
        {count === 6 && !completedRef.current && (
          <p style={{ textAlign: 'center', color: 'var(--ink-gray)', fontSize: '0.9rem' }}>
            起卦完成，正在推演...
          </p>
        )}
      </div>
    </div>
  );
}

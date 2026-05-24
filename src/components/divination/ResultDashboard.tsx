import { useState } from 'react';
import type { DivinationState } from '../../types';
import { HexagramDiagram } from '../hexagram/HexagramDiagram';
import { HexagramInfo } from '../hexagram/HexagramInfo';
import { InterpretationCard } from './InterpretationCard';
import { InkButton } from '../shared/InkButton';
import styles from './ResultDashboard.module.css';

interface ResultDashboardProps {
  state: DivinationState;
  onReset: () => void;
}

export function ResultDashboard({ state, onReset }: ResultDashboardProps) {
  const { question, benGua, zhiGua, changingLineIndices, interpretation } = state;
  const [confirmReset, setConfirmReset] = useState(false);

  if (!benGua || !zhiGua || !interpretation) return null;

  const hasChange = changingLineIndices.length > 0;

  function handleReset() {
    if (confirmReset) {
      onReset();
    } else {
      setConfirmReset(true);
    }
  }

  return (
    <div className={styles.dashboard}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <p className={styles.question}>探讨之事：{question}</p>
        <p className={styles.warning}>
          以下内容由算法自动生成，仅供娱乐参考，不具有科学依据
        </p>
      </div>

      {/* Main: hexagrams left, interpretation right */}
      <div className={styles.main}>
        {/* Left — hexagrams */}
        <div className={styles.hexPanel}>
          <div className={styles.hexPair}>
            <div className={styles.hexCol}>
              <p className={styles.hexLabel}>本 卦</p>
              <HexagramInfo hexagram={benGua} />
              <HexagramDiagram
                hexagram={benGua}
                changingLineIndices={hasChange ? changingLineIndices : []}
                showLabels={false}
              />
            </div>

            {hasChange ? (
              <>
                <div className={styles.arrow}>→</div>
                <div className={styles.hexCol}>
                  <p className={styles.hexLabel}>之 卦</p>
                  <HexagramInfo hexagram={zhiGua} />
                  <HexagramDiagram hexagram={zhiGua} showLabels={false} />
                </div>
              </>
            ) : (
              <div className={styles.hexCol}>
                <p className={styles.hexLabel}>之 卦</p>
                <div className={styles.stableNote}>无变爻</div>
              </div>
            )}
          </div>
        </div>

        {/* Right — interpretation */}
        <div className={styles.interpPanel}>
          <InterpretationCard interpretation={interpretation} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.warningBottom}>
          以上内容为《易经》卦爻辞的自动化解读，仅供传统文化交流及休闲娱乐参考
        </p>

        {confirmReset && (
          <p className={styles.reminder}>
            传统上认为，对同一件事短期内不宜反复推演。卦为心镜，照见当下即是。若确要重来，请再点一次。
          </p>
        )}

        <div className={styles.actions}>
          <InkButton variant="secondary" onClick={handleReset}>
            {confirmReset ? '确要认真重来' : '重新推演'}
          </InkButton>
        </div>
      </div>
    </div>
  );
}

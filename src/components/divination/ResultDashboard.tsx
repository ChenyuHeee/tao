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

  if (!benGua || !zhiGua || !interpretation) return null;

  const hasChange = changingLineIndices.length > 0;

  return (
    <div className={styles.dashboard}>
      <p className={styles.question}>探讨之事：{question}</p>

      <p className={styles.warning}>
        以下内容由算法自动生成，仅供娱乐参考，不具有科学依据，请勿作为人生决策的依据。
      </p>

      <div className={styles.grid}>
        <div className={styles.col}>
          <p className={styles.colLabel}>本 卦</p>
          <HexagramInfo hexagram={benGua} />
          <HexagramDiagram
            hexagram={benGua}
            changingLineIndices={hasChange ? changingLineIndices : []}
          />
        </div>

        {hasChange ? (
          <div className={styles.col}>
            <p className={styles.colLabel}>之 卦</p>
            <HexagramInfo hexagram={zhiGua} />
            <HexagramDiagram hexagram={zhiGua} />
          </div>
        ) : (
          <div className={styles.col}>
            <p className={styles.colLabel}>之 卦</p>
            <div className={styles.stableNote}>无变爻</div>
          </div>
        )}
      </div>

      {hasChange && (
        <div className={styles.arrow}>
          <span>→</span>
        </div>
      )}

      <div className={styles.interp}>
        <InterpretationCard interpretation={interpretation} />
      </div>

      <p className={styles.warningBottom}>
        以上内容为《易经》卦爻辞的自动化解读，仅供传统文化交流及休闲娱乐参考。
      </p>

      <div className={styles.actions}>
        <InkButton variant="secondary" onClick={onReset}>
          重新推演
        </InkButton>
      </div>
    </div>
  );
}

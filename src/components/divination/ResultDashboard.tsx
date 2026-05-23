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
      <p className={styles.question}>所问：{question}</p>

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

      <div className={styles.actions}>
        <InkButton variant="secondary" onClick={onReset}>
          再占一卦
        </InkButton>
      </div>
    </div>
  );
}

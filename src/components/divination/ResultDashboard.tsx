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
        <div className={styles.column}>
          <p className={styles.columnLabel}>本 卦</p>
          <HexagramInfo hexagram={benGua} />
          <HexagramDiagram
            hexagram={benGua}
            changingLineIndices={hasChange ? changingLineIndices : []}
          />
        </div>

        {hasChange ? (
          <>
            <div className={styles.arrowWrap}>
              <span className={styles.arrow}>→</span>
            </div>
            <div className={styles.column}>
              <p className={styles.columnLabel}>之 卦</p>
              <HexagramInfo hexagram={zhiGua} />
              <HexagramDiagram hexagram={zhiGua} />
            </div>
          </>
        ) : (
          <div className={styles.column}>
            <p className={styles.columnLabel}>六爻不变</p>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--ink-gray)', padding: '2rem 0' }}>
              无变爻，事态稳定
            </p>
          </div>
        )}
      </div>

      <div className={styles.interpWrap}>
        <InterpretationCard interpretation={interpretation} />
      </div>

      <div className={styles.actions}>
        <InkButton onClick={onReset}>再占一卦</InkButton>
      </div>
    </div>
  );
}

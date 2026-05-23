import type { InterpretationResult } from '../../types';
import styles from './InterpretationCard.module.css';

interface InterpretationCardProps {
  interpretation: InterpretationResult;
}

export function InterpretationCard({ interpretation }: InterpretationCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.ruleLabel}>{interpretation.ruleLabel}</p>

      <p className={styles.primaryText}>{interpretation.primaryText}</p>
      <p className={styles.primarySource}>{interpretation.primarySource}</p>

      {interpretation.secondaryText && (
        <>
          <div className={styles.divider} />
          <p className={styles.secondaryText}>{interpretation.secondaryText}</p>
          {interpretation.secondarySource && (
            <p className={styles.secondarySource}>{interpretation.secondarySource}</p>
          )}
        </>
      )}
    </div>
  );
}

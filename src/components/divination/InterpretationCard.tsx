import { useState } from 'react';
import type { InterpretationResult } from '../../types';
import styles from './InterpretationCard.module.css';

interface InterpretationCardProps {
  interpretation: InterpretationResult;
}

function Block({
  text,
  translation,
  source,
  isSecondary,
}: {
  text: string;
  translation: string;
  source: string;
  isSecondary?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={isSecondary ? styles.secondaryBlock : styles.primaryBlock}>
      {/* Classical text — always visible */}
      <p className={isSecondary ? styles.classicalSmall : styles.classical}>{text}</p>
      <p className={styles.src}>{source}</p>

      {/* Modern translation — collapsible */}
      {translation && translation !== text && (
        <details
          className={styles.details}
          open={open}
          onToggle={e => setOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary className={styles.summary}>
            {open ? '收起白话' : '查看白话翻译'}
          </summary>
          <p className={isSecondary ? styles.translationSmall : styles.translation}>
            {translation}
          </p>
        </details>
      )}
    </div>
  );
}

export function InterpretationCard({ interpretation }: InterpretationCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.rule}>{interpretation.ruleLabel}</p>

      <Block
        text={interpretation.primaryText}
        translation={interpretation.primaryTranslation}
        source={interpretation.primarySource}
      />

      {interpretation.secondaryText && (
        <>
          <div className={styles.divider} />
          <Block
            text={interpretation.secondaryText}
            translation={interpretation.secondaryTranslation || interpretation.secondaryText}
            source={interpretation.secondarySource || ''}
            isSecondary
          />
        </>
      )}
    </div>
  );
}

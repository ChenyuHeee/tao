import { useState } from 'react';
import { InkButton } from '../shared/InkButton';
import styles from './FocusQuestion.module.css';

interface FocusQuestionProps {
  onSubmit: (question: string) => void;
}

export function FocusQuestion({ onSubmit }: FocusQuestionProps) {
  const [question, setQuestion] = useState('');

  return (
    <div className={styles.container}>
      <label className={styles.label}>请默想您想探讨的事情，然后写下来：</label>
      <textarea
        className={styles.textarea}
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="例如：我目前在某个方向上的处境如何？"
        rows={3}
      />
      <div className={styles.action}>
        <InkButton onClick={() => onSubmit(question || '未言明之事')}>
          开始推演
        </InkButton>
      </div>
    </div>
  );
}

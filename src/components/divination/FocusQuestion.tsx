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
      <label className={styles.label}>静心凝神，默想你所关心的事，然后落笔：</label>

      <div className={styles.wrapper}>
        <textarea
          className={styles.textarea}
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="落笔处..."
          rows={4}
        />
      </div>

      <p className={styles.hint}>
        不必过于具体，心之所向即是
      </p>

      <div className={styles.action}>
        <InkButton onClick={() => onSubmit(question || '未言明之事')}>
          开始推演
        </InkButton>
      </div>
    </div>
  );
}

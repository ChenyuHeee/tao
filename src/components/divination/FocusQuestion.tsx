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
      <label className={styles.label}>默想你的问题，然后写下来：</label>
      <textarea
        className={styles.textarea}
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="例如：我这次去某地发展是否顺利？"
        rows={3}
      />
      <div className={styles.actions}>
        <InkButton onClick={() => onSubmit(question || '未言明之事')}>
          开始摇卦
        </InkButton>
      </div>
    </div>
  );
}

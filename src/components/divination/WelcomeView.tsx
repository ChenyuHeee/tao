import { InkButton } from '../shared/InkButton';
import styles from './WelcomeView.module.css';

interface WelcomeViewProps {
  onStart: () => void;
}

export function WelcomeView({ onStart }: WelcomeViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <p>金钱卦法源于《易经》，是最古老、最经典的占卜方法之一。以三枚铜钱摇掷六次，依阴阳变化而成卦，据朱熹解卦法参断吉凶。</p>
        <p>占卜之道，心诚则灵。请先静心凝神，专注于你想要请教的一件事情。</p>
      </div>
      <div className={styles.actions}>
        <InkButton onClick={onStart}>开始摇卦</InkButton>
      </div>
    </div>
  );
}

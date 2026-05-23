import { InkButton } from '../shared/InkButton';
import styles from './WelcomeView.module.css';

interface WelcomeViewProps {
  onStart: () => void;
}

export function WelcomeView({ onStart }: WelcomeViewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        本站所有卦象解读由算法自动生成，仅供娱乐参考，不具有科学依据。
      </div>

      <div className={styles.text}>
        <p>
          本工具基于《易经》六爻理论，以三枚铜钱摇掷六次，依阴阳变化推演卦象。这是一个了解中国传统卦爻文化的自动化工具，旨在帮助用户体验和探索《易经》的智慧。
        </p>
        <p>
          请理性看待解读结果，勿将其作为人生决策的依据。解读内容为传统文化语境下的开放性探讨，不构成对个人命运的断言或承诺。
        </p>
      </div>
      <div className={styles.action}>
        <InkButton onClick={onStart}>开始体验</InkButton>
      </div>
    </div>
  );
}

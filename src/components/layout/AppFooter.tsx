import { useState } from 'react';
import { DisclaimerModal } from '../shared/DisclaimerModal';
import styles from './AppFooter.module.css';

export function AppFooter() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        <p>「易无思也，无为也，寂然不动，感而遂通天下之故」—《周易·系辞》</p>
        <p className={styles.disclaimer}>
          本站为非商业性个人网站，所有卦象解读由算法自动生成，仅供传统文化交流与休闲娱乐参考，不提供任何收费服务。
        </p>
        <p>
          <button className={styles.link} onClick={() => setShowDisclaimer(true)}>
            免责声明
          </button>
        </p>
      </footer>
      {showDisclaimer && <DisclaimerModal onClose={() => setShowDisclaimer(false)} />}
    </>
  );
}

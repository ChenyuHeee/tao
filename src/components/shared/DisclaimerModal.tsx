import { useEffect } from 'react';
import styles from './DisclaimerModal.module.css';

interface DisclaimerModalProps {
  onClose: () => void;
}

export function DisclaimerModal({ onClose }: DisclaimerModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2 className={styles.title}>免责声明</h2>

        <div className={styles.section}>
          <h3>一、服务性质</h3>
          <p>本网站是一个基于《易经》六爻理论的自动化卦象解读工具，仅供传统文化交流与休闲娱乐参考。所有解读内容均由算法程序自动生成，不具有任何科学依据或预测功能，不构成任何形式的专业建议（包括但不限于医疗、法律、财务、心理咨询等）。</p>
        </div>

        <div className={styles.section}>
          <h3>二、内容说明</h3>
          <p>本网站输出的卦象解读基于《易经》原文及传统注释，由计算机算法自动匹配生成，不代表网站运营者的个人观点或立场。解读内容具有主观性与象征性，仅为传统文化语境下的开放性探讨，并非对用户个人命运的断言或承诺。</p>
        </div>

        <div className={styles.section}>
          <h3>三、个人责任</h3>
          <p>用户基于本网站提供的任何信息所做出的个人选择、决策及行动，其全部后果与风险均由用户本人独立判断和承担。请理性看待解读结果，避免产生不必要的焦虑或依赖心理。</p>
        </div>

        <div className={styles.section}>
          <h3>四、非商业性质</h3>
          <p>本网站为非商业性个人网站，不提供任何收费服务，不收集用户的个人信息（姓名、联系方式、生辰八字等），不接广告、不卖产品、不接受打赏。</p>
        </div>

        <div className={styles.section}>
          <h3>五、内容不担保</h3>
          <p>本网站对卦象解读内容的准确性、完整性、可靠性不作任何明示或默示的保证。在法律允许的最大范围内，本网站及其运营方对因使用本网站而产生的任何直接或间接损害均不承担法律责任。</p>
        </div>

        <button className={styles.closeBtn} onClick={onClose}>
          已了解
        </button>
      </div>
    </div>
  );
}

import type { HexagramData } from '../../types';
import styles from './HexagramInfo.module.css';

interface HexagramInfoProps {
  hexagram: HexagramData;
  label?: string;
}

export function HexagramInfo({ hexagram, label }: HexagramInfoProps) {
  return (
    <div className={styles.info}>
      {label && <p className={styles.number}>{label}</p>}
      <p className={styles.fullName}>{hexagram.fullName}</p>
      <p className={styles.number}>第{hexagram.kingWenNumber}卦</p>
      <p className={styles.trigrams}>
        {hexagram.lowerTrigram.symbol}下 {hexagram.upperTrigram.symbol}上
      </p>
    </div>
  );
}

import type { HexagramData } from '../../types';
import styles from './HexagramInfo.module.css';

interface HexagramInfoProps {
  hexagram: HexagramData;
}

export function HexagramInfo({ hexagram }: HexagramInfoProps) {
  return (
    <div className={styles.info}>
      <p className={styles.name}>{hexagram.fullName}</p>
      <p className={styles.meta}>第 {hexagram.kingWenNumber} 卦</p>
      <p className={styles.symbols}>
        {hexagram.lowerTrigram.symbol} 下　{hexagram.upperTrigram.symbol} 上
      </p>
    </div>
  );
}

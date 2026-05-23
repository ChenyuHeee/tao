import type { HexagramData } from '../../types';
import styles from './HexagramDiagram.module.css';

interface HexagramDiagramProps {
  hexagram: HexagramData;
  changingLineIndices?: number[];
  showLabels?: boolean;
}

export function HexagramDiagram({ hexagram, changingLineIndices = [], showLabels = true }: HexagramDiagramProps) {
  return (
    <div className={styles.diagram}>
      {[...hexagram.lines].reverse().map((line, i) => {
        const actualIndex = 5 - i;
        const isYang = (hexagram.binary >> actualIndex) & 1;
        const isChanging = changingLineIndices.includes(actualIndex);

        return (
          <div key={actualIndex} className={styles.lineContainer}>
            {isChanging ? (
              <span className={styles.changeMark}>{isYang ? '○' : '×'}</span>
            ) : (
              <span className={styles.noMark} />
            )}
            {isYang ? (
              <div className={styles.lineSolid} />
            ) : (
              <div className={styles.lineBroken}>
                <span />
                <span />
              </div>
            )}
            {showLabels && (
              <span className={styles.lineLabel}>{line.name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

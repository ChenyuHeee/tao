import styles from './InkBackground.module.css';

const PARTICLES = [
  { left: '5%', delay: '0s', driftX: '40px', driftY: '-120px', size: '3px', duration: '18s' },
  { left: '15%', delay: '2s', driftX: '-30px', driftY: '-140px', size: '5px', duration: '22s' },
  { left: '25%', delay: '5s', driftX: '50px', driftY: '-100px', size: '2px', duration: '16s' },
  { left: '35%', delay: '1s', driftX: '-20px', driftY: '-160px', size: '6px', duration: '20s' },
  { left: '48%', delay: '7s', driftX: '35px', driftY: '-130px', size: '3px', duration: '24s' },
  { left: '55%', delay: '3s', driftX: '-40px', driftY: '-110px', size: '4px', duration: '19s' },
  { left: '65%', delay: '9s', driftX: '25px', driftY: '-150px', size: '2px', duration: '21s' },
  { left: '75%', delay: '4s', driftX: '-50px', driftY: '-90px', size: '5px', duration: '17s' },
  { left: '85%', delay: '6s', driftX: '45px', driftY: '-135px', size: '3px', duration: '23s' },
  { left: '93%', delay: '8s', driftX: '-35px', driftY: '-145px', size: '4px', duration: '20s' },
];

export function InkBackground() {
  return (
    <div className={styles.bg}>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            '--drift-x': p.driftX,
            '--drift-y': p.driftY,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

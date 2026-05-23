import styles from './AppHeader.module.css';

export function AppHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>易经金钱卦</h1>
      <p className={styles.subtitle}>诚心默祷 · 有感斯应</p>
    </header>
  );
}

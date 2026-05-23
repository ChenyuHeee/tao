import styles from './AppHeader.module.css';

export function AppHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>易经卦象解读</h1>
      <p className={styles.subtitle}>传统文化交流 · 仅供娱乐参考</p>
    </header>
  );
}

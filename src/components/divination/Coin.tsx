import styles from './Coin.module.css';

interface CoinProps {
  face: 'yang' | 'yin' | null;
  flipping: boolean;
  revealed: boolean;
  delay?: number;
}

export function Coin({ face, flipping, revealed, delay = 0 }: CoinProps) {
  return (
    <div
      className={`${styles.coin} ${flipping ? styles.flipping : ''} ${revealed ? styles.result : ''}`}
      style={{ animationDelay: flipping ? `${delay}ms` : '0ms' }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="50" cy="50" r="48" fill="url(#copperGrad)" stroke="url(#rimGrad)" strokeWidth="2" />

        {/* Raised inner ring */}
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
        <circle cx="50" cy="50" r="37" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />

        {/* Square hole */}
        <rect x="36" y="36" width="28" height="28" rx="2" fill="var(--bg-paper)" />
        <rect x="36" y="36" width="28" height="28" rx="2" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />

        {/* Face character */}
        {revealed && face && (
          <text
            x="50" y="56"
            textAnchor="middle"
            fontFamily="var(--font-text)"
            fontSize="18"
            fontWeight="700"
            fill="var(--ink)"
            opacity="0.85"
          >
            {face === 'yang' ? '陽' : '陰'}
          </text>
        )}

        {/* Gradients */}
        <defs>
          <radialGradient id="copperGrad" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#dcc8a0" />
            <stop offset="40%" stopColor="#c4a878" />
            <stop offset="80%" stopColor="#a88550" />
            <stop offset="100%" stopColor="#8b6a3a" />
          </radialGradient>
          <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0cfa8" />
            <stop offset="50%" stopColor="#8b6a3a" />
            <stop offset="100%" stopColor="#c4a878" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

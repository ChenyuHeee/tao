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
        <defs>
          {/* Main bronze gradient — aged, muted */}
          <radialGradient id="bronzeBody" cx="38%" cy="32%" r="60%">
            <stop offset="0%" stopColor="#d4c4a0" />
            <stop offset="35%" stopColor="#b8a278" />
            <stop offset="70%" stopColor="#8b7048" />
            <stop offset="100%" stopColor="#5c4328" />
          </radialGradient>

          {/* Rim gradient — catching light */}
          <linearGradient id="bronzeRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8c8a8" />
            <stop offset="20%" stopColor="#9a8048" />
            <stop offset="60%" stopColor="#6d4d28" />
            <stop offset="100%" stopColor="#b09868" />
          </linearGradient>

          {/* Subtle patina texture */}
          <radialGradient id="patinaSpot" cx="65%" cy="70%" r="30%">
            <stop offset="0%" stopColor="rgba(107, 138, 122, 0.18)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Inner shadow filter */}
          <filter id="coinShadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#2a1a0a" floodOpacity="0.25" />
          </filter>

          {/* Ancient seal-style border for Yang face */}
          <clipPath id="innerClip">
            <circle cx="50" cy="50" r="36" />
          </clipPath>
        </defs>

        {/* Outer rim */}
        <circle cx="50" cy="50" r="48" fill="url(#bronzeBody)" stroke="url(#bronzeRim)" strokeWidth="2" filter="url(#coinShadow)" />

        {/* Patina overlay */}
        <circle cx="50" cy="50" r="48" fill="url(#patinaSpot)" />

        {/* Raised border ring */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="39" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

        {/* Inner field — slightly recessed */}
        <circle cx="50" cy="50" r="36" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />

        {/* Square hole */}
        <rect x="37" y="37" width="26" height="26" rx="1.5" fill="var(--bg-silk)" />
        <rect x="37" y="37" width="26" height="26" rx="1.5" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />

        {/* Four corner rays (traditional coin detail) */}
        <line x1="24" y1="24" x2="32" y2="32" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
        <line x1="76" y1="24" x2="68" y2="32" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
        <line x1="24" y1="76" x2="32" y2="68" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />
        <line x1="76" y1="76" x2="68" y2="68" stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" />

        {/* Outer inscription ring (faint, worn) */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" strokeDasharray="0.8 1.5" />

        {/* Face character */}
        {revealed && face && (
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fontFamily="var(--font-text)"
            fontSize="20"
            fontWeight="700"
            fill="var(--ink)"
            opacity="0.8"
          >
            {face === 'yang' ? '陽' : '陰'}
          </text>
        )}
      </svg>
    </div>
  );
}

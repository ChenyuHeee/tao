import { useState, useCallback, type ButtonHTMLAttributes, type ReactNode, type MouseEvent } from 'react';
import styles from './InkButton.module.css';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let nextRippleId = 0;

interface InkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function InkButton({ variant = 'primary', children, className, onClick, ...props }: InkButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple: Ripple = {
      id: nextRippleId++,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setRipples(prev => [...prev, ripple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 600);

    onClick?.(e);
  }, [onClick]);

  const cls = [styles.button, variant === 'secondary' ? styles.secondary : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} onClick={handleClick} {...props}>
      {ripples.map(r => (
        <span
          key={r.id}
          className={styles.ripple}
          style={{ left: r.x, top: r.y }}
        />
      ))}
      <span className={styles.content}>{children}</span>
    </button>
  );
}

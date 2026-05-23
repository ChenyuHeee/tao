import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './InkButton.module.css';

interface InkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function InkButton({ variant = 'primary', children, className, ...props }: InkButtonProps) {
  const cls = [styles.button, variant === 'secondary' ? styles.secondary : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

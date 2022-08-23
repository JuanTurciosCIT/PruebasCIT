import { memo } from 'react';
import styles from './gradientButton.module.scss';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const GradientButton = memo(function GradientButton({ children, onClick }: GradientButtonProps) {
  return (
    <button className={styles.gradientBtn} onClick={onClick}>
      {children}
    </button>
  );
});
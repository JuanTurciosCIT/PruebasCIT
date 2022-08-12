import Image from 'next/image';

import styles from './gradientButton.module.scss';


export default function GradiantButton({ children } : { children: React.ReactNode}) {
  return <button className={styles.gradiantBtn}>{children}</button>
}


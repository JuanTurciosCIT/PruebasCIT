import { memo } from 'react';
import Link from 'next/link';

import styles from './customButton.module.scss';

export const CustomButton = memo(function CustomButton({ children, path }: { path?: string, children: React.ReactNode }) {
  return <div className={styles.btnWrapper}>
    <Link href={path || ''} scroll={false}>
      <button className={styles.customBtn}>{children}</button>
    </Link>
  </div>
});
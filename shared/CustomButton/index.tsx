import { memo } from 'react';
import Link from 'next/link';

import styles from './customButton.module.scss';

export default memo(function CustomButton({ children }: { children: React.ReactNode }) {
  return <div className={styles.btnWrapper}>
    <Link href='/contact' scroll={false}>
      <button className={styles.customBtn}>{children}</button>
    </Link>
  </div>
});
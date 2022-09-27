import { memo } from 'react';
import Link from 'next/link';

import styles from './customButton.module.scss';

export const CustomButton = memo(function CustomButton({ children, path, as }: { path?: string, as?: string, children: React.ReactNode }) 
{
  return <div className={styles.btnWrapper}>
    <Link href={path || ''} as={as} scroll={true}>
      <button className={styles.customBtn}>{children}</button>
    </Link>
  </div>
});
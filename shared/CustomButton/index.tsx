import { HTMLAttributeAnchorTarget, memo } from 'react';
import Link from 'next/link';

import styles from './customButton.module.scss';

export const CustomButton = memo(function CustomButton({ children, path, target }: { path?: string, target?: HTMLAttributeAnchorTarget, children: React.ReactNode }) 
{
  return <div className={styles.btnWrapper}>
    <Link href={path || ''} scroll={true}>
      <a className={styles.customBtn} target={target}>{children}</a>
    </Link>
  </div>
});
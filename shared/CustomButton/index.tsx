import { HTMLAttributeAnchorTarget, memo } from 'react';
import Link from 'next/link';

import styles from './customButton.module.scss';

export const CustomButton = memo(function CustomButton({ children, path, target, isWidth100 }: {isWidth100?: boolean, path?: string, target?: HTMLAttributeAnchorTarget, children: React.ReactNode }) 
{
  return <div className={ isWidth100  ? styles.btnWidth100 : styles.btnWrapper  } >
    <Link href={path || ''} scroll={true}>
      <a className={  isWidth100 ? styles.customBtnW100 : styles.customBtn } target={target}>{children}</a>
    </Link>
  </div>
});
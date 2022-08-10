import Image from 'next/image';
import Link from 'next/link';

import utils from '@/styles/utils.module.scss';
import styles from './ourservices.module.scss';
import devLab from '@/images/dev_lab.png';
import desingLab from '@/images/design_lab.png';
import microservices from '@/images/microservices_logo.png';
import itOutsourcing from '@/images/it_outsourcing.png';
import arrowRight from '@/svg/arrow-right.svg';
import { HomeSections } from 'utils/types/sections.enum';

export default function OurServices() {
  return <section className={styles.servicesSection} id={HomeSections.SERVICES}>
    <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>Our Services</h2>
    <div className={styles.servicesWrapper}>

      <div className={styles.serviceCard}>
        <div className={styles.logo}>
          <Image src={devLab} alt='DEV Lab' />
        </div>
        <div className={styles.info}>
          <h3 className={utils.headingSmall}>DEV Lab</h3>
          <p className={`${utils.textTiny} ${styles.desc}`}>Mobile and Web Applications Desktop, End to End</p>
          <span className={`${utils.textTiny} ${styles.link}`}><Link href='/'>Check It Out</Link><Image src={arrowRight} alt='Arrow right' /></span>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <div className={styles.logo}>
          <Image src={desingLab} alt='Design Lab' />
        </div>
        <div className={styles.info}>
          <h3 className={utils.headingSmall}>Design Lab</h3>
          <p className={`${utils.textTiny} ${styles.desc}`}>UX/UI DesignDesign Systems & Style Guides</p>
          <span className={`${utils.textTiny} ${styles.link}`}><Link href='/'>Check It Out</Link><Image src={arrowRight} alt='Arrow right' /></span>
        </div>
      </div>
      <div className={styles.serviceCard}>
        <div className={styles.logo}>
          <Image src={microservices} alt='Micro Sevices' />
        </div>
        <div className={styles.info}>
          <h3 className={utils.headingSmall}>Micro Sevices</h3>
          <p className={`${utils.textTiny} ${styles.desc}`}>MBranding, WIX & Shopify one stop setup, Advanced Websites</p>
          <span className={`${utils.textTiny} ${styles.link}`}><Link href='/'>Check It Out</Link><Image src={arrowRight} alt='Arrow right' /></span>
        </div>
      </div>
      <div className={styles.serviceCard}>
        <div className={styles.logo}>
          <Image src={itOutsourcing} alt='IT Outsourcing' />
        </div>
        <div className={styles.info}>
          <h3 className={utils.headingSmall}>IT Outsourcing</h3>
          <p className={`${utils.textTiny} ${styles.desc}`}>24/7 IT Technical Support ( Tiers I & II) 24/7 Customer Technical Support</p>
          <span className={`${utils.textTiny} ${styles.link}`}><Link href='/'>Check It Out</Link><Image src={arrowRight} alt='Arrow right' /></span>
        </div>
      </div>
    </div>
  </section>
}
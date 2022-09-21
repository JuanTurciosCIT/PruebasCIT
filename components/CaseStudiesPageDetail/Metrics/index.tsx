import CountUp from 'react-countup';

import styles from './caseStudyMetrics.module.scss';
import utils from 'styles/utils.module.scss';

export const CaseStudyMetrics = () => {

  return <section className={styles.section}>
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={`${utils.headingMedium} ${styles.title}`}><CountUp end={10} duration={1} enableScrollSpy scrollSpyOnce /> Month</h3>
        <p className={`${utils.textMedium} ${styles.desc}`}>Initial Development of MVP</p>
      </div>
      <div className={styles.card}>
        <h3 className={`${utils.headingMedium} ${styles.title}`}><CountUp end={350_000} duration={1.5} enableScrollSpy scrollSpyOnce />+</h3>
        <p className={`${utils.textMedium} ${styles.desc}`}>Downloads of the APP </p>
      </div>
      <div className={styles.card}>
        <h3 className={`${utils.headingMedium} ${styles.title}`}><CountUp end={200_000} duration={1.4} enableScrollSpy scrollSpyOnce />+</h3>
        <p className={`${utils.textMedium} ${styles.desc}`}>Customers Fully Registered</p>
      </div>
      <div className={styles.card}>
        <h3 className={`${utils.headingMedium} ${styles.title}`}><CountUp end={400} duration={1} enableScrollSpy scrollSpyOnce />+</h3>
        <p className={`${utils.textMedium} ${styles.desc}`}>Delivery Drivers Managed </p>
      </div>
      <div className={styles.card}>
        <h3 className={`${utils.headingMedium} ${styles.title}`}><CountUp end={1.5} decimal={'.'} decimals={1} duration={0.4} enableScrollSpy scrollSpyOnce />+ Million</h3>
        <p className={`${utils.textMedium} ${styles.desc}`}>Orders processed and delivered </p>
      </div>
      <div className={styles.card}>
        <h3 className={`${utils.headingMedium} ${styles.title}`}><CountUp end={100} duration={0.6} enableScrollSpy scrollSpyOnce />+</h3>
        <p className={`${utils.textMedium} ${styles.desc}`}>Admin users from 15 different departments</p>
      </div>
    </div>
  </section>
}
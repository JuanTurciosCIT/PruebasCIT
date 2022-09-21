import styles from './appStack.module.scss';
import utils from '/styles/utils.module.scss';

export const AppStack = () => {
  return <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={`${utils.headingMedium} ${styles.sectionTitle}`}>How it works</h2>
      <ul className={styles.appList}>
        <li className={styles.appItem}>
          <div className={styles.orderWrapper}>
            <span className={styles.order}>1</span>
          </div>
          <span className={utils.textMedium}>Bip Bip Customer APP</span>
        </li>
        <li className={styles.appItem}>
          <div className={styles.orderWrapper}>
            <span className={styles.order}>2</span>
          </div>
          <span className={utils.textMedium}>Bip Bip Customer Web APP</span>
        </li>
        <li className={styles.appItem}>
          <div className={styles.orderWrapper}>
            <span className={styles.order}>3</span>
          </div>
          <span className={utils.textMedium}>Bip Bip Driver APP</span>
        </li>
        <li className={styles.appItem}>
          <div className={styles.orderWrapper}>
            <span className={styles.order}>4</span>
          </div>
          <span className={utils.textMedium}>Bip Bip Admin Panel Web APP</span>
        </li>
        <li className={styles.appItem}>
          <div className={styles.orderWrapper}>
            <span className={styles.order}>5</span>
          </div>
          <span className={utils.textMedium}>Bip Bip Restaurant Web APP</span>
        </li>
        <li className={styles.appItem}>
          <div className={styles.orderWrapper}>
            <span className={styles.order}>6</span>
          </div>
          <span className={utils.textMedium}>Bip Bip Contact Center Web APP</span>
        </li>
        <li className={styles.appItem}>
          <div className={styles.orderWrapper}>
            <span className={styles.order}>7</span>
          </div>
          <span className={utils.textMedium}>API / Adicional Services </span>
        </li>
      </ul>
    </div>
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        {/* <Image /> */}
      </div>
    </div>
  </section>
}
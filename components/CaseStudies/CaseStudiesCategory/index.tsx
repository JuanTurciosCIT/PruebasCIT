import styles from './caseStudiesCategory.module.scss';
import utils from '/styles/utils.module.scss';

export const CaseStudiesCategory = () => {
  return <div className={styles.container}>
    <h2 className={`${utils.headingMedium} ${styles.title}`}>Category</h2>
    <ul className={styles.listCategories}>
      <li>
        <button>All</button>
      </li>
      <li>
        <button>Agtech</button>
      </li>
      <li>
        <button>Healthcare</button>
      </li>
      <li>
        <button>B2B-SaaS</button>
      </li>
      <li>
        <button>B2C</button>
      </li>
      <li>
        <button>Retail</button>
      </li>
      <li>
        <button>Government</button>
      </li>
      <li>
        <button>Fintech</button>
      </li>
      <li>
        <button>Energy</button>
      </li>
    </ul>
    <div className={styles.divider}></div>
  </div>
}
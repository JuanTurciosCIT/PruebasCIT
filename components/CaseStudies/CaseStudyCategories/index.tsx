import useTranslation from 'next-translate/useTranslation';
import styles from './caseStudiesCategory.module.scss';
import utils from '/styles/utils.module.scss';

import { CaseStudyCategory } from 'utils/types/caseStudies.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

interface CaseStudiesCategoryProps {
  categories: CaseStudyCategory[];
  onReset?: () => void;
  onFilter: (category: CaseStudyCategory) => void;
}

export const CaseStudiesCategory = ({ categories, onReset, onFilter }: CaseStudiesCategoryProps) => {
  const { t } = useTranslation(localeNamespaces.CASE_STUDIES);

  return <div className={styles.container}>
    <h2 className={`${utils.headingMedium} ${styles.title}`}>{t('category.title')}</h2>
    <ul className={styles.listCategories}>
      <li className={styles.item}>
        <button className={styles.btn} onClick={onReset}>{t('category.all')}</button>
      </li>
      {
        categories.map((category: CaseStudyCategory) => (
          <li className={styles.item} key={category.id}>
            <button className={styles.btn} onClick={() => onFilter(category)}>{category.nameEN || category.nameES}</button>
          </li>
        ))
      }
    </ul>
    <div className={styles.divider}></div>
  </div>
}
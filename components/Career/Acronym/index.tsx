import useTranslation from 'next-translate/useTranslation';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

import styles from './acronym.module.scss';

export const Acronym = () => {
  const { t } = useTranslation(localeNamespaces.CAREER);

  return (
    <section className={styles.section}>
     <div className={styles.wrapper}>
        <div>
          <p className={styles.firstLetter}>C</p>
          <p className={styles.word}>{t('acronym.creativity')}</p>
        </div>
        <div>
          <p className={styles.firstLetter}>R</p>
          <p className={styles.word}>{t('acronym.reliability')}</p>
        </div>
        <div>
          <p className={styles.firstLetter}>E</p>
          <p className={styles.word}>{t('acronym.efficiency')}</p>
        </div>
        <div>
          <p className={styles.firstLetter}>A</p>
          <p className={styles.word}>{t('acronym.agility')}</p>
        </div>
        <div>
          <p className={styles.firstLetter}>T</p>
          <p className={styles.word}>{t('acronym.talent')}</p>
        </div>
        <div>
          <p className={`${styles.firstLetter} ${styles.nth6}`}>I</p>
          <p className={styles.word}>{t('acronym.innovation')}</p>
        </div>
        <div>
          <p className={styles.firstLetter}>V</p>
          <p className={styles.word}>{t('acronym.values')}</p>
        </div>
        <div>
          <p className={styles.firstLetter}>E</p>
          <p className={styles.word}>{t('acronym.excellence')}</p>
        </div>
     </div>
    </section>
  )
}
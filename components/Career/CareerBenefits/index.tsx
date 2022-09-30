import { CareerBenefitsInterface } from 'utils/types/careerContent.interface';
import useTranslation from 'next-translate/useTranslation';

import styles from './benefits.module.scss';
import utils from '/styles/utils.module.scss';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

export const CareerBenefits = ({ benefits }: { benefits: CareerBenefitsInterface[] }) => {
  const { t } = useTranslation(localeNamespaces.CAREER);
  const benefitsFirstHalf = benefits.slice(0, benefits.length / 2);
  const benefitsSecondHalf = benefits.slice(benefits.length / 2, benefits.length);

  return <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={`${utils.headingMedium} ${styles.title}`}>{t('benefits.title')}</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <ul>
            {
              benefitsFirstHalf.map((benefit) => (
                <li key={benefit.id}>{benefit.nameEN || benefit.nameES}</li>
              ))
            }
          </ul>
        </div>
        <div className={styles.card}>
          <ul>
          {
              benefitsSecondHalf.map((benefit) => (
                <li key={benefit.id}>{benefit.nameEN || benefit.nameES}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  </section>
}
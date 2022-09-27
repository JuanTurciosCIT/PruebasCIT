import Image from 'next/future/image';
import useTranslation from 'next-translate/useTranslation';

import { CaseStudyAppStack, HowItWorksInterface } from 'utils/types/caseStudy.interface';
import styles from './appStack.module.scss';
import utils from '/styles/utils.module.scss';

export const AppStack = ({ appStack, image }: HowItWorksInterface) => {
  const { t } = useTranslation('caseStudies');
  const sortedAppStack = appStack.sort((a, b) => a.order - b.order);

  return <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={`${utils.headingMedium} ${styles.sectionTitle}`}>{t('appStack.title')}</h2>
      <ul className={styles.appList}>
        {
          sortedAppStack.map((app) => (
            <li className={styles.appItem} key={app.id}>
            <div className={styles.orderWrapper}>
              <span className={styles.order}>{app.order}</span>
            </div>
            <span className={utils.textMedium}>{app.titleEN || app.titleES}</span>
          </li>
          ))
        }
      </ul>
    </div>
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <Image src={image.picture} alt='Infrastructure diagram' sizes='100vw' fill />
      </div>
    </div>
  </section>
}
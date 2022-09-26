import useTranslation from 'next-translate/useTranslation';
import Image from 'next/future/image';

import { CaseStudyCategory } from 'utils/types/caseStudies.interface';
import { TechnologiesSection } from 'utils/types/commonContent.interface';


import styles from './generalInfo.module.scss';
import utils from '/styles/utils.module.scss';

interface GeneralInfoProps {
  industry: CaseStudyCategory[];
  companySize: string;
  goal: string;
  technologies: TechnologiesSection[],
}

export const GeneralInfo = ({ content }: { content: GeneralInfoProps }) => {
  const { t } = useTranslation('caseStudies');

  return <div className={styles.container}>
    <div className={styles.titleWrapper}>
      <h2 className={utils.headingMedium}>{t('atGlance.title')}</h2>
    </div>
    <div className={styles.infoWrapper}>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>{t('atGlance.industry')}:</h3>
        <p className={`${utils.textSmall} ${styles.desc}`}>{content.industry.map(cat => <span key={cat.id}>{cat.nameEN || cat.nameES}</span>)}</p>
      </div>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>{t('atGlance.companySize')}:</h3>
        <p className={`${utils.textSmall} ${styles.desc}`}>{content.companySize}</p>
      </div>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>{t('atGlance.goal')}:</h3>
        <p className={`${utils.textSmall} ${styles.desc}`}>{content.goal}</p>
      </div>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>{t('atGlance.technologies')}: </h3>
        <ul className={`${utils.textSmall} ${styles.techs}`}>
          {
            content.technologies.map((tech) => (<li key={tech.id} className={styles.tech}>
              <Image src={tech.logo} alt={tech.name} sizes='100vw' quality={100} fill />
            </li>))
          }
        </ul>
      </div>
    </div>
  </div>
}
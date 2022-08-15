import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import utils from '@/styles/utils.module.scss';
import styles from './technologies.module.scss';
import citLogo from '@/images/cit_logo.png';
import { TechnologiesSection } from 'utils/types/homeContent.interface';

export default function Technologies({ technologies }: { technologies: TechnologiesSection[] } ): JSX.Element {
  const [currentTech, setCurrentTech] = useState<TechnologiesSection>(technologies[0]);
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  
  const innerRingTechnologies = technologies.filter(tech => tech.ringLevel === 1);
  const middleRingTechnologies = technologies.filter(tech => tech.ringLevel === 2);
  const outerRingTechnologies = technologies.filter(tech => tech.ringLevel === 3);

  const handleTechClick = (tech: TechnologiesSection) => setCurrentTech(tech);

  useEffect(() => {
    const current = technologies.filter(tech => tech.name === currentTech.name);
    handleTechClick(current[0] ?? technologies[0]);
  }, [router.locale]);

  return <section className={styles.techSection}>
    <div className={styles.info}>
      <h2 className={`${utils.headingMedium} ${styles.title}`}>Technologies</h2>
      <div>
        <h3 className={`${utils.headingMedium} ${styles.subtitle}`}>{currentTech.name}</h3>
        <div className={styles.description}>
          <p className={`${utils.textSmall}`}>{isEnglish ? currentTech.descriptionEN : currentTech.descriptionES}</p>
        </div>
      </div>
    </div>

    {/* Atom of technologies */}
    <div className={styles.atomContainer}>
      <div className={styles.logo}>
        <Image src={citLogo} alt='CIT Logo' />
      </div>

      {/* Inner ring */}
      <div className={styles.innerRing}>
        {innerRingTechnologies.map((tech, index) => (
          <button className={styles[`innerTech${index+1}`]} key={tech.name} onClick={() => handleTechClick(tech)}>
            <Image className={styles.logoFilter} src={tech.logo} alt={tech.name} layout='fill' objectFit='contain' />
          </button>
        ))}
      </div>

      {/* Middle Ring */}
      <div className={styles.midRing}>
        {
          middleRingTechnologies.map((tech, index) => (
            <button className={styles[`middleTech${index+1}`]} key={tech.name} onClick={() => handleTechClick(tech)}>
              <Image className={styles.logoFilter} src={tech.logo} alt={tech.name} layout='fill' objectFit='contain' />
            </button>
          ))
        }

        {/* dots */}
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
        <div className={styles.dot4}></div>
        <div className={styles.dot5}></div>
      </div>

      {/* Outer ring */}
      <div className={styles.largerRing}>
        {
          outerRingTechnologies.map((tech, index) => (
            <button className={styles[`largeTech${index+1}`]} key={tech.name} onClick={() => handleTechClick(tech)}>
              <Image className={styles.logoFilter} src={tech.logo} alt={tech.name} layout='fill' objectFit='contain' />
            </button>
          ))
        }
      </div>

    </div>
  </section>
}
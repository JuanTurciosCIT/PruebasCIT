import Image from 'next/image';

import styles from './CaseStudyHero.module.scss';
import utils from 'styles/utils.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface CaseStudyHeroProps {
  heroTitleEN?: string;
  heroTitleES?: string;
  heroDescriptionEN?: string;
  heroDescriptionES?: string;
  pdf: string;
  heroImage: string;
}

export const CaseStudyHero = ({ heroContent }: { heroContent: CaseStudyHeroProps }) => {
	const isMobile = useMediaQuery('(max-width: 428px)');

	return (
		<section className={styles.hero}>
			<div className={styles.wrapper}>
				<div className={styles.infoContainer}>
          <div className={`${utils.headingMedium} ${styles.titlesWrapper}`}>
            <h1 className={styles.title}>
              {heroContent.heroTitleEN || heroContent.heroTitleES}
            </h1>
            <p className={`${utils.textMedium} ${styles.desc}`}>
              {heroContent.heroDescriptionEN || heroContent.heroDescriptionES}
            </p>
              <div className={styles.btnWrapper}>
              <a
                className={`${styles.downloadBtn} ${styles.textMedium}`}
                download
                href={heroContent.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >Download PDF</a>
              </div>
          </div>
          <div className={styles.logoContainer}>
            <Image src={heroContent.heroImage} alt='Case Study Logo' layout='fill' objectFit='contain'  />
          </div>
        </div>
			</div>
		</section>
	);
}

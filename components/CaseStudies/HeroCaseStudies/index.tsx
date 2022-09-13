// import { useState } from 'react';
// import useTranslation from 'next-translate/useTranslation';

import styles from './heroCaseStudies.module.scss';
import utils from 'styles/utils.module.scss';
import officeBackground from '/public/images/computer-screens.jpg';
// import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { HeroCaseStudiesInterface } from 'utils/types/caseStudies.interface';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function HeroHome({
	heroContent,
}: {
	heroContent: HeroCaseStudiesInterface;
}) {
	// const { t } = useTranslation(localeNamespaces.CASE_STUDIES);
	const isMobile = useMediaQuery('(max-width: 428px)');

	return (
		<div className={styles.hero} style={{backgroundImage: `url(${heroContent.backgroundImage})`}}>
			<div className={styles.wrapper}>
				<div className={`${utils.headingLarge} ${styles.heroTitle}`}>
					<h1>
						{heroContent.titleEN || heroContent.titleES}
					</h1>
				</div>
				<div className={`${utils.textSmall} ${styles.heroDescription}`}>
					<p>
            {heroContent.captionEN || heroContent.captionES}
          </p>
				</div>
			</div>
		</div>
	);
}

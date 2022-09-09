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
		<div className={styles.hero}>
			<div className={styles.wrapper}>
				<div className={`${utils.headingLarge} ${styles.heroTitle}`}>
					<h1>
						{heroContent.titleEN || heroContent.titleES}
            Case Study
					</h1>
				</div>
				<div className={`${utils.textSmall} ${styles.heroDescription}`}>
					<p>
            {heroContent.descriptionEN || heroContent.descriptionES}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sapien, id bibendum velit, tellus diam ut.
          </p>
				</div>
			</div>
		</div>
	);
}

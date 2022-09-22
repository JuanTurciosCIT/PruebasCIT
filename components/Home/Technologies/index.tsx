import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import utils from '@/styles/utils.module.scss';
import styles from './technologies.module.scss';
import { TechnologiesSection } from 'utils/types/homeContent.interface';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { TechnologiesAtom } from './Atom';

export const Technologies = ({
	technologies,
}: {
	technologies: TechnologiesSection[];
}): JSX.Element => {
	const router = useRouter();
	const [currentTech, setCurrentTech] = useState<TechnologiesSection>(
		technologies[0]
	);
	const { t } = useTranslation(localeNamespaces.HOME);
	const { inView, ref } = useInView();
	const isEnglish = router.locale === 'en';

	const innerRingTechnologies = technologies.filter(
		(tech) => tech.ringLevel === 1
	);
	const middleRingTechnologies = technologies.filter(
		(tech) => tech.ringLevel === 2
	);
	const outerRingTechnologies = technologies.filter(
		(tech) => tech.ringLevel === 3
	);

	const handleTechClick = useCallback((tech: TechnologiesSection) => setCurrentTech(tech), []);

	useEffect(() => {
		const current = technologies.filter(
			(tech) => tech.name === currentTech.name
		);
		handleTechClick(current[0] ?? technologies[0]);
	}, [router.locale]);

	return (
		<ScrollReveal isVisible={inView}>
			<section className={styles.techSectionWrapper} ref={ref}>
				<div className={styles.techSection}>
					<div className={styles.info}>
						<h2 className={`${utils.headingMedium} ${styles.title}`}>
							{t('technologies.title')}
						</h2>
						<motion.div
							initial={{ x: '-100%', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							key={currentTech.name}
						>
							<h3 className={`${utils.headingMedium} ${styles.subtitle}`}>
								{currentTech.name}
							</h3>
							<div className={styles.description}>
								<p className={`${utils.textSmall}`}>
									{isEnglish
										? currentTech.descriptionEN
										: currentTech.descriptionES}
								</p>
							</div>
						</motion.div>
					</div>

					{/* Atom of technologies */}
					<TechnologiesAtom
						innerRingTechnologies={innerRingTechnologies}
						middleRingTechnologies={middleRingTechnologies}
						outerRingTechnologies={outerRingTechnologies}
						currentTech={currentTech}
						handleTechClick={handleTechClick}
					/>
				</div>
			</section>
		</ScrollReveal>
	);
}

import styles from './caseStudiesList.module.scss';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

import { CaseStudyPreview } from '../CaseStudyPreview';
import { CaseStudy } from 'utils/types/caseStudies.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

export const CaseStudiesList = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
	const { t } = useTranslation(localeNamespaces.CASE_STUDIES);

	if (caseStudies.length === 0) {
		return (
			<motion.div className={`${styles.noResults} ${styles.container}`} initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}>
				<h2>{t('caseStudies.empty')}</h2>
			</motion.div>
		);
	}

	return (
		<div className={styles.container}>
			<ul>
				{
					caseStudies.map((caseStudy) => (
						<motion.li initial={{ opacity: 0, translateY: '100px' }} animate={{ opacity: 1, translateY: 0 }} key={caseStudy.id}>
							<CaseStudyPreview caseStudy={caseStudy} />
						</motion.li>
					))
				}
			</ul>
		</div>
	);
};

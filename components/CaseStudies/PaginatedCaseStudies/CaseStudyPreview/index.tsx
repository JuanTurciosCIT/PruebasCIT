import Image from 'next/image';
import { useRouter } from 'next/router';

import utils from '/styles/utils.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { CustomButton } from '@/shared/CustomButton';

import styles from './caseStudyPreview.module.scss';
import { CaseStudy } from 'utils/types/caseStudies.interface';

export const CaseStudyPreview = ({ caseStudy }: { caseStudy: CaseStudy }) => {
	const router = useRouter();
	const { t } = useTranslation('caseStudies');

	return (
		<div className={styles.CScontainer}>
			<div className={styles.pictureWrapper}>
				<Image quality={100} className={styles.picture} src={caseStudy.picture} alt={caseStudy.titleEN || caseStudy.titleES} layout='fill' objectFit='cover' />
			</div>
			<div className={styles.descriptionContainer}>
				<h2 className={`${utils.headingMedium} ${styles.CStitle}`}>
					{caseStudy.titleEN || caseStudy.titleES}
				</h2>
				<p className={`${utils.textMedium} ${styles.descriptionText}`}>
					{caseStudy.descriptionEN || caseStudy.descriptionES}
				</p>
				<div className={styles.button}>
					<CustomButton path={`/caseStudies/[csid]`} as={`/caseStudies/${caseStudy.id}`}>{t('caseStudies.btn_text')}</CustomButton>
				</div>
			</div>
		</div>
	);
};

import Image from 'next/image';
import utils from '/styles/utils.module.scss';
import picture1 from '/public/images/business-chart-visual.jpg';
import CustomButton from '@/shared/CustomButton';

import styles from './caseStudyPreview.module.scss';

export const CaseStudyPreview = () => {
	return (
		<div className={styles.CScontainer}>
			<div className={styles.pictureWrapper}>
				<Image className={styles.picture} src={picture1} alt='' />
			</div>
			<div className={styles.descriptionContainer}>
				<h2 className={`${utils.headingMedium} ${styles.CStitle}`}>
					Boosting cows health and well-being
				</h2>
				<p className={`${utils.textMedium} ${styles.descriptionText}`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<div className={styles.button}>
					<CustomButton>See Case</CustomButton>
				</div>
			</div>
		</div>
	);
};

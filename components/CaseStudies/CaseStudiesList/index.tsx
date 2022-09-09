import Image from 'next/image';

import styles from './caseStudiesList.module.scss';
import utils from '/styles/utils.module.scss';
import picture1 from '/public/images/business-chart-visual.jpg';
import picture2 from '/public/images/mobile-phone-app-streaming.jpg';
import picture3 from '/public/images/top-banking-apps-min 2.jpg';
import picture4 from '/public/images/bipbipBackground.jpg';
import { CaseStudiPreview } from './CaseStudyPreview';
import CustomButton from '@/shared/CustomButton';

export const CaseStudiesList = () => {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					{/* <CaseStudiPreview /> */}
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
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className={styles.button}>
								<CustomButton>See Case</CustomButton>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className={styles.CScontainer}>
						<div className={styles.pictureWrapper}>
							<Image className={styles.picture} src={picture2} alt='' />
						</div>
						<div className={styles.descriptionContainer}>
							<h2 className={`${utils.headingMedium} ${styles.CStitle}`}>
								Boosting cows health and well-being
							</h2>
							<p className={`${utils.textMedium} ${styles.descriptionText}`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className={styles.button}>
								<CustomButton>See Case</CustomButton>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className={styles.CScontainer}>
						<div className={styles.pictureWrapper}>
							<Image className={styles.picture} src={picture3} alt='' />
						</div>
						<div className={styles.descriptionContainer}>
							<h2 className={`${utils.headingMedium} ${styles.CStitle}`}>
								Boosting cows health and well-being
							</h2>
							<p className={`${utils.textMedium} ${styles.descriptionText}`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className={styles.button}>
								<CustomButton>See Case</CustomButton>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className={styles.CScontainer}>
						<div className={styles.pictureWrapper}>
							<Image className={styles.picture} src={picture4} alt='' />
						</div>
						<div className={styles.descriptionContainer}>
							<h2 className={`${utils.headingMedium} ${styles.CStitle}`}>
								Boosting cows health and well-being
							</h2>
							<p className={`${utils.textMedium} ${styles.descriptionText}`}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className={styles.button}>
								<CustomButton>See Case</CustomButton>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

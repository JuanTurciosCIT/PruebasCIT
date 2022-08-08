import Image from 'next/image';

import creativeLogo from '@/images/creative_logo.png';
import styles from './footer.module.scss';
import utils from '@/styles/utils.module.scss';
import instagramIcon from '../../public/svg/instagram_icon.svg';
import linkedinIcon from '../../public/svg/linkedin_icon.svg';
import facebookIcon from '../../public/svg/facebook_icon.svg';
import mailIcon from '../../public/svg/mail_icon.svg';
import locationIcon from '../../public/svg/location_icon.svg';

// Change all the default export (components) to a named export
// This is to avoid the error:
// "Cannot find module '@/components/Footer/index.tsx'"

// only pages will have the default export

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.infoWrapper}>
					<div className={styles.logo}>
						<Image src={creativeLogo} alt='CIT Logo' />
					</div>
					<h3 className={`${utils.headingSmall} ${styles.subtitle}`}>
						Locations
					</h3>
					<div>
						<p className={`${utils.textSmall} ${styles.text}`}>
							Honduras <br />Seguros del Pais 7th floor, aside City Mall, San Pedro
							Sula, Cortés, Honduras
						</p>
						<p className={`${utils.textSmall} ${styles.text}`}>Delaware: <br />City Mall, San Pedro Sula, Cortés, Honduras</p>
						<p className={`${utils.textSmall} ${styles.text}`}>Estonia: <br />Sepapaja 6 Tallinn 15551</p>
					</div>
				</div>
				<div className={styles.socialMedia}>
					<h3 className={`${utils.headingSmall} ${styles.subtitle}`}>
						Follow us
					</h3>
					<div className={styles.mediaIcons}>
						<div className={styles.iconContainer}>
							<Image src={instagramIcon} alt='Instagram' width={12} height={12} />
						</div>
						<div className={styles.iconContainer}>
							<Image src={linkedinIcon} alt='LinkedIn' width={12} height={12} />
						</div>
						<div className={styles.iconContainer}>
							<Image src={facebookIcon} alt='Facebook' width={12} height={12} />
						</div>
					</div>
					<p className={`${utils.textSmall} ${styles.contact}`}><Image src={mailIcon}  alt='Mail icon' ></Image> info@cit.hn</p>
					<p className={`${utils.textSmall} ${styles.contact}`}><Image src={locationIcon}  alt='Mail icon' ></Image> +504 2566-3649</p>
				</div>
			</div>
			<div className={styles.rightsConditions}>
				<p className={utils.textSmall}>All Rights reservd 2022 yalo</p>
				<p className={utils.textSmall}>Privacy Policy</p>
			</div>
		</footer>
	);
}

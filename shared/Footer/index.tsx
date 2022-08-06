import Image from 'next/image';

import creativeLogo from '@/images/creative_logo.png';
import styles from './footer.module.scss';
import utils from '@/styles/utils.module.scss';

// Change all the default export (components) to a named export
// This is to avoid the error:
// "Cannot find module '@/components/Footer/index.tsx'"

// only pages will have the default export

export default function Footer() {
	return (
		<footer>
			<div className={styles.infoWrapper}>
				<div>
					<Image src={creativeLogo} alt='CIT Logo' />
				</div>
				<h3 className={`${utils.headingSmall} ${styles.subtitle}`}>
					Locations
				</h3>
				<div>
					<p className={`${utils.textSmall} ${styles.text}`}>
						Honduras Seguros del Pais 7th floor, aside City Mall, San Pedro
						Sula, Cortés, Honduras
					</p>
					<p className={`${utils.textSmall} ${styles.text}`}>Delaware: City Mall, San Pedro Sula, Cortés, Honduras</p>
					<p className={`${utils.textSmall} ${styles.text}`}>Estonia: Sepapaja 6 Tallinn 15551</p>
				</div>
			</div>
		</footer>
	);
}

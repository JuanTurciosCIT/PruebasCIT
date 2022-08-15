import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import utils from '@/styles/utils.module.scss';
import styles from './ourservices.module.scss';
import arrowRight from '@/svg/arrow-right.svg';
import { HomeSections } from 'utils/types/sections.enum';
import { ServicesSection } from 'utils/types/homeContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

export default function OurServices({
	services,
}: {
	services: ServicesSection[];
}) {
	const { t } = useTranslation(localeNamespaces.HOME);

	return (
		<section className={styles.servicesSection} id={HomeSections.SERVICES}>
			<h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
				{t('services.title')}
			</h2>
			<div className={styles.servicesWrapper}>
				{services.map((service) => (
					<div
						className={styles.serviceCard}
						key={service.nameEN || service.nameES}
					>
						<div className={styles.logo}>
							<Image
								src={service.logo}
								alt={service.nameEN || service.nameES}
								layout='fill'
							/>
						</div>
						<div className={styles.info}>
							<h3 className={utils.headingSmall}>
								{service.nameEN || service.nameES}
							</h3>
							<p className={`${utils.textTiny} ${styles.desc}`}>
								{service.descriptionEN || service.descriptionES}
							</p>
							<span className={`${utils.textTiny} ${styles.link}`}>
								<Link href='/'>{t('services.btn_text')}</Link>
								<Image src={arrowRight} alt='Arrow right' />
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

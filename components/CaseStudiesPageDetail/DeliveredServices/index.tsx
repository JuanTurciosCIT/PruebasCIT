import Image from 'next/image';
// import Image from 'next/future/image';
import useTranslation from 'next-translate/useTranslation';
import { useInView } from 'react-intersection-observer';

import utils from '@/styles/utils.module.scss';
import styles from './deliveredServices.module.scss';
import { HomeSections } from 'utils/types/sections.enum';
import { ServicesSection } from 'utils/types/homeContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { ScrollReveal } from 'Animations/ScrollReveal';

export const DeliveredServices = ({
	services,
}: {
	services: ServicesSection[];
}) => {
	const { inView, entry, ref } = useInView();
	const { t } = useTranslation(localeNamespaces.CASE_STUDIES);

	return (
		<section className={styles.servicesSection} id={HomeSections.SERVICES} ref={ref}>
			<h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
				{t('deliveredServices.title')}
			</h2>
			<ScrollReveal isVisible={inView}>
				<div className={styles.servicesWrapper}>
						{services.map((service) => (
							<div
								className={styles.serviceCard}
								key={service.id}
							>
								<div className={styles.logo}>
									<Image
										priority
										quality={90}
										src={service.logo}
										alt={service.nameEN || service.nameES}
										layout='fill'
										lazyBoundary='600px'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div className={styles.info}>
									<h3 className={utils.headingSmall}>
										{service.nameEN || service.nameES}
									</h3>
									<p className={`${utils.textTiny} ${styles.desc}`}>
										{service.descriptionEN || service.descriptionES}
									</p>
								</div>
							</div>
						))}
					</div>
			</ScrollReveal>
		</section>
	);
}

import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';

import 'swiper/css';
import 'swiper/css/pagination';

import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import styles from './companiesSlider.module.scss';
import utils from 'styles/utils.module.scss';
import { CustomersSection } from 'utils/types/homeContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

export default function CompaniesSlider({
	customers,
}: {
	customers: CustomersSection[];
}): JSX.Element {
	const isMobile = useMediaQuery('(max-width: 428px)');
	const { t } = useTranslation(localeNamespaces.HOME);

	const sliderOptions: SwiperProps = {
		modules: [Pagination, Autoplay],
		slidesPerView: isMobile ? 3 : 5,
		// spaceBetween: isMobile ? 22 : 32,
		spaceBetween: 0,
		loop: true,
		centeredSlides: true,
		grabCursor: true,
		pagination: {
			dynamicBullets: true,
			type: 'bullets',
			clickable: true,
		},
		touchMoveStopPropagation: isMobile ? true : false,
		autoplay: {
			delay: 2500,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		},
	};

	return (
		<section className={styles.container}>
			<h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
				{t('customers.title')}
			</h2>
			<div className={styles.sliderContainer}>
				<Swiper {...sliderOptions} className='mySwiper'>
					{customers.map((customer) => (
						<SwiperSlide key={customer.imagePath}>
							{({ isActive }) => (
								<div
									className={`${styles.logoContainer} ${
										isActive && styles.logoActive
									}`}
								>
										<Image
										src={customer.imagePath}
										alt={customer.clientName}
										layout='fill'
										objectFit='contain'
										objectPosition='center'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

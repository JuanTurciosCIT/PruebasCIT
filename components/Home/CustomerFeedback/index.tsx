import Image from 'next/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import { SwiperOptions } from 'swiper';
import 'swiper/css';

import utils from '@/styles/utils.module.scss';
import styles from './customerFeedback.module.scss';
import starIcon from '@/svg/star_feedback.svg';
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import { CustomerFeedbackSection } from 'utils/types/homeContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

export default function CustomerFeedback({ feedback }: { feedback: CustomerFeedbackSection[] }) {
	const isMobile: boolean = useMediaQuery('(max-width: 428px)');
	const { t } = useTranslation(localeNamespaces.HOME);

	const swiper = useSwiper();
	const swiperRef = useRef(swiper);

	const swiperOptions: SwiperOptions = {
		spaceBetween: 20,
		slidesPerView: isMobile ? 1 : 3,
		loop: true,
		touchMoveStopPropagation: isMobile ? true : false,
		rewind: true,
		centeredSlides: true,
	};

	/* A React hook that is used to memoize a function. */
	const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
	const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

	return (
		<section className={styles.section}>
			<h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
				{t('customerFeedback.title')}
			</h2>
			<Swiper
				{...swiperOptions}
				onSwiper={(swiper) => { swiperRef.current = swiper; }}
			>
				{
					feedback.map(item => (
						<SwiperSlide key={item.customerImg}>
						<div className={styles.feedbackCard}>
							<div className={styles.customerPic}>
								<Image src={item.customerImg} alt='Customer' layout='fill' width={80} height={80} />
							</div>
							<div className={styles.info}>
								<div className={styles.stars}>
									<Image
										src={starIcon}
										alt='Feedback star'
										width={14}
										height={14}
									/>
									<Image
										src={starIcon}
										alt='Feedback star'
										width={14}
										height={14}
									/>
									<Image
										src={starIcon}
										alt='Feedback star'
										width={14}
										height={14}
									/>
									<Image
										src={starIcon}
										alt='Feedback star'
										width={14}
										height={14}
									/>
									<Image
										src={starIcon}
										alt='Feedback star'
										width={14}
										height={14}
									/>
								</div>
								<h3 className={`${utils.headingMedium} ${styles.name}`}>
									{item.customerName}
								</h3>
								<p className={styles.comment}>
									{item.commentEN || item.commentES}
								</p>
							</div>
						</div>
					</SwiperSlide>
					))
				}
			</Swiper>

			<SliderButtons next={nextSlide} prev={prevSlide} />
		</section>
	);
}

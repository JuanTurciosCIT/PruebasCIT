import Image from 'next/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import { SwiperOptions } from 'swiper';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';

import utils from '@/styles/utils.module.scss';
import styles from './customerFeedback.module.scss';
import starIcon from '@/svg/star_feedback.svg';
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import { CustomerFeedbackSection } from 'utils/types/homeContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { ScrollReveal } from 'Animations/ScrollReveal';

export const CustomerFeedback = ({
	feedback,
}: {
	feedback: CustomerFeedbackSection[];
}) => {
	const isMobile: boolean = useMediaQuery('(max-width: 599px)');
	const { ref, inView } = useInView();
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
		<section className={styles.section} ref={ref}>
			<h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
				{t('customerFeedback.title')}
			</h2>
			<ScrollReveal isVisible={inView} className={styles.container}>
				<Swiper
					{...swiperOptions}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					{feedback.map((item) => (
						<SwiperSlide key={item.id}>
							<div className={styles.feedbackCard}>
								<div className={styles.customerPic}>
									<Image
										priority
										quality={100}
										src={item.picture}
										alt='Customer'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
                {/* Card info*/}
								<div className={styles.info}>
									<div className={styles.stars}>
										<Image
											lazyBoundary='600px'
											src={starIcon}
											alt='Feedback star'
											width={14}
											height={14}
										/>
										<Image
											lazyBoundary='600px'
											src={starIcon}
											alt='Feedback star'
											width={14}
											height={14}
										/>
										<Image
											lazyBoundary='600px'
											src={starIcon}
											alt='Feedback star'
											width={14}
											height={14}
										/>
										<Image
											lazyBoundary='600px'
											src={starIcon}
											alt='Feedback star'
											width={14}
											height={14}
										/>
										<Image
											lazyBoundary='600px'
											src={starIcon}
											alt='Feedback star'
											width={14}
											height={14}
										/>
									</div>

                  <section className={styles.infoHeader} >
                    <h3 className={`${utils.headingMedium} ${styles.name}`}>
                      {item.name}
                    </h3>
                    <p  className={styles.captionName}>{item.companyName}</p>
                  </section>

									<p className={styles.comment}>
										{item.commentEN || item.commentES}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</ScrollReveal>

			<SliderButtons next={nextSlide} prev={prevSlide} />
		</section>
	);
}

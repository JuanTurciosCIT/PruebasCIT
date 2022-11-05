import Image from 'next/future/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import { SwiperOptions } from 'swiper';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';

import styles from './CSGallery.module.scss';
import utils from '@/styles/utils.module.scss';
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { CaseStudyGalleryInterface } from 'utils/types/caseStudy.interface';

export const CaseStudyGallery = ({ content }: { content: CaseStudyGalleryInterface[] }) => {
	const isMobile: boolean = useMediaQuery('(max-width: 599px)');
	const { ref, inView } = useInView();
	const { t } = useTranslation(localeNamespaces.CASE_STUDIES);

	const swiper = useSwiper();
	const swiperRef = useRef(swiper);

	const swiperOptions: SwiperOptions = {
		spaceBetween: isMobile ? 17.4 : 30,
		slidesPerView: isMobile ? 1.22 : 2.56,
		loop: true,
		touchMoveStopPropagation: isMobile ? true : false,
		rewind: true,
		centeredSlides: true,
	};

	// const sortedProcess = content.sort((a, b) => a.order - b.order);

	/* A React hook that is used to memoize a function. */
	const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
	const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

	return (
		<section className={styles.section} ref={ref}>
			<div className={styles.sectionHeader}>
				<h2 className={`${utils.headingMedium} ${styles.sectionTitle}`}>
					{t('gallery.title')}
				</h2>
				<div className={styles.sliderButtons}>
					<SliderButtons next={nextSlide} prev={prevSlide} />
				</div>
			</div>
			<ScrollReveal isVisible={inView} className={styles.container}>
				<Swiper
					{...swiperOptions}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					{
						content.map((img) => (
							<SwiperSlide key={img.id}>
                <div className={styles.image}>
                  <Image src={img.pathImage} alt='case' sizes='100vw' fill quality={100} />
                </div>
					    </SwiperSlide>
						))
					}
				</Swiper>
			</ScrollReveal>
		</section>
	);
};

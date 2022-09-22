import Image from 'next/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import { SwiperOptions } from 'swiper';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';

import styles from './ourProcess.module.scss';
import utils from '@/styles/utils.module.scss';
import starIcon from '@/svg/star_feedback.svg';
import analysisLogo from '/public/svg/process_analysis.svg';
import designLogo from '/public/svg/process_design.svg';
import developmentLogo from '/public/svg/process_dev.svg';
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { ScrollReveal } from 'Animations/ScrollReveal';

export const OurProcess = () => {
	const isMobile: boolean = useMediaQuery('(max-width: 428px)');
	const { ref, inView } = useInView();
	const { t } = useTranslation(localeNamespaces.CASE_STUDIES);

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
			<div className={styles.sectionHeader}>
				<h2 className={`${utils.headingMedium} ${styles.sectionTitle}`}>
					{t('ourProcess.title')}
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
					<SwiperSlide>
						<div className={styles.card}>
							<div className={styles.imageWrapper}>
								<Image src={analysisLogo} alt='Process Analysis' width={46} height={46} />
							</div>
							<h3 className={`${utils.headingMedium} ${styles.title}`}>Process Analysis</h3>
							<p className={`${utils.textMedium} ${styles.desc}`}>We started the project by visiting a few restaurants Grupo Comidas operates to see and learn how they operate their kitchens, order dispatch and timings. We also met with many senior and mid level operations staffers with whom we discussed the whole process.</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.card}>
							<div className={styles.imageWrapper}>
								<Image src={designLogo} alt='Process Design Sprint' width={46} height={46} />
							</div>
							<h3 className={`${utils.headingMedium} ${styles.title}`}>Design Sprint</h3>
							<p className={`${utils.textMedium} ${styles.desc}`}>The second step was to kick-off designing the UX of the whole ecosystem (MVP) and after it was approved we started of the UI design. For the UI we worked with Grupo Comidas In-house team of designers and coached the their team on the basics and best practices of UI/UX design. </p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.card}>
							<div className={styles.imageWrapper}>
								<Image src={developmentLogo} alt='Process Development' width={46} height={46} />
							</div>
							<h3 className={`${utils.headingMedium} ${styles.title}`}>Development</h3>
							<p className={`${utils.textMedium} ${styles.desc}`}>During the Development phase we worked on weekly sprints, setting goals and a global roadmap for the project. We showcased our results in frequent demos to validate ideas quickly and be able to finish the project without any issues.</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</ScrollReveal>
		</section>
	);
};

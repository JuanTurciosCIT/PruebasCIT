import Image from 'next/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import { SwiperOptions } from 'swiper';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';

import styles from './ourProcess.module.scss';
import utils from '@/styles/utils.module.scss';
import analysisLogo from '/public/svg/process_analysis.svg';
import designLogo from '/public/svg/process_design.svg';
import developmentLogo from '/public/svg/process_dev.svg';
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { CaseStudyOurProcessInterface } from 'utils/types/caseStudy.interface';

export const OurProcess = ({ content }: { content: CaseStudyOurProcessInterface[] }) => {
	const isMobile: boolean = useMediaQuery('(max-width: 599px)');
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

	const sortedProcess = content.sort((a, b) => a.order - b.order);

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
					{
						sortedProcess.map((process) => (
							<SwiperSlide key={process.id}>
						<div className={styles.card}>
							<div className={styles.imageWrapper}>
								<Image src={process.picture} alt='Process Analysis' width={46} height={46} />
							</div>
							<h3 className={`${utils.headingMedium} ${styles.title}`}>{process.titleEN || process.titleES}</h3>
							<p className={`${utils.textMedium} ${styles.desc}`}>{process.descriptionEN || process.descriptionES}</p>
						</div>
					</SwiperSlide>
						))
					}
				</Swiper>
			</ScrollReveal>
		</section>
	);
};

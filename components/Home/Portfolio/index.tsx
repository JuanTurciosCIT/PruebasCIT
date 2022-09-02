import Image from 'next/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { SwiperOptions, Pagination } from 'swiper';
import useTranslation from 'next-translate/useTranslation';
import 'swiper/css';

import utils from '@/styles/utils.module.scss';
import styles from './portfolio.module.scss';
import SliderButtons from '@/shared/SliderButtons';
import arrowRightUpIcon from '@/svg/arrowRightUp.svg';
import arrowRightIcon from '@/svg/arrow-right.svg';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import Link from 'next/link';
import { PortfolioSection } from 'utils/types/homeContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

export default function Portfolio({
	content,
}: {
	content: PortfolioSection[];
}) {
	const isMobile: boolean = useMediaQuery('(max-width: 428px)');
	const { t } = useTranslation(localeNamespaces.HOME);

	const swiper = useSwiper();
	const swiperRef = useRef(swiper);

	const swiperOptions: SwiperOptions = {
		modules: [Pagination],
		spaceBetween: 20,
		slidesPerView: isMobile ? 1.4 : 3,
		loop: true,
		touchMoveStopPropagation: isMobile ? true : false,
		rewind: true,
		threshold: 20,
		pagination: {
			dynamicBullets: true,
			type: 'bullets',
			clickable: true,
		},
	};

	const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
	const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.sectionSubtitleContainer}>
					<h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
						Portfolio
					</h2>
					{!isMobile && (
						<SliderButtons next={nextSlide} prev={prevSlide} theme='theme2' />
					)}
				</div>

				<Swiper
					className={styles.sliderContainer}
					{...swiperOptions}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					{content.map((project, index) => (
						<SwiperSlide
							className={styles.itemsContainer}
							key={project.picture + index}
						>
							<div className={styles.cardContainer}>
								<div className={styles.cardHeader}>
									<Image
										src={project.background_image}
										layout='fill'
										objectFit='cover'
										alt={project.card_title}
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div className={styles.description}>
									<div className={styles.pictureWrapper}>
										<Image
											className={styles.picture}
											src={project.picture}
											width={45}
											height={45}
											alt={project.card_title}
											placeholder='blur'
											blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
										/>
									</div>
									<span className={`${utils.headingSmall} ${styles.title}`}>
										<h3>{project.card_title}</h3>
										<Image
											src={arrowRightUpIcon}
											width={14}
											height={14}
											alt='arrow right up'
										/>
									</span>
									<p className={`${utils.textSmall} ${styles.caption}`}>
										{project.descriptionEN || project.descriptionES}{' '}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.moreProjectsWrapper}>
					<div className={styles.moreProjects}>
						<div>
							<h4 className={`${utils.headingMedium} ${styles.footerTitle}`}>
								{t('portfolio.moreProjects_title')}
							</h4>
							<p className={`${utils.textSmall} ${styles.footerDesc}`}>
								{t('portfolio.moreProjects_desc')}
							</p>
						</div>
						<span className={`${utils.textSmall} ${styles.footerLink}`}>
							<Link href={'/'}>{t('portfolio.moreProjects_link')}</Link>
							<Image
								src={arrowRightIcon}
								width={14}
								height={14}
								alt='Arrow right'
								placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
							/>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

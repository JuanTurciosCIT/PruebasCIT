import { useCallback, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, SwiperOptions } from 'swiper';

import arrowRight from '@/svg/arrow-right.svg';
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import bipbipLogo from '@/images/bipbipLogo.png';
import styles from './casestudies.module.scss';
import utils from '@/styles/utils.module.scss';

export default function CaseStudies() {
	const isMobile: boolean = useMediaQuery('(max-width: 428px)');
	const { t } = useTranslation(localeNamespaces.HOME);
	const swiper = useSwiper();
	const swiperRef = useRef(swiper);

	const swiperOptions: SwiperOptions = {
		modules: [Pagination],
		spaceBetween: isMobile ? -55 : 0,
		slidesPerView: isMobile ? 1.5 : 3,
		loop: true,
		touchMoveStopPropagation: isMobile ? true : false,
		rewind: true,
		pagination: {
			dynamicBullets: true,
			type: 'bullets',
			clickable: true,
		},
		centeredSlides: isMobile ? false : true,
		centeredSlidesBounds: isMobile ? false : true,
		slidesOffsetBefore: isMobile ? 55 : 0,
	};

	const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
	const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.headerContainer}>
					<div className={styles.headerContent}>
						<h2 className={`${utils.headingMedium} ${styles.title}`}>
							Case Studies
						</h2>
						<span className={`${utils.textSmall} ${styles.link}`}>
							<Link href='/'>View All</Link>
							<Image src={arrowRight} alt='Arrow right' />
						</span>
					</div>
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
					<SwiperSlide>
						{({ isActive }) => (
							<div
								className={`${styles.cardWrapper} ${isActive && styles.active}`}
							>
								<span className={styles.tag}>MOBILE APP</span>
								<div className={styles.logo}>
									<Image
										src={bipbipLogo}
										width={126}
										height={92}
										alt='Bip bip logo'
									/>
								</div>
								<p className={`${utils.textSmall} ${styles.desc}`}>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
									Exercitation veniam consequat sunt nostrud amet.
								</p>
								<span className={`${utils.textSmall} ${styles.link}`}>
									<Link href={'/'}>Read more</Link>
									<Image src={arrowRight} alt='Arrow Right' />
								</span>
								{isActive && <div className={styles.triangle}></div>}
							</div>
						)}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => (
							<div
								className={`${styles.cardWrapper} ${isActive && styles.active}`}
							>
								<span className={styles.tag}>MOBILE APP</span>
								<div className={styles.logo}>
									<Image
										src={bipbipLogo}
										width={126}
										height={92}
										alt='Bip bip logo'
									/>
								</div>
								<p className={`${utils.textSmall} ${styles.desc}`}>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
									Exercitation veniam consequat sunt nostrud amet.
								</p>
								<span className={`${utils.textSmall} ${styles.link}`}>
									<Link href={'/'}>Read more</Link>
									<Image src={arrowRight} alt='Arrow Right' />
								</span>
								{isActive && <div className={styles.triangle}></div>}
							</div>
						)}
					</SwiperSlide>
					<SwiperSlide>
						{({ isActive }) => (
							<div
								className={`${styles.cardWrapper} ${isActive && styles.active}`}
							>
								<span className={styles.tag}>MOBILE APP</span>
								<div className={styles.logo}>
									<Image
										src={bipbipLogo}
										width={126}
										height={92}
										alt='Bip bip logo'
									/>
								</div>
								<p className={`${utils.textSmall} ${styles.desc}`}>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
									Exercitation veniam consequat sunt nostrud amet.
								</p>
								<span className={`${utils.textSmall} ${styles.link}`}>
									<Link href={'/'}>Read more</Link>
									<Image src={arrowRight} alt='Arrow Right' />
								</span>
								{isActive && <div className={styles.triangle}></div>}
							</div>
						)}
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

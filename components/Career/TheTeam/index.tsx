import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRef, useCallback } from 'react';
import useTranslation from 'next-translate/useTranslation';

import partnerPic from '/public/images/customer1.png';

import { SwiperOptions } from 'swiper';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import styles from './team.module.scss';
import utils from '@/styles/utils.module.scss';
import SliderButtons from '@/shared/SliderButtons';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';


export const TheTeam = () => {
	const isMobile: boolean = useMediaQuery('(max-width: 428px)');
  const swiper = useSwiper();
	const swiperRef = useRef(swiper);
  const { t } = useTranslation(localeNamespaces.CAREER);

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

  return <section className={styles.section}>
    <div>
      <h2 className={`${utils.headingMedium} ${styles.title}`}>{t('team.title')}</h2>
      <p className={`${utils.textMedium} ${styles.desc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sapien, id bibendum velit, tellus diam ut. Interdum sit egestas facilisi lacus amet vehicula nisl morbi. Urna ut nunc, sed malesuada faucibus fames odio cras. </p>
      <div>
      {
        isMobile ? (
          <Swiper
					{...swiperOptions}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
						<SwiperSlide className={styles.slider}>
							<div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
						</SwiperSlide>
				</Swiper>
        ) : (
          <div className={styles.grid}>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
            <div className={styles.partnerCard}>
								<div className={styles.partnerPic}>
									<Image
										priority
										quality={100}
										src={partnerPic}
										alt='Partner / coworker'
										width={80}
										height={80}
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={styles.name}>
                  Darlene Robertson
									</h3>
                  <p className={styles.role}>Web Developer</p>
								</div>
							</div>
          </div>
        )
      }
        {isMobile && <SliderButtons next={nextSlide} prev={prevSlide} />}
      </div>
    </div>
  </section>
}
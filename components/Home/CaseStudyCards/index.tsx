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
import styles from './casestudies.module.scss';
import utils from '@/styles/utils.module.scss';
import { CaseStudyCard } from 'utils/types/homeContent.interface';

export const CaseStudyCards = ({ content }: { content: CaseStudyCard[] }) => {
	const isMobile: boolean = useMediaQuery('(max-width: 599px)');
	const { t } = useTranslation(localeNamespaces.HOME);
	const swiper = useSwiper();
	const swiperRef = useRef(swiper);


  const calculateSlidesPerView = () =>{

    if(isMobile){
      if(content.length === 1){
        return 0
      }else if( content.length >= 2){
        return 1.5;
      }
    }else{
      
      if(content.length === 1){
        return 0
      }else if(content.length === 2)
      {
        return 1.5
      }else if( content.length >= 3){
        return 3
      }
    }

  }


	const swiperOptions: SwiperOptions = {
		modules: [Pagination],
		spaceBetween: isMobile ? -55 : 0,
		slidesPerView: calculateSlidesPerView(),
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

  console.log(content)


  let validateDescription = (description:string | undefined) => {

    if(description){
      if(description.length > 110){
        return(description   + '...')
      }else{
        return description
      }
    }else{
      return ''
    }

  }

	const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
	const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.headerContainer}>
					<div className={styles.headerContent}>
						<h2 className={`${utils.headingMedium} ${styles.title}`}>
							{t('case_studies.title')}
						</h2>
						<span className={`${utils.textSmall} ${styles.link}`}>
							<Link href='caseStudies'>{t('case_studies.link')}</Link>
							<Image src={arrowRight} alt='Arrow right' quality={70} lazyBoundary='600px' />
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
          style={{'margin':'0 auto'}}
				>
          <div   >
            
					{content.map((item, index) => (

            
						 <SwiperSlide key={item.id}>
							{({ isActive, isPrev }) => (
								<Link key={item.id} href={`/caseStudies/${item.id}`}  >
                <div
									style={{
										backgroundImage: `linear-gradient(180deg,
											rgba(39, 39, 39, 0.88) 0%,
											rgba(39, 39, 39, 0.89) 39.56%,
											rgba(39, 39, 39, 0.99) 69.49%,
											#272727 100%), url(${item.picture})`,
									}}
									className={`${styles.cardWrapper} ${
										isActive && styles.active
									} ${isPrev && styles.prev}`}
								>
									<span className={styles.tag}>{item.tagEN || item.tagES}</span>
									<div className={styles.logo}>
										<Image
											// priority
											lazyBoundary='600px'
											quality={70}
											src={item.logo}
											width={120}
											height={100}
											objectFit='contain'
											alt={`${item.titleEN || item.titleES} logo`}
											placeholder='blur'
											blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
										/>
									</div>
                  <div  className={styles.containerInfo} >
                    <p className={`${utils.textSmall} ${styles.desc}`}>

                      { item.CaseStudyDetail.length > 0 ? validateDescription(item.CaseStudyDetail[0].heroTitleEN)  || validateDescription(item.CaseStudyDetail[0].heroTitleES) : ''}
                    </p>
                    <span className={`${utils.textSmall} ${styles.link}`}>
                      <Link href={`/caseStudies/${item.id}`}>{t('case_studies.card_link')}</Link>
                      <Image
                        quality={70}
                        lazyBoundary='600px'
                        
                        src={arrowRight}
                        alt='Arrow Right'
                      />
                    </span>
                  </div>
									{isActive && <div className={styles.triangle}></div>}
								</div>
                </Link>
                


							)}
						</SwiperSlide>

					))}
          </div>
				</Swiper>
			</div>
		</section>
	);
}

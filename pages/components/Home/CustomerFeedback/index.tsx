import Image from 'next/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { SwiperOptions } from 'swiper';
import "swiper/css";
// import 'swiper/modules/effect-cards'

import utils from '@/styles/utils.module.scss';
import styles from './customerFeedback.module.scss';
import customer1 from '@/images/customer1.png';
import customer2 from '@/images/customer2.png';
import customer3 from '@/images/customer3.png';
import starIcon from '@/svg/star_feedback.svg';
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function CustomerFeedback() {
  const isMobile: boolean = useMediaQuery('(max-width: 428px)');

  const swiper = useSwiper();
  const swiperRef = useRef(swiper);

  /* A React hook that is used to memoize a function. */
  const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
  const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

  const swiperOptions: SwiperOptions = {
    spaceBetween: 20,
    slidesPerView: isMobile ? 1 : 3,
    loop: true,
    touchMoveStopPropagation: isMobile ? true : false,
    rewind: true,
    centeredSlides: true,
  }
  
  return <section className={styles.section}>
    <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>What they say about us</h2>
    <Swiper {...swiperOptions} onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}>
      <SwiperSlide>
        <div className={styles.feedbackCard}>
          <div className={styles.customerPic}>
            <Image src={customer1} alt="Customer 1" width={80} height={80} />
          </div>
          <div className={styles.info}>
            <div className={styles.stars}>
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
            </div>
            <h3 className={`${utils.headingMedium} ${styles.name}`}>Jane Cooper</h3>
            <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, pretium, condimentum id quis elit dolor nec vulputate. Neque pulvinar tristique amet, sodales sit id. At urna eu vel non.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.feedbackCard}>
          <div className={styles.customerPic}>
            <Image src={customer2} alt="Customer 1" width={80} height={80} />
          </div>
          <div className={styles.info}>
            <div className={styles.stars}>
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
            </div>
            <h3 className={`${utils.headingMedium} ${styles.name}`}>Courtney Henry</h3>
            <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, pretium, condimentum id quis elit dolor nec vulputate. Neque pulvinar tristique amet, sodales sit id. At urna eu vel non.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.feedbackCard}>
          <div className={styles.customerPic}>
            <Image src={customer3} alt="Customer 1" width={80} height={80} />
          </div>
          <div className={styles.info}>
            <div className={styles.stars}>
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
              <Image src={starIcon} alt='Feedback star' width={14} height={14} />
            </div>
            <h3 className={`${utils.headingMedium} ${styles.name}`}>Cameron Williamson</h3>
            <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, pretium, condimentum id quis elit dolor nec vulputate. Neque pulvinar tristique amet, sodales sit id. At urna eu vel non.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <SliderButtons next={nextSlide} prev={prevSlide} />
  </section>
}
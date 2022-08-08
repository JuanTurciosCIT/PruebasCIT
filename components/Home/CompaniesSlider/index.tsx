import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import dennysLogo from '@/images/dennys-logo.png';
import gaterodeLogo from '@/images/gaterode-logo.png';
import kfcLogo from '@/images/kfc-logo.png';
import pizzahutLogo from '@/images/pizzahut-logo.png';
import pepsiLogo from '@/images/pepsi-logo.png';
import styles from './companiesSlider.module.scss';
import utils from 'styles/utils.module.scss';

export default function CompaniesSlider(): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 428px)');

  const sliderOptions: SwiperProps = {
    modules: [Pagination, Autoplay],
    slidesPerView: isMobile ? 3 : 5,
    spaceBetween: isMobile ? 22 : 32,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      dynamicBullets: true,
      type: 'bullets',
      clickable: true,
    },
    touchMoveStopPropagation: isMobile ? true : false,
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    }
  }


  // I need all the assets in color and the same size
  // when is not active, the image is smaller (scale) than the other and it has a black and white filter
  return <section className={styles.container}>
      <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>Companies that trust on us</h2>
      <div className={styles.sliderContainer}>
        <Swiper {...sliderOptions} className="mySwiper">
          <SwiperSlide>
            <div className={styles.logoContainer}>
              <Image src={dennysLogo} alt="Denny's" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.logoContainer}>
              <Image src={gaterodeLogo} alt="Gaterode" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.logoContainer}>
              <Image src={kfcLogo} alt="KFC" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.logoContainer}>
              <Image src={pizzahutLogo} alt="Pizza Hut" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.logoContainer}>
              <Image src={pepsiLogo} alt="Pepsi" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  </section>
}
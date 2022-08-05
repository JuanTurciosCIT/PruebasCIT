import { useRef, useCallback } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SwiperOptions } from "swiper";
import "swiper/css";

import utils from "@/styles/utils.module.scss";
import styles from "./portfolio.module.scss";
import SlidersButtons from "shared/components/SliderButtons";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Portfolio() {
  const isMobile: boolean = useMediaQuery("(max-width: 428px)");
  const swiper = useSwiper();
  const swiperRef = useRef(swiper);

  const nextSlyde = useCallback(() => swiperRef.current.slideNext(), []);
  const prevSlyde = useCallback(() => swiperRef.current.slidePrev(), []);

  const swiperOptions: SwiperOptions = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    touchMoveStopPropagation: isMobile ? true : false,
    rewind: true,
    centeredSlides: true,
  };

  return (
    <section className={styles.container}>
      <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
        Portfolio and Case Studies
      </h2>

      <Swiper
        className={styles.sliderContainer}
        {...swiperOptions}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className={styles.itemsContainer}>
          <div className={styles.portfolioItem1}></div>
          <div className={styles.portfolioItem2}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.itemsContainer}>
          <div className={styles.portfolioItem2}></div>
          <div className={styles.portfolioItem1}></div>
        </SwiperSlide>
      </Swiper>

      <SlidersButtons next={nextSlyde} prev={prevSlyde} />
    </section>
  );
}

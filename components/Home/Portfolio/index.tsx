import { useRef, useCallback } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SwiperOptions } from "swiper";
import "swiper/css";

import utils from "@/styles/utils.module.scss";
import styles from "./portfolio.module.scss";
import SliderButtons from "@/shared/SliderButtons";
import { useMediaQuery } from "utils/hooks/useMediaQuery";

export default function Portfolio() {
  const isMobile: boolean = useMediaQuery("(max-width: 428px)");

  const swiper = useSwiper();
  const swiperRef = useRef(swiper);

  const swiperOptions: SwiperOptions = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    touchMoveStopPropagation: isMobile ? true : false,
    rewind: true,
    centeredSlides: true,
  };

  const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
  const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

  return (
    <section className={styles.container}>
      <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>
        Portfolio and Case Studies
      </h2>

      <Swiper
        className={styles.sliderContainer}
        {...swiperOptions}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        <SwiperSlide className={styles.itemsContainer}>
          <div className={styles.card1}></div>
          <div className={styles.card2}></div>
        </SwiperSlide>
        <SwiperSlide className={styles.itemsContainer}>
          <div className={styles.card2}></div>
          <div className={styles.card1}></div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.BtnWrapper}>
        <SliderButtons next={nextSlide} prev={prevSlide} />
      </div>
    </section>
  );
}

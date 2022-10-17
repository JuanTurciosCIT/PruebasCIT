import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRef, useCallback } from "react";
import useTranslation from "next-translate/useTranslation";

import { SwiperOptions } from "swiper";
import { useMediaQuery } from "utils/hooks/useMediaQuery";
import style from "./team.module.scss";
import utils from "@/styles/utils.module.scss";
import SliderButtons from "@/shared/SliderButtons";
import { localeNamespaces } from "utils/types/localeNamespaces.enum";
import { CareerEmployeeInterface } from "utils/types/careerContent.interface";
import { useRouter } from "next/router";

export const Team = ({
  employees,
}: {
  employees: CareerEmployeeInterface[];
}) => {
  const isMobile: boolean = useMediaQuery("(max-width: 599px)");
  const swiper = useSwiper();
  const swiperRef = useRef(swiper);
  const { t } = useTranslation(localeNamespaces.CAREER);
  const router = useRouter();

  const swiperOptions: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: isMobile ? 1 : 3,
    loop: true,
    touchMoveStopPropagation: isMobile,
    rewind: true,
    centeredSlides: true,
  };

  /* A React hook that is used to memoize a function. */
  const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
  const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

  return (
    <section className={style.section} >
      <div>
        <h2 className={`${utils.headingMedium} ${style.title}`}>
          {t("Meet Our Team")}
        </h2>
        <div>
          {isMobile ? (
            <Swiper
            className={style.swiper}
              {...swiperOptions}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {
                employees.map((employee) => (
                  <SwiperSlide className={style.slider} key={employee.id}>
                    <div slot="container-start" className={style.partnerCard}>
                      <div className={style.partnerPic}>
                        <Image
                          src={employee.imagePath}
                          alt={employee.fullName}
                          layout="fill"
                          objectFit="cover"
                          objectPosition={"0 -52px"}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII="
                        />
                      </div>
                      <div className={style.textWrapper}>
                        <h3 className={style.name}>{employee.fullName}</h3>
                        <p className={style.role}>
                          {employee.jobPositionEN || employee.jobPositionES}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          ) : (
            <div className={style.grid}>
              {employees.map((employee) => (
                <div className={style.partnerCard} key={employee.id}>
                  <div className={style.partnerPic}>
                    <Image
                      priority
                      quality={100}
                      src={employee.imagePath}
                      alt={employee.fullName}
                      layout="fill"
                      objectFit="cover"
                      objectPosition={"0 -52px"}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII="
                    />
                  </div>
                  <div className={style.textWrapper}>
                    <h3 className={style.name}>{employee.fullName}</h3>
                    <p className={style.role}>
                      {employee.jobPositionEN || employee.jobPositionES}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isMobile && <SliderButtons next={nextSlide} prev={prevSlide} />}
        </div>
      </div>
    </section>
  );
};

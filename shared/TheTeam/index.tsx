import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRef, useCallback } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { SwiperOptions } from 'swiper';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import theme1 from './team.module.scss';
import theme2 from './teamTheme2.module.scss';
import utils from '@/styles/utils.module.scss';
import SliderButtons from '@/shared/SliderButtons';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { CareerEmployeeInterface } from 'utils/types/careerContent.interface';
import { useRouter } from 'next/router';


export const TheTeam = ({ employees, theme }: { employees: CareerEmployeeInterface[], theme?: 'theme1' | 'theme2' }) => {
	const chosenTheme = theme === 'theme1' ? theme1 : theme2;

	const isMobile: boolean = useMediaQuery('(max-width: 432px)');
  const swiper = useSwiper();
	const swiperRef = useRef(swiper);
  const { t } = useTranslation(localeNamespaces.CAREER);
	const router = useRouter();

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

  return <section className={chosenTheme.section}>
    <div>
      <h2 className={`${utils.headingMedium} ${chosenTheme.title}`}>{t('team.title')}</h2>
      {
				!router.pathname.includes('about-us') && <p className={`${utils.textMedium} ${chosenTheme.desc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus sapien, id bibendum velit, tellus diam ut. Interdum sit egestas facilisi lacus amet vehicula nisl morbi. Urna ut nunc, sed malesuada faucibus fames odio cras. </p>
			}
      <div>
      {
        isMobile ? (
          <Swiper
					{...swiperOptions}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
						{
							employees.map((employee) => (
							<SwiperSlide className={chosenTheme.slider} key={employee.id}>
								<div className={chosenTheme.partnerCard}>
									<div className={chosenTheme.partnerPic}>
										<Image
											priority
											quality={100}
											src={employee.imagePath}
											alt={employee.fullName}
											width={80}
											height={80}
											objectFit='cover'
											objectPosition='top'
											placeholder='blur'
											blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
										/>
									</div>
									<div>
										<h3 className={chosenTheme.name}>
										{employee.fullName}
										</h3>
										<p className={chosenTheme.role}>{employee.jobPositionEN || employee.jobPositionES}</p>
									</div>
								</div>
						</SwiperSlide>
							))
						}
				</Swiper>
        ) : (
          <div className={chosenTheme.grid}>
						{
							employees.map((employee) => (
								<div className={chosenTheme.partnerCard} key={employee.id}>
								<div className={chosenTheme.partnerPic}>
									<Image
										priority
										quality={100}
										src={employee.imagePath}
										alt={employee.fullName}
										width={80}
										height={80}
										objectPosition='top'
										objectFit='cover'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
									/>
								</div>
								<div>
									<h3 className={chosenTheme.name}>
                  {employee.fullName}
									</h3>
                  <p className={chosenTheme.role}>{employee.jobPositionEN || employee.jobPositionES}</p>
								</div>
							</div>
							))
						}
          </div>
        )
      }
        {isMobile && <SliderButtons next={nextSlide} prev={prevSlide} />}
      </div>
    </div>
  </section>
}
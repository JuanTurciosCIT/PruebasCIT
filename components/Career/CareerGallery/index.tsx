// eslint-disable-next-line react-hooks/exhaustive-deps
import Image from 'next/future/image';
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import useTranslation from 'next-translate/useTranslation';
import { SwiperOptions } from 'swiper';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';

import styles from './careerGallery.module.scss';
import utils from '@/styles/utils.module.scss';
import { useState, useEffect } from "react";
import SliderButtons from '@/shared/SliderButtons';
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { CareerOfficesInterface } from 'utils/types/careerContent.interface';

export const CareerGallery = ({ content }: { content: CareerOfficesInterface[] }) => {
  
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageToShow, setImageToShow] = useState([]);
  let index = 0;
  
  const isMobile: boolean = useMediaQuery('(max-width: 599px)');
	const { ref, inView } = useInView();
	const { t } = useTranslation(localeNamespaces.CAREER);

	const swiper = useSwiper();
	const swiperRef = useRef(swiper);

	const swiperOptions: SwiperOptions = {
		spaceBetween: 0,
		slidesPerView: isMobile ? 1 : 2.56,
		loop: true,
		touchMoveStopPropagation: isMobile ? true : false,
		rewind: true,
		centeredSlides: true,
	};

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  let slicesImagtes =(images:string[])=>{

    let slices = images.length / 3;
    let newArray:any;

    let chunckArrayInGroups = (arr:any[], size:number) => {
      let chunk = [], i; // declara array vacio e indice de for
      for (i = 0; i <= arr.length; i+= size) // loop que recorre el array 
        chunk.push(arr.slice(i, i + size)); // push al array el tramo desde el indice del loop hasta el valor size + el indicador 
      return chunk;
    }

    newArray = chunckArrayInGroups(images,slices);
    return newArray;
  }

	// const sortedProcess = content.sort((a, b) => a.order - b.order);

	/* A React hook that is used to memoize a function. */
	const nextSlide = useCallback(() => swiperRef.current.slideNext(), []);
	const prevSlide = useCallback(() => swiperRef.current.slidePrev(), []);

  useEffect(()=>{

    /* let showImag = slicesImagtes(content)
    setImageToShow(showImag[index])
    
      const interval = setInterval(()=>{
        index++;
      
        if(index >= 3){
          index = 0;
        }
        
        setImageToShow(showImag[index])
        paginate(1);
      },5000)  */
    console.log(content)
      //return () => clearInterval(interval);
  
  },[])

	return (
		<section className={styles.section} ref={ref}>
			<div className={styles.sectionHeader}>
				<h2 className={`${utils.headingMedium} ${styles.sectionTitle}`}>
					{t('gallery.title')}
				</h2>
			</div>
			<ScrollReveal isVisible={inView} className={styles.container}>
				<Swiper
					{...swiperOptions}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
				>
					{
						content.map((img) => (
							<SwiperSlide key={img.id}>
                <div className={styles.image}>
                  <Image src={img.imagePath} alt='Offices' sizes='100vw' fill placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII=' />
                </div>
					    </SwiperSlide>
						))
					}
				</Swiper>
        <div className={styles.sliderButtons}>
					<SliderButtons next={nextSlide} prev={prevSlide} />
				</div>
			</ScrollReveal>
		</section>
	);
};

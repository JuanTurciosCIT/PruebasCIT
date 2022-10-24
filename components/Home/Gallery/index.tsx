import Image from 'next/image';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from "react";
import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import utils from '@/styles/utils.module.scss';
import styles from './gallery.module.scss';
import { useInView } from 'react-intersection-observer';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { GallerySection } from 'utils/types/homeContent.interface';
import { motion,AnimatePresence, useAnimation } from 'framer-motion';
import 'animate.css'
import { Console } from 'console';
import Router from 'next/router';
import Link from 'next/link';

/* A way to import a component that is not SSR compatible. */
const Masonry = dynamic(() => import('react-smart-masonry'), {
	ssr: false,
	loading: () => <h2>Loading...</h2>,
});

export const Gallery = ({ gallery }: { gallery: GallerySection }) => {
  
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageToShow, setImageToShow] = useState([]);
  let index = 0;

  const isMobile: boolean = useMediaQuery('(max-width: 599px)');
	const { t } = useTranslation(localeNamespaces.HOME);
	const { inView, ref } = useInView();


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

  useEffect(()=>{

    let showImag = slicesImagtes(gallery.images)
    setImageToShow(showImag[index])
    
      const interval = setInterval(()=>{
        index++;
      
        if(index >= 3){
          index = 0;
        }
        
        setImageToShow(showImag[index])
        paginate(1);
      },5000) 
    
      return () => clearInterval(interval);
  
  },[])


  
	return (
		<ScrollReveal isVisible={inView}>
			<section className={styles.container} ref={ref}>
				<div className={styles.description}>
					<h1 className={`${utils.headingMedium} ${styles.title}`}>
						{t('gallery.title')}
					</h1>
					<p className={`${utils.textSmall} ${styles.descriptionParagraph}`}>
						{gallery.captionEN || gallery.captionES}
					</p>
          <Link href='http://jobs.cit.hn/' target='_blank'>
            <a className={styles.a} target={'_blank'}>
              <button className={styles.button}>{t('gallery.btn_text')}
            </button>

            </a>
          </Link>
				</div>

				<Masonry
					className={styles.galleryWrapper}
					columns={2}
					gap={isMobile ? 16 : 22.5}
				>
					{imageToShow.map((image, index) => (
						<div className={styles[`${'picture'}${index + 1}`]} key={image}>

              <div className={styles.transitionImage} >
                <Image
                  src={image}
                  alt='gallery'
                  className={styles.picture + ' animate__animated animate__bounceIn'}
                  layout='fill'
                  placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
                /> 
              </div>
						</div>
					))}
				</Masonry>
			</section>
		</ScrollReveal>
	);

}

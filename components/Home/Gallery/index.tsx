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

    let allImages = gallery.images;

    let showImag:any[] = [
      [
        allImages[0],
        allImages[1],
        allImages[2],
        allImages[3],
      ],
      [
        allImages[4],
        allImages[1],
        allImages[2],
        allImages[5],
      ],
      [
        allImages[4],
        allImages[6],
        allImages[7],
        allImages[5],
      ],
      [
        allImages[8],
        allImages[6],
        allImages[7],
        allImages[9],
      ],
      [
        allImages[8],
        allImages[10],
        allImages[11],
        allImages[9],
      ],
      [
        allImages[0],
        allImages[10],
        allImages[11],
        allImages[3],
      ],
    ]
    
    setImageToShow(showImag[index])
    
      const interval = setInterval(()=>{
        index++;
      
        if(index >= 6){
          index = 0;
        }
        
        setImageToShow(showImag[index])
        paginate(1);
      },3000) 
    
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
								  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAKgBEgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z'
                /> 
              </div>
						</div>
					))}
				</Masonry>
			</section>
		</ScrollReveal>
	);

}

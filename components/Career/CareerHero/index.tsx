// eslint-disable-next-line react-hooks/exhaustive-deps
import Image from 'next/image';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from "react";

import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import utils from '@/styles/utils.module.scss';
import styles from './careerHero.module.scss';
import { useInView } from 'react-intersection-observer';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { CustomButton } from '@/shared/CustomButton';
import { CareerHeroInterface } from 'utils/types/careerContent.interface';
import 'animate.css'

/* A way to import a component that is not SSR compatible. */
const Masonry = dynamic(() => import('react-smart-masonry'), {
	ssr: false,
	loading: () => <h2>Loading...</h2>,
});

export const CareerHero = ({ content }: { content: CareerHeroInterface }) => {
	const [[page, direction], setPage] = useState([0, 0]);
  const [imageToShow, setImageToShow] = useState([]);
  let index = 0;

  
  const isMobile: boolean = useMediaQuery('(max-width: 599px)');
	const { t } = useTranslation(localeNamespaces.CAREER);
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

    let allImages = content.pathImages
    //let showImag = slicesImagtes(content.pathImages)

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
					{content.titleEN || content.titleES}
					</h1>
					<p className={`${utils.textSmall} ${styles.descriptionParagraph}`}>
					{content.captionEN || content.captionES}
					</p>
					<div className={styles.button}>
						<CustomButton path='http://jobs.cit.hn/' target='_blank'>{t('hero.btn_text')}</CustomButton>
					</div>
				</div>

				<Masonry
					className={styles.galleryWrapper}
					columns={2}
					gap={isMobile ? 15 : 20}
				>
					{imageToShow.map((image, index) => (
						<div   className={styles[`${'picture'}${index + 1}`]} key={image}>
							<Image
								priority={true}
								//loading='eager'
								src={image}
								alt='gallery'
								className={styles.picture + ' animate__animated animate__bounceIn'}
								layout='fill'
								// loading='eager'
								placeholder='blur'
                blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAKgBEgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z'
							/>
						</div>
					))}
				</Masonry>
			</section>
		</ScrollReveal>
	);
}

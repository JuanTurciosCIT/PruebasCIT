import Image from 'next/image';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import utils from '@/styles/utils.module.scss';
import styles  from './gallery.module.scss';
import picture1 from '@/images/imgGallery1.jpg';
import picture2 from '@/images/imgGallery2.jpg';
import picture3 from '@/images/imgGallery3.jpg';
import picture4 from '@/images/imgGallery4.jpg';

export default function Gallery(){
    const isMobile: boolean = useMediaQuery('max-width: 428px');

    return <section className={styles.container}>
      
            <div className={styles.description}>
                <h1 className={`${utils.headingMedium} ${styles.title}`}>Come work with us</h1>
                <p className={`${utils.textSmall} ${styles.descriptionParagraph}`}>
                    We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region. We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region.
                </p>
                <button className={styles.button}>Learn More</button>
            </div>
            <div className={styles.gallery}>
                
            </div>
                


 
    </section>
}
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import utils from '@/styles/utils.module.scss';
import styles  from './gallery.module.scss';
import picture1 from '@/images/imgGallery1.jpg';
import picture2 from '@/images/imgGallery2.jpg';
import picture3 from '@/images/imgGallery3.jpg';
import picture4 from '@/images/imgGallery4.jpg';

/* A way to import a component that is not SSR compatible. */
const Masonry = dynamic(() => import('react-smart-masonry'), { ssr: false, loading: () => <h2>Loading...</h2> });

export default function Gallery() {
    const isMobile: boolean = useMediaQuery('max-width: 428px');


    return <section className={styles.container}>
            <div className={styles.description}>
                <h1 className={`${utils.headingMedium} ${styles.title}`}>Come work with us</h1>
                <p className={`${utils.textSmall} ${styles.descriptionParagraph}`}>
                    We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region. We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region.
                </p>
                <button className={styles.button}>Learn More</button>
            </div>
            
            <Masonry className={styles.galleryWrapper} columns={2} gap={isMobile ? 12 : 25}>
                <div className={styles.picture1}>
                    <Image src={picture1} alt="gallery" className={styles.picture} />
                </div>
                <div className={styles.picture2}>
                    <Image src={picture2} alt="gallery" className={styles.picture} />
                </div>
                <div className={styles.picture3}>
                    <Image src={picture3} alt="gallery" className={styles.picture} />
                </div>
                <div className={styles.picture4}>
                    <Image src={picture4} alt="gallery" className={styles.picture} />
                </div>
            </Masonry>
    </section>
}
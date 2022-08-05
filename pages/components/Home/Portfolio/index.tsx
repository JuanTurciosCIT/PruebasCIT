import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import utils from '@/styles/utils.module.scss';
import styles from './portfolio.module.scss';

export default function Portfolio() {
    return <section className={styles.container}>
    <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>Portfolio and Case Studies</h2>
        <div className={styles.itemsContainer}>
            <div className={styles.portfolioItem1}>

            </div>
            <div className={styles.portfolioItem2}>

            </div>

        </div>
    </section>
}
import React from 'react';
import styles from './ceoComment.module.scss'
import Image from 'next/image';
import doubleQuotes from 'public/images/double-quotes.png';
import { AboutCoComment } from 'utils/types/AboutUs/aboutUsContent.interfaces';

function CeoComment({content}: {content: AboutCoComment}) {
  return (
    <section className={styles.section}>

        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
             <Image src={doubleQuotes} alt='Team image' className={styles.image}/>
            </div>
            <p className={styles.paragraph}>
              {content.captionEN || content.captionES}

              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ex in lacus commodo, <strong>Non Rhoncus Lorem Egestas.</strong>  In posuere erat sit amet turpis <strong>Pulvinar Rhoncus</strong> pulvinar rhoncus. Aenean fringilla fermentum efficitur. */}
            </p>
            <p className={styles.name}>
               {content.coName}
            </p>
            <p className={styles.role}>
                {content.chargeEN || content.chargeES}
            </p>
        </div>
 
    </section>
  )
}

export default CeoComment
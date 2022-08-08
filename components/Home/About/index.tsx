import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';

import utils from 'styles/utils.module.scss';
import styles from './about.module.scss';
import playIcon from '@/svg/play.svg';

/* A way to import a component that is not SSR compatible. */
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function About() {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  const playVideo = () => setShowPlaceholder(false);

  return <section className={styles.aboutSection}>
    <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>About our company</h2>
    <div className={styles.videoContainer}>
    
      {/* The styles for the preview image and play icon can be overridden by targeting the CSS classes react-player__preview, react-player__shadow and react-player__play-icon. */}
      <ReactPlayer 
        className={styles.reactPlayer}
        url='https://youtu.be/OjWQS7xQVzI'
        light={showPlaceholder && '/images/about_video.jpg'}
        width='100%'
        height='auto'
      />
      <div className={`${showPlaceholder && styles.mirror}`}></div>
      {showPlaceholder && (
        <button className={styles.playBtn} onClick={playVideo}>
          <Image src={playIcon} alt='Play video' />
          Play Video
        </button>
      )}
    </div>
  </section>
}
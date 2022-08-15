import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import utils from 'styles/utils.module.scss';
import styles from './about.module.scss';
import playIcon from '@/svg/play.svg';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { GradientButton } from '@/shared/GradientButton';
import { HomeSections } from 'utils/types/sections.enum';
import { AboutSection } from 'utils/types/homeContent.interface';

/* A way to import a component that is not SSR compatible. */
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function About({ aboutContent }: {  aboutContent: AboutSection }) {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const { t } = useTranslation(localeNamespaces.HOME);

  const playVideo = useCallback(() => setShowPlaceholder(false), []);

  return <section className={styles.aboutSection} id={HomeSections.ABOUT}>
    <h2 className={`${utils.headingMedium} ${styles.subtitle}`}>{t('about.title')}</h2>
    <div className={styles.videoContainer}>
    
      {/* The styles for the preview image and play icon can be overridden by targeting the CSS classes react-player__preview, react-player__shadow and react-player__play-icon. */}
      <ReactPlayer 
        className={styles.reactPlayer}
        url='https://youtu.be/OjWQS7xQVzI'
        light={showPlaceholder && aboutContent.placeholderImage}
        width='100%'
        height='auto'
      />
      <div className={`${showPlaceholder && styles.mirror}`}></div>
      {showPlaceholder && 
        <GradientButton onClick={playVideo}>
          <Image src={playIcon} alt='Play video'/>
          <span>{t('about.btn_text')}</span>
        </GradientButton>
      }
    </div>
  </section>
}
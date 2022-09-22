import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import { CustomButton } from '@/shared/CustomButton';
import styles from './CaseStudyHero.module.scss';
import utils from 'styles/utils.module.scss';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { HeroSection } from 'utils/types/homeContent.interface';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import bipbipLogo from '/public/images/logo-bipbip-white.png'

export const CaseStudyHero = () => {
	// const { t } = useTranslation(localeNamespaces.HOME);
	const isMobile = useMediaQuery('(max-width: 428px)');

	return (
		<section className={styles.hero}>
			<div className={styles.wrapper}>
				<div className={styles.infoContainer}>
          <div className={`${utils.headingMedium} ${styles.titlesWrapper}`}>
            <h1 className={styles.title}>
              {/* {heroContent.titleEN || heroContent.titleES} */}
              Delivery Startup exceeds internal and external users expectations with top of the line Custom Solution
            </h1>
            <p className={`${utils.textMedium} ${styles.desc}`}>Our end-to-end solution development partnership with the largest restaurant chain in Honduras.</p>
              <div className={styles.btnWrapper}>
              <a
                className={`${styles.downloadBtn} ${styles.textMedium}`}
                download
                href="/files/example.pdf"
                target="_self"
                rel="noopener noreferrer"
              >Download PDF</a>
              </div>
          </div>
          <div className={styles.logoContainer}>
            <Image src={bipbipLogo} alt='logo' layout='fill' objectFit='contain'  />
          </div>
        </div>
			</div>
		</section>
	);
}

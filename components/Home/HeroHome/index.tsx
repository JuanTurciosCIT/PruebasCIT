import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import CustomButton from "@/shared/CustomButton";
import styles from "./herohome.module.scss"
import utils from 'styles/utils.module.scss';
import { localeNamespaces } from 'utils/types/localeNamespaces';
import { useContentData } from '@/hooks/useContentData';

export default function HeroHome() {
 const { t } = useTranslation(localeNamespaces.HOME);
 const data = useContentData();

 const router = useRouter();
 console.log(data);
 console.log('router => ', router);

  const title = t('hero.title', { title: data.title });
  const subtitle = t('hero.subtitle', { subtitle: data.subtitle });
  const caption = t('hero.caption', { caption: data.caption });

  return <section className={styles.hero}>
    <div className={styles.wrapper}>
      <div className={`${utils.headingLarge} ${styles.heroTitle}`}>
        <h1 className={styles.mainTitle}>{title} <span className={styles.creativeText}>CREATIVE</span></h1>
        <h2>{subtitle}</h2>
      </div>
      <div className={`${utils.textSmall} ${styles.heroDescription}`}>
        <p>{caption}</p>
      </div>
      <div>
        <CustomButton>{t('shared.btn_text')}</CustomButton>
      </div>
    </div>
  </section>
}
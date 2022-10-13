import styles from "./misionVision.module.scss";
import misionImage from 'public/images/Mision-min.jpg'
import Image from "next/image";
import { AboutCompanyValue } from "utils/types/AboutUs/aboutUsContent.interfaces";
import useTranslation from "next-translate/useTranslation";
import { localeNamespaces } from "utils/types/localeNamespaces.enum";


const OUR_MISSION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ex in lacus commodo, non rhoncus lorem egestas. In posuere erat sit amet turpis pulvinar rhoncus. Aenean fringilla fermentum efficitur. 

Nulla facilisi. Ut et sem gravida, pellentesque velit ut, auctor lectus. Aliquam sit amet convallis magna, id molestie lacus. Proin molestie lorem id vulputate cursus.`;

export const MisionVisionComponent = ({ content }: {content: AboutCompanyValue}) => {
  const splittedMission = OUR_MISSION.split('\n\n');
  const { t } = useTranslation(localeNamespaces.ABOUT_US)
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
            <div className={styles.content}>
                <h3>{t('companyValues.mision')}</h3>    
                <p>{content.misionEN || content.misionES}</p>
                {/* <ul className={styles.list}>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                </ul> */}
            </div>
            <div className={styles.image}>
                <Image 
                priority
                quality={70}
                src={content.imagePath} 
                lazyBoundary=''
                alt='A people team' 
                layout="fill" 
                objectFit="cover" 
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII="
                />
            </div>
        </div>
      </div>
    </section>
  );
};

import { AboutHeroInterface } from "utils/types/AboutUs/aboutUsContent.interfaces";
import styles from "./aboutUs.module.scss";
import utils from "/styles/utils.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const AboutUsHero = ({ content }: { content: AboutHeroInterface }) => {
  const isMobile = useMediaQuery("(max-width: 432px)");

  return (
    <section className={styles.container} style={{backgroundImage: `url(${content.imagePath})`}}>
      <div className={styles.wrapper}>
        <h1 className={`${utils.headingLarge} ${styles.title}`}>
            {content.titleEN || content.titleES}
        </h1>
        <p>
            {content.captionEN || content.captionES}
        </p>
      </div>
    </section>
  );
};

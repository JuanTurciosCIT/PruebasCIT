import styles from "./misionVision.module.scss";
import misionImage from 'public/images/Mision-min.jpg'
import Image from "next/image";

export const MisionVisionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div>
            <div className={styles.content}>
                <h1>Our mission</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    tempus ex in lacus commodo, non rhoncus lorem egestas. In posuere
                    erat sit amet turpis pulvinar rhoncus. Aenean fringilla fermentum
                    efficitur. Nulla facilisi. Ut et sem gravida, pellentesque velit ut,
                    auctor lectus. Aliquam sit amet convallis magna, id molestie lacus.
                    Proin molestie lorem id vulputate cursus.
                </p>
            </div>
            <div className={styles.image}>
                <Image  src={misionImage} alt='A people team' />
            </div>
        </div>
      </div>
    </section>
  );
};

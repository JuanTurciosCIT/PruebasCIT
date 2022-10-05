import styles from "./misionVision.module.scss";
import misionImage from 'public/images/Mision-min.jpg'
import Image from "next/image";


const OUR_MISSION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus ex in lacus commodo, non rhoncus lorem egestas. In posuere erat sit amet turpis pulvinar rhoncus. Aenean fringilla fermentum efficitur. 

Nulla facilisi. Ut et sem gravida, pellentesque velit ut, auctor lectus. Aliquam sit amet convallis magna, id molestie lacus. Proin molestie lorem id vulputate cursus.`;

export const MisionVisionComponent = () => {
  const splittedMission = OUR_MISSION.split('\n\n');

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
            <div className={styles.content}>
                <h3>Our mission</h3>
                {
                  splittedMission.map((paragraph, index) => <p key={paragraph}>{paragraph}</p>)
                }
                <ul className={styles.list}>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor.</li>
                </ul>
            </div>
            <div className={styles.image}>
                <Image src={misionImage} alt='A people team' layout="fill" objectFit="cover" />
            </div>
        </div>
      </div>
    </section>
  );
};

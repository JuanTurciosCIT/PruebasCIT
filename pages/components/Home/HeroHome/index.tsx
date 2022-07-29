import CustomButton from "../../../../components/CustomButton"
import styles from "./herohome.module.scss"
import utils from 'styles/utils.module.scss';

export default function HeroHome() {
  return <section className={styles.hero}>
    <div className={styles.wrapper}>
      <div className={`${utils.headingLarge} ${styles.heroTitle}`}>
        <h1 className={styles.mainTitle}>This is <span className={styles.creativeText}>CREATIVE</span></h1>
        <h2>We build cutting edge digital solutions</h2>
      </div>
      <div className={`${utils.textSmall} ${styles.heroDescription}`}>
        <p>We are nearshore software development lab with a team of top-notch software developers and designers on the latin America region.</p>
      </div>
      <div>
        <CustomButton>Contact Us</CustomButton>
      </div>
    </div>
  </section>
}
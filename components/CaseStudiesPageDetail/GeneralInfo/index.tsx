import styles from './generalInfo.module.scss';
import utils from '/styles/utils.module.scss';

export const GeneralInfo = () => {
  return <div className={styles.container}>
    <div className={styles.titleWrapper}>
      <h2 className={utils.headingMedium}>At Glance</h2>
    </div>
    <div className={styles.infoWrapper}>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>Industry:</h3>
        <p className={`${utils.textSmall} ${styles.desc}`}>Food and Beverage, Food Delivery, E-commerce Platform</p>
      </div>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>Company Size:</h3>
        <p className={`${utils.textSmall} ${styles.desc}`}>Multinacional Enterprise </p>
      </div>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>Goal:</h3>
        <p className={`${utils.textSmall} ${styles.desc}`}>Create and Build a Food Delivery Platform</p>
      </div>
      <div>
        <h3 className={`${utils.textSmall} ${styles.subtitle}`}>Technologies Used: </h3>
        <ul className={`${utils.textSmall} ${styles.techs}`}>
          <li>AWS</li>
          <li>IO</li>
          <li>ANG</li>
          <li>.NET</li>
          <li>MB</li>
          <li>FB</li>
        </ul>
      </div>
    </div>
  </div>
}
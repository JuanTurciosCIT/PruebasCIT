import Image from 'next/image';

import styles from './achievements.module.scss';
import utils from 'styles/utils.module.scss';


const TEXT = `CIT started development of Bip Bip 6 months before March 2020 (The start of the Coronavirus Pandemic Shutdowns). Because of this the world and specially Honduras started going thru a very big change in terms of technology. 

Businesses had to change and adapt to current conditions to stay alive. Food delivery was the only way for restaurants to survive. Even now that restaurants have reopened  to the public, there still are many customers that changed their way of interacting with providers for good. 

CIT analyzed all this changing behaviours and with our Clients consent we re-designed the app before launch and added many features like the contactless payments, electronic signatures and a In restaurant contactless experience.`;

const paragraphs = TEXT.split('\n\n');

export const Achievements = () => {
	return (
		<div className={styles.listWrapper}>
      {/* <div className={styles.achievementWrapper}> */}
        <div className={styles.container}>
          <div className={styles.image}>{/* <Image /> */}</div>
          <div className={styles.text}>
            <h2 className={utils.headingMedium}>
              Bip Bip was built to revolutionize the way past and new customers
              interact with the Food Industry.
            </h2>
            <p className={utils.textSmall}>
            {
              paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <p>{paragraph}</p>
                  <br />
                </div>
              ))
            }
            </p>
          </div>
        </div>
      {/* </div> */}
      {/* <div className={styles.achievementWrapper}> */}
        <div className={styles.container}>
          <div className={styles.image}>{/* <Image /> */}</div>
          <div className={styles.text}>
            <h2 className={utils.headingMedium}>
            Taking advantage of a bad situations and build something revolutionary.
            </h2>
            <p className={utils.textSmall}>
            {
              paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <p>{paragraph}</p>
                  <br />
                </div>
              ))
            }
            </p>
          </div>
        </div>
      {/* </div> */}
      {/* <div className={styles.achievementWrapper}> */}
        <div className={styles.container}>
          <div className={styles.image}>{/* <Image /> */}</div>
          <div className={styles.text}>
            <h2 className={utils.headingMedium}>
            End-to-End Development, One operation One platform. 
            </h2>
            <p className={utils.textSmall}>
            {
              paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <p>{paragraph}</p>
                  <br />
                </div>
              ))
            }
            </p>
          </div>
        </div>
      {/* </div> */}
      {/* <div className={styles.achievementWrapper}> */}
        <div className={styles.container}>
          <div className={styles.image}>{/* <Image /> */}</div>
          <div className={styles.text}>
            <h2 className={utils.headingMedium}>
            Unparalleled customer and internal support. 
            </h2>
            <p className={utils.textSmall}>
            {
              paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <p>{paragraph}</p>
                  <br />
                </div>
              ))
            }
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
	);
};

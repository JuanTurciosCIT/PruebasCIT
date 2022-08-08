import Image, { StaticImageData } from 'next/image';

import utils from '@/styles/utils.module.scss';
import styles from './technologies.module.scss';
import citLogo from '@/images/cit_logo.png';
import reactLogo from '@/images/react_logo.png';
import angularLogo from '@/images/angular_logo.png';
import awsLogo from '@/images/aws_logo.png';
import htmlLogo from '@/images/html_logo.png';
import azureLogo from '@/images/azure_logo.png';

interface TechnologiesProps {
  name: string;
  url: string;
  logo: StaticImageData;
  description: string;
  ringLevel: 1 | 2 | 3;
}

export default function Technologies(): JSX.Element {
  const technologies: TechnologiesProps[] = [
    {
      name: 'Azure',
      logo: azureLogo,
      url: 'https://azure.microsoft.com/',
      description: 'Microsoft Azure is a cloud computing platform that provides a secure, scalable, and elastic cloud infrastructure for applications and services.',
      ringLevel: 1,
    },
    {
      name: 'Angular',
      logo: angularLogo,
      url: 'https://angular.io/',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      ringLevel: 1,
    },
    {
      name: 'AWS',
      logo: awsLogo,
      url: 'https://aws.amazon.com/',
      description: 'Amazon Web Services (AWS) is a cloud computing platform that provides computing, storage, and other services.',
      ringLevel: 1,
    },
    {
      name: 'React',
      logo: reactLogo,
      url: 'https://reactjs.org/',
      description: 'React is a JavaScript library for building user interfaces.',
      ringLevel: 2,
    },
    {
      name: 'HTML',
      logo: htmlLogo,
      url: 'https://www.w3.org/html/',
      description: 'HTML is the standard markup language for creating Web pages.',
      ringLevel: 3,
    }
  ];

  const innerRingTechnologies = technologies.filter(tech => tech.ringLevel === 1);
  const middleRingTechnologies = technologies.filter(tech => tech.ringLevel === 2);
  const outerRingTechnologies = technologies.filter(tech => tech.ringLevel === 3);

  return <section className={styles.techSection}>
    <div className={styles.info}>
      <h2 className={`${utils.headingMedium} ${styles.title}`}>Technologies</h2>
      <div>
        <h3 className={`${utils.headingMedium} ${styles.subtitle}`}>Azure</h3>
        <div className={styles.description}>
          <p className={`${utils.textSmall}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem sagittis pharetra volutpat bibendum lacus nunc volutpat. Arcu amet id amet, volutpat ultrices. Eget mi morbi blandit sed ullamcorper tristique et vel. Quam ut scelerisque libero maecenas enim aenean. Tincidunt sagittis nunc, facilisis sollicitudin duis arcu. Lacus, felis amet quisque diam dictum in. Eget tempus semper dignissim ut.</p>
          <p className={`${utils.textSmall}`}>Arcu, vestibulum adipiscing enim feugiat. Nisi ultrices nulla molestie tristique urna, molestie. Consequat mi, arcu natoque in sit ullamcorper nulla lobortis nunc. Porttitor accumsan velit purus sodales nullam ullamcorper faucibus id imperdiet. Vehicula augue arcu cursus ut laoreet. Posuere pulvinar eget pretium suspendisse. Sit cras.</p>
        </div>
      </div>
    </div>

    {/* Atom of technologies */}
    <div className={styles.atomContainer}>
      <div className={styles.logo}>
        <Image src={citLogo} alt='CIT Logo' />
      </div>

      {/* Inner ring */}
      <div className={styles.innerRing}>
        {innerRingTechnologies.map((tech, index) => (
          <div className={styles['tech'+(index+1)]} key={index}>
            <Image src={tech.logo} alt={tech.name} />
          </div>
        ))}
        {/* <div className={styles.tech1}>
          <Image src={htmlLogo} alt='HTML Logo' />
        </div>
        <div className={styles.tech2}>
          <Image src={reactLogo} alt='React Logo' />
        </div>
        <div className={styles.tech3}>
          <Image src={angularLogo} alt='Angular Logo' />
        </div> */}
      </div>

      {/* Middle Ring */}
      <div className={styles.midRing}>
        <div className={styles.tech4}>
          <Image src={awsLogo} alt='AWS Logo' />
        </div>
        <div className={styles.tech5}>
          <Image src={angularLogo} alt='Angular Logo' />
        </div>

        {/* dots */}
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot3}></div>
        <div className={styles.dot4}></div>
        <div className={styles.dot5}></div>
      </div>

      {/* Outer ring */}
      <div className={styles.largerRing}>
        <div className={styles.tech6}>
          <Image src={htmlLogo} alt='HTML Logo' />
        </div>
        <div className={styles.tech7}>
          <Image src={reactLogo} alt='React Logo' />
        </div>
        <div className={styles.tech8}>
          <Image src={angularLogo} alt='Angular Logo' />
        </div>
        <div className={styles.tech9}>
          <Image src={awsLogo} alt='AWS Logo' />
        </div>
        <div className={styles.tech10}>
          <Image src={azureLogo} alt='Azure Logo' />
        </div>
      </div>

    </div>
  </section>
}
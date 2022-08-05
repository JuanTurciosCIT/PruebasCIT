import Image from 'next/image';

import styles from './sliderButtons.module.scss';
import arrowIcon from '@/svg/arrow-down.svg';

interface SliderButtonsProps {
  next: () => void;
  prev: () => void;
}

export default function SliderButtons({ next, prev }: SliderButtonsProps) {
  return  <div className={styles.container}>
    <button className={styles.left} onClick={prev}>
      <Image src={arrowIcon} alt='Arrow left' width={12.5} height={12.5} />
    </button>
    <button className={styles.right} onClick={next}>
      <Image src={arrowIcon} alt='Arrow right' width={12.5} height={12.5} />
    </button>
  </div>
}
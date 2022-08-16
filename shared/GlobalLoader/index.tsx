import React from 'react'
import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import styles from './globalLoader.module.scss';
import lottieJson from '../../public/lotties/cit_dots.json';

export default function GlobalLoader() {
  return (
    <div className={styles.loaderWrapper}>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 180, height: 180, background: 'transparent' }}
    />
    </div>
  )
}
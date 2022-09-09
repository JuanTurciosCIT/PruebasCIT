import Lottie from 'react-lottie-player';
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import styles from './globalLoader.module.scss';
import lottieJson from '../../public/lotties/cit_dots.json';
import { AnimatedContainer } from '../../Animations/AnimatedContainer';

export default function GlobalLoader() {

	return (
		<div className={styles.loaderWrapper}>
			<AnimatedContainer
				hidden={{ y: '-100vh', opacity: 0 }}
				visible={{ y: 0, opacity: 1 }}
			>
				<Lottie
					loop
					animationData={lottieJson}
					play
					style={{ width: 180, height: 180, background: 'transparent' }}
				/>
			</AnimatedContainer>
		</div>
	);
}

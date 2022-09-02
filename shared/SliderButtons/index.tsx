import Image from 'next/image';

import theme1 from './sliderBtnTheme1.module.scss';
import theme2 from './sliderBtnTheme2.module.scss';
import arrowIcon from '@/svg/arrow-down.svg';

interface SliderButtonsProps {
	next: () => void;
	prev: () => void;
	theme?: 'theme1' | 'theme2';
}

export default function SliderButtons({
	next,
	prev,
	theme = 'theme1',
}: SliderButtonsProps) {
	const chosenTheme = theme === 'theme1' ? theme1 : theme2;

	return (
		<div className={chosenTheme.container}>
			<button className={chosenTheme.left} onClick={prev}>
				<Image
					src={arrowIcon}
					alt='Arrow left'
					width={12.5}
					height={12.5}
				/>
			</button>
			<button className={chosenTheme.right} onClick={next}>
				<Image
					src={arrowIcon}
					alt='Arrow right'
					width={12.5}
					height={12.5}
				/>
			</button>
		</div>
	);
}

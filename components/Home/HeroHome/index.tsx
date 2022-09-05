import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typewriter, { Options } from 'typewriter-effect';

import CustomButton from '@/shared/CustomButton';
import styles from './herohome.module.scss';
import utils from 'styles/utils.module.scss';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { HeroSection } from 'utils/types/homeContent.interface';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function HeroHome({
	heroContent,
}: {
	heroContent: HeroSection;
}) {
	const [startTyping, setStartTyping] = useState(false);
	const { t } = useTranslation(localeNamespaces.HOME);
	const typeWriterText = (heroContent.subtitlePhrasesEN || heroContent.subtitlePhrasesES) as string[];
	const isMobile = useMediaQuery('(max-width: 428px)');

	setTimeout(() => {
		setStartTyping(true);
	}, 2650);

	return (
		<div className={styles.hero} style={{backgroundImage: `url(${heroContent.backgroundImage})`}}>
			<div className={styles.wrapper}>
				<div className={`${utils.headingLarge} ${styles.heroTitle}`}>
					<h1 className={styles.mainTitle}>
						{heroContent.titleEN || heroContent.titleES}
						<span className={styles.creativeText}>CREATIVE</span>
					</h1>
					<h2>
						<span>{heroContent.subtitleStartEN || heroContent.subtitleStartES}</span>{isMobile ? <br /> : ' '}
						<span>{heroContent.subtitleEndES}</span>{' '}
						<span className={styles.typewriterWrapper}>
							<Typewriter
								options={{
									strings: typeWriterText,
									autoStart: startTyping ? true : false,
									loop: true,
								}}
							/>
						</span>{isMobile && <br />}
						<span>{heroContent.subtitleEndEN}</span>
					</h2>
				</div>
				<div className={`${utils.textSmall} ${styles.heroDescription}`}>
					<p>{heroContent.captionES || heroContent.captionEN}</p>
				</div>
				<div>
					<CustomButton>{t('shared.btn_text')}</CustomButton>
				</div>
			</div>
		</div>
	);
}

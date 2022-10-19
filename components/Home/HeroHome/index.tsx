import Typewriter from 'typewriter-effect';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

// styles
import styles from './herohome.module.scss';
import utils from 'styles/utils.module.scss';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CustomButton } from '@/shared/CustomButton';
import { HeroSection } from 'utils/types/homeContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

export const HeroHome = ({
	heroContent,
}: {
	heroContent: HeroSection;
}) => {
	const [startTyping, setStartTyping] = useState(false);
	const { t } = useTranslation(localeNamespaces.HOME);
	const typeWriterText = (heroContent.subtitlePhrasesEN || heroContent.subtitlePhrasesES) as string[];
	const isMobile = useMediaQuery('(max-width: 599px)');

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
					<CustomButton path='https://form.asana.com/?k=Wwfd1TCValAUbjrGDoIMqw&d=1201056732412837'>{t('shared.btn_text')}</CustomButton>
				</div>
			</div>
		</div>
	);
}

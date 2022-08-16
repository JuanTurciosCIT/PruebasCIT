import useTranslation from 'next-translate/useTranslation';
import Skeleton from 'react-loading-skeleton';
import Typewriter from 'typewriter-effect';

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
	const { t } = useTranslation(localeNamespaces.HOME);
	const typeWriterText = (heroContent.subtitlePhrasesEN || heroContent.subtitlePhrasesES) as string[];
	const isMobile = useMediaQuery('(max-width: 428px)');

	return (
		<section className={styles.hero}>
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
									autoStart: true,
									loop: true
								}} 
							/>
						</span>{isMobile && <br />}
						<span>{heroContent.subtitleEndEN}</span>
					</h2>
				</div>
				<div className={`${utils.textSmall} ${styles.heroDescription}`}>
					<p>{(heroContent.captionES || heroContent.captionEN) || <Skeleton />}</p>
				</div>
				<div>
					<CustomButton>{t('shared.btn_text')}</CustomButton>
				</div>
			</div>
		</section>
	);
}

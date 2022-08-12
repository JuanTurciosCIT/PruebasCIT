import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import CustomButton from '@/shared/CustomButton';
import styles from './herohome.module.scss';
import utils from 'styles/utils.module.scss';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { HeroSection } from 'utils/types/homeContent.interface';

export default function HeroHome({
	heroContent,
}: {
	heroContent: HeroSection;
}) {
	const { t } = useTranslation(localeNamespaces.HOME);

	return (
		<section className={styles.hero}>
			<div className={styles.wrapper}>
				<div className={`${utils.headingLarge} ${styles.heroTitle}`}>
					<h1 className={styles.mainTitle}>
						{heroContent.titleEN || heroContent.titleES}
						<span className={styles.creativeText}>CREATIVE</span>
					</h1>
					<h2>{heroContent.subtitleEN || heroContent.subtitleES}</h2>
				</div>
				<div className={`${utils.textSmall} ${styles.heroDescription}`}>
					<p>{heroContent.captionES || heroContent.captionEN}</p>
				</div>
				<div>
					<CustomButton>{t('shared.btn_text')}</CustomButton>
				</div>
			</div>
		</section>
	);
}

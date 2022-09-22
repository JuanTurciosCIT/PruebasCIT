import useTranslation from 'next-translate/useTranslation';

import utils from 'styles/utils.module.scss';
import { FooterHeroSection } from 'utils/types/commonContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import styles from './herofooter.module.scss';

export const HeroFooter = ({ content }: { content: FooterHeroSection }) => {
	const { t } = useTranslation(localeNamespaces.common);

	return (
		<section className={styles.heroFooter} style={{backgroundImage: `url(${content.backgroundImg})`}}>
			<div className={styles.wrapper}>
				<h1 className={`${styles.title} ${utils.headingLarge}`}>
					{content.titleEN || content.titleES}
				</h1>
				<p className={styles.description}>
					{content.captionEN || content.captionES}
				</p>
				<button className={styles.button}>{t('heroFooter.btn_text')}</button>
			</div>
		</section>
	);
}

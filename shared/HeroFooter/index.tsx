import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import utils from 'styles/utils.module.scss';
import { FooterHeroSection } from 'utils/types/commonContent.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import styles from './herofooter.module.scss';

export const HeroFooter = ({ content }: { content: FooterHeroSection }) => {
	const { t } = useTranslation(localeNamespaces.common);
	const { pathname } = useRouter();

	return (
		<section
			className={styles.heroFooter}
			style={{ backgroundImage: `url(${content.backgroundImg})` }}
		>
			<div className={styles.wrapper}>
				<h1 className={`${styles.title} ${utils.headingLarge}`}>
					{content.titleEN || content.titleES}
				</h1>
				<p className={styles.description}>
					{content.captionEN || content.captionES}
				</p>
				<button className={styles.button}>
					<a
						style={{ backgroundSize: 0 }}
						href='http://jobs.cit.hn/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{t(`${pathname.includes('career') ? 'heroFooter.applyNow' : 'heroFooter.btn_text'}`)}
					</a>
				</button>
			</div>
		</section>
	);
};

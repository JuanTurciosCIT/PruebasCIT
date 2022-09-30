import Image from 'next/image';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import utils from '@/styles/utils.module.scss';
import styles from './careerHero.module.scss';
import { useInView } from 'react-intersection-observer';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { CustomButton } from '@/shared/CustomButton';
import { CareerHeroInterface } from 'utils/types/careerContent.interface';

/* A way to import a component that is not SSR compatible. */
const Masonry = dynamic(() => import('react-smart-masonry'), {
	ssr: false,
	loading: () => <h2>Loading...</h2>,
});

export const CareerHero = ({ content }: { content: CareerHeroInterface }) => {
	const isMobile: boolean = useMediaQuery('(max-width: 428px)');
	const { t } = useTranslation(localeNamespaces.CAREER);
	const { inView, ref } = useInView();

	return (
		<ScrollReveal isVisible={inView}>
			<section className={styles.container} ref={ref}>
				<div className={styles.description}>
					<h1 className={`${utils.headingMedium} ${styles.title}`}>
					{content.titleEN || content.titleES}
					</h1>
					<p className={`${utils.textSmall} ${styles.descriptionParagraph}`}>
					{content.captionEN || content.captionES}
					</p>
					<div className={styles.button}>
						<CustomButton>{t('hero.btn_text')}</CustomButton>
					</div>
				</div>

				<Masonry
					className={styles.galleryWrapper}
					columns={2}
					gap={isMobile ? 15 : 20}
				>
					{content.pathImages.map((image, index) => (
						<div className={styles[`${'picture'}${index + 1}`]} key={image}>
							<Image
								priority
								quality={70}
								src={image}
								alt='gallery'
								className={styles.picture}
								layout='fill'
								// loading='eager'
								placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
							/>
						</div>
					))}
				</Masonry>
			</section>
		</ScrollReveal>
	);
}

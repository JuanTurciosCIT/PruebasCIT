import Image from 'next/image';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

import { useMediaQuery } from 'utils/hooks/useMediaQuery';
import utils from '@/styles/utils.module.scss';
import styles from './gallery.module.scss';
import { useInView } from 'react-intersection-observer';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { GallerySection } from 'utils/types/homeContent.interface';

/* A way to import a component that is not SSR compatible. */
const Masonry = dynamic(() => import('react-smart-masonry'), {
	ssr: false,
	loading: () => <h2>Loading...</h2>,
});

export const Gallery = ({ gallery }: { gallery: GallerySection }) => {
	const isMobile: boolean = useMediaQuery('(max-width: 599px)');
	const { t } = useTranslation(localeNamespaces.HOME);
	const { inView, ref } = useInView();

	return (
		<ScrollReveal isVisible={inView}>
			<section className={styles.container} ref={ref}>
				<div className={styles.description}>
					<h1 className={`${utils.headingMedium} ${styles.title}`}>
						{t('gallery.title')}
					</h1>
					<p className={`${utils.textSmall} ${styles.descriptionParagraph}`}>
						{gallery.captionEN || gallery.captionES}
					</p>
					<button className={styles.button}>{t('gallery.btn_text')}</button>
				</div>

				<Masonry
					className={styles.galleryWrapper}
					columns={2}
					gap={isMobile ? 16 : 22.5}
				>
					{gallery.images.map((image, index) => (
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

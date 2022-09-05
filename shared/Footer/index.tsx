import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useInView } from 'react-intersection-observer';

import creativeLogo from '@/images/creative_logo.png';
import styles from './footer.module.scss';
import utils from '@/styles/utils.module.scss';
import instagramIcon from '../../public/svg/instagram_icon.svg';
import linkedinIcon from '../../public/svg/linkedin_icon.svg';
import facebookIcon from '../../public/svg/facebook_icon.svg';
import mailIcon from '../../public/svg/mail_icon.svg';
import locationIcon from '../../public/svg/location_icon.svg';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { ScrollReveal } from 'Animations/ScrollReveal';
import { FooterSection } from 'utils/types/homeContent.interface';

// Change all the default export (components) to a named export
// This is to avoid the error:
// "Cannot find module '@/components/Footer/index.tsx'"

// only pages will have the default export

export default function Footer({ content }: { content: FooterSection }) {
	const { inView, ref } = useInView();
	const { t } = useTranslation(localeNamespaces.HOME);

	const { locations, contact } = content;

	const getFirstWord = (text: string) => {
		return text.split(' ')[0];
	};

	const restOfText = (text: string) => {
		return text.split(' ').slice(1).join(' ');
	};

	return (
		<ScrollReveal isVisible={inView}>
			<footer className={styles.footer} ref={ref}>
				<div className={styles.container}>
					<div className={styles.infoWrapper}>
						<div className={styles.logo}>
							<Image
								priority
								src={creativeLogo}
								alt='CIT Logo'
								// layout='fill'
								// objectFit='contain'
								placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
							/>
						</div>
						<h3 className={`${utils.headingSmall} ${styles.subtitle}`}>
							{t('footer.title')}
						</h3>
						<div>
							{locations.map(({ address }) => (
								<p
									className={`${utils.textSmall} ${styles.text}`}
									key={address}
								>
									{getFirstWord(address)} <br />
									{restOfText(address)}
								</p>
							))}
						</div>
					</div>
					<div className={styles.socialMedia}>
						<h3 className={`${utils.headingSmall} ${styles.subtitle}`}>
							{t('footer.title2')}
						</h3>
						<div className={styles.mediaIcons}>
							<a
								href={contact.instagram}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className={styles.iconContainer}>
									<Image
										priority
										src={instagramIcon}
										alt='Instagram'
										width={12}
										height={12}
									/>
								</div>
							</a>
							<a
								href={contact.linkedin}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className={styles.iconContainer}>
									<Image
										priority
										src={linkedinIcon}
										alt='LinkedIn'
										width={12}
										height={12}
									/>
								</div>
							</a>
							<a
								href={contact.facebook}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className={styles.iconContainer}>
									<Image
										priority
										src={facebookIcon}
										alt='Facebook'
										width={12}
										height={12}
									/>
								</div>
							</a>
						</div>
						<a
							href={`mailto:${contact.email}`}
							className={`${utils.textSmall} ${styles.contact}`}
							rel='noopener noreferrer'
						>
							<Image
								priority
								src={mailIcon}
								alt='Mail icon'
								width={12}
								height={12}
							></Image>{' '}
							{contact.email}
						</a>
						<a
							href={`tel:${contact.phone}`}
							className={`${utils.textSmall} ${styles.contact}`}
							rel='noopener noreferrer'
						>
							<Image
								priority
								src={locationIcon}
								alt='Location icon'
								width={12}
								height={12}
							></Image>{' '}
							{contact.phone}
						</a>
					</div>
				</div>
				<div className={styles.rightsConditions}>
					<p className={utils.textSmall}>{t('footer.copyright')}</p>
					<p className={utils.textSmall}>{t('footer.policy')}</p>
				</div>
			</footer>
		</ScrollReveal>
	);
}

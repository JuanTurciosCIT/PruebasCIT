// import Image from 'next/image';
import Image from 'next/future/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

// styles
import styles from './header.module.scss';
import utils from '/styles/utils.module.scss';

// images - icons - svgs
import CreativeLogo from '/public/images/creative-logo.png';
import burgerIcon from '/public/svg/burger-menu.svg';
import closeIcon from '/public/svg/close-icon.svg';
import arrowDownIcon from '/public/svg/arrow-down.svg';
import arrowRightIcon from '/public/svg/arrow-right.svg';

// hooks
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useHeaderBgOnScroll } from '@/hooks/useHeaderBgOnScroll';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';

import { navLinks } from 'utils/constants/navLink.constant';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { Pages } from 'utils/types/pages.enum';

// Components
import { CustomButton } from '../CustomButton';
import { MobileMenu } from './MobileMenu';
import { AnimatedContainer } from '../../Animations/AnimatedContainer';

export const Header = () => {
	const router: NextRouter = useRouter();
	const isAtHome = router.pathname === '/';

	const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [currentLocale, setCurrentLocale] = useState<'English' | 'Español'>(
		router.locale === 'en' ? 'English' : 'Español'
	);
	const { t } = useTranslation(localeNamespaces.common);

	// before 432px viewport width is mobile
	const isMobile: boolean = useMediaQuery('(max-width: 432px)');
	const ref = useRef(null);
	const bgColor = useHeaderBgOnScroll();

	const headerLinks = navLinks.filter((link) => {
		const pathname: Pages = router.pathname as Pages;
		return link.visibleIn.includes('/' + pathname.split('/')[1] as Pages);
	});

	const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);
	const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

	const handleClickOutside = () => {
		if (!dropdownMenu) return;

		setTimeout(() => {
			toggleDropdownMenu();
		}, 300); // RAIL model
	};

	useOnClickOutside(ref, handleClickOutside);

	if (isMobile) {
		return (
			<>
				<header className={styles.header} style={{background: `${(!isAtHome && !bgColor) ? 'none' : ''}`}}>
					<Link className={styles.logo} href='/'>
						<Image
							quality={100}
							priority={isMobile}
							width={148}
							// layout='fill'
							// objectFit='cover'
							src={CreativeLogo}
							alt='Creative Logo'
							// loading='eager'
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
						/>
					</Link>

					{/* onClick => openMobileMenu */}
					<button className={styles.burgerBtn} onClick={toggleMobileMenu}>
						<Image
							src={mobileMenu ? closeIcon : burgerIcon}
							alt='burger menu'
							width={22}
							height={22}
						/>
					</button>

					{/* Mobile Menu Modal */}
				</header>
				{mobileMenu && <MobileMenu navLinks={headerLinks} />}
			</>
		);
	}

	return (
		<header className={styles.header} style={{background: `${(!isAtHome && !bgColor) ? 'none' : ''}`}}>
			<div className={styles.logo}>
				<Image
					quality={100}
					priority={!isMobile}
					// layout='fill'
					// objectFit='cover'
					width={161}
					// loading='eager'
					src={CreativeLogo}
					alt='Creative Logo'
					placeholder='blur'
					blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
				/>
			</div>

			<nav className={styles.navContainer}>
				<ul className={styles.navMenu}>
					{headerLinks.map((link, index) => (
						<li className={utils.textSmall} key={link.path + index}>
							<Link href={link.path} scroll={false}>
								{t('header.' + link.localeName)}
							</Link>
						</li>
					))}
					<li className={utils.textSmall}>
						{isAtHome ? (
							<CustomButton>{t('shared.btn_text')}</CustomButton>
						) : (
							<CustomButton>{t('header.sign_up')}</CustomButton>
						)}
						{!isAtHome && (
							<div className={`${utils.textSmall} ${styles.backToHome}`}>
								<Image
									quality={70}
									className={styles.arrowLeft}
									src={arrowRightIcon}
									alt='Arrow left Icon'
									width={24}
									height={24}
								/>
								<Link href='/' className={styles.backToHome}>
									{t('header.back_to_home')}
								</Link>
							</div>
						)}
					</li>
				</ul>
				<div className={utils.textSmall} ref={ref}>
					<button className={styles.dropDown} onClick={toggleDropdownMenu}>
						<span>{currentLocale}</span>
						<Image
							quality={70}
							src={arrowDownIcon}
							alt='Arrow down'
							width={12}
							height={12}
							className={`${
								dropdownMenu ? styles.arrowIconActive : styles.arrowIcon
							}`}
						/>
					</button>
				</div>
			</nav>

			{/* Dropdown Menu */}
			{dropdownMenu && (
				<div className={styles.localeDropDown}>
					<AnimatedContainer
						hidden={{ x: '80px', opacity: 0 }}
						visible={{ x: 0, opacity: 1 }}
						exit={{ x: '-80px', opacity: 0 }}
					>
						<div className={`${styles.dropDownMenu} ${utils.textSmall}`}>
							<button onClick={() => setCurrentLocale('English')}>
								<Link href={{pathname: router.pathname, query: router.query}} locale='en' scroll={false}>
									English
								</Link>
							</button>
							<button onClick={() => setCurrentLocale('Español')}>
								<Link href={{pathname: router.pathname, query: router.query}} locale='es' scroll={false}>
									Español
								</Link>
							</button>
						</div>
					</AnimatedContainer>
				</div>
			)}
		</header>
	);
}

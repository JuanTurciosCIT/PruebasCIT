import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import CreativeLogo from '/public/svg/creative-logo.svg';
import burgerIcon from '/public/svg/burger-menu.svg';
import closeIcon from '/public/svg/close-icon.svg';
import arrowDownIcon from '/public/svg/arrow-down.svg';
import arrowRightIcon from '/public/svg/arrow-right.svg';
import styles from './header.module.scss';
import utils from '/styles/utils.module.scss';
import CustomButton from '../CustomButton';
import MobileMenu from './MobileMenu';
import { navLinks } from 'utils/constants/navLink.constant';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';
import { NavLink } from 'utils/types/navLink.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { AnimatedContainer } from '../../Animations/AnimatedContainer';
import { Pages } from 'utils/types/pages.enum';

export default function Header() {
	const router: NextRouter = useRouter();
	const isAtHome = router.pathname === '/';

	const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [currentLocale, setCurrentLocale] = useState<'English' | 'Español'>(
		router.locale === 'en' ? 'English' : 'Español'
	);
	const { t } = useTranslation(localeNamespaces.common);

	// before 428px viewport width is mobile
	const isMobile: boolean = useMediaQuery('(max-width: 428px)');
	const ref = useRef(null);

	const headerBackground = isAtHome ? styles.headerBackground : styles.headerBackgroundNone;

	const headerLinks = navLinks.filter((link) => {
		const pathname: Pages = router.pathname as Pages;
		return link.visibleIn.includes(pathname);
	});

	const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);
	const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

	const handleClickOutside = () => {
		if (!dropdownMenu) return;

		setTimeout(() => {
			toggleDropdownMenu();
		}, 500);
	};

	useOnClickOutside(ref, handleClickOutside);

	if (isMobile) {
		return (
			<>
				<header className={styles.header} style={{background: `${!isAtHome && 'none'}`}}>
					<div className={styles.logo}>
						<Image
							priority={isMobile}
							layout='fill'
							objectFit='contain'
							src={CreativeLogo}
							alt='Creative Logo'
							loading='eager'
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAEUlEQVR42mNcPpEBBTAOjAAA3qIJybv4Wl8AAAAASUVORK5CYII='
						/>
					</div>

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
		<header className={styles.header} style={{background: `${!isAtHome && 'none'}`}}>
			<div className={styles.logo}>
				<Image
					priority={!isMobile}
					layout='fill'
					objectFit='contain'
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
									className={styles.arrowLeft}
									src={arrowRightIcon}
									alt='Arrow left Icon'
									width={24}
									height={24}
								/>
								<Link href='/' className={styles.backToHome}>
									Back To Home
								</Link>
							</div>
						)}
					</li>
				</ul>
				<div className={utils.textSmall} ref={ref}>
					<button className={styles.dropDown} onClick={toggleDropdownMenu}>
						<span>{currentLocale}</span>
						<Image
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
						<div className={styles.dropDownMenu}>
							<button onClick={() => setCurrentLocale('English')}>
								<Link href={router.pathname} locale='en' scroll={false}>
									English
								</Link>
							</button>
							<button onClick={() => setCurrentLocale('Español')}>
								<Link href={router.pathname} locale='es' scroll={false}>
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

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import CustomButton from '../../CustomButton';
import styles from './mobileMenu.module.scss';
import utils from '../../../styles/utils.module.scss';
import arrowDownIcon from '../../../public/svg/arrow-down.svg';
import { NavLink } from 'utils/types/navLink.interface';
import { AnimatedContainer } from 'Animations/AnimatedContainer';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface MobileMenuProps {
	navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
	useLockBodyScroll();

	const router = useRouter();
	const ref = useRef(null);
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const [currentLocale, setCurrentLocale] = useState<'English' | 'Español'>(
		router.locale === 'en' ? 'English' : 'Español'
	);
	const { t } = useTranslation(localeNamespaces.HOME);

	const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);

	const handleClickOutside = () => {
		if (!dropdownMenu) return;

		setTimeout(() => {
			toggleDropdownMenu();
		}, 500);
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<div className={styles.modal}>
			<AnimatedContainer
				hidden={{ y: '100vh', opacity: 0 }}
				visible={{ y: 0, opacity: 1 }}
				exit={{ y: '100vh', opacity: 0 }}
			>
				<nav className={styles.navContainer}>
					<ul className={styles.navMenu}>
						{navLinks.map((link, index) => (
							<li className={utils.textSmall} key={link.path + index}>
								<Link href={link.path} scroll={false}>
									{t('header.' + link.localeName)}
								</Link>
							</li>
						))}
						<li className={utils.textSmall}>
							<CustomButton>{t('shared.btn_text')}</CustomButton>
						</li>
					</ul>
					<div ref={ref}>
						<button
							className={`${utils.textSmall} ${styles.dropDown}`}
							onClick={toggleDropdownMenu}
						>
							<span>{currentLocale} </span>
							<Image
								src={arrowDownIcon}
								alt='Arrow down'
							/>
						</button>
					</div>

					{/* Dropdown Menu */}
					{dropdownMenu && (
						<motion.div
							className={styles.dropDownMenu}
							initial={{ y: '100%', opacity: 0, scale: 0 }}
							animate={{ y: 0, opacity: 1, scale: 1 }}
						>
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
						</motion.div>
					)}
				</nav>
			</AnimatedContainer>
		</div>
	);
}

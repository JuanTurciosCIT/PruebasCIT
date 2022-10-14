import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

// styles
import styles from './mobileMenu.module.scss';
import utils from '../../../styles/utils.module.scss';

// hooks
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

// images - icons - svgs
import arrowRightIcon from '/public/svg/arrow-right.svg';
import arrowDownIcon from '../../../public/svg/arrow-down.svg';

// components
import { CustomButton } from '../../CustomButton';
import { AnimatedContainer } from 'Animations/AnimatedContainer';

import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import { NavLink } from 'utils/types/navLink.interface';

interface MobileMenuProps {
	navLinks: NavLink[];
}

export const MobileMenu = ({ navLinks }: MobileMenuProps) => {
	useLockBodyScroll();

	const router = useRouter();
	const ref = useRef(null);
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const [currentLocale, setCurrentLocale] = useState<'English' | 'Español'>(
		router.locale === 'en' ? 'English' : 'Español'

	);
	const { t } = useTranslation(localeNamespaces.common);

	const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);

	const handleClickOutside = () => {
		if (!dropdownMenu) return;

		setTimeout(() => {
			toggleDropdownMenu();
		}, 500);
	};

	const isAtHome = router.pathname === '/';

	useOnClickOutside(ref, handleClickOutside);

	return (
		<motion.div
			className={styles.modal}
			layoutScroll
			initial={{ x: '100vw' }}
			animate={{ x: 0, transition: { delay: 0.1, duration: 0.6 } }}
		>
			<nav className={styles.navContainer}>
				<ul className={styles.navMenu}>
					{navLinks.map((link, index) => (
						<li className={utils.textSmall} key={link.path + index}>

              {navLinks.length - 1 === index ?
                <CustomButton>{t('shared.btn_text')}</CustomButton>
                :
                <Link href={link.path}>
                  {t('header.' + link.localeName)}
                </Link>
              }
							
						</li>
					))}
				</ul>
				<div ref={ref}>
					<button
						className={`${utils.textSmall} ${styles.dropDown}`}
						onClick={toggleDropdownMenu}
					>
						<span>{currentLocale} </span>
						<Image
							quality={70}
							width={12.4}
							height={12.4}
							src={arrowDownIcon}
							alt='Arrow down'
							className={`${
								dropdownMenu ? styles.arrowIconActive : styles.arrowIcon
							}`}
						/>
					</button>
				</div>

				{/* Dropdown Menu */}
				{dropdownMenu && (
					<motion.div
						className={`${styles.dropDownMenu} ${utils.textSmall}`}
						initial={{ x: '196%', y: '100%', opacity: 0, scale: 0 }}
						animate={{ y: -12, opacity: 1, scale: 1 }}
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
		</motion.div>
	);
};

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation';

import CreativeLogo from "../../public/svg/creative-logo.svg";
import burgerIcon from '../../public/svg/burger-menu.svg';
import closeIcon from '../../public/svg/close-icon.svg';
import arrowDownIcon from "../../public/svg/arrow-down.svg";
import styles from './header.module.scss';
import utils from '../../styles/utils.module.scss';
import CustomButton from "../CustomButton";
import MobileMenu from "./MobileMenu";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";
import { NavLink } from "utils/types/navLink.interface";
import { localeNamespaces } from "utils/types/localeNamespaces.enum";

export default function Header({ navLinks }: { navLinks: NavLink[] }) {
  const router: NextRouter = useRouter();

  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [currentLocale, setCurrentLocale] = useState<'English' | 'Español'>(router.locale === 'en' ? 'English' : 'Español');
  const { t } = useTranslation(localeNamespaces.HOME);


  // before 428px viewport width is mobile
  const isMobile: boolean = useMediaQuery('(max-width: 428px)');

  const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  if (isMobile) {
    return <>
      <header className={styles.header}>
        <div>
          <Image 
            src={CreativeLogo}
            width={148}
            height={30}
            alt="Creative Logo"
          />
        </div>

        {/* onClick => openMobileMenu */}
        <button className={styles.burgerBtn} onClick={toggleMobileMenu}>
        <Image 
            src={mobileMenu ? closeIcon : burgerIcon }
            alt="burger menu"
          />
        </button>

        {/* Mobile Menu Modal */}
      </header>
      { mobileMenu && <MobileMenu navLinks={navLinks} /> }
    </>
  }

  return (
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          width={161}
          height={33}
          src={CreativeLogo}
          alt="Creative Logo"
        />
      </div>

      <nav className={styles.navContainer}>
        <ul className={styles.navMenu}>
          {
            navLinks.map((link, index) => (
              <li className={utils.textSmall} key={link.path+index} ><Link href={link.path} scroll={false}>{t('header.'+link.localeName)}</Link></li>
            ))
          }
          <li className={utils.textSmall}><CustomButton>{t('shared.btn_text')}</CustomButton></li>
        </ul>
        <div className={utils.textSmall}>
          <button className={styles.dropDown} onClick={toggleDropdownMenu}><span>{currentLocale}</span><Image src={arrowDownIcon} alt='Arrow down' /></button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {dropdownMenu && (
        <div className={styles.dropDownMenu}>
          <button onClick={() => setCurrentLocale('English')}><Link href={router.pathname} locale='en' scroll={false}>English</Link></button>
          <button onClick={() => setCurrentLocale('Español')}><Link href={router.pathname} locale='es' scroll={false}>Español</Link></button>
      </div>
      )}
    </header>
    </>
  )
}
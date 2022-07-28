import Image from "next/image";
import Link from "next/link";
import { useState, forwardRef } from "react";

import CreativeLogo from "../../public/svg/creative-logo.svg";
import burgerIcon from '../../public/svg/burger-menu.svg';
import closeIcon from '../../public/svg/close-icon.svg';
import arrowDownIcon from "../../public/svg/arrow-down.svg";
import styles from './header.module.scss';
import utils from '../../styles/utils.module.scss';
import CustomButton from "../CustomButton";
import MobileMenu from "./MobileMenu";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Header() {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const isMobile: boolean = useMediaQuery(425);

  const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  if (isMobile) {
    return <>
      <header className={styles.header}>
        <div>
          <Image 
            src={CreativeLogo}
            width={161}
            height={33}
            layout="fixed"
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
      { mobileMenu && <MobileMenu /> }
    </>
  }

  return (
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          priority={true}
          src={CreativeLogo}
          alt="Creative Logo"
        />
      </div>

      <nav className={styles.navContainer}>
        <ul className={styles.navMenu}>
          <li className={utils.textSmall}><Link href='/' scroll={false}>Home</Link></li>
          <li className={utils.textSmall}><Link href='/' scroll={false}>Our services</Link></li>
          <li className={utils.textSmall}><Link href='/' scroll={false}>Career</Link></li>
          <li className={utils.textSmall}><Link href='/' scroll={false}>About Us</Link></li>
          <li className={utils.textSmall}><CustomButton>Contact Us</CustomButton></li>
        </ul>
        <div className={utils.textSmall}>
          <button className={styles.dropDown} onClick={toggleDropdownMenu}><span>English </span><Image src={arrowDownIcon} alt='Arrow down' /></button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {dropdownMenu && (
        <div className={styles.dropDownMenu}>
          <button>English</button>
          <button>Español</button>
      </div>
      )}
    </header>
    </>
  )
}
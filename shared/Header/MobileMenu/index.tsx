import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useTranslation from 'next-translate/useTranslation';

import CustomButton from "../../CustomButton"
import styles from "./mobileMenu.module.scss";
import utils from '../../../styles/utils.module.scss';
import arrowDownIcon from "../../../public/svg/arrow-down.svg";
import { NavLink } from "utils/types/navLink.interface";
import { AnimatedContainer } from "Animations/AnimatedContainer";

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const { t } = useTranslation('home');

  const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);

  return <div className={styles.modal}>
    <AnimatedContainer hidden={{ y: '100vh', opacity: 0 }} visible={{ y: 0, opacity: 1 }} exit={{y: '100vh', opacity: 0}}>
      <nav className={styles.navContainer}>
        <ul className={styles.navMenu}>
          {
            navLinks.map((link, index) => (
              <li className={utils.textSmall} key={link.path+index} ><Link href={link.path} scroll={false}>{t('header.'+link.localeName)}</Link></li>
            ))
          }
          <li className={utils.textSmall}><CustomButton>{t('shared.btn_text')}</CustomButton></li>
        </ul>
        <div>
          <button className={`${utils.textSmall} ${styles.dropDown}`} onClick={toggleDropdownMenu}><span>English </span><Image src={arrowDownIcon} alt='Arrow down' /></button>
        </div>

         {/* Dropdown Menu */}
        {dropdownMenu && (
          <div className={styles.dropDownMenu}>
            <button>English</button>
            <button>Español</button>
          </div>
        )}
      </nav>
    </AnimatedContainer>
  </div>
}
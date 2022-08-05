import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import CustomButton from "../../CustomButton"
import styles from "./mobileMenu.module.scss";
import utils from '../../../styles/utils.module.scss';
import arrowDownIcon from "../../../public/svg/arrow-down.svg";

export default function MobileMenu() {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const toggleDropdownMenu = () => setDropdownMenu(!dropdownMenu);

  return <div className={styles.modal}>
    <div>
      <nav className={styles.navContainer}>
        <ul className={styles.navMenu}>
          <li className={utils.textSmall}><Link href='/' scroll={false}>Home</Link></li>
          <li className={utils.textSmall}><Link href='/' scroll={false}>Our services</Link></li>
          <li className={utils.textSmall}><Link href='/' scroll={false}>Career</Link></li>
          <li className={utils.textSmall}><Link href='/' scroll={false}>About Us</Link></li>
          <li className={utils.textSmall}><CustomButton>Contact Us</CustomButton></li>
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
    </div>
  </div>
}
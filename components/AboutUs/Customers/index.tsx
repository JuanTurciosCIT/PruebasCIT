import React from 'react'
import styles from './customer.module.scss';
import { CustomButton } from '@/shared/CustomButton';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import useTranslation from 'next-translate/useTranslation';
import kfc from 'public/images/kfc-logo.png';
import pizza from  'public/images/pizzahut-logo.png'
import pepsi from  'public/images/pepsi-logo.png'
import dennys from  'public/images/dennys-logo.png'
import gatorade from  'public/images/gaterode-logo.png'

import Image from 'next/future/image';

function Customer() {
    const { t } = useTranslation(localeNamespaces.ABOUT_US);
  return (
    <section className={styles.section}>
       
        <div className={styles.wrapper}>
            <div className={styles.customers}> 
                <div className={styles.hexagonTop}></div>
                <div className={styles.hexagonMedium}></div>
                <div className={styles.hexagonBottom}></div>

                <div className={styles.hexagonC1}>
                    <div className={styles.hexagon}>
                        <Image className={styles.image} src={kfc} alt={''}></Image>
                    </div>
                    <div className={styles.hexagon}>
                        <Image className={styles.image} src={pizza} alt={''}></Image>
                    </div>
                    <div className={styles.hexagon}>
                        <Image className={styles.image} src={gatorade} alt={''}></Image>
                    </div>
                </div>          
                <div className={styles.hexagonC1}>
                    <div className={styles.hexagon}>
                        <Image className={styles.image} src={pepsi} alt={''}></Image>
                    </div>
                    <div className={styles.hexagon}>
                        <Image className={styles.image} src={dennys} alt={''}></Image>
                    </div>
                </div>          
            </div>
            <div className={styles.content}>
                <p className={styles.title}>More than customers,You Will Be Our Partner</p>

                <p className={styles.paragraph}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <CustomButton>{t('shared.btn_text')}</CustomButton>
            </div>
        </div>
    </section>
  )
}

export default Customer
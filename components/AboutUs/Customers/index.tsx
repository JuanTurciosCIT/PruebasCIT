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
import { AboutCustomers } from 'utils/types/AboutUs/aboutUsContent.interfaces';

function Customer({ content }: {content:AboutCustomers}) {
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
                        <Image className={styles.image} 
                            src={content.customersImagePaths[0]} 
                            alt={'Customer image'}
                            width={70}
                            height={80}>

                        </Image>

                    </div>
                    <div className={styles.hexagon}>
                    <Image className={styles.image} 
                            src={content.customersImagePaths[1]} 
                            alt={'Customer image'}
                            width={70}
                            height={80}>

                        </Image>
                    </div>
                    <div className={styles.hexagon}>
                    <Image className={styles.image} 
                            src={content.customersImagePaths[2]} 
                            alt={'Customer image'}
                            width={70}
                            height={80}>

                        </Image>
                    </div>
                </div>          
                <div className={styles.hexagonC1}>
                    <div className={styles.hexagon}>
                    <Image className={styles.image} 
                            src={content.customersImagePaths[3]} 
                            alt={'Customer image'}
                            width={70}
                            height={80}>

                    </Image>
                    </div>
                    <div className={styles.hexagon}>
                        <Image className={styles.image} 
                            src={content.customersImagePaths[4]} 
                            alt={'Customer image'}
                            width={70}
                            height={80}>

                        </Image>
                    </div>
                </div>          
            </div>
            <div className={styles.content}>
                <p className={styles.title}>{content.titleEN || content.titleES}</p>

                <p className={styles.paragraph}>{content.captionEN || content.captionES}</p>
                <CustomButton>{t('shared.btn_text')}</CustomButton>
            </div>
        </div>
    </section>
  )
}

export default Customer
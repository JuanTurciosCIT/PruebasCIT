
import { CustomButton } from '@/shared/CustomButton';
import styles from './heroServiceDetails.module.scss';
import Image from 'next/image';
import { AboutHeroInterface } from 'utils/types/serviceDetails.interface';
import { CustomersSection } from 'utils/types/homeContent.interface';
import useTranslation from 'next-translate/useTranslation';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';

const HeroServiceDetail =  ({ hero, customerList }: { hero: AboutHeroInterface, customerList:CustomersSection[] }) =>{
    const { t } = useTranslation(localeNamespaces.common);

    return(
        <>
        <div style={{backgroundImage: `url(${hero.pathImage})`}}  className={styles.hero}  >

            <section className={styles.container}  >
                {/** Informacion */}
                <section className={styles.heroContainer}   >

                    <section className={styles.details}  >

                        <div  className={styles.pill} >{hero.nameEn ?? hero.nameEs}</div>

                        <div  className={styles.title} >{hero.tittleEn??hero.tittleEs}</div>
                        <div  className={styles.caption} >
                            {hero.captionEn??hero.captionEs}
                        </div>
                            
                        <div className={styles.containerButton} >
                            <CustomButton  path='https://forms.monday.com/forms/c1b7794e1f9ef4b6851826edb9a11515' target='_blank'>{t('serviceBtnHero.value')}</CustomButton>
                        </div>
                    </section>



                    <section className={styles.detailsFooter}  >
                        <div  className={styles.detailsCaption} >
                            {t('serviceCompanies.value')}
                        </div>
                        <section className={styles.rowImages}  >


                            {
                                customerList.map((image)=>(
                                    <div key={image.id} className={styles.containerImage} >
                                        <Image
                                            layout='fill'
                                            src={image.imagePath}

                                            objectFit='contain'
                                            objectPosition='center'
                                            alt='the-image'
                                        ></Image>
                                    </div>
                                ))
                            }
                        </section>
                        

                    </section>

                </section>
                
            </section>
        </div>
        <div style={{backgroundImage: `url(${'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/Services/portada-design.svg'})`}} className={styles.bgXS}  >

        </div>
        </>
    )

}

export default HeroServiceDetail;
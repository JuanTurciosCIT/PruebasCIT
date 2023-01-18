
import { CustomButton } from '@/shared/CustomButton';
import styles from './heroServiceDetails.module.scss';
import Image from 'next/image';
import { AboutHeroInterface } from 'utils/types/serviceDetails.interface';
import { CustomersSection } from 'utils/types/homeContent.interface';

const HeroServiceDetail =  ({ hero, customerList }: { hero: AboutHeroInterface, customerList:CustomersSection[] }) =>{

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
                            <CustomButton  path='' target='_blank'>Get Started!</CustomButton>
                        </div>
                    </section>



                    <section className={styles.detailsFooter}  >
                        <div  className={styles.detailsCaption} >
                            Companies that trust on us
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
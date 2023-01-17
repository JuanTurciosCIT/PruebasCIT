
import { CustomButton } from '@/shared/CustomButton';
import styles from './heroServiceDetails.module.scss';
import Image from 'next/image';
import { AboutHeroInterface } from 'utils/types/serviceDetails.interface';

const HeroServiceDetail =  ({ hero }: { hero: AboutHeroInterface }) =>{

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

                            <div className={styles.containerImage} >
                                <Image
                                    layout='fill'
                                    src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/clients/0.13199450480578245.png'}

                                    objectFit='contain'
                                    objectPosition='center'
                                    alt='the-image'
                                ></Image>
                            </div>

                            <div className={styles.containerImage} >
                                <Image
                                    layout='fill'
                                    src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/clients/0.10776630128715015.png'}

                                    objectFit='contain'
                                    objectPosition='center'
                                    alt=''
                                ></Image>
                            </div>

                            <div className={styles.containerImage} >
                                <Image
                                    layout='fill'
                                    src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/clients/0.28318966915386756.png'}

                                    objectFit='contain'
                                    objectPosition='center'
                                    alt=''
                                ></Image>
                            </div>
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
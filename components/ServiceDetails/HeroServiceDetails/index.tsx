
import { CustomButton } from '@/shared/CustomButton';
import styles from './heroServiceDetails.module.scss';
import Image from 'next/image';

const HeroServiceDetail =  () =>{

    return(
    <div  className={styles.hero}  >

        <section className={styles.container}  >
            {/** Informacion */}
            <section className={styles.heroContainer}   >

                <section className={styles.details}  >

                    <div  className={styles.pill} >DESIGN LAB</div>

                    <div  className={styles.title} >Big ideas need amazing solutions.</div>
                    <div  className={styles.caption} >
                        Don’t waste money implementing ideas without a plan.
                        Apply UX methodologies to create UI that works instead.
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
                                src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/clients/0.13199450480578245.png'}
                                layout='fill'

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
            {/** Imagen */}
            <section></section>
        </section>
    </div>
    )

}

export default HeroServiceDetail;
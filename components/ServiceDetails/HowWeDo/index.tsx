import { CustomButton } from '@/shared/CustomButton';
import style from './howWeDo.module.scss';
import Image from 'next/image';
import { ServicesProcess } from 'utils/types/serviceDetails.interface';
import { localeNamespaces } from 'utils/types/localeNamespaces.enum';
import useTranslation from 'next-translate/useTranslation';

const HowWeDo = ({contentServicesProcess}:{contentServicesProcess:ServicesProcess[]}) =>{

    const { t } = useTranslation(localeNamespaces.common);

    return (

        <>
            {
                contentServicesProcess.map((process) => (


                    <div key={process.id} className={style.howWeDo} >


                        <section className={style.container} >

                            <div className={style.menu}  >

                                <ul className={style.unorderedList}  >
                                    <li className={style.listItem}  >{process.nameEs?? process.nameEn}</li>
                                </ul>

                                <div className={style.containerButton} >
                                    <CustomButton path='https://forms.monday.com/forms/c1b7794e1f9ef4b6851826edb9a11515' target='_blank' >{t('serviceHWD_btn.value')}</CustomButton>
                                </div>
                            </div>

                            <div className={style.content}  >
                                {/** Image */}
                                <div className={style.containerImage} >
                                    <Image
                                        layout='fill'
                                        src={process.pathImage}
                                        objectFit='contain'
                                        objectPosition='center'
                                        alt='the-image'
                                    ></Image>
                                </div>

                                {/**Review */}
                                <section className={style.reviewContainer}  >

                                    <div className={style.TitleReview}  >
                                        {process.tittleEs??process.tittleEn}
                                    </div>

                                    <div className={style.contentReview} >
                                        {process.captionEn?? process.captionEs}
                                    </div>

                                    <ul className={style.ulReview}   >

                                        {
                                            process.featuresEn?.map((item, i)=>(
                                                <li className={style.liReview} key={i}   >
                                                    <div >{item}</div>
                                                </li>
                                            ))
                                        }
                                        {
                                            process.featuresEs?.map((item, i)=>(
                                                <li className={style.liReview} key={i}   >
                                                    <div>{item}</div>
                                                </li>
                                            ))
                                        }
                                        
                                    </ul>

                                </section>

                                {/** Boton pero solo para movil (xs) */}
                                <div className={style.buttonXS} >
                                    <CustomButton isWidth100={true} path='https://forms.monday.com/forms/c1b7794e1f9ef4b6851826edb9a11515' target='_blank' >{t('serviceHWD_btn.value')}</CustomButton>
                                </div>
                            </div>


                        </section>


                    </div>
                ))
            }
        </>
        
    )
}

export default HowWeDo;
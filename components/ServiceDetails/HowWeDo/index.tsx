import { CustomButton } from '@/shared/CustomButton';
import style from './howWeDo.module.scss';
import Image from 'next/image';
import { ServicesProcess } from 'utils/types/serviceDetails.interface';

const HowWeDo = ({contentServicesProcess}:{contentServicesProcess:ServicesProcess[]}) =>{

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
                                    <CustomButton path='' target='_blank' >Start Today</CustomButton>
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
                                            process.featuresEn?.map((item)=>(
                                                <li className={style.liReview} key={item}   >{item}</li>
                                            ))
                                        }
                                        {
                                            process.featuresEs?.map((item)=>(
                                                <li className={style.liReview} key={item}   >{item}</li>
                                            ))
                                        }
                                        
                                    </ul>

                                </section>

                                {/** Boton pero solo para movil (xs) */}
                                <div className={style.buttonXS} >
                                    <CustomButton isWidth100={true} path='' target='_blank' >Start Today</CustomButton>
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
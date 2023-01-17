import { CustomButton } from '@/shared/CustomButton';
import style from './howWeDo.module.scss';
import Image from 'next/image';

const HowWeDo = () =>{

    return (
        <div className={style.howWeDo} >
        

            <section  className={style.container} >
                
                <div className={style.menu}  >

                    <ul className={style.unorderedList}  >
                        <li className={style.listItem}  >Empathize</li>
                    </ul>

                    <div  className={style.containerButton} >
                        <CustomButton  path='' target='_blank' >Start Today</CustomButton>
                    </div>
                </div>

                <div className={style.content}  >
                    {/** Image */}
                    <div className={style.containerImage} >
                        <Image
                        layout='fill'
                        src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/Services/HowWeDo-Image-Example.svg'}
                        objectFit='contain'
                        objectPosition='center'
                        alt='the-image'
                        ></Image>
                    </div>

                    {/**Review */}
                    <section className={style.reviewContainer}  >
                        
                        <div className={style.TitleReview}  >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </div>

                        <div  className={style.contentReview} >
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>

                        <ul className={style.ulReview}   >
                            <li className={style.liReview}   >UX Research</li>
                            <li className={style.liReview}   >Benchmarking</li>
                            <li className={style.liReview}   >Design Sprint</li>
                            <li className={style.liReview}   >User Personas </li>
                        </ul>

                    </section>

                    {/** Boton pero solo para movil (xs) */}
                    <div  className={style.buttonXS} >
                            <CustomButton isWidth100={true}  path='' target='_blank' >Start Today</CustomButton>
                    </div>
                </div>


            </section>


        </div>
    )
}

export default HowWeDo;
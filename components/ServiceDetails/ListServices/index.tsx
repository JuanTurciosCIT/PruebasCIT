import style from "./listService.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import arrowRight from '@/svg/arrow-right.svg';

const ListService = () =>{

    return(
        <div className={style.listService}  >

            <div className={style.container} >

                <div className={style.title} >
                    Are you looking for a different service?
                </div>

                <div  className={style.gridCards} >
                    <div  className={style.card} >
                        <div  className={style.cardImage} >
                            <Image
                                layout='fill'
                                src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/services/0.18985537190238388.png'}
                                objectFit='contain'
                                objectPosition='center'
                                alt='the-design'
                            ></Image>
                        </div>
                        <div  className={style.cardTitle} >Design Lab</div>
                        <div  className={style.cardCaption} > UX/UI Design, Design System & Style Guides</div>
                        
                        <div className={style.link} >
                            <Link href='/serviceDetails/1'>Ver mas</Link> 
							<Image width={12} height={12} src={arrowRight} alt='Arrow right' quality={70} lazyBoundary='600px' />
                        </div>
                    </div>

                    <div  className={style.card} >
                        <div  className={style.cardImage} >
                            <Image
                                layout='fill'
                                src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/services/0.18443319147604398.png'}
                                objectFit='contain'
                                objectPosition='center'
                                alt='the-design'
                            ></Image>
                        </div>
                        <div  className={style.cardTitle} >IT Outsourcing</div>
                        <div  className={style.cardCaption} >24/7 IT Technical Support ( Tiers I & II) 24/7 Customer Technical Support</div>
                        
                        <div className={style.link} >
                            <Link href='/serviceDetails/1'>Ver mas</Link> 
							<Image width={12} height={12} src={arrowRight} alt='Arrow right' quality={70} lazyBoundary='600px' />
                        </div>
                    </div>

                    <div  className={style.card} >
                        <div  className={style.cardImage} >
                            <Image
                                layout='fill'
                                src={'https://suthiuipgrzglbzvsbjv.supabase.co/storage/v1/object/public/cit-landing-page/HomePage/services/0.2541479312977126.png'}
                                objectFit='contain'
                                objectPosition='center'
                                alt='the-design'
                            ></Image>
                        </div>
                        <div  className={style.cardTitle} >Micro Sevices</div>
                        <div  className={style.cardCaption} >Branding, WIX & Shopify one stop setup, Advanced Websites</div>
                        
                        <div className={style.link} >
                            <Link href='/serviceDetails/1'>Ver mas</Link> 
							<Image width={12} height={12} src={arrowRight} alt='Arrow right' quality={70} lazyBoundary='600px' />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default ListService;
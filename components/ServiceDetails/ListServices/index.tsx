import style from "./listService.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import arrowRight from '@/svg/arrow-right.svg';
import { ServicesSection } from "utils/types/homeContent.interface";
import useTranslation from 'next-translate/useTranslation';
import { localeNamespaces } from "utils/types/localeNamespaces.enum";

const ListService = ( {listServices} :{listServices: ServicesSection[]}) =>{
    const { t } = useTranslation(localeNamespaces.common);

    return(
        <div className={style.listService}  >

            <div className={style.container} >

                <div className={style.title} >
                    Are you looking for a different service?
                </div>

                <div  className={style.gridCards} >

                    {
                        listServices.map((card)=>(
                            
                            <div key={card.id} className={style.card} >
                                <div className={style.cardImage} >
                                    <Image
                                        layout='fill'
                                        src={card.logo}
                                        objectFit='contain'
                                        objectPosition='center'
                                        alt='the-design'
                                    ></Image>
                                </div>
                                <div className={style.cardTitle} >{card.nameEN?? card.nameES}</div>
                                <div className={style.cardCaption} > {card.descriptionEN  ?? card.descriptionES}</div>

                                <div className={style.link} >
                                    <Link href={`/serviceDetails/${card.id}`}>{t('services.btn_text')}</Link>
                                    <Image width={12} height={12} src={arrowRight} alt='Arrow right' quality={70} lazyBoundary='600px' />
                                </div>
                            </div>
                        ))
                    }


                 
                    
                </div>

            </div>
        </div>
    )
}

export default ListService;
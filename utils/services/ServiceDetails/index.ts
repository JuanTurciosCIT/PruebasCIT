import { ServiceDetailPage } from './../../types/serviceDetails.interface';
import {ServiceDetailsService  } from "./ServiceDetailsService";

export async function getDetailsServiceBy(locale: string = 'en', idService:number ): Promise<ServiceDetailPage> {

    const aboutHero = await ServiceDetailsService.getHeroContent(locale, idService);

    return {
        aboutHero,
    }
}
import { ServiceDetailPage } from './../../types/serviceDetails.interface';
import {ServiceDetailsService  } from "./ServiceDetailsService";

export async function getDetailsServiceBy(locale: string = 'en', idService:number ): Promise<ServiceDetailPage> {

    const aboutHero = await ServiceDetailsService.getHeroContent(locale, idService);
    const footer = await ServiceDetailsService.getFooterContent();
    const customerFeedback = await ServiceDetailsService.getCustomerFeedbackContent(locale);
    const footerHero = await ServiceDetailsService.getHeroFooterContent(locale);
    const services = await ServiceDetailsService.getServicesContent(locale, idService);
    const summaryContent  = await ServiceDetailsService.getSummaryContent(locale, idService);
    const servicesProcess = await ServiceDetailsService.getServicesProcess(locale, idService);

    return {
        aboutHero,
        footer,
        customerFeedback,
        footerHero,
        services,
        summaryContent,
        servicesProcess
    }
}
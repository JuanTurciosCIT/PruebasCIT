import { FooterSection, FooterHeroSection } from './commonContent.interface';
import { CustomerFeedbackSection, ServicesSection } from './homeContent.interface';
export interface ServiceDetailPage{
    aboutHero: AboutHeroInterface;
    footer: FooterSection;
    customerFeedback:  CustomerFeedbackSection[];
    footerHero: FooterHeroSection;
    services: ServicesSection[];
}

export interface AboutHeroInterface{
    nameEn:    string;
    nameEs:    string;
    tittleEn:  string;
    tittleEs:  string;
    captionEn: string;
    captionEs: string;
    pathImage: string;
    idService: number;
    isVisble:  boolean;
}
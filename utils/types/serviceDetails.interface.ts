import { FooterSection, FooterHeroSection } from './commonContent.interface';
import { CustomerFeedbackSection, ServicesSection } from './homeContent.interface';
export interface ServiceDetailPage{
    aboutHero: AboutHeroInterface;
    footer: FooterSection;
    customerFeedback:  CustomerFeedbackSection[];
    footerHero: FooterHeroSection;
    services: ServicesSection[];
    summaryContent: SummaryContent;
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

export interface SummaryContent {
    id:                 number;
    tittleEn:           string;
    tittleEs:           string;
    captionEn:          string;
    captionEs:          string;
    featuresEs:         string[];
    idService:          number;
    isVisible:          boolean;
    created_at:         Date;
    featuresEn:         string[];
    customerFeedbackEn: CustomerFeedbackE;
    customerFeedbackEs: CustomerFeedbackE;
}

export interface CustomerFeedbackE {
    title:          string;
    author:         string;
    authorPosition: string;
}
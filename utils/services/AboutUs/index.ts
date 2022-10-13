import { AboutContent } from "utils/types/AboutUs";
import { CommonContentService } from "../CommonContentService";
import { AboutUsService } from "./AboutUsServiceContent";

export async function getAboutUsContent(locale: string = 'en'): Promise<AboutContent> {

    const aboutHero = await AboutUsService.getHeroContent(locale);
    const metricContent = await AboutUsService.getMetricsContent(locale);
    const aboutMetrics = await AboutUsService.getMetrics(locale);
    const companyValue = await AboutUsService.getCompanyValues(locale);
    const coComment = await AboutUsService.getCoComment(locale);
    const footerHero = await CommonContentService.getHeroFooterContent(locale);
    const employees = await CommonContentService.getEmployees(locale);
    const aboutCustomers = await AboutUsService.getCustomers(locale);
    const footerContent = await CommonContentService.getFooterContent();
    return {
        aboutHero,
        metricContent,
        aboutMetrics,
        companyValue,
        coComment,
        employees,
        aboutCustomers,
        footerHero,
        footerContent
    }
}
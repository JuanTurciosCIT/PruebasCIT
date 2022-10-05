import { AboutContent } from "utils/types/AboutUs";
import { CommonContentService } from "../CommonContentService";
import { AboutUsService } from "./AboutUsServiceContent";

export async function getAboutUsContent(locale: string = 'en'): Promise<AboutContent> {

    const aboutHero = await AboutUsService.getHeroContent(locale);
    const footerHero = await CommonContentService.getHeroFooterContent(locale);
    const employees = await CommonContentService.getEmployees(locale);
    const footerContent = await CommonContentService.getFooterContent();
    return {
        aboutHero,
        employees,
        footerHero,
        footerContent
    }
}
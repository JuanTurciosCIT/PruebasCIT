import HomeContentService from './HomeContentService';
import { HomeContent } from 'utils/types/homeContent.interface';

export async function getHomePageContent(locale: string = 'en'): Promise<HomeContent | undefined> {
	const hero = await HomeContentService.getHeroContent(locale);
	const services = await HomeContentService.getServicesContent(locale);
	const technologies = await HomeContentService.getTechnologiesContent(locale);
	const customers = await HomeContentService.getCustomerContent();
	const about = await HomeContentService.getAboutContent();
	const customerFeedback = await HomeContentService.getCustomerFeedbackContent(locale);
	const gallery = await HomeContentService.getGalleryContent(locale);
	const footerHero = await HomeContentService.getHeroFooterContent(locale);
	const footer = await HomeContentService.getFooterContent();

	return {
		hero,
		services,
		technologies,
		customers,
		about,
		customerFeedback,
		gallery,
		footerHero,
		footer
	}
}

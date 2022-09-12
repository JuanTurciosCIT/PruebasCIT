import { CommonContentService } from './CommonContentService';
import { HomeContentService } from './HomeContentService';

import { HomeContent } from 'utils/types/homeContent.interface';

export async function getHomePageContent(locale: string = 'en'): Promise<HomeContent | undefined> {
	const hero = await HomeContentService.getHeroContent(locale);
	const services = await HomeContentService.getServicesContent(locale);
	const technologies = await HomeContentService.getTechnologiesContent(locale);
	const caseStudies = await HomeContentService.getCaseStudiesContent(locale);
	const customers = await HomeContentService.getCustomerContent();
	const about = await HomeContentService.getAboutContent();
	const customerFeedback = await HomeContentService.getCustomerFeedbackContent(locale);
	const portfolio = await HomeContentService.getPortfolioContent(locale);
	const gallery = await HomeContentService.getGalleryContent(locale);
	const footerHero = await CommonContentService.getHeroFooterContent(locale);
	const footer = await CommonContentService.getFooterContent();

	return {
		hero,
		services,
		technologies,
		caseStudies,
		customers,
		about,
		customerFeedback,
		portfolio,
		gallery,
		footerHero,
		footer
	}
}

// apply a return type to the function later - reminder (type: CaseStudyContent)
export async function getCaseStudiesContent(locale: string = 'en'): Promise<any | undefined> {
	const footerHero = await CommonContentService.getHeroFooterContent(locale);
	const footer = await CommonContentService.getFooterContent();

	return {
		// ... rest of case study content
		footerHero,
		footer
	}
}
import { CommonContentService } from './CommonContentService';
import { HomeContentService } from './HomeContentService';
import { CaseStudiesContentService } from './CaseStudiesContentService';
import { CaseStudyDetailService } from './CaseStudyDetailService';

import {
	HomeContent,
	ServicesSection,
} from 'utils/types/homeContent.interface';

import {
	CaseStudiesContent,
	CaseStudyCategory,
} from 'utils/types/caseStudies.interface';


import {
	CaseStudyAchievement,
	CaseStudyAppStack,
	CaseStudyAppStackImage,
	CaseStudyDetailInterface,
	CaseStudyGalleryInterface,
	CaseStudyInfoInterface,
	CaseStudyMetricsInterface,
	CaseStudyOurProcessInterface,
	DetailCaseStudyPage,
	HowItWorksInterface,
} from 'utils/types/caseStudy.interface';

import {
	TechnologiesSection,
	FooterHeroSection,
	FooterSection,
} from 'utils/types/commonContent.interface';

export async function getHomePageContent(
	locale: string = 'en'
): Promise<HomeContent | undefined> {
	const hero = await HomeContentService.getHeroContent(locale);
	const services = await CommonContentService.getServicesContent(locale);
	const technologies = await HomeContentService.getTechnologiesContent(locale);
	const caseStudies = await HomeContentService.getCaseStudiesContent(locale);
	const customers = await HomeContentService.getCustomerContent();
	const about = await HomeContentService.getAboutContent();
	const customerFeedback = await HomeContentService.getCustomerFeedbackContent(
		locale
	);
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
		footer,
	};
}

export async function getCaseStudiesContent(
	locale: string = 'en'
): Promise<CaseStudiesContent | undefined> {
	const hero = await CaseStudiesContentService.getHeroContent(locale);
	const categories = await CaseStudiesContentService.getCaseStudiesCategory(
		locale
	);
	const caseStudies = await CaseStudiesContentService.getCaseStudies(locale);
	const footerHero = await CommonContentService.getHeroFooterContent(locale);
	const footer = await CommonContentService.getFooterContent();

	return {
		// ... rest of case study content
		hero,
		caseStudiesCategories: categories,
		caseStudies,
		footerHero,
		footer,
	};
}

export async function getCaseStudyDetailContent(locale: string = 'en', csid: number): Promise<DetailCaseStudyPage> {
	const caseStudyInfo = await CaseStudyDetailService.getCaseStudyInfo({ csid }) as CaseStudyInfoInterface;
	const detailContent = await CaseStudyDetailService.getCaseStudyDetailContent({ locale, csid }) as CaseStudyDetailInterface;
	const technologies = await CaseStudyDetailService.getTechnologies(detailContent?.idTechnologies as number[]) as TechnologiesSection[];
	const categories = await CaseStudyDetailService.getCategories(caseStudyInfo?.idCategories as number[]) as CaseStudyCategory[];
	const achievements = await CaseStudyDetailService.getAchievements({ locale, csid }) as CaseStudyAchievement[];
	const howItWorks = await CaseStudyDetailService.getAppStack({ locale, csid }) as HowItWorksInterface;
	const metrics = await CaseStudyDetailService.getMetrics({ locale, csid }) as CaseStudyMetricsInterface[];
	const services = await CommonContentService.getServicesContent(locale) as ServicesSection[];
	const ourProcess = await CaseStudyDetailService.getOurProcess({ locale, csid }) as CaseStudyOurProcessInterface[];
	const gallery = await CaseStudyDetailService.getGallery({ csid }) as CaseStudyGalleryInterface[];
	const footerHero = await CommonContentService.getHeroFooterContent(locale) as FooterHeroSection;
	const footer =
		await CommonContentService.getFooterContent() as FooterSection;

	return {
		// ... rest of case study detail content
		caseStudyInfo,
		detailContent,
		categories,
		technologies,
		achievements,
		howItWorks,
		metrics,
		services,
		ourProcess,
		gallery,
		footerHero,
		footer,
	};
}

import { supabase } from 'libs/supabaseClient';
import {
	CaseStudy,
	CaseStudyCategory,
} from 'utils/types/caseStudies.interface';
import { HeroCaseStudiesInterface } from 'utils/types/caseStudies.interface';
import { CaseStudyAchievement, CaseStudyAppStack, CaseStudyAppStackImage, CaseStudyDetailInterface, CaseStudyGalleryInterface, CaseStudyInfoInterface, CaseStudyMetricsInterface, CaseStudyOurProcessInterface } from 'utils/types/caseStudy.interface';
import { TechnologiesSection } from 'utils/types/commonContent.interface';

export const CaseStudyDetailService = {
	getCaseStudyInfo: async ({
		csid,
	}: {
		csid: number;
	}) => {
		const { data, error } = await supabase
			.from<CaseStudyInfoInterface>('CaseStudy')
			.select('id, idCategories, logo, name')
			.match({ id: csid, isVisible: true })
			.single();

		if (error) {
			console.log('An error occurred while fetching case study content', error);
			return;
		}

		return data;
	},

	getTechnologies: async (idTechnologies: number[]) => {
		const { data, error } = await supabase
			.from<TechnologiesSection>('Technology')
			.select('id, logo')
			.in('id', idTechnologies);

		if (error) {
			console.log('An error occurred while fetching case study technologies:, ', error);
			return;
		}

		return data;
	},
	
	getCategories: async (idCategories: number[]) => {
		const { data, error } = await supabase
			.from<CaseStudyCategory>('CaseStudyCategory')
			.select('*')
			.in('id', idCategories)
			.is('isVisible', true);

		if (error) {
			console.log('An error occurred while fetching case study categories:, ', error);
			return;
		}

		return data;
	},

	getCaseStudyDetailContent: async ({
		locale,
		csid,
	}: {
		locale: string;
		csid: number;
	}) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CaseStudyDetailInterface>('CaseStudyDetail')
			.select(
				`idTechnologies, idsServices, pdf, ${
					isEnglish
						? 'heroTitleEN, heroDescriptionEN, companySizeEN, goalEN'
						: 'heroTitleES, heroDescriptionES, companySizeES, goalES'
				}`
			)
			.eq('idCase', csid)
			.single();

		if (error) {
			console.log('An error occurred while fetching case study detail content', error);
		}

		return data;
	},

	getMetrics: async ({locale, csid}: {locale: string; csid: number}) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CaseStudyMetricsInterface>('CaseStudyMetrics')
			.select(
				`id, isVisible, idCase, metricValue, ${
					isEnglish
						? 'suffixEN, descriptionEN'
						: 'suffixES, descriptionES'
				}`
			)
			.match({idCase: csid, isVisible: true});

		if (error) {
			console.log('An error occurred while fetching case study metrics', error);
		}

		return data;
	},

	getDeliveredServices: async ({
		locale,
		idServices,
	}: {
		locale: string;
		idServices: number[];
	}) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<any>('services')
			.select(
				`id, idServices, logo, isVisible, order, ${
					isEnglish
						? 'nameEN, shortDescriptionEN'
						: 'nameES, shortDescriptionES'
				}`
			)
			.in('id', idServices);

		if (error) {
			console.log('An error occurred while fetching the hero content: ', error);
		}

		return data;
	},

	getAchievements: async ({
		locale,
		csid,
	}: {
		locale: string;
		csid: number;
	}) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CaseStudyAchievement>('CaseStudyAchievement')
			.select(
				`id, idCase, isVisible, order, picture, ${
					isEnglish
						? 'titleEN, descriptionEN'
						: 'titleES, descriptionES'
				}`
			)
			.match({ idCase: csid, isVisible: true });

		if (error) {
			console.log('An error occurred while fetching the achievements: ', error);
		}

		return data;
	},

	getAppStack: async ({
		locale,
		csid,
	}: {
		locale: string;
		csid: number;
	}) => {
		const isEnglish = locale === 'en';
		const { data: appStack, error } = await supabase
			.from<CaseStudyAppStack>('CaseStudyApp')
			.select(
				`id, idCase, isVisible, order, ${
					isEnglish
						? 'titleEN'
						: 'titleES'
				}`
			)
			.match({ idCase: csid, isVisible: true });

			const { data: image, error: error2 } = await supabase
			.from<CaseStudyAppStackImage>('CaseStudyInfrastructure')
			.select('idCase, isVisible, picture')
			.match({ idCase: csid, isVisible: true })
			.single();


		if (error || error2) {
			console.log('An error occurred while fetching the app stack: ', error);
		}

		return {appStack, image};
	},

	getOurProcess: async ({
		locale,
		csid
	}: {
		locale: string;
		csid: number;
	}) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CaseStudyOurProcessInterface>('CaseStudyProcess')
			.select(
				`id, idCase, isVisible, order, picture, ${
					isEnglish
						? 'titleEN, descriptionEN'
						: 'titleES, descriptionES'
				}`
			)
			.match({ idCase: csid, isVisible: true });

		if (error) {
			console.log('An error occurred while fetching the our process: ', error);
		}

		return data;
	},

	getGallery: async ({ csid }: { csid: number }) => {
		const { data, error } = await supabase
			.from<CaseStudyGalleryInterface>('CaseStudyGallery')
			.select(
				'id, idCase, isVisible, isVisible, pathImage'
			)
			.match({ idCase: csid, isVisible: true });

		if (error) {
			console.log('An error occurred while fetching the gallery: ', error);
		}

		return data;
	}
};

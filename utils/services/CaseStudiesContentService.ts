import { supabase } from 'libs/supabaseClient';
import { CaseStudy, CaseStudyCategory } from 'utils/types/caseStudies.interface';
import { HeroCaseStudiesInterface } from 'utils/types/caseStudies.interface';

export const CaseStudiesContentService = {

	getHeroContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<HeroCaseStudiesInterface>('Hero')
			.select(
				`${
					isEnglish
						? 'backgroundImage, titleEN, captionEN, linkedPage'
						: 'backgroundImage, titleES, captionES, linkedPage'
				}`
			)
			.eq('linkedPage', 'case-studies')
			.eq('isVisible', true)
			.single();

		if (error) {
			console.log('An error occurred while fetching the hero content: ', error);
		}

		return data as HeroCaseStudiesInterface;
	},

	getCaseStudiesCategory: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CaseStudyCategory>('CaseStudyCategory')
			.select(`${isEnglish ? 'nameEN' : 'nameES'}, id`)
			.eq('isVisible', true);

		if (error) {
			console.log(
				'An error occurred while fetching the case studies category: ',
				error
			);
		}

		return data as CaseStudyCategory[];
	},

	getCaseStudies: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CaseStudy>('CaseStudy')
			.select(
				`${
					isEnglish
						? 'id, name, titleEN, descriptionEN, idCategories, picture'
						: 'id, name, titleES, descriptionES, idCategories, picture'
				}, picture`
			)
			.eq('isVisible', true);

		if (error) {
			console.log('An error occurred while fetching the case studies: ', error);
		}

		return data as CaseStudy[];
	}
}
import { supabase } from 'libs/supabaseClient';
import {
	AboutSection,
	CustomerFeedbackSection,
	CustomersSection,
	GallerySection,
	HeroSection,
	PortfolioSection,
	CaseStudyCard,
} from 'utils/types/homeContent.interface';
import { TechnologiesSection } from 'utils/types/commonContent.interface';

export const HomeContentService = {

	getHeroContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<HeroSection>('Hero')
			.select(
				`${
					isEnglish
						? 'backgroundImage, titleEN, subtitleStartEN, subtitleEndEN, subtitlePhrasesEN, captionEN, linkedPage'
						: 'backgroundImage, titleES, subtitleStartES, subtitleEndES, subtitlePhrasesES, captionES, linkedPage'
				}`
			)
			.eq('linkedPage', 'home')
			.eq('isVisible', true)
			.single();

		if (error) {
			console.log('An error occurred while fetching the hero content: ', error);
		}

		return data as HeroSection;
	},

	getCustomerContent: async () => {
		const { data, error } = await supabase
			.from<CustomersSection>('Customer')
			.select('imagePath, isVisible, id')
			.eq('isVisible', true);

		if (error) {
			console.log(
				'An error occurred while fetching the customer content: ',
				error
			);
		}

		return data as CustomersSection[];
	},

	getAboutContent: async () => {
		const { data, error } = await supabase
			.from<AboutSection>('About')
			.select('placeholderImage, videoPath')
			.single();

		if (error) {
			console.log(
				'An error occurred while fetching the about content: ',
				error
			);
		}

		return data as AboutSection;
	},

	getTechnologiesContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<TechnologiesSection>('Technology')
			.select(
				`id, name, ${
					isEnglish ? 'descriptionEN' : 'descriptionES'
				}, logo, ringLevel, isVisible`
			)
			.eq('isVisible', true);

		if (error) {
			console.log(
				'An error occurred while fetching the technologies content: ',
				error
			);
		}

		return data as TechnologiesSection[];
	},

	getCaseStudiesContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CaseStudyCard>('CaseStudy')
			.select(
				`id, isVisible, idCategories, ${
					isEnglish
						? 'descriptionEN, titleEN, tagEN'
						: 'descriptionES, titleES, tagES'
				}, logo, picture`
			)
			.eq('isVisible', true);

		if (error) {
			console.log(
				'An error occurred while fetching the case studies content: ',
				error
			);
		}

		return data as CaseStudyCard[];
	},

	getCustomerFeedbackContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CustomerFeedbackSection>('CustomerFeedback')
			.select(`id, name, rate, ${isEnglish ? 'commentEN' : 'commentES'}, picture, isVisible, companyName`)
			.eq('isVisible', true);

      console.log(data)
		if (error) {
			console.log(
				'An error occurred while fetching the customer feedback content: ',
				error
			);
		}

		return data as CustomerFeedbackSection[];
	},

	getPortfolioContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<PortfolioSection>('Portfolio')
			.select(
				`card_title, ${
					isEnglish ? 'descriptionEN' : 'descriptionES'
				}, background_image, picture, isVisible`
			)
			.eq('isVisible', true);

		if (error) {
			console.log(
				'An error occurred while fetching the portfolio content: ',
				error
			);
		}

		return data as PortfolioSection[];
	},

	getGalleryContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<GallerySection>('HomeGallery')
			.select(
				`images, ${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}`
			)
			.single();

		if (error) {
			console.log(
				'An error occurred while fetching the gallery content: ',
				error
			);
		}

		return data as GallerySection;
	}
};

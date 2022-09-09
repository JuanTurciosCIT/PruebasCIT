import { supabase } from 'libs/supabaseClient';
import {
	AboutSection,
	Contact,
	CustomerFeedbackSection,
	CustomersSection,
	FooterHeroSection,
	GallerySection,
	HeroSection,
	ServicesSection,
	TechnologiesSection,
	LocationInterface,
	FooterSection,
	PortfolioSection,
	CaseStudy,
} from 'utils/types/homeContent.interface';

const HomeContentService = {

	getHeroContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<HeroSection>('HomeHero')
			.select(
				`${
					isEnglish
						? 'backgroundImage, titleEN, subtitleStartEN, subtitleEndEN, subtitlePhrasesEN, captionEN'
						: 'backgroundImage, titleES, subtitleStartES, subtitleEndES, subtitlePhrasesES, captionES'
				}`
			)
			.single();

		if (error) {
			console.log('An error occurred while fetching the hero content: ', error);
		}

		return data as HeroSection;
	},

	getCustomerContent: async () => {
		const { data, error } = await supabase
			.from<CustomersSection>('Customer')
			.select('imagePath, isVisible')
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

	getServicesContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<ServicesSection>('Services')
			.select(
				`${isEnglish ? 'nameEN, descriptionEN' : 'nameES, descriptionES'}, logo, isVisible`
			)
			.eq('isVisible', true);

		if (error) {
			console.log(
				'An error occurred while fetching the services content: ',
				error
			);
		}

		return data as ServicesSection[];
	},

	getTechnologiesContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<TechnologiesSection>('Technology')
			.select(
				`name, ${
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
			.from<CaseStudy>('CaseStudy')
			.select(
				`isVisible, idCategories, ${
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

		return data as CaseStudy[];
	},

	getCustomerFeedbackContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CustomerFeedbackSection>('CustomerFeedback')
			.select(`name, rate, ${isEnglish ? 'commentEN' : 'commentES'}, picture, isVisible`)
			.eq('isVisible', true);

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
	},

	getHeroFooterContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<FooterHeroSection>('HomeFooterHero')
			.select(
				`${
					isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'
				}, backgroundImg`
			)
			.single();

		if (error) {
			console.log(
				'An error occurred while fetching the footer hero content: ',
				error
			);
		}

		return data as FooterHeroSection;
	},

	getFooterContent: async () => {
		const { data: locations, error: locationsError } = await supabase
			.from<LocationInterface>('Location')
			.select('address, isVisible')
			.eq('isVisible', true);

		const { data: contact, error: contactError } = await supabase
			.from<Contact>('Contact')
			.select('facebook, instagram, linkedin, phone, email')
			.single();

		if (locationsError || contactError) {
			console.log(
				'An error occurred while fetching the footer content: ',
				locationsError || contactError
			);
		}

		const FooterContent: FooterSection = {
			locations: locations as LocationInterface[],
			contact: contact as Contact,
		};

		return FooterContent;
	},
};

export default HomeContentService;

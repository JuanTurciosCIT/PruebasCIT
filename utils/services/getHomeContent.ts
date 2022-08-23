import { supabase } from 'libs/supabaseClient';
import {
	HeroSection,
	CustomersSection,
	AboutSection,
	ServicesSection,
	TechnologiesSection,
	CustomerFeedbackSection,
	GallerySection,
	FooterHeroSection,
	HomeContent,
	Location,
	Contact,
	FooterSection,
} from '../types/homeContent.interface';

/**
 * It fetches data from the database and returns it as a HomeContent object
 * @param {string} locale - string - The locale of the content you want to fetch | default: 'en'
 * @returns The return type is HomeContent.
 */
export const getHomeContent = async (locale: string = 'en'): Promise<HomeContent | undefined> => {
	const isEnglish = locale === 'en';

	try {
		const { data: heroContent } = await supabase
		.from<HeroSection>('HomeHero')
		.select(
			`${
				isEnglish
					? 'backgroundImage, titleEN, subtitleStartEN, subtitleEndEN, subtitlePhrasesEN, captionEN'
					: 'backgroundImage, titleES, subtitleStartES, subtitleEndES, subtitlePhrasesES, captionES'
			}`
		)
		.single();

	const { data: customersContent } = await supabase
		.from<CustomersSection>('Customer')
		.select('imagePath');

	const { data: aboutContent } = await supabase
		.from<AboutSection>('About')
		.select('placeholderImage, videoPath')
		.single();

	const { data: servicesContent } = await supabase
		.from<ServicesSection>('Services')
		.select(
			`${isEnglish ? 'nameEN, descriptionEN' : 'nameES, descriptionES'}, logo`
		);

	const { data: technologiesContent } = await supabase
		.from<TechnologiesSection>('Technology')
		.select(
			`name, ${isEnglish ? 'descriptionEN' : 'descriptionES'}, logo, ringLevel`
		);

	const { data: customerFeedbackContent } = await supabase
		.from<CustomerFeedbackSection>('CustomerFeedback')
		.select(
			`name, rate, ${
				isEnglish ? 'commentEN' : 'commentES'
			}, picture`
		);

	const { data: galleryContent } = await supabase
		.from<GallerySection>('HomeGallery')
		.select(
			`images, ${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}`
		)
		.single();

	const { data: heroFooterContent } = await supabase
		.from<FooterHeroSection>('FooterHero')
		.select(
			`${
				isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'
			}, backgroundImg`
		)
		.single();

		const { data: locations } = await supabase
			.from<Location>('Location')
			.select('address');

		const { data: contact } = await supabase
			.from<Contact>('Contact')
			.select('facebook, instagram, linkedin, phone, email')
			.single();

		const FooterContent: FooterSection = { locations: locations as Location[], contact: contact as Contact };

		return {
			hero: heroContent as HeroSection,
			about: aboutContent as AboutSection,
			customers: customersContent as CustomersSection[],
			services: servicesContent as ServicesSection[],
			technologies: technologiesContent as TechnologiesSection[],
			customerFeedback: customerFeedbackContent as CustomerFeedbackSection[],
			gallery: galleryContent as GallerySection,
			footerHero: heroFooterContent as FooterHeroSection,
			footer: FooterContent,
		};
	} catch (error) {
		console.error(error);
	}
};

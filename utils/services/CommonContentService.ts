import { supabase } from 'libs/supabaseClient';
import { Contact, FooterHeroSection, FooterSection, LocationInterface } from 'utils/types/homeContent.interface';

export const CommonContentService = {

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
	} 
}
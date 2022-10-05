import { supabase } from 'libs/supabaseClient';
import { CareerEmployeeInterface } from 'utils/types/careerContent.interface';
import { Contact, FooterHeroSection, FooterSection, LocationInterface } from 'utils/types/commonContent.interface';
import { HeroSection, ServicesSection } from 'utils/types/homeContent.interface';

export const CommonContentService = {

	getServicesContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<ServicesSection>('Services')
			.select(
				`${isEnglish ? 'nameEN, descriptionEN' : 'nameES, descriptionES'}, logo, isVisible, id`
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

	getEmployees: async (locale: string) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from<CareerEmployeeInterface>('Employee')
      .select(`id, isVisible, imagePath, fullName, order, ${isEnglish ? 'jobPositionEN' : 'jobPositionES'}, id, imagePath, isVisible`)
      .eq('isVisible', true)
      .order('order', { ascending: true });

    if (error) {
      console.log(
        'An error occurred while fetching the employees: ',
        error
      );
    }

    return data as CareerEmployeeInterface[];
  },

  getHeroFooterContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<FooterHeroSection>('HeroFooter')
			.select(
				`${
					isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'
				}, backgroundImg`
			)
			.neq('page', 'career')
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
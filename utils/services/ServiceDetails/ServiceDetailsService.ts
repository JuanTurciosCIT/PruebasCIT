import { CustomerFeedbackSection, ServicesSection } from './../../types/homeContent.interface';
import { LocationInterface, Contact, FooterSection, FooterHeroSection } from './../../types/commonContent.interface';
import { supabase } from 'libs/supabaseClient';

export const ServiceDetailsService =  {

    getHeroContent: async (locale:string, id_service:number)=>{
        const isEnglish = locale === 'en';

        const {data, error} = await supabase
        .rpc('get_service_hero', {
            id_service
        })
        .select(
            `pathImage, ${isEnglish ? 'tittleEn, nameEn, captionEn' : 'tittleEs, nameEs, captionEs'}`
        ).single();

        console.log(data)
        if(error){
            console.log(error)
            console.log('A ocurrio un error al obtener el hero del servicio.')
        }else{
            return data as any;
        }
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
	getHeroFooterContent: async (locale: string) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<FooterHeroSection>('HeroFooter')
			.select(
				`${
					isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'
				}, backgroundImg`
			)
			.eq('page', '')
			.single();

		if (error) {
			console.log(
				'An error occurred while fetching the footer hero content: ',
				error
			);
		}

		return data as FooterHeroSection;
	},
	getServicesContent: async (locale: string, idServices:number) => {
		const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<ServicesSection>('Services')
			.select(
				`${isEnglish ? 'nameEN, descriptionEN' : 'nameES, descriptionES'}, logo, isVisible, id`
			)
			.neq('id', idServices)
			.eq('isVisible', true);
			console.log(data)

		if (error) {
			console.log(
				'An error occurred while fetching the services content: ',
				error
			);
		}

		return data as ServicesSection[];
	}
}

import { supabase } from 'libs/supabaseClient';

export const ServiceDetailContentService ={

    getAllServiceDetail: async (locale: string) => {
		const isEnglish = locale === 'en';

		let { data, error } = await supabase
        .rpc('get_services_heros')    

		if (error) {
			console.log('An error occurred while fetching the case studies: ', error);
		}

		return data as any[];
	}
}
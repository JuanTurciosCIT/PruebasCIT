import { supabase } from 'libs/supabaseClient';
import { CareerBenefitsInterface, CareerHeroInterface, CareerOfficesInterface } from 'utils/types/careerContent.interface';

export const CareerContentService = {
  getHeroContent: async (locale: string) => {
    const isEnglish = locale === 'en';
		const { data, error } = await supabase
			.from<CareerHeroInterface>('CareerHero')
			.select(`${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}, id, pathImages, isVisible`)
			.eq('isVisible', true)
      .single();

		if (error) {
			console.log(
				'An error occurred while fetching the career hero content: ',
				error
			);
		}

		return data as CareerHeroInterface;
  },

  getBenefits: async (locale: string) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from<CareerBenefitsInterface>('CareerBenefit')
      .select(`${isEnglish ? 'nameEN' : 'nameES'}, id, isVisible`)
      .eq('isVisible', true);

    if (error) {
      console.log(
        'An error occurred while fetching the career benefits content: ',
        error
      );
    }

    return data as CareerBenefitsInterface[];
  },

  getOfficesPictures: async (locale: string) => {
    const { data, error } = await supabase
      .from<CareerOfficesInterface>('CareerOffice')
      .select('id, imagePath, isVisible')
      .eq('isVisible', true);

    if (error) {
      console.log(
        'An error occurred while fetching the career offices pictures: ',
        error
      );
    }

    return data as CareerOfficesInterface[];
  }
}
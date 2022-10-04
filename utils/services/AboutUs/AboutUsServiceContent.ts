import { supabase } from 'libs/supabaseClient';
import { AboutHeroInterface } from 'utils/types/AboutUs/aboutUsContent.interfaces';

export const AboutUsService = {
    getHeroContent: async (locale: string) => {
        const isEnglish = locale === 'en';
        const { data, error } = await supabase
        .from<AboutHeroInterface>('AboutUsHero')
        .select(
            `imagePath, ${isEnglish? 'titleEN, captionEN' : 'titleES, captionEN'}`)
        .single();

        if(error){
            console.log('An erros has occurred while fetching About Us Hero data', error)
        }
        return data as AboutHeroInterface;
    }
}
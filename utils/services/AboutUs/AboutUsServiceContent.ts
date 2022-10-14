import { supabase } from 'libs/supabaseClient';
import { AboutCoComment, AboutCompanyValue, AboutCustomers, AboutHeroInterface, AboutMetric, AboutMetricContent } from 'utils/types/AboutUs/aboutUsContent.interfaces';

export const AboutUsService = {
    getHeroContent: async (locale: string) => {
        const isEnglish = locale === 'en';
        const { data, error } = await supabase
        .from<AboutHeroInterface>('AboutUsHero')
        .select(
            `imagePath, ${isEnglish? 'titleEN, captionEN' : 'titleES, captionEN'}`)
        .single();

        if(error){
            console.log('An error has occurred while fetching About Us Hero data', error)
        }
        return data as AboutHeroInterface;
    },

    getMetricsContent: async (locale: string) => {
        const isEnglish = locale === 'en';
        const {data, error} = await supabase
        .from<AboutMetricContent>('AboutUsMetricContent')
        .select(
            isEnglish? 'titleEN, captionEN' : 'titleES, captionES'
        ).single();
        if(error){
            console.log('An error has occurred while fetching About Us Metrics data')
        }
        return data as AboutMetricContent;
    },
    getMetrics: async (locale: string) => {
        const isEnglish = locale === 'en';
        const {data,error} =await supabase
        .from<AboutMetric>('AboutMetric')
        .select(
            `prefix, value, ${isEnglish ? 'descriptionEN' : 'descriptionES'}`
        )
        .eq('isVisible', true);
        if(error){
            console.log('An error has occurred while fetching About Us metrics');
        }
        return data as AboutMetric[];
    },
    getCompanyValues: async (locale: string) => {
        const isEnglish = locale === 'en';
        const {data, error} = await supabase 
        .from<AboutCompanyValue>('AboutCompanyValue')
        .select(
            `imagePath, ${isEnglish? 'misionEN, visionEN, itemsEN' : 'misionES, visionES, itemsES'}`
        ).single();

        if( error ){
            console.log('An erros has occurred while fetching about us Company value');
        }
        return data as AboutCompanyValue;
    },
    getCoComment: async(locale: string ) => {
        const isEnglish = locale === 'en';
        const {data, error} = await supabase
        .from<AboutCoComment>('AboutCoComment')
        .select(`coName, ${isEnglish ? 'captionEN, chargeEN' : 'captionES, chargeES'}`)
        .single();

        if(error){
            console.log('An error has occurred while fetching about us CO comment');
        }
        return data as AboutCoComment;
    },
    getCustomers: async (locale: string) =>{
        const isEnglish = locale === 'en';
        const {data, error} = await supabase
        .from('AboutCustomer')
        .select(
             `customersImagePaths, ${isEnglish? 'titleEN, captionEN, titleSmallEN' : 'titleES, captionES, titleSmallES'}`
            ).single();
            if (error){
                console.log('An error has occurred while fetching about us customers data');
            }

            return data as AboutCustomers
    } 

}
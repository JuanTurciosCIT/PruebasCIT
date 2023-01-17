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
}
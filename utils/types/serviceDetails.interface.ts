export interface ServiceDetailPage{
    aboutHero: AboutHeroInterface
}

export interface AboutHeroInterface{
    nameEn:    string;
    nameEs:    string;
    tittleEn:  string;
    tittleEs:  string;
    captionEn: string;
    captionEs: string;
    pathImage: string;
    idService: number;
    isVisble:  boolean;
}
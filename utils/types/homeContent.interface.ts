import { FooterHeroSection, FooterSection } from "./commonContent.interface";

export interface HomeContent {
  hero: HeroSection;
  customers: CustomersSection[];
  about: AboutSection;
  services: ServicesSection[];
  technologies: TechnologiesSection[];
  caseStudies: CaseStudy[];
  customerFeedback: CustomerFeedbackSection[];
  portfolio: PortfolioSection[];
  gallery: GallerySection;
  footerHero: FooterHeroSection;
  footer: FooterSection;
}

export interface HeroSection {
  titleEN?: string;
  titleES?: string;
  subtitleStartEN?: string;
  subtitleStartES?: string;
  subtitleEndEN?: string;
  subtitleEndES?: string;
  subtitlePhrasesEN?: string[];
  subtitlePhrasesES?: string[];
  captionEN?: string;
  captionES?: string;
  backgroundImage?: string;
  linkedPage: string;
  isVisible: boolean;
}
export interface CustomersSection {
  title?: string;
  clientName: string;
  imagePath: string;
  isVisible: boolean;
}


export interface AboutSection {
  title?: string;
  placeholderImage: string;
  videoPath: string;
}

export interface ServicesSection {
  title?: string;
  nameES: string;
  nameEN: string;
  shortDescriptionES: string;
  shortDescriptionEN: string;
  descriptionES?: string;
  descriptionEN?: string;
  logo: string;
  isVisible: boolean;
}

export interface TechnologiesSection {
  title?: string;
  name: string;
  descriptionES?: string;
  descriptionEN?: string;
  ringLevel: number;
  logo: string;
  isVisible: boolean;
}

export interface CaseStudy {
  id:            number;
  name?:          string;
  created_at?:    string;
  titleEN:       string;
  titleES:       string;
  tagES:         string;
  tagEN:         string;
  descriptionEN: string;
  descriptionES: string;
  idCategories:  number[] | string[];
  logo:          string;
  picture:       string;
  isVisible:     boolean;
}

export interface CustomerFeedbackSection {
  title?: string;
  name: string;
  commentES?: string;
  commentEN?: string;
  picture: string;
  rate: number;
  isVisible: boolean;
}

export interface PortfolioSection {
  card_title: string;
  descriptionEN: string;
  descriptionES: string;
  background_image: string;
  picture: string;
  isVisible: boolean;
}

export interface GallerySection {
  titleEN?: string;
  titleES?: string;
  images: string[];
  captionES?: string;
  captionEN?: string;
}
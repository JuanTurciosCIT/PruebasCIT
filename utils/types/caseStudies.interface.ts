import { FooterHeroSection, FooterSection } from "./commonContent.interface";

export interface CaseStudiesContent {
  hero: HeroCaseStudiesInterface;
  caseStudiesCategories: CaseStudyCategory[];
  caseStudies: CaseStudy[];
  footerHero: FooterHeroSection;
  footer: FooterSection;
}

export interface HeroCaseStudiesInterface {
  titleES?: string;
  titleEN?: string;
  captionEN?: string;
  captionES?: string;
  backgroundImage: string;
  linkedPage: string;
  isVisible: boolean;
}

export interface CaseStudy {
  id: string | number;
  titleEN?: string;
  titleES?: string;
  descriptionEN?: string;
  descriptionES?: string;
  picture: string;
  idCategories: string[];
  isVisible: boolean;
}

export interface CaseStudyCategory {
  id: number | string;
  nameES: string;
  nameEN: string;
  isVisible: boolean;
}
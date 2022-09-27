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
  id: number;
  name: string;
  titleEN?: string;
  titleES?: string;
  descriptionEN?: string;
  descriptionES?: string;
  picture: string;
  idCategories: number[];
  isVisible: boolean;
}

export interface CaseStudyCategory {
  id: number;
  nameES: string;
  nameEN: string;
  isVisible: boolean;
}
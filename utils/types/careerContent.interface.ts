import { FooterHeroSection, FooterSection } from "./commonContent.interface";

export interface CareerContentInterface {
  hero: CareerHeroInterface;
  benefits: CareerBenefitsInterface[];
  officesPictures: CareerOfficesInterface[];
  footerHero: FooterHeroSection;
  footer: FooterSection;
}

export interface CareerHeroInterface {
  id: number;
  titleEN?: string;
  titleES?: string;
  captionEN?: string;
  captionES?: string;
  pathImages: string[];
  isVisible: boolean;
}

export interface CareerBenefitsInterface {
  id: number;
  nameEN?: string;
  nameES?: string;
  isVisible: boolean;
}

export interface CareerOfficesInterface {
  id: number;
  imagePath: string;
  isVisible: boolean;
}
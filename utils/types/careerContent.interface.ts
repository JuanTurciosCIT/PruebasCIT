import { FooterHeroSection, FooterSection } from "./commonContent.interface";

export interface CareerContentInterface {
  hero: CareerHeroInterface;
  benefits: CareerBenefitsInterface[];
  officesPictures: CareerOfficesInterface[];
  employeesFeedback: CareerEmployeeFeedbackInterface[];
  employees: CareerEmployeeInterface[];
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

export interface CareerEmployeeFeedbackInterface {
  id: number;
  employeeId: number;
  commentEN?: string;
  commentES?: string;
  isVisible: boolean;
  Employee: CareerEmployeeInterface;
}

export interface CareerEmployeeInterface {
  id: number;
  isVisible: boolean;
  fullName: string;
  jobPositionEN?: string; // job title
  jobPositionES?: string; // job title
  imagePath: string;
  order: number;
}
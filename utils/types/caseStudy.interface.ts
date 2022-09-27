import { CaseStudyCategory } from "./caseStudies.interface";
import { FooterHeroSection, FooterSection, TechnologiesSection } from "./commonContent.interface";
import { ServicesSection } from "./homeContent.interface";

export interface DetailCaseStudyPage {
  caseStudyInfo: CaseStudyInfoInterface;
  detailContent: CaseStudyDetailInterface;
  categories: CaseStudyCategory[];
  technologies: TechnologiesSection[];
  achievements: CaseStudyAchievement[];
  howItWorks: HowItWorksInterface;
  metrics: CaseStudyMetricsInterface[];
  services: ServicesSection[];
  ourProcess: CaseStudyOurProcessInterface[];
  gallery: CaseStudyGalleryInterface[];
  footerHero: FooterHeroSection;
  footer: FooterSection;
}

export interface CaseStudyInfoInterface {
  id: number;
  idCategories: number[];
  logo: string;
  name: string;
}

export interface CaseStudyDetailInterface {
  pdf: string;
  idTechnologies: number[];
  idsServices: number[],
  heroTitleEN?: string;
  heroDescriptionEN?: string;
  companySizeEN?: string;
  goalEN?: string;
  heroTitleES?: string;
  heroDescriptionES?: string;
  companySizeES?: string;
  goalES?: string;
  idCase: number;
}

export interface CaseStudyMetricsInterface {
  id: number;
  isVisible: boolean;
  idCase: number;
  metricValue: number;
  suffixEN?: string;
  suffixES?: string;
  descriptionEN?: string;
  descriptionES?: string;
}

export interface CaseStudyAchievement {
  id: number;
  idCase: number;
  isVisible: boolean;
  titleEN?: string;
  titleES?: string;
  descriptionEN?: string;
  descriptionES?: string;
  picture: string;
}

export interface CaseStudyAppStack {
  id: number;
  idCase: number;
  isVisible: boolean;
  titleEN?: string;
  titleES?: string;
  order: number;
}

export interface CaseStudyAppStackImage {
  picture: string;
  isVisible: boolean;
  idCase: number;
}

export interface HowItWorksInterface {
  appStack: CaseStudyAppStack[];
  image: CaseStudyAppStackImage;
}

export interface CaseStudyOurProcessInterface {
  id: number;
  titleEN?: string;
  titleES?: string;
  descriptionEN?: string;
  descriptionES?: string;
  picture: string;
  order: number;
  idCase: number;
  isVisible: boolean;
}

export interface CaseStudyGalleryInterface {
  id: number;
  idCase: number;
  isVisible: boolean;
  pathImage: string;
}
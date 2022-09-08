export interface CaseStudies {
  heroSection: HeroCaseStudiesInterface;
  paginationCaseStudies: CaseStudy[];
}

export interface HeroCaseStudiesInterface {
  titleES?: string;
  titleEN?: string;
  descriptionES?: string;
  descriptionEN?: string;
  backgroundImage: string;
}

export interface CaseStudy {
  title?: string;
  description?: string;
  picture: string;
  category: { name: string };
}
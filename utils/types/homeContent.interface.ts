export interface HomeContent {
  hero: HeroSection;
  customers: CustomersSection[];
  about: AboutSection;
  services: ServicesSection[];
  technologies: TechnologiesSection[];
  customerFeedback: CustomerFeedbackSection[];
  gallery: GallerySection;
  footerHero: FooterHeroSection;
}

export interface HeroSection {
  titleEN?: string;
  titleES?: string;
  subtitleEN?: string;
  subtitleES?: string;
  captionEN?: string;
  captionES?: string;
  backgroundImage?: string;
}
export interface CustomersSection {
  title?: string;
  clientName: string;
  imagePath: string;
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
}

export interface TechnologiesSection {
  title?: string;
  name: string;
  descriptionES?: string;
  descriptionEN?: string;
  ringLevel?: number;
  logo: string;
}

export interface CustomerFeedbackSection {
  title?: string;
  customerName: string;
  commentES?: string;
  commentEN?: string;
  customerImg: string;
  rate: number;
}

export interface GallerySection {
  titleEN?: string;
  titleES?: string;
  images: string[];
  captionES?: string;
  captionEN?: string;
}

export interface FooterHeroSection {
  titleES?: string;
  titleEN?: string;
  captionES?: string;
  captionEN?: string;
  backgroundImg?: string;
}
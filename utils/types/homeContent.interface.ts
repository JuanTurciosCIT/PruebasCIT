export interface HeroSection {
  titleEN: string;
  titleES: string;
  subtitleEN: string;
  subtitleES: string;
  captionEN: string;
  captionES: string;
  backgroundImage?: string;
  placeholderVideo?: string;
  video?: string;
}

export interface CustomersSection {
  title?: string;
  clientName: string;
  imagePath: string;
}

export interface AboutSection {
  title?: string;
  imagePlaceholder?: string;
  videoPath?: string;
}

export interface ServicesSection {
  title: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface TechnologiesSection {
  title?: string;
  name: string;
  description: string;
  link?: string;
}

export interface CustomerFeedbackSection {
  title: string;
  
}
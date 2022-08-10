export interface HeroSection {
  title: string;
  subtitle: string;
  caption: string;
  backgroundImage?: string;
}

interface Customer {
  clientName: string;
  imagePath: string;
}

export interface CustomersSection {
  title?: string;
  customers: Customer[];
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
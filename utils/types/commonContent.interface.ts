export interface FooterHeroSection {
  titleES?: string;
  titleEN?: string;
  captionES?: string;
  captionEN?: string;
  backgroundImg?: string;
  page?: string;
}

export interface LocationInterface {
  address: string;
  isVisible: boolean;
}

export interface TechnologiesSection {
  id: number;
  title?: string;
  name: string;
  descriptionES?: string;
  descriptionEN?: string;
  ringLevel: number;
  logo: string;
  isVisible: boolean;
}

export interface Contact {
  facebook: string;
  instagram: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface FooterSection {
  locations: LocationInterface[];
  contact: Contact;
}
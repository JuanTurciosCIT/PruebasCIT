export interface FooterHeroSection {
  titleES?: string;
  titleEN?: string;
  captionES?: string;
  captionEN?: string;
  backgroundImg?: string;
}

export interface LocationInterface {
  address: string;
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
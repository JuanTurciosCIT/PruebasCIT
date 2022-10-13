import { NavLink } from "utils/types/navLink.interface";
import { Pages } from "../types/pages.enum";

export const navLinks: NavLink[] = [
  {
    localeName: 'home',
    path: '/',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  },
  {
    localeName: 'our_services',
    path: '/#services',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  },
  // {
  //   localeName: 'career',
  //   path: '#career',
  //   visibleIn: Pages.HOME,
  // },
  {
    localeName: 'about_us',
    path: '/about-us',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  },
  {
    localeName: 'careers',
    path: '/career',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  },
  {
    localeName: 'contact_us',
    path: '#ContactUs',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  }
/*   {
    localeName: 'jobs',
    path: '/jobs',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  },
  {
    localeName: 'benefits',
    path: '#benefits',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  },
  {
    localeName: 'support',
    path: '#support',
    visibleIn: [Pages.HOME, Pages.CAREER, Pages.JOBS, Pages.SERVICES, Pages.ABOUT_US, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES, Pages.CASE_STUDY]
  } */
];
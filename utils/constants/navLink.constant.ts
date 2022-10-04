import { NavLink } from "utils/types/navLink.interface";
import { Pages } from "../types/pages.enum";

export const navLinks: NavLink[] = [
  {
    localeName: 'home',
    path: '/',
    visibleIn: [Pages.HOME, Pages.ABOUT_US],
  },
  {
    localeName: 'our_services',
    path: '#services',
    visibleIn: [Pages.HOME, Pages.ABOUT_US],
  },
  // {
  //   localeName: 'career',
  //   path: '#career',
  //   visibleIn: Pages.HOME,
  // },
  {
    localeName: 'about_us',
    path: '/about-us',
    visibleIn: Pages.HOME,
  },
  {
    localeName: 'careers',
    path: '/career',
    visibleIn: [Pages.HOME, Pages.ABOUT_US, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES],
  },
  {
    localeName: 'jobs',
    path: '/jobs',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES],
  },
  {
    localeName: 'benefits',
    path: '#benefits',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES],
  },
  {
    localeName: 'support',
    path: '#support',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS, Pages.CASE_STUDIES],
  },
  {
    localeName: 'sign_in',
    path: '/signin',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.CASE_STUDIES, Pages.SERVICES],
  },
  // {
  //   localeName: 'create_account',
  //   path: '/createAccount',
  //   visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.CASE_STUDIES, Pages.SERVICES, Pages.ABOUT_US],
  // }
];
import { Pages } from "./pages";

export interface NavLink {
  localeName: string;
  path: string;
  visibleIn: Pages | Pages[];
}

export const navLinks: NavLink[] = [
  {
    localeName: 'home',
    path: '/',
    visibleIn: Pages.HOME,
  },
  {
    localeName: 'our_services',
    path: '#services',
    visibleIn: Pages.HOME,
  },
  {
    localeName: 'career',
    path: '#career',
    visibleIn: Pages.HOME,
  },
  {
    localeName: 'about_us',
    path: '#about',
    visibleIn: Pages.HOME,
  },
  {
    localeName: 'Careers Home',
    path: '/career',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    localeName: 'Job Openings',
    path: '/jobs',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    localeName: 'Benefits',
    path: '#benefits',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    localeName: 'Support',
    path: '#support',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    localeName: 'Sign In',
    path: '/signin',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION],
  }
];
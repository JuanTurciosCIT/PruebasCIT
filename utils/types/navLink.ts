import { Pages } from "./pages";

export interface NavLink {
  name: string;
  path: string;
  visibleIn: Pages | Pages[];
}

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    path: '/',
    visibleIn: Pages.HOME,
  },
  {
    name: 'Our Services',
    path: '#services',
    visibleIn: Pages.HOME,
  },
  {
    name: 'Career',
    path: '#career',
    visibleIn: Pages.HOME,
  },
  {
    name: 'About Us',
    path: '#about',
    visibleIn: Pages.HOME,
  },
  {
    name: 'Careers Home',
    path: '/career',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    name: 'Job Openings',
    path: '/jobs',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    name: 'Benefits',
    path: '#benefits',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    name: 'Support',
    path: '#support',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION, Pages.APPLICATIONS],
  },
  {
    name: 'Sign In',
    path: '/signin',
    visibleIn: [Pages.CAREER, Pages.JOBS, Pages.JOB_DESCRIPTION],
  }
];
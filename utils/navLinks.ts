export interface NavLink {
  name: string;
  path: string;
  visibleIn: string | string[];
}

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    path: '/',
    visibleIn: '/',
  },
  {
    name: 'Our Services',
    path: '#services',
    visibleIn: '/',
  },
  {
    name: 'Carrer',
    path: '#career',
    visibleIn: '/',
  },
  {
    name: 'About Us',
    path: '#about',
    visibleIn: '/',
  },
  {
    name: 'Careers Home',
    path: '/career',
    visibleIn: ['career', 'jobs', 'job-description', 'applications'],
  },
  {
    name: 'Job Openings',
    path: '/jobs',
    visibleIn: ['career', 'jobs', 'job-description', 'applications'],
  },
  {
    name: 'Benefits',
    path: '#benefits',
    visibleIn: ['career', 'jobs', 'job-description', 'applications'],
  },
  {
    name: 'Support',
    path: '#support',
    visibleIn: ['career', 'jobs', 'job-description', 'applications'],
  },
  {
    name: 'Sign In',
    path: '/signin',
    visibleIn: ['career', 'jobs', 'job-description'],
  }
];
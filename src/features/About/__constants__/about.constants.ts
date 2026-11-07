import { resumeProfile } from '@/shared/constants/resume.constants';
export const aboutIntro = {
  eyebrow: 'About me',
  title: 'A Little More About Me.',
  description: resumeProfile.heroDescription,
  image: '/images/fatih-office.png',
  heroImage: '/images/fatih-rim-light.png',
  storyTitle: 'My Professional Background.',
  story: [
    'Frontend Developer with experience across banking, telecommunications, and digital platforms. My work spans frontend architecture, API integration, reusable UI development, testing, deployment, and technical solution analysis.',
    'My experience includes PT. Ako Media Asia (SALT), PT. Bank CIMB Niaga, PT. Telekomunikasi Indonesia (Telkom), PT. Cakra Radha Mustika, and PT. Karsa Lintas Buwana. I have owned features from implementation through UAT and production release in collaboration with cross-functional teams.',
  ],
};
export const workPrinciples = [
  {
    title: 'Frontend Architecture',
    description: 'Design systems, reusable UI libraries, Clean Code, Clean Architecture, and Hexagonal Architecture.',
    icon: 'layers',
  },
  {
    title: 'Implementation & Integration',
    description: 'Web and mobile interfaces, backend API integration, and collaboration with UI/UX and backend teams.',
    icon: 'code',
  },
  {
    title: 'Testing & Delivery',
    description: 'Jest unit tests, SIT, UAT, penetration testing support, and production deployment.',
    icon: 'trend',
  },
];
// Personal interests supplied directly by Fatih.
export const outsideInterests = [
  { title: 'Gaming', icon: 'gamepad' },
  { title: 'Watching Movies', icon: 'movie' },
  { title: 'Coding', icon: 'code' },
] as const;

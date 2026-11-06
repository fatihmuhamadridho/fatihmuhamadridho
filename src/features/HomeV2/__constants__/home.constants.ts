export const homeIntro = {
  name: 'Fatih Muhamad Ridho',
  role: 'Frontend Developer',
  greeting: "Hello, I'm",
  description:
    'I build responsive, scalable, and user-friendly web and mobile applications. I enjoy turning ideas into real products and delivering thoughtful experiences.',
  location: 'Tangerang, Indonesia',
  availability: 'Open to remote work',
  experience: '4+',
  projects: '10+',
  companies: '3+',
};

export const homeAbout = {
  headingLead: 'A Frontend Developer',
  headingSecondLine: 'who loves building',
  headingAccent: 'impactful products.',
  description:
    'I`m a Frontend Developer with 4+ years of experience building enterprise web and mobile applications across banking, telecommunications, and digital platforms. I`m passionate about clean code, reusable components, scalable architecture, and great user experiences.',
  image: '/images/fatih-office.png',
};

export const homeExperience = [
  {
    date: 'Apr 2025 - Present',
    company: 'PT. AKO MEDIA ASIA (SALT)',
    location: 'Jakarta, Indonesia',
    role: 'Frontend Developer - Contract',
    points: [
      'Developed and enhanced enterprise applications across TSurvey, FMC Dashboard, Digihub, and Patricia Dashboard using Angular, Next.js, and TypeScript.',
      'Built key TSurvey features including Target Respondent, Reward Management, Broadcast Management, and AI-generated survey features.',
      'Increased unit-test coverage from 45,000/54,000 to 50,000/54,000 statements.',
      'Contributed to design system, reusable UI library, and technical solutioning.',
      'Delivered Patricia Dashboard Sprint 5.1 and 5.2 with zero defects during UAT.',
    ],
  },
  {
    date: 'Sep 2023 - Mar 2025',
    company: 'PT. BANK CIMB NIAGA',
    location: 'Tangerang Selatan, Indonesia',
    role: 'Frontend Developer - Contract',
    points: [
      'Developed and optimized OCTO Smart mobile and tablet features, including My Portfolio, Sunlife, Sunlife DAO, CR Lending, and CCPL.',
      'Delivered CCPL Phase 1 and 2 across web, mobile, and CMS using React and React Native.',
      'Supported SIT, UAT, penetration testing, and production deployment.',
    ],
  },
  {
    date: 'Aug 2022 - Aug 2023',
    company: 'PT. TELEKOMUNIKASI INDONESIA (TELKOM)',
    location: 'Jakarta, Indonesia',
    role: 'Frontend Developer - Contract',
    points: [
      'Developed and optimized CMS and landing-page applications.',
      'Improved HaiPintar and Indonesian Journey landing pages.',
    ],
  },
];

export const homeFeaturedProjects = [
  {
    title: 'Patricia Dashboard',
    imagePosition: '7.2% 31.7%',
    description: 'An enterprise platform for managing digital signage, campaigns, playlists, and devices.',
    tools: ['Next.js', 'TypeScript', 'React'],
  },
  {
    title: 'TSurvey Platform',
    imagePosition: '51.4% 31.7%',
    description: 'A research platform for survey management, respondents, and analytics.',
    tools: ['Angular', 'TypeScript', 'Highcharts'],
  },
  {
    title: 'CIMB Niaga (Octosmart)',
    imagePosition: '95.7% 31.7%',
    description:
      'Banking application across mobile, tablet, web, and CMS with features like My Portfolio, Sunlife Report, CR Lending, and CCPL.',
    tools: ['React Native', 'React', 'TypeScript'],
  },
];

export const homeSkillGroups = [
  {
    title: 'Frontend',
    tools: [
      { name: 'React.js', icon: IconBrandReact, color: '#18b7dd' },
      { name: 'Next.js', icon: IconBrandNextjs, color: '#111515' },
      { name: 'React Native', icon: IconBrandReact, color: '#e52342' },
      { name: 'TypeScript', icon: IconBrandTypescript, color: '#258bd2' },
      { name: 'JavaScript', icon: IconBrandJavascript, color: '#2877cf' },
      { name: 'HTML5 / CSS3', icon: IconBrandHtml5, color: '#ed5426' },
      { name: 'Tailwind CSS', icon: IconBrandTailwind, color: '#0db0c5' },
    ],
  },
  {
    title: 'Backend & API',
    tools: [
      { name: 'Node.js', icon: IconBrandNodejs, color: '#65af38' },
      { name: 'Express.js', icon: IconCode, color: '#343a40' },
      { name: 'REST API', icon: IconStack2, color: '#32679a' },
    ],
  },
  {
    title: 'Tools & Others',
    tools: [
      { name: 'Git / GitLab', icon: IconBrandGit, color: '#ed5426' },
      { name: 'Docker', icon: IconBrandDocker, color: '#198ed0' },
      { name: 'Redux / Zustand', icon: IconCircles, color: '#8250df' },
      { name: 'ESLint / Prettier', icon: IconSettings, color: '#5030ce' },
      { name: 'Bit Cloud', icon: IconCloud, color: '#1684d9' },
      { name: 'Microsoft Azure AI', icon: IconBrandAzure, color: '#159ae3' },
    ],
  },
  {
    title: 'Testing & Architecture',
    tools: [
      { name: 'Jest', icon: IconTestPipe, color: '#a82e40' },
      { name: 'Clean Architecture', icon: IconHexagon, color: '#4c5566' },
      { name: 'Clean Code', icon: IconHexagonLetterC, color: '#4c5566' },
      { name: 'Hexagonal Architecture', icon: IconTopologyComplex, color: '#4c5566' },
    ],
  },
];

export const homeEducation = [
  {
    school: 'Budi Luhur University',
    logoPosition: '6.1% 37.8%',
    qualification: 'Bachelor of Informatics Engineering',
    period: 'Oct 2019 - Jun 2023',
    gpa: 'GPA 3.86 / 4.00',
    points: [
      'Selected as one of the top class students in the Informatics Engineering program.',
      'Participated in the Merdeka Campus program 2 times.',
      'Completed the Algorithm certificate exam.',
    ],
  },
  {
    school: 'Hacktivate Teknologi Indonesia',
    logoPosition: '55.5% 37.8%',
    qualification: 'Certificate in Front End React Development',
    period: 'Feb 2022 - Jul 2022',
    points: [
      'Learned React.js and React Native.',
      'Developed a marketplace website for Twibbonize hiring partners.',
      'Final project: developed a marketplace website.',
    ],
  },
];
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandAngular,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandTailwind,
  IconBrandNodejs,
  IconCode,
  IconStack2,
  IconBrandGit,
  IconBrandDocker,
  IconCircles,
  IconSettings,
  IconCloud,
  IconBrandAzure,
  IconTestPipe,
  IconHexagon,
  IconHexagonLetterC,
  IconTopologyComplex,
} from '@tabler/icons-react';

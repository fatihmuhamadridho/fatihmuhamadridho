// Source: Fatih Muhamad Ridho-resume.pdf. Keep resume content here until a CMS is introduced.
export const resumeProfile = {
  name: 'Fatih Muhamad Ridho',
  shortName: 'Fatih M Ridho',
  role: 'Frontend Developer',
  focus: 'Web & Mobile Development',
  heroDescription:
    'Frontend Developer with 4+ years of experience building enterprise web and mobile applications using React, Next.js, Angular, React Native, and TypeScript.',
  email: 'fatihmuhamadridho1@gmail.com',
  phone: '+6282110797472',
  website: 'https://fatihmuhamadridho.vercel.app/',
  github: 'https://github.com/fatihmuhamadridho',
  location: 'Tangerang, Banten, Indonesia',
  experience: '4+',
  resumeUrl: '/api/resume',
  summary:
    'Frontend Developer with 4+ years of experience building enterprise web and mobile applications using React, Next.js, Angular, React Native, and TypeScript. Skilled in frontend architecture, API integration, reusable UI development, testing, deployment, and technical solution analysis across banking, telecommunications, and digital platforms. Experienced in owning features from implementation through UAT and production release while collaborating with cross-functional teams.',
  languages: ['Bahasa Indonesia', 'English'],
};

export const resumeExperience = [
  {
    date: 'Apr 2025 - Present',
    company: 'PT. AKO MEDIA ASIA (SALT)',
    location: 'Jakarta Barat, Indonesia',
    role: 'Frontend Developer - Contract',
    points: [
      'Developed and enhanced enterprise applications across TSurvey, FMC Dashboard, Digihub, and Patricia Dashboard using Angular, Next.js, TypeScript, Highcharts, and Clean Architecture.',
      'Built and revamped key TSurvey features including Target Respondent, Reward Management, Broadcast Management, AI-generated survey features, and Response Summary.',
      'Expanded TSurvey unit-test coverage from 45,000/54,000 to 50,000/54,000 statements while supporting SIT, UAT, NFT, penetration testing, and production deployment.',
      'Contributed to frontend architecture through design system development, Next.js project setup, reusable UI library enhancement, and technical solutioning.',
      'Coordinated frontend task breakdown and delivery for Patricia Dashboard, contributing to Sprint 5.1 and 5.2 releases with zero defects found during UAT.',
    ],
  },
  {
    date: 'Sep 2023 - Mar 2025',
    company: 'PT. BANK CIMB NIAGA',
    location: 'Tangerang Selatan, Indonesia',
    role: 'Frontend Developer - Contract',
    points: [
      'Developed and enhanced Octosmart Mobile and Tablet features using React Native, including My Portfolio Search, Sunlife Report, CR Lending, and CCPL.',
      'Delivered CCPL Phase 1 and Phase 2 across web, mobile, and CMS using React, React Native, HTML, and CSS.',
      'Supported SIT, UAT, penetration testing, production deployment, and resolution of production and QA findings across banking applications.',
    ],
  },
  {
    date: 'Aug 2022 - Aug 2023',
    company: 'PT. TELEKOMUNIKASI INDONESIA (TELKOM)',
    location: 'Jakarta, Indonesia',
    role: 'Frontend Developer - Contract',
    points: [
      'Developed and optimized CMS and landing-page applications while collaborating with backend and UI/UX teams.',
      'Improved Haioo.id and Indonesia Journey landing pages and developed Jest unit tests across multiple web applications, including TravelAja Mitra.',
    ],
  },
  {
    date: 'Mar 2022 - Jun 2022',
    company: 'PT. CAKRA RADHA MUSTIKA',
    location: 'Jakarta, Indonesia',
    role: 'Frontend Developer - Contract',
    points: [
      'Developed a Loyalty CRM CMS using Next.js within 3 months, implementing TypeScript, Redux Thunk, SCSS, Tailwind CSS, and Material UI.',
      'Collaborated with UI/UX designers to translate product designs into production interfaces.',
    ],
  },
  {
    date: 'Aug 2021 - Feb 2022',
    company: 'PT. KARSA LINTAS BUWANA',
    location: 'Jakarta, Indonesia',
    role: 'Frontend Developer - Internship',
    points: [
      'Developed a CMS application using Next.js within 6 months, implementing TypeScript, Redux Thunk, and SCSS.',
      'Collaborated with backend developers to integrate frontend features with backend and database requirements.',
    ],
  },
];

export const resumeEducation = [
  {
    school: 'Budi Luhur University',
    location: 'Jakarta, Indonesia',
    qualification: 'Bachelor of Informatics Engineering',
    period: 'Oct 2019 - Jun 2023',
    gpa: 'GPA 3.86 / 4.00',
    logo: '/images/budi-luhur-logo.png',
    source: 'https://www.linkedin.com/in/fatihmuhamadridho/',
    points: [
      'Recognized among the top students in the Informatics Engineering program.',
      'Passed Kampus Merdeka internship program selections twice.',
      'Completed an algorithm certification examination.',
    ],
  },
  {
    school: 'Hacktiv8 Indonesia',
    location: 'Indonesia',
    qualification: 'Front End React Developer',
    period: '2022',
    gpa: '',
    logo: '/images/hacktiv8-logo.png',
    source: 'https://www.linkedin.com/in/fatihmuhamadridho/',
    points: [
      'Studied React.js and React Native fundamentals.',
      'Participated in a bootcamp and internship with a Hacktiv8 hiring partner.',
      'Contributed to a marketplace website for Twibbonize hiring partners during a four-month development assignment.',
    ],
  },
];

export const resumeSkillGroups = [
  {
    title: 'Frontend',
    names: ['React.js', 'Next.js', 'Angular', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  { title: 'Backend & API', names: ['Node.js', 'Express.js', 'REST API'] },
  { title: 'Architecture & Testing', names: ['Clean Code', 'Clean Architecture', 'Hexagonal Architecture', 'Jest'] },
  {
    title: 'Tools',
    names: [
      'Git',
      'GitLab',
      'Docker',
      'Redux',
      'Tailwind CSS',
      'Bit Cloud',
      'ESLint',
      'Prettier',
      'Microsoft Azure AI',
    ],
  },
];

export interface ResumeProject {
  title: string;
  type: string;
  category: string;
  company: string;
  year: string;
  description: string;
  tools: string[];
  contributions: string[];
  imagePosition?: string;
  image?: string;
  screenshots?: { src: string; title: string }[];
}

// Periods represent the employment periods in the resume; project-specific dates are not supplied.
export const resumeProjects: ResumeProject[] = [
  {
    title: 'Patricia Dashboard',
    type: 'Enterprise',
    category: 'Dashboard',
    company: resumeExperience[0].company,
    year: resumeExperience[0].date,
    image: '/images/projects/patricia-1.jpg',
    screenshots: [
      { src: '/images/projects/patricia-1.jpg', title: 'Patricia campaign creation' },
      { src: '/images/projects/patricia-2.jpg', title: 'Patricia device details' },
      { src: '/images/projects/patricia-3.jpg', title: 'Patricia video and gallery details' },
    ],
    tools: [],
    description: 'Enterprise dashboard at SALT, with frontend task breakdown and delivery for Sprint 5.1 and 5.2.',
    contributions: [resumeExperience[0].points[4]],
  },
  {
    title: 'TSurvey Platform',
    type: 'Enterprise',
    category: 'Web App',
    company: resumeExperience[0].company,
    year: resumeExperience[0].date,
    image: '/images/projects/tsurvey-1.jpg',
    screenshots: Array.from({ length: 4 }, (_, index) => ({
      src: `/images/projects/tsurvey-${index + 1}.jpg`,
      title: `TSurvey interface ${index + 1}`,
    })),
    tools: [],
    description:
      'Survey features covering Target Respondent, Reward Management, Broadcast Management, AI-generated surveys, and Response Summary.',
    contributions: [resumeExperience[0].points[1], resumeExperience[0].points[2]],
  },
  {
    title: 'CIMB Niaga (Octosmart)',
    type: 'Banking',
    category: 'Mobile App',
    company: resumeExperience[1].company,
    year: resumeExperience[1].date,
    image: '/images/projects/octosmart-1.jpg',
    screenshots: [{ src: '/images/projects/octosmart-1.jpg', title: 'Octosmart banking application' }],
    tools: ['React Native'],
    description:
      'Mobile and tablet banking features including My Portfolio Search, Sunlife Report, CR Lending, and CCPL.',
    contributions: [resumeExperience[1].points[0], resumeExperience[1].points[2]],
  },
  {
    title: 'Haioo.id',
    type: 'Landing Page',
    category: 'Web App',
    company: resumeExperience[2].company,
    year: resumeExperience[2].date,
    image: '/images/projects/haioo-1.jpg',
    screenshots: Array.from({ length: 3 }, (_, index) => ({
      src: `/images/projects/haioo-${index + 1}.jpg`,
      title: `Haioo travel application ${index + 1}`,
    })),
    tools: [],
    description: 'Improved the Haioo.id landing page at Telkom.',
    contributions: ['Improved Haioo.id landing pages while collaborating with backend and UI/UX teams.'],
  },
  {
    title: 'FMC Dashboard',
    type: 'Enterprise',
    category: 'Dashboard',
    company: resumeExperience[0].company,
    year: resumeExperience[0].date,
    tools: [],
    description: 'Developed and enhanced enterprise applications at SALT, including FMC Dashboard.',
    contributions: [resumeExperience[0].points[0]],
  },
  {
    title: 'Digihub',
    type: 'Enterprise',
    category: 'Web App',
    company: resumeExperience[0].company,
    year: resumeExperience[0].date,
    tools: [],
    description: 'Developed and enhanced enterprise applications at SALT, including Digihub.',
    contributions: [resumeExperience[0].points[0]],
  },
  {
    title: 'CCPL',
    type: 'Banking',
    category: 'Web App',
    company: resumeExperience[1].company,
    year: resumeExperience[1].date,
    tools: ['React', 'React Native', 'HTML', 'CSS'],
    description: 'CCPL Phase 1 and Phase 2 across web, mobile, and CMS.',
    contributions: [resumeExperience[1].points[1], resumeExperience[1].points[2]],
  },
  {
    title: 'Indonesia Journey',
    type: 'Landing Page',
    category: 'Web App',
    company: resumeExperience[2].company,
    year: resumeExperience[2].date,
    tools: [],
    description: 'Improved Indonesia Journey landing pages at Telkom.',
    contributions: ['Improved Indonesia Journey landing pages while collaborating with backend and UI/UX teams.'],
  },
  {
    title: 'TravelAja Mitra',
    type: 'Web Application',
    category: 'Web App',
    company: resumeExperience[2].company,
    year: resumeExperience[2].date,
    tools: ['Jest'],
    description:
      'Developed Jest unit tests for TravelAja Mitra as part of testing work across multiple web applications.',
    contributions: ['Developed Jest unit tests across multiple web applications, including TravelAja Mitra.'],
  },
  {
    title: 'Loyalty CRM CMS',
    image: '/images/projects/loyalty-crm-1.jpg',
    screenshots: Array.from({ length: 3 }, (_, index) => ({
      src: `/images/projects/loyalty-crm-${index + 1}.jpg`,
      title: `Loyalty CRM management interface ${index + 1}`,
    })),
    type: 'CMS',
    category: 'CMS',
    company: resumeExperience[3].company,
    year: resumeExperience[3].date,
    tools: ['Next.js', 'TypeScript', 'Redux Thunk', 'SCSS', 'Tailwind CSS', 'Material UI'],
    description: 'Developed a Loyalty CRM CMS within 3 months, translating product designs into production interfaces.',
    contributions: resumeExperience[3].points,
  },
  {
    title: 'CMS Application',
    type: 'CMS',
    category: 'CMS',
    company: resumeExperience[4].company,
    year: resumeExperience[4].date,
    tools: ['Next.js', 'TypeScript', 'Redux Thunk', 'SCSS'],
    description: 'Developed a CMS application within 6 months during a frontend development internship.',
    contributions: resumeExperience[4].points,
  },
];

export const resumeContact = {
  eyebrow: "Let's connect",
  title: 'Get in touch.',
  description:
    'Contact me to discuss frontend development, enterprise web and mobile applications, and technical collaboration.',
  href: `mailto:${resumeProfile.email}`,
};

import {
  IconCode,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandAngular,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandGitlab,
  IconBrandDocker,
  IconBrandRedux,
  IconBrandTailwind,
  IconTestPipe,
  IconCloud,
  IconSettings,
  IconHexagon,
  IconBrandAzure,
} from '@tabler/icons-react';
import {
  resumeProfile,
  resumeExperience,
  resumeEducation,
  resumeProjects,
  resumeSkillGroups,
} from '@/shared/constants/resume.constants';
export const homeIntro = {
  ...resumeProfile,
  greeting: "Hello, I'm",
  description: resumeProfile.summary,
  projects: String(resumeProjects.length),
  companies: String(resumeExperience.length),
};
export const homeAbout = {
  headingLead: 'A Frontend Developer',
  headingSecondLine: 'building enterprise ',
  headingAccent: 'web & mobile applications.',
  description: resumeProfile.summary,
  image: '/images/fatih-office.png',
};
export const homeExperience = resumeExperience;
export const homeEducation = resumeEducation;
export const homeFeaturedProjects = resumeProjects.slice(0, 3);
const skillVisuals: Record<string, { icon: typeof IconCode; color: string }> = {
  'React.js': { icon: IconBrandReact, color: '#18b7dd' },
  'React Native': { icon: IconBrandReact, color: '#18b7dd' },
  'Next.js': { icon: IconBrandNextjs, color: '#111515' },
  Angular: { icon: IconBrandAngular, color: '#d62047' },
  TypeScript: { icon: IconBrandTypescript, color: '#258bd2' },
  JavaScript: { icon: IconBrandJavascript, color: '#cba900' },
  HTML: { icon: IconBrandHtml5, color: '#ed5426' },
  CSS: { icon: IconBrandCss3, color: '#258bd2' },
  'Node.js': { icon: IconBrandNodejs, color: '#65af38' },
  Git: { icon: IconBrandGit, color: '#ed5426' },
  GitLab: { icon: IconBrandGitlab, color: '#ed5426' },
  Docker: { icon: IconBrandDocker, color: '#198ed0' },
  Redux: { icon: IconBrandRedux, color: '#8250df' },
  'Tailwind CSS': { icon: IconBrandTailwind, color: '#0db0c5' },
  Jest: { icon: IconTestPipe, color: '#a82e40' },
  'Bit Cloud': { icon: IconCloud, color: '#1684d9' },
  ESLint: { icon: IconSettings, color: '#5030ce' },
  Prettier: { icon: IconSettings, color: '#5030ce' },
  'Microsoft Azure AI': { icon: IconBrandAzure, color: '#159ae3' },
  'Clean Architecture': { icon: IconHexagon, color: '#4c5566' },
  'Hexagonal Architecture': { icon: IconHexagon, color: '#4c5566' },
};
export const homeSkillGroups = resumeSkillGroups.map((group) => ({
  title: group.title,
  tools: group.names.map((name) => ({ name, ...(skillVisuals[name] || { icon: IconCode, color: '#4c5566' }) })),
}));

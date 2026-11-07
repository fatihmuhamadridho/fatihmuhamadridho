import { resumeSkillGroups, resumeProfile } from '@/shared/constants/resume.constants';
// Decorative markers preserve the original card design; they are not proficiency scores.
export const skillIndicatorDots = 5;
export const skillGroups = resumeSkillGroups.map((group, index) => ({
  title: group.title,
  featured: index === 0,
  skills: group.names.map((name) => ({ name })),
}));
export const skillPageIntro = {
  description:
    'Technical skills across frontend development, backend and API integration, architecture, testing, and development tools.',
  totalSkills: String(resumeSkillGroups.reduce((total, group) => total + group.names.length, 0)),
  coreAreas: String(resumeSkillGroups.length),
  languages: resumeProfile.languages.join(', '),
};

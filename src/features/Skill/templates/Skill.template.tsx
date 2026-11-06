import { IconCloud, IconCode, IconDeviceDesktop, IconServer, IconShieldCheck, IconTools } from '@tabler/icons-react';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandFramerMotion,
  IconBrandRedux,
  IconBrandNodejs,
  IconStack2,
  IconBrandGit,
  IconBrandGithub,
  IconBrandDocker,
  IconApi,
  IconBrandFigma,
  IconBrandVscode,
  IconTestPipe,
  IconMasksTheater,
  IconBrandCypress,
  IconBrandVercel,
  IconBrandSupabase,
  IconBrandFirebase,
  IconBrandGitlab,
  IconDots,
  IconPaw,
  IconPackages,
  IconInfinity,
} from '@tabler/icons-react';
import { Box, Text, Title } from '@mantine/core';
import ContactBanner from '@/shared/components/ContactBanner/ContactBanner';
import PageMeta from '@/shared/components/PageMeta/PageMeta';
import SiteFooter from '@/shared/components/SiteFooter/SiteFooter';
import { Header } from '@/shared/components';
import styles from './Skill.template.module.scss';
import { skillGroups, skillPageIntro } from '../__constants__/skills.constants';

const groupIcons = [IconDeviceDesktop, IconServer, IconTools, IconShieldCheck, IconCloud];
const skillIcons = {
  React: [IconBrandReact, '#00bce5'],
  'Next.js': [IconBrandNextjs, '#111515'],
  TypeScript: [IconBrandTypescript, '#1675d5'],
  'Tailwind CSS': [IconBrandTailwind, '#08b4ce'],
  'Framer Motion': [IconBrandFramerMotion, '#ec14ba'],
  Zustand: [IconPaw, '#171c20'],
  Redux: [IconBrandRedux, '#7335ed'],
  'Node.js': [IconBrandNodejs, '#57a52b'],
  Express: [IconCode, '#252a30'],
  'REST API': [IconStack2, '#1754a0'],
  Git: [IconBrandGit, '#f35b28'],
  GitHub: [IconBrandGithub, '#15191b'],
  Docker: [IconBrandDocker, '#087fd0'],
  Postman: [IconApi, '#fa6b36'],
  Figma: [IconBrandFigma, '#a34df1'],
  'VS Code': [IconBrandVscode, '#078bd4'],
  Jest: [IconTestPipe, '#ab2539'],
  'React Testing Library': [IconBrandReact, '#ed2854'],
  Playwright: [IconMasksTheater, '#209b47'],
  Cypress: [IconBrandCypress, '#242f31'],
  Vercel: [IconBrandVercel, '#111515'],
  Supabase: [IconBrandSupabase, '#00c891'],
  Firebase: [IconBrandFirebase, '#f7b41c'],
  GitLab: [IconBrandGitlab, '#f65a28'],
  Others: [IconDots, '#161b20'],
} as const;

export default function SkillTemplate() {
  return (
    <Box className={styles.site} id="top">
      <PageMeta title="Skills" description={skillPageIntro.description} />
      <Box component="section" className={`${styles.darkField} ${styles.pageHero}`}>
        <Box className={styles.frame}>
          <Header />
          <Box className={styles.pageHeroInner}>
            <Box className={styles.pageHeroCopy}>
              <Text className={styles.eyebrow}>Skills</Text>
              <Title order={1} className={styles.pageTitle}>
                All{' '}
                <Text component="span" className={styles.limeText}>
                  Skills
                </Text>
              </Title>
              <Text className={styles.pageSubtitle}>{skillPageIntro.description}</Text>
            </Box>
            <Box className={styles.heroLaptop} role="img" aria-label="Laptop displaying code" />
          </Box>
        </Box>
      </Box>

      <Box component="main" className={`${styles.frame} ${styles.lightSection} ${styles.skillLayout}`}>
        <Box component="aside" className={styles.skillAside}>
          <Box className={styles.skillAsideIcon}>
            <IconCode size={26} stroke={1.8} />
          </Box>
          <Title order={2}>My Skillset</Title>
          <Text>
            A practical stack I use to build modern web and mobile applications, from UI implementation to integration
            and delivery.
          </Text>
          <Box className={styles.skillStats}>
            <Box className={styles.skillStat}>
              <IconStack2 size={30} />
              <Box>
                <Text component="strong">{skillPageIntro.coreAreas}</Text>
                <Text component="span">Core Areas</Text>
              </Box>
            </Box>
            <Box className={styles.skillStat}>
              <IconPackages size={30} />
              <Box>
                <Text component="strong">{skillPageIntro.totalSkills}</Text>
                <Text component="span">Technologies &amp; Tools</Text>
              </Box>
            </Box>
            <Box className={styles.skillStat}>
              <IconInfinity size={30} />
              <Box>
                <Text component="strong">{skillPageIntro.learning}</Text>
                <Text component="span">Learning &amp; Improving</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.skillGroups}>
          {skillGroups.map((group, index) => {
            const GroupIcon = groupIcons[index] || IconCode;
            return (
              <Box
                component="section"
                className={`${styles.skillGroup} ${index === 0 ? styles.coreGroup : ''}`}
                key={group.title}
              >
                <Box className={styles.skillGroupHeader}>
                  <GroupIcon size={25} stroke={1.8} />
                  <Title order={2}>{group.title}</Title>
                  {group.featured && <Text component="span">Core Skill</Text>}
                </Box>
                <Box className={styles.skillItems}>
                  {group.skills.map((skill) => {
                    const [SkillIcon, color] = skillIcons[skill.name as keyof typeof skillIcons] || [
                      IconCode,
                      '#26303b',
                    ];
                    return (
                      <Box component="article" className={styles.skillItem} key={skill.name}>
                        <Box className={styles.skillIcon} style={{ color }}>
                          <SkillIcon size={32} stroke={1.8} aria-hidden="true" />
                        </Box>
                        <Box className={styles.skillItemCopy}>
                          <Text component="strong">{skill.name}</Text>
                          <Text component="span" className={styles.skillDots} aria-label={`${skill.level} out of 5`}>
                            {Array.from({ length: 5 }, (_, dot) => (
                              <Box
                                component="i"
                                key={dot}
                                style={{ background: dot < skill.level ? '#99cf08' : '#dfe3e7' }}
                              />
                            ))}
                          </Text>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className={styles.frame}>
        <ContactBanner
          title={
            <>
              Have a Project in Mind?{' '}
              <Text component="span" className={styles.limeText}>
                Let’s Talk.
              </Text>
            </>
          }
        />
      </Box>
      <SiteFooter />
    </Box>
  );
}

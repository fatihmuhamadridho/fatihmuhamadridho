import {
  IconArrowDown,
  IconArrowRight,
  IconBriefcase,
  IconStack2,
  IconMapPin,
  IconUsers,
  IconBrandGithub,
  IconMail,
  IconCalendar,
  IconAward,
} from '@tabler/icons-react';
import { resumeProfile } from '@/shared/constants/resume.constants';
import { projectHref } from '@/features/Project/__constants__/projectDetail.constants';
import { Anchor, Box, Image, Text, Title } from '@mantine/core';
import ContactBanner from '@/shared/components/ContactBanner/ContactBanner';
import PageMeta from '@/shared/components/PageMeta/PageMeta';
import SiteFooter from '@/shared/components/SiteFooter/SiteFooter';
import { Header } from '@/shared/components';
import styles from './HomeV2.template.module.scss';
import {
  homeAbout,
  homeEducation,
  homeExperience,
  homeFeaturedProjects,
  homeIntro,
  homeSkillGroups,
} from '../__constants__/home.constants';

export default function HomeV2Template() {
  return (
    <Box className={styles.site} id="top">
      <PageMeta title="Home" description={homeIntro.description} />
      <Box component="section" className={`${styles.darkField} ${styles.homeHero}`}>
        <Box className={styles.frame}>
          <Header />
          <Box className={styles.homeHeroInner}>
            <Box className={styles.heroCopy}>
              <Text className={styles.heroHello}>{homeIntro.greeting}</Text>
              <Title order={1} className={styles.heroTitle}>
                {homeIntro.name}
              </Title>
              <Text className={styles.heroRole}>{homeIntro.role}</Text>
              <Text className={styles.heroText}>{resumeProfile.heroDescription}</Text>
              <Box className={styles.heroActions}>
                <Anchor className={styles.buttonLight} href="#featured-projects">
                  View my work <IconArrowRight size={17} />
                </Anchor>
                <Anchor className={styles.textLink} href={resumeProfile.resumeUrl} download>
                  Download CV <IconArrowDown size={14} />
                </Anchor>
              </Box>
              <Box className={styles.heroSocials} aria-label="Social links">
                <Anchor href={resumeProfile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                  <IconBrandGithub size={20} />
                </Anchor>

                <Anchor href={`mailto:${resumeProfile.email}`} aria-label="Email">
                  <IconMail size={20} />
                </Anchor>
              </Box>
            </Box>
            <Box className={styles.portraitStage} aria-hidden="true">
              <Image src="/images/fatih-rim-light.png" alt="" />
            </Box>
            <Text className={styles.heroMantra} aria-hidden="true">
              Build
              <br />
              Learn
              <br />
              Improve
              <br />
              Repeat
            </Text>
            <Text className={styles.heroNote}>
              Turning
              <br />
              ideas into
              <br />
              real products
            </Text>
            <Box className={styles.heroInfo}>
              <Box className={styles.heroInfoRow}>
                <IconMail size={17} stroke={1.8} aria-hidden="true" />
                <Text component="span">
                  <Text component="strong">{homeIntro.experience}</Text>
                  <Text component="span" className={styles.heroInfoCaption}>
                    Years Experience
                  </Text>
                </Text>
              </Box>
              <Box className={styles.heroInfoRow}>
                <IconMapPin size={16} />
                <Text component="span">
                  {homeIntro.location}
                  <Text component="span" className={styles.heroInfoCaption}>
                    {resumeProfile.role}
                  </Text>
                </Text>
              </Box>
              <Box className={styles.heroInfoRow}>
                <Box component="span" className={styles.availabilityDot} />
                <Text component="span">{resumeProfile.focus}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="main" className={styles.lightSection}>
        <Box className={`${styles.frame} ${styles.homeContent}`}>
          <Box className={styles.homeLeft}>
            <Box component="section" className={styles.aboutPreview} id="about-preview">
              <Box>
                <Text className={styles.eyebrow}>About me</Text>
                <Title order={2} className={styles.sectionHeading}>
                  {homeAbout.headingLead}
                  <br />
                  {homeAbout.headingSecondLine}
                  <Text component="span">{homeAbout.headingAccent}</Text>
                </Title>
                <Text className={styles.sectionText}>{homeAbout.description}</Text>
                <Anchor className={styles.inlineLink} href="/about">
                  More about me <IconArrowRight size={15} />
                </Anchor>
              </Box>
              <Image src={homeAbout.image} alt="Fatih in a modern office" />
              <Box className={styles.metricStack} aria-label="Career highlights">
                <Box className={styles.metric}>
                  <Box component="span" className={styles.metricIcon}>
                    <IconBriefcase size={24} stroke={1.8} aria-hidden="true" />
                  </Box>
                  <Text component="span">
                    <Text component="strong">{homeIntro.experience}</Text>
                    <Text component="span">Years Experience</Text>
                  </Text>
                </Box>
                <Box className={styles.metric}>
                  <Box component="span" className={styles.metricIcon}>
                    <IconStack2 size={24} stroke={1.8} aria-hidden="true" />
                  </Box>
                  <Text component="span">
                    <Text component="strong">{homeIntro.projects}</Text>
                    <Text component="span">Projects in Resume</Text>
                  </Text>
                </Box>
                <Box className={styles.metric}>
                  <Box component="span" className={styles.metricIcon}>
                    <IconUsers size={24} stroke={1.8} aria-hidden="true" />
                  </Box>
                  <Text component="span">
                    <Text component="strong">{homeIntro.companies}</Text>
                    <Text component="span">Companies Worked</Text>
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              component="section"
              className={`${styles.homeRightSection} ${styles.experienceSection}`}
              id="experience"
            >
              <Box className={styles.homeSectionHead}>
                <Box>
                  <Text className={styles.eyebrow}>Experience</Text>
                  <Title order={2} className={styles.sectionHeading}>
                    My professional journey
                  </Title>
                </Box>
              </Box>
              <Box className={styles.timeline}>
                {homeExperience.map((item) => (
                  <Box component="article" className={styles.timelineItem} key={item.company}>
                    <Text component="span" className={styles.timelineDate}>
                      {item.date}
                    </Text>
                    <Box className={styles.timelineBody}>
                      <Box className={styles.timelineHeading}>
                        <Title order={3}>{item.company}</Title>
                        <Text className={styles.timelineLocation}>
                          <Box component="span" className={styles.locationPin} aria-hidden="true" />
                          {item.location}
                        </Text>
                      </Box>
                      <Text className={styles.timelineRole}>{item.role}</Text>
                      <Box component="ul">
                        {item.points.map((point) => (
                          <Box component="li" key={point}>
                            {point}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box className={styles.homeRight}>
            <Box component="section" className={styles.homeRightSection} id="featured-projects">
              <Box className={styles.homeSectionHead}>
                <Box>
                  <Text className={styles.eyebrow}>Featured projects</Text>
                  <Title order={2} className={styles.sectionHeading}>
                    Some of the projects I`ve worked on
                  </Title>
                </Box>
                <Anchor className={styles.inlineLink} href="/projects">
                  View all projects <IconArrowRight size={15} />
                </Anchor>
              </Box>
              <Box className={styles.homeProjectGrid}>
                {homeFeaturedProjects.map((project) => (
                  <Box component="article" className={styles.miniProject} key={project.title}>
                    <Box
                      className={styles.miniProjectImage}
                      role="img"
                      aria-label={`${project.title} preview`}
                      style={{
                        backgroundImage: `url('${project.image}')`,
                        backgroundPosition: 'top center',
                        backgroundSize: 'cover',
                      }}
                    />
                    <Box className={styles.miniProjectBody}>
                      <Title order={3}>{project.title}</Title>
                      <Box className={styles.tagList}>
                        {project.tools.map((tool) => (
                          <Text component="span" className={styles.tag} key={tool}>
                            {tool}
                          </Text>
                        ))}
                      </Box>
                      <Text>{project.description}</Text>
                      <Anchor
                        href={projectHref(project.title)}
                        className={styles.projectArrow}
                        aria-label={`View ${project.title}`}
                      >
                        <IconArrowRight size={17} stroke={1.8} />
                      </Anchor>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box component="section" className={`${styles.homeRightSection} ${styles.skillsSection}`} id="skills">
              <Box className={styles.homeSectionHead}>
                <Box>
                  <Text className={styles.eyebrow}>Skills</Text>
                  <Title order={2} className={styles.sectionHeading}>
                    Technologies I work with
                  </Title>
                </Box>
                <Anchor className={styles.inlineLink} href="/skills">
                  View all skills <IconArrowRight size={15} />
                </Anchor>
              </Box>
              <Box className={styles.skillPreviewGrid}>
                {homeSkillGroups.map((group) => (
                  <Box className={styles.skillPreview} key={group.title}>
                    <Title order={3}>{group.title}</Title>
                    <Box component="ul">
                      {group.tools.map((tool) => (
                        <Box component="li" key={tool.name}>
                          <Box component="span" className={styles.skillToolIcon} style={{ color: tool.color }}>
                            <tool.icon size={23} stroke={1.8} aria-hidden="true" />
                          </Box>
                          <Text component="span">{tool.name}</Text>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box component="section" className={styles.homeRightSection}>
              <Box className={styles.homeSectionHead}>
                <Box>
                  <Text className={styles.eyebrow} id="education">
                    Education
                  </Text>
                  <Title order={2} className={styles.sectionHeading}>
                    My education background
                  </Title>
                </Box>
              </Box>
              <Box className={styles.educationGrid}>
                {homeEducation.map((item) => (
                  <Box component="article" className={styles.educationCard} key={item.school}>
                    <Box className={styles.educationHeader}>
                      <Image
                        className={styles.educationLogo}
                        src={item.logo}
                        alt={`${item.school} logo`}
                        fit="contain"
                      />
                      <Box>
                        <Title order={3}>{item.school}</Title>
                        <Text className={styles.educationQualification}>{item.qualification}</Text>
                        <Text className={styles.educationMeta}>
                          <IconCalendar size={14} aria-hidden="true" />
                          {item.period}
                        </Text>
                        {item.gpa && (
                          <Text className={styles.educationMeta}>
                            <IconAward size={14} aria-hidden="true" />
                            {item.gpa}
                          </Text>
                        )}
                      </Box>
                    </Box>
                    <Box component="ul" className={styles.educationPoints}>
                      {item.points.map((point) => (
                        <Box component="li" key={point}>
                          {point}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.frame}>
          <ContactBanner />
        </Box>
      </Box>
      <SiteFooter />
    </Box>
  );
}

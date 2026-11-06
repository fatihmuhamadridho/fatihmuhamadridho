import { Box, Image, Text, Title } from '@mantine/core';
import {
  IconStack2,
  IconCode,
  IconTrendingUp,
  IconDeviceGamepad2,
  IconBook,
  IconPlaneTilt,
  IconHeart,
} from '@tabler/icons-react';
import ContactBanner from '@/shared/components/ContactBanner/ContactBanner';
import PageMeta from '@/shared/components/PageMeta/PageMeta';
import SiteFooter from '@/shared/components/SiteFooter/SiteFooter';
import { Header } from '@/shared/components';
import styles from './About.template.module.scss';
import { aboutIntro, outsideInterests, workPrinciples } from '../__constants__/about.constants';

const principleSymbols = { layers: IconStack2, code: IconCode, trend: IconTrendingUp };
const interestSymbols = { gamepad: IconDeviceGamepad2, book: IconBook, plane: IconPlaneTilt, heart: IconHeart };

export default function AboutTemplate() {
  return (
    <Box className={styles.site} id="top">
      <PageMeta title="About" description={aboutIntro.description} />
      <Box component="section" className={`${styles.darkField} ${styles.aboutHero}`}>
        <Box className={styles.frame}>
          <Header />
          <Box className={styles.aboutHeroInner}>
            <Box className={styles.aboutHeroCopy}>
              <Text className={styles.eyebrow}>{aboutIntro.eyebrow}</Text>
              <Title order={1} className={styles.pageTitle}>
                A Little More{' '}
                <Text component="span" className={styles.limeText}>
                  About Me.
                </Text>
              </Title>
              <Text className={styles.pageSubtitle}>{aboutIntro.description}</Text>
            </Box>
            <Image className={styles.aboutHeroPortrait} src={aboutIntro.heroImage} alt="Fatih in a black outfit" />
            <Text className={styles.aboutAnnotation}>
              Developer
              <Box component="br" />
              Product Builder
              <Box component="br" />
              Problem Solver
            </Text>
          </Box>
        </Box>
      </Box>

      <Box component="main" className={`${styles.frame} ${styles.lightSection}`}>
        <Box component="section" className={styles.storySection}>
          <Image className={styles.storyImage} src={aboutIntro.image} alt="Fatih at work in a modern office" />
          <Box className={styles.storyCopy}>
            <Text className={styles.eyebrow}>My story</Text>
            <Title order={2} className={styles.sectionHeading}>
              How It All <Text component="span">Started.</Text>
            </Title>
            {aboutIntro.story.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </Box>
        </Box>

        <Box component="section" className={styles.principleSection}>
          <Box>
            <Text className={styles.eyebrow}>My work philosophy</Text>
            <Title order={2} className={styles.sectionHeading}>
              The Principles <Box component="br" />I <Text component="span">Work With.</Text>
            </Title>
          </Box>
          <Box className={styles.principleGrid}>
            {workPrinciples.map((principle) => {
              const Icon = principleSymbols[principle.icon as keyof typeof principleSymbols];
              return (
                <Box component="article" className={styles.principleCard} key={principle.title}>
                  <Text component="span" className={styles.principleIcon} aria-hidden="true">
                    <Icon size={32} stroke={1.8} />
                  </Text>
                  <Title order={3}>{principle.title}</Title>
                  <Text>{principle.description}</Text>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box component="section" className={styles.interestSection}>
          <Box>
            <Text className={styles.eyebrow}>Beyond the code</Text>
            <Title order={2} className={styles.sectionHeading}>
              Things I Enjoy <Text component="span">Outside of Work.</Text>
            </Title>
          </Box>
          <Box className={styles.interestList}>
            {outsideInterests.map((interest) => {
              const Icon = interestSymbols[interest.icon as keyof typeof interestSymbols];
              return (
                <Text component="span" className={styles.interest} key={interest.title}>
                  <Text component="span" aria-hidden="true">
                    <Icon size={30} stroke={1.8} />
                  </Text>
                  {interest.title}
                </Text>
              );
            })}
          </Box>
        </Box>
        <ContactBanner
          title={
            <>
              Have Something in Mind?{' '}
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

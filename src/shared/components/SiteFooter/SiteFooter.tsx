import { resumeProfile, resumeContact } from '@/shared/constants/resume.constants';
import { Anchor, Box, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { IconArrowUp, IconMail, IconPhone, IconBrandGithub } from '@tabler/icons-react';
import styles from './SiteFooter.module.scss';

export default function SiteFooter() {
  return (
    <Box component="footer" className={`${styles.frame} ${styles.footer}`}>
      <Text component="span">
        © {new Date().getFullYear()} {resumeProfile.name}
      </Text>
      <Group className={styles.footerSocials}>
        <Anchor href={`tel:${resumeProfile.phone}`} aria-label={`Phone ${resumeProfile.phone}`}>
          <IconPhone size={17} />
        </Anchor>
        <Anchor href={resumeProfile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
          <IconBrandGithub size={17} />
        </Anchor>
        <Anchor href={resumeContact.href} aria-label="Email Fatih">
          <IconMail size={17} />
        </Anchor>
      </Group>
      <Anchor component={Link} className={styles.backToTop} href="#top">
        Back to top <IconArrowUp size={15} stroke={1.8} aria-hidden="true" />
      </Anchor>
    </Box>
  );
}

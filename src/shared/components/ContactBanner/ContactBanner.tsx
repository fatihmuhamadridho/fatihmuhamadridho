import { resumeProfile, resumeContact } from '@/shared/constants/resume.constants';
import type { ReactNode } from 'react';
import { Anchor, Box, Group, Text, Title } from '@mantine/core';
import { IconArrowUpRight, IconDownload } from '@tabler/icons-react';
import styles from './ContactBanner.module.scss';

interface ContactBannerProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
}

export default function ContactBanner({
  eyebrow = resumeContact.eyebrow,
  title = resumeContact.title,
  description = resumeContact.description,
}: ContactBannerProps) {
  return (
    <Box component="section" className={styles.contactBanner} id="contact">
      <Box className={styles.contactCopy}>
        <Text className={styles.eyebrow}>{eyebrow}</Text>
        <Title order={2}>{title}</Title>
        <Text>{description}</Text>
      </Box>
      <Group className={styles.contactActions}>
        <Anchor className={styles.buttonLight} href={resumeContact.href}>
          Get in touch <IconArrowUpRight size={18} />
        </Anchor>
        <Anchor className={styles.buttonOutline} href={resumeProfile.resumeUrl} download>
          <IconDownload size={16} /> Download CV
        </Anchor>
      </Group>
      <Box component="span" className={styles.contactGlow} aria-hidden="true" />
    </Box>
  );
}

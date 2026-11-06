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
  eyebrow = "Let's connect",
  title = 'Have a project in mind? Let`s talk.',
  description = 'I`m open to new opportunities, freelance projects, or a casual chat about tech and product ideas.',
}: ContactBannerProps) {
  return (
    <Box component="section" className={styles.contactBanner} id="contact">
      <Box className={styles.contactCopy}>
        <Text className={styles.eyebrow}>{eyebrow}</Text>
        <Title order={2}>{title}</Title>
        <Text>{description}</Text>
      </Box>
      <Group className={styles.contactActions}>
        <Anchor
          className={styles.buttonLight}
          href="mailto:fatihmuhamadridho1@gmail.com?subject=Let%27s%20work%20together"
        >
          Get in touch <IconArrowUpRight size={18} />
        </Anchor>
        <Anchor className={styles.buttonOutline} href="mailto:fatihmuhamadridho1@gmail.com?subject=CV%20request">
          <IconDownload size={16} /> Request CV
        </Anchor>
      </Group>
      <Box component="span" className={styles.contactGlow} aria-hidden="true" />
    </Box>
  );
}

import { Anchor, Box, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { IconArrowUp, IconMail } from '@tabler/icons-react';
import styles from './SiteFooter.module.scss';

export default function SiteFooter() {
  return (
    <Box component="footer" className={`${styles.frame} ${styles.footer}`}>
      <Text component="span">© {new Date().getFullYear()} Fatih Muhamad Ridho</Text>
      <Group className={styles.footerSocials}>
        <Anchor href="mailto:fatihmuhamadridho1@gmail.com" aria-label="Email Fatih">
          <IconMail size={17} />
        </Anchor>
      </Group>
      <Anchor component={Link} className={styles.backToTop} href="#top">
        Back to top <IconArrowUp size={15} stroke={1.8} aria-hidden="true" />
      </Anchor>
    </Box>
  );
}

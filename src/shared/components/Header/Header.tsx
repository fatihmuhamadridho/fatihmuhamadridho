import { resumeProfile } from '@/shared/constants/resume.constants';
import { Anchor, Box, Burger } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Header.module.scss';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Box component="header" className={styles.header}>
      <Anchor component={Link} className={styles.wordmark} href="/" aria-label={`${resumeProfile.name}, home`}>
        <Box component="span" className={styles.wordmarkMark} />
        <Box component="span">{resumeProfile.shortName}</Box>
      </Anchor>
      <Box component="nav" aria-label="Main navigation" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        {navigation.map((item) => {
          const active =
            item.href === router.pathname ||
            (item.href === '/#experience' && router.pathname === '/' && router.asPath.includes('#experience'));
          return (
            <Anchor
              component={Link}
              key={item.label}
              href={item.href}
              prefetch={true}
              className={`${styles.navLink} ${active ? styles.navActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Anchor>
          );
        })}
      </Box>
      <Anchor className={styles.headerAction} href={resumeProfile.resumeUrl} download>
        <IconDownload size={15} stroke={1.8} />
        <Box component="span">Download CV</Box>
      </Anchor>
      <Burger
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        className={styles.menuToggle}
        color="white"
        onClick={() => setMenuOpen((open) => !open)}
        opened={menuOpen}
        size={22}
      />
    </Box>
  );
}

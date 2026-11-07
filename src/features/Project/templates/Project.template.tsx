import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Anchor, Box, Image, Text, TextInput, Title, UnstyledButton } from '@mantine/core';
import {
  IconArrowUpRight,
  IconArrowRight,
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import ContactBanner from '@/shared/components/ContactBanner/ContactBanner';
import PageMeta from '@/shared/components/PageMeta/PageMeta';
import SiteFooter from '@/shared/components/SiteFooter/SiteFooter';
import { Header } from '@/shared/components';
import styles from './Project.template.module.scss';
import { projectCategories, projects } from '../__constants__/projects.constants';
import { projectHref } from '../__constants__/projectDetail.constants';

export default function ProjectTemplate() {
  const [category, setCategory] = useState(projectCategories[0]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === 'All Projects' || project.category === category;
      const matchesSearch =
        !query || [project.title, project.description, ...project.tools].join(' ').toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / 6));
  const visibleProjects = filteredProjects.slice((page - 1) * 6, page * 6);

  return (
    <Box className={styles.site} id="top">
      <PageMeta title="Projects" description="A selection of web, mobile, and platform projects I have worked on." />
      <Box component="section" className={`${styles.darkField} ${styles.pageHero}`}>
        <Box className={styles.frame}>
          <Header />
          <Box className={styles.pageHeroInner}>
            <Box className={styles.pageHeroCopy}>
              <Text className={styles.eyebrow}>Projects</Text>
              <Title order={1} className={styles.pageTitle}>
                All{' '}
                <Text component="span" className={styles.limeText}>
                  Projects
                </Text>
              </Title>
              <Text className={styles.pageSubtitle}>
                A collection of the products, features, and applications I’ve worked on, from enterprise systems to
                user-facing apps.
              </Text>
            </Box>
            <Box className={styles.heroLaptop} role="img" aria-label="Laptop displaying a dashboard" />
          </Box>
        </Box>
      </Box>

      <Box component="main" className={`${styles.frame} ${styles.lightSection}`}>
        <Box className={styles.projectsToolbar}>
          <Box className={styles.filterList} aria-label="Filter projects">
            {projectCategories.map((item) => (
              <UnstyledButton
                aria-pressed={category === item}
                className={`${styles.filterButton} ${category === item ? styles.filterButtonActive : ''}`}
                component="button"
                key={item}
                onClick={() => {
                  setCategory(item);
                  setPage(1);
                }}
                type="button"
              >
                {item}
              </UnstyledButton>
            ))}
          </Box>
          <TextInput
            aria-label="Search projects"
            className={styles.searchBox}
            leftSection={<IconSearch size={17} />}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              setPage(1);
            }}
            placeholder="Search projects..."
            value={search}
          />
        </Box>

        <Box className={styles.projectGrid}>
          {visibleProjects.map((project) => (
            <Box
              component={Link}
              href={projectHref(project.title)}
              className={`${styles.projectCard} ${styles.clickableCard}`}
              key={project.title}
            >
              <Box className={styles.projectImageWrap}>
                {project.imagePosition ? (
                  <Box
                    className={`${styles.referencePreview} ${['Haioo Platform', 'Grapari CMS'].includes(project.title) ? styles.secondaryPreview : ''}`}
                    role="img"
                    aria-label={`${project.title} preview`}
                    style={{ backgroundPosition: project.imagePosition }}
                  />
                ) : project.image ? (
                  <Image src={project.image} alt={`${project.title} preview`} />
                ) : (
                  <Box className={styles.projectPlaceholder} aria-label={`${project.title} visual preview`}>
                    <Box component="span">
                      <Box component="i" />
                      <Box component="i" />
                    </Box>
                  </Box>
                )}
                {!project.imagePosition && (
                  <Text component="span" className={styles.projectType}>
                    {project.type}
                  </Text>
                )}
              </Box>
              <Box className={styles.projectCardBody}>
                <Title order={2}>{project.title}</Title>
                <Box className={styles.tagList}>
                  {project.tools.map((tool) => (
                    <Text component="span" className={styles.tag} key={tool}>
                      {tool}
                    </Text>
                  ))}
                </Box>
                <Text>{project.description}</Text>
                <Box component="span" className={styles.projectLink}>
                  View Details <IconArrowRight size={18} />
                </Box>
                <Box component="span" className={styles.cardArrow} aria-hidden="true">
                  <IconArrowUpRight size={20} />
                </Box>
              </Box>
            </Box>
          ))}
          {filteredProjects.length === 0 && (
            <Text className={styles.emptyProjects}>No projects match this search. Try another name or category.</Text>
          )}
        </Box>
        <Box className={styles.pagination} aria-label="Project pages">
          <UnstyledButton
            component="button"
            type="button"
            aria-label="Previous page"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <IconChevronLeft size={20} />
          </UnstyledButton>
          {Array.from({ length: pageCount }, (_, index) => (
            <UnstyledButton
              key={index}
              type="button"
              aria-current={page === index + 1 ? 'page' : undefined}
              aria-label={`Page ${index + 1}`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </UnstyledButton>
          ))}
          <UnstyledButton
            component="button"
            type="button"
            aria-label="Next page"
            disabled={page === pageCount}
            onClick={() => setPage(page + 1)}
          >
            <IconChevronRight size={20} />
          </UnstyledButton>
        </Box>
        <ContactBanner
          eyebrow="Let's work together"
          title={
            <>
              Have an Idea or{' '}
              <Text component="span" className={styles.limeText}>
                Project in Mind?
              </Text>
            </>
          }
        />
      </Box>
      <SiteFooter />
    </Box>
  );
}

import { resumeProfile } from '@/shared/constants/resume.constants';
import { useState } from 'react';
import Link from 'next/link';
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
  IconUser,
  IconBuilding,
  IconCalendar,
  IconStack2,
  IconCircleCheck,
  IconChevronLeft,
  IconChevronRight,
  IconCode,
} from '@tabler/icons-react';
import { Header } from '@/shared/components';
import PageMeta from '@/shared/components/PageMeta/PageMeta';
import ContactBanner from '@/shared/components/ContactBanner/ContactBanner';
import SiteFooter from '@/shared/components/SiteFooter/SiteFooter';
import { detailProjects, projectHref, projectSlug } from '../__constants__/projectDetail.constants';
import styles from './ProjectDetail.template.module.scss';

export default function ProjectDetailTemplate({ slug }: { slug: string }) {
  const [slide, setSlide] = useState(0);
  const project = detailProjects.find((item) => projectSlug(item.title) === slug)!;
  const related = detailProjects.filter((item) => item.title !== project.title).slice(0, 3);
  const titleWords = project.title.split(' ');
  const accent = titleWords.pop();
  const screens = project.screenshots || [];
  const stack = project.tools.map((name) => ({ name, icon: IconCode, color: '#7eaf08' }));
  return (
    <div className={styles.site}>
      <PageMeta title={project.title} description={project.description} />
      <section className={styles.hero}>
        <div className={styles.frame}>
          <Header />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <Link href="/projects" className={styles.back}>
                <IconArrowLeft size={18} /> Back to Projects
              </Link>
              <span className={styles.badge}>{project.type}</span>
              <h1>
                {titleWords.join(' ')} <span>{accent}</span>
              </h1>
              <p>{project.description}</p>
              <a
                className={styles.primaryButton}
                href={`mailto:${resumeProfile.email}?subject=${encodeURIComponent(`Let's discuss ${project.title}`)}`}
              >
                Discuss this project <IconArrowUpRight size={17} />
              </a>
            </div>
            <ProjectPreview project={project} className={styles.otherHero} />
          </div>
        </div>
      </section>
      <main className={styles.frame}>
        <section className={styles.overview} aria-labelledby="overview-title">
          <div>
            <h2 id="overview-title">
              Project <span>Overview</span>
            </h2>
            <p>{project.description}</p>
          </div>
          <dl className={styles.facts}>
            {[
              { icon: IconUser, label: 'Role', value: 'Frontend Developer' },
              { icon: IconBuilding, label: 'Company', value: project.company },
              { icon: IconCalendar, label: 'Employment Period', value: project.year },
              {
                icon: IconStack2,
                label: 'Project Type',
                value: project.category,
              },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <Icon size={25} />
                <div>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>
        {screens.length > 0 && (
          <section className={styles.gallery} aria-labelledby="screenshots-title">
            <div className={styles.sectionHead}>
              <h2 id="screenshots-title">
                Project <span>Screenshots</span>
              </h2>
              <div className={styles.controls}>
                <span aria-live="polite">
                  {slide + 1} / {screens.length}
                </span>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  disabled={slide === 0}
                  onClick={() => setSlide(slide - 1)}
                >
                  <IconChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  disabled={slide === screens.length - 1}
                  onClick={() => setSlide(slide + 1)}
                >
                  <IconChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className={styles.screens}>
              {Array.from({ length: Math.min(3, screens.length) }, (_, offset) => {
                const screen = screens[(slide + offset) % screens.length];
                return (
                  <a
                    key={screen.title}
                    className={styles.screenshot}
                    href={screen.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${screen.title} in full size`}
                    style={{ backgroundImage: `url('${screen.src}')` }}
                  />
                );
              })}
            </div>
          </section>
        )}
        <section className={styles.contributions}>
          {project.contributions.length > 0 && (
            <div>
              <h2>
                My <span>Contributions</span>
              </h2>
              <ul>
                {project.contributions.map((text) => (
                  <li key={text}>
                    <IconCircleCheck size={20} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {stack.length > 0 && (
            <div>
              <h2>
                Techn<span>ologies</span> Used
              </h2>
              <div className={styles.techGrid}>
                {stack.map(({ name, icon: Icon, color }) => (
                  <div key={name}>
                    <Icon size={29} style={{ color }} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
        <section className={styles.related}>
          <div className={styles.sectionHead}>
            <h2>
              More <span>Projects</span>
            </h2>
            <Link href="/projects">
              View All Projects <IconArrowRight size={17} />
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link key={item.title} href={projectHref(item.title)} className={styles.relatedCard}>
                <ProjectPreview project={item} className={styles.relatedImage} />
                <div>
                  <h3>{item.title}</h3>
                  <div className={styles.tags}>
                    {item.tools.slice(0, 2).map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
                <IconArrowUpRight size={20} />
              </Link>
            ))}
          </div>
        </section>
        <ContactBanner
          eyebrow="Let's work together"
          title={
            <>
              Have a Project in Mind? <span className={styles.lime}>Let’s Talk.</span>
            </>
          }
        />
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectPreview({ project, className }: { project: (typeof detailProjects)[number]; className: string }) {
  return (
    <div
      className={`${styles.projectPreview} ${className}`}
      role="img"
      aria-label={`${project.title} preview`}
      style={
        project.imagePosition
          ? {
              backgroundImage: "url('/images/projects-page-reference.png')",
              backgroundPosition: project.imagePosition,
              backgroundSize: '353% 772%',
            }
          : project.image
            ? { backgroundImage: `url('${project.image}')` }
            : undefined
      }
    >
      {!project.imagePosition && !project.image && <IconCode size={38} />}
    </div>
  );
}

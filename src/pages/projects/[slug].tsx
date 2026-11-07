import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { detailProjects, projectSlug } from '@/features/Project/__constants__/projectDetail.constants';
import ProjectDetailTemplate from '@/features/Project/templates/ProjectDetail.template';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: detailProjects.map((project) => ({ params: { slug: projectSlug(project.title) } })),
  fallback: false,
});
export const getStaticProps: GetStaticProps<{ slug: string }> = async ({ params }) => ({
  props: { slug: String(params?.slug) },
});

export default function ProjectDetailPage({ slug }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ProjectDetailTemplate slug={slug} />;
}

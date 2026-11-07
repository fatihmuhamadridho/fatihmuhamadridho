import { projects } from './projects.constants';

export const projectSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
export const projectHref = (title: string) => `/projects/${projectSlug(title)}`;
export const detailProjects = projects;

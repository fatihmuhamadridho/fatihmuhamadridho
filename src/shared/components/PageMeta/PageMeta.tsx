import { resumeProfile } from '@/shared/constants/resume.constants';
import { NextSeo } from 'next-seo';

export default function PageMeta({ title, description }: { title: string; description: string }) {
  return <NextSeo title={`${title} | ${resumeProfile.name}`} description={description} />;
}

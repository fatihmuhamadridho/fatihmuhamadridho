import { NextSeo } from 'next-seo';

export default function PageMeta({ title, description }: { title: string; description: string }) {
  return <NextSeo title={`${title} | Fatih Ridho`} description={description} />;
}

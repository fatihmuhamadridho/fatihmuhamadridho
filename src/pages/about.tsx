export { default } from '@/features/About/pages/About.page';
import type { GetStaticProps } from 'next';
import { getResumeSummary } from '@/core/infrastructures/services/rxresu.service';
export const getStaticProps: GetStaticProps = async () => ({
  props: { description: await getResumeSummary() },
  revalidate: 300,
});

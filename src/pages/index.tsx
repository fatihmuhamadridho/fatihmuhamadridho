export { default } from '@/features/HomeV2/pages/HomeV2.page';

import type { GetStaticProps } from 'next';
import { getResumeSummary, getResumeExperience } from '@/core/infrastructures/services/rxresu.service';

export const getStaticProps: GetStaticProps = async () => ({
  props: { description: await getResumeSummary(), experience: await getResumeExperience() },
  revalidate: 300,
});

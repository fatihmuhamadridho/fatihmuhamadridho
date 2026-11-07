import HomeV2Template from '../templates/HomeV2.template';

import type { ResumeExperience } from '@/core/infrastructures/services/rxresu.service';

const HomeV2Page = (props: { description: string; experience: ResumeExperience[] }) => <HomeV2Template {...props} />;

export default HomeV2Page;

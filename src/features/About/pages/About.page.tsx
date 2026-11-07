import AboutTemplate from '../templates/About.template';

const AboutPage = ({ description }: { description: string }) => <AboutTemplate description={description} />;

export default AboutPage;

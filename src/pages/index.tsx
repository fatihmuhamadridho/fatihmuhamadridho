import AboutSection from "@/components/organisms/sections/about-sections";
import ContactSection from "@/components/organisms/sections/contact-section";
import ExperienceSection from "@/components/organisms/sections/experience-section";
import HeroSection from "@/components/organisms/sections/hero-section";
import SkillSection from "@/components/organisms/sections/skill-section";
import TestimonialSection from "@/components/organisms/sections/testimonial-section";
import WorkSection from "@/components/organisms/sections/work-section";
import Default from "@/components/templates/default/default";

export default function Home() {
  return (
    <Default title={"Fatih Muhamad Ridho"}>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
      <TestimonialSection />
      <ContactSection />
    </Default>
  );
}

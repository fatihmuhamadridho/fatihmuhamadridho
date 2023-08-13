import AboutSection from "@/components/organisms/sections/about-sections";
import ContactSection from "@/components/organisms/sections/contact-section";
import ExperienceSection from "@/components/organisms/sections/experience-section";
import HeroSection from "@/components/organisms/sections/hero-section";
import SkillSection from "@/components/organisms/sections/skill-section";
import TestimonialSection from "@/components/organisms/sections/testimonial-section";
import WorkSection from "@/components/organisms/sections/work-section";
import Default from "@/components/templates/default/default";
import { useSectionContext } from "@/contexts/section/SectionContext";
import { useScrollIntoView } from "@mantine/hooks";
import { useEffect, useRef } from "react";

export default function Home() {
  const { setSections } = useSectionContext();
  const { scrollIntoView: scrollIntoHero, targetRef: heroTargetRef } = useScrollIntoView({
    offset: 60,
    duration: 750,
  });
  const { scrollIntoView: scrollIntoAbout, targetRef: aboutTargetRef } = useScrollIntoView({
    offset: 120,
    duration: 750,
  });
  const { scrollIntoView: scrollIntoSkill, targetRef: skillTargetRef } = useScrollIntoView({
    offset: 60,
    duration: 750,
  });
  const { scrollIntoView: scrollIntoExperience, targetRef: experienceTargetRef } =
    useScrollIntoView({
      // offset: 60,
      duration: 750,
    });
  const { scrollIntoView: scrollIntoWork, targetRef: workTargetRef } = useScrollIntoView({
    // offset: 60,
    duration: 750,
  });
  const { scrollIntoView: scrollIntoContact, targetRef: contactTargetRef } = useScrollIntoView({
    offset: 60,
    duration: 750,
  });

  useEffect(() => {
    setSections({
      scrollIntoHero,
      scrollIntoAbout,
      scrollIntoSkill,
      scrollIntoExperience,
      scrollIntoWork,
      scrollIntoContact,
    });
  }, [
    scrollIntoAbout,
    scrollIntoContact,
    scrollIntoExperience,
    scrollIntoHero,
    scrollIntoSkill,
    scrollIntoWork,
    setSections,
  ]);

  return (
    <Default title={"Fatih Muhamad Ridho"}>
      <section ref={heroTargetRef}>
        <HeroSection />
      </section>
      <section ref={aboutTargetRef}>
        <AboutSection />
      </section>
      <section ref={skillTargetRef}>
        <SkillSection />
      </section>
      <section ref={experienceTargetRef}>
        <ExperienceSection />
      </section>
      <section ref={workTargetRef}>
        <WorkSection />
      </section>
      {/* <TestimonialSection /> */}
      <section ref={contactTargetRef}>
        <ContactSection />
      </section>
    </Default>
  );
}

import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ResumeSection } from "@/components/sections/resume";
import { SkillsSection } from "@/components/sections/skills";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { IntroOverlay } from "@/components/intro-overlay";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <div className="surface-gradient min-h-screen page-shell">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

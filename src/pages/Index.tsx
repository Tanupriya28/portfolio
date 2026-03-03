import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import ResearchSection from "@/components/ResearchSection";
import { CertificationsSection, EducationSection } from "@/components/EducationCerts";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <GitHubSection />
    <ResearchSection />
    <CertificationsSection />
    <EducationSection />
    <ExperienceSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

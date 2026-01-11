import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { AboutSection } from "@/components/home/AboutSection";
import { AwardsSection } from "@/components/home/AwardsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsPreview />
      <AboutSection />
      <AwardsSection />
      <TechStackSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
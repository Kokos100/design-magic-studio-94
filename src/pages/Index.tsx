import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { AboutSection } from "@/components/home/AboutSection";
import { ClientsSection } from "@/components/home/ClientsSection";
// import { AwardsSection } from "@/components/home/AwardsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="eloit — web проекты любой сложности"
        description="eloit — digital-агентство полного цикла: веб-разработка, мобильные приложения и UI/UX дизайн для роста бизнеса."
        path="/"
      />
      <HeroSection />
      <ProjectsPreview />
      <ClientsSection />
      <AboutSection />
      {/* <AwardsSection /> */}
      <TechStackSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
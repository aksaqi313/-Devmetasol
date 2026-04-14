import { useEffect } from "react";
import CaseStudiesHero from "../components/CaseStudiesHero";
import CaseStudiesGrid from "../components/CaseStudiesGrid";
import AllFooter from "../components/AllFooter";
import OurClients from "../components/OurClients";
import SEO from "../components/SEO";

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Case Studies - Client Success Stories"
        description="Explore KingTechSol's case studies and client success stories. See how we've helped businesses achieve digital transformation through custom software solutions and innovative technology."
        keywords="case studies, client success stories, software development projects, digital transformation examples, enterprise solutions, project portfolio, KingTechSol projects"
        canonicalUrl="/case-studies"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' }
        ]}
      />
      <CaseStudiesHero />
      {/* <CaseStudiesClients /> */}
      <OurClients />
      <CaseStudiesGrid />
      <AllFooter />
    </div>
  );
};

export default CaseStudies;

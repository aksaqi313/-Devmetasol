import { useEffect } from "react";
import HireExpertBanner from "../components/HireExpertBanner";
import HireDevelopersBanner from "../components/HireDevelopersBanner";
import HireCreativeDesignersBanner from "../components/HireCreativeDesignersBanner";
import HireDigitalMarketingBanner from "../components/HireDigitalMarketingBanner";
import HireExpertFAQ from "../components/HireExpertFAQ";
import CustomTeamBanner from "../components/CustomTeamBanner";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const HireAnExpert = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white pt-4 sm:pt-6">
      <SEO
        title="Hire an Expert - Skilled Developers, Designers & Marketers"
        description="Hire expert developers, creative designers, and digital marketing specialists from KingTechSol. Build your custom team with skilled professionals for your projects."
        keywords="hire developers, hire designers, hire digital marketers, staff augmentation, IT staffing, remote developers, dedicated team, expert developers, freelance experts"
        canonicalUrl="/hire-an-expert"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Hire an Expert', url: '/hire-an-expert' }
        ]}
      />
      <HireExpertBanner />
      <HireDevelopersBanner />
      <HireCreativeDesignersBanner />
      <HireDigitalMarketingBanner />
      <HireExpertFAQ />
      <CustomTeamBanner />
      <AllFooter />
    </div>
  );
};

export default HireAnExpert;

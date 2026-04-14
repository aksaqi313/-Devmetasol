import { useEffect } from "react";
import AboutHeroSection from "../components/AboutHeroSection";
// import Vision from "../components/Vision";
// import Mission from "../components/Mission";
import Devmetasol from "../components/Devmetasol";
import CoreValues from "../components/CoreValues";
import CodeOfConduct from "../components/CodeOfConduct";
// import MeetTheTeam from "../components/MeetTheTeam";
import OurOffices from "../components/OurOffices";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="About Us - KingTechSol Company Overview"
        description="Learn about KingTechSol, a leading digital transformation company. Discover our vision, mission, core values, expert team, and global office locations."
        keywords="about KingTechSol, company overview, digital transformation agency, software company, IT consulting firm, tech company, our team, company values"
        canonicalUrl="/about-us"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' }
        ]}
      />
      <AboutHeroSection />
      {/* <Vision /> */}
      {/* <Mission /> */}
      <Devmetasol />
      <CoreValues />
      <CodeOfConduct />
      {/* <MeetTheTeam /> */}
      <OurOffices />
      <AllFooter />
    </>
  );
};

export default AboutUs;

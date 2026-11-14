import { useEffect } from "react";
import NextGenTechnologiesSimple from "../components/NextGenTechnologiesSimple";
import AllFooter from "../components/AllFooter";
import { ServiceSEO } from "../components/SEO";

const NextGenTechnologies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ServiceSEO
        serviceName="Next-Gen Technologies"
        description="Devmetasol delivers cutting-edge solutions with AI/ML, blockchain, IoT, and emerging technologies. Transform your business with next-generation technology services."
        canonicalUrl="/services/next-gen-technologies"
      />
      <NextGenTechnologiesSimple />
      <AllFooter />
    </>
  );
};

export default NextGenTechnologies;

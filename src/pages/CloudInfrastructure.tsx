import { useEffect } from "react";
import CustomSoftwareSolutionsMinimal from "../components/CustomSoftwareSolutionsMinimal";
import AllFooter from "../components/AllFooter";
import { ServiceSEO } from "../components/SEO";
import cloudImg from "../assets/service-cloud.jpg";

const CloudInfrastructure = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ServiceSEO
        serviceName="Cloud Infrastructure"
        description="Devmetasol provides cloud infrastructure services on AWS, Azure, and Google Cloud. Scalable, secure, and cost-effective cloud solutions that empower your business to innovate and grow."
        canonicalUrl="/services/cloud-infrastructure"
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Cloud <span className="text-blue-500">Infrastructure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Scalable, secure, and cost-effective cloud solutions that empower your 
            business to innovate and grow.
          </p>
        </div>
      </div>
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={true}
        title="Enterprise Cloud Solutions"
        image={cloudImg}
        imageAlt="Enterprise Cloud Architecture & DevOps - Devmetasol"
        paragraphs={[
          "Devmetasol provides comprehensive cloud infrastructure services across leading platforms including AWS, Azure, and Google Cloud. We design and implement cloud architectures that optimize performance, reduce costs, and enhance security.",
          "Our cloud migration services ensure seamless transition from on-premises infrastructure to cloud environments, minimizing downtime and maintaining business continuity throughout the process.",
          "We offer ongoing cloud management, monitoring, and optimization services to ensure your cloud infrastructure operates at peak efficiency while maintaining the highest security standards."
        ]}
      />
      <AllFooter />
    </>
  );
};

export default CloudInfrastructure;

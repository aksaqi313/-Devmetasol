import { useEffect } from "react";
import CustomSoftwareSolutionsMinimal from "../components/CustomSoftwareSolutionsMinimal";
import AllFooter from "../components/AllFooter";
import { ServiceSEO } from "../components/SEO";

const DigitalMarketingService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ServiceSEO
        serviceName="Digital Marketing"
        description="Devmetasol provides strategic digital marketing services including SEO, social media marketing, content marketing, PPC advertising, and brand development to drive business growth."
        canonicalUrl="/services/digital-marketing"
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Digital <span className="text-blue-500">Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Strategic digital marketing solutions that drive brand awareness, 
            engagement, and measurable business growth.
          </p>
        </div>
      </div>
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={true}
        title="Comprehensive Digital Marketing Services"
        paragraphs={[
          "Devmetasol delivers end-to-end digital marketing services including SEO optimization, social media management, content marketing, and paid advertising campaigns. Our data-driven approach ensures maximum ROI and measurable results.",
          "We develop customized marketing strategies tailored to your industry, target audience, and business objectives. Our team leverages advanced analytics and marketing automation tools to optimize campaign performance continuously.",
          "From brand development to lead generation and customer retention, we provide comprehensive digital marketing solutions that drive sustainable business growth and competitive advantage."
        ]}
      />
      <AllFooter />
    </>
  );
};

export default DigitalMarketingService;

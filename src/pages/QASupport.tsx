import { useEffect } from "react";
import CustomSoftwareSolutionsMinimal from "../components/CustomSoftwareSolutionsMinimal";
import AllFooter from "../components/AllFooter";
import { ServiceSEO } from "../components/SEO";
import qaImg from "../assets/service-qa.jpg";

const QASupport = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ServiceSEO
        serviceName="QA & Support"
        description="Devmetasol provides comprehensive QA testing and technical support services. Ensure your applications perform flawlessly with our quality assurance, automated testing, and 24/7 support."
        canonicalUrl="/services/qa-support"
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            QA & <span className="text-blue-500">Support</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Comprehensive quality assurance and technical support services to ensure 
            your applications perform flawlessly.
          </p>
        </div>
      </div>
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Quality Assurance & Technical Support"
        image={qaImg}
        imageAlt="Quality Assurance & Technical Support - Devmetasol"
        paragraphs={[
          "Devmetasol's QA services encompass comprehensive testing strategies including functional testing, performance testing, security testing, and user acceptance testing. We ensure your applications meet the highest quality standards before deployment.",
          "Our technical support team provides 24/7 support services, rapid issue resolution, and proactive monitoring to maintain optimal application performance and minimize downtime.",
          "We implement automated testing frameworks and continuous integration practices to catch issues early in the development cycle, reducing costs and accelerating time-to-market."
        ]}
      />
      <AllFooter />
    </>
  );
};

export default QASupport;

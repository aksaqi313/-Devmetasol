import { useEffect } from "react";
import CustomSoftwareSolutionsMinimal from "../components/CustomSoftwareSolutionsMinimal";
import AllFooter from "../components/AllFooter";
import { ServiceSEO } from "../components/SEO";
import softwareImg from "../assets/service-software.jpg";

const CustomSoftwareDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ServiceSEO
        serviceName="Custom Software Development"
        description="Devmetasol provides custom software development services. We build tailored enterprise-grade applications designed to meet your unique business requirements and drive operational excellence."
        canonicalUrl="/services/custom-software-development"
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Custom Software <span className="text-blue-500">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Tailored software solutions designed to meet your unique business requirements 
            and drive operational excellence.
          </p>
        </div>
      </div>
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Enterprise Software Development"
        image={softwareImg}
        imageAlt="Enterprise Custom Software Development - Devmetasol"
        paragraphs={[
          "Devmetasol specializes in developing custom software solutions that align perfectly with your business objectives. Our enterprise-grade applications are built to scale, ensuring your technology infrastructure grows seamlessly with your business.",
          "We leverage cutting-edge technologies and industry best practices to deliver robust, secure, and high-performance software solutions. Our development process emphasizes code quality, maintainability, and long-term sustainability.",
          "From initial consultation to deployment and ongoing support, we provide comprehensive software development services that transform your business processes and enhance operational efficiency."
        ]}
      />
      <AllFooter />
    </>
  );
};

export default CustomSoftwareDevelopment;

import { useEffect } from "react";
import CustomSoftwareSolutionsMinimal from "../components/CustomSoftwareSolutionsMinimal";
import AllFooter from "../components/AllFooter";
import { ServiceSEO } from "../components/SEO";
import staffImg from "../assets/hire-team.jpg";

const StaffAugmentation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ServiceSEO
        serviceName="Staff Augmentation"
        description="Devmetasol provides flexible staff augmentation services. Scale your development team with skilled developers, designers, and IT professionals who integrate seamlessly into your workflow."
        canonicalUrl="/services/staff-augmentation"
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Staff <span className="text-blue-500">Augmentation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Scale your development team quickly with skilled professionals who 
            integrate seamlessly into your workflow.
          </p>
        </div>
      </div>
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Flexible Staff Augmentation Services"
        image={staffImg}
        imageAlt="Flexible IT Staff Augmentation Services - Devmetasol"
        paragraphs={[
          "Devmetasol provides staff augmentation services that allow you to scale your development team quickly and efficiently. Our professionals are vetted, experienced, and ready to contribute from day one, seamlessly integrating into your existing workflows and culture.",
          "We offer flexible engagement models including full-time, part-time, and project-based arrangements. Whether you need frontend developers, backend engineers, DevOps specialists, or full-stack experts, we match you with the right talent for your specific requirements.",
          "Our staff augmentation services eliminate the overhead of permanent hiring while providing access to top-tier talent. We handle recruitment, onboarding, and management, allowing you to focus on your core business objectives."
        ]}
      />
      <AllFooter />
    </>
  );
};

export default StaffAugmentation;

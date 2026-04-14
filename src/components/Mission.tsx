// Mission.jsx
import CustomSoftwareSolutions from "../assets/profileimage2.jpg";

const Mission = () => {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Mission
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <img
              src={CustomSoftwareSolutions}
              alt="Our Vision"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          {/* Right Side - Text */}
          <div className="lg:w-1/2">
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to empower clients through strategic technology
                  adoption that simplifies complexity and positions them at the
                  forefront of continuous innovation. Our dedicated team
                  delivers enterprise-grade digital solutions precisely tailored
                  to your business requirements, establishing the foundation for
                  long-term strategic partnerships.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  KingTechSol is committed to providing comprehensive end-to-end
                  services. Our professionals guide clients through the complete
                  journey from strategic ideation and planning to solution
                  delivery and ongoing maintenance. We enable businesses and
                  startups to realize their full potential by leveraging
                  optimized, high-quality digital solutions that accelerate
                  growth and maximize return on investment.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We leverage advanced full-stack technology expertise to
                  deliver superior digital solutions that help businesses secure
                  competitive advantage in their industries while providing
                  enhanced user experiences that drive customer engagement and
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

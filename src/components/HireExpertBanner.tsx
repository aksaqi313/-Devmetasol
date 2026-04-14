
const HireExpertBanner = () => {
  return (
    <section className="bg-white pb-2 sm:pb-3 md:pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0f223d] rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section - Text Content */}
            <div className="w-full lg:w-2/3 p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Build the Future with{" "}
                <span className="text-blue-400">Expert Talent</span>
              </h2>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                Whether you require expertise in software development, quality assurance, 
                or user experience design, we maintain a curated network of highly 
                skilled professionals ready to help you achieve your strategic business 
                objectives and drive measurable results.
              </p>
            </div>

            {/* Right Section - Code Background Overlay */}
            <div className="w-full lg:w-1/3 relative p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[120px] sm:min-h-[150px] lg:min-h-[200px]">
              <div className="absolute inset-0 opacity-20">
                {/* Code Background Pattern */}
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <div className="font-mono text-[10px] md:text-xs text-blue-400/30 whitespace-pre-wrap leading-relaxed">
                    {`import { useEffect, useRef } from "react";
import Transition from "react-transition-group";

const ExpertTalent = () => {
  const [expert, setExpert] = useState(null);
  
  useEffect(() => {
    // Connect with expert talent
    connectExpert();
  }, []);

  return (
    <div>
      {/* Expert Talent Component */}
    </div>
  );
};

export default ExpertTalent;`}
                  </div>
                </div>
              </div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#0f223d] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireExpertBanner;

const HireExpertBanner = () => {
  return (
    <section className="bg-white pb-2 sm:pb-3 md:pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0f223d] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-800">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section - Text Content */}
            <div className="w-full lg:w-2/3 p-6 sm:p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Top 1% Vetted Talent
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Build the Future with{" "}
                <span className="text-blue-400">Expert Talent</span>
              </h2>
              <p className="text-slate-200 text-sm sm:text-base md:text-lg opacity-90 leading-relaxed max-w-2xl mb-6">
                Whether you require expertise in software development, cloud architecture, 
                creative UI/UX design, or data-driven digital marketing, Devmetasol connects you 
                with high-caliber professionals ready to integrate seamlessly into your workflow.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/923320409566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm md:text-base transition-all shadow-lg hover:shadow-blue-500/25"
                >
                  <span>Talk to an Expert</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Section - Code Background Overlay */}
            <div className="w-full lg:w-1/3 relative p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[140px] sm:min-h-[160px] lg:min-h-[220px]">
              <div className="absolute inset-0 opacity-25">
                {/* Code Background Pattern */}
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <div className="font-mono text-[10px] md:text-xs text-blue-400/40 whitespace-pre-wrap leading-relaxed">
                    {`import { DevmetasolTalent } from "@devmetasol/core";

const DedicatedSquad = () => {
  const squad = useTalentPool({
    roles: ["FullStack", "UI/UX", "Growth"],
    vetting: "Top-Tier",
    availability: "Immediate"
  });

  return squad.deploy();
};

export default DedicatedSquad;`}
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

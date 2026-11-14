
const CaseStudiesHero = () => {
  return (
    <section className="bg-white py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0b1a30] rounded-xl sm:rounded-2xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section - Text Content */}
            <div className="w-full lg:w-2/3 p-4 sm:p-6 md:p-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Our{" "}
                <span className="text-blue-400">Case Studies</span>
              </h1>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                Explore some of the trans-formative journeys of Devmetasol's global
                clients.
              </p>
            </div>

            {/* Right Section - Abstract Graphic */}
            <div className="w-full lg:w-1/3 relative p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[150px] sm:min-h-[200px] lg:min-h-[250px] overflow-hidden">
              {/* Abstract Holographic UI Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Hands with Keyboard (simplified representation) */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-32 h-20 bg-gray-600/30 rounded-lg blur-sm"></div>
                </div>

                {/* Circular Progress Indicators */}
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 border-4 border-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-xs font-bold">80%</span>
                  </div>
                </div>
                <div className="absolute top-16 right-12">
                  <div className="w-12 h-12 border-4 border-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-pink-400 text-[10px] font-bold">30%</span>
                  </div>
                </div>
                <div className="absolute bottom-20 left-12">
                  <div className="w-14 h-14 border-4 border-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 text-xs font-bold">20%</span>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-end gap-1">
                    <div className="w-2 h-8 bg-blue-400 rounded-t"></div>
                    <div className="w-2 h-12 bg-blue-400 rounded-t"></div>
                    <div className="w-2 h-6 bg-purple-400 rounded-t"></div>
                    <div className="w-2 h-10 bg-pink-400 rounded-t"></div>
                  </div>
                </div>

                {/* Line Graph */}
                <div className="absolute top-12 right-8">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                    <path
                      d="M5 25 L10 20 L15 22 L20 15 L25 18 L30 12 L35 10"
                      stroke="#34D399"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Database/Cloud Icons */}
                <div className="absolute bottom-12 right-16">
                  <div className="w-8 h-10 bg-blue-400/30 rounded-t-lg"></div>
                  <div className="w-6 h-6 bg-blue-400/30 rounded-t-lg mx-auto -mt-2"></div>
                </div>

                {/* Mobile Device Icon */}
                <div className="absolute top-24 left-16">
                  <div className="w-6 h-10 border-2 border-blue-400 rounded"></div>
                </div>

                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/10 to-purple-500/10 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;

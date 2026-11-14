
const ServicesHero = () => {
  const serviceFeatures = [
    { 
      label: "RELATIONSHIP", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16.5c-.8 0-1.54.5-1.85 1.26L12.1 14H10v10h10z" fill="#F59E0B"/>
          <path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H4v7h3.5zm5.5 0v-4h-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5H13v-3h2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13V22z" fill="#F59E0B"/>
        </svg>
      )
    },
    { 
      label: "SUPPORT", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9l-2.3 3c1.2 2.4.7 5.4-1.3 7.4 2 2 5 2.4 7.4 1.3l3-2.3 3-3 3.3 3.3c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="#9CA3AF"/>
        </svg>
      )
    },
    { 
      label: "ADVICE", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
          <text x="12" y="17" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Arial">i</text>
        </svg>
      )
    },
    { 
      label: "ASSISTANCE", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <circle cx="12" cy="9" r="5" fill="#10B981"/>
          <path d="M12 14c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z" fill="#10B981"/>
          <circle cx="10" cy="8" r="1" fill="white"/>
          <circle cx="14" cy="8" r="1" fill="white"/>
        </svg>
      )
    },
    { 
      label: "QUALITY", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#000"/>
        </svg>
      )
    },
    { 
      label: "COMPETENCE", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6B7280" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  return (
    <section className="bg-white relative overflow-hidden rounded-xl sm:rounded-2xl py-8 sm:py-12 md:py-16 border border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Content Section */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 z-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Drive Business Impact with Our
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500 leading-tight">
                Revolutionary Services
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-xl">
                <span className="underline decoration-blue-500 decoration-2 underline-offset-4">
                  Devmetasol
                </span>{" "}
                helps businesses grow with powerful & user-oriented digital
                services, designed to improve operational efficiency.
              </p>
            </div>

            {/* Right Visual Section - Circular Service Diagram */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-6 md:mt-0">
              {/* Circular Diagram */}
              <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px]">
                {/* Outer Circle with Segments */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {/* Background Circle */}
                  <circle cx="200" cy="200" r="180" fill="#1e3a8a" opacity="0.1" />
                  
                  {/* Segment Lines */}
                  {serviceFeatures.map((_, index) => {
                    const angle = (index * 60 - 90) * (Math.PI / 180);
                    const x1 = 200;
                    const y1 = 200;
                    const x2 = 200 + 180 * Math.cos(angle);
                    const y2 = 200 + 180 * Math.sin(angle);
                    return (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#3b82f6"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                    );
                  })}
                  
                  {/* Outer Ring */}
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
                </svg>

                {/* Center Circle with SERVICE Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">SERVICE</span>
                  </div>
                </div>

                {/* Service Features - Icons and Labels positioned around circle */}
                {serviceFeatures.map((feature, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const radius = 140;
                  const centerX = 200;
                  const centerY = 200;
                  const x = centerX + radius * Math.cos(angle);
                  const y = centerY + radius * Math.sin(angle);
                  
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                      style={{
                        left: `${(x / 400) * 100}%`,
                        top: `${(y / 400) * 100}%`,
                      }}
                    >
                      <div className="flex flex-col items-center group cursor-pointer">
                        {/* Icon Container */}
                        <div className="bg-white rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                            {feature.icon}
                          </div>
                        </div>
                        {/* Label */}
                        <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-gray-900 font-bold whitespace-nowrap text-center">
                          {feature.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 opacity-10 rounded-full blur-3xl -z-0"></div>
    </section>
  );
};

export default ServicesHero;

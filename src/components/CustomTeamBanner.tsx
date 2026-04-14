const CustomTeamBanner = () => {
  return (
    <section className="bg-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden relative border border-gray-200">
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-full h-full">
              {/* Circuit-like patterns */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0"
              >
                {/* Dashed lines */}
                <line
                  x1="200"
                  y1="50"
                  x2="350"
                  y2="50"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <line
                  x1="200"
                  y1="100"
                  x2="350"
                  y2="100"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <line
                  x1="200"
                  y1="150"
                  x2="350"
                  y2="150"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                
                {/* Small circles */}
                <circle cx="250" cy="50" r="4" fill="#60A5FA" opacity="0.6" />
                <circle cx="300" cy="100" r="4" fill="#60A5FA" opacity="0.6" />
                <circle cx="250" cy="150" r="4" fill="#60A5FA" opacity="0.6" />
                
                {/* Gear-like circular segments */}
                <path
                  d="M300 200 L320 200 L315 210 L325 215 L315 220 L320 230 L300 230 L295 220 L285 215 L295 210 Z"
                  fill="#60A5FA"
                  opacity="0.4"
                />
                <circle cx="300" cy="200" r="30" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.3" />
                <circle cx="300" cy="200" r="20" stroke="#60A5FA" strokeWidth="1" fill="none" opacity="0.3" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Need a{" "}
              <span className="text-blue-500">Custom Team</span>?
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed max-w-2xl">
              Engage with our team to discuss your project requirements and assemble 
              a custom team of experts precisely tailored to deliver your strategic 
              objectives and ensure project success.
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-400 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg w-full sm:w-auto justify-center sm:justify-start shadow-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Contact Us</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTeamBanner;

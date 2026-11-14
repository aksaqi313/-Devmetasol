

const HireDevelopersBanner = () => {
  const developerTypes = [
    "Front-End Developer",
    "Back-End Developer",
    "Mobile App Developer",
    "AI / ML Developer",
  ];

  return (
    <section className="bg-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5">
              Hire us for{" "}
              <span className="text-blue-500">development</span>
            </h2>

            {/* Developer Types List */}
            <ol className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
              {developerTypes.map((type, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium flex items-start"
                >
                  <span className="text-gray-700 mr-2 sm:mr-3 font-bold">
                    {index + 1}.
                  </span>
                  <span>{type}</span>
                </li>
              ))}
            </ol>

            {/* Hire Developers Button */}
            <a
              href="https://wa.me/923320409566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-blue-400 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Hire Developers
            </a>
          </div>

          {/* Right Section - Icon */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="bg-[#0f223d] rounded-2xl p-6 md:p-8 lg:p-10 w-full max-w-md">
              {/* Browser Window Icon */}
              <div className="bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10 relative">
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                
                {/* Code Tag Symbol */}
                <div className="flex items-center justify-center py-6">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-mono text-gray-700">
                    {"</>"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDevelopersBanner;

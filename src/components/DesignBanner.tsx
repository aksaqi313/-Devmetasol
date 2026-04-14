import { Link } from "react-router-dom";

const DesignBanner = () => {
  return (
    <section className="bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section - Text and CTA */}
            <div className="w-full lg:w-2/3 p-4 sm:p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Let's Design Something{" "}
                <span className="text-blue-500">Extraordinary Together!</span>
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                Transform your vision into compelling visual experiences with our 
                comprehensive creative design services. We create distinctive brand 
                identities and user interfaces that resonate with your audience and 
                drive engagement.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg transition-colors duration-300 w-full sm:w-auto justify-center sm:justify-start"
              >
                Get Started Now →
              </Link>
            </div>

            {/* Right Section - Visual with Icons */}
            <div className="w-full lg:w-1/3 relative p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Hand and Tablet */}
                <div className="relative z-10">
                  {/* Tablet */}
                  <div className="w-48 md:w-56 lg:w-64 h-32 md:h-40 lg:h-48 bg-gray-800 rounded-lg mx-auto shadow-2xl relative">
                    <div className="absolute inset-2 bg-gray-900 rounded"></div>
                  </div>
                  {/* Hand (simplified representation) */}
                  <div className="absolute -bottom-8 right-8 w-24 h-32 bg-blue-300 opacity-30 rounded-full blur-xl"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Mobile Phone Icon */}
                  <div className="absolute top-8 left-4 w-8 h-8 border-2 border-blue-300 rounded-lg opacity-70"></div>
                  
                  {/* Cloud Icon */}
                  <div className="absolute top-16 right-12 w-10 h-6 border-2 border-blue-300 rounded-full opacity-70"></div>
                  
                  {/* Arrows Icon */}
                  <div className="absolute top-24 left-12 w-8 h-8 flex items-center justify-center opacity-70">
                    <div className="w-0 h-0 border-l-4 border-l-blue-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    <div className="w-0 h-0 border-r-4 border-r-blue-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                  </div>
                  
                  {/* Download Icon */}
                  <div className="absolute bottom-20 left-8 w-6 h-8 border-2 border-blue-300 opacity-70">
                    <div className="w-0 h-0 border-t-4 border-t-blue-300 border-l-2 border-l-transparent border-r-2 border-r-transparent mx-auto mt-1"></div>
                    <div className="w-1 h-3 bg-blue-300 mx-auto mt-1"></div>
                  </div>
                  
                  {/* Gears Icon (larger, central) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-blue-300 rounded-full opacity-80">
                    <div className="absolute inset-2 border-2 border-blue-300 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute bottom-16 right-16 w-8 h-8 border-2 border-blue-300 rounded-full opacity-70 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-l-blue-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
                  </div>
                  
                  {/* Power Button */}
                  <div className="absolute top-32 right-8 w-6 h-6 border-2 border-blue-300 rounded-full opacity-70">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-2 bg-blue-300"></div>
                  </div>
                  
                  {/* Target/Bullseye Icon */}
                  <div className="absolute bottom-32 left-16 w-8 h-8 border-2 border-blue-300 rounded-full opacity-70">
                    <div className="absolute inset-2 border border-blue-300 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-300 rounded-full"></div>
                  </div>
                  
                  {/* Share Icon */}
                  <div className="absolute top-40 left-20 w-8 h-8 opacity-70">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-0 right-0"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full absolute bottom-0 left-0"></div>
                    <div className="w-1 h-4 bg-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-4 h-1 bg-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Background Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignBanner;

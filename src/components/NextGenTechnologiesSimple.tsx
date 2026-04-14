import CustomSoftwareImage from "../assets/Custom-Software-Solutions.avif";

const NextGenTechnologiesSimple = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Side - Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen Technologies
            </h1>

            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg">
              <p>
                Our next-generation enterprise services provide strategic solutions for 
                advanced web and application development, as well as comprehensive IT 
                services. We leverage cutting-edge technologies to address the complex 
                digital transformation challenges that modern businesses encounter in 
                today's competitive digital landscape.
              </p>

              <p>
                Next-generation technologies solve complex business processes through 
                advanced methodologies and enhance organizational structures using 
                sophisticated machine learning algorithms, large language models, and 
                neural network architectures.
              </p>

              <p>
                We specialize in developing, training, and deploying next-generation 
                technologies, business process automation systems, and machine learning 
                architectures that accelerate business cycles and drive operational 
                efficiency.
              </p>

              <p>
                Our professionals build comprehensive solutions including speech 
                recognition systems, intelligent chatbot development, natural language 
                processing (NLP) applications, and advanced financial technology 
                solutions that modernize your systems and elevate your business to 
                the next level of digital maturity.
              </p>
            </div>
          </div>

          {/* Right Side - Real Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={CustomSoftwareImage}
                  alt="Next-Gen Technologies"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Image overlay text */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                <div className="bg-black/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">AI-Powered Future</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Transforming businesses with cutting-edge technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechnologiesSimple;

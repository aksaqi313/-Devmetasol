
const AboutHeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          We're{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Endless Innovators
          </span>
        </h1>

        {/* Subheading */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300">
            to
          </p>
        </div>

        {/* Secondary Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Provide{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Custom</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-600 to-pink-500 opacity-70 -rotate-1"></span>
          </span>{" "}
          Digital{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Solutions</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-blue-400 opacity-70 rotate-1"></span>
          </span>
        </h2>

        {/* Optional decorative elements */}
        <div className="mt-6 flex justify-center space-x-4">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;

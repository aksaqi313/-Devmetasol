
const AboutHeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-slate-900 flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-slate-900">
          We're{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            Endless Innovators
          </span>
        </h1>

        {/* Subheading */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-600">
            to
          </p>
        </div>

        {/* Secondary Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900">
          Provide{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Custom</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-300 to-pink-300 opacity-80 -rotate-1"></span>
          </span>{" "}
          Digital{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Solutions</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-300 to-indigo-300 opacity-80 rotate-1"></span>
          </span>
        </h2>

        {/* Optional decorative elements */}
        <div className="mt-6 flex justify-center space-x-4">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;

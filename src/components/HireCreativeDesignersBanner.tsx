import designerImg from "../assets/hire-designers.jpg";

const HireCreativeDesignersBanner = () => {
  const designerTypes = [
    "UI/UX Designer",
    "Graphic Designer",
    "Logo & Brand Designer",
  ];

  return (
    <section className="bg-slate-50/60 py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-[#0f223d]">
                <img
                  src={designerImg}
                  alt="Hire Creative Designers - Devmetasol"
                  className="w-full h-[300px] sm:h-[360px] md:h-[400px] object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f223d]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Design Studio</p>
                    <p className="text-sm sm:text-base font-bold text-gray-900">UI/UX & Product Experience</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Portfolio Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs sm:text-sm font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              UI/UX & Brand Identity
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Hire Our <span className="text-blue-500">Creative Designers</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              Transform your digital vision into intuitive, visually captivating experiences with our vetted UI/UX and graphic designers.
            </p>

            {/* Designer Types List */}
            <ol className="space-y-3 mb-6">
              {designerTypes.map((type, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base md:text-lg text-gray-800 font-medium flex items-center gap-3 bg-white hover:bg-purple-50/50 p-3 rounded-xl border border-gray-100 transition-colors shadow-sm"
                >
                  <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center shrink-0">
                    0{index + 1}
                  </span>
                  <span>{type}</span>
                </li>
              ))}
            </ol>

            {/* Hire Designers Button */}
            <a
              href="https://wa.me/923320409566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0f223d] hover:bg-[#1a365d] text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <span>Hire Designers</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireCreativeDesignersBanner;

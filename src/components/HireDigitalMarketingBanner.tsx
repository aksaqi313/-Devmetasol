import marketingImg from "../assets/hire-marketers.jpg";

const HireDigitalMarketingBanner = () => {
  const marketingRoles = [
    "Performance Marketer",
    "SEO Specialist",
    "Social Media Strategist",
    "Content Marketer",
  ];

  return (
    <section className="bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs sm:text-sm font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Growth & User Acquisition
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Hire <span className="text-blue-500">Digital Marketers</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              Accelerate your brand growth, acquire qualified leads, and maximize your return on ad spend with data-driven marketing experts.
            </p>

            {/* Marketing Roles List */}
            <ol className="space-y-3 mb-6">
              {marketingRoles.map((role, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base md:text-lg text-gray-800 font-medium flex items-center gap-3 bg-gray-50 hover:bg-emerald-50/50 p-3 rounded-xl border border-gray-100 transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center shrink-0">
                    0{index + 1}
                  </span>
                  <span>{role}</span>
                </li>
              ))}
            </ol>

            {/* Hire Marketers Button */}
            <a
              href="https://wa.me/923320409566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0f223d] hover:bg-[#1a365d] text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <span>Hire Marketers</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-[#0f223d]">
                <img
                  src={marketingImg}
                  alt="Hire Digital Marketers - Devmetasol"
                  className="w-full h-[300px] sm:h-[360px] md:h-[400px] object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f223d]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Strategy</p>
                    <p className="text-sm sm:text-base font-bold text-gray-900">Data-Driven Growth & SEO</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    High ROI
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

export default HireDigitalMarketingBanner;

import teamImg from "../assets/hire-team.jpg";

const CustomTeamBanner = () => {
  return (
    <section className="bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-[#0f223d] to-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Content */}
            <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Dedicated Squads
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Need a <span className="text-blue-400">Custom Team</span>?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Engage with our leadership to discuss your project requirements and assemble a cross-functional squad of engineers, designers, and strategists tailored specifically to your roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/923320409566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Connect on WhatsApp</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-2/5 p-6 lg:p-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={teamImg}
                  alt="Custom Dedicated Team - Devmetasol"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white text-xs">
                  <p className="font-semibold text-white">Devmetasol Dedicated Teams</p>
                  <p className="text-slate-300 text-[11px]">Agile delivery • Full visibility • Time-zone aligned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomTeamBanner;

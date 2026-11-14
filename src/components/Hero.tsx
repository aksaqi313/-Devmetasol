// Hero.tsx
import { Link } from "react-router-dom";
import FullStackExpertise from "./FullStackExpertise";
import ServiceCards from "./ServiceCards";
import CustomerTestimonials from "./CustomerTestimonials";
import FAQ from "./FAQ";
// import CEOMessage from "./CEOMessage";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden transition-colors duration-300">
        {/* Background decorative elements */}
        <div className="absolute left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 md:mb-5 animate-fade-in shadow-xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2"></span>
              Full-Stack Development, Staff Augmentation & Digital Marketing
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-6xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4 leading-tight tracking-tight animate-slide-up px-2">
              Build, Scale and Market
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-1 sm:mt-1.5">
                Your Product With One Team
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-5 sm:mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-300 px-4 leading-relaxed">
              Devmetasol is a full-service software agency. We design and
              develop custom web and mobile applications, extend your team with
              vetted engineers through staff augmentation, and grow your
              revenue with digital marketing and content production that
              delivers measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up animation-delay-500 px-4">
              <Link
                to="/schedule-call"
                className="group relative px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Get Started Today
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/services"
                className="group px-6 sm:px-7 py-2.5 sm:py-3 border-2 border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xs text-slate-800 dark:text-slate-200 text-sm sm:text-base font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 dark:hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span className="flex items-center gap-2 justify-center">
                  View Our Services
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
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
                </span>
              </Link>
            </div>

            {/* Stats section */}
          </div>
        </div>

        {/* Scroll indicator */}
      </section>

      {/* <SuccessStories /> */}
      <FullStackExpertise />
      <ServiceCards />
      <CustomerTestimonials />
      <FAQ />
      {/* <CEOMessage /> */}
      
      <Footer />
    </>
  );
};

export default Hero;

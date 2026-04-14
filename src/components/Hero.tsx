// Hero.tsx
import { Link } from "react-router-dom";
import FullStackExpertise from "./FullStackExpertise";
import ServiceCards from "./ServiceCards";
import CustomerTestimonials from "./CustomerTestimonials";
import FAQ from "./FAQ";
// import CEOMessage from "./CEOMessage";
import MeetOurExperts from "./MeetOurExperts";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2"></span>
              Enterprise Software, Cloud & Digital Transformation Solutions
              Built to Scale
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight animate-slide-up px-2">
              Top-Notch US-Based
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mt-1 sm:mt-2">
                Software Development Agency
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-300 px-4 leading-relaxed">
              KingTechSol helps startups and enterprises design, Develop, and
              scale secure, high-performance software solutions. From custom
              development and cloud infrastructure to AI-driven digital
              transformation, we turn complex challenges into competitive
              advantages.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up animation-delay-500 px-4">
              {/* <Link
                to="/schedule-call"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                {/* <span className="relative z-10">Schedule A Call</span> */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div> */}
              {/* </Link> */}

              <Link
                to="/schedule-call"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Get Started Today
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-300 text-slate-800 text-sm sm:text-base font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                <span className="flex items-center gap-2 justify-center">
                  View Our Services
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
      <MeetOurExperts />
      <Footer />
    </>
  );
};

export default Hero;

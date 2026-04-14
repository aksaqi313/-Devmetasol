import { Link } from "react-router-dom";

// CodeOfConduct.jsx

const CodeOfConduct = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 md:p-8 relative overflow-hidden border border-gray-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 200"
                className="absolute inset-0"
              >
                {/* Circuit board pattern */}
                <defs>
                  <pattern
                    id="circuit-pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                    <line
                      x1="20"
                      y1="0"
                      x2="20"
                      y2="40"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="20"
                      x2="40"
                      y2="20"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center relative z-10">
              {/* Left Column - Text and Button */}
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Our Code of <span className="text-blue-500">Conduct</span>
                </h2>
                <p className="text-gray-700 text-md sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  We have established a comprehensive code of conduct framework that 
                  recognizes the critical importance of creating an inclusive environment 
                  where every innovative professional can thrive. Our framework promotes 
                  integrity, supports collaborative culture, builds organizational trust, 
                  and ensures the delivery of exceptional services to our clients.
                </p>
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <span>View Our Code Of Conduct</span>
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Right Column - Pattern Background (visible on larger screens) */}
              <div className="hidden md:block relative">
                <div className="w-full h-64 opacity-20">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 300 200"
                    className="text-white"
                  >
                    <defs>
                      <pattern
                        id="network-pattern"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="15" cy="15" r="1.5" fill="currentColor" />
                        <line
                          x1="15"
                          y1="0"
                          x2="15"
                          y2="30"
                          stroke="currentColor"
                          strokeWidth="0.5"
                        />
                        <line
                          x1="0"
                          y1="15"
                          x2="30"
                          y2="15"
                          stroke="currentColor"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#network-pattern)"
                    />
                    {/* Additional connecting lines */}
                    <path
                      d="M50 50 L100 50 L150 100 L200 100"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                    <path
                      d="M100 150 L150 100 L200 150"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;

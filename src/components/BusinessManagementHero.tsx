import { useNavigate } from "react-router-dom";

const BusinessManagementHero = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate("/schedule-call");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Experience the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                  Business Management
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Discover how KingTechSol ERP solutions can transform your business operations 
                and drive operational excellence. Schedule a complimentary consultation to 
                explore how our enterprise resource planning solutions can optimize your 
                workflows and accelerate your path to digital transformation.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleBookConsultation}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Book a consultation
                <svg
                  className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <p className="mt-4 text-sm text-gray-500">
                No credit card required • 30-minute personalized demo
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 font-medium mb-4">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex flex-wrap gap-6 items-center opacity-70">
                <div className="h-8 w-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded"></div>
                <div className="h-8 w-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded"></div>
                <div className="h-8 w-28 bg-gradient-to-r from-gray-300 to-gray-400 rounded"></div>
                <div className="h-8 w-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right visual section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 border border-blue-100">
              {/* Dashboard visualization */}
              <div className="space-y-6">
                {/* Header bar */}
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100"></div>
                    <div className="h-8 w-8 rounded-full bg-indigo-100"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-50"></div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl shadow-sm">
                    <div className="h-2 w-12 bg-blue-200 rounded-full mb-2"></div>
                    <div className="h-4 w-20 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-xl shadow-sm">
                    <div className="h-2 w-10 bg-indigo-200 rounded-full mb-2"></div>
                    <div className="h-4 w-16 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl shadow-sm">
                    <div className="h-2 w-14 bg-blue-200 rounded-full mb-2"></div>
                    <div className="h-4 w-24 bg-blue-400 rounded-full"></div>
                  </div>
                </div>

                {/* Chart visualization */}
                <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-sm">
                  <div className="h-4 w-40 bg-gray-300 rounded-full mb-6"></div>
                  <div className="flex items-end h-32 space-x-2">
                    {[40, 70, 50, 90, 60, 80, 65].map((height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t-lg ${
                          index % 3 === 0
                            ? "bg-gradient-to-t from-blue-500 to-blue-400"
                            : "bg-gradient-to-t from-indigo-500 to-indigo-400"
                        }`}
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="space-y-4">
                  <div className="h-4 w-32 bg-gray-300 rounded-full"></div>
                  <div className="space-y-3">
                    {["W-32", "W-24", "W-40"].map((width, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-blue-400 mr-3"></div>
                        <div
                          className={`h-3 ${width} bg-gradient-to-r from-gray-200 to-gray-300 rounded-full`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-xl flex items-center justify-center">
                <div className="h-8 w-8 bg-white rounded-md"></div>
              </div>

              <div className="absolute -bottom-4 -left-4 h-12 w-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-xl flex items-center justify-center">
                <div className="h-5 w-5 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -z-10 top-10 -left-10 h-40 w-40 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -z-10 bottom-10 -right-10 h-32 w-32 bg-gradient-to-r from-indigo-200 to-transparent rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessManagementHero;

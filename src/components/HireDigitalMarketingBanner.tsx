import { Link } from "react-router-dom";

const HireDigitalMarketingBanner = () => {
  const marketingRoles = [
    "Performance Marketer",
    "Pay Per Click (PPC) Expert",
    "Meta Ads Expert",
    "Social Media Marketer",
    "Social Media Manager",
    "Search Engine Optimization (SEO) Expert",
    "Content Writer",
  ];

  return (
    <section className="bg-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5">
              Hire{" "}
              <span className="text-blue-500">Digital Marketing Professionals</span>
            </h2>

            {/* Marketing Roles List */}
            <ol className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
              {marketingRoles.map((role, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium flex items-start"
                >
                  <span className="text-gray-700 mr-2 sm:mr-3 font-bold">
                    {index + 1}.
                  </span>
                  <span>{role}</span>
                </li>
              ))}
            </ol>

            {/* Hire Marketers Button */}
            <Link
              to="/hire-an-expert"
              className="inline-block bg-[#0f223d] hover:bg-[#1a365d] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Hire Marketers
            </Link>
          </div>

          {/* Right Section - Icon */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="bg-[#0f223d] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md relative">
              {/* Composite Icon: Gear, Person, Megaphone */}
              <div className="relative flex items-center justify-center min-h-[250px] sm:min-h-[300px]">
                {/* Large Gear (Background) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    width="180"
                    height="180"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 20 L110 20 L115 30 L125 25 L120 35 L130 40 L125 50 L135 55 L130 65 L140 70 L135 80 L145 85 L140 95 L150 100 L140 105 L145 115 L135 120 L130 130 L120 125 L125 135 L115 130 L110 140 L100 140 L90 140 L85 130 L75 135 L80 125 L70 120 L65 130 L55 125 L60 135 L50 130 L45 120 L35 125 L40 115 L30 110 L40 105 L30 100 L40 95 L35 85 L45 80 L50 70 L40 65 L45 55 L35 50 L40 40 L50 45 L55 35 L65 40 L70 30 L80 35 L85 25 L90 20 L100 20 Z"
                      fill="#9CA3AF"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                {/* Person Silhouette (Chest up with shirt and tie) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="110"
                    height="130"
                    viewBox="0 0 120 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Head */}
                    <circle cx="60" cy="30" r="20" fill="#9CA3AF" opacity="0.6" />
                    {/* Neck */}
                    <rect x="55" y="50" width="10" height="15" fill="#9CA3AF" opacity="0.6" />
                    {/* Torso with shirt */}
                    <path
                      d="M40 65 L40 120 L80 120 L80 65 L75 65 L75 100 L45 100 L45 65 L40 65 Z"
                      fill="#9CA3AF"
                      opacity="0.6"
                    />
                    {/* Tie */}
                    <path
                      d="M55 65 L55 100 L60 110 L65 100 L65 65 L60 70 L55 65 Z"
                      fill="#6B7280"
                      opacity="0.7"
                    />
                  </svg>
                </div>

                {/* Megaphone Icon (Lower right) */}
                <div className="absolute bottom-12 right-12 z-20">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Megaphone body */}
                    <path
                      d="M20 15 L20 45 L15 45 L15 50 L25 50 L25 45 L20 45 L20 15 Z"
                      fill="#9CA3AF"
                      opacity="0.7"
                    />
                    {/* Megaphone cone */}
                    <path
                      d="M20 15 L20 45 L45 55 L45 5 L20 15 Z"
                      fill="#9CA3AF"
                      opacity="0.7"
                    />
                    {/* Sound waves */}
                    <path
                      d="M45 20 Q50 20, 50 30 Q50 40, 45 40"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.7"
                    />
                    <path
                      d="M45 15 Q55 15, 55 30 Q55 45, 45 45"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
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

export default HireDigitalMarketingBanner;

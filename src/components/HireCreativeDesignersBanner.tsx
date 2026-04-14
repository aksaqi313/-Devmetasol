import { Link } from "react-router-dom";

const HireCreativeDesignersBanner = () => {
  const designerTypes = [
    "UI/UX Designer",
    "Graphic Designer",
    "Logo Designer",
  ];

  return (
    <section className="bg-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          {/* Left Section - Icon/Visual */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="bg-[#0f223d] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md relative">
              {/* Human Head Profile Silhouette */}
              <div className="relative flex items-center justify-center min-h-[200px] sm:min-h-[250px]">
                {/* Head Profile */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <svg
                    width="120"
                    height="150"
                    viewBox="0 0 120 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Head outline (profile facing right) */}
                    <path
                      d="M60 20 C40 20, 20 40, 20 70 C20 90, 30 110, 50 120 C55 125, 60 130, 70 130 C80 130, 85 125, 90 120 C110 110, 120 90, 120 70 C120 40, 100 20, 80 20 C75 20, 70 20, 60 20 Z"
                      fill="#9CA3AF"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                {/* Icons emerging from head */}
                {/* Fountain Pen (left) */}
                <div className="absolute top-6 left-1/4 transform -translate-x-1/2">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 5 L25 15 L30 10 L28 8 L23 13 L20 5 Z M20 15 L20 35 L22 35 L22 15 L20 15 Z"
                      fill="#9CA3AF"
                      opacity="0.7"
                    />
                  </svg>
                </div>

                {/* Light Bulb (center) */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                  <svg
                    width="32"
                    height="40"
                    viewBox="0 0 32 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 5 C12 5, 9 8, 9 12 C9 14, 10 16, 11 18 C12 20, 13 22, 13 25 L13 28 L19 28 L19 25 C19 22, 20 20, 21 18 C22 16, 23 14, 23 12 C23 8, 20 5, 16 5 Z M14 30 L14 32 L18 32 L18 30 L14 30 Z M15 33 L15 35 L17 35 L17 33 L15 33 Z"
                      fill="#9CA3AF"
                      opacity="0.7"
                    />
                  </svg>
                </div>

                {/* Pencil (right) */}
                <div className="absolute top-6 right-1/4 transform translate-x-1/2">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 5 L30 10 L20 20 L15 15 L25 5 Z M15 15 L20 20 L18 22 L13 17 L15 15 Z M13 17 L18 22 L16 24 L11 19 L13 17 Z M11 19 L16 24 L14 26 L9 21 L11 19 Z M9 21 L14 26 L12 28 L7 23 L9 21 Z"
                      fill="#9CA3AF"
                      opacity="0.7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5">
              Hire Our{" "}
              <span className="text-blue-500">Creative Designers</span>
            </h2>

            {/* Designer Types List */}
            <ol className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
              {designerTypes.map((type, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 font-medium flex items-start"
                >
                  <span className="text-gray-700 mr-2 sm:mr-3 font-bold">
                    {index + 1}.
                  </span>
                  <span>{type}</span>
                </li>
              ))}
            </ol>

            {/* Hire Designers Button */}
            <Link
              to="/hire-an-expert"
              className="inline-block bg-[#0f223d] hover:bg-[#1a365d] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Hire Designers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireCreativeDesignersBanner;

// CEOMessage.tsx
import { useState } from "react";
import ceoImage from "../assets/team-member-3.png";

const WhatYouWillHear = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                What You Will Hear From Our <br />
                <span className="text-[#2629d9]">Experts:</span>
              </h2>

              {/* Quotation Mark Icon */}

              {/* Body Text */}
              <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  <strong>Expert Strategic Guidance:</strong> We listen
                  attentively to your requirements and challenges. Our
                  professionals align strategic initiatives and innovative ideas
                  to accelerate your business growth and achieve measurable
                  outcomes.
                </p>
                <p>
                  <strong>Innovative Technology Solutions:</strong> Leveraging
                  cutting-edge technology services, we empower our clients with
                  artificial intelligence, machine learning, and advanced
                  technologies to establish industry leadership and competitive
                  advantage.
                </p>
                <p>
                  <strong>Collaborative Partnership Approach:</strong> We
                  actively solicit and incorporate client feedback throughout
                  the project lifecycle, ensuring that every solution aligns
                  precisely with client expectations and business objectives.
                </p>
                <p>
                  <strong>Dedicated Professional Team:</strong> Our experts
                  collaborate seamlessly, engage in strategic discussions, and
                  deliver secure, scalable, and future-ready digital solutions
                  that support long-term business success.
                </p>
                <p>
                  <strong>Comprehensive Support Services:</strong> Our support
                  team is committed to providing immediate assistance and
                  responding to your queries with optimal solutions, ensuring
                  minimal downtime and maximum operational efficiency.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
                  {!imageError ? (
                    <img
                      src={ceoImage}
                      alt="CEO Portrait"
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 flex items-center justify-center border-2 border-dashed border-[#2629d9]">
                      <div className="text-center text-slate-600 px-4">
                        <svg
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 text-[#2629d9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <p className="text-xs sm:text-sm font-semibold text-[#2629d9] mb-1">
                          CEO Portrait
                        </p>
                        <p className="text-xs text-slate-500 px-2 text-center">
                          Add your CEO image to src/assets/ folder
                          <br />
                          Then import it at the top of this file
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillHear;

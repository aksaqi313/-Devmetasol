// CEOMessage.tsx
import { useState } from "react";
import ceoImage from "../assets/profileimage2.jpg";

const CEOMessage = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Message From the <span className="text-[#059669]">CEO</span>
              </h2>

              {/* Quotation Mark Icon */}
              {/* <div className="text-[#059669] text-5xl sm:text-6xl md:text-7xl font-serif leading-none">
                "
              </div> */}

              {/* Body Text */}
              <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  At Devmetasol, our mission extends beyond delivering
                  exceptional digital solutions—we are committed to forging
                  strategic partnerships with our clients. Through years of
                  experience, we have refined our methodologies to help
                  organizations across various industries achieve transformative
                  growth and operational excellence. Our approach centers on
                  understanding your unique business challenges and de  livering
                  tailored solutions that drive measurable results.
                </p>
                <p>
                  We are proud of our diverse, inclusive team that brings
                  together exceptional talent from around the world. Our quality
                  assurance and support teams ensure seamless customer
                  experiences, while our digital marketing specialists implement
                  industry best practices to enhance your market presence.
                  Quality, integrity, and client success are the cornerstones of
                  everything we do. We are dedicated to helping your
                  organization achieve industry leadership through innovative
                  technology solutions and strategic digital transformation.
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
                    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 flex items-center justify-center border-2 border-dashed border-[#059669]">
                      <div className="text-center text-slate-600 px-4">
                        <svg
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 text-[#059669]"
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
                        <p className="text-xs sm:text-sm font-semibold text-[#059669] mb-1">
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

export default CEOMessage;

import { useState } from "react";

const OurProcess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discovery & Requirements Analysis",
      description: "We conduct comprehensive consultations to understand your business objectives, technical requirements, and strategic goals, ensuring alignment with your vision.",
    },
    {
      number: "02",
      title: "Strategic Planning & Solution Design",
      description: "Our experts develop tailored solution architectures and strategic roadmaps that address your specific challenges and deliver measurable business value.",
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "We execute your project using industry best practices, agile methodologies, and cutting-edge technologies to ensure timely delivery and superior quality.",
    },
    {
      number: "04",
      title: "Deployment & Ongoing Support",
      description: "We facilitate seamless deployment, provide comprehensive training, and deliver continuous support to ensure optimal performance and long-term success.",
    },
  ];

  const totalPages = 4;

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-4">
          <span className="text-gray-900">Our</span>{" "}
          <span className="text-blue-500">Process</span>
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Number Circle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white font-bold text-base sm:text-lg">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

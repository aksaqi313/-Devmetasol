import { useState } from "react";

const WhyChooseOurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Domain Expertise",
      description:
        "Our team possesses deep expertise across specialized technologies and industry domains. We provide comprehensive services spanning strategic planning, interactive design, quality assurance, deployment, and ongoing maintenance to ensure end-to-end solution excellence.",
    },
    {
      title: "Innovative Design Solutions",
      description:
        "We deliver full lifecycle enterprise application designs that combine aesthetic excellence with functional optimization, enabling your organization to achieve market differentiation and enhanced user engagement.",
    },
    {
      title: "Cutting-Edge Technology Stack",
      description:
        "We leverage the latest technologies and frameworks to deliver efficient, scalable, and impactful digital transformation solutions that drive measurable business growth and competitive advantage.",
    },
  ];

  const totalPages = 5;

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-4">
          <span className="text-gray-900">Why</span>{" "}
          <span className="text-blue-500">Choose</span>{" "}
          <span className="text-gray-900">Our</span>{" "}
          <span className="text-blue-500">Services</span>
          <span className="text-gray-900">?</span>
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm relative overflow-hidden"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {service.description}
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
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurServices;

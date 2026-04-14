// ServicesWeOffer.tsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesWeOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Enterprise Software Development",
      description:
        "Custom software solutions engineered to optimize business processes, enhance operational efficiency, and drive measurable ROI through scalable, maintainable applications.",
    },
    {
      title: "Next-Generation Technology Solutions",
      description:
        "Advanced development services leveraging artificial intelligence, machine learning, and emerging technologies to create innovative solutions that position your business at the forefront of digital transformation.",
    },
    {
      title: "Strategic Digital Marketing",
      description:
        "Data-driven digital marketing strategies designed to expand your market reach, increase brand visibility, and generate qualified leads through comprehensive online presence management.",
    },
    {
      title: "Cloud Infrastructure & Migration",
      description:
        "Enterprise cloud solutions built on Microsoft Azure, AWS, and Google Cloud Platform, enabling scalable infrastructure, enhanced security, and reduced operational costs.",
    },
    {
      title: "User Experience Design",
      description:
        "Human-centered design services that create intuitive, accessible, and conversion-optimized user experiences aligned with your business objectives and user needs.",
    },
  ];

  const totalPages = 5; // Fixed 5 pagination dots as shown in the image

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector(
        '[data-card-index="0"]'
      ) as HTMLElement;
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 24; // gap-6 = 1.5rem = 24px
        const scrollPosition = index * (cardWidth + gap);
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardElement = container.querySelector(
          '[data-card-index="0"]'
        ) as HTMLElement;
        if (cardElement) {
          const scrollLeft = container.scrollLeft;
          const cardWidth = cardElement.offsetWidth;
          const gap = 24;
          const newIndex = Math.round(scrollLeft / (cardWidth + gap));
          setCurrentIndex(Math.min(Math.max(0, newIndex), totalPages - 1));
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [totalPages]);

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12 gap-4 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-blue-500">Core</span>{" "}
            <span className="text-slate-900">Service Offerings</span>
          </h2>
          <Link
            to="/services"
            className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-200 rounded-lg bg-white text-slate-900 text-sm sm:text-base font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center sm:justify-start"
          >
            View All Services
            <svg
              className="w-5 h-5"
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
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {services.map((service, index) => (
              <div
                key={index}
                data-card-index={index}
                className="shrink-0 w-[85%] sm:w-[calc(50%-12px)] md:w-[calc(45%-12px)] lg:w-[calc(40%-12px)] snap-start"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 h-full min-h-[200px] sm:min-h-[240px] md:min-h-[260px] flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-slate-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;

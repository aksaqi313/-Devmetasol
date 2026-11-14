import { useState, useEffect, useRef } from "react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ryan Jacobs",
      stars: 5,
      text: "When I was looking for reliable web design services, it was challenging to choose. My friend recommended Devmetasol. It was the best decision ever. The team created the best web design to help my website stand out.",
    },
    {
      id: 2,
      name: "David Thompson",
      stars: 5,
      text: "With end-to-end services, the team helped me throughout the process. They implemented the best digital marketing practices to enhance the visibility of my business in the online world. It was a great pleasure working with Devmetasol.",
    },
    {
      id: 3,
      name: "Hassan Al-Farsi",
      stars: 5,
      text: "I'm pleased to have selected Devmetasol for our software development requirements. The team demonstrated exceptional competence and technical expertise, delivering robust, error-free solutions that exceeded our expectations.",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      stars: 5,
      text: "Exceptional service and support throughout our project. The team's attention to detail and commitment to quality made all the difference in our digital transformation journey.",
    },
    {
      id: 5,
      name: "Michael Chen",
      stars: 5,
      text: "The ERP solution provided was perfectly tailored to our business needs. Implementation was smooth and the support team was always available.",
    },
    {
      id: 6,
      name: "Emma Rodriguez",
      stars: 5,
      text: "Their digital marketing strategies increased our online sales by 150% in just 3 months. Absolutely brilliant team to work with!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const renderStars = (count: number) => {
    return (
      <div className="flex justify-center">
        {[...Array(count)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Calculate visible testimonials
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScroll) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScroll, testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScroll(false);

    // Restart auto-scroll after manual interaction
    setTimeout(() => {
      setIsAutoScroll(true);
    }, 6000);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver customized ERP solutions that meet your specific business
            requirements and transform how you manage your operations. We
            consistently exceed client expectations through innovative
            approaches and strategic technology implementation. Read the
            following testimonials to understand how we collaborate with our
            clients to achieve their business objectives.
          </p>
        </div>

        {/* Testimonials Display - Always 3 Cards */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6 text-center">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots - Smaller size */}

          {/* Alternative: Even Smaller Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="focus:outline-none p-0.5 transition-all duration-300"
                aria-label={`Go to testimonial group ${index + 1}`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-blue-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;

// CustomerTestimonials.tsx
import { useState, useRef, useEffect } from "react";

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<number | null>(null);
  const isUserScrollingRef = useRef(false);

  const testimonials = [
    {
      rating: 5,
      text: "I'm glad I chose KingTechSol for software development services. The team was competent and highly skilled & delivered error-free solutions.",
      name: "Hassan Al-Farsi",
      avatar: "👨‍💼", // Placeholder for avatar - you can replace with actual images
    },
    {
      rating: 5,
      text: "Looking for a trustworthy digital solutions provider? I have worked with KingTechSol & I must say they have highly skilled team members who understand your requirements and come up with innovative ideas.",
      name: "Sarah Mitchell",
      avatar: "👩‍💼", // Placeholder for avatar
    },
    {
      rating: 5,
      text: "Being a long-term client of KingTechSol, I would like to share my experience of QA & Support services. The team was fantastic as they were efficient and fixed all the bugs. They meet fast-changing customer demands. Highly recommended!!!",
      name: "Emily Carter",
      avatar: "👩‍💼", // Placeholder for avatar
    },
    {
      rating: 5,
      text: "Excellent service and outstanding results. The team exceeded our expectations with their professionalism and technical expertise.",
      name: "Michael Johnson",
      avatar: "👨‍💼",
    },
    {
      rating: 5,
      text: "KingTechSol transformed our business with their innovative approach and cutting-edge solutions. Highly recommended!",
      name: "Lisa Anderson",
      avatar: "👩‍💼",
    },
  ];

  const totalTestimonials = testimonials.length;
  const visibleCards = 3; // Number of cards visible at once
  const maxScrollPosition = Math.max(0, totalTestimonials - visibleCards); // Maximum scroll position
  const totalPages = totalTestimonials; // Total number of pages/dots for pagination

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

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }

      autoScrollIntervalRef.current = setInterval(() => {
        if (!isUserScrollingRef.current && scrollContainerRef.current) {
          setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % (maxScrollPosition + 1);
            scrollToIndex(nextIndex);
            return nextIndex;
          });
        }
      }, 4000); // Auto-scroll every 4 seconds
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [maxScrollPosition]);

  // Handle manual scroll
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
          const clampedIndex = Math.min(
            Math.max(0, newIndex),
            maxScrollPosition
          );
          setCurrentIndex(clampedIndex);
        }
      }
    };

    const handleUserScrollStart = () => {
      isUserScrollingRef.current = true;
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };

    const handleUserScrollEnd = () => {
      // Resume auto-scroll after user stops scrolling
      setTimeout(() => {
        isUserScrollingRef.current = false;
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
        const startAutoScroll = () => {
          autoScrollIntervalRef.current = setInterval(() => {
            if (!isUserScrollingRef.current && scrollContainerRef.current) {
              setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % (maxScrollPosition + 1);
                scrollToIndex(nextIndex);
                return nextIndex;
              });
            }
          }, 4000);
        };
        startAutoScroll();
      }, 2000); // Resume after 2 seconds of inactivity
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("touchstart", handleUserScrollStart);
      container.addEventListener("mousedown", handleUserScrollStart);
      container.addEventListener("touchend", handleUserScrollEnd);
      container.addEventListener("mouseup", handleUserScrollEnd);
      container.addEventListener("mouseleave", handleUserScrollEnd);

      return () => {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("touchstart", handleUserScrollStart);
        container.removeEventListener("mousedown", handleUserScrollStart);
        container.removeEventListener("touchend", handleUserScrollEnd);
        container.removeEventListener("mouseup", handleUserScrollEnd);
        container.removeEventListener("mouseleave", handleUserScrollEnd);
      };
    }
  }, [maxScrollPosition]);

  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
              What Our <span className="text-blue-500">Customers</span> Say
              About Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              KingTechSol is committed to delivering results that exceed client
              expectations. Through our dedication and extensive industry
              experience, we have established enduring partnerships with
              organizations worldwide. The following testimonials demonstrate
              our collaborative approach and the value we deliver to our
              clients.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  data-card-index={index}
                  className="flex-shrink-0 w-[85%] sm:w-[calc(33.333%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full min-h-[240px] sm:min-h-[280px] flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        )
                      )}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Customer Profile */}
                    <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-xs sm:text-sm md:text-base">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => {
              // Show active state for the first 3 dots when currentIndex is 0, etc.
              const isActive =
                index >= currentIndex && index < currentIndex + visibleCards;
              return (
                <button
                  key={index}
                  onClick={() =>
                    scrollToIndex(Math.max(0, index - visibleCards + 1))
                  }
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    isActive ? "bg-slate-900" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;

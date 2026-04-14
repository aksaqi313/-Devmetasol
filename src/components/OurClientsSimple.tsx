import { useEffect, useRef } from "react";

const OurClientsSimple = () => {
  const clients = [
    {
      name: "Hussain Rehar",
      logo: "HR",
    },
    {
      name: "CMD Sons",
      logo: "CMD",
    },
    {
      name: "ITTFAQ MINING",
      logo: "IM",
    },
    {
      name: "VISTA Innovation of Technology",
      logo: "VISTA",
    },
    {
      name: "Caribbean Air Solutions",
      logo: "CAS",
    },
    {
      name: "Appselec",
      logo: "appselec",
    },
    // Duplicate for seamless scrolling
    {
      name: "Hussain Rehar",
      logo: "HR",
    },
    {
      name: "CMD Sons",
      logo: "CMD",
    },
    {
      name: "ITTFAQ MINING",
      logo: "IM",
    },
    {
      name: "VISTA Innovation of Technology",
      logo: "VISTA",
    },
    {
      name: "Caribbean Air Solutions",
      logo: "CAS",
    },
    {
      name: "Appselec",
      logo: "appselec",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 1; // Pixels per frame

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const scrollLogos = () => {
      if (scrollContainer) {
        // Reset scroll position when we've scrolled halfway through duplicated content
        if (scrollContainer && scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else if (scrollContainer) {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
      animationRef.current = requestAnimationFrame(scrollLogos);
    };

    // Start scrolling after a short delay
    const startTimeout = setTimeout(() => {
        animationRef.current = requestAnimationFrame(scrollLogos) as unknown as number;
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      if (scrollContainer && !animationRef.current) {
        animationRef.current = requestAnimationFrame(scrollLogos) as unknown as number;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearTimeout(startTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-4">
          <span className="text-gray-900">Our</span>{" "}
          <span className="text-blue-500">Clients</span>
        </h2>

        {/* Auto-scrollable Client Logos */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden relative"
          style={{ 
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <div className="flex animate-scroll whitespace-nowrap">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex-shrink-0"
              >
                {/* Logo Placeholder */}
                <div className="w-24 sm:w-32 md:w-40 h-16 sm:h-20 md:h-24 flex items-center justify-center mb-2 bg-gray-50 rounded-lg shadow-sm">
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">
                    {client.logo}
                  </span>
                </div>
                {/* Client Name */}
                <p className="text-xs sm:text-sm text-gray-600 text-center font-medium max-w-[100px] sm:max-w-[120px]">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSimple;
// ServiceCards.tsx
import { Link } from "react-router-dom";
import softwareImg from "../assets/service-software.jpg";
import webImg from "../assets/service-web.jpg";
import mobileImg from "../assets/service-mobile.jpg";
import designImg from "../assets/service-design.jpg";
import seoImg from "../assets/service-seo.jpg";
import marketingImg from "../assets/service-marketing.jpg";

const ServiceCards = () => {
  const services = [
    {
      title: "Software Development",
      image: softwareImg,
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Code brackets icon */}
          <path
            d="M20 20 L16 32 L20 44 M44 20 L48 32 L44 44"
            stroke="url(#grad1)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 16 L36 16 M28 48 L36 48"
            stroke="url(#grad1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="32" cy="32" r="8" fill="url(#grad1)" opacity="0.2" />
        </svg>
      ),
      items: [
        "Custom Software Solutions",
        "Scalable & Secure Architecture",
        "Agile Development Process",
        "Legacy System Integration",
        "API Development & Integration",
        "Cloud-Native Solutions",
        "Automation & Testing Services",
        "Cross-Platform Development",
      ],
      link: "/services",
    },
    {
      title: "Web Development",
      image: webImg,
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Globe/Web icon */}
          <circle
            cx="32"
            cy="32"
            r="18"
            fill="url(#grad2)"
            opacity="0.1"
            stroke="url(#grad2)"
            strokeWidth="2"
          />
          <path
            d="M14 32 Q32 20 50 32 Q32 44 14 32"
            stroke="url(#grad2)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M14 32 Q32 24 50 32"
            stroke="url(#grad2)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M14 32 Q32 40 50 32"
            stroke="url(#grad2)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="32" cy="32" r="4" fill="url(#grad2)" />
        </svg>
      ),
      items: [
        "Responsive Web Design",
        "Custom Web Applications",
        "CMS Development (WordPress)",
        "E-Commerce Solutions",
        "Web Security & HTTPS",
        "Database Design & Optimization",
        "Web Hosting & Server Setup",
        "User Experience (UX) and (UI)",
      ],
      link: "/services",
    },
    {
      title: "Mobile Development",
      image: mobileImg,
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Smartphone icon */}
          <rect
            x="20"
            y="8"
            width="24"
            height="48"
            rx="4"
            fill="url(#grad3)"
            opacity="0.1"
            stroke="url(#grad3)"
            strokeWidth="2"
          />
          <rect x="24" y="16" width="16" height="32" rx="1" fill="white" />
          <rect x="28" y="20" width="8" height="6" rx="1" fill="url(#grad3)" />
          <circle cx="32" cy="52" r="2" fill="url(#grad3)" />
        </svg>
      ),
      items: [
        "Native iOS and Android App Development",
        "Hybrid Mobile Apps (React Native, Flutter)",
        "Mobile App UI/UX Design",
        "Mobile App Testing & Optimization",
        "Integration with Backend Services",
        "Push Notification Services",
        "App Store & Play Store Deployment",
        "App Maintenance & Updates",
      ],
      link: "/services",
    },
    {
      title: "Product Design & UI/UX",
      image: designImg,
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Design/UI icon */}
          <rect
            x="16"
            y="16"
            width="32"
            height="32"
            rx="2"
            fill="url(#grad4)"
            opacity="0.1"
            stroke="url(#grad4)"
            strokeWidth="2"
          />
          <rect x="20" y="20" width="12" height="8" rx="1" fill="url(#grad4)" />
          <rect x="34" y="20" width="12" height="8" rx="1" fill="url(#grad4)" />
          <rect x="20" y="32" width="24" height="4" rx="1" fill="url(#grad4)" />
          <rect x="20" y="40" width="18" height="4" rx="1" fill="url(#grad4)" />
          <circle cx="44" cy="42" r="3" fill="url(#grad4)" />
        </svg>
      ),
      items: [
        "User Interface (UI) Design",
        "User Experience (UX) Research",
        "Wireframing & Prototyping",
        "Design Systems & Style Guides",
        "Interactive Design & Animations",
        "Usability Testing & Analysis",
        "Responsive Design Solutions",
        "Design-to-Development Handoff",
      ],
      link: "/services",
    },
    {
      title: "Search Engine Optimization",
      image: seoImg,
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Search/Magnifying glass icon */}
          <circle
            cx="28"
            cy="28"
            r="12"
            fill="none"
            stroke="url(#grad5)"
            strokeWidth="3"
          />
          <path
            d="M38 38 L48 48"
            stroke="url(#grad5)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 28 L24 28"
            stroke="url(#grad5)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="28" cy="28" r="3" fill="url(#grad5)" />
        </svg>
      ),
      items: [
        "On-Page SEO Optimization",
        "Off-Page SEO & Link Building",
        "Keyword Research & Strategy",
        "Technical SEO Audits",
        "Local SEO Services",
        "Content Optimization",
        "SEO Analytics & Reporting",
        "Search Engine Rankings Improvement",
      ],
      link: "/services",
    },
    {
      title: "Digital Marketing",
      image: marketingImg,
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
          {/* Marketing/Chart icon */}
          <path
            d="M16 48 L24 36 L32 40 L40 24 L48 32"
            stroke="url(#grad6)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="16" cy="48" r="3" fill="url(#grad6)" />
          <circle cx="24" cy="36" r="3" fill="url(#grad6)" />
          <circle cx="32" cy="40" r="3" fill="url(#grad6)" />
          <circle cx="40" cy="24" r="3" fill="url(#grad6)" />
          <circle cx="48" cy="32" r="3" fill="url(#grad6)" />
          <rect
            x="12"
            y="52"
            width="40"
            height="2"
            rx="1"
            fill="url(#grad6)"
            opacity="0.3"
          />
        </svg>
      ),
      items: [
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing Campaigns",
        "Brand Awareness & Positioning",
        "Marketing Analytics & Insights",
        "Conversion Rate Optimization",
        "Marketing Automation",
      ],
      link: "/services",
    },
  ];

  return (
    <section className="bg-white pt-0 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-blue-500 text-sm sm:text-base font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Devmetasol Solutions Tailored 
              <br />
              <span className="text-blue-600">to Your Business Needs</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-6 max-w-3xl mx-auto">
              From cutting-edge software development to strategic digital transformation,
              we deliver end-to-end technology services that drive innovation and growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-slate-200 hover:border-blue-500 hover:-translate-y-1.5"
              >
                {/* Service Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Icon badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/40 flex items-center justify-center">
                    <div className="w-8 h-8 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="p-5 lg:p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service List */}
                  <ul className="space-y-2 mb-6 grow">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-xs sm:text-sm text-slate-600 flex items-start"
                      >
                        <span className="text-blue-600 mr-2 font-bold leading-tight">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Service Button */}
                  <Link
                    to={service.link}
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all duration-300 border border-slate-200 hover:border-blue-600 shadow-2xs group-hover:shadow-md"
                  >
                    <span>Explore Service</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

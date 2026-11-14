import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
// import Logo1 from "../assets/logo1.svg"

const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isManuallyOpenedRef = useRef<boolean>(false);

  // Check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    isManuallyOpenedRef.current = true;
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Auto-open dropdown when on relevant pages
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/services")) {
      if (activeDropdown !== "services") {
        isManuallyOpenedRef.current = false;
        setActiveDropdown("services");
      }
    } else if (path.startsWith("/hire-an-expert")) {
      if (activeDropdown !== "hire") {
        isManuallyOpenedRef.current = false;
        setActiveDropdown("hire");
      }
    } else if (path.startsWith("/about-us")) {
      if (activeDropdown !== "about") {
        isManuallyOpenedRef.current = false;
        setActiveDropdown("about");
      }
    } else {
      // Close dropdown when navigating away from these pages (unless manually opened)
      if (!isManuallyOpenedRef.current && (activeDropdown === "services" || activeDropdown === "hire" || activeDropdown === "about")) {
        setActiveDropdown(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Close dropdown when clicking outside (but keep open if on relevant page)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If clicking inside the dropdown, don't close it
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      
      const path = location.pathname;
      // If we're on a page that should keep the dropdown open, don't close it
      if (
        (path.startsWith("/services") && activeDropdown === "services") ||
        (path.startsWith("/hire-an-expert") && activeDropdown === "hire") ||
        (path.startsWith("/about-us") && activeDropdown === "about")
      ) {
        return;
      }
      
      // Otherwise, close the dropdown
      if (activeDropdown) {
        isManuallyOpenedRef.current = false;
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeDropdown, location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Services dropdown data
  const servicesData = {
    column1: [
      {
        title: "Custom Software Solution",
        items: [
          {
            name: "Web App Development",
            link: "/services/web-app-development",
          },
          {
            name: "Mobile App Development",
            link: "/services/mobile-app-development",
          },
          { name: "Web Development", link: "/services/web-development" },
        ],
      },
      {
        title: "Next-Gen Technologies",
        items: [
          {
            name: "Blockchain Development",
            link: "/services/blockchain-development",
          },
          { name: "AI/ML Development", link: "/services/ai-ml-development" },
          { name: "Internet of Things IoT", link: "/services/iot" },
          {
            name: "Data Science & Big Data Analytics",
            link: "/services/data-science",
          },
          { name: "Progressive Web Applications", link: "/services/pwa" },
        ],
      },
    ],
    column2: [
      {
        title: "Cloud Infrastructure",
        items: [
          { name: "Cloud Web Services", link: "/services/cloud-web-services" },
          { name: "Cloud Migrations", link: "/services/cloud-migrations" },
          {
            name: "Cloud-Based Services",
            link: "/services/cloud-based-services",
          },
          { name: "Microsoft Azure", link: "/services/microsoft-azure" },
        ],
      },
      {
        title: "Creative Designing",
        items: [
          { name: "Graphic Designing", link: "/services/graphic-designing" },
          { name: "UI/UX Designing", link: "/services/ui-ux-designing" },
          { name: "Branding", link: "/services/branding" },
          {
            name: "Mobile App Designing",
            link: "/services/mobile-app-designing",
          },
          { name: "Web Designing", link: "/services/web-designing" },
          { name: "Logo Designing", link: "/services/logo-designing" },
        ],
      },
    ],
    column3: [
      {
        title: "Digital Marketing",
        items: [
          { name: "Search Engine Optimization", link: "/services/seo" },
          {
            name: "Social Media Management",
            link: "/services/social-media-management",
          },
          {
            name: "Social Media Marketing",
            link: "/services/social-media-marketing",
          },
          { name: "Content Writing", link: "/services/content-writing" },
          { name: "Google Ads", link: "/services/google-ads" },
          { name: "Pay Per Click (PPC)", link: "/services/ppc" },
          {
            name: "Performance Marketing",
            link: "/services/performance-marketing",
          },
        ],
      },
      {
        title: "QA & Support",
        items: [
          { name: "Manual Testing", link: "/services/manual-testing" },
          { name: "Automated Testing", link: "/services/automated-testing" },
          { name: "Ongoing Support", link: "/services/ongoing-support" },
        ],
      },
    ],
    column4: [
      {
        title: "Staff Augmentation",
        items: [
          {
            name: "Frontend Developers",
            link: "/services/frontend-developers",
          },
          { name: "Backend Developers", link: "/services/backend-developers" },
          {
            name: "Full-Stack Developers",
            link: "/services/fullstack-developers",
          },
          { name: "Creative Designers", link: "/services/creative-designers" },
          { name: "QA Experts", link: "/services/qa-experts" },
          {
            name: "Digital Marketing Specialists",
            link: "/services/digital-marketing-specialists",
          },
          { name: "DevOps Engineers", link: "/services/devops-engineers" },
          {
            name: "Cyber Security Specialists",
            link: "/services/cyber-security-specialists",
          },
        ],
      },
    ],
  };

  // Hire An Expert dropdown data
  const hireExpertData = {
    column1: [
      {
        title: "Hire a developer",
        items: [
          {
            name: "Front-End Developer",
            link: "/hire-an-expert/frontend-developer",
          },
          {
            name: "Back-End Developer",
            link: "/hire-an-expert/backend-developer",
          },
          {
            name: "Mobile App Developer",
            link: "/hire-an-expert/mobile-app-developer",
          },
          {
            name: "AI / ML Developer",
            link: "/hire-an-expert/ai-ml-developer",
          },
        ],
      },
    ],
    column2: [
      {
        title: "Cloud Infrastructure Expert",
        items: [
          { name: "DevOps Engineer", link: "/hire-an-expert/devops-engineer" },
          {
            name: "Microsoft Azure Specialist",
            link: "/hire-an-expert/azure-specialist",
          },
          {
            name: "Google Cloud Specialist",
            link: "/hire-an-expert/google-cloud-specialist",
          },
          {
            name: "Amazon Web Server (AWS) Specialist",
            link: "/hire-an-expert/aws-specialist",
          },
        ],
      },
    ],
    column3: [
      {
        title: "Quality Assurance Engineer",
        items: [
          {
            name: "Functional Tester",
            link: "/hire-an-expert/functional-tester",
          },
          {
            name: "Integration Tester",
            link: "/hire-an-expert/integration-tester",
          },
          {
            name: "Automation Tester",
            link: "/hire-an-expert/automation-tester",
          },
          {
            name: "Self-Healing Testing Automation",
            link: "/hire-an-expert/self-healing-testing",
          },
          { name: "Manual Tester", link: "/hire-an-expert/manual-tester" },
        ],
      },
    ],
    column4: [
      {
        title: "Cyber Security Specialist",
        items: [
          {
            name: "Security Assessment & Testing",
            link: "/hire-an-expert/security-assessment",
          },
          {
            name: "Services Managed Security Services (MSS)",
            link: "/hire-an-expert/mss",
          },
          {
            name: "Compliance & Risk Management",
            link: "/hire-an-expert/compliance-risk",
          },
          {
            name: "Application & Cloud Security",
            link: "/hire-an-expert/application-cloud-security",
          },
          {
            name: "Incident Response & Forensics",
            link: "/hire-an-expert/incident-response",
          },
          {
            name: "Identity & Access Management (IAM)",
            link: "/hire-an-expert/iam",
          },
        ],
      },
    ],
    column5: [
      {
        title: "Digital Marketing Professional",
        items: [
          {
            name: "Performance Marketer",
            link: "/hire-an-expert/performance-marketer",
          },
          {
            name: "Pay Per Click (PPC) Expert",
            link: "/hire-an-expert/ppc-expert",
          },
          { name: "Meta Ads Expert", link: "/hire-an-expert/meta-ads-expert" },
          {
            name: "Social Media Marketer",
            link: "/hire-an-expert/social-media-marketer",
          },
          {
            name: "Social Media Manager",
            link: "/hire-an-expert/social-media-manager",
          },
          {
            name: "Search Engine Optimization (SEO) Expert",
            link: "/hire-an-expert/seo-expert",
          },
          { name: "Content Writer", link: "/hire-an-expert/content-writer" },
        ],
      },
    ],
    column6: [
      {
        title: "Hire Creative Designers",
        items: [
          { name: "UI/UX Designer", link: "/hire-an-expert/ui-ux-designer" },
          {
            name: "Graphic Designer",
            link: "/hire-an-expert/graphic-designer",
          },
          { name: "Logo Designer", link: "/hire-an-expert/logo-designer" },
        ],
      },
    ],
  };

  // About-Us dropdown data
  const aboutUsData = [
    {
      name: "Accessibility Statement",
      link: "/about-us/accessibility-statement",
    },
    { name: "Terms and Conditions", link: "/about-us/terms-and-conditions" },
    { name: "Privacy Policy", link: "/about-us/privacy-policy" },
    { name: "Cookie Policy", link: "/about-us/cookie-policy" },
    { name: "Careers", link: "/about-us/careers" },
    { name: "Blogs", link: "/about-us/blogs" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 shrink-0 group"
          >
            <div className="relative">
           
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-purple-800 transition-all duration-300 shadow-lg">
                <span className="text-white font-extrabold text-xl sm:text-2xl">D</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Dev<span className="text-blue-500 font-extrabold">metasol</span>
            </span>
          </Link>
{/* 
          <Link
  to="/"
  className="flex items-center shrink-0 group"
>
  <img 
    src={Logo1} 
    alt="Devmetasol Logo"
    className="h-16 sm:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
  />
</Link> */}

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2.5 rounded-lg text-slate-800 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`block h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2.5"
                    : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2.5"
                    : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div
            className="hidden lg:flex flex-row items-center space-x-1 xl:space-x-2"
            ref={dropdownRef}
          >
          <Link
            to="/"
            className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
              isActive("/")
                ? "text-blue-600 bg-blue-50"
                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                isActive("/services")
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            {activeDropdown === "services" && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-slate-900 rounded-xl shadow-2xl py-5 md:py-6 px-5 md:px-8 z-50 w-[90vw] max-w-[900px] border border-slate-800"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                  {/* Column 1 */}
                  <div className="space-y-6">
                    {servicesData.column1.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    {servicesData.column2.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    {servicesData.column3.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-6">
                    {servicesData.column4.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hire An Expert Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("hire")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/hire-an-expert"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                isActive("/hire-an-expert")
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span>Hire An Expert</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "hire" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            {activeDropdown === "hire" && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-slate-900 rounded-xl shadow-2xl py-5 md:py-6 px-5 md:px-8 z-50 w-[90vw] max-w-[1100px] border border-slate-800"
                onMouseEnter={() => handleMouseEnter("hire")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                  {/* Column 1 */}
                  <div>
                    {hireExpertData.column1.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div>
                    {hireExpertData.column2.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div>
                    {hireExpertData.column3.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 4 */}
                  <div>
                    {hireExpertData.column4.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 5 */}
                  <div>
                    {hireExpertData.column5.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 6 */}
                  <div>
                    {hireExpertData.column6.map((category, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-sm mb-3 border-b-2 border-blue-500 pb-2">
                          {category.title}
                        </h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                className="text-gray-300 text-sm hover:text-blue-400 hover:translate-x-1 transition-all duration-200 block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/case-studies"
            className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
              isActive("/case-studies")
                ? "text-blue-600 bg-blue-50"
                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Case Studies
          </Link>

          <Link
            to="/blog"
            className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
              isActive("/blog")
                ? "text-blue-600 bg-blue-50"
                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Blog
          </Link>

          {/* About-Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/about-us"
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                isActive("/about-us")
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span>About-Us</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "about" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            {activeDropdown === "about" && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-xl py-2 z-50 min-w-[220px] border border-gray-200"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                {aboutUsData.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className={`block px-4 py-2.5 transition-colors rounded-lg mx-1 ${
                      location.pathname === item.link
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
              isActive("/contact")
                ? "text-blue-600 bg-blue-50"
                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Contact Us
          </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay with Blur */}
            <div
              className="lg:hidden fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md z-40 transition-opacity duration-500"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Slide-in Menu with Modern Design */}
            <div
              className={`lg:hidden fixed top-0 right-0 h-full w-[320px] max-w-[90vw] bg-gradient-to-br from-white via-blue-50/30 to-white shadow-2xl z-50 transform transition-all duration-500 ease-out ${
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
              style={{
                boxShadow: "0 0 50px rgba(0, 0, 0, 0.3), -10px 0 60px rgba(59, 130, 246, 0.15)"
              }}
            >
              {/* Menu Header with Gradient */}
              <div className="relative flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-sm"></div>
                <Link
                  to="/"
                  className="relative flex items-center space-x-3 z-10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                      <span className="text-white font-extrabold text-xl">D</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-xl font-bold text-white">
                    Dev<span className="text-blue-100 font-extrabold">metasol</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative z-10 p-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-200 active:scale-95 shadow-lg border border-white/20"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items with Icons */}
              <div className="overflow-y-auto h-[calc(100vh-100px)] custom-scrollbar">
                <nav className="flex flex-col p-5 space-y-3">
                  {/* Menu Item Component */}
                  {[
                    { path: "/", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                    { path: "/services", label: "Services", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                    { path: "/hire-an-expert", label: "Hire An Expert", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                    { path: "/case-studies", label: "Case Studies", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                    { path: "/blog", label: "Blog", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
                    { path: "/about-us", label: "About-Us", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { path: "/contact", label: "Contact Us", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  ].map((item, index) => {
                    const active = isActive(item.path);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`group relative flex items-center space-x-4 font-semibold transition-all duration-300 py-4 px-5 rounded-2xl overflow-hidden ${
                          active
                            ? "text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/50 scale-105"
                            : "text-slate-700 bg-white/80 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 hover:shadow-md hover:scale-[1.02] active:scale-100 border border-gray-100"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isMobileMenuOpen ? "slideInRight 0.4s ease-out forwards" : "none"
                        }}
                      >
                        {/* Active Background Glow */}
                        {active && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl"></div>
                        )}
                        
                        {/* Icon */}
                        <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          active 
                            ? "bg-white/20 text-white shadow-lg" 
                            : "bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 group-hover:from-blue-200 group-hover:to-blue-100 group-hover:scale-110"
                        }`}>
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
                              d={item.icon}
                            />
                          </svg>
                        </div>
                        
                        {/* Label */}
                        <span className="relative z-10 flex-1 text-base">{item.label}</span>
                        
                        {/* Arrow Icon for Active */}
                        {active && (
                          <svg
                            className="relative z-10 w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                        
                        {/* Hover Effect Border */}
                        {!active && (
                          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

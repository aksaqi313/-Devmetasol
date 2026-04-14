import { useEffect, useState } from "react";
import webVideo from "../assets/video.mp4";
import InnovativeBusinessModel from "../components/InnovativeBusinessModel";
import BenefitsOfSumatoERP from "../components/BenefitsOfSumatoERP";
import ClientTestimonials from "../components/ClientTestimonials";
import OurClients from "../components/OurClients";
import AppDownload from "../components/AppDownload";
import BusinessManagementHero from "../components/BusinessManagementHero";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const OurProduct = () => {
  const [activeTab, setActiveTab] = useState<"features" | "demo">("features");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'KingTechSol ERP',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'Enterprise Resource Planning software that helps businesses grow with customized experiences and complex challenge solutions.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for pricing'
    }
  };

  const erpModules = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Inventory Control",
      description: "Real-time stock tracking and warehouse management"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "HR & Payroll",
      description: "Employee management, attendance, and payroll processing"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Sales & CRM",
      description: "Lead tracking, sales pipeline, and customer relationships"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" 
        stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Purchase Management",
      description: "Vendor management, PO processing, and procurement"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Reports & Analytics",
      description: "Real-time dashboards and business intelligence"
    }
  ];

  const stats = [
    { value: "500+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "50+", label: "Modules" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="KingTechSol ERP - Enterprise Resource Planning Software"
        description="KingTechSol ERP helps your business grow beyond expectations. We are a trusted ERP services partner to create customized experiences and solve complex challenges. Available on Web and Mobile."
        keywords="KingTechSol ERP, enterprise resource planning, ERP software, business management software, ERP solutions, mobile ERP, web ERP, business automation"
        canonicalUrl="/our-product"
        structuredData={productSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Product', url: '/our-product' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1a3a] via-[#0f2847] to-[#1a365d] relative overflow-hidden pt-20 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo & Title */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-medium">Enterprise Solution</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">KingTechSol</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ERP</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Transform your business operations with our comprehensive Enterprise Resource Planning solution.
                Streamline processes, boost productivity, and drive growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-10">
              <button
                onClick={() => setActiveTab("features")}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                  activeTab === "features"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab("demo")}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 ${
                  activeTab === "demo"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Watch Demo
              </button>
            </div>

            {/* Content Area */}
            {activeTab === "features" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {erpModules.map((module, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                    <p className="text-white/70">{module.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 overflow-hidden">
                  <video
                    src={webVideo}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-xl shadow-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                href="/schedule-call"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span className="font-semibold">Web Application</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
              <span className="font-semibold">iOS & Android</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
              </svg>
              <span className="font-semibold">Desktop Ready</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
              <span className="font-semibold">Cloud Hosted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <InnovativeBusinessModel />
      <BenefitsOfSumatoERP />
      <ClientTestimonials />
      <OurClients />
      <AppDownload />
      <BusinessManagementHero />
      <AllFooter />
    </div>
  );
};

export default OurProduct;

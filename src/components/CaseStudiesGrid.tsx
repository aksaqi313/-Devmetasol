import { useState } from "react";
import SumatoERPImage from "../assets/sumato-erp-title.webp.bv.webp";

const CaseStudiesGrid = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      projectName: "SkipAline",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "SKIPALINE",
      devices: "mobile",
      description: "A comprehensive communication platform designed to streamline business communications with advanced features and seamless integration.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      duration: "6 months",
      teamSize: "8 members",
      results: "Increased user engagement by 45% and reduced communication costs by 30%",
    },
    {
      id: 2,
      projectName: "PM ERP",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "PM ERP",
      devices: "laptop",
      description: "Enterprise Resource Planning system that automates business processes and provides real-time insights for better decision making.",
      technologies: ["React", "Python", "PostgreSQL", "Docker"],
      duration: "12 months",
      teamSize: "15 members",
      results: "Improved operational efficiency by 60% and reduced manual work by 70%",
    },
    {
      id: 3,
      projectName: "MoneyClime",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "MC",
      devices: "laptop",
      description: "Financial management platform that helps businesses track expenses, manage budgets, and generate comprehensive financial reports.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      duration: "8 months",
      teamSize: "10 members",
      results: "Helped clients save 25% on operational costs and improved financial visibility",
    },
    {
      id: 4,
      projectName: "Cyerdit Wallet",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "CYERDIT",
      devices: "both",
      description: "Secure digital wallet application supporting multiple cryptocurrencies with advanced security features and user-friendly interface.",
      technologies: ["React Native", "Blockchain", "Node.js", "Firebase"],
      duration: "10 months",
      teamSize: "12 members",
      results: "Processed over $5M in transactions with 99.9% uptime and zero security breaches",
    },
    {
      id: 5,
      projectName: "Clubzy",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "C CLUBZY",
      devices: "laptop",
      description: "Social networking platform for clubs and communities to connect, organize events, and manage memberships effectively.",
      technologies: ["Next.js", "Express.js", "MongoDB", "Socket.io"],
      duration: "7 months",
      teamSize: "9 members",
      results: "Grew to 50K+ active users within 6 months of launch",
    },
    {
      id: 6,
      projectName: "Appselec",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "appselec",
      devices: "both",
      description: "Electrical installation service marketplace connecting customers with certified electricians for quick and reliable service delivery.",
      technologies: ["React", "React Native", "Node.js", "PostgreSQL"],
      duration: "9 months",
      teamSize: "11 members",
      results: "Completed 10,000+ service requests with 4.8/5 average rating",
    },
    {
      id: 7,
      projectName: "Beehive",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "BEEHIVE",
      devices: "both",
      description: "Collaborative workspace platform enabling teams to work together efficiently with real-time collaboration tools and project management.",
      technologies: ["Angular", "NestJS", "MongoDB", "WebRTC"],
      duration: "11 months",
      teamSize: "14 members",
      results: "Increased team productivity by 40% and reduced project completion time by 35%",
    },
    {
      id: 8,
      projectName: "Caribbean Airline Solutions",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "CAS",
      devices: "laptop",
      description: "Comprehensive airline management system handling bookings, flight operations, crew management, and passenger services.",
      technologies: ["React", "Java Spring", "Oracle DB", "Kubernetes"],
      duration: "18 months",
      teamSize: "20 members",
      results: "Handled 2M+ bookings annually with 99.95% system reliability",
    },
    {
      id: 9,
      projectName: "QRIPIT",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "QRIP IT",
      devices: "both",
      description: "QR code generation and management platform for businesses to create, track, and analyze QR code campaigns effectively.",
      technologies: ["React", "React Native", "Node.js", "MongoDB"],
      duration: "5 months",
      teamSize: "7 members",
      results: "Generated 1M+ QR codes with 95% scan rate and high user satisfaction",
    },
    {
      id: 10,
      projectName: "QRIPIT (App)",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "QRIP IT",
      devices: "both",
      description: "Mobile application for QR code scanning and management with offline capabilities and advanced analytics.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      duration: "4 months",
      teamSize: "6 members",
      results: "100K+ downloads with 4.7/5 app store rating",
    },
    {
      id: 11,
      projectName: "Rememball (Website)",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "rememball",
      devices: "both",
      description: "Web-based reminder and task management platform helping users stay organized and never miss important deadlines.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
      duration: "6 months",
      teamSize: "8 members",
      results: "Helped 25K+ users manage their tasks with 90% task completion rate",
    },
    {
      id: 12,
      projectName: "Rememball (App)",
      tagline: "Delivering Communication Solutions without compromise.",
      logo: "rememball",
      devices: "both",
      description: "Mobile application for reminders with smart notifications, location-based alerts, and seamless synchronization.",
      technologies: ["React Native", "Firebase", "Push Notifications", "iOS/Android"],
      duration: "5 months",
      teamSize: "7 members",
      results: "50K+ active users with 4.6/5 rating and 85% daily active users",
    },
  ];

  const getDeviceIcon = (device: string) => {
    if (device === "mobile") {
      return (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    } else if (device === "laptop") {
      return (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    } else {
      return (
        <div className="flex gap-0.5">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      );
    }
  };

  const selectedCaseStudy = caseStudies.find((study) => study.id === selectedStudy);

  return (
    <>
      <section className="bg-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study.id)}
                className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col transform hover:-translate-y-1"
              >
                {/* Top Section - Logos */}
                <div className="p-3 sm:p-4 flex justify-between items-start">
                  {/* Devmetasol Logo */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">D</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-800">
                      Devmetasol
                    </span>
                  </div>
                  
                  {/* Project Logo */}
                  <div className="text-right">
                    <div className="text-[10px] sm:text-xs font-bold text-gray-700">
                      {study.logo}
                    </div>
                  </div>
                </div>

                {/* Content Section - Compact */}
                <div className="px-3 sm:px-4 pb-3">
                  {/* Project Case Study Label - Stacked */}
                  <div className="mb-2">
                    <div className="text-[11px] sm:text-xs font-bold text-gray-900">Project</div>
                    <div className="text-sm sm:text-base font-bold text-green-600">Case Study</div>
                  </div>

                  {/* Subtitle */}
                  <div className="text-[10px] sm:text-xs text-gray-600 mb-3">
                    {study.projectName}
                  </div>
                </div>

                {/* Device Mockup Section - Compact */}
                <div className="relative bg-white px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-center h-32 sm:h-36">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Device Mockups based on device type - Smaller */}
                    {study.devices === "mobile" ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-14 h-22 sm:w-16 sm:h-28 bg-gray-800 rounded-xl p-1 shadow-lg">
                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={SumatoERPImage}
                              alt={study.projectName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="w-14 h-22 sm:w-16 sm:h-28 bg-gray-800 rounded-xl p-1 shadow-lg">
                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={SumatoERPImage}
                              alt={study.projectName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : study.devices === "laptop" ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-24 h-14 sm:w-28 sm:h-16 bg-gray-800 rounded-lg shadow-lg relative">
                          <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gray-700 rounded-b-lg"></div>
                          <div className="w-full h-full bg-white rounded-t-lg overflow-hidden p-0.5">
                            <img
                              src={SumatoERPImage}
                              alt={study.projectName}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        </div>
                        <div className="w-24 h-14 sm:w-28 sm:h-16 bg-gray-800 rounded-lg shadow-lg relative">
                          <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gray-700 rounded-b-lg"></div>
                          <div className="w-full h-full bg-white rounded-t-lg overflow-hidden p-0.5">
                            <img
                              src={SumatoERPImage}
                              alt={study.projectName}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-14 h-22 sm:w-16 sm:h-28 bg-gray-800 rounded-xl p-1 shadow-lg">
                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={SumatoERPImage}
                              alt={study.projectName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="w-24 h-14 sm:w-28 sm:h-16 bg-gray-800 rounded-lg shadow-lg relative">
                          <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gray-700 rounded-b-lg"></div>
                          <div className="w-full h-full bg-white rounded-t-lg overflow-hidden p-0.5">
                            <img
                              src={SumatoERPImage}
                              alt={study.projectName}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Section - Project Name - Large and Bold */}
                <div className="bg-gray-50 px-3 sm:px-4 py-3 sm:py-4 border-t border-gray-200">
                  <h4 className="text-center text-base sm:text-lg font-bold text-gray-900">
                    {study.projectName}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Modal for Case Study Details */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden transform animate-slideUp border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Premium Modal Header */}
            <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStudy(null);
                }}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/30 shadow-lg z-50 cursor-pointer"
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/25 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white/30">
                  <span className="text-white font-bold text-2xl">D</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1">{selectedCaseStudy.projectName}</h2>
                  <p className="text-white/90 text-base font-medium">{selectedCaseStudy.logo}</p>
                </div>
              </div>
              
              <div className="relative flex items-center gap-3">
                <span className="bg-white/25 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold border border-white/30 shadow-lg">
                  Case Study
                </span>
                <div className="bg-white/25 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 border border-white/30 shadow-lg">
                  {getDeviceIcon(selectedCaseStudy.devices)}
                  <span className="capitalize">{selectedCaseStudy.devices === "both" ? "Mobile & Web" : selectedCaseStudy.devices}</span>
                </div>
              </div>
            </div>

            {/* Premium Modal Content */}
            <div className="p-8 md:p-10 overflow-y-auto max-h-[calc(92vh-280px)]">
              {/* Overview Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">Overview</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base pl-3">{selectedCaseStudy.description}</p>
              </div>

              {/* Tagline Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">Tagline</h3>
                </div>
                <p className="text-gray-600 italic text-lg pl-3 font-medium">"{selectedCaseStudy.tagline}"</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-base font-bold text-gray-800">Duration</span>
                  </div>
                  <p className="text-2xl font-extrabold text-blue-700">{selectedCaseStudy.duration}</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200/50 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-base font-bold text-gray-800">Team Size</span>
                  </div>
                  <p className="text-2xl font-extrabold text-indigo-700">{selectedCaseStudy.teamSize}</p>
                </div>
              </div>

              {/* Technologies Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-3 pl-3">
                  {selectedCaseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-l-4 border-green-500 rounded-2xl p-6 shadow-lg mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Results & Achievements</h3>
                </div>
                <p className="text-gray-800 leading-relaxed text-base font-medium">{selectedCaseStudy.results}</p>
              </div>

              {/* Project Image */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 p-8 border border-gray-200 shadow-xl">
                <img
                  src={SumatoERPImage}
                  alt={selectedCaseStudy.projectName}
                  className="w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default CaseStudiesGrid;

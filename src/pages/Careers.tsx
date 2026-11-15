import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Senior ASP.NET Developer - AWS & AI Integration',
    description: 'Join a US-based business operation and work 100% remotely with international teams. Seeking Senior ASP.NET Developer with 5-10 years experience, AWS, and AI/LLM integration skills.',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Devmetasol',
      sameAs: 'https://devmetasol.com'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressCountry: 'PK'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: 2000,
        maxValue: 3000,
        unitText: 'MONTH'
      }
    },
    employmentType: 'FULL_TIME',
    jobLocationType: 'TELECOMMUTE',
    validThrough: '2026-11-20T23:59:59Z'
  };

  const aspNetWhatsAppUrl =
    "https://wa.me/923396766667?text=" +
    encodeURIComponent(
      "Hello! I am applying for the Senior ASP.NET Developer (AWS & AI Integration) position at Devmetasol.\n\n" +
      "1. Full Name:\n" +
      "2. Years of Experience:\n" +
      "3. Expected Monthly Salary (USD):\n" +
      "4. Portfolio / GitHub Link:\n" +
      "5. English Intro Video/Audio Link (60-90s):\n\n" +
      "I am attaching my updated CV."
    );

  const aspNetMailtoUrl =
    "mailto:rabia.talent@devmetasol.com?subject=" +
    encodeURIComponent("Job Application: Senior ASP.NET Developer – AWS & AI Integration") +
    "&body=" +
    encodeURIComponent(
      "Dear Devmetasol Talent Acquisition Team,\n\n" +
      "I am submitting my application for the Senior ASP.NET Developer – AWS & AI Integration position.\n\n" +
      "MANDATORY APPLICATION DETAILS:\n" +
      "1. Full Name:\n" +
      "2. Contact Number / WhatsApp:\n" +
      "3. Total Years of Experience (5-10 Years):\n" +
      "4. Expected Monthly Salary (USD 2,000 - 3,000):\n" +
      "5. Portfolio / GitHub Profile Link:\n" +
      "6. English Intro Video / Audio Link (60-90 seconds):\n" +
      "   (Covering professional background, technical projects, and international client communication experience)\n\n" +
      "Please find my updated CV attached to this email.\n\n" +
      "Best regards,\n"
    );

  const additionalPositions = [
    {
      title: "Senior React / Next.js Developer",
      department: "Frontend Engineering",
      location: "100% Remote / US EST",
      type: "Full-time",
      experience: "4–7 Years",
      description: "Build high-performance web applications using modern React, TypeScript, Next.js, and Tailwind CSS."
    },
    {
      title: "UI/UX & Product Designer",
      department: "Product Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3–6 Years",
      description: "Design intuitive user interfaces, design systems, and wireframes for web and mobile products in Figma."
    },
    {
      title: "Cloud & DevOps Engineer",
      department: "Cloud Architecture",
      location: "Remote",
      type: "Full-time",
      experience: "4–8 Years",
      description: "Manage AWS/Azure cloud infrastructure, CI/CD pipelines, Kubernetes, Docker, and system observability."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Growth & Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3–5 Years",
      description: "Execute performance marketing campaigns, SEO audits, paid media acquisition, and analytics reporting."
    }
  ];

  const benefits = [
    {
      icon: "💵",
      title: "USD-Denominated Salaries",
      desc: "Competitive compensation benchmarked against international standards with performance bonuses."
    },
    {
      icon: "🌍",
      title: "100% Remote Flexibility",
      desc: "Work comfortably from your home office with international enterprise clients and global teams."
    },
    {
      icon: "🚀",
      title: "Cutting-Edge AI & Cloud",
      desc: "Get hands-on exposure to advanced LLM integrations, AWS microservices, and modern architectures."
    },
    {
      icon: "📈",
      title: "Rapid Career Progression",
      desc: "Transparent leadership tracks, annual appraisals, and continuous learning opportunities."
    }
  ];

  return (
    <>
      <SEO
        title="Careers at Devmetasol - We're Hiring Senior ASP.NET Developer"
        description="Explore remote career opportunities at Devmetasol. Now hiring Senior ASP.NET Developer (AWS & AI Integration) - Full-Time, 100% Remote, USD 2,000-3,000/Month."
        keywords="Devmetasol careers, Senior ASP.NET Developer, remote net developer jobs, AWS C# developer, AI integration engineer, tech jobs remote"
        canonicalUrl="/about-us/careers"
        structuredData={jobPostingSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' },
          { name: 'Careers', url: '/about-us/careers' }
        ]}
      />

      <div className="bg-slate-50 min-h-screen py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs sm:text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              We're Hiring • Global Remote Positions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6">
              Build Your Career with <span className="text-blue-600">Devmetasol</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join a high-growth US-oriented digital solutions agency. Work remotely with international 
              teams, build scalable enterprise architectures, and get compensated in USD.
            </p>
          </div>

          {/* ============================================================ */}
          {/* FEATURED JOB POSTING: SENIOR ASP.NET DEVELOPER */}
          {/* ============================================================ */}
          <section id="featured-job" className="mb-16 sm:mb-20">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-600/30 overflow-hidden relative">
              
              {/* Hot Opening Ribbon */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <span>WE'RE HIRING • FEATURED OPENING</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                  <span>📅 Deadline: Friday, 20 November 2026</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-12">
                
                {/* Header & Meta */}
                <div className="border-b border-slate-100 pb-8 mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                    SENIOR ASP.NET DEVELOPER – AWS & AI INTEGRATION 💻🤖
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                    🌎 Join a US-based business operation and work 100% remotely with international teams having a clear English communication accent.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Employment</p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">Full-Time</p>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Work Model</p>
                      <p className="text-sm font-bold text-emerald-600 mt-0.5">100% Remote</p>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Experience</p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">5–10 Years</p>
                    </div>
                    <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200">
                      <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">Salary Budget</p>
                      <p className="text-sm font-bold text-blue-700 mt-0.5">USD 2,000–3,000/Mo</p>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Working Hours</p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">US EST Zone</p>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Eligibility</p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">Male Candidates</p>
                    </div>
                  </div>

                  {/* Dual Action Buttons (Top) */}
                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={aspNetWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-md hover:shadow-green-500/30"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
                      </svg>
                      <span>Apply via WhatsApp (+92 339 6766667)</span>
                    </a>

                    <a
                      href={aspNetMailtoUrl}
                      className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-md hover:shadow-blue-500/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Apply via Email (rabia.talent@devmetasol.com)</span>
                    </a>
                  </div>
                </div>

                {/* 2-Column Content: Responsibilities & Technical Expertise */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  
                  {/* Responsibilities */}
                  <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span>💻</span> Key Responsibilities
                    </h3>
                    <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Develop enterprise applications using ASP.NET Core and C#.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Build robust RESTful APIs and backend microservices.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Design and optimize complex SQL Server databases and queries.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Manage AWS cloud deployment, serverless architectures, and infrastructure.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Integrate modern AI/ML solutions and LLM APIs into workflows.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Develop secure, highly scalable microservices architectures.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Conduct thorough code reviews and lead technical discussions.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold shrink-0">•</span>
                        <span>Troubleshoot production incidents and optimize app performance.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Technical Expertise & Additional Requirements */}
                  <div className="space-y-6">
                    {/* Required Technical Stack */}
                    <div className="bg-blue-50/50 p-6 sm:p-7 rounded-2xl border border-blue-200/80">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span>🎯</span> Required Technical Expertise
                      </h3>
                      <div className="space-y-2.5 text-sm sm:text-base text-slate-800">
                        <p className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✅</span> C#, ASP.NET Core, MVC & Web API
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✅</span> Entity Framework & SQL Server
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✅</span> AWS Cloud Services & Deployment
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✅</span> Microservices Architecture
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✅</span> AI/ML & LLM API Integration
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✅</span> CI/CD, Application Security & Performance Optimization
                        </p>
                      </div>
                    </div>

                    {/* Additional Requirements */}
                    <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span>🌟</span> Candidate Requirements
                      </h3>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400">•</span>
                          <span><strong>Experience:</strong> 5–10 years of professional software development.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400">•</span>
                          <span><strong>Communication:</strong> Excellent English communication skills (good international accent).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400">•</span>
                          <span><strong>Client Interaction:</strong> Experience handling direct international client discussions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400">•</span>
                          <span><strong>Leadership:</strong> Experience conducting technical interviews & coding assessments.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400">•</span>
                          <span><strong>Availability:</strong> Full availability during US EST working hours.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-400">•</span>
                          <span><strong>Gender:</strong> Male candidates.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* MANDATORY APPLICATION REQUIREMENTS (Crucial Alert Box) */}
                <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-300 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">📩</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-amber-950 mb-2">
                        MANDATORY APPLICATION REQUIREMENTS
                      </h3>
                      <p className="text-sm sm:text-base text-amber-900 mb-4">
                        All applicants <strong>MUST</strong> provide all 4 of the following details when submitting their application. 
                        Applications missing any of these items will <strong>NOT</strong> be shortlisted:
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/80 backdrop-blur p-3 rounded-xl border border-amber-200 flex items-center gap-3">
                          <span className="text-xl">1️⃣</span>
                          <span className="text-sm font-bold text-slate-900">Updated CV (PDF Format)</span>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-xl border border-amber-200 flex items-center gap-3">
                          <span className="text-xl">2️⃣</span>
                          <span className="text-sm font-bold text-slate-900">Portfolio / GitHub Profile Link</span>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-xl border border-amber-200 flex items-center gap-3">
                          <span className="text-xl">3️⃣</span>
                          <span className="text-sm font-bold text-slate-900">Expected Monthly Salary (USD)</span>
                        </div>
                        <div className="bg-white/80 backdrop-blur p-3 rounded-xl border border-amber-200 flex items-center gap-3">
                          <span className="text-xl">4️⃣</span>
                          <span className="text-sm font-bold text-slate-900">English Intro Video/Audio Link (60–90 sec)</span>
                        </div>
                      </div>

                      <div className="bg-white/90 p-4 rounded-xl border border-amber-300/60 text-xs sm:text-sm text-amber-950 space-y-1">
                        <p className="font-bold flex items-center gap-1.5">
                          🎥 Your 60–90 second English introduction must briefly cover:
                        </p>
                        <p className="pl-5">• Your professional background & career highlights</p>
                        <p className="pl-5">• Core technical expertise and key enterprise projects delivered</p>
                        <p className="pl-5">• Experience communicating and collaborating with international clients</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recruitment Stages & Bottom CTAs */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">
                        🔍 Three-Stage Recruitment Process
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">1. HR Screening</span>
                        <span>→</span>
                        <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">2. Technical Interview & Assessment</span>
                        <span>→</span>
                        <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-emerald-400 font-semibold">3. Final Selection</span>
                      </div>
                    </div>

                    {/* Dual Action Buttons (Bottom) */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                      <a
                        href={aspNetWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md text-center"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
                        </svg>
                        <span>WhatsApp: +92 339 6766667</span>
                      </a>

                      <a
                        href={aspNetMailtoUrl}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md text-center"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Email: rabia.talent@devmetasol.com</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* OTHER OPEN POSITIONS */}
          {/* ============================================================ */}
          <section className="mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Additional Open Positions
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1">
                  Explore other technical and growth opportunities across our distributed teams.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {additionalPositions.map((pos, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:border-blue-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {pos.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                        {pos.department}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">
                      {pos.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                      <span>🌍 {pos.location}</span>
                      <span>⏳ {pos.experience}</span>
                      <span>⏰ {pos.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`mailto:rabia.talent@devmetasol.com?subject=${encodeURIComponent(`Job Application: ${pos.title}`)}&body=${encodeURIComponent(`Dear Devmetasol Talent Team,\n\nI am applying for the ${pos.title} position.\n\nPlease find my resume and portfolio attached.\n\nBest regards,`)}`}
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
                    >
                      <span>Apply via Email</span>
                    </a>
                    <a
                      href={`https://wa.me/923396766667?text=${encodeURIComponent(`Hi Devmetasol Talent Team, I am interested in applying for the ${pos.title} position.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* BENEFITS & PERKS */}
          {/* ============================================================ */}
          <section className="mb-16 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Why Work with Devmetasol?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We empower our developers with global projects, enterprise standards, and supportive leadership.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-4 block">{b.icon}</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* GENERAL TALENT POOL APPLICATION */}
          {/* ============================================================ */}
          <section className="bg-gradient-to-br from-slate-900 via-[#0f223d] to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-slate-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Exact Role?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We are constantly seeking brilliant developers, cloud engineers, and product specialists. 
              Share your resume and profile directly with our talent team via email or WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:rabia.talent@devmetasol.com?subject=General%20Talent%20Application%20-%20Devmetasol"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email: rabia.talent@devmetasol.com</span>
              </a>

              <a
                href="https://wa.me/923396766667?text=Hello%20Devmetasol%20Talent%20Team%2C%20I%20would%20like%20to%20submit%20my%20general%20application."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
                </svg>
                <span>WhatsApp: +92 339 6766667</span>
              </a>
            </div>
          </section>

        </div>
      </div>

      <AllFooter />
    </>
  );
};

export default Careers;

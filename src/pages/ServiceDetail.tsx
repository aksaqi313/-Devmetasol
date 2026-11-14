import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const ServiceDetail = () => {
  const { serviceName } = useParams<{ serviceName: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceName]);

  // Convert URL slug to readable title
  const getTitle = (slug: string | undefined) => {
    if (!slug) return "Service";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const title = getTitle(serviceName);

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEO
        title={`${title} Services`}
        description={`Devmetasol provides professional ${title} services. Learn more about our ${title.toLowerCase()} solutions and how we can help your business grow.`}
        canonicalUrl={`/services/${serviceName}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: title, url: `/services/${serviceName}` }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                About {title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                At Devmetasol, we specialize in delivering exceptional {title.toLowerCase()} services 
                tailored to meet your unique business needs. Our team of experienced professionals 
                combines technical expertise with innovative solutions to help you achieve your goals 
                and drive measurable business results.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We understand that every business is unique, which is why we take a personalized 
                approach to every project. Our commitment to excellence, customer satisfaction, and 
                continuous innovation sets us apart in the industry. With a proven track record of 
                successful implementations, we help businesses transform their operations and achieve 
                sustainable growth.
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
                </div>
                <p className="text-gray-600">
                  Our skilled professionals bring years of experience and industry knowledge to every project.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fast Delivery</h3>
                </div>
                <p className="text-gray-600">
                  We understand the importance of timely delivery and work efficiently to meet your deadlines.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cost-Effective</h3>
                </div>
                <p className="text-gray-600">
                  We offer competitive pricing without compromising on quality or service excellence.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Secure & Reliable</h3>
                </div>
                <p className="text-gray-600">
                  Your data and projects are handled with the highest level of security and confidentiality.
                </p>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Consultation & Analysis",
                    description: "We begin by understanding your business requirements, challenges, and objectives through comprehensive consultation sessions."
                  },
                  {
                    step: "02",
                    title: "Strategy & Planning",
                    description: "Our team develops a customized strategy and detailed project plan tailored to your specific needs and timeline."
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    description: "We execute the plan with precision, keeping you informed at every step and ensuring quality deliverables."
                  },
                  {
                    step: "04",
                    title: "Support & Optimization",
                    description: "We provide ongoing support and continuously optimize solutions to ensure maximum value and performance."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-base sm:text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
                Contact us today to discuss your {title.toLowerCase()} needs and discover how we can help your business grow and achieve its full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base"
                >
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllFooter />
    </div>
  );
};

export default ServiceDetail;

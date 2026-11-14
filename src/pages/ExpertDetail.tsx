import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const ExpertDetail = () => {
  const { expertName } = useParams<{ expertName: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [expertName]);

  // Convert URL slug to readable title
  const getTitle = (slug: string | undefined) => {
    if (!slug) return "Expert";
    return slug
      .split("-")
      .map((word) => {
        // Handle special cases
        if (word.toLowerCase() === "ai" || word.toLowerCase() === "ml") {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const title = getTitle(expertName);

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEO
        title={`Hire ${title} - Expert Professionals`}
        description={`Hire skilled ${title} professionals from Devmetasol. Get expert ${title.toLowerCase()} talent for your projects with flexible engagement models.`}
        canonicalUrl={`/hire-an-expert/${expertName}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Hire an Expert', url: '/hire-an-expert' },
          { name: `Hire ${title}`, url: `/hire-an-expert/${expertName}` }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hire {title}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Hire a {title} from Devmetasol?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                Looking to hire a skilled {title.toLowerCase()}? Devmetasol provides access to top-tier 
                professionals who are ready to join your team and contribute to your project's success. 
                Our experts are carefully vetted through a comprehensive screening process and bring years 
                of industry experience, proven expertise, and a commitment to excellence.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Whether you need short-term support for a specific project or a long-term team member 
                to scale your operations, we can connect you with the right professional who matches 
                your technical requirements, company culture, and business objectives. Our flexible 
                engagement models ensure you get the right talent at the right time.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Vetted Professionals</h3>
                </div>
                <p className="text-gray-600">
                  All our experts undergo a rigorous screening process to ensure they meet our high standards.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Quick Onboarding</h3>
                </div>
                <p className="text-gray-600">
                  Get your expert onboarded quickly and start making an impact from day one.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Flexible Engagement</h3>
                </div>
                <p className="text-gray-600">
                  Choose from full-time, part-time, or project-based engagements that fit your needs.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Proven Track Record</h3>
                </div>
                <p className="text-gray-600">
                  Our experts have a proven track record of delivering successful projects for clients worldwide.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Industry Best Practices",
                  "Modern Technologies",
                  "Problem Solving",
                  "Team Collaboration",
                  "Project Management",
                  "Quality Assurance"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Hire a {title}?</h2>
              <p className="text-base sm:text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
                Get in touch with us today and let's discuss how we can help you find the perfect professional 
                for your team. Our recruitment specialists are ready to assist you in finding the ideal candidate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/hire-an-expert")}
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
                >
                  View All Experts
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base"
                >
                  Contact Us
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

export default ExpertDetail;

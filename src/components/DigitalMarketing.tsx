import { Link } from "react-router-dom";

// import CustomSoftwareImage from "../assets/Custom-Software-Solutions.avif";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white text-xs sm:text-sm font-semibold shadow-md">
                Global Reach
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
              Digital Marketing
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 mt-1 sm:mt-2">
                Amplify Your Online Presence
              </span>
            </h1>

            <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-500">
                We build a powerful online presence for businesses to help them
                reach potential customers globally. Our experts optimize
                business growth with strategic planning and build valuable
                audiences to help you stay competitive.
              </p>

              <p>
                We believe in creating a powerful brand story, not only to win
                over the SERPs. Our marketing specialists are skilled with each
                campaign we manage that resonates with the user persona.
              </p>

              <p className="font-medium text-gray-800">
                We handle growing modern online challenges with strategic
                engagement channels for effective branding.
              </p>

              <p>
                We believe not in overnight success but in high authority &
                sustainable growth and lead generation with various digital
                marketing services.
              </p>
            </div>

            {/* Marketing Services Grid */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Core Services:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { name: "SEO", color: "bg-blue-100 text-blue-700" },
                  { name: "SMM", color: "bg-pink-100 text-pink-700" },
                  {
                    name: "Email Marketing",
                    color: "bg-orange-100 text-orange-700",
                  },
                  { name: "SEM", color: "bg-purple-100 text-purple-700" },
                  { name: "CRO", color: "bg-blue-100 text-blue-700" },
                  {
                    name: "Content Writing",
                    color: "bg-indigo-100 text-indigo-700",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`${service.color} p-4 rounded-xl text-center font-semibold shadow-sm hover:shadow-md transition duration-300`}
                  >
                    {service.name}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Free Audit
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition duration-300 w-full sm:w-auto"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right Side - Marketing Visualization */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Marketing Dashboard Visualization */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-4 shadow-2xl">
                <div className="bg-gray-800 rounded-2xl p-6">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <h3 className="text-white font-bold">
                        Marketing Analytics Dashboard
                      </h3>
                    </div>
                    <div className="text-gray-400 text-sm">Live Data</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700/50 p-4 rounded-xl">
                      <div className="text-gray-400 text-sm">
                        Website Traffic
                      </div>
                      <div className="text-2xl font-bold text-white">45.2K</div>
                      <div className="text-blue-400 text-sm flex items-center gap-1">
                        <span>↑ 24%</span>
                        <span>this month</span>
                      </div>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-xl">
                      <div className="text-gray-400 text-sm">
                        Conversion Rate
                      </div>
                      <div className="text-2xl font-bold text-white">3.8%</div>
                      <div className="text-blue-400 text-sm flex items-center gap-1">
                        <span>↑ 12%</span>
                        <span>this month</span>
                      </div>
                    </div>
                  </div>

                  {/* Engagement Channels */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Engagement Channels
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          channel: "Social Media",
                          value: 75,
                          color: "bg-blue-500",
                        },
                        { channel: "Email", value: 60, color: "bg-blue-500" },
                        { channel: "SEO", value: 85, color: "bg-purple-500" },
                        {
                          channel: "Paid Ads",
                          value: 45,
                          color: "bg-orange-500",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-24 text-white text-sm">
                            {item.channel}
                          </div>
                          <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full ${item.color} rounded-full`}
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                          <div className="text-white font-bold">
                            {item.value}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media Metrics */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="text-center p-3 bg-blue-500/20 rounded-xl">
                      <div className="text-2xl mb-1">📱</div>
                      <div className="text-white font-bold">12K</div>
                      <div className="text-gray-400 text-xs">Followers</div>
                    </div>
                    <div className="text-center p-3 bg-blue-500/20 rounded-xl">
                      <div className="text-2xl mb-1">📧</div>
                      <div className="text-white font-bold">85%</div>
                      <div className="text-gray-400 text-xs">Open Rate</div>
                    </div>
                    <div className="text-center p-3 bg-purple-500/20 rounded-xl">
                      <div className="text-2xl mb-1">🔍</div>
                      <div className="text-white font-bold">#1</div>
                      <div className="text-gray-400 text-xs">Ranking</div>
                    </div>
                    <div className="text-center p-3 bg-orange-500/20 rounded-xl">
                      <div className="text-2xl mb-1">📊</div>
                      <div className="text-white font-bold">3.2K</div>
                      <div className="text-gray-400 text-xs">Leads</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-2xl opacity-60"></div>

              {/* Success Badge */}
              <div className="absolute -bottom-4 left-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <div className="font-bold">+300%</div>
                    <div className="text-xs opacity-90">ROI Achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/Client Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              We've helped businesses across industries achieve their digital
              marketing goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 italic">
                "Their SEO strategy increased our organic traffic by 300% in
                just 6 months!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600 text-sm">
                    Marketing Director, TechCorp
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 italic">
                "The social media campaigns generated quality leads that
                actually converted."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900">Michael Chen</div>
                  <div className="text-gray-600 text-sm">CEO, RetailPro</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 italic">
                "Email marketing strategy delivered 5x ROI. Absolutely
                phenomenal results!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900">Priya Sharma</div>
                  <div className="text-gray-600 text-sm">Founder, EcoStore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;

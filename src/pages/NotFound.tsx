import { Link } from "react-router-dom";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect. Return to Devmetasol homepage."
        noindex={true}
      />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl sm:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
            >
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Services
              </Link>
              <Link
                to="/hire-an-expert"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Hire An Expert
              </Link>
              <Link
                to="/case-studies"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Case Studies
              </Link>
              <Link
                to="/about-us"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AllFooter />
    </div>
  );
};

export default NotFound;

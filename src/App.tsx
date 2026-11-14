import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import HireAnExpert from "./pages/HireAnExpert";
import AboutUs from "./pages/AboutUs";
import ScheduleCall from "./pages/ScheduleCall";
import EnterDetails from "./pages/EnterDetails";
import Blog from "./pages/Blog";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Careers from "./pages/Careers";
import Locations from "./pages/Locations";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import CloudInfrastructure from "./pages/CloudInfrastructure";
import QASupport from "./pages/QASupport";
import NextGenTechnologies from "./pages/NextGenTechnologies";
import DigitalMarketingService from "./pages/DigitalMarketingService";
import StaffAugmentation from "./pages/StaffAugmentation";
import ServiceDetail from "./pages/ServiceDetail";
import ExpertDetail from "./pages/ExpertDetail";
import NotFound from "./pages/NotFound";
import ChatbotWidget from "./components/ChatbotWidget";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire-an-expert" element={<HireAnExpert />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/about-us/accessibility-statement"
            element={<AccessibilityStatement />}
          />
          <Route
            path="/about-us/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/about-us/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us/cookie-policy" element={<CookiePolicy />} />
          <Route path="/about-us/careers" element={<Careers />} />
          <Route path="/about-us/blogs" element={<Blog />} />
          <Route path="/locations" element={<Locations />} />
          <Route
            path="/services/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route
            path="/services/cloud-infrastructure"
            element={<CloudInfrastructure />}
          />
          <Route path="/services/qa-support" element={<QASupport />} />
          <Route
            path="/services/next-gen-technologies"
            element={<NextGenTechnologies />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingService />}
          />
          <Route
            path="/services/staff-augmentation"
            element={<StaffAugmentation />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/schedule-call" element={<ScheduleCall />} />
          <Route path="/enter-details" element={<EnterDetails />} />
          {/* Dynamic Service Routes - Must be after specific service routes */}
          <Route path="/services/:serviceName" element={<ServiceDetail />} />
          {/* Dynamic Hire An Expert Routes */}
          <Route path="/hire-an-expert/:expertName" element={<ExpertDetail />} />
          {/* 404 Page - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App;

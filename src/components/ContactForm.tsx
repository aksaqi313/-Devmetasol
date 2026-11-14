import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+92",
    phoneNumber: "",
    services: "",
    organizationName: "",
    industry: "",
    budget: "",
    message: "",
    requiresNDA: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Devmetasol Team! I would like to discuss a project.\n\n` +
      `• Name: ${formData.fullName || "Not specified"}\n` +
      `• Email: ${formData.email || "Not specified"}\n` +
      `• Phone: ${formData.countryCode} ${formData.phoneNumber || ""}\n` +
      `• Service: ${formData.services || "General Inquiry"}\n` +
      `• Company: ${formData.organizationName || "N/A"}\n` +
      `• NDA Needed: ${formData.requiresNDA ? "Yes" : "No"}\n` +
      (formData.message ? `• Details: ${formData.message}` : "")
    );
    window.open(`https://wa.me/923320409566?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending / log inquiry
    console.log("Contact form submitted:", formData);

    setTimeout(() => {
      setIsSubmitting(false);

      toast.success("Thank you! Your message has been sent. Our team will contact you within 24 hours.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+92",
        phoneNumber: "",
        services: "",
        organizationName: "",
        industry: "",
        budget: "",
        message: "",
        requiresNDA: false,
      });
    }, 600);
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Let's Collaborate • Quick Turnaround
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Have A Project To Discuss? <span className="text-blue-600">We Are Ready.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Reach out through our direct channels or fill out the form below. Whether you need a dedicated development squad, custom software, or cloud consulting, we're here to help.
          </p>

          {/* Quick Contact Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/923320409566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
              </svg>
              <span>WhatsApp: +92 332 0409566</span>
            </a>

            <a
              href="mailto:careers@devmetasol.com"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>careers@devmetasol.com</span>
            </a>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span>Offices: Lahore, PK & Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name, Email, Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                />
              </div>

              {/* Phone Number with Country Code */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-xl border border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all overflow-hidden">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="px-3 py-3 bg-slate-50 border-r border-slate-200 text-xs sm:text-sm font-medium text-slate-700 focus:outline-none"
                  >
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+966">🇸🇦 +966</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+61">🇦🇺 +61</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="332 0409566"
                    required
                    className="flex-1 px-4 py-3 focus:outline-none text-slate-900 placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Services, Organization, Industry */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Services */}
              <div>
                <label
                  htmlFor="services"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Services You Need
                </label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 text-sm bg-white"
                >
                  <option value="">Please Select Service</option>
                  <option value="web-development">Web Application Development</option>
                  <option value="mobile-app">Mobile App Development (iOS / Android)</option>
                  <option value="custom-software">Custom Software & ERP</option>
                  <option value="ui-ux">UI/UX & Creative Design</option>
                  <option value="ai-ml">AI / Machine Learning & Automation</option>
                  <option value="cloud-devops">Cloud & DevOps Architecture</option>
                  <option value="digital-marketing">Digital Marketing & SEO</option>
                  <option value="dedicated-team">Dedicated Team / Staff Augmentation</option>
                </select>
              </div>

              {/* Organization Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Organization / Company
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp or Startup"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                />
              </div>

              {/* Industry */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 text-sm bg-white"
                >
                  <option value="">Please Select Industry</option>
                  <option value="technology">Technology & SaaS</option>
                  <option value="ecommerce">E-Commerce & Retail</option>
                  <option value="healthcare">Healthcare & MedTech</option>
                  <option value="fintech">Financial Services & Fintech</option>
                  <option value="realestate">Real Estate & PropTech</option>
                  <option value="education">Education & EdTech</option>
                  <option value="logistics">Logistics & Supply Chain</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: Budget Range */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Estimated Budget Range (USD)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 text-sm bg-white"
              >
                <option value="">Select Project Budget (Optional)</option>
                <option value="under-5k">Less than $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-30k">$15,000 - $30,000</option>
                <option value="30k-50k">$30,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>

            {/* Row 4: Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Project Details / Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your project requirements, goals, or questions..."
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm resize-none"
              />
            </div>

            {/* NDA Checkbox */}
            <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <input
                type="checkbox"
                id="requiresNDA"
                name="requiresNDA"
                checked={formData.requiresNDA}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label
                htmlFor="requiresNDA"
                className="text-xs sm:text-sm font-medium text-slate-700 cursor-pointer"
              >
                We require a Non-Disclosure Agreement (NDA) before sharing sensitive project details
              </label>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Us a Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-green-500/25"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
                </svg>
                <span>Chat Instantly on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

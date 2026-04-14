import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    services: "",
    organizationName: "",
    industry: "",
    message: "",
    requiresNDA: false,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast.success("Message sent successfully! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Reset form after successful submission
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      services: "",
      organizationName: "",
      industry: "",
      message: "",
      requiresNDA: false,
    });
  };

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          {/* Header Section */}
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Have A Project To Discuss? We Are Ready
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              If you have any specific project you want to discuss, email us at{" "}
              <a
                href="mailto:infomeernaib47@gmail.com"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
               KingTechSol
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+923304527519"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                +92 330 4527519
              </a>{" "}
              or fill out the form. We're here to help you!!!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Full Name, Email, Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johnexample@abc.com"
                  required
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-500 transition-colors">
                  <select className="px-2 py-2 border-0 bg-transparent focus:outline-none">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+92">🇵🇰 +92</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="555 123 4567"
                    required
                    className="flex-1 px-0 py-2 border-0 focus:outline-none"
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
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Services you need
                </label>
                <select
                  id="services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
                >
                  <option value="">Please Select</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
              </div>

              {/* Organization Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Organization name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="Please Select"
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Industry */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
                >
                  <option value="">Please Select</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you're looking for"
                required
                rows={4}
                className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* NDA Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="requiresNDA"
                name="requiresNDA"
                checked={formData.requiresNDA}
                onChange={handleChange}
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="requiresNDA"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                This Project requires an NDA
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-flex items-center gap-2"
              >
                Send us a message!
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

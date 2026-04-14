import { useState } from "react";

const HireExpertFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How Can I Hire An Expert?",
      answer:
        "To hire an expert, simply browse through our available professionals, review their profiles and portfolios, and select the expert that best matches your project requirements. You can contact us through our platform or reach out directly to discuss your needs. Our team will help you find the perfect match for your project.",
    },
    {
      question: "Can I Hire A Designer for A Short-term Project?",
      answer:
        "Yes, absolutely! We offer flexible hiring options including short-term projects. Whether you need a designer for a few days, weeks, or months, we can accommodate your timeline. Our flexible engagement models allow you to hire professionals for the exact duration you need without long-term commitments.",
    },
    {
      question: "Do You Offer Ongoing Maintenance After the Project Delivery?",
      answer:
        "Yes, we provide comprehensive ongoing maintenance and support services after project delivery. Our team offers bug fixes, updates, feature enhancements, and technical support to ensure your project continues to perform optimally. We offer various maintenance packages tailored to your specific needs.",
    },
    {
      question: "How Do You Ensure the Quality of Your Professionals?",
      answer:
        "We maintain strict quality standards through a rigorous vetting process. All our professionals undergo thorough technical assessments, portfolio reviews, and background checks. We also conduct regular performance evaluations and provide continuous training to ensure they stay updated with the latest technologies and best practices. Additionally, we gather client feedback to maintain high service standards.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-6 sm:mb-8 md:mb-10">
            <span className="text-blue-500">FAQs</span>
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-gray-50"
                >
                  <span className="font-semibold text-base sm:text-lg md:text-xl text-gray-900 pr-4 sm:pr-6">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform text-gray-600 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pt-0">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireExpertFAQ;

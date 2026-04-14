// FAQ.tsx
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How To Choose A Trusted Software Development Company?",
      answer:
        "When choosing a trusted software development company, look for proven experience, technical expertise, transparent communication, positive client testimonials, and a track record of delivering projects on time and within budget. Evaluate their portfolio, ask about their development process, and ensure they understand your business needs.",
    },
    {
      question: "How Much Time Does It Take To Complete The Software Development Process?",
      answer:
        "The timeline for software development varies based on project complexity, scope, and requirements. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed project timelines during the initial consultation and keep you updated throughout the development process.",
    },
    {
      question: "What Is The Life Cycle Of Your Software Development?",
      answer:
        "Our software development lifecycle follows a structured approach: Requirements gathering and analysis, system design, development and coding, quality assurance and testing, deployment, and ongoing maintenance and support. We use agile methodologies to ensure flexibility and continuous improvement throughout the process.",
    },
    {
      question: "How Your Developers Can Support My Team Growth?",
      answer:
        "Our developers can support your team growth through knowledge transfer, code reviews, best practices sharing, and collaborative development. We work alongside your team, providing mentorship and training to help build internal capabilities while delivering high-quality solutions.",
    },
    {
      question: "How Will Your Services Help My Business Grow?",
      answer:
        "Our services help your business grow by providing scalable digital solutions, improving operational efficiency, enhancing customer experiences, and enabling data-driven decision making. We create custom software that automates processes, reduces costs, and opens new revenue opportunities for your business.",
    },
    {
      question: "Do You Have Other Operational Branches?",
      answer:
        "We operate with a distributed team model, allowing us to serve clients globally while maintaining consistent quality and communication standards. Contact us to learn more about our operational locations and how we can best serve your specific needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-4">
            Got <span className="text-blue-500">Questions</span>? We've Got Answers!
          </h2>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-gray-50"
                >
                  <span className="font-medium text-sm sm:text-base md:text-lg text-gray-900 pr-3 sm:pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform text-gray-600 ${
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
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 md:pb-5 pt-0">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
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

export default FAQ;

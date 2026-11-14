
const CoreValues = () => {
  const coreValues = [
    {
      title: "Collaborative Excellence",
      description:
        "Our leadership team and professionals leverage global perspectives, extensive industry experience, and unwavering commitment to empower our teams, enabling them to deliver exceptional results and drive innovation.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "A client-focused methodology is fundamental to our success. We not only meet client requirements but consistently exceed industry quality standards, positioning our clients as market leaders in their respective sectors.",
    },
    {
      title: "Transparent Communication",
      description:
        "We maintain complete transparency through clear, consistent communication with our clients, fostering trust and building sustainable long-term strategic partnerships that deliver mutual value.",
    },
    {
      title: "Positive Innovation",
      description:
        "We maintain a positive, solution-oriented mindset across all organizational aspects, driving us to achieve significant milestones and establish industry leadership through continuous innovation.",
    },
    {
      title: "Professional Excellence",
      description:
        "Our commitment to exceeding client expectations, meeting critical deadlines, and delivering superior-quality digital solutions defines our organizational identity and distinguishes us in the marketplace.",
    },
    {
      title: "Integrity & Ethics",
      description:
        "Devmetasol maintains the highest standards of ethical conduct and integrity in all business practices, reflecting our core brand values and strategic perspective in every client engagement.",
    },
  ];

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our Core <span className="text-blue-500">Values</span>
          </h1>
        </div>

        {/* Introductory Paragraph */}
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our core values define our organizational identity, shape our corporate culture, 
            and reflect our strategic perspective. These fundamental principles enable us to 
            establish enduring partnerships with clients and create opportunities for mutual 
            growth and success.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

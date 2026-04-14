
const OurOffices = () => {
  const offices = [
    {
      name: "Dubai, UAE",
      location: "United Arab Emirates",
    },
    {
      name: "Pakistan",
      location: "Pakistan",
    },
  ];

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-blue-500">Offices</span>
          </h1>
        </div>

        {/* Descriptive Paragraph */}
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our global team comprises passionate innovators, skilled developers, 
            creative designers, and strategic thinkers dedicated to delivering 
            exceptional enterprise solutions that drive business transformation 
            and measurable results.
          </p>
        </div>

        {/* Office Locations Block */}
        <div className="bg-gray-50 rounded-lg p-4 md:p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="text-center md:text-left"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {office.name}
                </div>
                <div className="text-lg md:text-xl text-gray-600">
                  {office.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffices;

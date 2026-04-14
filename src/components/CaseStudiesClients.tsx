
const CaseStudiesClients = () => {
  const clients = [
    {
      name: "IN REHAR",
      logo: "Я", // Stylized Я symbol
    },
    {
      name: "appselec",
      logo: "ae", // Stylized ae symbol
    },
    {
      name: "VISTA Innovation of Technology",
      logo: "VISTA",
    },
    {
      name: "Caribbean Air Solutions",
      logo: "CAS",
    },
    {
      name: "ITTIFAQ MINING",
      logo: "IM",
    },
    {
      name: "CMD SONS",
      logo: "CMD",
    },
    {
      name: "HUSSA",
      logo: "HUSSA",
    },
  ];

  return (
    <section className="bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-6 px-4">
          <span className="text-gray-900">Our</span>{" "}
          <span className="text-blue-500">Clients</span>
        </h2>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 px-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
            >
              {/* Logo Placeholder */}
              <div className="w-24 md:w-32 h-16 md:h-20 flex items-center justify-center mb-2 bg-gray-50 rounded-lg shadow-sm">
                <span className="text-gray-400 text-xs md:text-sm font-medium">
                  {client.logo}
                </span>
              </div>
              {/* Client Name */}
              <p className="text-xs md:text-sm text-gray-600 text-center font-medium max-w-[100px]">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesClients;

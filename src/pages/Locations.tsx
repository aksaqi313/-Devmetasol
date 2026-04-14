import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const Locations = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KingTechSol',
    url: 'https://devmetasol.com',
    logo: 'https://devmetasol.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-330-4527519',
      contactType: 'customer service'
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Qazi Muhammad Isa Road, Faisal Town',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        postalCode: '55800',
        addressCountry: 'PK'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE'
      }
    ]
  };

  const locations = [
    {
      country: "Pakistan",
      city: "Lahore",
      address: "Lahore Division, Qazi Muhammad Isa Road, Faisal Town, Punjab 55800, Pakistan",
      latitude: "31.475470",
      longitude: "74.304550",
      coordinates: "N 31° 28' 31.691'' / E 74° 18' 16.38''",
      description: "Our headquarters and primary development center, serving as the hub for our global operations.",
      services: ["Software Development", "Digital Transformation", "Consulting Services"]
    },
    {
      country: "United States",
      city: "New York",
      address: "New York, USA",
      description: "Strategic presence in the heart of the American business ecosystem, serving enterprise clients across North America.",
      services: ["Business Development", "Client Relations", "Strategic Consulting"]
    },
    {
      country: "United States",
      city: "New Jersey",
      address: "New Jersey, USA",
      description: "Regional office supporting our growing client base in the Northeastern United States.",
      services: ["Client Support", "Project Management", "Technical Consulting"]
    },
    {
      country: "Canada",
      city: "Toronto",
      address: "Toronto, Canada",
      description: "Our Canadian operations center, delivering digital solutions to clients across North America.",
      services: ["Software Development", "Cloud Solutions", "Enterprise Services"]
    },
    {
      country: "United Arab Emirates",
      city: "Dubai",
      address: "Dubai Marina, Business Bay, Dubai, United Arab Emirates",
      latitude: "25.077200",
      longitude: "55.139400",
      coordinates: "N 25° 4' 37.92'' / E 55° 8' 21.84''",
      description: "Regional headquarters for the Middle East, providing comprehensive digital transformation services to the region.",
      services: ["Digital Marketing", "Enterprise Solutions", "Regional Support"]
    },
    {
      country: "Saudi Arabia",
      city: "Riyadh",
      address: "Riyadh, KSA",
      description: "Strategic presence in the Kingdom, supporting clients with localized digital solutions and consulting services.",
      services: ["Business Consulting", "Technology Implementation", "Local Support"]
    },
    {
      country: "Portugal",
      city: "Lisbon",
      address: "Lisbon, Portugal",
      description: "European operations center, serving clients across Europe with innovative digital solutions.",
      services: ["Software Development", "European Market Services", "Technical Support"]
    }
  ];

  return (
    <>
      <SEO
        title="Our Locations - KingTechSol Global Offices"
        description="KingTechSol operates globally with offices in Pakistan, USA, Canada, UAE, Saudi Arabia, and Portugal. Find our office locations and contact information."
        keywords="KingTechSol locations, global offices, Lahore office, Dubai office, software company locations, IT company offices, KingTechSol contact"
        canonicalUrl="/locations"
        structuredData={localBusinessSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' }
        ]}
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-500">Locations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KingTechSol operates globally with offices and teams strategically located 
              across multiple continents to serve our clients worldwide.
            </p>
          </div>

          <section className="mb-12">
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Global Presence, Local Expertise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With offices in key markets across North America, Europe, the Middle East, 
                and Asia, KingTechSol delivers world-class digital transformation services 
                while maintaining deep understanding of local business cultures and 
                requirements. Our distributed team model enables us to provide 24/7 support 
                and seamless collaboration across time zones.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Office Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-500"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {location.city}
                    </h3>
                    <p className="text-lg text-gray-600 mb-2">{location.country}</p>
                    <p className="text-sm text-gray-500 mb-2">{location.address}</p>
                    {location.coordinates && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-1">
                          <strong className="text-gray-700">Coordinates:</strong>
                        </p>
                        <p className="text-xs text-gray-500 mb-1">
                          Latitude: {location.latitude} / {location.coordinates.split(' / ')[0]}
                        </p>
                        <p className="text-xs text-gray-500">
                          Longitude: {location.longitude} / {location.coordinates.split(' / ')[1]}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {location.description}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Services:</p>
                    <ul className="space-y-1">
                      {location.services.map((service, serviceIndex) => (
                        <li
                          key={serviceIndex}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Contact Our Offices
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to partner with us, explore career opportunities, or 
              learn more about our services, our global team is ready to assist you. 
              Contact the office nearest to you or reach out to our headquarters.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Headquarters
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Lahore, Pakistan</strong>
                </p>
                <p className="text-gray-600 text-sm">
                  Email: infomeernaib47@gmail.com<br />
                  Phone: +92 330 4527519
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  General Inquiries
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Global Support</strong>
                </p>
                <p className="text-gray-600 text-sm">
                  Email: infomeernaib47@gmail.com<br />
                  Phone: +92 330 4527519
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default Locations;

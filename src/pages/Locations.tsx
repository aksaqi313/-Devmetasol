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
    name: 'Devmetasol',
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
        addressLocality: 'Washington',
        addressRegion: 'D.C.',
        addressCountry: 'US'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'LUMS Incubation Center',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Jumeirah Lake Towers',
        addressLocality: 'Dubai',
        addressCountry: 'AE'
      }
    ]
  };

  const locations = [
    {
      country: "United States",
      city: "Washington, D.C.",
      address: "Washington, D.C., USA",
      latitude: "38.907192",
      longitude: "-77.036873",
      coordinates: "N 38° 54' 25.89'' / W 77° 2' 12.74''",
      description: "Our U.S. headquarters in the nation's capital, serving enterprise clients and government agencies across North America.",
      services: ["AI & Automation Consulting", "Business Development", "Strategic Consulting"]
    },
    {
      country: "Pakistan",
      city: "Lahore",
      address: "Office 2: LUMS Incubation Center, Lahore, Pakistan",
      latitude: "31.470700",
      longitude: "74.410100",
      coordinates: "N 31° 28' 14.52'' / E 74° 24' 36.36''",
      description: "Our primary development center, serving as the hub for engineering and global operations.",
      services: ["Software Development", "Digital Transformation", "Consulting Services"]
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
      address: "Office 2: Jumeirah Lake Towers, Dubai, UAE",
      latitude: "25.078600",
      longitude: "55.148500",
      coordinates: "N 25° 4' 42.96'' / E 55° 8' 54.60''",
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
        title="Our Locations - Devmetasol Global Offices"
        description="Devmetasol operates globally with offices in Washington D.C. USA, Pakistan, Canada, UAE, Saudi Arabia, and Portugal. Find our office locations and contact information."
        keywords="Devmetasol locations, global offices, Washington DC office, Lahore office, Dubai office, software company locations, IT company offices, Devmetasol contact"
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
              Devmetasol operates globally with offices and teams strategically located 
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
                and Asia, Devmetasol delivers world-class digital transformation services 
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
                  Email: <a href="mailto:careers@devmetasol.com" className="text-blue-600 hover:underline">careers@devmetasol.com</a><br />
                  Phone: +92 330 4527519<br />
                  WhatsApp: <a href="https://wa.me/923320409566" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">+92 332 0409566</a>
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
                  Email: <a href="mailto:careers@devmetasol.com" className="text-blue-600 hover:underline">careers@devmetasol.com</a><br />
                  Phone: +92 330 4527519<br />
                  WhatsApp: <a href="https://wa.me/923320409566" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">+92 332 0409566</a>
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

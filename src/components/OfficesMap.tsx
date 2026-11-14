import { useState } from "react";

const OfficesMap = () => {
  const offices = [
    { 
      name: "Lahore, Pakistan", 
      address: "Office 1: LUMS Incubation Center, Lahore, Pakistan",
      latitude: "31.470700",
      longitude: "74.410100",
      coordinates: "N 31° 28' 14.52'' / E 74° 24' 36.36''"
    },
    { 
      name: "Dubai, UAE", 
      address: "Office 2: Jumeirah Lake Towers, Dubai, UAE",
      latitude: "25.078600",
      longitude: "55.148500",
      coordinates: "N 25° 4' 42.96'' / E 55° 8' 54.60''"
    },
  ];

  const [selectedOffice, setSelectedOffice] = useState(offices[0]); // Default to Lahore

  // Google Maps embed URLs using coordinates
  const getMapUrl = (lat: string, lng: string) => {
    // Using Google Maps iframe with coordinates
    return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
  };

  const getDirectionsUrl = (lat: string, lng: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  };

  const getGoogleMapsUrl = (lat: string, lng: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  };

  const currentMapUrl = selectedOffice.name === "Lahore, Pakistan" 
    ? getMapUrl(offices[0].latitude, offices[0].longitude)
    : getMapUrl(offices[1].latitude, offices[1].longitude);

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column - Offices List */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Offices
            </h2>
            <div className="space-y-2">
              {offices.map((office, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedOffice(office)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedOffice.name === office.name
                      ? "bg-blue-50 border-2 border-blue-500"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {office.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 mb-2">{office.address}</p>
                  {office.coordinates && (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        <strong className="text-gray-700">Coordinates:</strong><br />
                        Lat: {office.latitude}<br />
                        Long: {office.longitude}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {office.coordinates}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Google Map */}
          <div className="lg:w-2/3">
            <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <iframe
                src={currentMapUrl}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Devmetasol Office Location - ${selectedOffice.name}`}
                className="w-full"
              ></iframe>
            </div>
            {/* Map Info Card */}
            <div className="mt-2 bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Devmetasol - {selectedOffice.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {selectedOffice.address}
              </p>
              {selectedOffice.coordinates && (
                <div className="mb-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">
                    <strong className="text-gray-700">Coordinates:</strong>
                  </p>
                  <p className="text-xs text-gray-500 mb-1">
                    Latitude: {selectedOffice.latitude} / {selectedOffice.coordinates.split(' / ')[0]}
                  </p>
                  <p className="text-xs text-gray-500">
                    Longitude: {selectedOffice.longitude} / {selectedOffice.coordinates.split(' / ')[1]}
                  </p>
                </div>
              )}
              <div className="flex gap-4 mt-4">
                <a
                  href={getGoogleMapsUrl(selectedOffice.latitude, selectedOffice.longitude)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View larger map
                </a>
                <a
                  href={getDirectionsUrl(selectedOffice.latitude, selectedOffice.longitude)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  Directions
                  <svg
                    className="w-4 h-4"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficesMap;

// SuccessStories.tsx
const SuccessStories = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Devmetasol ERP",
      subtitle: "Project Case Study",
      description: "",
      logos: [
        { name: "Devmetasol", icon: "D" },
        { name: "ERP", icon: "ERP" },
      ],
    },
    {
      id: 2,
      title: "Appselec",
      subtitle: "Project Case Study",
      description: "Delivering Communication Solutions without compromise.",
      fullTitle: "Electrical Installation Service App",
      logos: [
        { name: "Devmetasol", icon: "D" },
        { name: "Appselec", icon: "∞" },
      ],
    },
    {
      id: 3,
      title: "PM ERP",
      subtitle: "Project Case Study",
      description: "Delivering Communication Solutions without compromise.",
      logos: [
        { name: "Devmetasol", icon: "D" },
        { name: "GROUNDWORKS", icon: "JJ" },
      ],
    },
    {
      id: 4,
      title: "QRIPIT (App)",
      subtitle: "Project Case Study",
      description: "",
      fullTitle: "QRIP IT SOFTWARE",
      logos: [
        { name: "Devmetasol", icon: "D" },
        { name: "QRIP IT", icon: "QR" },
      ],
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Success{" "}
              <span className="text-blue-500">Stories</span>
            </h2>
            <button className="px-6 py-3 border border-gray-200 rounded-lg bg-white text-slate-900 font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap">
              View All Case Studies
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

          {/* Case Study Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                {/* Logos */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                      D
                    </div>
                    <span className="text-sm font-medium text-slate-800">
                      Devmetasol
                    </span>
                  </div>
                  {study.id === 1 && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                        ERP
                      </div>
                      <span className="text-sm font-medium text-blue-600">
                        ERP
                      </span>
                    </div>
                  )}
                  {study.id === 2 && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-lg">
                        ∞
                      </div>
                      <span className="text-sm font-medium text-slate-800">
                        Appselec
                      </span>
                    </div>
                  )}
                  {study.id === 3 && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 border-2 border-slate-900 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">
                        JJ
                      </div>
                      <span className="text-sm font-medium text-slate-800">
                        GROUNDWORKS
                      </span>
                    </div>
                  )}
                  {study.id === 4 && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                        QR
                      </div>
                      <span className="text-sm font-medium text-slate-800">
                        QRIP IT
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="mb-4 grow">
                  <p className="text-xs text-slate-500 mb-1">
                    {study.subtitle}
                  </p>
                  {study.fullTitle ? (
                    <p className="text-sm font-semibold text-blue-500 mb-2">
                      {study.fullTitle}
                    </p>
                  ) : (
                    <p className="text-sm font-semibold text-blue-500 mb-2">
                      {study.title}
                    </p>
                  )}
                  {study.description && (
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {study.description}
                    </p>
                  )}
                </div>

                {/* Image Placeholder */}
                <div className="mb-4 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Device mockups placeholder */}
                  <div className="flex items-center gap-2">
                    {study.id === 1 && (
                      <>
                        <div className="w-16 h-12 bg-slate-300 rounded border-2 border-slate-400"></div>
                        <div className="w-16 h-12 bg-slate-300 rounded border-2 border-slate-400"></div>
                      </>
                    )}
                    {study.id === 2 && (
                      <>
                        <div className="w-12 h-16 bg-white rounded-lg border-2 border-slate-300 shadow"></div>
                        <div className="w-20 h-14 bg-slate-200 rounded border-2 border-slate-300"></div>
                      </>
                    )}
                    {study.id === 3 && (
                      <div className="w-24 h-16 bg-slate-800 rounded border-2 border-slate-600"></div>
                    )}
                    {study.id === 4 && (
                      <>
                        <div className="w-12 h-16 bg-slate-800 rounded-lg border-2 border-slate-600"></div>
                        <div className="w-20 h-14 bg-slate-800 rounded border-2 border-slate-600"></div>
                      </>
                    )}
                  </div>
                  {study.id === 2 && (
                    <div className="absolute top-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  {study.id === 4 && (
                    <div className="absolute inset-0 opacity-20">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 100"
                        className="text-blue-500"
                      >
                        <path
                          d="M0 50 Q50 30, 100 50 T200 50"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M0 60 Q50 40, 100 60 T200 60"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Bottom Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  {study.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

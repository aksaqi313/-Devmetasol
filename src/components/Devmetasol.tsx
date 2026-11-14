// Devmetasol.jsx
import teamPhoto from "../assets/Digital-Future.avif";

const Devmetasol = () => {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Left Section - Headline, Description, and Image */}
          <div className="lg:w-2/3">
            <div className="space-y-3">
              {/* Main Headline */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-pink-500">Devmetasol</span> Empowers
                  Businesses to Build an Intelligently Designed Digital Future
                </h1>
              </div>

              {/* Descriptive Paragraph */}
              <div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Our team of experienced developers, designers, and technology 
                  strategists drives innovation through advanced technology solutions 
                  that maximize growth potential and enhance enterprise value.
                </p>
              </div>

              {/* Team Photo */}
              <div className="mt-4">
                <img
                  src={teamPhoto}
                  alt="Our Team"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Key Metrics - UPDATED */}
          <div className="lg:w-1/3">
            <div className="">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Impact
              </h3>

              <div className="space-y-4">
                {/* 500+ Projects */}
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-pink-500 mb-2">
                    500+
                  </div>
                  <div className="text-lg text-gray-700 font-medium">
                    Projects Delivered
                  </div>
                </div>

                {/* 24+ Clients */}
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-pink-500 mb-2">
                    24+
                  </div>
                  <div className="text-lg text-gray-700 font-medium">
                    Active Clients
                  </div>
                </div>

                {/* 15+ Years */}
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-pink-500 mb-2">
                    15+
                  </div>
                  <div className="text-lg text-gray-700 font-medium">
                    Years of Fueling Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devmetasol;

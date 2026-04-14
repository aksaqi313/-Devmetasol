import { Link } from "react-router-dom";

const InnovativeBusinessModel = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Feeling Disconnected? Switch to An{" "}
            <span className="text-blue-500">Innovative</span> Business Model
          </h2>

          {/* Body Text */}
          <div className="space-y-4 mb-8">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              KingTechSol specializes in developing innovative business models that ensure 
              sustainable growth and competitive advantage. We create customized enterprise 
              solutions precisely tailored to your unique business requirements, industry 
              dynamics, and strategic objectives.
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Our team delivers comprehensive ERP implementation services that address 
              organizational complexities, streamline operations, and establish the 
              foundation for long-term business success and scalability.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <Link
            to="/contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started with Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InnovativeBusinessModel;

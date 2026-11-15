import CustomSoftwareImage from "../assets/Custom-Software-Solutions.avif";

interface CustomSoftwareSolutionsMinimalProps {
  imageOnLeft?: boolean;
  title?: string;
  paragraphs?: string[];
  image?: string;
  imageAlt?: string;
}

const SimpleSoftwareSolutions = ({
  imageOnLeft = false,
  title = "Custom Software Solutions",
  paragraphs = [
    "Selecting the right technology partner is critical to your digital transformation success. Devmetasol understands your unique business requirements and delivers custom software development services that provide tailored digital solutions, including scalable system integration, enterprise application updates, and custom software creation.",
    "As a trusted software development partner, we advance your business objectives through dynamic, user-centric software development services. We ensure intuitive user interfaces while developing robust, resource-efficient software solutions, including enterprise web applications, native and cross-platform mobile applications, and scalable web platforms.",
    "To help you achieve your strategic business goals, our professionals leverage cutting-edge technologies, modern programming languages, and industry-leading platforms. We excel at empowering organizations of all sizes—from emerging startups to mid-market companies to large-scale enterprises—transforming business challenges into opportunities for growth and success.",
  ],
  image = CustomSoftwareImage,
  imageAlt = "Service Image",
}: CustomSoftwareSolutionsMinimalProps) => {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100 last:border-b-0">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            imageOnLeft ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16`}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              {title}
            </h2>

            <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-6">
              <a
                href={`https://wa.me/923320409566?text=${encodeURIComponent(`Hi Devmetasol! I would like to discuss your ${title} services.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl text-sm sm:text-base transition-all shadow-md hover:shadow-blue-500/25"
              >
                <span>Inquire on WhatsApp</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-200/80 transform group-hover:scale-[1.02] transition duration-500 bg-slate-900">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="w-full h-[280px] sm:h-[340px] md:h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative background glows */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full -z-10 blur-sm"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-28 sm:h-28 bg-indigo-100 rounded-full -z-10 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSoftwareSolutions;

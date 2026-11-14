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
    <div className="bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            imageOnLeft ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12`}
        >
          {/* Left Side - Text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {title}
            </h1>

            <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Optional buttons */}
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transform group-hover:scale-[1.02] transition duration-500">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-100 rounded-full -z-10"></div>

              {/* Image caption */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSoftwareSolutions;

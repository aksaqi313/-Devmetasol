import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Multiple Positions Available',
    description: 'Join Devmetasol team - We are hiring developers, designers, and marketing specialists.',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Devmetasol',
      sameAs: 'https://devmetasol.com'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressCountry: 'PK'
      }
    },
    employmentType: 'FULL_TIME',
    jobLocationType: 'TELECOMMUTE'
  };

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Lahore, Pakistan / Remote",
      type: "Full-time",
      description: "Lead development of enterprise-scale applications using modern technologies and best practices."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Lahore, Pakistan / Remote",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for web and mobile applications."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Lahore, Pakistan / Remote",
      type: "Full-time",
      description: "Build and maintain scalable cloud infrastructure and CI/CD pipelines."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Lahore, Pakistan / Remote",
      type: "Full-time",
      description: "Develop and execute digital marketing strategies to drive business growth."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Lahore, Pakistan / Remote",
      type: "Full-time",
      description: "Oversee project delivery, coordinate teams, and ensure client satisfaction."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Lahore, Pakistan / Remote",
      type: "Full-time",
      description: "Identify new business opportunities and build strategic client relationships."
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health and dental insurance",
    "Flexible working hours and remote work options",
    "Professional development and training opportunities",
    "Collaborative and innovative work environment",
    "Cutting-edge technology and tools",
    "Career growth and advancement opportunities",
    "Work-life balance initiatives"
  ];

  return (
    <>
      <SEO
        title="Careers at Devmetasol - Join Our Team"
        description="Build your career with Devmetasol, a leading digital transformation agency. Explore job openings for developers, designers, project managers, and marketing specialists. Remote work available."
        keywords="Devmetasol careers, tech jobs, software developer jobs, UI UX designer jobs, remote work, IT careers, digital marketing jobs, project manager positions"
        canonicalUrl="/about-us/careers"
        structuredData={jobPostingSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' },
          { name: 'Careers', url: '/about-us/careers' }
        ]}
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join the <span className="text-blue-500">Devmetasol</span> Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build your career with a leading digital transformation agency. We're looking 
              for talented individuals who are passionate about technology and innovation.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Work at Devmetasol?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Devmetasol, we're not just building software—we're transforming 
                  businesses and shaping the future of digital innovation. As a member of 
                  our team, you'll work on challenging projects for enterprise clients, 
                  collaborate with industry experts, and contribute to cutting-edge 
                  solutions that make a real impact.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We foster a culture of continuous learning, innovation, and excellence. 
                  Our team members are empowered to take ownership, explore new technologies, 
                  and drive meaningful change in the digital landscape.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Innovation and creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Collaboration and teamwork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Professional excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Client-centric approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Continuous growth and development</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Benefits & Perks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Open Positions
            </h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <span className="mr-2">📍</span>
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">🌍</span>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">⏰</span>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@devmetasol.com?subject=${encodeURIComponent(`Job Application: ${position.title}`)}&body=${encodeURIComponent(`Hi Devmetasol Team,\n\nI am applying for the ${position.title} role.\n\nPlease find my resume attached.\n\nBest regards,`)}`}
                      className="mt-4 md:mt-0 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{position.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Don't See a Role That Fits?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              We're always looking for talented individuals to join our team. Send your 
              resume to <a href="mailto:careers@devmetasol.com" className="text-blue-600 font-semibold hover:underline">careers@devmetasol.com</a> and 
              let us know how you can contribute to Devmetasol's mission.
            </p>
            <a
              href="mailto:careers@devmetasol.com?subject=General%20Application%20-%20Devmetasol"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Submit General Application
            </a>
          </section>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default Careers;

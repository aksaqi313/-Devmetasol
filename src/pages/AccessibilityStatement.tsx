import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const AccessibilityStatement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="Accessibility Statement"
        description="Devmetasol is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility standards and ongoing improvements."
        keywords="accessibility statement, digital accessibility, WCAG compliance, accessible website, Devmetasol accessibility, ADA compliance"
        canonicalUrl="/about-us/accessibility-statement"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' },
          { name: 'Accessibility Statement', url: '/about-us/accessibility-statement' }
        ]}
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Accessibility <span className="text-blue-500">Statement</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              <strong>Last Updated:</strong> December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Our Commitment
              </h2>
              <p className="leading-relaxed">
                Devmetasol is committed to ensuring digital accessibility for people with 
                disabilities. We are continually improving the user experience for everyone 
                and applying the relevant accessibility standards to achieve these goals.
              </p>
              <p className="leading-relaxed">
                As a leading digital transformation agency, we recognize the importance of 
                inclusive design and are dedicated to making our website and digital services 
                accessible to all users, regardless of their abilities or the technologies 
                they use to access the web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Standards and Guidelines
              </h2>
              <p className="leading-relaxed">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                Level AA standards. These guidelines explain how to make web content more 
                accessible for people with disabilities and user-friendly for everyone.
              </p>
              <p className="leading-relaxed">
                Our accessibility efforts include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Providing alternative text for images and visual content</li>
                <li>Ensuring proper heading structure and semantic HTML</li>
                <li>Maintaining sufficient color contrast ratios</li>
                <li>Supporting keyboard navigation throughout the site</li>
                <li>Providing text alternatives for non-text content</li>
                <li>Ensuring forms are accessible and properly labeled</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Ongoing Improvements
              </h2>
              <p className="leading-relaxed">
                We regularly review our website and digital properties to identify and 
                address accessibility barriers. Our development team follows best practices 
                for accessible design and development, and we conduct regular accessibility 
                audits to ensure compliance with current standards.
              </p>
              <p className="leading-relaxed">
                As part of our commitment to accessibility, we:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Train our development team on accessibility best practices</li>
                <li>Test our websites with assistive technologies</li>
                <li>Incorporate accessibility considerations into our design process</li>
                <li>Stay current with evolving accessibility standards and technologies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Feedback and Contact
              </h2>
              <p className="leading-relaxed">
                We welcome your feedback on the accessibility of Devmetasol's website and 
                digital services. If you encounter any accessibility barriers or have 
                suggestions for improvement, please contact us:
              </p>
              <div className="bg-white rounded-lg p-6 mt-4">
                <p className="leading-relaxed">
                  <strong>Email:</strong> <a href="mailto:careers@devmetasol.com" className="text-blue-600 hover:underline">careers@devmetasol.com</a><br />
                  <strong>Phone:</strong> +92 330 4527519<br />
                  <strong>WhatsApp:</strong> <a href="https://wa.me/923320409566" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">+92 332 0409566</a><br />
                  <strong>Office 1:</strong> LUMS Incubation Center, Lahore, Pakistan<br />
                  <strong>Office 2:</strong> Jumeirah Lake Towers, Dubai, UAE
                </p>
              </div>
              <p className="leading-relaxed">
                We aim to respond to accessibility feedback within 5 business days and will 
                work with you to address any concerns or issues you may encounter.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Third-Party Content
              </h2>
              <p className="leading-relaxed">
                Some content on our website may be provided by third parties. While we 
                strive to ensure all third-party content meets accessibility standards, 
                we cannot guarantee the accessibility of external content. If you encounter 
                accessibility issues with third-party content, please contact us, and we 
                will work with the content provider to address the issue.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Future Goals
              </h2>
              <p className="leading-relaxed">
                Devmetasol is committed to continuous improvement in accessibility. Our 
                future goals include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Achieving WCAG 2.1 Level AAA compliance where feasible</li>
                <li>Implementing advanced accessibility features and technologies</li>
                <li>Expanding our accessibility testing and quality assurance processes</li>
                <li>Providing accessibility training and resources to our clients</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default AccessibilityStatement;

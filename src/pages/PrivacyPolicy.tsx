import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Devmetasol's Privacy Policy explains how we collect, use, disclose, and safeguard your information. Learn about our data protection practices and your rights."
        keywords="privacy policy, data protection, Devmetasol privacy, personal data, GDPR, data security, information collection"
        canonicalUrl="/about-us/privacy-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' },
          { name: 'Privacy Policy', url: '/about-us/privacy-policy' }
        ]}
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              <strong>Last Updated:</strong> December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Introduction
              </h2>
              <p className="leading-relaxed">
                Devmetasol ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website, use our services, or interact 
                with us as a digital transformation agency.
              </p>
              <p className="leading-relaxed">
                Please read this Privacy Policy carefully. By using our services, you agree 
                to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="leading-relaxed">
                We collect several types of information to provide and improve our services:
              </p>
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Personal Information
              </h3>
              <p className="leading-relaxed">
                When you engage with Devmetasol, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Company name, job title, and business information</li>
                <li>Payment and billing information</li>
                <li>Information provided in communications, inquiries, or service requests</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Technical Information
              </h3>
              <p className="leading-relaxed">
                We automatically collect certain technical information when you visit our 
                website:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>To provide, maintain, and improve our digital transformation services</li>
                <li>To process transactions and manage client relationships</li>
                <li>To communicate with you about services, updates, and support</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations and enforce our agreements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your information in 
                the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Service Providers:</strong> With trusted third-party service 
                    providers who assist in operating our business (e.g., cloud hosting, 
                    payment processing, analytics)</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, 
                    acquisition, or sale of assets</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect 
                    our rights and safety</li>
                <li><strong>With Your Consent:</strong> For any other purpose disclosed to 
                    you with your explicit consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Data Security
              </h2>
              <p className="leading-relaxed">
                Devmetasol implements industry-standard security measures to protect your 
                personal information from unauthorized access, alteration, disclosure, or 
                destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p className="leading-relaxed">
                However, no method of transmission over the Internet or electronic storage 
                is 100% secure. While we strive to protect your information, we cannot 
                guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Your Rights and Choices
              </h2>
              <p className="leading-relaxed">
                Depending on your location, you may have certain rights regarding your 
                personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Cookie Preferences:</strong> Manage cookie settings through your browser</li>
              </ul>
              <p className="leading-relaxed">
                To exercise these rights, please contact us using the information provided 
                below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy, unless a longer retention period 
                is required or permitted by law. When we no longer need your information, 
                we will securely delete or anonymize it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                International Data Transfers
              </h2>
              <p className="leading-relaxed">
                Your information may be transferred to and processed in countries other than 
                your country of residence. These countries may have data protection laws 
                that differ from those in your country. We take appropriate safeguards to 
                ensure your information receives adequate protection in accordance with 
                this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not 
                knowingly collect personal information from children. If you become aware 
                that a child has provided us with personal information, please contact us, 
                and we will take steps to delete such information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                "Last Updated" date. You are advised to review this Privacy Policy 
                periodically for any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-white rounded-lg p-6 mt-4">
                <p className="leading-relaxed">
                  <strong>Devmetasol</strong><br />
                  Email: <a href="mailto:careers@devmetasol.com" className="text-blue-600 hover:underline">careers@devmetasol.com</a><br />
                  Phone: +92 330 4527519<br />
                  Office 1: LUMS Incubation Center, Lahore, Pakistan<br />
                  Office 2: Jumeirah Lake Towers, Dubai, UAE
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default PrivacyPolicy;

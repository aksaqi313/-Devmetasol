import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Read Devmetasol's Terms and Conditions. By using our website and services, you agree to be bound by these terms and provisions."
        keywords="terms and conditions, terms of service, Devmetasol terms, legal agreement, service terms, user agreement"
        canonicalUrl="/about-us/terms-and-conditions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' },
          { name: 'Terms and Conditions', url: '/about-us/terms-and-conditions' }
        ]}
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Terms and <span className="text-blue-500">Conditions</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              <strong>Last Updated:</strong> December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using Devmetasol's website and services, you accept and 
                agree to be bound by the terms and provision of this agreement. If you do 
                not agree to abide by the above, please do not use this service.
              </p>
              <p className="leading-relaxed">
                These Terms and Conditions govern your use of Devmetasol's digital services, 
                including but not limited to our website, software solutions, consulting 
                services, and any other services provided by Devmetasol.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Services Description
              </h2>
              <p className="leading-relaxed">
                Devmetasol provides comprehensive digital transformation services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Custom software development and enterprise solutions</li>
                <li>Digital marketing and strategic consulting services</li>
                <li>Technology implementation and integration services</li>
                <li>Cloud infrastructure and DevOps solutions</li>
                <li>UI/UX design and user experience optimization</li>
                <li>Ongoing maintenance and support services</li>
              </ul>
              <p className="leading-relaxed">
                All services are provided subject to the terms outlined in individual service 
                agreements and statements of work.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Intellectual Property Rights
              </h2>
              <p className="leading-relaxed">
                All content, features, and functionality of Devmetasol's services, including 
                but not limited to text, graphics, logos, icons, images, audio clips, digital 
                downloads, and software, are the exclusive property of Devmetasol or its 
                content suppliers and are protected by international copyright, trademark, 
                patent, trade secret, and other intellectual property laws.
              </p>
              <p className="leading-relaxed">
                Unless otherwise specified in a written agreement, all intellectual property 
                rights in custom-developed software and solutions remain with Devmetasol 
                until full payment is received, at which point ownership may transfer as 
                specified in the service agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                User Obligations
              </h2>
              <p className="leading-relaxed">
                When using Devmetasol's services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt the services or servers</li>
                <li>Not attempt to gain unauthorized access to any systems or networks</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Payment Terms
              </h2>
              <p className="leading-relaxed">
                Payment terms for Devmetasol's services are specified in individual service 
                agreements. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Invoices are due within the timeframe specified in the service agreement</li>
                <li>Late payments may incur interest charges as specified in the agreement</li>
                <li>Services may be suspended for accounts with overdue payments</li>
                <li>All fees are non-refundable unless otherwise specified in writing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                Devmetasol shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of 
                profits, data, use, goodwill, or other intangible losses, resulting from your 
                use of our services.
              </p>
              <p className="leading-relaxed">
                Our total liability for any claims arising from or related to our services 
                shall not exceed the amount paid by you to Devmetasol in the twelve (12) 
                months preceding the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Confidentiality
              </h2>
              <p className="leading-relaxed">
                Devmetasol maintains strict confidentiality regarding all client information, 
                business data, and proprietary information shared during the course of our 
                engagement. We implement industry-standard security measures to protect 
                confidential information and comply with applicable data protection 
                regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Termination
              </h2>
              <p className="leading-relaxed">
                Either party may terminate a service agreement in accordance with the terms 
                specified in the agreement. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>All outstanding fees become immediately due</li>
                <li>Access to services may be suspended or terminated</li>
                <li>Confidentiality obligations continue to apply</li>
                <li>Each party's rights and obligations that by their nature should survive 
                    termination will remain in effect</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance 
                with the laws of Pakistan, without regard to its conflict of law provisions. 
                Any disputes arising from these terms shall be subject to the exclusive 
                jurisdiction of the courts of Lahore, Pakistan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-white rounded-lg p-6 mt-4">
                <p className="leading-relaxed">
                  <strong>Devmetasol</strong><br />
                  Email: <a href="mailto:careers@devmetasol.com" className="text-blue-600 hover:underline">careers@devmetasol.com</a><br />
                  Phone: +92 330 4527519<br />
                  WhatsApp: <a href="https://wa.me/923320409566" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">+92 332 0409566</a><br />
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

export default TermsAndConditions;

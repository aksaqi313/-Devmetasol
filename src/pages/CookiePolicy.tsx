import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="Cookie Policy"
        description="KingTechSol's Cookie Policy explains how we use cookies and similar tracking technologies on our website. Learn about cookie types and your choices."
        keywords="cookie policy, cookies, tracking technologies, KingTechSol cookies, website cookies, cookie consent"
        canonicalUrl="/about-us/cookie-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' },
          { name: 'Cookie Policy', url: '/about-us/cookie-policy' }
        ]}
      />
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cookie <span className="text-blue-500">Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              <strong>Last Updated:</strong> December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                What Are Cookies?
              </h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile 
                device when you visit a website. They are widely used to make websites work 
                more efficiently and provide information to website owners.
              </p>
              <p className="leading-relaxed">
                KingTechSol uses cookies and similar tracking technologies to enhance your 
                browsing experience, analyze website traffic, and personalize content. This 
                Cookie Policy explains how we use cookies and your choices regarding them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Essential Cookies
              </h3>
              <p className="leading-relaxed">
                These cookies are necessary for the website to function properly. They enable 
                core functionality such as security, network management, and accessibility. 
                You cannot opt out of these cookies as they are essential for the website 
                to work.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Performance and Analytics Cookies
              </h3>
              <p className="leading-relaxed">
                These cookies help us understand how visitors interact with our website by 
                collecting and reporting information anonymously. This helps us improve our 
                website's performance and user experience. Examples include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Google Analytics cookies to track page views and user behavior</li>
                <li>Performance monitoring cookies to identify technical issues</li>
                <li>Session cookies to maintain user preferences during visits</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Functionality Cookies
              </h3>
              <p className="leading-relaxed">
                These cookies allow the website to remember choices you make (such as your 
                username, language, or region) and provide enhanced, personalized features. 
                They may also be used to provide services you have requested.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Marketing and Advertising Cookies
              </h3>
              <p className="leading-relaxed">
                These cookies are used to deliver advertisements that are relevant to you 
                and your interests. They are also used to limit the number of times you see 
                an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Third-Party Cookies
              </h2>
              <p className="leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies 
                to report usage statistics of the website and deliver advertisements. These 
                third-party cookies may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Advertising Networks:</strong> For targeted advertising and campaign measurement</li>
                <li><strong>Customer Support Tools:</strong> For live chat and support functionality</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                How Long Do Cookies Last?
              </h2>
              <p className="leading-relaxed">
                Cookies can be either "session" or "persistent" cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire 
                    when you close your browser. They help maintain your session while 
                    navigating the website.</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a 
                    set period or until you delete them. They help us recognize you when you 
                    return to our website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="leading-relaxed">
                You have the right to accept or reject cookies. Most web browsers 
                automatically accept cookies, but you can usually modify your browser 
                settings to decline cookies if you prefer. However, this may prevent you 
                from taking full advantage of the website.
              </p>
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Browser Settings
              </h3>
              <p className="leading-relaxed">
                You can control cookies through your browser settings. Here are links to 
                instructions for popular browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Mozilla Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Microsoft Edge: Settings → Privacy, Search, and Services → Cookies</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Cookie Consent Banner
              </h3>
              <p className="leading-relaxed">
                When you first visit our website, you may see a cookie consent banner. 
                You can manage your cookie preferences through this banner or by contacting 
                us directly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Impact of Disabling Cookies
              </h2>
              <p className="leading-relaxed">
                If you choose to disable cookies, some features of our website may not 
                function properly. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Loss of personalized content and preferences</li>
                <li>Inability to access certain features or services</li>
                <li>Reduced website performance and functionality</li>
                <li>Need to re-enter information on each visit</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Updates to This Cookie Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in 
                our practices or for other operational, legal, or regulatory reasons. We 
                will notify you of any material changes by posting the new Cookie Policy 
                on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              <div className="bg-white rounded-lg p-6 mt-4">
                <p className="leading-relaxed">
                  <strong>KingTechSol</strong><br />
                  Email: KingTechSol<br />
                  Phone: +92 330 4527519<br />
                  Address: Lahore, Pakistan
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

export default CookiePolicy;

import { useEffect } from "react";
import EndlessInnovators from "../components/EndlessInnovators";
import OurClients from "../components/OurClients";
import ContactForm from "../components/ContactForm";
import OfficesMap from "../components/OfficesMap";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with Devmetasol"
        description="Contact Devmetasol for software development, digital transformation, and IT consulting services. Reach out to our global offices in Pakistan, USA, Canada, UAE, and Europe."
        keywords="contact Devmetasol, get in touch, software development inquiry, IT consulting contact, digital transformation consultation, business inquiry"
        canonicalUrl="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
      />
      <EndlessInnovators />
      {/* <WhatYouWillHear /> */}
      <OurClients />
      <ContactForm />
      <OfficesMap />
      <AllFooter />
    </>
  );
};

export default Contact;

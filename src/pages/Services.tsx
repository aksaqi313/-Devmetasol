// Services.tsx
import ServicesHero from "../components/ServicesHero";
import CustomSoftwareSolutionsMinimal from "../components/CustomSoftwareSolutionsMinimal";
import NextGenTechnologiesSimple from "../components/NextGenTechnologiesSimple";
import WhyChooseOurServices from "../components/WhyChooseOurServices";
import FAQ from "../components/FAQ";
import OurProcess from "../components/OurProcess";
import DesignBanner from "../components/DesignBanner";
import AllFooter from "../components/AllFooter";
import OurClients from "../components/OurClients";
import SEO from "../components/SEO";

const Services = () => {
  return (
    <div className="min-h-screen bg-white pt-4 sm:pt-6 md:pt-8">
      <SEO
        title="Our Services - Software Development & Digital Solutions"
        description="Explore KingTechSol's comprehensive services including custom software development, cloud infrastructure, digital marketing, QA support, staff augmentation, and creative design solutions."
        keywords="software development services, cloud services, digital marketing, staff augmentation, QA testing, creative design, IT consulting, enterprise solutions"
        canonicalUrl="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
      />
      {/* Services Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <ServicesHero />
      </div>

      {/* Repeat CustomSoftwareSolutionsMinimal 5 times with alternating layouts */}
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Digital Marketing"
        paragraphs={[
          "Elevate your brand's online presence with our comprehensive digital marketing services. We create strategic campaigns that drive engagement, increase visibility, and convert leads into customers.",
          "Our team specializes in SEO optimization, social media management, content marketing, and paid advertising. We analyze market trends and consumer behavior to deliver targeted campaigns that maximize your ROI.",
          "From brand awareness to customer retention, we help you build a strong digital footprint that resonates with your audience and drives sustainable business growth.",
        ]}
        imageAlt="Digital Marketing"
      />
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={true}
        title="Q&A / Question"
        paragraphs={[
          "Get expert answers to your technical questions and business challenges. Our Q&A service provides you with immediate access to industry experts who understand your needs.",
          "Whether you're facing development hurdles, need architectural guidance, or require strategic advice, our team is here to help. We provide clear, actionable solutions tailored to your specific situation.",
          "Our comprehensive support ensures you have the knowledge and confidence to make informed decisions and move forward with your projects successfully.",
        ]}
        imageAlt="Q&A / Question"
      />
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Cloud Services & Integration"
        paragraphs={[
          "Transform your infrastructure with our cloud services and seamless integration solutions. We help you migrate to the cloud, optimize your existing setup, and connect all your systems efficiently.",
          "Our expertise spans AWS, Azure, Google Cloud, and hybrid solutions. We design scalable architectures that grow with your business while ensuring security, reliability, and cost-effectiveness.",
          "From API integrations to data synchronization, we ensure all your applications and services work together harmoniously, improving productivity and reducing operational complexity.",
        ]}
        imageAlt="Cloud Services & Integration"
      />
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={true}
        title="Staff Augmentation"
        paragraphs={[
          "Scale your development team quickly with our staff augmentation services. We provide skilled professionals who integrate seamlessly into your existing workflow and culture.",
          "Whether you need frontend developers, backend engineers, DevOps specialists, or full-stack experts, we match you with the right talent. Our professionals are vetted, experienced, and ready to contribute from day one.",
          "Flexible engagement models allow you to scale up or down based on project needs, ensuring you always have the right resources without the overhead of permanent hiring.",
        ]}
        imageAlt="Staff Augmentation"
      />
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Creative Design"
        paragraphs={[
          "Bring your vision to life with our creative design services. We combine artistic excellence with user experience principles to create designs that are both beautiful and functional.",
          "Our design team specializes in UI/UX design, branding, graphic design, and visual identity. We work closely with you to understand your brand and create designs that communicate your message effectively.",
          "From initial concepts to final deliverables, we ensure every design element aligns with your business goals and creates memorable experiences for your users.",
        ]}
        imageAlt="Creative Design"
      />

      <NextGenTechnologiesSimple />

      {/* Why Choose Our Services Section */}
      <WhyChooseOurServices />

      {/* FAQ Section */}
      <FAQ />

      {/* Our Process Section */}
      <OurProcess />

      {/* Our Clients Section */}
      <OurClients />

      {/* Design Banner Section */}
      <DesignBanner />

      {/* Hire Expert Banner Section */}

      <AllFooter />

      {/* Services Grid */}
    </div>
  );
};

export default Services;

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

// Service-specific images
import softwareImg from "../assets/service-software.jpg";
import marketingImg from "../assets/service-marketing.jpg";
import qaImg from "../assets/service-qa.jpg";
import cloudImg from "../assets/service-cloud.jpg";
import staffImg from "../assets/hire-team.jpg";
import designImg from "../assets/service-design.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-white pt-4 sm:pt-6 md:pt-8">
      <SEO
        title="Our Services - Software Development & Digital Solutions"
        description="Explore Devmetasol's comprehensive services including custom software development, cloud infrastructure, digital marketing, QA support, staff augmentation, and creative design solutions."
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

      {/* 1. Custom Software Solutions */}
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Custom Software Development"
        image={softwareImg}
        imageAlt="Custom Software Development Services - Devmetasol"
        paragraphs={[
          "Selecting the right engineering partner is critical to your digital transformation success. Devmetasol understands your unique business goals and delivers custom software solutions designed for high performance, fault-tolerant reliability, and enterprise scale.",
          "We build bespoke web platforms, native mobile applications, robust microservices, and automated workflows. Our engineers leverage modern frameworks, cloud-native patterns, and clean code practices to turn your technical vision into market-leading software.",
          "From emerging startups requiring rapid MVPs to established enterprises modernizing legacy systems, we deliver scalable solutions that reduce operational friction and drive sustainable competitive advantage."
        ]}
      />

      {/* 2. Digital Marketing & Growth */}
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={true}
        title="Digital Marketing & Growth"
        image={marketingImg}
        imageAlt="Digital Marketing & Performance Growth Services - Devmetasol"
        paragraphs={[
          "Elevate your brand's digital reach with data-driven performance marketing services. We engineer multi-channel campaigns that capture high-intent leads, boost conversion rates, and build lasting customer loyalty.",
          "Our marketing specialists deliver comprehensive search engine optimization (SEO), paid search and social campaigns (PPC), technical content strategy, and conversion rate optimization (CRO) benchmarked against key performance metrics.",
          "By analyzing consumer behavior and competitive market dynamics, we ensure every marketing dollar spent delivers measurable revenue growth and optimal return on investment (ROI)."
        ]}
      />

      {/* 3. Quality Assurance & Testing */}
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Quality Assurance & QA Testing"
        image={qaImg}
        imageAlt="Software Quality Assurance and Automation Testing - Devmetasol"
        paragraphs={[
          "Ensure flawless digital experiences before deploying to production. Our comprehensive Quality Assurance services combine manual exploratory testing with automated CI/CD validation to eliminate bugs early.",
          "We conduct functional testing, cross-browser and mobile device verification, performance and load benchmarking, API security checks, and regression test suites across every software release cycle.",
          "Our QA engineers safeguard your brand reputation by guaranteeing that your web, mobile, and enterprise platforms run reliably, securely, and seamlessly for every end user."
        ]}
      />

      {/* 4. Cloud Services & Infrastructure */}
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={true}
        title="Cloud Services & DevOps Architecture"
        image={cloudImg}
        imageAlt="Cloud Architecture, DevOps, and Infrastructure Services - Devmetasol"
        paragraphs={[
          "Modernize and secure your IT infrastructure with our cloud consulting, migration, and DevOps automation services across AWS, Microsoft Azure, and Google Cloud Platform.",
          "We architect resilient, cost-optimized cloud solutions leveraging Docker containerization, Kubernetes orchestration, serverless microservices, and automated CI/CD deployment pipelines.",
          "From seamless database migrations to 24/7 infrastructure observability and disaster recovery, we empower your systems to scale effortlessly alongside your business demands."
        ]}
      />

      {/* 5. Staff Augmentation & Dedicated Squads */}
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={false}
        title="Staff Augmentation & Dedicated Squads"
        image={staffImg}
        imageAlt="IT Staff Augmentation and Dedicated Remote Engineering Teams - Devmetasol"
        paragraphs={[
          "Rapidly scale your development bandwidth with top-tier, pre-vetted remote software engineers, UI/UX designers, and cloud architects who integrate directly into your daily sprint workflows.",
          "Whether you need individual full-stack specialists or an entire cross-functional dedicated squad aligned to your time zone, Devmetasol connects you with high-caliber talent ready from day one.",
          "Our flexible engagement models allow you to expand or adjust team capacity as roadmap priorities evolve, eliminating lengthy hiring cycles and permanent recruitment overhead."
        ]}
      />

      {/* 6. Creative UI/UX Design */}
      <CustomSoftwareSolutionsMinimal
        imageOnLeft={true}
        title="Creative UI/UX & Product Design"
        image={designImg}
        imageAlt="Creative UI/UX Design and Product Prototyping - Devmetasol"
        paragraphs={[
          "Transform complex user journeys into intuitive, visually striking digital interfaces. We merge aesthetic elegance with rigorous user research to build products that users genuinely love.",
          "Our design studio specializes in Figma wireframing, high-fidelity interactive prototypes, responsive web & mobile layouts, comprehensive design systems, and brand identity development.",
          "From initial discovery workshops to pixel-perfect design-to-development handoffs, we ensure your digital product communicates your brand values and maximizes user retention."
        ]}
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

      <AllFooter />
    </div>
  );
};

export default Services;

import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="Devmetasol - Full-Stack Development, Staff Augmentation & Digital Marketing"
        description="Devmetasol is a full-service software agency offering full-stack software development, staff augmentation, and digital marketing with content production. We help startups and enterprises build, scale, and market their products worldwide."
        keywords="full stack development, staff augmentation, digital marketing, content production, software development agency, web development, mobile app development, hire developers, Devmetasol, custom software, SEO, performance marketing"
        canonicalUrl="/"
        breadcrumbs={[{ name: 'Home', url: '/' }]}
      />
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Home;


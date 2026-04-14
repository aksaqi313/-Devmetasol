import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="KingTechSol - Digital Transformation & Software Development Solutions"
        description="KingTechSol is a leading digital transformation and software development company. We deliver enterprise-grade software solutions, cloud infrastructure, AI/ML solutions, and digital transformation services worldwide."
        keywords="software development, digital transformation, cloud services, web development, mobile app development, KingTechSol, enterprise solutions, IT consulting, custom software, AI solutions"
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


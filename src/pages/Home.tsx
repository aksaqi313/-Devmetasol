import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="DevMetaSol - Building Smarter Businesses Through AI, Automation & Innovation"
        description="DevMetaSol is a Washington D.C.-based AI-native consulting & implementation agency helping startups and enterprises design, develop, and scale secure, high-performance digital products powered by AI, automation, and modern engineering."
        keywords="AI consulting, AI implementation, automation, software development agency, Washington DC, web development, mobile app development, hire developers, DevMetaSol, custom software, digital transformation, innovation"
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


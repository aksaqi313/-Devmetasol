import Blog from "../components/Blog";
import AllFooter from "../components/AllFooter";
import SEO from "../components/SEO";

const BlogPage = () => {
  return (
    <>
      <SEO
        title="Blog - Tech Insights & Digital Transformation News"
        description="Read the latest insights on software development, digital transformation, cloud computing, AI/ML, and technology trends from KingTechSol's expert team."
        keywords="tech blog, software development blog, digital transformation insights, cloud computing articles, AI ML news, technology trends, KingTechSol blog"
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />
      <Blog />
      <AllFooter />
    </>
  );
};

export default BlogPage;

import { useState } from "react";
import { Link } from "react-router-dom";

// Blog post interface
interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  featuredImage: string;
  readTime: string;
}

// Dummy blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    description:
      "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps and beyond.",
    content: `
      <h2>Introduction</h2>
      <p>The web development industry is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and interact with web applications.</p>
      
      <h2>Artificial Intelligence Integration</h2>
      <p>AI is no longer a futuristic concept—it's here and transforming web development. From intelligent chatbots to automated code generation, AI tools are helping developers work more efficiently and create more sophisticated applications.</p>
      
      <h2>Progressive Web Applications (PWAs)</h2>
      <p>PWAs continue to gain traction as they bridge the gap between web and mobile apps. They offer offline functionality, push notifications, and app-like experiences without the need for app store distribution.</p>
      
      <h2>Serverless Architecture</h2>
      <p>Serverless computing is revolutionizing how we deploy and scale applications. By abstracting away server management, developers can focus on writing code while cloud providers handle infrastructure.</p>
      
      <h2>Conclusion</h2>
      <p>Staying ahead of these trends is crucial for any web development team. Embracing new technologies and methodologies will help you build better, faster, and more scalable applications.</p>
    `,
    author: "Sarah Johnson",
    publishDate: "2024-01-15",
    category: "Web Development",
    featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Designing for Accessibility: A UX Designer's Guide",
    description:
      "Learn how to create inclusive designs that are accessible to all users, regardless of their abilities or disabilities.",
    content: `
      <h2>Why Accessibility Matters</h2>
      <p>Accessibility isn't just a nice-to-have—it's a fundamental requirement for creating inclusive digital experiences. When we design with accessibility in mind, we create products that everyone can use.</p>
      
      <h2>Key Principles</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible designs. These guidelines focus on four main principles: perceivable, operable, understandable, and robust.</p>
      
      <h2>Color Contrast and Typography</h2>
      <p>Ensuring sufficient color contrast is essential for users with visual impairments. Similarly, choosing readable fonts and appropriate font sizes makes content accessible to a wider audience.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Many users navigate websites using only a keyboard. Designing with keyboard navigation in mind ensures that all interactive elements are accessible without a mouse.</p>
      
      <h2>Conclusion</h2>
      <p>Accessibility should be integrated into every stage of the design process, not treated as an afterthought. By prioritizing accessibility, we create better experiences for everyone.</p>
    `,
    author: "Michael Chen",
    publishDate: "2024-01-10",
    category: "UI/UX",
    featuredImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building Scalable Mobile Apps: Best Practices",
    description:
      "Discover strategies for building mobile applications that can scale with your business and handle growing user bases effectively.",
    content: `
      <h2>Planning for Scale</h2>
      <p>Building a mobile app that can scale requires careful planning from the start. Consider your architecture, data management, and user growth projections.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Choosing the right architecture pattern is crucial. Whether you opt for MVC, MVVM, or a clean architecture approach, consistency and modularity are key.</p>
      
      <h2>Performance Optimization</h2>
      <p>As your user base grows, performance becomes critical. Implement lazy loading, efficient caching strategies, and optimize your API calls to ensure smooth user experiences.</p>
      
      <h2>Backend Considerations</h2>
      <p>Your backend infrastructure must be able to handle increased load. Consider using cloud services, implementing proper caching, and designing APIs that can scale horizontally.</p>
      
      <h2>Conclusion</h2>
      <p>Scalability isn't something you can add later—it needs to be built into your app from the beginning. By following best practices and planning ahead, you can create apps that grow with your business.</p>
    `,
    author: "Emily Rodriguez",
    publishDate: "2024-01-05",
    category: "Mobile Apps",
    featuredImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "10 Business Tips for Growing Your Digital Agency",
    description:
      "Practical advice for digital agency owners looking to scale their business, improve client relationships, and increase profitability.",
    content: `
      <h2>Focus on Your Niche</h2>
      <p>Instead of trying to be everything to everyone, focus on a specific niche where you can excel. Specialization helps you stand out and command higher prices.</p>
      
      <h2>Build Strong Client Relationships</h2>
      <p>Long-term client relationships are more valuable than one-off projects. Invest in communication, deliver consistent results, and go above and beyond to build trust.</p>
      
      <h2>Invest in Your Team</h2>
      <p>Your team is your greatest asset. Invest in training, provide growth opportunities, and create a positive work culture that attracts and retains top talent.</p>
      
      <h2>Streamline Your Processes</h2>
      <p>Efficient processes save time and money. Document your workflows, automate repetitive tasks, and continuously look for ways to improve your operations.</p>
      
      <h2>Leverage Technology</h2>
      <p>Use project management tools, CRM systems, and automation to streamline your operations. The right technology can significantly improve your efficiency and profitability.</p>
      
      <h2>Conclusion</h2>
      <p>Growing a digital agency requires a combination of strategic thinking, excellent execution, and continuous improvement. Focus on what matters most and build systems that support your growth.</p>
    `,
    author: "David Thompson",
    publishDate: "2024-01-01",
    category: "Business Tips",
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Modern JavaScript Frameworks: Choosing the Right One",
    description:
      "A comprehensive guide to selecting the right JavaScript framework for your next web development project.",
    content: `
      <h2>The Framework Landscape</h2>
      <p>With so many JavaScript frameworks available, choosing the right one can be overwhelming. Each framework has its strengths and is suited for different types of projects.</p>
      
      <h2>React: The Component King</h2>
      <p>React's component-based architecture and vast ecosystem make it ideal for building complex user interfaces. Its virtual DOM ensures optimal performance.</p>
      
      <h2>Vue: The Progressive Framework</h2>
      <p>Vue offers a gentle learning curve and excellent documentation. It's perfect for projects that need flexibility and gradual adoption.</p>
      
      <h2>Angular: The Enterprise Solution</h2>
      <p>Angular provides a complete framework with built-in solutions for routing, state management, and testing. It's ideal for large-scale enterprise applications.</p>
      
      <h2>Conclusion</h2>
      <p>The best framework depends on your project requirements, team expertise, and long-term goals. Consider all factors before making your decision.</p>
    `,
    author: "Sarah Johnson",
    publishDate: "2023-12-28",
    category: "Web Development",
    featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "The Psychology of User Interface Design",
    description:
      "Understanding how users think and behave can help you create more intuitive and effective user interfaces.",
    content: `
      <h2>Understanding User Behavior</h2>
      <p>Great UI design goes beyond aesthetics—it requires understanding how users think, perceive, and interact with digital interfaces.</p>
      
      <h2>Cognitive Load</h2>
      <p>Minimizing cognitive load is essential for creating intuitive interfaces. Simplify choices, use familiar patterns, and guide users through complex tasks.</p>
      
      <h2>Visual Hierarchy</h2>
      <p>Effective visual hierarchy guides users' attention to the most important elements. Use size, color, contrast, and spacing to create clear information hierarchies.</p>
      
      <h2>Emotional Design</h2>
      <p>Emotions play a crucial role in user experience. Design interfaces that evoke positive emotions and create memorable experiences.</p>
      
      <h2>Conclusion</h2>
      <p>By applying principles of psychology to UI design, you can create interfaces that are not only beautiful but also intuitive and effective.</p>
    `,
    author: "Michael Chen",
    publishDate: "2023-12-20",
    category: "UI/UX",
    featuredImage: "https://images.unsplash.com/photo-1586717791821-3f9a6feddfa0?w=800&h=400&fit=crop",
    readTime: "5 min read",
  },
];

const categories = ["All", "Web Development", "UI/UX", "Mobile Apps", "Business Tips"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get related posts (same category, excluding current post)
  const getRelatedPosts = (currentPost: BlogPost) => {
    return blogPosts
      .filter(
        (post) =>
          post.category === currentPost.category && post.id !== currentPost.id
      )
      .slice(0, 3);
  };

  // If a post is selected, show the detail view
  if (selectedPost) {
    const relatedPosts = getRelatedPosts(selectedPost);

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Back Button - Sticky */}
        <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => setSelectedPost(null)}
              className="group flex items-center text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </button>
          </div>
        </div>

          {/* Blog Post Detail */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                {selectedPost.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              {selectedPost.title}
              </span>
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex items-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 shadow-md flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base">
                    {selectedPost.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600">Author</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    {selectedPost.author}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-slate-600">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium text-sm sm:text-base">{formatDate(selectedPost.publishDate)}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium text-sm sm:text-base">{selectedPost.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
              <img
                src={selectedPost.featuredImage}
                alt={selectedPost.title}
                  className="w-full h-full object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Blog Content */}
            <div
              className="mb-12 text-slate-700 leading-relaxed blog-content prose prose-lg prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            {/* Social Share Section */}
            <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3 sm:mb-4">Share this article</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="flex items-center px-3 sm:px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-blue-500 hover:text-white transition-colors shadow-sm text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Share
                </button>
                <button className="flex items-center px-3 sm:px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-blue-400 hover:text-white transition-colors shadow-sm text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Tweet
                </button>
                <button className="flex items-center px-3 sm:px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-blue-700 hover:text-white transition-colors shadow-sm text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {relatedPosts.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -mr-24 sm:-mr-32 -mt-24 sm:-mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -ml-24 sm:-ml-32 -mb-24 sm:-mb-32 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                Ready to Start Your Project?
              </h2>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
                Let's work together to bring your vision to life. Get in touch with our team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  to="/contact"
                    className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Contact Us
                </Link>
                <Link
                  to="/schedule-call"
                    className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  Schedule a Call
                </Link>
                </div>
              </div>
              </div>
            </div>
          </article>
      </div>
    );
  }

  // Blog Listing View
  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-6 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2"></span>
              Latest Insights & Stories
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                Blog
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover insights, tips, and stories from our team of experts. Stay updated with the latest trends in technology, design, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-slate-200/90 transform hover:-translate-y-1 h-full flex flex-col"
            >
              {/* Featured Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-blue-700 rounded-full text-xs font-bold shadow-xs">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="flex items-center text-white text-xs font-medium">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                {/* Title (fixed min-height for identical 2-line title alignment) */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 line-clamp-2 min-h-[3.5rem] flex items-start group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                {/* Description (fixed min-height for identical 3-line description alignment) */}
                <p className="text-sm text-slate-600 mb-4 line-clamp-3 min-h-[4rem] leading-relaxed">
                  {post.description}
                </p>

                {/* Footer Section (pushed to bottom with mt-auto so all cards align perfectly) */}
                <div className="mt-auto">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center min-w-0 pr-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-white font-bold text-xs shadow-2xs">
                        {post.author.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-700 truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center flex-shrink-0 text-slate-500">
                      <svg
                        className="w-3.5 h-3.5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-md group-hover:shadow-blue-500/30">
                    Read Article
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
            <p className="text-lg text-slate-600">We couldn't find any blog posts in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;

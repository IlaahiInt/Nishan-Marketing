import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  MessageCircle,
  Bookmark,
  ThumbsUp,
  ChevronLeft,
  Mail
} from 'lucide-react';

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);

  // Simulated progress bar on scroll
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const relatedPosts: RelatedPost[] = [
    {
      id: '3',
      title: 'Creating a Strong Brand Identity Through Design',
      excerpt: 'Master the art of visual branding and create a memorable identity...',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Design'
    },
    // Add more related posts...
  ];

  return (
    <div className="bg-white">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
        style={{ transform: `translateX(${readingProgress - 100}%)` }}
      >
        <div className="h-full bg-primary transition-transform duration-150" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <a 
                  href="/blog" 
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to Blog
                </a>
                <span className="text-gray-300">|</span>
                <span className="text-primary font-medium">Digital Marketing</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                10 Social Media Trends That Will Define 2024
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Author"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <span className="font-medium block">Emily Rodriguez</span>
                    <span className="text-sm">Head of Content Strategy</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    March 1, 2024
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    5 min read
                  </span>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt="Blog Cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  As we step into 2024, the social media landscape continues to evolve at an unprecedented pace. 
                  From emerging platforms to innovative features, businesses need to stay ahead of the curve to 
                  maintain their competitive edge.
                </p>

                <h2>1. AI-Powered Content Creation</h2>
                <p>
                  Artificial Intelligence is revolutionizing how brands create and optimize their social media content. 
                  From generating engaging captions to predicting trending topics, AI tools are becoming indispensable 
                  for social media marketers.
                </p>

                {/* Add more content sections */}
              </div>

              {/* Social Sharing & Engagement */}
              <div className="flex items-center justify-between border-t border-b border-gray-200 py-6 my-12">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => {
                      setHasLiked(!hasLiked);
                      setLikes(hasLiked ? likes - 1 : likes + 1);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      hasLiked ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                    }`}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>{likes}</span>
                  </button>
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full transition-colors ${
                      isBookmarked ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600">Share:</span>
                  <div className="flex gap-2">
                    {[Facebook, Twitter, Linkedin, Mail].map((Icon, index) => (
                      <button 
                        key={index}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-xl p-8 my-12">
                <div className="flex items-start gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Author"
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Emily Rodriguez</h3>
                    <p className="text-gray-600 mb-4">
                      Digital marketing expert with 8+ years of experience in content strategy 
                      and social media management.
                    </p>
                    <div className="flex gap-3">
                      {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* Table of Contents */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {[
                      'AI-Powered Content Creation',
                      'Video-First Strategies',
                      'Social Commerce Evolution',
                      'Privacy-Focused Marketing'
                    ].map((item, index) => (
                      <a 
                        key={index}
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {index + 1}. {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Related Posts */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map(post => (
                      <a 
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="group block"
                      >
                        <div className="flex gap-4">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                          <div>
                            <span className="text-sm text-primary mb-2 block">
                              {post.category}
                            </span>
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {post.title}
                            </h4>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Want More Marketing Insights?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Subscribe to our newsletter and never miss our latest digital marketing tips.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                />
                <button className="btn bg-primary text-secondary hover:bg-primary-dark shadow-lg">
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 
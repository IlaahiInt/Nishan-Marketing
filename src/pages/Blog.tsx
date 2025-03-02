import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Search,
  Calendar,
  User,
  Clock,
  BookOpen,
  TrendingUp,
  MessageCircle,
  Share2,
  Facebook,
  Linkedin,
  Twitter,
  Hash,
  Mail,
  Globe,
  Palette
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
}

interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise: string[];
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    { id: 'all', label: 'All Posts', icon: BookOpen },
    { id: 'social-media', label: 'Social Media', icon: Facebook },
    { id: 'graphic-design', label: 'Design', icon: Palette },
    { id: 'web-development', label: 'Development', icon: Globe },
    { id: 'marketing-trends', label: 'Trends', icon: TrendingUp }
  ];

  const authors: Author[] = [
    {
      id: '1',
      name: 'Emily Rodriguez',
      role: 'Head of Content Strategy',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      bio: 'Digital marketing expert with 8+ years of experience in content strategy and social media management.',
      expertise: ['Content Strategy', 'Social Media', 'Brand Development']
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'SEO Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      bio: 'SEO wizard helping brands achieve top rankings and drive organic traffic.',
      expertise: ['SEO', 'Analytics', 'Growth Marketing']
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Social Media Trends That Will Define 2024',
      excerpt: 'Discover the latest social media trends that will shape digital marketing strategies in 2024.',
      content: 'Full article content here...',
      category: 'social-media',
      tags: ['Social Media', 'Digital Marketing', 'Trends'],
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[0],
      date: 'March 1, 2024',
      readTime: '5 min read',
      featured: true
    },
    {
      id: '2',
      title: 'The Ultimate Guide to SEO in 2024',
      excerpt: "Learn the latest SEO strategies to improve your website's ranking and drive organic traffic.",
      content: 'Full article content here...',
      category: 'web-development',
      tags: ['SEO', 'Web Development', 'Digital Marketing'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[1],
      date: 'February 28, 2024',
      readTime: '8 min read',
      trending: true
    },
    {
      id: '3',
      title: 'Creating a Strong Brand Identity Through Design',
      excerpt: 'Master the art of visual branding and create a memorable identity that resonates with your audience.',
      content: 'Full article content here...',
      category: 'graphic-design',
      tags: ['Branding', 'Design', 'Visual Identity'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[0],
      date: 'February 25, 2024',
      readTime: '6 min read',
      featured: true
    },
    {
      id: '4',
      title: 'Instagram Marketing Strategies for 2024',
      excerpt: 'Boost your Instagram presence with these proven marketing strategies and engagement techniques.',
      content: 'Full article content here...',
      category: 'social-media',
      tags: ['Instagram', 'Social Media', 'Marketing'],
      image: 'https://images.unsplash.com/photo-1585247226801-bc613c441316?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[1],
      date: 'February 20, 2024',
      readTime: '7 min read',
      trending: true
    },
    {
      id: '5',
      title: 'The Psychology of Color in Marketing',
      excerpt: 'Understanding how color influences consumer behavior and brand perception.',
      content: 'Full article content here...',
      category: 'graphic-design',
      tags: ['Color Theory', 'Design', 'Marketing Psychology'],
      image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[0],
      date: 'February 15, 2024',
      readTime: '10 min read'
    },
    {
      id: '6',
      title: 'Maximizing Website Conversion Rates',
      excerpt: 'Learn proven techniques to turn your website visitors into loyal customers.',
      content: 'Full article content here...',
      category: 'web-development',
      tags: ['Conversion', 'UX Design', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[1],
      date: 'February 10, 2024',
      readTime: '9 min read',
      featured: true
    },
    {
      id: '7',
      title: 'Email Marketing Trends for 2024',
      excerpt: 'Discover the latest email marketing strategies that drive engagement and conversions.',
      content: 'Full article content here...',
      category: 'marketing-trends',
      tags: ['Email Marketing', 'Digital Marketing', 'Trends'],
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[0],
      date: 'February 5, 2024',
      readTime: '6 min read',
      trending: true
    },
    {
      id: '8',
      title: 'The Rise of AI in Digital Marketing',
      excerpt: 'How artificial intelligence is transforming the digital marketing landscape.',
      content: 'Full article content here...',
      category: 'marketing-trends',
      tags: ['AI', 'Digital Marketing', 'Technology'],
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      author: authors[1],
      date: 'February 1, 2024',
      readTime: '8 min read',
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending);

  const BlogPost = ({ post }: { post: BlogPost }) => (
    <motion.article
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          {post.featured && (
            <span className="bg-primary/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          )}
          {post.trending && (
            <span className="bg-secondary/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
              Trending
            </span>
          )}
        </div>

        {/* Reading Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium bg-gray-50 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        {/* Metadata & Author */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
            />
            <div>
              <span className="text-sm font-semibold text-gray-900 block">
                {post.author.name}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </div>
            </div>
          </div>

          {/* Read More Link */}
          <a 
            href={`/blog/${post.id}`} 
            className="flex items-center text-primary font-medium text-sm hover:text-primary-dark transition-colors group/link"
          >
            Read More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center px-4"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stay Ahead in <span className="text-primary">Digital Marketing</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, trends, and strategies to grow your brand online. 
              Learn from industry experts and take your marketing to the next level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                />
              </div>
              <button className="btn bg-primary text-secondary hover:bg-primary-dark w-full sm:w-auto shadow-lg">
                Subscribe
                <Mail className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 sm:py-20">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Insights</h2>
            <a href="#all-posts" className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPosts.slice(0, 3).map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center px-4 py-2.5 rounded-full font-medium transition-all
                    ${selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-2.5 pl-12 rounded-full border-2 border-gray-200 
                  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                  transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section id="all-posts" className="py-16 sm:py-20">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Never Miss an Update
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join our community and get expert digital marketing tips straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 
                    focus:ring-primary shadow-lg"
                />
                <button className="btn bg-primary text-white hover:bg-primary-dark shadow-lg">
                  Subscribe Now
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

export default Blog; 
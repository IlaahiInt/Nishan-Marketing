import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Instagram,
  Palette,
  Globe,
  ExternalLink,
  ChevronRight,
  Play,
  X,
  CheckCircle,
  TrendingUp,
  Users,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

type ProjectCategory = 'all' | 'social-media' | 'graphic-design' | 'web-development';

interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    rating: number;
  };
  details?: {
    overview: string;
    approach: string[];
    implementation: string;
    metrics: { label: string; value: string; description: string }[];
  };
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Muhammad Nishan',
    role: 'CEO & Founder',
    image: 'path/to/nishan-image.jpg',
    social: {
      facebook: 'https://facebook.com/nishan',
      twitter: 'https://twitter.com/nishan',
      instagram: 'https://instagram.com/nishan',
      linkedin: 'https://linkedin.com/in/nishan'
    }
  },
  // Add other team members...
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-[4/5]">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Social Media Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-4">
          {member.social.facebook && (
            <a
              href={member.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
          )}
          {member.social.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    { id: 'all', label: 'All Projects', icon: Star },
    { id: 'social-media', label: 'Social Media', icon: Instagram },
    { id: 'graphic-design', label: 'Graphic Design', icon: Palette },
    { id: 'web-development', label: 'Web Development', icon: Globe }
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Social Media Transformation',
      category: 'social-media',
      client: 'FreshBite Restaurant',
      industry: 'Food & Beverage',
      challenge: 'Low social media engagement and inconsistent brand presence.',
      solution: 'Developed a comprehensive social media strategy with engaging content and targeted ad campaigns.',
      results: [
        'Increased Instagram followers by 250%',
        'Boosted engagement rate to 5.8%',
        'Generated 45% more online orders'
      ],
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      testimonial: {
        quote: "Nishan Marketing transformed our social media presence. Our engagement has skyrocketed, and we're seeing real business results.",
        author: 'Sarah Chen',
        role: 'Marketing Director',
        rating: 5
      },
      details: {
        overview: "FreshBite Restaurant needed to establish a strong social media presence to attract younger customers and increase online orders. Their existing social media strategy was inconsistent and failed to showcase their unique dining experience.",
        approach: [
          "Conducted comprehensive social media audit",
          "Developed content calendar focusing on food photography and behind-the-scenes content",
          "Implemented targeted Instagram and Facebook ad campaigns",
          "Created engaging Instagram Stories and Reels",
          "Established influencer partnerships"
        ],
        implementation: "Over 6 months, we executed a multi-channel social media strategy focusing on Instagram and Facebook. We created high-quality food photography, engaging video content, and interactive Stories to showcase FreshBite's unique atmosphere and menu items.",
        metrics: [
          { label: 'Instagram Followers', value: '250%', description: 'Growth in 6 months' },
          { label: 'Engagement Rate', value: '5.8%', description: 'Up from 0.8%' },
          { label: 'Online Orders', value: '45%', description: 'Increase in monthly orders' },
          { label: 'Website Traffic', value: '180%', description: 'Increase from social media' }
        ]
      }
    },
    {
      id: '2',
      title: 'Brand Identity Redesign',
      category: 'graphic-design',
      client: 'EcoLife Products',
      industry: 'Sustainable Goods',
      challenge: 'Outdated brand identity not reflecting eco-friendly values.',
      solution: 'Complete brand redesign including logo, packaging, and marketing materials.',
      results: [
        'Brand recognition increased by 180%',
        'Product sales up by 65%',
        'Successfully entered 3 new markets'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '3',
      title: 'E-Commerce Website Launch',
      category: 'web-development',
      client: 'Urban Style',
      industry: 'Fashion',
      challenge: 'No online presence during COVID-19 lockdown.',
      solution: 'Built a modern e-commerce platform with seamless user experience.',
      results: [
        'Achieved $100K in first-month sales',
        'Mobile conversion rate of 3.2%',
        '45% return customer rate'
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '4',
      title: 'Digital Marketing Campaign',
      category: 'social-media',
      client: 'FitLife Gym',
      industry: 'Health & Fitness',
      challenge: 'Struggling to attract new members and retain existing ones during post-COVID reopening.',
      solution: 'Created an integrated digital marketing campaign focusing on safety measures and personalized fitness journeys.',
      results: [
        'Membership sign-ups increased by 85%',
        'Social media engagement up by 300%',
        'Client retention rate improved to 92%'
      ],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: {
        overview: "FitLife Gym faced significant challenges in rebuilding membership base after COVID-19 lockdowns. They needed to communicate their enhanced safety measures and rebuild trust with both existing and potential members.",
        approach: [
          "Developed targeted social media campaigns",
          "Created virtual tour content",
          "Implemented email marketing strategy",
          "Launched referral program",
          "Showcased safety protocols through video content"
        ],
        implementation: "We implemented a 3-month digital marketing campaign across multiple channels, focusing on safety measures, member success stories, and special reopening offers.",
        metrics: [
          { label: 'New Members', value: '85%', description: 'Increase in sign-ups' },
          { label: 'Social Engagement', value: '300%', description: 'Growth in interaction' },
          { label: 'Retention Rate', value: '92%', description: 'Member retention' },
          { label: 'Lead Generation', value: '150%', description: 'Increase in leads' }
        ]
      }
    },
    {
      id: '5',
      title: 'E-commerce Website Redesign',
      category: 'web-development',
      client: 'Artisan Crafts',
      industry: 'Handmade Goods',
      challenge: 'Poor website performance and low conversion rates on their existing e-commerce platform.',
      solution: 'Complete website redesign with focus on user experience and mobile optimization.',
      results: [
        'Conversion rate increased to 4.2%',
        'Mobile sales up by 125%',
        'Page load time reduced by 65%'
      ],
      image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      details: {
        overview: "Artisan Crafts needed a modern, fast-loading e-commerce website that would showcase their handmade products effectively and provide a seamless shopping experience.",
        approach: [
          "Conducted UX research and analysis",
          "Implemented modern e-commerce features",
          "Optimized for mobile devices",
          "Enhanced product photography",
          "Integrated advanced analytics"
        ],
        implementation: "The redesign project was completed in 12 weeks, including migration of existing products and customer data. We focused on creating a responsive design with optimized images and improved checkout flow.",
        metrics: [
          { label: 'Conversion Rate', value: '4.2%', description: 'Up from 1.8%' },
          { label: 'Mobile Sales', value: '125%', description: 'Increase in revenue' },
          { label: 'Load Time', value: '65%', description: 'Reduction' },
          { label: 'Cart Abandonment', value: '40%', description: 'Reduction' }
        ]
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Add Case Study Modal Component
  const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-600">{project.details?.overview}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.details?.approach.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Implementation</h3>
              <p className="text-gray-600">{project.details?.implementation}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.details?.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {project.testimonial && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                <blockquote className="text-gray-600 italic mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">{project.testimonial.author}</div>
                    <div className="text-gray-500">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container relative">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Work Speaks for <span className="text-primary">Itself</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We've helped businesses grow, engage, and convert with our cutting-edge 
              digital marketing strategies. Check out our latest projects and success stories.
            </p>
            <a href="/contact" className="btn-primary">
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as ProjectCategory)}
                className={`${
                  selectedCategory === category.id
                    ? 'bg-primary text-secondary'
                    : 'bg-white text-secondary hover:bg-gray-100'
                } flex items-center px-6 py-3 rounded-lg font-semibold transition-all`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-primary font-semibold">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">{project.industry}</span>
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-gray-700 mb-4">{project.challenge}</p>
                    <div className="flex items-center text-primary font-semibold">
                      View Case Study
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Create Something Amazing for Your Brand
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to transform your digital presence? Let's start a conversation about your brand's future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn bg-primary text-white hover:bg-primary-dark">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="btn border-2 border-white text-white hover:bg-white/10">
                  View Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Meet Our Creative Team
            </h2>
            <p className="text-gray-600 text-lg">
              The talented individuals behind our successful projects and happy clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio; 
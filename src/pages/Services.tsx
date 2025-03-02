import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Instagram,
  Facebook,
  Linkedin,
  Palette,
  Globe,
  ArrowRight,
  BarChart,
  Layout,
  Smartphone,
  ShoppingBag,
  MessageCircle,
  PenTool,
  Code,
  Zap,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: Instagram,
      title: 'Social Media Marketing',
      description: "We create engaging content, run targeted ad campaigns, and grow your brand's community on social media platforms.",
      features: [
        'Social Media Strategy',
        'Content Creation & Management',
        'Paid Advertising',
        'Analytics & Performance Tracking'
      ],
      platforms: [Facebook, Instagram, Linkedin],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      cta: 'Grow Your Audience Today'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Our creative designs help your brand stand out with visually stunning graphics for social media, branding, and marketing materials.',
      features: [
        'Logo & Branding Design',
        'Social Media Graphics',
        'Marketing Materials',
        'Website UI/UX Design'
      ],
      tools: [PenTool, Layout, Smartphone],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      cta: 'Get Custom Designs Now'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'We develop fast, responsive, and SEO-optimized websites that drive conversions and enhance user experience.',
      features: [
        'Custom WordPress & Shopify Development',
        'Mobile-Responsive Design',
        'SEO & Speed Optimization',
        'Landing Pages & E-Commerce Solutions'
      ],
      tools: [Code, ShoppingBag, Zap],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      cta: 'Start Your Website Project'
    }
  ];

  const stats = [
    { number: '200%', label: 'Average Engagement Increase' },
    { number: '50+', label: 'Brands Transformed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support & Maintenance' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container relative">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Brand with <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We provide powerful, data-driven solutions to help businesses grow their online 
              presence and make a lasting impact in the digital world.
            </p>
            <a href="/contact" className="btn-primary">
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions tailored to your brand's unique needs 
              and goals. Each service is designed to maximize your online impact and ROI.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <service.icon className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-primary w-full text-center"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn bg-primary text-white hover:bg-primary-dark">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="btn border-2 border-white text-white hover:bg-white/10">
                  View Our Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 
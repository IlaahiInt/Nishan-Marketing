import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationModal from '../components/ConsultationModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl text-white font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Leave Your Mark with{' '}
              <span className="text-primary">Powerful Marketing</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your brand's digital presence with our expert marketing solutions. We combine creativity with strategy to deliver exceptional results.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="btn-primary"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link 
                to="/portfolio" 
                className="btn bg-white text-secondary hover:bg-gray-100"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Social Media Marketing',
                description: 'Engage your audience and build brand loyalty through strategic social media management.'
              },
              {
                icon: Briefcase,
                title: 'Graphic Design',
                description: 'Create stunning visuals that capture attention and communicate your brand message.'
              },
              {
                icon: Award,
                title: 'Website Development',
                description: 'Build responsive, user-friendly websites that convert visitors into customers.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary font-semibold flex items-center hover:text-primary-dark">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '250+', label: 'Clients Served' },
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Industry Awards' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Marketing Trends
            </h2>
            <p className="text-white/90 mb-8">
              Subscribe to our newsletter for the latest marketing insights and tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn bg-primary text-white hover:bg-primary-dark">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Add Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Home;
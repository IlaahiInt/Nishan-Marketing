import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Lightbulb, 
  Target, 
  Users, 
  ArrowRight, 
  Award,
  TrendingUp,
  Zap,
  HandshakeIcon,
  Palette,
  Code,
  LineChart,
  Camera
} from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We craft unique, engaging content that sets brands apart.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and embrace new technologies.'
    },
    {
      icon: Target,
      title: 'Results-Oriented',
      description: 'We focus on delivering measurable success for our clients.'
    },
    {
      icon: HandshakeIcon,
      title: 'Collaboration',
      description: 'We partner with brands to achieve long-term growth together.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Founded',
      description: 'Nishan Marketing was established with a vision to transform digital marketing.'
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded our team and services to meet growing client demands.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received multiple awards for our innovative marketing campaigns.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Started serving clients across multiple countries.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: Palette,
      description: 'With over 10 years of experience in branding and design, Sarah leads our creative team with innovative vision and strategic thinking.'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: Code,
      description: 'A full-stack developer with expertise in creating seamless, user-friendly websites and digital experiences.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: LineChart,
      description: 'Emily specializes in data-driven marketing strategies that deliver measurable results for our clients.'
    },
    {
      name: 'David Kim',
      role: 'Content Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      icon: Camera,
      description: 'A storyteller at heart, David crafts compelling content that resonates with audiences and drives engagement.'
    }
  ];

  // Add stats data
  const stats = [
    { number: '250+', label: 'Clients Served' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Industry Awards' }
  ];

  // Fix the Why Choose Us section
  const features = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Approach',
      description: 'We make decisions based on real data and analytics to ensure the best results for your business.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of seasoned professionals brings years of industry experience to every project.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: "We've helped numerous brands achieve significant growth and recognition in their industries."
    }
  ];

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
              Empowering Brands to <span className="text-primary">Leave Their Mark</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're more than just a marketing agency. We're your partners in growth, 
              dedicated to transforming your digital presence and driving real results.
            </p>
            <a href="/portfolio" className="btn-primary">
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Add Stats Section after Hero */}
      <section className="py-16 bg-gray-50">
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

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey: From Vision to Impact</h2>
            <p className="text-xl text-gray-600 mb-12">
              Founded in 2020, Nishan Marketing emerged from a simple yet powerful vision: 
              to help businesses thrive in the digital age through innovative marketing solutions. 
              What started as a small team of passionate marketers has grown into a full-service 
              digital marketing agency trusted by brands worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Creative Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together creativity, technical expertise, 
              and strategic thinking to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <member.icon className="h-6 w-6 text-primary" />
                    <span className="text-gray-600 font-medium">{member.role}</span>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Nishan Marketing, we believe in the power of strong branding and digital 
              marketing to help businesses make a lasting impact. Our goal is to empower 
              brands to reach their full potential through innovative, data-driven strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fix Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6">Why Brands Trust Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with data-driven strategies to deliver exceptional results 
              that help our clients stand out in today's competitive digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Make an Impact Together
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to transform your digital presence? Let's start a conversation about 
                your brand's future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn bg-primary text-secondary hover:bg-primary-dark">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a href="/portfolio" className="btn bg-secondary text-white hover:bg-secondary-dark">
                  View Our Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
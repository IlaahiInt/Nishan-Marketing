import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Globe
} from 'lucide-react';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const contactItems = [
    { icon: Mail, text: "info@nishanmarketing.com" },
    { icon: Globe, text: "www.nishanmarketing.com" },
    { icon: MapPin, text: "Office#5, Opposite Fatima Hospital, University Road, Sargodha" },
    { icon: Phone, text: "+92 306 9098 198" },
    { icon: Clock, text: "Mon - Fri: 9:00 AM - 6:00 PM PKT" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Work Together to <span className="text-primary">Leave Your Mark!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help you grow. Whether you have a question or need a custom marketing strategy, reach out to us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-20">
        {/* Update the background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Company Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">How Can We Help? *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
                    <option value="">Select a Service</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="web-development">Website Development</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary text-white py-4 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  <Send className="ml-2 h-5 w-5" />
                </button>

                {formStatus === 'success' && (
                  <div className="flex items-center justify-center bg-green-50 text-green-700 p-4 rounded-lg mt-4">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Thanks for reaching out! Our team will get back to you within 24 hours.</span>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">Our Contact Information</h2>
                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4"
                      >
                        <item.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <span>{item.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-secondary mb-6">Follow Us for More Insights</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group">
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                  <a href="#" className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group">
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                  <a href="#" className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </a>
                  <a href="#" className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group">
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg p-2">
                <div className="rounded-xl overflow-hidden h-[300px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.1990934882733!2d72.66918847556543!3d32.0833258266877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177e1e58aaa91%3A0x8fe431b79e6e6265!2sUniversity%20Rd%2C%20Sargodha%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709669145435!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Schedule a free consultation and let's discuss how we can help you achieve your marketing goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn bg-primary text-white hover:bg-primary-dark">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white/10">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Button */}
      <button className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors">
        <MessageSquare className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Contact; 
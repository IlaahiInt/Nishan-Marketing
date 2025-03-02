import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logoLight from '../assets/images/white-logo.png';
import ConsultationModal from './ConsultationModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialLinks = {
    facebook: "https://facebook.com/NishanMarketing",
    twitter: "https://twitter.com/NishanMarketing",
    instagram: "https://instagram.com/NishanMarketing",
    linkedin: "https://linkedin.com/company/NishanMarketing"
  };

  return (
    <>
      {/* Pre-footer CTA Section */}
      <section className="pre-footer">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="pre-footer-heading">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="pre-footer-text">
              Let's create something amazing together. Get in touch with our team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link 
                to="/portfolio" 
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="footer-section">
              <img 
                src={logoLight}
                alt="Nishan Marketing" 
                className="h-16 w-auto mb-6" 
              />
              <p className="footer-text">
                Transforming brands with innovative digital marketing solutions. Your success is our mission.
              </p>
              <div className="flex space-x-4 mt-6">
                <a 
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/services" className="footer-link">Services</a></li>
                <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
                <li><a href="/blog" className="footer-link">Blog</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-heading">Services</h3>
              <ul className="space-y-3">
                <li><a href="/services/social-media" className="footer-link">Social Media Marketing</a></li>
                <li><a href="/services/seo" className="footer-link">Search Engine Optimization</a></li>
                <li><a href="/services/web-design" className="footer-link">Web Design & Development</a></li>
                <li><a href="/services/branding" className="footer-link">Branding & Identity</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="space-y-3">
                <li className="footer-text flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  info@nishanmarketing.com
                </li>
                <li className="footer-text flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  +92 306 9098 198
                </li>
                <li className="footer-text flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Office#5, Opposite Fatima Hospital,<br />
                  University Road, Sargodha
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center md:flex md:justify-between">
            <p className="footer-text">
              © {new Date().getFullYear()} Nishan Marketing. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
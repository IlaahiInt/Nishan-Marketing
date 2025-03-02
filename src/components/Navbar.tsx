import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logoDark from '../assets/images/dark-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = {
    facebook: "https://facebook.com/NishanMarketing",
    twitter: "https://twitter.com/NishanMarketing",
    instagram: "https://instagram.com/NishanMarketing",
    linkedin: "https://linkedin.com/company/NishanMarketing"
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide top bar based on scroll direction
      if (currentScrollY > lastScrollY) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Pre-header */}
      <div 
        className={`bg-secondary transition-all duration-500 transform ${
          hideTopBar ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 text-sm text-white">
              <a href="mailto:info@nishanmarketing.com" 
                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">info@nishanmarketing.com</span>
              </a>
              <a href="tel:+923069098198" 
                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+92 306 9098 198</span>
              </a>
              <div className="hidden md:flex items-center gap-2 text-white">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Sargodha, Pakistan</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`bg-white transition-all duration-300 ${
          hideTopBar ? 'shadow-lg' : ''
        }`}
        style={{
          transform: hideTopBar ? 'translateY(-32px)' : 'translateY(0)', // 32px is the height of top bar
        }}
      >
        <div className="container">
          <div className="flex justify-between items-center h-20">
            <Link 
              to="/" 
              className="flex items-center"
            >
              <img 
                src={logoDark} 
                alt="Nishan Marketing" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-10'
                } w-auto`}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Portfolio', 'Blog'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`nav-link relative overflow-hidden group`}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="btn-primary transform hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <div className="py-4 space-y-2">
              {['Home', 'Services', 'About', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`bg-[#103d5d] shadow-lg sticky top-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-bold">SysCare</span>
              <span className="text-[#a3d4ff] text-2xl font-bold">IT</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              Contact Us
            </Link>
            <Link 
              to="/get-quote" 
              className="bg-[#245684] hover:bg-[#1a3d6b] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 ml-4 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#a3d4ff] focus:outline-none transition-all duration-300"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d3452] transition-all duration-500 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link 
              to="/get-quote" 
              className="bg-[#245684] hover:bg-[#1a3d6b] text-white block px-6 py-2 rounded-lg font-medium transition-all duration-300 mx-3 my-2 text-center transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "IT Support",
      description: "Comprehensive IT support services to keep your business running smoothly with minimal downtime.",
      icon: "💻"
    },
    {
      title: "Security",
      description: "Advanced security solutions to protect your digital assets from threats and vulnerabilities.",
      icon: "🔒"
    },
    {
      title: "Solutions",
      description: "Customized IT solutions tailored to your specific business needs and challenges.",
      icon: "🛠️"
    },
    {
      title: "Projects & Automation",
      description: "Streamline your operations with our project management and automation services.",
      icon: "🤖"
    },
    {
      title: "Internet & VOIP",
      description: "Reliable internet and VOIP solutions for seamless communication and connectivity.",
      icon: "🌐"
    },
    {
      title: "Digital Services",
      description: "Transform your business with our cutting-edge digital services and online solutions.",
      icon: "🖥️"
    },
    {
      title: "IT Training",
      description: "Enhance your team's skills with our professional IT training programs.",
      icon: "🎓"
    },
    {
      title: "CRM & ERP Solutions",
      description: "Integrated CRM and ERP systems to optimize your business processes and customer relationships.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Services</h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-[#ffffff] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">SysCare Services</h2>
            <div className="w-24 h-1 bg-[#245684] mx-auto"></div>
            <p className="text-[#170f17] mt-4 max-w-2xl mx-auto">
              We offer a comprehensive range of IT services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#245684]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#103d5d] mb-2">{service.title}</h3>
                <p className="text-[#170f17]">{service.description}</p>
                <button className="mt-4 text-[#245684] font-semibold hover:underline">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#245684] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#103d5d] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#103d5d] transition">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#170f17] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SysCare Digital</h3>
              <p className="text-gray-400">
                Providing innovative digital solutions to help businesses grow and succeed.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#245684]">Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}><a href="#" className="hover:text-[#245684] transition">{service.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#245684]">Services</h4>
              <ul className="space-y-2">
                {services.slice(4).map((service, index) => (
                  <li key={index}><a href="#" className="hover:text-[#245684] transition">{service.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#245684]">Contact</h4>
              <address className="not-italic text-gray-400">
                <p>401 Docklands Drive</p>
                <p>Melbourne,  VIC 3008.</p>
                <p className="mt-2">Phone: +61 3 8373 4877</p>
                <p>Email: info@syscare.com.au</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SysCare Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or ready to start your IT transformation? Reach out to our expert team today.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#170f17] mb-6">Send Us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you for contacting us! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Managed IT Services">Managed IT Services</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Network Infrastructure">Network Infrastructure</option>
                  <option value="Data Backup & Recovery">Data Backup & Recovery</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#245684] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#103d5d] text-white font-semibold rounded-lg hover:bg-[#245684] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#170f17] mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#103d5d] text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#245684] mb-1">Our Office</h3>
                    <p className="text-gray-600">Melbourne Office : Unit 12, Level 10, 401 Docklands Drive, Docklands, VIC 3008</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#103d5d] text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#245684] mb-1">Phone</h3>
                    <p className="text-gray-600">1300 69 79 72</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#103d5d] text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#245684] mb-1">Email</h3>
                    <p className="text-gray-600">info@syscare.com.au</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#170f17] mb-6">Business Hours</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium text-[#245684]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium text-[#245684]">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium text-[#245684]">Closed</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#245684] mb-4">Emergency Support</h3>
                <p className="text-gray-600 mb-4">For critical issues outside business hours, our emergency support team is available 24/7.</p>
                <p className="text-[#103d5d] font-medium">Emergency Hotline: 1300 69 79 72</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#170f17] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us on the Map</h2>
          <div className="bg-gray-300 h-96 rounded-xl overflow-hidden">
            {/* This would be replaced with an actual map component like Google Maps */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#103d5d] to-[#245684]">
              <p className="text-white text-xl">Map Integration Would Go Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
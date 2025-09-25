import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/footer.jsx';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaChevronRight } from 'react-icons/fa';

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
    <Navigation />
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
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
      
      {/* Contact Header Section */}
      <div className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white pb-32 pt-24 md:pt-32 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white"></div>
          <div className="absolute bottom-20 right-16 w-48 h-48 rounded-full border-2 border-white"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-40 right-32 animate-float-delayed">
          <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-1/2 left-1/3 animate-float">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Contact <span className="text-[#a3c1e0]">SysCare</span> <br></br>IT Solutions
              </h1>
              <p className={`text-xl text-[#c9d8eb] mb-8 max-w-lg transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Whether you’re looking for 24/7 support contact, service inquiries, or expert advice, the team at SysCare IT Solutions is ready to assist.
              </p>
              <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <a href="#contact-form" className="bg-white text-[#103d5d] px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center">
                  Contact Now <FaChevronRight className="ml-2" />
                </a>
                <a href="#contact-methods" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d]">
                  Other Methods
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className={`relative transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="absolute -inset-6 bg-[#a3c1e0] rounded-2xl rotate-3 opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center p-6">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#103d5d] flex items-center justify-center">
                      <FaHeadset className="text-4xl text-[#a3c1e0]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-[#c9d8eb]">Reach out today to discuss how we can simplify and secure your IT.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <section id="contact-methods" className="py-16 px-4 md:px-8 lg:px-16 -mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg border-l-4 border-transparent hover:border-[#245684]">
              <div className="w-16 h-16 rounded-full bg-[#103d5d] flex items-center justify-center mb-6">
                <FaPhoneAlt className="text-2xl text-[#a3c1e0] transition-all duration-300 hover:-translate-y-1" />
              </div>
              <h3 className="text-xl font-semibold text-[#103d5d] mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:1300697972" className="text-[#245684] font-medium hover:underline">1300 69 79 72</a>
            </div>
            
            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg border-l-4 border-transparent hover:border-[#245684]">
              <div className="w-16 h-16 rounded-full bg-[#103d5d] flex items-center justify-center mb-6">
                <FaEnvelope className="text-2xl text-[#a3c1e0] transition-all duration-300 hover:-translate-y-1" />
              </div>
              <h3 className="text-xl font-semibold text-[#103d5d] mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us a message anytime</p>
              <a href="mailto:info@syscare.com.au" className="text-[#245684] font-medium hover:underline">info@syscare.com.au</a>
            </div>
            
            {/* Office */}
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg border-l-4 border-transparent hover:border-[#245684]">
              <div className="w-16 h-16 rounded-full bg-[#103d5d] flex items-center justify-center mb-6">
                <FaMapMarkerAlt className="text-2xl text-[#a3c1e0] transition-all duration-300 hover:-translate-y-1" />
              </div>
              <h3 className="text-xl font-semibold text-[#103d5d] mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come see us at our headquarters</p>
              <p className="text-[#245684] font-medium">Unit 12, Level 10, 401 Docklands Drive, Docklands, VIC 3008</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="contact-form" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#245684] mb-1">Our Office</h3>
                    <p className="text-gray-600">Melbourne Office : Unit 12, Level 10, 401 Docklands Drive, Docklands, VIC 3008</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#103d5d] text-white p-3 rounded-full mr-4">
                    <FaPhoneAlt className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#245684] mb-1">Phone</h3>
                    <p className="text-gray-600">1300 69 79 72</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#103d5d] text-white p-3 rounded-full mr-4">
                    <FaEnvelope className="h-6 w-6" />
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
                <p className="text-gray-600 mb-4">Technology issues don’t keep office hours and neither do we. With our 24/7 support contact, SysCare IT Solutions ensures your business stays online, secure, and productive at all times.</p>
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
      
      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
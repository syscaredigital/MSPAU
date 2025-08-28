import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHeadset, FaChevronRight, FaCloud, FaShieldAlt, FaTools, FaRobot, FaGraduationCap, FaLightbulb, FaChartLine, FaGlobe, FaTimes } from 'react-icons/fa';

// Header Component
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
    <header className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#103d5d] rounded-lg flex items-center justify-center mr-3">
            <FaCloud className="text-white text-xl" />
          </div>
          <span className="text-2xl font-bold text-[#103d5d]">SysCare</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-[#245684] transition-colors">Home</a>
          <a href="/services" className="text-[#245684] font-medium">Services</a>
          <a href="/about" className="text-gray-700 hover:text-[#245684] transition-colors">About</a>
          <a href="/contact" className="text-gray-700 hover:text-[#245684] transition-colors">Contact</a>
        </nav>
        
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <a href="/" className="block py-2 text-gray-700 hover:text-[#245684]">Home</a>
          <a href="/services" className="block py-2 text-[#245684] font-medium">Services</a>
          <a href="/about" className="block py-2 text-gray-700 hover:text-[#245684]">About</a>
          <a href="/contact" className="block py-2 text-gray-700 hover:text-[#245684]">Contact</a>
        </div>
      )}
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#103d5d] text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SysCare IT Solutions</h3>
          <p className="text-gray-300">Providing comprehensive IT services to help your business thrive in the digital age.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300">123 Tech Street</p>
          <p className="text-gray-300">Sydney, NSW 2000</p>
          <p className="text-gray-300">Phone: 1300 697 972</p>
          <p className="text-gray-300">Email: info@syscare.com</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>© 2023 SysCare IT Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

// SubServiceModal Component - Positioned near the clicked service
const SubServiceModal = ({ isOpen, onClose, subService, mainService, position }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const modalRect = modalRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Calculate initial position (centered near the clicked element)
      let top = position.top - modalRect.height / 2;
      let left = position.left - modalRect.width / 2;
      
      // Adjust if modal goes off screen to the right
      if (left + modalRect.width > viewportWidth - 20) {
        left = viewportWidth - modalRect.width - 20;
      }
      
      // Adjust if modal goes off screen to the left
      if (left < 20) {
        left = 20;
      }
      
      // Adjust if modal goes off screen to the bottom
      if (top + modalRect.height > viewportHeight - 20) {
        top = viewportHeight - modalRect.height - 20;
      }
      
      // Adjust if modal goes off screen to the top
      if (top < 20) {
        top = 20;
      }
      
      modalRef.current.style.top = `${top}px`;
      modalRef.current.style.left = `${left}px`;
    }
  }, [isOpen, position]);

  if (!isOpen) return null;

  // Check if this is the Private Cloud service to show the special list
  const isPrivateCloud = subService.title === "SysCare Private Cloud";
  
  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div 
        ref={modalRef}
        className="bg-white rounded-lg max-w-md w-full max-h-[85vh] overflow-y-auto border border-gray-200 shadow-xl absolute"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-[#103d5d] text-white">
          <h3 className="text-lg font-bold">{subService.title}</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        
        <div className="p-4">
          {isPrivateCloud ? (
            <div className="mt-4">
              <h4 className="font-bold text-[#103d5d] mb-3 text-sm border-b border-gray-200 pb-2">
                Our Private Cloud Solutions
              </h4>
              
              <div className="grid grid-cols-1 gap-2">
                {[
                  { title: "Private Cloud", desc: "Dedicated cloud infrastructure for your organization" },
                  { title: "Hosted Servers", desc: "Fully managed server hosting solutions" },
                  { title: "Dedicated Virtual Servers", desc: "Isolated virtual servers with guaranteed resources" },
                  { title: "Virtual Desktops", desc: "Secure remote desktop solutions for your team" },
                  { title: "Rack Space Hire", desc: "Colocation services for your hardware" },
                  { title: "Leased Servers", desc: "Flexible server leasing options" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-2 rounded border border-gray-200 hover:border-[#245684] transition-all duration-200 text-xs group"
                  >
                    <h5 className="font-semibold text-[#103d5d] group-hover:text-[#245684] transition-colors duration-200">{item.title}</h5>
                    <p className="text-gray-700 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-gray-100 p-3 rounded-lg mb-4">
                <p className="text-gray-800 text-sm leading-relaxed">{subService.description}</p>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-lg">
                <h4 className="font-semibold text-[#103d5d] mb-1 text-sm">
                  Part of: {mainService}
                </h4>
                <p className="text-xs text-gray-700">
                  Contact us to learn more about how we can implement this solution for your business.
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-2 bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded font-medium border border-gray-300 hover:bg-gray-300 transition-colors duration-200 text-xs"
          >
            Close
          </button>
          <Link
            to="/contact"
            className="bg-[#245684] text-white px-3 py-1.5 rounded font-medium hover:bg-[#103d5d] transition-all duration-200 text-xs"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSubService, setSelectedSubService] = useState(null);
  const [selectedMainService, setSelectedMainService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHeaderVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleService = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  const openSubServiceModal = (mainService, subService, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Position modal near the clicked element
    setModalPosition({
      top: rect.top + scrollTop + (rect.height / 2),
      left: rect.left + scrollLeft + (rect.width / 2)
    });
    
    setSelectedMainService(mainService);
    setSelectedSubService(subService);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubService(null);
    setSelectedMainService(null);
  };

  const services = [
    {
      main: "Cloud Solutions",
      icon: <FaCloud className="text-2xl text-[#245684]" />,
      category: "infrastructure",
      subs: [
        {
          title: "SysCare Private Cloud",
          description: "Dedicated private cloud infrastructure tailored to your organization's specific needs."
        },
        {
          title: "Hosted Services",
          description: "Reliable hosting solutions for applications, data, and business systems."
        }
      ]
    },
    {
      main: "IT Security",
      icon: <FaShieldAlt className="text-2xl text-[#245684]" />,
      category: "security",
      subs: [
        {
          title: "Cybersecurity Consultancy Services",
          description: "Expert guidance to strengthen your security posture and mitigate risks."
        },
        {
          title: "Managed Security Services",
          description: "Proactive monitoring and management of your security infrastructure."
        }
      ]
    },
    {
      main: "IT Support",
      icon: <FaTools className="text-2xl text-[#245684]" />,
      category: "support",
      subs: [
        {
          title: "Service Desk",
          description: "Dedicated help desk support for all your IT issues and queries."
        },
        {
          title: "Managed IT Services",
          description: "End-to-end management of your IT infrastructure and operations."
        }
      ]
    },
    {
      main: "Projects & Automation",
      icon: <FaRobot className="text-2xl text-[#245684]" />,
      category: "solutions",
      subs: [
        {
          title: "IT Infra Projects",
          description: "Design and implementation of robust IT infrastructure solutions."
        },
        {
          title: "Office IT Automation",
          description: "Automate routine tasks to improve efficiency and productivity."
        }
      ]
    },
    {
      main: "IT Training",
      icon: <FaGraduationCap className="text-2xl text-[#245684]" />,
      category: "training",
      subs: [
        {
          title: "Security Training",
          description: "Specialized training to improve your organization's security awareness."
        },
        {
          title: "Cloud Training",
          description: "Comprehensive training on cloud technologies and best practices."
        }
      ]
    },
    {
      main: "Digital Services",
      icon: <FaLightbulb className="text-2xl text-[#245684]" />,
      category: "solutions",
      subs: [
        {
          title: "Design & Development",
          description: "Custom design and development services for your digital presence."
        },
        {
          title: "Digital Marketing",
          description: "Boost your online visibility and reach with our marketing expertise."
        }
      ]
    },
    {
      main: "CRM & ERP Solutions",
      icon: <FaChartLine className="text-2xl text-[#245684]" />,
      category: "solutions",
      subs: [
        {
          title: "Small Business Solutions",
          description: "Tailored CRM and ERP solutions for small businesses."
        },
        {
          title: "Enterprise Solutions",
          description: "Scalable CRM and ERP systems for large organizations."
        }
      ]
    },
    {
      main: "Internet & VOIP",
      icon: <FaGlobe className="text-2xl text-[#245684]" />,
      category: "infrastructure",
      subs: [
        {
          title: "Connectivity",
          description: "High-speed internet and network solutions for seamless operations."
        },
        {
          title: "VoIP & Video",
          description: "Crystal-clear voice and video communication systems."
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'support', name: 'Support' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'training', name: 'Training' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Use the Header component instead of Navigation */}
      <Header />
      
      {/* SubService Modal */}
      <SubServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        subService={selectedSubService} 
        mainService={selectedMainService}
        position={modalPosition}
      />
      
      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white pb-24 pt-20 md:pt-28 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
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
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Our <span className="text-[#a3c1e0]">Services</span>
                </h1>
                <p className={`text-lg text-[#c9d8eb] mb-6 max-w-lg transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Comprehensive IT solutions to drive your business forward and transform your IT infrastructure.
                </p>
                <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <a href="#services" className="bg-white text-[#103d5d] px-5 py-2 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center text-sm">
                    Explore Services <FaChevronRight className="ml-2" />
                  </a>
                  <a href="#contact" className="border border-white text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d] text-sm">
                    Contact Us
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className={`relative transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="absolute -inset-4 bg-[#a3c1e0] rounded-xl rotate-3 opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#103d5d] flex items-center justify-center">
                        <FaHeadset className="text-3xl text-[#a3c1e0]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                      <p className="text-[#c9d8eb] text-sm">Our team of experts is ready to help you transform your IT infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="py-12 bg-gray-50 px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">SysCare Services</h2>
              <div className="w-20 h-1 bg-[#245684] mx-auto mb-4"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                At SysCare, we are committed to delivering exceptional quality in every service we provide.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300 text-sm ${
                    activeCategory === category.id
                      ? 'bg-[#245684] text-white shadow-md'
                      : 'bg-white text-[#245684] border border-[#245684] hover:bg-[#245684] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="p-4 flex-grow">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-[#103d5d] bg-opacity-10 mr-2">
                        {service.icon}
                      </div>
                      <h3 className="text-base font-bold text-[#103d5d] leading-tight">{service.main}</h3>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-3 mt-1">
                      {service.subs.map((sub, subIndex) => (
                        <div 
                          key={subIndex} 
                          className="mb-3 last:mb-0 cursor-pointer hover:bg-gray-50 p-1.5 rounded transition-colors"
                          onClick={(e) => openSubServiceModal(service.main, sub, e)}
                        >
                          <h4 className="font-semibold text-[#103d5d] text-sm">{sub.title}</h4>
                          <p className="text-gray-700 text-xs mt-1 leading-relaxed line-clamp-2">
                            {sub.description}
                          </p>
                          <span className="text-[#245684] text-xs font-medium mt-1 inline-block">
                            Click to learn more
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-4 pb-3">
                    <button 
                      onClick={() => toggleService(index)}
                      className="text-[#245684] font-medium flex items-center hover:underline text-xs"
                    >
                      {expandedService === index ? 'Show less' : 'Learn more'}
                      <svg 
                        className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                          expandedService === index ? 'transform rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Process</h2>
              <div className="w-20 h-1 bg-[#245684] mx-auto mb-4"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                We follow a structured approach to ensure we deliver the best solutions for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#103d5d] bg-opacity-10 flex items-center justify-center text-[#103d5d] font-bold text-sm">1</div>
                <h3 className="text-lg font-semibold mb-1">Consultation</h3>
                <p className="text-gray-600 text-sm">We analyze your business needs and challenges</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#103d5d] bg-opacity-10 flex items-center justify-center text-[#103d5d] font-bold text-sm">2</div>
                <h3 className="text-lg font-semibold mb-1">Planning</h3>
                <p className="text-gray-600 text-sm">We design a tailored solution for your business</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#103d5d] bg-opacity-10 flex items-center justify-center text-[#103d5d] font-bold text-sm">3</div>
                <h3 className="text-lg font-semibold mb-1">Implementation</h3>
                <p className="text-gray-600 text-sm">We deploy the solution with minimal disruption</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#103d5d] bg-opacity-10 flex items-center justify-center text-[#103d5d] font-bold text-sm">4</div>
                <h3 className="text-lg font-semibold mb-1">Support</h3>
                <p className="text-gray-600 text-sm">We provide ongoing maintenance and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 bg-[#103d5d] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 text-gray-300">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="group relative bg-white text-[#103d5d] px-6 py-2 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-lg text-center text-sm">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-[#245684] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <a href="tel:1300697972" className="group relative bg-transparent border border-white text-white px-6 py-2 rounded-full font-bold overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#103d5d] text-center text-sm">
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </a>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';
import { FaHeadset, FaChevronRight, FaCloud, FaShieldAlt, FaTools, FaRobot, FaGraduationCap, FaLightbulb, FaChartLine, FaGlobe, FaTimes, FaServer, FaDesktop, FaDatabase } from 'react-icons/fa';

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
      <Navigation />
    </header>
  );
};

// SubServiceModal Component
const SubServiceModal = ({ isOpen, onClose, subService, mainService }) => {
  if (!isOpen) return null;

  // Check if this is the Private Cloud service to show the special list
  const isPrivateCloud = subService.title === "SysCare Private Cloud";
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-[#103d5d]">{subService.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6">
          {isPrivateCloud ? (
            <div className="mt-2">
              <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Our Private Cloud Solutions:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FaServer className="text-blue-600 mr-2" />
                    <h5 className="font-medium text-blue-800">Private Cloud</h5>
                  </div>
                  <p className="text-sm text-blue-700">Dedicated cloud infrastructure for your organization</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FaServer className="text-blue-600 mr-2" />
                    <h5 className="font-medium text-blue-800">Hosted Servers</h5>
                  </div>
                  <p className="text-sm text-blue-700">Fully managed server hosting solutions</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FaServer className="text-blue-600 mr-2" />
                    <h5 className="font-medium text-blue-800">Dedicated Virtual Servers</h5>
                  </div>
                  <p className="textsm text-blue-700">Isolated virtual servers with guaranteed resources</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FaDesktop className="text-blue-600 mr-2" />
                    <h5 className="font-medium text-blue-800">Virtual Desktops</h5>
                  </div>
                  <p className="text-sm text-blue-700">Secure remote desktop solutions for your team</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FaDatabase className="text-blue-600 mr-2" />
                    <h5 className="font-medium text-blue-800">Rack Space Hire</h5>
                  </div>
                  <p className="text-sm text-blue-700">Colocation services for your hardware</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <FaServer className="text-blue-600 mr-2" />
                    <h5 className="font-medium text-blue-800">Leased Servers</h5>
                  </div>
                  <p className="text-sm text-blue-700">Flexible server leasing options</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-semibold text-[#103d5d] mb-2">Part of: {mainService}</h4>
              <p className="text-sm text-gray-600">Contact us to learn more about how we can implement this solution for your business.</p>
            </div>
          )}
        </div>
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-3 hover:bg-gray-300"
          >
            Close
          </button>
          <Link
            to="/contact"
            className="bg-[#245684] text-white px-4 py-2 rounded hover:bg-[#1a3d66]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

// Tech Background Pattern Component
const TechBackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      {/* Circuit pattern lines */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#245684] rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-[#245684] rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 border border-[#245684] rounded-full"></div>
      
      {/* Horizontal lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#245684]"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-[#245684]"></div>
      <div className="absolute top-2/3 left-0 w-full h-px bg-[#245684]"></div>
      
      {/* Vertical lines */}
      <div className="absolute left-1/4 top-0 h-full w-px bg-[#245684]"></div>
      <div className="absolute left-1/2 top-0 h-full w-px bg-[#245684]"></div>
      <div className="absolute left-3/4 top-0 h-full w-px bg-[#245684]"></div>
      
      {/* Connection dots */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#245684] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
      
      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-1/2 w-8 h-8 border-2 border-[#245684] rounded-lg animate-pulse"></div>
      <div className="absolute top-2/3 right-1/3 w-6 h-6 border-2 border-[#245684] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-10 h-10 border-2 border-[#245684] animate-pulse" style={{animationDelay: '2s'}}></div>
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

  const openSubServiceModal = (mainService, subService) => {
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
      icon: <FaCloud className="text-3xl text-blue-500" />,
      category: "infrastructure",
      subs: [
        {
          title: "SysCare Private Cloud",
          description: "Dedicated private cloud infrastructure tailored to your organization's specific needs. Our private cloud solutions provide enhanced security, control, and customization options for businesses with specific compliance requirements or specialized workloads."
        },
        {
          title: "Hosted Services",
          description: "Reliable hosting solutions for applications, data, and business systems. We offer scalable hosting options with 99.9% uptime guarantee, robust security measures, and 24/7 monitoring to ensure your critical applications are always available."
        }
      ]
    },
    {
      main: "IT Security",
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      category: "security",
      subs: [
        {
          title: "Cybersecurity Consultancy Services",
          description: "Expert guidance to strengthen your security posture and mitigate risks. Our consultants perform comprehensive security assessments, develop tailored security strategies, and help implement industry best practices to protect your digital assets."
        },
        {
          title: "Managed Security Services",
          description: "Proactive monitoring and management of your security infrastructure. Our team provides round-the-clock surveillance, threat detection, incident response, and regular security updates to keep your systems protected against evolving threats."
        }
      ]
    },
    {
      main: "IT Support",
      icon: <FaTools className="text-3xl text-green-500" />,
      category: "support",
      subs: [
        {
          title: "Service Desk",
          description: "Dedicated help desk support for all your IT issues and queries. Our service desk provides fast response times, expert troubleshooting, and personalized assistance to resolve technical problems and keep your operations running smoothly."
        },
        {
          title: "Managed IT Services",
          description: "End-to-end management of your IT infrastructure and operations. We take care of your IT needs so you can focus on your business, offering comprehensive support including system maintenance, updates, backups, and performance optimization."
        }
      ]
    },
    {
      main: "Projects & Automation",
      icon: <FaRobot className="text-3xl text-purple-500" />,
      category: "solutions",
      subs: [
        {
          title: "IT Infra Projects",
          description: "Design and implementation of robust IT infrastructure solutions. We plan and execute infrastructure projects from concept to completion, ensuring seamless integration with your existing systems and minimal disruption to your business operations."
        },
        {
          title: "Office IT Automation",
          description: "Automate routine tasks to improve efficiency and productivity. Our automation solutions streamline workflows, reduce manual errors, and free up your team to focus on higher-value activities, ultimately saving time and reducing operational costs."
        }
      ]
    },
    {
      main: "IT Training",
      icon: <FaGraduationCap className="text-3xl text-yellow-500" />,
      category: "training",
      subs: [
        {
          title: "Security Training",
          description: "Specialized training to improve your organization's security awareness. Our programs educate your team on recognizing threats, following security protocols, and responding effectively to security incidents, creating a human firewall against cyber threats."
        },
        {
          title: "Cloud Training",
          description: "Comprehensive training on cloud technologies and best practices. We offer customized training programs to help your team maximize the value of cloud investments, covering topics from basic cloud concepts to advanced architecture and optimization strategies."
        }
      ]
    },
    {
      main: "Digital Services",
      icon: <FaLightbulb className="text-3xl text-orange-500" />,
      category: "solutions",
      subs: [
        {
          title: "Design & Development",
          description: "Custom design and development services for your digital presence. We create user-friendly, responsive websites and applications that reflect your brand identity and provide exceptional experiences for your customers across all devices."
        },
        {
          title: "Digital Marketing",
          description: "Boost your online visibility and reach with our marketing expertise. Our digital marketing services include SEO, content strategy, social media management, and targeted advertising campaigns designed to increase your brand awareness and drive growth."
        }
      ]
    },
    {
      main: "CRM & ERP Solutions",
      icon: <FaChartLine className="text-3xl text-teal-500" />,
      category: "solutions",
      subs: [
        {
          title: "Small Business Solutions",
          description: "Tailored CRM and ERP solutions for small businesses. We implement cost-effective systems that help you manage customer relationships, streamline operations, and gain valuable insights to support your business growth without overwhelming complexity."
        },
        {
          title: "Enterprise Solutions",
          description: "Scalable CRM and ERP systems for large organizations. Our enterprise solutions integrate with your existing systems, provide advanced analytics capabilities, and support complex business processes across multiple departments and locations."
        }
      ]
    },
    {
      main: "Internet & VOIP",
      icon: <FaGlobe className="text-3xl text-indigo-500" />,
      category: "infrastructure",
      subs: [
        {
          title: "Connectivity",
          description: "High-speed internet and network solutions for seamless operations. We design and implement reliable network infrastructure that supports your current needs while providing scalability for future growth, ensuring fast and stable connectivity."
        },
        {
          title: "VoIP & Video",
          description: "Crystal-clear voice and video communication systems. Our VoIP solutions reduce communication costs while improving collaboration with features like video conferencing, instant messaging, and seamless integration with your existing business applications."
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
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Use the Header component instead of Navigation */}
      <Header />
      
      {/* SubService Modal */}
      <SubServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        subService={selectedSubService} 
        mainService={selectedMainService}
      />
      
      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
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
                  Our <span className="text-[#a3c1e0]">Services</span>
                </h1>
                <p className={`text-xl text-[#c9d8eb] mb-8 max-w-lg transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Comprehensive IT solutions to drive your business forward and transform your IT infrastructure.
                </p>
                <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <a href="#services" className="bg-white text-[#103d5d] px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center">
                    Explore Services <FaChevronRight className="ml-2" />
                  </a>
                  <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d]">
                    Contact Us
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
                      <h3 className="text-2xl font-semibold mb-2">Expert Support</h3>
                      <p className="text-[#c9d8eb]">Our team of experts is ready to help you transform your IT infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section with Enhanced Background */}
        <section id="services" className="py-16 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 -mt-20 relative overflow-hidden">
          {/* Enhanced Tech Background Pattern */}
          <TechBackgroundPattern />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">SysCare Services</h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto mb-6"></div>
              <p className="text-[#170f17] max-w-3xl mx-auto text-lg">
                At SysCare, we are committed to delivering exceptional quality in every service we provide. We believe that your satisfaction is the true measure of our success.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#245684] text-white shadow-md'
                      : 'bg-white text-[#245684] border border-[#245684] hover:bg-[#245684] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Services Grid - Updated to 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className="p-5 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-blue-50 mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#103d5d] leading-tight">{service.main}</h3>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4 mt-2">
                      {service.subs.map((sub, subIndex) => (
                        <div 
                          key={subIndex} 
                          className="mb-4 last:mb-0 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                          onClick={() => openSubServiceModal(service.main, sub)}
                        >
                          <h4 className="font-semibold text-[#103d5d] text-base">{sub.title}</h4>
                          <p className="text-[#170f17] text-sm mt-1 leading-relaxed line-clamp-2">
                            {sub.description}
                          </p>
                          <span className="text-[#245684] text-xs font-medium mt-1 inline-block">
                            Click to learn more
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-5 pb-4">
                    <button 
                      onClick={() => toggleService(index)}
                      className="text-[#245684] font-medium flex items-center hover:underline text-sm"
                    >
                      
                      
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">Our Process</h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto mb-6"></div>
              <p className="text-[#170f17] max-w-3xl mx-auto text-lg">
                We follow a structured approach to ensure we deliver the best solutions for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">We analyze your business needs and challenges</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">We design a tailored solution for your business</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">We deploy the solution with minimal disruption</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-600">We provide ongoing maintenance and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 bg-[#000000] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="group relative bg-white text-[#103d5d] px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-lg text-center">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#103d5d] to-[#245684] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <a href="tel:1300697972" className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#103d5d] text-center">
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </a>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  );
};

export default ServicesPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';
import { FaHeadset, FaChevronRight, FaCloud, FaShieldAlt, FaTools, FaRobot, FaGraduationCap, FaLightbulb, FaChartLine, FaGlobe, FaTimes, FaServer, FaDesktop, FaDatabase } from 'react-icons/fa';

// Add CSS animations in a style tag
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 3s ease-in-out 0.5s infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.5s ease-out forwards;
  }
  
  .service-card {
    transition: all 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .stagger-animation > * {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
  .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
  .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }
  .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }
  
  .modal-animation {
    animation: fadeIn 0.3s ease-out;
  }
  
  .modal-content-animation {
    animation: slideInRight 0.4s ease-out 0.1s both;
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    .mobile-stack {
      flex-direction: column !important;
    }
    
    .mobile-full-width {
      width: 100% !important;
    }
    
    .mobile-text-center {
      text-align: center !important;
    }
    
    .mobile-padding {
      padding: 1rem !important;
    }
    
    .mobile-margin-bottom {
      margin-bottom: 1.5rem !important;
    }
  }
`;

// Header Component
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

// Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#245684] animate-pulse"
          style={{
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

const ServicesPage = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // NEW: Handle hash URLs on component mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      if (hash) {
        // Map URL hash to category IDs
        const hashToCategoryMap = {
          'infrastructure': 'infrastructure',
          'security': 'security',
          'support': 'support',
          'solutions': 'solutions',
          'training': 'training'
        };
        
        const category = hashToCategoryMap[hash];
        if (category && categories.find(cat => cat.id === category)) {
          setActiveCategory(category);
          
          // Smooth scroll to services section after a brief delay
          setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Service URL mapping for all 16 services
  const getServicePageUrl = (serviceTitle) => {
    const serviceUrlMap = {
      // IT Support Services
      "Service Desk": "/Service-Desk",
      "Managed IT Services": "/Managed-IT-Services",
      
      // IT Security Services
      "Cybersecurity Consultancy Services": "/CyberSecurityConsultancyServices",
      "Managed Security Services": "/ManagedSecurityServices",
      
      // Cloud Solutions
      "Cloud Solutions": "/SysCare-Private-Cloud",
      "Hosted Solutions": "/Hosted-Services",
      
      // Projects & Automation
      "IT Infra Projects": "/ITInfraProjects",
      "Office IT Automation": "/DevelopmentAutomation",
      
      // Internet & VOIP
      "Connectivity": "/Connectivity",
      "VoIP & Video": "/VoiceVideo",
      
      // Digital Services
      "Design & Development": "/DesignDev",
      "Multimedia & Digital Marketing": "/DigitalMarketing",
      
      // CRM & ERP Solutions
      "Small Business Solutions": "/SmallBusiness",
      "Enterprise Solutions": "/Enterprise",
      
      // IT Training
      "Security Training": "/Security",
      "Cloud Training": "/Cloud"
    };
    
    return serviceUrlMap[serviceTitle] || `/services/${serviceTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  };

  const services = [
    {
      main: "IT Support",
      icon: <FaTools className="text-3xl text-[#103d5d]" />,
      category: "support",
      subs: [
        {
          title: "Service Desk",
          description: "Dedicated help desk support for all your IT issues and queries with guaranteed SLA response times and comprehensive Level 1-3 support coverage."
        },
        {
          title: "Managed IT Services",
          description: "End-to-end management of your IT infrastructure including servers, endpoints, security, and compliance with 24/7 monitoring and support."
        }
      ]
    },
    {
      main: "IT Security",
      icon: <FaShieldAlt className="text-3xl text-[#103d5d]" />,
      category: "security",
      subs: [
        {
          title: "Cybersecurity Consultancy Services",
          description: "Expert guidance to strengthen your security posture with comprehensive assessments, penetration testing, and security strategy development."
        },
        {
          title: "Managed Security Services",
          description: "Proactive monitoring and management of your security infrastructure with 24/7 SOC/NOC support and comprehensive threat protection."
        }
      ]
    },
    {
      main: "Cloud Solutions",
      icon: <FaCloud className="text-3xl text-[#103d5d]" />,
      category: "infrastructure",
      subs: [
        {
          title: "Cloud Solutions",
          description: "Dedicated private cloud infrastructure tailored to your organization's specific needs with enhanced security and customization options."
        },
        {
          title: "Hosted Solutions",
          description: "Comprehensive hosted services including email, backup, archival, and cloud solutions with 99.9% uptime guarantee."
        }
      ]
    },
    {
      main: "Projects & Automation",
      icon: <FaRobot className="text-3xl text-[#103d5d]" />,
      category: "solutions",
      subs: [
        {
          title: "IT Infra Projects",
          description: "Design and implementation of robust IT infrastructure solutions including network design, cloud migration, and system implementation."
        },
        {
          title: "Office IT Automation",
          description: "Automate routine tasks and workflows using Power Platform, AI transformation, and Copilot solutions to improve efficiency."
        }
      ]
    },
    {
      main: "Internet & VOIP",
      icon: <FaGlobe className="text-3xl text-[#103d5d]" />,
      category: "infrastructure",
      subs: [
        {
          title: "Connectivity",
          description: "High-speed internet and network solutions including business internet, SDWAN, VPN, and private WAN/MPLS for seamless operations."
        },
        {
          title: "VoIP & Video",
          description: "Crystal-clear voice and video communication systems including hosted PBX, Teams calling, and video conferencing solutions."
        }
      ]
    },
    {
      main: "Digital Services",
      icon: <FaLightbulb className="text-3xl text-[#103d5d]" />,
      category: "solutions",
      subs: [
        {
          title: "Design & Development",
          description: "Custom design and development services including website design, UI/UX, e-commerce, mobile apps, and custom web solutions."
        },
        {
          title: "Multimedia & Digital Marketing",
          description: "Comprehensive digital marketing services including SEO, social media management, content creation, and paid advertising campaigns."
        }
      ]
    },
    {
      main: "CRM & ERP Solutions",
      icon: <FaChartLine className="text-3xl text-[#103d5d]" />,
      category: "solutions",
      subs: [
        {
          title: "Small Business Solutions",
          description: "Tailored CRM and ERP solutions for small businesses including SAP Business One, Microsoft Business Central, and ZOHO CRM/ERP."
        },
        {
          title: "Enterprise Solutions",
          description: "Scalable CRM and ERP systems for large organizations including SAP S/4HANA and Microsoft Dynamics 365."
        }
      ]
    },
    {
      main: "IT Training",
      icon: <FaGraduationCap className="text-3xl text-[#103d5d]" />,
      category: "training",
      subs: [
        {
          title: "Security Training",
          description: "Specialized security training programs including Microsoft security certifications and EC-Council cybersecurity courses."
        },
        {
          title: "Cloud Training",
          description: "Comprehensive cloud training on Microsoft Azure, AWS, and Google Cloud platforms with certification preparation."
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

  // Calculate grid column classes based on number of items for better centering
  const getGridClasses = () => {
    const count = filteredServices.length;
    
    if (count === 1) {
      return "grid grid-cols-1 max-w-md mx-auto";
    } else if (count === 2) {
      return "grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto";
    } else if (count === 3) {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto";
    } else {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto";
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Add animation styles */}
      <style>{animationStyles}</style>
      
      {/* Use the Header component instead of Navigation */}
      <Header />
      
      <div className="pt-20">
        {/* NEW HEADER SECTION - Mobile Responsive */}
        <div className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white pb-24 md:pb-32 pt-16 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 rounded-full border-2 border-white"></div>
            <div className="absolute bottom-20 right-8 md:right-16 w-24 h-24 md:w-48 md:h-48 rounded-full border-2 border-white"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 md:w-32 md:h-32 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-8 md:top-20 md:left-20 animate-float">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          <div className="absolute bottom-20 right-8 md:bottom-40 md:right-32 animate-float-delayed">
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center mobile-stack">
              <div className="lg:w-1/2 mb-8 lg:mb-0 mobile-full-width mobile-text-center mobile-padding">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Our <span className="text-[#a3c1e0]">Services</span>
                </h1>
                <p className={`text-sm md:text-md text-[#c9d8eb] mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Discover our comprehensive range of IT solutions designed to empower your business with cutting-edge technology and expert support.
                </p>
                <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                 {/*   <a href="syscare-services/#services" className="bg-white text-[#103d5d] px-5 py-3 md:px-6 md:py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center">
                    Explore Services <FaChevronRight className="ml-2" />
                  </a>
                  <a href="contact-Us/#contact" className="border-2 border-white text-white px-5 py-3 md:px-6 md:py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d] text-center">
                    Get In Touch
                  </a>  */}
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center mobile-full-width">
                <div className={`relative transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="absolute -inset-4 md:-inset-6 bg-[#a3c1e0] rounded-2xl rotate-3 opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-sm md:max-w-md mx-auto">
                    <div className="text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-[#103d5d] flex items-center justify-center">
                        <FaCloud className="text-2xl md:text-4xl text-[#a3c1e0]" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">Comprehensive Solutions</h3>
                      <p className="text-[#c9d8eb] text-sm md:text-base">From IT support to cloud solutions, we've got your business covered.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - Mobile Responsive */}
        <section id="services" className="py-12 md:py-16 bg-white px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20">
          {/* Particle Background */}
          <ParticleBackground />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-4">SysCare Services</h2>
              <div className="w-20 md:w-24 h-1 bg-[#245684] mx-auto mb-4 md:mb-6"></div>
              <p className="text-[#000000] max-w-3xl mx-auto text-sm md:text-md px-4">
                At SysCare, we are committed to delivering exceptional quality in every service we provide. We believe that your satisfaction is the true measure of our success.
              </p>
            </div>

            {/* Category Filter - Mobile Responsive */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 stagger-animation px-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-2 md:px-5 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-[#245684] text-white shadow-md'
                      : 'bg-white text-[#245684] border border-[#245684] hover:bg-[#245684] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Services Grid - Centered for all categories */}
            <div className={`${getGridClasses()} gap-4 md:gap-6 stagger-animation`}>
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col border border-[#103d5d]"
                >
                  <div className="p-4 md:p-5 flex-grow">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="p-2 md:p-3 rounded-lg bg-white mr-3 border border-[#103d5d]">
                        {service.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-[#103d5d] leading-tight">{service.main}</h3>
                    </div>
                    
                    <div className="border-t border-[#103d5d] pt-3 md:pt-4 mt-2">
                      {service.subs.map((sub, subIndex) => (
                        <div 
                          key={subIndex} 
                          className="mb-3 md:mb-4 last:mb-0 p-2 rounded-md transition-colors duration-200"
                        >
                          <h4 className="font-semibold text-[#103d5d] text-sm md:text-base">{sub.title}</h4>
                          <p className="text-[#000000] text-xs md:text-sm mt-1 leading-relaxed line-clamp-2">
                            {sub.description}
                          </p>
                          <Link
                            to={getServicePageUrl(sub.title)}
                            className="text-[#245684] text-xs font-medium mt-1 inline-block hover:text-[#103d5d] transition-colors duration-200"
                          >
                            Click to learn more →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Fixed Mobile Responsive */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-[#103d5d] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-4 md:right-10 w-56 h-56 md:w-96 md:h-96 bg-[#245684] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#103d5d] mb-4 md:mb-6">Our Service Process</h2>
              <div className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-[#103d5d] to-[#245684] mx-auto mb-4 md:mb-6 rounded-full"></div>
              <p className="text-sm md:text-md text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                We follow a structured approach to ensure we deliver the best solutions for your business needs.
              </p>
            </div>
            
            {/* Mobile Timeline Process */}
            <div className="lg:hidden">
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Consultation & Assessment",
                    description: "We begin with a detailed consultation to understand your business goals, IT environment, and security needs."
                  },
                  {
                    step: 2,
                    title: "Tailored Strategy Design",
                    description: "Our experts create a customised managed IT and security plan that aligns with your business objectives."
                  },
                  {
                    step: 3,
                    title: "Seamless Implementation",
                    description: "We deploy, configure, and optimise solutions with minimal disruption to your daily operations."
                  },
                  {
                    step: 4,
                    title: "24/7 Monitoring & Support",
                    description: "Our Melbourne and Sydney support teams provide round-the-clock monitoring, IT helpdesk, and fast issue resolution."
                  },
                  {
                    step: 5,
                    title: "Continuous Improvement",
                    description: "We regularly review performance, update systems, and implement innovations to keep your business secure and efficient."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start gap-4 group">
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl shadow-lg border border-[#103d5d]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#103d5d] to-[#245684] rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base">
                          {item.step}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg md:text-xl font-bold text-[#103d5d] mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Timeline Process */}
            <div className="hidden lg:block relative">
              {/* Connecting Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#103d5d] to-[#245684]"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-row items-start gap-8 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-[#103d5d]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#103d5d] to-[#245684] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 text-right pr-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-[#103d5d] mb-3">Consultation & Assessment</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        We begin with a detailed consultation to understand your business goals, IT environment, and security needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-row items-start gap-8 group">
                  <div className="w-1/2"></div>
                  
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-[#103d5d]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#103d5d] to-[#245684] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 pl-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-[#103d5d] mb-3">Tailored Strategy Design</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Our experts create a customised managed IT and security plan that aligns with your business objectives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-row items-start gap-8 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-[#103d5d]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#103d5d] to-[#245684] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 text-right pr-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-[#103d5d] mb-3">Seamless Implementation</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        We deploy, configure, and optimise solutions with minimal disruption to your daily operations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-row items-start gap-8 group">
                  <div className="w-1/2"></div>
                  
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-[#103d5d]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#103d5d] to-[#245684] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        4
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 pl-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-[#103d5d] mb-3">24/7 Monitoring & Support</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Our Melbourne and Sydney support teams provide round-the-clock monitoring, IT helpdesk, and fast issue resolution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex flex-row items-start gap-8 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-[#103d5d]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#103d5d] to-[#245684] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        5
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 text-right pr-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold text-[#103d5d] mb-3">Continuous Improvement</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        We regularly review performance, update systems, and implement innovations to keep your business secure and efficient.
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Responsive */}
        <section id="contact" className="py-12 md:py-16 bg-[#000000] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 md:w-48 md:h-48 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-sm md:text-base px-4">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
              <Link to="/contact-Us" className="group relative bg-white text-[#103d5d] px-6 py-3 md:px-8 md:py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-lg text-center animate-pulse-slow text-sm md:text-base">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#103d5d] to-[#245684] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <a href="tel:1300697972" className="group relative bg-transparent border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#103d5d] text-center text-sm md:text-base">
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
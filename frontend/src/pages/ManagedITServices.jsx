import React, { useState, useEffect, useRef } from 'react';

import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight, FiMonitor, FiSmartphone, FiBox, FiGlobe, FiRefreshCw, FiCheckSquare, FiLock, FiBarChart2, FiShoppingCart, FiMessageCircle, FiArchive, FiEye, FiKey } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const ManagedITServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);

  const services = [
    {
      title: "Managed Servers",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "Comprehensive server management including monitoring, maintenance, and optimization to ensure your critical infrastructure operates at peak performance with maximum uptime.",
      image: "/images/Managed-Servers.png"
    },
    {
      title: "Managed Endpoints",
      icon: <FiMonitor className="text-[#245684] text-2xl" />,
      content: "Complete endpoint protection with AV, malware protection, DNS filtering, EDR, and XDR solutions to secure all devices in your network against evolving threats.",
      image: "/images/Managed-Endpoints.png"
    },
    {
      title: "Mobile Device Management",
      icon: <FiSmartphone className="text-[#245684] text-2xl" />,
      content: "Centralized management of mobile devices across your organization, ensuring security policies are enforced and corporate data remains protected on all mobile platforms.",
      image: "/images/Mobile-Device-Management.png"
    },
    {
      title: "IT Asset Management",
      icon: <FiBox className="text-[#245684] text-2xl" />,
      content: "Complete lifecycle management of your IT assets from procurement to retirement, ensuring optimal utilization and cost efficiency across your technology investments.",
      image: "/images/IT-Asset-Management.png"
    },
    {
      title: "Domain & DNS Management",
      icon: <FiGlobe className="text-[#245684] text-2xl" />,
      content: "Professional management of your domain portfolio and DNS infrastructure to ensure reliability, security, and optimal performance of your online presence.",
      image: "/images/Domain-DNS-Management.png"
    },
    {
      title: "Windows OS Patch Management",
      icon: <FiRefreshCw className="text-[#245684] text-2xl" />,
      content: "Systematic approach to deploying, testing, and installing patches across your Windows environment to maintain security and stability while minimizing disruption.",
      image: "/images/Windows-Patch-Management.png"
    },
    {
      title: "Application Patch Management",
      icon: <FiCheckSquare className="text-[#245684] text-2xl" />,
      content: "Comprehensive patching for all business applications to eliminate vulnerabilities and ensure compatibility across your software ecosystem.",
      image: "/images/Application-Patch-Management.png"
    },
    {
      title: "Vulnerability Management",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "Proactive identification, assessment, and remediation of security vulnerabilities across your entire IT infrastructure before they can be exploited.",
      image: "/images/Vulnerability-Management.png"
    },
    {
      title: "MS 365 Portal Management",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "Expert administration of your Microsoft 365 environment including user management, license allocation, and configuration of productivity tools.",
      image: "/images/MS365-Portal-Management.png"
    },
    {
      title: "AD/Azure/Entra ID Management",
      icon: <FiLock className="text-[#245684] text-2xl" />,
      content: "Comprehensive identity and access management across on-premises Active Directory, Azure AD, and Entra ID to ensure secure and efficient access control.",
      image: "/images/Identity-Management.png"
    },
    {
      title: "M365 Security & Compliance",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "Implementation and management of security policies, data loss prevention, and compliance configurations within your Microsoft 365 environment.",
      image: "/images/M365-Security-Compliance.png"
    },
    {
      title: "Managed WIFI",
      icon: <FiWifi className="text-[#245684] text-2xl" />,
      content: "End-to-end management of your wireless infrastructure including design, implementation, monitoring, and optimization for reliable connectivity.",
      image: "/images/Managed-WIFI.png"
    },
    {
      title: "Managed Firewall",
      icon: <FiBarChart2 className="text-[#245684] text-2xl" />,
      content: "Professional configuration, monitoring, and maintenance of your firewall infrastructure to provide robust network security and traffic management.",
      image: "/images/Managed-Firewall.png"
    },
    {
      title: "Managed VPN Access",
      icon: <FiLock className="text-[#245684] text-2xl" />,
      content: "Secure remote access solutions with properly configured and maintained VPN infrastructure for your mobile workforce and remote offices.",
      image: "/images/Managed-VPN.png"
    },
    {
      title: "Managed DR & BCP",
      icon: <FiDatabase className="text-[#245684] text-2xl" />,
      content: "Comprehensive disaster recovery and business continuity planning and implementation to ensure your business can withstand and quickly recover from disruptions.",
      image: "/images/Managed-DR-BCP.png"
    },
    {
      title: "SW Licence Management",
      icon: <FiCheckSquare className="text-[#245684] text-2xl" />,
      content: "Optimization of software licensing across your organization to ensure compliance, reduce costs, and maintain appropriate licensing for all applications.",
      image: "/images/SW-License-Management.png"
    },
    {
      title: "HW Procurement",
      icon: <FiShoppingCart className="text-[#245684] text-2xl" />,
      content: "End-to-end hardware procurement services leveraging our industry relationships to source quality equipment at competitive prices with full lifecycle support.",
      image: "/images/HW-Procurement.png"
    },
    {
      title: "IT Consultancy Services",
      icon: <FiMessageCircle className="text-[#245684] text-2xl" />,
      content: "Strategic IT guidance and planning services to align your technology investments with business objectives and maximize ROI from your IT infrastructure.",
      image: "/images/IT-Consultancy.png"
    },
    {
      title: "Centralized Email Signature Management",
      icon: <FiMessageCircle className="text-[#245684] text-2xl" />,
      content: "Professional management of corporate email signatures across your organization to maintain brand consistency and compliance with regulatory requirements.",
      image: "/images/Email-Signature-Management.png"
    },
    {
      title: "Managed Email Archival",
      icon: <FiArchive className="text-[#245684] text-2xl" />,
      content: "Secure, compliant email archiving solutions that ensure business continuity, facilitate e-discovery, and meet regulatory retention requirements.",
      image: "/images/Managed-Email-Archival.png"
    },
    {
      title: "Endpoint Monitoring & Management",
      icon: <FiEye className="text-[#245684] text-2xl" />,
      content: "24/7 monitoring and management of all endpoints in your environment to ensure performance, security, and compliance with organizational policies.",
      image: "/images/Endpoint-Monitoring.png"
    },
    {
      title: "Device Encryption Management",
      icon: <FiKey className="text-[#245684] text-2xl" />,
      content: "Comprehensive encryption management across all devices to protect sensitive data and ensure compliance with data protection regulations.",
      image: "/images/Device-Encryption-Management.png"
    },
    {
      title: "Managed Spam Protection",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "Advanced spam and phishing protection solutions to minimize unwanted emails and protect your organization from email-based threats.",
      image: "/images/Managed-Spam-Protection.png"
    }
  ];

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1024); // lg breakpoint
      };
      
      // Initial check
      checkIsMobile();
      
      // Add event listener
      window.addEventListener('resize', checkIsMobile);
      
      // Clean up
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, []);

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1 }
      );
    });

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const content = document.getElementById('service-content');
    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateX(20px)';
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateX(0)';
        content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      }, 50);
    }
  }, [activeTab]);

  // Parallax effect for header
  const [parallaxStyle, setParallaxStyle] = useState({});
  
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        setParallaxStyle({
          transform: `translateY(${rate}px)`
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Header Section */}
      <header
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-r from-[#103d5d] to-[#245684] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-14 h-14 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-8 h-8 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
         
          {/* Animated gradient circles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-rotate"></div>
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-float-slow"></div>
          </div>
         
          
        </div>
       
        {/* Content with parallax effect */}
        <div
          className="relative max-w-7xl mx-auto text-center"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-block overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-typewriter whitespace-nowrap overflow-hidden border-r-4 border-r-white">
              Managed <span className="text-[#a3d4ff]">IT Services</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive IT solutions to drive your business forward
            </p>
          </div>
         
          {/* Animated CTA button */}
          <div className="mt-12 animate-bounce-slow">
            <a href="/syscare-services" className="inline-block">
              <button className="bg-[#a3d4ff] text-[#103d5d] px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto">
                Explore Our Services
                <svg className="w-5 h-5 ml-2 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </a>
          </div>
         
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto p-1">
              <div className="w-2 h-2 bg-white rounded-full animate-scroll-indicator"></div>
            </div>
            <p className="text-sm mt-2 opacity-80">Scroll to explore</p>
          </div>
        </div>
      </header>

      {/* Managed IT Focus Section */}
      <section 
        className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        ref={sectionRefs[1]}
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col lg:flex-row gap-16 items-center"
            style={{
              opacity: isVisible[1] ? 1 : 0,
              transform: isVisible[1] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Comprehensive Managed IT Services</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                Our end-to-end managed IT services provide organizations with complete technology management, security, and operational efficiency. Tailored to meet diverse business needs, SysCare Managed IT ensures seamless operations, robust security protocols, and optimal resource utilization.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                Experience the pinnacle of reliability and performance as our dedicated team of experts manages your entire IT infrastructure. Trust SysCare Managed IT Services for sophisticated, streamlined, and secure technology operations, enabling you to focus on what truly matters – the growth and success of your business.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request IT Assessment
                <FiChevronRight className="inline ml-3 transition-transform duration-300 group-hover:translateX-2" />
              </button>
            </div>
            <div 
              className="lg:w-1/2"
              style={{
                opacity: isVisible[1] ? 1 : 0,
                transform: isVisible[1] ? 'scale(1)' : 'scale(0.95)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              <div className="bg-white p-6 rounded-xl border border-[#e1e9f2] shadow-sm hover:shadow-md transition-shadow duration-500">
                <img 
                  
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                  alt="SysCare Managed IT Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Vertical Tabs */}
      <section 
        className="py-24 bg-white px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        ref={sectionRefs[2]}
      >
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center"
            style={{
              opacity: isVisible[2] ? 1 : 0,
              transform: isVisible[2] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
          >
            Our Comprehensive Managed IT Services
          </h2>
          
          {/* Mobile View - Accordion Style */}
          {isMobile ? (
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-[#f9fbfe] rounded-xl border border-[#e1e9f2] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                    className={`w-full text-left p-6 transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-[#103d5d] text-white'
                        : 'bg-[#f5f9fd] text-[#103d5d]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                          activeTab === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                        }`}>
                          {React.cloneElement(service.icon, {
                            className: `${activeTab === index ? 'text-white' : 'text-[#245684]'} text-2xl`
                          })}
                        </div>
                        <h3 className="text-xl font-medium">{service.title}</h3>
                      </div>
                      <FiChevronRight 
                        className={`text-xl transition-transform duration-300 ${
                          activeTab === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {activeTab === index && (
                    <div className="p-6 border-t border-[#e1e9f2]">
                      <div className="mb-6 bg-white p-4 rounded-lg border border-[#e1e9f2] shadow-sm flex justify-center">
                        <img 
                          src={service.image}
                          alt={`${service.title} infrastructure`}
                          className="w-[500px] h-[500px] object-cover rounded-lg"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      <p className="text-[#5c6f87] text-lg mb-6 leading-relaxed">{service.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Desktop View - Original Layout */
            <div 
              className="flex flex-col lg:flex-row gap-12"
              style={{
                opacity: isVisible[2] ? 1 : 0,
                transform: isVisible[2] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
              }}
            >
              {/* Vertical Tabs */}
              <div className="lg:w-1/3">
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-[#103d5d] text-white shadow-lg'
                          : 'bg-[#f5f9fd] text-[#103d5d] hover:bg-[#e1e9f2]'
                      }`}
                      style={{
                        transform: activeTab === index ? 'translateX(12px)' : 'none'
                      }}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                          activeTab === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                        }`}>
                          {React.cloneElement(service.icon, {
                            className: `${activeTab === index ? 'text-white' : 'text-[#245684]'} text-2xl`
                          })}
                        </div>
                        <h3 className="text-xl font-medium">{service.title}</h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Content Area */}
              <div 
                id="service-content"
                className="lg:w-2/3 bg-[#f9fbfe] rounded-xl p-10 border border-[#e1e9f2] shadow-sm"
                style={{
                  minHeight: '600px',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#f0f6ff] flex items-center justify-center mr-8">
                    {services[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#103d5d] mt-2">{services[activeTab].title}</h3>
                </div>

                {/* Service Graphic - Now positioned under title but above description */}
                <div className="mb-8  p-4   flex justify-center">
                  <img 
                    src={services[activeTab].image}
                    alt={`${services[activeTab].title} infrastructure`}
                    className="w-[250px] h-[250px] object-cover rounded-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <p className="text-[#5c6f87] text-lg mb-8 leading-relaxed">{services[activeTab].content}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#000000] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your IT Management?</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            Our experts are ready to design the perfect managed IT solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contact-Us" className="inline-block"> 
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-12 py-5 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-lg">
                Get Started Today
              </button>
            </a>
            <a href="/contact-Us" className="inline-block"> 
              <button className="border-2 border-white hover:bg-white hover:text-[#103d5d] text-white px-12 py-5 rounded-md font-medium transition-all duration-300 hover:scale-[1.02] text-lg">
                Speak to an Expert
              </button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer/>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes slide-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(26px); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        .animate-typewriter {
          animation: typewriter 2s steps(40) 1s both;
        }
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out 1.5s forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        .bg-grid-white {
          background-image: linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default ManagedITServicesPage;
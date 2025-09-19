import React, { useState, useEffect, useRef } from 'react';
import { FiMail, FiShield, FiCloud, FiDatabase, FiServer, FiArchive, FiHardDrive, FiUsers } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "1. What are Managed IT Services, and how can they benefit my business?",
    answer: (
      <>
         Managed IT Services from SysCare IT Solutions cover the full spectrum of IT support, monitoring, and management. From servers and endpoints to firewalls, Microsoft 365, and security compliance, we proactively handle your IT environment so your team can focus on core business goals. This reduces downtime, enhances security, and optimizes performance, all while lowering long-term IT costs.
      </>
    ),
  },
  {
    question: "2. How does SysCare IT Solutions ensure the security of our systems?",
    answer: (
      <>
        SysCare implements multi-layered protection across your IT environment. This includes Managed Endpoints (AV/Malware/DNS/EDR/XDR), Device Encryption, Managed Firewalls, VPN Access, and Spam Protection. We also manage patching, vulnerabilities, and Microsoft 365 security settings to keep your systems aligned with industry standards. Our proactive approach ensures your business stays ahead of evolving cyber threats.
      </>
    ),
  },
  {
    question: "3. Do you provide Managed IT Services for small and medium-sized businesses in Melbourne and Sydney?",
    answer: (
      <>
         Absolutely. SysCare specializes in delivering Managed IT Services for SMBs in Melbourne and Sydney. Our solutions are tailored to fit your scale and budget, ensuring you get enterprise-level IT support without the overhead of a large internal IT team. We help small and growing businesses stay secure, compliant, and competitive in today’s fast-moving digital environment.
      </>
    ),
  },
  {
    question: "4. How does SysCare handle patch management for Windows and business applications?",
    answer: (
      <>
         SysCare manages both Windows OS Patch Management and Application Patch Management to keep systems secure and up to date. We apply patches strategically to minimize disruption, ensuring vulnerabilities are closed before attackers can exploit them. Our automated processes reduce downtime, improve compliance, and keep your IT environment stable and resilient.
      </>
    ),
  },
  {
    question: "5. Can SysCare help with IT compliance and regulatory requirements?",
    answer: (
      <>
         Yes. Our services include M365 Security & Compliance Management, Device Encryption, and Email Archival, all aligned with industry regulations. Whether your business needs to comply with standards like ISO, GDPR, or local data protection laws, SysCare ensures your IT systems meet security and compliance obligations, reducing legal and operational risks.
      </>
    ),
  },
  {
    question: "6. What makes SysCare’s Managed IT Services different from break-fix IT support?",
    answer: (
      <>
         Unlike break-fix IT models where support is reactive, SysCare’s Managed IT Services are proactive. We continuously monitor, patch, and secure your systems to prevent problems before they occur. Services like Endpoint Monitoring, DR & BCP (Disaster Recovery & Business Continuity Planning), and Asset Management ensure stability and resilience. This proactive approach saves costs, reduces downtime, and delivers predictable IT performance.
      </>
    ),
  },
];


const HostedServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);
  

  const services = [
    {
      title: "Hosted Exchange/E-Mail",
      icon: <FiMail className="text-[#245684] text-2xl" />,
      content: "Elevate your business communication with SysCare IT Solutions' Hosted Exchange/E-Mail services. Our comprehensive offering ensures seamless and secure email solutions tailored to your organizational needs. Experience the reliability of our hosted platform, providing advanced features, robust security, and around-the-clock support. With SysCare, enjoy the benefits of a professionally managed and scalable email infrastructure, allowing your team to stay connected and productive. Choose SysCare for a cutting-edge Hosted Exchange/E-Mail solution that prioritizes efficiency, security, and a hassle-free experience for your business communication needs.",
      image: "/images/Hosted-ExchangeE-Mail.png"
    },
    {
      title: "Advanced Spam Filtering",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions is safeguarding your communication channels with our advanced E-Mail Spam Filtering service. Our robust solution employs cutting-edge technology to proactively identify and eliminate unwanted emails, ensuring your inbox remains clutter-free and secure. With a focus on precision and efficiency, our spam filtering system guarantees a seamless email experience, allowing you to concentrate on what matters most – your business. Rely on SysCare for state-of-the-art E-Mail Spam Filtering that prioritizes your email security, enhances productivity, and provides a worry-free communication environment.",
      image: "/images/Advanced-Spam-Filtering.png"
    },
    {
      title: "E-Mail Backup (M365 Backup)",
      icon: <FiDatabase className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers an unparalleled E-Mail Backup service, ensuring the safeguarding of critical communication data for our valued clients. Our carefully designed solution offers seamless and automated backup processes, providing peace of mind in the face of unforeseen events. With state-of-the-art technology and a commitment to data integrity, SysCare ensures the protection of your vital email communications. Experience the reliability and security of our E-Mail Backup service – an essential component in fortifying your business against potential data loss, empowering you to focus on your core operations with confidence. Choose SysCare for comprehensive and trustworthy email data protection.",
      image: "/images/E-Mail-Backup.png"
    },
    {
      title: "E-Mail Archival (M365 Archival)",
      icon: <FiArchive className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers an unparalleled E-Mail Backup service, ensuring the safeguarding of critical communication data for our valued clients. Our carefully designed solution offers seamless and automated backup processes, providing peace of mind in the face of unforeseen events. With state-of-the-art technology and a commitment to data integrity, SysCare ensures the protection of your vital email communications. Experience the reliability and security of our E-Mail Backup service – an essential component in fortifying your business against potential data loss, empowering you to focus on your core operations with confidence. Choose SysCare for comprehensive and trustworthy email data protection.",
      image: "/images/E-Mail-Archival .png"
    },
    {
      title: "SharePoint Backup (M365 Backup)",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions presents a sophisticated SharePoint Backup service, ensuring the safeguarding of your crucial data with precision and reliability. Our comprehensive solution employs advanced backup strategies, guaranteeing the protection of your SharePoint environment. With meticulous attention to detail, we mitigate data loss risks, providing peace of mind to clients. SysCare's SharePoint Backup service combines cutting-edge technology and expert oversight, offering a seamless and secure backup process. Rely on us to fortify your SharePoint data, reinforcing your business continuity strategy with a resilient and efficient backup solution tailored to your unique needs.",
      image: "/images/SharePoint-Backup.png"
    },
    {
      title: "OneDrive Backup (M365 Backup)",
      icon: <FiHardDrive className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers an impeccable OneDrive Backup service as part of its comprehensive range of offerings. Safeguard your crucial data with our professional-grade backup solutions, ensuring seamless protection and accessibility. Our expert team carefully configures and manages the backup process, providing you with peace of mind and eliminating the risk of data loss. Experience the reliability and efficiency of SysCare's OneDrive Backup service, tailored to meet the highest standards of data security and accessibility. Choose SysCare for a robust and proactive approach to safeguarding your valuable digital assets.",
      image: "/images/OneDrive-Backup.png"
    },
    {
      title: "MS Teams Backup (M365 Backup)",
      icon: <FiUsers className="text-[#245684] text-2xl" />,
      content: "Elevate your business continuity with SysCare IT Solutions' MS Teams Backup service. Our comprehensive solution ensures the safeguarding of your critical communication and collaboration data within the Microsoft Teams platform. With robust backup mechanisms and streamlined recovery processes, we provide peace of mind by protecting against data loss, accidental deletions, or unforeseen disruptions. Trust SysCare to fortify your digital workspace, enabling seamless collaboration while maintaining the integrity and availability of your MS Teams data. Invest in resilience; choose SysCare IT Solutions for secure and reliable MS Teams Backup services.",
      image: "/images/MS-Teams-Backup.png"
    },
    {
      title: "Cloud Backup",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers unparalleled Cloud Backup services, ensuring the safety and accessibility of your critical data. Our robust and secure cloud infrastructure guarantees seamless backup, minimizing the risk of data loss. With state-of-the-art technology, we provide automated, scalable, and reliable solutions tailored to your business needs. Experience peace of mind knowing that your data is protected, easily recoverable, and compliant with industry standards. Choose SysCare for a proactive approach to data security, allowing you to focus on your core business while we safeguard your valuable information in the cloud.",
      image: "/images/Cloud-Backup.png"
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
              Hosted <span className="text-[#a3d4ff]">Services</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive email and cloud solutions to secure your business communications
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

      {/* Hosted Services Focus Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">SysCare Hosted Services</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                Our comprehensive hosted services provide organizations with secure, reliable email and cloud solutions. From enterprise email hosting to advanced backup and archival, we deliver robust solutions tailored to your business needs.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                Experience enterprise-grade reliability with our hosted services, designed to keep your communications secure and your data protected. Trust SysCare for sophisticated, streamlined solutions that ensure business continuity and compliance.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Hosted Services Demo
                <svg className="inline ml-3 transition-transform duration-300 group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" />
                </svg>
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
                  alt="SysCare Hosted Services"
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
            Our Hosted Services
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
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeTab === index ? 'rotate-90' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeTab === index && (
                    <div className="p-6 border-t border-[#e1e9f2]">
                      <div className="mb-6 bg-white p-4 rounded-lg border border-[#e1e9f2] shadow-sm flex justify-center">
                        <img 
                          src={service.image}
                          alt={`${service.title} infrastructure`}
                          className="w-full max-w-xs h-auto object-cover rounded-lg"
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
                <div className="mb-8 p-4 flex justify-center">
                  <img 
                    src={services[activeTab].image}
                    alt={`${services[activeTab].title} infrastructure`}
                    className="w-64 h-64 object-cover rounded-lg"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Secure Your Business Communications?</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            Our experts are ready to design the perfect hosted solution for your business needs.
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
      `}</style>
    </div>
  );
};

export default HostedServicesPage;
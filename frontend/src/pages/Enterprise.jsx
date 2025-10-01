import React, { useState, useEffect, useRef } from 'react';
import SysCarePrivateCloud from '../assets/website-images/Enterprise.png';
import { FiChevronRight } from 'react-icons/fi';
import { 
  MdBusiness,
  MdAccountTree,
  MdAnalytics,
  MdIntegrationInstructions,
  MdSecurity,
  MdCloud,
  MdSettings,
  MdDashboard
} from 'react-icons/md';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "1. Which enterprise CRM and ERP platforms does SysCare implement?",
    answer: (
      <>
        We specialize in global enterprise solutions such as SAP S/4HANA and Microsoft Dynamics 365, offering implementation, customization, and ongoing support to ensure maximum ROI for large organizations</>
    ),
  },
  {
    question: "2. What is SAP S/4HANA, and why is it ideal for enterprises?",
    answer: (
      <>
        SAP S/4HANA is an intelligent ERP system that runs on SAP's in-memory HANA database. It provides real-time analytics, predictive insights, and seamless operations, making it ideal for enterprises that need scalability, accuracy, and advanced decision-making.</>
    ),
  },
  {
    question: "3. How secure are enterprise CRM and ERP platforms?",
    answer: (
      <>
          Both SAP S/4HANA and Microsoft Dynamics 365 offer enterprise-grade security with encryption, access control, compliance tools, and cloud-based safeguards. SysCare ensures every deployment follows best practices for data security and regulatory compliance.</>
    ),
  },
  {
    question: "4. Can enterprise CRM and ERP systems integrate with existing tools?",
    answer: (
      <>
        Yes. Both SAP and Microsoft solutions integrate with third-party applications, legacy systems, and cloud services. SysCare ensures smooth integration so your enterprise continues operating without disruption.</>
    ),
  },
  {
    question: "5. Why choose SysCare IT Solutions for enterprise CRM & ERP services?",
    answer: (
      <>
       SysCare combines technical expertise with industry experience to deliver enterprise CRM and ERP solutions that are reliable, scalable, and aligned with your business goals. We offer consultation, implementation, training, and ongoing support for enterprises in Melbourne, Sydney, and across Australia.</>
    ),
  },
  {
    question: "6. Why should enterprises invest in ERP solutions?",
    answer: (
      <>
        Investing in enterprise ERP solutions improves productivity, reduces manual errors, enhances reporting accuracy, and connects multiple departments under one system. This integration ensures smarter decision-making and cost efficiency at scale.</>
    ),
  },
];

const EnterprisePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "SAP S/4HANA",
      icon: <MdBusiness className="text-[#245684] text-2xl" />,
      content: "SysCare specializes in implementing SAP S/4HANA, one of the most advanced enterprise ERP solutions available. Built on SAP's in-memory HANA database, this intelligent ERP system delivers real-time analytics, predictive insights, and streamlined business operations. From financial planning to supply chain management, SAP S/4HANA helps enterprises make smarter, faster decisions. Whether you operate in manufacturing, retail, or professional services, our team customizes SAP solutions to fit your unique requirements and scale with your growth.",
      image: "/images/SAP-S-4HANA.png"
    },
    {
      title: "Microsoft Dynamics 365",
      icon: <MdAccountTree className="text-[#245684] text-2xl" />,
      content: "We provide tailored solutions with Microsoft Dynamics 365, a flexible and integrated suite of enterprise CRM and ERP applications. Dynamics 365 enables enterprises to connect sales, marketing, finance, operations, and customer service under a single platform. With AI-driven insights, seamless Microsoft 365 integration, and scalable cloud deployment, it empowers large organizations to adapt quickly and deliver exceptional customer experiences. At SysCare, we ensure smooth implementation, customization, and ongoing support to maximize the value of Dynamics 365 for your enterprise.",
      image: "/images/Microsoft-Dynamics-365.png"
    },
    {
      title: "Enterprise Analytics",
      icon: <MdAnalytics className="text-[#245684] text-2xl" />,
      content: "Transform your business data into actionable insights with our enterprise analytics solutions. We implement advanced BI tools and dashboards that provide real-time visibility into key performance indicators, helping executives make data-driven decisions and identify new growth opportunities.",
      image: "/images/Enterprise-Analytics.png"
    },
    {
      title: "System Integration",
      icon: <MdIntegrationInstructions className="text-[#245684] text-2xl" />,
      content: "Seamlessly connect your enterprise systems with our integration services. We ensure your CRM, ERP, and other business applications work together harmoniously, eliminating data silos and improving operational efficiency across your entire organization.",
      image: "/images/System-Integration.png"
    },
    {
      title: "Enterprise Security",
      icon: <MdSecurity className="text-[#245684] text-2xl" />,
      content: "Protect your critical business data with enterprise-grade security solutions. Our comprehensive security services include access control, data encryption, compliance management, and threat detection to safeguard your organization against evolving cyber threats.",
      image: "/images/Enterprise-Security.png"
    },
    {
      title: "Cloud Migration",
      icon: <MdCloud className="text-[#245684] text-2xl" />,
      content: "Accelerate your digital transformation with our enterprise cloud migration services. We help organizations securely transition their operations to the cloud, optimizing performance, scalability, and cost-efficiency while maintaining business continuity.",
      image: "/images/Cloud-Migration.png"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
      
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

  const faqsLeft = FAQS.slice(0, 3);
  const faqsRight = FAQS.slice(3, 6);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Background Design */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-white to-[#f0f7ff]"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #103d5d 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #245684 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Corporate Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#a3d4ff] rounded-full opacity-10 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#245684] rounded-lg opacity-5 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-[#103d5d] rounded-full opacity-5 animate-pulse-slow"></div>
        <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-[#a3d4ff] rounded-lg opacity-10 animate-float" style={{animationDelay: '6s'}}></div>
        
        {/* Connection Lines */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="animate-grid-move">
            <defs>
              <pattern id="enterprise-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#245684" strokeWidth="1" strokeDasharray="5,5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#enterprise-grid)" />
          </svg>
        </div>

        {/* Data Flow Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-[#245684] animate-pulse rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-2 bg-[#103d5d] animate-pulse rounded-full" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-24 bg-[#a3d4ff] animate-pulse rounded-full" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <Navigation />
      
      <header
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-r from-[#103d5d] to-[#245684] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-14 h-14 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-8 h-8 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
         
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-rotate"></div>
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-float-slow"></div>
          </div>
        </div>
       
        <div
          className="relative max-w-7xl mx-auto text-center"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-block overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-typewriter whitespace-nowrap overflow-hidden border-r-4 border-r-white">
              Enter<span className="text-[#a3d4ff]">prise</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Enterprise-grade CRM & ERP solutions to transform your business operations
            </p>
          </div>
         
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
         
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto p-1">
              <div className="w-2 h-2 bg-white rounded-full animate-scroll-indicator"></div>
            </div>
            <p className="text-sm mt-2 opacity-80">Scroll to explore</p>
          </div>
        </div>
      </header>

      <section 
        className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative"
        ref={sectionRefs[1]}
      >
        {/* Section Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#245684] rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#a3d4ff] rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#103d5d] rounded-full animate-bounce-slow"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div 
            className="flex flex-col lg:flex-row gap-16 items-center"
            style={{
              opacity: isVisible[1] ? 1 : 0,
              transform: isVisible[1] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Our Enterprise CRM & ERP Services</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                In today's competitive business world, large enterprises require powerful tools to stay agile, connected, and efficient. At SysCare IT Solutions, we deliver enterprise CRM and ERP solutions that empower organizations across Melbourne, Sydney, and Australia. By implementing industry-leading platforms like SAP S/4HANA and Microsoft Dynamics 365, we help enterprises streamline complex processes, improve decision-making, and unlock sustainable growth.
              </p>
              
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Enterprise Consultation
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
              <div className="bg-white p-6 rounded-xl border border-[#e1e9f2] shadow-sm hover:shadow-md transition-shadow duration-500 relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#a3d4ff] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#245684] rounded-full opacity-30 animate-bounce-slow"></div>
                <img 
                  src={SysCarePrivateCloud}
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02] relative z-10"
                  alt="Enterprise CRM & ERP Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-24 bg-white px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative"
        ref={sectionRefs[2]}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#103d5d] via-[#245684] to-[#a3d4ff]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center"
            style={{
              opacity: isVisible[2] ? 1 : 0,
              transform: isVisible[2] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
          >
            Our Enterprise Solutions
          </h2>
          
          {isMobile ? (
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-[#f9fbfe] rounded-xl border border-[#e1e9f2] shadow-sm overflow-hidden relative"
                >
                  <div className="absolute top-3 right-3 w-3 h-3 bg-[#a3d4ff] rounded-full opacity-50"></div>
                  <button
                    onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                    className={`w-full text-left p-6 transition-all duration-300 relative z-10 ${
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
            <div 
              className="flex flex-col lg:flex-row gap-12"
              style={{
                opacity: isVisible[2] ? 1 : 0,
                transform: isVisible[2] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
              }}
            >
              <div className="lg:w-1/3">
                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 relative ${
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
              
              <div 
                id="service-content"
                className="lg:w-2/3 bg-[#f9fbfe] rounded-xl p-10 border border-[#e1e9f2] shadow-sm relative"
                style={{
                  minHeight: '600px',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              >
                <div className="absolute top-4 right-4 w-6 h-6 bg-[#a3d4ff] rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#245684] rounded-full opacity-20 animate-bounce-slow"></div>
                
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#f0f6ff] flex items-center justify-center mr-8">
                    {services[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#103d5d] mt-2">{services[activeTab].title}</h3>
                </div>

                <div className="mb-8 p-4 flex justify-center">
                  <img 
                    src={services[activeTab].image}
                    alt={`${services[activeTab].title} infrastructure`}
                    className="w-[150px] h-[150px] object-cover rounded-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <p className="text-[#5c6f87] text-lg mb-8 leading-relaxed relative z-10">{services[activeTab].content}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#000000] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#103d5d] to-[#245684] animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Partner with SysCare IT Solutions today</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            Streamline your enterprise operations, strengthen your digital infrastructure, and scale your business with expert-managed services.
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

      <section
        className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative"
        ref={sectionRefs[3]}
      >
        {/* FAQ Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#245684] rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#a3d4ff] rounded-lg animate-float-slow"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center"
            style={{
              opacity: isVisible[3] ? 1 : 0,
              transform: isVisible[3] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
          >
            Frequently Asked Questions
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[faqsLeft, faqsRight].map((faqCol, colIdx) => (
                <div key={colIdx} className="space-y-6">
                  {faqCol.map((faq, idx) => {
                    const qIdx = colIdx * 3 + idx + 1;
                    return (
                      <div
                        className={`rounded-xl border bg-white border-[#e1e9f2] shadow transition-all duration-500 group relative ${
                          activeFaq === qIdx ? 'ring-2 ring-[#245684] ring-opacity-40 scale-[1.02] shadow-xl' : ''
                        }`}
                        key={qIdx}
                        style={{
                          opacity: isVisible[3] ? 1 : 0,
                          transform: isVisible[3]
                            ? 'scale(1)'
                            : 'scale(0.95)',
                          transition: `opacity 0.7s ${0.15 * qIdx}s cubic-bezier(.4,0,.2,1), transform 0.7s ${0.15 * qIdx}s cubic-bezier(.4,0,.2,1)`
                        }}
                      >
                        <div className="absolute top-2 right-2 w-2 h-2 bg-[#a3d4ff] rounded-full opacity-50"></div>
                        <button
                          onClick={() => setActiveFaq(activeFaq === qIdx ? null : qIdx)}
                          className={`w-full flex justify-between items-center text-left p-6 rounded-xl transition-all duration-300 relative z-10
                            ${activeFaq === qIdx
                              ? 'bg-gradient-to-r from-[#103d5d] to-[#245684] text-white shadow'
                              : 'bg-[#f5f9fd] text-[#103d5d] hover:bg-[#e1e9f2]'
                            }
                          `}
                        >
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            <span
                              className={`inline-block w-3 h-3 rounded-full mr-2 transition-all duration-300
                                ${activeFaq === qIdx ? 'bg-[#a3d4ff] scale-110 shadow-lg' : 'bg-[#245684] scale-90'}
                              `}
                            ></span>
                            {faq.question}
                          </h3>
                          <FiChevronRight
                            className={`text-2xl transition-transform duration-300
                              ${activeFaq === qIdx ? 'rotate-90 text-[#a3d4ff]' : ''}
                            `}
                          />
                        </button>
                        <div
                          className={`faq-answer transition-all duration-500 overflow-hidden
                            ${activeFaq === qIdx ? 'max-h-[500px] opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'}
                          `}
                          style={{
                            background: activeFaq === qIdx
                              ? 'linear-gradient(90deg, #f5f9fd 65%, #a3d4ff1a 100%)'
                              : undefined
                          }}
                        >
                          {activeFaq === qIdx && (
                            <p className="text-[#5c6f87] text-lg leading-relaxed animate-fadein">
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-xl text-[#4a5d72] mb-8">
                Still have questions? Our enterprise specialists are ready to help.
              </p>
              <a href="/contact-Us" className="inline-block">
                <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg">
                  Contact Our Enterprise Team
                </button>
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(16px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadein {
            animation: fadein 0.6s cubic-bezier(.4,0,.2,1);
          }
        `}</style>
      </section>

      <Footer/>

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
      `}</style>
    </div>
  );
};

export default EnterprisePage;
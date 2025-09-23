import React, { useState, useEffect, useRef } from 'react';
import SysCarePrivateCloud from '../assets/website-images/SysCare-Private-Cloud.webp';
import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "1. What is a CRM and why is it important for small businesses?",
    answer: (
      <>
        A CRM (Customer Relationship Management) system helps small businesses manage customer interactions, track sales pipelines, and improve customer service. It ensures you never miss a lead, builds stronger relationships, and drives revenue growth.</>
    ),
  },
  {
    question: "2. What is an ERP and how does it benefit small businesses?",
    answer: (
      <>
        An ERP (Enterprise Resource Planning) system integrates finance, operations, inventory, HR, and supply chain into one platform. For small businesses, it reduces manual work, provides real-time insights, and ensures smoother day-to-day operations.</>
    ),
  },
  {
    question: "3. Is CRM and ERP software expensive for small businesses?",
    answer: (
      <>
          Not necessarily. Many small business CRM and ERP solutions like ZOHO are very cost-effective, while advanced options like SAP or Microsoft are scalable investments. SysCare tailors solutions to match your budget.</>
    ),
  },
  {
    question: "4. Do I need IT staff to manage CRM or ERP systems?",
    answer: (
      <>
        No. Most modern CRM and ERP solutions are cloud-based and user-friendly. SysCare provides training and ongoing support so your staff can easily use the system without needing a dedicated IT team.</>
    ),
  },
  {
    question: "5. How do I choose between SAP Business One, Microsoft Business Central, and ZOHO?",
    answer: (
      <>
       Each has strengths: SAP Business One is ideal for scaling businesses, Microsoft Business Central integrates seamlessly with Microsoft 365, and ZOHO is perfect for affordability and simplicity. SysCare helps you select the right fit based on your goals.</>
    ),
  },
  {
    question: "6. Can CRM and ERP work together for small businesses?",
    answer: (
      <>
        Yes. CRM and ERP can be integrated to give small businesses a 360-degree view of operations and customers. This ensures smooth data flow between sales, finance, inventory, and customer service.</>
    ),
  },
];

const SmallBusinessPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "SAP Business One",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions implements SAP Business One, one of the most powerful and trusted small business ERP solutions worldwide. Designed for growing businesses, SAP Business One integrates finance, sales, purchasing, inventory, and customer management in one platform. With real-time reporting and analytics, it helps business owners make data-driven decisions while improving operational efficiency. As your technology partner, SysCare customizes SAP Business One to suit your industry needs, ensuring scalability and compliance as your business expands.",
      image: "/images/SAP-Business-One.png"
    },
    {
      title: "Microsoft Business Central",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "As a best small business ERP and CRM hybrid solution, Microsoft Dynamics 365 Business Central is a comprehensive platform that combines ERP functionality with CRM features. SysCare helps small businesses implement and manage Business Central to optimize processes such as accounting, supply chain, HR, and sales management. Fully integrated with Microsoft 365, it offers seamless collaboration across Outlook, Excel, and Teams. For businesses in Melbourne and Sydney looking for flexibility, Business Central provides a secure, cloud-based solution with enterprise-level capabilities tailored for small businesses.",
      image: "/images/Microsoft-Business-Central.png"
    },
    {
      title: "ZOHO CRM/ERP",
      icon: <FiCpu className="text-[#245684] text-2xl" />,
      content: "For businesses seeking affordability without compromising functionality, SysCare recommends ZOHO CRM and ERP solutions. ZOHO CRM is one of the best small business CRM platforms, designed to improve lead management, automate workflows, and strengthen customer engagement. Coupled with ZOHO ERP tools, it provides an integrated environment to manage finance, inventory, and HR. SysCare helps configure and customize ZOHO solutions so your business can enjoy a user-friendly, scalable, and cost-effective system that supports long-term growth.",
      image: "/images/ZOHO-CRMERP.png"
    },
    
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

// Split FAQs for two columns
  const faqsLeft = FAQS.slice(0, 3);
  const faqsRight = FAQS.slice(3, 6);

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
              Small<span className="text-[#a3d4ff]"> Business</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive IT solutions to drive your business forward
            </p>
          </div>
         
          {/* Animated CTA button */}
          <div className="mt-12 animate-bounce-slow">
  <a href="/syscare-services" className="inline-block"> {/* Or external URL like "https://example.com/services" */}
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

      {/* Private Cloud Focus Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Small Business CRM & ERP Solutions – SysCare IT Solutions</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                In today’s competitive business environment, small businesses need more than just hard work. They need smart tools that streamline operations, improve customer management, and enable growth. That’s where small business CRM and ERP solutions come in. At SysCare IT Solutions Pty Ltd, we provide tailored solutions that help small businesses in Melbourne, Sydney, and across Australia achieve greater efficiency, smarter decision-making, and stronger customer relationships.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                Whether you are looking for the best small business CRM software to manage sales and marketing, or the best small business ERP system to handle accounting, supply chain, and operations, SysCare has the expertise and partnerships to deliver the right solution for your needs.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Private Cloud Demo
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
                  src={SysCarePrivateCloud}
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                  alt="SysCare Private Cloud Infrastructure"
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
            Our Small Business CRM & ERP Solutions
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
                <div className="space-y-4">
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
                    className="w-[150px] h-[150px] object-cover rounded-lg"
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
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your IT Infrastructure?</h2>
    <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
      Our experts are ready to design the perfect solution for your business needs.
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

{/* FAQ Section */}
            <section
              className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
              ref={sectionRefs[3]}
            >
              <div className="container mx-auto">
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
                  {/* Responsive: Stack on mobile, 2 cols on md+ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[faqsLeft, faqsRight].map((faqCol, colIdx) => (
                      <div key={colIdx} className="space-y-6">
                        {faqCol.map((faq, idx) => {
                          const qIdx = colIdx * 3 + idx + 1;
                          return (
                            <div
                              className={`rounded-xl border bg-white border-[#e1e9f2] shadow transition-all duration-500 group
                                ${activeFaq === qIdx ? 'ring-2 ring-[#245684] ring-opacity-40 scale-[1.02] shadow-xl' : ''}
                              `}
                              key={qIdx}
                              style={{
                                opacity: isVisible[3] ? 1 : 0,
                                transform: isVisible[3]
                                  ? 'scale(1)'
                                  : 'scale(0.95)',
                                transition: `opacity 0.7s ${0.15 * qIdx}s cubic-bezier(.4,0,.2,1), transform 0.7s ${0.15 * qIdx}s cubic-bezier(.4,0,.2,1)`
                              }}
                            >
                              <button
                                onClick={() => setActiveFaq(activeFaq === qIdx ? null : qIdx)}
                                className={`w-full flex justify-between items-center text-left p-6 rounded-xl transition-all duration-300
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
                  {/* Additional Support CTA */}
                  <div className="mt-16 text-center">
                    <p className="text-xl text-[#4a5d72] mb-8">
                      Still have questions? Our team is ready to help.
                    </p>
                    <a href="/contact-Us" className="inline-block">
                      <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg">
                        Contact Our Support Team
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Animations for FAQ */}
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

export default SmallBusinessPage;
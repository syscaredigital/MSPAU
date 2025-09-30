import React, { useState, useEffect, useRef } from 'react';
import SysCarePrivateCloud from '../assets/website-images/Service-Desk.png';
import { FiServer, FiCloud, FiCpu, FiChevronRight } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "What is included in your Help Desk Support service?",
    answer: (
      <>
        Our Help Desk Support includes a comprehensive ticketing system, guaranteed SLA response times,
        remote troubleshooting, user support for Level 1 to Level 3 issues, and regular reporting on
        service metrics. We provide 24/7 monitoring and ensure prompt resolution of all IT-related queries.
      </>
    ),
  },
  {
    question: "How quickly do you respond to support tickets?",
    answer: (
      <>
        Our response times are guaranteed based on the severity level of the issue:
        <ul className="mt-4 space-y-2">
          <li><span className="font-medium text-[#245684] mr-2">• Critical (P1):</span>Within 15 minutes</li>
          <li><span className="font-medium text-[#245684] mr-2">• High (P2):</span>Within 1 hour</li>
          <li><span className="font-medium text-[#245684] mr-2">• Medium (P3):</span>Within 4 hours</li>
          <li><span className="font-medium text-[#245684] mr-2">• Low (P4):</span>Within 8 business hours</li>
        </ul>
      </>
    ),
  },
  {
    question: "What's the difference between Remote and On-Site IT Support?",
    answer: (
      <>
        <span className="font-medium text-[#245684]">Remote Support</span> is provided virtually
        for issues that can be resolved without physical presence, such as software troubleshooting,
        password resets, and configuration changes.<br /><br />
        <span className="font-medium text-[#245684]">On-Site Support</span> involves our technicians
        visiting your location to resolve hardware-related issues, network infrastructure problems,
        or complex installations that require physical intervention.
      </>
    ),
  },
  {
    question: "Do you offer after-hours or emergency support?",
    answer: (
      <>
        Yes, we offer 24/7 emergency support for critical issues that impact business operations.
        Our after-hours support comes with different SLA terms and may involve additional charges
        based on your service agreement. We recommend discussing your specific after-hours needs
        with our team to create a tailored support plan.
      </>
    ),
  },
  {
    question: "How do you ensure the security of our systems during remote sessions?",
    answer: (
      <>
        We use enterprise-grade, encrypted remote access tools with multi-factor authentication.
        All our technicians undergo rigorous security training and background checks. Sessions are
        logged and monitored, and we never access systems without explicit permission. Additionally,
        we comply with Australian data protection regulations to ensure your information remains secure.
      </>
    ),
  },
  {
    question: "Can you support our industry-specific software applications?",
    answer: (
      <>
        In most cases, yes. Our team has experience with a wide range of industry-specific applications
        across various sectors including healthcare, legal, finance, and retail. During our onboarding process,
        we conduct a thorough assessment of your software environment and provide training to our technicians
        on your specific applications. For highly specialized software, we may recommend establishing a relationship
        with the vendor for deep technical issues while we handle the infrastructure and general support aspects.
      </>
    ),
  },
];

const ServiceDeskPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState([false, false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);

  const services = [
    {
      title: "Help Desk Support Ticketing System, Guaranteed SLA Response Time",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers unparalleled Help Desk (Service Desk) Support through an advanced Ticketing System, ensuring seamless issue resolution. Our dedicated team commits to a Guaranteed SLA Response Time, prioritizing your business continuity. Experience efficient and reliable support, where every concern is addressed promptly and effectively. With SysCare, rest assured that your IT challenges are met with precision and adherence to service level agreements. Elevate your operational efficiency with our comprehensive Help Desk Support services.",
      image: "/images/SysCare-Private-Cloud.png"
    },
    {
      title: "Remote IT User Support (Level 1 to Level 3 Covered)",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions provides unparalleled Remote IT User Support, covering Levels 1 to 3, ensuring a seamless and responsive user experience. Our highly skilled support team is equipped to handle a broad spectrum of issues, from basic troubleshooting (Level 1) to advanced problem resolution (Level 3). With a commitment to efficiency and client satisfaction, SysCare ensures swift and expert assistance, minimizing downtime and maximizing productivity. Trust us to elevate your IT user support experience with our comprehensive and tailored solutions. Your success is our priority.",
      image: "/images/Hosted-Servers.png"
    },
    {
      title: "On-Site IT Support (Level 1 to Level 3 Covered) # [Per Hr, Min 2 Hrs/Visit, No Call Out/Travel Charges within 30km of CBD]",
      icon: <FiCpu className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions provides comprehensive On-Site IT Support, encompassing Level 1 to Level 3 assistance, ensuring a seamless resolution of issues. Our skilled professionals are at your service, with a minimum commitment of 2 hours per visit and absolutely no call-out or travel charges. Tailored to meet your specific needs, our On-Site Support guarantees prompt and efficient solutions, allowing your business to thrive without interruption. Trust SysCare for reliable, professional IT support that goes the extra mile.",
      image: "/images/Dedicated-Virtual-Servers.png"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1024); // lg breakpoint
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

      {/* -- header, cloud focus, and service section (unchanged) -- */}
      <header
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-r from-[#103d5d] to-[#245684] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white opacity-10 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-white opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-white opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-14 h-14 rounded-full bg-white opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-8 h-8 rounded-full bg-white opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
          {/* Animated gradient circles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-rotate"></div>
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-float-slow"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center" style={parallaxStyle}>
          <div className="mb-8 inline-block overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-typewriter whitespace-nowrap overflow-hidden border-r-4 border-r-white">
              Service<span className="text-[#a3d4ff]"> Desk</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive IT solutions to drive your business forward
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">SysCare IT Service Desk Solutions </h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                At SysCare IT Solutions Pty Ltd, we understand how critical reliable IT support is for your business. Our IT Service Desk in Australia provides fast, professional, and user-friendly support to keep your team productive every day. Whether you're running a small business in Melbourne or managing a growing enterprise in Sydney, our IT help desk support ensures smooth day-to-day operations with minimal downtime.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                With remote IT user support and onsite IT support covering Level 1 to Level 3 issues, our certified technicians can resolve everything from simple password resets to advanced system troubleshooting. Backed by a help desk support ticketing system and guaranteed SLA response times, we provide transparency, reliability, and peace of mind for your business IT needs.
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
            Our Cloud & Infrastructure Services
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Partner with SysCare IT Solutions today</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            streamline your IT, strengthen your security, and scale your business with expert-managed services.
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

      <Footer />

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

export default ServiceDeskPage;
import React, { useState, useEffect, useRef } from 'react';
import { FiCode, FiLayout, FiShield, FiShoppingCart, FiSearch, FiSmartphone, FiTrendingUp, FiBarChart, FiLink, FiPenTool, FiServer, FiDatabase, FiChevronRight } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const DesignDevPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);

  // Updated services to match your requirements
  const services = [
    {
      category: "Website Design & Development",
      services: [
        {
          title: "Website Design",
          icon: <FiLayout className="text-[#245684] text-2xl" />,
          content: "Professional website design services that create visually appealing, user-friendly interfaces tailored to your brand identity and business objectives.",
        },
        {
          title: "UI/UX Design",
          icon: <FiLayout className="text-[#245684] text-2xl" />,
          content: "User-centered design approach focusing on creating intuitive, engaging experiences that maximize user satisfaction and conversion rates.",
        },
        {
          title: "Website Development",
          icon: <FiCode className="text-[#245684] text-2xl" />,
          content: "Custom website development using modern technologies to build responsive, high-performance websites that meet your specific requirements.",
        },
        {
          title: "Website Security",
          icon: <FiShield className="text-[#245684] text-2xl" />,
          content: "Comprehensive security solutions including SSL certificates, vulnerability scanning, and protection against cyber threats to keep your website safe.",
        },
        {
          title: "E-commerce Development",
          icon: <FiShoppingCart className="text-[#245684] text-2xl" />,
          content: "Complete e-commerce solutions with secure payment gateways, inventory management, and shopping cart functionality to grow your online business.",
        },
        {
          title: "SEO-Friendly Website Development",
          icon: <FiSearch className="text-[#245684] text-2xl" />,
          content: "Websites built with SEO best practices to ensure maximum visibility and ranking potential on search engines from day one.",
        },
        {
          title: "Website Redesign",
          icon: <FiLayout className="text-[#245684] text-2xl" />,
          content: "Transform your outdated website into a modern, responsive, and effective digital presence that aligns with current trends and technologies.",
        },
        {
          title: "Analytics Integration",
          icon: <FiBarChart className="text-[#245684] text-2xl" />,
          content: "Implementation of tracking and analytics tools to measure performance, user behavior, and conversion metrics for data-driven decisions.",
        },
        {
          title: "Mobile App Development",
          icon: <FiSmartphone className="text-[#245684] text-2xl" />,
          content: "Native and cross-platform mobile application development for iOS and Android to extend your digital presence to mobile users.",
        },
        {
          title: "Domain and Hosting Services",
          icon: <FiServer className="text-[#245684] text-2xl" />,
          content: "Complete domain registration and reliable hosting solutions with guaranteed uptime, security, and technical support.",
        },
        {
          title: "Custom Web Solutions",
          icon: <FiCode className="text-[#245684] text-2xl" />,
          content: "Tailor-made web applications and solutions designed to address your specific business challenges and operational needs.",
        }
      ]
    },
    {
      category: "SEO Services",
      services: [
        {
          title: "SEO",
          icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
          content: "Comprehensive search engine optimization strategies to improve your website's visibility and organic search rankings.",
        },
        {
          title: "Keyword Research and Strategy",
          icon: <FiSearch className="text-[#245684] text-2xl" />,
          content: "In-depth keyword analysis and strategic planning to target the most valuable search terms for your business.",
        },
        {
          title: "Local SEO",
          icon: <FiSearch className="text-[#245684] text-2xl" />,
          content: "Optimization strategies focused on improving visibility in local search results and Google My Business listings.",
        },
        {
          title: "Content Creation and Optimization",
          icon: <FiPenTool className="text-[#245684] text-2xl" />,
          content: "Creation of high-quality, engaging content optimized for both users and search engines to drive traffic and conversions.",
        },
        {
          title: "SEO Reporting and Analytics",
          icon: <FiBarChart className="text-[#245684] text-2xl" />,
          content: "Detailed performance reports and analytics to track SEO progress, measure ROI, and inform strategy adjustments.",
        },
        {
          title: "On-Page Optimization",
          icon: <FiLayout className="text-[#245684] text-2xl" />,
          content: "Optimization of website elements including meta tags, headings, content, and internal linking structure.",
        },
        {
          title: "E-commerce SEO",
          icon: <FiShoppingCart className="text-[#245684] text-2xl" />,
          content: "Specialized SEO strategies for online stores focusing on product pages, category optimization, and conversion rate enhancement.",
        },
        {
          title: "Technical SEO",
          icon: <FiCode className="text-[#245684] text-2xl" />,
          content: "Technical improvements to website infrastructure, speed, indexing, and crawlability for better search engine performance.",
        },
        {
          title: "SEO for Mobile",
          icon: <FiSmartphone className="text-[#245684] text-2xl" />,
          content: "Optimization strategies specifically focused on improving mobile search visibility and user experience.",
        },
        {
          title: "SEO for Video Content",
          icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
          content: "Optimization of video content to improve visibility in search results and video platforms like YouTube.",
        },
        {
          title: "SEO Audit and Analysis",
          icon: <FiBarChart className="text-[#245684] text-2xl" />,
          content: "Comprehensive website audits to identify SEO issues, opportunities, and develop actionable improvement plans.",
        },
        {
          title: "Link Building & Outreach",
          icon: <FiLink className="text-[#245684] text-2xl" />,
          content: "Strategic acquisition of high-quality backlinks from authoritative websites to improve domain authority and rankings.",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
          content: "Data-driven optimization of website elements to increase the percentage of visitors who complete desired actions.",
        },
        {
          title: "Schema Markup & Structured Data Implementation",
          icon: <FiCode className="text-[#245684] text-2xl" />,
          content: "Implementation of structured data markup to enhance search result appearances with rich snippets and knowledge panels.",
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeService, setActiveService] = useState(0);

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
  }, [activeCategory, activeService]);

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
              Design <span className="text-[#a3d4ff]">& Development</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive web design, development, and SEO solutions to drive your digital presence forward
            </p>
          </div>
         
          {/* Animated CTA button */}
          <div className="mt-12 animate-bounce-slow">
            <a href="#services">
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

      {/* Services Overview - Vertical Tabs */}
      <section 
        id="services"
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
            Our Design & Development Services
          </h2>
          
          {/* Category Selection */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#f5f9fd] p-2 rounded-xl inline-flex">
              {services.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCategory(index);
                    setActiveService(0);
                  }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-[#103d5d] text-white shadow-md'
                      : 'text-[#103d5d] hover:bg-[#e1e9f2]'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile View - Accordion Style */}
          {isMobile ? (
            <div className="space-y-6">
              {services[activeCategory].services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-[#f9fbfe] rounded-xl border border-[#e1e9f2] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveService(activeService === index ? -1 : index)}
                    className={`w-full text-left p-6 transition-all duration-300 ${
                      activeService === index
                        ? 'bg-[#103d5d] text-white'
                        : 'bg-[#f5f9fd] text-[#103d5d]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                          activeService === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                        }`}>
                          {React.cloneElement(service.icon, {
                            className: `${activeService === index ? 'text-white' : 'text-[#245684]'} text-2xl`
                          })}
                        </div>
                        <h3 className="text-xl font-medium">{service.title}</h3>
                      </div>
                      <FiChevronRight 
                        className={`text-xl transition-transform duration-300 ${
                          activeService === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {activeService === index && (
                    <div className="p-6 border-t border-[#e1e9f2]">
                      <p className="text-[#5c6f87] text-lg mb-6 leading-relaxed">{service.content}</p>
                      <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                        Learn More
                      </button>
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
                  {services[activeCategory].services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                        activeService === index
                          ? 'bg-[#103d5d] text-white shadow-lg'
                          : 'bg-[#f5f9fd] text-[#103d5d] hover:bg-[#e1e9f2]'
                      }`}
                      style={{
                        transform: activeService === index ? 'translateX(12px)' : 'none'
                      }}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                          activeService === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                        }`}>
                          {React.cloneElement(service.icon, {
                            className: `${activeService === index ? 'text-white' : 'text-[#245684]'} text-2xl`
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
                    {services[activeCategory].services[activeService].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#103d5d] mt-2">
                    {services[activeCategory].services[activeService].title}
                  </h3>
                </div>

                <p className="text-[#5c6f87] text-lg mb-8 leading-relaxed">
                  {services[activeCategory].services[activeService].content}
                </p>
                
                <div className="mt-12">
                  <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-8 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                    Get This Service
                    <FiChevronRight className="inline ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-[#e1e9f2] shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f0f6ff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#245684]">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#103d5d] mb-4">Discovery</h3>
              <p className="text-[#5c6f87]">We learn about your business, goals, and target audience to create a tailored strategy.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-[#e1e9f2] shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f0f6ff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#245684]">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#103d5d] mb-4">Design</h3>
              <p className="text-[#5c6f87]">Our designers create intuitive, visually appealing interfaces that align with your brand.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-[#e1e9f2] shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f0f6ff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#245684]">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#103d5d] mb-4">Development</h3>
              <p className="text-[#5c6f87]">Our developers build your solution using the latest technologies and best practices.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-[#e1e9f2] shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f0f6ff] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#245684]">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#103d5d] mb-4">Launch & Support</h3>
              <p className="text-[#5c6f87]">We deploy your solution and provide ongoing support to ensure continued success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#000000] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            Our experts are ready to design and develop the perfect solution for your business needs.
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

export default DesignDevPage;
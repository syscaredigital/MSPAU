import React, { useState, useEffect, useRef } from 'react';
import SysCarePrivateCloud from '../assets/website-images/Web-Design-Dev.png';
import { 
  FiLayout, 
  FiPenTool, 
  FiCode, 
  FiShield, 
  FiShoppingCart, 
  FiSearch, 
  FiSmartphone, 
  FiTrendingUp, 
  FiBarChart, 
  FiLink, 
  FiChevronRight,
  FiGlobe,
  FiMonitor,
  FiEdit3,
  FiTarget,
  FiZap,
  FiVideo,
  FiAward,
  FiUsers
} from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "1. What makes SysCare IT Solutions a trusted web design company in Sydney and Melbourne?",
    answer: "SysCare IT Solutions delivers modern, responsive, and SEO-friendly websites tailored to your brand. Our team focuses on user experience, performance, and security, ensuring your website drives results while representing your business professionally."
  },
  {
    question: "2. Do you offer custom web development solutions in Australia?",
    answer: "Yes. We provide custom web development in Australia for businesses with unique needs. From enterprise platforms to bespoke applications, our developers build scalable, secure, and tailored solutions beyond standard templates."
  },
  {
    question: "3. How do your web design services help small businesses?",
    answer: "Our web design services for small businesses create affordable, professional websites that establish credibility online. We integrate user-friendly navigation, mobile responsiveness, and SEO to help small businesses compete effectively."
  },
  {
    question: "4. Can you redesign an existing website to improve its performance?",
    answer: "Absolutely. Our website redesign services update outdated websites with modern design, better functionality, and enhanced SEO. This improves user engagement, conversions, and overall digital presence."
  },
  {
    question: "5. Do you provide ecommerce website development in Melbourne and Sydney?",
    answer: "Yes. We specialize in ecommerce website development in Melbourne and Sydney, offering secure payment gateways, optimized product catalogs, and smooth checkout experiences. Our ecommerce solutions boost sales and customer satisfaction."
  },
  {
    question: "6. What platforms do you use for website development?",
    answer: "We work with multiple platforms, including WordPress, custom-built frameworks, and enterprise-level solutions. Our team ensures your site is scalable, secure, and aligned with your business requirements."
  },
];

const DesignDevPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Mouse move effect for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: "Website Design",
      icon: <FiLayout className="text-[#245684] text-2xl" />,
      content: "At SysCare IT Solutions, we specialize in creating modern, responsive, and visually appealing websites tailored to your unique brand identity. Whether you're a corporate firm, a retail business, or a creative professional, our web design services in Sydney and Melbourne are crafted to help your business stand out in the competitive digital space.",
      image: "/images/Website-Design.png"
    },
    {
      title: "UI/UX Design",
      icon: <FiPenTool className="text-[#245684] text-2xl" />,
      content: "User experience is at the heart of every successful website. Our UI/UX design services focus on delivering intuitive, user-friendly, and aesthetically pleasing digital interfaces that guide visitors effortlessly from one step to the next.",
      image: "/images/UI-UX-Design.png"
    },
    {
      title: "Website Development",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions is a trusted website development company in Sydney and Melbourne, delivering robust, scalable, and high-performing websites for businesses across industries. From WordPress to custom-built applications.",
      image: "/images/Website-Development.png"
    },
    {
      title: "Website Security",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "Security is essential. We provide advanced website security solutions including SSL certification, malware protection, intrusion prevention, and real-time monitoring to keep your website safe and reliable.",
      image: "/images/E-commerce-Development.png"
    },
    {
      title: "E-commerce Development",
      icon: <FiShoppingCart className="text-[#245684] text-2xl" />,
      content: "Specializing in ecommerce website development in Melbourne and Sydney, we build online stores that are secure, engaging, and conversion-focused with seamless navigation and secure payment gateways.",
      image: "/images/E-commerce-Website-Development.png"
    },
    {
      title: "SEO-Friendly Development",
      icon: <FiSearch className="text-[#245684] text-2xl" />,
      content: "We build SEO-friendly websites from the ground up, ensuring every page is optimized for search engines with fast loading speeds, mobile responsiveness, and keyword-rich content implementation.",
      image: "/images/SEO-Friendly-Website-Development.png"
    },
    {
      title: "Website Redesign",
      icon: <FiEdit3 className="text-[#245684] text-2xl" />,
      content: "Transform your outdated website with our redesign services. We revamp your existing site with modern design, improved functionality, and better performance for enhanced user engagement.",
      image: "/images/Website-Redesign.png"
    },
    {
      title: "Analytics Integration",
      icon: <FiBarChart className="text-[#245684] text-2xl" />,
      content: "Integrate powerful analytics tools like Google Analytics and reporting dashboards to track traffic, conversions, user behavior, and campaign performance for informed decision-making.",
      image: "/images/Analytics-Integration.png"
    },
    {
      title: "Mobile App Development",
      icon: <FiSmartphone className="text-[#245684] text-2xl" />,
      content: "Extend your digital strategy with mobile app development for iOS and Android platforms. Our apps are designed for speed, performance, and user engagement.",
      image: "/images/Mobile-App-Development.png"
    },
    {
      title: "Domain and Hosting",
      icon: <FiGlobe className="text-[#245684] text-2xl" />,
      content: "Reliable domain registration and hosting solutions with guaranteed uptime, fast loading speeds, and technical support to keep your website accessible and stable.",
      image: "/images/Domain-and-Hosting-Services.png"
    },
    {
      title: "Custom Web Solutions",
      icon: <FiMonitor className="text-[#245684] text-2xl" />,
      content: "Tailored web development solutions designed to handle complex business requirements. We build scalable, secure, and user-friendly systems that align with your processes.",
      image: "/images/Custom-Web-Solutions.png"
    },
    {
      title: "Keyword Research",
      icon: <FiTarget className="text-[#245684] text-2xl" />,
      content: "In-depth keyword research and strategy to identify high-performing keywords that attract relevant traffic and maximize ROI through continuous monitoring and optimization.",
      image: "/images/Keyword-Research-and-Strategy.png"
    },
    {
      title: "Local SEO",
      icon: <FiUsers className="text-[#245684] text-2xl" />,
      content: "Optimize your local presence with Google Business Profile optimization, local citations, and geo-targeted content to boost visibility in location-based searches.",
      image: "/images/Local-SEO.png"
    },
    {
      title: "Content Creation",
      icon: <FiEdit3 className="text-[#245684] text-2xl" />,
      content: "High-quality content creation and optimization services designed to engage your audience while improving search rankings with original, valuable content.",
      image: "/images/Content-Creation-and-Optimization.png"
    },
    {
      title: "SEO Reporting",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Comprehensive SEO reporting and analytics that deliver actionable insights into your website's performance with real-time data and strategic recommendations.",
      image: "/images/SEO-Reporting-and-Analytics.png"
    },
    {
      title: "On-Page Optimization",
      icon: <FiZap className="text-[#245684] text-2xl" />,
      content: "Specialized on-page SEO optimization ensuring every element of your website works to improve visibility with meta optimization and mobile-friendly adjustments.",
      image: "/images/On-Page-Optimization.png"
    },
    {
      title: "E-commerce SEO",
      icon: <FiAward className="text-[#245684] text-2xl" />,
      content: "Ecommerce SEO services designed to optimize product pages, categories, and site structure for higher rankings and increased conversions.",
      image: "/images/E-commerce-SEO.png"
    },
    {
      title: "Technical SEO",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "Technical SEO services that enhance crawlability, indexation, and overall site health with XML sitemaps, HTTPS security, and site speed optimization.",
      image: "/images/Technical-SEO.png"
    },
    {
      title: "Mobile SEO",
      icon: <FiSmartphone className="text-[#245684] text-2xl" />,
      content: "Mobile SEO optimization ensuring your website delivers speed, design, and usability on smartphones and tablets with responsive design and AMP optimization.",
      image: "/images/SEO-for-Mobile.png"
    },
    {
      title: "Video SEO",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "SEO for video content ensuring your YouTube videos and webinars are optimized for search engines with keyword-rich titles and schema markup.",
      image: "/images/SEO-for-Video-Content.png"
    },
    {
      title: "SEO Audit",
      icon: <FiBarChart className="text-[#245684] text-2xl" />,
      content: "Comprehensive SEO audits to identify strengths, weaknesses, and opportunities with detailed analysis and clear action plans for improvement.",
      image: "/images/SEO-Audit-and-Analysis.png"
    },
    {
      title: "Link Building",
      icon: <FiLink className="text-[#245684] text-2xl" />,
      content: "Ethical link building and outreach services focusing on high-quality, relevant links from trusted websites to enhance domain authority and drive referral traffic.",
      image: "/images/Link-Building-&-Outreach.png"
    },
    {
      title: "Conversion Optimization",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Conversion rate optimization services to turn visitors into leads and customers with A/B testing, UI/UX enhancements, and optimized CTAs.",
      image: "/images/Conversion-Rate-Optimization.png"
    },
    {
      title: "Schema Markup",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "Schema markup and structured data implementation to help search engines better understand your content and display rich results in SERPs.",
      image: "/images/Schema-Markup-Structured-Data-Implementation.png"
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
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs that follow mouse */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 opacity-30 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        {/* Static background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-100 rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>
      </div>

      <Navigation />
      
      {/* Enhanced Header Section */}
      <header
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#103d5d] via-[#1e4a70] to-[#245684] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8"
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

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5 bg-grid-white bg-[length:50px_50px]"></div>
        </div>
       
        {/* Content with parallax effect */}
        <div
          className="relative max-w-7xl mx-auto text-center"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-block overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-typewriter whitespace-nowrap overflow-hidden border-r-4 border-r-white">
              Web Design <span className="text-[#a3d4ff]">& Development</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Transform your digital presence with stunning, high-performance websites
            </p>
          </div>
         
          {/* Animated CTA button */}
          <div className="mt-12 animate-bounce-slow">
            <a href="/syscare-services" className="inline-block">
              <button className="bg-[#a3d4ff] text-[#103d5d] px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto group">
                Explore Our Services
                <FiChevronRight className="w-5 h-5 ml-2 animate-bounce-horizontal group-hover:translate-x-1 transition-transform" />
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

      {/* Web Design Focus Section */}
      <section 
        className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
        ref={sectionRefs[1]}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-grid-blue-200 bg-[length:100px_100px]"></div>
        
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Web Design & Development Services – SysCare IT Solutions</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                In today's digital-first world, your website is often the first impression potential customers have of your business. At SysCare IT Solutions, we deliver professional web design services in Melbourne and Sydney that combine creativity, technology, and strategy.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                As a leading web design company in Australia, we specialize in custom website development, ecommerce solutions, WordPress websites, and SEO-driven strategies. Our focus is on designing websites that don't just look great, but also perform—helping you attract, engage, and convert visitors into customers.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Website Consultation
                <FiChevronRight className="inline ml-3 transition-transform duration-300 group-hover:translate-x-1" />
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
              <div className="bg-white p-6 rounded-2xl border border-[#e1e9f2] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src={SysCarePrivateCloud}
                  className="w-full h-auto rounded-lg transition-transform duration-500"
                  alt="Website Design and Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Vertical Tabs */}
      <section 
        className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        ref={sectionRefs[2]}
      >
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto relative z-10">
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
          
          {/* Mobile View - Accordion Style */}
          {isMobile ? (
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-[#e1e9f2] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02]"
                >
                  <button
                    onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                    className={`w-full text-left p-6 transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-[#103d5d] to-[#245684] text-white'
                        : 'bg-white text-[#103d5d] hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 transition-all duration-300 ${
                          activeTab === index ? 'bg-white/20' : 'bg-blue-100 group-hover:bg-blue-200'
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
                    <div className="p-6 border-t border-[#e1e9f2] animate-slide-down">
                      <div className="mb-6 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-sm flex justify-center">
                        <img 
                          src={service.image}
                          alt={`${service.title} infrastructure`}
                          className="w-32 h-32 object-cover rounded-lg"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      <p className="text-[#5c6f87] text-lg leading-relaxed">{service.content}</p>
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
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                        activeTab === index
                          ? 'bg-gradient-to-r from-[#103d5d] to-[#245684] text-white shadow-2xl'
                          : 'bg-white text-[#103d5d] hover:bg-blue-50 shadow-lg hover:shadow-xl'
                      }`}
                      style={{
                        transform: activeTab === index ? 'translateX(12px) scale(1.02)' : 'none'
                      }}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 transition-all duration-300 ${
                          activeTab === index ? 'bg-white/20' : 'bg-blue-100 group-hover:bg-blue-200'
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
                className="lg:w-2/3 bg-white rounded-2xl p-10 border border-[#e1e9f2] shadow-2xl hover:shadow-2xl transition-all duration-500"
                style={{
                  minHeight: '600px',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              >
                <div className="flex items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mr-8 shadow-lg">
                    {services[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#103d5d] mt-2 bg-gradient-to-r from-[#103d5d] to-[#245684] bg-clip-text text-transparent">
                    {services[activeTab].title}
                  </h3>
                </div>

                {/* Service Graphic */}
                <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 shadow-inner flex justify-center">
                  <img 
                    src={services[activeTab].image}
                    alt={`${services[activeTab].title} infrastructure`}
                    className="w-48 h-48 object-cover rounded-xl shadow-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <p className="text-[#5c6f87] text-lg leading-relaxed bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                  {services[activeTab].content}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
        {/* Animated stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Partner with SysCare IT Solutions today</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            Streamline your IT, strengthen your security, and scale your business with expert-managed services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contact-Us" className="inline-block"> 
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-12 py-5 rounded-xl font-medium transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02] text-lg transform hover:-translate-y-1">
                Get Started Today
              </button>
            </a>
            <a href="/contact-Us" className="inline-block"> 
              <button className="border-2 border-white hover:bg-white hover:text-[#103d5d] text-white px-12 py-5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] text-lg transform hover:-translate-y-1">
                Speak to an Expert
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden"
        ref={sectionRefs[3]}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-blue-200 bg-[length:80px_80px]"></div>
        
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
                        className={`rounded-2xl border bg-white border-[#e1e9f2] shadow-lg hover:shadow-xl transition-all duration-500 group ${
                          activeFaq === qIdx ? 'ring-2 ring-[#245684] ring-opacity-40 scale-[1.02]' : 'hover:scale-[1.01]'
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
                        <button
                          onClick={() => setActiveFaq(activeFaq === qIdx ? null : qIdx)}
                          className={`w-full flex justify-between items-center text-left p-6 rounded-2xl transition-all duration-300 ${
                            activeFaq === qIdx
                              ? 'bg-gradient-to-r from-[#103d5d] to-[#245684] text-white shadow-lg'
                              : 'bg-white text-[#103d5d] hover:bg-blue-50'
                            }
                          `}
                        >
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            <span
                              className={`inline-block w-3 h-3 rounded-full mr-2 transition-all duration-300 ${
                                activeFaq === qIdx ? 'bg-[#a3d4ff] scale-110 shadow-lg' : 'bg-[#245684] scale-90'
                              }`}
                            ></span>
                            {faq.question}
                          </h3>
                          <FiChevronRight
                            className={`text-2xl transition-transform duration-300 ${
                              activeFaq === qIdx ? 'rotate-90 text-[#a3d4ff]' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            activeFaq === qIdx ? 'max-h-[500px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6'
                          }`}
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
                Still have questions? Our team is ready to help.
              </p>
              <a href="/contact-Us" className="inline-block">
                <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-lg">
                  Contact Our Support Team
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

      {/* Custom CSS */}
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
        @keyframes slide-down {
          from { 
            opacity: 0;
            transform: translateY(-10px);
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
        @keyframes fadein {
          from { opacity: 0; transform: translateY(16px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
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
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
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
        .animate-fadein {
          animation: fadein 0.6s cubic-bezier(.4,0,.2,1);
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .bg-grid-white {
          background-image: linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px);
        }
        .bg-grid-blue-200 {
          background-image: linear-gradient(to right, #bfdbfe 1px, transparent 1px),
                            linear-gradient(to bottom, #bfdbfe 1px, transparent 1px);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default DesignDevPage;
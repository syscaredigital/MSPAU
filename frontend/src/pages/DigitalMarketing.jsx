import React, { useState, useEffect, useRef } from 'react';
import SysCarePrivateCloud from '../assets/website-images/SysCare-Private-Cloud.webp';
import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight, FiImage, FiVideo, FiTrendingUp, FiLayers, FiPieChart } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const DigitalMarketingPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);

  const services = [
    {
      title: "Graphic Design",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Professional graphic design services that create visually compelling materials to represent your brand across all platforms and mediums.",
      image: "/images/Graphic-Design.png"
    },
    {
      title: "Logo Design",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Custom logo design services that create memorable, distinctive brand identities that communicate your company's values and vision.",
      image: "/images/Logo-Design.png"
    },
    {
      title: "Business Cards & Stationery",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Professional business card and stationery design that creates a cohesive brand identity across all your printed materials.",
      image: "/images/Business-Cards-Stationery.png"
    },
    {
      title: "Social Media Graphics",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Eye-catching social media graphics designed to increase engagement, followers, and brand recognition across all platforms.",
      image: "/images/Social-Media-Graphics.png"
    },
    {
      title: "Flyers, Posters & Brochures",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Professional print design services for flyers, posters, and brochures that effectively communicate your message and drive action.",
      image: "/images/Flyers-Posters-Brochures.png"
    },
    {
      title: "Presentations & Infographics",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Engaging presentations and informative infographics that transform complex information into visually appealing, easy-to-understand content.",
      image: "/images/Presentations-Infographics.png"
    },
    {
      title: "Web Graphics",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Custom web graphics, banners, and elements designed to enhance your website's visual appeal and user experience.",
      image: "/images/Web-Graphics.png"
    },
    {
      title: "Digital Branding",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Comprehensive digital branding services that create a consistent, recognizable brand identity across all digital platforms.",
      image: "/images/Digital-Branding.png"
    },
    {
      title: "Product Mockups",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Professional product mockup services that showcase your products in realistic settings to enhance marketing materials and presentations.",
      image: "/images/Product-Mockups.png"
    },
    {
      title: "Video Editing",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Professional video editing services that transform raw footage into polished, engaging content for various platforms and purposes.",
      image: "/images/Video-Editing.png"
    },
    {
      title: "YouTube Video Editing",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Specialized YouTube video editing services optimized for audience retention, engagement, and platform-specific best practices.",
      image: "/images/YouTube-Video-Editing.png"
    },
    {
      title: "Social Media Shorts",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Short-form video content creation and editing optimized for social media platforms like Instagram Reels, TikTok, and YouTube Shorts.",
      image: "/images/Social-Media-Shorts.png"
    },
    {
      title: "Intro & Outro Creation",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Custom intro and outro creation for videos that establish brand consistency and professional presentation across all content.",
      image: "/images/Intro-Outro-Creation.png"
    },
    {
      title: "Corporate Videos",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Professional corporate video production and editing for training, presentations, company announcements, and brand storytelling.",
      image: "/images/Corporate-Videos.png"
    },
    {
      title: "Documentary Edits",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Documentary-style video editing that tells compelling stories through careful sequencing, pacing, and narrative development.",
      image: "/images/Documentary-Edits.png"
    },
    {
      title: "Product Promo Videos",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Engaging product promotion videos that highlight features, benefits, and use cases to drive interest and conversions.",
      image: "/images/Product-Promo-Videos.png"
    },
    {
      title: "Subtitles & Captions",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Professional subtitle and captioning services that improve accessibility, engagement, and SEO for your video content.",
      image: "/images/Subtitles-Captions.png"
    },
    {
      title: "Interview Editing",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Expert interview editing that highlights key moments, maintains narrative flow, and creates engaging content from conversation footage.",
      image: "/images/Interview-Editing.png"
    },
    {
      title: "Digital Marketing",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Comprehensive digital marketing strategies that drive growth, engagement, and conversions across multiple online channels.",
      image: "/images/Digital-Marketing.png"
    },
    {
      title: "Search Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Strategic search advertising campaigns on Google and other search engines that target users actively looking for your products or services.",
      image: "/images/Search-Ads.png"
    },
    {
      title: "Display Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Visual display advertising campaigns across websites and platforms to increase brand awareness and reach potential customers.",
      image: "/images/Display-Ads.png"
    },
    {
      title: "YouTube Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Targeted YouTube advertising campaigns that leverage video content to engage audiences and drive conversions.",
      image: "/images/YouTube-Ads.png"
    },
    {
      title: "Meta Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Strategic advertising on Meta platforms (Facebook, Instagram) that targets specific demographics and interests for maximum ROI.",
      image: "/images/Meta-Ads.png"
    },
    {
      title: "Prospecting & Retargeting Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Dual-strategy advertising that both reaches new potential customers and re-engages previous visitors to maximize conversion opportunities.",
      image: "/images/Prospecting-Retargeting-Ads.png"
    },
    {
      title: "Shopping Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Product-focused shopping advertisements that showcase your inventory directly to potential customers searching for similar items.",
      image: "/images/Shopping-Ads.png"
    },
    {
      title: "Awareness Campaigns",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Brand awareness campaigns designed to increase visibility, recognition, and top-of-mind presence among your target audience.",
      image: "/images/Awareness-Campaigns.png"
    },
    {
      title: "Keyword Research for Social Media",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Comprehensive keyword research specifically for social media platforms to optimize content, hashtags, and discoverability.",
      image: "/images/Keyword-Research-Social-Media.png"
    },
    {
      title: "Social Media Management",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Complete social media management services that handle content creation, posting, engagement, and strategy across all platforms.",
      image: "/images/Social-Media-Management.png"
    },
    {
      title: "Account Setup & Profile Optimization",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Professional social media account setup and optimization to ensure your profiles are complete, branded, and optimized for discovery.",
      image: "/images/Account-Setup-Profile-Optimization.png"
    },
    {
      title: "Content Creation & Optimization for Social Media",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Strategic social media content creation and optimization designed to increase engagement, followers, and platform algorithm favorability.",
      image: "/images/Content-Creation-Optimization.png"
    },
    {
      title: "Content Scheduling",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Strategic content scheduling services that ensure consistent posting at optimal times for maximum reach and engagement.",
      image: "/images/Content-Scheduling.png"
    },
    {
      title: "Research & Trend Analysis",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Comprehensive research and trend analysis to keep your social media strategy current, relevant, and ahead of competitors.",
      image: "/images/Research-Trend-Analysis.png"
    },
    {
      title: "Analytics & Reporting",
      icon: <FiPieChart className="text-[#245684] text-2xl" />,
      content: "Detailed analytics and performance reporting that provides insights into campaign effectiveness and guides future strategy decisions.",
      image: "/images/Analytics-Reporting.png"
    },
    {
      title: "Paid Campaigns",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Strategic paid social media campaigns that target specific audiences, objectives, and conversion goals with measurable results.",
      image: "/images/Paid-Campaigns.png"
    },
    {
      title: "Visual Branding",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Comprehensive visual branding services that create a cohesive, recognizable visual identity across all social media platforms and content.",
      image: "/images/Visual-Branding.png"
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
              Digital <span className="text-[#a3d4ff]">Marketing</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive digital marketing solutions to drive your business forward
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

      {/* Focus Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Digital Marketing Solutions</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                Our comprehensive digital marketing services empower businesses with targeted strategies that drive growth, engagement, and conversions. From graphic design to social media management, we create cohesive campaigns that deliver measurable results.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                Experience the power of integrated digital marketing as our dedicated team of experts develops customized solutions to optimize your online presence. Trust our digital marketing services for sophisticated, data-driven strategies that enable you to focus on what truly matters – the growth and success of your business.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Marketing Consultation
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
                  alt="Digital Marketing Solutions"
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
            Our Digital Marketing Services
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
                          alt={`${service.title} service`}
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
                    alt={`${services[activeTab].title} service`}
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
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your Digital Presence?</h2>
    <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
      Our experts are ready to design the perfect digital marketing solution for your business needs.
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

export default DigitalMarketingPage;
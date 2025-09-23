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
      title: "Logo Design",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Your logo is the face of your brand, and our design team ensures it makes a lasting impression. We create modern, professional, and meaningful logos that capture your business identity and communicate your values. Whether you’re launching a startup or rebranding, SysCare delivers versatile logo designs that work across digital and print media. Our goal is to craft visuals that build recognition and trust with your audience.",
      image: "/images/Logo-Design.png"
    },
    {
      title: "Business Cards & Stationery",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "First impressions matter, and custom-designed business cards and stationery add credibility to your brand. We create high-quality, creative, and professional business essentials that reflect your unique style. From business cards to letterheads, envelopes, and corporate templates, SysCare ensures consistency across all touchpoints. With our designs, your brand stands out in every interaction.",
      image: "/images/Business-Cards-Stationery.png"
    },
    {
      title: "Social Media Graphics",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Engaging social media graphics are key to boosting your online presence. We design eye-catching visuals tailored to platforms like Facebook, Instagram, LinkedIn, and YouTube. From profile banners to post templates, we ensure every design is optimized for performance and engagement. SysCare helps your brand maintain a consistent, professional look across all channels.",
      image: "/images/Social-Media-Graphics.png"
    },
    {
      title: "Flyers, Posters & Brochures",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Traditional marketing materials still drive results when designed effectively. We create impactful flyers, posters, and brochures that communicate your brand message clearly. Whether for events, promotions, or product launches, our designs grab attention and drive action. SysCare ensures your print and digital collateral is professional, memorable, and on-brand.",
      image: "/images/Flyers-Posters-Brochures.png"
    },
    {
      title: "Presentations & Infographics",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Presentations and infographics should be more than just informative they should inspire and engage. SysCare designs compelling presentations and data-driven infographics that simplify complex ideas. Whether for corporate pitches, training, or marketing campaigns, we ensure your message is communicated with clarity and creativity. Our designs enhance storytelling and keep your audience focused.",
      image: "/images/Presentations-Infographics.png"
    },
    {
      title: "Web Graphics",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Your website deserves visuals that enhance its usability and appeal. SysCare creates optimized web graphics, including banners, icons, and illustrations, tailored to your website’s style. Our designs improve user experience, reinforce branding, and support conversion goals. We ensure all graphics are responsive, fast-loading, and SEO-friendly for maximum impact.",
      image: "/images/Web-Graphics.png"
    },
    {
      title: "Digital Branding",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Digital branding goes beyond logos it’s about creating a consistent identity across all platforms. SysCare develops brand kits, guidelines, and visual elements that strengthen recognition online. From typography to color palettes, we align every aspect with your business goals. Our branding services help businesses stand out in Sydney, Melbourne, and beyond.",
      image: "/images/Digital-Branding.png"
    },
    {
      title: "Product Mockups",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Showcase your products with professional mockups that highlight quality and appeal. SysCare designs realistic 2D and 3D product mockups for marketing, e-commerce, and presentations. Our visuals give your audience a clear sense of how products will look and feel, building trust and boosting conversions.",
      image: "/images/Product-Mockups.png"
    },

    {
      title: "YouTube Video Editing",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Videos are powerful tools for marketing, and our YouTube editing services ensure your content is professional and engaging. SysCare edits raw footage into polished videos with transitions, effects, and branding elements. Whether for tutorials, reviews, or promotional content, we help you grow your channel and boost engagement.",
      image: "/images/YouTube-Video-Editing.png"
    },
    {
      title: "Social Media Shorts",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Short-form video is dominating platforms like Instagram, TikTok, and YouTube Shorts. SysCare creates high-impact short videos tailored for fast-scrolling audiences. Our edits maximize engagement with creative visuals, trending formats, and optimized storytelling that capture attention within seconds.",
      image: "/images/Social-Media-Shorts.png"
    },
    {
      title: "Intro & Outro Creation",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Professional video intros and outros help establish brand identity. We design custom animations and branded sequences that enhance the look of your videos. SysCare ensures your content starts strong and ends with a memorable call-to-action, driving audience retention and loyalty.",
      image: "/images/Intro-Outro-Creation.png"
    },
    {
      title: "Corporate Videos",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Corporate storytelling builds credibility and trust. SysCare produces high-quality corporate videos for training, presentations, and brand storytelling. Our team combines visuals, audio, and branding to deliver compelling content that represents your business professionally.",
      image: "/images/Corporate-Videos.png"
    },
    {
      title: "Documentary Edits",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Documentary-style videos require precision and storytelling expertise. SysCare edits documentaries with attention to detail, pacing, and clarity. We ensure your content is engaging, informative, and visually captivating while maintaining authenticity.",
      image: "/images/Documentary-Edits.png"
    },
    {
      title: "Product Promo Videos",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Product videos are essential for boosting sales. SysCare designs professional promo videos that showcase your products’ features and benefits. We highlight quality, usability, and value in ways that resonate with your audience.",
      image: "/images/Product-Promo-Videos.png"
    },
    {
      title: "Subtitles & Captions",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Accessibility and engagement go hand in hand. SysCare provides professional subtitle and caption services for videos to expand reach and improve comprehension. Our services ensure your content is accessible to wider audiences, including international viewers.",
      image: "/images/Subtitles-Captions.png"
    },
    {
      title: "Interview Editing",
      icon: <FiVideo className="text-[#245684] text-2xl" />,
      content: "Well-edited interviews make a lasting impact. SysCare edits interview content for clarity, flow, and engagement, ensuring your message is delivered effectively. Whether for corporate profiles or podcasts, we help you create professional, polished videos.",
      image: "/images/Interview-Editing.png"
    },
    
    {
      title: "Paid Social Media Campaigns",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "SysCare helps businesses in Sydney and Melbourne run effective paid social campaigns that drive ROI. We create Meta Ads, shopping ads, prospecting campaigns, retargeting strategies, and awareness campaigns to capture your audience at every stage of the funnel. With precise targeting and creative ad design, we ensure maximum reach and conversions.",
      image: "/images/Paid-Social-Media-Campaigns.png"
    },
    {
      title: "Meta Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Meta (Facebook and Instagram) remains a powerful platform for digital marketing. SysCare designs and manages tailored Meta Ads that increase visibility, generate leads, and boost engagement. Our campaigns are data-driven, ensuring your ad spend delivers measurable results",
      image: "/images/Meta-Ads.png"
    },
    {
      title: "Prospecting & Retargeting Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "We help businesses grow by reaching new audiences (prospecting) while re-engaging existing visitors (retargeting). SysCare creates ads that nurture leads through the funnel, boosting conversion rates and strengthening customer relationships",
      image: "/images/Prospecting-Retargeting-Ads.png"
    },
    {
      title: "Shopping Ads",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "E-commerce businesses benefit from our expertly managed shopping ads. SysCare optimizes product listings, visuals, and targeting to drive online sales. Our strategies maximize visibility across platforms like Google Shopping and Meta.",
      image: "/images/Shopping-Ads.png"
    },
    {
      title: "Awareness Campaigns",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Building brand awareness is the first step in customer acquisition. SysCare develops targeted awareness campaigns to introduce your brand to new audiences. With engaging visuals and messaging, we help your business stay top of mind.",
      image: "/images/Awareness-Campaigns.png"
    },
    {
      title: "Keyword Research for Social Media",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Success in social media marketing starts with the right keywords. SysCare conducts in-depth research to identify trending search terms and optimize your campaigns for discovery. This ensures your content reaches the right audience at the right time.",
      image: "/images/Keyword-Research-Social-Media.png"
    },
   
    {
      title: "Account Setup & Profile Optimization",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "A strong online presence starts with professional account setup. SysCare sets up and optimizes social media profiles across platforms for branding consistency and visibility. From bios to visuals, we ensure your profiles reflect professionalism.",
      image: "/images/Account-Setup-Profile-Optimization.png"
    },
    {
      title: "Content Creation & Optimization for Social Media",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Engaging content fuels successful campaigns. SysCare designs posts, captions, and visuals optimized for audience engagement and platform algorithms. We create content that builds connections and drives action.",
      image: "/images/Content-Creation-Optimization.png"
    },
    {
      title: "Content Scheduling",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Consistency is critical in digital marketing. SysCare provides strategic content scheduling to ensure regular posting and audience engagement. Our scheduling services free up your time while keeping your brand visible.",
      image: "/images/Content-Scheduling.png"
    },
    {
      title: "Research & Trend Analysis",
      icon: <FiLayers className="text-[#245684] text-2xl" />,
      content: "Trends drive social media success. SysCare analyzes market and platform trends to keep your campaigns relevant and impactful. We ensure your content leverages opportunities to connect with audiences effectively.",
      image: "/images/Research-Trend-Analysis.png"
    },
    {
      title: "Analytics & Reporting",
      icon: <FiPieChart className="text-[#245684] text-2xl" />,
      content: "Transparency matters. SysCare delivers detailed analytics and performance reports to track campaign success. Our insights highlight strengths and areas for improvement, helping refine strategies for better results.",
      image: "/images/Analytics-Reporting.png"
    },
    {
      title: "Paid Campaigns",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "From social media to search engines, SysCare designs targeted paid campaigns that maximize ROI. We tailor campaigns for specific business goals, whether lead generation, sales, or brand visibility.",
      image: "/images/Paid-Campaigns.png"
    },
    {
      title: "Visual Branding",
      icon: <FiImage className="text-[#245684] text-2xl" />,
      content: "Strong branding is essential for recognition. SysCare creates consistent visual branding across all digital platforms, reinforcing identity and credibility. Our designs help your business stand out in competitive markets.",
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Multimedia and Digital Marketing Services – SysCare IT Solutions</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                At SysCare IT Solutions Pty Ltd, we help businesses in Sydney, Melbourne, and across Australia elevate their digital presence with creative multimedia designs and results-driven digital marketing services. Whether you’re searching for a reliable multimedia agency or the best digital marketing company in Melbourne, our tailored solutions empower your brand to stand out in competitive markets.
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
            Multimedia and  Digital Marketing   Services
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
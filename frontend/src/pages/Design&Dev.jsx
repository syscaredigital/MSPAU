import React, { useState, useEffect, useRef } from 'react';
import SysCarePrivateCloud from '../assets/website-images/SysCare-Private-Cloud.webp';
import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight, FiLayout, FiShoppingCart, FiSearch, FiSmartphone, FiTrendingUp, FiBarChart, FiLink, FiPenTool } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "1. What makes SysCare IT Solutions a trusted web design company in Sydney and Melbourne?",
    answer: (
      <>
        SysCare IT Solutions delivers modern, responsive, and SEO-friendly websites tailored to your brand. Our team focuses on user experience, performance, and security, ensuring your website drives results while representing your business professionally. </>
    ),
  },
  {
    question: "2. Do you offer custom web development solutions in Australia?",
    answer: (
      <>
        Yes. We provide custom web development in Australia for businesses with unique needs. From enterprise platforms to bespoke applications, our developers build scalable, secure, and tailored solutions beyond standard templates.</>
    ),
  },
  {
    question: "3. How do your web design services help small businesses?",
    answer: (
      <>
          Our web design services for small businesses create affordable, professional websites that establish credibility online. We integrate user-friendly navigation, mobile responsiveness, and SEO to help small businesses compete effectively.</>
    ),
  },
  {
    question: "4. Can you redesign an existing website to improve its performance?",
    answer: (
      <>
        Absolutely. Our website redesign services update outdated websites with modern design, better functionality, and enhanced SEO. This improves user engagement, conversions, and overall digital presence.</>
    ),
  },
  {
    question: "5. Do you provide ecommerce website development in Melbourne and Sydney?",
    answer: (
      <>
        Yes. We specialize in ecommerce website development in Melbourne and Sydney, offering secure payment gateways, optimized product catalogs, and smooth checkout experiences. Our ecommerce solutions boost sales and customer satisfaction.</>
    ),
  },
  {
    question: "6. What platforms do you use for website development?",
    answer: (
      <>
        We work with multiple platforms, including WordPress, custom-built frameworks, and enterprise-level solutions. Our team ensures your site is scalable, secure, and aligned with your business requirements.</>
    ),
  },
];

const DesignDevPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "Website Design",
      icon: <FiLayout className="text-[#245684] text-2xl" />,
      content: "At SysCare IT Solutions, we specialize in creating modern, responsive, and visually appealing websites tailored to your unique brand identity. Whether you’re a corporate firm, a retail business, or a creative professional, our web design services in Sydney and Melbourne are crafted to help your business stand out in the competitive digital space. We focus on blending creativity with functionality, ensuring every design reflects professionalism while being easy to navigate. With an emphasis on mobile responsiveness and user engagement, our websites are built to perform seamlessly across all devices. From layouts to branding consistency, we ensure your online presence is a true extension of your business values.",
      image: "/images/Website-Design.png"
    },
    {
      title: "UI/UX Design",
      icon: <FiLayout className="text-[#245684] text-2xl" />,
      content: "User experience is at the heart of every successful website, and at SysCare IT Solutions, our UI/UX design services are focused on delivering intuitive, user-friendly, and aesthetically pleasing digital interfaces. Our designers study user behavior and apply best practices to create websites that guide visitors effortlessly from one step to the next. Smooth navigation, structured content flow, and engaging visuals work together to provide an enjoyable browsing experience. With an emphasis on accessibility and modern design standards, our UI/UX services ensure higher engagement and improved customer satisfaction. We create websites that are not just beautiful, but also practical and business focused.",
      image: "/images/UI-UX-Design.png"
    },
    {
      title: "Website Development",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions is a trusted website development company in Sydney and Melbourne, delivering robust, scalable, and high-performing websites for businesses across industries. Our expert developers handle everything from WordPress websites and ecommerce platforms to custom-built applications and enterprise-level systems. We focus on clean coding, reliable performance, and long-term scalability to ensure your website evolves with your business. Our development process includes extensive testing, ensuring speed, security, and functionality are never compromised. Whether you’re looking for a simple business site or a feature-rich web application, SysCare provides tailored solutions that meet your goals.",
      image: "/images/Website-Development.png"
    },
    {
      title: "Website Security",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "Security is no longer optional, it’s essential. At SysCare IT Solutions, we provide advanced website security solutions that protect your business and customers from cyber threats. Our services include SSL certification, malware protection, intrusion prevention, and real-time monitoring to keep your website safe and reliable. By implementing strong firewalls and regular updates, we minimize vulnerabilities and protect sensitive data. With the rise in phishing and cyberattacks, our proactive approach ensures that your website remains trustworthy and compliant with industry standards. SysCare gives you peace of mind by making security a built-in feature of your digital presence.",
      image: "/images/E-commerce-Development.png"
    },
    {
      title: "E-commerce Development",
      icon: <FiShoppingCart className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions specializes in ecommerce website development in Melbourne and Sydney, building online stores that are secure, engaging, and conversion focused. We design platforms with seamless navigation, optimized product catalogs, and secure payment gateways to enhance customer trust and sales. Our ecommerce solutions include integrations with popular payment systems, shipping providers, and inventory management tools. With mobile responsiveness and speed optimization, your store is designed to deliver a smooth shopping experience on any device. Whether you’re launching a new online business or upgrading an existing store, SysCare builds ecommerce solutions tailored to drive growth.",
      image: "/images/E-commerce-Website-Development.png"
    },
    {
      title: "SEO-Friendly Website Development",
      icon: <FiSearch className="text-[#245684] text-2xl" />,
      content: "A great website is wasted if it can’t be found. At SysCare IT Solutions, we build SEO-friendly websites from the ground up, ensuring every page is optimized for search engines. Our development process includes fast loading speeds, mobile responsiveness, structured data, and keyword-rich content implementation. By following SEO best practices in design and coding, we help your website rank higher from day one. Our team also ensures metadata optimization, clean URLs, and strong site architecture for better visibility. With SysCare, you get more than a website you get a digital asset designed to attract and convert traffic.",
      image: "/images/SEO-Friendly-Website-Development.png"
    },
    {
      title: "Website Redesign",
      icon: <FiLayout className="text-[#245684] text-2xl" />,
      content: "If your website looks outdated or fails to deliver results, SysCare IT Solutions offers website redesign services to give your digital presence a fresh start. Our team is revamping your existing site with modern design, improved functionality, and better performance. From upgrading navigation and visuals to integrating the latest SEO practices, we transform your underperforming site into a high-performing business tool. Our redesign approach focuses on user engagement, ensuring the site reflects your brand identity while being optimized for conversions. Whether minor tweaks or complete overhauls, SysCare ensures your new website is ready for the future.",
      image: "/images/Website-Redesign.png"
    },
    {
      title: "Analytics Integration",
      icon: <FiBarChart className="text-[#245684] text-2xl" />,
      content: "Data is the foundation of informed decision-making. At SysCare IT Solutions, we integrate powerful analytics tools such as Google Analytics, Tag Manager, and reporting dashboards into your website. These tools help track traffic, conversions, user behavior, and campaign performance. By providing clear, actionable insights, we empower your business to understand what works and where improvements are needed. With detailed reporting, you can fine-tune marketing strategies, optimize content, and enhance the customer journey. SysCare ensures that your website isn’t just live it’s measurable, transparent, and strategically aligned with your goals.",
      image: "/images/Analytics-Integration.png"
    },
    {
      title: "Mobile App Development",
      icon: <FiSmartphone className="text-[#245684] text-2xl" />,
      content: "In the age of smartphones, mobile presence is crucial. SysCare IT Solutions extends your digital strategy with mobile app development for iOS and Android platforms. Our apps are designed for speed, performance, and user engagement, giving businesses a direct way to connect with customers. Whether you need an ecommerce app, a customer service platform, or a business productivity tool, our team delivers tailored mobile solutions. We ensure seamless integration with existing systems, intuitive UI/UX, and secure operations. With SysCare, your mobile app becomes an extension of your brand, empowering growth and accessibility.",
      image: "/images/Mobile-App-Development.png"
    },
    {
      title: "Domain and Hosting Services",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "Your website’s foundation begins with reliable hosting and domain services. SysCare IT Solutions provides secure, high-performance domain registration and hosting solutions designed to keep your website accessible and stable. Our hosting includes guaranteed uptime, fast loading speeds, and technical support to ensure uninterrupted service. We also manage domain registration, renewals, and transfers, giving you a one-stop solution for managing your digital assets. With scalable hosting packages, businesses of all sizes can find reliable solutions to suit their needs. SysCare ensures your website infrastructure is as strong as your brand.",
      image: "/images/Domain-and-Hosting-Services.png"
    },
    {
      title: "Custom Web Solutions",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "Every business is unique and so should be its digital presence. At SysCare IT Solutions, we deliver custom web development solutions in Australia designed to handle complex business requirements. Whether it’s an industry-specific platform, integration with third-party applications, or advanced functionality, we build tailored systems that align with your processes. Our developers work closely with you to understand business challenges and craft scalable, secure, and user-friendly solutions. With SysCare’s custom web solutions, you don’t settle for off-the-shelf templates you gain a powerful digital platform built exclusively for your goals.",
      image: "/images/Custom-Web-Solutions.png"
    },
    {
      title: "Keyword Research and Strategy",
      icon: <FiSearch className="text-[#245684] text-2xl" />,
      content: "At SysCare IT Solutions, our SEO success starts with in-depth keyword research and strategy. We analyze your industry, competitors, and customer behavior to identify high-performing keywords that attract relevant traffic. By targeting both broad and niche search terms, we ensure your website connects with the right audience at the right time. Our tailored keyword strategies help improve visibility, boost search rankings, and maximize ROI. With continuous monitoring and optimization, SysCare ensures your business stays ahead in an ever-changing digital landscape.",
      image: "/images/Keyword-Research-and-Strategy.png"
    },
    {
      title: "Local SEO",
      icon: <FiSearch className="text-[#245684] text-2xl" />,
      content: "If your business serves customers in Melbourne, Sydney, or other Australian regions, Local SEO is critical. SysCare optimizes your Google Business Profile, local citations, and geo-targeted content to boost visibility in location-based searches. We help your business appear in near me searches and local map results, driving more foot traffic and local leads. With structured reviews, local keyword targeting, and directory listings, we enhance your community presence. Our Local SEO strategies are designed to put your business in front of the people who matter most local customers ready to act.",
      image: "/images/Local-SEO.png"
    },
    {
      title: "Content Creation and Optimization",
      icon: <FiPenTool className="text-[#245684] text-2xl" />,
      content: "High-quality content drives traffic and builds trust. SysCare IT Solutions offers content creation and optimization services designed to engage your audience while improving search rankings. We develop blogs, landing pages, and web content optimized with the right keywords, structure, and calls to action. Our team ensures content is original, valuable, and aligned with your business goals. Beyond creation, we optimize existing content for better readability, SEO performance, and conversions. With SysCare, your website becomes a powerful tool for attracting and nurturing leads.",
      image: "/images/Content-Creation-and-Optimization.png"
    },
    {
      title: "SEO Reporting and Analytics",
      icon: <FiBarChart className="text-[#245684] text-2xl" />,
      content: "Transparency is at the core of our approach. SysCare provides SEO reporting and analytics services that deliver actionable insights into your website’s performance. We track rankings, traffic, conversions, and user behavior using advanced tools like Google Analytics and Search Console. Our detailed reports highlight successes, pinpoint areas for improvement, and outline strategic recommendations. With real-time data and performance monitoring, you can make informed business decisions and measure ROI effectively. SysCare ensures you always have a clear picture of your SEO progress.",
      image: "/images/SEO-Reporting-and-Analytics.png"
    },
    {
      title: "On-Page Optimization",
      icon: <FiLayout className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions specializes in on-page SEO optimization, ensuring every element of your website works to improve visibility. We optimize meta titles, descriptions, headers, image tags, internal linking, and page speed to boost search rankings. Our process also includes keyword integration, structured content, and mobile-friendly adjustments for maximum performance. By enhancing the technical and content aspects of each page, we ensure both users and search engines find your website relevant and engaging. With SysCare, on-page SEO becomes a solid foundation for long-term growth.",
      image: "/images/On-Page-Optimization.png"
    },
    {
      title: "E-commerce SEO",
      icon: <FiShoppingCart className="text-[#245684] text-2xl" />,
      content: "Running an online store requires more than great products, it needs visibility. SysCare offers ecommerce SEO services designed to optimize product pages, categories, and site structure for higher rankings. We implement keyword-rich product descriptions, schema markup, and secure, fast-loading designs to improve both traffic and conversions. Our strategies include optimizing images, checkout processes, and reviews to boost search visibility and enhance customer trust. Whether you’re on Shopify, WooCommerce, or Magento, SysCare ensures your online store ranks higher and sells more.",
      image: "/images/E-commerce-SEO.png"
    },
    {
      title: "Technical SEO",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "Behind every high-performance website is a strong technical foundation. SysCare IT Solutions provides technical SEO services that enhance crawlability, indexation, and overall site health. We fix broken links, optimize site architecture, implement XML sitemaps, and ensure HTTPS security. Our experts also improve site speed, mobile responsiveness, and structured data to meet search engine standards. With SysCare’s technical SEO, your website becomes search engine-friendly, ensuring every update and feature works toward better rankings and user experience.",
      image: "/images/Technical-SEO.png"
    },
    {
      title: "SEO for Mobile",
      icon: <FiSmartphone className="text-[#245684] text-2xl" />,
      content: "With most users browsing on mobile devices, mobile SEO is more important than ever. SysCare optimizes your website for speed, design, and usability on smartphones and tablets. We ensure mobile-friendly layouts, fast load times, and seamless navigation to improve user engagement. Our mobile SEO strategies also include responsive design, AMP optimization, and voice search readiness. By prioritizing mobile performance, we help your business capture the growing audience that shops and searches on the go.",
      image: "/images/SEO-for-Mobile.png"
    },
    {
      title: "SEO for Video Content",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Video has become one of the most powerful tools for digital engagement. SysCare provides SEO for video content, ensuring your YouTube videos, webinars, and website-embedded videos are optimized for search engines. From keyword-rich titles and descriptions to video transcripts and schema markup, we improve discoverability and rankings. Our strategies enhance visibility across Google and video search platforms, increasing views and audience retention. With SysCare’s video SEO, your multimedia content becomes a driver of traffic and brand awareness.",
      image: "/images/SEO-for-Video-Content.png"
    },
    {
      title: "SEO Audit and Analysis",
      icon: <FiBarChart className="text-[#245684] text-2xl" />,
      content: "A strong strategy begins with knowing where you stand. SysCare conducts comprehensive SEO audits to identify strengths, weaknesses, and opportunities on your website. We analyze technical issues, keyword performance, content gaps, and backlink profiles to develop a clear action plan. Our SEO analysis highlights the fixes and improvements needed to achieve higher rankings and better conversions. With SysCare, you gain a detailed roadmap to maximize your digital potential and outperform competitors.",
      image: "/images/SEO-Audit-and-Analysis.png"
    },
    {
      title: "Link Building & Outreach",
      icon: <FiLink className="text-[#245684] text-2xl" />,
      content: "Backlinks remain one of the strongest ranking factors in SEO. SysCare’s link building and outreach services focus on building high-quality, relevant links from trusted websites. We use ethical, white-hat strategies to enhance your domain authority and drive referral traffic. Our outreach campaigns target industry blogs, publications, and partners to secure long-term credibility for your website. By improving your backlink profile, SysCare boosts your visibility, authority, and search rankings.",
      image: "/images/Link-Building-&-Outreach.png"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      icon: <FiTrendingUp className="text-[#245684] text-2xl" />,
      content: "Driving traffic is only half the job—the real success lies in conversions. SysCare provides conversion rate optimization (CRO) services to turn visitors into leads and customers. We analyze user behavior, heatmaps, and funnel performance to identify drop-off points and areas for improvement. Our CRO strategies include A/B testing, UI/UX enhancements, and optimized CTAs to increase engagement. With SysCare, your website doesn’t just attract traffic—it generates measurable business results.",
      image: "/images/Conversion-Rate-Optimization.png"
    },
    {
      title: "Schema Markup & Structured Data Implementation",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "Enhance your search visibility with SysCare’s schema markup and structured data implementation services. We add schema tags to your website to help search engines better understand your content and display rich results in SERPs. This includes star ratings, FAQs, events, product details, and more. Structured data improves click-through rates by making your listings stand out with enhanced snippets. With SysCare, you gain a technical SEO edge that maximizes exposure and improves rankings.",
      image: "/images/Schema-Markup-Structured-Data-Implementation.png"
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
              Design <span className="text-[#a3d4ff]">& Dev</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Web Design & Development Services – SysCare IT Solutions</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                In today’s digital-first world, your website is often the first impression potential customers have of your business. At SysCare IT Solutions, we deliver professional web design services in Melbourne and Sydney that combine creativity, technology, and strategy. Whether you’re a small business owner, a growing startup, or an established enterprise, our expert team builds websites that are visually engaging, highly functional, and optimized for search engines.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                As a leading web design company in Australia, we specialize in custom website development, ecommerce solutions, WordPress websites, and SEO-driven strategies. Our focus is on designing websites that don’t just look great, but also perform—helping you attract, engage, and convert visitors into customers.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Website Consultation
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
                  alt="Website Design and Development"
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
            Our Design & Development Services
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

export default DesignDevPage;
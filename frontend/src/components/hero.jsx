// common breakpoints (in pixels)

import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiGlobe, FiServer, FiCloud, FiShield, FiUserPlus, FiPackage, FiBook, FiSmartphone, FiMenu, FiX } from "react-icons/fi";

const VideoHero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [circleSize, setCircleSize] = useState(calculateCircleSize());
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [, setIsDesktop] = useState(false);
  const [videoSource, setVideoSource] = useState('');
  const navigate = useNavigate();

  // Different video sources for different devices
  const videoSources = {
    mobile: '/video/hero-videom.mp4',
    tablet: '/video/hero-video.mp4',
    desktop: '/video/hero-video.mp4'
  };

  const services = [
    { name: "Cloud Solutions", link: "/services/cloud", icon: <FiCloud className="service-icon" /> },
    { name: "IT Security", link: "/services/it-security", icon: <FiShield className="service-icon" /> },
    { name: "IT Support", link: "/services/it-support", icon: <FiUserPlus className="service-icon" /> },
    { name: "Projects & Automation", link: "/services/projects-automation", icon: <FiPackage className="service-icon" /> },
    { name: "Internet & VOIP", link: "/services/internet-voip", icon: <FiGlobe className="service-icon" /> },
    { name: "IT Training", link: "/services/it-training", icon: <FiBook className="service-icon" /> },
    { name: "Digital Services", link: "/services/digital-services", icon: <FiSmartphone className="service-icon" /> },
    { name: "CRM & ERP Solutions", link: "/services/crm-erp", icon: <FiServer className="service-icon" /> }
  ];

  const sub_service = [
    { name: "Service Desk", link: "/Service-Desk", icon: <FiCloud className="service-icon" /> },
    { name: "Managed IT", link: "/Managed-IT-Services", icon: <FiShield className="service-icon" /> },
    { name: "CyberSecurity Consultancy", link: "/CyberSecurityConsultancyServices", icon: <FiUserPlus className="service-icon" /> },
    { name: "Managed Security", link: "/ManagedSecurityServices", icon: <FiPackage className="service-icon" /> },
    { name: "Cloud Solutions", link: "/SysCare-Private-Cloud", icon: <FiGlobe className="service-icon" /> },
    { name: "Hosted Solutions", link: "/Hosted-Services", icon: <FiBook className="service-icon" /> },
    { name: "IT Infra Projects", link: "/ITInfraProjects", icon: <FiSmartphone className="service-icon" /> },
    { name: "Office IT Automation", link: "/DevelopmentAutomation", icon: <FiServer className="service-icon" /> },
    { name: "Connectivity", link: "/Connectivity", icon: <FiServer className="service-icon" /> },
    { name: "VoIP and Video", link: "/VoiceVideo", icon: <FiServer className="service-icon" /> },
    { name: "Web Design and Development", link: "/DesignDev", icon: <FiServer className="service-icon" /> },
    { name: "MultiMedia and Digital Marketing", link: "/DigitalMarketing", icon: <FiServer className="service-icon" /> },
    { name: "Small Business", link: "/SmallBusiness", icon: <FiServer className="service-icon" /> },
    { name: "Enterprise", link: "/Enterprise", icon: <FiServer className="service-icon" /> },
    { name: "Security Training", link: "/Security", icon: <FiServer className="service-icon" /> },
    { name: "Cloud Training", link: "/Cloud", icon: <FiServer className="service-icon" /> },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const typingTexts = [
    "Managed IT Services in Melbourne & Sydney",
    "24/7 IT Support & Cybersecurity Solutions",
    "Secure, Scalable & Reliable IT for Your Business",
    "Trusted MSP & MSSP Partner in Australia"
  ];

  // Calculate circle size based on screen width with all breakpoints
  function calculateCircleSize() {
    const width = window.innerWidth;
    if (width < 375) return 200;    // mobileS & mobileM
    if (width < 425) return 240;    // mobileL
    if (width < 768) return 280;    // tablet breakpoint
    if (width < 1024) return 320;   // tablet
    if (width < 1440) return 400;   // laptop
    if (width < 1920) return 500;   // laptopL
    return 600; // desktop & monitor
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileDevice = width < 768;
      const isTabletDevice = width >= 768 && width < 1024;
      const isLaptopDevice = width >= 1024 && width < 1440;
      const isDesktopDevice = width >= 1440;
      
      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      setIsLaptop(isLaptopDevice);
      setIsDesktop(isDesktopDevice);
      setCircleSize(calculateCircleSize());
      
      // Set appropriate video source based on device
      if (isMobileDevice) {
        setVideoSource(videoSources.mobile);
      } else if (isTabletDevice) {
        setVideoSource(videoSources.tablet);
      } else {
        setVideoSource(videoSources.desktop);
      }
    };

    // Initial setup
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [videoSources.desktop, videoSources.mobile, videoSources.tablet]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      if (!isMobile) {
        video.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    const handleError = () => {
      console.error("Video failed to load");
      setIsVideoLoaded(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Setup rotation animation
    const rotationInterval = setInterval(() => {
      setRotationAngle(prev => (prev + 0.5) % 360);
    }, 50);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      clearInterval(rotationInterval);
    };
  }, [isMobile, videoSource]);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingTexts[currentTextIndex];
      const updatedWord = isDeleting
        ? currentText.substring(0, currentWordIndex - 1)
        : currentText.substring(0, currentWordIndex + 1);

      setCurrentWordIndex(updatedWord.length);

      if (!isDeleting && updatedWord === currentText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && updatedWord === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        setTypingSpeed(100);
      } else {
        setTypingSpeed(isDeleting ? 30 : 60);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentWordIndex, isDeleting, currentTextIndex, typingTexts, typingSpeed]);

  const handleServiceClick = (serviceLink) => {
    console.log(`Navigating to: ${serviceLink}`);
    navigate(serviceLink);
  };

  const playVideoOnMobile = () => {
    if (isMobile && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Mobile video play failed:", error);
      });
    }
  };

  // Calculate responsive values for the rotating circle with all breakpoints
  const getCircleDimensions = () => {
    if (isMobile) {
      const width = window.innerWidth;
      if (width < 375) { // mobileS & mobileM
        return {
          containerSize: 200,
          centerSize: 100,
          radius: 80,
          serviceWidth: 60,
          serviceHeight: 24,
          iconSize: 'text-sm',
          textSize: 'text-[10px]'
        };
      } else if (width < 425) { // mobileL
        return {
          containerSize: 240,
          centerSize: 120,
          radius: 96,
          serviceWidth: 72,
          serviceHeight: 28,
          iconSize: 'text-base',
          textSize: 'text-xs'
        };
      } else { // mobileL to tablet
        return {
          containerSize: 280,
          centerSize: 140,
          radius: 112,
          serviceWidth: 84,
          serviceHeight: 32,
          iconSize: 'text-lg',
          textSize: 'text-xs'
        };
      }
    } else if (isTablet) {
      return {
        containerSize: 320,
        centerSize: 160,
        radius: 128,
        serviceWidth: 112,
        serviceHeight: 38,
        iconSize: 'text-xl',
        textSize: 'text-sm'
      };
    } else if (isLaptop) {
      return {
        containerSize: 400,
        centerSize: 200,
        radius: 160,
        serviceWidth: 140,
        serviceHeight: 48,
        iconSize: 'text-2xl',
        textSize: 'text-base'
      };
    } else { // desktop & monitor
      return {
        containerSize: circleSize,
        centerSize: circleSize * 0.5,
        radius: circleSize * 0.4,
        serviceWidth: circleSize * 0.4,
        serviceHeight: circleSize * 0.15,
        iconSize: 'text-3xl',
        textSize: 'text-lg'
      };
    }
  };

  const circleDimensions = getCircleDimensions();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Services Marquee - Responsive for all devices */}
      <div
        className="block absolute bottom-0 left-0 w-full z-30 bg-gradient-to-r from-[#103d5d] to-[#245684] py-2 xs:py-3 overflow-hidden"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
      >
        <div className={`flex whitespace-nowrap ${isMarqueePaused ? '' : 'animate-marquee'}`}>
          {sub_service.map((service, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-2 xs:mx-3 sm:mx-4 md:mx-6 text-white cursor-pointer group"
              onClick={() => handleServiceClick(service.link)}
            >
              <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full mr-1 xs:mr-2 group-hover:bg-[#245684] transition-colors"></span>
              <span className="font-medium text-[10px] xs:text-xs sm:text-sm md:text-base group-hover:text-[#fff] transition-colors">
                {service.name}
              </span>
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {sub_service.map((service, index) => (
            <div
              key={`dup-${index}`}
              className="inline-flex items-center mx-2 xs:mx-3 sm:mx-4 md:mx-6 text-white cursor-pointer group"
              onClick={() => handleServiceClick(service.link)}
            >
              <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full mr-1 xs:mr-2 group-hover:bg-[#245684] transition-colors"></span>
              <span className="font-medium text-[10px] xs:text-xs sm:text-sm md:text-base group-hover:text-[#245684] transition-colors">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={playVideoOnMobile}
        key={videoSource}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern "></div>

      {/* Floating particles - Responsive count */}
      <div className="absolute inset-0 z-0">
        {[...Array(isMobile ? 6 : isTablet ? 10 : 15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#103d5d] opacity-10 animate-float"
            style={{
              width: Math.random() * (isMobile ? 12 : isTablet ? 15 : 20) + 5 + 'px',
              height: Math.random() * (isMobile ? 12 : isTablet ? 15 : 20) + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Fallback image */}
    {/*   {!isVideoLoaded && (
        <div className="absolute inset-0 bg-[url('/images/hero-fallback.jpg')] bg-cover bg-center"></div>
      )} */}

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center pt-16 md:pt-20 lg:pt-24 xl:pr-40">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Left Content with Typing Text */}
            <div className={`z-10 text-white ${
              isMobile ? 'w-full text-center mb-6 sm:mb-8' : 
              isTablet ? 'w-full text-center mb-8 lg:w-1/2 lg:text-left lg:pr-6' : 
              'lg:w-1/2 lg:pr-8 text-center lg:text-left lg:pt-12 xl:pt-16'
            }`}>
              <div className="mb-3 xs:mb-4 sm:mb-6">
                <span className="inline-flex items-center px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-[10px] xs:text-xs sm:text-sm font-medium text-white border border-white/30">
                  <span className="relative flex h-1.5 w-1.5 xs:h-2 xs:w-2 mr-1 xs:mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 xs:h-2 xs:w-2 bg-white"></span>
                  </span>
                  INNOVATIVE IT SOLUTIONS
                </span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 xs:mb-4 sm:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#245684]">
                  SysCare                               
                </span>
                <br />
                <span className="text-white">
                  IT Solutions                                                                                        
                </span>
              </h1>

              {/* Typing text effect */}
              <div className="min-h-[2rem] xs:min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] mb-3 xs:mb-4 sm:mb-6">
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium">
                  {typingTexts[currentTextIndex].substring(0, currentWordIndex)}
                  <span className="animate-pulse inline-block w-0.5 xs:w-1 h-3 xs:h-4 sm:h-6 bg-white align-middle ml-0.5 xs:ml-1"></span>
                </p>
              </div>

              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-white/90 mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                We deliver cutting-edge technology solutions that drive business growth and optimize operations through innovative IT strategies.
              </p>

              <div className="flex flex xs:flex-row gap-2 xs:gap-3 sm:gap-4 w-full xs:w-auto justify-center lg:justify-start">
                <Link
                  to="/syscare-services"
                  className="w-1/2 xs:w-auto px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white rounded-lg font-semibold hover:from-[#245684] hover:to-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
                >
                  <span className="text-xs xs:text-sm sm:text-base">Explore Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ml-1 xs:ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="/contact-Us"
                  className="w-1/2 xs:w-auto px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20 flex items-center justify-center"
                >
                  <span className="text-xs xs:text-sm sm:text-base">Free Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ml-1 xs:ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </div>

              {/* ISO Certifications */}
              <div className="mt-6 xs:mt-8 sm:mt-12 flex items-center justify-center lg:justify-start space-x-3 xs:space-x-4 sm:space-x-6">
                <div className="flex items-center space-x-1 xs:space-x-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[10px] xs:text-xs sm:text-sm">ISO 27001</p>
                    <p className="text-[8px] xs:text-xs text-white/80">Certified</p>
                  </div>
                </div>
               
                <div className="flex items-center space-x-1 xs:space-x-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[10px] xs:text-xs sm:text-sm">ISO 9001</p>
                    <p className="text-[8px] xs:text-xs text-white/80">Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Dynamic Horizontal Services Rotation */}
            <div className={`flex justify-center items-center ${
              isMobile ? 'w-full mt-4 xs:mt-6' : 
              isTablet ? 'w-full mt-8 lg:w-1/2 lg:justify-center lg:pl-8' : 
              'lg:w-1/2 lg:justify-center lg:pl-12 xl:pl-80'
            }`}>
              <div 
                className="relative flex items-center justify-center"
                style={{
                  width: `${circleDimensions.containerSize}px`,
                  height: `${circleDimensions.containerSize}px`
                }}
              >
                {/* Central element - stays fixed */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div 
                    className="flex items-center justify-center text-white text-center shadow-2xl shadow-[#245684]/30"
                    style={{
                      width: `${circleDimensions.centerSize}px`,
                      height: `${circleDimensions.centerSize}px`,
                      padding: `${circleDimensions.centerSize * 0.15}px`
                    }}
                  >
                    <div>
                      <img 
                        src="/images/Slogo.png" 
                        alt="360° IT Solutions" 
                        className="mx-auto mb-1 xs:mb-2"
                        style={{
                          width: `${circleDimensions.centerSize * 0.2}px`,
                          height: `${circleDimensions.centerSize * 0.2}px`
                        }} 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Services positioned around circle with dynamic rotation */}
                {services.map((service, index) => {
                  const angle = (index / services.length) * 360 + rotationAngle;
                  
                  return (
                    <div
                      key={index}
                      className="absolute flex items-center justify-center text-center text-white font-medium cursor-pointer group transition-all z-20"
                      style={{
                        width: `${circleDimensions.serviceWidth}px`,
                        height: `${circleDimensions.serviceHeight}px`,
                        left: `calc(50% + ${circleDimensions.radius * Math.cos((angle * Math.PI) / 180)}px)`,
                        top: `calc(50% + ${circleDimensions.radius * Math.sin((angle * Math.PI) / 180)}px)`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'left 0.1s linear, top 0.1s linear'
                      }}
                      onClick={() => handleServiceClick(service.link)}
                    >
                      <div className="p-1 xs:p-2">
                        <div className={circleDimensions.iconSize}>{service.icon}</div>
                        <span className={`leading-tight ${circleDimensions.textSize}`}>{service.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white">
            <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        /* Responsive adjustments for all breakpoints */
        @media (max-width: 320px) {
          .bg-grid-pattern {
            background-size: 15px 15px;
          }
        }
        @media (min-width: 321px) and (max-width: 375px) {
          .bg-grid-pattern {
            background-size: 18px 18px;
          }
        }
        @media (min-width: 376px) and (max-width: 425px) {
          .bg-grid-pattern {
            background-size: 20px 20px;
          }
        }
        @media (min-width: 426px) and (max-width: 768px) {
          .bg-grid-pattern {
            background-size: 25px 25px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .bg-grid-pattern {
            background-size: 30px 30px;
          }
        }
      `}</style>

      {/* Service icon styling with all breakpoints */}
      <style jsx>{`
        .service-icon {
          display: inline-block;
          margin-right: 0.25rem;
        }
        @media (max-width: 320px) {
          .service-icon {
            font-size: 0.875rem;
            margin-right: 0.125rem;
          }
        }
        @media (min-width: 321px) and (max-width: 375px) {
          .service-icon {
            font-size: 1rem;
          }
        }
        @media (min-width: 376px) and (max-width: 425px) {
          .service-icon {
            font-size: 1.125rem;
          }
        }
        @media (min-width: 426px) and (max-width: 768px) {
          .service-icon {
            font-size: 1.25rem;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .service-icon {
            font-size: 1.5rem;
          }
        }
        @media (min-width: 1025px) and (max-width: 1440px) {
          .service-icon {
            font-size: 1.75rem;
          }
        }
        @media (min-width: 1441px) {
          .service-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoHero;
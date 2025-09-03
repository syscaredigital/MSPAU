import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiServer, FiCloud, FiShield, FiUserPlus, FiPackage, FiBook, FiSmartphone, FiMenu, FiX } from "react-icons/fi";

const VideoHero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [circleSize, setCircleSize] = useState(calculateCircleSize());
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const videoSrc = '/video/hero-video.mp4';

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

  const typingTexts = [
    "Transforming businesses with innovative technology",
    "Driving growth through digital solutions",
    "Securing your digital future",
    "Optimizing operations with cutting-edge IT"
  ];

  // Calculate circle size based on screen width
  function calculateCircleSize() {
    const width = window.innerWidth;
    if (width < 640) return 280;  // Mobile
    if (width < 768) return 320;  // Small tablet
    if (width < 1024) return 400; // Tablet
    if (width < 1280) return 500; // Small desktop
    return 600; // Large desktop
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setCircleSize(calculateCircleSize());
    };

    // Initial setup
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

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
  }, [isMobile]);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingTexts[currentTextIndex];
      const updatedWord = isDeleting
        ? currentText.substring(0, currentWordIndex - 1)
        : currentText.substring(0, currentWordIndex + 1);

      setCurrentWordIndex(updatedWord.length);

      if (!isDeleting && updatedWord === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedWord === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentWordIndex, isDeleting, currentTextIndex, typingTexts]);

  const handleServiceClick = (serviceLink) => {
    console.log(`Navigating to: ${serviceLink}`);
    // In a real app, you would use your routing mechanism here
  };

  const playVideoOnMobile = () => {
    if (isMobile && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Mobile video play failed:", error);
      });
    }
  };

  // Calculate responsive values for the rotating circle
  const getCircleDimensions = () => {
    if (isMobile) {
      return {
        containerSize: circleSize,
        centerSize: circleSize * 0.5,
        radius: circleSize * 0.40,
        serviceWidth: circleSize * 0.3,
        serviceHeight: circleSize * 0.1,
        iconSize: 'text-xl',
        textSize: 'text-xs'
      };
    } else if (isTablet) {
      return {
        containerSize: circleSize,
        centerSize: circleSize * 0.5,
        radius: circleSize * 0.4,
        serviceWidth: circleSize * 0.35,
        serviceHeight: circleSize * 0.12,
        iconSize: 'text-2xl',
        textSize: 'text-sm'
      };
    } else {
      return {
        containerSize: circleSize,
        centerSize: circleSize * 0.5,
        radius: circleSize * 0.4,
        serviceWidth: circleSize * 0.4,
        serviceHeight: circleSize * 0.15,
        iconSize: 'text-3xl',
        textSize: 'text-base'
      };
    }
  };

  const circleDimensions = getCircleDimensions();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black ">
     {/* Services Marquee - Shown on all devices */}
<div
  className="block absolute bottom-0 left-0 w-full z-30 bg-gradient-to-r from-[#103d5d] to-[#245684] py-2 sm:py-3 overflow-hidden"
  onMouseEnter={() => setIsMarqueePaused(true)}
  onMouseLeave={() => setIsMarqueePaused(false)}
>
  <div className={`flex whitespace-nowrap ${isMarqueePaused ? '' : 'animate-marquee'}`}>
    {services.map((service, index) => (
      <div
        key={index}
        className="inline-flex items-center mx-3 sm:mx-6 text-white cursor-pointer group"
        onClick={() => handleServiceClick(service.link)}
      >
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 group-hover:bg-[#245684] transition-colors"></span>
        <span className="font-medium text-xs sm:text-sm md:text-base group-hover:text-[#fff] transition-colors">
          {service.name}
        </span>
      </div>
    ))}

    {/* Duplicate for seamless loop */}
    {services.map((service, index) => (
      <div
        key={`dup-${index}`}
        className="inline-flex items-center mx-3 sm:mx-6 text-white cursor-pointer group"
        onClick={() => handleServiceClick(service.link)}
      >
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 group-hover:bg-[#245684] transition-colors"></span>
        <span className="font-medium text-xs sm:text-sm md:text-base group-hover:text-[#245684] transition-colors">
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
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-grid-pattern"></div>

      {/* Floating particles - Reduced count on mobile */}
      <div className="absolute inset-0 z-0">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#245684] opacity-10 animate-float"
            style={{
              width: Math.random() * (isMobile ? 15 : 20) + 5 + 'px',
              height: Math.random() * (isMobile ? 15 : 20) + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Fallback image */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-[url('/images/hero-fallback.jpg')] bg-cover bg-center"></div>
      )}

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center pt-16 md:pr-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Left Content with Typing Text */}
            <div className={`z-10 text-white ${isMobile ? 'w-full text-center mb-8' : 'lg:w-1/2 lg:pr-8 text-center lg:text-left'}`}>
              <div className="mb-4 md:mb-6">
                <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white border border-white/30">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  INNOVATIVE IT SOLUTIONS
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#245684]">
                  SysCare                               
                </span>
                <br />
                <span className="text-white">
                  IT Solutions                                                                                        
                </span>
              </h1>

              {/* Typing text effect */}
              <div className="min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem] mb-4 md:mb-6">
                <p className="text-lg md:text-xl lg:text-2xl text-white font-medium">
                  {typingTexts[currentTextIndex].substring(0, currentWordIndex)}
                  <span className="animate-pulse inline-block w-1 h-4 md:h-6 bg-white align-middle ml-1"></span>
                </p>
              </div>

              <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                We deliver cutting-edge technology solutions that drive business growth and optimize operations through innovative IT strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <Link
                  to="/syscare-services"
                  className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white rounded-lg font-semibold hover:from-[#245684] hover:to-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
                >
                  <span className="text-sm md:text-base">Explore Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="/contact-Us"
                  className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20 flex items-center justify-center"
                >
                  <span className="text-sm md:text-base">Free Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 极速0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#103d5d] to-[#245684] border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                          {`C${item}`}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="ml-3 md:ml-4">
                    <p className="font-medium text-sm md:text-base">Trusted by industry leaders</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 md:h-5 md:w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-xs md:text-sm">5.0 Rating</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-6 md:h-8 w-px bg-white/30"></div>

                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-1 md:p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3极速.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-xs md:text-sm">ISO 27001</p>
                      <p className="text-xs text-white/80">Certified</p>
                    </div>
                  </div>
                 
                  <div className="flex items-center space-x-2">
                    <div className="p-1 md:p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-xs md:text-sm">ISO 9001</p>
                      <p className="text-xs text-white/80">Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Dynamic Horizontal Services Rotation - Now visible on all devices */}
            <div className={`flex justify-center items-center ${isMobile ? 'w-full' : 'lg:w-1/2 lg:justify-center lg:pl-60 '}`}>
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
                    className=" flex items-center justify-center text-white text-center shadow-2xl shadow-[#245684]/30"
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
                        className="mx-auto mb-2"
                        style={{
                          width: `${circleDimensions.centerSize * 0.4}px`,
                          height: `${circleDimensions.centerSize * 0.4}px`
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
                      <div className="p-2">
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
        <div className="absolute bottom-20 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
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
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .bg-grid-pattern {
            background-size: 20px 20px;
          }
        }
      `}</style>

      {/* Service icon styling */}
      <style jsx>{`
        .service-icon {
          display: inline-block;
          margin-right: 0.5rem;
        }
        @media (max-width: 640px) {
          .service-icon {
            font-size: 1.25rem;
          }
        }
        @media (min-width: 641px) and (max-width: 767px) {
          .service-icon {
            font-size: 1.5rem;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .service-icon {
            font-size: 1.75rem;
          }
        }
        @media (min-width: 1024px) {
          .service-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoHero;
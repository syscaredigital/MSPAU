// common breakpoints (in pixels)

import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGlobe, FiServer, FiCloud, FiShield, FiUserPlus, FiPackage, FiBook, FiSmartphone, FiMenu, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const VideoHero = () => {
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [deviceSize, setDeviceSize] = useState('desktop');
  const [imageSource, setImageSource] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideTransition, setSlideTransition] = useState(true);
  const navigate = useNavigate();

  // Device breakpoints
  const breakpoints = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 1920,
    monitor: 2560
  };

  // Cover image slides for the hero section
  const coverSlides = [
    '/video/CoverWhiteT (1).png',
    '/video/CoverWhiteT (2).png',
    '/video/CoverWhiteT (3).png',
    '/video/CoverWhiteT(4).png',
    '/video/CoverWhiteT(5).png'
  ];

  const sliderImages = {
    mobileS: coverSlides,
    mobileM: coverSlides,
    mobileL: coverSlides,
    tablet: coverSlides,
    laptop: coverSlides,
    laptopL: coverSlides,
    desktop: coverSlides,
    monitor: coverSlides
  };

  const slideCount = sliderImages[deviceSize]?.length || sliderImages.desktop.length;

  // Fallback image sources if some sizes are not available
  const getImageSource = (device, slideIndex) => {
    const fallbackSources = {
      mobileS: sliderImages.mobileS?.[slideIndex] || sliderImages.mobileM?.[slideIndex] || sliderImages.mobileL?.[slideIndex] || sliderImages.tablet?.[slideIndex],
      mobileM: sliderImages.mobileM?.[slideIndex] || sliderImages.mobileL?.[slideIndex] || sliderImages.tablet?.[slideIndex],
      mobileL: sliderImages.mobileL?.[slideIndex] || sliderImages.tablet?.[slideIndex],
      tablet: sliderImages.tablet?.[slideIndex] || sliderImages.laptop?.[slideIndex],
      laptop: sliderImages.laptop?.[slideIndex] || sliderImages.laptopL?.[slideIndex] || sliderImages.desktop?.[slideIndex],
      laptopL: sliderImages.laptopL?.[slideIndex] || sliderImages.desktop?.[slideIndex],
      desktop: sliderImages.desktop?.[slideIndex] || sliderImages.monitor?.[slideIndex],
      monitor: sliderImages.monitor?.[slideIndex] || sliderImages.desktop?.[slideIndex]
    };
    
    return fallbackSources[device] || sliderImages.desktop?.[slideIndex] || '/video/hero-image1.jpg';
  };

  const services = [
    { name: "Cloud", link: "/syscare-services#infrastructure", icon: <FiCloud className="service-icon" /> },
    { name: "IT Security", link: "/syscare-services#security", icon: <FiShield className="service-icon" /> },
    { name: "IT Support", link: "/syscare-services#support", icon: <FiUserPlus className="service-icon" /> },
    { name: "Projects & Automation", link: "/syscare-services#solutions", icon: <FiPackage className="service-icon" /> },
    { name: "Internet & VOIP", link: "/syscare-services#infrastructure", icon: <FiGlobe className="service-icon" /> },
    { name: "IT Training", link: "/syscare-services#training", icon: <FiBook className="service-icon" /> },
    { name: "Digital Services", link: "/syscare-services#solutions", icon: <FiSmartphone className="service-icon" /> },
    { name: "CRM & ERP Solutions", link: "/syscare-services#solutions", icon: <FiServer className="service-icon" /> }
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

  // Determine device size based on breakpoints
  const getDeviceSize = (width) => {
    if (width < breakpoints.mobileS) return 'mobileS';
    if (width < breakpoints.mobileM) return 'mobileM';
    if (width < breakpoints.mobileL) return 'mobileL';
    if (width < breakpoints.tablet) return 'tablet';
    if (width < breakpoints.laptop) return 'laptop';
    if (width < breakpoints.laptopL) return 'laptopL';
    if (width < breakpoints.desktop) return 'desktop';
    return 'monitor';
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const currentDeviceSize = getDeviceSize(width);
      
      setDeviceSize(currentDeviceSize);
      
      // Set appropriate image source based on device size
      const newImageSource = getImageSource(currentDeviceSize, currentSlide);
      setImageSource(newImageSource);
    };

    // Initial setup
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  // Image slider auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const slideInterval = setInterval(() => {
      setSlideTransition(true);
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [isAutoPlaying, slideCount]);

  // Update image source when slide changes
  useEffect(() => {
    const newImageSource = getImageSource(deviceSize, currentSlide);
    setImageSource(newImageSource);
    setIsImageLoaded(false);
  }, [currentSlide, deviceSize]);

  // Image load handler
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleLoad = () => {
      setIsImageLoaded(true);
    };

    const handleError = () => {
      console.error("Image failed to load:", imageSource);
      setIsImageLoaded(false);
      // Fallback to first image if current fails
      if (currentSlide !== 0) {
        setTimeout(() => {
          setCurrentSlide(0);
        }, 1000);
      }
    };

    // If image source changes and it's already loaded, trigger load
    if (image.complete && image.src === imageSource) {
      setIsImageLoaded(true);
    } else {
      image.addEventListener('load', handleLoad);
      image.addEventListener('error', handleError);
    }

    return () => {
      image.removeEventListener('load', handleLoad);
      image.removeEventListener('error', handleError);
    };
  }, [imageSource, currentSlide]);

  const handleServiceClick = (serviceLink) => {
    console.log(`Navigating to: ${serviceLink}`);
    navigate(serviceLink);
  };

  // FIXED: Slider navigation functions
  const nextSlide = () => {
    setSlideTransition(true);
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slideCount);
    
    // Restart auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const prevSlide = () => {
    setSlideTransition(true);
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    
    // Restart auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // FIXED: Go to specific slide
  const goToSlide = (index) => {
    if (index === currentSlide) return; // Don't do anything if clicking current slide
    
    setSlideTransition(true);
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    
    // Restart auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Helper function to check if device is mobile
  const isMobile = deviceSize === 'mobileS' || deviceSize === 'mobileM' || deviceSize === 'mobileL';
  const isTablet = deviceSize === 'tablet';

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-10 md:pt-12 lg:pt-14">
      {/* Services Marquee */}
      <div
        className="block absolute bottom-0 left-0 w-full z-30 overflow-hidden py-3 xs:py-4"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
      >
        <div className="relative bg-gradient-to-r from-[#0a2a3e] via-[#103d5d] to-[#245684] py-3 xs:py-4 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#15f4ee] to-[#008080] opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-black/40 to-black/20"></div>
          
          <div className={`flex whitespace-nowrap ${isMarqueePaused ? '' : 'animate-marquee'}`}>
            {[...sub_service, ...sub_service].map((service, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-3 xs:mx-4 sm:mx-6 md:mx-8 text-white cursor-pointer group relative"
                onClick={() => handleServiceClick(service.link)}
              >
                <div className="relative mr-2 xs:mr-3">
                  <div className="w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-br from-[#15f4ee] to-[#008080] rounded-full shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300 transform group-hover:scale-125"></div>
                  <div className="absolute inset-0 w-3 h-3 xs:w-4 xs:h-4 bg-[#15f4ee] rounded-full opacity-20 group-hover:opacity-40 animate-pulse"></div>
                </div>
                
                <span className="font-bold text-xs xs:text-sm sm:text-base md:text-lg relative">
                  <span className="relative z-10 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent group-hover:from-[#15f4ee] group-hover:to-cyan-300 transition-all duration-300">
                    {service.name}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent opacity-50 blur-sm group-hover:opacity-70 group-hover:from-[#15f4ee] group-hover:to-cyan-300 transition-all duration-300">
                    {service.name}
                  </span>
                </span>

                <div className="ml-2 xs:ml-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-3 w-3 xs:h-4 xs:w-4 text-[#15f4ee] transform group-hover:scale-110 transition-transform duration-300" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="absolute -right-2 top-1/2 w-4 xs:w-6 h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent transform -translate-y-1/2"></div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#0a2a3e] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#245684] to-transparent pointer-events-none"></div>
        </div>

        <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-t from-cyan-500/10 to-transparent blur-sm"></div>
      </div>

      {/* Image Background Slider - FIXED */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Current Slide with proper sizing */}
        <div className="relative w-full h-full">
          <img
            ref={imageRef}
            src={imageSource}
            alt={`SysCare IT Solutions Background ${currentSlide + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            } ${slideTransition ? 'transition-all duration-1000 ease-in-out' : ''}`}
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => {
              console.error(`Failed to load image: ${imageSource}`);
              setIsImageLoaded(false);
            }}
          />
        </div>

        {/* Loading fallback */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#15f4ee] mx-auto mb-4"></div>
              <p className="text-sm">Loading...</p>
            </div>
          </div>
        )}
      </div>

      {/* FIXED: Slider Controls */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-3 xs:px-4 sm:px-6 lg:px-8">
        <button
          onClick={prevSlide}
          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-[#15f4ee]/50"
          aria-label="Previous image"
        >
          <FiChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-[#15f4ee]/50"
          aria-label="Next image"
        >
          <FiChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* FIXED: Slider Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 xs:space-x-3">
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 xs:w-4 xs:h-4 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index 
                ? 'bg-[#15f4ee] scale-125 shadow-lg shadow-cyan-500/50' 
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern"></div>

      {/* Floating particles */}
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

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s infinite ease-in-out;
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

        .bg-grid-pattern-2d {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 0),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 0);
          background-size: 30px 30px;
        }

        @keyframes gradient-border {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-gradient-border {
          background-size: 200% 100%;
          animation: gradient-border 3s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          padding: 2px;
          border-radius: inherit;
        }

        .service-icon-2d {
          filter: drop-shadow(0 0 2px rgba(0, 255, 255, 0.5));
        }

        @keyframes text-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 2px rgba(21, 244, 238, 0.3));
          }
          50% { 
            filter: drop-shadow(0 0 4px rgba(21, 244, 238, 0.6)) 
                    drop-shadow(0 0 8px rgba(21, 244, 238, 0.4));
          }
        }

        .group:hover .bg-clip-text {
          animation: text-glow 1s ease-in-out;
        }

        @keyframes bullet-pulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 10px rgba(21, 244, 238, 0.5);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(21, 244, 238, 0.8);
          }
        }

        .group:hover .relative .bg-gradient-to-br {
          animation: bullet-pulse 0.6s ease-in-out;
        }

        .shadow-3d {
          box-shadow: 
            0 10px 25px rgba(0, 0, 0, 0.3),
            0 5px 10px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 320px) {
          .bg-grid-pattern {
            background-size: 15px 15px;
          }
          .bg-grid-pattern-2d {
            background-size: 20px 20px;
          }
        }
        @media (min-width: 321px) and (max-width: 375px) {
          .bg-grid-pattern {
            background-size: 18px 18px;
          }
          .bg-grid-pattern-2d {
            background-size: 25px 25px;
          }
        }
        @media (min-width: 376px) and (max-width: 425px) {
          .bg-grid-pattern {
            background-size: 20px 20px;
          }
          .bg-grid-pattern-2d {
            background-size: 25px 25px;
          }
        }
        @media (min-width: 426px) and (max-width: 768px) {
          .bg-grid-pattern {
            background-size: 25px 25px;
          }
          .bg-grid-pattern-2d {
            background-size: 30px 30px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .bg-grid-pattern {
            background-size: 30px 30px;
          }
          .bg-grid-pattern-2d {
            background-size: 35px 35px;
          }
        }

        .group:hover .bg-grid-pattern-2d {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.3) 2px, transparent 0),
            radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.3) 2px, transparent 0);
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>

      {/* Service icon styling */}
      <style jsx>{`
        .service-icon {
          display: inline-block;
        }
        @media (max-width: 320px) {
          .service-icon {
            font-size: 0.875rem;
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
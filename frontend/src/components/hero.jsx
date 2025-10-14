// common breakpoints (in pixels)

import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiGlobe, FiServer, FiCloud, FiShield, FiUserPlus, FiPackage, FiBook, FiSmartphone, FiMenu, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const VideoHero = () => {
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50); // Faster initial speed
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [deviceSize, setDeviceSize] = useState('desktop');
  const [imageSource, setImageSource] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  // Device breakpoints
  const breakpoints = {
    mobileS: 320,   // small phones
    mobileM: 375,   // medium phones
    mobileL: 425,   // large phones
    tablet: 768,    // tablets
    laptop: 1024,   // small laptops
    laptopL: 1440,  // standard desktops
    desktop: 1920,  // full HD desktop
    monitor: 2560   // 27" WQHD / large screen
  };

  // Different image sources for different devices - UPDATED FOR SLIDER
  const sliderImages = {
    mobileS: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ],
    mobileM: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ],
    mobileL: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ],
    tablet: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ],
    laptop: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ],
    laptopL: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ],
    desktop: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ],
    monitor: [
      '/video/hero-image.jpg',
      '/video/hero-image2.png',
      '/video/hero-image3.jpg',
      '/video/hero-image4.jpg',
      '/video/hero-image5.jpg'
    ]
  };

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const typingTexts = [
    "Managed IT Services in Melbourne & Sydney",
    "24/7 IT Support & Cybersecurity Solutions",
    "Secure, Scalable & Reliable IT for Your Business",
    "Trusted MSP & MSSP Partner in Australia"
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
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [isAutoPlaying]);

  // Update image source when slide changes
  useEffect(() => {
    const newImageSource = getImageSource(deviceSize, currentSlide);
    setImageSource(newImageSource);
    setIsImageLoaded(false);
  }, [currentSlide, deviceSize]);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleLoad = () => {
      setIsImageLoaded(true);
    };

    const handleError = () => {
      console.error("Image failed to load");
      setIsImageLoaded(false);
    };

    image.addEventListener('load', handleLoad);
    image.addEventListener('error', handleError);

    return () => {
      image.removeEventListener('load', handleLoad);
      image.removeEventListener('error', handleError);
    };
  }, [imageSource]);

  // Typing effect - FASTER VERSION
  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingTexts[currentTextIndex];
      const updatedWord = isDeleting
        ? currentText.substring(0, currentWordIndex - 1)
        : currentText.substring(0, currentWordIndex + 1);

      setCurrentWordIndex(updatedWord.length);

      if (!isDeleting && updatedWord === currentText) {
        setTimeout(() => setIsDeleting(true), 500); // Shorter pause before deleting
      } else if (isDeleting && updatedWord === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        setTypingSpeed(40); // Faster start for next text
      } else {
        setTypingSpeed(isDeleting ? 20 : 30); // Much faster typing and deleting
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentWordIndex, isDeleting, currentTextIndex, typingTexts, typingSpeed]);

  const handleServiceClick = (serviceLink) => {
    console.log(`Navigating to: ${serviceLink}`);
    navigate(serviceLink);
  };

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 5);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  // Helper function to check if device is mobile - FIXED
  const isMobile = deviceSize === 'mobileS' || deviceSize === 'mobileM' || deviceSize === 'mobileL';
  const isTablet = deviceSize === 'tablet';

  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-black pt-10 md:pt-14 lg:pt-18">
      {/* Services Marquee - 3D Highlighted Design */}
      <div
        className="block absolute bottom-0 left-0 w-full z-30 overflow-hidden py-3 xs:py-4"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
      >
        {/* 3D Container with Gradient Background */}
        <div className="relative bg-gradient-to-r from-[#0a2a3e] via-[#103d5d] to-[#245684] py-3 xs:py-4 shadow-2xl">
          {/* 3D Top Edge */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#15f4ee] to-[#008080] opacity-80"></div>
          
          {/* 3D Bottom Shadow */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-black/40 to-black/20"></div>
          
          {/* Main Marquee Content */}
          <div className={`flex whitespace-nowrap ${isMarqueePaused ? '' : 'animate-marquee'}`}>
            {sub_service.map((service, index) => (
              <div
                key={index}
                className="inline-flex items-center mx-3 xs:mx-4 sm:mx-6 md:mx-8 text-white cursor-pointer group relative"
                onClick={() => handleServiceClick(service.link)}
              >
                {/* 3D Bullet with Glow Effect */}
                <div className="relative mr-2 xs:mr-3">
                  <div className="w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-br from-[#15f4ee] to-[#008080] rounded-full shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300 transform group-hover:scale-125"></div>
                  {/* Inner Glow */}
                  <div className="absolute inset-0 w-3 h-3 xs:w-4 xs:h-4 bg-[#15f4ee] rounded-full opacity-20 group-hover:opacity-40 animate-pulse"></div>
                </div>
                
                {/* 3D Text with Highlight */}
                <span className="font-bold text-xs xs:text-sm sm:text-base md:text-lg relative">
                  {/* Text Shadow for 3D Effect */}
                  <span className="relative z-10 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent group-hover:from-[#15f4ee] group-hover:to-cyan-300 transition-all duration-300">
                    {service.name}
                  </span>
                  {/* Text Glow */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent opacity-50 blur-sm group-hover:opacity-70 group-hover:from-[#15f4ee] group-hover:to-cyan-300 transition-all duration-300">
                    {service.name}
                  </span>
                </span>

                {/* Hover Arrow Indicator */}
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

                {/* Connecting Line */}
                <div className="absolute -right-2 top-1/2 w-4 xs:w-6 h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent transform -translate-y-1/2"></div>
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {sub_service.map((service, index) => (
              <div
                key={`dup-${index}`}
                className="inline-flex items-center mx-3 xs:mx-4 sm:mx-6 md:mx-8 text-white cursor-pointer group relative"
                onClick={() => handleServiceClick(service.link)}
              >
                {/* 3D Bullet with Glow Effect */}
                <div className="relative mr-2 xs:mr-3">
                  <div className="w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-br from-[#15f4ee] to-[#008080] rounded-full shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300 transform group-hover:scale-125"></div>
                  {/* Inner Glow */}
                  <div className="absolute inset-0 w-3 h-3 xs:w-4 xs:h-4 bg-[#15f4ee] rounded-full opacity-20 group-hover:opacity-40 animate-pulse"></div>
                </div>
                
                {/* 3D Text with Highlight */}
                <span className="font-bold text-xs xs:text-sm sm:text-base md:text-lg relative">
                  {/* Text Shadow for 3D Effect */}
                  <span className="relative z-10 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent group-hover:from-[#15f4ee] group-hover:to-cyan-300 transition-all duration-300">
                    {service.name}
                  </span>
                  {/* Text Glow */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent opacity-50 blur-sm group-hover:opacity-70 group-hover:from-[#15f4ee] group-hover:to-cyan-300 transition-all duration-300">
                    {service.name}
                  </span>
                </span>

                {/* Hover Arrow Indicator */}
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

                {/* Connecting Line */}
                <div className="absolute -right-2 top-1/2 w-4 xs:w-6 h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent transform -translate-y-1/2"></div>
              </div>
            ))}
          </div>

          {/* Side Gradient Fades */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#0a2a3e] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#245684] to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom Reflection Effect */}
        <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-t from-cyan-500/10 to-transparent blur-sm"></div>
      </div>

      {/* Image Background Slider */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Current Slide */}
        <img
          ref={imageRef}
          src={imageSource}
          alt={`SysCare IT Solutions Background ${currentSlide + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isImageLoaded ? 'opacity-50' : 'opacity-0'
          }`}
          key={imageSource}
        />

        {/* Previous Slide for smooth transition */}
        <img
          src={getImageSource(deviceSize, (currentSlide - 1 + 5) % 5)}
          alt="Previous slide"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        />

        {/* Next Slide for smooth transition */}
        <img
          src={getImageSource(deviceSize, (currentSlide + 1) % 5)}
          alt="Next slide"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        />
      </div>

      {/* Slider Controls */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
          aria-label="Previous image"
        >
          <FiChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
          aria-label="Next image"
        >
          <FiChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern"></div>

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

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center pt-16 md:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
            {/* Left Content with Typing Text */}
            <div className={`z-10 text-white ${
              isMobile ? 'w-full text-center mb-6 sm:mb-8' : 
              isTablet ? 'w-full text-center mb-8 lg:w-1/2 lg:text-left lg:pr-6' : 
              'lg:w-1/2 lg:pr-8 text-center lg:text-left lg:pt-8 xl:pt-8'
            }`}>

              <h1 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-3 xs:mb-4 sm:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
                  SysCare IT Solutions                               
                </span>
                <br />
              </h1>

              {/* Typing text effect */}
              <div className="min-h-[2rem] xs:min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] mb-3 xs:mb-4 sm:mb-6">
                <p className="text-sm xs:text-base sm:text-sm md:text-md lg:text-xl font-medium">
                  <span className="bg-[#15f4ee] text-black px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded-lg shadow-lg shadow-[#008080]/50 font-semibold">
                    {typingTexts[currentTextIndex].substring(0, currentWordIndex)}
                  </span>
                  <span className="animate-pulse inline-block w-0.5 xs:w-1 h-3 xs:h-4 sm:h-6 bg-[#15f4ee] align-middle ml-0.5 xs:ml-1"></span>
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
              <div className="flex items-center justify-center lg:justify-start space-x-4 xs:space-x-5 sm:space-x-6 mt-4 xs:mt-6">
                <img 
                  src="/logos/ISO_9001_Certified_col.png" 
                  alt="ISO 9001 Certified"
                  className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 object-contain"
                />
                
                <img 
                  src="/logos/ISOIEC_27001_Certified_col.png" 
                  alt="ISO 27001 Certified"
                  className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 object-contain"
                />
              </div>
            </div>

            {/* Right Content - Vertical Marquee with 2D Background */}
            <div className={`flex justify-center items-center ${
              isMobile ? 'w-full mt-8' : 
              isTablet ? 'w-full mt-8 lg:w-1/2 lg:justify-center' : 
              'lg:w-1/2 lg:justify-center'
            }`}>
              <div 
                className="relative overflow-hidden bg-black/20 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group"
                style={{
                  height: isMobile ? '300px' : isTablet ? '400px' : '500px',
                  width: isMobile ? '280px' : isTablet ? '320px' : '380px'
                }}
                onMouseEnter={() => setIsMarqueePaused(true)}
                onMouseLeave={() => setIsMarqueePaused(false)}
              >
                {/* 2D Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                  <div className="absolute inset-0 bg-grid-pattern-2d"></div>
                </div>

                {/* Floating Service Icons Background */}
                <div className="absolute inset-0">
                  {services.map((service, index) => (
                    <div
                      key={`bg-${index}`}
                      className="absolute text-white/10 group-hover:text-white/15 transition-all duration-1000"
                      style={{
                        top: `${(index * 15) % 100}%`,
                        left: `${(index * 20) % 100}%`,
                        fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
                        transform: `rotate(${index * 15}deg)`,
                        transition: 'all 0.5s ease'
                      }}
                    >
                      {service.icon}
                    </div>
                  ))}
                </div>

                {/* Glass Morphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl"></div>

                {/* Vertical Marquee Container */}
                <div className={`relative z-10 flex flex-col ${isMarqueePaused ? '' : 'animate-vertical-marquee'}`}>
                  {/* First set of services */}
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start p-2 xs:p-3 sm:p-4 text-white cursor-pointer group hover:bg-white/10 transition-all duration-300 border-b border-white/10 backdrop-blur-sm"
                      onClick={() => handleServiceClick(service.link)}
                    >
                      <div className="mr-3 xs:mr-4 text-cyan-400 group-hover:text-white transition-colors duration-300">
                        {React.cloneElement(service.icon, {
                          className: "service-icon-2d w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                        })}
                      </div>
                      <span className="font-medium text-sm xs:text-base sm:text-md group-hover:text-cyan-300 transition-colors duration-300">
                        {service.name}
                      </span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 xs:h-5 xs:w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-400" 
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
                  ))}
                  
                  {/* Duplicate for seamless loop */}
                  {services.map((service, index) => (
                    <div
                      key={`dup-${index}`}
                      className="flex items-center justify-start p-2 xs:p-3 sm:p-4 text-white cursor-pointer group hover:bg-white/10 transition-all duration-300 border-b border-white/10 backdrop-blur-sm"
                      onClick={() => handleServiceClick(service.link)}
                    >
                      <div className="mr-3 xs:mr-4 text-cyan-400 group-hover:text-white transition-colors duration-300">
                        {React.cloneElement(service.icon, {
                          className: "service-icon-2d w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                        })}
                      </div>
                      <span className="font-medium text-sm xs:text-base sm:text-md group-hover:text-cyan-300 transition-colors duration-300">
                        {service.name}
                      </span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 xs:h-5 xs:w-5 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-400" 
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
                  ))}
                </div>

                {/* Gradient overlays for smooth edges */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20"></div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-gradient-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      {/* {!isMobile && (
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white">
            <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      )} */}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        @keyframes vertical-marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 20s linear infinite;
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

        /* New styles for 2D modern design */
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

        /* Enhanced 3D Marquee Animations */
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

        /* Bullet Pulse Animation */
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

        /* Enhanced 3D Container Shadows */
        .shadow-3d {
          box-shadow: 
            0 10px 25px rgba(0, 0, 0, 0.3),
            0 5px 10px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        /* Responsive adjustments for all breakpoints */
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

        /* Enhanced hover effects */
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

      {/* Service icon styling with all breakpoints */}
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
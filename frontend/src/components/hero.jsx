import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VideoHero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const videoSrc = '/video/hero-video.mp4';

  const services = [
    { name: "Cloud Solutions", link: "/services/cloud" },
    { name: "IT Security", link: "/services/it-security" },
    { name: "IT Support", link: "/services/it-support" },
    { name: "Projects & Automation", link: "/services/projects-automation" },
    { name: "Internet & VOIP", link: "/services/internet-voip" },
    { name: "IT Training", link: "/services/it-training" },
    { name: "Digital Services", link: "/services/digital-services" },
    { name: "CRM & ERP Solutions", link: "/services/crm-erp" }
  ];

  const typingTexts = [
    "Transforming businesses with innovative technology",
    "Driving growth through digital solutions",
    "Securing your digital future",
    "Optimizing operations with cutting-edge IT"
  ];

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(error => {
        console.log("Autoplay prevented:", error);
        setIsVideoLoaded(true);
      });
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
  }, []);

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
    alert(`Navigating to ${serviceLink}`);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Services Marquee at the top */}
      <div
        className="absolute top-0 left-0 w-full z-30 bg-gradient-to-r from-[#103d5d] to-[#245684] py-3 overflow-hidden"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
      >
        <div className={`flex whitespace-nowrap ${isMarqueePaused ? '' : 'animate-marquee'}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 text-white cursor-pointer group"
              onClick={() => handleServiceClick(service.link)}
            >
              <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-[#245684] transition-colors"></span>
              <span className="font-medium text-sm md:text-base group-hover:text-[#245684] transition-colors">{service.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {services.map((service, index) => (
            <div
              key={`dup-${index}`}
              className="inline-flex items-center mx-8 text-white cursor-pointer group"
              onClick={() => handleServiceClick(service.link)}
            >
              <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-[#245684] transition-colors"></span>
              <span className="font-medium text-sm md:text-base group-hover:text-[#245684] transition-colors">{service.name}</span>
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
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#103d5d]/70 via-black/80 to-[#245684]/70 z-10"></div>
     
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-grid-pattern"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#245684] opacity-10 animate-float"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
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
      <div className="relative z-20 h-full flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content with Typing Text */}
            <div className="z-10 text-white">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  INNOVATIVE IT SOLUTIONS
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#245684]">
                  SysCare
                </span>
                <br />
                <span className="text-white">
                  IT Solutions
                </span>
              </h1>

              {/* Typing text effect */}
              <div className="h-12 mb-6">
                <p className="text-xl md:text-2xl text-white font-medium">
                  {typingTexts[currentTextIndex].substring(0, currentWordIndex)}
                  <span className="animate-pulse inline-block w-1 h-6 bg-white align-middle ml-1"></span>
                </p>
              </div>

              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                We deliver cutting-edge technology solutions that drive business growth and optimize operations through innovative IT strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/syscare-services"
                  className="px-8 py-4 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white rounded-lg font-semibold hover:from-[#245684] hover:to-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
                >
                  <span>Explore Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="/contact-Us"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20 flex items-center justify-center"
                >
                  <span>Free Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 极速5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4极速V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#103d5d] to-[#245684] border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                          {`C${item}`}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Trusted by industry leaders</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72极速c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm">5.0 Rating</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-8 w-px bg-white/30"></div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">ISO 27001</p>
                      <p className="text-xs text-white/80">Certified</p>
                    </div>
                  </div>
                 
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="极速0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">ISO 9001</p>
                      <p className="text-xs text-white/80">Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Dynamic Horizontal Services Rotation */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[550px] h-[550px]">
                {/* Outer ring with rotation */}
                <div 
                  className="absolute inset-0 rounded-full border-4 border-white/20"
                  style={{
                    transform: `rotate(${rotationAngle}deg)`,
                    transition: 'transform 0.1s linear'
                  }}
                >
                  {/* Inner ring with counter-rotation */}
                  <div 
                    className="absolute inset-12 rounded-full border-2 border-white/30"
                    style={{
                      transform: `rotate(${-rotationAngle * 0.5}deg)`,
                      transition: 'transform 0.1s linear'
                    }}
                  ></div>
                </div>
               
                {/* Central element - stays fixed */}
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#103d5d] to-[#245684] flex items-center justify-center text-white text-center p-6 shadow-2xl shadow-[#245684]/30 border border-white/30">
<div>
      {/* Replaced 360° text with image */}
<img 
        src="/images/Slogo.png" 
        alt="360° IT Solutions" 
        className="w-20 h-20 mx-auto mb-2" />
</div>
</div>
</div>
                
                {/* Services positioned around circle with dynamic rotation */}
                {services.map((service, index) => {
                  const angle = (index / services.length) * 360 + rotationAngle;
                  const radius = 230;
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-40 h-15 flex items-center justify-center text-center text-white font-medium bg-white/10 backdrop-blur-sm rounded-lg border border-white cursor-pointer group hover:bg-white/20 transition-all z-20"
                      style={{
                        left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
                        top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
                        transform: 'translate(-50%, -50%)',
                        transition: 'left 0.1s linear, top 0.1s linear'
                      }}
                      onClick={() => handleServiceClick(service.link)}
                    >
                      <div className="p-3">
                        <div className="w-5 h-5 bg-white rounded-full mx-auto mb-2 group-hover:bg-[#245684] transition-colors"></div>
                        <span className="text-xs leading-tight">{service.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default VideoHero;
import React, { useState, useEffect } from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Managed IT Services",
      description: "24/7 monitoring and management of your entire IT infrastructure",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      category: "managed-services",
      color: "cyan"
    },
    {
      id: 2,
      title: "Cloud Security",
      description: "Comprehensive protection for your cloud infrastructure across all platforms",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      category: "security",
      color: "purple"
    },
    {
      id: 3,
      title: "Endpoint Protection",
      description: "Advanced security for all devices accessing your network",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      category: "security",
      color: "pink"
    },
    {
      id: 4,
      title: "Network Security",
      description: "Enterprise-grade firewall protection and intrusion prevention",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      category: "security",
      color: "cyan"
    },
    {
      id: 5,
      title: "Compliance Consulting",
      description: "Ensure your business meets all regulatory requirements",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      category: "consulting",
      color: "purple"
    },
    {
      id: 6,
      title: "Disaster Recovery",
      description: "Minimize downtime with our comprehensive backup solutions",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      category: "cloud",
      color: "pink"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    }

    if (touchStart - touchEnd < -100) {
      handlePrev();
    }
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative py-20 bg-[#0f172a] overflow-hidden">
      {/* Holographic grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNjQwNTAiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTIxLjIxMyA2LjYwOGwuMDcxLS4wNDdjLjA0NS0uMDMuMDk0LS4wNTYuMTQ0LS4wODRsLjA3LS4wMzVjLjA1LS4wMjcuMS0uMDU0LjE1Mi0uMDc3bC4wNjctLjAzMWMuMDU4LS4wMjQuMTE3LS4wNDYuMTc3LS4wNjVsLjA3LS4wMjRjLjA2LS4wMTkuMTIxLS4wMzYuMTgzLS4wNWwuMDY3LS4wMTZjLjA2NS0uMDE0LjEzLS4wMjYuMTk2LS4wMzVsLjA2Ni0uMDFjLjA2OC0uMDA5LjEzNy0uMDE2LjIwNi0uMDIxbC4wNjQtLjAwN2MuMDctLjAwNS4xNC0uMDA4LjIxLS4wMDhoLjA2NGMuMDcuMCAuMTQuMDAzLjIxLjAwOGwuMDY0LjAwN2MuMDcuMDA1LjEzOC4wMTIuMjA2LjAyMWwuMDY2LjAxYy4wNjYuMDA5LjEzMS4wMjEuMTk2LjAzNWwuMDY3LjAxNmMuMDYyLjAxNC4xMjMuMDMxLjE4My4wNWwuMDcuMDI0Yy4wNi4wMTkuMTE5LjA0MS4xNzcuMDY1bC4wNjcuMDMxYy4wNTIuMDIzLjEwMi4wNS4xNTIuMDc3bC4wNy4wMzVjLjA1LjAyOC4wOTkuMDU0LjE0NC4wODRsLjA3MS4wNDdjLjA0NS4wMy4wODYuMDYzLjEyNi4wOTdsLjA2My4wNDljLjA0LjAzNC4wNzYuMDcuMTA5LjEwNmwuMDU1LjA1OWMuMDMzLjAzNi4wNjIuMDc1LjA4Ny4xMTVsLjA0OC4wNjZjLjAyNS4wNC4wNDYuMDgyLjA2My4xMjZsLjAzOS4wN2MuMDE3LjA0NC4wMzEuMDkuMDQxLjEzNWwuMDMuMDc0Yy4wMS4wNDUuMDE3LjA5LjAyMi4xMzVsLjAyLjA3NGMuMDA1LjA0NS4wMDcuMDkuMDA3LjEzNHYxMy4yOTNjMCAuMDQ0LS4wMDIuMDg5LS4wMDcuMTM0bC0uMDIuMDc0Yy0uMDA1LjA0NS0uMDEyLjA5LS4wMjIuMTM1bC0uMDMuMDc0Yy0uMDEuMDQ1LS4wMjQuMDkxLS4wNDEuMTM1bC0uMDM5LjA3Yy0uMDE3LjA0NC0uMDM4LjA4Ni0uMDYzLjEyNmwtLjA0OC4wNjZjLS4wMjUuMDQtLjA1NC4wOC0uMDg3LjExNWwtLjA1NS4wNTljLS4wMzMuMDM2LS4wNjkuMDcyLS4xMDkuMTA2bC0uMDYzLjA0OWMtLjA0LjAzNC0uMDgxLjA2Ny0uMTI2LjA5N2wtLjA3MS4wNDdjLS4wNDUuMDMtLjA5NC4wNTYtLjE0NC4wODRsLS4wNy4wMzVjLS4wNS4wMjctLjEuMDU0LS4xNTIuMDc3bC0uMDY3LjAzMWMtLjA1OC4wMjQtLjExNy4wNDYtLjE3Ny4wNjVsLS4wNy4wMjRjLS4wNi4wMTktLjEyMS4wMzYtLjE4My4wNWwtLjA2Ny4wMTZjLS4wNjUuMDE0LS4xMy4wMjYtLjE5Ni4wMzVsLS4wNjYuMDFjLS4wNjguMDA5LS4xMzcuMDE2LS4yMDYuMDIxbC0uMDY0LjAwN2MtLjA3LjAwNS0uMTQuMDA4LS4yMS4wMDhoLS4wNjRjLS4wNyAwLS4xNC0uMDAzLS4yMS0uMDA4bC0uMDY0LS4wMDdjLS4wNy0uMDA1LS4xMzgtLjAxMi0uMjA2LS4wMjFsLS4wNjYtLjAxYy0uMDY2LS4wMDktLjEzMS0uMDIxLS4xOTYtLjAzNWwtLjA2Ny0uMDE2Yy0uMDYyLS4wMTQtLjEyMy0uMDMxLS4xODMtLjA1bC0uMDctLjAyNGMtLjA2LS4wMTktLjExOS0uMDQxLS4xNzctLjA2NWwtLjA2Ny0uMDMxYy0uMDUyLS4wMjMtLjEwMi0uMDUtLjE1Mi0uMDc3bC0uMDctLjAzNWMtLjA1LS4wMjgtLjA5OS0uMDU0LS4xNDQtLjA4NGwtLjA3MS0uMDQ3Yy0uMDQ1LS4wMy0uMDg2LS4wNjMtLjEyNi0uMDk3bC0uMDYzLS4wNDljLS4wNC0uMDM0LS4wNzYtLjA3LS4xMDktLjEwNmwtLjA1NS0uMDU5Yy0uMDMzLS4wMzYtLjA2Mi0uMDc1LS4wODctLjExNWwtLjA0OC0uMDY2Yy0uMDI1LS4wNC0uMDQ2LS4wODItLjA2My0uMTI2bC0uMDM5LS4wN2MtLjAxNy0uMDQ0LS4wMzEtLjA5LS4wNDEtLjEzNWwtLjAzLS4wNzRjLS4wMS0uMDQ1LS4wMTctLjA5LS4wMjItLjEzNWwtLjAyLS4wNzRjLS4wMDUtLjA0NS0uMDA3LS4wODktLjAwNy0uMTM0VjcuNTYxYzAtLjA0NC4wMDItLjA4OS4wMDctLjEzNGwuMDItLjA3NGMuMDA1LS4wNDUuMDEyLS4wOS4wMjItLjEzNWwuMDMtLjA3NGMuMDEtLjA0NS4wMjQtLjA5MS4wNDEtLjEzNWwuMDM5LS4wN2MuMDE3LS4wNDQuMDM4LS4wODYuMDYzLS4xMjZsLjA0OC0uMDY2Yy4wMjUtLjA0LjA1NC0uMDguMDg3LS4xMTVsLjA1NS0uMDU5Yy4wMzMtLjAzNi4wNjktLjA3Mi4xMDktLjEwNmwuMDYzLS4wNDljLjA0LS4wMzQuMDgxLS4wNjcuMTI2LS4wOTd6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full filter blur-[60px] animate-float1"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full filter blur-[80px] animate-float2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-pink-500/10 rounded-full filter blur-[50px] animate-float3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-6">
            <span className="h-2 w-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-400">OUR INNOVATIVE SOLUTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Holographic</span> Service Interface
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Navigate through our cutting-edge security solutions with this interactive 3D carousel
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] w-full perspective-1000">
          {/* Carousel Track */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateZ(-500px) rotateY(${-activeIndex * (360 / services.length)}deg)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Service Cards arranged in a circle */}
            {services.map((service, index) => {
              const angle = (index * (360 / services.length)) * (Math.PI / 180);
              const x = Math.sin(angle) * 400;
              const z = Math.cos(angle) * 400 - 500;
              const rotateY = -index * (360 / services.length);
              
              return (
                <div
                  key={service.id}
                  className={`absolute w-72 h-96 rounded-2xl border transition-all duration-500 ${service.color === 'cyan' ? 'border-cyan-400/30' : service.color === 'purple' ? 'border-purple-400/30' : 'border-pink-400/30'} ${activeIndex === index ? 'opacity-100 scale-110' : 'opacity-70 scale-90'} ${activeIndex === index ? 'bg-[#1e293b]/80' : 'bg-[#1e293b]/50'} backdrop-blur-sm`}
                  style={{
                    transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`,
                    zIndex: activeIndex === index ? 10 : 1
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div className="p-8 h-full flex flex-col">
                    {/* Icon with floating effect */}
                    <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-lg ${service.color === 'cyan' ? 'bg-cyan-400/10' : service.color === 'purple' ? 'bg-purple-400/10' : 'bg-pink-400/10'} ${activeIndex === index ? 'animate-float' : ''}`}>
                      <svg 
                        className={`w-6 h-6 ${service.color === 'cyan' ? 'text-cyan-400' : service.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                    
                    {/* Active indicator */}
                    {activeIndex === index && (
                      <div className={`h-1 rounded-full ${service.color === 'cyan' ? 'bg-cyan-400' : service.color === 'purple' ? 'bg-purple-400' : 'bg-pink-400'} mb-4`}></div>
                    )}
                    
                    {/* Learn more button - only visible on active card */}
                    {activeIndex === index && (
                      <button className={`flex items-center ${service.color === 'cyan' ? 'text-cyan-400 hover:text-cyan-300' : service.color === 'purple' ? 'text-purple-400 hover:text-purple-300' : 'text-pink-400 hover:text-pink-300'} transition-colors`}>
                        <span className="mr-2">Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center mt-12 space-x-8">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-[#1e293b]/50 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-colors"
            aria-label="Previous service"
          >
            <svg className="w-6 h-6 text-gray-300 hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          {/* Indicators */}
          <div className="flex space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-[#1e293b]/50 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-colors"
            aria-label="Next service"
          >
            <svg className="w-6 h-6 text-gray-300 hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Description panel for active service */}
        <div className="mt-16 max-w-3xl mx-auto bg-[#1e293b]/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex items-start">
            <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg ${services[activeIndex].color === 'cyan' ? 'bg-cyan-400/10' : services[activeIndex].color === 'purple' ? 'bg-purple-400/10' : 'bg-pink-400/10'} mr-6`}>
              <svg 
                className={`w-8 h-8 ${services[activeIndex].color === 'cyan' ? 'text-cyan-400' : services[activeIndex].color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={services[activeIndex].icon}></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{services[activeIndex].title}</h3>
              <p className="text-gray-300 mb-4">{services[activeIndex].description}</p>
              <div className="flex space-x-4">
                <button className={`px-6 py-2 rounded-lg font-medium ${services[activeIndex].color === 'cyan' ? 'bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400' : services[activeIndex].color === 'purple' ? 'bg-purple-400/10 hover:bg-purple-400/20 text-purple-400' : 'bg-pink-400/10 hover:bg-pink-400/20 text-pink-400'} border ${services[activeIndex].color === 'cyan' ? 'border-cyan-400/20' : services[activeIndex].color === 'purple' ? 'border-purple-400/20' : 'border-pink-400/20'} transition-colors`}>
                  Learn More
                </button>
                <button className="px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
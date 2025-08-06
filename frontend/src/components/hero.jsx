import React, { useRef, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';


const VideoHero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Video path - UPDATE THIS TO YOUR ACTUAL PATH
  const videoSrc = '/videos/heroSection.mp4'; // or import from assets

  useEffect(() => {
    const video = videoRef.current;
    
    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // Autoplay was prevented, but video is loaded
        setIsVideoLoaded(true);
      });
    };

    const handleError = () => {
      console.error("Video failed to load");
      setIsVideoLoaded(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);
console.log("Video path is:", videoSrc); // Verify path is correct
  return (
    
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Add WebM version for better browser support */}
        {/* <source src="/videos/hero-bg.webm" type="video/webm" /> */}
        Your browser does not support HTML5 video.
      </video>

      {/* Fallback image if video fails to load */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-[url('/images/hero-fallback.jpg')] bg-cover bg-center"></div>
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">Advanced Cyber Security</span>
            <span className="text-blue-400">Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Protecting your digital assets with cutting-edge threat intelligence and 24/7 monitoring.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center group">
              Get Started
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-[1.02]">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
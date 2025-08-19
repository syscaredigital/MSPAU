import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VideoHero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoSrc = '/video/hero-video.mp4';

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

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

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
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Fallback image */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-[url('/images/hero-fallback.jpg')] bg-cover bg-center"></div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* ✅ New Content Section */}
      <div className="relative z-20 h-full flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="z-10 text-white">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider animate-pulse">
                  INNOVATIVE IT SOLUTIONS
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                  SysCare IT Solutions
                </span>
                <br />
                For Your Digital Transformation
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                We deliver cutting-edge technology solutions that drive business growth and optimize operations through innovative IT strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-[#1e3a8a] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
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
                  to="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <span>Free Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Link>
              </div>

              {/* ✅ Clients + ISO Badge */}
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((item) => (
                      <img
                        key={item}
                        src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${30 + item}.jpg`}
                        alt="Client"
                        className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300"
                      />
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
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2">5.0 Rating</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-8 w-px bg-white/30"></div>

                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">ISO 27001 Certified</p>
                    <p className="text-sm text-white/80">Data Security</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Decorative Card */}
            <div className="relative z-10 hidden lg:block">
              <div className="relative w-full h-96">
                <div className="absolute top-0 right-0 w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="inline-block p-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Your Digital Transformation Starts Here</h3>
                      <p className="text-white/80 mb-6">Custom solutions tailored to your business needs</p>
                      <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                        <span>24/7 Support</span>
                        <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300/20 rounded-full filter blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;

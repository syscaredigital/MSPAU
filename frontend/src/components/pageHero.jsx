import React from 'react';

const PageHero = ({ title, subtitle, breadcrumb = [] }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden min-h-[70vh] flex items-center">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-gray-700"></div>
        ))}
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-20 w-6 h-6 rounded-full bg-cyan-400 opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 right-32 w-10 h-10 rounded-full bg-purple-500 opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-blue-500 opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>

      {/* Interactive Map Container */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-1/2 md:h-full opacity-20 md:opacity-30 hover:opacity-40 transition-opacity duration-300">
        <div className="relative w-full h-full">
          {/* World Map Base */}
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <path 
              d="M400,200 Q450,150 500,200 T600,200 Q650,180 700,200 T800,250" 
              stroke="#3b82f6" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5,3"
            />
            {/* Simplified continents */}
            <path d="M100,150 Q150,100 200,150 Q250,200 200,250 Q150,300 100,250 Z" fill="#1e3a8a" opacity="0.3"/>
            <path d="M300,100 Q350,50 400,100 Q450,150 400,200 Q350,250 300,200 Z" fill="#1e3a8a" opacity="0.3"/>
            <path d="M500,50 Q550,0 600,50 Q650,100 600,150 Q550,200 500,150 Z" fill="#1e3a8a" opacity="0.3"/>
            
            {/* Company locations */}
            <g className="cursor-pointer">
              <circle cx="220" cy="180" r="8" fill="#06b6d4" className="hover:fill-cyan-300 transition-all">
                <title>New York Office</title>
              </circle>
              <circle cx="420" cy="150" r="8" fill="#06b6d4" className="hover:fill-cyan-300 transition-all">
                <title>London Office</title>
              </circle>
              <circle cx="580" cy="200" r="8" fill="#06b6d4" className="hover:fill-cyan-300 transition-all">
                <title>Singapore Office</title>
              </circle>
            </g>
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 md:space-x-4">
            <li className="inline-flex items-center">
              <a href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            {breadcrumb.map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <a href={item.href} className={`ml-2 text-sm font-medium ${index === breadcrumb.length - 1 ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
                    {item.label}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Main Heading */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="relative">
              <span className="relative z-10">{title}</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-cyan-500/30 z-0 -mb-1"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{subtitle}</p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-300">Global Network</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-2 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <span className="text-sm text-gray-300">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-400 mr-2 animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="text-sm text-gray-300">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-1">EXPLORE</span>
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PageHero;
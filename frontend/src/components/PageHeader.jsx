// components/PageHeader.jsx
import React from 'react';

const PageHeader = ({ pageName }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Background gradient animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-2xl animate-float1"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-2xl animate-float2"></div>
          <div className="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-2xl animate-float3"></div>
        </div>
      </div>

      {/* Header content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          {pageName}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fadeIn delay-100">
          Delivering innovative IT solutions for your business success
        </p>
        
        {/* Scroll down button */}
        <a href="#content" className="animate-bounce inline-block mt-12">
          <svg className="w-8 h-8 mx-auto text-[#a3d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default PageHeader;

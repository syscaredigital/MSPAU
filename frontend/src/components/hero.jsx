import React from 'react';

const Hero = () => {
  const services = [
    {
      name: "Helpdesk/Service Desk",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      name: "Managed IT Services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: "CyberSecurity Consultancy",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      name: "Managed Security Services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "SysCare Private Cloud",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      name: "Hosted Solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative hero-content">
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-cyan-400 opacity-20 floating"></div>
      <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full bg-purple-500 opacity-20 floating" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-pink-500 opacity-20 floating" style={{ animationDelay: "4s" }}></div>
      {/* Additional floating elements to balance the design */}
<div className="absolute top-1/2 left-1/4 w-10 h-10 rounded-full bg-blue-500 opacity-20 floating" style={{ animationDelay: "1s" }}></div>
<div className="absolute bottom-20 right-1/3 w-8 h-8 rounded-full bg-green-500 opacity-20 floating" style={{ animationDelay: "3s" }}></div>
<div className="absolute top-1/4 left-1/3 w-5 h-5 rounded-full bg-yellow-500 opacity-20 floating" style={{ animationDelay: "0.5s" }}></div>
<div className="absolute bottom-1/3 left-20 w-7 h-7 rounded-full bg-red-500 opacity-20 floating" style={{ animationDelay: "2.5s" }}></div>
<div className="absolute top-3/4 right-40 w-9 h-9 rounded-full bg-indigo-500 opacity-20 floating" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Cyber Border Container */}
      <div className="cyber-border rounded-xl p-1 mb-16">
        <div className="bg-[#0f172a] rounded-lg p-4 text-center">
          <p className="text-cyan-300 font-medium">TRUSTED BY FORTUNE 500 COMPANIES</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-6">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10 animate__animated animate__fadeInLeft">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            <span className="glow">Secure</span> Your Digital Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We deliver <span className="text-cyan-300 font-medium">enterprise-grade IT solutions</span> with 99.9% uptime, protecting your business from modern cyber threats while optimizing your technology investments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-hover-effect px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold transition-all hover:text-white hover:border-transparent">
              Get Free Consultation
            </button>
            <button className="btn-hover-effect px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-cyan-400/30">
              Explore Services
            </button>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              <img className="w-10 h-10 rounded-full border-2 border-cyan-400" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
              <img className="w-10 h-10 rounded-full border-2 border-cyan-400" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
              <img className="w-10 h-10 rounded-full border-2 border-cyan-400" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Trusted by <span className="text-cyan-300 font-medium">850+</span> businesses</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="ml-2 text-gray-300">4.9/5 (240+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lottie Animation */}
        <div className="lg:w-1/2 animate__animated animate__fadeInRight">
          <div className="relative">
            <lottie-player
              src="https://lottie.host/9e81ee82-f9cb-420e-969c-49f8b95b0881/HjQyYQQv14.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "auto" }}
              loop
              autoplay
            ></lottie-player>
            
            {/* Floating Service Cards */}
            <div className="absolute -bottom-[-80px] -left-[10px] service-card p-4 rounded-lg shadow-lg w-40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">IT Support</span>
              </div>
            </div>
            
            <div className="absolute -top-[30px] -right-[80px] service-card p-4 rounded-lg shadow-lg w-40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Security</span>
              </div>
            </div>
            
            <div className="absolute top-[80px] -right-[10px] service-card p-4 rounded-lg shadow-lg w-40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Projects & Automation</span>
              </div>
            </div>
          
<div className="absolute -bottom-[35px] -left-10 service-card p-4 rounded-lg shadow-lg w-40">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <span className="font-medium text-sm">Solutions</span>
  </div>
</div>


<div className="absolute -top-[210px] right-[180px] service-card p-4 rounded-lg shadow-lg w-40">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    </div>
    <span className="font-medium text-sm">Internet & VOIP</span>
  </div>
</div>

<div className="absolute top-[80px] right-[400px] service-card p-4 rounded-lg shadow-lg w-40">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-pink-500/10 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
    <span className="font-medium text-sm">Digital Services</span>
  </div>
</div>

<div className="absolute top-[150px] right-[200px] service-card p-4 rounded-lg shadow-lg w-40">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </div>
    <span className="font-medium text-sm">IT Training</span>
  </div>
</div>

<div className="absolute -top-[150px] -right-[50px] service-card p-4 rounded-lg shadow-lg w-40">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </div>
    <span className="font-medium text-sm">CRM & ERP Solutions</span>
  </div>
</div>





          </div>
        </div>
      </div>
      
      {/* Horizontal Scrolling Links (Marquee) */}
      <div className="w-full overflow-hidden marquee border-t border-b border-cyan-400/30 py-4 mt-20">
        <div className="marquee-track space-x-10 px-6 text-lg font-semibold text-cyan-300 whitespace-nowrap">
          {services.map((service, index) => (
            <a key={index} href="#" className="hover:text-white transition flex items-center gap-2">
              {service.icon}
              {service.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
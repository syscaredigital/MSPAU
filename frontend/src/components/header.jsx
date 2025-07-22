import React, { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const servicesMenu = [
    {
      title: "Security Solutions",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        "Endpoint Protection",
        "Firewall Management",
        "Vulnerability Assessment",
        "Threat Intelligence"
      ]
    },
    {
      title: "Cloud Services",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      items: [
        "Cloud Migration",
        "Hybrid Cloud Solutions",
        "Cloud Security",
        "Disaster Recovery"
      ]
    },
    {
      title: "Managed IT",
      icon: (
        <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      items: [
        "24/7 Monitoring",
        "Help Desk Support",
        "Network Management",
        "Patch Management"
      ]
    }
  ];

  return (
    <header className="fixed w-full z-50 bg-[#0f172a]/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 blur-md -z-10 transition-all duration-500"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500">
                CyberShield
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Services Mega Menu */}
            <div className="relative group">
              <button 
                className="flex items-center font-medium text-gray-300 hover:text-white transition py-2 px-1 group"
                onClick={() => toggleMenu('services')}
              >
                <span className="relative">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {openMenu === 'services' && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[800px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] backdrop-blur-xl shadow-2xl rounded-xl px-8 py-6 grid grid-cols-3 gap-8 border border-gray-800">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-t-xl"></div>
                  
                  {servicesMenu.map((service, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-4 top-0 h-full w-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <h3 className="text-cyan-400 font-bold mb-4 flex items-center">
                        <div className="p-1.5 mr-2 rounded-md bg-cyan-400/10 group-hover:bg-cyan-400/20 transition">
                          {service.icon}
                        </div>
                        {service.title}
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        {service.items.map((item, i) => (
                          <li key={i}>
                            <a href="#" className="flex items-center hover:text-cyan-400 transition group-hover:translate-x-1 duration-200" style={{ transitionDelay: `${i * 50}ms` }}>
                              <span className="w-1 h-1 mr-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {['Solutions', 'Industries', 'Resources', 'About Us'].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="font-medium text-gray-300 hover:text-white transition relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:inline-block relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative px-6 py-2 font-medium text-white flex items-center">
                Contact Sales
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            
            <button className="lg:hidden text-gray-300 hover:text-white transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
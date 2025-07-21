import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

const HeaderHero = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  // Load particles.js script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#00f5c3' },
          shape: { type: 'circle' },
          opacity: { value: 0.3, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#00f5c3', opacity: 0.2, width: 1 },
          move: { enable: true, speed: 2 }
        },
        interactivity: {
          events: { onhover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        retina_detect: true
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative bg-[#0f172a] text-white font-sans overflow-hidden">

      {/* Particles.js Background */}
      <div id="particles-js" className="absolute w-full h-full top-0 left-0 z-0"></div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">SysCare MSP</h1>
        <nav className="hidden md:flex space-x-10 text-sm font-semibold">
          <div className="relative group">
            <button onClick={() => setShowMegaMenu(!showMegaMenu)} className="hover:text-cyan-400">
              Solutions
            </button>
            {showMegaMenu && (
              <div className="absolute left-0 top-full bg-gray-800 text-white p-6 rounded-xl shadow-xl grid grid-cols-2 gap-8 w-96 mt-4">
                <div>
                  <h4 className="font-bold text-cyan-300 mb-2">Managed IT</h4>
                  <ul className="space-y-1 text-sm">
                    <li><a href="#managed-it" className="hover:text-cyan-400">IT Support</a></li>
                    <li><a href="#network" className="hover:text-cyan-400">Network Monitoring</a></li>
                    <li><a href="#helpdesk" className="hover:text-cyan-400">Helpdesk</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-cyan-300 mb-2">Cybersecurity</h4>
                  <ul className="space-y-1 text-sm">
                    <li><a href="#cybersecurity" className="hover:text-cyan-400">Consultancy</a></li>
                    <li><a href="#vulnerability" className="hover:text-cyan-400">Vulnerability Scanning</a></li>
                    <li><a href="#firewall" className="hover:text-cyan-400">Firewall</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
        <button className="md:hidden">
          <FiMenu size={24} />
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 min-h-screen">
        {/* Lottie Animation */}
        <div className="mb-8">
          <lottie-player
            src="https://lottie.host/9e81ee82-f9cb-420e-969c-49f8b95b0881/HjQyYQQv14.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoPlay
          ></lottie-player>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Managed IT & Cybersecurity Solutions
        </h1>
        <p className="text-gray-300 text-lg max-w-xl">
          Protect, optimize, and manage your digital operations with 24/7 support and cutting-edge IT strategies.
        </p>

        {/* Horizontal Marquee */}
        <div className="w-full overflow-hidden mt-16 py-3 border-t border-b border-cyan-400">
          <div className="whitespace-nowrap animate-marquee text-cyan-300 font-semibold text-sm">
            Managed IT Services &nbsp; • &nbsp; Cybersecurity Consultancy &nbsp; • &nbsp; Cloud Infrastructure &nbsp; • &nbsp; Network Monitoring &nbsp; • &nbsp; Helpdesk Support &nbsp; • &nbsp; Data Backup &nbsp; • &nbsp; Endpoint Protection &nbsp; • &nbsp; Firewall Management
          </div>
        </div>
      </section>

      {/* Marquee Animation */}
      <style>
        {`
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 25s linear infinite;
          }

          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>

    </div>
  );
};

export default HeaderHero;

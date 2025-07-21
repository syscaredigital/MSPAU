import React from 'react';


const HeaderHero = () => {
  return (
    <div className="relative bg-[#0f172a] text-white font-sans overflow-hidden">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto relative z-20">
        <div className="text-xl font-bold tracking-widest text-cyan-400">SysCare MSP</div>
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-300">
          <div className="relative group">
            <a href="#" className="hover:text-cyan-400 transition">Solutions</a>
            <div className="absolute hidden group-hover:flex left-0 top-full bg-[#1e293b] shadow-xl rounded-xl py-6 px-8 w-96 mt-4 text-white">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-cyan-300 font-bold mb-2">Managed Services</p>
                  <ul className="space-y-1">
                    <li><a href="#managed" className="hover:text-cyan-400">IT Support</a></li>
                    <li><a href="#network" className="hover:text-cyan-400">Network Monitoring</a></li>
                    <li><a href="#helpdesk" className="hover:text-cyan-400">24/7 Helpdesk</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-300 font-bold mb-2">Security</p>
                  <ul className="space-y-1">
                    <li><a href="#cyber" className="hover:text-cyan-400">Cybersecurity</a></li>
                    <li><a href="#vuln" className="hover:text-cyan-400">Vulnerability Scanning</a></li>
                    <li><a href="#firewall" className="hover:text-cyan-400">Firewall Mgmt</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg text-sm font-semibold shadow-lg">
          Get Quote
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 py-20 min-h-screen justify-center max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enterprise-Grade IT Solutions & Cybersecurity
        </motion.h1>

        <p className="text-gray-300 mb-10 max-w-2xl text-lg">
          Empower your operations with 24/7 managed services, cloud scalability, and modern cybersecurity strategies tailored for businesses.
        </p>

        <div className="flex space-x-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg">
            Explore Solutions
          </button>
          <button className="bg-white text-[#0f172a] hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg">
            Contact Sales
          </button>
        </div>

        {/* Lottie Animation */}
        <div className="mt-16">
          <lottie-player
            src="https://lottie.host/9e81ee82-f9cb-420e-969c-49f8b95b0881/HjQyYQQv14.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px', margin: 'auto' }}
            loop
            autoplay
          ></lottie-player>
        </div>

        {/* Marquee */}
        <div className="w-full overflow-hidden mt-20 py-3 border-t border-b border-cyan-400">
          <div className="whitespace-nowrap animate-marquee text-cyan-300 font-medium text-sm tracking-wider">
            Managed IT Services &nbsp; • &nbsp; Cybersecurity Solutions &nbsp; • &nbsp; Cloud Infrastructure &nbsp; • &nbsp; Network Operations &nbsp; • &nbsp; Data Backup &nbsp; • &nbsp; 24/7 Monitoring &nbsp; • &nbsp; Helpdesk &nbsp; • &nbsp; Endpoint Security
          </div>
        </div>

        <style>
          {`
            .animate-marquee {
              display: inline-block;
              white-space: nowrap;
              animation: marquee 30s linear infinite;
            }
            @keyframes marquee {
              from { transform: translateX(100%); }
              to { transform: translateX(-100%); }
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default HeaderHero;

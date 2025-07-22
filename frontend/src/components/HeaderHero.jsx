import React, { useState } from 'react';
import { 
  FiHome, 
  FiInfo, 
  FiServer, 
  FiShield, 
  FiMail, 
  FiChevronDown, 
  FiArrowRight,
  FiCloud,
  FiDatabase,
  FiActivity,
  FiHeadphones,
  FiCheckCircle,
  FiPhone,
  FiUploadCloud
} from 'react-icons/fi';
import { motion } from 'framer-motion'; // Added this import

const HeaderHero = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Services that will orbit like planets
  const services = [
    { name: 'Cloud Solutions', icon: <FiCloud className="text-xl" />, color: 'text-blue-400' },
    { name: 'Cybersecurity', icon: <FiShield className="text-xl" />, color: 'text-purple-400' },
    { name: 'Managed IT', icon: <FiServer className="text-xl" />, color: 'text-green-400' },
    { name: 'Data Backup', icon: <FiDatabase className="text-xl" />, color: 'text-amber-400' },
    { name: 'Network Monitoring', icon: <FiActivity className="text-xl" />, color: 'text-red-400' },
    { name: 'Help Desk', icon: <FiHeadphones className="text-xl" />, color: 'text-indigo-400' },
    { name: 'Compliance', icon: <FiCheckCircle className="text-xl" />, color: 'text-emerald-400' },
    { name: 'VoIP', icon: <FiPhone className="text-xl" />, color: 'text-pink-400' },
    { name: 'Cloud Migration', icon: <FiUploadCloud className="text-xl" />, color: 'text-cyan-400' }
  ];

  // Mega menu content
  const megaMenus = {
    about: {
      title: 'About Our Company',
      sections: [
        {
          title: 'Who We Are',
          items: ['Our Story', 'Leadership', 'Culture', 'Careers']
        },
        {
          title: 'Achievements',
          items: ['Awards', 'Certifications', 'Partnerships', 'Client Stories']
        }
      ]
    },
    services: {
      title: 'Our Services',
      sections: [
        {
          title: 'Managed Services',
          items: ['24/7 Monitoring', 'Help Desk', 'Patch Management', 'Cloud Services']
        },
        {
          title: 'Security',
          items: ['Threat Detection', 'Firewall Mgmt', 'Compliance', 'Pen Testing']
        }
      ]
    },
    solutions: {
      title: 'Industry Solutions',
      sections: [
        {
          title: 'By Industry',
          items: ['Healthcare', 'Finance', 'Education', 'Manufacturing']
        },
        {
          title: 'By Need',
          items: ['Digital Transformation', 'Cost Optimization', 'Security', 'Compliance']
        }
      ]
    }
  };

  // Industries for marquee
  const industries = [
    'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 
    'Legal', 'Non-Profit', 'Government', 'Hospitality', 'Technology'
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float-medium"></div>
      </div>

      {/* Header */}
      <header className="relative z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                OrbitMSP
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a href="#" className="px-4 py-2 flex items-center text-gray-300 hover:text-white transition-colors">
                <FiHome className="mr-2" /> Home
              </a>
              
              {['about', 'services', 'solutions'].map((menu) => (
                <div 
                  key={menu}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="px-4 py-2 flex items-center text-gray-300 hover:text-white transition-colors capitalize">
                    <FiChevronDown className="mr-2" /> {menu}
                  </button>
                  
                  {/* Mega Menu */}
                  {activeMenu === menu && (
                    <div className="absolute left-0 w-full bg-gray-800/95 backdrop-blur-lg shadow-2xl border border-gray-700 rounded-b-xl overflow-hidden"
                      style={{ height: '50vh', minWidth: '800px' }}>
                      <div className="p-8 grid grid-cols-2 gap-8 h-full">
                        {megaMenus[menu].sections.map((section, i) => (
                          <div key={i} className="space-y-4">
                            <h3 className="text-lg font-bold text-cyan-400">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((item, j) => (
                                <li key={j}>
                                  <a href="#" className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors">
                                    <span className="w-2 h-2 bg-current rounded-full opacity-70"></span>
                                    <span>{item}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-700 px-8 py-4 bg-gray-900/50">
                        <a href="#" className="text-sm font-medium text-white hover:text-cyan-400 flex items-center space-x-2 transition-colors">
                          <span>View all {menu} options</span>
                          <FiArrowRight />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <a href="#" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-cyan-500/20 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8 mb-16 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-sm font-medium">Trusted by 200+ businesses</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Orbit
            </span>{' '}
            Your IT Infrastructure
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl">
            We provide comprehensive managed IT services that keep your business running smoothly 24/7 with our planetary support system.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center">
              Explore Services <FiArrowRight className="ml-2" />
            </button>
            <button className="bg-transparent border-2 border-gray-600 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-white hover:text-gray-100 transition-all">
              Request Demo
            </button>
          </div>

          {/* Mini rotating services indicator */}
          <div className="relative w-64 h-64 lg:hidden mt-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg flex items-center justify-center">
                <FiServer className="text-white text-2xl" />
              </div>
            </div>
            {services.slice(0, 4).map((service, i) => (
              <div 
                key={i}
                className={`absolute ${service.color} animate-orbit-mini`}
                style={{
                  '--orbit-index': i,
                  '--total-orbits': 4,
                  width: '40px',
                  height: '40px',
                  animationDuration: `${10 + i * 2}s`
                }}
              >
                <div className="bg-gray-800 border border-gray-700 rounded-full w-full h-full flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Solar System */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-xl aspect-square">
            {/* Sun - Core Service */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg flex items-center justify-center animate-pulse-slow">
                <FiServer className="text-white text-4xl" />
              </div>
            </div>

            {/* Orbiting Services */}
            {services.map((service, i) => (
              <div 
                key={i}
                className={`absolute ${service.color} animate-orbit`}
                style={{
                  '--orbit-index': i,
                  '--total-orbits': services.length,
                  width: '60px',
                  height: '60px',
                  animationDuration: `${20 + i * 2}s`
                }}
              >
                <div className="bg-gray-800 border border-gray-700 rounded-full w-full h-full flex flex-col items-center justify-center shadow-md p-2 text-center text-xs">
                  {service.icon}
                  <span className="mt-1">{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Marquee */}
        <div className="absolute bottom-10 left-0 right-0 overflow-hidden py-4 border-t border-b border-gray-700">
          <div className="whitespace-nowrap animate-marquee text-gray-400 font-medium text-sm tracking-wider">
            {industries.map((industry, i) => (
              <React.Fragment key={i}>
                <span className="mx-8">{industry}</span>
                {i < industries.length - 1 && <span className="text-cyan-400">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(calc(150px + var(--orbit-index) * 30px)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(calc(150px + var(--orbit-index) * 30px)) rotate(360deg);
          }
        }
        @keyframes orbit-mini {
          0% {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(80px) rotate(360deg);
          }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-orbit {
          animation: orbit linear infinite;
          top: 50%;
          left: 50%;
          margin-top: -30px;
          margin-left: -30px;
        }
        .animate-orbit-mini {
          animation: orbit-mini linear infinite;
          top: 50%;
          left: 50%;
          margin-top: -20px;
          margin-left: -20px;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeaderHero;
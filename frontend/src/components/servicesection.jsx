import React from 'react';

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
    },
    {
      id: 7,
      title: "Threat Intelligence",
      description: "Proactive monitoring of emerging cybersecurity threats",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      category: "security",
      color: "cyan"
    },
    {
      id: 8,
      title: "Cloud Migration",
      description: "Seamless transition to cloud infrastructure",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
      category: "cloud",
      color: "purple"
    },
    {
      id: 9,
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify vulnerabilities",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      category: "security",
      color: "pink"
    },
    {
      id: 10,
      title: "IT Consulting",
      description: "Strategic technology planning and implementation",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      category: "consulting",
      color: "cyan"
    },
    {
      id: 11,
      title: "Virtual CISO",
      description: "On-demand Chief Information Security Officer services",
      icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      category: "consulting",
      color: "purple"
    },
    {
      id: 12,
      title: "Email Security",
      description: "Protection against phishing and malware attacks",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      category: "security",
      color: "pink"
    },
    {
      id: 13,
      title: "IoT Security",
      description: "Protection for connected devices and smart systems",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      category: "security",
      color: "cyan"
    },
    {
      id: 14,
      title: "SOC-as-a-Service",
      description: "24/7 Security Operations Center monitoring",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      category: "managed-services",
      color: "purple"
    },
    {
      id: 15,
      title: "DevSecOps",
      description: "Integrate security throughout your development lifecycle",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      category: "consulting",
      color: "pink"
    }
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "security", name: "Security" },
    { id: "managed-services", name: "Managed Services" },
    { id: "cloud", name: "Cloud" },
    { id: "consulting", name: "Consulting" }
  ];

  const [activeFilter, setActiveFilter] = React.useState("all");
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-[100px] animate-float1"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full filter blur-[80px] animate-float3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-6">
            <span className="h-2 w-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-400">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Security Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            We offer end-to-end cybersecurity services tailored to protect your business at every level of your digital infrastructure.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${activeFilter === category.id 
                ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-400/20' 
                : 'bg-[#1e293b] text-gray-300 hover:bg-[#1e293b]/80 hover:text-white'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div 
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-[#1e293b]/50 rounded-2xl border ${service.color === 'cyan' ? 'border-cyan-400/20 hover:border-cyan-400/50' : service.color === 'purple' ? 'border-purple-400/20 hover:border-purple-400/50' : 'border-pink-400/20 hover:border-pink-400/50'} transition-all duration-500 hover:shadow-xl ${service.color === 'cyan' ? 'hover:shadow-cyan-400/10' : service.color === 'purple' ? 'hover:shadow-purple-400/10' : 'hover:shadow-pink-400/10'} overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'cyan' ? 'from-cyan-400/5 to-purple-500/5' : service.color === 'purple' ? 'from-purple-400/5 to-pink-500/5' : 'from-pink-400/5 to-cyan-400/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 mb-6 flex items-center justify-center ${service.color === 'cyan' ? 'bg-cyan-400/10 border-cyan-400/20 group-hover:bg-cyan-400/20' : service.color === 'purple' ? 'bg-purple-400/10 border-purple-400/20 group-hover:bg-purple-400/20' : 'bg-pink-400/10 border-pink-400/20 group-hover:bg-pink-400/20'} rounded-lg border transition`}>
                  <svg 
                    className={`w-6 h-6 ${service.color === 'cyan' ? 'text-cyan-400' : service.color === 'purple' ? 'text-purple-400' : 'text-pink-400'} group-hover:scale-110 transition`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                  </svg>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                
                {/* Learn more link */}
                <div className={`flex items-center ${service.color === 'cyan' ? 'text-cyan-400' : service.color === 'purple' ? 'text-purple-400' : 'text-pink-400'} group-hover:translate-x-2 transition-transform`}>
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
                
                {/* Floating element */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 ${service.color === 'cyan' ? 'bg-cyan-400/10 border-cyan-400/20' : service.color === 'purple' ? 'bg-purple-400/10 border-purple-400/20' : 'bg-pink-400/10 border-pink-400/20'} rounded-full border backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
              
              {/* Hover effect overlay */}
              {hoveredCard === service.id && (
                <div className={`absolute inset-0 ${service.color === 'cyan' ? 'bg-cyan-400/5' : service.color === 'purple' ? 'bg-purple-400/5' : 'bg-pink-400/5'} pointer-events-none`}></div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA at bottom */}
        <div className="mt-20 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <a href="#" className="relative px-8 py-4 bg-[#0f172a] rounded-lg font-bold text-white hover:text-white transition flex items-center mx-auto">
              <span>View All Services</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
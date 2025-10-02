// components/Navigation.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FiChevronDown, 
  FiX, 
  FiMenu, 
  FiArrowRight,
  FiCloud,
  FiShield,
  FiHeadphones,
  FiSettings,
  FiWifi,
  FiBookOpen,
  FiServer,
  FiVideo,
  FiCpu,
  FiLock,
  FiTool,
  FiAward,
  FiPenTool,
  FiTrendingUp,
  FiBriefcase,
  FiMonitor,
  FiHexagon,
  FiZap,
  FiGlobe,
  FiMessageSquare,
  FiDatabase
} from "react-icons/fi";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesHover, setServicesHover] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  // Separate states for mobile dropdowns
  const [activeMobileMainCategory, setActiveMobileMainCategory] = useState(null);
  const [activeMobileSubCategory, setActiveMobileSubCategory] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setActiveMobileMainCategory(null);
      setActiveMobileSubCategory(null);
    }
  };

  const toggleMobileMainCategory = (categoryId) => {
    setActiveMobileMainCategory(
      activeMobileMainCategory === categoryId ? null : categoryId
    );
    setActiveMobileSubCategory(null);
  };

  const toggleMobileSubCategory = (categoryId) => {
    setActiveMobileSubCategory(
      activeMobileSubCategory === categoryId ? null : categoryId
    );
  };

  // Handle mouse enter with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesHover(true);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesHover(false);
      setActiveCategory(null);
    }, 300);
  };

  // Handle category hover
  const handleCategoryHover = (categoryId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveCategory(categoryId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setServicesHover(false);
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Modern services data structure
  const servicesData = {
    "cloud-infrastructure": {
      title: "Cloud & Infrastructure",
      icon: <FiCloud className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      description: "Scalable cloud solutions and robust infrastructure",
      services: [
        { name: "Private Cloud", url: "/SysCare-Private-Cloud", icon: <FiServer />, featured: true },
        { name: "Hosted Services", url: "/Hosted-Services", icon: <FiDatabase /> },
        { name: "Cloud Migration", url: "/cloud-migration", icon: <FiArrowRight /> },
        { name: "Disaster Recovery", url: "/disaster-recovery", icon: <FiShield /> }
      ]
    },
    "security-cyber": {
      title: "Security & Cybersecurity",
      icon: <FiShield className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      description: "Protect your business from digital threats",
      services: [
        { name: "Cybersecurity Consultancy", url: "/CyberSecurityConsultancyServices", icon: <FiLock />, featured: true },
        { name: "Managed Security", url: "/ManagedSecurityServices", icon: <FiShield /> },
        { name: "Security Audit", url: "/security-audit", icon: <FiTool /> },
        { name: "Threat Monitoring", url: "/threat-monitoring", icon: <FiMonitor /> }
      ]
    },
    "it-support": {
      title: "IT Support & Managed Services",
      icon: <FiHeadphones className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      description: "24/7 expert IT support and management",
      services: [
        { name: "Service Desk", url: "/Service-Desk", icon: <FiHeadphones />, featured: true },
        { name: "Managed IT Services", url: "/Managed-IT-Services", icon: <FiSettings /> },
        { name: "Remote Support", url: "/remote-support", icon: <FiMonitor /> },
        { name: "On-site Support", url: "/onsite-support", icon: <FiTool /> }
      ]
    },
    "projects-automation": {
      title: "Projects & Automation",
      icon: <FiCpu className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      description: "Streamline operations with smart automation",
      services: [
        { name: "IT Infrastructure Projects", url: "/ITInfraProjects", icon: <FiSettings />, featured: true },
        { name: "Office Automation", url: "/DevelopmentAutomation", icon: <FiZap /> },
        { name: "Process Optimization", url: "/process-optimization", icon: <FiTrendingUp /> },
        { name: "Custom Solutions", url: "/custom-solutions", icon: <FiHexagon /> }
      ]
    },
    "connectivity": {
      title: "Connectivity & Communication",
      icon: <FiWifi className="text-2xl" />,
      color: "from-indigo-500 to-blue-500",
      description: "Seamless connectivity and communication solutions",
      services: [
        { name: "Business Connectivity", url: "/Connectivity", icon: <FiWifi />, featured: true },
        { name: "VoIP & Video", url: "/VoiceVideo", icon: <FiVideo /> },
        { name: "Network Setup", url: "/network-setup", icon: <FiGlobe /> },
        { name: "Unified Communications", url: "/unified-comms", icon: <FiMessageSquare /> }
      ]
    },
    "digital-solutions": {
      title: "Digital Solutions",
      icon: <FiPenTool className="text-2xl" />,
      color: "from-teal-500 to-blue-500",
      description: "Transform your digital presence",
      services: [
        { name: "Web Design & Development", url: "/DesignDev", icon: <FiPenTool />, featured: true },
        { name: "Digital Marketing", url: "/DigitalMarketing", icon: <FiTrendingUp /> },
        { name: "CRM & ERP Solutions", url: "/crm-erp", icon: <FiBriefcase /> },
        { name: "E-commerce Solutions", url: "/ecommerce", icon: <FiMonitor /> }
      ]
    }
  };

  const serviceCategories = Object.entries(servicesData);

  return (
    <nav
      className={`bg-[#103d5d] shadow-2xl sticky top-0 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/logos/White-Sys.svg"
                alt="SysCare Logo"
                className="hidden md:block h-20 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/logos/White-Sys.svg"
                alt="SysCare Logo"
                className="block md:hidden h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:transform hover:-translate-y-0.5"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:transform hover:-translate-y-0.5"
            >
              About Us
            </Link>

            {/* Services with Modern Mega Menu */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={menuRef}
            >
              <button
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] flex items-center h-full group"
              >
                <span className="flex items-center">
                  Services
                  <FiChevronDown
                    className={`ml-2 transition-transform duration-300 ${
                      servicesHover ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {servicesHover && (
                <div 
                  className="absolute left-0 top-full w-[800px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 overflow-hidden z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Left Column - Categories */}
                      <div className="col-span-1 space-y-2">
                        {serviceCategories.map(([key, category]) => (
                          <button
                            key={key}
                            onMouseEnter={() => handleCategoryHover(key)}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                              activeCategory === key 
                                ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
                                : "bg-gray-50/80 hover:bg-white text-gray-700 hover:shadow-lg"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${
                                activeCategory === key ? "bg-white/20" : "bg-white shadow-sm"
                              }`}>
                                {category.icon}
                              </div>
                              <div>
                                <h3 className="font-semibold text-sm">{category.title}</h3>
                                <p className="text-xs opacity-70 mt-1">{category.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Right Column - Services */}
                      <div className="col-span-2">
                        {activeCategory ? (
                          <div className="animate-fadeIn">
                            <div className="flex items-center space-x-3 mb-6">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${servicesData[activeCategory].color} text-white`}>
                                {servicesData[activeCategory].icon}
                              </div>
                              <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                  {servicesData[activeCategory].title}
                                </h2>
                                <p className="text-gray-600 text-sm">
                                  {servicesData[activeCategory].description}
                                </p>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              {servicesData[activeCategory].services.map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.url}
                                  className="group block p-4 rounded-lg border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                  onClick={() => setServicesHover(false)}
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`p-2 rounded-lg ${
                                      service.featured 
                                        ? `bg-gradient-to-r ${servicesData[activeCategory].color} text-white`
                                        : "bg-gray-100 text-gray-600"
                                    } group-hover:scale-110 transition-transform duration-300`}>
                                      {service.icon}
                                    </div>
                                    <span className={`font-medium ${
                                      service.featured ? "text-gray-800" : "text-gray-600"
                                    } group-hover:text-gray-900`}>
                                      {service.name}
                                    </span>
                                  </div>
                                  {service.featured && (
                                    <div className="mt-2">
                                      <span className="inline-block px-2 py-1 text-xs bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full">
                                        Popular
                                      </span>
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center text-gray-500 py-12">
                            <div className="text-center">
                              <FiHexagon className="text-4xl mx-auto mb-3 opacity-50" />
                              <p className="text-sm">Hover over a category to view services</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-200/50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-800">Need a custom solution?</h4>
                          <p className="text-sm text-gray-600">We tailor our services to your unique needs</p>
                        </div>
                        <Link
                          to="/get-quote"
                          className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                          onClick={() => setServicesHover(false)}
                        >
                          <span>Get Custom Quote</span>
                          <FiArrowRight className="transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact-Us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-gradient-to-r from-white to-gray-100 hover:from-[#103d5d] hover:to-[#245684] text-[#1a3d6b] hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ml-4 transform hover:scale-105 hover:shadow-lg border border-transparent hover:border-white/20"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#a3d4ff] focus:outline-none transition-all duration-300 hover:scale-110"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#0d3452] to-[#08243a] backdrop-blur-xl transition-all duration-500 ease-in-out">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/"
              className="text-white hover:text-[#a3d4ff] block px-4 py-3 font-medium transition-all duration-300 hover:translate-x-2 rounded-lg hover:bg-white/5"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] block px-4 py-3 font-medium transition-all duration-300 hover:translate-x-2 rounded-lg hover:bg-white/5"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>

            {/* Mobile Services Menu */}
            <div className="relative">
              <div className="flex flex-col">
                <Link
                  to="/syscare-services"
                  className="text-white hover:text-[#a3d4ff] px-4 py-3 font-medium transition-all duration-300 rounded-lg hover:bg-white/5"
                  onClick={toggleMobileMenu}
                >
                  Services
                </Link>
                <button
                  onClick={() => toggleMobileMainCategory("services")}
                  className="text-white hover:text-[#a3d4ff] w-full text-left px-4 py-3 font-medium transition-all duration-300 flex justify-between items-center rounded-lg hover:bg-white/5"
                >
                  <span className="flex items-center">
                    Browse Services
                  </span>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      activeMobileMainCategory === "services"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              </div>

              {activeMobileMainCategory === "services" && (
                <div className="pl-4 mt-2 space-y-3">
                  {serviceCategories.map(([key, category]) => (
                    <div key={key} className="border-l-2 border-white/10 pl-4">
                      <button
                        onClick={() => toggleMobileSubCategory(key)}
                        className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-3 font-medium transition-all duration-300 flex justify-between items-center rounded-lg hover:bg-white/5"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                            {category.icon}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold">{category.title}</div>
                            <div className="text-xs opacity-70">{category.description}</div>
                          </div>
                        </div>
                        <FiChevronDown
                          className={`transition-transform duration-300 ${
                            activeMobileSubCategory === key
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeMobileSubCategory === key && (
                        <div className="pl-2 space-y-2 mt-2">
                          {category.services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.url}
                              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 opacity-80 flex items-center space-x-3 rounded-lg hover:bg-white/5"
                              onClick={toggleMobileMenu}
                            >
                              <div className="p-1.5 rounded-md bg-white/10">
                                {service.icon}
                              </div>
                              <span>{service.name}</span>
                              {service.featured && (
                                <span className="px-1.5 py-0.5 text-xs bg-yellow-500 text-white rounded-full ml-auto">
                                  Popular
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact-Us"
              className="text-white hover:text-[#a3d4ff] block px-4 py-3 font-medium transition-all duration-300 hover:translate-x-2 rounded-lg hover:bg-white/5"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-gradient-to-r from-[#245684] to-[#1a3d6b] hover:from-[#1a3d6b] hover:to-[#103d5d] text-white block px-6 py-3 rounded-xl font-semibold transition-all duration-300 mx-2 my-2 text-center hover:scale-105 hover:shadow-lg"
              onClick={toggleMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
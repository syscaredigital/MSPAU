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
    }, 200);
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
      icon: <FiCloud className="text-xl" />,
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
      icon: <FiShield className="text-xl" />,
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
      icon: <FiHeadphones className="text-xl" />,
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
      icon: <FiCpu className="text-xl" />,
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
      icon: <FiWifi className="text-xl" />,
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
      icon: <FiPenTool className="text-xl" />,
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
                className="hidden md:block h-16 w-auto object-contain transition-transform duration-300"
              />
              <img
                src="/logos/White-Sys.svg"
                alt="SysCare Logo"
                className="block md:hidden h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
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
                  className="absolute left-0 top-full w-[780px] bg-white/98 backdrop-blur-lg shadow-2xl rounded-xl border border-gray-200 overflow-hidden z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-5">
                    <div className="grid grid-cols-3 gap-5">
                      {/* Left Column - Categories */}
                      <div className="col-span-1 space-y-1">
                        {serviceCategories.map(([key, category]) => (
                          <button
                            key={key}
                            onMouseEnter={() => handleCategoryHover(key)}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                              activeCategory === key 
                                ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                                : "bg-gray-50 hover:bg-white text-gray-700 hover:shadow-sm"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${
                                activeCategory === key ? "bg-white/20" : "bg-white shadow-xs"
                              }`}>
                                {category.icon}
                              </div>
                              <div className="text-left">
                                <h3 className="font-semibold text-sm leading-tight">{category.title}</h3>
                                <p className="text-xs text-opacity-80 mt-0.5 leading-relaxed">
                                  {activeCategory === key ? category.description : category.description.split(' ').slice(0, 4).join(' ') + '...'}
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Right Column - Services */}
                      <div className="col-span-2">
                        {activeCategory ? (
                          <div className="animate-fadeIn">
                            <div className="flex items-center space-x-3 mb-4">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${servicesData[activeCategory].color} text-white`}>
                                {servicesData[activeCategory].icon}
                              </div>
                              <div>
                                <h2 className="text-lg font-bold text-gray-800">
                                  {servicesData[activeCategory].title}
                                </h2>
                                <p className="text-gray-600 text-sm">
                                  {servicesData[activeCategory].description}
                                </p>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              {servicesData[activeCategory].services.map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.url}
                                  className="group block p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200"
                                  onClick={() => setServicesHover(false)}
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`p-1.5 rounded-md ${
                                      service.featured 
                                        ? `bg-gradient-to-r ${servicesData[activeCategory].color} text-white`
                                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                                    } transition-colors duration-200`}>
                                      {service.icon}
                                    </div>
                                    <span className={`font-medium text-sm ${
                                      service.featured ? "text-gray-800" : "text-gray-600"
                                    } group-hover:text-gray-900`}>
                                      {service.name}
                                    </span>
                                  </div>
                                  {service.featured && (
                                    <div className="mt-1">
                                      <span className="inline-block px-1.5 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                                        Popular
                                      </span>
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center text-gray-400 py-16">
                            <div className="text-center">
                              <FiHexagon className="text-3xl mx-auto mb-2 opacity-40" />
                              <p className="text-sm">Select a category to view services</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">Need a custom solution?</h4>
                          <p className="text-xs text-gray-600">We tailor services to your needs</p>
                        </div>
                        <Link
                          to="/get-quote"
                          className="bg-[#103d5d] hover:bg-[#0d2e4a] text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md flex items-center space-x-2 text-sm"
                          onClick={() => setServicesHover(false)}
                        >
                          <span>Get Quote</span>
                          <FiArrowRight className="text-xs" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact-Us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-white hover:bg-[#103d5d] text-[#1a3d6b] hover:text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ml-2 hover:shadow-lg border border-white"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#a3d4ff] focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d3452] border-t border-[#1a4a6e] transition-all duration-300 ease-in-out">
          <div className="px-3 pt-3 pb-4 space-y-1">
            <Link
              to="/"
              className="text-white hover:text-[#a3d4ff] block px-3 py-2.5 font-medium transition-all duration-200 rounded-lg hover:bg-white/5"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] block px-3 py-2.5 font-medium transition-all duration-200 rounded-lg hover:bg-white/5"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>

            {/* Mobile Services Menu */}
            <div className="relative">
              <div className="flex flex-col">
                <button
                  onClick={() => toggleMobileMainCategory("services")}
                  className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2.5 font-medium transition-all duration-200 flex justify-between items-center rounded-lg hover:bg-white/5"
                >
                  <span className="flex items-center">
                    Services
                  </span>
                  <FiChevronDown
                    className={`transition-transform duration-200 ${
                      activeMobileMainCategory === "services"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              </div>

              {activeMobileMainCategory === "services" && (
                <div className="pl-3 mt-1 space-y-1">
                  {serviceCategories.map(([key, category]) => (
                    <div key={key} className="border-l border-[#1a4a6e] pl-3">
                      <button
                        onClick={() => toggleMobileSubCategory(key)}
                        className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2 font-medium transition-all duration-200 flex justify-between items-center rounded-lg hover:bg-white/5"
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`p-1.5 rounded-md bg-gradient-to-r ${category.color}`}>
                            {category.icon}
                          </div>
                          <span className="font-medium text-sm">{category.title}</span>
                        </div>
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            activeMobileSubCategory === key
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeMobileSubCategory === key && (
                        <div className="pl-2 space-y-1 mt-1">
                          {category.services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.url}
                              className="text-gray-200 hover:text-white block px-3 py-1.5 text-sm transition-all duration-200 flex items-center space-x-2 rounded-lg hover:bg-white/5"
                              onClick={toggleMobileMenu}
                            >
                              <div className="p-1 rounded bg-white/10">
                                {service.icon}
                              </div>
                              <span>{service.name}</span>
                              {service.featured && (
                                <span className="px-1 py-0.5 text-xs bg-yellow-500 text-white rounded ml-auto">
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
              className="text-white hover:text-[#a3d4ff] block px-3 py-2.5 font-medium transition-all duration-200 rounded-lg hover:bg-white/5"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-[#245684] hover:bg-[#1a3d6b] text-white block px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 mx-2 mt-2 text-center"
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
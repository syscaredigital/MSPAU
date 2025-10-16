// components/Navigation.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FiChevronDown, 
  FiX, 
  FiMenu, 
  FiArrowRightCircle,
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
  FiArrowLeft,
  FiPhone,
  FiMail,
  FiClock
} from "react-icons/fi";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesHover, setServicesHover] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);
  
  // Mobile mega menu states
  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);

  const megaMenuRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const mobileMegaMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMobileMegaMenuOpen(false);
      setActiveMobileCategory(null);
    }
  };

  const openMobileMegaMenu = () => {
    setMobileMegaMenuOpen(true);
    setMobileMenuOpen(false); // Close main mobile menu when opening mega menu
  };

  const closeMobileMegaMenu = () => {
    setMobileMegaMenuOpen(false);
    setActiveMobileCategory(null);
  };

  const toggleMobileCategory = (categoryId) => {
    setActiveMobileCategory(
      activeMobileCategory === categoryId ? null : categoryId
    );
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop mega menu
      if (
        megaMenuRef.current && 
        !megaMenuRef.current.contains(event.target) &&
        servicesButtonRef.current && 
        !servicesButtonRef.current.contains(event.target)
      ) {
        setServicesHover(false);
        setMegaMenuHover(false);
      }

      // Mobile mega menu
      if (
        mobileMegaMenuRef.current && 
        !mobileMegaMenuRef.current.contains(event.target) &&
        !event.target.closest('[data-mobile-services-button]')
      ) {
        setMobileMegaMenuOpen(false);
        setActiveMobileCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Enhanced scroll handling for fixed navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setServicesHover(false);
        setMegaMenuHover(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setMobileMegaMenuOpen(false);
      setActiveMobileCategory(null);
    };

    // You might want to use a router event listener here
    // For now, we'll use a simple implementation
    handleRouteChange();
  }, []);

  // Prevent body scroll when mobile menus are open
  useEffect(() => {
    if (mobileMenuOpen || mobileMegaMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, mobileMegaMenuOpen]);

  // Services menu data
  const servicesData = [
    {
      id: "cloud",
      name: "Cloud",
      icon: <FiCloud className="text-xl" />,
      subCategories: [
        { name: "Cloud Solutions", url: "/SysCare-Private-Cloud", icon: <FiCloud className="text-lg" /> },
        { name: "Hosted Solutions", url: "/Hosted-Services", icon: <FiServer className="text-lg" /> },
      ],
    },
    {
      id: "security",
      name: "IT Security",
      icon: <FiShield className="text-xl" />,
      subCategories: [
        { name: "CyberSecurity Consultancy", url: "/CyberSecurityConsultancyServices", icon: <FiShield className="text-lg" /> },
        { name: "Managed Security", url: "/ManagedSecurityServices", icon: <FiLock className="text-lg" /> },
      ],
    },
    {
      id: "support",
      name: "IT Support",
      icon: <FiHeadphones className="text-xl" />,
      subCategories: [
        { name: "Service Desk", url: "/Service-Desk", icon: <FiHeadphones className="text-lg" /> },
        { name: "Managed IT", url: "/Managed-IT-Services", icon: <FiTool className="text-lg" /> },
      ],
    },
    {
      id: "projects",
      name: "Projects & Automation",
      icon: <FiSettings className="text-xl" />,
      subCategories: [
        { name: "IT Infra Projects", url: "/ITInfraProjects", icon: <FiSettings className="text-lg" /> },
        { name: "Office IT Automation", url: "/DevelopmentAutomation", icon: <FiCpu className="text-lg" /> },
      ],
    },
    {
      id: "connectivity",
      name: "Internet & VOIP",
      icon: <FiWifi className="text-xl" />,
      subCategories: [
        { name: "Connectivity", url: "/Connectivity", icon: <FiWifi className="text-lg" /> },
        { name: "VoIP & Video", url: "/VoiceVideo", icon: <FiVideo className="text-lg" /> },
      ],
    },
    {
      id: "training",
      name: "IT Training",
      icon: <FiBookOpen className="text-xl" />,
      subCategories: [
        { name: "Security Training", url: "/Security", icon: <FiAward className="text-lg" /> },
        { name: "Cloud Training", url: "/Cloud", icon: <FiBookOpen className="text-lg" /> },
      ],
    },
    {
      id: "digital",
      name: "Digital Services",
      icon: <FiPenTool className="text-xl" />,
      subCategories: [
        { name: "Web Design & Dev", url: "/DesignDev", icon: <FiPenTool className="text-lg" /> },
        { name: "Digital Marketing", url: "/DigitalMarketing", icon: <FiTrendingUp className="text-lg" /> },
      ],
    },
    {
      id: "crm",
      name: "CRM & ERP Solutions",
      icon: <FiBriefcase className="text-xl" />,
      subCategories: [
        { name: "Small Business", url: "/SmallBusiness", icon: <FiBriefcase className="text-lg" /> },
        { name: "Enterprise", url: "/Enterprise", icon: <FiMonitor className="text-lg" /> },
      ],
    },
  ];

  // Responsive Desktop Mega Menu Component
  const DesktopMegaMenu = () => (
    <div 
      ref={megaMenuRef}
      className={`absolute left-1/2 transform -translate-x-1/2 top-full w-[95vw] max-w-[900px] bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl z-50 border border-gray-200 transition-all duration-300 ${
        megaMenuHover ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
      }`}
      onMouseEnter={() => setMegaMenuHover(true)}
      onMouseLeave={() => setMegaMenuHover(false)}
    >
      {/* Mega Menu Header */}
      <div className="bg-[#245684] rounded-t-2xl px-4 sm:px-6 py-4">
        <h3 className="text-lg font-bold text-white">Our Services</h3>
      </div>
      
      <div className="border-b border-gray-200 mx-4 sm:mx-6"></div>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 py-4 sm:py-6">
        {[0, 1, 2, 3].map((colIndex) => (
          <div key={colIndex} className="col-span-1">
            {servicesData.slice(colIndex * 2, colIndex * 2 + 2).map((category) => (
              <div key={category.id} className="mb-6 sm:mb-8 last:mb-0 group">
                <div className="flex items-center mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#a3d4ff] to-[#245684] rounded-full mr-3 group-hover:w-2 transition-all duration-300"></div>
                  <h3 className="text-sm sm:text-md font-bold text-[#103d5d] group-hover:text-[#245684] transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  {category.subCategories.map((subCategory) => (
                    <li key={subCategory.name}>
                      <Link
                        to={subCategory.url}
                        className="text-xs sm:text-sm text-gray-600 hover:text-[#245684] block py-1 sm:py-2 px-2 sm:px-3 transition-all duration-300 flex items-center rounded-lg hover:bg-blue-50 group/item"
                        onClick={() => {
                          setServicesHover(false);
                          setMegaMenuHover(false);
                        }}
                      >
                        <span className="text-[#245684] group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0">
                          {subCategory.icon}
                        </span>
                        <span className="ml-2 truncate">{subCategory.name}</span>
                        <FiArrowRightCircle className="ml-auto opacity-0 group-hover/item:opacity-100 text-[#245684] transition-all duration-300 transform -translate-x-1 group-hover/item:translate-x-0 flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Mega Menu Footer */}
      <div className="bg-[#245684] rounded-b-2xl px-4 sm:px-6 py-4">
        <Link
          to="/syscare-services"
          className="inline-flex items-center text-[#103d5d] hover:text-[#245684] font-medium transition-all duration-300 group bg-white hover:bg-gray-100 px-3 sm:px-4 py-2 rounded-lg shadow hover:shadow-md border border-[#103d5d] hover:border-[#245684] text-sm sm:text-base"
          onClick={() => {
            setServicesHover(false);
            setMegaMenuHover(false);
          }}
        >
          <span>View All Services</span>
          <FiArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );

  // Mobile Mega Menu Component
  const MobileMegaMenu = () => (
    <div 
      ref={mobileMegaMenuRef}
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        mobileMegaMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="bg-[#245684] text-white p-4 shadow-lg border-b border-[#1a3d6b] sticky top-0">
        <div className="flex items-center justify-between">
          <button
            onClick={closeMobileMegaMenu}
            className="flex items-center text-white hover:text-[#a3d4ff] transition-colors duration-300 bg-white/10 rounded-lg px-3 py-2 border border-white/20"
            aria-label="Close services menu"
          >
            <FiArrowLeft className="mr-2" size={20} />
            <span className="text-sm font-medium">Back</span>
          </button>
          <h2 className="text-lg font-bold">Our Services</h2>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-80px)] overflow-y-auto p-4">
        {/* Categories Grid */}
        {!activeMobileCategory ? (
          <div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              {servicesData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleMobileCategory(category.id)}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-300 rounded-xl p-4 text-left transition-all duration-300 hover:shadow-lg hover:border-[#245684] active:scale-95 group touch-manipulation"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-[#245684] mb-2 p-2 bg-blue-50 rounded-lg border border-blue-100 group-hover:border-[#245684] group-hover:bg-blue-100 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-[#245684] transition-colors duration-300 line-clamp-2">
                      {category.name}
                    </span>
                    <div className="flex items-center justify-center mt-2 text-xs text-gray-500 group-hover:text-[#245684] transition-colors duration-300">
                      <span>View Services</span>
                      <FiChevronDown className="ml-1" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-6">
              <Link
                to="/syscare-services"
                className="block w-full bg-[#245684] text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#1a3d6b] active:scale-95 border border-[#1a3d6b] text-sm"
                onClick={() => {
                  setMobileMegaMenuOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                View All Services
              </Link>
            </div>
          </div>
        ) : (
          /* Subcategories List */
          <div>
            <button
              onClick={() => setActiveMobileCategory(null)}
              className="flex items-center text-[#245684] hover:text-[#1a3d6b] mb-4 transition-colors duration-300 font-semibold border border-gray-300 hover:border-[#245684] rounded-lg px-4 py-3 w-full text-left bg-gray-50"
            >
              <FiArrowLeft className="mr-2" />
              Back to Categories
            </button>

            <div className="space-y-3">
              {servicesData
                .find(cat => cat.id === activeMobileCategory)
                ?.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory.name}
                    to={subCategory.url}
                    className="flex items-center p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-blue-50 active:scale-95 border border-gray-300 hover:border-[#245684] group touch-manipulation"
                    onClick={() => {
                      setMobileMegaMenuOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <div className="text-[#245684] mr-3 p-2 bg-white rounded-lg shadow-sm border border-gray-200 group-hover:border-[#245684] group-hover:bg-blue-100 transition-colors duration-300 flex-shrink-0">
                      {subCategory.icon}
                    </div>
                    <span className="font-medium text-gray-800 flex-1 group-hover:text-[#245684] transition-colors duration-300 text-sm">
                      {subCategory.name}
                    </span>
                    <FiArrowRightCircle className="text-[#245684] ml-2 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Fixed Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white to-white text-[#103d5d] text-sm z-50 border-b border-[#245684]/30 h-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Left side - Contact Info */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <FiPhone className="text-[#103d5d] text-xs flex-shrink-0" />
                <a 
                  href="tel:1300697972" 
                  className="hover:text-[#103d5d] transition-colors duration-300 text-xs sm:text-sm font-medium whitespace-nowrap"
                >
                  1300 69 79 72
                </a>
              </div>
              <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
                <FiMail className="text-[#103d5d] text-xs flex-shrink-0" />
                <a 
                  href="mailto:info@syscare.com.au" 
                  className="hover:text-[#103d5d] transition-colors duration-300 text-xs sm:text-sm font-medium whitespace-nowrap"
                >
                  info@syscare.com.au
                </a>
              </div>
            </div>

            {/* Right side - Working Hours */}
            <div className="hidden lg:flex items-center space-x-2">
              <FiClock className="text-[#103d5d] text-xs flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Mon - Fri: 8:00 AM - 5:00 PM</span>
            </div>

            {/* Mobile - Only show phone */}
            <div className="lg:hidden flex items-center space-x-2">
              <FiClock className="text-[#103d5d] text-xs flex-shrink-0" />
              <span className="text-xs font-medium hidden xs:inline">8AM-5PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Main Navigation */}
      <nav
        className={`fixed top-8 left-0 right-0 bg-gradient-to-r from-[#103d5d] to-[#1a4a6e] shadow-2xl z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16 md:h-20">
            {/* Logo Section - Both logos side by side */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {/* Main Logo */}
              <Link 
                to="/" 
                className="flex-shrink-0 flex items-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setServicesHover(false);
                  setMobileMegaMenuOpen(false);
                }}
              >
                <img
                  src="/logos/White-Sys.svg"
                  alt="SysCare Logo"
                  className="hidden md:block h-20 lg:h-24 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/logos/White-Sys.svg"
                  alt="SysCare Logo"
                  className="block md:hidden h-14 sm:h-16 w-auto object-contain"
                />
              </Link>

              {/* Second Logo - Now visible on all devices */}
              <div className="flex items-center border-l border-white/30 pl-2 sm:pl-3 md:pl-4">
                <img
                  src="/logos/ISO_Logos.png"
                  alt="Partner Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link
                to="/"
                className="text-white hover:text-[#a3d4ff] px-2 xl:px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:bg-white/10 rounded-lg text-sm xl:text-base"
                onClick={() => setServicesHover(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-white hover:text-[#a3d4ff] px-2 xl:px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:bg-white/10 rounded-lg text-sm xl:text-base"
                onClick={() => setServicesHover(false)}
              >
                About Us
              </Link>

              {/* Services with Desktop Mega Menu */}
              <div
                className="relative h-full flex items-center"
                ref={servicesButtonRef}
              >
                <button
                  onMouseEnter={() => {
                    setServicesHover(true);
                    setMegaMenuHover(true);
                  }}
                  className="text-white hover:text-[#a3d4ff] px-2 xl:px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] flex items-center hover:bg-white/10 rounded-lg text-sm xl:text-base"
                  aria-expanded={servicesHover}
                  aria-haspopup="true"
                >
                  Services
                  <FiChevronDown
                    className={`ml-1 transition-transform duration-200 ${
                      servicesHover ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <DesktopMegaMenu />
              </div>

              <Link
                to="/contact-Us"
                className="text-white hover:text-[#a3d4ff] px-2 xl:px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:bg-white/10 rounded-lg text-sm xl:text-base"
                onClick={() => setServicesHover(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/get-quote"
                className="bg-gradient-to-r from-white to-gray-100 hover:from-[#103d5d] hover:to-[#245684] border-white text-[#1a3d6b] hover:text-white px-3 xl:px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 border-2 shadow-lg hover:shadow-xl text-sm xl:text-base whitespace-nowrap"
                onClick={() => setServicesHover(false)}
              >
                Get Quote
              </Link>
            </div>

            {/* Tablet Navigation (simplified) */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              <Link
                to="/"
                className="text-white hover:text-[#a3d4ff] px-2 py-2 font-medium transition-all duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-white hover:text-[#a3d4ff] px-2 py-2 font-medium transition-all duration-300 text-sm"
              >
                About
              </Link>
              <button
                onClick={openMobileMegaMenu}
                className="text-white hover:text-[#a3d4ff] px-2 py-2 font-medium transition-all duration-300 text-sm flex items-center"
              >
                Services
                <FiChevronDown className="ml-1" />
              </button>
              <Link
                to="/contact-Us"
                className="text-white hover:text-[#a3d4ff] px-2 py-2 font-medium transition-all duration-300 text-sm"
              >
                Contact
              </Link>
              <Link
                to="/get-quote"
                className="bg-white text-[#1a3d6b] hover:bg-gray-100 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm whitespace-nowrap"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-[#a3d4ff] focus:outline-none transition-all duration-300 bg-white/10 p-2 rounded-lg border border-white/20 hover:border-white/40"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-gradient-to-b from-[#0d3452] to-[#103d5d] transition-all duration-500 ease-in-out shadow-inner overflow-hidden border-t border-[#a3d4ff]/20 ${
          mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:text-[#a3d4ff] block px-3 py-3 font-medium transition-all duration-300 transform hover:translate-x-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 text-sm"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] block px-3 py-3 font-medium transition-all duration-300 transform hover:translate-x-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 text-sm"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>

            {/* Mobile Services Button */}
            <button
              data-mobile-services-button
              onClick={openMobileMegaMenu}
              className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-3 font-medium transition-all duration-300 flex justify-between items-center rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 text-sm"
            >
              <span className="flex items-center">
                Services
              </span>
              <FiChevronDown className="transition-transform duration-200" />
            </button>

            <Link
              to="/contact-Us"
              className="text-white hover:text-[#a3d4ff] block px-3 py-3 font-medium transition-all duration-300 transform hover:translate-x-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20 text-sm"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-gradient-to-r from-[#245684] to-[#1a3d6b] hover:from-[#1a3d6b] hover:to-[#245684] text-white block px-6 py-3 rounded-xl font-medium transition-all duration-300 mx-3 my-2 text-center transform hover:scale-105 shadow-lg border-2 border-[#1a3d6b] hover:border-[#103d5d] text-sm"
              onClick={toggleMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Mobile Mega Menu Overlay */}
        <MobileMegaMenu />
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-14 sm:h-16 md:h-20 lg:h-24"></div>

      {/* Backdrop for mobile menus */}
      {(mobileMenuOpen || mobileMegaMenuOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileMegaMenuOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Navigation;
// components/Navigation.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FiChevronDown, 
  FiX, 
  FiMenu,
  FiCloud,
  FiShield,
  FiHeadphones,
  FiServer,
  FiWifi,
  FiCpu,
  FiTrendingUp,
  FiArrowRight
} from "react-icons/fi";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesHover, setServicesHover] = useState(false);

  const megaMenuRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleServicesEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesHover(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesHover(false);
    }, 200);
  };

  const handleMegaMenuEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesHover(true);
  };

  const handleMegaMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesHover(false);
    }, 200);
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
      clearTimeout(timeoutRef.current);
    };
  }, [lastScrollY]);

  const serviceCategories = [
    {
      id: "cloud",
      name: "Cloud Solutions",
      icon: <FiCloud />,
      subCategories: [
        { name: "Private Cloud", url: "/SysCare-Private-Cloud" },
        { name: "Hosted Services", url: "/Hosted-Services" },
        { name: "Cloud Migration", url: "/cloud-migration" },
      ],
    },
    {
      id: "security",
      name: "Security Services",
      icon: <FiShield />,
      subCategories: [
        { name: "Cybersecurity Consultancy", url: "/CyberSecurityConsultancyServices" },
        { name: "Managed Security", url: "/ManagedSecurityServices" },
        { name: "Security Assessment", url: "/security-assessment" },
      ],
    },
    {
      id: "support",
      name: "IT Support",
      icon: <FiHeadphones />,
      subCategories: [
        { name: "Service Desk", url: "/Service-Desk" },
        { name: "Managed IT Services", url: "/Managed-IT-Services" },
        { name: "IT Consulting", url: "/it-consulting" },
      ],
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      icon: <FiServer />,
      subCategories: [
        { name: "IT Infrastructure Projects", url: "/ITInfraProjects" },
        { name: "Network Solutions", url: "/network-solutions" },
        { name: "Data Center", url: "/data-center" },
      ],
    },
    {
      id: "connectivity",
      name: "Connectivity",
      icon: <FiWifi />,
      subCategories: [
        { name: "Business Connectivity", url: "/Connectivity" },
        { name: "VoIP & Video", url: "/VoiceVideo" },
        { name: "SD-WAN Solutions", url: "/sd-wan" },
      ],
    },
    {
      id: "digital",
      name: "Digital Services",
      icon: <FiTrendingUp />,
      subCategories: [
        { name: "Web Design & Development", url: "/DesignDev" },
        { name: "Digital Marketing", url: "/DigitalMarketing" },
        { name: "CRM Solutions", url: "/crm-solutions" },
      ],
    },
  ];

  return (
    <nav
      className={`bg-[#103d5d] shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/logos/White-Sys.svg"
                alt="SysCare Logo"
                className="hidden md:block h-10 w-auto"
              />
              <img
                src="/logos/White-Sys.svg"
                alt="SysCare Logo"
                className="block md:hidden h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  servicesHover ? "text-[#a3d4ff]" : "text-white hover:text-[#a3d4ff]"
                }`}
              >
                <span>Services</span>
                <FiChevronDown className={`transition-transform duration-200 ${servicesHover ? "rotate-180" : ""}`} />
              </button>

              {servicesHover && (
                <div
                  ref={megaMenuRef}
                  className="absolute left-0 top-full mt-1 w-[800px] bg-white shadow-xl border border-gray-200 rounded-lg z-50"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-8">
                      {serviceCategories.map((category) => (
                        <div key={category.id} className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-[#245684]">
                              {category.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-[#103d5d]">
                              {category.name}
                            </h3>
                          </div>
                          
                          <ul className="space-y-2">
                            {category.subCategories.map((subCategory, index) => (
                              <li key={index}>
                                <Link
                                  to={subCategory.url}
                                  className="flex items-center justify-between group py-1 text-sm text-gray-700 hover:text-[#245684] transition-colors duration-200"
                                >
                                  <span>{subCategory.name}</span>
                                  <FiArrowRight className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200 text-[#245684]" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#103d5d]">
                            Need a custom solution?
                          </p>
                          <p className="text-sm text-gray-600">
                            We tailor our services to your specific needs
                          </p>
                        </div>
                        <Link
                          to="/get-quote"
                          className="bg-[#245684] hover:bg-[#103d5d] text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Case Studies
            </Link>
            <Link
              to="/contact-Us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              to="/get-quote"
              className="bg-white hover:bg-gray-100 text-[#103d5d] px-5 py-2 rounded text-sm font-medium transition-colors duration-200 shadow-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#a3d4ff] focus:outline-none transition-colors duration-200 p-2"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#103d5d] border-t border-[#245684]">
          <div className="px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-white hover:text-[#a3d4ff] py-3 text-base font-medium transition-colors duration-200 border-b border-[#245684]"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block text-white hover:text-[#a3d4ff] py-3 text-base font-medium transition-colors duration-200 border-b border-[#245684]"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>

            {/* Mobile Services */}
            <div className="py-3 border-b border-[#245684]">
              <div className="text-white font-medium text-base mb-4">
                Services
              </div>
              <div className="grid grid-cols-1 gap-4 pl-4">
                {serviceCategories.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#a3d4ff]">
                        {category.icon}
                      </div>
                      <span className="text-white font-medium text-sm">
                        {category.name}
                      </span>
                    </div>
                    <div className="space-y-1 pl-7">
                      {category.subCategories.map((subCategory, index) => (
                        <Link
                          key={index}
                          to={subCategory.url}
                          className="block text-gray-300 hover:text-[#a3d4ff] py-1 text-sm transition-colors duration-200"
                          onClick={toggleMobileMenu}
                        >
                          {subCategory.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/case-studies"
              className="block text-white hover:text-[#a3d4ff] py-3 text-base font-medium transition-colors duration-200 border-b border-[#245684]"
              onClick={toggleMobileMenu}
            >
              Case Studies
            </Link>
            <Link
              to="/contact-Us"
              className="block text-white hover:text-[#a3d4ff] py-3 text-base font-medium transition-colors duration-200 border-b border-[#245684]"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/get-quote"
              className="block bg-white hover:bg-gray-100 text-[#103d5d] text-center py-3 rounded text-base font-medium transition-colors duration-200 mt-4 shadow-sm"
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
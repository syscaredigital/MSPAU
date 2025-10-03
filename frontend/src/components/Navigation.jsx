// components/Navigation.jsx
import { useState, useEffect } from "react";
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
  FiLayout,
  FiDatabase,
  FiServer,
  FiGlobe,
  FiVideo,
  FiCode,
  FiBarChart2,
  FiUsers,
  FiMonitor,
  FiCpu,
  FiLock,
  FiMessageSquare,
  FiTool,
  FiAward,
  FiPenTool,
  FiTrendingUp,
  FiBox,
  FiBriefcase
} from "react-icons/fi";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesHover, setServicesHover] = useState(false);
  const [megaMenuHover, setMegaMenuHover] = useState(false);

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
    setActiveMobileSubCategory(null); // reset subs when switching
  };

  const toggleMobileSubCategory = (categoryId) => {
    setActiveMobileSubCategory(
      activeMobileSubCategory === categoryId ? null : categoryId
    );
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Services menu (4 columns, 2 rows)
  const servicesColumns = [
    [
      {
        id: "private-cloud",
        name: "Cloud",
        subCategories: [
          { name: "Cloud Solutions", url: "/SysCare-Private-Cloud", icon: <FiCloud className="inline-block text-xl mr-2" /> },
          { name: "Hosted Solutions", url: "/Hosted-Services", icon: <FiServer className="inline-block text-xl mr-2" /> },
        ],
      },
      {
        id: "security-services",
        name: " IT Security",
        subCategories: [
          {
            name: "CyberSecurity Consultancy",
            url: "/CyberSecurityConsultancyServices",
            icon: <FiShield className="inline-block text-xl mr-2" />
          },
          { name: "Managed Security", url: "/ManagedSecurityServices",
            icon: <FiLock className="inline-block text-xl mr-2" />
           },
        ],
      },
    ],
    [
      {
        id: "managed-it",
        name: "IT Support",
        subCategories: [
          { name: "Service Desk", url: "/Service-Desk", icon: <FiHeadphones className="inline-block text-xl mr-2" /> },
          { name: "Managed IT", url: "/Managed-IT-Services", icon: <FiTool className="inline-block text-xl mr-2" /> },
        ],
      },
      {
        id: "project-consultancy",
        name: " Projects & Automation",
        subCategories: [
          { name: "IT Infra Projects", url: "/ITInfraProjects", icon: <FiSettings className="inline-block text-xl mr-2" /> },
          { name: "Office IT Automation", url: "/DevelopmentAutomation", icon: <FiCpu className="inline-block text-xl mr-2" /> },
        ],
      },
    ],
    [
      {
        id: "internet-voip",
        name: "Internet & VOIP",
        subCategories: [
          { name: "Connectivity", url: "/Connectivity", icon: <FiWifi className="inline-block text-xl mr-2" /> },
          { name: "VoIP & Video", url: "/VoiceVideo", icon: <FiVideo className="inline-block text-xl mr-2" /> },
        ],
      },
      {
        id: "it-training",
        name: "IT Training",
        subCategories: [
          { name: "Security", url: "/Security", icon: <FiAward className="inline-block text-xl mr-2" /> },
          { name: "Cloud", url: "/Cloud", icon: <FiBookOpen className="inline-block text-xl mr-2" /> },
        ],
      },
    ],
    [
      {
        id: "digital-services",
        name: "Digital Services",
        subCategories: [
          { name: "Web Design & Dev", url: "/DesignDev", icon: <FiPenTool className="inline-block text-xl mr-2" /> },
          { name: "MultiMedia & Digital Marketing", url: "/DigitalMarketing", icon: <FiTrendingUp className="inline-block text-xl mr-2" /> },
        ],
      },
      {
        id: "crm-erp",
        name: "CRM & ERP Solutions",
        subCategories: [
          { name: "Small Business", url: "/SmallBusiness", icon: <FiBriefcase className="inline-block text-xl mr-2" /> },
          { name: "Enterprise", url: "/Enterprise", icon: <FiMonitor className="inline-block text-xl mr-2" /> },
        ],
      },
    ],
  ];

  return (
    <nav
      className={`bg-gradient-to-r from-[#103d5d] to-[#1a4a6e] shadow-2xl sticky top-0 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* Desktop Logo */}
              <img
                src="/logos/White-Sys.svg"
                alt="SysCare Logo"
                className="hidden md:block h-20 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
              />
              {/* Mobile Logo */}
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
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:bg-white/10 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:bg-white/10 rounded-lg"
            >
              About Us
            </Link>

            {/* Services with Enhanced Mega Menu */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => {
                setServicesHover(true);
                setMegaMenuHover(true);
              }}
              onMouseLeave={() => {
                setServicesHover(false);
                setMegaMenuHover(false);
              }}
            >
              <Link
                to="/syscare-services"
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] flex items-center hover:bg-white/10 rounded-lg"
              >
                Services
                <FiChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    servicesHover ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {servicesHover && (
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 top-full w-[900px] bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl py-6 z-50 border border-gray-200 transition-all duration-300  ${
                    megaMenuHover ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  onMouseEnter={() => setMegaMenuHover(true)}
                  onMouseLeave={() => setMegaMenuHover(false)}
                >
                  {/* Mega Menu Header */}
                  <div className="px-6 mb-4 border-b border-[#103d5d]">
                    <h3 className="text-lg font-bold text-[#103d5d]   ">Our Services</h3>
                    <p className="text-sm text-gray-600 mt-1">Comprehensive IT solutions for your business</p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-8 px-6">
                    {servicesColumns.map((column, colIdx) => (
                      <div key={colIdx} className="col-span-1">
                        {column.map((category, catIdx) => (
                          <div key={catIdx} className="mb-8 last:mb-0 group">
                            <div className="flex items-center mb-3">
                              <div className="w-1 h-6 bg-gradient-to-b from-[#a3d4ff] to-[#245684] rounded-full mr-3 group-hover:w-2 transition-all duration-300"></div>
                              <h3 className="text-md font-bold text-[#103d5d] group-hover:text-[#245684] transition-colors duration-300">
                                {category.name}
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {category.subCategories.map(
                                (subCategory, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={subCategory.url}
                                      className="text-sm text-gray-600 hover:text-[#245684] block py-2 px-3 transition-all duration-300 flex items-center rounded-lg hover:bg-blue-50 group/item"
                                    >
                                      <span className="text-[#245684] group-hover/item:scale-110 transition-transform duration-300">
                                        {subCategory.icon}
                                      </span>
                                      <span className="ml-2">{subCategory.name}</span>
                                      <FiArrowRightCircle className="ml-auto opacity-0 group-hover/item:opacity-100 text-[#245684] transition-all duration-300 transform -translate-x-1 group-hover/item:translate-x-0" />
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  
                  {/* Mega Menu Footer */}
                  <div className="mt-6 pt-4 border-t border-[#103d5d] px-6">
                    <Link
                      to="/syscare-services"
                      className="inline-flex items-center text-[#103d5d] hover:text-[#245684] font-medium transition-all duration-300 group bg-white hover:bg-gray-100 px-4 py-2 rounded-lg shadow hover:shadow-md border border-[#103d5d] hover:border-[#245684]"
                    >
                      <span>View All Services</span>
                      <FiArrowRightCircle className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact-Us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] hover:bg-white/10 rounded-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-gradient-to-r from-white to-gray-100 hover:from-[#103d5d] hover:to-[#245684] border-white text-[#1a3d6b] hover:text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 ml-4 transform hover:scale-105 border-2 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#a3d4ff] focus:outline-none transition-all duration-300 bg-white/10 p-2 rounded-lg"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#0d3452] to-[#103d5d] transition-all duration-500 ease-in-out shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/home"
              className="text-white hover:text-[#a3d4ff] block px-3 py-3 font-medium transition-all duration-300 transform hover:translate-x-2 rounded-lg hover:bg-white/10"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] block px-3 py-3 font-medium transition-all duration-300 transform hover:translate-x-2 rounded-lg hover:bg-white/10"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>

            {/* Enhanced Mobile Services Menu */}
            <div className="relative">
              <div className="flex flex-col">
                <Link
                  to="/syscare-services"
                  className="text-white hover:text-[#a3d4ff] px-3 py-3 font-medium transition-all duration-300 rounded-lg hover:bg-white/10"
                  onClick={toggleMobileMenu}
                >
                  Services
                </Link>
                <button
                  onClick={() => toggleMobileMainCategory("services")}
                  className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-3 font-medium transition-all duration-300 flex justify-between items-center rounded-lg hover:bg-white/10"
                >
                  <span className="flex items-center">
                    <FiChevronDown className="mr-2" />
                    Browse Services
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
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#a3d4ff]/30 ml-3">
                  {servicesColumns.flat().map((category, catIdx) => (
                    <div key={catIdx} className="rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleMobileSubCategory(category.id)}
                        className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-3 font-medium transition-all duration-300 flex justify-between items-center rounded-lg hover:bg-white/10"
                      >
                        <span className="flex items-center">
                          <div className="w-1 h-4 bg-[#a3d4ff] rounded-full mr-3"></div>
                          {category.name}
                        </span>
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            activeMobileSubCategory === category.id
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeMobileSubCategory === category.id && (
                        <div className="pl-4 space-y-1 ml-3 border-l-2 border-[#a3d4ff]/20">
                          {category.subCategories.map((subCategory, subIdx) => (
                            <div key={subIdx} className="rounded-lg overflow-hidden">
                              <Link
                                to={subCategory.url}
                                className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 opacity-80 flex items-center rounded-lg hover:bg-white/10 hover:opacity-100"
                                onClick={toggleMobileMenu}
                              >
                                <span className="text-[#a3d4ff] mr-2">
                                  {subCategory.icon}
                                </span>
                                {subCategory.name}
                              </Link>
                            </div>
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
              className="text-white hover:text-[#a3d4ff] block px-3 py-3 font-medium transition-all duration-300 transform hover:translate-x-2 rounded-lg hover:bg-white/10"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-gradient-to-r from-[#245684] to-[#1a3d6b] hover:from-[#1a3d6b] hover:to-[#245684] text-white block px-6 py-3 rounded-xl font-medium transition-all duration-300 mx-3 my-2 text-center transform hover:scale-105 shadow-lg"
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
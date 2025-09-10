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
        name: "Cloud Solutions",
        subCategories: [
          { name: "SysCare Private Cloud", url: "/SysCare-Private-Cloud", icon: <FiCloud className="inline-block text-xl mr-2" /> },
          { name: "Hosted Services", url: "/Hosted-Services", icon: <FiServer className="inline-block text-xl mr-2" /> },
        ],
      },
      {
        id: "security-services",
        name: " IT Security",
        subCategories: [
          {
            name: "Cybersecurity Consultancy Services",
            url: "/CyberSecurityConsultancyServices",
            icon: <FiShield className="inline-block text-xl mr-2" />
          },
          { name: "Managed Security Services", url: "/ManagedSecurityServices",
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
          { name: "Managed IT Services", url: "/Managed-IT-Services", icon: <FiTool className="inline-block text-xl mr-2" /> },
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
          { name: "Design & Dev", url: "/DesignDev", icon: <FiPenTool className="inline-block text-xl mr-2" /> },
          { name: "Digital Marketing", url: "/DigitalMarketing", icon: <FiTrendingUp className="inline-block text-xl mr-2" /> },
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
      className={`bg-[#103d5d] shadow-lg sticky top-0 z-50 transition-all duration-500 ${
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
                className="hidden md:block h-20 w-auto object-contain"
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
              to="/home"
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

            {/* Services with Mega Menu */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}
            >
              <Link
                to="/syscare-services"
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] flex items-center h-full"
              >
                Services
                <FiChevronDown
                  className={`ml-1 transition-transform duration-200 ${
                    servicesHover ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {servicesHover && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[900px] bg-white shadow-xl rounded-b-lg py-4 z-50">
                  <div className="grid grid-cols-4 gap-6 px-6">
                    {servicesColumns.map((column, colIdx) => (
                      <div key={colIdx} className="col-span-1">
                        {column.map((category, catIdx) => (
                          <div key={catIdx} className="mb-6 last:mb-0">
                            <h3 className="text-sm font-bold text-[#103d5d] mb-2">
                              {category.name}
                            </h3>
                            <ul className="space-y-1">
                              {category.subCategories.map(
                                (subCategory, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={subCategory.url}
                                      className="text-sm text-gray-600 hover:text-[#245684] block py-1 transition-colors duration-200 flex items-center"
                                    >
                                      {subCategory.icon}
                                      {subCategory.name}
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
                </div>
              )}
            </div>

            <Link
              to="/contact-Us"
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d5d]"
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-[#FFFFFF] hover:bg-[#103d5d] border-[#FFFFFF] text-[#1a3d6b] hover:text-[#FFFFFF] px-6 py-2 rounded-lg font-medium transition-all duration-300 ml-4 transform hover:scale-105 border border-transparent hover:border-[#FFFFFF]"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#a3d4ff] focus:outline-none transition-all duration-300"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d3452] transition-all duration-500 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/home"
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>

            {/* Mobile Services Menu */}
            <div className="relative">
              <div className="flex flex-col">
                <Link
                  to="/syscare-services"
                  className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  Services
                </Link>
                <button
                  onClick={() => toggleMobileMainCategory("services")}
                  className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2 font-medium transition-all duration-300 flex justify-between items-center"
                >
                  Browse Services
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
                <div className="pl-4 mt-2 space-y-4">
                  {servicesColumns.flat().map((category, catIdx) => (
                    <div key={catIdx}>
                      <button
                        onClick={() => toggleMobileSubCategory(category.id)}
                        className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2 font-medium transition-all duration-300 flex justify-between items-center"
                      >
                        {category.name}
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            activeMobileSubCategory === category.id
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeMobileSubCategory === category.id && (
                        <div className="pl-4 space-y-2">
                          {category.subCategories.map((subCategory, subIdx) => (
                            <div key={subIdx}>
                              <Link
                                to={subCategory.url}
                                className="text-white hover:text-[#a3d4ff] block px-3 py-1 font-medium transition-all duration-300 opacity-80 flex items-center"
                                onClick={toggleMobileMenu}
                              >
                                {subCategory.icon}
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
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/get-quote"
              className="bg-[#245684] hover:bg-[#1a3d6b] text-white block px-6 py-2 rounded-lg font-medium transition-all duration-300 mx-3 my-2 text-center transform hover:scale-105"
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
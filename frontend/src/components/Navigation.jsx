// components/Navigation.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiX, FiMenu } from 'react-icons/fi';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesHover, setServicesHover] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setActiveMobileCategory(null);
    }
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Organized in 4 columns and 2 rows with your specified headings
  const servicesColumns = [
    [
      // Column 1
      {
        id: 'private-cloud',
        name: 'Private Cloud & Hosted Solutions',
        subCategories: [
          { name: 'SysCare Private Cloud', url: '/SysCare-Private-Cloud' },
          { name: 'Hosted Services', url: '/Hosted-Services' }
        ]
      },
      {
        id: 'security-services',
        name: 'Security Services & Consultancy',
        subCategories: [
          { name: 'Cybersecurity Consultancy Services', url: '/CyberSecurityConsultancyServices' },
          { name: 'Managed Security Services', url: '/ManagedSecurityServices' }
        ]
      }
    ],
    [
      // Column 2
      {
        id: 'managed-it',
        name: 'Managed IT Services & Service Desk',
        subCategories: [
          { name: 'Service Desk', url: '/Service-Desk' },
          { name: 'Managed IT Services', url: '/Managed-IT-Services' }
        ]
      },
      {
        id: 'project-consultancy',
        name: 'Project & Consultancy Services',
        subCategories: [
          { name: 'IT Infra Projects', url: '/ITInfraProjects' },
          { name: 'Development & Automation', url: '/DevelopmentAutomation' }
        ]
      }
    ],
    [
      // Column 3
      {
        id: 'internet-voip',
        name: 'Internet & VOIP',
        subCategories: [
          { name: 'Connectivity', url: '/Connectivity' },
          { name: 'VoIP & Video', url: '/VoiceVideo' }
        ]
      },
      {
        id: 'it-training',
        name: 'IT Training',
        subCategories: [
          { name: 'Security', url: '/Security' },
          { name: 'Cloud', url: '/Cloud' }
        ]
      }
    ],
    [
      // Column 4
      {
        id: 'digital-services',
        name: 'Digital Services',
        subCategories: [
          { name: 'Design & Dev', url: '/DesignDev' },
          { name: 'Digital Marketing', url: '/DigitalMarketing' }
        ]
      },
      {
        id: 'crm-erp',
        name: 'CRM & ERP Solutions',
        subCategories: [
          { name: 'Small Business', url: '/SmallBusiness' },
          { name: 'Enterprise', url: '/Enterprise' }
        ]
      }
    ]
  ];

  const toggleMobileCategory = (categoryId) => {
    if (activeMobileCategory === categoryId) {
      setActiveMobileCategory(null);
    } else {
      setActiveMobileCategory(categoryId);
    }
  };

  return (
    <nav className={`bg-[#103d5d] shadow-lg sticky top-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="frontend\src\assets\logos\SysCare Logo re - created - white.png" alt="LOGO" />
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
              <button 
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] flex items-center h-full"
              >
                Services
                <FiChevronDown className={`ml-1 transition-transform duration-200 ${servicesHover ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Horizontal Mega Menu Dropdown - 4 columns */}
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
                              {category.subCategories.map((subCategory, subIdx) => (
                                <li key={subIdx}>
                                  <Link 
                                    to={subCategory.url} 
                                    className="text-sm text-gray-600 hover:text-[#a3d4ff] block py-1 transition-colors duration-200"
                                  >
                                    {subCategory.name}
                                  </Link>
                                </li>
                              ))}
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
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              Contact Us
            </Link>
            <Link 
              to="/get-quote" 
              className="bg-[#245684] hover:bg-[#1a3d6b] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 ml-4 transform hover:scale-105"
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
            
            {/* Mobile Services Menu (vertical) */}
            <div className="relative">
              <button
                onClick={() => toggleMobileCategory('services')}
                className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2 font-medium transition-all duration-300 flex justify-between items-center"
              >
                Services
                <FiChevronDown className={`transition-transform duration-200 ${activeMobileCategory === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeMobileCategory === 'services' && (
                <div className="pl-4 mt-2 space-y-4">
                  {servicesColumns.flat().map((category, catIdx) => (
                    <div key={catIdx}>
                      <button
                        onClick={() => toggleMobileCategory(category.id)}
                        className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2 font-medium transition-all duration-300 flex justify-between items-center"
                      >
                        {category.name}
                        <FiChevronDown className={`transition-transform duration-200 ${activeMobileCategory === category.id ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeMobileCategory === category.id && (
                        <div className="pl-4 space-y-2">
                          {category.subCategories.map((subCategory, subIdx) => (
                            <div key={subIdx}>
                              <Link 
                                to={subCategory.url} 
                                className="text-white hover:text-[#a3d4ff] block px-3 py-1 font-medium transition-all duration-300 opacity-80"
                                onClick={toggleMobileMenu}
                              >
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
// components/Navigation.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesHover, setServicesHover] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setActiveCategory(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Mega menu data structure
  const servicesCategories = [
    {
      id: 'it-support',
      name: 'IT Support',
      subCategories: [
        {
          name: 'Managed IT Services',
          pages: [
            { name: '24/7 Monitoring', url: '/services/it-support/monitoring' },
            { name: 'Help Desk Support', url: '/services/it-support/help-desk' }
          ]
        },
        {
          name: 'On-Site Support',
          pages: [
            { name: 'Emergency Repairs', url: '/services/it-support/emergency' },
            { name: 'Preventive Maintenance', url: '/services/it-support/maintenance' }
          ]
        }
      ]
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      subCategories: [
        {
          name: 'Cloud Migration',
          pages: [
            { name: 'Assessment & Planning', url: '/services/cloud/migration-planning' },
            { name: 'Implementation', url: '/services/cloud/migration-implementation' }
          ]
        },
        {
          name: 'Cloud Management',
          pages: [
            { name: 'AWS Services', url: '/services/cloud/aws' },
            { name: 'Azure Services', url: '/services/cloud/azure' }
          ]
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      subCategories: [
        {
          name: 'Protection',
          pages: [
            { name: 'Firewall Solutions', url: '/services/cybersecurity/firewall' },
            { name: 'Endpoint Protection', url: '/services/cybersecurity/endpoint' }
          ]
        },
        {
          name: 'Compliance',
          pages: [
            { name: 'Risk Assessment', url: '/services/cybersecurity/risk-assessment' },
            { name: 'GDPR Compliance', url: '/services/cybersecurity/gdpr' }
          ]
        }
      ]
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      subCategories: [
        {
          name: 'Design & Implementation',
          pages: [
            { name: 'Network Architecture', url: '/services/network/architecture' },
            { name: 'Cabling Solutions', url: '/services/network/cabling' }
          ]
        },
        {
          name: 'Optimization',
          pages: [
            { name: 'Performance Tuning', url: '/services/network/performance' },
            { name: 'Wireless Solutions', url: '/services/network/wireless' }
          ]
        }
      ]
    },
    {
      id: 'data-management',
      name: 'Data Management',
      subCategories: [
        {
          name: 'Backup Solutions',
          pages: [
            { name: 'Disaster Recovery', url: '/services/data/disaster-recovery' },
            { name: 'Cloud Backup', url: '/services/data/cloud-backup' }
          ]
        },
        {
          name: 'Storage Solutions',
          pages: [
            { name: 'SAN/NAS Solutions', url: '/services/data/storage' },
            { name: 'Data Archiving', url: '/services/data/archiving' }
          ]
        }
      ]
    },
    {
      id: 'software-solutions',
      name: 'Software Solutions',
      subCategories: [
        {
          name: 'Custom Development',
          pages: [
            { name: 'Business Applications', url: '/services/software/custom-apps' },
            { name: 'Integration Services', url: '/services/software/integration' }
          ]
        },
        {
          name: 'Productivity Tools',
          pages: [
            { name: 'Office 365', url: '/services/software/office365' },
            { name: 'Collaboration Tools', url: '/services/software/collaboration' }
          ]
        }
      ]
    },
    {
      id: 'hardware-solutions',
      name: 'Hardware Solutions',
      subCategories: [
        {
          name: 'Procurement',
          pages: [
            { name: 'Workstations', url: '/services/hardware/workstations' },
            { name: 'Servers', url: '/services/hardware/servers' }
          ]
        },
        {
          name: 'Maintenance',
          pages: [
            { name: 'Warranty Management', url: '/services/hardware/warranty' },
            { name: 'Hardware Upgrades', url: '/services/hardware/upgrades' }
          ]
        }
      ]
    },
    {
      id: 'consulting',
      name: 'IT Consulting',
      subCategories: [
        {
          name: 'Strategy',
          pages: [
            { name: 'Digital Transformation', url: '/services/consulting/transformation' },
            { name: 'IT Roadmapping', url: '/services/consulting/roadmap' }
          ]
        },
        {
          name: 'Training',
          pages: [
            { name: 'Staff Training', url: '/services/consulting/training' },
            { name: 'Security Awareness', url: '/services/consulting/security-training' }
          ]
        }
      ]
    }
  ];

  const toggleMobileCategory = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
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
              className="relative"
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}
            >
              <button 
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff] flex items-center"
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesHover ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Menu Dropdown */}
              {servicesHover && (
                <div className="absolute left-0 w-full bg-white shadow-xl rounded-b-lg py-4 z-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-4 gap-8">
                      {servicesCategories.map((category) => (
                        <div key={category.id} className="col-span-1">
                          <h3 className="text-lg font-bold text-[#103d5d] mb-3 pb-2 border-b border-gray-200">
                            {category.name}
                          </h3>
                          <div className="space-y-2">
                            {category.subCategories.map((subCategory, subIdx) => (
                              <div key={subIdx}>
                                <h4 className="text-sm font-semibold text-[#245684] mb-1">
                                  {subCategory.name}
                                </h4>
                                <ul className="space-y-1">
                                  {subCategory.pages.map((page, pageIdx) => (
                                    <li key={pageIdx}>
                                      <Link 
                                        to={page.url} 
                                        className="text-sm text-gray-600 hover:text-[#a3d4ff] block py-1 transition-colors duration-200"
                                      >
                                        {page.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
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
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
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
            
            {/* Mobile Services Mega Menu */}
            <div className="relative">
              <button
                onClick={() => toggleMobileCategory('services')}
                className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2 font-medium transition-all duration-300 flex justify-between items-center"
              >
                Services
                <svg 
                  className={`h-5 w-5 transition-transform duration-200 ${activeCategory === 'services' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeCategory === 'services' && (
                <div className="pl-4 mt-2 space-y-2">
                  {servicesCategories.map((category) => (
                    <div key={category.id}>
                      <button
                        onClick={() => toggleMobileCategory(category.id)}
                        className="text-white hover:text-[#a3d4ff] w-full text-left px-3 py-2 font-medium transition-all duration-300 flex justify-between items-center"
                      >
                        {category.name}
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${activeCategory === category.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeCategory === category.id && (
                        <div className="pl-4 space-y-2">
                          {category.subCategories.map((subCategory, subIdx) => (
                            <div key={subIdx} className="pl-2">
                              <h4 className="text-white font-medium opacity-80 py-1">
                                {subCategory.name}
                              </h4>
                              <ul className="pl-2 space-y-1">
                                {subCategory.pages.map((page, pageIdx) => (
                                  <li key={pageIdx}>
                                    <Link 
                                      to={page.url} 
                                      className="text-white hover:text-[#a3d4ff] block px-3 py-1 font-medium transition-all duration-300 opacity-70"
                                      onClick={toggleMobileMenu}
                                    >
                                      {page.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
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
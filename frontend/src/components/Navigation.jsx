// components/Navigation.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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

  return (
    <nav className={`bg-[#103d5d] shadow-lg sticky top-0 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-bold">SysCare</span>
              <span className="text-[#a3d4ff] text-2xl font-bold">IT</span>
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
            <Link 
              to="/syscare-services" 
              className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
            >
              Services
            </Link>
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
            <Link 
              to="/syscare-services" 
              className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
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
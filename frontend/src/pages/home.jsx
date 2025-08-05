import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 12, label: "Years Experience" },
    { id: 2, value: 0, target: 150, label: "Satisfied Clients" },
    { id: 3, value: 0, target: 99.9, label: "Uptime Guarantee", isPercentage: true },
    { id: 4, value: 0, target: 24, label: "Support Available", isHours: true }
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Updated Services Data
  const coreServices = [
    {
      id: 1,
      title: "IT Support",
      description: "Comprehensive IT support services to keep your business running smoothly 24/7.",
      icon: "💻"
    },
    {
      id: 2,
      title: "Security Solutions",
      description: "Advanced security solutions to protect your business from cyber threats.",
      icon: "🔒"
    },
    {
      id: 3,
      title: "Projects & Automation",
      description: "Custom IT projects and automation solutions to streamline your operations.",
      icon: "⚙️"
    }
  ];

  const additionalServices = [
    {
      id: 4,
      title: "Internet & VOIP",
      description: "Reliable internet and VOIP solutions for seamless communication.",
      icon: "📶"
    },
    {
      id: 5,
      title: "Digital Services",
      description: "Transform your business with our cutting-edge digital services.",
      icon: "🌐"
    },
    {
      id: 6,
      title: "IT Training",
      description: "Professional IT training to upskill your team and maximize productivity.",
      icon: "🎓"
    },
    {
      id: 7,
      title: "CRM & ERP Solutions",
      description: "Integrated CRM and ERP solutions to optimize your business processes.",
      icon: "📊"
    }
  ];

  // Updated Testimonials Data with images
  const testimonials = [
    {
      id: 1,
      quote: "SysCare transformed our IT infrastructure completely. Their team is knowledgeable and responsive.",
      author: "Sarah Johnson",
      company: "TechForward Inc.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      quote: "The cybersecurity solutions they implemented gave us peace of mind we didn't have before.",
      author: "Michael Chen",
      company: "SecureData LLC",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "Excellent cloud migration services. We experienced minimal downtime thanks to their planning.",
      author: "Emily Rodriguez",
      company: "CloudNine Solutions",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Start counter animation when stats section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
      clearInterval(interval);
    };
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats(prevStats => 
        prevStats.map(stat => {
          let newValue;
          if (stat.isPercentage) {
            newValue = (progress * stat.target).toFixed(1);
          } else {
            newValue = Math.floor(progress * stat.target);
          }
          return { ...stat, value: newValue };
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const toggleServices = () => {
    setShowAllServices(!showAllServices);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Navigation Bar */}
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
                to="/" 
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-[#a3d4ff] px-3 py-2 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-[#a3d4ff]"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
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
                to="/" 
                className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-[#a3d4ff] block px-3 py-2 font-medium transition-all duration-300 transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
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

      {/* Hero Section */}
      <div className={`relative bg-gradient-to-r from-[#103d5d] to-[#245684] text-white overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeInUp">
              Empowering Businesses Through <span className="text-[#a3d4ff]">Innovative IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fadeInUp delay-100">
              SysCare IT Solutions delivers cutting-edge technology services to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-200">
              <button className="px-8 py-3 bg-white text-[#103d5d] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-6">About SysCare IT Solutions</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, SysCare IT Solutions has been at the forefront of delivering exceptional IT services to businesses of all sizes. Our team of certified professionals brings decades of combined experience in managing complex IT environments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We take pride in our customer-centric approach, ensuring that every solution we deliver aligns perfectly with your business objectives and growth strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#103d5d] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">150+ Clients</div>
              <div className="bg-[#245684] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">24/7 Support</div>
              <div className="bg-[#170f17] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300">Certified Experts</div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96 animate-fadeInRight">
            <div className="w-full h-full bg-gradient-to-r from-[#103d5d] to-[#245684] flex items-center justify-center text-white">
              <p className="text-xl">Company Image/Video</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#f0f4f8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">Our {showAllServices ? 'Complete' : 'Core'} Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {showAllServices ? 'Our full range of IT solutions to meet all your business needs.' : 'Comprehensive IT solutions designed to meet your business needs and drive growth.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Core Services - Always shown */}
            {coreServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                delay={index * 100}
              />
            ))}
            
            {/* Additional Services - Shown when expanded */}
            {showAllServices && 
              additionalServices.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  delay={(index + coreServices.length) * 100}
                />
              ))
            }
          </div>

          <div className="text-center mt-12 animate-fadeInUp delay-500">
            <button 
              onClick={toggleServices}
              className="px-8 py-3 bg-[#103d5d] text-white rounded-lg font-semibold hover:bg-[#245684] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {showAllServices ? 'Show Less Services' : 'View All Services'}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="animate-fadeInUp">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.isPercentage ? stat.value : stat.value}+
                  {stat.isPercentage && <span>%</span>}
                  {stat.isHours && <span>/7</span>}
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses across various industries for our reliable IT solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                      />
                      <div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                        <div>
                          <div className="font-semibold text-[#245684]">{testimonial.author}</div>
                          <div className="text-gray-500 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-[#103d5d]' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#170f17] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-pulse-slow">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how SysCare IT Solutions can help your business achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-[#245684] text-white rounded-lg font-semibold hover:bg-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get a Free Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#170f17] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#103d5d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fadeInUp">
              <div className="flex items-center mb-4">
                <span className="text-white text-2xl font-bold">SysCare</span>
                <span className="text-[#a3d4ff] text-2xl font-bold">IT</span>
              </div>
              <p className="mb-4">
                Delivering innovative IT solutions to help businesses thrive in the digital world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#a3d4ff] transition-all duration-300 transform hover:scale-125">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#a3d4ff] transition-all duration-300 transform hover:scale-125">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#a3d4ff] transition-all duration-300 transform hover:scale-125">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#a3d4ff] transition-all duration-300 transform hover:scale-125">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
            </svg>
          </a>
              </div>
            </div>
            <div className="animate-fadeInUp delay-100">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">IT Support</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Security Solutions</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Projects & Automation</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Internet & VOIP</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Digital Services</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">IT Training</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">RM & ERP Solutions</a></li>
                
              </ul>
            </div>
            <div className="animate-fadeInUp delay-200">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">About Us</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Services</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Contact Us</a></li>
                <li><a href="#" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Blog</a></li>
              </ul>
            </div>
            <div className="animate-fadeInUp delay-300">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium">Melbourne</h4>
                  <p className="text-sm">Level 10, Suite 1012, 401 Docklands Dr, Docklands, VIC 3008</p>
                </div>
                <div>
                  <h4 className="font-medium">Sydney</h4>
                  <p className="text-sm">Level 36, Gateway, 1 Macquarie Pl, Sydney, NSW 2000</p>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-sm">1300 69 79 72</p>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm">info@syscare.com.au</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#245684] text-center animate-fadeInUp">
            <p>&copy; {new Date().getFullYear()} SysCare IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="text-5xl mb-6 hover:scale-110 transition-transform duration-500">{service.icon}</div>
        <h3 className="text-2xl font-bold text-[#245684] mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <button className="text-[#103d5d] font-semibold hover:text-[#245684] transition-all duration-300 flex items-center self-start transform hover:translate-x-2">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/footer.jsx';


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

  // Services Data
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

  // Testimonials Data
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
      <Navigation />
<VideoHero />
  {/* Modern Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#60a5fa] mix-blend-screen filter blur-3xl animate-float1"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#93c5fd] mix-blend-screen filter blur-3xl animate-float2"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-[#3b82f6] mix-blend-screen filter blur-3xl animate-float3"></div>
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider animate-pulse">
            INNOVATIVE IT SOLUTIONS
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            SysCare IT Solutions
          </span> 
          <br />
          For Your Digital Transformation
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          We deliver cutting-edge technology solutions that drive business growth and optimize operations through innovative IT strategies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/services" 
            className="px-8 py-4 bg-white text-[#1e3a8a] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center"
          >
            <span>Explore Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center"
          >
            <span>Free Consultation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </Link>
        </div>
        
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((item) => (
                <img 
                  key={item}
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${30 + item}.jpg`}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
            <div className="ml-4">
              <p className="font-medium">Trusted by industry leaders</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2">5.0 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block h-8 w-px bg-white/30"></div>
          
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">ISO 27001 Certified</p>
              <p className="text-sm text-white/80">Data Security</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 hidden lg:block">
        <div className="relative w-full h-96">
          {/* Glass morphism card */}
          <div className="absolute top-0 right-0 w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Your Digital Transformation Starts Here</h3>
                <p className="text-white/80 mb-6">Custom solutions tailored to your business needs</p>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  <span>24/7 Support</span>
                  <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300/20 rounded-full filter blur-xl"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-400/30 rounded-full filter blur-lg animate-float4"></div>
          <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-white/20 rounded-full filter blur-lg animate-float5"></div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Scrolling indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="flex flex-col items-center">
      <span className="text-xs mb-1 text-white/70">Scroll Down</span>
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>
</section>
       

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
            <div className="w-full h-full bg-gradient-to-r from-[#103d5d] to-[#245684] flex items-center justify-center text-white">
              <p className="text-xl">Company Image/Video</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#f0f4f8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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

          <div className="text-center mt-12">
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
              <div key={stat.id}>
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
        <div className="text-center mb-16">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how SysCare IT Solutions can help your business achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-[#245684] text-white rounded-lg font-semibold hover:bg-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#170f17] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#103d5d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
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
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">IT Support</Link></li>
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Security Solutions</Link></li>
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Projects & Automation</Link></li>
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Internet & VOIP</Link></li>
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Digital Services</Link></li>
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">IT Training</Link></li>
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">CRM & ERP Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white hover:text-[#a3d4ff] transition-all duration-300">About Us</Link></li>
                <li><Link to="/services" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Services</Link></li>
                <li><Link to="/contact" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Contact Us</Link></li>
                <li><Link to="/blog" className="text-white hover:text-[#a3d4ff] transition-all duration-300">Blog</Link></li>
              </ul>
            </div>
            <div>
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
          <div className="mt-12 pt-8 border-t border-[#245684] text-center">
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
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="text-5xl mb-6 hover:scale-110 transition-transform duration-500">{service.icon}</div>
        <h3 className="text-2xl font-bold text-[#245684] mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <Link 
          to="/services" 
          className="text-[#103d5d] font-semibold hover:text-[#245684] transition-all duration-300 flex items-center self-start transform hover:translate-x-2"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
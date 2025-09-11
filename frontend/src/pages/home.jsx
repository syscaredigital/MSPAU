import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import VideoHero from '../components/hero.jsx';
import Footer from '../components/footer.jsx';

// Add CSS animations in a style tag
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes bounceGentle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 3s ease-in-out 0.5s infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-pulse-slower {
    animation: pulse 3s ease-in-out infinite;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.5s ease-out forwards;
  }
  
  .animate-bounce-gentle {
    animation: bounceGentle 2s infinite ease-in-out;
  }
  
  .service-card {
    transition: all 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .stagger-animation > * {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
  .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
  .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }
  .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }
  
  .testimonial-slide {
    transition: transform 0.5s ease-in-out;
  }

  /* Cyber video background styles */
  .cyber-video-container {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }
  
  .cyber-video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(16, 61, 93, 0.7), rgba(36, 86, 132, 0.7));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 2;
  }
  
  .cyber-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
`;

const HomePage = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 12, label: "Years Experience" },
    { id: 2, value: 0, target: 150, label: "Satisfied Clients" },
    { id: 3, value: 0, target: 99.9, label: "Uptime Guarantee", isPercentage: true },
    { id: 4, value: 0, target: 24, label: "Support Available", isHours: true }
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // All Services Data
  const allServices = [
    {
      id: 1,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, management, and optimization for your business.",
      icon: "☁️"
    },
    {
      id: 2,
      title: "IT Security",
      description: "Advanced security solutions to protect your business from cyber threats and data breaches.",
      icon: "🔒"
    },
    {
      id: 3,
      title: "IT Support",
      description: "24/7 IT support services to keep your business running smoothly without interruptions.",
      icon: "💻"
    },
    {
      id: 4,
      title: "Projects & Automation",
      description: "Custom IT projects and automation solutions to streamline your operations and increase efficiency.",
      icon: "⚙️"
    },
    {
      id: 5,
      title: "Internet & VOIP",
      description: "Reliable internet and VOIP solutions for seamless communication and connectivity.",
      icon: "📶"
    },
    {
      id: 6,
      title: "IT Training",
      description: "Professional IT training to upskill your team and maximize productivity and security awareness.",
      icon: "🎓"
    },
    {
      id: 7,
      title: "Digital Services",
      description: "Transform your business with our cutting-edge digital services and digital transformation strategies.",
      icon: "🌐"
    },
    {
      id: 8,
      title: "CRM & ERP Solutions",
      description: "Integrated CRM and ERP solutions to optimize your business processes and customer relationships.",
      icon: "📊"
    }
  ];

  // Get first 4 services for initial display
  const initialServices = allServices.slice(0, 4);
  // Get remaining services
  const additionalServices = allServices.slice(4);

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

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Add animation styles */}
      <style>{animationStyles}</style>
      
      <Navigation />

      <VideoHero/>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-6">About SysCare IT Solutions</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, SysCare IT Solutions has been at the forefront of delivering exceptional IT services to businesses of all sizes. Our team of certified professionals brings decades of combined experience in managing complex IT environments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We take pride in our customer-centric approach, ensuring that every solution we deliver aligns perfectly with your business objectives and growth strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#103d5d] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse-slow">150+ Clients</div>
              <div className="bg-[#245684] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse-slow" style={{animationDelay: '0.5s'}}>24/7 Support</div>
              <div className="bg-[#170f17] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse-slow" style={{animationDelay: '1s'}}>Certified Experts</div>
            </div>
          </div>
          <div className="cyber-video-container rounded-xl overflow-hidden h-96 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {/* Cyber/Technology Background Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="cyber-video"
              poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-waves-9885-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="cyber-video-overlay">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-4">Cybersecurity & Technology</h3>
                <p className="text-lg">Protecting your digital assets with cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Updated with Border */}
      <div className="bg-white py-16 md:py-24 relative overflow-hidden border border-gray rounded-lg mx-4 sm:mx-6 lg:mx-8">
        {/* Animated background elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-100 opacity-30 animate-pulse-slower"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-blue-200 opacity-20 animate-pulse-slower" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Comprehensive IT solutions designed to meet all your business technology needs
            </p>
          </div>

          {/* Services Grid - Show first 4 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
            {initialServices.map((service, index) => (
              <AnimatedServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                animationDelay={index * 0.1}
              />
            ))}
          </div>

          {/* Additional Services - Show when expanded */}
          {showAllServices && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 stagger-animation">
              {additionalServices.map((service, index) => (
                <AnimatedServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index + initialServices.length}
                  animationDelay={index * 0.1}
                />
              ))}
            </div>
          )}

          {/* Show More/Less Button with Animation */}
          <div className="text-center mt-12 animate-bounce-gentle">
            <button 
              onClick={toggleServices}
              className="px-8 py-3 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white rounded-lg font-semibold hover:from-[#245684] hover:to-[#103d5d] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto relative overflow-hidden group"
            >
              <span className="relative z-10">
                {showAllServices ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Show Less Services
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Show More Services
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#245684] to-[#103d5d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-float"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-white animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-animation">
            {stats.map((stat) => (
              <div key={stat.id} className="animate-fade-in">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Trusted by businesses across various industries for our reliable IT solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex testimonial-slide"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6 hover:scale-105 transition-transform duration-300"
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-[#103d5d] scale-125' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#170f17] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-white animate-pulse-slower"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse-slower" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Contact us today to discuss how SysCare IT Solutions can help your business achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 stagger-animation">
            <Link 
              to="/contact-Us" 
              className="px-8 py-3 bg-[#245684] text-white rounded-lg font-semibold hover:bg-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-gentle"
            >
              Get a Free Consultation
            </Link>
            <Link 
              to="/contact-Us" 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#170f17] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

// Animated Service Card Component
const AnimatedServiceCard = ({ service, animationDelay = 0 }) => {
  return (
    <div 
      className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full border border-[#103d5d] animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="p-6 h-full flex flex-col relative">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        
        <div className="relative z-10">
          {/* Icon with animation */}
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 animate-float">
            {service.icon}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-[#245684] mb-3 group-hover:text-[#103d5d] transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow text-sm group-hover:text-gray-800 transition-colors duration-300">
            {service.description}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import VideoHero from '../components/hero.jsx';
import Footer from '../components/footer.jsx';
import ServicesMarquee from '../components/ServiceMarqee.jsx';
const HomePage = () => {
  const [showAllServices, setShowAllServices] = useState(false);
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
      <Navigation />

  
       <VideoHero/>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
       
 <ServicesMarquee/>

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
              to="/contact-Us" 
              className="px-8 py-3 bg-[#245684] text-white rounded-lg font-semibold hover:bg-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
        {/* <Link 
          to="/services" 
          className="text-[#103d5d] font-semibold hover:text-[#245684] transition-all duration-300 flex items-center self-start transform hover:translate-x-2"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link> */}
      </div>
    </div>
  );
};

export default HomePage;
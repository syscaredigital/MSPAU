import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "IT Support",
      description: "Comprehensive IT support services to keep your business running smoothly with minimal downtime.",
      icon: "💻"
    },
    {
      title: "Security",
      description: "Advanced security solutions to protect your digital assets from threats and vulnerabilities.",
      icon: "🔒"
    },
    {
      title: "Solutions",
      description: "Customized IT solutions tailored to your specific business needs and challenges.",
      icon: "🛠️"
    },
    {
      title: "Projects & Automation",
      description: "Streamline your operations with our project management and automation services.",
      icon: "🤖"
    },
    {
      title: "Internet & VOIP",
      description: "Reliable internet and VOIP solutions for seamless communication and connectivity.",
      icon: "🌐"
    },
    {
      title: "Digital Services",
      description: "Transform your business with our cutting-edge digital services and online solutions.",
      icon: "🖥️"
    },
    {
      title: "IT Training",
      description: "Enhance your team's skills with our professional IT training programs.",
      icon: "🎓"
    },
    {
      title: "CRM & ERP Solutions",
      description: "Integrated CRM and ERP systems to optimize your business processes and customer relationships.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <Navigation />
      <header className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white"></div>
          <div className="absolute bottom-20 right-16 w-48 h-48 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">Our Services</h1>
          <p className="text-xl text-[#c9d8eb] max-w-2xl mx-auto animate-fade-in-up delay-100">
            Comprehensive IT solutions to drive your business forward
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-[#ffffff] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">SysCare Services</h2>
            <div className="w-24 h-1 bg-[#245684] mx-auto animate-scale-x"></div>
            <p className="text-[#170f17] mt-4 max-w-2xl mx-auto animate-fade-in delay-200">
              We offer a comprehensive range of IT services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-500 border-t-4 border-[#245684] transform hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#103d5d] mb-2">{service.title}</h3>
                <p className="text-[#170f17] mb-4">{service.description}</p>
                
                {/* Enhanced Learn More Button */}
                <div className="relative mt-6 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#103d5d] to-[#245684] transition-all duration-300 ${
                    hoveredCard === index ? 'w-full' : 'w-0'
                  }`} style={{ height: '2px' }}></div>
                  
                  <button className="group flex items-center text-[#245684] font-semibold transition-all duration-300 hover:text-[#103d5d]">
                    <span className="relative">
                      Learn more
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#245684] transition-all duration-300 ${
                        hoveredCard === index ? 'w-full' : 'w-0'
                      }`}></span>
                    </span>
                    <svg 
                      className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                        hoveredCard === index ? 'translate-x-2' : 'translate-x-0'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#000000] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-pulse-slow">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group relative bg-white text-[#103d5d] px-8 py-3 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-lg">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#103d5d] to-[#245684] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </button>
            <button className="group relative bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#103d5d]">
              <span className="relative z-10">Call Now</span>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </button>
          </div>
        </div>
      </section>

      <Footer/>
      
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes pulseSlow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scaleX 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
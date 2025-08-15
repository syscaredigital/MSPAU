import React, { useState, useEffect, useRef } from 'react';
import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import Navigation from '../components/Navigation';

const PrivateCloudPage = () => {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Private Cloud",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "Elevate your business with SysCare Private Cloud, a flagship service by SysCare IT Solutions. Our state-of-the-art private cloud solutions empower organizations with unparalleled flexibility, security, and scalability. Tailored to meet diverse business needs, SysCare Private Cloud ensures seamless data management, robust security protocols, and efficient resource utilization."
    },
    {
      title: "Hosted Servers",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers state-of-the-art Hosted Servers (Virtual Machines), providing clients with a robust and scalable solution tailored to their business needs. Our advanced hosting services guarantee optimal performance, security, and flexibility."
    },
    {
      title: "Dedicated Virtual Servers",
      icon: <FiCpu className="text-[#245684] text-2xl" />,
      content: "Elevate your digital capabilities with SysCare IT Solutions' Dedicated Virtual Servers. Tailored for optimal performance and reliability, our state-of-the-art infrastructure ensures seamless operations for your business."
    },
    {
      title: "Virtual Desktops",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions offers spectrum of services, including Virtual Desktops (VDI) and Remote Desktop Services (RDS). Elevate your business efficiency with our cutting-edge virtualization solutions."
    },
    {
      title: "Rack Space Hire",
      icon: <FiDatabase className="text-[#245684] text-2xl" />,
      content: "Elevate your business with SysCare IT Solutions' Rack Space Hire (Co-location) service. Our premium co-location offering provides a secure and efficient environment for your servers and equipment."
    },
    {
      title: "Leased Servers",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers excellence in IT with its Leased Dedicated Physical Servers service. Elevate your business performance and security with our dedicated servers, exclusively assigned to meet your unique requirements."
    }
  ];

  const features = [
    {
      icon: <FiShield className="text-[#245684] text-2xl" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and advanced threat protection"
    },
    {
      icon: <FiCpu className="text-[#245684] text-2xl" />,
      title: "High Performance",
      description: "99.99% uptime with SSD storage and high-speed networking"
    },
    {
      icon: <FiWifi className="text-[#245684] text-2xl" />,
      title: "Dedicated Bandwidth",
      description: "1Gbps to 10Gbps options available"
    },
    {
      icon: <FiDatabase className="text-[#245684] text-2xl" />,
      title: "Compliance Ready",
      description: "Meet industry-specific regulatory requirements"
    }
  ];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1 }
      );
    });

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, []);

  const toggleService = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section 
        className="relative bg-[#103d5d] text-white py-32 overflow-hidden px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        ref={sectionRefs[0]}
        style={{
          opacity: isVisible[0] ? 1 : 0,
          transform: isVisible[0] ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      >
        <div className="absolute inset-0 bg-[#170f17] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#103d5d] to-transparent z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <span 
              className="uppercase tracking-wider text-[#a3c1e0] font-medium text-sm block mb-4"
              style={{
                opacity: isVisible[0] ? 1 : 0,
                transform: isVisible[0] ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
              }}
            >
              SysCare IT Solutions
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 leading-tight"
              style={{
                opacity: isVisible[0] ? 1 : 0,
                transform: isVisible[0] ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s'
              }}
            >
              Enterprise <span className="text-[#a3c1e0]">Cloud & Infrastructure</span> Solutions
            </h1>
            <p 
              className="text-xl text-[#c9d8eb] max-w-3xl mb-10"
              style={{
                opacity: isVisible[0] ? 1 : 0,
                transform: isVisible[0] ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s'
              }}
            >
              Transform your business with our cutting-edge managed services designed for security, performance, and scalability.
            </p>
            <div 
              className="flex flex-wrap gap-6 mt-12"
              style={{
                opacity: isVisible[0] ? 1 : 0,
                transform: isVisible[0] ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s'
              }}
            >
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg">
                Get Started
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-[#103d5d] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 hover:scale-[1.02] text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Private Cloud Focus Section */}
      <section 
        className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        ref={sectionRefs[1]}
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col lg:flex-row gap-16 items-center"
            style={{
              opacity: isVisible[1] ? 1 : 0,
              transform: isVisible[1] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">SysCare Private Cloud</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed px-2">
                Our state-of-the-art private cloud solutions empower organizations with unparalleled flexibility, security, and scalability. Tailored to meet diverse business needs, SysCare Private Cloud ensures seamless data management, robust security protocols, and efficient resource utilization.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed px-2">
                Experience the pinnacle of reliability and performance as our dedicated team of experts customizes solutions to optimize your operations. Trust SysCare Private Cloud for a sophisticated, streamlined, and secure IT infrastructure, enabling you to focus on what truly matters – the growth and success of your business.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Private Cloud Demo
                <FiChevronRight className="inline ml-3 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
            <div 
              className="lg:w-1/2"
              style={{
                opacity: isVisible[1] ? 1 : 0,
                transform: isVisible[1] ? 'scale(1)' : 'scale(0.95)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              <div className="bg-white p-8 rounded-xl border border-[#e1e9f2] shadow-sm hover:shadow-md transition-shadow duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Private Cloud Infrastructure"
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Accordion */}
      <section 
        className="py-24 bg-white px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        ref={sectionRefs[2]}
      >
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center"
            style={{
              opacity: isVisible[2] ? 1 : 0,
              transform: isVisible[2] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
          >
            Our Cloud & Infrastructure Services
          </h2>
          
          <div 
            className="max-w-4xl mx-auto"
            style={{
              opacity: isVisible[2] ? 1 : 0,
              transform: isVisible[2] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
            }}
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-[#f5f9fd] rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleService(index)}
                    className={`w-full text-left p-8 transition-all duration-300 flex justify-between items-center ${
                      expandedService === index ? 'bg-[#103d5d] text-white' : 'hover:bg-[#e1e9f2]'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-6 ${
                        expandedService === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                      }`}>
                        {React.cloneElement(service.icon, {
                          className: `${expandedService === index ? 'text-white' : 'text-[#245684]'} text-2xl`
                        })}
                      </div>
                      <h3 className="text-xl md:text-2xl font-medium">{service.title}</h3>
                    </div>
                    <FiChevronDown 
                      className={`text-2xl transition-transform duration-300 ${
                        expandedService === index ? 'rotate-180 text-white' : 'text-[#245684]'
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      expandedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-8 pt-0 pl-24">
                      <p className="text-[#5c6f87] text-lg mb-6 leading-relaxed px-4 py-3 bg-white/50 rounded-lg">
                        {service.content}
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-[#245684] font-medium hover:underline group text-lg ml-4"
                      >
                        Learn more
                        <FiChevronRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center">Why Choose Our Cloud Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-[#e1e9f2] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#f0f6ff] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#103d5d] mb-3">{feature.title}</h3>
                <p className="text-[#5c6f87] px-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#103d5d] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto px-4">
            Our experts are ready to design the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-12 py-5 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#103d5d] text-white px-12 py-5 rounded-md font-medium transition-all duration-300 hover:scale-[1.02] text-lg">
              Speak to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateCloudPage;
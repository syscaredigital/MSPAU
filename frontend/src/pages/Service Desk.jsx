import React, { useState, useEffect, useRef } from 'react';
import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight } from 'react-icons/fi';
import Navigation from '../components/Navigation';

const ServiceDeskPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const services = [
    {
      title: "Private Cloud",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "Elevate your business with SysCare Private Cloud, a flagship service by SysCare IT Solutions. Our state-of-the-art private cloud solutions empower organizations with unparalleled flexibility, security, and scalability. Tailored to meet diverse business needs, SysCare Private Cloud ensures seamless data management, robust security protocols, and efficient resource utilization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Hosted Servers",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers state-of-the-art Hosted Servers (Virtual Machines), providing clients with a robust and scalable solution tailored to their business needs. Our advanced hosting services guarantee optimal performance, security, and flexibility.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
      title: "Dedicated Virtual Servers",
      icon: <FiCpu className="text-[#245684] text-2xl" />,
      content: "Elevate your digital capabilities with SysCare IT Solutions' Dedicated Virtual Servers. Tailored for optimal performance and reliability, our state-of-the-art infrastructure ensures seamless operations for your business.",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Virtual Desktops",
      icon: <FiCode className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions offers spectrum of services, including Virtual Desktops (VDI) and Remote Desktop Services (RDS). Elevate your business efficiency with our cutting-edge virtualization solutions.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a9e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Rack Space Hire",
      icon: <FiDatabase className="text-[#245684] text-2xl" />,
      content: "Elevate your business with SysCare IT Solutions' Rack Space Hire (Co-location) service. Our premium co-location offering provides a secure and efficient environment for your servers and equipment.",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Leased Servers",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers excellence in IT with its Leased Dedicated Physical Servers service. Elevate your business performance and security with our dedicated servers, exclusively assigned to meet your unique requirements.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
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

  useEffect(() => {
    const content = document.getElementById('service-content');
    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateX(20px)';
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateX(0)';
        content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      }, 50);
    }
  }, [activeTab]);

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
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                Our state-of-the-art private cloud solutions empower organizations with unparalleled flexibility, security, and scalability. Tailored to meet diverse business needs, SysCare Private Cloud ensures seamless data management, robust security protocols, and efficient resource utilization.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
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
              <div className="bg-white p-6 rounded-xl border border-[#e1e9f2] shadow-sm hover:shadow-md transition-shadow duration-500">
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

      {/* Services Overview - Vertical Tabs */}
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
      className="flex flex-col lg:flex-row gap-12"
      style={{
        opacity: isVisible[2] ? 1 : 0,
        transform: isVisible[2] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
      }}
    >
      {/* Vertical Tabs */}
      <div className="lg:w-1/3">
        <div className="space-y-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                activeTab === index
                  ? 'bg-[#103d5d] text-white shadow-lg'
                  : 'bg-[#f5f9fd] text-[#103d5d] hover:bg-[#e1e9f2]'
              }`}
              style={{
                transform: activeTab === index ? 'translateX(12px)' : 'none'
              }}
            >
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                  activeTab === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                }`}>
                  {React.cloneElement(service.icon, {
                    className: `${activeTab === index ? 'text-white' : 'text-[#245684]'} text-2xl`
                  })}
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div 
        id="service-content"
        className="lg:w-2/3 bg-[#f9fbfe] rounded-xl p-10 border border-[#e1e9f2] shadow-sm"
        style={{
          minHeight: '400px',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <div className="flex items-start mb-6">
          <div className="w-16 h-16 rounded-xl bg-[#f0f6ff] flex items-center justify-center mr-8">
            {services[activeTab].icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#103d5d] mt-2">{services[activeTab].title}</h3>
        </div>

        {/* Service Graphic - Now positioned under title but above description */}
        <div className="mb-8 bg-white p-4 rounded-lg border border-[#e1e9f2] shadow-sm">
          <img 
            src={services[activeTab].image}
            alt={`${services[activeTab].title} infrastructure`}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <p className="text-[#5c6f87] text-lg mb-8 leading-relaxed">{services[activeTab].content}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-[#245684] font-medium hover:underline group text-lg"
        >
          Learn more
          <FiChevronRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-24 bg-[#103d5d] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
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

export default ServiceDeskPage;
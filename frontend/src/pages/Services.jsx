import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';



const ServicesPage = () => {
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
      <header className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Services</h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-[#ffffff] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">SysCare Services</h2>
            <div className="w-24 h-1 bg-[#245684] mx-auto"></div>
            <p className="text-[#170f17] mt-4 max-w-2xl mx-auto">
              We offer a comprehensive range of IT services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#245684]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#103d5d] mb-2">{service.title}</h3>
                <p className="text-[#170f17]">{service.description}</p>
                <button className="mt-4 text-[#245684] font-semibold hover:underline">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#245684] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#103d5d] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#103d5d] transition">
              Call Now
            </button>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
};

export default ServicesPage;
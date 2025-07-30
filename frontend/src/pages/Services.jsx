import React from 'react';

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
      {/* Navigation */}
      <nav className="bg-[#103d5d] text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">TechSolutions</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-[#245684] transition">Home</a>
            <a href="#" className="hover:text-[#245684] transition">Services</a>
            <a href="#" className="hover:text-[#245684] transition">About</a>
            <a href="#" className="hover:text-[#245684] transition">Contact</a>
          </div>
          <button className="md:hidden">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Services for Modern Businesses</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering your business with cutting-edge technology solutions tailored to your needs.
          </p>
          <button className="bg-white text-[#103d5d] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">Our Services</h2>
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
      <section className="py-16 bg-[#245684] text-white">
        <div className="container mx-auto px-4 text-center">
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

      {/* Footer */}
      <footer className="bg-[#170f17] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechSolutions</h3>
              <p className="text-gray-400">
                Providing innovative digital solutions to help businesses grow and succeed.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#245684]">Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}><a href="#" className="hover:text-[#245684] transition">{service.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#245684]">Services</h4>
              <ul className="space-y-2">
                {services.slice(4).map((service, index) => (
                  <li key={index}><a href="#" className="hover:text-[#245684] transition">{service.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#245684]">Contact</h4>
              <address className="not-italic text-gray-400">
                <p>123 Tech Street</p>
                <p>Digital City, DC 10001</p>
                <p className="mt-2">Phone: (123) 456-7890</p>
                <p>Email: info@techsolutions.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
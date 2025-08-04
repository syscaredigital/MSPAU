import React, { useState } from 'react';

const HomePage = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Services Data
  const coreServices = [
    {
      id: 1,
      title: "Managed IT Services",
      description: "Proactive monitoring and maintenance to keep your systems running smoothly 24/7.",
      icon: "🛡️"
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud services tailored to your business needs.",
      icon: "☁️"
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital assets with advanced threat detection.",
      icon: "🔒"
    }
  ];

  const additionalServices = [
    {
      id: 4,
      title: "IT Consulting",
      description: "Expert advice to align your IT strategy with business goals and optimize technology investments.",
      icon: "💡"
    },
    {
      id: 5,
      title: "Network Infrastructure",
      description: "Design, implementation, and management of robust network solutions for optimal performance.",
      icon: "🌐"
    },
    {
      id: 6,
      title: "Data Backup & Recovery",
      description: "Reliable solutions to protect your critical data and ensure business continuity.",
      icon: "💾"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      quote: "SysCare transformed our IT infrastructure completely. Their team is knowledgeable and responsive.",
      author: "Sarah Johnson",
      company: "TechForward Inc.",
      rating: 5
    },
    {
      id: 2,
      quote: "The cybersecurity solutions they implemented gave us peace of mind we didn't have before.",
      author: "Michael Chen",
      company: "SecureData LLC",
      rating: 5
    },
    {
      id: 3,
      quote: "Excellent cloud migration services. We experienced minimal downtime thanks to their planning.",
      author: "Emily Rodriguez",
      company: "CloudNine Solutions",
      rating: 4
    }
  ];

  const toggleServices = () => {
    setShowAllServices(!showAllServices);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#103d5d] to-[#245684] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Businesses Through <span className="text-[#a3d4ff]">Innovative IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              SysCare IT Solutions delivers cutting-edge technology services to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-[#103d5d] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#103d5d] transition-colors duration-300">
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
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-6">About SysCare IT Solutions</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, SysCare IT Solutions has been at the forefront of delivering exceptional IT services to businesses of all sizes. Our team of certified professionals brings decades of combined experience in managing complex IT environments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We take pride in our customer-centric approach, ensuring that every solution we deliver aligns perfectly with your business objectives and growth strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#103d5d] text-white px-6 py-2 rounded-full">150+ Clients</div>
              <div className="bg-[#245684] text-white px-6 py-2 rounded-full">24/7 Support</div>
              <div className="bg-[#170f17] text-white px-6 py-2 rounded-full">Certified Experts</div>
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
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            
            {/* Additional Services - Shown when expanded */}
            {showAllServices && 
              additionalServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            }
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={toggleServices}
              className="px-8 py-3 bg-[#103d5d] text-white rounded-lg font-semibold hover:bg-[#245684] transition-colors duration-300"
            >
              {showAllServices ? 'Show Less Services' : 'View All Services'}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses across various industries for our reliable IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
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
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-[#245684]">{testimonial.author}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
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
            <button className="px-8 py-3 bg-[#245684] text-white rounded-lg font-semibold hover:bg-[#103d5d] transition-colors duration-300">
              Get a Free Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#170f17] transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#103d5d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SysCare IT Solutions</h3>
              <p className="mb-4">
                Delivering innovative IT solutions to help businesses thrive in the digital world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">Managed IT Services</a></li>
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">Network Infrastructure</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">Our Team</a></li>
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-[#a3d4ff] transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li> Address</li>
                <li>SUnit 12, Level 10, </li>
                <li>401 Docklands Drive, Docklands, VIC 3008</li>
                <li> Email</li>
                <li>info@syscare.com.au</li>
                <li> Phone</li>
                <li>1300 69 79 72</li>
              </ul>
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
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
      <div className="p-8 h-full flex flex-col">
        <div className="text-5xl mb-6">{service.icon}</div>
        <h3 className="text-2xl font-bold text-[#245684] mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <button className="text-[#103d5d] font-semibold hover:text-[#245684] transition-colors duration-300 flex items-center self-start">
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
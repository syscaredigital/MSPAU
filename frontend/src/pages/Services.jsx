import React from 'react';
import { FaTools, FaSolarPanel, FaHome, FaLeaf, FaWater, FaPlug } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Home Maintenance",
      description: "Professional home maintenance services across Sydney, Melbourne, and Brisbane. We handle everything from repairs to renovations.",
      icon: <FaHome className="text-4xl text-green-600" />,
      popular: true
    },
    {
      id: 2,
      title: "Solar Installation",
      description: "Australia's leading solar panel installation with government rebate assistance. Reduce your power bills with clean energy.",
      icon: <FaSolarPanel className="text-4xl text-yellow-500" />,
      popular: true
    },
    {
      id: 3,
      title: "Plumbing Services",
      description: "24/7 emergency plumbing services. Licensed plumbers serving all major Australian cities with same-day service.",
      icon: <FaWater className="text-4xl text-blue-500" />,
      popular: false
    },
    {
      id: 4,
      title: "Electrical Work",
      description: "Fully certified electricians for all your residential and commercial needs. Safety inspections and smart home installations.",
      icon: <FaPlug className="text-4xl text-red-500" />,
      popular: false
    },
    {
      id: 5,
      title: "Eco-Friendly Solutions",
      description: "Sustainable home solutions including rainwater tanks, greywater systems, and energy-efficient upgrades.",
      icon: <FaLeaf className="text-4xl text-green-500" />,
      popular: true
    },
    {
      id: 6,
      title: "Handyman Services",
      description: "Trusted local handymen for all those odd jobs around your home. No job too small!",
      icon: <FaTools className="text-4xl text-orange-500" />,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Australian-Owned Services</h1>
          <p className="text-xl md:text-2xl mb-8">Trusted local professionals serving communities across Australia</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Book a Service
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-full"></div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide high-quality services to homes and businesses across Australia. Proudly serving communities from Perth to the Gold Coast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${service.popular ? 'border-2 border-yellow-400' : 'border border-gray-200'}`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-green-600 font-semibold hover:text-green-800 transition duration-300">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Australian Guarantee Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Australian Service" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Australian Guarantee</h2>
              <p className="text-lg text-gray-600 mb-6">
                As an Australian-owned business, we're committed to providing services that meet the highest standards. All our tradespeople are fully licensed and insured.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">100% Australian owned and operated</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Serving metro and regional areas</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The solar installation team was fantastic! They explained everything clearly and finished ahead of schedule.",
                name: "Sarah K., Brisbane",
                rating: 5
              },
              {
                quote: "Finally found a reliable plumber in Melbourne who actually turns up on time. Highly recommend!",
                name: "Michael T., Melbourne",
                rating: 5
              },
              {
                quote: "Great service from a local Perth business. The electrician fixed our issue quickly and charged fairly.",
                name: "Lisa M., Perth",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-800 to-green-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Australian Service Excellence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free quote or to book a service with our local professionals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full transition duration-300">
              Call Now: 1300 123 456
            </button>
            <button className="bg-transparent hover:bg-white hover:text-green-800 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
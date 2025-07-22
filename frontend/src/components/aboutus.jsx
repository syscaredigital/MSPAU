import React, { useState, useEffect } from 'react';
import { FaServer, FaUsers, FaCode, FaShieldAlt, FaChartLine, FaRocket } from 'react-icons/fa';
import { MdSecurity, MdSupportAgent, MdCloud } from 'react-icons/md';
import CountUp from 'react-countup';
import Tilt from 'react-tilt';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: 200, label: 'Clients Worldwide', icon: <FaUsers className="text-3xl" /> },
    { value: 15, label: 'Years Experience', icon: <FaChartLine className="text-3xl" /> },
    { value: 500, label: 'Projects Delivered', icon: <FaCode className="text-3xl" /> },
    { value: 99, label: 'Uptime %', icon: <FaServer className="text-3xl" /> },
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in cloud architecture & cybersecurity.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'CTO',
      bio: 'AI & blockchain expert. Leads R&D at SysCare.',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack wizard with a passion for automation.',
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      id: 4,
      name: 'Priya Patel',
      role: 'Customer Success',
      bio: 'Ensures seamless IT transitions for clients.',
      img: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
  ];

  const services = [
    {
      title: 'Cloud Solutions',
      desc: 'Scalable, secure cloud infrastructure tailored for your business.',
      icon: <MdCloud className="text-4xl text-cyan-400" />,
    },
    {
      title: 'Cybersecurity',
      desc: 'Enterprise-grade protection against evolving threats.',
      icon: <MdSecurity className="text-4xl text-purple-400" />,
    },
    {
      title: 'IT Support',
      desc: '24/7 expert assistance for uninterrupted operations.',
      icon: <MdSupportAgent className="text-4xl text-blue-400" />,
    },
    {
      title: 'Digital Transformation',
      desc: 'Future-proof your business with cutting-edge tech.',
      icon: <FaRocket className="text-4xl text-pink-400" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* **Hero Section - Digital Glow Effect** */}
      <div className="relative py-32 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            About <span className="text-white">SysCare</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
            We’re a <span className="font-bold text-cyan-400">digital-first</span> IT solutions provider, blending innovation with reliability to power your business forward.
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            Explore Our Tech
          </button>
        </div>
      </div>

      {/* **Glowing Stats Section** */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              By The Numbers
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Tilt key={index} options={{ max: 15, scale: 1.05 }}>
                <div className="bg-gray-700 bg-opacity-50 backdrop-blur-md p-8 rounded-xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 text-center hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-cyan-400 flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-4xl font-bold mb-2">
                    {isVisible ? (
                      <CountUp end={stat.value} duration={3} suffix={stat.label === 'Uptime %' ? '%' : '+'} />
                    ) : (
                      '0'
                    )}
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      {/* **3D Flip Team Cards** */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Meet The Brains
            </span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            The innovators, problem-solvers, and tech enthusiasts behind SysCare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Tilt key={member.id} options={{ max: 15, scale: 1.05, glare: true, "max-glare": 0.3 }}>
                <div className="relative group h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg transition-all duration-500 transform group-hover:rotate-y-180">
                    <div className="h-full flex flex-col justify-center items-center p-6 text-center">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-32 h-32 rounded-full border-4 border-white mb-4"
                      />
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-cyan-200 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gray-800 rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center transform rotate-y-180">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-cyan-400 mb-4">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>

      {/* **Neon Glow Services** */}
      <div className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              What We Offer
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-700 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* **CTA - Futuristic Glow Button** */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Elevate</span> Your IT?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Let’s build something extraordinary together.
          </p>
          <button className="relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold overflow-hidden group">
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-0 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
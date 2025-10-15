import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';
import { FaHeadset, FaChevronRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


// Import your local images
import aboutUs1 from '../assets/website-images/about-us/about-us1.jpg';
import aboutUs2 from '../assets/website-images/about-us/about-us2.jpg';
import aboutUs3 from '../assets/website-images/about-us/about-us3.jpg';
import aboutUs4 from '../assets/website-images/about-us/about-us4.jpg';
import aboutUs5 from '../assets/website-images/about-us/about-us5.jpg';


// Header Component
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Navigation />
    </header>
  );
};

// Image Gallery Component
const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: aboutUs1,
      alt: "Our Modern Office Space",
      title: "Modern Workspace",
      description: "Our state-of-the-art office designed for collaboration and innovation"
    },
    {
      id: 2,
      src: aboutUs2,
      alt: "Team Collaboration",
      title: "Team Collaboration",
      description: "Our experts working together to deliver exceptional IT solutions"
    },
    {
      id: 3,
      src: aboutUs3,
      alt: "Advanced Server Room",
      title: "Infrastructure",
      description: "Secure and reliable infrastructure powering our services"
    },
    {
      id: 4,
      src: aboutUs4,
      alt: "Client Meeting",
      title: "Client Partnership",
      description: "Building lasting relationships with our valued clients"
    },
    {
      id: 5,
      src: aboutUs5,
      alt: "Award Ceremony",
      title: "Industry Recognition",
      description: "Celebrating excellence and innovation in IT services"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#245684] font-semibold uppercase tracking-wider">
              GALLERY
            </span>
            
            <div className="w-24 h-1 bg-[#245684] mx-auto mb-4"></div>
            
          </div>

          {/* Main Gallery Image */}
          <div className="mb-8 relative group">
            <div 
              className="relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
              onClick={() => openModal(currentIndex)}
            >
              <img 
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <FaArrowLeft className="text-[#245684]" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <FaArrowRight className="text-[#245684]" />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-[#245684] scale-105' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                onClick={() => goToImage(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  index === currentIndex ? 'bg-[#245684] bg-opacity-20' : 'bg-black bg-opacity-0'
                } transition-all duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Image Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-600 font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      </section>

      {/* Modal for Full-size Image View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-[#a3d4ff] transition-colors duration-300"
            >
              ✕
            </button>
            
            <div className="relative">
              <img 
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              
            </div>

            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const AboutUs = () => {
  const [animatedStats, setAnimatedStats] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Existing stats animation logic
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimatedStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Use the Header component */}
      <Header />
      
      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Contact Header Section (from Contact Page) */}
        <div className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white pb-32 pt-24 md:pt-32 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white"></div>
            <div className="absolute bottom-20 right-16 w-48 h-48 rounded-full border-2 border-white"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 animate-float">
            <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          <div className="absolute bottom-40 right-32 animate-float-delayed">
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          <div className="absolute top-1/2 left-1/3 animate-float">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  About <span className="text-[#a3c1e0]">SysCare</span>
                </h1>
                <p className={`text-md text-[#c9d8eb] mb-8 max-w-lg transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  At SysCare IT Solutions Pty Ltd, we are more than just a technology provider, we are your trusted IT partner.
                </p>
                <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <a href="#stats-section" className="bg-white text-[#103d5d] px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center">
                    Our Story <FaChevronRight className="ml-2" />
                  </a>
                  <a href="#gallery" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d]">
                    View Gallery
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className={`relative transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="absolute -inset-6 bg-[#a3c1e0] rounded-2xl rotate-3 opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#103d5d] flex items-center justify-center">
                        <FaHeadset className="text-4xl text-[#a3c1e0]" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Since 2012</h3>
                      <p className="text-[#c9d8eb]">With years of experience as a Managed Services Provider in Australia, we support businesses across Melbourne and Sydney with reliable IT solutions and proactive managed security services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section with Animated Stats */}
        <section id="stats-section" className="py-16 bg-white px-4 sm:px-6 lg:px-8 -mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#245684] font-semibold uppercase tracking-wider animate-fadeIn">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mt-2 mb-4 animate-fadeIn">
                About SysCare IT Solutions
              </h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto animate-grow"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 animate-slideInLeft">
                <div className="bg-[#103d5d] p-1 rounded-lg inline-block mb-6 hover:rotate-6 transition-transform duration-300">
                  <div className="bg-white p-3 rounded-md text-[#103d5d] text-3xl">
                    ⌘
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#170f17] mb-4">Our Background </h3>
                <p className="text-gray-700 mb-6">
                  Technology without security is a risk no business can afford. That's why SysCare is not only a trusted Managed Services Provider in Australia but also a highly skilled Managed Security Service Provider (MSSP). Our security-first approach ensures your data, systems, and networks remain safe from ever-changing cyber threats.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Trust & Integrity – Building long-term partnerships with transparency.",
                    "Innovation – Delivering modern IT solutions that drive growth.", 
                    "Reliability – Providing consistent, 24/7 support when you need it most.",
                    "Customer Success – Your business goals are at the heart of what we do."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <div className="mt-1 mr-3">
                        <div className="w-3 h-3 rounded-full bg-[#245684] group-hover:animate-pulse"></div>
                      </div>
                      <span className="text-gray-700 group-hover:text-[#103d5d] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 grid grid-cols-2 gap-6 animate-slideInRight">
                {[
                  { value: "12+", label: "Years of Experience" },
                  { value: "150+", label: "Satisfied Clients" },
                  { value: "100+", label: "Successful Projects" },
                  { value: "20+", label: "Employees" }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#245684] hover:shadow-lg transition-shadow">
                    <div className={`text-3xl font-bold text-[#103d5d] mb-2 ${animatedStats ? 'animate-countUp' : ''}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                    <div className="mt-4 h-1 w-full bg-gray-200 overflow-hidden">
                      <div 
                        className="h-1 bg-[#245684] animate-progress" 
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 bg-[#f8fafc] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white text-sm font-medium rounded-full mb-4 shadow-md">
                OUR CORE PURPOSE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-6">
                Building <span className="text-[#245684]">Tomorrow's</span> Technology
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#a3d4ff] to-[#245684] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card - Using gradient background */}
              <div className="bg-gradient-to-br from-[#103d5d] to-[#1a3d6b] p-0.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="h-full bg-white rounded-xl p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#103d5d] to-[#245684] flex items-center justify-center text-white text-2xl shadow-md">
                    👁️
                  </div>
                  <h3 className="text-2xl font-bold text-[#103d5d] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 mb-6">
                    At SysCare IT Solutions, our vision is to become the most trusted IT partner and leading Managed Security Service Provider in Australia, recognized for delivering excellence in technology and cybersecurity. We aim to shape a safer digital future for businesses in Melbourne, Sydney, and beyond by combining innovation, expertise, and customer-first service.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Innovation", "Boundless", "Future"].map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-[#e6f2ff] text-[#103d5d] rounded-full text-sm font-medium hover:bg-[#a3d4ff] transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mission Card - Using brand accent color */}
              <div className="bg-gradient-to-br from-[#245684] to-[#a3d4ff] p-0.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="h-full bg-white rounded-xl p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#245684] to-[#a3d4ff] flex items-center justify-center text-white text-2xl shadow-md">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold text-[#245684] mb-4">
                    Our Mission as an MSP
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our mission is simple: to make technology work seamlessly for your business. As an experienced MSP with proven expertise, we focus on delivering proactive, secure, and scalable IT solutions that reduce downtime, improve productivity, and keep your business protected against evolving cyber threats.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Excellence", "Security", "Innovation"].map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-[#e6f2ff] text-[#245684] rounded-full text-sm font-medium hover:bg-[#a3d4ff] transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values with Brand Colors */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-[#103d5d] text-center mb-8">
                Core Values of SysCare IT Solutions
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    icon: "💡", 
                    title: "Proactive Innovation", 
                    desc: "We stay ahead of technology trends and cyber threats, delivering forward-thinking IT and security solutions that future-proof your business.",
                    bg: "bg-[#e6f2ff]",
                    text: "text-[#103d5d]",
                    border: "border-[#103d5d]"
                  },
                  { 
                    icon: "🛡️", 
                    title: "Uncompromising Security", 
                    desc: "Protecting your business is our top priority. We embed security into every service we provide, ensuring your systems, data, and people remain safe.",
                    bg: "bg-[#d9e8ff]",
                    text: "text-[#1a3d6b]",
                    border: "border-[#1a3d6b]"
                  },
                  { 
                    icon: "🏆", 
                    title: "Client-Centric Partnership", 
                    desc: " We don't just provide IT services we build lasting partnerships by understanding your goals and aligning our solutions with your success.",
                    bg: "bg-[#cde0ff]",
                    text: "text-[#245684]",
                    border: "border-[#245684]"
                  },
                  { 
                    icon: "❤️", 
                    title: "Excellence Through Reliability", 
                    desc: "From 24/7 support to seamless IT management, we are committed to delivering consistent, dependable services that your business can trust.",
                    bg: "bg-[#a3d4ff]",
                    text: "text-[#103d5d]",
                    border: "border-[#103d5d]"
                  }
                ].map((value, i) => (
                  <div 
                    key={i} 
                    className={`p-6 rounded-lg border-2 ${value.border} ${value.bg} hover:shadow-lg transition-all duration-300 group`}
                  >
                    <div className={`text-4xl mb-4 ${value.text} group-hover:scale-110 transition-transform`}>
                      {value.icon}
                    </div>
                    <h4 className={`text-xl font-bold ${value.text} mb-2`}>{value.title}</h4>
                    <p className={`${value.text} opacity-90`}>{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <div id='gallery'>
          <ImageGallery />
        </div>
        

        {/* Team Section */}
        <section id="team" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#245684] font-semibold uppercase tracking-wider animate-fadeIn">
                OUR TEAM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mt-2 mb-4 animate-fadeIn">
                Meet Our Leadership
              </h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto animate-grow"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto animate-fadeIn">
                Our dedicated team, based in Melbourne and Sydney, is made up of IT specialists, security experts, and customer-focused professionals who share one vision: to empower businesses through technology.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Elena Petrova",
                  title: "Quantum Computing Specialist",
                  role: "CTO",
                  experience: "15+ years",
                  skills: ["AI", "ML", "QC"]
                },
                {
                  name: "Markus Reinhardt",
                  title: "Blockchain Security Expert",
                  role: "CSO",
                  experience: "12+ years",
                  skills: ["Sec", "Crypto", "ZeroTrust"]
                },
                {
                  name: "Priya Desai",
                  title: "Data Science Lead",
                  role: "CDO",
                  experience: "10+ years",
                  skills: ["BigData", "AI", "BI"]
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-[#a3d4ff]"
                >
                  <div className="relative h-48 bg-gradient-to-r from-[#103d5d] to-[#245684]">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <div className="flex justify-between">
                        <span>{member.role}</span>
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#170f17]">{member.name}</h4>
                    <p className="text-gray-600 mb-4">{member.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-[#245684] hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#000000] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center mb-4 px-4 py-2 bg-white bg-opacity-10 rounded-full animate-pulse">
                <div className="w-2 h-2 mr-2 rounded-full bg-[#a3d4ff]"></div>
                <span className="text-sm font-medium">Choosing SysCare means ?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
                Experience with <span className="bg-gradient-to-r from-[#a3d4ff] to-white bg-clip-text text-transparent">a professional IT services </span>provider
              </h2>
              <p className="text-md mb-8 opacity-90 animate-fadeIn">
                With local expertise in Melbourne and Sydney, and national capabilities across Australia, we are here to help your business succeed securely. To learn more about how SysCare IT Solutions can be the IT partner your business can trust.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
                <a href="/contact-us" className="bg-white text-[#103d5d] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition flex items-center justify-center hover:scale-105">
                  <span>Request Free Tech Audit</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <a href="/syscare-services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#103d5d] transition flex items-center justify-center hover:scale-105">
                  <span>Explore Our Services</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer/>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes grow {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes countUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes progress {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes slideInLeft {
            from { 
              opacity: 0;
              transform: translateX(-50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from { 
              opacity: 0;
              transform: translateX(50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float 6s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-grow {
            animation: grow 1s ease-out forwards;
          }
          
          .animate-countUp {
            animation: countUp 2s ease-out forwards;
          }
          
          .animate-progress {
            animation: progress 2s ease-out forwards;
          }
          
          .animate-slideInLeft {
            animation: slideInLeft 1s ease-out forwards;
          }
          
          .animate-slideInRight {
            animation: slideInRight 1s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AboutUs;